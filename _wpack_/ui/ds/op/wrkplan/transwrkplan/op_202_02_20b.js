/*amd /ui/ds/op/wrkplan/transwrkplan/op_202_02_20b.xml 103255 de8ede74c737ed618fb6bbbc567fc4d58b733c14c87575a80ee7b3b419664f83 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDstClsCd',name:'작업구간구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'배정종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnYn',name:'배정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryClsCd',name:'조회구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnYn',name:'총괄배정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'briefCntrSizCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'briefCntrTypCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'briefQty',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDtHh',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtHh',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTelNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spTotString',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spSeqString',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndNm',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeqCnt',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicId',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicNm',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarPicId',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarPicNm',name:'name74',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDstClsCd',name:'작업구간구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'배정종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnYn',name:'배정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryClsCd',name:'조회구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizTyp',name:'S/T',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndNm',name:'복화구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPlNm',name:'상차지/반납지(오더)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchWrkPlCd',name:'상차지/반납지(지점) 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchWrkPlNm',name:'상차지/반납지(지점) 코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptCd',name:'타점소배정부서 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptNm',name:'타점소배정부서 코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnYn',name:'배정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'배차여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarPicId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarPicNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarConfirmDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicId',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarConfirmDtm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDptWrkPlCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPlCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temp',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTelNo',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'briefCntrSizCd',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'briefCntrTypCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'briefQty',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeqCnt',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name68',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_createCndt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'logisCardpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchRank1',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchRank2',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchRank3',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchRank4',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictVolincluYnCondt',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spMsg',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spRtnString',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spSeqString',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spTotString',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pSeqString',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pTotString',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatDtFrom',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatDtTo',name:'name23',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatDt',name:'name24',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatSeq',name:'name25',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatSeqCondt',name:'name26',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatSeqCondtTo',name:'name27',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cmpstcrgClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictVolincluYn',name:'name31',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regNm',name:'name34',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm',name:'name35',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'name36',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'name37',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchOrder',name:'name41',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spRtn',name:'name49',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pSeq',name:'name53',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pTot',name:'name54',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spSeq',name:'name55',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spTot',name:'name56',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inSeq',name:'name61',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inTot',name:'name62',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cmpstKndIn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cmpstKndOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_procedureResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spTot',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_origin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveDecisionOrderInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve1',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveDecisionOrderContainerInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search1","key":"IN_DS1"},{"id":"ds_results1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerAssignInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results1","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOrder',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerAssignInformationOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOrder_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_runProcedure',action:'/ncall.ds.op.wrkplan.transwrkplan.RunCompositeCargoAutoCreateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_createCndt","key":"IN_DS1"},{"id":"ds_procedureResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_procedureResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_runProcedure_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_cmpstKnd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_cmpstKndIn',target:'data:json,{"id":"ds_cmpstKndOut","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_cmpstKnd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurrDate = $c.date.getServerDateTime($p); // 서버를 기준으로 현재 날짜 반환
scwin.vFirstDate = $c.date.getDateAddMonthDirection($p, scwin.vCurrDate, 0, "F");
scwin.btnFlag = ""; // 신규, 수정 구분자
scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수 

scwin.spSeq = 0;
scwin.spTot = 0;
scwin.olddata = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  // 세션정보

  let memJson = $c.data.getMemInfo($p);
  scwin.gv_userId = $c.data.getMemInfo($p, "userId");
  scwin.gv_loabranCd = $c.data.getMemInfo($p, "loUpperLobranCd");

  //복화종류코드
  scwin.f_cmpstKnd();

  //작업권역
  scwin.f_districtSearch();
  const codeOptions = [{
    grpCd: "ZZ307",
    compID: "acb_lc_wrkDstClsCd",
    opt: {
      "range": "1,OP"
    }
  } // 작업구간
  , {
    grpCd: "SD104",
    compID: "acb_lc_assgnClsCd"
  } // 배정구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  const utilOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lc_lobranCd"
  }];
  await $c.data.setGauceUtil($p, utilOptions, function () {
    //배차점소
    acb_lc_lobranCd.setValue(scwin.gv_loabranCd);
  });

  //총괄배정여부
  acb_lc_assgnYn.setValue("0");
  ica_em_odrDcsnDt.setValue(scwin.vCurrDate);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //화면로딩
  scwin.f_switchObjMode(1);
};

//-------------------------------------------------------------------------
// function name : f_cmpstKnd
// function desc : 복화종류
//-------------------------------------------------------------------------
scwin.f_cmpstKnd = function () {
  //ds_cmpstKnd.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=DsCommonEBC&queryId=retriveDsCommonCombo&param1=OP118";
  //ds_cmpstKnd.Reset();

  dma_cmpstKndIn.set("sysCd", "DsCommonEBC");
  dma_cmpstKndIn.set("queryId", "retriveDsCommonCombo");
  dma_cmpstKndIn.set("param1", "OP118");
  $c.sbm.execute($p, sbm_ds_cmpstKnd);
};
scwin.sbm_ds_cmpstKnd_submitdone = function (e) {};

//-------------------------------------------------------------------------
// 화면구성요소 제어(버튼 입력박스등등 disable, enable)
//-------------------------------------------------------------------------
scwin.f_switchObjMode = function (gubun) {
  switch (gubun) {
    case 1:
      //화면로딩
      scwin.btnFlag = "";
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_save]);
      $c.gus.cfDisableObjects($p, [btn_switchTabMenu3]);
      $c.gus.cfDisableObjects($p, [ed_em_lodeptCd, txt_lodeptNm, btn_lodeptCd]);
      $c.gus.cfDisableObjects($p, [ed_em_longdistAlloccarPicId, txt_longdistAlloccarPicNm, btn_longdistAlloccarPicId, cbx_chk_longdistYn, txt_td_longdistAlloccarConfirmDtm]);
      $c.gus.cfDisableObjects($p, [ed_em_shtlAlloccarPicId, txt_shtlAlloccarPicNm, btn_shtlAlloccarPicId, cbx_chk_shtlYn, txt_td_shtlAlloccarConfirmDtm]);
      break;
    case 2:
      //조회
      break;
    case 3:
      //신규
      break;
    case 4:
      //수정
      scwin.btnFlag = "update";
      break;
    case 5:
      //조회완료
      scwin.btnFlag = "";
      scwin.f_switchObjMode(1); //화면로딩
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      $c.gus.cfEnableObjects($p, [btn_switchTabMenu3]);
      break;
    case 6:
      //수정불가
      break;
    case 7:
      //행삭제, 행취소
      break;
    case 8:
      //행추가
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_srchCond, [ica_em_odrDcsnDt]);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  let ret = $c.gus.cfValidate($p, [tb_srchCond]);
  if (!ret) {
    return;
  }
  $c.gus.cfInitObjects($p, [tb_results]);

  // td_odrNo.innerText 				= "";
  // td_odrPicNm.innerText 			= "";
  // td_lineCd.innerText 			= "";
  // td_briefCntrSizCd.innerText 	= "";
  // td_briefCntrTypCd.innerText 	= "";
  // td_briefQty.innerText 			= "";
  // td_bilgClntNm.innerText 		= "";
  // td_dptWrkPlNm.innerText 		= "";
  // td_arvWrkPlNm.innerText 		= "";
  // td_dptDtl.innerText 			= "";
  // td_arvDtl.innerText 			= "";
  // td_wrkStDt.innerText 			= "";
  // td_wrkEndDt.innerText 			= "";
  // td_assgnClsNm.innerText 		= "";
  // td_bondTransExpireDt.innerText 	= "";
  // td_blNo.innerText 				= "";
  // td_arvTelNo.innerText 			= "";
  // td_rmk.innerText 				= "";

  ds_results1.removeAll();
  scwin.btnFlag = ""; // 신규, 수정 구분자
  scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자

  //총괄관리자만 create 권한을 갖고 있으므로 구분하여 조회를 한다
  if ($p.getFrame().CREATE_AUTH == "C") {
    dma_search.set('qryClsCd', "1");
  } else {
    dma_search.set('qryClsCd', "2");
  }

  //tr_retrieve.Post();
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_results.getRowCount() == 0) {
    totalRows.setValue(0);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  totalRows.setValue(ds_results.getRowCount());
  gr_results.setFocusedCell(0, 0);
  //cfGoPrevPosition(ds_results, pos_groupCode);

  scwin.f_switchObjMode(5); //조회완료

  // 현재의 조회조건을 저장을 위해 복사해둔다
  //cfCopyDataSet(ds_search, ds_searchHidden);

  //총괄배정여부
  await scwin.f_assgnYn();
  await scwin.f_retrieve();
};
scwin.f_assgnYn = async function () {
  ds_results.setColumnFilter({
    type: 'func',
    colIndex: 'assgnYn',
    key: function (cellData) {
      var val = acb_lc_assgnYn.getValue();

      // 전체(2) 또는 빈값 → 필터 해제 효과
      if (val == "2" || val === "" || val === null || val === undefined) {
        return true;
      }
      return String(cellData) === String(val);
    },
    condition: 'and',
    clearFilter: 'all'
  });
  if (ds_results.getRowCount() > 0) {
    scwin.gr_results_onrowindexchange(0);
  }
  totalRows.setValue(ds_results.getRowCount());
};
scwin.f_retrieve = async function (gubun) {
  if (ds_results.getRowCount() == 0) {
    dma_search1.set("assgnYn", ds_results.getCellData(ds_results.getRowPosition(), "assgnYn"));
    dma_search1.set("lineCd", ds_results.getCellData(ds_results.getRowPosition(), "lineCd"));
    dma_search1.set("odrNo", ds_results.getCellData(ds_results.getRowPosition(), "odrNo"));

    //tr_retrieve1.Post();
    await $c.sbm.execute($p, sbm_retrieve1);
    return;
  }

  //var v_features = "copyHeader=yes,rowFrom=" + ds_results.getRowPosition() + ",rowCnt=1";
  //cfCopyDataSet(ds_results, ds_search1, v_features);
  //dma_search1.setJSON(ds_results.getRowJSON(ds_results.getRowPosition()));
  dma_search1.set("assgnYn", ds_results.getCellData(ds_results.getRowPosition(), "assgnYn"));
  dma_search1.set("lineCd", ds_results.getCellData(ds_results.getRowPosition(), "lineCd"));
  dma_search1.set("odrNo", ds_results.getCellData(ds_results.getRowPosition(), "odrNo"));

  //tr_retrieve1.Post();
  await $c.sbm.execute($p, sbm_retrieve1);
};
scwin.sbm_retrieve1_submitdone = function (e) {
  if (ds_results1.getRowCount() == 0) {
    totalRows1.setValue(0);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  gr_results1.setFocusedCell(0, 0);
  totalRows1.setValue(ds_results1.getRowCount());
};
scwin.gr_results_onrowindexchange = async function (rowIndex, oldRow) {
  var colStDt = ds_results.getCellData(rowIndex, "wrkStDt") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_results.getCellData(rowIndex, "wrkStDt"), "####/##/##");
  var colStHh = ds_results.getCellData(rowIndex, "wrkStHh") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_results.getCellData(rowIndex, "wrkStHh"), "##:##");
  ds_results.setCellData(rowIndex, "wrkStDtHh", colStDt + " " + colStHh);
  var colEndDt = ds_results.getCellData(rowIndex, "wrkEndDt") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_results.getCellData(rowIndex, "wrkEndDt"), "####/##/##");
  var colEndHh = ds_results.getCellData(rowIndex, "wrkEndHh") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_results.getCellData(rowIndex, "wrkEndHh"), "##:##");
  ds_results.setCellData(rowIndex, "wrkEndDtHh", colEndDt + " " + colEndHh);
  await scwin.f_retrieve();
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let colid = gr_results.getColumnID(columnIndex);
  if (colid == "odrNo") {
    // 오더세부사항 조회 
    scwin.f_orderDetail();
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = function () {
  var condition = "?";
  var row = ds_results.getRowPosition();
  var strOrderDetailUrl = "";
  var menuNm, menuId;
  if (row > -1) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    var v_odrNo = ds_results.getCellData(row, "odrNo");
    var v_odrKndCd = ds_results.getCellData(row, "odrKndCd");
    var v_transCargoClsCd = DsConstants.CARGO_CLS_CD_CONTAINER;
    condition += "odrNo=" + v_odrNo + "&type=retrieve";
    var data = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    if (v_transCargoClsCd == DsConstants.ODR_BULK) {
      // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)
      strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
      menuNm = "벌크오더";
      menuId = "sd_402_01_02t";
      //alert("오더세부사항조회 ["+row+"] : "+v_odrNo+"/"+v_odrKndCd+"/"+v_transCargoClsCd+"/"+strOrderDetailUrl+"/"+condition);
      //cfTabMenuUpdate( strOrderDetailUrl+condition , "벌크오더");

      $c.win.openMenu($p, menuNm, strOrderDetailUrl, menuId, data);
    } else {
      // 오더 종류가 컨테이너 오더인 경우 - 화물구분 (C : 컨테이너)
      strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
      menuNm = "컨테이너오더";
      menuId = "sd_402_01_11t";
      //alert("오더세부사항조회 ["+row+"] : "+v_odrNo+"/"+v_odrKndCd+"/"+v_transCargoClsCd+"/"+strOrderDetailUrl+"/"+condition);
      //cfTabMenuUpdate( strOrderDetailUrl+condition , "컨테이너오더");

      $c.win.openMenu($p, menuNm, strOrderDetailUrl, menuId, data);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더현황"));
    return;
  }
};

/* 총괄배정여부 */
scwin.acb_lc_assgnYn_onblur = async function (e) {
  await scwin.f_assgnYn();
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  let ret = $c.gus.cfValidate($p, [gr_results1]);
  if (!ret) {
    return;
  }
  if ($p.getFrame().CREATE_AUTH == "C") {
    for (var i = 0; i < ds_results1.getRowCount(); i++) {
      //작업단계가 운송단계가 아니면 수정할 수 없다
      if (ds_results1.getCellData(i, "wrkStpCd") != DsConstants.WRK_STP_CD_TRANS && ds_results1.getCellData(i, "wrkStpCd") != DsConstants.WRK_STP_CD_RETRV && ds_results1.getCellData(i, "wrkStpCd") != DsConstants.WRK_STP_CD_SHUTTLE && ds_results1.getCellData(i, "wrkStpCd") != DsConstants.WRK_STP_CD_GROUND_TRANS) {
        ds_results1.undoRow(i);
        ds_results1.setCellData(i, "temp", "1");
        continue;
      }

      //배차지시가 난 컨테이너정보는 수정할 수 없다
      if (ds_results1.getCellData(i, "wrkIndictYn") == 1) {
        ds_results1.undoRow(i);
        ds_results1.setCellData(i, "temp", "1");
        continue;
      }

      //작업장이 지정되지않은상태에서 부서를 지정할 수는 없다
      if (ds_results1.getCellData(i, "branchWrkPlCd") == "" && ds_results1.getCellData(i, "lodeptCd") != "") {
        $c.gus.cfAlertMsg($p, "상차지/반납지가 지정되지 않았습니다");
        return;
      }
      if (ds_results1.getCellData(i, "branchWrkPlCd") == "" && ds_results1.getOriginalCellData(i, "branchWrkPlCd") != "") {
        $c.gus.cfAlertMsg($p, "상차지/반납지가 지정되어 있던 컨테이너정보는 변경만 가능합니다");
        return;
      }
      if (ds_results1.getCellData(i, "lodeptCd") == "" && ds_results1.getOriginalCellData(i, "lodeptCd") != "") {
        $c.gus.cfAlertMsg($p, "배정부서가 지정되어 있던 컨테이너정보는 변경만 가능합니다");
        return;
      }
      ds_results1.setCellData(i, "temp", "1");
    }
  } else {
    for (var i = 1; i <= ds_results1.CountRow; i++) {
      //작업장이 지정되지않은상태에서 부서를 지정할 수는 없다
      if (ds_results1.getCellData(i, "branchWrkPlCd") == "" && ds_results1.getCellData(i, "lodeptCd") != "") {
        $c.gus.cfAlertMsg($p, "상차지/반납지가 지정되지 않았습니다");
        return;
      }
      if (ds_results1.getCellData(i, "branchWrkPlCd") == "" && ds_results1.getOriginalCellData(i, "branchWrkPlCd") != "") {
        $c.gus.cfAlertMsg($p, "상차지/반납지가 지정되어 있던 컨테이너정보는 변경만 가능합니다");
        return;
      }
      if (ds_results1.getCellData(i, "lodeptCd") == "" && ds_results1.getOriginalCellData(i, "lodeptCd") != "") {
        $c.gus.cfAlertMsg($p, "배정부서가 지정되어 있던 컨테이너정보는 변경만 가능합니다");
        return;
      }
    }
  }
  if (ds_results1.getModifiedIndex().length == 0) {
    //IsUpdated
    $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다");
    return;
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    scwin.pos_groupCode = ds_results.getRowPosition();
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.rowFlag = ""; // 초기화
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //lineCd
      /*
      rtnList = cfCommonPopUp('retrieveLineInfo'	// XML상의 SELECT ID	
                              ,pCode					// 화면에서의 ??? Code Element의	Value
                              ,pName					// 화면에서의 ??? Name Element의	Value
                              ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
                              ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
                              ,null					// Title순서	
                              ,"150,170"				// 보여주는 각 컬럼들의 폭	
                              ,null					// 컬럼중에서 숨기는	컬럼 지정	
                              ,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                              ,"440"					// POP-UP뛰을때 원도우의	사용자 정의	폭
                              ,"500"					// POP-UP뛰을때 우도우의	사용자 정의	높이	
                              ,null					// 윈도우 위치 Y좌표	
                              ,null					// 윈도우 위치 X좌표
                              ,null					// 중복체크여부	("F")
                              ,pAllSearch				// 전체검색허용여부	("F")
                              ,null					// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
                              );
                              
      cfSetReturnValue(rtnList, em_lineCd, txt_lineNm);
      */
      udc_lineCd.setSelectId('retrieveLineInfo');
      udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      //매출물류부서코드
      udc_lodeptCd.setSelectId('retrieveLogisDeptInfo');
      udc_lodeptCd.cfCommonPopUp(scwin.udc_lodeptCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "부서코드,부서명" // Title순서
      , "150,170" // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , DsConstants.LOBRAN_CLS_CD_TEAM // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , "440" // POP-UP뛰을때 원도우의	사용자 정의	폭
      , "500" // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "부서조회,부서코드,부서명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //상차지/반납지
      pCode = ds_results1.getCellData(ds_results1.getRowPosition(), "branchWrkPlCd").replace(/\s*$/, '');
      pName = ds_results1.getCellData(ds_results1.getRowPosition(), "branchWrkPlNm").replace(/\s*$/, '');
      var v_wrkStDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt");
      var v_lineCd = ds_results.getCellData(ds_results.getRowPosition(), "lineCd");
      var arrParam = new Array();
      arrParam[0] = new Array(pCode, pName, v_wrkStDt, v_lineCd); //코드,명,기준일,라인코드
      var pURL = '/ds/op/wrkrslts/stockrslts/op_303_03_23p.jsp';
      rtnList = window.showModalDialog(pURL, arrParam, "dialogWidth:720px; dialogHeight:520px");

      //cfAlertMsg("결과 Depot : " + rtnList[0][0] + "          " + rtnList[0][1]);
      cfSetGridReturnValue(rtnList, ds_results1, ds_results1.getRowPosition(), "branchWrkPlCd", "branchWrkPlNm");
      break;
    case 4:
      //배정부서
      pCode = ds_results1.getCellData(ds_results1.getRowPosition(), "lodeptCd").replace(/\s*$/, '');
      pName = ds_results1.getCellData(ds_results1.getRowPosition(), "lodeptNm").replace(/\s*$/, '');
      rtnList = cfCommonPopUp('retrieveLogisDeptInfo' // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , "<%= DsConstants.LOBRAN_CLS_CD_TEAM %>,,,,,,,,,운송" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      cfSetGridReturnValue(rtnList, ds_results1, ds_results1.getRowPosition(), "lodeptCd", "lodeptNm");
      if (rtnList != null && rtnList[0].trim() != "N/A") {
        ds_results1.setCellData(ds_results1.getRowPosition(), "upperLobranCd", rtnList[3]);
      } else {
        ds_results1.setCellData(ds_results1.getRowPosition(), "upperLobranCd", "");
      }
      break;
    case 5:
      //배차담당자
      udc_alloccarPicId.setSelectId('retrieveUserInfo');
      udc_alloccarPicId.cfCommonPopUp(scwin.udc_alloccarPicId_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , "1" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      //중장거리배차담당자
      udc_longdistAlloccarPicId.setSelectId('retrieveUserInfo');
      udc_longdistAlloccarPicId.cfCommonPopUp(scwin.udc_longdistAlloccarPicId_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , "1" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
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
      //셔틀배차담당자
      udc_shtlAlloccarPicId.setSelectId('retrieveUserInfo');
      udc_shtlAlloccarPicId.cfCommonPopUp(scwin.udc_shtlAlloccarPicId_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , "1" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = await $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
/* LINE */
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_em_lineCd, txt_lineNm, 1);
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_em_lineCd, 1, false);
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_em_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};
scwin.udc_lineCd_callBackFunc = function (rtnList) {
  //cfSetReturnValue(rtnList, em_lineCd, txt_lineNm, null);
  ed_em_lineCd.setValue(rtnList[0]);
  txt_lineNm.setValue(rtnList[1]);
};

/* 배차담당자 */
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_em_alloccarPicId, txt_alloccarPicNm, 5);
};
scwin.udc_alloccarPicId_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_alloccarPicNm, ed_em_alloccarPicId, 5, false);
};
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_em_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), 'F', 'T');
};
scwin.udc_alloccarPicId_callBackFunc = function (rtnList) {
  //cfSetReturnValue(rtnList, em_alloccarPicId, txt_alloccarPicNm);
  ed_em_alloccarPicId.setValue(rtnList[0]);
  txt_alloccarPicNm.setValue(rtnList[1]);
};

