/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_09b.xml 52754 c3ffddaa2efbd551b967b27be2ab228b8b81e4f9bad4b46fcdb2846a2f76fc0b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_tariff_onrowpositionchange','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',encYN:'11',length:'11'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'orgCtrtWrkPathSeq',name:'원계약작업경로순번',dataType:'number',defaultValue:'0',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text',defaultValue:'0',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'운송모드계약요율순번',dataType:'number',defaultValue:'0',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'wrkNodeCtrtTrfSeq',name:'작업노드계약요율순번',dataType:'number',defaultValue:'0',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text',defaultValue:'',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'hidDptDistrictNm',name:'출발권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text',defaultValue:'',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'hidArvDistrictNm',name:'도착권역코드명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',encYN:'8',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',encYN:'100',length:'100'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'품명',dataType:'text',defaultValue:'',encYN:'100',length:'100'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',defaultValue:'',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:'',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'adptPtimeDd',name:'경과일수',dataType:'number',defaultValue:'0',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'basisStrTrf',name:'기본보관료',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'freeday',name:'기본일수',dataType:'number',defaultValue:'0',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'strAdptUnitCd',name:'적용단위',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'strFddAdptStdCd',name:'기일적용기준',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'strTrfAdptStdCd',name:'요율적용기준',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'cfsWrkfClsCd',name:'CFS작업비구분',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text',defaultValue:'',encYN:'1',length:'1'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text',defaultValue:'',encYN:'1',length:'1'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',defaultValue:'',encYN:'2',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',defaultValue:'',encYN:'3',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtTrfRt',name:'계약요율율',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'basisStockUnitCd',name:'기본재고단위코드',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'basisStockQty',name:'기본재고수량',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'stvWrkClsCd',name:'하역작업구분코드',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'portDistrictCd',name:'항만권역코드',dataType:'text',defaultValue:'',encYN:'7',length:'7'}},{T:1,N:'w2:column',A:{id:'portDistrictNm',name:'항만권역명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'가계약요율여부',dataType:'number',defaultValue:'0',encYN:'1',length:'1'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'물류점소명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',encYN:'6',length:'6'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'hidWrkPlNm',name:'작업장명',dataType:'text',defaultValue:'',encYN:'50',length:'50'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text',defaultValue:'',encYN:'2',length:'2'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text',defaultValue:'',encYN:'4',length:'4'}},{T:1,N:'w2:column',A:{id:'rangeMin',name:'0',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}},{T:1,N:'w2:column',A:{id:'rangeMax',name:'0',dataType:'number',defaultValue:'0',encYN:'15',length:'15'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',encYN:'10',length:'10'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptPtimeDd',name:'경과일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'basisStrTrf',name:'기본보관료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'freeday',name:'기본일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strAdptUnitCd',name:'적용단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strFddAdptStdCd',name:'기일적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strTrfAdptStdCd',name:'요율적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsWrkfClsCd',name:'CFS작업비구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SD128',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SD118',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'name3',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'name4',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'name5',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crcCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_EqNrmCd',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_EqNrmCd_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveWorkNodeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_tariff","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveWorkNodeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_crcCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=ZZ006',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_crcCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_crcCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SD128',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD128',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_SD128","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SD128_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selpchItemCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_contractWorkPath',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_commonPopup',replace:'',target:'',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : sd_202_01_09b 
// 이름     : 보관계약요율(탭) 
// 경로     : 물류/영업/계약관리/계약관리/계약목록 더블클릭/신규 계약등록 하단[계약요율] 버튼/보관 탭
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================

/* 전역 변수 */
scwin.params = $c.data.getParameter($p) || {};
scwin.MSG_SD_ERR_001 = "원화인 경우 소수점을 입력 할 수 없습니다.";
scwin.MSG_SD_ERR_003 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.PAGE_IDX = 4;
scwin._isAfterSave = false;

/* 페이지 로드 */
scwin.onpageload = async function () {
  scwin.parentFrame = $c.win.getParent($p);
  scwin.ctrtNo = scwin.parentFrame.scwin.ctrtNo;

  // 적용단위/기일적용/요율적용/CFS작업구분 코드 옵션
  var codeOptions = [{
    grpCd: "SD128",
    compID: "gr_tariff:strAdptUnitCd"
  }, {
    grpCd: "SD118",
    compID: "gr_tariff:strFddAdptStdCd"
  }, {
    grpCd: "SD122",
    compID: "gr_tariff:strTrfAdptStdCd"
  }, {
    grpCd: "LO132",
    compID: "gr_tariff:cfsWrkfClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    // SD118 (기일적용기준): 공란, F, I만 표시
    ds_SD118.removeAll();
    ds_SD118.insertRow(0);
    var row1 = ds_SD118.insertRow(ds_SD118.getRowCount());
    ds_SD118.setCellData(row1, "cd", "F");
    ds_SD118.setCellData(row1, "cdNm", "하역작업완료일");
    var row2 = ds_SD118.insertRow(ds_SD118.getRowCount());
    ds_SD118.setCellData(row2, "cd", "I");
    ds_SD118.setCellData(row2, "cdNm", "반입일");
    $c.gus.cfChangeCdNmFormat($p, ds_SD118, "cd", "cdNm");
    gr_tariff.setColumnNodeSet("strFddAdptStdCd", "data:ds_SD118", "cdNm", "cd");

    // 콤보 코드 로딩 완료 후 적용단위/통화 코드 조회
    $c.sbm.execute($p, sbm_SD128);
    $c.sbm.execute($p, sbm_crcCd);
  });

  // 항상 숨김 컬럼
  gr_tariff.setColumnVisible('commCd', false);
  gr_tariff.setColumnVisible('lobranCd', false);
  gr_tariff.setColumnVisible('wrkPlCd', false);
  scwin.commonPopup();
};

/* UDC 로딩 완료 */
scwin.onUdcCompleted = function () {
  if (wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") == "02") {
    $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
  }
};

/* 요율항목 코드 조회 */
scwin.commonPopup = function () {
  var strParam = {
    sysCd: "ContractEBC",
    queryId: "retrieveContractWorkStepTariffItemList",
    param1: scwin.ctrtNo,
    param2: 31,
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
  $c.sbm.execute($p, sbm_selpchItemCd).then(function (e) {
    console.log("scwin.commonPopup .then()");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    if (ds_selpchItemCd.getRowCount() > 0) {
      console.log("setSelectedIndex(0) 호출");
      acb_selpchItemCd.setSelectedIndex(0);
    }
  });
};

/* 적용단위 코드 조회 완료 */
scwin.sbm_SD128_submitdone = function (e) {
  ds_SD128.insertRow(0);
  $c.gus.cfChangeCdNmFormat($p, ds_SD128, "cd", "cdNm");
  gr_tariff.setColumnNodeSet("strAdptUnitCd", "data:ds_SD128", "cdNm", "cd");
};

/* 통화 코드 조회 완료 — 한글명만 유지 */
scwin.sbm_crcCd_submitdone = function (e) {
  for (var i = ds_crcCd.getRowCount() - 1; i >= 0; i--) {
    var cdNm = ds_crcCd.getCellData(i, "cdNm");
    if (!/[가-힣]/.test(cdNm)) {
      ds_crcCd.removeRow(i);
    }
  }
  ds_crcCd.insertRow(0);
};

/* 조회 완료 */
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    try {
      scwin.parentFrame.scwin.iFrameRetrieveCheck[scwin.PAGE_IDX] = "R";
    } catch (ex) {}

    // 항상 숨김 컬럼
    gr_tariff.setColumnVisible('commCd', false);
    gr_tariff.setColumnVisible('lobranCd', false);
    gr_tariff.setColumnVisible('wrkPlCd', false);
    gr_tariff.setColumnVisible('adptPtimeDd', false);
    gr_tariff.setColumnVisible('basisStrTrf', false);
    gr_tariff.setColumnVisible('freeday', false);
    gr_tariff.setColumnVisible('strAdptUnitCd', false);
    gr_tariff.setColumnVisible('strFddAdptStdCd', false);
    gr_tariff.setColumnVisible('strTrfAdptStdCd', false);
    gr_tariff.setColumnVisible('cfsWrkfClsCd', false);
    switch (acb_selpchItemCd.getValue()) {
      case '0012':
        gr_tariff.setColumnVisible('strTrfAdptStdCd', true);
        break;
      case '0029':
        gr_tariff.setColumnVisible('adptPtimeDd', true);
        gr_tariff.setColumnVisible('basisStrTrf', true);
        gr_tariff.setColumnVisible('freeday', true);
        gr_tariff.setColumnVisible('strAdptUnitCd', true);
        gr_tariff.setColumnVisible('strFddAdptStdCd', true);
        break;
      case '0027':
        gr_tariff.setColumnVisible('adptPtimeDd', true);
        gr_tariff.setColumnVisible('basisStrTrf', true);
        gr_tariff.setColumnVisible('freeday', true);
        gr_tariff.setColumnVisible('strAdptUnitCd', true);
        gr_tariff.setColumnVisible('strFddAdptStdCd', true);
        break;
      case '0024':
        gr_tariff.setColumnVisible('cfsWrkfClsCd', true);
      case '0025':
        gr_tariff.setColumnVisible('cfsWrkfClsCd', true);
      case '0026':
        gr_tariff.setColumnVisible('cfsWrkfClsCd', true);
      case '0033':
        gr_tariff.setColumnVisible('cfsWrkfClsCd', true);
        break;
    }
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
    gr_tariff.refresh();

    // 첫번째 행 선택 (행추가 등 바로 동작하도록)
    if (ds_tariff.getRowCount() > 0) {
      ds_tariff.setRowPosition(0);
      gr_tariff.setFocusedCell(0, 0, true);
    }
  }
};

/* 저장 완료 */
scwin.sbm_save_submitdone = async function (e, callback) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    }

    // 저장 완료 후 재조회
    scwin._isAfterSave = true;
    scwin.f_Retrieve();
    if (typeof callback === "function") {
      callback();
    }
  }
};

