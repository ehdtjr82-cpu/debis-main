/*amd /ui/tn/op/transwrkindict/cntr/tn_304_01_01b.xml 210553 b948b2e79a73d80df14e1152a5d239ffd3453c8910c9dea3962ee0085d45cb3a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류브랜드코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDd',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDd2',name:'출발예정일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'noClsCd',name:'미지정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryClsCd',name:'조회구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNo',name:'차량거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkKndCd',name:'컨테이너작업종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrOdrNo',name:'컨테이너오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBulkGubun',name:'컨테이너벌크구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_vehclSearch',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류브랜드코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류브랜드코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNo',name:'차량거래처번호',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_TaxInvoiceSearch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'항구도착일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload','ev:onrowpositionchange':'scwin.ds_results_onrowpositionchange','ev:oncelldatachange':'scwin.ds_results_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDh',name:'작업시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDh',name:'작업종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrInfo',name:'컨테이너정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'closeTime',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'항구도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgNo',name:'혼적화물번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortNo',name:'차량단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassShortNo',name:'샤시단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisVehclNo',name:'샤시차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNo',name:'차량거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNm',name:'차량거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'운전자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqCd',name:'샤시장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKndCd',name:'샤시종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'combine',name:'콤바인여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'컨테이너작업형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할인할증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pdaYn',name:'PDA사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'반출입예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류브랜드코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outMgntYn',name:'반출관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inMgntYn',name:'반입관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptGatelogSndYn',name:'출발게이트로그전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvGatelogSndYn',name:'도착게이트로그전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'풀엠티구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cooperatorYn',name:'협력사여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgsetNo',name:'MGSET번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'혼적화물종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo',name:'운전자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'TRS번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRmk',name:'운송비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiFlag',name:'반출EDI플래그',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiFlag',name:'반입EDI플래그',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiType',name:'반출EDI타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiType',name:'반입EDI타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량출입증번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openYn',name:'공개여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptXPos',name:'출발지X좌표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptYPos',name:'출발지Y좌표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvXPos',name:'도착지X좌표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvYPos',name:'도착지Y좌표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsDptDd',name:'실적출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsDptHh',name:'실적출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsArvDd',name:'실적도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsArvHh',name:'실적도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'포지션구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openCloseDt',name:'개폐일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openCloseHh',name:'개폐시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openAllYn',name:'전체개방여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtClsCd',name:'출력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'도어명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indvdlAlloccarYn',name:'개별배차여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'포지션구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copinoResponse',name:'COPINO응답',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkMobile',name:'모바일체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'takeMobile',name:'모바일수락',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'CSCT출력여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'상하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basicDptWrkPlCd',name:'기본출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emcCoreorYn',name:'EMC코어여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsVehcl',saveRemovedData:'true','ev:ondataload':'scwin.ds_resultsVehcl_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPoint',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCommCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCommNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curPosition',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclStsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routrpYn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xxPos',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyPos',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkVehclBpYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblDtm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputClsCd',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'location',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrSheet',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtClsCd',name:'발행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtPicId',name:'발행자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtPicNm',name:'발행자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtHh',name:'발행시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_searchEDI',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'qryClsCd',name:'조회구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutDt',name:'반출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiType',name:'반출EDI타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiType',name:'반입EDI타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndFlag',name:'전송플래그',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delFlag',name:'삭제플래그',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srch3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류브랜드코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selOdrNo',name:'선택오더번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selOdrNo2',name:'선택오더번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selCntrSeq',name:'선택컨테이너순번1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selCntrSeq2',name:'선택컨테이너순번2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selWrkStpCd',name:'선택작업단계코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selWrkStpCd2',name:'선택작업단계코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'combYn',name:'복화여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkIndict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_suitableVehcl',saveRemovedData:'true','ev:ondataload':'scwin.ds_suitableVehcl_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPoint',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCommCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCommNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curPosition',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclStsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routrpYn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xxPos',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyPos',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkVehclBpYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblDtm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputClsCd',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'location',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locationBranCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sameLocation',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otherCo',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realSpdaYn',name:'name54',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_memberVehicleOwnerList',saveRemovedData:'true','ev:ondataload':'scwin.ds_memberVehicleOwnerList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPoint',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCommCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCommNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curPosition',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclStsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routrpYn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xxPos',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyPos',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkVehclBpYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblDtm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputClsCd',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'location',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transBP',saveRemovedData:'true','ev:ondataload':'scwin.ds_transBP_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'address',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transBPShpmnt',saveRemovedData:'true','ev:ondataload':'scwin.ds_transBPShpmnt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkVehclBpYn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xxPos',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyPos',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opentopblcMgntCo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opentopblcMgntCoNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClsNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefDistrict1',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcg1',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'location',name:'name28',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MBVehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ChassisInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_ChassisInfo_ondataload'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chk2',name:'물량 체크',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chk3',name:'combine연결',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할인할증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScTrf',name:'할인할증요율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsSellAmtCls',name:'매입매출금액구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCntrTransWrkIndictCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOrdersheet',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveOrderSheetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_odrSheet","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveEDI',action:'/ncall.ds.lo.edimgnt.SaveAutoCarryInAndCarryOutIntendEdiInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_searchEDI","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.SaveCntrTransWrkIndictCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:'',userData1:'noError'}},{T:1,N:'xf:submission',A:{id:'sbm_containerCompositeCargoLink',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerCompositeCargoLinkInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srch3","key":"IN_DS1"},{"id":"ds_transWrkIndict","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntrOpenTransVolume',action:'/ncall.tn.op.transwrkindict.cntr.SaveCntrOpenToDrvrTransVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVehcl',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveAdequteUsableVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_vehclSearch","key":"IN_DS1"},{"id":"ds_resultsVehcl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_resultsVehcl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSutableVehcl',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveSutableVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_vehclSearch","key":"IN_DS1"},{"id":"ds_suitableVehcl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_suitableVehcl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_memberVehicleOwnerListRetrieve',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.RetrieveMemberVehicleOwnerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_memberVehicleOwnerList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_memberVehicleOwnerList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTransBP',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveTransBPCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_vehclSearch","key":"IN_DS1"},{"id":"ds_transBP","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_transBP","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTransBPShpmnt',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.RetrieveBPVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_transBPShpmnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_transBPShpmnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveChassis',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ChassisInfo","key":"OUT_DS1"}',target:'data:json,{"id":"ds_ChassisInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 세션정보 가져오기
scwin.memJson = $c.data.getMemInfo($p);
scwin.loginId = scwin.memJson.loginId;
scwin.nowDt = $c.date.getServerDateTime($p);
scwin.lobranCd = "";
scwin.odrNo = "";
scwin.wrkStDt = "";
scwin.wrkEndDt = "";
scwin.cntrNo = "";
scwin.qryClsCd = "";
scwin.afterSaveRetrieveYN = "YES";
scwin.hid_vehclNo = "";
scwin.hid_vehclClntNo = "";
scwin.hid_vehclClntNm = "";
scwin.hid_drvNm = "";
scwin.hid_mpNo = "";
scwin.hid_eqCd = "";
scwin.hid_pdaYn = "";
scwin.hid_vehclNo = "";
scwin.hid_chassisEqCd = "";
scwin.hid_chassisKndCd = "";
scwin.hid_chassisNo = "";
scwin.onpageload = function () {
  scwin.lobranCd = $c.data.getParameter($p, "lobranCd") == null ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.odrNo = $c.data.getParameter($p, "odrNo") == null ? "" : $c.data.getParameter($p, "odrNo");
  scwin.wrkStDt = $c.data.getParameter($p, "wrkStDt") == null ? "" : $c.data.getParameter($p, "wrkStDt");
  scwin.wrkEndDt = $c.data.getParameter($p, "wrkEndDt") == null ? "" : $c.data.getParameter($p, "wrkEndDt");
  scwin.cntrNo = $c.data.getParameter($p, "cntrNo") == null ? "" : $c.data.getParameter($p, "cntrNo");
  scwin.qryClsCd = $c.data.getParameter($p, "qryClsCd") == null ? "" : $c.data.getParameter($p, "qryClsCd");
  let codeOptions;

  // 공통코드 설정
  codeOptions = [{
    grpCd: "ZZ307",
    compID: "acb_wrkDstCd"
  }, {
    grpCd: "SD102",
    compID: "gr_results:cntrWtCondCd"
  }, {
    grpCd: "OP196",
    compID: "gr_results:cntrWrkShapeCd, gr_resultsforexcel:cntrWrkShapeCd, acb_cntrWrkKndCd"
  }, {
    grpCd: "ZZ208",
    compID: "gr_suitableVehcl:eqNrmCd, gr_resultsVehcl:eqNrmCd, gr_memberVehicleOwnerList:eqNrmCd"
  }, {
    grpCd: "ZZ210",
    compID: "gr_memberVehicleOwnerList:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  codeOptions = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lobranCd, acb_vehclLobranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.f_OnLoad);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.getFrame().scope.ed_realMchtClntNm.setReadOnly(true);
  scwin.f_setDatsetHeader();
  if (scwin.wrkStDt == "") {
    ed_dptIntendDd.setValue(scwin.nowDt);
    ed_dptIntendDd2.setValue(scwin.nowDt);
  } else {
    ed_dptIntendDd.setValue(scwin.wrkStDt);
    ed_dptIntendDd2.setValue(scwin.wrkEndDt);
  }
  if (scwin.qryClsCd != "") {
    acb_qryClsCd.setValue(scwin.qryClsCd);
  } else {
    acb_qryClsCd.setValue("N");
  }
  if (scwin.cntrNo != "") {
    acb_noClsCd.setValue("C");
    ed_cntrOdrNo.setValue(scwin.cntrNo);
    scwin.f_Retrieve();
  } else if (scwin.odrNo != "") {
    acb_noClsCd.setValue("O");
    ed_cntrOdrNo.setValue(scwin.cntrNo);
    scwin.f_Retrieve();
  } else {
    acb_noClsCd.setValue("O");
  }

  //scwin.f_tabLocation(0);(확인할것) -  그리드 높이조정
  chk_retrvStpYn.setValue("Y");
};
scwin.ondataload = function () {};
scwin.f_OnLoad = function () {
  if (scwin.lobranCd == "") {
    acb_lobranCd.setValue(scwin.memJson.loUpperLobranCd);
    acb_vehclLobranCd.setValue(scwin.memJson.loUpperLobranCd);
  } else {
    acb_lobranCd.setValue(scwin.lobranCd);
    acb_vehclLobranCd.setValue(scwin.lobranCd);
  }
  acb_vehclLobranCd.addItem('전체', '', null, 0);

  // 테스트 데이터
  // acb_lobranCd.setValue("4AA");
  // acb_vehclLobranCd.setValue("4AA");
  // ed_dptIntendDd.setValue("20250213");
  // ed_dptIntendDd2.setValue("20260213");
  // ed_dptIntendDd.setValue("20250701");
  // ed_dptIntendDd2.setValue("20250730");
};

//-------------------------------------------------------------------------
// Function@@
//-------------------------------------------------------------------------
scwin.f_setDatsetHeader = function () {
  ds_search.insertRow();
  ds_search.setRowPosition(0);

  /* ds_vehclSearch.removeAll();
  ds_vehclSearch.insertRow();
   ds_vehclSearch.setRowPosition(0);
    ds_TaxInvoiceSearch.removeAll();
  ds_TaxInvoiceSearch.insertRow();
   ds_TaxInvoiceSearch.setRowPosition(0); */
};

