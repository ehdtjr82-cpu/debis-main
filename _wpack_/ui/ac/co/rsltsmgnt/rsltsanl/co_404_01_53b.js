/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_53b.xml 90145 0e6e8fe4b5e66d0bf77c7780e918ae0eaac46e14f0de105e3a91a74fd9a71c80 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'회계부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomNm',name:'사업영역',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'귀속부서레벨',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bookClsCdTemp',name:'장부구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bookClsCd',name:'장부구분(real)',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'distYn',name:'배부여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'dpctYn',name:'DPCT여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'closeYmYn',name:'마감년월여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'incluYn',name:'포함여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchAcctDept'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'귀속부서레벨',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bookClsCdTemp',name:'장부구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bookClsCd',name:'장부구분(real)',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'distYn',name:'배부여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'dpctYn',name:'DPCT여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'closeYmYn',name:'마감년월여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'incluYn',name:'포함여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'32',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text',length:'7',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'관리계정코드명',dataType:'text',length:'50',defaultValue:''}},{T:1,N:'w2:column',A:{id:'prtPosSeq',name:'발행위치순번',dataType:'text',length:'7',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'yearPlanAmt',name:'연간계획금액',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'당월전기금액',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'thisPlanAmt',name:'당월계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'당월실적',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'계획대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumBfyyThisAmt',name:'누계전기금액',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumPlanAmt',name:'누계계획금액',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumRsltsAmt',name:'누계실적금액',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumDiffer',name:'누계증감금액',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy1Prev',name:'1분기년실적-전기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy2Prev',name:'2분기년실적-전기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrUppPrev',name:'상반기년실적-전기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy3Prev',name:'3분기년실적-전기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy4Prev',name:'4분기년실적-전기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrLowPrev',name:'하반기년실적-전기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQatrYy1',name:'1분기년계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQatrYy2',name:'2분기년계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQatrUpp',name:'상반기년계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQatrYy3',name:'3분기년계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQatrYy4',name:'4분기년계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planQatrLow',name:'하반기년계획',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy1',name:'1분기년실적-당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy2',name:'2분기년실적-당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrUpp',name:'상반기년실적-당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy3',name:'3분기년실적-당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrYy4',name:'4분기년실적-당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltQatrLow',name:'하반기년실적-당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy1',name:'1분기년증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy2',name:'2분기년증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrUpp',name:'상반기년증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy3',name:'3분기년증감',dataType:'number',length:'38',defaultValue:''}},{T:1,N:'w2:column',A:{id:'diffQatrYy4',name:'4분기년증감',dataType:'number',length:'38',defaultValue:''}},{T:1,N:'w2:column',A:{id:'diffQatrLow',name:'하반기년증감',dataType:'number',length:'38',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rsltYearLowPrev',name:'년실적-전기',dataType:'number',length:'38',defaultValue:''}},{T:1,N:'w2:column',A:{id:'planYearLow',name:'년계획',dataType:'number',length:'38',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rsltYearLow',name:'년실적_당기',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffYearLow',name:'년증강',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipProcYn',name:'전표처리여부',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'thisDifferBfyy',name:'전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumDifferBfyy',name:'누적_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy1Prev',name:'1/4분기_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy2Prev',name:'2/4분기_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrUppPrev',name:'상반기_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy3Prev',name:'3/4분기_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrYy4Prev',name:'4/4분기_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffQatrLowPrev',name:'하반기_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'diffYearLowPrev',name:'년계_전기대비증감',dataType:'number',length:'38',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_common'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_closeYm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'col1',name:'col1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_tempCount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col2',name:'col2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveProcessMonthInterimSettlementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_acctDept',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveProcessMonthInterimSettlementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAcctDept","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_common',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_common","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_setUnsettled',action:'/ac.co.rsltsmgnt.rsltsanl.SetProcessMonthUnSettledCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_setUnsettled_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_setRsltsDept',action:'/ac.co.rsltsmgnt.rsltsanl.SetProcessMonthInterimSettlementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_setRsltsDept_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO012",
    compID: "lc_unit"
  } // 단위   
  , {
    grpCd: "FI010",
    compID: "lc_srchBookClsCd",
    opt: {
      "range": "1,001"
    }
  } // 장부구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
  ed_CreateDateTime.hide();
};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {};

/**
 * data onload
 */
scwin.ondataload = function () {
  scwin.f_SetSrchDefault();

  // 단위 초기값 설정
  const matchIdx = dlt_commonCodeCO012.getMatchedIndex("fltrCd1", String(DGlobalValue.TRUE), true)[0];
  if (matchIdx) {
    lc_unit.setSelectedIndex(matchIdx);
    scwin.unitValue = Number(dlt_commonCodeCO012.getCellData(matchIdx, "cdDesc"));
  }
};

/**
 * 조회 필드 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_srchCloseYm, lc_version]);
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = async function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  await scwin.f_CloseYm();
  await scwin.f_GetVersion();
  await scwin.f_SetGridFormat();
  lc_acctDeptCd.setDisabled(true); // 그리드 위 회계부서코드 selectbox
  ed_srchAcctDeptCd.setValue("00000");
  ed_srchAcctDeptNm.setValue("전사");
  ds_search.set("dpctYn", 0);

  // focus
  lc_srchBookClsCd.focus();
};

/**
 * 마지막 마감년월
 */
