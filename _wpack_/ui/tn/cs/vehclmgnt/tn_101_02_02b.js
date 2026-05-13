/*amd /ui/tn/cs/vehclmgnt/tn_101_02_02b.xml 103478 2a6adb7be5fbaddfd9da1d7984a52ee23ee7a9738409946a7f19adaed2660a64 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_conKnd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sasiKind',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtBranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'direcMgntYn',name:'직영차여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'귀로차량여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullchrgMchtCd',name:'전담화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullchrgMchtNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'equipmentNumber',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search3'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'귀로차량여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search4'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'carKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCdModify',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deleteKndCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LCCEList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'CDMA번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'PDANO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNo',name:'물류중기대표협력업체번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnkEqKndCd',name:'연결장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'거래처 대표이사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo1',name:'차량번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo2',name:'차량번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo3',name:'차량번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo4',name:'차량번호4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlCd',name:'물류장비위치작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCurWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqStsCd',name:'장비상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqStsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'회원제차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'작업구간코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'물류작업권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'물류작업권역코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobileIndictYn',name:'모바일지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbsYn',name:'LBS관제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'보세운송시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'보세운송종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayCd',name:'장비구동방식코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'물류차량기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd1',name:'물류화종구분코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd2',name:'물류화종구분코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'물류차량기사1핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo1',name:'TRS번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysStDt',name:'회원제시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysEndDt',name:'회원제종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHirecarMgntClsCd',name:'물류용차관리구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteKndCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insertKndCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitYn',name:'협력업체차량등록승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitEmpNo',name:'협력업체차량등록승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitDt',name:'협력업체차량등록승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workFlaga',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workFlagb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteState',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqChgDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'direcMgntYn',name:'직영차여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclDirecMgntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd3',name:'물류화종구분코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd4',name:'물류화종구분코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgYn',name:'벌크복화여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgStDt',name:'벌크복화시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgEndDt',name:'벌크복화종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnLobranCd',name:'귀로점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnVehclYn',name:'귀로차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'steelVehclYn',name:'동부제철전담여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'실제 PDA 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullchrgMchtCd',name:'전담화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullchrgMchtNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclOpentopblcYn',name:'차량공개여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fleffcncy',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmVehclCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmOfcNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgKnd',name:'DTG종류(기록계종류)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgNo',name:'DTG번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxShipwgtVol',name:'최대적재량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prsnInfoYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prsnInfoDtm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveEquipmentContract',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPrtDd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCond',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtHh',name:'계약시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtAmt',name:'계약금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhPerUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ddMmClsCd',name:'일월구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ep_insurance',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrSeq',name:'보험순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrCoCd',name:'보험사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrKndCd',name:'보험종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrStDt',name:'보험시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrEndDt',name:'보험만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrLimitAmt',name:'보험한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'psnl1EntryYn',name:'대인1가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'psnl2EntryYn',name:'대인2가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impsnlEntryYn',name:'대물가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfEntryYn',name:'자가가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sfdmgEntryYn',name:'자손가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDdCnt',name:'적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrChrgLimitAmt',name:'보험책임한도금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_duplicationCarInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqcdCtrtHistory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPicNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accntPicNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSiz',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discrdYn',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discrdRsn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_QueryCondition2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_gauceUtil_lc_hwajong1Cd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lcAreaList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lcAreaList_ori',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comSearch',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_comSearch',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCooperationCompanyEquipmentList',action:'/ncall.tn.cs.vehclmgnt.RetrieveDirecMgntPrsCondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_LCCEList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_LCCEList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCooperationCompanyEquipmentList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCooperationContract',action:'/ncall.tn.cs.vehclmgnt.RetrieveEqContractCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_saveEquipmentContract","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_saveEquipmentContract","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCooperationContract_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_insurance',action:'/ncall.tn.cs.vehclmgnt.RetrieveEqInsrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[dma_search,{"id":"ds_ep_insurance","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ep_insurance","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_insurance_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCarDuplicationInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCooperationCompanyEquipmentDuplicationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search3","key":"IN_DS1"},{"id":"ds_duplicationCarInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_duplicationCarInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCarDuplicationInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCooperationCompanyContractEquipment',action:'/ncall.tn.cs.vehclmgnt.SaveDirecMgntVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search4",{"action":"modified","id":"ds_LCCEList","key":"IN_DS1"},{"action":"modified","id":"ds_saveEquipmentContract","key":"IN_DS2"},{"action":"modified","id":"ds_ep_insurance","key":"IN_DS3"},{"action":"modified","id":"ds_eqcdCtrtHistory","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCooperationCompanyContractEquipment_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 귀로차량정보등록
 * tn_101_02_02b
 */

