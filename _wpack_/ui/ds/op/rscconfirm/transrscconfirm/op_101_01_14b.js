/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_01_14b.xml 198683 0d1dcbf5bc43d5bcc75977b28c341a34df36e5bb7e80264b3b1d42635232bbb8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtBranCd',name:'계약점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition3'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SaveEquipmentContract',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_SaveEquipmentContract_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntCd',name:'거래처코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'ctrtSeq',name:'계약순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'odrPrtDd',name:'오더발행일',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'payCond',name:'지급조건',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'ctrtHh',name:'계약시간',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'ctrtAmt',name:'계약금액',dataType:'number',defaultValue:'0',length:'11'}},{T:1,N:'w2:column',A:{id:'hhPerUpr',name:'시간당단가',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'ddMmClsCd',name:'일월구분코드',dataType:'text',defaultValue:'',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_knd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_jumso',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_PayBaseline',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_ddMmCls',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_sasiKind',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_CommFltr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conCombo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라미터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라미터3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LCCEList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNo',name:'물류중기대표협력업체번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'lnkEqKndCd',name:'연결장비종류코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'거래처 대표이사',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처핸드폰번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNm',name:'정산협력업체',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlCd',name:'물류장비위치작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'eqCurWrkPlNm',name:'장비현재작업장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'eqStsCd',name:'장비상태코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'eqStsNm',name:'장비상태명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'회원제차량여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'작업구간코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'물류작업권역코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'물류작업권역코드2',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'mobileIndictYn',name:'모바일지시여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'보세운송시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'보세운송종료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eqDriveWayCd',name:'장비구동방식코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'물류차량기사명1',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd1',name:'물류화종구분코드1',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd2',name:'물류화종구분코드2',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'물류차량기사1핸드폰번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'trsNo1',name:'TRS번호1',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'mbssysStDt',name:'회원제시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'mbssysEndDt',name:'회원제종료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'logisHirecarMgntClsCd',name:'물류용차관리구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'deleteKndCd',name:'삭제종류코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'insertKndCd',name:'입력종류코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitYn',name:'협력업체차량등록승인여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitEmpNo',name:'협력업체차량등록승인사원번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitDt',name:'협력업체차량등록승인일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'workFlaga',name:'작업플래그A',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'workFlagb',name:'작업플래그B',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'deleteState',name:'삭제상태',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm1',name:'화종구분1',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm2',name:'화종구분2',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eqChgDt',name:'장비변경일자',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'direcMgntYn',name:'직영차여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm3',name:'화종구분3',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm4',name:'화종구분4',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd3',name:'물류화종구분코드3',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd4',name:'물류화종구분코드4',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgYn',name:'벌크복화여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgStDt',name:'벌크복화시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgEndDt',name:'벌크복화종료일자',dataType:'text',defaultValue:'',length:'8'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conSave'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'carKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCdModify',name:'장비코드변경',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deleteKndCd',name:'삭제종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conRetrieveCarDoubleInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'serCarNm',name:'검색차량명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LCCEOneData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNo',name:'물류중기대표협력업체번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnkEqKndCd',name:'연결장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNm',name:'정산협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'거래처 대표이사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlCd',name:'물류장비위치작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCurWrkPlNm',name:'장비현재작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqStsCd',name:'장비상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqStsNm',name:'장비상태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'회원제차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'작업구간코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'물류작업권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'물류작업권역코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobileIndictYn',name:'모바일지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'보세운송시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'보세운송종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayCd',name:'장비구동방식코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'물류차량기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd1',name:'물류화종구분코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd2',name:'물류화종구분코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'물류차량기사1핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo1',name:'TRS번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysStDt',name:'회원제시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysEndDt',name:'회원제종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHirecarMgntClsCd',name:'물류용차관리구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteKndCd',name:'삭제종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insertKndCd',name:'입력종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitYn',name:'협력업체차량등록승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitEmpNo',name:'협력업체차량등록승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitDt',name:'협력업체차량등록승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workFlaga',name:'작업플래그A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workFlagb',name:'작업플래그B',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteState',name:'삭제상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm1',name:'화종구분1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm2',name:'화종구분2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm3',name:'화종구분3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm4',name:'화종구분4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd3',name:'물류화종구분코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd4',name:'물류화종구분코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqChgDt',name:'장비변경일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'direcMgntYn',name:'직영차여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col70',name:'화종구분3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col71',name:'화종구분4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col72',name:'물류화종구분코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col73',name:'물류화종구분코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgYn',name:'벌크복화여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgStDt',name:'벌크복화시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgEndDt',name:'벌크복화종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DuplicationCarInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCooperationCompanyEquipmentList',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCooperationCompanyEquipmentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_LCCEList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_LCCEList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveCooperationCompanyEquipmentList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveCooperationCompanyContractEquipment',action:'/ds.op.rscconfirm.transrscconfirm.SaveCooperationCompanyContractEquipmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_LCCEList","key":"IN_DS1"},{"action":"modified","id":"ds_SaveEquipmentContract","key":"IN_DS2"},"dma_conSave"]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveCooperationCompanyContractEquipment_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCooperationContract',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCooperationCompanyContractCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition2","key":"IN_DS1"},{"id":"ds_SaveEquipmentContract","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SaveEquipmentContract","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveCooperationContract_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCarDoubleInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCarNameDoubleInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_conRetrieveCarDoubleInfo",{"id":"ds_LCCEOneData","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_LCCEOneData","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCarDuplicationInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCooperationCompanyEquipmentDuplicationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition3","key":"IN_DS1"},{"id":"ds_DuplicationCarInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_DuplicationCarInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getJumsoCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo_jumso","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getJumsoCode_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getEquipmentCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getEquipmentCode2',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getPayBaselineCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo_PayBaseline","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getEquipmentContractCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo_ddMmCls","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getSasiKindCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo_sasiKind","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getCommFltrCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conCombo',target:'data:json,{"id":"ds_combo_CommFltr","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getCommFltrCode_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*************************************************************************************
   화면ID   : op_101_01_14b.xml
   작성일자 : 2025.12.15
   개발자   : 유청아
   특이사항 : 1. gv_canUseTr 변수 사용하여 조회 여부 체크 동작에 문제가 있어서 제거 함
              2. 아래문제점은 ASIS와 동일하게 작동되도록 처리함
                 - 조회 후 차량현황에서 첫번째 데이터를 선택한 후 [행삭제]를 하면 f_carGridDelrow 함수를 호출
                   cfDisableBtn([ bDelete]); 내용이 있는데 동적으로 생성된 [계약점소삭제] 버튼을 비활성 시키는 로직인데 해당 버튼이 비활성 처리가 안됨
                 - f_OnLoad에서도 cfDisableBtn([ bUpdate, bDelete]); 내용이 있는데 실제로  [계약점소삭제] 버튼을 비활성 시키지는 않음
              3. ASIS는 로드시에 장비구분을 중기(LH)로 SET하나 다른 처리들을 차량(LV) 기준으로 처리하여 [행삭제] 버튼이 보임
                 TOBE에서는 행삭제 버튼이 보이지 않도록 협의함(2026.02.03 박주령PM)
              4. 중기현황 그리드에서 행추가 후 행삭제(f_carGridDelrow())하면 ASIS는 오류남. TOBE에서는 ASIS 로직대로 구현해서 처리되면 됨    
**************************************************************************************/

scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.sUserId = $c.data.getMemInfo($p, "userId");
scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드
scwin.sClntNo = $c.data.getMemInfo($p, "clntNo");
scwin.sClntNm = $c.data.getMemInfo($p, "clntNm");
scwin.sLoUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.oldCurPos = 0;
scwin.oldDistrictKind = ""; // 이전 작업권역종류
scwin.oldCarKndChk = ""; // 이전 차량,중기 종류코드
scwin.gv_canUseTr = 1; //조회컴포넌트사용가능여부
scwin.rtnCarInfoList = null;
scwin.rtnPosnClsCd = "";
scwin.ds_LCCEList_text = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 공통코드 콤보박스 SET
  const codeOptions = [{
    grpCd: "ZZ617",
    compID: "acb_lv_actkind"
  },
  // 구동방식
  {
    grpCd: "OP190",
    compID: "acb_lv_op190"
  },
  // 화물구분
  {
    grpCd: "ZZ307",
    compID: "acb_lv_workterm"
  },
  // 작업구간
  {
    grpCd: "ZZ618",
    compID: "acb_lv_mngKind"
  } // 관리구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  btn_dupCheck.hide(); // 중복 버튼 hide

  rd_carKndChk.setValue("LH"); // 장비구분의 Default 를 차량으로 세팅

  scwin.f_SetGridColumnMaxLength(gr_EquipmentContractList);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    udc_ctrtDt.setDisabled(true);
    $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false);
    $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false);
    $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false); // 화면 수정 disable
    $c.gus.cfEnableObj($p, cbx_lv_deleteState, false);
    scwin.f_carKndChkOnClick();
    //scwin.f_RetrieveSecond("LV", ""); // 장비 종류 콤보 조회
    scwin.f_RetrieveJumso("", "A", "B"); // 물류점소 조회

    scwin.f_RetriveCommFltrCombo("OP108", "Y"); // 본문 - 차량 소유구분코드콤보 조회
    scwin.f_RetriveCommFltrCombo2("OP263", "1"); // 본문 - 계약정보 일월구분코드콤보 조회

    scwin.f_RetrieveCommonUpperCd(); // 샤시종류 조회.

    $c.gus.cfDisableKeyData($p);
    //$c.gus.cfDisableBtn([$c.gus.getctrlBtn('bUpdate'), $c.gus.getctrlBtn('bDelete')]);
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]); //ASIS에서 동적으로 생성하는 bDelete 버튼은 비활성 처리가 안됨(2025.12.23 고객협의사항으로 해당 버튼 활성화 처리되도록 수정)

    if (scwin.sUserClsCd != "01") {
      // 조회조건 - 협력업체 disable
      $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
      ed_reqMchtCd.setValue(scwin.sClntNo);
      ed_reqMchtNm.setValue(scwin.sClntNm);
      btn_reqMchtCd.setDisabled(true); //조회조건-협력업체 검색 버튼
    } else {
      $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
    }
    udc_empDate.setDisabled(true); // 회원제기간
    udc_boseDate.setDisabled(true); // 보세운송기간 

    scwin.f_districtSearchKind(); // 권역 가져오기

    //테스트 데이터
    //ed_reqMchtCd.setValue("621627"); //중기     
    //ed_reqMchtCd.setValue("295727"); //차량 //128704
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
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

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (!(disGubun == 1 || disGubun == 4)) {
    if (ed_lv_eqModelNm.getDisabled() == true) return;
    if (ed_lh_eqModelNm.getDisabled() == true) return;
  }
  if (scwin.sUserClsCd != "01" && disGubun == 1) {
    // 협력업체가 로그인 한 상태에서 조회 부분 협력업체 팝업 리턴    
    return;
  } else if (scwin.sUserClsCd != "01" && disGubun == 5) {
    // 협력업체가 로그인 한 상태에서 본문내용 부분 차량,중기 소속협력업체 팝업 리턴
    return;
  }

  // 선언부
  var kind_str = "";
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 조회조건-협력업체 팝업
      if (rd_carKndChk.getValue() == "LV") {
        //차량
        kind_str = "01";
      } else if (rd_carKndChk.getValue() == "LH") {
        //중기
        kind_str = "02";
      } else {
        kind_str = "01";
      }
      udc_reqMchtCd.setSelectId("retrieveCarKindClntInfo"); // XML상의 SELECT ID
      udc_reqMchtCd.cfCommonPopUp(scwin.udc_reqMchtCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , kind_str // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "협력업체조회,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 장비구분-차량 화종구분1 조회 팝업
      if (acb_lv_op190.getValue() == "C") {
        $c.gus.cfAlertMsg($p, "컨테이너는 화종구분이 없습니다.");
        return;
      }
      udc_lv_hwajong1Cd.setSelectId("retrieveHwajongInfo"); // XML상의 SELECT ID
      udc_lv_hwajong1Cd.cfCommonPopUp(scwin.udc_lv_hwajong1Cd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "화종구분조회,화종구분코드,화종구분명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 장비구분-차량 화종구분2 조회 팝업
      if (acb_lv_op190.getValue() == "C") {
        $c.gus.cfAlertMsg($p, "컨테이너는 화종구분이 없습니다.");
        return;
      }
      udc_lv_hwajong2Cd.setSelectId("retrieveHwajongInfo"); // XML상의 SELECT ID
      udc_lv_hwajong2Cd.cfCommonPopUp(scwin.udc_lv_hwajong2Cd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "화종구분조회,화종구분코드,화종구분명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 조회조건-장비번호 조회 팝업            
      pWhere = "LO," + rd_carKndChk.getValue() + ",";
      udc_con_eqNo.setSelectId("retrieveKndVehclListInfo"); // XML상의 SELECT ID
      udc_con_eqNo.cfCommonPopUp(scwin.udc_con_eqNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '5' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 장비구분-차량,중기 소속협력업체조회
      if (rd_carKndChk.getValue() == "LV") {
        // 차량 = 물류차량            
        pWhere = "01";
      } else if (rd_carKndChk.getValue() == "LH") {
        // 중기            
        pWhere = "02";
      }
      udc_lv_reqMchtCd2.setSelectId("retrieveCarKindClntInfo"); // XML상의 SELECT ID
      udc_lv_reqMchtCd2.cfCommonPopUp(scwin.udc_lv_reqMchtCd2_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      // 장비구분-차량,중기 -모델명조회
      pWhere = rd_carKndChk.getValue();
      udc_lv_eqModelCd.setSelectId("retrieveCarModelCdInfo"); // XML상의 SELECT ID
      udc_lv_eqModelCd.cfCommonPopUp(scwin.udc_lv_eqModelCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '700' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      // 장비구분-중기 작업장 팝업            
      udc_lh_logisEqPosWrkPlCd.setSelectId("retrieveLHWrkPlInfo"); // XML상의 SELECT ID
      udc_lh_logisEqPosWrkPlCd.cfCommonPopUp(scwin.udc_lh_logisEqPosWrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 8:
      // 장비구분-차량,중기 - 정산협력업체조회
      if (rd_carKndChk.getValue() == "LV") {
        // 차량 = 물류차량            
        pWhere = "01";
      } else if (rd_carKndChk.getValue() == "LH") {
        // 중기            
        pWhere = "02";
      }
      udc_lv_reqMchtCd1.setSelectId("retrieveCarKindClntInfo"); // XML상의 SELECT ID
      udc_lv_reqMchtCd1.cfCommonPopUp(scwin.udc_lv_reqMchtCd1_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 9:
      // 장비구분-차량 화종구분3 조회 팝업
      if (acb_lv_op190.getValue() == "C") {
        $c.gus.cfAlertMsg($p, "컨테이너는 화종구분이 없습니다.");
        return;
      }
      udc_lv_hwajong3Cd.setSelectId("retrieveHwajongInfo"); // XML상의 SELECT ID
      udc_lv_hwajong3Cd.cfCommonPopUp(scwin.udc_lv_hwajong3Cd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "화종구분조회,화종구분코드,화종구분명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 10:
      // 장비구분-차량 화종구분4 조회 팝업
      if (acb_lv_op190.getValue() == "C") {
        $c.gus.cfAlertMsg($p, "컨테이너는 화종구분이 없습니다.");
        return;
      }
      udc_lv_hwajong4Cd.setSelectId("retrieveHwajongInfo"); // XML상의 SELECT ID
      udc_lv_hwajong4Cd.cfCommonPopUp(scwin.udc_lv_hwajong4Cd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "화종구분조회,화종구분코드,화종구분명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-----------------------------------------------
// 권한 체크 및 적용
//-----------------------------------------------
scwin.f_atholity = function () {
  // 화면에서 버튼객체를 가져온다
  const objBtn = $c.util.getChildren($p, $p.getFrame(), {
    includePlugin: "trigger anchor button",
    recursive: true
  });
  for (var idx in objBtn) {
    // 권한에 따른 버튼 enable/disable
    if (objBtn[idx].options.userAuth && $c.gus.cfCheckAuth($p, objBtn[idx].options.userAuth) == false) {
      console.log("userAuth=" + objBtn[idx].id);
      $c.gus.cfEnableObj($p, objBtn[idx], false);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가, 삭제에 대한 제어 호출
//-------------------------------------------------------------------------
scwin.f_underBarAct = function (actValue) {
  // 장비구분이 차량일때
  if (actValue == "LV") {
    btn_rowDel1.show("");

    // 버튼명 바꾸려면 enable 처리 후 변경 해야함
    if (btn_delete.getDisabled() == true) {
      btn_delete.setDisabled(false);
      btn_delete.setValue("계약점소삭제");
      btn_delete.setDisabled(true);
    } else {
      btn_delete.setValue("계약점소삭제");
    }
    btn_delete.addClass("white");
  } else if (actValue == "LH") {
    btn_rowDel1.hide();

    // 버튼명 바꾸려면 enable 처리 후 변경 해야함
    if (btn_delete.getDisabled() == true) {
      btn_delete.setDisabled(false);
      btn_delete.setValue("삭제");
      btn_delete.setDisabled(true);
    } else {
      btn_delete.setValue("삭제");
    }
    btn_delete.removeClass("white");
  }

  //권한 재적용
  scwin.f_atholity();

  //$c.gus.cfDisableBtn([$c.gus.getctrlBtn('bUpdate'), $c.gus.getctrlBtn('bDelete')]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]); //ASIS에서 동적으로 생성하는 bDelete 버튼은 비활성 처리가 안됨(2025.12.23 고객협의사항으로 해당 버튼 활성화 처리되도록 수정)
};

//-------------------------------------------------------------------------
// 행삭제에 대한 제어
//-------------------------------------------------------------------------
scwin.f_carGridDelrow = function () {
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "deleteKndCd", "B");
  $c.data.deleteRow($p, ds_LCCEList);
  $c.gus.cfDisableKeyData($p);
  //$c.gus.cfDisableBtn([$c.gus.getctrlBtn('bDelete')]); //ASIS에서 동적으로 생성하는 bDelete 버튼은 비활성 처리가 안됨(2025.12.23 고객협의사항으로 해당 버튼 활성화 처리되도록 수정)
};

//-------------------------------------------------------------------------
// 작동취소에 대한 제어
//-------------------------------------------------------------------------
scwin.f_carGridUndorow = function () {
  acb_lv_jumso.setDisabled(true);
  acb_lh_jumso.setDisabled(true);
  $c.gus.cfDisableKeyData($p);
  $c.data.undoRow($p, ds_LCCEList, false);
  if (scwin.sUserClsCd != "01") {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
    btn_reqMchtCd.setDisabled(true); //조회조건-협력업체 검색 버튼
  } else {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
  }
};

//-------------------------------------------------------------------------
// 삭제버튼에 대한 제어 : 차량
//-------------------------------------------------------------------------
scwin.f_carDelLV = async function () {
  var rowState = 0;
  var updateFlag = "N";
  for (var i = 0; i < ds_LCCEList.getRowCount(); i++) {
    rowState = ds_LCCEList.getRowStatus(i);
    if (rowState == "D") updateFlag = "Y";
  }
  if (updateFlag == "N") {
    $c.gus.cfAlertMsg($p, "삭제할 데이타가 없습니다.");
    return;
  }
  var tempStr = "";
  if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "W" || ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "J") {
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "W") {
      tempStr = "위수탁은";
    }
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "J") {
      tempStr = "자차는";
    }
    $c.gus.cfAlertMsg($p, "이 화면에서 " + tempStr + " 수정 또는 삭제 할수 없습니다. 공통장비관리 화면에서 처리하세요");
    return;
  }
  if (ds_LCCEList.getRowCount() == 0) {
    // ASIS : if(ds_LCCEList.text=="")
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002 + " 삭제 저장하시기 전에 조회를 해 주십시오.");
    return;
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    dma_conSave.set("carKndCd", rd_carKndChk.getValue());
    dma_conSave.set("eqCdModify", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
    dma_conSave.set("deleteKndCd", "A");
    $c.sbm.execute($p, sbm_SaveCooperationCompanyContractEquipment);
    scwin.oldCurPos = ds_LCCEList.getRowPosition() - 1; // 이전 행 번호 저장.
  }
};

//-------------------------------------------------------------------------
// 삭제버튼에 대한 제어 : 중기
//-------------------------------------------------------------------------
scwin.f_carDelLH = async function () {
  if (ds_LCCEList.getRowCount() == 0) {
    // ASIS : if(ds_LCCEList.text=="")
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002 + " 삭제 저장하시기 전에 조회를 해 주십시오.");
    return;
  }
  if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd").trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_004, ["데이타"]);
    return;
  }
  for (var i = 0; i < ds_SaveEquipmentContract.getRowCount(); i++) {
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") == "") {
      await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약시작일자는 필수 입력 항목입니다.");
      gr_underList.setFocusedCell(i, "ctrtStDt", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") == "") {
      await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약종료일은 필수 입력 항목입니다.");
      gr_underList.setFocusedCell(i, "ctrtEndDt", true); //edit : true
      return;
    }
    /* TOBE : 그리드에 없는 컬럼
    if (ds_SaveEquipmentContract.getCellData(i, "clntNo") == "") {
        $c.gus.cfAlertMsg((i + 1) + " 번째줄의 협력업체는 필수 입력 항목입니다.");
        gr_underList.setFocusedCell(i, "clntNm", true); //edit : true
        return;
    }
    */
    if (ds_SaveEquipmentContract.getCellData(i, "odrPrtDdStr") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 오더생성일은 필수 입력 항목입니다.");
      gr_underList.setFocusedCell(i, "odrPrtDdStr", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "payCond") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계산기준은 필수 입력 항목입니다.");
      gr_underList.setFocusedCell(i, "payCond", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtHh") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약시간은 필수 입력 항목입니다.");
      gr_underList.setFocusedCell(i, "ctrtHh", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtAmt") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약금액은 필수 입력 항목입니다.");
      gr_underList.setFocusedCell(i, "ctrtAmt", true); //edit : true
      return;
    }
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "deleteKndCd", "B");
    $c.data.deleteRow($p, ds_LCCEList);
    dma_conSave.set("carKndCd", rd_carKndChk.getValue());
    dma_conSave.set("eqCdModify", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
    dma_conSave.set("deleteKndCd", "B");
    $c.sbm.execute($p, sbm_SaveCooperationCompanyContractEquipment);
  }
  $c.gus.cfDisableKeyData($p);
  //$c.gus.cfDisableBtn([$c.gus.getctrlBtn('bUpdate'), $c.gus.getctrlBtn('bDelete')]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]); //ASIS에서 동적으로 생성하는 bDelete 버튼은 비활성 처리가 안됨(2025.12.23 고객협의사항으로 해당 버튼 활성화 처리되도록 수정)
  scwin.oldCurPos = ds_LCCEList.getRowPosition();
};

//-------------------------------------------------------------------------
// 중기 투입 요청 현황 , 중기 배정 결과 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false); //복화여부
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false); //복화 기간 시작일자
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false); //복화 기간 종료일자

  // if (scwin.gv_canUseTr) {
  //     scwin.gv_canUseTr = 0;
  // } else {
  //     return;
  // }

  btn_dupCheck.hide(); // 중복 버튼 hide

  acb_lv_jumso.setDisabled(true); //장비구분-차량 계약점소

  // 거래처번호(협력업체),계약점소 필수 체크
  let ret = await $c.gus.cfValidate($p, [ed_reqMchtCd, acb_logisticsBranch]);
  if (!ret) {
    //scwin.gv_canUseTr = 1;
    return;
  }
  ds_SaveEquipmentContract.setJSON([]);
  ds_LCCEList.setJSON([]);
  ds_QueryCondition.set("eqClsCd", rd_carKndChk.getValue()); // 차량종류-장비구분
  ds_QueryCondition.set("eqKndCd", acb_con_knd.getValue()); // 장비종류코드
  ds_QueryCondition.set("clntNo", ed_reqMchtCd.getValue()); // 협력업체코드
  ds_QueryCondition.set("ctrtBranCd", acb_logisticsBranch.getValue()); // 계약점소코드
  ds_QueryCondition.set("eqCd", ed_con_eqNo.getValue().trim()); // 장비번호:차량단축번호

  $c.gus.cfDisableKeyData($p);
  $c.sbm.execute($p, sbm_RetrieveCooperationCompanyEquipmentList);
};

//-------------------------------------------------------------------------
// 팝업창 띄우기 (팝업선택 파라미터로 선택)
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (disGubun, chgGubun) {
  var kind_str = "";
  switch (disGubun) {
    case 10:
      if (rd_carKndChk.getValue() == "LV") {
        // 차량 = 물류차량            
        kind_str = ed_lv_vehclNm.getValue().trim(); // 차량번호
      } else if (rd_carKndChk.getValue() == "LH") {
        // 중기            
        kind_str = ed_lh_vehclNm.getValue().trim(); // 중기번호
      }
      ds_QueryCondition3.set("vehclNo", kind_str); // 차량번호
      scwin.rtnCarInfoList = null;
      scwin.rtnPosnClsCd = "";
      console.log("f_openPopUp");
      let ret = await $c.sbm.execute($p, sbm_RetrieveCarDuplicationInfo); //차량번호중복조회 

      // ASIS : ds_DuplicationCarInfo" event="OnLoadCompleted(rowCnt) 로직
      if (ds_DuplicationCarInfo.getRowCount() == 0) {
        // $c.gus.cfAlertMsg("[협력업체 계약 정보] "+MSG_CM_ERR_003);
      } else {
        var temp_str = "";
        for (var i = 0; i < ds_DuplicationCarInfo.getRowCount(); i++) {
          temp_str = "";
          temp_str += "배정점소 : [" + ds_DuplicationCarInfo.getCellData(i, "assgnLobranCd") + "]" + ds_DuplicationCarInfo.getCellData(i, "assgnLobranNm") + "<br>";
          temp_str += "소유구분 : [" + ds_DuplicationCarInfo.getCellData(i, "posnClsCd") + "]" + ds_DuplicationCarInfo.getCellData(i, "posnClsNm") + "<br>";
          temp_str += "차량종류 : [" + ds_DuplicationCarInfo.getCellData(i, "eqKndCd") + "]" + ds_DuplicationCarInfo.getCellData(i, "eqKndNm") + "<br>";
          temp_str += "협력업체 : [" + ds_DuplicationCarInfo.getCellData(i, "clntNo") + "]" + ds_DuplicationCarInfo.getCellData(i, "clntNm") + "<br>";
          scwin.rtnCarInfoList = temp_str;
          scwin.rtnPosnClsCd = ds_DuplicationCarInfo.getCellData(i, "posnClsCd");
        }
      }

      // ASIS : f_openPopUp의 tr_RetrieveCarDuplicationInfo 후처리 로직
      if (scwin.rtnCarInfoList != null) {
        if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "insertKndCd") != "A") {
          if (scwin.rtnPosnClsCd != "Y") {
            await $c.gus.cfAlertMsg($p, scwin.rtnCarInfoList + "<br>공통장비관리화면에서 조회하셔야 됩니다.");
            return;
          }
          ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "N");
          let ret = await $c.win.confirm($p, scwin.rtnCarInfoList + "<br>차량내역을 조회하시겠습니까?");
          if (ret) {
            if (rd_carKndChk.getValue() == "LV") {
              await scwin.f_serCarNumPosMove(ed_lv_vehclNm.getValue());
            } else if (rd_carKndChk.getValue() == "LH") {
              await scwin.f_serCarNumPosMove(ed_lh_vehclNm.getValue());
            }

            //저장시 이 로직에 걸림. if(ds_LCCEList.NameValue(ds_LCCEList.getRowPosition(),"workFlaga")!="Y")
            ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
            return;
          } else {
            //저장시 이 로직에 걸림. if(ds_LCCEList.NameValue(ds_LCCEList.getRowPosition(),"workFlaga")!="Y")
            ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
            return;
          }
        }
        if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "insertKndCd") == "A") {
          await $c.gus.cfAlertMsg($p, "중복조회하여 저장하는 차량번호 입니다.");
          ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
          return;
        }
        ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
      } else {
        if (rd_carKndChk.getValue() == "LV") {
          // 차량 = 물류차량                
          await $c.gus.cfAlertMsg($p, "입력가능한 신규 차량번호 입니다.");
        }
        ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  scwin.carKndChk = rd_carKndChk.getValue();
  $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false); //복화여부
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false); //복화기간 시작일자
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false); //복화기간 종료일자

  $c.gus.cfInitObjects($p, tbl_search, [rd_carKndChk]); // ASIS에서 바인딩 되어있는 라디오버튼은 초기화가 안되서 TOBE에서는 예외처리함

  if (scwin.sUserClsCd != "01") {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
    ed_reqMchtCd.setValue(scwin.sClntNo);
    ed_reqMchtNm.setValue(scwin.sClntNm);
    btn_reqMchtCd.setDisabled(true);
  } else {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
  }
};