/* 저장 실패 */
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};

/* 요율항목 선택 변경 */
scwin.acb_selpchItemCd_onchange = function (info) {
  console.log("scwin.acb_selpchItemCd_onchange 호출됨, value=" + acb_selpchItemCd.getValue());
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
  $c.sbm.execute($p, sbm_contractWorkPath).then(function (e) {
    console.log("sbm_contractWorkPath .then() 완료");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_contractWorkPath.setJSON(e.responseJSON.GAUCE);
    $c.gus.cfChangeCdNmFormat($p, ds_contractWorkPath, "ctrtWrkPathSeq", "ctrtWrkPathNm");
    scwin.f_Retrieve();
  });
};

/* 그리드 팝업 (돋보기 클릭) */
scwin._popupOpened = false;
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  scwin._popupOpened = true;
  setTimeout(function () {
    scwin._popupOpened = false;
  }, 500);
  var colid = gr_tariff.getColumnID(columnIndex);
  if (colid == "commNm") {
    udc_comCodeGrid.setSelectId('retrieveCommInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc, ds_tariff.getCellData(rowIndex, "commCd"), ds_tariff.getCellData(rowIndex, "commNm"), "F", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
  } else if (colid == "lobranNm") {
    udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranNm_callBackFunc, (ds_tariff.getCellData(rowIndex, "lobranCd") || "").trim(), (ds_tariff.getCellData(rowIndex, "lobranNm") || "").trim(), "F", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
  } else if (colid == "wrkPlNm") {
    udc_comCodeGrid.setSelectId('retrieveWrkPlInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_wrkPlNm_callBackFunc, (ds_tariff.getCellData(rowIndex, "wrkPlCd") || "").trim(), (ds_tariff.getCellData(rowIndex, "wrkPlNm") || "").trim(), 'F', '7', null, '150,170', null, null, '440', '500', null, null, null, "F", null);
  } else if (colid == "unitCd") {
    udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc, ds_tariff.getCellData(rowIndex, "unitCd"), '', 'F', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
  }
};

/* 셀 편집 종료 (noop) */
scwin.gr_tariff_oneditend = function (rowIndex, columnIndex, value) {};

/* 셀 편집 후 팝업 트리거 */
scwin.gr_tariff_onafteredit = function (rowIndex, columnIndex, value) {
  // 저장/돋보기 클릭 시 팝업 중복 방지
  if (scwin._popupOpened || scwin._saving) {
    return;
  }
  var colId = gr_tariff.getColumnID(columnIndex);
  var oldData = ds_tariff.getOriginalCellData(rowIndex, colId);

  // 변경 없음 → 팝업 미오픈
  if (oldData == value) return;
  switch (colId) {
    case "commNm":
      scwin.f_gr_openPopup("commNm", "commCd", rowIndex);
      break;
    case "wrkPlNm":
      scwin.f_gr_openPopup("wrkPlNm", "wrkPlCd", rowIndex);
      break;
    case "lobranNm":
      scwin.f_gr_openPopup("lobranNm", "lobranCd", rowIndex);
      break;
    case "unitCd":
      scwin.f_gr_openPopup("unitCd", null, rowIndex);
      break;
    default:
      break;
  }
};

/* 그리드 컬럼 팝업 오픈 헬퍼 */
scwin.f_gr_openPopup = function (nmCol, cdCol, rowIndex) {
  var nmVal = (ds_tariff.getCellData(rowIndex, nmCol) || "") + "";
  nmVal = $c.str.trim($p, nmVal);

  // 입력값 비어있으면 코드/명 모두 클리어 후 종료
  if (nmVal == "") {
    ds_tariff.setCellData(rowIndex, nmCol, "");
    if (cdCol) ds_tariff.setCellData(rowIndex, cdCol, "");
    return;
  }

  // 코드 컬럼 선제 클리어
  if (cdCol) ds_tariff.setCellData(rowIndex, cdCol, "");
  switch (nmCol) {
    case "commNm":
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc, "", nmVal, "T", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      break;
    case "wrkPlNm":
      udc_comCodeGrid.setSelectId('retrieveWrkPlInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_wrkPlNm_callBackFunc, "", nmVal, 'T', '7', null, '150,170', null, null, '440', '500', null, null, null, "F", null);
      break;
    case "lobranNm":
      udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranNm_callBackFunc, "", nmVal, "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명");
      break;
    case "unitCd":
      udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc, nmVal, '', 'T', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
      break;
  }
};

/* 품명 공통팝업 콜백 */
scwin.udc_comCodeGrid_commNm_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "commCd", "commNm");
};

