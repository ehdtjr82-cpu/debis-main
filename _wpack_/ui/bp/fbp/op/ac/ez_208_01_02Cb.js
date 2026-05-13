/*amd /ui/bp/fbp/op/ac/ez_208_01_02Cb.xml 143199 b495f3b2868930ffb238be3f9471f6630aecaed00b33701291a90a174bdf6467 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comComboMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hdoIdx',name:'hdoIdx',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bhoIdx',name:'bhoIdx',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offIdx',name:'offIdx',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_common'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoDateTyp',name:'조회기간구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoDateCnd',name:'cargoDateCnd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoDate1',name:'조회시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoDate2',name:'조회종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoSrchTyp',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoSrchCnd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoSts1',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoSts2',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoSts3',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoHdidx',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoBhidx',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoOfcidx',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ord',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'caridx',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fl',saveRemovedData:'true','ev:ondataload':'scwin.ds_fl_ondataload','ev:oncelldatachange':'scwin.ds_fl_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regDd',name:'등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmOrdNo',name:'동부 오더No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rclntOrdNo',name:'고객 주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'판매처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvyPlNm',name:'납품처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDt',name:'상차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDt',name:'하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(Kg)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'오더특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hirecarClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'상차일자(배차)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'상차시간(배차)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOnWt',name:'실상차중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'하차일자(배차)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'하차시간(배차)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'운송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'ez110Idx',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclPicNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTelNo2',name:'기사전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'배차지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'배차담당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'statuss',name:'화물상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarSts',name:'차량상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openYn',name:'공개여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmCoshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'등록처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불',dataType:'number'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'보관금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strAmtClntNm',name:'지불처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'initAmt',name:'선수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prePayAmt',name:'선급',dataType:'number'}},{T:1,N:'w2:column',A:{id:'requestYn',name:'의뢰여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOn',name:'실상차보고일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOff',name:'실하차보고일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idx',name:'TMS OrderNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOnQty',name:'실상차수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'오더상세정보1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez108Idx',name:'오더상세정보2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmCoshippingNoChk',name:'합적번호체크',dataType:'text',ignoreStatus:'true'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_flc',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_flc_oncelldatachange','ev:ondataload':'scwin.ds_flc_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regDd',name:'등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idx',name:'TMS OrderNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterIdx',name:'운송의뢰주정보Idx',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cargoIdx',name:'운송의뢰디테일Idx',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cargoType',name:'화물종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statuss',name:'화물상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'등록처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez112Idx',name:'거래처정보SEQ',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'화주담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'화주전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDd',name:'상차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmOrdNo',name:'동부오더번호(값)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmord',name:'동부오더번호(표시)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarSts',name:'차량상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'상차전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDd',name:'하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'하차전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosDistrict',name:'상차지권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosDistrictCd',name:'상차지권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosDistrict',name:'하차지권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosDistrictCd',name:'하차지권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCo',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoTel',name:'선사전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'line',name:'라인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOn',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOff',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOnDt',name:'실상차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOffDt',name:'실하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOnHh',name:'실상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOffHh',name:'실하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpNm',name:'선박명/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNo',name:'포트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrOrdNo',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR N0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSealNo',name:'실번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDptDd',name:'출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrArvDd',name:'도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyCmis',name:'CY수수료 Commission',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hndlCmisPl',name:'취급료 청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgHndlCmis',name:'청구취급수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payHndlCmis',name:'지불취급수수료를 기타비용으로 사용',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cstmclrncCmis',name:'통관료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'onCmis',name:'상차료 On Commission',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payCmisPayfor',name:'상차료대납여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'onCmisBilgFareInc',name:'상차료청구운임에 포함 여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offCmis',name:'하차료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrSiz',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizDisp',name:'사이즈표시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTyp',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypDisp',name:'타입표시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emptyFull',name:'E/F',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strAmtClntNm',name:'지불처',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strAmtClntNmTx',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'고정보관비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hirecarClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekCls',name:'인수증구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclPicNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTelNo2',name:'기사전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCloseDt',name:'컨테이너마감일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col81',name:'상차료대납여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col82',name:'상차료청구운임에 포함 여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'openYn',name:'공개여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(Kg)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'requestYn',name:'의뢰여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copinoResponse',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez108Idx',name:'담당자SEQ',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'배차차량IDX',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chassisVehclNo',name:'샤시차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Result'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_edi',saveRemovedData:'true','ev:ondataload':'scwin.ds_edi_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ApplyAlloccarCancel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flIdxs',name:'화물번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flFlag',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flDtlIdxs',name:'화물상세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자아이디',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_PdaReport',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flFlag',name:'화물구분',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'rtpTyp',name:'보고종류',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ez202Idx',name:'운송의뢰주정보IDX',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'dtlIdx',name:'화물상세정보IDX',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'realOnDt',name:'실상차시간',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'realOffDt',name:'실하차시간',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'realOnQty',name:'실상차수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'realOnWt',name:'실상차수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'철송/해송구분',dataType:'text',defaultValue:'',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ApplyAlloccar',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'operFlag',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flFlag',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operDate',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdx',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flIdxs',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flDtlIdxs',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentClntIdx',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentVehclIdx',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclDate',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez124Idx',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqKndCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisVehclNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pda',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sms',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_userInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hdofficeIdx',name:'본사영업소IDX',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'bhofficeIdx',name:'영업소소속지사IDX',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'officeIdx',name:'officeIdx',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text',length:'20'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getUserInfo',action:'/ncall.bp.common.userinfo.fbuserinfoCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_userInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getUserInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_common',action:'',method:'post',mediatype:'application/json',ref:'data:json,dma_common',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_PdaReport',action:'/ncall.bp.fbp.op.ac.RegisterPdaReportCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_PdaReport","key":"IN_PDA_REPORT"}, {"id":"ds_Result","key":"OUT_PDA_REPORT"}]',target:'data:json,[{"id":"ds_Result","key":"OUT_PDA_REPORT"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_PdaReport_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ApplyAlloccarCancel',action:'/ncall.bp.fbp.op.ac.ApplyAlloccarCancelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ApplyAlloccarCancel","key":"IN_ALLOCCAR_CANCEL"}, {"id":"ds_Result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Result","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ApplyAlloccarCancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ApplyAlloccar',action:'/ncall.bp.fbp.op.ac.ApplyAlloccarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ApplyAlloccar","key":"IN_DS1"}, {"id":"ds_Result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Result","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ApplyAlloccar_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveAll',action:'/ncall.bp.fbp.op.ac.ApplyAlloccarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ApplyAlloccar","key":"IN_DS1"}, {"id":"ds_Result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Result","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveAll_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.selectedLclRow = "";
scwin.vehclType = "";
scwin.msgFlag = "flase";
scwin.onpageload = function () {
  scwin.UserID = $c.data.getMemInfo($p, "userId"); //사용자ID

  // 사용자정보 조회
  $c.sbm.execute($p, sbm_getUserInfo);
};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {
  // 조회기간 - 당일
  scwin.f_dateSetting(1, "cargo");

  // 화물상태 - 의뢰
  cbx_cargoSts1.setValue("1");

  // udc setting
  udc_topGrdBtnCargo.setGridId("gr_fl");
  udc_topGrdBtnCont.setGridId("gr_flc");
};

/**
 * 사용자정보 조회 callback
 */
scwin.sbm_getUserInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // 유저 정보 필요한 경우 사용
  const {
    bhofficeIdx,
    hdofficeIdx,
    officeIdx,
    userId
  } = ds_userInfo.getAllJSON(0);

  // todo 유저정보 가져오기.
  // IfbuserinfoMgnt userinfo = (IfbuserinfoMgnt)DComponentFactory.getComponentImpl(fbuserinfoMgntPBC.class);
  // fbuserinfoDTO UserQC = new fbuserinfoDTO();
  // UserQC.setUserId(UserID);   
  // List UserQCList = userinfo.GetUserInfo(UserQC);
  // fbuserinfoDTO fbuserinfoDTOAl = (fbuserinfoDTO)UserQCList.get(0);
  // double HdofficeIdx= fbuserinfoDTOAl.getHdofficeCd();
  // double BhofficeIdx = fbuserinfoDTOAl.getBhofficeCd();
  // double OfficeIdx= fbuserinfoDTOAl.getOfcCd();
};

/**
 * 조회조건 Clear
 */
scwin.f_Trash = function (e) {
  ed_odrNo.setValue(""); // 오더번호
  ed_cntrNo.setValue(""); // 컨테이너번호
  lc_impExpDomesticClsCd.setValue(""); // 수출입구분
};

/**
 * [조회] click
 * - 영업소 udc 조회 후 동작(처음 화면 호출 시)
 * - 배차취소 후 동작
 * - 
 */
scwin.reflashdata = function (e) {
  scwin.tac_tabControl1_onchange("", "", tac_tabControl1.getSelectedTabID());
};

/**
 * tabControl change
 */
scwin.tac_tabControl1_onchange = function (tabId, index, userTabId) {
  scwin.search(userTabId);
};

/**
 * 조회
 */
scwin.search = async function (cargoType) {
  ds_Result.removeAll();
  ds_Result.reform();
  scwin.cargoType = cargoType;

  // 항목축소 적용
  scwin.f_setGrid(cbx_changeForm.getValue());
  const condition = {};

  // 영업소
  const {
    hdoIdx,
    bhoIdx,
    offIdx
  } = dma_comComboMap.getJSON();
  condition.cargoHdidx = parseInt(hdoIdx);
  condition.cargoBhidx = parseInt(bhoIdx);
  condition.cargoOfcidx = parseInt(offIdx);

  // 조회기간
  condition.cargoDateTyp = lc_cargoDateTyp.getValue();
  condition.cargoDateCnd = 1;
  condition.cargoDate1 = ed_cargoDate1.getValue();
  condition.cargoDate2 = ed_cargoDate2.getValue();

  // 화물상태
  condition.cargoSts1 = cbx_cargoSts1.getValue() == "1" ? 1 : 0;
  condition.cargoSts2 = cbx_cargoSts2.getValue() == "1" ? 1 : 0;
  condition.cargoSts3 = cbx_cargoSts3.getValue() == "1" ? 1 : 0;

  // 오더번호
  if (ed_odrNo.getValue() != "") {
    condition.cargoSrchTyp = 5;
    condition.cargoSrchCnd = ed_odrNo.getValue().toUpperCase();
  }
  condition.ord = 0;
  condition.caridx = "";
  dma_common.setEmptyValue();
  if (cargoType == "cargo") {
    // 벌크화물

    scwin.set_searchArea(false);
    dma_common.setJSON(condition);
    $c.sbm.setAction($p, sbm_common, "/ncall.bp.fbp.op.ac.cmd.RetrieveBlkCMD.do");
    const ret = await $c.sbm.execute($p, sbm_common);
    if (ret.responseJSON.resultDataSet[0].Code == 0) {
      ds_fl.setJSON(ret.responseJSON.GAUCE);
    }
  } else if (cargoType == "cont") {
    // 컨테이너

    scwin.set_searchArea(true);

    // 컨테이너번호
    if (ed_cntrNo.getValue() != "") {
      condition.cntrNo = ed_cntrNo.getValue().toUpperCase();
    }
    // 수출입구분
    if (lc_impExpDomesticClsCd.getValue() != "") {
      condition.impExpDomesticClsCd = lc_impExpDomesticClsCd.getValue();
    }
    dma_common.setJSON(condition);
    $c.sbm.setAction($p, sbm_common, "/ncall.bp.fbp.op.ac.cmd.RetrieveCntrCMD.do");
    const ret = await $c.sbm.execute($p, sbm_common);
    if (ret.responseJSON.resultDataSet[0].Code == 0) {
      ds_flc.setJSON(ret.responseJSON.GAUCE);
    }
  }
};

