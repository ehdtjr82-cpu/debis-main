/*amd /ui/ds/op/stvwrk/op_210_01_04b.xml 154112 0fd8d5cf3ddb3ce9286f39d90910451b312f788fbbe2d9bda9b50bd9059247e7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name2',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name3',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'usblDt',name:'name4',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'name5',dataType:'text',length:'8'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name2',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'name3',dataType:'text',length:'12'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name4',dataType:'text',length:'12'}},{T:1,N:'w2:key',A:{id:'allChk',name:'name5',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_plan',saveRemovedData:'true','ev:ondataload':'scwin.ds_plan_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'holdKndCd',name:'홀드종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'holdCnt',name:'홀드수',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'vsslRmk',name:'제원',dataType:'text',length:'2000'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ataDt',name:'입항일',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'atdDt',name:'',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'선석',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'ioClsNm',name:'수출입구분',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'홀드별화물정보',dataType:'text',length:'2000'}},{T:1,N:'w2:column',A:{id:'holdRemain',name:'홀드별잔량',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'planInfo',name:'예정물량',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkGangCnt',name:'GANG',dataType:'number',length:'8'}},{T:1,N:'w2:column',A:{id:'transCnt',name:'운송',dataType:'number',length:'8'}},{T:1,N:'w2:column',A:{id:'eqInfo',name:'장비',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'staffInfo',name:'인력',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'작업시작일자',length:'6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'작업시작시간',length:'4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'작업종료일자',length:'6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'작업종료시간',length:'4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cfmanEmpNo',name:'치프포맨번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cfmanEmpNm',name:'치프포맨'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_required',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hveqInfo',name:'',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'manInfo',name:'',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'eqcntInfo',name:'',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'holdRemain',name:'',dataType:'text',length:'500'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq',saveRemovedData:'true','ev:ondataload':'scwin.ds_eq_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclShortCd',name:'단축번호',length:'6'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unusedEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclShortCd',name:'단축번호',length:'6'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq',saveRemovedData:'true','ev:ondataload':'scwin.ds_inputEq_ondataload','ev:oninsertrow':'scwin.ds_inputEq_oninsertrow','ev:onremoverow':'scwin.ds_inputEq_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'etWrkHh',name:'투입시간',dataType:'number',length:'2'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'인원1',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1nm',name:'인원1이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'인원2',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2nm',name:'인원2이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'인원3',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3nm',name:'인원3이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclShortCd',name:'단축번호'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq2',saveRemovedData:'true','ev:ondataload':'scwin.ds_inputEq2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'etWrkHh',name:'투입시간',dataType:'number',length:'2'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'인원1',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1nm',name:'인원1이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'인원2',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2nm',name:'인원2이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'인원3',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3nm',name:'인원3이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclShortCd',name:'단축번호'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_state',saveRemovedData:'true','ev:ondataload':'scwin.ds_state_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'stvWrkIndictNo',name:'작업지시번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'본선명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'holdInfo',name:'홀드정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'planInfo',name:'물량정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'remain',name:'잔량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkDt',name:'작업일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shiftClsNm',name:'시프트'}},{T:1,N:'w2:column',A:{dataType:'text',id:'columnName',name:'중기정보칼럼명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hveqInfo',name:'중기정보'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_state2',saveRemovedData:'true','ev:ondataload':'scwin.ds_state2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'stvWrkIndictNo',name:'작업지시번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'본선명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'holdInfo',name:'홀드정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'planInfo',name:'물량정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'remain',name:'잔량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkDt',name:'작업일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shiftClsNm',name:'시프트'}},{T:1,N:'w2:column',A:{dataType:'text',id:'allocStaff',name:'인원정보'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_otherEq',saveRemovedData:'true','ev:ondataload':'scwin.ds_otherEq_ondataload','ev:oninsertrow':'scwin.ds_otherEq_oninsertrow','ev:onremoverow':'scwin.ds_otherEq_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'assgnSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'reqHveqCnt',name:'대수',dataType:'number',length:'2'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'1000'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_otherEq2',saveRemovedData:'true','ev:ondataload':'scwin.ds_otherEq2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'assgnSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'reqHveqCnt',name:'대수',dataType:'number',length:'2'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'1000'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_regular',saveRemovedData:'true','ev:ondataload':'scwin.ds_regular_ondataload','ev:oninsertrow':'scwin.ds_regular_oninsertrow','ev:onremoverow':'scwin.ds_regular_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cfmanYn',name:'담당자'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fulltime',saveRemovedData:'true','ev:ondataload':'scwin.ds_fulltime_ondataload','ev:oninsertrow':'scwin.ds_fulltime_oninsertrow','ev:onremoverow':'scwin.ds_fulltime_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'이름',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_daily',saveRemovedData:'true','ev:ondataload':'scwin.ds_daily_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'인원수',dataType:'number',length:'3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'enable',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerCnt',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqKnd',saveRemovedData:'true',validateAllItemsetData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrm',saveRemovedData:'true',validateAllItemsetData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fman',saveRemovedData:'true','ev:ondataload':'scwin.ds_fman_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'seq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveWorkPlanList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retriveLobranCodeList',action:'/cm.zz.RetrieveComboCMD.do?sysCd=BerthNonUsableEBC&queryId=retriveLobranCodeList',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCodeCMD',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=ZZ208',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_eqNrmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveWorkPlanList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_retrieveWorkPlanList',target:'data:json,{"id":"co_ds_combo2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveWorkStepListCMD',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do?upperWrkStpCd=01&lvl=3&wrkPlanTrgtYn=1',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_wrkStpCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvArrangementPlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_plan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_plan","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.op.stvwrk.RetrieveStvRequiredResourceInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_required","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_required","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve2_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEq',action:'/ds.op.stvwrk.RetrieveOurCompanyEqListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_eq","key":"OUT_DS1"},{"action":"modified","id":"ds_unusedEq","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_eq","key":"OUT_DS1"},{"id":"ds_unusedEq","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveEq_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveInputEq',action:'/ds.op.stvwrk.RetrieveOurCompanyInputEqListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_inputEq","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_inputEq","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveInputEq2',action:'/ds.op.stvwrk.RetrieveOurCompanyInputEqListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_inputEq2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_inputEq2","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveState',action:'/ds.op.stvwrk.RetrieveStvArrangementStateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_state","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_state","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveState2',action:'/ds.op.stvwrk.RetrieveStvArrangementState2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_state2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_state2","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvEqArrangementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_inputEq","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOtherEq',action:'/ds.op.stvwrk.RetrieveOtherCompanyEqListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_otherEq","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_otherEq","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOtherEq2',action:'/ds.op.stvwrk.RetrieveOtherCompanyEqListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_otherEq2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_otherEq2","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMan',action:'/ds.op.stvwrk.RetrieveStvManpowerArrangementListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_regular","key":"OUT_DS1"},{"action":"modified","id":"ds_fulltime","key":"OUT_DS2"},{"action":"modified","id":"ds_daily","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_regular","key":"OUT_DS1"},{"id":"ds_fulltime","key":"OUT_DS2"},{"id":"ds_daily","key":"OUT_DS3"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveMan_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveOtherEq',action:'/ds.op.stvwrk.SaveStvOtherEqArrangementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_otherEq","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveOtherEq_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegularMan',action:'/ds.op.stvwrk.SaveStvManArrangementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_regular","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveRegularMan_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveFulltimeMan',action:'/ds.op.stvwrk.SaveStvManArrangementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_fulltime","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveFulltimeMan_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveDailyMan',action:'/ds.op.stvwrk.SaveDailyManInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_daily","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveDailyMan_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqKnd',action:'/ds.op.stvwrk.RetrieveStvArrangementOtherEqKndListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_eqKnd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqKnd","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqNrm',action:'/ds.op.stvwrk.RetrieveStvArrangementOtherEqNrmListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_eqNrm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqNrm","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFman',action:'/ds.op.stvwrk.RetrieveStvWrkIndictFmanInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"action":"modified","id":"ds_fman","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fman","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.curRow = 0;
scwin.lobranCd;
scwin.vCurDate;
scwin.vNextDate;
scwin.popupRtnRow = -1; //팝업 호출시 그리드 row
scwin.crsGrdInfo = null;
scwin.oldValue = null;

/**
 * event
 * @name onpageload
 * @description
 */
scwin.onpageload = function () {
  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd") ?? "";
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vNextDate = $c.date.addDate($p, scwin.vCurDate, 1);

  //중기 규격 콤보
  $c.sbm.execute($p, sbm_retrieveCodeCMD);

  //작업단계콤보 세팅
  $c.sbm.execute($p, sbm_retrieveWorkStepListCMD);
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_plan:shiftClsCd"
  }, {
    grpCd: "ZZ210",
    compID: "gr_eq:eqKndCd,gr_inputEq:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.crsGrdInfo = scwin.makeCrsGridInfo(gr_state);
};

/**
* event
* @name onUdcCompleted
* @description UDC 초기화 후 이벤트
*/
scwin.onUdcCompleted = async function () {
  await $c.sbm.execute($p, sbm_retriveLobranCodeList);
  scwin.f_SetDefaultData();
};

/**
 * method
 * @name makeCrsGridInfo
 * @description 크로스탭 표시하는 그리드의 정보 만들기
 */
scwin.makeCrsGridInfo = function (grdObj) {
  //그리드 정보
  let idList = grdObj.getColumnIdListMultiRow()[0];
  return idList.map(item => {
    const cellInfo = grdObj.getCellInfo(item);
    let etc = ['displayFormat="' + cellInfo.options.displayFormat + '"'];
    if (!grdObj.getColumnVisible(item)) {
      etc.push('hidden="true"');
    }
    if (grdObj.getColumnType(item) === "number" || grdObj.getColumnType(item) === "float") {
      etc.push('excelCellType="number"');
    }
    const col = grdObj.getColumnIndex(item);
    const headerId = grdObj.getHeaderID(col);
    return {
      "id": item,
      "dataType": cellInfo.options.dataType ?? "text",
      "width": cellInfo.options.width,
      "headerText": grdObj.getHeaderValue(headerId),
      "textAlign": cellInfo.options.textAlign,
      "etc": etc.join(" ")
    };
  });
};