scwin.f_CloseYm = async function () {
  dma_common.setEmptyValue();
  dma_common.set("sysCd", "ProcessMonthInterimSettlementEBC");
  dma_common.set("queryId", "retrieveProcessMonthInterimSettlementCloseYm");
  let rs = await $c.sbm.execute($p, sbm_common);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_closeYm.setJSON(rs.responseJSON.GAUCE[0]);
    ed_srchCloseYm.setValue(ds_closeYm.get("col1"));
  }
  ;
};

/**
 * 버전정보
 */
scwin.f_GetVersion = async function () {
  dma_common.setEmptyValue();
  dma_common.set("sysCd", "CommonEBC");
  dma_common.set("queryId", "retrieveVersionInfo");
  dma_common.set("param1", ed_srchCloseYm.getValue()); // 결산년월

  let rs = await $c.sbm.execute($p, sbm_common);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_version.setJSON(rs.responseJSON.GAUCE);
    scwin.f_SetFinalVer();
  }
  ;
};

/**
 * 최종 버전 설정
 */
scwin.f_SetFinalVer = function () {
  if (ds_version.getRowCount() < 1) return;

  // 최종 버전 설정
  const matchIdx = ds_version.getMatchedIndex("col3", String(DGlobalValue.TRUE), true)[0];
  if (matchIdx) {
    lc_version.setSelectedIndex(matchIdx);
  }
};

/**
 * gridView Header value setting
 */
scwin.f_SetGridFormat = function () {
  const month = ed_srchCloseYm.getValue().substr(4, 6);
  gr_master.setHeaderValue("thisMm", `${month} 당월`);
  gr_master.setHeaderValue("cum", `${month} 누계`);
};

/**
 * 결산년월 변경
 */
scwin.ed_srchCloseYm_onviewchange = function (info) {
  // 버전정보
  scwin.f_GetVersion();

  // header value 변경
  scwin.f_SetGridFormat();
};

/**
 * 실적부서 변경
 */
scwin.lc_acctDeptCd_onviewchange = function (info) {
  scwin.f_Retrieve();
};

/**
 * 단위 변경
 */
scwin.lc_unit_onviewchange = function (info) {
  scwin.unitValue = Number(dlt_commonCodeCO012.getCellData(info.newSelectedIndex, "cdDesc"));
  scwin.f_SetGridUnit();
};

/**
 * [조회]
 */
scwin.btn_search_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tbl_search]))) return;
  scwin.f_GetRsltsDept();
};

/**
 * 실적부서 조회
 */
scwin.f_GetRsltsDept = async function () {
  dma_common.setEmptyValue();
  const {
    ...ds
  } = ds_search.getJSON();
  dma_common.set("sysCd", "ManagementProfitAndLossEBC");
  dma_common.set("param1", ed_srchAcctDeptCd.getValue()); // 부서
  dma_common.set("param2", ds.closeYm); // 결산년월
  dma_common.set("param3", ds.lowerDeptIncluYn); // 하위부서포함
  dma_common.set("param4", ds.acctDeptLvl); // 귀속부서레벨
  dma_common.set("param6", ds.dpctYn); // DPCT여부

  // 사업영역
  if (ds.bizDomCd == "") {
    dma_common.set("queryId", "retrievePlanComparisonResultsAcctDept");
    dma_common.set("param5", ds.ver);
  } else {
    dma_common.set("queryId", "retrievePlanComparisonResultsBizDom");
    dma_common.set("param5", ds.bizDomCd);
  }
  let rs = await $c.sbm.execute($p, sbm_common);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_dept.setJSON(rs.responseJSON.GAUCE);
    if (ds_dept.getTotalRow() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      // ds_dept.sort("col1", 0);
      scwin.f_Retrieve();
    }
  }
  ;
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  // 해당월의 실적이 있는지 여부 확인(True:데이타가 있음, False:데이타가 없음)
  if (!(await scwin.f_CountRow())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  scwin.gSrchGb = "1";
  const {
    ver,
    closeYm,
    bookClsCdTemp
  } = ds_search.getJSON();

  // 버전이 001일경우는 장부구분의 (자산비용)을 조회 하도록 코드값을 변경
  if (ver == "001" || ver == "000") {
    // 일반일경우
    if (bookClsCdTemp == "601") {
      ds_search.set("bookClsCd", "621");
      // 요약일경우
    } else if (bookClsCdTemp == "602") {
      ds_search.set("bookClsCd", "622");
      // 상세일경우
    } else if (bookClsCdTemp == "603") {
      ds_search.set("bookClsCd", "623");
    }
  } else {
    ds_search.set("bookClsCd", bookClsCdTemp);
  }
  if (closeYm < "200600") {
    ds_search.set("closeYmYn", "1");
  } else {
    ds_search.set("closeYmYn", "0");
  }

  // 부서코드 selectbox
  ds_search.set("acctDeptCd", lc_acctDeptCd.getValue());
  ds_search.set("acctDeptNm", lc_acctDeptCd.getText(true));
  $c.sbm.execute($p, sbm_master);
};

/**
 * 조회 callback
 */
scwin.sbm_master_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    scwin.f_CreateDateTime();
    gr_master.setFocusedCell(0, "mgntAcctCdNm");
  }
};

/**
 * 실적집계 생성일시 조회
 * - scwin.f_CountRow와 동일한 내용 조회하기때문에 사실 필요없음
 * - ds_tempCount 값 사용해도 무방함
 */
