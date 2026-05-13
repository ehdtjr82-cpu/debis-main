/*amd /AI/eq_310_01_01b.xml 32194 de9c9c3fc7b2fb8b560ac3b04b1d8c5bbe7eabe2848f5b298bdbee5d8a5c4e93 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlanDt1',name:'작업계획시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlanDt2',name:'작업계획마지막일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixPlanNo',name:'정비계획번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planDcsnYn',name:'계획확정여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_310',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'planDcsnYn',name:'계획확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixPlanNo',name:'정비계획번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'장비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanDt',name:'작업계획일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfOutordClsCd',name:'정비구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkStndNo',name:'작업표준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStndNm',name:'작업표준명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartCd',name:'수리순환품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'수리순환품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'유효기간만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modReqDt',name:'수정요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modReqUserId',name:'수정요청자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'년식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'배정물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startDate',name:'계획시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'정기검사만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mntnInspExpireDt',name:'정밀검사만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintChkExpireDt',name:'정기점검만료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fixwrkmgnt.fixwrkplanmgnt.RetrieveFixWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_310","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_310","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveFixPlan',action:'/ps.eq.fixwrkmgnt.fixwrkplanmgnt.SaveFixWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_310","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveFixPlan_submitdone','ev:submiterror':'scwin.sbm_saveFixPlan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCombo1',action:'/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveHomeClsList&strVal=&intVal=',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"co_ds_combo1","key":"OUT_DS1"}]',target:'data:json,[{"id":"co_ds_combo1","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCombo1_submitdone','ev:submiterror':'scwin.sbm_retrieveCombo1_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCombo',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"co_ds_combo","key":"OUT_DS1"}]',target:'data:json,[{"id":"co_ds_combo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCombo_submitdone','ev:submiterror':'scwin.sbm_retrieveCombo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.cvNNew = false;
scwin.cvDcsnYn = false;
scwin.cvPopup = false;
scwin.eqHomeClsCd = "";
scwin.fixPlanNo = "";
scwin.homeClsCd = "";
scwin.outbrRsnCd = "";
scwin.standDate1 = "";
scwin.standDate2 = "";
scwin.vCurDate = "";
scwin.vNextWeekDate = "";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vNextWeekDate = $c.date.addDate($p, scwin.vCurDate, 7);
  scwin.eqHomeClsCd = $c.ses.getEqHomeClsCd();
  let params = $c.data.getParameter($p);
  if (params != null) {
    scwin.fixPlanNo = params["fixPlanNo"] || "";
    scwin.homeClsCd = params["homeClsCd"] || "";
    scwin.outbrRsnCd = params["outbrRsnCd"] || "";
    scwin.standDate1 = params["standDate1"] || "";
    scwin.standDate2 = params["standDate2"] || "";
  }
  dma_search.set("fixWrkPlCd", " ");
  dma_search.set("wrkPlanDt1", " ");
  dma_search.set("wrkPlanDt2", " ");
  dma_search.set("fixPlanNo", " ");
  dma_search.set("planDcsnYn", " ");
  scwin.f_RetrieveFirst();
  $c.gus.cfDisableObjects($p, [b310Add, b310Del, b310Undo]);
};
scwin.onUdcCompleted = async function () {
  if (scwin.fixPlanNo.length > 0) {
    lux_homeClsCd.setValue(scwin.homeClsCd);
    scwin.eqHomeClsCd = scwin.homeClsCd;
    scwin.f_RetrieveSecond(lux_homeClsCd.getValue());
    lux_fixWrkPlCd.setValue(scwin.outbrRsnCd);
    em_fixPlanNo.setValue(scwin.fixPlanNo);
    ed_standDate1.setValue(scwin.standDate1);
    ed_standDate2.setValue(scwin.standDate2);
  } else {
    ed_standDate1.setValue(scwin.vCurDate);
    ed_standDate2.setValue(scwin.vNextWeekDate);
  }
};
scwin.f_RetrieveFirst = async function () {
  await $c.sbm.execute($p, sbm_retrieveCombo1);
};
scwin.f_RetrieveSecond = async function (param1) {
  sbm_retrieveCombo.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveFixWrkList&strVal=" + param1 + "&intVal=";
  await $c.sbm.execute($p, sbm_retrieveCombo);
};
scwin.f_Retrieve = async function () {
  let chk1 = await $c.gus.cfValidate($p, [udc_standDate]);
  if (!chk1) return;
  let standDate1Val = udc_standDate.getFromValue();
  let standDate2Val = udc_standDate.getToValue();
  if (!$c.gus.cfIsAfterDate($p, standDate1Val, standDate2Val, false)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["계획시작일[" + standDate1Val + "] ", "계획종료일[" + standDate2Val + "] 보다 이전 "]);
    udc_standDate.setFocusFrom();
    return;
  }
  scwin.f_condition();
  let strPath = "/ps.eq.fixwrkmgnt.fixwrkplanmgnt.RetrieveFixWorkPlanCMD.do";
  sbm_retrieve.action = strPath;
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_condition = function () {
  dma_search.set("fixWrkPlCd", lux_fixWrkPlCd.getValue());
  dma_search.set("wrkPlanDt1", udc_standDate.getFromValue());
  dma_search.set("wrkPlanDt2", udc_standDate.getToValue());
  dma_search.set("fixPlanNo", em_fixPlanNo.getValue());
  dma_search.set("planDcsnYn", lux_planDcsnYn.getValue());
};
scwin.f_Save = async function () {
  if (ds_310.getUpdatedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["정비계획 "]);
    return;
  }
  let fixKndCd = "";
  let circulPartCd = "";
  for (let i = 0; i < ds_310.getRowCount(); i++) {
    let rowStatus = ds_310.getRowStatus(i);
    if (rowStatus == "C" || rowStatus == "U") {
      fixKndCd = ds_310.getCellData(i, "fixKndCd");
      if (fixKndCd == "04") {
        circulPartCd = ds_310.getCellData(i, "circulPartCd");
        circulPartCd = circulPartCd.trim();
        if (circulPartCd.length == 0) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수리순환품코드 "]);
          gr_310.setFocusedCell(i, "circulPartCd");
          return;
        }
      }
    }
  }
  let chk = await $c.gus.cfValidate($p, [gr_310]);
  if (chk) {
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult == true) {
      await $c.sbm.execute($p, sbm_saveFixPlan);
    }
  }
};
scwin.f_Addrow310 = function () {
  scwin.cvNNew = true;
  $c.data.insertRow($p, ds_310);
  let rowPos = ds_310.getRowPosition();
  ds_310.setCellData(rowPos, "fixWrkPlCd", lux_fixWrkPlCd.getValue());
  gr_310.setFocusedCell(rowPos, "vehclNo");
};
scwin.f_Del310 = async function () {
  if (ds_310.getRowCount() > 0) {
    let rowPos = ds_310.getRowPosition();
    let temp = ds_310.getCellData(rowPos, "planDcsnYn");
    if (temp == "1") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["확정일때", "삭제 "]);
    } else {
      ds_310.removeRow(rowPos);
    }
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [lux_homeClsCd, lux_fixWrkPlCd, em_fixPlanNo, lux_planDcsnYn]);
  ed_standDate1.setValue(scwin.vCurDate);
  ed_standDate2.setValue(scwin.vNextWeekDate);
};
scwin.f_openCommPopUpGrid = function (row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  pCode = ds_310.getCellData(row, "vehclNo");
  let temp = lux_homeClsCd.getValue();
  rtnList = $c.gus.cfCommonPopUp($p, "retrieveVehclListInfo", pCode.trim(), pName, pClose, 7, null, null, null, temp, null, null, null, null, null, "F", "장비조회,장비번호,장비코드");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_310, row, "vehclNo", "eqCd", ["prdyr", "lobranNm", "rglintInspExpireDt", "mntnInspExpireDt", "rglintChkExpireDt"]);
  if (rtnList == null) {
    let rowStatus = ds_310.getRowStatus(row);
    if (rowStatus == "C") {
      ds_310.setCellData(row, "expireDt", "");
    }
  }
  return false;
};
scwin.f_openCommPopUpGrid1 = function (row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  pCode = ds_310.getCellData(row, "circulPartCd");
  rtnList = $c.gus.cfCommonPopUp($p, "retrievePartYnInfo", pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, null, "수리순환품조회,부품코드,부품명");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_310, row, "circulPartCd", "partNm");
  return false;
};
scwin.f_openCommPopUpGrid2 = function (row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  pCode = ds_310.getCellData(row, "fixWrkStndNo");
  let temp = lux_homeClsCd.getValue();
  rtnList = $c.gus.cfCommonPopUp($p, "retrieveFixWrkSdListInfo", pCode.trim(), pName, pClose, null, null, null, null, temp, null, null, null, null, null, null, "작업표준조회,작업표준코드,작업표준명");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_310, row, "fixWrkStndNo", "wrkStndNm");
  return false;
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_310);
  if (ds_310.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfEnableObjects($p, [b310Add, b310Del, b310Undo]);
  } else {
    $c.gus.cfEnableObjects($p, [b310Add, b310Del, b310Undo]);
  }
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_310);
  await $c.win.alert($p, e.errorMsg);
};
scwin.sbm_saveFixPlan_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_310);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_saveFixPlan_submiterror = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_310);
  await $c.win.alert($p, e.errorMsg);
};
scwin.lux_homeClsCd_onchange = function (e) {
  let luxIndex = lux_homeClsCd.getValue();
  scwin.f_RetrieveSecond(luxIndex);
};
scwin.gr_310_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.cvPopup == true) {
    scwin.cvPopup = false;
    return;
  }
  if (columnId == "vehclNo") {
    scwin.f_openCommPopUpGrid(rowIndex, "F");
  }
  if (columnId == "circulPartCd") {
    scwin.f_openCommPopUpGrid1(rowIndex, "F");
  }
  if (columnId == "fixWrkStndNo") {
    scwin.f_openCommPopUpGrid2(rowIndex, "F");
  }
};
scwin.gr_310_oncellclick = function (rowIndex, columnIndex, columnId) {
  let planDcsnYn = ds_310.getCellData(rowIndex, "planDcsnYn");
  let fixKndCd = ds_310.getCellData(rowIndex, "fixKndCd");
  let temp = "04";
  let rowStatus = ds_310.getRowStatus(rowIndex);
  if (rowStatus != "C") {
    gr_310.setCellReadOnly(rowIndex, "vehclNo", true);
  } else {
    gr_310.setCellReadOnly(rowIndex, "vehclNo", false);
  }
  if (planDcsnYn == "1") {
    scwin.cvDcsnYn = true;
    gr_310.setCellReadOnly(rowIndex, "fixKndCd", true);
    gr_310.setCellReadOnly(rowIndex, "selfOutordClsCd", true);
    gr_310.setCellReadOnly(rowIndex, "wrkPlanDt", true);
    gr_310.setCellReadOnly(rowIndex, "circulPartCd", true);
    gr_310.setCellReadOnly(rowIndex, "fixWrkStndNo", true);
  } else {
    scwin.cvDcsnYn = false;
    if (fixKndCd == temp) {
      gr_310.setCellReadOnly(rowIndex, "circulPartCd", false);
    } else {
      gr_310.setCellReadOnly(rowIndex, "circulPartCd", true);
    }
    gr_310.setCellReadOnly(rowIndex, "fixKndCd", false);
    gr_310.setCellReadOnly(rowIndex, "selfOutordClsCd", false);
    gr_310.setCellReadOnly(rowIndex, "wrkPlanDt", false);
    gr_310.setCellReadOnly(rowIndex, "fixWrkStndNo", false);
  }
};
scwin.ds_310_oncelldatachange = async function (info) {
  let row = info.rowIndex;
  let colid = info.columnId;
  let olddata = info.oldValue;
  if (colid == "fixKndCd") {
    let fixKndCd1 = info.oldValue;
    let fixKndCd2 = ds_310.getCellData(row, colid);
    let temp = "04";
    if (scwin.cvNNew == false) {
      if (fixKndCd1 != fixKndCd2) {
        if (fixKndCd2 == "13") {
          ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintChkExpireDt"));
          ds_310.setCellData(row, "circulPartCd", "");
          ds_310.setCellData(row, "partNm", "");
        } else if (fixKndCd2 == "14") {
          ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintInspExpireDt"));
          ds_310.setCellData(row, "circulPartCd", "");
          ds_310.setCellData(row, "partNm", "");
        } else if (fixKndCd2 == "15") {
          ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "mntnInspExpireDt"));
          ds_310.setCellData(row, "circulPartCd", "");
          ds_310.setCellData(row, "partNm", "");
        } else {
          ds_310.setCellData(row, "expireDt", "");
        }
      }
    } else {
      if (fixKndCd2 == "13") {
        ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintChkExpireDt"));
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      } else if (fixKndCd2 == "14") {
        ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintInspExpireDt"));
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      } else if (fixKndCd2 == "15") {
        ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "mntnInspExpireDt"));
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      } else {
        ds_310.setCellData(row, "expireDt", "");
      }
    }
    let orgFixKndCd = info.oldValue;
    let curFixKndCd = ds_310.getCellData(row, colid);
    if (orgFixKndCd != curFixKndCd) {
      if (orgFixKndCd == "04") {
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      }
    }
  }
  if (colid == "vehclNo") {
    if (ds_310.getCellData(row, colid) != "" && ds_310.getCellData(row, colid) != olddata) {
      scwin.f_openCommPopUpGrid(row, "T");
    } else if (ds_310.getCellData(row, colid) == "") {
      ds_310.setCellData(row, "vehclNo", "");
    }
  }
  if (colid == "circulPartCd") {
    if (ds_310.getCellData(row, colid) != "" && ds_310.getCellData(row, colid) != olddata) {
      scwin.f_openCommPopUpGrid1(row, "T");
    } else if (ds_310.getCellData(row, colid) == "") {
      ds_310.setCellData(row, "circulPartCd", "");
      ds_310.setCellData(row, "partNm", "");
    }
  }
  if (colid == "fixWrkStndNo") {
    if (ds_310.getCellData(row, colid) != "" && ds_310.getCellData(row, colid) != olddata) {
      scwin.f_openCommPopUpGrid2(row, "T");
    } else if (ds_310.getCellData(row, colid) == "") {
      ds_310.setCellData(row, "fixWrkStndNo", "");
      ds_310.setCellData(row, "wrkStndNm", "");
    }
  }
  if (colid == "wrkPlanDt") {
    let wrkPlanDt = ds_310.getCellData(row, colid);
    let orgWrkPlanDt = olddata;
    let rowStatus = ds_310.getRowStatus(row);
    if (rowStatus == "C") {
      orgWrkPlanDt = "";
    }
    if (wrkPlanDt != orgWrkPlanDt) {
      wrkPlanDt = wrkPlanDt.trim();
      if (wrkPlanDt.length != 8) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_005, ["작업계획일자", "8"]);
        ds_310.setCellData(row, "wrkPlanDt", orgWrkPlanDt);
        return;
      }
      let startDate = $c.date.addDate($p, scwin.vCurDate, 1);
      if (!$c.gus.cfIsAfterDate($p, startDate, wrkPlanDt, false)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["작업계획일자[" + wrkPlanDt + "] ", "계획시작가능일자[" + startDate + "] 보다 이후 "]);
        if (rowStatus == "U") {
          ds_310.undoRow(row);
        } else if (rowStatus == "C") {
          ds_310.setCellData(row, "wrkPlanDt", "");
        }
        return;
      }
      let endDate = $c.date.addMonth($p, scwin.vCurDate, 1);
      if (!$c.gus.cfIsAfterDate($p, wrkPlanDt, endDate, false)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["계획일자[" + wrkPlanDt + "] ", "계획종료가능일자[" + endDate + "] 보다 이전 "]);
        if (rowStatus == "U") {
          ds_310.undoRow(row);
        } else if (rowStatus == "C") {
          ds_310.setCellData(row, "wrkPlanDt", "");
        }
        gr_310.setFocusedCell(row, "wrkPlanDt");
      }
    }
  }
};
scwin.ds_310_onrowpositionchange = function (rowIndex) {
  $c.gus.cfPrepareHidVal($p, ds_310, rowIndex, ["vehclNo", "eqCd", "prdyr", "lobranNm", "rglintInspExpireDt", "mntnInspExpireDt", "rglintChkExpireDt", "circulPartCd", "partNm", "fixWrkStndNo", "wrkStndNm"]);
};
scwin.sbm_retrieveCombo1_submitdone = function (e) {
  lux_homeClsCd.removeAll();
  for (let i = 0; i < co_ds_combo1.getRowCount(); i++) {
    lux_homeClsCd.addItem(co_ds_combo1.getCellData(i, "name"), co_ds_combo1.getCellData(i, "code"));
  }
  if (scwin.eqHomeClsCd == "TR") {
    lux_homeClsCd.setSelectedIndex(1);
  } else {
    lux_homeClsCd.setSelectedIndex(0);
  }
};
scwin.sbm_retrieveCombo1_submiterror = function (e) {};
scwin.sbm_retrieveCombo_submitdone = function (e) {
  lux_fixWrkPlCd.removeAll();
  for (let i = 0; i < co_ds_combo.getRowCount(); i++) {
    lux_fixWrkPlCd.addItem(co_ds_combo.getCellData(i, "name"), co_ds_combo.getCellData(i, "code"));
  }
  let fixWrkPlCdVal = $c.ses.getFixWrkPlCd();
  lux_fixWrkPlCd.setValue(fixWrkPlCdVal);
  if (lux_fixWrkPlCd.getSelectedIndex() == -1) {
    lux_fixWrkPlCd.setSelectedIndex(0);
  }
  if (scwin.homeClsCd != "") {
    lux_fixWrkPlCd.setValue(scwin.outbrRsnCd);
    if (scwin.homeClsCd == "TR") {
      scwin.f_Retrieve();
    } else if (scwin.homeClsCd == "LO") {
      scwin.f_Retrieve();
    }
  }
};
scwin.sbm_retrieveCombo_submiterror = function (e) {};
scwin.f_RunExcel = function () {
  $c.data.downloadGridViewExcel($p, gr_310, {
    "fileName": "작업계획목록.xlsx",
    "sheetName": "작업계획목록"
  });
};
scwin.f_addRow = function () {
  scwin.f_Addrow310();
};
scwin.f_deleteRow = function () {
  scwin.f_Del310();
};
scwin.f_undoRow = function () {
  let rowPos = ds_310.getRowPosition();
  if (rowPos > -1) {
    ds_310.undoRow(rowPos);
  }
};
scwin.f_btnSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_btnFieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계획일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_standDate',refEdDt:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_homeClsCd',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계획번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_fixPlanNo',style:'width: 150px;',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_planDcsnYn',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업계획 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_310',focusMode:'row',id:'gr_310',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'planDcsnYn',inputType:'text',style:'',value:'계획확정</br>여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixPlanNo',inputType:'text',style:'',value:'정비계획번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'장비번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanDt',inputType:'text',style:'',value:'작업계획일자',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixKndCd',inputType:'text',style:'',value:'정비종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfOutordClsCd',inputType:'text',style:'',value:'정비구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'text',style:'',value:'작업표준코드',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'작업표준명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartCd',inputType:'text',style:'',value:'수리순환품코드',width:'130'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'partNm',value:'수리순환품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'expireDt',value:'유효기간만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modReqDt',value:'수정요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modReqUserId',value:'수정요청자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fixWrkNo',value:'정비작업번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdyr',value:'년식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'lobranNm',value:'배정물류점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'startDate',value:'계획시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'fixWrkPlCd',value:'정비작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqCd',value:'장비코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rglintInspExpireDt',value:'정기검사만료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mntnInspExpireDt',value:'정밀검사만료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rglintChkExpireDt',value:'정기점검만료일자',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'planDcsnYn',inputType:'checkbox',style:'',value:'',width:'100',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixPlanNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',style:'',value:'',width:'100',maxLength:'9',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanDt',inputType:'calendar',style:'',value:'',width:'130',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixKndCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfOutordClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'textImage',style:'',value:'',width:'130',allowChar:'0-9',maxLength:'6',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartCd',inputType:'textImage',style:'',value:'',width:'130',allowChar:'0-9',maxLength:'6',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'partNm',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'expireDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modReqDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modReqUserId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fixWrkNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdyr',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'startDate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'fixWrkPlCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rglintInspExpireDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mntnInspExpireDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rglintChkExpireDt',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})