/* 중장거리담당자자 */
scwin.udc_longdistAlloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_em_longdistAlloccarPicId, txt_longdistAlloccarPicNm, 6);
};
scwin.udc_longdistAlloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_em_longdistAlloccarPicId.getValue(), txt_longdistAlloccarPicNm.getValue(), 'F', 'T');
};
scwin.udc_longdistAlloccarPicId_callBackFunc = function (rtnList) {
  //cfSetReturnValue(rtnList, em_longdistAlloccarPicId, txt_longdistAlloccarPicNm);
  ed_em_longdistAlloccarPicId.setValue(rtnList[0]);
  txt_longdistAlloccarPicNm.setValue(rtnList[1]);
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    for (var i = 0; i < ds_results1.getRowCount(); i++) {
      if (ds_results1.getCellData(i, "wrkIndictYn") == 0 && ds_results1.getCellData(i, "assgnYn") == 1 && ds_results1.getCellData(i, "longdistAlloccarPicId") == "") {
        ds_results1.setCellData(i, "longdistAlloccarPicId", em_longdistAlloccarPicId.getValue());
        ds_results1.setCellData(i, "longdistAlloccarPicNm", txt_longdistAlloccarPicNm.getValue());
      }
    } //for
  }
  if (ds_results1.getRowCount() == 0) {
    em_longdistAlloccarPicId.setValue("");
    txt_longdistAlloccarPicNm.setValue("");
  }
};