// 조회
scwin.f_Retrieve = async function () {
  // 컨테이너 번호가 11자리가 아니면 조회불가 처리 2008.12.12 JIKO
  if (acb_noClsCd.getValue() == "C") {
    var cntrOdrNo = ed_cntrOdrNo.getValue();
    if (cntrOdrNo.length != 11) {
      await $c.gus.cfAlertMsg($p, "컨테이너 번호 11자리를 입력해주세요.");
      return;
    }
  }
  if (!$c.gus.cfIsAfterDate($p, ed_dptIntendDd.getValue(), ed_dptIntendDd2.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_dptIntendDd.focus();
    return;
  }

  /*20141118 황창기 협력업체 계약 관련 수정 원복 김병찬
  //조회할때 협력업체 정보 초기화
  em_clntNo.Text = '';
  txt_clntNm.value = '';
   	*/
  if (acb_lobranCd.getValue() == '4BB' && scwin.memJson.loUpperLobranCd == "4BB" && scwin.loginId != "111897" && scwin.loginId != "150054" && scwin.loginId != "180023" && scwin.loginId != "210269" && scwin.loginId != "223166" && scwin.loginId != "223035" && scwin.loginId != "223033" && scwin.loginId != "223203" && scwin.loginId != "210269") {
    await $c.gus.cfAlertMsg($p, "조회 불가 합니다. 배차지시 화면을 이용하세요.");
    return false;
  }
  ds_search.setCellData(0, "realMchtClntNo", ed_realMchtClntNo.getValue());

  // 조회
  let e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList;
  switch (disGubun) {
    case 4:
      // 협력업체(차량매입) 계약승인 조회
      await udc_clntNo.cfCommonPopUpAsync(scwin.callBackClntNo, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , DsConstants.PCHS_CLNT_CLS_CD_HIRECAR // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "협력업체,협력업체코드/명," // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 배차담당자
      await udc_alloccarPicId.cfCommonPopUpAsync(scwin.callBackAlloccarPicId, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      // 샤시단축
      udc_comCodeGrid.setSelectId('retrieveChassisNo_tpro');
      await udc_comCodeGrid.cfCommonPopUpAsync(scwin.callBackChassisNo, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , 'C' // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 8:
      // 협력업체(차량매입) 계약승인 조회
      await udc_vehclClntNo.cfCommonPopUpAsync(scwin.callBackVehclClntNo, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , DsConstants.PCHS_CLNT_CLS_CD_HIRECAR // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "협력업체,협력업체코드/명," // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 9:
      // 청구화주 조회
      await udc_realMchtClntNo.cfCommonPopUpAsync(scwin.callBackRealMchtClntNo, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , DsConstants.PCHS_CLNT_CLS_CD_HIRECAR // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "청구화주,청구화주코드/명," // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.f_filter = function () {
  ds_results.clearFilter();
  let fn_tmpDeptFilter = function (cellData, tmpParam, rowIdx) {
    // 회수숨기기
    if (chk_retrvStpYn.getValue() == true || chk_retrvStpYn.getValue() == "Y") {
      if (ds_results.getCellData(rowIdx, "wrkStpCd") === DsConstants.WRK_STP_CD_RETRV) {
        return false;
      }
    }

    // ON/BOB 필터링
    if (acb_cntrWrkKndCd.getValue() != "") {
      if (acb_cntrWrkKndCd.getValue() == DsConstants.CNTR_WRK_KND_CD_BOBTAIL && ds_results.getCellData(rowIdx, "cntrWrkShapeCd") != DsConstants.CNTR_WRK_KND_CD_BOBTAIL) {
        return false;
      } else if (acb_cntrWrkKndCd.getValue() == DsConstants.CNTR_WRK_KND_CD_ONGROUND && ds_results.getCellData(rowIdx, "cntrWrkShapeCd") != DsConstants.CNTR_WRK_KND_CD_ONGROUND) {
        return false;
      }
    }

    // Combine
    if (chk_Combine.getValue()) {
      // combin 체크를 하면 20size만 보여 준다.
      if (ds_results.getCellData(rowIdx, "cntrSizCd") != "20") {
        return false;
      }
    }

    // 작업단계
    if (acb_jobClsCd.getValue() != "") {
      if (ds_results.getCellData(rowIdx, "wrkStpCd") != acb_jobClsCd.getValue()) {
        return false;
      }
    }
    return true;
  };
  ds_results.setColumnFilter({
    type: "func",
    columnId: "wrkStpCd",
    key: fn_tmpDeptFilter,
    condition: "and"
  });
  if (ds_results.getRowCount() > 0) {
    var options = {};
    options.sortIndex = "odrNo cntrSeq odrWrkPathSeq odrWrkStpSeq";
    options.sortOrder = "1 1 1 1";
    ds_results.multisort(options);
  }
  totalRows.setValue(ds_results.getRowCount());
};
scwin.f_filterCustom = function () {};
scwin.f_Trash = function () {
  $c.gus.cfInitObjects($p, tb_condition, [acb_lobranCd, ed_dptIntendDd, ed_dptIntendDd2]);
  spn_rpa_odr.hide();
  ed_rpaOdrNo.setValue("");
};

// 협력업체 지정 버튼 클릭시
scwin.f_setVehclClntNoToChecked = async function () {
  if (ed_clntNo.getValue() == "") {
    if (await $c.gus.cfAlertMsg($p, "협력업체를 선택하여 주십시오")) {
      ed_clntNo.focus();
      return false;
    }
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == 1 && ds_results.getCellData(i, "vehclNo") == "") {
      ds_results.setCellData(i, "vehclClntNo", ed_clntNo.getValue());
      ds_results.setCellData(i, "vehclClntNm", ed_clntNm.getValue());
      var v_odrNo = ds_results.getCellData(i, "odrNo");
      var v_cntrSeq = ds_results.getCellData(i, "cntrSeq");
      var v_vehclClntNo = ds_results.getCellData(i, "vehclClntNo");
      for (var j = 0; j < ds_results.getRowCount(); j++) {
        if (ds_results.getCellData(j, "vehclClntNo") != "" && i != j && v_odrNo == ds_results.getCellData(j, "odrNo") && v_cntrSeq == ds_results.getCellData(j, "cntrSeq") && v_vehclClntNo != ds_results.getCellData(j, "vehclClntNo")) {
          if (await $c.gus.cfAlertMsg($p, "같은 오더, 컨테이너에 운송단계를 각각 다른  협력업체로 지정하여 동시에 배차할 수 없습니다. \n 운송단계 배차한 후에 회수단계를 배차하여 주시기 바랍니다.")) {
            ds_results.setCellData(i, "vehclClntNo", "");
            ds_results.setCellData(i, "vehclClntNm", "");
            ds_results.setCellData(i, "chk", 0);
            return false;
            break;
          }
        }
      }
    }
  }
};
scwin.f_vehclPopup = async function () {
  let win_url = "/ui/tn/op/transwrkindict/cntr/tn_304_01_05p.xml";
  let data = {
    vehclShortNo: ed_shortVhclNo.getValue(),
    whereAreYouFrom: 'T'
  };
  let opts = {
    id: "smpPop",
    popupName: "차량정보",
    modal: true,
    type: "browserPopup",
    width: 900,
    height: 640,
    title: "차량정보"
  };
  let rtnList = await $c.win.openPopup($p, win_url, opts, data);
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ed_shortVhclNo.setValue(rtnList[0]);
    scwin.hid_vehclNo = rtnList[1];
    scwin.hid_vehclClntNo = rtnList[7];
    scwin.hid_vehclClntNm = rtnList[8];
    scwin.hid_drvNm = rtnList[18];
    scwin.hid_mpNo = rtnList[17];
    scwin.hid_eqCd = rtnList[4];
    scwin.hid_pdaYn = rtnList[19];
  }
};

// 차량배정 버튼 클릭시
scwin.f_setVehclNoAndChassisToChecked = async function () {
  if (ed_shortVhclNo.getValue() == "" && ed_shortChassNo.getValue() == "") {
    if (await $c.gus.cfAlertMsg($p, "차량이나 샤시를 선택하여 주십시오")) {
      ed_shortVhclNo.focus();
      return false;
    }
    ;
  }
  var chkCnt = 0;
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == 1) {
      ds_results.setCellData(i, "vehclShortNo", ed_shortVhclNo.getValue());
      ds_results.setCellData(i, "vehclNo", scwin.hid_vehclNo);
      ds_results.setCellData(i, "vehclClntNo", scwin.hid_vehclClntNo);
      ds_results.setCellData(i, "vehclClntNm", scwin.hid_vehclClntNm);
      ds_results.setCellData(i, "drvNm", scwin.hid_drvNm);
      ds_results.setCellData(i, "mpNo", scwin.hid_mpNo);
      ds_results.setCellData(i, "eqCd", scwin.hid_eqCd);
      ds_results.setCellData(i, "pdaYn", scwin.hid_pdaYn);
      ds_results.setCellData(i, "csctPrtYn", scwin.hid_pdaYn);
      ds_results.setCellData(i, "chassShortNo", ed_shortChassNo.getValue());
      ds_results.setCellData(i, "chassisEqCd", scwin.hid_chassisEqCd);
      ds_results.setCellData(i, "chassisKndCd", scwin.hid_chassisKndCd);
      scwin.f_checkChasisNo(i);
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    if (await $c.gus.cfAlertMsg($p, "check된 물량이 없습니다. 원하는 물량을 체크한 후에 차량배정 버튼을 누르면 체크된 행에 차량과 샤시번호가 setting됩니다")) {
      return false;
    }
  }
};

// 미지정 컨테이너 운송지시 연결
scwin.f_CntrRetrievalTransWrkIndict = function () {
  var paramObj = {
    paramTitle: "미지정컨테이너운송지시",
    lobranCd: acb_lobranCd.getValue(),
    wrkStDt: ed_dptIntendDd.getValue(),
    wrkEndDt: ed_dptIntendDd2.getValue(),
    strGu: "S"
  };
  let options = {
    "openAction": "exist"
  };
  $c.win.openMenu($p, "미지정컨테이너운송지시", "/ui/tn/op/transwrkindict/cntr/tn_304_01_09b.xml", "tn_304_01_09b.jsp", paramObj, options);
};

// 샤시번호 1111 체크
scwin.f_checkChasisNo = async function (row) {
  if (ds_results.getCellData(row, "posnClsCd") == "W" || ds_results.getCellData(row, "posnClsCd") == "J") {
    var vOdrNo = ds_results.getCellData(row, "odrNo");
    var vCntrSeq = ds_results.getCellData(row, "cntrSeq");
    if (ds_results.getCellData(row, "chassShortNo") == "1111") {
      if (await $c.gus.cfAlertMsg($p, "위수탁/자차인경우 샤시가 1111 올수가 없습니다. TR에 지정된 TL을 입력하세요")) {
        ds_results.setCellData(row, "chassShortNo", "");
        ds_results.setCellData(row, "chassisEqCd", "");
        ds_results.setCellData(row, "chassisKndCd", "");
        ds_results.setCellData(row, "chassisVehclNo", "");
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          if (vOdrNo == ds_results.getCellData(i, "odrNo") && vCntrSeq == ds_results.getCellData(i, "cntrSeq")) {
            ds_results.setCellData(i, "chassShortNo", "");
            ds_results.setCellData(i, "chassisEqCd", "");
            ds_results.setCellData(i, "chassisKndCd", "");
            ds_results.setCellData(i, "chassisVehclNo", "");
          }
        }
      }
    }
  }
};

// 엑셀다운로드
scwin.f_runExcel = async function () {
  var totCnt = ds_results.getRowCount();
  const options = {
    fileName: "컨테이너운송지시" + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "컨테이너운송지시",
    type: 4 + 8 + 16,
    removeColumns: "3"
  };
  const infoArr = [];
  if (totCnt != 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_resultsforexcel, options, infoArr);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// 프린트
scwin.f_print = async function (gubun) {
  if (ds_results.getRowCount() == 0) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"])) {
      return;
    }
  } else {
    var v_lobranCd = acb_lobranCd.getValue();
    var v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    var v_cntrSeq = ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq");
    var v_cntrNo = ds_results.getCellData(ds_results.getRowPosition(), "cntrNo");
    var v_cargoClsCd = "C";
    var v_wrkStDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt");
    var v_wrkEndDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkEndDt");
    var v_dptWrkPlCd = ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlCd");
    var v_crryinoutIntendNo = ds_results.getCellData(ds_results.getRowPosition(), "crryinoutIntendNo");
    switch (gubun) {
      case 1:
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, "오더를 선택하십시요")) {
            return;
          }
        }
        scwin.f_setDatsetHeader_odrSheet();

        // 오더sheet 담당자 지정함.
        ds_odrSheet.setCellData(0, "odrNo", ds_results.getCellData(ds_results.getRowPosition(), "odrNo"));
        ds_odrSheet.setCellData(0, "prtPicId", scwin.loginId);
        let e = await $c.sbm.execute($p, sbm_saveOrdersheet);
        if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
          const data = {
            reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
            odiName: "op_202_02_03r",
            odiParam: {
              odrNo: v_odrNo
            },
            viewerParam: {
              zoom: 100
            },
            formParam: {}
          };
          await scwin.openPopup(data);
        }
        break;
      case 2:
        const data = {
          reportName: "/ds/op/wrkplan/transwrkplan/op_301_01_05r.ozr",
          odiName: "op_301_01_05r",
          odiParam: {
            crryinoutIntendNo: v_crryinoutIntendNo
          },
          viewerParam: {
            zoom: 100
          },
          formParam: {}
        };
        await scwin.openPopup(data);
        break;
      case 4:
        var checkCnt = 0;
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          if (await scwin.f_IsSelected(i)) {
            checkCnt++;
          }
        }
        if (checkCnt == 0) {
          if (await $c.gus.cfAlertMsg($p, "일괄 발행할 오더를 선택하십시요.")) {
            ds_results.setRowPosition(i);
            return;
          }
        }
        var printCnt = 0;
        var firstOdrNo = "";
        var chkOdrNo = "";
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          if (ds_results.getCellData(i, "chk") == "1") {
            v_odrNo = ds_results.getCellData(i, "odrNo");
            if (printCnt == 0) firstOdrNo = v_odrNo;
            printCnt++;
          }
        }
        const exportData = [];
        if (printCnt > 0) {
          await $c.gus.cfAlertMsg($p, firstOdrNo + "외에 " + (printCnt - 1) + "건의 오더Sheet를 프린터로 전송했습니다.");
          printCnt = 0;
          for (let i = 0; i < ds_results.getRowCount(); i++) {
            if (ds_results.getCellData(i, "chk") == "1") {
              v_odrNo = ds_results.getCellData(i, "odrNo");
              if (printCnt == 0) firstOdrNo = v_odrNo;
              if (chkOdrNo == v_odrNo) continue;
              if (chkOdrNo !== v_odrNo) chkOdrNo = v_odrNo;
              exportData.push({
                reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
                odiName: "op_202_02_03r",
                odiParam: {
                  odrNo: v_odrNo
                }
              });
              printCnt++;
              // 저장오더sheet 헤더설정
              scwin.f_setDatsetHeader_odrSheet();
              //오더sheet 담당자 지정.
              ds_odrSheet.setCellData(0, "odrNo", v_odrNo);
              ds_odrSheet.setCellData(0, "prtPicId", scwin.loginId);
              await $c.sbm.execute($p, sbm_saveOrdersheet);
            }
          }
          var opts = {
            viewerMode: 'export',
            exportMode: 'view',
            exportConfirmsave: 'false',
            //viewerMode:'print',
            printMode: 'silent',
            printCopies: 2,
            printSize: 'A5',
            // exportFilename:'',
            exportPath: 'C:\\OZExport',
            exportFormat: 'pdf'
          };
          $c.ext.openBatchOzReport($p, exportData, opts);
        }
        break;
      default:
        break;
    }
  }
};

// 조회dataset header
scwin.f_setDatsetHeader_odrSheet = async function () {
  // 오더sheet Dataset
  ds_odrSheet.removeAll();
  ds_odrSheet.insertRow();
  ds_odrSheet.setRowPosition(0);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

// 선택된 행인지 여부를 반환
scwin.f_IsSelected = async function (row) {
  if (ds_results.getCellData(row, "chk") == "0") {
    return false;
  } else {
    return true;
  }
};

// 저장(A/S) / 저장(M/S)
scwin.f_SaveAndAutoEDI = async function (flag) {
  if (acb_qryClsCd.getValue() == "Y") {
    await $c.gus.cfAlertMsg($p, "배차후에는 이용할 수 없습니다.");
    return false;
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "vehclClntNo") == ds_results.getCellData(i, "bilgClntNo")) {
      await $c.gus.cfAlertMsg($p, "오더의 청구거래처와 협력 운송업체가 동일한 경우 저장 할 수 없습니다.");
      return false;
    }
  }
  var arrParam = new Array();
  var arryCnt = 0;
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getRowStatus(i) == "U" || ds_results.getCellData(i, "chk") == 1) {
      arrParam[arryCnt] = i;
      arryCnt++;
    }
  }
  await scwin.f_Save("NO");
  for (var i = 0; i < arrParam.length; i++) {
    if (ds_results.getCellData(arrParam[i], "vehclNo") == "") {
      await $c.gus.cfAlertMsg($p, "컨테이너 " + ds_results.getCellData(arrParam[i], "cntrNo") + " 는 차량번호가 없어서 전송할 수 없습니다.");
      continue;
    } else {
      if (ds_results.getCellData(arrParam[i], "crryinEdiFlag") == "N" && ds_results.getCellData(arrParam[i], "crryoutEdiFlag") == "N") {
        await $c.gus.cfAlertMsg($p, "컨테이너 " + ds_results.getCellData(arrParam[i], "cntrNo") + ", " + ds_results.getCellData(arrParam[i], "dptWrkPlNm") + ", " + ds_results.getCellData(arrParam[i], "arvWrkPlNm") + " 는 EDI등록 대상이 아닙니다");
        continue;
      }
      if (ds_results.getCellData(arrParam[i], "crryoutEdiType") != "CO" && ds_results.getCellData(arrParam[i], "crryoutEdiType") != "CD" && ds_results.getCellData(arrParam[i], "crryinEdiType") != "CO" && ds_results.getCellData(arrParam[i], "crryinEdiType") != "CD") {
        await $c.gus.cfAlertMsg($p, "컨테이너 " + ds_results.getCellData(arrParam[i], "cntrNo") + ", " + ds_results.getCellData(arrParam[i], "dptWrkPlNm") + ", " + ds_results.getCellData(arrParam[i], "arvWrkPlNm") + " 는 EDI등록 대상이 아닙니다");
        continue;
      }
      if (flag == "AUTO") {
        scwin.f_crryInOutEDI(false, true, true, arrParam[i], true);
      } else if (flag == "MANUAL") {
        scwin.f_crryInOutEDI(false, false, false, arrParam[i], true);
      }
    }
  }
  scwin.f_Retrieve();
};

// 반출입예정정보EDI등록
scwin.f_crryInOutEDI = async function (bAlertFlag, bSaveFlag, bTransferFlag, row, bDeleteFlag) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
  if (ds_results.getCellData(row, "vehclNo") == "") {
    await $c.gus.cfAlertMsg($p, "운송차량이 없습니다");
    return false;
  }
  if (ds_results.getCellData(row, "crryinEdiFlag") == "N" && ds_results.getCellData(row, "crryoutEdiFlag") == "N") {
    await $c.gus.cfAlertMsg($p, "EDI등록 대상이 아닙니다");
    return false;
  }
  if (ds_results.getCellData(row, "crryoutEdiType") != "CO" && ds_results.getCellData(row, "crryoutEdiType") != "CD" && ds_results.getCellData(row, "crryinEdiType") != "CO" && ds_results.getCellData(row, "crryinEdiType") != "CD") {
    await $c.gus.cfAlertMsg($p, "EDI등록 대상이 아닙니다");
    return false;
  }
  if (ds_results.getCellData(row, "emcCoreorYn") == "N") {
    await $c.gus.cfAlertMsg($p, "선사 COREOR 없이는 EDI 전송 불가합니다.");
    return false;
  }
  var rtnList = new Array();
  var arrParam = new Array();

  // 저장,전송인경우
  if (bSaveFlag) {
    ds_searchEDI.reform();
    var rowIndex = ds_searchEDI.insertRow();
    ds_searchEDI.setCellData(rowIndex, "qryClsCd", "");
    ds_searchEDI.setCellData(rowIndex, "transWrkIndictNo", ds_results.getCellData(row, "transWrkIndictNo"));
    ds_searchEDI.setCellData(rowIndex, "odrNo", ds_results.getCellData(row, "odrNo"));
    ds_searchEDI.setCellData(rowIndex, "cntrSeq", ds_results.getCellData(row, "cntrSeq"));
    ds_searchEDI.setCellData(rowIndex, "wrkPathSeq", ds_results.getCellData(row, "odrWrkPathSeq"));
    ds_searchEDI.setCellData(rowIndex, "wrkStpSeq", ds_results.getCellData(row, "odrWrkStpSeq"));
    ds_searchEDI.setCellData(rowIndex, "vehclNo", ds_results.getCellData(row, "vehclNo"));
    ds_searchEDI.setCellData(rowIndex, "crryinoutDt", ds_results.getCellData(row, "wrkStDt"));
    ds_searchEDI.setCellData(rowIndex, "crryinDt", ds_results.getCellData(row, "wrkEndDt"));
    ds_searchEDI.setCellData(rowIndex, "cntrNo", ds_results.getCellData(row, "cntrNo"));
    ds_searchEDI.setCellData(rowIndex, "dptWrkPlCd", ds_results.getCellData(row, "dptWrkPlCd"));
    ds_searchEDI.setCellData(rowIndex, "arvWrkPlCd", ds_results.getCellData(row, "arvWrkPlCd"));
    ds_searchEDI.setCellData(rowIndex, "crryoutEdiType", ds_results.getCellData(row, "crryoutEdiType"));
    ds_searchEDI.setCellData(rowIndex, "crryinEdiType", ds_results.getCellData(row, "crryinEdiType"));
    ds_searchEDI.setCellData(rowIndex, "sndFlag", bTransferFlag == true ? "1" : "0");
    ds_searchEDI.setCellData(rowIndex, "delFlag", bDeleteFlag == true ? "1" : "0");
    let e = await $c.sbm.execute($p, sbm_saveEDI);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      return true;
    }
  }
  arrParam[0] = new Array("" //조회구분 ("" : 운송작업지시, "1" : 반출입)
  , ds_results.getCellData(row, "transWrkIndictNo"), ds_results.getCellData(row, "odrNo"), ds_results.getCellData(row, "cntrSeq"), ds_results.getCellData(row, "odrWrkPathSeq"), ds_results.getCellData(row, "odrWrkStpSeq"), ds_results.getCellData(row, "vehclShortNo"), ds_results.getCellData(row, "vehclNo"), ds_results.getCellData(row, "vehclIdCardNo"), ds_results.getCellData(row, "wrkStDt"), ds_results.getCellData(row, "wrkEndDt"), ds_results.getCellData(row, "cntrNo"), ds_results.getCellData(row, "dptWrkPlCd"), ds_results.getCellData(row, "arvWrkPlCd"), ds_results.getCellData(row, "dptWrkPlNm"), ds_results.getCellData(row, "arvWrkPlNm"), ds_results.getCellData(row, "crryoutEdiType"), ds_results.getCellData(row, "crryinEdiType"));
  let win_url = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_23p.xml";
  let data = {
    crryoutEdiType: ds_results.getCellData(row, "crryoutEdiType"),
    crryinEdiType: ds_results.getCellData(row, "crryinEdiType")
  };
  data.arrParam = arrParam;
  let opts = {
    id: "op_202_02_23p",
    popupName: "반출입예정정보EDI등록",
    modal: true,
    type: "browserPopup",
    width: 1100,
    height: 850,
    title: "반출입예정정보EDI등록"
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, data);
  return true;
};

