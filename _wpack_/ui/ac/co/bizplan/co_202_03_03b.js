/*amd /ui/ac/co/bizplan/co_202_03_03b.xml 62251 60a6c42337598685a963f08a37f120ec6eb4a34ac8f7194601b2cc7ecf5e5b68 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'col5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'col6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'col7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'col8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'col9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'col10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchExpnBudget'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'회계부서코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planDcsn',name:'계획확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctClsNm',name:'계정구분코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsNm',name:'비용구분코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_expnBudget',repeatNode:'map',saveRemovedData:'true',style:'','ev:oncelldatachange':'scwin.ds_expnBudget_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'checkbox',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'planYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'month',name:'기준월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ver',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드',length:'5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서명',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctCd',name:'관리계정코드',length:'7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctNm',name:'관리계정명',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'planComputeStd',name:'계획산정기준',length:'100'}},{T:1,N:'w2:column',A:{dataType:'number',id:'amt',name:'합계',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'jan',name:'1월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'feb',name:'2월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'mar',name:'3월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'apr',name:'4월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'may',name:'5월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'jun',name:'6월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'jul',name:'7월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'aug',name:'8월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'sep',name:'9월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'oct',name:'10월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'nov',name:'11월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'dec',name:'12월',defaultValue:'0',length:'13'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_upexpnBudget',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'planYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'month',name:'기준월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ver',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드',length:'5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서명',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctCd',name:'관리계정코드',length:'7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctNm',name:'관리계정명',length:'50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'planComputeStd',name:'계획산정기준',length:'100'}},{T:1,N:'w2:column',A:{dataType:'number',id:'jan',name:'1월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'feb',name:'2월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'mar',name:'3월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'apr',name:'4월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'may',name:'5월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'jun',name:'6월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'jul',name:'7월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'aug',name:'8월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'sep',name:'9월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'oct',name:'10월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'nov',name:'11월',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{dataType:'number',id:'dec',name:'12월',defaultValue:'0',length:'13'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_version',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_version","key":"IN_DS1"},{"id":"ds_version","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchExpnBudget',action:'/ac.co.bizplan.RetrieveDepartmentEachGeneralExpenseBudgetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchExpnBudget","key":"IN_DS1"},{"id":"ds_expnBudget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_expnBudget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchExpnBudget_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_batchExpnBudget',action:'/ac.co.bizplan.CreateBudgetAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_searchExpnBudget","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_batchExpnBudget_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveExpnBudget',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_expnBudget","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveExpnBudget_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업계획예산등록(부서별) (co_202_03_03b)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-20
//-------------------------------------------------------------------------

scwin.isSubCompany = false;
scwin.checkPlanSave = false;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO018",
    compID: ""
  },
  // 권한코드
  {
    grpCd: "CO027",
    compID: "gr_expnBudget:month"
  } // 기준월
  ];
  $c.data.setCommonCode($p, codeOptions);
  lc_planDcsn.setValue("1");
};

/**
 * data onload
 */
scwin.ondataload = function () {
  // 권한별 버튼
  const cdDescArr = dlt_commonCodeCO018.getColData("cdDesc");
  const userId = $c.data.getMemInfo($p, "userId");
  if (!cdDescArr.includes(userId)) {
    btn_confirm.hide();
  }
};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {
  const {
    coCd,
    acctDeptCd,
    acctDeptNm
  } = $c.data.getMemInfo($p);

  // 예산년도
  ed_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));

  // version setting
  scwin.f_LoadVer();

  // 회사코드 setting
  scwin.f_setCompanyInfo();

  // 부서
  ds_searchExpnBudget.set("acctDeptCd", acctDeptCd);
  ds_searchExpnBudget.set("acctDeptNm", acctDeptNm);

  // 비용구분(hidden)
  // 비용구분 : 01 원가, 02 판관비, 03 원가+판관비
  ds_searchExpnBudget.set("costClsCd", "02");

  // focus
  ed_FromDate.focus();
};

/**
 * 예산년도 변경
 */
scwin.ed_FromDate_onviewchange = function (info) {
  scwin.f_LoadVer();
};

/**
 * 버전 selectbox
 * - 화면로딩 시
 * - 예산년도 변경 시
 */
scwin.f_LoadVer = async function () {
  dma_version.set("sysCd", "CommonEBC");
  dma_version.set("queryId", "retrieveVersionInfo");
  dma_version.set("param1", `${ed_FromDate.getValue().trim()}00`);
  let rs = await $c.sbm.execute($p, sbm_version);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    // 최종 버전 설정
    const matchIdx = ds_version.getMatchedIndex("col3", String(DGlobalValue.TRUE), true)[0];
    if (matchIdx) {
      lc_version.setSelectedIndex(matchIdx);
    }
  }
  ;
};

