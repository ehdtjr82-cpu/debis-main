/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_50b.xml 59090 9fc66910453ca2f081bf16fdd850d8323a45c6c4acd95015aed884fa55bbcc88 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcostRt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd1',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd2',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd3',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptCd1',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptCd2',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvCd1',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvCd2',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpClntNo',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'usrId',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srchWrkClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd20',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd40',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd45',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDcScAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcScAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitAmt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitRt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBookingNo',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_cmOP190',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_odrKndCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD113',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_odrKndCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_odrKndCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_srchWrkClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP190',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_srchWrkClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_srchWrkClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveOrderEchTransPcostRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 오더별 원가율 조회
 * id : op_304_01_50b
 */

// 세션정보 가져오기
scwin.sUserId = $c.data.getMemInfo($p, "userId");
scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd");
scwin.sClntNo = $c.data.getMemInfo($p, "clntNo");
scwin.sClntNm = $c.data.getMemInfo($p, "clntNm");
scwin.sLobranCd = $c.data.getMemInfo($p, "lobranCd");
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 8); // 현재년월일을 구한다.
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.strDate = scwin.strFromDate + scwin.strToDate;
scwin.onpageload = async function () {
  //오더종류
  $c.sbm.execute($p, sbm_odrKndCd);
  var codeOptions1 = [{
    method: "getLuxeComboDataNcall",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "co_lc_srchLobran"
  }];
  $c.data.setGauceUtil($p, codeOptions1);

  //공통코드 작업구분(OP190)
  const codeOptions = [{
    grpCd: "OP190",
    compID: "co_lc_srchWrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);

  // if (co_lc_srchWrkClsCd.getValue() == 'B') {
  //     gr_cntrWrkRslts.setColumnVisible("qty", true);
  //     gr_cntrWrkRslts.setColumnVisible("wt", true);
  //     gr_cntrWrkRslts.setColumnVisible("cbm", true);
  //     gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", false);
  //     gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", false);
  //     gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", false);

  // } else {
  //     gr_cntrWrkRslts.setColumnVisible("qty", false);
  //     gr_cntrWrkRslts.setColumnVisible("wt", false);
  //     gr_cntrWrkRslts.setColumnVisible("cbm", false);
  //     gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", true);
  //     gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", true);
  //     gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", true);
  // }

  //co_lc_srchLobran.setSelectedIndex(0);

  //전체조건 추가
  var sLoUpperLobranCd = scwin.sLobranCd;

  //if (co_lc_srchLobran.IndexOfColumn("lobranCd", sLoUpperLobranCd) > 0) {
  if (true) {
    co_lc_srchLobran.setValue(sLoUpperLobranCd);
  } else {
    co_lc_srchLobran.setSelectedIndex(0);
  }
  co_lc_srchLobran.focus();
};
scwin.callBackCommonCode = function () {
  dlt_commonCodeOP190.sort("cd", 0);
  var jsonData1 = dlt_commonCodeOP190.getAllJSON();
  dlt_cmOP190.setJSON(jsonData1);
  $p.setTimeout(function () {
    co_lc_srchWrkClsCd.setSelectedIndex(1);
  }, 1000);
};
scwin.onUdcCompleted = function () {
  ed_srchWrkStDt.setValue(scwin.strToDate);
  ed_srchWrkEndDt.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (chk_retrvStpYn.getValue() == 1) {
    if (ed_bilgClntNo.getValue() == "") {
      $c.win.alert($p, "화주별 조회 선택시 청구화주는 필수 입력항목입니다.");
      return false;
    }
  } else {
    co_lc_srchLobran.setMandatory(false);
  }
  ds_cntrWrkRslts.removeAll();
  let chk = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_srchWrkStDt.getValue(), ed_srchWrkEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchWrkStDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retreive);
};
scwin.f_filter = function (info) {
  if (info.newValue == 1) {
    co_lc_srchLobran.setMandatory(false);
    co_lc_srchLobran.setDisabled(true);
    ed_bilgClntNo.setMandatory(true);
  } else {
    co_lc_srchLobran.setMandatory(true);
    co_lc_srchLobran.setDisabled(false);
    ed_bilgClntNo.setMandatory(false);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  ed_srchWrkStDt.setValue(scwin.strToDate);
  ed_srchWrkEndDt.setValue(scwin.strToDate);
};

//공통팝업 호출
scwin.comm_popup = function (popKind, paramCd, paramNm) {
  if (popKind == "bil") {
    //청구화주
    udc_comCodeBilgClnt.cfCommonPopUp(scwin.udc_comCodeBilgClnt_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "화주,화주코드,화주명");
  } else if (popKind == "grpClntAll") {
    //그룹거래처 돋보기용
    udc_comCodeGrpClnt.cfCommonPopUp(scwin.udc_comCodeGrpClnt_callBackFunc, paramCd, paramNm, "F", null, null, null, null, null, null, null, null, null, null, "T", "그룹거래처,코드,코드명");
  } else if (popKind == "grpClnt") {
    //그룹거래처
    udc_comCodeGrpClnt.cfCommonPopUp(scwin.udc_comCodeGrpClnt_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "그룹거래처,코드,코드명");
  } else if (popKind == "dpt1") {
    //출발구간1
    udc_comCodeDpt1.cfCommonPopUp(scwin.udc_comCodeDpt1_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  } else if (popKind == "dpt2") {
    //출발구간2
    udc_comCodeDpt2.cfCommonPopUp(scwin.udc_comCodeDpt2_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  } else if (popKind == "arv1") {
    //도착구간1
    udc_comCodeArv.cfCommonPopUp(scwin.udc_comCodeArv_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  } else if (popKind == "arv2") {
    //도착구간2
    udc_comCodeArv2.cfCommonPopUp(scwin.udc_comCodeArv2_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,코드,코드명");
  } else if (popKind == "carPic") {
    //배차담당
    udc_comCodeAlloccarPic.cfCommonPopUp(scwin.udc_comCodeAlloccarPic_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", null);
  } else if (popKind == "odrPic") {
    //오더담당
    udc_comCodeUser.cfCommonPopUp(scwin.udc_comCodeUser_callBackFunc, paramCd, paramNm, "T", null, null, null, null, null, null, null, null, null, null, "F", null);
  }
};

//청구화주
scwin.udc_comCodeBilgClnt_onclickEvent = function (e) {
  scwin.comm_popup("bil", ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue());
};
scwin.udc_comCodeBilgClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};
scwin.udc_comCodeBilgClnt_onblurCodeEvent = function (e) {
  if (ed_bilgClntNo.getValue() === "") {
    ed_bilgClntNm.setValue("");
  } else {
    scwin.comm_popup("bil", ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue());
  }
};
scwin.udc_comCodeBilgClnt_onviewchangeNameEvent = function (info) {
  if (ed_bilgClntNm.getValue() === "") {
    ed_bilgClntNo.setValue("");
  } else {
    scwin.comm_popup("bil", ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue());
  }
};

//그룹거래처
scwin.udc_comCodeGrpClnt_onclickEvent = function (e) {
  scwin.comm_popup("grpClntAll", ed_grpClntNo.getValue(), ed_grpClntNm.getValue());
};
scwin.udc_comCodeGrpClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_grpClntNo, ed_grpClntNm);
};
scwin.udc_comCodeGrpClnt_onblurCodeEvent = function (e) {
  if (ed_grpClntNo.getValue() === "") {
    ed_grpClntNm.setValue("");
  } else {
    scwin.comm_popup("grpClnt", ed_grpClntNo.getValue(), ed_grpClntNm.getValue());
  }
};
scwin.udc_comCodeGrpClnt_onviewchangeNameEvent = function (info) {
  if (ed_grpClntNm.getValue() === "") {
    ed_grpClntNo.setValue("");
  } else {
    scwin.comm_popup("grpClnt", ed_grpClntNo.getValue(), ed_grpClntNm.getValue());
  }
};

//Line popup
scwin.line_popup = function (lineNum, lineCd, lineNm) {
  if (lineNum == 1) {
    udc_comCodeLine.cfCommonPopUp(scwin.udc_comCodeLine_callBackFunc, lineCd, lineNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
  } else if (lineNum == 2) {
    udc_comCodeLine2.cfCommonPopUp(scwin.udc_comCodeLine2_callBackFunc, lineCd, lineNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
  } else if (lineNum == 3) {
    udc_comCodeLine3.cfCommonPopUp(scwin.udc_comCodeLine3_callBackFunc, lineCd, lineNm, "T", null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
  }
};
scwin.udc_comCodeLine_onclickEvent = function (e) {
  scwin.line_popup(1, ed_lineCd1.getValue(), ed_lineNm1.getValue());
};
scwin.udc_comCodeLine_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd1, ed_lineNm1);
};
scwin.udc_comCodeLine_onblurCodeEvent = function (e) {
  if (ed_lineCd1.getValue() === "") {
    ed_lineNm1.setValue("");
  } else {
    scwin.line_popup(1, ed_lineCd1.getValue(), ed_lineNm1.getValue());
  }
};
scwin.udc_comCodeLine_onviewchangeNameEvent = function (info) {
  if (ed_lineNm1.getValue() === "") {
    ed_lineCd1.setValue("");
  } else {
    scwin.line_popup(1, ed_lineCd1.getValue(), ed_lineNm1.getValue());
  }
};

//Line2
scwin.udc_comCodeLine2_onclickEvent = function (e) {
  scwin.line_popup(2, ed_lineCd2.getValue(), ed_lineNm2.getValue());
};
scwin.udc_comCodeLine2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd2, ed_lineNm2);
};
scwin.udc_comCodeLine2_onblurCodeEvent = function (e) {
  if (ed_lineCd2.getValue() === "") {
    ed_lineNm2.setValue("");
  } else {
    scwin.line_popup(2, ed_lineCd2.getValue(), ed_lineNm2.getValue());
  }
};
scwin.udc_comCodeLine2_onviewchangeNameEvent = function (info) {
  if (ed_lineNm2.getValue() === "") {
    ed_lineCd2.setValue("");
  } else {
    scwin.line_popup(2, ed_lineCd2.getValue(), ed_lineNm2.getValue());
  }
};

//Line3
scwin.udc_comCodeLine3_onclickEvent = function (e) {
  scwin.line_popup(3, ed_lineCd3.getValue(), ed_lineNm3.getValue());
};
scwin.udc_comCodeLine3_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd3, ed_lineNm3);
};
scwin.udc_comCodeLine3_onblurCodeEvent = function (e) {
  if (ed_lineCd3.getValue() === "") {
    ed_lineNm3.setValue("");
  } else {
    scwin.line_popup(3, ed_lineCd3.getValue(), ed_lineNm3.getValue());
  }
};
scwin.udc_comCodeLine3_onviewchangeNameEvent = function (info) {
  if (ed_lineNm3.getValue() === "") {
    ed_lineCd3.setValue("");
  } else {
    scwin.line_popup(3, ed_lineCd3.getValue(), ed_lineNm3.getValue());
  }
};

//출발구간1
scwin.udc_comCodeDpt1_onclickEvent = function (e) {
  scwin.comm_popup("dpt1", ed_dptCd1.getValue(), ed_dptNm1.getValue());
};
scwin.udc_comCodeDpt1_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptCd1, ed_dptNm1);
};
scwin.udc_comCodeDpt1_onblurCodeEvent = function (e) {
  if (ed_dptCd1.getValue() === "") {
    ed_dptNm1.setValue("");
  } else {
    scwin.comm_popup("dpt1", ed_dptCd1.getValue(), ed_dptNm1.getValue());
  }
};
scwin.udc_comCodeDpt1_onviewchangeNameEvent = function (info) {
  if (ed_dptNm1.getValue() === "") {
    ed_dptCd1.setValue("");
  } else {
    scwin.comm_popup("dpt1", ed_dptCd1.getValue(), ed_dptNm1.getValue());
  }
};

