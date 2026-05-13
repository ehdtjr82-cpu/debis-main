/*amd /ui/ds/op/stvwrk/op_210_01_05b.xml 139863 032d83cc734f09e546c5db6e6ec1f1b2c833bb9939ff6b75e06c2b4c098e86cc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'staffNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'dtlOccptypeCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'gubun',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'eqCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'stvWrkIndictNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'cvsslMgntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStDt',name:'arvStDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvEndDt',name:'arvEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'wrkDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'wrkPlCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYm',name:'adptYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occpgrdCd',name:'occpgrdCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'wrkPlClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'stdYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'endYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaClsCd',name:'vacaClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'districtCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'checkValue',name:'checkValue',dataType:'text'}},{T:1,N:'w2:key',A:{id:'checkChief',name:'checkChief',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wagePeakOccptypClsCd',name:'wagePeakOccptypClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSeq',name:'작업',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypseCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'근무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'본선/',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlTskCntnCd',name:'업무내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yestWrkDt',name:'최종근무일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'npGubun',name:'북',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'occptypeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'wrkDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'eqCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'eqModelCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'eqModelNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totInputHhCnt',name:'totInputHhCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totInputMintCnt',name:'totInputMintCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtHhCnt',name:'realOprtHhCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtMintCnt',name:'realOprtMintCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmCd',name:'nesEqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformWrkImpleKndCd',name:'tformWrkImpleKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformEqPchsPcost',name:'tformEqPchsPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformEqPchsPcostRsn',name:'tformEqPchsPcostRsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdjmStdCd',name:'pchsAdjmStdCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'pchsAdptHhCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptMintCnt',name:'pchsAdptMintCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptShiftCnt',name:'pchsAdptShiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'wrkWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'pchsClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'pchsClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'copCoClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'copCoClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'upr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPcost',name:'pchsPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlPchsPcost',name:'ctrlPchsPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlPchsPcostRsn',name:'ctrlPchsPcostRsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtgCost',name:'prtgCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'pchsDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'pchsDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'targetInfo',name:'targetInfo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayInfo',name:'dayInfo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'impExpClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'posnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'cvsslMgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictKndCd',name:'wrkIndictKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'wrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'drvStaffNo1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'drvStaffNo2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'drvStaffNo3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'vsslNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdKndCd',name:'holdKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdKndNm',name:'holdKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdCnt',name:'holdCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'etaDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ataDt',name:'ataDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'etdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atdDt',name:'atdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'berthCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'berthNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'ioClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsNm',name:'ioClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'holdInfo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'holdNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volSeq',name:'volSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'wrkQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'wrkCbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'stsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stopRsnCd',name:'stopRsnCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'refNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'vsslCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'wrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'weatherCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfWorkCnt',name:'bfWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnhWorkCnt',name:'lnhWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dnrWorkCnt',name:'dnrWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprWorkCnt',name:'sprWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'wrkPlClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'singleCnt',name:'singleCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveCnt',name:'moveCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emerCnt',name:'emerCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'dailymanCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipDayCnt',name:'iipDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipNgtCnt',name:'iipNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpDayCnt',name:'inpDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpNgtCnt',name:'inpNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpSumCnt',name:'inpSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipSumCnt',name:'iipSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpDayCnt',name:'ihpDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpNgtCnt',name:'ihpNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpSumCnt',name:'ihpSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypDayCnt',name:'iypDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypNgtCnt',name:'iypNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypSumCnt',name:'iypSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'sumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftNm',name:'shiftNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'districtNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCost',name:'totalCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptTime',name:'pchsAdptTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtTime',name:'realOprtTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opSellAmt',name:'opSellAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilVol',name:'oilVol',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCost',name:'oilCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totMaintenanceAmt',name:'totMaintenanceAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageCost',name:'wageCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ym',name:'ym',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCost',name:'totCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'adptYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'missingAmt',name:'missingAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'districtCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsCd',name:'occptypeClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsNm',name:'occptypeClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalExtdAmt',name:'totalExtdAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eduAmt',name:'eduAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unionAmt',name:'unionAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'occpgrdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftCnt',name:'shiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'addAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threeShiftCnt',name:'threeShiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threeShiftAmt',name:'threeShiftAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holidayAmt',name:'holidayAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialCnt',name:'specialCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holidayCnt',name:'holidayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdCnt',name:'extdCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdAmt',name:'extdAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'manCnt',name:'manCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'standardSal',name:'standardSal',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfShiftCnt',name:'tfShiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfShiftAmt',name:'tfShiftAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emerAmt',name:'emerAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherAmt',name:'weatherAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'singleAmt',name:'singleAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveAmt',name:'moveAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'etcAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalAmt',name:'totalAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'payAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialAmt',name:'specialAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffCnt',name:'staffCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'standardCnt',name:'standardCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weekday',name:'weekday',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workHhDiff',name:'workHhDiff',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitingCnt',name:'waitingCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitingAmt',name:'waitingAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day1Dextd',name:'day1Dextd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaClsCd',name:'name190',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_npGubun',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workTime',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSeq',name:'작업',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypseCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'근무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'본선/',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlTskCntnCd',name:'업무내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yestWrkDt',name:'최종근무일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'npGubun',name:'북',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'occptypeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'wrkDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'eqCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'eqModelCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'eqModelNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totInputHhCnt',name:'totInputHhCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totInputMintCnt',name:'totInputMintCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtHhCnt',name:'realOprtHhCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtMintCnt',name:'realOprtMintCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmCd',name:'nesEqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformWrkImpleKndCd',name:'tformWrkImpleKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformEqPchsPcost',name:'tformEqPchsPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tformEqPchsPcostRsn',name:'tformEqPchsPcostRsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdjmStdCd',name:'pchsAdjmStdCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'pchsAdptHhCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptMintCnt',name:'pchsAdptMintCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptShiftCnt',name:'pchsAdptShiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'wrkWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'pchsClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'pchsClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'copCoClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'copCoClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'upr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPcost',name:'pchsPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlPchsPcost',name:'ctrlPchsPcost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlPchsPcostRsn',name:'ctrlPchsPcostRsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtgCost',name:'prtgCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'pchsDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'pchsDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'targetInfo',name:'targetInfo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayInfo',name:'dayInfo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'impExpClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'posnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'cvsslMgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictKndCd',name:'wrkIndictKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'wrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo1',name:'drvStaffNo1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo2',name:'drvStaffNo2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvStaffNo3',name:'drvStaffNo3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'vsslNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdKndCd',name:'holdKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdKndNm',name:'holdKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdCnt',name:'holdCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'etaDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ataDt',name:'ataDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'etdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atdDt',name:'atdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'berthCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'berthNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'ioClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsNm',name:'ioClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'holdInfo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'holdNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volSeq',name:'volSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'wrkQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'wrkCbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'stsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stopRsnCd',name:'stopRsnCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'refNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'vsslCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'wrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'weatherCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfWorkCnt',name:'bfWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnhWorkCnt',name:'lnhWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dnrWorkCnt',name:'dnrWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprWorkCnt',name:'sprWorkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'wrkPlClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'singleCnt',name:'singleCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveCnt',name:'moveCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emerCnt',name:'emerCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'dailymanCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipDayCnt',name:'iipDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipNgtCnt',name:'iipNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpDayCnt',name:'inpDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpNgtCnt',name:'inpNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpSumCnt',name:'inpSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipSumCnt',name:'iipSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpDayCnt',name:'ihpDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpNgtCnt',name:'ihpNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpSumCnt',name:'ihpSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypDayCnt',name:'iypDayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypNgtCnt',name:'iypNgtCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypSumCnt',name:'iypSumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'sumCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftNm',name:'shiftNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'districtNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCost',name:'totalCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptTime',name:'pchsAdptTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOprtTime',name:'realOprtTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opSellAmt',name:'opSellAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilVol',name:'oilVol',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCost',name:'oilCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totMaintenanceAmt',name:'totMaintenanceAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageCost',name:'wageCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ym',name:'ym',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCost',name:'totCost',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'adptYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'missingAmt',name:'missingAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'districtCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsCd',name:'occptypeClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsNm',name:'occptypeClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalExtdAmt',name:'totalExtdAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eduAmt',name:'eduAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unionAmt',name:'unionAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'occpgrdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftCnt',name:'shiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'addAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threeShiftCnt',name:'threeShiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threeShiftAmt',name:'threeShiftAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holidayAmt',name:'holidayAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialCnt',name:'specialCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holidayCnt',name:'holidayCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdCnt',name:'extdCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdAmt',name:'extdAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'manCnt',name:'manCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'standardSal',name:'standardSal',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfShiftCnt',name:'tfShiftCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfShiftAmt',name:'tfShiftAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emerAmt',name:'emerAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherAmt',name:'weatherAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'singleAmt',name:'singleAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveAmt',name:'moveAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'etcAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalAmt',name:'totalAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'payAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialAmt',name:'specialAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffCnt',name:'staffCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'standardCnt',name:'standardCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weekday',name:'weekday',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workHhDiff',name:'workHhDiff',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitingCnt',name:'waitingCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitingAmt',name:'waitingAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'day1Dextd',name:'day1Dextd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_wrkStpCd_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'upperWrkStpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lvl',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlanTrgtYn',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wkrStp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_wkrStp_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tskCntn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'cdEngNmAbbr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'cdDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'grpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'upperCdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'cdNmAbbr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'fltrCd3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'cdEngNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'upperCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'sortSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'fltrCd1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'fltrCd2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'useYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_tskCntn_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_tskCntn',id:'ldt_tskCntn'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_wkrStp',id:'ldt_wkrStp'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvStaffWrkResultListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_staff","key":"OUT_DS2"},{"id":"ds_staff2","key":"OUT_DS3"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_staff","key":"OUT_DS2"},{"id":"ds_staff2","key":"OUT_DS3"},{"id":"ds_wrkList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvStaffWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ds.op.stvwrk.ConfirmStvStaffWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ds.op.stvwrk.CancelStvStaffWrkResultConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_checkNorthPort',action:'/ds.op.stvwrk.CheckWrkIndictIncheonNorthPortCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_npGubun","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ds.op.stvwrk.SaveStvStaffWrkResultRsnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStpCd',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_wrkStpCd_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStp',action:'/ds.co.RetreiveWrkStpCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_wkrStp_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tskCntn',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_tskCntn_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_01_05b 
// 이름     : 정규직 실적 확인
// 경로     : 물류/하역(인천)/실적/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-24
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd"); // 물류 점소 코드
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vwrkStDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자))
  scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)
  scwin.v_workClsCd = "";
  scwin.b_workClsCd = "";
  scwin.bOnPopUp = false;
  const codeOptions = [{
    grpCd: "OP160",
    compID: "gr_wrkList:occptypseCd"
  }, {
    grpCd: "OP161",
    compID: "gr_wrkList:dtlOccptypeCd"
  },
  // { grpCd : "OP268", compID : "gr_wrkList:occpgrdCd" },   
  {
    grpCd: "OP220",
    compID: "gr_wrkList:workClsCd"
  }, {
    grpCd: "OP117",
    compID: "gr_wrkList:shiftClsCd"
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
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;

  //작업단계콤보 세팅
  ds_wrkStpCd_search.set("upperWrkStpCd", "01");
  ds_wrkStpCd_search.set("lvl", 3);
  ds_wrkStpCd_search.set("wrkPlanTrgtYn", 1);
  var rs = await $c.sbm.execute($p, sbm_wrkStpCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_wrkStpCd.setJSON(rs.responseJSON.GAUCE);
  }
  ;

  //작업단계
  ds_wkrStp_search.set("upperCd", "99");
  var rs = await $c.sbm.execute($p, sbm_wrkStp);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_wkrStp.setJSON(rs.responseJSON.GAUCE);

    //  <param name=SortExpr    value="+wrkStpCd+wrkStpNm">
    var options = {};
    options.sortIndex = "wrkStpCd wrkStpNm";
    options.sortOrder = "1 1";
    ds_wkrStp.multisort(options);
  }
  ;

  //업무내용
  ds_tskCntn_search.set("grpCd", "OP221");
  var rs = await $c.sbm.execute($p, sbm_tskCntn);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_tskCntn.setJSON(rs.responseJSON.GAUCE);
  }
  ;
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkStDt.setValue(scwin.vCurDate);
  ica_printDt.setValue(scwin.vCurDate);
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();

  // acb_lobranCd.setValue("4AA");
  // ica_wrkStDt.setValue("20200101");
  // ica_printDt.setValue("20200101");
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ica_wrkStDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var modifyRowCnt = ds_wrkList.getModifiedIndex().length;
  if (modifyRowCnt > 0) {
    // if (!await $c.gus.cfValidate([gr_wrkList],"",false) ) return;		
    var check = await $c.gus.cfValidate($p, [gr_wrkList], null, true);
    if (!check) return false;
    if (!(await scwin.f_checkVacationDate())) {
      return;
    }
    for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
      if (ds_wrkList.getRowStatus(i) != "R" && ds_wrkList.getCellData(i, "status") != "확정") {
        //	if (ds_wrkList.getCellData(i,"workClsCd")=="" || ds_wrkList.getCellData(i,"workClsCd")==null){
        //		alert("근무구분 입력은 필수입니다.");
        //		return false;
        //	} 
        if (!(await scwin.f_ChkConfirm(i))) {
          return;
        }
        if (ds_wrkList.getCellData(i, "workClsCd") == "A" && ds_wrkList.getCellData(i, "stvWrkIndictNo") == "") {
          await $c.win.alert($p, "근무구분이 배치인 경우 작업지시번호는 필수입니다.");
          return false;
        }
        if (ds_wrkList.getCellData(i, "workClsCd") == "A" && ds_wrkList.getCellData(i, "wrkStpCd") == "") {
          await $c.win.alert($p, "근무구분이 배치인 경우 작업단계는 필수입니다.");
          return false;
        }
        //특정 인원에 대한 특이사항 입력 
        if (ds_wrkList.getCellData(i, "staffNo") == "920409" || ds_wrkList.getCellData(i, "staffNo") == "913907") {
          if (ds_wrkList.getCellData(i, "workClsCd") == "U") {
            ds_wrkList.setCellData(i, "rmk", "안전순찰");
          }
        }
        if (ds_wrkList.getCellData(i, "staffNo") == "872913" || ds_wrkList.getCellData(i, "staffNo") == "030382") {
          if (ds_wrkList.getCellData(i, "workClsCd") == "U") {
            ds_wrkList.setCellData(i, "rmk", "도구반 지원");
          }
        }
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["하역인원실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save2 = async function () {
  var modifyRowCnt = ds_wrkList.getModifiedIndex().length;
  if (modifyRowCnt > 0) {
    // if (!await $c.gus.cfValidate([gr_wrkList]) ) return;		
    if (!(await scwin.f_checkVacationDate())) {
      return;
    }
    for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
      if (ds_wrkList.getRowStatus(i) != "R") {
        if (ds_wrkList.getCellData(i, "status") == "무실적") {
          await $c.win.alert($p, "상태가 무실적인 경우 특이사항을 입력할 수 없습니다.");
          // ds_wrkList.UndoMarked();
          ds_wrkList.undoRow(i);
          return;
        } else {
          if (!(await scwin.f_ChkConfirm(i))) {
            return;
          }
          if (ds_wrkList.getCellData(i, "workClsCd") == "A" && ds_wrkList.getCellData(i, "stvWrkIndictNo") == "") {
            await $c.win.alert($p, "근무구분이 배치인 경우 작업지시번호는 필수입니다.");
            return false;
          }
          if (ds_wrkList.getCellData(i, "workClsCd") == "A" && ds_wrkList.getCellData(i, "wrkStpCd") == "") {
            await $c.win.alert($p, "근무구분이 배치인 경우 작업단계는 필수입니다.");
            return false;
          }
          if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
            $c.sbm.execute($p, sbm_save2);
          }
        }
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["하역인원실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 확정  버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Confirm = async function () {
  var modifyRowCnt = ds_wrkList.getModifiedIndex().length;
  if (modifyRowCnt > 0) {
    // if (!await $c.gus.cfValidate([gr_wrkList]) ) return;		
    var check = await $c.gus.cfValidate($p, [gr_wrkList], null, true);
    if (!check) return false;
    var chk = 0;
    for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
      if (ds_wrkList.getCellData(i, "chk") == "T" && ds_wrkList.getCellData(i, "status") == "미확정") {
        chk++;
      }
    }
    if (chk == 0) {
      await $c.win.alert($p, "미확정 내역인 실적을 선택하여야 확정할 수 있습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_confirm);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["하역인원실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 확정  취소 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  var modifyRowCnt = ds_wrkList.getModifiedIndex().length;
  if (modifyRowCnt > 0) {
    var chk1 = 0;
    var chk2 = 0;
    for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
      if (ds_wrkList.getCellData(i, "chk") == "T" && ds_wrkList.getCellData(i, "status") == "확정") {
        chk1++;
      }
      if (ds_wrkList.getCellData(i, "chk") == "T" && ds_wrkList.getCellData(i, "status") != "확정") {
        chk2++;
      }
    }
    if (chk2 > 0) {
      await $c.win.alert($p, "상태가 확정인 실적만 확정취소가 가능합니다.");
      return false;
    }
    if (chk1 == 0) {
      await $c.win.alert($p, "확정된 실적을 선택하여야 확정취소 할 수 있습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_cancel);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["하역인원실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function (gbn) {
  switch (gbn) {
    case '1':
      var rowIndex = ds_wrkList.insertRow();
      ds_wrkList.setRowPosition(rowIndex);
      gr_wrkList.setFocusedCell(rowIndex, 0);
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "status", "신규");
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStDt", ica_wrkStDt.getValue());
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndDt", ica_wrkStDt.getValue());
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "wrkStpCd", "004");
      break;
  }
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_CopyRow = async function (gbn) {
  switch (gbn) {
    case '1':
      ds_wrkList.insertRow(ds_wrkList.getRowPosition() + 1);
      ds_wrkList.setRowPosition(ds_wrkList.getRowPosition() + 1);
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "status", "신규");
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workDt", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "workDt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "staffNo"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "staffNm"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "occptypeCd", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "occptypeCd"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "dtlOccptypeCd", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "dtlOccptypeCd"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "occpgrdCd", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "occpgrdCd"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStDt", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "workDt"));
      if (ds_wrkList.getCellData(ds_wrkList.getRowPosition(), "staffNo") == ds_wrkList.getCellData(ds_wrkList.getRowPosition() + 1, "staffNo")) {
        if (ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "workEndHh") == ds_wrkList.getCellData(ds_wrkList.getRowPosition() + 1, "workStHh")) {
          ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", "");
        } else {
          ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "workEndHh"));
        }
      } else {
        ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "workEndHh"));
      }
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndDt", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "workDt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndHh", "");
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "yestWrkDt", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "yestWrkDt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "npGubun", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "npGubun"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "vacaClsCd", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "vacaClsCd"));
      if (ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "wrkStpCd") != "") {
        ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "wrkStpCd", ds_wrkList.getCellData(ds_wrkList.getRowPosition() - 1, "wrkStpCd"));
      } else {
        ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "wrkStpCd", "004");
      }
      break;
    case '2':
      var staffChk = 0;
      var staffChk2 = 0;
      var staffChk3 = "F";
      var staffNo = "";
      var wrkChk = 0;
      for (var j = 0; j < ds_staff.getRowCount(); j++) {
        if (ds_staff.getCellData(j, "chk") == "T") {
          staffChk++;
        }
      }
      for (var j = 0; j < ds_staff2.getRowCount(); j++) {
        if (ds_staff2.getCellData(j, "chk") == "T") {
          staffChk2++;
        }
      }
      for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          if (staffChk3 == "F") {
            staffChk3 = "T";
            staffNo = ds_wrkList.getCellData(i, "staffNo");
          } else {
            if (staffNo != ds_wrkList.getCellData(i, "staffNo")) {
              await $c.win.alert($p, "한명의 실적에 대해서만 지시복사를 할 수 있습니다.");
              return false;
            }
          }
          wrkChk++;
        }
      }
      if (staffChk == 0 && staffChk2 == 0) {
        await $c.win.alert($p, "지시복사를 할 대상을 아래 인원 그리드에서 1명 이상 선택해 주세요.");
        return false;
      }
      if (wrkChk == 0) {
        await $c.win.alert($p, "지시복사를 하기 위해 하역인원실적내역에서 1개 이상의 지시를 선택해 주세요");
        return false;
      }
      for (var j = 0; j < ds_staff.getRowCount(); j++) {
        if (ds_staff.getCellData(j, "chk") == "T" && ds_staff.getCellData(j, "staffNo") != staffNo) {
          for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
            if (ds_wrkList.getCellData(i, "chk") == "T") {
              var rowIndex = ds_wrkList.insertRow();
              ds_wrkList.setRowPosition(rowIndex);
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "status", "신규");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workDt", ds_wrkList.getCellData(i, "workDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", ds_staff.getCellData(j, "staffNo"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", ds_staff.getCellData(j, "staffNm"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "occptypeCd", "");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "dtlOccptypeCd", "");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "occpgrdCd", "");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "stvWrkIndictNo", ds_wrkList.getCellData(i, "stvWrkIndictNo"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "info", ds_wrkList.getCellData(i, "info"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workClsCd", ds_wrkList.getCellData(i, "workClsCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "shiftClsCd", ds_wrkList.getCellData(i, "shiftClsCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "wrkStpCd", ds_wrkList.getCellData(i, "wrkStpCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStDt", ds_wrkList.getCellData(i, "workStDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", ds_wrkList.getCellData(i, "workStHh"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndDt", ds_wrkList.getCellData(i, "workEndDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndHh", ds_wrkList.getCellData(i, "workEndHh"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "dtlTskCntnCd", ds_wrkList.getCellData(i, "dtlTskCntnCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "yestWrkDt", ds_wrkList.getCellData(i, "yestWrkDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "npGubun", ds_wrkList.getCellData(i, "npGubun"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "vacaClsCd", ds_wrkList.getCellData(i, "vacaClsCd"));
            }
          }
        }
      }
      for (var j = 0; j < ds_staff2.getRowCount(); j++) {
        if (ds_staff2.getCellData(j, "chk") == "T" && ds_staff2.getCellData(j, "staffNo") != staffNo) {
          for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
            if (ds_wrkList.getCellData(i, "chk") == "T") {
              var rowIndex = ds_wrkList.insertRow();
              ds_wrkList.setRowPosition(rowIndex);
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "status", "신규");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workDt", ds_wrkList.getCellData(i, "workDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", ds_staff2.getCellData(j, "staffNo"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", ds_staff2.getCellData(j, "staffNm"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "occptypeCd", "");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "dtlOccptypeCd", "");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "occpgrdCd", "");
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "stvWrkIndictNo", ds_wrkList.getCellData(i, "stvWrkIndictNo"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "info", ds_wrkList.getCellData(i, "info"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workClsCd", ds_wrkList.getCellData(i, "workClsCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "shiftClsCd", ds_wrkList.getCellData(i, "shiftClsCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "wrkStpCd", ds_wrkList.getCellData(i, "wrkStpCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStDt", ds_wrkList.getCellData(i, "workStDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", ds_wrkList.getCellData(i, "workStHh"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndDt", ds_wrkList.getCellData(i, "workEndDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndHh", ds_wrkList.getCellData(i, "workEndHh"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "dtlTskCntnCd", ds_wrkList.getCellData(i, "dtlTskCntnCd"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "yestWrkDt", ds_wrkList.getCellData(i, "yestWrkDt"));
              ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "npGubun", ds_wrkList.getCellData(i, "npGubun"));
            }
          }
        }
      }
      for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
        ds_wrkList.setCellData(i, "chk", "F");
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_DeleteRow = async function (gbn) {
  switch (gbn) {
    case '1':
      if (ds_wrkList.getCellData(ds_wrkList.getRowPosition(), "status") == "확정") {
        await $c.win.alert($p, "확정된 내역은 삭제할 수 없습니다.");
        return false;
      } else {
        if (ds_wrkList.getRowStatus(ds_wrkList.getRowPosition()) == "C") {
          ds_wrkList.removeRow(ds_wrkList.getRowPosition());
        } else {
          ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "chk", "F");
          gr_wrkList.setCellReadOnly(ds_wrkList.getRowPosition(), "chk", true);
          ds_wrkList.deleteRow(ds_wrkList.getRowPosition());
        }
      }
      break;
    case '2':
      // for (var i = ds_wrkList.getRowCount()-1 ; i >= 0 ; i--){
      for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          if (ds_wrkList.getCellData(i, "status") == "확정" || ds_wrkList.getCellData(i, "status") == "완료") {
            await $c.win.alert($p, "확정이나 완료된 내역은 삭제할 수 없습니다.");
            return false;
          } else {
            if (ds_wrkList.getRowStatus(i) == "C") {
              ds_wrkList.removeRow(i);
            } else {
              ds_wrkList.setCellData(i, "chk", "F");
              gr_wrkList.setCellReadOnly(i, "chk", true);
              ds_wrkList.deleteRow(i);
            }
          }
        }
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 선택 취소
//------------------------------------------------------------------------- 
scwin.f_CancelRow = function (gbn) {
  switch (gbn) {
    case '1':
      for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          ds_wrkList.setCellData(i, "chk", "F");
        }
      }
      break;
  }
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
  var vDay = "점소 | " + acb_lobranCd.getText(true) + " | " + "작업일자 | " + ica_wrkStDt.getValue();
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
    textAlign: "center"
    // , fontSize    : "12pt"
    ,

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
    // , fontSize    : "12pt"
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var arrParam = new Array();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = acb_lobranCd.getValue(); //점소코드
      arrParam[3] = acb_lobranCd.getValue(); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = acb_dtlOccptypeCd.getValue(); //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ica_wrkStDt.getValue(); //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      // rtnList = window.showModalDialog("/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.jsp", arrParam, "dialogHeight:450px; dialogWidth:530px; resizable=no; help:no; status:no; center=true; "); 	
      // 인력검색화면
      let win_url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
      let opts = {
        id: "searchEmpPop",
        popupName: "인력검색",
        modal: true,
        type: "browserPopup",
        width: 760,
        height: 696,
        title: "인력검색"
      };
      var rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);

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

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        ed_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(''); //사원코드
        ed_staffNm.setValue(''); //사원명
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------  
scwin.f_openGridCommonPopUp = async function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건
  var pCode = "";
  var pName = "";
  var arrParam = new Array();
  var sWinCloseTF = pClose == null ? "T" : pClose;
  switch (gubun) {
    case 1:
      //정규직			
      pCode = ds_wrkList.getCellData(row, "staffNo");
      pName = "";
      pWhere = acb_lobranCd.getValue() + ',' + ica_wrkStDt.getValue();
      udc_grdPopup.setSelectId('retrieveStvArrangementRegularManList');
      udc_grdPopup.cfCommonPopUp(function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", rtnList[0]);
          ds_wrkList.setCellData(row, "staffNm", rtnList[1]);
          ds_wrkList.setCellData(row, "occpgrdCd", rtnList[2]);
          ds_wrkList.setCellData(row, "occptypeCd", rtnList[4]);
          ds_wrkList.setCellData(row, "dtlOccptypeCd", rtnList[6]);
          ds_wrkList.setCellData(row, "yestWrkDt", rtnList[8]);
        } else {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
          ds_wrkList.setCellData(row, "yestWrkDt", "");
        }
        if (scwin.onEditEndYn) {
          scwin.onEditEndYn = false;
          scwin.f_WorkTimeSet(row);
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
      pCode = "";
      pName = ds_wrkList.getCellData(row, "staffNm");
      pWhere = acb_lobranCd.getValue() + ',' + ica_wrkStDt.getValue();
      udc_grdPopup.setSelectId('retrieveStvArrangementRegularManList');
      udc_grdPopup.cfCommonPopUp(function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", rtnList[0]);
          ds_wrkList.setCellData(row, "staffNm", rtnList[1]);
          ds_wrkList.setCellData(row, "occpgrdCd", rtnList[2]);
          ds_wrkList.setCellData(row, "occptypeCd", rtnList[4]);
          ds_wrkList.setCellData(row, "dtlOccptypeCd", rtnList[6]);
          ds_wrkList.setCellData(row, "yestWrkDt", rtnList[8]);
        } else {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
          ds_wrkList.setCellData(row, "yestWrkDt", "");
        }
        if (scwin.onEditEndYn) {
          scwin.onEditEndYn = false;
          scwin.f_WorkTimeSet(row);
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
  }
};

//-------------------------------------------------------------------------
// 로컬팝업조회
//-------------------------------------------------------------------------
scwin.f_CommonPopUp = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  var sW = pW == null ? "550px; " : pW + "px; ";
  var sH = pH == null ? "460px; " : pH + "px; ";
  var rtnList = new Array();
  var iDispCnt = null;
  var sTopLeft = null;
  var sWidthHeight = null;
  var sFeatures = null;
  if (pSelectID == null || pSelectID == "") {
    await $c.win.alert($p, "SELECT ID는 필수 항목 입니다.");
    return;
  }
  if (pCode.substr(0, 1) == '%' || pName.substr(0, 1) == '%') {
    await $c.win.alert($p, "검색어 첫번째문자로 % 는 올 수 없습니다");
    return;
  }
  iDispCnt = pDispCnt == null ? "0" : pDispCnt;
  if (parseInt(iDispCnt) > 10) {
    await $c.win.alert($p, "Display개수는(MAX=10)개 까지 가능 합니다.");
    return;
  }
  if (pTop != null) {
    sTopLeft = "dialogTop:" + pTop + "px; " + "dialogLeft:" + pLeft + "px; ";
  }
  sWidthHeight = "dialogWidth:" + sW + "dialogHeight:" + sH;
  sFeatures = sWidthHeight + " " + sTopLeft + " " + "center:Yes; help:No; resizable:No; status:No; scroll:No";
  switch (pSelectID) {
    case 'retrieveWrkIndictNoList':
      // 작업지시번호
      rtnList = await scwin.retrieveWrkIndictNoList(pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo);
      break;
    default:
      await $c.win.alert($p, "XML SelectID 오류!!!");
      break;
  }
  return rtnList;
};

//-------------------------------------------------------------------------
// 작업지시번호팝업
//-------------------------------------------------------------------------
scwin.retrieveWrkIndictNoList = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  var iDispCnt = pDispCnt == null ? "2" : pDispCnt;
  var bWinCloseTF = pWinCloseTF == null ? "F" : pWinCloseTF;
  var bExistTF = pExistTF == null ? "F" : pExistTF;
  var bAllSearchTF = pAllSearchTF == null ? "T" : pAllSearchTF;
  var bWrkDtTF = pWrkDtTF == null ? "F" : pWrkDtTF;
  var sTitle = null;
  var sWidth = null;
  var sHidden = null;
  var sURL = null;
  var rtnList = new Array();
  var arrParm = new Array();

  // 타이틀,조회조건Title1,조회조건Title2,XML_SELECT_ID,PopupClose유무(T/F),Display칼럼개수,중복체크여부,전체검색여부
  arrParm[0] = new Array("하역작업지시번호 검색", "작업지시구분", "작업일자", pSelectID, bWinCloseTF, iDispCnt, bExistTF, bAllSearchTF, bWrkDtTF);
  if (pWtitleSearch != null) {
    var strArr = pWtitleSearch.advancedSplit(",", "t");
    if (strArr != null) {
      arrParm[0][0] = strArr[0];
      arrParm[0][1] = strArr[1];
      arrParm[0][2] = strArr[2];
    }
  }
  arrParm[1] = new Array(pCode, pName, pWrkIndictNo, pCvsslMgntNo); //PopUP Parameter-->코드,명

  // sURL = "/ds/op/wrkplan/stvwrkplan/op_204_02_08p.jsp?paramTitle="	+ arrParm[0][0];
  // if (bExistTF == "T" )
  //     rtnList	= window.showModalDialog(sURL,arrParm,"dialogTop:1050px; dialogLeft:1400px; dialogWidth:0px; dialogHeight:0px; help:No; resizable:No; status:No; scroll:No");
  // else	
  //     rtnList	= window.showModalDialog(sURL,arrParm,sFeatures);
  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_02_08p.xml";
  let opts = {
    id: "workOrderPop",
    popupName: arrParm[0][0],
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 600,
    title: arrParm[0][0]
  };
  var rtnList = await $c.win.openPopup($p, win_url, opts, arrParm);
  return rtnList;
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

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 작업시간 Validation
//-------------------------------------------------------------------------  
scwin.f_checkVacationDate = async function () {
  var staffNo = "";
  for (var i = 1; i <= ds_wrkList.getRowCount(); i++) {
    if (ds_wrkList.getCellData(i - 1, "status") == "미확정" || ds_wrkList.getCellData(i - 1, "status") == "신규") {
      staffNo = ds_wrkList.getCellData(i - 1, "staffNo");
      ds_workTime.removeAll();
      for (var j = 1; j <= ds_wrkList.getRowCount(); j++) {
        if (ds_wrkList.getCellData(j - 1, "staffNo") == staffNo) {
          if (ds_wrkList.getCellData(j - 1, "status") == "미확정" || ds_wrkList.getCellData(j - 1, "status") == "신규") {
            // scwin.f_CopyDataRow(ds_wrkList, ds_workTime, j);
            ds_workTime.setJSON([ds_wrkList.getRowJSON(j - 1)], true);
          }
        }
      }
      var wrkDt = ica_wrkStDt.getValue();
      var wrkStDt;
      var wrkStHh;
      var wrkStMm;
      var wrkEndDt;
      var wrkEndHh;
      var wrkEndMm;
      var wrkStDtm;
      var wrkEndDtm;
      for (var k = 1; k <= ds_workTime.getRowCount(); k++) {
        var m = 0;
        var n = 0;
        for (var l = 1; l <= ds_wrkList.getRowCount(); l++) {
          n++;
          if (ds_wrkList.getCellData(l - 1, "staffNo") == staffNo) {
            m++;
          }
          if (m == k) {
            break;
          }
        }
        wrkStDt = ds_workTime.getCellData(k - 1, "workStDt");
        wrkStHh = ds_workTime.getCellData(k - 1, "workStHh");
        wrkStMm = ds_workTime.getCellData(k - 1, "workStHh").substring(2, 4);
        wrkEndDt = ds_workTime.getCellData(k - 1, "workEndDt");
        wrkEndHh = ds_workTime.getCellData(k - 1, "workEndHh");
        wrkEndMm = ds_workTime.getCellData(k - 1, "workEndHh").substring(2, 4);
        wrkStDtm = wrkStDt + wrkStHh;
        wrkEndDtm = wrkEndDt + wrkEndHh;
        if (wrkStMm != "00" && wrkStMm != "30") {
          await $c.win.alert($p, n + "번째의 시간은 30분 단위로 입력 가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workStHh");
          gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
          return false;
        }
        if (wrkEndMm != "00" && wrkEndMm != "30") {
          await $c.win.alert($p, n + "번째의 시간은 30분 단위로 입력 가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workEndHh");
          gr_wrkList.setFocusedCell(n - 1, "workEndHh", true);
          return false;
        }
        if (ds_workTime.getCellData(k - 1, "workStHh").substr(0, 2) > "23") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          // gr_wrkList.SetColumn("workStHh");
          gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workStHh").substr(2, 2) > "59") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          // gr_wrkList.SetColumn("workStHh");
          gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(0, 2) > "24") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          // gr_wrkList.SetColumn("workEndHh");
          gr_wrkList.setFocusedCell(n - 1, "workEndHh", true);
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(0, 2) == "00" && ds_workTime.getCellData(k - 1, "workEndHh").substr(2, 2) == "00") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          // gr_wrkList.SetColumn("workEndHh");
          gr_wrkList.setFocusedCell(n - 1, "workEndHh", true);
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(0, 2) == "24" && ds_workTime.getCellData(k - 1, "workEndHh").substr(2, 2) > "00") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          // gr_wrkList.SetColumn("workEndHh");
          gr_wrkList.setFocusedCell(n - 1, "workEndHh", true);
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(2, 2) > "59") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          // gr_wrkList.SetColumn("workEndHh");
          gr_wrkList.setFocusedCell(n - 1, "workEndHh", true);
          return;
        }

        //입력한 작업시작일자가 조회일자이후인가
        if (wrkDt > wrkStDt) {
          await $c.win.alert($p, n + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workStDt");
          gr_wrkList.setFocusedCell(n - 1, "workStDt", true);
          return false;
        }

        //입력한 작업시작일자가 하루를 초과하는가

        var diffDay = $c.date.diffDate($p, wrkDt, wrkStDt);
        if (diffDay > 1) {
          await $c.win.alert($p, n + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workStDt");
          gr_wrkList.setFocusedCell(n - 1, "workStDt", true);
          return false;
        }

        //전일작업종료일자			
        var yestWrkDtm;
        var yestWrkDt;
        var yestWrkHh;
        var staffNo;
        yestWrkDtm = ds_wrkList.getCellData(k - 1, "yestWrkDt");
        yestWrkDt = ds_wrkList.getCellData(k - 1, "yestWrkDt").substring(0, 8);
        yestWrkHh = ds_wrkList.getCellData(k - 1, "yestWrkDt").substring(8, 4);
        staffNm = ds_wrkList.getCellData(k - 1, "staffNm");

        //작업시작시간이 전일 작업종료일자 이후 인가
        if (yestWrkDt != "") {
          if (yestWrkDtm > wrkStDtm) {
            if (yestWrkHh > wrkStHh) {
              await $c.win.alert($p, staffNm + "의 작업시작시간이 전일 작업종료시간 이전입니다.");
              // gr_wrkList.SetScrolling(n, 1); 
              // gr_wrkList.ColSelect = "true";
              // gr_wrkList.focus();
              // gr_wrkList.SetColumn("workStHh");
              gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
              return false;
            }
          }
        }

        //작업시작일자가 작업종료일자 이후 인가
        if (wrkStDt > wrkEndDt) {
          //await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
          await $c.win.alert($p, n + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workStDt");
          gr_wrkList.setFocusedCell(n - 1, "workStDt", true);
          return false;
        }
        if (wrkStDtm > wrkEndDtm) {
          //await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
          await $c.win.alert($p, i + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workStHh");
          gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
          return false;
        }
        var diffDay = await $c.date.diffDate($p, wrkDt, wrkEndDt);
        if (diffDay > 1) {
          await $c.win.alert($p, n + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workEndDt");
          gr_wrkList.setFocusedCell(n - 1, "workEndDt", true);
          return false;
        }
        var workSt = ds_workTime.getCellData(k - 1, "workStDt") + ds_workTime.getCellData(k - 1, "workStHh");
        var workEnd = ds_workTime.getCellData(k - 1, "workEndDt") + ds_workTime.getCellData(k - 1, "workEndHh");
        workSt = workSt.trim();
        workEnd = workEnd.trim();
        var startDate = workSt.toDate("YYYYMMDDHHmmss");
        var endDate = workEnd.toDate("YYYYMMDDHHmmss");
        var totalDate = (endDate - startDate) / 1000 / 60 / 60;
        /*12시간 이상 체크였는데 한시간 추가하여 13시간부터 필터성립 > 인천지사 김은순 190311*/
        if (totalDate >= 13) {
          await $c.win.alert($p, n + "번째 실적 작업일이 13시간이 넘습니다.");
          return false;
        }
      }
      var sStDt = ds_wrkList.getCellData(i - 1, "workStDt") + ds_wrkList.getCellData(i - 1, "workStHh");
      var sEndDt = ds_wrkList.getCellData(i - 1, "workEndDt") + ds_wrkList.getCellData(i - 1, "workEndHh");
      var tStDt = "";
      var tEndDt = "";
      for (var b = 1; b <= ds_wrkList.getRowCount(); b++) {
        if (ds_wrkList.getCellData(b - 1, "staffNo") == staffNo && i - 1 != b - 1 && ds_wrkList.getCellData(i - 1, "status") == "신규") {
          tStDt = ds_wrkList.getCellData(b - 1, "workStDt") + ds_wrkList.getCellData(b - 1, "workStHh");
          tEndDt = ds_wrkList.getCellData(b - 1, "workEndDt") + ds_wrkList.getCellData(b - 1, "workEndHh");
          if (sStDt < tStDt && sEndDt > tStDt) {
            await $c.win.alert($p, ds_wrkList.getCellData(i, "staffNm") + "의 " + (i - 1) + "번째와 " + (b - 1) + "번째 근무시간이 중복되었습니다.");
            // gr_wrkList.ColSelect = "true";
            // gr_wrkList.focus();
            // gr_wrkList.SetColumn("workStDt");
            gr_wrkList.setFocusedCell(i - 1, "workStDt", true);
            return false;
          }
          if (sStDt == tStDt) {
            await $c.win.alert($p, ds_wrkList.getCellData(i - 1, "staffNm") + "의 " + (i - 1) + "번째와 " + (b - 1) + "번째 근무시간이 중복되었습니다.");
            // gr_wrkList.ColSelect = "true";
            // gr_wrkList.focus();
            // gr_wrkList.SetColumn("workStDt");
            gr_wrkList.setFocusedCell(i - 1, "workStDt", true);
            return false;
          }
          if (sStDt > tStDt && tEndDt > sStDt) {
            await $c.win.alert($p, ds_wrkList.getCellData(i - 1, "staffNm") + "의 " + (i - 1) + "번째와 " + (b - 1) + "번째 근무시간이 중복되었습니다.");
            // gr_wrkList.ColSelect = "true";
            // gr_wrkList.focus();
            // gr_wrkList.SetColumn("workEndDt");
            gr_wrkList.setFocusedCell(b - 1, "workEndDt", true);
            return false;
          }
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
scwin.f_CopyDataRow = function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  // try {
  // 	if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
  // 	if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
  // 	if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
  // 	if (targetColumns == null) targetColumns = sourceColumns;
  // 	if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
  // 	if (targetRow == null) targetRow = scwin.f_AddDataRow(targetDataset);
  // 	for (var i=0; i < sourceColumns.length; i++) {
  // 		if ($c.gus.cfIsNull(sourceColumns[i]) || $c.gus.cfIsNull(targetColumns[i])) continue;
  // 			targetDataset.NameString(targetRow,targetColumns[i]) = sourceDataset.NameString(sourceRow,sourceColumns[i]);
  // 		if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
  // 	}
  // 	return targetRow;
  // } catch (e) {
  // 	await $c.gus.cfAlertMsg("[scwin.f_CopyDataRow]" + e);
  // }
};

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
scwin.f_GetColumnNames = function (dataSet) {
  // try {
  // 	if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
  // 	if (dataSet.CountColumn == 0) return null;
  // 	var rtnArray = new Array(dataSet.CountColumn);
  // 	for (var i=0; i < dataSet.CountColumn; i++) {
  // 		rtnArray[i] = dataSet.ColumnID(i+1);
  // 	}
  // 	if (rtnArray.length == 0)
  // 		return null
  // 	else
  // 		return rtnArray
  // } catch (e) {
  // 	await $c.gus.cfAlertMsg("[scwin.f_GetColumnNames] " + e.Description);
  // }
};
//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_AddDataRow = function (dataSet) {
  // var rowIndex = dataSet.insertRow();
  // dataSet.setRowPosition(rowIndex);
  // return dataSet.getRowPosition();
};

