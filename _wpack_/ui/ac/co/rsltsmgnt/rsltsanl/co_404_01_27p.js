/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_27p.xml 25171 c649f9b7d23cfe30711c02ddcaaae4725630c7f9aa01f05bcc24c94d848f29cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchMonthCostResult'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'결산년도',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'고객코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'distYn',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_termYn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltrCd1',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_termYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dept'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_termYn',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_termYn',target:'data:json,{"id":"ds_termYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_termYn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dept',action:'',method:'post',mediatype:'application/json',ref:'data:json,dma_dept',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dept_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.closeMm1 = "";
scwin.closeMm2 = "";
scwin.closeYm1 = "";
scwin.closeYm2 = "";
scwin.preCloseYm1 = "";
scwin.preCloseYm2 = "";
scwin.unit = "";
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.hid_FromDate = "";

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
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
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, "450", "500", null, null);
      break;

    // 조회조건용 사업영역
    case '2':
      await udc_bizDomCdInfo.cfCommonPopUp(scwin.udc_bizDomCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, "1,,,,,", "450", "500", null, null);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_sacctDeptCd.setValue(rtnList[0]);
    ed_sacctDeptNm.setValue(rtnList[1]);
    if (!ed_sacctDeptCd.options) ed_sacctDeptCd.options = {};
    if (!ed_sacctDeptNm.options) ed_sacctDeptNm.options = {};
    ed_sacctDeptCd.options.hidVal = rtnList[0];
    ed_sacctDeptNm.options.hidVal = rtnList[1];
    dma_searchMonthCostResult.set("acctDeptLvl", rtnList[6]);
  } else {
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    if (!ed_sacctDeptCd.options) ed_sacctDeptCd.options = {};
    if (!ed_sacctDeptNm.options) ed_sacctDeptNm.options = {};
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptNm.options.hidVal = "";
    dma_searchMonthCostResult.set("acctDeptLvl", 0);
  }
};
scwin.udc_bizDomCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_sbizDomCd.setValue(rtnList[0]);
    ed_sbizDomNm.setValue(rtnList[1]);
    if (!ed_sbizDomCd.options) ed_sbizDomCd.options = {};
    if (!ed_sbizDomNm.options) ed_sbizDomNm.options = {};
    ed_sbizDomCd.options.hidVal = rtnList[0];
    ed_sbizDomNm.options.hidVal = rtnList[1];
    dma_searchMonthCostResult.set("acctDeptLvl", rtnList[6]);
  } else {
    ed_sbizDomCd.setValue("");
    ed_sbizDomNm.setValue("");
    if (!ed_sbizDomCd.options) ed_sbizDomCd.options = {};
    if (!ed_sbizDomNm.options) ed_sbizDomNm.options = {};
    ed_sbizDomCd.options.hidVal = "";
    ed_sbizDomNm.options.hidVal = "";
    dma_searchMonthCostResult.set("acctDeptLvl", 0);
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
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]);
    orgObjNm.setValue(rtnList[1]);
    if (!orgObjCd.options) orgObjCd.options = {};
    if (!orgObjNm.options) orgObjNm.options = {};
    orgObjCd.options.hidVal = rtnList[0];
    orgObjNm.options.hidVal = rtnList[1];
    dma_searchMonthCostResult.set("acctDeptLvl", rtnList[6]);
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    if (!orgObjCd.options) orgObjCd.options = {};
    if (!orgObjNm.options) orgObjNm.options = {};
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
    dma_searchMonthCostResult.set("acctDeptLvl", 0);
  }
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO032",
    compID: "lc_closeMn"
  }, {
    grpCd: "CO012",
    compID: "acb_unit"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  acb_unit.setSelectedIndex(1);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  ica_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));
  scwin.hid_FromDate = ica_FromDate.getValue();
  scwin.f_RetrieveTermYn();
  $c.gus.cfDisableKey($p);

  /* 날짜셋팅 */
  scwin.closeMm1 = lc_closeMn.getValue();
  scwin.closeMm2 = lc_closeMn.getValue();
  scwin.closeYm1 = ica_FromDate.getValue() + scwin.closeMm1;
  scwin.closeYm2 = ica_FromDate.getValue() + scwin.closeMm2;
};

