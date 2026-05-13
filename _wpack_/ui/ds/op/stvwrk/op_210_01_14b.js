/*amd /ui/ds/op/stvwrk/op_210_01_14b.xml 101199 25654696a928c5b5a2959b60f2c15b0e10040d180bd445f7aac82d94561c7316 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_search_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workIndict',saveRemovedData:'true','ev:ondataload':'scwin.ds_workIndict_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'조출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmkCd',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'shiftClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictKndCd',name:'wrkIndictKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'printChk',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manPlan',saveRemovedData:'true','ev:ondataload':'scwin.ds_manPlan_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'wrkDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ecsYn',name:'ecsYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan',saveRemovedData:'true','ev:ondataload':'scwin.ds_eqPlan_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planWt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_eqCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cwGbn',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_copyCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkIndictNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volPlan2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planWt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk2',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkDtSetting',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'cdEngNmAbbr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'cdDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'grpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'upperCdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'cdNmAbbr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'fltrCd3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'cdEngNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'upperCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'sortSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'fltrCd1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'fltrCd2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'useYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_eqNrmCd_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txtWrkIndictNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_completeProcYn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_hlobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_hlobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_wrkDtSetting_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkDtSetting',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workIndict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'wrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'wrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'wrkIndictNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'wrkDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'shiftClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'extdYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'ealyAtdYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'completeProcYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmkCd',name:'rmkCd',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_eqNrmCd',id:'ldt_eqNrmCd'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.stvwrk.RetrieveWorkPlacePlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_workIndict","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workIndict","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchManPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceManPlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchPlan","key":"IN_DS1"},{"id":"ds_manPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_manPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchManPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceEqPlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchPlan","key":"IN_DS1"},{"id":"ds_eqPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchEqPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.stvwrkplan.SaveWorkPlacePlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_volPlan","key":"IN_DS2"},{"action":"modified","id":"ds_manPlan","key":"IN_DS3"},{"action":"modified","id":"ds_eqPlan","key":"IN_DS4"},{"action":"modified","id":"ds_inputEq","key":"IN_DS5"},{"action":"modified","id":"ds_workIndict","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqList',action:'/ds.op.wrkplan.stvwrkplan.RetrieveStvWrkPlanEqListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_eqCondition","key":"IN_DS1"},{"id":"ds_eqPlan3","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqPlan3","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchManPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceManPlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchPlan","key":"IN_DS1"},{"id":"ds_manPlan2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_manPlan2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchManPlan2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqPlan2',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceEqPlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchPlan","key":"IN_DS1"},{"id":"ds_eqPlan2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqPlan2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchEqPlan2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchWrkIndictNo',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceWorkIndictNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_copyCondition","key":"IN_DS1"},{"id":"ds_wrkIndictNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkIndictNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_searchWrkIndictNo_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_eqNrmCd_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkDtSetting',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_wrkDtSetting_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_01_14b 
// 이름     : 작업장작업계획등록
// 경로     : 물류/하역(인천)/계획/배치
// 작 성 자 : 조성빈
// 작 업 일 : 2026-03-04
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================

scwin.onpageload = function () {
  scwin.wrkPlCd = $c.gus.cfIsNull($p, $c.data.getParameter($p, "wrkPlCd")) ? "" : $c.data.getParameter($p, "wrkPlCd"); // 본선관리번호
  scwin.stDt = $c.gus.cfIsNull($p, $c.data.getParameter($p, "stDt")) ? "" : $c.data.getParameter($p, "stDt"); // 작업일자
  scwin.endDt = $c.gus.cfIsNull($p, $c.data.getParameter($p, "endDt")) ? "" : $c.data.getParameter($p, "endDt"); // shift

  // CodeList    = "^ ," + GauceUtil.getCodeList("OP120");

  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
  scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm");
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)
  scwin.vNextDate = $c.date.addDate($p, scwin.vCurDate, 1);
  scwin.vPrevDate = $c.date.addDate($p, scwin.vCurDate, -1);
  scwin.PwrkPlCd = scwin.wrkPlCd;
  scwin.PstDt = scwin.stDt;
  scwin.PendDt = scwin.endDt;
  scwin.chk_retrieve = "F";
  scwin.chk_input = "F";
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_workIndict:shiftClsCd,acb_shiftClsCd"
  }, {
    grpCd: "OP320",
    compID: "gr_workIndict:rmkCd"
  }, {
    grpCd: "OP308",
    compID: "gr_manPlan:wrkStpCd,gr_eqPlan:wrkStpCd"
  }, {
    grpCd: "ZZ505",
    compID: "gr_eqPlan:posnClsCd"
  }, {
    grpCd: "ZZ210",
    compID: "gr_eqPlan:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};
scwin.setCommonCodeCallBack = async function () {
  dlt_commonCodeOP320.sort('cd', 0);
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;

  //중기 규격 콤보 
  ds_eqNrmCd_search.set("grpCd", "ZZ208");
  var rs = await $c.sbm.execute($p, sbm_eqNrmCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_eqNrmCd.setJSON(rs.responseJSON.GAUCE);
    // ds_eqNrmCd.sort("code", 0);
  }
  ;
  if (scwin.lobranCd.substring(0, 2) == "6A") {
    //하역작업계획불러오기 
    ds_wrkDtSetting_search.set("grpCd", "OP312");
    var rs = await $c.sbm.execute($p, sbm_wrkDtSetting);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      ds_wrkDtSetting.setJSON(rs.responseJSON.GAUCE);
      // ds_eqNrmCd.sort("code", 0);
    }
    ;
  } else {
    ica_wrkDt.setValue(scwin.vPrevDate);
  }
  $c.gus.cfDisableObjects($p, [btn_no1, btn_no2, btn_no3, btn_no4
  // , btn_no16, btn_no17
  , btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no14, btn_no15]);
  $c.gus.cfDisableObjects($p, [btn_main1, btn_main2]);

  // printChk 컬럼없음.
  // if (scwin.lobranCd.substring(0,2) == "6A"){
  // 	gr_workIndict.setColumnVisible("printChk", true);    	   
  // } else {    
  //     gr_workIndict.setColumnVisible("printChk", false);
  // }

  ica_wrkStDt.setValue(scwin.vCurDate); // 입항예정일자 from		
  ica_wrkEndDt.setValue(scwin.vNextDate); // 입항예정일자 to	

  acb_shift1.setValue("N");
  acb_shift2.setValue("D");
  acb_shiftClsCd.setValue("D");
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();

  // $p.setTimeout(function() {

  //     acb_lobranCd.setValue("6AA");
  //     ica_wrkStDt.setValue("20060417");  	
  //     ica_wrkEndDt.setValue("20060418"); 

  // }, {"delay":150});
};

//-------------------------------------------------------------------------
// 조회 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [ica_wrkStDt, ica_wrkEndDt, acb_lobranCd]))) {
    return;
  }
  $c.sbm.execute($p, sbm_search);
  scwin.chk_input = "F";
  // scwin.ds_wrkDtSetting_onFilter();
};

//-------------------------------------------------------------------------
// 조회 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_RetrievePlan = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [ica_wrkStDt, ica_wrkEndDt]))) {
    return;
  }
  ds_searchPlan.set("wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
  $c.sbm.execute($p, sbm_searchManPlan); // submit(); 과 동일
  $c.sbm.execute($p, sbm_searchEqPlan); // submit(); 과 동일
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_mainSave = async function () {
  var ds_workIndict_modifyRowCnt = ds_workIndict.getModifiedIndex().length;
  var ds_manPlan_modifyRowCnt = ds_manPlan.getModifiedIndex().length;
  var ds_eqPlan_modifyRowCnt = ds_eqPlan.getModifiedIndex().length;
  if (ds_workIndict_modifyRowCnt > 0 || ds_manPlan_modifyRowCnt > 0 || ds_eqPlan_modifyRowCnt > 0) {
    if (ds_workIndict_modifyRowCnt > 0) {
      if (!(await $c.gus.cfValidate($p, [gr_workIndict], null, true))) return;
      var wrkDt = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt");
      var stHh = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkStHh");
      var endHh = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkEndHh");
      var shift = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "shiftClsCd");
      if (stHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        // gr_workIndict.SetColumn("wrkStHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh", true);
        return false;
      }
      if (endHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        // gr_workIndict.SetColumn("wrkEndHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh", true);
        return false;
      }
      if (stHh.substr(0, 2) > "23") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]); // "@은(는) 시가 잘못되었습니다."
        // gr_workIndict.SetColumn("wrkStHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh", true);
        return;
      }
      if (stHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        // gr_workIndict.SetColumn("wrkStHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh", true);
        return;
      }
      if (endHh.substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 시가 잘못되었습니다."
        // gr_workIndict.SetColumn("wrkEndHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh", true);
        return;
      }
      if (endHh.substr(0, 2) == "00" && endHh.substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        // gr_workIndict.SetColumn("wrkEndHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh", true);
        return;
      }
      if (endHh.substr(0, 2) == "24" && endHh.substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        // gr_workIndict.SetColumn("wrkEndHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh", true);
        return;
      }
      if (endHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        // gr_workIndict.SetColumn("wrkEndHh");
        // gr_workIndict.focus();
        gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh", true);
        return;
      }
      if (shift == "M") {
        if (stHh > endHh && endHh > '0700') {
          await $c.gus.cfAlertMsg($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
          // gr_workIndict.SetColumn("wrkEndHh");
          // gr_workIndict.focus();
          gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkEndHh", true);
          return;
        }
      } else if (shift == "D") {
        if (!(await $c.gus.cfIsAfterDate($p, stHh, endHh))) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_058); // 시작시간이 종료시간 이전이어야 합니다.
          // gr_workIndict.SetColumn("wrkStHh");
          // gr_workIndict.focus();
          gr_workIndict.setFocusedCell(ds_workIndict.getRowPosition(), "wrkStHh", true);
          return;
        }
      }
    }
    if (ds_manPlan_modifyRowCnt > 0) {
      if (!(await $c.gus.cfValidate($p, [gr_manPlan], null, true))) return;
      var chk = 0;
      for (var i = 0; i < ds_manPlan.getRowCount(); i++) {
        if (ds_manPlan.getCellData(i, "cfmanYn") == 1) {
          chk++;
        }
      }
      if (chk > 1) {
        await $c.win.alert($p, "Chief 포맨 여부는 한명만 선택할 수 있습니다.");
        return false;
      }
    }
    if (ds_eqPlan_modifyRowCnt > 0) {
      if (!(await $c.gus.cfValidate($p, [gr_eqPlan], null, true))) return;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선작업계획등록"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 입력 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_mainInput = function () {
  scwin.chk_input = "T";
  $c.gus.cfEnableObjects($p, [btn_no1, btn_no2
  // , btn_no16, btn_no17
  , btn_no3, btn_no4, btn_main2]);
  $c.gus.cfDisableObjects($p, [btn_main1]);

  // ds_workIndict.setRowPosition(0);
  // gr_workIndict.setFocusedCell(0, 0);
  if (ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "completeProcYn") == 1) {
    $c.gus.cfDisableObjects($p, [btn_no2
    // , btn_no16, btn_no17
    , btn_no3]);

    // gr_workIndict.Editable = true;
    // //gr_workIndict.volPlan.Editable = false;
    // gr_manPlan.Editable = false;
    // gr_eqPlan.Editable = false;
    gr_workIndict.setReadOnly("grid", false);
    gr_manPlan.setReadOnly("grid", true);
    gr_eqPlan.setReadOnly("grid", true);
  } else {
    $c.gus.cfEnableObjects($p, [btn_no1, btn_no2
    // , btn_no16, btn_no17
    , btn_no3, btn_no4, btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no14, btn_no15]);
    // gr_workIndict.Editable = true;
    // //gr_workIndict.volPlan.Editable = true;
    // gr_manPlan.Editable = true;
    // gr_eqPlan.Editable = true;
    gr_workIndict.setReadOnly("grid", false);
    gr_manPlan.setReadOnly("grid", false);
    gr_eqPlan.setReadOnly("grid", false);
  }

  ////// 입력 클릭시 연장,조출 readonly 해제 (간헐적으로 ASIS에서 안풀림)
  gr_workIndict.setColumnReadOnly('shiftClsCd', false);
  gr_workIndict.setColumnReadOnly('wrkStHh', false);
  gr_workIndict.setColumnReadOnly('wrkEndHh', false);
  gr_workIndict.setColumnReadOnly('extdYn', false);
  gr_workIndict.setColumnReadOnly('ealyAtdYn', false);
  gr_workIndict.setColumnReadOnly('rmk', false);
  gr_workIndict.setColumnReadOnly('rmkCd', false);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      var wrkPlGbCd = "1"; //CY,장치장창고

      var lodeptCd = scwin.lobranCd;
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPl.setSelectId('retrieveWrkPlInfo');
      udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장
      break;
  }
};
scwin.udc_wrkPl_callBackFunc = function (rtnList) {
  //                               작업장코드   작업장명
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_AddRow = async function (grid) {
  switch (grid) {
    case '1':
      var chk = 0;
      for (var i = 0; i < ds_workIndict.getRowCount(); i++) {
        if (ds_workIndict.getRowStatus(i) == "C") {
          chk++;
        }
      }
      var rowIndex = ds_workIndict.insertRow();
      ds_workIndict.setRowPosition(rowIndex);
      gr_workIndict.setFocusedCell(rowIndex, 0);
      ds_manPlan.removeAll();
      ds_eqPlan.removeAll();
      ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkDt", ica_wrkStDt.getValue());
      ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "shiftClsCd", "N");
      ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkStHh", "1900");
      ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkEndHh", "0400");
      ds_workIndict.setRowPosition(rowIndex);
      gr_workIndict.setFocusedCell(rowIndex, 0);
      break;
    case '3':
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "인원 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      var rowIndex = ds_manPlan.insertRow();
      ds_manPlan.setRowPosition(rowIndex);
      ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      gr_manPlan.setColumnReadOnly("staffNo", false);
      gr_manPlan.setColumnReadOnly("staffNm", false);
      break;
    case '4':
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      var rowIndex = ds_eqPlan.insertRow();
      ds_eqPlan.setRowPosition(rowIndex);
      ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "cnt", 0);
      break;
    case '5':
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }

      //var eqLobran = lobranCd;
      var eqLobran = acb_lobranCd.getValue();
      ds_eqCondition.set("lobranCd", eqLobran);
      ds_eqCondition.set("cwGbn", "W");
      var rs = await $c.sbm.execute($p, sbm_searchEqList);
      if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
        if (ds_eqPlan3.getRowCount() > 0) {
          for (var i = 0; i < ds_eqPlan3.getRowCount(); i++) {
            var rowIndex = ds_eqPlan.insertRow();
            ds_eqPlan.setRowPosition(rowIndex);

            // ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkIndictNo", ds.getCellData(ds.getRowPosition(), "wrkIndictNo"));
            ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
            ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkStpCd", ds_eqPlan3.getCellData(i, "wrkStpCd"));
            ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "posnClsCd", ds_eqPlan3.getCellData(i, "posnClsCd"));
            ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqKndCd", ds_eqPlan3.getCellData(i, "eqKndCd"));
            ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqNrmCd", ds_eqPlan3.getCellData(i, "eqNrmCd"));
          }
        } else {
          await $c.win.alert($p, "점소코드 : [" + eqLobran + "]에 해당하는 중기리스트가 등록되지 않았습니다.");
          return false;
        }
      }
      break;
    case '6':
      var row = ds_eqPlan.getRowPosition();
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "중기 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      if (ds_eqPlan.getRowCount() < 1) {
        await $c.win.alert($p, "행복사 할 중기계획이 없습니다");
        return false;
      } else {
        var rowIndex = ds_eqPlan.insertRow();
        ds_eqPlan.setRowPosition(rowIndex);
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkStpCd", ds_eqPlan.getCellData(row, "wrkStpCd"));
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "posnClsCd", ds_eqPlan.getCellData(row, "posnClsCd"));
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqKndCd", ds_eqPlan.getCellData(row, "eqKndCd"));
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqNrmCd", ds_eqPlan.getCellData(row, "eqNrmCd"));
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "cnt", 0);
      }
      break;
    case '7':
      var row = ds_workIndict.getRowPosition();
      if (ds_workIndict.getRowCount() == 0 || ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
        await $c.win.alert($p, "등록된 작업지시에 한하여 행복사를 할 수 있습니다.");
        return false;
      } else {
        var rowIndex = ds_workIndict.insertRow();
        ds_workIndict.setRowPosition(rowIndex);
        ds_manPlan.removeAll();
        ds_eqPlan.removeAll();
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkPlCd", ds_workIndict.getCellData(row, "wrkPlCd"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkPlNm", ds_workIndict.getCellData(row, "wrkPlNm"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkDt", ds_workIndict.getCellData(row, "wrkDt"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "shiftClsCd", ds_workIndict.getCellData(row, "shiftClsCd"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkStHh", ds_workIndict.getCellData(row, "wrkStHh"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "wrkEndHh", ds_workIndict.getCellData(row, "wrkEndHh"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "extdYn", ds_workIndict.getCellData(row, "extdYn"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "ealyAtdYn", ds_workIndict.getCellData(row, "ealyAtdYn"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "rmkCd", ds_workIndict.getCellData(row, "rmkCd"));
        ds_workIndict.setCellData(ds_workIndict.getRowPosition(), "rmk", ds_workIndict.getCellData(row, "rmk"));
        scwin.gr_workIndict_oncellclick(ds_workIndict.getRowPosition());
        scwin.gr_workIndict_onrowindexchange(ds_workIndict.getRowPosition());
      }
      break;
  }
};
scwin.f_deleteRow = function (Grid) {
  switch (Grid) {
    case '1':
      // ds_workIndict.DeleteMarked();
      if (ds_workIndict.getRowStatus(ds_workIndict.getRowPosition()) == "C") {
        ds_workIndict.removeRow(ds_workIndict.getRowPosition());
      } else {
        var rowPosition = ds_workIndict.getRowPosition();
        ds_workIndict.deleteRow(rowPosition);
        ds_workIndict.setRowPosition(rowPosition);
      }
      break;
    case '2':
      //ds_volPlan.DeleteMarked();		
      break;
    case '3':
      if (ds_manPlan.getCellData(0, "tableFlag") == 306) {
        if (ds_manPlan.getRowCount() == 1) {
          ds_manPlan.removeAll();
        } else {
          // var dataset = ds_manPlan.ExportData(2,ds_manPlan.getRowCount(),true);
          // ds_manPlan.removeAll();
          // ds_manPlan.ImportData(dataset);

          var jsonData = [];
          for (var i = 0; i < ds_manPlan.getRowCount(); i++) {
            if (i != 0) {
              jsonData.push(ds_manPlan.getAllJSON()[i]);
            }
          }
          ds_manPlan.removeAll();
          ds_manPlan.setJSON(jsonData);
        }
      } else {
        // ds_manPlan.DeleteMarked();
        if (ds_manPlan.getRowStatus(ds_manPlan.getRowPosition()) == "C") {
          ds_manPlan.removeRow(ds_manPlan.getRowPosition());
        } else {
          ds_manPlan.deleteRow(ds_manPlan.getRowPosition());
        }
      }
      break;
    case '4':
      // ds_eqPlan.DeleteMarked();	
      if (ds_eqPlan.getRowStatus(ds_eqPlan.getRowPosition()) == "C") {
        ds_eqPlan.removeRow(ds_eqPlan.getRowPosition());
      } else {
        ds_eqPlan.deleteRow(ds_eqPlan.getRowPosition());
      }
      break;
    case '5':
      for (var i = ds_workIndict.getRowCount() - 1; i >= 0; i--) {
        if (ds_workIndict.getCellData(i, "chk") == "T") {
          if (ds_workIndict.getRowStatus(i) == "C") {
            ds_workIndict.removeRow(i);
          } else {
            ds_workIndict.deleteRow(i);
            ds_workIndict.setRowPosition(i);
          }
        }
      }
      break;
  }
};
scwin.f_cancelRow = function (Grid) {
  switch (Grid) {
    case '1':
      for (var i = 0; i < ds_workIndict.getRowCount(); i++) {
        if (ds_workIndict.getRowStatus(i) == "D") {
          ds_workIndict.undoRow(i);
        }
      }
      break;
    case '2':
      var rowIndex = ds_workIndict.getRowPosition();
      if (ds_workIndict.getRowStatus(rowIndex) == "C") {
        ds_workIndict.removeRow(rowIndex);
      } else if (ds_workIndict.getRowStatus(rowIndex) == "D") {
        ds_workIndict.undoRow(rowIndex);
      }
      break;
    case '3':
      var rowIndex = ds_manPlan.getRowPosition();
      if (ds_manPlan.getRowStatus(rowIndex) == "C") {
        ds_manPlan.removeRow(rowIndex);
      } else if (ds_manPlan.getRowStatus(rowIndex) == "D") {
        ds_manPlan.undoRow(rowIndex);
      }
      break;
    case '4':
      var rowIndex = ds_eqPlan.getRowPosition();
      if (ds_eqPlan.getRowStatus(rowIndex) == "C") {
        ds_eqPlan.removeRow(rowIndex);
      } else if (ds_eqPlan.getRowStatus(rowIndex) == "D") {
        ds_eqPlan.undoRow(rowIndex);
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 주간 Shift 계획 불러오기 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_copyPlan = async function () {
  if (ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo") == "") {
    await $c.win.alert($p, "작업지시 생성 후 계획을 불러올 수 있습니다.");
    return false;
  }
  ds_copyCondition.set("wrkDt", ica_wrkDt.getValue());
  ds_copyCondition.set("wrkPlCd", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkPlCd"));
  ds_copyCondition.set("shiftClsCd", acb_shiftClsCd.getValue());
  var rs = await $c.sbm.execute($p, sbm_searchWrkIndictNo);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    if (ds_wrkIndictNo.getCellData(0, "wrkIndictNo") == "") {
      await $c.win.alert($p, "해당 일자와 쉬프트에 해당하는 작업계획이 없습니다.");
      return false;
    }

    // ds_searchPlan.ClearData();
    // ds_searchPlan.AddRow();
    ds_searchPlan.set("wrkIndictNo", ds_wrkIndictNo.getCellData(0, "wrkIndictNo"));
    $c.sbm.execute($p, sbm_searchManPlan2);
    $c.sbm.execute($p, sbm_searchEqPlan2);
  }
  ;
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // Title
  // argGrid.SetExcelTitle(0, "");
  // argGrid.SetExcelTitle(1,"value:" + argTitle + ";" // 표시할 타이틀
  //                       + "font-face:'돋움체';"      // 폰트
  //                       + "font-size:16pt;"         // 폰트 크기
  //                       + "font-color:black;"       // 폰트 색깔
  //                       + "bgcolor:#ffffff;"        // 배경 색깔
  //                       + "align:center;"           // 정렬
  //                       + "line-color:white;"       // 타이틀 부분 테두리선 색깔
  //                       + "line-width:0pt;"         // 타이틀 테두리선 굵기
  //                       + "skiprow:1;");            // 타이틀 다음 떼는 로우 수

  // 검색조건
  var vDay = "점소 | " + acb_lobranCd.getText(true) + " | " + "작업일자 | " + ica_wrkStDt.getValue() + " ~ " + ica_wrkEndDt.getValue();
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  // cfGridToExcel(argGrid, argTitle, argTitle+".xls", 4+8+16);

  var argGridTotalCol = 0;
  for (var i = 0; i < argGrid.getTotalCol(); i++) {
    if (argGrid.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: argTitle,
    textAlign: "center",
    fontSize: "16",
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: vDay,
    textAlign: "left"
    // , fontSize    : "12"
    ,

    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: argTitle + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: argTitle,
    type: "1",
    startRowIndex: 3
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

//-------------------------------------------------------------------------
// 그리드 팝업
//------------------------------------------------------------------------- 
scwin.f_openCommPopUpGrid = async function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건
  var pCode = "";
  var pName = "";
  var arrParam = new Array();
  var sWinCloseTF = pClose == null ? "T" : pClose;
  var wrkPlGbCd = "1"; //CY,장치장창고		
  var lodeptCd = scwin.lobranCd;
  var paramList = "," + lodeptCd + "," + wrkPlGbCd;
  switch (gubun) {
    case 1:
      //작업장 조회
      pCode = ds_workIndict.getCellData(row, "wrkPlCd");
      pName = "";
      udc_grdPopup.setSelectId('retrieveWrkPlInfo');
      udc_grdPopup.cfCommonPopUp(await function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_workIndict.setCellData(row, "wrkPlCd", rtnList[0]);
          ds_workIndict.setCellData(row, "wrkPlNm", rtnList[1]);
        } else {
          ds_workIndict.getCellData(row, "wrkPlCd", "");
          ds_workIndict.getCellData(row, "wrkPlNm", "");
        }
      }, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장									
      break;
    case 2:
      //작업장 조회
      pCode = "";
      pName = ds_workIndict.getCellData(row, "wrkPlNm");
      udc_grdPopup.setSelectId('retrieveWrkPlInfo');
      udc_grdPopup.cfCommonPopUp(await function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_workIndict.setCellData(row, "wrkPlCd", rtnList[0]);
          ds_workIndict.setCellData(row, "wrkPlNm", rtnList[1]);
        } else {
          ds_workIndict.setCellData(row, "wrkPlCd", "");
          ds_workIndict.setCellData(row, "wrkPlNm", "");
        }
      }, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장									
      break;
  }
};

//-------------------------------------------------------------------------
//사번조회팝업
//-------------------------------------------------------------------------
scwin.f_openCommCdPopUp = async function (argFlg) {
  // 선언부
  var rtnList = new Array();
  var pCode = "";
  var pName = "";
  var arrParam = new Array();
  // 조회 조건 담기
  if (argFlg == 1) {
    pCode = ds_manPlan.getCellData(ds_manPlan.getRowPosition(), "staffNo");
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "staffNm", "");
  } else {
    pName = ds_manPlan.getCellData(ds_manPlan.getRowPosition(), "staffNm");
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "staffNo", "");
  }
  arrParam[0] = pCode; //사번
  arrParam[1] = pName; //사원명
  arrParam[2] = scwin.lobranCd; //점소코드
  arrParam[3] = scwin.lobranNm; //점소명
  arrParam[4] = ''; //작업장코드
  arrParam[5] = '01'; //직종  (정규직)
  //arrParam[6] = '02,D' //상세직종코드 (하역직)
  arrParam[6] = ''; //상세직종코드 (하역직)
  arrParam[7] = ''; //직급
  arrParam[8] = ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkDt"); //작업일
  arrParam[9] = ''; //배치가능여부
  arrParam[10] = 'T';
  arrParam[11] = '1'; //직종
  //arrParam[12] = parent.document.all.lux_shiftClsCd.BindColVal; //직종

  // rtnList = window.showModalDialog("/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.jsp", arrParam, "dialogHeight:450px; dialogWidth:530px; resizable=no; help:no; status:no; center=true; "); 	
  let win_url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
  let opts = {
    id: "Pop",
    popupName: "인력검색",
    modal: true,
    type: "browserPopup",
    width: 840,
    height: 630,
    title: "인력검색"
  };
  var rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
  if (rtnList != null && rtnList[1] != undefined) {
    for (var i = 0; i < ds_manPlan.getRowCount(); i++) {
      if (rtnList[2] == ds_manPlan.getCellData(i, "staffNo")) {
        await $c.gus.cfAlertMsg($p, "중복하여 입력할 수 없습니다.");
        return;
      }
    }
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "staffNo", rtnList[2]); // 사번
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "staffNm", rtnList[3]); // 이름
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occpgrdCd", rtnList[4]); // 직급코드
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occpgrdNm", rtnList[5]); // 직급명
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occptypeCd", rtnList[8]); // 직종코드
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occptypeNm", rtnList[9]); // 직종명

    //(0)직종코드		
    //(1)직종명	        
    //(2)인원번호		
    //(3)인원명	                          
    //(4)직급		    
    //(5)직급명		    
    //(6)물류점소코드   
    //(7)물류점소명		
    //(8)상세직종코드	
    //(9)상세직종명		                  
    //(10)배치가능여부	
    //(11)본사계약직여부 
    //(12)연근여부		
  } else {
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "staffNo", ""); // 사번
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "staffNm", ""); // 이름
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occpgrdCd", ""); // 직급코드
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occpgrdNm", ""); // 직급명
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occptypeCd", ""); // 직종코드
    ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "occptypeNm", ""); // 직종명
  }
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    // if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
    // if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
    if (targetRow == null) targetRow = scwin.f_AddDataRow(targetDataset);
    // for (var i=0; i < sourceColumns.length; i++) {
    // 	if ($c.gus.cfIsNull(sourceColumns[i]) || $c.gus.cfIsNull(targetColumns[i])) continue;
    // 		targetDataset.NameString(targetRow,targetColumns[i]) = sourceDataset.NameString(sourceRow,sourceColumns[i]);
    // 	if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
    // }
    var rowData = sourceDataset.getAllJSON()[sourceRow];
    targetDataset.setRowJSON(targetRow, rowData, true);
    return targetRow;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[scwin.f_CopyDataRow]" + e);
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
// scwin.f_GetColumnNames = function (dataSet) {
// 	try {
// 		if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
// 		if (dataSet.CountColumn == 0) return null;
// 		var rtnArray = new Array(dataSet.CountColumn);
// 		for (var i=0; i < dataSet.CountColumn; i++) {
// 			rtnArray[i] = dataSet.ColumnID(i+1);
// 		}
// 		if (rtnArray.length == 0)
// 			return null
// 		else
// 			return rtnArray
// 	} catch (e) {
// 		await $c.gus.cfAlertMsg("[scwin.f_GetColumnNames] " + e.Description);
// 	}
// };

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_AddDataRow = function (dataSet) {
  var rowIndex = dataSet.insertRow();
  dataSet.setRowPosition(rowIndex);
  return dataSet.getRowPosition();
};

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------  
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_workIndict, '작업장작업지시');
};
scwin.btn_no15_onclick = function (e) {
  scwin.f_copyPlan();
};
scwin.f_AddRow1 = function (e) {
  scwin.f_AddRow('1');
};
scwin.f_AddRow3 = function (e) {
  scwin.f_AddRow('3');
};
scwin.f_AddRow4 = function (e) {
  scwin.f_AddRow('4');
};
scwin.f_deleteRow1 = function (e) {
  scwin.f_deleteRow('1');
};
scwin.f_deleteRow3 = function (e) {
  scwin.f_deleteRow('3');
};
scwin.f_deleteRow4 = function (e) {
  scwin.f_deleteRow('4');
};
scwin.f_AddRow7 = function (e) {
  scwin.f_AddRow('7');
};
scwin.f_deleteRow5 = function (e) {
  scwin.f_deleteRow('5');
};
scwin.f_cancelRow1 = function (e) {
  scwin.f_cancelRow('1');
};
scwin.f_cancelRow2 = function (e) {
  scwin.f_cancelRow('2');
};
scwin.f_cancelRow3 = function (e) {
  scwin.f_cancelRow('3');
};
scwin.f_cancelRow4 = function (e) {
  scwin.f_cancelRow('4');
};
scwin.excelDown2 = function () {
  scwin.f_gridToExcel(gr_manPlan, '인원계획');
};
scwin.excelDown3 = function () {
  scwin.f_gridToExcel(gr_eqPlan, '중기계획');
};
scwin.f_AddRow6 = function (e) {
  scwin.f_AddRow('6');
};
scwin.f_AddRow4 = function (e) {
  scwin.f_AddRow('4');
};
scwin.f_deleteRow4 = function (e) {
  scwin.f_deleteRow('4');
};
scwin.btn_main1_onclick = function (e) {
  scwin.f_mainInput();
};
scwin.btn_main2_onclick = function (e) {
  scwin.f_mainSave();
};
scwin.sbm_searchWrkIndictNo_submit = function (e) {
  ds_copyCondition.set("wrkDt", ica_wrkDt.getValue());
  ds_copyCondition.set("shiftClsCd", acb_shiftClsCd.getValue());
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
    scwin.f_Retrieve();
  }
};
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    var rowCnt = ds_workIndict.getRowCount();
    if (rowCnt > 0) {
      ds_workIndict.setRowPosition(0);
      gr_workIndict.setFocusedCell(0, 0);
      scwin.f_RetrievePlan();
    } else {
      //ds_volPlan.ClearData();
      ds_manPlan.removeAll();
      ds_eqPlan.removeAll();
    }
    txt_totalRows.setValue(rowCnt);
    $c.gus.cfDisableObjects($p, [btn_no1, btn_no2
    // , btn_no16, btn_no17
    , btn_no3, btn_no4, btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no14, btn_no15]);
    $c.gus.cfDisableObjects($p, [btn_main2]);
    $c.gus.cfEnableObjects($p, [btn_main1]);

    // gr_workIndict.Editable = false;
    // // gr_workIndict.volPlan.Editable = false;
    // gr_manPlan.Editable = false;
    // gr_eqPlan.Editable = false;

    gr_workIndict.setReadOnly("grid", true);
    gr_workIndict.setColumnReadOnly('shiftClsCd', true);
    gr_workIndict.setColumnReadOnly('wrkStHh', true);
    gr_workIndict.setColumnReadOnly('wrkEndHh', true);
    gr_workIndict.setColumnReadOnly('extdYn', true);
    gr_workIndict.setColumnReadOnly('ealyAtdYn', true);
    gr_workIndict.setColumnReadOnly('rmk', true);
    gr_workIndict.setColumnReadOnly('rmkCd', true);
    gr_manPlan.setReadOnly("grid", true);
    gr_eqPlan.setReadOnly("grid", true);
    scwin.chk_input = "F";
  }
};
scwin.gr_workIndict_oncellclick = function (Row, columnIndex, columnId) {
  // rowindexchange
  // if (ds_workIndict.getRowStatus(Row) != "C"){
  // 	gr_workIndict.setCellReadOnly(Row, "wrkDt", true);	
  // } else {
  // 	gr_workIndict.setCellReadOnly(Row, "wrkDt", false);	
  // }
  // scwin.f_RetrievePlan();
  // if (scwin.chk_input == "T"){
  // 	if (ds_workIndict.getCellData(Row, "completeProcYn") == "1"){
  //         // gr_workIndict.Editable = true;
  //         gr_workIndict.setReadOnly("grid", false);
  //         gr_workIndict.setColumnReadOnly("shiftClsCd", true);
  //         gr_workIndict.setColumnReadOnly("wrkStHh", true);
  //         gr_workIndict.setColumnReadOnly("wrkEndHh", true);
  //         gr_workIndict.setColumnReadOnly("extdYn", true);
  //         gr_workIndict.setColumnReadOnly("ealyAtdYn", true);
  //         gr_workIndict.setColumnReadOnly("rmk", false);
  //         gr_workIndict.setColumnReadOnly("rmkCd", false);
  // 	}else{
  //         gr_workIndict.setColumnReadOnly('shiftClsCd', false);
  //         gr_workIndict.setColumnReadOnly('wrkStHh', false);
  //         gr_workIndict.setColumnReadOnly('wrkEndHh', false);
  //         gr_workIndict.setColumnReadOnly('extdYn', false);
  //         gr_workIndict.setColumnReadOnly('ealyAtdYn', false);
  //         gr_workIndict.setColumnReadOnly('rmk', false);
  //         gr_workIndict.setColumnReadOnly('rmkCd', false);
  // 	}
  // }
};
scwin.sbm_searchManPlan_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_manPlan.getCellData(0, "tableFlag") == 306) {
      ds_manPlan.setCellData(0, "wrkStpCd", '004');
      // var dataset = ds_manPlan.ExportData(1,ds_manPlan.getRowCount(),true);
      // ds_manPlan.ClearData();
      // //if (parent.ds_main2.getCellData(1,"completeProcYn") == 0) {
      // 	ds_manPlan.ImportData(dataset);
      // //}
      var jsonData = [];
      for (var i = 0; i < ds_manPlan.getRowCount(); i++) {
        jsonData.push(ds_manPlan.getAllJSON()[i]);
      }
      ds_manPlan.removeAll();
      ds_manPlan.setJSON(jsonData);
    }
    var cnt = ds_manPlan.getRowCount();
    txt_totalRows2.setValue(cnt);
  }
};
scwin.sbm_searchEqPlan2_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // ds_eqPlan2
    var rowCnt = ds_eqPlan2.getRowCount();
    if (rowCnt > 0) {
      for (var i = 0; i < rowCnt; i++) {
        await scwin.f_CopyDataRow(ds_eqPlan2, ds_eqPlan, i);
        ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      }
    }
  }
};
scwin.sbm_searchManPlan2_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // ds_manPlan2
    var rowCnt = ds_manPlan2.getRowCount();
    if (rowCnt > 0) {
      for (var i = 0; i < rowCnt; i++) {
        await scwin.f_CopyDataRow(ds_manPlan2, ds_manPlan, i);
        ds_manPlan.setCellData(ds_manPlan.getRowPosition(), "wrkIndictNo", ds_workIndict.getCellData(ds_workIndict.getRowPosition(), "wrkIndictNo"));
      }
    }
  }
};
scwin.udc_wrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};
scwin.udc_wrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1);
};
scwin.gr_workIndict_oneditend = function (rowIndex, columnIndex, value) {
  var colid = gr_workIndict.getColumnID(columnIndex);
  var newData = value;
  var oldData = ds_workIndict.getCellData(rowIndex, colid);
  var pAutoClostTF = "F";
  scwin.gr_workIndict_edit_able = false;
  switch (colid) {
    case "wrkPlCd":
      if (newData != "" && newData != oldData) {
        scwin.gr_workIndict_edit_able = true;
      } else if (newData == "") {
        ds_workIndict.setCellData(rowIndex, "wrkPlCd", "");
        ds_workIndict.setCellData(rowIndex, "wrkPlNm", "");
      }
      break;
    case "wrkPlNm":
      if (newData != "" && newData != oldData) {
        scwin.gr_workIndict_edit_able = true;
      } else if (newData == "") {
        ds_workIndict.getCellData(rowIndex, "wrkPlCd", "");
        ds_workIndict.getCellData(rowIndex, "wrkPlNm", "");
      }
      break;
  }
};
scwin.gr_workIndict_onafteredit = function (row, columnIndex, value) {
  var colid = gr_workIndict.getColumnID(columnIndex);
  if (colid == "shiftClsCd") {
    if (ds_workIndict.getCellData(row, "shiftClsCd") == "D") {
      ds_workIndict.setCellData(row, "wrkStHh", "0800");
      ds_workIndict.setCellData(row, "wrkEndHh", "1700");
    } else if (ds_workIndict.getCellData(row, "shiftClsCd") == "N") {
      ds_workIndict.setCellData(row, "wrkStHh", "1900");
      ds_workIndict.setCellData(row, "wrkEndHh", "2200");
    } else if (ds_workIndict.getCellData(row, "shiftClsCd") == "M") {
      ds_workIndict.setCellData(row, "wrkStHh", "2200");
      ds_workIndict.setCellData(row, "wrkEndHh", "0700");
    }
  }

  // gr_workIndict event=OnExit(row,colid,olddata
  var pAutoClostTF = "F";
  switch (colid) {
    case "wrkPlCd":
      if (scwin.gr_workIndict_edit_able) {
        ds_workIndict.setCellData(row, "wrkPlNm", "");
        scwin.f_openCommPopUpGrid(1, row, pAutoClostTF);
      }
      break;
    case "wrkPlNm":
      if (scwin.gr_workIndict_edit_able) {
        ds_workIndict.setCellData(row, "wrkPlCd", "");
        scwin.f_openCommPopUpGrid(2, row, pAutoClostTF);
      }
      break;
  }
};
scwin.gr_eqPlan_onafteredit = function (rowIndex, columnIndex, value) {
  //차량종류변경시 규격 필터링
  var colid = gr_eqPlan.getColumnID(columnIndex);
  if (colid == "eqKndCd") {
    ds_eqPlan.setCellData(ds_eqPlan.getRowPosition(), "eqNrmCd", "");
    scwin.ds_eqNrmCd_onFilter();
  } else if (colid == "cnt") {
    if (ds_eqPlan.getCellData(rowIndex, "cnt") == 0) {
      ds_eqPlan.setCellData(rowIndex, "cnt", 0);
    }
  }
};
scwin.ds_eqNrmCd_onFilter = function (row) {
  // ds_eqNrmCd.clearFilter();
  // ds_eqNrmCd.removeColumnFilterAll();
  // var ft = ds_eqPlan.getCellData(ds_eqPlan.getRowPosition(), "eqKndCd");    
  // ds_eqNrmCd.setColumnFilter( {type:'row', colIndex:'upperCd', key: ft, condition:'and'});

  ldt_eqNrmCd.setCondition("filter", "upperCd==ref('ds_eqPlan.eqKndCd')");

  // if (ds_eqNrmCd.getCellData(row,"upperCd") == ft){    
  //     return true;
  // }else{
  //     return false;
  // }
};
scwin.gr_manPlan_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_manPlan.getColumnID(columnIndex);
  if (colid == "staffNo" && ds_manPlan.getCellData(rowIndex, colid) == "") {
    scwin.f_openCommCdPopUp(1);
  } else if (colid == "staffNm" && ds_manPlan.getCellData(rowIndex, colid) == "") {
    scwin.f_openCommCdPopUp(2);
  }
};
scwin.gr_manPlan_oneditend = function (row, columnIndex, value) {
  var colid = gr_manPlan.getColumnID(columnIndex);
  var newData = value;
  var oldData = ds_manPlan.getCellData(row, colid);
  scwin.f_openCommCdPopUp1 = false;
  scwin.f_openCommCdPopUp2 = false;
  if (colid == "staffNo" && newData != oldData && newData != "") {
    scwin.f_openCommCdPopUp1 = true;
  } else if (colid == "staffNm" && newData != oldData && newData != "") {
    scwin.f_openCommCdPopUp2 = true;
  }
};
scwin.gr_manPlan_onafteredit = function (row, columnIndex, value) {
  var colid = gr_manPlan.getColumnID(columnIndex);
  if (colid == "staffNo" && scwin.f_openCommCdPopUp1) {
    scwin.f_openCommCdPopUp(1);
  } else if (colid == "staffNm" && scwin.f_openCommCdPopUp2) {
    scwin.f_openCommCdPopUp(2);
  }
};
scwin.gr_workIndict_onrowindexchange = function (row, oldRow) {
  if (ds_workIndict.getRowStatus(row) != "C") {
    gr_workIndict.setCellReadOnly(row, "wrkDt", true);
  } else {
    gr_workIndict.setCellReadOnly(row, "wrkDt", false);
  }
  scwin.f_RetrievePlan();
  if (scwin.chk_input == "T") {
    if (ds_workIndict.getCellData(row, "completeProcYn") == 1) {
      $c.gus.cfDisableObjects($p, [btn_no2
      // , btn_no16, btn_no17
      , btn_no3, btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no14, btn_no15]);
      $c.gus.cfEnableObjects($p, [btn_no1]);
      // gr_workIndict.Editable = true;
      // gr_manPlan.Editable = false;
      // gr_eqPlan.Editable = false;
      gr_workIndict.setReadOnly("grid", false);
      gr_manPlan.setReadOnly("grid", true);
      gr_eqPlan.setReadOnly("grid", true);
      gr_workIndict.setColumnReadOnly("shiftClsCd", true);
      gr_workIndict.setColumnReadOnly("wrkStHh", true);
      gr_workIndict.setColumnReadOnly("wrkEndHh", true);
      gr_workIndict.setColumnReadOnly("extdYn", true);
      gr_workIndict.setColumnReadOnly("ealyAtdYn", true);
      gr_workIndict.setColumnReadOnly("rmk", false);
      gr_workIndict.setColumnReadOnly("rmkCd", false);
    } else {
      $c.gus.cfEnableObjects($p, [btn_no1, btn_no2
      // , btn_no16, btn_no17
      , btn_no3, btn_no7, btn_no8, btn_no9, btn_no10, btn_no11, btn_no12, btn_no14, btn_no15]);
      // gr_workIndict.Editable = true;
      // gr_manPlan.Editable = true;
      // gr_eqPlan.Editable = true;
      gr_workIndict.setReadOnly("grid", false);
      gr_manPlan.setReadOnly("grid", false);
      gr_eqPlan.setReadOnly("grid", false);
      gr_workIndict.setColumnReadOnly('shiftClsCd', false);
      gr_workIndict.setColumnReadOnly('wrkStHh', false);
      gr_workIndict.setColumnReadOnly('wrkEndHh', false);
      gr_workIndict.setColumnReadOnly('extdYn', false);
      gr_workIndict.setColumnReadOnly('ealyAtdYn', false);
      gr_workIndict.setColumnReadOnly('rmk', false);
      gr_workIndict.setColumnReadOnly('rmkCd', false);
    }
  }
};
scwin.gr_manPlan_oncellindexchange = function (Row, columnIndex, oldRow, oldColumnIndex) {
  if (ds_manPlan.getRowStatus(Row) != "C") {
    gr_manPlan.setCellReadOnly(Row, "staffNo", true);
    gr_manPlan.setCellReadOnly(Row, "staffNm", true);
  } else {
    gr_manPlan.setCellReadOnly(Row, "staffNo", false);
    gr_manPlan.setCellReadOnly(Row, "staffNm", false);
  }
};
scwin.gr_manPlan_oncolumnindexchange = function (columnIndex, oldColumnIndex) {};
scwin.gr_manPlan_oncellclick = function (Row, columnIndex, columnId) {
  if (ds_manPlan.getRowStatus(Row) != "C") {
    gr_manPlan.setCellReadOnly(Row, "staffNo", true);
    gr_manPlan.setCellReadOnly(Row, "staffNm", true);
  } else {
    gr_manPlan.setCellReadOnly(Row, "staffNo", false);
    gr_manPlan.setCellReadOnly(Row, "staffNm", false);
  }
};
scwin.gr_eqPlan_oncellindexchange = function (Row, columnIndex, oldRow, oldColumnIndex) {
  if (ds_eqPlan.getRowStatus(Row) != "C") {
    gr_eqPlan.setCellReadOnly(Row, 'wrkStpCd', true);
    gr_eqPlan.setCellReadOnly(Row, 'posnClsCd', true);
    gr_eqPlan.setCellReadOnly(Row, 'eqKndCd', true);
    gr_eqPlan.setCellReadOnly(Row, 'eqNrmCd', true);
  } else {
    gr_eqPlan.setCellReadOnly(Row, 'wrkStpCd', false);
    gr_eqPlan.setCellReadOnly(Row, 'posnClsCd', false);
    gr_eqPlan.setCellReadOnly(Row, 'eqKndCd', false);
    gr_eqPlan.setCellReadOnly(Row, 'eqNrmCd', false);
  }
};
scwin.gr_eqPlan_oncolumnindexchange = function (columnIndex, oldColumnIndex) {};
scwin.gr_eqPlan_oncellclick = function (Row, columnIndex, columnId) {
  if (ds_eqPlan.getRowStatus(Row) != "C") {
    gr_eqPlan.setCellReadOnly(Row, 'wrkStpCd', true);
    gr_eqPlan.setCellReadOnly(Row, 'posnClsCd', true);
    gr_eqPlan.setCellReadOnly(Row, 'eqKndCd', true);
    gr_eqPlan.setCellReadOnly(Row, 'eqNrmCd', true);
  } else {
    gr_eqPlan.setCellReadOnly(Row, 'wrkStpCd', false);
    gr_eqPlan.setCellReadOnly(Row, 'posnClsCd', false);
    gr_eqPlan.setCellReadOnly(Row, 'eqKndCd', false);
    gr_eqPlan.setCellReadOnly(Row, 'eqNrmCd', false);
  }
};
scwin.gr_workIndict_oncellindexchange = function (row, columnIndex, oldRow, oldColumnIndex) {
  if (!gr_workIndict.getReadOnly("grid")) {
    // gr_workIndict.Editable = true;		
    gr_workIndict.setReadOnly("grid", false);

    // switch (colid) {
    // 	case "wrkDt":
    // 		this.UrlImages = CALENDAR_BTN;
    // 		break;              
    // 	default :
    // 		this.UrlImages = SEARCH_BTN;
    // 		break;
    // }

    if (ds_workIndict.getRowStatus(row) != "C") {
      gr_workIndict.setCellReadOnly(row, "wrkDt", true);
    } else {
      gr_workIndict.setCellReadOnly(row, "wrkDt", false);
    }
  }
};
scwin.gr_workIndict_oncolumnindexchange = function (columnIndex, oldColumnIndex) {};
scwin.gr_workIndict_ontextimageclick = function (row, columnIndex) {
  var pAutoClostTF = "F";
  var colid = gr_workIndict.getColumnID(columnIndex);
  switch (colid) {
    // case "wrkDt":
    // 	cfOpenCalendar(gr_workIndict, row, colid);
    // 	break;
    case "wrkPlCd":
      scwin.f_openCommPopUpGrid(1, row, pAutoClostTF);
      break;
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(2, row, pAutoClostTF);
      break;
  }
};
scwin.ica_wrkStDt_onviewchange = function (info) {
  // for=ds_search event=onColumnChanged(row,colid)>
  // if (colid == 'wrkStDt') {

  var stDt = ica_wrkStDt.getValue();
  if (stDt != "" && stDt.length == 8) {
    var year = stDt.substr(0, 4);
    var month = stDt.substr(4, 2) - 1;
    var day = stDt.substr(6, 2);
    var date = new Date(year, month, day);
    var payDate = new Date(Date.parse(date) + 1000 * 60 * 60 * 24);
    var yyyy = payDate.getFullYear().toString();
    var mm = (payDate.getMonth() + 1).toString();
    if (mm < 10) {
      mm = "0" + mm;
    }
    var dd = payDate.getDate().toString();
    if (dd < 10) {
      dd = "0" + dd;
    }
    var strPayDate = yyyy + mm + dd;
    ica_wrkEndDt.setValue(strPayDate);
  }
  // }
};
scwin.sbm_searchEqPlan_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    var cnt = ds_eqPlan.getRowCount();
    txt_totalRows3.setValue(cnt);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.lobranCd',title:'점소',objType:'key'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_wrkStDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',title:'작업일자',ref:'data:ds_search.wrkStDt','ev:onviewchange':'scwin.ica_wrkStDt_onviewchange'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:80px;',id:'acb_shift1',class:'',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_wrkEndDt',class:'',calendarValueType:'yearMonthDate',title:'작업일자',objType:'data',ref:'data:ds_search.wrkEndDt',readOnly:'true'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:80px;',id:'acb_shift2',class:'',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',btnId:'btn_PopUp',validTitle:'작업장',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagCode:'1',UpperFlag:'1',refDataCollection:'ds_search',code:'wrkPlCd','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCodeEvent'}},{T:1,N:'w2:udc_comCode',A:{UpperFlag:'1',codeId:'',hideName:'Y',id:'udc_grdPopup',nameId:'',popupID:'',style:'display: none;',validTitle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업지시',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_workIndict',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workIndict',style:'',autoFit:'allColumn',id:'gr_workIndict',visibleRowNum:'8',class:'wq_gvw','ev:oncellclick':'scwin.gr_workIndict_oncellclick',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_workIndict_onafteredit','ev:onrowindexchange':'scwin.gr_workIndict_onrowindexchange','ev:oncolumnindexchange':'scwin.gr_workIndict_oncolumnindexchange','ev:ontextimageclick':'scwin.gr_workIndict_ontextimageclick','ev:oneditend':'scwin.gr_workIndict_oneditend','ev:oncellindexchange':'scwin.gr_workIndict_oncellindexchange',dataName:'근무시간',validFeatures:'ignoreStatus=no',validExp:'wrkDt:작업일자:yes:date=YYYYMMDD&length=8,shiftClsCd:Shift:yes,wrkStHh:시작시간:yes:length=4,wrkEndHh:종료시간:yes:length=4,wrkPlCd:작업장:yes,wrkPlNm:작업장:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other',value:' '}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'작업장',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'작업장명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'작업일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'Shift',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'종료',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'연장',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'조출',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'비고(화종)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'비고(인원)',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',width:'20',textAlign:'center',displayMode:'label',inputType:'checkbox',style:'',value:'',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',width:'100',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',width:'70',textAlign:'center',displayMode:'label',inputType:'textImage',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',width:'100',textAlign:'left',displayMode:'label',inputType:'textImage',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',width:'80',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',displayFormat:'yyyy/MM/dd',mandatory:'true',dataType:'date'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',width:'55',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:'',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작',width:'55',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'##:##',mandatory:'true',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료',width:'55',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'##:##',mandatory:'true',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{id:'extdYn',name:'연장',width:'50',textAlign:'center',displayMode:'label',inputType:'checkbox',style:'',value:'',trueValue:'1',falseValue:'0',valueType:'other',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'조출',width:'50',textAlign:'center',displayMode:'label',inputType:'checkbox',style:'',value:'',falseValue:'0',trueValue:'1',valueType:'other',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'실적',width:'50',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'select',style:'',value:'',allOption:'',chooseOption:'',ref:'',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{id:'rmkCd',name:'비고',width:'100',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',width:'100',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_wrkDt',class:'',calendarValueType:'yearMonthDate',title:'조회기간 시작일',mandatory:'true',ref:''}}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:80px;',id:'acb_shiftClsCd',class:'req',allOption:'',chooseOption:'',ref:'',title:'Shift',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'심야'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_no15',type:'button',class:'btn','ev:onclick':'scwin.btn_no15_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획 불러오기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowDelFunction:'scwin.f_deleteRow1',cancelFunction:'scwin.f_cancelRow2',id:'udc_btn_no123',rowAddFunction:'scwin.f_AddRow1',rowAddUserAuth:'C',rowDelUserAuth:'U',btnRowAddObj:'btn_no1',btnRowDelObj:'btn_no2',btnCancelObj:'btn_no3'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_no4',style:'',type:'button','ev:onclick':'scwin.f_AddRow7',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_no16',type:'button',class:'btn','ev:onclick':'scwin.f_deleteRow5',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_no17',type:'button',class:'btn','ev:onclick':'scwin.f_cancelRow1',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'인원계획',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',id:'udc_topGrdBtn2',gridDownUserAuth:'X',gridID:'gr_manPlan',gridDownFn:'scwin.excelDown2',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_manPlan',style:'',autoFit:'allColumn',id:'gr_manPlan',visibleRowNum:'4',class:'wq_gvw',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_manPlan_ontextimageclick','ev:oneditend':'scwin.gr_manPlan_oneditend','ev:onafteredit':'scwin.gr_manPlan_onafteredit','ev:oncolumnindexchange':'scwin.gr_manPlan_oncolumnindexchange','ev:oncellclick':'scwin.gr_manPlan_oncellclick','ev:oncellindexchange':'scwin.gr_manPlan_oncellindexchange',dataName:'인원계획',validExp:'staffNo:사번:yes:length=6,staffNm:이름:yes,wrkStpCd:작업단계:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'사번',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'이름',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'상세직종',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'상세직종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'Chief포맨 여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'table구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'비고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'비고',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',width:'100',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'60',textAlign:'center',displayMode:'label',inputType:'textImage',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',width:'60',textAlign:'center',displayMode:'label',inputType:'textImage',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',width:'70',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'상세직종',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'상세직종',width:'80',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',width:'70',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:'',mandatory:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'Chief',width:'70',textAlign:'center',displayMode:'label',inputType:'checkbox',style:'',value:'',trueValue:'1',falseValue:'0',valueType:'other',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'tableFlag',name:'table구분',width:'70',textAlign:'center',hidden:'true',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',width:'70',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rmk2',name:'비고',width:'70',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo_tot',name:'작업지시번호',width:'100',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNo_tot',name:'사번',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNm_tot',name:'이름',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occpgrdNm_tot',name:'직급',width:'70',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeCd_tot',name:'상세직종',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeNm_tot',name:'상세직종',width:'80',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wrkStpCd_tot',name:'작업단계',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'cfmanYn_tot',name:'Chief',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'tableFlag_tot',name:'table구분',width:'70',textAlign:'center',hidden:'true',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'expression',expression:'SUM("tableFlag")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rmk_tot',name:'비고',width:'70',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rmk2_tot',name:'비고',width:'70',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow3',rowDelFunction:'scwin.f_deleteRow3',cancelFunction:'scwin.f_cancelRow3',id:'udc_btn_no789',gridID:'gr_manPlan',btnRowAddObj:'btn_no7',btnRowDelObj:'btn_no8',btnCancelObj:'btn_no9',rowAddUserAuth:'C',rowDelUserAuth:'U'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'중기계획',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',id:'udc_topGrdBtn3',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_eqPlan',gridDownFn:'scwin.excelDown3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_eqPlan',style:'',autoFit:'allColumn',id:'gr_eqPlan',visibleRowNum:'4',class:'wq_gvw',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_eqPlan_onafteredit','ev:oncolumnindexchange':'scwin.gr_eqPlan_oncolumnindexchange','ev:oncellclick':'scwin.gr_eqPlan_oncellclick','ev:oncellindexchange':'scwin.gr_eqPlan_oncellindexchange',dataName:'중기계획',validExp:'wrkStpCd:작업단계:yes,posnClsCd:소유구분:yes,eqKndCd:중기종류:yes,eqNrmCd:필요규격:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'소유구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'중기종류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'필요규격',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'대수',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',width:'100',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',width:'80',textAlign:'left',displayMode:'label',inputType:'select',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',width:'80',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류',width:'80',textAlign:'left',displayMode:'label',inputType:'select',style:'',value:'',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'필요규격',width:'120',textAlign:'left',displayMode:'label',inputType:'select',style:'',value:'',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{id:'cnt',name:'대수',width:'60',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',excelCellType:'number',allowChar:'0-9',maxLength:'2'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo_tot',name:'작업지시번호',width:'100',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wrkStpCd_tot',name:'작업단계',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'posnClsCd_tot',name:'소유구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eqKndCd_tot',name:'중기종류',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eqNrmCd_tot',name:'필요규격',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'cnt_tot',name:'대수',width:'60',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'expression',expression:'SUM("cnt")',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_no14',style:'',type:'button','ev:onclick':'scwin.f_AddRow6',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow4',rowDelFunction:'scwin.f_deleteRow4',id:'udc_btn_no101112',gridID:'gr_eqPlan',rowDelUserAuth:'U',rowAddUserAuth:'C',btnCancelObj:'btn_no12',btnRowAddObj:'btn_no10',btnRowDelObj:'btn_no11',cancelFunction:'scwin.f_cancelRow4'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_main1',label:'저장',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_main1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_main2',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_main2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})