/**
 * 벌크화물 dataList
 */
scwin.ds_fl_ondataload = function () {
  // if (ds_fl.getTotalRow() < 1) return;

  const grdObj = cbx_changeForm.getValue() == 1 ? gr_fl2 : gr_fl;
  const initRow = 0;

  // as-is는 주고 있는데
  // scwin.selectedLclRow = initRow;

  for (let row = 0; row < ds_fl.getTotalRow(); row++) {
    // 글자색 변경
    const statuss = ds_fl.getCellData(row, "statuss");
    if (statuss === "대기") {
      gr_fl.setRowColor(row, "blue");
      gr_fl2.setRowColor(row, "blue");
    } else {
      gr_fl.setRowColor(row, "black");
      gr_fl2.setRowColor(row, "black");
    }

    // as-is RowMark 대응
    ds_fl.setCellData(row, "dmCoshippingNoChk", 0);
  }

  // 합적번호
  // 0번 row의 합적번호가 있으면 - 합적번호가 같은 row 체크
  // 0번 row의 합적번호가 없으면 - 0번 row 체크
  const dmCoshippingNo = ds_fl.getCellData(initRow, 'dmCoshippingNo');
  const matchArr = ds_fl.getMatchedIndex("dmCoshippingNo", dmCoshippingNo, true);
  if ($c.util.isEmpty($p, dmCoshippingNo)) {
    // 0번째 합적번호가 없어
    ds_fl.setCellData(initRow, "dmCoshippingNoChk", 1);
    gr_fl.setRowBackgroundColor(initRow, "#fcf8e3");
    gr_fl.setRowColor(initRow, "black");
  } else {
    // 0번 row의 합적번호가 있어
    if (matchArr.length > 0) {
      for (let i = 0; i < matchArr.length; i++) {
        ds_fl.setCellData(matchArr[i], "dmCoshippingNoChk", 1);
        gr_fl.setRowBackgroundColor(matchArr[i], "#fcf8e3");
        gr_fl.setRowColor(matchArr[i], "black");
      }
    } else {
      // 동일한 합적번호가 없는 경우
      ds_fl.setCellData(initRow, "dmCoshippingNoChk", 1);
      gr_fl.setRowBackgroundColor(initRow, "#fcf8e3");
      gr_fl.setRowColor(initRow, "black");
    }
  }

  // 합적번호가 있는 경우 → 중복이 없는 합적번호만 카운트
  // 합적번호가 없는 경우 → 각 행을 그대로 카운트
  let iTotalRows = 0;
  for (let i = 0; i < ds_fl.getTotalRow(); i++) {
    const rowDmCoshippingNo = ds_fl.getCellData(i, 'dmCoshippingNo');
    let coshippingFlag = false;
    if (rowDmCoshippingNo != "") {
      for (let j = 0; j < ds_fl.getTotalRow(); j++) {
        if (i != j && rowDmCoshippingNo == ds_fl.getCellData(j, 'dmCoshippingNo')) {
          coshippingFlag = true;
          break;
        }
      }
      if (!coshippingFlag) {
        iTotalRows = iTotalRows + 1;
      }
    } else {
      iTotalRows = iTotalRows + 1;
    }
  }
  tbx_totalRows.setValue(iTotalRows);

  // focus
  const columnId = cbx_changeForm.getValue() == 1 ? "onDd" : "regDd";
  grdObj.setFocusedCell(0, columnId);
};

/**
 * 벌크화물 dataList cell data change
 * > 가우스 onColumnChanged
 */
scwin.ds_fl_oncelldatachange = function (info) {
  const {
    rowIndex,
    colID
  } = info;
  const {
    dmCoshippingNo,
    vehclNo,
    ez108Idx,
    ez110Idx,
    vehclPicNm,
    vehclTelNo2,
    alloccarDd,
    dptDt,
    arvDt,
    dptHh,
    arvHh
  } = ds_fl.getRowJSON(rowIndex);

  // 배차일
  if (alloccarDd == "") {
    ds_fl.setCellData(rowIndex, 'dptDt', "");
    ds_fl.setCellData(rowIndex, 'arvDt', "");
    ds_fl.setCellData(rowIndex, 'dptHh', "");
    ds_fl.setCellData(rowIndex, 'arvHh', "");
  }
  if (colID == 'vehclNo' || colID == 'ez108Idx' || colID == 'ez110Idx' || colID == 'vehclPicNm' || colID == 'vehclTelNo2' || colID == 'ez110Idx' || colID == 'alloccarDd' || colID == 'dptDt' || colID == 'arvDt' || colID == 'dptHh' || colID == 'arvHh') {
    // 합적번호
    if (dmCoshippingNo != "") {
      for (let j = 0; j < ds_fl.getTotalRow(); j++) {
        if (rowIndex != j && dmCoshippingNo == ds_fl.getCellData(j, 'dmCoshippingNo')) {
          ds_fl.setCellData(j, 'vehclNo', vehclNo);
          ds_fl.setCellData(j, 'ez108Idx', ez108Idx);
          ds_fl.setCellData(j, 'ez110Idx', ez110Idx);
          ds_fl.setCellData(j, 'vehclPicNm', vehclPicNm);
          ds_fl.setCellData(j, 'vehclTelNo2', vehclTelNo2);
          ds_fl.setCellData(j, 'alloccarDd', alloccarDd);
          ds_fl.setCellData(j, 'dptDt', dptDt);
          ds_fl.setCellData(j, 'arvDt', arvDt);
          ds_fl.setCellData(j, 'dptHh', dptHh);
          ds_fl.setCellData(j, 'arvHh', arvHh);
        }
      }
    }
  }
};

/**
 * 컨테이너 dataList
 */
scwin.ds_flc_ondataload = function () {
  // focus
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_flc2 : gr_flc;
  const columnId = cbx_changeForm.getValue() == 1 ? "cntrNo" : "regDd";
  grdObj.setFocusedCell(0, columnId);
  scwin.selectedLclRow = "";

  // row count
  tbx_totalRows2.setValue(ds_flc.getTotalRow());
};

/**
 * 컨테이너 dataList cell data change
 */
scwin.ds_flc_oncelldatachange = function (info) {
  const {
    rowIndex
  } = info;

  // 배차일
  if (ds_fl.getCellData(rowIndex, 'alloccarDd') == "") {
    ds_fl.setCellData(rowIndex, 'dptDt', "");
    ds_fl.setCellData(rowIndex, 'arvDt', "");
  }
};

/**
 * EDI 사전정보 dataList
 * : 컨테이너 탭 [COPINO전송] 버튼 클릭 후처리에서 setJSON
 */
scwin.ds_edi_ondataload = function () {
  if (ds_edi.getTotalRow() == 0) return;
  const {
    odrNo,
    cntrSeq,
    wrkPathSeq,
    wrkStpSeq,
    cntrNo,
    dptWrkPlCd,
    arvWrkPlCd,
    dptWrkPlNm,
    arvWrkPlNm
  } = ds_edi.getRowJSON(0);
  var paramJson = {
    mdiTitle: "반출입정보EDI등록",
    crryoutEdiType: "",
    crryinEdiType: "",
    arrParam: [["", "", odrNo, cntrSeq, wrkPathSeq, wrkStpSeq, "", "", "", "", "", cntrNo, dptWrkPlCd, arvWrkPlCd, dptWrkPlNm, arvWrkPlNm, "CO", "CO"]]
  };
  const opts = {
    id: "op_202_02_23p",
    popupName: "반출입예정정보EDI등록",
    modal: true,
    type: "browserPopup",
    title: "반출입예정정보EDI등록",
    width: "1100",
    height: "850"
  };
  $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_23p.xml", opts, paramJson);
  // "/ds/op/wrkplan/transwrkplan/op_202_02_21p.jsp?paramTitle=반출입예정정보EDI등록&crryoutEdiType=&crryinEdiType=";
};

/**
 * [저장하기] - param : all
 * [배차] - param : undefined
 */