scwin.newAddYn = "";

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  /*
      사용자 구분(그룹코드:ZZ010)
      01:그룹사
      02:협력업체&고객
      03:선사
      04:화주
      05:자가운송업체
  */

  scwin.dateStr = $c.date.getServerDateTime($p);
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.sUserId = scwin.memInfo.userId;
  scwin.sUserClsCd = $c.util.isEmpty($p, scwin.memInfo.userClsCd) ? "" : scwin.memInfo.userClsCd;
  scwin.sClntNo = $c.util.isEmpty($p, scwin.memInfo.clntNo) ? "" : scwin.memInfo.clntNo;
  scwin.sClntNm = $c.util.isEmpty($p, scwin.memInfo.clntNm) ? "" : scwin.memInfo.clntNm;
  scwin.lobranCd = scwin.memInfo.lobranCd;
  scwin.vehclNo = scwin.memInfo.vehclNo;
  scwin.sLoUpperLobranCd = $c.util.isEmpty($p, scwin.memInfo.loUpperLobranCd) ? "" : scwin.memInfo.loUpperLobranCd;
  scwin.rFlag = false;
  scwin.oldCurPos = 0; //이전 작업 행번호
  scwin.oldDistrictKind = ""; // 이전 작업권역종류 
  scwin.rtnCarInfoList = null;
  scwin.rtnPosnClsCd = "";
  scwin.eventYn = true; //이벤트 막기 위함 구분자

  scwin.lobranCd == "" ? lc_lobranCd.setValue(scwin.loUpperLobranCd) : lc_lobranCd.setValue(scwin.lobranCd);

  //공통코드 조회
  const codeOptions = [{
    grpCd: "ZZ203",
    compID: "lc_posnClsCd,co_lc_posnClsCd_1",
    opt: {
      "range": "2,Y"
    }
  }, {
    grpCd: "OP569",
    compID: "lc_vehclNo_1"
  }, {
    grpCd: "ZZ617",
    compID: "co_lc_actkind"
  }, {
    grpCd: "OP190",
    compID: "co_lc_op190_1"
  }, {
    grpCd: "ZZ307",
    compID: "co_lc_workterm"
  }, {
    grpCd: "ZZ618",
    compID: "co_lc_mngKind_1"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackSetCommonCode);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_lobranCd,co_lc_jumso_1,co_lc_jumso_2"
  }, {
    method: "getLuxeComboData",
    param1: "CommEBC",
    param2: "retrieveEachLevelCommodityList",
    param3: ["2"],
    compID: "lc_hwajong1Cd, lc_hwajong2Cd"
  }, {
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["PLO"],
    // 동적으로 변하는 파라미터
    compID: "PLOList" // 타겟 콤보 ID
  }, {
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["PEX"],
    // 동적으로 변하는 파라미터
    compID: "PEXList" // 타겟 콤보 ID
  }, {
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["CMP"],
    // 동적으로 변하는 파라미터
    compID: "CMPList" // 타겟 콤보 ID
  }, {
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["BWK"],
    // 동적으로 변하는 파라미터
    compID: "BWKList" // 타겟 콤보 ID
  }];
  $c.data.setGauceUtil($p, comboOptions, function () {
    //컴포넌트 제어
    lc_lobranCd.setValue(scwin.lobranCd);
    $c.gus.cfDisableObjects($p, [tbl_info1, tbl_info2, tbl_info3, btn_update, btn_cancel, btn_save]);
    btn_dupYn.hide();
    if (!$c.util.isEmpty($p, scwin.lobranCd)) {
      lc_lobranCd.setValue(scwin.lobranCd);
      em_con_eqNo.setValue(scwin.vehclNo);
      //scwin.f_retrieve();
    }
    ds_lcAreaList.setJSON(dlt_gauceUtil_PLOList.getAllJSON(), true);
    ds_lcAreaList.setJSON(dlt_gauceUtil_PEXList.getAllJSON(), true);
    ds_lcAreaList.setJSON(dlt_gauceUtil_CMPList.getAllJSON(), true);
    ds_lcAreaList.setJSON(dlt_gauceUtil_BWKList.getAllJSON(), true);
    ds_lcAreaList_ori.setJSON(ds_lcAreaList.getAllJSON());
  });

  //장비 종류
  dma_comSearch.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_comSearch.set("queryId", "retriveCarKindCodeListCombo");
  $c.sbm.execute($p, sbm_comSearch).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_conKnd.setJSON(e.responseJSON.GAUCE);
    acb_conKnd.setNodeSet("data:ds_conKnd", "name", "code");
    dma_comSearch.setEmptyValue();
  }).then(function () {
    //샤시종류
    dma_comSearch.set("sysCd", "CooperationCompanyEquipmentEBC");
    dma_comSearch.set("queryId", "retrivecComboCommonUpperCdList");
    dma_comSearch.set("param1", "ZZ210");
    dma_comSearch.set("param2", "TL");
    $c.sbm.execute($p, sbm_comSearch).then(function (e) {
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      ds_sasiKind.setJSON(e.responseJSON.GAUCE);
      lc_sasiKind.setNodeSet("data:ds_sasiKind", "name", "code");
      dma_comSearch.setEmptyValue();
      ds_sasiKind.sort("code", 0);
    });
  });
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, tbl_search);
  if (!chkVal) return;
  scwin.eventYn = false;

  //dma_search.setEmptyValue();                       // 차량리스트 조회조건 데이타셋 삭제
  ds_saveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제.         
  ds_ep_insurance.removeAll(); // 보험가입내역 데이타셋 삭제.

  dma_search.set("returnVehclYn", "1"); // 귀로차량여부
  dma_search.set("eqClsCd", "LV"); // 차량구분코드 
  dma_search.set("direcMgntYn", "1"); // 직영차여부

  //화종구분
  scwin.rFlag = false;
  //scwin.f_retrieveComboHwaKind("1");

  $c.sbm.execute($p, sbm_retrieveCooperationCompanyEquipmentList);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_carGridAddrow = function () {
  var carKndChk_val = "LV";
  ds_saveEquipmentContract.removeAll(); // 계약정보리스트 데이타셋 삭제.
  ds_ep_insurance.removeAll(); //  보험정보 데이타셋 삭제.

  var clntNo = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "clntNo");
  var clntNm = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "clntNm");

  //행추가
  let insRow = ds_LCCEList.insertRow();
  gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(insRow, 0);
  ds_LCCEList.setCellData(insRow, "eqClsCd", carKndChk_val);
  ds_LCCEList.setCellData(insRow, "assgnLobranCd", lc_lobranCd.getValue());
  ds_LCCEList.setCellData(insRow, "clntNo", clntNo);
  ds_LCCEList.setCellData(insRow, "clntNm", clntNm);
  ds_LCCEList.setCellData(insRow, "logisHveqRepCopCoNo", clntNo);
  ds_LCCEList.setCellData(insRow, "logisHveqRepCopCoNm", clntNm);
  ds_LCCEList.setCellData(insRow, "vehclDirecMgntYn", "1");
  ds_LCCEList.setCellData(insRow, "returnVehclYn", "1");
  ds_LCCEList.setCellData(insRow, "steelVehclYn", "0");
  ds_LCCEList.setCellData(insRow, "steelVehclYn", "0");
  ds_LCCEList.setCellData(insRow, "realYn", "0");
  ds_LCCEList.setCellData(insRow, "mbssysVehclYn", "1");
  lc_vehclNo_1.setSelectedIndex(0);
  scwin.f_default_LV();

  //버튼제어
  $c.gus.cfEnableObjects($p, [tbl_info1, tbl_info2, tbl_info3, btn_cancel, btn_save]);
  $c.gus.cfDisableObjects($p, [txt_em_vehclNm_1, txt_owner_nm_1, txt_em_con_eqNo_1, ed_eqKndNm_1, ed_eqNrmNm_1, ed_reqMchtNm2_2, btn_new, btn_update]);
  btn_dupYn.show("");
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_update = function () {
  //버튼제어
  /*gr_EquipmentContractList.Editable = true;
  gr_ep_insurance.Editable   = true;
  $c.gus.cfEnableKeyData();
  $c.gus.cfEnableObj(txt_em_vehclNm_1,false);
  $c.gus.cfEnableObj(lc_vehclNo_1,false);
  $c.gus.cfEnableObj(ed_vehclNo2,false);
  $c.gus.cfEnableObj(ed_vehclNo3,false);
  $c.gus.cfEnableObj(ed_vehclNo4,false);
  $c.gus.cfEnableObj(co_lc_jumso_1,false);
  $c.gus.cfEnableObj(co_lc_jumso_2,false);
  //c.gus.cfEnableObjects([btn_insurance, btn_equipmentContractList, btn_cancel, btn_save]);*/

  $c.gus.cfEnableObjects($p, [tbl_info1, tbl_info2, tbl_info3]);
  $c.gus.cfDisableObjects($p, [ed_reqMchtNm1_1, ed_reqMchtNm2_1, lc_vehclNo_1, ed_vehclNo2, ed_vehclNo3, ed_vehclNo4, txt_em_vehclNm_1, co_lc_jumso_1, txt_owner_nm_1, txt_em_con_eqNo_1, ed_eqModelNm_1, ed_eqKndNm_1, ed_eqNrmNm_1, co_lc_jumso_2, ed_reqMchtNm2_2]);
  $c.gus.cfEnableObjects($p, [btn_cancel, btn_save]);
  $c.gus.cfDisableObjects($p, [btn_new, btn_update]);

  //b1.disabled= false;
  //b2.disabled= false;         
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function (gubun) {
  scwin.eventYn = true;
  var kind_str1 = "";
  var kind_str2 = "";
  var state_val = ds_LCCEList.getRowStatus(ds_LCCEList.getRowPosition());
  var carKndChk_val = "LV";
  kind_str1 = co_lc_jumso_1.getValue();
  kind_str2 = txt_em_con_eqNo_1.getValue();
  if (ed_reqMchtCd2_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["소속협력업체"]);
    ed_reqMchtCd2_1.focus();
    return;
  }
  if (ed_reqMchtCd1_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["정산협력업체"]);
    ed_reqMchtCd2_1.focus();
    return;
  }
  if (txt_em_vehclNm_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량번호"]);
    txt_em_vehclNm_1.focus();
    return;
  }
  if (state_val == "U" && txt_deleteState_1.getValue() == "0") {
    scwin.f_openPopUp(11, 'T');
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "workFlaga") == "N") {
      return;
    }
  }
  if (state_val == "C") {
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "workFlaga") != "Y") {
      $c.win.alert($p, "입력 가능한 차량번호임을 중복체크를 통해 확인하지 않으셨습니다.");
      return;
    }
  }
  if (txt_vehclShortCd_1.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량단축번호"]);
    txt_vehclShortCd_1.focus();
    return;
  }
  if (ed_eqModelCd_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["모델명"]);
    ed_eqModelCd_1.focus();
    return;
  }
  if (txt_driver_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["차량기사"]);
    txt_driver_1.focus();
    return;
  }
  if (txt_driver_hptel_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["휴대전화"]);
    txt_driver_hptel_1.focus();
    return;
  }
  if (co_lc_posnClsCd_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["소유구분"]);
    co_lc_posnClsCd_1.focus();
    return;
  }
  if (co_lc_area1_1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업권역"]);
    co_lc_area1_1.focus();
    return;
  }
  if (co_lc_workterm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업구간"]);
    co_lc_workterm.focus();
    return;
  }
  if (lc_hwajong1Cd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["선호화종1"]);
    lc_hwajong1Cd.focus();
    return;
  }
  if (ed_boseFromDate.getValue() > ed_boseToDate.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039, ["보세운송기간"]);
    ed_boseFromDate.focus();
    return;
  }
  if ((lc_dtgKnd.getValue() == "1" || lc_dtgKnd.getValue() == "2") && $c.gus.cfIsNull($p, txt_dtgNo.getValue())) {
    await $c.win.alert($p, "DTG번호를 입력해 주십시오.");
    txt_dtgNo.focus();
    return;
  }
  if (txt_lbsYn.getValue() == "1") {
    if ($c.gus.cfIsNull($p, txt_pdaNo.getValue())) {
      await $c.win.alert($p, "LBS관제차량인 경우 스마트폰번호는 필수입력항목입니다.");
      txt_pdaNo.focus();
      return false;
    }
  }
  if ($c.gus.cfIsNull($p, txt_pdaNo.getValue())) {
    lc_realYn.setSelectedIndex(0);
  }
  for (var i = 0; i < ds_saveEquipmentContract.getTotalRow(); i++) {
    if (ds_saveEquipmentContract.getCellData(i, "ctrtStDt") == "") {
      await $c.win.alert($p, i + " 번째줄의 계약시작일자는 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "ctrtStDt");
      return;
    }
    if (ds_saveEquipmentContract.getCellData(i, "ctrtEndDt") == "") {
      await $c.win.alert($p, i + " 번째줄의 계약종료일은 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "ctrtStDt");
      return;
    }
    if (ds_saveEquipmentContract.getCellData(i, "clntNo") == "") {
      await $c.win.alert($p, i + " 번째줄의 협력업체는 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "clntNo");
      return;
    }
    if (ds_saveEquipmentContract.getCellData(i, "payCond") == "") {
      await $c.win.alert($p, i + " 번째줄의 계약조건은 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "payCond");
      return;
    }
    if (ds_saveEquipmentContract.getCellData(i, "ctrtAmt") == "") {
      await $c.win.alert($p, i + " 번째줄의 계약금액은 필수 입력 항목입니다.");
      gr_EquipmentContractList.setFocusedCell(i, "ctrtAmt");
      return;
    }
  }

  // 날짜 중복되는 곳 체크
  var totalCnt = ds_saveEquipmentContract.getTotalRow();
  for (var i = 0; i < totalCnt; i++) {
    for (var j = i + 1; j < totalCnt; j++) {
      if (!(ds_saveEquipmentContract.getCellData(i, "ctrtStDt") > ds_saveEquipmentContract.getCellData(j, "ctrtEndDt") || ds_saveEquipmentContract.getCellData(i, "ctrtEndDt") < ds_saveEquipmentContract.getCellData(j, "ctrtStDt"))) {
        await $c.win.alert($p, j + " 번째줄의 계약기간이 중복되었습니다.");
        gr_EquipmentContractList.setFocusedCell(j, "ctrtEndDt");
        return;
      }
    }
  }
  //직영차량 전환
  if (txt_directMgntYn.getValue() == "1") {
    ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "returnVehclYn", "0");
    ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "deleteState", "2");
  }
  for (var i = 0; i < ds_ep_insurance.getTotalRow(); i++) {
    if (!$c.date.isDate($p, ds_ep_insurance.getCellData(i, "insrStDt"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["보험시작일자"]);
      return;
    }
    if (!$c.date.isDate($p, ds_ep_insurance.getCellData(i, "insrEndDt"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["보험종료일자"]);
      g;
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, ds_ep_insurance.getCellData(i, "insrStDt"), ds_ep_insurance.getCellData(i, "insrEndDt"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  }
  var param_str = "";
  if (ed_reqMchtCd2_1.getValue() != ed_reqMchtCd1_1.getValue()) {
    await $c.win.alert($p, "소속협력업체코드 [ " + ed_reqMchtCd2_1.getValue() + " ] 는 정산협력업체코드 [ " + ed_reqMchtCd1_1.getValue() + " ] 와 다릅니다.\n 정산협력업체코드는 실적발생시 통합매입의 매입거래처로 생성됩니다. \n 정산협력업체코드 [ " + ed_reqMchtCd1_1.getValue() + " ]로 매입정보를 생성하는 것이 맞으시면 계속 진행하시고,\n 틀리면 수정하여 주십시오.");
  }

  /*if(gubun) {
      param_str="carKndCd=" + carKndChk_val+"&eqCdModify="+ ds_LCCEList.NameValue(ds_LCCEList.getRowPosition(),"eqCd")+"&deleteKndCd=B";
      tr_SaveCooperationCompanyContractEquipment.Action = "/tn.cs.vehclmgnt.SaveDirecMgntVehclCMD.do?"+param_str;
      tr_SaveCooperationCompanyContractEquipment.Post();
  } else if($c.win.confirm(MSG_CM_CRM_001)) {
      param_str="carKndCd=" + carKndChk_val+"&eqCdModify="+ ds_LCCEList.NameValue(ds_LCCEList.getRowPosition(),"eqCd")+"&deleteKndCd=B";
      tr_SaveCooperationCompanyContractEquipment.Action = "/tn.cs.vehclmgnt.SaveDirecMgntVehclCMD.do?"+param_str;
      tr_SaveCooperationCompanyContractEquipment.Post();
  }*/

  let conf = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (conf) {
    dma_search4.set("carKndCd", carKndChk_val);
    dma_search4.set("eqCdModify", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
    dma_search4.set("deleteKndCd", "B");
    $c.sbm.execute($p, sbm_saveCooperationCompanyContractEquipment);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_cancel = function () {
  // 취소 확인
  if (gr_LogisticsCooperationCompanyEquipmentList.getFocusedRowStatus() == "C") {
    ds_LCCEList.removeRow();
  } else {
    ds_LCCEList.undoAll();
  }

  //상태가 C인 애들 강제 삭제
  let rowCount = ds_LCCEList.getRowCount();
  for (let i = rowCount - 1; i >= 0; i--) {
    let status = ds_LCCEList.getRowStatus(i);
    if (status === "C") {
      ds_LCCEList.removeRow(i); // deleteRow 아님! removeRow 사용.
    }
  }
  if (ds_LCCEList.getTotalRow() == 0) {
    $c.gus.cfEnableObjects($p, [btn_new]);
    $c.gus.cfDisableObjects($p, [btn_update, btn_cancel, btn_save]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_new, btn_update]);
    $c.gus.cfDisableObjects($p, [btn_cancel, btn_save]);
  }
  $c.gus.cfDisableObjects($p, [tbl_info1, tbl_info2, tbl_info3]);
  btn_dupYn.hide();
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun != 1) {
    if (ed_reqMchtCd2_1.getReadOnly()) return;
  }
  switch (disGubun) {
    case 5:
      //본문 차량 - 소속협력업체              
      udc_reqMchtCd2_1.cfCommonPopUp(scwin.callBackCarKindInfo1, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearch, "협력업체조회,협력업체코드,협력업체명", null);
      break;
    case 6:
      // 본문 차량 -모델명조회
      udc_eqModelCd_1.cfCommonPopUp(scwin.callBackCarModel, pCode, pName, pClose, null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 800 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 원도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      // ,null                    
      // ,null                   
      // ,null                   
      // ,null                   
      // ,null                   
      // ,null
      // ,null
      // ,null                   
      // ,null                   
      // ,null                   
      // ,pAllSearch             
      // ,null  
      );
      break;
    case 8:
      // 본문 차량,중기 -정산협력업체
      pWhere = "01";
      udc_reqMchtCd1_1.cfCommonPopUp(scwin.callBackCarKindInfo2, pCode, pName, pClose, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, "F", "협력업체조회,협력업체코드,협력업체명", null);
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//본문 차량 - 소속협력업체 
scwin.callBackCarKindInfo1 = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    ed_reqMchtCd1_1.setValue(rtnList[0]);
    ed_reqMchtNm1_1.setValue(rtnList[1]);
    ed_reqMchtCd2_1.setValue(rtnList[0]);
    ed_reqMchtNm2_1.setValue(rtnList[1]);
    txt_owner_nm_1.setValue(rtnList[2]); // 대표자명
  }
};

// 본문 차량,중기 -정산협력업체
scwin.callBackCarKindInfo2 = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    ed_reqMchtCd1_1.setValue(rtnList[0]);
    ed_reqMchtNm1_1.setValue(rtnList[1]);
  }
};

// 본문 차량 -모델명조회
scwin.callBackCarModel = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    ed_eqModelCd_1.setValue(rtnList[0]); //  모델코드
    ed_eqModelNm_1.setValue(rtnList[1]); //  모델명
    //eqKndCd_1.setValue(rtnList[6]);         //  차량장비종류코드        
    ed_eqKndNm_1.setValue(rtnList[7]); //  차량종류명
    //eqNrmCd_1.setValue(rtnList[8]);         //  장비규격코드
    ed_eqNrmNm_1.setValue(rtnList[9]); //  장비규격명                       
  }
};

//-------------------------------------------------------------------------
// 팝업창 띄우기 (팝업선택 파라미터로 선택)
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  var pWhere = "";
  var kind_str = "";
  var kind_str1 = "";
  var kind_str2 = "";
  var carKndChk_val = "LV";
  switch (disGubun) {
    case 10:
      ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclNo", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo1") + ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo2") + ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo3") + ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo4"));
      kind_str = txt_em_vehclNm_1.getValue();
      if (kind_str == null || kind_str == "") {
        $c.win.alert($p, "차량번호를 입력해주세요");
        return;
      }
      dma_search3.set("vehclNo", kind_str); //차량번호
      dma_search3.set("returnVehclYn", "1"); //회수차량 구분
      dma_search3.set("gubun", "I"); //UTE 구분
      rtnCarInfoList = null;
      rtnPosnClsCd = "";
      $c.sbm.execute($p, sbm_retrieveCarDuplicationInfo);
      break;
    case 11:
      kind_str = txt_em_vehclNm_1.getValue().trim();
      if (kind_str == null || kind_str == "") {
        $c.win.alert($p, "차량번호를 입력해주세요");
        return;
      }
      dma_search3.set("vehclNo", kind_str); // 차량번호
      dma_search3.set("returnVehclYn", "1"); // 회수차량 구분
      dma_search3.set("gubun", "U"); // UTE 구분
      rtnCarInfoList = null;
      rtnPosnClsCd = "";
      $c.sbm.execute($p, sbm_retrieveCarDuplicationInfo);
      break;
    case 12:
      if (txt_deleteState_1.getValue() == "0") {
        kind_str = txt_em_vehclNm_1.getValue().trim();
        if (kind_str == null || kind_str == "") {
          $c.win.alert($p, "차량번호를 입력해주세요");
          return;
        }
        dma_search3.set("vehclNo", kind_str); // 차량번호
        dma_search3.set("returnVehclYn", "1"); // 회수차량 구분
        dma_search3.set("gubun", "U"); // UTE 구분
        rtnCarInfoList = null;
        rtnPosnClsCd = "";
        $c.sbm.execute($p, sbm_retrieveCarDuplicationInfo);
        break;
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 본문 차량 Default 값 처리 
//-------------------------------------------------------------------------
scwin.f_default_LV = function () {
  co_lc_jumso_1.setValue(lc_lobranCd.getValue()); // 계약점소
  co_lc_jumso_2.setValue(lc_lobranCd.getValue()); // 귀로차량소속 점소
  txt_owner_nm_1.setValue(""); // 대표자명 
  ed_eqModelCd_1.setValue(""); // 모델코드
  ed_eqModelNm_1.setValue(""); // 모델명
  txt_em_con_eqNo_1.setValue(""); // 장비코드
  txt_em_vehclNm_1.setValue(""); // 차량번호
  co_lc_actkind.setSelectedIndex(0); // 구동방식
  lc_sasiKind.setSelectedIndex(0); // 샤시종류
  co_lc_workterm.setSelectedIndex(0); // 작업구간
  co_lc_area1_1.setSelectedIndex(0); // 작업권역1
  co_lc_op190_1.setSelectedIndex(0); // 화물구분
  co_lc_mngKind_1.setSelectedIndex(0); // 관리구분
  txt_driver_1.setValue(""); // 차량기사
  txt_driver_hptel_1.setValue(""); // 기사 휴대전화
  txt_trsNo_1.setValue(""); // TRS 번호
  txt_carIdCard_1.setValue(""); // 차량아이디카드
  co_lc_posnClsCd_1.setValue("Y");
  lc_realYn.setValue("1");
  txt_lbsYn.setValue("1");
  txt_maxShipwgtVol.setValue("0");
  lc_dtgKnd.setValue("0");
  lc_prsnInfoYn.setValue("0");
};

//-------------------------------------------------------------------------
// 본문 차량- 화종구분 콤보 조회  **
//-------------------------------------------------------------------------
scwin.f_retrieveComboHwaKind = function (param1) {
  dma_comSearch.setEmptyValue();
  dma_comSearch.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_comSearch.set("queryId", "retrivecComboHwaKindList");
  dma_comSearch.set("param1", param1);
  $c.sbm.execute($p, sbm_comSearch).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    dlt_gauceUtil_lc_hwajong1Cd.setJSON(e.responseJSON.GAUCE);
    // lc_hwajong1Cd.setNodeSet("data:dlt_gauceUtil_lc_hwajong1Cd", "name", "code");
    // lc_hwajong2Cd.setNodeSet("data:dlt_gauceUtil_lc_hwajong1Cd", "name", "code");
  });
};