/* 셔틀담당자 */
scwin.udc_shtlAlloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_em_shtlAlloccarPicId, txt_shtlAlloccarPicNm, 7, false);
};
scwin.udc_shtlAlloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_em_shtlAlloccarPicId.getValue(), txt_shtlAlloccarPicNm.getValue(), 'F', 'T');
};
scwin.udc_shtlAlloccarPicId_callBackFunc = function (rtnList) {
  //cfSetReturnValue(rtnList, em_shtlAlloccarPicId, txt_shtlAlloccarPicNm);
  ed_em_shtlAlloccarPicId.setValue(rtnList[0]);
  txt_shtlAlloccarPicNm.setValue(rtnList[1]);
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    for (var i = 0; i < ds_results1.getRowCount(); i++) {
      if (ds_results1.getCellData(i, "wrkIndictYn") == 0 && ds_results1.getCellData(i, "assgnYn") == 1 && ds_results1.getCellData(i, "shtlAlloccarPicId") == "") {
        ds_results1.setCellData(i, "shtlAlloccarPicId", ed_em_shtlAlloccarPicId.getValue());
        ds_results1.setCellData(i, "shtlAlloccarPicNm", txt_shtlAlloccarPicNm.getValue());
      }
    } //for
  }
  if (ds_results1.getRowCount() == 0) {
    ed_em_shtlAlloccarPicId.setValue("");
    txt_shtlAlloccarPicNm.setValue("");
  }
};

