/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_09_02b.xml 112477 9f7178d4ad0bdde24110b716d5e6b2c51f0eb5fd873166443f378cbe33ea2f41 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'하역작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eqCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cwGbn',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_main12',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslnm',name:'선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linenm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpconm',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impportcnt',name:'수입항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expportcnt',name:'수출항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imprepkcg',name:'수입대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exprepkcg',name:'수출대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkplnm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportdtm',name:'입항예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportdtm',name:'출항예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvchrgcls',name:'하역담당구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmannm',name:'Chief포맨명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslfmancnt',name:'본선포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'groundfmancnt',name:'그라운드포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cvsslmgntno',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workIndict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'연장여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'조출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'실적처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'출력체크',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totQty',name:'총수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'bigDecimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'bigDecimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQty',name:'계획수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planWt',name:'계획중량',dataType:'bigDecimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'계획CBM',dataType:'bigDecimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief포맨여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etWrkHh',name:'투입시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'기사사번1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1nm',name:'기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'기사사번2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2nm',name:'기사명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'기사사번3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3nm',name:'기사명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totQty',name:'총수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'계획수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planWt',name:'계획중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'계획CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief포맨여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_main1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvChrgCls',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportdtm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDtm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkplnm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impportcnt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvCnt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvStDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslmgntno',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslWrkCompleteYn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expportcnt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exprepkcg',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslfmancnt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impRepKcg',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslFmanCnt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmannm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expRepKcg',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpconm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groundFmanCnt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imprepkcg',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportdtm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslnm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linenm',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvchrgcls',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groundfmancnt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierOpClntNo',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_eqNrmCd',id:'ldt_linkedDataList1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'upperCd==ref(\'ds_eqPlan.eqKndCd\')'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslWorkPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_main1","key":"OUT_DS1"},{"id":"ds_workIndict","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_main1","key":"OUT_DS1"},{"id":"ds_workIndict","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchVolPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslVolPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_volPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_volPlan","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchManPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslManPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_manPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_manPlan","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslEqPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_eqPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqPlan","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchVolPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslVolPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_volPlan2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_volPlan2","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchManPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslManPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_manPlan2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_manPlan2","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCvsslEqPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_eqPlan2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqPlan2","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchInputEq',action:'/ds.op.stvwrk.RetrieveOurCompanyInputEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_inputEq","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_inputEq","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.stvwrkplan.SaveCvsslWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_workIndict","key":"IN_DS1"},{"id":"ds_volPlan","key":"IN_DS2"},{"id":"ds_manPlan","key":"IN_DS3"},{"id":"ds_eqPlan","key":"IN_DS4"},{"id":"ds_inputEq","key":"IN_DS5"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqList',action:'/ds.op.wrkplan.stvwrkplan.RetrieveStvWrkPlanEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_eqCondition","key":"IN_DS1"},{"id":"ds_eqPlan3","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqPlan3","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchEqList_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=ZZ208',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,[{"id":"ds_eqNrmCd","key":"GAUCE"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStpCd',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do?upperWrkStpCd=01&lvl=3&wrkPlanTrgtYn=1',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,[{"id":"ds_wrkStpCd","key":"GAUCE"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_comBo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.PcvsslMgntNo = "";
scwin.chk_retrieve = "F";
scwin.chk_input = "F";
scwin.importVssl = "F";
scwin.exportVssl = "F";
scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.txt_hlobranCd = "";
scwin.txt_hlobranNm = "";
scwin.rowCheck;
scwin.checkChange = 0;
scwin.rowCount = 0;
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.PcvsslMgntNo = scwin.params != null && scwin.params["cvsslMgntNo"] != null ? scwin.params["cvsslMgntNo"] : "";
  scwin.lobranCd = $c.data.getMemInfo($p).lobranCd;
  scwin.lobranNm = $c.data.getMemInfo($p).lobranNm;
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_workIndict:shiftClsCd"
  }, {
    grpCd: "SD060",
    compID: "gr_volPlan:impExpClsCd"
  }, {
    grpCd: "ZZ505",
    compID: "gr_eqPlan:posnClsCd"
  }, {
    grpCd: "ZZ210",
    compID: "gr_eqPlan:eqKndCd,gr_inputEq:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.cbFunction);

  //  $c.gus.cfDisableObjects([btn_no1,btn_no2,btn_no3,btn_no4,btn_no5,btn_no6,btn_no7,btn_no8,btn_no9,btn_no10,btn_no11,btn_no12,btn_no13,btn_no14,btn_no15,btn_no16,btn_no17,btn_no18]);
};
scwin.cbFunction = async function () {
  $c.gus.cfDisableObjects($p, [btn_main1, btn_main2, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
  $c.gus.cfDisableObjects($p, [btn_no13, btn_no14, btn_no15, udc_utilComp, udc_utilComp2, udc_utilComp3, udc_utilComp4, udc_utilComp5]);
  await $c.sbm.execute($p, sbm_eqNrmCd);
  await $c.sbm.execute($p, sbm_wrkStpCd);
  if (scwin.lobranCd.substring(0, 2) == "6A") {
    gr_workIndict.setReadOnly("column", "printChk", true);
  } else {
    gr_workIndict.setReadOnly("column", "printChk", false);
  }
  if (scwin.PcvsslMgntNo != "") {
    ed_cvsslMgntNo.setValue(scwin.PcvsslMgntNo);
    scwin.f_Retrieve();
  } else {
    //scwin.f_DivHoldEachWorkPlanList();
    ed_cvsslMgntNo.focus();
  }
};
scwin.onUdcCompleted = function () {};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_main2_onclick = function (e) {
  scwin.f_mainSave();
};
scwin.f_AddRow1 = async function () {
  var chk = 0;
  for (var i = 0; i <= ds_workIndict.getRowCount(); i++) {
    if (ds_workIndict.getRowStatus(i) == "C") {
      chk++;
    }
  }
  if (chk > 0) {
    await $c.win.alert($p, "작업지시는 1건씩만 등록이 가능합니다.");
    return false;
  }
  ds_workIndict.insertRow(ds_workIndict.getRowCount());
  ds_workIndict.setCellData(ds_workIndict.getRowCount() - 1, "cvsslMgntNo", ed_cvsslMgntNo.getValue());
  ds_workIndict.setCellData(ds_workIndict.getRowCount() - 1, "printChk", "F");
  gr_workIndict.setFocusedCell(ds_workIndict.getRowCount() - 1, 2);
  // scwin.gr_workIndict_oncellclick(ds_workIndict.getRowCount()-1);
  ds_volPlan.removeAll();
  ds_manPlan.removeAll();
  ds_eqPlan.removeAll();
};
scwin.f_AddRow2 = async function () {
  if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "물량 계획 입력은 작업지시 등록 후 가능합니다.");
    return false;
  }
  ds_volPlan.insertRow(ds_volPlan.getRowCount());
  let vpPos = ds_volPlan.getRowCount() - 1;
  ds_volPlan.setCellData(vpPos, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
  ds_volPlan.setCellData(vpPos, "holdNo", vpPos + 1);
  if (scwin.lobranCd.substring(0, 2) == "6A") {
    if (scwin.importVssl == "T") {
      ds_volPlan.setCellData(vpPos, "impExpClsCd", "I");
    } else {
      if (scwin.exportVssl == "T") {
        ds_volPlan.setCellData(vpPos, "impExpClsCd", "O");
      }
    }
    ds_volPlan.setCellData(vpPos, "commCd", "30000000");
    ds_volPlan.setCellData(vpPos, "commNm", "일반화물");
  }
  ;
  gr_volPlan.setFocusedCell(vpPos, 0);
};
scwin.f_AddRow3 = async function () {
  if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "인원 계획 입력은 작업지시 등록 후 가능합니다.");
    return false;
  }
  ds_manPlan.insertRow(ds_workIndict.getRowCount());
  let mpPos = ds_manPlan.getRowCount() - 1;
  ds_manPlan.setCellData(mpPos, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
  gr_manPlan.setFocusedCell(mpPos, 1);
};
scwin.f_AddRow4 = async function () {
  if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
    return false;
  }
  ds_eqPlan.insertRow(ds_eqPlan.getRowCount(), false);
  let epPos = ds_eqPlan.getRowCount() - 1;
  gr_eqPlan.setFocusedCell(epPos, 0);
  ds_eqPlan.setCellData(epPos, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
};
scwin.f_AddRow5 = async function () {
  if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
    return false;
  }
  ;
  let eqLobran = scwin.lobranCd;
  dma_eqCondition.set("lobranCd", eqLobran);
  dma_eqCondition.set("cwGbn", "C");
  await $c.sbm.execute($p, sbm_searchEqList);
};
scwin.f_AddRow6 = async function () {
  let rowCopy = ds_eqPlan.getRowPosition();
  if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
    return false;
  }
  if (ds_eqPlan.getRowCount() < 1) {
    await $c.win.alert($p, "행복사 할 중기계획이 없습니다");
    return false;
  } else {
    ds_eqPlan.insertRow(ds_eqPlan.getRowCount());
    let newPos6 = ds_eqPlan.getRowCount() - 1;
    ds_eqPlan.setCellData(newPos6, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
    ds_eqPlan.setCellData(newPos6, "wrkStpCd", ds_eqPlan.getCellData(rowCopy, "wrkStpCd"));
    ds_eqPlan.setCellData(newPos6, "posnClsCd", ds_eqPlan.getCellData(rowCopy, "posnClsCd"));
    ds_eqPlan.setCellData(newPos6, "eqKndCd", ds_eqPlan.getCellData(rowCopy, "eqKndCd"));
    ds_eqPlan.setCellData(newPos6, "eqNrmCd", ds_eqPlan.getCellData(rowCopy, "eqNrmCd"));
    gr_eqPlan.setFocusedCell(newPos6, 0);
  }
};
scwin.f_AddRow7 = async function () {
  if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "장비 배치는 작업지시 등록 후 가능합니다.");
    return false;
  }
  ds_inputEq.insertRow(ds_inputEq.getRowCount());
  let iePos = ds_inputEq.getRowCount() - 1;
  ds_inputEq.setCellData(iePos, "stvWrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
  ds_inputEq.setCellData(iePos, "wrkDt", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt"));
  ds_inputEq.setCellData(iePos, "etWrkHh", "0");
  gr_inputEq.setFocusedCell(iePos, 0);
};
scwin.f_deleteRow1 = function () {
  if (ds_workIndict.getRowStatus(ds_workIndict.getRowPosition()) == "C") {
    ds_workIndict.removeRow(ds_workIndict.getRowPosition());
  } else {
    ds_workIndict.deleteRow(ds_workIndict.getRowPosition());
  }
  ;
  ds_volPlan.removeAll();
  ds_manPlan.removeAll();
  gr_workIndict.removeFocusedCell();
};
scwin.f_deleteRow2 = function () {
  if (ds_volPlan.getRowStatus(ds_volPlan.getRowPosition()) == "C") {
    ds_volPlan.removeRow(ds_volPlan.getRowPosition());
  } else {
    ds_volPlan.deleteRow(ds_volPlan.getRowPosition());
  }
  ;
  gr_volPlan.removeFocusedCell();
};
scwin.f_deleteRow3 = function () {
  if (ds_manPlan.getRowStatus(ds_manPlan.getRowPosition()) == "C") {
    ds_manPlan.removeRow(ds_manPlan.getRowPosition());
  } else {
    ds_manPlan.deleteRow(ds_manPlan.getRowPosition());
  }
  ;
  gr_manPlan.removeFocusedCell();
};
scwin.f_deleteRow4 = function () {
  if (ds_eqPlan.getRowStatus(ds_eqPlan.getRowPosition()) == "C") {
    ds_eqPlan.removeRow(ds_eqPlan.getRowPosition());
  } else {
    ds_eqPlan.deleteRow(ds_eqPlan.getRowPosition());
  }
  ;
  gr_eqPlan.removeFocusedCell();
};
scwin.f_deleteRow7 = function () {
  if (ds_inputEq.getRowStatus(ds_inputEq.getRowPosition()) == "C") {
    ds_inputEq.removeRow(ds_inputEq.getRowPosition());
  } else {
    ds_inputEq.deleteRow(ds_inputEq.getRowPosition());
  }
  ;
  gr_inputEq.removeFocusedCell();
};
scwin.btn_no3_onclick = function (e) {
  ds_workIndict.undoAll();
};
scwin.btn_no6_onclick = function (e) {
  ds_volPlan.undoAll();
};
scwin.btn_no9_onclick = function (e) {
  ds_manPlan.undoAll();
};
scwin.btn_no12_onclick = function (e) {
  ds_eqPlan.undoAll();
};
scwin.btn_no13_onclick = function (e) {
  scwin.f_AddRow5();
};
scwin.btn_no14_onclick = function (e) {
  scwin.f_ShiftRetrieve();
};
scwin.btn_no15_onclick = function (e) {
  scwin.f_AddRow6();
};
scwin.btn_no17_onclick = function (e) {
  ds_inputEq.removeRow(ds_inputEq.getRowPosition());
};
scwin.btn_no18_onclick = function (e) {
  ds_inputEq.undoAll();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_cvsslMgntNo]);
  if (!chk) {
    return;
  }
  dma_search.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  await $c.sbm.execute($p, sbm_search);
};
scwin.f_RetrievePlan = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_cvsslMgntNo]);
  if (!chk) {
    return;
  }
  let rowPos = ds_workIndict.getRowPosition();
  // ds_workIndict.modifyAllStatus("R");
  dma_searchPlan.set("wrkIndictNo", ds_workIndict.getCellData(rowPos, "wrkIndictNo"));
  dma_searchPlan.set("stvWrkIndictNo", ds_workIndict.getCellData(rowPos, "wrkIndictNo"));
  dma_searchPlan.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  await $c.sbm.execute($p, sbm_searchVolPlan);
  if (ds_volPlan.getRowCount() > 0) {
    totalRow2.setValue(ds_volPlan.getRowCount());
    gr_volPlan.setFocusedCell(0, 0);
  }
  ;
  await $c.sbm.execute($p, sbm_searchManPlan);
  scwin.getManPlanService();
  if (ds_manPlan.getRowCount() > 0) {
    totalRow3.setValue(ds_manPlan.getRowCount());
    gr_manPlan.setFocusedCell(0, 1);
  }
  ;
  await $c.sbm.execute($p, sbm_searchEqPlan);
  if (ds_eqPlan.getRowCount() > 0) {
    totalRow4.setValue(ds_eqPlan.getRowCount());
    gr_eqPlan.setFocusedCell(0, 1);
    //gr_workIndict.setFocusedCell(0,1);
  }
  ;
  await $c.sbm.execute($p, sbm_searchInputEq);
  if (ds_inputEq.getRowCount() > 0) {
    totalRow5.setValue(ds_inputEq.getRowCount());
    gr_inputEq.setFocusedCell(0, 1);
    btn_retrieve.focus();
  }
  ;
};
scwin.getManPlanService = function () {
  if (ds_manPlan.getRowCount() > 0 && ds_manPlan.getCellData(0, "tableFlag") == 306) {
    ds_manPlan.setCellData(0, "wrkStpCd", "004");
    let tempData = [];
    for (let i = 0; i < ds_manPlan.getRowCount(); i++) {
      let rowData = {};
      let colCount = ds_manPlan.getColumnCount();
      for (let c = 0; c < colCount; c++) {
        let colId = ds_manPlan.getColumnID(c);
        rowData[colId] = ds_manPlan.getCellData(i, colId);
      }
      tempData.push(rowData);
    }
    ds_manPlan.removeAll();
    for (let t = 0; t < tempData.length; t++) {
      ds_manPlan.insertRow();
      let newRow = ds_manPlan.getRowPosition();
      for (let key in tempData[t]) {
        ds_manPlan.setCellData(newRow, key, tempData[t][key]);
      }
    }
  }
  ;
  txa_rmk3.setValue(ds_manPlan.getCellData(0, "rmk"));
  txa_rmk4.setValue(ds_manPlan.getCellData(0, "rmk2"));
};
scwin.f_mainSave = async function () {
  if (ds_workIndict.getModifiedIndex().length > 0 || ds_volPlan.getModifiedIndex().length > 0 || ds_manPlan.getModifiedIndex().length > 0 || ds_eqPlan.getModifiedIndex().length > 0 || ds_inputEq.getModifiedIndex().length > 0) {
    if (ds_workIndict.getModifiedIndex().length > 0) {
      let oValidExp = {
        dataName: "작업지시 그리드",
        validExp: `wrkDt:작업일자:yes:date=YYYYMMDD&length=8:key,
                shiftClsCd:Shift:yes::key,
                wrkStHh:시작시간:yes:length=4:key,
                wrkEndHh:종료시간:yes:length=4:key
                `
      };
      $c.gus.setValidExp($p, gr_workIndict, oValidExp);
      if (!(await $c.gus.cfValidate($p, [gr_workIndict], null, true))) return;
      let rowPos = ds_workIndict.getRowPosition();
      let wrkDt = ds_workIndict.getCellData(rowPos, "wrkDt");
      let stHh = ds_workIndict.getCellData(rowPos, "wrkStHh");
      let endHh = ds_workIndict.getCellData(rowPos, "wrkEndHh");
      let shift = ds_workIndict.getCellData(rowPos, "shiftClsCd");
      let cnt = ds_workIndict.getRowCount();
      for (let i = 0; i < cnt; i++) {
        wrkDt = ds_workIndict.getCellData(i, "wrkDt");
        stHh = ds_workIndict.getCellData(i, "wrkStHh");
        endHh = ds_workIndict.getCellData(i, "wrkEndHh");
        shift = ds_workIndict.getCellData(i, "shiftClsCd");
        if (ds_workIndict.getRowStatus(i) == "C") {
          for (let j = 0; j < cnt; j++) {
            if (ds_workIndict.getCellData(i, "wrkDt") == ds_workIndict.getCellData(j, "wrkDt") && ds_workIndict.getCellData(i, "shiftClsCd") == ds_workIndict.getCellData(j, "shiftClsCd") && i != j) {
              await $c.gus.cfAlertMsg($p, i + 1 + "번째 작업일자와 Shift는 중복 데이터이므로 입력하실 수 없습니다.");
              ds_workIndict.setRowPosition(i);
              return;
            }
          }
        }
      }
      ;
      if (stHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh");
        return false;
      }
      if (endHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh");
        return false;
      }
      if (stHh.substr(0, 2) > "23") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh");
        return;
      }
      if (stHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh");
        return;
      }
      if (endHh.substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh");
        return;
      }
      if (endHh.substr(0, 2) == "00" && endHh.substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh");
        return;
      }
      if (endHh.substr(0, 2) == "24" && endHh.substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh");
        return;
      }
      if (endHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh");
        return;
      }
      if (shift == "M") {
        if (stHh > endHh && endHh > '0700') {
          await $c.gus.cfAlertMsg($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
          gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh");
          return;
        }
      } else {
        if (!$c.gus.cfIsAfterDate($p, stHh, endHh)) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_058);
          gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh");
          return;
        }
      }
    }
    if (ds_volPlan.getModifiedIndex().length > 0) {
      let oValidExp = {
        dataName: "물량계획 그리드",
        validExp: `holdNo:HOLD:yes:number:key,
                impExpClsCd:수출입구분:yes::key,
                commNm:품목/품명명:yes::key,
                commCd:품목/품명코드:yes::key
                `
      };
      $c.gus.setValidExp($p, gr_volPlan, oValidExp);
      if (!(await $c.gus.cfValidate($p, [gr_volPlan], null, true))) return;
    }
    if (ds_manPlan.getModifiedIndex().length > 0) {
      let oValidExp = {
        dataName: "인원계획 그리드",
        validExp: `staffNo:사번:yes:length=6:key,
                staffNm:이름:yes::key,
                wrkStpCd:작업단계:yes::key
                `
      };
      $c.gus.setValidExp($p, gr_manPlan, oValidExp);
      if (!(await $c.gus.cfValidate($p, [gr_manPlan], null, true))) return;
      let chkCfman = 0;
      for (let i = 0; i < ds_manPlan.getRowCount(); i++) {
        if (ds_manPlan.getCellData(i, "cfmanYn") == "1") {
          chkCfman++;
        }
      }
      if (chkCfman > 1) {
        await $c.win.alert($p, "Chief 포맨 여부는 한명만 선택할 수 있습니다.");
        return false;
      }
    }
    ;

    // if(txa_rmk2.getValue() != ""){
    //     ds_volPlan.setCellData(0,"rmk");
    // };
    // if(txa_rmk3.getValue() != ""){
    //     ds_manPlan.setCellData(0,"rmk");
    // };
    // if(txa_rmk4.getValue() != ""){
    //     ds_manPlan.setCellData(0,"rmk2");
    // };

    if (ds_eqPlan.getModifiedIndex().length > 0) {
      let oValidExp = {
        dataName: "중기계획 그리드",
        validExp: `wrkStpCd:작업단계:yes::key,
                posnClsCd:소유구분:yes::key,
                eqKndCd:중기종류:yes::key,
                eqNrmCd:필요규격:yes::key
                `
      };
      $c.gus.setValidExp($p, gr_eqPlan, oValidExp);
      if (!(await $c.gus.cfValidate($p, [gr_eqPlan], null, true))) return;
    }
    if (ds_inputEq.getModifiedIndex().length > 0) {
      let oValidExp = {
        dataName: "장비투입 그리드",
        validExp: `wrkDt:작업일자:yes::key,
                wrkStpCd:작업단계:yes::key,
                vehclShortCd:단축번호:yes::key
                `
      };
      $c.gus.setValidExp($p, gr_inputEq, oValidExp);
      if (!(await $c.gus.cfValidate($p, [gr_inputEq], null, true))) return;
    }
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult) {
      await $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선작업계획등록"]);
  }
};
scwin.f_mainInput = function () {
  scwin.chk_input = "T";
  $c.gus.cfEnableObjects($p, [udc_utilComp, btn_main2]);
  $c.gus.cfDisableObjects($p, [btn_main1]);
  gr_manPlan.setReadOnly("column", "cfmanYn", false);
  let rowPos = ds_workIndict.getRowPosition();
  if (ds_workIndict.getCellData(rowPos, "completeProcYn") == "1") {
    $c.gus.cfDisableObjects($p, [btn_no2, btn_no3, txa_rmk]);
    gr_workIndict.setReadOnly("column", "printChk", true);
    gr_workIndict.setReadOnly("grid", true);
    gr_volPlan.setReadOnly("grid", true);
    gr_manPlan.setReadOnly("grid", true);
    gr_eqPlan.setReadOnly("grid", true);
    gr_inputEq.setReadOnly("grid", true);
    gr_manPlan.setReadOnly("column", "cfmanYn", true);
  } else {
    $c.gus.cfEnableObjects($p, [btn_no13, btn_no14, btn_no15, udc_utilComp, udc_utilComp2, udc_utilComp3, udc_utilComp4, udc_utilComp5, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
    gr_workIndict.setReadOnly("column", "printChk", false);
    gr_workIndict.setReadOnly("grid", false);
    gr_volPlan.setReadOnly("grid", false);
    gr_manPlan.setReadOnly("grid", false);
    gr_eqPlan.setReadOnly("grid", false);
    gr_inputEq.setReadOnly("grid", false);
    gr_workIndict.setReadOnly("column", "extdYn", false);
    gr_workIndict.setReadOnly("column", "ealyAtdYn", false);
  }
};
scwin.f_Cancel1 = function () {
  if (ds_workIndict.getRowStatus(ds_workIndict.getRowPosition()) == "C") {
    ds_workIndict.removeRow(ds_workIndict.getRowPosition());
  } else {
    ds_workIndict.undoRow(ds_workIndict.getRowPosition());
  }
  ;
  ds_volPlan.removeAll();
  ds_manPlan.removeAll();
  gr_workIndict.removeFocusedCell();
};
scwin.f_Cancel2 = function () {
  if (ds_volPlan.getRowStatus(ds_volPlan.getRowPosition()) == "C") {
    ds_volPlan.removeRow(ds_volPlan.getRowPosition());
  } else {
    ds_volPlan.undoRow(ds_volPlan.getRowPosition());
  }
  ;
  gr_volPlan.removeFocusedCell();
};
scwin.f_cancel3 = function () {
  if (ds_manPlan.getRowStatus(ds_manPlan.getRowPosition()) == "C") {
    ds_manPlan.removeRow(ds_manPlan.getRowPosition());
  } else {
    ds_manPlan.undoRow(ds_manPlan.getRowPosition());
  }
  ;
  gr_manPlan.removeFocusedCell();
};
scwin.f_cancel4 = function () {
  if (ds_eqPlan.getRowStatus(ds_eqPlan.getRowPosition()) == "C") {
    ds_eqPlan.removeRow(ds_eqPlan.getRowPosition());
  } else if (ds_eqPlan.getRowPosition() == null) {
    return false;
  } else {
    ds_eqPlan.undoRow(ds_eqPlan.getRowPosition());
  }
  ;
  gr_eqPlan.removeFocusedCell();
};
scwin.f_cancel7 = function () {
  if (ds_inputEq.getRowStatus(ds_inputEq.getRowPosition()) == "C") {
    ds_inputEq.removeRow(ds_inputEq.getRowPosition());
  } else {
    ds_inputEq.undoRow(ds_inputEq.getRowPosition());
  }
  ;
  gr_inputEq.removeFocusedCell();
};
scwin.f_openPopUp = async function () {
  let arrParam = [];
  arrParam[0] = ed_cvsslMgntNo.getValue();
  arrParam[1] = "";
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", {
    width: 1100,
    height: 600,
    modal: true,
    popupName: "본선관리번호검색팝업"
  }, arrParam);
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]);
  }
};
scwin.retrieveCommInfoCb = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_volPlan, scwin.rowCheck, "commCd", "commNm");
  scwin.rowCheck = "";
  return false;
};
scwin.f_openCommPopUpGrid = async function (gubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  scwin.rowCheck = row;
  if (gubun == 1) {
    pCode = "";
    pName = ds_volPlan.getCellData(row, "commNm");
  } else if (gubun == 2) {
    pCode = ds_volPlan.getCellData(row, "commCd");
    pName = "";
  }

  //'retrieveCommInfo'
  udc_comCode1.setSelectId('retrieveCommInfo');
  rtnList = await udc_comCode1.cfCommonPopUp(scwin.retrieveCommInfoCb, pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , '품목/품명코드,품목/품명,구분' // Title순서	
  , '105,190,70' // 보여주는 각 컬럼들의 폭	
  , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
  , ",,,A4" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "품목/품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.f_openCommonPopUp = async function (gubun, row, pClose) {
  let rtnList;
  let pWhere;
  let pCode = "";
  let pName = "";
  let arrParam = [];
  let sWinCloseTF = pClose == null ? "T" : pClose;
  switch (gubun) {
    case 7:
      pCode = ds_inputEq.getCellData(row, "vehclShortCd");
      pName = "";
      let pDate = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt");
      arrParam[0] = "";
      arrParam[1] = "";
      arrParam[2] = "";
      arrParam[3] = pDate;
      arrParam[4] = pCode;
      arrParam[5] = "";
      arrParam[6] = 'T';
      arrParam[7] = 'T';
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml", {
        width: 1100,
        height: 630,
        modal: true,
        popupName: "중기조회"
      }, arrParam);
      if (rtnList != null && rtnList[1] != undefined) {
        ds_inputEq.setCellData(row, "vehclShortCd", rtnList[0]);
        ds_inputEq.setCellData(row, "eqCd", rtnList[12]);
        ds_inputEq.setCellData(row, "vehclNo", rtnList[1]);
        ds_inputEq.setCellData(row, "eqKndCd", rtnList[15]);
        ds_inputEq.setCellData(row, "eqNrmCd", rtnList[11]);
        ds_inputEq.setCellData(row, "drvStaffNo1", rtnList[16]);
        ds_inputEq.setCellData(row, "drvStaffNo1nm", rtnList[7]);
        ds_inputEq.setCellData(row, "drvStaffNo2", rtnList[17]);
        ds_inputEq.setCellData(row, "drvStaffNo2nm", rtnList[8]);
        ds_inputEq.setCellData(row, "drvStaffNo3", rtnList[18]);
        ds_inputEq.setCellData(row, "drvStaffNo3nm", rtnList[9]);
      } else {
        ds_inputEq.setCellData(row, "vehclShortCd", "");
        ds_inputEq.setCellData(row, "eqCd", "");
        ds_inputEq.setCellData(row, "vehclNo", "");
        ds_inputEq.setCellData(row, "eqKndCd", "");
        ds_inputEq.setCellData(row, "eqNrmCd", "");
        ds_inputEq.setCellData(row, "drvStaffNo1", "");
        ds_inputEq.setCellData(row, "drvStaffNo1nm", "");
        ds_inputEq.setCellData(row, "drvStaffNo2", "");
        ds_inputEq.setCellData(row, "drvStaffNo2nm", "");
        ds_inputEq.setCellData(row, "drvStaffNo3", "");
        ds_inputEq.setCellData(row, "drvStaffNo3nm", "");
      }
      break;
  }
};
scwin.f_openCommCdPopUp = async function (argFlg) {
  let rtnList = [];
  let pCode = "";
  let pName = "";
  let arrParam = [];
  let rowPos = ds_manPlan.getRowPosition();
  if (argFlg == "1") {
    pCode = ds_manPlan.getCellData(rowPos, "staffNo");
    ds_manPlan.setCellData(rowPos, "staffNm", "");
  } else {
    pName = ds_manPlan.getCellData(rowPos, "staffNm");
    ds_manPlan.setCellData(rowPos, "staffNo", "");
  }
  arrParam[0] = pCode;
  arrParam[1] = pName;
  arrParam[2] = scwin.lobranCd;
  arrParam[3] = scwin.lobranNm;
  arrParam[4] = '';
  arrParam[5] = '01';
  arrParam[6] = '02,D';
  arrParam[7] = '';
  arrParam[8] = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt");
  arrParam[9] = 'Y';
  arrParam[10] = 'T';
  arrParam[11] = '1';
  ds_manPlan.setCellData(rowPos, "staffNo", "");
  ds_manPlan.setCellData(rowPos, "staffNm", "");
  rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
    width: 1100,
    height: 550,
    modal: true,
    popupName: "인력검색"
  }, arrParam);
  if (rtnList != null && rtnList[1] != undefined) {
    for (let i = 0; i < ds_manPlan.getRowCount(); i++) {
      if (rtnList[2] == ds_manPlan.getCellData(i, "staffNo")) {
        await $c.gus.cfAlertMsg($p, "중복하여 입력할 수 없습니다.");
        return;
      }
    }
    ds_manPlan.setCellData(rowPos, "staffNo", rtnList[2]);
    ds_manPlan.setCellData(rowPos, "staffNm", rtnList[3]);
    ds_manPlan.setCellData(rowPos, "occpgrdCd", rtnList[4]);
    ds_manPlan.setCellData(rowPos, "occpgrdNm", rtnList[5]);
    ds_manPlan.setCellData(rowPos, "occptypeCd", rtnList[8]);
    ds_manPlan.setCellData(rowPos, "occptypeNm", rtnList[9]);
  } else {
    ds_manPlan.setCellData(rowPos, "staffNo", "");
    ds_manPlan.setCellData(rowPos, "staffNm", "");
    ds_manPlan.setCellData(rowPos, "occpgrdCd", "");
    ds_manPlan.setCellData(rowPos, "occpgrdNm", "");
    ds_manPlan.setCellData(rowPos, "occptypeCd", "");
    ds_manPlan.setCellData(rowPos, "occptypeNm", "");
  }
};
scwin.f_openStaffNoPopUp = async function (row, colid) {
  let colidNm = "";
  let rtnList = [];
  let pCode = "";
  let pName = "";
  let arrParam = [];
  if (colid == "drvStaffNo1") {
    colidNm = "drvStaffNo1nm";
  } else if (colid == "drvStaffNo2") {
    colidNm = "drvStaffNo2nm";
  } else if (colid == "drvStaffNo3") {
    colidNm = "drvStaffNo3nm";
  }
  ;
  pCode = ds_inputEq.getCellData(ds_inputEq.getRowPosition(), colid);
  ds_inputEq.setCellData(ds_inputEq.getRowPosition(), colidNm, "");
  arrParam[0] = pCode;
  arrParam[1] = pName;
  arrParam[2] = scwin.lobranCd;
  arrParam[3] = scwin.lobranNm;
  arrParam[4] = '';
  arrParam[5] = '00,E';
  arrParam[6] = '01,D';
  arrParam[7] = '';
  arrParam[8] = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt");
  arrParam[9] = 'Y';
  arrParam[10] = 'T';
  arrParam[11] = '1';
  if (colid == "drvStaffNo1") {
    ds_inputEq.setCellData(row, "drvStaffNo1", "");
    ds_inputEq.setCellData(row, "drvStaffNo1nm", "");
  } else if (colid == "drvStaffNo2") {
    ds_inputEq.setCellData(row, "drvStaffNo2", "");
    ds_inputEq.setCellData(row, "drvStaffNo2nm", "");
  } else if (colid == "drvStaffNo3") {
    ds_inputEq.setCellData(row, "drvStaffNo3", "");
    ds_inputEq.setCellData(row, "drvStaffNo3nm", "");
  }
  rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
    width: 1100,
    height: 550,
    modal: true,
    popupName: "인력검색"
  }, arrParam);
  if (rtnList != null && rtnList[1] != undefined) {
    ds_inputEq.setCellData(row, colid, rtnList[2]);
    ds_inputEq.setCellData(row, colidNm, rtnList[3]);
  } else {
    ds_inputEq.setCellData(row, colid, "");
    ds_inputEq.setCellData(row, colidNm, "");
  }
};
scwin.f_RetrievePierCd = async function (param1, param2) {
  // TODO: co_ds_combo1 DataID 동적 로딩 → submission 또는 별도 API 호출로 대체
  sbm_comBo1.action = "/cm.zz.RetrieveComboCMD.do?sysCd=DailyStevedoringWorkIndicationEBC&queryId=retrieveWorkPlanListCombo&param1=" + param1 + "&param2=" + param2;
  await $c.sbm.execute($p, sbm_comBo1);
};
scwin.f_RetrievePierCdCall = async function () {
  await scwin.f_RetrievePierCd(ed_cvsslMgntNo.getValue(), ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
};
scwin.clickPop = function () {};
scwin.f_ShiftRetrieve = async function () {
  dma_searchPlan.set("wrkIndictNo", acb_wrkIndictNo.getValue());
  dma_searchPlan.set("stvWrkIndictNo", "");
  dma_searchPlan.set("cvsslMgntNo", "");
  await $c.sbm.execute($p, sbm_searchVolPlan2);
  scwin.ds_volPlan2_onloadcompleted();
  await $c.sbm.execute($p, sbm_searchManPlan2);
  scwin.ds_manPlan2_onloadcompleted();
  await $c.sbm.execute($p, sbm_searchEqPlan2);
  scwin.ds_eqPlan2_onloadcompleted();
};
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
    if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
    if (targetRow == null) {
      targetDataset.insertRow(targetDataset.getRowCount());
      targetRow = targetDataset.getRowCount() - 1;
    }
    for (let i = 0; i < sourceColumns.length; i++) {
      if ((await $c.gus.cfIsNull($p, sourceColumns[i])) || (await $c.gus.cfIsNull($p, targetColumns[i]))) continue;
      targetDataset.setCellData(targetRow, targetColumns[i], sourceDataset.getCellData(sourceRow, sourceColumns[i]));
      if (actionAfterRowAdded != null) $p.getComponentById(actionAfterRowAdded);
    }
    return targetRow;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[f_CopyDataRow]" + e);
  }
};
scwin.f_GetColumnNames = async function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    let colCount = dataSet.getColumnCount();
    if (colCount == 0) return null;
    let rtnArray = new Array(colCount);
    for (let i = 0; i < colCount; i++) {
      rtnArray[i] = dataSet.getColumnID(i);
    }
    if (rtnArray.length == 0) return null;else return rtnArray;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[f_GetColumnNames] " + e);
  }
};
scwin.f_AddDataRow = function (dataSet) {
  dataSet.insertRow(dataSet.getRowCount());
  return dataSet.getRowCount() - 1;
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_cvsslMgntNo], null);
  ed_cvsslMgntNo.focus();
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_main1.getRowCount();
  if (rowCnt <= 0) {
    await $c.gus.cfAlertMsg($p, "미등록된 본선관리번호 입니다. 확인후 다시 입력해주세요");
    ed_cvsslMgntNo.setValue("");
    ed_cvsslMgntNo.focus();
  } else {
    $c.gus.cfDisableObjects($p, [btn_main1, btn_main2, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
    $c.gus.cfDisableObjects($p, [btn_no13, btn_no14, btn_no15, udc_utilComp, udc_utilComp2, udc_utilComp3, udc_utilComp4, udc_utilComp5]);
    $c.gus.cfEnableObjects($p, [btn_main1]);
    gr_workIndict.setReadOnly("grid", true);
    gr_workIndict.setReadOnly("column", "extdYn", true);
    gr_workIndict.setReadOnly("column", "ealyAtdYn", true);
    gr_manPlan.setReadOnly("column", "cfmanYn", true);
    gr_volPlan.setReadOnly("grid", true);
    gr_manPlan.setReadOnly("grid", true);
    gr_eqPlan.setReadOnly("grid", true);
    gr_inputEq.setReadOnly("grid", true);
  }
  scwin.chk_input = "F";
  for (let idx = 0; idx < ds_main1.getRowCount(); idx++) {
    if (ds_main1.getCellData(idx, "impExpClsCd") == "I") {
      ds_main1.setCellData(idx, "impExpClsCd", "수입");
    } else if (ds_main1.getCellData(idx, "impExpClsCd") == "O") {
      ds_main1.setCellData(idx, "impExpClsCd", "수출");
    }
  }
  ;
  if (ds_main1.getRowCount() > 0) {
    ed_vsslNm.setValue(ds_main1.getCellData(0, "vsslNm"));
    ed_lineNm.setValue(ds_main1.getCellData(0, "lineNm"));
    ed_shpCoNm.setValue(ds_main1.getCellData(0, "shpCoNm"));
    ed_impPortcnt.setValue(ds_main1.getCellData(0, "impPortcnt"));
    ed_expPortcnt.setValue(ds_main1.getCellData(0, "expPortcnt"));
    ed_impRepKcg.setValue(ds_main1.getCellData(0, "impRepKcg"));
    ed_expRepKcg.setValue(ds_main1.getCellData(0, "exprepkcg"));
    ed_wrkPlNm.setValue(ds_main1.getCellData(0, "wrkPlNm"));
    ed_arrvlportDtm.setValue(ds_main1.getCellData(0, "arrvlportDtm")); // 확인필요
    ed_deprtportDtm.setValue(ds_main1.getCellData(0, "deprtportDtm"));
  }
  ;
  if (ds_main1.getRowCount() == 0) {
    scwin.importVssl = "F";
    scwin.exportVssl = "F";
  } else {
    if (ds_main1.getCellData(0, "impPortcnt") != "" && ds_main1.getCellData(0, "expPortcnt") != "") {
      scwin.importVssl = "T";
      scwin.exportVssl = "T";
    } else if (ds_main1.getCellData(0, "impPortcnt") == "" && ds_main1.getCellData(0, "expPortcnt") != "") {
      scwin.importVssl = "F";
      scwin.exportVssl = "T";
    } else if (ds_main1.getCellData(0, "impPortcnt") != "" && ds_main1.getCellData(0, "expPortcnt") == "") {
      scwin.importVssl = "T";
      scwin.exportVssl = "F";
    } else {
      scwin.importVssl = "F";
      scwin.exportVssl = "F";
    }
  }
  ;
  ds_workIndict.sort('wrkIndictNo', 0);
  gr_workIndict.setFocusedCell(0, "wrkIndictNo");
  totalRow.setValue(ds_workIndict.getRowCount());
  let rowCnt2 = ds_workIndict.getRowCount();
  if (rowCnt2 > 0) {
    await scwin.f_RetrievePlan();
    if (ds_volPlan.getRowCount() > 0) {
      txa_rmk2.setValue(ds_volPlan.getCellData(0, "rmk"));
      gr_volPlan.setFocusedCell(0, 0);
    }
    ;
    await scwin.f_RetrievePierCdCall();
    if (ds_manPlan.getRowCount() > 0) {
      txa_rmk3.setValue(ds_manPlan.getCellData(0, "rmk"));
      txa_rmk4.setValue(ds_manPlan.getCellData(0, "rmk2"));
      gr_manPlan.setFocusedCell(0, "staffNo");
    }
    ;
    gr_eqPlan.setFocusedCell(0, "wrkStpCd");
    gr_workIndict.setFocusedCell(0, "wrkIndictNo");
    gr_inputEq.setFocusedCell(0, "wrkDt");
    btn_retrieve.focus();
  } else {
    ds_volPlan.removeAll();
    ds_manPlan.removeAll();
    ds_eqPlan.removeAll();
    ds_inputEq.removeAll();
  }
  scwin.chk_input = "F";
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.gr_workIndict_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_workIndict.getModifiedData().length == 0) {
    scwin.checkChange = 0;
  } else {
    scwin.checkChange++;
  }
  if (ds_workIndict.getCellData(rowIndex, "shiftClsCd") == "D") {
    ds_workIndict.setCellData(rowIndex, "wrkStHh", "0800");
    ds_workIndict.setCellData(rowIndex, "wrkEndHh", "1700");
  } else if (ds_workIndict.getCellData(rowIndex, "shiftClsCd") == "N") {
    ds_workIndict.setCellData(rowIndex, "wrkStHh", "1900");
    ds_workIndict.setCellData(rowIndex, "wrkEndHh", "2200");
  } else if (ds_workIndict.getCellData(rowIndex, "shiftClsCd") == "M") {
    ds_workIndict.setCellData(rowIndex, "wrkStHh", "2200");
    ds_workIndict.setCellData(rowIndex, "wrkEndHh", "0700");
  }
  ;
  if (scwin.checkChange == 0) {
    ds_workIndict.modifyRowStatus(rowIndex, "R");
  } else {
    ds_workIndict.modifyRowStatus(rowIndex, ds_workIndict.getRowStatus(rowIndex));
  }
  if (scwin.chk_input == "T") {
    if (ds_workIndict.getCellData(rowIndex, "completeProcYn") == "1") {
      $c.gus.cfDisableObjects($p, [btn_no2, btn_no3, btn_no4, btn_no5, btn_no6, btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no13, btn_no14, btn_no15, btn_no16, btn_no17, btn_no18, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
      $c.gus.cfEnableObjects($p, [btn_no1]);
      gr_workIndict.setReadOnly("column", "extdYn", true);
      gr_workIndict.setReadOnly("column", "ealyAtdYn", true);
      gr_workIndict.setReadOnly("grid", true);
      gr_volPlan.setReadOnly("grid", true);
      gr_manPlan.setReadOnly("grid", true);
      gr_manPlan.setReadOnly("column", "cfmanYn", true);
      gr_eqPlan.setReadOnly("grid", true);
      gr_inputEq.setReadOnly("grid", true);
      gr_workIndict.setReadOnly("column", "printChk", true);
      ds_workIndict.setCellData(rowIndex, "extdYn", "0");
      ds_workIndict.setCellData(rowIndex, "ealyAtdYn", "0");
      ds_workIndict.setCellData(rowIndex, "printChk", "F");
      ds_workIndict.modifyRowStatus(rowIndex, "R");
    } else {
      $c.gus.cfEnableObjects($p, [btn_no1, btn_no2, btn_no3, btn_no4, btn_no5, btn_no6, btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no13, btn_no14, btn_no15, btn_no16, btn_no17, btn_no18, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
      gr_workIndict.setReadOnly("column", "printChk", false);
      gr_workIndict.setReadOnly("column", "extdYn", false);
      gr_workIndict.setReadOnly("column", "ealyAtdYn", false);
      gr_workIndict.setReadOnly("grid", false);
      gr_volPlan.setReadOnly("grid", false);
      gr_manPlan.setReadOnly("grid", false);
      gr_manPlan.setReadOnly("column", "cfmanYn", false);
      gr_eqPlan.setReadOnly("grid", false);
      gr_inputEq.setReadOnly("grid", false);
    }
  }
  if (ds_workIndict.getRowStatus(rowIndex) != "C") {
    gr_workIndict.setColumnReadOnly("wrkDt", true);
  } else {
    gr_workIndict.setColumnReadOnly("wrkDt", false);
  }
  ;
  scwin.f_RetrievePlan();
  scwin.f_RetrievePierCdCall();
};
scwin.ds_eqPlan2_onloadcompleted = function (e) {
  let rowCnt = ds_eqPlan2.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      scwin.f_CopyDataRow(ds_eqPlan2, ds_eqPlan, i);
      ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
    }
  }
};
scwin.ds_manPlan2_onloadcompleted = function (e) {
  let rowCnt = ds_manPlan2.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      scwin.f_CopyDataRow(ds_manPlan2, ds_manPlan, i);
      ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
    }
  }
};
scwin.ds_volPlan2_onloadcompleted = function (e) {
  let rowCnt = ds_volPlan2.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      scwin.f_CopyDataRow(ds_volPlan2, ds_volPlan, i);
      ds_volPlan.setCellData(ds_volPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
    }
  }
};
scwin.gr_volPlan_ontextimageclick = function (rowIndex, colId, nowValue) {
  switch (colId) {
    case "commNm":
      ds_volPlan.getCellData(rowIndex, "commNm");
      ds_volPlan.setCellData(rowIndex, "commNm", "");
      scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
      break;
    case "commCd":
      ds_volPlan.getCellData(rowIndex, "commCd");
      ds_volPlan.setCellData(rowIndex, "commCd", "");
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
  }
};
scwin.gr_volPlan_oneditend = async function (rowIndex, columnIndex, value) {
  switch (columnIndex) {
    case 2:
      if (value != "" && value != ds_volPlan.getOriginalCellData(rowIndex, "commNm")) {
        ds_volPlan.setCellData(rowIndex, "commNm", value);
        await scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
        ds_volPlan.setCellData(rowIndex, "commNm", "");
      } else if (value == "") {
        ds_volPlan.setCellData(rowIndex, "commCd", "");
        ds_volPlan.setCellData(rowIndex, "commNm", "");
      }
      break;
  }
};
scwin.gr_manPlan_ontextimageclick = function (rowIndex, colId, nowValue) {
  if (colId == "staffNo") {
    scwin.f_openCommCdPopUp(1);
  } else if (colId == "staffNm") {
    scwin.f_openCommCdPopUp(2);
  }
};
scwin.gr_manPlan_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (columnId == "staffNo" && newValue != oldValue && newValue != "") {
    scwin.f_openCommCdPopUp(1);
  } else if (columnId == "staffNm" && newValue != oldValue && newValue != "") {
    scwin.f_openCommCdPopUp(2);
  }
};
scwin.gr_inputEq_ontextimageclick = function (rowIndex, colId, nowValue) {
  switch (colId) {
    case "wrkDt":
      // calendar inputType handles this
      break;
    case "vehclShortCd":
      scwin.f_openCommonPopUp(7, rowIndex, 'T');
      break;
    case "drvStaffNo1":
      scwin.f_openStaffNoPopUp(rowIndex, colId);
      break;
    case "drvStaffNo2":
      scwin.f_openStaffNoPopUp(rowIndex, colId);
      break;
    case "drvStaffNo3":
      scwin.f_openStaffNoPopUp(rowIndex, colId);
      break;
  }
};
scwin.gr_inputEq_oneditend = function (rowIndex, columnIndex, value) {
  switch (columnIndex) {
    case 5:
      if (value != ds_inputEq.getOriginalCellData(rowIndex, "vehclShortCd") && value != "") {
        ds_inputEq.setCellData(rowIndex, "vehclShortCd", value);
        scwin.f_openCommonPopUp(7, rowIndex, 'T');
      } else if (value == "") {
        ds_inputEq.setCellData(rowIndex, "vehclShortCd", "");
        ds_inputEq.setCellData(rowIndex, "vehclNo", "");
        ds_inputEq.setCellData(rowIndex, "eqKndCd", "");
        ds_inputEq.setCellData(rowIndex, "eqNrmCd", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1nm", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2nm", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3nm", "");
      }
      break;
    case 9:
      if (value != ds_inputEq.getOriginalCellData(rowIndex, "drvStaffNo1") && value != "") {
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1", value);
        scwin.f_openStaffNoPopUp(rowIndex, "drvStaffNo1");
      } else if (value == "") {
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1nm", "");
      }
      break;
    case 11:
      if (value != ds_inputEq.getOriginalCellData(rowIndex, "drvStaffNo2") && value != "") {
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2", value);
        scwin.f_openStaffNoPopUp(rowIndex, "drvStaffNo2");
      } else if (value == "") {
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2nm", "");
      }
      break;
    case 13:
      if (value != ds_inputEq.getOriginalCellData(rowIndex, "drvStaffNo3") && value != "") {
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3", value);
        scwin.f_openStaffNoPopUp(rowIndex, "drvStaffNo3");
      } else if (value == "") {
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3", "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3nm", "");
      }
      break;
  }
};
scwin.gr_volPlan_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_volPlan.getRowStatus(rowIndex) != "C") {
    gr_volPlan.setColumnReadOnly("holdNo", true);
  } else {
    gr_volPlan.setColumnReadOnly("holdNo", false);
  }
};
scwin.gr_manPlan_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_manPlan.getRowStatus(rowIndex) != "C") {
    gr_manPlan.setColumnReadOnly("staffNo", true);
    gr_manPlan.setColumnReadOnly("staffNm", true);
  } else {
    gr_manPlan.setColumnReadOnly("staffNo", false);
    gr_manPlan.setColumnReadOnly("staffNm", false);
  }
};
scwin.gr_eqPlan_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_eqPlan.getRowStatus(rowIndex) != "C") {
    gr_eqPlan.setColumnReadOnly("wrkStpCd", true);
    gr_eqPlan.setColumnReadOnly("posnClsCd", true);
    gr_eqPlan.setColumnReadOnly("eqKndCd", true);
    gr_eqPlan.setColumnReadOnly("eqNrmCd", true);
  } else {
    gr_eqPlan.setColumnReadOnly("wrkStpCd", false);
    gr_eqPlan.setColumnReadOnly("posnClsCd", false);
    gr_eqPlan.setColumnReadOnly("eqKndCd", false);
    gr_eqPlan.setColumnReadOnly("eqNrmCd", false);
  }
};
scwin.gr_workIndict_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "printChk") {
    let cr = ds_workIndict.getRowCount();
    if (cr > 0) {
      let allChecked = true;
      for (let i = 0; i < cr; i++) {
        if (ds_workIndict.getCellData(i, "printChk") != "T") {
          allChecked = false;
          break;
        }
      }
      let chkVal = allChecked ? "F" : "T";
      for (let i = 0; i < cr; i++) {
        ds_workIndict.setCellData(i, "printChk", chkVal);
      }
    }
  }
};
scwin.gr_workIndict_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "wrkDt":
      // calendar inputType handles this
      break;
  }
};
scwin.udc_cvsslMgnt_onclickEvent = function (e) {
  scwin.f_openPopUp();
};
scwin.gr_workIndict_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == 4) {
    if (ds_workIndict.getCellData(rowIndex, "shiftClsCd") == "D") {
      ds_workIndict.setCellData(rowIndex, "wrkStHh", "0800");
      ds_workIndict.setCellData(rowIndex, "wrkEndHh", "1700");
    } else if (ds_workIndict.getCellData(rowIndex, "shiftClsCd") == "N") {
      ds_workIndict.setCellData(rowIndex, "wrkStHh", "1900");
      ds_workIndict.setCellData(rowIndex, "wrkEndHh", "2200");
    } else if (ds_workIndict.getCellData(rowIndex, "shiftClsCd") == "M") {
      ds_workIndict.setCellData(rowIndex, "wrkStHh", "2200");
      ds_workIndict.setCellData(rowIndex, "wrkEndHh", "0700");
    }
  }
};
scwin.gr_eqPlan_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == 3) {
    if (ds_eqPlan.getRowStatus(rowIndex) != "R") {
      ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqNrmCd", "");
    }
  }
  ;
  if (columnIndex == 5) {
    if (value == "" || value == undefined) {
      ds_eqPlan.setCellData(rowIndex, "cnt", 0);
    }
  }
};
scwin.btn_main1_onclick = function (e) {
  scwin.f_mainInput();
};
scwin.udc_comCode1_onclickEvent = async function (e) {
  await scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
};
scwin.txa_rmk3_onviewchange = function (info) {
  ds_manPlan.setCellData(0, "rmk", txa_rmk3.getValue());
};
scwin.txa_rmk_onviewchange = function (info) {
  ds_workIndict.setCellData(0, "rmk", txa_rmk.getValue());
};
scwin.txa_rmk2_onviewchange = function (info) {
  ds_volPlan.setCellData(0, "rmk", txa_rmk2.getValue());
};
scwin.txa_rmk4_onviewchange = function (info) {
  ds_manPlan.setCellData(0, "rmk2", txa_rmk4.getValue());
};
scwin.sbm_searchEqList_submitdone = async function (e) {
  var startRow = ds_eqPlan.getRowCount();
  if (ds_eqPlan3.getRowCount() > 0) {
    for (let i = startRow; i < ds_eqPlan3.getRowCount(); i++) {
      ds_eqPlan.insertRow(ds_eqPlan3.getRowCount());
      let newPos = i;
      ds_eqPlan.setCellData(i, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      ds_eqPlan.setCellData(i, "wrkStpCd", ds_eqPlan3.getCellData(i, "wrkStpCd"));
      ds_eqPlan.setCellData(i, "posnClsCd", ds_eqPlan3.getCellData(i, "posnClsCd"));
      ds_eqPlan.setCellData(i, "eqKndCd", ds_eqPlan3.getCellData(i, "eqKndCd"));
      ds_eqPlan.setCellData(i, "eqNrmCd", ds_eqPlan3.getCellData(i, "eqNrmCd"));
      gr_eqPlan.setFocusedCell(i, 0);
    }
  } else {
    await $c.win.alert($p, "점소코드 : [" + scwin.lobranCd + "]에 해당하는 중기리스트가 등록되지 않았습니다.");
    return false;
  }
};
scwin.gr_manPlan_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == 1) {
    scwin.f_openCommCdPopUp(1);
  }
  ;
  if (columnIndex == 2) {
    scwin.f_openCommCdPopUp(2);
  }
};
scwin.footerExp = function (col) {
  return scwin.calData(col);
};
scwin.calData = function (col) {
  var tmpArr = gr_volPlan.getColumnAllDataArray(col);
  var tmpSum = 0; //return 시킬 값
  var tmpVal = 0; // 전,후 비교를 위한 임의 변수
  for (var i = 0; i < tmpArr.length; i++) {
    var curVal = Number(tmpArr[i]);
    if (tmpVal != curVal) {
      tmpSum = tmpSum + curVal;
      tmpVal = curVal;
    }
  }
  return tmpSum;
};
scwin.gr_volPlan_onafteredit = function (rowIndex, columnIndex, value) {
  switch (columnIndex) {
    case 7:
      if (value == "" || value == undefined) {
        ds_volPlan.setCellData(rowIndex, "planQty", 0);
      }
      break;
    case 8:
      if (value == "" || value == undefined) {
        ds_volPlan.setCellData(rowIndex, "planWt", 0);
      }
      break;
    case 9:
      if (value == "" || value == undefined) {
        ds_volPlan.setCellData(rowIndex, "planCbm", 0);
      }
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_cvsslMgnt',codeId:'ed_cvsslMgntNo',nameId:'',popupID:'',style:'','ev:onclickEvent':'scwin.udc_cvsslMgnt_onclickEvent',hideName:'true',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxByteLengthCode:'8',mandatoryCode:'true',validTitle:'본선관리번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'tbx_textbox6',label:'본선정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'ed_vsslNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_lineNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_shpCoNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항(예정)일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_arrvlportDtm',label:'',ref:'',style:'',userData2:'',displayFormat:'####/##/## ##:##'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출항(예정)일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_deprtportDtm',label:'',ref:'',style:'',userData2:'',displayFormat:'####/##/## ##:##'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업장',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_wrkPlNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수입항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_impPortcnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수입대표화종',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_impRepKcg',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expPortcnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출대표화종',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expRepKcg',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업지시',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_workIndict',style:'',autoFit:'allColumn',id:'gr_workIndict',class:'wq_gvw',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'false','ev:onafteredit':'scwin.gr_workIndict_onafteredit',rowStatusVisible:'true',focusMode:'both','ev:oncellindexchange':'scwin.gr_workIndict_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'printChk',displayMode:'label',value:'',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',value:'작업일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shiftClsCd',value:'Shift',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',value:'종료',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'extdYn',value:'연장',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ealyAtdYn',value:'조출',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'completeProcYn',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'특이사항',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'printChk',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkDt',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',id:'shiftClsCd',displayMode:'label',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'wrkStHh',displayMode:'label',allowChar:'0-9',displayFormat:'##:##',maxLength:'4',expression:'dataList("shiftClsCd") == "D" ? "0800" : dataList("shiftClsCd") == "N" ? "1900" : dataList("shiftClsCd") == "M" ? "2200" : ""'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label',allowChar:'0-9',displayFormat:'##:##',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'extdYn',displayMode:'label',trueValue:'1',falseValue:'0',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'ealyAtdYn',displayMode:'label',trueValue:'1',falseValue:'0',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'completeProcYn',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:'',expression:'(datalist("completeProcYn") == "1"  ? "YES": "NO")'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom ty2'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'작업지시 특이사항',class:'tit'}}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'txa_rmk',class:'',ref:'data:ds_workIndict.rmk','ev:onviewchange':'scwin.txa_rmk_onviewchange'}},{T:1,N:'xf:group',A:{id:'',class:'bottom-inner'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkIndictNo',search:'start',style:'width:252px;',submenuSize:'auto',title:'점소',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_no14',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_no14_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Shift계획 불러오기'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_utilComp',rowAddFunction:'scwin.f_AddRow1',rowDelFunction:'scwin.f_deleteRow1',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',btnCancelYn:'Y',btnRowDelObj:'btn_no2',btnCancelObj:'btn_no3',btnRowAddObj:'btn_no1',cancelFunction:'scwin.f_Cancel1',gridID:'gr_workIndict',rowAddUserAuth:'C',rowDelUserAuth:'U'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물량계획',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_volPlan',id:'gr_volPlan',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_volPlan_oncellclick',rowStatusVisible:'true','ev:oneditend':'scwin.gr_volPlan_oneditend',captionTitle:'물량계획',focusMode:'both','ev:onafteredit':'scwin.gr_volPlan_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',value:'HOLD',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',value:'수출입<br/>구분',width:'80',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',value:'품목/품명',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',value:'품목/<br/>품명코드',width:'100',colSpan:'',rowSpan:'2',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',value:'총물량',width:'210',colSpan:'3',rowSpan:'',class:'',style:';color:!import #000000;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col9',inputType:'text',value:'작업계획물량',width:'210',colSpan:'3',rowSpan:'',class:'',style:'#000000 !import'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totCbm',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col6',displayMode:'label',value:'수량'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col7',displayMode:'label',value:'중량(톤)'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col8',displayMode:'label',value:'CBM'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col10',displayMode:'label',value:'수량',class:'txt-blue',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col11',displayMode:'label',value:'중량(톤)',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col12',displayMode:'label',value:'CBM',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',width:'70',allowChar:'0-9',maxLength:'2',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',width:'80',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'100',textAlign:'left',viewType:'default',mandatory:'true',imageClickFunction:'scwin.gr_volPlan_ontextimageclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totQty',inputType:'text',width:'70',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',width:'70',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totCbm',inputType:'text',width:'70',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planQty',inputType:'text',width:'70',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,###',maxLength:'15'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planWt',inputType:'text',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',editFormat:'#,###,###,###,###,###.000',maxLength:'15'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planCbm',inputType:'text',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'totQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'totWt\')',dataType:'float',displayFormat:'#,##0.000',value:'',defaultValue:'0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'totCbm\')',dataType:'float',displayFormat:'#,##0.000',value:'',defaultValue:'0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'planQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'SUM(\'planWt\') == null || SUM(\'planWt\') == 0 ? 0.000 : SUM(\'planWt\')',dataType:'float',displayFormat:'#,##0.000',value:'',defaultValue:'0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'SUM(\'planCbm\') == null || SUM(\'planCbm\') == 0 ? 0.000 : SUM(\'planCbm\')',dataType:'float',displayFormat:'#,##0.000',value:'',defaultValue:'0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ty2',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물량계획 특이사항',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk2',style:'',ref:'data:ds_volPlan.rmk','ev:onviewchange':'scwin.txa_rmk2_onviewchange'}},{T:1,N:'xf:group',A:{class:'bottom-inner',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowDelFunction:'scwin.f_deleteRow2',rowAddFunction:'scwin.f_AddRow2',id:'udc_utilComp2',btnRowAddObj:'btn_no4',btnRowDelObj:'btn_no5',btnCancelObj:'btn_no6',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',btnCancelYn:'Y',cancelFunction:'scwin.f_Cancel2',gridID:'gr_volPlan',rowAddUserAuth:'C',rowDelUserAuth:'U'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none;',id:'udc_comCode1','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'인원계획',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_manPlan',style:'',autoFit:'allColumn',id:'gr_manPlan',class:'wq_gvw',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_manPlan_oncellclick',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_manPlan_onafteredit',focusMode:'both'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'staffNo',value:'사번',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'staffNm',value:'이름',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdNm',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occptypeCd',value:'상세직종',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occptypeNm',value:'상세직종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cfmanYn',value:'Chief<br/>포맨 여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tableFlag',value:'table구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk',value:'비고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk2',value:'비고',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'staffNo',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_manPlan_ontextimageclick'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'staffNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_manPlan_ontextimageclick'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occptypeCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occptypeNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',id:'wrkStpCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'cfmanYn',displayMode:'label',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'F',valueType:'binary',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tableFlag',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk2',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom ty2'},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'포맨',class:'tit'}}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'txa_rmk3',class:'',ref:'data:ds_manPlan.rmk','ev:onviewchange':'scwin.txa_rmk3_onviewchange'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'장비기사',class:'tit'}}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'txa_rmk4',class:'',ref:'data:ds_manPlan.rmk2','ev:onviewchange':'scwin.txa_rmk4_onviewchange'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'bottom-inner'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRow3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowDelFunction:'scwin.f_deleteRow3',rowAddFunction:'scwin.f_AddRow3',rowAddUserAuth:'C',rowDelUserAuth:'U',id:'udc_utilComp3',btnRowAddObj:'btn_no7',btnRowDelObj:'btn_no8',btnCancelObj:'btn_no9',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_cancel3'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중기계획',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_eqPlan',id:'gr_eqPlan',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'false','ev:onafteredit':'scwin.gr_eqPlan_onafteredit','ev:oncellclick':'scwin.gr_eqPlan_oncellclick',rowStatusVisible:'true',focusMode:'both'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',value:'작업지시번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'text',value:'소유구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'중기종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',value:'필요규격',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',value:'대수',width:'80',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'autoComplete',width:'100',allOption:'',chooseOption:'',ref:'',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'select',width:'100',emptyItem:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'autoComplete',width:'100',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'autoComplete',width:'100',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_linkedDataList1'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',width:'80',allowChar:'0-9',dataType:'number',displayFormat:'#,###',maxLength:'2',defaultValue:'0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column25',displayMode:'label',expression:'sum(\'cnt\')',dataType:'number',displayFormat:'#,###',textAlign:'center',style:';text-align:center;'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_no13',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_no13_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중기 리스트'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_no15',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_no15_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRow4',rowDelFunction:'scwin.f_deleteRow4',rowAddUserAuth:'C',rowDelUserAuth:'U',id:'udc_utilComp4',btnRowDelYn:'Y',btnCancelYn:'Y',btnRowAddObj:'btn_no10',btnRowDelObj:'btn_no11',btnCancelObj:'btn_no12',btnDelYn:'N',btnRowAddYn:'Y',cancelFunction:'scwin.f_cancel4'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비투입',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_inputEq',id:'gr_inputEq',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_inputEq_oneditend',focusMode:'both'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',value:'작업지시번호',width:'120',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etWrkHh',inputType:'text',value:'투입시간',width:'100',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',value:'장비코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',value:'단축번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'장비종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',value:'장비규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo1',inputType:'text',value:'인원1',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo1nm',value:'인원1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2',value:'인원2',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2nm',value:'인원2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3',value:'인원3',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3nm',value:'인원3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'calendar',width:'100',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'autoComplete',width:'100',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'etWrkHh',inputType:'text',width:'100',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_inputEq_ontextimageclick',maxLength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'autoComplete',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'autoComplete',width:'100',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo1',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_inputEq_ontextimageclick'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo1nm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo2',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_inputEq_ontextimageclick'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2nm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo3',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_inputEq_ontextimageclick'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3nm',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column27',displayMode:'label',expression:'sum(\'etWrkHh\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow5',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowDelFunction:'scwin.f_deleteRow7',rowAddFunction:'scwin.f_AddRow7',id:'udc_utilComp5',btnRowAddObj:'btn_no16',btnRowDelObj:'btn_no17',btnCancelObj:'btn_no18',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_cancel7',rowAddUserAuth:'C',rowDelUserAuth:'C'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_main1',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_main1_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_main2',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_main2_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})