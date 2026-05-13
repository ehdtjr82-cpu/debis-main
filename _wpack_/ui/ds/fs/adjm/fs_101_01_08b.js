/*amd /ui/ds/fs/adjm/fs_101_01_08b.xml 54736 b99229910361f1541d28dbdaa4bae543d4d1b2fa7dbd719098980aa737042d00 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchRailroadMisosukList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'출발시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'출발종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadMisosukList',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'offDayYn',name:'휴일여부',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dayCapaTeu',name:'일CAPA',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'teuCnt',name:'실적TEU',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'misosuk',name:'미소석TEU',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'misosukRailroadFare',name:'미소석금액',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseOrderDTO',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'certiCreatYn',name:'거래명세서 생성여부',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'화물구분',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'청구처',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceDTO',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'매입예정일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'summary',name:'비고',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_nosellPurchaseDTOList',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'pchsUpr',name:'매입단가',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'vat',name:'매입부가세',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'매입품목유형코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'거래명세서번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입seq',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_primeCostCreationConsequence',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRailroadMisosukPrimeCost',action:'/ds.fs.adjm.adjmbdcalc.RetrieveRailroadMisosukPrimeCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchRailroadMisosukList","key":"IN_DS1"},{"id":"ds_RailroadMisosukList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadMisosukList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRailroadMisosukPrimeCost',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseOrderDTO","key":"IN_DS1"},{"id":"ds_purchaseEvidenceDTO","key":"IN_DS2"},{"id":"ds_nosellPurchaseDTOList","key":"IN_DS3"},{"id":"ds_primeCostCreationConsequence","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_primeCostCreationConsequence","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_odrInfo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_odrInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();

  // testData
  // ed_pchsDeptCd.setValue('4B2');
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  // 서버를 기준으로 현재 날짜 반환
  const vCurDate = $c.date.getServerDateTime($p, 'yyyyMM');

  // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryStDt = vCurDate + "01";
  // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
  scwin.vQryEndDt = vCurDate + $c.date.getLastDateOfMonth($p, vCurDate);
  scwin.save = ""; // 등록, 삭제 여부
  scwin.newDate = "";
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  scwin.f_SetDefaultData();
};

/**
 * @method 
 * @name f_SetDefaultData
 * @description Default Data Setting 
 */
scwin.f_SetDefaultData = function () {
  acb_adminfrtcarYn.setSelectedIndex(0);
  ica_wrkDtSt.setValue(scwin.vQryStDt); // 배차일자시작
  ica_wrkDtEnd.setValue(scwin.vQryEndDt); // 배차일자종료

  ica_wrkDtSt.focus();
};

/**
 * @method 
 * @name f_RetrieveStationEachRailroadCutAmtList
 * @description 철송 미소석 원가 생성  조회
 */
scwin.f_RetrieveStationEachRailroadCutAmtList = async function () {
  const startDate = ica_wrkDtSt.getValue();
  const endDate = ica_wrkDtEnd.getValue();

  //기타 오더 존재 유무 검사 
  await scwin.f_setOdrInfo(ed_pchsDeptCd.getValue(), startDate);
  const validCheck = await $c.gus.cfValidate($p, [ica_wrkDtSt, ica_wrkDtEnd, ed_pchsDeptCd], null, true);
  if (!validCheck) return;
  if (!$c.gus.cfIsAfterDate($p, startDate, endDate)) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkDtSt.focus();
    return;
  }

  //매입예정일 세팅 - 출발종료일자의 마지막 일 구하기
  const dayMonth = startDate.slice(0, 6);
  scwin.newDate = dayMonth + $c.date.getLastDateOfMonth($p, dayMonth);
  await scwin.submitExcute(sbm_retrieveRailroadMisosukPrimeCost);
};

/**
 * @method 
 * @name f_CalcMisosuk
 * @description 미소석 금액 자동계산
 */