//-------------------------------------------------------------------------
// 단위셋팅 
//-------------------------------------------------------------------------
scwin.f_changeUnit = function () {
  if (acb_unit.getValue() == "01") {
    scwin.unit = 1;
  } else if (acb_unit.getValue() == "02") {
    scwin.unit = 1000;
  } else if (acb_unit.getValue() == "03") {
    scwin.unit = 1000000;
  } else if (acb_unit.getValue() == "04") {
    scwin.unit = 100000000;
  }
};

//-------------------------------------------------------------------------
// 기간구분셋팅 
//-------------------------------------------------------------------------
scwin.f_changeTerm = function () {
  let termYn = ds_termYn.getCellData(lc_termYn.getSelectedIndex(), "cd");
  if (termYn != "0") {
    /* 분기단위 선택 시 */

    if (termYn == "1" || termYn == "2" || termYn == "3" || termYn == "4") {
      $c.gus.cfDisableObjects($p, [lc_closeMn]);
      let halfCloseYm = ds_termYn.getCellData(lc_termYn.getSelectedIndex(), "fltrCd1");
      scwin.closeMm1 = halfCloseYm.substring(0, 2);
      scwin.closeMm2 = halfCloseYm.substring(2, 4);
      scwin.closeYm1 = ica_FromDate.getValue() + scwin.closeMm1;
      scwin.closeYm2 = ica_FromDate.getValue() + scwin.closeMm2;
      scwin.preCloseYm1 = $c.date.addMonth($p, scwin.closeYm1 + "01", -3).substring(0, 6);
      scwin.preCloseYm2 = $c.date.addMonth($p, scwin.closeYm2 + "01", -3).substring(0, 6);

      /* 상.하반기 선택 시 */
    } else if (termYn == "5" || termYn == "6") {
      $c.gus.cfDisableObjects($p, [lc_closeMn]);
      let halfCloseYm = ds_termYn.getCellData(lc_termYn.getSelectedIndex(), "fltrCd1");
      scwin.closeMm1 = halfCloseYm.substring(0, 2);
      scwin.closeMm2 = halfCloseYm.substring(2, 4);
      scwin.closeYm1 = ica_FromDate.getValue() + scwin.closeMm1;
      scwin.closeYm2 = ica_FromDate.getValue() + scwin.closeMm2;
      scwin.preCloseYm1 = $c.date.addMonth($p, scwin.closeYm1 + "01", -6).substring(0, 6);
      scwin.preCloseYm2 = $c.date.addMonth($p, scwin.closeYm2 + "01", -6).substring(0, 6);

      /* 년 단위 선택 시 */
    } else if (termYn == "7") {
      // 년 단위
      let preCloseYm = $c.date.addMonth($p, ica_FromDate.getValue() + "0101", -12).substring(0, 4);
      $c.gus.cfDisableObjects($p, [lc_closeMn]);
      scwin.closeYm1 = ica_FromDate.getValue() + '01';
      scwin.closeYm2 = ica_FromDate.getValue() + '12';
      scwin.preCloseYm1 = preCloseYm + '01';
      scwin.preCloseYm2 = preCloseYm + '12';
    }

    /* 월 단위 선택 시 */
  } else if (termYn == "0") {
    // 월 단위
    $c.gus.cfEnableObjects($p, [lc_closeMn]);
    let closeMm1 = lc_closeMn.getValue();
    let closeMm2 = lc_closeMn.getValue();
    scwin.closeYm1 = ica_FromDate.getValue() + closeMm1;
    scwin.closeYm2 = ica_FromDate.getValue() + closeMm2;
    scwin.preCloseYm1 = $c.date.addMonth($p, scwin.closeYm1 + "01", -1).substring(0, 6);
    scwin.preCloseYm2 = $c.date.addMonth($p, scwin.closeYm2 + "01", -1).substring(0, 6);
  }
};

