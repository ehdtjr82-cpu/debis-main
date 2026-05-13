/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_07_01b.xml 113869 2d42591e6e1a7e765669c67988f6451f259bfd4517abfc77b45b3c80621e546d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'결산년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookClsCd',name:'장비구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'부서레벨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomNm',name:'사업영역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYn',name:'배부포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpctYn',name:'타법인포함',dataType:'text'}},{T:1,N:'w2:key',A:{id:'calRate',name:'calRate',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'공통1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'공통2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'공통3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'공통4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'공통5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'공통6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dept'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'결산년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookClsCd',name:'장비구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'부서레벨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomNm',name:'사업영역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYn',name:'배부포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpctYn',name:'타법인포함',dataType:'text'}},{T:1,N:'w2:key',A:{id:'calRate',name:'calRate',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yearPlanAmt',name:'년간계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMm',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'당월_전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisPlanAmt',name:'당월_계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'당월_실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMm2',name:'당월_증감',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befDiffer',name:'당월_증감_전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'당월_증감_계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cum',name:'누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumBfyyThisAmt',name:'누계_전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumPlanAmt',name:'누계_계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumRsltsAmt',name:'누계_실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cum2',name:'누계_증감',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumBefDiffer',name:'누계_증감_전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumDiffer',name:'누계_증감_계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'requestAmt',name:'년목표대비달성도',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_masterExcel',saveRemovedData:'true',keepDataType:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yearPlanAmt',name:'년간계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisPlanAmt',name:'계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'befDiffer',name:'전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumBfyyThisAmt',name:'전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumPlanAmt',name:'계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumRsltsAmt',name:'실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumBefDiffer',name:'전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumDiffer',name:'계획',dataType:'number'}},{T:1,N:'w2:column',A:{id:'requestAmt',name:'년목표대비달성도',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'상위코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'코드영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'코드영문명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'필터코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'필터코드3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempCount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.profitloss.RetrieveProfitAndLossReprotCurMonthCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveExcel',action:'/ac.co.rsltsmgnt.profitloss.RetrieveProfitAndLossReprotCurMonthCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_dept","key":"IN_DS1"},{"id":"ds_masterExcel","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_masterExcel","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_unit',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 손익자료(당월)
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_07_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-30
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 *    2. ☏$c.data.downloadMultipleDataList(options); 엑셀다운로드 시 dataList의 datatype별로 cell 글자위치 지정안됨
 * 테스트데이터 :
 *    1. 결산년월[2025/01], 장부구분[805], 부서[00000], 하위부서포함[체크]
 * 수정이력 :
 *    - 2025-12-30      배기원    최초작성
 */
//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // scwin.f_HeaderCreate();
  // $c.gus.cfDisableKey();
  // scwin.f_FieldClear();
  // scwin.f_GetUnit();

  // gr_master.headerHeight = "20";
  // // 그리드 크기 조정
  // gr_master.RowHeight = 23;
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_closeYm]);
  scwin.f_SetDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetDefault = function () {
  //ID를 넘기면 그 안에 포함된 모든 오브젝트를 초기화
  $c.gus.cfInitHidVal($p, tbl_search);
  scwin.f_CloseYm();
  //lc_acctDeptCd.Enable = "false";
  $c.gus.cfDisableObjects($p, [lc_acctDeptCd]);
  ed_acctDeptCd.setValue("00000");
  ed_acctDeptNm.setValue("전사");
  lc_bookClsCd.setValue("804");
  lc_unit.setValue("1");
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_master.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_HeaderCreate();
  scwin.f_GetUnit();
  scwin.f_FieldClear();
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // let GAUCE_DATASET_HEADER = "closeYm:STRING" // 결산년월
  //     + ",acctDeptCd:STRING" // 부서
  //     + ",bizDomCd:STRING" // 사업영역별
  //     + ",lowerDeptIncluYn:DECIMAL(1)" // 하위부서포함
  //     + ",acctDeptLvl:DECIMAL(1)"
  //     + ",bookClsCd:STRING" //장부구분
  //     + ",distYn:DECIMAL(1)" // 배부포함여부
  //     + ",dpctYn:DECIMAL(1)" // 타업인포함
  //     + ",calRate:STRING"
  //     ;

  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * 실적부서를 구한다.
 * 조회버튼(scwin.f_Retrieve 대신)
 */
scwin.f_GetRsltsDept = async function () {
  if (!$c.gus.cfValidate($p, [tbl_search])) return;
  if ($c.gus.cfIsNull($p, ed_bizDomCd.getValue())) {
    // ds_dept.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ManagementProfitAndLossEBC" +
    //     "&queryId=retrievePlanComparisonResultsAcctDept" +
    //     "&param1 = " + ed_acctDeptCd.getValue() +
    //     "&param2 = " + ds_search.getCellData(ds_search.RowPosition, "closeYm") +
    //     "&param3 = " + ds_search.getCellData(ds_search.RowPosition, "lowerDeptIncluYn") +
    //     "&param4 = " + ds_search.getCellData(ds_search.RowPosition, "acctDeptLvl") +
    //     "&param5=" + "" +
    //     "&param6 = " + ds_search.getCellData(ds_search.RowPosition, "dpctYn");
    // ds_dept.Reset();
    dma_search.set("sysCd", "ManagementProfitAndLossEBC");
    dma_search.set("queryId", "retrievePlanComparisonResultsAcctDept");
    dma_search.set("param1", ed_acctDeptCd.getValue());
    dma_search.set("param2", ica_closeYm.getValue());
    dma_search.set("param3", cbx_lowerDeptIncluYn.getValue());
    dma_search.set("param4", $c.gus.cfIsNull($p, dma_search.get("acctDeptLvl")) ? 0 : dma_search.get("acctDeptLvl"));
    dma_search.set("param5", "");
    dma_search.set("param6", cbx_dpctYn.getValue());
  } else {
    // ds_dept.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ManagementProfitAndLossEBC" +
    //     "&queryId=retrievePlanComparisonResultsBizDom" +
    //     "&param1 = " + ed_acctDeptCd.getValue() +
    //     "&param2 = " + ds_search.getCellData(ds_search.RowPosition, "closeYm") +
    //     "&param3 = " + ds_search.getCellData(ds_search.RowPosition, "lowerDeptIncluYn") +
    //     "&param4 = " + ds_search.getCellData(ds_search.RowPosition, "acctDeptLvl") +
    //     "&param5 = " + ed_bizDomCd.getValue() +
    //     "&param6 = " + ds_search.getCellData(ds_search.RowPosition, "dpctYn");
    // ds_dept.Reset();
    dma_search.set("sysCd", "ManagementProfitAndLossEBC");
    dma_search.set("queryId", "retrievePlanComparisonResultsBizDom");
    dma_search.set("param1", ed_acctDeptCd.getValue());
    dma_search.set("param2", ica_closeYm.getValue());
    dma_search.set("param3", cbx_lowerDeptIncluYn.getValue());
    dma_search.set("param4", $c.gus.cfIsNull($p, dma_search.get("acctDeptLvl")) ? 0 : dma_search.get("acctDeptLvl"));
    dma_search.set("param5", ed_bizDomCd.getValue());
    dma_search.set("param6", cbx_dpctYn.getValue());
  }
  ds_dept.removeAll();
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup);
  ds_dept.setJSON(ret.responseJSON.GAUCE);
  if (ds_dept.getRowCount() > 0 && !$c.gus.cfIsNull($p, ds_dept.getCellData(0, "col1"))) {
    await scwin.f_Retrieve();
  }
};

/**
 * 조회 : 데이터를 조회한다.
 * 실적부서 ds_dept 데이터 있는 경우, 실적부서 콤보박스 변경 시 조회
 */
