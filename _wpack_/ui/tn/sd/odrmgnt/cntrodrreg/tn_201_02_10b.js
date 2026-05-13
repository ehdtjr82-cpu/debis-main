/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_10b.xml 76495 f6ce2d3f8667344f40fa23848a0fef8bf771131712405f43372837922e381d63 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_selpchItemCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'CtrtTrfEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveCtrtTransTrfItem'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text',defaultValue:'21'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unitCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'ctrtWrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'unitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'dptDistrictCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'dptDistrictNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'arvDistrictCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'arvDistrictNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'ctrtTrf',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'trfAdptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rangeMin',name:'rangeMin',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rangeMax',name:'rangeMax',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'ctrtNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'selpchItemCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_TmptranstrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'ctrtWrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'unitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'dptDistrictCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'dptDistrictNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'arvDistrictCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'arvDistrictNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'ctrtTrf',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'trfAdptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rangeMin',name:'rangeMin',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rangeMax',name:'rangeMax',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'ctrtNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'selpchItemCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtWrkPathSeq',name:'계약작업경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'품목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품목／품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'unitCd',name:'단위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictCd',name:'출발권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictNm',name:'출발권역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictCd',name:'도착권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictNm',name:'도착권역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtTrf',name:'요율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqKndCd',name:'차량종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqNrmCd',name:'차량규격'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranNm',name:'작업점소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trfAdptCd',name:'요율적용'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'시작'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'종료'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rangeMin',name:'MIN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rangeMax',name:'MAX'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfFcrc',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtWrkPathSeq',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'name29',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ctrtBase',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'ctrtNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'prvsCtrtYn',name:'prvsCtrtYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'clntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'estNo',name:'estNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntPicNm',name:'clntPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntSpvDeptNm',name:'clntSpvDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntPicTelNo',name:'clntPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtStDt',name:'ctrtStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtEndDt',name:'ctrtEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtTmnDt',name:'ctrtTmnDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reCtrtCondCd',name:'reCtrtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtTmnCondCd',name:'ctrtTmnCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtTmnNtcPrdDd',name:'ctrtTmnNtcPrdDd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtDocExstYn',name:'ctrtDocExstYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtDistrictCd',name:'ctrtDistrictCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDivCntrYn',name:'bizDivCntrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDivBulkYn',name:'bizDivBulkYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomTransYn',name:'bizDomTransYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomStvYn',name:'bizDomStvYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomStrYn',name:'bizDomStrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomInatYn',name:'bizDomInatYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomInatSeaYn',name:'bizDomInatSeaYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomTplYn',name:'bizDomTplYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impYn',name:'impYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expYn',name:'expYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'domesticYn',name:'domesticYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellClntClsCd',name:'sellClntClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dctrtMchtYn',name:'dctrtMchtYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'taxnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtRegStsCd',name:'ctrtRegStsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tplEdiYn',name:'tplEdiYn'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariffAdd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목／품명',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'요율',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차량종류',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'차량규격',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업점소',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'rangeMin',name:'MIN',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'rangeMax',name:'MAX',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_EqNrmCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_contractWorkPath'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'CtrtTrfEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveCtrtTransWrkPathList'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_EqNrmCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'NcallDsCommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveEqNrmTotalList'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff_upload',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtWrkPathSeq',name:'계약작업경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'품목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품목／품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'unitCd',name:'단위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictCd',name:'출발권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictNm',name:'출발권역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictCd',name:'도착권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictNm',name:'도착권역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtTrf',name:'요율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqKndCd',name:'차량종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqNrmCd',name:'차량규격'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranNm',name:'작업점소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trfAdptCd',name:'요율적용'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'시작'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'종료'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rangeMin',name:'MIN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rangeMax',name:'MAX'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfFcrc',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtWrkPathSeq',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'name29',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selpchItemCd',action:'/ncall.cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_selpchItemCd',target:'data:json,{"id":"ds_selpchItemCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBase',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveCtrtBasisInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_ctrtBase","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtBase","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveBase_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveCtrtTransTrfListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.SaveCtrtTransTrfCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariff","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAdd',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveCtrtTransTrfAddTrgtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_tariffAdd","key":"OUT_DS2"}]',target:'data:json,{"id":"ds_tariffAdd","key":"OUT_DS2"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveAdd_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_contractWorkPath',action:'/ncall.cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_contractWorkPath',target:'data:json,{"id":"ds_contractWorkPath","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_contractWorkPath_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_EqNrmCd',action:'/ncall.cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_EqNrmCd',target:'data:json,{"id":"ds_EqNrmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
    NTIS/오더관리/3자물류/크나우프/계약요율추가등록
                /컨테이너오더등록/수입일반오더(C2) > 계약요율 버튼으로 오픈 가능
    
    오더번호 FC21011300002
*/

scwin.strCtrtNo = ""; // 계약번호
scwin.strCommCd = ""; // 품명코드
scwin.strCrcCd = ""; // 통화코드
scwin.strLobranCd = ""; //  점소코드
scwin.strUnitCd = ""; //  단위코드
scwin.strDptDistrictCd = ""; // 출발작업장코드
scwin.strArvDistrictCd = ""; //  도착작업장코드

scwin.memJson = $c.data.getMemInfo($p);
scwin.regId = scwin.memJson.userId;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
scwin.MSG_SD_ERR_001 = "원화인 경우 소수점을 입력 할 수 없습니다.";
scwin.MSG_SD_ERR_002 = "생성할 요율항목을 선택하십시오.";
scwin.MSG_SD_ERR_003 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.hid_ctrtRegStsCd = ""; //히든컴포넌트

scwin.state = "Retrieve";

//title명 결함조치 - 부모화면에서 openMenu 사용해서 '계약요율'로 넘김
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "계약요율추가등록");
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.strCtrtNo = scwin.params["ctrtNo"]; // 계약번호
  scwin.strCommCd = scwin.params["commCd"]; // 품명코드
  scwin.strCrcCd = scwin.params["crcCd"]; // 통화코드
  scwin.strLobranCd = scwin.params["lobranCd"]; //  점소코드
  scwin.strUnitCd = scwin.params["unitCd"]; //  단위코드
  scwin.strDptDistrictCd = scwin.params["dptDistrictCd"]; // 출발작업장코드
  scwin.strArvDistrictCd = scwin.params["arvDistrictCd"]; //  도착작업장코드

  // scwin.strCtrtNo = "C9000000010"; //test용, 삭제필요

  // 계약번호
  if (scwin.strCtrtNo == null || scwin.strCtrtNo == "") {
    scwin.strCtrtNo = "";
  }
  // 품명코드
  if (scwin.strCommCd == null || scwin.strCommCd == "") {
    scwin.strCommCd = "";
  }
  // 통화코드
  if (scwin.strCrcCd == null || scwin.strCrcCd == "") {
    scwin.strCrcCd = "";
  }
  // 점소코드
  if (scwin.strLobranCd == null || scwin.strLobranCd == "") {
    scwin.strLobranCd = "";
  }
  // 단위코드
  if (scwin.strUnitCd == null || scwin.strUnitCd == "") {
    scwin.strUnitCd = "";
  }
  // 출발작업장코드
  if (scwin.strDptDistrictCd == null || scwin.strDptDistrictCd == "") {
    scwin.strDptDistrictCd = "";
  }
  // 도착작업장코드
  if (scwin.strArvDistrictCd == null || scwin.strArvDistrictCd == "") {
    scwin.strArvDistrictCd = "";
  }
  if ($c.gus.cfIsNull($p, scwin.strCtrtNo)) {
    await $c.gus.cfAlertMsg($p, "계약번호가 없습니다.");
    scwin.f_Close();
  }
  scwin.setCombo();
  await scwin.submit();

  // Disable 설정
  $c.gus.cfDisableObjects($p, [ed_ctrtNo, ed_clntNo, chb_prvsCtrtYn, chb_bizDomTransYn, txt_clntNm, chb_dctrtMchtYn, chb_bizDomStvYn, chb_bizDomStrYn, chb_bizDomStrYn, chb_bizDomTplYn, chb_bizDivCntrYn, chb_bizDivBulkYn, chb_impYn, chb_expYn, chb_domesticYn, lc_ctrtDistrictCd, scwin.hid_ctrtRegStsCd, chb_tplEdiYn, lc_sellClntClsCd, txa_rmk]);
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.f_retrieveBase();
};
scwin.submit = async function () {
  dma_selpchItemCd.set("param1", scwin.strCtrtNo);
  let e = await $c.sbm.execute($p, sbm_selpchItemCd);
  if (e.responseJSON.GAUCE.length > 0) {
    var rowCnt = ds_selpchItemCd.getTotalRow();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["요율항목"]);
      scwin.f_Close();
    } else {
      dma_contractWorkPath.set("param1", scwin.strCtrtNo);
      dma_contractWorkPath.set("param2", lc_selpchItemCd.getValue());
      $c.sbm.execute($p, sbm_contractWorkPath);
    }
    let e = await $c.sbm.execute($p, sbm_EqNrmCd);
    if (e.responseJSON.GAUCE.length > 0) {
      scwin.ds_EqNrmCd_OnFilter();
    }
  }
};
scwin.setCombo = function () {
  const codeOptions = [{
    grpCd: "LO111",
    compID: "lc_sellClntClsCd"
  }, {
    grpCd: "OP518",
    compID: "gr_tariff:trfAdptCd, gr_tariff_upload:trfAdptCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  // , function() {
  //     ds_ctrtBase.getCellData(0, "sellClntClsCd") == "" || null ? "" : lc_sellClntClsCd.setValue(ds_ctrtBase.getCellData(0, "sellClntClsCd"));
  // });

  const param = [{
    method: "getLuxeComboDataNcall",
    param1: "RegionEBC",
    param2: "retrieveDistrict",
    param3: ["", "", "0", "1"],
    compID: "lc_ctrtDistrictCd"
  }, {
    method: "getGridComboNoSortNcall",
    param1: "NcallEquipmentEBC",
    param2: "retrieveLogisticsEquipmentClss2",
    param3: true,
    compID: "gr_tariff:eqKndCd"
  }, {
    method: "getLuxeComboDataNcall",
    param1: "EquipmentEBC",
    param2: "retrieveLogisticsEquipmentClss",
    param3: ["ZZ210", "ZZ202", "ZZ201", "LV"],
    compID: "gr_tariff_upload:eqKndCd"
  }];
  $c.data.setGauceUtil($p, param);
  // , function() {
  //     ds_ctrtBase.getCellData(0, "ctrtDistrictCd") == "" || null ? "" : lc_ctrtDistrictCd.setValue(ds_ctrtBase.getCellData(0, "ctrtDistrictCd"));
  // });
};
scwin.f_retrieveBase = function () {
  ds_search.set("ctrtNo", scwin.strCtrtNo);
  $c.sbm.execute($p, sbm_retrieveBase);
};
scwin.f_retrieve = function () {
  ds_search.set("ctrtNo", scwin.strCtrtNo);
  ds_search.set("selpchItemCd", lc_selpchItemCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_retrieveAdd = function () {
  ds_search.set("ctrtNo", scwin.strCtrtNo);
  ds_search.set("selpchItemCd", lc_selpchItemCd.getValue());
  ds_search.set("commCd", scwin.strCommCd);
  ds_search.set("unitCd", scwin.strUnitCd);
  ds_search.set("crcCd", scwin.strCrcCd);
  ds_search.set("dptDistrictCd", scwin.strDptDistrictCd);
  ds_search.set("arvDistrictCd", scwin.strArvDistrictCd);
  ds_search.set("lobranCd", scwin.strLobranCd);
  $c.sbm.execute($p, sbm_retrieveAdd);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  if (ds_tariff.getTotalRow() == 0) {
    ds_tariff.insertRow();
    gr_tariff.setFocusedCell(0, 0);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtNo', ds_ctrtBase.getCellData(0, 'ctrtNo'));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'transMdCtrtTrfSeq', "1");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'selpchItemCd', lc_selpchItemCd.getValue());
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'crcCd', "KRW");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtWrkPathSeq', "0");
  } else {
    ds_tariff.insertRow();
    gr_tariff.setFocusedCell(ds_tariff.getTotalRow() - 1, 0);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtNo', ds_ctrtBase.getCellData(0, 'ctrtNo'));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'transMdCtrtTrfSeq', ds_tariff.getTotalRow() + 1);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'selpchItemCd', lc_selpchItemCd.getValue());
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'crcCd', "KRW");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtWrkPathSeq', "0");
  }
};
scwin.f_addRow_up = function () {
  if (ds_tariff.getTotalRow() == 0) {
    ds_tariff.insertRow();
    gr_tariff.setFocusedCell(0, 0);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtNo', ds_ctrtBase.getCellData(0, 'ctrtNo'));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'transMdCtrtTrfSeq', "1");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'selpchItemCd', lc_selpchItemCd.getValue());
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'crcCd', "KRW");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtWrkPathSeq', "0");
  } else {
    ds_tariff.insertRow();
    gr_tariff.setFocusedCell(ds_tariff.getTotalRow() - 1, 0);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtNo', ds_ctrtBase.getCellData(0, 'ctrtNo'));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'transMdCtrtTrfSeq', ds_tariff.getTotalRow() + 1);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'selpchItemCd', lc_selpchItemCd.getValue());
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'crcCd', "KRW");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), 'ctrtWrkPathSeq', "0");
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  var rowIdx = ds_tariff.getRowPosition();
  if (ds_tariff.getRowStatus(rowIdx) == "C") {
    ds_tariff.removeRow(rowIdx);
  } else {
    ds_tariff.deleteRow(rowIdx);
    gr_tariff.setFocusedCell(rowIdx, 0);
  }
};
scwin.f_DelRow_up = function () {
  var rowIdx = ds_tariff.getRowPosition();
  if (ds_tariff.getRowStatus(rowIdx) == "C") {
    ds_tariff.removeRow(rowIdx);
  } else {
    ds_tariff.deleteRow(rowIdx);
    gr_tariff.setFocusedCell(rowIdx, 0);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_canRow = function () {
  // ds_tariff.Undo(ds_tariff.RowPosition)
  var rowIdx = ds_tariff.getRowPosition();
  if (ds_tariff.getRowStatus(rowIdx) == "C") {
    ds_tariff.removeRow(rowIdx);
  } else {
    ds_tariff.undoRow(rowIdx);
    gr_tariff.setFocusedCell(rowIdx, 0);
  }
};
scwin.f_canRow_up = function () {
  // ds_tariff.Undo(ds_tariff.RowPosition)
  var rowIdx = ds_tariff.getRowPosition();
  if (ds_tariff.getRowStatus(rowIdx) == "C") {
    ds_tariff.removeRow(rowIdx);
  } else {
    ds_tariff.undoRow(rowIdx);
    gr_tariff.setFocusedCell(rowIdx, 0);
  }
};
scwin.f_Close = function () {
  // self.close();
  $c.win.closePopup($p);
};
scwin.f_Save = async function () {
  if (ds_tariff.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["운송요율"]);
    return false;
  } else {
    if (await scwin.f_reqFieldChk()) {
      $c.sbm.execute($p, sbm_save);
    } else {
      return;
    }
  }
};

// 필수항목 check
scwin.f_reqFieldChk = async function () {
  var bChk = true;
  for (var i = 0; i < ds_tariff.getTotalRow(); i++) {
    if (ds_tariff.getCellData(i, "ctrtWrkPathSeq") == "") {
      gr_tariff.setFocusedCell(i, "ctrtWrkPathSeq");
      await $c.win.alert($p, "계약작업경로는 필수입력입니다.");
      bChk = false;
      break;
    } else if (ds_tariff.getCellData(i, "commNm") == "") {
      gr_tariff.setFocusedCell(i, "commNm");
      await $c.win.alert($p, "품명을 정확히 입력하세요.");
      bChk = false;
      break;
    } else if (ds_tariff.getCellData(i, "unitCd") == "") {
      gr_tariff.setFocusedCell(i, "unitCd");
      await $c.win.alert($p, "단위를 정확히 입력하세요.");
      bChk = false;
      break;
    } else if (ds_tariff.getCellData(i, "dptDistrictCd") == "") {
      gr_tariff.setFocusedCell(i, "dptDistrictNm");
      await $c.win.alert($p, "출발권역은 필수입력입니다.");
      bChk = false;
      break;
    } else if (ds_tariff.getCellData(i, "arvDistrictCd") == "") {
      gr_tariff.setFocusedCell(i, "arvDistrictNm");
      await $c.win.alert($p, "도착권역은  필수입력입니다.");
      bChk = false;
      break;
    } else if (ds_tariff.getCellData(i, "crcCd") == "") {
      gr_tariff.setFocusedCell(i, "crcCd");
      await $c.win.alert($p, "통화를 정확히 입력하세요.");
      bChk = false;
      break;
    } else if (ds_tariff.getCellData(i, "ctrtTrf") == "") {
      gr_tariff.setFocusedCell(i, "ctrtTrf");
      await $c.win.alert($p, "요율은 필수입력입니다. \'0\' 이상의 값을 입력하세요.");
      bChk = false;
      break;
    } else if ((ds_tariff.getCellData(i, "unitCd") == "VOT" || ds_tariff.getCellData(i, "unitCd") == "VOC") && ds_tariff.getCellData(i, "rangeMin") >= ds_tariff.getCellData(i, "rangeMax")) {
      gr_tariff.setFocusedCell(i, "rangeMin");
      await $c.win.alert($p, "적용구간을 정확히 입력하세요.");
      bChk = false;
      break;
    }
  }
  return bChk;
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  // window.close();
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// function name : f_Download
// function desc : Excel양식다운로드
//-------------------------------------------------------------------------    
scwin.cfGridToExcel = async function () {
  var fileName = "운송요율등록";
  var options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  };
  await $c.data.downloadGridViewExcel($p, gr_tariff, options);
};

//-------------------------------------------------------------------------
// function name : f_upload
// function desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  var options = {
    startRowIndex: 1,
    type: 1,
    status: "C"
  };
  await udc_grd.uploadGridViewExcel(gr_tariff_upload, options);
};
scwin.gr_tariff_upload_onfilereadend = async function (value) {
  //f_Import
  if (await scwin.f_AddRowUploaded()) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
    scwin.setGridDisplay(2);
    ds_tariff.removeAll();
    ds_tariff.setJSON(ds_tariff_upload.getAllJSON());
    ds_tariff.modifyAllStatus("C");
    totalRows1.setValue(ds_tariff.getTotalRow());
  }
};