// 저장
scwin.f_Save = async function (retrieveYn) {
  var preChecked = chk_retrvStpYn.getValue();
  if (chk_retrvStpYn.getValue()) {
    chk_retrvStpYn.checked = false;
    scwin.f_filter();
  }
  if (ds_results.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "vehclClntNo") == ds_results.getCellData(i, "bilgClntNo")) {
      await $c.gus.cfAlertMsg($p, "오더의 청구거래처와 협력 운송업체가 동일한 경우 저장 할 수 없습니다.");
      return false;
    }
  }
  if (acb_qryClsCd.getValue() == "N") {
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getRowStatus(i) == "U") {
        if (ds_results.getCellData(i, "cntrWrkShapeCd") != "") {
          if (ds_results.getCellData(i, "wrkStpCd") == "0002") {
            if (ds_results.getCellData(i + 1, "wrkStpCd") == "0003" && ds_results.getCellData(i + 1, "vehclNo") != "") {
              if (ds_results.getCellData(i, "odrNo") == ds_results.getCellData(i + 1, "odrNo") && ds_results.getCellData(i, "cntrSeq") == ds_results.getCellData(i + 1, "cntrSeq")) {
                if (await $c.gus.cfAlertMsg($p, "DOOR운송 배차시, BOBTAIL, ON-GROUND를 선택하고 배차할 때는 회수단계는 차량이 없어야 합니다.")) {
                  ds_results.setCellData(i + 1, "vehclNo", "");
                  ds_results.setCellData(i + 1, "vehclShortNo", "");
                  return false;
                }
              }
            }
          } else if (ds_results.getCellData(i, "wrkStpCd") == "0003") {
            if (ds_results.getCellData(i - 1, "wrkStpCd") == "0002" && ds_results.getCellData(i - 1, "vehclNo") != "") {
              if (ds_results.getCellData(i, "odrNo") == ds_results.getCellData(i - 1, "odrNo") && ds_results.getCellData(i, "cntrSeq") == ds_results.getCellData(i - 1, "cntrSeq")) {
                if (await $c.gus.cfAlertMsg($p, "DOOR회수 배차시, BOBTAIL, ON-GROUND를 선택하고 운송단계보다 먼저 배차할 수 없습니다.")) {
                  ds_results.setCellData(i - 1, "vehclNo", "");
                  ds_results.setCellData(i - 1, "vehclShortNo", "");
                  ds_results.setCellData(i, "vehclNo", "");
                  ds_results.setCellData(i, "vehclShortNo", "");
                  return false;
                }
              }
            }
          } else if (ds_results.getCellData(i, "wrkStpCd") == "0047") {
            await $c.gus.cfAlertMsg($p, "육송 단계는 BOBTAIL, ON-GROUND로 배차할 수 없습니다");
            return false;
          }
        }
        if (ds_results.getCellData(i, "dcScAmt") > 0) {
          if (ds_results.getCellData(i, "dcScNm") == "") {
            await $c.gus.cfAlertMsg($p, "할인할증금액은 팝업을 띄워서 할인할증항목을 선택하고, 금액을 입력한 후, 저장하셔야 합니다");
            return false;
          }
        }
      }
    }
  }
  if (acb_qryClsCd.getValue() == "Y") {
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getRowStatus(i) == "U") {
        if (ds_results.getCellData(i, "cooperatorYn") == 1) {
          if (ds_results.getCellData(i, "vehclNo") != "") {
            if (await $c.gus.cfAlertMsg($p, "컨테이너 " + ds_results.getCellData(i, "cntrNo") + " 는 협력업체에서 이미 배차한 물량은 취소할 수 없습니다. \n협력업체에서 먼저 배차를 취소한 후 취소할 수 있습니다.")) {
              return false;
              break;
            }
          }
        }
      }
    }
  }
  scwin.afterSaveRetrieveYN = retrieveYn;
  let e = await $c.sbm.execute($p, sbm_save);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_save_submitdone(e);
  } else {
    const message = e.responseJSON.resultDataSet[1].Msg;
    const parts = message.split("■");
    let msgCode, msgContent;
    if (parts.length > 0) {
      msgCode = parts[0].trim();
      msgContent = parts.slice(1).join("\n").trim();
    }
    await $c.win.alert($p, "메시지코드: " + msgCode + "\n" + "메시지내용: " + msgContent);
  }
  if (preChecked) {
    chk_retrvStpYn.setValue("Y");
    scwin.f_filter();
  }
};

// 복화연결번호생성
scwin.f_saveContainerCompositeCargoLinkInformation = async function () {
  ds_srch3.removeAll();
  ds_srch3.insertRow();
  ds_srch3.setRowPosition(0);
  var dsSeq = 0;
  var writtenCnt = 0;
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "combine") == 1) {
      if (ds_results.getCellData(i, "cntrSizCd") != 20) {
        if (await $c.gus.cfAlertMsg($p, "Combine은 20feet 컨테이너만 가능합니다")) {
          ds_results.undoAll();
          return false;
          break;
        }
      }
      if (dsSeq == 0) {
        dsSeq = dsSeq + 1;
        ds_srch3.setCellData(0, "lobranCd", acb_lobranCd.getValue());
        ds_srch3.setCellData(0, "selOdrNo", ds_results.getCellData(i, "odrNo"));
        ds_srch3.setCellData(0, "selCntrSeq", ds_results.getCellData(i, "cntrSeq"));
        ds_srch3.setCellData(0, "selWrkStpCd", ds_results.getCellData(i, "wrkStpCd"));
        ds_srch3.setCellData(0, "combYn", 1);
        writtenCnt++;
      } else {
        ds_srch3.setCellData(0, "selOdrNo2", ds_results.getCellData(i, "odrNo"));
        ds_srch3.setCellData(0, "selCntrSeq2", ds_results.getCellData(i, "cntrSeq"));
        ds_srch3.setCellData(0, "selWrkStpCd2", ds_results.getCellData(i, "wrkStpCd"));
        writtenCnt++;
      }
      if (writtenCnt > 2) {
        if (await $c.gus.cfAlertMsg($p, "combine은 2개만 선택해야 합니다")) {
          ds_results.undoAll();
          return false;
          break;
        }
      }
    }
  }
  if (writtenCnt == 1 || writtenCnt == 0) {
    if (await $c.gus.cfAlertMsg($p, "선택 개수 오류입니다. combine은 2개 선택해야 합니다")) {
      ds_results.undoAll();
      return false;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    let e = await $c.sbm.execute($p, sbm_containerCompositeCargoLink);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_containerCompositeCargoLink_submitdone(e);
    }
  }
};

// 복화해제 버튼 클릭시 연결
scwin.f_cancelCmpstcrg = async function () {
  var row = ds_results.getRowPosition();
  if (ds_results.getCellData(row, "cmpstcrgNo") == "") {
    await $c.gus.cfAlertMsg($p, "지정된 복화번호가 없습니다.");
    return false;
  }
  if (row > 0) {
    var arrParam = new Array();
    var cmpstcrgNo = ds_results.getCellData(row, "cmpstcrgNo");
    arrParam[0] = new Array(cmpstcrgNo);
    let win_url = "/ui/ds/op/wrkplan/transwrkplan/op_202_03_02p.xml";
    let data = {
      cmpstcrgNo: cmpstcrgNo
    };
    let opts = {
      id: "smpPop",
      popupName: "op_202_03_02p",
      modal: true,
      type: "browserPopup",
      width: 820,
      height: 770,
      title: "복화연결해제"
    };
    rtnList = await $c.win.openPopup($p, win_url, opts, data);
    if (rtnList) {
      scwin.f_Retrieve();
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("운송물량"));
    return;
  }
};

// 반출등록 버튼 클릭시 연결
scwin.f_switchTabMenu = async function () {
  var row = ds_results.getRowPosition();
  var crryInOutCls = "";
  var v_odrNo = ds_results.getCellData(row, "odrNo");
  var v_cntrNo = ds_results.getCellData(row, "cntrNo");
  var v_wrkPlCd = "";
  var v_wrkPlNm = "";
  var v_url = "";
  if (ds_results.getCellData(row, "wrkStpCd") == "0002") {
    if (ds_results.getCellData(row, "dptWrkPlClsCd") != "C") {
      crryInOutCls = "NO";
    } else {
      crryInOutCls = "OUT";
    }
    v_wrkPlCd = ds_results.getCellData(row, "dptWrkPlCd");
    v_wrkPlNm = ds_results.getCellData(row, "dptWrkPlNm");
  } else if (ds_results.getCellData(row, "wrkStpCd") == "0003") {
    if (ds_results.getCellData(row, "arvWrkPlClsCd") != "C") {
      crryInOutCls = "NO";
    } else {
      crryInOutCls = "IN";
    }
    v_wrkPlCd = ds_results.getCellData(row, "arvWrkPlCd");
    v_wrkPlNm = ds_results.getCellData(row, "arvWrkPlNm");
  } else {
    if (ds_results.getCellData(row, "dptWrkPlClsCd") == "C") {
      crryInOutCls = "OUT";
      v_wrkPlCd = ds_results.getCellData(row, "dptWrkPlCd");
      v_wrkPlNm = ds_results.getCellData(row, "dptWrkPlNm");
    } else if (ds_results.getCellData(row, "arvWrkPlClsCd") == "C") {
      crryInOutCls = "IN";
      v_wrkPlCd = ds_results.getCellData(row, "arvWrkPlCd");
      v_wrkPlNm = ds_results.getCellData(row, "arvWrkPlNm");
    } else {
      crryInOutCls = "NO";
      v_wrkPlCd = ds_results.getCellData(row, "dptWrkPlCd");
      v_wrkPlNm = ds_results.getCellData(row, "dptWrkPlNm");
    }
  }
  var paramObj = {
    odrNo: v_odrNo,
    wrkPlCd: v_wrkPlCd,
    cntrNo: v_cntrNo
  };
  let options = {
    "openAction": "exist"
  };
  if (crryInOutCls == "OUT") {
    $c.win.openMenu($p, "반출등록", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_09b.xml", "op_301_01_09b.jsp", paramObj, options);
  } else if (crryInOutCls == "IN") {
    $c.win.openMenu($p, "반입등록", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_19b.xml", "op_301_01_19b.jsp", paramObj, options);
  } else {
    v_msg = "[오더번호 : " + v_odrNo + " , 작업장 : " + v_wrkPlNm + "] \n" + "반출입등록을 할 수 없는 오더입니다";
    await $c.gus.cfAlertMsg($p, v_msg);
    return;
  }
};

// 작업경로
scwin.f_workPathMod = async function () {
  var pURL = "";
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["대상물량"]); // "선택된 @이(가) 없습니다.";
    return;
  }
  var arrParam = new Array();
  arrParam[0] = ds_results.getCellData(ds_results.getRowPosition(), "odrNo"); //오더번호
  arrParam[1] = ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq"); //컨테이너순번
  arrParam[2] = acb_qryClsCd.getValue();
  if (scwin.memJson.loUpperLobranCd == "4BB") {
    pURL = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_27p.xml";
  } else {
    pURL = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_26p.xml";
  }
  let data = {
    "odrNo": ds_results.getCellData(ds_results.getRowPosition(), "odrNo"),
    // 오더번호
    "cntrSeq": ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq"),
    // 컨테이너순번
    "qryClsCd": acb_qryClsCd.getValue()
  };
  data.param = arrParam;
  let opts = {
    id: "smpPop",
    popupName: "작업경로상세정보변경(컨테이너)",
    modal: true,
    type: "browserPopup",
    width: 1100,
    height: 750,
    title: "작업경로상세정보변경(컨테이너)"
  };
  let rtnVal = await $c.win.openPopup($p, pURL, opts, data);

  // 작업단계경로가 변경될 팝업후 무조건 재조회를 한다.(데이터 오류를 막기 위하여)
  if (rtnVal != 0) {
    scwin.f_Retrieve();
  }
};

// 일괄수정 
scwin.f_workPathModAll = async function () {
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["대상물량"]); // "선택된 @이(가) 없습니다.";
    return;
  }
  var arrParam = new Array();
  arrParam[0] = ds_results.getCellData(ds_results.getRowPosition(), "odrNo"); // 오더번호
  arrParam[1] = ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq"); // 컨테이너순번
  arrParam[2] = acb_qryClsCd.getValue();
  let win_url = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_28p.xml";
  let data = {
    "odrNo": ds_results.getCellData(ds_results.getRowPosition(), "odrNo"),
    // 오더번호
    "cntrSeq": ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq"),
    // 컨테이너순번
    "qryClsCd": acb_qryClsCd.getValue()
  };
  data.param = arrParam;
  let opts = {
    id: "smpPop",
    popupName: "작업경로상세정보변경(컨테이너)",
    modal: true,
    type: "browserPopup",
    width: 1410,
    height: 840,
    title: "작업경로상세정보변경(컨테이너)"
  };
  let rtnVal = await $c.win.openPopup($p, win_url, opts, data);

  // 작업단계경로가 변경될 팝업후 무조건 재조회를 한다.(데이터 오류를 막기 위하여)
  if (rtnVal != 0) {
    scwin.f_Retrieve();
  }
};

// 물량 공개
scwin.f_openTransVolume = async function () {
  var row = ds_results.RowPosition;
  var chkCnt = 0;
  if (await $c.win.confirm($p, "선택된 물량을 공개 하시겠습니까?")) {
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "chk") == 1 || ds_results.getRowStatus(i) == "I") {
        if (ds_results.getCellData(i, "openYn") == 1) {
          await $c.gus.cfAlertMsg($p, "이미 공개된 화물입니다. " + ds_results.getCellData(i, "odrNo"));
          return;
        }
        if (ds_results.getCellData(i, "chk") == 1) {
          chkCnt++;
        }
      }
    }

    // 체크된 건없이 없으면 현재건만 체크처리
    if (chkCnt == 0) {
      ds_results.setCellData(row, "chk", 1);
    }
    let e = await $c.sbm.execute($p, sbm_cntrOpenTransVolume);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_cntrOpenTransVolume_submitdone(e);
    }
  }
};

// 상세
scwin.f_vehclInfo = async function () {
  var row = ds_results.getRowPosition();
  if (ds_results.getCellData(row, "vehclNo") == "") {
    await $c.gus.cfAlertMsg($p, "차량정보가 없습니다.");
    return false;
  } else {
    let win_url = "/ui/tn/op/transwrkindict/cntr/tn_304_01_04p.xml";
    let data = {
      "eqCd": ds_results.getCellData(row, "eqCd"),
      "chassisEqCd": ds_results.getCellData(row, "chassisEqCd")
    };
    let opts = {
      id: "smpPop",
      popupName: "차량정보",
      modal: true,
      type: "browserPopup",
      width: 400,
      height: 480,
      title: "차량정보"
    };
    rtnList = await $c.win.openPopup($p, win_url, opts, data);
    return true;
  }
};
scwin.f_deleteRow = function () {
  var row = ds_results.getRowPosition();
  ds_results.undoRow(row);
  if (acb_qryClsCd.getValue() == "Y") {
    var preChecked = chk_retrvStpYn.getValue();
    if (chk_retrvStpYn.getValue()) {
      chk_retrvStpYn.setValue("");
      scwin.f_filter();
    }
    var unCheckedRow = ds_results.getRowPosition();
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(unCheckedRow, "transWrkIndictNo") == ds_results.getCellData(i, "transWrkIndictNo")) {
        if (acb_qryClsCd.getValue() == "Y") {
          // 협력업체 배차 아닌경우
          if (ds_results.getCellData(i, "cooperatorYn") == 0) {
            ds_results.setCellData(i, "vehclNo", "");
            ds_results.setCellData(i, "vehclShortNo", "");
          } else {
            // 협력업체배차인 경우
            ds_results.setCellData(i, "vehclClntNo", "");
            ds_results.setCellData(i, "vehclShortNo", "");
          }
        }
      }
    }
    if (preChecked) {
      chk_retrvStpYn.setValue("Y");
      scwin.f_filter();
    }
  }
};