//-------------------------------------------------------------------------
// 저장버튼 처리 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var kind_str1 = "";
  var kind_str2 = "";
  if (ds_LCCEList.getRowCount() == 0) {
    // ASIS : if(ds_LCCEList.text=="")
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002 + " 저장하시기 전에 조회를 해 주십시오.");
    return;
  }
  var state_val = ds_LCCEList.getRowStatus(ds_LCCEList.getRowPosition());
  if (state_val == "C" && rd_carKndChk.getValue() == "LV") {
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "workFlaga") != "Y") {
      $c.gus.cfAlertMsg($p, "입력 가능한 차량번호임을 중복체크를 통해 확인하지 않으셨습니다.");
      if (rd_carKndChk.getValue() == "LV") {
        // 차량 = 물류차량            
        ed_lv_eqNo.focus();
      } else {
        ed_lh_eqNo.focus();
      }
      return;
    }
  }
  if (state_val == "C" && rd_carKndChk.getValue() == "LH") {
    await scwin.f_openPopUp(10, 'T');
    console.log("###f_openPopUp End");
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "workFlaga") != "Y") {
      ed_lh_vehclNm.setValue("");
      return;
    }
  }
  if (rd_carKndChk.getValue() == "LV") {
    // 차량 = 물류차량    
    kind_str1 = acb_lv_jumso.getValue();
    kind_str2 = ed_lv_eqNo.getValue();
    if (state_val == "C") {
      // 본문 장비점소테이블 중복조회 pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft
      udc_comCode1.setSelectId("retrieveJumsoCarDoubleChk");
      const rtnList = await udc_comCode1.cfCommonPopUpAsync(null, kind_str1, kind_str2, 'T', '5', null, null, null, null, '440', '500', null, null, 'T', null, null, 'T');
      if (rtnList != null) {
        if (rtnList.length > 0) {
          await $c.gus.cfAlertMsg($p, "장비점소와 장비번호가 장비점소테이블에 중복됩니다. ");
          ed_lv_vehclNm.focus();
          return;
        } else {
          ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlagb", "Y");
        }
      }
    }

    /*  udc_comCode1.cfCommonPopUp(scwin.udc_clntMgntNo_callBackFunc
          , kind_str1
          , kind_str2
          , 'T'
          , '5'
          , null
          , null
          , null
          , null
          , '440'
          , '500'
          , null
          , null
          , 'T'
          , null
          , null
          , 'T'
      );
       return; */
    //   }
    //TOBE는 콜백에서밖에 처리 안되므로 여기에 있던 리턴 로직은 콜백으로 이동
    //제발 AS/IS대로 해라..
  }
  if (rd_carKndChk.getValue() == "LV") {
    if (ed_lv_reqMchtCd2.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["소속협력업체"]);
      ed_lv_reqMchtCd2.focus();
      return;
    }
    if (ed_lv_eqModelCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["모델명"]);
      ed_lv_eqModelCd.focus();
      return;
    }
    if (ed_lv_vehclNm.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량번호"]);
      ed_lv_vehclNm.focus();
      return;
    }
    if (ed_lv_vehclShortCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량단축번호"]);
      ed_lv_vehclShortCd.focus();
      return;
    }
    if (acb_lv_actkind.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["구동방식"]);
      acb_lv_actkind.focus();
      return;
    }
    if (acb_lv_op190.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화물구분"]);
      acb_lv_op190.focus();
      return;
    }
    if (acb_lv_workterm.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업구간"]);
      acb_lv_workterm.focus();
      return;
    }
    if (acb_lv_mngKind.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["관리구분"]);
      acb_lv_mngKind.focus();
      return;
    }
    if (ed_lv_driver.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량기사"]);
      ed_lv_driver.focus();
      return;
    }
    if (ed_lv_driver_hptel.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["휴대전화"]);
      ed_lv_driver_hptel.focus();
      return;
    }
    if (ed_empFromDate.getValue() > ed_empToDate.getValue()) {
      await $c.gus.cfAlertMsg($p, "회원제기간 " + MSG_CM_ERR_039);
      ed_empFromDate.focus();
      return;
    }
    if (ed_boseFromDate.getValue() > ed_boseToDate.getValue()) {
      await $c.gus.cfAlertMsg($p, "보세운송기간 " + MSG_CM_ERR_039);
      ed_boseFromDate.focus();
      return;
    }
    if (cbx_lv_memberYn.getValue() == "1") {
      if (ed_empFromDate.getValue() == "" || ed_empFromDate.getValue().trim().length != 8) {
        await $c.gus.cfAlertMsg($p, "회원제를 체크하셨으면 " + MSG_CM_ERR_002, ["회원제 시작일"]);
        ed_empFromDate.focus();
        return;
      }
      if (ed_empToDate.getValue() == "" || ed_empToDate.getValue().trim().length != 8) {
        await $c.gus.cfAlertMsg($p, "회원제를 체크하셨으면 " + MSG_CM_ERR_002, ["회원제 종료일"]);
        ed_empToDate.focus();
        return;
      }
    }
    if (cbx_lv_bulkCmpsTcrgYn.getValue() == "1") {
      if (ed_bulkCmpsTcrgStDt.getValue() == "" || ed_bulkCmpsTcrgStDt.getValue().trim().length != 8) {
        await $c.gus.cfAlertMsg($p, "벌크복화여부를 체크하셨으면 " + MSG_CM_ERR_002, ["벌크복화 시작일"]);
        ed_bulkCmpsTcrgStDt.focus();
        return;
      }
      if (ed_bulkCmpsTcrgEndDt.getValue() == "" || ed_bulkCmpsTcrgEndDt.getValue().trim().length != 8) {
        await $c.gus.cfAlertMsg($p, "벌크복화여부를 체크하셨으면 " + MSG_CM_ERR_002, ["벌크복화 종료일"]);
        ed_bulkCmpsTcrgEndDt.focus();
        return;
      }
    }
    for (var i = 0; i < ds_SaveEquipmentContract.getRowCount(); i++) {
      if (ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약시작일자는 필수 입력 항목입니다.");
        gr_EquipmentContractList.setFocusedCell(i, "ctrtStDt", true); //edit : true
        return;
      }
      if (ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약종료일은 필수 입력 항목입니다.");
        gr_EquipmentContractList.setFocusedCell(i, "ctrtEndDt", true); //edit : true
        return;
      }
      if (ds_SaveEquipmentContract.getCellData(i, "clntNo") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 협력업체는 필수 입력 항목입니다.");
        gr_EquipmentContractList.setFocusedCell(i, "clntNo", true); //edit : true
        return;
      }
      if (ds_SaveEquipmentContract.getCellData(i, "payCond") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약조건은 필수 입력 항목입니다.");
        gr_EquipmentContractList.setFocusedCell(i, "payCond", true); //edit : true
        return;
      }
      if (ds_SaveEquipmentContract.getCellData(i, "ctrtAmt") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약금액은 필수 입력 항목입니다.");
        gr_EquipmentContractList.setFocusedCell(i, "ctrtAmt", true); //edit : true
        return;
      }
    }

    // 날짜 중복되는 곳 체크
    var total_cnt = ds_SaveEquipmentContract.getRowCount();
    for (var i = 0; i < total_cnt; i++) {
      for (var j = i + 1; j < total_cnt; j++) {
        // ctrtEndDt
        if (!(ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") > ds_SaveEquipmentContract.getCellData(j, "ctrtEndDt") || ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") < ds_SaveEquipmentContract.getCellData(j, "ctrtStDt"))) {
          await $c.gus.cfAlertMsg($p, j + 1 + " 번째줄의 계약기간이 중복되었습니다.");
          gr_EquipmentContractList.setFocusedCell(j, "ctrtEndDt", true); //edit : true
          return;
        }
      }
    }
  }
  if (rd_carKndChk.getValue() == "LH")
    // 중기
    {
      if (ed_lh_eqModelCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["모델명"]);
        ed_lh_eqModelCd.focus();
        return;
      }
      if (ed_lh_reqMchtCd2.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["소속협력업체"]);
        ed_lh_reqMchtCd2.focus();
        return;
      }
      if (ed_lh_vehclShortCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["단축번호"]);
        ed_lh_vehclShortCd.focus();
        return;
      }
      if (ed_lh_reqMchtCd1.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["정산협력업체"]);
        ed_lh_reqMchtCd1.focus();
        return;
      }

      // alert("저장 데이타셋="+ds_CooperationCompanyInputHeavyEquip.text);
      for (var i = 0; i < ds_SaveEquipmentContract.getRowCount(); i++) {
        if (ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약시작일자는 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "ctrtStDt", true); //edit : true
          return;
        }
        if (ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약종료일은 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "ctrtEndDt", true); //edit : true
          return;
        }
        if (ds_SaveEquipmentContract.getCellData(i, "clntNo") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 협력업체는 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "clntNo", true); //edit : true
          return;
        }
        if (ds_SaveEquipmentContract.getCellData(i, "odrPrtDdStr") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 오더생성일은 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "odrPrtDdStr", true); //edit : true
          return;
        }
        if (ds_SaveEquipmentContract.getCellData(i, "payCond") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계산기준은 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "payCond", true); //edit : true
          return;
        }
        if (ds_SaveEquipmentContract.getCellData(i, "ctrtHh") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약시간은 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "ctrtHh", true); //edit : true
          return;
        }
        if (ds_SaveEquipmentContract.getCellData(i, "ctrtAmt") == "") {
          await $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약금액은 필수 입력 항목입니다.");
          gr_underList.setFocusedCell(i, "ctrtAmt", true); //edit : true
          return;
        }
      }
      // 날짜 중복되는 곳 체크
      var total_cnt = ds_SaveEquipmentContract.getRowCount();
      for (var i = 0; i < total_cnt; i++) {
        for (var j = i + 1; j < total_cnt; j++) {
          // ctrtEndDt
          if (!(ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") > ds_SaveEquipmentContract.getCellData(j, "ctrtEndDt") || ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") < ds_SaveEquipmentContract.getCellData(j, "ctrtStDt"))) {
            await $c.gus.cfAlertMsg($p, j + 1 + " 번째줄의 계약기간이 중복되었습니다.");
            gr_underList.setFocusedCell(j, "ctrtEndDt", true); //edit : true
            return;
          }
        }
      }
    }
  if (ed_lh_reqMchtCd2.getValue() != ed_lh_reqMchtCd1.getValue()) {
    await $c.win.alert($p, "소속협력업체코드 [ " + ed_lh_reqMchtCd2.getValue() + " ] 는 정산협력업체코드 [ " + ed_lh_reqMchtCd1.getValue() + " ] 와 다릅니다.<br/> 정산협력업체코드는 실적발생시 통합매입의 매입거래처로 생성됩니다.<br/> 정산협력업체코드 [ " + ed_lh_reqMchtCd1.getValue() + " ]로 매입정보를 생성하는 것이 맞으시면 계속 진행하시고,<br/> 틀리면 수정하여 주십시오.");
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    dma_conSave.set("carKndCd", rd_carKndChk.getValue());
    dma_conSave.set("eqCdModify", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
    dma_conSave.set("deleteKndCd", "B");
    ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "copCoVehclRegAdmitEmpNo", scwin.cutStringBy6Bytes(ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "copCoVehclRegAdmitEmpNo")));
    $c.sbm.execute($p, sbm_SaveCooperationCompanyContractEquipment);
  }
  scwin.oldCurPos = ds_LCCEList.getRowPosition();
};

//-------------------------------------------------------------------------
// 본문 장비점소테이블 중복조회 콜백
// ASIS의 f_Save()에서 중복체크하는(공통코드조회 후 처리) 로직 이곳으로 이동(공통코드팝업은 await 안됨)
//-------------------------------------------------------------------------
scwin.udc_clntMgntNo_callBackFunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList.length > 0) {
      $c.gus.cfAlertMsg($p, "장비점소와 장비번호가 장비점소테이블에 중복됩니다. ");
      ed_lv_vehclNm.focus();
      return;
    } else {
      ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlagb", "Y");
    }
  }
  if (ed_lv_reqMchtCd2.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["소속협력업체"]);
    ed_lv_reqMchtCd2.focus();
    return;
  }
  if (ed_lv_eqModelCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["모델명"]);
    ed_lv_eqModelCd.focus();
    return;
  }
  if (ed_lv_vehclNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량번호"]);
    ed_lv_vehclNm.focus();
    return;
  }
  if (ed_lv_vehclShortCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량단축번호"]);
    ed_lv_vehclShortCd.focus();
    return;
  }
  if (acb_lv_actkind.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["구동방식"]);
    acb_lv_actkind.focus();
    return;
  }
  if (acb_lv_op190.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화물구분"]);
    acb_lv_op190.focus();
    return;
  }
  if (acb_lv_workterm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업구간"]);
    acb_lv_workterm.focus();
    return;
  }
  if (acb_lv_mngKind.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["관리구분"]);
    acb_lv_mngKind.focus();
    return;
  }
  if (ed_lv_driver.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량기사"]);
    ed_lv_driver.focus();
    return;
  }
  if (ed_lv_driver_hptel.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["휴대전화"]);
    ed_lv_driver_hptel.focus();
    return;
  }
  if (ed_empFromDate.getValue() > ed_empToDate.getValue()) {
    $c.gus.cfAlertMsg($p, "회원제기간 " + MSG_CM_ERR_039);
    ed_empFromDate.focus();
    return;
  }
  if (ed_boseFromDate.getValue() > ed_boseToDate.getValue()) {
    $c.gus.cfAlertMsg($p, "보세운송기간 " + MSG_CM_ERR_039);
    ed_boseFromDate.focus();
    return;
  }
  if (cbx_lv_memberYn.getValue() == "1") {
    if (ed_empFromDate.getValue() == "" || ed_empFromDate.getValue().trim().length != 8) {
      $c.gus.cfAlertMsg($p, "회원제를 체크하셨으면 " + MSG_CM_ERR_002, ["회원제 시작일"]);
      ed_empFromDate.focus();
      return;
    }
    if (ed_empToDate.getValue() == "" || ed_empToDate.getValue().trim().length != 8) {
      $c.gus.cfAlertMsg($p, "회원제를 체크하셨으면 " + MSG_CM_ERR_002, ["회원제 종료일"]);
      ed_empToDate.focus();
      return;
    }
  }
  if (cbx_lv_bulkCmpsTcrgYn.getValue() == "1") {
    if (ed_bulkCmpsTcrgStDt.getValue() == "" || ed_bulkCmpsTcrgStDt.getValue().trim().length != 8) {
      $c.gus.cfAlertMsg($p, "벌크복화여부를 체크하셨으면 " + MSG_CM_ERR_002, ["벌크복화 시작일"]);
      ed_bulkCmpsTcrgStDt.focus();
      return;
    }
    if (ed_bulkCmpsTcrgEndDt.getValue() == "" || ed_bulkCmpsTcrgEndDt.getValue().trim().length != 8) {
      $c.gus.cfAlertMsg($p, "벌크복화여부를 체크하셨으면 " + MSG_CM_ERR_002, ["벌크복화 종료일"]);
      ed_bulkCmpsTcrgEndDt.focus();
      return;
    }
  }
  for (var i = 0; i < ds_SaveEquipmentContract.getRowCount(); i++) {
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약시작일자는 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "ctrtStDt", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약종료일은 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "ctrtEndDt", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "clntNo") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 협력업체는 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "clntNo", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "payCond") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약조건은 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "payCond", true); //edit : true
      return;
    }
    if (ds_SaveEquipmentContract.getCellData(i, "ctrtAmt") == "") {
      $c.gus.cfAlertMsg($p, i + 1 + " 번째줄의 계약금액은 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "ctrtAmt", true); //edit : true
      return;
    }
  }

  // 날짜 중복되는 곳 체크
  var total_cnt = ds_SaveEquipmentContract.getRowCount();
  for (var i = 0; i < total_cnt; i++) {
    for (var j = i + 1; j < total_cnt; j++) {
      // ctrtEndDt
      if (!(ds_SaveEquipmentContract.getCellData(i, "ctrtStDt") > ds_SaveEquipmentContract.getCellData(j, "ctrtEndDt") || ds_SaveEquipmentContract.getCellData(i, "ctrtEndDt") < ds_SaveEquipmentContract.getCellData(j, "ctrtStDt"))) {
        await $c.gus.cfAlertMsg($p, j + 1 + " 번째줄의 계약기간이 중복되었습니다.");
        gr_EquipmentContractList.setFocusedCell(j, "ctrtEndDt", true); //edit : true
        return;
      }
    }
  }

  // 중복 체크 이후 로직 추가
  if (ed_lh_reqMchtCd2.getValue() != ed_lh_reqMchtCd1.getValue()) {
    $c.win.alert($p, "소속협력업체코드 [ " + ed_lh_reqMchtCd2.getValue() + " ] 는 정산협력업체코드 [ " + ed_lh_reqMchtCd1.getValue() + " ] 와 다릅니다.<br> 정산협력업체코드는 실적발생시 통합매입의 매입거래처로 생성됩니다.<br> 정산협력업체코드 [ " + ed_lh_reqMchtCd1.getValue() + " ]로 매입정보를 생성하는 것이 맞으시면 계속 진행하시고,<br> 틀리면 수정하여 주십시오.");
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    debugger;
    dma_conSave.set("carKndCd", rd_carKndChk.getValue());
    dma_conSave.set("eqCdModify", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
    dma_conSave.set("deleteKndCd", "B");
    $c.sbm.execute($p, sbm_SaveCooperationCompanyContractEquipment);
  }
  scwin.oldCurPos = ds_LCCEList.getRowPosition();
};

