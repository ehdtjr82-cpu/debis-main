/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_04b.xml 42762 de0ca365bbf6456e1fc37eae840d2d6ff451be27ddf271a90ecc3b39035e07cd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_emp_onrowpositionchange','ev:ondataload':'scwin.ds_emp_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stpDptWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stpArvWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인율명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBulk',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'오더수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jisiQty',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subQty',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jisiWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYnFlag',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglWrkWt',name:'name59',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stpDptWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stpArvWrkPlCdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인율명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBulk',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'오더수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jisiQty',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subQty',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jisiWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYnFlag',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commNm',name:'CNTR/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량(환산',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglWrkWt',name:'중량(Kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYnFlag',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCdNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCdNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stpDptWrkPlCdNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stpArvWrkPlCdNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWtQty',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWtQty',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWtQty',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrComYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrComDtm',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWt',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jisiWt',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWt',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBulk',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jisiQty',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subQty',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col58',name:'name58',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveOrderBasisInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_emp","key":"OUT_DS1"},{"id":"ds_emp2","key":"OUT_DS2"},{"id":"dma_retrieve","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"},{"id":"ds_emp2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/ds.op.wrkrslts.transwrkrslts.RegistOrderBasisInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_emp2","key":"IN_DS1"},{"id":"dma_retrieve","key":"IN_DS2"},{"id":"ds_emp","key":"OUT_DS1"},{"id":"ds_emp2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"},{"id":"ds_emp2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//Date
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 8); // 현재년월일을 구한다.
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.strDate = scwin.strFromDate + scwin.strToDate;
scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수 

scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.params.odrNo;

  // ed_odrNo.setValue("BC40804020083");

  //파라미터로 넘어온 오더번호가 있으면 오더번호를 조회조건에 셋팅하고 자동조회 한다.
  if (!$c.gus.cfIsNull($p, scwin.params.paramOdrNo)) {
    ed_odrNo.setValue(scwin.params.paramOdrNo);
    scwin.f_Retrieve();
  }
  ds_emp.removeAll();
  ds_emp2.removeAll();
};
scwin.onUdcCompleted = function () {};
scwin.ed_odrNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_emp.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  if (ds_emp.getRowCount() > 0) {
    ds_emp.setRowPosition(0);
  }
  if (ds_emp.getCellData(0, "cntrBulk") == "C") {
    ed_odrWtQty.setValue(ds_emp.getCellData(0, "odrQty"));
    ed_wrkWtQty.setValue(ds_emp.getCellData(0, "jisiQty"));
    ed_subWtQty.setValue(ds_emp.getCellData(0, "subQty"));
  } else {
    ed_odrWtQty.setValue(ds_emp.getCellData(0, "odrWt"));
    ed_wrkWtQty.setValue(ds_emp.getCellData(0, "jisiWt"));
    ed_subWtQty.setValue(ds_emp.getCellData(0, "subWt"));
  }
  ed_bilgClntNm.setValue(ds_emp.getCellData(0, "bilgClntNm"));
  ed_odrKndNm.setValue(ds_emp.getCellData(0, "odrKndNm"));
  ed_vsslNm.setValue(ds_emp.getCellData(0, "vsslNm"));
  ed_reqClntNm.setValue(ds_emp.getCellData(0, "reqClntNm"));
  ed_lineCd.setValue(ds_emp.getCellData(0, "lineCd"));
  ed_cdNm01.setValue(ds_emp.getCellData(0, "cdNm01"));
  ed_realMchtClntNm.setValue(ds_emp.getCellData(0, "realMchtClntNm"));
  ed_dptWrkPlCdNm.setValue(ds_emp.getCellData(0, "dptWrkPlCdNm"));
  ed_arvWrkPlCdNm.setValue(ds_emp.getCellData(0, "arvWrkPlCdNm"));
  ed_odrComYn.setValue(ds_emp.getCellData(0, "odrCompleteYn"));
  ed_rmk.setValue(ds_emp.getCellData(0, "rmk"));
  ed_odrComDtm.setValue(ds_emp.getCellData(0, "odrCompleteDtm"));
  if (ds_emp.getCellData(ds_emp.getRowPosition(), "cntrBulk") == "C") {
    scwin.f_gridCntrBulkChange("C");
  } else {
    scwin.f_gridCntrBulkChange("B");
  }

  //ds_emp Filter 처리
  ds_emp.clearFilter();
  ds_emp2.clearFilter();
  ds_emp.setColumnFilter({
    type: 'func',
    colIndex: 'commCd',
    key: fnTepmDsEmpFilter,
    condition: 'and'
  });
  ds_emp2.setColumnFilter({
    type: 'func',
    colIndex: 'commCd',
    key: fnTepmDsEm2pFilter,
    condition: 'and'
  });
  totalRows1.setValue(ds_emp.getRowCount());
  totalRows2.setValue(ds_emp2.getRowCount());
};
scwin.sbm_saveEmp_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    //$c.gus.cfShowError(sbm_retrieve);
    return;
  }
  scwin.f_Retrieve();

  // //ds_emp Filter 처리
  // ds_emp.clearFilter();
  // ds_emp2.clearFilter();

  // ds_emp.setColumnFilter({type : 'func', colIndex : 'commCd', key: fnTepmDsEmpFilter, condition: 'and'});

  // ds_emp2.setColumnFilter({type : 'func', colIndex : 'commCd', key: fnTepmDsEm2pFilter, condition: 'and'});

  // totalRows1.setValue(ds_emp.getRowCount());
  // totalRows2.setValue(ds_emp2.getRowCount());
};
var fnTepmDsEmpFilter = function (commCd, tmpParam, rowIndex) {
  if (commCd == ds_emp.getCellData(rowIndex + 1, "commCd")) {
    return false;
  } else {
    return true;
  }
};
var fnTepmDsEm2pFilter = function (commCd, tmpParam, rowIndex) {
  if (commCd == ds_emp.getCellData(ds_emp.getRowPosition(), "commCd")) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_odrNo.getValue() == "") {
    $c.win.alert($p, "오더번호를 선택하세요.");
    return;
  }
  dma_retrieve.set("lobranCd", ""); //co_lc_logisticsBranch.ValueOfIndex("lobranCd",co_lc_logisticsBranch.Index);//.BindColVal;//  // 점소
  dma_retrieve.set("cntrNo", ""); //cntrNo.value;
  dma_retrieve.set("odrKnd", ""); //odrKnd.BindColVal;
  dma_retrieve.set("odrNo", ed_odrNo.getValue());
  dma_retrieve.set("wrkStDt", ""); //wrkStDt.Text;
  dma_retrieve.set("wrkEndDt", ""); //wrkEndDt.Text;

  $c.sbm.execute($p, sbm_retrieve);

  // ds_emp.UseFilter = false;
  // ds_emp2.UseFilter = false;
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function (row) {
  let data = {
    transWrkIndictNo: ds_emp2.getCellData(row, "transWrkIndictNo"),
    transRsltsSeq: ds_emp2.getCellData(row, "transRsltsSeq"),
    eqCd: ds_emp2.getCellData(row, "eqCd"),
    vehclNo: ds_emp2.getCellData(row, "vehclNo"),
    cntrBulkDiv: ds_emp2.getCellData(row, "cntrBulkDiv")
  };
  let opts = {
    id: "smpPop",
    popupName: "",
    modal: false,
    type: "browserPopup",
    width: 840,
    height: 300,
    title: ""
  };
  console.log(data);
  //상세화면 호출 
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_05p.xml", opts, data);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var k = 0;
  //변경한 데이터가 있는지 체크한다. 

  if (ds_emp2.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["Data"]);
    return;
  }

  /*2005.12.2 completeYn2 */
  for (i = 1; i <= ds_emp2.getRowCount(); i++) {
    if (ds_emp2.getCellData(i, "completeYn2") == 1) {
      k++;
    }
  }
  if (k == ds_emp2.getRowCount()) {
    ds_emp2.setCellData(k, "completeYn3", "Y");
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    dma_retrieve.set("lobranCd", ""); //co_lc_logisticsBranch.ValueOfIndex("lobranCd",co_lc_logisticsBranch.Index);//.BindColVal;//  // 점소
    dma_retrieve.set("cntrNo", ""); //cntrNo.value;
    dma_retrieve.set("odrKnd", ""); //odrKnd.BindColVal;
    dma_retrieve.set("odrNo", ed_odrNo.getValue());
    dma_retrieve.set("wrkStDt", ""); //wrkStDt.Text;
    dma_retrieve.set("wrkEndDt", ""); //wrkEndDt.Text;

    pos_groupCode = ds_emp.rowPosition; // 저장 전의 위치 저장
    $c.sbm.execute($p, sbm_saveEmp);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  // $c.gus.cfInitObjects([tb_searchCondition]);

  ed_odrNo.setValue("");

  //파라미터로 넘어온 오더번호가 있으면 오더번호를 조회조건에 셋팅하고 자동조회 한다.
  if (!$c.gus.cfIsNull($p, scwin.params.paramOdrNo)) {
    ed_odrNo.setValue(scwin.params.paramOdrNo);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 벌크,컨테이너 변환시 작동
//-------------------------------------------------------------------------
scwin.f_gridCntrBulkChange = function (bulkChange) {
  if (bulkChange == "C") {
    gr_emp.setColumnVisible("cntrSizCd", true);
    gr_emp.setColumnVisible("cntrTypCd", true);
    gr_emp.setColumnVisible("fullEmptyClsCd", true);
    gr_emp.setColumnVisible("cntrStd", false);
    gr_emp.setColumnVisible("unitCd", false);
    gr_emp.setColumnVisible("qty", false);
    gr_emp.setColumnVisible("grossWt", false);
    gr_emp.setColumnVisible("cbm", false);
  }
  if (bulkChange == "B") {
    gr_emp.setColumnVisible("cntrSizCd", false);
    gr_emp.setColumnVisible("cntrTypCd", false);
    gr_emp.setColumnVisible("fullEmptyClsCd", false);
    gr_emp.setColumnVisible("cntrStd", true);
    gr_emp.setColumnVisible("unitCd", true);
    gr_emp.setColumnVisible("qty", true);
    gr_emp.setColumnVisible("grossWt", true);
    gr_emp.setColumnVisible("cbm", true);
  }
};

//그리드 클릭시-상세보기팝업ins
scwin.gr_emp2_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "vehclNo") {
    if (ds_emp2.getCellData(rowIndex, "completeYn2") == 1) {
      await $c.win.alert($p, "오더완료된건은 차량변경할 수 없습니다.");
      return;
    }
  }
  if (columnId == "vehclNo") {
    if (ds_emp2.getCellData(ds_emp2.getRowPosition(), "vehclNo") != "") {
      if (columnId == "vehclNo") {
        scwin.f_Detail(rowIndex);
      }
    } else if (ds_emp2.getCellData(ds_emp2.getRowPosition(), "vehclNo") == "") {
      await $c.win.alert($p, "차량번호가 있는 항목을 선택하세요");
      return;
    }
  }
  if (columnId == "completeYn2") {
    if (ds_emp2.getCellData(rowIndex, "wrkStpNm") == "DOOR운송") {
      if (ds_emp2.getCellData(rowIndex, "dptDt").trim() == "" || ds_emp2.getCellData(rowIndex, "arvDt").trim() == "") {
        await $c.win.alert($p, "DOOR운송은 출발시간, 도착시간이 지정되어야 됩니다.");
        ds_emp2.setCellData(rowIndex, "completeYn2", 0);
      }
    }
  }
};
scwin.ds_emp_onrowpositionchange = function (info) {
  ds_emp2.clearFilter();
  ds_emp2.setColumnFilter({
    type: 'func',
    colIndex: 'commCd',
    key: fnTepmDsEm2pFilter,
    condition: 'and'
  });
  totalRows2.setValue(ds_emp2.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_odrNo',placeholder:'',style:'',allowChar:'a-zA-Z0-9',mandatory:'true',maxlength:'13','ev:onkeyup':'scwin.ed_odrNo_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'tb_odrInform',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구고객',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_bilgClntNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_odrKndNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선명항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_vsslNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청고객',class:'',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_reqClntNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선사/Line',class:'',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_lineCd',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BL/Booking번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_cdNm01',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_realMchtClntNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출발지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_dptWrkPlCdNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_arvWrkPlCdNm',placeholder:'',style:'',objType:'key',readOnly:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더물량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차물량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔여물량',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:' w150 tal',id:'ed_odrWtQty',placeholder:'',style:'text-align: left;',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tal',id:'ed_wrkWtQty',placeholder:'',style:'text-align: left;',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tal',id:'ed_subWtQty',placeholder:'',style:'text-align: left;',readOnly:'true',disabled:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',placeholder:'',style:'',readOnly:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더완료여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w50',id:'ed_odrComYn',placeholder:'',style:'',readOnly:'true',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더완료일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',disabled:'true',id:'ed_odrComDtm',objType:'key',placeholder:'',readOnly:'true',style:'',displayFormat:'####/##/## ##:##'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너/품목정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_emp',grdDownOpts:'{"fileName":"컨테이터 품목정보.xls","type":"4+8+16"}',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_emp',id:'gr_emp',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'CNTR/품명',width:'180',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'SIZE',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'TYPE',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'F/E',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'규격',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수량',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'중량(환산)',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'중량(Kg)',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'CBM',width:'130'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column21',value:'매출액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'완료여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'180',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrStd',inputType:'text',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0.###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rglWrkWt',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0.###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'center',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'completeYnFlag',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'실적정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',id:'udc_topGrdBtn2',gridID:'gr_emp2',grdDownOpts:'{"fileName":"실적정보.xls","type":"4+8+16"}',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_emp2',id:'gr_emp2',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_emp2_oncellclick',rowStatusVisible:'true',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:'선택',width:'70',checkboxLabel:'선택',checkboxLabelPosition:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업단계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'출발일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도착일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'차량번호',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매입액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'할인/할증',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'완료여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'completeYn',inputType:'checkbox',width:'70',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stpDptWrkPlCdNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stpArvWrkPlCdNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'link',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'completeYn2',displayMode:'label',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})