/**
 * method
 * @name f_SetDefaultData
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  lc_lobranCd.setValue(scwin.lobranCd);
  ica_wrkDt.setValue(scwin.vCurDate);
  ica_wrkDt2.setValue(scwin.vNextDate);
  lc_shift1.setValue("N");
  lc_shift2.setValue("D");
};

/**
 * method
 * @name f_Retrieve
 * @description 배치계획 내역 및 자사장비 배치현황 조회
 */
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ica_wrkDt]))) {
    return;
  }
  await $c.sbm.execute($p, sbm_retrieve);
  await $c.sbm.execute($p, sbm_retrieveState);
  await $c.sbm.execute($p, sbm_retrieveState2);
  dma_condition.set("assgnLobranCd", lc_lobranCd.getValue());
  dma_condition.set("usblDt", ica_wrkDt.getValue());
  let e = await $c.sbm.execute($p, sbm_retrieveEqKnd);
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code != -1 && e.responseJSON?.OUT_DS1) {
    //asis의 dataset정의시 UseFilter를 true로 설정한 경우 데이터 조회시 조회한 데이터와 dataset에 들어가 있는 데이터의 순서가 변경되나 기준을 알 수 없어
    //asis와 tobe가 콤보에 표시되는 데이터 순서를 동일하게 맞출 수가 없어 tobe는 코드값 기준으로 정렬하기로 결졍됨
    e.responseJSON.OUT_DS1.sort((l, r) => {
      if (l.eqKndCd < r.eqKndCd) {
        return -1;
      } else if (l.eqKndCd > r.eqKndCd) {
        return 1;
      }
      return 0;
    });
    ds_eqKnd.setJSON(e.responseJSON.OUT_DS1);
  }
  e = await $c.sbm.execute($p, sbm_retrieveEqNrm);
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code != -1 && e.responseJSON?.OUT_DS1) {
    //asis의 dataset정의시 UseFilter를 true로 설정한 경우 데이터 조회시 조회한 데이터와 dataset에 들어가 있는 데이터의 순서가 변경되나 기준을 알 수 없어
    //asis와 tobe가 콤보에 표시되는 데이터 순서를 동일하게 맞출 수가 없어 tobe는 코드값 기준으로 정렬하기로 결졍됨
    e.responseJSON.OUT_DS1.sort((l, r) => {
      if (l.eqNrmCd < r.eqNrmCd) {
        return -1;
      } else if (l.eqNrmCd > r.eqNrmCd) {
        return 1;
      }
      return 0;
    });
    ds_eqNrm.setJSON(e.responseJSON.OUT_DS1);
  }
};

/**
 * method
 * @name f_Retrieve2
 * @description 소요 요청내역 조회
 */
scwin.f_Retrieve2 = function () {
  let row = gr_plan.getFocusedRowIndex();
  dma_condition2.set("stvWrkIndictNo", ds_plan.getCellData(row, "stvWrkIndictNo"));
  $c.sbm.execute($p, sbm_retrieve2);
  $c.sbm.execute($p, sbm_retrieveInputEq);
  $c.sbm.execute($p, sbm_retrieveOtherEq);
};

/**
 * method
 * @name f_Retrieve3
 * @description 자사장비 및 타사장비 내역 조회
 */
scwin.f_Retrieve3 = function () {
  let row = gr_plan.getFocusedRowIndex();
  dma_condition2.set("stvWrkIndictNo", ds_plan.getCellData(row, "stvWrkIndictNo"));
  $c.sbm.execute($p, sbm_retrieveMan);
};

/**
 * method
 * @name f_Save
 * @description 저장 버튼 클릭
 */
scwin.f_Save = async function () {
  scwin.curRow = gr_plan.getFocusedRowIndex();
  if (!ds_inputEq.getModifiedIndex().length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선계획수립대상"]); // @은(는) 변경된 사항이 없습니다
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_inputEq]))) {
    return;
  }
  for (let i = 0; i < ds_inputEq.getRowCount(); i++) {
    if (ds_inputEq.getCellData(i, "eqCd") == "") {
      continue;
    }
    if (ds_inputEq.getCellData(i, "wrkDt") == "") {
      await $c.win.alert($p, i + 1 + "번째 줄에서 작업일자는 필수입력 사항입니다.");
      gr_inputEq.setFocusedCell(i, "wrkDt", true);
      return;
    }
    if (ds_inputEq.getCellData(i, "wrkStpCd") == "") {
      await $c.win.alert($p, i + 1 + "번째 줄에서 작업단계는 필수입력 사항입니다.");
      gr_inputEq.setFocusedCell(i, "wrkStpCd", true);
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
};

/**
 * method
 * @name f_Save2
 * @description 인원 계획 저장
 */
scwin.f_Save2 = async function () {
  scwin.curRow = gr_plan.getFocusedRowIndex();
  if (!ds_otherEq.getModifiedIndex().length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["인원계획"]); // @은(는) 변경된 사항이 없습니다
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_otherEq]))) {
    return;
  }
  for (let i = 0; i < ds_otherEq.getRowCount(); i++) {
    if (ds_otherEq.getCellData(i, "clntNo") == "") {
      await $c.win.alert($p, i + 1 + "번째 줄에서 협력업체 코드는 필수입력 사항입니다.");
      gr_otherEq.setFocusedCell(i, "clntNo", true);
      return;
    }
    if (ds_otherEq.getCellData(i, "eqKndCd") == "") {
      await $c.win.alert($p, i + 1 + "번째 줄에서 장비종류는 필수입력 사항입니다.");
      gr_otherEq.setFocusedCell(i, "eqKndCd", true);
      return;
    }
    if (ds_otherEq.getCellData(i, "reqHveqCnt") == 0) {
      await $c.win.alert($p, i + 1 + "번째 줄에서 대수는 필수입력 사항입니다.");
      gr_otherEq.setFocusedCell(i, "reqHveqCnt", true);
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_saveOtherEq);
  }
};

/**
 * method
 * @name f_Save3
 * @description 정규직 인원 배치  저장
 */
scwin.f_Save3 = async function () {
  scwin.curRow = gr_plan.getFocusedRowIndex();
  if (!ds_regular.getModifiedIndex().length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["정규직"]); // @은(는) 변경된 사항이 없습니다
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_regular]))) {
    return;
  }
  let chk = 0;
  for (let i = 0; i < ds_regular.getRowCount(); i++) {
    if (ds_regular.getCellData(i, "cfmanYn") == true) {
      chk++;
    }
  }
  if (chk > 1) {
    await $c.win.alert($p, "한 작업에 정규직 담당자는 한 명만 등록할 수 있습니다.");
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_saveRegularMan);
  }
};

/**
 * method
 * @name f_Save4
 * @description 상용직  인원 배치  저장
 */
scwin.f_Save4 = async function () {
  scwin.curRow = gr_plan.getFocusedRowIndex();
  if (!ds_fulltime.getModifiedIndex().length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상용직"]); // @은(는) 변경된 사항이 없습니다
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_fulltime]))) {
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_saveFulltimeMan);
  }
};

/**
 * method
 * @name f_Save5
 * @description 일용직 인원 배치  저장
 */
scwin.f_Save5 = async function () {
  scwin.curRow = gr_plan.getFocusedRowIndex();
  ds_daily.setCellData(0, "dailymanCnt", txt_dailymanCnt.getValue());
  if (!ds_daily.getModifiedIndex().length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["일용직"]); // @은(는) 변경된 사항이 없습니다
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_saveDailyMan);
  }
};

/**
 * method
 * @name f_openPgm
 * @description 장비기준현황 팝업
 */
scwin.f_openPgm = async function (name) {
  //화면 삭제되어 동작안되도록 수정
  return;
  if (name == "stvArrangement") {
    let lobranCd = lc_lobranCd.getValue();
    let wrkDt = ica_wrkDt.getValue();
    let param = {
      "lobranCd": lobranCd,
      "wrkDt": wrkDt
    };
    let opts = {
      id: "op_210_01_04p_popup",
      popupName: "장비 및 인력배치 현황",
      modal: true,
      type: "browserPopup",
      //화면 오픈 타입 ("pageFramePopup", "browserPopup")
      width: 1050,
      height: 630
    };
    await $c.win.openPopup($p, "/ui/ds/op/stvwrk/op_210_01_04p.xml", opts, param);
  }
};

/**
 * method
 * @name f_Input
 * @description 저장 버튼 클릭
 */
scwin.f_Input = async function () {
  let row = gr_plan.getFocusedRowIndex();
  let rowObj = ds_plan.getRowJSON(row);
  if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
    await $c.win.alert($p, "자사 장비 배치 입력은 배치계획내역 조회 후 가능합니다.");
    return;
  }
  $c.sbm.execute($p, sbm_retrieveEq);
};

/**
 * method
 * @name f_AddRow
 * @description 행추가
 */
scwin.f_AddRow = async function (gubun) {
  let row = gr_plan.getFocusedRowIndex();
  let rowObj = ds_plan.getRowJSON(row);
  let rowData = null;
  let targetRow = -1;
  switch (gubun) {
    case 1:
      if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
        await $c.win.alert($p, "자사 장비 배치는 배치계획내역 조회 후 가능합니다.");
        return;
      }
      rowData = {
        "stvWrkIndictNo": rowObj.stvWrkIndictNo,
        "wrkDt": rowObj.wrkDt,
        "etWrkHh": "0"
      };
      targetRow = ds_inputEq.getRowCount();
      ds_inputEq.setRowJSON(targetRow, rowData, false);
      gr_inputEq.setFocusedCell(targetRow, gr_inputEq.getFocusedColumnID() ?? "wrkDt", false);
      break;
    case 2:
      if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
        await $c.win.alert($p, "타사 장비 배치는 배치계획내역 조회 후 가능합니다.");
        return;
      }
      rowData = {
        "stvWrkIndictNo": rowObj.stvWrkIndictNo,
        "reqHveqCnt": "0"
      };
      targetRow = ds_otherEq.getRowCount();
      ds_otherEq.setRowJSON(targetRow, rowData, false);
      gr_otherEq.setFocusedCell(targetRow, gr_otherEq.getFocusedColumnID() ?? "clntNo", false);
      break;
    case 3:
      if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
        await $c.win.alert($p, "정규직 작업 배치는 배치계획내역 조회 후 가능합니다.");
        return;
      }
      rowData = {
        "stvWrkIndictNo": rowObj.stvWrkIndictNo,
        "wrkStpCd": "004"
      };
      targetRow = ds_regular.getRowCount();
      ds_regular.setRowJSON(targetRow, rowData, false);
      gr_regular.setFocusedCell(targetRow, gr_regular.getFocusedColumnID() ?? "staffNo", false);
      break;
    case 4:
      if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
        await $c.win.alert($p, "상용직 작업 배치는 배치계획내역 조회 후 가능합니다.");
        return;
      }
      rowData = {
        "stvWrkIndictNo": rowObj.stvWrkIndictNo,
        "wrkStpCd": "004"
      };
      targetRow = ds_fulltime.getRowCount();
      ds_fulltime.setRowJSON(targetRow, rowData, false);
      gr_fulltime.setFocusedCell(targetRow, gr_fulltime.getFocusedColumnID() ?? "staffNo", false);
      break;
    case 6:
      if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
        await $c.win.alert($p, "치프포맨  작업 배치는 배치계획내역 조회 후 가능합니다.");
        return;
      }
      rowData = {
        "stvWrkIndictNo": rowObj.stvWrkIndictNo,
        "wrkStpCd": "004",
        "staffNo": rowObj.cfmanEmpNo,
        "staffNm": rowObj.cfmanEmpNm
      };
      targetRow = ds_regular.getRowCount();
      ds_regular.setRowJSON(targetRow, rowData, false);
      gr_regular.setFocusedCell(targetRow, gr_regular.getFocusedColumnID() ?? "staffNo", false);
      break;
    case 7:
      if (ds_plan.getRowCount() == 0 || rowObj.stvWrkIndictNo == "") {
        await $c.win.alert($p, "치프포맨  작업 배치는 배치계획내역 조회 후 가능합니다.");
        return;
      }
      dma_condition2.set("stvWrkIndictNo", rowObj.stvWrkIndictNo);
      $c.sbm.execute($p, sbm_retrieveFman);
      break;
  }
};

