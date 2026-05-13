/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_25b.xml 111652 34c134e16ac0a9e0a70af55b5c21522d79422b04d094724ce9ae68c195c9d7e3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_recptClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExportOnRequest',saveRemovedData:'true','ev:ondataload':'scwin.ds_ExportOnRequest_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gridChkBox',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqGoodsSeq',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'오더수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnt',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'총매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcSellAmt',name:'총청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'정산',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlNm',name:'상차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onIntendDt',name:'상차예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnWrkPlCd',name:'반입지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnWrkPlNm',name:'반입지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinIntendPrdDt',name:'반입예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNm',name:'DPCT수신내용',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'자가운송거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pickuprgnCd',name:'픽업지역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'규격 & 컨테이너 구분자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CommCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Code',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'param1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_retrieve','ev:ondataload':'scwin.ds_retrieve_ondataload',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgBookingNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntPic',name:'실화주거래처담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntCntctPl',name:'실화주거래처연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntPicCntct',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnCd',name:'DOOR지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'DOOR명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorPic',name:'DOOR담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorCntctPl',name:'DOOR연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errEtcRsn',name:'오류기타사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntF20',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntF45',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selfTransPicEmpNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntTelNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntMpNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntNo',name:'포워드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntPic',name:'포워드담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'middleClntCntctPl',name:'포워드연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrict',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun2',name:'구분2(권역)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun1',name:'구분1(ZZ2:WIL1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'onIntendDd',name:'상차예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expNrmYn',name:'수출규격여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'컨테이너개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpctYn',name:'DPCT여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lane',name:'항로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickuprgnCd',name:'PICKUP 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcUnqItm',name:'기타특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'선청구대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'오더조정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'양하항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeRmk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeRmkNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'evidenceFileYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startCd',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeVanTerm',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'liVanTerm',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'masterKey',name:'마스터키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'forceLblock',name:'강제블럭지정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'BLBK_번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizTyp',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitClsCd',name:'name83',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve2',saveRemovedData:'true','ev:ondataload':'scwin.ds_retrieve2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqMchtNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExportOnRequestEachCnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkFlg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gridChkBox',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqGoodsSeq',name:'상차요청품목순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'요청수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'errNm',name:'오류명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExportOnRequest',saveRemovedData:'true','ev:ondataload':'scwin.ds_ExportOnRequest_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkFlg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gridChkBox',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqGoodsSeq',name:'상차요청품목순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nrm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onIntendDt',name:'상차예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnWrkPlCd',name:'반납작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinIntendPrdDt',name:'반입예정기한일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnt',name:'승인개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'onPrgsStsCd',name:'상차진행상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closingTime',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcSellAmt',name:'유류할인비용',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNm',name:'오류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpctYn',name:'DPCT여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookingInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_bookingInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procClsCd',name:'처리구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dropPortCd',name:'적하항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transShapeCd',name:'운송형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPointStnClsCd',name:'출발지역구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorWrkPlCd',name:'DOOR작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorWrkPlNm',name:'DOOR작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorPicNm',name:'DOOR담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorPicTelNo',name:'DOOR담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickupdt',name:'PICK_UP_일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickuphh',name:'PICKUP시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarReqDt',name:'배차요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarReqHh',name:'배차요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqMchtNm',name:'요청화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPicNm',name:'요청담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPicTelNo',name:'요청담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgMchtNm',name:'청구화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'청구담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicTelNo',name:'청구담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtNo',name:'실화주번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPicNm',name:'실담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPicTelNo',name:'실담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingPortCd',name:'선적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingPortNm',name:'선적항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPortCd',name:'양하항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPortNm',name:'양하항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfYn',name:'자가구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoPicNm',name:'운송업체담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송업체전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPicNm',name:'선사담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatDt',name:'오더생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatHh',name:'오더생성시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatId',name:'오더생성자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'DTM(148):수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvHh',name:'수신시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmHh',name:'확인시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmPicId',name:'확인담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediYn',name:'EDI여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmPicNm',name:'확인담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDtm',name:'마감일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarReqDtm',name:'배차요청일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDtm',name:'수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrCreateDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrDcsnYn',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomOdrDcsnDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrCompleteYn',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomOdrCompleteDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yr',name:'년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cfsYn',name:'CFS여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gateQty',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'remainQty',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'printYn',name:'상차증발행여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selcYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hlcClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hlcCntrNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_commInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrmCd',name:'컨테이너규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gateQty',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'OVER_LENGTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'OVER_HEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'OVER_WIDTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickupdt',name:'PICK_UP_일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickuphh',name:'PICKUP시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expiredt',name:'만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hlcClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hlcCntrNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bookingNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateQty',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_conditionCnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveCnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cnt',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_recptClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP179',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_recptClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_recptClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=OnRequestAdmissionEBC&queryId=retrieveExportCommCd',method:'post',mediatype:'application/json',ref:'data:json,dma_commCd',target:'data:json,{"id":"ds_CommCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveExportOnRequestAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"},{"id":"ds_ExportOnRequestEachCnt","key":"OUT_DS2"},{"id":"ds_ExportOnRequest","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_retrieve","key":"OUT_DS1"},{"id":"ds_ExportOnRequestEachCnt","key":"OUT_DS2"},{"id":"ds_ExportOnRequest","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:'',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_bkRetrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndInfo","key":"IN_DS1"},{"id":"ds_bookingInfo","key":"OUT_DS1"},{"id":"ds_commInfo","key":"OUT_DS2"},{"id":"ds_cntrInfo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_bookingInfo","key":"OUT_DS1"},{"id":"ds_commInfo","key":"OUT_DS2"},{"id":"ds_cntrInfo","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bkRetrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveExportOnRequest',action:'/ds.op.wrkrslts.cywrkrslts.SaveExportOnRequestAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_ExportOnRequest","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveExportOnRequest_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retreiveCnt',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveOnRequestOrderContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_conditionCnt","key":"IN_DS1"},{"id":"ds_retrieveCnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveCnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createExportGeneralOrder',action:'/ds.op.wrkrslts.cywrkrslts.CreateExportGeneralOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_ExportOnRequest","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createExportGeneralOrder_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ds.op.wrkrslts.cywrkrslts.CancelExportOnRequestAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 추후 수정 계획
// 작업 경로 수정 팝업 미작업, 개발 후 연결 (하차요쳥, 작업경로 수정, 수출 매출 청구내역);

//-------------------------------------------------------------------------
// 화면내 전역변수 
//-------------------------------------------------------------------------
scwin.hid_srchSelfTransCoCd = "";
scwin.obj = null;
scwin.MSG_OP_INF_001 = "Booking 내역의 오더번호를 지정하십시오.";
scwin.MSG_OP_INF_002 = "Booking 번호를 입력하세요.";
scwin.MSG_OP_INF_003 = "오더 번호가 이미 지정이 되어 있습니다.";
scwin.MSG_OP_INF_004 = "승인구분이 오류일 경우에만 조회가능합나다.";
scwin.MSG_OP_INF_005 = "오류인 경우 선택/확인 버튼을 이용하여 주십시오.";
scwin.MSG_OP_INF_006 = "오더가 생성되었습니다.";
//scwin.MSG_OP_INF_007 = "저장버튼을 눌러 오더를 삭제하시기 바랍니다.";
scwin.MSG_OP_ERR_011 = "해당 요청건은 접수 또는 오류처리만 가능한 요청입니다.";
scwin.MSG_OP_ERR_001 = "오더번호는 이미 생성되어 있습니다";
scwin.MSG_OP_ERR_002 = "수출상차 요청 승인 내역이 없어, 오더를 생성할 수 없습니다";
scwin.MSG_OP_ERR_003 = "승인 구분이 @인 경우만 가능합니다.";
scwin.MSG_OP_ERR_004 = "오더 번호가 존재하지 않습니다. 오더 번호를 확인 하세요.";
scwin.MSG_OP_CFM_001 = "승인을 취소하시겠습니까?";
scwin.MSG_OP_INF_008 = "승인취소 후, 오류 처리 하세요. ";

// 그리드 편집시 데이터값 비교 위한 전역변수
scwin.oldData = "";
scwin.bf_admitClsCd = "";

// 호출화면 파라미터 및 서버 정보
scwin.nowDt = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.nextDt = $c.date.addDate($p, scwin.nowDt, 1);
scwin.menuList = ["규격별 상차 승인 내역", "컨테이너별 상차 승인 내역"];
scwin.param = "";
scwin.selfTransClntNo = "";
scwin.onReqNo = "";
scwin.selfTransClntNm = "";
scwin.lineCd = "";
scwin.pickuprgnCd = "";
scwin.eventCnt = 0;

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tb_srchCond]))) {
    return;
  }
  if (ed_srchSelfTransCoCd.getValue() == "" || ed_srchSelfTransCoCd.getValue() == "undefined") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "자가운송사"));
    return;
  }
  if (ed_srchOnReqNo.getValue() == "" || ed_srchOnReqNo.getValue() == "undefined") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "상차 요청 번호"));
    ed_srchOnReqNo.focus();
    return;
  }
  dma_condition.set("selfTransClntNo", ed_srchSelfTransCoCd.getValue());
  dma_condition.set("impExpClsCd", "D"); //수출입구분

  dma_condition.set("onReqNo", ed_srchOnReqNo.getValue());
  dma_condition.set("stDt", "00010101");
  dma_condition.set("endDt", "99991231");
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// UDC 세팅
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // acb_admitClsCd.setEventPause("onchange", true);    
  // 호출 파라미터 재할당
  scwin.param = $c.data.getParameter($p);
  scwin.selfTransClntNo = scwin.param.selfTransClntNo == null ? "" : scwin.param.selfTransClntNo;
  scwin.onReqNo = scwin.param.onReqNo == null ? "" : scwin.param.onReqNo;
  scwin.selfTransClntNm = scwin.param.selfTransClntNm == null ? "" : scwin.param.selfTransClntNm;
  scwin.lineCd = scwin.param.lineCd == null ? "" : scwin.param.lineCd;
  scwin.pickuprgnCd = scwin.param.pickuprgnCd == null ? "" : scwin.param.pickuprgnCd;
  dma_condition.set("selfTransClntNo", scwin.selfTransClntNo);
  dma_condition.set("onReqNo", scwin.onReqNo);
  dma_condition.set("lineCd", scwin.lineCd);
  dma_condition.set("pickuprgnCd", scwin.pickuprgnCd);

  // 접수 구분
  $c.sbm.execute($p, sbm_recptClsCd);
  ed_srchSelfTransCoCd.setValue(scwin.selfTransClntNo);
  ed_srchOnReqNo.setValue(scwin.onReqNo);
  if (dma_condition.get("selfTransClntNo") != "" || dma_condition.get("onReqNo") != "") {
    scwin.btn_retrieve_onclick();
  }
  dma_commCd.set("param1", dma_condition.get("selfTransClntNo"));
  dma_commCd.set("param2", ds_retrieve.getCellData(0, "onReqNo"));
  tb_trBookingInfo2.setStyle("display", "none");

  // $c.gus.cfDisableObjects([ed_bookingNo, rd_dpctYn, rd_sellYn, btn_bookingNo]);
  $c.gus.cfDisableObjects($p, [ed_bookingNo, rd_dpctYn, rd_sellYn]);
  // ed_srchSelfTransCoCd.focus();
  ed_txt_srchSelfTransCoCd.setValue(scwin.selfTransClntNm);

  // TextBox readonly처리 필요 , 화면내내 풀지 않음
  ed_odrNo.setReadOnly(true);

  // asis에서 배경색은 disable이지만 실제론 입력이 가능하여 배경색만 변경
  ed_vsslNm.setStyle("background-color", "#F2F2F2");
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_srchSelfTransCoCd, ed_txt_srchSelfTransCoCd, ed_srchOnReqNo]);
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회 성공시
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  // 서브미션 실패하여도 흐르지 않도록
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      return; //onFail
    }
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_retrieve_ondataload = function () {
  let rowCnt = ds_retrieve.getTotalRow();
  ds_retrieve.setRowPosition(0);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  } else {
    if (ds_retrieve.getCellData(0, "odrNo") == "") {
      $c.gus.cfDisableObjects($p, [btn_save, btn_cancel]);
      $c.gus.cfEnableObjects($p, [rd_sellYn]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_save]);
      $c.gus.cfDisableObjects($p, [rd_sellYn]);
      if (ds_retrieve.getCellData(0, "admitClsCd") == "O") {
        $c.gus.cfEnableObjects($p, [btn_cancel]);
      } else if (ds_retrieve.getCellData(0, "admitClsCd") == "C") {
        gr_exportOnRequest.setGridReadOnly(true);
      }
    }
    if (ds_retrieve.getCellData(0, "lineCd") == "WHL" || ds_retrieve.getCellData(0, "lineCd") == "IAL" && ds_retrieve.getCellData(0, "lane") != "KSI") {
      gr_exportOnRequest.setGridReadOnly(true);
    }
    if (ds_retrieve.getCellData(0, "bookingNo") == "" && ds_retrieve.getCellData(0, "blNo") != "") {
      $c.gus.cfDisableObjects($p, [ed_bookingNo, rd_dpctYn, rd_sellYn, btn_bookingNo]);
      $c.gus.cfDisableObjects($p, [ed_bookingNo, rd_dpctYn, rd_sellYn, btn_bookingNo]);
      // $c.gus.cfDisableObjects([udc_bookingNo]);
    } else {
      btn_bookingNo.setDisabled(false);
      ed_bookingNo.setValue(ds_retrieve.getCellData(0, "bookingNo"));
      $c.gus.cfDisableObjects($p, [ed_bookingNo, rd_dpctYn]);
      $c.gus.cfEnableObjects($p, [btn_bookingNo]);
    }
  }
  for (i = 0; i < ds_retrieve.getTotalRow(); i++) {
    ds_retrieve.setCellData(i, "odrCtrlClsCd", ds_ExportOnRequest.getCellData(i, "rtrnWrkPlCd"));
  }

  //SKR라인이고, 수출건이면 양하항(trBookingInfo2) 보여주기
  //TS라인의 경우 BOOKING정보를 가져옴
  //SITC PRISM OPEN ( NOLS , SOFC , TCLC ) Added, 2014.09.22 TMSC라인 추가
  if (ds_retrieve.getCellData(0, "lineCd") == "TSL" || ds_retrieve.getCellData(0, "lineCd") == "SITC" || ds_retrieve.getCellData(0, "lineCd") == "SKR" || ds_retrieve.getCellData(0, "lineCd") == "NOLS" || ds_retrieve.getCellData(0, "lineCd") == "SOFC" || ds_retrieve.getCellData(0, "lineCd") == "TCLC" || ds_retrieve.getCellData(0, "lineCd") == "TMSC" || ds_retrieve.getCellData(0, "lineCd") == "DWH" || ds_retrieve.getCellData(0, "lineCd") == "JJS" || ds_retrieve.getCellData(0, "lineCd") == "MAS") {
    //조회조건값 셋팅
    ds_cndInfo.setJSON([]);
    ds_cndInfo.insertRow();
    ds_cndInfo.setCellData(0, "lineCd", ds_retrieve.getCellData(0, "lineCd"));
    ds_cndInfo.setCellData(0, "bookingNo", ds_retrieve.getCellData(0, "bookingNo"));
    if (ds_cndInfo.getCellData(0, "bookingNo") != "") {
      $c.sbm.execute($p, sbm_bkRetrieve);
    }
  } else {
    //테이블 보여줌
    tb_trBookingInfo2.setStyle("display", "none");
  }

  // ed_onReqNo.setValue(ds_retrieve.getCellData(0, "onReqNo"));
  // ed_bookingNo.setValue(ds_retrieve.getCellData(0, "bookingNo"));
  // ed_shpCoNm.setValue(ds_retrieve.getCellData(0, "shpCoNm"));
  // ed_vsslCd.setValue(ds_retrieve.getCellData(0, "vsslCd"));
  // ed_vsslNm.setValue(ds_retrieve.getCellData(0, "vsslNm"));
  // ed_portcnt.setValue(ds_retrieve.getCellData(0, "portcnt"));
  // ed_odrNo.setValue(ds_retrieve.getCellData(0, "odrNo"));
  // ed_lineNm.setValue(ds_retrieve.getCellData(0, "lineNm"));
  // ed_rmk.setValue(ds_retrieve.getCellData(0, "rmk"));
  // ed_selfTransClntNm.setValue(ds_retrieve.getCellData(0, "selfTransClntNm"));
  // ed_selfTransPicEmpNm.setValue(ds_retrieve.getCellData(0, "selfTransPicEmpNm"));
  // ed_selfTransClntTelNo.setValue(ds_retrieve.getCellData(0, "selfTransClntTelNo"));
  // ed_reqClntNm.setValue(ds_retrieve.getCellData(0, "reqClntNm"));
  // ed_bilgClntNm.setValue(ds_retrieve.getCellData(0, "bilgClntNm"));
  // ed_realMchtClntNm.setValue(ds_retrieve.getCellData(0, "realMchtClntNm"));
  // ed_realMchtClntPicCntct.setValue(ds_retrieve.getCellData(0, "realMchtClntPicCntct"));
  // ed_doorNm.setValue(ds_retrieve.getCellData(0, "doorNm"));
  // ed_doorPic.setValue(ds_retrieve.getCellData(0, "doorPic"));
  // ed_doorRgnNm.setValue(ds_retrieve.getCellData(0, "doorRgnNm"));
  // ed_doorCntctPl.setValue(ds_retrieve.getCellData(0, "doorCntctPl"));
  // acb_admitClsCd.setValue(ds_retrieve.getCellData(0, "admitClsCd"));
  // ed_errEtcRsn.setValue(ds_retrieve.getCellData(0, "errEtcRsn"));
  // txa_odrRmk.setValue(ds_retrieve.getCellData(0, "odrRmk"));
  // rd_dpctYn.setValue(ds_retrieve.getCellData(0, "dpctYn"));
  // rd_sellYn.setValue(ds_retrieve.getCellData(0, "sellYn"));
  // ed_dchrPort.setValue(ds_retrieve.getCellData(0, "dchrPort"));

  scwin.bf_admitClsCd = ds_retrieve.getCellData(0, "admitClsCd");
};

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_retrieve2_ondataload = function () {
  ed_vsslNmInfo.setValue(ds_retrieve2.getCellData(0, "vsslNm"));
  ed_arvWrkPlNmInfo.setValue(ds_retrieve2.getCellData(0, "arvWrkPlNm"));
  ed_dchrPortCdInfo.setValue(ds_retrieve2.getCellData(0, "destPortCd"));
  ed_reqMchtNmInfo.setValue(ds_retrieve2.getCellData(0, "reqMchtNm"));
  ed_transCoNmInfo.setValue(ds_retrieve2.getCellData(0, "transCoNm"));
};