scwin.f_ApplyAlloccar = async function (param) {
  let ds;
  let vFlFlag; // 화물구분 : 1.벌크, 2.컨테이너

  if (scwin.cargoType == 'cargo') {
    vFlFlag = '1';
    ds = ds_fl;
  } else {
    vFlFlag = '2';
    ds = ds_flc;
  }
  ;
  if (ds.getModifiedIndex().length < 1) {
    $c.win.alert($p, "변경된 내용이 없습니다.");
    return;
  }
  const lclRow = ds.getRowPosition(); // 선택된 화물정보

  var vOpenFlag; // 배차구분 : 1.배차, 2.용차	
  var vOperDate; // 배차일자(실제 배차되는 일자)
  var vVehclIdx; // 공차등록된 차량 idx
  var vFlIdxs; // 선택된 화물 idx
  var vRentClntIdx; // 용차사 idx(거래처)
  var vRentVehclIdx; // 용차 idx (차량)
  var vVehclDate; // 공차등록일
  var vRmk; // 비고
  var vUserId; // 사용자 아이디
  var vEz124Idx; // 샤시등록번호
  var chassisEqCd; // 샤시장비코드
  var chassisEqKndCd; // 샤시종류코드
  var chassisVehclNo; // 샤시차량번호

  // 현재 화면은 배차 화면
  vOpenFlag = '1';
  ds_ApplyAlloccar.removeAll();
  ds_ApplyAlloccar.reform();
  for (let i = 0; i < ds.getModifiedIndex().length; i++) {
    const row = ds.getModifiedIndex()[i];

    // 저장하기 / 배차 공통 필수 조건
    if (ds.getCellData(row, "alloccarDd") == "") {
      $c.win.alert($p, "배차일자를 입력하세요");
      return;
    }
    if (ds.getCellData(row, "ez110Idx") == "" || ds.getCellData(row, "ez110Idx") == 0) {
      $c.win.alert($p, "차량을 선택하세요");
      return;
    }

    // 저장하기 필수 조건
    if (param == 'ALL') {
      if (scwin.cargoType == 'cargo') {
        if (ds.getCellData(row, "realOnWt") == "") {
          $c.win.alert($p, "실상차 수량이나 실상차 중량을 입력하세요.");
          return;
        }

        // 벌크화물
        if (ds.getCellData(row, "dptDt") == "" || ds.getCellData(row, "dptHh") == "" || ds.getCellData(row, "arvDt") == "" || ds.getCellData(row, "arvHh") == "") {
          $c.win.alert($p, "상하차 시간을 모두 입력하세요");
          return;
        }
        if (ds.getCellData(row, "dptDt") + ds.getCellData(row, "dptHh") > ds.getCellData(row, "arvDt") + ds.getCellData(row, "arvHh")) {
          $c.win.alert($p, "상차시간은 하차시간보다 빨라야 합니다.");
          return;
        }
      } else {
        // 컨테이너
        if (ds.getCellData(row, "realOnDt") == "" || ds.getCellData(row, "realOnHh") == "" || ds.getCellData(row, "realOffDt") == "" || ds.getCellData(row, "realOffHh") == "") {
          $c.win.alert($p, "상하차 시간을 모두 입력하세요");
          return;
        }
        if (ds.getCellData(row, "realOnDt") + ds.getCellData(row, "realOffDt") > ds.getCellData(row, "realOffDt") + ds.getCellData(row, "arvHh")) {
          $c.win.alert($p, "상차시간은 하차시간보다 빨라야 합니다.");
          return;
        }
      }
    }
    vOperDate = ds.getCellData(row, "alloccarDd");
    vVehclIdx = ds.getCellData(row, "ez110Idx");
    vFlIdxs = ds.getCellData(row, "idx");
    vVehclDate = ds.getCellData(row, "alloccarDd");
    vUserId = scwin.UserID;
    const iRow = ds_ApplyAlloccar.insertRow();
    ds_ApplyAlloccar.setCellData(iRow, "operFlag", vOpenFlag); // 배차구분 : 1.배차, 2.용차
    ds_ApplyAlloccar.setCellData(iRow, "flFlag", vFlFlag); // 화물구분 : 1.벌크, 2.컨테이너
    ds_ApplyAlloccar.setCellData(iRow, "operDate", vOperDate); // 배차일자(실제 배차되는 일자)
    ds_ApplyAlloccar.setCellData(iRow, "vehclIdx", String(vVehclIdx)); // 공차등록된 차량 idx
    ds_ApplyAlloccar.setCellData(iRow, "flIdxs", vFlIdxs.substring(0, vFlIdxs.indexOf("-"))); // 선택된 화물 idx
    ds_ApplyAlloccar.setCellData(iRow, "flDtlIdxs", vFlIdxs.substring(vFlIdxs.indexOf("-") + 1, 20)); // 선택된 화물 idx
    ds_ApplyAlloccar.setCellData(iRow, "rentClntIdx", vRentClntIdx); // 용차사 idx(거래처)
    ds_ApplyAlloccar.setCellData(iRow, "rentVehclIdx", vRentVehclIdx); // 용차 idx (차량)
    ds_ApplyAlloccar.setCellData(iRow, "vehclDate", vVehclDate); // 공차등록일
    ds_ApplyAlloccar.setCellData(iRow, "rmk", vRmk); // 비고
    ds_ApplyAlloccar.setCellData(iRow, "userId", vUserId); // 사용자 아이디
    ds_ApplyAlloccar.setCellData(iRow, "ez124Idx", vEz124Idx); // 샤시등록번호
    ds_ApplyAlloccar.setCellData(iRow, "chassisEqCd", chassisEqCd); // 샤시장비코드
    ds_ApplyAlloccar.setCellData(iRow, "chassisEqKndCd", chassisEqKndCd); // 샤시종류코드
    ds_ApplyAlloccar.setCellData(iRow, "chassisVehclNo", chassisVehclNo); // 샤시차량번호
    ds_ApplyAlloccar.setCellData(iRow, "pda", "Y");
    ds_ApplyAlloccar.setCellData(iRow, "sms", "Y");
  }

  // 구분(col1)에 따라 분기
  if (ds_fl.getCellData(lclRow, "col1") == "Y") {
    ds_ApplyAlloccar.removeAll();
    ds_ApplyAlloccar.reform();
    $c.win.confirm($p, "선매오더처리 하시겠습니까?").then(rtn => {
      if (rtn) {
        // as-is부터 해당 submission 없음
        // tr_Preorder.post();
        $c.sbm.execute($p, sbm_Preorder);
      }
    });
  } else {
    $c.win.confirm($p, "배차 하시겠습니까?").then(rtn => {
      if (rtn) {
        if (param == 'ALL') {
          // 저장하기
          $c.sbm.execute($p, sbm_SaveAll);
        } else {
          // 배차
          $c.sbm.execute($p, sbm_ApplyAlloccar);
        }
      }
    });
  }
};

/**
 * [저장하기] callback
 */
scwin.sbm_SaveAll_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    const msg = ds_Result.getCellData(0, "outMsg");
    if (!$c.util.isEmpty($p, msg)) {
      $c.win.alert($p, msg).then(() => {
        // [운송보고]
        scwin.f_Save('SAVE');
      });
    }
  }
};

/**
 * [배차] callback
 */
scwin.sbm_ApplyAlloccar_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    const msg = ds_Result.getCellData(0, "outMsg");
    if (!$c.util.isEmpty($p, msg)) {
      $c.win.alert($p, msg).then(() => {
        scwin.reflashdata();
      });
    }
  }
};

/**
 * [운송보고]
 * - 현화면에서는 type으로 오는 값이 "save"만 있으나 다른 화면에서 부를 수도 있으니까 살려두기
 */
scwin.f_Save = function (type) {
  let vFlIdxs;
  var ds;

  // 화물구분		
  if (scwin.cargoType == 'cargo') {
    ds = ds_fl;
  } else {
    ds = ds_flc;
  }
  ;
  var lclRow = ds.getRowPosition();
  if (type == "CANCEL") {
    $c.win.alert($p, "선택된 배차정보가 없습니다.");
    return;
  }

  // 밑에서 for문 돌면서 status가 U인 row를 찾아서 작업하는데
  // rowPosition으로 arvDt를 비교하는게 의미가 있을까싶음
  if (type == "CANCEL" && ds.getCellData(lclRow, 'arvDt') == "") {
    $c.win.alert($p, "상하차보고가 되지 않았습니다");
    return;
  }
  if (ds.getModifiedIndex().length < 1) {
    $c.win.alert($p, "변경된 내용이 없습니다.");
    return;
  }
  ds_PdaReport.removeAll();
  ds_PdaReport.reform();
  if (type == "SAVE") {
    for (let i = 0; i < ds.getModifiedIndex().length; i++) {
      const row = ds.getModifiedIndex()[i];
      const iRow = ds_PdaReport.insertRow();
      vOperDate = ds.getCellData(row, "alloccarDd");
      vVehclIdx = ds.getCellData(row, "ez110Idx");
      vFlIdxs = ds.getCellData(row, "idx");
      vVehclDate = ds.getCellData(row, "alloccarDd");
      vUserId = scwin.UserID;
      if (scwin.cargoType == 'cargo') {
        if ($c.util.isEmpty($p, ds.getCellData(row, "realOnWt"))) {
          $c.win.alert($p, "실상차 수량이나 실상차 중량을 입력하세요.");
          return;
        }
        if (ds.getCellData(row, "dptDt") + ds.getCellData(row, "dptHh") == "" || ds.getCellData(row, "arvDt") + ds.getCellData(row, "arvHh") == "") {
          $c.win.alert($p, "시간을 모두 입력하세요");
          return;
        }

        // 보고종류
        // dptDt: 상차일자 | arvDt: 하차일자
        if (ds.getCellData(row, "dptDt") != "" && ds.getCellData(row, "arvDt") == "") {
          //상차보고
          ds_PdaReport.setCellData(iRow, "rtpTyp", '1');
        } else if (ds.getCellData(row, "dptDt") != "" && ds.getCellData(row, "arvDt") != "") {
          //상하차보고
          ds_PdaReport.setCellData(iRow, "rtpTyp", '3');
        } else {
          ds_PdaReport.setCellData(iRow, "rtpTyp", '3');
        }
        ds_PdaReport.setCellData(iRow, "flFlag", '1');
        ds_PdaReport.setCellData(iRow, "realOnDt", ds.getCellData(row, "dptDt") + ds.getCellData(row, "dptHh"));
        ds_PdaReport.setCellData(iRow, "realOffDt", ds.getCellData(row, "arvDt") + ds.getCellData(row, "arvHh"));
      } else {
        if (ds.getCellData(row, "cntrNo") == "") {
          $c.win.alert($p, "컨테이너 번호를 입력하세요");
          return;
        }
        if (ds.getCellData(row, "realOnDt") + ds.getCellData(row, "realOnHh") == "" || ds.getCellData(row, "realOffDt") + ds.getCellData(row, "realOffHh") == "") {
          $c.win.alert($p, "시간을 모두 입력하세요");
          return;
        }
        if (ds.getCellData(row, "realOnDt") != "" && ds.getCellData(row, "realOffDt") == "") {
          //상차보고
          ds_PdaReport.setCellData(iRow, "rtpTyp", '1');
        } else if (ds.getCellData(row, "realOnDt") != "" && ds.getCellData(row, "realOffDt") != "") {
          //상하차보고
          ds_PdaReport.setCellData(iRow, "rtpTyp", '3');
        } else {
          ds_PdaReport.setCellData(iRow, "rtpTyp", '3');
        }
        ds_PdaReport.setCellData(iRow, "flFlag", '2');
        ds_PdaReport.setCellData(iRow, "cntrNo", ds.getCellData(row, "cntrNo"));
        ds_PdaReport.setCellData(iRow, "sealNo", ds.getCellData(row, "sealNo"));
        ds_PdaReport.setCellData(iRow, "realOnDt", ds.getCellData(row, "realOnDt") + ds.getCellData(row, "realOnHh"));
        ds_PdaReport.setCellData(iRow, "realOffDt", ds.getCellData(row, "realOffDt") + ds.getCellData(row, "realOffHh"));
      }
      ds_PdaReport.setCellData(iRow, "realOnWt", ds.getCellData(row, "realOnWt"));
      ds_PdaReport.setCellData(iRow, "ez202Idx", vFlIdxs.substring(0, vFlIdxs.indexOf("-")));
      ds_PdaReport.setCellData(iRow, "dtlIdx", vFlIdxs.substring(vFlIdxs.indexOf("-") + 1, 20));
    }
  } else {
    // type이 CANCEL인 경우(현화면에선 없음)

    const iRow = ds_PdaReport.insertRow();
    vOperDate = ds.getCellData(lclRow, "alloccarDd");
    vVehclIdx = ds.getCellData(lclRow, "ez110Idx");
    vFlIdxs = ds.getCellData(lclRow, "idx");
    vVehclDate = ds.getCellData(lclRow, "alloccarDd");
    vUserId = scwin.UserID;
    if (scwin.cargoType == 'cargo') {
      ds_PdaReport.setCellData(iRow, "flFlag", '1');
    } else {
      ds_PdaReport.setCellData(iRow, "flFlag", '2');
      ds_PdaReport.setCellData(iRow, "cntrNo", ds.getCellData(lclRow, "cntrNo"));
      ds_PdaReport.setCellData(iRow, "sealNo", ds.getCellData(lclRow, "sealNo"));
    }
    ds_PdaReport.setCellData(iRow, "realOnWt", ds.getCellData(lclRow, "realOnWt"));
    ds_PdaReport.setCellData(iRow, "ez202Idx", vFlIdxs.substring(0, vFlIdxs.indexOf("-")));
    ds_PdaReport.setCellData(iRow, "dtlIdx", vFlIdxs.substring(vFlIdxs.indexOf("-") + 1, 20));
    ds_PdaReport.setCellData(iRow, "realOnDt", ds.getCellData(lclRow, "dptDt") + "0000");
    ds_PdaReport.setCellData(iRow, "realOffDt", ds.getCellData(lclRow, "arvDt") + "0000");
    ds_PdaReport.setCellData(iRow, "rtpTyp", '3');
  }

  // ds_PdaReport에 데이터를 담지않고 보내도 되는건가
  $c.sbm.execute($p, sbm_PdaReport);
};