scwin.f_Retrieve = async function () {
  // 해당월의 실적이 있는지 여부 확인(True:테이타가 있음, False:데이타가 없음)
  if (!(await scwin.f_CountRow())) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  // ds_search.NameString(ds_search.setRowPosition, "acctDeptCd") = lc_acctDeptCd.getValue();
  // ds_search.NameString(ds_search.setRowPosition, "bizDomCd") = ed_bizDomCd.getValue();
  // ds_search.UseChangeInfo = false;
  scwin.setInit();
  dma_search.set("acctDeptCd", lc_acctDeptCd.getValue());
  dma_search.set("sysCd", "");
  dma_search.set("queryId", "");
  dma_search.set("param1", "");
  dma_search.set("param2", "");
  dma_search.set("param3", "");
  dma_search.set("param4", "");
  dma_search.set("param5", "");
  dma_search.set("param6", "");
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    let rowCnt = ds_master.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      if ($c.gus.cfCheckCreateFlag($p) == true) {
        $c.gus.cfTurnCreateFlag($p, false);
      } else {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      }
      $c.gus.cfDisableObjects($p, [lc_acctDeptCd]);
    } else {
      $c.gus.cfEnableObjects($p, [lc_acctDeptCd]);
      //그리드 색상 처리
      for (let i = 0; i < rowCnt; i++) {
        let mgntAcctCd = ds_master.getCellData(i, "mgntAcctCd");
        if (mgntAcctCd == "9300001" || mgntAcctCd == "9300002" || mgntAcctCd == "9300003" || mgntAcctCd == "9300006") {
          gr_master.setRowBackgroundColor(i, "#eeee22");
        }
        //년목표대비달성도 처리[requestAmt]
        if (mgntAcctCd == "4100000" || mgntAcctCd == "4900000" || mgntAcctCd == "6700000") {
          let sumRsltsAmt = ds_master.getCellData(i, "sumRsltsAmt");
          let yearPlanAmt = ds_master.getCellData(i, "yearPlanAmt");
          //let requestAmt = Number(yearPlanAmt) === 0 ? 0 :  $c.num.round((Number(sumRsltsAmt) / Number(yearPlanAmt)) * 1000) / 10;             
          let requestAmt = Number(yearPlanAmt) === 0 ? 0 : (Number(sumRsltsAmt) / Number(yearPlanAmt) * 100).toFixed(1);
          ds_master.setCellData(i, "requestAmt", requestAmt);
        }
      }
      ds_master.reform();
      //평가이익, 성과이익 금액을 재설정한다.
      scwin.f_Profitloss();
      //요약일 경우 유동자산/비유동자산 금액 변경
      if (lc_bookClsCd.getValue() == "804") {
        scwin.f_AssetsAmt();
      }
      // 비율을 구한다.
      scwin.f_Rate();
      scwin.f_SetGridUnit();
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 하위부서포함 조회
 * 엑셀클릭 시
 */
scwin.f_Retrieve2_new = async function () {
  if (ds_dept.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  //dataList 동적 생성 시 푤요
  const dcoptions = {
    baseNode: "list",
    repeatNode: "map",
    saveRemovedData: "true"
  };
  let dsName = "ds_master";
  let dsTitle = [];
  let sheetTitle = [];
  ds_masterExcel.removeAll();
  //for(let i=ds_dept.getRowCount(); i>=0; i--) {
  for (let i = 0; i < ds_dept.getRowCount(); i++) {
    /**
     * 1. 하위부서 정보 세팅
     */
    ds_masterExcel.removeAll();
    dma_dept.setJSON(dma_search.getJSON());
    dma_dept.set("acctDeptCd", ds_dept.getCellData(i, "col1"));
    await $c.sbm.execute($p, sbm_retrieveExcel);

    /**
     * 2. 데이터리스트 동적 생성
     */
    //start
    let dsId = [],
      dsNm = [],
      dsType = [];
    var colCnt = ds_masterExcel.getTotalCol();
    for (let j = 0; j < colCnt; j++) {
      let colId = ds_masterExcel.getColumnID(j);
      let colNm = ds_masterExcel.getColumnName(colId);
      dsId.push(colId);
      dsNm.push(colNm);
      if (colId == "mgntAcctCd" //구분코드
      || colId == "mgntAcctCdNm" //구분명
      ) {
        dsType.push("text");
      } else {
        dsType.push("number");
      }
    }
    //$c.data.createDataList(dsName+(i+1), dsId, dsType, dcoptions);
    scwin.createDataList(dsName + (i + 1), dsId, dsNm, dsType, dcoptions);
    let dataList = $p.getComponentById(dsName + (i + 1));
    dataList.setJSON(ds_masterExcel.getAllJSON());
    for (let x = 0; x < dataList.getRowCount(); x++) {
      let mgntAcctCd = dataList.getCellData(x, "mgntAcctCd");
      //년목표대비달성도 처리[requestAmt]
      if (mgntAcctCd == "4100000" || mgntAcctCd == "4900000" || mgntAcctCd == "6700000") {
        let sumRsltsAmt = dataList.getCellData(x, "sumRsltsAmt");
        let yearPlanAmt = dataList.getCellData(x, "yearPlanAmt");
        //let requestAmt = Number(yearPlanAmt) === 0 ? 0 :  $c.num.round((Number(sumRsltsAmt) / Number(yearPlanAmt)) * 1000) / 10;             
        let requestAmt = Number(yearPlanAmt) === 0 ? 0 : (Number(sumRsltsAmt) / Number(yearPlanAmt) * 100).toFixed(1);
        dataList.setCellData(x, "requestAmt", Number(requestAmt));
      }
    }
    scwin.f_SetGridUnit2(dataList);
    //년목표대비달성도 빈값인 경우 0으로 처리
    for (let x = 0; x < dataList.getRowCount(); x++) {
      let requestAmt = dataList.getCellData(x, "requestAmt");
      if ($c.gus.cfIsNull($p, requestAmt)) {
        dataList.setCellData(x, "requestAmt", 0);
      }
    }
    dataList.reform();
    dsTitle[i] = dsName + (i + 1);
    sheetTitle[i] = ds_dept.getCellData(i, "col2");
  }
  let fileName = "손익자료(당월)";
  const options = {
    common: {
      fileName: fileName + ".xlsx",
      //[default: excel.xls] 다운로드하려는 파일의 이름
      showProcess: true,
      //[default: true] 다운로드 시 프로세스 창을 보여줄지 여부
      autoSizeColumn: true,
      //[default: false] 너비자동맞춤 설정 유무
      multipleSheet: "true" //[default: true] 다운로드시 dataList별 sheet분리 출력유무
    },
    excelInfo: []
  };
  var json;
  let title = "";
  let subTitle = "단위_" + lc_unit.getText();

  /**
   * 3. 엑셀 세팅(각 데이터리스트에 sheet 셋팅)
   */
  for (let i = 0; i < sheetTitle.length; i++) {
    title = sheetTitle[i] + "(" + ica_closeYm.getValue() + ")";
    json = {
      dataListId: dsTitle[i],
      sheetName: sheetTitle[i],
      removeColumns: "0",
      // foldColumns : "2",
      headerColor: "#d9d9d9",
      //bodyColor : "#92CDDC",
      wframeId: "wframe" + i,
      startRowIndex: 6,
      startColumnIndex: 0,
      type: "1",
      //useHeader : "true",            //다운로드 시 Header를 출력 할지 여부. [default: true] ( "true"인 경우 출력. "false"인 경우 미출력.)
      //useDataFormat : true,          //[default: 없음] ( "true"인 경우 표시형식 텍스트, "false"인 경우 표시형식 일반 출력)
      infoArr: [
      //제목
      {
        rowIndex: 0 //제목을 표시할 행 index
        ,

        colIndex: 0 //제목을 표시할 열 index
        ,

        rowSpan: 1 //병합할 행의 수
        ,

        colSpan: 13 //병합할 열의 수
        ,

        text: title //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "18px" //폰트 size
        ,

        fontName: "돋움체" //폰트이름 
        //, drawBorder: false       //cell의 border 지정(true, false)
      },
      //단위표시
      {
        rowIndex: 3 //제목을 표시할 행 index
        ,

        colIndex: 0 //제목을 표시할 열 index
        ,

        rowSpan: 1 //병합할 행의 수
        ,

        colSpan: 13 //병합할 열의 수
        ,

        text: subTitle //표시할 내용(제목)
        ,

        textAlign: "right" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "12px" //폰트 size
        ,

        fontName: "돋움체" //폰트이름 
        //, drawBorder: false       //cell의 border 지정(true, false)
      },
      //헤더1 start
      {
        rowIndex: 4 //제목을 표시할 행 index
        ,

        colIndex: 0 //제목을 표시할 열 index
        ,

        rowSpan: 3 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "구분명" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 4 //제목을 표시할 행 index
        ,

        colIndex: 1 //제목을 표시할 열 index
        ,

        rowSpan: 3 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "년간계획" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 4 //제목을 표시할 행 index
        ,

        colIndex: 12 //제목을 표시할 열 index
        ,

        rowSpan: 3 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "년목표대비달성도" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 4 //제목을 표시할 행 index
        ,

        colIndex: 2 //제목을 표시할 열 index
        ,

        rowSpan: 1 //병합할 행의 수
        ,

        colSpan: 5 //병합할 열의 수
        ,

        text: ica_closeYm.getValue().substring(4, 6) + " 당월" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 4 //제목을 표시할 행 index
        ,

        colIndex: 7 //제목을 표시할 열 index
        ,

        rowSpan: 1 //병합할 행의 수
        ,

        colSpan: 5 //병합할 열의 수
        ,

        text: ica_closeYm.getValue().substring(4, 6) + " 누계" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      },
      //헤더1 end
      //헤더2 start
      {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 2 //제목을 표시할 열 index
        ,

        rowSpan: 2 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "전기" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 3 //제목을 표시할 열 index
        ,

        rowSpan: 2 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "계획" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 4 //제목을 표시할 열 index
        ,

        rowSpan: 2 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "실적" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 5 //제목을 표시할 열 index
        ,

        rowSpan: 0 //병합할 행의 수
        ,

        colSpan: 2 //병합할 열의 수
        ,

        text: "증감" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 7 //제목을 표시할 열 index
        ,

        rowSpan: 2 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "전기" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 8 //제목을 표시할 열 index
        ,

        rowSpan: 2 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "계획" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 9 //제목을 표시할 열 index
        ,

        rowSpan: 2 //병합할 행의 수
        ,

        colSpan: 0 //병합할 열의 수
        ,

        text: "실적" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }, {
        rowIndex: 5 //제목을 표시할 행 index
        ,

        colIndex: 10 //제목을 표시할 열 index
        ,

        rowSpan: 0 //병합할 행의 수
        ,

        colSpan: 2 //병합할 열의 수
        ,

        text: "증감" //표시할 내용(제목)
        ,

        textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
        ,

        fontSize: "11px" //폰트 size
        ,

        fontName: "맑은 고딕" //폰트이름 
        ,

        bgColor: "#d9d9d9" //색상
        //, drawBorder: false       //cell의 border 지정(true, false)
      }
      //헤더2 end
      ]
    };
    options.excelInfo.push(json);
  }
  $c.data.downloadMultipleDataList($p, options);
};

/**
 * 하위부서포함 조회
 * 엑셀클릭 시
 */
scwin.f_Retrieve2 = async function () {
  if (ds_dept.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  //dataList 동적 생성 시 푤요
  const dcoptions = {
    baseNode: "list",
    repeatNode: "map",
    saveRemovedData: "true"
  };
  let dsName = "ds_master";
  let dsTitle = [];
  let sheetTitle = [];
  ds_masterExcel.removeAll();
  //for(let i=ds_dept.getRowCount(); i>=0; i--) {
  for (let i = 0; i < ds_dept.getRowCount(); i++) {
    /**
     * 1. 하위부서 정보 세팅
     */
    ds_masterExcel.removeAll();
    dma_dept.setJSON(dma_search.getJSON());
    dma_dept.set("acctDeptCd", ds_dept.getCellData(i, "col1"));
    await $c.sbm.execute($p, sbm_retrieveExcel);

    /**
     * 2. 데이터리스트 동적 생성
     */
    //start
    let dsId = [],
      dsNm = [],
      dsType = [];
    var colCnt = ds_masterExcel.getTotalCol();
    for (let j = 0; j < colCnt; j++) {
      let colId = ds_masterExcel.getColumnID(j);
      let colNm = ds_masterExcel.getColumnName(colId);
      dsId.push(colId);
      dsNm.push(colNm);
      if (colId == "mgntAcctCd" //구분코드
      || colId == "mgntAcctCdNm" //구분명
      ) {
        dsType.push("text");
      } else {
        dsType.push("number");
      }
    }
    //$c.data.createDataList(dsName+(i+1), dsId, dsType, dcoptions);
    scwin.createDataList(dsName + (i + 1), dsId, dsNm, dsType, dcoptions);
    let dataList = $p.getComponentById(dsName + (i + 1));
    dataList.setJSON(ds_masterExcel.getAllJSON());
    for (let x = 0; x < dataList.getRowCount(); x++) {
      let mgntAcctCd = dataList.getCellData(x, "mgntAcctCd");
      //년목표대비달성도 처리[requestAmt]
      if (mgntAcctCd == "4100000" || mgntAcctCd == "4900000" || mgntAcctCd == "6700000") {
        let sumRsltsAmt = dataList.getCellData(x, "sumRsltsAmt");
        let yearPlanAmt = dataList.getCellData(x, "yearPlanAmt");
        //let requestAmt = Number(yearPlanAmt) === 0 ? 0 :  $c.num.round((Number(sumRsltsAmt) / Number(yearPlanAmt)) * 1000) / 10;             
        let requestAmt = Number(yearPlanAmt) === 0 ? 0 : (Number(sumRsltsAmt) / Number(yearPlanAmt) * 100).toFixed(1);
        dataList.setCellData(x, "requestAmt", Number(requestAmt));
      }
    }
    scwin.f_SetGridUnit2(dataList);
    //년목표대비달성도 빈값인 경우 0으로 처리
    for (let x = 0; x < dataList.getRowCount(); x++) {
      let requestAmt = dataList.getCellData(x, "requestAmt");
      if ($c.gus.cfIsNull($p, requestAmt)) {
        dataList.setCellData(x, "requestAmt", 0);
      }
    }
    dataList.reform();
    dsTitle[i] = dsName + (i + 1);
    sheetTitle[i] = ds_dept.getCellData(i, "col2");
  }
  let fileName = "손익자료(당월)";
  var options = {
    common: {
      fileName: fileName + ".xlsx",
      // [default: excel.xls] 다운로드하려는 파일의 이름
      showProcess: true,
      // [default: true] 다운로드 시 프로세스 창을 보여줄지 여부
      multipleSheet: "true",
      // [default: true] 다운로드시 dataList별 sheet분리 출력유무
      useStyle: true
    },
    // 시트별 정보
    excelInfo: []
  };
  var json;
  let title = "";
  let subTitle = "단위_" + lc_unit.getText();

  /**
   * 3. 엑셀 세팅(각 데이터리스트에 sheet 셋팅)
   */
  gen_gridView1.removeAll();
  for (let i = 0; i < sheetTitle.length; i++) {
    await scwin.createGrid(dsTitle[i]);
  }
  for (let i = 0; i < gen_gridView1.getChildren().length; i++) {
    var acctDeptCd = ds_dept.getCellData(i, "col2");
    // 타이틀1 : ex) 시화센터(202501)
    var title1 = acctDeptCd + "(" + ica_closeYm.getValue() + ")";
    // 타이틀2 : ex) 단위_천원
    var title2 = '단위_' + lc_unit.getText(true);
    // 시트명 : ex) 시화센터

    let grdID = gen_gridView1.getChildren()[i].getID();
    var json = {
      gridId: grdID,
      sheetName: sheetTitle[i],
      headerColor: "#d9d9d9",
      startRowIndex: 3,
      startColumnIndex: 0,
      useDataFormat: true,
      decimal: "auto",
      type: "1",
      infoArr: [{
        rowIndex: 0 // 내용을 표시할 행번호
        ,

        colIndex: 0 // 내용을 표시할 열번호
        ,

        rowSpan: 1 // 병합할 행의 수
        ,

        colSpan: 13 // 병합할 열의 수
        ,

        text: title1 // 표시할 내용
        ,

        textAlign: "center" // 표시할 내용의 정렬 방법 (left, center, right)
        ,

        fontSize: 30 // font size 설정 ( ex) "20px" )
        ,

        fontName: "돋움채" // font name 설정
        ,

        drawBorder: true // cell의 border 지정 ( ex) true )
        ,

        fontWeight: "bold" // font weight 설정 ( ex) "bold" )
      }, {
        rowIndex: 2 // 내용을 표시할 행번호
        ,

        colIndex: 0 // 내용을 표시할 열번호
        ,

        rowSpan: 1 // 병합할 행의 수
        ,

        colSpan: 13 // 병합할 열의 수
        ,

        text: title2 // 표시할 내용
        ,

        textAlign: "right" // 표시할 내용의 정렬 방법 (left, center, right)
        ,

        fontSize: 12 // font size 설정 ( ex) "20px" )
        ,

        fontName: "돋움채" // font name 설정
        ,

        drawBorder: true // cell의 border 지정 ( ex) true )
      }]
    };
    options.excelInfo.push(json);
  }
  $c.data.downloadMultipleGridView($p, options);
};

/**
 * 그리드 데이터 엑셀로 다운
 */
scwin.f_Export = async function () {
  // let objGridName = eval("gr_master");
  // if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
  //     let exportFileName = "손익자료(당월)_" + ed_bizDomNm.getValue() + "_" + ed_acctDeptNm.getValue() + "_" + ica_closeYm.getValue().trim();
  //     $c.data.downloadGridViewExcel(objGridName, "손익자료(당월)", exportFileName, 2 + 8 + 16);
  // }

  if (ds_master.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "손익자료(당월)";
  let title = ed_acctDeptNm.getValue() + "(" + ica_closeYm.getValue() + ")";
  let subTitle = "단위_" + lc_unit.getText();
  let options = {
    fileName: sheetTitle + "_" + ed_bizDomNm.getValue() + "_" + ed_acctDeptNm.getValue() + "_" + ica_closeYm.getValue() + ".xlsx",
    sheetName: sheetTitle,
    type: "1",
    headerColor: "#d9d9d9",
    //"#E8E8E8", //연한회색 #33CCCC
    hiddenVisible: "true",
    //히든값(true : 포함, false : 미포함)
    startRowIndex: 5,
    //시작되는 행의 번호(헤더 포함)
    useStyle: "true",
    //다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)
    useFooter: "false" //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
  };
  //그리드에 대한 내용을 추가 옵션
  let infoArr = [
  //제목
  {
    rowIndex: 0 //제목을 표시할 행 index
    ,

    colIndex: 0 //제목을 표시할 열 index
    ,

    rowSpan: 1 //병합할 행의 수
    ,

    colSpan: 13 //병합할 열의 수
    ,

    text: title //표시할 내용(제목)
    ,

    textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
    ,

    fontSize: "18px" //폰트 size
    ,

    fontName: "돋움체" //폰트이름 
    //, drawBorder: false       //cell의 border 지정(true, false)
  },
  //단위표시
  {
    rowIndex: 3 //제목을 표시할 행 index
    ,

    colIndex: 0 //제목을 표시할 열 index
    ,

    rowSpan: 1 //병합할 행의 수
    ,

    colSpan: 13 //병합할 열의 수
    ,

    text: subTitle //표시할 내용(제목)
    ,

    textAlign: "right" //표시할 내용의 정렬 방법(left, center, right)
    ,

    fontSize: "12px" //폰트 size
    ,

    fontName: "돋움체" //폰트이름 
    //, drawBorder: false       //cell의 border 지정(true, false)
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

/**
 * 엑셀 Download  <하위부서 Excel Down Load : 하위부서포함한 전체 를 excel 파일로 저장
 * TOBE 사용안함
 */
scwin.f_Export2 = function (acctDeptCd) {
  //asis 소스
  // if (ds_master.getRowCount() == 0) {
  //     $c.win.alert(MSG_CM_WRN_002);
  //     return;
  // }

  // let sheetTitle;
  // sheetTitle = acctDeptCd + "(" + ica_closeYm.getValue() + ")";
  // sheetTitle2 = '단위_' + lc_unit.getValue();

  // gr_master.SetExcelTitle(0, "");
  // gr_master.SetExcelTitle(1, "value:" + sheetTitle + ";" // 표시할 타이틀
  //     + "font-face:'굴림체';" // 폰트
  //     + "font-size:30pt;" // 폰트 크기
  //     + "font-color:black;" // 폰트 색깔
  //     + "font-bold;"
  //     + "bgcolor:white;" // 배경 색깔
  //     + "align:center;" // 정렬
  //     + "line-color:black;" // 타이틀 부분 테두리선 색깔
  //     + "line-width:2pt;" // 타이틀 테두리선 굵기
  //     + "skiprow:2;"); // 타이틀 다음 떼는 로우 수

  // gr_master.SetExcelTitle(1, "value:" + sheetTitle2 + ";" // 표시할 타이틀
  //     + "font-face:'굴림체';" // 폰트
  //     + "font-size:12pt;" // 폰트 크기
  //     + "font-color:black;" // 폰트 색깔
  //     + "bgcolor:#ffffff;" // 배경 색깔
  //     + "align:right;" // 정렬
  //     + "line-color:black;" // 타이틀 부분 테두리선 색깔
  //     + "line-width:1pt;" // 타이틀 테두리선 굵기
  //     + "skiprow:0;"); // 타이틀 다음 떼는 로우 수

  // fileName = "C:\\Debis_EIS\\손익자료(당월)_"
  //     + ed_bizDomNm.getValue()
  //     + "_"
  //     + ica_closeYm.getValue()
  //     + "_하위_"
  //     + acctDeptCd
  //     + ".xls"
  //     ;

  // let sheetTitle_dept;
  // sheetTitle_dept = acctDeptCd.trim().replace('/', '');

  // gr_master.RunExcelSheet(acctDeptCd);
};

/**
 * 헤더정보 입력
 */
scwin.f_SetGridFormat = function () {
  // gr_master.ColumnProp("thisMm", "Name") 	= ed_closeYm.text.substr(4,6) + " 당월";
  // gr_master.ColumnProp("cum", "Name") 	= ed_closeYm.text.substr(4,6) + " 누계";
  gr_master.setHeaderValue("thisMm_h1", ica_closeYm.getValue().substring(4, 6) + " 당월");
  gr_master.setHeaderValue("cum_h1", ica_closeYm.getValue().substring(4, 6) + " 누계");
};

/**
 * 금액을 재설정한다.
 */
scwin.f_Rate = function () {
  // 사용변수 선언
  let sellAmt = 0;
  let sellAmt1 = 0;
  let sellAmt2 = 0;
  let sellAmt3 = 0;
  let sellAmt4 = 0;
  let sellAmt5 = 0;
  let sellAmt6 = 0;
  let sellAmt7 = 0;
  let sellAmt8 = 0;
  let sellAmt9 = 0;
  let sellCost1 = 0;
  let sellCost2 = 0;
  let sellCost3 = 0;
  let sellCost4 = 0;
  let sellCost5 = 0;
  let sellCost6 = 0;
  let sellCost7 = 0;
  let sellCost8 = 0;
  let sellCost9 = 0;
  let salesCost1 = 0;
  let salesCost2 = 0;
  let salesCost3 = 0;
  let salesCost4 = 0;
  let salesCost5 = 0;
  let salesCost6 = 0;
  let salesCost7 = 0;
  let salesCost8 = 0;
  let salesCost9 = 0;
  let mwound1 = 0;
  let mwound2 = 0;
  let mwound3 = 0;
  let mwound4 = 0;
  let mwound5 = 0;
  let mwound6 = 0;
  let mwound7 = 0;
  let mwound8 = 0;
  let mwound9 = 0;
  let vCost1 = 0;
  let vCost2 = 0;
  let vCost3 = 0;
  let vCost4 = 0;
  let vCost5 = 0;
  let vCost6 = 0;
  let vCost7 = 0;
  let vCost8 = 0;
  let vCost9 = 0;

  // 매출액, 매출원가, 영업이익, 경상이익을 구한다.
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    // 매출액
    if (ds_master.getCellData(i, "mgntAcctCd") == "4100000") {
      sellAmt1 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      sellAmt2 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      sellAmt3 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      sellAmt4 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      sellAmt5 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      sellAmt6 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      sellAmt7 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      sellAmt8 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      sellAmt9 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    // 매출원가
    if (ds_master.getCellData(i, "mgntAcctCd") == "4200000") {
      sellCost1 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      sellCost2 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      sellCost3 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      sellCost4 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      sellCost5 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      sellCost6 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      sellCost7 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      sellCost8 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      sellCost9 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    // 영업이익
    if (ds_master.getCellData(i, "mgntAcctCd") == "5900000") {
      salesCost1 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      salesCost2 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      salesCost3 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      salesCost4 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      salesCost5 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      salesCost6 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      salesCost7 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      salesCost8 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      salesCost9 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    // 경상이익
    if (ds_master.getCellData(i, "mgntAcctCd") == "6700000") {
      mwound1 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      mwound2 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      mwound3 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      mwound4 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      mwound5 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      mwound6 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      mwound7 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      mwound8 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      mwound9 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    // 변동비용
    if (ds_master.getCellData(i, "mgntAcctCd") == "9400001") {
      vCost1 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      vCost2 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      vCost3 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      vCost4 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      vCost5 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      vCost6 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      vCost7 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      vCost8 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      vCost9 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }
  }

  // 매출원가율, 영업이익율, 경상이익율을 구한다.
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    //매출원가율
    if (ds_master.getCellData(i, "mgntAcctCd") == "9300001") {
      ds_master.setCellData(i, "yearPlanAmt", Number(sellAmt1) == 0 ? 0 : $c.num.round($p, sellCost1 / sellAmt1 * lc_unit.getValue() * 1000) / 10);
      ds_master.setCellData(i, "bfyyThisAmt", Number(sellAmt2) == 0 ? 0 : $c.num.round($p, sellCost2 / sellAmt2 * lc_unit.getValue() * 1000) / 10);
      ds_master.setCellData(i, "thisPlanAmt", Number(sellAmt3) == 0 ? 0 : $c.num.round($p, sellCost3 / sellAmt3 * lc_unit.getValue() * 1000) / 10);
      ds_master.setCellData(i, "thisRsltsAmt", Number(sellAmt4) == 0 ? 0 : $c.num.round($p, sellCost4 / sellAmt4 * lc_unit.getValue() * 1000) / 10);
      // ds_master.NameValue(i,"thisDiffr")= $c.num.round((sellCost5 / sellAmt5) * lc_unit.getValue() * 1000)/10;
      ds_master.setCellData(i, "sumBfyyThisAmt", Number(sellAmt6) == 0 ? 0 : $c.num.round($p, sellCost6 / sellAmt6 * lc_unit.getValue() * 1000) / 10);
      ds_master.setCellData(i, "sumPlanAmt", Number(sellAmt7) == 0 ? 0 : $c.num.round($p, sellCost7 / sellAmt7 * lc_unit.getValue() * 1000) / 10);
      ds_master.setCellData(i, "sumRsltsAmt", Number(sellAmt8) == 0 ? 0 : $c.num.round($p, sellCost8 / sellAmt8 * lc_unit.getValue() * 1000) / 10);
      // ds_master.NameValue(i,"sumDiffer")= $c.num.round((sellCost9 / sellAmt9) * lc_unit.getValue() * 10000)/10;
      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }

    // 변동비율
    if (ds_master.getCellData(i, "mgntAcctCd") == "9300006") {
      ds_master.setCellData(i, "yearPlanAmt", Number(sellAmt1) == 0 ? 0 : Number(vCost1) / Number(sellAmt1) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "bfyyThisAmt", Number(sellAmt2) == 0 ? 0 : Number(vCost2) / Number(sellAmt2) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "thisPlanAmt", Number(sellAmt3) == 0 ? 0 : Number(vCost3) / Number(sellAmt3) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "thisRsltsAmt", Number(sellAmt4) == 0 ? 0 : Number(vCost4) / Number(sellAmt4) * lc_unit.getValue() * 100);
      // ds_master.NameValue(i,"thisDiffer")= (vCost5 / sellAmt5) * lc_unit.getValue() * 100;
      ds_master.setCellData(i, "sumBfyyThisAmt", Number(sellAmt6) == 0 ? 0 : Number(vCost6) / Number(sellAmt6) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "sumPlanAmt", Number(sellAmt7) == 0 ? 0 : Number(vCost7) / Number(sellAmt7) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "sumRsltsAmt", Number(sellAmt8) == 0 ? 0 : Number(vCost8) / Number(sellAmt8) * lc_unit.getValue() * 100);
      // ds_master.NameValue(i,"sumDiffer")= (vCost9 / sellAmt9) * lc_unit.getValue() * 100;

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }

    // 영업이익율
    if (ds_master.getCellData(i, "mgntAcctCd") == "9300002") {
      ds_master.setCellData(i, "yearPlanAmt", Number(sellAmt1) == 0 ? 0 : Number(salesCost1) / Number(sellAmt1) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "bfyyThisAmt", Number(sellAmt2) == 0 ? 0 : Number(salesCost2) / Number(sellAmt2) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "thisPlanAmt", Number(sellAmt3) == 0 ? 0 : Number(salesCost3) / Number(sellAmt3) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "thisRsltsAmt", Number(sellAmt4) == 0 ? 0 : Number(salesCost4) / Number(sellAmt4) * lc_unit.getValue() * 100);
      // ds_master.NameValue(i,"thisDiffer")= (salesCost5 / sellAmt5) * lc_unit.getValue() * 100;
      ds_master.setCellData(i, "sumBfyyThisAmt", Number(sellAmt6) == 0 ? 0 : Number(salesCost6) / Number(sellAmt6) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "sumPlanAmt", Number(sellAmt7) == 0 ? 0 : Number(salesCost7) / Number(sellAmt7) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "sumRsltsAmt", Number(sellAmt8) == 0 ? 0 : Number(salesCost8) / Number(sellAmt8) * lc_unit.getValue() * 100);
      // ds_master.NameValue(i,"sumDiffer")= (salesCost9 / sellAmt9) * lc_unit.getValue() * 100;
    }

    // 경상이익율
    if (ds_master.getCellData(i, "mgntAcctCd") == "9300003") {
      ds_master.setCellData(i, "yearPlanAmt", Number(sellAmt1) == 0 ? 0 : Number(mwound1) / Number(sellAmt1) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "bfyyThisAmt", Number(sellAmt2) == 0 ? 0 : Number(mwound2) / Number(sellAmt2) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "thisPlanAmt", Number(sellAmt3) == 0 ? 0 : Number(mwound3) / Number(sellAmt3) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "thisRsltsAmt", Number(sellAmt4) == 0 ? 0 : Number(mwound4) / Number(sellAmt4) * lc_unit.getValue() * 100);
      // ds_master.NameValue(i,"thisDiffer")= (mwound5 / sellAmt5) * lc_unit.getValue() * 100;
      ds_master.setCellData(i, "sumBfyyThisAmt", Number(sellAmt6) == 0 ? 0 : Number(mwound6) / Number(sellAmt6) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "sumPlanAmt", Number(sellAmt7) == 0 ? 0 : Number(mwound7) / Number(sellAmt7) * lc_unit.getValue() * 100);
      ds_master.setCellData(i, "sumRsltsAmt", Number(sellAmt8) == 0 ? 0 : Number(mwound8) / Number(sellAmt8) * lc_unit.getValue() * 100);
      // ds_master.NameValue(i,"sumDiffer")= (mwound9 / sellAmt9) * lc_unit.getValue() * 100;

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }
  }
  ds_master.reform();
};

/**
 * 평가이익, 성과이익 금액을 재설정한다.
 */
scwin.f_Profitloss = function () {
  //평가이익
  let valProfit1 = 0;
  let valProfit2 = 0;
  let valProfit3 = 0;
  let valProfit4 = 0;
  let valProfit5 = 0;
  let valProfit6 = 0;
  let valProfit7 = 0;
  let valProfit8 = 0;
  let valProfit9 = 0;
  //성과이익
  let perProfit1 = 0;
  let perProfit2 = 0;
  let perProfit3 = 0;
  let perProfit4 = 0;
  let perProfit5 = 0;
  let perProfit6 = 0;
  let perProfit7 = 0;
  let perProfit8 = 0;
  let perProfit9 = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    // 영업이익, 채권금리, 재고자산금리
    if (ds_master.getCellData(i, "mgntAcctCd") == "5900000") {
      valProfit1 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      valProfit2 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      valProfit3 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      valProfit4 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      valProfit5 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      valProfit6 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      valProfit7 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      valProfit8 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      valProfit9 = Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }
    if (ds_master.getCellData(i, "mgntAcctCd") == "9800001" || ds_master.getCellData(i, "mgntAcctCd") == "9800002") {
      valProfit1 = Number(valProfit1) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      valProfit2 = Number(valProfit2) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      valProfit3 = Number(valProfit3) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      valProfit4 = Number(valProfit4) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      valProfit5 = Number(valProfit5) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      valProfit6 = Number(valProfit6) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      valProfit7 = Number(valProfit7) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      valProfit8 = Number(valProfit8) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      valProfit9 = Number(valProfit9) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    // 투자자산금리
    if (ds_master.getCellData(i, "mgntAcctCd") == "9800004") {
      perProfit1 = Number(valProfit1) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      perProfit2 = Number(valProfit2) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      perProfit3 = Number(valProfit3) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      perProfit4 = Number(valProfit4) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      perProfit5 = Number(valProfit5) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      perProfit6 = Number(valProfit6) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      perProfit7 = Number(valProfit7) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      perProfit8 = Number(valProfit8) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      perProfit9 = Number(valProfit9) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }
  }

  // 평가이익, 성과이익을 구한다.
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    //평가이익 = 영업이익-채권금일-재고자산금리
    if (ds_master.getCellData(i, "mgntAcctCd") == "9800003") {
      ds_master.setCellData(i, "yearPlanAmt", valProfit1);
      ds_master.setCellData(i, "bfyyThisAmt", valProfit2);
      ds_master.setCellData(i, "thisPlanAmt", valProfit3);
      ds_master.setCellData(i, "thisRsltsAmt", valProfit4);
      ds_master.setCellData(i, "sumBfyyThisAmt", valProfit6);
      ds_master.setCellData(i, "sumPlanAmt", valProfit6);
      ds_master.setCellData(i, "sumRsltsAmt", valProfit8);

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }

    // 성과이익 = 평가이익-투자자산금리
    if (ds_master.getCellData(i, "mgntAcctCd") == "9800005") {
      ds_master.setCellData(i, "yearPlanAmt", perProfit1);
      ds_master.setCellData(i, "bfyyThisAmt", perProfit2);
      ds_master.setCellData(i, "thisPlanAmt", perProfit3);
      ds_master.setCellData(i, "thisRsltsAmt", perProfit4);
      ds_master.setCellData(i, "sumBfyyThisAmt", perProfit6);
      ds_master.setCellData(i, "sumPlanAmt", perProfit6);
      ds_master.setCellData(i, "sumRsltsAmt", perProfit8);

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }
  }
};

/**
 * 유동자산, 비유동자산 금액을 재설정한다.
 */
scwin.f_AssetsAmt = function () {
  //유동자산 1100000
  let flowAmt1 = 0;
  let flowAmt2 = 0;
  let flowAmt3 = 0;
  let flowAmt4 = 0;
  let flowAmt5 = 0;
  let flowAmt6 = 0;
  let flowAmt7 = 0;
  let flowAmt8 = 0;
  let flowAmt9 = 0;

  //대손충당금합계 (매출채권 재계산)
  let mFlowAmt1 = 0;
  let mFlowAmt2 = 0;
  let mFlowAmt3 = 0;
  let mFlowAmt4 = 0;
  let mFlowAmt5 = 0;
  let mFlowAmt6 = 0;
  let mFlowAmt7 = 0;
  let mFlowAmt8 = 0;
  let mFlowAmt9 = 0;

  //비유동자산 1200000
  let nonFlowAmt1 = 0;
  let nonFlowAmt2 = 0;
  let nonFlowAmt3 = 0;
  let nonFlowAmt4 = 0;
  let nonFlowAmt5 = 0;
  let nonFlowAmt6 = 0;
  let nonFlowAmt7 = 0;
  let nonFlowAmt8 = 0;
  let nonFlowAmt9 = 0;

  //건설중인자산 (유형자산 재계산)
  let mNonFlowAmt1 = 0;
  let mNonFlowAmt2 = 0;
  let mNonFlowAmt3 = 0;
  let mNonFlowAmt4 = 0;
  let mNonFlowAmt5 = 0;
  let mNonFlowAmt6 = 0;
  let mNonFlowAmt7 = 0;
  let mNonFlowAmt8 = 0;
  let mNonFlowAmt9 = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    // 매출채권, 미수금 , 재고자산, 선급비용
    if (ds_master.getCellData(i, "mgntAcctCd") == "1110400" || ds_master.getCellData(i, "mgntAcctCd") == "1110730" || ds_master.getCellData(i, "mgntAcctCd") == "1120000" || ds_master.getCellData(i, "mgntAcctCd") == "1111100") {
      flowAmt1 = Number(flowAmt1) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      flowAmt2 = Number(flowAmt2) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      flowAmt3 = Number(flowAmt3) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      flowAmt4 = Number(flowAmt4) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      flowAmt5 = Number(flowAmt5) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      flowAmt6 = Number(flowAmt6) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      flowAmt7 = Number(flowAmt7) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      flowAmt8 = Number(flowAmt8) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      flowAmt9 = Number(flowAmt9) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }
    //대손충당금
    if (ds_master.getCellData(i, "mgntAcctCd") == "1110910" || ds_master.getCellData(i, "mgntAcctCd") == "1110920" || ds_master.getCellData(i, "mgntAcctCd") == "1110930") {
      flowAmt1 = Number(flowAmt1) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      flowAmt2 = Number(flowAmt2) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      flowAmt3 = Number(flowAmt3) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      flowAmt4 = Number(flowAmt4) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      flowAmt5 = Number(flowAmt5) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      flowAmt6 = Number(flowAmt6) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      flowAmt7 = Number(flowAmt7) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      flowAmt8 = Number(flowAmt8) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      flowAmt9 = Number(flowAmt9) - Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
      mFlowAmt1 = Number(mFlowAmt1) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      mFlowAmt2 = Number(mFlowAmt2) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      mFlowAmt3 = Number(mFlowAmt3) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      mFlowAmt4 = Number(mFlowAmt4) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      mFlowAmt5 = Number(mFlowAmt5) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      mFlowAmt6 = Number(mFlowAmt6) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      mFlowAmt7 = Number(mFlowAmt7) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      mFlowAmt8 = Number(mFlowAmt8) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      mFlowAmt9 = Number(mFlowAmt9) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    // 비유동자산
    if (ds_master.getCellData(i, "mgntAcctCd") == "1210400" || ds_master.getCellData(i, "mgntAcctCd") == "1210500" || ds_master.getCellData(i, "mgntAcctCd") == "1220000" || ds_master.getCellData(i, "mgntAcctCd") == "1230000" || ds_master.getCellData(i, "mgntAcctCd") == "1240100") {
      nonFlowAmt1 = Number(nonFlowAmt1) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      nonFlowAmt2 = Number(nonFlowAmt2) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      nonFlowAmt3 = Number(nonFlowAmt3) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      nonFlowAmt4 = Number(nonFlowAmt4) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      nonFlowAmt5 = Number(nonFlowAmt5) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      nonFlowAmt6 = Number(nonFlowAmt6) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      nonFlowAmt7 = Number(nonFlowAmt7) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      nonFlowAmt8 = Number(nonFlowAmt8) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      nonFlowAmt9 = Number(nonFlowAmt9) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }

    //건설중인자산
    if (ds_master.getCellData(i, "mgntAcctCd") == "1221000") {
      mNonFlowAmt1 = Number(mNonFlowAmt1) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "yearPlanAmt")) ? 0 : ds_master.getCellData(i, "yearPlanAmt")) || 0;
      mNonFlowAmt2 = Number(mNonFlowAmt2) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "bfyyThisAmt")) ? 0 : ds_master.getCellData(i, "bfyyThisAmt")) || 0;
      mNonFlowAmt3 = Number(mNonFlowAmt3) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisPlanAmt")) ? 0 : ds_master.getCellData(i, "thisPlanAmt")) || 0;
      mNonFlowAmt4 = Number(mNonFlowAmt4) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisRsltsAmt")) ? 0 : ds_master.getCellData(i, "thisRsltsAmt")) || 0;
      mNonFlowAmt5 = Number(mNonFlowAmt5) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "thisDiffer")) ? 0 : ds_master.getCellData(i, "thisDiffer")) || 0;
      mNonFlowAmt6 = Number(mNonFlowAmt6) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumBfyyThisAmt")) ? 0 : ds_master.getCellData(i, "sumBfyyThisAmt")) || 0;
      mNonFlowAmt7 = Number(mNonFlowAmt7) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumPlanAmt")) ? 0 : ds_master.getCellData(i, "sumPlanAmt")) || 0;
      mNonFlowAmt8 = Number(mNonFlowAmt8) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumRsltsAmt")) ? 0 : ds_master.getCellData(i, "sumRsltsAmt")) || 0;
      mNonFlowAmt9 = Number(mNonFlowAmt9) + Number($c.gus.cfIsNull($p, ds_master.getCellData(i, "sumDiffer")) ? 0 : ds_master.getCellData(i, "sumDiffer")) || 0;
    }
  }

  // 유동자산, 매출채권, 비유동자산, 유형자산 금액을 구한다.
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    //유동자산
    if (ds_master.getCellData(i, "mgntAcctCd") == "1100000") {
      ds_master.setCellData(i, "yearPlanAmt", flowAmt1);
      ds_master.setCellData(i, "bfyyThisAmt", flowAmt2);
      ds_master.setCellData(i, "thisPlanAmt", flowAmt3);
      ds_master.setCellData(i, "thisRsltsAmt", flowAmt4);
      ds_master.setCellData(i, "sumBfyyThisAmt", flowAmt6);
      ds_master.setCellData(i, "sumPlanAmt", flowAmt6);
      ds_master.setCellData(i, "sumRsltsAmt", flowAmt8);

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }

    //매출채권
    if (ds_master.getCellData(i, "mgntAcctCd") == "1110400") {
      ds_master.setCellData(i, "yearPlanAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "yearPlanAmt")) - $c.num.parseFloat($p, mFlowAmt1) || 0);
      ds_master.setCellData(i, "bfyyThisAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")) - $c.num.parseFloat($p, mFlowAmt2) || 0);
      ds_master.setCellData(i, "thisPlanAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")) - $c.num.parseFloat($p, mFlowAmt3) || 0);
      ds_master.setCellData(i, "thisRsltsAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, mFlowAmt4) || 0);
      ds_master.setCellData(i, "sumBfyyThisAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")) - $c.num.parseFloat($p, mFlowAmt5) || 0);
      ds_master.setCellData(i, "sumPlanAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")) - $c.num.parseFloat($p, mFlowAmt6) || 0);
      ds_master.setCellData(i, "sumRsltsAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, mFlowAmt7) || 0);

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }

    // 비유동자산
    if (ds_master.getCellData(i, "mgntAcctCd") == "1200000") {
      ds_master.setCellData(i, "yearPlanAmt", nonFlowAmt1 - $c.num.parseFloat($p, mNonFlowAmt1) || 0);
      ds_master.setCellData(i, "bfyyThisAmt", nonFlowAmt2 - $c.num.parseFloat($p, mNonFlowAmt2) || 0);
      ds_master.setCellData(i, "thisPlanAmt", nonFlowAmt3 - $c.num.parseFloat($p, mNonFlowAmt3) || 0);
      ds_master.setCellData(i, "thisRsltsAmt", nonFlowAmt4 - $c.num.parseFloat($p, mNonFlowAmt4) || 0);
      ds_master.setCellData(i, "sumBfyyThisAmt", nonFlowAmt6 - $c.num.parseFloat($p, mNonFlowAmt5) || 0);
      ds_master.setCellData(i, "sumPlanAmt", nonFlowAmt6 - $c.num.parseFloat($p, mNonFlowAmt6) || 0);
      ds_master.setCellData(i, "sumRsltsAmt", nonFlowAmt8 - $c.num.parseFloat($p, mNonFlowAmt7) || 0);

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }

    // 유형자산
    if (ds_master.getCellData(i, "mgntAcctCd") == "1220000") {
      ds_master.setCellData(i, "yearPlanAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "yearPlanAmt")) - $c.num.parseFloat($p, mNonFlowAmt1) || 0);
      ds_master.setCellData(i, "bfyyThisAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")) - $c.num.parseFloat($p, mNonFlowAmt2) || 0);
      ds_master.setCellData(i, "thisPlanAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")) - $c.num.parseFloat($p, mNonFlowAmt3) || 0);
      ds_master.setCellData(i, "thisRsltsAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, mNonFlowAmt4) || 0);
      ds_master.setCellData(i, "sumBfyyThisAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")) - $c.num.parseFloat($p, mNonFlowAmt5) || 0);
      ds_master.setCellData(i, "sumPlanAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")) - $c.num.parseFloat($p, mNonFlowAmt6) || 0);
      ds_master.setCellData(i, "sumRsltsAmt", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, mNonFlowAmt7) || 0);

      // 당월증감
      ds_master.setCellData(i, "befDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "bfyyThisAmt")));
      ds_master.setCellData(i, "thisDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "thisRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "thisPlanAmt")));
      // 누계증감
      ds_master.setCellData(i, "sumBefDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumBfyyThisAmt")));
      ds_master.setCellData(i, "sumDiffer", $c.num.parseFloat($p, ds_master.getCellData(i, "sumRsltsAmt")) - $c.num.parseFloat($p, ds_master.getCellData(i, "sumPlanAmt")));
    }
  }
};

