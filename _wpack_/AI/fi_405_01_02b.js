/*amd /AI/fi_405_01_02b.xml 70131 c76a2f14029d4123b5ddce3183de28e9614d6db0068403a24b8c10eda95fb79c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrStDt',name:'발생시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrEndDt',name:'발생종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'state',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'급여구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workStsCd',name:'상태코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annualYn',name:'연차여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayYn',name:'휴일여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mealTimeYn',name:'중식여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'근무시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'근무시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'근무종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'근무종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reworkStDt',name:'재근무시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reworkStHh',name:'재근무시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reworkEndDt',name:'재근무종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reworkEndHh',name:'재근무종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltWorkHh',name:'근무시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdWorkHh',name:'연장시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtWorkHh',name:'야간시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWorkHh',name:'휴일시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'daySalaryAmt',name:'일급여액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'foodYn',name:'식대여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAlowAmt',name:'기타소득',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcDedtAmt',name:'기타공제',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payGbn',name:'급여구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'월정액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dayPayAmt',name:'일당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'timePayAmt',name:'시급액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'standFoodAmt',name:'기준식대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'foodAmt',name:'식대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'extdScRt',name:'연장할증률',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offDayScRt',name:'휴일할증률',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ngtDayScRt',name:'야간할증률',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사원번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.tempjob.cmd.RetrieveDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.tempjob.cmd.SaveDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ac.fi.taxbiz.tempjob.cmd.CancelDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'scwin.sbm_cancel_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.taxbiz.tempjob.cmd.DeleteDayLaborersAttendanceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gv_CurDate = "";
scwin.gv_FirstDate = "";
scwin.sChk = 0;
scwin.nNgtWorkStHh = 2200;
scwin.nNgtWorkEndHh = 600;
scwin.nStandardWorkHh = 8;
scwin.ValidChkFlag = false;
scwin.ValidMoveFlag = false;
scwin.vEmpNo = "";
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.vAcctDeptCd = "";
scwin.vAcctDeptNm = "";
scwin.SUBSIDIARY_USER_HOME_CLS_CD = "";
scwin.CO_CD_DONGBU = "";
scwin.CO_CLS_CD_DONGBU = "";
scwin.privAdmin = "";
scwin.onpageload = async function () {
  scwin.gv_CurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.gv_FirstDate = scwin.gv_CurDate.substring(0, 6) + "01";
  scwin.vEmpNo = $c.ses.getEmpNo();
  scwin.vCoCd = $c.ses.getCoCd() || "";
  scwin.vCoClsCd = $c.ses.getCoClsCd() || "";
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd() || "";
  scwin.vAcctDeptCd = $c.ses.getAcctDeptCd() || "";
  scwin.vAcctDeptNm = $c.ses.getAcctDeptNm() || "";
  scwin.SUBSIDIARY_USER_HOME_CLS_CD = $c.ses.getConstant("SUBSIDIARY_USER_HOME_CLS_CD") || "SA";
  scwin.CO_CD_DONGBU = $c.ses.getConstant("CO_CD_DONGBU") || "";
  scwin.CO_CLS_CD_DONGBU = $c.ses.getConstant("CO_CLS_CD_DONGBU") || "";
  scwin.privAdmin = $c.ses.getPrivAdmin() || "F";
  let codeOptions = [{
    grpCd: "FI405",
    compID: "em_workStsCd,gr_master:workStsCd"
  }, {
    grpCd: "FI115",
    compID: "em_retrieve_gubun,gr_master:payGbn"
  }, {
    grpCd: "OP160",
    compID: "gr_master:occptypeCd"
  }, {
    grpCd: "OP161",
    compID: "gr_master:dtlOccptypeCd"
  }, {
    grpCd: "OP268",
    compID: "gr_master:occpgrdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  scwin.f_FieldClear();
  if (scwin.vAcctDeptCd == "00006" || scwin.vAcctDeptCd == "00009" || scwin.vAcctDeptCd == "01387") {
    $c.gus.cfEnableObjects($p, [ed_acctDeptCd, txt_acctDeptNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_acctDeptCd, txt_acctDeptNm]);
  }
  scwin.f_setCompanyInfo();
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Cancel, btn_Del, btn_Mod]);
};
scwin.f_FieldClear = async function () {
  udc_outbr.setInitDate(scwin.gv_CurDate, scwin.gv_CurDate);
  udc_acctDept.setCode(scwin.vAcctDeptCd);
  udc_acctDept.setName(scwin.vAcctDeptNm);
  chk_lowerDeptIncluYn.setValue("");
  udc_staff.setCode("");
  udc_staff.setName("");
  em_retrieve_gubun.setValue("");
  em_workStsCd.setValue("");
};
scwin.btn_FieldClear_onclick = async function (e) {
  scwin.f_FieldClear();
};
scwin.f_Retrieve = async function () {
  if (chk_lowerDeptIncluYn.getValue() != "") {
    ds_search.set("lowerDeptIncluYn", "1");
  } else {
    ds_search.set("lowerDeptIncluYn", "0");
  }
  let chk = await $c.gus.cfValidate($p, [searchCondition]);
  if (!chk) {
    return;
  }
  ds_search.set("acctDeptCd", udc_acctDept.getCode());
  ds_search.set("outbrStDt", udc_outbr.getFromDate());
  ds_search.set("outbrEndDt", udc_outbr.getToDate());
  ds_search.set("gubun", em_retrieve_gubun.getValue());
  ds_search.set("staffNo", udc_staff.getCode());
  ds_search.set("workStsCd", em_workStsCd.getValue());
  await $c.sbm.execute($p, sbm_search);
};
scwin.btn_Retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.f_Save = async function () {
  let nRow = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "1") {
      nRow++;
    }
  }
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if (!scwin.f_checkVacationDate()) {
    return;
  }
  let confirmResult = await $c.win.confirm($p, "확정 처리하시겠습니까?");
  if (confirmResult) {
    ds_out.removeAll();
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_Cancel = async function () {
  let nRow = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "1") {
      nRow++;
    }
  }
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if (!scwin.f_checkVacationDate()) {
    return;
  }
  let confirmResult = await $c.win.confirm($p, "미확정 처리하시겠습니까?");
  if (confirmResult) {
    ds_out.removeAll();
    await $c.sbm.execute($p, sbm_cancel);
  }
};
scwin.f_Delete = async function () {
  let nRow = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "1") {
      nRow++;
    }
  }
  if (nRow == 0) {
    await $c.win.alert($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (confirmResult) {
    ds_out.removeAll();
    await $c.sbm.execute($p, sbm_delete);
  }
};
scwin.f_gridValidate = async function () {
  let obj = ds_master;
  for (let i = 0; i < obj.getRowCount(); i++) {
    if (obj.getCellData(i, "reWorkStDt") != "" || obj.getCellData(i, "reWorkStHh") != "" || obj.getCellData(i, "reWorkEndDt") != "" || obj.getCellData(i, "reWorkEndHh") != "") {
      if (obj.getCellData(i, "reWorkStDt") == "") {
        await $c.win.alert($p, "재근무의 시작일자을(를) 입력하십시오.");
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkStDt");
        return false;
      }
      if (!$c.gus.cfValidateValue($p, obj.getCellData(i, "reWorkStDt"), "date=YYYYMMDD")) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 시작일자"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkStDt");
        return false;
      }
      if (obj.getCellData(i, "reWorkStHh") == "") {
        await $c.win.alert($p, "재근무의 시작시간을(를) 입력하십시오.");
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkStHh");
        return false;
      }
      if (!$c.gus.cfValidateValue($p, obj.getCellData(i, "reWorkStHh"), "date=HHmm")) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 시작시간"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkStHh");
        return false;
      }
      if (obj.getCellData(i, "reWorkEndDt") == "") {
        await $c.win.alert($p, "재근무의 종료일자을(를) 입력하십시오.");
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndDt");
        return false;
      }
      if (!$c.gus.cfValidateValue($p, obj.getCellData(i, "reWorkEndDt"), "date=YYYYMMDD")) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료일자"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndDt");
      }
      if (obj.getCellData(i, "reWorkEndHh") == "") {
        await $c.win.alert($p, "재근무의 종료시간을(를) 입력하십시오.");
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndHh");
        return false;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndHh");
        return false;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(0, 2) == "00" && obj.getCellData(i, "reWorkEndHh").substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndHh");
        return false;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(0, 2) == "24" && obj.getCellData(i, "reWorkEndHh").substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndHh");
        return false;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "reWorkEndHh");
        return false;
      }
    }
  }
  return true;
};
scwin.f_checkVacationDate = async function () {
  let obj = ds_master;
  for (let i = 0; i < obj.getRowCount(); i++) {
    if (obj.getRowStatus(i) == "U") {
      if (obj.getCellData(i, "workStDt") == "") {
        alert(i + 1 + "번째 행의 근무 시작일자을(를) 입력하십시오.");
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "workStDt");
        return false;
      }
      if (!$c.gus.cfValidateValue($p, obj.getCellData(i, "workStDt"), "date=YYYYMMDD")) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 시작일자"]);
        obj.setRowPosition(i);
        gr_master.setFocusedCell(i, "workStDt");
        return false;
      }
      if (obj.getCellData(i, "annualYn") != "1") {
        if (obj.getCellData(i, "workStHh") == "") {
          alert(i + 1 + "번째 행의 근무 시작시간을(를) 입력하십시오.");
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workStHh");
          return false;
        }
        if (!$c.gus.cfValidateValue($p, obj.getCellData(i, "workStHh"), "date=HHmm")) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 시작시간"]);
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workStHh");
          return false;
        }
        if (obj.getCellData(i, "workEndDt") == "") {
          alert(i + 1 + "번째 행의 근무 종료일자을(를) 입력하십시오.");
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndDt");
          return false;
        }
        if (!$c.gus.cfValidateValue($p, obj.getCellData(i, "workEndDt"), "date=YYYYMMDD")) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료일자"]);
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndDt");
        }
        if (obj.getCellData(i, "workEndHh") == "") {
          alert(i + 1 + "번째 행의 근무 종료시간을(를) 입력하십시오.");
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndHh");
          return false;
        }
        if (obj.getCellData(i, "workEndHh").substr(0, 2) > "24") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndHh");
          return false;
        }
        if (obj.getCellData(i, "workEndHh").substr(0, 2) == "00" && obj.getCellData(i, "workEndHh").substr(2, 2) == "00") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "reWorkEndHh");
          return false;
        }
        if (obj.getCellData(i, "workEndHh").substr(0, 2) == "24" && obj.getCellData(i, "workEndHh").substr(2, 2) > "00") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndHh");
          return false;
        }
        if (obj.getCellData(i, "workEndHh").substr(2, 2) > "59") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무 종료시간"]);
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndHh");
          return false;
        }
        if ($c.date.diffDate($p, obj.getCellData(i, "workStDt"), obj.getCellData(i, "workEndDt")) > 1 || $c.date.diffDate($p, obj.getCellData(i, "workStDt"), obj.getCellData(i, "workEndDt")) < 0) {
          alert(i + 1 + "번째 행의 시작일자와 종료일자의 차이는 최대 1일입니다. 올바른 일자를 입력하세요");
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "workEndDt");
          return false;
        }
        if ($c.date.diffDate($p, obj.getCellData(i, "workStDt"), obj.getCellData(i, "workEndDt")) == 1) {
          if (parseFloat(obj.getCellData(i, "workEndHh")) / 100 > 6 && !$c.gus.cfIsNull($p, obj.getCellData(i, "workEndHh"))) {
            alert(i + 1 + "번째 행의 근무종료시간은 06:00 이후로 설정할 수 없습니다.");
            obj.setRowPosition(i);
            gr_master.setFocusedCell(i, "workEndHh");
            return false;
          }
        }
      }
      if (obj.getCellData(i, "etcAlowAmt") != 0 || obj.getCellData(i, "etcDedtAmt") != 0) {
        if (obj.getCellData(i, "summary") == "") {
          alert(i + 1 + "번째 행의 적요를 입력하세요");
          obj.setRowPosition(i);
          gr_master.setFocusedCell(i, "summary");
          return false;
        }
      }
    }
  }
  return true;
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      let param1 = "," + udc_co.getCode() + "," + scwin.txtCoClsCd + ",";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo6", pCode, pName, pClose, null, null, null, null, param1, null, null, null, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, txt_acctDeptNm);
      break;
    case 2:
      let param2 = "," + udc_co.getCode();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveStaffListForDayLaborers", pCode, pName, pClose, null, null, null, null, "1", null, null, param2, null, null, pAllSearch, "인원,사번,인원명");
      $c.gus.cfSetReturnValue($p, rtnList, ed_staffNo, txt_staffNm);
      break;
  }
};
scwin.f_toExcel = async function () {
  $c.data.downloadGridViewExcel($p, gr_master, {
    fileName: "일용직근태내역.xlsx",
    sheetName: "일용직근태내역"
  });
};
scwin.f_chekGridTime = async function (aTime) {
  let returnValue = "false";
  if (aTime.length != 4) {
    alert("시간은  4자리로 입력해야 합니다");
    return returnValue = "true";
  }
  if (aTime.substr(0, 2) > "24") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["근무시간"]);
    return returnValue = "true";
  }
  if (aTime.substr(0, 2) == "24" && aTime.substr(0, 2).substr(2, 2) > "00") {
    alert("시간은 0~24 까지 입력 가능합니다.");
    return returnValue = "true";
  }
  if (!(aTime.substr(2, 1) == "0" || aTime.substr(2, 1) == "3") || aTime.substr(3, 1) != "0") {
    alert("분은 30분 단위로  입력 가능합니다.");
    return returnValue = "true";
  }
  return returnValue;
};
scwin.f_chekGridDay = function (wrkClsCd, fromYmd, toYmd) {
  let returnValue = "false";
  switch (wrkClsCd) {
    case 1:
      if (toYmd < fromYmd) {
        alert("종료일자는 시작일자보다 크거나 같아야 합니다.");
        return returnValue = "true";
      }
      if ($c.date.diffDate($p, fromYmd, toYmd) < 0 || $c.date.diffDate($p, fromYmd, toYmd) > 1) {
        alert("시작일자와 종료일자의 차이는 최대 1일입니다. 올바른 일자를 입력하세요");
        return returnValue = "true";
      }
      break;
  }
  return returnValue;
};
scwin.f_chekGridMove = function (obj, row, colid) {
  let nTempWorkHh = 0;
  let nEndHhBetweenStHh = 0;
  let returnValue;
  if (colid == "workStHh" || colid == "workEndHh" || colid == "workStDt" || colid == "workEndDt") {
    if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStHh")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndHh")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workStDt")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndDt"))) {
      if (obj.getCellData(row, "workStDt") == obj.getCellData(row, "workEndDt")) {
        nEndHhBetweenStHh = (parseFloat(obj.getCellData(row, "workEndHh")) - parseFloat(obj.getCellData(row, "workStHh"))) / 100;
        if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
          nTempWorkHh = Math.floor(nEndHhBetweenStHh);
        } else {
          nTempWorkHh = Math.floor(nEndHhBetweenStHh) + 0.5;
        }
      } else {
        nEndHhBetweenStHh = (2400 - parseFloat(obj.getCellData(row, "workStHh"))) / 100;
        if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
          nTempWorkHh = Math.floor(nEndHhBetweenStHh);
        } else {
          nTempWorkHh = Math.floor(nEndHhBetweenStHh) + 0.5;
        }
        nEndHhBetweenStHh = parseFloat(obj.getCellData(row, "workEndHh")) / 100;
        if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
          nTempWorkHh = parseFloat(nTempWorkHh) + Math.floor(nEndHhBetweenStHh);
        } else {
          nTempWorkHh = parseFloat(nTempWorkHh) + Math.floor(nEndHhBetweenStHh) + 0.5;
        }
      }
    }
    if (colid == "workStHh" || colid == "workEndHh") {
      returnValue = scwin.f_chekGridTime(obj.getCellData(row, colid));
      if (returnValue == "true") {
        obj.setCellData(row, colid, "");
        scwin.ValidMoveFlag = true;
        obj.setRowPosition(row);
        gr_master.setFocusedCell(row, colid);
        gr_master.setFocusedCell(row, colid);
        return false;
      }
      if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStHh")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndHh"))) {
        if (parseFloat(obj.getCellData(row, "workStHh")) >= parseFloat(obj.getCellData(row, "workEndHh"))) {
          if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStDt")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndDt"))) {
            if ($c.date.diffDate($p, obj.getCellData(row, "workStDt"), obj.getCellData(row, "workEndDt")) == 0) {
              alert("근무시작일과 종료일이 동일한 경우 종료시간은 시작시간 이후여야 합니다.");
              obj.setCellData(row, colid, "");
              scwin.ValidMoveFlag = true;
              obj.setRowPosition(row);
              gr_master.setFocusedCell(row, colid);
              gr_master.setFocusedCell(row, colid);
              return false;
            }
          }
        }
      }
      if (colid == "workEndHh") {
        if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStDt")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndDt"))) {
          if ($c.date.diffDate($p, obj.getCellData(row, "workStDt"), obj.getCellData(row, "workEndDt")) != 0) {
            if (parseFloat(obj.getCellData(row, "workEndHh")) / 100 > 6 && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndHh"))) {
              alert("근무시작일과 종료일이 상이한 경우 근무종료시간은 06:00 이후로 설정할 수 없습니다.");
              obj.setCellData(row, "workEndHh", "");
              scwin.ValidMoveFlag = true;
              obj.setRowPosition(row);
              gr_master.setFocusedCell(row, "workEndHh");
              gr_master.setFocusedCell(row, "workEndHh");
              return false;
            }
          }
        }
      }
    }
    if (colid == "workStDt" || colid == "workEndDt") {
      if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStDt")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndDt"))) {
        returnValue = scwin.f_chekGridDay(1, obj.getCellData(row, "workStDt"), obj.getCellData(row, "workEndDt"));
        if (returnValue == "true") {
          obj.setCellData(row, "workEndDt", "");
          scwin.ValidMoveFlag = true;
          obj.setRowPosition(row);
          gr_master.setFocusedCell(row, "workEndDt");
          gr_master.setFocusedCell(row, "workEndDt");
          return false;
        }
        if ($c.date.diffDate($p, obj.getCellData(row, "workStDt"), obj.getCellData(row, "workEndDt")) != 0) {
          if (parseFloat(obj.getCellData(row, "workEndHh")) / 100 > 6 && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndHh"))) {
            alert("근무시작일과 종료일이 상이한 경우 근무종료시간은 06:00 이후로 설정할 수 없습니다.");
            obj.setCellData(row, "workEndHh", "");
            obj.setRowPosition(row);
            scwin.ValidMoveFlag = true;
            gr_master.setFocusedCell(row, "workEndHh");
            scwin.ValidMoveFlag = true;
            gr_master.setFocusedCell(row, "workEndHh");
            return false;
          }
        } else {
          if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStHh")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndHh"))) {
            if (parseFloat(obj.getCellData(row, "workStHh")) >= parseFloat(obj.getCellData(row, "workEndHh"))) {
              alert("근무시작일과 종료일이 동일한 경우 종료시간은 시작시간 이후여야 합니다.");
              obj.setCellData(row, "workEndHh", "");
              obj.setRowPosition(row);
              scwin.ValidMoveFlag = true;
              gr_master.setFocusedCell(row, "workEndHh");
              scwin.ValidMoveFlag = true;
              gr_master.setFocusedCell(row, "workEndHh");
              return false;
            }
          }
        }
      }
    }
  }
  scwin.ValidMoveFlag = false;
  return true;
};
scwin.f_Modify = async function () {
  let cnt = 0;
  if (ds_master.getRowCount() <= 0) {
    alert("자료가 존재하지 않습니다.");
    return false;
  }
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "1") {
      if (ed_stHh.getValue() != "") {
        ds_master.setCellData(i, "workStHh", ed_stHh.getValue());
      }
      if (ed_endHh.getValue() != "") {
        ds_master.setCellData(i, "workEndHh", ed_endHh.getValue());
      }
      cnt++;
    }
  }
  if (cnt == 0) {
    alert("선택된 자료가 존재하지 않습니다.");
    return false;
  }
};
scwin.f_setCompanyInfo = async function () {
  if (scwin.vUserHomeClsCd != scwin.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vCoCd = scwin.CO_CD_DONGBU;
    scwin.vCoClsCd = scwin.CO_CLS_CD_DONGBU;
  }
  udc_co.setCode(scwin.vCoCd);
  scwin.f_PopUpCompanyInfo("T");
  if ("T" == scwin.privAdmin || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm]);
  }
};
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  let rtnList = $c.gus.cfCommonPopUp($p, "retrieveDongbuGroupCompanyInfo", udc_co.getCode(), udc_co.getName(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    udc_co.setCode(rtnList[0]);
    udc_co.setName(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
  } else {
    udc_co.setCode("");
    udc_co.setName("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > scwin.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.btn_Create_onclick = async function (e) {
  scwin.f_Save();
};
scwin.btn_Cancel_onclick = async function (e) {
  scwin.f_Cancel();
};
scwin.btn_Del_onclick = async function (e) {
  scwin.f_Delete();
};
scwin.btn_Mod_onclick = async function (e) {
  scwin.f_Modify();
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  $c.gus.cfShowTotalRows($p, totalRows, rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Cancel, btn_Del, btn_Mod]);
    return;
  }
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Cancel, btn_Del, btn_Mod]);
  scwin.sChk = 0;
  scwin.ValidChkFlag = false;
  scwin.ValidMoveFlag = false;
};
scwin.sbm_search_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 확정 처리하였습니다.");
  scwin.f_Retrieve();
  if (ds_out.getCellData(ds_out.getRowPosition(), "staffNo") != "") {
    await $c.win.alert($p, "사원번호 : " + ds_out.getCellData(ds_out.getRowPosition(), "staffNo") + "\n은(는) 이미 급여정산내역이 집계되어 있습니다.\n급여정산 재집계하시기 바랍니다.");
  }
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_cancel_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 미확정 처리하였습니다.");
  scwin.f_Retrieve();
  if (ds_out.getCellData(ds_out.getRowPosition(), "staffNo") != "") {
    await $c.win.alert($p, "사원번호 : " + ds_out.getCellData(ds_out.getRowPosition(), "staffNo") + "\n은(는) 이미 급여정산내역이 집계되어 있습니다.\n급여정산 재집계하시기 바랍니다.");
  }
};
scwin.sbm_cancel_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_004);
  scwin.f_Retrieve();
  if (ds_out.getCellData(ds_out.getRowPosition(), "staffNo") != "") {
    await $c.win.alert($p, "사원번호 : " + ds_out.getCellData(ds_out.getRowPosition(), "staffNo") + "\n은(는) 이미 급여정산내역이 집계되어 있습니다.\n급여정산 재집계하시기 바랍니다.");
  }
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_master_onheaderclick = function (rowIndex, columnIndex, columnId) {
  let vChk = "";
  if (ds_master.getRowCount() > 0) {
    if (columnId == "chk") {
      let headerChecked = gr_master.getHeaderValue(0, columnId);
      vChk = headerChecked ? "1" : "0";
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getCellData(i, "workStsCd") == "1" || ds_master.getCellData(i, "workStsCd") == "2") {
          ds_master.setCellData(i, columnId, vChk);
          scwin.sChk = vChk;
          if (vChk == "0") {
            ds_master.undoRow(i);
          }
        }
      }
    }
  }
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  let nRow = 0;
  for (let k = 0; k < ds_master.getRowCount(); k++) {
    if (ds_master.getCellData(k, "chk") == "1") {
      nRow++;
      break;
    }
  }
  let Chk = scwin.sChk;
  if (columnId == "chk") {
    if (ds_master.getCellData(rowIndex, "chk") == "0") {
      ds_master.undoRow(rowIndex);
    }
    if (nRow <= 0) {
      scwin.sChk = 0;
    } else {
      if (ds_master.getCellData(rowIndex, "chk") == "1") {
        if (ds_master.getCellData(rowIndex, "workStsCd") == "1" || ds_master.getCellData(rowIndex, "workStsCd") == "2") {
          scwin.sChk = 1;
        } else {
          scwin.sChk = 2;
        }
      }
    }
    if (Chk == 0) {
      return;
    } else {
      if (Chk == 1) {
        if (scwin.sChk == 2) {
          alert("미등록/대기 상태와 등록 상태는 함께 선택불가합니다.");
          ds_master.setCellData(rowIndex, "chk", "0");
          scwin.sChk = 1;
          return;
        }
      } else if (Chk == 2) {
        if (scwin.sChk == 1) {
          alert("등록상태와 미등록/대기 상태는 함께 선택불가합니다.");
          ds_master.setCellData(rowIndex, "chk", "0");
          scwin.sChk = 2;
          return;
        }
      } else {
        return;
      }
    }
  }
};
scwin.ds_master_oncelldatachange = function (info) {
  let row = info.row;
  let colid = info.colId;
  if (colid == "rltWorkHh" || colid == "extdWorkHh" || colid == "ngtWorkHh" || colid == "offWorkHh" || colid == "daySalaryAmt") {
    return;
  }
  if (!scwin.ValidChkFlag) {
    scwin.ValidChkFlag = true;
    if (!scwin.f_chekGridMove(ds_master, row, colid)) {
      ds_master.setCellData(row, "rltWorkHh", 0);
      ds_master.setCellData(row, "extdWorkHh", 0);
      ds_master.setCellData(row, "ngtWorkHh", 0);
      ds_master.setCellData(row, "offWorkHh", 0);
      ds_master.setCellData(row, "daySalaryAmt", 0);
      return;
    }
  }
  scwin.ValidChkFlag = false;
  let obj = ds_master;
  let nEndHhBetweenStHh = 0;
  let nNgtWorkHhSum = 0;
  let nDayPayAmtDivEight = 0;
  let nTimePayAmt = 0;
  let nSumDaySalaryAmt = 0;
  let nExtdScRt = parseFloat(obj.getCellData(row, "extdScRt")) * 0.01;
  let nOffDayScRt = parseFloat(obj.getCellData(row, "offDayScRt")) * 0.01;
  let nNgtDayScRt = parseFloat(obj.getCellData(row, "ngtDayScRt")) * 0.01;
  if (colid == "workStDt" || colid == "workEndDt" || colid == "workStHh" || colid == "workEndHh" || colid == "offDayYn" || colid == "mealTimeYn" || colid == "foodYn" || colid == "etcAlowAmt" || colid == "etcDedtAmt" || colid == "annualYn") {
    if (!$c.gus.cfIsNull($p, obj.getCellData(row, "workStDt")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndDt")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workStHh")) && !$c.gus.cfIsNull($p, obj.getCellData(row, "workEndHh"))) {
      obj.setCellData(row, "rltWorkHh", 0);
      obj.setCellData(row, "extdWorkHh", 0);
      obj.setCellData(row, "ngtWorkHh", 0);
      obj.setCellData(row, "offWorkHh", 0);
      obj.setCellData(row, "daySalaryAmt", 0);
      if (obj.getCellData(row, "workStDt") == obj.getCellData(row, "workEndDt")) {
        nEndHhBetweenStHh = (parseFloat(obj.getCellData(row, "workEndHh")) - parseFloat(obj.getCellData(row, "workStHh"))) / 100;
        if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
          obj.setCellData(row, "rltWorkHh", Math.floor(nEndHhBetweenStHh));
        } else {
          obj.setCellData(row, "rltWorkHh", Math.floor(nEndHhBetweenStHh) + 0.5);
        }
      } else {
        nEndHhBetweenStHh = (2400 - parseFloat(obj.getCellData(row, "workStHh"))) / 100;
        if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
          obj.setCellData(row, "rltWorkHh", Math.floor(nEndHhBetweenStHh));
        } else {
          obj.setCellData(row, "rltWorkHh", Math.floor(nEndHhBetweenStHh) + 0.5);
        }
        nEndHhBetweenStHh = parseFloat(obj.getCellData(row, "workEndHh")) / 100;
        if (nEndHhBetweenStHh - Math.floor(nEndHhBetweenStHh) == 0) {
          obj.setCellData(row, "rltWorkHh", parseFloat(obj.getCellData(row, "rltWorkHh")) + Math.floor(nEndHhBetweenStHh));
        } else {
          obj.setCellData(row, "rltWorkHh", parseFloat(obj.getCellData(row, "rltWorkHh")) + Math.floor(nEndHhBetweenStHh) + 0.5);
        }
      }
      if (obj.getCellData(row, "offDayYn") == "1") {
        obj.setCellData(row, "rltWorkHh", parseFloat(obj.getCellData(row, "rltWorkHh")) - parseFloat(obj.getCellData(row, "mealTimeYn")));
        obj.setCellData(row, "offWorkHh", obj.getCellData(row, "rltWorkHh"));
      } else {
        if (obj.getCellData(row, "workStDt") == obj.getCellData(row, "workEndDt")) {
          if (parseFloat(obj.getCellData(row, "workEndHh")) > scwin.nNgtWorkStHh) {
            nNgtWorkHhSum = (parseFloat(obj.getCellData(row, "workEndHh")) - scwin.nNgtWorkStHh) / 100;
            if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
              obj.setCellData(row, "ngtWorkHh", Math.floor(nNgtWorkHhSum));
            } else {
              obj.setCellData(row, "ngtWorkHh", Math.floor(nNgtWorkHhSum) + 0.5);
            }
          }
          if (parseFloat(obj.getCellData(row, "workStHh")) > scwin.nNgtWorkStHh) {
            nNgtWorkHhSum = (parseFloat(obj.getCellData(row, "workStHh")) - scwin.nNgtWorkStHh) / 100;
            if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
              obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum));
            } else {
              obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum) - 0.5);
            }
          }
        } else {
          if (parseFloat(obj.getCellData(row, "workEndHh")) > scwin.nNgtWorkEndHh) {
            nNgtWorkHhSum = scwin.nStandardWorkHh;
            obj.setCellData(row, "ngtWorkHh", Math.floor(nNgtWorkHhSum));
            if (parseFloat(obj.getCellData(row, "workStHh")) > scwin.nNgtWorkStHh) {
              nNgtWorkHhSum = (parseFloat(obj.getCellData(row, "workStHh")) - scwin.nNgtWorkStHh) / 100;
              if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
                obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum));
              } else {
                obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum) - 0.5);
              }
            }
          } else {
            nNgtWorkHhSum = parseFloat(obj.getCellData(row, "workEndHh")) / 100 + 2;
            if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
              obj.setCellData(row, "ngtWorkHh", Math.floor(nNgtWorkHhSum));
            } else {
              obj.setCellData(row, "ngtWorkHh", Math.floor(nNgtWorkHhSum) + 0.5);
            }
            if (parseFloat(obj.getCellData(row, "workStHh")) > scwin.nNgtWorkStHh) {
              nNgtWorkHhSum = (parseFloat(obj.getCellData(row, "workStHh")) - scwin.nNgtWorkStHh) / 100;
              if (nNgtWorkHhSum - Math.floor(nNgtWorkHhSum) == 0) {
                obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum));
              } else {
                obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - Math.floor(nNgtWorkHhSum) - 0.5);
              }
            }
          }
        }
        if (parseFloat(obj.getCellData(row, "rltWorkHh")) > scwin.nStandardWorkHh) {
          obj.setCellData(row, "extdWorkHh", parseFloat(obj.getCellData(row, "rltWorkHh")) - scwin.nStandardWorkHh);
        }
        if (obj.getCellData(row, "mealTimeYn") == "1") {
          obj.setCellData(row, "rltWorkHh", parseFloat(obj.getCellData(row, "rltWorkHh")) - parseFloat(obj.getCellData(row, "mealTimeYn")));
          if (parseFloat(obj.getCellData(row, "extdWorkHh")) >= 1) {
            obj.setCellData(row, "extdWorkHh", parseFloat(obj.getCellData(row, "extdWorkHh")) - parseFloat(obj.getCellData(row, "mealTimeYn")));
          } else if (parseFloat(obj.getCellData(row, "extdWorkHh")) > 0 && parseFloat(obj.getCellData(row, "extdWorkHh")) < 1) {
            obj.setCellData(row, "extdWorkHh", 0);
            if (parseFloat(obj.getCellData(row, "ngtWorkHh")) > 0) {
              obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - 0.5);
            }
          } else {
            if (parseFloat(obj.getCellData(row, "ngtWorkHh")) >= 1) {
              obj.setCellData(row, "ngtWorkHh", parseFloat(obj.getCellData(row, "ngtWorkHh")) - parseFloat(obj.getCellData(row, "mealTimeYn")));
            } else if (parseFloat(obj.getCellData(row, "ngtWorkHh")) > 0 && parseFloat(obj.getCellData(row, "ngtWorkHh")) < 1) {
              obj.setCellData(row, "ngtWorkHh", 0);
            }
          }
        }
      }
      if (parseFloat(obj.getCellData(row, "rltWorkHh")) < 0) obj.setCellData(row, "rltWorkHh", 0);
      if (parseFloat(obj.getCellData(row, "extdWorkHh")) < 0) obj.setCellData(row, "extdWorkHh", 0);
      if (parseFloat(obj.getCellData(row, "ngtWorkHh")) < 0) obj.setCellData(row, "ngtWorkHh", 0);
      if (parseFloat(obj.getCellData(row, "offWorkHh")) < 0) obj.setCellData(row, "offWorkHh", 0);
      if (obj.getCellData(row, "payGbn") == "10") {
        nSumDaySalaryAmt = Math.floor(parseFloat(obj.getCellData(row, "payAmt")) * 0.1) * 10;
      } else if (obj.getCellData(row, "payGbn") == "02") {
        nDayPayAmtDivEight = parseFloat(obj.getCellData(row, "dayPayAmt")) / 8;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nDayPayAmtDivEight * parseFloat(obj.getCellData(row, "rltWorkHh")) * 0.1) * 10;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nDayPayAmtDivEight * parseFloat(obj.getCellData(row, "extdWorkHh")) * nExtdScRt * 0.1) * 10;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nDayPayAmtDivEight * parseFloat(obj.getCellData(row, "ngtWorkHh")) * nNgtDayScRt * 0.1) * 10;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nDayPayAmtDivEight * parseFloat(obj.getCellData(row, "offWorkHh")) * nOffDayScRt * 0.1) * 10;
      } else if (obj.getCellData(row, "payGbn") == "03") {
        nTimePayAmt = parseFloat(obj.getCellData(row, "timePayAmt"));
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nTimePayAmt * parseFloat(obj.getCellData(row, "rltWorkHh")) * 0.1) * 10;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nTimePayAmt * parseFloat(obj.getCellData(row, "extdWorkHh")) * nExtdScRt * 0.1) * 10;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nTimePayAmt * parseFloat(obj.getCellData(row, "ngtWorkHh")) * nNgtDayScRt * 0.1) * 10;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nTimePayAmt * parseFloat(obj.getCellData(row, "offWorkHh")) * nOffDayScRt * 0.1) * 10;
      } else {
        nSumDaySalaryAmt = 0;
      }
      obj.setCellData(row, "daySalaryAmt", nSumDaySalaryAmt);
      if (obj.getCellData(row, "foodYn") == "1") {
        obj.setCellData(row, "foodAmt", parseFloat(obj.getCellData(row, "standFoodAmt")));
        obj.setCellData(row, "daySalaryAmt", parseFloat(obj.getCellData(row, "daySalaryAmt")) + Math.floor(parseFloat(obj.getCellData(row, "foodAmt")) * 0.1) * 10);
      } else {
        obj.setCellData(row, "foodAmt", 0);
      }
      obj.setCellData(row, "daySalaryAmt", parseFloat(obj.getCellData(row, "daySalaryAmt")) + Math.floor(parseFloat(obj.getCellData(row, "etcAlowAmt")) * 0.1) * 10);
      obj.setCellData(row, "daySalaryAmt", parseFloat(obj.getCellData(row, "daySalaryAmt")) - Math.floor(parseFloat(obj.getCellData(row, "etcDedtAmt")) * 0.1) * 10);
    } else if (obj.getCellData(row, "annualYn") == "1") {
      obj.setCellData(row, "rltWorkHh", 8);
      if (obj.getCellData(row, "payGbn") == "10") {
        nSumDaySalaryAmt = Math.floor(parseFloat(obj.getCellData(row, "payAmt")) * 0.1) * 10;
      } else if (obj.getCellData(row, "payGbn") == "02") {
        nDayPayAmtDivEight = parseFloat(obj.getCellData(row, "dayPayAmt")) / 8;
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nDayPayAmtDivEight * parseFloat(obj.getCellData(row, "rltWorkHh")) * 0.1) * 10;
      } else if (obj.getCellData(row, "payGbn") == "03") {
        nTimePayAmt = parseFloat(obj.getCellData(row, "timePayAmt"));
        nSumDaySalaryAmt = nSumDaySalaryAmt + Math.floor(nTimePayAmt * parseFloat(obj.getCellData(row, "rltWorkHh")) * 0.1) * 10;
      } else {
        nSumDaySalaryAmt = 0;
      }
      obj.setCellData(row, "daySalaryAmt", nSumDaySalaryAmt);
    } else {
      obj.setCellData(row, "rltWorkHh", 0);
      obj.setCellData(row, "extdWorkHh", 0);
      obj.setCellData(row, "ngtWorkHh", 0);
      obj.setCellData(row, "offWorkHh", 0);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_coCd',validTitle:'',nameId:'txt_coNm',id:'udc_co',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'txt_acctDeptNm',popupID:'',selectID:'',id:'udc_acctDept',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lowerDeptIncluYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함 '}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_staffNo',nameId:'txt_staffNm',popupID:'',selectID:'',id:'udc_staff',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_outbr',refEdDt:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'급여구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'em_retrieve_gubun',style:'width: 150px; width: 2px;',submenuSize:'fixed',ref:'data:ds_search.gubun'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'em_workStsCd',style:'width: 150px; width: 2px;',submenuSize:'fixed',ref:'data:ds_search.workStsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve','ev:onclick':'scwin.btn_Retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일용직 근태등록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'시작시간',class:''}},{T:1,N:'xf:input',A:{dataType:'time',style:'width: 50px;',id:'ed_stHh',class:'tac',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종료시간',style:''}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_endHh',style:'width: 50px;',mandatory:'true'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Mod','ev:onclick':'scwin.btn_Mod_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'4',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',colSpan:'',rowSpan:'2',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStsCd',inputType:'text',style:'',value:'상태',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNo',value:'사원</br>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNm',value:'성명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'직종',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeCd',value:'상세</br>직종',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occpgrdCd',value:'직급 ',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptCd',value:'부서</br>코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'부서명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'annualYn',inputType:'text',style:'',value:'연차</br>여부',width:'70',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayYn',inputType:'text',style:'',value:'휴일</br>여부',width:'70',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mealTimeYn',inputType:'text',style:'',value:'중식</br>여부',width:'70',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStDt',inputType:'text',style:'',value:'근무',width:'280',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'workStHh',value:'재근무',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'workEndDt',value:'근무</br>시간',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'workEndHh',value:'연장</br>시간',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reworkStDt',value:'야간</br>시간',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reworkStHh',value:'휴일</br>시간',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reworkEndDt',value:'일</br>급여액',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reworkEndHh',value:'식대',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rltWorkHh',value:'기타</br>소득',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'extdWorkHh',value:'기타</br>공제',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ngtWorkHh',value:'적요',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'offWorkHh',value:'급여</br>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'daySalaryAmt',value:'월정액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'foodYn',value:'일당',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcAlowAmt',value:'시급액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'etcDedtAmt',value:'기준</br>식대',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'식대',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payGbn',value:'연장</br>할증률',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt',value:'휴일</br>할증률',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dayPayAmt',value:'야간</be>할증률',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chk',value:'시작</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'workStsCd',value:'시작</br>시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNo',value:'종료</br>일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNm',value:'종료</br>시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'시작</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeCd',value:'시작</br>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occpgrdCd',value:'종료</br>일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptCd',value:'종료</br>시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occpgrdCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'annualYn',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayYn',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mealTimeYn',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStDt',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStHh',inputType:'text',style:'',value:'',width:'70',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workEndDt',inputType:'calendar',style:'',value:'',width:'70',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'workEndHh',value:'',displayMode:'label',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'reworkStDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reworkStHh',value:'',displayMode:'label',allowChar:'0-9',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'reworkEndDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reworkEndHh',value:'',displayMode:'label',allowChar:'0-9',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rltWorkHh',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'extdWorkHh',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ngtWorkHh',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'offWorkHh',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'daySalaryAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'foodYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'etcAlowAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'etcDedtAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payGbn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dayPayAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'timePayAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'standFoodAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'foodAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'extdScRt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offDayScRt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ngtDayScRt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',expression:'sum(\'rltWorkHh\')',dataType:'float',displayFormat:'#,##0.0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum(\'extdWorkHh\')',dataType:'float',displayFormat:'#,##0.0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column121',value:'',displayMode:'label',expression:'sum(\'ngtWorkHh\')',dataType:'float',displayFormat:'#,##0.0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column113',value:'',displayMode:'label',expression:'sum(\'offWorkHh\')',dataType:'float',displayFormat:'#,##0.0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'daySalaryAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column129',value:'',displayMode:'label',expression:'sum(\'etcAlowAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column125',value:'',displayMode:'label',expression:'sum(\'etcDedtAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column161',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column157',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'payAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column153',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dayPayAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column141',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column145',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'foodAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column177',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column165',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column169',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'totalRows'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'info-list'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'근무종료시간 : 익일 06:00 까지 입력 가능합니다. ',class:'txt-dot txt-red'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'확정 : 일용직 정산 시 금액이 반영됩니다. <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 확정상태 후 수정은 미확정 처리 후 가능합니다. <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 정산전표 생성 시 확정처리 및 삭제가 불가능합니다.',class:'txt-dot txt-red',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'미확정 : 일용직 정산 시 금액이 미반영됩니다.(임시저장상태)',class:'txt-dot txt-red'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'삭제 : 입력된 일용직 내역을 삭제합니다.(Defalut상태로 조회 됨)',class:'txt-dot txt-red'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create','ev:onclick':'scwin.btn_Create_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel','ev:onclick':'scwin.btn_Cancel_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del','ev:onclick':'scwin.btn_Del_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})