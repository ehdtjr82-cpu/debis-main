/*amd /AI/fm_301_02_04b.xml 52400 67376ea12b0696a5db916985e9a999715a01dff8c9063f72efdc35d9457dd245 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payDecideStsCd',name:'지급결정상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'조회시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'조회종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'요청부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'조회구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqBankCd',name:'요청은행코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addupDivsCd',name:'가산구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payCrcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지불방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'전표적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'지급등록기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFCrc',name:'외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecide',action:'/ac.fm.paymgnt.paymgnt.PayDeterminationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_condition","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_savePayDecide_submitdone','ev:submiterror':'scwin.sbm_savePayDecide_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.PREPARESTS = "00";
scwin.RESERVESTSLONG = "11";
scwin.RESERVESTS = "10";
scwin.SEIZURESTS = "15";
scwin.WAITSTS = "20";
scwin.COLLMONEYWAIT = "25";
scwin.CANCLESTS = "21";
scwin.DECIDESTS = "30";
scwin.DECISIONSTS = "40";
scwin.COMPLETE = "50";
scwin.APPROVE = "30";
scwin.bRESERVE = false;
scwin.bRESERVELONG = false;
scwin.bWAITSTS = false;
scwin.bCOLLMONEYWAIT = false;
scwin.bDECIDE = false;
scwin.bSEIZURE = false;
scwin.sAcctDeptCd = "";
scwin.sAppDeptNm = "";
scwin.sUserId = "";
scwin.sUserNm = "";
scwin.sEmpNo = "";
scwin.sEpId = "";
scwin.g_sCurrDate = "";
scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.privAdmin = "";
scwin.txtCoClsCd = "";
scwin.ACConstants_SUBSIDIARY_USER_HOME_CLS_CD = "SA";
scwin.ACConstants_CO_CD_DONGBU = "100";
scwin.ACConstants_CO_CLS_CD_DONGBU = "0";
scwin.onpageload = async function () {
  scwin.sAcctDeptCd = $c.ses.getAcctDeptCd();
  scwin.sAppDeptNm = $c.ses.getAcctDeptNm();
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserNm = $c.ses.getUserNm();
  scwin.sEmpNo = $c.ses.getEmpNo();
  scwin.sEpId = $c.ses.getEpId();
  scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vLoginCoCd = $c.ses.getCoCd() || "";
  scwin.vLoginCoClsCd = $c.ses.getCoClsCd() || "";
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd();
  scwin.privAdmin = $c.ses.getPrivAdmin();
  scwin.f_setCompanyInfo();
  acb_payStsCd.setValue("20");
  let codeOptions = [{
    grpCd: "FM115",
    compID: "acb_payStsCd"
  }, {
    grpCd: "FM018",
    compID: "acb_payMthdCd"
  }, {
    grpCd: "FM017",
    compID: "gr_master:payStsCd"
  }, {
    grpCd: "FM018",
    compID: "gr_master:payMthdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  udc_reqDt.setInitDate(scwin.g_sCurrDate.substring(0, 6) + "01", scwin.g_sCurrDate);
  $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong, acb_payMthdCd, btn_reserveCancel]);
};
scwin.f_setCompanyInfo = async function () {
  if (scwin.vUserHomeClsCd != scwin.ACConstants_SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = scwin.ACConstants_CO_CD_DONGBU;
    scwin.vLoginCoClsCd = scwin.ACConstants_CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo("T");
  if (scwin.privAdmin == "T" || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm]);
  }
};
scwin.f_Reserve = async function () {
  let i = 0;
  let cnt = 0;
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_049.replace("@", "자료"));
    return false;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_master]);
  if (chkValid) {
    for (i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "T") {
        cnt++;
        if (ds_master.getCellData(i, "reserRsn") == "" || ds_master.getCellData(i, "reserRsn") == null) {
          await $c.win.alert($p, "보류사유는 필수입력입니다.");
          return false;
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "보류할 자료가 존재하지않습니다");
      return false;
    }
    let confirmResult = await $c.win.confirm($p, "보류하시겠습니까?");
    if (confirmResult == true) {
      for (i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "T") {
          ds_master.setCellData(i, "payStsCd", scwin.RESERVESTS);
          ds_master.setCellData(i, "reqDt", scwin.g_sCurrDate);
          ds_master.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
          ds_master.setCellData(i, "reqEmpNo", scwin.sEmpNo);
        }
      }
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
      await $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
};
scwin.f_ReserveLong = async function () {
  let i = 0;
  let cnt = 0;
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_049.replace("@", "자료"));
    return false;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_master]);
  if (chkValid) {
    for (i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "T") {
        cnt++;
        if (ds_master.getCellData(i, "reserRsn") == "" || ds_master.getCellData(i, "reserRsn") == null) {
          await $c.win.alert($p, "보류사유는 필수입력입니다.");
          return false;
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "장기보류할 자료가 존재하지않습니다");
      return false;
    }
    let confirmResult = await $c.win.confirm($p, "장기보류하시겠습니까?");
    if (confirmResult == true) {
      for (i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "T") {
          ds_master.setCellData(i, "payStsCd", scwin.RESERVESTSLONG);
          ds_master.setCellData(i, "reqDt", scwin.g_sCurrDate);
          ds_master.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
          ds_master.setCellData(i, "reqEmpNo", scwin.sEmpNo);
        }
      }
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
      await $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
};
scwin.f_Cancel = async function () {
  let i = 0;
  let cnt = 0;
  if (ds_master.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, MSG_CM_ERR_001.replace("@", "자료"));
    return false;
  } else {
    let chkValid = await $c.gus.cfValidate($p, [gr_master]);
    if (chkValid) {
      for (i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getCellData(i, "selYn") != "F" && ds_master.getCellData(i, "selYn") == "T") {
          cnt++;
          if (ds_master.getCellData(i, "cnclRsn") == "" || ds_master.getCellData(i, "cnclRsn") == null) {
            await $c.win.alert($p, "해제사유는 필수입력입니다.");
            return false;
          }
        }
      }
      if (cnt <= 0) {
        await $c.win.alert($p, "해제할 자료가 존재하지않습니다");
        return false;
      }
      await scwin.f_RequestElectronicApprove();
    }
  }
};
scwin.f_openPopUp = async function (select_code, txtCodeId, txtNameId, sFlag) {
  let code = $c.gus.cfGetValue($p, txtCodeId);
  let name = $c.gus.cfGetValue($p, txtNameId);
  let sCmdName = "";
  let param = "";
  if (select_code == "1" || select_code == "2") {
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    case "1":
      sCmdName = "retrieveAcctDeptCdInfo6";
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_reqAcctDept.ilCommonPopUp(scwin.callbackPopUp1, code, name, sFlag, null, null, null, null, param, null, null, null, null);
      break;
    case "2":
      sCmdName = "retrieveClntList";
      param = ",,," + ed_coCd.getValue();
      udc_clnt.ilCommonPopUp(scwin.callbackPopUp2, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case "3":
      sCmdName = "retrieveCrnInfo";
      udc_payCrn.ilCommonPopUp(scwin.callbackPopUp3, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
  }
};
scwin.callbackPopUp1 = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_reqAcctDeptCd.setValue(rtnList[0]);
    txt_reqAcctDeptNm.setValue(rtnList[1]);
    scwin.hidVal_reqAcctDeptCd = rtnList[0];
  } else {
    ed_reqAcctDeptCd.setValue("");
    txt_reqAcctDeptNm.setValue("");
    scwin.hidVal_reqAcctDeptCd = "";
  }
};
scwin.callbackPopUp2 = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    txt_clntNm.setValue(rtnList[1]);
    scwin.hidVal_clntNo = rtnList[0];
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
    scwin.hidVal_clntNo = "";
  }
};
scwin.callbackPopUp3 = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_payCrn.setValue(rtnList[0]);
    txt_payCrn.setValue(rtnList[1]);
    scwin.hidVal_payCrn = rtnList[0];
  } else {
    ed_payCrn.setValue("");
    txt_payCrn.setValue("");
    scwin.hidVal_payCrn = "";
  }
};
scwin.hidVal_reqAcctDeptCd = "";
scwin.hidVal_clntNo = "";
scwin.hidVal_payCrn = "";
scwin.hidVal_coCd = "";
scwin.f_CheckPopUp = async function (orgObjCdId, orgObjNmId, select_code) {
  let codeVal = $c.gus.cfGetValue($p, orgObjCdId);
  let hidVal = "";
  if (orgObjCdId == "ed_clntNo") hidVal = scwin.hidVal_clntNo;else if (orgObjCdId == "ed_reqAcctDeptCd") hidVal = scwin.hidVal_reqAcctDeptCd;else if (orgObjCdId == "ed_payCrn") hidVal = scwin.hidVal_payCrn;else if (orgObjCdId == "ed_coCd") hidVal = scwin.hidVal_coCd;
  if (codeVal != hidVal) {
    $c.gus.cfSetValue($p, orgObjNmId, "");
  }
  if (codeVal.trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCdId, orgObjNmId, "T");
  } else {
    $c.gus.cfSetValue($p, orgObjNmId, "");
    $c.gus.cfSetValue($p, orgObjCdId, "");
    if (orgObjCdId == "ed_clntNo") scwin.hidVal_clntNo = "";else if (orgObjCdId == "ed_reqAcctDeptCd") scwin.hidVal_reqAcctDeptCd = "";else if (orgObjCdId == "ed_payCrn") scwin.hidVal_payCrn = "";else if (orgObjCdId == "ed_coCd") scwin.hidVal_coCd = "";
  }
};
scwin.f_openPopUpNm = async function (select_code, txtCodeId, txtNameId, sFlag) {
  let code = "";
  let name = $c.gus.cfGetValue($p, txtNameId);
  let sCmdName = "";
  let param = "";
  if (select_code == "1" || select_code == "2") {
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    case "1":
      sCmdName = "retrieveAcctDeptCdInfo6";
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_reqAcctDept.ilCommonPopUp(scwin.callbackPopUpNm1, code, name, sFlag, null, null, null, null, param, null, null, null, null);
      break;
    case "2":
      sCmdName = "retrieveClntList";
      param = ",,," + ed_coCd.getValue();
      udc_clnt.ilCommonPopUp(scwin.callbackPopUpNm2, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case "3":
      sCmdName = "retrieveCrnInfo";
      udc_payCrn.ilCommonPopUp(scwin.callbackPopUpNm3, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
  }
};
scwin.callbackPopUpNm1 = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_reqAcctDeptCd.setValue("");
      txt_reqAcctDeptNm.setValue("");
      scwin.hidVal_reqAcctDeptCd = "";
      return;
    }
    ed_reqAcctDeptCd.setValue(rtnList[0]);
    txt_reqAcctDeptNm.setValue(rtnList[1]);
    scwin.hidVal_reqAcctDeptCd = rtnList[0];
  } else {
    ed_reqAcctDeptCd.setValue("");
    txt_reqAcctDeptNm.setValue("");
    scwin.hidVal_reqAcctDeptCd = "";
  }
};
scwin.callbackPopUpNm2 = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_clntNo.setValue("");
      txt_clntNm.setValue("");
      scwin.hidVal_clntNo = "";
      return;
    }
    ed_clntNo.setValue(rtnList[0]);
    txt_clntNm.setValue(rtnList[1]);
    scwin.hidVal_clntNo = rtnList[0];
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
    scwin.hidVal_clntNo = "";
  }
};
scwin.callbackPopUpNm3 = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_payCrn.setValue("");
      txt_payCrn.setValue("");
      scwin.hidVal_payCrn = "";
      return;
    }
    ed_payCrn.setValue(rtnList[0]);
    txt_payCrn.setValue(rtnList[1]);
    scwin.hidVal_payCrn = rtnList[0];
  } else {
    ed_payCrn.setValue("");
    txt_payCrn.setValue("");
    scwin.hidVal_payCrn = "";
  }
};
scwin.f_Retrieve = async function () {
  let chk1 = await $c.gus.cfValidate($p, [ed_coCd, ica_reqStartDt]);
  let chk2 = await $c.gus.cfValidate($p, [ica_reqEndDt]);
  if (chk1 == true && chk2 == true) {
    ds_condition.set("scClsCd", "1");
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_InitObjects = async function () {
  $c.gus.cfInitObjects($p, ds_condition, null);
  udc_reqDt.setInitDate(scwin.g_sCurrDate.substring(0, 6) + "01", scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};
scwin.f_GridToExcel = async function (gr_groupCode, gridName) {
  if (ds_master.getRowCount() <= 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  $c.data.downloadGridViewExcel($p, gr_groupCode, {
    "fileName": gridName + ".xlsx",
    "sheetName": gridName
  });
};
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  udc_co.ilCommonPopUp(scwin.callbackCompanyInfo, ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.callbackCompanyInfo = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.hidVal_coCd != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]);
    txt_coNm.setValue(rtnList[5]);
    scwin.hidVal_coCd = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    scwin.hidVal_coCd = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > scwin.ACConstants_CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.f_initObj = async function () {
  $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, txt_reqAcctDeptNm]);
  $c.gus.cfInitObjects($p, [ed_clntNo, txt_clntNm]);
};
scwin.f_getSSOInfo = async function () {
  let EXIST_YN = 0;
  let epUserId = "";
  try {
    EXIST_YN = SSOCheck.IsExist("GROUP");
  } catch (exception) {
    EXIST_YN = 0;
  }
  if (EXIST_YN == 1) {
    scwin.SSO_LOGIN_YN = true;
    epUserId = SSOCheck.GetUID("GROUP");
  }
  return epUserId;
};
scwin.f_RequestElectronicApprove = async function () {
  let vReqApprvDocKndCd = "023";
  let vReqUserId = scwin.sUserId;
  let vEpUsrId = scwin.sEpId;
  let toDay = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  let fineInfo = scwin.f_getFineItemList();
  if (vEpUsrId == "") {
    await $c.gus.cfAlertMsg($p, " EP사용자 ID정보가 없습니다.");
    return false;
  }
  let confirmResult = await $c.win.confirm($p, "해제요청 전자결재 요청하시겠습니까?");
  if (confirmResult != true) {
    return;
  }
  let vReqApprvTitle = "";
  let styleTb = 'class=tb';
  let vApprvDtlInfo = '\x3Chead>';
  vApprvDtlInfo += '<style type=text/css>';
  vApprvDtlInfo += '	.tb { ';
  vApprvDtlInfo += '		border-top:solid 1px #000000;';
  vApprvDtlInfo += '		border-right:solid 1px #000000;';
  vApprvDtlInfo += '		border-left:solid 1px #000000; ';
  vApprvDtlInfo += '		border-bottom:solid 1px #000000;';
  vApprvDtlInfo += '	}';
  vApprvDtlInfo += '</style>';
  vApprvDtlInfo += '\x3C/head>';
  vApprvDtlInfo += '\x3Cbody align=center>';
  vApprvDtlInfo += '<table width=1000 cellspacing=0 cellpadding=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td height=35 align=center ' + styleTb + '>제 목</td>';
  vApprvDtlInfo += '		<td ' + styleTb + '><b>보류해제 승인요청 -  (' + toDay + ')</b></td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td colspan=2 ' + styleTb + '>';
  vApprvDtlInfo += '			<table width=1200 border=0>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td><font face=굴림><b>1. 보류해제상세내역</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 align=right>';
  vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '							<col width=30 align=left></col>';
  vApprvDtlInfo += '							<col width=60 align=left></col>';
  vApprvDtlInfo += '							<col width=75 align=left></col>';
  vApprvDtlInfo += '							<col width=75 align=right></col>';
  vApprvDtlInfo += '							<col width=75 align=right></col>';
  vApprvDtlInfo += '							<col width=100 align=right></col>';
  vApprvDtlInfo += '							<col width=80 align=right></col>';
  vApprvDtlInfo += '							<col width=90 align=right></col>';
  vApprvDtlInfo += '							<col width=75 align=right></col>';
  vApprvDtlInfo += '							<col width=75 align=right></col>';
  vApprvDtlInfo += '							<col width=75 align=right></col>';
  vApprvDtlInfo += '							<col width=200 align=right></col>';
  vApprvDtlInfo += '							<col width=200 align=right></col>';
  vApprvDtlInfo += '							<tr>';
  vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>선택</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>상태</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>지불방법</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>요청일자</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>요청번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처명</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>요청금액</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>귀속부서</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>전표번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>사업자번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>전표적요</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>해제사유</b></font></td>';
  vApprvDtlInfo += '							</tr>';
  let reserCount = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    vApprvDtlInfo += '							<tr>';
    let selYn = "";
    if (ds_master.getCellData(i, "selYn") == "T") {
      selYn = "V";
    } else if (ds_master.getCellData(i, "selYn") == "F") {
      selYn = "";
    }
    let payStsCd = "";
    if (ds_master.getCellData(i, "payStsCd") == "10") {
      payStsCd = "보류";
    } else if (ds_master.getCellData(i, "payStsCd") == "11") {
      payStsCd = "장기보류";
    } else if (ds_master.getCellData(i, "payStsCd") == "20") {
      payStsCd = "대기";
    }
    let payMthdCd = "";
    if (ds_master.getCellData(i, "payMthdCd") == "20") {
      payMthdCd = "경비이체";
    } else if (ds_master.getCellData(i, "payMthdCd") == "30") {
      payMthdCd = "전자결제-현금";
    } else if (ds_master.getCellData(i, "payMthdCd") == "70") {
      payMthdCd = "급여이체";
    } else if (ds_master.getCellData(i, "payMthdCd") == "90") {
      payMthdCd = "자동이체";
    } else if (ds_master.getCellData(i, "payMthdCd") == "95") {
      payMthdCd = "지로납부";
    }
    let dcsnDt = ds_master.getCellData(i, "dcsnDt");
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>&nbsp;' + selYn + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + payStsCd + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + payMthdCd + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + dcsnDt.substring(0, 4) + '/' + dcsnDt.substring(4, 6) + '/' + dcsnDt.substring(6, 8) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>&nbsp;' + ds_master.getCellData(i, "apprvReqNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>' + ds_master.getCellData(i, "clntNm") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=right> <font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(ds_master.getCellData(i, "reqAmt"))) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>' + ds_master.getCellData(i, "outbrAcctDeptNm") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_master.getCellData(i, "outbrSlipNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_master.getCellData(i, "clntNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_master.getCellData(i, "crn") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>' + ds_master.getCellData(i, "outbrSummary") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>&nbsp;' + ds_master.getCellData(i, "cnclRsn") + '</font></td>';
    vApprvDtlInfo += '							</tr>';
    reserCount++;
  }
  vApprvDtlInfo += '						</table>';
  vApprvDtlInfo += '					</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td align=right colspan=2><font size=3 face=굴림><b>이상 ' + reserCount + '건</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '			</table>';
  vApprvDtlInfo += '		</td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '</table>';
  vApprvDtlInfo += '\x3C/body>';
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "selYn") != "F" && ds_master.getCellData(i, "selYn") == "T") {
      if (scwin.bRESERVE == true || scwin.bRESERVELONG == true) {
        ds_master.setCellData(i, "payStsCd", scwin.CANCLESTS);
      }
      ds_master.setCellData(i, "reqDt", scwin.g_sCurrDate);
      ds_master.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
      ds_master.setCellData(i, "reqEmpNo", scwin.sEmpNo);
    }
  }
  scwin.frmReqApprove_apprvDocKndCd = vReqApprvDocKndCd;
  scwin.frmReqApprove_reqUserId = vReqUserId;
  scwin.frmReqApprove_epUserId = vEpUsrId;
  scwin.frmReqApprove_apprvTitle = vReqApprvTitle;
  scwin.frmReqApprove_apprvDtlInfo = vApprvDtlInfo;
  scwin.frmReqApprove_ReserCancleList = fineInfo.itemList;
  scwin.frmReqApprove_bmodifyattach = "Y";
  sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
  await $c.sbm.execute($p, sbm_savePayDecide);
};
scwin.f_getFineItemList = async function () {
  let oResult = {};
  oResult.itemList = "";
  oResult.itemSize = 0;
  oResult.itemTotal = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "selYn") == "T") {
      if (oResult.itemList == "") {
        oResult.itemList += ds_master.getCellData(i, "payNo");
      } else {
        oResult.itemList += "," + ds_master.getCellData(i, "payNo");
      }
      oResult.itemSize += 1;
      oResult.itemTotal += 1;
    }
  }
  return oResult;
};
scwin.f_submitReqApprove = async function () {
  // TODO: 전자결재 form submit 처리 - 서버사이드 form submit을 WebSquare submission으로 대체 필요
  let param = {
    apprvDocKndCd: scwin.frmReqApprove_apprvDocKndCd,
    reqUserId: scwin.frmReqApprove_reqUserId,
    epUserId: scwin.frmReqApprove_epUserId,
    apprvTitle: scwin.frmReqApprove_apprvTitle,
    apprvDtlInfo: scwin.frmReqApprove_apprvDtlInfo,
    ReserCancleList: scwin.frmReqApprove_ReserCancleList,
    bmodifyattach: scwin.frmReqApprove_bmodifyattach
  };
  await $c.win.openPopup($p, "/ac/fm/paymgnt/RequestReserCancleApproveCMD.do", {
    width: 800,
    height: 600,
    modal: true,
    data: param
  });
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_reserve_onclick = async function (e) {
  scwin.f_Reserve();
};
scwin.btn_reserveLong_onclick = async function (e) {
  scwin.f_ReserveLong();
};
scwin.btn_reserveCancel_onclick = async function (e) {
  scwin.f_Cancel();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong, btn_reserveCancel]);
  } else {
    if (acb_payStsCd.getValue() == scwin.RESERVESTS || acb_payStsCd.getValue() == scwin.RESERVESTSLONG) {
      scwin.bRESERVE = true;
      scwin.bRESERVELONG = true;
      scwin.bSEIZURE = false;
      scwin.bWAITSTS = false;
      scwin.bCOLLMONEYWAIT = false;
      scwin.bDECIDE = false;
      $c.gus.cfEnableObjects($p, [btn_reserveCancel]);
      $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong]);
      gr_master.setColumnVisible("reserRsn", false);
      gr_master.setColumnVisible("cnclRsn", true);
    } else if (acb_payStsCd.getValue() == scwin.WAITSTS) {
      scwin.bRESERVE = false;
      scwin.bRESERVELONG = false;
      scwin.bWAITSTS = true;
      scwin.bCOLLMONEYWAIT = true;
      scwin.bSEIZURE = false;
      scwin.bDECIDE = false;
      $c.gus.cfEnableObjects($p, [btn_reserve, btn_reserveLong]);
      $c.gus.cfDisableObjects($p, [btn_reserveCancel]);
      gr_master.setColumnVisible("reserRsn", true);
      gr_master.setColumnVisible("cnclRsn", false);
    } else {
      $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong, btn_reserveCancel]);
      gr_master.setColumnVisible("reserRsn", false);
      gr_master.setColumnVisible("cnclRsn", false);
    }
  }
  $c.gus.cfShowTotalRows($p, spa_totalRow, ds_master.getRowCount());
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_savePayDecide_submitdone = async function (e) {
  let cancleCheck = 0;
  let reserveCheck = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "selYn") != "F" && ds_master.getCellData(i, "selYn") == "T") {
      if (ds_master.getCellData(i, "payStsCd") == scwin.CANCLESTS) {
        cancleCheck++;
      } else {
        reserveCheck++;
      }
    }
  }
  if (cancleCheck > 0) {
    scwin.f_submitReqApprove();
  } else if (reserveCheck > 0) {
    await $c.win.alert($p, MSG_CM_INF_001);
  }
  scwin.f_Retrieve();
};
scwin.sbm_savePayDecide_submiterror = async function (e) {
  await $c.win.alert($p, e.errorMsg);
  scwin.f_Retrieve();
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "outbrSlipNo" && rowIndex >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_master.getCellData(rowIndex, "outbrSlipNo"));
  }
  if (columnId == "reserRsn") {
    if (ds_master.getCellData(rowIndex, "selYn") == "T") {
      gr_master.setCellReadOnly(rowIndex, "reserRsn", false);
      gr_master.setCellReadOnly(rowIndex, "cnclRsn", true);
    } else {
      gr_master.setCellReadOnly(rowIndex, "reserRsn", true);
      gr_master.setCellReadOnly(rowIndex, "cnclRsn", true);
    }
  } else if (columnId == "cnclRsn") {
    if (ds_master.getCellData(rowIndex, "selYn") == "T") {
      gr_master.setCellReadOnly(rowIndex, "reserRsn", true);
      gr_master.setCellReadOnly(rowIndex, "cnclRsn", false);
    } else {
      gr_master.setCellReadOnly(rowIndex, "reserRsn", true);
      gr_master.setCellReadOnly(rowIndex, "cnclRsn", true);
    }
  }
  if (columnId == "selYn") {
    if (ds_master.getCellData(rowIndex, "selYn") == "F") {
      ds_master.setCellData(rowIndex, "reserRsn", "");
      ds_master.setCellData(rowIndex, "cnclRsn", "");
    }
  }
};
scwin.udc_clnt_onblurCode = function () {
  scwin.f_CheckPopUp("ed_clntNo", "txt_clntNm", "2");
};
scwin.udc_reqAcctDept_onblurCode = function () {
  scwin.f_CheckPopUp("ed_reqAcctDeptCd", "txt_reqAcctDeptNm", "1");
};
scwin.udc_payCrn_onblurCode = function () {
  scwin.f_CheckPopUp("ed_payCrn", "txt_payCrn", "3");
};
scwin.udc_co_onblurCode = function () {
  txt_coNm.setValue("");
  scwin.f_PopUpCompanyInfo("T");
};
scwin.frmReqApprove_apprvDocKndCd = "";
scwin.frmReqApprove_reqUserId = "";
scwin.frmReqApprove_epUserId = "";
scwin.frmReqApprove_apprvTitle = "";
scwin.frmReqApprove_apprvDtlInfo = "";
scwin.frmReqApprove_ReserCancleList = "";
scwin.frmReqApprove_bmodifyattach = "";
scwin.SSO_LOGIN_YN = false;
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_coCd',validTitle:'',nameId:'txt_coNm',id:'udc_co',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_payStsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_condition.payStsCd',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급방법',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_payMthdCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_condition.payMthdCd',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_reqDt',edFromId:'ica_reqStartDt',edToId:'ica_reqEndDt',refEdDt:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_outbrSlipNo',style:'width: 100px;',ref:'data:ds_condition.outbrSlipNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_apprvReqNo',style:'width: 100px;',ref:'data:ds_condition.apprvReqNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',selectID:'',id:'udc_clnt',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reqAcctDeptCd',nameId:'txt_reqAcctDeptNm',popupID:'',selectID:'',id:'udc_reqAcctDept',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_payCrn',nameId:'txt_payCrn',popupID:'',selectID:'',id:'udc_payCrn',style:'',validTitle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'text',style:'',value:'지불방법',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'요청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',style:'',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reserRsn',inputType:'text',style:'',value:'보류사유',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclRsn',inputType:'text',style:'',value:'해제사유',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outbrAcctNm',value:'계정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrAcctDeptNm',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSlipNo',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSummary',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqEmpNo',value:'요청사번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqAcctDeptCd',value:'요청부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqDt',value:'요청일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclAdmitDt',value:'해제일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclAdmitEmpNo',value:'해제사번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payNo',value:'지급번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interPayDt',value:'지급등록</br>기준일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payBankAcntNo',value:'지급계좌',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'draftCheckNo',value:'어음수표번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payCrcCd',value:'통화코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payExchRt',value:'환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payAmtFCrc',value:'외화',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'coClsCd',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reserRsn',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclRsn',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outbrAcctNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSlipNo',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqEmpNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclAdmitDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclAdmitEmpNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interPayDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'draftCheckNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payCrcCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payExchRt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payAmtFCrc',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'sum(\'reqAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot',id:'',label:'보류/장기보류 버튼은 대기로 조회 시, 해체요청 버튼은 보류나 장기보류로 조회시에 활성화 됩니다. ',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_reserve','ev:onclick':'scwin.btn_reserve_onclick',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보류'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reserveLong','ev:onclick':'scwin.btn_reserveLong_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기보류'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reserveCancel','ev:onclick':'scwin.btn_reserveCancel_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해제요청'}]}]}]}]}]}]}]}]})