/**
 * 해당월의 실적이 있는지 여부 확인(True:테이타가 있음, False:데이타가 없음)
 * 해당월의 실적이 없을경우 누적으로 해서 보여주므로 당월 마이너스 실적 나오는것을 막기위함 함수.
 */
scwin.f_CountRow = async function () {
  let ebcId = "ProfitlossProcessEBC";
  let queryId = "retrieveProfitAndLossCount";
  let param1 = ica_closeYm.getValue().trim(); // 결산년월
  // ds_tempCount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + ebcId +
  //     "&queryId=" + queryId +
  //     "&param1=" + param1;
  // ds_tempCount.undoAll();
  // 해당년월 버전의 데이타가 있음
  //if ( parseInt(ds_tempCount.NameValue(1,"col1")) > 0 ) {
  // return true;
  //}

  dma_search.set("sysCd", ebcId);
  dma_search.set("queryId", queryId);
  dma_search.set("param1", param1);
  ds_tempCount.removeAll();
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup);
  ds_tempCount.setJSON(ret.responseJSON.GAUCE);
  ds_tempCount.reform();

  // 해당년월 버전의 데이타가 있음으로 무조건 넘김(☏왜 하는거야?)
  return true;
};

/**
 * 마지막 마감년월를 구한다.
 */