/**
 * method
 * @name f_gridToExcel
 * @description
 */
scwin.f_gridToExcel = function (argGrid, argTitle) {
  const options = {
    "fileName": argTitle + ".xlsx",
    "sheetName": argTitle,
    "startRowIndex": 2,
    "startColumnIndex": 0
  };
  // Title
  let vDay = `점소 : ${lc_lobranCd.getText(true)} : 입항예정일자 : ${ica_wrkDt.getValue()} ~ ${ica_wrkDt2.getValue()}`;
  let columns = argGrid.getColumnIdListMultiRow()[0];
  let colSpan = columns.reduce((sum, colid) => {
    sum += argGrid.getColumnVisible(colid) ? 1 : 0;
    return sum;
  }, 0);
  if (colSpan < 0) {
    colSpan = 1;
  }
  const infoArr = [{
    "rowIndex": 0,
    "colIndex": 0,
    "rowSpan": 1,
    "colSpan": colSpan,
    "text": vDay.replace(/:/g, '|').replace(/;/g, ''),
    "textAlign": "center",
    "drawBorder": "false"
  }];
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

/**
 * method
 * @name f_openCommonPopUp
 * @description 그리드 팝업
 */
scwin.f_openCommonPopUp = async function (gubun, row, pCode, pName, pClose) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면
  let pWhere; // 조회조건
  let arrParam = null;
  scwin.popupRtnRow = row; //조작에 따라 팝업 호출시 row와 현재 row가 달라질 수 있다.

  switch (gubun) {
    case 1:
      //정규직
      pWhere = lc_lobranCd.getValue();
      udc_regularMan.cfCommonPopUp(scwin.udc_regularMan_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //정규직
      pWhere = lc_lobranCd.getValue();
      rtnList = udc_regularMan.cfCommonPopUp(scwin.udc_regularMan_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //상용직
      pWhere = lc_lobranCd.getValue();
      udc_fulltimeMan.cfCommonPopUp(scwin.udc_fulltimeMan_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      //상용직
      pWhere = lc_lobranCd.getValue();
      udc_fulltimeMan.cfCommonPopUp(scwin.udc_fulltimeMan_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      pDate = ica_wrkDt.getValue(); // 작업일자

      arrParam = new Array();
      arrParam[0] = ""; //assgnLobranCd점소코드
      arrParam[1] = ""; //eqKndCd중기종류
      arrParam[2] = ""; //clntCd거래처코드
      arrParam[3] = pDate; //usblDt작업계획일자
      arrParam[4] = pCode; //eqNo
      arrParam[5] = ""; //eqNm
      arrParam[6] = "T"; //T,F구분
      arrParam[7] = "T"; //T,F구분

      let opts = {
        id: "op_101_01_12p_popup",
        popupName: "중기조회",
        modal: true,
        type: "browserPopup",
        //화면 오픈 타입 ("pageFramePopup", "browserPopup")
        width: 1050,
        height: 550
      };
      ds_inputEq.setCellData(row, "vehclShortCd", ""); //단축번호
      ds_inputEq.setCellData(row, "eqCd", ""); //중기코드
      ds_inputEq.setCellData(row, "vehclNo", ""); //차량FULL코드
      ds_inputEq.setCellData(row, "eqKndCd", ""); //중기종류코드
      ds_inputEq.setCellData(row, "eqNrmCd", ""); //중기규격코드
      ds_inputEq.setCellData(row, "drvStaffNo1", ""); //기사사번1
      ds_inputEq.setCellData(row, "drvStaffNo1nm", ""); //기사명1
      ds_inputEq.setCellData(row, "drvStaffNo2", ""); //기사사번2
      ds_inputEq.setCellData(row, "drvStaffNo2nm", ""); //기사명2
      ds_inputEq.setCellData(row, "drvStaffNo3", ""); //기사사번3
      ds_inputEq.setCellData(row, "drvStaffNo3nm", ""); //기사명3

      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml", opts, arrParam);
      if (rtnList != null && rtnList[1] != undefined) {
        ds_inputEq.setCellData(row, "vehclShortCd", rtnList[0]); //단축번호
        ds_inputEq.setCellData(row, "eqCd", rtnList[12]); //중기코드
        ds_inputEq.setCellData(row, "vehclNo", rtnList[1]); //차량FULL코드
        ds_inputEq.setCellData(row, "eqKndCd", rtnList[15]); //중기종류코드
        ds_inputEq.setCellData(row, "eqNrmCd", rtnList[11]); //중기규격코드
        ds_inputEq.setCellData(row, "drvStaffNo1", rtnList[16]); //기사사번1
        ds_inputEq.setCellData(row, "drvStaffNo1nm", rtnList[7]); //기사명1
        ds_inputEq.setCellData(row, "drvStaffNo2", rtnList[17]); //기사사번2
        ds_inputEq.setCellData(row, "drvStaffNo2nm", rtnList[8]); //기사명2
        ds_inputEq.setCellData(row, "drvStaffNo3", rtnList[18]); //기사사번3
        ds_inputEq.setCellData(row, "drvStaffNo3nm", rtnList[9]); //기사명3
      } else {
        ds_inputEq.setCellData(row, "vehclShortCd", ""); //단축번호
        ds_inputEq.setCellData(row, "eqCd", ""); //중기코드
        ds_inputEq.setCellData(row, "vehclNo", ""); //차량FULL코드
        ds_inputEq.setCellData(row, "eqKndCd", ""); //중기종류코드
        ds_inputEq.setCellData(row, "eqNrmCd", ""); //중기규격코드
        ds_inputEq.setCellData(row, "drvStaffNo1", ""); //기사사번1
        ds_inputEq.setCellData(row, "drvStaffNo1nm", ""); //기사명1
        ds_inputEq.setCellData(row, "drvStaffNo2", ""); //기사사번2
        ds_inputEq.setCellData(row, "drvStaffNo2nm", ""); //기사명2
        ds_inputEq.setCellData(row, "drvStaffNo3", ""); //기사사번3
        ds_inputEq.setCellData(row, "drvStaffNo3nm", ""); //기사명3
      }
      break;
    case 8:
      udc_heavyMachineryClntInfo.cfCommonPopUp(scwin.udc_heavyMachineryClntInfo_popup_callback, pCode, pName, pClose, null, null, null, null, null, 450, 500, null, null); // 중기협력업체
      break;
  }
};

/**
 * method
 * @name udc_regularMan_popup_callback
 * @description 정규직 조회 팝업 콜백
 */
scwin.udc_regularMan_popup_callback = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_regular.setCellData(scwin.popupRtnRow, "staffNo", rtnList[0]);
    ds_regular.setCellData(scwin.popupRtnRow, "staffNm", rtnList[1]);
    ds_regular.setCellData(scwin.popupRtnRow, "occpgrdCd", rtnList[2]);
    ds_regular.setCellData(scwin.popupRtnRow, "occpgrdNm", rtnList[3]);
  } else {
    ds_regular.setCellData(scwin.popupRtnRow, "staffNo", "");
    ds_regular.setCellData(scwin.popupRtnRow, "staffNm", "");
    ds_regular.setCellData(scwin.popupRtnRow, "occpgrdCd", "");
    ds_regular.setCellData(scwin.popupRtnRow, "occpgrdNm", "");
  }
};

/**
 * method
 * @name udc_fulltimeMan_popup_callback
 * @description 상용직 조회 팝업 콜백
 */
scwin.udc_fulltimeMan_popup_callback = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_fulltime.setCellData(scwin.popupRtnRow, "staffNo", rtnList[0]);
    ds_fulltime.setCellData(scwin.popupRtnRow, "staffNm", rtnList[1]);
    ds_fulltime.setCellData(scwin.popupRtnRow, "occpgrdCd", rtnList[2]);
    ds_fulltime.setCellData(scwin.popupRtnRow, "occpgrdNm", rtnList[3]);
  } else {
    ds_fulltime.setCellData(scwin.popupRtnRow, "staffNo", "");
    ds_fulltime.setCellData(scwin.popupRtnRow, "staffNm", "");
    ds_fulltime.setCellData(scwin.popupRtnRow, "occpgrdCd", "");
    ds_fulltime.setCellData(scwin.popupRtnRow, "occpgrdNm", "");
  }
};

/**
 * method
 * @name udc_heavyMachineryClntInfo_popup_callback
 * @description 중기협력업체 조회 팝업 콜백
 */
scwin.udc_heavyMachineryClntInfo_popup_callback = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_otherEq, scwin.popupRtnRow, "clntNo", "clntNm");
  scwin.ds_eqKnd_filter();
};

/**
 * method
 * @name f_openCommCdPopUp
 * @description 사번조회팝업
 */
scwin.f_openCommCdPopUp = async function (row, colid, pCode) {
  // 선언부
  let colidNm = "";
  if (colid == "drvStaffNo1") {
    colidNm = "drvStaffNo1nm";
  } else if (colid == "drvStaffNo2") {
    colidNm = "drvStaffNo2nm";
  } else if (colid == "drvStaffNo3") {
    colidNm = "drvStaffNo3nm";
  }
  let arrParam = new Array();
  arrParam[0] = pCode; //사번
  arrParam[1] = ds_inputEq.getCellData(row, colidNm); //사원명
  arrParam[2] = lc_lobranCd.getValue(); //점소코드
  arrParam[3] = lc_lobranCd.getText(true); //점소명
  arrParam[4] = ''; //작업장코드
  arrParam[5] = '00,E'; //직종  (전체)
  arrParam[6] = '01,D'; //상세직종코드 (중기기사)
  arrParam[7] = ''; //직급
  arrParam[8] = ica_wrkDt.getValue(); //작업일
  arrParam[9] = 'Y'; //배치가능여부
  arrParam[10] = 'T'; //WINDOW CLOSE 여부

  let opts = {
    id: "op_103_01_10p_popup",
    popupName: "인력검색",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 700,
    height: 550
  };
  ds_inputEq.setCellData(row, colid, ""); // 사번
  ds_inputEq.setCellData(row, colidNm, ""); // 이름
  let rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", opts, arrParam);
  if (rtnList != null && rtnList[1] != undefined) {
    ds_inputEq.setCellData(row, colid, rtnList[2]); // 사번
    ds_inputEq.setCellData(row, colidNm, rtnList[3]); // 이름
  } else {
    ds_inputEq.setCellData(row, colid, ""); // 사번
    ds_inputEq.setCellData(row, colidNm, ""); // 이름
  }
};