// 작업권역콤보 
scwin.f_retrieveWrkDistrict = function (gubun) {
  var vAssgnLobranCd = acb_vehclLobranCd.getValue();
  var vCargoClsCd = "C"; // 화물구분
  var vWrkDstCd = acb_wrkDstCd.getValue(); // 작업구간

  // 배정점소가 부산지점이면서 화물구분이 컨테이너인 경우
  if (vAssgnLobranCd == "6AA" && vCargoClsCd == "C") {
    if (vWrkDstCd == "L") {
      // 작업구간이 로컬인 경우
      scwin.f_districtSearch("L"); //부산로컬권역
    } else if (vWrkDstCd == "S") {
      // 셔틀 
      scwin.f_districtSearch("M"); // 부산매입권역   
    } else {
      scwin.f_districtSearch("C"); // CMP : 컨테이너일 경우.   
    }
  } else if (vCargoClsCd == "B") {
    scwin.f_districtSearch("B"); // BWK : 컨테이너일 경우.   
  } else {
    scwin.f_districtSearch("C"); // CMP : 컨테이너일 경우.   
  }
};
scwin.f_districtSearch = async function (gubun) {
  // 부산로컬권역
  // var vCBDataL = '^선택,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {"PLO"}) %>';
  const vCBDataL = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["PLO"],
    compID: "acb_logisWrkDistrictCd"
  }];

  // 부산매입권역
  // var vCBDataM = '^선택,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {"PEX"}) %>';
  const vCBDataM = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["PEX"],
    compID: "acb_logisWrkDistrictCd"
  }];

  // 복화권역
  //var vCBDataC = '^선택,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {"CMP"}) %>';
  const vCBDataC = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["CMP"],
    compID: "acb_logisWrkDistrictCd"
  }];

  // 벌크작업권역
  //var vCBDataB = '^선택,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {"BWK"}) %>';
  const vCBDataB = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["BWK"],
    compID: "acb_logisWrkDistrictCd"
  }];
  if (gubun == "L") {
    // acb_logisWrkDistrictCd.CBData = vCBDataL;
    // acb_logisWrkDistrictCd.index = 0;
    // acb_logisWrkDistrictCd.ResetData();
    $c.data.setGauceUtil($p, vCBDataL, scwin.f_districtSearchCallBack);
  } else if (gubun == "M") {
    // acb_logisWrkDistrictCd.CBData = vCBDataM;
    // acb_logisWrkDistrictCd.index = 0;
    // acb_logisWrkDistrictCd.ResetData();
    $c.data.setGauceUtil($p, vCBDataM, scwin.f_districtSearchCallBack);
  } else if (gubun == "C") {
    // acb_logisWrkDistrictCd.CBData = vCBDataC;
    // acb_logisWrkDistrictCd.index = 0;
    // acb_logisWrkDistrictCd.ResetData();
    $c.data.setGauceUtil($p, vCBDataC, scwin.f_districtSearchCallBack);
  } else if (gubun == "B") {
    // acb_logisWrkDistrictCd.CBData = vCBDataB;
    // acb_logisWrkDistrictCd.index = 0;
    // acb_logisWrkDistrictCd.ResetData();
    $c.data.setGauceUtil($p, vCBDataB, scwin.f_districtSearchCallBack);
  }
};
scwin.f_districtSearchCallBack = function () {
  acb_logisWrkDistrictCd.addItem('선택', '', null, 0);
  acb_logisWrkDistrictCd.setValue("");
};

// 차량조회 버튼 클릭
scwin.f_RetrieveVechl = async function () {
  if (tab_mxTab.getSelectedTabIndex() == 0) {
    // 최적차량조회
    if (acb_vehclLobranCd.getValue() == "") {
      if (await $c.gus.cfAlertMsg($p, "점소를 선택하세요.")) {
        acb_vehclLobranCd.focus();
        return;
      }
    } else if (ed_dptIntendDd.getValue() == "") {
      if (await $c.gus.cfAlertMsg($p, "출발예정일을 입력하세요.")) {
        ed_dptIntendDd.focus();
        return;
      }
    }
    scwin.f_RetrieveSuitableVehcl();
  } else if (tab_mxTab.getSelectedTabIndex() == 1) {
    // 직영차량조회
    let e = await $c.sbm.execute($p, sbm_retrieveVehcl);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
  } else if (tab_mxTab.getSelectedTabIndex() == 2) {
    // 귀로공차풀조회
    if (!$c.gus.cfValidate($p, [tb_vehclCond])) return;
    if (!$c.gus.cfIsAfterDate($p, ed_dptIntendDd.getValue(), ed_dptIntendDd2.getValue())) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039)) {
        // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
        ed_dptIntendDd.focus();
        return;
      }
    }
    ds_search.setCellData(0, "cntrBulkGubun", "C");
    let e = await $c.sbm.execute($p, sbm_memberVehicleOwnerListRetrieve);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
  } else if (tab_mxTab.getSelectedTabIndex() == 3) {
    // 협력사조회
    let e = await $c.sbm.execute($p, sbm_retrieveTransBP);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
  } else if (tab_mxTab.getSelectedTabIndex() == 4) {
    // POOL 조회
    if (!$c.gus.cfValidate($p, [tb_vehclCond])) return;

    // ds_search Bind
    ds_search.setCellData(0, "stDt", ed_dptIntendDd.getValue());
    ds_search.setCellData(0, "endDt", ed_dptIntendDd2.getValue());
    let e = await $c.sbm.execute($p, sbm_retrieveTransBPShpmnt);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
  }
};

// 최적차량 조회
scwin.f_RetrieveSuitableVehcl = async function () {
  var row = ds_results.getRowPosition();
  ds_vehclSearch.setCellData(0, "wrkLobranCd", ds_results.getCellData(row, "wrkLobranCd"));
  ds_vehclSearch.setCellData(0, "dptWrkPlCd", ds_results.getCellData(row, "dptWrkPlCd"));
  ds_vehclSearch.setCellData(0, "wrkStDt", ds_results.getCellData(row, "wrkStDt"));
  if (ds_results.getRowCount() > 0) {
    var options = {};
    options.sortIndex = "odrNo";
    options.sortOrder = "1";
    ds_results.multisort(options);
  }
  let e = await $c.sbm.execute($p, sbm_retrieveSutableVehcl);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
};

// 출발지위치 map으로 표시 팝업
scwin.f_ZipOpenmap = async function () {
  var usingDataSet = ds_results;
  var usingRow = ds_results.getRowPosition();
  if ($c.gus.cfIsNull($p, usingRow)) {
    await $c.gus.cfAlertMsg($p, "선택된 오더가 없습니다.");
    return false;
  }
  if (usingDataSet.getCellData(usingRow, "dptXPos") == 0 || usingDataSet.getCellData(usingRow, "dptYPos") == 0) {
    await $c.gus.cfAlertMsg($p, usingDataSet.getCellData(usingRow, "dptWrkPlNm") + "의 입력된 좌표값이 없습니다.");
    return;
  }

  // var condition = "?" 
  //                 +"&XPOS="+usingDataSet.NameValue(usingRow, "dptXPos")
  //                 +"&YPOS="+usingDataSet.NameValue(usingRow, "dptYPos")
  //                 +"&CLNT_NM="+usingDataSet.NameValue(usingRow, "dptWrkPlNm")
  //                 ;

  // var sUrl = "/bp/lbs/yb/yb/lbs_car_01p.jsp"+condition;
  // var strTitle = "CARMAP";
  // window.open(sUrl, strTitle, 'width=500,height=660,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0');

  var data = {
    "XPOS": usingDataSet.getCellData(usingRow, "dptXPos"),
    "YPOS": usingDataSet.getCellData(usingRow, "dptYPos"),
    "CLNT_NM": usingDataSet.getCellData(usingRow, "dptWrkPlNm")
  };
  var opts = {
    id: "smpPop",
    popupName: "CARMAP",
    //  팝업 타이틀에 표시
    type: "browserPopup" // window popup , 해당 옵션이 없으면 layer popup
    ,

    modal: true,
    width: 500,
    height: 600
  };
  let returnValue = await $c.win.openPopup($p, "/ui/bp/lbs/yb/yb/lbs_car_01p.xml", opts, data);
};

// 차량위치 map으로 표시 팝업
scwin.f_Openmap = async function () {
  var usingDataSet = "";
  var usingRow = 0;
  if (tab_mxTab.getSelectedTabIndex() == 0) {
    usingDataSet = ds_suitableVehcl;
    usingRow = ds_suitableVehcl.getRowPosition();
  } else if (tab_mxTab.getSelectedTabIndex() == 1) {
    usingDataSet = ds_resultsVehcl;
    usingRow = ds_resultsVehcl.getRowPosition();
  } else if (tab_mxTab.getSelectedTabIndex() == 2) {
    usingDataSet = ds_MBVehcl;
    usingRow = ds_MBVehcl.getRowPosition();
  }
  if ($c.gus.cfIsNull($p, usingRow)) {
    await $c.gus.cfAlertMsg($p, "선택된 차량이 없습니다.");
    return false;
  }
  var resultsRow = ds_results.getRowPosition();
  var carNo = usingDataSet.getCellData(usingRow, "vehclNo");
  var carSts = "대기";
  var usrNm = usingDataSet.getCellData(usingRow, "drvNm");
  var phoneNo = usingDataSet.getCellData(usingRow, "cdmaNo");
  var ofcNm = usingDataSet.getCellData(usingRow, "assgnLobranCd");
  var post = usingDataSet.getCellData(usingRow, "location");
  var time = ds_results.getCellData(resultsRow, "wrkStDt");
  var xpos = usingDataSet.getCellData(usingRow, "carXPos");
  var ypos = usingDataSet.getCellData(usingRow, "carYPos");
  var cartype = usingDataSet.getCellData(usingRow, "eqKndNm");
  var posNm = ds_results.getCellData(resultsRow, "dptWrkPlNm");
  var onHh = ds_results.getCellData(resultsRow, "wrkStHh");
  var onXpos = ds_results.getCellData(resultsRow, "dptXPos");
  var onYpos = ds_results.getCellData(resultsRow, "dptYPos");
  var offXpos = ds_results.getCellData(resultsRow, "arvXPos");
  var offYpos = ds_results.getCellData(resultsRow, "arvYPos");
  if (xpos == "" || ypos == "") {
    await $c.gus.cfAlertMsg($p, carNo + " 차량의 위치정보가 없습니다");
    return false;
  }
  if (cartype == null) cartype = '';
  if (posNm == null) posNm = '';
  if (onHh == null) onHh = '';
  if (phoneNo == null) phoneNo = '';
  if (onXpos == null) onXpos = '0';
  if (onYpos == null) onYpos = '0';
  if (offXpos == null) offXpos = '0';
  if (offYpos == null) offYpos = '0';

  // window.open("/bp/lbs/yb/yb/lbs_326_02_02p.jsp?CARNO="+carNo+"&CARSTS="+carSts+"&USRNM="+usrNm+"&PHONENO="+phoneNo+"&OFCNM="+ofcNm+"&POST="+post+"&TIME="+time+"&CARTYPE="+cartype+"&POSNM="+posNm+"&ONHH="+onHh+"&ONXPOS="+onXpos+"&ONYPOS="+onYpos+"&OFFXPOS="+offXpos+"&OFFYPOS="+offYpos+"&XPOS="+xpos+"&YPOS="+ypos,"운행경로","width=540,height=640");

  var data = {
    "CARNO": carNo,
    "CARSTS": carSts,
    "USRNM": usrNm,
    "PHONENO": phoneNo,
    "OFCNM": ofcNm,
    "POST": post,
    "TIME": time,
    "CARTYPE": cartype,
    "POSNM": posNm,
    "ONHH": onHh,
    "ONXPOS": onXpos,
    "ONYPOS": onYpos,
    "OFFXPOS": offXpos,
    "OFFYPOS": offYpos,
    "XPOS": xpos,
    "YPOS": ypos
  };
  var opts = {
    id: "smpPop",
    popupName: "운행경로",
    //  팝업 타이틀에 표시
    type: "browserPopup" // window popup , 해당 옵션이 없으면 layer popup
    ,

    modal: true,
    width: 540,
    height: 640
  };
  let returnValue = await $c.win.openPopup($p, "/ui/bp/lbs/yb/yb/lbs_326_02_02p.xml", opts, data);
};
scwin.f_openCommPopUpGrid = async function (disGubun, row, pClose) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 2:
      pCode = ds_results.getCellData(row, "chassShortNo");
      udc_comCodeGrid.setSelectId('retrieveChassisNo_tpro');
      rtnList = await udc_comCodeGrid.cfCommonPopUpAsync(scwin.callBackChassisNoGrid, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , 'C' // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.f_dcScSearch = async function () {
  ds_dcScCd.removeAll();
  ds_dcScCd.insertRow();
  ds_dcScCd.setRowPosition(0);
  var row = ds_results.getRowPosition();
  var v_cargoClsCd = DsConstants.CARGO_CLS_CD_CONTAINER;
  var v_odrNo = ds_results.getCellData(row, "odrNo");
  var v_cntrSeq = ds_results.getCellData(row, "cntrSeq");
  var v_odrWrkPathSeq = ds_results.getCellData(row, "odrWrkPathSeq");
  var v_odrWrkStpSeq = ds_results.getCellData(row, "odrWrkStpSeq");
  var v_transWrkIndictNo = ds_results.getCellData(row, "transWrkIndictNo");
  var v_transRsltsSeq = ds_results.getCellData(row, "transRsltsSeq");
  var v_cntrNo = ds_results.getCellData(row, "cntrNo");
  var v_wrkDstClsCd = ds_search.getCellData(ds_search.getRowPosition(), "wrkDstClsCd");
  var v_pchsAmt = ds_results.getCellData(row, "pchsAmt");

  // var v_paramObject = new Object();
  // // 파라미터로 현재의 오더정보와 할인할증내역을 넘긴다
  // v_paramObject.cargoClsCd		= v_cargoClsCd;
  // v_paramObject.odrNo 			= v_odrNo;
  // v_paramObject.cntrSeq 			= v_cntrSeq;
  // v_paramObject.odrWrkPathSeq 	= v_odrWrkPathSeq;
  // v_paramObject.odrWrkStpSeq 		= v_odrWrkStpSeq;
  // v_paramObject.transWrkIndictNo 	= v_transWrkIndictNo;
  // v_paramObject.transRsltsSeq 	= v_transRsltsSeq;
  // v_paramObject.cntrNo 			= v_cntrNo;
  // v_paramObject.wrkDstClsCd 		= v_wrkDstClsCd;
  // v_paramObject.pchsAmt 			= v_pchsAmt;
  // v_paramObject.ds_dcScCd 		= ds_dcScCd;

  // var v_Features = "dialogWidth:400px; dialogHeight:500px; center:Yes; help:No; resizable:No; status:No; scroll:No"
  // var v_URL = '/ds/op/wrkplan/transwrkplan/op_202_02_12p.jsp?paramTitle=할인할증예정조회';
  // window.showModalDialog(v_URL,v_paramObject,v_Features);
  var rtnList = "";
  let win_url = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_12p.xml";
  let data = {
    "cargoClsCd": v_cargoClsCd,
    "odrNo": v_odrNo,
    "cntrSeq": v_cntrSeq,
    "odrWrkPathSeq": v_odrWrkPathSeq,
    "odrWrkStpSeq": v_odrWrkStpSeq,
    "transWrkIndictNo": v_transWrkIndictNo,
    "transRsltsSeq": v_transRsltsSeq,
    "cntrNo": v_cntrNo,
    "wrkDstClsCd": v_wrkDstClsCd,
    "pchsAmt": v_pchsAmt,
    "ds_dcScCd": ds_dcScCd
  };
  let opts = {
    id: "smpPop",
    popupName: "op_202_02_12p",
    modal: true,
    type: "browserPopup",
    width: 400,
    height: 500,
    title: "할인할증예정조회"
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, data);
  if (rtnList) {
    ds_results.setCellData(ds_results.getRowPosition(), "dcScNm", "");
    var vSumDcScAmt = 0;
    var vDcScNm = "";
    var vDcScCd = "";
    for (var i = 0; i < ds_dcScCd.getRowCount(); i++) {
      if (v_odrNo == ds_dcScCd.getCellData(i, "odrNo") && v_cntrSeq == ds_dcScCd.getCellData(i, "cntrSeq") && v_odrWrkPathSeq == ds_dcScCd.getCellData(i, "odrWrkPathSeq") && v_odrWrkStpSeq == ds_dcScCd.getCellData(i, "odrWrkStpSeq") && v_transWrkIndictNo == ds_dcScCd.getCellData(i, "transWrkIndictNo") && v_transRsltsSeq == ds_dcScCd.getCellData(i, "transRsltsSeq")) {
        if ($c.gus.cfIsNull($p, vDcScNm)) {
          vDcScNm = ds_dcScCd.getCellData(i, "dcScNm");
          vDcScCd = ds_dcScCd.getCellData(i, "dcScCd");
        }
        vSumDcScAmt += ds_dcScCd.getCellData(i, "dcScAmt");
      }
    }
    ds_results.setCellData(row, "dcScNm", vDcScNm);
    ds_results.setCellData(row, "dcScAmt", vSumDcScAmt);
    ds_results.setCellData(row, "dcScCd", vDcScCd);
    return false;
  }
};