/* 작업장 공통팝업 콜백 */
scwin.udc_comCodeGrid_wrkPlNm_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "wrkPlCd", "wrkPlNm");
};

/* 단위 공통팝업 콜백 */
scwin.udc_comCodeGrid_unitCd_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "unitCd", "");
};

/* 작업점소 공통팝업 콜백 */
scwin.udc_comCodeGrid_lobranNm_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_tariff, ds_tariff.getRowPosition(), "lobranCd", "lobranNm");
};

/* 조회 */
scwin.f_Retrieve = async function (e) {
  var ctrtNo = scwin.ctrtNo;

  // 저장 후 재조회 시 수정 확인 스킵
  if (scwin._isAfterSave) {
    scwin._isAfterSave = false;
  } else if (ds_tariff.getModifiedIndex().length > 0) {
    var ret = await $c.win.confirm($p, MSG_CM_CRM_015);
    if (ret) {
      if (!scwin.parentFrame.scwin.f_isCompletedChk(scwin.PAGE_IDX)) {
        return false;
      }
      await scwin.f_Save('');
      return;
    }
  }
  if (acb_selpchItemCd.getValue() == "") {
    $c.win.alert($p, MSG_CM_ERR_002, new Array("요율항목"));
    return;
  }
  dma_retrieve.set("ctrtNo", ctrtNo);
  dma_retrieve.set("selpchItemCd", acb_selpchItemCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

/* 행 위치 변경 이벤트 */
scwin.ds_tariff_onrowpositionchange = function (info) {
  if (info.newRowIndex < 0 || ds_tariff.getRowCount() < 1) return;
  $c.gus.cfPrepareHidVal($p, ds_tariff, info.newRowIndex, ["commCd", "commNm", "unitCd", "lobranCd", "lobranNm", "wrkPlCd", "wrkPlNm"]);

  // 가계약 여부에 따라 편집 가능 설정
  gr_tariff.setColumnReadOnly("ctrtWrkPathSeq", false);
  gr_tariff.setColumnReadOnly("commNm", false);
  gr_tariff.setColumnReadOnly("unitCd", false);
  gr_tariff.setColumnReadOnly("crcCd", false);
  gr_tariff.setColumnReadOnly("adptPtimeDd", false);
  gr_tariff.setColumnReadOnly("dptPtimeDd", false);
  gr_tariff.setColumnReadOnly("freeday", false);
  gr_tariff.setColumnReadOnly("strAdptUnitCd", false);
  gr_tariff.setColumnReadOnly("strFddAdptStdCd", false);
  gr_tariff.setColumnReadOnly("strTrfAdptStdCd", false);
  gr_tariff.setColumnReadOnly("cfsWrkfClsCd", false);
  gr_tariff.setColumnReadOnly("lobranNm", false);
  gr_tariff.setColumnReadOnly("wrkPlNm", false);

  // 작업장/물류점소 중 하나만 입력 가능
  if (ds_tariff.getCellData(info.newRowIndex, "lobranNm") == "") {
    if (ds_tariff.getCellData(info.newRowIndex, "wrkPlNm") == "") {
      gr_tariff.setColumnReadOnly("lobranNm", false);
      gr_tariff.setColumnReadOnly("wrkPlNm", false);
    } else {
      gr_tariff.setColumnReadOnly("lobranNm", true);
      gr_tariff.setColumnReadOnly("wrkPlNm", false);
    }
  } else {
    if (ds_tariff.getCellData(info.newRowIndex, "wrkPlNm") == "") {
      gr_tariff.setColumnReadOnly("lobranNm", false);
      gr_tariff.setColumnReadOnly("wrkPlNm", true);
    }
  }
  if (ds_tariff.getRowStatusValue(info.newRowIndex) != 2) {
    gr_tariff.setColumnReadOnly("ctrtWrkPathSeq", true);
    if (ds_tariff.getCellData(info.newRowIndex, "prvsCtrtTrfYn") == "1") {
      gr_tariff.setColumnReadOnly("commNm", true);
      gr_tariff.setColumnReadOnly("unitCd", true);
      gr_tariff.setColumnReadOnly("crcCd", true);
      gr_tariff.setColumnReadOnly("adptPtimeDd", true);
      gr_tariff.setColumnReadOnly("dptPtimeDd", true);
      gr_tariff.setColumnReadOnly("freeday", true);
      gr_tariff.setColumnReadOnly("strAdptUnitCd", true);
      gr_tariff.setColumnReadOnly("strFddAdptStdCd", true);
      gr_tariff.setColumnReadOnly("strTrfAdptStdCd", true);
      gr_tariff.setColumnReadOnly("cfsWrkfClsCd", true);
      gr_tariff.setColumnReadOnly("lobranNm", true);
      gr_tariff.setColumnReadOnly("wrkPlNm", true);
    }
  }
};

/* Excel/CSV 업로드 — 임시 그리드로 업로드 후 메인에 APPEND */
scwin.f_upload = async function () {
  if (udc_topGrdBtn.getUpExt() == "1") {
    var options = {
      fileName: "gridDataUpload.csv",
      status: "C",
      header: 1,
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
      headerExist: 1,
      type: "1",
      startRowIndex: 2,
      footerExist: 0
    };
    await $c.data.uploadGridViewExcel($p, gr_tmp_tariff, options);
  }
};

/* 업로드 완료 후 메인 DS에 APPEND (ASIS 방식 — cfCommonPopUpAsync로 코드 검증) */
scwin.gr_tmp_tariff_onfilereadend = async function (e) {
  var rowNum = ds_up_tariff.getRowCount();
  for (var i = 0; i < rowNum; i++) {
    var insRow = ds_tariff.insertRow();
    ds_tariff.setCellData(insRow, "ctrtNo", scwin.ctrtNo);
    ds_tariff.setCellData(insRow, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(insRow, "ctrtWrkPathSeq", scwin.extractCode(ds_up_tariff.getCellData(i, "ctrtWrkPathSeq")));

    // 품명코드 검증
    if (ds_up_tariff.getCellData(i, "commCd") != "") {
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      var rtnComm = await udc_comCodeGrid.cfCommonPopUpAsync(null, ds_up_tariff.getCellData(i, "commCd"), "", "T", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", '440', '500', null, null, null, "F", "품목／품명,품목／품명코드,품목／품명", "T");
      if (rtnComm == null || rtnComm == 0 || rtnComm == "N/A") {
        await $c.win.alert($p, scwin.MSG_SD_ERR_003.replace("@", i + 1).replace("@", "품명"));
        ds_tariff.removeAll();
        ds_up_tariff.removeAll();
        return;
      }
      $c.gus.cfSetGridReturnValue($p, rtnComm, ds_tariff, insRow, "commCd", "commNm");
    }
    ds_tariff.setCellData(insRow, "unitCd", scwin.extractCode(ds_up_tariff.getCellData(i, "unitCd")));
    ds_tariff.setCellData(insRow, "crcCd", scwin.reverseLookupCode(ds_up_tariff.getCellData(i, "crcCd"), ds_crcCd, "cd", "cdNm"));
    ds_tariff.setCellData(insRow, "ctrtTrf", ds_up_tariff.getCellData(i, "ctrtTrf"));
    ds_tariff.setCellData(insRow, "adptPtimeDd", ds_up_tariff.getCellData(i, "adptPtimeDd"));
    ds_tariff.setCellData(insRow, "basisStrTrf", ds_up_tariff.getCellData(i, "basisStrTrf"));
    ds_tariff.setCellData(insRow, "freeday", ds_up_tariff.getCellData(i, "freeday"));
    ds_tariff.setCellData(insRow, "strAdptUnitCd", scwin.extractCode(ds_up_tariff.getCellData(i, "strAdptUnitCd")));
    ds_tariff.setCellData(insRow, "strFddAdptStdCd", scwin.extractCode(ds_up_tariff.getCellData(i, "strFddAdptStdCd")));
    ds_tariff.setCellData(insRow, "strTrfAdptStdCd", scwin.extractCode(ds_up_tariff.getCellData(i, "strTrfAdptStdCd")));
    ds_tariff.setCellData(insRow, "cfsWrkfClsCd", scwin.extractCode(ds_up_tariff.getCellData(i, "cfsWrkfClsCd")));

    // 물류점소코드 검증
    if ((ds_up_tariff.getCellData(i, "lobranCd") || "").trim() != "") {
      udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
      var rtnLobran = await udc_comCodeGrid.cfCommonPopUpAsync(null, (ds_up_tariff.getCellData(i, "lobranCd") || "").trim(), "", "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", '440', '500', null, null, null, "F", "작업점소,작업점소코드,작업점소명", "T");
      if (rtnLobran != null && rtnLobran != 0 && rtnLobran != "N/A") {
        $c.gus.cfSetGridReturnValue($p, rtnLobran, ds_tariff, insRow, "lobranCd", "lobranNm");
      }
    }

    // 작업장코드 검증
    if ((ds_up_tariff.getCellData(i, "wrkPlCd") || "").trim() != "") {
      udc_comCodeGrid.setSelectId('retrieveWrkPlInfo');
      var rtnWrkPl = await udc_comCodeGrid.cfCommonPopUpAsync(null, (ds_up_tariff.getCellData(i, "wrkPlCd") || "").trim(), "", 'T', '7', null, '150,170', null, null, '440', '500', null, null, null, "F", null, "T");
      if (rtnWrkPl != null && rtnWrkPl != 0 && rtnWrkPl != "N/A") {
        $c.gus.cfSetGridReturnValue($p, rtnWrkPl, ds_tariff, insRow, "wrkPlCd", "wrkPlNm");
      }
    }
  }
  ds_up_tariff.removeAll();
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
  gr_tariff.refresh();
};

/**
 * @description [code]label 형식에서 code 추출. 형식이 아니면 원본 반환
 */
scwin.extractCode = function (val) {
  if (!val) return val;
  val = String(val);
  if (val.charAt(0) == "[") {
    var idx = val.indexOf("]");
    if (idx > 0) return val.substring(1, idx);
  }
  return val;
};

/**
 * @description label로 code 역변환 (cfChangeCdNmFormat 미적용 select용)
 */
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

/* 행추가 */
scwin.f_addRow = function () {
  var newRow;
  if (ds_tariff.getRowCount() == 0) {
    newRow = ds_tariff.insertRow();
    ds_tariff.setCellData(newRow, 'ctrtNo', scwin.ctrtNo);
    ds_tariff.setCellData(newRow, 'transMdCtrtTrfSeq', "1");
    ds_tariff.setCellData(newRow, 'selpchItemCd', acb_selpchItemCd.getValue());
    ds_tariff.setCellData(newRow, 'crcCd', "KRW");
  } else {
    scwin.parentFrame.scwin.f_recordCopy(gr_tariff);
    newRow = ds_tariff.getRowCount() - 1;
  }
  ds_tariff.setRowPosition(newRow);
  gr_tariff.setFocusedCell(newRow, 0, false);
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
};

/* 행삭제 */
scwin.f_delRow = function () {
  var rowCount = ds_tariff.getRowCount();
  if (rowCount < 1) return;
  var row = ds_tariff.getRowPosition();
  if (row < 0) {
    row = rowCount - 1;
  }
  var status = ds_tariff.getRowStatusValue(row);
  if (status == 2 || status == "C") {
    ds_tariff.removeRow(row);
  } else {
    ds_tariff.deleteRow(row);
  }

  // 삭제 후 행 위치 재설정
  var newRowCount = ds_tariff.getRowCount();
  if (newRowCount > 0) {
    var newRow = Math.min(row, newRowCount - 1);
    ds_tariff.setRowPosition(newRow);
  }
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
};

/* 취소 */
scwin.f_Undo = function (e) {
  $c.data.undoRow($p, ds_tariff, "Y");
};

/* 저장 */
scwin._saving = false;
scwin.f_Save = async function (moveGb, callback) {
  scwin._saving = true;
  try {
    if (typeof moveGb !== "string") moveGb = "";
    if (ds_tariff.getModifiedIndex().length < 1) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("보관요율"));
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
          scwin.sbm_save_submitdone(e, callback);
          return true;
        }
      } else {
        return false;
      }
    }
  } finally {
    scwin._saving = false;
  }
};