//출발구간2
scwin.udc_comCodeDpt2_onclickEvent = function (e) {
  scwin.comm_popup("dpt2", ed_dptCd2.getValue(), ed_dptNm2.getValue());
};
scwin.udc_comCodeDpt2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptCd2, ed_dptNm2);
};
scwin.udc_comCodeDpt2_onblurCodeEvent = function (e) {
  if (ed_dptCd2.getValue() === "") {
    ed_dptNm2.setValue("");
  } else {
    scwin.comm_popup("dpt2", ed_dptCd2.getValue(), ed_dptNm2.getValue());
  }
};
scwin.udc_comCodeDpt2_onviewchangeNameEvent = function (info) {
  if (ed_dptNm2.getValue() === "") {
    ed_dptCd2.setValue("");
  } else {
    scwin.comm_popup("dpt2", ed_dptCd2.getValue(), ed_dptNm2.getValue());
  }
};

//도착구간1
scwin.udc_comCodeArv_onclickEvent = function (e) {
  scwin.comm_popup("arv1", ed_arvCd1.getValue(), ed_arvNm1.getValue());
};
scwin.udc_comCodeArv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvCd1, ed_arvNm1);
};
scwin.udc_comCodeArv_onblurCodeEvent = function (e) {
  if (ed_arvCd1.getValue() === "") {
    ed_arvNm1.setValue("");
  } else {
    scwin.comm_popup("arv1", ed_arvCd1.getValue(), ed_arvNm1.getValue());
  }
};
scwin.udc_comCodeArv_onviewchangeNameEvent = function (info) {
  if (ed_arvNm1.getValue() === "") {
    ed_arvCd1.setValue("");
  } else {
    scwin.comm_popup("arv1", ed_arvCd1.getValue(), ed_arvNm1.getValue());
  }
};