scwin.f_CloseYm = async function () {
  let ebcId = "ProfitlossProcessEBC";
  let queryId = "retrieveProfitAndLossCloseYm";
  // ds_closeYm.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + ebcId +
  //     "&queryId=" + queryId;
  // ds_closeYm.undoAll();

  dma_search.set("sysCd", ebcId);
  dma_search.set("queryId", queryId);
  dma_search.set("param1", "");
  ds_closeYm.removeAll();
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup);
  ds_closeYm.setJSON(ret.responseJSON.GAUCE);
  ds_closeYm.reform();
  let closeYm = ds_closeYm.getCellData(0, "col1");
  if ($c.gus.cfIsNull($p, closeYm)) {
    let today = $c.date.getServerDateTime($p);
    closeYm = today.substring(0, 6);
  }
  ica_closeYm.setValue(closeYm);
  scwin.f_SetGridFormat();
};

/**
 * 팝업
 * TOBE 사용안함(UDC callback함수 사용)
 */
scwin.f_PopUp = function (paramArray) {
  // let codeObj = paramArray.pCode;
  // let nameObj = paramArray.pName;

  // rtnList = cfCommonPopUp(paramArray.pSelectID, $c.gus.cfGetValue(codeObj), ""
  //     , scwin.f_EventCheck(), paramArray.pDispCnt
  //     , paramArray.pTitle, paramArray.pWidth
  //     , paramArray.pHidden, paramArray.pWhere
  //     , paramArray.pW, paramArray.pH
  //     , paramArray.pTop, paramArray.pLeft
  //     , paramArray.pExistTF, paramArray.pAllSearchTF
  //     , paramArray.pWtitleSearch);

  // if (rtnList != null) {
  //     if (rtnList[0] != "N/A") {
  //         $c.gus.cfSetValue(codeObj, rtnList[0]);
  //         codeObj.hidVal = rtnList[0];
  //         $c.gus.cfSetValue(nameObj, rtnList[1]);
  //     }
  // } else {
  //     $c.gus.cfSetValue(codeObj, "");
  //     codeObj.hidVal = "";
  //     $c.gus.cfSetValue(nameObj, "");
  // }

  // return rtnList;
};

