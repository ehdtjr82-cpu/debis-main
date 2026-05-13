/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_14b.xml 50927 131ea49090127b55128c3138e6d407110a8869848c20bfa540eccbeb757dcb18 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_closeYm_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'ManagementProfitAndLossEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveManagementProfitAndLossCloseYm'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeYm',saveRemovedData:'true','ev:ondataload':'scwin.ds_closeYm_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_version_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'CommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveVersionInfo'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true','ev:ondataload':'scwin.ds_version_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchSellPlan',useNull:'true',nullYNType:'null'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrDeptYn',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellClsCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellPlanDetail',saveRemovedData:'true','ev:ondataload':'scwin.ds_detail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellClsCd',name:'매출거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'청구거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'실적금액',dataType:'number',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellPlan',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsSellClsNm',name:'구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'upperSellClsNm',name:'사업부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellClsNm',name:'매출구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'yrPlanAmt',name:'년간계획',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisBefRsltsAmt',name:'년간계획_전기',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisPlanAmt',name:'년간계획_계획',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'년간계획_실적',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisVariation',name:'년간계획_증감',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisMonthAmt',name:'당월',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cumBefRsltsAmt',name:'당월_전기실적',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cumPlanAmt',name:'당월_계획',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cumRsltsAmt',name:'당월_실적',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cumVariation',name:'당월_증감',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellClsCd',name:'매출구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'upperSellClsCd',name:'상위매출구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'상위매출구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thisMonth',name:'당월',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'surpress1',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdDesc',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_unit_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hid_FromDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_version',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_acctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_acctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_bizDomCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_aggrDeptYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_sysCd',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_closeYm',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_closeYm_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_version',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_version_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchSellPlan',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveSellingPlanComparisonResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchSellPlan","key":"IN_DS1"},{"id":"ds_sellPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchSellPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchSellPlanDetail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveSellingPlanComparisonDetailResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchSellPlan","key":"IN_DS1"},{"id":"ds_sellPlanDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellPlanDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchSellPlanDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_unit',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_unit_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strFromDate = scwin.sDate.substring(0, 6);

  // 버튼 권한을 가져온다.
  // CodeDTOCache codeDTOCache = CodeDTOCache.getInstance();
  // boolean checkUser = false;	// 확정버튼 사용권한이 있는지여부 확인 초기값 false
  // CodeDTO codeDTO[] = codeDTOCache.getCodeDTOArray("CO018");		// 권한코드를 가져온다.
  // Vector vGrantUser = new Vector();
  // for (int i=0; i<codeDTO.length; i++ ) {
  //     vGrantUser.add(codeDTO[i].getCdDesc());
  // }

  scwin.login = $c.data.getMemInfo($p, "");
  scwin.G_acctDeptCd = scwin.login.acctDeptCd;
  scwin.G_acctDeptNm = scwin.login.acctDeptNm;
  scwin.G_empNo = scwin.login.empNo;
  scwin.G_empNm = scwin.login.userNm;
  scwin.G_userId = scwin.login.userId;
  scwin.fromDate = ""; // 작업날짜
  const codeOptions = [{
    grpCd: "CO019",
    compID: "lc_clsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};
scwin.setCommonCodeCallBack = async function () {
  $c.gus.cfDisableKey($p);
  //ica_FromDate.Text = strFromDate;
  await scwin.f_CloseYm();
  await scwin.f_LoadVer();
  await scwin.f_GetUnit();

  // 로그인 사용자의 사업영역코드를 가져온다.
  cd = scwin.G_acctDeptCd;
  udc_sacctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
  udc_sacctDeptCd.cfCommonPopUp(function (rtnList) {
    if (rtnList == "N/A") {
      ds_hidden.set("hid_bizDomCd", "");
    } else {
      ds_hidden.set("hid_bizDomCd", rtnList[3]);
    }
  }, cd, '', "T", null, null, null, null, ",,,0,", "450", "500", null, "T", null, null, null, "T"); // 부서

  // 사업영역의 시스템구분코드를 구함.
  cd = ds_hidden.get("hid_bizDomCd");
  udc_commonPop.setSelectId('retrieveBizDomCdInfo');
  udc_commonPop.cfCommonPopUp(function (rtnList) {
    if (rtnList == "N/A") {
      ds_hidden.set("hid_sysCd", rtnList[2]);
    } else {
      ds_hidden.set("hid_sysCd", rtnList[2]);
    }
  }, cd, '', "T", null, null, null, null, "1,,,,", "450", "500", null, "T", null, null, null, "T");
  lc_clsCd.setSelectedIndex(0);
  gr_sellPlan.setHeaderValue("thisMm", ica_FromDate.getValue().substring(4, 6) + "월 당월");
  gr_sellPlan.setHeaderValue("cumMm", ica_FromDate.getValue().substring(4, 6) + "월 누계");
  lc_version.setSelectedIndex(1);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // $p.setTimeout(function() {
  //     ica_FromDate.setValue("201410");
  //     lc_version.setValue("001");
  //     ed_sacctDeptCd.setValue("00024");
  //     ed_sacctDeptCd.focus();
  //     ed_sacctDeptCd.blur();

  // }, {"delay":550});
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  var rtnList = new Array();

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
      udc_sacctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
      udc_sacctDeptCd.cfCommonPopUp(function (rtnList) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, cd, nm, "T", null, null, null, null, null, "450", "500", null, null); // 부서
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
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
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명

    ds_hidden.set("hid_bizDomCd", rtnList[3]); // 사업영역코드값
    ds_hidden.set("hid_aggrDeptYn", rtnList[8]); // 집계부서여부 1:집계부서, 0:일반부서
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
    ds_hidden.set("hid_bizDomCd", ""); // 사업영역코드값
    ds_hidden.set("hid_aggrDeptYn", ""); // 집계부서여부
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_FromDate, ed_sacctDeptCd, lc_version, lc_clsCd]))) {
    return;
  }
  ds_searchSellPlan.set("fromDate", ica_FromDate.getValue().trim());
  ds_searchSellPlan.set("acctDeptCd", ed_sacctDeptCd.getValue().trim());
  ds_searchSellPlan.set("ver", lc_version.getValue());
  ds_searchSellPlan.set("bizDomCd", ds_hidden.get("hid_bizDomCd")); //사업영역코드
  ds_searchSellPlan.set("aggrDeptYn", ds_hidden.get("hid_aggrDeptYn")); // 집계부서여부
  ds_searchSellPlan.set("sysCd", ds_hidden.get("hid_sysCd")); // 시스템 영역 구분

  $c.sbm.execute($p, sbm_searchSellPlan);
};