/**
 * [운송보고] callback
 */
scwin.sbm_PdaReport_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    const msg = ds_Result.getCellData(0, "outMsg");
    if (!$c.util.isEmpty($p, msg)) {
      $c.win.alert($p, msg).then(() => {
        scwin.reflashdata();
      });
    }
  }
};

/**
 * 배차취소
 */
scwin.cancelop = async function (e) {
  if ($c.util.isEmpty($p, scwin.selectedLclRow)) {
    $c.win.alert($p, "화물 정보가 선택되지 않았습니다.");
    return;
  }
  if (await $c.win.confirm($p, "배차를 취소하시겠습니까?")) {
    let vFlIdxs = "";
    let vFlFlag = "";

    // 화물구분 (1:벌크, 2:컨테이너)
    if (scwin.cargoType == 'cargo') {
      vFlFlag = '1';
      const matchArr = ds_fl.getMatchedIndex("dmCoshippingNoChk", 1, true);
      for (let i = 0; i < matchArr.length; i++) {
        vFlIdxs += ds_fl.getCellData(matchArr[i], "idx") + ',';
      }
      vFlIdxs = vFlIdxs.substring(0, vFlIdxs.length - 1); // 쉼표 제거
    } else {
      vFlFlag = '2';
      vFlIdxs = ds_flc.getCellData(scwin.selectedLclRow, "idx");
    }
    ds_ApplyAlloccarCancel.removeAll();
    ds_ApplyAlloccarCancel.reform();
    var loop = vFlIdxs.replaceAll("-", ",").split(",");
    for (let i = 0; i < loop.length; i += 2) {
      let iRow = ds_ApplyAlloccarCancel.insertRow();
      ds_ApplyAlloccarCancel.setCellData(iRow, "flIdxs", loop[i]);
      ds_ApplyAlloccarCancel.setCellData(iRow, "flFlag", vFlFlag);
      ds_ApplyAlloccarCancel.setCellData(iRow, "flDtlIdxs", loop[i + 1]);
      ds_ApplyAlloccarCancel.setCellData(iRow, "userId", scwin.UserID);
    }
    $c.sbm.execute($p, sbm_ApplyAlloccarCancel);
  }
};

/**
 * 배차취소 callback
 */
scwin.sbm_ApplyAlloccarCancel_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    const msg = ds_Result.getCellData(0, "outMsg");
    if (!$c.util.isEmpty($p, msg)) {
      $c.win.alert($p, msg).then(() => {
        scwin.reflashdata();
      });
    }
  }
};

/**
 * 당일 / 금주 / 금월 / 전월 / 지정 - 조회기간 세팅1
 */
scwin.f_dateSetting = function (selObj, cas) {
  if (selObj == 1) {
    //금일
    scwin.f_eventRadioClick(cas, '1');
  } else if (selObj == 2) {
    //금주
    scwin.f_eventRadioClick(cas, '2');
  } else if (selObj == 3) {
    //금월
    scwin.f_eventRadioClick(cas, '3');
  } else if (selObj == 4) {
    //전월
    scwin.f_eventRadioClick(cas, '4');
  } else if (selObj == 5) {//지정
  }
};

/**
 * 당일 / 금주 / 금월 / 전월 / 지정 - 조회기간 세팅2
 */
scwin.f_eventRadioClick = function (obj, type) {
  scwin.vToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환 

  const toDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  switch (type) {
    // 당일
    case '1':
      {
        // Object 에 날짜 입력(날짜는 20080101 형식)
        if (obj == 'car') {
          ed_vehclDate1.setValue(toDate);
          ed_vehclDate2.setValue(toDate);
        } else {
          ed_cargoDate1.setValue(toDate);
          ed_cargoDate2.setValue(toDate);
        }
        break;
      }

    // 금주
    case '2':
      {
        const range = scwin.getWeekRangeSunToSat(new Date());
        sDt1 = range.sDt1;
        sDt2 = range.sDt2;
        if (obj == 'car') {
          ed_vehclDate1.setValue(sDt1);
          ed_vehclDate2.setValue(sDt2);
        } else {
          ed_cargoDate1.setValue(sDt1);
          ed_cargoDate2.setValue(sDt2);
        }
        break;
      }

    // 금월
    case '3':
      {
        const yyyyMM = toDate.slice(0, 6);

        // 조회 시작일
        sDt1 = `${yyyyMM}01`;

        // 조회 종료일				
        sDt2 = `${yyyyMM}${$c.date.getLastDateOfMonth($p, yyyyMM)}`;
        if (obj == 'car') {
          ed_vehclDate1.setValue(sDt1);
          ed_vehclDate2.setValue(sDt2);
        } else {
          ed_cargoDate1.setValue(sDt1);
          ed_cargoDate2.setValue(sDt2);
        }
        break;
      }

    // 전월
    case '4':
      {
        // 조회 시작일
        sDt1 = $c.date.getDateAddMonthDirection($p, toDate, "-1", "F");

        // 조회 종료일				
        sDt2 = $c.date.getDateAddMonthDirection($p, toDate, "-1", "L");
        if (obj == 'car') {
          ed_vehclDate1.setValue(sDt1);
          ed_vehclDate2.setValue(sDt2);
        } else {
          ed_cargoDate1.setValue(sDt1);
          ed_cargoDate2.setValue(sDt2);
        }
        break;
      }

    // 지정
    case '5':
      {
        break;
      }
  }
};

/**
 * 금주 세팅
 */
scwin.getWeekRangeSunToSat = function (date) {
  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function yyyymmdd(d) {
    return d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate());
  }
  var d = date ? new Date(date.getTime()) : new Date();
  var day = d.getDay(); // 0(일)~6(토)

  var sun = new Date(d);
  sun.setDate(d.getDate() - day);
  var sat = new Date(d);
  sat.setDate(d.getDate() + (6 - day));
  return {
    sDt1: yyyymmdd(sun),
    sDt2: yyyymmdd(sat)
  };
};

/**
 * 조회기간 타입 onchange
 */
scwin.lc_cargoDateTyp_onchange = function (info) {
  scwin.f_dateSetting(info.newValue, 'cargo');
};

/**
 * 항목축소 체크박스 onchange
 */
scwin.cbx_changeForm_onchange = function (info) {
  scwin.f_setGrid(info.newValue == "" ? 0 : info.newValue);
};

/**
 * 그리드 column 축소
 */
scwin.f_setGrid = function (flag) {
  if (scwin.cargoType == 'cargo') {
    if (flag == 0) {
      gr_fl.setStyle("display", "block");
      gr_fl2.setStyle("display", "none");
      udc_topGrdBtnCargo.setGridId("gr_fl");
    } else {
      gr_fl.setStyle("display", "none");
      gr_fl2.setStyle("display", "block");
      udc_topGrdBtnCargo.setGridId("gr_fl2");
    }
  } else {
    if (flag == 0) {
      gr_flc.setStyle("display", "block");
      gr_flc2.setStyle("display", "none");
      udc_topGrdBtnCont.setGridId("gr_flc");
    } else {
      gr_flc.setStyle("display", "none");
      gr_flc2.setStyle("display", "block");
      udc_topGrdBtnCont.setGridId("gr_flc2");
    }
  }
  ;
};

/**
 * 벌크화물 탭 그리드 상단 : 지사 selectbox onchange
 */
scwin.lc_cargoGub_onchange = function (info) {
  const filterValue = info.newValue;
  if ($c.util.isEmpty($p, filterValue)) {
    ds_fl.clearFilter();
    return;
  }
  const fn_filter = function (cellData, tmpParam, rowIdx) {
    if (cellData == filterValue) {
      return true;
    }
    return false; // return이 true인 경우 적용하고 false인 경우 넘김
  };
  ds_fl.clearFilter();
  ds_fl.setColumnFilter({
    type: "func",
    colIndex: "lobranNm",
    key: fn_filter,
    condition: "and"
  });
};

/**
 * 벌크화물 그리드 cell click
 */
scwin.gr_fl_oncellclick = function (rowIndex, columnIndex, columnId) {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_fl2 : gr_fl;
  scwin.selectedLclRow = rowIndex;
  const {
    dmCoshippingNo,
    statuss,
    alloccarSts,
    alloccarDd,
    dptDt,
    arvDt,
    onDt,
    onHh,
    offDt,
    offHh
  } = ds_fl.getRowJSON(rowIndex);
  for (let i = 0; i < ds_fl.getTotalRow(); i++) {
    grdObj.setRowReadOnly(i, true);

    // 그리드 초기화
    grdObj.setRowBackgroundColor(i, "");
    // as-is RowMark 대응
    ds_fl.setCellData(i, "dmCoshippingNoChk", 0);

    // 글자색 변경
    if (ds_fl.getCellData(i, "statuss") === "대기") {
      grdObj.setRowColor(i, "blue");
    } else {
      grdObj.setRowColor(i, "black");
    }
  }

  // 동일 합적번호 배열
  const matchArr = ds_fl.getMatchedIndex("dmCoshippingNo", dmCoshippingNo, true);
  if (matchArr.length > 0) {
    for (let i = 0; i < matchArr.length; i++) {
      ds_fl.setCellData(matchArr[i], "dmCoshippingNoChk", 1);
      grdObj.setRowBackgroundColor(matchArr[i], "#fcf8e3");
      grdObj.setRowColor(matchArr[i], "black");
    }
  } else {
    // 동일한 합적번호가 없는 경우
    ds_fl.setCellData(rowIndex, "dmCoshippingNoChk", 1);
    grdObj.setRowBackgroundColor(rowIndex, "#fcf8e3");
  }
  if (statuss == '대기') {
    if (columnId == 'vehclNo' || columnId == 'dptDt' || columnId == 'arvDt' || columnId == 'alloccarDd' || columnId == 'dptHh' || columnId == 'arvHh') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else {
      grdObj.setRowReadOnly(rowIndex, true);
    }

    // 20151118 조원철k 요청
    // >>> 배차정보 - 배차일 클릭 시 상차일자 하차일자 입력되게
    // 20151221 시간도 입력되게 
    if (alloccarDd == '' && columnId == 'alloccarDd') {
      ds_fl.setCellData(rowIndex, 'alloccarDd', scwin.vToDate);
      ds_fl.setCellData(rowIndex, 'dptDt', onDt.replace(/-/g, "")); // 상차지정보 - 일자 set
      ds_fl.setCellData(rowIndex, 'arvDt', offDt.replace(/-/g, "")); // 하차지정보 - 일자 set
      ds_fl.setCellData(rowIndex, 'dptHh', onHh.substring(0, 4));
      ds_fl.setCellData(rowIndex, 'arvHh', offHh.substring(0, 4));
    }
  } else if (statuss == '배차' && alloccarSts == '대기') {
    if (columnId == 'dptDt' || columnId == 'arvDt') {
      grdObj.setRowReadOnly(rowIndex, false);

      // 배차정보 - 상차일자
      if (columnId == 'dptDt' && dptDt == '') {
        ds_fl.setCellData(rowIndex, 'dptDt', onDt.replace(/-/g, ""));
      }
      // 배차정보 - 하차일자
      if (columnId == 'arvDt' && arvDt == '') ds_fl.setCellData(rowIndex, 'arvDt', offDt.replace(/-/g, ""));
    } else if (columnId == 'dptHh' || columnId == 'arvHh') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else {
      grdObj.setRowReadOnly(rowIndex, true);
    }
  }
};