//-------------------------------------------------------------------------
// 장비차량  행추가  처리 
//-------------------------------------------------------------------------
scwin.f_CarGridAddrow = function () {
  if (ed_reqMchtCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, "협력업체를 먼저 선택하세요.");
    return;
  }

  // ASIS : if (ds_LCCEList.text == "") { ASIS는 첫조회 성공하면 조회결과가 없어도 ds_LCCEList.text에 값이 생김(헤더정보)
  // TOBE : 첫조회 성공했는지 플래그 처리
  if (scwin.ds_LCCEList_text == "") {
    $c.gus.cfAlertMsg($p, "조회먼저 하세요.");
    return;
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, ed_lv_vehclNm, true);
  $c.gus.cfEnableObj($p, ed_lh_vehclNm, true);
  $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false); //복화여부
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false); //복화 기간 시작일자
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false); //복화 기간 종료일자

  ds_SaveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제.
  var newRow = ds_LCCEList.insertRow();
  ds_LCCEList.setRowPosition(newRow);
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqClsCd", rd_carKndChk.getValue());
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "assgnLobranCd", acb_logisticsBranch.getValue());
  gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(newRow, 0);
  if (rd_carKndChk.getValue() == "LV") {
    // 차량 = 물류차량    
    grp_oDiv1.show("");
    grp_oDiv2.hide(); // ASIS : oDiv3, oDiv3
    grp_oDiv4.show("");
    //oDiv5.style.top = "750";
    scwin.f_default_LV();
    if (cbx_lv_allowYn.getValue() == "1") {
      ed_lv_allowStr.setValue("홍길동");
      ed_lv_allowDateStr.setValue(scwin.dateStr);
    } else {
      ed_lv_allowStr.setValue("");
      ed_lv_allowDateStr.setValue("");
    }
    ed_lv_vehclNm.focus();
  } else if (rd_carKndChk.getValue() == "LH") {
    // 중기    
    grp_oDiv1.hide();
    grp_oDiv2.show(""); // ASIS : oDiv3, oDiv3
    grp_oDiv4.hide();
    //oDiv5.style.top = "575";

    scwin.f_default_LH();
    ed_lh_eqModelNm.focus();
    ed_lh_vehclNm.focus();
  }
  acb_lv_jumso.setDisabled(false);
  acb_lh_jumso.setDisabled(false);
  btn_dupCheck.show(""); // 중복 버튼 show   

  if (scwin.sUserClsCd != "01") {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
    ed_reqMchtCd.setValue(scwin.sClntNo);
    ed_reqMchtNm.setValue(scwin.sClntNm);
    btn_reqMchtCd.setDisabled(true);

    // 차량 -본문 : 소속협력업체
    $c.gus.cfEnableObj($p, ed_lv_reqMchtCd2, false);
    $c.gus.cfEnableObj($p, ed_lv_reqMchtNm2, false);
    ed_lv_reqMchtCd2.setValue(scwin.sClntNo);
    ed_lv_reqMchtNm2.setValue(scwin.sClntNm);

    // 중기 -본문 : 소속협력업체
    $c.gus.cfEnableObj($p, ed_lh_reqMchtCd, false);
    $c.gus.cfEnableObj($p, ed_lh_reqMchtNm, false);
    ed_lh_reqMchtCd.setValue(scwin.sClntNo);
    ed_lh_reqMchtNm.setValue(scwin.sClntNm);
    $c.gus.cfEnableObj($p, acb_lv_posnClsCd, false);
    $c.gus.cfEnableObj($p, ed_lv_carIdCard, false); //장비구분-차량 차량아이디카드
    $c.gus.cfEnableObj($p, ed_lv_trsNo, false); //장비구분-차량 TRS 번호
    $c.gus.cfEnableObj($p, cbx_lv_memberYn, false);
    $c.gus.cfEnableObj($p, ed_empFromDate, false);
    $c.gus.cfEnableObj($p, ed_empToDate, false);
    $c.gus.cfEnableObj($p, cbx_lv_allowYn, false);
    $c.gus.cfEnableObj($p, ed_lv_allowStr, false);
    $c.gus.cfEnableObj($p, ed_lv_allowDateStr, false);
    $c.gus.cfEnableObj($p, ed_boseFromDate, false);
    $c.gus.cfEnableObj($p, ed_boseToDate, false);
    $c.gus.cfEnableObj($p, cbx_lv_mobileYn, false);
    $c.gus.cfEnableObj($p, cbx_lv_deleteState, false); //장비구분-차량 삭제여부
    $c.gus.cfEnableObj($p, ica_lv_modDtm_1, false); //장비구분-차량 최종수정일자

    $c.gus.cfDisableBtn($p, []);
  } else {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
    $c.gus.cfEnableObj($p, ed_lv_reqMchtCd2, true);
    $c.gus.cfEnableObj($p, ed_lv_reqMchtNm2, true);
    $c.gus.cfEnableObj($p, ed_lh_reqMchtCd2, true);
    $c.gus.cfEnableObj($p, ed_lh_reqMchtNm2, true);
    udc_empDate.setDisabled(false); // 회원제기간
    udc_boseDate.setDisabled(false); // 보세운송기간 
  }
};

//-------------------------------------------------------------------------
// 장비구분-차량 Default 값 처리 
//-------------------------------------------------------------------------
scwin.f_default_LV = function () {
  acb_lv_jumso.setValue(acb_logisticsBranch.getValue()); // 계약점소
  ed_lv_reqMchtCd2.setValue(ed_reqMchtCd.getValue()); // 소속협력업체코드
  ed_lv_reqMchtNm2.setValue(ed_reqMchtNm.getValue()); // 소속협력업체명
  ed_lv_reqMchtCd1.setValue(ed_reqMchtCd.getValue()); // 정산협력업체코드
  ed_lv_reqMchtNm1.setValue(ed_reqMchtNm.getValue()); // 정산협력업체명
  ed_lv_owner_nm.setValue(""); // 대표자명
  ed_lv_eqModelCd.setValue(""); // 모델코드
  ed_lv_eqModelNm.setValue(""); // 모델명
  ed_lv_eqNo.setValue(""); // 장비코드
  ed_lv_vehclNm.setValue(""); // 차량번호
  ed_lv_vehclShortCd.setValue(""); // 단축번호
  ed_lv_eqKndNm.setValue(""); // 차량종류
  ed_lv_eqNrmNm.setValue(""); // 차량규격
  acb_lv_actkind.setSelectedIndex(0); // 구동방식
  acb_lv_sasiKind.setSelectedIndex(0); // 샤시종류
  acb_lv_workterm.setSelectedIndex(0); // 작업구간
  acb_lv_area1.setSelectedIndex(0); // 작업권역1
  acb_lv_area2.setSelectedIndex(0); // 작업권역2
  acb_lv_op190.setSelectedIndex(0); // 화물구분
  acb_lv_mngKind.setSelectedIndex(0); // 관리구분
  ed_lv_driver.setValue(""); // 차량기사
  ed_lv_driver_hptel.setValue(""); // 기사 휴대전화
  cbx_lv_mobileYn.setValue(""); // 모바일지시여부
  ed_lv_trsNo.setValue(""); // TRS 번호
  ed_lv_carIdCard.setValue(""); // 차량아이디카드
  cbx_lv_memberYn.setValue(""); // 회원제 여부  
  cbx_lv_allowYn.setValue(""); // 승인여부
  acb_lv_posnClsCd.setValue("Y"); // 업체소유구분
};

//-------------------------------------------------------------------------
// 장비구분-중기 Default 값 처리 
//-------------------------------------------------------------------------
scwin.f_default_LH = function () {
  ed_lh_eqNo.setValue(""); // 장비번호
  ed_lh_vehclNm.setValue(""); // 중기번호
  ed_lh_vehclShortCd.setValue(""); // 차량단축코드
  ed_lh_eqModelCd.setValue(""); // 모델코드
  ed_lh_eqModelNm.setValue(""); // 모델코드명
  ed_lh_eqKndNm.setValue(""); // 중기종류
  ed_lh_eqNrmNm.setValue(""); // 규격
  acb_lh_jumso.setValue(acb_logisticsBranch.getValue()); // 계약점소코드
  ed_lh_reqMchtCd1.setValue(ed_reqMchtCd.getValue()); // 정산협력업체코드
  ed_lh_reqMchtNm1.setValue(ed_reqMchtNm.getValue()); // 정산협력업체명
  ed_lh_reqMchtCd2.setValue(ed_reqMchtCd.getValue()); // 소속협력업체코드
  ed_lh_reqMchtNm2.setValue(ed_reqMchtNm.getValue()); // 소속협력업체명
  ed_lh_owner_nm.setValue(""); // 대표자명
  ed_lh_tel.setValue(""); // 대표회사 전화번호
  ed_lh_hptel.setValue(""); // 대표회사 휴대폰번호
};

//-------------------------------------------------------------------------
// 장비별 계약정보  행추가  처리 
//-------------------------------------------------------------------------
scwin.f_inputEquipmentContractGridAddrow = function () {
  $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false); //복화여부
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false); //복화 기간 시작일자
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false); //복화 기간 종료일자

  if (rd_carKndChk.getValue() == "LV") {
    if (ed_lv_eqModelNm.getDisabled() == true) return;
  } else if (rd_carKndChk.getValue() == "LH") {
    if (ed_lh_eqModelNm.getDisabled() == true) return;
  }
  var newRow = ds_SaveEquipmentContract.insertRow();
  ds_SaveEquipmentContract.setRowPosition(newRow);
  if (rd_carKndChk.getValue() == "LV")
    // 차량
    {
      if (acb_lv_posnClsCd.getValue() == "M") ds_SaveEquipmentContract.setCellData(ds_SaveEquipmentContract.getRowPosition(), "ddMmClsCd", "1");
      if (acb_lv_posnClsCd.getValue() == "D") ds_SaveEquipmentContract.setCellData(ds_SaveEquipmentContract.getRowPosition(), "ddMmClsCd", "2");
    }
  ds_SaveEquipmentContract.setCellData(ds_SaveEquipmentContract.getRowPosition(), "eqCd", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
  ds_SaveEquipmentContract.setCellData(ds_SaveEquipmentContract.getRowPosition(), "clntCd", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "clntNo"));
  ds_SaveEquipmentContract.setCellData(ds_SaveEquipmentContract.getRowPosition(), "odrPrtDdStr", "0");
  ds_SaveEquipmentContract.setCellData(ds_SaveEquipmentContract.getRowPosition(), "lobranCd", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "assgnLobranCd"));
};

//-------------------------------------------------------------------------
// 장비 종류 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1, param2) {
  dma_conCombo.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conCombo.set("queryId", "retrivecComboKndCdList");
  dma_conCombo.set("param1", param1);
  dma_conCombo.set("param2", param2);
  dma_conCombo.set("param3", "");
  $c.sbm.execute($p, sbm_getEquipmentCode);
};

//-------------------------------------------------------------------------
// 본문 장비 종류 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveComboKnd = function (param1) {
  dma_conCombo.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conCombo.set("queryId", "retrivecComboKndCdList");
  dma_conCombo.set("param1", param1);
  dma_conCombo.set("param2", "");
  dma_conCombo.set("param3", "");
  $c.sbm.execute($p, sbm_getEquipmentCode2);
};

//-------------------------------------------------------------------------
// 계약점소 조회 
//-------------------------------------------------------------------------
scwin.f_RetrieveJumso = function (param1, param2, param3, param4, param5, param6) {
  dma_conCombo.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conCombo.set("queryId", "retrivecComboLobranCdList");
  dma_conCombo.set("param1", param1);
  dma_conCombo.set("param2", param2);
  dma_conCombo.set("param3", param3);
  $c.sbm.execute($p, sbm_getJumsoCode);
};

//-------------------------------------------------------------------------
// 공통코드 상위코드 join 조회 
//-------------------------------------------------------------------------
scwin.f_RetrieveCommonUpperCd = function (tbdsid, param1, param2, param3, param4, param5, param6) {
  dma_conCombo.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conCombo.set("queryId", "retrivecComboCommonUpperCdList");
  dma_conCombo.set("param1", "ZZ210");
  dma_conCombo.set("param2", "TL");
  dma_conCombo.set("param3", param3);
  $c.sbm.execute($p, sbm_getSasiKindCode);
};

//-------------------------------------------------------------------------
// 본문 중기- 계산기준=지급기준 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveComboPayBaseline = function (param1, param2) {
  dma_conCombo.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conCombo.set("queryId", "retrivecComboPayBaseline");
  dma_conCombo.set("param1", param1);
  dma_conCombo.set("param2", param2);
  dma_conCombo.set("param3", "");
  $c.sbm.execute($p, sbm_getPayBaselineCode);
};

//-------------------------------------------------------------------------
// 차량 규격 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCarNrm = function (param1) {
  ds_combo_nrm.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=CooperationCompanyEquipmentEBC&queryId=retrivecComboNrmCodeList&param1=" + param1;
  ds_combo_nrm.Reset();
};

//-------------------------------------------------------------------------
// 업체소유구분 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetriveCommFltrCombo = function (param1, param2) {
  dma_conCombo.set("sysCd", "EquipmentContractEBC");
  dma_conCombo.set("queryId", "retriveCommFltrCombo");
  dma_conCombo.set("param1", param1);
  dma_conCombo.set("param2", param2);
  dma_conCombo.set("param3", "");
  $c.sbm.execute($p, sbm_getCommFltrCode);
};

//-------------------------------------------------------------------------
// 차량 계약 일월구분코드 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetriveCommFltrCombo2 = function (param1, param2) {
  dma_conCombo.set("sysCd", "EquipmentContractEBC");
  dma_conCombo.set("queryId", "retriveCommFltrCombo");
  dma_conCombo.set("param1", param1);
  dma_conCombo.set("param2", param2);
  dma_conCombo.set("param3", "");
  $c.sbm.execute($p, sbm_getEquipmentContractCode);
};