/**
 * 팝업 여부 검사
 */
scwin.f_IsPopUp = function (inObj) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  let hidValue = inObj.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.hidVal = "";
    for (let i = 0; i < f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

/**
 * 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
 */
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

/**
 * 부서코드팝업(조회)
 */
// scwin.f_deptPopUp = function() {
scwin.f_deptPopUp = function (close) {
  //asis 소스
  // let paramArray = new Object();
  // paramArray.pSelectID = 'retrieveAcctDeptCdInfo'
  // paramArray.pCode = ed_acctDeptCd;
  // paramArray.pName = ed_acctDeptNm;
  // paramArray.pW = "410";
  // paramArray.pWhere = ds_search.getCellData(ds_search.RowPosition, "closeYm");

  // let rtnList = scwin.f_PopUp(paramArray);

  // if (rtnList != null) {
  //     ds_search.setCellData(ds_search.RowPosition, "acctDeptLvl", rtnList[6]);
  // } else {
  //     ds_search.setCellData(ds_search.RowPosition, "acctDeptLvl", 0);
  // }
  let param = ica_closeYm.getValue();
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), close, null, null, null, null, param, null, null, null, null, null, null, null, null);
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_acctDeptCd.setValue(ret[0]); //부서코드
    ed_acctDeptNm.setValue(ret[1]); //부서명
    ed_acctDeptCd.hidVal = ret[0]; //히든값
    dma_search.set("acctDeptLvl", ret[6]); //부서레벨
  } else {
    ed_acctDeptCd.setValue(""); //부서코드
    ed_acctDeptNm.setValue(""); //부서명
    ed_acctDeptCd.hidVal = ""; //히든값
    dma_search.set("acctDeptLvl", ""); //부서레벨
  }
};