//업로드 자료 추가
scwin.f_AddRowUploaded = async function () {
  // ds_TmptranstrfList.ImportData(ds_up_tariff.ExportData(1, ds_up_tariff.CountRow, true));
  ds_TmptranstrfList.setJSON(ds_up_tariff.getAllJSON());
  ds_tariff_upload.removeAll(); //alertMsg 이후 ds_tariff에 setJSON 하기 위한 datalist

  var param = "";
  var ctrtNoVal = "";
  ctrtNoVal = ed_ctrtNo.getValue() == null ? "" : ed_ctrtNo.getValue();
  param = ",," + ctrtNoVal;
  for (var i = 0; i < ds_up_tariff.getTotalRow(); i++) {
    ds_tariff_upload.insertRow(i);
    ds_tariff_upload.setCellData(i, 'ctrtNo', ds_ctrtBase.getCellData(0, 'ctrtNo'));
    ds_tariff_upload.setCellData(i, 'selpchItemCd', lc_selpchItemCd.getValue());
    ds_tariff_upload.setCellData(i, "ctrtWrkPathSeq", ds_TmptranstrfList.getCellData(i, "ctrtWrkPathSeq"));

    //  엑셀파일형식이랑 달라서 수정
    /*eqKndCd*/
    var eqKndCd = ds_TmptranstrfList.getCellData(i, "eqKndCd"); //eqKndCd: CT : 카고트럭
    if (eqKndCd != null) {
      eqKndCd = eqKndCd.replace("[", "");
      var eqKndCd_arr = eqKndCd.split("]");
      eqKndCd = eqKndCd_arr[0];
    }

    /*eqNrmCd*/
    var eqNrmCd = ds_TmptranstrfList.getCellData(i, "eqNrmCd");
    if (eqNrmCd != null) {
      var eqNrmCd_arr = eqNrmCd.split(" : ");
      eqNrmCd = eqNrmCd_arr[0];
    }

    // if(eqNrmCd.length<2){
    //     eqNrmCd =  LPAD(eqNrmCd, '0', 2); 
    // }   

    ds_tariff_upload.setCellData(i, "unitCd", ds_TmptranstrfList.getCellData(i, "unitCd"));
    ds_tariff_upload.setCellData(i, "commCd", ds_TmptranstrfList.getCellData(i, "commCd"));
    ds_tariff_upload.setCellData(i, "commNm", ds_TmptranstrfList.getCellData(i, "commNm"));
    ds_tariff_upload.setCellData(i, "dptDistrictCd", ds_TmptranstrfList.getCellData(i, "dptDistrictCd"));
    ds_tariff_upload.setCellData(i, "dptDistrictNm", ds_TmptranstrfList.getCellData(i, "dptDistrictNm"));
    ds_tariff_upload.setCellData(i, "arvDistrictCd", ds_TmptranstrfList.getCellData(i, "arvDistrictCd"));
    ds_tariff_upload.setCellData(i, "arvDistrictNm", ds_TmptranstrfList.getCellData(i, "arvDistrictNm"));
    ds_tariff_upload.setCellData(i, "crcCd", ds_TmptranstrfList.getCellData(i, "crcCd"));
    ds_tariff_upload.setCellData(i, "ctrtTrf", ds_TmptranstrfList.getCellData(i, "ctrtTrf"));
    ds_tariff_upload.setCellData(i, "eqKndCd", eqKndCd);
    ds_tariff_upload.setCellData(i, "eqNrmCd", eqNrmCd);
    ds_tariff_upload.setCellData(i, "lobranCd", ds_TmptranstrfList.getCellData(i, "lobranCd"));
    ds_tariff_upload.setCellData(i, "lobranNm", ds_TmptranstrfList.getCellData(i, "lobranNm"));
    ds_tariff_upload.setCellData(i, "trfAdptCd", ds_TmptranstrfList.getCellData(i, "trfAdptCd"));
    ds_tariff_upload.setCellData(i, "wrkStHh", ds_TmptranstrfList.getCellData(i, "wrkStHh"));
    ds_tariff_upload.setCellData(i, "wrkEndHh", ds_TmptranstrfList.getCellData(i, "wrkEndHh"));
    ds_tariff_upload.setCellData(i, "rangeMin", Number(ds_TmptranstrfList.getCellData(i, "rangeMin")));
    ds_tariff_upload.setCellData(i, "rangeMax", Number(ds_TmptranstrfList.getCellData(i, "rangeMax")));
    if (ds_TmptranstrfList.getCellData(i, "commCd") != "") {
      await scwin.upload_grd_popup("commCd", i);
    } else if (ds_TmptranstrfList.getCellData(i, "commNm") != "") {
      await scwin.upload_grd_popup("commNm", i);
    }
    if (ds_TmptranstrfList.getCellData(i, "dptDistrictCd") != "") {
      await scwin.upload_grd_popup("dptDistrictCd", i);
    } else if (ds_TmptranstrfList.getCellData(i, "dptDistrictNm") != "") {
      await scwin.upload_grd_popup("dptDistrictNm", i);
    }
    if (ds_TmptranstrfList.getCellData(i, "arvDistrictCd") != "") {
      await scwin.upload_grd_popup("arvDistrictCd", i);
    } else if (ds_TmptranstrfList.getCellData(i, "arvDistrictNm") != "") {
      await scwin.upload_grd_popup("arvDistrictNm", i);
    }
  }
  return true;
};
scwin.upload_grd_popup = async function (colid, i) {
  switch (colid) {
    case "commCd":
    case "commNm":
      await udc_commNm.cfCommonPopUpAsync(function (rtnList) {
        if (rtnList == null) {
          ds_tariff_upload.setCellData(i, "commCd", "");
          ds_tariff_upload.setCellData(i, "commNm", "");
          $c.gus.cfAlertMsg($p, MSG_SD_ERR_003, [i, "품목"]);
          return;
        } else {
          ds_tariff_upload.setCellData(i, "commCd", rtnList[0]);
          ds_tariff_upload.setCellData(i, "commNm", rtnList[1]);
        }
      }, ds_TmptranstrfList.getCellData(i, colid), ds_TmptranstrfList.getCellData(i, colid), "T", null, null, null, null, '2,4', null, null, null, null, null, null, "품목／품명,품목／품명코드,품목／품명");
      break;
    case "dptDistrictCd":
    case "dptDistrictNm":
      await udc_dptDistrictNm.cfCommonPopUpAsync(function (rtnList) {
        if (rtnList == null) {
          ds_tariff_upload.setCellData(i, "dptDistrictCd", "");
          ds_tariff_upload.setCellData(i, "dptDistrictNm", "");
          $c.gus.cfAlertMsg($p, MSG_SD_ERR_003, [i, "출발권역"]);
          return;
        } else {
          ds_tariff_upload.setCellData(i, "dptDistrictCd", rtnList[0]);
          ds_tariff_upload.setCellData(i, "dptDistrictNm", rtnList[1]);
        }
      }, ds_TmptranstrfList.getCellData(i, colid), ds_TmptranstrfList.getCellData(i, colid), "T", null, null, null, null, ',,' + ds_ctrtBase.getCellData(0, "ctrtDistrictCd") + ',,,,' + ds_tariff.getCellData(i, "commCd"), null, null, null, null, null, null, "출발지,출발지코드,출발지명");
      break;
    case "arvDistrictCd":
    case "arvDistrictNm":
      await udc_arvDistrictNm.cfCommonPopUpAsync(function (rtnList) {
        if (rtnList == null) {
          ds_tariff_upload.setCellData(i, "arvDistrictCd", "");
          ds_tariff_upload.setCellData(i, "arvDistrictNm", "");
          $c.gus.cfAlertMsg($p, MSG_SD_ERR_003, [i, "도착권역"]);
          return;
        } else {
          ds_tariff_upload.setCellData(i, "arvDistrictCd", rtnList[0]);
          ds_tariff_upload.setCellData(i, "arvDistrictNm", rtnList[1]);
        }
      }, ds_TmptranstrfList.getCellData(i, colid), ds_TmptranstrfList.getCellData(i, colid), "T", null, null, null, null, ',,' + ds_ctrtBase.getCellData(0, "ctrtDistrictCd") + ',,,,' + ds_tariff.getCellData(i, "commCd"), null, null, null, null, null, null, "도착지,도착지코드,도착지명");
      break;
  }
};

