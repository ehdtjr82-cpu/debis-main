/*amd /ui/ac/fi/taxbiz/vatdeclar/fi_403_02_04b.xml 52631 d69f229b0d2da4ae1bf4da49eeaffc075f0bdfeccf17009018e09c56eaa4416a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'AcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'AcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsBusiNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'supBusiNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'supBusiNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdSt',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recEmpNo',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100',dataType:'text',name:'부가세 부서코드'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'100',dataType:'text',name:'매출입 구분'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'text',style:'',value:'',width:'100',dataType:'text',name:'증빙구분'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tsBusiNo',value:'',displayMode:'label',dataType:'text',name:'신고 사업자'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tsBusiNm',value:'',displayMode:'label',dataType:'text',name:'신고 사업자명'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNo',value:'',displayMode:'label',dataType:'text',name:'공급자 사업자'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNm',value:'',displayMode:'label',dataType:'text',name:'공급자 사업자명'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crnClsNm',value:'',displayMode:'label',dataType:'text',name:'공급자 사업자구분'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'supAmt',value:'',displayMode:'label',dataType:'text',name:'음공급가액'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'eseroSpplyDt',value:'',displayMode:'label',dataType:'text',name:'이세로공급일자'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',dataType:'text',name:'작성부서'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisSpplyDt',value:'',displayMode:'label',dataType:'text',name:'계산서 일자'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',style:'',value:'',width:'100',dataType:'text',name:'회계처리 일자'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'debisSupAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'text',name:'공급가액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisVatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'text',name:'부가세액'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'debisTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'text',name:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',dataType:'text',name:'전표 번호'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',dataType:'text',name:'등록자 ID'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label',dataType:'text',name:'전표 등록자'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'debisCnt',value:'',displayMode:'label',dataType:'text',name:'개수'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroSupAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'text',name:'공급가액'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroVatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'text',name:'부가세액'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'text',name:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col24',value:'',displayMode:'label',dataType:'text',name:'작성일자'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etaxId',value:'',displayMode:'label',dataType:'text',name:'e세로 ID'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eseroCnt',value:'',displayMode:'label',dataType:'text',name:'개수'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'emailUser',value:'',displayMode:'label',dataType:'text',name:'이메일 수신자'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapSupAmt',value:'',displayMode:'label',textAlign:'right',dataType:'text',name:'공급가액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapVatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'text',name:'부가세액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'text',name:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gapCnt',value:'',displayMode:'label',dataType:'text',name:'개수'}},{T:1,N:'w2:column',A:{id:'color',name:'name32',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatdeclar.RetrievePurchaseVersusESeroComparisonCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;
scwin.vEmpNo = $c.data.getMemInfo($p, "empNo");
scwin.isFirst = true;
scwin.coCd = "000";
scwin.coClsCd = "0";
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.txt_stYm;
scwin.txt_endYm;
scwin.txt_submitDt;
scwin.declarYr;
scwin.vatQuartYyClsCd;
scwin.txt_evidClsNm;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "FI019",
    compID: "acb_pchsSellClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  chb_printCheck.setValue("1");
  chb_previewCheck.setValue("1");

  // f_Header();
  scwin.f_setCalender();
  scwin.f_initObj();
  scwin.f_setCompanyInfo();
  acb_evidClsCd.setSelectedIndex(0);
  chk_lowerDeptIncluYn.setValue("");
  //cfDisableObjects([lc_evidClsCd]);
  $c.gus.cfDisableObjects($p, [chk_filterYn]);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회조건 달력 셋팅
//-------------------------------------------------------------------------   	
scwin.f_setCalender = function () {
  if (scwin.g_sCurrDate.substring(4, 8) >= '0101' && scwin.g_sCurrDate.substring(4, 8) <= '0331') {
    ed_startDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "0101");
    ed_endDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "0331");
  } else if (scwin.g_sCurrDate.substring(4, 8) >= '0401' && scwin.g_sCurrDate.substring(4, 8) <= '0630') {
    ed_startDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "0401");
    ed_endDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "0630");
  } else if (scwin.g_sCurrDate.substring(4, 8) >= '0701' && scwin.g_sCurrDate.substring(4, 8) <= '0930') {
    ed_startDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "0701");
    ed_endDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "0930");
  } else if (scwin.g_sCurrDate.substring(4, 8) >= '1001' && scwin.g_sCurrDate.substring(4, 8) <= '1231') {
    ed_startDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "1001");
    ed_endDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4) + "1231");
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_AcctDeptCd, ed_AcctDeptNm, ed_tsBusiNo]); //  부가세 신고 부서  
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;

  // 시작, 종료일자 체크
  if (ed_startDt.getValue() == "" || ed_endDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["기간"]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsNull($p, ed_startDt.getValue()) && !$c.gus.cfIsNull($p, ed_endDt.getValue())) {
    if (WebSquare.date.dateDiff(ed_startDt.getValue(), ed_endDt.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_startDt.focus();
      return false;
    }
  }
  if (chk_lowerDeptIncluYn.getValue() == "1") {
    if (ed_acctDeptCdSt.getValue() == "") {
      await $c.win.alert($p, "하위부서포함여부 체크시에는 부서를 입력해주세요.");
      ed_acctDeptCdSt.focus();
      return;
    } else {
      dma_search.set("lowerDeptIncluYn", "1");
    }
  } else {
    dma_search.set("lowerDeptIncluYn", "0");
  }
  dma_search.set("tsBusiNo", ed_AcctDeptCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  dma_search.set("pchsSellClsCd", acb_pchsSellClsCd.getValue());
  dma_search.set("regId", ed_regId.getValue());
  dma_search.set("email", ed_email.getValue());
  dma_search.set("lowerDeptIncluYn", chk_lowerDeptIncluYn.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 필터
//-------------------------------------------------------------------------	
scwin.f_filter = function () {
  if (chk_filterYn.getValue() == "1") {
    ds_evid.setColumnFilter({
      type: 'regExp',
      colIndex: 'gapTotAmt',
      key: /^(?!0$).+/,
      condition: 'and'
    });
    ds_evid.setColumnFilter({
      type: 'regExp',
      colIndex: 'gapSupAmt',
      key: /^(?!0$).+/,
      condition: 'and'
    });
    ed_totalRow.setValue(ds_evid.getFilteredColData().length);
  } else {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      //이메일 부서 조회 
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = udc_retrieveAcctDeptCdInfo6.cfCommonPopUp(scwin.udc_retrieveAcctDeptCdInfo6_callBack, ed_acctDeptCdSt.getValue().trim(), ed_acctDeptNmSt.getValue(), check, null, null, null, null, WebSquare.date.getCurrentServerDate(), null, null, null, null, null, null, null);
      break;
    case '2':
      // 부가세신고부서조회
      // 				var param= ",,,"+coCd+","+coClsCd+","+g_sCurrDate.substring(0,4);
      var param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + scwin.g_sCurrDate.substring(0, 4);
      ed_tsBusiNo.setValue("");
      rtnList = udc_retrieveVat.cfCommonPopUp(scwin.udc_retrieveVat_callBack, ed_AcctDeptCd.getValue().trim(), ed_AcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 사업자번호 
      var param = "";
      rtnList = udc_retrieveCrnInfo.cfCommonPopUp(scwin.udc_retrieveCrnInfo_callBack, ed_supBusiNo.getValue().trim(), ed_supBusiNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_retrieveAcctDeptCdInfo6_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, rtnList);
};
scwin.udc_retrieveVat_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_AcctDeptCd, ed_AcctDeptNm, rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_AcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_AcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_tsBusiNo.setValue(rtnList[5]); //부가세사업자번호
    ed_AcctDeptCd.options.hidVal = rtnList[2]; //히든값        
  } else {
    ed_AcctDeptCd.setValue("");
    ed_vatDseclarAcctDeptNm.setValue("");
    ed_tsBusiNo.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};
scwin.udc_retrieveCrnInfo_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_supBusiNo, ed_supBusiNm, rtnList);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isFirst == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isFirst = false;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------	
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd2 = function (strCd, strNm, flag) {
  strNm.setValue("");
  if (strCd.getValue().trim() != "") scwin.f_SearchPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check, isCdYn) {
  var rtnList = new Array();
  switch (flag) {
    case '2':
      // 사번
      param = '';
      rtnList = udc_retrieveAcEmpInfo.cfCommonPopUp(scwin.udc_retrieveAcEmpInfo_callBack, ed_regId.getValue().trim(), ed_empNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '3':
      //이메일 수신자 사번
      var param = "";
      rtnList = udc_retrieveAcEmpInfo2.cfCommonPopUp(scwin.udc_retrieveAcEmpInfo2_callBack, ed_recEmpNo.getValue().trim(), ed_recEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
  }
};
scwin.udc_retrieveAcEmpInfo_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_regId, ed_empNm, rtnList);
};
scwin.udc_retrieveAcEmpInfo2_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_recEmpNo, ed_recEmpNm, rtnList);
};

//-------------------------------------------------------------------------
// function name : f_resultPopEd
// function desc : 팝업결과 셋팅
// function Parameter : strCd : 코드, strNm : 코드명, rtnList : 결과 리스트
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
  } else {
    strCd.setValue("");
    strNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// function name : f_userToExcel()
// function desc : 엑셀저장
// function Parameter : gr_groupCode : 그리드명, gridName : 엑셀저장명
//-------------------------------------------------------------------------
scwin.f_userToExcel = async function () {
  if (ds_evid.getTotalRow() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  //cfGridToExcel(gr_evid, gridName,"C:\\" + gridName + ".xls", 4+8+16);

  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "부가세e세로대사.xlsx",
      sheetName: "부가세e세로대사"
    };
    $c.data.downloadGridViewExcel($p, gr_evid, options);
  }
};

//-------------------------------------------------------------------------
// 세금계산서발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  var mode = "";
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_evid.getRowPosition())) {
    row = ds_evid.getRowPosition();
  }
  if (chb_printCheck.getValue() == "1") {
    mode = "print";
  }
  if (chb_previewCheck.getValue() == "1") {
    mode = "preview";
  }
  let data = {
    reportName: "/ac/fi/taxbiz/vatdeclar/fi_401_10_01p.ozr",
    odiParam: {
      etaxId: ds_evid.getCellData(row, "etaxId")
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: mode
    },
    formParam: {}
  };
  if (mode == "print") {
    let opts = {
      "type": 'print',
      "printMode": 'view'
    };
    $c.ext.printOzReport($p, data, opts);
  } else {
    let opts = {
      "type": 'viewer',
      "printMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  }

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/taxbiz/vatdeclar/fi_401_10_01p.ozr", odiParam, viewerParam, formParam);	
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_retrieveVat_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};
scwin.udc_retrieveVat_onblurCodeEvent = function (e) {
  if (ed_AcctDeptCd.getValue().trim() == ed_AcctDeptCd.options.hidVal) return;
  ed_AcctDeptNm.setValue("");
  ed_tsBusiNo.setValue("");
  ed_AcctDeptCd.options.hidVal = "";
  if (ed_AcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('2', 'T');
};
scwin.udc_retrieveCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_retrieveCrnInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_supBusiNo, ed_supBusiNm, '3');
};
scwin.udc_retrieveAcEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
};
scwin.udc_retrieveAcEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd2(ed_regId, ed_empNm, '2');
};
scwin.udc_retrieveAcctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_retrieveAcctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, '1');
};
scwin.udc_retrieveAcEmpInfo2_onclickEvent = function (e) {
  scwin.f_SearchPopUp('3', 'F');
};
scwin.udc_retrieveAcEmpInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd2(ed_recEmpNo, ed_recEmpNm, '3');
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var rowCnt = ds_evid.getTotalRow();
    ed_totalRow.setValue(rowCnt);
    $c.gus.cfEnableObjects($p, [chk_filterYn]);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      for (let i = 0; i < rowCnt; i++) {
        ds_evid.setCellData(i, "col24", ds_evid.getCellData(i, "eseroSpplyDt"));
        if (ds_evid.getCellData(i, "gapTotAmt") != 0 || ds_evid.getCellData(i, "gapSupAmt") != 0 || ds_evid.getCellData(i, "gapVatAmt") != 0 || ds_evid.getCellData(i, "debisSupAmt") != ds_evid.getCellData(i, "eseroSupAmt") || ds_evid.getCellData(i, "debisVatAmt") != ds_evid.getCellData(i, "eseroVatAmt")) {
          gr_evid.setRowBackgroundColor(i, "#6495ed");
          ds_evid.setCellData(i, "color", "1");
        }
      }
    }
    gr_evid.refreshRow(0);
  }
};
scwin.chk_filterYn_onchange = function (info) {
  scwin.f_filter();
};
scwin.gr_evid_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_evid.getCellData(rowIndex, "slipNo"));
  } else if (columnId == "etaxId") {
    scwin.f_OzReport();
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.pchsSellClsCdFormat = function (value) {
  if (value == "1") {
    return "매출";
  } else if (value == "2") {
    return "매입";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_AcctDeptCd',selectID:'retrieveVatDeclarAcctDeptCd',popupID:'',validTitle:'',nameId:'ed_AcctDeptNm',style:'',id:'udc_retrieveVat',objTypeName:'data',objTypeCode:'data',refDataCollection:'dma_search',code:'AcctDeptCd',name:'AcctDeptNm','ev:onclickEvent':'scwin.udc_retrieveVat_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveVat_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_tsBusiNo',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_supBusiNo',selectID:'retrieveCrnInfo',popupID:'',validTitle:'',nameId:'ed_supBusiNm',style:'',id:'udc_retrieveCrnInfo',objTypeName:'data',objTypeCode:'data',refDataCollection:'dma_search',code:'supBusiNo',name:'supBusiNm','ev:onclickEvent':'scwin.udc_retrieveCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'startDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ed_startDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_evidClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영세율세금계산서(일반)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regId',selectID:'retrieveAcEmpInfo',popupID:'',validTitle:'',nameId:'ed_empNm',style:'',id:'udc_retrieveAcEmpInfo',objTypeName:'data',objTypeCode:'data',refDataCollection:'dma_search',code:'regId','ev:onclickEvent':'scwin.udc_retrieveAcEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcEmpInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_email',style:'',maxlength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCdSt',selectID:'retrieveAcctDeptCdInfo6',popupID:'',validTitle:'',nameId:'ed_acctDeptNmSt',style:'',id:'udc_retrieveAcctDeptCdInfo6',objTypeName:'data',objTypeCode:'data',refDataCollection:'dma_search',code:'acctDeptCdSt','ev:onclickEvent':'scwin.udc_retrieveAcctDeptCdInfo6_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDeptCdInfo6_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_recEmpNo',selectID:'retrieveAcEmpInfo',popupID:'',validTitle:'',nameId:'ed_recEmpNm',style:'',id:'udc_retrieveAcEmpInfo2',objTypeName:'data',objTypeCode:'data',refDataCollection:'dma_search',code:'recEmpNo','ev:onclickEvent':'scwin.udc_retrieveAcEmpInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcEmpInfo2_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_pchsSellClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하위부서포함 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lowerDeptIncluYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부가세 e세로 대사 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_filterYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.chk_filterYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS - e세로 금액 불일치 항목'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_evid',gridUpFn:'N',gridDownFn:'scwin.f_userToExcel',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_evid_oncellclick',drawType:'virtual'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'부가세</br>부서코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column158',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'매출입</br>구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'증빙구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'신고</br>사업자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'신고</br>사업자명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'공급자</br>사업자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'공급</br>사업자명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'공급자</br>사업자구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'음공급가액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'이세로공급일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'960',inputType:'text',style:'',id:'column52',value:'DEBIS',displayMode:'label',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'e세로',width:'640',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',style:'',id:'column122',value:'(DEBIS) - (e세로)',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column159',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'계산서</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'회계처리</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'등록자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column103',value:'전표등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column99',value:'개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column131',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'e세로ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column115',value:'개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'이메일</br>수신자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column151',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column147',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column143',value:'개수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',textAlign:'left',readOnly:'true',hiddenCol:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'color',value:'',displayMode:'label',hidden:'true',hiddenCol:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true',displayFormatter:'scwin.pchsSellClsCdFormat',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tsBusiNo',value:'',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'color',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tsBusiNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNo',value:'',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'color',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crnClsNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'supAmt',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'eseroSpplyDt',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisSpplyDt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'debisSupAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisVatAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'debisTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',readOnly:'true',class:'underline',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true',textAlign:'right',readOnly:'true',hiddenCol:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'debisCnt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroSupAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroVatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col24',value:'',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'etaxId',value:'',displayMode:'label',textAlign:'left',readOnly:'true',class:'underline',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eseroCnt',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'emailUser',value:'',displayMode:'label',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapSupAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapVatAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapTotAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gapCnt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column161',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'debisSupAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'debisVatAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'debisTotAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column101',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'debisCnt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'eseroSupAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'eseroVatAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'eseroTotAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column117',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'eseroCnt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column125',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'gapSupAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column153',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'gapVatAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column149',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'gapTotAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column145',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'gapCnt\')',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'info-list  txt-blue'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'파란색배경 : DEBIS 합계와 e세로 합계가 일치하지 않은 경우 (행 이동시 색이 하얀색으로 변함) ',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'하얀색배경 : DEBIS 합계와 e세로 합계가 일치하는 경우 ',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'세금계산서 : 오른쪽 하단의 인쇄옵션, 미리보기를 체크 후 화면의 e세로ID를 클릭 한다.',class:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_OzReport',style:'',type:'button','ev:onblur':'scwin.f_OzReport',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]}]}]}]}]}]}]})