// 그리드의 차량 조회시 연결
scwin.f_retrieveVehclInGrid = async function () {
  var row = ds_results.getRowPosition();
  var rtnList = "";
  let win_url = "/ui/tn/op/transwrkindict/cntr/tn_304_01_05p.xml";
  let data = {
    "vehclShortNo": ds_results.getCellData(row, "vehclShortNo"),
    "whereAreYouFrom": "T"
  };
  let opts = {
    id: "smpPop",
    popupName: "가용차량조회",
    modal: true,
    type: "browserPopup",
    width: 930,
    height: 680,
    title: "가용차량조회"
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, data);
  if (rtnList) {
    if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
      var currentRow = ds_results.getRowPosition();
      var savedKey = "";
      if (currentRow !== -1) {
        savedKey = ds_results.getCellData(currentRow, "odrNo") + "_" + ds_results.getCellData(currentRow, "cntrSeq");
      }
      var preChecked = chk_retrvStpYn.getValue();
      if (chk_retrvStpYn.getValue()) {
        chk_retrvStpYn.setValue("");
        scwin.f_filter();
      }
      if (savedKey !== "") {
        var matchIdx = ds_results.getMatchedIndex("odrNo", savedKey.split("_")[0]);
        var finalIdx = matchIdx.find(function (idx) {
          return ds_results.getCellData(idx, "cntrSeq") == savedKey.split("_")[1];
        });
        if (finalIdx !== undefined && finalIdx !== -1) {
          ds_results.setRowPosition(finalIdx);
          gr_results.setFocusedCell(finalIdx, "vehclShortNo");
        }
      }
      var unCheckedRow = ds_results.getRowPosition();
      ds_results.setCellData(unCheckedRow, "vehclShortNo", rtnList[0]);
      ds_results.setCellData(unCheckedRow, "vehclNo", rtnList[1]);
      ds_results.setCellData(unCheckedRow, "vehclClntNo", rtnList[7]);
      ds_results.setCellData(unCheckedRow, "vehclClntNm", rtnList[8]);
      ds_results.setCellData(unCheckedRow, "drvNm", rtnList[18]);
      ds_results.setCellData(unCheckedRow, "mpNo", rtnList[17]);
      ds_results.setCellData(unCheckedRow, "eqCd", rtnList[4]);
      if (ds_results.getCellData(unCheckedRow, "chassisEqCd") == "") {
        ds_results.setCellData(unCheckedRow, "chassShortNo", rtnList[14]);
        ds_results.setCellData(unCheckedRow, "chassisEqCd", rtnList[12]);
        ds_results.setCellData(unCheckedRow, "chassisKndCd", rtnList[16]);
        ds_results.setCellData(unCheckedRow, "chassisVehclNo", rtnList[13]);
      }
      if (rtnList[19] == 1) {
        ds_results.setCellData(unCheckedRow, "pdaYn", 1);
        ds_results.setCellData(unCheckedRow, "csctPrtYn", 1);
      }
      ds_results.setCellData(unCheckedRow, "posnClsCd", rtnList[21]);
      scwin.f_checkChasisNo(i);
      var combineCount = 0;
      if (ds_results.getCellData(unCheckedRow, "combine") == 1) {
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          if (combineCount > 2) {
            await $c.gus.cfAlertMsg($p, "combine은 2개만 연결할 수 있습니다");
            ds_results.undoAll();
            break;
            return false;
          }
          if (ds_results.getCellData(i, "combine") == 1) {
            ds_results.setCellData(i, "vehclShortNo", rtnList[0]);
            ds_results.setCellData(i, "vehclNo", rtnList[1]);
            ds_results.setCellData(i, "vehclClntNo", rtnList[7]);
            ds_results.setCellData(i, "vehclClntNm", rtnList[8]);
            ds_results.setCellData(i, "drvNm", rtnList[18]);
            ds_results.setCellData(i, "mpNo", rtnList[17]);
            ds_results.setCellData(i, "eqCd", rtnList[4]);
            if (ds_results.getCellData(i, "chassisEqCd") == "") {
              ds_results.setCellData(i, "chassShortNo", rtnList[14]);
              ds_results.setCellData(i, "chassisEqCd", rtnList[12]);
              ds_results.setCellData(i, "chassisKndCd", rtnList[16]);
              ds_results.setCellData(i, "chassisVehclNo", rtnList[13]);
            }
            if (rtnList[19] == 1) {
              ds_results.setCellData(i, "pdaYn", 1);
              ds_results.setCellData(i, "csctPrtYn", 1);
            }
            scwin.f_checkChasisNo(i);
            combineCount++;
          }
        }
        if (combineCount == 1) {
          await $c.gus.cfAlertMsg($p, "combine을 1개만 선택했습니다. 2개를 선택해야 합니다");
          ds_results.undoAll();
          return false;
        }
      } else {
        if (ds_results.getCellData(unCheckedRow, "cmpstcrgNo") != "") {
          for (var i = 0; i < ds_results.getRowCount(); i++) {
            if (ds_results.getCellData(unCheckedRow, "cmpstcrgNo") == ds_results.getCellData(i, "cmpstcrgNo")) {
              ds_results.setCellData(i, "vehclShortNo", rtnList[0]);
              ds_results.setCellData(i, "vehclNo", rtnList[1]);
              ds_results.setCellData(i, "vehclClntNo", rtnList[7]);
              ds_results.setCellData(i, "vehclClntNm", rtnList[8]);
              ds_results.setCellData(i, "drvNm", rtnList[18]);
              ds_results.setCellData(i, "mpNo", rtnList[17]);
              ds_results.setCellData(i, "eqCd", rtnList[4]);
              if (ds_results.getCellData(i, "chassisEqCd") == "") {
                ds_results.setCellData(i, "chassShortNo", rtnList[14]);
                ds_results.setCellData(i, "chassisEqCd", rtnList[12]);
                ds_results.setCellData(i, "chassisKndCd", rtnList[16]);
                ds_results.setCellData(i, "chassisVehclNo", rtnList[13]);
              }
              if (rtnList[19] == 1) {
                ds_results.setCellData(i, "pdaYn", 1);
                ds_results.setCellData(i, "csctPrtYn", 1);
              }
              ds_results.setCellData(i, "posnClsCd", rtnList[21]);
              scwin.f_checkChasisNo(i);
            }
          }
        } else {
          if (ds_results.getCellData(unCheckedRow, "cntrWrkShapeCd") == "") {
            v_odrNo = ds_results.getCellData(unCheckedRow, "odrNo");
            v_cntrSeq = ds_results.getCellData(unCheckedRow, "cntrSeq");
            if ("0047" != ds_results.getCellData(unCheckedRow, "wrkStpCd")) {
              for (var i = 0; i < ds_results.getRowCount(); i++) {
                if (i != unCheckedRow && v_odrNo == ds_results.getCellData(i, "odrNo") && v_cntrSeq == ds_results.getCellData(i, "cntrSeq") && "0047" != ds_results.getCellData(i, "wrkStpCd")) {
                  ds_results.setCellData(i, "vehclShortNo", rtnList[0]);
                  ds_results.setCellData(i, "vehclNo", rtnList[1]);
                  ds_results.setCellData(i, "vehclClntNo", rtnList[7]);
                  ds_results.setCellData(i, "vehclClntNm", rtnList[8]);
                  ds_results.setCellData(i, "drvNm", rtnList[18]);
                  ds_results.setCellData(i, "mpNo", rtnList[17]);
                  ds_results.setCellData(i, "eqCd", rtnList[4]);
                  if (ds_results.getCellData(i, "chassisEqCd") == "") {
                    ds_results.setCellData(i, "chassShortNo", rtnList[14]);
                    ds_results.setCellData(i, "chassisEqCd", rtnList[12]);
                    ds_results.setCellData(i, "chassisKndCd", rtnList[16]);
                    ds_results.setCellData(i, "chassisVehclNo", rtnList[13]);
                  }
                  if (rtnList[19] == 1) {
                    ds_results.setCellData(i, "pdaYn", 1);
                    ds_results.setCellData(i, "csctPrtYn", 1);
                  }
                  ds_results.setCellData(i, "posnClsCd", rtnList[21]);
                  scwin.f_checkChasisNo(i);
                }
              }
            }
          }
        }
      }
      if (preChecked) {
        chk_retrvStpYn.setValue("Y");
        scwin.f_filter();
        const filterdJSON = ds_results.getAllFilteredJSON();
        const index = filterdJSON.findIndex(item => item.odrNo === savedKey.split("_")[0] && item.cntrSeq === savedKey.split("_")[1]);
        gr_results.setFocusedCell(index, "vehclShortNo");
      }
    } else {
      ds_results.undoRow(row);
      return false;
    }
    $c.sbm.setAction($p, sbm_retrieveChassis, "/ncall.tn.op.transwrkindict.cntr.RetrieveCarInspInfoCMD.do?chassShortNo=" + ds_results.getCellData(row, "vehclShortNo"));
    let e = await $c.sbm.execute($p, sbm_retrieveChassis);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
  }
};
scwin.f_setDptArvDh = async function () {
  if (acb_lobranCd.getValue() != "6BB") {
    await $c.gus.cfAlertMsg($p, "울산지사만 사용 가능한 기능입니다");
    return false;
  }
  var rsltsCnt = 0;
  if (ica_rsltsDptDd.getValue() == "" && ed_rsltsDptHh.getValue() == "" && ica_rsltsArvDd.getValue() == "" && ed_rsltsArvHh.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "출발실적일시, 도착실적일시를 입력해야 합니다.");
    ica_rsltsDptDd.focus();
    return false;
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == 1) {
      if (ds_results.getCellData(i, "outMgntYn") == 1) {
        ds_results.setCellData(i, "rsltsDptDd", ica_rsltsDptDd.getValue());
        ds_results.setCellData(i, "rsltsDptHh", ed_rsltsDptHh.getValue());
      }
      if (ds_results.getCellData(i, "inMgntYn") == 1) {
        ds_results.setCellData(i, "rsltsArvDd", ica_rsltsArvDd.getValue());
        ds_results.setCellData(i, "rsltsArvHh", ed_rsltsArvHh.getValue());
      }
      ds_results.setCellData(i, "sealNo", ed_sealNo.getValue());
      rsltsCnt++;
    }
  }
  if (rsltsCnt == 0) {
    await $c.gus.cfAlertMsg($p, "실적일시가 세팅되지 않았습니다.");
    return false;
  }
  await $c.gus.cfAlertMsg($p, rsltsCnt + " 개의 행에 실적일시가 세팅되었습니다.");
};
scwin.f_delAllocatedRow = function () {
  var row = ds_results.getRowPosition();
  if (acb_qryClsCd.getValue() == "Y") {
    // 협력업체 배차 아닌경우
    if (ds_results.getCellData(row, "cooperatorYn") == 0) {
      ds_results.setCellData(row, "vehclNo", "");
      ds_results.setCellData(row, "vehclShortNo", "");
    } else {
      // 협력업체배차인 경우
      ds_results.setCellData(row, "vehclClntNo", "");
      ds_results.setCellData(row, "vehclShortNo", "");
    }
  }
};
scwin.f_setVehclToMainGrid = async function (fromGrid, row) {
  var useDataSet = "";
  if (fromGrid == "gr_resultsVehcl") {
    useDataSet = ds_resultsVehcl;
  } else if (fromGrid == "gr_suitableVehcl") {
    useDataSet = ds_suitableVehcl;
  } else if (fromGrid == "gr_MBVehcl") {
    useDataSet = ds_MBVehcl;
  } else if (fromGrid == "gr_memberVehicleOwnerList") {
    useDataSet = ds_memberVehicleOwnerList;
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "vehclNo") == useDataSet.getCellData(row, "vehclNo")) {
      await $c.gus.cfAlertMsg($p, "선택하신 차량 " + useDataSet.getCellData(row, "vehclNo") + " 는 이미 " + ds_results.getCellData(i, "cntrNo") + " 컨테이너에 배차되었습니다");
      return false;
    }
  }
  var currentRow = ds_results.getRowPosition();
  var savedOdrNo = "";
  var savedCntrSeq = "";
  if (currentRow !== -1) {
    savedOdrNo = ds_results.getCellData(currentRow, "odrNo");
    savedCntrSeq = ds_results.getCellData(currentRow, "cntrSeq");
  }
  var preChecked = chk_retrvStpYn.getValue() === "Y" || chk_retrvStpYn.getValue() === true;
  if (preChecked) {
    chk_retrvStpYn.setValue("");
    scwin.f_filter();
  }
  var targetIdx = -1;
  if (savedOdrNo !== "") {
    var matchIdx = ds_results.getMatchedIndex("odrNo", savedOdrNo);
    targetIdx = matchIdx.find(function (idx) {
      return ds_results.getCellData(idx, "cntrSeq") == savedCntrSeq;
    });
    if (targetIdx !== undefined && targetIdx !== -1) {
      ds_results.setRowPosition(targetIdx);
    } else {
      targetIdx = ds_results.getRowPosition();
    }
  } else {
    targetIdx = ds_results.getRowPosition();
  }
  var ds_results_row = targetIdx;
  if (ds_results_row === -1) return; // 안전장치

  ds_results.setCellData(ds_results_row, "vehclShortNo", useDataSet.getCellData(row, "vehclShortNo"));
  ds_results.setCellData(ds_results_row, "vehclNo", useDataSet.getCellData(row, "vehclNo"));
  ds_results.setCellData(ds_results_row, "vehclClntNo", useDataSet.getCellData(row, "vehclClntNo"));
  ds_results.setCellData(ds_results_row, "vehclClntNm", useDataSet.getCellData(row, "vehclClntNm"));
  ds_results.setCellData(ds_results_row, "drvNm", useDataSet.getCellData(row, "drvNm"));
  ds_results.setCellData(ds_results_row, "mpNo", useDataSet.getCellData(row, "mpNo"));
  if (fromGrid != "gr_MBVehcl") {
    ds_results.setCellData(ds_results_row, "eqCd", useDataSet.getCellData(row, "eqCd"));
    if (ds_results.getCellData(ds_results_row, "chassisEqCd") == "") {
      ds_results.setCellData(ds_results_row, "chassShortNo", useDataSet.getCellData(row, "chassisShortCd"));
      ds_results.setCellData(ds_results_row, "chassisEqCd", useDataSet.getCellData(row, "chassisEqCd"));
      ds_results.setCellData(ds_results_row, "chassisKndCd", useDataSet.getCellData(row, "chassisKndCd"));
    }
    ds_results.setCellData(ds_results_row, "posnClsCd", useDataSet.getCellData(row, "posnClsCd"));
  }
  if (useDataSet.getCellData(row, "lbsYn") == 1) {
    ds_results.setCellData(ds_results_row, "pdaYn", 1);
  }
  scwin.f_checkChasisNo(ds_results_row);
  if (ds_results.getCellData(ds_results_row, "cntrWrkShapeCd") == "") {
    var v_odrNo = ds_results.getCellData(ds_results_row, "odrNo");
    var v_cntrSeq = ds_results.getCellData(ds_results_row, "cntrSeq");
    if ("0047" != ds_results.getCellData(ds_results_row, "wrkStpCd")) {
      for (var i = 0; i < ds_results.getRowCount(); i++) {
        if (i != ds_results_row && v_odrNo == ds_results.getCellData(i, "odrNo") && v_cntrSeq == ds_results.getCellData(i, "cntrSeq") && "0047" != ds_results.getCellData(i, "wrkStpCd")) {
          ds_results.setCellData(i, "vehclShortNo", useDataSet.getCellData(row, "vehclShortNo"));
          ds_results.setCellData(i, "vehclNo", useDataSet.getCellData(row, "vehclNo"));
          ds_results.setCellData(i, "vehclClntNo", useDataSet.getCellData(row, "vehclClntNo"));
          ds_results.setCellData(i, "vehclClntNm", useDataSet.getCellData(row, "vehclClntNm"));
          ds_results.setCellData(i, "drvNm", useDataSet.getCellData(row, "drvNm"));
          ds_results.setCellData(i, "mpNo", useDataSet.getCellData(row, "mpNo"));
          if (fromGrid != "gr_MBVehcl") {
            ds_results.setCellData(i, "eqCd", useDataSet.getCellData(row, "eqCd"));
            if (ds_results.getCellData(i, "chassisEqCd") == "") {
              ds_results.setCellData(i, "chassShortNo", useDataSet.getCellData(row, "chassisShortCd"));
              ds_results.setCellData(i, "chassisEqCd", useDataSet.getCellData(row, "chassisEqCd"));
              ds_results.setCellData(i, "chassisKndCd", useDataSet.getCellData(row, "chassisKndCd"));
            }
            ds_results.setCellData(i, "posnClsCd", useDataSet.getCellData(row, "posnClsCd"));
          }
          if (useDataSet.getCellData(row, "lbsYn") == 1) ds_results.setCellData(i, "pdaYn", 1);
          scwin.f_checkChasisNo(i);
        }
      }
    }
  }
  if (preChecked) {
    chk_retrvStpYn.setValue("Y");
    scwin.f_filter();
    var finalMatchIdx = ds_results.getMatchedIndex("odrNo", savedOdrNo).find(function (idx) {
      return ds_results.getCellData(idx, "cntrSeq") == savedCntrSeq;
    });
    if (finalMatchIdx !== undefined) ds_results.setRowPosition(finalMatchIdx);
  }
};
scwin.f_openPopUpUpdateRepWrkInfo = async function (rowIndex) {
  var arrParam = new Array(2);
  var rtnList = new Array();
  arrParam[0] = ds_results.getCellData(rowIndex, "odrNo").trim(); //오더번호
  arrParam[1] = "retrieve";
  var arvWrkPlNm = ds_results.getCellData(rowIndex, "arvWrkPlNm").trim(); //도착지

  if (arvWrkPlNm == "대표착지") {
    let data = {
      "odrNo": ds_results.getCellData(rowIndex, "odrNo").trim(),
      //오더번호
      "chkReterieve": "retrieve"
    };
    data.param = arrParam;
    let opts = {
      id: "smpPop",
      popupName: "대표착지 작업장수정",
      modal: true,
      type: "browserPopup",
      width: 720,
      height: 460,
      title: "대표착지(오더화면팝업)"
    };

    // rtnList = window.showModalDialog("../../../../ds/sd/odrmgnt/odrreg/sd_402_01_30p.jsp?",arrParam,"dialogWidth:720px; dialogHeight:460px; status:No");	
    let rtnVal = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_30p.xml", opts, data);
  }
  var row = ds_results.getRowPosition();
  if (ds_results.getCellData(row, "arvWrkPlClsCd") == "C" || ds_results.getCellData(row, "arvWrkPlClsCd") == "P") {
    let data = {
      "odrNo": ds_results.getCellData(row, "odrNo").trim(),
      "cntrSeq": ds_results.getCellData(row, "cntrSeq"),
      "odrWrkPathSeq": ds_results.getCellData(row, "odrWrkPathSeq"),
      "odrWrkStpSeq": ds_results.getCellData(row, "odrWrkStpSeq"),
      "wrkLobranCd": ds_results.getCellData(row, "wrkLobranCd"),
      "wrkStDt": ds_results.getCellData(row, "wrkStDt"),
      "dptWrkPlCd": ds_results.getCellData(row, "dptWrkPlCd"),
      "arvWrkPlCd": ds_results.getCellData(row, "arvWrkPlCd"),
      "arvWrkPlClsCd": ds_results.getCellData(row, "arvWrkPlClsCd"),
      "dptWrkPlNm": ds_results.getCellData(row, "dptWrkPlNm"),
      "arvWrkPlNm": ds_results.getCellData(row, "arvWrkPlNm"),
      "odrKndCd": ds_results.getCellData(row, "odrKndCd"),
      "cntrSizCd": ds_results.getCellData(row, "cntrSizCd"),
      "fullEmptyClsCd": ds_results.getCellData(row, "fullEmptyClsCd"),
      "wrkStpCd": ds_results.getCellData(row, "wrkStpCd"),
      "pchsAmt": ds_results.getCellData(row, "pchsAmt"),
      "wrkEndDt": ds_results.getCellData(row, "wrkEndDt"),
      "wrkEndHh": ds_results.getCellData(row, "wrkEndHh"),
      "cntrTypCd": ds_results.getCellData(row, "cntrTypCd")
    };
    let opts = {
      id: "smpPop",
      popupName: "하선지변경팝업",
      modal: true,
      type: "browserPopup",
      width: 520,
      height: 350,
      title: "하선지변경팝업"
    };
    let rtnVal = await $c.win.openPopup($p, "/ui/tn/op/transwrkindict/cntr/tn_304_01_08p.xml", opts, data);
    if (rtnVal) {
      let e = await $c.sbm.execute($p, sbm_retrieve);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        scwin.sbm_retrieve_submitdone(e);
      }
    }
  }
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 조회 버튼 클릭 이벤트
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 청구화주 버튼 클릭 이벤트
scwin.udc_realMchtClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_realMchtClntNo.getValue(), ed_realMchtClntNm.getValue(), 'F', 'F');
};