//-------------------------------------------------------------------------
// 본문 차량- 화종구분 콤보 : 화물구분이 컨테이너일때 화종구분 기타로 Set **
//-------------------------------------------------------------------------
scwin.f_retrieveComboHwaKind_C = function () {
  /* 적용 X 
  ds_combo_hwaKind.ClearData();
  ds_combo_hwaKind2.ClearData();
     ds_combo_hwaKind.InsertRow(1);
  // ds_combo_hwaKind.NameValue(1,"name") = "기타";
  // ds_combo_hwaKind.NameValue(1,"code") = "0018";
  ds_combo_hwaKind.setSelectedIndex(0);
  ds_combo_hwaKind2.InsertRow(1);
  // ds_combo_hwaKind2.NameValue(1,"name") = "기타";
  // ds_combo_hwaKind2.NameValue(1,"code") = "0018";
  ds_combo_hwaKind2.setSelectedIndex(0);    */
};

//----------------------------------------------------------------------------
// 본문 차량일때 차량번호 입력하고 벗어날때 처리 함수 
//----------------------------------------------------------------------------
scwin.f_vehckNmChk1 = function () {
  var oShortYn = "N";
  var vehclNo1_len = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo1").length;
  var vehclNo2_len = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo2").length;
  var vehclNo3_len = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo3").length;
  var vehclNo4_len = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo4").length;
  if (vehclNo1_len == 2 && vehclNo2_len == 2 && vehclNo3_len == 1 && vehclNo4_len == 4) {
    if (scwin.f_checkVehclNo() != true) {
      $c.win.alert($p, "차량번호는 한글2 + 숫자2 + 한글1 + 숫자4  형태로 입력하세요");
      return;
    } else {
      scwin.f_openPopUp(10, 'T');
      ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "vehclShortCd", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo4"));
      oShortYn = "Y";
    }
  }
};
scwin.f_checkVehclNo = function () {
  var checkFlag = true;
  var length = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo1").length;
  for (var i = 0; i < length; i++) {
    var ch = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo1").charAt(i).toUpperCase();
    var retCode = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo1").charCodeAt(i);
    retCode = parseInt(retCode);
    if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && (retCode > 255 || retCode < 0)) {
      checkFlag = true;
    } else {
      checkFlag = false;
      return checkFlag;
    }
  }
  length = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo2").length;
  for (var i = 0; i < length; i++) {
    ch = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo2").charAt(i).toUpperCase();
    retCode = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo2").charCodeAt(i);
    retCode = parseInt(retCode);
    if (ch >= "0" && ch <= "9") {
      checkFlag = true;
    } else {
      checkFlag = false;
      return checkFlag;
    }
  }
  length = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo3").length;
  for (var i = 0; i < length; i++) {
    ch = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo3").charAt(i).toUpperCase();
    retCode = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo3").charCodeAt(i);
    retCode = parseInt(retCode);
    if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && (retCode > 255 || retCode < 0)) {
      checkFlag = true;
    } else {
      checkFlag = false;
      return checkFlag;
    }
  }
  length = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo4").length;
  for (var i = 0; i < length; i++) {
    ch = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo4").charAt(i).toUpperCase();
    retCode = ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "vehclNo4").charCodeAt(i);
    retCode = parseInt(retCode);
    if (ch >= "0" && ch <= "9") {
      checkFlag = true;
    } else {
      checkFlag = false;
      return checkFlag;
    }
  }
  return checkFlag;
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieveCooperationCompanyEquipmentList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_LCCEList.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("귀로차량  정보"));
    $c.gus.cfEnableObjects($p, [btn_new]);
    $c.gus.cfDisableObjects($p, [btn_update, btn_cancel, btn_save]);
  } else {
    gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(0, 0);
    //ds_LCCEList.setRowPosition(0);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_new, btn_update]);
    $c.gus.cfDisableObjects($p, [btn_cancel, btn_save]);
  }

  //조회건수  표시 필드 초기화
  spn_totalRow.setValue(rowCnt);
  scwin.eventYn = true;
  if (rowCnt < scwin.oldCurPos) {
    scwin.oldCurPos = rowCnt;
  }
  setTimeout(function () {
    ds_LCCEList.undoAll();
    if ("Y" == scwin.newAddYn) {
      scwin.f_carGridAddrow();
    }
  }, 500);
};

