/*amd /ui/ac/fm/fundemployenterprise/fundemployent/fm_204_01_04b.xml 27522 fa945b9db750ee70d7e6a47a63679922920dd573116f2ea3a57ab859423a8d83 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_borr',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrKndCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDtCls',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAcctCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certfNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rpayAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planRpayStDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planRpayEndDt',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveBorrowCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_borr","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_borr","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBorr',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessBorrowMidPlanRepayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_borr","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBorr_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.PRINT_TYPE_ALL = "1";
scwin.PRINT_TYPE_DEPT = "2";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableBtn($p, [btn_bUpdate, btn_bDelete, btn_bSave, btn_bPrint]);
  $c.gus.cfDisableObjects($p, [ed_borrNo, acb_borrKndCd, ed_srchEmpNo, ed_clntNm, ed_empNo, ed_borrClntNo, ed_borrDt, acb_dueDtCls, ed_borrAmt, ed_borrRamt, acb_borrAcctCd, ica_borrSlipDt, ed_certfNo
  // , img_borrClntNo
  , ed_planRpayStDt //상환예정일자
  , ed_planRpayEndDt
  // , img_planRpayStDt
  // , img_planRpayEndDt
  ]);
};

// 조회 : 데이터를 조회한다.
scwin.f_Retrieve = async function () {
  $c.gus.cfDisableBtn($p, [btn_bUpdate, btn_bDelete, btn_bSave, btn_bPrint]);
  ds_borr.removeAll();
  if (dma_condition.get("borrNo") == "" && dma_condition.get("borrClntNo") == "") {
    await $c.gus.cfAlertMsg($p, "거래처 또는 대출번호를 입력하세요");
    return;
  }
  $c.gus.cfDisableObjects($p, [ed_planRpayStDt //상환예정일자
  , ed_planRpayEndDt
  // , img_planRpayStDt
  // , img_planRpayEndDt
  ]);
  await $c.sbm.execute($p, sbm_retrieve);
};

// 수정 : 
scwin.f_Update = async function () {
  $c.gus.cfDisableBtn($p, [btn_bUpdate]);
  if (!(ds_borr.getCellData(0, "borrNo") == null || ds_borr.getCellData(0, "borrNo") == "")) {
    $c.gus.cfEnableObjects($p, [ed_planRpayStDt, ed_planRpayEndDt
    // , img_planRpayStDt
    // , img_planRpayEndDt
    ]);
    $c.gus.cfEnableBtnOnly($p, [btn_bSave]);
    $c.gus.cfDisableBtn($p, [btn_bUpdate, btn_bDelete, btn_bPrint]);
  } else {
    await $c.gus.cfAlertMsg($p, "수정할 자료가 없습니다");
    return false;
  }
};

// 저장 : 조회된 데이터를 저장요청한다.
scwin.f_Save = async function () {
  if (ds_borr.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, "조회후 저장가능합니다.");
    return;
  } else if (ed_planRpayStDt.getValue() == "" || ed_planRpayEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "상환예정일자를 입력하세요.");
    return;
  } else if (ed_planRpayStDt.getValue() != "" && ed_planRpayEndDt.getValue() != "") {
    // if (!scwin.f_DifferBetweenDate2(ed_planRpayStDt.Text, ed_planRpayEndDt.Text)) {
    //     await $c.gus.cfAlertMsg("시작일자가 종료일자 이전이어야 합니다.");                                   
    //     return;
    // }   

    if (WebSquare.date.dateDiff(ed_planRpayStDt.getValue(), ed_planRpayEndDt.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, "시작일자가 종료일자 이전이어야 합니다.");
      return;
    }
    if (!scwin.f_DifferBetweenDate(ed_planRpayStDt.getValue(), ed_planRpayEndDt.getValue())) {
      await $c.gus.cfAlertMsg($p, "최대 입력기간은 20일입니다.");
      return;
    }
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      // ds_borr.UserStatus(1) = 3;
      ds_borr.modifyRowStatus(0, "U");
      ds_borr.setCellData(0, "planRpayStDt", ed_planRpayStDt.getValue());
      ds_borr.setCellData(0, "planRpayEndDt", ed_planRpayEndDt.getValue());
      $c.sbm.execute($p, sbm_saveBorr);
    }
  }
};

// 삭제 : 조회된 데이터를 삭제요청한다.
scwin.f_Delete = async function () {
  if (ds_borr.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, "조회후 삭제가능합니다.");
    return;
  } else {
    if ((await $c.win.confirm($p, MSG_CM_CRM_004)) == true) {
      // ds_borr.UserStatus(1) = 2;
      ds_borr.modifyRowStatus(0, "D");
      $c.sbm.execute($p, sbm_saveBorr);
    }
  }
};
scwin.f_DifferBetweenDate = function (sDateStr, eDateStr, dateFormat, row) {
  if ($c.date.diffDate($p, sDateStr, eDateStr) > 19) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->거래처 , 2:검색->대출번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  var rtnList = null;
  var sCmdName = "";
  var name;
  code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 조회조건 대출거래처  PopUp 호출
    case '1':
      sCmdName = "retrieveClntList2";
      var param = ",,,025";
      ed_srchEmpNo.setValue("");
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null); // 대출거래처
      break;
    // 대출번호 PopUp 호출
    case '2':
      sCmdName = "retrieveBorrNoInfo";
      rtnList = udc_BorrNo.cfCommonPopUp(scwin.udc_BorrNo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null); // 대출번호
      break;
    case '3':
      sCmdName = "retrieveClntList2";
      var param = ",,,025";
      rtnList = udc_clntNo2.cfCommonPopUp(scwin.udc_clntNo2_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null); // 대출거래처
      break;
  }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  debugger;
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_srchEmpNo.setValue("");
      return;
    }
    ed_srchBorrClntNo.setValue(rtnList[0]); // 코드
    ed_srchClntNm.setValue(rtnList[1]); // 코드명
    ed_srchBorrClntNo.options.hidVal = rtnList[0]; // 코드
    ed_srchEmpNo.setValue(rtnList[4]); // 코드
  } else {
    ed_srchBorrClntNo.setValue(""); // 코드
    ed_srchClntNm.setValue(""); // 코드명
    ed_srchBorrClntNo.options.hidVal = ""; // 코드
    ed_srchEmpNo.setValue(""); // 코드
  }
};
scwin.udc_BorrNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchBorrNo.setValue(rtnList[0]); // 코드
  } else {
    ed_srchBorrNo.setValue(""); // 코드
  }
};
scwin.udc_clntNo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_borrClntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_borrClntNo.options.hidVal = rtnList[0]; // 코드
    ed_empNo.setValue(rtnList[4]); // 코드
  } else {
    ed_borrClntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_borrClntNo.options.hidVal = ""; // 코드
    ed_empNo.setValue(""); // 코드
  }
};

// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      if (!(orgObjNm == null)) orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      if (!(orgObjNm == null)) orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
scwin.f_CheckBankBookPopUp = function (orgObjCd, orgObjNm) {
  if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
    orgObjNm.setValue("");
  }
  if (orgObjCd.getValue().trim() != "") {
    // scwin.f_BankBookPopUp("T");
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
  }
};
scwin.f_Print = async function () {
  if (ds_borr.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, "조회 후 출력 가능합니다.");
    return;
  }
  wfm_ozReport.getWindow().mf_scwin.onpageload();
  let data = {
    reportName: "/ac/fm/fundemployenterprise/fundemployent/fm_204_01_04p.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      borrNo: ds_borr.getCellData(0, "borrNo")
    },
    viewerParam: {
      //useprogressbar : false, // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
scwin.btn_bUpdate_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_bSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_bDelete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_bPrint_onclick = function (e) {
  scwin.f_Print();
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_BorrNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_srchBorrNo, null, 'F');
};
scwin.udc_clntNo2_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_borrClntNo, ed_clntNm, 'F');
};
scwin.udc_clntNo2_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_borrClntNo, ed_clntNm, '1');
};
scwin.sbm_saveBorr_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (ds_borr.getTotalRow() == 0) {
      ed_borrClntNo.setValue("");
      ed_clntNm.setValue("");
      ed_empNo.setValue("");
      ed_borrDt.setValue("");
      acb_dueDtCls.setValue("");
      ica_borrSlipDt.setValue("");
      acb_borrKndCd.setValue("");
      ed_borrAmt.setValue("");
      ed_borrRamt.setValue("");
      ed_borrSlipNo.setValue("");
      acb_borrAcctCd.setValue("");
      ed_certfNo.setValue("");
      ed_borrNo.setValue("");
      ed_planRpayStDt.setValue("");
      ed_planRpayEndDt.setValue("");
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      ed_borrClntNo.setValue(ds_borr.getCellData(0, "borrClntNo"));
      ed_clntNm.setValue(ds_borr.getCellData(0, "clntNm"));
      ed_empNo.setValue(ds_borr.getCellData(0, "empNo"));
      ed_borrDt.setValue(ds_borr.getCellData(0, "borrDt"));
      acb_dueDtCls.setValue(ds_borr.getCellData(0, "dueDtCls"));
      ica_borrSlipDt.setValue(ds_borr.getCellData(0, "borrSlipDt"));
      acb_borrKndCd.setValue(ds_borr.getCellData(0, "borrKndCd"));
      ed_borrAmt.setValue(ds_borr.getCellData(0, "borrAmt"));
      ed_borrRamt.setValue(ds_borr.getCellData(0, "borrRamt"));
      ed_borrSlipNo.setValue(ds_borr.getCellData(0, "borrSlipNo"));
      acb_borrAcctCd.setValue(ds_borr.getCellData(0, "borrAcctCd"));
      ed_certfNo.setValue(ds_borr.getCellData(0, "certfNo"));
      ed_borrNo.setValue(ds_borr.getCellData(0, "borrNo"));
      ed_planRpayStDt.setValue(ds_borr.getCellData(0, "planRpayStDt"));
      ed_planRpayEndDt.setValue(ds_borr.getCellData(0, "planRpayEndDt"));
      $c.gus.cfEnableBtnOnly($p, [btn_bUpdate]);
      if (ds_borr.getCellData(0, "planRpayStDt") == "" && ds_borr.getCellData(0, "planRpayEndDt") == "") {
        $c.gus.cfDisableBtn($p, [btn_bDelete, btn_bPrint]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_bDelete, btn_bPrint]);
      }
    }
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntList2popup',style:'',selectID:'retrieveClntList2',id:'udc_clntNo',nameId:'ed_srchClntNm',codeId:'ed_srchBorrClntNo',btnId:'btn_clntNo',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9',refDataCollection:'dma_condition',code:'borrClntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_srchEmpNo',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',selectID:'retrieveBorrNoInfo',id:'udc_BorrNo',nameId:'',codeId:'ed_srchBorrNo',btnId:'btn_srchBorrNo',maxlengthCode:'6',objTypeCode:'Data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_BorrNo_onclickEvent',refDataCollection:'dma_condition',code:'borrNo',hideName:'true',objTypeName:'key',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntList2popup',style:'',selectID:'retrieveClntList2',id:'udc_clntNo2',nameId:'ed_clntNm',codeId:'ed_borrClntNo',btnId:'btn_clntNo2',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_clntNo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo2_onblurCodeEvent'}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_empNo',class:'',ref:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_borrKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'',chooseOptionLabel:' ',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:' '}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주택대출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생활대출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_borrAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'label',chooseOptionLabel:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:' '}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사무직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기능직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_borrDt',style:'',ref:'',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_borrAmt',class:'tar',ref:'',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_certfNo',style:'width: 150px;',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_dueDtCls',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'label',chooseOptionLabel:' '},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:' '}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'60개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'72개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'72'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출잔액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrRamt',style:'width: 150px;',ref:'',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_borrNo',style:'width: 150px;',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_borrSlipDt',style:'',ref:'',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_borrSlipNo',style:'width: 150px;',ref:'',disabled:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조기상환일',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상환예정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_planRpayStDt',edToId:'ed_planRpayEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_bUpdate',style:'',type:'button','ev:onclick':'scwin.btn_bUpdate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bSave',style:'',type:'button','ev:onclick':'scwin.btn_bSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bDelete',style:'',type:'button','ev:onclick':'scwin.btn_bDelete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bPrint',style:'',type:'button','ev:onclick':'scwin.btn_bPrint_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]},{T:1,N:'xf:group',A:{class:'ozWrap mt16',id:'ozFrame ',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})