scwin.f_CreateDateTime = async function () {
  dma_common.setEmptyValue();
  dma_common.set("sysCd", "ProcessMonthInterimSettlementEBC");
  dma_common.set("queryId", "retrieveProcessMonthInterimSettlementCount");
  dma_common.set("param1", lc_version.getValue()); // 버전
  dma_common.set("param2", ed_srchCloseYm.getValue()); // 결산년월

  let rs = await $c.sbm.execute($p, sbm_common);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    const rtnVal = rs.responseJSON.GAUCE[0].col2;
    const txt = rtnVal == "" ? "집계된 내역이 없습니다." : rtnVal;
    ed_CreateDateTime.show();
    ed_CreateDateTime.setValue(`${ed_srchCloseYm.getValue().slice(4, 6)}월 실적집계 생성일시 : ${txt}`);
  }
  ;
};

/**
 * dataList onload
 */
scwin.ds_master_ondataload = function () {
  const rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  } else {
    lc_acctDeptCd.setDisabled(false); // 부서코드

    // 정렬
    // scwin.sort_options = {};
    // scwin.sort_options.sortIndex = "mgntAcctCd mgntAcctCdNm";
    // scwin.sort_options.sortOrder = "1 1";
    // ds_master.multisort(scwin.sort_options); 

    // 그리드 컬럼의 금액단위 설정
    scwin.f_SetGridUnit();

    // scwin.f_changeUnit();
  }
  totalRows.setValue(rowCnt);
};

/**
 * 그리드 컬럼의 금액단위 설정
 */
scwin.f_SetGridUnit = function () {
  for (let i = 0; i < ds_master.getTotalCol(); i++) {
    const colId = ds_master.getColumnID(i);
    const type = ds_master.getColumnInfo(colId).dataType;
    if (type == "number") {
      gr_master.setColumnDisplayFormatter(colId, scwin.unitFormatter);
    }
    ;
  }
  scwin.f_Rate(ds_master);
};

/**
 * 금액 재설정
 */
scwin.f_Rate = function (dltObj) {
  var baseAcctMap = {
    "4100000": "sellAmt",
    // 매출액
    "4200000": "sellCost",
    // 매출원가
    "5900000": "salesCost",
    // 영업이익
    "6700000": "mwound",
    // 경상이익
    "9100017": "account",
    // 회계이익
    "9100018": "asset",
    // 자산비용
    "9400001": "change" // 변동비용
  };
  var rateAcctMap = {
    "9300001": "sellCost",
    // 매출원가율
    "9300002": "salesCost",
    // 영업이익율
    "9300003": "mwound",
    // 경상이익율
    "9300004": "account",
    // 회계원가율
    "9300005": "asset",
    // 자산비용율
    "9300006": "change" // 변동비율
  };
  var calcCols = [{
    target: "yearPlanAmt",
    diffBase: null
  }, {
    target: "bfyyThisAmt",
    diffBase: null
  }, {
    target: "thisPlanAmt",
    diffBase: null
  }, {
    target: "thisRsltsAmt",
    diffBase: null
  }, {
    target: "thisDiffer",
    diffBase: ["thisRsltsAmt", "thisPlanAmt"]
  }, {
    target: "sumBfyyThisAmt",
    diffBase: null
  }, {
    target: "sumPlanAmt",
    diffBase: null
  }, {
    target: "sumRsltsAmt",
    diffBase: null
  }, {
    target: "sumDiffer",
    diffBase: ["sumRsltsAmt", "sumPlanAmt"]
  }, {
    target: "rsltQatrYy1Prev",
    diffBase: null
  }, {
    target: "planQatrYy1",
    diffBase: null
  }, {
    target: "rsltQatrYy1",
    diffBase: null
  }, {
    target: "diffQatrYy1",
    diffBase: ["rsltQatrYy1", "planQatrYy1"]
  }, {
    target: "rsltQatrYy2Prev",
    diffBase: null
  }, {
    target: "planQatrYy2",
    diffBase: null
  }, {
    target: "rsltQatrYy2",
    diffBase: null
  }, {
    target: "diffQatrYy2",
    diffBase: ["rsltQatrYy2", "planQatrYy2"]
  }, {
    target: "rsltQatrUppPrev",
    diffBase: null
  }, {
    target: "planQatrUpp",
    diffBase: null
  }, {
    target: "rsltQatrUpp",
    diffBase: null
  }, {
    target: "diffQatrUpp",
    diffBase: ["rsltQatrUpp", "planQatrUpp"]
  }, {
    target: "rsltQatrYy3Prev",
    diffBase: null
  }, {
    target: "planQatrYy3",
    diffBase: null
  }, {
    target: "rsltQatrYy3",
    diffBase: null
  }, {
    target: "diffQatrYy3",
    diffBase: ["rsltQatrYy3", "planQatrYy3"]
  }, {
    target: "rsltQatrYy4Prev",
    diffBase: null
  }, {
    target: "planQatrYy4",
    diffBase: null
  }, {
    target: "rsltQatrYy4",
    diffBase: null
  }, {
    target: "diffQatrYy4",
    diffBase: ["rsltQatrYy4", "planQatrYy4"]
  }, {
    target: "rsltQatrLowPrev",
    diffBase: null
  }, {
    target: "planQatrLow",
    diffBase: null
  }, {
    target: "rsltQatrLow",
    diffBase: null
  }, {
    target: "diffQatrLow",
    diffBase: ["rsltQatrLow", "planQatrLow"]
  }, {
    target: "rsltYearLowPrev",
    diffBase: null
  }, {
    target: "planYearLow",
    diffBase: null
  }, {
    target: "rsltYearLow",
    diffBase: null
  }, {
    target: "diffYearLow",
    diffBase: ["rsltYearLow", "planYearLow"]
  }];
  var baseData = {
    sellAmt: {},
    sellCost: {},
    salesCost: {},
    mwound: {},
    account: {},
    asset: {},
    change: {}
  };
  function toNumber(val) {
    if (val == null || val === "") return 0;
    val = String(val).replace(/,/g, "");
    var num = parseFloat(val);
    return isNaN(num) ? 0 : num;
  }
  function getUnitValue() {
    var unit = toNumber(scwin.unitValue);
    return unit === 0 ? 1 : unit;
  }
  function getRate(num, den) {
    num = toNumber(num);
    den = toNumber(den);
    if (den === 0) return 0;
    return num / den * getUnitValue() * 100;
  }
  function readRowValues(row) {
    const obj = {};
    for (let i = 0; i < calcCols.length; i++) {
      var colId = calcCols[i].target;
      obj[colId] = toNumber(dltObj.getCellData(row, colId));
    }
    return obj;
  }
  function writeRateValues(row, numeratorObj, denominatorObj) {
    for (let i = 0; i < calcCols.length; i++) {
      const item = calcCols[i];
      if (item.diffBase == null) {
        dltObj.setCellData(row, item.target, getRate(numeratorObj[item.target], denominatorObj[item.target]));
      } else {
        var rsltCol = item.diffBase[0];
        var planCol = item.diffBase[1];
        var rsltRate = getRate(numeratorObj[rsltCol], denominatorObj[rsltCol]);
        var planRate = getRate(numeratorObj[planCol], denominatorObj[planCol]);
        dltObj.setCellData(row, item.target, rsltRate - planRate);
      }
    }
  }
  let i, acctCd, key;

  // 1. 기준 계정 값 읽기
  for (i = 0; i < dltObj.getTotalRow(); i++) {
    acctCd = dltObj.getCellData(i, "mgntAcctCd");
    key = baseAcctMap[acctCd];
    if (key) {
      baseData[key] = readRowValues(i);
    }
  }

  // 2. 비율 계정 계산
  for (i = 0; i < dltObj.getTotalRow(); i++) {
    acctCd = dltObj.getCellData(i, "mgntAcctCd");
    key = rateAcctMap[acctCd];
    if (key) {
      writeRateValues(i, baseData[key], baseData.sellAmt);
    }
  }
};