/**
 * 자회사 회계 시스템 추가에 따른 설정
 */
scwin.f_setCompanyInfo = function () {
  const {
    userHomeClsCd,
    coCd,
    coClsCd,
    privAdmin
  } = $c.data.getMemInfo($p);
  let vLoginCoCd = $c.util.isEmpty($p, coCd) ? "" : coCd; // 소속 자회사
  let vLoginCoClsCd = $c.util.isEmpty($p, coClsCd) ? "" : coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (userHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    vLoginCoCd = ACConstants.CO_CD_DONGBU;
    vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ds_searchExpnBudget.set("coCd", vLoginCoCd);

  // 회사코드 udc 호출
  scwin.f_PopUpCompanyInfo();

  // 자회사 회계 시스템
  if (vLoginCoCd > ACConstants.CO_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }

  // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 - 회사코드 변경 여부
  if ('T' == privAdmin || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

/**
 * 조회조건 초기화
 */
scwin.btn_refresh_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_FromDate, ed_acctDeptCd, ed_acctDeptNm, lc_version]);
};

/**
 * 조회
 */
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ed_FromDate, ed_acctDeptCd, lc_version]))) {
    return;
  }
  $c.sbm.execute($p, sbm_searchExpnBudget);
};

/**
 * 조회 callback
 */
scwin.sbm_searchExpnBudget_submitdone = function (e) {
  // 계획인 경우에만 저장할 수 있음
  if (ds_searchExpnBudget.get("planDcsn") == "1") {
    // 계획
    scwin.checkPlanSave = true;
  } else {
    // 확정
    scwin.checkPlanSave = false;
  }
  const rowCnt = ds_expnBudget.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(rowCnt);

  // 변경 확인용
  ds_searchExpnBudget.reform();
};

/**
 * dataList - cell data change
 */
scwin.ds_expnBudget_oncelldatachange = function (info) {
  const {
    realRowIndex,
    rowIndex,
    colID,
    oldValue,
    newValue
  } = info;
  const monthKeys = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  if ($c.util.isEmpty($p, newValue) && monthKeys.includes(colID)) {
    ds_expnBudget.setCellData(rowIndex, colID, 0);
  }
};

/**
 * udc 팝업 호출
 */
scwin.f_PopUp = function (paramArray) {
  const {
    udcObj,
    callback,
    pSelectID,
    pCode,
    pName,
    pOneResultShowYn,
    pWhere,
    pSearchAll,
    type
  } = paramArray;
  udcObj.setSelectId(pSelectID);
  udcObj.cfCommonPopUp(callback, type == "grid" ? pCode : type == "name" ? "" : $c.gus.cfGetValue($p, pCode), type == "name" ? $c.gus.cfGetValue($p, pName) : "", pOneResultShowYn // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pSearchAll // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  , null);
};

/**
 * 회사코드 udc
 */
scwin.udc_coCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_coNm.setValue("");
    return;
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_PopUpCompanyInfo();
  }
};

/**
 * 회사코드 udc
 */
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("click");
};
scwin.f_PopUpCompanyInfo = function (type) {
  let param = "";
  const paramArray = {
    udcObj: udc_coCd,
    callback: scwin.udc_coCd_callBackFunc,
    pSelectID: "retrieveDongbuGroupCompanyInfo",
    pCode: ed_coCd,
    pName: ed_coNm,
    pOneResultShowYn: type == "click" ? "F" : "T",
    pWhere: param,
    pSearchAll: "T"
  };
  scwin.f_PopUp(paramArray);
};
scwin.udc_coCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
  }

  // 자회사 회계 시스템
  if (ed_coCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

/**
 * 부서 udc - search
 */
scwin.udc_acctDeptCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_acctDeptNm.setValue("");
    return;
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_PopUpAcctDept();
  }
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_PopUpAcctDept("click");
};
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_acctDeptCd.setValue("");
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_PopUpAcctDept("name");
  }
};
scwin.f_PopUpAcctDept = function (type) {
  const param = `${ed_FromDate.getValue()}0101,,,${ed_coCd.getValue()}`;
  const hidCol = ",,,,,,1";
  const paramArray = {
    udcObj: udc_acctDeptCd,
    callback: scwin.udc_acctDeptCd_callBackFunc,
    pSelectID: "retrieveAcctDeptCdInfo8",
    pCode: ed_acctDeptCd,
    pName: ed_acctDeptNm,
    pOneResultShowYn: "T",
    pHideCol: hidCol,
    pWhere: param,
    pSearchAll: "F",
    type: type
  };
  scwin.f_PopUp(paramArray);
};
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_acctDeptCd.setValue(ret[0]);
    ed_acctDeptNm.setValue(ret[1]);
    ds_searchExpnBudget.set("costClsCd", `${ret[9]}`); // 비용구분코드
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ds_searchExpnBudget.set("costClsCd", "");
  }
};