/* 타점소배정부서 */
scwin.udc_lodeptCd_onblurCodeEvent = function (e) {};
scwin.udc_lodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_em_lodeptCd.getValue().trim(), txt_lodeptNm.getValue().trim(), 'F', 'T');
};
scwin.udc_lodeptCd_callBackFunc = function (rtnList) {
  //cfSetReturnValue(rtnList, em_lodeptCd, txt_lodeptNm);
  ed_em_lodeptCd.setValue(rtnList[0]);
  txt_lodeptNm.setValue(rtnList[1]);
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    for (var i = 0; i < ds_results1.getRowCount(); i++) {
      ds_results1.setCellData(i, "lodeptCd", ed_em_lodeptCd.getValue());
      ds_results1.setCellData(i, "lodeptNm", txt_lodeptNm.getValue());
      ds_results1.setCellData(i, "upperLobranCd", rtnList[3]);
    }
  }
  if (ds_results1.getRowCount() == 0) {
    ed_em_lodeptCd.setValue("");
    txt_lodeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 복화연결조회 버튼 클릭 - btn_switchTabMenu5(f_linkCmpsRetrieve)
//-------------------------------------------------------------------------
scwin.btn_switchTabMenu5_onclick = function (e) {
  //cfTabMenuUpdate( "/ds/op/wrkplan/transwrkplan/op_202_03_01b.jsp", "복화물량자동검색");

  var menuUrl = "ui/ds/op/wrkplan/transwrkplan/op_202_03_01b.xml";
  var menuNm = "복화물량자동검색";
  var menuId = "";
  var paramObj = {};
  $c.win.openMenu($p, menuNm, menuUrl, menuId, paramObj);
};

//-------------------------------------------------------------------------
// 탭메뉴(EMPTY컨테이너조회, 복화연결등록, 운송작업지시등록) 링크 - btn_switchTabMenu1, btn_switchTabMenu2, btn_switchTabMenu4
//-------------------------------------------------------------------------
scwin.btn_switchTabMenu1_onclick = function (e) {
  scwin.f_switchTabMenu(1);
};
scwin.btn_switchTabMenu2_onclick = function (e) {
  scwin.f_switchTabMenu(2);
};
scwin.btn_switchTabMenu4_onclick = function (e) {
  scwin.f_switchTabMenu(4);
};
scwin.f_switchTabMenu = function (gubun) {
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더"));
    return;
  } else {
    var v_lobranCd = acb_lc_lobranCd.getValue();
    var v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    var v_cargoClsCd = DsConstants.CARGO_CLS_CD_CONTAINER;
    var v_wrkStDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt");
    var v_wrkEndDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkEndDt");
    var menuNm, menuId;
    var menuUrl = "";
    var paramObj = {};
    if ($c.gus.cfIsNull($p, v_odrNo)) {
      $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
      return;
    }
    switch (gubun) {
      case 1:
        menuUrl = "/ui/ds/op/wrkrslts/stockrslts/op_303_03_22b.xml";
        menuNm = "EMPTY컨테이너조회";
        menuId = "";
        paramObj.pgmInfo = {
          odrNo: v_odrNo,
          lobranCd: v_lobranCd,
          cargoClsCd: v_cargoClsCd,
          wrkStDt: v_wrkStDt,
          wrkEndDt: v_wrkEndDt
        };
        //cfTabMenuUpdate( menuUrl , "EMPTY컨테이너조회");
        $c.win.openMenu($p, menuNm, menuUrl, menuId, paramObj);
        break;
      case 2:
        menuUrl = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_02b.xml";
        menuNm = "복화연결등록";
        menuId = "";
        paramObj.pgmInfo = {
          odrNo: v_odrNo,
          lobranCd: v_lobranCd,
          cargoClsCd: v_cargoClsCd,
          dptIntendDt: v_wrkStDt,
          dptIntendDt2: v_wrkEndDt
        };
        //cfTabMenuUpdate( menuUrl , "복화연결등록");
        $c.win.openMenu($p, menuNm, menuUrl, menuId, paramObj);
        break;
      case 3:
        menuUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_28b.xml";
        menuNm = "작업경로변경";
        menuId = "";
        paramObj.pgmInfo = {
          odrNo: v_odrNo,
          lobranCd: v_lobranCd,
          cargoClsCd: v_cargoClsCd
        };
        //cfTabMenuUpdate( menuUrl , "작업경로변경");
        $c.win.openMenu($p, menuNm, menuUrl, menuId, paramObj);
        break;
      case 4:
        menuUrl = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_03b.xml";
        menuNm = "중장거리운송작업지시등록(컨테이너)";
        menuId = "";
        paramObj.pgmInfo = {
          odrNo: v_odrNo,
          lobranCd: v_lobranCd,
          cargoClsCd: v_cargoClsCd,
          wrkStDt: v_wrkStDt,
          wrkEndDt: v_wrkEndDt
        };
        //cfTabMenuUpdate( menuUrl , "중장거리운송작업지시등록(컨테이너)");
        $c.win.openMenu($p, menuNm, menuUrl, menuId, paramObj);
        break;
    }
  }
};