/* 필수항목 체크 */
scwin.f_reqFieldChk = async function () {
  var ret = await $c.gus.cfValidate($p, [gr_tariff]);
  if (!ret) {
    return false;
  }
  for (var i = 0; i < ds_tariff.getRowCount(); i++) {
    if (ds_tariff.getCellData(i, 'selpchItemCd') == "") {
      $c.win.alert($p, MSG_CM_ERR_002, new Array("운송조건"));
      return false;
    }
    if (ds_tariff.getCellData(i, "crcCd") == "KRW" && ds_tariff.getCellData(i, "basisStrTrf") % 1 > 0) {
      $c.win.alert($p, scwin.MSG_SD_ERR_001);
      ds_tariff.setRowPosition(i);
      gr_tariff.setFocusedCell("basisCtrtTrf");
      return false;
    }
  }
  return true;
};

/* 그리드 셀 데이터 변경 */
scwin.ds_tariff_oncelldatachange = function (info) {
  var colid = info.colId;
  switch (colid) {
    case "lobranNm":
      // 작업장/물류점소 중 하나만 입력 가능
      if (ds_tariff.getCellData(info.newRowIndex, "lobranNm") == "") {
        gr_tariff.setColumnReadOnly("lobranNm", false);
        gr_tariff.setColumnReadOnly("wrkPlNm", false);
      } else {
        gr_tariff.setColumnReadOnly("lobranNm", false);
        gr_tariff.setColumnReadOnly("wrkPlNm", true);
      }
      break;
    case "wrkPlNm":
      // 작업장/물류점소 중 하나만 입력 가능
      if (ds_tariff.getCellData(info.newRowIndex, "wrkPlNm") == "") {
        gr_tariff.setColumnReadOnly("lobranNm", false);
        gr_tariff.setColumnReadOnly("wrkPlNm", false);
      } else {
        gr_tariff.setColumnReadOnly("lobranNm", true);
        gr_tariff.setColumnReadOnly("wrkPlNm", false);
      }
      break;
    default:
      break;
  }
};

