/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_08b.xml 60924 f881d606e3e718b22fb5086a99a3c33eb347a6eb5ee43148ea842e83eb1ffb82 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_tariff_onrowpositionchange','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',encYN:'11',length:'11'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'orgCtrtWrkPathSeq',name:'원계약작업경로순번',dataType:'number',defaultValue:'0',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text',defaultValue:'0',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'운송모드계약요율순번',dataType:'number',defaultValue:'0',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text',defaultValue:'',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'hidDptDistrictNm',name:'출발권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text',defaultValue:'',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'hidArvDistrictNm',name:'도착권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',encYN:'8',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',encYN:'100',length:'100'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'품명',dataType:'text',defaultValue:'',encYN:'100',length:'100'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',defaultValue:'',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:'',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text',defaultValue:'',encYN:'1',length:'1'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text',defaultValue:'',encYN:'1',length:'1'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',defaultValue:'',encYN:'2',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',defaultValue:'',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'가계약요율여부',dataType:'number',defaultValue:'0',encYN:'1',length:'1'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text',defaultValue:'',encYN:'2',length:'2'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'rangeMin',name:'0',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'rangeMax',name:'0',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'arvDistRictCd',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_page'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'targetRow',name:'0',dataType:'number',defaultValue:'0',encYN:'20',length:'20'}},{T:1,N:'w2:key',A:{id:'numOfRowPerPage',name:'페이지당건수',dataType:'Integer',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'numOfIndexPerPage',name:'0',dataType:'Integer',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'currentPage',name:'현재페이지',dataType:'Integer',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'총페이지',dataType:'Integer',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'totalRecords',name:'총건수',dataType:'Integer',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'name3',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'name4',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'name5',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crcCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transCondCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWtCondCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trfAdptCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_EqNrmCd',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_EqNrmCd_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'계약작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'HLC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'작업점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col20',name:'요율적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col19',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'MIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'MAX',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_EqNrmCd',id:'lds_EqNrmCd'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'upperCd == ref(\'data:ds_tariff.eqKndCd\')'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveTransModeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_page","key":"IN_DS1"}, {"id":"ds_tariff","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_tariff","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveTransModeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selpchItemCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_selpchItemCd_submitdone'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_contractWorkPath_submitdone','ev:submiterror':'',id:'sbm_contractWorkPath',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_commonPopup',replace:'',target:'data:json,GAUCE',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_crcCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=ZZ006',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_crcCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_transCondCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD101',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_transCondCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntrWtCondCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD102',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntrWtCondCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_trfAdptCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP518',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_trfAdptCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveCarSizeListCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_EqNrmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : sd_202_01_08b
// 이름     : 운송계약요율(탭)
// 경로     : 물류/영업/계약관리/계약관리/계약목록 더블클릭/신규 계약등록 하단[계약요율] 버튼/운송 탭
// 작 성 자 : 최지수  
// 작 업 일 : 2026-04-09
//==================================================================================================================

/* 전역 변수 */
scwin.params = $c.data.getParameter($p) || {};
scwin.MSG_SD_ERR_001 = "원화인 경우 소수점을 입력 할 수 없습니다.";
scwin.MSG_SD_ERR_002 = "생성할 요율항목을 선택하십시오.";
scwin.MSG_SD_ERR_003 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.PAGE_IDX = 3;

/* 페이지 로드 */
scwin.onpageload = async function () {
  scwin.parentFrame = $c.win.getParent($p);
  scwin.ctrtNo = scwin.parentFrame.scwin.ctrtNo;
  // 차량종류 콤보 데이터 조회
  var comboOptions = [{
    method: "getGridCombo",
    param1: "EquipmentEBC",
    param2: "retrieveLogisticsEquipmentClss",
    param3: ["ZZ210", "ZZ202", "ZZ201", "LV"],
    param4: true,
    compID: "gr_tariff:eqKndCd"
  }];
  $c.data.setGauceUtil($p, comboOptions, function () {
    var dlEqKndCd = $p.getComponentById("dlt_gauceUtil_gr_tariff_eqKndCd");
    if (dlEqKndCd) dlEqKndCd.insertRow(0);
  });
  let e = null;
  // 통화/운송조건/H·L·C/요율적용/차량규격 코드 조회
  e = await $c.sbm.execute($p, sbm_crcCd);
  scwin.sbm_crcCd_submitdone(e);
  e = await $c.sbm.execute($p, sbm_transCondCd);
  scwin.sbm_transCondCd_submitdone(e);
  e = await $c.sbm.execute($p, sbm_cntrWtCondCd);
  scwin.sbm_cntrWtCondCd_submitdone(e);
  e = await $c.sbm.execute($p, sbm_trfAdptCd);
  scwin.sbm_trfAdptCd_submitdone(e);
  e = await $c.sbm.execute($p, sbm_eqNrmCd);
  scwin.sbm_eqNrmCd_submitdone(e);

  // 항상 숨김 컬럼
  gr_tariff.setColumnVisible('commCd', false);
  gr_tariff.setColumnVisible('dptDistrictCd', false);
  gr_tariff.setColumnVisible('arvDistrictCd', false);
  scwin.commonPopup();
};