//--------------------------------
// 작업경로변경 팝업 - btn_switchTabMenu3(f_workPathMod)
//--------------------------------
scwin.btn_switchTabMenu3_onclick = async function (e) {
  if (ds_results1.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["대상물량"]); //"선택된 @이(가) 없습니다.";
    return;
  }
  var arrParam = new Array();
  arrParam[0] = ds_results1.getCellData(ds_results1.getRowPosition(), "odrNo"); //오더번호
  arrParam[1] = ds_results1.getCellData(ds_results1.getRowPosition(), "cntrSeq"); //컨테이너순번

  // /ds/op/wrkplan/transwrkplan/op_202_02_26p
  var pURL = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_26p.xml";
  var opts = {
    id: "smpPop",
    popupName: "작업경로 상세정보 변경",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "Win pop" //Layer pop
    ,
    width: 930,
    height: 710
  };
  let rtnVal = await $c.win.openPopup($p, pURL, opts, arrParam);
  if (rtnVal == 1) {
    scwin.btn_retrieve_onclick(); //재조회
  }
  //var rtnVal = window.showModalDialog(pURL,arrParam,"dialogWidth:930px; dialogHeight:570px");
};

//--------------------------------
// N건담당자지정 - btn_saveOrder(f_SaveOrder)
//--------------------------------
scwin.btn_saveOrder_onclick = async function (e) {
  if (ed_em_longdistAlloccarPicId.getValue() == "" && ed_em_shtlAlloccarPicId.getValue() == "") {
    $c.win.alert($p, "배차담당자를 지정해 주십시오.");
    return false;
  }
  //중장거리, 셔틀담당자를 체크된 오더의 row에 저장하기전에 insert
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == 1) {
      ds_results.setCellData(i, "longdistAlloccarPicId", ed_em_longdistAlloccarPicId.getValue());
      ds_results.setCellData(i, "longdistAlloccarPicNm", txt_longdistAlloccarPicNm.getValue());
      ds_results.setCellData(i, "shtlAlloccarPicId", ed_em_shtlAlloccarPicId.getValue());
      ds_results.setCellData(i, "shtlAlloccarPicNm", txt_shtlAlloccarPicNm.getValue());
    }
  } //for

  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    //tr_save_order.Post();
    $c.sbm.execute($p, sbm_saveOrder);
  }
};
scwin.sbm_saveOrder_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.rowFlag = ""; // 초기화
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 오더별생성 - f_runProcedure
//-------------------------------------------------------------------------
scwin.btn_runProcedure_onclick = async function (e) {
  let confirm = await $c.win.confirm($p, "오더별로 생성 하시겠습니까?");
  if (confirm) {
    var chkCnt = 0;
    for (var k = 0; k < ds_results.getRowCount(); k++) {
      if (ds_results.getCellData(k, "chk") == 1) {
        chkCnt++;
        break;
      }
    }
    if (chkCnt == 0) {
      $c.win.alert($p, "선택한 오더정보가 없습니다. 화면의 좌측 GRID에서 오더를 선택해주십시오.");
      return false;
    }
    dma_createCndt.set("regId", scwin.gv_userId);
    dma_createCndt.set("creatClsCd", "B");
    //dma_createCndt.set("logisCardpCd", "PUS");
    dma_createCndt.set("spRtnString", 0);
    dma_createCndt.set("spSeqString", 0);
    dma_createCndt.set("spTotString", 0);
    dma_createCndt.set("pSeqString", 0);
    dma_createCndt.set("pTotString", 0);
    dma_createCndt.set("searchRank1", acb_lc_searchRank1.getValue());
    dma_createCndt.set("searchRank2", acb_lc_searchRank2.getValue());
    dma_createCndt.set("searchRank3", acb_lc_searchRank3.getValue());
    dma_createCndt.set("searchRank4", acb_lc_searchRank4.getValue());
    if (cbx_chk_wrkIndictVolincluYnCondtYn.getValue() == 1) {
      dma_createCndt.set("wrkIndictVolincluYnCondt", 1);
    } else {
      dma_createCndt.set("wrkIndictVolincluYnCondt", 0);
    }

    //왼쪽 그리드에서 check한 오더개수 + 오더의 컨테이너 개수 만큼 프로시져 호출
    //SP_OP_CMPSTCRGLINK_AUTO_CREATE
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "chk") == 1) {
        dma_createCndt.set("odrNo", ds_results.getCellData(i, "odrNo"));
        dma_createCndt.set("dptIntendDd", ds_results.getCellData(i, "wrkStDt"));
        dma_createCndt.set("odrKndCd", ds_results.getCellData(i, "odrKndCd"));
        dma_createCndt.set("dptWrkPlCd", ds_results.getCellData(i, "dptWrkPlCd"));
        dma_createCndt.set("arvWrkPlCd", ds_results.getCellData(i, "arvWrkPlCd"));
        dma_createCndt.set("spSeqString", scwin.spSeq);
        dma_createCndt.set("spTotString", scwin.spTot);
        //alert("ddd"+dma_createCndt.get("spSeqString")+"/////"+dma_createCndt.get("spTotString"));
        //dma_createCndt.set("cntrNo", ds_results1.getCellData(j, "cntrNo"));
        //dma_createCndt.set("cntrSizCd", ds_results1.getCellData(j, "cntrSizTyp").substr(0,2));

        //tr_runProcedure.Post();
        await $c.sbm.execute($p, sbm_runProcedure);
      }
    } //for
  } //if 

  //alert("오더별 생성 작업을 완료하였습니다.");
};
scwin.sbm_runProcedure_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_procedureResults.getRowCount() > 0) {
      if (ds_procedureResults.getCellData(0, "spRtn") == "-1") {
        scwin.spSeq = ds_procedureResults.getCellData(0, "spSeq");
        scwin.spTot = ds_procedureResults.getCellData(0, "spTot");
        await $c.win.alert($p, "오더번호 : " + dma_createCndt.get("odrNo") + "   " + ds_procedureResults.getCellData(0, "spMsg"));
      }
    }
  }
};