scwin.f_CalcMisosuk = function () {
  let totMisosukTeu = 0,
    totSpplyAmt = 0,
    totVat = 0;
  const rowCnt = ds_RailroadMisosukList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    const {
      misosukRailroadFare,
      misosuk
    } = ds_RailroadMisosukList.getRowJSON(i);
    totSpplyAmt += $c.num.parseFloat($p, misosukRailroadFare, 0);
    totMisosukTeu += $c.num.parseFloat($p, misosuk, 0);
  }
  ;
  totVat = totSpplyAmt * 0.1;
  ed_misosukTeu.setValue(totMisosukTeu);
  ed_spplyAmt.setValue(totSpplyAmt);
  ed_vat.setValue(totVat);
  ed_railPchsDeptCd.setValue(ed_pchsDeptCd.getValue());
  ed_railPchsDeptNm.setValue(ed_pchsDeptNm2.getValue());
};

/**
 * @method 
 * @name f_RegistNosellOrderPrimeCost
 * @description 매입 생성 및 승인 
 */
scwin.f_RegistNosellOrderPrimeCost = async function () {
  const validDcsnData = await $c.gus.cfValidate($p, [tb_dcsnData]);
  if (!validDcsnData) return;

  //기타 오더 존재 유무 검사 
  scwin.f_setOdrInfo(ed_railPchsDeptCd.getValue(), ica_slipDt.getValue());
  if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "col1"))) {
    await $c.win.alert($p, ed_railPchsDeptNm.getValue() + "의 미소석 원가가 이미 존재 합니다. ");
    return;
  }
  ;
  if ($c.num.parseInt($p, ed_spplyAmt.getValue(), 0) <= 0) return;

  // 저장하시겠습니까?
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.save = "REGIST";
  ds_purchaseOrderDTO.removeAll();
  ds_purchaseEvidenceDTO.removeAll();
  ds_nosellPurchaseDTOList.removeAll();
  const poIdx = ds_purchaseOrderDTO.insertRow();
  const peIdx = ds_purchaseEvidenceDTO.insertRow();
  const nosellIdx = ds_nosellPurchaseDTOList.insertRow();

  //오더정보 세팅
  ds_purchaseOrderDTO.setRowJSON(poIdx, {
    "regBranCd": "1CC",
    "certiCreatYn": 1,
    "impExpDomesticClsCd": "I",
    "transCargoClsCd": "C",
    "clntNo": "999901"
  }, true);

  //매입증빙정보 세팅
  ds_purchaseEvidenceDTO.setRowJSON(peIdx, {
    "pchsClntNo": ed_pchsClntNo.getValue(),
    "pchsDeptCd": ed_railPchsDeptCd.getValue(),
    "spplyDt": ica_slipDt.getValue(),
    "summary": ed_summary.getValue(),
    "dcsnClsCd": "2" // 확정구분코드(확인)
  }, true);

  //매입정보 세팅
  ds_nosellPurchaseDTOList.setRowJSON(nosellIdx, {
    "pchsUpr": ed_spplyAmt.getValue(),
    "pchsAmt": ed_spplyAmt.getValue(),
    "vat": ed_vat.getValue(),
    "rsltsStdDt": ica_slipDt.getValue(),
    "selpchItemCd": "0134",
    // 매입항목(철송임)
    "pchsGoodsPatternCd": "09",
    "vol": 1
  }, true);
  const targetSbm = sbm_saveRailroadMisosukPrimeCost;
  targetSbm.action = "/ds.fs.adjm.adjmbdcalc.RegistNosellOrderPrimeCostCMD.do";
  await scwin.submitExcute(targetSbm);
};

/**
 * @method 
 * @name f_RegistNosellOrderPrimeCost
 * @description 삭제
 */
