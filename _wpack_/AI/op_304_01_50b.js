/*amd /AI/op_304_01_50b.xml 41045 80ce4f9df2ce8f549551ee4d7007d4a1ecc83c78e6f1213304872ed4bd189c8f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcostRt',name:'원가율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpClntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'usrId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd20',name:'20\'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrSizCd40',name:'40\'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrSizCd45',name:'45\'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'WT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출기본단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellDcScAmt',name:'매출할증',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'매출계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입기본단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsDcScAmt',name:'매입할증',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'매입계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitAmt',name:'이익금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitRt',name:'원가율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'blBookingNo',name:'BL/BOOKING',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKndCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveOrderEchTransPcostRateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'scwin.sbm_retreive_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_odrKndCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD113',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_odrKndCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_odrKndCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_odrKndCd_submitdone','ev:submiterror':'scwin.sbm_odrKndCd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sLoUpperLobranCd = "";
scwin.vCurDate = "";
scwin.strDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strDate = scwin.vCurDate;
  scwin.sLoUpperLobranCd = $c.ses.getLoUpperLobranCd();
  let wrkClsCdVal = co_lc_srchWrkClsCd.getValue();
  if (wrkClsCdVal == "B") {
    gr_cntrWrkRslts.setColumnVisible("qty", true);
    gr_cntrWrkRslts.setColumnVisible("wt", true);
    gr_cntrWrkRslts.setColumnVisible("cbm", true);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", false);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", false);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", false);
  } else {
    gr_cntrWrkRslts.setColumnVisible("qty", false);
    gr_cntrWrkRslts.setColumnVisible("wt", false);
    gr_cntrWrkRslts.setColumnVisible("cbm", false);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", true);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", true);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", true);
  }
  co_lc_srchLobran.setSelectedIndex(0);
  co_lc_srchWrkClsCd.setSelectedIndex(1);
  $c.sbm.execute($p, sbm_odrKndCd);
};
scwin.onUdcCompleted = function () {
  ica_srchWrkStDt.setValue(scwin.strDate);
  ica_srchWrkEndDt.setValue(scwin.strDate);
  if (scwin.sLoUpperLobranCd != "") {
    let idx = co_lc_srchLobran.getItemIndex(scwin.sLoUpperLobranCd);
    if (idx > 0) {
      co_lc_srchLobran.setSelectedIndex(idx);
    } else {
      co_lc_srchLobran.setSelectedIndex(0);
    }
  }
  co_lc_srchLobran.setFocus();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_srchWrkStDt])) || !(await $c.gus.cfValidate($p, [ica_srchWrkEndDt]))) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_srchWrkStDt.getValue(), ica_srchWrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_srchWrkStDt.setFocus();
    return;
  }
  if (chk_retrvStpYn.getValue() != "") {
    if (ed_bilgClntNo.getValue() == "") {
      await $c.win.alert($p, "화주별 조회 선택시 청구화주는 필수 입력항목입니다.");
      return false;
    }
  }
  scwin.f_ProcessBinding();
  $c.gus.cfShowDSWaitMsg($p, gr_cntrWrkRslts);
  await $c.sbm.execute($p, sbm_retreive);
};
scwin.f_ProcessBinding = function () {
  dma_srchCond.set("lobranCd", co_lc_srchLobran.getValue());
  dma_srchCond.set("wrkStDt", ica_srchWrkStDt.getValue());
  dma_srchCond.set("wrkEndDt", ica_srchWrkEndDt.getValue());
  dma_srchCond.set("wrkClsCd", co_lc_srchWrkClsCd.getValue());
  dma_srchCond.set("pcostRt", ed_pcostRt.getValue());
  dma_srchCond.set("odrKndCd", lc_odrKndCd.getValue());
  dma_srchCond.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_srchCond.set("sellAmt", ed_sellAmt.getValue());
  dma_srchCond.set("lineCd1", ed_lineCd1.getValue());
  dma_srchCond.set("lineCd2", ed_lineCd2.getValue());
  dma_srchCond.set("lineCd3", ed_lineCd3.getValue());
  dma_srchCond.set("dptCd1", ed_dptCd1.getValue());
  dma_srchCond.set("dptCd2", ed_dptCd2.getValue());
  dma_srchCond.set("arvCd1", ed_arvCd1.getValue());
  dma_srchCond.set("arvCd2", ed_arvCd2.getValue());
  dma_srchCond.set("grpClntNo", ed_grpClntNo.getValue());
  dma_srchCond.set("odrNo", ed_odrNo.getValue());
  dma_srchCond.set("usrId", ed_usrId.getValue());
  dma_srchCond.set("alloccarPicId", ed_alloccarPicId.getValue());
};
scwin.f_Rate = function () {
  // TODO: GAUCE ColumnProp sumText/subSumText 동적 수식 설정은 WebSquare gridView footer expression으로 대체됨 (XML에 정적 선언)
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    udc_bilgClnt.ilCommonPopUp(scwin.callback_bilgClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "화주,화주코드,화주명");
  }
  if (disGubun == "L1") {
    udc_lineCd1.ilCommonPopUp(scwin.callback_lineCd1, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
  }
  if (disGubun == "L2") {
    udc_lineCd2.ilCommonPopUp(scwin.callback_lineCd2, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
  }
  if (disGubun == "L3") {
    udc_lineCd3.ilCommonPopUp(scwin.callback_lineCd3, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
  }
  if (disGubun == "R1") {
    udc_dptCd1.ilCommonPopUp(scwin.callback_dptCd1, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  }
  if (disGubun == "R2") {
    udc_dptCd2.ilCommonPopUp(scwin.callback_dptCd2, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  }
  if (disGubun == "R3") {
    udc_arvCd1.ilCommonPopUp(scwin.callback_arvCd1, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  }
  if (disGubun == "R4") {
    udc_arvCd2.ilCommonPopUp(scwin.callback_arvCd2, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  }
  if (disGubun == "G") {
    udc_grpClnt.ilCommonPopUp(scwin.callback_grpClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "T", "그룹거래처,코드,코드명");
  }
  if (disGubun == "UI") {
    udc_usr.ilCommonPopUp(scwin.callback_usr, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
  }
  if (disGubun == "AI") {
    udc_alloccarPic.ilCommonPopUp(scwin.callback_alloccarPic, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
  }
};
scwin.callback_bilgClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm, null);
};
scwin.callback_lineCd1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd1, txt_lineNm1, null);
};
scwin.callback_lineCd2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd2, txt_lineNm2, null);
};
scwin.callback_lineCd3 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd3, txt_lineNm3, null);
};
scwin.callback_dptCd1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptCd1, txt_dptNm1, null);
};
scwin.callback_dptCd2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptCd2, txt_dptNm2, null);
};
scwin.callback_arvCd1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvCd1, txt_arvNm1, null);
};
scwin.callback_arvCd2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvCd2, txt_arvNm2, null);
};
scwin.callback_grpClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_grpClntNo, txt_grpClntNm, null);
};
scwin.callback_usr = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_usrId, txt_userNm, null);
};
scwin.callback_alloccarPic = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, txt_alloccarPicNm, null);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  ica_srchWrkStDt.setValue(scwin.strDate);
  ica_srchWrkEndDt.setValue(scwin.strDate);
};
scwin.f_toExcel1 = function () {
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, {
    "fileName": "거래처별 운송 원가율 조회.xlsx",
    "sheetName": "거래처별 운송 원가율 조회"
  });
};
scwin.f_filter = function () {
  if (chk_retrvStpYn.getValue() != "") {
    co_lc_srchLobran.setMandatory(false);
    ed_bilgClntNo.setMandatory(true);
    $c.gus.cfDisableObjects($p, [co_lc_srchLobran]);
  } else {
    co_lc_srchLobran.setMandatory(true);
    ed_bilgClntNo.setMandatory(false);
    $c.gus.cfEnableObjects($p, [co_lc_srchLobran]);
  }
};
scwin.f_SetGridUnit = function () {
  let unitVal = lc_unit.getValue();
  let unit = unitVal == "0" ? 1 : 1000;
  let decao = unitVal == "0" ? "1" : "4";
  let amtCols = ["sellAmt", "sellDcScAmt", "totSellAmt", "pchsAmt", "pchsDcScAmt", "totPchsAmt", "profitAmt"];
  let decFormat = "";
  if (decao == "1") {
    decFormat = "#,##0.0";
  } else {
    decFormat = "#,##0.0000";
  }
  for (let i = 0; i < amtCols.length; i++) {
    gr_cntrWrkRslts.setColumnDisplayFormat(amtCols[i], decFormat);
  }

  // TODO: GAUCE ColumnProp Value 동적 수식({colId * unit}) 및 sumText 동적 수식은 WebSquare에서 직접 지원하지 않음. 서버 측 또는 displayFormatter로 대체 필요.
};
scwin.sbm_retreive_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
};
scwin.sbm_retreive_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  $c.gus.cfShowError($p, e);
};
scwin.ds_cntrWrkRslts_onloadcompleted = async function (e) {
  let rowCnt = ds_cntrWrkRslts.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  } else {
    scwin.f_Rate();
    let wrkClsCdVal = co_lc_srchWrkClsCd.getValue();
    if (wrkClsCdVal == "B") {
      gr_cntrWrkRslts.setColumnVisible("qty", true);
      gr_cntrWrkRslts.setColumnVisible("wt", true);
      gr_cntrWrkRslts.setColumnVisible("cbm", true);
      gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", false);
      gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", false);
      gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", false);
    } else {
      gr_cntrWrkRslts.setColumnVisible("qty", false);
      gr_cntrWrkRslts.setColumnVisible("wt", false);
      gr_cntrWrkRslts.setColumnVisible("cbm", false);
      gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", true);
      gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", true);
      gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", true);
    }
    cntrWrkRsltsRows.setValue(rowCnt);
  }
};
scwin.co_lc_srchLobran_onchange = function (e) {};
scwin.co_lc_srchWrkClsCd_onchange = function (e) {
  let wrkClsCdVal = co_lc_srchWrkClsCd.getValue();
  let filteredData = [];
  for (let i = 0; i < ds_odrKndCd.getRowCount(); i++) {
    let fltrCd1 = ds_odrKndCd.getCellData(i, "fltrCd1");
    if (wrkClsCdVal == "C") {
      if (fltrCd1 == "C") {
        filteredData.push(i);
      }
    } else if (wrkClsCdVal == "B") {
      if (fltrCd1 == "B") {
        filteredData.push(i);
      }
    }
  }
  ds_odrKndCd.insertRow(0);
  ds_odrKndCd.setCellData(0, "cd", "");
  ds_odrKndCd.setCellData(0, "cdNm", "전체");
  lc_odrKndCd.setSelectedIndex(0);
};
scwin.lc_unit_onchange = function (e) {
  scwin.f_SetGridUnit();
};
scwin.sbm_odrKndCd_submitdone = function (e) {
  ds_odrKndCd.insertRow(0);
  ds_odrKndCd.setCellData(0, "cd", "");
  ds_odrKndCd.setCellData(0, "cdNm", "전체");
  lc_odrKndCd.setSelectedIndex(0);
};
scwin.sbm_odrKndCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ed_bilgClntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, "1");
};
scwin.ed_lineCd1_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd1, txt_lineNm1, "L1");
};
scwin.ed_lineCd2_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd2, txt_lineNm2, "L2");
};
scwin.ed_lineCd3_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd3, txt_lineNm3, "L3");
};
scwin.ed_dptCd1_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptCd1, txt_dptNm1, "R1");
};
scwin.ed_dptCd2_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptCd2, txt_dptNm2, "R2");
};
scwin.ed_arvCd1_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvCd1, txt_arvNm1, "R3");
};
scwin.ed_arvCd2_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvCd2, txt_arvNm2, "R4");
};
scwin.ed_grpClntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_grpClntNo, txt_grpClntNm, "G");
};
scwin.ed_usrId_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_usrId, txt_userNm, "UI");
};
scwin.ed_alloccarPicId_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, txt_alloccarPicNm, "AI");
};
scwin.gr_cntrWrkRslts_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0 && columnId == "odrNo") {
    let fileURL = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_17b.xml";
    let tabTitle = "운송단위별 원가율 조회";
    let param = {
      sellDept: co_lc_srchLobran.getValue(),
      fromRsltsDt: ica_srchWrkStDt.getValue(),
      toRsltsDt: ica_srchWrkEndDt.getValue(),
      odrNofromRequest: ds_cntrWrkRslts.getCellData(rowIndex, "odrNo")
    };
    $c.win.openMenu($p, tabTitle, fileURL, "op_304_01_17b.xml", param);
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.chk_retrvStpYn_onchange = function (e) {
  scwin.f_filter();
};
scwin.txt_bilgClntNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, "1", false);
};
scwin.txt_grpClntNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_grpClntNm, ed_grpClntNo, "G", false);
};
scwin.txt_lineNm1_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm1, ed_lineCd1, "L1", false);
};
scwin.txt_lineNm2_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm2, ed_lineCd2, "L2", false);
};
scwin.txt_lineNm3_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm3, ed_lineCd3, "L3", false);
};
scwin.txt_dptNm1_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_dptNm1, ed_dptCd1, "R1", false);
};
scwin.txt_dptNm2_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_dptNm2, ed_dptCd2, "R2", false);
};
scwin.txt_arvNm1_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_arvNm1, ed_arvCd1, "R3", false);
};
scwin.txt_arvNm2_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_arvNm2, ed_arvCd2, "R4", false);
};
scwin.txt_alloccarPicNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_alloccarPicNm, ed_alloccarPicId, "AI", false);
};
scwin.txt_userNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_userNm, ed_usrId, "UI", false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchLobran',search:'start',style:'width:230px;',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchWrkDt',edFromId:'ica_srchWrkStDt',edToId:'ica_srchWrkEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:110px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_unit',search:'start',style:'width:230px;',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_grpClnt',codeId:'ed_grpClntNo',nameId:'txt_grpClntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_sellAmt',placeholder:'',style:'width: 85px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원 이상',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원가율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:''},E:[{T:1,N:'xf:input',A:{style:'width: 85px;',id:'ed_pcostRt',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'% 이상',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_lineCd1',codeId:'ed_lineCd1',nameId:'txt_lineNm1',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_lineCd2',codeId:'ed_lineCd2',nameId:'txt_lineNm2',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line3',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_lineCd3',codeId:'ed_lineCd3',nameId:'txt_lineNm3',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발구간1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_dptCd1',codeId:'ed_dptCd1',nameId:'txt_dptNm1',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발구간2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_dptCd2',codeId:'ed_dptCd2',nameId:'txt_dptNm2',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착구간1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_arvCd1',codeId:'ed_arvCd1',nameId:'txt_arvNm1',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착구간2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_arvCd2',codeId:'ed_arvCd2',nameId:'txt_arvNm2',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_alloccarPic',codeId:'ed_alloccarPicId',nameId:'txt_alloccarPicNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_usr',codeId:'ed_usrId',nameId:'txt_userNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_retrvStpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주별조회'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더별 원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width:70px;',allOption:'false',id:'lc_unit',class:'',direction:'auto',mandatory:'true'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_cntrWrkRslts',id:'gr_cntrWrkRslts',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptNm',inputType:'text',value:'매출부서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',value:'거래처',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd20',inputType:'text',value:'20\'',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd40',inputType:'text',value:'40\'',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd45',inputType:'text',value:'45\'',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'QTY',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',value:'WT',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',value:'CBM',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',value:'매출액',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'sellDcScAmt',value:'매입액',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'totSellAmt',value:'이익',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'BL/<br/>BOOKING',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellLodeptNm',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNm',value:'할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrSizCd20',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd40',value:'할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrSizCd45',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'이익금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wt',value:'원가율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd20',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd40',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd45',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'80',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'80',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'80',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellDcScAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totSellAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsDcScAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totPchsAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'profitAmt',value:'',displayMode:'label',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'profitRt',value:'',displayMode:'label',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blBookingNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column83',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column82',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'sum(\'cntrSizCd20\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'cntrSizCd40\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'cntrSizCd45\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'cbm\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellDcScAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'totSellAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'pchsDcScAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'totPchsAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'profitAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'cntrWrkRsltsRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})