//-------------------------------------------------------------------------
// Booking 정보 데이터 로드 시 
//-------------------------------------------------------------------------
scwin.ds_bookingInfo_ondataload = function () {
  ed_vsslNmInfo.setValue(ds_bookingInfo.getCellData(0, "vsslNm"));
  ed_arvWrkPlNmInfo.setValue(ds_bookingInfo.getCellData(0, "arvWrkPlNm"));
  ed_dchrPortCdInfo.setValue(ds_bookingInfo.getCellData(0, "destPortCd"));
  ed_reqMchtNmInfo.setValue(ds_bookingInfo.getCellData(0, "reqMchtNm"));
  ed_transCoNmInfo.setValue(ds_bookingInfo.getCellData(0, "transCoNm"));

  // ed_rmk.setValue(ds_bookingInfo.getCellData(0, "rmk"));
  txa_rmk.setValue(ds_bookingInfo.getCellData(0, "rmk"));
};

//-------------------------------------------------------------------------
// 모선 프리폼 데이터 조회 완료시 size / type 칸 입력
//-------------------------------------------------------------------------
scwin.ds_commInfo_ondataload = function () {
  let rowCnt = ds_commInfo.getTotalRow();
  if (rowCnt > 0) {
    let txt = "";
    for (i = 0; i < ds_commInfo.getTotalRow(); i++) {
      txt += "SIZE:" + ds_commInfo.getCellData(i, "cntrSizCd") + ", TYPE: " + ds_commInfo.getCellData(i, "cntrTypCd") + ", 수량: " + ds_commInfo.getCellData(i, "qty") + "대";
      if (i != rowCnt) {
        txt += "\n";
      }
    }
    ed_sizeTypeInfo.setValue(txt);
  } else {
    ed_sizeTypeInfo.setValue("");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  if ((await scwin.f_prefareCheck()) == false) {
    return;
  } else {
    // 	On-Hire반입승인에서 모선 항차 변경 저장 시 반영되게 요청 박철홍과장 201910
    // ds_retrieve.setCellData(0, "vsslCd", ed_vsslCd.getValue());
    // ds_retrieve.setCellData(0, "vsslNm", ed_vsslNm.getValue());
    ds_retrieve.setCellData(0, "portcnt", ed_portcnt.getValue());

    // ds_retrieve.modifyRowStatus(0, "R");
    // ds_retrieve.modifyRowStatus(0, "C");
    // ds_retrieve.modifyRowStatus(0, "R");
    // ds_retrieve.setCellData(0, "admitClsCd", undefined);

    $c.sbm.execute($p, sbm_saveExportOnRequest);
  }
};

//-------------------------------------------------------------------------
// 행추가전 디폴트값 Check
//-------------------------------------------------------------------------
scwin.f_prefareCheck = async function () {
  let validArray = [{
    id: "onWrkPlNm",
    name: "상차지",
    mandatory: true
  }, {
    id: "onIntendDt",
    name: "상차예정일",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "rtrnWrkPlNm",
    name: "반납지",
    mandatory: true
  }, {
    id: "crryinIntendPrdDt",
    name: "반납예정일",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_exportOnRequest, null, null, validArray, "수출 상차 요청 승인"))) {
    return false;
  }
  if (ds_retrieve.getCellData(0, "admitClsCd") == "E") {
    await $c.win.alert($p, scwin.MSG_OP_INF_005);
    return false;
  }
  if ((ds_retrieve.getCellData(0, "lineCd") == "WHL" || ds_retrieve.getCellData(0, "lineCd") == "IAL") && ds_retrieve.getCellData(0, "lane") != "KSI" && ds_retrieve.getCellData(0, "admitClsCd") != "R" && ds_retrieve.getCellData(0, "admitClsCd") != "E") {
    await $c.win.alert($p, scwin.MSG_OP_ERR_011);
  }
  for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
    ds_ExportOnRequest.setCellData(i, "chkFlg", "T");
    // ds_ExportOnRequest.modifyRowStatus(i,"R");
  }
};