scwin.f_Delete = async function () {
  let dcsnClsCd = "";
  ds_purchaseOrderDTO.removeAll();
  ds_purchaseEvidenceDTO.removeAll();
  ds_nosellPurchaseDTOList.removeAll();
  if (!$c.gus.cfIsNull($p, txt_odrNo.getValue())) {
    //오더정보 세팅
    const poIdx = ds_purchaseOrderDTO.insertRow();
    ds_purchaseOrderDTO.setCellData(poIdx, "odrNo", txt_odrNo.getValue());

    //매입정보 세팅
    const noSellIdx = ds_nosellPurchaseDTOList.insertRow();
    ds_nosellPurchaseDTOList.setRowJSON(noSellIdx, {
      "pchsCertiNo": txt_certiNo.getValue(),
      "odrNo": txt_odrNo.getValue(),
      "pchsSeq": 1
    }, true);
  }
  ;
  if (ds_nosellPurchaseDTOList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "삭제할 목록이 존재하지 않습니다.");
    return;
  }
  ;
  if (ds_purchaseEvidenceDTO.getRowCount() != 0 && ["1", "2"].includes(dcsnClsCd)) {
    await $c.gus.cfAlertMsg($p, "확정구분이 미확인, 확인인 경우만 삭제가능합니다.");
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (!retConfirm) return;
  scwin.save = "DELETE";
  const targetSbm = sbm_saveRailroadMisosukPrimeCost;
  targetSbm.action = "/ds.fs.adjm.adjmbdcalc.DeleteNosellOrderPrimeCostCMD.do";
  await scwin.submitExcute(targetSbm);
};

/**
 * @method 
 * @name f_RunExcel
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = async function () {
  const excelTitle = "철송 미소석 원가 생성";
  const excelGrid = gr_RailroadMisosukList;
  const count = excelGrid.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;
  let options = {
    sheetName: excelTitle,
    fileName: excelTitle + ".xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  let visibleColCnt = 0;
  let totalColCnt = excelGrid.getTotalCol();
  for (let i = 0; i < totalColCnt; i++) {
    if (excelGrid.getColumnVisible(i)) visibleColCnt++;
  }
  ;
  let infoArr = [{
    text: excelTitle,
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: visibleColCnt,
    textAlign: 'center',
    fontSize: '12px',
    fontName: '맑은 고딕',
    color: 'black',
    bgColor: '#ffffff',
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, excelGrid, options, infoArr);
};

/**
 * @method 
 * @name f_openCommonPopUp
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let paramObj = {};
  switch (disGubun) {
    case 1:
      // 출발역 팝업
      paramObj.selectId = 'retrieveTrainWorkPlace';
      paramObj.code = ed_dptWrkPlCd; // 출발역코드
      paramObj.name = ed_dptWrkPlNm; // 출발역명
      break;
    case 2:
      // 도착역 팝업
      paramObj.selectId = 'retrieveTrainWorkPlace';
      paramObj.code = ed_arvWrkPlCd; // 도착역코드
      paramObj.name = ed_arvWrkPlNm; // 도착역명	
      break;
    case 3:
      // 매입부서  팝업	
      paramObj.selectId = 'retrieveLobranInfo';
      paramObj.code = ed_pchsDeptCd; // 매입부서코드
      paramObj.name = ed_pchsDeptNm2; // 매입부서명			
      break;
    case 4:
      // 매입부서 팝업
      paramObj.selectId = 'retrieveLobranInfo';
      paramObj.code = ed_railPchsDeptCd; // 매입부서코드
      paramObj.name = ed_railPchsDeptNm; // 매입부서명			
      break;
    case 5:
      // 매입거래처 팝업
      paramObj.selectId = 'retrieveClntList';
      paramObj.code = ed_pchsClntNo; // 매입부서코드
      paramObj.name = ed_pchsClntNm; // 매입부서명
      break;
    case 6:
      // 작성귀속부서 팝업
      paramObj.selectId = 'retrieveAcctDeptCdInfo';
      paramObj.code = ed_drawAcctDeptCd; // 작성귀속부서코드
      paramObj.name = txt_drawAcctDeptNm; // 작성귀속부서명
      break;
    default:
      return;
  }
  ;
  udc_comCode.setSelectId(paramObj.selectId);
  udc_comCode.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, paramObj.code, paramObj.name);
  }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 getValue() Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_InitObjects
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

/**
 * @method 
 * @name f_InitObjects
 * @description 검색영역 Field Clear함.
 */