//도착지2
scwin.udc_comCodeArv2_onclickEvent = function (e) {
  scwin.comm_popup("arv2", ed_arvCd2.getValue(), ed_arvNm2.getValue());
};
scwin.udc_comCodeArv2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvCd2, ed_arvNm2);
};
scwin.udc_comCodeArv2_onblurCodeEvent = function (e) {
  if (ed_arvCd2.getValue() === "") {
    ed_arvNm2.setValue("");
  } else {
    scwin.comm_popup("arv2", ed_arvCd2.getValue(), ed_arvNm2.getValue());
  }
};
scwin.udc_comCodeArv2_onviewchangeNameEvent = function (info) {
  if (ed_arvNm2.getValue() === "") {
    ed_arvCd2.setValue("");
  } else {
    scwin.comm_popup("arv2", ed_arvCd2.getValue(), ed_arvNm2.getValue());
  }
};

//배차담당
scwin.udc_comCodeAlloccarPic_onclickEvent = function (e) {
  scwin.comm_popup("carPic", ed_alloccarPicId.getValue(), ed_alloccarPicNm.getValue());
};
scwin.udc_comCodeAlloccarPic_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_alloccarPicId, ed_alloccarPicNm);
};
scwin.udc_comCodeAlloccarPic_onblurCodeEvent = function (e) {
  if (ed_alloccarPicId.getValue() === "") {
    ed_alloccarPicNm.setValue("");
  } else {
    scwin.comm_popup("carPic", ed_alloccarPicId.getValue(), ed_alloccarPicNm.getValue());
  }
};
scwin.udc_comCodeAlloccarPic_onviewchangeNameEvent = function (info) {
  if (ed_alloccarPicNm.getValue() === "") {
    ed_alloccarPicId.setValue("");
  } else {
    scwin.comm_popup("carPic", ed_alloccarPicId.getValue(), ed_alloccarPicNm.getValue());
  }
};