//-------------------------------------------------------------------------
// 자가운송사 UDC 팝업
//-------------------------------------------------------------------------
scwin.udc_srchSelfTransCoCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, "", "", "T", "T");
};
scwin.udc_srchSelfTransCoCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(ed_srchSelfTransCoCd, scwin.hid_srchSelfTransCoCd, ed_txt_srchSelfTransCoCd, 1);
};
scwin.udc_srchSelfTransCoCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpText(ed_txt_srchSelfTransCoCd, ed_srchSelfTransCoCd, 1);
};

//-------------------------------------------------------------------------
// 상차요청번호 UDC 팝업
//-------------------------------------------------------------------------
scwin.udc_srchOnReqNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, "", "", "T", "T");
};

//-------------------------------------------------------------------------
// Booking No UDC 팝업
//-------------------------------------------------------------------------
scwin.udc_bookingNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, "", "", "T", "T");
};

//-------------------------------------------------------------------------
// TEXT BOX 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpText = function (inObj, codeObj, disGubun) {
  // ed_txt_srchSelfTransCoCd, ed_srchSelfTransCoCd, 1
  let pCode = "";
  let pName = "";
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.  //inObj.value.trim() == "" ||
  if (ed_txt_srchSelfTransCoCd.getReadOnly()) {
    return;
  }
  if (ed_srchSelfTransCoCd.getValue() != null || ed_srchSelfTransCoCd.getValue() != "") {
    if (codeObj.tagName == "OBJECT") {
      ed_srchSelfTransCoCd.setValue("");
      // codeObj.setValue("");
    } else {
      ed_srchSelfTransCoCd.setValue("");
      // codeObj.setValue("");
      codeObj.hidVal = "";
    }
  }
  ed_srchSelfTransCoCd.setValue("");
  pName = ed_txt_srchSelfTransCoCd.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, "T", "T");
};

//-------------------------------------------------------------------------
// EMEDIT 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpEmEdit = function (inObj, chkObj, txtObj, disGubun) {
  // 해당 팝업 메소드 호출시 파라미터
  // ed_srchSelfTransCoCd, scwin.hid_srchSelfTransCoCd, ed_txt_srchSelfTransCoCd, 1
  let pCode = "";
  let pName = "";
  // 해당 EMEDIT가 Disable 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (ed_srchSelfTransCoCd.getReadOnly() || ed_arvWrkPlNmInfo.getDisabled() || ed_srchSelfTransCoCd.getValue() == scwin.hid_srchSelfTransCoCd) {
    return;
  }
  if (txtObj != null) {
    txtObj.setValue("");
    txtObj.hidVal = "";
  }
  pCode = inObj.getValue().replace(/^\s*/, "");

  // 값이 입력이 안된 경우  팝업을 실행하지 않음.
  if (pCode == "" || pCode == null) {
    inObj.setValue("");
    chkObj.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(disGubun, pCode, pName, "T", "T");
};

//-------------------------------------------------------------------------
// 모선 팝업 OnClick
//-------------------------------------------------------------------------
scwin.udc_vssl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_vsslCd.getValue(), ed_vsslNm.getValue(), "T", "T");
};