/**
 * 계정 udc
 */
scwin.udc_mgntAcctCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_mgntAcctNm.setValue("");
    return;
  }
  if (oldValue != newValue) {
    scwin.f_PopUpMgntAcct();
  }
};
scwin.udc_mgntAcctCd_onclickEvent = function (e) {
  scwin.f_PopUpMgntAcct("click");
};
scwin.udc_mgntAcctCd_onviewchangeNameEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_mgntAcctCd.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_PopUpMgntAcct("name");
  }
};

/**
 * 계정 udc
 */
scwin.f_PopUpMgntAcct = function (type) {
  const costClsCd = ds_searchExpnBudget.get("costClsCd");
  const param = `T,,,,,${costClsCd == "" ? "04" : costClsCd}`;
  const paramArray = {
    udcObj: udc_mgntAcctCd,
    callback: scwin.udc_mgntAcctCd_callBackFunc,
    pSelectID: "retrieveAcctCdInfo",
    pCode: ed_mgntAcctCd,
    pName: ed_mgntAcctNm,
    pOneResultShowYn: "T",
    pWhere: param,
    pSearchAll: type == "click" ? "T" : "F",
    type: type
  };
  scwin.f_PopUp(paramArray);
};
scwin.udc_mgntAcctCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_mgntAcctCd.setValue(ret[0]);
    ed_mgntAcctNm.setValue(ret[1]);
    ds_searchExpnBudget.set("acctClsCd", ret[2]); // 계정구분
  } else {
    ed_mgntAcctCd.setValue("");
    ed_mgntAcctNm.setValue("");
    ds_searchExpnBudget.set("acctClsCd", ""); // 계정구분
  }
};

/**
 * 계정 udc - gridView
 */
scwin.f_PopUpMgntAcctGridView = function (value) {
  const costClsCd = ds_searchExpnBudget.get("costClsCd");
  const param = `T,,,,,${costClsCd == "" ? "04" : costClsCd}`;
  const paramArray = {
    udcObj: udc_mgntAcctCd_grid,
    callback: scwin.udc_mgntAcctCd_grid_callBackFunc,
    pSelectID: "retrieveAcctCdInfo",
    pCode: value,
    pName: "",
    pOneResultShowYn: "T",
    pWhere: param,
    pSearchAll: "F",
    type: "grid"
  };
  scwin.f_PopUp(paramArray);
};
scwin.udc_mgntAcctCd_grid_callBackFunc = function (ret) {
  const rowIdx = ds_expnBudget.getRowPosition();
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_expnBudget.setCellData(rowIdx, "mgntAcctCd", ret[0]); // 계정코드
    ds_expnBudget.setCellData(rowIdx, "mgntAcctNm", ret[1]); // 계정명         
  } else {
    ds_expnBudget.setCellData(rowIdx, "mgntAcctCd", ""); // 계정코드
    ds_expnBudget.setCellData(rowIdx, "mgntAcctNm", ""); // 계정명                 
  }
};

/**
 * gridView - cell click
 */
scwin.gr_expnBudget_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "mgntAcctCd" && ds_expnBudget.getRowStatus(rowIndex) == "C") {
    gr_expnBudget.setCellReadOnly(rowIndex, columnId, false);
  }
};

/**
 * gridView - textImage click
 */
scwin.gr_expnBudget_ontextimageclick = function (rowIndex, columnIndex) {
  const colId = gr_expnBudget.getColumnID(columnIndex);
  const value = ds_expnBudget.getCellData(rowIndex, colId);
  if (colId == "acctDeptCd") {
    // 귀속부서코드 - hidden
    // scwin.f_openAcctDeptCdPopUpGrid(rowIndex, value, "T");
  } else if (colId == "mgntAcctCd") {
    // 관리계정코드
    scwin.f_PopUpMgntAcctGridView(value);
  }
};

/**
 * gridView - onviewchange
 */
scwin.gr_expnBudget_onviewchange = function (info) {
  const {
    oldValue,
    newValue,
    rowIndex,
    colIndex,
    colId
  } = info;
  if (colId == "mgntAcctCd") {
    if ($c.util.isEmpty($p, newValue)) {
      ds_expnBudget.setCellData(rowIndex, "mgntAcctNm", "");
      return;
    }
    scwin.f_PopUpMgntAcctGridView(newValue);
  }
};

