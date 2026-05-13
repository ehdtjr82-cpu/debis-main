/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_05b.xml 63900 85921222f8d8868dd7ac911693719c2c574167218b7b28aad61c0d62505176cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_branCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo1_grid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_retrieve_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptDistrictCdNm',name:'출발\\\\권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발\\\\권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCdNm',name:'도착\\\\권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착\\\\권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc',name:'거리',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempText',name:'금액단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt45Full',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt45Empty',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt40Full',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt40Empty',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullHeavy',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyHeavy',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullLight',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyLight',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullCombine',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyCombine',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBranCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTrfCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCdCd',name:'',dataType:'text',importFormatter:'scwin.importFormatterOdrKndCd'}},{T:1,N:'w2:column',A:{id:'grpKey',name:'',dataType:'text',importFormatter:'scwin.importFormatter'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'alloccarBranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCdNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCdNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc',name:'거리',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt45Full',name:'45F_FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt45Empty',name:'45F_EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt40Full',name:'40F_FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt40Empty',name:'40F_EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullHeavy',name:'20F_Heavy_FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyHeavy',name:'20F_Heavy_EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullLight',name:'20F_Light_FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyLight',name:'20F_Light_EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullCombine',name:'20F_Combine_FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyCombine',name:'20F_Combine_EMPTY',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_branCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_LkStepNo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_LkStepNo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_LkStepNo1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_LkStepNo1_grid',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_LkStepNo1_grid","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_LkStepNo1_grid_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveContractEachContainerTpchsTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.RegistContractEachContainerTpchsTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'scwin.sbm_save_errorHandler',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_save_submit','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_401_01_05b
// 이름     : 계약별컨테이너하불요율등록
// 경로     : 물류/공통(통합)/매입요율/운송/계약별컨테이너하불등록
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-03
//==================================================================================================================
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

/*hid col*/
scwin.hid_chkclnt = ""; //화주
scwin.hid_dptDistrictCd = "";
scwin.hid_arvDistrictCd = "";
scwin.hid_copCoClntNo = "";
scwin.updateYN = "";
scwin.newaddrowState = "N";
scwin.onpageload = function () {
  ica_ed_adptDt.setValue(scwin.strCurDate);

  //점소콤보 조회
  $c.sbm.execute($p, sbm_lobran);

  /*오더종류 setting*/
  //let param = "SD113";
  sbm_LkStepNo1.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ContractEachContainerTpchsTariffEBC&queryId=retrievecodrKndCd";
  $c.sbm.execute($p, sbm_LkStepNo1);

  /*grid용 오더종류*/
  sbm_LkStepNo1_grid.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ContractEachContainerTpchsTariffEBC&queryId=retrievecodrKndCd";
  $c.sbm.execute($p, sbm_LkStepNo1_grid);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  acb_lc_odrKndCd.setPosition(0);
  ica_ed_adptDt.setValue("");

  // $c.gus.cfInitObjects([ed_dptDistrictCd, ed_dptDistrictNm, ed_arvDistrictCd, ed_arvDistrictNm, ica_ed_adptDt]);
  $c.gus.cfInitObjects($p, tbl_search, null);
  acb_lc_branCd.setValue(scwin.lobranCd);
  scwin.hid_chkclnt = "";
  scwin.hid_dptDistrictCd = "";
  scwin.hid_arvDistrictCd = "";
  scwin.hid_copCoClntNo = "";
};

//점소 callback
scwin.sbm_lobran_submitdone = function () {
  /*권한으로 변경 -> loginDTO.getLoUpperLobranCd()*/
  // ds_branCd.setCellData(0, "lobranCd", scwin.lobranCd);
  // ds_branCd.setCellData(0, "lobranNm", "부산지사");

  acb_lc_branCd.setValue(scwin.lobranCd);
};

//오더종류 callback
scwin.sbm_LkStepNo1_submitdone = function () {
  /* sqlId 자체 cd값이 "C'인 데이타 가져옴
  let dltStr = "ds_LkStepNo1"; 
  let dlt = $c.gus.object(dltStr);
  $c.data.dataListFilter(dlt, "cd.substring(0,1) == 'C'");
  */

  ds_LkStepNo1.insertRow(0);
  ds_LkStepNo1.setCellData(0, "code", "99");
  ds_LkStepNo1.setCellData(0, "name", "전체");
};

//grid용 오더종류 callback — "전체" 항목 0번째에 추가
scwin.sbm_LkStepNo1_grid_submitdone = function () {
  ds_LkStepNo1_grid.insertRow(0);
  ds_LkStepNo1_grid.setCellData(0, "code", "99");
  ds_LkStepNo1_grid.setCellData(0, "name", "전체");
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  if (acb_lc_branCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["배차점소"]);
    acb_lc_branCd.focus();
    return;
  }
  if (ed_clntNo.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화주명"]);
    acb_lc_branCd.focus();
    return;
  }
  dma_condition.set("branCd", acb_lc_branCd.getValue());
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("copCoClntNo", ed_copCoClntNo.getValue());
  dma_condition.set("odrKndCd", acb_lc_odrKndCd.getValue());
  dma_condition.set("dptDistrictCd", ed_dptDistrictCd.getValue());
  dma_condition.set("arvDistrictCd", ed_arvDistrictCd.getValue());
  dma_condition.set("adptDt", ica_ed_adptDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_retrieve.getRowCount();
  if (nCnt > 0) {
    // odrKndCd를 코드값으로 세팅 (combo 매칭용)
    // SQL은 "전체"(표시텍스트)를 반환하지만, combo는 코드("99")로 매칭
    for (var i = 0; i < nCnt; i++) {
      var odrCdCd = ds_retrieve.getCellData(i, "odrKndCdCd"); // 원본 코드값
      var odrVal = ds_retrieve.getCellData(i, "odrKndCd");
      // odrKndCdCd가 비어있으면 odrKndCd 기준으로 보정
      if (odrCdCd == "" || odrCdCd == "전체") {
        odrCdCd = odrVal == "" || odrVal == "전체" || odrVal == "전" ? "99" : odrVal;
      }
      ds_retrieve.setCellData(i, "odrKndCdCd", odrCdCd);
      ds_retrieve.setCellData(i, "odrKndCd", odrCdCd); // combo가 코드로 "전체" 표시
    }
    ds_retrieve.modifyAllStatus("R");
    gr_retrieve.setFocusedCell(0, 0);
    total.setValue(Math.floor(nCnt / 2));
    gr_retrieve.refresh();
    scwin.applyRowColors();
  } else {
    total.setValue(0);
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  gr_retrieve.setReadOnly("grid", true); //grid 전체 readonly
  scwin.updateYN = "";
  $c.gus.cfEnableObjects($p, [btn_update]);
};

// sbm_save 전송 직전 — 빈 odrKndCd를 odrKndCdCd 코드값으로 보정
scwin.sbm_save_submit = function (e) {
  var rowCnt = ds_retrieve.getRowCount();
  for (var i = 0; i < rowCnt; i++) {
    var odr = ds_retrieve.getCellData(i, "odrKndCd");
    if (odr == "" || odr == "전체" || odr == "전") {
      var code = ds_retrieve.getCellData(i, "odrKndCdCd") || "99";
      ds_retrieve.setCellData(i, "odrKndCd", code);
    }
  }
};

//저장 errorHandler (기본 FAIL alert 억제)
scwin.sbm_save_errorHandler = function (e) {
  return false;
};

//저장 callback
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    return;
  }
  $c.gus.cfAlertMsg($p, "정상적으로 처리되었습니다.");
  scwin.btn_retrieve_onclick();
};
scwin.sbm_save_submiterror = function (e) {
  console.error("sbm_save error", e);
  $c.win.alert($p, "저장 중 오류가 발생했습니다.");
};

//-------------------------------------------------------------------------
// 조회조건 공통 팝업 호출 (case별 UDC/코드/명 매핑)
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var pWhere = null;
  switch (disGubun) {
    case 1:
      // 화주
      udc_comCode_clnt.cfCommonPopUp(scwin.f_popupCallback(1), pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch);
      break;
    case 2:
      // 출발지
      pWhere = ",,WDE,,,,,PEX";
      if (chk_rateClsYn.getValue() == "1") pWhere = ",,NWD,,,,,NPX";
      udc_comCode_dpt.cfCommonPopUp(scwin.f_popupCallback(2), pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch);
      break;
    case 3:
      // 도착지
      pWhere = ",,WDE,,,,,PEX";
      if (chk_rateClsYn.getValue() == "1") pWhere = ",,NWD,,,,,NPX";
      udc_comCode_arv.cfCommonPopUp(scwin.f_popupCallback(3), pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch);
      break;
    case 4:
      // 협력업체
      udc_comCode_cop.cfCommonPopUp(scwin.f_popupCallback(4), pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch);
      break;
  }
};