//-------------------------------------------------------------------------
// 조회 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  let evNm = arguments[5] || "";
  if (evNm && $c.win.getEventList($p, gr_exportOnRequest, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });

  // 선언부
  let rtnList = new Array(); // 공통POP-UP -> 요청화면
  param = ",,WDE";
  switch (disGubun) {
    case 1:
      // 자가운송사 Popup   retrieveSelfClnt
      pWhere = ",LOGISCLNT2";
      udc_srchSelfTransCoCd.cfCommonPopUp(scwin.udc_srchSelfTransCoCd_Callback, pCode, pName, "T", null, null, null, null, pWhere, null, null, null, null);
      break;
    case 2:
      let result = "";
      var param = "O" + ";" + ed_srchSelfTransCoCd.getValue();
      let data = {
        "param": param
      };
      let opts = {
        id: "op_301_02_04p2.jsp",
        popupName: "상차요청번호",
        modal: true,
        // 모달 여부
        type: "browserPopup",
        // 새 창(브라우저 팝업)
        title: "Win pop",
        width: 480,
        height: 450
      };
      //상차요청번호 Pop up
      // $c.win.openPopup(url, opts, param, tp)
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04p2.xml", opts, data);
      if (rtnList != null) {
        ed_srchOnReqNo.setValue(rtnList[0]); //상차요청번호
      } else {
        ed_srchOnReqNo.setValue(""); //상차요청번호
      }
      break;
    case 3:
      // asis 는 결과값이 없을때도 undefined로 입력되어 공백을 인식하지 못하여 강제로 넣고 있음, 고객사 요청으로 동일하게 진행
      if (ds_retrieve.getTotalRow() == 0) {
        ds_retrieve.insertRow();
        ds_retrieve.setCellData(0, "bookingNo", "undefined");
        ds_retrieve.setCellData(0, "odrNo", "undefined");
        ds_retrieve.setRowPosition(0);
      }
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "bookingNo") == "") {
        $c.win.alert($p, scwin.MSG_OP_INF_002);
        break;
      }
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "odrNo") != "") {
        $c.win.alert($p, scwin.MSG_OP_INF_003);
        break;
      }
      param = ds_retrieve.getCellData(0, "lineCd") + ";" + ds_retrieve.getCellData(0, "bookingNo") + ";" + ds_retrieve.getCellData(0, "selfTransClntNo") + ";" + ds_retrieve.getCellData(0, "onReqNo") + ";" + ds_retrieve.getCellData(0, "orgBookingNo");
      opts = {
        id: "op_301_02_05p.xml",
        popupName: "BOOKING NO 팝업",
        modal: true,
        // 모달 여부
        type: "browserPopup",
        // 새 창(브라우저 팝업)
        title: "Win pop",
        width: 470,
        height: 220
      };
      await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_05p.xml", opts, param);
      // window.showModalDialog("/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_05p.jsp", opts, param);

      await scwin.btn_retrieve_onclick();
      break;
    case 4:
      // 자가운송사 Popup   retrieveSelfClnt
      //pWhere = ",LOGISCLNT2";
      //rtnList = cfCommonPopUp("retrieveClntList",pCode,pName,"T",null,null,null,null,pWhere,null,null,null,null);

      //cfSetReturnValue(rtnList, ed_srchSelfTransCoCd, txt_srchSelfTransCoCd);

      udc_vssl.cfCommonPopUp(scwin.udc_vssl_Callback,
      //pSelectID
      pCode,
      //pCode
      pName,
      //pName
      "T",
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
      null,
      //pAllSearchTF - 전체검색허용여부	("F")
      null,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      "F",
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      "선박, 코드, 코드명");
      break;
    case 5:
      if (scwin.eventCnt == 1) {
        ds_ExportOnRequest.setCellData(row, "onWrkPlNm", ""); //상차지
        ds_ExportOnRequest.setCellData(row, "onWrkPlCd", ""); //상차지
        udc_grid_Popup.setSelectId("retrieveReturnWrkPlInfo");
        udc_grid_Popup.cfCommonPopUp(scwin.udc_grid_onWrkPlCd_CallBack, pCode, pName, "T", null, "상차지코드, 상차지명", null, null, null // pWhere
        , null, null, null, null, null, null, "상차지조회,상차지코드,상차지명");
      }
      break;
    case 6:
      if (scwin.eventCnt == 1) {
        ds_ExportOnRequest.setCellData(row, "onWrkPlNm", ""); //상차지
        ds_ExportOnRequest.setCellData(row, "onWrkPlCd", ""); //상차지
        udc_grid_Popup.setSelectId("retrieveReturnWrkPlInfo");
        udc_grid_Popup.cfCommonPopUp(scwin.udc_grid_onWrkPlNm_CallBack, pCode, pName, "T", null, "상차지코드, 상차지명", null, null, pWhere, null, null, null, null, null, null, "상차지조회,상차지코드,상차지명");
      }
      break;
    case 7:
      if (scwin.eventCnt == 1) {
        ds_ExportOnRequest.setCellData(row, "rtrnWrkPlCd", ""); //상차지
        ds_ExportOnRequest.setCellData(row, "rtrnWrkPlNm", ""); //상차지

        udc_grid_Popup.setSelectId("retrieveReturnWrkPlInfo");
        udc_grid_Popup.cfCommonPopUp(scwin.udc_grid_rtrnWrkPlCd_CallBack, pCode, pName, "T", null, null, null, null, pWhere, null, null, null, null);
      }
      break;
    case 8:
      if (scwin.eventCnt == 1) {
        ds_ExportOnRequest.setCellData(row, "rtrnWrkPlCd", ""); //상차지
        ds_ExportOnRequest.setCellData(row, "rtrnWrkPlNm", ""); //상차지

        udc_grid_Popup.setSelectId("retrieveReturnWrkPlInfo");
        udc_grid_Popup.cfCommonPopUp(scwin.udc_grid_rtrnWrkPlNm_CallBack, pCode, pName, "T", null, null, null, null, pWhere, null, null, null, null);
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 모선 팝업 CallBack
//-------------------------------------------------------------------------
scwin.udc_vssl_Callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

//-------------------------------------------------------------------------
// 자사운송사 팝업 CallBack
//-------------------------------------------------------------------------
scwin.udc_srchSelfTransCoCd_Callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_srchSelfTransCoCd, ed_txt_srchSelfTransCoCd);
};

//-------------------------------------------------------------------------
// 상단 프리폼 오더번호 클릭 이벤트 f_orderDetail
//-------------------------------------------------------------------------
scwin.ed_odrNo_onclick = function (e) {
  if (ds_retrieve.getTotalRow() > 0) {
    let v_odrNo = ds_retrieve.getCellData(0, "odrNo");
    let strContainerOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
    let paramObj = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    let option = {};
    if (v_odrNo == "" || v_odrNo == "undefined") {} else {
      $c.win.openMenu($p, "컨테이너오더", strContainerOrderUrl, "sd_402_01_11t.xml", paramObj, option);
    }
  }
};

//-------------------------------------------------------------------------
// 상단 프리폼 상차요청번호 클릭 이벤트 f_onReqNo
//-------------------------------------------------------------------------
scwin.ed_onReqNo_onclick = function (e) {
  if (ds_retrieve.getTotalRow() > 0) {
    let v_selfTransClntNo = ed_srchSelfTransCoCd.getValue();
    let v_selfTransClntNm = ed_txt_srchSelfTransCoCd.getValue();
    let v_onReqNo = ds_retrieve.getCellData(0, "onReqNo");
    let v_onReqDt = ds_retrieve.getCellData(0, "onReqNo").substring(0, 8);
    let strUrl = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_01b.xml";
    let condition = {
      selfTransClntNo: v_selfTransClntNo,
      selfTransClntNm: v_selfTransClntNm,
      impExpClsCd: 0,
      onReqNo: v_onReqNo
    };
    let option = {};
    let menuNm = "수입/수출 상차요청 등록(협력업체) ";
    $c.win.openMenu($p, menuNm, strUrl, "op_301_02_01b.jsp", condition, option);
  }
};

//-------------------------------------------------------------------------
// 수출 매출 청구 내역 확정 버튼 클릭 f_order
//-------------------------------------------------------------------------
scwin.btn_order_onclick = function (e) {
  let strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_02b.xml";
  let strOrderDetailTitle = "컨테이너출고예정(선수납)";

  // 선택된 오더 정보 : 오더번호 , flag
  let v_odrNo = ds_retrieve.getCellData(0, "odrNo");
  let v_outIntendNo = "";
  let condition = {
    odrNo: v_odrNo,
    outIntendNo: v_outIntendNo
  };
  let option = {};
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "sd_404_01_02b.jsp", condition, option);
};