scwin.f_setOdrInfo = async function (param1, param2) {
  sbm_odrInfo.action = "/cm.zz.RetrieveCommonPopupCMD.do" + "?sysCd=CommonEBC" + "&queryId=retrieveRailroadMisosukOdrNoInfo" + "&param1=" + param1 + "&param2=" + param2;
  await scwin.submitExcute(sbm_odrInfo);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name adminfrtcarYn_formatter 
 * @description 화차구분 formatter
 */
scwin.adminfrtcarYn_formatter = function (value) {
  switch (value) {
    case '2':
      return '저수요';
    case '3':
      return '전용';
    default:
      return '';
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieveRailroadMisosukPrimeCost:
      // for=sbm_retrieveRailroadMisosukPrimeCost event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      await scwin.ds_RailroadMisosukList_OnLoadCompleted(ds_RailroadMisosukList.getRowCount());

      // for=sbm_retrieveRailroadMisosukPrimeCost event=OnSuccess()
      if ($c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "col1"))) {
        ed_pchsClntNo.setValue("529049");
        ed_pchsClntNm.setValue("한국철도공사");
        ica_slipDt.setValue(scwin.newDate);
        txt_odrNo.setValue("");
        txt_certiNo.setValue("");
        ed_summary.setValue("");
        scwin.f_CalcMisosuk();
      }
      ;
      if (!$c.gus.cfIsNull($p, txt_odrNo.getValue())) {
        $c.gus.cfDisableBtnOnly($p, [btn_Save]);
        $c.gus.cfDisableObjects($p, [tb_dcsnData]);
        // todo - cfDisableObjects 시에 udc가 이상하게 전환됨
        ed_pchsClntNo.setDisabled(true);
        ed_pchsClntNm.setDisabled(true);
        btn_PopUp3.setDisabled(true);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Save]);
        $c.gus.cfEnableObjects($p, [tb_dcsnData]);
        // todo - cfDisableObjects 시에 udc가 이상하게 전환됨
        ed_pchsClntNo.setDisabled(false);
        ed_pchsClntNm.setDisabled(false);
        btn_PopUp3.setDisabled(false);
      }
      ;
      break;

    // 매입생성및 승인 TR
    case sbm_saveRailroadMisosukPrimeCost:
      // for=tr_saveRailroadMisosukPrimeCost event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      const saveFunc = {
        "REGIST": async () => {
          const focusIdx = ds_primeCostCreationConsequence.getRowPosition();
          const rowData = ds_primeCostCreationConsequence.getRowJSON(focusIdx);
          txt_odrNo.setValue(rowData.odrNo); // 오더번호
          txt_certiNo.setValue(rowData.certiNo); // 거래명세서번호

          $c.gus.cfDisableBtnOnly($p, [btn_Save]);
          $c.gus.cfDisableObjects($p, [tb_dcsnData]);
          await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
        },
        "DELETE": () => {
          txt_odrNo.setValue("");
          txt_certiNo.setValue("");
          $c.gus.cfEnableBtnOnly($p, [btn_Save]);
          $c.gus.cfEnableObjects($p, [tb_dcsnData]);
        }
      };
      await saveFunc[scwin.save]();
      scwin.f_RetrieveStationEachRailroadCutAmtList();
      break;
    case sbm_odrInfo:
      await scwin.ds_odrInfo_OnLoadCompleted(ds_odrInfo.getRowCount());
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'offDayYn', 0, gr_RailroadMisosukList, totalRows);
  }
  ;
};

/**
 * @method 
 * @name dlt_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.dlt_oninsertrow = function (info) {
  if (Object.keys(info.insertedDataObj).length < 1) return;
  const rowIdx = Object.keys(info.insertedDataObj)[0] ?? 0;
  this.setRowPosition(rowIdx);
  scwin.gridSetFocus(this, 'offDayYn', rowIdx, gr_RailroadMisosukList, totalRows);
};

/**
 * @method 
 * @name dlt_onremoverow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.dlt_onremoverow = function (info) {
  if (Object.keys(info.removedDataObj).length < 1) return;
  const rowIdx = Number(Object.keys(info.removedDataObj)[0]) - 1;
  const clacIdx = rowIdx == -1 ? 0 : rowIdx;
  this.setRowPosition(clacIdx);
  scwin.gridSetFocus(this, 'offDayYn', clacIdx, gr_RailroadMisosukList, totalRows);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid, targetRows) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
  targetRows.setValue(dataList.getRowCount());
};

/**
 * @method 
 * @name ds_RailroadMisosukList_OnLoadCompleted 
 * @description
 * @asis for=ds_RailroadMisosukList event=OnLoadCompleted(rowCnt)
 */