// 공통 팝업 콜백
scwin.f_popupCallback = function (disGubun) {
  return function (rtnList) {
    switch (disGubun) {
      case 1:
        $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
        break;
      case 2:
        $c.gus.cfSetReturnValue($p, rtnList, ed_dptDistrictCd, ed_dptDistrictNm);
        break;
      case 3:
        $c.gus.cfSetReturnValue($p, rtnList, ed_arvDistrictCd, ed_arvDistrictNm);
        break;
      case 4:
        $c.gus.cfSetReturnValue($p, rtnList, ed_copCoClntNo, ed_copCoClntNm);
        break;
    }
  };
};

// 화주 이벤트
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "T");
};
scwin.udc_comCode_clnt_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() === "") {
    ed_clntNm.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), "", "T", "T");
};
scwin.udc_comCode_clnt_onblurNameEvent = function (e) {
  if (ed_clntNm.getValue() === "") {
    ed_clntNo.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(1, "", ed_clntNm.getValue(), "T", "T");
};

// 출발지 이벤트
scwin.udc_comCode_dpt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_dptDistrictCd.getValue(), ed_dptDistrictNm.getValue(), "F", "T");
};
scwin.udc_comCode_dpt_onblurCodeEvent = function (e) {
  if (ed_dptDistrictCd.getValue() === "") {
    ed_dptDistrictNm.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(2, ed_dptDistrictCd.getValue(), "", "T", "T");
};
scwin.udc_comCode_dpt_onblurNameEvent = function (e) {
  if (ed_dptDistrictNm.getValue() === "") {
    ed_dptDistrictCd.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(2, "", ed_dptDistrictNm.getValue(), "T", "T");
};

// 도착지 이벤트
scwin.udc_comCode_arv_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_arvDistrictCd.getValue(), ed_arvDistrictNm.getValue(), "F", "T");
};
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  if (ed_arvDistrictCd.getValue() === "") {
    ed_arvDistrictNm.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(3, ed_arvDistrictCd.getValue(), "", "T", "T");
};
scwin.udc_comCode_arv_onblurNameEvent = function (e) {
  if (ed_arvDistrictNm.getValue() === "") {
    ed_arvDistrictCd.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(3, "", ed_arvDistrictNm.getValue(), "T", "T");
};

// 협력업체 이벤트
scwin.udc_comCode_cop_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_copCoClntNo.getValue(), ed_copCoClntNm.getValue(), "F", "T");
};
scwin.udc_comCode_cop_onblurCodeEvent = function (e) {
  if (ed_copCoClntNo.getValue() === "") {
    ed_copCoClntNm.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(4, ed_copCoClntNo.getValue(), "", "T", "T");
};
scwin.udc_comCode_cop_onblurNameEvent = function (e) {
  if (ed_copCoClntNm.getValue() === "") {
    ed_copCoClntNo.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(4, "", ed_copCoClntNm.getValue(), "T", "T");
};

//행추가
scwin.addRow = function () {
  if (!$c.gus.cfValidate($p, [gr_retrieve])) {
    return;
  }
  scwin.newaddrowState = "Y";
  try {
    let rowCnt = ds_retrieve.getRowCount();

    // ------------------------------------------------------------
    // 1. 데이터가 없는 경우 : 조건영역 기준으로 금액/단가 2행 생성
    // ------------------------------------------------------------
    if (rowCnt === 0) {
      let row1 = ds_retrieve.getRowCount();
      ds_retrieve.insertRow(row1);
      var addKey = "ADD_" + new Date().getTime();
      ds_retrieve.setCellData(row1, "grpKey", addKey);
      ds_retrieve.setCellData(row1, "gubun", "1");
      ds_retrieve.setCellData(row1, "tempText", "금액");
      ds_retrieve.setCellData(row1, "alloccarBranCd", acb_lc_branCd.getValue());
      ds_retrieve.setCellData(row1, "adptDt", ica_ed_adptDt.getValue());
      ds_retrieve.setCellData(row1, "clntNo", ed_clntNo.getValue());
      ds_retrieve.setCellData(row1, "clntNm", ed_clntNm.getValue());
      ds_retrieve.setCellData(row1, "odrKndCd", acb_lc_odrKndCd.getValue());
      ds_retrieve.setCellData(row1, "copCoClntNo", ed_copCoClntNo.getValue());
      ds_retrieve.setCellData(row1, "copCoClntNm", ed_copCoClntNm.getValue());
      ds_retrieve.setCellData(row1, "expireDt", "99999999");
      let row2 = ds_retrieve.getRowCount();
      ds_retrieve.insertRow(row2);
      ds_retrieve.setCellData(row2, "grpKey", addKey);
      ds_retrieve.setCellData(row2, "gubun", "2");
      ds_retrieve.setCellData(row2, "tempText", "단가");
      ds_retrieve.setCellData(row2, "alloccarBranCd", acb_lc_branCd.getValue());
      ds_retrieve.setCellData(row2, "adptDt", ica_ed_adptDt.getValue());
      ds_retrieve.setCellData(row2, "clntNo", ed_clntNo.getValue());
      ds_retrieve.setCellData(row2, "clntNm", ed_clntNm.getValue());
      ds_retrieve.setCellData(row2, "odrKndCd", acb_lc_odrKndCd.getValue());
      ds_retrieve.setCellData(row2, "copCoClntNo", ed_copCoClntNo.getValue());
      ds_retrieve.setCellData(row2, "copCoClntNm", ed_copCoClntNm.getValue());
      ds_retrieve.setCellData(row2, "expireDt", "99999999");
      gr_retrieve.setFocusedCell(row1, "dtc");
    }

    // ------------------------------------------------------------
    // 2. 데이터가 있는 경우 : 현재 선택된 2행 세트를 복사
    // ------------------------------------------------------------
    else {
      let baseRow = ds_retrieve.getRowPosition();

      // 단가행 선택 시 금액행으로 보정
      if (ds_retrieve.getCellData(baseRow, "gubun") == "2") {
        baseRow = baseRow - 1;
      }
      let pairRow = baseRow + 1;

      // 안전장치
      if (baseRow < 0 || pairRow >= ds_retrieve.getRowCount()) {
        $c.win.alert($p, "행추가 기준 데이터가 올바르지 않습니다.");
        return;
      }

      // 첫 번째 추가행 (금액행 복사)
      var addKey = "ADD_" + new Date().getTime();
      let newRow1 = ds_retrieve.getRowCount();
      ds_retrieve.insertRow(newRow1);
      ds_retrieve.setCellData(newRow1, "grpKey", addKey);
      ds_retrieve.setCellData(newRow1, "gubun", ds_retrieve.getCellData(baseRow, "gubun"));
      ds_retrieve.setCellData(newRow1, "alloccarBranCd", ds_retrieve.getCellData(baseRow, "alloccarBranCd"));
      ds_retrieve.setCellData(newRow1, "dtc", ds_retrieve.getCellData(baseRow, "dtc"));
      ds_retrieve.setCellData(newRow1, "adptDt", ds_retrieve.getCellData(baseRow, "adptDt"));
      ds_retrieve.setCellData(newRow1, "odrKndCd", ds_retrieve.getCellData(baseRow, "odrKndCd"));
      ds_retrieve.setCellData(newRow1, "cntrTrfCd", ds_retrieve.getCellData(baseRow, "cntrTrfCd"));
      ds_retrieve.setCellData(newRow1, "clntNo", ds_retrieve.getCellData(baseRow, "clntNo"));
      ds_retrieve.setCellData(newRow1, "clntNm", ds_retrieve.getCellData(baseRow, "clntNm"));
      ds_retrieve.setCellData(newRow1, "copCoClntNo", ds_retrieve.getCellData(baseRow, "copCoClntNo"));
      ds_retrieve.setCellData(newRow1, "copCoClntNm", ds_retrieve.getCellData(baseRow, "copCoClntNm"));
      ds_retrieve.setCellData(newRow1, "expireDt", "99999999");
      ds_retrieve.setCellData(newRow1, "tempText", ds_retrieve.getCellData(baseRow, "tempText"));
      ds_retrieve.setCellData(newRow1, "pchsAmt45Full", ds_retrieve.getCellData(baseRow, "pchsAmt45Full"));
      ds_retrieve.setCellData(newRow1, "pchsAmt45Empty", ds_retrieve.getCellData(baseRow, "pchsAmt45Empty"));
      ds_retrieve.setCellData(newRow1, "pchsAmt40Full", ds_retrieve.getCellData(baseRow, "pchsAmt40Full"));
      ds_retrieve.setCellData(newRow1, "pchsAmt40Empty", ds_retrieve.getCellData(baseRow, "pchsAmt40Empty"));
      ds_retrieve.setCellData(newRow1, "pchsAmt20FullHeavy", ds_retrieve.getCellData(baseRow, "pchsAmt20FullHeavy"));
      ds_retrieve.setCellData(newRow1, "pchsAmt20EmptyHeavy", ds_retrieve.getCellData(baseRow, "pchsAmt20EmptyHeavy"));
      ds_retrieve.setCellData(newRow1, "pchsAmt20FullLight", ds_retrieve.getCellData(baseRow, "pchsAmt20FullLight"));
      ds_retrieve.setCellData(newRow1, "pchsAmt20EmptyLight", ds_retrieve.getCellData(baseRow, "pchsAmt20EmptyLight"));
      ds_retrieve.setCellData(newRow1, "pchsAmt20FullCombine", ds_retrieve.getCellData(baseRow, "pchsAmt20FullCombine"));
      ds_retrieve.setCellData(newRow1, "pchsAmt20EmptyCombine", ds_retrieve.getCellData(baseRow, "pchsAmt20EmptyCombine"));

      // 두 번째 추가행 (단가행 복사)
      let newRow2 = ds_retrieve.getRowCount();
      ds_retrieve.insertRow(newRow2);
      ds_retrieve.setCellData(newRow2, "grpKey", addKey);
      ds_retrieve.setCellData(newRow2, "gubun", ds_retrieve.getCellData(pairRow, "gubun"));
      ds_retrieve.setCellData(newRow2, "alloccarBranCd", ds_retrieve.getCellData(pairRow, "alloccarBranCd"));
      ds_retrieve.setCellData(newRow2, "dtc", ds_retrieve.getCellData(pairRow, "dtc"));
      ds_retrieve.setCellData(newRow2, "adptDt", ds_retrieve.getCellData(pairRow, "adptDt"));
      ds_retrieve.setCellData(newRow2, "odrKndCd", ds_retrieve.getCellData(pairRow, "odrKndCd"));
      ds_retrieve.setCellData(newRow2, "cntrTrfCd", ds_retrieve.getCellData(pairRow, "cntrTrfCd"));
      ds_retrieve.setCellData(newRow2, "clntNo", ds_retrieve.getCellData(pairRow, "clntNo"));
      ds_retrieve.setCellData(newRow2, "clntNm", ds_retrieve.getCellData(pairRow, "clntNm"));
      ds_retrieve.setCellData(newRow2, "copCoClntNo", ds_retrieve.getCellData(pairRow, "copCoClntNo"));
      ds_retrieve.setCellData(newRow2, "copCoClntNm", ds_retrieve.getCellData(pairRow, "copCoClntNm"));
      ds_retrieve.setCellData(newRow2, "expireDt", "99999999");
      ds_retrieve.setCellData(newRow2, "tempText", ds_retrieve.getCellData(pairRow, "tempText"));
      ds_retrieve.setCellData(newRow2, "pchsAmt45Full", ds_retrieve.getCellData(pairRow, "pchsAmt45Full"));
      ds_retrieve.setCellData(newRow2, "pchsAmt45Empty", ds_retrieve.getCellData(pairRow, "pchsAmt45Empty"));
      ds_retrieve.setCellData(newRow2, "pchsAmt40Full", ds_retrieve.getCellData(pairRow, "pchsAmt40Full"));
      ds_retrieve.setCellData(newRow2, "pchsAmt40Empty", ds_retrieve.getCellData(pairRow, "pchsAmt40Empty"));
      ds_retrieve.setCellData(newRow2, "pchsAmt20FullHeavy", ds_retrieve.getCellData(pairRow, "pchsAmt20FullHeavy"));
      ds_retrieve.setCellData(newRow2, "pchsAmt20EmptyHeavy", ds_retrieve.getCellData(pairRow, "pchsAmt20EmptyHeavy"));
      ds_retrieve.setCellData(newRow2, "pchsAmt20FullLight", ds_retrieve.getCellData(pairRow, "pchsAmt20FullLight"));
      ds_retrieve.setCellData(newRow2, "pchsAmt20EmptyLight", ds_retrieve.getCellData(pairRow, "pchsAmt20EmptyLight"));
      ds_retrieve.setCellData(newRow2, "pchsAmt20FullCombine", ds_retrieve.getCellData(pairRow, "pchsAmt20FullCombine"));
      ds_retrieve.setCellData(newRow2, "pchsAmt20EmptyCombine", ds_retrieve.getCellData(pairRow, "pchsAmt20EmptyCombine"));
      gr_retrieve.setFocusedCell(newRow1, "dtc");
    }
    gr_retrieve.setReadOnly("grid", false);
  } finally {
    scwin.newaddrowState = "N";
  }
};

//등록양식 다운로드 — 그리드 헤더(보이는 컬럼만) + 빈 행 1줄
scwin.btn_excel_sample_onclick = function (e) {
  // 현재 데이터 백업
  var backupJSON = ds_retrieve.getAllJSON();
  var backupRowCnt = ds_retrieve.getRowCount();

  // 데이터 비우고 빈 행 1줄 추가 (양식용)
  ds_retrieve.removeAll();
  ds_retrieve.insertRow(0);
  $c.data.downloadGridViewExcel($p, gr_retrieve, {
    fileName: '계약별컨테이너하불요율_등록양식.xlsx',
    sheetName: '등록양식',
    removeColumns: "6",
    hiddenVisible: "false",
    type: "1"
  });

  // 데이터 복원
  ds_retrieve.removeAll();
  if (backupRowCnt > 0) {
    ds_retrieve.setJSON(backupJSON);
    ds_retrieve.modifyAllStatus("R");
    gr_retrieve.refresh();
    scwin.applyRowColors();
  }
};

/**
 * 엑셀 파일 업로드
 */
scwin.f_excelUpload = async function () {
  var ext = udc_excel.getUpExt();
  var options;
  if (ext == "1") {
    // csv
    options = {
      "headerExist": "1",
      "startRowIndex": 1,
      "status": "C"
    };
  } else {
    // excel
    options = {
      "headerExist": "1",
      "startRowIndex": 0,
      "status": "C"
    };
  }
  udc_excel.uploadGridViewExcel(gr_retrieve, options);
};

/**
 * 그리드 엑셀 업로드 완료 이벤트
 */
scwin.gr_retrieve_onfilereadend = function (value) {
  scwin.f_importUploaded();
};

/**
 * 업로드된 데이터를 ds_excel에 복사 후 검증 및 금액/단가 2행 세트로 변환
 */
scwin.f_importUploaded = async function () {
  ds_excel.removeAll();

  // 업로드된 ds_retrieve 데이터를 ds_excel로 복사
  for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
    ds_excel.setJSON([ds_retrieve.getRowJSON(i)], true);
  }
  $c.gus.cfProgressWinOpen($p);

  // 데이터 존재 여부 체크
  if (ds_excel.getRowCount() == 0) {
    await $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, "업로드된 데이터가 없습니다.");
    return;
  }

  // 금액 컬럼 포맷 변환 (쉼표, 공백 제거)
  var amtCols = ["pchsAmt45Full", "pchsAmt45Empty", "pchsAmt40Full", "pchsAmt40Empty", "pchsAmt20FullHeavy", "pchsAmt20EmptyHeavy", "pchsAmt20FullLight", "pchsAmt20EmptyLight", "pchsAmt20FullCombine", "pchsAmt20EmptyCombine"];
  for (var i = 0; i < ds_excel.getRowCount(); i++) {
    for (var c = 0; c < amtCols.length; c++) {
      var val = String(ds_excel.getCellData(i, amtCols[c]) || "");
      val = val.replace(/,/g, "").replace(/ /g, "");
      ds_excel.setCellData(i, amtCols[c], val);
    }

    // 거리 체크
    var dtc = parseFloat(ds_excel.getCellData(i, "dtc")) || 0;
    if (dtc <= 0) {
      await $c.gus.cfProgressWinClose($p);
      await $c.win.alert($p, i + 1 + "번째 행의 거리가 0보다 커야 합니다.");
      return;
    }
  }

  // 검증 통과 — ds_retrieve 초기화 후 금액/단가 2행 세트로 생성
  ds_retrieve.removeAll();
  for (var i = 0; i < ds_excel.getRowCount(); i++) {
    var grpKey = "UP_" + new Date().getTime() + "_" + i;
    var dtc = parseFloat(ds_excel.getCellData(i, "dtc")) || 0;

    // 금액행 (gubun=1)
    var row1 = ds_retrieve.getRowCount();
    ds_retrieve.insertRow(row1);
    ds_retrieve.setCellData(row1, "grpKey", grpKey);
    ds_retrieve.setCellData(row1, "gubun", "1");
    ds_retrieve.setCellData(row1, "tempText", "금액");
    ds_retrieve.setCellData(row1, "alloccarBranCd", ds_excel.getCellData(i, "alloccarBranCd") || acb_lc_branCd.getValue());
    ds_retrieve.setCellData(row1, "dptDistrictCdNm", ds_excel.getCellData(i, "dptDistrictCdNm"));
    ds_retrieve.setCellData(row1, "arvDistrictCdNm", ds_excel.getCellData(i, "arvDistrictCdNm"));
    ds_retrieve.setCellData(row1, "clntNm", ds_excel.getCellData(i, "clntNm"));
    ds_retrieve.setCellData(row1, "dtc", dtc);
    ds_retrieve.setCellData(row1, "adptDt", ds_excel.getCellData(i, "adptDt") || ica_ed_adptDt.getValue());
    ds_retrieve.setCellData(row1, "odrKndCd", ds_excel.getCellData(i, "odrKndCd") || acb_lc_odrKndCd.getValue());
    ds_retrieve.setCellData(row1, "copCoClntNm", ds_excel.getCellData(i, "copCoClntNm"));
    ds_retrieve.setCellData(row1, "expireDt", "99999999");
    for (var c = 0; c < amtCols.length; c++) {
      ds_retrieve.setCellData(row1, amtCols[c], parseFloat(ds_excel.getCellData(i, amtCols[c])) || 0);
    }

    // 단가행 (gubun=2) — 금액 / 거리
    var row2 = ds_retrieve.getRowCount();
    ds_retrieve.insertRow(row2);
    ds_retrieve.setCellData(row2, "grpKey", grpKey);
    ds_retrieve.setCellData(row2, "gubun", "2");
    ds_retrieve.setCellData(row2, "tempText", "단가");
    ds_retrieve.setCellData(row2, "alloccarBranCd", ds_retrieve.getCellData(row1, "alloccarBranCd"));
    ds_retrieve.setCellData(row2, "dptDistrictCdNm", ds_retrieve.getCellData(row1, "dptDistrictCdNm"));
    ds_retrieve.setCellData(row2, "dptDistrictCd", ds_retrieve.getCellData(row1, "dptDistrictCd"));
    ds_retrieve.setCellData(row2, "arvDistrictCdNm", ds_retrieve.getCellData(row1, "arvDistrictCdNm"));
    ds_retrieve.setCellData(row2, "arvDistrictCd", ds_retrieve.getCellData(row1, "arvDistrictCd"));
    ds_retrieve.setCellData(row2, "clntNm", ds_retrieve.getCellData(row1, "clntNm"));
    ds_retrieve.setCellData(row2, "clntNo", ds_retrieve.getCellData(row1, "clntNo"));
    ds_retrieve.setCellData(row2, "dtc", dtc);
    ds_retrieve.setCellData(row2, "adptDt", ds_retrieve.getCellData(row1, "adptDt"));
    ds_retrieve.setCellData(row2, "odrKndCd", ds_retrieve.getCellData(row1, "odrKndCd"));
    ds_retrieve.setCellData(row2, "copCoClntNm", ds_retrieve.getCellData(row1, "copCoClntNm"));
    ds_retrieve.setCellData(row2, "copCoClntNo", ds_retrieve.getCellData(row1, "copCoClntNo"));
    ds_retrieve.setCellData(row2, "expireDt", "99999999");
    if (dtc > 0) {
      for (var c = 0; c < amtCols.length; c++) {
        var amt = parseFloat(ds_retrieve.getCellData(row1, amtCols[c])) || 0;
        ds_retrieve.setCellData(row2, amtCols[c], amt / dtc);
      }
    }
  }
  total.setValue(ds_retrieve.getRowCount() / 2);
  gr_retrieve.setReadOnly("grid", false);
  gr_retrieve.refresh();
  scwin.applyRowColors();
  await $c.gus.cfProgressWinClose($p);
  await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다. " + ds_excel.getRowCount() + "건");
};