//오더담당
scwin.udc_comCodeUser_onclickEvent = function (e) {
  scwin.comm_popup("odrPic", ed_usrId.getValue(), ed_userNm.getValue());
};
scwin.udc_comCodeUser_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_usrId, ed_userNm);
};
scwin.udc_comCodeUser_onblurCodeEvent = function (e) {
  if (ed_usrId.getValue() === "") {
    ed_userNm.setValue("");
  } else {
    scwin.comm_popup("odrPic", ed_usrId.getValue(), ed_userNm.getValue());
  }
};
scwin.udc_comCodeUser_onviewchangeNameEvent = function (info) {
  if (ed_userNm.getValue() === "") {
    ed_usrId.setValue("");
  } else {
    scwin.comm_popup("odrPic", ed_usrId.getValue(), ed_userNm.getValue());
  }
};
scwin.sbm_retreive_submitdone = function (e) {
  if (ds_cntrWrkRslts.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  } else {
    //scwin.f_Rate() ;
    if (co_lc_srchWrkClsCd.getValue() == 'B') {
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
    cntrWrkRsltsRows.setValue(ds_cntrWrkRslts.getRowCount());

    //조회 시 단위 세팅 
    let lcUnit = lc_unit.getValue();
    if (lcUnit == 0) {//천원
    } else {
      //원
      for (var i = 0; i < ds_cntrWrkRslts.getRowCount(); i++) {
        ds_cntrWrkRslts.setCellData(i, "sellAmt", ds_cntrWrkRslts.getCellData(i, "sellAmt") * 1000);
        ds_cntrWrkRslts.setCellData(i, "sellDcScAmt", ds_cntrWrkRslts.getCellData(i, "sellDcScAmt") * 1000);
        ds_cntrWrkRslts.setCellData(i, "totSellAmt", ds_cntrWrkRslts.getCellData(i, "totSellAmt") * 1000);
        ds_cntrWrkRslts.setCellData(i, "pchsAmt", ds_cntrWrkRslts.getCellData(i, "pchsAmt") * 1000);
        ds_cntrWrkRslts.setCellData(i, "pchsDcScAmt", ds_cntrWrkRslts.getCellData(i, "pchsDcScAmt") * 1000);
        ds_cntrWrkRslts.setCellData(i, "totPchsAmt", ds_cntrWrkRslts.getCellData(i, "totPchsAmt") * 1000);
        ds_cntrWrkRslts.setCellData(i, "profitAmt", ds_cntrWrkRslts.getCellData(i, "profitAmt") * 1000);
      }
    }
    const count = ds_cntrWrkRslts.getRowCount();
    for (let i = 0; i < count; i++) {
      const val = parseFloat(ds_cntrWrkRslts.getCellData(i, "profitRt"));
      if (val > 100) {
        gr_cntrWrkRslts.setCellColor(i, "profitRt", "red");
      }
    }
  }
  ds_cntrWrkRslts.sort("bilgClntNm", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
};

//오더종류
scwin.sbm_odrKndCd_submitdone = async function (e) {
  await $c.sbm.execute($p, sbm_srchWrkClsCd);

  //lc_odrKndCd.setSelectedIndex(0);
};

//작업구분
scwin.sbm_srchWrkClsCd_submitdone = function (e) {
  var codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "co_lc_srchLobran"
  }];
  $c.data.setGauceUtil($p, codeOptions1);
};
scwin.gr_cntrWrkRslts_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // if (rowIndex > 0 && columnId == "odrNo" ) {
  // 	var fileURL = "ds/op/wrkrslts/transwrkrslts/op_304_01_17b.jsp?sellDept="+co_lc_srchLobran.BindColVal
  // 	                     +"&fromRsltsDt="+ed_srchWrkStDt.Text
  // 	                     +"&toRsltsDt="+ed_srchWrkEndDt.Text
  // 	                     +"&odrNofromRequest="+ds_cntrWrkRslts.NameValue(Row, "odrNo");
  // 	var tabTitle = "운송단위별 원가율 조회";

  // 	cfTabMenuUpdate(fileURL, tabTitle);
  // } 

  var strPath = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_17b.xml";
  var param = {
    sellDept: scwin.hd_kcomcd,
    fromRsltsDt: ed_srchWrkStDt.getValue(),
    toRsltsDt: ed_srchWrkEndDt.getValue(),
    odrNofromRequest: ds_cntrWrkRslts.getCellData(rowIndex, "odrNo")
  };
  $c.win.openMenu($p, "운송단위별 원가율 조회", strPath, "op_304_01_17b.xml", param);
};
scwin.co_lc_srchWrkClsCd_onchange = function (info) {
  ds_odrKndCd.clearFilter();
  if (co_lc_srchWrkClsCd.getValue() == "C") {
    ds_odrKndCd.setColumnFilter({
      type: 'row',
      colIndex: 'fltrCd1',
      key: "C",
      condition: 'and'
    });
  }
  ;
  if (co_lc_srchWrkClsCd.getValue() == "B") {
    ds_odrKndCd.setColumnFilter({
      type: 'row',
      colIndex: 'fltrCd1',
      key: "B",
      condition: 'and'
    });
  }
  ;
};
scwin.ed_odrNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.lc_unit_onchange = function (info) {
  scwin.f_wonChange();
};