//-------------------------------------------------------------------------
// 하차요청 품목 현황 버튼 클릭시 f_OnRequestGoods
//-------------------------------------------------------------------------
scwin.btn_RequestGoods_onclick = async function (e) {
  let firstList = new Array();
  let url = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04p1.xml";

  // 호출화면의 개발 방식 미확인으로 방식 선언 후 추후 연결
  //JSON 방식
  // let data = {
  //     selfTransClntNo : dma_condition.get("selfTransClntNo"),
  //     onReqNo : dma_condition.get("onReqNo")
  // }

  // Array 방식
  // let data = new Array();
  // data[0] = dma_condition.get("selfTransClntNo");
  // data[1] = dma_condition.get("onReqNo")

  var param = dma_condition.get("selfTransClntNo") + ";" + dma_condition.get("onReqNo") + ";" + "op_301_02_05b";
  let data = {
    "param": param
  };
  let opts = {
    id: "op_301_02_04p1.jsp",
    popupName: "상차요청 및 승인 반출 현황",
    modal: true,
    // 모달 여부
    type: "browserPopup",
    // 새 창(브라우저 팝업)
    title: "Win pop",
    width: 470,
    height: 340
  };
  let result = await $c.win.openPopup($p, url, opts, data);
  if (result == -1 || result == null || result == "") {
    return;
  }
  firstList = result.split(";");
};

//-------------------------------------------------------------------------
// 그리드 after edit 후에 탈 것
//-------------------------------------------------------------------------
scwin.f_limitCnt = function () {
  $c.sbm.execute($p, sbm_retreiveCnt);
  let qtyCnt = 0;
  for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
    if (ds_ExportOnRequest.getCellData(ds_ExportOnRequest.getRowPosition(), "nrm") == ds_ExportOnRequest.getCellData(i, "nrm")) {
      qtyCnt += ds_ExportOnRequest.getCellData(i, "admitCnt");
    }
  }
  if (ds_retrieveCnt.getCellData(ds_retrieveCnt.getRowPosition(), "cnt") < qtyCnt) {
    $c.win.alert($p, "요청수량이 요청 가능수량보다 큽니다.");
    ds_ExportOnRequest.setCellData(ds_ExportOnRequest.getRowPosition(), "admitCnt", 0);
    return false;
  }
};