//수정
scwin.btn_update_onclick = function (e) {
  if (ds_retrieve.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  gr_retrieve.setReadOnly("grid", false);
  scwin.updateYN = "Y";
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_update]);
};

//저장
scwin.btn_save_onclick = async function (e) {
  if (scwin.f_prefareCheck() == false) return;
  let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (confirm) {
    // confirm 후 sbm_save 직전에 빈 odrKndCd 보정
    // (confirm 창으로 그리드 포커스 해제 시 odrKndCd가 빈값이 되는 현상 대응)
    var rowCnt = ds_retrieve.getRowCount();
    for (var ri = 0; ri < rowCnt; ri++) {
      var odr = ds_retrieve.getCellData(ri, "odrKndCd");
      if (odr == "" || odr == "전체" || odr == "전") {
        var code = ds_retrieve.getCellData(ri, "odrKndCdCd") || "99";
        ds_retrieve.setCellData(ri, "odrKndCd", code);
      }
    }
    $c.sbm.execute($p, sbm_save);
  }
};

//validate check
scwin.f_prefareCheck = function () {
  let row = ds_retrieve.getRowCount();
  for (let i = 0; i < row; i += 2) {
    if (ds_retrieve.getCellData(i, "alloccarBranCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["배차점소코드"]);
      return false;
    }
    if (ds_retrieve.getCellData(i, "adptDt") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["적용일자"]);
      return false;
    }
    if (ds_retrieve.getCellData(i, "dptDistrictCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출발권역코드"]);
      return false;
    }
    if (ds_retrieve.getCellData(i, "arvDistrictCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["도착권역코드"]);
      return false;
    }
    var status = ds_retrieve.getRowStatusValue(i);

    // 수정/신규만 처리 (R:0, U:1, C:2, D:3)
    if (status === 1 || status === 2) {
      // odrKndCd가 빈 경우 odrKndCdCd 값 또는 콤보 값으로 채움
      // (빈 문자열은 Oracle에서 NULL 처리되어 체크 쿼리 실패 방지)
      if (ds_retrieve.getCellData(i, "odrKndCd") == "") {
        var fallback = ds_retrieve.getCellData(i, "odrKndCdCd") || acb_lc_odrKndCd.getValue() || "99";
        ds_retrieve.setCellData(i, "odrKndCd", fallback);
        if (i + 1 < row) {
          ds_retrieve.setCellData(i + 1, "odrKndCd", fallback);
        }
      }
      if (ds_retrieve.getCellData(i, "odrKndCd") == "전체" || ds_retrieve.getCellData(i, "odrKndCd") == "전") {
        ds_retrieve.setCellData(i, "odrKndCd", "99");
        if (i + 1 < row) {
          ds_retrieve.setCellData(i + 1, "odrKndCd", "99");
        }
      }
    }

    // 삭제행 제외 검증
    if (status !== 0 && status !== 3) {
      if (ds_retrieve.getCellData(i, "dtc") == 0) {
        $c.win.alert($p, "거리가 0보다 커야 합니다.");
        return false;
      }
    }
  }
  return true;
};