/**
 * gridView - column move
 */
scwin.gr_expnBudget_onbeforecolumnmove = function (info) {
  const {
    startColumnID,
    startColumnIndex,
    endColumnID,
    endColumnIndex
  } = info;
  const noMoveArr = ["num", "month", "mgntAcctCd"];
  if (noMoveArr.includes(startColumnID)) {
    return false;
  }
  if (endColumnIndex < 6) {
    return false;
  }
};

/**
 * [일괄적용]
 */
scwin.f_Apply = function () {
  const chkArr = gr_expnBudget.getCheckedIndex("num");
  if (chkArr.length == 0) {
    $c.win.alert($p, "일괄적용을 하고자 하는 Row를 체크 하시기 바랍니다.");
    return;
  }
  const cols = ["", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  for (let i = 0; i < chkArr.length; i++) {
    const month = ds_expnBudget.getCellData(chkArr[i], "month");
    const targetVal = ds_expnBudget.getCellData(chkArr[i], cols[month]);
    for (let j = month; j < cols.length; j++) {
      ds_expnBudget.setCellData(chkArr[i], cols[j], targetVal);
    }
  }
};

/**
 * 선행작업 마감여부 확인
 * - [생성]
 */
scwin.f_JobCloseYN2 = async function () {
  // cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  const isClose = await udc_jobCloseYN.cfJobCloseYN("CUR", `${ed_FromDate.getValue().trim()}00`, "00", ACConstants.CLOSE_PLAN_CREATION, "0", "ARR", "", ed_coCd.text);
  if (isClose[3] == "CUR") {
    if (isClose[0] != "0" && isClose[0] != "1") {
      $c.gus.cfAlertMsg($p, isClose[2] + "이 마감되어 사업계획예산등록을 실행 할 수 없습니다.");
      return false;
    }
    return true;
  }
  return false;
};

/**
 * [생성]
 */
scwin.f_Create = async function () {
  // 선행작업 마감여부 확인
  if (!(await scwin.f_JobCloseYN2())) {
    return;
  }

  // 필수입력사항 확인 : 예산년도,버전,부서
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, lc_version, ed_acctDeptCd]))) {
    return;
  }
  if ($c.util.isEmpty($p, ds_searchExpnBudget.get("ver"))) {
    $c.gus.cfAlertMsg($p, "해당 년월의 버전정보가 없습니다. 관리실적버전에서 버전을 등록하시기 바랍니다.");
    return;
  }
  const msg = `${ed_FromDate.getValue()}년 ${lc_version.getValue()}버전으로 사업계획예산생성을 실행 하시겠습니까?`;
  if (await $c.win.confirm($p, msg)) {
    $c.sbm.execute($p, sbm_batchExpnBudget);
  }
};

/**
 * [생성] callback
 */
scwin.sbm_batchExpnBudget_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
};

/**
 * 예산배정 마감체크
 * - [저장]
 * - [확정]
 */
scwin.f_JobCloseYN = async function () {
  const isClose = await udc_jobCloseYN.cfJobCloseYN("CUR", `${ed_FromDate.getValue().trim()}00`, "00", ACConstants.CLOSE_PLAN_CREATION, "0", "ARR", "", ed_coCd.getValue());

  // 선행마감 작업에 대한 검사
  if (isClose[3] == "PRE") {
    if (isClose[0] == "1") {
      $c.gus.cfAlertMsg($p, `선행작업 ${isClose[2]}이 미마감되어서 현재 작업을 진행할 수 없습니다.`);
      return false;
    } else if (isClose[0] == "0") {
      $c.gus.cfAlertMsg($p, `선행작업 ${isClose[2]}이 마감작업중이어서 현재 작업을 진행할 수 없습니다.`);
      return false;
    }
    return true;
  }

  // 해당마감 작업에 대한 검사
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      $c.gus.cfAlertMsg($p, isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (isClose[0] == "2") {
      $c.gus.cfAlertMsg($p, isClose[2] + "(이)가 마감완료가 되었습니다.");
      return false;
    } else {
      return true;
    }
  }
};

/**
 * [저장]
 */
