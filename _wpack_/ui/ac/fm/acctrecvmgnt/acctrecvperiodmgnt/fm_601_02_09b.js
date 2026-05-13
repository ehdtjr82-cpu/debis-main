/*amd /ui/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_02_09b.xml 32319 0339de0ba8353e8fcbc20f073d1d874fb3a3c395219204b35f2c502af834438e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pStdYm',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preSellBondCreditSales',name:'외상매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preSellBondBills',name:'어음',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisSellBondCreditSales',name:'외상매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisSellBondBills',name:'어음',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellBondCreditSales',name:'외상매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellBondBills',name:'어음',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellBondSum',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellBondAvg',name:'평균채권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellBondRt',name:'매수채권 회전일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recallDay',name:'회수일령',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperDeptNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_unit'},E:[{T:1,N:'w2:keyInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.RetrieveSellBondRecallDayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.SaveSellBondRecallDayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.CreateSellBondRecallDayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany;
scwin.isFirst = true;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO012",
    compID: "acb_unit"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  // scwin.f_HeaderCreate();
  scwin.f_setCompanyInfo();

  // 현재 월로 셋팅한다.
  ica_stdYm.setValue(WebSquare.date.getCurrentServerDate());
  ica_stdYm.focus();

  //금액단위를 셋팅한다.
  // scwin.f_GetUnit();
};

// 조회조건 헤더 설정
// function f_HeaderCreate(){
//     var GAUCE_DATASET_HEADER = "coCd:STRING"		//회사코드
//                             + ",coClsCd:STRING"		//회사구분코드
//                             + ",stdYm:STRING"		//년월
//                             + ",acctDeptCd:STRING"	//귀속부서
//                             + ",pStdYm:STRING"		//년월
//                             ;
//     ds_condition.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_condition.AddRow();
// }

// 조회
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_stdYm, ed_coCd]))) {
    return false;
  }

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoClsCd = ACConstants.CO_CLS_CD_DONGBU;

  // ds_condition.UseChangeInfo = false

  dma_condition.set("coClsCd", scwin.txtCoClsCd);
  dma_condition.set("stdYm", ica_stdYm.getValue());
  dma_condition.set("pStdYm", ica_pStdYm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
  acb_unit.setSelectedIndex(0); //원 기본셋팅
};

// 저장시
scwin.f_Save = async function () {
  // 필수입력사항 확인
  // if (!cfValidate([gr_master])) {
  //     return;
  // }

  // 변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

// 생성
scwin.f_Create = async function () {
  // 필수사항 체크
  if (!(await $c.gus.cfValidate($p, [ica_pStdYm]))) {
    return;
  }
  var str = ica_pStdYm.getValue();
  str = str.substr(0, 4) + "년 " + str.substr(5, 2) + "월";
  if ((await $c.win.confirm($p, str + " 매출채권회수일령을 생성하시겠습니까?")) == false) {
    return;
  }
  ica_stdYm.setValue(ica_pStdYm.getValue());
  dma_condition.set("coClsCd", scwin.txtCoClsCd);
  dma_condition.set("stdYm", ica_stdYm.getValue());
  dma_condition.set("acctDfm_601_02_09beptCd", "");
  dma_condition.set("pStdYm", ica_pStdYm.getValue());
  $c.sbm.execute($p, sbm_create);
};

// 조회 : 데이터를 조회한다.
scwin.f_SetGridFormat = function () {
  var stdYm = ica_stdYm.getValue();
  var qryDate = new Date(stdYm.substring(0, 4), stdYm.substring(4, 6), 0);
  var qryBfLast = new Date(qryDate.getFullYear(), qryDate.getMonth());
  var qryBfMm = new Date(qryBfLast - 1);
  var gryMonth = new Date(qryBfMm.getFullYear(), qryBfMm.getMonth());
  gryMonth = gryMonth.format('YYYYMM');

  // gr_master.ColumnProp("preYm", "Name") 	= "'" + gryMonth.substr(2,2) + "." + gryMonth.substr(4,2) + " (전월)";
  // gr_master.ColumnProp("thisYm", "Name") 	= "'" + stdYm.substr(2,2) + "." + stdYm.substr(4,2) + " (당월)";

  var preYm = "'" + gryMonth.substr(2, 2) + "." + gryMonth.substr(4, 2) + " (전월)";
  var thisYm = "'" + stdYm.substr(2, 2) + "." + stdYm.substr(4, 2) + " (당월)";
  gr_master.setHeaderValue("header1", preYm);
  gr_master.setHeaderValue("header2", thisYm);
};

// 엑셀파일로 저장
scwin.f_GridToExcel = async function () {
  if (ds_master.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var options = {
    fileName: "매출채권회수일령_" + ica_stdYm.getValue() + ".xlsx",
    sheetName: "매출채권회수일령_" + ica_stdYm.getValue(),
    "useSubTotal": "true",
    "useSubTotalData": "true",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "매출채권회수일령",
    textAlign: "center",
    fontSize: 16,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    // text : `정비기간 [${$c.date.formatDate(ed_wrkStDt.getValue(), "date")} ~ ${$c.date.formatDate(ed_wrkEndDt.getValue(), "date")}]` ,
    text: "단위_" + acb_unit.getText(true),
    textAlign: "right",
    fontSize: 10,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

// 금액단위를 구한다.
// function f_GetUnit() {
//     ds_unit.DataId = "/cm.zz.RetrieveCodeCMD.do?grpCd=CO012&cd=&cdNm=";
//     ds_unit.Reset();
// }

// Default Unit 을 설정
// function f_SetDefaultUnit() {

//     if (ds_unit.CountRow < 1) return;
//         var index = 0;
//         for (i=1; i <= ds_unit.CountRow; i++) {
//             if (ds_unit.NameValue(i, "fltrCd1") == <%=DGlobalValue.TRUE%>) {
//                 index = i-2;
//                 break;
//         }
//     }
//     lc_unit.Index = index;
// }

// 그리드 컬럼의 금액단위를 설정한다.
scwin.f_SetGridUnit = function () {

  //     var colid;
  // // 		ds_master.Redraw = "false";

  //     for (i=1; i <= ds_master.CountColumn ; i++) {
  //         if ((ds_master.ColumnType(i) == 2 || ds_master.ColumnType(i) == 3) && ds_master.ColumnID(i)!="sellBondRt" && ds_master.ColumnID(i)!="recallDay") {
  //             colid = ds_master.ColumnID(i);
  //             gr_master.ColumnProp(colid,"Value") = "{decode(" + colid + ",0,0,(Round(" + colid + "/"+lc_unit.BindColVal+"),1))}";
  //             gr_master.ColumnProp(colid,"DecAO") = "0";

  //             gr_master.ColumnProp(colid,"sumText") = "{(Round(sum(" + colid + ")/"+lc_unit.BindColVal+"),1)}";
  //         }
  //     }
  //     var stdYm = ed_stdYm.text;
  //     var lastDay =  new Date(stdYm.substr(0,4),stdYm.substr(4,2),0).getDate(); // 마지막날
  //     gr_master.ColumnProp("recallDay","sumText")	= "{Round("+lastDay+"/(sum(sellAmt)/sum(SellBondAvg)),1)}";
  // // 		gr_master.Redraw = "true";
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서 , 2:조회->거래처(거래처)
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  var rtnList = new Array();
  var cd;
  var nm;

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
      var pWhere = ica_stdYm.getValue().substring(0, 4) + ",,,,,,,,," + ed_coCd.getValue();
      rtnList = udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, cd, nm, "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서
      // f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  debugger;
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

// 팝업결과
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
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
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
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
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo();
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.udc_dept_onclickEvent = function () {
  scwin.f_openPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, '1', 'ALL');
};
scwin.udc_dept_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, rtnList);
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, '1', 'CD');
};
scwin.udc_dept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, '1', 'NM');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // $c.gus.cfHideDSWaitMsg(gr_master);
  if (ds_master.getTotalRow() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다");
  } else {
    // cfShowTotalRows(totalRows,ds_master.CountRow);
    scwin.sellBondRtSumFormat();
    scwin.recallDaySumFormat();
    ed_totalRow.setValue(ds_master.getTotalRow());
    scwin.f_SetGridFormat();
  }
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.sbm_create_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, sbm_retrieve);
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, sbm_save);
};
scwin.unitFormat = function (value) {
  var unit = acb_unit.getValue();
  var result;
  if (value == 0) {
    return "0";
  } else if (value == null) {
    return "";
  }
  if (unit == 01) {
    result = value;
  } else if (unit == 02) {
    if (value == 0) {
      return "0";
    } else {
      result = Math.round(value / 1000, 1);
    }
  } else if (unit == 03) {
    if (value == 0) {
      return "0";
    } else {
      result = Math.round(value / 1000000, 1);
    }
  } else if (unit == 04) {
    if (value == 0) {
      return "0";
    } else {
      result = Math.round(value / 100000000, 1);
    }
  }
  return $c.num.formatNumber($p, result);
};
scwin.acb_unit_onchange = function (info) {
  dma_condition.set("coClsCd", scwin.txtCoClsCd);
  dma_condition.set("stdYm", ica_stdYm.getValue());
  dma_condition.set("pStdYm", ica_pStdYm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sellBondRtSumFormat = function () {
  if (gr_master.getFooterData("sellAmtSum") == 0 || gr_master.getFooterData("sellBondAvgSum") == 0) {
    return;
  }
  var data = Math.round(gr_master.getFooterData("sellAmtSum") / gr_master.getFooterData("sellBondAvgSum") * 10) / 10;
  if (data == 0) {
    data = 0.0;
  } else {
    gr_master.setFooterData("sellBondRtSum", data);
  }
};
scwin.recallDaySumFormat = function () {
  var stdYm = ica_stdYm.getValue();
  var lastDay = new Date(stdYm.substr(0, 4), stdYm.substr(4, 2), 0).getDate(); // 마지막날

  if (gr_master.getFooterData("sellAmtSum") == 0 || gr_master.getFooterData("sellBondAvgSum") == 0) {
    return;
  }
  var value = gr_master.getFooterData("sellAmtSum") / gr_master.getFooterData("sellBondAvgSum");
  var value2 = lastDay / value;
  var data = Math.round(value2 * 10) / 10;
  gr_master.setFooterData("recallDaySum", Math.floor(data));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_condition',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',style:'',displayFormat:'yyyy/MM',mandatory:'true',title:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_srchAcctDeptCd',nameId:'ed_srchAcctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'',id:'udc_dept',refDataCollection:'dma_condition',code:'acctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',maxlengthName:'30','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dept_onblurNameEvent',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위',style:''}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_unit',style:'width: 100px;',submenuSize:'fixed','ev:onchange':'scwin.acb_unit_onchange'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'부서코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'header1',value:'전월',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'header2',value:'당월',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',value:'매출액</br>(부가세포함)',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',id:'column62',value:'매출채권',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'매출채권</br>회전일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',value:'회수</br>일령',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'외상매출',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'어음',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'외상매출',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'어음',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'외상매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'어음',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'어음',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'평균채권',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preSellBondCreditSales',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'preSellBondBills',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thisSellBondCreditSales',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',allowChar:'0-9',validateOnInput:'true',displayFormatter:'scwin.unitFormat',excelCellType:'number',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'thisSellBondBills',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',displayFormatter:'scwin.unitFormat',allowChar:'0-9',validateOnInput:'true',excelCellType:'number',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',allowChar:'0-9',validateOnInput:'true',excelCellType:'number',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellBondCreditSales',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellBondBills',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellBondSum',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellBondAvg',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',displayFormatter:'scwin.unitFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellBondRt',inputType:'text',width:'120',readOnly:'true',dataType:'float',displayFormat:'#.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recallDay',inputType:'text',width:'70',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column56',value:'물류계',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column55',displayMode:'label',expression:'sum(\'preSellBondCreditSales\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column81',displayMode:'label',expression:'sum(\'preSellBondBills\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column77',displayMode:'label',expression:'sum(\'thisSellBondCreditSales\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column73',displayMode:'label',expression:'sum(\'thisSellBondBills\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'sellAmtSum',displayMode:'label',expression:'sum(\'sellAmt\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column65',displayMode:'label',expression:'sum(\'sellBondCreditSales\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column61',displayMode:'label',expression:'sum(\'sellBondBills\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',displayMode:'label',expression:'sum(\'sellBondSum\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sellBondAvgSum',displayMode:'label',expression:'sum(\'sellBondAvg\')',textAlign:'right',displayFormat:'#,###',dataType:'number',displayFormatter:'scwin.unitFormat'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellBondRtSum',displayMode:'label',dataType:'float',value:'-0.0',displayFormat:'#.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'recallDaySum',value:'-0',displayMode:'label',dataType:'number',displayFormat:'#'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'생성년월',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_pStdYm',class:'',calendarValueType:'yearMonth',displayFormat:'yyyy/MM',mandatory:'true',title:'생성년월'}}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create',type:'button',class:'btn','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})