/* UDC 로딩 완료 */
scwin.onUdcCompleted = function () {
  if (wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") == "02") {
    $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
  }
};

/* 요율항목 코드 조회 */
scwin.commonPopup = async function () {
  var strParam = {
    sysCd: "ContractEBC",
    queryId: "retrieveContractWorkStepTariffItemList",
    param1: scwin.ctrtNo,
    param2: 21,
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
    param9: "",
    param10: ""
  };
  dma_commonPopup.setJSON(strParam);
  await $c.sbm.execute($p, sbm_selpchItemCd);
};

/* 요율항목 조회 완료 */
scwin.sbm_selpchItemCd_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    if (ds_selpchItemCd.getRowCount() > 0) {
      // 첫번째 항목 자동 선택
      acb_selpchItemCd.setSelectedIndex(0);
      await scwin.f_contractWorkPath_submit();
      scwin.moveToPage();
    }
  }
};

/* 계약작업경로 조회 */
scwin.f_contractWorkPath_submit = async function () {
  var strParam = {
    sysCd: "ContractEBC",
    queryId: "retrieveContractSelPchItemEachWorkPath",
    param1: scwin.ctrtNo,
    param2: acb_selpchItemCd.getValue(),
    param3: 0,
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
    param9: "",
    param10: ""
  };
  dma_commonPopup.setJSON(strParam);
  await $c.sbm.execute($p, sbm_contractWorkPath);
};

/* 계약작업경로 조회 완료 */
scwin.sbm_contractWorkPath_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_contractWorkPath.setJSON(e.responseJSON.GAUCE);
    $c.gus.cfChangeCdNmFormat($p, ds_contractWorkPath, "ctrtWrkPathSeq", "ctrtWrkPathNm");
  }
};

/* 통화 코드 조회 완료 — 한글명만 유지 */
scwin.sbm_crcCd_submitdone = function (e) {
  for (var i = ds_crcCd.getRowCount() - 1; i >= 0; i--) {
    var cdNm = ds_crcCd.getCellData(i, "cdNm");
    if (!/[가-힣]/.test(cdNm)) {
      ds_crcCd.removeRow(i);
    }
  }
  gr_tariff.refresh();
};

/* 운송조건 코드 조회 완료 */
scwin.sbm_transCondCd_submitdone = function (e) {
  ds_transCondCd.setJSON(e.responseJSON.GAUCE);
  $c.gus.cfChangeCdNmFormat($p, ds_transCondCd, "cd", "cdNm");
  ds_transCondCd.insertRow(0);
};

/* H/L/C 코드 조회 완료 */
scwin.sbm_cntrWtCondCd_submitdone = function (e) {
  ds_cntrWtCondCd.setJSON(e.responseJSON.GAUCE);
  $c.gus.cfChangeCdNmFormat($p, ds_cntrWtCondCd, "cd", "cdNm");
  ds_cntrWtCondCd.insertRow(0);
  gr_tariff.refresh();
};

/* 요율적용 코드 조회 완료 */
scwin.sbm_trfAdptCd_submitdone = function (e) {
  ds_trfAdptCd.setJSON(e.responseJSON.GAUCE);
  $c.gus.cfChangeCdNmFormat($p, ds_trfAdptCd, "cd", "cdNm");
  ds_trfAdptCd.insertRow(0);
};

/* 차량규격 코드 조회 완료 */
scwin.sbm_eqNrmCd_submitdone = function (e) {
  ds_EqNrmCd.setJSON(e.responseJSON.GAUCE);
  $c.gus.cfChangeCdNmFormat($p, ds_EqNrmCd, "cd", "cdNm");
  ds_EqNrmCd.insertRow(0);
};

/* 조회 */
scwin.f_Retrieve = async function (e) {
  var ctrtNo = scwin.ctrtNo;
  if (ds_tariff.getModifiedIndex().length > 0) {
    var ret = await $c.win.confirm($p, MSG_CM_CRM_015);
    if (ret) {
      if (!(await scwin.parentFrame.scwin.f_isCompletedChk(scwin.PAGE_IDX))) {
        return false;
      }
      await scwin.f_Save('');
    }
  }
  if (acb_selpchItemCd.getValue() == "") {
    $c.win.alert($p, MSG_CM_ERR_002, new Array("요율항목"));
    return;
  }
  scwin.moveToPage();
};