/* 차량 규격 필터 */
scwin.ds_EqNrmCd_onfilter = function () {
  if (ds_tariff.getRowCount() <= 0) return;
  var condition = "upperCd == '" + ds_tariff.getCellData(ds_tariff.getRowPosition(), "eqKndCd") + "'";
  ds_EqNrmCd.removeColumnFilterAll();
  $c.data.dataListFilter($p, ds_EqNrmCd, condition);
};

/* 차량규격 행 위치 변경 */
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
    fileName: "보관요율.xlsx",
    sheetName: "보관요율",
    type: "1",
    useDataFormat: "true",
    hiddenVisible: false
  };
  $c.data.downloadGridViewExcel($p, gr_tariff, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_selpchItemCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',displayMode:'value delim label',ref:'data:dma_retrieve.selpchItemCd','ev:onchange':'scwin.acb_selpchItemCd_onchange',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보관요율 등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'Y',btnPlusYn:'Y',gridID:'gr_tariff',id:'udc_topGrdBtn',gridDownYn:'Y',btnUser:'N',gridDownFn:'scwin.f_gridDown',gridUpFn:'scwin.f_upload',btnPlusFn:'scwin.f_addRow',btnMinusFn:'scwin.f_delRow',gridUpObjType:'bCreate'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tariff',id:'gr_tariff',style:'',visibleRowNum:'11',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'10','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick','ev:oneditend':'scwin.gr_tariff_oneditend','ev:onafteredit':'scwin.gr_tariff_onafteredit',validFeatures:'ignoreStatus=no',validExp:'ctrtWrkPathSeq:계약작업경로:yes::key,commNm:품명:yes::key,unitCd:단위:yes,crcCd:통화:yes,ctrtTrf:요율:yes:minNumber=0.01,strAdptUnitCd::no::key,adptPtimeDd:적용시점:no:minNumber=0:key,freeday:FREEDAY:no:minNumber=0:key,strFddAdptStdCd:기일적용기준:no::key,strTrfAdptStdCd:요율적용기준:no::key,cfsWrkfClsCd::no::key,lobranNm::no::key,wrkPlNm::no::key'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계약작업경로',width:'170',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품목코드',width:'100',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품목/품명',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'단위',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'통화',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'요율',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'경과<br/>일수',width:'70',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'기본보관료',width:'140',colSpan:'2',sortable:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'적용단위',width:'100',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'기일<br/>적용기준',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'요율<br/>적용기준',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'CFS작업비구분',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'물류점소코드',displayMode:'label',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'물류점소',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'작업장',displayMode:'label',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'작업장',displayMode:'label',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',displayMode:'label',value:'요율',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label',value:'기본일수',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'select',width:'170',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'select',width:'70',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_crcCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptPtimeDd',inputType:'text',width:'70',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'basisStrTrf',inputType:'text',width:'70',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'freeday',inputType:'text',width:'100',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{id:'strAdptUnitCd',inputType:'select',width:'100',textAlign:'left',hidden:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'select',id:'strFddAdptStdCd',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'strTrfAdptStdCd',displayMode:'value delim label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'cfsWrkfClsCd',displayMode:'value delim label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lobranCd',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'lobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPlCd',displayMode:'label',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'wrkPlNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del'}},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false','ev:onclick':'scwin.f_Undo',id:'btn_cls',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'width:0px; height:0px; ',id:'wfm_ctrtComplete',src:'/ui/ds/sd/salesactiv/ctrtmgnt/ctrtCompleteYn.xml'}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'',style:'display: none;'}},{T:1,N:'w2:gridView',A:{dataList:'data:ds_up_tariff',id:'gr_tmp_tariff',style:'display:none;','ev:onfilereadend':'scwin.gr_tmp_tariff_onfilereadend'},E:[{T:1,N:'w2:header',A:{id:'header_tmp'},E:[{T:1,N:'w2:row',A:{id:'row_tmp'},E:[{T:1,N:'w2:column',A:{id:'col_t1',value:'계약작업경로',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t2',value:'품명코드',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t3',value:'품명',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t4',value:'단위',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t5',value:'통화',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t6',value:'요율',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t7',value:'경과일수',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t8',value:'기본보관료',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t9',value:'기본일수',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t10',value:'적용단위',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t11',value:'기일적용기준',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t12',value:'요율적용기준',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t13',value:'CFS작업비구분',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t14',value:'물류점소코드',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t15',value:'물류점소명',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t16',value:'작업장코드',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'col_t17',value:'작업장명',inputType:'text',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody_tmp'},E:[{T:1,N:'w2:row',A:{id:'row_tmp2'},E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'commCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'commNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'unitCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'adptPtimeDd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'basisStrTrf',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'freeday',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'strAdptUnitCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'strFddAdptStdCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'strTrfAdptStdCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'cfsWrkfClsCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'lobranCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'lobranNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',inputType:'text',width:'80'}}]}]}]}]}]}]})