//중복조회 완료
scwin.sbm_retrieveCarDuplicationInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_duplicationCarInfo.getTotalRow() != 0) {
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "insertKndCd") != "A") {
      ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "N");
      $c.win.alert($p, "이미 존재하는 차량번호입니다");
      return;
    }
    if (ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "insertKndCd") == "A") {
      $c.win.alert($p, "중복조회하여 저장하는 차량번호 입니다.");
      ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
      return;
    }
    ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
  } else {
    $c.win.alert($p, "입력가능한 신규 차량번호 입니다.");
    ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "workFlaga", "Y");
  }
};

//저장 완료
scwin.sbm_saveCooperationCompanyContractEquipment_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.oldCurPos = ds_LCCEList.getRowPosition();
  $c.gus.cfDisableObjects($p, [tbl_info1, tbl_info2, tbl_info3]);
  btn_dupYn.hide();
  scwin.f_retrieve();
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};

//전담화주 버튼 
scwin.btn_owner_onclick = function (e) {
  // 1. 현재 선택된 행의 데이터 가져오기
  var rowIdx = ds_LCCEList.getRowPosition();
  var rowData = ds_LCCEList.getRowJSON(rowIdx);

  // 2. 팝업으로 전달할 파라미터 설정
  var dataObj = {
    "eqCd": rowData.eqCd,
    "vehclNo": rowData.vehclNo,
    "assgnLobranNm": rowData.assgnLobranNm
  };
  let opts = {
    id: "smpPop",
    popupName: "전담화주관리",
    modal: false,
    type: "browserPopup",
    width: 420,
    height: 300,
    title: "전담화주관리"
  };
  let win_url = "/tn/cs/vehclmgnt/tn_101_02_01p.xml";
  $c.win.openPopup($p, win_url, opts, dataObj);
};