/**
 * method
 * @name f_InitObjects
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, grp_mainData);
  scwin.f_SetDefaultData();
};

/**
 * method
 * @name f_CopyDataRow
 * @description 데이터셋 Row 복사
 */
scwin.f_CopyDataRow = function (sourceDataset, targetDataset, sourceRow) {
  let rowObj = sourceDataset.getRowJSON(sourceRow);
  let targetRow = targetDataset.getRowCount();
  targetDataset.setRowJSON(targetRow, rowObj);
  return targetRow;
};

/**
 * method
 * @name f_RetrievePierCdCall
 * @description 부두 조회(점소 선택시 해당 점소의 부두만 조회)
 */
scwin.f_RetrievePierCdCall = function () {
  let row = gr_plan.getFocusedRowIndex();
  let rowObj = ds_plan.getRowJSON(row);
  dma_retrieveWorkPlanList.setJSON({
    "sysCd": "DailyStevedoringWorkIndicationEBC",
    "queryId": "retrieveWorkPlanListCombo",
    "param1": rowObj.cvsslMgntNo,
    "param2": rowObj.stvWrkIndictNo
  });
  $c.sbm.execute($p, sbm_retrieveWorkPlanList);
};

/**
 * method
 * @name f_ShiftRetrieve
 * @description Shift 계획 불러오기 버튼 클릭
 */
scwin.f_ShiftRetrieve = function () {
  dma_condition2.set("stvWrkIndictNo", lux_wrkIndictNo.getValue());
  $c.sbm.execute($p, sbm_retrieveInputEq2);
};

/**
 * method
 * @name f_ShiftRetrieve2
 * @description Shift 계획 불러오기 버튼 클릭
 */
scwin.f_ShiftRetrieve2 = function () {
  dma_condition2.set("stvWrkIndictNo", lux_wrkIndictNo2.getValue());
  $c.sbm.execute($p, sbm_retrieveOtherEq2);
};

/**
 * method
 * @name f_Print
 * @description
 */