// SEAL 확인 버튼 클릭 이벤트
scwin.btn_applyTime_onclick = function (e) {
  scwin.f_setDptArvDh();
};

// 배차담당자 찾기 버튼 클릭 이벤트 
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_alloccarPicId.getValue(), ed_alloccarPicNm.getValue(), 'F', 'F');
};

// 협력업체 찾기 버튼 클릭 이벤트 
scwin.udc_vehclClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_vehclClntNo.getValue(), ed_vehclClntNm.getValue(), 'F', 'F');
};

// 초기화 버튼 클릭 이벤트
scwin.btn_clear_onclick = function (e) {
  scwin.f_Trash();
};

// 협력업체 찾기 버튼 클릭 이벤트 
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

// 협력업체 확인 버튼 클릭 이벤트 
scwin.btn_applyCopClnt_onclick = function (e) {
  scwin.f_setVehclClntNoToChecked();
};

// 차량단축 버튼 클릭 이벤트 
scwin.btn_shortVhclNo_onclick = function (e) {
  scwin.f_vehclPopup();
};

// 샤시단축 버튼 클릭 이벤트 
scwin.btn_shortChassNo_onclick = function (e) {
  scwin.f_openCommonPopUp(7, ed_shortChassNo.getValue(), ed_shortChassNo.getValue(), 'F', 'F');
};

// 차량배정 버튼 클릭 이벤트 
scwin.btn_allocateCar_onclick = function (e) {
  scwin.f_setVehclNoAndChassisToChecked();
};

// 미지정 컨테이너 운송지시 버튼 클릭 이벤트 
scwin.btn_undesignateCntr_onclick = function (e) {
  scwin.f_CntrRetrievalTransWrkIndict();
};

// 오더SHEET 버튼 클릭 이벤트
scwin.btn_saveAndAutoEDI_onclick = function (e) {
  scwin.f_print(1);
};

// 오더SHEET(일괄) 버튼 클릭 이벤트
scwin.btn_saveAndAutoEDIAll_onclick = function (e) {
  scwin.f_print(4);
};

// 배차지시서 버튼 클릭 이벤트
scwin.btn_print2_onclick = function (e) {
  scwin.f_print(2);
};

// 저장(A/S) 버튼 클릭 이벤트
scwin.btn_saveAndAutoEDIAs_onclick = function (e) {
  scwin.f_SaveAndAutoEDI('AUTO');
};

// 저장(M/S) 버튼 클릭 이벤트
scwin.btn_saveAndAutoEDIMs_onclick = function (e) {
  scwin.f_SaveAndAutoEDI('MANUAL');
};

// Combine연결 버튼 클릭 이벤트
scwin.btn_cmbnR_onclick = function (e) {
  scwin.f_saveContainerCompositeCargoLinkInformation();
};

// 복화해제 버튼 클릭 이벤트
scwin.btn_cmbnN_onclick = function (e) {
  scwin.f_cancelCmpstcrg();
};

// 반출입등록 버튼 클릭 이벤트
scwin.btn_crryOut_onclick = function (e) {
  scwin.f_switchTabMenu();
};

// COPINO전송 버튼 클릭 이벤트
scwin.btn_transCopino_onclick = function (e) {
  scwin.f_crryInOutEDI(false, false, false, ds_results.getRowPosition(), true);
};

// 작업경로 버튼 클릭 이벤트
scwin.btn_resetWrkStp_onclick = function (e) {
  scwin.f_workPathMod();
};

// 일괄수정 버튼 클릭 이벤트
scwin.btn_resetWrkStpAll_onclick = function (e) {
  scwin.f_workPathModAll();
};

// 물량공개 버튼 클릭 이벤트
scwin.btn_Open_onclick = function (e) {
  scwin.f_openTransVolume();
};

// 상세 버튼 클릭 이벤트
scwin.btn_vehclInfo_onclick = function (e) {
  scwin.f_vehclInfo();
};

// 취소 버튼 클릭 이벤트
scwin.btn_cancelAllocated_onclick = function (e) {
  scwin.f_deleteRow();
};

// 저장 버튼 클릭 이벤트
scwin.btn_save_onclick = function (e) {
  scwin.f_Save('YES');
};
scwin.btn_vehclRet_onclick = function (e) {
  scwin.f_RetrieveVechl();
};

// 지도보기(물량) 클릭 이벤트
scwin.btn_map_position_onclick = function (e) {
  scwin.f_ZipOpenmap();
};

// 지도보기(차량) 클릭 이벤트
scwin.btn_map_vehcl_onclick = function (e) {
  scwin.f_Openmap();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 청구화주 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_realMchtClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_realMchtClntNo, ed_realMchtClntNm, 9);
};

// 배차담당자 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, ed_alloccarPicNm, 5);
};

// 협력업체 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_vehclClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclClntNo, ed_vehclClntNm, 8);
};

// 협력업체 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 4);
};

// 차량단축 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_shortVhclNo_onblur = function (e) {
  scwin.f_vehclPopup();
};

// 샤시단축 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_shortChassNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_shortChassNo, em_shortChassNm, 7);
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
// 회수숨기기 클릭시
scwin.chk_retrvStpYn_onchange = function (info) {
  scwin.f_filter();
};

// Combine 클릭시
scwin.chk_Combine_onchange = function (info) {
  scwin.f_filter();
};

// 작업단계 클릭시
scwin.acb_jobClsCd_onchange = function (info) {
  scwin.f_filter();
};

// No세관 클릭시
scwin.chk_CustomYn_onchange = function (info) {
  scwin.f_filterCustom();
};

// ON/BOB 변경 시 
scwin.acb_cntrWrkKndCd_onchange = function (info) {
  scwin.f_filter();
};

// 작업구간 변경 시
scwin.acb_vehclLobranCd_onchange = function (info) {
  scwin.f_retrieveWrkDistrict();
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 청구화주
scwin.callBackRealMchtClntNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_realMchtClntNo, ed_realMchtClntNm);
};

// 배차담당자
scwin.callBackAlloccarPicId = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm);
};

// 협력업체
scwin.callBackVehclClntNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vehclClntNo, ed_vehclClntNm);
};

// 협력업체
scwin.callBackClntNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

// 차량단축
scwin.callBackChassisNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_shortChassNo, scwin.hid_chassisNo);
  scwin.hid_chassisEqCd = rtnList[4];
  scwin.hid_chassisKndCd = rtnList[2];
};