//신규 버튼
scwin.btn_new_onclick = function (e) {
  if (ds_LCCEList.getTotalRow() == 0) {
    scwin.newAddYn = "Y";
    scwin.f_retrieve();
  } else {
    scwin.f_carGridAddrow();
  }
};

//수정 버튼
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};

//취소 버튼
scwin.btn_cancel_onclick = function (e) {
  scwin.f_cancel();
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//소속협력업체 찾기 버튼
scwin.udc_reqMchtCd2_1_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_reqMchtCd2_1.getValue(), ed_reqMchtNm2_1.getValue(), 'F', 'F');
};
scwin.udc_reqMchtCd2_1_onblurCodeEvent = function (e) {
  if (ed_reqMchtCd2_1.getValue() != "") {
    scwin.f_openCommonPopUp(5, ed_reqMchtCd2_1.getValue(), ed_reqMchtNm2_1.getValue(), 'T', 'F');
  } else {
    ed_reqMchtNm2_1.setValue("");
  }
};

//정산협력업체 찾기 버튼
scwin.udc_reqMchtCd1_1_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_reqMchtCd1_1.getValue(), ed_reqMchtNm1_1.getValue(), 'F', 'F');
};
scwin.udc_reqMchtCd1_1_onblurCodeEvent = function (e) {
  if (ed_reqMchtCd1_1.getValue() != "") {
    scwin.f_openCommonPopUp(8, ed_reqMchtCd1_1.getValue(), ed_reqMchtNm1_1.getValue(), 'T', 'F');
  } else {
    ed_reqMchtNm1_1.setValue("");
  }
};