/**
 * 단위에 맞는 formatter 적용
 */
scwin.unitFormatter = function (dataVal) {
  if ($c.gus.cfIsNull($p, dataVal) || !$c.num.isNumber($p, dataVal)) {
    return 0;
  } else {
    var setVal = dataVal / scwin.unitValue; // 단위
    if (dataVal == 0) {
      return 0;
    } else {
      if (Math.round(setVal, 0) == 0 && dataVal < 0) {
        return 0;
      } else {
        return $c.num.formatNumber($p, Math.round(setVal, 0), 0);
      }
    }
  }
};

/**
 * grid inputType 동적변경
 */
scwin.setInputType = function (info) {
  const {
    colID,
    colIndex,
    displayRowIndex,
    realRowIndex,
    rowIndex,
    value
  } = info;
  let returnInfo;
  if (colID == "thisRsltsAmt") {
    const slipProcYn = ds_master.getCellData(rowIndex, "slipProcYn");
    const thisRsltsAmt = ds_master.getCellData(rowIndex, "thisRsltsAmt");
    if (slipProcYn == "1" && thisRsltsAmt != "0") {
      returnInfo = {
        id: "dynamic_link_" + rowIndex + "_" + colIndex,
        inputType: "link",
        options: {
          displayFormatter: scwin.unitFormatter
        }
      };
    } else {
      returnInfo = {
        id: "dynamic_text_" + rowIndex + "_" + colIndex,
        inputType: "text",
        options: {
          displayFormatter: scwin.unitFormatter
        }
      };
    }
  }
  return returnInfo;
};

/**
 * 해당월의 실적이 있는지 여부 확인(True:데이타가 있음, False:데이타가 없음)
 * 해당월의 실적이 없을경우 누적으로 해서 보여주므로 당월 마이너스 실적 나오는것을 막기위함 함수.
 */
scwin.f_CountRow = async function () {
  dma_common.setEmptyValue();
  const {
    ...ds
  } = ds_search.getJSON();
  dma_common.set("sysCd", "ProcessMonthInterimSettlementEBC");
  dma_common.set("queryId", "retrieveProcessMonthInterimSettlementCount");
  dma_common.set("param1", ds.ver); // 버전
  dma_common.set("param2", ds.closeYm); // 결산년월

  let rs = await $c.sbm.execute($p, sbm_common);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_tempCount.setJSON(rs.responseJSON.GAUCE[0]);
    if (ds_tempCount.get("col1") > 0) return true;
  }
  ;
};

/**
 * 부서 udc
 */