scwin.f_Print = async function () {
  if (ica_wrkDt.getValue() == null || ica_wrkDt.getValue() == "") {
    await $c.win.alert($p, "장비소요현황 발행시 일자는 필수 입니다.");
    ica_wrkDt.focus();
    return;
  }

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  let data = {
    odiName: "op_210_01_01",
    reportName: "/ds/op/stvwrk/op_210_01_01.ozr",
    odiParam: {
      odiName: "op_210_01_01",
      "wrkDt": ica_wrkDt.getValue(),
      // ?? "",
      "lobranCd": lc_lobranCd.getValue() // ?? "",
    },
    viewerParam: {
      "useprogressbar": false,
      // 프로그레스바 쓸지 말지
      "mode": chb_previewCheck.getValue() == "1" ? "preview" : chb_printCheck.getValue() == "1" ? "print" : "export" //preview, print, export
    },
    formParam: {}
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: false,
    type: "browserPopup",
    width: 1000,
    height: 830,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

/**
 * method
 * @name refresh
 * @description
 */
scwin.refresh = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
  await scwin.f_Retrieve();
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
};

/**
 * event
 * @name sbm_save_submitdone
 * @description
 */
scwin.sbm_save_submitdone = async function (e) {
  await scwin.refresh(e);
};

/**
 * event
 * @name sbm_saveOtherEq_submitdone
 * @description
 */
scwin.sbm_saveOtherEq_submitdone = async function (e) {
  await scwin.refresh(e);
};

/**
 * event
 * @name sbm_saveRegularMan_submitdone
 * @description
 */
scwin.sbm_saveRegularMan_submitdone = async function (e) {
  await scwin.refresh(e);
};

/**
 * event
 * @name sbm_saveFulltimeMan_submitdone
 * @description
 */
scwin.sbm_saveFulltimeMan_submitdone = async function (e) {
  await scwin.refresh(e);
};

/**
 * event
 * @name sbm_saveDailyMan_submitdone
 * @description
 */
scwin.sbm_saveDailyMan_submitdone = async function (e) {
  await scwin.refresh(e);
};

/**
 * event
 * @name sbm_retrieve2_submitdone
 * @description
 */
scwin.sbm_retrieve2_submitdone = function (e) {
  if (ds_required.getRowCount()) {
    ds_required.setRowPosition(0);
  }
};

/**
 * event
 * @name sbm_retrieveEq_submitdone
 * @description
 */
scwin.sbm_retrieveEq_submitdone = function (e) {
  let row = gr_plan.getFocusedRowIndex();
  let rowObj = ds_plan.getRowJSON(row);
  let addData = [];
  for (let i = 0; i < 10; i++) {
    addData.push({
      "stvWrkIndictNo": rowObj.stvWrkIndictNo,
      "wrkDt": rowObj.wrkDt,
      "etWrkHh": "0"
    });
  }
  ds_inputEq.insertJSON(ds_inputEq.getRowCount(), addData);
  gr_inputEq.setFocusedCell(ds_inputEq.getRowCount() - 1, gr_inputEq.getFocusedColumnID() ?? "wrkDt", false);
};

/**
 * event
 * @name ds_plan_ondataload
 * @description
 */
scwin.ds_plan_ondataload = async function () {
  let rowCnt = ds_plan.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows.setValue(rowCnt);
  $c.util.setTimeout($p, () => {
    ds_plan.multisort({
      sortIndex: "cvsslMgntNo wrkDt",
      sortOrder: "-1 1"
    });
    gr_plan.setFocusedCell(scwin.curRow, gr_plan.getFocusedColumnID() ?? "berthNm", false);
  }, {
    delay: 50
  });
  if (rowCnt == 0) {
    $c.gus.cfDisableAllBtn($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableAllBtn($p);
    scwin.f_Retrieve2();
    scwin.f_Retrieve3();
    scwin.f_RetrievePierCdCall();
  }
};

/**
 * event
 * @name ds_eq_ondataload
 * @description
 */
scwin.ds_eq_ondataload = function () {
  let rowCnt = ds_eq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows2.setValue(rowCnt);
};

/**
 * event
 * @name ds_inputEq_ondataload
 * @description
 */
scwin.ds_inputEq_ondataload = function () {
  let rowCnt = ds_inputEq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows5.setValue(rowCnt);
  gr_inputEq.setFocusedCell(0, gr_inputEq.getFocusedColumnID() ?? "wrkDt", false);
};

/**
 * event
 * @name ds_inputEq_oninsertrow
 * @description
 */
scwin.ds_inputEq_oninsertrow = function (info) {
  let rowCnt = ds_inputEq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows5.setValue(rowCnt);
};

/**
 * event
 * @name ds_inputEq_onremoverow
 * @description
 */
scwin.ds_inputEq_onremoverow = function (info) {
  let rowCnt = ds_inputEq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows5.setValue(rowCnt);
};

/**
 * event
 * @name ds_otherEq_ondataload
 * @description
 */
scwin.ds_otherEq_ondataload = function () {
  let rowCnt = ds_otherEq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows7.setValue(rowCnt);
  gr_otherEq.setFocusedCell(0, gr_otherEq.getFocusedColumnID() ?? "clntNo", false);
};

/**
 * event
 * @name ds_otherEq_oninsertrow
 * @description
 */
scwin.ds_otherEq_oninsertrow = function (info) {
  let rowCnt = ds_otherEq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows7.setValue(rowCnt);
};

/**
 * event
 * @name ds_otherEq_onremoverow
 * @description
 */
scwin.ds_otherEq_onremoverow = function (info) {
  let rowCnt = ds_otherEq.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows7.setValue(rowCnt);
};

/**
 * event
 * @name ds_regular_ondataload
 * @description
 */
scwin.ds_regular_ondataload = function () {
  let rowCnt = ds_regular.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows8.setValue(rowCnt);
  gr_regular.setFocusedCell(0, gr_regular.getFocusedColumnID() ?? "staffNo", false);
};

/**
 * event
 * @name ds_regular_oninsertrow
 * @description
 */
scwin.ds_regular_oninsertrow = function (info) {
  let rowCnt = ds_regular.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows8.setValue(rowCnt);
};

/**
 * event
 * @name ds_regular_onremoverow
 * @description
 */
scwin.ds_regular_onremoverow = function (info) {
  let rowCnt = ds_regular.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows8.setValue(rowCnt);
};

/**
 * event
 * @name ds_fulltime_ondataload
 * @description
 */
scwin.ds_fulltime_ondataload = function () {
  let rowCnt = ds_fulltime.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows9.setValue(rowCnt);
  gr_fulltime.setFocusedCell(0, gr_fulltime.getFocusedColumnID() ?? "staffNo", false);
};

/**
 * event
 * @name ds_fulltime_oninsertrow
 * @description
 */
scwin.ds_fulltime_oninsertrow = function (info) {
  let rowCnt = ds_fulltime.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows9.setValue(rowCnt);
};

/**
 * event
 * @name ds_fulltime_onremoverow
 * @description
 */
scwin.ds_fulltime_onremoverow = function (info) {
  let rowCnt = ds_fulltime.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows9.setValue(rowCnt);
};

/**
 * event
 * @name ds_daily_ondataload
 * @description
 */
scwin.ds_daily_ondataload = function () {
  let dailymanCnt = ds_daily.getCellData(0, "dailymanCnt");
  txt_dailymanCnt.setValue(dailymanCnt);
};

/**
 * event
 * @name ds_state_ondataload
 * @description
 */
scwin.ds_state_ondataload = function () {
  //데이터 부터 정리
  const sortExpr = "-cvsslMgntNo+stvWrkIndictNo";
  const groupExpr = "stvWrkIndictNo:cvsslMgntNo:vsslNm:holdInfo:planInfo:remain:wrkDt:shiftClsNm,columnName,hveqInfo";
  const dltId = "ds_stateCrs";
  let info = scwin.createCrsDataList(dltId, sortExpr, groupExpr, ds_state, scwin.crsGrdInfo);
  //그리드 새로 설정
  scwin.setDynamicGrid(gr_state, info, dltId);
  scwin.setDynamicGrid(gr_state1, info, dltId);
  rowCnt = ds_stateCrs.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows6.setValue(rowCnt);
  tbx_totalRows6_2.setValue(rowCnt);
};

/**
 * event
 * @name ds_state2_ondataload
 * @description
 */
scwin.ds_state2_ondataload = function () {
  $c.util.setTimeout($p, () => {
    ds_state2.multisort({
      sortIndex: "cvsslMgntNo wrkDt",
      sortOrder: "-1 1"
    });
    gr_state2.setFocusedCell(0, gr_state2.getFocusedColumnID() ?? "cvsslMgntNo", false);
  }, {
    delay: 50
  });
  let rowCnt = ds_state2.getRowCount();
  // 총 조회건수 표시
  tbx_totalRows11.setValue(rowCnt);
};

/**
 * event
 * @name ds_inputEq2_ondataload
 * @description
 */
scwin.ds_inputEq2_ondataload = function () {
  let rowCnt = ds_inputEq2.getRowCount();
  if (rowCnt > 0) {
    let row = gr_plan.getFocusedRowIndex();
    let planInfo = ds_plan.getRowJSON(row);
    let targetRow = -1;
    for (let i = 0; i < rowCnt; i++) {
      targetRow = scwin.f_CopyDataRow(ds_inputEq2, ds_inputEq, i);
      ds_inputEq.setCellData(targetRow, "stvWrkIndictNo", planInfo.stvWrkIndictNo);
    }
    gr_inputEq.setFocusedCell(ds_inputEq.getRowCount() - 1, gr_inputEq.getFocusedColumnID() ?? "wrkDt", false);
  }
};

/**
 * event
 * @name ds_otherEq2_ondataload
 * @description
 */
scwin.ds_otherEq2_ondataload = function () {
  let rowCnt = ds_otherEq2.getRowCount();
  if (rowCnt > 0) {
    let row = gr_plan.getFocusedRowIndex();
    let planInfo = ds_plan.getRowJSON(row);
    let targetRow = -1;
    for (let i = 0; i < rowCnt; i++) {
      targetRow = scwin.f_CopyDataRow(ds_otherEq2, ds_otherEq, i);
      ds_otherEq.setCellData(targetRow, "stvWrkIndictNo", planInfo.stvWrkIndictNo);
    }
    gr_otherEq.setFocusedCell(ds_otherEq.getRowCount() - 1, gr_otherEq.getFocusedColumnID() ?? "clntNo", false);
  }
};

/**
 * event
 * @name ds_fman_ondataload
 * @description
 */
scwin.ds_fman_ondataload = function () {
  let rowCnt = ds_fman.getRowCount();
  if (rowCnt > 0) {
    let allData = ds_fman.getAllJSON();
    let row = gr_plan.getFocusedRowIndex();
    let planInfo = ds_plan.getRowJSON(row);
    let addData = allData.map(item => {
      return {
        "stvWrkIndictNo": planInfo.stvWrkIndictNo,
        "wrkStpCd": "004",
        "staffNo": item.empNo,
        "staffNm": item.empNm
      };
    });
    ds_regular.insertJSON(ds_regular.getRowCount(), addData);
    gr_regular.setFocusedCell(ds_regular.getRowCount() - 1, gr_regular.getFocusedColumnIndex() ?? 0, false);
  }
};

/**
 * method
 * @name createCrsDataList
 * @description
 */
scwin.createCrsDataList = function (targetDltId, sortExpr, groupExpr, srcDltObj, grdInfo) {
  let sortExprArr = sortExpr.match(/[\-\+]|\w+/g);
  let allData = srcDltObj.getAllJSON();
  if (sortExprArr.length > 1) {
    allData.sort((l, r) => {
      for (let idx = 0; idx < sortExprArr.length; idx += 2) {
        let colid = sortExprArr[idx + 1];
        if (!colid) {
          continue;
        }
        let lValue = l[colid];
        let rValue = r[colid];
        if (sortExprArr[idx] === "-") {
          if (lValue < rValue) {
            return 1;
          } else if (lValue > rValue) {
            return -1;
          }
        } else {
          if (lValue < rValue) {
            return -1;
          } else if (lValue > rValue) {
            return 1;
          }
        }
      }
      return 0;
    });
  }

  //데이타리스트 정보
  let dltInfo = [];
  for (let idx = 0; idx < srcDltObj.getTotalCol(); ++idx) {
    dltInfo.push(srcDltObj.getColumnID(idx));
  }
  let groupExprArr = groupExpr.split(",");
  let chkCols = groupExprArr[0].split(":");
  let crsData = [];
  let pivotInfoKey = "_" + groupExprArr[2] + "Arr";
  for (let item of allData) {
    let find = crsData.find(crsItem => {
      for (let colid of chkCols) {
        if (crsItem[colid] !== item[colid]) {
          return false;
        }
        return true;
      }
    });
    if (!find) {
      find = {};
      for (let colid of dltInfo) {
        find[colid] = item[colid] ?? "";
      }
      find[pivotInfoKey] = [];
      crsData.push(find);
    }
    find[pivotInfoKey].push({
      "headerText": item[groupExprArr[1]],
      "value": item[groupExprArr[2]]
    });
  }
  const key = groupExprArr[2] + "_";
  let max = [];
  let dataArr = [];
  for (let item of crsData) {
    let data = {};
    for (let colid of dltInfo) {
      data[colid] = item[colid] ?? "";
    }
    let pivotInfo = item[pivotInfoKey];
    if (max.length < pivotInfo.length) {
      max = pivotInfo;
    }
    for (let idx = 0; idx < pivotInfo.length; ++idx) {
      data[key + idx] = pivotInfo[idx].value;
    }
    dataArr.push(data);
  }
  let info = Array.from(grdInfo.filter(item => item.id !== key));
  let loop = grdInfo.find(item => item.id === key);
  for (let idx = 0; idx < max.length; ++idx) {
    info.push({
      id: key + idx,
      dataType: loop.dataType,
      width: loop.width,
      headerText: max[idx].headerText.substring(0, 20),
      textAlign: loop.textAlign
    });
  }
  if (!max.length) {
    info.push({
      id: key + "0",
      dataType: loop.dataType,
      width: loop.width,
      headerText: "",
      textAlign: loop.textAlign
    });
  }
  let columns = info.map(item => item.id);
  $c.data.createDataList($p, targetDltId, columns);
  ds_stateCrs.setJSON(dataArr, false);
  return info;
};

/**
 * method
 * @name setDynamicGrid
 * @description
 */
scwin.setDynamicGrid = function (grdObj, columns, dltId) {
  let gridHeader = columns.map(item => `<w2:column blockSelect="false" displayMode="label" style="" inputType="text" id="header_${item.id}" width="${item.width}" value="${item.headerText}"></w2:column>`);
  let gridBody = columns.map(item => `<w2:column blockSelect="false" displayMode="label" style="" inputType="text" id="${item.id}" width="${item.width}" dataType="${item.dataType}" textAlign="${item.textAlign}" ${item.etc ?? ""}></w2:column>`);
  let gridFooter = columns.map(item => `<w2:column blockSelect="false" displayMode="label" style="" inputType="text" id="footer_${item.id}" width="${item.width}"></w2:column>`);
  let gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" visibleRowNumFix="true" checkAllType="false" dataList="data:' + dltId + '" style="" id="' + grdObj.org_id + '" visibleRowNum="4" class="wq_gvw" editModeEvent="onclick" readOnly="true" columnMove="true" columnMoveWithFooter="true" fixedColumnNoMove="true" focusFlow="linear" readOnlyTabIgnore="true">' + '<w2:header id="header1" style=""><w2:row id="row1" style="">' + gridHeader.join("") + '</w2:row></w2:header>' + '<w2:gBody id="gBody1" style=""><w2:row id="row2" style="">' + gridBody.join("") + '</w2:row></w2:gBody>' + '<w2:footer id="footer1" style=""><w2:row id="row3" style="">' + gridFooter.join("") + '</w2:row></w2:footer>' + '</w2:gridView>';
  grdObj.setGridStyle(WebSquare.xml.parse(gridStr, true));
};

/**
 * method
 * @name ds_eqKnd_filter
 * @description
 */
scwin.ds_eqKnd_filter = function () {
  ds_eqKnd.clearFilter();
  let row = gr_otherEq.getFocusedRowIndex();
  let rowObj = ds_otherEq.getRowJSON(row);
  ds_eqKnd.setColumnFilter({
    type: 'row',
    colIndex: 'clntNo',
    key: rowObj.clntNo,
    condition: 'and',
    exactMatch: true
  });
};

/**
 * method
 * @name ds_eqNrm_filter
 * @description
 */
scwin.ds_eqNrm_filter = function () {
  ds_eqNrm.clearFilter();
  let row = gr_otherEq.getFocusedRowIndex();
  let rowObj = ds_otherEq.getRowJSON(row);
  ds_eqNrm.setColumnFilter({
    type: 'row',
    colIndex: 'clntNo',
    key: rowObj.clntNo,
    condition: 'and',
    exactMatch: true
  });
  ds_eqNrm.setColumnFilter({
    type: 'row',
    colIndex: 'eqKndCd',
    key: rowObj.eqKndCd,
    condition: 'and',
    exactMatch: true
  });
};

/**
 * event
 * @name gr_inputEq_ontextimageclick
 * @description
 */
scwin.gr_inputEq_ontextimageclick = async function (row, col) {
  let colid = gr_inputEq.getColumnID(col);
  let value = null;
  switch (colid) {
    case "vehclShortCd":
      value = ds_inputEq.getCellData(row, "vehclShortCd");
      await scwin.f_openCommonPopUp(7, row, value, "", 'T');
      break;
    case "drvStaffNo1":
    case "drvStaffNo2":
    case "drvStaffNo3":
      value = ds_inputEq.getCellData(row, colid);
      scwin.f_openCommCdPopUp(row, colid, value);
      break;
  }
};

/**
 * event
 * @name gr_inputEq_onbeforeedit
 * @description
 */
scwin.gr_inputEq_onbeforeedit = function (row, col, value) {
  let colid = gr_inputEq.getColumnID(col);
  switch (colid) {
    case "wrkStpCd":
      scwin.oldValue = value;
      break;
  }
};

/**
 * event
 * @name gr_inputEq_onafteredit
 * @description
 */
scwin.gr_inputEq_onafteredit = function (row, col, value) {
  let colid = gr_inputEq.getColumnID(col);
  switch (colid) {
    case "wrkStpCd":
      let matched = ds_wrkStpCd.getMatchedIndex(colid, value, true);
      if (!matched.length && value !== scwin.oldValue) {
        ds_inputEq.setCellData(row, colid, scwin.oldValue);
      }
      break;
  }
};

/**
 * event
 * @name gr_inputEq_onviewchange
 * @description
 */
scwin.gr_inputEq_onviewchange = async function (info) {
  const row = info.rowIndex;
  const value = info.newValue;
  const oldValue = info.oldValue;
  const colid = info.colId;
  switch (colid) {
    case "vehclShortCd":
      if (oldValue != value && value != "") {
        await scwin.f_openCommonPopUp(7, row, value, "", 'T');
      } else if (value == "") {
        ds_inputEq.setCellData(row, "vehclShortCd", ""); //중기코드
        ds_inputEq.setCellData(row, "vehclNo", ""); //차량FULL코드
        ds_inputEq.setCellData(row, "eqKndCd", ""); //중기종류코드
        ds_inputEq.setCellData(row, "eqNrmCd", ""); //중기규격코드
        ds_inputEq.setCellData(row, "drvStaffNo1", ""); //기사사번1
        ds_inputEq.setCellData(row, "drvStaffNo1nm", ""); //기사명1
        ds_inputEq.setCellData(row, "drvStaffNo2", ""); //기사사번2
        ds_inputEq.setCellData(row, "drvStaffNo2nm", ""); //기사명2
        ds_inputEq.setCellData(row, "drvStaffNo3", ""); //기사사번3
        ds_inputEq.setCellData(row, "drvStaffNo3nm", ""); //기사명3
      }
      break;
    case "drvStaffNo1":
      if (oldValue != value && value != "") {
        scwin.f_openCommCdPopUp(row, colid, value);
      } else if (value == "") {
        ds_inputEq.setCellData(row, "drvStaffNo1", "");
        ds_inputEq.setCellData(row, "drvStaffNo1nm", "");
      }
      break;
    case "drvStaffNo2":
      if (oldValue != value && value != "") {
        scwin.f_openCommCdPopUp(row, colid, value);
      } else if (value == "") {
        ds_inputEq.setCellData(row, "drvStaffNo2", "");
        ds_inputEq.setCellData(row, "drvStaffNo2nm", "");
      }
      break;
    case "drvStaffNo3":
      if (oldValue != value && value != "") {
        scwin.f_openCommCdPopUp(row, colid, value);
      } else if (value == "") {
        ds_inputEq.setCellData(row, "drvStaffNo3", "");
        ds_inputEq.setCellData(row, "drvStaffNo3nm", "");
      }
      break;
  }
};

/**
 * event
 * @name gr_otherEq_ontextimageclick
 * @description
 */
scwin.gr_otherEq_ontextimageclick = async function (row, col) {
  let colid = gr_otherEq.getColumnID(col);
  if (colid == "clntNm") {
    let value = ds_otherEq.getCellData(row, "clntNm");
    ds_otherEq.setCellData(row, "clntNo", "");
    ds_otherEq.setCellData(row, "clntNm", "");
    await scwin.f_openCommonPopUp(8, row, "", value, "F");
    //협력업체코드
  } else if (colid == "clntNo") {
    let value = ds_otherEq.getCellData(row, "clntNo");
    ds_otherEq.setCellData(row, "clntNo", "");
    ds_otherEq.setCellData(row, "clntNm", "");
    await scwin.f_openCommonPopUp(8, row, value, "", "F");
  }
};

/**
 * event
 * @name gr_otherEq_onviewchange
 * @description
 */
scwin.gr_otherEq_onviewchange = async function (info) {
  const row = info.rowIndex;
  const value = info.newValue;
  const oldValue = info.oldValue;
  const colid = info.colId;
  switch (colid) {
    case "eqKndCd":
      ds_otherEq.setCellData(row, "eqNrmCd", "");
      scwin.ds_eqNrm_filter();
      break;
    case "clntNm":
      if (oldValue != value && value != "") {
        ds_otherEq.setCellData(row, "clntNo", "");
        ds_otherEq.setCellData(row, "clntNm", "");
        await scwin.f_openCommonPopUp(8, row, "", value, "T");
      } else if (value == "") {
        ds_otherEq.setCellData(row, "clntNo", "");
        ds_otherEq.setCellData(row, "clntNm", "");
      }
      break;
    case "clntNo":
      if (oldValue != value && value != "") {
        ds_otherEq.setCellData(row, "clntNo", "");
        ds_otherEq.setCellData(row, "clntNm", "");
        await scwin.f_openCommonPopUp(8, row, value, "", "T");
      } else if (value == "") {
        ds_otherEq.setCellData(row, "clntNo", "");
        ds_otherEq.setCellData(row, "clntNm", "");
      }
      break;
  }
};

/**
 * event
 * @name gr_otherEq_oncellclick
 * @description
 */
scwin.gr_otherEq_oncellclick = function (row, col, columnId) {
  if (ds_otherEq.getRowStatus(row) == "C") {
    gr_otherEq.setColumnReadOnly("eqKndCd", false); //"Any"
    gr_otherEq.setColumnReadOnly("eqNrm", false); //"Any"
  } else {
    gr_otherEq.setColumnReadOnly("eqKndCd", true); //None
    gr_otherEq.setColumnReadOnly("eqNrm", true); //None
  }
};

/**
 * event
 * @name gr_otherEq_onbeforeedit
 * @description
 */
scwin.gr_otherEq_onbeforeedit = function (row, col, value) {
  let colid = gr_otherEq.getColumnID(col);
  switch (colid) {
    case "wrkStpCd":
      scwin.oldValue = value;
      break;
    case "eqKndCd":
      scwin.ds_eqKnd_filter();
      break;
    case "eqNrmCd":
      scwin.ds_eqNrm_filter();
      break;
  }
};

/**
 * event
 * @name gr_otherEq_onafteredit
 * @description
 */
scwin.gr_otherEq_onafteredit = function (row, col, value) {
  let colid = gr_otherEq.getColumnID(col);
  switch (colid) {
    case "wrkStpCd":
      let matched = ds_wrkStpCd.getMatchedIndex(colid, value, true);
      if (!matched.length && value !== scwin.oldValue) {
        ds_otherEq.setCellData(row, colid, scwin.oldValue);
      }
      break;
    case "eqKndCd":
      ds_eqKnd.clearFilter();
      break;
    case "eqNrmCd":
      ds_eqNrm.clearFilter();
      break;
    case "reqHveqCnt":
      if (value == "" || isNaN(value)) {
        ds_otherEq.setCellData(row, colid, "0");
      }
      break;
  }
};

/**
 * event
 * @name gr_regular_ontextimageclick
 * @description
 */
scwin.gr_regular_ontextimageclick = async function (row, col) {
  let colid = gr_regular.getColumnID(col);
  if (colid == "staffNo") {
    let value = ds_regular.getCellData(row, "staffNo");
    ds_regular.setCellData(row, "staffNo", "");
    ds_regular.setCellData(row, "staffNm", "");
    await scwin.f_openCommonPopUp(1, row, value, "", "F");
  } else if (colid == "staffNm") {
    let value = ds_regular.getCellData(row, "staffNm");
    ds_regular.setCellData(row, "staffNo", "");
    ds_regular.setCellData(row, "staffNm", "");
    await scwin.f_openCommonPopUp(2, row, "", value, "F");
  }
};

/**
 * event
 * @name gr_regular_onviewchange
 * @description
 */
scwin.gr_regular_onviewchange = async function (info) {
  const row = info.rowIndex;
  const value = info.newValue;
  const oldValue = info.oldValue;
  const colid = info.colId;
  switch (colid) {
    case "staffNo":
      if (oldValue != value && value != "") {
        ds_regular.setCellData(row, "staffNo", "");
        ds_regular.setCellData(row, "staffNm", "");
        await scwin.f_openCommonPopUp(1, row, value, "", "T");
      } else if (value == "") {
        ds_regular.setCellData(row, "staffNo", "");
        ds_regular.setCellData(row, "staffNm", "");
      }
      break;
    case "staffNm":
      if (oldValue != value && value != "") {
        ds_regular.setCellData(row, "staffNo", "");
        ds_regular.setCellData(row, "staffNm", "");
        await scwin.f_openCommonPopUp(2, row, "", value, "T");
      } else if (value == "") {
        ds_regular.setCellData(row, "staffNo", "");
        ds_regular.setCellData(row, "staffNm", "");
      }
      break;
  }
};

/**
 * event
 * @name gr_fulltime_ontextimageclick
 * @description
 */
scwin.gr_fulltime_ontextimageclick = async function (row, col) {
  let colid = gr_fulltime.getColumnID(col);
  if (colid == "staffNo") {
    let value = ds_fulltime.getCellData(row, "staffNo");
    ds_fulltime.setCellData(row, "staffNo", "");
    ds_fulltime.setCellData(row, "staffNm", "");
    await scwin.f_openCommonPopUp(3, row, value, "", "F");
  } else if (colid == "staffNm") {
    let value = ds_fulltime.getCellData(row, "staffNm");
    ds_fulltime.setCellData(row, "staffNo", "");
    ds_fulltime.setCellData(row, "staffNm", "");
    await scwin.f_openCommonPopUp(4, row, "", value, "F");
  }
};

/**
 * event
 * @name gr_fulltime_onviewchange
 * @description
 */
scwin.gr_fulltime_onviewchange = async function (info) {
  const row = info.rowIndex;
  const value = info.newValue;
  const oldValue = info.oldValue;
  const colid = info.colId;
  switch (colid) {
    case "staffNo":
      if (oldValue != value && value != "") {
        ds_fulltime.setCellData(row, "staffNo", "");
        ds_fulltime.setCellData(row, "staffNm", "");
        await scwin.f_openCommonPopUp(3, row, value, "", "T");
      } else if (value == "") {
        ds_fulltime.setCellData(row, "staffNo", "");
        ds_fulltime.setCellData(row, "staffNm", "");
      }
      break;
    case "staffNm":
      if (oldValue != value && value != "") {
        ds_fulltime.setCellData(row, "staffNo", "");
        ds_fulltime.setCellData(row, "staffNm", "");
        await scwin.f_openCommonPopUp(4, row, "", value, "T");
      } else if (value == "") {
        ds_fulltime.setCellData(row, "staffNo", "");
        ds_fulltime.setCellData(row, "staffNm", "");
      }
      break;
  }
};

/**
 * event
 * @name gr_plan_onrowindexchange
 * @description
 */
scwin.gr_plan_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
  scwin.f_RetrievePierCdCall();
};

/**
 * event
 * @name ica_wrkDt_onviewchange
 * @description
 */
scwin.ica_wrkDt_onviewchange = function (info) {
  let stDt = ica_wrkDt.getValue();
  if (stDt != "" && stDt.length == 8) {
    ica_wrkDt2.setValue($c.date.addDate($p, stDt, 1));
  }
};

/**
 * event
 * @name ica_wrkDt_onchange
 * @description
 */
scwin.ica_wrkDt_onchange = function () {
  dma_condition2.set("wrkDt", ica_wrkDt.getValue());
};

/**
 * event
 * @name btn_fieldClear_onclick
 * @description
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

/**
 * event
 * @name btn_retrieve_onclick
 * @description
 */
scwin.btn_retrieve_onclick = async function (e) {
  scwin.curRow = 0;
  await scwin.f_Retrieve();
};

/**
 * event
 * @name udc_top_gr_plan_exceldown
 * @description
 */
scwin.udc_top_gr_plan_exceldown = function () {
  scwin.f_gridToExcel(gr_plan, '배치계획내역');
};

/**
 * event
 * @name btn_1_onclick
 * @description
 */
scwin.btn_1_onclick = async function (e) {
  //화면 삭제되어 버튼 동작안되도록 수정
  //await scwin.f_openPgm('stvArrangement');
};

/**
 * event
 * @name btn_2_onclick
 * @description
 */
scwin.btn_2_onclick = async function (e) {
  //화면 삭제되어 버튼 동작안되도록 수정
  //await scwin.f_openPgm('SRPrint');
};

/**
 * event
 * @name btn_ozprint_onclick
 * @description
 */
scwin.btn_ozprint_onclick = async function (e) {
  await scwin.f_Print();
};

/**
 * event
 * @name button_no14_onclick
 * @description
 */
scwin.button_no14_onclick = function (e) {
  scwin.f_ShiftRetrieve();
};

/**
 * event
 * @name udc_bottom_gr_inputEq_addRow
 * @description
 */
scwin.udc_bottom_gr_inputEq_addRow = async function () {
  await scwin.f_AddRow(1);
};

/**
 * event
 * @name udc_bottom_gr_inputEq_delRow
 * @description
 */
scwin.udc_bottom_gr_inputEq_delRow = function () {
  scwin.deleteMarked(gr_inputEq, ds_inputEq);
};

/**
 * event
 * @name udc_bottom_gr_inputEq_cancel
 * @description
 */
scwin.udc_bottom_gr_inputEq_cancel = function () {
  scwin.undoMarked(gr_inputEq, ds_inputEq);
};

/**
 * event
 * @name btn_input1_onclick
 * @description
 */
scwin.btn_input1_onclick = async function (e) {
  await scwin.f_Input();
};

/**
 * event
 * @name btn_save1_onclick
 * @description
 */
scwin.btn_save1_onclick = async function (e) {
  await scwin.f_Save();
};

/**
 * event
 * @name udc_top_gr_state_exceldown
 * @description
 */
scwin.udc_top_gr_state_exceldown = function (e) {
  scwin.f_gridToExcel(gr_state, '자사장비배치현황');
};

/**
 * event
 * @name button_no15_onclick
 * @description
 */
scwin.button_no15_onclick = function (e) {
  scwin.f_ShiftRetrieve2();
};

/**
 * event
 * @name udc_botton_gr_otherEq_addRow
 * @description
 */
scwin.udc_botton_gr_otherEq_addRow = async function (e) {
  await scwin.f_AddRow(2);
};

/**
 * event
 * @name udc_botton_gr_otherEq_delRow
 * @description
 */
scwin.udc_botton_gr_otherEq_delRow = function (e) {
  scwin.deleteMarked(gr_otherEq, ds_otherEq);
};

/**
 * event
 * @name udc_botton_gr_otherEq_cancel
 * @description
 */
scwin.udc_botton_gr_otherEq_cancel = function (e) {
  scwin.undoMarked(gr_otherEq, ds_otherEq);
};

/**
 * event
 * @name btn_save2_onclick
 * @description
 */
scwin.btn_save2_onclick = async function (e) {
  await scwin.f_Save2();
};

/**
 * event
 * @name udc_top_gr_state1_exceldown
 * @description
 */
scwin.udc_top_gr_state1_exceldown = function (e) {
  scwin.f_gridToExcel(gr_state1, '자사장비배치현황');
};

/**
 * event
 * @name button_no71_onclick
 * @description
 */
scwin.button_no71_onclick = async function (e) {
  await scwin.f_AddRow(6);
};

/**
 * event
 * @name button_no72_onclick
 * @description
 */
scwin.button_no72_onclick = async function (e) {
  await scwin.f_AddRow(7);
};

/**
 * event
 * @name udc_bottom_gr_regular_addRow
 * @description
 */
scwin.udc_bottom_gr_regular_addRow = async function (e) {
  await scwin.f_AddRow(3);
};

/**
 * event
 * @name udc_bottom_gr_regular_delRow
 * @description
 */
scwin.udc_bottom_gr_regular_delRow = function (e) {
  scwin.deleteMarked(gr_regular, ds_regular);
};

/**
 * event
 * @name udc_bottom_gr_regular_cancel
 * @description
 */
scwin.udc_bottom_gr_regular_cancel = function (e) {
  scwin.undoMarked(gr_regular, ds_regular);
};

/**
 * event
 * @name btn_save3_onclick
 * @description
 */
scwin.btn_save3_onclick = async function (e) {
  await scwin.f_Save3();
};

/**
 * event
 * @name udc_bottom_gr_fulltime_addRow
 * @description
 */
scwin.udc_bottom_gr_fulltime_addRow = async function (e) {
  await scwin.f_AddRow(4);
};

/**
 * event
 * @name udc_bottom_gr_fulltime_delRow
 * @description
 */
scwin.udc_bottom_gr_fulltime_delRow = function (e) {
  scwin.deleteMarked(gr_fulltime, ds_fulltime);
};

/**
 * event
 * @name udc_bottom_gr_fulltime_cancel
 * @description
 */
scwin.udc_bottom_gr_fulltime_cancel = function (e) {
  scwin.undoMarked(gr_fulltime, ds_fulltime);
};

/**
 * event
 * @name btn_save4_onclick
 * @description
 */
scwin.btn_save4_onclick = async function (e) {
  await scwin.f_Save4();
};

/**
 * event
 * @name btn_save5_onclick
 * @description
 */
scwin.btn_save5_onclick = async function (e) {
  await scwin.f_Save5();
};

/**
 * event
 * @name udc_top_gr_state2_exceldown
 * @description
 */
scwin.udc_top_gr_state2_exceldown = function (e) {
  scwin.f_gridToExcel(gr_state2, '인원배치현황');
};

/**
* method
* @name undoMarked
* @description
*/
scwin.undoMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  let row = grdObj.getFocusedRowIndex();
  selected.sort();
  selected.reverse();
  dltObj.setBroadcast(false);
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
  if (dltObj.getRowCount() - 1 < row) {
    row = 0;
  }
  grdObj.setFocusedCell(row, grdObj.getFocusedColumnID(), false);
};

