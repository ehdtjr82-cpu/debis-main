/*amd /AI/op_204_09_03b.xml 88758 f921fd702d4c8260597674920a6ff1e2bb4f8262b6a4bc88d9f348669c3e1a27 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'작업계획시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'작업계획종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'본선작업지시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eqCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cwGbn',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_copyCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftClsCd',name:'Shift구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workIndict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'조출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'출력체크',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목/품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief포맨여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'출력체크',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etWrkHh',name:'투입시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'기사사번1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1nm',name:'기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'기사사번2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2nm',name:'기사명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'기사사번3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3nm',name:'기사명3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkDtSetting'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목/품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief포맨여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'출력체크',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkIndictNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlacePlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_workIndict","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_workIndict","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchVolPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceVolPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_volPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_volPlan","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchVolPlan_submitdone','ev:submiterror':'scwin.sbm_searchVolPlan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchManPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceManPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_manPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_manPlan","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchManPlan_submitdone','ev:submiterror':'scwin.sbm_searchManPlan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceEqPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_eqPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqPlan","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchEqPlan_submitdone','ev:submiterror':'scwin.sbm_searchEqPlan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchInputEq',action:'/ds.op.stvwrk.RetrieveOurCompanyInputEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_inputEq","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_inputEq","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchInputEq_submitdone','ev:submiterror':'scwin.sbm_searchInputEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.stvwrkplan.SaveWorkPlacePlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_workIndict","key":"IN_DS1"},{"id":"ds_volPlan","key":"IN_DS2"},{"id":"ds_manPlan","key":"IN_DS3"},{"id":"ds_eqPlan","key":"IN_DS4"},{"id":"ds_inputEq","key":"IN_DS5"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqList',action:'/ds.op.wrkplan.stvwrkplan.RetrieveStvWrkPlanEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_eqCondition","key":"IN_DS1"},{"id":"ds_eqPlan3","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqPlan3","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchEqList_submitdone','ev:submiterror':'scwin.sbm_searchEqList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchVolPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceVolPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_volPlan2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_volPlan2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchVolPlan2_submitdone','ev:submiterror':'scwin.sbm_searchVolPlan2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchManPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceManPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_manPlan2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_manPlan2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchManPlan2_submitdone','ev:submiterror':'scwin.sbm_searchManPlan2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceEqPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPlan","key":"IN_DS1"},{"id":"ds_eqPlan2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqPlan2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchEqPlan2_submitdone','ev:submiterror':'scwin.sbm_searchEqPlan2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchWrkIndictNo',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceWorkIndictNoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_copyCondition","key":"IN_DS1"},{"id":"ds_wrkIndictNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_wrkIndictNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchWrkIndictNo_submitdone','ev:submiterror':'scwin.sbm_searchWrkIndictNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=ZZ208',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_eqNrmCd_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_wrkDtSetting',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP312',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_wrkDtSetting","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_wrkDtSetting","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_wrkDtSetting_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStpCd',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do?upperWrkStpCd=01&lvl=3&wrkPlanTrgtYn=1',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_wrkStpCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_wrkStpCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_wrkStpCd_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.PwrkPlCd = "";
scwin.PstDt = "";
scwin.PendDt = "";
scwin.chk_retrieve = "F";
scwin.chk_input = "F";
scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.vCurDate = "";
scwin.vQryStDt = "";
scwin.vQryEndDt = "";
scwin.txtWrkIndictNo = "";
scwin.txt_completeProcYn = "";
scwin.txt_hlobranCd = "";
scwin.txt_hlobranNm = "";
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.PwrkPlCd = scwin.params && scwin.params["wrkPlCd"] ? scwin.params["wrkPlCd"] : "";
  scwin.PstDt = scwin.params && scwin.params["stDt"] ? scwin.params["stDt"] : "";
  scwin.PendDt = scwin.params && scwin.params["endDt"] ? scwin.params["endDt"] : "";
  scwin.lobranCd = $c.ses.getLobranCd();
  scwin.lobranNm = $c.ses.getLobranNm();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01";
  scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDate($p, scwin.vCurDate);
  scwin.f_OnLoad();
};
scwin.onUdcCompleted = async function () {
  if (scwin.PwrkPlCd != "") {
    ed_wrkPlCd.setValue(scwin.PwrkPlCd);
    ica_stDt.setValue(scwin.PstDt);
    ica_endDt.setValue(scwin.PendDt);
    scwin.f_Retrieve();
  } else {
    ica_stDt.setValue(scwin.vQryStDt);
    ica_endDt.setValue(scwin.vQryEndDt);
  }
};
scwin.f_OnLoad = async function () {
  await $c.sbm.execute($p, sbm_eqNrmCd);
  await $c.sbm.execute($p, sbm_wrkDtSetting);
  await $c.sbm.execute($p, sbm_wrkStpCd);
  let codeOptions = [{
    grpCd: "OP117",
    compID: "gr_workIndict:shiftClsCd,acb_shiftClsCd"
  }, {
    grpCd: "OP308",
    compID: "gr_volPlan:wrkStpCd,gr_manPlan:wrkStpCd,gr_eqPlan:wrkStpCd"
  }, {
    grpCd: "ZZ505",
    compID: "gr_eqPlan:posnClsCd"
  }, {
    grpCd: "ZZ210",
    compID: "gr_eqPlan:eqKndCd,gr_inputEq:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_no7, button_no8, button_no9, button_no10, button_no11, button_no12, button_no13, button_no14, button_no15, button_no16, button_no17, button_no18]);
  $c.gus.cfDisableObjects($p, [button_main1, button_main2, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
  if (scwin.lobranCd.substring(0, 2) == "6A") {
    gr_workIndict.setColumnVisible("printChk", true);
  } else {
    gr_workIndict.setColumnVisible("printChk", false);
  }
};
scwin.sbm_eqNrmCd_submitdone = async function (e) {};
scwin.sbm_wrkDtSetting_submitdone = async function (e) {};
scwin.sbm_wrkStpCd_submitdone = async function (e) {};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_stDt, ica_endDt, ed_wrkPlCd]))) {
    return;
  }
  dma_search.set("stDt", ica_stDt.getValue());
  dma_search.set("endDt", ica_endDt.getValue());
  dma_search.set("wrkPlCd", ed_wrkPlCd.getValue());
  await $c.sbm.execute($p, sbm_search);
  scwin.chk_input = "F";
};
scwin.f_RetrievePlan = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_stDt, ica_endDt, ed_wrkPlCd]))) {
    return;
  }
  let rowPos = ds_workIndict.getRowPosition();
  dma_searchPlan.set("wrkIndictNo", ds_workIndict.getCellData(rowPos, "wrkIndictNo"));
  dma_searchPlan.set("stvWrkIndictNo", ds_workIndict.getCellData(rowPos, "wrkIndictNo"));
  await $c.sbm.execute($p, sbm_searchVolPlan);
  await $c.sbm.execute($p, sbm_searchManPlan);
  await $c.sbm.execute($p, sbm_searchEqPlan);
  await $c.sbm.execute($p, sbm_searchInputEq);
};
scwin.f_copyPlan = async function () {
  dma_copyCondition.set("wrkDt", ica_wrkDt.getValue());
  dma_copyCondition.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_copyCondition.set("shiftClsCd", acb_shiftClsCd.getValue());
  await $c.sbm.execute($p, sbm_searchWrkIndictNo);
  if (ds_wrkIndictNo.getCellData(0, "wrkIndictNo") == "") {
    await $c.win.alert($p, "해당 일자와 쉬프트에 해당하는 작업계획이 없습니다.");
    return false;
  }
  dma_searchPlan.set("wrkIndictNo", ds_wrkIndictNo.getCellData(0, "wrkIndictNo"));
  await $c.sbm.execute($p, sbm_searchVolPlan2);
  await $c.sbm.execute($p, sbm_searchManPlan2);
  await $c.sbm.execute($p, sbm_searchEqPlan2);
};
scwin.f_mainSave = async function () {
  if (ds_workIndict.getUpdatedIndex().length > 0 || ds_volPlan.getUpdatedIndex().length > 0 || ds_manPlan.getUpdatedIndex().length > 0 || ds_eqPlan.getUpdatedIndex().length > 0 || ds_inputEq.getUpdatedIndex().length > 0) {
    if (ds_workIndict.getUpdatedIndex().length > 0) {
      let chkVal = await $c.gus.cfValidate($p, [gr_workIndict]);
      if (!chkVal) return;
      let rowPos = ds_workIndict.getRowPosition();
      let wrkDt = ds_workIndict.getCellData(rowPos, "wrkDt");
      let stHh = ds_workIndict.getCellData(rowPos, "wrkStHh");
      let endHh = ds_workIndict.getCellData(rowPos, "wrkEndHh");
      let shift = ds_workIndict.getCellData(rowPos, "shiftClsCd");
      if (stHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkStHh");
        return false;
      }
      if (endHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkEndHh");
        return false;
      }
      if (stHh.substr(0, 2) > "23") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkStHh");
        return;
      }
      if (stHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkStHh");
        return;
      }
      if (endHh.substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkEndHh");
        return;
      }
      if (endHh.substr(0, 2) == "00" && endHh.substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkEndHh");
        return;
      }
      if (endHh.substr(0, 2) == "24" && endHh.substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkEndHh");
        return;
      }
      if (endHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]);
        gr_workIndict.setFocusedCell(rowPos, "wrkEndHh");
        return;
      }
      if (shift == "M") {
        if (stHh > endHh && endHh > "0700") {
          await $c.gus.cfAlertMsg($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
          gr_workIndict.setFocusedCell(rowPos, "wrkEndHh");
          return;
        }
      } else if (shift == "D") {
        if (!$c.gus.cfIsAfterDate($p, stHh, endHh)) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_058);
          gr_workIndict.setFocusedCell(rowPos, "wrkStHh");
          return;
        }
      }
    }
    if (ds_volPlan.getUpdatedIndex().length > 0) {
      let chkVal = await $c.gus.cfValidate($p, [gr_volPlan]);
      if (!chkVal) return;
    }
    if (ds_manPlan.getUpdatedIndex().length > 0) {
      let chkVal = await $c.gus.cfValidate($p, [gr_manPlan]);
      if (!chkVal) return;
      let chk = 0;
      for (let i = 0; i < ds_manPlan.getRowCount(); i++) {
        if (ds_manPlan.getCellData(i, "cfmanYn") == 1) {
          chk++;
        }
      }
      if (chk > 1) {
        await $c.win.alert($p, "Chief 포맨 여부는 한명만 선택할 수 있습니다.");
        return false;
      }
    }
    if (ds_eqPlan.getUpdatedIndex().length > 0) {
      let chkVal = await $c.gus.cfValidate($p, [gr_eqPlan]);
      if (!chkVal) return;
    }
    if (ds_inputEq.getUpdatedIndex().length > 0) {
      let chkVal = await $c.gus.cfValidate($p, [gr_inputEq]);
      if (!chkVal) return;
    }
    let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
    if (confirmResult) {
      await $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업장작업계획등록"]);
  }
};
scwin.f_mainInput = async function () {
  scwin.chk_input = "T";
  $c.gus.cfEnableObjects($p, [button_no1, button_no2, button_no3, button_main2]);
  $c.gus.cfDisableObjects($p, [button_main1]);
  let rowPos = ds_workIndict.getRowPosition();
  if (ds_workIndict.getCellData(rowPos, "completeProcYn") == 1) {
    $c.gus.cfDisableObjects($p, [button_no2, button_no3, txa_rmk]);
    gr_workIndict.setReadOnly("grid", true);
    gr_volPlan.setReadOnly("grid", true);
    gr_manPlan.setReadOnly("grid", true);
    gr_eqPlan.setReadOnly("grid", true);
    gr_inputEq.setReadOnly("grid", true);
  } else {
    $c.gus.cfEnableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_no7, button_no8, button_no9, button_no10, button_no11, button_no12, button_no13, button_no14, button_no15, button_no16, button_no17, button_no18, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
    gr_workIndict.setReadOnly("grid", false);
    gr_volPlan.setReadOnly("grid", false);
    gr_manPlan.setReadOnly("grid", false);
    gr_eqPlan.setReadOnly("grid", false);
    gr_inputEq.setReadOnly("grid", false);
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      let wrkPlGbCd = "1";
      let lodeptCd = scwin.lobranCd;
      let paramList = "," + lodeptCd + "," + wrkPlGbCd;
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveWrkPlInfo", pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
      break;
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_AddRow = async function (grid) {
  switch (grid) {
    case "1":
      let chk1 = 0;
      for (let i = 0; i < ds_workIndict.getRowCount(); i++) {
        if (ds_workIndict.getRowStatus(i) == "C") {
          chk1++;
        }
      }
      if (chk1 > 0) {
        await $c.win.alert($p, "작업지시는 1건씩만 등록이 가능합니다.");
        return false;
      }
      ds_workIndict.insertRow();
      let newRowPos1 = ds_workIndict.getRowPosition();
      ds_workIndict.setCellData(newRowPos1, "wrkPlCd", ed_wrkPlCd.getValue());
      ds_volPlan.removeAll();
      ds_manPlan.removeAll();
      ds_eqPlan.removeAll();
      break;
    case "2":
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "물량 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_volPlan.insertRow();
      let newRowPos2 = ds_volPlan.getRowPosition();
      ds_volPlan.setCellData(newRowPos2, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      ds_volPlan.setCellData(newRowPos2, "holdNo", newRowPos2 + 1);
      if (scwin.lobranCd.substring(0, 2) == "6A") {
        ds_volPlan.setCellData(newRowPos2, "impExpClsCd", "I");
        ds_volPlan.setCellData(newRowPos2, "commCd", "30000000");
        ds_volPlan.setCellData(newRowPos2, "commNm", "일반화물");
      }
      break;
    case "3":
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "인원 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_manPlan.insertRow();
      let newRowPos3 = ds_manPlan.getRowPosition();
      ds_manPlan.setCellData(newRowPos3, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      break;
    case "4":
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_eqPlan.insertRow();
      let newRowPos4 = ds_eqPlan.getRowPosition();
      ds_eqPlan.setCellData(newRowPos4, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      break;
    case "5":
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      let eqLobran = scwin.lobranCd;
      dma_eqCondition.set("lobranCd", eqLobran);
      dma_eqCondition.set("cwGbn", "W");
      await $c.sbm.execute($p, sbm_searchEqList);
      if (ds_eqPlan3.getRowCount() > 0) {
        for (let i = 0; i < ds_eqPlan3.getRowCount(); i++) {
          ds_eqPlan.insertRow();
          let newPos = ds_eqPlan.getRowPosition();
          ds_eqPlan.setCellData(newPos, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
          ds_eqPlan.setCellData(newPos, "wrkStpCd", ds_eqPlan3.getCellData(i, "wrkStpCd"));
          ds_eqPlan.setCellData(newPos, "posnClsCd", ds_eqPlan3.getCellData(i, "posnClsCd"));
          ds_eqPlan.setCellData(newPos, "eqKndCd", ds_eqPlan3.getCellData(i, "eqKndCd"));
          ds_eqPlan.setCellData(newPos, "eqNrmCd", ds_eqPlan3.getCellData(i, "eqNrmCd"));
        }
      } else {
        await $c.win.alert($p, "점소코드 : [" + eqLobran + "]에 해당하는 중기리스트가 등록되지 않았습니다.");
        return false;
      }
      break;
    case "6":
      let row6 = ds_eqPlan.getRowPosition();
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      if (ds_eqPlan.getRowCount() < 1) {
        await $c.win.alert($p, "행복사 할 중기계획이 없습니다");
        return false;
      } else {
        ds_eqPlan.insertRow();
        let newPos6 = ds_eqPlan.getRowPosition();
        ds_eqPlan.setCellData(newPos6, "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
        ds_eqPlan.setCellData(newPos6, "wrkStpCd", ds_eqPlan.getCellData(row6, "wrkStpCd"));
        ds_eqPlan.setCellData(newPos6, "posnClsCd", ds_eqPlan.getCellData(row6, "posnClsCd"));
        ds_eqPlan.setCellData(newPos6, "eqKndCd", ds_eqPlan.getCellData(row6, "eqKndCd"));
        ds_eqPlan.setCellData(newPos6, "eqNrmCd", ds_eqPlan.getCellData(row6, "eqNrmCd"));
      }
      break;
    case "7":
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, " 장비 배치는 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_inputEq.insertRow();
      let newPos7 = ds_inputEq.getRowPosition();
      ds_inputEq.setCellData(newPos7, "stvWrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      ds_inputEq.setCellData(newPos7, "wrkDt", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt"));
      ds_inputEq.setCellData(newPos7, "etWrkHh", "0");
      break;
  }
};
scwin.f_deleteRow = async function (grid) {
  switch (grid) {
    case "1":
      ds_workIndict.removeRow(ds_workIndict.getRowPosition());
      break;
    case "2":
      ds_volPlan.removeRow(ds_volPlan.getRowPosition());
      break;
    case "3":
      if (ds_manPlan.getCellData(0, "tableFlag") == 306) {
        if (ds_manPlan.getRowCount() == 1) {
          ds_manPlan.removeAll();
        } else {
          let tempData = [];
          for (let i = 1; i < ds_manPlan.getRowCount(); i++) {
            let rowData = {};
            let colInfos = ds_manPlan.getColumnInfo();
            for (let c = 0; c < colInfos.length; c++) {
              rowData[colInfos[c].id] = ds_manPlan.getCellData(i, colInfos[c].id);
            }
            tempData.push(rowData);
          }
          ds_manPlan.removeAll();
          for (let t = 0; t < tempData.length; t++) {
            ds_manPlan.insertRow();
            let newIdx = ds_manPlan.getRowPosition();
            for (let key in tempData[t]) {
              ds_manPlan.setCellData(newIdx, key, tempData[t][key]);
            }
          }
        }
      } else {
        ds_manPlan.removeRow(ds_manPlan.getRowPosition());
      }
      break;
    case "4":
      ds_eqPlan.removeRow(ds_eqPlan.getRowPosition());
      break;
  }
};
scwin.f_openCommPopUpGrid = async function (disGubun, gubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      if (gubun == 1) {
        pCode = "";
        pName = ds_volPlan.getCellData(row, "commNm");
      } else if (gubun == 2) {
        pCode = ds_volPlan.getCellData(row, "commCd");
        pName = "";
      }
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveCommInfo", pCode, pName, pClose, "3", "품목/품명코드,품목/품명,구분", "105,190,70", "4,5,6,7,8,9,10", ",,,A4", null, null, null, null, null, "F", "품목/품명,품명코드,품명");
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_volPlan, row, "commCd", "commNm");
      break;
    case 2:
      if (gubun == 1) {
        pCode = "";
        pName = ds_volPlan.getCellData(row, "clntNm");
      } else if (gubun == 2) {
        pCode = ds_volPlan.getCellData(row, "clntNo");
        pName = "";
      }
      let rtnValues = $c.gus.cfCommonPopUp($p, "retrieveCoopList", pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "화주,화주코드,화주명");
      $c.gus.cfSetGridReturnValue($p, rtnValues, ds_volPlan, row, "clntNo", "clntNm");
      break;
  }
};
scwin.f_openCommonPopUp2 = async function (gubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  let arrParam = [];
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
      arrParam[6] = "T";
      arrParam[7] = "T";
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml", {
        width: 600,
        height: 430,
        modal: true,
        data: arrParam
      });
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
  if (argFlg == 1) {
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
  arrParam[4] = "";
  arrParam[5] = "01";
  arrParam[6] = "02,D";
  arrParam[7] = "";
  arrParam[8] = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt");
  arrParam[9] = "Y";
  arrParam[10] = "T";
  arrParam[11] = "1";
  rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
    width: 530,
    height: 450,
    modal: true,
    data: arrParam
  });
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
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
    if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
    if (targetRow == null) {
      targetDataset.insertRow();
      targetRow = targetDataset.getRowPosition();
    }
    for (let i = 0; i < sourceColumns.length; i++) {
      if ($c.gus.cfIsNull($p, sourceColumns[i]) || $c.gus.cfIsNull($p, targetColumns[i])) continue;
      targetDataset.setCellData(targetRow, targetColumns[i], sourceDataset.getCellData(sourceRow, sourceColumns[i]));
      if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
    }
    return targetRow;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[f_CopyDataRow]" + e);
  }
};
scwin.f_GetColumnNames = async function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    let colInfos = dataSet.getColumnInfo();
    if (colInfos == null || colInfos.length == 0) return null;
    let rtnArray = [];
    for (let i = 0; i < colInfos.length; i++) {
      rtnArray.push(colInfos[i].id);
    }
    if (rtnArray.length == 0) return null;
    return rtnArray;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[f_GetColumnNames] " + e);
  }
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, udc_dt, null);
  ed_wrkPlCd.setValue("");
  txt_wrkPlNm.setValue("");
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
  pCode = ds_inputEq.getCellData(ds_inputEq.getRowPosition(), colid);
  ds_inputEq.setCellData(ds_inputEq.getRowPosition(), colidNm, "");
  arrParam[0] = "";
  arrParam[1] = pCode;
  arrParam[2] = scwin.lobranCd;
  arrParam[3] = scwin.lobranNm;
  arrParam[4] = "";
  arrParam[5] = "00,E";
  arrParam[6] = "01,D";
  arrParam[7] = "";
  arrParam[8] = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt");
  arrParam[9] = "Y";
  arrParam[10] = "T";
  rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
    width: 530,
    height: 450,
    modal: true,
    data: arrParam
  });
  if (rtnList != null && rtnList[1] != undefined) {
    ds_inputEq.setCellData(ds_inputEq.getRowPosition(), colid, rtnList[2]);
    ds_inputEq.setCellData(ds_inputEq.getRowPosition(), colidNm, rtnList[3]);
  } else {
    ds_inputEq.setCellData(ds_inputEq.getRowPosition(), colid, "");
    ds_inputEq.setCellData(ds_inputEq.getRowPosition(), colidNm, "");
  }
};
scwin.sbm_search_submitdone = async function (e) {};
scwin.sbm_search_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchWrkIndictNo_submitdone = function (e) {};
scwin.sbm_searchWrkIndictNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchVolPlan_submitdone = function (e) {};
scwin.sbm_searchVolPlan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchManPlan_submitdone = function (e) {
  if (ds_manPlan.getRowCount() > 0 && ds_manPlan.getCellData(0, "tableFlag") == 306) {
    ds_manPlan.setCellData(0, "wrkStpCd", "004");
  }
};
scwin.sbm_searchManPlan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchEqPlan_submitdone = function (e) {};
scwin.sbm_searchEqPlan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchInputEq_submitdone = function (e) {};
scwin.sbm_searchInputEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchEqList_submitdone = function (e) {};
scwin.sbm_searchEqList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchVolPlan2_submitdone = function (e) {};
scwin.sbm_searchVolPlan2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchManPlan2_submitdone = function (e) {};
scwin.sbm_searchManPlan2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchEqPlan2_submitdone = function (e) {};
scwin.sbm_searchEqPlan2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_workIndict_onloadcompleted = function (e) {
  let rowCnt = ds_workIndict.getRowCount();
  if (rowCnt > 0) {
    scwin.f_RetrievePlan();
  } else {
    ds_volPlan.removeAll();
    ds_manPlan.removeAll();
    ds_eqPlan.removeAll();
    ds_inputEq.removeAll();
  }
  $c.gus.cfDisableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_no7, button_no8, button_no9, button_no10, button_no11, button_no12, button_no13, button_no14, button_no15, button_no16, button_no17, button_no18]);
  $c.gus.cfDisableObjects($p, [button_main2, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
  $c.gus.cfEnableObjects($p, [button_main1]);
  gr_workIndict.setReadOnly("grid", true);
  gr_volPlan.setReadOnly("grid", true);
  gr_manPlan.setReadOnly("grid", true);
  gr_eqPlan.setReadOnly("grid", true);
  gr_inputEq.setReadOnly("grid", true);
  scwin.chk_input = "F";
};
scwin.gr_workIndict_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_workIndict.getRowStatus(rowIndex) != "C") {
    gr_workIndict.setColumnReadOnly("wrkDt", true);
  } else {
    gr_workIndict.setColumnReadOnly("wrkDt", false);
  }
  scwin.f_RetrievePlan();
};
scwin.gr_workIndict_oncloseup = function (rowIndex, columnIndex, columnId) {
  if (columnId == "shiftClsCd") {
    let shiftVal = ds_workIndict.getCellData(rowIndex, "shiftClsCd");
    if (shiftVal == "D") {
      ds_workIndict.setCellData(rowIndex, "wrkStHh", "0800");
      ds_workIndict.setCellData(rowIndex, "wrkEndHh", "1700");
    } else if (shiftVal == "N") {
      ds_workIndict.setCellData(rowIndex, "wrkStHh", "1900");
      ds_workIndict.setCellData(rowIndex, "wrkEndHh", "2200");
    } else if (shiftVal == "M") {
      ds_workIndict.setCellData(rowIndex, "wrkStHh", "2200");
      ds_workIndict.setCellData(rowIndex, "wrkEndHh", "0700");
    }
  }
};
scwin.gr_eqPlan_oncloseup = function (rowIndex, columnIndex, columnId) {
  if (columnId == "eqKndCd") {
    ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqNrmCd", "");
    // TODO: ds_eqNrmCd filter by eqKndCd - WebSquare filter API 적용 필요
  }
};
scwin.gr_volPlan_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "commNm":
      scwin.f_openCommPopUpGrid(1, 1, rowIndex, "F");
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(1, 2, rowIndex, "F");
      break;
    case "clntNo":
      scwin.f_openCommPopUpGrid(2, 1, rowIndex, "F");
      break;
    case "clntNm":
      scwin.f_openCommPopUpGrid(2, 2, rowIndex, "F");
      break;
  }
};
scwin.gr_volPlan_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  switch (columnId) {
    case "commNm":
      if (newValue != "" && newValue != oldValue) {
        ds_volPlan.setCellData(rowIndex, "commCd", "");
        scwin.f_openCommPopUpGrid(1, 1, rowIndex, "T");
      } else if (newValue == "") {
        ds_volPlan.setCellData(rowIndex, "commCd", "");
        ds_volPlan.setCellData(rowIndex, "commNm", "");
      }
      break;
    case "clntNm":
      if (newValue != "" && newValue != oldValue) {
        ds_volPlan.setCellData(rowIndex, "clntNo", "");
        scwin.f_openCommPopUpGrid(2, 1, rowIndex, "T");
      } else if (newValue == "") {
        ds_volPlan.setCellData(rowIndex, "clntNo", "");
        ds_volPlan.setCellData(rowIndex, "clntNm", "");
      }
      break;
  }
};
scwin.gr_manPlan_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "staffNo") {
    scwin.f_openCommCdPopUp(1);
  } else if (columnId == "staffNm") {
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
scwin.ds_workIndict_onrowpositionchange = function (rowIndex) {
  if (scwin.chk_input == "T") {
    if (ds_workIndict.getCellData(rowIndex, "completeProcYn") == 1) {
      $c.gus.cfDisableObjects($p, [button_no2, button_no3, button_no4, button_no5, button_no6, button_no7, button_no8, button_no9, button_no10, button_no11, button_no12, button_no13, button_no14, button_no15, button_no16, button_no17, button_no18, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
      $c.gus.cfEnableObjects($p, [button_no1]);
      gr_workIndict.setReadOnly("grid", true);
      gr_volPlan.setReadOnly("grid", true);
      gr_manPlan.setReadOnly("grid", true);
      gr_eqPlan.setReadOnly("grid", true);
      gr_inputEq.setReadOnly("grid", true);
    } else {
      $c.gus.cfEnableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_no7, button_no8, button_no9, button_no10, button_no11, button_no12, button_no13, button_no14, button_no15, button_no16, button_no17, button_no18, txa_rmk, txa_rmk2, txa_rmk3, txa_rmk4]);
      gr_workIndict.setReadOnly("grid", false);
      gr_volPlan.setReadOnly("grid", false);
      gr_manPlan.setReadOnly("grid", false);
      gr_eqPlan.setReadOnly("grid", false);
      gr_inputEq.setReadOnly("grid", false);
    }
  }
};
scwin.gr_volPlan_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_volPlan.getRowStatus(rowIndex) != "C") {
    gr_volPlan.setColumnReadOnly("holdNo", true);
    gr_volPlan.setColumnReadOnly("impExpClsCd", true);
    gr_volPlan.setColumnReadOnly("commCd", true);
    gr_volPlan.setColumnReadOnly("commNm", true);
  } else {
    gr_volPlan.setColumnReadOnly("holdNo", false);
    gr_volPlan.setColumnReadOnly("impExpClsCd", false);
    gr_volPlan.setColumnReadOnly("commCd", false);
    gr_volPlan.setColumnReadOnly("commNm", false);
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
  if (columnId == "wrkDt") {
    // TODO: calendar popup for grid cell
  }
};
scwin.gr_inputEq_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "vehclShortCd":
      scwin.f_openCommonPopUp2(7, rowIndex, "T");
      break;
    case "drvStaffNo1":
      scwin.f_openStaffNoPopUp(rowIndex, columnId);
      break;
    case "drvStaffNo2":
      scwin.f_openStaffNoPopUp(rowIndex, columnId);
      break;
    case "drvStaffNo3":
      scwin.f_openStaffNoPopUp(rowIndex, columnId);
      break;
  }
};
scwin.gr_inputEq_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  switch (columnId) {
    case "vehclShortCd":
      if (newValue != oldValue && newValue != "") {
        scwin.f_openCommonPopUp2(7, rowIndex, "T");
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, "vehclShortCd", "");
        ds_inputEq.setCellData(rowIndex, "eqCd", "");
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
    case "drvStaffNo1":
      if (newValue != oldValue && newValue != "") {
        scwin.f_openStaffNoPopUp(rowIndex, columnId);
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, columnId, "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1nm", "");
      }
      break;
    case "drvStaffNo2":
      if (newValue != oldValue && newValue != "") {
        scwin.f_openStaffNoPopUp(rowIndex, columnId);
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, columnId, "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2nm", "");
      }
      break;
    case "drvStaffNo3":
      if (newValue != oldValue && newValue != "") {
        scwin.f_openStaffNoPopUp(rowIndex, columnId);
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, columnId, "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3nm", "");
      }
      break;
  }
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
scwin.ed_wrkPlCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 1);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.button_main1_onclick = function (e) {
  scwin.f_mainInput();
};
scwin.button_main2_onclick = function (e) {
  scwin.f_mainSave();
};
scwin.button_no1_onclick = function (e) {
  scwin.f_AddRow("1");
};
scwin.button_no2_onclick = function (e) {
  scwin.f_deleteRow("1");
};
scwin.button_no3_onclick = function (e) {
  ds_workIndict.undoRow(ds_workIndict.getRowPosition());
};
scwin.button_no4_onclick = function (e) {
  scwin.f_AddRow("2");
};
scwin.button_no5_onclick = function (e) {
  scwin.f_deleteRow("2");
};
scwin.button_no6_onclick = function (e) {
  ds_volPlan.undoRow(ds_volPlan.getRowPosition());
};
scwin.button_no7_onclick = function (e) {
  scwin.f_AddRow("3");
};
scwin.button_no8_onclick = function (e) {
  scwin.f_deleteRow("3");
};
scwin.button_no9_onclick = function (e) {
  ds_manPlan.undoRow(ds_manPlan.getRowPosition());
};
scwin.button_no10_onclick = function (e) {
  scwin.f_AddRow("4");
};
scwin.button_no11_onclick = function (e) {
  scwin.f_deleteRow("4");
};
scwin.button_no12_onclick = function (e) {
  ds_eqPlan.undoRow(ds_eqPlan.getRowPosition());
};
scwin.button_no13_onclick = function (e) {
  scwin.f_AddRow("5");
};
scwin.button_no14_onclick = function (e) {
  scwin.f_AddRow("6");
};
scwin.button_no15_onclick = function (e) {
  scwin.f_copyPlan();
};
scwin.button_no16_onclick = function (e) {
  scwin.f_AddRow("7");
};
scwin.button_no17_onclick = function (e) {
  ds_inputEq.removeRow(ds_inputEq.getRowPosition());
};
scwin.button_no18_onclick = function (e) {
  ds_inputEq.undoRow(ds_inputEq.getRowPosition());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_stDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox ',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업지시',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_workIndict',id:'gr_workIndict',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'printChk',inputType:'checkbox',value:'',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'shiftClsCd',inputType:'text',value:'Shift',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkStHh',inputType:'text',value:'시작',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkEndHh',inputType:'text',value:'종료',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'extdYn',inputType:'text',value:'연장',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'ealyAtdYn',inputType:'text',value:'조출',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'completeProcYn',inputType:'text',value:'실적',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'rmk',inputType:'text',style:'',value:'특이사항',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'printChk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'calendar',width:'100',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',width:'70',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',width:'70',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extdYn',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ealyAtdYn',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'completeProcYn',inputType:'select',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:'',dataType:'number',displayFormat:'#,###'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',textAlign:'center',value:'',width:'100'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ty2',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk',style:'height:75px;',ref:'data:ds_workIndict.rmk'}},{T:1,N:'xf:group',A:{class:'bottom-inner',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_wrkDt',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_wrkDtSetting.cdNm',mandatory:'true'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 70px;',id:'acb_shiftClsCd',class:'req',ref:'data:ds_wrkDtSetting.fltrCd1',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'button_no15',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획 불러오기'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물량계획',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_volPlan',id:'gr_volPlan',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'holdNo',inputType:'text',rowSpan:'2',value:'HOLD',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'impExpClsCd',inputType:'text',rowSpan:'2',value:'수출입<br/>구분',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'commNm',inputType:'text',rowSpan:'2',value:'품목/품명',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'commCd',inputType:'text',rowSpan:'2',value:'품목/<br/>품명코드',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'wrkStpCd',inputType:'text',rowSpan:'2',value:'작업단계',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'clntNo',value:'화주코드',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'clntNm',value:'화주',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'planQty',inputType:'text',rowSpan:'',value:'작업계획물량',width:'210'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'true',id:'planWt',inputType:'text',rowSpan:'2',style:'',value:'비고',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'holdNo',inputType:'text',value:'수량',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'impExpClsCd',inputType:'text',value:'중량(톤)',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'commNm',inputType:'text',value:'CBM',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',textAlign:'left',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',textAlign:'left',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planQty',inputType:'text',textAlign:'right',width:'70',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planWt',inputType:'text',textAlign:'right',width:'70',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planCbm',inputType:'text',textAlign:'right',width:'70',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',textAlign:'right',width:'70',expression:'sum(\'planQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'expression',textAlign:'right',width:'70',expression:'sum(\'planWt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',textAlign:'right',width:'70',expression:'sum(\'planCbm\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ty2',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk2',style:'height:75px;',ref:'data:ds_volPlan.rmk'}},{T:1,N:'xf:group',A:{class:'bottom-inner',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인원계획',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_manPlan',id:'gr_manPlan',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'wrkIndictNo',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'staffNo',inputType:'text',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'staffNm',inputType:'text',value:'이름',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',value:'직급',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'occptypeCd',inputType:'text',value:'상세직종',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeNm',inputType:'text',value:'상세직종',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'cfmanYn',inputType:'text',value:'Chief<br/>포맨 여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'tableFlag',inputType:'text',value:'table구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'rmk',inputType:'text',value:'비고',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'rmk2',inputType:'text',value:'비고',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cfmanYn',inputType:'checkbox',width:'100',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tableFlag',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',textAlign:'left',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk2',inputType:'text',textAlign:'left',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ty2',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'포맨',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk3',style:'',ref:'data:ds_manPlan.rmk'}}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비기사',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk4',style:'',ref:'data:ds_manPlan.rmk2'}}]}]},{T:1,N:'xf:group',A:{class:'bottom-inner',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중기계획',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_eqPlan',id:'gr_eqPlan',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'wrkIndictNo',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'posnClsCd',inputType:'text',value:'소유구분',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'eqKndCd',inputType:'text',value:'중기종류',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'eqNrmCd',inputType:'text',value:'필요규격',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'cnt',inputType:'text',value:'대수',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',width:'80',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',width:'80',expression:'sum(\'cnt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'button_no13',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중기 리스트'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'button_no14',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비투입',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_inputEq',id:'gr_inputEq',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'stvWrkIndictNo',inputType:'text',value:'작업지시번호',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'etWrkHh',inputType:'text',value:'투입시간',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'eqCd',inputType:'text',value:'장비코드',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'vehclShortCd',inputType:'text',value:'단축번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'장비종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',value:'장비규격',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'drvStaffNo1',inputType:'text',value:'인원1',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo1nm',inputType:'text',value:'인원1',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'drvStaffNo2',inputType:'text',value:'인원2',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo2nm',inputType:'text',value:'인원2',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'drvStaffNo3',inputType:'text',value:'인원3',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo3nm',inputType:'text',value:'인원3',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'calendar',width:'100',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'etWrkHh',inputType:'text',width:'100',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'100',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo1',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo1nm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo2',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo2nm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo3',inputType:'textImage',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvStaffNo3nm',inputType:'text',width:'70',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'expression',width:'100',expression:'sum(\'etWrkHh\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'button_main1',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'button_main2',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})