// <!-----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S
// ------------------------------------------------------------------------------>
scwin.sbm_retrieveAdd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // for=ds_tariffAdd event=OnLoadCompleted(rowCnt)
  var rowCnt = ds_tariffAdd.getTotalRow();
  if (rowCnt > 0) {
    $c.gus.f_CopyDataRow($p, ds_tariffAdd, ds_tariff, ds_tariffAdd.getRowPosition());
  }
};
scwin.sbm_retrieveBase_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // for=ds_ctrtBase event=OnLoadCompleted(rowCnt)
  if (ds_ctrtBase.getCellData(0, "ctrtNo") == "") {
    lc_ctrtDistrictCd.setSelectedIndex(-1, true);
    lc_sellClntClsCd.setSelectedIndex(-1, true);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약기본정보"]);
    scwin.f_Close();
  } else {
    //outRec값세팅
    scwin.setOutRecValue();
    if (chb_bizDivCntrYn.getValue() == "1") {
      gr_tariff.setColumnVisible("transCondCd", true);
      gr_tariff.setColumnVisible("cntrWtCondCd", true);
    } else if (chb_bizDivCntrYn.getValue() == "0") {
      gr_tariff.setColumnVisible("transCondCd", false);
      gr_tariff.setColumnVisible("cntrWtCondCd", false);
    }
    if (chb_bizDivBulkYn.getValue() == "1") {
      gr_tariff.setColumnVisible('eqKndCd', true);
      gr_tariff.setColumnVisible('eqNrmCd', true);
      gr_tariff.setColumnVisible('trfAdptCd', true);
      gr_tariff.setColumnVisible('wrkStHh', true);
      gr_tariff.setColumnVisible('wrkEndHh', true);
    } else if (chb_bizDivBulkYn.getValue() == "0") {
      gr_tariff.setColumnVisible('eqKndCd', false);
      gr_tariff.setColumnVisible('eqNrmCd', false);
      gr_tariff.setColumnVisible('trfAdptCd', false);
      gr_tariff.setColumnVisible('wrkStHh', false);
      gr_tariff.setColumnVisible('wrkEndHh', false);
    }
    scwin.f_retrieve();
  }
};
scwin.setOutRecValue = function () {
  ed_ctrtNo.setValue(ds_ctrtBase.getCellData(0, "ctrtNo"));
  chb_prvsCtrtYn.setValue(ds_ctrtBase.getCellData(0, "prvsCtrtYn"));
  ed_clntNo.setValue(ds_ctrtBase.getCellData(0, "clntNo"));
  txt_clntNm.setValue(ds_ctrtBase.getCellData(0, "clntNm"));
  chb_bizDivCntrYn.setValue(ds_ctrtBase.getCellData(0, "bizDivCntrYn"));
  chb_bizDivBulkYn.setValue(ds_ctrtBase.getCellData(0, "bizDivBulkYn"));
  chb_bizDomTransYn.setValue(ds_ctrtBase.getCellData(0, "bizDomTransYn"));
  chb_bizDomStvYn.setValue(ds_ctrtBase.getCellData(0, "bizDomStvYn"));
  chb_bizDomStrYn.setValue(ds_ctrtBase.getCellData(0, "bizDomStrYn"));
  chb_bizDomTplYn.setValue(ds_ctrtBase.getCellData(0, "bizDomTplYn"));
  chb_impYn.setValue(ds_ctrtBase.getCellData(0, "impYn"));
  chb_expYn.setValue(ds_ctrtBase.getCellData(0, "expYn"));
  chb_domesticYn.setValue(ds_ctrtBase.getCellData(0, "domesticYn"));
  chb_dctrtMchtYn.setValue(ds_ctrtBase.getCellData(0, "dctrtMchtYn"));
  txa_rmk.setValue(ds_ctrtBase.getCellData(0, "rmk"));
  scwin.hid_ctrtRegStsCd = ds_ctrtBase.getCellData(0, "ctrtRegStsCd");
  chb_tplEdiYn.setValue(ds_ctrtBase.getCellData(0, "tplEdiYn"));
  ds_ctrtBase.getCellData(0, "sellClntClsCd") == "" || null ? "" : lc_sellClntClsCd.setValue(ds_ctrtBase.getCellData(0, "sellClntClsCd"));
  ds_ctrtBase.getCellData(0, "ctrtDistrictCd") == "" || null ? "" : lc_ctrtDistrictCd.setValue(ds_ctrtBase.getCellData(0, "ctrtDistrictCd"));
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (scwin.state == "Save") {
    scwin.setGridDisplay(3);
  } else if (scwin.state == "Retrieve") {
    scwin.setGridDisplay(1);
  }
  gr_tariff.setFocusedCell(0, 0);
  totalRows1.setValue(ds_tariff.getTotalRow());

  // for=ds_tariff event=OnLoadCompleted(rowCnt)
  // 운송 추가 요율 정보
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
    //f_retrieveAdd();
  }
};