// 차량단축
scwin.callBackChassisNoGrid = async function (rtnList) {
  var row = ds_results.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, "chassShortNo", "");
  ds_results.setCellData(row, "chassisEqCd", rtnList[4]);
  ds_results.setCellData(row, "chassisKndCd", rtnList[2]);
  ds_results.setCellData(row, "chassisVehclNo", rtnList[1]);
  scwin.f_checkChasisNo(row);
  var vOdrNo = ds_results.getCellData(row, "odrNo");
  var vCntrSeq = ds_results.getCellData(row, "cntrSeq");
  var vChassisEqCd = ds_results.getCellData(row, "chassisEqCd");
  var vChassisKndCd = ds_results.getCellData(row, "chassisKndCd");
  var vChassShortNo = ds_results.getCellData(row, "chassShortNo");
  var vChassisVehclNo = ds_results.getCellData(row, "chassisVehclNo");
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (vOdrNo == ds_results.getCellData(i, "odrNo") && vCntrSeq == ds_results.getCellData(i, "cntrSeq")) {
      ds_results.setCellData(i, "chassisEqCd", vChassisEqCd);
      ds_results.setCellData(i, "chassisKndCd", vChassisKndCd);
      ds_results.setCellData(i, "chassShortNo", vChassShortNo);
      ds_results.setCellData(i, "chassisVehclNo", vChassisVehclNo);
    }
  }
  $c.sbm.setAction($p, sbm_retrieveChassis, "/ncall.tn.op.transwrkindict.cntr.RetrieveCarInspInfoCMD.do?chassShortNo=" + ds_results.getCellData(row, "chassShortNo"));
  let e = await $c.sbm.execute($p, sbm_retrieveChassis);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {}
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  var rtnList;
  // // 미배차 조회완료시 공개물량 관심등록사항 팝업
  // if (lc_qryClsCd.bindColVal == "N") {	// 미배차
  //     for (var j = 0 ; j < ds_results.getRowCount() ; j++) {
  //         if (ds_results.getCellData(j, "openYn") == 1 && ds_results.getCellData(j, "chkMobile") == "Y") {
  //             var lobranCd = acb_lobranCd.getValue();
  //             var wrkDistrictCd1 = "";
  //             var clntNo = "";
  //             var stDt = ed_dptIntendDd.getValue();
  //             var endDt = ed_dptIntendDd2.getValue();
  //             var odrKndCd = "";
  //             var noClsCd = "";
  //             var odrNo = ed_cntrOdrNo.getValue();
  //             var railroadAdptDstCd = "";

  //             var pURL = "/tn/op/rscmgnt/tn_305_01_09b.jsp?paramTitle=관심물량등록차량"
  //                      + "&lobranCd="+lobranCd+"&wrkDistrictCd1="+wrkDistrictCd1
  //                      + "&clntNo="+clntNo+"&stDt="+stDt+"&endDt="+endDt+"&odrKndCd="+odrKndCd
  //                      + "&noClsCd="+noClsCd+"&odrNo="+odrNo+"&railroadAdptDstCd="+railroadAdptDstCd
  //                      + "&cargoClsCd=C";

  //             rtnList = window.showModalDialog(pURL,"","dialogWidth:500px; dialogHeight:240px");
  //             if (rtnList != null) {
  //             	for (var i = 0; i < ds_results.getRowCount(); i++) {
  //                 	if (ds_results.getCellData(i, "odrNo") == rtnList[10] && ds_results.getCellData(i, "openYn") == 1) {
  //                 		if (rtnList[0].trim()!= "N/A") {
  // 	                        ds_results.setCellData(i, "vehclShortNo", rtnList[0]);
  // 	                        ds_results.setCellData(i, "vehclNo", rtnList[2]);
  // 	                        ds_results.setCellData(i, "eqCd", rtnList[8]);
  //                 			ds_results.setCellData(i, "chk", 1);
  //                 		}
  //                 	}
  //                 }
  //             }
  // 			break;
  //         }
  //     }
  // }
};
scwin.sbm_save_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다.
    if (scwin.afterSaveRetrieveYN == "YES") {
      // 조회
      let e = await $c.sbm.execute($p, sbm_retrieve);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        scwin.sbm_retrieve_submitdone(e);
      }
    }
  }
};
scwin.sbm_containerCompositeCargoLink_submitdone = function (e) {
  scwin.f_Retrieve(); // 합적연결번호 생성 후 재조회
};
scwin.sbm_cntrOpenTransVolume_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다.
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = function () {
  // 배차인 경우는 수정 못하도록
  if (acb_qryClsCd.getValue() == "Y") {
    gr_results.setColumnReadOnly("vehclShortNo", true);
    gr_results.setColumnReadOnly("combine", true);
    gr_results.setColumnReadOnly("cntrWtCondCd", true);
    gr_results.setColumnReadOnly("chassShortNo", true);
    gr_results.setColumnReadOnly("cntrWrkShapeCd", true);
    gr_results.setColumnReadOnly("pdaYn", true);
    gr_results.setColumnReadOnly("chk", true);

    // 버튼 
    //$c.gus.cfEnableObjects([btn_transCopino, btn_delRow]);
    $c.gus.cfEnableObjects($p, [btn_delRow]);
    btn_transCopino.removeClass("w2trigger_disabled");
    $c.gus.cfDisableObjects($p, [btn_cmbnR, btn_Open, btn_saveAndAutoEDIMs]);

    // 가용차량 데이터셋 초기화
    ds_resultsVehcl.removeAll();
  } else {
    gr_results.setColumnReadOnly("vehclShortNo", false);
    gr_results.setColumnReadOnly("combine", false);
    gr_results.setColumnReadOnly("cntrWtCondCd", false);
    gr_results.setColumnReadOnly("chassShortNo", false);
    gr_results.setColumnReadOnly("cntrWrkShapeCd", false);
    gr_results.setColumnReadOnly("pdaYn", false);
    gr_results.setColumnReadOnly("chk", false);

    // 버튼 
    //$c.gus.cfDisableObjects([btn_transCopino, btn_delRow]);
    $c.gus.cfEnableObjects($p, [btn_delRow]);
    btn_transCopino.addClass("w2trigger_disabled");
    $c.gus.cfEnableObjects($p, [btn_cmbnR, btn_Open, btn_saveAndAutoEDI, btn_saveAndAutoEDIAll, btn_saveAndAutoEDIAs, btn_saveAndAutoEDIMs]);
    var tempTime = "";
    for (var i = 0; i < rowCnt; i++) {
      if (ds_results.getCellData(i, "closeTime") != "") {
        tempTime = ds_results.getCellData(i, "closeTime");
        tempTime = tempTime.substr(0, 2) + "/" + tempTime.substr(2, 2) + " " + tempTime.substr(4, 2) + ":" + tempTime.substr(6, 2);
        ds_results.setCellData(i, "closeTime", tempTime);
      }
    }
  }
  if (scwin.loginId == "281776" || scwin.loginId == "811160" || scwin.loginId == "290060") {
    if (rowCnt == 1) {
      spn_rpa_odr.show();
      ed_rpaOdrNo.setValue(ds_results.getCellData(0, "odrNo"));
    } else {
      spn_rpa_odr.hide();
      ed_rpaOdrNo.setValue("");
    }
  }
  scwin.f_filter();
  var rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    spn_rpa_odr.hide();
    ed_rpaOdrNo.setValue("");
    $c.gus.cfAlertMsg($p, "조회된 데이터가 없습니다.");
    return false;
  }

  // 그리드 0번재 포커스
  gr_results.setFocusedCell(0, 0);

  // 조회 건수를 출력한다.
  totalRows.setValue(rowCnt);
};
scwin.ds_suitableVehcl_ondataload = async function () {
  // 조회 건수를 출력한다.
  var rowCnt = ds_suitableVehcl.getRowCount();
  totalRows1.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "조회된 최적차량이 없습니다.");
    return false;
  }
};
scwin.ds_resultsVehcl_ondataload = async function () {
  // 조회 건수를 출력한다.
  var rowCnt = ds_resultsVehcl.getRowCount();
  totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "조회된 차량이 없습니다.");
    return false;
  }
};
scwin.ds_memberVehicleOwnerList_ondataload = async function () {
  // 조회 건수를 출력한다.
  var rowCnt = ds_memberVehicleOwnerList.getRowCount();
  totalRows3.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
};
scwin.ds_transBP_ondataload = async function () {
  // 조회 건수를 출력한다.
  var rowCnt = ds_transBP.getRowCount();
  totalRows4.setValue(rowCnt);
  if (ds_transBP.getRowCount() > 0) {
    var options = {};
    options.sortIndex = "vehclClntNm";
    options.sortOrder = "1";
    ds_transBP.multisort(options);
  }
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "조회된 협력사 회원이 없습니다.");
    return false;
  }
};
scwin.ds_transBPShpmnt_ondataload = async function () {
  // 조회 건수를 출력한다.
  var rowCnt = ds_transBPShpmnt.getRowCount();
  totalRows5.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
};
scwin.ds_ChassisInfo_ondataload = async function () {
  var str = "";
  var str2 = "";
  var v_odrNo = "";
  var v_cntrNo = "";
  var v_cntrSeq = 0;
  var temp1 = "";
  var temp2 = "";
  var unCheckedRow = ds_results.getRowPosition();
  if (ds_results.getRowCount() != 0) {
    var preChecked = chk_retrvStpYn.getValue();
    if (preChecked) {
      chk_retrvStpYn.setValue("");
      scwin.f_filter();
    }
    if (ds_results.getCellData(unCheckedRow, "cntrWrkShapeCd") == "") {
      v_odrNo = ds_results.getCellData(unCheckedRow, "odrNo");
      v_cntrSeq = ds_results.getCellData(unCheckedRow, "cntrSeq");
      if ("0047" != ds_results.getCellData(unCheckedRow, "wrkStpCd")) {
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          ds_results.setCellData(unCheckedRow + 1, "chassShortNo", ds_results.getCellData(unCheckedRow, "chassShortNo"));
          ds_results.setCellData(unCheckedRow + 1, "chassisEqCd", ds_results.getCellData(unCheckedRow, "chassisEqCd"));
          ds_results.setCellData(unCheckedRow + 1, "chassisKndCd", ds_results.getCellData(unCheckedRow, "chassisKndCd"));
        }
      }
    }
    if (preChecked) {
      chk_retrvStpYn.setValue("Y");
      scwin.f_filter();
    }
  }
  for (var i = 0; i < ds_ChassisInfo.getRowCount(); i++) {
    if (!$c.gus.cfIsNull($p, ds_ChassisInfo.getCellData(i, "inspKndNm"))) {
      str = ds_ChassisInfo.getCellData(i, "inspKndNm");
      temp1 = ds_ChassisInfo.getCellData(i, "rglintInspExpireDt").substr(0, 4) + "년" + ds_ChassisInfo.getCellData(i, "rglintInspExpireDt").substr(4, 2) + "월" + ds_ChassisInfo.getCellData(i, "rglintInspExpireDt").substr(6, 2) + "일";
      str2 = str2 + str + temp1 + "\n";
    }
  }
  if (str != "") {
    await $c.gus.cfAlertMsg($p, str2);
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";

  //DCSS.MANDATORY_COLOR("red")
  //DCSS.OPTIONAL_COLOR("blue")
  if (columnId == "odrNo") {
    // 화주오더번호
    if (ds_results.getCellData(rowIndex, "prtClsCd") == "1") {
      color = "red";
    } else {
      color = "blue";
    }
  } else if (columnId == "wrkStpCd") {
    if (data == '0002') {
      val = "운송";
    } else if (data == '0003') {
      val = "회수";
    } else if (data == '0047') {
      val = "육송";
    }
  } else if (columnId == "openYn") {
    if (data == "1") {
      val = "Y";
    } else {
      val = "N";
    }
  } else if (columnId == "crryoutEdiFlag") {
    var crryoutEdiType = ds_results.getCellData(rowIndex, "crryoutEdiType");
    var resultText = "";
    var typeText = "";
    if (data === "") {
      resultText = "미등록";
    } else if (data === "3") {
      resultText = "미전송";
    } else if (data === "1") {
      resultText = "전송완료";
    } else if (data === "0") {
      resultText = "전송대기";
    } else if (data === "5") {
      resultText = "필수항목오류";
    } else {
      resultText = ""; // 마지막 인자 "" 처리
    }
    if (crryoutEdiType === "CO") {
      typeText = "(COPINO)";
    } else if (crryoutEdiType === "CD") {
      typeText = "(COPI_CODECO)";
    } else {
      typeText = "";
    }
    color = "red";
    val = resultText + typeText;
  } else if (columnId == "crryinEdiFlag") {
    var crryinEdiType = ds_results.getCellData(rowIndex, "crryinEdiType");
    var resultText = "";
    var typeText = "";
    if (data === "") {
      resultText = "미등록";
    } else if (data === "3") {
      resultText = "미전송";
    } else if (data === "1") {
      resultText = "전송완료";
    } else if (data === "0") {
      resultText = "전송대기";
    } else if (data === "5") {
      resultText = "필수항목오류";
    } else {
      resultText = "";
    }
    if (crryinEdiType === "CO") {
      typeText = "(COPINO)";
    } else if (crryinEdiType === "CD") {
      typeText = "(COPI_CODECO)";
    } else {
      typeText = "";
    }
    color = "red";
    val = resultText + typeText;
  }
  gr_results.setCellColor(rowIndex, colIndex, color);
  let excelColIdx = gr_resultsforexcel.getColumnIndex(columnId);
  gr_resultsforexcel.setCellColor(rowIndex, excelColIdx, color);
  return val;
};
scwin.f_customFormatter_tab1 = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "wrkIndictYn" || columnId == "sameLocation" || columnId == "otherCo" || columnId == "realSpdaYn") {
    if (data == '0') {
      val = "예";
    } else if (data == '1') {
      val = "아니오";
    }
  }
  return val;
};
scwin.f_customFormatter_tab2 = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "wrkIndictYn") {
    if (data == '0') {
      val = "예";
    } else if (data == '1') {
      val = "아니오";
    }
  }
  return val;
};
scwin.f_customFormatter_tab3 = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "wrkIndictYn") {
    if (data == '0') {
      val = "예";
    } else if (data == '1') {
      val = "아니오";
    }
  }
  return val;
};
scwin.f_customFormatter_tab5 = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "wrkIndictYn") {
    if (data == '0') {
      val = "예";
    } else if (data == '1') {
      val = "아니오";
    }
  }
  return val;
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
// 운송물량 그리드 textImage 클릭 > 공통 팝업 호출
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex) {
  var columnId = gr_results.getColumnID(columnIndex);
  switch (columnId) {
    case "vehclShortNo":
      scwin.f_retrieveVehclInGrid();
      break;
    case "chassShortNo":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
      break;
    case "dcScNm":
      scwin.f_dcScSearch();
      break;
  }
};

// 운송물량 그리드 클릭 이벤트
scwin.gr_results_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "combine") {
    if (ds_results.getCellData(rowIndex, "combine") == 1) {
      if (ds_results.getCellData(rowIndex, "cmpstcrgNo") != "") {
        if (await $c.gus.cfAlertMsg($p, "컨테이너" + ds_results.getCellData(rowIndex, "cntrNo") + "는 이미 combine된 컨테이너입니다.")) {
          ds_results.undoRow(rowIndex);
          return false;
        }
      }
    }
  }
  var v_odrNo = ds_results.getCellData(rowIndex, "odrNo");
  var v_cntrSeq = ds_results.getCellData(rowIndex, "cntrSeq");
  var v_chk = ds_results.getCellData(rowIndex, "chk");
  if ("0047" != ds_results.getCellData(rowIndex, "wrkStpCd")) {
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (i != rowIndex && v_odrNo == ds_results.getCellData(i, "odrNo") && v_cntrSeq == ds_results.getCellData(i, "cntrSeq") && "0047" != ds_results.getCellData(i, "wrkStpCd")) {
        ds_results.setCellData(i, "chk", v_chk);
      }
    }
  }
};

// 운송물량 그리드 더블 클릭 이벤트
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "realMchtClntNm" || columnId == "dptWrkPlNm") {
    tab_mxTab.setSelectedTabIndex(0);
    scwin.f_RetrieveSuitableVehcl();
  }
  if (columnId == 'arvWrkPlNm') {
    scwin.f_openPopUpUpdateRepWrkInfo(rowIndex);
  }
};

// 최적차량 그리드 dbClick 이벤트
scwin.gr_suitableVehcl_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_setVehclToMainGrid("gr_suitableVehcl", rowIndex);
};

// 직영차량 그리드 dbClick 이벤트
scwin.gr_resultsVehcl_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_setVehclToMainGrid("gr_resultsVehcl", rowIndex);
};

// 귀로공차 그리드 dbClick 이벤트
scwin.gr_memberVehicleOwnerList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_setVehclToMainGrid("gr_memberVehicleOwnerList", rowIndex);
};

