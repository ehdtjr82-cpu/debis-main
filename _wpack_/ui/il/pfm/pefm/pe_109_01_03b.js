/*amd /ui/il/pfm/pefm/pe_109_01_03b.xml 51535 b22fe600f234c160f8dd608eb16eb0e7a6fe5205035dd7305943d1a20084074d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'seaAir',name:'해운항공구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:key',A:{id:'resultYmFrom',name:'실적시작월',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:key',A:{id:'resultYmTo',name:'실적종료월',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:key',A:{id:'custCd',name:'거래처코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:key',A:{id:'compYmFrom',name:'비교시작월',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:key',A:{id:'compYmTo',name:'비교종료월',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:key',A:{id:'salesCd',name:'영업사원',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:key',A:{id:'picNo',name:'PIC사번',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'부서코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:key',A:{id:'schGroup',name:'조회그룹',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:key',A:{id:'incYn',name:'#N/A',dataType:'number',defaultValue:'0',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seaAir',name:'해운항공구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'iogb',name:'수출입구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'custCd',name:'거래처코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'custNm',name:'거래처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'부서코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'picNo',name:'PIC사번',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'salesCd',name:'영업사원',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'영업사원명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'compBlCnt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'compQty',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'compWt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'compSellAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'compPchsAmt',name:'비교매입금액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'compMarginalProfits',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'resultBlCnt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'resultQty',name:'실적수량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'resultWt',name:'실적중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'resultSellAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'resultPchsAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'resultMarginalProfits',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incBlCnt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incQty',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incWt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incSellAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incPchsAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incMarginalProfits',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'incSellGrowthRate',name:'#N/A',dataType:'text',defaultValue:'',length:'41'}},{T:1,N:'w2:column',A:{id:'incMarginalProfitsGrowthRate',name:'#N/A',dataType:'text',defaultValue:'',length:'41'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pefm.RetrievePerformanceIncreaseAnalyzeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"}, {"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -12);
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // f_SetDataHeader();
  scwin.f_SetDefaultData();

  // TEST DATA
  //ed_resultYmFrom.setValue("202412");
  //ed_resultYmTo.setValue("202412");
  //ed_compYmFrom.setValue("202312");
  //ed_compYmTo.setValue("202312");
};

// 초기 조건 설정
scwin.f_SetDefaultData = function () {
  lc_schGroup.setSelectedIndex(0);
  // 		getMaxCloseYm(); //마감년월 가져오기 
  //실적월은 현재월부터 현재월
  let curDate = scwin.strCurDate.substring(0, 6);
  ed_resultYmFrom.setValue(curDate);
  ed_resultYmTo.setValue(curDate);
  //비교월은 1년전의 현재월부터 1년전의 현재월
  let preDate = scwin.strPreDate.substring(0, 6);
  ed_compYmFrom.setValue(preDate);
  ed_compYmTo.setValue(preDate);
  //기본값 RESULT (OP/SALES제외)
  lc_schGroup.setValue("6");
};

//  검색영역 Field Clear함.
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, tbl_mainData);
  scwin.f_SetDefaultData();
};

// 전월 마감여부  -- // TODO : 미사용하여 구현하지 않음. 추후 필요시 구현.
// function getMaxCloseYm() {

//     // 마감년월 조회 조건
//     var SEARCH_HEADER = "coCd:STRING(3)";

//     ds_search.SetDataHeader(SEARCH_HEADER);
//     ds_search.AddRow();
//     ds_search.NameValue(1, "coCd") = "000";

//     tr_getMaxCloseYm.Post();
// }

// 조회
scwin.f_Retrieve = async function (e) {
  // 검색조건 필수 입력 체크
  let ret = await $c.gus.cfValidate($p, [ed_compYmFrom, ed_resultYmFrom, ed_compYmTo, ed_resultYmTo]);
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_resultYmFrom.getValue().trim() + "01", ed_resultYmTo.getValue().trim() + "31")) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    ed_resultYmFrom.focus();
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_compYmFrom.getValue().trim() + "01", ed_compYmTo.getValue().trim() + "31")) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    ed_compYmFrom.focus();
    return false;
  }
  scwin.f_groupFormat(lc_schGroup.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

// 조회조건 GROUP 선택에 따른  Format 처리 
scwin.f_groupFormat = function (groupGb) {
  gr_master.setColumnVisible(gr_master.getColumnIndex("seaAir"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("iogb"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("deptCd"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("deptNm"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("custCd"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("custNm"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("picNo"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("picNm"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("salesCd"), false);
  gr_master.setColumnVisible(gr_master.getColumnIndex("salesNm"), false);
  gr_master.setHeaderValue("deptNm", "DEPT");
  gr_master.setHeaderValue("salesNm", "SALES");
  gr_master.setHeaderValue("picNm", "OP PIC");
  gr_master.setSubtotalVisible(true);
  if (groupGb == "1") {
    //Result
    gr_master.setColumnVisible(gr_master.getColumnIndex("seaAir"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("iogb"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("deptNm"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("custCd"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("custNm"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("picNm"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("salesNm"), true);
    gr_master.mergeCol(gr_master.getColumnIndex("deptNm"), true);
  } else if (groupGb == "2") {
    //CUSTOMER
    gr_master.setColumnVisible(gr_master.getColumnIndex("custCd"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("custNm"), true);
    gr_master.setSubtotalVisible(false);
  } else if (groupGb == "3") {
    //DEPT
    gr_master.setColumnVisible(gr_master.getColumnIndex("deptCd"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("deptNm"), true);
    gr_master.setHeaderValue("deptNm", "DEPT<br/>NAME");
    gr_master.setSubtotalVisible(false);
    gr_master.mergeCol(gr_master.getColumnIndex("deptNm"), false);
  } else if (groupGb == "4") {
    //OP PIC
    gr_master.setColumnVisible(gr_master.getColumnIndex("seaAir"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("iogb"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("picNo"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("picNm"), true);
    gr_master.setHeaderValue("picNm", "OP PIC<br/>NAME");
  } else if (groupGb == "5") {
    //SALES
    gr_master.setColumnVisible(gr_master.getColumnIndex("seaAir"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("iogb"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("salesCd"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("salesNm"), true);
    gr_master.setHeaderValue("salesNm", "SALES<br/>NAME");
  }
  if (groupGb == "6") {
    //Result(OP/SALES제외)

    gr_master.setColumnVisible(gr_master.getColumnIndex("seaAir"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("iogb"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("deptNm"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("custCd"), true);
    gr_master.setColumnVisible(gr_master.getColumnIndex("custNm"), true);
    gr_master.mergeCol(gr_master.getColumnIndex("deptNm"), true);
  }
  gr_master.mergeByCol();
};

// Customer
scwin.udc_custCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_custCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp('Customer', 'T');
  } else {
    ed_custNm.setValue("");
  }
};
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Customer', 'F');
};
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Customer', 'T');
};
scwin.udc_custCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custCd, ed_custNm);
};

// Salesman
scwin.udc_salesCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_salesCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    ed_salesNm.setValue("");
    scwin.f_OpenCommonPopUp("SALES", "T", "F", "F");
  } else {
    ed_salesNm.setValue("");
  }
};
scwin.udc_salesCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('SALES', 'F', 'F', 'F');
};
scwin.udc_salesCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('SALES', 'F', 'F', 'F');
};
scwin.udc_salesCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_salesCd, ed_salesNm);
};

// Department
scwin.udc_deptCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_deptCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    ed_deptNm.setValue("");
  }
};
scwin.udc_deptCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_deptCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
};
scwin.udc_deptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_deptCd, ed_deptNm);
};

// OP Pic
scwin.udc_picNo_onblurCodeEvent = function (e) {
  let strClntNo = (ed_picNo.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("PIC", "T", "F", "F");
  } else {
    ed_picNm.setValue("");
  }
};
scwin.udc_picNo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('PIC', 'F', 'F', 'F');
};
scwin.udc_picNo_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('PIC', 'T', 'F', 'F');
};
scwin.udc_picNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_picNo, ed_picNm);
};

// 공통팝업 열기
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Customer":
      udc_custCd.setSelectId('retrieveEngClntInfo');
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callBackFunc, ed_custCd.getValue().trim(), ed_custNm.getValue(), pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened) 
      , '10' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , 'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서
      , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 폭
      , '8,9' // 컬럼중에서 숨기는	컬럼 지정             
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")                              
      , 'Customer search,Customer Code,Customer Name');
      break;
    case "DEPT":
      udc_deptCd.setSelectId('retrieveOpDeptCdInfo');
      udc_deptCd.ilCommonPopUp(scwin.udc_deptCd_callBackFunc, ed_deptCd.getValue().trim(), ed_deptNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
    case "SALES":
      udc_salesCd.setSelectId('retrieveEmpInfo');
      udc_salesCd.ilCommonPopUp(scwin.udc_salesCd_callBackFunc, ed_salesCd.getValue().trim(), ed_salesNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "SALESMAN,Code,Name", pNoDataCloseTF);
      break;
    case "PIC":
      udc_salesCd.setSelectId('retrieveEmpInfo');
      udc_salesCd.ilCommonPopUp(scwin.udc_picNo_callBackFunc, ed_picNo.getValue().trim(), ed_picNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "OP PIC,Code,Name", pNoDataCloseTF);
      break;
  }
};
scwin.f_gridToExcel = async function () {
  if (ds_master.CountRow == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    return false;
  }
  let groupName = "";
  if (lc_schGroup.getValue() == "6") {
    ////Result(OP/SALES제외)
    groupName = "Result(OP,SALES제외)";
  } else {
    groupName = lc_schGroup.getValue();
  }
  let resultYmFrom = ed_resultYmFrom.getValue() + "01";
  let resultYmTo = ed_resultYmTo.getValue() + "01";
  let txtResultYm = "";
  if (ed_resultYmFrom.getValue() == ed_resultYmTo.getValue()) {
    txtResultYm = ed_resultYmFrom.getValue();
  } else {
    txtResultYm = ed_resultYmFrom.getValue() + "_" + ed_resultYmTo.getValue();
  }
  let vFileName = " PERFORMANCE 증감분석_" + groupName + "_" + txtResultYm;
  // cfGridToExcel(argGrid, argTitle, vFileName + "", 4 + 8 + 16);

  const options = {
    fileName: vFileName + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "PERFORMANCE 증감분석" //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.fmtYm = function (yyyymmdd) {
  let d = WebSquare.date.parseDate(yyyymmdd); // 기본 yyyyMMdd 파싱 
  return WebSquare.date.getFormattedDate(d, "yyyy년MM월");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 총 조회건수 표시
    if (ds_master.getRowCount() == 0) {
      await $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    }
    // 그리드 조회건수 초기화
    tbx_totalRows.setValue(ds_master.getRowCount()); // 소계 부분을 뺀 실제 데이터 갯수를 Count..

    let resultYmFrom = ed_resultYmFrom.getValue() + "01";
    let resultYmTo = ed_resultYmTo.getValue() + "01";
    let compYmFrom = ed_compYmFrom.getValue() + "01";
    let compYmTo = ed_compYmTo.getValue() + "01";

    // 실적월 헤더 문구 만들기
    var resultHeader = "실적월 : " + scwin.fmtYm(resultYmFrom);
    if (ed_resultYmFrom.getValue() !== ed_resultYmTo.getValue()) {
      resultHeader += "~" + scwin.fmtYm(resultYmTo);
    }

    // 비교월 헤더 문구 만들기
    var compHeader = "비교월 : " + scwin.fmtYm(compYmFrom);
    if (ed_compYmFrom.getValue() !== ed_compYmTo.getValue()) {
      compHeader += "~" + scwin.fmtYm(compYmTo);
    }

    //GridView 헤더에 적용
    gr_master.setHeaderValue("resultYm", resultHeader);
    gr_master.setHeaderValue("compYm", compHeader);
  }
};
scwin.getSeaAirSubTotalLabel = function (data) {
  //data 에 '|'를 기준으로 앞에 문자열을 반환한다.
  return data.substr(0, data.indexOf('|'));
};
scwin.getIogbSubTotalLabel = function (data) {
  //data 에 '|'를 기준으로 뒤에 문자열을 반환한다.
  return data.substr(data.indexOf('|') + 1);
};
scwin.toIntegerDisplay = function (value) {
  // 소수점 제거 후 문자열 변환
  const str = Math.trunc(Number(value)).toString();

  // 정규식을 사용하여 3자리마다 콤마 삽입
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Air/Sea',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_seaAir',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_condition.seaAir',displayMode:'value delim label',chooseOptionLabel:'ALL',objType:'data','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_iogb',search:'start',style:'width:120px;',submenuSize:'auto',chooseOption:'true',displayMode:'value delim label',chooseOptionLabel:'ALL',objType:'data',ref:'data:ds_condition.iogb','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'resultYmFrom',refDataMap:'ds_condition',style:'',id:'udc_fromToYearMon1',refEdDt:'resultYmTo',edFromId:'ed_resultYmFrom',edToId:'ed_resultYmTo',objTypeFrom:'Data',objTypeTo:'Data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'실적월',titleTo:'실적월'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CUSTOMER',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_custCd',nameId:'ed_custNm',id:'udc_custCd',objTypeCode:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',refDataCollection:'ds_condition',name:'custNm',code:'custCd',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DEPARTMENT',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_deptCd',nameId:'ed_deptNm',id:'udc_deptCd',objTypeCode:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_deptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_deptCd_onviewchangeNameEvent',refDataCollection:'ds_condition',code:'deptCd',name:'deptNm',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6'}},{T:1,N:'xf:select',A:{ref:'data:ds_condition.incYn',appearance:'full',style:'',id:'cbx_checkbox1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','data-length':'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Not Inclusive'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'비교월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'compYmFrom',refDataMap:'ds_condition',style:'',id:'udc_fromToYearMon2',refEdDt:'compYmTo',edFromId:'ed_compYmFrom',edToId:'ed_compYmTo',objTypeFrom:'Data',objTypeTo:'Data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'비교월',titleTo:'비교월'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SALES',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_salesCd',nameId:'ed_salesNm',id:'udc_salesCd',objTypeCode:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_salesCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_salesCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_salesCd_onclickEvent',refDataCollection:'ds_condition',code:'salesCd',name:'salesNm',allowCharCode:'0-9',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'OP PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_picNo',code:'picNo',codeId:'ed_picNo',nameId:'ed_picNm',name:'picNm',refDataCollection:'ds_condition','ev:onblurCodeEvent':'scwin.udc_picNo_onblurCodeEvent',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_picNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_picNo_onviewchangeNameEvent',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'GROUP',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_schGroup',search:'start',style:'width:200px;',submenuSize:'auto',chooseOption:'false',displayMode:'value delim label',objType:'data',ref:'data:ds_condition.schGroup','data-length':'2'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Result'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CUSTOMER'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DEPT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'OP PIC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SALES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Result(OP/SALES제외)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'PERFORMANCE 증감분석',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownFn:'scwin.f_gridToExcel',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',fixedColumn:'11',visibleRowNum:'13',readOnly:'true',mergeCells:'bycol',mergeCol:'seaAir,iogb,deptNm'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAir',inputType:'text',value:'SEA<br/>/AIR',width:'90',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iogb',inputType:'text',value:'IN<br/>/OUT',width:'90',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subsum1',inputType:'text',value:'',width:'90',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',value:'DEPT<br/>CODE',width:'90',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',value:'DEPT',width:'90',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'custCd',inputType:'text',value:'CUSTOMER<br/>CODE',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'custNm',inputType:'text',value:'CUSTOMER<br/>NAME',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNo',inputType:'text',value:'OP PIC<br/>CODE',width:'90',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',value:'OP PIC',width:'90',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salesCd',inputType:'text',value:'SALES<br/>CODE',width:'90',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salesNm',inputType:'text',value:'SALES',width:'90',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'compYm',inputType:'text',width:'350',colSpan:'5',value:'비교월',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'resultYm',displayMode:'label',colSpan:'5',value:'실적월',sortable:'false'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',id:'column58',value:'증감',displayMode:'label',colSpan:'7'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'BL CNT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'QTY(CNTR)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'WEIGHT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column38',value:'총매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column37',value:'한계이익',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column36',value:'BL CNT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column71',value:'QTY(CNTR)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column68',value:'WEIGHT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column65',value:'총매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column62',value:'한계이익',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column59',value:'BL CNT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column56',value:'QTY(CNTR)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column53',value:'WEIGHT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column80',value:'총매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column77',value:'한계이익',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column74',value:'매출성장율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column50',value:'한계이익성장률',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAir',inputType:'text',width:'90',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iogb',inputType:'text',width:'90',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subsum1',value:'',displayMode:'label',hidden:'true',expression:'display(\'seaAir\')+\'|\'+display(\'iogb\')',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',colMerge:'true',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'custCd',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'custNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNo',inputType:'text',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salesCd',inputType:'text',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salesNm',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'compBlCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'compQty',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'compWt',displayMode:'label',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'compSellAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'compMarginalProfits',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'resultBlCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'resultQty',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'resultWt',displayMode:'label',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'resultSellAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'resultMarginalProfits',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'incBlCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'incQty',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'incWt',displayMode:'label',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'incSellAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'incMarginalProfits',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'incSellGrowthRate',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'incMarginalProfitsGrowthRate',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subsum1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'seaAir',value:'',displayMode:'label',textAlign:'center',expression:'scwin.getSeaAirSubTotalLabel(targetColValue())'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'iogb',value:'',displayMode:'label',textAlign:'center',expression:'scwin.getIogbSubTotalLabel(targetColValue())'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'subsum1',value:'',displayMode:'label',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column127',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column126',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column125',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column124',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column123',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column122',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column222',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column223',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compBlCnt',value:'',displayMode:'label',expression:'sum(\'compBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compQty',value:'',displayMode:'label',expression:'sum(\'compQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compWt',value:'',displayMode:'label',expression:'sum(\'compWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'compSellAmt',value:'',displayMode:'label',expression:'sum(\'compSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'compMarginalProfits',value:'',displayMode:'label',expression:'sum(\'compMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultBlCnt',value:'',displayMode:'label',expression:'sum(\'resultBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultQty',value:'',displayMode:'label',expression:'sum(\'resultQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultWt',value:'',displayMode:'label',expression:'sum(\'resultWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultSellAmt',value:'',displayMode:'label',expression:'sum(\'resultSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultMarginalProfits',value:'',displayMode:'label',expression:'sum(\'resultMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incBlCnt',value:'',displayMode:'label',expression:'sum(\'incBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incQty',value:'',displayMode:'label',expression:'sum(\'incQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incWt',value:'',displayMode:'label',expression:'sum(\'incWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incSellAmt',value:'',displayMode:'label',expression:'sum(\'incSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incMarginalProfits',value:'',displayMode:'label',expression:'sum(\'incMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'seaAir',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'seaAir',value:'',displayMode:'label',textAlign:'center',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'iogb',value:'',displayMode:'label',textAlign:'center',expression:'\'계\''}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'subsum1',value:'',displayMode:'label',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column127',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column126',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column125',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column124',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column123',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column122',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column222',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column223',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compBlCnt',value:'',displayMode:'label',expression:'sum(\'compBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compQty',value:'',displayMode:'label',expression:'sum(\'compQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compWt',value:'',displayMode:'label',expression:'sum(\'compWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'compSellAmt',value:'',displayMode:'label',expression:'sum(\'compSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'compMarginalProfits',value:'',displayMode:'label',expression:'sum(\'compMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultBlCnt',value:'',displayMode:'label',expression:'sum(\'resultBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultQty',value:'',displayMode:'label',expression:'sum(\'resultQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultWt',value:'',displayMode:'label',expression:'sum(\'resultWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultSellAmt',value:'',displayMode:'label',expression:'sum(\'resultSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultMarginalProfits',value:'',displayMode:'label',expression:'sum(\'resultMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incBlCnt',value:'',displayMode:'label',expression:'sum(\'incBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incQty',value:'',displayMode:'label',expression:'sum(\'incQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incWt',value:'',displayMode:'label',expression:'sum(\'incWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incSellAmt',value:'',displayMode:'label',expression:'sum(\'incSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incMarginalProfits',value:'',displayMode:'label',expression:'sum(\'incMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column104',value:'합계',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column103',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'',value:'',displayMode:'label',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column103',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column100',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column101',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column99',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column98',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column199',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column198',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compBlCnt',value:'',displayMode:'label',expression:'sum(\'compQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compQty',value:'',displayMode:'label',expression:'sum(\'compQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'compWt',value:'',displayMode:'label',expression:'sum(\'compWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'compSellAmt',value:'',displayMode:'label',expression:'sum(\'compSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'compMarginalProfits',value:'',displayMode:'label',expression:'sum(\'compMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultBlCnt',value:'',displayMode:'label',expression:'sum(\'resultBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultQty',value:'',displayMode:'label',expression:'sum(\'resultQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultWt',value:'',displayMode:'label',expression:'sum(\'resultWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultSellAmt',value:'',displayMode:'label',expression:'sum(\'resultSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'resultMarginalProfits',value:'',displayMode:'label',expression:'sum(\'resultMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incBlCnt',value:'',displayMode:'label',expression:'sum(\'incBlCnt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incQty',value:'',displayMode:'label',expression:'sum(\'incQty\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incWt',value:'',displayMode:'label',expression:'sum(\'incWt\')',dataType:'number',displayFormat:'#,##0[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incSellAmt',value:'',displayMode:'label',expression:'sum(\'incSellAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'incMarginalProfits',value:'',displayMode:'label',expression:'sum(\'incMarginalProfits\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column82',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})