//-------------------------------------------------------------------------
// 오더생성 버튼 클릭시 f_CreateOrder
//-------------------------------------------------------------------------
scwin.btn_crtOdr_onclick = async function (e) {
  if (ds_retrieve.getTotalRow() == 0) {
    return;
  }
  let validArray = [{
    id: "onWrkPlNm",
    name: "상차지",
    mandatory: true
  }, {
    id: "onIntendDt",
    name: "상차예정일",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "rtrnWrkPlNm",
    name: "반납지",
    mandatory: true
  }, {
    id: "crryinIntendPrdDt",
    name: "반납예정일",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_exportOnRequest, null, null, validArray, "수출 상차 요청 승인"))) {
    return false;
  }

  // if (! await $c.gus.cfValidate([gr_exportOnRequest])) {
  //     return false;
  // }

  if (ds_retrieve.getCellData(0, "odrNo") != "") {
    $c.win.alert($p, scwin.MSG_OP_ERR_001);
    return;
  }
  if (ds_ExportOnRequest.getTotalRow() == 0) {
    $c.win.alert($p, scwin.MSG_OP_ERR_002);
    return;
  }
  if (ds_retrieve.getCellData(0, "admitClsCd") != "O" && ds_retrieve.getCellData(0, "admitClsCd") != "R") {
    scwin.MSG_OP_ERR_003 = "승인 구분이 승인 또는 접수인 경우만 가능합니다.";
    $c.win.alert($p, scwin.MSG_OP_ERR_003);
    return;
  }
  let cnt = 0;
  let cntrSeq = 1;
  for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
    if (ds_ExportOnRequest.getCellData(i, "gridChkBox") == "1") {
      ds_ExportOnRequest.setCellData(i, "cntrSeq", cntrSeq);
      cnt++;
      cntrSeq++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "승인할 컨테이너를 체크하세요");
    return;
  }
  for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
    if (ds_ExportOnRequest.getCellData(i, "onReqNo") == ed_srchOnReqNo.getValue()) {
      if (ds_ExportOnRequest.getCellData(i, "gridChkBox") == "0") {
        $c.win.alert($p, "해당상차요청번호 [" + ed_srchOnReqNo.getValue() + "]의 컨테이너번호 [" + ds_ExportOnRequest.getCellData(i, "cntrNo") + "]가 반드시 포함되어있어야합니다.");
        return false;
      }
    }
  }

  //체크 박스 안되어있는건들은 언두 명령어도 수정작업취소시켜서 승인대상에서 제외시킴
  scwin.f_ExportOnRequestUndo();
  $c.sbm.execute($p, sbm_createExportGeneralOrder);
};
scwin.f_ExportOnRequestUndo = function () {
  for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
    if (ds_ExportOnRequest.getCellData(i, "gridChkBox") == "0") {
      ds_ExportOnRequest.undoRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 오류 선택/확인 버튼 클릭시 f_ErrorCode
//-------------------------------------------------------------------------
scwin.btn_errYn_onclick = async function (e) {
  if (ds_retrieve.getCellData(0, "admitClsCd") != "E") {
    scwin.MSG_OP_ERR_003 = "승인 구분이 오류인 경우만 가능합니다.";
    $c.win.alert($p, scwin.MSG_OP_ERR_003);
    return;
  }
  if (!$c.gus.cfIsNull($p, ds_retrieve.getCellData(0, "odrNo"))) {
    $c.win.alert($p, scwin.MSG_OP_INF_008);
    return;
  }
  let data = {
    param: ds_retrieve.getCellData(0, "selfTransClntNo") + ";" + ds_retrieve.getCellData(0, "onReqNo") + ";" + ds_retrieve.getCellData(0, "admitClsCd") + ";" + "op_301_02_04b" + ";" + scwin.bf_admitClsCd + ";" + ds_retrieve.getCellData(0, "lineCd")
  };
  let url = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_03p.xml";
  let opts = {
    id: "op_301_02_03p.jsp",
    popupName: "상차요청 및 승인 반출 현황",
    modal: true,
    // 모달 여부
    type: "browserPopup",
    // 새 창(브라우저 팝업)
    title: "Win pop",
    width: 450,
    height: 550
  };
  let result = await $c.win.openPopup($p, url, opts, data);
  scwin.btn_retrieve_onclick();
};

//-------------------------------------------------------------------------
// 승인취소 버튼 클릭시 f_Cancel
//-------------------------------------------------------------------------
scwin.btn_cancel_onclick = async function (e) {
  if (await $c.win.confirm($p, scwin.MSG_OP_CFM_001)) {
    // if (ed_srchSelfTransCoCd.getValue() == "") {
    //     $c.win.alert("자가 운송사은(는) 필수 입력 항목입니다.");
    //     return;
    // }

    // if (ed_srchOnReqNo.getValue() == "") {
    //     $c.win.alert("상차 요청 번호은(는) 필수 입력 항목입니다.");
    //     return;
    // }

    // asis는 넘어가는 데이터셋이 row = 0 모든 컬럼 undefined인데 서비스단에서 그걸 null로 인식하는게 아니라서 retrieve로 타버림
    // asis 쿼리 -> retrieveOnRequestAdmission
    // tobe 쿼리 -> deleteExportOnRequestAdmissionGoods1
    // 분기 처리 하는곳에서 null로 인식이 되느냐 안되느냐에 따라 달라지는것으로 보임
    if (ds_retrieve.getRowCount() == 0) {
      scwin.btn_retrieve_onclick();
      // let row = ds_retrieve.insertRow();
      // ds_retrieve.setCellData(row, "selfTransClntNo", ed_srchSelfTransCoCd.getValue());
      // ds_retrieve.setCellData(row, "onReqNo", ed_srchOnReqNo.getValue());
      // ds_retrieve.setCellData(row, "admidClsCd", acb_admitClsCd.getValue());
      // ds_retrieve.setCellData(row, "odrNo", "undefined");
    } else {
      $c.sbm.execute($p, sbm_cancel);
    }
  }
};

//-------------------------------------------------------------------------
// 행 복사
//-------------------------------------------------------------------------
scwin.f_RowCopy = function (row, colid) {
  if (row == 0) {
    for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
      ds_ExportOnRequest.setCellData(i, colid, ds_ExportOnRequest.getCellData(row, colid));
      if (colid == "onWrkPlNm") {
        ds_ExportOnRequest.setCellData(i, "onWrkPlCd", ds_ExportOnRequest.getCellData(row, "onWrkPlCd"));
      }
      if (colid == "rtrnWrkPlNm") {
        ds_ExportOnRequest.setCellData(i, "rtrnWrkPlCd", ds_ExportOnRequest.getCellData(row, "rtrnWrkPlCd"));
      }
    }
  }
};

//-------------------------------------------------------------------------
// 작업 결로 수정 버튼 클릭시 f_workPathMod
//-------------------------------------------------------------------------
scwin.btn_Change_onclick = async function (e) {
  //  해당 js파일에 있는 주소  = /ds/op/wrkplan/transwrkplan/op_202_02_26p.jsp
  let length = DsConstants.URL_CONTAINER_WORK_PATH_DETAIL_CHANGE_POPUP.length;
  let sub = DsConstants.URL_CONTAINER_WORK_PATH_DETAIL_CHANGE_POPUP.substring(0, length - 3);
  let pURL = "/ui" + sub + "xml";
  let opts = {
    id: "op_202_02_26p.jsp",
    popupName: "작업경로 상세정보 변경 팝업(컨테이너)",
    modal: true,
    // 모달 여부
    type: "browserPopup",
    // 새 창(브라우저 팝업)
    title: "Win pop",
    width: 1080,
    height: 750
  };
  let data = {};
  let rtnVal = await $c.win.openPopup($p, pURL, opts, data);
};

//-------------------------------------------------------------------------
// 
//-------------------------------------------------------------------------
scwin.f_ExportOnRequestUndo = function () {
  for (i = 0; i < ds_ExportOnRequest.getTotalRow(); i++) {
    if (ds_ExportOnRequest.getCellData(i, "gridChkBox") == "0") {
      ds_ExportOnRequest.undoRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 조회 서브미션 성공시 
//-------------------------------------------------------------------------
scwin.sbm_bkRetrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      tb_trBookingInfo2.setStyle("display", "none");
      return; //onFail
    }
    tb_trBookingInfo2.setStyle("display", "table");
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 오더생성 서브미션 성공시 
//-------------------------------------------------------------------------
scwin.sbm_createExportGeneralOrder_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.win.alert($p, scwin.MSG_OP_INF_006);
    scwin.btn_retrieve_onclick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.sbm_saveExportOnRequest_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.win.alert($p, MSG_CM_INF_001);
    await scwin.btn_retrieve_onclick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소 서브미션 성공시 
//-------------------------------------------------------------------------
scwin.sbm_cancel_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.btn_retrieve_onclick();
  } catch (e) {
    console.log("sbm_cancel_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 승인구분 select 값 변경시 
//-------------------------------------------------------------------------
scwin.acb_admitClsCd_onafteredit = function () {
  ds_retrieve.setCellData(0, "admitClsCd", acb_admitClsCd.getValue());
  switch (acb_admitClsCd.getValue()) {
    case "O":
      if (ds_retrieve.getCellData(0, "odrNo") == "") {
        $c.gus.cfEnableObjects($p, [btn_crtOdr]);
      } else {
        $c.gus.cfEnableObjects($p, [btn_save]);
      }
      gr_exportOnRequest.setGridReadOnly(false);
      break;
    case "R":
      $c.gus.cfEnableObjects($p, [btn_crtOdr, btn_save]);
      gr_exportOnRequest.setGridReadOnly(false);
      break;
    case "C":
      $c.gus.cfDisableObjects($p, [btn_crtOdr]);
      $c.gus.cfEnableObjects($p, [btn_save]);
      gr_exportOnRequest.setGridReadOnly(true);
      break;
    case "S":
      $c.gus.cfDisableObjects($p, [btn_crtOdr, btn_save]);
      gr_exportOnRequest.setGridReadOnly(false);
      break;
    case "E":
      $c.gus.cfDisableObjects($p, [btn_crtOdr]);
      $c.gus.cfEnableObjects($p, [btn_save]);
      gr_exportOnRequest.setGridReadOnly(false);
      break;
  }
};

//-------------------------------------------------------------------------
// 오더생성 데이터셋 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_ExportOnRequest_ondataload = async function () {
  let odrNo = ds_retrieve.getCellData(0, "odrNo");
  if (odrNo == "" && ds_retrieve.getCellData(0, "admitClsCd") == "S") {
    gr_exportOnRequest.setGridReadOnly(false);
    $c.gus.cfEnableObjects($p, [btn_crtOdr]);
    let cnt = 0;
    let cntrSeq = 1;
    //오더가 생성되지 않았으면 상차요청한데이타를 가지고 기본 정보를 생성한 후 오더를 생성한다.
    for (i = 0; i < ds_ExportOnRequestEachCnt.getTotalRow(); i++) {
      let insertRow = ds_ExportOnRequest.insertRow();
      ds_ExportOnRequest.setCellData(insertRow, "gridChkBox", "1");
      ds_ExportOnRequest.setCellData(insertRow, "selfTransClntNo", ds_retrieve.getCellData(0, "selfTransClntNo"));
      ds_ExportOnRequest.setCellData(insertRow, "onReqNo", ds_ExportOnRequestEachCnt.getCellData(i, "onReqNo"));
      ds_ExportOnRequest.setCellData(insertRow, "onReqGoodsSeq", ds_ExportOnRequestEachCnt.getCellData(i, "onReqGoodsSeq"));
      ds_ExportOnRequest.setCellData(insertRow, "commCd", ds_ExportOnRequestEachCnt.getCellData(i, "commCd"));
      ds_ExportOnRequest.setCellData(insertRow, "nrm", ds_ExportOnRequestEachCnt.getCellData(i, "cntrSizCd") + ds_ExportOnRequestEachCnt.getCellData(i, "cntrTypCd") + ds_ExportOnRequestEachCnt.getCellData(i, "fullEmptyClsCd"));
      ds_ExportOnRequest.setCellData(insertRow, "cntrNo", ds_ExportOnRequestEachCnt.getCellData(i, "cntrNo"));
      ds_ExportOnRequest.setCellData(insertRow, "lineCd", ds_retrieve.getCellData(0, "lineCd"));
      ds_ExportOnRequest.setCellData(insertRow, "bookingNo", ds_retrieve.getCellData(0, "bookingNo"));
      ds_ExportOnRequest.setCellData(insertRow, "blNo", ds_retrieve.getCellData(0, "blNo"));
      ds_ExportOnRequest.setCellData(insertRow, "odrNo", ds_retrieve.getCellData(0, "odrNo"));
      ds_ExportOnRequest.setCellData(insertRow, "admitCnt", 1);
      ds_ExportOnRequest.setCellData(insertRow, "gubun", "0");
      ds_ExportOnRequest.setCellData(insertRow, "closingTime", ds_retrieve.getCellData(0, "closingTime"));
      ds_ExportOnRequest.setCellData(insertRow, "cnt", 1);
      ds_ExportOnRequest.setCellData(insertRow, "sellAmt", "0");
      ds_ExportOnRequest.setCellData(insertRow, "dsSellAmt", "0");
      ds_ExportOnRequest.setCellData(insertRow, "dcsnClsCd", "N");
      ds_ExportOnRequest.setCellData(insertRow, "dpctYn", ds_retrieve.getCellData(0, "dpctYn"));
      ds_ExportOnRequest.setCellData(insertRow, "cntrSeq", cntrSeq);
      if (ds_retrieve.getCellData(0, "pickuprgnCd") == "EWY") {
        ds_ExportOnRequest.setCellData(insertRow, "onWrkPlCd", ds_retrieve.getCellData(0, "doorRgnCd"));
        ds_ExportOnRequest.setCellData(insertRow, "onWrkPlNm", ds_retrieve.getCellData(0, "doorRgnNm"));
        ds_ExportOnRequest.setCellData(insertRow, "rtrnWrkPlCd", "4C02");
        ds_ExportOnRequest.setCellData(insertRow, "rtrnWrkPlNm", "의왕CY");
      } else if (ds_retrieve.getCellData(0, "pickuprgnCd") == "PUS") {
        ds_ExportOnRequest.setCellData(insertRow, "onWrkPlCd", ds_retrieve.getCellData(0, "doorRgnCd"));
        ds_ExportOnRequest.setCellData(insertRow, "onWrkPlNm", ds_retrieve.getCellData(0, "doorRgnNm"));
        if (ds_ExportOnRequestEachCnt.getCellData(ds_ExportOnRequestEachCnt.getRowPosition(), "cntrTypCd") == "RF" || ds_ExportOnRequestEachCnt.getCellData(ds_ExportOnRequestEachCnt.getRowPosition(), "cntrTypCd") == "RH") {
          ds_ExportOnRequest.setCellData(insertRow, "rtrnWrkPlCd", "6C09");
          ds_ExportOnRequest.setCellData(insertRow, "rtrnWrkPlNm", "DPCTCY");
        } else {
          ds_ExportOnRequest.setCellData(insertRow, "rtrnWrkPlCd", "6C01");
          ds_ExportOnRequest.setCellData(insertRow, "rtrnWrkPlNm", "KBCTCY");
        }
      }
      ds_ExportOnRequest.setCellData(insertRow, "onIntendDt", scwin.nowDt);
      ds_ExportOnRequest.setCellData(insertRow, "crryinIntendPrdDt", ds_retrieve.getCellData(0, "onIntendDd"));
      cntrSeq++;

      // // ds_ExportOnRequest.modifyRowStatus(insertRow, "R");
    }
  } else {
    $c.gus.cfEnableObjects($p, [tb_data]);
    $c.gus.cfDisableObjects($p, [ed_bookingNo, rd_sellYn, rd_dpctYn]);
    // $c.gus.cfDisableObjects([tb_data1]);
    gr_exportOnRequest.setGridReadOnly(false);
    $c.gus.cfDisableObjects($p, [btn_crtOdr]);
  }
  let idx4 = ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "expNrmYn");
  for (k = 0; k < ds_ExportOnRequest.getTotalRow(); k++) {
    if (ds_retrieve.getTotalRow() != 0 && !(ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "impExpClsCd") == "D" && ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "lineCd") == "SKR")) {
      ds_ExportOnRequest.setCellData(k, "onWrkPlCd", ds_retrieve.getCellData(0, "doorRgnCd"));
      ds_ExportOnRequest.setCellData(k, "onWrkPlNm", ds_retrieve.getCellData(0, "doorRgnNm"));
      ds_ExportOnRequest.setCellData(k, "onIntendDt", ds_retrieve.getCellData(0, "onIntendDd"));
    }
    if (ds_retrieve.getCellData(0, "lineCd") != "SITC") {
      if (ds_retrieve.getCellData(0, "impExpClsCd") == "D") {
        ds_ExportOnRequest.setCellData(k, "onReqGoodsSeq", k + 1);
      }
    }
  }

  // ds_ExportOnRequest.modifyAllStatus("R");
  gr_exportOnRequest.setFocusedCell(0, 0);
  spa_totalRow.setValue(ds_ExportOnRequest.getRowCount());
};

