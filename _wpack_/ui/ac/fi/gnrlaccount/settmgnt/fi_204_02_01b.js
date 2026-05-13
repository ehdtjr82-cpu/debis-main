/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_01b.xml 35327 0b79e2c4a29351f5d40594dfe6c2c72660b17b8aaba309951a22f855b2784f30 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_getMaxCloseYm',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'closeYm',name:'name1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_settlementHeader',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'postDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_settlement',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrlSlipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipSeq',name:'name2',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damt',name:'name8',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'camt',name:'name9',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amt',name:'name10',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name12',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name13',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name15',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrlSlipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrlSlipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrlSlipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_settlementHeader'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.settmgnt.ProcessControlSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_settlementHeader","key":"IN_DS1"},{"id":"ds_ctrlSlipNo","key":"OUT_DS1"},{"action":"modified","id":"ds_settlement","key":"IN_DS2"}]',target:'data:json,{"id":"ds_ctrlSlipNo","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ac.fi.gnrlaccount.settmgnt.UpdateControlSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_settlement","key":"IN_DS1"}',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_update_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveControlSlipContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_settlementHeader","key":"OUT_DS1"}, {"id":"ds_settlement","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_settlementHeader","key":"OUT_DS1"},{"id":"ds_settlement","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_search_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
    참고사항 : 전표복사 버튼 사용 x (26.01.07 윤성호 이사 통해 확인)
*/

// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vCoCd = scwin.login.coCd;
scwin.vCoClsCd = scwin.login.coClsCd;
scwin.empNo = $c.data.getMemInfo($p, "empNm"); // 사용자 아이디

scwin.isSubCompany = false;

// hidden 컴포넌트
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.flag;
scwin.valueObject;
scwin.rowPos;
scwin.onpageload = function () {
  scwin.valueObject = $c.data.getParameter($p);
  scwin.flag = $c.data.getParameter($p, "flag");
};
scwin.onUdcCompleted = async function () {
  udc_acctCdInfo.hide("");
  udc_acctDeptCdInfo2.hide("");
  scwin.f_setCompanyInfo();
  if ($c.data.getParameter($p, "ctrlSlipNo") != "undefined" && $c.data.getParameter($p, "ctrlSlipNo") != null) {
    scwin.f_UpdateView();
    scwin.f_Retrieve();
  } else {
    scwin.f_Header();
    scwin.f_SaveView();
    scwin.f_AddRow();
  }
  // scwin.f_openPopUp('1','T');
  scwin.getMaxCloseYm(); //마감년월 가져오기
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')인 경우 
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
};

//-------------------------------------------------------------------------
// 수정시화면 
//-------------------------------------------------------------------------
scwin.f_UpdateView = function () {
  // d_Save.style.visibility = "hidden";  
  d_Save.hide("");
  btn_pu_evid.hide("");
  udc_bottom.hide("");
  gr_settlement.setGridHeight(350);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [ica_postDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_ed_slipAcctDept]);
  ica_postDt.options.mandatory = false;
  ed_slipAcctDeptNm.options.mandatory = false;
  // $c.gus.cfRefreshMandSign();

  gr_settlement.setReadOnly("column", "acctCd", true);
  gr_settlement.setReadOnly("column", "acctDeptCd", true);
  gr_settlement.setReadOnly("column", "damt", true);
  gr_settlement.setReadOnly("column", "camt", true);

  // 전표종류가 수정불가일경우 체크
  if ($c.data.getParameter($p, "modPsblYn") == "0") {
    // btSave.style.visibility = "hidden";
    btn_Save.hide("");
    gr_settlement.setReadOnly("column", "summary", true);
  }
};