scwin.udc_acctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_srchAcctDeptNm.setValue("");
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_acctDeptCdPopUp("code");
  }
};
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_srchAcctDeptCd.setValue("");
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_acctDeptCdPopUp("name");
  }
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_acctDeptCdPopUp("click");
};
scwin.f_acctDeptCdPopUp = function (type) {
  let pSelectId;
  const closeYm = ed_srchCloseYm.getValue(); // 결산년월
  if (closeYm.slice(0, 4) == "2006") {
    pSelectId = "retrieveAcctDeptCdInfoBef";
  } else {
    pSelectId = "retrieveAcctDeptCdInfo";
  }
  udc_acctDeptCd.setSelectId(pSelectId);
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, type == "code" ? ed_srchAcctDeptCd.getValue() : "", type == "name" ? ed_srchAcctDeptNm.getValue() : "", type == "click" ? "F" : "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , closeYm // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , type == "click" ? "T" : "F" // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]);
    ed_srchAcctDeptNm.setValue(ret[1]);
    ds_search.set("acctDeptLvl", ret[6]); // 귀속부서레벨
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ds_search.set("acctDeptLvl", 0); // 귀속부서레벨
  }
};

/**
 * 사업영역 udc
 */
scwin.udc_bizDomCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_bizDomNm.setValue("");
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_bizDomCdPopUp("code");
  }
};
scwin.udc_bizDomCd_onviewchangeNameEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_bizDomCd.setValue("");
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_bizDomCdPopUp("name");
  }
};
scwin.udc_bizDom_onclickEvent = function (e) {
  scwin.f_bizDomCdPopUp("click");
};
scwin.f_bizDomCdPopUp = function (type) {
  udc_bizDomCd.cfCommonPopUp(scwin.udc_bizDomCd_callBackFunc, type == "code" ? ed_bizDomCd.getValue() : "", type == "name" ? ed_bizDomNm.getValue() : "", type == "click" ? "F" : "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , type == "click" ? "T" : "F" // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_bizDomCd_callBackFunc = function (ret) {
  // as-is에서 ret[4] 받아서 넣어주는데 실제 동작은 ed_bizDomCd.getValue()로 하고 있어서 반영안함
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bizDomCd.setValue(ret[0]);
    ed_bizDomNm.setValue(ret[1]);
  } else {
    ed_bizDomCd.setValue("");
    ed_bizDomNm.setValue("");
  }
};

/**
 * grid cell click
 */
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "thisRsltsAmt") {
    const slipProcYn = ds_master.getCellData(rowIndex, "slipProcYn");
    const thisRsltsAmt = ds_master.getCellData(rowIndex, "thisRsltsAmt");
    if (slipProcYn == "1" && thisRsltsAmt != "0") {
      scwin.f_detail(rowIndex);
    }
  }
};

/**
 * 실적 상세 팝업 호출
 */
scwin.f_detail = async function (rowIndex) {
  const {
    ...ds
  } = ds_search.getJSON();
  const {
    mgntAcctCd,
    mgntAcctNm
  } = ds_master.getRowJSON(rowIndex);
  const data = {
    closeYm: ds.closeYm,
    // 마감년월
    acctDeptCd: ds.acctDeptCd,
    // 부서코드
    acctDeptNm: ds.acctDeptNm,
    acctCd: mgntAcctCd,
    // 관리계정
    mgntAcctNm: mgntAcctNm,
    ver: ds.ver,
    // 버전
    bizDomCd: ds.bizDomCd,
    // 사업영역코드
    bizDomNm: ds.bizDomNm,
    postYn: ds.postYn // 회계처리여부
  };
  const opts = {
    id: "co_404_01_53p",
    popupName: "상세내역",
    modal: true,
    type: "browserPopup",
    title: "상세내역",
    width: "1200px",
    height: "810px"
  };
  const url = "/ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_53p.xml";
  $c.win.openPopup($p, url, opts, data);
};

/**
 * 미확정집계
 */
scwin.btn_SetUnsettled_onclick = function (e) {
  scwin.f_SetUnsettled();
};
scwin.f_SetUnsettled = function () {
  $c.sbm.execute($p, sbm_setUnsettled);
};
scwin.sbm_setUnsettled_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
};

/**
 * 실적집계
 */
scwin.btn_SetRsltsDept_onclick = function (e) {
  scwin.f_SetRsltsDept();
};
scwin.f_SetRsltsDept = function () {
  $c.sbm.execute($p, sbm_setRsltsDept);
};
scwin.sbm_setRsltsDept_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
};

/**
 * 엑셀 다운로드
 */
scwin.f_Excel = function () {
  if (ds_master.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?").then(rtn => {
    if (rtn) {
      const excelTitle = "사업영역별계획대비실적";
      const options = {
        fileName: `${excelTitle}.xlsx`,
        sheetName: excelTitle,
        startRowIndex: 4,
        bodyWordwrap: true,
        evenRowBackgroundColor: "#f5fff5",
        useDataFormat: true
      };
      const text1 = `${ed_srchAcctDeptNm.getValue()}(${ed_srchCloseYm.getValue()})`;
      const text2 = `단위_${lc_unit.getText(true)}`;
      const excelMurgeCnt = gr_master.hiddenList.filter(val => val === false).length;
      const infoArr = [{
        rowIndex: 0,
        colIndex: 0,
        rowSpan: 1,
        colSpan: excelMurgeCnt,
        text: text1,
        textAlign: "center",
        drawBorder: true,
        fontSize: "30px"
      }, {
        rowIndex: 3,
        colIndex: 0,
        rowSpan: 1,
        colSpan: excelMurgeCnt,
        text: text2,
        textAlign: "right",
        drawBorder: true,
        fontSize: "12px"
      }];
      $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
    }
  });
};

/**
 * 하위부서포함 엑셀 다운로드
 */
