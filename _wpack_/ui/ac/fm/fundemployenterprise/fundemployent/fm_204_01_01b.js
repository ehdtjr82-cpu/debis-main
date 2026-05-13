/*amd /ui/ac/fm/fundemployenterprise/fundemployent/fm_204_01_01b.xml 63617 5db1672a06220cae1597b41b1fbd2173e8ad97f2e771ca3e7d01e9e2906da26f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_borr',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_borr_onrowpositionchange','ev:oncelldatachange':'scwin.ds_borr_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrKndCd',name:'대출종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'대출거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'대출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDtCls',name:'만기기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'대출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAcctCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'이자율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstIntDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certfNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rpayAmt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstRpayDt',name:'최초일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastRpayDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callableRpayDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstRpayDt2',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstDt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDel',name:'name43',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_leaveAbsence',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_leaveAbsence_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaveAbsenceNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaveAbsenceStDt',name:'휴직시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaveAbsenceEndDt',name:'휴직종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileUploadGDS',repeatNode:'map',saveRemovedData:'false',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileUploadTmp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveBorr',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessBorrowRegistCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_borr","key":"IN_DS1"},{"action":"modified","id":"ds_leaveAbsence","key":"IN_DS2"},{"id":"ds_fileUploadGDS","key":"IN_DS3"},{"action":"modified","id":"ds_fileList","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBorr_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteBorr',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessBorrowDeleteCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_borr","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteBorr_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveBorrowCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_borr","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_borr","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_leaveAbsence',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveLeaveAbsenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_leaveAbsence","key":"OUT_DS1"},{"id":"ds_fileList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_leaveAbsence","key":"OUT_DS1"},{"id":"ds_fileList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_rpayPlan',action:'/ac.fm.fundemployenterprise.fundemployent.ProcessRpayPlanCreateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_rpayPlan_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.updateFlag = 0;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_bUpdate, btn_bDelete, btn_bSave, udc_gridBottom, udc_fileBottom]);
  btn_fileSave.hide("");
  $c.gus.cfDisableObjects($p, [ed_borrNo, acb_borrKndCd, ed_srchEmpNo, ed_clntNm, ed_empNo, ed_borrClntNo, ed_borrDt, acb_dueDtCls, ed_borrAmt, ed_borrRamt, acb_borrAcctCd, ed_borrSlipDt, ed_intRt, ed_firstIntDt, ed_certfNo, ed_rpayAmt, ed_firstRpayDt, ed_firstDt, ed_lastRpayDt, ed_callableRpayDt, img_borrClntNo]);

  // ed_borrSlipDt.readOnly = true;

  acb_dueDtCls.setValue("");
  acb_borrKndCd.setValue("");
  acb_borrAcctCd.setValue("");
  chb_printCheck.setValue("1");
  chb_previewCheck.setValue("1");
};

//-------------------------------------------------------------------------
// 신규 : 신규입력화면으로 초기화한다.
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  ds_borr.removeAll();
  ds_leaveAbsence.removeAll();
  ds_fileUploadGDS.removeAll();
  ds_fileUploadTmp.removeAll();
  ds_fileList.removeAll();
  var row = ds_borr.insertRow();
  ds_borr.setRowPosition(row);
  gr_leaveAbsence.setColumnReadOnly("leaveAbsenceStDt", false);
  gr_leaveAbsence.setColumnReadOnly("leaveAbsenceEndDt", false);
  gr_leaveAbsence.setColumnReadOnly("summary", false);
  ds_borr.setCellData(0, "acctDeptCd", "01348");
  ds_borr.setCellData(0, "borrAmt", 0);
  ds_borr.setCellData(0, "rpayAmt", 0);
  ds_borr.setCellData(0, "intRt", 0);
  ds_borr.setCellData(0, "borrRamt", 0);
  $c.gus.cfEnableObjects($p, [acb_borrKndCd, ed_borrClntNo, ed_borrDt, ed_borrAmt, acb_borrAcctCd, ed_firstRpayDt, ed_intRt, ed_certfNo, acb_dueDtCls, ed_firstIntDt, ed_clntNm, img_borrClntNo]);
  $c.gus.cfDisableBtn($p, [btn_bCreate, btn_bUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btn_bSave, udc_gridBottom, udc_fileBottom]);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openSlipNo = function (sSlipNo) {
  // 전표 POPUP
  if (!(sSlipNo == null || sSlipNo == "")) $c.gus.cfShowSlipInfo($p, sSlipNo);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  var rtnList = null;
  var sCmdName = "";
  var code = txtCode.getValue();
  var Name = "";
  if (txtName == null) {
    Name = "";
  } else {
    Name = txtName.getValue();
  }
  switch (select_code) {
    // 조회조건 대출거래처  PopUp 호출
    case '1':
      ed_srchEmpNo.setValue("");
      sCmdName = "retrieveClntList2";
      var param = ",,,025";
      rtnList = udc_retrieveClntList.cfCommonPopUp(scwin.udc_retrieveClntList_callBack, code, Name, sFlag, null, null, null, null, param, null, null, null, null); // 대출거래처
      break;
    // 대출번호 PopUp 호출
    case '2':
      sCmdName = "retrieveBorrNoInfo";
      rtnList = udc_retrieveBorrNoInfo.cfCommonPopUp(scwin.udc_retrieveBorrNoInfo_callBack, code, Name, sFlag, null, null, null, null, null, null, null, null, null); // 대출번호
      break;
    // 대출거래처  PopUp 호출
    case '3':
      ed_empNo.setValue("");
      sCmdName = "retrieveClntList2";
      var param = ",,,025";
      rtnList = udc_retrieveClntList2.cfCommonPopUp(scwin.udc_retrieveClntList2_callBack, code, Name, sFlag, null, null, null, null, param, null, null, null, null); // 대출거래처
      break;
  }
};
scwin.udc_retrieveClntList_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchBorrClntNo.setValue(rtnList[0]); // 코드

    if (!(ed_srchClntNm.getValue() == null)) ed_srchClntNm.setValue(rtnList[1]); // 코드명
    ed_srchClntNm.options.hidVal = rtnList[0]; // 코드
    ed_srchEmpNo.setValue(rtnList[4]); // 코드
  } else {
    ed_srchBorrClntNo.setValue(""); // 코드
    if (!(ed_srchClntNm.getValue() == null)) ed_srchClntNm.setValue(""); // 코드명
    ed_srchBorrClntNo.options.hidVal = ""; // 코드
    ed_srchEmpNo.setValue(""); // 코드
  }
};
scwin.udc_retrieveBorrNoInfo_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchBorrNo.setValue(rtnList[0]); // 코드
    ed_srchBorrNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_srchBorrNo.setValue(""); // 코드
    ed_srchBorrNo.options.hidVal = ""; // 코드
  }
};
scwin.udc_retrieveClntList2_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_borrClntNo.setValue(rtnList[0]); // 코드

    if (!(ed_clntNm.getValue() == null)) ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_borrClntNo.options.hidVal = rtnList[0]; // 코드
    ed_empNo.setValue(rtnList[4]); // 코드
  } else {
    ed_borrClntNo.setValue(""); // 코드
    if (!(ed_clntNm.getValue() == null)) ed_clntNm.setValue(""); // 코드명
    ed_borrClntNo.options.hidVal = ""; // 코드
    ed_empNo.setValue(""); // 코드
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
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
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ds_borr.removeAll();
  ds_leaveAbsence.removeAll();
  ds_fileUploadGDS.removeAll();
  ds_fileUploadTmp.removeAll();
  ds_fileList.removeAll();
  gr_leaveAbsence.setColumnReadOnly("leaveAbsenceStDt", true);
  gr_leaveAbsence.setColumnReadOnly("leaveAbsenceEndDt", true);
  gr_leaveAbsence.setColumnReadOnly("summary", true);
  if (dma_condition.get("borrNo") == "" && dma_condition.get("borrClntNo") == "") {
    await $c.win.alert($p, "거래처 또는 대출번호를 입력하세요");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_retrieve_leaveAbsence = function () {
  // ds_search.UseChangeInfo = false;
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_borr.getRowPosition())) {
    row = ds_borr.getRowPosition();
  }
  dma_search.set("borrNo", ds_borr.getCellData(row, "borrNo"));
  $c.sbm.execute($p, sbm_leaveAbsence);
};

//-------------------------------------------------------------------------
// 저장 : 
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  // var formObj = document.frm;
  // cfUploadFile(formObj, fileUploadTmp, "uploadComplete");

  let fileList = udc_fileUpload.getData();
  if (fileList.length == 0) {
    scwin.uploadComplete();
  } else {
    udc_fileUpload.startFileUpload();
  }
};
scwin.uploadComplete = function () {
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_borr.getRowPosition())) {
    row = ds_borr.getRowPosition();
  }
  scwin.f_SaveProc();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_SaveProc = async function () {
  if (ds_borr.getModifiedIndex().length <= 0 && ds_fileUploadGDS.getModifiedIndex().length <= 0 && ds_leaveAbsence.getModifiedIndex().length <= 0 && ds_fileList.getModifiedIndex().length <= 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  debugger;

  // 필수항목 체크
  if (!(await $c.gus.cfValidate($p, [gr_borr]))) {
    return;
  }
  for (let i = 0; i < ds_borr.getTotalRow(); i++) {
    if (ds_borr.getCellData(i, "borrAmt") == 0) {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이터에서 대출금액은 다음 문자가 올 수 없습니다. 0");
      return;
    } else if (ds_borr.getCellData(i, "intRt") == 0) {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이터에서 이자율은 다음 문자가 올 수 없습니다. 0");
      return;
    }
  }
  if (!(await $c.gus.cfValidate($p, [gr_leaveAbsence]))) {
    return;
  }
  for (var i = 0; i < ds_leaveAbsence.getTotalRow(); i++) {
    var sStDt = ds_leaveAbsence.getCellData(i, "leaveAbsenceStDt");
    var sEndDt = ds_leaveAbsence.getCellData(i, "leaveAbsenceEndDt");
    for (var j = i + 1; j < ds_leaveAbsence.getTotalRow(); j++) {
      var nStDt = ds_leaveAbsence.getCellData(j, "leaveAbsenceStDt");
      var nEndDt = ds_leaveAbsence.getCellData(j, "leaveAbsenceEndDt");
      if (sStDt <= nStDt && sEndDt >= nStDt || sStDt <= nEndDt && sEndDt >= nEndDt) {
        await $c.gus.cfAlertMsg($p, "휴직기간이 중복되었습니다.");
        return;
      }
    }
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    let fileList = udc_fileUpload.getData();
    for (let idx in fileList) {
      let status = fileList[idx].status;
      if (status == "Completed") {
        let row = ds_fileUploadGDS.insertRow();
        ds_fileUploadGDS.setRowJSON(row, fileList[idx], true);
        let fileName = fileList[idx].fileName;
        let filePath = fileList[idx].filePath;
        let fileSize = fileList[idx].fileSize;
        if ($c.gus.cfIsNull($p, fileName)) {
          ds_fileUploadGDS.setCellData(row, "fileName", fileList[idx].ORIGIN_FILE_NM);
        }
        if ($c.gus.cfIsNull($p, filePath)) {
          ds_fileUploadGDS.setCellData(row, "filePath", fileList[idx].FILE_STORED_PATH + fileList[idx].STORED_FILE_NM);
        }
        if ($c.gus.cfIsNull($p, fileSize)) {
          ds_fileUploadGDS.setCellData(row, "fileSize", fileList[idx].FILE_SIZE);
        }
        ds_fileUploadGDS.setCellData(row, "borrNo", ds_borr.getCellData(ds_borr.getRowPosition(), "borrNo"));
      }
    }
    $c.sbm.execute($p, sbm_saveBorr);
  }
};

//-------------------------------------------------------------------------
// 수정 : 
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_bUpdate]);
  gr_leaveAbsence.setColumnReadOnly("leaveAbsenceStDt", false);
  gr_leaveAbsence.setColumnReadOnly("leaveAbsenceEndDt", false);
  gr_leaveAbsence.setColumnReadOnly("summary", false);
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_borr.getRowPosition())) {
    row = ds_borr.getRowPosition();
  }
  if (!(ds_borr.getCellData(row, "borrNo") == null || ds_borr.getCellData(row, "borrNo") == "")) {
    $c.gus.cfDisableObjects($p, [ed_borrNo, acb_borrKndCd, ed_srchEmpNo, ed_clntNm, ed_empNo, ed_borrClntNo, ed_borrDt, acb_dueDtCls, ed_borrAmt, ed_borrRamt, acb_borrAcctCd, ed_borrSlipDt, ed_certfNo, ed_rpayAmt, ed_firstRpayDt, ed_firstDt, ed_lastRpayDt, ed_callableRpayDt, ed_rpayAmt, ed_firstDt, ed_lastRpayDt, ed_callableRpayDt, img_borrClntNo]);
    $c.gus.cfEnableObjects($p, [acb_borrKndCd, ed_certfNo, ed_firstIntDt, ed_intRt]);
    $c.gus.cfEnableBtnOnly($p, [btn_bSave, udc_gridBottom, udc_fileBottom]);
    $c.gus.cfDisableBtn($p, [btn_bCreate, btn_bUpdate, btn_bDelete]);
  } else {
    await $c.win.alert($p, "수정할 자료가 없습니다");
    return false;
  }
};

//-------------------------------------------------------------------------
// 삭제 : 조회된 데이터를 삭제요청한다.
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_borr.getRowPosition())) {
    row = ds_borr.getRowPosition();
  }
  if (ds_borr.getTotalRow() == 0 || ds_borr.getRowStatus(row) == "C") {
    await $c.win.alert($p, "조회후 삭제가능합니다.");
    return;
  } else if (ds_borr.getTotalRow() != 0 && ds_borr.getCellData(row, 'borrSlipDel') == 'N') {
    await $c.win.alert($p, "대출전표 삭제후  대출삭제가능합니다.");
    return;
  } else {
    if ((await $c.win.confirm($p, MSG_CM_CRM_004)) == true) {
      ds_borr.modifyRowStatus(row, "D");
      $c.sbm.execute($p, sbm_deleteBorr);
    }
  }
};

//-------------------------------------------------------------------------
// 휴직기간 행 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (ds_borr.getTotalRow() == 0) {
    await $c.win.alert($p, "대출 조회후 추가 가능합니다.");
    return;
  } else {
    var newRow = ds_leaveAbsence.insertRow();
    var row = 0;
    if (!$c.gus.cfIsNull($p, ds_borr.getRowPosition())) {
      row = ds_borr.getRowPosition();
    }
    ds_leaveAbsence.setCellData(newRow, "borrNo", ds_borr.getCellData(row, "borrNo"));
  }
};
scwin.f_CreateRpayPlan = function () {
  $c.sbm.execute($p, sbm_rpayPlan);
};
scwin.f_OzReport = async function () {
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_borr.getRowPosition())) {
    row = ds_borr.getRowPosition();
  }
  var mode = "";
  if (chb_printCheck.getValue() == "1") {
    mode = "print";
  }
  if (chb_previewCheck.getValue() == "1") {
    mode = "preview";
  }
  let data = {
    reportName: "/ac/fm/fundemployenterprise/fundemployent/fm_204_01_01p.ozr",
    odiParam: {
      borrNo: ds_borr.getCellData(row, "borrNo")
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: mode
    },
    formParam: {}
  };
  if (mode == "print") {
    let opts = {
      "type": 'print',
      "printMode": 'view'
    };
    $c.ext.printOzReport($p, data, opts);
  } else {
    let opts = {
      "type": 'viewer',
      "printMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  }

  // let opts = {
  //     id: "ozReportPopup",
  //     popupName: "오즈 리포트",
  //     modal: true,
  //     type: "browserPopup",
  //     width: 1000,
  //     height: 600,
  //     title: "오즈 리포트"
  // };

  // await $c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.sbm_saveBorr_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    udc_fileUpload.setData([]);
    scwin.f_Retrieve();
  }
};
scwin.sbm_deleteBorr_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
    scwin.f_Retrieve();
  }
};
scwin.sbm_rpayPlan_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    scwin.f_OzReport();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var rowCnt = ds_borr.getTotalRow();
    ed_totalRow1.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      $c.gus.cfDisableObjects($p, [ed_borrNo, acb_borrKndCd, ed_srchEmpNo, ed_clntNm, ed_empNo, ed_borrClntNo, ed_borrDt, acb_dueDtCls, ed_borrAmt, ed_borrRamt, acb_borrAcctCd, ed_borrSlipDt, ed_intRt, ed_firstIntDt, ed_certfNo, ed_rpayAmt, ed_firstRpayDt, ed_firstDt, ed_lastRpayDt, ed_callableRpayDt, img_borrClntNo]);
      $c.gus.cfEnableBtnOnly($p, [btn_bCreate]);
      $c.gus.cfDisableBtn($p, [btn_bSave, btn_bUpdate, btn_bDelete, udc_gridBottom, udc_fileBottom]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_borrNo, acb_borrKndCd, ed_srchEmpNo, ed_clntNm, ed_empNo, ed_borrClntNo, ed_borrDt, acb_dueDtCls, ed_borrAmt, ed_borrRamt, acb_borrAcctCd, ed_borrSlipDt, ed_intRt, ed_firstIntDt, ed_certfNo, ed_rpayAmt, ed_firstRpayDt, ed_firstDt, ed_lastRpayDt, ed_callableRpayDt, img_borrClntNo]);
      ds_borr.setRowPosition(0);
      for (let i = 0; i < ds_borr.getTotalRow(); i++) {
        ds_borr.setCellData(i, "firstRpayDt2", ds_borr.getCellData(i, "firstRpayDt"));
        ds_borr.modifyRowStatus(i, "R");
      }
      $c.gus.cfEnableBtnOnly($p, [btn_bCreate, btn_bUpdate, btn_bDelete]);
      $c.gus.cfDisableBtn($p, [btn_bSave, udc_gridBottom, udc_fileBottom]);
      scwin.f_retrieve_leaveAbsence();
    }
  }
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_retrieveClntList_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_retrieveBorrNoInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_srchBorrNo, null, 'F');
};
scwin.udc_retrieveClntList2_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_borrClntNo, ed_clntNm, 'F');
};
scwin.udc_retrieveClntList2_onblurCodeEvent = function (e) {
  ed_empNo.setValue("");
  scwin.f_CheckPopUp(ed_borrClntNo, ed_clntNm, '3'); // 1?
};
scwin.ds_borr_onrowpositionchange = function (info) {
  scwin.f_retrieve_leaveAbsence();
};
scwin.ds_borr_oncelldatachange = function (info) {
  let colid = info.colID;
  let row = info.rowIndex;

  // 계정구분 및 대출일자 변경시  원금회수 최초일자,이자회수 최초일자 계산
  if (colid == "borrAcctCd" || colid == "borrDt") {
    if (ds_borr.getCellData(row, "borrDt") != "") {
      var borrDt = ds_borr.getCellData(row, "borrDt");
      var now = new Date(borrDt.substring(0, 4), borrDt.substring(4, 6), borrDt.substring(6, 8)); // 현재 날짜 및 시간
      var oneMonthLater = new Date(now.setMonth(now.getMonth() + 1)); // 한달 후
      var yy = oneMonthLater.getFullYear();
      var mm = oneMonthLater.getMonth();
      if (mm < 10) {
        mm = "0" + mm;
      }
      var dt1 = yy + "" + mm + "" + '25'; //사무직 급여일
      var dt2 = yy + "" + mm + "" + '10'; //기능직 급여일

      if (ds_borr.getCellData(row, "borrAcctCd") == "1") {
        //사무직 : 대출일 다음달 급여일(25일)
        ds_borr.setCellData(row, "firstRpayDt", dt1);
        ds_borr.setCellData(row, "firstIntDt", dt1);
      } else if (ds_borr.getCellData(row, "borrAcctCd") == "2") {
        //기능직 : 대출일 다음달 급여일(10일)
        ds_borr.setCellData(row, "firstRpayDt", dt2);
        ds_borr.setCellData(row, "firstIntDt", dt2);
      }
    }
  }
  if (colid == "firstRpayDt") {
    ds_borr.setCellData(row, "firstRpayDt2", ds_borr.getCellData(row, "firstRpayDt"));
  }
};
scwin.ds_leaveAbsence_oncelldatachange = async function (info) {
  let colid = info.colID;
  let row = info.rowIndex;
  var sStDt = ds_leaveAbsence.getCellData(row, "leaveAbsenceStDt");
  var sEndDt = ds_leaveAbsence.getCellData(row, "leaveAbsenceEndDt");
  if (colid == "leaveAbsenceStDt" || colid == "leaveAbsenceEndDt") {
    if (ds_leaveAbsence.getCellData(row, "leaveAbsenceStDt") != "" && ds_leaveAbsence.getCellData(row, "leaveAbsenceEndDt") != "") {
      if (WebSquare.date.dateDiff(sStDt, sEndDt) < 0) {
        await $c.gus.cfAlertMsg($p, "휴직시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
        ds_leaveAbsence.setCellData(row, "leaveAbsenceEndDt", "");
        return false;
      }
    }
  }
};
scwin.ed_borrSlipNo_ondblclick = function (e) {
  if (ed_borrSlipNo.getValue() != "") {
    $c.gus.cfShowSlipInfo($p, ed_borrSlipNo.getValue());
  }
};
scwin.gr_borr_oncelldblclick = function (Row, columnIndex, columnId) {
  if (columnId == "borrSlipNo" && ds_borr.getCellData(Row, "borrSlipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_borr.getCellData(Row, "borrSlipNo"));
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_bCreate_onclick = function (e) {
  scwin.f_Create();
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
scwin.btn_oz_onclick = function (e) {
  scwin.f_CreateRpayPlan();
};
scwin.borrKndCdFormat = function (value) {
  if (value == "1") {
    return "주택대출";
  } else if (value == "2") {
    return "생활대출";
  } else {
    return "";
  }
};
scwin.dueDtClsFormat = function (value) {
  if (value == "60") {
    return "60개월";
  } else if (value == "72") {
    return "72개월";
  } else {
    return "";
  }
};
scwin.borrAcctCdFormat = function (value) {
  if (value == "1") {
    return "사무직";
  } else if (value == "2") {
    return "기능직";
  } else {
    return "";
  }
};
scwin.gr_fileList_oncelldblclick = function (Row, columnIndex, Colid) {
  if (Colid == "fileName") {
    $c.gus.cfDownloadFile($p, ds_fileList.getCellData(Row, "fileName"), ds_fileList.getCellData(Row, "filePath"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList2',codeId:'ed_srchBorrClntNo',validTitle:'거래처',nameId:'ed_srchClntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',refDataCollection:'dma_condition',maxlengthName:'30',code:'borrClntNo',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent',btnId:'img_srchBorrClntNo',id:'udc_retrieveClntList','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveClntList_onviewchangeNameEvent'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_srchEmpNo',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveBorrNoInfo',codeId:'ed_srchBorrNo',validTitle:'대출번호',nameId:'',style:'',objTypeCode:'data',allowCharCode:'0-9',refDataCollection:'dma_condition',maxlengthName:'30',mandatoryCode:'true',hideName:'true',id:'udc_retrieveBorrNoInfo',code:'borrNo','ev:onclickEvent':'scwin.udc_retrieveBorrNoInfo_onclickEvent',maxlengthCode:'5'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''}},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_borr',focusMode:'row',id:'gr_borr',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_borr_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'대출번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'대출종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'대출거래처번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'대출일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'만기기간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'대출금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'대출잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'계정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'대출전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'대출전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'이자율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'최초일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'최초이자일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'증서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'회당금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column70',value:'최초상환일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column73',value:'최종상환일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column82',value:'중도상환일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column85',value:'대출전표삭제여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrKndCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.borrKndCdFormat',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrClntNo',inputType:'text',style:'',value:'',width:'130',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDtCls',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.dueDtClsFormat',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###',readOnly:'true',notAllowed:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'borrRamt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'borrAcctCd',value:'',displayMode:'label',readOnly:'true',displayFormatter:'scwin.borrAcctCdFormat',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:';text-decoration:underline;',id:'borrSlipNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'borrSlipDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'intRt',value:'',displayMode:'label',dataType:'float',excelCellType:'number',displayFormat:'#,##0.000',readOnly:'true',mandatory:'true',notAllowed:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'firstRpayDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstIntDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'certfNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rpayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'lastRpayDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'callableRpayDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'borrSlipDel',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'0',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###',expression:'sum(\'borrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'0',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###',expression:'sum(\'borrRamt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###',defaultValue:'0',expression:'sum(\'rpayAmt\')'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList2',codeId:'ed_borrClntNo',validTitle:'거래처',nameId:'ed_clntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',refDataCollection:'ds_borr',maxlengthName:'30',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',btnId:'img_borrClntNo',id:'udc_retrieveClntList2',code:'borrClntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_retrieveClntList2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList2_onblurCodeEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_empNo',style:'width: 150px;',ref:'data:ds_borr.empNo'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_borrKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_borr.borrKndCd',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주택대출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생활대출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_borrAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_borr.borrAcctCd',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사무직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기능직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대출일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_borrDt',style:'',mandatory:'true',title:'대출일',ref:'data:ds_borr.borrDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:' 대출금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_borrAmt',class:'tar',allowChar:'0-9',dataType:'float',displayFormat:'#,###',maxlength:'13',initValue:'0',mandatory:'true',title:'대출금액',ref:'data:ds_borr.borrAmt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_certfNo',style:'width: 150px;',allowChar:'0-9',ref:'data:ds_borr.certfNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_dueDtCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_borr.dueDtCls',mandatory:'true',title:'만기일',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'60개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'72개월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'72'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출잔액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrRamt',style:'width: 150px;',allowChar:'0-9',dataType:'float',displayFormat:'#,###',maxlength:'13',initValue:'0',ref:'data:ds_borr.borrRamt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrNo',style:'width: 150px;',allowChar:'0-9',ref:'data:ds_borr.borrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_borrSlipDt',style:'',ref:'data:ds_borr.borrSlipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_borrSlipNo',style:'width: 150px;color:#0669B2;text-decoration:;',allowChar:'0-9',ref:'data:ds_borr.borrSlipNo','ev:ondblclick':'scwin.ed_borrSlipNo_ondblclick',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원금회수 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이자회수 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최초일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_firstRpayDt',style:'',title:'최초일자',mandatory:'true',ref:'data:ds_borr.firstRpayDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_firstIntDt',style:'',ref:'data:ds_borr.firstIntDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회당금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_rpayAmt',style:'width: 150px;',allowChar:'0-9',dataType:'float',displayFormat:'#,###',maxlength:'13',initValue:'0',ref:'data:ds_borr.rpayAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 이율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_intRt',style:'width: 100px;',dataType:'float',maxlength:'3.4',ref:'data:ds_borr.intRt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'%',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초상환일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_firstDt',style:'',ref:'data:ds_borr.firstRpayDt2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종상환일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_lastRpayDt',style:'',ref:'data:ds_borr.lastRpayDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중도상환일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_callableRpayDt',style:'',ref:'data:ds_borr.callableRpayDt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'휴직기간 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_leaveAbsence',focusMode:'row',id:'gr_leaveAbsence',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'대출번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'휴직시작일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'휴직종료일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'비고',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceNo',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceStDt',inputType:'calendar',style:'',value:'',width:'120',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaveAbsenceEndDt',inputType:'calendar',style:'',value:'',width:'120',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',gridID:'gr_leaveAbsence',rowAddUserAuth:'C',rowDelUserAuth:'D',id:'udc_gridBottom',rowAddFunction:'scwin.f_AddRow'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{id:'fileGroup',class:'file-wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',escape:'false',id:'',label:'첨부파일(저장전)',style:'',tagname:'h3'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{receiptYn:'N',maxFileCount:'500',maxFileSize:'52428800',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf','ev:onFileUploadDone':'scwin.uploadComplete',explainYn:'N',style:'',totalFileSize:'2009715200',id:'udc_fileUpload',class:'',typeYn:'N',subDir:'FM/fundemployenterprise/borrEvidFile/',saveButtonId:'btn_fileSave'}}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부파일 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fileList',focusMode:'row',id:'gr_fileList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15','ev:oncelldblclick':'scwin.gr_fileList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'대출번호',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'파일명',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'',width:'60',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileName',inputType:'text',style:';text-decoration:underline;',value:'',width:'130',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'N',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',gridID:'gr_fileList',id:'udc_fileBottom',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_oz',style:';margin-left:15px;',type:'button',userAuth:'P','ev:onclick':'scwin.btn_oz_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채무상환계획서'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bCreate',style:'',type:'button','ev:onclick':'scwin.btn_bCreate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_bUpdate',style:'',type:'button','ev:onclick':'scwin.btn_bUpdate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bSave',style:'',type:'button','ev:onclick':'scwin.btn_bSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bDelete',style:'',type:'button','ev:onclick':'scwin.btn_bDelete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})