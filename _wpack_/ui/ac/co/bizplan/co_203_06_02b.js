/*amd /ui/ac/co/bizplan/co_203_06_02b.xml 64988 591153c4820a438f49db382f6b84f83c73fbbaa7d72d98d8f3e47eebd5309900 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dept'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBizPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYm',name:'예산년도',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bookClsCd',name:'장부구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'부서레벨',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'distYn',name:'배부포함',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jan',name:'1월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'feb',name:'2월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mar',name:'3월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qatrYy1',name:'1분기계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'apr',name:'4월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'may',name:'5월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jun',name:'6월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qatrYy2',name:'2분기계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'halfYy',name:'상반기계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jul',name:'7월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aug',name:'8월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sep',name:'9월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qatrYy3',name:'3분기계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nov',name:'11월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dec',name:'12월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qatrYy4',name:'4분기계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'halfYy2',name:'하반기계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oct',name:'10월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'버전 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'버전 이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'최종 버전 여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'장부구분 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'장부구분 이름',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col2',name:'부서 이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'부서 코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bookKnd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bizPlanOriginal',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ver',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'prtAcctNm',name:'계정'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'합계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jan',name:'1월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'feb',name:'2월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mar',name:'3월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qatrYy1',name:'1분기계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'apr',name:'4월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'may',name:'5월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jun',name:'6월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qatrYy2',name:'2분기계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'halfYy',name:'상반기계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jul',name:'7월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'aug',name:'8월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sep',name:'9월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qatrYy3',name:'3분기계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'oct',name:'10월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'nov',name:'11월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dec',name:'12월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qatrYy4',name:'4분기계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'halfYy2',name:'하반기계'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchMonthCostResult',action:'/ac.co.bizplan.RetrieveBusinessPlanProfitAndLossCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchBizPlan","key":"IN_DS1"},{"id":"ds_bizPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bizPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVer',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_version',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getDept',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_dept',target:'data:json,{"id":"ds_dept","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dept_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBookKnd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_bookKnd',target:'data:json,{"id":"ds_bookKndCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBookKnd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.wrkNo = ""; // 작업구분코드
scwin.fromDate = ""; // 작업날짜

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  	
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)	
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 	
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 회사코드	
scwin.isSubCompany = false;
scwin.hid_FromDate = "";
scwin.txtCoClsCd = ""; //회사구분 히든
scwin.isStart = false;
scwin.curRowPosition = 0;
scwin.curColPosition = 0;

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  let param_yy = ica_FromDate.getValue().trim() + "0101";
  let cd, nm;

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출(물류 귀속부서만 POPUP에 포함)
    case '1':
      let param = param_yy + ",,,,,,,,," + ed_coCd.getValue();
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, cd, nm, 'T', null, null, null, null, param, null, null, null, null);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      $c.gus.cfSetHiddenValue($p, ed_sacctDeptCd, "");
      $c.gus.cfSetHiddenValue($p, ed_sacctDeptNm, "");
      return;
    }
    ed_sacctDeptCd.setValue(rtnList[0]);
    ed_sacctDeptNm.setValue(rtnList[1]);
    if (!ed_sacctDeptCd.options) ed_sacctDeptCd.options = {};
    if (!ed_sacctDeptNm.options) ed_sacctDeptNm.options = {};
    ed_sacctDeptCd.options.hidVal = rtnList[0];
    ed_sacctDeptNm.options.hidVal = rtnList[1];
    dma_searchBizPlan.set("acctDeptLvl", rtnList[6]);
  } else {
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    if (!ed_sacctDeptCd.options) ed_sacctDeptCd.options = {};
    if (!ed_sacctDeptNm.options) ed_sacctDeptNm.options = {};
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptNm.options.hidVal = "";
    dma_searchBizPlan.set("acctDeptLvl", 0);
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (!orgObjCd.options) orgObjCd.options = {};
  if (!orgObjNm.options) orgObjNm.options = {};
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "CO012",
    compID: "acb_unit"
  }];
  await $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = async function () {
  ica_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));
  scwin.f_LoadVer();
  scwin.hid_FromDate = ica_FromDate.getValue();
  scwin.f_setCompanyInfo();
  if (ed_coCd.getValue() == "023") {
    scwin.f_retrieveCodeList("FI010", "003");
  } else {
    scwin.f_retrieveCodeList("FI010", "001");
  }
};
scwin.ondataload = function () {
  acb_unit.setSelectedIndex(1);
};

//-------------------------------------------------------------------------
// 조회 <하위부서 Excel Down Load : 하위부서포함한 전체 를 excel 파일로 저장 >--2007.04.17
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  // 해당월의 실적이 있는지 여부 확인(True:테이타가 있음, False:데이타가 없음)
  // if ( !ds_bizPlan.CountRow() ) {
  //  cfAlertMsg(MSG_CM_WRN_002);
  //  return; 
  // }

  if (ds_dept.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let bookClsCd = lc_bookClsCd.getValue();
  let ver = acb_version.getValue();

  // 버전이 001일경우는 장부구분의 (자산비용)을 조회 하도록 코드값을 변경한다.
  if (ver === "001" || ver === "000") {
    // 일반일경우
    if (bookClsCd === "601") {
      dma_searchBizPlan.set("bookClsCd", "621");
      // 요약일경우
    } else if (bookClsCd === "602") {
      dma_searchBizPlan.set("bookClsCd", "622");
      // 상세일경우
    } else if (bookClsCd === "603") {
      dma_searchBizPlan.set("bookClsCd", "623");
    }
  }
  for (let i = ds_dept.getRowCount() - 1; i >= 0; i--) {
    dma_searchBizPlan.set("acctDeptCd", ds_dept.getCellData(i, "col1"));
    let e = await $c.sbm.execute($p, sbm_searchMonthCostResult);
    scwin.sbm_searchMonthCostResult_submitdone(e);
    await scwin.f_Export2(ds_dept.getCellData(i, "col2"));
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 조회조건 필수사항 체크
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd, acb_version, ed_coCd]);
  if (!ret) {
    return false;
  }

  // 버전이 001일경우는 장부구분의 (자산비용)을 조회 하도록 코드값을 변경한다.
  if (acb_version.getValue() == "001" || acb_version.getValue() == "000") {
    // 일반일경우
    if (lc_bookClsCd.getValue() == "601") {
      dma_searchBizPlan.set("bookClsCd", "621");
      // 요약일경우
    } else if (lc_bookClsCd.getValue() == "602") {
      dma_searchBizPlan.set("bookClsCd", "622");
      // 상세일경우
    } else if (lc_bookClsCd.getValue() == "603") {
      dma_searchBizPlan.set("bookClsCd", "623");
    }
  } else {
    dma_searchBizPlan.set("bookClsCd", lc_bookClsCd.getValue());
  }
  dma_searchBizPlan.set("acctDeptCd", lc_acctDeptCd.getValue());
  dma_searchBizPlan.set("coClsCd", scwin.txtCoClsCd);
  let e = await $c.sbm.execute($p, sbm_searchMonthCostResult);
  scwin.sbm_searchMonthCostResult_submitdone(e);
};

//-------------------------------------------------------------------------
// Ver정보를 가져온다.
//-------------------------------------------------------------------------
scwin.f_LoadVer = function () {
  // 작업구분코드 및 날짜 세팅함수 호출
  scwin.f_setWrkNoFromDate();
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveVersionInfo",
    param1: scwin.fromDate
  };

  //데이터셋에 정보설정
  dma_version.setJSON(params);
  $c.sbm.execute($p, sbm_retrieveVer);
};

//-------------------------------------------------------------------------
// 최종 Ver을 설정
//-------------------------------------------------------------------------
scwin.f_SetFinalVer = function () {
  if (ds_version.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_version.getRowCount(); i++) {
    if (ds_version.getCellData(i, "col3") == 1) {
      index = i;
      break;
    }
  }
  acb_version.setSelectedIndex(index);
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = function () {
  scwin.fromDate = ica_FromDate.getValue().trim() + "00";
};

//-------------------------------------------------------------------------
// 실적부서를 구한다.
//-------------------------------------------------------------------------
scwin.f_GetRsltsDept = async function () {
  //조회조건 필수사항 체크
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd, acb_version]);
  if (!ret) {
    return false;
  }
  const params = {
    sysCd: "ManagementProfitAndLossEBC",
    queryId: "retrievePlanComparisonResultsAcctDept",
    param1: ed_sacctDeptCd.getValue().trim(),
    param2: dma_searchBizPlan.get("planYm"),
    param3: dma_searchBizPlan.get("lowerDeptIncluYn"),
    param4: dma_searchBizPlan.get("acctDeptLvl"),
    param5: dma_searchBizPlan.get("ver"),
    param7: dma_searchBizPlan.get("coCd")
  };

  //데이터셋에 정보설정
  dma_dept.setJSON(params);
  $c.sbm.execute($p, sbm_getDept);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  let objGridName = gr_bizPlan;
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let exportFileName = "사업계획손익조회_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_FromDate.getValue().trim() + "_ver_" + acb_version.getValue() + ".xlsx";
    $c.data.downloadGridViewExcel($p, objGridName, {
      fileName: exportFileName,
      sheetName: "사업계획손익조회"
    });
  }
};

//---------------------------------------------------------------------------------------
// 엑셀 Download  <하위부서 Excel Down Load : 하위부서포함한 전체 를 excel 파일로 저장 >--2007.04.17
//---------------------------------------------------------------------------------------
scwin.f_Export2 = async function (acctDeptCd) {
  if (ds_bizPlan.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = acctDeptCd + "(" + ica_FromDate.getValue() + ")";
  let sheetTitle2 = '단위_' + acb_unit.getText(true);
  let colCount = gr_bizPlan.getTotalCol();
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: sheetTitle,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    drawBorder: true,
    color: "black",
    backgroundColor: "white"
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: sheetTitle2,
    textAlign: "right",
    fontSize: 12,
    drawBorder: true
  }];
  let options = {
    fileName: "사업계획손익조회_" + lc_acctDeptCd.getValue() + "_" + ica_FromDate.getValue() + "_ver_" + acb_version.getValue() + "_하위" + ".xlsx",
    sheetName: acctDeptCd.trim().replace('/', ''),
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, gr_bizPlan, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 페이지정보를 초기화한다.
//-------------------------------------------------------------------------
scwin.f_ClearPaging = function () {
  pagingIndex.setValue("");
};

//-------------------------------------------------------------------------
// 페이지정보를 초기화한다.
//-------------------------------------------------------------------------
scwin.f_MoveToPage = function (pageNum) {
  //scwin.f_SetGridFormat(pageNum);
  //scwin.f_DisplayPaging(pageNum);
  //scwin.f_changeUnit();
};

//-------------------------------------------------------------------------
// 페이지정보를 표시한다.
//-------------------------------------------------------------------------
scwin.f_DisplayPaging = function (pageNum) {
  if ($c.gus.cfIsNull($p, pageNum)) pageNum = 1;
  let pagingStr = "<table width='100%' border='0' cellpadding='0' cellspacing='0'><tr><td align='center' class='pagenumber_td'>";
  for (let i = 1; i <= 2; i++) {
    if (i != Number(pageNum)) {
      pagingStr += "<a href='#' onclick='scwin.f_MoveToPage(" + i + ")'>&nbsp;" + i + "&nbsp;</a>";
    } else {
      pagingStr += '&nbsp;[' + i + ']&nbsp;';
    }
  }
  pagingStr += "</td></tr></table>";
  pagingIndex.setValue(pagingStr);
};

//-------------------------------------------------------------------------
// 그리드 지우기
//-------------------------------------------------------------------------
scwin.f_ClearGrid = function () {
  gr_bizPlan.removeAll();
  scwin.f_ClearPaging();
};

//-------------------------------------------------------------------------
// 그리드 포맷설정
//-------------------------------------------------------------------------
scwin.f_SetGridFormat = function (pageNum) {
  //if ($c.gus.cfIsNull(pageNum)) pageNum = 1;

  const cols = ["jan", "feb", "mar", "qatrYy1", "apr", "may", "jun", "qatrYy2", "halfYy", "jul", "aug", "sep", "qatrYy3", "oct", "nov", "dec", "qatrYy4", "halfYy2"];
  showCols = cols;
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnit = function () {
  let unitValue = acb_unit.getValue();
  let unitAmt = 1;
  if (unitValue == "02") unitAmt = 1000;else if (unitValue == "03") unitAmt = 1000000;else if (unitValue == "04") unitAmt = 100000000;
  scwin.f_changeUnitAmt(unitAmt);
  scwin.f_Rate(unitAmt);
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnitAmt = function (unitAmt) {
  let cols = ["amt", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "halfYy", "halfYy2", "qatrYy1", "qatrYy2", "qatrYy3", "qatrYy4"];
  let calculatedData = ds_bizPlanOriginal.getAllJSON();
  for (let i = 0; i < calculatedData.length; i++) {
    let rowData = calculatedData[i];
    for (const colId of cols) {
      rowData[colId] = Math.round(rowData[colId] / unitAmt);
    }
  }
  ds_bizPlan.setJSON(calculatedData);
};

//-------------------------------------------------------------------------
// 금액을 재설정한다.
//-------------------------------------------------------------------------
scwin.f_Rate = function (unitAmt) {
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
  let sellAmt10 = 0;
  let sellAmt11 = 0;
  let sellAmt12 = 0;
  let sellHalfYy = 0;
  let sellHalfYy2 = 0;
  let sellQatrYy1 = 0;
  let sellQatrYy2 = 0;
  let sellQatrYy3 = 0;
  let sellQatrYy4 = 0;
  let sellCostSum = 0;
  let sellCost1 = 0;
  let sellCost2 = 0;
  let sellCost3 = 0;
  let sellCost4 = 0;
  let sellCost5 = 0;
  let sellCost6 = 0;
  let sellCost7 = 0;
  let sellCost8 = 0;
  let sellCost9 = 0;
  let sellCost10 = 0;
  let sellCost11 = 0;
  let sellCost12 = 0;
  let sellCostHalfYy = 0;
  let sellCostHalfYy2 = 0;
  let sellCostQatrYy1 = 0;
  let sellCostQatrYy2 = 0;
  let sellCostQatrYy3 = 0;
  let sellCostQatrYy4 = 0;
  let salesCostSum = 0;
  let salesCost1 = 0;
  let salesCost2 = 0;
  let salesCost3 = 0;
  let salesCost4 = 0;
  let salesCost5 = 0;
  let salesCost6 = 0;
  let salesCost7 = 0;
  let salesCost8 = 0;
  let salesCost9 = 0;
  let salesCost10 = 0;
  let salesCost11 = 0;
  let salesCost12 = 0;
  let salesCostHalfYy = 0;
  let salesCostHalfYy2 = 0;
  let salesCostQatrYy1 = 0;
  let salesCostQatrYy2 = 0;
  let salesCostQatrYy3 = 0;
  let salesCostQatrYy4 = 0;
  let mwoundSum = 0;
  let mwound1 = 0;
  let mwound2 = 0;
  let mwound3 = 0;
  let mwound4 = 0;
  let mwound5 = 0;
  let mwound6 = 0;
  let mwound7 = 0;
  let mwound8 = 0;
  let mwound9 = 0;
  let mwound10 = 0;
  let mwound11 = 0;
  let mwound12 = 0;
  let mwoundHalfYy = 0;
  let mwoundHalfYy2 = 0;
  let mwoundQatrYy1 = 0;
  let mwoundQatrYy2 = 0;
  let mwoundQatrYy3 = 0;
  let mwoundQatrYy4 = 0;
  let accountSum = 0;
  let account1 = 0;
  let account2 = 0;
  let account3 = 0;
  let account4 = 0;
  let account5 = 0;
  let account6 = 0;
  let account7 = 0;
  let account8 = 0;
  let account9 = 0;
  let account10 = 0;
  let account11 = 0;
  let account12 = 0;
  let accountHalfYy = 0;
  let accountHalfYy2 = 0;
  let accountQatrYy1 = 0;
  let accountQatrYy2 = 0;
  let accountQatrYy3 = 0;
  let accountQatrYy4 = 0;
  let assetSum = 0;
  let asset1 = 0;
  let asset2 = 0;
  let asset3 = 0;
  let asset4 = 0;
  let asset5 = 0;
  let asset6 = 0;
  let asset7 = 0;
  let asset8 = 0;
  let asset9 = 0;
  let asset10 = 0;
  let asset11 = 0;
  let asset12 = 0;
  let assetHalfYy = 0;
  let assetHalfYy2 = 0;
  let assetQatrYy1 = 0;
  let assetQatrYy2 = 0;
  let assetQatrYy3 = 0;
  let assetQatrYy4 = 0;

  // 매출액, 매출원가, 영업이익, 경상이익을 구한다.
  for (let i = 0; i < ds_bizPlan.getRowCount(); i++) {
    let mgntAcctCd = ds_bizPlan.getCellData(i, "mgntAcctCd");
    if (mgntAcctCd == "4100000") {
      // 매출액
      sellAmt = parseInt(ds_bizPlanOriginal.getCellData(i, "amt"));
      sellAmt1 = parseInt(ds_bizPlanOriginal.getCellData(i, "jan"));
      sellAmt2 = parseInt(ds_bizPlanOriginal.getCellData(i, "feb"));
      sellAmt3 = parseInt(ds_bizPlanOriginal.getCellData(i, "mar"));
      sellAmt4 = parseInt(ds_bizPlanOriginal.getCellData(i, "apr"));
      sellAmt5 = parseInt(ds_bizPlanOriginal.getCellData(i, "may"));
      sellAmt6 = parseInt(ds_bizPlanOriginal.getCellData(i, "jun"));
      sellAmt7 = parseInt(ds_bizPlanOriginal.getCellData(i, "jul"));
      sellAmt8 = parseInt(ds_bizPlanOriginal.getCellData(i, "aug"));
      sellAmt9 = parseInt(ds_bizPlanOriginal.getCellData(i, "sep"));
      sellAmt10 = parseInt(ds_bizPlanOriginal.getCellData(i, "oct"));
      sellAmt11 = parseInt(ds_bizPlanOriginal.getCellData(i, "nov"));
      sellAmt12 = parseInt(ds_bizPlanOriginal.getCellData(i, "dec"));
      sellHalfYy = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy"));
      sellHalfYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy2"));
      sellQatrYy1 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy1"));
      sellQatrYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy2"));
      sellQatrYy3 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy3"));
      sellQatrYy4 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy4"));
    } else if (mgntAcctCd == "4200000") {
      // 매출원가
      sellCostSum = parseInt(ds_bizPlanOriginal.getCellData(i, "amt"));
      sellCost1 = parseInt(ds_bizPlanOriginal.getCellData(i, "jan"));
      sellCost2 = parseInt(ds_bizPlanOriginal.getCellData(i, "feb"));
      sellCost3 = parseInt(ds_bizPlanOriginal.getCellData(i, "mar"));
      sellCost4 = parseInt(ds_bizPlanOriginal.getCellData(i, "apr"));
      sellCost5 = parseInt(ds_bizPlanOriginal.getCellData(i, "may"));
      sellCost6 = parseInt(ds_bizPlanOriginal.getCellData(i, "jun"));
      sellCost7 = parseInt(ds_bizPlanOriginal.getCellData(i, "jul"));
      sellCost8 = parseInt(ds_bizPlanOriginal.getCellData(i, "aug"));
      sellCost9 = parseInt(ds_bizPlanOriginal.getCellData(i, "sep"));
      sellCost10 = parseInt(ds_bizPlanOriginal.getCellData(i, "oct"));
      sellCost11 = parseInt(ds_bizPlanOriginal.getCellData(i, "nov"));
      sellCost12 = parseInt(ds_bizPlanOriginal.getCellData(i, "dec"));
      sellCostHalfYy = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy"));
      sellCostHalfYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy2"));
      sellCostQatrYy1 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy1"));
      sellCostQatrYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy2"));
      sellCostQatrYy3 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy3"));
      sellCostQatrYy4 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy4"));
    } else if (mgntAcctCd == "5900000") {
      // 영업이익
      salesCostSum = parseInt(ds_bizPlanOriginal.getCellData(i, "amt"));
      salesCost1 = parseInt(ds_bizPlanOriginal.getCellData(i, "jan"));
      salesCost2 = parseInt(ds_bizPlanOriginal.getCellData(i, "feb"));
      salesCost3 = parseInt(ds_bizPlanOriginal.getCellData(i, "mar"));
      salesCost4 = parseInt(ds_bizPlanOriginal.getCellData(i, "apr"));
      salesCost5 = parseInt(ds_bizPlanOriginal.getCellData(i, "may"));
      salesCost6 = parseInt(ds_bizPlanOriginal.getCellData(i, "jun"));
      salesCost7 = parseInt(ds_bizPlanOriginal.getCellData(i, "jul"));
      salesCost8 = parseInt(ds_bizPlanOriginal.getCellData(i, "aug"));
      salesCost9 = parseInt(ds_bizPlanOriginal.getCellData(i, "sep"));
      salesCost10 = parseInt(ds_bizPlanOriginal.getCellData(i, "oct"));
      salesCost11 = parseInt(ds_bizPlanOriginal.getCellData(i, "nov"));
      salesCost12 = parseInt(ds_bizPlanOriginal.getCellData(i, "dec"));
      salesCostHalfYy = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy"));
      salesCostHalfYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy2"));
      salesCostQatrYy1 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy1"));
      salesCostQatrYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy2"));
      salesCostQatrYy3 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy3"));
      salesCostQatrYy4 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy4"));
    } else if (mgntAcctCd == "6700000") {
      // 경상이익
      mwoundSum = parseInt(ds_bizPlanOriginal.getCellData(i, "amt"));
      mwound1 = parseInt(ds_bizPlanOriginal.getCellData(i, "jan"));
      mwound2 = parseInt(ds_bizPlanOriginal.getCellData(i, "feb"));
      mwound3 = parseInt(ds_bizPlanOriginal.getCellData(i, "mar"));
      mwound4 = parseInt(ds_bizPlanOriginal.getCellData(i, "apr"));
      mwound5 = parseInt(ds_bizPlanOriginal.getCellData(i, "may"));
      mwound6 = parseInt(ds_bizPlanOriginal.getCellData(i, "jun"));
      mwound7 = parseInt(ds_bizPlanOriginal.getCellData(i, "jul"));
      mwound8 = parseInt(ds_bizPlanOriginal.getCellData(i, "aug"));
      mwound9 = parseInt(ds_bizPlanOriginal.getCellData(i, "sep"));
      mwound10 = parseInt(ds_bizPlanOriginal.getCellData(i, "oct"));
      mwound11 = parseInt(ds_bizPlanOriginal.getCellData(i, "nov"));
      mwound12 = parseInt(ds_bizPlanOriginal.getCellData(i, "dec"));
      mwoundHalfYy = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy"));
      mwoundHalfYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy2"));
      mwoundQatrYy1 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy1"));
      mwoundQatrYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy2"));
      mwoundQatrYy3 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy3"));
      mwoundQatrYy4 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy4"));
    } else if (mgntAcctCd == "9100017") {
      // 회계이익
      accountSum = parseInt(ds_bizPlanOriginal.getCellData(i, "amt"));
      account1 = parseInt(ds_bizPlanOriginal.getCellData(i, "jan"));
      account2 = parseInt(ds_bizPlanOriginal.getCellData(i, "feb"));
      account3 = parseInt(ds_bizPlanOriginal.getCellData(i, "mar"));
      account4 = parseInt(ds_bizPlanOriginal.getCellData(i, "apr"));
      account5 = parseInt(ds_bizPlanOriginal.getCellData(i, "may"));
      account6 = parseInt(ds_bizPlanOriginal.getCellData(i, "jun"));
      account7 = parseInt(ds_bizPlanOriginal.getCellData(i, "jul"));
      account8 = parseInt(ds_bizPlanOriginal.getCellData(i, "aug"));
      account9 = parseInt(ds_bizPlanOriginal.getCellData(i, "sep"));
      account10 = parseInt(ds_bizPlanOriginal.getCellData(i, "oct"));
      account11 = parseInt(ds_bizPlanOriginal.getCellData(i, "nov"));
      account12 = parseInt(ds_bizPlanOriginal.getCellData(i, "dec"));
      accountHalfYy = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy"));
      accountHalfYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy2"));
      accountQatrYy1 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy1"));
      accountQatrYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy2"));
      accountQatrYy3 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy3"));
      accountQatrYy4 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy4"));
    } else if (mgntAcctCd == "9100018") {
      // 자산비용
      assetSum = parseInt(ds_bizPlanOriginal.getCellData(i, "amt"));
      asset1 = parseInt(ds_bizPlanOriginal.getCellData(i, "jan"));
      asset2 = parseInt(ds_bizPlanOriginal.getCellData(i, "feb"));
      asset3 = parseInt(ds_bizPlanOriginal.getCellData(i, "mar"));
      asset4 = parseInt(ds_bizPlanOriginal.getCellData(i, "apr"));
      asset5 = parseInt(ds_bizPlanOriginal.getCellData(i, "may"));
      asset6 = parseInt(ds_bizPlanOriginal.getCellData(i, "jun"));
      asset7 = parseInt(ds_bizPlanOriginal.getCellData(i, "jul"));
      asset8 = parseInt(ds_bizPlanOriginal.getCellData(i, "aug"));
      asset9 = parseInt(ds_bizPlanOriginal.getCellData(i, "sep"));
      asset10 = parseInt(ds_bizPlanOriginal.getCellData(i, "oct"));
      asset11 = parseInt(ds_bizPlanOriginal.getCellData(i, "nov"));
      asset12 = parseInt(ds_bizPlanOriginal.getCellData(i, "dec"));
      assetHalfYy = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy"));
      assetHalfYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "halfYy2"));
      assetQatrYy1 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy1"));
      assetQatrYy2 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy2"));
      assetQatrYy3 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy3"));
      assetQatrYy4 = parseInt(ds_bizPlanOriginal.getCellData(i, "qatrYy4"));
    }
  }

  // 매출원가율, 영업이익율, 경상이익율을 구한다.
  for (let i = 0; i < ds_bizPlan.getRowCount(); i++) {
    let mgntAcctCd = ds_bizPlan.getCellData(i, "mgntAcctCd");
    if (mgntAcctCd == "9300001") {
      // 매출원가율
      ds_bizPlan.setCellData(i, "amt", sellAmt == 0 ? 0 : sellCostSum / sellAmt * 100);
      ds_bizPlan.setCellData(i, "jan", sellAmt1 == 0 ? 0 : sellCost1 / sellAmt1 * 100);
      ds_bizPlan.setCellData(i, "feb", sellAmt2 == 0 ? 0 : sellCost2 / sellAmt2 * 100);
      ds_bizPlan.setCellData(i, "mar", sellAmt3 == 0 ? 0 : sellCost3 / sellAmt3 * 100);
      ds_bizPlan.setCellData(i, "apr", sellAmt4 == 0 ? 0 : sellCost4 / sellAmt4 * 100);
      ds_bizPlan.setCellData(i, "may", sellAmt5 == 0 ? 0 : sellCost5 / sellAmt5 * 100);
      ds_bizPlan.setCellData(i, "jun", sellAmt6 == 0 ? 0 : sellCost6 / sellAmt6 * 100);
      ds_bizPlan.setCellData(i, "jul", sellAmt7 == 0 ? 0 : sellCost7 / sellAmt7 * 100);
      ds_bizPlan.setCellData(i, "aug", sellAmt8 == 0 ? 0 : sellCost8 / sellAmt8 * 100);
      ds_bizPlan.setCellData(i, "sep", sellAmt9 == 0 ? 0 : sellCost9 / sellAmt9 * 100);
      ds_bizPlan.setCellData(i, "oct", sellAmt10 == 0 ? 0 : sellCost10 / sellAmt10 * 100);
      ds_bizPlan.setCellData(i, "nov", sellAmt11 == 0 ? 0 : sellCost11 / sellAmt11 * 100);
      ds_bizPlan.setCellData(i, "dec", sellAmt12 == 0 ? 0 : sellCost12 / sellAmt12 * 100);
      ds_bizPlan.setCellData(i, "halfYy", sellHalfYy == 0 ? 0 : sellCostHalfYy / sellHalfYy * 100);
      ds_bizPlan.setCellData(i, "halfYy2", sellHalfYy2 == 0 ? 0 : sellCostHalfYy2 / sellHalfYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy1", sellQatrYy1 == 0 ? 0 : sellCostQatrYy1 / sellQatrYy1 * 100);
      ds_bizPlan.setCellData(i, "qatrYy2", sellQatrYy2 == 0 ? 0 : sellCostQatrYy2 / sellQatrYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy3", sellQatrYy3 == 0 ? 0 : sellCostQatrYy3 / sellQatrYy3 * 100);
      ds_bizPlan.setCellData(i, "qatrYy4", sellQatrYy4 == 0 ? 0 : sellCostQatrYy4 / sellQatrYy4 * 100);
    } else if (mgntAcctCd == "9300002") {
      // 영업이익율
      ds_bizPlan.setCellData(i, "amt", sellAmt == 0 ? 0 : salesCostSum / sellAmt * 100);
      ds_bizPlan.setCellData(i, "jan", sellAmt1 == 0 ? 0 : salesCost1 / sellAmt1 * 100);
      ds_bizPlan.setCellData(i, "feb", sellAmt2 == 0 ? 0 : salesCost2 / sellAmt2 * 100);
      ds_bizPlan.setCellData(i, "mar", sellAmt3 == 0 ? 0 : salesCost3 / sellAmt3 * 100);
      ds_bizPlan.setCellData(i, "apr", sellAmt4 == 0 ? 0 : salesCost4 / sellAmt4 * 100);
      ds_bizPlan.setCellData(i, "may", sellAmt5 == 0 ? 0 : salesCost5 / sellAmt5 * 100);
      ds_bizPlan.setCellData(i, "jun", sellAmt6 == 0 ? 0 : salesCost6 / sellAmt6 * 100);
      ds_bizPlan.setCellData(i, "jul", sellAmt7 == 0 ? 0 : salesCost7 / sellAmt7 * 100);
      ds_bizPlan.setCellData(i, "aug", sellAmt8 == 0 ? 0 : salesCost8 / sellAmt8 * 100);
      ds_bizPlan.setCellData(i, "sep", sellAmt9 == 0 ? 0 : salesCost9 / sellAmt9 * 100);
      ds_bizPlan.setCellData(i, "oct", sellAmt10 == 0 ? 0 : salesCost10 / sellAmt10 * 100);
      ds_bizPlan.setCellData(i, "nov", sellAmt11 == 0 ? 0 : salesCost11 / sellAmt11 * 100);
      ds_bizPlan.setCellData(i, "dec", sellAmt12 == 0 ? 0 : salesCost12 / sellAmt12 * 100);
      ds_bizPlan.setCellData(i, "halfYy", sellHalfYy == 0 ? 0 : salesCostHalfYy / sellHalfYy * 100);
      ds_bizPlan.setCellData(i, "halfYy2", sellHalfYy2 == 0 ? 0 : salesCostHalfYy2 / sellHalfYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy1", sellQatrYy1 == 0 ? 0 : salesCostQatrYy1 / sellQatrYy1 * 100);
      ds_bizPlan.setCellData(i, "qatrYy2", sellQatrYy2 == 0 ? 0 : salesCostQatrYy2 / sellQatrYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy3", sellQatrYy3 == 0 ? 0 : salesCostQatrYy3 / sellQatrYy3 * 100);
      ds_bizPlan.setCellData(i, "qatrYy4", sellQatrYy4 == 0 ? 0 : salesCostQatrYy4 / sellQatrYy4 * 100);
    } else if (mgntAcctCd == "9300003") {
      // 경상이익율
      ds_bizPlan.setCellData(i, "amt", sellAmt == 0 ? 0 : mwoundSum / sellAmt * 100);
      ds_bizPlan.setCellData(i, "jan", sellAmt1 == 0 ? 0 : mwound1 / sellAmt1 * 100);
      ds_bizPlan.setCellData(i, "feb", sellAmt2 == 0 ? 0 : mwound2 / sellAmt2 * 100);
      ds_bizPlan.setCellData(i, "mar", sellAmt3 == 0 ? 0 : mwound3 / sellAmt3 * 100);
      ds_bizPlan.setCellData(i, "apr", sellAmt4 == 0 ? 0 : mwound4 / sellAmt4 * 100);
      ds_bizPlan.setCellData(i, "may", sellAmt5 == 0 ? 0 : mwound5 / sellAmt5 * 100);
      ds_bizPlan.setCellData(i, "jun", sellAmt6 == 0 ? 0 : mwound6 / sellAmt6 * 100);
      ds_bizPlan.setCellData(i, "jul", sellAmt7 == 0 ? 0 : mwound7 / sellAmt7 * 100);
      ds_bizPlan.setCellData(i, "aug", sellAmt8 == 0 ? 0 : mwound8 / sellAmt8 * 100);
      ds_bizPlan.setCellData(i, "sep", sellAmt9 == 0 ? 0 : mwound9 / sellAmt9 * 100);
      ds_bizPlan.setCellData(i, "oct", sellAmt10 == 0 ? 0 : mwound10 / sellAmt10 * 100);
      ds_bizPlan.setCellData(i, "nov", sellAmt11 == 0 ? 0 : mwound11 / sellAmt11 * 100);
      ds_bizPlan.setCellData(i, "dec", sellAmt12 == 0 ? 0 : mwound12 / sellAmt12 * 100);
      ds_bizPlan.setCellData(i, "halfYy", sellHalfYy == 0 ? 0 : mwoundHalfYy / sellHalfYy * 100);
      ds_bizPlan.setCellData(i, "halfYy2", sellHalfYy2 == 0 ? 0 : mwoundHalfYy2 / sellHalfYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy1", sellQatrYy1 == 0 ? 0 : mwoundQatrYy1 / sellQatrYy1 * 100);
      ds_bizPlan.setCellData(i, "qatrYy2", sellQatrYy2 == 0 ? 0 : mwoundQatrYy2 / sellQatrYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy3", sellQatrYy3 == 0 ? 0 : mwoundQatrYy3 / sellQatrYy3 * 100);
      ds_bizPlan.setCellData(i, "qatrYy4", sellQatrYy4 == 0 ? 0 : mwoundQatrYy4 / sellQatrYy4 * 100);
    } else if (mgntAcctCd == "9300004") {
      // 회계원가율
      ds_bizPlan.setCellData(i, "amt", sellAmt == 0 ? 0 : accountSum / sellAmt * 100);
      ds_bizPlan.setCellData(i, "jan", sellAmt1 == 0 ? 0 : account1 / sellAmt1 * 100);
      ds_bizPlan.setCellData(i, "feb", sellAmt2 == 0 ? 0 : account2 / sellAmt2 * 100);
      ds_bizPlan.setCellData(i, "mar", sellAmt3 == 0 ? 0 : account3 / sellAmt3 * 100);
      ds_bizPlan.setCellData(i, "apr", sellAmt4 == 0 ? 0 : account4 / sellAmt4 * 100);
      ds_bizPlan.setCellData(i, "may", sellAmt5 == 0 ? 0 : account5 / sellAmt5 * 100);
      ds_bizPlan.setCellData(i, "jun", sellAmt6 == 0 ? 0 : account6 / sellAmt6 * 100);
      ds_bizPlan.setCellData(i, "jul", sellAmt7 == 0 ? 0 : account7 / sellAmt7 * 100);
      ds_bizPlan.setCellData(i, "aug", sellAmt8 == 0 ? 0 : account8 / sellAmt8 * 100);
      ds_bizPlan.setCellData(i, "sep", sellAmt9 == 0 ? 0 : account9 / sellAmt9 * 100);
      ds_bizPlan.setCellData(i, "oct", sellAmt10 == 0 ? 0 : account10 / sellAmt10 * 100);
      ds_bizPlan.setCellData(i, "nov", sellAmt11 == 0 ? 0 : account11 / sellAmt11 * 100);
      ds_bizPlan.setCellData(i, "dec", sellAmt12 == 0 ? 0 : account12 / sellAmt12 * 100);
      ds_bizPlan.setCellData(i, "halfYy", sellHalfYy == 0 ? 0 : accountHalfYy / sellHalfYy * 100);
      ds_bizPlan.setCellData(i, "halfYy2", sellHalfYy2 == 0 ? 0 : accountHalfYy2 / sellHalfYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy1", sellQatrYy1 == 0 ? 0 : accountQatrYy1 / sellQatrYy1 * 100);
      ds_bizPlan.setCellData(i, "qatrYy2", sellQatrYy2 == 0 ? 0 : accountQatrYy2 / sellQatrYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy3", sellQatrYy3 == 0 ? 0 : accountQatrYy3 / sellQatrYy3 * 100);
      ds_bizPlan.setCellData(i, "qatrYy4", sellQatrYy4 == 0 ? 0 : accountQatrYy4 / sellQatrYy4 * 100);
    } else if (mgntAcctCd == "9300005") {
      // 자산비용율
      ds_bizPlan.setCellData(i, "amt", sellAmt == 0 ? 0 : assetSum / sellAmt * 100);
      ds_bizPlan.setCellData(i, "jan", sellAmt1 == 0 ? 0 : asset1 / sellAmt1 * 100);
      ds_bizPlan.setCellData(i, "feb", sellAmt2 == 0 ? 0 : asset2 / sellAmt2 * 100);
      ds_bizPlan.setCellData(i, "mar", sellAmt3 == 0 ? 0 : asset3 / sellAmt3 * 100);
      ds_bizPlan.setCellData(i, "apr", sellAmt4 == 0 ? 0 : asset4 / sellAmt4 * 100);
      ds_bizPlan.setCellData(i, "may", sellAmt5 == 0 ? 0 : asset5 / sellAmt5 * 100);
      ds_bizPlan.setCellData(i, "jun", sellAmt6 == 0 ? 0 : asset6 / sellAmt6 * 100);
      ds_bizPlan.setCellData(i, "jul", sellAmt7 == 0 ? 0 : asset7 / sellAmt7 * 100);
      ds_bizPlan.setCellData(i, "aug", sellAmt8 == 0 ? 0 : asset8 / sellAmt8 * 100);
      ds_bizPlan.setCellData(i, "sep", sellAmt9 == 0 ? 0 : asset9 / sellAmt9 * 100);
      ds_bizPlan.setCellData(i, "oct", sellAmt10 == 0 ? 0 : asset10 / sellAmt10 * 100);
      ds_bizPlan.setCellData(i, "nov", sellAmt11 == 0 ? 0 : asset11 / sellAmt11 * 100);
      ds_bizPlan.setCellData(i, "dec", sellAmt12 == 0 ? 0 : asset12 / sellAmt12 * 100);
      ds_bizPlan.setCellData(i, "halfYy", sellHalfYy == 0 ? 0 : assetHalfYy / sellHalfYy * 100);
      ds_bizPlan.setCellData(i, "halfYy2", sellHalfYy2 == 0 ? 0 : assetHalfYy2 / sellHalfYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy1", sellQatrYy1 == 0 ? 0 : assetQatrYy1 / sellQatrYy1 * 100);
      ds_bizPlan.setCellData(i, "qatrYy2", sellQatrYy2 == 0 ? 0 : assetQatrYy2 / sellQatrYy2 * 100);
      ds_bizPlan.setCellData(i, "qatrYy3", sellQatrYy3 == 0 ? 0 : assetQatrYy3 / sellQatrYy3 * 100);
      ds_bizPlan.setCellData(i, "qatrYy4", sellQatrYy4 == 0 ? 0 : assetQatrYy4 / sellQatrYy4 * 100);
    }
  }
  gr_bizPlan.setFocusedCell(scwin.curRowPosition, scwin.curColPosition);
};

//-------------------------------------------                         
// 그리드 높이 늘리고 줄이기                         
//-------------------------------------------     
// function f_grdHeiht(gridNm, size) {                         

//     var strHeight = gridNm.style.height ;                           
//     var intHeight = parseInt(strHeight.replace("px",""));                           
//     intHeight = intHeight + size;                           
//     if (intHeight > 0 ) {                           
//         gridNm.style.height = intHeight + "px";                         
//     }                           
// }

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if (ed_coCd.getValue() > ACConstants.CO_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//회사 입력 팝업
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (!ed_coCd.options) ed_coCd.options = {};
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isStart = false;
  }
};
scwin.f_retrieveCodeList = function (grpCd, val) {
  dma_bookKnd.set("sysCd", "CommonEBC");
  dma_bookKnd.set("queryId", "retrieveCommonFilterPopup");
  dma_bookKnd.set("param1", grpCd);
  dma_bookKnd.set("param2", val);
  dma_bookKnd.set("param3", "");
  $c.sbm.execute($p, sbm_retrieveBookKnd);
};

// 조회 완료후 장부구분의 코드값을 원 코드값으로 변경한다.
scwin.sbm_searchMonthCostResult_submitdone = async function (e) {
  grd_section1.setStyle("display", "block");
  totalRows.setValue(ds_bizPlan.getRowCount());
  let originalData = ds_bizPlan.getAllJSON();
  ds_bizPlanOriginal.setJSON(originalData);
  scwin.f_changeUnit();
  let bookClsCd = lc_bookClsCd.getValue();
  if (ds_bizPlan.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }

  // 조회 완료후 장부구분의 코드값을 원 코드값으로 변경한다.
  // 일반일경우
  if (bookClsCd === "621") {
    dma_searchBizPlan.set("bookClsCd", "601");
    // 요약일경우
  } else if (bookClsCd === "622") {
    dma_searchBizPlan.set("bookClsCd", "602");
    // 상세일경우
  } else if (bookClsCd === "623") {
    dma_searchBizPlan.set("bookClsCd", "603");
  }
};
scwin.sbm_retrieveVer_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
  if (ed_coCd.text == "023") {
    scwin.f_retrieveCodeList("FI010", "003");
  } else {
    scwin.f_retrieveCodeList("FI010", "001");
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_acctDeptCdInfo_onclickEvent = async function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};
scwin.ica_FromDate_onblur = function (e) {
  scwin.f_LoadVer();
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
scwin.udc_acctDeptCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};
scwin.acb_unit_onchange = function (info) {
  scwin.curRowPosition = gr_bizPlan.getFocusedRowIndex();
  scwin.curColPosition = gr_bizPlan.getFocusedColumnIndex();
  scwin.f_changeUnit();
};
scwin.lc_acctDeptCd_onchange = function (info) {
  if (ds_bizPlan.getRowPosition() < 0) return;
  if ($c.gus.cfIsNull($p, lc_acctDeptCd.getValue())) return;
  scwin.f_Retrieve();
};
scwin.sbm_dept_submitdone = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieveBookKnd_submitdone = function (e) {
  lc_bookClsCd.setSelectedIndex(0);
};
scwin.btn_clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_FromDate, ed_sacctDeptCd, ed_sacctDeptNm]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_FromDate',style:'',mandatory:'true',objType:'data',validExp:'예산년도:yes:date=YYYY',displayFormat:'yyyy',validateOnInput:'true',ref:'data:dma_searchBizPlan.planYm',title:'예산년도','ev:onblur':'scwin.ica_FromDate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_version',search:'start',style:'width: 130px;',submenuSize:'auto',mandatory:'true',tabIndex:'-1',objType:'data',disabled:'false',allowChar:'0-9',ref:'data:dma_searchBizPlan.ver',allOption:'',chooseOption:'',displayMode:'value delim label',title:'버전'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'w2:label',A:{ref:'col4'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장부구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bookClsCd',style:'width:150px;',submenuSize:'auto',objType:'data',validExp:'장부구분:yes',mandatory:'true',ref:'',displayMode:'value delim label',title:'장부구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bookKndCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',codeId:'ed_coCd',validExpCode:'회사코드:yes',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',nameId:'ed_coNm',objTypeName:'data',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo',UpperFlagCode:'1',maxlengthCode:'3','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_searchBizPlan',code:'coCd','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHeadTitle:'회사코드,,,,,회사명',popupTitle:'회사조회,회사코드,법인명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10,11',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',validExpCode:'부서:yes:maxLength=5&number',objTypeCode:'data',allowCharCode:'0-9 ',maxlengthCode:'5',editTypeCode:'select',nameId:'ed_sacctDeptNm',codeId:'ed_sacctDeptCd',id:'udc_acctDeptCdInfo',mandatoryName:'true',objTypeName:'data',editTypeName:'select',maxlengthName:'20',code:'acctDeptCd',refDataCollection:'dma_searchBizPlan',selectID:'retrieveAcctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent',mandatoryCode:'true',validTitle:'부서',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:dma_searchBizPlan.lowerDeptIncluYn',appearance:'full',style:'',id:'cbx_chk_lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:dma_searchBizPlan.distYn',appearance:'full',style:'',id:'cbx_distYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_GetRsltsDept'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사업계획손익',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하위부서포함',class:''}},{T:1,N:'xf:trigger',A:{style:'',id:'',title:'엑셀 UP',type:'button',class:'btn excel-down','ev:onclick':'scwin.f_Retrieve2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctDeptCd',style:'width: 150px;',submenuSize:'auto',objType:'data',mandatory:'false',ref:'','ev:onchange':'scwin.lc_acctDeptCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_dept'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위',ref:'',style:'',userData2:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_unit',search:'start',style:'width: 100px;',submenuSize:'auto',mandatory:'true',validExp:'단위:yes',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_unit_onchange',displayMode:'value delim label',title:'단위',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',gridID:'gr_bizPlan',gridDownFn:'scwin.f_Export',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:';display:none;'},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_bizPlan',id:'gr_bizPlan',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',columnMoveWithFooter:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'prtAcctNm',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'amt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'jan',value:'1월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'feb',value:'2월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'mar',value:'3월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'qatrYy1',value:'1분기계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'apr',value:'4월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'may',value:'5월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'jun',value:'6월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'qatrYy2',value:'2분기계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'halfYy',value:'상반기계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'jul',value:'7월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'aug',value:'8월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'sep',value:'9월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'qatrYy3',value:'3분기계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'oct',value:'10월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'nov',value:'11월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'dec',value:'12월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'qatrYy4',value:'4분기계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'halfYy2',value:'하반기계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'prtAcctNm',displayMode:'label',textAlign:'left',hidden:'false',class:'ws-pre'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jan',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'feb',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mar',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qatrYy1',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apr',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'may',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jun',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qatrYy2',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'halfYy',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jul',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'aug',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sep',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qatrYy3',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'oct',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'nov',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dec',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qatrYy4',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'halfYy2',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})