//grid 출발지 popup
scwin.dppop_grid = function (pName, pClose) {
  var pWhere = ",,WDE,,,,,PEX";
  if (chk_rateClsYn.getValue() == "1") pWhere = ",,NWD,,,,,NPX";
  var pCode = pName ? "" : ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "dptDistrictCd");
  udc_comCode_dp_grid.cfCommonPopUp(scwin.udc_comCode_dp_grid_callBackFunc, pCode, pName || "", pClose || "F", null, null, null, null, pWhere, null, null, null, null, null, null, "지역,지역코드,지역명", null);
};

//grid pop (출발지) callback — 쌍행 동기화
scwin.udc_comCode_dp_grid_callBackFunc = function (ret) {
  var row = ds_retrieve.getRowPosition();
  ds_retrieve.setCellData(row, "dptDistrictCd", ret[0]);
  ds_retrieve.setCellData(row, "dptDistrictCdNm", ret[1]);
  var pairRow = ds_retrieve.getCellData(row, "gubun") == "1" ? row + 1 : row - 1;
  if (pairRow >= 0 && pairRow < ds_retrieve.getRowCount()) {
    ds_retrieve.setCellData(pairRow, "dptDistrictCd", ret[0]);
    ds_retrieve.setCellData(pairRow, "dptDistrictCdNm", ret[1]);
  }
};