//----------------------------------------------------------------------------
// 장비구분-차량일때 차량번호 입력하고 벗어날때 처리 함수 
//----------------------------------------------------------------------------
scwin.f_VehckNmChk1 = function () {
  var oShortYn = "N";
  var oBuffervehclNo = "";
  if (ed_lv_vehclNm.getValue() != "") {
    var vehclNo_len = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo").length;
    if (vehclNo_len > 4) {
      oBuffervehclNo = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo").substring(vehclNo_len - 4, vehclNo_len);
      if (oBuffervehclNo >= 0 && oBuffervehclNo <= 9999) {
        ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclShortCd", oBuffervehclNo);
        oShortYn = "Y";
      }
    }
  }
};

//----------------------------------------------------------------------------
// 장비구분-중기일때 중기번호 입력하고 벗어날때 처리 함수 
//----------------------------------------------------------------------------
scwin.f_VehckNmChk2 = function () {
  var oShortYn = "N";
  var oBuffervehclNo = "";
  if (ed_lh_vehclNm.getValue() != "") {
    var vehclNo_len = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo").length;
    if (vehclNo_len > 4) {
      oBuffervehclNo = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo").substring(vehclNo_len - 4, vehclNo_len);
      if (oBuffervehclNo >= 0 && oBuffervehclNo <= 9999) {
        ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclShortCd", oBuffervehclNo);
        oShortYn = "Y";
      }
    }
  }
};

//----------------------------------------------------------------------------
// 검색한 차량번호로 해당 장비리스트의  RowPosition을 이동시켜주는 함수 
//----------------------------------------------------------------------------
scwin.f_serCarNumPosMove = async function (SerCarNm) {
  dma_conRetrieveCarDoubleInfo.set("serCarNm", SerCarNm.trim());
  await $c.sbm.execute($p, sbm_RetrieveCarDoubleInfo);

  // ASIS : ds_LCCEOneData event=OnLoadCompleted() 로직
  if (ds_LCCEOneData.getRowCount() > 0) {
    if (rd_carKndChk.getValue() == "LV") {
      // 장비구분-차량
      if (ds_LCCEOneData.getCellData(0, "deleteState") == 1) {
        let ret = await $c.win.confirm($p, "삭제된 차량번호입니다. 복원하시겠습니까?");
        if (!ret) {
          return;
        }
      }
      if (ds_LCCEOneData.getCellData(0, "eqStsCd") == "LH") {
        $c.gus.cfAlertMsg($p, "해당 장비구분은 중기 입니다.");
        ed_lv_vehclNm.setValue("");
        ed_lv_vehclNm.focus();
        return;
      }
      await $c.gus.cfAlertMsg($p, "타점소에 존재하는 차량번호입니다.");
    } else if (rd_carKndChk.getValue() == "LH") {
      // 장비구분-중기
      if (ds_LCCEOneData.getCellData(0, "deleteState") == 1) {
        let ret = await $c.win.confirm($p, "삭제된 차량번호입니다. 복원하시겠습니까?");
        if (!ret) {
          return;
        }
      }
      if (ds_LCCEOneData.getCellData(0, "eqStsCd") == "LV") {
        $c.gus.cfAlertMsg($p, "해당 장비구분은 차량입니다.");
        ed_lh_vehclNm.setValue("");
        ed_lh_vehclNm.focus();
        return;
      }
      ds_SaveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제

      ds_QueryCondition2.set("clntCd", ds_LCCEOneData.getCellData(0, "clntNo")); // 소속협력업체
      ds_QueryCondition2.set("eqCd", ds_LCCEOneData.getCellData(0, "eqCd")); // 장비코드

      $c.sbm.execute($p, sbm_RetrieveCooperationContract);
    }
    scwin.f_LCCEOneDataInsert();
  } else {
    $c.gus.cfAlertMsg($p, "중복된 차량번호가 아닙니다.");
  }
};