// for=gr_tariff event=OnCloseUp(row,colid)
scwin.gr_tariff_onviewchange = function (info) {
  // 차량종류가 변경될 때 차량 규격 Filter 처리  
  switch (info.colId) {
    case "eqKndCd":
      // 차량종류
      scwin.ds_EqNrmCd_OnFilter();
      break;
    default:
      break;
  }
};

// <!-- 차량규격 필터 이벤트 -->
scwin.ds_EqNrmCd_OnFilter = function () {
  var v_eqKndCd = ds_tariff.getCellData(ds_tariff.getRowPosition(), "eqKndCd");
  if (ds_tariff.getTotalRow() > 0) {
    if (ds_EqNrmCd.getCellData(ds_tariff.getRowPosition(), "upperCd") == v_eqKndCd) {
      return true;
    } else {
      return false;
    }
  }
};

// 저장 TR
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_tariff.removeAll();
  scwin.state = "Save";
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 요율항목 값 변경
//-------------------------------------------------------------------------
scwin.lc_selpchItemCd_onviewchange = function (info) {
  dma_contractWorkPath.set("param1", scwin.strCtrtNo);
  dma_contractWorkPath.set("param2", lc_selpchItemCd.getValue());
  $c.sbm.execute($p, sbm_contractWorkPath);
};
scwin.sbm_contractWorkPath_submitdone = function (e) {
  // cfChangeCdNmFormat(ds_contractWorkPath,"ctrtWrkPathSeq","ctrtWrkPathNm");
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 요율 그리드  popup
//-------------------------------------------------------------------------
scwin.gr_tariff_OnPopup = async function (rowIndex, colId, nowValue) {
  if (colId == "commNm") {
    // 품목/품명
    // selectID: retrieveCommInfo_tpro
    udc_commNm.cfCommonPopUp(scwin.udc_commNm_callBackFun, ds_tariff.getCellData(rowIndex, "commCd"), ds_tariff.getCellData(rowIndex, "commNm"), "T", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10',
    //"2,4,,," +  parent.txt_ClntNo.value,
    "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
  } else if (colId == "unitCd") {
    //단위
    // selectID: retrieveCommCdInfo_tpro
    udc_unitCd.cfCommonPopUp(scwin.udc_unitCd_callBackFun, ds_tariff.getCellData(rowIndex, "unitCd"), '', 'T', '7', null, null, null, 'LO102,,', '440', '500', null, null, null, "F", null);
  } else if (colId == "dptDistrictNm") {
    // 출발권역
    // selectID: retrieveDistrictList_tpro
    udc_dptDistrictNm.cfCommonPopUp(scwin.udc_dptDistrictNm_callBackFun, ds_tariff.getCellData(rowIndex, "dptDistrictCd"), ds_tariff.getCellData(rowIndex, "dptDistrictNm"), "T", '5', "출발권역코드,출발권역명", '150,170', null, ',,' + ds_ctrtBase.getCellData(0, "ctrtDistrictCd") + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,출발권역코드,출발권역명');
  } else if (colId == "arvDistrictNm") {
    // 도착권역
    // selectID: retrieveDistrictList_tpro
    udc_arvDistrictNm.cfCommonPopUp(scwin.udc_arvDistrictNm_callBackFun, ds_tariff.getCellData(rowIndex, "arvDistrictCd"), ds_tariff.getCellData(rowIndex, "arvDistrictNm"), "T", '5', "도착권역코드,도착권역명", '150,170', null, ',,' + ds_ctrtBase.getCellData(0, "ctrtDistrictCd") + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
  } else if (colId == "lobranNm") {
    // 작업점소
    // selectID: retrieveLogisDeptInfo
    udc_lobranNm.cfCommonPopUp(scwin.udc_lobranNm_callBackFun, ds_tariff.getCellData(rowIndex, "lobranCd"), ds_tariff.getCellData(rowIndex, "lobranNm"), "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
  }
};
scwin.udc_commNm_callBackFun = function (rtnList) {
  var row = ds_tariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, row, "commCd", "commNm");
};
scwin.udc_unitCd_callBackFun = function (rtnList) {
  var row = ds_tariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, row, "unitCd", "");
};
scwin.udc_dptDistrictNm_callBackFun = function (rtnList) {
  var row = ds_tariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, row, "dptDistrictCd", "dptDistrictNm");
};
scwin.udc_arvDistrictNm_callBackFun = function (rtnList) {
  var row = ds_tariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, row, "arvDistrictCd", "arvDistrictNm");
};
scwin.udc_lobranNm_callBackFun = function (rtnList) {
  var row = ds_tariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, row, "lobranCd", "lobranNm");
};