scwin.f_Save = async function (e) {
  // 마감여부 확인
  if (!(await scwin.f_JobCloseYN())) {
    return;
  }
  if (scwin.checkPlanSave == false) {
    $c.gus.cfAlertMsg($p, "확정으로 조회한 데이타는 계획으로 저장 하실 수 없습니다.");
    return;
  }

  // 변경 확인용
  const keyArr = ["planYm", "ver", "acctDeptCd"];
  const modiArr = ds_searchExpnBudget.getModifiedKey();
  if (keyArr.some(v => modiArr.includes(v))) {
    // 계정코드가 아니라 부서..
    $c.gus.cfAlertMsg($p, "조회 조건인 적용년도, 버전, 계정코드가 변경되어서 저장 하실 수 없습니다. 재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }

  // 필수입력사항 확인
  let vaildArray = [{
    id: "mgntAcctCd",
    name: "관리계정코드",
    mandatory: true,
    key: true
  }];
  let validate = await $c.gus.cfValidateGrid($p, gr_expnBudget, null, null, vaildArray, gr_expnBudget.options.dataName);
  if (!validate) {
    return false;
  }
  if (ds_expnBudget.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  if ($c.util.isEmpty($p, ds_searchExpnBudget.get("ver"))) {
    $c.gus.cfAlertMsg($p, "해당 년월의 버전정보가 없습니다. 관리실적버전에서 버전을 등록하시기 바랍니다.");
    return;
  }
  const msg = `${ed_FromDate.getValue()}년 ${lc_version.getValue()}버전으로 저장하시겠습니까?`;
  if (await $c.win.confirm($p, msg)) {
    $c.sbm.setAction($p, sbm_saveExpnBudget, "/ac.co.bizplan.SaveDepartmentEachGeneralExpenseBudgetCMD.do");
    $c.sbm.execute($p, sbm_saveExpnBudget);
  }
};

/**
 * [확정]
 */
scwin.f_Confirm = async function (e) {
  // 마감여부 확인
  if (!(await scwin.f_JobCloseYN())) {
    return;
  }
  const keyArr = ["planYm", "ver", "acctDeptCd"];
  const modiArr = ds_searchExpnBudget.getModifiedKey();
  if (keyArr.some(v => modiArr.includes(v))) {
    // 계정코드가 아니라 부서..
    $c.gus.cfAlertMsg($p, "조회 조건인 적용년도, 버전, 계정코드가 변경되어서 저장 하실 수 없습니다. 재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }

  // 필수입력사항 확인
  let vaildArray = [{
    id: "mgntAcctCd",
    name: "관리계정코드",
    mandatory: true,
    key: true
  }];
  let validate = await $c.gus.cfValidateGrid($p, gr_expnBudget, null, null, vaildArray, gr_expnBudget.options.dataName);
  if (!validate) {
    return false;
  }
  if ($c.util.isEmpty($p, ds_searchExpnBudget.get("ver"))) {
    $c.gus.cfAlertMsg($p, "해당 년월의 버전정보가 없습니다. 관리실적버전에서 버전을 등록하시기 바랍니다.");
    return;
  }
  const msg = `${ed_FromDate.getValue()}년 ${lc_version.getValue()} 버전으로 확정하시겠습니까?`;
  if (await $c.win.confirm($p, msg)) {
    // 가우스내부 상태(0 기존 / 1 신규 / 3 삭제)
    ds_expnBudget.modifyAllStatus("C");
    $c.sbm.setAction($p, sbm_saveExpnBudget, "/ac.co.bizplan.ConfirmGeneralExpenseBudgetCMD.do");
    $c.sbm.execute($p, sbm_saveExpnBudget);
  }
};

/**
 * [저장] / [확정] callback
 */
scwin.sbm_saveExpnBudget_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001).then(() => {
      scwin.f_Retrieve();
    });
  }
};

/**
 * [행추가]
 */
scwin.f_AddRow = async function () {
  // 예산년도, 부서
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_acctDeptCd]))) {
    return;
  }
  const iRow = ds_expnBudget.insertRow();
  gr_expnBudget.setCellReadOnly(iRow, "mgntAcctCd", false);

  // 초기값 : 예산년도, 버전, 회사코드, 귀속부서, 기준월
  const jsonData = ds_searchExpnBudget.getJSON();
  const initData = {
    planYm: jsonData.planYm,
    ver: jsonData.ver,
    coCd: jsonData.coCd,
    acctDeptCd: jsonData.acctDeptCd,
    acctDeptNm: jsonData.acctDeptNm,
    month: "1"
  };
  ds_expnBudget.setRowJSON(iRow, initData, true);
};

/**
 * 엑셀 파일 다운로드
 */