//----------------------------------------------------------------------------
// 중복된 차량번호가 있으면 장비정보에 insert 하면서 자료를 Set 한다. 
//----------------------------------------------------------------------------
scwin.f_LCCEOneDataInsert = function () {
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclNo", ds_LCCEOneData.getCellData(0, "vehclNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqCd", ds_LCCEOneData.getCellData(0, "eqCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "clntNo", ds_LCCEOneData.getCellData(0, "clntNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "clntNm", ds_LCCEOneData.getCellData(0, "clntNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisHveqRepCopCoNo", ds_LCCEOneData.getCellData(0, "logisHveqRepCopCoNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisHveqRepCopCoNm", ds_LCCEOneData.getCellData(0, "logisHveqRepCopCoNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "clntRepstNm", ds_LCCEOneData.getCellData(0, "clntRepstNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisClntTelNo", ds_LCCEOneData.getCellData(0, "logisClntTelNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisClntMpNo", ds_LCCEOneData.getCellData(0, "logisClntMpNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclShortCd", ds_LCCEOneData.getCellData(0, "vehclShortCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisEqPosWrkPlCd", ds_LCCEOneData.getCellData(0, "logisEqPosWrkPlCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqStsCd", ds_LCCEOneData.getCellData(0, "eqStsCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqStsNm", ds_LCCEOneData.getCellData(0, "eqStsNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "mbssysVehclYn", ds_LCCEOneData.getCellData(0, "mbssysVehclYn"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "wrkDstCd", ds_LCCEOneData.getCellData(0, "wrkDstCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisWrkDistrictCd", ds_LCCEOneData.getCellData(0, "logisWrkDistrictCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisWrkDistrictCd2", ds_LCCEOneData.getCellData(0, "logisWrkDistrictCd2"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "mobileIndictYn", ds_LCCEOneData.getCellData(0, "mobileIndictYn"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "bondTransVehclYn", ds_LCCEOneData.getCellData(0, "bondTransVehclYn"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "bondTransStDt", ds_LCCEOneData.getCellData(0, "bondTransStDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "bondTransEndDt", ds_LCCEOneData.getCellData(0, "bondTransEndDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqDriveWayCd", ds_LCCEOneData.getCellData(0, "eqDriveWayCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclIdCardNo", ds_LCCEOneData.getCellData(0, "vehclIdCardNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqCurWrkPlCd", ds_LCCEOneData.getCellData(0, "eqCurWrkPlCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqCurWrkPlNm", ds_LCCEOneData.getCellData(0, "eqCurWrkPlNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "cargoClsCd", ds_LCCEOneData.getCellData(0, "cargoClsCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisVehclDrvNm1", ds_LCCEOneData.getCellData(0, "logisVehclDrvNm1"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisHirecarMgntClsCd", ds_LCCEOneData.getCellData(0, "logisHirecarMgntClsCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisKcgClsCd1", ds_LCCEOneData.getCellData(0, "logisKcgClsCd1"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisKcgClsCd2", ds_LCCEOneData.getCellData(0, "logisKcgClsCd2"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "logisVehclDrv1MpNo", ds_LCCEOneData.getCellData(0, "logisVehclDrv1MpNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "trsNo1", ds_LCCEOneData.getCellData(0, "trsNo1"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "mbssysStDt", ds_LCCEOneData.getCellData(0, "mbssysStDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "mbssysEndDt", ds_LCCEOneData.getCellData(0, "mbssysEndDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqClsCd", ds_LCCEOneData.getCellData(0, "eqClsCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqClssCd", ds_LCCEOneData.getCellData(0, "eqClssCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqKndCd", ds_LCCEOneData.getCellData(0, "eqKndCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqKndNm", ds_LCCEOneData.getCellData(0, "eqKndNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqNrmCd", ds_LCCEOneData.getCellData(0, "eqNrmCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqNrmNm", ds_LCCEOneData.getCellData(0, "eqNrmNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqModelCd", ds_LCCEOneData.getCellData(0, "eqModelCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "eqModelNm", ds_LCCEOneData.getCellData(0, "eqModelNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "assgnLobranCd", ds_LCCEOneData.getCellData(0, "assgnLobranCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "assgnLobranNm", ds_LCCEOneData.getCellData(0, "assgnLobranNm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "lnkEqKndCd", ds_LCCEOneData.getCellData(0, "lnkEqKndCd"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "copCoVehclRegAdmitYn", ds_LCCEOneData.getCellData(0, "copCoVehclRegAdmitYn"));
  //  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "copCoVehclRegAdmitEmpNo", ds_LCCEOneData.getCellData(0, "copCoVehclRegAdmitEmpNo"));

  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "copCoVehclRegAdmitEmpNo", scwin.cutStringBy6Bytes(ds_LCCEOneData.getCellData(0, "copCoVehclRegAdmitEmpNo")));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "copCoVehclRegAdmitDt", ds_LCCEOneData.getCellData(0, "copCoVehclRegAdmitDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "deleteState", ds_LCCEOneData.getCellData(0, "deleteState"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "modDtm", ds_LCCEOneData.getCellData(0, "modDtm"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "insertKndCd", "A");
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "ctrtNo", ds_LCCEOneData.getCellData(0, "ctrtNo"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "ctrtStDt", ds_LCCEOneData.getCellData(0, "ctrtStDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "ctrtEndDt", ds_LCCEOneData.getCellData(0, "ctrtEndDt"));
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "posnClsCd", ds_LCCEOneData.getCellData(0, "posnClsCd"));
};
scwin.cutStringBy6Bytes = function (str) {
  let totalByte = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    totalByte += char > 128 ? 2 : 1;
    if (totalByte <= 6) {
      result += str[i];
    } else {
      break;
    }
  }
  return result;
};

//----------------------------------------------------------------------------
// 계약시작일자<= 계약종료일자  유지 컨트롤
//----------------------------------------------------------------------------
scwin.f_dateChk = function (BaseRow, BaseColid, chkDate) {
  let ctrtStDt = "";
  let ctrtEndDt = "";
  if (BaseColid == "ctrtStDt") {
    ctrtStDt = chkDate;
    ctrtEndDt = ds_SaveEquipmentContract.getCellData(BaseRow, "ctrtEndDt");
  } else if (BaseColid == "ctrtEndDt") {
    ctrtStDt = ds_SaveEquipmentContract.getCellData(BaseRow, "ctrtStDt");
    ctrtEndDt = chkDate;
  }
  if (ctrtStDt > ctrtEndDt) {
    if (BaseColid == "ctrtStDt" && ctrtEndDt != "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["계약시작일자"]);
      ds_SaveEquipmentContract.setCellData(BaseRow, "ctrtStDt", "");
    }
    if (BaseColid == "ctrtEndDt" && ctrtStDt != "" && ctrtEndDt != "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["계약종료일자"]);
      ds_SaveEquipmentContract.setCellData(BaseRow, "ctrtEndDt", "");
    }
  }
  // 계약종료일자가 오늘 이전일자는 등록 안한다.
  if (BaseColid == "ctrtEndDt" && ctrtEndDt < scwin.dateStr && ctrtEndDt != "") {
    $c.gus.cfAlertMsg($p, "계약종료일자가 현재일보다 이전일자는 등록되지 않습니다.");
    ds_SaveEquipmentContract.setCellData(BaseRow, "ctrtEndDt", "");
  }
};

//----------------------------------------------------------------------------
// 승인여부 체크 여부에 따른 화면 제어  
//----------------------------------------------------------------------------
scwin.f_allowYnChk = function () {
  if (cbx_lv_allowYn.getValue() == "1") {
    ed_lv_allowStr.setValue(scwin.sUserId);
    ed_lv_allowDateStr.setValue(scwin.dateStr);
  } else {
    ed_lv_allowStr.setValue("");
    ed_lv_allowDateStr.setValue("");
  }
};

//----------------------------------------------------------------------------
// 계약정보 현재 Row 를 삭제한다.
//----------------------------------------------------------------------------
scwin.f_SaveECDelRow = function () {
  var tempStr = "";
  if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "W" || ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "J") {
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "W") {
      tempStr = "위수탁";
    }
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "posnClsCd") == "J") {
      tempStr = "자차";
    }
    $c.gus.cfAlertMsg($p, "이 화면에서 " + tempStr + "는 수정 또는 삭제 할수 없습니다. 공통장비관리 화면에서 처리하세요");
    return;
  }
  if (ds_SaveEquipmentContract.getRowCount() <= 0) return;
  if (Number(ds_SaveEquipmentContract.getCellData(ds_SaveEquipmentContract.getRowPosition(), "ctrtEndDt")) < Number(scwin.dateStr)) {
    $c.gus.cfAlertMsg($p, "계약종료일자가 현재일보다 이전일자는 삭제하지 않습니다.");
  } else {
    $c.data.deleteRow($p, ds_SaveEquipmentContract);
  }
};

//-------------------------------------------------------------------------
// 장비구분 라디오버튼 클릭
//-------------------------------------------------------------------------
scwin.f_carKndChkOnClick = function () {
  if (rd_carKndChk.getValue() == "LV") {
    // 차량    
    scwin.f_RetrieveComboPayBaseline("OP261", ""); // 본문 - 차량 ; 계약조건 조회
  } else if (rd_carKndChk.getValue() == "LH") {
    // 중기
    scwin.f_RetrieveComboPayBaseline("OP168", "EQ"); // 본문 - 중기 ; 지급기준 조회
  }
  if (scwin.oldCarKndChk == rd_carKndChk.getValue()) return;
  scwin.oldCarKndChk = rd_carKndChk.getValue(); // 장비구분

  $c.gus.cfDisableKeyData($p);
  if (rd_carKndChk.getValue() == "LV") {
    // 차량 = 물류차량    
    grp_oDiv1.show("");
    grp_oDiv2.hide(); // ASIS : oDiv3, oDiv3       
    grp_oDiv4.show("");
    scwin.f_RetrieveCommonUpperCd();
    ds_SaveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제.
    tbx_car_title.setValue("차량현황");
    scwin.f_RetrieveSecond("LV", ""); // 장비 종류 콤보 조회
    gr_LogisticsCooperationCompanyEquipmentList.setVisibleRowNum(10);
  } else if (rd_carKndChk.getValue() == "LH")
    // 중기
    {
      grp_oDiv1.hide();
      grp_oDiv2.show(""); // ASIS : oDiv3, oDiv3
      grp_oDiv4.hide();
      tbx_car_title.setValue("중기현황");
      scwin.f_RetrieveSecond("LH", "LS"); // 장비 종류 콤보 조회
      gr_LogisticsCooperationCompanyEquipmentList.setVisibleRowNum(15);
    }
  ed_reqMchtCd.setValue("");
  ed_reqMchtNm.setValue("");
  ds_LCCEList.removeAll();
  tbx_totalRows.setValue("0");
  tbx_totalRows_two.setValue("0");
  tbx_totalRows_three.setValue("0");
  ds_SaveEquipmentContract.removeAll();
  scwin.f_underBarAct(rd_carKndChk.getValue());

  //$c.gus.cfDisableBtn([$c.gus.getctrlBtn('bUpdate'), $c.gus.getctrlBtn('bDelete')]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]); //ASIS에서 동적으로 생성하는 bDelete 버튼은 비활성 처리가 안됨(2025.12.23 고객협의사항으로 해당 버튼 활성화 처리되도록 수정)

  if (scwin.sUserClsCd != "01") {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
    btn_reqMchtCd.setDisabled(true);
    ed_reqMchtCd.setValue(scwin.sClntNo);
    ed_reqMchtNm.setValue(scwin.sClntNm);
  } else {
    $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
    $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
  }
};

//-------------------------------------------------------------------------
// 차량구분 클릭시 처리
//-------------------------------------------------------------------------
scwin.f_memberChk = function () {
  if (cbx_lv_memberYn.getValue() == "1") {
    ed_empFromDate.focus();
  } else {
    ed_empFromDate.setValue("");
    ed_empToDate.setValue("");
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  var sheetTitle = '차량현황';
  if (ds_LCCEList.getRowCount() != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,

        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_LogisticsCooperationCompanyEquipmentList, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 권역콤보
// gubun = L : 부산로컬권역,  M : 부산매입권역,  C : 복화작업권역  , B : 벌크작업권역 
//-------------------------------------------------------------------------
scwin.f_districtSearch = function (gubun) {
  var param = "";
  if (scwin.oldDistrictKind == gubun) return;

  // //부산로컬권역
  if (gubun == "L") {
    param = "PLO";
  }
  //부산매입권역
  if (gubun == "M") {
    param = "PEX";
  }
  //복화권역
  if (gubun == "C") {
    param = "CMP";
  }
  //벌크작업권역
  if (gubun == "B") {
    param = "BWK";
  }

  // 작업권역1, 작업권역2 콤보박스 조회
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [param],
    compID: "acb_lv_area1"
  }, {
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [param],
    compID: "acb_lv_area2"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
  scwin.oldDistrictKind = gubun;
};

//-------------------------------------------------------------------------
// 부산 권역콤보 선택
//-------------------------------------------------------------------------
scwin.f_districtSearchKind = function () {
  if (acb_lv_jumso.getValue() == "6AA" && acb_lv_op190.getValue() == "C") {
    // 로컬
    if (acb_lv_workterm.getValue() == "L") {
      scwin.f_districtSearch("L"); //부산로컬권역
    } else if (acb_lv_workterm.getValue() == "S")
      // 셔틀
      {
        scwin.f_districtSearch("M"); //부산매입권역
      } else {
      scwin.f_districtSearch("C"); //CMP : 컨테이너일 경우.
    }
  } else {
    if (acb_lv_op190.getValue() == "B") {
      scwin.f_districtSearch("B"); //BWK : 벌크일 경우.
    } else {
      scwin.f_districtSearch("C"); //CMP : 컨테이너일 경우.
    }
  }
};

//-------------------------------------------------------------------------
// 함수명: 장비보험등록 호출
// 인수 --> 장비번호(eqCd), 점소코드(assgnLobranCd:계약점소), 장비구분코드 (eqClsCd)
//-------------------------------------------------------------------------
scwin.f_bohumReg = function () {
  let strUrl = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_16b.xml";
  let pgmId = "op_101_01_16b.jsp";
  let paramObj = {
    eqCd: ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"),
    lobranCd: ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "assgnLobranCd"),
    eqClsCd: ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqClsCd"),
    vehclShortNo: ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclShortCd"),
    vehclNo: ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo")
  };
  $c.win.openMenu($p, "장비보험등록", strUrl, pgmId, paramObj, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// 함수명: 온클릭시 콜함수
//-------------------------------------------------------------------------
scwin.f_LCCEListOnclick = function (Row) {
  btn_dupCheck.hide();
  var return_value = ds_LCCEList.getRowStatus(Row);
  if (return_value == "R") {} else if (return_value == "C") {
    btn_dupCheck.show("");
  } else if (return_value == "D") {
    if (rd_carKndChk.getValue() == "LV")
      // 차량
      {
        acb_lv_jumso.setDisabled(false);
      }
    if (rd_carKndChk.getValue() == "LH")
      // 중기
      {
        acb_lh_jumso.setDisabled(false);
      }
  } else {
    if (ds_LCCEList.getCellData(Row, "eqCd") != "") {
      $c.gus.cfEnableKeyData($p);
      if (return_value != "C") {
        $c.gus.cfEnableObj($p, ed_lv_vehclNm, false);
        $c.gus.cfEnableObj($p, ed_lh_vehclNm, false);
      } else {
        $c.gus.cfEnableObj($p, ed_lv_vehclNm, true);
        $c.gus.cfEnableObj($p, ed_lh_vehclNm, true);
      }
      ds_SaveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제
      if (ds_LCCEList.getCellData(Row, "eqClsCd") == "LH")
        // 중기
        {
          ds_SaveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제     

          ds_QueryCondition2.set("clntCd", ds_LCCEList.getCellData(Row, "clntNo")); // 소속협력업체
          ds_QueryCondition2.set("eqCd", ds_LCCEList.getCellData(Row, "eqCd")); // 장비코드
          $c.sbm.execute($p, sbm_RetrieveCooperationContract);
        }
      if (ds_LCCEList.getCellData(Row, "eqClsCd") == "LV")
        // 차량
        {
          ds_SaveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제

          ds_QueryCondition2.set("clntCd", ds_LCCEList.getCellData(Row, "clntNo")); // 소속협력업체
          ds_QueryCondition2.set("eqCd", ds_LCCEList.getCellData(Row, "eqCd")); // 장비코드
          $c.sbm.execute($p, sbm_RetrieveCooperationContract);
        }
    } else {
      $c.gus.cfEnableObj($p, ed_lv_vehclNm, true);
      $c.gus.cfEnableObj($p, ed_lh_vehclNm, true);
    }
    if (return_value != "C") {
      if (rd_carKndChk.getValue() == "LV") {
        // 차량            
        acb_lv_jumso.setDisabled(true);
      } else if (rd_carKndChk.getValue() == "LH") {
        // 중기            
        acb_lh_jumso.setDisabled(false);
      }
    } else {
      acb_lv_jumso.setDisabled(false);
    }

    // 협력업체일경우(코드 "02") 달력이미지 버튼 제어.
    if (scwin.sUserClsCd != "01") {
      $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
      ed_reqMchtCd.setValue(scwin.sClntNo);
      ed_reqMchtNm.setValue(scwin.sClntNm);
      btn_reqMchtCd.setDisabled(true);

      // 차량 -본문 : 소속협력업체
      $c.gus.cfEnableObj($p, ed_lv_reqMchtCd2, false);
      $c.gus.cfEnableObj($p, ed_lv_reqMchtNm2, false);
      ed_lv_reqMchtCd2.setValue(scwin.sClntNo);
      ed_lv_reqMchtNm2.setValue(scwin.sClntNm);

      // 중기 -본문 : 소속협력업체
      $c.gus.cfEnableObj($p, ed_lh_reqMchtCd2, false);
      $c.gus.cfEnableObj($p, ed_lh_reqMchtNm2, false);
      ed_lh_reqMchtCd2.setValue(scwin.sClntNo);
      ed_lh_reqMchtNm2.setValue(scwin.sClntNm);
      udc_empDate.setDisabled(true); // 회원제기간
      udc_boseDate.setDisabled(true); // 보세운송기간

      $c.gus.cfEnableObj($p, acb_lv_posnClsCd, false);
      $c.gus.cfEnableObj($p, ed_carIdCard_1, false);
      $c.gus.cfEnableObj($p, ed_trsNo_1, false);
      $c.gus.cfEnableObj($p, cbx_lv_memberYn, false);
      $c.gus.cfEnableObj($p, ed_empFromDate, false);
      $c.gus.cfEnableObj($p, ed_empToDate, false);
      $c.gus.cfEnableObj($p, cbx_lv_allowYn, false);
      $c.gus.cfEnableObj($p, ed_allowStr, false);
      $c.gus.cfEnableObj($p, ed_lv_allowDateStr, false);
      $c.gus.cfEnableObj($p, ed_boseFromDate, false);
      $c.gus.cfEnableObj($p, ed_boseToDate, false);
      $c.gus.cfEnableObj($p, cbx_lv_mobileYn, false);
      $c.gus.cfEnableObj($p, txt_deleteState_1, false);
      $c.gus.cfEnableObj($p, txt_modDtm_1, false);
    } else {
      $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
      $c.gus.cfEnableObj($p, ed_lv_reqMchtCd2, true);
      $c.gus.cfEnableObj($p, ed_lv_reqMchtNm2, true);
      $c.gus.cfEnableObj($p, ed_lh_reqMchtCd2, true);
      $c.gus.cfEnableObj($p, ed_lh_reqMchtNm2, true);
      udc_empDate.setDisabled(false); // 회원제기간
      udc_boseDate.setDisabled(false); // 보세운송기간  
    }
  }
  acb_lh_jumso.setDisabled(false);
  if (ds_LCCEList.getCellData(Row, "posnClsCd") == "W" || ds_LCCEList.getCellData(Row, "posnClsCd") == "J") {
    $c.gus.cfDisableKeyData($p);
  }
  scwin.f_districtSearchKind();
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveCooperationCompanyEquipmentList_submitdone = function (e) {
  //gv_canUseTr = 1;
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_LCCEList.getRowCount());
  scwin.ds_LCCEList_text = "Y"; // ASIS는 첫조회 성공하면 조회결과가 없어도 ds_LCCEList.text에 값이 생김(헤더정보)

  $c.gus.cfDisableBtn($p, []); //f_qeryList 후처리 로직

  $c.gus.cfEnableKeyData($p);
  if (ds_LCCEList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "[협력업체장비 정보] " + MSG_CM_ERR_003);
    $c.gus.cfDisableKeyData($p);
    if (scwin.sUserClsCd != "01") {
      // 조회조건 - 협력업체 disable
      $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
      btn_reqMchtCd.setDisabled(true); //조회조건-협력업체 검색 버튼
    } else {
      $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
    }
  } else {
    gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(0, 0, false); //edit : true

    // 화종구분1 length가 4이여야 하는데 8인 데이터가 있어서 길이를 잘라줌
    let logisKcgClsCd1 = "";
    for (let row = 0; row < ds_LCCEList.getRowCount(); row++) {
      logisKcgClsCd1 = ds_LCCEList.getCellData(row, "logisKcgClsCd1");
      if (logisKcgClsCd1.length > 4) {
        logisKcgClsCd1 = logisKcgClsCd1.substring(0, 4);
      }
      ds_LCCEList.setCellData(row, "logisKcgClsCd1", logisKcgClsCd1);
    }
    // 화종구분1 길이값 자르고 상태값은 조회(R) 상태로 수정
    ds_LCCEList.modifyAllStatus("R");
    if (scwin.sUserClsCd != "01") {
      // 조회조건 - 협력업체 disable
      $c.gus.cfEnableObj($p, ed_reqMchtCd, false);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, false);
      btn_reqMchtCd.setDisabled(true); //조회조건-협력업체 검색 버튼
    } else {
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableObj($p, ed_reqMchtCd, true);
      $c.gus.cfEnableObj($p, ed_reqMchtNm, true);
      if (scwin.sUserClsCd == "01") {
        $c.gus.cfEnableObj($p, acb_lv_posnClsCd, true); //차량-업체소유구분
        $c.gus.cfEnableObj($p, ed_lv_carIdCard, true); //차량-차량아이디카드
        $c.gus.cfEnableObj($p, ed_lv_trsNo, true); //차량-TRS 번호
        $c.gus.cfEnableObj($p, cbx_lv_memberYn, true); //차량-회원제 여부
        $c.gus.cfEnableObj($p, ed_empFromDate, true); //차량-회원제기간
        $c.gus.cfEnableObj($p, ed_empToDate, true); //차량-회원제기간
        $c.gus.cfEnableObj($p, cbx_lv_allowYn, true); //차량-승인여부
        $c.gus.cfEnableObj($p, ed_boseFromDate, true); //차량-보세운송기간
        $c.gus.cfEnableObj($p, ed_boseToDate, true); //차량-보세운송기간
        $c.gus.cfEnableObj($p, cbx_lv_mobileYn, true); //차량-모바일지시여부
      }
    }
    ds_QueryCondition2.set("clntCd", ds_LCCEList.getCellData(0, "clntNo")); // 소속협력업체
    ds_QueryCondition2.set("eqCd", ds_LCCEList.getCellData(0, "eqCd")); // 장비코드         

    $c.sbm.execute($p, sbm_RetrieveCooperationContract); //아래 로직들은 비동기 처리해도 상관없음      

    if (ds_LCCEList.getRowCount() <= scwin.oldCurPos) {
      // TOBE는 0부터 시작하므로 수정 ASIS : if(rowCnt < oldCurPos)
      scwin.oldCurPos = ds_LCCEList.getRowCount() - 1;
    }
    ds_LCCEList.setRowPosition(scwin.oldCurPos);
    scwin.f_LCCEListOnclick(0);
  }
  $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false); //차량-벌크복화 여부
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false);
  $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false);
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_SaveCooperationCompanyContractEquipment_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};

//-------------------------------------------------------------------------
// 조회2 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveCooperationContract_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (rd_carKndChk.getValue() == "LV") {
    // 차량    
    tbx_totalRows_three.setValue(ds_SaveEquipmentContract.getRowCount());
  } else if (rd_carKndChk.getValue() == "LH") {
    // 중기    
    tbx_totalRows_two.setValue(ds_SaveEquipmentContract.getRowCount());
  }
  if (ds_SaveEquipmentContract.getRowCount() == 0) {
    $c.gus.cfEnableObj($p, cbx_lv_bulkCmpsTcrgYn, false);
    $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgStDt, false);
    $c.gus.cfEnableObj($p, ed_bulkCmpsTcrgEndDt, false);
  }
};

//-------------------------------------------------------------------------
// 삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = function (e) {
  if (rd_carKndChk.getValue() == "LV") {
    // 장비구분 : 차량
    scwin.f_carDelLV();
  } else {
    scwin.f_carDelLH();
  }
};

//-------------------------------------------------------------------------
// 장비구분 : 중기일때 단축번호 onkeyup
//-------------------------------------------------------------------------
scwin.ed_lh_vehclNm_onkeyup = function (e) {
  if (e.keyCode == "13") {
    // 13:Enter, 9:Tab
    scwin.f_openPopUp(10, 'T');
  }
};
scwin.ed_lh_vehclNm_onkeydown = function (e) {
  if (e.keyCode == "9") {
    // 13:Enter, 9:Tab
    scwin.f_openPopUp(10, 'T');
  }
};

//-------------------------------------------------------------------------
// 장비구분 : 차량일때 차량/단축 번호 onkeyup
//-------------------------------------------------------------------------
scwin.ed_lv_vehclNm_onkeyup = function (e) {
  console.log("ed_lv_vehclNm_onkeyup=" + e.keyCode);
  if (e.keyCode == "13") {
    // 13:Enter, 9:Tab
    scwin.f_openPopUp(10, 'T');
  } else [];
};
scwin.ed_lv_vehclNm_onkeydown = function (e) {
  console.log("ed_lv_vehclNm_onkeydown=" + e.keyCode);
  if (e.keyCode == "9") {
    // 13:Enter, 9:Tab
    scwin.f_openPopUp(10, 'T');
  }
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 중기현황 그리드 셀클릭
// ASIS : gr_LogisticsCooperationCompanyEquipmentList OnClick(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_LogisticsCooperationCompanyEquipmentList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_LCCEListOnclick(rowIndex);
};

//-------------------------------------------------------------------------
// 조회조건-협력업체 UDC START
//-------------------------------------------------------------------------
scwin.udc_reqMchtCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_reqMchtCd.getValue(), ed_reqMchtNm.getValue(), 'F', 'T');
};
scwin.udc_reqMchtCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_reqMchtCd, ed_reqMchtNm, 1);
};
scwin.udc_reqMchtCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_reqMchtNm, ed_reqMchtCd, 1, false);
};
scwin.udc_reqMchtCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_reqMchtCd, ed_reqMchtNm);
};
//-------------------------------------------------------------------------
// 조회조건-협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회조건-장비번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_eqNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_con_eqNo.getValue(), ed_con_vehclNm.getValue(), 'F', 'T');
};
scwin.udc_con_eqNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_eqNo, ed_con_vehclNm, 4);
};
scwin.udc_con_eqNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_vehclNm, ed_con_eqNo, 4, false);
};
scwin.udc_con_eqNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_eqNo, ed_con_vehclNm);
};
//-------------------------------------------------------------------------
// 조회조건-장비번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 모델명 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_eqModelCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_lv_eqModelCd.getValue(), ed_lv_eqModelNm.getValue(), 'F', 'T');
};
scwin.udc_lv_eqModelCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lv_eqModelCd, ed_lv_eqModelNm, 6);
};
scwin.udc_lv_eqModelCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_eqModelNm, ed_lv_eqModelCd, 6, false);
};
scwin.udc_lv_eqModelCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (rd_carKndChk.getValue() == "LV") {
        // 장비구분-차량
        ed_lv_eqModelCd.setValue(rtnList[0]); // 차량-모델코드
        ed_lv_eqModelNm.setValue(rtnList[1]); // 차량-모델명                     

        const rowIndex = ds_LCCEList.getRowPosition();
        ds_LCCEList.setCellData(rowIndex, 'eqKndCd', rtnList[6]);
        ds_LCCEList.setCellData(rowIndex, 'eqKndNm', rtnList[7]);
        ds_LCCEList.setCellData(rowIndex, 'eqNrmCd', rtnList[8]);
        ed_lv_eqNrmNm.setValue(rtnList[9]); // 차량-규격명
      } else if (rd_carKndChk.getValue() == "LH") {
        // 장비구분-중기
        ed_lh_eqModelCd.setValue(rtnList[0]); // 중기-모델코드
        ed_lh_eqModelNm.setValue(rtnList[1]); // 중기-모델명

        ed_lh_eqKndNm.setValue(rtnList[7]); // 중기-중기종류명                  
        ed_lh_eqNrmNm.setValue(rtnList[9]); // 중기-장비규격명
      }
    }
  }
};
//-------------------------------------------------------------------------
// 장비구분-차량 모델명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-중기 모델명 UDC START(콜백함수는 장비구분-차량 모델명과 같이 사용)
//-------------------------------------------------------------------------
scwin.udc_lh_eqModelCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_lh_eqModelCd.getValue(), ed_lh_eqModelNm.getValue(), 'F', 'T');
};
scwin.udc_lh_eqModelCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lh_eqModelCd, ed_lh_eqModelNm, 6);
};
scwin.udc_lh_eqModelCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lh_eqModelNm, ed_lh_eqModelCd, 6, false);
};
//-------------------------------------------------------------------------
// 장비구분-중기 모델명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 정산협력업체 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_reqMchtCd1_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_lv_reqMchtCd1.getValue(), ed_lv_reqMchtNm1.getValue(), 'F', 'T');
};
scwin.udc_lv_reqMchtCd1_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lv_reqMchtCd1, ed_lv_reqMchtNm1, 8);
};
scwin.udc_lv_reqMchtCd1_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_reqMchtNm1, ed_lv_reqMchtCd1, 8, false);
};
scwin.udc_lv_reqMchtCd1_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (rd_carKndChk.getValue() == "LV") {
        // 장비구분-차량
        ed_lv_reqMchtCd1.setValue(rtnList[0]);
        ed_lv_reqMchtNm1.setValue(rtnList[1]);
      } else if (rd_carKndChk.getValue() == "LH") {
        // 장비구분-중기
        ed_lh_reqMchtCd1.setValue(rtnList[0]);
        ed_lh_reqMchtNm1.setValue(rtnList[1]);
      }
    }
  }
};
//-------------------------------------------------------------------------
// 장비구분-차량 정산협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-중기 정산협력업체 UDC START(콜백함수는 장비구분-차량 정산협력업체와 같이 사용)
//-------------------------------------------------------------------------
scwin.udc_lh_reqMchtCd1_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_lh_reqMchtCd1.getValue(), ed_lh_reqMchtNm1.getValue(), 'F', 'T');
};
scwin.udc_lh_reqMchtCd1_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lh_reqMchtCd1, ed_lh_reqMchtNm1, 8);
};
scwin.udc_lh_reqMchtCd1_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lh_reqMchtNm1, ed_lh_reqMchtCd1, 8, false);
};
//-------------------------------------------------------------------------
// 장비구분-차량 정산협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 소속협력업체 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_reqMchtCd2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lv_reqMchtCd2.getValue(), ed_lv_reqMchtNm2.getValue(), 'F', 'T');
};
scwin.udc_lv_reqMchtCd2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lv_reqMchtCd2, ed_lv_reqMchtNm2, 5);
};
scwin.udc_lv_reqMchtCd2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_reqMchtNm2, ed_lv_reqMchtCd2, 5, false);
};
scwin.udc_lv_reqMchtCd2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (rd_carKndChk.getValue() == "LV") {
        // 장비구분-차량
        ed_lv_reqMchtCd2.setValue(rtnList[0]);
        ed_lv_reqMchtNm2.setValue(rtnList[1]);
        ed_lv_owner_nm.setValue(rtnList[2]); // 대표자명
      } else if (rd_carKndChk.getValue() == "LH") {
        // 장비구분-중기
        ed_lh_reqMchtCd2.setValue(rtnList[0]); // 소속협력업체
        ed_lh_reqMchtNm2.setValue(rtnList[1]);
        ed_lh_reqMchtCd1.setValue(rtnList[0]); // 정산협력업체
        ed_lh_reqMchtNm1.setValue(rtnList[1]);
        ed_lh_owner_nm.setValue(rtnList[2]); // 대표자명
        ed_lh_tel.setValue(rtnList[3]); // 전화번호
        ed_lh_hptel.setValue(rtnList[4]); // 휴대폰번호
      }
    }
  }
};
//-------------------------------------------------------------------------
// 장비구분-차량 소속협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-중기 소속협력업체 UDC START(콜백함수는 장비구분-차량 소속협력업체와 같이 사용)
//-------------------------------------------------------------------------
scwin.udc_lh_reqMchtCd2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lh_reqMchtCd2.getValue(), ed_lh_reqMchtNm2.getValue(), 'F', 'T');
};
scwin.udc_lh_reqMchtCd2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lh_reqMchtCd2, ed_lh_reqMchtNm2, 5);
};
scwin.udc_lh_reqMchtCd2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lh_reqMchtNm2, ed_lh_reqMchtCd2, 5, false);
};
//-------------------------------------------------------------------------
// 장비구분-중기 소속협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-중기 작업장 UDC START
//-------------------------------------------------------------------------
scwin.udc_lh_logisEqPosWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_lh_logisEqPosWrkPlCd.getValue(), ed_lh_logisEqPosWrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_lh_logisEqPosWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lh_logisEqPosWrkPlCd, ed_lh_logisEqPosWrkPlNm, 7);
};
scwin.udc_lh_logisEqPosWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lh_logisEqPosWrkPlNm, ed_lh_logisEqPosWrkPlCd, 7, false);
};
scwin.udc_lh_logisEqPosWrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lh_logisEqPosWrkPlCd, ed_lh_logisEqPosWrkPlNm);
};
//-------------------------------------------------------------------------
// 장비구분-중기 작업장 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 화종구분1 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_hwajong1Cd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_lv_hwajong1Cd.getValue(), ed_lv_hwajong1Nm.getValue(), 'F', 'T');
};
scwin.udc_lv_hwajong1Cd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong1Cd, ed_lv_hwajong1Nm, 2);
};
scwin.udc_lv_hwajong1Cd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong1Nm, ed_lv_hwajong1Cd, 2, false);
};
scwin.udc_lv_hwajong1Cd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lv_hwajong1Cd, ed_lv_hwajong1Nm);
};
//-------------------------------------------------------------------------
// 장비구분-차량 화종구분1 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 화종구분2 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_hwajong2Cd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_lv_hwajong2Cd.getValue(), ed_lv_hwajong2Nm.getValue(), 'F', 'T');
};
scwin.udc_lv_hwajong2Cd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong2Cd, ed_lv_hwajong2Nm, 3);
};
scwin.udc_lv_hwajong2Cd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong2Nm, ed_lv_hwajong2Cd, 3, false);
};
scwin.udc_lv_hwajong2Cd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lv_hwajong2Cd, ed_lv_hwajong2Nm);
};
//-------------------------------------------------------------------------
// 장비구분-차량 화종구분2 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 화종구분3 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_hwajong3Cd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_lv_hwajong3Cd.getValue(), ed_lv_hwajong3Nm.getValue(), 'F', 'T');
};
scwin.udc_lv_hwajong3Cd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong3Cd, ed_lv_hwajong3Nm, 9);
};
scwin.udc_lv_hwajong3Cd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong3Nm, ed_lv_hwajong3Cd, 9, false);
};
scwin.udc_lv_hwajong3Cd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lv_hwajong3Cd, ed_lv_hwajong3Nm);
};
//-------------------------------------------------------------------------
// 장비구분-차량 화종구분3 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 화종구분4 UDC START
//-------------------------------------------------------------------------
scwin.udc_lv_hwajong4Cd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_lv_hwajong4Cd.getValue(), ed_lv_hwajong4Nm.getValue(), 'F', 'T');
};
scwin.udc_lv_hwajong4Cd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_hwajong4Cd, ed_lv_hwajong4Nm, 10);
};
scwin.udc_lv_hwajong4Cd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lv_hwajong4Nm, ed_lv_hwajong4Cd, 10, false);
};
scwin.udc_lv_hwajong4Cd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lv_hwajong4Cd, ed_lv_hwajong4Nm);
};
//-------------------------------------------------------------------------
// 장비구분-차량 화종구분4 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 장비구분-차량 화물구분 콤보박스 값 변경
// ASIS : co_lc_op190_1 OnSelChange()
//-------------------------------------------------------------------------
scwin.acb_lv_op190_onviewchange = function (info) {
  scwin.f_districtSearchKind();
};
scwin.acb_lv_op190_onchange = function (info) {
  scwin.f_districtSearchKind();
};