//천, 원 단위 적용
scwin.f_wonChange = function () {
  let lcUnit = lc_unit.getValue();
  if (lcUnit == 0) {
    //천원
    for (var i = 0; i < ds_cntrWrkRslts.getRowCount(); i++) {
      ds_cntrWrkRslts.setCellData(i, "sellAmt", ds_cntrWrkRslts.getCellData(i, "sellAmt") / 1000);
      ds_cntrWrkRslts.setCellData(i, "sellDcScAmt", ds_cntrWrkRslts.getCellData(i, "sellDcScAmt") / 1000);
      ds_cntrWrkRslts.setCellData(i, "totSellAmt", ds_cntrWrkRslts.getCellData(i, "totSellAmt") / 1000);
      ds_cntrWrkRslts.setCellData(i, "pchsAmt", ds_cntrWrkRslts.getCellData(i, "pchsAmt") / 1000);
      ds_cntrWrkRslts.setCellData(i, "pchsDcScAmt", ds_cntrWrkRslts.getCellData(i, "pchsDcScAmt") / 1000);
      ds_cntrWrkRslts.setCellData(i, "totPchsAmt", ds_cntrWrkRslts.getCellData(i, "totPchsAmt") / 1000);
      ds_cntrWrkRslts.setCellData(i, "profitAmt", ds_cntrWrkRslts.getCellData(i, "profitAmt") / 1000);
    }
  } else if (lcUnit == 1) {
    //원
    for (var i = 0; i < ds_cntrWrkRslts.getRowCount(); i++) {
      ds_cntrWrkRslts.setCellData(i, "sellAmt", ds_cntrWrkRslts.getCellData(i, "sellAmt") * 1000);
      ds_cntrWrkRslts.setCellData(i, "sellDcScAmt", ds_cntrWrkRslts.getCellData(i, "sellDcScAmt") * 1000);
      ds_cntrWrkRslts.setCellData(i, "totSellAmt", ds_cntrWrkRslts.getCellData(i, "totSellAmt") * 1000);
      ds_cntrWrkRslts.setCellData(i, "pchsAmt", ds_cntrWrkRslts.getCellData(i, "pchsAmt") * 1000);
      ds_cntrWrkRslts.setCellData(i, "pchsDcScAmt", ds_cntrWrkRslts.getCellData(i, "pchsDcScAmt") * 1000);
      ds_cntrWrkRslts.setCellData(i, "totPchsAmt", ds_cntrWrkRslts.getCellData(i, "totPchsAmt") * 1000);
      ds_cntrWrkRslts.setCellData(i, "profitAmt", ds_cntrWrkRslts.getCellData(i, "profitAmt") * 1000);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnitAmt = function (unitAmt) {
  let calculatedData = ds_cntrWrkRslts.getAllJSON();
  const cols = ["sellAmt", "sellDcScAmt", "totSellAmt", "pchsAmt", "pchsDcScAmt", "totPchsAmt"];
  for (let i = 0; i < calculatedData.length; i++) {
    let rowData = calculatedData[i];
    for (const colId of cols) {
      if (rowData.hasOwnProperty(colId)) {
        let originalValue = parseFloat(rowData[colId] || 0);
        rowData[colId] = Math.round(originalValue / unitAmt);
      }
    }
  }
  ds_cntrWrkRslts.setJSON(calculatedData);
};
scwin.fn_formatSubtotal = function (data) {
  if (!data || isNaN(data)) return "";
  let formatval = "";
  let lcUnit = lc_unit.getValue();
  if (lcUnit == 0) {
    //천원
    formatval = WebSquare.util.setNumberFormat(data, "#,##0.0");
  } else {
    formatval = WebSquare.util.setNumberFormat(data, "#,###");
  }
  return formatval;
};

//-------------------------------------------------------------------------
// function name : f_Download
// function desc : Excel다운로드
//-------------------------------------------------------------------------    
scwin.cfGridToExcel = async function () {
  const infoArr = [];
  const fileName = "거래처별 운송 원가율 조회";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    type: "4+8+16"
  };
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, options, infoArr);
};
scwin.fn_floorPointOne = function (value) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return "0";
  }
  let pureStr = String(value).replace(/,/g, "");
  const [integerPart, decimalPart = "0"] = pureStr.split(".");
  const firstDecimal = decimalPart.substring(0, 1);
  const formattedInteger = Number(integerPart).toLocaleString('ko-KR');
  if (firstDecimal === "0") {
    return formattedInteger;
  } else {
    return `${formattedInteger}.${firstDecimal}`;
  }
};

