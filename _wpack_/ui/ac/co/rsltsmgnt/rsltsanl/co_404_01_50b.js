/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_50b.xml 34404 49046a78331ecbc490e98d3581682ba74009f2fe9383c9bd340fb87434458d4d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distRtStdCd',name:'배부비율기준코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workNo',name:'마감작업번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DistRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'화울구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt1',name:'매출액 1(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt2',name:'매출액 2(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt3',name:'매출액 3(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRt1',name:'배부비율 1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'distRt2',name:'배부비율 2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRt3',name:'배부비율 3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveDistributionRtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_DistRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_DistRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_DistRateDet',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_DistRateDet_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.curDate = $c.date.getServerDateTime($p, "yyyyMM");
scwin.gridId = "";
scwin.gridName = "";
scwin.rateCode = ""; // 배부비율코드
scwin.wrkDate = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO050",
    compID: "lc_distRtStdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  lc_distRtStdCd.setValue("40");
  ica_stdYm.setValue(scwin.curDate);
  scwin.wrkDate = scwin.curDate;
  scwin.f_getYn(); // 마감여부
  ica_stdYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_stdYm.getValue().trim().length != 6) {
    await $c.win.alert($p, "기준년월은 필수입력 입니다.");
    ica_stdYm.focus();
    return;
  }
  if (ed_BizDomCd.getValue() == "") {
    await $c.win.alert($p, "사업영역은 필수입력 입니다.");
    ed_BizDomCd.focus();
    return;
  }
  dma_search.set("workNo", "CO40");
  scwin.wrkDate = ica_stdYm.getValue();
  await $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// UDC 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  let sCmdName = "";
  let param = '';
  let code = $c.gus.cfGetValue($p, txtCode);
  let name = $c.gus.cfGetValue($p, txtName);
  switch (select_code) {
    case '1':
      // 거래처
      sCmdName = "retrieveClntList";
      param = ",,,";
      await udc_clntList.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, "F", null, null);
      break;
    case '2':
      // 귀속부서
      sCmdName = "retrieveAcctDeptCdInfo";
      param = ",,,";
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, "F", null, null);
      break;
    case '3':
      // 사업영역
      sCmdName = "retrieveBizDomCdInfo";
      param = ",,,";
      await udc_bizDomCdInfo.cfCommonPopUp(scwin.udc_bizDomCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, "F", null, null);
      break;
  }
};
scwin.udc_budgetCtrlDeptInfo_callBackFunc = function (rtnList) {
  // SET	
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]);
    ; // 코드명
    ed_clntNo.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_clntNo.options.hidVal = "";
  }
  scwin.f_getYn();
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  // SET	
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]); // 코드
    ed_acctDeptNm.setValue(rtnList[1]);
    ; // 코드명
    ed_acctDeptCd.hidVal = rtnList[0]; // 코드
  } else {
    ed_acctDeptCd.setValue(""); // 코드
    ed_acctDeptNm.setValue(""); // 코드명
    ed_acctDeptCd.options.hidVal = "";
  }
  scwin.f_getYn();
};
scwin.udc_bizDomCdInfo_callBackFunc = function (rtnList) {
  // SET	
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_BizDomCd.setValue(rtnList[0]); // 코드
    ed_BizDomNm.setValue(rtnList[1]); // 코드명
    ed_BizDomCd.hidVal = rtnList[0]; // 코드
  } else {
    ed_BizDomCd.setValue(""); // 코드
    ed_BizDomNm.setValue(""); // 코드명
    ed_BizDomCd.options.hidVal = "";
  }
  scwin.f_getYn();
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (var i = 1; i < arguments.length; i++) {
      $c.gus.cfSetValue($p, arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (!orgObjCd.options) orgObjCd.options = {};
  if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
    orgObjNm.setValue("");
  }
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
  } else {
    if (orgObjNm != null) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (cls) {
  let clsstr = "";
  let pathstr = "";
  if (ica_stdYm.getValue().trim().length != 6) {
    await $c.win.alert($p, "기준년월은 필수입력입니다.");
    ica_stdYm.focus();
    return;
  }
  if (ed_BizDomCd.getValue() == "") {
    await $c.win.alert($p, "사업영역은 필수입력 입니다.");
    ed_BizDomCd.focus();
    return;
  }
  dma_search.set("distRtStdCd", lc_distRtStdCd.getValue());
  dma_search.set("stdYm", ica_stdYm.getValue());
  dma_search.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("workNo", "CO40");
  if (cls == 1) {
    clsstr = "배부비율생성";
    pathstr = "/ac.co.rsltsmgnt.rsltsanl.CreateDistributionRtCMD.do";
  } else if (cls == 2) {
    scwin.f_getYn();
    clsstr = "생성취소";
    pathstr = "/ac.co.rsltsmgnt.rsltsanl.CancelDistributionRtCMD.do";
  }
  if (!(await $c.win.confirm($p, clsstr + " 하시겠습니까?"))) {
    return;
  }
  sbm_DistRateDet.action = pathstr;
  $c.sbm.execute($p, sbm_DistRateDet);
};

//-------------------------------------------------------------------------
// 배부비율 생성여부 조회 
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function (cls) {
  let sRtnKind = "";
  let sCloseYM = "";
  let sWorkNo = "CO40";
  let sMgntNo = "0";
  let sCloseYMD = "00";
  sCloseYM = ica_stdYm.getValue();
  let isClose = await scwin.f_JobCloseCheckYN(cls, sCloseYM, sCloseYMD, sWorkNo, sMgntNo, sRtnKind);
  if (isClose == "" || isClose == null) {
    ed_distRateYn.setValue("N");
  } else if (isClose == "1") {
    ed_distRateYn.setValue("N");
  } else if (isClose == "2") {
    ed_distRateYn.setValue("Y");
  }
};

//-------------------------------------------------------------------------
// 배부기준에 대한 생성여부 Set
//-------------------------------------------------------------------------
scwin.f_getYn = async function () {
  await scwin.f_JobCloseYN("CUR");
  if (ed_distRateYn.getValue() == "Y") {
    btn_create.setDisabled(true);
    btn_cancel.setDisabled(false);
  } else if (ed_distRateYn.getValue() == "N") {
    btn_create.setDisabled(false);
    btn_cancel.setDisabled(true);
  } else {
    btn_create.setDisabled(true);
    btn_cancel.setDisabled(true);
  }
};

//-------------------------------------------------------------------------
// 배부기준에 대한 화면 Display
//-------------------------------------------------------------------------
scwin.f_setDesign = function () {
  midYearMon.setValue("기준년월 : ");
  ica_stdYm.setDisplayFormat("yyyy/MM");
  ica_stdYm.setValue(scwin.wrkDate);
  btn_create.show();
  btn_cancel.show();
  btn_save.hide();
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  midtitle.setValue(lc_distRtStdCd.getText());
  ica_stdYm.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let colCount = 0;
  for (let i = 0; i < gr_DistRateDet.getTotalCol(); i++) {
    if (gr_DistRateDet.getColumnVisible(i) == true) {
      colCount++;
    }
  }
  let rowCount = ds_DistRate.getRowCount();
  if (rowCount == 0) {
    await $c.win.alert($p, "생성된 데이터가 없습니다.");
    return;
  }
  let excelGridName = lc_distRtStdCd.getText();
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: "배부비율",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: "기준년월 [" + $c.gus.cfGetFormatStr($p, ica_stdYm.getValue(), "####/##") + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: "거래처별t손익 배부비율기준 [" + lc_distRtStdCd.getText() + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: excelGridName + '비율.xlsx',
    sheetName: excelGridName + '비율',
    startRowIndex: 4,
    startColumnIndex: 0,
    columnMove: true,
    columnMoveWithFooter: true,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_DistRateDet, options, infoArr);
};