scwin.f_Retrieve2 = async function () {
  // 해당월의 실적이 있는지 여부 확인(True:데이타가 있음, False:데이타가 없음)
  if (!(await scwin.f_CountRow())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  if (ds_master.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  ds_searchAcctDept.setJSON(ds_search.getJSON());
  const {
    ver,
    closeYm,
    bookClsCdTemp
  } = ds_searchAcctDept.getJSON();
  if (closeYm < "200600") {
    ds_searchAcctDept.set("closeYmYn", "1");
  } else {
    ds_searchAcctDept.set("closeYmYn", "0");
  }

  // 버전이 001일경우는 장부구분의 (자산비용)을 조회 하도록 코드값을 변경
  if (ver == "001" || ver == "000") {
    // 일반일경우
    if (bookClsCdTemp == "601") {
      ds_searchAcctDept.set("bookClsCd", "621");
      // 요약일경우
    } else if (bookClsCdTemp == "602") {
      ds_searchAcctDept.set("bookClsCd", "622");
      // 상세일경우
    } else if (bookClsCdTemp == "603") {
      ds_searchAcctDept.set("bookClsCd", "623");
    }
  } else {
    ds_searchAcctDept.set("bookClsCd", bookClsCdTemp);
  }
  const fileName = `사업영역별계획대비실적_${lc_acctDeptCd.getText(true)}_${ed_srchCloseYm.getValue()}_ver_${lc_version.getValue()}_하위`;
  var options = {
    common: {
      fileName: `${fileName}.xlsx`,
      // [default: excel.xls] 다운로드하려는 파일의 이름
      showProcess: true,
      // [default: true] 다운로드 시 프로세스 창을 보여줄지 여부
      multipleSheet: "true" // [default: true] 다운로드시 dataList별 sheet분리 출력유무
    },
    // 시트 정보
    excelInfo: []
  };
  gen_gridView.removeAll();
  for (let i = 0; i < ds_dept.getTotalRow(); i++) {
    // 부서코드 변경
    ds_searchAcctDept.set("acctDeptCd", ds_dept.getCellData(i, "col1"));
    ds_searchAcctDept.set("acctDeptNm", ds_dept.getCellData(i, "col2"));
    let dltObj = await scwin.makeDataListForMultiExcel(i);
    let grdObj = await scwin.makeGridViewForMultiExcel(dltObj);

    // 시트 정보
    const acctDeptNm = ds_dept.getCellData(i, "col2");
    const text1 = `${acctDeptNm}(${ed_srchCloseYm.getValue()})`;
    const text2 = `단위_${lc_unit.getText(true)}`;
    const excelTitle = acctDeptNm.trim().replace('/', '');
    const excelMurgeCnt = grdObj.getColumnCount() - 2; // hidden column 2개

    var json = {
      gridId: grdObj.getID(),
      sheetName: excelTitle,
      startRowIndex: 4,
      startColumnIndex: 0,
      headerColor: "#d9d9d9",
      useDataFormat: true,
      decimal: "auto",
      infoArr: [{
        rowIndex: 0,
        colIndex: 0,
        rowSpan: 1,
        colSpan: excelMurgeCnt,
        text: text1,
        textAlign: "center",
        drawBorder: true,
        fontSize: "30px"
      }, {
        rowIndex: 3,
        colIndex: 0,
        rowSpan: 1,
        colSpan: excelMurgeCnt,
        text: text2,
        textAlign: "right",
        drawBorder: true,
        fontSize: "12px"
      }]
    };
    options.excelInfo.push(json);
  }
  $c.data.downloadMultipleGridView($p, options);
  // $c.data.downloadMultipleDataList(options);
};
scwin.makeDataListForMultiExcel = async function (idx) {
  var dataList = ds_master;
  var dataListNm = "dlt_multiExcel_";

  // 생성할 데이터리스트 컬럼 세팅 
  var colInfoJSON = [];
  for (var i = 0; i < dataList.getTotalCol(); i++) {
    var colid = dataList.getColumnID(i);
    var colInfo = {
      "id": dataList.getColumnID(i),
      "dataType": dataList.getColumnInfo(colid).dataType,
      "name": dataList.getColumnName(i)
    };
    colInfoJSON.push(colInfo);
  }
  ;

  // 동적 생성할 데이터 리스트 정보
  var dataListId = dataListNm + idx;
  var dltObj = $c.util.getComponent($p, dataListId);
  if (!$c.util.isEmpty($p, dltObj)) {
    $p.data.remove(dataListId); // 이미생성된 데이터리스트 삭제
  }
  var dltOptions = {
    baseNode: "list",
    repeatNode: "map",
    saveRemovedData: "true"
  };
  var dataCollectionJSON = {
    id: dataListId,
    type: "dataList",
    option: {
      "baseNode": dltOptions.baseNode || "list",
      "repeatNode": dltOptions.repeatNode || "map",
      "saveRemovedData": dltOptions.saveRemovedData || "true"
    },
    columnInfo: colInfoJSON
  };

  // 동적생성
  $p.data.create(dataCollectionJSON);
  var dltObj = $c.util.getComponent($p, dataListId);

  // 해당부서 데이터 조회
  let rs = await $c.sbm.execute($p, sbm_acctDept);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    dltObj.setJSON(rs.responseJSON.OUT_DS1);
  }
  ;
  return dltObj;
};
scwin.makeGridViewForMultiExcel = async function (dltObj) {
  // 그리드 동적생성
  var idx = await gen_gridView.insertChildAsync();
  var grdObj = $p.getComponentById(gen_gridView.getChildren()[idx].id);
  var grdObjId = grdObj.getOriginalID();
  var gr_target = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events"';
  gr_target += '    autoFit="none" autoFitMinWidth="1000" checkAllType="false" class="wq_gvw" dataList="data:' + dltObj.org_id + '"';
  gr_target += '    id="' + grdObjId + '" style="" visibleRowNum="13" visibleRowNumFix="true" readOnly="true" ev:oncellclick="scwin.gr_master_oncellclick">';
  gr_target += '    <w2:caption id="caption2" style="" value="this is a grid caption."></w2:caption>';
  gr_target += '    <w2:header id="header1" style="">';
  gr_target += '        <w2:row id="row1" style="">';
  gr_target += '            <w2:column displayMode="label" id="column1" inputType="text" style="" value="계정" width="150" colSpan=""';
  gr_target += '                rowSpan="2">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="column17" inputType="text" style="" value="계정코드" width="80" colSpan=""';
  gr_target += '                rowSpan="2">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="column15" inputType="text" style="" value="년간계획" width="120" colSpan=""';
  gr_target += '                rowSpan="2">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="thisMm" inputType="text" style="" value="당월" width="600" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="cum" value="누계" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column44" value="1/4분기" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column26" value="2/4분기" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column83" value="상반기" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column68" value="3/4분기" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column125" value="4/4분기" displayMode="label"';
  gr_target += '                colSpan="5" rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column110" value="하반기" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="600" inputType="text" style="" id="column29" value="년계" displayMode="label" colSpan="5"';
  gr_target += '                rowSpan="" sortable="false">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="100" inputType="text" style="" id="column152" value="계정구분" displayMode="label" colSpan=""';
  gr_target += '                rowSpan="2">';
  gr_target += '            </w2:column>';
  gr_target += '        </w2:row>';
  gr_target += '        <w2:row style="" id="row3">';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column22" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column21" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column20" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column19" value="전기대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column60" value="계획대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column57" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column54" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column66" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column51" value="전기대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column48" value="계획대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column45" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column42" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column39" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column36" value="전기대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column33" value="계획대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column27" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column96" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column93" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column90" value="전기대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column87" value="계획대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column84" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column81" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column78" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column75" value="전기대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column72" value="계획대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column69" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column138" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column135" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column132" value="전기대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column129" value="계획대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column126" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column123" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column120" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column117" value="전기대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column114" value="계획대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column111" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column108" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column105" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column102" value="전기대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column99" value="계획대비증감" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column30" value="전기" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column150" value="계획" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column147" value="실적" displayMode="label"></w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column144" value="전기대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="column141" value="계획대비증감" displayMode="label">';
  gr_target += '            </w2:column>';
  gr_target += '        </w2:row>';
  gr_target += '    </w2:header>';
  gr_target += '    <w2:gBody id="gBody1" style="">';
  gr_target += '        <w2:row id="row2" style="">';
  gr_target += '            <w2:column displayMode="label" id="mgntAcctCdNm" inputType="text" style="" value="" width="150"';
  gr_target += '                textAlign="left" class="type_pre">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="mgntAcctCd" inputType="text" style="" textAlign="center" value=""';
  gr_target += '                width="80" hidden="true">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="yearPlanAmt" inputType="text" style="" textAlign="right" value=""';
  gr_target += '                width="120" displayFormat="#,##0">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="bfyyThisAmt" inputType="text" style="" value="" width="120"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="thisPlanAmt" inputType="text" style="" textAlign="right" value=""';
  gr_target += '                width="120" displayFormat="#,##0">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="thisRsltsAmt" inputType="text" style="" textAlign="right" value=""';
  gr_target += '                width="120" displayFormat="#,##0">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column displayMode="label" id="thisDifferBfyy" inputType="text" style="" value="" width="120"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="thisDiffer" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="sumBfyyThisAmt" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="sumPlanAmt" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="sumRsltsAmt" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="sumDifferBfyy" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="sumDiffer" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy1Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planQatrYy1" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy1" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy1Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy1" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy2Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planQatrYy2" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy2" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy2Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy2" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrUppPrev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planQatrUpp" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrUpp" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrUppPrev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrUpp" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy3Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planQatrYy3" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy3" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy3Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy3" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy4Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planQatrYy4" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrYy4" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy4Prev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrYy4" value="" displayMode="label"';
  gr_target += '                textAlign="right" displayFormat="#,##0">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrLowPrev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planQatrLow" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltQatrLow" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrLowPrev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffQatrLow" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltYearLowPrev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="planYearLow" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="rsltYearLow" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffYearLowPrev" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="120" inputType="text" style="" id="diffYearLow" value="" displayMode="label"';
  gr_target += '                displayFormat="#,##0" textAlign="right">';
  gr_target += '            </w2:column>';
  gr_target += '            <w2:column width="70" inputType="text" style="" id="slipProcYn" value="" displayMode="label"';
  gr_target += '                hidden="true">';
  gr_target += '            </w2:column>';
  gr_target += '        </w2:row>';
  gr_target += '    </w2:gBody>';
  gr_target += '</w2:gridView>';
  grdObj.setGridStyle(gr_target);

  // 값 포멧 적용
  var setGrdObj = $p.getComponentById(grdObjId);
  for (let j = 0; j < dltObj.getTotalCol(); j++) {
    var colid = dltObj.getColumnID(j);
    var type = dltObj.getColumnInfo(colid).dataType;
    if (type == "number") {
      setGrdObj.setColumnDisplayFormatter(colid, scwin.unitFormatter);
    }
    ;
  }
  await scwin.f_Rate(dltObj);

  // color_underline style
  for (let k = 0; k < dltObj.getTotalRow(); k++) {
    const slipProcYn = dltObj.getCellData(k, "slipProcYn");
    const thisRsltsAmt = dltObj.getCellData(k, "thisRsltsAmt");
    if (slipProcYn == "1" && thisRsltsAmt != "0") {
      setGrdObj.setCellClass(k, "thisRsltsAmt", "underline");
      setGrdObj.setCellColor(k, "thisRsltsAmt", "blue");
    }
  }
  return setGrdObj;
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n			.type_pre nobr {white-space: pre;}\n		'}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장부구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchBookClsCd',style:'width: 230px;',submenuSize:'fixed',ref:'data:ds_search.bookClsCdTemp',mandatory:'true',title:'장부구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_srchCloseYm',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',mandatory:'true',title:'결산년월',objType:'data','ev:onviewchange':'scwin.ed_srchCloseYm_onviewchange',ref:'data:ds_search.closeYm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'width:120px;',submenuSize:'fixed',ref:'data:ds_search.ver'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',refDataCollection:'ds_search',selectID:'',btnId:'btn_dept',codeId:'ed_srchAcctDeptCd',id:'udc_acctDeptCd',nameId:'ed_srchAcctDeptNm','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',maxlengthCode:'5',allowCharCode:'0-9',maxlengthName:'30',mandatoryCode:'true','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',code:'bizDomCd',refDataCollection:'ds_search',selectID:'retrieveBizDomCdInfo',btnId:'btn_bizDom',codeId:'ed_bizDomCd',id:'udc_bizDomCd',nameId:'ed_bizDomNm','ev:onclickEvent':'scwin.udc_bizDom_onclickEvent',name:'bizDomNm',allowCharCode:'0-9',maxlengthCode:'3',maxlengthName:'30','ev:onviewchangeCodeEvent':'scwin.udc_bizDomCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bizDomCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lowerDeptIncluYn',ref:'data:ds_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_distYn',ref:'data:ds_search.distYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_postYn',style:'width:230px;',submenuSize:'fixed',ref:'data:ds_search.postYn',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가결'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'마감전 사업영역별계획대비실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'하위부서포함',class:''}},{T:1,N:'w2:button',A:{style:'',id:'btn_excelDown',class:'btn excel-down',label:'엑셀 다운로드',userAuth:'X','ev:onclick':'scwin.f_Retrieve2'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 160px;',allOption:'',id:'lc_acctDeptCd',class:'',direction:'auto','ev:onviewchange':'scwin.lc_acctDeptCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_dept'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req '}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 100px;',allOption:'false',id:'lc_unit',class:'',direction:'auto','ev:onviewchange':'scwin.lc_unit_onviewchange'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridID:'gr_master',gridDownUserAuth:'X',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',autoFitMinWidth:'1000',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_master_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계정코드',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'년간계획',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMm',inputType:'text',style:'',value:'당월',width:'600',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'cum',value:'누계',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column44',value:'1/4분기',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column26',value:'2/4분기',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column83',value:'상반기',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column68',value:'3/4분기',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column125',value:'4/4분기',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column110',value:'하반기',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'600',inputType:'text',style:'',id:'column29',value:'년계',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column152',value:'계정구분',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column20',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column78',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column132',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column129',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column126',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column120',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column117',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column114',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column111',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column99',value:'계획대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column150',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column147',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column144',value:'전기대비증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column141',value:'계획대비증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCdNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',class:'type_pre'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'text',style:'',textAlign:'center',value:'',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yearPlanAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfyyThisAmt',inputType:'text',style:'',value:'',width:'120',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisPlanAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisRsltsAmt',inputType:'custom',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',typeGetter:'scwin.setInputType'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisDifferBfyy',inputType:'text',style:'',value:'',width:'120',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisDiffer',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumBfyyThisAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumPlanAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumRsltsAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumDifferBfyy',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumDiffer',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy1Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planQatrYy1',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy1',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy1Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy1',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy2Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planQatrYy2',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy2',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy2Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy2',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrUppPrev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planQatrUpp',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrUpp',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrUppPrev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrUpp',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy3Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planQatrYy3',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy3',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy3Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy3',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy4Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planQatrYy4',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrYy4',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy4Prev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrYy4',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrLowPrev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planQatrLow',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltQatrLow',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrLowPrev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffQatrLow',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltYearLowPrev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'planYearLow',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltYearLow',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffYearLowPrev',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'diffYearLow',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipProcYn',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'display: none;'},E:[{T:1,N:'w2:generator',A:{id:'gen_gridView',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'',dynamic:'true',id:'gridView1',readOnly:'true',style:'/display: none;',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-blue',id:'',label:'실적 상세 팝업은 장부구분 상세에서만 조회 가능합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_SetUnsettled',style:'',type:'button','ev:onclick':'scwin.btn_SetUnsettled_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정집계'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_SetRsltsDept',style:'',type:'button','ev:onclick':'scwin.btn_SetRsltsDept_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적집계'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot mt0',id:'ed_CreateDateTime',label:' ',style:''}}]}]}]}]}]})