/**
* method
* @name deleteMarked
* @description
*/
scwin.deleteMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  let row = grdObj.getFocusedRowIndex();
  selected.sort();
  selected.reverse();
  dltObj.setBroadcast(false);
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.deleteRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
  if (dltObj.getRowCount() - 1 < row) {
    row = 0;
  }
  grdObj.setFocusedCell(row, grdObj.getFocusedColumnID(), false);
};

/**
* method
* @name gr_inputEq_wrkStpCdFormatter
* @description
*/
scwin.gr_inputEq_wrkStpCdFormatter = function (text, formatted, row, col) {
  if (formatted == "") {
    let value = ds_inputEq.getCellData(row, "wrkStpCd");
    return value;
  }
  return formatted;
};

/**
* method
* @name gr_otherEq_wrkStpCdFormatter
* @description
*/
scwin.gr_otherEq_wrkStpCdFormatter = function (text, formatted, row, col) {
  if (formatted == "") {
    let value = ds_otherEq.getCellData(row, "wrkStpCd");
    return value;
  }
  return formatted;
};

/**
* method
* @name gr_regular_wrkStpCdFormatter
* @description
*/
scwin.gr_regular_wrkStpCdFormatter = function (text, formatted, row, col) {
  if (formatted == "") {
    let value = ds_regular.getCellData(row, "wrkStpCd");
    return value;
  }
  return formatted;
};

