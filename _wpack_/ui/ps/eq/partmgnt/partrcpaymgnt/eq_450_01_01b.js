/*amd /ui/ps/eq/partmgnt/partrcpaymgnt/eq_450_01_01b.xml 42313 305556734b71c2c5e046570899ccff104447085512161b794c91b3dac0506bc3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq460',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastInDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retnQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retnUpr',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranInQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranInAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranOutQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranOutAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendStockQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendStockAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ym',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partrcpaymgnt.RetrieveSaveGoodsReceiveAndPaySubCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq460","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq460","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_fixWrkPl',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.outDt = WebSquare.date.getCurrentServerDate().substring(0, 6);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }];
  $c.data.setGauceUtil($p, param);
  const codeOptions = [{
    grpCd: "EQ017",
    compID: "gr_eq460:inClsCd,lc_inClsCd"
  }, {
    grpCd: "EQ005",
    compID: "lc_catCd"
  }, {
    grpCd: "EQ029",
    compID: "lc_acctCd",
    opt: {
      'range': '1,1'
    }
  }

  // { grpCd : "ZZ205", compID : "lc_homeClsCd", opt : {'range': '1,EQ'}  },
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  chb_printCheck.hide();
  chb_previewCheck.hide();
  ica_ym.setValue(scwin.outDt);
  scwin.f_defaultValue();
};
scwin.ondataload = function (e) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
  scwin.f_defaultValue();
  dlt_commonCodeEQ029.sort('cd', 0);
  dlt_commonCodeEQ005.sort('cd', 0);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]);
  lc_inClsCd.index = 0; //입고구분:전체
  udc_fixClntList.setDisabled(true);
  $c.gus.cfEnableObj($p, ed_clntNo, false);
  $c.gus.cfEnableObj($p, ed_clntNm, false);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); //정비소속구분코드
  if (scwin.userInfo.getEqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq460, null);
  scwin.lc_homeClsCd_onviewchange();
  scwin.lc_inClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [ica_ym, lc_homeClsCd]))) return;
  if (ica_ym.getValue().length != 6) {
    $c.win.alert($p, "년월은(는) 6자리수만큼큼 입력하십시오");
    return;
  }

  // dma_search.setUseChangeInfo("false");
  dma_search.set("acctAmtYn", "Y");
  $c.sbm.execute($p, sbm_retrieve);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  sbm_ds_fixWrkPl.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + homeClsCd;
  $c.sbm.execute($p, sbm_ds_fixWrkPl);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; //공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 거래처 팝업			
      rtnList = udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");

      // cfSetReturnValue(rtnList, ed_clntNo, ed_clntNm);  			
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_fixClntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [lc_homeClsCd, ica_ym]))) return;

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "/ps/eq/partmgnt/partrcpaymgnt/eq_450_01_01.ozr",
    odiName: "eq_450_01_01",
    odiParam: {
      homeClsCd: lc_homeClsCd.getValue(),
      homeClsNm: $c.win.getComboLabel($p, lc_homeClsCd),
      wrkPlCd: lc_fixWrkPlCd.getValue(),
      wrkPlNm: $c.win.getComboLabel($p, lc_fixWrkPlCd),
      ym: ica_ym.getValue(),
      inClsCd: lc_inClsCd.getValue(),
      inClsNm: $c.win.getComboLabel($p, lc_inClsCd),
      clntNo: ed_clntNo.getValue(),
      clntNm: ed_clntNm.getValue(),
      catCd: lc_catCd.getValue(),
      catNm: $c.win.getComboLabel($p, lc_catCd),
      acctCd: lc_acctCd.getValue(),
      acctNm: $c.win.getComboLabel($p, lc_acctCd)
    },
    viewerParam: {
      useprogressbar: false
    },
    formParam: {
      //
    }
  };
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ps/eq/partmgnt/partrcpaymgnt/eq_450_01_01.ozr", odiParam, viewerParam, formParam);
  scwin.openPopup(data);
};
scwin.openPopup = function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (!(await $c.gus.cfValidate($p, [lc_homeClsCd, ica_ym]))) return;
  let cntRow = ds_eq460.getRowCount();
  if (cntRow == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, ['[저장품 수불부] 자료', '[조회]']);
    return;
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "저장품 수불부",
    textAlign: "center",
    //정렬
    fontSize: 24,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 2,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "소속 [" + $c.win.getComboLabel($p, lc_homeClsCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 3,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "작업장 [" + $c.win.getComboLabel($p, lc_fixWrkPlCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 4,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "년월 [" + ica_ym.getValue() + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 5,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "입고구분 [" + $c.win.getComboLabel($p, lc_inClsCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 6,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "거래처[" + ed_clntNo.getValue() + "(" + ed_clntNm.getValue() + ")" + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 7,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "계통 [" + $c.win.getComboLabel($p, lc_catCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 8,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 22,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "계정 [" + $c.win.getComboLabel($p, lc_acctCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "저장품 수불부",
    sheetName: "저장품 수불부",
    startRowIndex: 9,
    startColumnIndex: 0,
    type: 1,
    useSubTotal: true,
    columnMoveWithFooter: true
  };
  $c.data.downloadGridViewExcel($p, gr_eq460, options, infoArr);
};

//------------------------------------------------------------------------
// script
//------------------------------------------------------------------------  
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  // cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_eq460.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    let wrkPlCd = "";
    wrkPlCd = lc_fixWrkPlCd.getValue();
    if (wrkPlCd == "") {
      gr_eq460.setColumnVisible("fixWrkPlNm", true);
      // gr_eq460.ColumnProp("fixWrkPlNm", "show") = "true";
    } else {
      gr_eq460.setColumnVisible("fixWrkPlNm", false);
      // gr_eq460.ColumnProp("fixWrkPlNm", "show") = "false";
    }
  }
};
scwin.sbm_ds_fixWrkPl_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let data = lc_homeClsCd.getValue();
  if (data == "TR") {
    ds_fixWrkPl.insertData(0, ["", "전체"]);
  }
  ds_fixWrkPl.sort("code", 0);
  lc_fixWrkPlCd.setSelectedIndex(0);
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
scwin.lc_inClsCd_onviewchange = function (info) {
  if (lc_inClsCd.getSelectedIndex() == 3) {
    udc_fixClntList.setDisabled(false);
    $c.gus.cfEnableObj($p, ed_clntNo, true);
    $c.gus.cfEnableObj($p, ed_clntNm, true);
  } else {
    udc_fixClntList.setDisabled(true);
    $c.gus.cfEnableObj($p, ed_clntNo, false);
    $c.gus.cfEnableObj($p, ed_clntNm, false);

    //거래처 Clear시키기
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_fixClntList_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
  } else {
    ed_clntNm.setValue("");
  }
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  if (ed_clntNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
  } else {
    ed_clntNo.setValue("");
  }
};
scwin.udc_eqModelList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqModelCd.getValue(), ed_eqModelNm.getValue(), 'F', 'T');
};
scwin.udc_eqModelList_onblurCodeEvent = function (e) {
  if (ed_eqModelCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqModelCd, ed_eqModelNm, 1);
  } else {
    ed_eqModelNm.setValue("");
  }
};
scwin.udc_eqModelList_onviewchangeNameEvent = function (info) {
  if (ed_eqModelNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqModelNm, ed_eqModelCd, 1, false);
  } else {
    ed_eqModelCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq460',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 120px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_search.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',title:'소속'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;s',submenuSize:'fixed',mandatory:'true',ref:'data:dma_search.wrkPlCd',title:'작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width:150px;',submenuSize:'fixed',ref:'data:dma_search.inClsCd','ev:onviewchange':'scwin.lc_inClsCd_onviewchange',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',maxlengthCode:'6',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'data',refDataCollection:'dma_search',code:'clntCd',id:'udc_fixClntList','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ym',style:'',mandatory:'true',ref:'data:dma_search.ym',displayFormat:'yyyy/MM',title:'년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'width: 150px;s',submenuSize:'fixed',ref:'data:dma_search.catCd',chooseOptionLabel:'전체',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',style:'width:150px;',submenuSize:'fixed',ref:'data:dma_search.acctCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',userAuth:'X',gridUpYn:'N',gridID:'gr_eq460'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq460',focusMode:'cell',id:'gr_eq460',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'11',fixedColumn:'3',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true',columnMoveWithFooter:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'작업장명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'부품코드',width:'110',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'부품명',width:'200',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'단위',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'장비모델명',width:'200',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'최종입고',width:'270',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column74',value:'전월재고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column66',value:'당월입고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column58',value:'당월반품',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'당월출고',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column126',value:'당월이관입고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column118',value:'당월이관출고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column110',value:'당월말재고',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column79',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column71',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column63',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column50',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column131',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column123',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column119',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column115',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column107',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column172',value:'입고구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lastInDt',inputType:'calendar',style:'',value:'',width:'70',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tbeginStockQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tbeginStockAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retnQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'retnUpr',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tranInQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tranInAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tranOutQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tranOutAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tendStockQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tendStockAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'inClsCd',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'fixWrkPlNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column156',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column155',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column154',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column153',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column152',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column151',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column150',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column148',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tbeginStockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column147',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tbeginStockAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column146',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("inQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column145',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("inAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column144',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("retnQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column143',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("retnUpr")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column142',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("outQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column141',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("outAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column140',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranInQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column139',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranInAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column138',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranOutQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranOutAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column136',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tendStockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column135',value:'',displayMode:'label',expression:'SUM("tendStockAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tbeginStockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tbeginStockAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("inQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("inAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("retnQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("retnUpr")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("outQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column133',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("outAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column129',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranInQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column125',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranInAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column121',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranOutQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column117',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tranOutAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column113',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tendStockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column109',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tendStockAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_oz',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'visibility: hidden;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hid1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'visibility: hidden;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hid2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]})