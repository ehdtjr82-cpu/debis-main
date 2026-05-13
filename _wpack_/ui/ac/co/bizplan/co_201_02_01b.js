/*amd /ui/ac/co/bizplan/co_201_02_01b.xml 66390 9fa43671f11ffd5ee80716a8ad2db9d6453c0efc36686be41b6800e8a77acf21 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchSellPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYr',name:'예산년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'구분코드(1:계획,2:확정)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrDeptYn',name:'집계부서여부(1:집계,2:일반)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_tempSellPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sellPlanClsCd',name:'매출계획코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellPlanClsNm',name:'매출계획명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jan',name:'1월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'feb',name:'2월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mar',name:'3월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apr',name:'4월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'may',name:'5월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jun',name:'6월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jul',name:'7월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aug',name:'8월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sep',name:'9월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oct',name:'10월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nov',name:'11월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dec',name:'12월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_upSellPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellPlanClsCd',name:'매출계획구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellPlanClsNm',name:'매출계획구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jan',name:'1월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'feb',name:'2월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mar',name:'3월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'apr',name:'4월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'may',name:'5월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jun',name:'6월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jul',name:'7월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aug',name:'8월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sep',name:'9월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oct',name:'10월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nov',name:'11월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dec',name:'12월',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크박스',dataType:'text',defaultValue:'F',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'month',name:'기준월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planYr',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellPlanClsCd',name:'매출계획코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellPlanClsNm',name:'매출계획명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalsum',name:'년계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jan',name:'1월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'feb',name:'2월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mar',name:'3월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'apr',name:'4월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'may',name:'5월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jun',name:'6월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jul',name:'7월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aug',name:'8월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sep',name:'9월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oct',name:'10월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nov',name:'11월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dec',name:'12월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'name1'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cd',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',defaultValue:'CO018',id:'grpCd',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'grpCdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_deptList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'COL1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'COL2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'COL3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'COL4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'COL5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'COL6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'COL7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'COL8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'COL9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'COL10'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchSellPlan',action:'/ac.co.bizplan.RetrieveSellingPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchSellPlan","key":"IN_DS1"},{"id":"ds_sellPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchSellPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVer',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_version',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSellPlan',action:'/ac.co.bizplan.SaveSellingPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_sellPlan","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveSellPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCodeCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_cd_submitdone','ev:submiterror':'',id:'sbm_cd',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_cd',replace:'',target:'data:json,{"id":"ds_cd","key":"GAUCE"}',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDept',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.G_acctDeptCd = scwin.memJson.acctDeptCd;
scwin.G_acctDeptNm = scwin.memJson.acctDeptNm;
scwin.G_empNo = scwin.memJson.empNo;
scwin.G_empNm = scwin.memJson.userNm;
scwin.G_userId = scwin.memJson.userId;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.checkUser = false;
scwin.checkPlanSave = false;
scwin.wrkNo = "";
scwin.fromDate = "";
scwin.hid_FromDate = "";
scwin.hid_version = "";
scwin.hid_acctDeptCd = "";
scwin.hid_acctDeptNm = "";
scwin.hid_bizDomCd = "";
scwin.hid_aggrDeptYn = "";
scwin.txtCoClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  let param_yy = ica_FromDate.getValue().trim() + "0101";

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  if (flag != "SKIP") {
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
  } else {
    cd = orgObjCd;
    nm = "";
  }
  switch (select_code) {
    // 조회조건용 부서 PopUp 호출
    case '1':
      // 부서조회    
      let param = param_yy + ",,,,,,,,," + ed_coCd.getValue();
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, ed_sacctDeptCd.getValue().trim(), ed_sacctDeptNm.getValue().trim(), flag, null, null, null, null, param, null, null, null, null);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sacctDeptCd.setValue(rtnList[0]);
    ed_sacctDeptNm.setValue(rtnList[1]);
    if (!ed_sacctDeptCd.options) ed_sacctDeptCd.options = {};
    if (!ed_sacctDeptNm.options) ed_sacctDeptNm.options = {};
    ed_sacctDeptCd.options.hidVal = rtnList[0];
    ed_sacctDeptNm.options.hidVal = rtnList[1];
    scwin.hid_bizDomCd = rtnList[3]; // 사업영역코드값
    scwin.hid_aggrDeptYn = rtnList[8]; // 집계부서여부 1:집계부서, 0:일반부서
  } else {
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    if (!ed_sacctDeptCd.options) ed_sacctDeptCd.options = {};
    if (!ed_sacctDeptNm.options) ed_sacctDeptNm.options = {};
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptNm.options.hidVal = "";
    scwin.hid_bizDomCd = ""; // 사업영역코드값
    scwin.hid_aggrDeptYn = ""; // 집계부서여부
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
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      $c.gus.cfSetHiddenValue($p, orgObjCd, "");
      $c.gus.cfSetHiddenValue($p, orgObjNm, "");
      return;
    }
    orgObjCd.setValue(rtnList[0]);
    orgObjNm.setValue(rtnList[1]);
    if (!orgObjCd.options) orgObjCd.options = {};
    if (!orgObjNm.options) orgObjNm.options = {};
    orgObjCd.options.hidVal = rtnList[0];
    orgObjNm.options.hidVal = rtnList[1];
    scwin.hid_bizDomCd = rtnList[3]; // 사업영역코드값
    scwin.hid_aggrDeptYn = rtnList[8]; // 집계부서여부 1:집계부서, 0:일반부서
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    if (!orgObjCd.options) orgObjCd.options = {};
    if (!orgObjNm.options) orgObjNm.options = {};
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
    scwin.hid_bizDomCd = ""; // 사업영역코드값
    scwin.hid_aggrDeptYn = ""; // 집계부서여부
  }
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));
  ed_sacctDeptCd.focus();
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO027",
    compID: "gr_sellPlan:month"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
  $c.sbm.execute($p, sbm_cd);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = async function () {
  scwin.f_SetSrchDefault();
  scwin.f_LoadVer();
  scwin.hid_FromDate = ica_FromDate.getValue();
  scwin.hid_version = acb_version.getValue();
  acb_clsCd.getSelectedIndex(0);

  // 로그인 사용자의 사업영역코드를 가져온다.
  let cd = scwin.G_acctDeptCd;
  await udc_acctDeptCdInfo.cfCommonPopUp(scwin.comCode_callBackFunc, cd, '', "T", null, null, null, null, ",,,0,", "450", "500", null, "T", null, null, null, "T"); // 부서
};
scwin.comCode_callBackFunc = function (rtnList) {
  // SET	
  if (rtnList == "N/A") {
    scwin.hid_bizDomCd = "";
  } else {
    scwin.hid_bizDomCd = rtnList[3];
  }
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd, acb_version, acb_clsCd, ed_coCd]);
  if (!ret) {
    return false;
  }
  const params = {
    "bizDomCd": scwin.hid_bizDomCd,
    "aggrDeptYn": scwin.hid_aggrDeptYn
  };

  //데이터셋에 정보설정
  dma_searchSellPlan.setJSON(params);
  $c.sbm.execute($p, sbm_searchSellPlan);
};

//-------------------------------------------------------------------------
// 행추가 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  // 필수 입력사항 체크
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd, acb_version]);
  if (!ret) {
    return false;
  }
  let newRow = ds_sellPlan.insertRow();

  // 신규입력된 Row는 수정 가능 상태로 변경
  if (ds_sellPlan.getRowStatus(newRow) == "C") {
    gr_sellPlan.setColumnReadOnly("sellPlanClsCd", false);
  } else {
    gr_sellPlan.setColumnReadOnly("sellPlanClsCd", true);
  }
  ds_sellPlan.setCellData(newRow, "ver", acb_version.getValue());
  ds_sellPlan.setCellData(newRow, "planYr", ica_FromDate.getValue().trim());
  ds_sellPlan.setCellData(newRow, "acctDeptCd", ed_sacctDeptCd.getValue().trim());
  ds_sellPlan.setCellData(newRow, "month", "1");
  ds_sellPlan.setCellData(newRow, "coCd", ed_coCd.getValue());
};

//-------------------------------------------------------------------------
// 행삭제 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  let rowIndex = gr_sellPlan.getFocusedRowIndex();
  if (ds_sellPlan.getRowStatus(rowIndex) == "C") {
    ds_sellPlan.removeRow(rowIndex);
  } else {
    ds_sellPlan.deleteRow(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 취소 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  let rowIndex = gr_sellPlan.getFocusedRowIndex();
  if (ds_sellPlan.getRowStatus(rowIndex) == "C") {
    $c.data.undoRow($p, ds_sellPlan, "Y");
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    gr_sellPlan.setColumnVisible("sellPlanClsCd", true);
    gr_sellPlan.setColumnVisible("month", false);
    gr_sellPlan.setColumnVisible("num", false);
    let exportFileName = "매출계획등록_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_FromDate.getValue().trim() + "_ver_" + acb_version.getValue();
    await $c.data.downloadGridViewExcel($p, gr_sellPlan, {
      fileName: exportFileName + ".xlsx",
      sheetName: "매출계획등록",
      useFooter: false,
      columnMove: true,
      columnMoveWithFooter: true
    });
    gr_sellPlan.setColumnVisible("sellPlanClsCd", false);
    gr_sellPlan.setColumnVisible("month", true);
    gr_sellPlan.setColumnVisible("num", true);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 업로드
//-------------------------------------------------------------------------
scwin.f_Import = async function () {
  let json;
  let cd = "";
  let nm = "";
  let sellPlanClsCd = "";
  for (let i = 0; i < ds_upSellPlan.getRowCount(); i++) {
    let rowIdx = ds_sellPlan.insertRow();
    gr_sellPlan.setCellDisabled(i, "num", true);
    gr_sellPlan.setHeaderDisabled("h_num", true);
    // 매출계획코드가 정상적으로 입력되어 있는지 확인함.
    sellPlanClsCd = $c.gus.cfGetLeftPad($p, ds_upSellPlan.getCellData(i, "sellPlanClsCd"), 3);
    if ($c.gus.cfIsNull($p, ds_upSellPlan.getCellData(i, "sellPlanClsCd"))) {
      await $c.win.alert($p, i + 1 + "번째 행의 매출계획코드 코드값이 없습니다. 확인하시기 바랍니다.");
      return;
    }
    // 매출계획코드가 숫자가 아닐경우 오류표시
    for (let j = 0; j <= 2; j++) {
      if (!(await $c.gus.cfIsIn($p, sellPlanClsCd.substring(j, j + 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))) {
        await $c.win.alert($p, i + 1 + "번째 행의 매출계획코드가 잘못 입력 되었습니다.");
        ds_sellPlan.setCellData(i, "jan", 0);
        ds_sellPlan.setCellData(i, "feb", 0);
        ds_sellPlan.setCellData(i, "mar", 0);
        ds_sellPlan.setCellData(i, "apr", 0);
        ds_sellPlan.setCellData(i, "may", 0);
        ds_sellPlan.setCellData(i, "jun", 0);
        ds_sellPlan.setCellData(i, "jul", 0);
        ds_sellPlan.setCellData(i, "aug", 0);
        ds_sellPlan.setCellData(i, "sep", 0);
        ds_sellPlan.setCellData(i, "oct", 0);
        ds_sellPlan.setCellData(i, "nov", 0);
        ds_sellPlan.setCellData(i, "dec", 0);
        return;
      }
    }
    ds_sellPlan.setCellData(i, "sellPlanClsCd", $c.gus.cfGetLeftPad($p, ds_upSellPlan.getCellData(i, "sellPlanClsCd"), 3));
    ds_sellPlan.setCellData(i, "sellPlanClsNm", ds_upSellPlan.getCellData(i, "sellPlanClsNm"));

    //귀속부서코드 존재유무 확인 없을경우 귀속부서코드와 코드명을 공백처리함.
    ds_deptList.removeAll();
    json = {};
    json.sysCd = "CommonEBC";
    json.queryId = "retrieveSellPlanClsCdInfo";
    json.param1 = $c.gus.cfGetLeftPad($p, ds_upSellPlan.getCellData(i, "sellPlanClsCd"), 3);
    json.param3 = ica_FromDate.getValue();
    json.param4 = ed_coCd.getValue();
    let ret = await $c.sbm.execute($p, sbm_retrieveDept, json);
    ds_deptList.setJSON(ret.responseJSON.GAUCE);
    if (ds_deptList.getRowCount() == 0) {
      ds_sellPlan.setCellData(i, "sellPlanClsCd", "");
      ds_sellPlan.setCellData(i, "sellPlanClsNm", "");
    } else {
      ds_sellPlan.setCellData(i, "sellPlanClsCd", ds_deptList.getCellData(0, "col1"));
      ds_sellPlan.setCellData(i, "sellPlanClsNm", ds_deptList.getCellData(0, "col2"));
    }
    ds_sellPlan.setCellData(i, "ver", acb_version.getValue());
    ds_sellPlan.setCellData(i, "planYr", ica_FromDate.getValue().trim());
    ds_sellPlan.setCellData(i, "acctDeptCd", ed_sacctDeptCd.getValue().trim());
    ds_sellPlan.setCellData(rowIdx, "month", "1");
    //ds_sellPlan.setCellData(i,"num","F");

    ds_sellPlan.setCellData(i, "jan", ds_upSellPlan.getCellData(i, "jan"));
    ds_sellPlan.setCellData(i, "feb", ds_upSellPlan.getCellData(i, "feb"));
    ds_sellPlan.setCellData(i, "mar", ds_upSellPlan.getCellData(i, "mar"));
    ds_sellPlan.setCellData(i, "apr", ds_upSellPlan.getCellData(i, "apr"));
    ds_sellPlan.setCellData(i, "may", ds_upSellPlan.getCellData(i, "may"));
    ds_sellPlan.setCellData(i, "jun", ds_upSellPlan.getCellData(i, "jun"));
    ds_sellPlan.setCellData(i, "jul", ds_upSellPlan.getCellData(i, "jul"));
    ds_sellPlan.setCellData(i, "aug", ds_upSellPlan.getCellData(i, "aug"));
    ds_sellPlan.setCellData(i, "sep", ds_upSellPlan.getCellData(i, "sep"));
    ds_sellPlan.setCellData(i, "oct", ds_upSellPlan.getCellData(i, "oct"));
    ds_sellPlan.setCellData(i, "nov", ds_upSellPlan.getCellData(i, "nov"));
    ds_sellPlan.setCellData(i, "dec", ds_upSellPlan.getCellData(i, "dec"));

    // 인원수에 대한 자릿수를 체크한다. 
    if (ds_upSellPlan.getCellData(i, "jan") > 999999999) {
      await $c.win.alert($p, "1월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "feb") > 999999999) {
      await $c.win.alert($p, "2월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "mar") > 999999999) {
      await $c.win.alert($p, "3월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "apr") > 999999999) {
      await $c.win.alert($p, "4월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "may") > 999999999) {
      await $c.win.alert($p, "5월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "jun") > 999999999) {
      await $c.win.alert($p, "6월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "jul") > 999999999) {
      await $c.win.alert($p, "7월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "aug") > 999999999) {
      await $c.win.alert($p, "8월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "sep") > 999999999) {
      await $c.win.alert($p, "9월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "oct") > 999999999) {
      await $c.win.alert($p, "10월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "nov") > 999999999) {
      await $c.win.alert($p, "11월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (ds_upSellPlan.getCellData(i, "dec") > 999999999) {
      await $c.win.alert($p, "12월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    ds_sellPlan.setCellData(i, "coCd", ed_coCd.getValue().trim());
  }
  // 엑셀파일 Import가 정상종료시 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  scwin.hid_FromDate = ica_FromDate.getValue();
  scwin.hid_version = acb_version.getValue();
  scwin.hid_acctDeptCd = ed_sacctDeptCd.getValue();
  scwin.hid_acctDeptNm = ed_sacctDeptNm.getValue();
  ds_upSellPlan.removeAll();
  totalRows.setValue(ds_sellPlan.getRowCount());
};

/**
 * 엑셀 파일 업로드
 */