/* 선택에 따른 그리드 데이터 필터링 */
scwin.f_onFilter = function () {
  var v_ret = true;
  var condition = "";

  //총괄배정여부가 체크되어있으면 값이 1인것만 보여준다
  if (acb_lc_assgnYn.getValue() == 1) {
    condition = "assgnYn == '0'";
    ds_results.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_results, condition);
    //return false;
  } else if (acb_lc_assgnYn.getValue() == 0) {
    condition = "assgnYn == '1'";
    ds_results.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_results, condition);
    //return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_customFormatter
// function desc : Grid(gr_results) 내 Column 의 Value 를 Decode 해서 Return 한다.
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = gr_results.getColumnID(colIndex);
  let rtnVal = "";
  if (columnId == "assgnYn") {
    rtnVal = $c.gus.decode($p, data, 1, "Y", "N");
  }
  return rtnVal;
};

//-------------------------------------------------------------------------
// function name : f_customFormatter
// function desc : Grid(gr_results1) 내 Column 의 Value 를 Decode 해서 Return 한다.
//-------------------------------------------------------------------------
scwin.f_customFormatter1 = function (data, formattedData, rowIndex, colIndex) {
  let columnId = gr_results1.getColumnID(colIndex);
  let rtnVal = "";
  if (columnId == "assgnYn") {
    rtnVal = $c.gus.decode($p, data, 1, "Y", "N");
  }
  if (columnId == "wrkIndictYn") {
    rtnVal = $c.gus.decode($p, data, 1, "Y", "N");
  }
  return rtnVal;
};
scwin.gr_results1_onrowindexchange = function (rowIndex, oldRow) {
  let row = rowIndex;
  if (ds_results1.getCellData(row, "wrkIndictYn") == 1
  // 철송도 수정가능하게 우선적으로 주석처리함.
  // || (ds_results1.getCellData(row, "wrkStpCd") != DsConstants.WRK_STP_CD_TRANS
  // && ds_results1.getCellData(row, "wrkStpCd") != DsConstants.WRK_STP_CD_RETRV)
  ) {
    gr_results1.setColumnReadOnly('branchWrkPlCd', true); //'Edit') = "None";
    gr_results1.setColumnReadOnly('branchWrkPlNm', true);
    gr_results1.setColumnReadOnly('lodeptCd', true);
    gr_results1.setColumnReadOnly('lodeptNm', true);
    $c.gus.cfDisableObjects($p, [ed_em_lodeptCd, txt_lodeptNm, btn_lodeptCd]);
    $c.gus.cfDisableObjects($p, [ed_em_longdistAlloccarPicId, txt_longdistAlloccarPicNm, btn_longdistAlloccarPicId, cbx_chk_longdistYn, txt_td_longdistAlloccarConfirmDtm]);
    $c.gus.cfDisableObjects($p, [ed_em_shtlAlloccarPicId, txt_shtlAlloccarPicNm, btn_shtlAlloccarPicId, cbx_chk_shtlYn, txt_td_shtlAlloccarConfirmDtm]);
    if (ds_results1.getCellData(row, "longdistAlloccarPicId") == scwin.gv_userId) {
      $c.gus.cfEnableObjects($p, [cbx_chk_longdistYn]);
    } else if (ds_results1.getCellData(row, "shtlAlloccarPicId") == scwin.gv_userId) {
      $c.gus.cfEnableObjects($p, [cbx_chk_shtlYn]);
    } else {
      $c.gus.cfDisableObjects($p, [cbx_chk_longdistYn, cbx_chk_shtlYn]);
    }
  } else {
    if ($p.getFrame().CREATE_AUTH == "C") {
      gr_results1.setColumnReadOnly('branchWrkPlCd', false); //'Edit') = "ANY";
      gr_results1.setColumnReadOnly('branchWrkPlNm', false);
      gr_results1.setColumnReadOnly('lodeptCd', false);
      gr_results1.setColumnReadOnly('lodeptNm', false);
      $c.gus.cfEnableObjects($p, [ed_em_lodeptCd, txt_lodeptNm, btn_lodeptCd]);
      $c.gus.cfEnableObjects($p, [ed_em_longdistAlloccarPicId, txt_longdistAlloccarPicNm, btn_longdistAlloccarPicId, txt_td_longdistAlloccarConfirmDtm]);
      $c.gus.cfEnableObjects($p, [ed_em_shtlAlloccarPicId, txt_shtlAlloccarPicNm, btn_shtlAlloccarPicId, txt_td_shtlAlloccarConfirmDtm]);
    } else if (ds_results1.getCellData(row, "longdistAlloccarPicId") == scwin.gv_userId) {
      gr_results1.setColumnReadOnly('branchWrkPlCd', true); //, 'Edit') = "None";
      gr_results1.setColumnReadOnly('branchWrkPlNm', true);
      gr_results1.setColumnReadOnly('lodeptCd', true);
      gr_results1.setColumnReadOnly('lodeptNm', true);
      $c.gus.cfEnableObjects($p, [cbx_chk_longdistYn]);
    } else if (ds_results1.getCellData(row, "shtlAlloccarPicId") == scwin.gv_userId) {
      gr_results1.setColumnReadOnly('branchWrkPlCd', true); //'Edit') = "None";
      gr_results1.setColumnReadOnly('branchWrkPlNm', true);
      gr_results1.setColumnReadOnly('lodeptCd', true);
      gr_results1.setColumnReadOnly('lodeptNm', true);
      $c.gus.cfEnableObjects($p, [cbx_chk_shtlYn]);
    } else {
      $c.gus.cfDisableObjects($p, [cbx_chk_longdistYn, cbx_chk_shtlYn]);
    }
  }
  ed_em_longdistAlloccarPicId.setValue(ds_results1.getCellData(row, "longdistAlloccarPicId"));
  txt_longdistAlloccarPicNm.setValue(ds_results1.getCellData(row, "longdistAlloccarPicNm"));
  cbx_chk_longdistYn.setValue(ds_results1.getCellData(row, "longdistYn"));
  txt_td_longdistAlloccarConfirmDtm.setValue(ds_results1.getCellData(row, "longdistAlloccarConfirmDtm"));
  ed_em_shtlAlloccarPicId.setValue(ds_results1.getCellData(row, "shtlAlloccarPicId"));
  txt_shtlAlloccarPicNm.setValue(ds_results1.getCellData(row, "shtlAlloccarPicNm"));
  cbx_chk_shtlYn.setValue(ds_results1.getCellData(row, "shtlYn"));
  txt_td_shtlAlloccarConfirmDtm.setValue(ds_results1.getCellData(row, "shtlAlloccarConfirmDtm"));
};
scwin.gr_results1_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_results1.getColumnID(columnIndex);
  if (colid == "branchWrkPlCd") {
    scwin.f_openCommonPopUp(3, null, null, 'F', 'T');
  } else if (colid == "lodeptCd") {
    scwin.f_openCommonPopUp(4, null, null, 'F', 'T');
  }
};
scwin.gr_results1_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};
scwin.gr_results1_onafteredit = function (rowIndex, columnIndex, value) {
  let row = rowIndex;
  let colid = gr_results1.getColumnID(columnIndex);
  switch (colid) {
    case "branchWrkPlCd":
      ds_results1.setCellData(row, colid, ds_results1.getCellData(row, colid).toUpperCase());
      if (ds_results1.getCellData(row, colid) != "" && ds_results1.getCellData(row, colid) != scwin.olddata) {
        ds_results1.setCellData(row, "branchWrkPlNm", "");
        scwin.f_openCommonPopUp(3, null, null, 'T', 'T');
      } else if (ds_results1.getCellData(row, colid) == "") {
        ds_results1.setCellData(row, "branchWrkPlCd", "");
        ds_results1.setCellData(row, "branchWrkPlNm", "");
      }
      break;
    case "branchWrkPlNm":
      if (ds_results1.getCellData(row, colid) != "" && ds_results1.getCellData(row, colid) != scwin.olddata) {
        ds_results1.setCellData(row, "branchWrkPlCd", "");
        scwin.f_openCommonPopUp(3, null, null, 'T', 'T');
      } else if (ds_results1.getCellData(row, colid) == "") {
        ds_results1.setCellData(row, "branchWrkPlCd", "");
        ds_results1.setCellData(row, "branchWrkPlNm", "");
      }
      break;
    case "lodeptCd":
      ds_results1.setCellData(row, colid, ds_results1.getCellData(row, colid).toUpperCase());
      if (ds_results1.getCellData(row, colid) != "" && ds_results1.getCellData(row, colid) != scwin.olddata) {
        ds_results1.setCellData(row, "lodeptNm", "");
        ds_results1.setCellData(row, "upperLobranCd", "");
        scwin.f_openCommonPopUp(4, null, null, 'T', 'T');
      } else if (ds_results1.getCellData(row, colid) == "") {
        ds_results1.setCellData(row, "lodeptCd", "");
        ds_results1.setCellData(row, "lodeptNm", "");
        ds_results1.setCellData(row, "upperLobranCd", "");
      }
      break;
    case "lodeptNm":
      ds_results1.setCellData(row, colid, ds_results1.getCellData(row, colid).toUpperCase());
      if (ds_results1.getCellData(row, colid) != "" && ds_results1.getCellData(row, colid) != scwin.olddata) {
        ds_results1.setCellData(row, "lodeptCd", "");
        ds_results1.setCellData(row, "upperLobranCd", "");
        scwin.f_openCommonPopUp(4, null, null, 'T', 'T');
      } else if (ds_results1.getCellData(row, colid) == "") {
        ds_results1.setCellData(row, "lodeptCd", "");
        ds_results1.setCellData(row, "lodeptNm", "");
        ds_results1.setCellData(row, "upperLobranCd", "");
      }
      break;
  }

  //[운송조건코드=왕복,오더출발작업장<>지점작업장,오더작업장<>지점작업장,작업단계코드=회수단계] 인경우에는 복화종류가 무조건 Depot 이다
  if (ds_results1.getCellData(row, "branchWrkPlCd") == "") {
    ds_results1.setCellData(row, "cmpstcrgKndCd", "");
    ds_results1.setCellData(row, "cmpstcrgKndNm", "");
  } else if (ds_results1.getCellData(row, "transCondCd") == DsConstants.TRANS_COND_CD_ROUTRP && ds_results1.getCellData(row, "odrDptWrkPlCd") != ds_results1.getCellData(row, "branchWrkPlCd") && ds_results1.getCellData(row, "odrWrkPlCd") != ds_results1.getCellData(row, "branchWrkPlCd") && ds_results1.getCellData(row, "wrkStpCd") == DsConstants.WRK_STP_CD_RETRV) {
    ds_results1.setCellData(row, "cmpstcrgKndCd", DsConstants.CMPSTCRG_KND_CD_DEPOT);
    ds_results1.setCellData(row, "cmpstcrgKndNm", ds_cmpstKnd.getCellData(ds_cmpstKndOut.getMatchedIndex("code", DsConstants.CMPSTCRG_KND_CD_DEPOT), "name"));
  } else {
    ds_results1.setCellData(row, "cmpstcrgKndCd", ds_results1.getOriginalCellData(row, "cmpstcrgKndCd"));
    ds_results1.setCellData(row, "cmpstcrgKndNm", ds_results1.getOriginalCellData(row, "cmpstcrgKndNm"));
  }
};
scwin.acb_lc_wrkDstClsCd_onblur = async function (e) {
  if (acb_lc_wrkDstClsCd.getValue() == DsConstants.WRK_DST_CLS_CD_J) {
    await scwin.f_districtSearch(DsConstants.WRK_DST_CLS_CD_J);
  } else if (acb_lc_wrkDstClsCd.getValue() == DsConstants.WRK_DST_CLS_CD_L && acb_lc_lobranCd.getValue() == DsConstants.UPPER_LOBRAN_CD_BUSAN) {
    //점소가 부산이고 작업구간이 로컬인경우
    await scwin.f_districtSearch(DsConstants.WRK_DST_CLS_CD_L);
  } else if (acb_lc_wrkDstClsCd.getValue() == DsConstants.WRK_DST_CLS_CD_L) {
    await scwin.f_districtSearch(DsConstants.WRK_DST_CLS_CD_J);
  } else {
    await scwin.f_districtSearch();
  }
};
scwin.f_districtSearch = async function (gubun) {
  //작업권역전체
  //var vCBData = "^전체,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {DsConstants.WRK_DISTRICT_CD_CMPST, DsConstants.WRK_DISTRICT_CD_PLO}) %>";
  //복화권역
  //var vCBDataJ = "^전체,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {DsConstants.WRK_DISTRICT_CD_CMPST}) %>";
  //부산로컬권역
  //var vCBDataL = "^전체,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {DsConstants.WRK_DISTRICT_CD_PLO}) %>";
  const vCBDataJ = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [DsConstants.WRK_DISTRICT_CD_CMPST],
    compID: "acb_lc_districtCd"
  }];
  const vCBDataL = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [DsConstants.WRK_DISTRICT_CD_PLO],
    compID: "acb_lc_districtCd"
  }];
  const vCBData = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [DsConstants.WRK_DISTRICT_CD_CMPST, DsConstants.WRK_DISTRICT_CD_PLO],
    compID: "acb_lc_districtCd"
  }];
  if (gubun == DsConstants.WRK_DST_CLS_CD_J) {
    //acb_lc_districtCd.CBData = vCBDataJ;
    await $c.data.setGauceUtil($p, vCBDataJ, function () {
      //배차점소
      acb_lc_districtCd.setSelectedIndex(0);
    });
  } else if (gubun == DsConstants.WRK_DST_CLS_CD_L) {
    //acb_lc_districtCd.CBData = vCBDataL;
    await $c.data.setGauceUtil($p, vCBDataL, function () {
      //배차점소
      acb_lc_districtCd.setSelectedIndex(0);
    });
  } else {
    //acb_lc_districtCd.CBData = vCBData;
    await $c.data.setGauceUtil($p, vCBData, function () {
      //배차점소
      acb_lc_districtCd.setSelectedIndex(0);
    });
  }

  //acb_lc_districtCd.ResetData();
};
scwin.ed_em_odrNo_oneditkeyup = function (info, e) {
  var newVals = info.newValue;
  ed_em_odrNo.setValue(newVals.toUpperCase());
};
scwin.udc_longdistAlloccarPicId_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_longdistAlloccarPicNm, em_longdistAlloccarPicId, 6, false);
};
scwin.udc_shtlAlloccarPicId_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_shtlAlloccarPicNm, ed_em_shtlAlloccarPicId, 7, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.lobranCd',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_lineCd',nameId:'txt_lineNm',btnId:'btn_lineCd',id:'udc_lineCd',refDataCollection:'dma_search',code:'lineCd','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',maxlengthCode:'5','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_odrKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_search.odrKndCd',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너수입일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너수출일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'POSITION'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C7'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더확정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_em_odrDcsnDt',pickerType:'dynamic',style:'',ref:'data:dma_search.odrDcsnDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_em_odrNo',placeholder:'',style:'width:150px;',ref:'data:dma_search.odrNo','ev:oneditkeyup':'scwin.ed_em_odrNo_oneditkeyup',allowChar:'a-zA-Z0-9',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_wrkDstClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.wrkDstClsCd','ev:onviewchange':'scwin.acb_lc_wrkDstClsCd_onblur'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOOR권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_districtCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.districtCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'17'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_assgnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.assgnClsCd',visibleRowNum:'19'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총괄배정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_assgnYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.assgnYn',sortOption:'value',sortMethod:'ascending','ev:onviewchange':'scwin.acb_lc_assgnYn_onblur'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미배정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_alloccarPicId',nameId:'txt_alloccarPicNm',btnId:'btn_alloccarPicId',id:'udc_alloccarPicId',refDataCollection:'dma_search',code:'alloccarPicId','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent',allowCharCode:'a-z0-9A-Z',maxlengthCode:'8','ev:onviewchangeNameEvent':'scwin.udc_alloccarPicId_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더리스트',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_results',grdDownOpts:'{"fileName" : "오더리스트.xlsx" }',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',autoFit:'allColumn',id:'gr_results',visibleRowNum:'15',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_results_onrowindexchange','ev:oncelldblclick':'scwin.gr_results_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column1',value:'선택',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column15',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column13',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'총괄배정여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',class:'underline col-type2',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dptWrkPlNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'arvWrkPlNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'assgnYn',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'확정오더정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_results',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_odrNo',label:'',style:'',ref:'data:ds_results.odrNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_odrPicNm',label:'',style:'',ref:'data:ds_results.odrPicNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_lineCd',label:'',style:'',ref:'data:ds_results.lineCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'SIZE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_briefCntrSizCd',label:'',style:'',ref:'data:ds_results.briefCntrSizCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TYPE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_briefCntrTypCd',label:'',style:'',ref:'data:ds_results.briefCntrTypCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_briefQty',label:'',style:'',ref:'data:ds_results.briefQty'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구화주',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_bilgClntNm',label:'',style:'',ref:'data:ds_results.bilgClntNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출발지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_dptWrkPlNm',label:'',style:'',ref:'data:ds_results.dptWrkPlNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_arvWrkPlNm',label:'',style:'',ref:'data:ds_results.arvWrkPlNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발상세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_dptDtl',label:'',style:'',ref:'data:ds_results.dptDtl'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착상세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_arvDtl',label:'',style:'',ref:'data:ds_results.arvDtl'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_assgnClsNm',label:'',style:'',ref:'data:ds_results.assgnClsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_wrkStDt',label:'',style:'',ref:'data:ds_results.wrkStDtHh'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_wrkEndDt',label:'',style:'',ref:'data:ds_results.wrkEndDtHh'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세운송기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_bondTransExpireDt',label:'',style:'',ref:'data:ds_results.bondTransExpireDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_blNo',label:'',style:'',ref:'data:ds_results.blNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOOR TEL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_arvTelNo',label:'',style:'',ref:'data:ds_results.arvTelNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더특기사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_rmk',label:'',style:'',ref:'data:ds_results.rmk'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:190px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중장거리담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_longdistAlloccarPicId',nameId:'txt_longdistAlloccarPicNm',btnId:'btn_longdistAlloccarPicId',id:'udc_longdistAlloccarPicId','ev:onblurCodeEvent':'scwin.udc_longdistAlloccarPicId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_longdistAlloccarPicId_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_longdistAlloccarPicId_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중장거리확인',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_chk_longdistYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중장거리확인일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_longdistAlloccarConfirmDtm',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'셔틀담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_shtlAlloccarPicId',nameId:'txt_shtlAlloccarPicNm',btnId:'btn_shtlAlloccarPicId',id:'udc_shtlAlloccarPicId','ev:onblurCodeEvent':'scwin.udc_shtlAlloccarPicId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_shtlAlloccarPicId_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_shtlAlloccarPicId_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'셔틀확인',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_chk_shtlYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'셔틀확인일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_td_shtlAlloccarConfirmDtm',label:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'타점소배정부서',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',hideName:'Y',codeId:'ed_em_lodeptCd',nameId:'txt_lodeptNm',btnId:'btn_lodeptCd',id:'udc_lodeptCd','ev:onblurCodeEvent':'scwin.udc_lodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lodeptCd_onclickEvent'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_results1',id:'udc_topGrd1',grdDownOpts:'{"fileName" : "컨테이너정보.xlsx" }',gridUpYn:'N',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results1',style:'',autoFit:'allColumn',id:'gr_results1',visibleRowNum:'5',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_results1_onrowindexchange','ev:ontextimageclick':'scwin.gr_results1_ontextimageclick','ev:onbeforeedit':'scwin.gr_results1_onbeforeedit','ev:onafteredit':'scwin.gr_results1_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'컨테이너',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'S/T',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'경로',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'복화구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'상차지/반납지<br/>(오더)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column9',value:'상차지/반납지(지점)',displayMode:'label',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column5',value:'타점소배정부서',displayMode:'label',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column19',value:'배정<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column31',value:'배차<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column24',value:'코드명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column22',value:'코드명',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizTyp',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStpNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cmpstcrgKndNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrWrkPlNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'branchWrkPlCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'branchWrkPlNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'lodeptCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'lodeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'assgnYn',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter1',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'wrkIndictYn',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter1',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_switchTabMenu3',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_switchTabMenu3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_saveOrder',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_saveOrder_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'N건담당자지정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복화전용 >>> Searching순서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-16'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_lc_searchRank1',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COMBINE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DEPOT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타지사수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TG'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_lc_searchRank2',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COMBINE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DEPOT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타지사수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TG'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_lc_searchRank3',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COMBINE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DEPOT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타지사수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TG'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_lc_searchRank4',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COMBINE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DEPOT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타지사수출입연계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TG'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_chk_wrkIndictVolincluYnCondtYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업지시물량포함'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_runProcedure',type:'button',class:'btn','ev:onclick':'scwin.btn_runProcedure_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더별생성'}]}]}]}]}]}]}]}]}]}]}]}]})