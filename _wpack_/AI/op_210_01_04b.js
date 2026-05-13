/*amd /AI/op_210_01_04b.xml 130434 22ab950bbddb53d918b9ee9098c5358c80cdb191ad81214b6f46bfa82060f07a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'usblDt',name:'사용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'배정점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allChk',name:'전체체크',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition3'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occpgrdCd',name:'직종코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_plan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdKndCd',name:'홀드종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdCnt',name:'홀드수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslRmk',name:'제원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'입항예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ataDt',name:'입항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'출항예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atdDt',name:'출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'선석명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsNm',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'홀드별화물정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdRemain',name:'홀드별잔량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planInfo',name:'예정물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkGangCnt',name:'GANG',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transCnt',name:'운송',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqInfo',name:'장비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffInfo',name:'인력',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanEmpNo',name:'치프포맨사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanEmpNm',name:'치프포맨명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_required',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hveqInfo',name:'장비정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'manInfo',name:'인원정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqcntInfo',name:'장비수정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'홀드정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdRemain',name:'잔량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unusedEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqMan'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직종명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etWrkHh',name:'투입시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'기사사번1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1nm',name:'기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'기사사번2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2nm',name:'기사명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'기사사번3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3nm',name:'기사명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inputEq2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etWrkHh',name:'투입시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'기사사번1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1nm',name:'기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'기사사번2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2nm',name:'기사명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'기사사번3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3nm',name:'기사명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_state'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'홀드정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planInfo',name:'물량정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remain',name:'잔량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'columnName',name:'컬럼명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqInfo',name:'장비정보',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stateCrs'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'홀드정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planInfo',name:'물량정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remain',name:'잔량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqInfo_',name:'장비정보',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_state2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'홀드정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planInfo',name:'물량정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remain',name:'잔량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocStaff',name:'인원정보',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_otherEq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqHveqCnt',name:'요청대수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_otherEq2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqHveqCnt',name:'요청대수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_regular',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'일용직인원수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cfmanYn',name:'담당자여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fulltime',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'일용직인원수',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fulltimeAuto',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'일용직인원수',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_daily',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'일용직인원수',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqKndCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqKnd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrm'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fman',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvArrangementPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_plan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_plan","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.op.stvwrk.RetrieveStvRequiredResourceInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_required","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_required","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieve2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEq',action:'/ds.op.stvwrk.RetrieveOurCompanyEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_eq","key":"OUT_DS1"},{"id":"ds_unusedEq","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_eq","key":"OUT_DS1"},{"id":"ds_unusedEq","key":"OUT_DS2"}]','ev:submiterror':'scwin.sbm_retrieveEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveInputEq',action:'/ds.op.stvwrk.RetrieveOurCompanyInputEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_inputEq","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_inputEq","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveInputEq_submitdone','ev:submiterror':'scwin.sbm_retrieveInputEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveInputEq2',action:'/ds.op.stvwrk.RetrieveOurCompanyInputEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_inputEq2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_inputEq2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveInputEq2_submitdone','ev:submiterror':'scwin.sbm_retrieveInputEq2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqMan',action:'/ds.op.stvwrk.RetrieveOurCompanyEqManListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_eqMan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqMan","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveEqMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveState',action:'/ds.op.stvwrk.RetrieveStvArrangementStateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_state","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_state","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveState_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveState2',action:'/ds.op.stvwrk.RetrieveStvArrangementState2CMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_state2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_state2","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveState2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvEqArrangementCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_inputEq","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOtherEq',action:'/ds.op.stvwrk.RetrieveOtherCompanyEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_otherEq","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_otherEq","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveOtherEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOtherEq2',action:'/ds.op.stvwrk.RetrieveOtherCompanyEqListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_otherEq2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_otherEq2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveOtherEq2_submitdone','ev:submiterror':'scwin.sbm_retrieveOtherEq2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMan',action:'/ds.op.stvwrk.RetrieveStvManpowerArrangementListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_regular","key":"OUT_DS1"},{"id":"ds_fulltime","key":"OUT_DS2"},{"id":"ds_daily","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_regular","key":"OUT_DS1"},{"id":"ds_fulltime","key":"OUT_DS2"},{"id":"ds_daily","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveMan_submitdone','ev:submiterror':'scwin.sbm_retrieveMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveOtherEq',action:'/ds.op.stvwrk.SaveStvOtherEqArrangementCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_otherEq","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveOtherEq_submitdone','ev:submiterror':'scwin.sbm_saveOtherEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegularMan',action:'/ds.op.stvwrk.SaveStvManArrangementCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_regular","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveRegularMan_submitdone','ev:submiterror':'scwin.sbm_saveRegularMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveFulltimeMan',action:'/ds.op.stvwrk.SaveStvManArrangementCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_fulltime","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveFulltimeMan_submitdone','ev:submiterror':'scwin.sbm_saveFulltimeMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveDailyMan',action:'/ds.op.stvwrk.SaveDailyManInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_daily","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveDailyMan_submitdone','ev:submiterror':'scwin.sbm_saveDailyMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveLogisticsHeavyEquip2CMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_eqKndCd","key":"OUT_DS1"},{"id":"ds_eqNrmCd2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_eqKndCd","key":"OUT_DS1"},{"id":"ds_eqNrmCd2","key":"OUT_DS2"}]','ev:submiterror':'scwin.sbm_retrieveEqInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_auto',action:'/ds.op.stvwrk.RetrieveFulltimeManAutoListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition3","key":"IN_DS1"},{"id":"ds_fulltimeAuto","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fulltimeAuto","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_auto_submitdone','ev:submiterror':'scwin.sbm_auto_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqKnd',action:'/ds.op.stvwrk.RetrieveStvArrangementOtherEqKndListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_eqKnd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqKnd","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveEqKnd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqNrm',action:'/ds.op.stvwrk.RetrieveStvArrangementOtherEqNrmListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_eqNrm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqNrm","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveEqNrm_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFman',action:'/ds.op.stvwrk.RetrieveStvWrkIndictFmanInfoListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_fman","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fman","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveFman_submitdone','ev:submiterror':'scwin.sbm_retrieveFman_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=ZZ208',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[]',target:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveEqNrmCd_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveWrkStpCd',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do?upperWrkStpCd=01&lvl=3&wrkPlanTrgtYn=1',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[]',target:'data:json,[{"id":"ds_wrkStpCd","key":"OUT_DS1"}]'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.curRow = "";
scwin.vCurDate = "";
scwin.vNextDate = "";
scwin.lobranCd = "";
scwin.tmp_colid = "";
scwin.tmp_grdnm = "";
scwin.tmp_vehclShortCd = "";
scwin.tmp_eqCd = "";
scwin.tmp_vehclNo = "";
scwin.tmp_eqKndCd = "";
scwin.tmp_eqNrmCd = "";
scwin.tmp_empNo = "";
scwin.tmp_empNm = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.lobranCd = $c.ses.getLobranCd();
  let curDateObj = new Date(parseInt(scwin.vCurDate.substring(0, 4), 10), parseInt(scwin.vCurDate.substring(4, 6), 10) - 1, parseInt(scwin.vCurDate.substring(6, 8), 10));
  let nextDateObj = new Date(curDateObj.getTime() + 1000 * 60 * 60 * 24);
  let yyyy = nextDateObj.getFullYear().toString();
  let mm = (nextDateObj.getMonth() + 1).toString();
  if (mm.length < 2) mm = "0" + mm;
  let dd = nextDateObj.getDate().toString();
  if (dd.length < 2) dd = "0" + dd;
  scwin.vNextDate = yyyy + mm + dd;
  scwin.f_SetDefaultData();
  $c.sbm.execute($p, sbm_retrieveEqNrmCd);
  $c.sbm.execute($p, sbm_retrieveWrkStpCd);
};
scwin.f_SetDefaultData = function () {
  ica_wrkDt.setValue(scwin.vCurDate);
  lc_shift1.setValue("N");
  lc_shift2.setValue("D");
  ica_wrkDt2.setValue(scwin.vNextDate);
};
scwin.sbm_retrieveEqNrmCd_submitdone = function (e) {};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_shift1, ica_wrkDt]);
  if (!chk) {
    return;
  }
  dma_condition.set("lobranCd", lc_shift1.getValue());
  dma_condition.set("wrkDt", ica_wrkDt.getValue());
  dma_condition2.set("lobranCd", lc_shift1.getValue());
  dma_condition2.set("wrkDt", ica_wrkDt.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
  $c.sbm.execute($p, sbm_retrieveState);
  $c.sbm.execute($p, sbm_retrieveState2);
  dma_condition.set("assgnLobranCd", lc_shift1.getValue());
  dma_condition.set("usblDt", ica_wrkDt.getValue());
  $c.sbm.execute($p, sbm_retrieveEqKnd);
  $c.sbm.execute($p, sbm_retrieveEqNrm);
};
scwin.f_Retrieve2 = function () {
  let row = ds_plan.getRowPosition();
  if (row < 0) return;
  dma_condition2.set("stvWrkIndictNo", ds_plan.getCellData(row, "stvWrkIndictNo"));
  $c.sbm.execute($p, sbm_retrieve2);
  $c.sbm.execute($p, sbm_retrieveInputEq);
  $c.sbm.execute($p, sbm_retrieveOtherEq);
};
scwin.f_Retrieve3 = function () {
  let row = ds_plan.getRowPosition();
  if (row < 0) return;
  dma_condition2.set("stvWrkIndictNo", ds_plan.getCellData(row, "stvWrkIndictNo"));
  $c.sbm.execute($p, sbm_retrieveMan);
};
scwin.f_Retrieve4 = function () {
  dma_condition2.set("lobranCd", lc_shift1.getValue());
  let row = ds_unusedEq.getRowPosition();
  if (row < 0) return;
  dma_condition2.set("eqCd", ds_unusedEq.getCellData(row, "eqCd"));
  $c.sbm.execute($p, sbm_retrieveEqMan);
};
scwin.f_Save = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_inputEq.getUpdatedIndex().length > 0) {
    let chk = await $c.gus.cfValidate($p, [gr_inputEq]);
    if (!chk) return;
    for (let i = 0; i < ds_inputEq.getRowCount(); i++) {
      if (ds_inputEq.getCellData(i, "eqCd") != "") {
        if (ds_inputEq.getCellData(i, "wrkDt") == "") {
          await $c.win.alert($p, i + 1 + "번째 줄에서 작업일자는 필수입력 사항입니다.");
          ds_inputEq.setRowPosition(i);
          gr_inputEq.setFocusedCell(i, "wrkDt");
          gr_inputEq.setFocus();
          return false;
        }
        if (ds_inputEq.getCellData(i, "wrkStpCd") == "") {
          await $c.win.alert($p, i + 1 + "번째 줄에서 작업단계는 필수입력 사항입니다.");
          gr_inputEq.setFocusedCell(i, "wrkStpCd");
          ds_inputEq.setRowPosition(i);
          gr_inputEq.setFocus();
          return false;
        }
      }
    }
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      await $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선계획수립대상"]);
  }
};
scwin.f_Save2 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_otherEq.getUpdatedIndex().length > 0) {
    let chk = await $c.gus.cfValidate($p, [gr_otherEq]);
    if (!chk) return;
    for (let i = 0; i < ds_otherEq.getRowCount(); i++) {
      if (ds_otherEq.getCellData(i, "clntNo") == "") {
        await $c.win.alert($p, i + 1 + "번째 줄에서 협력업체 코드는 필수입력 사항입니다.");
        ds_otherEq.setRowPosition(i);
        gr_otherEq.setFocusedCell(i, "clntNo");
        gr_otherEq.setFocus();
        return false;
      }
      if (ds_otherEq.getCellData(i, "eqKndCd") == "") {
        await $c.win.alert($p, i + 1 + "번째 줄에서 장비종류는 필수입력 사항입니다.");
        ds_otherEq.setRowPosition(i);
        gr_otherEq.setFocusedCell(i, "eqKndCd");
        gr_otherEq.setFocus();
        return false;
      }
      if (ds_otherEq.getCellData(i, "reqHveqCnt") == 0) {
        await $c.win.alert($p, i + 1 + "번째 줄에서 대수는 필수입력 사항입니다.");
        ds_otherEq.setRowPosition(i);
        gr_otherEq.setFocusedCell(i, "reqHveqCnt");
        gr_otherEq.setFocus();
        return false;
      }
    }
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      await $c.sbm.execute($p, sbm_saveOtherEq);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["인원계획"]);
  }
};
scwin.f_Save3 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_regular.getUpdatedIndex().length > 0) {
    let chk = await $c.gus.cfValidate($p, [gr_fulltime]);
    if (!chk) return;
    let cfmanCnt = 0;
    for (let i = 0; i < ds_regular.getRowCount(); i++) {
      if (ds_regular.getCellData(i, "cfmanYn") == "T") {
        cfmanCnt++;
      }
    }
    if (cfmanCnt > 1) {
      await $c.win.alert($p, "한 작업에 정규직 담당자는 한 명만 등록할 수 있습니다.");
      return false;
    }
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      await $c.sbm.execute($p, sbm_saveRegularMan);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["정규직"]);
  }
};
scwin.f_Save4 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_fulltime.getUpdatedIndex().length > 0) {
    let chk = await $c.gus.cfValidate($p, [gr_daily]);
    if (!chk) return;
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      await $c.sbm.execute($p, sbm_saveFulltimeMan);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상용직"]);
  }
};
scwin.f_Save5 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_daily.getRowCount() > 0) {
    ds_daily.setCellData(0, "dailymanCnt", txt_dailymanCnt.getValue());
  }
  if (ds_daily.getUpdatedIndex().length > 0) {
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      await $c.sbm.execute($p, sbm_saveDailyMan);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["일용직"]);
  }
};
scwin.f_openPgm = async function (name) {
  if (name == "stvArrangement") {
    let lobranCdVal = lc_shift1.getValue();
    let wrkDtVal = ica_wrkDt.getValue();
    let obj = {
      lobranCd: lobranCdVal,
      wrkDt: wrkDtVal
    };
    await $c.win.openPopup($p, "/ui/ds/op/stvwrk/op_210_01_04p.xml", {
      width: 1000,
      height: 630,
      modal: true,
      data: obj
    });
  }
};
scwin.f_Input = async function () {
  let planRow = ds_plan.getRowPosition();
  if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
    await $c.win.alert($p, "자사 장비 배치 입력은 배치계획내역 조회 후 가능합니다.");
    return false;
  }
  await $c.sbm.execute($p, sbm_retrieveEq);
  for (let i = 0; i < 10; i++) {
    ds_inputEq.insertRow();
    let newRow = ds_inputEq.getRowPosition();
    ds_inputEq.setCellData(newRow, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
    ds_inputEq.setCellData(newRow, "wrkDt", ds_plan.getCellData(planRow, "wrkDt"));
    ds_inputEq.setCellData(newRow, "etWrkHh", 0);
  }
};
scwin.f_retrieveEqInfo = function () {};
scwin.f_AddRow = async function (row) {
  let planRow = ds_plan.getRowPosition();
  switch (row) {
    case '1':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "자사 장비 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      ds_inputEq.insertRow();
      let newRow1 = ds_inputEq.getRowPosition();
      ds_inputEq.setCellData(newRow1, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      ds_inputEq.setCellData(newRow1, "wrkDt", ds_plan.getCellData(planRow, "wrkDt"));
      ds_inputEq.setCellData(newRow1, "etWrkHh", 0);
      break;
    case '2':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "타사 장비 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      ds_otherEq.insertRow();
      let newRow2 = ds_otherEq.getRowPosition();
      ds_otherEq.setCellData(newRow2, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      break;
    case '3':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "정규직 작업 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      ds_regular.insertRow();
      let newRow3 = ds_regular.getRowPosition();
      ds_regular.setCellData(newRow3, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      ds_regular.setCellData(newRow3, "wrkStpCd", "004");
      break;
    case '4':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "상용직 작업 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      ds_fulltime.insertRow();
      let newRow4 = ds_fulltime.getRowPosition();
      ds_fulltime.setCellData(newRow4, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      ds_fulltime.setCellData(newRow4, "wrkStpCd", "004");
      break;
    case '5':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "일용직 작업 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      ds_daily.insertRow();
      let newRow5 = ds_daily.getRowPosition();
      ds_daily.setCellData(newRow5, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      ds_daily.setCellData(newRow5, "wrkStpCd", "004");
      break;
    case '6':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "치프포맨  작업 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      ds_regular.insertRow();
      let newRow6 = ds_regular.getRowPosition();
      ds_regular.setCellData(newRow6, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      ds_regular.setCellData(newRow6, "wrkStpCd", "004");
      ds_regular.setCellData(newRow6, "staffNo", ds_plan.getCellData(planRow, "cfmanEmpNo"));
      ds_regular.setCellData(newRow6, "staffNm", ds_plan.getCellData(planRow, "cfmanEmpNm"));
      break;
    case '7':
      if (ds_plan.getRowCount() == 0 || planRow < 0 || ds_plan.getCellData(planRow, "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "치프포맨  작업 배치는 배치계획내역 조회 후 가능합니다.");
        return false;
      }
      dma_condition2.set("stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      $c.sbm.execute($p, sbm_retrieveFman);
      break;
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  $c.data.downloadGridViewExcel($p, argGrid, {
    fileName: argTitle + ".xlsx",
    sheetName: argTitle
  });
};
scwin.f_openPopUP1 = async function () {
  if (scwin.txt_vsslCfNm == "") {
    scwin.ed_empNo = "";
  } else {
    await scwin.f_openCommonPopUpForMan(1, 'T');
  }
};
scwin.f_openCommonPopUpForMan = async function (disGubun, pWinCloseTF) {
  let sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  let rtnList = [];
  let pCode = "";
  let pName = "";
  let arrParam = [];
  switch (disGubun) {
    case 1:
      pCode = scwin.ed_empNo || "";
      pName = scwin.txt_vsslCfNm || "";
      arrParam[0] = pCode;
      arrParam[1] = pName;
      arrParam[2] = lc_shift1.getValue();
      arrParam[3] = lc_shift1.getText();
      arrParam[4] = '';
      arrParam[5] = '01,D';
      arrParam[6] = '02,D';
      arrParam[7] = '';
      arrParam[8] = '';
      arrParam[9] = 'Y';
      arrParam[10] = sWinCloseTF;
      arrParam[11] = "1";
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
        width: 530,
        height: 450,
        modal: true,
        data: arrParam
      });
      if (rtnList != null && rtnList[3] != undefined) {
        if (rtnList[3] == undefined) {
          return;
        }
        scwin.ed_empNo = rtnList[2];
        scwin.txt_vsslCfNm = rtnList[3];
        return;
      } else {
        scwin.ed_empNo = "";
        scwin.txt_vsslCfNm = "";
      }
      break;
  }
};
scwin.f_openCommonPopUp = async function (gubun, row, pClose) {
  let rtnList;
  let pWhere;
  let pCode = "";
  let pName = "";
  let arrParam = [];
  let sWinCloseTF = pClose == null ? "T" : pClose;
  switch (gubun) {
    case 1:
      pCode = ds_regular.getCellData(row, "staffNo");
      pName = "";
      pWhere = lc_shift1.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementRegularManList', pCode, pName, pClose, '8', '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종', '70,70,70,70,50,70,50,80', '5,7,9,10', pWhere, 500, 400, null, null, null, "T", "사원,사원코드,사원명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_regular.setCellData(row, "staffNo", rtnList[0]);
        ds_regular.setCellData(row, "staffNm", rtnList[1]);
        ds_regular.setCellData(row, "occpgrdCd", rtnList[2]);
        ds_regular.setCellData(row, "occpgrdNm", rtnList[3]);
      } else {
        ds_regular.setCellData(row, "staffNo", "");
        ds_regular.setCellData(row, "staffNm", "");
        ds_regular.setCellData(row, "occpgrdCd", "");
        ds_regular.setCellData(row, "occpgrdNm", "");
      }
      break;
    case 2:
      pCode = "";
      pName = ds_regular.getCellData(row, "staffNm");
      pWhere = lc_shift1.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementRegularManList', pCode, pName, pClose, '8', '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종', '70,70,70,70,50,70,50,80', '5,7,9,10', pWhere, 500, 400, null, null, null, "T", "사원,사원코드,사원명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_regular.setCellData(row, "staffNo", rtnList[0]);
        ds_regular.setCellData(row, "staffNm", rtnList[1]);
        ds_regular.setCellData(row, "occpgrdCd", rtnList[2]);
        ds_regular.setCellData(row, "occpgrdNm", rtnList[3]);
      } else {
        ds_regular.setCellData(row, "staffNo", "");
        ds_regular.setCellData(row, "staffNm", "");
        ds_regular.setCellData(row, "occpgrdCd", "");
        ds_regular.setCellData(row, "occpgrdNm", "");
      }
      break;
    case 3:
      pCode = ds_fulltime.getCellData(row, "staffNo");
      pName = "";
      pWhere = lc_shift1.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementFulltimeManList', pCode, pName, pClose, '8', '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종', '70,70,70,70,50,70,50,80', '5,7,9,10', pWhere, 500, 400, null, null, null, "T", "사원,사원코드,사원명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_fulltime.setCellData(row, "staffNo", rtnList[0]);
        ds_fulltime.setCellData(row, "staffNm", rtnList[1]);
        ds_fulltime.setCellData(row, "occpgrdCd", rtnList[2]);
        ds_fulltime.setCellData(row, "occpgrdNm", rtnList[3]);
      } else {
        ds_fulltime.setCellData(row, "staffNo", "");
        ds_fulltime.setCellData(row, "staffNm", "");
        ds_fulltime.setCellData(row, "occpgrdCd", "");
        ds_fulltime.setCellData(row, "occpgrdNm", "");
      }
      break;
    case 4:
      pCode = "";
      pName = ds_fulltime.getCellData(row, "staffNm");
      pWhere = lc_shift1.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementFulltimeManList', pCode, pName, pClose, '8', '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종', '70,70,70,70,50,70,50,80', '5,7,9,10', pWhere, 500, 400, null, null, null, "T", "사원,사원코드,사원명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_fulltime.setCellData(row, "staffNo", rtnList[0]);
        ds_fulltime.setCellData(row, "staffNm", rtnList[1]);
        ds_fulltime.setCellData(row, "occpgrdCd", rtnList[2]);
        ds_fulltime.setCellData(row, "occpgrdNm", rtnList[3]);
      } else {
        ds_fulltime.setCellData(row, "staffNo", "");
        ds_fulltime.setCellData(row, "staffNm", "");
        ds_fulltime.setCellData(row, "occpgrdCd", "");
        ds_fulltime.setCellData(row, "occpgrdNm", "");
      }
      break;
    case 5:
      pCode = ds_daily.getCellData(row, "staffNo");
      pName = "";
      pWhere = lc_shift1.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementDailyManList', pCode, pName, pClose, '8', '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종', '70,70,70,70,50,70,50,80', '5,7,9,10', pWhere, 500, 400, null, null, null, "T", "사원,사원코드,사원명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_daily.setCellData(row, "staffNo", rtnList[0]);
        ds_daily.setCellData(row, "staffNm", rtnList[1]);
        ds_daily.setCellData(row, "occpgrdCd", rtnList[2]);
        ds_daily.setCellData(row, "occpgrdNm", rtnList[3]);
      } else {
        ds_daily.setCellData(row, "staffNo", "");
        ds_daily.setCellData(row, "staffNm", "");
        ds_daily.setCellData(row, "occpgrdCd", "");
        ds_daily.setCellData(row, "occpgrdNm", "");
      }
      break;
    case 6:
      pCode = "";
      pName = ds_daily.getCellData(row, "staffNm");
      pWhere = lc_shift1.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementDailyManList', pCode, pName, pClose, '8', '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종', '70,70,70,70,50,70,50,80', '5,7,9,10', pWhere, 500, 400, null, null, null, "T", "사원,사원코드,사원명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_daily.setCellData(row, "staffNo", rtnList[0]);
        ds_daily.setCellData(row, "staffNm", rtnList[1]);
        ds_daily.setCellData(row, "occpgrdCd", rtnList[2]);
        ds_daily.setCellData(row, "occpgrdNm", rtnList[3]);
      } else {
        ds_daily.setCellData(row, "staffNo", "");
        ds_daily.setCellData(row, "staffNm", "");
        ds_daily.setCellData(row, "occpgrdCd", "");
        ds_daily.setCellData(row, "occpgrdNm", "");
      }
      break;
    case 7:
      pCode = ds_inputEq.getCellData(row, "vehclShortCd");
      pName = "";
      let pDate = ica_wrkDt.getValue();
      arrParam[0] = "";
      arrParam[1] = "";
      arrParam[2] = "";
      arrParam[3] = pDate;
      arrParam[4] = pCode;
      arrParam[5] = "";
      arrParam[6] = 'T';
      arrParam[7] = 'T';
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
scwin.f_openCommCdPopUp = async function (row, colid) {
  let colidNm = "";
  let rtnList = [];
  let pCode = "";
  let arrParam = [];
  if (colid == "drvStaffNo1") {
    colidNm = "drvStaffNo1nm";
  } else if (colid == "drvStaffNo2") {
    colidNm = "drvStaffNo2nm";
  } else if (colid == "drvStaffNo3") {
    colidNm = "drvStaffNo3nm";
  }
  let curRow = ds_inputEq.getRowPosition();
  pCode = ds_inputEq.getCellData(curRow, colid);
  ds_inputEq.setCellData(curRow, colidNm, "");
  arrParam[0] = "";
  arrParam[1] = pCode;
  arrParam[2] = lc_shift1.getValue();
  arrParam[3] = lc_shift1.getText();
  arrParam[4] = '';
  arrParam[5] = '00,E';
  arrParam[6] = '01,D';
  arrParam[7] = '';
  arrParam[8] = ica_wrkDt.getValue();
  arrParam[9] = 'Y';
  arrParam[10] = 'T';
  rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
    width: 530,
    height: 450,
    modal: true,
    data: arrParam
  });
  if (rtnList != null && rtnList[1] != undefined) {
    ds_inputEq.setCellData(curRow, colid, rtnList[2]);
    ds_inputEq.setCellData(curRow, colidNm, rtnList[3]);
  } else {
    ds_inputEq.setCellData(curRow, colid, "");
    ds_inputEq.setCellData(curRow, colidNm, "");
  }
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
    if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
    if (targetRow == null) targetRow = scwin.f_AddDataRow(targetDataset);
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
scwin.f_GetColumnNames = function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    let colInfos = dataSet.getColumnIDs();
    if (colInfos == null || colInfos.length == 0) return null;
    return colInfos;
  } catch (e) {
    // TODO: cfAlertMsg requires async
    return null;
  }
};
scwin.f_AddDataRow = function (dataSet) {
  dataSet.insertRow();
  return dataSet.getRowPosition();
};
scwin.f_auto = function (gubun) {
  let planRow = ds_plan.getRowPosition();
  if (planRow < 0) return;
  dma_condition3.set("stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
  dma_condition3.set("lobranCd", lc_shift1.getValue());
  if (gubun == 1) {
    dma_condition3.set("occpgrdCd", "91");
  } else if (gubun == 2) {
    dma_condition3.set("occpgrdCd", "92");
  }
  $c.sbm.execute($p, sbm_auto);
};
scwin.f_RetrievePierCd = function (param1, param2) {
  // TODO: co_ds_combo2/co_ds_combo3 동적 데이터 로딩 — WebSquare에서 별도 submission으로 처리 필요
};
scwin.f_RetrievePierCdCall = function () {
  let planRow = ds_plan.getRowPosition();
  if (planRow < 0) return;
  scwin.f_RetrievePierCd(ds_plan.getCellData(planRow, "cvsslMgntNo"), ds_plan.getCellData(planRow, "stvWrkIndictNo"));
};
scwin.f_ShiftRetrieve = function () {
  dma_condition2.set("stvWrkIndictNo", lux_wrkIndictNo.getValue());
  $c.sbm.execute($p, sbm_retrieveInputEq2);
};
scwin.f_ShiftRetrieve2 = function () {
  dma_condition2.set("stvWrkIndictNo", lux_wrkIndictNo2.getValue());
  $c.sbm.execute($p, sbm_retrieveOtherEq2);
};
scwin.f_ShiftRetrieve3 = function () {
  // TODO: lux_wrkIndictNo3 not found in body — 인원탭 shift 불러오기
};
scwin.f_Print = async function () {
  if (ica_wrkDt.getValue() == null || ica_wrkDt.getValue() == "") {
    await $c.win.alert($p, "장비소요현황 발행시 일자는 필수 입니다.");
    ica_wrkDt.setFocus();
    return;
  }

  // TODO: OZ Report 연동 — cfOZReport 호출 부분은 WebSquare 리포트 연동으로 별도 구현 필요
};
scwin.f_DataDragBf = function (grdobj, dsobj, row, colid) {
  // TODO: Drag&Drop은 WebSquare gridView에서 별도 구현 필요
  return false;
};
scwin.f_DataDragging = function (grobj, row, colid) {
  // TODO: Drag&Drop은 WebSquare gridView에서 별도 구현 필요
  return false;
};
scwin.f_DataDropAf = function (lnkObj, tgtObj, row, colid, data) {
  if (scwin.tmp_colid == colid) {
    if (scwin.tmp_colid == "vehclShortCd") {
      lnkObj.setCellData(row, "vehclShortCd", scwin.tmp_vehclShortCd);
      lnkObj.setCellData(row, "eqCd", scwin.tmp_eqCd);
      lnkObj.setCellData(row, "vehclNo", scwin.tmp_vehclNo);
      lnkObj.setCellData(row, "eqKndCd", scwin.tmp_eqKndCd);
      lnkObj.setCellData(row, "eqNrmCd", scwin.tmp_eqNrmCd);
    }
    scwin.tmp_grdnm = "";
    scwin.tmp_colid = "";
    return true;
  } else {
    if (scwin.tmp_colid == "empNo") {
      lnkObj.setCellData(row, colid, scwin.tmp_empNo);
      lnkObj.setCellData(row, colid + "nm", scwin.tmp_empNm);
    }
    scwin.tmp_grdnm = "";
    scwin.tmp_colid = "";
    return true;
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_input_onclick = function (e) {
  scwin.f_Input();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_saveRegular_onclick = function (e) {
  scwin.f_Save3();
};
scwin.btn_saveFulltime_onclick = function (e) {
  scwin.f_Save4();
};
scwin.btn_saveDaily_onclick = function (e) {
  scwin.f_Save5();
};
scwin.btn_stvArrangement_onclick = function (e) {
  scwin.f_openPgm('stvArrangement');
};
scwin.btn_SRPrint_onclick = function (e) {
  scwin.f_openPgm('SRPrint');
};
scwin.btn_print_onclick = function (e) {
  scwin.f_Print();
};
scwin.btn_shiftRetrieve_onclick = function (e) {
  scwin.f_ShiftRetrieve();
};
scwin.btn_shiftRetrieve2_onclick = function (e) {
  scwin.f_ShiftRetrieve2();
};
scwin.btn_chiefForeman_onclick = function (e) {
  scwin.f_AddRow('6');
};
scwin.btn_relatedForeman_onclick = function (e) {
  scwin.f_AddRow('7');
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_plan.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    scwin.f_Retrieve2();
    scwin.f_Retrieve3();
    scwin.f_RetrievePierCdCall();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveInputEq_submitdone = function (e) {};
scwin.sbm_retrieveInputEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveInputEq2_submitdone = function (e) {
  let rowCnt = ds_inputEq2.getRowCount();
  if (rowCnt > 0) {
    let planRow = ds_plan.getRowPosition();
    for (let i = 0; i < rowCnt; i++) {
      scwin.f_CopyDataRow(ds_inputEq2, ds_inputEq, i);
      let newRow = ds_inputEq.getRowPosition();
      ds_inputEq.setCellData(newRow, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
    }
  }
};
scwin.sbm_retrieveInputEq2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEqMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveState_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveState2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveOtherEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveOtherEq2_submitdone = function (e) {
  let rowCnt = ds_otherEq2.getRowCount();
  if (rowCnt > 0) {
    let planRow = ds_plan.getRowPosition();
    for (let i = 0; i < rowCnt; i++) {
      scwin.f_CopyDataRow(ds_otherEq2, ds_otherEq, i);
      let newRow = ds_otherEq.getRowPosition();
      ds_otherEq.setCellData(newRow, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
    }
  }
};
scwin.sbm_retrieveOtherEq2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveMan_submitdone = function (e) {
  if (ds_daily.getRowCount() > 0) {
    txt_dailymanCnt.setValue(ds_daily.getCellData(0, "dailymanCnt"));
  }
};
scwin.sbm_retrieveMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveOtherEq_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
};
scwin.sbm_saveOtherEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveRegularMan_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
};
scwin.sbm_saveRegularMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveFulltimeMan_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
};
scwin.sbm_saveFulltimeMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveDailyMan_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
};
scwin.sbm_saveDailyMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEqInfo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_auto_submitdone = async function (e) {
  let rowCnt = ds_fulltimeAuto.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < ds_fulltimeAuto.getRowCount(); i++) {
      scwin.f_CopyDataRow(ds_fulltimeAuto, ds_fulltime, i);
      let newRow = ds_fulltime.getRowPosition();
      ds_fulltime.setCellData(newRow, "wrkStpCd", "004");
    }
  } else if (rowCnt == 0) {
    await $c.win.alert($p, "해당 작업지시에 등록된 상용인원 리스트가 존재하지 않습니다.");
    return false;
  }
};
scwin.sbm_auto_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEqKnd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEqNrm_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveFman_submitdone = function (e) {
  let rowCnt = ds_fman.getRowCount();
  if (rowCnt > 0) {
    let planRow = ds_plan.getRowPosition();
    for (let i = 0; i < rowCnt; i++) {
      ds_regular.insertRow();
      let newRow = ds_regular.getRowPosition();
      ds_regular.setCellData(newRow, "stvWrkIndictNo", ds_plan.getCellData(planRow, "stvWrkIndictNo"));
      ds_regular.setCellData(newRow, "wrkStpCd", "004");
      ds_regular.setCellData(newRow, "staffNo", ds_fman.getCellData(i, "empNo"));
      ds_regular.setCellData(newRow, "staffNm", ds_fman.getCellData(i, "empNm"));
    }
  }
};
scwin.sbm_retrieveFman_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_plan_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_Retrieve2();
  scwin.f_Retrieve3();
  scwin.f_RetrievePierCdCall();
};
scwin.gr_inputEq_ontextimageclick = async function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "wrkDt":
      // TODO: calendar popup in grid
      break;
    case "vehclShortCd":
      await scwin.f_openCommonPopUp(7, rowIndex, 'T');
      break;
    case "drvStaffNo1":
      await scwin.f_openCommCdPopUp(rowIndex, columnId);
      break;
    case "drvStaffNo2":
      await scwin.f_openCommCdPopUp(rowIndex, columnId);
      break;
    case "drvStaffNo3":
      await scwin.f_openCommCdPopUp(rowIndex, columnId);
      break;
  }
};
scwin.gr_otherEq_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  let rtnList = [];
  if (columnId == "clntNm") {
    let param1 = "";
    let param2 = ds_otherEq.getCellData(rowIndex, "clntNm");
    rtnList = $c.gus.cfCommonPopUp($p, 'retrieveHeavyMachineryClntInfo', param1, param2, "F", null, null, null, null, null, 450, 500, null, null);
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_otherEq, rowIndex, "clntNo", "clntNm");
  } else if (columnId == "clntNo") {
    let param1 = ds_otherEq.getCellData(rowIndex, "clntNo");
    let param2 = "";
    rtnList = $c.gus.cfCommonPopUp($p, 'retrieveHeavyMachineryClntInfo', param1, param2, "F", null, null, null, null, null, 450, 500, null, null);
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_otherEq, rowIndex, "clntNo", "clntNm");
  }
};
scwin.gr_regular_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "staffNo") {
    scwin.f_openCommonPopUp(1, rowIndex, "F");
  } else if (columnId == "staffNm") {
    scwin.f_openCommonPopUp(2, rowIndex, "F");
  }
};
scwin.gr_fulltime_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "staffNo") {
    scwin.f_openCommonPopUp(1, rowIndex, "F");
  } else if (columnId == "staffNm") {
    scwin.f_openCommonPopUp(2, rowIndex, "F");
  }
};
scwin.gr_daily_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "staffNo") {
    scwin.f_openCommonPopUp(3, rowIndex, "F");
  } else if (columnId == "staffNm") {
    scwin.f_openCommonPopUp(4, rowIndex, "F");
  }
};
scwin.gr_inputEq_oneditend = async function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (oldValue == newValue) return;
  switch (columnId) {
    case "vehclShortCd":
      if (newValue != "" && newValue != oldValue) {
        await scwin.f_openCommonPopUp(7, rowIndex, 'T');
      } else if (newValue == "") {
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
    case "drvStaffNo1":
      if (newValue != "" && newValue != oldValue) {
        await scwin.f_openCommCdPopUp(rowIndex, columnId);
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, columnId, "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo1nm", "");
      }
      break;
    case "drvStaffNo2":
      if (newValue != "" && newValue != oldValue) {
        await scwin.f_openCommCdPopUp(rowIndex, columnId);
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, columnId, "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo2nm", "");
      }
      break;
    case "drvStaffNo3":
      if (newValue != "" && newValue != oldValue) {
        await scwin.f_openCommCdPopUp(rowIndex, columnId);
      } else if (newValue == "") {
        ds_inputEq.setCellData(rowIndex, columnId, "");
        ds_inputEq.setCellData(rowIndex, "drvStaffNo3nm", "");
      }
      break;
  }
};
scwin.gr_regular_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (oldValue == newValue) return;
  switch (columnId) {
    case "staffNo":
      if (newValue != "" && newValue != oldValue) {
        scwin.f_openCommonPopUp(1, rowIndex, "T");
      } else if (newValue == "") {
        ds_regular.setCellData(rowIndex, "staffNo", "");
        ds_regular.setCellData(rowIndex, "staffNm", "");
      }
      break;
    case "staffNm":
      if (newValue != "" && newValue != oldValue) {
        scwin.f_openCommonPopUp(2, rowIndex, "T");
      } else if (newValue == "") {
        ds_regular.setCellData(rowIndex, "staffNo", "");
        ds_regular.setCellData(rowIndex, "staffNm", "");
      }
      break;
  }
};
scwin.gr_fulltime_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (oldValue == newValue) return;
  switch (columnId) {
    case "staffNo":
      if (newValue != "" && newValue != oldValue) {
        scwin.f_openCommonPopUp(3, rowIndex, "T");
      } else if (newValue == "") {
        ds_fulltime.setCellData(rowIndex, "staffNo", "");
        ds_fulltime.setCellData(rowIndex, "staffNm", "");
      }
      break;
    case "staffNm":
      if (newValue != "" && newValue != oldValue) {
        scwin.f_openCommonPopUp(4, rowIndex, "T");
      } else if (newValue == "") {
        ds_fulltime.setCellData(rowIndex, "staffNo", "");
        ds_fulltime.setCellData(rowIndex, "staffNm", "");
      }
      break;
  }
};
scwin.gr_otherEq_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (oldValue == newValue) return;
  let rtnList;
  switch (columnId) {
    case "clntNm":
      if (newValue != "" && newValue != oldValue) {
        let param1 = "";
        let param2 = ds_otherEq.getCellData(rowIndex, "clntNm");
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveHeavyMachineryClntInfo', param1, param2, "T", null, null, null, null, null, 450, 500, null, null);
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_otherEq, rowIndex, "clntNo", "clntNm");
      } else if (newValue == "") {
        ds_otherEq.setCellData(rowIndex, "clntNo", "");
        ds_otherEq.setCellData(rowIndex, "clntNm", "");
      }
      break;
    case "clntNo":
      if (newValue != "" && newValue != oldValue) {
        let param1b = ds_otherEq.getCellData(rowIndex, "clntNo");
        let param2b = "";
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveHeavyMachineryClntInfo', param1b, param2b, "T", null, null, null, null, null, 450, 500, null, null);
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_otherEq, rowIndex, "clntNo", "clntNm");
      } else if (newValue == "") {
        ds_otherEq.setCellData(rowIndex, "clntNo", "");
        ds_otherEq.setCellData(rowIndex, "clntNm", "");
      }
      break;
  }
};
scwin.gr_otherEq_oncellclick = function (rowIndex, columnIndex, columnId) {
  let rowStatus = ds_otherEq.getRowStatus(rowIndex);
  if (rowStatus == "C") {
    gr_otherEq.setColumnReadOnly("eqKndCd", false);
    gr_otherEq.setColumnReadOnly("eqNrmCd", false);
  } else {
    gr_otherEq.setColumnReadOnly("eqKndCd", true);
    gr_otherEq.setColumnReadOnly("eqNrmCd", true);
  }
};
scwin.ds_condition_oncelldatachange = function (info) {
  if (info.colId == 'wrkDt') {
    let stDt = ica_wrkDt.getValue();
    if (stDt != "" && stDt.length == 8) {
      let year = parseInt(stDt.substr(0, 4), 10);
      let month = parseInt(stDt.substr(4, 2), 10) - 1;
      let day = parseInt(stDt.substr(6, 2), 10);
      let date = new Date(year, month, day);
      let payDate = new Date(date.getTime() + 1000 * 60 * 60 * 24);
      let yyyy = payDate.getFullYear().toString();
      let mm = (payDate.getMonth() + 1).toString();
      if (mm.length < 2) mm = "0" + mm;
      let dd = payDate.getDate().toString();
      if (dd.length < 2) dd = "0" + dd;
      let strPayDate = yyyy + mm + dd;
      ica_wrkDt2.setValue(strPayDate);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_shift1',search:'start',style:'width:180px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'종이거래명세서(청구서)'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_wrkDt',class:'',calendarValueType:'yearMonthDate',ref:'data:ds_condition2.wrkDt'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:70px;',id:'lc_shift2',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_wrkDt2',class:'',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:70px;',id:'lc_shift2',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'배치계획내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_plan',style:'',autoFit:'allColumn',id:'gr_plan',visibleRowNum:'4',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'berthCd',value:'선석코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'berthNm',value:'선석',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',value:'본선코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'vsslNm',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioClsNm',value:'수출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holdKndCd',value:'홀드종류',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'holdCnt',value:'홀드수',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslRmk',value:'제원',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ataDt',value:'입항일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'holdInfo',value:'홀드별 화물정보',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'holdRemain',value:'홀드별 잔량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsCd',value:'Shift',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStDt',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',value:'작업시작시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndDt',value:'작업종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',value:'작업종료시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planInfo',value:'예정물량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'commNm',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkGangCnt',value:'GANG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transCnt',value:'운송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'staffInfo',value:'인력',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqInfo',value:'장비',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cfmanEmpNo',value:'치프포맨',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cfmanEmpNm',value:'치프포맨',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'berthCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'berthNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holdKndCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'holdCnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslRmk',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ataDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'holdInfo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'holdRemain',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planInfo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkGangCnt',displayMode:'label',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transCnt',displayMode:'label',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'staffInfo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqInfo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cfmanEmpNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cfmanEmpNm',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'wrkGangCnt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'sum(\'transCnt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'소요요청내역',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hveqInfo',placeholder:'',style:'width: 250px;',ref:'data:ds_required.hveqInfo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_eqcntInfo',placeholder:'',style:'width:250px;',ref:'data:ds_required.eqcntInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인원',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_manInfo',placeholder:'',style:'width:150px;',ref:'data:ds_required.manInfo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_holdInfo',placeholder:'',style:'width:250px;',ref:'data:ds_required.holdInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'잔량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_holdRemain',placeholder:'',style:'width:150px;',ref:'data:ds_required.holdRemain'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'자사장비',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'타사장비',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'인원',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix col4'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자사장비(전체)',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_eq',style:'',autoFit:'allColumn',id:'gr_eq',visibleRowNum:'5',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'status',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'eqCd',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclShortCd',value:'단축번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'eqModelNm',value:'장비모델',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'eqKndCd',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'eqNrmCd',value:'장비규격',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'status',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclShortCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'eqModelNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqKndCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자사장비(미사용)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_unusedEq',id:'gr_unusedEq',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',value:'장비코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',value:'단축번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',value:'장비모델',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'장비종류',width:'140',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'eqNrmCd',inputType:'text',value:'장비규격',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',textAlign:'center',width:'140',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'100',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비인력',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_eqMan',id:'gr_eqMan',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',value:'이름',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',value:'직종',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',width:'80',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 70%'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'장비투입',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_stvArrangement',type:'button',class:'btn link'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비기준현황'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_SRPrint',type:'button',class:'btn link'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선기준현황'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비소요현황 발행'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_inputEq',style:'',id:'gr_inputEq',visibleRowNum:'15',class:'wq_gvw',autoFit:'allColumn',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',value:'작업일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etWrkHh',value:'투입시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',value:'장비코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclShortCd',value:'단축번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndCd',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',value:'장비규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo1',value:'인원1',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo1nm',value:'인원1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2',value:'인원2',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2nm',value:'인원2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3',value:'인원3',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3nm',value:'인원3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkDt',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etWrkHh',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'vehclShortCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo1',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo1nm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo2',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo2nm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'drvStaffNo3',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvStaffNo3nm',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lux_wrkIndictNo',class:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_shiftRetrieve',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자사장비배치 불러오기'}]}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_input',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자사장비배치현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_stateCrs',style:'',autoFit:'allColumn',id:'gr_state',visibleRowNum:'4',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'holdInfo',value:'홀드정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planInfo',value:'물량정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'remain',value:'잔량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsNm',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'hveqInfo_',value:'{mid(xkeyname_$$,0,20)}',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'holdInfo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planInfo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'remain',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'hveqInfo_',displayMode:'label',textAlign:'left',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',id:'column22',displayMode:'label',expression:'sum(\'hveqInfo_$$\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'타사장비 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_otherEq',style:'',autoFit:'allColumn',id:'gr_otherEq',visibleRowNum:'4',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption7',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'clntNo',value:'협력업체',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',value:'장비종류',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndCd',value:'장비규격',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmCd',value:'대수',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqHveqCnt',value:'작업단계',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'wrkStpCd',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stvWrkIndictNo',value:'코드',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',allowChar:'0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'clntNo',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'eqKndCd:eqKndNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqKnd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'eqNrmCd:eqNrmNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrm'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqHveqCnt',displayMode:'label',textAlign:'center',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'reqHveqCnt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lux_wrkIndictNo2',class:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_shiftRetrieve2',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타사장비배치 불러오기'}]}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자사장비배치현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_stateCrs',style:'',autoFit:'allColumn',id:'gr_regular',visibleRowNum:'4',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption8',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',value:'본선관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'staffNo',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'staffNm',value:'홀드정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occpgrdCd',value:'물량정보',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'occpgrdNm',value:'잔량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cfmanYn',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsNm',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'hveqInfo_$$',value:'{mid(xkeyname_$$,0,20)}',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'staffNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'staffNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occpgrdCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'occpgrdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'cfmanYn',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'hveqInfo_$$',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wifx col3'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'정규직',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_regular',style:'',autoFit:'allColumn',id:'gr_fulltime',visibleRowNum:'4',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption9',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'wrkStpCd',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'staffNo',value:'사번',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'staffNm',value:'이름',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'occpgrdCd',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdNm',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cfmanYn',value:'담당자',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'staffNo',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'staffNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'occpgrdCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cfmanYn',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_chiefForeman',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'치프포맨'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_relatedForeman',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관련포맨'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_saveRegular',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'상용직',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_fulltime',style:'',autoFit:'allColumn',id:'gr_daily',visibleRowNum:'4',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'wrkStpCd',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'staffNo',value:'사번',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'staffNm',value:'이름',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',id:'occpgrdCd',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdNm',value:'직급',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'staffNo',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'staffNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'occpgrdNm',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_saveFulltime',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'일용직',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인원수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:100px;',id:'txt_dailymanCnt',placeholder:'',class:'tar'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_input7',placeholder:'',class:'tar'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group29',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_daily',style:'',autoFit:'allColumn',id:'gr_state2',visibleRowNum:'2',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption12',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cvsslMgntNo',value:'작업단계',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslNm',value:'사번',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'holdInfo',value:'이름',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',id:'planInfo',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'remain',value:'직급',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'holdInfo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'planInfo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'remain',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_saveDaily',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인원배치현황',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_state2',id:'gr_state2',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',value:'본선관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',value:'본선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdInfo',inputType:'text',value:'홀드정보',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planInfo',inputType:'text',value:'물량정보',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remain',inputType:'text',value:'잔량',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsNm',inputType:'text',value:'시프트',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'allocStaff',inputType:'text',value:'인원정보',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdInfo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planInfo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remain',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'allocStaff',inputType:'text',width:'300',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column22',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]}]})