// 협력사 그리드 dbClick 이벤트
scwin.gr_transBP_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  var currentRow = ds_results.getRowPosition();
  var savedKey = "";
  if (currentRow !== -1) {
    savedKey = ds_results.getCellData(currentRow, "odrNo") + "_" + ds_results.getCellData(currentRow, "cntrSeq");
  }
  var preChecked = chk_retrvStpYn.getValue();
  if (chk_retrvStpYn.getValue()) {
    chk_retrvStpYn.setValue("");
    scwin.f_filter();
  }
  if (savedKey !== "") {
    var matchIdx = ds_results.getMatchedIndex("odrNo", savedKey.split("_")[0]);
    var finalIdx = matchIdx.find(function (idx) {
      return ds_results.getCellData(idx, "cntrSeq") == savedKey.split("_")[1];
    });
    if (finalIdx !== undefined && finalIdx !== -1) {
      ds_results.setRowPosition(finalIdx);
    }
  }
  var v_row = ds_results.getRowPosition();
  ds_results.setCellData(v_row, "vehclClntNo", ds_transBP.getCellData(rowIndex, "vehclClntNo"));
  ds_results.setCellData(v_row, "vehclClntNm", ds_transBP.getCellData(rowIndex, "vehclClntNm"));
  var v_odrNo = ds_results.getCellData(v_row, "odrNo");
  var v_cntrSeq = ds_results.getCellData(v_row, "cntrSeq");
  var v_vehclClntNo = ds_results.getCellData(v_row, "vehclClntNo");
  for (var j = 0; j < ds_results.getRowCount(); j++) {
    if (ds_results.getCellData(j, "vehclClntNo") != "" && v_row != j && v_odrNo == ds_results.getCellData(j, "odrNo") && v_cntrSeq == ds_results.getCellData(j, "cntrSeq") && v_vehclClntNo != ds_results.getCellData(j, "vehclClntNo")) {
      if (await $c.gus.cfAlertMsg($p, "같은 오더, 컨테이너에 운송단계를 각각 다른  협력업체로 지정하여 동시에 배차할 수 없습니다. \n 운송단계 배차한 후에 회수단계를 배차하여 주시기 바랍니다.")) {
        ds_results.setCellData(v_row, "vehclClntNo", "");
        ds_results.setCellData(v_row, "vehclClntNm", "");
        return false;
        break;
      }
      ;
    }
    if (v_odrNo == ds_results.getCellData(j, "odrNo") && v_cntrSeq == ds_results.getCellData(j, "cntrSeq")) {
      ds_results.setCellData(j, "vehclClntNo", ds_transBP.getCellData(rowIndex, "vehclClntNo"));
      ds_results.setCellData(j, "vehclClntNm", ds_transBP.getCellData(rowIndex, "vehclClntNm"));
    }
  }
  if (preChecked) {
    chk_retrvStpYn.setValue("Y");
    scwin.f_filter();
  }
};
scwin.gr_results_onviewchange = function (info) {
  let row = info.rowIndex;
  let colid = info.colId;
  switch (colid) {
    case "vehclShortNo":
      if (ds_results.getCellData(row, "vehclShortNo") == "") {
        ds_results.setCellData(row, "vehclShortNo", "");
        ds_results.setCellData(row, "vehclNo", "");
        ds_results.setCellData(row, "vehclClntNo", "");
        ds_results.setCellData(row, "vehclClntNm", "");
        ds_results.setCellData(row, "drvNm", "");
        ds_results.setCellData(row, "mpNo", "");
        ds_results.setCellData(row, "eqCd", "");
        ds_results.setCellData(row, "chassShortNo", "");
        ds_results.setCellData(row, "chassisEqCd", "");
        ds_results.setCellData(row, "chassisKndCd", "");
        ds_results.setCellData(row, "chassisVehclNo", "");
      } else {
        scwin.f_retrieveVehclInGrid();
      }
      break;
    case "chassShortNo":
      scwin.f_openCommPopUpGrid(2, row, 'T');
      break;
    default:
      break;
  }
};
scwin.ds_results_onrowpositionchange = function (info) {
  const curPos = info.newRowIndex;
  if (acb_qryClsCd.getValue() == "N") {
    //미배차인경우
    if (ds_results.getCellData(curPos, "openYn") == "1") {
      $c.gus.cfDisableObjects($p, [btn_Open]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_Open]);
    }
  }
};
scwin.ds_results_oncelldatachange = function (info) {
  if (info.colID === "cntrWrkShapeCd") {
    const row = info.rowIndex;
    if (ds_results.getCellData(row, "cntrWrkShapeCd") != "") {
      if (ds_results.getCellData(row, "wrkStpCd") == "0002") {
        for (let i = 0; i < ds_results.getRowCount(); i++) {
          if (ds_results.getCellData(row, "odrNo") == ds_results.getCellData(i, "odrNo") && ds_results.getCellData(row, "cntrSeq") == ds_results.getCellData(i, "cntrSeq") && ds_results.getCellData(i, "wrkStpCd") == "0003") {
            ds_results.setCellData(row, "vehclShortNo", "");
            ds_results.setCellData(row, "vehclNo", "");
            ds_results.setCellData(row, "vehclClntNo", "");
            ds_results.setCellData(row, "vehclClntNm", "");
            ds_results.setCellData(row, "drvNm", "");
            ds_results.setCellData(row, "mpNo", "");
            ds_results.setCellData(row, "eqCd", "");
            ds_results.setCellData(row, "chassShortNo", "");
            ds_results.setCellData(row, "chassisEqCd", "");
            ds_results.setCellData(row, "chassisKndCd", "");
            ds_results.setCellData(row, "chassisVehclNo", "");
            break;
          }
        }
      } else {
        $c.win.alert($p, "DOOR운송 단계만 선택할 수 있습니다.");
        ds_results.undoRow(row);
        return false;
      }
    } else {
      ds_results.setCellData(row, "vehclShortNo", "");
      ds_results.setCellData(row, "vehclNo", "");
      ds_results.setCellData(row, "vehclClntNo", "");
      ds_results.setCellData(row, "vehclClntNm", "");
      ds_results.setCellData(row, "drvNm", "");
      ds_results.setCellData(row, "mpNo", "");
      ds_results.setCellData(row, "eqCd", "");
      ds_results.setCellData(row, "chassShortNo", "");
      ds_results.setCellData(row, "chassisEqCd", "");
      ds_results.setCellData(row, "chassisKndCd", "");
      ds_results.setCellData(row, "chassisVehclNo", "");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_realMchtClntNo',codeId:'ed_realMchtClntNo',nameId:'ed_realMchtClntNm',btnId:'btn_realMchtClntNo',code:'realMchtClntNo',name:'realMchtClntNm',refDataCollection:'ds_search',selectID:'retrieveBilgMchtList_tpro','ev:onclickEvent':'scwin.udc_realMchtClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_realMchtClntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:ds_search.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dptIntendDd',refDataMap:'ds_search',refEdDt:'dptIntendDd2',refStDt:'dptIntendDd',style:'',edFromId:'ed_dptIntendDd',edToId:'ed_dptIntendDd2',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_noClsCd',search:'start',style:'width:100px;',submenuSize:'auto',ref:'data:ds_search.noClsCd',allOption:'',chooseOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrOdrNo',placeholder:'',style:'width:115px;',ref:'data:ds_search.cntrOdrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_qryClsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.qryClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미배차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_jobClsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'','ev:onchange':'scwin.acb_jobClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0002'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0003'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'육송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0047'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ON/BOB ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrWrkKndCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_search.cntrWrkKndCd','ev:onchange':'scwin.acb_cntrWrkKndCd_onchange'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_alloccarPicId',btnId:'btn_alloccarPicId',codeId:'ed_alloccarPicId',nameId:'ed_alloccarPicNm',code:'alloccarPicId',name:'alloccarPicNm',refDataCollection:'ds_search',selectID:'retrieveUserInfo_tpro','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent',readOnlyName:'true',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_vehclClntNo',nameId:'ed_vehclClntNm',codeId:'ed_vehclClntNo',btnId:'btn_vehclClntNo',refDataCollection:'ds_search',code:'vehclClntNo',name:'vehclClntNm','ev:onclickEvent':'scwin.udc_vehclClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclClntNo_onblurCodeEvent',selectID:'retrieveCarKindCoClntInfo_tpro',readOnlyName:'true',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_CustomYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.chk_CustomYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NO세관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_retrvStpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.chk_retrvStpYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회수숨기기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_Combine',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.chk_Combine_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Combine'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',popupTitle:'',selectID:'retrieveCarKindCoClntInfo_tpro',style:'',btnId:'btn_clntNo',id:'udc_clntNo',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ',disabled:'',escape:'false',id:'btn_applyCopClnt',style:'',type:'button','ev:onclick':'scwin.btn_applyCopClnt_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량단축',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_shortVhclNo',placeholder:'',ref:'',style:'width:85px;','ev:onblur':'scwin.ed_shortVhclNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_shortVhclNo',style:'',type:'button','ev:onclick':'scwin.btn_shortVhclNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시단축 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_shortChassNo',placeholder:'',ref:'',style:'width:85px;','ev:onblur':'scwin.ed_shortChassNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_shortChassNo',style:'',type:'button','ev:onclick':'scwin.btn_shortChassNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',disabled:'',escape:'false',id:'btn_allocateCar',style:'',type:'button','ev:onclick':'scwin.btn_allocateCar_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량배정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',disabled:'',escape:'false',id:'btn_undesignateCntr',style:'',type:'button','ev:onclick':'scwin.btn_undesignateCntr_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지정 컨테이너 운송지시'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'spn_rpa_odr',class:'inner',style:'display: none;'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더번호',class:''}},{T:1,N:'xf:input',A:{style:'width: 120px;',id:'ed_rpaOdrNo',class:''}}]},{T:1,N:'xf:group',A:{class:'inner',id:'spn_rsltsTable_6BB',style:'display: none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발실적일시',style:''}},{T:1,N:'xf:group',A:{class:'form-group',id:'group22',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_rsltsDptDd',style:''}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_rsltsDptHh',style:''}}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착실적일시',style:''}},{T:1,N:'xf:group',A:{class:'form-group',id:'group23',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_rsltsArvDd',style:''}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_rsltsArvHh',style:''}}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SEAL',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_sealNo',style:'width: 120px;'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_applyTime',style:'',type:'button','ev:onclick':'scwin.btn_applyTime_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridID:'gr_results',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_results_ontextimageclick','ev:oncelldblclick':'scwin.gr_results_oncelldblclick','ev:oncellclick':'scwin.gr_results_oncellclick','ev:onviewchange':'scwin.gr_results_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption12',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'청구화주',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'DOOR',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'LINE',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'ODR_NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'SZ/TY',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'컨테이너NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',value:'작업<br/>단계',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column45',inputType:'text',value:'차량<br/>단축',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'소유<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column39',inputType:'text',value:'샤시<br/>단축',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',value:'중량<br/>조건',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column35',inputType:'text',value:'ON/<br/>BOB',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column33',inputType:'text',value:'할증<br/>등록',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column31',inputType:'text',value:'할증<br>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'샤시번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'협력업체<br/>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'협력업체명',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column23',inputType:'text',value:'콤바인',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column25',inputType:'text',value:'스마트폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',value:'모바일<br/>전송유무',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column55',inputType:'text',value:'화물위탁증<br/>발행여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'출발시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',value:'closing<br/>time',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column77',inputType:'text',value:'물량<br/>공개',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column75',inputType:'text',value:'복화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column73',inputType:'text',value:'화주오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'text',value:'반출EDI',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',value:'반입EDI',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',value:'COPINO오류내역',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column65',inputType:'text',value:'청구거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',value:'관심<br/>물량',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',textAlign:'left',width:'80',readOnly:'true',class:'underline',style:'cursor: default !important;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',textAlign:'left',width:'80',class:'underline',readOnly:'true',style:'cursor: default !important;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorNm',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true',textAlign:'left',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',textAlign:'right',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrInfo',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'70',readOnly:'true',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortNo',inputType:'textImage',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassShortNo',inputType:'textImage',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrWtCondCd',inputType:'select',width:'70',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrWrkShapeCd',inputType:'select',width:'70',readOnly:'false',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'textImage',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScAmt',inputType:'text',textAlign:'right',width:'100',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisVehclNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'combine',inputType:'checkbox',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pdaYn',inputType:'checkbox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'takeMobile',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'csctPrtYn',inputType:'checkbox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDh',inputType:'text',width:'100',textAlign:'left',readOnly:'true',displayFormat:'##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',textAlign:'right',width:'70',readOnly:'true',displayFormat:'#,###.###',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeTime',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'openYn',inputType:'text',width:'70',readOnly:'true',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmpstcrgNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',width:'120',readOnly:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutEdiFlag',inputType:'text',width:'100',textAlign:'left',readOnly:'true',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinEdiFlag',inputType:'text',width:'100',readOnly:'true',textAlign:'left',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copinoResponse',inputType:'text',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'100',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chkMobile',inputType:'text',width:'70',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_saveAndAutoEDI',style:'',type:'button','ev:onclick':'scwin.btn_saveAndAutoEDI_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더SHEET'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_saveAndAutoEDIAll',style:'',type:'button','ev:onclick':'scwin.btn_saveAndAutoEDIAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더SHEET(일괄)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'N',style:'',EngYn:'N',delUserAuth:'C',btnRowDelObj:'btn_delRow',btnRowAddYn:'N',btnRowDelYn:'Y',rowDelFunction:'scwin.f_delAllocatedRow'}},{T:1,N:'xf:trigger',A:{class:'btn pt-blue',id:'btn_saveAndAutoEDIAs',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_saveAndAutoEDIAs_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장(A/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn pt-blue',id:'btn_saveAndAutoEDIMs',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_saveAndAutoEDIMs_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장(M/S)'}]}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results','ev:ontextimageclick':'scwin.gr_results_ontextimageclick',id:'gr_resultsforexcel',style:'display: none;',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption18',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'ODR_NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'컨테이너NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'LINE',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'청구화주',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'SZ/TY',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'DOOR',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'협력업체명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column35',inputType:'text',value:'ON/<br/>BOB',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'샤시번호',width:'100'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column78',value:'특이사항',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{customFormatter:'scwin.f_customFormatter',displayMode:'label',id:'odrNo',inputType:'text',readOnly:'true',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{colMerge:'true',displayMode:'label',id:'cntrNo',inputType:'text',readOnly:'true',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',readOnly:'true',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNm',inputType:'text',readOnly:'true',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrInfo',inputType:'text',readOnly:'true',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',readOnly:'true',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'dptWrkPlNm',inputType:'text',readOnly:'true',style:'cursor: default !important;',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'arvWrkPlNm',inputType:'text',readOnly:'true',style:'cursor: default !important;',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorNm',inputType:'text',readOnly:'true',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNm',inputType:'text',readOnly:'true',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',readOnly:'true',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'label',id:'cntrWrkShapeCd',inputType:'select',readOnly:'false',ref:'',width:'70'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisVehclNo',inputType:'text',readOnly:'true',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print2',style:'',type:'button','ev:onclick':'scwin.btn_print2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차지시서'}]}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cmbnR',style:'',type:'button','ev:onclick':'scwin.btn_cmbnR_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Combine연결'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cmbnN',style:'',type:'button','ev:onclick':'scwin.btn_cmbnN_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복화해제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_crryOut',style:'',type:'button','ev:onclick':'scwin.btn_crryOut_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반출입등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_transCopino',style:'',type:'button','ev:onclick':'scwin.btn_transCopino_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'COPINO전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_resetWrkStp',style:'',type:'button','ev:onclick':'scwin.btn_resetWrkStp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_resetWrkStpAll',style:'',type:'button','ev:onclick':'scwin.btn_resetWrkStpAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄수정'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Open',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Open_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'물량공개'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_vehclInfo',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_vehclInfo_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancelAllocated',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_cancelAllocated_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_vehclCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_vehclLobranCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_vehclSearch.lobranCd','ev:onchange':'scwin.acb_vehclLobranCd_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkDstCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_vehclSearch.wrkDstCd',allOption:'',chooseOption:'true',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_logisWrkDistrictCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_vehclRet',style:'',type:'button','ev:onclick':'scwin.btn_vehclRet_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width:calc(100% - 500px);'},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tab_mxTab',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_mxTab_page2',label:'최적차량',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_mxTab_page1',label:'직영차량',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_mxTab_page3',label:'귀로공차',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_mxTab_page4',label:'협력사',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_mxTab_page5',label:'POOL',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content6',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_suitableVehcl',btnPlusYn:'Y',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_suitableVehcl',id:'gr_suitableVehcl',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_suitableVehcl_oncelldblclick',filterBoxvisibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption13',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'업체명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소유<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'기사명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'핸드폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'현위치',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'스마트폰<br/>장착여부',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'동일위치',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'타지사',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'스마트폰<br/>장착여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'업체명',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',value:'샤시번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',value:'샤시종류',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',value:'차량정기검사<br/>만료일',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',value:'샤시정기검사<br/>만료일',width:'120',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',textAlign:'center',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',textAlign:'left',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'select',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'120',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'location',inputType:'text',textAlign:'left',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictYn',inputType:'text',width:'100',readOnly:'true',customFormatter:'scwin.f_customFormatter_tab1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sameLocation',inputType:'text',width:'100',readOnly:'true',customFormatter:'scwin.f_customFormatter_tab1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'otherCo',inputType:'text',textAlign:'center',width:'80',readOnly:'true',customFormatter:'scwin.f_customFormatter_tab1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realSpdaYn',inputType:'text',width:'100',readOnly:'true',customFormatter:'scwin.f_customFormatter_tab1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisVehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisKndNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rglintInspExpireDt',inputType:'text',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisRglintInspExpireDt',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content7',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_resultsVehcl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_resultsVehcl',id:'gr_resultsVehcl',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_resultsVehcl_oncelldblclick',filterBoxvisibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption14',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'업체명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소유<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'기사명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'핸드폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'현위치',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'스마트폰<br/>장착여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column29',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column27',inputType:'text',value:'도착지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column21',inputType:'text',value:'운송상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column23',inputType:'text',value:'업체명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column25',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column37',inputType:'text',style:'',value:'차량정기검사<br/>만료일',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column35',inputType:'text',style:'',value:'샤시번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column31',inputType:'text',style:'',value:'샤시종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column33',inputType:'text',style:'',value:'샤시정기검사<br/>만료일',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',textAlign:'center',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',textAlign:'left',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'location',inputType:'text',textAlign:'left',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictYn',inputType:'text',width:'100',customFormatter:'scwin.f_customFormatter_tab2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transSts',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNm',inputType:'text',textAlign:'left',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqnrmNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rglintInspExpireDt',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisVehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisKndNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisRglintInspExpireDt',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content8',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',btnUser:'N',gridUpYn:'N',gridDownYn:'N',templateYn:'N',btnPlusYn:'Y',gridID:'gr_memberVehicleOwnerList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_memberVehicleOwnerList',id:'gr_memberVehicleOwnerList',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_memberVehicleOwnerList_oncelldblclick',filterBoxvisibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption15',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'업체명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소유<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'기사명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'핸드폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'현위치',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'스마트폰<br/>장착여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column39',inputType:'text',value:'선택',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column37',inputType:'text',value:'차량상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column35',inputType:'text',value:'출발작업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column33',inputType:'text',value:'도착작업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column31',inputType:'text',value:'수행품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column29',inputType:'text',value:'요청화주',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column27',inputType:'text',value:'도착지권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column21',inputType:'text',value:'가용일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column23',inputType:'text',value:'입력구분',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'select',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'70',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logisVehclDrvNm1',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logisVehclDrv1MpNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'location',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictYn',inputType:'text',width:'100',readOnly:'true',customFormatter:'scwin.f_customFormatter_tab3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclStsCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transCommNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'usblDtm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputClsCd',inputType:'text',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content9',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section5',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'N',templateYn:'N',gridUpYn:'N',gridID:'gr_transBP'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section5',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transBP',id:'gr_transBP',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_transBP_oncelldblclick',filterBoxvisibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption16',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속지사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'업체명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'담당자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'휴대폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'주소',width:'220'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'FAX',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'차량수',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'선호화종',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column19',inputType:'text',value:'소속점소',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNm',inputType:'text',textAlign:'left',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntPersNm',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntTelNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMpNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'address',inputType:'text',textAlign:'left',width:'220'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntFaxNo',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclCnt',inputType:'text',textAlign:'right',width:'90',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prefKcgNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content10',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section6',style:'',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',gridID:'gr_transBPShpmnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section6',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transBPShpmnt',id:'gr_transBPShpmnt',style:'',visibleRowNum:'5',visibleRowNumFix:'true',filterBoxvisibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption17',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'업체명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소유<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'기사명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'핸드폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'현위치',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'스마트폰<br/>장착여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column45',inputType:'text',value:'선택',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column43',inputType:'text',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column41',inputType:'text',value:'명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column39',inputType:'text',value:'소유구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column37',inputType:'text',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column35',inputType:'text',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column33',inputType:'text',value:'차량단축번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column31',inputType:'text',value:'종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column29',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column27',inputType:'text',value:'선호권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column25',inputType:'text',value:'선호화종',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'location',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictYn',inputType:'text',width:'100',readOnly:'true',customFormatter:'scwin.f_customFormatter_tab5'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opentopblcMgntCo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opentopblcMgntCoNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo2',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm2',inputType:'text',textAlign:'left',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prefDistrict1',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prefKcg1',inputType:'text',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows5',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn map',id:'btn_map_position',style:'display: none;',type:'button','ev:onclick':'scwin.btn_map_position_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지도보기(물량)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn map',id:'btn_map_vehcl',style:'display: none;',type:'button','ev:onclick':'scwin.btn_map_vehcl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지도보기(차량)'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'특이사항',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:''},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txt_odrRmk',style:'height:120px;',readOnly:'true',ref:'data:ds_results.rmk'}},{T:1,N:'xf:textarea',A:{class:'',id:'txt_transRmk',style:'height:121px;',ref:'data:ds_results.transRmk'}}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'em_shortChassNm',popupID:'',selectID:'',style:'display:none'}},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid2',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})