/**
 * 사업영역코드팝업(조회)
 */
scwin.f_BizDomPopUp = function (close) {
  //asis 소스
  // let paramArray = new Object();
  // paramArray.pSelectID = 'retrieveBizDomCdInfo'
  // paramArray.pCode = ed_bizDomCd;
  // paramArray.pName = ed_bizDomNm;
  // paramArray.pW = "410";

  // let rtnList = scwin.f_PopUp(paramArray);

  // if (rtnList != null) {
  //     ds_search.setCellData(ds_search.RowPosition, "bizDomCd", rtnList[4]);
  // } else {
  //     ds_search.setCellData(ds_search.RowPosition, "bizDomCd", 0);
  // }
  let param = "";
  //   scwin.udc_bizDomCd_callBackFunc // 콜백 함수
  // , pCode // 화면에서의 ??? Code Element의 Value
  // , pName // 화면에서의 ??? Name Element의 Value
  // , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  // , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  // , null // Title순서
  // , null // 보여주는 각 컬럼들의 폭
  // , null // 컬럼중에서 숨기는 컬럼 지정
  // , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  // , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  // , null // POP-UP뛰을때 우도우의 사용자 정의 높이
  // , null // 윈도우 위치 Y좌표
  // , null // 윈도우 위치 X좌표
  // , null // 중복체크여부 ("F")
  // , "T' // 전체검색허용여부 ("F") <--------------------------------------- pAllSearch
  // , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  udc_bizDomCd.cfCommonPopUp(scwin.udc_bizDomCd_callBackFunc, ed_bizDomCd.getValue(), ed_bizDomNm.getValue(), close, null, null, null, null, param, null, null, null, null, null, null, null, null);
};

