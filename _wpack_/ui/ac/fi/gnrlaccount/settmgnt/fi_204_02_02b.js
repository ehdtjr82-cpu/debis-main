/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_02b.xml 33138 bba6e2e545d4a2babcab5214b6b423f080c71e1fac653e47455fa2b44658456b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDtSt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdEnd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text',defaultValue:'',encYN:'Ct'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_settlement',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSumAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSumAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDtSt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdEnd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_getMaxCloseYm',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveControlSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_settlement","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_settlement","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.gnrlaccount.settmgnt.DeleteControlSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_settlement","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ac.fi.gnrlaccount.settmgnt.RegistControlSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_settlement","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'scwin.sbm_create_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.empNo = $c.data.getMemInfo($p, "empNo"); // 사용자 아이디

scwin.isSubCompany = false;
scwin.isFirst = true;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "ControlSlipEBC",
    param2: "retrieveSlipKndCd",
    param3: ["CMP"],
    compID: "acb_slipKndCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  ed_postDtSt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + "01");
  ed_postDtEnd.setValue(WebSquare.date.getCurrentServerDate());
  ed_postDtSt.focus();
  acb_slipKndCd.setSelectedIndex(0);
  dma_search2.set("coCd", scwin.vLoginCoCd);
  scwin.f_setCompanyInfo();
  scwin.getMaxCloseYm(); //마감년월 가져오기 
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = function () {
  $c.sbm.execute($p, sbm_getMaxCloseYm);
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
// 조회(결산조정전표목록)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ed_postDtSt, ed_postDtEnd, ed_slipAcctDeptCdSt, ed_slipAcctDeptCdEnd, ed_drawEmpNo]))) return false;
  if (!$c.gus.cfIsNull($p, ed_postDtSt.getValue()) && !$c.gus.cfIsNull($p, ed_postDtEnd.getValue())) {
    // if (!$c.gus.cfValidateValue(ed_acqDtEndDt.getValue(),"minDate=" + ed_acqDtStDt.getValue())) {
    if (WebSquare.date.dateDiff(ed_postDtSt.getValue(), ed_postDtEnd.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_postDtSt.focus();
      return false;
    }
  }

  // if (!f_BetweenCheck(ed_slipAcctDeptCdSt.text.trim(), ed_slipAcctDeptCdEnd.text.trim())){
  //     cfAlertMsg(MSG_CM_ERR_057,Array("작성부서To","작성부서From"));
  //     ed_slipAcctDeptCdSt.Focus();
  //     return false;
  // }  

  // if (!cfIsAfterDate(ed_postDtSt.text.trim(), ed_postDtEnd.text.trim())){
  //     cfAlertMsg(MSG_CM_ERR_039); 
  //     ed_postDtSt.Focus();
  //     return false;
  // }  

  dma_search.set("slipKndCd", acb_slipKndCd.getValue());
  dma_search.set("coClsCd", scwin.coClsCd);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 전표삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_settlement.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }

  // 전표종류가 수정불가일경우 체크
  for (i = 0; i < ds_settlement.getTotalRow(); i++) {
    if (ds_settlement.getRowStatus(i) == "U" && ds_settlement.getCellData(i, "modPsblYn") == "0") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, Array("전표번호[" + ds_settlement.getCellData(i, "ctrlSlipNo") + "]", "전표삭제를 "));
      return;
    }
    // 자기자신이 작성한 전표만 삭제한다
    if (ds_settlement.getRowStatus(i) == "U" && ds_settlement.getCellData(i, "drawEmpNo") != scwin.empNo) {
      //전표번호 @은(는) 자신이 작성한 전표가 아닙니다(작성자: @)
      await $c.gus.cfAlertMsg($p, "전표번호[" + ds_settlement.getCellData(i, "ctrlSlipNo") + "]은(는) 자신이 작성한 전표가 아닙니다(작성자:" + ds_settlement.getCellData(i, "drawEmpNo") + ")");
      return;
    }
  }
  if (await $c.win.confirm($p, "선택하신 전표를 적용하시겠습니까?")) {
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 실물화 전표삭제
//-------------------------------------------------------------------------
scwin.f_DeletePopup = async function () {
  //상세화면 호출 

  let data = {
    //  closeYm : ica_closeYm.getValue().trim()
  };
  let win_url = "/ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_02p.xml";
  let opts = {
    id: "smpPop",
    popupName: "실물화전표삭제(역전표)",
    modal: true,
    type: "browserPopup",
    width: 1030,
    height: 540,
    title: "실물화전표삭제(역전표)"
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// 실물화
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  if (ds_settlement.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  if (await $c.win.confirm($p, "선택하신 전표를 적용하시겠습니까?")) {
    $c.sbm.execute($p, sbm_create);
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 부서조회  
      var param = ",,0,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, ed_slipAcctDeptCdSt.getValue().trim(), ed_slipAcctDeptNmSt.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_slipAcctDeptCdSt,txt_slipAcctDeptNmSt,rtnList);
      break;
    case '2':
      // 부서조회
      var param = ",,0,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      rtnList = udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, ed_slipAcctDeptCdEnd.getValue().trim(), ed_slipAcctDeptNmEnd.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_slipAcctDeptCdEnd,txt_slipAcctDeptNmEnd,rtnList);
      break;
    case '3':
      // 사원
      var param = "";
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      }
      rtnList = udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_callBackFunc, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_drawEmpNo,txt_drawEmpNm,rtnList);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, rtnList);
};
scwin.udc_acctDeptCdInfo2_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCdEnd, ed_slipAcctDeptNmEnd, rtnList);
};
scwin.udc_drawEmpNo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_drawEmpNo, ed_drawEmpNm, rtnList);
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

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
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
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function () {
  var row = ds_settlement.getRowPosition();
  if (row == null) {
    row = 0;
  }
  if (row > -1) {
    let data = {
      ctrlSlipNo: ds_settlement.getCellData(row, "ctrlSlipNo"),
      modPsblYn: ds_settlement.getCellData(row, "modPsblYn"),
      autoSlipYn: ds_settlement.getCellData(row, "autoSlipYn")
    };
    let win_url = "/ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "결산조정전표작성",
      modal: true,
      type: "browserPopup",
      width: 1030,
      height: 540,
      title: "결산조정전표작성"
    };
    var rt = await $c.win.openPopup($p, win_url, opts, data);
    scwin.f_Retrieve();
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("Row"));
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let options = {
      fileName: "결산조정전표조회",
      // + ".xls",
      sheetName: "결산조정전표조회",
      type: 1,
      headerColor: "#eeeeee" //"#E8E8E8", //연한회색 #33CCCC
    };
    //그리드에 대한 내용을 추가 옵션
    let infoArr = [
    //제목
    {
      // rowIndex: 0               //제목을 표시할 행 index
      // , colIndex: 0               //제목을 표시할 열 index
      // , text: "대출상환 내역"          //표시할 내용(제목)
      // , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
      // , fontSize: "18px"          //폰트 size
      // , fontName: "돋움체"        //폰트이름 
      // , drawBorder: false         //cell의 border 지정(true, false)
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 14,
      text: "결산조정전표조회",
      textAlign: "center",
      fontSize: 12,
      drawBorder: false
    }];
    $c.data.downloadGridViewExcel($p, gr_settlement, options, "");
  }
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
    if (ed_coCd.options.hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
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
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, ed_slipAcctDeptCdEnd, ed_slipAcctDeptNmEnd]); //  작성 부서  
  $c.gus.cfInitObjects($p, [ed_drawEmpNo, ed_drawEmpNm]); // 작성자
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_acctDeptCdInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, '1');
};
scwin.udc_acctDeptCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCdEnd, ed_slipAcctDeptNmEnd, '2');
};
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_drawEmpNo, ed_drawEmpNm, '3');
};
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로삭제하였습니다
    ds_settlement.removeAll();
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submiterror = function (e) {
  // cfShowError(tr_delete);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [bUpdate]);
};
scwin.sbm_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "성공적으로 처리하였습니다"); // 성공적으로삭제하였습니다
    ds_settlement.removeAll();
    scwin.f_Retrieve();
  }
};
scwin.sbm_create_submiterror = function (e) {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [bUpdate]);
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ed_total.setValue(ds_settlement.getTotalRow());
    if (ds_settlement.getTotalRow() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      ds_settlement.sort("ctrlSlipNo", 0);
    }
  }
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  var thisYm = WebSquare.date.getCurrentServerDate(); // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + "01"; // 1일
    let lastDD = $c.date.getLastDateOfMonth($p, closeYm);
    // var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
    ed_postDtEnd.setValue(closeYm + lastDD); //작성일자 셋팅
    ed_postDtSt.setValue(firstDay);
  } else {
    var firstDay = thisYm.substr(0, 4) + thisYm.substr(4, 2) + "01"; //당월 1일
    let lastDD = $c.date.getLastDateOfMonth($p, thisYm.substr(0, 6));
    // var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
    ed_postDtEnd.setValue(thisYm.substr(0, 6) + lastDD); //작성일자 셋팅
    ed_postDtSt.setValue(firstDay);
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_pu_evid_onclick = function (e) {
  scwin.f_Detail();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_deletePopup_onclick = function (e) {
  scwin.f_DeletePopup();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_slipKndCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'postDtSt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'postDtEnd',edFromId:'ed_postDtSt',edToId:'ed_postDtEnd',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo2',codeId:'ed_slipAcctDeptCdSt',validTitle:'',nameId:'ed_slipAcctDeptNmSt',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',code:'slipAcctDeptCdSt',refDataCollection:'dma_search',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo2',codeId:'ed_slipAcctDeptCdEnd',validTitle:'',nameId:'ed_slipAcctDeptNmEnd',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',code:'slipAcctDeptCdEnd',refDataCollection:'dma_search',id:'udc_acctDeptCdInfo2','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drawEmpNo',nameId:'ed_drawEmpNm',popupID:'',popupTitle:'',selectID:'retrieveAcEmpInfo',style:'',validTitle:'',id:'udc_drawEmpNo',refDataCollection:'dma_search',code:'drawEmpNo','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_settlement',gridDownFn:'scwin.f_Excel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_settlement',focusMode:'cell',id:'gr_settlement',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작성일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'작성부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'차변금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'대변금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'작성자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'작성자사번',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'checkYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrlSlipNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipAcctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drSumAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crSumAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'drSumAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'crSumAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_pu_evid',style:'',type:'button','ev:onclick':'scwin.btn_pu_evid_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세조회'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_create',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_deletePopup',style:'',type:'button','ev:onclick':'scwin.btn_deletePopup_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물화전표 삭제'}]}]}]}]}]}]}]}]}]})