//grid 도착지 popup
scwin.arpop_grid = function (pName, pClose) {
  var pWhere = ",,WDE,,,,,PEX";
  if (chk_rateClsYn.getValue() == "1") pWhere = ",,NWD,,,,,NPX";
  var pCode = pName ? "" : ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "arvDistrictCd");
  udc_comCode_ar_grid.cfCommonPopUp(scwin.udc_comCode_ar_grid_callBackFunc, pCode, pName || "", pClose || "F", null, null, null, null, pWhere, null, null, null, null, null, null, "지역,지역코드,지역명", null);
};

//grid pop (도착지) callback — 쌍행 동기화
scwin.udc_comCode_ar_grid_callBackFunc = function (ret) {
  var row = ds_retrieve.getRowPosition();
  ds_retrieve.setCellData(row, "arvDistrictCd", ret[0]);
  ds_retrieve.setCellData(row, "arvDistrictCdNm", ret[1]);
  var pairRow = ds_retrieve.getCellData(row, "gubun") == "1" ? row + 1 : row - 1;
  if (pairRow >= 0 && pairRow < ds_retrieve.getRowCount()) {
    ds_retrieve.setCellData(pairRow, "arvDistrictCd", ret[0]);
    ds_retrieve.setCellData(pairRow, "arvDistrictCdNm", ret[1]);
  }
};