//-------------------------------------------------------------------------
// 마감여부결과 리턴
//-------------------------------------------------------------------------
scwin.f_JobCloseCheckYN = async function (pReqKind, pCloseYM, pCloseDD, pWorkNo, pMgntNo, pRtnKind) {
  let SQLID = "retrieveCloseInfo";
  let pCycle = "M"; //마감주기

  if (pCloseYM != "" && pWorkNo != "") {
    tmpDataSet = await udc_closeYn.cfCloseYnRequest(pCloseYM, pCloseDD, pWorkNo, pMgntNo, pReqKind, pCycle, SQLID, '000');
    let sCloseStat = tmpDataSet[0];
    return sCloseStat;
  } else {
    return;
  }
};
scwin.udc_bizDomCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_BizDomCd, ed_BizDomNm, 'T');
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_acctDeptCd, ed_acctDeptNm, 'T');
};
scwin.udc_clntList_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', ed_clntNo, ed_clntNm, 'T');
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_clntNo, ed_clntNm, 'F');
};
scwin.sbm_DistRateDet_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_getYn();
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_DistRate.getRowCount();
  gr_DistRateDet.setFocusedCell(0, 0);
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (lc_distRtStdCd.getValue() == "10") {
    //매출50 BL카운트50
    gr_DistRateDet.setColumnVisible("rsltsAmt3", false);
    gr_DistRateDet.setColumnVisible("distRt3", false);
    gr_DistRateDet.setColumnVisible("rsltsAmt2", true);
    gr_DistRateDet.setColumnVisible("distRt2", true);
    gr_DistRateDet.setHeaderValue("h_rsltsAmt2", "B/L COUNT");
    gr_DistRateDet.setColumnVisible("transCargoClsNm", false);
  } else if (lc_distRtStdCd.getValue() == "40") {
    //매출100
    gr_DistRateDet.setColumnVisible("rsltsAmt2", false);
    gr_DistRateDet.setColumnVisible("rsltsAmt3", false);
    gr_DistRateDet.setColumnVisible("distRt2", false);
    gr_DistRateDet.setColumnVisible("distRt3", false);
    gr_DistRateDet.setColumnVisible("transCargoClsNm", false);
  } else if (lc_distRtStdCd.getValue() == "20") {
    //매출50 인력50
    gr_DistRateDet.setColumnVisible("rsltsAmt3", false);
    gr_DistRateDet.setColumnVisible("distRt3", false);
    gr_DistRateDet.setColumnVisible("rsltsAmt2", true);
    gr_DistRateDet.setColumnVisible("distRt2", true);
    gr_DistRateDet.setHeaderValue("h_rsltsAmt2", "인력");
    gr_DistRateDet.setColumnVisible("transCargoClsNm", true);
  }
  if (lc_distRtStdCd.getValue() == "20") {
    gr_DistRateDet.setSubtotalVisible(true);
  } else {
    gr_DistRateDet.setSubtotalVisible(false);
  }
  scwin.f_getYn(); // 배부비율 생성후 마감여부를 다시 체크한다.
};
scwin.lc_distRtStdCd_onviewchange = function (info) {
  midtitle.setValue(lc_distRtStdCd.getText());
  scwin.f_getYn();
};
scwin.ica_stdYm_onblur = function (e) {
  if (ica_stdYm.getValue().trim().length == 6) {
    scwin.f_getYn();
  }
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2');
};
scwin.udc_bizDomCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_BizDomCd, ed_BizDomNm, '3');
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Save(1);
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Save(2);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_retrieve',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'기준년월',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_search.stdYm','ev:onblur':'scwin.ica_stdYm_onblur',displayFormat:'yyyy/MM',validateOnInput:'true',style:'',id:'ica_stdYm',objtype:'data',class:' cal',mandatory:'true',calendarValueType:'yearMonth'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업영역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'3',objTypeCode:'data',editTypeCode:'focus',refDataCollection:'dma_search',popupID:'',code:'bizDomCd',validExpCode:'사업영역:no:length=3',onloadCallbackFunc:'',maxlengthName:'30',mandatoryName:'false',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_bizDomCdInfo_onclickEvent',allowCharCode:'0-9',codeId:'ed_BizDomCd',selectID:'retrieveBizDomCdInfo',popupTitle:'',validTitle:'사업영역',objTypeName:'data',nameId:'ed_BizDomNm',style:'',id:'udc_bizDomCdInfo','ev:onblurCodeEvent':'scwin.udc_bizDomCdInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'배부비율기준',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'false',validExp:'배부비율기준:yes',allOption:'false',mandatory:'true',displayMode:'label',ref:'data:dma_search.distRtStdCd',appearance:'minimal',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.lc_distRtStdCd_onviewchange',disabled:'false',style:'',id:'lc_distRtStdCd',class:' w150',objType:'data',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',refDataCollection:'dma_search',popupID:'',code:'acctDeptCd',onloadCallbackFunc:'',maxlengthName:'30',mandatoryName:'false',mandatoryCode:'false','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',allowCharCode:'0-9',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_acctDeptCd',popupTitle:'',validTitle:'귀속부서',objTypeName:'data',nameId:'ed_acctDeptNm',style:'',id:'udc_acctDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'6',objTypeCode:'data',refDataCollection:'dma_search','ev:onviewchangeNameEvent':'scwin.udc_clntList_onviewchangeNameEvent',popupID:'',code:'clntNo',onloadCallbackFunc:'',mandatoryCode:'false','ev:onclickEvent':'scwin.udc_clntList_onclickEvent',allowCharCode:'0-9',codeId:'ed_clntNo',selectID:'retrieveClntList',popupTitle:'',validTitle:'거래처',objTypeName:'data',nameId:'ed_clntNm',style:'',id:'udc_clntList','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'배부비율생성여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',readOnly:'true',id:'ed_distRateYn',class:' w150',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_FieldClear',style:'',id:'btn_clear',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Retrieve',disabled:'',style:'',id:'btn_trigger1',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'midtitle',label:'매출액',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_DistRateDet',btnUser:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{dataDragSelectAutoScroll:'false',readOnly:'true',columnMoveWithFooter:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_DistRate',style:'',columnMove:'true',autoFit:'allColumn',id:'gr_DistRateDet',visibleRowNum:'13',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'기준년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column17',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column13',value:'화울구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column5',value:'매출액 1(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'h_rsltsAmt2',value:'매출액 2(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column19',value:'매출액 3(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'배부비율 1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column23',value:'배부비율 2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column25',value:'배부비율 3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'100',displayFormat:'####/##',inputType:'text',id:'stdYm',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'130',inputType:'text',id:'acctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',colMerge:'true',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{hidden:'true',width:'130',inputType:'text',id:'transCargoClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'transCargoClsNm',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'text',id:'rsltsAmt1',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'text',id:'rsltsAmt2',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'text',id:'rsltsAmt3',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0.0000',inputType:'text',id:'distRt1',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0.0000',inputType:'text',id:'distRt2',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0.0000',inputType:'text',id:'distRt3',displayMode:'label',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'transCargoClsNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column45',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("rsltsAmt1")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column44',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column43',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum("rsltsAmt3")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column42',displayMode:'label',dataType:'number',expression:'sum("distRt1")',excelCellType:'number',textAlign:'right',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column41',displayMode:'label',dataType:'number',expression:'sum("distRt2")',excelCellType:'number',textAlign:'right',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column40',displayMode:'label',dataType:'number',expression:'sum("distRt3")',excelCellType:'number',textAlign:'right',displayFormat:'#,##0.0000'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'acctDeptNm',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column58',displayMode:'label',expression:'sum("rsltsAmt1")',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column57',displayMode:'label',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column56',displayMode:'label',expression:'sum("rsltsAmt3")',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column55',displayMode:'label',expression:'sum("distRt1")',excelCellType:'number',dataType:'number',textAlign:'right',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column54',displayMode:'label',expression:'sum("distRt2")',excelCellType:'number',dataType:'number',textAlign:'right',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column53',displayMode:'label',expression:'sum("distRt3")',excelCellType:'number',dataType:'number',textAlign:'right',displayFormat:'#,##0.0000'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'총합',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum("rsltsAmt1")',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',id:'column32',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'sum("rsltsAmt2")',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',id:'column31',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'sum("rsltsAmt3")',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',id:'column30',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'sum("distRt1")',textAlign:'right',dataType:'number',width:'130',inputType:'expression',id:'column29',displayMode:'label',excelCellType:'number',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{expression:'sum("distRt2")',textAlign:'right',dataType:'number',width:'130',inputType:'expression',id:'column28',displayMode:'label',excelCellType:'number',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{expression:'sum("distRt3")',textAlign:'right',dataType:'number',width:'130',inputType:'expression',id:'column27',displayMode:'label',excelCellType:'number',displayFormat:'#,##0.0000'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'C:U','ev:onclick':'scwin.btn_create_onclick',style:'',id:'btn_create',type:'button',class:'btn',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부비율생성'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'D','ev:onclick':'scwin.btn_cancel_onclick',style:'',id:'btn_cancel',type:'button',class:'btn',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성취소'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px;visibility:hidden;display: none',id:'udc_closeYn'}}]}]}]}]}]})