/**
 * 벌크화물 그리드 cell dbclick
 * 벌크와 컨테이너 여부, 주문번호를 팝업으로 던져서 데이터를 조회,입력,수정
 */
scwin.gr_fl_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  const {
    idx,
    statuss
  } = ds_fl.getRowJSON(rowIndex);
  let sUrl, popupName, height;
  const data = {
    CargoType: "cargo",
    idx: idx
  };
  if (idx != "" && columnId == "dmOrdNo") {
    if (statuss == "대기") {
      sUrl = "/ui/bp/fbp/op/ac/ez_202_01_01p.xml";
      popupName = "운송의뢰화면";
      height = 810;
    } else {
      sUrl = "/ui/bp/fbp/op/ac/ez_202_01_01b.xml";
      popupName = "화물정보화면";
      height = 710;
    }
    let opts = {
      popupName: popupName,
      width: 1250,
      height: height,
      top: "0px",
      left: "0px"
    };
    $c.win.openPopup($p, sUrl, opts, data);
  }
};

/**
 * 벌크화물 그리드 image click
 */
scwin.gr_fl_ontextimageclick = function (rowIndex, columnIndex) {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_fl2 : gr_fl;
  const colID = grdObj.getColumnID(columnIndex);
  if (ds_fl.getCellData(rowIndex, 'statuss') == '대기') {
    if (colID == 'vehclNo') {
      scwin.f_vehclPop(rowIndex, ds_fl);
    }
  }
};

/**
 * 벌크화물 그리드 after edit
 */
scwin.gr_fl_onafteredit = function (rowIndex, columnIndex, value) {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_fl2 : gr_fl;
  const columnId = grdObj.getColumnID(columnIndex);
  if (ds_fl.getCellData(rowIndex, 'statuss') == '대기') {
    if (columnId == 'vehclNo') {
      scwin.f_vehclPop(rowIndex, ds_fl);
    }
  }
};

/**
 * 컨테이너 그리드 cell click
 */
scwin.gr_flc_oncellclick = function (rowIndex, columnIndex, columnId) {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_flc2 : gr_flc;
  scwin.selectedLclRow = rowIndex;
  if (ds_flc.getCellData(rowIndex, 'statuss') == '대기') {
    if (columnId == 'vehclNo') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else if (columnId == 'realOnDt' || columnId == 'realOffDt' || columnId == 'alloccarDd') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else if (columnId == 'realOnHh' || columnId == 'realOffHh') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else {
      grdObj.setRowReadOnly(rowIndex, true);
    }
  } else if (ds_flc.getCellData(rowIndex, 'statuss') == '배차' && ds_flc.getCellData(rowIndex, 'alloccarSts') == '대기') {
    if (columnId == 'realOnDt' || columnId == 'realOffDt') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else if (columnId == 'realOnHh' || columnId == 'realOffHh') {
      grdObj.setRowReadOnly(rowIndex, false);
    } else {
      grdObj.setRowReadOnly(rowIndex, true);
    }
  } else {
    grdObj.setRowReadOnly(rowIndex, true);
  }
};

/**
 * 컨테이너 그리드 cell dbclick
 * 벌크와 컨테이너 여부, 주문번호를 팝업으로 던져서 데이터를 조회,입력,수정
 */
scwin.gr_flc_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  const {
    idx,
    statuss
  } = ds_flc.getRowJSON(rowIndex);
  let sUrl, popupName, height;
  if (idx != "" && columnId == "dmord") {
    if (statuss == "대기") {
      sUrl = "/ui/bp/fbp/op/ac/ez_202_01_01p.xml";
      popupName = "운송의뢰화면";
      height = 810;
    } else {
      sUrl = "/ui/bp/fbp/op/ac/ez_202_01_01b.xml";
      popupName = "화물정보화면";
      height = 840;
    }
    let opts = {
      popupName: popupName,
      width: 1250,
      height: height,
      top: "0px",
      left: "0px"
    };
    let data = {
      CargoType: "cont",
      idx: idx
    };
    $c.win.openPopup($p, sUrl, opts, data);
  }
};

/**
 * 컨테이너 그리드 image click
 */
scwin.gr_flc_ontextimageclick = function (rowIndex, columnIndex) {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_flc2 : gr_flc;
  const colID = grdObj.getColumnID(columnIndex);
  if (ds_flc.getCellData(rowIndex, 'statuss') == '대기') {
    if (colID == 'vehclNo') {
      scwin.f_vehclPop(rowIndex, ds_flc);
    }
  }
};

/**
 * 컨테이너 그리드 after edit
 */
scwin.gr_flc_onafteredit = function (rowIndex, columnIndex, value) {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_flc2 : gr_flc;
  const colID = grdObj.getColumnID(columnIndex);
  if (ds_flc.getCellData(rowIndex, 'statuss') == '대기') {
    if (colID == 'vehclNo') {
      scwin.f_vehclPop(rowIndex, ds_flc);
    }
  }
};

/**
 * 차량번호 팝업 호출
 */
scwin.f_vehclPop = function (row, dltObj) {
  let opts = {
    popupName: "차량정보관리",
    width: "580px",
    height: "500px",
    top: "300px",
    left: "100px"
  };
  let data = {
    vehclNo: dltObj.getCellData(row, "vehclNo")
  };

  // 초기화 후 팝업 호출
  dltObj.setCellData(row, "vehclNo", "");
  dltObj.setCellData(row, "ez108Idx", "");
  dltObj.setCellData(row, "ez110Idx", "");
  dltObj.setCellData(row, "vehclPicNm", "");
  dltObj.setCellData(row, "vehclTelNo2", "");
  $c.win.openPopup($p, "/ui/bp/fbp/bi/vi/ez_104_01_01Cp.xml", opts, data).then(arrRtnVal => {
    if (arrRtnVal != null) {
      dltObj.setCellData(row, "vehclNo", arrRtnVal[0]);
      dltObj.setCellData(row, "ez108Idx", arrRtnVal[1]);
      dltObj.setCellData(row, "ez110Idx", arrRtnVal[2]);
      dltObj.setCellData(row, "vehclPicNm", arrRtnVal[3]);
      dltObj.setCellData(row, "vehclTelNo2", arrRtnVal[5]);
    }
  });
};

/**
 * 1 : 벌크화물 - [오더 SHEET] ozviewer
 * 2 : 컨테이너 - [오더 SHEET] ozviewer
 * 3 : 벌크화물 - [오더상세보기] popup >>>>> 팝업 삭제 대상
 */
scwin.f_print = function (gubun) {
  let v_odrNo, v_coshippingNo;
  if (gubun == 1) {
    // 벌크화물 - [오더 SHEET] ozviewer

    if (ds_fl.getTotalRow() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
      return;
    }
    const rIdx = ds_fl.getRowPosition();
    v_odrNo = ds_fl.getCellData(rIdx, "dmOrdNo");
    v_coshippingNo = ds_fl.getCellData(rIdx, "dmCoshippingNo");
    if ($c.gus.cfIsNull($p, v_odrNo)) {
      $c.win.alert($p, "오더를 선택하십시요");
      return;
    }
    const data = {
      odiName: "tn_304_02_01b1",
      reportName: "/ds/op/wrkplan/transwrkplan/tn_304_02_01b.ozr",
      odiParam: {
        ODR_NO: v_odrNo,
        COSHIPPING_NO: v_coshippingNo
      },
      viewerParam: {
        // useprogressbar: false, // 프로그레스바 쓸지 말지
        printcommand: true,
        //
        zoom: 100 // 배율 설정
        // mode: "silent",
        // copies: "1",
      },
      formParam: {}
    };
    const opts = {
      id: "ozReportPopup",
      popupName: "OZ 뷰어",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "OZ 뷰어"
    };
    $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  } else if (gubun == 2) {
    // 컨테이너 - [오더 SHEET] ozviewer

    const rIdx = ds_flc.getRowPosition();
    if (ds_flc.getTotalRow() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
      return;
    }
    v_odrNo = ds_flc.getCellData(rIdx, "dmOrdNo");
    if ($c.gus.cfIsNull($p, v_odrNo)) {
      $c.win.alert($p, "오더를 선택하십시요");
      return;
    }
    let data = {
      odiName: "op_202_02_03r",
      reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
      odiParam: {
        odrNo: v_odrNo
      },
      viewerParam: {
        zoom: 100 // 배율 설정
      },
      formParam: {}
    };
    const opts = {
      id: "ozReportPopup",
      popupName: "OZ 뷰어",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "OZ 뷰어"
    };
    $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  } else if (gubun == 3) {
    // 벌크화물 - [오더상세보기] popup

    if ($c.util.isEmpty($p, ds_fl.getRowPosition())) {
      $c.win.alert($p, "오더를 선택하십시요");
      return;
    }
    const opts = {
      popupName: "오더상세정보",
      width: 540,
      height: 640
    };
    const data = {
      RMK2: ds_fl.getCellData(ds_fl.getRowPosition(), "rmk2")
    };
    $c.win.openPopup($p, "/ui/bp/fbp/op/ac/ez_208_01_02p.xml", opts, data);
  }
};

/**
 * 컨테이너 탭 [COPINO전송] - EDI 사전정보조회
 */