//-------------------------------------------------------------------------
// 실적부서를 구한다.
//-------------------------------------------------------------------------
scwin.f_GetRsltsDept = async function () {
  // 사업영역이 NULL일경우 귀속부서는 필수 입력임
  if (ed_sacctDeptCd.getValue().trim() != "") {
    // 조회조건 필수사항 체크
    let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }
    const params = {
      sysCd: "ManagementProfitAndLossEBC",
      queryId: "retrievePlanComparisonResultsAcctDept",
      param1: ed_sacctDeptCd.getValue().trim(),
      param2: dma_searchMonthCostResult.get("lowerDeptIncluYn")
    };

    //데이터셋에 정보설정
    sbm_dept.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ManagementProfitAndLossEBC";
    dma_dept.setJSON(params);

    // 귀속부서가 NULL일경우 사업영역은 필수임
  } else if (ed_sbizDomCd.getValue().trim() != "") {
    // 조회조건 필수사항 체크
    let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sbizDomCd]);
    if (!ret) {
      return false;
    }
    const params = {
      sysCd: "BusinessDomainEBC",
      queryId: "retrievePlanComparisonResultsBizDomCd",
      param1: ed_sbizDomCd.getValue().trim(),
      param3: dma_searchMonthCostResult.get("lowerDeptIncluYn")
    };

    //데이터셋에 정보설정
    sbm_dept.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=BusinessDomainEBC";
    dma_dept.setJSON(params);
  } else {
    await $c.win.alert($p, "부서 혹은 사업영역중 하나는 필수 입력 입니다.");
    return;
  }
  $c.sbm.execute($p, sbm_dept);
};

//-------------------------------------------------------------------------
// 기간구분 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveTermYn = async function () {
  const params = {
    grpCd: "CO031",
    cd: "",
    cdNm: "",
    fltrCd1: ""
  };
  dma_termYn.setJSON(params);
  await $c.sbm.execute($p, sbm_termYn);
};

//-------------------------------------------------------------------------
// Default Term 을 설정
//-------------------------------------------------------------------------
scwin.f_SetDefaultTerm = function () {
  if (ds_termYn.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_termYn.getRowCount(); i++) {
    if (ds_termYn.getCellData(i, "fltrCd1") == DGlobalValue.TRUE) {
      index = i;
      break;
    }
  }
  lc_termYn.setSelectedIndex(index);
};