scwin.gridToExcel = function () {
  $c.win.confirm($p, "Excel로 다운로드 받으시겠습니까?").then(rtn => {
    if (rtn) {
      // 일반경비예산등록(부서별)_재경_2026_ver_002
      const exportFileName = `일반경비예산등록(부서별)_${ed_acctDeptNm.getValue()}_${ed_FromDate.getValue()}_ver_${lc_version.getValue()}`;
      gr_expnBudget.setColumnVisible("num", false);
      gr_expnBudget.setColumnVisible("month", false);
      const options = {
        fileName: `${exportFileName}.xlsx`,
        sheetName: "일반경비예산등록(부서별)",
        bodyWordwrap: true,
        evenRowBackgroundColor: "#f5fff5",
        useFooter: "false",
        useDataFormat: "true",
        type: "0"
      };
      $c.data.downloadGridViewExcel($p, gr_expnBudget, options);
      gr_expnBudget.setColumnVisible("num", true);
      gr_expnBudget.setColumnVisible("month", true);
    }
  });
};

/**
 * 엑셀 Upload
 */
scwin.f_Upload = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return;
  }
  const msg = `${ed_FromDate.getValue()}년 ${lc_version.getValue()}버전으로 엑셀파일 Import를 하시겠습니까?`;
  ret = await $c.win.confirm($p, msg);
  if (ret) {
    ds_expnBudget.removeAll();
    ds_expnBudget.reform();
    ds_upexpnBudget.removeAll();
    if (udc_topGrd.getUpExt() == "1") {
      let options = {
        "fileName": "gridDataUpload.xlsx",
        "status": "C",
        "type": "1",
        "startRowIndex": 1
      };
      const monthKeys = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      for (let m = 0; m < monthKeys.length; m++) {
        gr_upexpnBudget.setDataType(monthKeys[m], "text");
      }
      await $c.data.uploadGridViewCSV($p, gr_upexpnBudget, options);
    } else {
      let options = {
        "fileName": "gridDataUpload.xlsx",
        "status": "C",
        "headerExist": 1,
        // "useMaxByteLength": ",",
        "type": "0",
        "startRowIndex": 0,
        "footerExist": "0"
      };
      const monthKeys = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      for (let m = 0; m < monthKeys.length; m++) {
        gr_upexpnBudget.setDataType(monthKeys[m], "number");
      }
      await $c.data.uploadGridViewExcel($p, gr_upexpnBudget, options);
    }
  }
};

/**
 * 엑셀업로드 후처리 gr_upexpnBudget onfilereadend
 */
scwin.f_Import = async function (value) {
  for (let i = 0; i < ds_upexpnBudget.getTotalRow(); i++) {
    scwin.expnBudgetRow = ds_expnBudget.insertRow(i);

    // 관리계정 코드가 정상적으로 입력되어 있는지 확인
    let {
      mgntAcctCd,
      ...rest
    } = ds_upexpnBudget.getRowJSON(i);
    if ($c.util.isEmpty($p, mgntAcctCd)) {
      $c.gus.cfAlertMsg($p, `${i + 1}번째 행의 관리계정 코드값이 없습니다. 확인하시기 바랍니다.`);
      return;
    }
    mgntAcctCd = $c.gus.cfGetLeftPad($p, mgntAcctCd, 7);

    // 관리계정 코드가 숫자가 아닐경우 오류표시
    if (!$c.num.isNumber($p, mgntAcctCd.slice(0, 5))) {
      $c.gus.cfAlertMsg($p, `${i + 1}번째 행의 관리계정코드가 잘못 입력 되었습니다.`);
      return;
    }

    // 귀속부서코드 존재유무 확인 없을경우 귀속부서코드와 코드명을 공백처리함.
    udc_mgntAcctCd_excel.setSelectId("retrieveMgntAcctCdInfo3");
    await udc_mgntAcctCd_excel.cfCommonPopUpAsync(scwin.udc_mgntAcctCd_excel_callBackFunc, mgntAcctCd, "", "T", null, null, null, null, ",5,,,", "", "", null, null, null, "F", null, "T");
    ds_upexpnBudget.setCellData(i, "ver", lc_version.getValue());
    ds_upexpnBudget.setCellData(i, "planYm", ed_FromDate.getValue());
    ds_upexpnBudget.setCellData(i, "month", "1");
    ds_upexpnBudget.setCellData(i, "acctDeptCd", ed_acctDeptCd.getValue());
    ds_upexpnBudget.setCellData(i, "acctDeptNm", ed_acctDeptNm.getValue());
    ds_upexpnBudget.setCellData(i, "coCd", ed_coCd.getValue());
    const monthKeys = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    // 쉼표|공백 제거 및 빈값 0으로 치환
    for (let m = 0; m < monthKeys.length; m++) {
      const value = Number(rest[monthKeys[m]].replace(/[\s,]/g, ''));
      ds_upexpnBudget.setCellData(i, monthKeys[m], $c.util.isEmpty($p, value) ? 0 : value);
    }

    // row 데이터 반영
    ds_expnBudget.setRowJSON(i, ds_upexpnBudget.getRowJSON(i), true);

    // 인원수에 대한 자릿수를 체크
    for (let i = 0; i < monthKeys.length; i++) {
      const value = rest[monthKeys[i]];
      if (value > 9999999999) {
        $c.gus.cfAlertMsg($p, `${i + 1}월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.`);
        return;
      }
    }
  }

  // 엑셀파일 Import가 정상종료시 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  ds_searchExpnBudget.reform();
  ds_upexpnBudget.removeAll();
  totalRows.setValue(ds_expnBudget.getTotalRow());
};