/**
 * 사업영역코드팝업 팝업 callBack
 */
scwin.udc_bizDomCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bizDomCd.setValue(ret[0]); // 계정코드
    ed_bizDomNm.setValue(ret[1]); // 계정명
    ed_bizDomCd.hidVal = ret[0]; // 히든값
  } else {
    ed_bizDomCd.setValue(""); // 계정코드
    ed_bizDomNm.setValue(""); // 계정명
    ed_bizDomCd.hidVal = ""; // 히든값
  }
};

/**
 * 금액단위를 구한다.
 */
scwin.f_GetUnit = async function () {
  //ds_unit.DataId = "/cm.zz.RetrieveCodeCMD.do?grpCd=CO012&cd=&cdNm=";
  //ds_unit.undoAll();
  ds_unit.removeAll();
  let ret = await $c.sbm.execute($p, sbm_unit, {
    "grpCd": "CO012",
    "cd": "",
    "cdNm": ""
  });
  ds_unit.setJSON(ret.responseJSON.GAUCE);
  ds_unit.reform();
  scwin.f_SetDefaultUnit();
};

/**
 * Default Unit 을 설정
 */
scwin.f_SetDefaultUnit = function () {
  if (ds_unit.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_unit.getRowCount(); i++) {
    if (ds_unit.getCellData(i, "fltrCd1") == scwin.DGlobalValue.TRUE) {
      index = i - 1;
      break;
    }
  }
  lc_unit.setValue("1");
};

/**
 * 그리드 컬럼의 금액단위를 설정한다.
 */
scwin.f_SetGridUnit = function () {
  // let colid;
  // gr_master.Redraw = "false";
  // let mgntAcctCd;
  // for (i = 1; i <= ds_master.getTotalCol(); i++) {
  //     //ColumnType(2) : Integer, ColumnType(3) : Decimal
  //     if (ds_master.getColumnInfo(i) == 2 || ds_master.getColumnInfo(i) == 3) {
  //         colid = ds_master.getColumnID(i);
  //         gr_master.setColumnDefaultValue(colid, "Value") = "{decode(mgntAcctCd,'9800001'," + colid + "/" + lc_unit.getValue()
  //             + ",'9800002'," + colid + "/" + lc_unit.getValue()
  //             + ",'9800004'," + colid + "/" + lc_unit.getValue()
  //             + ",Round(" + colid + "/" + lc_unit.getValue() + "))}"
  //             ;
  //         gr_master.setColumnDefaultValue(colid, "DecAO") = "{decode(mgntAcctCd,9800001,1,9800002,1,9800004,1,0)}";

  //     }
  // }
  // gr_master.Redraw = "true";
  let rowCnt = ds_master.getRowCount();
  let columInfo = $c.gus.f_GetColumnNames($p, ds_master);
  for (let j = 0; j < columInfo.length; j++) {
    for (let i = 0; i < rowCnt; i++) {
      if (columInfo[j] != "mgntAcctCd" //구분코드
      && columInfo[j] != "mgntAcctCdNm" //구분명
      && columInfo[j] != "thisMm" //당월
      && columInfo[j] != "thisMm2" //증감
      && columInfo[j] != "cum" //누계
      && columInfo[j] != "cum2" //증감
      && columInfo[j] != "requestAmt" //년목표대비달성도
      ) {
        let mgntCd = ds_master.getCellData(i, "mgntAcctCd");
        let originalVal = ds_master.getOriginalCellData(i, columInfo[j]);
        let calcVal = originalVal / lc_unit.getValue();
        // 관리회계코드별 분기 처리
        if (mgntCd === "9800001" || mgntCd === "9800002" || mgntCd === "9800004") {
          //그대로 사용 (소수점 1자리까지 표시 가능)
          ds_master.setCellData(i, columInfo[j], calcVal);
        } else {
          //반올림해서 정수 처리
          ds_master.setCellData(i, columInfo[j], $c.num.round($p, calcVal));
        }
      }
    }
  }
};

/**
 * 그리드 컬럼의 금액단위를 설정한다.
 * 엑셀 btn_allExcel버튼 사용
 */