/* 페이지 이동 조회 */
scwin.moveToPage = function (targetRow) {
  var ctrtNo = scwin.ctrtNo;
  oGDS_page.set("targetRow", targetRow != null && targetRow !== "" ? targetRow : "1");
  oGDS_page.set("ctrtNo", ctrtNo);
  oGDS_page.set("selpchItemCd", acb_selpchItemCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

/* pageList 클릭 이벤트 */
scwin.pgl_pageList1_onclick = function (index) {
  var numOfRowPerPage = parseInt(oGDS_page.get("numOfRowPerPage")) || 100;
  var targetRow = (index - 1) * numOfRowPerPage + 1;
  scwin.moveToPage(String(targetRow));
};

/* ========== 그리드 팝업 ========== */
scwin._editPopupTimer = null;

/* 돋보기 클릭 */
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  clearTimeout(scwin._editPopupTimer);
  var rtnList = new Array();
  var colid = gr_tariff.getColumnID(columnIndex);
  if (colid == "commNm") {
    udc_comCodeGrid.setSelectId('retrieveCommInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc, ds_tariff.getCellData(rowIndex, "commCd"), ds_tariff.getCellData(rowIndex, "commNm"), "F", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
  } else if (colid == "dptDistrictNm") {
    udc_comCodeGrid.setSelectId('retrieveDistrictList');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_dptDistrictNm_callBackFunc, ds_tariff.getCellData(rowIndex, "dptDistrictCd"), ds_tariff.getCellData(rowIndex, "dptDistrictNm"), "F", '5', "출발권역코드,출발권역명", '150,170', null, ',,' + scwin.parentFrame.scwin.ctrtDistrictCd + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,출발권역코드,출발권역명');
  } else if (colid == "arvDistrictNm") {
    udc_comCodeGrid.setSelectId('retrieveDistrictList');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_arvDistrictNm_callBackFunc, ds_tariff.getCellData(rowIndex, "arvDistrictCd"), ds_tariff.getCellData(rowIndex, "arvDistrictNm"), "F", '5', "도착권역코드,도착권역명", '150,170', null, ',,' + scwin.parentFrame.scwin.ctrtDistrictCd + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
  } else if (colid == "unitCd") {
    udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc, ds_tariff.getCellData(rowIndex, "unitCd"), '', 'F', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
  } else if (colid == "lobranNm") {
    udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranNm_callBackFunc, ds_tariff.getCellData(rowIndex, "lobranCd").trim(), ds_tariff.getCellData(rowIndex, "lobranNm").trim(), "F", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
  }
};
scwin.ds_tariff_oncelldatachange = function (info) {
  const colid = info.colID;
  const rowIndex = info.rowIndex;
  const value = info.newValue;
  const oldValue = info.oldValue;
  if (value === oldValue) return;
  switch (colid) {
    case "commNm":
      ds_tariff.setCellData(rowIndex, "commCd", "");
      break;
    case "dptDistrictNm":
      ds_tariff.setCellData(rowIndex, "dptDistrictCd", "");
      break;
    case "arvDistrictNm":
      ds_tariff.setCellData(rowIndex, "arvDistrictCd", "");
      ds_tariff.setCellData(rowIndex, "hidArvDistrictNm", "");
      break;
    case "lobranNm":
      ds_tariff.setCellData(rowIndex, "lobranCd", "");
      break;
  }
  if (value == "") return;

  // 팝업 지연 호출 (ontextimageclick이 먼저 오면 취소됨)
  clearTimeout(scwin._editPopupTimer);
  scwin._editPopupTimer = setTimeout(function () {
    switch (colid) {
      case "commNm":
        udc_comCodeGrid.setSelectId('retrieveCommInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc, "", value, "T", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
        break;
      case "dptDistrictNm":
        udc_comCodeGrid.setSelectId('retrieveDistrictList');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_dptDistrictNm_callBackFunc, "", value, "T", '5', "출발권역코드, 출발권역명", '150,170', null, ',,' + scwin.parentFrame.scwin.ctrtDistrictCd + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
        break;
      case "arvDistrictNm":
        udc_comCodeGrid.setSelectId('retrieveDistrictList');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_arvDistrictNm_callBackFunc, "", value, "T", '5', "도착권역코드, 도착권역명", '150,170', null, ',,' + scwin.parentFrame.scwin.ctrtDistrictCd + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
        break;
      case "unitCd":
        udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc, value, '', 'T', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
        break;
      case "lobranNm":
        udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranNm_callBackFunc, "", value.trim(), "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
        break;
    }
  }, 200);
};

/* 그리드 편집 종료 — 팝업 지연 호출 (ontextimageclick이 대체 가능) */
scwin.gr_tariff_onafteredit = function (rowIndex, columnIndex, value, oldValue) {
  var colid = gr_tariff.getColumnID(columnIndex);
  if (value == ds_tariff.getOriginalCellData(rowIndex, colid)) return;

  // 코드 필드 초기화
  switch (colid) {
    case "commNm":
      ds_tariff.setCellData(rowIndex, "commCd", "");
      break;
    case "dptDistrictNm":
      ds_tariff.setCellData(rowIndex, "dptDistrictCd", "");
      break;
    case "arvDistrictNm":
      ds_tariff.setCellData(rowIndex, "arvDistrictCd", "");
      ds_tariff.setCellData(rowIndex, "hidArvDistrictNm", "");
      break;
    case "lobranNm":
      ds_tariff.setCellData(rowIndex, "lobranCd", "");
      break;
  }
  if (value == "") return;

  // 팝업 지연 호출 (ontextimageclick이 먼저 오면 취소됨)
  clearTimeout(scwin._editPopupTimer);
  scwin._editPopupTimer = setTimeout(function () {
    switch (colid) {
      case "commNm":
        udc_comCodeGrid.setSelectId('retrieveCommInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc, "", value, "T", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
        break;
      case "dptDistrictNm":
        udc_comCodeGrid.setSelectId('retrieveDistrictList');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_dptDistrictNm_callBackFunc, "", value, "T", '5', "출발권역코드, 출발권역명", '150,170', null, ',,' + scwin.parentFrame.scwin.ctrtDistrictCd + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
        break;
      case "arvDistrictNm":
        udc_comCodeGrid.setSelectId('retrieveDistrictList');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_arvDistrictNm_callBackFunc, "", value, "T", '5', "도착권역코드, 도착권역명", '150,170', null, ',,' + scwin.parentFrame.scwin.ctrtDistrictCd + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
        break;
      case "unitCd":
        udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc, value, '', 'T', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
        break;
      case "lobranNm":
        udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranNm_callBackFunc, "", value.trim(), "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
        break;
    }
  }, 0);
};

/* ========== 공통팝업 콜백 ========== */

/* 품명 콜백 */
scwin.udc_comCodeGrid_commNm_callBackFunc = function (ret) {
  ds_tariff.unbind("oncelldatachange");
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "commCd", "commNm");
  ds_tariff.bind("oncelldatachange", scwin.ds_tariff_oncelldatachange);
  gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "unitCd", true);
};

/* 출발권역 콜백 */
scwin.udc_comCodeGrid_dptDistrictNm_callBackFunc = function (ret) {
  ds_tariff.unbind("oncelldatachange");
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "dptDistrictCd", "dptDistrictNm");
  ds_tariff.bind("oncelldatachange", scwin.ds_tariff_oncelldatachange);
  gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "arvDistrictNm", true);
};