scwin.f_ediPreInfo = async function () {
  if (ds_flc.getTotalRow() == 0) return;
  let ret;
  const row = ds_flc.getRowPosition();
  const {
    odrNo,
    cntrSeq,
    wrkPathSeq,
    wrkStpSeq,
    wrkStpCd,
    dptWrkPlCd,
    arvWrkPlCd,
    vehclNo,
    dmOrd
  } = ds_flc.getRowJSON(row);
  const currTime = $c.date.getServerDateTime($p, "yyyyMMddHHmm").substring(8, 12);
  if (currTime > "1730" && (dptWrkPlCd == "6C01" || arvWrkPlCd == "6C01")) {
    $c.win.alert($p, "17시 30분 이후에는 KBCTCY의 요청으로 EDI 전송을 할 수 없습니다.");
    return false;
  }
  if (vehclNo == "") {
    $c.win.alert($p, "운송차량이 없습니다");
    return false;
  }
  if (dmOrd == "") {
    $c.win.alert($p, "동부오더가 아닙니다");
    return false;
  } else {
    const odrNoSub = odrNo.substring(1, 3);
    if (dptWrkPlCd == "6C01" || arvWrkPlCd == "6C01") {
      if (odrNoSub == "C2" && wrkStpCd == "0002" && wrkStpSeq == "20") {
        let condition = {
          odrNo: odrNo,
          cntrSeq: cntrSeq,
          wrkPathSeq: wrkPathSeq,
          wrkStpSeq: wrkStpSeq
        };
        dma_common.setEmptyValue();
        dma_common.setJSON(condition);
        $c.sbm.setAction($p, sbm_common, "/ncall.bp.fbp.op.ac.RetrievePreEdiInfoCMD.do");
        ret = await $c.sbm.execute($p, sbm_common);
        if (ret.responseJSON.resultDataSet[0].Code == 0) {
          ds_edi.setJSON(ret.responseJSON.GAUCE);
        }
      } else {
        $c.win.alert($p, "수입 풀반출 이외에는 직접 COPINO전송을 할수없습니다.\n동부 담당 배차게 문의요망!!");
        return false;
      }
    } else {
      const condition = {
        odrNo: odrNo,
        cntrSeq: cntrSeq,
        wrkPathSeq: wrkPathSeq,
        wrkStpSeq: wrkStpSeq
      };
      dma_common.setEmptyValue();
      dma_common.setJSON(condition);
      $c.sbm.setAction($p, sbm_common, "/ncall.bp.fbp.op.ac.RetrievePreEdiInfoCMD.do");
      ret = await $c.sbm.execute($p, sbm_common);
      if (ret.responseJSON.resultDataSet[0].Code == 0) {
        ds_edi.setJSON(ret.responseJSON.GAUCE);
      }
    }
  }
};

/** 
 * 벌크화물 탭
 * 화물상태가 '대기'이면 글자색 파란색으로 변경 (원본의 decode 컬러 로직)
 * 모든 표시 컬럼의 customFormatter에 연결
 */
scwin.fnStatusColor = function (data, value, rowIdx, colIdx) {
  const statuss = ds_fl.getCellData(rowIdx, "statuss");
  if (statuss === "대기") {
    gr_fl.setCellColor(rowIdx, colIdx, "blue");
  } else {
    gr_fl.setCellColor(rowIdx, colIdx, "black");
  }
  return value;
};

/** 
 * 컨테이너 탭
 * 화물상태가 '대기'이면 글자색 파란색으로 변경 (원본의 decode 컬러 로직)
 * 모든 표시 컬럼의 customFormatter에 연결
 */
scwin.fnColorWait = function (data, value, rowIdx, colIdx) {
  const statuss = ds_flc.getCellData(rowIdx, "statuss");
  if (statuss === "대기") {
    gr_flc.setCellColor(rowIdx, colIdx, "blue");
  } else {
    gr_flc.setCellColor(rowIdx, colIdx, "black");
  }
  return value;
};

/** 
 * 컨테이너 탭 : E/F
 */
scwin.format_emptyFull = function (val) {
  return val == 0 ? "E" : "F";
};

/** 
 * 컨테이너 탭 : 의뢰여부
 */
scwin.format_openYn = function (val) {
  return val == 1 ? "O" : "X";
};

/**
 * 중량, 길이 : AS-IS dec=0 소수점 버리고 정수처리
 */
scwin.format_parseInt = function (val) {
  return $c.num.formatNumber($p, parseInt(val));
};

/**
 * 날짜 format
 */
scwin.format_date = function (val) {
  return $c.date.formatDateTime($p, val, "yyyy/MM/dd");
};

/**
 * 날짜 format
 */
scwin.format_dashToSlash = function (val) {
  return val != "" ? val.replace(/-/g, "/") : val;
};

/**
 * 벌크화물 excel download
 */
scwin.gridToExcel = function () {
  const grdObj = cbx_changeForm.getValue() == 1 ? gr_fl2 : gr_fl;

  // row bgcolor 때문에 따로 지정
  for (let i = 0; i < ds_fl.getTotalRow(); i++) {
    if (i % 2 === 0) {
      grdObj.setRowBackgroundColor(i, "");
    } else {
      grdObj.setRowBackgroundColor(i, "#f5fff5");
    }
  }
  matchArr = ds_fl.getMatchedIndex("statuss", "대기", true);
  if (matchArr.length > 0) {
    for (let i = 0; i < matchArr.length; i++) {
      grdObj.setRowColor(matchArr[i], "blue");
    }
  }
  const excelTitle = "벌크화물목록";
  const options = {
    fileName: `${excelTitle}.xlsx`,
    sheetName: excelTitle,
    bodyWordwrap: true,
    evenRowBackgroundColor: "#f5fff5"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options);
};

/**
 * 벌크화물 column move
 */
scwin.gr_fl_onbeforecolumnmove = function (info) {
  const {
    startColumnID,
    startColumnIndex,
    endColumnID,
    endColumnIndex
  } = info;
  const noMoveArr = ["regDd", "col1", "dmOrdNo", "rclntOrdNo"];
  if (noMoveArr.includes(startColumnID)) {
    return false;
  }
  if (endColumnIndex < 4) {
    return false;
  }
};

/**
 * 컨테이너 column move
 */
scwin.gr_flc_onbeforecolumnmove = function (info) {
  const {
    startColumnID,
    startColumnIndex,
    endColumnID,
    endColumnIndex
  } = info;
  const noMoveArr = ["regDd", "line", "cntrNo"];
  if (noMoveArr.includes(startColumnID)) {
    return false;
  }
  if (endColumnIndex < 3) {
    return false;
  }
};

/**
 * 컨테이너 tab에서만 동작하는 조회조건 세팅
 */