//-------------------------------------------------------------------------
// 근무시간 행추가
//-------------------------------------------------------------------------
scwin.f_WorkTimeSet = async function (Row) {
  if (ds_wrkList.getRowCount() > 0) {
    if (ds_wrkList.getCellData(Row - 1, "staffNo") == ds_wrkList.getCellData(Row, "staffNo") && ds_wrkList.getCellData(Row - 1, "staffNm") == ds_wrkList.getCellData(Row, "staffNm")) {
      if (ds_wrkList.getCellData(Row - 1, "workEndHh") == "2400") {
        ds_wrkList.setCellData(Row, "workStDt", ds_wrkList.getCellData(Row - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"));
        ds_wrkList.setCellData(Row, "workStHh", "0000");
        ds_wrkList.setCellData(Row, "workEndDt", ds_wrkList.getCellData(Row - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"));
      } else {
        ds_wrkList.setCellData(Row, "workStDt", ds_wrkList.getCellData(Row - 1, "workEndDt"));
        ds_wrkList.setCellData(Row, "workStHh", ds_wrkList.getCellData(Row - 1, "workEndHh"));
        ds_wrkList.setCellData(Row, "workEndDt", ds_wrkList.getCellData(Row - 1, "workEndDt"));
      }
    }
  } else {
    ds_wrkList.setCellData(Row, "workStDt", ica_wrkStDt.getValue());
    ds_wrkList.setCellData(Row, "workEndDt", ica_wrkStDt.getValue());
  }
  // gr_wrkList.SetColumn("workClsCd");
  // gr_wrkList.focus();
};

//-------------------------------------------------------------------------
// 확정 여부 체크
//-------------------------------------------------------------------------
scwin.f_ChkConfirm = async function (row) {
  var staffNo = ds_wrkList.getCellData(row, "staffNo");
  var staffNm = ds_wrkList.getCellData(row, "staffNm");
  var chk = 0;
  for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
    if (ds_wrkList.getCellData(i, "staffNo") == staffNo && (ds_wrkList.getCellData(i, "status") == "확정" || ds_wrkList.getCellData(i, "status") == "완료")) {
      chk++;
    }
  }
  if (chk > 0) {
    await $c.win.alert($p, staffNm + "에 대해 " + ica_wrkStDt.getValue() + "의 실적은 확정된 건이 있으므로 확정취소 후 등록이 가능합니다.");
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 일일 근태현황 출력
//-------------------------------------------------------------------------
scwin.f_print1 = async function () {
  //요일 불러오기  
  await scwin.f_getDay();
  if (ica_printDt.getValue() == null || ica_printDt.getValue() == "") {
    await $c.win.alert($p, "일일근태현황 인쇄 시 일자는 필수 입니다.");
    ica_printDt.focus();
    return;
  }

  // var odiParam = new ODIParam("op_210_01_03");
  // odiParam.add("wrkDt", ica_printDt.getValue());	
  // odiParam.add("day", day);	
  // // alert(day);	
  // // odiParam.add("lobranCd", lc_lobran.BindColVal);

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)	
  // var formParam = new FormParam();
  // //formParam.add("form1","폼1");

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();	
  // //viewerParam.add("viewer.showtree","false");	
  // viewerParam.add("viewer.useprogressbar","false");

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/op/stvwrk/op_210_01_03.ozr", odiParam, viewerParam, formParam);

  // cbx_printCheck cbx_previewCheck
  var ozMode = "preview";
  if (cbx_printCheck.getValue() == "true" && cbx_previewCheck.getValue() == "true") {
    // 인쇄옵션, 미리보기
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "" && cbx_previewCheck.getValue() == "true") {
    // 미리보기
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "true" && cbx_previewCheck.getValue() == "") {
    // 인쇄옵션
    // ozMode = "print";
    var data = {
      "odiName": "op_210_01_03",
      "reportName": "/ds/op/stvwrk/op_210_01_03.ozr",
      "odiParam": {
        wrkDt: ica_printDt.getValue(),
        day: scwin.day
      }
    };
    opts = {
      "type": 'print',
      "printMode": 'view'
    };
    await $c.ext.printOzReport($p, data, opts);
    return;
  } else if (cbx_printCheck.getValue() == "" && cbx_previewCheck.getValue() == "") {
    // 
    // ozMode = "preview";
    var data = {
      "odiName": "op_210_01_03",
      "reportName": "/ds/op/stvwrk/op_210_01_03.ozr",
      "odiParam": {
        wrkDt: ica_printDt.getValue(),
        day: scwin.day
      }
    };
    await $c.ext.printOzReport($p, data);
    return;
  }
  var data = {
    odiName: "op_210_01_03",
    reportName: "/ds/op/stvwrk/op_210_01_03.ozr",
    odiParam: {
      wrkDt: ica_printDt.getValue(),
      day: scwin.day
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      mode: ozMode
    },
    formParam: {}
  };
  var opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.f_print2 = async function () {
  //요일 불러오기  
  await scwin.f_getDay();
  if (ica_printDt.getValue() == null || ica_printDt.getValue() == "") {
    await $c.win.alert($p, "일일근태현황 인쇄 시 일자는 필수 입니다.");
    ica_printDt.focus();
    return;
  }

  // var odiParam = new ODIParam("op_210_01_02");
  // odiParam.add("wrkDt", ica_printDt.getValue());
  // //alert(day);	
  // odiParam.add("day", scwin.day);	
  // //odiParam.add("lobranCd", lc_lobran.BindColVal);		        

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)	
  // var formParam = new FormParam();

  // //formParam.add("form1","폼1");
  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)

  // var viewerParam = new ViewerParam();	
  // //viewerParam.add("viewer.showtree","false");	
  // viewerParam.add("viewer.useprogressbar","false");	

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/op/stvwrk/op_210_01_02.ozr", odiParam, viewerParam, formParam);

  // cbx_printCheck cbx_previewCheck
  var ozMode = "preview";
  if (cbx_printCheck.getValue() == "true" && cbx_previewCheck.getValue() == "true") {
    // 인쇄옵션, 미리보기
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "" && cbx_previewCheck.getValue() == "true") {
    // 미리보기
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "true" && cbx_previewCheck.getValue() == "") {
    // 인쇄옵션
    // ozMode = "print";
    var data = {
      "odiName": "op_210_01_02",
      "reportName": "/ds/op/stvwrk/op_210_01_02.ozr",
      "odiParam": {
        wrkDt: ica_printDt.getValue(),
        day: scwin.day
      }
    };
    opts = {
      "type": 'print',
      "printMode": 'view'
    };
    await $c.ext.printOzReport($p, data, opts);
    return;
  } else if (cbx_printCheck.getValue() == "" && cbx_previewCheck.getValue() == "") {
    // 
    // ozMode = "preview";
    var data = {
      "odiName": "op_210_01_02",
      "reportName": "/ds/op/stvwrk/op_210_01_02.ozr",
      "odiParam": {
        wrkDt: ica_printDt.getValue(),
        day: scwin.day
      }
    };
    await $c.ext.printOzReport($p, data);
    return;
  }
  var data = {
    odiName: "op_210_01_02",
    reportName: "/ds/op/stvwrk/op_210_01_02.ozr",
    odiParam: {
      pgmId: "op_210_01_02.xml",
      wrkDt: ica_printDt.getValue(),
      day: scwin.day
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      mode: ozMode
    },
    formParam: {}
  };
  var opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//평택기지
scwin.f_print3 = async function () {
  //요일 불러오기  
  await scwin.f_getDay();
  if (ica_printDt.getValue() == null || ica_printDt.getValue() == "") {
    await $c.win.alert($p, "일일근태현황 인쇄 시 일자는 필수 입니다.");
    ica_printDt.focus();
    return;
  }

  // var odiParam = new ODIParam("op_210_01_04");
  // odiParam.add("wrkDt", ica_printDt.getValue());
  // odiParam.add("day", scwin.day);	
  // //odiParam.add("lobranCd", lc_lobran.BindColVal);		        

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)	
  // var formParam = new FormParam();

  // //formParam.add("form1","폼1");
  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)

  // var viewerParam = new ViewerParam();	
  // //viewerParam.add("viewer.showtree","false");	
  // viewerParam.add("viewer.useprogressbar","false");	

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/op/stvwrk/op_210_01_04.ozr", odiParam, viewerParam, formParam);

  // cbx_printCheck cbx_previewCheck
  var ozMode = "preview";
  if (cbx_printCheck.getValue() == "true" && cbx_previewCheck.getValue() == "true") {
    // 인쇄옵션, 미리보기
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "" && cbx_previewCheck.getValue() == "true") {
    // 미리보기
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "true" && cbx_previewCheck.getValue() == "") {
    // 인쇄옵션
    // ozMode = "print";
    var data = {
      "odiName": "op_210_01_04",
      "reportName": "/ds/op/stvwrk/op_210_01_04.ozr",
      "odiParam": {
        wrkDt: ica_printDt.getValue(),
        day: scwin.day
      }
    };
    opts = {
      "type": 'print',
      "printMode": 'view'
    };
    await $c.ext.printOzReport($p, data, opts);
    return;
  } else if (cbx_printCheck.getValue() == "" && cbx_previewCheck.getValue() == "") {
    // 
    // ozMode = "preview";
    var data = {
      "odiName": "op_210_01_04",
      "reportName": "/ds/op/stvwrk/op_210_01_04.ozr",
      "odiParam": {
        wrkDt: ica_printDt.getValue(),
        day: scwin.day
      }
    };
    await $c.ext.printOzReport($p, data);
    return;
  }
  var data = {
    odiName: "op_210_01_04",
    reportName: "/ds/op/stvwrk/op_210_01_04.ozr",
    odiParam: {
      pgmId: "op_210_01_04.xml",
      wrkDt: ica_printDt.getValue(),
      day: scwin.day
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      mode: ozMode
    },
    formParam: {}
  };
  var opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//요일 불러오기
scwin.f_getDay = function () {
  var currDate = ica_printDt.getValue();
  //alert(currDate);
  var date = new Date(currDate.substring(0, 4), currDate.substring(4, 6) - 1, currDate.substring(6, 8));
  var currDay = date.getDay();
  //alert(currDay);
  switch (currDay) {
    case 1:
      scwin.day = "월요일";
      break;
    case 2:
      scwin.day = "화요일";
      break;
    case 3:
      scwin.day = "수요일";
      break;
    case 4:
      scwin.day = "목요일";
      break;
    case 5:
      scwin.day = "금요일";
      break;
    case 6:
      scwin.day = "토요일";
      break;
    case 0:
      scwin.day = "일요일";
      break;
  }
  //alert(day);
};
scwin.f_keyPress = function (e) {};
scwin.udc_staff_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staff_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staff_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_wrkList, '하역인원실적내역');
};
scwin.ed_rmk_onkeypress = function (e) {
  // scwin.f_keyPress(e);
  if (e.keyCode == 13) {
    $c.sbm.execute($p, sbm_save2);
  }
};
scwin.btn_etcSave_onclick = function (e) {
  scwin.f_Save2();
};
scwin.btn_memberCopy_onclick = function (e) {
  scwin.f_CopyRow('1');
};
scwin.btn_orderCopy_onclick = function (e) {
  scwin.f_CopyRow('2');
};
scwin.addRow = function (e) {
  scwin.f_AddRow('1');
};
scwin.deleteRow = function (e) {
  scwin.f_DeleteRow('1');
};
scwin.btn_selDelete_onclick = function (e) {
  scwin.f_DeleteRow('2');
};
scwin.btn_selCancel_onclick = function (e) {
  scwin.f_CancelRow('1');
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_confirm_onclick = function (e) {
  scwin.f_Confirm();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_print1_onclick = function (e) {
  scwin.f_print1();
};
scwin.btn_print2_onclick = function (e) {
  scwin.f_print2();
};
scwin.btn_print3_onclick = function (e) {
  scwin.f_print3();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
    scwin.f_Retrieve();
  }
};
scwin.sbm_save2_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
    scwin.f_Retrieve();
  }
};
scwin.sbm_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
    scwin.f_Retrieve();
  }
};
scwin.sbm_cancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // ds_wrkList event=OnLoadCompleted(rowCnt)>
  // 총 조회건수 표시
  // cfShowTotalRows(totalRows, rowCnt);

  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.data.dataListFilter($p, ldt_tskCntn, "upperCd==''");
    $c.data.dataListFilter($p, ldt_wkrStp, "upperWrkStpCd=='03'");
    // ldt_wkrStp.setCondition("filter", "upperWrkStpCd==ref('ds_wkrStp.upperWrkStpCd')");
    var rowCnt = ds_wrkList.getRowCount();
    txt_totalRows.setValue(rowCnt);
    var rowCnt2 = ds_staff.getRowCount();
    txt_totalRows2.setValue(rowCnt2);
    var rowCnt3 = ds_staff2.getRowCount();
    txt_totalRows3.setValue(rowCnt3);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    } else {
      gr_wrkList.setFocusedCell(0, 0);
      ds_wrkList.setRowPosition(0);
    }
  }
};
scwin.gr_wrkList_ontextimageclick = async function (row, columnIndex) {
  var colid = gr_wrkList.getColumnID(columnIndex);
  switch (colid) {
    // case "workDt":
    // 	cfOpenCalendar(this, row, colid);
    // 	break;
    // case "workStDt":
    // 	cfOpenCalendar(this, row, colid);
    // 	break;
    // case "workEndDt":
    // 	cfOpenCalendar(this, row, colid);
    // 	break;
    case "staffNo":
      scwin.f_openGridCommonPopUp(1, row, "F");
      break;
    case "staffNm":
      scwin.f_openGridCommonPopUp(2, row, "F");
      break;
    case "stvWrkIndictNo":
      // scwin.bOnPopUp = true;
      // var pCode = "P";
      // var pName = ica_wrkStDt.getValue();
      // var pWrkIndictNo = ds_wrkList.getCellData(row, "stvWrkIndictNo").replace(/\s*$/, '');

      // ds_wrkList.setCellData(row, "info", "");
      // ds_wrkList.setCellData(row, "shiftClsCd", "");
      // ds_wrkList.setCellData(row, "wrkStpCd", "");
      // ds_wrkList.setCellData(row, "workStDt", "");
      // ds_wrkList.setCellData(row, "workStHh", "");
      // ds_wrkList.setCellData(row, "workEndDt", "");
      // ds_wrkList.setCellData(row, "workEndHh", "");

      // var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList',pCode,pName,"F",5,null,null,null,null,"700",null,null,null,null,null,null,"T",pWrkIndictNo,null);
      // if (rtnList != null && rtnList != false) {
      //     ds_wrkList.setCellData(row, "stvWrkIndictNo", rtnList[0]);
      //     ds_wrkList.setCellData(row, "info", rtnList[3]); 	
      //     ds_wrkList.setCellData(row, "shiftClsCd", rtnList[5]);
      //     if (ds_wrkList.getCellData(row, "shiftClsCd") == "D"){
      //         ds_wrkList.setCellData(row, "workStHh", "0730");
      //     }else{
      //         ds_wrkList.setCellData(row, "workStHh", rtnList[11]);
      //     }
      //     ds_wrkList.setCellData(row, "workStDt", rtnList[10]);	
      //     ds_wrkList.setCellData(row, "workEndDt", rtnList[12]); 	
      //     ds_wrkList.setCellData(row, "workEndHh", rtnList[13]); 	

      //     scwin.v_workClsCd = rtnList[1];

      //     if (ds_wrkList.getRowCount() > 0){
      //         scwin.ds_wkrStp_onFilter();
      //     }				

      //     ds_condition2.set("stvWrkIndictNo", rtnList[0]);
      //     var rs = await $c.sbm.execute(sbm_checkNorthPort);
      //     if (rs.responseJSON.resultDataSet[0].Msg == "SUCC"){
      //         // ds_wrkList.setCellData(row, "npGubun", ds_npGubun.getCellData(0, "chk"));
      //         ds_wrkList.setCellData(row, "npGubun", rs.responseJSON.OUT_DS1[0].chk);
      //         ds_wrkList.setCellData(row, "wrkStpCd", "004");
      //     }

      // } else {
      //     ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
      // }
      break;
  }
};
scwin.gr_wrkList_oneditend = function (row, columnIndex, value) {
  var colid = gr_wrkList.getColumnID(columnIndex);
  var olddata = ds_wrkList.getCellData(row, colid);
  var newdata = value;
  scwin.openFlag = false;
  switch (colid) {
    case "staffNo":
      if (newdata != "" && newdata != olddata) {
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "occpgrdCd", "");
        ds_wrkList.setCellData(row, "occptypeCd", "");
        ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
        scwin.openFlag = true;
      } else if (newdata == "") {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "occpgrdCd", "");
        ds_wrkList.setCellData(row, "occptypeCd", "");
        ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
      }
      break;
    case "staffNm":
      if (newdata != "" && newdata != olddata) {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "occpgrdCd", "");
        ds_wrkList.setCellData(row, "occptypeCd", "");
        ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
        scwin.openFlag = true;
      } else if (newdata == "") {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "occpgrdCd", "");
        ds_wrkList.setCellData(row, "occptypeCd", "");
        ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
      }
      break;
  }
};
scwin.gr_wrkList_onafteredit = async function (row, columnIndex, value) {
  var colid = gr_wrkList.getColumnID(columnIndex);
  switch (colid) {
    case "staffNo":
      if (scwin.openFlag) {
        await scwin.f_openGridCommonPopUp(1, row, "T");
      }
      scwin.onEditEndYn = true;
      break;
    case "staffNm":
      if (scwin.openFlag) {
        await scwin.f_openGridCommonPopUp(2, row, "T");
      }
      scwin.onEditEndYn = true;
      break;
    case "stvWrkIndictNo":
      scwin.bOnPopUp = true;
      var pCode = "P";
      var pName = ica_wrkStDt.getValue();
      var pWrkIndictNo = ds_wrkList.getCellData(row, "stvWrkIndictNo").replace(/\s*$/, '');
      ds_wrkList.setCellData(row, "info", "");
      ds_wrkList.setCellData(row, "shiftClsCd", "");
      ds_wrkList.setCellData(row, "wrkStpCd", "");
      ds_wrkList.setCellData(row, "workStDt", "");
      ds_wrkList.setCellData(row, "workStHh", "");
      ds_wrkList.setCellData(row, "workEndDt", "");
      ds_wrkList.setCellData(row, "workEndHh", "");
      var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null && rtnList != false) {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", rtnList[0]);
        ds_wrkList.setCellData(row, "info", rtnList[3]);
        ds_wrkList.setCellData(row, "shiftClsCd", rtnList[5]);
        if (ds_wrkList.getCellData(row, "shiftClsCd") == "D") {
          ds_wrkList.setCellData(row, "workStHh", "0730");
        } else {
          ds_wrkList.setCellData(row, "workStHh", rtnList[11]);
        }
        ds_wrkList.setCellData(row, "workStDt", rtnList[10]);
        ds_wrkList.setCellData(row, "workEndDt", rtnList[12]);
        ds_wrkList.setCellData(row, "workEndHh", rtnList[13]);
        scwin.v_workClsCd = rtnList[1];
        if (ds_wrkList.getRowCount() > 0) {
          scwin.ds_wkrStp_onFilter();
        }
        ds_condition2.set("stvWrkIndictNo", rtnList[0]);
        var rs = await $c.sbm.execute($p, sbm_checkNorthPort);
        if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
          // ds_wrkList.setCellData(row, "npGubun", ds_npGubun.getCellData(0, "chk"));
          ds_wrkList.setCellData(row, "npGubun", rs.responseJSON.OUT_DS1[0].chk);
          ds_wrkList.setCellData(row, "wrkStpCd", "004");
        }
      } else {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
      }
      break;
    case "workClsCd":
      if (ds_wrkList.getCellData(row, "workClsCd") == 'N') {
        var cnt = 0;
        var staffNo = ds_wrkList.getCellData(row, "staffNo");
        ds_workTime.removeAll();
        for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
          if (ds_wrkList.getCellData(i, "staffNo") == staffNo) {
            // scwin.f_CopyDataRow(ds_wrkList, ds_workTime, i);
            ds_workTime.setJSON([ds_wrkList.getRowJSON(i)], true);
          }
        }
        for (var j = 0; j < ds_workTime.getRowCount(); j++) {
          if (ds_workTime.getCellData(j, "workClsCd") == 'N') {
            cnt++;
          }
        }
        if (cnt > 1) {
          await $c.win.alert($p, ds_wrkList.getCellData(row, "staffNm") + "에 대해 " + ica_wrkStDt.getValue() + "일자의 업무간 휴무는 한건만 입력하실 수 있습니다.");
          ds_wrkList.setCellData(row, "workClsCd", "");
          return;
        }
      }
      ds_wrkList.setCellData(row, "dtlTskCntnCd", "");
      ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
      ds_wrkList.setCellData(row, "info", "");
      ds_wrkList.setCellData(row, "shiftClsCd", "");
      ds_wrkList.setCellData(row, "wrkStpCd", "");
      if (ds_wrkList.getCellData(row, "workClsCd") == 'A') {
        //배치

        gr_wrkList.setHeaderClass("h_stvWrkIndictNo", "txt-red");
        gr_wrkList.setHeaderClass("h_wrkStpCd", "txt-red");
        gr_wrkList.setColumnReadOnly("stvWrkIndictNo", false);
        gr_wrkList.setColumnReadOnly("wrkStpCd", false);
        gr_wrkList.setColumnReadOnly("shiftClsCd", true);
      } else {
        gr_wrkList.removeHeaderClass("h_stvWrkIndictNo", "txt-red");
        gr_wrkList.removeHeaderClass("h_wrkStpCd", "txt-red");
        gr_wrkList.setColumnReadOnly("stvWrkIndictNo", true);
        gr_wrkList.setColumnReadOnly("wrkStpCd", true);
        gr_wrkList.setColumnReadOnly("shiftClsCd", true);
      }
      var filterDlt = await scwin.ds_tskCntn_onFilter();
      if (filterDlt.length > 0) {
        ds_wrkList.setCellData(row, "dtlTskCntnCd", filterDlt[0].cd);
      }
      if (scwin.b_workClsCd == "A" && ds_wrkList.getCellData(row, "workClsCd") == "U") {
        ds_wrkList.setCellData(row, "npGubun", "F");
      }
      break;
  }
};
scwin.gr_wrkList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  // if (row < 1) return;
  // switch (colid) {
  // 	case "workDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  
  // 	case "workStDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  
  // 	case "workEndDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  
  // 	default :
  // 		this.UrlImages = SEARCH_BTN;
  // 		break;
  // }
};
scwin.gr_wrkList_onrowindexchange = function (rowIndex, oldRow) {
  // 작업단계 Row가 변경될때 해당 구분별 작업단계로 Filter 처리
  if (ds_wrkList.getRowCount() > 0) {
    scwin.ds_tskCntn_onFilter();
    scwin.ds_wkrStp_onFilter();
  }
};
scwin.gr_wrkList_oncellclick = function (row, columnIndex, columnId) {
  if (ds_wrkList.getCellData(row, "status") == "무실적" || ds_wrkList.getCellData(row, "status") == "미확정" || ds_wrkList.getCellData(row, "status") == "신규") {
    gr_wrkList.setColumnReadOnly("chk", false);
    gr_wrkList.setColumnReadOnly("staffNo", false);
    gr_wrkList.setColumnReadOnly("staffNm", false);
    gr_wrkList.setColumnReadOnly("workClsCd", false);
    gr_wrkList.setColumnReadOnly("stvWrkIndictNo", false);
    gr_wrkList.setColumnReadOnly("wrkStpCd", false);
    gr_wrkList.setColumnReadOnly("workStDt", false);
    gr_wrkList.setColumnReadOnly("workStHh", false);
    gr_wrkList.setColumnReadOnly("workEndDt", false);
    gr_wrkList.setColumnReadOnly("workEndHh", false);
    gr_wrkList.setColumnReadOnly("dtlTskCntnCd", false);
    gr_wrkList.setColumnReadOnly("npGubun", false);
    gr_wrkList.setColumnReadOnly("rmk", false);
    scwin.b_workClsCd = ds_wrkList.getCellData(row, "workClsCd");
  } else {
    //gr_wrkList.ColumnProp("chk", 'Edit') = "None";	       
    gr_wrkList.setColumnReadOnly("staffNo", true);
    gr_wrkList.setColumnReadOnly("staffNm", true);
    gr_wrkList.setColumnReadOnly("workClsCd", true);
    gr_wrkList.setColumnReadOnly("stvWrkIndictNo", true);
    gr_wrkList.setColumnReadOnly("wrkStpCd", true);
    gr_wrkList.setColumnReadOnly("workStDt", true);
    gr_wrkList.setColumnReadOnly("workStHh", true);
    gr_wrkList.setColumnReadOnly("workEndDt", true);
    gr_wrkList.setColumnReadOnly("workEndHh", true);
    gr_wrkList.setColumnReadOnly("dtlTskCntnCd", true);
    gr_wrkList.setColumnReadOnly("npGubun", true);
    gr_wrkList.setColumnReadOnly("rmk", true);
  }
};
scwin.ds_wkrStp_onFilter = function () {
  if (ds_wrkList.getRowCount() == 0) {
    return;
  }
  if (scwin.v_workClsCd == "") {
    return;
  }
  var row = ds_wrkList.getRowPosition();

  // 필터링을 해제 
  // ds_wkrStp.clearFilter();
  if (scwin.v_workClsCd == 'Y') {
    if (ds_wkrStp.getCellData(row, "upperWrkStpCd") == '03') {
      // ds_wkrStp.setColumnFilter({type:'row', colIndex:'upperWrkStpCd', key:"03", condition:'and'});
      ldt_wkrStp.setCondition("filter", "upperWrkStpCd==ref('ds_wkrStp.upperWrkStpCd')");
      return true;
    } else {
      return false;
    }
  } else if (scwin.v_workClsCd == 'P') {
    if (ds_wkrStp.getCellData(row, "upperWrkStpCd") == '01') {
      //alert(ds_wkrStp.getCellData(row,"upperWrkStpCd"));
      // ds_wkrStp.setColumnFilter({type:'row', colIndex:'upperWrkStpCd', key:"01", condition:'and'});
      ldt_wkrStp.setCondition("filter", "upperWrkStpCd==ref('ds_wkrStp.upperWrkStpCd')");
      return true;
    } else {
      return false;
    }
  } else if (scwin.v_workClsCd == 'T') {
    if (ds_wkrStp.getCellData(row, "upperWrkStpCd") == '03') {
      //alert(ds_wkrStp.getCellData(row,"upperWrkStpCd"));
      // ds_wkrStp.setColumnFilter({type:'row', colIndex:'upperWrkStpCd', key:"03", condition:'and'});
      ldt_wkrStp.setCondition("filter", "upperWrkStpCd==ref('ds_wkrStp.upperWrkStpCd')");
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
scwin.gr_wrkList_onheaderclick = function (headerId) {
  var bCheck = gr_wrkList.getHeaderValue("h_chk");
  var chk = bCheck == true ? "T" : "F";
  var cr = ds_wrkList.getRowCount();
  if (cr > 0) {
    if (headerId == "h_chk") {
      for (var i = 0; i < cr; i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          ds_wrkList.setCellData(i, "chk", "F");
        }
        if (ds_wrkList.getCellData(i, "status") == "미확정") {
          ds_wrkList.setCellData(i, "chk", chk);
        }
      }
    }
  }
};
scwin.gr_wrkList_onviewchange = async function (info) {};
scwin.ds_tskCntn_onFilter = async function () {
  if (ds_wrkList.getRowCount() == 0) {
    return;
  }

  // var v_workClsCd = ds_wrkList.getCellData(ds_wrkList.getRowPosition(), "workClsCd");

  // ds_tskCntn.clearFilter();

  // ds_tskCntn.setColumnFilter({type:'row', colIndex:'upperCd', key:v_workClsCd, condition:'and'});

  await ldt_tskCntn.setCondition("filter", "upperCd==ref('ds_wrkList.workClsCd')");
  return ldt_tskCntn.getAllJSON();

  // if (ds_tskCntn.getCellData(row,"upperCd") == v_workClsCd){
  //     return true;
  // }else{
  // 	return false;
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_condition.lobranCd',mandatory:'true',title:'점소',objType:'key'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',pickerType:'dynamic',style:'',mandatory:'true',title:'입항예정시작일자',objType:'data',ref:'data:ds_condition.wrkStDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dtlOccptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_condition.dtlOccptypeCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중기기사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_staff',id:'udc_staff',objTypeCode:'data',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlag:'1',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_staff_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_staff_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staff_onblurCodeEvent',refDataCollection:'ds_condition',code:'staffNo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',codeId:'',nameId:'',id:'udc_grdPopup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'하역인원실적내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_wrkList',id:'udc_topGrdBtn',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_wrkList',style:'',id:'gr_wrkList',visibleRowNum:'10',class:'wq_gvw',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_wrkList_ontextimageclick','ev:oneditend':'scwin.gr_wrkList_oneditend','ev:onafteredit':'scwin.gr_wrkList_onafteredit','ev:oncellindexchange':'scwin.gr_wrkList_oncellindexchange','ev:onrowindexchange':'scwin.gr_wrkList_onrowindexchange','ev:oncellclick':'scwin.gr_wrkList_oncellclick','ev:onheaderclick':'scwin.gr_wrkList_onheaderclick','ev:onviewchange':'scwin.gr_wrkList_onviewchange',fixedColumn:'6',fixedColumnNoMove:'true',validExp:'staffNo:사번:yes:legnth=6,workClsCd:근무구분:yes ,workStDt:시작일자:yes:date=YYYYMMDD,workStHh:시작시간:yes:legnth=4,workEndDt:종료일자:yes:date=YYYYMMDD,workEndHh:종료시간:yes:legnth=4,dtlTskCntnCd:업무내용:yes',dataName:'근무시간',validFeatures:'ignoreStatus=no',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'50',inputType:'checkbox',id:'h_chk',displayMode:'label',valueType:'other',trueValue:'T',falseValue:'F',value:'Chk'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column17',value:'상태',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column15',value:'작업일자',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column13',value:'작업<br/>순번',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column11',value:'사번',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column9',value:'성명',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column3',value:'직종',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column5',value:'상세<br/>직종',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column7',value:'직급',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column19',value:'근무<br/>구분',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'h_stvWrkIndictNo',value:'작업<br/>지시번호',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column21',value:'본선/<br/>작업장',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column23',value:'시프트',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'h_wrkStpCd',value:'작업<br/>단계',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column47',value:'작업시작',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column43',value:'작업종료',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column39',value:'업무내용',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'column37',value:'최종근무일자',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column35',value:'북항',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'150',inputType:'text',id:'column33',value:'특이사항',displayMode:'label',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'일자',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'시간',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column56',value:'일자',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'시간',displayMode:'label',class:'txt-red',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',width:'20',textAlign:'center',displayMode:'value',inputType:'checkbox',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',width:'50',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'workSeq',name:'작업',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'55',textAlign:'center',displayMode:'label',inputType:'textImage',dataType:'text',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'55',textAlign:'center',displayMode:'label',inputType:'textImage'}},{T:1,N:'w2:column',A:{id:'occptypseCd',name:'직종',width:'50',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세',width:'55',textAlign:'left',readOnly:'true',hidden:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',width:'60',textAlign:'left',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'근무구분',width:'65',textAlign:'left',displayMode:'label',inputType:'select',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',width:'90',textAlign:'center',displayMode:'label',inputType:'textImage'}},{T:1,N:'w2:column',A:{id:'info',name:'본선/',width:'90',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',width:'55',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업',width:'50',textAlign:'center',displayMode:'label',inputType:'select'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{id:'workStDt',name:'시작일자',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',dataType:'date',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시작시간',width:'40',textAlign:'center',displayMode:'label',inputType:'text',displayFormat:'##:##',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'종료일자',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',dataType:'date',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'종료시간',width:'40',textAlign:'center',displayMode:'label',inputType:'text',displayFormat:'##:##',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{id:'dtlTskCntnCd',name:'업무내용',width:'65',textAlign:'left',displayMode:'label',inputType:'select',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_tskCntn'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{id:'yestWrkDt',name:'최종근무일자',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text',displayFormat:'####/##/## ##:##',dataType:'text'}},{T:1,N:'w2:column',A:{id:'npGubun',name:'북',width:'20',textAlign:'center',displayMode:'label',inputType:'checkbox',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',width:'120',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text',dataType:'text'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom ty2'},E:[{T:1,N:'xf:group',A:{id:'',class:'bottom-inner'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_memberCopy',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_memberCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인원복사'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_orderCopy',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_orderCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지시복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.deleteRow',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',rowDelUserAuth:'C',rowAddUserAuth:'C',gridID:'gr_wrkList',id:'udc_bottomGrdBtn'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_selDelete',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_selDelete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_selCancel',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_selCancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택취소'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업 특이사항',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.btn_etcSave_onclick',style:'',id:'btn_etcSave',type:'button',class:'btn',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비고저장'}]}]}]}]},{T:1,N:'xf:textarea',A:{class:'','ev:onkeypress':'scwin.ed_rmk_onkeypress',id:'ed_rmk',ref:'data:ds_wrkList.rmk',style:'height: 75px;width: 776px'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_cancel_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_confirm',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_confirm_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_save_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중기기사',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_staff',id:'gr_staff',style:'',visibleRowNum:'5',visibleRowNumFix:'true',dataName:'중기기사',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'사번',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'성명',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',width:'20',textAlign:'center',displayMode:'label',inputType:'checkbox',style:'',value:'',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'65',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'65',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역직',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_staff2',id:'gr_staff2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',dataName:'하역직',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'column5',inputType:'checkbox',style:'',value:'',width:'50',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column7',inputType:'text',style:'',value:'사번',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column19',inputType:'text',style:'',value:'성명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',width:'20',textAlign:'center',displayMode:'label',inputType:'checkbox',style:'',value:'',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'65',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'65',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_printDt',class:'',calendarValueType:'yearMonthDate',title:'조회기간 시작일',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print1',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_print1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'중기기사 일일근태 현황'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print2',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_print2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'하역직 일일근태 현황'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print3',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_print3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'평택유통기지 일일근태 현황'}]}]}]}]}]}]}]}]}]})