//-------------------------------------------------------------------------
// 장비구분-차량 작업구간 콤보박스 값 변경
// ASIS : co_lc_workterm OnSelChange()
//-------------------------------------------------------------------------
scwin.acb_lv_workterm_onviewchange = function (info) {
  scwin.f_districtSearchKind();
};

//-------------------------------------------------------------------------
// 장비구분-중기 계약 그리드 날짜 변경 시 값 체크
// ASIS : gr_underList OnPopup(row,colid,data)
//-------------------------------------------------------------------------
scwin.gr_underList_ondateselect = function (rowIndex, columnIndex, date, dateObject) {
  var colid = "";
  if (columnIndex == 0) {
    colid = "ctrtStDt";
  } else if (columnIndex == 1) {
    colid = "ctrtEndDt";
  }
  scwin.f_dateChk(rowIndex, colid, date);
};

//-------------------------------------------------------------------------
// 장비구분-중기 계약 그리드 날짜 변경 시 값 체크
// ASIS : gr_underList OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_underList_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = "";
  if (columnIndex == 0) {
    colid = "ctrtStDt";
  } else if (columnIndex == 1) {
    colid = "ctrtEndDt";
  }
  scwin.f_dateChk(rowIndex, colid, value);
};

//-------------------------------------------------------------------------
// 장비구분-차량 계약 그리드 날짜 변경 시 값 체크
// ASIS : gr_underList OnPopup(row,colid,data)
//-------------------------------------------------------------------------
scwin.gr_EquipmentContractList_ondateselect = function (rowIndex, columnIndex, date, dateObject) {
  var colid = "";
  if (columnIndex == 1) {
    colid = "ctrtStDt";
  } else if (columnIndex == 2) {
    colid = "ctrtEndDt";
  }
  scwin.f_dateChk(rowIndex, colid, date);
};