/* 도착권역 콜백 */
scwin.udc_comCodeGrid_arvDistrictNm_callBackFunc = function (ret) {
  ds_tariff.unbind("oncelldatachange");
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "arvDistrictCd", "arvDistrictNm");
  ds_tariff.bind("oncelldatachange", scwin.ds_tariff_oncelldatachange);
};

/* 단위 콜백 */
scwin.udc_comCodeGrid_unitCd_callBackFunc = function (ret) {
  ds_tariff.unbind("oncelldatachange");
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "unitCd", "");
  ds_tariff.bind("oncelldatachange", scwin.ds_tariff_oncelldatachange);
  gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "dptDistrictNm", true);
};

/* 작업점소 콜백 */
scwin.udc_comCodeGrid_lobranNm_callBackFunc = function (ret) {
  ds_tariff.unbind("oncelldatachange");
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "lobranCd", "lobranNm");
  ds_tariff.bind("oncelldatachange", scwin.ds_tariff_oncelldatachange);
  gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "rangeMin", true);
};

/* 저장 */
scwin.f_Save = async function (moveGb, callback) {
  if (ds_tariff.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("운송요율"));
    return false;
  } else {
    if (await scwin.f_reqFieldChk()) {
      if (moveGb == "") {
        var ret = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (ret) {
          const e = await $c.sbm.execute($p, sbm_save);
          scwin.sbm_save_submitdone(e);
        } else {
          return false;
        }
      } else {
        const e = await $c.sbm.execute($p, sbm_save);
        await scwin.sbm_save_submitdone(e, callback);
        return true;
      }
    } else {
      return false;
    }
  }
};

/* 필수항목 검증 */
scwin.f_reqFieldChk = async function () {
  var ret = await $c.gus.cfValidate($p, [gr_tariff], null, true);
  if (!ret) {
    return false;
  }
  for (var i = 0; i < ds_tariff.getRowCount(); i++) {
    if (ds_tariff.getCellData(i, "unitCd") == "VOT" || ds_tariff.getCellData(i, "unitCd") == "VOC") {
      if (ds_tariff.getCellData(i, "rangeMin") == 0 || ds_tariff.getCellData(i, "rangeMax") == 0) {
        $c.win.alert($p, "적용구간을 확인해 주세요");
        return false;
      }
      if (ds_tariff.getCellData(i, "rangeMin") >= ds_tariff.getCellData(i, "rangeMax")) {
        $c.win.alert($p, "적용구간MIN을 확인해 주세요");
        gr_tariff.setFocusedCell('rangeMin');
        return false;
      }
    }
  }
  return true;
};

/* ========== Submission Event Handlers ========== */