//모델명 찾기 버튼
scwin.udc_eqModelCd_1_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_eqModelCd_1.getValue(), ed_eqModelNm_1.getValue(), 'F', 'F');
};
scwin.udc_eqModelCd_1_onblurCodeEvent = function (e) {
  if (ed_eqModelCd_1.getValue() != "") {
    scwin.f_openCommonPopUp(6, ed_eqModelCd_1.getValue(), ed_eqModelNm_1.getValue(), 'T', 'F');
  } else {
    ed_eqModelNm_1.setValue("");
    ed_eqKndNm_1.setValue("");
    ed_eqNrmNm_1.setValue("");
  }
};

//차량/단축번호 blur > 차량번호 확인
scwin.lc_vehclNo_1_onblur = function (e) {
  scwin.f_vehckNmChk1();
};
scwin.ed_vehclNo2_onblur = function (e) {
  scwin.f_vehckNmChk1();
};
scwin.ed_vehclNo3_onblur = function (e) {
  scwin.f_vehckNmChk1();
};
scwin.ed_vehclNo4_onblur = function (e) {
  scwin.f_vehckNmChk1();
};

//중복 버튼
scwin.btn_dupYn_onclick = function (e) {
  scwin.f_openPopUp(10, 'T');
};

//그리드 row 변경 > 관련 계약 조회
scwin.gr_LogisticsCooperationCompanyEquipmentList_onrowindexchange = async function (rowIndex, oldRow) {
  if (!scwin.eventYn) return;
  var chgCount = 0;
  var chgRow = 0;
  for (var i = 0; i < ds_LCCEList.getTotalRow(); i++) {
    var curRowStatus = ds_LCCEList.getRowStatus(i);
    if (curRowStatus == "C" || curRowStatus == "U") {
      chgCount++;
      chgRow = i;
    }
  }
  if (chgCount > 0 && rowIndex != chgRow || $c.data.isModified($p, ds_saveEquipmentContract) || $c.data.isModified($p, ds_ep_insurance)) {
    let conf = await $c.win.confirm($p, "차량정보가 변경되었습니다. 저장하시겠습니까?");
    if (conf) {
      scwin.eventYn = false;
      ds_LCCEList.setRowPosition(chgRow);
      scwin.f_save(true);
      return;
    } else {
      scwin.f_cancel();
    }
  } else {
    $c.gus.cfDisableObjects($p, [tbl_info1, tbl_info2, tbl_info3]);
    btn_dupYn.hide();
  }
  scwin.f_LCCEListOnclick(rowIndex);
};

//화물구분 값 변경
scwin.co_lc_op190_1_onchange = function (info) {
  if (scwin.rFlag) {
    if (info.newValue == "B") {
      scwin.f_retrieveComboHwaKind("1"); // 화종구분 1, 화종구분2   값 Set
    } else if (info.newValue == "C") {
      //scwin.f_retrieveComboHwaKind_C();  // 화종구분 1, 화종구분2 기타만 Set
    }
  }
  scwin.f_districtSearchKind();
  scwin.rFlag = true;
};

//-------------------------------------------------------------------------
// 부산 권역콤보 선택
// 
//-------------------------------------------------------------------------
scwin.f_districtSearchKind = function () {
  // 웹스퀘어에서는 getValue() 또는 getBindValue()를 사용합니다.
  let jumso = co_lc_jumso_1.getValue();
  let op190 = co_lc_op190_1.getValue();
  let workterm = co_lc_workterm.getValue();
  if (jumso == "6AA" && op190 == "C") {
    if (workterm == "L") {
      scwin.f_districtSearch("L");
    } else if (workterm == "S") {
      scwin.f_districtSearch("M");
    } else {
      scwin.f_districtSearch("C");
    }
  } else {
    if (op190 == "B") {
      scwin.f_districtSearch("B");
    } else {
      scwin.f_districtSearch("C");
    }
  }
};

/**
 * 권역콤보 
 * gubun = L : 부산로컬권역, M : 부산매입권역, C : 복화작업권역, B : 벌크작업권역
 */
scwin.f_districtSearch = function (gubun) {
  if (scwin.oldDistrictKind === gubun) {
    return;
  } else {
    scwin.oldDistrictKind = gubun;
  }

  //신규 또는 수정 일때만 다시 셋팅
  if (btn_save.getDisabled()) {
    ds_lcAreaList.setJSON(ds_lcAreaList_ori.getAllJSON());
  } else {
    // 1. 구분값에 따른 파라미터 및 첫 항목 텍스트 설정
    switch (gubun) {
      case "L":
        paramValue = "PLO";
        ds_lcAreaList.setJSON(dlt_gauceUtil_PLOList.getAllJSON());
        break;
      case "M":
        paramValue = "PEX";
        ds_lcAreaList.setJSON(dlt_gauceUtil_PEXList.getAllJSON());
        break;
      case "C":
        paramValue = "CMP";
        ds_lcAreaList.setJSON(dlt_gauceUtil_CMPList.getAllJSON());
        break;
      case "B":
        paramValue = "BWK";
        ds_lcAreaList.setJSON(dlt_gauceUtil_BWKList.getAllJSON());
        break;
    }
  }
};

/**
 * 리스트 클릭(행 변경) 시 상세 내역 조회 및 UI 제어
 */
scwin.f_LCCEListOnclick = function (row) {
  btn_dupYn.hide();
  const rowCount = ds_LCCEList.getRowCount();
  if (rowCount === 0) {
    $c.gus.cfEnableObjects($p, [btn_new]);
    $c.gus.cfDisableObjects($p, [btn_update, btn_cancel, btn_save]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_new, btn_update]);
    $c.gus.cfDisableObjects($p, [btn_cancel, btn_save]);
  }
  gr_EquipmentContractList.setReadOnly(true); // Editable = false 대응
  gr_ep_insurance.setReadOnly(true);
  $c.gus.cfDisableKeyData($p);
  const eqCd = ds_LCCEList.getCellData(row, "eqCd");
  const clntNo = ds_LCCEList.getCellData(row, "clntNo");
  if (eqCd !== "") {
    ds_QueryCondition2.removeAll(); // ClearData 대응
    ds_saveEquipmentContract.removeAll();
    const condIdx = ds_QueryCondition2.insertRow();
    ds_QueryCondition2.setCellData(condIdx, "clntCd", clntNo);
    ds_QueryCondition2.setCellData(condIdx, "eqCd", eqCd);
    $c.sbm.execute($p, sbm_retrieveCooperationContract);
    ds_ep_insurance.removeAll();
    $c.sbm.execute($p, sbm_insurance);
  }
};
scwin.co_lc_jumso_1_onviewchange = function (info) {
  co_lc_jumso_2.setValue(info.newValue);
};
scwin.isChecking = false;
scwin.txt_driver_hptel_1_onviewchange = function (info) {
  if (scwin.isChecking) return;
  const val = this.getValue().trim();
  if (val === "") {
    scwin.isChecking = false;
    return;
  }
  scwin.isChecking = true;
  scwin.fn_formatPhone(this);
  setTimeout(function () {
    scwin.isChecking = false;
  }, 200);
};
scwin.txt_pdaNo_onviewchange = function (info) {
  if (scwin.isChecking) return;
  const val = this.getValue().trim();
  if (val === "") {
    scwin.isChecking = false;
    return;
  }
  scwin.isChecking = true;
  scwin.fn_formatPhone(this);
  setTimeout(function () {
    scwin.isChecking = false;
  }, 200);
};
/**
 * 전담화주관리 팝업 호출
 */