//-------------------------------------------------------------------------
// 계약 dataList 값 변경 체크
// ASIS : co_ds_combo3 OnLoadCompleted()
//-------------------------------------------------------------------------
scwin.sbm_getJumsoCode_submitdone = function (e) {
  const jsonData = e.responseJSON.GAUCE;
  jsonData.sort((a, b) => {
    //return a.code.localeCompare(b.code, undefined, { numeric: true });
    return a.code.localeCompare(b.code);
  });
  ds_combo_jumso.setJSON(jsonData);
  var tmpRsData = ds_combo_jumso.getMatchedIndex("code", scwin.sLoUpperLobranCd);
  if (tmpRsData.length != 0) {
    acb_logisticsBranch.setValue(scwin.sLoUpperLobranCd);
  } else {
    acb_logisticsBranch.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
// 계약점소 콤보박스 조회
// ASIS : ds_SaveEquipmentContract onColumnChanged(row,colid)
//-------------------------------------------------------------------------
scwin.ds_SaveEquipmentContract_oncelldatachange = function (info) {
  if (info.colID == "odrPrtDd") {
    if (ds_SaveEquipmentContract.getCellData(info.rowIndex, "odrPrtDd") > 31) {
      $c.gus.cfAlertMsg($p, "오더생성일은 31일 이하 입니다. ");
      ds_SaveEquipmentContract.setCellData(info.rowIndex, "odrPrtDd", 31);
    }
  }
};

//-------------------------------------------------------------------------
// 중복 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_dupCheck_onclick = function (e) {
  scwin.f_openPopUp(10, 'T');
};
scwin.sbm_getCommFltrCode_submitdone = function (e) {
  acb_lv_posnClsCd.setSelectedIndex(0);
};
scwin.f_disp = function (data) {
  return data.substr(0, 5);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_carKndChk',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.f_carKndChkOnClick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LV'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LH'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_knd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'','ev:onviewchange':'scwin.acb_con_knd_onviewchange',chooseOptionLabel:'전체',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_reqMchtCd',nameId:'ed_reqMchtNm',btnId:'btn_reqMchtCd',id:'udc_reqMchtCd',objTypeCode:'data',objTypeName:'data',validTitle:'협력업체',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_reqMchtCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reqMchtCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_reqMchtCd_onviewchangeNameEvent',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_logisticsBranch',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_jumso'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_con_eqNo',nameId:'ed_con_vehclNm',btnId:'btn_con_eqNo',id:'udc_con_eqNo',maxlengthCode:'6',objTypeCode:'Data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_con_eqNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_eqNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_eqNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_qeryList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'tbx_car_title',label:'중기현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_LogisticsCooperationCompanyEquipmentList',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_LCCEList',style:'',autoFit:'allColumn',id:'gr_LogisticsCooperationCompanyEquipmentList',visibleRowNum:'10',class:'wq_gvw',readOnly:'true','ev:oncellclick':'scwin.gr_LogisticsCooperationCompanyEquipmentList_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column1',value:'장비번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'차량<br/>단축코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column15',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'정산협력업체',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclShortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'eqKndNm',displayMode:'label',textAlign:'left',imageWidth:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmNm',displayMode:'label',textAlign:'left',displayFormatter:'scwin.f_disp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'logisHveqRepCopCoNo',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn1',btnCancelObj:'btn_rowCancel1',btnRowAddObj:'btn_rowAdd1',btnRowDelObj:'btn_rowDel1',rowAddUserAuth:'C',rowAddFunction:'scwin.f_CarGridAddrow',rowDelFunction:'scwin.f_carGridDelrow',cancelFunction:'scwin.f_carGridUndorow',rowDelUserAuth:'D',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{id:'grp_oDiv4',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_SaveEquipmentContract',style:'',autoFit:'allColumn',id:'gr_EquipmentContractList',visibleRowNum:'6',class:'wq_gvw','ev:ondateselect':'scwin.gr_EquipmentContractList_ondateselect',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',class:'txt-red',value:'일월구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',class:'txt-red',value:'계약시작일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',class:'txt-red',value:'계약종료일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',class:'txt-red',value:'계약금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',class:'txt-red',value:'계약조건',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'ddMmClsCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_ddMmCls'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'ctrtStDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'ctrtEndDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'ctrtAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'payCond',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_PayBaseline'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows_three',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn2',rowAddFunction:'scwin.f_inputEquipmentContractGridAddrow',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_SaveECDelRow',gridID:'gr_EquipmentContractList',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'grp_oDiv1'},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_jumso',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_LCCEList.assgnLobranCd',mandatory:'true',objType:'key'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_jumso'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lv_reqMchtCd2',nameId:'ed_lv_reqMchtNm2',btnId:'btn_lv_reqMchtCd2',id:'udc_lv_reqMchtCd2',maxlengthCode:'7',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_lv_reqMchtCd2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_reqMchtCd2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_reqMchtCd2_onviewchangeNameEvent',code:'clntNo',name:'clntNm',refDataCollection:'ds_LCCEList',objTypeName:'key',objTypeCode:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_owner_nm',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:ds_LCCEList.clntRepstNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량/단축 번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lv_vehclNm',placeholder:'',style:'width: 110px;',maxlength:'12',mandatory:'true',title:'차량단축번호',objType:'key','ev:onblur':'scwin.f_VehckNmChk1','ev:onkeyup':'scwin.ed_lv_vehclNm_onkeyup',ref:'data:ds_LCCEList.vehclNo','ev:onkeydown':'scwin.ed_lv_vehclNm_onkeydown',refSync:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_vehclShortCd',placeholder:'',style:'width: 50px;',maxlength:'4',allowChar:'a-zA-Z0-9',ref:'data:ds_LCCEList.vehclShortCd',objType:'key',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_dupCheck',style:'',type:'button','ev:onclick':'scwin.btn_dupCheck_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중복'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_eqNo',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:ds_LCCEList.eqCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모델명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lv_eqModelCd',nameId:'ed_lv_eqModelNm',btnId:'btn_lv_eqModelCd',id:'udc_lv_eqModelCd',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',validTitle:'모델명',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_lv_eqModelCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_eqModelCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_eqModelCd_onviewchangeNameEvent',code:'eqModelCd',name:'eqModelNm',refDataCollection:'ds_LCCEList',objTypeCode:'key',objTypeName:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_eqKndNm',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:ds_LCCEList.eqKndNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_eqNrmNm',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:ds_LCCEList.eqNrmNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구동방식',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_actkind',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',title:'구동방식',objType:'key',ref:'data:ds_LCCEList.eqDriveWayCd',selectedData:'false',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',emptyItem:'true',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_sasiKind',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_LCCEList.lnkEqKndCd',objType:'key',chooseOptionLabel:'$blank',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_sasiKind'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_op190',search:'start',style:'width:150px;',submenuSize:'auto',objType:'key',mandatory:'true',title:'화물구분',ref:'data:ds_LCCEList.cargoClsCd',selectedData:'false',allOption:'',chooseOption:'',chooseOptionLabel:'$blank','ev:onchange':'scwin.acb_lv_op190_onchange',sortOption:'value',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_lv_area1',class:'',objType:'key',ref:'data:ds_LCCEList.logisWrkDistrictCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',sortOption:'value'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_lv_area2',class:'',objType:'key',ref:'data:ds_LCCEList.logisWrkDistrictCd2',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_workterm',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',objType:'key','ev:onviewchange':'scwin.acb_lv_workterm_onviewchange',ref:'data:ds_LCCEList.wrkDstCd',selectedData:'false',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',sortOption:'value',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_mngKind',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.logisHirecarMgntClsCd',selectedData:'false',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',objType:'key',sortOption:'value',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량기사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_driver',placeholder:'',style:'width:150px;',mandatory:'true',title:'차량기사',ref:'data:ds_LCCEList.logisVehclDrvNm1',objType:'data',maxlength:'14'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종구분1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lv_hwajong1Cd',id:'udc_lv_hwajong1Cd',btnId:'btn_lv_hwajong1Cd',nameId:'ed_lv_hwajong1Nm',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'key',objTypeName:'key','ev:onclickEvent':'scwin.udc_lv_hwajong1Cd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_hwajong1Cd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_hwajong1Cd_onviewchangeNameEvent',code:'logisKcgClsCd1',name:'logisKcgClsNm1',refDataCollection:'ds_LCCEList'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_driver_hptel',placeholder:'',style:'width:150px;',mandatory:'true',title:'휴대전화',objType:'data',ref:'data:ds_LCCEList.logisVehclDrv1MpNo',maxlength:'14'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종구분2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lv_hwajong2Cd',nameId:'ed_lv_hwajong2Nm',btnId:'btn_lv_hwajong2Cd',id:'udc_lv_hwajong2Cd',objTypeCode:'key',objTypeName:'key',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_lv_hwajong2Cd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_hwajong2Cd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_hwajong2Cd_onviewchangeNameEvent',refDataCollection:'ds_LCCEList',code:'logisKcgClsCd2',name:'logisKcgClsNm2',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결속장구',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_wrk_imple_nm',placeholder:'',style:'width:150px;',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종구분3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lv_hwajong3Cd',nameId:'ed_lv_hwajong3Nm',btnId:'btn_lv_hwajong3Cd',id:'udc_lv_hwajong3Cd',objTypeCode:'key',objTypeName:'key',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_lv_hwajong3Cd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_hwajong3Cd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_hwajong3Cd_onviewchangeNameEvent',refDataCollection:'ds_LCCEList',code:'logisKcgClsCd3',name:'logisKcgClsNm3',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종구분4',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',objTypeCode:'key',objTypeName:'key',maxlengthCode:'4',codeId:'ed_lv_hwajong4Cd',btnId:'btn_lv_hwajong4Cd',id:'udc_lv_hwajong4Cd',nameId:'ed_lv_hwajong4Nm','ev:onclickEvent':'scwin.udc_lv_hwajong4Cd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_hwajong4Cd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_hwajong4Cd_onviewchangeNameEvent',refDataCollection:'ds_LCCEList',code:'logisKcgClsCd4',name:'logisKcgClsNm4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직영차 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lv_directMemberYn',ref:'data:ds_LCCEList.direcMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_lv_reqMchtCd1',codeId:'ed_lv_reqMchtCd1',nameId:'ed_lv_reqMchtNm1',btnId:'btn_lv_reqMchtCd1',maxlengthCode:'7',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data',objTypeCode:'data',validTitle:'정산협력업체','ev:onclickEvent':'scwin.udc_lv_reqMchtCd1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lv_reqMchtCd1_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lv_reqMchtCd1_onviewchangeNameEvent',code:'logisHveqRepCopCoNo',name:'logisHveqRepCopCoNm',refDataCollection:'ds_LCCEList'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체소유구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lv_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_LCCEList.posnClsCd',objType:'key',selectedData:'true',chooseOptionLabel:'$blank',emptyIndex:'0',sortOption:'value',sortMethod:'ascending'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_CommFltr'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_posnClsNm',placeholder:'',style:'width:150px;',readOnly:'true',objType:'data',maxlength:'8',ref:'data:ds_LCCEList.posnClsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_ctrtNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_LCCEList.ctrtNo',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ctrtDt',refDataMap:'ds_LCCEList',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',edFromId:'ed_ctrtStDt',edToId:'ed_ctrtEndDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량아이디카드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_carIdCard',placeholder:'',style:'width:150px;',maxlength:'8',objType:'data','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_LCCEList.vehclIdCardNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TRS 번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_trsNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'8',ref:'data:ds_LCCEList.trsNo1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회원제 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lv_memberYn',ref:'data:ds_LCCEList.mbssysVehclYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_memberChk',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회원제기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_empDate',refDataMap:'ds_LCCEList',refEdDt:'mbssysEndDt',refStDt:'mbssysStDt',style:'',edFromId:'ed_empFromDate',edToId:'ed_empToDate',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'벌크복화 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lv_bulkCmpsTcrgYn',ref:'data:ds_LCCEList.bulkCmpsTcrgYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_memberChk',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'벌크복화기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_LCCEList',refEdDt:'bulkCmpsTcrgEndDt',refStDt:'bulkCmpsTcrgStDt',style:'',edFromId:'ed_bulkCmpsTcrgStDt',edToId:'ed_bulkCmpsTcrgEndDt',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lv_allowYn',ref:'data:ds_LCCEList.copCoVehclRegAdmitYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_allowYnChk',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인자/승인일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_lv_allowStr',placeholder:'',class:'',maxlength:'20',objType:'data',readOnly:'true',ref:'data:ds_LCCEList.copCoVehclRegAdmitEmpNo'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_allowDateStr',maxlength:'20',objType:'data',placeholder:'',style:'width:100px;',readOnly:'true',ref:'data:ds_LCCEList.copCoVehclRegAdmitDt',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_curPosWrk',placeholder:'',style:'width:150px;',readOnly:'true',objType:'data',ref:'data:ds_LCCEList.eqCurWrkPlNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세운송기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_boseDate',refDataMap:'ds_LCCEList',refEdDt:'bondTransEndDt',refStDt:'bondTransStDt',style:'',edFromId:'ed_boseFromDate',edToId:'ed_boseToDate',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lv_eqStsNm',placeholder:'',style:'width:150px;',readOnly:'true',objType:'data',ref:'data:ds_LCCEList.eqStsNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모바일지시여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lv_mobileYn',ref:'data:ds_LCCEList.mobileIndictYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lv_deleteState',ref:'data:ds_LCCEList.deleteState',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',disabled:'true',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종수정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_lv_modDtm_1',pickerType:'dynamic',style:'',readOnly:'true',displayFormat:'yyyy/MM/dd',calendarDisplayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_LCCEList.modDtm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'grp_oDiv2',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lh_eqNo',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.eqCd',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_vehclNm',placeholder:'',style:'width:150px;',maxlength:'15',objType:'data','ev:onblur':'scwin.f_VehckNmChk2','ev:onkeyup':'scwin.ed_lh_vehclNm_onkeyup',ref:'data:ds_LCCEList.vehclNo','ev:onkeydown':'scwin.ed_lh_vehclNm_onkeydown'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단축번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_vehclShortCd',placeholder:'',style:'width:85px;',objType:'key',mandatory:'true',title:'단축번호',maxlength:'4',allowChar:'a-zA-Z0-9',ref:'data:ds_LCCEList.vehclShortCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모델명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lh_eqModelCd',nameId:'ed_lh_eqModelNm',btnId:'btn_lh_eqModelCd',id:'udc_lh_eqModelCd','ev:onclickEvent':'scwin.udc_lh_eqModelCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lh_eqModelCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lh_eqModelCd_onviewchangeNameEvent',refDataCollection:'ds_LCCEList',code:'eqModelCd',name:'eqModelNm',objTypeName:'data',objTypeCode:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_eqKndNm',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.eqKndNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_eqNrmNm',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.eqNrmNm',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lh_jumso',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_LCCEList.assgnLobranCd',objType:'data',title:'계약점소',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_jumso'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lh_logisEqPosWrkPlCd',nameId:'ed_lh_logisEqPosWrkPlNm',btnId:'btn_lh_logisEqPosWrkPlCd',id:'udc_lh_logisEqPosWrkPlCd',maxlengthCode:'7',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data',objTypeCode:'key','ev:onclickEvent':'scwin.udc_lh_logisEqPosWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lh_logisEqPosWrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lh_logisEqPosWrkPlCd_onviewchangeNameEvent',code:'logisEqPosWrkPlCd',name:'eqCurWrkPlNm',refDataCollection:'ds_LCCEList'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_owner_nm',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.clntRepstNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lh_reqMchtCd2',nameId:'ed_lh_reqMchtNm2',objTypeName:'data',objTypeCode:'key',maxlengthCode:'7',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',id:'udc_lh_reqMchtCd2',btnId:'btn_lh_reqMchtCd2','ev:onclickEvent':'scwin.udc_lh_reqMchtCd2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lh_reqMchtCd2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lh_reqMchtCd2_onviewchangeNameEvent',code:'clntNo',name:'clntNm',refDataCollection:'ds_LCCEList'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_tel',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.clntTelNo',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대폰번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lh_hptel',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.clntMpNo',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lh_reqMchtCd1',nameId:'ed_lh_reqMchtNm1',btnId:'btn_lh_reqMchtCd1',id:'udc_lh_reqMchtCd1',maxlengthCode:'7',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_lh_reqMchtCd1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lh_reqMchtCd1_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lh_reqMchtCd1_onviewchangeNameEvent',code:'logisHveqRepCopCoNo',name:'logisHveqRepCopCoNm',refDataCollection:'ds_LCCEList',objTypeCode:'key',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SaveEquipmentContract',id:'gr_underList',style:'',visibleRowNum:'8',visibleRowNumFix:'true','ev:ondateselect':'scwin.gr_underList_ondateselect','ev:onafteredit':'scwin.gr_underList_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계약시작일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약종료일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더생성일',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계산기준',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'시간/Shift수',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약금액',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'단가',width:'100',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtStDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrPrtDd',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCond',inputType:'select',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_PayBaseline'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtHh',inputType:'text',width:'120',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhPerUpr',inputType:'text',width:'100',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows_two',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn3',rowAddUserAuth:'C',rowDelUserAuth:'D',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_underList',rowAddFunction:'scwin.f_inputEquipmentContractGridAddrow',rowDelFunction:'scwin.f_SaveECDelRow',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bohumReg',style:'',type:'button','ev:onclick':'scwin.f_bohumReg',objType:'bNormal',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'장비보험등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})