/* 조회 완료 */
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("요청 oGDS_page:", JSON.stringify(oGDS_page.getJSON()));
  console.log("응답 IN_DS1:", JSON.stringify(e.responseJSON.IN_DS1));
  console.log("응답 ds_tariff 건수:", ds_tariff.getRowCount());
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 서버 페이징 응답은 IN_DS1으로 반환됨
    if (e.responseJSON.IN_DS1 && e.responseJSON.IN_DS1[0]) {
      oGDS_page.setJSON(e.responseJSON.IN_DS1[0]);
    }
    // 항상 숨김 컬럼
    gr_tariff.setColumnVisible('commCd', false);
    gr_tariff.setColumnVisible('dptDistrictCd', false);
    gr_tariff.setColumnVisible('arvDistrictCd', false);

    // 컨테이너/벌크 체크 상태에 따른 컬럼 표시
    try {
      var isCntr = scwin.parentFrame.cbx_bizDivCntrYn.getValue() == "1";
      var isBulk = scwin.parentFrame.cbx_bizDivBulkYn.getValue() == "1";
      gr_tariff.setColumnVisible('transCondCd', isCntr);
      gr_tariff.setColumnVisible('cntrWtCondCd', isCntr);
      gr_tariff.setColumnVisible('eqKndCd', isBulk);
      gr_tariff.setColumnVisible('eqNrmCd', isBulk);
      gr_tariff.setColumnVisible('trfAdptCd', isBulk);
      gr_tariff.setColumnVisible('wrkStHh', isBulk);
      gr_tariff.setColumnVisible('wrkEndHh', isBulk);
    } catch (ex) {}
    tbx_totalRows.setValue(parseInt(oGDS_page.get("totalRecords")) || ds_tariff.getRowCount());

    // 페이징 갱신
    var totalPage = parseInt(oGDS_page.get("totalPage")) || 0;
    var currentPage = parseInt(oGDS_page.get("currentPage")) || 1;
    if (totalPage > 0) {
      pgl_pageList1.setCount(totalPage);
      pgl_pageList1.setSelectedIndex(currentPage);
    } else {
      pgl_pageList1.setCount(0);
    }

    // 부모 프레임 조회 플래그 설정
    try {
      scwin.parentFrame.scwin.iFrameRetrieveCheck[scwin.PAGE_IDX] = "R";
    } catch (ex) {}
    gr_tariff.refresh();

    // 첫 행 포커스
    if (ds_tariff.getRowCount() > 0) {
      gr_tariff.setFocusedCell(0, 0, true);
    }
  }
};

/* 저장 완료 */
scwin.sbm_save_submitdone = async function (e, callback) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    ds_tariff.reform();
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    }
    if (typeof callback === "function") {
      callback();
    }
  }
};

/* 저장 실패 */
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};

/* ========== 엑셀 업로드/다운로드 ========== */

/* Excel/CSV 업로드 — 임시 그리드(12컬럼)로 업로드 */
scwin.f_upload = async function () {
  if (udc_topGrdBtn.getUpExt() == "1") {
    var options = {
      fileName: "gridDataUpload.csv",
      status: "C",
      header: 0,
      type: "1",
      startRowIndex: 2,
      footerExist: 0,
      skipSpace: 1
    };
    await $c.data.uploadGridViewCSV($p, gr_tmp_tariff, options);
  } else {
    var options = {
      fileName: "gridDataUpload.xlsx",
      status: "C",
      //      headerExist: 1,
      type: "1",
      startRowIndex: 2,
      footerExist: 0
    };
    await $c.data.uploadGridViewExcel($p, gr_tmp_tariff, options);
  }
};