//grid 화주 popup
scwin.lopop_grid = function () {
  udc_comCode_lo_grid.cfCommonPopUp(scwin.udc_comCode_lo_grid_callBackFunc, ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "clntNo"), "", "F", null, "지역코드,지역명", null, null, null, null, null, null, null, null, null, "지역,지역코드,지역명", null);
};

//grid pop (화주) callback — 쌍행 동기화
scwin.udc_comCode_lo_grid_callBackFunc = function (ret) {
  var row = ds_retrieve.getRowPosition();
  ds_retrieve.setCellData(row, "clntNo", ret[0]);
  ds_retrieve.setCellData(row, "clntNm", ret[1]);
  var pairRow = ds_retrieve.getCellData(row, "gubun") == "1" ? row + 1 : row - 1;
  if (pairRow >= 0 && pairRow < ds_retrieve.getRowCount()) {
    ds_retrieve.setCellData(pairRow, "clntNo", ret[0]);
    ds_retrieve.setCellData(pairRow, "clntNm", ret[1]);
  }
};

//grid 협력업체 popup
scwin.copop_grid = function () {
  udc_comCode_co_grid.cfCommonPopUp(scwin.udc_comCode_co_grid_callBackFunc, ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "copCoClntNo"), "", "F", null, null, null, null, null, null, null, null, null, null, null, "협력업체조회,협력업체코드,협력업체명", null);
};

//grid pop 협력업체 callback — 쌍행 동기화
scwin.udc_comCode_co_grid_callBackFunc = function (ret) {
  var row = ds_retrieve.getRowPosition();
  ds_retrieve.setCellData(row, "copCoClntNo", ret[0]);
  ds_retrieve.setCellData(row, "copCoClntNm", ret[1]);
  var pairRow = ds_retrieve.getCellData(row, "gubun") == "1" ? row + 1 : row - 1;
  if (pairRow >= 0 && pairRow < ds_retrieve.getRowCount()) {
    ds_retrieve.setCellData(pairRow, "copCoClntNo", ret[0]);
    ds_retrieve.setCellData(pairRow, "copCoClntNm", ret[1]);
  }
};