scwin.f_excelUpload = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, acb_version, ed_sacctDeptCd, ed_coCd]);
  if (!ret) {
    return false;
  }
  let msg = ica_FromDate.getValue().substring(0, 4) + "년 ";
  msg += acb_version.getValue() + "버젼으로 엑셀파일 Import를 하시겠습니까?";
  if (await $c.win.confirm($p, msg)) {
    if (excelUdc.getUpExt() == "1") {
      let options = {
        "fileName": "gridDataUpload.csv",
        "status": "C",
        "header": 1,
        "type": "1",
        "startRowIndex": 0,
        "footerExist": 0
      };
      ds_upSellPlan.removeAll();
      await $c.data.uploadGridViewCSV($p, gr_excel, options);
    } else {
      let options = {
        "fileName": "gridDataUpload.xlsx",
        "status": "C",
        "headerExist": 1,
        "useMaxByteLength": ",",
        "type": "1",
        "startRowIndex": 0,
        "footerExist": 0
      };
      ds_upSellPlan.removeAll();
      await $c.data.uploadGridViewExcel($p, gr_excel, options);
    }
  } else {
    return false;
  }
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
    if (ds_version.getCellData(i, "col3") == DGlobalValue.TRUE) {
      index = i;
      break;
    }
  }
  acb_version.setSelectedIndex(index);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 마감여부 확인 
  if (!(await scwin.f_JobCloseYN())) {
    return;
  }
  if (scwin.checkPlanSave == false) {
    await $c.win.alert($p, "확정으로 조회한 데이타는 계획으로 저장 하실 수 없습니다.");
    return;
  }
  if (ica_FromDate.getValue().trim() != scwin.hid_FromDate || ed_sacctDeptCd.getValue().trim() != scwin.hid_acctDeptCd || acb_version.getValue() != scwin.hid_version) {
    await $c.win.alert($p, "조회 조건인 예산년도, 버전, 부서코드 변경되어서 저장 하실 수 없습니다. 재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_sellPlan, ed_coCd]);
  if (!ret) {
    return false;
  }
  for (let i = 0; i < ds_sellPlan.getRowCount(); i++) {
    if (ds_sellPlan.getRowStatus(i) == "C") {
      for (let j = 0; j < i; j++) {
        if (ds_sellPlan.getCellData(i, "sellPlanClsCd") == ds_sellPlan.getCellData(j, "sellPlanClsCd")) {
          await $c.win.alert($p, "매출계획등록의 " + (i + 1) + "번째 데이터에서 매출계획코드드은(는) 중복될 수 없습니다.");
          ds_sellPlan.setFocusedCell(i, "sellPlanClsCd", true);
          return false;
        }
      }
    }
  }
  if (scwin.hid_aggrDeptYn == 1) {
    await $c.win.alert($p, "집계부서(" + ds_sellPlan.getCellData(0, "acctDeptCd") + ")는 저장할수 없습니다.");
    return;
  }

  // 변경된 사항이 있는지 확인.
  if (ds_sellPlan.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (acb_version.getDisabled()) {
    await $c.win.alert($p, "해당 년월의 버전정보가 없습니다. 관리실적버전에서 버전을 등록하시기 바랍니다.");
    return;
  }
  let msg = ica_FromDate.getValue().substring(0, 4) + "년 ";
  msg += acb_version.getValue() + "버젼으로 저장하시겠습니까?";
  if (await $c.win.confirm($p, msg)) {
    for (let i = 0; i < ds_sellPlan.getRowCount(); i++) {
      if (ds_sellPlan.getRowStatus(i) !== "D") {
        ds_sellPlan.setCellData(i, "UserStatus", 1);
      }
    }
    $c.sbm.execute($p, sbm_saveSellPlan);
  }
};

//-------------------------------------------------------------------------
// 확정 버튼 클릭시 실행 되는 이벤트
//-------------------------------------------------------------------------
scwin.f_Confirm = async function () {
  // 마감여부 확인 
  if (!(await scwin.f_JobCloseYN())) {
    return;
  }
  if (ica_FromDate.getValue().trim() != scwin.hid_FromDate || ed_sacctDeptCd.getValue().trim() != scwin.hid_acctDeptCd || acb_version.getValue() != scwin.hid_version) {
    await $c.win.alert($p, "조회 조건인 예산년도, 버전, 부서코드 변경되어서 저장 하실 수 없습니다. 재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_sellPlan]);
  if (!ret) {
    return false;
  }
  if (acb_version.getDisabled()) {
    // Enable == false
    await $c.win.alert($p, "해당 년월의 버전정보가 없습니다. 관리실적버전에서 버전을 등록하시기 바랍니다.");
    return;
  }
  let msg = ica_FromDate.getValue().substring(0, 4) + "년 ";
  msg += acb_version.getValue() + "버젼으로 확정하시겠습니까?";
  if (await $c.win.confirm($p, msg)) {
    for (let i = 0; i < ds_sellPlan.getRowCount(); i++) {
      if (ds_sellPlan.getRowStatus(i) !== "D") {
        ds_sellPlan.setCellData(i, "UserStatus", 1);
      }
    }
    $c.sbm.execute($p, sbm_saveSellPlan);
  }
};

//-------------------------------------------------------------------------
// 일괄적용 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Apply = async function () {
  let countCheck = 0;
  for (let i = 0; i < ds_sellPlan.getRowCount(); i++) {
    if (ds_sellPlan.getCellData(i, "num") == "T") {
      for (let j = parseInt(ds_sellPlan.getCellData(i, "month")) + 2; j <= 14; j++) {
        ds_sellPlan.setCellData(i, gr_sellPlan.getColumnID(j + 5), ds_sellPlan.getCellData(i, gr_sellPlan.getColumnID(parseInt(ds_sellPlan.getCellData(i, "month")) + 2 + 5)));
      }
      countCheck++;
    }
  }
  if (countCheck <= 0) {
    await $c.win.alert($p, "일괄적용을 하고자 하는 Row를 체크 하시기 바랍니다.");
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  let isClose = await udc_closeYn.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "", ed_coCd.getValue());
  if (isClose[3] == "PRE") {
    if (isClose[0] == "1") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (isClose[0] == "0") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }

  // 해당마감 작업에 대한 검사
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (isClose[0] == "2") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감완료가 되었습니다");
      return false;
    } else {
      return true;
    }
  }
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = function () {
  scwin.wrkNo = ACConstants.CLOSE_PLAN_CREATION;
  scwin.fromDate = ica_FromDate.getValue().trim() + "00";
};

//-------------------------------------------							
// 그리드 높이 늘리고 줄이기							
//-------------------------------------------							
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.isStart = true;
  scwin.f_PopUpCompanyInfo('T', ed_coCd);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF, _coCd, _coClsCd) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, _coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coNm.setValue("");
    ed_coCd.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};