//-------------------------------------------------------------------------
// 기간별손익실적
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  dma_searchMonthCostResult.set("distYn", "1"); // 배부포함여부를 항상 포함으로 고정함.(2006.04.13)

  if (ed_sacctDeptCd.getValue().trim() != "") {
    // 조회조건 필수사항 체크
    let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }
    if (ica_FromDate.getValue().length < 4) {
      await $c.win.alert($p, "결산년도는 4자리수만큼 입력하십시오.");
      return;
    }
  } else if (ed_sbizDomCd.getValue().trim() != "") {
    // 조회조건 필수사항 체크
    let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_sbizDomCd]);
    if (!ret) {
      return false;
    }
    if (ica_FromDate.getValue().length < 4) {
      await $c.win.alert($p, "결산년도는 4자리수만큼 입력하십시오.");
      return;
    }
  } else {
    await $c.win.alert($p, "부서 혹은 사업영역중 하나는 필수 입력 입니다.");
    return;
  }
  if (ed_sacctDeptCd.getValue().trim() != "" && ed_sbizDomCd.getValue().trim() != "") {
    await $c.win.alert($p, "부서 혹은 사업영역중 하나만 입력할 수 있습니다.");
    return;
  }
  scwin.f_changeUnit();
  scwin.f_changeTerm();
  let data = {
    odiName: "co_404_01_27b",
    reportName: "ac/co/rsltsmgnt/rsltsanl/co_404_01_27b.ozr",
    odiParam: {
      closeYm1: scwin.closeYm1,
      closeYm2: scwin.closeYm2,
      preCloseYm1: scwin.preCloseYm1,
      preCloseYm2: scwin.preCloseYm2,
      acctDeptCd: ed_sacctDeptCd.getValue().trim(),
      acctDeptNm: ed_sacctDeptNm.getValue().trim(),
      bizDomCd: ed_sbizDomCd.getValue().trim(),
      bizDomNm: ed_sbizDomNm.getValue().trim(),
      unit: scwin.unit
    },
    viewerParam: {
      zoom: 100,
      useprogressbar: false,
      mode: "silent"
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};
scwin.udc_bizDomCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sbizDomCd, ed_sbizDomNm, '2', 'ALL');
};
scwin.btn_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_FromDate, ed_sacctDeptCd, ed_sacctDeptNm]);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_GetRsltsDept();
};
scwin.sbm_termYn_submitdone = function (e) {
  scwin.f_SetDefaultTerm();
};
scwin.sbm_searchMonthCostResult_submitdone = async function (e) {
  scwin.f_changeUnit();
  if (ds_monthCostResult.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    scwin.f_ClearPaging();
  } else {
    scwin.f_MoveToPage(1);
    scwin.f_CalPercent();
  }
};
scwin.sbm_dept_submitdone = function (e) {
  scwin.f_OzReport();
};
scwin.lc_termYn_onchange = function (info) {
  scwin.f_changeTerm();
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
scwin.udc_acctDeptCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};
scwin.udc_bizDomCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sbizDomCd, ed_sbizDomNm, '2', 'CD');
};
scwin.udc_bizDomCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sbizDomCd, ed_sbizDomNm, '2', 'NM');
};
scwin.acb_unit_onchange = function (info) {
  scwin.f_changeUnit();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:' cal',id:'ica_FromDate',style:'',mandatory:'true',objType:'data',validExp:'결산년도:yes:date=YYYY',displayFormat:'yyyy',editType:'select',ref:'data:dma_searchMonthCostResult.closeYm',title:'결산년도',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_termYn',class:' w100',direction:'auto',objType:'data',mandatory:'false',ref:'','ev:onchange':'scwin.lc_termYn_onchange',displayMode:'value delim label',title:'기간',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_termYn'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_closeMn',class:' w100',direction:'auto',objType:'data',mandatory:'false',displayMode:'value delim label',sortOption:'value',visibleRowNum:'20'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_sacctDeptCd',popupTitle:'',nameId:'ed_sacctDeptNm',style:'',validExpCode:'부서:yes:maxLength=5&number',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9 ',maxlengthCode:'5',editTypeCode:'select',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent',code:'acctDeptCd',refDataCollection:'dma_searchMonthCostResult',validTitle:'부서',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sbizDomCd',nameId:'ed_sbizDomNm',popupID:'',popupTitle:'',selectID:'retrieveBizDomCdInfo',style:'',validExpCode:'사업영역:yes:maxLength=3&number',objTypeCode:'data',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'3',allowCharCode:'0-9 ',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',id:'udc_bizDomCdInfo','ev:onclickEvent':'scwin.udc_bizDomCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bizDomCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bizDomCdInfo_onblurNameEvent',refDataCollection:'dma_searchMonthCostResult',code:'bizDomCd',validTitle:'사업영역',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'기간별손익실적 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:''}},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_unit',search:'start',style:'',submenuSize:'auto','ev:onchange':'scwin.acb_unit_onchange',title:'단위',sortOption:'value'}}]}]}]},{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''},E:[{T:3,text:'오즈불러오기'}]}]}]}]}]}]}]})