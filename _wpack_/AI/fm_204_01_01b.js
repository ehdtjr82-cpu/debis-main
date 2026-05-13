/*amd /AI/fm_204_01_01b.xml 49585 b0483e83d36286ffbf2468e6b32ca7f888a03330889764ebbf32d24cad297779 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrNo',name:'대출번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrNo',name:'대출번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'대출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_borr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'대출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrKndCd',name:'대출종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'대출거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'대출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDtCls',name:'만기기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'대출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'대출잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAcctCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'대출전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDt',name:'대출전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstRpayDt',name:'최초상환일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastRpayDt',name:'최종상환일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callableRpayDt',name:'중도상환일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'이자율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstIntDt',name:'최초이자일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certfNo',name:'증서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rpayAmt',name:'회당금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDel',name:'대출전표삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstDt',name:'최초상환일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_leaveAbsence',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'대출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaveAbsenceNo',name:'휴직기간순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaveAbsenceStDt',name:'휴직시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaveAbsenceEndDt',name:'휴직종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'대출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrNo',name:'대출번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadTmp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveBorr',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessBorrowRegistCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_borr","key":"IN_DS1"},{"id":"ds_leaveAbsence","key":"IN_DS2"},{"id":"fileUploadGDS","key":"IN_DS3"},{"id":"ds_fileList","key":"IN_DS4"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveBorr_submitdone','ev:submiterror':'scwin.sbm_saveBorr_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteBorr',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessBorrowDeleteCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_borr","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteBorr_submitdone','ev:submiterror':'scwin.sbm_deleteBorr_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveBorrowCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_borr","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_borr","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_leaveAbsence',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveLeaveAbsenceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_leaveAbsence","key":"OUT_DS1"},{"id":"ds_fileList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_leaveAbsence","key":"OUT_DS1"},{"id":"ds_fileList","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_leaveAbsence_submitdone','ev:submiterror':'scwin.sbm_leaveAbsence_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_rpayPlan',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessRpayPlanCreateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_rpayPlan_submitdone','ev:submiterror':'scwin.sbm_rpayPlan_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = "";
scwin.updateFlag = 0;
scwin.txt_srchEmpNo = "";
scwin.txt_empNo = "";
scwin.onpageload = function () {
  scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.f_header();
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_srchBorrClntNo, ed_srchBorrNo]);
};
scwin.f_header = function () {
  $c.gus.cfTurnCreateFlag($p, true);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [bUpdate, bDelete, bSave]);
  $c.gus.cfDisableObjects($p, [ed_borrNo, lc_borrKndCd, ed_borrClntNo, ed_borrDt, lc_dueDtCls, ed_borrAmt, ed_borrRamt, lc_borrAcctCd, ed_borrSlipDt, ed_intRt, ica_firstIntDt, txt_certfNo, ed_rpayAmt, ed_firstRpayDt, ica_firstDt, ica_lastRpayDt, ica_callableRpayDt]);
  ed_borrSlipDt.setReadOnly(true);
};
scwin.f_Create = async function () {
  ds_borr.removeAll();
  ds_leaveAbsence.removeAll();
  fileUploadGDS.removeAll();
  fileUploadTmp.removeAll();
  ds_fileList.removeAll();
  ds_borr.insertRow();
  gr_leaveAbsence.setReadOnly("grid", false);
  ds_borr.setCellData(ds_borr.getRowPosition(), "acctDeptCd", "01348");
  $c.gus.cfEnableObjects($p, [lc_borrKndCd, ed_borrClntNo, ed_borrDt, ed_borrAmt, lc_borrAcctCd, ed_firstRpayDt, ed_intRt, txt_certfNo, lc_dueDtCls, ica_firstIntDt]);
  $c.gus.cfDisableBtn($p, [bCreate, bUpdate]);
  $c.gus.cfEnableBtnOnly($p, [bSave]);
};
scwin.f_openSlipNo = function (sSlipNo) {
  if (!(sSlipNo == null || sSlipNo == "")) {
    $c.gus.cfShowSlipInfo($p, sSlipNo);
  }
};
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  let rtnList = null;
  let sCmdName = "";
  let code = txtCode.getValue();
  let name = "";
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    case '1':
      sCmdName = "retrieveClntList2";
      let param1 = ",,,025";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sFlag, null, null, null, null, param1, null, null, null, null);
      break;
    case '2':
      sCmdName = "retrieveBorrNoInfo";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sFlag, null, null, null, null, null, null, null, null, null);
      break;
    case '3':
      sCmdName = "retrieveClntList2";
      let param3 = ",,,025";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sFlag, null, null, null, null, param3, null, null, null, null);
      break;
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    txtCode.setValue(rtnList[0]);
    if (!(txtName == null)) {
      txtName.setValue(rtnList[1]);
    }
    if (select_code == '1') {
      scwin.txt_srchEmpNo = rtnList[4];
    } else if (select_code == '3') {
      scwin.txt_empNo = rtnList[4];
    }
  } else {
    txtCode.setValue("");
    if (!(txtName == null)) {
      txtName.setValue("");
    }
    if (select_code == '1') {
      scwin.txt_srchEmpNo = "";
    } else if (select_code == '3') {
      scwin.txt_empNo = "";
    }
  }
};
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() != orgObjCd.hidVal) {
    if (!(orgObjNm == null)) {
      orgObjNm.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
  } else {
    if (!(orgObjNm == null)) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
    orgObjCd.hidVal = "";
  }
};
scwin.f_CheckBankBookPopUp = function (orgObjCd, orgObjNm) {
  if (orgObjCd.getValue() != orgObjCd.hidVal) {
    orgObjNm.setValue("");
  }
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_BankBookPopUp("T");
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
  }
};
scwin.f_Retrieve = async function () {
  ds_borr.removeAll();
  ds_leaveAbsence.removeAll();
  fileUploadGDS.removeAll();
  fileUploadTmp.removeAll();
  ds_fileList.removeAll();
  gr_leaveAbsence.setReadOnly("grid", true);
  if (dma_condition.get("borrNo") == "" && dma_condition.get("borrClntNo") == "") {
    await $c.win.alert($p, "거래처 또는 대출번호를 입력하세요");
    return;
  }
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_retrieve_leaveAbsence = async function () {
  dma_search.set("borrNo", ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo"));
  await $c.sbm.execute($p, sbm_leaveAbsence);
};
scwin.f_Save = async function () {
  $c.gus.cfUploadFile($p, null, fileUploadTmp, "scwin.uploadComplete");
};
scwin.uploadComplete = async function () {
  if (fileUploadTmp.getRowCount() != 0) {
    fileUploadGDS.removeAll();
    for (let i = 0; i < fileUploadTmp.getRowCount(); i++) {
      fileUploadGDS.insertRow();
      fileUploadGDS.setCellData(i, "fileId", fileUploadTmp.getCellData(i, "fileId"));
      fileUploadGDS.setCellData(i, "fileName", fileUploadTmp.getCellData(i, "fileName"));
      fileUploadGDS.setCellData(i, "filePath", fileUploadTmp.getCellData(i, "filePath"));
      fileUploadGDS.setCellData(i, "fileSize", fileUploadTmp.getCellData(i, "fileSize"));
    }
    if (fileUploadGDS.getRowCount() != 0) {
      for (let i = 0; i < fileUploadGDS.getRowCount(); i++) {
        fileUploadGDS.setCellData(i, "borrNo", ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo"));
      }
    }
  }
  scwin.f_SaveProc();
};
scwin.f_SaveProc = async function () {
  if (ds_borr.getUpdatedIndex().length == 0 && fileUploadGDS.getUpdatedIndex().length == 0 && ds_leaveAbsence.getUpdatedIndex().length == 0 && ds_fileList.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let chk1 = await $c.gus.cfValidate($p, [gr_borr]);
  if (!chk1) {
    return;
  }
  let chk2 = await $c.gus.cfValidate($p, [gr_leaveAbsence]);
  if (!chk2) {
    return;
  }
  for (let i = 0; i < ds_leaveAbsence.getRowCount(); i++) {
    let sStDt = ds_leaveAbsence.getCellData(i, "leaveAbsenceStDt");
    let sEndDt = ds_leaveAbsence.getCellData(i, "leaveAbsenceEndDt");
    for (let j = i + 1; j < ds_leaveAbsence.getRowCount(); j++) {
      let nStDt = ds_leaveAbsence.getCellData(j, "leaveAbsenceStDt");
      let nEndDt = ds_leaveAbsence.getCellData(j, "leaveAbsenceEndDt");
      if (sStDt <= nStDt && sEndDt >= nStDt || sStDt <= nEndDt && sEndDt >= nEndDt) {
        await $c.gus.cfAlertMsg($p, "휴직기간이 중복되었습니다.");
        return;
      }
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult == true) {
    await $c.sbm.execute($p, sbm_saveBorr);
  }
};
scwin.f_Update = async function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [bUpdate]);
  gr_leaveAbsence.setReadOnly("grid", false);
  if (!(ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo") == null || ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo") == "")) {
    $c.gus.cfDisableObjects($p, [ed_borrNo, lc_borrKndCd, ed_borrClntNo, ed_borrDt, lc_dueDtCls, ed_borrAmt, ed_borrRamt, lc_borrAcctCd, ed_borrSlipDt, txt_certfNo, ed_rpayAmt, ed_firstRpayDt, ica_firstDt, ica_lastRpayDt, ica_callableRpayDt]);
    $c.gus.cfEnableObjects($p, [lc_borrKndCd, txt_certfNo, ica_firstIntDt, ed_intRt]);
    $c.gus.cfEnableBtnOnly($p, [bSave]);
    $c.gus.cfDisableBtn($p, [bCreate, bUpdate, bDelete]);
  } else {
    await $c.win.alert($p, "수정할 자료가 없습니다");
    return false;
  }
};
scwin.f_Delete = async function () {
  if (ds_borr.getRowCount() == 0 || ds_borr.getRowStatus(ds_borr.getRowPosition()) == "C") {
    await $c.win.alert($p, "조회후 삭제가능합니다.");
    return;
  } else if (ds_borr.getRowCount() == 0 || ds_borr.getRowStatus(ds_borr.getRowPosition()) == "C") {
    await $c.win.alert($p, "조회후 삭제가능합니다.");
    return;
  } else if (ds_borr.getRowCount() != 0 && ds_borr.getCellData(ds_borr.getRowPosition(), 'borrSlipDel') == 'N') {
    await $c.win.alert($p, "대출전표 삭제후  대출삭제가능합니다.");
    return;
  } else {
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_004);
    if (confirmResult == true) {
      ds_borr.setRowStatus(ds_borr.getRowPosition(), "U");
      await $c.sbm.execute($p, sbm_deleteBorr);
    }
  }
};
scwin.f_AddRow = async function () {
  if (ds_borr.getRowCount() == 0) {
    await $c.win.alert($p, "대출 조회후 추가 가능합니다.");
    return;
  } else {
    ds_leaveAbsence.insertRow();
    ds_leaveAbsence.setCellData(ds_leaveAbsence.getRowPosition(), "borrNo", ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo"));
  }
};
scwin.f_DeleteRow = function () {
  ds_leaveAbsence.removeRow(ds_leaveAbsence.getRowPosition());
};
scwin.f_CancelRow = function () {
  ds_leaveAbsence.undoRow(ds_leaveAbsence.getRowPosition());
};
scwin.f_DeleteFile = function () {
  ds_fileList.removeRow(ds_fileList.getRowPosition());
};
scwin.f_CancelFile = function () {
  ds_fileList.undoRow(ds_fileList.getRowPosition());
};
scwin.f_CreateRpayPlan = async function () {
  await $c.sbm.execute($p, sbm_rpayPlan);
};
scwin.f_OzReport = function () {
  let odiParam = new ODIParam("fm_204_01_01p");
  odiParam.add("borrNo", ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo"));
  let formParam = new FormParam();
  let viewerParam = new ViewerParam();
  viewerParam.add("viewer.zoom", "100");
  viewerParam.add("viewer.useprogressbar", "false");
  $c.gus.cfOZReport($p, "chb_printCheck", "chb_previewCheck", "/ac/fm/fundemployenterprise/fundemployent/fm_204_01_01p.ozr", odiParam, viewerParam, formParam);
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_openPopUp('2', ed_srchBorrNo, null, 'F');
};
scwin.bCreate_onclick = function (e) {
  scwin.f_Create();
};
scwin.bUpdate_onclick = function (e) {
  scwin.f_Update();
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.bDelete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.sbm_saveBorr_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_saveBorr_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_deleteBorr_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_004);
  scwin.f_Retrieve();
};
scwin.sbm_deleteBorr_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_borr.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfDisableObjects($p, [ed_borrNo, lc_borrKndCd, ed_borrClntNo, ed_borrDt, lc_dueDtCls, ed_borrAmt, ed_borrRamt, lc_borrAcctCd, ed_borrSlipDt, ed_intRt, ica_firstIntDt, txt_certfNo, ed_rpayAmt, ed_firstRpayDt, ica_firstDt, ica_lastRpayDt, ica_callableRpayDt]);
    $c.gus.cfEnableBtnOnly($p, [bCreate]);
    $c.gus.cfDisableBtn($p, [bSave, bUpdate, bDelete]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_borrNo, lc_borrKndCd, ed_borrClntNo, ed_borrDt, lc_dueDtCls, ed_borrAmt, ed_borrRamt, lc_borrAcctCd, ed_borrSlipDt, ed_intRt, ica_firstIntDt, txt_certfNo, ed_rpayAmt, ed_firstRpayDt, ica_firstDt, ica_lastRpayDt, ica_callableRpayDt]);
    $c.gus.cfEnableBtnOnly($p, [bCreate, bUpdate, bDelete]);
    $c.gus.cfDisableBtn($p, [bSave]);
    scwin.f_retrieve_leaveAbsence();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_leaveAbsence_submitdone = function (e) {};
scwin.sbm_leaveAbsence_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_rpayPlan_submitdone = function (e) {
  scwin.f_OzReport();
};
scwin.sbm_rpayPlan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ed_borrClntNo_onblur = function (e) {
  scwin.f_CheckPopUp(ed_borrClntNo, txt_clntNm, '1');
};
scwin.ds_borr_oncelldatachange = function (info) {
  let row = info.row;
  let colid = info.colId;
  if (colid == "borrAcctCd" || colid == "borrDt") {
    if (ds_borr.getCellData(row, "borrDt") != "") {
      let borrDt = ds_borr.getCellData(row, "borrDt");
      let now = new Date(borrDt.substring(0, 4), borrDt.substring(4, 6), borrDt.substring(6, 8));
      let oneMonthLater = new Date(now.setMonth(now.getMonth() + 1));
      let yy = oneMonthLater.getFullYear();
      let mm = oneMonthLater.getMonth();
      if (mm < 10) {
        mm = "0" + mm;
      }
      let dt1 = yy + "" + mm + "" + '25';
      let dt2 = yy + "" + mm + "" + '10';
      if (ds_borr.getCellData(row, "borrAcctCd") == "1") {
        ds_borr.setCellData(row, "firstRpayDt", dt1);
        ds_borr.setCellData(row, "firstIntDt", dt1);
      } else if (ds_borr.getCellData(row, "borrAcctCd") == "2") {
        ds_borr.setCellData(row, "firstRpayDt", dt2);
        ds_borr.setCellData(row, "firstIntDt", dt2);
      }
    }
  }
};
scwin.ds_borr_onrowpositionchange = function (info) {
  scwin.f_retrieve_leaveAbsence();
};
scwin.ds_leaveAbsence_oncelldatachange = async function (info) {
  let row = info.row;
  let colid = info.colId;
  let sStDt = ds_leaveAbsence.getCellData(row, "leaveAbsenceStDt");
  let sEndDt = ds_leaveAbsence.getCellData(row, "leaveAbsenceEndDt");
  if (colid == "leaveAbsenceStDt" || colid == "leaveAbsenceEndDt") {
    if (ds_leaveAbsence.getCellData(row, "leaveAbsenceStDt") != "" && ds_leaveAbsence.getCellData(row, "leaveAbsenceEndDt") != "") {
      if (!$c.gus.cfIsAfterDate($p, sStDt, sEndDt)) {
        await $c.gus.cfAlertMsg($p, "휴직시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
        ds_leaveAbsence.setCellData(row, "leaveAbsenceEndDt", "");
        return;
      }
    }
  }
};
scwin.ed_srchBorrClntNo_onblur = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, txt_srchClntNm, 'F');
};
scwin.txt_srchClntNm_onblur = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, txt_srchClntNm, 'F');
};
scwin.ed_borrSlipNo_ondblclick = function (e) {
  if (ed_borrSlipNo.getValue() != "") {
    $c.gus.cfShowSlipInfo($p, ed_borrSlipNo.getValue());
  }
};
scwin.gr_borr_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "borrSlipNo" && ds_borr.getCellData(rowIndex, "borrSlipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_borr.getCellData(rowIndex, "borrSlipNo"));
  }
};
scwin.gr_fileList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "fileName") {
    $c.gus.cfDownloadFile($p, ds_fileList.getCellData(rowIndex, "fileName"), ds_fileList.getCellData(rowIndex, "filePath"));
  }
};
scwin.f_CreateRpayPlan_onclick = function (e) {
  scwin.f_CreateRpayPlan();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_srchBorrClnt',selectID:'',codeId:'ed_srchBorrClntNo',popupID:'',validTitle:'',nameId:'txt_srchClntNm',style:''}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_srchBorrClntNo',class:'',ref:'data:ds_condition.borrClntNo',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_srchBorrNo',style:'',ref:'data:ds_condition.borrNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_borr',focusMode:'row',id:'gr_borr',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'대출번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrKndCd',inputType:'text',style:'',value:'대출종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrClntNo',inputType:'text',style:'',value:'대출거래처번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',style:'',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrDt',inputType:'text',style:'',value:'대출일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDtCls',inputType:'text',style:'',value:'만기기간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',style:'',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrAmt',inputType:'text',style:'',value:'대출금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'borrRamt',value:'대출잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'borrAcctCd',value:'계정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'borrSlipNo',value:'대출전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'borrSlipDt',value:'대출전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'intRt',value:'이자율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'firstRpayDt',value:'최초일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstIntDt',value:'최초이자일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'certfNo',value:'증서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rpayAmt',value:'회당금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstDt',value:'최초상환일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'lastRpayDt',value:'최종상환일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'callableRpayDt',value:'중도상환일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'borrSlipDel',value:'대출전표삭제여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrKndCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주택대출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'생활대출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrClntNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrDt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDtCls',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'60개월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'72개월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'72'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'borrRamt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'borrAcctCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사무직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기능직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'borrSlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'borrSlipDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'intRt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'firstRpayDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstIntDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'certfNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rpayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'lastRpayDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'callableRpayDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'borrSlipDel',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'borrAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'borrRamt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'rpayAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_borrClnt',codeId:'ed_borrClntNo',nameId:'txt_clntNm',popupID:'',selectID:'',style:'',validTitle:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_borrClntNo',style:'width: 150px;',ref:'data:ds_borr.borrClntNo',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_borrKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_borr.borrKndCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_borrAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_borr.borrAcctCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_borrDt',style:'',ref:'data:ds_borr.borrDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:' 대출금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_borrAmt',class:'tar',ref:'data:ds_borr.borrAmt',mandatory:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_certfNo',style:'width: 150px;',ref:'data:ds_borr.certfNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dueDtCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_borr.dueDtCls',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출잔액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrRamt',style:'width: 150px;',ref:'data:ds_borr.borrRamt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_borrNo',style:'width: 150px;',ref:'data:ds_borr.borrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_borrSlipDt',style:'',ref:'data:ds_borr.borrSlipDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_borrSlipNo',style:'width: 150px;',ref:'data:ds_borr.borrSlipNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원금회수 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이자회수 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최초일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_firstRpayDt',style:'',ref:'data:ds_borr.firstRpayDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_firstIntDt',style:'',ref:'data:ds_borr.firstIntDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회당금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_rpayAmt',style:'width: 150px;',ref:'data:ds_borr.rpayAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 이율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_intRt',style:'width: 100px;',ref:'data:ds_borr.intRt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'%',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초상환일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_firstDt',style:'',ref:'data:ds_borr.firstRpayDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종상환일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_lastRpayDt',style:'',ref:'data:ds_borr.lastRpayDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중도상환일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_callableRpayDt',style:'',ref:'data:ds_borr.callableRpayDt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'휴직기간 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_leaveAbsence',focusMode:'row',id:'gr_leaveAbsence',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'대출번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceNo',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceStDt',inputType:'text',style:'',value:'휴직시작일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceEndDt',inputType:'text',style:'',value:'휴직종료일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'비고',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceNo',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceStDt',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceEndDt',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부파일',style:'',tagname:'h3'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채무상환계획서'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bCreate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'bUpdate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bDelete',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})