//-------------------------------------------------------------------------
// Grid 편집 이벤트 사용 위한 OldData 셋업용
//-------------------------------------------------------------------------
scwin.gr_exportOnRequest_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};

//-------------------------------------------------------------------------
// Grid 편집 종료 시점 이벤트
//-------------------------------------------------------------------------
scwin.gr_exportOnRequest_onafteredit = function (rowIndex, columnIndex, value) {
  let olddata = scwin.oldData;
  let colid = gr_exportOnRequest.getColumnID(columnIndex);
  let row = rowIndex;
  let pWhere;
  let pName;
  let pCode;
  switch (colid) {
    case "onWrkPlCd":
      if (ds_ExportOnRequest.getCellData(row, "onWrkPlCd") == scwin.oldData) {
        return;
      } else {
        if (ds_ExportOnRequest.getCellData(row, "onWrkPlCd").trim() == "") {
          ds_ExportOnRequest.setCellData(row, "onWrkPlNm", ""); //상차지
          return;
        } else {
          ds_ExportOnRequest.setCellData(row, "onWrkPlNm", ""); //상차지
        }
      }
      pWhere = null;
      pCode = ds_ExportOnRequest.getCellData(row, "onWrkPlCd");
      pName = ds_ExportOnRequest.getCellData(row, "onWrkPlNm");
      scwin.f_openCommonPopUp(5, pCode, pName, 'F', 'T', 'onafteredit');
      break;
    case "onWrkPlNm":
      if (ds_ExportOnRequest.getCellData(row, "onWrkPlNm") == scwin.oldData) {
        return;
      } else {
        if (ds_ExportOnRequest.getCellData(row, "onWrkPlNm").trim() == "") {
          ds_ExportOnRequest.setCellData(row, "onWrkPlCd", ""); //상차지
          return;
        } else {
          ds_ExportOnRequest.setCellData(row, "onWrkPlCd", ""); //상차지
        }
      }
      pWhere = null;
      pCode = ds_ExportOnRequest.getCellData(row, "onWrkPlCd");
      pName = ds_ExportOnRequest.getCellData(row, "onWrkPlNm");
      scwin.f_openCommonPopUp(6, pCode, pName, 'F', 'T', 'onafteredit');
      break;
    case "rtrnWrkPlCd":
      if (ds_ExportOnRequest.getCellData(row, "rtrnWrkPlCd") == scwin.oldData) {
        return;
      } else {
        if (ds_ExportOnRequest.getCellData(row, "rtrnWrkPlCd").trim() == "") {
          ds_ExportOnRequest.setCellData(row, "rtrnWrkPlNm", ""); //반납지
          return;
        } else {
          ds_ExportOnRequest.setCellData(row, "rtrnWrkPlNm", ""); //반납지
        }
      }
      // 반납지 Popup
      pWhere = null;
      pCode = ds_ExportOnRequest.getCellData(row, "rtrnWrkPlCd");
      pName = ds_ExportOnRequest.getCellData(row, "rtrnWrkPlNm");
      scwin.f_openCommonPopUp(7, pCode, pName, 'F', 'T', 'onafteredit');
      break;
    case "rtrnWrkPlNm":
      if (ds_ExportOnRequest.getCellData(row, "rtrnWrkPlNm") == scwin.oldData) {
        return;
      } else {
        if (ds_ExportOnRequest.getCellData(row, "rtrnWrkPlNm").trim() == "") {
          ds_ExportOnRequest.setCellData(row, "rtrnWrkPlCd", ""); //반납지
          return;
        } else {
          ds_ExportOnRequest.setCellData(row, "rtrnWrkPlCd", ""); //반납지
        }
      }
      // 반납지 Popup
      pWhere = null;
      pCode = ds_ExportOnRequest.getCellData(row, "rtrnWrkPlCd");
      pName = ds_ExportOnRequest.getCellData(row, "rtrnWrkPlNm");
      scwin.f_openCommonPopUp(8, pCode, pName, 'F', 'T', 'onafteredit');
      break;
    case "onIntendDt":
      scwin.f_RowCopy(row, colid);
      break;
    case "crryinIntendPrdDt":
      scwin.f_RowCopy(row, colid);
      break;
  }
  if (colid == "admitCnt") {
    scwin.f_limitCnt();
  }
};

//-------------------------------------------------------------------------
// Grid 작업장 코드 편집 종료 시점 이벤트
//-------------------------------------------------------------------------
scwin.udc_grid_onWrkPlCd_CallBack = function (rtnList) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ExportOnRequest, row, "onWrkPlCd", "onWrkPlNm");
  scwin.f_RowCopy(row, "onWrkPlCd");
  scwin.f_RowCopy(row, "onWrkPlNm");
};

//-------------------------------------------------------------------------
// Grid 작업장 명 편집 종료 시점 이벤트
//-------------------------------------------------------------------------
scwin.udc_grid_onWrkPlNm_CallBack = function (rtnList) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ExportOnRequest, row, "onWrkPlCd", "onWrkPlNm");
  scwin.f_RowCopy(row, "onWrkPlNm");
  scwin.f_RowCopy(row, "onWrkPlCd");
};
scwin.udc_grid_rtrnWrkPlCd_CallBack = function (rtnList) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ExportOnRequest, row, "rtrnWrkPlCd", "rtrnWrkPlNm");
  scwin.f_RowCopy(row, "rtrnWrkPlCd");
  scwin.f_RowCopy(row, "rtrnWrkPlNm");
};
scwin.udc_grid_rtrnWrkPlNm_CallBack = function (rtnList) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ExportOnRequest, row, "rtrnWrkPlCd", "rtrnWrkPlNm");
  scwin.f_RowCopy(row, "rtrnWrkPlNm");
  scwin.f_RowCopy(row, "rtrnWrkPlCd");
};

//-------------------------------------------------------------------------
// Grid 팝업 이미지 클릭시
//-------------------------------------------------------------------------
scwin.gr_exportOnRequest_imageFunc = function () {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  let colid = gr_exportOnRequest.getFocusedColumnID();
  let pWhere;
  let pName;
  let pCode;
  switch (colid) {
    case "onWrkPlNm":
      // if(ds_ExportOnRequest.getCellData(row,"onWrkPlNm") == scwin.oldData && scwin.oldData != "") {
      // 	return;
      // } else {
      // 	if (ds_ExportOnRequest.getCellData(row,"onWrkPlNm").trim() == "") {
      // 		ds_ExportOnRequest.setCellData(row,"onWrkPlCd", "");	//상차지
      // 		return;
      // 	} else {
      // 		ds_ExportOnRequest.setCellData(row,"onWrkPlCd", "");	//상차지
      // 	}

      // }
      pWhere = null;
      pCode = ds_ExportOnRequest.getCellData(row, "onWrkPlCd");
      pName = ds_ExportOnRequest.getCellData(row, "onWrkPlNm");
      scwin.f_openCommonPopUp(6, pCode, pName, 'F', 'T', 'ontextimageclick');
      break;
    case "rtrnWrkPlNm":
      // if(ds_ExportOnRequest.getCellData(row,"rtrnWrkPlNm") == scwin.oldData ) {
      // 	return;
      // } else {
      // 	if (ds_ExportOnRequest.getCellData(row,"rtrnWrkPlNm").trim() == "") {
      // 		ds_ExportOnRequest.setCellData(row,"rtrnWrkPlCd", "");	//반납지
      // 		return;
      // 	} else {
      // 		ds_ExportOnRequest.setCellData(row,"rtrnWrkPlCd", "");	//반납지
      // 	}

      // }
      // 반납지 Popup
      pWhere = null;
      pCode = ds_ExportOnRequest.getCellData(row, "rtrnWrkPlCd");
      pName = ds_ExportOnRequest.getCellData(row, "rtrnWrkPlNm");
      scwin.f_openCommonPopUp(8, pCode, pName, 'F', 'T', 'ontextimageclick');
      break;
  }
  if (colid == "admitCnt") {
    scwin.f_limitCnt();
  }
};