//-------------------------------------------------------------------------
// 마지막 마감년월를 구한다.
//-------------------------------------------------------------------------	
scwin.f_CloseYm = async function () {
  var ebcId = "ManagementProfitAndLossEBC";
  var queryId = "retrieveManagementProfitAndLossCloseYm";
  ds_closeYm_search.set("sysCd", ebcId);
  ds_closeYm_search.set("queryId", queryId);
  var rs = await $c.sbm.execute($p, sbm_closeYm);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_closeYm.setJSON(rs.responseJSON.GAUCE);
    // co_ds_combo1.sort("code", 0);

    ica_FromDate.setValue(ds_closeYm.getCellData(0, "col1"));
  }
  ;
};

//-------------------------------------------------------------------------
// Ver정보를 가져온다.
//-------------------------------------------------------------------------
scwin.f_LoadVer = async function () {
  // 작업구분코드 및 날짜 세팅함수 호출
  // f_setWrkNoFromDate();
  scwin.fromDate = ica_FromDate.getValue().trim();
  ds_version_search.set("sysCd", "CommonEBC");
  ds_version_search.set("queryId", "retrieveVersionInfo");
  ds_version_search.set("param1", scwin.fromDate);
  var rs = await $c.sbm.execute($p, sbm_version);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_version.setJSON(rs.responseJSON.GAUCE);
    // co_ds_combo1.sort("code", 0);
  }
  ;

  // scwin.f_SetFinalVer();
  if (ds_version.getRowCount() < 1) return;
  var index = 0;
  for (i = 0; i < ds_version.getRowCount(); i++) {
    if (ds_version.getCellData(i, "col3") == DGlobalValue.TRUE) {
      lc_version.setSelectedIndex(i);
      break;
    }
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnitAmt = function () {
  // gr_sellPlan.setColumnDisplayFormatter("yrPlanAmt","value") = "{Round(yrPlanAmt/"+lc_unit.BindColVal+") }";
  // gr_sellPlan.setColumnDisplayFormatter("yrPlanAmt", "SumText")="{Sum(yrPlanAmt)/"+lc_unit.BindColVal+"}";

  gr_sellPlan.setColumnDisplayFormatter("yrPlanAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("thisBefRsltsAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("thisPlanAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("thisRsltsAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("thisVariation", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("cumBefRsltsAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("cumPlanAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("cumRsltsAmt", scwin.unitFormatt);
  gr_sellPlan.setColumnDisplayFormatter("cumVariation", scwin.unitFormatt);
};
scwin.unitFormatt = function (dataVal) {
  scwin.cunit = lc_unit.getValue();
  if ($c.gus.cfIsNull($p, dataVal) || !$c.num.isNumber($p, dataVal)) {
    return "0";
  } else {
    var setVal = dataVal / scwin.cunit;
    if (dataVal == 0) {
      return "0";
    } else {
      return $c.num.formatNumber($p, Math.round(setVal, 0), 0);
    }
  }
};

//-------------------------------------------------------------------------
// 금액단위를 구한다.
//-------------------------------------------------------------------------
scwin.f_GetUnit = async function () {
  ds_unit_search.set("grpCd", "CO012");
  ds_unit_search.set("cd", "");
  ds_unit_search.set("cdNm", "");
  var rs = await $c.sbm.execute($p, sbm_unit);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_unit.setJSON(rs.responseJSON.GAUCE);
    // co_ds_combo1.sort("code", 0);
    // ds_unit event=OnLoadCompleted(rowCnt)>
    scwin.f_SetDefaultUnit();
  }
  ;
};

//-------------------------------------------------------------------------
// Default Unit 을 설정
//-------------------------------------------------------------------------
scwin.f_SetDefaultUnit = function () {
  if (ds_unit.getRowCount() < 1) return;
  var index = 0;
  for (var i = 0; i < ds_unit.getRowCount(); i++) {
    if (ds_unit.getCellData(i, "fltrCd1") == DGlobalValue.TRUE) {
      lc_unit.setSelectedIndex(i);
      break;
    }
  }
};
scwin.f_SetGridFormat = function () {
  gr_sellPlan.setHeaderValue("thisMm", ica_FromDate.getValue().substring(4, 6) + " 당월");
  gr_sellPlan.setHeaderValue("cumMm", ica_FromDate.getValue().substring(4, 6) + " 누계");
};
scwin.f_runExcel = async function (varDs, varGrNm, sheetTitle) {
  var totCnt = varDs.getRowCount();
  if (totCnt != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const infoArr = [];
      const options = {
        fileName: sheetTitle + ".xlsx",
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: sheetTitle,
        type: "1",
        useFooter: true
        // startRowIndex: 2,
        // removeColumns: "0,21",
        // hiddenVisible : true,
        // useSubTotal :"true", 
        // useSubTotalData  : "true",
        // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
        // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
      };
      $c.data.downloadGridViewExcel($p, varGrNm, options, infoArr);
      // cfGridToExcel(varGrNm, sheetTitle, sheetTitle+".xls", 4+8+16);	
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.subSum = function () {
  var dsCnt = ds_sellPlan.getRowCount();
  var beCls = ""; //구분
  var aftCls = "";
  var beBiz = ""; //사업부
  var aftBiz = "";
  for (var i = 0; i < dsCnt; i++) {
    beCls = ds_sellPlan.getCellData(i, "pchsSellClsNm");
    aftCls = ds_sellPlan.getCellData(i + 1, "pchsSellClsNm");
    beBiz = ds_sellPlan.getCellData(i, "upperSellClsNm");
    aftBiz = ds_sellPlan.getCellData(i + 1, "upperSellClsNm");
    if (beCls == aftCls && beBiz != aftBiz || beCls != aftCls && beBiz == aftBiz || beCls != aftCls && beBiz != aftBiz) {
      var rowIndex = ds_sellPlan.insertRow(i + 1);
      ds_sellPlan.setCellData(i + 1, "pchsSellClsNm", beCls);
      ds_sellPlan.setCellData(i + 1, "upperSellClsNm", "사업부총액");
      scwin.subSumExpr(beCls, beBiz, i + 1, "S");
      // ds_sellPlan.ResetStatus();
      ds_sellPlan.initRowStatus();
      i++;
      dsCnt++;
    }
    ;
    if (beCls != aftCls) {
      var rowIndex = ds_sellPlan.insertRow(i + 1);
      ds_sellPlan.setCellData(i + 1, "pchsSellClsNm", beCls);
      ds_sellPlan.setCellData(i + 1, "upperSellClsNm", "구분총액");
      scwin.subSumExpr(beCls, beBiz, i + 1, "T");
      // ds_sellPlan.ResetStatus();
      ds_sellPlan.initRowStatus();
      i++;
      dsCnt++;
    }
    beCls = "";
    aftCls = "";
    beBiz = "";
    aftBiz = "";
  }
};
scwin.subSumExpr = function (strCls, strBiz, idx, knd) {
  var tmpCls = "";
  var tmpBiz = "";
  if (knd == "S") {
    for (var i = 0; i < ds_sellPlan.getRowCount(); i++) {
      tmpCls = ds_sellPlan.getCellData(i, "pchsSellClsNm");
      tmpBiz = ds_sellPlan.getCellData(i, "upperSellClsNm");
      if (tmpCls == strCls && tmpBiz == strBiz) {
        // 사업부에 따른 소계
        var nthisBefRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "thisBefRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(i, "thisBefRsltsAmt") * 1);
        var nthisPlanAmt = parseFloat(ds_sellPlan.getCellData(idx, "thisPlanAmt") * 1) + parseFloat(ds_sellPlan.getCellData(i, "thisPlanAmt") * 1);
        var nthisRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "thisRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(i, "thisRsltsAmt") * 1);
        var nthisVariation = parseFloat(ds_sellPlan.getCellData(idx, "thisVariation") * 1) + parseFloat(ds_sellPlan.getCellData(i, "thisVariation") * 1);
        var ncumBefRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "cumBefRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(i, "cumBefRsltsAmt") * 1);
        var ncumPlanAmt = parseFloat(ds_sellPlan.getCellData(idx, "cumPlanAmt") * 1) + parseFloat(ds_sellPlan.getCellData(i, "cumPlanAmt") * 1);
        var ncumRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "cumRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(i, "cumRsltsAmt") * 1);
        var ncumVariation = parseFloat(ds_sellPlan.getCellData(idx, "cumVariation") * 1) + parseFloat(ds_sellPlan.getCellData(i, "cumVariation") * 1);
        ds_sellPlan.setCellData(idx, "thisBefRsltsAmt", nthisBefRsltsAmt);
        ds_sellPlan.setCellData(idx, "thisPlanAmt", nthisPlanAmt);
        ds_sellPlan.setCellData(idx, "thisRsltsAmt", nthisRsltsAmt);
        ds_sellPlan.setCellData(idx, "thisVariation", nthisVariation);
        ds_sellPlan.setCellData(idx, "cumBefRsltsAmt", ncumBefRsltsAmt);
        ds_sellPlan.setCellData(idx, "cumPlanAmt", ncumPlanAmt);
        ds_sellPlan.setCellData(idx, "cumRsltsAmt", ncumRsltsAmt);
        ds_sellPlan.setCellData(idx, "cumVariation", ncumVariation);
      } // end if 
    } // end for
  } else {
    for (var j = 0; j < ds_sellPlan.getRowCount(); j++) {
      tmpCls = ds_sellPlan.getCellData(j, "pchsSellClsNm");
      if (tmpCls == strCls) {
        if (ds_sellPlan.getCellData(j, "upperSellClsNm") == "사업부총액") {
          var nthisBefRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "thisBefRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(j, "thisBefRsltsAmt") * 1);
          var nthisPlanAmt = parseFloat(ds_sellPlan.getCellData(idx, "thisPlanAmt") * 1) + parseFloat(ds_sellPlan.getCellData(j, "thisPlanAmt") * 1);
          var nthisRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "thisRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(j, "thisRsltsAmt") * 1);
          var nthisVariation = parseFloat(ds_sellPlan.getCellData(idx, "thisVariation") * 1) + parseFloat(ds_sellPlan.getCellData(j, "thisVariation") * 1);
          var ncumBefRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "cumBefRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(j, "cumBefRsltsAmt") * 1);
          var ncumPlanAmt = parseFloat(ds_sellPlan.getCellData(idx, "cumPlanAmt") * 1) + parseFloat(ds_sellPlan.getCellData(j, "cumPlanAmt") * 1);
          var ncumRsltsAmt = parseFloat(ds_sellPlan.getCellData(idx, "cumRsltsAmt") * 1) + parseFloat(ds_sellPlan.getCellData(j, "cumRsltsAmt") * 1);
          var ncumVariation = parseFloat(ds_sellPlan.getCellData(idx, "cumVariation") * 1) + parseFloat(ds_sellPlan.getCellData(j, "cumVariation") * 1);
          ds_sellPlan.setCellData(idx, "thisBefRsltsAmt", nthisBefRsltsAmt);
          ds_sellPlan.setCellData(idx, "thisPlanAmt", nthisPlanAmt);
          ds_sellPlan.setCellData(idx, "thisRsltsAmt", nthisRsltsAmt);
          ds_sellPlan.setCellData(idx, "thisVariation", nthisVariation);
          ds_sellPlan.setCellData(idx, "cumBefRsltsAmt", ncumBefRsltsAmt);
          ds_sellPlan.setCellData(idx, "cumPlanAmt", ncumPlanAmt);
          ds_sellPlan.setCellData(idx, "cumRsltsAmt", ncumRsltsAmt);
          ds_sellPlan.setCellData(idx, "cumVariation", ncumVariation);
        } // end if 
      } // end if 
    } // end for
  } // end if
}; // end fountion 

scwin.f_DetailSearch_Header = function (row) {
  ds_searchSellPlan.set("pchsSellClsCd", ds_sellPlan.getCellData(row, "pchsSellClsCd"));
  ds_searchSellPlan.set("sellClsCd", ds_sellPlan.getCellData(row, "sellClsCd"));

  //ds_searchSellPlan.set("fromDate") =  ica_FromDate.Text.trim() ;
  //ds_searchSellPlan.set("acctDeptCd") = ed_sacctDeptCd.Text.trim() ;
  //ds_searchSellPlan.set("ver") = lc_version.BindColVal  ;

  ds_searchSellPlan.set("bizDomCd", ds_sellPlan.getCellData(row, "bizDomCd")); // 사업영역코드
  ds_searchSellPlan.set("aggrDeptYn", ds_hidden.get("hid_aggrDeptYn")); // 집계부서여부
  ds_searchSellPlan.set("sysCd", ds_hidden.get("hid_sysCd")); // 시스템 영역 구분
};
scwin.ica_FromDate_onchange = function () {
  scwin.f_SetGridFormat();
};
scwin.ica_FromDate_onblur = async function (e) {
  await scwin.f_LoadVer();
  lc_version.setSelectedIndex(1);
};
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};
scwin.udc_sacctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
scwin.udc_sacctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};
scwin.btn_Clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_FromDate, ed_sacctDeptCd, ed_sacctDeptNm, lc_version]);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Excel = function () {
  scwin.f_runExcel(ds_sellPlan, gr_sellPlan, '매출실적비교표');
};
scwin.f_Excel2 = function () {
  scwin.f_runExcel(ds_sellPlanDetail, gr_sellPlanDetail, '매출실적상세표');
};
scwin.sbm_searchSellPlan_submitdone = async function (e) {
  // for=ds_sellPlan event=OnLoadCompleted(rowCnt)>
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  var rowCnt = ds_sellPlan.getRowCount();
  txt_totalRows.setValue(rowCnt);
  scwin.subSum();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    scwin.f_changeUnitAmt();
  }

  // 조회 조건이 계획으로 조회 했을경우 저장 가능으로 변경함.
  if (lc_clsCd.getValue() == "1") {
    scwin.checkPlanSave = true;
  } else {
    scwin.checkPlanSave = false;
  }

  // gr_sellPlan event=OnUserColor(Row,eventid)> //특정 그리드에 color를 적용할수 있는 이벤트
  // if (eventid == "acolor") {
  for (var i = 0; i < ds_sellPlan.getRowCount(); i++) {
    if (ds_sellPlan.getCellData(i, "upperSellClsNm") == "구분총액" || ds_sellPlan.getCellData(i, "upperSellClsNm") == "사업부총액") {
      gr_sellPlan.setCellStyle(i, "upperSellClsNm", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "bizDomNm", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "sellClsNm", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "yrPlanAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "thisBefRsltsAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "thisPlanAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "thisRsltsAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "thisVariation", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "cumBefRsltsAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "cumPlanAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "cumRsltsAmt", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "cumVariation", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "sellClsCd", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "bizDomCd", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "upperSellClsCd", "background-color", "#DEF3E9");
      gr_sellPlan.setCellStyle(i, "pchsSellClsCd", "background-color", "#DEF3E9");
      // return "#DEF3E9";
    }
  }

  // }
};
scwin.lc_unit_onselected = function () {
  scwin.f_changeUnitAmt();
};
scwin.gr_sellPlan_oncellclick = function (row, columnIndex, columnId) {
  scwin.f_DetailSearch_Header(row);
  if (ds_sellPlan.getCellData(row, "upperSellClsNm") == "사업부총액" || ds_sellPlan.getCellData(row, "upperSellClsNm") == "구분총액") {
    return;
  }
  $c.sbm.execute($p, sbm_searchSellPlanDetail);
};
scwin.sbm_searchSellPlanDetail_submitdone = function (e) {
  var rowCnt = ds_sellPlanDetail.getRowCount();
  txt_totalRows2.setValue(rowCnt);
};
scwin.sbm_saveSellPlan_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.ed_FromDate_onblur = function (e) {};
scwin.ed_FromDate_onchange = function () {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_FromDate',style:'',displayFormat:'yyyy/MM',title:'예산년월',mandatory:'true',objType:'data','ev:onchange':'scwin.ica_FromDate_onchange','ev:onblur':'scwin.ica_FromDate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'',submenuSize:'auto',ref:'',mandatory:'true',title:'버전'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_sacctDeptCd',popupTitle:'',nameId:'ed_sacctDeptNm',style:'',btnId:'btn_dept',id:'udc_sacctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',validTitle:'부서',objTypeName:'data',maxlengthName:'20','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sacctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sacctDeptCd_onblurNameEvent',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_commonPop',nameId:'',popupID:'',popupTitle:'',selectID:'',style:'display: none;',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clsCd',style:'display: none;',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출실적비교표',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_unit',class:' w150',direction:'auto',mandatory:'true',title:'단위',ref:'','ev:onselected':'scwin.lc_unit_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_unit'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cdDesc'}}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridID:'gr_sellPlan',id:'udc_topGrd',gridDownUserAuth:'X',gridUpYn:'N',gridDownFn:'scwin.f_Excel',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellPlan',id:'gr_sellPlan',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_sellPlan_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사업부',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:' 매출구분',width:'180',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'supreess1',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'년간계획',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMm',inputType:'text',value:'당월',width:'400',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumMm',inputType:'text',value:'누계',width:'400',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column65',value:'매출<br/>구분<br/>코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column61',value:'사업<br/>영역',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column53',value:'상위<br/>매출<br/>구분<br/>코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column57',value:'상위<br/>매출<br/>구분<br/>코드',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'매출구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsNm',inputType:'text',width:'100',value:'',sortable:'true',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperSellClsNm',inputType:'text',width:'100',value:'',sortable:'true',sortLabel:'true',colMerge:'true',readOnly:'true',upperColumn:'pchsSellClsNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',width:'100',sortable:'true',sortLabel:'true',colMerge:'true',readOnly:'true',upperColumn:'surpress1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClsNm',inputType:'text',width:'100',textAlign:'left',value:'',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'surpress1',value:'',displayMode:'label',expression:'display(\'pchsSellClsNm\') + display(\'upperSellClsNm\')',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yrPlanAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',value:'',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisBefRsltsAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',value:'',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisPlanAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisRsltsAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisVariation',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumBefRsltsAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cumPlanAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cumRsltsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cumVariation',displayMode:'label',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'sellClsCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'bizDomCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'upperSellClsCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'pchsSellClsCd',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출실적비교 상세 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group2',style:'',gridID:'gr_sellPlanDetail',id:'udc_topGrd2',gridDownUserAuth:'X',gridUpYn:'N',gridDownFn:'scwin.f_Excel2',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellPlanDetail',id:'gr_sellPlanDetail',style:'',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'매출거래처',width:'60',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'귀속부서코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'사업영역코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'사업영역',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'계정명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'청구거래처코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'청구거래처명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'실적금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClsCd',inputType:'text',style:'',value:'',width:'60',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'160',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'160',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisRsltsAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column99',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'thisRsltsAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})