scwin.set_searchArea = function (flag) {
  if (flag) {
    th_cntrNo.setStyle("display", "");
    td_cntrNo.setStyle("display", "");
    th_impExpDomesticClsCd.setStyle("display", "");
    td_impExpDomesticClsCd.setStyle("display", "");
  } else {
    th_cntrNo.setStyle("display", "none");
    td_cntrNo.setStyle("display", "none");
    th_impExpDomesticClsCd.setStyle("display", "none");
    td_impExpDomesticClsCd.setStyle("display", "none");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_commonCombo',type:'page',variableClone:'',src:'/cm/udc/commonCombo.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ncall-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ncall nc20',id:'btn_save',style:'',title:'저장하기',type:'button','ev:onclick':'scwin.f_ApplyAlloccar(\'ALL\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc16',id:'btn_alloc',style:'',title:'배차',type:'button','ev:onclick':'scwin.f_ApplyAlloccar'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc03',id:'btn_start',style:'',title:'운송보고',type:'button','ev:onclick':'scwin.f_Save(\'SAVE\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송보고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc02',id:'btn_alloc_cancel',style:'',title:'배차취소',type:'button','ev:onclick':'scwin.cancelop'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차취소'}]}]}]},{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영업소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_commonCombo',A:{style:'width:200px;',cond:'HOFC',id:'udc_cargo',refHiddenDataCollection:'dma_comComboMap',refDataCollection:'dma_common',initIndex:'1',initFunction:'reflashdata'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'lc_cargoDateTyp',class:'',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.lc_cargoDateTyp_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'금주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'금월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'cargoDate1',refDataMap:'',style:'',id:'',refEdDt:'cargoDate2',edFromId:'ed_cargoDate1',edToId:'ed_cargoDate2',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_cargoSts1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'의뢰'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_cargoSts2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_cargoSts3',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:200px;text-transform: uppercase;',maxlength:'3',validateOnInput:'true',allowChar:'a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',id:'th_cntrNo'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'td_cntrNo',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;text-transform: uppercase;',allowChar:'a-zA-Z',maxlength:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'th_impExpDomesticClsCd',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수/출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'td_impExpDomesticClsCd',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_impExpDomesticClsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_changeForm',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.cbx_changeForm_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목축소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_Trash'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.reflashdata'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배차관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:'','ev:onchange':'scwin.tac_tabControl1_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'cargo',label:'벌크화물',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'cont',label:'컨테이너',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:180px;',id:'lc_cargoGub',class:'',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체','ev:onchange':'scwin.lc_cargoGub_onchange',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'인천지사'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당진평택지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'당진평택지사'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_print',type:'button',class:'btn',objType:'bUpdate','ev:onclick':'scwin.f_print(3)',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더상세보기'}]}]},{T:1,N:'xf:trigger',A:{style:'',type:'button',class:'btn',objType:'bUpdate',id:'btn_print1','ev:onclick':'scwin.f_print(1)',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더SHEET'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridUpYn:'N',btnPlusYn:'N',gridID:'',id:'udc_topGrdBtnCargo',gridDownFn:'scwin.gridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_fl',id:'gr_fl',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'4','ev:oncellclick':'scwin.gr_fl_oncellclick','ev:ontextimageclick':'scwin.gr_fl_ontextimageclick','ev:onafteredit':'scwin.gr_fl_onafteredit','ev:oncelldblclick':'scwin.gr_fl_oncelldblclick','ev:oncellindexchange':'scwin.gr_fl_oncellindexchange','ev:onbeforecolumnmove':'scwin.gr_fl_onbeforecolumnmove',selectedCellColor:'transparent',selectedRowColor:'transparent',focusMode:'none'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',value:'등록일',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',value:'구분',width:'50'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',value:'동부<br/>오더No',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',value:'고객<br/>주문번호',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',value:'판매처',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',value:'납품처',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column3',inputType:'text',rowSpan:'',value:'상차지정보',width:'350',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column5',inputType:'text',rowSpan:'',value:'하차지정보',width:'350',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column7',inputType:'text',rowSpan:'',value:'화물정보',width:'350',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',value:'오더특이사항',width:'200'}},{T:1,N:'w2:column',A:{colSpan:'12',displayMode:'label',id:'column75',inputType:'text',rowSpan:'',value:'배차정보',width:'840',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column73',inputType:'text',rowSpan:'2',value:'배차지사',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column71',inputType:'text',rowSpan:'2',value:'회사명',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column69',inputType:'text',rowSpan:'2',value:'배차담당',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column67',inputType:'text',rowSpan:'2',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column65',inputType:'text',rowSpan:'2',value:'실운임',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column63',inputType:'text',rowSpan:'2',value:'화물<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column61',inputType:'text',rowSpan:'2',value:'차량<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column59',inputType:'text',rowSpan:'2',value:'공개<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column57',inputType:'text',rowSpan:'2',value:'합적번호',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column55',inputType:'text',rowSpan:'2',value:'등록처',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column53',inputType:'text',rowSpan:'2',value:'실화주',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'9',displayMode:'label',hidden:'true',id:'column51',inputType:'text',rowSpan:'',value:'운임정보',width:'630',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column49',inputType:'text',rowSpan:'2',value:'의뢰<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column47',inputType:'text',rowSpan:'2',value:'등록자<br/>ID',width:'80'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column45',inputType:'text',rowSpan:'2',value:'실상차<br/>보고일시',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column43',inputType:'text',rowSpan:'2',value:'실하차<br/>보고일시',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column41',inputType:'text',rowSpan:'2',value:'TMS<br/>Order No',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column39',inputType:'text',rowSpan:'2',value:'작업 지시번호',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column37',inputType:'text',rowSpan:'2',value:'실상차<br/>수량',width:'80'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column35',inputType:'text',rowSpan:'2',value:'오더상세정보',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column33',inputType:'text',rowSpan:'2',value:'오더상세정보',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column31',inputType:'text',rowSpan:'2',value:'화주',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column103',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',style:'',value:'상차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column117',inputType:'text',style:'',value:'주소',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column114',inputType:'text',style:'',value:'담당자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column111',inputType:'text',style:'',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column132',inputType:'text',style:'',value:'하차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column129',inputType:'text',style:'',value:'주소',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column126',inputType:'text',style:'',value:'담당자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column123',inputType:'text',style:'',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column101',inputType:'text',style:'',value:'품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column144',inputType:'text',style:'',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column141',inputType:'text',style:'',value:'중량(Kg)',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column138',inputType:'text',style:'',value:'길이',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column135',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column99',inputType:'text',style:'',value:'배차일',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column177',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column174',inputType:'text',style:'',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column171',inputType:'text',style:'',value:'상차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column168',inputType:'text',style:'',value:'상차시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column165',inputType:'text',style:'',value:'실상차중량',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column162',inputType:'text',style:'',value:'하차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column159',inputType:'text',style:'',value:'하차시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column156',inputType:'text',style:'',value:'운송구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column153',inputType:'text',style:'',value:'ez110Idx',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column150',inputType:'text',style:'',value:'기사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column147',inputType:'text',style:'',value:'기사전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'청구',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column207',inputType:'text',style:'',value:'선불',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column204',inputType:'text',style:'',value:'착불',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column201',inputType:'text',style:'',value:'지불',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column198',inputType:'text',style:'',value:'보관금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column195',inputType:'text',style:'',value:'지불처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column192',inputType:'text',style:'',value:'수수료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column189',inputType:'text',style:'',value:'선수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column186',inputType:'text',style:'',value:'선급',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'regDd',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmOrdNo',inputType:'text',width:'120',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rclntOrdNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNm',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dlvyPlNm',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onDt',inputType:'text',width:'100',textAlign:'left',displayFormatter:'scwin.format_dashToSlash',excelFormatter:'scwin.format_dashToSlash'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPos',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPosNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPicNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPicTel',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDt',inputType:'text',width:'100',textAlign:'left',displayFormatter:'scwin.format_dashToSlash',excelFormatter:'scwin.format_dashToSlash'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPos',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPosNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPicNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPicTel',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'goods',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',textAlign:'right',value:'',width:'70',dataType:'number',excelFormat:'#,##0.00000',excelCellType:'number',displayFormat:'#,###.00000'}},{T:1,N:'w2:column',A:{dataType:'number',displayMode:'label',excelCellType:'number',excelFormat:'#,###',id:'wt',inputType:'text',style:'',textAlign:'right',value:'',width:'80',displayFormatter:'scwin.format_parseInt'}},{T:1,N:'w2:column',A:{dataType:'number',displayMode:'label',excelCellType:'number',excelFormat:'#,###',id:'len',inputType:'text',style:'',textAlign:'right',value:'',width:'70',displayFormatter:'scwin.format_parseInt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarDd',inputType:'calendar',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',maxByteLength:'10',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hirecarClntNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptHh',inputType:'text',style:'',value:'',width:'100',allowChar:'0-9',validateOnInput:'true',maxLength:'4',displayFormat:'##:##',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOnWt',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvHh',inputType:'text',style:'',value:'',width:'100',allowChar:'0-9',validateOnInput:'true',maxLength:'4',displayFormat:'##:##',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'railroadAdptDstCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ez110Idx',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclPicNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclTelNo2',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###.00000',displayMode:'label',excelCellType:'number',excelFormat:'#,##0.00000',id:'payReal',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'statuss',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarSts',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'openYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmCoshippingNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ofcNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realClntNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAdvn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDvly',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'defrAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strAmtClntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmis',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'initAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prePayAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'requestYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOn',inputType:'text',width:'100',displayFormatter:'scwin.format_dashToSlash',excelFormatter:'scwin.format_dashToSlash'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOff',inputType:'text',width:'100',displayFormatter:'scwin.format_dashToSlash',excelFormatter:'scwin.format_dashToSlash'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'idx',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOnQty',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk2',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ez108Idx',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNo',inputType:'text',width:'100'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_fl','ev:onafteredit':'scwin.gr_fl_onafteredit','ev:oncellclick':'scwin.gr_fl_oncellclick','ev:oncelldblclick':'scwin.gr_fl_oncelldblclick','ev:oncellindexchange':'scwin.gr_fl_oncellindexchange','ev:ontextimageclick':'scwin.gr_fl_ontextimageclick',fixedColumn:'4',id:'gr_fl2',style:'display: none;',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',value:'등록일',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',value:'구분',width:'50',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',value:'동부<br/>오더No',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',value:'고객<br/>주문번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',value:'판매처',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',value:'납품처',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column3',inputType:'text',rowSpan:'',sortable:'false',value:'상차지정보',width:'350'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column5',inputType:'text',rowSpan:'',sortable:'false',value:'하차지정보',width:'350'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column7',inputType:'text',rowSpan:'',sortable:'false',value:'화물정보',width:'350'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',value:'오더특이사항',width:'200'}},{T:1,N:'w2:column',A:{colSpan:'12',displayMode:'label',id:'column75',inputType:'text',rowSpan:'',sortable:'false',value:'배차정보',width:'840'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column73',inputType:'text',rowSpan:'2',value:'배차지사',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column71',inputType:'text',rowSpan:'2',value:'회사명',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column69',inputType:'text',rowSpan:'2',value:'배차담당',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column67',inputType:'text',rowSpan:'2',value:'전화',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column65',inputType:'text',rowSpan:'2',value:'실운임',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column63',inputType:'text',rowSpan:'2',value:'화물<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column61',inputType:'text',rowSpan:'2',value:'차량<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column59',inputType:'text',rowSpan:'2',value:'공개<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column57',inputType:'text',rowSpan:'2',value:'합적번호',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column55',inputType:'text',rowSpan:'2',value:'등록처',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column53',inputType:'text',rowSpan:'2',value:'실화주',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'9',displayMode:'label',hidden:'true',id:'column51',inputType:'text',rowSpan:'',sortable:'false',value:'운임정보',width:'630'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column49',inputType:'text',rowSpan:'2',value:'의뢰<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column47',inputType:'text',rowSpan:'2',value:'등록자<br/>ID',width:'80'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column45',inputType:'text',rowSpan:'2',value:'실상차<br/>보고일시',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column43',inputType:'text',rowSpan:'2',value:'실하차<br/>보고일시',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column41',inputType:'text',rowSpan:'2',value:'TMS<br/>Order No',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column39',inputType:'text',rowSpan:'2',value:'작업 지시번호',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column37',inputType:'text',rowSpan:'2',value:'실상차<br/>수량',width:'80'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column35',inputType:'text',rowSpan:'2',value:'오더상세정보',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column33',inputType:'text',rowSpan:'2',value:'오더상세정보',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'column31',inputType:'text',rowSpan:'2',value:'화주',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column103',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',style:'',value:'상차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column117',inputType:'text',style:'',value:'주소',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column114',inputType:'text',style:'',value:'담당자',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column111',inputType:'text',style:'',value:'전화',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column132',inputType:'text',style:'',value:'하차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column129',inputType:'text',style:'',value:'주소',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column126',inputType:'text',style:'',value:'담당자',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column123',inputType:'text',style:'',value:'전화',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column101',inputType:'text',style:'',value:'품명',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column144',inputType:'text',style:'',value:'수량',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column141',inputType:'text',style:'',value:'중량(Kg)',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column138',inputType:'text',style:'',value:'길이',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column135',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column99',inputType:'text',style:'',value:'배차일',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column177',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column174',inputType:'text',style:'',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column171',inputType:'text',style:'',value:'상차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column168',inputType:'text',style:'',value:'상차시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column165',inputType:'text',style:'',value:'실상차중량',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column162',inputType:'text',style:'',value:'하차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column159',inputType:'text',style:'',value:'하차시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column156',inputType:'text',style:'',value:'운송구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column153',inputType:'text',style:'',value:'ez110Idx',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column150',inputType:'text',style:'',value:'기사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column147',inputType:'text',style:'',value:'기사전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'청구',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column207',inputType:'text',style:'',value:'선불',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column204',inputType:'text',style:'',value:'착불',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column201',inputType:'text',style:'',value:'지불',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column198',inputType:'text',style:'',value:'보관금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column195',inputType:'text',style:'',value:'지불처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column192',inputType:'text',style:'',value:'수수료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column189',inputType:'text',style:'',value:'선수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column186',inputType:'text',style:'',value:'선급',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayFormat:'####-##-##',displayMode:'label',excelFormat:'####-##-##',id:'regDd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'dmOrdNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rclntOrdNo',inputType:'text',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNm',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dlvyPlNm',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onDt',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPos',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPosNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPicNm',inputType:'text',style:'',textAlign:'left',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPicTel',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDt',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPos',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPosNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPicNm',inputType:'text',style:'',textAlign:'left',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPicTel',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'goods',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayMode:'label',displayFormat:'#,###.00000',excelCellType:'number',excelFormat:'#,##0.00000',id:'qty',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayMode:'label',excelCellType:'number',excelFormat:'#,###',id:'wt',inputType:'text',style:'',textAlign:'right',value:'',width:'80',displayFormatter:'scwin.format_parseInt'}},{T:1,N:'w2:column',A:{dataType:'number',displayMode:'label',excelCellType:'number',excelFormat:'#,###',id:'len',inputType:'text',style:'',textAlign:'right',value:'',width:'70',displayFormatter:'scwin.format_parseInt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarDd',inputType:'calendar',textAlign:'left',width:'100',displayFormat:'yyyy-MM-dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',style:'',textAlign:'left',value:'',width:'100',maxByteLength:'10',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hirecarClntNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'calendar',style:'',textAlign:'left',value:'',width:'100',displayFormat:'yyyy-MM-dd'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayFormat:'##:##',displayMode:'label',id:'dptHh',inputType:'text',maxLength:'4',style:'',textAlign:'left',validateOnInput:'true',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOnWt',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'left',displayFormat:'yyyy-MM-dd'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayFormat:'##:##',displayMode:'label',id:'arvHh',inputType:'text',maxLength:'4',style:'',textAlign:'left',validateOnInput:'true',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'railroadAdptDstCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ez110Idx',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclPicNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclTelNo2',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###.00000',displayMode:'label',excelCellType:'number',excelFormat:'#,##0.00000',id:'payReal',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'statuss',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarSts',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'openYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmCoshippingNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ofcNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realClntNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAdvn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDvly',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'defrAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strAmtClntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmis',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'initAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prePayAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'requestYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOn',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOff',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'idx',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realOnQty',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk2',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ez108Idx',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNo',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_print2',type:'button',class:'btn','ev:onclick':'scwin.f_print(2)',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더SHEET'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_transCopino',type:'button',class:'btn','ev:onclick':'scwin.f_ediPreInfo',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'COPINO전송'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section2',style:'',gridID:'',gridUpYn:'N',grdDownOpts:'{"fileName":"컨테이너 화물 목록.xlsx", "sheetName":"컨테이너화물목록"}',id:'udc_topGrdBtnCont'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_flc','ev:onafteredit':'scwin.gr_flc_onafteredit','ev:oncellclick':'scwin.gr_flc_oncellclick','ev:oncelldblclick':'scwin.gr_flc_oncelldblclick','ev:ontextimageclick':'scwin.gr_flc_ontextimageclick',fixedColumn:'3',id:'gr_flc',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:onbeforecolumnmove':'scwin.gr_flc_onbeforecolumnmove'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'등록일',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'라인',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'CNTR NO',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column13',inputType:'text',rowSpan:'',style:'',value:'상차지',width:'350',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column7',inputType:'text',rowSpan:'',style:'',value:'하차지',width:'350',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column88',inputType:'text',rowSpan:'2',style:'',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'사이즈표시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column85',inputType:'text',rowSpan:'2',style:'',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column132',value:'타입표시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column82',inputType:'text',rowSpan:'2',style:'',value:'중량<br/>(Kg)',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column79',inputType:'text',rowSpan:'2',style:'',value:'E/F',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'9',displayMode:'label',id:'column76',inputType:'text',rowSpan:'',style:'',value:'배차정보',width:'630',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'컨테이너정보',width:'260',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column49',inputType:'text',rowSpan:'2',style:'',value:'공개<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column46',inputType:'text',rowSpan:'2',style:'',value:'화물<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column43',inputType:'text',rowSpan:'2',style:'',value:'차량<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column40',inputType:'text',rowSpan:'2',style:'',value:'등록처',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column31',inputType:'text',rowSpan:'',style:'',value:'화주정보',width:'280',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'6',displayMode:'label',id:'column124',inputType:'text',rowSpan:'',style:'',value:'선사 및 기타정보',width:'420',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column100',inputType:'text',style:'',value:'운임정보',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column103',inputType:'text',rowSpan:'2',style:'',value:'동부<br/>오더No',width:'180'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column153',value:'동부<br/>오더No',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column147',value:'동부<br/>오더No',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column150',value:'동부<br/>오더No',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'상차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'상차주소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'상차담당',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'상차전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'하차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column98',inputType:'text',style:'',value:'하차주소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column95',inputType:'text',style:'',value:'하차담당',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',inputType:'text',style:'',value:'하차전화',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column77',inputType:'text',style:'',value:'배차일',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column136',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column74',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column71',inputType:'text',style:'',value:'상차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column68',inputType:'text',style:'',value:'상차시간',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column65',inputType:'text',style:'',value:'하차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column62',inputType:'text',style:'',value:'하차시간',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column59',inputType:'text',style:'',value:'기사명',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column56',inputType:'text',style:'',value:'기사전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'실번호',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column142',value:'출발일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column139',value:'도착일',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'회사명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column128',inputType:'text',style:'',value:'실화주명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column125',inputType:'text',style:'',value:'선사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column122',inputType:'text',style:'',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column119',inputType:'text',style:'',value:'선박명/항차',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column116',inputType:'text',style:'',value:'포트',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column113',inputType:'text',style:'',value:'부킹번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column110',inputType:'text',style:'',value:'주문번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column101',inputType:'text',style:'',value:'실운임',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'regDd',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'line',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onDd',inputType:'text',textAlign:'left',displayFormatter:'scwin.format_date'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPos',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPosNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPicNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPicTel',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offDd',inputType:'text',textAlign:'left',displayFormatter:'scwin.format_date'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPos',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPosNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPicNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPicTel',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrSiz',inputType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrSizDisp',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrTyp',inputType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrTypDisp',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',dataType:'number',id:'wt',inputType:'text',textAlign:'right',excelCellType:'number',excelFormat:'#,###',displayFormatter:'scwin.format_parseInt'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormatter:'scwin.format_emptyFull',id:'emptyFull',inputType:'text'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'alloccarDd',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hirecarClntNm',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'vehclNo',inputType:'textImage',textAlign:'left',maxByteLength:'10',maxLength:'20'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'realOnDt',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'##:##',id:'realOnHh',inputType:'text',textAlign:'left',allowChar:'0-9',validateOnInput:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'realOffDt',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'##:##',id:'realOffHh',inputType:'text',textAlign:'left',allowChar:'0-9',validateOnInput:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'vehclPicNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'vehclTelNo2',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrSealNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrDptDd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrArvDd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormatter:'scwin.format_openYn',id:'openYn',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'statuss',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'alloccarSts',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'ofcNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'clntNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'picNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'telNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'realClntNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'shpCo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'shpCoTel',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'shpNm',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'portNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrBookingNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrOrdNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',dataType:'number',displayFormat:'#,###.00000',id:'payReal',inputType:'text',textAlign:'right',excelFormat:'#,##0.00000',excelCellType:'number'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',fontStyle:'underline',id:'dmord',inputType:'text',class:'underline',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dmOrdNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ez110Idx',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ez108Idx',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_flc','ev:onafteredit':'scwin.gr_flc_onafteredit','ev:oncellclick':'scwin.gr_flc_oncellclick','ev:oncelldblclick':'scwin.gr_flc_oncelldblclick','ev:ontextimageclick':'scwin.gr_flc_ontextimageclick',fixedColumn:'3',id:'gr_flc2',style:'display:none;',visibleRowNum:'10',visibleRowNumFix:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption6',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'등록일',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'라인',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'CNTR NO',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column13',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'상차지',width:'350'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column7',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'하차지',width:'350'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column88',inputType:'text',rowSpan:'2',style:'',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column129',inputType:'text',rowSpan:'2',style:'',value:'사이즈표시',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column85',inputType:'text',rowSpan:'2',style:'',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column132',inputType:'text',rowSpan:'2',style:'',value:'타입표시',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column82',inputType:'text',rowSpan:'2',style:'',value:'중량<br/>(Kg)',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column79',inputType:'text',rowSpan:'2',style:'',value:'E/F',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'9',displayMode:'label',id:'column76',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'배차정보',width:'630'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column52',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'컨테이너정보',width:'260'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column49',inputType:'text',rowSpan:'2',style:'',value:'공개<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column46',inputType:'text',rowSpan:'2',style:'',value:'화물<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column43',inputType:'text',rowSpan:'2',style:'',value:'차량<br/>상태',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column40',inputType:'text',rowSpan:'2',style:'',value:'등록처',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column31',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'화주정보',width:'280'}},{T:1,N:'w2:column',A:{colSpan:'6',displayMode:'label',id:'column124',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'선사 및 기타정보',width:'420'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column100',inputType:'text',sortable:'false',style:'',value:'운임정보',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column103',inputType:'text',rowSpan:'2',style:'',value:'동부<br/>오더No',width:'180'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column153',inputType:'text',rowSpan:'2',style:'',value:'동부<br/>오더No',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column147',inputType:'text',rowSpan:'2',style:'',value:'동부<br/>오더No',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column150',inputType:'text',rowSpan:'2',style:'',value:'동부<br/>오더No',width:'120'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'상차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'상차주소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'상차담당',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'상차전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'하차지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column98',inputType:'text',style:'',value:'하차주소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column95',inputType:'text',style:'',value:'하차담당',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',inputType:'text',style:'',value:'하차전화',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column77',inputType:'text',style:'',value:'배차일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column136',inputType:'text',style:'',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column74',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column71',inputType:'text',style:'',value:'상차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column68',inputType:'text',style:'',value:'상차시간',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column65',inputType:'text',style:'',value:'하차일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column62',inputType:'text',style:'',value:'하차시간',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column59',inputType:'text',style:'',value:'기사명',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column56',inputType:'text',style:'',value:'기사전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'실번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column142',inputType:'text',style:'',value:'출발일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column139',inputType:'text',style:'',value:'도착일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'회사명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column128',inputType:'text',style:'',value:'실화주명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column125',inputType:'text',style:'',value:'선사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column122',inputType:'text',style:'',value:'전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column119',inputType:'text',style:'',value:'선박명/항차',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column116',inputType:'text',style:'',value:'포트',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column113',inputType:'text',style:'',value:'부킹번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column110',inputType:'text',style:'',value:'주문번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column101',inputType:'text',style:'',value:'실운임',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'####-##-##',id:'regDd',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'line',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrNo',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'####-##-##',id:'onDd',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPos',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPosNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPicNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'onPicTel',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'####-##-##',id:'offDd',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPos',inputType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPosNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPicNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'offPicTel',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrSiz',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'cntrSizDisp',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrTyp',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'cntrTypDisp',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',dataType:'number',excelCellType:'number',excelFormat:'#,###',id:'wt',inputType:'text',textAlign:'right',hidden:'true',displayFormatter:'scwin.format_parseInt'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormatter:'scwin.format_emptyFull',id:'emptyFull',inputType:'text'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'yyyy-MM-dd',id:'alloccarDd',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'hirecarClntNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'vehclNo',inputType:'textImage',textAlign:'left',maxByteLength:'10',maxLength:'20'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'yyyy-MM-dd',id:'realOnDt',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{allowChar:'0-9',customFormatter:'scwin.fnColorWait',displayFormat:'##:##',id:'realOnHh',inputType:'text',textAlign:'left',validateOnInput:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormat:'yyyy-MM-dd',id:'realOffDt',inputType:'calendar',textAlign:'left'}},{T:1,N:'w2:column',A:{allowChar:'0-9',customFormatter:'scwin.fnColorWait',displayFormat:'##:##',id:'realOffHh',inputType:'text',textAlign:'left',validateOnInput:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'vehclPicNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'vehclTelNo2',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrSealNo',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'cntrDptDd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'cntrArvDd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',displayFormatter:'scwin.format_openYn',id:'openYn',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'statuss',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'alloccarSts',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'ofcNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'clntNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'picNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'telNo',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'realClntNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'shpCo',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'shpCoTel',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'shpNm',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'portNo',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrBookingNo',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',id:'cntrOrdNo',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.fnColorWait',dataType:'number',displayFormat:'#,###.00000',excelCellType:'number',excelFormat:'#,##0.00000',id:'payReal',inputType:'text',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{class:'underline',customFormatter:'scwin.fnColorWait',fontStyle:'underline',id:'dmord',inputType:'text',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'dmOrdNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'ez110Idx',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'ez108Idx',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})