//-------------------------------------------------------------------------
// Grid 팝업 상차지 클릭시
//-------------------------------------------------------------------------
scwin.udc_grid_onWrkPlCd_imageFunc = function (rtnList) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ExportOnRequest, row, "onWrkPlCd", "onWrkPlNm");
  scwin.f_RowCopy(row, "onWrkPlNm");
};

//-------------------------------------------------------------------------
// Grid 팝업 하차지 클릭시
//-------------------------------------------------------------------------
scwin.udc_grid_rtrnWrkPlNm_imageFunc = function (rtnList) {
  let row = gr_exportOnRequest.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ExportOnRequest, row, "rtrnWrkPlCd", "rtrnWrkPlNm");
  scwin.f_RowCopy(row, "rtrnWrkPlNm");
};

//-------------------------------------------------------------------------
// 화면 오픈시 승인구분값 가지고 disable처리하기
//-------------------------------------------------------------------------
scwin.sbm_recptClsCd_submitdone = function (e) {
  // scwin.acb_admitClsCd_onafteredit();
};

// scwin.ed_dchrPort_onchange = function (info) {
//     ds_retrieve.setCellData(0, "dchrPort", ed_dchrPort.getValue());
// };

scwin.txa_odrRmk_onchange = function (info) {
  ds_retrieve.setCellData(0, "odrRmk", txa_odrRmk.getValue());
};
scwin.ed_dchrPort_onblur = function (e) {
  ds_retrieve.setCellData(0, "dchrPort", ed_dchrPort.getValue());
};
scwin.rowCancel = function () {
  ds_ExportOnRequest.removeRow(gr_exportOnRequest.getFocusedRowIndex());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:''},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자가 운송사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_srchSelfTransCoCd',nameId:'ed_txt_srchSelfTransCoCd',id:'udc_srchSelfTransCoCd',selectID:'retrieveClntList',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',mandatoryCode:'true',objTypeCode:'data',validExpCode:'자사 운송사:yes:length=6',objTypeName:'Data','ev:onclickEvent':'scwin.udc_srchSelfTransCoCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchSelfTransCoCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_srchSelfTransCoCd_onviewchangeNameEvent',validTitle:'자가 운송사'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차 요청 번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'2',codeId:'ed_srchOnReqNo',validTitle:'상차 요청 번호',nameId:'',style:'width:%; height:px; ',hideName:'true',id:'udc_srchOnReqNo',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_srchOnReqNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchOnReqNo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'tb_data',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_data1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차요청번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.onReqNo','ev:onclick':'scwin.ed_onReqNo_onclick',style:'',userData2:'',id:'ed_onReqNo',label:'',class:'txt-blue'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'td_admitClsCd',label:'승인구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',ref:'data:ds_retrieve.admitClsCd',chooseOption:'true',editType:'select',style:'width:100px;',id:'acb_admitClsCd',allOption:'',class:'','ev:onblur':'scwin.acb_admitClsCd_onafteredit',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_recptClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',id:'th_bookingNo'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Booking No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:'td_bookingNo'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'}},{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'ed_bookingNo',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_bookingNo',hideName:'true',refDataCollection:'ds_retrieve','ev:onclickEvent':'scwin.udc_bookingNo_onclickEvent',codeWidth:'120',btnId:'btn_bookingNo',code:'bookingNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.shpCoNm',style:'',userData2:'',id:'ed_shpCoNm',label:'',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.lineNm',style:'',userData2:'',id:'ed_lineNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'모선',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',objTypeCode:'data',codeId:'ed_vsslCd',selectID:'retrieveVsslCdInfo',popupID:'',nameId:'ed_vsslNm',style:'',id:'udc_vssl',refDataCollection:'ds_retrieve','ev:onclickEvent':'scwin.udc_vssl_onclickEvent',UpperFlagCode:'1',code:'vsslCd',name:'vsslNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'background-color: #F2F2F2;',id:'ed_portcnt',placeholder:'',class:' w150',ref:'data:ds_retrieve.portcnt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.odrNo',style:'',userData2:'',id:'ed_odrNo',label:'text',class:'txt-blue','ev:onclick':'scwin.ed_odrNo_onclick'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특기사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.rmk',style:'',userData2:'',id:'ed_rmk',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_retrieve.sellYn',appearance:'full',style:'',id:'rd_sellYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DPCT 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_retrieve.dpctYn',appearance:'full',style:'',id:'rd_dpctYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자가운송사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.selfTransClntNm',style:'',userData2:'',id:'ed_selfTransClntNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.selfTransPicEmpNm',style:'',userData2:'',id:'ed_selfTransPicEmpNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'연락처(회사)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.selfTransClntTelNo',style:'',userData2:'',id:'ed_selfTransClntTelNo',label:'text',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.reqClntNm',style:'',userData2:'',id:'ed_reqClntNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.bilgClntNm',style:'',userData2:'',id:'ed_bilgClntNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.realMchtClntNm',style:'',userData2:'',id:'ed_realMchtClntNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주 담당자/연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.realMchtClntPicCntct',style:'',userData2:'',id:'ed_realMchtClntPicCntct',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Door 명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.doorNm',style:'',userData2:'',id:'ed_doorNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Door 지역',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.doorRgnNm',style:'',userData2:'',id:'ed_doorRgnNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Door 담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.doorPic',style:'',userData2:'',id:'ed_doorPic',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Door 연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_retrieve.doorCntctPl',style:'',userData2:'',id:'ed_doorCntctPl',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출 청구서/확정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'txa_odrRmk',class:'',ref:'data:ds_retrieve.odrRmk','ev:onviewchange':'scwin.txa_odrRmk_onchange'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_trBookingInfo2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'txt-red',id:'ed_vsslNmInfo',label:'text',style:'',ref:'data:ds_retrieve2.vsslNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'ed_arvWrkPlNmInfo',label:'text',style:'',ref:'data:ds_retrieve2.arvWrkPlNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목적항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'ed_dchrPortCdInfo',label:'text',style:'',ref:'data:ds_retrieve2.destPortCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_reqMchtNmInfo',label:'text',style:'',ref:'data:ds_retrieve2.reqMchtNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_transCoNmInfo',label:'text',style:'',ref:'data:ds_retrieve2.transCoNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양하항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dchrPort',placeholder:'',style:'width:150px;',objType:'data',allowChar:'a-zA-Z0-9',maxlength:'5',editType:'select','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_retrieve.dchrPort','ev:onblur':'scwin.ed_dchrPort_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE / TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_sizeTypeInfo',label:'',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk',style:'',objType:'data',ref:'data:ds_retrieve.rmk'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'반납하차요청내역 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_exportOnRequest',grdDownOpts:'{"fileName":"규격별상차승인내역.xlsx", "sheetName": "규격별상차승인내역"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ExportOnRequest',style:'',autoFit:'allColumn',id:'gr_exportOnRequest',visibleRowNum:'4',class:'wq_gvw','ev:onafteredit':'scwin.gr_exportOnRequest_onafteredit','ev:onbeforeedit':'scwin.gr_exportOnRequest_onbeforeedit','ev:onheaderclick':'scwin.gr_exportOnRequest_onheaderclick','ev:ontextimageclick':'scwin.gr_exportOnRequest_imageFunc',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',value:'상차요청번호',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'규격',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'컨테이너',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'수량',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'총매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'총청구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'정산',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'차량번호',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'상차지코드',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'상차지명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'상차예정일',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'반입지코드',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'반입지명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'반입예정일',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'DPCT수신내용',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'gridChkBox',displayMode:'label',fixColumnWidth:'true',valueType:'other',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'nrm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'admitCnt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'sellAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'dcSellAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',maxByteLength:'12',allowChar:'a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'onWrkPlNm',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'onIntendDt',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rtrnWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'textImage',id:'rtrnWrkPlNm',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'crryinIntendPrdDt',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'errNm',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddYn:'N',btnRowDelYn:'N',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_exportOnRequest',id:'udc_gr_bottom',cancelFunction:'scwin.rowCancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_data2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오류사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_errYn',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_errYn_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'선택/확인'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오류 기타 사유 및 참고사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_errEtcRsn',label:'text',ref:'data:ds_retrieve.errEtcRsn',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Change',label:'저장',style:';visibility:hidden;',type:'button','ev:onclick':'scwin.btn_Change_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_crtOdr',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_crtOdr_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_RequestGoods',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_RequestGoods_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'하차요청 품목 현황'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_order',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_order_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수출매출 청구내역 확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancel',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인취소'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_grid_Popup'}}]}]}]}]}]})