/* 업로드 완료 후 CSV 12컬럼 → 메인 DS 매핑 */
scwin.gr_tmp_tariff_onfilereadend = async function (e) {
  var rowNum = ds_up_tariff.getRowCount();
  ds_tariff.removeAll();
  ds_tariff.reform();
  // 컨테이너/벌크 모드 판별
  var isCntr = false;
  var isBulk = false;
  try {
    isCntr = scwin.parentFrame.cbx_bizDivCntrYn.getValue() == "1";
    isBulk = scwin.parentFrame.cbx_bizDivBulkYn.getValue() == "1";
  } catch (ex) {}
  ds_tariff.unbind("oncelldatachange");
  for (var i = 0; i < rowNum; i++) {
    var insRow = ds_tariff.insertRow();
    ds_tariff.setCellData(insRow, "ctrtNo", scwin.ctrtNo);
    ds_tariff.setCellData(insRow, "selpchItemCd", acb_selpchItemCd.getValue());

    // col1: 계약작업경로
    ds_tariff.setCellData(insRow, "ctrtWrkPathSeq", scwin.extractCode($.trim(ds_up_tariff.getCellData(i, "col1"))));
    ds_tariff.setCellData(insRow, "commCd", $.trim(ds_up_tariff.getCellData(i, "col13")));
    // col2: 품목/품명 (이름 → commNm에 저장)
    ds_tariff.setCellData(insRow, "commNm", $.trim(ds_up_tariff.getCellData(i, "col2")));
    // col3: 단위
    ds_tariff.setCellData(insRow, "unitCd", $.trim(ds_up_tariff.getCellData(i, "col3")));
    ds_tariff.setCellData(insRow, "dptDistrictCd", $.trim(ds_up_tariff.getCellData(i, "col14")));
    // col4: 출발권역 (이름)
    ds_tariff.setCellData(insRow, "dptDistrictNm", $.trim(ds_up_tariff.getCellData(i, "col4")));
    // col5: 도착권역 (이름)
    ds_tariff.setCellData(insRow, "arvDistrictCd", $.trim(ds_up_tariff.getCellData(i, "col15")));
    ds_tariff.setCellData(insRow, "arvDistrictNm", $.trim(ds_up_tariff.getCellData(i, "col5")));
    // col6: 통화
    ds_tariff.setCellData(insRow, "crcCd", scwin.reverseLookupCode($.trim(ds_up_tariff.getCellData(i, "col6")), ds_crcCd, "cd", "cdNm"));
    // col7: 요율
    ds_tariff.setCellData(insRow, "ctrtTrf", WebSquare.util.getNumber($.trim(ds_up_tariff.getCellData(i, "col7"))));

    // col8, col9: 컨테이너=운송조건/HLC, 벌크=차량종류/차량규격
    if (isCntr) {
      ds_tariff.setCellData(insRow, "transCondCd", scwin.extractCode($.trim(ds_up_tariff.getCellData(i, "col8"))));
      ds_tariff.setCellData(insRow, "cntrWtCondCd", scwin.extractCode($.trim(ds_up_tariff.getCellData(i, "col9"))));
    } else if (isBulk) {
      ds_tariff.setCellData(insRow, "eqKndCd", scwin.extractCode($.trim(ds_up_tariff.getCellData(i, "col16"))));
      ds_tariff.setCellData(insRow, "eqNrmCd", scwin.extractCode($.trim(ds_up_tariff.getCellData(i, "col17"))));
    }
    const col10 = $.trim(ds_up_tariff.getCellData(i, "col10"));
    if (!$c.util.isEmpty($p, col10)) {
      let pCode, pNm;
      if (col10.length === 3) {
        pCode = col10;
        pNm = "";
      } else {
        pCode = "";
        pNm = col10;
      }
      udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
      const r = await udc_comCodeGrid.cfCommonPopUpAsync(null, pCode, pNm, "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
      $c.gus.cfSetGridReturnValue($p, r, ds_tariff, insRow, "lobranCd", "lobranNm");
    }
    ds_tariff.setCellData(insRow, "trfAdptCd", scwin.extractCode($.trim(ds_up_tariff.getCellData(i, "col20"))));
    ds_tariff.setCellData(insRow, "wrkStHh", $.trim(ds_up_tariff.getCellData(i, "col18").replace(":", "")));
    ds_tariff.setCellData(insRow, "wrkEndHh", $.trim(ds_up_tariff.getCellData(i, "col19").replace(":", "")));

    // col11: MIN
    ds_tariff.setCellData(insRow, "rangeMin", WebSquare.util.getNumber($.trim(ds_up_tariff.getCellData(i, "col11"))));
    // col12: MAX
    ds_tariff.setCellData(insRow, "rangeMax", WebSquare.util.getNumber($.trim(ds_up_tariff.getCellData(i, "col12"))));
  }
  ds_tariff.bind("oncelldatachange", scwin.ds_tariff_oncelldatachange);
  ds_up_tariff.removeAll();
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
  gr_tariff.refresh();
};

/* [code]label 형식에서 code 추출 */
scwin.extractCode = function (val) {
  if (!val) return val;
  val = String(val);
  if (val.charAt(0) == "[") {
    var idx = val.indexOf("]");
    if (idx > 0) return val.substring(1, idx);
  }
  return val;
};

/* label로 code 역변환 */
scwin.reverseLookupCode = function (val, codeDs, codeCdCol, codeNmCol) {
  if (!val) return val;
  val = String(val);
  for (var i = 0; i < codeDs.getRowCount(); i++) {
    if (codeDs.getCellData(i, codeNmCol) == val) {
      return codeDs.getCellData(i, codeCdCol);
    }
  }
  return val;
};

/* ========== 행 추가/삭제/취소 ========== */

/* 행 추가 */
scwin.f_addRow = function () {
  var newRow;
  if (ds_tariff.getRowCount() == 0) {
    ds_tariff.insertRow();
    newRow = ds_tariff.getRowPosition();
    ds_tariff.setCellData(newRow, 'ctrtNo', scwin.ctrtNo);
    ds_tariff.setCellData(newRow, 'transMdCtrtTrfSeq', "1");
    ds_tariff.setCellData(newRow, 'selpchItemCd', acb_selpchItemCd.getValue());
    ds_tariff.setCellData(newRow, 'crcCd', "KRW");
  } else {
    // 현재 선택행 복사하여 신규행 추가
    var curRow = ds_tariff.getRowPosition();
    newRow = ds_tariff.getRowCount();
    ds_tariff.setRowJSON(newRow, ds_tariff.getRowJSON(curRow));
    ds_tariff.setCellData(newRow, 'transMdCtrtTrfSeq', 0);
  }
  ds_tariff.setRowPosition(newRow);
};

/* 행 삭제 */
scwin.f_delRow = function () {
  var row = ds_tariff.getRowPosition();
  if (row < 0) {
    // 그리드 포커스가 없는 경우 마지막 행 선택
    if (ds_tariff.getRowCount() > 0) {
      row = ds_tariff.getRowCount() - 1;
      ds_tariff.setRowPosition(row);
    } else {
      return;
    }
  }
  var status = ds_tariff.getRowStatusValue(row);
  if (status == 2 || status == "C") {
    // 신규행(Insert)은 즉시 완전 삭제
    ds_tariff.removeRow(row);
  } else {
    ds_tariff.deleteRow(row);
  }

  // 삭제 후 행 위치 보정
  var newPos = Math.min(row, ds_tariff.getRowCount() - 1);
  if (newPos >= 0) {
    ds_tariff.setRowPosition(newPos);
  }
};

/* 취소 (현재 행 원복) */
scwin.f_Undo = function (e) {
  var row = ds_tariff.getRowPosition();
  if (row < 0) return;
  var status = ds_tariff.getRowStatusValue(row);
  if (status == 2) {
    // 신규행(Insert)은 즉시 완전 삭제
    ds_tariff.removeRow(row);
  } else {
    ds_tariff.undoRow(row);
  }

  // 포커스 유지
  var newPos = Math.min(row, ds_tariff.getRowCount() - 1);
  if (newPos >= 0) gr_tariff.setFocusedCell(newPos, 0, true);
};

/* ========== Component Event Handlers ========== */

/* 요율항목 선택 변경 */
scwin.acb_selpchItemCd_onchange = function (info) {
  scwin.f_contractWorkPath_submit();
  scwin.f_Retrieve();
};

/* 행 위치 변경 */
scwin.ds_tariff_onrowpositionchange = function (info) {
  $c.gus.cfPrepareHidVal($p, ds_tariff, info.newRowIndex, ["commCd", "commNm", "dptDistrictCd", "dptDistrictNm", "arvDistrictCd", "arvDistrictNm", "unitCd"]);

  // 차량규격 필터 갱신
  if (ds_tariff.getRowCount() > 0) {
    //  scwin.ds_EqNrmCd_onfilter();
  }

  // 컬럼 readOnly 초기화
  gr_tariff.setColumnReadOnly("ctrtWrkPathSeq", false);
  gr_tariff.setColumnReadOnly("dptDistrictNm", false);
  gr_tariff.setColumnReadOnly("arvDistrictNm", false);
  gr_tariff.setColumnReadOnly("commNm", false);
  gr_tariff.setColumnReadOnly("unitCd", false);
  gr_tariff.setColumnReadOnly("crcCd", false);
  gr_tariff.setColumnReadOnly("transCondCd", false);
  gr_tariff.setColumnReadOnly("cntrWtCondCd", false);
  gr_tariff.setColumnReadOnly("eqKndCd", false);
  gr_tariff.setColumnReadOnly("eqNrmCd", false);

  // 기존행: 계약작업경로 수정 불가, 가계약 시 추가 제한
  if (ds_tariff.getRowStatusValue(info.newRowIndex) != 2) {
    gr_tariff.setColumnReadOnly("ctrtWrkPathSeq", true);
    if (ds_tariff.getCellData(info.newRowIndex, "prvsCtrtTrfYn") == "1") {
      gr_tariff.setColumnReadOnly("dptDistrictNm", true);
      gr_tariff.setColumnReadOnly("arvDistrictNm", true);
      gr_tariff.setColumnReadOnly("commNm", true);
      gr_tariff.setColumnReadOnly("unitCd", true);
      gr_tariff.setColumnReadOnly("crcCd", true);
      gr_tariff.setColumnReadOnly("transCondCd", true);
      gr_tariff.setColumnReadOnly("cntrWtCondCd", true);
      gr_tariff.setColumnReadOnly("eqKndCd", true);
      gr_tariff.setColumnReadOnly("eqNrmCd", true);
    }
  }
};

/* 차량종류에 따른 차량규격 필터 */
scwin.ds_EqNrmCd_onfilter = function () {
  if (ds_tariff.getRowCount() <= 0) return;
  var condition = "upperCd == '" + ds_tariff.getCellData(ds_tariff.getRowPosition(), "eqKndCd") + "' || upperCd == ''";
  ds_EqNrmCd.removeColumnFilterAll();
  $c.data.dataListFilter($p, ds_EqNrmCd, condition);
};

/* 차량규격 행 변경 — 유효하지 않은 값 초기화 */
scwin.ds_EqNrmCd_onrowpositionchange = function (info) {
  var v_row = ds_tariff.getRowPosition();
  if (ds_EqNrmCd.getRowCount() > 0) {
    var found = false;
    for (var i = 0; i < ds_EqNrmCd.getRowCount(); i++) {
      if (ds_tariff.getCellData(v_row, "eqNrmCd") == ds_EqNrmCd.getCellData(i, "cd")) {
        found = true;
        break;
      }
    }
    if (!found) ds_tariff.setCellData(v_row, "eqNrmCd", "");
  } else {
    ds_tariff.setCellData(v_row, "eqNrmCd", "");
  }
};

/* 엑셀 다운로드 */
scwin.f_gridDown = function () {
  var options = {
    fileName: "운송요율.xlsx",
    sheetName: "운송요율",
    type: "1",
    useDataFormat: "true",
    hiddenVisible: "true"
  };
  $c.data.downloadGridViewExcel($p, gr_tariff, options);
};

/* Tariff 대비요율 생성 팝업 */
scwin.btn_tariff_onclick = async function (e) {
  if (acb_selpchItemCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002);
    return;
  }
  var paramObj = {
    ctrtNo: scwin.ctrtNo,
    selpchItemCd: acb_selpchItemCd.getValue(),
    ctrtDistrictCd: scwin.parentFrame.scwin.ctrtDistrictCd
  };
  $c.win.openPopup($p, "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_16p", {
    id: "sd_202_01_16p",
    title: "Tariff 대비요율 생성",
    width: 500,
    height: 660,
    params: paramObj,
    callbackFn: function (ret) {
      if (ret == 1) {
        scwin.f_Retrieve();
      }
    }
  });
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save("");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_selpchItemCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',displayMode:'value delim label',ref:'','ev:onchange':'scwin.acb_selpchItemCd_onchange',allOption:'',chooseOption:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송요율 등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'Y',btnPlusYn:'Y',gridID:'gr_tariff',id:'udc_topGrdBtn',gridDownYn:'Y',btnUser:'N',gridDownFn:'scwin.f_gridDown',gridDownUserAuth:'X',gridUpFn:'scwin.f_upload',gridUpObjType:'bCreate',btnPlusFn:'scwin.f_addRow',btnMinusFn:'scwin.f_delRow',gridUpUserAuth:'C'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tariff',id:'gr_tariff',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'10',validExp:'ctrtWrkPathSeq:계약작업경로:yes::key,dptDistrictNm:출발권역:yes::key,arvDistrictNm:도착권역:yes::key,commNm:품명:yes::key,unitCd:단위:yes, crcCd:통화:yes,ctrtTrf:요율:yes:minNumber=0.01,transCondCd::no::key,cntrWtCondCd::no::key,',validFeatures:'ignoreStatus=no',gridName:'운송요율',dataName:'운송요율'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계약작업경로',width:'170',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품목코드',width:'100',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품목/품명',width:'120',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'단위',width:'70',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'450',style:'',inputType:'text',id:'column60',value:'운송구간',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'통화',width:'70',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'요율',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'운송<br/>조건',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'H / L / C',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'차량종류',displayMode:'label',rowSpan:'2',hidden:'true',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'차량규격',displayMode:'label',rowSpan:'2',hidden:'true',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'작업점소',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column21',value:'요율적용',displayMode:'label',rowSpan:'2',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',value:'소요시간',displayMode:'label',colSpan:'2',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column52',value:'적용구간',displayMode:'label',colSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'column61',value:'출발권역코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'출발권역',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'column64',value:'도착권역코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'도착권역',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'시작',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'종료',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'MIN',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column56',value:'MAX',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'select',width:'170',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'dptDistrictCd',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'arvDistrictCd',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'select',width:'70',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_crcCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'transCondCd',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',chooseOptionLabel:' ',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_transCondCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cntrWtCondCd',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrWtCondCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqKndCd',displayMode:'label',textAlign:'left',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'eqNrmCd',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',ref:'',emptyItem:'true',emptyValue:' '},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:lds_EqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'lobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'select',id:'trfAdptCd',displayMode:'label',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_trfAdptCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label',textAlign:'center',maxLength:'4',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label',textAlign:'center',maxLength:'4',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rangeMin',displayMode:'label',textAlign:'right',displayFormat:'0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rangeMax',displayMode:'label',textAlign:'right',displayFormat:'0.00'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_tariff',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del'}},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false','ev:onclick':'scwin.f_Undo',id:'btn_cls',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#',id:'pgl_pageList1',pageSize:'10',pagingType:'0',style:'','ev:onclick':'scwin.pgl_pageList1_onclick'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'width:0px; height:0px; ',id:'wfm_ctrtComplete',src:'/ui/ds/sd/salesactiv/ctrtmgnt/ctrtCompleteYn.xml'}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'',style:'display: none;'}},{T:1,N:'w2:gridView',A:{dataList:'data:ds_up_tariff',id:'gr_tmp_tariff',style:'display: none;','ev:onfilereadend':'scwin.gr_tmp_tariff_onfilereadend',visibleRowNum:'5'},E:[{T:1,N:'w2:header',A:{id:'header_tmp'},E:[{T:1,N:'w2:row',A:{id:'row_tmp'},E:[{T:1,N:'w2:column',A:{id:'col_t1',value:'계약작업경로',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column5',value:'품목코드'}},{T:1,N:'w2:column',A:{id:'col_t2',value:'품목/품명',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t3',value:'단위',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column1',value:'출발권역 코드'}},{T:1,N:'w2:column',A:{id:'col_t4',value:'출발권역',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column3',value:'도착권역 코드'}},{T:1,N:'w2:column',A:{id:'col_t5',value:'도착권역',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t6',value:'통화',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t7',value:'요율',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t8',value:'운송조건',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t9',value:'HLC',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column13',value:'차량종류'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column15',value:'차량규격'}},{T:1,N:'w2:column',A:{id:'col_t10',value:'작업점소',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column11',value:'요율적용'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column7',value:'시작'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column9',value:'종료'}},{T:1,N:'w2:column',A:{id:'col_t11',value:'MIN',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t12',value:'MAX',inputType:'text',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody_tmp'},E:[{T:1,N:'w2:row',A:{id:'row_tmp2'},E:[{T:1,N:'w2:column',A:{id:'col1',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col13',value:''}},{T:1,N:'w2:column',A:{id:'col2',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col3',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col14',value:''}},{T:1,N:'w2:column',A:{id:'col4',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col15',value:''}},{T:1,N:'w2:column',A:{id:'col5',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col6',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col7',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col8',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col9',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col16',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col17',value:''}},{T:1,N:'w2:column',A:{id:'col10',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col20',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col18',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'col19',value:''}},{T:1,N:'w2:column',A:{id:'col11',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col12',inputType:'text',width:'80'}}]}]}]}]}]}]})