scwin.ds_RailroadMisosukList_OnLoadCompleted = async function (rowCnt) {
  // 총 조회건수 표시
  totalRows.setValue(rowCnt);

  // todo - btn_PopUp2 중복으로 존재하여 asis에서 적용 안되는 것으로 보임
  const switchObjs = [ica_slipDt, ed_summary, ed_pchsClntNo, ed_pchsClntNm, btn_PopUp3, ed_spplyAmt, ed_vat];
  const switchBtns = [btn_Save];
  if (rowCnt == 0) {
    $c.gus.cfDisableObjects($p, switchObjs);
    $c.gus.cfDisableBtnOnly($p, switchBtns);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    return;
  }
  ;
  $c.gus.cfEnableObjects($p, switchObjs);
  $c.gus.cfEnableBtnOnly($p, switchBtns);
};

/**
 * @method 
 * @name ds_odrInfo_OnLoadCompleted 
 * @description
 * @asis for=ds_odrInfo event=OnLoadCompleted(rowCnt)
 */
scwin.ds_odrInfo_OnLoadCompleted = function () {
  const rowData = ds_odrInfo.getRowJSON(0);
  if ($c.gus.cfIsNull($p, rowData.col1)) {
    ed_pchsClntNo.setValue("529049");
    ed_pchsClntNm.setValue("한국철도공사");
    ica_slipDt.setValue(scwin.newDate);
    txt_odrNo.setValue("");
    txt_certiNo.setValue("");
    ed_summary.setValue("");
    return;
  }
  ;
  txt_odrNo.setValue(rowData.col1); // 오더번호
  txt_certiNo.setValue(rowData.col9); // 거래명세서 번호

  ed_pchsClntNo.setValue(rowData.col4); // 매입거래처
  ed_pchsClntNm.setValue(rowData.col5); // 매입거래처명

  ed_railPchsDeptCd.setValue(rowData.col6); // 매입부서
  ed_railPchsDeptNm.setValue(rowData.col10); // 매입부서명

  ica_slipDt.setValue(rowData.col7); // 매입예정일자
  ed_misosukTeu.setValue(0); // 미소석 TEU

  ed_spplyAmt.setValue(rowData.col2); // 공급금액
  ed_vat.setValue(rowData.col3); // 부가세

  ed_summary.setValue(rowData.col8); // 비고
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_RailroadMisosukList_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_RailroadMisosukList event=OnCheckClick(Row,Colid,Check)
 */
scwin.gr_RailroadMisosukList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (!$c.gus.cfIsNull($p, txt_odrNo.getValue())) return;
  const colId = this.getColumnID(columnIndex);
  const rowData = this._dataList.getRowJSON(rowIndex);
  switch (colId) {
    case "offDayYn":
      if ($c.gus.cfIsNull($p, rowData.odrNo)) {
        const misosukTeu = $c.num.parseInt($p, ed_misosukTeu.getValue(), 0);
        const spplyAmt = $c.num.parseInt($p, ed_spplyAmt.getValue(), 0);
        const nMisosuck = $c.num.parseFloat($p, rowData.misosuk, 0);
        const nMisosukRailroadFare = $c.num.parseFloat($p, rowData.misosukRailroadFare, 0);
        if (rowData.offDayYn == 1) {
          ed_misosukTeu.setValue(misosukTeu - nMisosuck);
          ed_spplyAmt.setValue(spplyAmt - nMisosukRailroadFare);
          ed_vat.setValue(spplyAmt * 0.1);
        } else {
          ed_misosukTeu.setValue(misosukTeu + nMisosuck);
          ed_spplyAmt.setValue(spplyAmt + nMisosukRailroadFare);
          ed_vat.setValue(spplyAmt * 0.1);
        }
        ;
      }
      ;
      break;
  }
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent 
 * @description [매입부서] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm2, 3);
};