/**
 * 엑셀업로드 관리계정코드 udc callback
 */
scwin.udc_mgntAcctCd_excel_callBackFunc = function (rtnList) {
  if (rtnList == "N/A" || rtnList[9] != 1) {
    ds_upexpnBudget.setCellData(scwin.expnBudgetRow, "mgntAcctCd", "");
    ds_upexpnBudget.setCellData(scwin.expnBudgetRow, "mgntAcctNm", "");
  } else {
    ds_upexpnBudget.setCellData(scwin.expnBudgetRow, "mgntAcctCd", rtnList[0]);
    ds_upexpnBudget.setCellData(scwin.expnBudgetRow, "mgntAcctNm", rtnList[1]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 15%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:45px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:45px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',nameId:'ed_coNm',objTypeName:'data',btnId:'btn_company',id:'udc_coCd',maxlengthCode:'3',popupGridHeadTitle:'회사코드,회사명',popupTitle:'회사검색,회사코드,회사',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'ds_searchExpnBudget',code:'coCd','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_coCd_onviewchangeCodeEvent',validTitle:'회사'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'예산년도 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ed_FromDate',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy',validateOnInput:'true',editType:'select',placeholder:' ',ref:'data:ds_searchExpnBudget.planYm','ev:onviewchange':'scwin.ed_FromDate_onviewchange',title:'예산년도',validExp:'예산년도:yes:date=YYYY'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'버젼 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_version',search:'start',style:'width: 130px',submenuSize:'auto',mandatory:'true',tabIndex:'-1',ref:'data:ds_searchExpnBudget.ver',allOption:'',chooseOption:'',title:'버전',validExp:'버전:yes:number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'w2:label',A:{ref:'col4'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'부서 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',id:'udc_acctDeptCd',codeId:'ed_acctDeptCd',validExpCode:'부서:yes:maxLength=5&number',objTypeCode:'data',editTypeCode:'select',maxlengthCode:'5',allowCharCode:'0-9 ',mandatoryCode:'true',nameId:'ed_acctDeptNm',mandatoryName:'true',objTypeName:'data',editTypeName:'select',maxlengthName:'20',popupGridHeadTitle:'부서코드,부서명',popupTitle:'부서검색,부서코드,부서명',selectID:'retrieveAcctDeptCdInfo8',refDataCollection:'ds_searchExpnBudget',code:'acctDeptCd',btnId:'btn_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',name:'acctDeptNm','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',validTitle:'부서'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9 ',class:'col8',codeId:'',editTypeCode:'select',editTypeName:'select','ev:onclickEvent':'scwin.udc_mgntAcctCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mgntAcctCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mgntAcctCd_onviewchangeNameEvent',id:'udc_mgntAcctCd_grid',maxlengthCode:'7',maxlengthName:'20',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'display: none;',validExpCode:'계정:no:maxLength=7&number'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9 ',class:'col8',codeId:'',editTypeCode:'select',editTypeName:'select',id:'udc_mgntAcctCd_excel',maxlengthCode:'7',maxlengthName:'20',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'display: none;',validExpCode:'계정:no:maxLength=7&number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계정 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',id:'udc_mgntAcctCd',codeId:'ed_mgntAcctCd',validExpCode:'계정:no:maxLength=7&number',objTypeCode:'data',maxlengthCode:'7',allowCharCode:'0-9 ',editTypeCode:'select',nameId:'ed_mgntAcctNm',objTypeName:'data',editTypeName:'select',maxlengthName:'20',btnId:'btn_mgntAcctCd',selectID:'',code:'mgntAcctCd',name:'mgntAcctNm',refDataCollection:'ds_searchExpnBudget','ev:onclickEvent':'scwin.udc_mgntAcctCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mgntAcctCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mgntAcctCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'구분 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_planDcsn',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_searchExpnBudget.planDcsn',disabled:'false',userAuth:'R'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'display: none;',id:'udc_jobCloseYN'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_refresh',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'부서별사업계획예산 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridID:'gr_expnBudget',id:'udc_topGrd',gridDownUserAuth:'X',gridUpYn:'Y',btnUser:'N',gridDownFn:'scwin.gridToExcel',gridUpFn:'scwin.f_Upload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',fixedColumn:'6',dataList:'data:ds_expnBudget',scrollByColumn:'false',style:'',id:'gr_expnBudget',visibleRowNum:'11',autoFit:'none',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',dataName:'일반경비예산등록(부서별)',validFeatures:'ignoreStatus=no','ev:ontextimageclick':'scwin.gr_expnBudget_ontextimageclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_expnBudget_onviewchange','ev:oncellclick':'scwin.gr_expnBudget_oncellclick','ev:onbeforecolumnmove':'scwin.gr_expnBudget_onbeforecolumnmove'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'column12',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column11',value:'기준월',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'버전',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'귀속부서코드',class:'col-type1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'귀속부서명',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'관리계정코드',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'관리계정명',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'계획산정기준',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column15',value:'합계',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column37',value:'1월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column35',value:'2월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column33',value:'3월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column31',value:'4월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column29',value:'5월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column23',value:'6월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column25',value:'7월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column27',value:'8월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column47',value:'9월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column45',value:'10월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column39',value:'11월',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column41',value:'12월',class:'col-type2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'num',blockSelect:'false',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'select',id:'month',blockSelect:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ver',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'textImage',id:'acctDeptCd',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'mgntAcctCd',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',style:'',id:'mgntAcctNm',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'planComputeStd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'110',inputType:'expression',style:'',id:'amt',value:'',displayMode:'label',displayFormat:'#,##0',readOnly:'true',expression:'Number(display(\'jan\'))+Number(display(\'feb\'))+Number(display(\'mar\'))+Number(display(\'apr\'))+Number(display(\'may\'))+Number(display(\'jun\'))+Number(display(\'jul\'))+Number(display(\'aug\'))+Number(display(\'sep\'))+Number(display(\'oct\'))+Number(display(\'nov\'))+Number(display(\'dec\'))'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'jan',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'feb',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'mar',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'apr',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'may',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'jun',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'jul',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'aug',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'sep',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'oct',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'nov',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'text',style:'',id:'dec',value:'',displayMode:'label',displayFormat:'#,##0',maxLength:'13'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column63',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'110',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',expression:'sum(\'amt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'jan\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'feb\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'mar\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'apr\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'may\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'jun\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'jul\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'aug\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'sep\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'oct\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'nov\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'90',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'dec\')'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 천원)',class:''}}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',gridID:'gr_expnBudget',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnDelYn:'N'}}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_upexpnBudget',dataName:'일반경비예산등록(부서별)',fixedColumn:'6',focusMode:'row',id:'gr_upexpnBudget',rowStatusVisible:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'display: none;',validFeatures:'ignoreStatus=no',visibleRowNum:'11',visibleRowNumFix:'true','ev:onfilereadend':'scwin.f_Import'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column19',inputType:'text',style:'',value:'관리계정코드',width:'120'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column17',inputType:'text',style:'',value:'관리계정명',width:'200'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column13',inputType:'text',style:'',value:'계획산정기준',width:'120'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column37',inputType:'text',style:'',value:'1월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column35',inputType:'text',style:'',value:'2월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column33',inputType:'text',style:'',value:'3월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column31',inputType:'text',style:'',value:'4월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column29',inputType:'text',style:'',value:'5월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column23',inputType:'text',style:'',value:'6월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column25',inputType:'text',style:'',value:'7월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column27',inputType:'text',style:'',value:'8월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column47',inputType:'text',style:'',value:'9월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column45',inputType:'text',style:'',value:'10월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column39',inputType:'text',style:'',value:'11월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column41',inputType:'text',style:'',value:'12월',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'textImage',mandatory:'true',readOnly:'true',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',mandatory:'true',readOnly:'true',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planComputeStd',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'jan',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'feb',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'mar',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'apr',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'may',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'jun',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'jul',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'aug',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'sep',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'oct',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'nov',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',id:'dec',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'합계',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'jan\')',id:'column60',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'feb\')',id:'column59',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'mar\')',id:'column58',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'apr\')',id:'column57',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'may\')',id:'column56',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'jun\')',id:'column55',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'jul\')',id:'column54',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'aug\')',id:'column53',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'sep\')',id:'column52',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'oct\')',id:'column51',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'nov\')',id:'column50',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum(\'dec\')',id:'column49',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_apply',label:'저장',type:'button',class:'btn white',objType:'bSave','ev:onclick':'scwin.f_Apply'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄적용'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_create',label:'저장',type:'button',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Confirm',id:'btn_confirm',label:'확정',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]}]}]}]}]}]}]})