//-------------------------------------------------------------------------
// 거래처
//-------------------------------------------------------------------------
scwin.txt_clntNm_onchange = function (info) {
  // scwin.f_chkField('txt_clntNm','ed_clntNo', 1); // f_chkField X
};

//-------------------------------------------------------------------------
// 그리드 display edit
//-------------------------------------------------------------------------
scwin.setGridDisplay = function (str) {
  switch (str) {
    case 1:
      //조회
      gr_tariff.removeHeaderClass("column17", "txt-red"); // 품목코드
      gr_tariff.setHeaderClass("column15", "txt-red"); // 품목/품명
      gr_tariff.removeHeaderClass("column11", "txt-red"); // 출발권역코드
      gr_tariff.setHeaderClass("column9", "txt-red"); // 출발권역
      gr_tariff.removeHeaderClass("column3", "txt-red"); // 도착권역코드
      gr_tariff.setHeaderClass("column5", "txt-red"); // 도착권역

      gr_tariff.removeHeaderClass("column37", "txt-red"); // 차량종류
      gr_tariff.setHeaderClass("column37", "txt-blue"); // 차량종류

      gr_tariff.setColumnVisible("commCd", true); // 품목코드
      gr_tariff.setColumnVisible("dptDistrictCd", true); // 출발권역코드
      gr_tariff.setColumnVisible("arvDistrictCd", true); // 도착권역코드
      gr_tariff.setColumnVisible("lobranCd", false); // 작업점소코드
      break;
    case 2:
      //엑셀업로드
      gr_tariff.setHeaderClass("column17", "txt-red"); // 품목코드
      gr_tariff.removeHeaderClass("column15", "txt-red"); // 품목/품명
      gr_tariff.setHeaderClass("column11", "txt-red"); // 출발권역코드
      gr_tariff.removeHeaderClass("column9", "txt-red"); // 출발권역
      gr_tariff.setHeaderClass("column3", "txt-red"); // 도착권역코드
      gr_tariff.removeHeaderClass("column5", "txt-red"); // 도착권역

      gr_tariff.removeHeaderClass("column37", "txt-red"); // 차량종류
      gr_tariff.setHeaderClass("column37", "txt-blue"); // 차량종류

      gr_tariff.setColumnVisible("commCd", true); // 품목코드
      gr_tariff.setColumnVisible("dptDistrictCd", true); // 출발권역코드
      gr_tariff.setColumnVisible("arvDistrictCd", true); // 도착권역코드
      gr_tariff.setColumnVisible("lobranCd", true); // 작업점소코드
      break;
    case 3:
      //저장
      gr_tariff.setHeaderClass("column15", "txt-red"); // 품목/품명
      gr_tariff.setHeaderClass("column9", "txt-red"); // 출발권역
      gr_tariff.setHeaderClass("column5", "txt-red"); // 도착권역

      gr_tariff.removeHeaderClass("column37", "txt-blue"); // 차량종류
      gr_tariff.setHeaderClass("column37", "txt-red"); // 차량종류

      gr_tariff.setColumnVisible("commCd", false); // 품목코드
      gr_tariff.setColumnVisible("dptDistrictCd", false); // 출발권역코드
      gr_tariff.setColumnVisible("arvDistrictCd", false); // 도착권역코드
      gr_tariff.setColumnVisible("lobranCd", false); // 작업점소코드
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_ctrtNo',placeholder:'',class:'',objType:'key',ref:'',editFormat:'XXXXXXXXX-XX'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_prvsCtrtYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가계약여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo',placeholder:'',style:'width: 85px;',mandatory:'true',validExp:'계약거래처:yes',objType:'Data',ref:'',title:'계약거래처'}},{T:1,N:'xf:input',A:{class:'',id:'txt_clntNm',placeholder:'',style:'','ev:onchange':'scwin.txt_clntNm_onchange',ref:'',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_sellClntClsCd',class:'',mandatory:'true',objType:'key',ref:''}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_dctrtMchtYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직계약화주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약영역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bizDomStvYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bizDomTransYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bizDomStrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bizDomTplYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약부분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bizDivCntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bizDivBulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_impYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_expYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_domesticYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtDistrictCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',validExp:'계약권역:yes',objType:'data',ref:'',allOption:'',chooseOption:'',title:'계약권역'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk',style:'',maxlength:'500',ref:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EDI여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tplEdiYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류EDI여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송요율등록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요율항목',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:250px;',id:'lc_selpchItemCd',class:'',mandatory:'true',allOption:'',chooseOption:'',ref:'',validExp:'요율항목:yes',objType:'data',title:'요율항목','ev:onviewchange':'scwin.lc_selpchItemCd_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.cfGridToExcel',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',templateYn:'N',gridID:'gr_tariff',gridDownUserAuth:'X',gridUpYn:'Y',gridUpFn:'scwin.f_upload',id:'udc_grd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_tariff',style:'',id:'gr_tariff',visibleRowNum:'15',class:'wq_gvw',autoFit:'allColumn',autoFitMinWidth:'1700','ev:onviewchange':'scwin.gr_tariff_onviewchange',validFeatures:'ignoreStatus=no',validExp:'ctrtWrkPathSeq:계약작업경로:yes::key,dptDistrictCd:출발권역:yes::key,arvDistrictCd:도착권역:yes::key,commNm:품명:yes::key,unitCd:단위:yes,crcCd:통화:yes,ctrtTrf:요율:yes:minNumber=0.01,transCondCd::no::key,cntrWtCondCd::no::key,eqKndCd::no::key,eqNrmCd::no::key,lobranCd:작업점소:no::key,trfAdptCd:요율적용:no::key,wrkStHh:시작시간:no::key,wrkEndHh:종료시간:no::key',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column1',value:'계약작업경로',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'품목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'품목/품명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'출발권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column9',value:'출발권역',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'도착권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column5',value:'도착권역',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'통화',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'요율',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'차량종류',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'차량규격',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'작업점소코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'작업점소',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'요율적용',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'시작',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'종료',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'MIN',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'MAX',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'ctrtWrkPathSeq',inputType:'select',textAlign:'left',sortable:'true',allOption:'',chooseOption:'',ref:'',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',readOnly:'true',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',textAlign:'left',sortable:'true',imageClickFunction:'scwin.gr_tariff_OnPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',textAlign:'left',sortable:'true',imageClickFunction:'scwin.gr_tariff_OnPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'textImage',textAlign:'left',sortable:'true',imageClickFunction:'scwin.gr_tariff_OnPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'textImage',textAlign:'left',sortable:'true',imageClickFunction:'scwin.gr_tariff_OnPopup'}},{T:1,N:'w2:column',A:{displayMode:'value',id:'crcCd',inputType:'',textAlign:'left',sortable:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,###.#0',defaultValue:'0',excelCellType:'number',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',textAlign:'left',sortable:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'eqNrmCd',inputType:'select',textAlign:'left',sortable:'true',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_EqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'lobranCd',value:'',displayMode:'label',imageClickFunction:'scwin.gr_tariff_OnPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',textAlign:'left',sortable:'true',imageClickFunction:'scwin.gr_tariff_OnPopup'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',inputType:'select',textAlign:'left',sortable:'true',emptyItem:'true',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',dataType:'time',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',dataType:'time',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rangeMin',inputType:'text',textAlign:'right',displayFormat:'#,###.#0',defaultValue:'0',dataType:'number',excelCellType:'number',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rangeMax',inputType:'text',textAlign:'right',displayFormat:'#,###.#0',defaultValue:'0',excelFormat:'#,##0.#0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',gridID:'gr_tariff',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_canRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_add1',btnRowDelObj:'btn_del1',btnCancelObj:'btn_cls1'}}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'1700',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_up_tariff','ev:onviewchange':'scwin.gr_tariff_onviewchange',id:'gr_tariff_upload',style:'display: none;',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_tariff_upload_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',value:'계약작업경로',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품목코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column15',inputType:'text',value:'품목/품명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column13',inputType:'text',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'출발권역코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column9',inputType:'text',value:'출발권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도착권역코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column5',inputType:'text',value:'도착권역',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column7',inputType:'text',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column19',inputType:'text',value:'요율',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column35',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column33',inputType:'text',value:'작업점소',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column31',inputType:'text',value:'요율적용',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column29',inputType:'text',value:'시작',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column27',inputType:'text',value:'종료',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column21',inputType:'text',value:'MIN',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column23',inputType:'text',value:'MAX',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'ctrtWrkPathSeq',inputType:'',sortable:'true',textAlign:'left',emptyItem:'true',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',readOnly:'true',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',sortable:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',sortable:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###.#0',displayMode:'label',id:'ctrtTrf',inputType:'text',sortable:'true',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.#0',defaultValue:'0',applyFormat:'all'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'eqKndCd',inputType:'',sortable:'true',textAlign:'left',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'eqNrmCd',inputType:'',sortable:'true',textAlign:'left',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_EqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'trfAdptCd',inputType:'',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{dataType:'time',displayMode:'label',id:'wrkStHh',inputType:'text',allowChar:'0-9'}},{T:1,N:'w2:column',A:{dataType:'time',displayMode:'label',id:'wrkEndHh',inputType:'text',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rangeMin',inputType:'text',textAlign:'right',dataType:'number',excelFormat:'#,##0.#0',excelCellType:'number',displayFormat:'#,###.#0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rangeMax',inputType:'text',textAlign:'right',dataType:'number',excelFormat:'#,##0.#0',excelCellType:'number',displayFormat:'#,###.#0',defaultValue:'0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_close',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_WinClose',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'닫기'}]}]}]}]},{T:1,N:'xf:group',A:{style:'height:200px;display: none;',id:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommInfo_tpro',codeId:'',validTitle:'',nameId:'',style:'',id:'udc_commNm'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommCdInfo_tpro',codeId:'',validTitle:'',nameId:'',style:'',id:'udc_unitCd'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList_tpro',codeId:'',validTitle:'',nameId:'',style:'',id:'udc_dptDistrictNm'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList_tpro',codeId:'',validTitle:'',nameId:'',style:'',id:'udc_arvDistrictNm'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveLogisDeptInfo',codeId:'',validTitle:'',nameId:'',style:'',id:'udc_lobranNm'}}]}]}]}]}]}]})