/**
 * @event 
 * @name udc_pchsDept_onviewchangeNameEvent 
 * @description [매입부서] name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm2, ed_pchsDeptCd, 2, false);
};

/**
 * @event 
 * @name udc_pchsDept_onclickEvent 
 * @description [매입부서] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_pchsDeptCd.getValue(), ed_pchsDeptNm2.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_dptWrkPl_onblurCodeEvent 
 * @description [출발역] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_dptWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, ed_dptWrkPlNm, 1);
};

/**
 * @event 
 * @name udc_dptWrkPl_onviewchangeNameEvent 
 * @description [출발역] name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_dptWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlNm, ed_dptWrkPlCd, 1, false);
};

/**
 * @event 
 * @name udc_dptWrkPl_onclickEvent 
 * @description [출발역] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name ed_arvWrkPl_onblurCodeEvent 
 * @description [도착역] code 포커스를 잃었을 때 발생한다.
 */
scwin.ed_arvWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, ed_arvWrkPlNm, 2);
};

/**
 * @event 
 * @name ed_arvWrkPl_onviewchangeNameEvent 
 * @description [도착역] name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.ed_arvWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 2, false);
};

/**
 * @event 
 * @name ed_arvWrkPl_onclickEvent 
 * @description [도착역] 검색 버튼 클릭 시 발생한다.
 */
scwin.ed_arvWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 초기화 버튼 클릭 시 발생한다.
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭 시 발생한다.
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveStationEachRailroadCutAmtList();
};

/**
 * @event 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description [매입거래처] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 5);
};

/**
 * @event 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description [매입거래처] name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 5, false);
};

/**
 * @event 
 * @name udc_pchsClnt_onclickEvent 
 * @description [매입거래처] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_railPchsDept_onblurCodeEvent 
 * @description [매입부서] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_railPchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_railPchsDeptCd, ed_railPchsDeptNm, 4);
};

/**
 * @event 
 * @name udc_railPchsDept_onviewchangeNameEvent 
 * @description [매입부서] name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_railPchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_railPchsDeptNm, ed_railPchsDeptCd, 4, false);
};

/**
 * @event 
 * @name udc_railPchsDept_onclickEvent 
 * @description [매입부서] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_railPchsDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_railPchsDeptCd.getValue(), ed_railPchsDeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name btn_Save_onclick 
 * @description [매입 생성 및 승인] 버튼 클릭 시 발생한다.
 */
scwin.btn_Save_onclick = function (e) {
  scwin.f_RegistNosellOrderPrimeCost();
};