//0.0 으로 나오는 버전
scwin.fn_floorPointTwo = function (value) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return "0";
  }
  let pureStr = String(value).replace(/,/g, "");
  const [integerPart, decimalPart = "0"] = pureStr.split(".");
  const firstDecimal = decimalPart.substring(0, 1);
  const formattedInteger = Number(integerPart).toLocaleString('ko-KR');
  return `${formattedInteger}.${firstDecimal}`;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchLobran',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.lobranCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',id:'udc_comCodeBilgClnt',objTypeCode:'data',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_comCodeBilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeBilgClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeBilgClnt_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'bilgClntNo',selectID:'retrieveBilgMchtList',maxlengthCode:'7'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_srchCond',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ed_srchWrkStDt',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_srchWrkEndDt',titleFrom:'오더일자 시작일',titleTo:'오더일자 종료일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_srchWrkClsCd',style:'width: 180px',submenuSize:'fixed',ref:'data:dma_srchCond.wrkClsCd','ev:onchange':'scwin.co_lc_srchWrkClsCd_onchange',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_cmOP190'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_odrKndCd',style:'width: 230px;',submenuSize:'fixed',ref:'data:dma_srchCond.odrKndCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_odrKndCd'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_grpClntNo',nameId:'ed_grpClntNm',maxlengthCode:'7',objTypeCode:'data',objTypeName:'data',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_srchCond',code:'grpClntNo',id:'udc_comCodeGrpClnt','ev:onclickEvent':'scwin.udc_comCodeGrpClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeGrpClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeGrpClnt_onviewchangeNameEvent',selectID:'retrieveGrpClntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_sellAmt',placeholder:'',style:'width: 85px;',objType:'data',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원 이상',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원가율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:''},E:[{T:1,N:'xf:input',A:{style:'width: 85px;',id:'ed_pcostRt',placeholder:'',class:'',objType:'data',allowChar:'0-9',ref:'data:dma_srchCond.pcostRt',maxlength:'3'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'% 이상',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd1',nameId:'ed_lineNm1',maxlengthCode:'7',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',id:'udc_comCodeLine','ev:onclickEvent':'scwin.udc_comCodeLine_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeLine_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeLine_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'lineCd1',selectID:'retrieveLineInfoList'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd2',objTypeCode:'data',nameId:'ed_lineNm2',id:'udc_comCodeLine2',maxlengthCode:'7',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCodeLine2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeLine2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeLine2_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'lineCd2',selectID:'retrieveLineInfoList'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line3',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeLine3',codeId:'ed_lineCd3',nameId:'ed_lineNm3',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'7',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCodeLine3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeLine3_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeLine3_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'lineCd3',selectID:'retrieveLineInfoList'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_odrNo_onkeyup',ref:'data:dma_srchCond.odrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발구간1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptCd1',nameId:'ed_dptNm1',id:'udc_comCodeDpt1',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_comCodeDpt1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeDpt1_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeDpt1_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'dptCd1',selectID:'retrieveWrkPlInfo',maxlengthCode:'7'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발구간2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptCd2',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'7',nameId:'ed_dptNm2',id:'udc_comCodeDpt2','ev:onclickEvent':'scwin.udc_comCodeDpt2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeDpt2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeDpt2_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'dptCd2',selectID:'retrieveWrkPlInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착구간1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvCd1',nameId:'ed_arvNm1',id:'udc_comCodeArv',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',maxlengthCode:'7',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCodeArv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeArv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeArv_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'arvCd1',selectID:'retrieveWrkPlInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착구간2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvCd2',nameId:'ed_arvNm2',id:'udc_comCodeArv2',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCodeArv2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeArv2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeArv2_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'arvCd2',selectID:'retrieveWrkPlInfo',maxlengthCode:'7'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_alloccarPicId',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',nameId:'ed_alloccarPicNm',id:'udc_comCodeAlloccarPic','ev:onclickEvent':'scwin.udc_comCodeAlloccarPic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeAlloccarPic_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeAlloccarPic_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'alloccarPicId',selectID:'retrieveUserInfo',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_usrId',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',nameId:'ed_userNm',id:'udc_comCodeUser','ev:onclickEvent':'scwin.udc_comCodeUser_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeUser_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeUser_onviewchangeNameEvent',refDataCollection:'dma_srchCond',code:'usrId',selectID:'retrieveUserInfo',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_retrvStpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.f_filter'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주별조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더별 원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:100px;',allOption:'',id:'lc_unit',class:'',direction:'auto',ref:'','ev:onchange':'scwin.lc_unit_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'천원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_cntrWrkRslts',gridUpYn:'N',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cntrWrkRslts',id:'gr_cntrWrkRslts',style:'',visibleRowNum:'11',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_cntrWrkRslts_oncelldblclick',fixedColumnNoMove:'true',fixedColumn:'3',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매출부서',width:'83',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처',width:'150',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'120',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'20\'',width:'70',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'40\'',width:'70',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'45\'',width:'70',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'QTY',width:'80',colSpan:'',rowSpan:'2',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'WT',width:'80',colSpan:'',rowSpan:'2',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'CBM',width:'80',colSpan:'',rowSpan:'2',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출액',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column46',value:'매입액',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column37',value:'이익',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'BL/<br/>BOOKING',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'기본단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'할증',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'기본단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'할증',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'이익금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column56',value:'원가율',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptNm',inputType:'text',width:'83',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'150',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd20',inputType:'text',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd40',inputType:'text',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd45',inputType:'text',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'80',textAlign:'right',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'80',textAlign:'right',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'80',textAlign:'right',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'120',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellDcScAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totSellAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsDcScAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totPchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'profitAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointOne',excelFormat:'#,##0.#',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'profitRt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormatter:'scwin.fn_floorPointTwo',excelFormat:'#,##0.#',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'blBookingNo',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'bilgClntNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'83',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'소계',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'cntrSizCd20\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'cntrSizCd40\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'cntrSizCd45\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'qty\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column83',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'wt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'cbm\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'sellAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'sellDcScAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'totSellAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'pchsAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'pchsDcScAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'totPchsAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',expression:'(parseInt((SUM(\'sellAmt\') + SUM(\'sellDcScAmt\') - SUM(\'pchsAmt\') - SUM(\'pchsDcScAmt\')) * 10) / 10).toFixed(1)',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0',expression:'( (SUM(\'sellAmt\')+SUM(\'sellDcScAmt\')) == 0 ) ? 0 : Math.floor(((SUM(\'pchsAmt\')+SUM(\'pchsDcScAmt\')) / (SUM(\'sellAmt\')+SUM(\'sellDcScAmt\')) * 100) * 10) / 10'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'83',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'SUM(\'cntrSizCd20\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'SUM(\'cntrSizCd40\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'SUM(\'cntrSizCd45\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'SUM(\'qty\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'SUM(\'wt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'SUM(\'cbm\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'sellAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'sellDcScAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'totSellAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'pchsAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'pchsDcScAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor(sum(\'totPchsAmt\') * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',textAlign:'right',expression:'Math.floor((SUM(\'sellAmt\') + SUM(\'sellDcScAmt\') - SUM(\'pchsAmt\') - SUM(\'pchsDcScAmt\')) * 10) / 10',displayFormat:'#,##0.#',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.#',expression:'( (SUM(\'sellAmt\')+SUM(\'sellDcScAmt\')) == 0 ) ? 0 : Math.floor(((SUM(\'pchsAmt\')+SUM(\'pchsDcScAmt\')) / (SUM(\'sellAmt\')+SUM(\'sellDcScAmt\')) * 100) * 10) / 10'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'cntrWrkRsltsRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})