scwin.f_SetGridUnit2 = function (dataList) {
  let rowCnt = dataList.getRowCount();
  let columInfo = $c.gus.f_GetColumnNames($p, dataList);
  for (let j = 0; j < columInfo.length; j++) {
    for (let i = 0; i < rowCnt; i++) {
      if (columInfo[j] != "mgntAcctCd" //구분코드
      && columInfo[j] != "mgntAcctCdNm" //구분명
      && columInfo[j] != "requestAmt" //년목표대비달성도
      ) {
        let mgntCd = dataList.getCellData(i, "mgntAcctCd");
        let originalVal = dataList.getOriginalCellData(i, columInfo[j]);
        let calcVal = originalVal / lc_unit.getValue();
        // 관리회계코드별 분기 처리
        if (mgntCd === "9800001" || mgntCd === "9800002" || mgntCd === "9800004") {
          //그대로 사용 (소수점 1자리까지 표시 가능)
          dataList.setCellData(i, columInfo[j], calcVal);
        } else {
          //반올림해서 정수 처리
          dataList.setCellData(i, columInfo[j], $c.num.round($p, calcVal));
        }
      }
    }
  }
};

/**
 * DataList를 동적으로 생성한다.
 * 사용자 정의
 */
scwin.createDataList = function (dsId, colArr, colArrNm, typeArr, options) {
  try {
    const dltObj = $c.util.getComponent($p, dsId);
    if (!$c.util.isEmpty($p, dltObj)) {
      $p.data.remove(dsId);
    }
    let colInfoJSON = [];
    if (typeof colArr !== "undefined") {
      colInfoJSON = [];
      for (let i = 0; i < colArr.length; i++) {
        let dataType = "text";
        if (typeof typeArr !== "undefined") {
          dataType = typeArr[i];
        }
        const colInfo = {
          "id": colArr[i],
          "dataType": dataType,
          "name": colArrNm[i]
        };
        colInfoJSON.push(colInfo);
      }
    }
    if (typeof options === "undefined") {
      options = {};
      options.baseNode = "list";
      options.repeatNode = "map";
      options.saveRemovedData = "true";
    }
    ;
    const dataCollectionJSON = {
      id: dsId,
      type: "dataList",
      option: {
        "baseNode": options.baseNode || "list",
        "repeatNode": options.repeatNode || "map",
        "saveRemovedData": options.saveRemovedData || "true"
      },
      columnInfo: colInfoJSON
    };
    const codeDataObj = $p.data.create(dataCollectionJSON);
    return $c.util.getComponent($p, dsId);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * Dataset DEBUG
 * TOBE 사용안함
 */
scwin.dataSetDebug = function (dataSet, isDebug) {
  // if (isDebug == true) {
  //     let obj = dataSet;
  //     let str = "[[[[" + obj.id + "]]]]]\n";
  //     for (let dsRow=0; dsRow<obj.getRowCount(); dsRow++) {
  //         for (let dsCol=0; dsCol<obj.getTotalCol(); dsCol++) {
  //             str += "[" + obj.ColumnId(dsCol) + "] " + obj.NameValue(dsRow, obj.ColumnId(dsCol)) + ", "
  //         }
  //         str += "\n\n";
  //     }
  //     $c.win.alert(str);
  // }
};

/**
 * 하위부서 콤보박스 변경 시
 */
scwin.lc_acctDeptCd_onviewchange = function (info) {
  if (ds_dept.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  scwin.f_Retrieve();
};

/**
 * 결산년월 포커스 잃었을 시
 */
scwin.ica_srchStdYm_onblur = function (e) {
  scwin.f_SetGridFormat();
};

/**
 * 금액단위 변경
 */
scwin.lc_unit_onviewchange = function (info) {
  scwin.f_SetGridUnit();
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
* 부서코드(조회) 팝업 호출
*/
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  if (ed_acctDeptCd.hidVal != ed_acctDeptCd.getValue()) {
    ed_acctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_deptPopUp(close);
};
scwin.udc_acctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_acctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    scwin.f_deptPopUp("T");
  }
};
/**
 * 사업영억코드(조회) 팝업 호출
 */
scwin.udc_bizDomCd_onclickEvent = function (e) {
  if (ed_bizDomCd.hidVal != ed_bizDomCd.getValue()) {
    ed_bizDomNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_bizDomCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_BizDomPopUp(close);
};
scwin.udc_smgntAcctCd_onviewchangeCodeEvent = function (info) {
  ed_bizDomNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_bizDomCd.getValue())) {
    scwin.f_BizDomPopUp("T");
  }
};
scwin.createGrid = async function (dataListObjId) {
  var idx = await gen_gridView1.insertChildAsync();
  var grdObj = $p.getComponentById(gen_gridView1.getChildren()[idx].id);
  var grdObjId = grdObj.getOriginalID();
  let sGridViewStyle = gr_master.getGridStyle();
  let oGridViewStyle = JSON.parse(sGridViewStyle);
  oGridViewStyle.A.id = grdObjId;
  oGridViewStyle.A.dataList = 'data:' + dataListObjId;
  grdObj.setGridStyle(oGridViewStyle);
  let gdObj = $p.getComponentById(grdObjId);
  let dsObj = $p.getComponentById(dataListObjId);
  let rowCnt = dsObj.getRowCount();
  gdObj.setHeaderValue("thisMm_h1", ica_closeYm.getValue().substring(4, 6) + " 당월");
  gdObj.setHeaderValue("cum_h1", ica_closeYm.getValue().substring(4, 6) + " 누계");
  for (let i = 0; i < rowCnt; i++) {
    let mgntAcctCd = dsObj.getCellData(i, "mgntAcctCd");
    if (mgntAcctCd == "9300001" || mgntAcctCd == "9300002" || mgntAcctCd == "9300003" || mgntAcctCd == "9300006") {
      gdObj.setRowBackgroundColor(i, "#eeee22");
    }
    //년목표대비달성도 처리[requestAmt]
    if (mgntAcctCd == "4100000" || mgntAcctCd == "4900000" || mgntAcctCd == "6700000") {
      let sumRsltsAmt = dsObj.getCellData(i, "sumRsltsAmt");
      let yearPlanAmt = dsObj.getCellData(i, "yearPlanAmt");
      let requestAmt = Number(yearPlanAmt) === 0 ? 0 : (Number(sumRsltsAmt) / Number(yearPlanAmt) * 100).toFixed(1);
      dsObj.setCellData(i, "requestAmt", requestAmt);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM','ev:onblur':'scwin.ica_srchStdYm_onblur',id:'ica_closeYm',mandatory:'true',objType:'data',ref:'data:dma_search.closeYm',style:'',title:'결산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장부구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bookClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.bookClsCd',objType:'data',title:'장부구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요약'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'804'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'805'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctDeptCd',code:'',codeId:'ed_acctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCd_onviewchangeCodeEvent',id:'udc_acctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'',nameId:'ed_acctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_acctDeptCd',refDataCollection:'',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'부서',validTitle:'부서',mandatoryName:'true',validExpName:'부서',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bizDomCd',code:'bizDomCd',codeId:'ed_bizDomCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_bizDomCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_smgntAcctCd_onviewchangeCodeEvent',id:'udc_bizDomCd',mandatoryCode:'',maxlengthCode:'3',maxlengthName:'30',name:'bizDomNm',nameId:'ed_bizDomNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_bizDomCd',refDataCollection:'dma_search',selectID:'retrieveBizDomCdInfo',style:'',validExpCode:'사업영역코드',validExpName:'사업영역',validTitle:'사업영역코드',codeWidth:'50'}},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_lowerDeptIncluYn',ref:'data:dma_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',title:'하위부서포함'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_distYn',ref:'data:dma_search.distYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',title:'배부포함'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_dpctYn',ref:'data:dma_search.dpctYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',title:'타법인포함'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타법인포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_GetRsltsDept',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'손익자료(당월) ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'하위부서포함',class:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_allExcel',type:'button',class:'btn excel-down','ev:onclick':'scwin.f_Retrieve2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_acctDeptCd',class:' w150',direction:'auto',title:'하위부서',objType:'data',ref:'',emptyItem:'true',emptyValue:'$blank','ev:onviewchange':'scwin.lc_acctDeptCd_onviewchange',displayMode:'label',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_dept'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위 :',style:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w80',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_unit',ref:'',style:'',submenuSize:'auto',displayMode:'label','ev:onviewchange':'scwin.lc_unit_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'천원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'백만원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'억'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100000000'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Export',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',btnUser:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',focusMode:'cell',autoFitMinWidth:'800',sortable:'false',sortHeaderDiv:'false',showSortableImage:'false',showSortableUseFilter:'false',sortOrderReverse:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'구분',width:'180',colSpan:'',rowSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'년간</br>계획',width:'140',colSpan:'',rowSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMm_h1',inputType:'text',style:'',value:'당월',width:'600',colSpan:'5',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cum_h1',inputType:'text',style:'',value:'누계',width:'600',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'년목표대비</br>달 &nbsp; 성 &nbsp; 도',displayMode:'label',colSpan:'',rowSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column28',value:'계획',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column27',value:'실적',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column26',value:'전기',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column25',value:'증감',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column23',value:'계획',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column22',value:'실적',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column21',value:'전기',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column50',value:'증감',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'계획',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'전기',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column51',value:'계획',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column43',value:'전기',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCdNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left',escape:'true',dataType:'text',class:'ws-pre'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yearPlanAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisPlanAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisRsltsAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfyyThisAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisDiffer',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befDiffer',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumPlanAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumRsltsAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumBfyyThisAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'sumDiffer',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'sumBefDiffer',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'requestAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'text',excelFormat:'#,##0.#'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'grp_generator',style:'display: none;'},E:[{T:1,N:'w2:generator',A:{id:'gen_gridView1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'',dynamic:'true',id:'grd_gridView1',readOnly:'true',style:'display: ;',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}}]}]}]}]}]}]}]}]})