scwin.sbm_retrieveVer_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.sbm_searchSellPlan_submitdone = async function (e) {
  // 조회 조건이 계획으로 조회 했을경우 저장 가능으로 변경함.
  if (acb_clsCd.getValue() == "1") {
    scwin.checkPlanSave = true;
  } else {
    scwin.checkPlanSave = false;
  }
  gr_sellPlan.setFocusedCell(0, 1);

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  totalRows.setValue(ds_sellPlan.getRowCount());
  if (ds_sellPlan.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  gr_sellPlan.setHeaderDisabled("h_num", false);
  for (let i = 0; i < ds_sellPlan.getRowCount(); i++) {
    gr_sellPlan.setCellDisabled(i, "num", false);
    if (ds_sellPlan.getCellData(i, "num") == "") {
      ds_sellPlan.setCellData(i, "num", "F");
      ds_sellPlan.reform();
    }
  }

  // 집계부서일 경우는 조회 버튼을 제외한 모든 버튼이 사용불가
  if (scwin.hid_aggrDeptYn == "1") {
    $c.gus.cfDisableObjects($p, [excelUdc, btn_apply, btn_save]);
    if (scwin.checkUser) {
      $c.gus.cfDisableObjects($p, [btn_confirm]);
    }
    gr_sellPlan.setReadOnly(true);
  } else {
    $c.gus.cfEnableObjects($p, [excelUdc, btn_apply, btn_save]);
    if (scwin.checkUser) {
      $c.gus.cfEnableObjects($p, [btn_confirm]);
    }
    gr_sellPlan.setReadOnly(false);
  }
  // 정상조회후 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  scwin.hid_FromDate = ica_FromDate.getValue();
  scwin.hid_version = acb_version.getValue();
  scwin.hid_acctDeptCd = ed_sacctDeptCd.getValue();
  scwin.hid_acctDeptNm = ed_sacctDeptNm.getValue();
};
scwin.sbm_saveSellPlan_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.gr_sellPlan_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "sellPlanClsCd" && ds_sellPlan.getRowStatus(ds_sellPlan.getRowPosition()) == "C") {
    gr_sellPlan.setColumnReadOnly("sellPlanClsCd", false);
  } else {
    gr_sellPlan.setColumnReadOnly("sellPlanClsCd", true);
  }
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
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T', ed_coCd);
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', ed_coCd);
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};
scwin.btn_reset_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_FromDate, ed_sacctDeptCd, ed_sacctDeptNm, acb_version]);
};
scwin.sbm_cd_submitdone = function (e) {
  let coList = ds_cd.getColData("cdDesc");
  let isMatch = coList.includes(scwin.memJson.userId);
  if (isMatch) {
    btn_confirm.setStyle("display", "block");
  } else {
    btn_confirm.setStyle("display", "none");
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_excel_onfilereadend = function (value) {
  ds_sellPlan.removeAll();
  scwin.f_Import();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 45px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',class:'',codeId:'ed_coCd',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:'',validExpCode:'회사코드:yes',id:'udc_dongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',code:'coCd',refDataCollection:'dma_searchSellPlan',selectID:'retrieveDongbuGroupCompanyInfo',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_FromDate',style:'',mandatory:'true',objType:'data',validExp:'예산년도:yes:date=YYYY',placeholder:' ',displayFormat:'yyyy',validateOnInput:'true','ev:onblur':'scwin.ica_FromDate_onblur',ref:'data:dma_searchSellPlan.planYr',title:'예산년도'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_version',search:'start',style:'width:130px;',submenuSize:'auto',mandatory:'true',validExp:'버전:yes:number',disabled:'false',allOption:'',chooseOption:'',ref:'data:dma_searchSellPlan.ver',title:'버전'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'w2:label',A:{ref:'col4'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_sacctDeptCd',validExpCode:'부서:yes:maxLength=5&number',objTypeCode:'data',allowCharCode:'0-9 ',maxlengthCode:'5',nameId:'ed_sacctDeptNm',mandatoryName:'true',objTypeName:'data',maxlengthName:'20',editTypeName:'select',id:'udc_acctDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',refDataCollection:'dma_searchSellPlan',code:'acctDeptCd',selectID:'retrieveAcctDeptCdInfo',mandatoryCode:'true',validTitle:'부서',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_clsCd',search:'start',style:'width:80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_searchSellPlan.clsCd',disabled:'false',displayMode:'value delim label',title:'계획'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출계획등록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_sellPlan',id:'excelUdc',gridDownUserAuth:'X',btnUser:'N',gridDownFn:'scwin.f_Export',gridUpFn:'scwin.f_excelUpload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_sellPlan',id:'gr_sellPlan',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',validFeatures:'ignoreStatus=no',validExp:'acctDeptCd:귀속부서코드:yes:number&length=5,sellPlanClsCd:매출계획코드:yes:number&length=3:key,ver:버전:yes:number,planYr:예산년도:date=YYYY',columnMove:'true',editModeEvent:'ondblclick','ev:oncellclick':'scwin.gr_sellPlan_oncellclick',rowStatusWidth:'20',rowStatusVisible:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true',fixedColumn:'1',gridName:'매출계획등록'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'h_num',inputType:'checkbox',removeBorderStyle:'false',width:'50',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'month',inputType:'text',removeBorderStyle:'false',width:'70',value:'기준월'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ver',value:'버전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planYr',value:'계획년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellPlanClsCd',value:'매출계획구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellPlanClsNm',inputType:'text',removeBorderStyle:'false',width:'120',value:'매출계획구분명'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptCd',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'totalsum',inputType:'text',removeBorderStyle:'false',width:'100',value:'년계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jan',inputType:'text',value:'1월',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'feb',inputType:'text',value:'2월',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mar',inputType:'text',value:'3월',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apr',inputType:'text',value:'4월',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'may',inputType:'text',value:'5월',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jun',value:'6월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jul',value:'7월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'aug',value:'8월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sep',value:'9월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'oct',value:'10월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'nov',value:'11월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dec',value:'12월',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coCd',value:'회사구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'num',inputType:'checkbox',removeBorderStyle:'false',width:'50',trueValue:'T',valueType:'other',falseValue:'F'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'month',inputType:'select',removeBorderStyle:'false',width:'70',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ver',displayMode:'label',mandatory:'true',allowChar:'0-9',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planYr',displayMode:'label',dataType:'date',maxLength:'4',allowChar:'0-9',displayFormat:'yyyy',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellPlanClsCd',displayMode:'label',mandatory:'true',allowChar:'0-9',maxLength:'3',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellPlanClsNm',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptCd',displayMode:'label',hidden:'true',mandatory:'true',maxLength:'5',allowChar:'0-9'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'totalsum',inputType:'expression',removeBorderStyle:'false',width:'100',textAlign:'right',expression:'Number(display("jan")) + Number(display("feb")) + Number(display("mar")) + Number(display("apr")) + Number(display("may")) + Number(display("jun")) + Number(display("jul")) + Number(display("aug")) + Number(display("sep")) + Number(display("oct")) + Number(display("nov")) + Number(display("dec"))',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jan',inputType:'text',width:'70',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'feb',inputType:'text',width:'70',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mar',inputType:'text',width:'70',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apr',inputType:'text',width:'70',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'may',inputType:'text',width:'70',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jun',displayMode:'label',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jul',displayMode:'label',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'aug',displayMode:'label',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sep',displayMode:'label',textAlign:'right',maxByteLength:'9',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'oct',displayMode:'label',textAlign:'right',allowChar:'0-9',maxByteLength:'9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'nov',displayMode:'label',textAlign:'right',allowChar:'0-9',maxByteLength:'9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dec',displayMode:'label',textAlign:'right',allowChar:'0-9',maxByteLength:'9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coCd',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column49',displayMode:'label',textAlign:'right',expression:'sum("totalsum")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum("jan")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column47',displayMode:'label',textAlign:'right',expression:'sum("feb")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column46',displayMode:'label',textAlign:'right',expression:'sum("mar")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'sum("apr")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column44',displayMode:'label',textAlign:'right',expression:'sum("may")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column43',displayMode:'label',textAlign:'right',expression:'sum("jun")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',expression:'sum("jul")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column41',displayMode:'label',textAlign:'right',expression:'sum("aug")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column40',displayMode:'label',textAlign:'right',expression:'sum("sep")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column39',displayMode:'label',textAlign:'right',expression:'sum("oct")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column38',displayMode:'label',textAlign:'right',expression:'sum("nov")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column37',displayMode:'label',textAlign:'right',expression:'sum("dec")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 천원)',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_apply',label:'저장',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_Apply'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Confirm',id:'btn_confirm',label:'저장',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;display:none;',id:'udc_closeYn'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveSellPlanClsCdInfo',codeId:'ed_sellPlanClsCd',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'ed_sellPlanClsNm',style:'width:%; height:px; ;visibility:hidden;display:none;',id:'udc_sellPlanClsCdInfo'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',columnMove:'true',columnMoveWithFooter:'true',dataList:'data:ds_upSellPlan',editModeEvent:'ondblclick','ev:oncellclick':'scwin.gr_sellPlan_oncellclick',id:'gr_excel',rowStatusWidth:'20',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:';display:none;',validExp:'acctDeptCd:귀속부서코드:yes:number&length=5,sellPlanClsCd:매출계획코드:yes:number&length=3:key,ver:버전:yes:number,planYr:예산년도:date=YYYY',validFeatures:'ignoreStatus=no',visibleRowNum:'13',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption12',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',value:'매출계획구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellPlanClsNm',inputType:'text',removeBorderStyle:'false',value:'매출계획구분명',width:'120'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'jan',inputType:'text',value:'1월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'feb',inputType:'text',value:'2월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'mar',inputType:'text',value:'3월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'apr',inputType:'text',value:'4월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'may',inputType:'text',value:'5월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'jun',inputType:'text',value:'6월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'jul',inputType:'text',value:'7월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'aug',inputType:'text',value:'8월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'sep',inputType:'text',value:'9월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'oct',inputType:'text',value:'10월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'nov',inputType:'text',value:'11월',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'dec',inputType:'text',value:'12월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCd',inputType:'text',value:'회사구분',width:'0'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellPlanClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'false',id:'sellPlanClsNm',inputType:'text',readOnly:'true',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'jan',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'feb',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'mar',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'apr',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'may',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'jun',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'jul',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'aug',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'sep',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'oct',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'nov',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'dec',inputType:'text',maxByteLength:'9',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'coCd',inputType:'text',width:'0'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("jan")',id:'column48',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("feb")',id:'column47',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("mar")',id:'column46',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("apr")',id:'column45',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("may")',id:'column44',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("jun")',id:'column43',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("jul")',id:'column42',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("aug")',id:'column41',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("sep")',id:'column40',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("oct")',id:'column39',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("nov")',id:'column38',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("dec")',id:'column37',inputType:'expression',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',width:'0'}}]}]}]}]}]}]}]}]})