/**
* method
* @name gr_fulltime_wrkStpCdFormatter
* @description
*/
scwin.gr_fulltime_wrkStpCdFormatter = function (text, formatted, row, col) {
  if (formatted == "") {
    let value = ds_fulltime.getCellData(row, "wrkStpCd");
    return value;
  }
  return formatted;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:180px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.lobranCd',mandatory:'true',title:'점소',objType:'key',sortMethod:'ascending',sortOption:'value','data-length':'4',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'width:100px;',id:'ica_wrkDt',class:'',calendarValueType:'yearMonthDate',title:'작업일자일자',mandatory:'true',isDate:'true',calendarLength:'8',displayFormat:'yyyy/MM/dd',objType:'Data','ev:onviewchange':'scwin.ica_wrkDt_onviewchange',ref:'data:dma_condition.wrkDt','data-length':'8','ev:onchange':'scwin.ica_wrkDt_onchange'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:90px;',id:'lc_shift1',class:'',allOption:'',chooseOption:'',ref:'',disabled:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'width:100px;',id:'ica_wrkDt2',class:'',calendarValueType:'yearMonthDate',objType:'Data',mandatory:'true',title:'작업일자일자',isDate:'true',calendarLength:'8',displayFormat:'yyyy/MM/dd',disabled:'true'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:90px;',id:'lc_shift2',class:'',allOption:'',chooseOption:'',ref:'',disabled:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'배치계획내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_plan',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',id:'udc_top_gr_plan',gridDownFn:'scwin.udc_top_gr_plan_exceldown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_plan',style:'',autoFit:'allColumn',id:'gr_plan',visibleRowNum:'4',class:'wq_gvw',editModeEvent:'onclick',columnMove:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true','ev:onkeydown':'scwin.gr_plan_onkeydown',focusFlow:'linear',readOnlyTabIgnore:'true','ev:onrowindexchange':'scwin.gr_plan_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'선석코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'선석',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'본선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column9',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'수출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'홀드종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'홀드수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'제원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'입항일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column76',value:'홀드별 화물정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column73',value:'홀드별 잔량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'Shift',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'작업시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'작업시작시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'작업종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'작업종료시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'예정물량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'column49',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'GANG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'운송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'인력',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'장비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'치프포맨',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'치프포맨',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'berthCd',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'berthNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holdKndCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'holdCnt',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslRmk',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ataDt',displayMode:'label',hidden:'true',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'holdInfo',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'holdRemain',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'shiftClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStDt',displayMode:'label',hidden:'true',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndDt',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planInfo',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkGangCnt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transCnt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'staffInfo',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqInfo',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cfmanEmpNo',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cfmanEmpNm',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column48',displayMode:'label',expression:'SUM("wrkGangCnt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column45',displayMode:'label',expression:'SUM("transCnt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'소요요청내역',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hveqInfo',placeholder:'',style:'//width: 500px;',readOnly:'true',objType:'Data',ref:'data:ds_required.hveqInfo','data-length':'500',maxByteLength:'500'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_eqcntInfo',placeholder:'',style:'//width:250px;',readOnly:'true',objType:'Data',ref:'data:ds_required.eqcntInfo','data-length':'500',maxByteLength:'500'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인원',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_manInfo',placeholder:'',style:'//width:200px;',readOnly:'true',objType:'Data',ref:'data:ds_required.manInfo','data-length':'500',maxByteLength:'500'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_holdInfo',placeholder:'',style:'//width:250px;',readOnly:'true',objType:'Data',ref:'data:ds_required.holdInfo','data-length':'500',maxByteLength:'500'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'잔량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_holdRemain',placeholder:'',style:'//width:200px;',readOnly:'true',ref:'data:ds_required.holdRemain','data-length':'500',maxByteLength:'500'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{id:'tabs1',label:'자사장비',style:'',disabled:'false'}},{T:1,N:'w2:tabs',A:{id:'tabs2',label:'타사장비',style:'',disabled:'false'}},{T:1,N:'w2:tabs',A:{id:'tabs3',label:'인원',style:'',disabled:'false'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix col2'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자사장비(전체)',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_eq',style:'',autoFit:'allColumn',id:'gr_eq',visibleRowNum:'5',class:'wq_gvw',editModeEvent:'onclick',columnMove:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true',focusFlow:'linear',readOnlyTabIgnore:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'단축번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column11',value:'장비모델',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'장비종류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'장비규격',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'status',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclShortCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'eqModelNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'eqKndCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqNrmCd',displayMode:'label',readOnly:'true',hidden:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 70%'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'장비투입',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_1',type:'button',class:'btn link dsN','ev:onclick':'scwin.btn_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비기준현황'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_2',type:'button',class:'btn link dsN','ev:onclick':'scwin.btn_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선기준현황'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_ozprint',type:'button',class:'btn',userAuth:'R','ev:onclick':'scwin.btn_ozprint_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비소요현황 발행'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_inputEq',style:'',id:'gr_inputEq',visibleRowNum:'4',class:'wq_gvw',autoFit:'allColumn',editModeEvent:'onclick',columnMove:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true','ev:ontextimageclick':'scwin.gr_inputEq_ontextimageclick',focusFlow:'linear',readOnlyTabIgnore:'true','ev:onviewchange':'scwin.gr_inputEq_onviewchange',rowStatusVisible:'true',rowStatusWidth:'20','ev:onbeforeedit':'scwin.gr_inputEq_onbeforeedit','ev:onafteredit':'scwin.gr_inputEq_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'작업일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'투입시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'단축번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'장비규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'인원1',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'인원1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'인원2',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'인원2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'인원3',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'인원3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkStpCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',selectedData:'false',emptyItem:'true',customFormatter:'scwin.gr_inputEq_wrkStpCdFormatter'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etWrkHh',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'vehclShortCd',displayMode:'label',viewType:'default',maxByteLength:'8'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqKndCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqNrmCd',displayMode:'label',textAlign:'left',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo1',displayMode:'label',textAlign:'left',viewType:'default',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo1nm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo2',displayMode:'label',textAlign:'left',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2nm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo3',displayMode:'label',textAlign:'left',viewType:'default',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3nm',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',expression:'SUM("etWrkHh")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows5',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:220px;',id:'lux_wrkIndictNo',class:'',allOption:'',chooseOption:'',ref:'',title:'점소',mandatory:'true',objType:'key',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'button_no14',type:'button',class:'btn','ev:onclick':'scwin.button_no14_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자사장비배치 불러오기'}]}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',btnRowAddObj:'button_no1',btnRowDelObj:'button_no2',btnCancelObj:'button_no3',rowAddUserAuth:'C',rowDelUserAuth:'C',id:'udc_bottom_gr_inputEq',rowAddFunction:'scwin.udc_bottom_gr_inputEq_addRow',rowDelFunction:'scwin.udc_bottom_gr_inputEq_delRow',cancelFunction:'scwin.udc_bottom_gr_inputEq_cancel'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_input1',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_input1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save1',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_save1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자사장비배치현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',gridID:'gr_state',id:'udc_top_gr_state',gridDownFn:'scwin.udc_top_gr_state_exceldown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:gridView',A:{fixedColumnNoMove:'true',readOnlyTabIgnore:'true',editModeEvent:'onclick',readOnly:'true',focusFlow:'linear',columnMoveWithFooter:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_stateCrs',style:'',columnMove:'true',dynamic:'true',autoFit:'',id:'gr_state',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'홀드정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'물량정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'잔량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column7',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'holdInfo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'planInfo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',id:'remain',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',inputType:'text',id:'wrkDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',id:'hveqInfo_',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column22',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows6',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'타사장비 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_otherEq',style:'',autoFit:'allColumn',id:'gr_otherEq',visibleRowNum:'4',class:'wq_gvw',editModeEvent:'onclick',columnMove:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true','ev:ontextimageclick':'scwin.gr_otherEq_ontextimageclick','ev:oncellclick':'scwin.gr_otherEq_oncellclick','ev:onviewchange':'scwin.gr_otherEq_onviewchange',focusFlow:'linear',readOnlyTabIgnore:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:onbeforeedit':'scwin.gr_otherEq_onbeforeedit','ev:onafteredit':'scwin.gr_otherEq_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption7',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label',rowSpan:'2',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'협력업체',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'장비종류',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'장비규격',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'대수',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'작업단계',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column5',value:'비고',displayMode:'label',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'clntNo',displayMode:'label',viewType:'default',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left',viewType:'default',maxByteLength:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqKndCd',displayMode:'label',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqKnd'},E:[{T:1,N:'w2:label',A:{ref:'eqKndNm'}},{T:1,N:'w2:value',A:{ref:'eqKndCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqNrmCd',displayMode:'label',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrm'},E:[{T:1,N:'w2:label',A:{ref:'eqNrmNm'}},{T:1,N:'w2:value',A:{ref:'eqNrmCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqHveqCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("reqHveqCnt")',maxByteLength:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkStpCd',displayMode:'label',selectedData:'false',emptyItem:'true',customFormatter:'scwin.gr_otherEq_wrkStpCdFormatter'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',maxByteLength:'500'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("reqHveqCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column31',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows7',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:220px;',id:'lux_wrkIndictNo2',class:'',title:'점소',mandatory:'true',sortMethod:'ascending',sortOption:'value',objType:'key',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'button_no15',type:'button',class:'btn','ev:onclick':'scwin.button_no15_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타사장비배치 불러오기'}]}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddObj:'button_no4',rowAddUserAuth:'C',rowDelUserAuth:'C',btnRowDelObj:'button_no5',btnCancelObj:'button_no6',id:'udc_botton_gr_otherEq',rowAddFunction:'scwin.udc_botton_gr_otherEq_addRow',rowDelFunction:'scwin.udc_botton_gr_otherEq_delRow',cancelFunction:'scwin.udc_botton_gr_otherEq_cancel',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save2',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_save2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자사장비배치현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'N',gridDownUserAuth:'X',gridDownYn:'Y',gridID:'gr_state1',gridUpYn:'N',grp:'grd_section3',style:'',templateYn:'N',id:'udc_top_gr_state1',gridDownFn:'scwin.udc_top_gr_state1_exceldown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:gridView',A:{fixedColumnNoMove:'true',readOnlyTabIgnore:'true',editModeEvent:'onclick',readOnly:'true',focusFlow:'linear',columnMoveWithFooter:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_stateCrs',style:'',columnMove:'true',dynamic:'true',id:'gr_state1',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption13',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'홀드정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'물량정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'잔량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column7',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'holdInfo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'planInfo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',id:'remain',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',inputType:'text',id:'wrkDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',id:'hveqInfo_',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column22',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows6_2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content3',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wifx col3'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'정규직',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_regular',style:'',autoFit:'allColumn',id:'gr_regular',visibleRowNum:'4',class:'wq_gvw',editModeEvent:'onclick',columnMove:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true',gridName:'정규직','ev:ontextimageclick':'scwin.gr_regular_ontextimageclick',focusFlow:'linear',readOnlyTabIgnore:'true','ev:onviewchange':'scwin.gr_regular_onviewchange',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption9',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'사번',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'이름',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'직급',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column9',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'담당자',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkStpCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',hidden:'true',mandatory:'true',customFormatter:'scwin.gr_regular_wrkStpCdFormatter',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'staffNo',displayMode:'label',viewType:'default',mandatory:'true',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'staffNm',displayMode:'label',mandatory:'true',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'occpgrdCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',id:'cfmanYn',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows8',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'button_no71',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.button_no71_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'치프포맨'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'button_no72',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.button_no72_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관련포맨'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',btnRowAddObj:'button_no73',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'C',btnRowDelObj:'button_no8',btnCancelObj:'button_no9',id:'udc_bottom_gr_regular',rowAddFunction:'scwin.udc_bottom_gr_regular_addRow',rowDelFunction:'scwin.udc_bottom_gr_regular_delRow',cancelFunction:'scwin.udc_bottom_gr_regular_cancel'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save3',label:'저장',type:'button',class:'btn',userAuth:'R','ev:onclick':'scwin.btn_save3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'상용직',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_fulltime',style:'',autoFit:'allColumn',id:'gr_fulltime',visibleRowNum:'4',class:'wq_gvw',columnMove:'true',columnMoveWithFooter:'true',editModeEvent:'onclick',fixedColumnNoMove:'true',gridName:'상용직','ev:ontextimageclick':'scwin.gr_fulltime_ontextimageclick',focusFlow:'linear',readOnlyTabIgnore:'true','ev:onviewchange':'scwin.gr_fulltime_onviewchange',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'사번',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'이름',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column11',value:'직급',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column9',value:'직급',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkStpCd',displayMode:'label',hidden:'true',allOption:'',chooseOption:'',ref:'',mandatory:'true',customFormatter:'scwin.gr_fulltime_wrkStpCdFormatter',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'staffNo',displayMode:'label',mandatory:'true',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'staffNm',displayMode:'label',mandatory:'true',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdNm',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows9',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y',btnRowAddObj:'button_no10',btnRowDelObj:'button_no11',btnCancelObj:'button_no12',userAuth:'R',rowAddUserAuth:'C',rowDelUserAuth:'C',id:'udc_bottom_gr_fulltime',cancelFunction:'scwin.udc_bottom_gr_fulltime_cancel',rowAddFunction:'scwin.udc_bottom_gr_fulltime_addRow',rowDelFunction:'scwin.udc_bottom_gr_fulltime_delRow'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save4',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_save4_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'일용직',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인원수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:100px;',id:'txt_dailymanCnt',placeholder:'',class:'',objType:'Data'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save5',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_save5_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인원배치현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownUserAuth:'X',gridDownYn:'Y',gridID:'gr_state2',gridUpYn:'N',grp:'grd_section4',style:'',templateYn:'N',id:'udc_top_gr_state2',gridDownFn:'scwin.udc_top_gr_state2_exceldown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_state2',id:'gr_state2',style:'',visibleRowNum:'4',visibleRowNumFix:'true',columnMove:'true',columnMoveWithFooter:'true',editModeEvent:'onclick',fixedColumnNoMove:'true',readOnly:'true',focusFlow:'linear',readOnlyTabIgnore:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'본선관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'본선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'홀드정보',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'물량정보',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'잔량',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'시프트',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'인원정보',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdInfo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planInfo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remain',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'allocStaff',inputType:'text',width:'300',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column22',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows11',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'dsN'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'',nameId:'',id:'udc_heavyMachineryClntInfo',selectID:'retrieveHeavyMachineryClntInfo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'',nameId:'',id:'udc_regularMan',selectID:'retrieveStvArrangementRegularManList'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'',nameId:'',id:'udc_fulltimeMan',selectID:'retrieveStvArrangementFulltimeManList'}}]}]}]}]}]})