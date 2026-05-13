/*amd /ui/tn/cs/vehclmgnt/tn_101_02_01b.xml 97134 3354dccf9224a892625ace15f2f1263af274d2de995603d287c94e99504f0995 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqClsCd',name:'차량구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'고객번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'소유구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtBranCd',name:'계약점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'direcMgntYn',name:'직영관리여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'회수차량여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullchrgMchtCd',name:'전담가맹점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullchrgMchtNm',name:'전담가맹점명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchEq'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchInsr'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'equipmentNumber',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchHist'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dupCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'회수차량여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_LCCEList',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:onbeforerowpositionchange':'scwin.ds_LCCEList_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteState',name:'승인상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysStDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm4',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysEndDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm1',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm2',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqChgDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsNm3',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgEndDt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'steelVehclYn',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitEmpNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqStsNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col26',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgKnd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullchrgMchtCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnVehclYn',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClsCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobileIndictYn',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd2',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnkEqKndCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnLobranNm',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkPlNm',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd1',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd2',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgStDt',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd3',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisKcgClsCd4',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmOfcNm',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workFlagb',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workFlaga',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpsTcrgYn',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbsYn',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqStsCd',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullchrgMchtNm',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlCd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclOpentopblcYn',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnLobranCd',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteKndCd',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmVehclCls',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclDirecMgntYn',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxShipwgtVol',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkPlCd',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayCd',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoVehclRegAdmitDt',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCurWrkPlNm',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo4',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo3',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNo',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo2',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo1',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insertKndCd',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNm',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prsnInfoDtm',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prsnInfoYn',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHirecarMgntClsCd',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'direcMgntYn',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fleffcncy',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo1',name:'name104',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_SaveEquipmentContract',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSeq',name:'계약순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'계약점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtAmt',name:'계약금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payCond',name:'지급조건',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ep_insurance',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrCoCd',name:'보험회사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrKndCd',name:'보험종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrChrgLimitAmt',name:'책임한도금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'insrStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrEndDt',name:'종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_eqcdCtrtHistory',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'등록순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'운전자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPicNm',name:'계약담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accntPicNm',name:'정산자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'계약서(파일명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discrdYn',name:'불일치여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSiz',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmCoreCls',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discrdRsn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name27',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DuplicationCarInfo',baseNode:'list',saveRemovedData:'false',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소유구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comboReq'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_combo_lobran',baseNode:'list',saveRemovedData:'false',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_combo_carKnd',baseNode:'list',saveRemovedData:'false',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_combo_hwaKind',baseNode:'list',saveRemovedData:'false',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_combo_area',baseNode:'list',saveRemovedData:'false',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMain',action:'/ncall.tn.cs.vehclmgnt.RetrieveDirecMgntPrsCondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_LCCEList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_LCCEList","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_retrieveMain_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrt',action:'/ncall.tn.cs.vehclmgnt.RetrieveEqContractCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchEq","key":"IN_DS1"},{"id":"ds_SaveEquipmentContract","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SaveEquipmentContract","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous',processMsg:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveInsr',action:'/ncall.tn.cs.vehclmgnt.RetrieveEqInsrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchInsr","key":"IN_DS1"},{"id":"ds_ep_insurance","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ep_insurance","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous',processMsg:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveHist',action:'/ncall.tn.cs.vehclmgnt.RetrieveEqcdCtrtHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchHist","key":"IN_DS1"},{"id":"ds_eqcdCtrtHistory","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqcdCtrtHistory","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_retrieveHist_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_dupCheck',action:'/ncall.ds.op.rscconfirm.transrscconfirm.RetrieveCooperationCompanyEquipmentDuplicationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_dupCheck","key":"IN_DS1"},{"id":"ds_DuplicationCarInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_DuplicationCarInfo","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_dupCheck_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveAll',action:'/ncall.tn.cs.vehclmgnt.SaveDirecMgntVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_LCCEList","key":"IN_DS1"},{"action":"modified","id":"ds_SaveEquipmentContract","key":"IN_DS2"},{"action":"modified","id":"ds_ep_insurance","key":"IN_DS3"},{"action":"modified","id":"ds_eqcdCtrtHistory","key":"IN_DS4"},{"id":"ds_LCCEList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_LCCEList","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous',processMsg:'저장 중입니다...','ev:submitdone':'scwin.sbm_saveAll_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_comboLobran',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'synchronous',processMsg:'',ref:'data:json,[{"id":"dma_comboReq","key":"IN_DS1"},{"id":"ds_combo_lobran","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_combo_lobran","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_comboCarKnd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'synchronous',processMsg:'',ref:'data:json,dma_comboReq',target:'data:json,{"id":"ds_combo_carKnd","key":"GAUCE"}'}},{T:1,N:'xf:submission',A:{id:'sbm_comboHwaKind',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'synchronous',processMsg:'',ref:'data:json,[{"id":"dma_comboReq","key":"IN_DS1"},{"id":"ds_combo_hwaKind","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_combo_hwaKind","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_comboArea',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'synchronous',processMsg:'',ref:'data:json,dma_comboReq',target:'data:json,{"id":"ds_combo_area","key":"GAUCE"}','ev:submitdone':'scwin.sbm_comboArea_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//=============================================================================
// 1. 전역 변수 선언
//=============================================================================
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자
scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLoUpperLobranCd = "";
scwin.isRowChanging = false; // 행 변경 무한루프 방지 스위치

scwin.rowFlag = "";
scwin.oldDistrictKind = ""; // 권역 콤보 중복 조회 방지용
scwin.backupDistCd = "";
// 관리자(승인상태 제어 가능) 하드코딩 ID 리스트 
scwin.adminUsers = ["101384", "080953", "051390", "origin", "herekjs", "hpark", "110901", "050277", "121097", "073294", "281807", "111857", "131217", "170085", "223137", "223179", "233082", "233117"];

//=============================================================================
// 2. 화면 로딩 (초기화)
//=============================================================================
scwin.onpageload = function () {
  btn_owner.hide();
  // 세션 정보 가져오기
  let memJson = $c.data.getMemInfo($p);
  scwin.sUserId = memJson.userId || "";
  scwin.sUserClsCd = memJson.userClsCd || "";
  scwin.sClntNo = memJson.clntNo || "";
  scwin.sClntNm = memJson.clntNm || "";
  scwin.sLoUpperLobranCd = memJson.loUpperLobranCd || "";

  // 콤보박스 기초 데이터 세팅 (AS-IS의 f_RetrieveCombo...대체)
  scwin.f_setComboList();
};
scwin.f_setComboList = async function () {
  const codeOptions1 = [{
    grpCd: "ZZ203",
    compID: "acb_posnClsCd,acb_posnClsCd_1,gr_eqcdCtrtHistory:posnClsCd",
    opt: {
      "range": "2,Y"
    }
  },
  // 폼 소유구분
  {
    grpCd: "OP190",
    compID: "acb_lc_op190_1"
  },
  // 화물구분
  {
    grpCd: "ZZ307",
    compID: "acb_lc_workterm"
  },
  // 작업구간
  {
    grpCd: "OP515",
    compID: "acb_prsnInfoYn"
  },
  // 개인정보동의
  {
    grpCd: "OP569",
    compID: "acb_vehclNo_1"
  }];
  $c.data.setCommonCode($p, codeOptions1, scwin.callBackSetCommonCode);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lc_logisticsBranch,acb_jumso_1"
  }];
  $c.data.setGauceUtil($p, codeOptions2, scwin.onLoadCommonCode);
  const codeOptions3 = [{
    method: "getLuxeComboData",
    param1: "CommEBC",
    param2: "retrieveEachLevelCommodityList",
    param3: ["2"],
    compID: "acb_hwajong1Cd,acb_hwajong2Cd"
  }];
  $c.data.setGauceUtil($p, codeOptions3, scwin.onLoadCommonCode);
  dma_comboReq.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_comboReq.set("queryId", "retriveCarKindCodeListCombo");
  $c.sbm.execute($p, sbm_comboCarKnd);
};
scwin.callBackSetCommonCode = function () {
  acb_vehclNo_1.setValue("");
};
scwin.onLoadCommonCode = function () {
  // acb_jumso_1.setValue("2AA");
  // 버튼 초기 제어
  $c.gus.cfDisableBtnOnly($p, [btn_update, b_cancel, btn_save, btn_owner, btn_addrowEqcdCtrtHistory]);
  $c.gus.cfEnableBtnOnly($p, [btn_cancelHistory, btn_new, btn_delete]);
  $c.gus.cfDisableObjects($p, [equipTable]);

  // 파라미터 수신 및 자동 조회
  let paramLobran = $p.getParameter("lobranCd");
  if (paramLobran) {
    acb_lc_logisticsBranch.setValue(paramLobran);
    ed_con_eqNo.setValue($p.getParameter("vehclNo"));
    scwin.f_Retrieve();
  } else {
    // 로그인 부서 기본 세팅
    if (scwin.sLoUpperLobranCd == "4AA") acb_lc_logisticsBranch.setValue("4C01");else if (scwin.sLoUpperLobranCd == "4BB") acb_lc_logisticsBranch.setValue("4C02");else if (scwin.sLoUpperLobranCd == "5AA") acb_lc_logisticsBranch.setValue("5C08");else acb_lc_logisticsBranch.setValue(scwin.sLoUpperLobranCd);
  }
};

//=============================================================================
// 3. 조회 Operation
//=============================================================================
scwin.btn_retrieve_onclick = function () {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tbl_search]))) return;
  scwin.isRowChanging = true; // 조회 전 스위치 ON (이벤트 방지)
  btn_clnt_search.hide();
  ds_LCCEList.removeAll();
  ds_SaveEquipmentContract.removeAll();
  ds_ep_insurance.removeAll();
  ds_eqcdCtrtHistory.removeAll();
  dma_search.setJSON({
    "returnVehclYn": "0",
    "eqClsCd": "LV",
    "eqKndCd": acb_con_knd.getValue(),
    "ctrtBranCd": acb_lc_logisticsBranch.getValue(),
    "posnClsCd": acb_posnClsCd.getValue(),
    "delYn": acb_direc_mgnt_yn.getValue(),
    "direcMgntYn": "1",
    // AS-IS 로직 고정
    "eqCd": ed_con_eqNo.getValue()
  });
  if (acb_lc_logisticsBranch.getValue() == "") {
    $c.win.alert($p, "배정점소를 선택해 주십시오.");
    return;
  }
  $c.sbm.execute($p, sbm_retrieveMain);
};
scwin.sbm_retrieveMain_submitdone = function (e) {
  scwin.isRowChanging = false;
  let rowCnt = ds_LCCEList.getRowCount();
  totalRows.setValue(rowCnt);
  scwin.rawDistrictData = [];
  if (e.responseJSON && e.responseJSON.OUT_DS1) {
    // DB에서 가져온 진짜 작업권역 값들을 배열로 백업
    scwin.rawDistrictData = e.responseJSON.OUT_DS1.map(function (row) {
      return row.logisWrkDistrictCd;
    });
  }
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    $c.gus.cfEnableBtnOnly($p, [btn_new]);
    $c.gus.cfDisableBtnOnly($p, [btn_update, b_cancel, btn_save, btn_owner, btn_delete]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_new, btn_update, btn_owner, btn_delete, btn_cancelHistory]);
    $c.gus.cfDisableBtnOnly($p, [b_cancel, btn_save]);
  }
  // 첫 행 포커스
  if (rowCnt > 0) {
    gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(0, 0);
  }
};

//=============================================================================
// 4. 행 이동 제어 (마스터-디테일)
//=============================================================================
scwin.gr_LogisticsCooperationCompanyEquipmentList_onbeforerowpositionchange = function (info) {
  if (scwin.isRowChanging) return true;
  let isModified = false;

  // 메인 그리드는 '이전 행'이 수정되었는지만 체크
  if (info.oldRowIndex >= 0) {
    let rowStatus = ds_LCCEList.getRowStatus(info.oldRowIndex);
    if (rowStatus == "U" || rowStatus == "C" || rowStatus == "D") {
      isModified = true;
    }
  }
  if (isModified && info.newRowIndex != info.oldRowIndex) {
    scwin.f_checkRowChangeAsync(info);
    return false; // 일단 멈춤
  }
  return true;
};
scwin.f_checkRowChangeAsync = async function (info) {
  let ret = await $c.win.confirm($p, "차량정보가 변경되었습니다. 저장하시겠습니까?");
  if (ret) {
    scwin.rowFlag = "SAVE";
    ds_LCCEList.setRowPosition(info.oldRowIndex); // 기존 행으로 돌려놓고 저장
    scwin.f_Save(true);
  } else {
    scwin.isRowChanging = true; // 무한루프 방지 락 ON

    let rowStatus = ds_LCCEList.getRowStatus(info.oldRowIndex);
    let targetRow = info.newRowIndex;
    if (rowStatus === "C") {
      if (info.oldRowIndex < info.newRowIndex) {
        targetRow = targetRow - 1;
      }
      ds_LCCEList.removeRow(info.oldRowIndex);
    } else {
      ds_LCCEList.undoRow(info.oldRowIndex);
    }
    ds_SaveEquipmentContract.removeAll();
    ds_ep_insurance.removeAll();
    ds_eqcdCtrtHistory.removeAll();
    ds_LCCEList.setRowPosition(targetRow);
    scwin.isRowChanging = false;
    scwin.gr_LogisticsCooperationCompanyEquipmentList_onrowpositionchange(targetRow);
  }
};
scwin.gr_LogisticsCooperationCompanyEquipmentList_onrowpositionchange = function (info) {
  let row = info;
  if (row < 0 || scwin.isRowChanging) return;
  let eqCd = ds_LCCEList.getCellData(row, "eqCd");
  if (eqCd != "") {
    // 서브 데이터 조회 (XML에 서브미션 설정된 값만)
    dma_searchEq.setJSON({
      "clntCd": ds_LCCEList.getCellData(row, "clntNo"),
      "eqCd": eqCd
    });
    $c.sbm.execute($p, sbm_retrieveCtrt);
    dma_searchInsr.set("equipmentNumber", eqCd);
    $c.sbm.execute($p, sbm_retrieveInsr);
    dma_searchHist.set("eqCd", eqCd);
    $c.sbm.execute($p, sbm_retrieveHist);
  }
  scwin.f_districtSearchKind();
};

//=============================================================================
// 5. 동적 콤보박스 (권역, 화종 연쇄 로직)
//=============================================================================
scwin.acb_lc_op190_1_onviewchange = function (info) {
  let cargoCls = info.newValue;
  if (cargoCls == "B") {
    // 벌크일 때
    dma_comboReq.setJSON({
      "sysCd": "CooperationCompanyEquipmentEBC",
      "queryId": "retrivecComboHwaKindList",
      "param1": "1"
    });
    $c.sbm.execute($p, sbm_comboHwaKind);
  } else if (cargoCls == "C") {
    // 컨테이너일 때
    // 컨테이너는 기타(0018)만 나오게 직접 세팅
    ds_combo_hwaKind.setJSON([{
      "code": "0018",
      "name": "기타"
    }]);
  }

  // 권역 갱신 호출
  scwin.f_districtSearchKind();
};
scwin.acb_lc_workterm_onviewchange = function (info) {
  scwin.f_districtSearchKind();
};
scwin.acb_jumso_1_onviewchange = function (info) {
  scwin.f_districtSearchKind();
};
scwin.f_districtSearchKind = function () {
  let row = ds_LCCEList.getRowPosition();
  if (row < 0) return;
  let jumso = ds_LCCEList.getCellData(row, "assgnLobranCd"); // 배정점소
  let cargoCls = ds_LCCEList.getCellData(row, "cargoClsCd"); // 화물구분
  let workTerm = ds_LCCEList.getCellData(row, "wrkDstCd"); // 작업구간

  if (jumso == "6AA" && cargoCls == "C") {
    if (workTerm == "L") scwin.f_districtSearch("L");else if (workTerm == "S") scwin.f_districtSearch("M");else scwin.f_districtSearch("C");
  } else {
    if (cargoCls == "B") scwin.f_districtSearch("B");else scwin.f_districtSearch("C");
  }
};
scwin.f_districtSearch = async function (gubun) {
  if (scwin.oldDistrictKind == gubun) {
    scwin.f_districtSearchCallBack();
    return;
  }

  // 통신 타면서 콤보박스가 리렌더링 될 때 데이터셋 원본을 날리므로,
  // 통신하기 전에 원본 데이터를 안전한 전역 변수에 미리 백업
  let idx = ds_LCCEList.getRowPosition();
  if (idx >= 0) {
    scwin.backupDistCd = ds_LCCEList.getCellData(idx, "logisWrkDistrictCd");
  }
  let searchCd = gubun == "L" ? "PLO" : gubun == "M" ? "PEX" : gubun == "B" ? "BWK" : "CMP";
  const vCBData = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [searchCd],
    compID: "acb_lc_area1_1"
  }];
  scwin.oldDistrictKind = gubun;
  await $c.data.setGauceUtil($p, vCBData, scwin.f_districtSearchCallBack);
};
scwin.f_districtSearchCallBack = function () {
  var idx = ds_LCCEList.getRowPosition();
  if (idx < 0) return;
  let distCd = "";
  if (scwin.rawDistrictData && scwin.rawDistrictData[idx] != null) {
    distCd = scwin.rawDistrictData[idx];
    scwin.rawDistrictData[idx] = null;
  } else {
    distCd = ds_LCCEList.getCellData(idx, "logisWrkDistrictCd");
  }
  //처음에 데이터 없어서 작업권역 매핑 안되는 문제 해결
  let retryCount = 0;
  let stalkerTimer = setInterval(function () {
    if (acb_lc_area1_1.getItemCount() > 0 || retryCount > 20) {
      clearInterval(stalkerTimer);
      ds_LCCEList.setCellData(idx, "logisWrkDistrictCd", distCd);
      acb_lc_area1_1.setValue(distCd);
      let curStatus = ds_LCCEList.getRowStatus(idx);
      if (curStatus === "U") {
        ds_LCCEList.modifyRowStatus(idx, "R");
      }
    }
    retryCount++;
  }, 100);
};
//=============================================================================
// 6. 신규 / 취소 / 삭제
//=============================================================================
scwin.btn_new_onclick = function () {
  scwin.f_CarGridAddrow();
};

//-------------------------------------------------------------------------
//  신규버튼
//-------------------------------------------------------------------------
scwin.f_CarGridAddrow = async function () {
  // 1. 방어 로직 (수정 중인지 확인)
  let isMainMod = ds_LCCEList.getRowStatus(ds_LCCEList.getRowPosition()) == "U";
  let isSubMod = ds_eqcdCtrtHistory.getModifiedIndex().length > 0 || ds_SaveEquipmentContract.getModifiedIndex().length > 0 || ds_ep_insurance.getModifiedIndex().length > 0;
  if (isMainMod || isSubMod) {
    let ret = await $c.win.confirm($p, "차량정보가 변경되었습니다. 저장하시겠습니까?");
    if (ret) {
      scwin.f_Save(true);
    } else {
      scwin.f_Cancel();
    }
    return;
  }

  // 2. 이벤트 락 & 락 해제
  scwin.isRowChanging = true;
  $c.gus.cfEnableObjects($p, [equipTable]);
  var carKndChk_val = "LV";

  // 3. 서브 데이터 비우기
  ds_SaveEquipmentContract.removeAll();
  ds_ep_insurance.removeAll();
  ds_eqcdCtrtHistory.removeAll();

  // 4. 계약자 정보 가져오기 (행 추가 전에 미리 뽑아두기)
  var curRow = ds_LCCEList.getRowPosition();
  var clntNo = curRow >= 0 ? ds_LCCEList.getCellData(curRow, "clntNo") : "";
  var clntNm = curRow >= 0 ? ds_LCCEList.getCellData(curRow, "clntNm") : "";
  var prevCargoCls = curRow >= 0 ? ds_LCCEList.getCellData(curRow, "cargoClsCd") : "C";
  var insertIdx = ds_LCCEList.getRowCount();
  var newRow = await ds_LCCEList.insertRow(insertIdx);
  ds_LCCEList.setRowPosition(newRow);
  setTimeout(function () {
    var lastIdx = ds_LCCEList.getRowCount() - 1;
    gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(lastIdx, 'assgnLobranNm');
  }, 100);

  // 7. 기본값 세팅
  ds_LCCEList.setRowJSON(newRow, {
    "eqClsCd": carKndChk_val,
    "assgnLobranCd": acb_lc_logisticsBranch.getValue(),
    "clntNo": clntNo,
    "clntNm": clntNm,
    "logisHveqRepCopCoNo": clntNo,
    "logisHveqRepCopCoNm": clntNm,
    "vehclDirecMgntYn": "1",
    "returnVehclYn": "0",
    "steelVehclYn": "0",
    "realPdaYn": "1",
    "mbssysVehclYn": "1",
    "lbsYn": "1",
    "cargoClsCd": prevCargoCls,
    "deleteState": "2",
    "workFlaga": "N",
    "dtgKnd": '0',
    "prsnInfoYn": '0',
    "cargoClsCd": 'B'
  }, true);

  // 8. 콤보 초기화 및 기본값 함수 호출
  acb_vehclNo_1.setSelectedIndex(0);
  scwin.f_default_LV();

  // 9. UI 제어
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [b_cancel, btn_save, btn_addrowEqcdCtrtHistory, btn_cancelHistory]);
  $c.gus.cfDisableBtnOnly($p, [btn_new, btn_update]);
  rd_vehclOpentopblcYn.setValue(0);
  ed_maxShipwgtVol.setValue(0);
  $c.gus.cfEnableObjects($p, [acb_vehclNo_1, ed_vehclNo_2, ed_vehclNo_3, ed_vehclNo_4, acb_jumso_1]);
  // 권한에 따른 승인여부 셀렉트박스 제어
  if (scwin.adminUsers.includes(scwin.sUserId)) {
    acb_deleteState_1.setDisabled(false);
  } else {
    acb_deleteState_1.setDisabled(true);
  }
  $c.gus.cfDisableObjects($p, [ed_eqKndCd_1, ed_eqNrmCd_1, txt_ed_eqModelNm_1, ed_clntNm, ed_em_vehclNm_1, txt_ed_reqMchtNm1_1, ed_reqMchtNm2_2]);
  if (typeof btn_clnt_search !== "undefined") {
    btn_clnt_search.show("");
  }

  // 2. 이벤트 락 & 락 해제
  scwin.isRowChanging = false;
};
scwin.f_default_LV = function () {
  let row = ds_LCCEList.getRowPosition();
  if (row < 0) return;

  // 1. 데이터셋을 통한 기본값 세팅 (바인딩된 UI는 자동으로 바뀜)
  ds_LCCEList.setRowJSON(row, {
    "assgnLobranCd": acb_lc_logisticsBranch.getValue(),
    // 계약점소
    "eqModelCd": "",
    // 모델코드
    "eqModelNm": "",
    // 모델명
    "vehclNo": "",
    // 차량번호
    "wrkDstCd": "J",
    // 작업구간 
    "logisWrkDistrictCd": "",
    // 작업권역
    "logisVehclDrvNm1": "",
    // 차량기사
    "logisVehclDrv1MpNo": "",
    // 기사 휴대전화
    "trsNo1": "",
    // TRS 번호
    "vehclIdCardNo": "",
    // 차량아이디카드
    "posnClsCd": "Y",
    // 소유구분
    "realPdaYn": "1" // 실제스마트폰여부
  }, true);

  // 2. 데이터셋 바인딩 안 된 순수 UI 컴포넌트 제어 (필요시)
  // 예: acb_lc_area1_1.setSelectedIndex(0); 

  // 3. 권역 갱신 호출 (AS-IS 로직 유지)
  scwin.f_districtSearchKind();
};
scwin.b_cancel_onclick = function () {
  scwin.f_Cancel();
};
scwin.f_Cancel = function () {
  let curRow = ds_LCCEList.getRowPosition();
  if (curRow >= 0 && ds_LCCEList.getRowStatus(curRow) === "C") {
    ds_LCCEList.removeRow(curRow);
  }
  ds_LCCEList.undoAll();
  ds_eqcdCtrtHistory.undoAll();
  setTimeout(function () {
    let mainCnt = ds_LCCEList.getRowCount();
    for (let i = 0; i < mainCnt; i++) {
      if (ds_LCCEList.getRowStatus(i) !== "R") {
        ds_LCCEList.modifyRowStatus(i, "R");
      }
    }
    let subCnt = ds_eqcdCtrtHistory.getRowCount();
    for (let i = 0; i < subCnt; i++) {
      if (ds_eqcdCtrtHistory.getRowStatus(i) !== "R") {
        ds_eqcdCtrtHistory.modifyRowStatus(i, "R");
      }
    }
  }, 50);
  btn_clnt_search.hide();
  if (ds_LCCEList.getRowCount() == 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_new, btn_delete]);
    $c.gus.cfDisableBtnOnly($p, [btn_update, b_cancel, btn_save]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_addrowEqcdCtrtHistory]);
    $c.gus.cfEnableBtnOnly($p, [btn_new, btn_update, btn_delete]);
    $c.gus.cfDisableBtnOnly($p, [b_cancel, btn_save]);
    $c.gus.cfDisableObjects($p, [equipTable]);
  }
  gr_LogisticsCooperationCompanyEquipmentList.setFocusedCell(0, 0);
};
scwin.btn_delete_onclick = function () {
  ds_LCCEList.setCellData(ds_LCCEList.getRowPosition(), "deleteState", "1");
};
scwin.btn_update_onclick = function () {
  $c.gus.cfEnableBtnOnly($p, [b_cancel, btn_save, btn_delete]);
  $c.gus.cfDisableBtnOnly($p, [btn_new, btn_update]);
  $c.gus.cfEnableObjects($p, [btn_cancelHistory, equipTable, btn_addrowEqcdCtrtHistory]);
  $c.gus.cfDisableObjects($p, [acb_vehclNo_1, ed_vehclNo_2, ed_vehclNo_3, ed_vehclNo_4, ed_em_vehclNm_1, acb_jumso_1, ed_clntNm, txt_ed_reqMchtNm1_1, txt_ed_eqModelNm_1, ed_eqKndCd_1, ed_eqNrmCd_1, ed_reqMchtNm2_2, acb_prsnInfoYn, ica_prsnInfoDtm]);
  // 권한에 따른 승인여부 셀렉트박스 제어
  if (scwin.adminUsers.includes(scwin.sUserId)) {
    acb_deleteState_1.setDisabled(false);
  } else {
    acb_deleteState_1.setDisabled(true);
  }
};

//=============================================================================
// 7. 계약이력 행추가 (서브 그리드)
//=============================================================================
scwin.btn_addrowEqcdCtrtHistory_onclick = function () {
  let row = ds_eqcdCtrtHistory.insertRow();
  ds_eqcdCtrtHistory.setCellData(row, "eqCd", ds_LCCEList.getCellData(ds_LCCEList.getRowPosition(), "eqCd"));
  ds_eqcdCtrtHistory.setCellData(row, "discrdYn", "0");
  ds_eqcdCtrtHistory.setCellData(row, "delYn", "0");
  ds_eqcdCtrtHistory.setRowPosition(row);
};

//=============================================================================
// 8. 저장 
//=============================================================================
scwin.btn_save_onclick = function () {
  scwin.f_Save(false);
};
scwin.f_Save = async function (isForce) {
  if (!(await $c.gus.cfValidate($p, [gr_LogisticsCooperationCompanyEquipmentList, gr_eqcdCtrtHistory]))) return;
  let mRow = ds_LCCEList.getRowPosition();
  let stateVal = ds_LCCEList.getRowStatus(mRow);
  if (acb_jumso_1.getValue() == "") {
    await $c.win.alert($p, "배정점소는 필수입니다.");
    acb_jumso_1.focus();
    return;
  }
  if (ed_clntNo.getValue() == "") {
    await $c.win.alert($p, "소속협력업체 필수입니다.");
    ed_clntNo.focus();
    return;
  }
  if (ed_em_vehclNm_1.getValue() == "") {
    await $c.win.alert($p, "차량번호 필수입니다.");
    await ed_em_vehclNm_1.focus();
    return;
  }
  if (ds_LCCEList.getCellData(mRow, "vehclShortCd") == "") {
    $c.win.alert($p, "차량단축번호 필수입니다.");
    ed_vehclShortCd_1.focus();
    return;
  }
  if (ds_LCCEList.getCellData(mRow, "eqModelCd") == "") {
    await $c.win.alert($p, "모델명 필수입니다.");
    ed_eqModelCd_1.focus();
    return;
  }
  if (ds_LCCEList.getCellData(mRow, "logisVehclDrvNm1") == "") {
    await $c.win.alert($p, "차량기사 필수입니다.");
    ed_driver_1.focus();
    return;
  }
  if (ds_LCCEList.getCellData(mRow, "logisVehclDrv1MpNo") == "") {
    await $c.win.alert($p, "휴대전화 필수입니다.");
    ed_driver_hptel_1.focus();
    return;
  }
  if (acb_posnClsCd_1.getValue() == "") {
    await $c.win.alert($p, "소유구분 필수입니다.");
    acb_posnClsCd_1.focus();
    return;
  }
  if (acb_lc_area1_1.getValue() == "") {
    await $c.win.alert($p, "작업권역 필수입니다.");
    acb_lc_area1_1.focus();
    return;
  }
  if (acb_lc_workterm.getValue() == "") {
    await $c.win.alert($p, "작업구간 필수입니다.");
    acb_lc_workterm.focus();
    return;
  }
  if (acb_hwajong1Cd.getValue() == "") {
    await $c.win.alert($p, "선호화종1 필수입니다.");
    acb_hwajong1Cd.focus();
    return;
  }

  // DTG 번호 체크
  let dtgKnd = acb_dtgKnd.getValue();
  if ((dtgKnd == "1" || dtgKnd == "2") && ed_dtgNo.getValue() == "") {
    await $c.win.alert($p, "DTG번호를 입력해 주십시오.");
    ed_dtgNo.focus();
    return;
  }

  // 보세운송기간 체크
  let boseFrom = ed_boseFromDate.getValue();
  let boseTo = ed_boseToDate.getValue();
  if (boseFrom != "" && boseTo != "" && boseFrom > boseTo) {
    await $c.win.alert($p, "보세운송기간 시작일자가 종료일자보다 클 수 없습니다.");
    return;
  }

  // LBS 관제차량 스마트폰 번호 필수 체크
  if (txt_lbsYn.getValue() == "1" && ed_pdaNo.getValue() == "") {
    await $c.win.alert($p, "LBS관제차량인 경우 스마트폰번호는 필수입력항목입니다.");
    ed_pdaNo.focus();
    return;
  }

  // 2. 중복체크 여부 검증

  let clntNoVal = ed_clntNo.getValue(); // 소속협력업체코드
  let reqMchtCdVal = ed_reqMchtCd1_1.getValue(); // 정산협력업체코드

  if (clntNoVal != "" && reqMchtCdVal != "" && clntNoVal !== reqMchtCdVal) {
    let warnMsg = "소속협력업체코드 [ " + clntNoVal + " ] 는 정산협력업체코드 [ " + reqMchtCdVal + " ] 와 다릅니다.\n" + " 정산협력업체코드는 실적발생시 통합매입의 매입거래처로 생성됩니다. \n" + " 정산협력업체코드 [ " + reqMchtCdVal + " ]로 매입정보를 생성하는 것이 맞으시면 계속 진행하시고,\n" + " 틀리면 수정하여 주십시오.";

    // AS-IS처럼 alert 띄우고 나서 '확인' 누르면 바로 밑으로 넘어가서 저장 프로세스 타게 둠!
    await $c.win.alert($p, warnMsg);
  }
  if (!(await $c.gus.cfValidate($p, [gr_eqcdCtrtHistory], null, true))) return false;

  // 3. 서브그리드(계약이력) 검증
  if (!scwin.f_CheckEqcdCtrtHistory()) return;
  scwin.isRowChanging = true;

  //업데이트행 & 승인완료건

  if (stateVal === "U" && acb_deleteState_1.getValue() === "0") {
    let fullNo = ed_em_vehclNm_1.getValue();
    dma_dupCheck.setJSON({
      "vehclNo": fullNo,
      "returnVehclYn": "0",
      "gubun": "U"
    });
    await $c.sbm.execute($p, sbm_dupCheck);
    if (ds_LCCEList.getCellData(mRow, "workFlaga") == "N") {
      return;
    }
  }
  scwin.fn_updateYn();

  //신규('C') 거나 중복체크 대상이 아닌 건은 다이렉트로 여기서 저장 
  if (isForce || (await $c.win.confirm($p, MSG_CM_CRM_001))) {
    scwin.f_executeSave();
  } else {
    scwin.isRowChanging = false;
  }

  // // 4. 저장 서브미션
  // if (isForce || await $c.win.confirm(MSG_CM_CRM_001)) {
  //     scwin.rowFlag = "SAVE";
  //     let mRow = ds_LCCEList.getRowPosition();
  //     let eqCd = ds_LCCEList.getCellData(mRow, "eqCd");

  //     let paramStr = "?carKndCd=LV&deleteKndCd=B&eqCdModify=" + eqCd;
  //     sbm_saveAll.action = "/ncall.tn.cs.vehclmgnt.SaveDirecMgntVehclCMD.do" + paramStr;

  //     $c.sbm.execute(sbm_saveAll);
  // }

  scwin.isRowChanging = false;
};
scwin.sbm_saveAll_submitdone = function (e) {
  ds_LCCEList.undoAll();
  ds_eqcdCtrtHistory.undoAll();
  scwin.rowFlag = "";
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.isRowChanging = false;
  scwin.f_Retrieve();
  $c.gus.cfDisableBtnOnly($p, [btn_update, b_cancel, btn_save, btn_owner, btn_addrowEqcdCtrtHistory]);
  $c.gus.cfEnableBtnOnly($p, [btn_new, btn_delete]);
  $c.gus.cfDisableObjects($p, [btn_cancelHistory, equipTable]);
};
scwin.f_CheckEqcdCtrtHistory = function () {
  let rowCnt = ds_eqcdCtrtHistory.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_eqcdCtrtHistory.getCellData(i, "discrdYn") == "1" && ds_eqcdCtrtHistory.getCellData(i, "discrdRsn") == "") {
      $c.win.alert($p, i + 1 + "번째 줄 불일치사유를 작성 해 주세요.");
      return false;
    }
    if (ds_eqcdCtrtHistory.getCellData(i, "adjmCoreCls") == "" && (acb_posnClsCd_1.getValue() == "Y" || acb_posnClsCd_1.getValue() == "Z")) {
      $c.win.alert($p, i + 1 + "번째 줄 정산주체를 선택 해 주세요.");
      return false;
    }
  }
  return true;
};
// 저장 직전에 데이터 변경 여부 확인해서 승인대기로 변경
scwin.fn_updateYn = function () {
  let curRow = ds_LCCEList.getRowPosition();
  if (curRow < 0) return;

  // 이미 삭제(1) 상태면 건드리지 않음
  if (ds_LCCEList.getCellData(curRow, "deleteState") === "1") return;

  // AS-IS 로직: 수정(U) 상태거나 하위 계약이력이 바뀌었으면 무조건 승인대기(2)
  if (ds_LCCEList.getRowStatus(curRow) === "U" || ds_eqcdCtrtHistory.getModifiedIndex().length > 0) {
    ds_LCCEList.setCellData(curRow, "deleteState", "2");
  }
};
scwin.txt_steelVehclYn_onviewchange = function (info) {
  if (info.newValue == "Y") {
    ed_reqMchtCd2_2.setValue("000012");
    ed_reqMchtNm2_2.setValue("동부제강");
  } else {
    ed_reqMchtCd2_2.setValue("");
    ed_reqMchtNm2_2.setValue("");
  }
};
scwin.sbm_dupCheck_submitdone = async function (e) {
  let mRow = ds_LCCEList.getRowPosition();
  let rowCnt = ds_DuplicationCarInfo.getRowCount();
  let gubun = dma_dupCheck.get("gubun");
  if (rowCnt == 0) {
    $c.win.alert($p, "입력 가능한 신규 차량번호 입니다.");
    ds_LCCEList.setCellData(mRow, "workFlaga", "Y"); // 저장 가능 플래그 승인
    if (gubun === "U") scwin.f_executeSave();
    return;
  }
  let rtnCarInfoList = "";
  let rtnPosnClsCd = "";

  // 중복된 차량의 상세 정보를 텍스트로 조립
  for (let i = 0; i < rowCnt; i++) {
    rtnCarInfoList = ""; // 마지막 행 정보 기준으로 셋팅하는 AS-IS 습성 반영
    rtnCarInfoList += "배정점소 : [" + ds_DuplicationCarInfo.getCellData(i, "assgnLobranCd") + "]" + ds_DuplicationCarInfo.getCellData(i, "assgnLobranNm") + "\n";
    rtnCarInfoList += "소유구분 : [" + ds_DuplicationCarInfo.getCellData(i, "posnClsCd") + "]" + ds_DuplicationCarInfo.getCellData(i, "posnClsNm") + "\n";
    rtnCarInfoList += "차량종류 : [" + ds_DuplicationCarInfo.getCellData(i, "eqKndCd") + "]" + ds_DuplicationCarInfo.getCellData(i, "eqKndNm") + "\n";
    rtnCarInfoList += "협력업체 : [" + ds_DuplicationCarInfo.getCellData(i, "clntNo") + "]" + ds_DuplicationCarInfo.getCellData(i, "clntNm") + "\n";
    rtnPosnClsCd = ds_DuplicationCarInfo.getCellData(i, "posnClsCd");
  }
  let insertKndCd = ds_LCCEList.getCellData(mRow, "insertKndCd");
  if (insertKndCd != "A") {
    if (rtnPosnClsCd != "Y") {
      $c.win.alert($p, rtnCarInfoList + "\n공통장비관리화면에서 조회하셔야 됩니다.");
      ds_LCCEList.setCellData(mRow, "workFlaga", "N");
      return;
    }
    $c.win.alert($p, "이미 존재하는 차량번호입니다");
    ds_LCCEList.setCellData(mRow, "workFlaga", "N"); // 저장 못하게 막음
    return;
  }
  if (insertKndCd == "A") {
    $c.win.alert($p, "중복조회하여 저장하는 차량번호 입니다.", async function () {
      let ret = await $c.win.confirm($p, " 저장하시겠습니까?");
      if (ret) {
        ds_LCCEList.setCellData(mRow, "workFlaga", "Y"); // 저장 가능 플래그 승인
        scwin.f_executeSave();
      } else {
        return;
      }
    });
    return;
  }
  ds_LCCEList.setCellData(mRow, "workFlaga", "Y");
};
scwin.f_executeSave = function () {
  scwin.rowFlag = "SAVE";
  let mRow = ds_LCCEList.getRowPosition();
  let eqCd = ds_LCCEList.getCellData(mRow, "eqCd");
  let paramStr = "?carKndCd=LV&deleteKndCd=B&eqCdModify=" + eqCd;
  sbm_saveAll.action = "/ncall.tn.cs.vehclmgnt.SaveDirecMgntVehclCMD.do" + paramStr;
  $c.sbm.execute($p, sbm_saveAll);
};
// 파일 다운로드 & 업로드
scwin.gr_eqcdCtrtHistory_oncelldblclick = function (row, col) {
  let colId = gr_eqcdCtrtHistory.getColumnID(col);
  if (colId == "fileNm") {
    let fileNm = ds_eqcdCtrtHistory.getCellData(row, "fileNm");
    if (fileNm != "") {
      let filePath = ds_eqcdCtrtHistory.getCellData(row, "filePath");
      if (filePath.trim() == "") {
        $c.win.alert($p, "파일이 등록되어 있지 않습니다.");
        return;
      } else {
        if (filePath.indexOf(".") > 0) {
          fileNm += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
          $c.gus.cfDownloadFile($p, fileNm, filePath);
        }
      }
    } else {
      scwin.f_fileSet(row);
    }
  }
};
//-------------------------------------------------------------------------
// 파일 첨부 팝업
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function (row) {
  var win_url = "/ui/tn/cs/clntmgnt/tn_200_01_01p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 950;
  opts.height = 400;
  opts.popupName = '첨부파일등록';
  var argObject = {
    fileName: ds_eqcdCtrtHistory.getCellData(row, "fileNm"),
    filePath: ds_eqcdCtrtHistory.getCellData(row, "filePath")
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, argObject);
  console.log("rtnList : ", rtnList);
  if (rtnList != null) {
    if (rtnList[0] != "" && rtnList[0] != "undefined") {
      ds_eqcdCtrtHistory.setCellData(row, "fileNm", rtnList[1]);
      ds_eqcdCtrtHistory.setCellData(row, "filePath", rtnList[0]);
      ds_eqcdCtrtHistory.setCellData(row, "fileSiz", rtnList[2]);
    }
  }
};
scwin.sbm_retrieveHist_submitdone = function (e) {
  // 1. 총 건수 세팅
  eqcdCtrtHistory_totalRows.setValue(ds_eqcdCtrtHistory.getRowCount());

  // 2. 전체 행 개수 가져오기
  let rowCnt = ds_eqcdCtrtHistory.getRowCount();
  ds_eqcdCtrtHistory.setBroadcast(false);

  // 3. for문으로 모든 행을 돌면서 검사
  for (let i = 0; i < rowCnt; i++) {
    // 데이터리스트에서 해당 행(i)의 값을 꺼냄
    let d = ds_eqcdCtrtHistory.getCellData(i, "drvNm") || "";
    let c = ds_eqcdCtrtHistory.getCellData(i, "ctrtPicNm") || "";
    let a = ds_eqcdCtrtHistory.getCellData(i, "accntPicNm") || "";

    // 조건에 맞춰 불일치여부(discrdYn) 세팅
    if (d === "" && c === "" && a === "") {
      ds_eqcdCtrtHistory.setCellData(i, "discrdYn", "0"); // 3개 다 빈칸이면 0(일치)
    } else if (d !== c || c !== a || d !== a) {
      ds_eqcdCtrtHistory.setCellData(i, "discrdYn", "1"); // 하나라도 다르면 1(불일치)
    } else {
      ds_eqcdCtrtHistory.setCellData(i, "discrdYn", "0"); // 모두 똑같으면 0(일치)
    }
    ds_eqcdCtrtHistory.modifyRowStatus(i, "R");
  }
  ds_eqcdCtrtHistory.setBroadcast(true, true);
};
scwin.sbm_comboArea_submitdone = function (e) {};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case '5':
      // [본문] 계약자(소속협력업체) 조회
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10" // AS-IS 컬럼 숨김 규격
      , null, null, null, null, null, null, pAllSearch, "협력업체조회,협력업체코드,협력업체명", null);
      break;
    case '6':
      // [본문] 차량종류(모델명) 조회
      // udc_eqModel : 모델명 전용 UDC
      udc_eqModel.cfCommonPopUp(scwin.udc_eqModel_callBackFunc, pCode, pName, pClose, null, null, null, null, null, '1200', '400' // 팝업 사이즈
      , null, null, null, pAllSearch, null);
      break;
    case '8':
      // [본문] 정산자 조회
      udc_reqMcht.cfCommonPopUp(scwin.udc_reqMcht_callBackFunc, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearch, "협력업체조회,협력업체코드,협력업체명");
      break;
  }
};

//=============================================================================
// 콜백 함수
//=============================================================================

// 1. 계약자 콜백 (disGubun 5번)
scwin.udc_clnt_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    let row = ds_LCCEList.getRowPosition();
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 명

    // AS-IS 로직: 계약자 선택 시 정산자도 자동 세팅
    ed_reqMchtCd1_1.setValue(rtnList[0]); // 코드
    txt_ed_reqMchtNm1_1.setValue(rtnList[1]); // 명
  }
};

// 2. 모델명 콜백 (disGubun 6번)
scwin.udc_eqModel_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    var rowIndex = ds_LCCEList.getRowPosition();
    if (rowIndex > -1) {
      ds_LCCEList.setRowJSON(rowIndex, {
        "eqModelCd": rtnList[0],
        // 모델코드
        "eqModelNm": rtnList[1],
        // 모델명
        "eqKndCd": rtnList[6],
        // 장비종류코드
        "eqKndNm": rtnList[7],
        // 장비종류명
        "eqNrmCd": rtnList[8],
        // 장비규격코드
        "eqNrmNm": rtnList[9] // 장비규격명
      }, true);
    }
  }
  ;
};

// 3. 정산자 콜백 (disGubun 8번)
scwin.udc_reqMcht_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    ed_reqMchtCd1_1.setValue(rtnList[0]); // 코드
    txt_ed_reqMchtNm1_1.setValue(rtnList[1]); // 명
  }
};
scwin.cancelrowEqcdCtrtHistory = function (e) {
  var idx = ds_eqcdCtrtHistory.getRowPosition();
  if (ds_eqcdCtrtHistory.getRowStatus(idx) == 'C') {
    ds_eqcdCtrtHistory.removeRow(idx);
    ds_eqcdCtrtHistory.setRowPosition(ds_eqcdCtrtHistory.getRowCount() - 1);
  }
};
scwin.gr_eqcdCtrtHistory_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 1. 정산주체(adjmCoreCls) 컬럼 클릭 시
  if (columnId == "adjmCoreCls") {
    var posnClsVal = acb_posnClsCd_1.getValue(); // 소유구분 콤보 값

    // 2. 장기용차(Y, Z)인 경우만 ReadOnly 해제
    if (posnClsVal == "Y" || posnClsVal == "Z") {
      gr_eqcdCtrtHistory.setCellReadOnly(rowIndex, "adjmCoreCls", false);
    } else {
      gr_eqcdCtrtHistory.setCellReadOnly(rowIndex, "adjmCoreCls", true);
      // (선택사항) 데이터도 초기화하고 싶으면 아래 코드 추가
      // ds_eqcdCtrtHistory.setCellData(row, "adjmCoreCls", "");
    }
  }
};
// 그리드 데이터 변경 후 이벤트
scwin.gr_eqcdCtrtHistory_onafteredit = function (row, col, value) {
  let colId = gr_eqcdCtrtHistory.getColumnID(col);

  // 이름 불일치 실시간 검증 로직 (일치: 0, 불일치: 1)
  if (colId == "drvNm" || colId == "ctrtPicNm" || colId == "accntPicNm") {
    let d = ds_eqcdCtrtHistory.getCellData(row, "drvNm") || "";
    let c = ds_eqcdCtrtHistory.getCellData(row, "ctrtPicNm") || "";
    let a = ds_eqcdCtrtHistory.getCellData(row, "accntPicNm") || "";
    if (d === "" && c === "" && a === "") {
      ds_eqcdCtrtHistory.setCellData(row, "discrdYn", "0");
    } else if (d !== c || c !== a || d !== a) {
      ds_eqcdCtrtHistory.setCellData(row, "discrdYn", "1");
    } else {
      ds_eqcdCtrtHistory.setCellData(row, "discrdYn", "0");
    }
  }
  // 날짜 역전 체크 로직
  if (colId == "ctrtEndDt") {
    let stDt = ds_eqcdCtrtHistory.getCellData(row, "ctrtStDt");
    let endDt = ds_eqcdCtrtHistory.getCellData(row, "ctrtEndDt");
    if (stDt != "" && endDt != "" && stDt > endDt) {
      $c.win.alert($p, "계약 시작일자가 종료일자보다 클 수 없습니다.");
      ds_eqcdCtrtHistory.setCellData(row, "ctrtStDt", "");
      ds_eqcdCtrtHistory.setCellData(row, "ctrtEndDt", "");
    }
  }
};

//=============================================================================
// 전담화주관리 팝업 호출
//=============================================================================
scwin.btn_owner_onclick = function (e) {
  let row = ds_LCCEList.getRowPosition();

  // 방어 로직: 선택된 차량(eqCd)이 없으면 튕겨내기
  if (row < 0 || ds_LCCEList.getCellData(row, "eqCd") === "") {
    $c.win.alert($p, "선택된 차량이 없습니다. 차량을 먼저 조회/선택해주세요.");
    return;
  }
  let eqCd = ds_LCCEList.getCellData(row, "eqCd");
  let vehclNo = ds_LCCEList.getCellData(row, "vehclNo");
  let assgnLobranNm = ds_LCCEList.getCellData(row, "assgnLobranNm");

  // 팝업으로 넘길 파라미터 
  let data = {
    eqCd: eqCd,
    vehclNo: vehclNo,
    assgnLobranNm: assgnLobranNm
  };

  // 팝업 옵션 (AS-IS 사이즈 420x300 반영)
  let opts = {
    id: "carOwnerMgntPop",
    popupName: "전담화주관리",
    modal: true,
    type: "browserPopup",
    // 프로젝트 표준에 따라 "pageFramePopup"으로 변경 가능
    width: 420,
    height: 300
  };

  // URL은 프로젝트 경로에 맞게 jsp -> xml로 변경
  $c.win.openPopup($p, "/ui/tn/cs/vehclmgnt/tn_101_02_01p.xml", opts, data);
};
scwin.ds_LCCEList_onbeforerowpositionchange = function (info) {
  scwin.gr_LogisticsCooperationCompanyEquipmentList_onbeforerowpositionchange(info);
};
//=============================================================================
// [버튼 onclick] 차량번호 중복체크 API 호출 전용
//=============================================================================
scwin.btn_clnt_search_onclick = function (e) {
  let mRow = ds_LCCEList.getRowPosition();
  if (mRow < 0) return;

  // 텍스트박스에 완성된 전체 차량번호 가져오기

  let fullVehclNo = ds_LCCEList.getCellData(mRow, "vehclNo1") + ds_LCCEList.getCellData(mRow, "vehclNo2") + ds_LCCEList.getCellData(mRow, "vehclNo3") + ds_LCCEList.getCellData(mRow, "vehclNo4");
  ds_LCCEList.setCellData(mRow, "vehclNo", fullVehclNo);
  ed_em_vehclNm_1.setValue(fullVehclNo);
  let fullNo = ed_em_vehclNm_1.getValue().trim();
  if (fullNo == "") {
    $c.win.alert($p, "차량번호를 입력해주세요");
    return;
  }
  ds_DuplicationCarInfo.removeAll();

  // API 파라미터 셋팅
  dma_dupCheck.setJSON({
    "vehclNo": fullNo,
    "returnVehclYn": "0",
    "gubun": "I"
  });
  $c.sbm.execute($p, sbm_dupCheck);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
};
//=============================================================================
// [텍스트박스 onblur] 차량번호 정규식 검사 및 단축번호 세팅 전용
//=============================================================================
scwin.f_CheckVehclNo = function () {
  let mRow = ds_LCCEList.getRowPosition();
  if (mRow < 0) return;
  let no1 = acb_vehclNo_1.getValue() || "";
  let no2 = ed_vehclNo_2.getValue() || "";
  let no3 = ed_vehclNo_3.getValue() || "";
  let no4 = ed_vehclNo_4.getValue() || "";
  if (no1.length == 2 && no2.length == 2 && no3.length == 1 && no4.length == 4) {
    let fullNo = no1 + no2 + no3 + no4;
    let regex = /^[가-힣]{2}[0-9]{2}[가-힣]{1}[0-9]{4}$/;
    if (!regex.test(fullNo)) {
      $c.win.alert($p, "차량번호는 한글2 + 숫자2 + 한글1 + 숫자4 형태로 입력하세요");
      return false;
    }
    ds_LCCEList.setCellData(mRow, "vehclShortCd", no4);
    ds_LCCEList.setCellData(mRow, "vehclNo", fullNo);
    ed_em_vehclNm_1.setValue(fullNo);
    return true;
  }
};

//=============================================================================
// [유틸] 전화번호 유효성 검사 
//=============================================================================
scwin.f_PhoneChk = async function (comp) {
  let val = comp.getValue();
  if (val === "") return true;

  // 1. 숫자만 있는지 체크 (AS-IS의 containsCharsOnly 역할)
  let isOnlyDigits = /^[0-9]+$/.test(val);
  if (isOnlyDigits) {
    let len = val.length;
    if (len === 11) {
      if (val.substring(0, 2) === '02') {
        val = val.substring(0, 2) + '-' + val.substring(2, 6) + '-' + val.substring(6, 10);
      } else {
        val = val.substring(0, 3) + '-' + val.substring(3, 7) + '-' + val.substring(7, 11);
      }
    } else if (len === 10) {
      if (val.substring(0, 2) === '02') {
        val = val.substring(0, 2) + '-' + val.substring(2, 6) + '-' + val.substring(6, 10);
      } else {
        val = val.substring(0, 3) + '-' + val.substring(3, 6) + '-' + val.substring(6, 10);
      }
    } else if (len === 9) {
      if (val.substring(0, 2) === '02') {
        val = val.substring(0, 2) + '-' + val.substring(2, 5) + '-' + val.substring(5, 9);
      } else {
        val = val.substring(0, 3) + '-' + val.substring(3, 6) + '-' + val.substring(6, 10);
      }
    } else {
      await $c.win.alert($p, "전화번호 입력이 잘못되었습니다.");
      comp.focus();
      return false;
    }
    comp.setValue(val);
  }

  // 포맷팅 된 값 다시 가져오기
  val = comp.getValue();

  // 2. 정규식 체크 (AS-IS와 동일)
  let phonestr = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  if (!phonestr.test(val)) {
    await $c.win.alert($p, "번호 형식이 올바르지 않거나 '-'를 생략하셨습니다.");
    comp.focus();
    return false;
  }

  // 3. 지역번호/통신사 식별번호 체크
  let str = val.substring(1, 3); // 010- 이면 '10' 추출, 02- 이면 '2-' 추출
  let validPrefixes = ["10", "11", "13", "16", "17", "18", "19", "2-", "31", "32", "33", "41", "42", "43", "51", "52", "53", "54", "55", "61", "62", "63", "64"];
  if (!validPrefixes.includes(str)) {
    await $c.win.alert($p, "지역 번호를 정확하게 입력하세요.");
    comp.focus();
    return false;
  }
  return true;
};

//=============================================================================
// [이벤트] 휴대전화 입력칸 빠져나갈 때
//=============================================================================
scwin.ed_driver_hptel_1_onblur = function (e) {
  scwin.f_PhoneChk(ed_driver_hptel_1);
};

//=============================================================================
// [이벤트] 스마트폰번호 입력칸 빠져나갈 때 (LBS 관제여부 연동)
//=============================================================================
scwin.ed_pdaNo_onblur = function (e) {
  let isValid = scwin.f_PhoneChk(ed_pdaNo);

  // 번호가 정상 입력됐으면 'LBS 관제여부' 체크박스 강제 ON
  if (isValid && ed_pdaNo.getValue() !== "") {
    txt_lbsYn.setValue("1");
  }
};
scwin.udc_reqMcht_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp('8', ed_reqMchtCd1_1.getValue(), '', 'T', 'T');
};
scwin.udc_reqMcht_onclickEvent = function (e) {
  scwin.f_openCommonPopUp('8', ed_reqMchtCd1_1.getValue(), '', 'T', 'T');
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp('5', ed_clntNo.getValue(), '', 'T', 'T');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp('5', ed_clntNo.getValue(), '', 'T', 'T');
};
scwin.udc_eqModel_onclickEvent = function (e) {
  var eqModelCd = ed_eqModelCd_1.getValue();
  if (eqModelCd.trim() === "") {
    // 연관된 차량 정보 필드 모두 초기화
    ed_eqModelCd_1.setValue("");
    txt_ed_eqModelNm_1.setValue("");
    ed_eqKndCd_1.setValue("");
    ed_eqNrmCd_1.setValue("");
  }
  scwin.f_openCommonPopUp('6', ed_eqModelCd_1.getValue(), '', 'T', 'T');
};
scwin.udc_eqModel_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp('6', ed_eqModelCd_1.getValue(), '', 'T', 'T');
};
scwin.udc_eqModel_onviewchangeCodeEvent = function (info) {
  var oldVal = (info.oldValue || "").trim();
  var newVal = (info.newValue || "").trim();
  if (oldVal !== "" && newVal === "") {
    // 연관된 차량 정보 필드 모두 초기화
    ed_eqModelCd_1.setValue("");
    txt_ed_eqModelNm_1.setValue("");
    ed_eqKndCd_1.setValue("");
    ed_eqNrmCd_1.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배정점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_logisticsBranch',search:'start',style:'width:200px;',submenuSize:'auto',visibleRowNum:'20',allOption:'',chooseOption:'',ref:'',disableEdit:'true',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_lobran'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',ref:'',emptyItem:'true',disableEdit:'true',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_knd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',sortOption:'value',disableEdit:'true',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_carKnd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_con_eqNo',placeholder:'',style:'width:100px;',maxlength:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_direc_mgnt_yn',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전담차량현황',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_LCCEList',id:'gr_LogisticsCooperationCompanyEquipmentList',style:'','ev:onrowindexchange':'scwin.gr_LogisticsCooperationCompanyEquipmentList_onrowpositionchange',rowStatusVisible:'true',fastScroll:'false',visibleRowNumFix:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',drawType:'native','ev:onviewchange':'scwin.gr_LogisticsCooperationCompanyEquipmentList_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'배정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계약자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'소유구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'장비종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'승인상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'deleteState',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'col'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'equipTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량/단축번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-2',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_vehclNo_1',search:'start',style:'width:59px;position:relative;',submenuSize:'auto',ref:'data:ds_LCCEList.vehclNo1',displayMode:'label',emptyItem:'true',delimiter:' ',visibleRowNum:'20'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo_2',placeholder:'',style:'width:50px;',ref:'data:ds_LCCEList.vehclNo2','ev:onblur':'scwin.f_CheckVehclNo',maxlength:'2'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo_3',placeholder:'',style:'width:30px;',ref:'data:ds_LCCEList.vehclNo3','ev:onblur':'scwin.f_CheckVehclNo',maxlength:'1'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo_4',placeholder:'',style:'width:50px;',ref:'data:ds_LCCEList.vehclNo4','ev:onblur':'scwin.f_CheckVehclNo',maxlength:'4'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_em_vehclNm_1',placeholder:'',style:'width:145px;',ref:'data:ds_LCCEList.vehclNo',maxlength:'15'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclShortCd_1',placeholder:'',style:'width:50px;',ref:'data:ds_LCCEList.vehclShortCd',maxlength:'4'}},{T:1,N:'w2:button',A:{style:'width:59px;height:20px;display:none;',id:'btn_clnt_search',label:'중복체크',class:'btn white','ev:onclick':'scwin.btn_clnt_search_onclick'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배정점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_jumso_1',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.assgnLobranCd',displayMode:'value delim label',emptyItem:'true',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_lobran'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',id:'udc_clnt',nameId:'ed_clntNm',popupID:'',style:'',selectID:'retrieveCarKindClntInfo_tpro','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',refDataCollection:'ds_LCCEList',code:'clntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'max-width:250px;',codeId:'ed_reqMchtCd1_1',nameId:'txt_ed_reqMchtNm1_1',id:'udc_reqMcht','ev:onclickEvent':'scwin.udc_reqMcht_onclickEvent',selectID:'retrieveCarKindClntInfo_tpro',refDataCollection:'ds_LCCEList',code:'logisHveqRepCopCoNo',name:'logisHveqRepCopCoNm','ev:onblurCodeEvent':'scwin.udc_reqMcht_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운전자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_driver_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.logisVehclDrvNm1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소유구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_posnClsCd_1',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.posnClsCd',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',codeId:'ed_eqModelCd_1',nameId:'txt_ed_eqModelNm_1',id:'udc_eqModel',selectID:'retrieveCarModelCdInfo_tpro','ev:onclickEvent':'scwin.udc_eqModel_onclickEvent',refDataCollection:'ds_LCCEList',code:'eqModelCd',name:'eqModelNm','ev:onblurCodeEvent':'scwin.udc_eqModel_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_eqModel_onviewchangeCodeEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqKndCd_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.eqKndNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmCd_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.eqNrmNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_op190_1',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.cargoClsCd',emptyItem:'true',sortMethod:'ascending',sortOption:'value'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_area1_1',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.logisWrkDistrictCd',allOption:'',chooseOption:'true',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LCCEList'},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:'logisWrkDistrictCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선호화종1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_hwajong1Cd',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_LCCEList.logisKcgClsCd1',chooseOption:'true',displayMode:'label',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호화종2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_hwajong2Cd',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_LCCEList.logisKcgClsCd2',chooseOption:'false',allOption:'true',displayMode:'label',visibleRowNum:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_workterm',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.wrkDstCd',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최대적재량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_maxShipwgtVol',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.maxShipwgtVol'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_driver_hptel_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.logisVehclDrv1MpNo','ev:onblur':'scwin.ed_driver_hptel_1_onblur',maxlength:'14'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'스마트폰번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_pdaNo',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.pdaNo','ev:onblur':'scwin.ed_pdaNo_onblur',maxlength:'14'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TRS 번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_trsNo_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.trsNo1',maxlength:'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량아이디카드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_carIdCard_1',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.vehclIdCardNo',maxlength:'8'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전담화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_reqMchtNm2_2',placeholder:'',style:'width:200px;',ref:'data:ds_LCCEList.fullchrgMchtNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세운송기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_boseFromDate',edToId:'ed_boseToDate'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_deleteState_1',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.deleteState',allOption:'',chooseOption:'',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량정보 공개 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_vehclOpentopblcYn',ref:'data:ds_LCCEList.vehclOpentopblcYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LBS 관제여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'txt_lbsYn',ref:'data:ds_LCCEList.lbsYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실제스마트폰',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_realPdaYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.realPdaYn',allOption:'',chooseOption:'',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DTG번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dtgNo',placeholder:'',style:'width:150px;',ref:'data:ds_LCCEList.dtgNo',maxlength:'16'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기록계구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dtgKnd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.dtgKnd',allOption:'',chooseOption:'',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DGT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'통합단말기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개인정보동의',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_prsnInfoYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_LCCEList.prsnInfoYn',allOption:'',chooseOption:'',displayMode:'label',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동의일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_prsnInfoDtm',pickerType:'dynamic',style:'',ref:'data:ds_LCCEList.prsnInfoDtm'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'계약이력',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_eqcdCtrtHistory',style:'',autoFit:'allColumn',id:'gr_eqcdCtrtHistory',visibleRowNum:'3',class:'wq_gvw',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_eqcdCtrtHistory_oncellclick','ev:oncelldblclick':'scwin.gr_eqcdCtrtHistory_oncelldblclick','ev:onafteredit':'scwin.gr_eqcdCtrtHistory_onafteredit',dataName:'계약이력',validFeatures:'',validExp:'drvNm:기사명:yes,ctrtPicNm:계약담당자명:yes,accntPicNm:정산담당자명:yes,fileNm:계약서:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column15',value:'계약기간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column11',value:'계약현황',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'불일치여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'불일치사유',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'posnClsCd',value:'소유구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column33',value:'계약서',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'삭제여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'등록자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'수정자',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'종료',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'운전자명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'계약자명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'정산자명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'정산주체',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'ctrtStDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'ctrtEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drvNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtPicNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accntPicNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'adjmCoreCls',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:' '}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'discrdYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'discrdRsn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'posnClsCd',value:'',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'textImage',style:'',id:'fileNm',value:'',displayMode:'label',textAlign:'left',viewType:'icon',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'delYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'eqcdCtrtHistory_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddObj:'btn_addrowEqcdCtrtHistory',rowAddFunction:'scwin.btn_addrowEqcdCtrtHistory_onclick',btnRowAddYn:'Y',btnRowDelYn:'N',btnCancelYn:'Y',cancelFunction:'scwin.cancelrowEqcdCtrtHistory',btnDelYn:'N',btnCancelObj:'btn_cancelHistory',gridID:'gr_eqcdCtrtHistory',id:'udc_btn'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_owner',label:'전담화주',style:'',type:'button','ev:onclick':'scwin.btn_owner_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전담화주'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'신규',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'수정',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_cancel',label:'취소',style:'',type:'button','ev:onclick':'scwin.b_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})