/**
 * @event 
 * @name btn_Delete_onclick 
 * @description [삭제] 버튼 클릭 시 발생한다.
 */
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_searchRailroadMisosukList',refEdDt:'wrkDtEnd',refStDt:'wrkDtSt',style:'',edFromId:'ica_wrkDtSt',edToId:'ica_wrkDtEnd',titleFrom:'출발일자시작',titleTo:'출발일자종료',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsDeptCd',nameId:'ed_pchsDeptNm2',id:'udc_pchsDept',validTitle:'매입부서',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent',refDataCollection:'dma_searchRailroadMisosukList',code:'pchsDeptCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화차구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_adminfrtcarYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:dma_searchRailroadMisosukList.adminfrtcarYn',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm',id:'udc_dptWrkPl',objTypeCode:'key',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptWrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent',refDataCollection:'dma_searchRailroadMisosukList',code:'dptWrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',nameId:'ed_arvWrkPlNm',id:'ed_arvWrkPl',objTypeCode:'Key',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data','ev:onblurCodeEvent':'scwin.ed_arvWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.ed_arvWrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.ed_arvWrkPl_onclickEvent',refDataCollection:'dma_searchRailroadMisosukList',code:'arvWrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'철송 미소석 현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_RailroadMisosukList',gridDownFn:'scwin.f_RunExcel',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_RailroadMisosukList_oncellclick',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_RailroadMisosukList',style:'',autoFit:'allColumn',id:'gr_RailroadMisosukList',visibleRowNum:'7',class:'wq_gvw',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'출발일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'휴일여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'매입부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'화차구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'일CAPA(TEU)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'실적TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'미소석TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'미소석금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',name:'출발일자',width:'100',displayFormat:'yyyy/MM/dd',readOnly:'true',inputType:'text',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'휴일여부',width:'80',inputType:'checkbox',id:'offDayYn',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'출발역',width:'90',readOnly:'true',inputType:'text',id:'dptWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'도착역',width:'90',readOnly:'true',inputType:'text',id:'arvWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'매입부서',width:'80',readOnly:'true',inputType:'text',id:'pchsDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.adminfrtcarYn_formatter',textAlign:'center',name:'화차구분',width:'80',inputType:'text',readOnly:'true',id:'adminfrtcarYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',name:'일CAPA',width:'100',readOnly:'true',inputType:'text',id:'dayCapaTeu',displayMode:'label',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',name:'실적TEU',width:'80',readOnly:'true',inputType:'text',id:'teuCnt',displayMode:'label',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',name:'미소석TEU',width:'90',readOnly:'true',inputType:'text',id:'misosuk',displayMode:'label',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',name:'미소석금액',width:'110',displayFormat:'#,##0',readOnly:'true',inputType:'text',id:'misosukRailroadFare',displayMode:'label',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{textAlign:'center',name:'출발일자',width:'100',readOnly:'true',inputType:'text',id:'wrkStDt_tot',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'휴일여부',width:'80',inputType:'text',id:'offDayYn_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'출발역',width:'90',readOnly:'true',inputType:'text',id:'dptWrkPlNm_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'도착역',width:'90',readOnly:'true',inputType:'text',id:'arvWrkPlNm_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'매입부서',width:'80',readOnly:'true',inputType:'text',id:'pchsDeptNm_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',name:'화차구분',width:'80',inputType:'text',id:'adminfrtcarYn_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'dayCapaTeu\')',textAlign:'right',dataType:'number',name:'일CAPA',width:'100',displayFormat:'#,##0',readOnly:'true',inputType:'expression',id:'dayCapaTeu_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'teuCnt\')',textAlign:'right',dataType:'number',name:'실적TEU',width:'80',displayFormat:'#,##0',readOnly:'true',inputType:'expression',id:'teuCnt_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'misosuk\')',textAlign:'right',dataType:'number',name:'미소석TEU',width:'90',displayFormat:'#,##0',readOnly:'true',inputType:'expression',id:'misosuk_tot',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'misosukRailroadFare\')',textAlign:'right',dataType:'number',name:'미소석금액',width:'110',displayFormat:'#,##0',readOnly:'true',inputType:'expression',id:'misosukRailroadFare_tot',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'철송 미소석 원가 매입 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_dcsnData',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrNo',label:'',style:''}},{T:1,N:'w2:textbox',A:{id:'txt_odrNo',label:'',style:'width:150px; height:23px; ',class:'txt-blue'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_certiNo',label:'',style:''}},{T:1,N:'w2:textbox',A:{id:'txt_certiNo',label:'',style:'width:150px; height:23px; ',class:'txt-blue'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매입거래처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_pchsClntNo',nameId:'ed_pchsClntNm',id:'udc_pchsClnt',allowCharCode:'0-9',maxlengthCode:'6',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent',btnId:'btn_PopUp3'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매입부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_railPchsDeptCd',nameId:'ed_railPchsDeptNm',id:'udc_railPchsDept',objTypeCode:'data',mandatoryCode:'true',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validTitle:'매입부서',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_railPchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_railPchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_railPchsDept_onclickEvent',btnId:'btn_PopUp2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_slipDt',pickerType:'dynamic',style:'',objType:'data',validExp:'매입예정일자:yes:length=8',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'매입예정일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미소석TEU',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_misosukTeu',placeholder:'',style:'width:150px;',dataType:'number',customModelUnformatter:'number',displayFormat:'#,###',objType:'data',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmt',placeholder:'',style:'width:150px;',dataType:'number',displayFormat:'#,###',objType:'data',mandatory:'true',validExp:'공급금액:yes',maxlength:'13',title:'공급금액'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vat',placeholder:'',style:'width:150px;',dataType:'number',displayFormat:'#,###',objType:'data',validExp:'부가세:yes',maxlength:'13',title:'부가세'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',placeholder:'',style:'',maxByteLength:'100',objType:'data',mandatory:'true',validExp:'비고:yes',title:'비고'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_Save_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입생성 및 승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',progressBarSwitch:'Y',validTitle:'',nameId:'',style:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',id:'udc_comCode'}}]}]}]}]})