//-------------------------------------------------------------------------
// 그리드 편집 진입 전
//-------------------------------------------------------------------------
scwin.gr_retrieve_onbeforeedit = function (rowIndex, columnIndex, value) {
  // 단가행(gubun=2): 항상 편집 불가 (금액/거리로 자동 계산)
  if (ds_retrieve.getCellData(rowIndex, "gubun") != "1") {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드 셀 편집 종료 — 출발/도착 권역 지역명 입력 시 자동 팝업
//-------------------------------------------------------------------------
scwin.gr_retrieve_onafteredit = function (rowIndex, columnIndex, value) {
  var colId = gr_retrieve.getColumnID(columnIndex);
  if (colId === "dptDistrictCdNm" && value !== "") {
    ds_retrieve.setCellData(rowIndex, "dptDistrictCd", "");
    setTimeout(function () {
      scwin.dppop_grid(value, "T");
    }, 100);
  } else if (colId === "arvDistrictCdNm" && value !== "") {
    ds_retrieve.setCellData(rowIndex, "arvDistrictCd", "");
    setTimeout(function () {
      scwin.arpop_grid(value, "T");
    }, 100);
  }

  // 금액 컬럼 비우고 포커스 아웃 시 0으로 세팅
  if (colId.substring(0, 4) === "pchs" && (value === "" || value === null)) {
    ds_retrieve.setCellData(rowIndex, colId, 0);
  }
};

//-------------------------------------------------------------------------
// 그리드 textImage 돋보기 클릭 — 팝업 호출
//-------------------------------------------------------------------------
scwin.gr_retrieve_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_retrieve.getColumnID(columnIndex);
  if (colId === "dptDistrictCdNm") {
    scwin.dppop_grid();
  } else if (colId === "arvDistrictCdNm") {
    scwin.arpop_grid();
  } else if (colId === "clntNm") {
    scwin.lopop_grid();
  } else if (colId === "copCoClntNm") {
    scwin.copop_grid();
  }
};

//-------------------------------------------------------------------------
// ds_retrieve oncolumnchanged — 핵심 가격 자동계산 로직
//-------------------------------------------------------------------------
scwin._inCellChange = false;
scwin.ds_retrieve_oncelldatachange = function (info) {
  if (scwin._inCellChange) return;
  var row = info.rowIndex;
  var colid = info.colID;
  var pairRow = row + 1;
  if (ds_retrieve.getCellData(row, "gubun") != "1") return;
  if (pairRow >= ds_retrieve.getRowCount()) return;
  scwin._inCellChange = true;
  var dtc = parseFloat(ds_retrieve.getCellData(row, "dtc")) || 0;

  // 금액 컬럼 변경 시 → 빈값이면 0 세팅 + 단가(pairRow) 자동계산 + Full→Empty 복사
  if (colid.substring(0, 1) == "p") {
    var rawVal = ds_retrieve.getCellData(row, colid);
    if (rawVal === "" || rawVal === null || rawVal === undefined) {
      ds_retrieve.setCellData(row, colid, 0);
    }
    var amt = parseFloat(ds_retrieve.getCellData(row, colid)) || 0;
    if (dtc > 0) {
      ds_retrieve.setCellData(pairRow, colid, amt / dtc);
    }
    if (colid == "pchsAmt45Full") {
      ds_retrieve.setCellData(row, "pchsAmt45Empty", amt);
      if (dtc > 0) ds_retrieve.setCellData(pairRow, "pchsAmt45Empty", amt / dtc);
    } else if (colid == "pchsAmt40Full") {
      ds_retrieve.setCellData(row, "pchsAmt40Empty", amt);
      if (dtc > 0) ds_retrieve.setCellData(pairRow, "pchsAmt40Empty", amt / dtc);
    } else if (colid == "pchsAmt20FullHeavy") {
      ds_retrieve.setCellData(row, "pchsAmt20EmptyHeavy", amt);
      ds_retrieve.setCellData(row, "pchsAmt20FullLight", amt);
      ds_retrieve.setCellData(row, "pchsAmt20EmptyLight", amt);
      ds_retrieve.setCellData(row, "pchsAmt20FullCombine", amt);
      ds_retrieve.setCellData(row, "pchsAmt20EmptyCombine", amt);
      if (dtc > 0) {
        var upr = amt / dtc;
        ds_retrieve.setCellData(pairRow, "pchsAmt20EmptyHeavy", upr);
        ds_retrieve.setCellData(pairRow, "pchsAmt20FullLight", upr);
        ds_retrieve.setCellData(pairRow, "pchsAmt20EmptyLight", upr);
        ds_retrieve.setCellData(pairRow, "pchsAmt20FullCombine", upr);
        ds_retrieve.setCellData(pairRow, "pchsAmt20EmptyCombine", upr);
      }
    } else if (colid == "pchsAmt20FullLight") {
      ds_retrieve.setCellData(row, "pchsAmt20EmptyLight", amt);
      if (dtc > 0) ds_retrieve.setCellData(pairRow, "pchsAmt20EmptyLight", amt / dtc);
    } else if (colid == "pchsAmt20FullCombine") {
      ds_retrieve.setCellData(row, "pchsAmt20EmptyCombine", amt);
      if (dtc > 0) ds_retrieve.setCellData(pairRow, "pchsAmt20EmptyCombine", amt / dtc);
    }
    gr_retrieve.refresh();

    // 거리(dtc) 변경 시 → 단가행(pairRow) 전체 재계산
  } else if (colid == "dtc") {
    ds_retrieve.setCellData(pairRow, "dtc", dtc);
    if (dtc > 0) {
      var cols = ["pchsAmt45Full", "pchsAmt45Empty", "pchsAmt40Full", "pchsAmt40Empty", "pchsAmt20FullHeavy", "pchsAmt20EmptyHeavy", "pchsAmt20FullLight", "pchsAmt20EmptyLight", "pchsAmt20FullCombine", "pchsAmt20EmptyCombine"];
      for (var c = 0; c < cols.length; c++) {
        var val = parseFloat(ds_retrieve.getCellData(row, cols[c])) || 0;
        ds_retrieve.setCellData(pairRow, cols[c], val / dtc);
      }
    }
    gr_retrieve.refresh();

    // 기타 컬럼 변경 시 → 쌍행(row+1)에 동일값 복사
  } else {
    ds_retrieve.setCellData(row + 1, colid, ds_retrieve.getCellData(row, colid));
  }
  scwin._inCellChange = false;
};

//-------------------------------------------------------------------------
// 2행 기준 행 색상 교대 — 셀 단위 적용 (머지 셀 포함)
//-------------------------------------------------------------------------
scwin.applyRowColors = function () {
  var nCnt = ds_retrieve.getRowCount();
  var colCnt = gr_retrieve.getColumnCount();
  for (var r = 0; r < nCnt; r++) {
    var grpNo = Math.floor(r / 2);
    var bgColor = grpNo % 2 === 0 ? "#FFFFFF" : "#edf3fb";
    for (var c = 0; c < colCnt; c++) {
      gr_retrieve.setCellStyle(r, c, "background-color", bgColor);
    }
  }
};

//-------------------------------------------------------------------------
// importFormatter — odrKndCd 코드값 복사
//-------------------------------------------------------------------------
scwin.importFormatterOdrKndCd = function (rowData, rowIndex) {
  return rowData.odrKndCd || "";
};

//-------------------------------------------------------------------------
// importFormatter — 2행 1세트 기준 grpKey 자동 생성
//-------------------------------------------------------------------------
scwin.importFormatter = function (rowData, rowIndex) {
  var grpKey = rowData.grpKey;

  // 신규 추가행은 직접 넣은 그룹키 유지
  if (grpKey && String(grpKey).indexOf("ADD_") === 0) {
    return grpKey;
  }

  // 조회 데이터는 2행 단위 그룹 (금액행+단가행)
  return String(Math.floor(rowIndex / 2));
};

/**
 * method
 * @name f_runExcel
 * @description Excel
 * @param 
 */
scwin.f_runExcel = async function () {
  if (ds_retrieve.getRowCount() > 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_retrieve, {
        fileName: '계약별컨테이너하불요율등록.xlsx',
        sheetName: '계약별컨테이너하불요율등록',
        hiddenVisible: "true",
        removeColumns: "19",
        type: "0"
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_branCd',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_branCd'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_comCode_clnt',maxlengthCode:'6',mandatoryCode:'true',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent',selectID:'retrieveBilgMchtList','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_clnt_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_copCoClntNo',nameId:'ed_copCoClntNm',id:'udc_comCode_cop',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCode_cop_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_cop_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_cop_onblurNameEvent',selectID:'retrieveCoopList',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:160px;',id:'acb_lc_odrKndCd',class:'',mandatory:'true',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LkStepNo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chk_rateClsYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안전운임여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_dptDistrictCd',nameId:'ed_dptDistrictNm',maxlengthCode:'7',UpperFlagCode:'1',id:'udc_comCode_dpt',selectID:'retrieveDistrictList','ev:onclickEvent':'scwin.udc_comCode_dpt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dpt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_dpt_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~ 도착권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_arvDistrictCd',nameId:'ed_arvDistrictNm',UpperFlagCode:'1',maxlengthCode:'7',id:'udc_comCode_arv',selectID:'retrieveDistrictList','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_arv_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_adptDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',gridID:'gr_retrieve',btnPlusYn:'Y',gridDownYn:'Y',gridDownFn:'scwin.f_runExcel',gridUpYn:'Y',gridUpFn:'scwin.f_excelUpload',id:'udc_excel',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_retrieve',style:'',visibleRowNum:'13',visibleRowNumFix:'true',rowStatusVisible:'true',focusMode:'row',focusMove:'true',columnMove:'t',columnMoveWithFooter:'tr',enterKeyMove:'true',keyMoveEditMode:'true',moveKeyEditMode:'true',moveKeyEditModeAll:'true','ev:onbeforeedit':'scwin.gr_retrieve_onbeforeedit','ev:ontextimageclick':'scwin.gr_retrieve_ontextimageclick','ev:onafteredit':'scwin.gr_retrieve_onafteredit','ev:onfilereadend':'scwin.gr_retrieve_onfilereadend',rowStatusWidth:'20',oddEvenColorDisplay:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'출발<br/>권역',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'도착<br/>권역',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'화주명',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거리<br/>(Km)',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'적용일자',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'오더종류',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'',width:'100',colSpan:'',rowSpan:'3',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'협력업체',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'금액<br/>단가',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'45F',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column25',value:'40F',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column23',value:'20F',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'columnGrpKey',inputType:'text',style:'',value:'',width:'0',rowSpan:'3',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'FULL',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'EMPTY',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'FULL',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'EMPTY',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column29',value:'Heavy',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column70',value:'Light',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column58',value:'Combine',displayMode:'label',colSpan:'2',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'EMPTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'EMPTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'EMPTY',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCdNm',inputType:'textImage',style:'',value:'',width:'80',textAlign:'left',viewType:'default',upperColumn:'grpKey',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCdNm',inputType:'textImage',style:'',value:'',width:'80',textAlign:'left',viewType:'default',upperColumn:'grpKey',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',style:'',value:'',width:'80',textAlign:'left',viewType:'default',upperColumn:'grpKey',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtc',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###.000',defaultValue:'0',upperColumn:'grpKey',maxLength:'6',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',colMerge:'true',upperColumn:'grpKey'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left',allOption:'',chooseOption:'',ref:'',upperColumn:'grpKey',colMerge:'true',editModeEvent:'onclick',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LkStepNo1_grid'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCdCd',inputType:'text',style:'',value:'',width:'100',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',viewType:'default',upperColumn:'grpKey',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempText',inputType:'text',style:'',value:'',width:'70',textAlign:'center',dataType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt45Full',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt45Empty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt40Full',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt40Empty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20FullHeavy',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20EmptyHeavy',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20FullLight',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20EmptyLight',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20FullCombine',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20EmptyCombine',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'grpKey',value:'',displayMode:'label',colMerge:'true',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_totalCnt'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_retrieve',btnDelYn:'N',btnCancelYn:'N',rowAddFunction:'scwin.addRow',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_excel_sample',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_excel_sample_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'등록양식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_dp_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_ar_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveBilgMchtList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_lo_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCoopList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_co_grid'}}]}]}]}]}]})