scwin.f_CarOwnerMgnt = async function () {
  // 1. 현재 선택된 행의 데이터 가져오기
  var rowIdx = ds_LCCEList.getRowPosition();
  var rowData = ds_LCCEList.getRowJSON(rowIdx);

  // 2. 팝업으로 전달할 파라미터 설정
  var dataObj = {
    "eqCd": rowData.eqCd,
    "vehclNo": rowData.vehclNo,
    "assgnLobranNm": rowData.assgnLobranNm
  };
  let opts = {
    id: "smpPop",
    popupName: "전담화주관리",
    modal: false,
    type: "browserPopup",
    width: 420,
    height: 300,
    title: "전담화주관리"
  };
  let win_url = "/tn/cs/vehclmgnt/tn_101_02_01p.xml";
  await $c.win.openPopup($p, win_url, opts, dataObj);
};
scwin.txt_carIdCard_1_onkeyup = function (e) {
  $c.gus.cfToUpper($p, this);
};
scwin.co_lc_area1_1_onchange = function (info) {
  //신규나 수정이 아닌경우 선택 된 목록을 강제 R로 변경
  const curRow = ds_LCCEList.getRowPosition();
  if (btn_save.getDisabled()) {
    ds_LCCEList.undoRow(curRow);
  }
};
scwin.fn_formatPhone = function (obj) {
  const originalVal = obj.getValue().trim();
  if (originalVal === "") {
    return true;
  }
  const isPureNumber = /^[0-9]+$/.test(originalVal);
  if (isPureNumber) {
    const len = originalVal.length;
    if (len === 11 || len === 10 || len === 9) {
      let formatted = "";
      if (originalVal.startsWith("02")) {
        if (len === 11 || len === 10) formatted = originalVal.substr(0, 2) + '-' + originalVal.substr(2, 4) + '-' + originalVal.substr(6, 4);else if (len === 9) formatted = originalVal.substr(0, 2) + '-' + originalVal.substr(2, 3) + '-' + originalVal.substr(5, 4);
      } else {
        if (len === 11) formatted = originalVal.substr(0, 3) + '-' + originalVal.substr(3, 4) + '-' + originalVal.substr(7, 4);else if (len === 10 || len === 9) formatted = originalVal.substr(0, 3) + '-' + originalVal.substr(3, 3) + '-' + originalVal.substr(6, 4);
      }
      if (obj.getValue() !== formatted) obj.setValue(formatted);
    } else {
      alert('전화번호 입력이 잘못되었습니다.');
      setTimeout(function () {
        obj.focus();
      }, 100);
      return false;
    }
  }
  const phonestr = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  if (!obj.getValue().match(phonestr)) {
    alert("번호 형식이 올바르지 않거나 '-'를 생략하셨습니다.");
    setTimeout(function () {
      obj.focus();
    }, 100);
    return false;
  }
  const areaCode = obj.getValue().substr(1, 2);
  const allowedCodes = ["10", "11", "13", "16", "17", "18", "19", "2-", "31", "32", "33", "41", "42", "43", "51", "52", "53", "54", "55", "61", "62", "63", "64"];
  if (!allowedCodes.includes(areaCode)) {
    alert("지역 번호를 정확하게 입력하십시오.");
    setTimeout(function () {
      obj.focus();
    }, 100);
    return false;
  }
  return true;
};
scwin.txt_pdaNo_onblur = function (e) {
  scwin.fn_formatPhone(this);
};
scwin.txt_driver_hptel_1_onblur = function (e) {
  scwin.fn_formatPhone(this);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배정점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',validExp:'배정점소:yes',searchTarget:'value',ref:'data:dma_search.ctrtBranCd',visibleRowNum:'25'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'data:dma_search.posnClsCd',sortOption:'value',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_conKnd',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.eqKndCd',sortOption:'value',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_con_eqNo',placeholder:'',style:'width:100px;',ref:'data:dma_search.eqCd',maxByteLength:'4'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_delYn',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.delYn',sortOption:'value',searchTarget:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'귀로공차 정보현황 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_LCCEList',style:'',autoFit:'allColumn',id:'gr_LogisticsCooperationCompanyEquipmentList',visibleRowNum:'20',class:'wq_gvw',readOnly:'true',focusMode:'both',rowStatusVisible:'true',rowStatusWidth:'20','ev:onrowindexchange':'scwin.gr_LogisticsCooperationCompanyEquipmentList_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'배정점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'귀로소속점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'귀로소속점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'소속협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'규격',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'assgnLobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'returnLobranCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'returnLobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'posnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'차량정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_info1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'pop_reqMchtCd2_1',style:'max-width:250px;',validExpCode:'협력업체:yes:string=8',mandatoryCode:'true',objTypeCode:'key',id:'udc_reqMchtCd2_1',codeId:'ed_reqMchtCd2_1',btnId:'btn_reqMchtCd2_1',nameId:'ed_reqMchtNm2_1',readOnlyName:'true',refDataCollection:'ds_LCCEList',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_reqMchtCd2_1_onclickEvent',selectID:'retrieveCarKindClntInfo_tpro','ev:onblurCodeEvent':'scwin.udc_reqMchtCd2_1_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'pop_reqMchtCd1_1',style:'max-width:250px;',btnId:'btn_reqMchtCd1_1',codeId:'ed_reqMchtCd1_1',id:'udc_reqMchtCd1_1',nameId:'ed_reqMchtNm1_1',readOnlyName:'true',validExpCode:'협력업체:yes:string=8',mandatoryCode:'true',objTypeCode:'key',refDataCollection:'ds_LCCEList',code:'logisHveqRepCopCoNo',name:'logisHveqRepCopCoNm','ev:onclickEvent':'scwin.udc_reqMchtCd1_1_onclickEvent',selectID:'retrieveCarKindClntInfo_tpro','ev:onblurCodeEvent':'scwin.udc_reqMchtCd1_1_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량/단축번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-2'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vehclNo_1',style:'width:100px;',submenuSize:'fixed',objType:'key',ref:'data:ds_LCCEList.vehclNo1','ev:onblur':'scwin.lc_vehclNo_1_onblur',emptyItem:'true'}},{T:1,N:'xf:input',A:{style:'width:55px;',id:'ed_vehclNo2',placeholder:'',class:'',ref:'data:ds_LCCEList.vehclNo2','ev:onblur':'scwin.ed_vehclNo2_onblur',maxlength:'2',allowChar:'0-9'}},{T:1,N:'xf:input',A:{style:'width:32px;',id:'ed_vehclNo3',placeholder:'',class:'',ref:'data:ds_LCCEList.vehclNo3','ev:onblur':'scwin.ed_vehclNo3_onblur',maxlength:'1',allowChar:'가-힣ㄱ-ㅎ'}},{T:1,N:'xf:input',A:{style:'width:55px;',id:'ed_vehclNo4',placeholder:'',class:'',ref:'data:ds_LCCEList.vehclNo4','ev:onblur':'scwin.ed_vehclNo4_onblur',maxlength:'4',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:198px;',id:'txt_em_vehclNm_1',placeholder:'',class:'',maxlength:'15',mandatory:'true',ref:'data:ds_LCCEList.vehclNo',objType:'key'}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'txt_vehclShortCd_1',placeholder:'',class:'',ref:'data:ds_LCCEList.vehclShortCd',objType:'key',validExp:'차량단축번호:yes:string=4',mandatory:'true',maxlength:'4',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_dupYn',label:'중복',style:'','ev:onclick':'scwin.btn_dupYn_onclick'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배정점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_jumso_1',search:'start',style:'width:170px;',submenuSize:'auto',mandatory:'true',objType:'key',ref:'data:ds_LCCEList.assgnLobranCd',emptyItem:'true','ev:onviewchange':'scwin.co_lc_jumso_1_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_owner_nm_1',placeholder:'',style:'width:150px;',readOnly:'false',ref:'data:ds_LCCEList.clntRepstNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_em_con_eqNo_1',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:ds_LCCEList.eqCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모델명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_eqModelCd_1',style:'width: 250px;',hideName:'N',UpperFlagCode:'1',objTypeCode:'key',mandatoryCode:'true',maxlengthCode:'8',btnId:'btn_eqModelCd_1',codeId:'ed_eqModelCd_1',nameId:'ed_eqModelNm_1',id:'udc_eqModelCd_1',code:'eqModelCd',name:'eqModelNm',refDataCollection:'ds_LCCEList',selectID:'retrieveCarModelCdInfo_tpro','ev:onclickEvent':'scwin.udc_eqModelCd_1_onclickEvent',readOnlyName:'true','ev:onblurCodeEvent':'scwin.udc_eqModelCd_1_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',validTitle:'모델명1'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_eqKndNm_1',placeholder:'',class:'',readOnly:'true',ref:'data:ds_LCCEList.eqKndNm'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_eqNrmNm_1',placeholder:'',class:'',ref:'data:ds_LCCEList.eqNrmNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구동방식',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_actkind',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_LCCEList.eqDriveWayCd',sortOption:'value',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sasiKind',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',allOption:'',chooseOptionLabel:'$blank',ref:'data:ds_LCCEList.lnkEqKndCd'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_op190_1',style:'width:150px;',submenuSize:'fixed',objType:'key',ref:'data:ds_LCCEList.cargoClsCd',sortOption:'value','ev:onchange':'scwin.co_lc_op190_1_onchange',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_area1_1',objType:'key',style:'width:150px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_LCCEList.logisWrkDistrictCd',chooseOptionLabel:'선택','ev:onchange':'scwin.co_lc_area1_1_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lcAreaList'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_workterm',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',objType:'key',ref:'data:ds_LCCEList.wrkDstCd',sortOption:'value',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_mngKind_1',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_LCCEList.logisHirecarMgntClsCd',sortOption:'value',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소유구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_posnClsCd_1',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_LCCEList.posnClsCd',sortOption:'value',emptyItem:'true',chooseOptionLabel:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결속장구',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrk_imple_nm',placeholder:'',style:'width:150px;',objType:'key',allowChar:'0-9A-Za-z',maxlength:'80'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선호화종1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_hwajong1Cd',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',chooseOptionLabel:'선택',ref:'data:ds_LCCEList.logisKcgClsCd1',displayMode:'label',visibleRowNum:'20',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호화종2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_hwajong2Cd',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_LCCEList.logisKcgClsCd2',displayMode:'label',visibleRowNum:'20',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_info2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량기사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_driver_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.logisVehclDrvNm1',maxlength:'14',mandatory:'true',displaymessage:'true',invalidMessage:'차량기사'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_driver_hptel_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.logisVehclDrv1MpNo',maxlength:'14',invalidMessage:'휴대전화',displaymessage:'true',mandatory:'true','ev:onblur':'scwin.txt_driver_hptel_1_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량아이디카드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_carIdCard_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.vehclIdCardNo',maxlength:'8','ev:onkeyup':'scwin.txt_carIdCard_1_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세운송기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'ds_LCCEList',refEdDt:'bondTransEndDt',refStDt:'bondTransStDt',style:'',edFromId:'ed_boseFromDate',edToId:'ed_boseToDate',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TRS 번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_trsNo_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.trsNo1',maxlength:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀로차량소속점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_jumso_2',search:'start',style:'width:170px;',submenuSize:'auto',searchTarget:'value',ref:'data:ds_LCCEList.returnLobranCd',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'txt_deleteState_1',ref:'data:ds_LCCEList.deleteState',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직영차량전환',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'txt_directMgntYn',ref:'data:ds_LCCEList.steelVehclYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전담화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_reqMchtNm2_2',placeholder:'',style:'',objType:'data',ref:'data:ds_LCCEList.fullchrgMchtNm'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량정보 공개 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_vehclOpentopblcYn',ref:'data:ds_LCCEList.vehclOpentopblcYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_info3',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LBS 관제여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'txt_lbsYn',ref:'data:ds_LCCEList.lbsYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최대적재량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_maxShipwgtVol',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.maxShipwgtVol',allowChar:'0-9',maxlength:'16',initValue:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'스마트폰번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_pdaNo',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.pdaNo',maxlength:'14','ev:onblur':'scwin.txt_pdaNo_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실제스마트폰',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_realYn',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_LCCEList.realPdaYn',displayMode:'label',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DTG번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_dtgNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'14',ref:'data:ds_LCCEList.dtgNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기록계구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtgKnd',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',displayMode:'label',chooseOptionLabel:'$blank',ref:'data:ds_LCCEList.dtgKnd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DTG'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종합단말기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개인정보동의',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_prsnInfoYn',mandatory:'true',objType:'key',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_LCCEList.prsnInfoYn',displayMode:'label',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동의일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'txt_prsnInfoDtm',pickerType:'dynamic',style:'',objType:'data',readOnly:'true',ref:'data:ds_LCCEList.prsnInfoDtm'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_owner',style:'display:none;',type:'button',userAuth:'C','ev:onclick':'scwin.btn_owner_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전담화주'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no',style:'display: none;'},E:[{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'w2:gridView',A:{dataDragSelectAutoScroll:'true',visibleRowNumFix:'true',checkAllType:'false',dataDragDrop:'true',dataList:'data:ds_saveEquipmentContract',dataDragSelect:'true',style:'',autoFit:'allColumn',id:'gr_EquipmentContractList',visibleRowNum:'3',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',id:'column17',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'계약순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'계약시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'계약종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'clntCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'ctrtSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'ctrtStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrPrtDd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payCond',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRowEqp',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'w2:gridView',A:{dataDragSelectAutoScroll:'true',visibleRowNumFix:'true',checkAllType:'false',dataDragDrop:'true',dataList:'data:ds_ep_insurance',dataDragSelect:'true',style:'',autoFit:'allColumn',id:'gr_ep_insurance',visibleRowNum:'3',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',id:'column17',value:'보험순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'보험사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'보험종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'보험시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'보험만기일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'보험한도금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'등록자ID',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'eqCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'insrSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'insrCoCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'insrKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'insrStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'insrEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'insrLimitAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regId',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRowIns',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})