//-------------------------------------------------------------------------
// 발행시 화면 
//-------------------------------------------------------------------------
scwin.f_SaveView = function () {
  // $c.gus.cfDisableKeyData(); 
  // d_Update.style.visibility = "hidden";
  d_Update.hide("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 전표번호		
  // var CTRLSLIPNO_HEADER =		   "ctrlSlipNo:STRING(10)";                  // 전표번호    

  // ds_search.SetDataHeader(CTRLSLIPNO_HEADER);
  // ds_search.AddRow();

  if ($c.data.getParameter($p, "ctrlSlipNo") != "undefined" && $c.data.getParameter($p, "ctrlSlipNo") != null) {
    var ctrlSlipNo = $c.data.getParameter($p, "ctrlSlipNo");
    if (ctrlSlipNo != null) {
      dma_search.set("ctrlSlipNo", ctrlSlipNo);
      $c.sbm.execute($p, sbm_search);
    }
  }
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = function () {
  dma_search2.set("coCd", scwin.vCoCd);
  $c.sbm.execute($p, sbm_getMaxCloseYm);
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // // 전표헤더 - 작업경로 헤더정보 생성
  //     var SETTLE_HEADER =        "postDt:STRING(8)"                    // 전표일자
  //                                 + ",slipAcctDeptCd:STRING(5)"           // 전표귀속부서코드
  //                                 + ",slipAcctDeptNm:STRING(50)"          // 전표귀속부서명

  // // 전표내역 - 작업경로 헤더정보 생성
  //     var SETTLEMENT_HEADER     = "acctDeptCd:STRING(5)"                // 귀속부서코드
  //                                 + ",acctDeptNm:STRING(50)"				 // 귀속부서명
  //                                 + ",acctCd:STRING(7)"                   // 계정코드
  //                                 + ",acctNm:STRING(50)"                  // 계정명
  //                                 + ",drcrClsCd:STRING(1)"                // 차대구분코드
  //                                 + ",damt:DECIMAL(13.0)"                 // 차변금액
  //                                 + ",camt:DECIMAL(13.0)"                 // 대변금액
  //                                 + ",amt:DECIMAL(13.0)"                  // 금액
  //                                 + ",summary:STRING(100)"                // 적요
  //                                 + ",ctrlSlipNo:STRING(10)"              // 전표번호
  //                                 + ",ctrlSlipSeq:INT(5)"                 // 전표순번

  //     ds_settlementHeader.SetDataHeader(SETTLE_HEADER);
  //     ds_settlementHeader.AddRow();

  // // 마감년월 조회 조건
  // var SEARCH_HEADER2 =      "coCd:STRING(3)" ;               

  // ds_search2.SetDataHeader(SEARCH_HEADER2);
  // ds_search2.AddRow();
  // ds_search2.NameValue(1,"coCd") = vCoCd;

  ds_settlementHeader.setCellData(0, "postDt", WebSquare.date.getCurrentServerDate());
  ica_postDt.setValue(WebSquare.date.getCurrentServerDate());
  // Session 이용
  ds_settlementHeader.setCellData(0, "slipAcctDeptCd", scwin.login.acctDeptCd);
  ds_settlementHeader.setCellData(0, "slipAcctDeptNm", scwin.login.acctDeptNm);
  ed_slipAcctDeptCd.setValue(scwin.login.acctDeptCd);
  ed_slipAcctDeptNm.setValue(scwin.login.acctDeptNm);
  ed_slipAcctDeptCd.options.hidVal = scwin.login.acctDeptCd;
  // ds_settlement.SetDataHeader(SETTLEMENT_HEADER);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서")) return;
  var row = ds_settlement.insertRow();
  ds_settlement.setCellData(row, "damt", 0);
  ds_settlement.setCellData(row, "camt", 0);
  $c.gus.cfEnableBtnOnly($p, [btn_bSave, btn_Save]);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  ds_settlement.removeRow(ds_settlement.getRowPosition());
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  ds_settlement.removeRow(ds_settlement.getRowPosition());
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ds_settlement.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  // 체크
  if ($c.gus.cfValidate($p, [gr_settlement])) {
    if (await $c.win.confirm($p, MSG_CM_CRM_003)) {
      $c.sbm.execute($p, sbm_update);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //체크
  if (ds_settlement.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ica_postDt, ed_slipAcctDeptCd]))) return;
  if (!(await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서"))) return;

  // 값체크
  var camt = 0;
  var damt = 0;
  if (ds_settlement.getTotalRow() > 0) {
    for (i = 0; i < ds_settlement.getTotalRow(); i++) {
      camt = camt + Number(ds_settlement.getCellData(i, "camt"));
      damt = damt + Number(ds_settlement.getCellData(i, "damt"));
    }
    if (damt != camt) {
      await $c.gus.cfAlertMsg($p, "차변금액과 대변금액의 합은 같아야 합니다");
      return;
    }
  }
  if (await $c.gus.cfValidate($p, [gr_settlement])) {
    // 금액 체크
    for (i = 0; i < ds_settlement.getTotalRow(); i++) {
      if (ds_settlement.getCellData(i, "damt") == 0 && ds_settlement.getCellData(i, "camt") == 0) {
        await $c.gus.cfAlertMsg($p, "차변금액과 대변금액 둘다 0일 수 없습니다.");
        return;
      } else if (ds_settlement.getCellData(i, "damt") != 0 && ds_settlement.getCellData(i, "camt") != 0) {
        await $c.gus.cfAlertMsg($p, "차변금액과 대변금액 중 하나만 입력 가능합니다.");
        return;
      } else if (ds_settlement.getCellData(i, "damt") != 0 && ds_settlement.getCellData(i, "camt") == 0) {
        ds_settlement.setCellData(i, "amt", ds_settlement.getCellData(i, "damt"));
        ds_settlement.setCellData(i, "drcrClsCd", ACConstants.DEBIT);
      } else if (ds_settlement.getCellData(i, "damt") == 0 && ds_settlement.getCellData(i, "camt") != 0) {
        ds_settlement.setCellData(i, "amt", ds_settlement.getCellData(i, "camt"));
        ds_settlement.setCellData(i, "drcrClsCd", ACConstants.CREDIT);
      }
    } //for end
    if (await $c.win.confirm($p, "발행하시겠습니까?")) {
      dma_settlementHeader.set("postDt", ica_postDt.getValue());
      dma_settlementHeader.set("slipAcctDeptCd", ed_slipAcctDeptCd.getValue());
      dma_settlementHeader.set("slipAcctDeptNm", ed_slipAcctDeptNm.getValue());
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
//  전표복사
//-------------------------------------------------------------------------

scwin.f_SlipCopy = async function () {
  let data = {
    pCoCd: scwin.txtCoCd,
    pCoClsCd: scwin.txtCoClsCd
  };
  let win_url = "/ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_03p.xml";
  let opts = {
    id: "smpPop",
    popupName: "전표복사",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 300,
    title: "전표복사"
  };
  var returnValue = await $c.win.openPopup($p, win_url, opts, data);
  if (returnValue != null) {
    $c.gus.cfEnableObjects($p, [ica_postDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm]);
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableBtnOnly($p, [btn_bSave, btn_Save]);
    ds_settlement.removeAll();
    // ds_settlement.ImportData(returnValue.slipcopy);

    for (var idx = 0; idx < ds_settlement.getTotalRow(); idx++) {
      var camt = 0;
      var damt = 0;
      camt = ds_settlement.getCellData(idx, "camt");
      damt = ds_settlement.getCellData(idx, "damt");
      if (returnValue.copyKind == "2") {
        ds_settlement.setCellData(idx, "camt", -1 * camt);
        ds_settlement.setCellData(idx, "damt", -1 * damt);
      } else if (returnValue.copyKind == "3") {
        ds_settlement.setCellData(idx, "camt", damt);
        ds_settlement.setCellData(idx, "damt", camt);
      }
    } // for end
  }
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  if (str.getValue().trim() == "") return true;
  if (str.getValue().trim() != str.options.hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 조회조건 - 발행 부서 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 부서   
      var param = "," + ica_postDt.getValue().trim() + ",0";
      if (scwin.isSubCompany) {
        param = "," + ica_postDt.getValue().trim() + ",0,," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
      }
      var rtnList = new Array();
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,rtnList);

      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------

scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);

  //회사 정보 set
  scwin.txtCoCd = rtnList[4]; //회사코드 
  scwin.txtCoClsCd = rtnList[5]; //회사구분코드	 
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
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.f_GridPop = function (colid, row, data, str) {
  if (colid == "acctCd") {
    ds_settlement.setCellData(row, "acctNm", "");
    var rtnList = new Array();
    var temp = "T," + ica_postDt.getValue().trim();
    rtnList = udc_acctCdInfo.cfCommonPopUp(scwin.udc_acctCdInfo_callBackFunc, str, "", "T", null, null, null, null, temp, null, null, null, null);
  } else if (colid == "acctDeptCd") {
    ds_settlement.setCellData(row, "acctDeptNm", "");
    var rtnList = new Array();
    var param = "," + ica_postDt.getValue().trim() + ",0,," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
    rtnList = udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, str, "", "T", null, null, null, null, param, null, null, null, null);
  }
};
scwin.udc_acctCdInfo_callBackFunc = function (rtnList) {
  ds_settlement.setCellData(scwin.rowPos, "acctCd", "");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_settlement.setCellData(scwin.rowPos, "acctCd", rtnList[0]); //계정
    ds_settlement.setCellData(scwin.rowPos, "acctNm", rtnList[1]); //계정명
  } else {
    ds_settlement.setCellData(scwin.rowPos, "acctCd", "");
    ds_settlement.setCellData(scwin.rowPos, "acctNm", "");
  }
};
scwin.udc_acctDeptCdInfo2_callBackFunc = function (rtnList) {
  ds_settlement.setCellData(scwin.rowPos, "acctDeptCd", "");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_settlement.setCellData(scwin.rowPos, "acctDeptCd", rtnList[0]); //부서코드
    ds_settlement.setCellData(scwin.rowPos, "acctDeptNm", rtnList[1]); //부서명
  } else {
    ds_settlement.setCellData(scwin.rowPos, "acctDeptCd", "");
    ds_settlement.setCellData(scwin.rowPos, "acctDeptNm", "");
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let options = {
      fileName: "결산조정전표작성",
      // + ".xls",
      sheetName: "결산조정전표",
      type: 1,
      headerColor: "#eeeeee" //"#E8E8E8", //연한회색 #33CCCC
    };
    //그리드에 대한 내용을 추가 옵션
    // let infoArr = [
    //     //제목
    //     {
    //         rowIndex : 0, 
    //         colIndex : 0, 
    //         rowSpan : 1,
    //         colSpan : 14, 
    //         text : "대출상환 내역" , 
    //         textAlign : "center",
    //         fontSize : 12,
    //         drawBorder:false
    //     }
    // ];

    $c.data.downloadGridViewExcel($p, gr_settlement, options, "");
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (ds_ctrlSlipNo.getCellData(0, "ctrlSlipNo") != "") {
      await $c.gus.cfAlertMsg($p, "전표번호 :" + ds_ctrlSlipNo.getCellData(0, "ctrlSlipNo") + " 발행되었습니다");
    }
    ds_settlement.removeAll();
    // scwin.f_OnLoad();
  }
};
scwin.sbm_update_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_003);
    scwin.f_Retrieve();
  }
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  var thisYm = WebSquare.date.getCurrentServerDate(); // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + "01"; // 1일
    let lastDD = $c.date.getLastDateOfMonth($p, closeYm);
    // var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
    ica_postDt.setValue(closeYm + lastDD);
  } else {
    // var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
    // let lastDD    = $c.date.getLastDateOfMonth(thisYm.substr(0,6));
    // // var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
    // ica_postDt.setValue(lastDD);;
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
};
scwin.sbm_search_submitdone = function (e) {
  ed_totalRow.setValue(ds_settlement.getTotalRow());
  ica_postDt.setValue(ds_settlementHeader.getCellData(0, "postDt"));
  ed_slipAcctDeptCd.setValue(ds_settlementHeader.getCellData(0, "slipAcctDeptCd"));
  ed_slipAcctDeptNm.setValue(ds_settlementHeader.getCellData(0, "slipAcctDeptNm"));
};
scwin.gr_settlement_ontextimageclick = function (rowIndex, columnIndex) {
  // var colId = gr_settlement.getColumnID(columnIndex);
  // scwin.rowPos = rowIndex;
  // if(colId=="acctCd"){
  //     scwin.f_GridPop(colId,scwin.rowPos,"",ds_settlement.getCellData(scwin.rowPos,"acctCd"));

  // }else if(colId=="acctDeptCd"){
  //     scwin.f_GridPop(colId,scwin.rowPos,"",ds_settlement.getCellData(scwin.rowPos,"acctDeptCd"));

  // }

  // scwin.f_GridPop(colId,rowIndex,"","");
};
scwin.gr_settlement_onafteredit = function (rowIndex, columnIndex, value) {
  var colId = gr_settlement.getColumnID(columnIndex);
  scwin.rowPos = rowIndex;
  if (colId == "acctCd") {
    scwin.f_GridPop(colId, scwin.rowPos, "", ds_settlement.getCellData(scwin.rowPos, "acctCd"));
  } else if (colId == "acctDeptCd") {
    scwin.f_GridPop(colId, scwin.rowPos, "", ds_settlement.getCellData(scwin.rowPos, "acctDeptCd"));
  }
};
scwin.btn_pu_evid_onclick = function (e) {
  scwin.f_SlipCopy();
};
scwin.btn_bSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_postDt',style:'',mandatory:'true',title:'작성일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo7',codeId:'ed_slipAcctDeptCd',validTitle:'발행부서',nameId:'ed_slipAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',mandatoryName:'true',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',btnId:'btn_ed_slipAcctDept'}},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm2',id:'udc_acctCdInfo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'',code:'',mandatoryCode:'true',selectID:'retrieveAcctCdInfo',validTitle:'거래처'}},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'',id:'udc_acctDeptCdInfo2',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'',code:'',mandatoryCode:'true',selectID:'retrieveAcctDeptCdInfo2',validTitle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white link',disabled:'',escape:'false',id:'btn_pu_evid',style:'display: none;',type:'button','ev:onclick':'scwin.btn_pu_evid_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표복사'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_settlement',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_settlement',focusMode:'row',id:'gr_settlement',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_settlement_ontextimageclick',visibleRowNum:'15',gridName:'결산조정전표','ev:onafteredit':'scwin.gr_settlement_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'계정명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'귀속부서',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'귀속부서명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'차변금액',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'대변금액',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'적요',width:'70',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'textImage',style:'',value:'',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'damt',inputType:'text',style:'',value:'0',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',validateOnInput:'true',excelCellType:'number',allowChar:'0-9',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'camt',inputType:'text',style:'',value:'0',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',validateOnInput:'true',excelCellType:'number',allowChar:'0-9',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'70',textAlign:'left',mandatory:'true',maxByteLength:'100'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'damt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'camt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',id:'udc_bottom'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''}},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'d_Save',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_bSave',style:'',type:'button','ev:onclick':'scwin.btn_bSave_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]},{T:1,N:'xf:group',A:{id:'d_Update',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]}]}]})