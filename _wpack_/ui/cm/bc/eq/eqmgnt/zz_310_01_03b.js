/*amd /ui/cm/bc/eq/eqmgnt/zz_310_01_03b.xml 38866 87ccb511cbe2b4d4c98de00e12fe420e02bf05519c96f1998122f5c08cf262d9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_logisticsHeavyEquip',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_logisticsHeavyEquip_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqHomeClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprtHhCnt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csmpRtStd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo1',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNm1',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo2',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNm2',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo3',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNm3',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDelYn',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqChgDt',name:'name30',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveLogisticsHeavyEquip',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_logisticsHeavyEquip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveLogisticsHeavyEquip_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchlogisticsHeavyEquip',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_logisticsHeavyEquip","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchlogisticsHeavyEquip_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 수정 불가능 로직
//전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.parentFrame = $c.win.getParent($p);
scwin.pos_groupCode = 0;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vSysAdminYn = scwin.login.sysAdminYn;
// scwin.vEqCd                     = ""
scwin.vEqCd = scwin.parentFrame.scwin.eqCd == null ? "" : scwin.parentFrame.scwin.eqCd;
scwin.curDate = WebSquare.date.getCurrentServerDate();

//hidden
scwin.txt_clntNoValChk = "";
scwin.txt_eqCd = "0";
scwin.txt_qryCond = "0";
scwin.txt_sysCls = "0";
scwin.txt_payIdx = "";
scwin.txt_createYn = "0";
scwin.txt_updateYn = "0";
scwin.txt_rowCount = "";
scwin.txt_saveType = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "gr_logisticsHeavyEquip:eqHomeClsCd"
  }, {
    grpCd: "ZZ202",
    compID: "acb_eqClssCd",
    opt: {
      'range': '2,DS'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  acb_sysCls.setValue("LO");
};
scwin.onUdcCompleted = function () {
  scwin.f_ContentsDisable();
  acb_qryCond.setValue("2");
  scwin.txt_payIdx = 1;

  //부모에서도 파라미터로 해당 전역변수에 넣음.
  // if(scwin.vEqCd.trim()!= ""){
  //     lux_qryCond.Index = 1;
  //     ed_qryCntn.setValue(scwin.vEqCd);

  //     scwin.f_Retrieve();

  // }

  if (scwin.vSysAdminYn == "1" || scwin.vUserHomeClsCd == "DS") {
    $c.gus.cfDisableBtn($p, [b_Cancel, btn_save]);
  } else {
    $c.gus.cfDisableAllBtn($p);
  }
  ed_qryCntn.focus();
};

//-------------------------------------------------------------------------
// 물류자차위수탁 장비 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.txt_saveType = 2; // 0:신규, 1:수정, 2:조회

  if (ed_qryCntn.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_011.replace("%1", "검색어").replace("%2", "글자(숫자) 한(두)"));
    ed_qryCntn.focus();
    return false;
  }
  let vEqDelYn = "0";
  if (cbx_eqDelYn.getValue() == "1") {
    vEqDelYn = "1";
  }
  let condition = "?";
  condition += "sysCls=" + acb_sysCls.getValue() + "&qryCond=" + acb_qryCond.getValue() + "&qryCntn=" + ed_qryCntn.getValue() + "&eqDelYn=" + vEqDelYn;
  sbm_searchlogisticsHeavyEquip.action = "/cm.bc.eq.eqmgnt.cmd.RetrieveLogisticsHeavyEquipEquipmentListCMD.do" + condition;
  $c.sbm.execute($p, sbm_searchlogisticsHeavyEquip);
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [b_Cancel, btn_save]);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);

  // 링크 이미지 활성화
  $c.gus.cfEnableObj($p, logisEqPosWrkPl_search, true); //작업장조회 이미지
  $c.gus.cfEnableObj($p, drv1_search, true); // 정기사1 조회 이미지
  $c.gus.cfEnableObj($p, drv2_search, true); // 정기사2조회 이미지
  $c.gus.cfEnableObj($p, drv3_search, true); // 정기사3 조회 이미지
  $c.gus.cfEnableObj($p, ica_eqChgDt, true); // 장비변경일자 조회 이미지

  $c.gus.cfEnableObj($p, rd_eqDelYn, false); // 장비사용여부

  // cfEnableKeyData함수로 disable 안되는 공통udc cd 별도 관리
  $c.gus.cfEnableObj($p, ed_logisEqPosWrkPlCd, true);
  $c.gus.cfEnableObj($p, ed_drvEmpNo1, true);
  $c.gus.cfEnableObj($p, ed_drvEmpNo2, true);
  $c.gus.cfEnableObj($p, ed_drvEmpNo3, true);
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);

  // 링크 이미지 비활성화
  $c.gus.cfEnableObj($p, logisEqPosWrkPl_search, false); //작업장조회 이미지
  $c.gus.cfEnableObj($p, drv1_search, false); // 정기사1 조회 이미지
  $c.gus.cfEnableObj($p, drv2_search, false); // 정기사2조회 이미지
  $c.gus.cfEnableObj($p, drv3_search, false); // 정기사3 조회 이미지
  $c.gus.cfEnableObj($p, ica_eqChgDt, false); // 장비변경일자 조회 이미지
  $c.gus.cfEnableObj($p, ed_eqCd, false);
  $c.gus.cfEnableObj($p, ed_eqKndNm, false);
  $c.gus.cfEnableObj($p, ed_eqNrmNm, false);
  $c.gus.cfEnableObj($p, ed_vehclNo, false);
  $c.gus.cfEnableObj($p, ed_assgnLobranCd, false);
  $c.gus.cfEnableObj($p, ed_assgnLobranNm, false);
  $c.gus.cfEnableObj($p, ica_assgnDt, false);
  $c.gus.cfEnableObj($p, ed_logisEqPosWrkPlNm, false);
  $c.gus.cfEnableObj($p, ed_drvEmpNm1, false);
  $c.gus.cfEnableObj($p, ed_drvEmpNm2, false);
  $c.gus.cfEnableObj($p, ed_drvEmpNm3, false);
  $c.gus.cfEnableObj($p, ed_regId, false);
  $c.gus.cfEnableObj($p, ica_regDtm, false);
  $c.gus.cfEnableObj($p, ed_modId, false);
  $c.gus.cfEnableObj($p, ica_modDtm, false);

  // cfEnableKeyData함수로 disable 안되는 공통udc cd 별도 관리
  $c.gus.cfEnableObj($p, ed_logisEqPosWrkPlCd, false);
  $c.gus.cfEnableObj($p, ed_drvEmpNo1, false);
  $c.gus.cfEnableObj($p, ed_drvEmpNo2, false);
  $c.gus.cfEnableObj($p, ed_drvEmpNo3, false);
  $c.gus.cfEnableObj($p, rd_eqDelYn, false); // 장비사용여부
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ds_logisticsHeavyEquip.getRowCount() < 1) {
    await $c.win.alert($p, "수정할 장비정보를 먼저 조회해 주십시오.");
    ed_qryCntn.focus();
    return;
  }
  scwin.f_ContentsEnable();
  scwin.txt_updateYn = "1"; // 수정인경우
  scwin.txt_saveType = "1"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소
  ica_eqChgDt.setValue(scwin.curDate); // 장비변경일자

  $c.gus.cfDisableBtn($p, [b_Update]);
};

//-------------------------------------------------------------------------
// 장비 등록, 수정 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  // 취소 확인

  if (ds_logisticsHeavyEquip.getRowPosition() > ds_logisticsHeavyEquip.getRowCount() || ds_logisticsHeavyEquip.getModifiedIndex().length > 0) {
    ds_logisticsHeavyEquip.undoRow(ds_logisticsHeavyEquip.getRowPosition());
  }
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [b_Cancel, btn_save]);
  scwin.txt_saveType = "4"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소
  ica_eqChgDt.setValue(""); // 장비변경일자  
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.txt_saveType = "3"; // 타입이 저장

  //변경한 데이터가 있는지 체크한다. 
  if (!ds_logisticsHeavyEquip.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 필수항목 체크
  if (!(await $c.gus.cfValidate($p, [ica_eqChgDt]))) {
    return;
  }

  // 저장확인 
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    scwin.pos_groupCode = ds_logisticsHeavyEquip.getRowPosition();
    sbm_saveLogisticsHeavyEquip.action = "/cm.bc.eq.eqmgnt.cmd.UpdateLogisticsHeavyEquipEquipmentInformationCMD.do";
    $c.sbm.execute($p, sbm_saveLogisticsHeavyEquip);
  }
};

//-------------------------------------------------------------------------
//목표유류소모율 소숫점 체크
//-------------------------------------------------------------------------

scwin.f_ChkCsmpRtStd = async function () {
  let vCompareValue = ed_csmpRtStd.getValue();
  let boolChk = cfValidateValue(vCompareValue, "minNumber=000.00&maxNumber=100.00& number=(5.2)");
  if (!boolChk) {
    await $c.win.alert($p, "목표유류소모율 입력이 잘못 입력되었습니다.");
    csmpRtStd.focus();
    return false;
  }
};

// function cfValidateValue(value, validExp) {
//     let valueValidExp = new covValueValidExp(validExp);

//     if (!valueValidExp.validate(value)) {
//         return false;
//     }
// return true;
// }

scwin.sbm_searchlogisticsHeavyEquip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_logisticsHeavyEquip.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    ed_qryCntn.focus();
    return;
  }
  if (scwin.vSysAdminYn == "0" && scwin.vUserHomeClsCd != "DS") {
    $c.gus.cfDisableAllBtn($p);
  }
  if (scwin.pos_groupCode > rowCnt) {
    $c.gus.cfGoPrevPosition($p, gr_logisticsHeavyEquip, rowCnt - 1);
  } else {
    $c.gus.cfGoPrevPosition($p, gr_logisticsHeavyEquip, scwin.pos_groupCode);
  }
  totalRows.setValue(rowCnt);
};
scwin.ed_csmpRtStd_onviewchange = async function (info) {
  const raw = info.newValue;
  if (!/^\d+(\.\d+)?$/.test(raw)) {
    await $c.win.alert($p, "목표유류소모율 입력이 잘못 입력되었습니다.");
    ed_csmpRtStd.setValue("");
    ed_csmpRtStd.focus();
    return;
  }
  const val = parseFloat(info.newValue);
  if (val < 0 || val > 100) {
    await $c.win.alert($p, "목표유류소모율 입력이 잘못 입력되었습니다.");
    ed_csmpRtStd.setValue("");
    ed_csmpRtStd.focus();
    return;
  }
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------

// bytelength = function(bstr){

//      len = bstr.length;
//      for (ii=0; ii<bstr.length; ii++)
//      {
//        xx = bstr.substr(ii,1).charCodeAt(0);
//        if (xx > 127) { len++; }
//      }
// 	 return len;
// } 

scwin.f_downExcelSheet = async function () {
  if (ds_logisticsHeavyEquip.getRowCount() == 0) {
    await $c.win.alert($p, "물류중기 목록이 없습니다.");
    return;
  }
  let fileName = '물류중기목록';
  let sheetTitle = '물류중기목록';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_logisticsHeavyEquip, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

//-------------------------------------------------------------------------
// 권역팝업
//-------------------------------------------------------------------------
scwin.f_openWrkDistrictPopUp = function () {
  // let rtnList = new Array();
  udc_districtList.cfCommonPopUp(scwin.udc_districtList_callBackFunc, '', '', "T", null, null, "150,180", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  물류점소
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;

    // logisWrkDistrictCd.setValue(rtnList[0]);	//권역코드
    // logisWrkDistrictNm.setValue(rtnList[1]);	//권역명
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_districtList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_logisWrkDistrictCd.setValue(rtnList[0]); //권역코드
    ed_logisWrkDistrictNm.setValue(rtnList[1]); //권역명
  }
};

//-------------------------------------------------------------------------
// 물류작업장 팝업
//-------------------------------------------------------------------------
scwin.f_openEqWorkPlPopUp = function () {
  udc_wrkPlInfo.cfCommonPopUp(scwin.udc_wrkPlInfo_callBackFunc, '', '', "T", null, null, "150,180", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null);
  //     if (rtnList != null ) {
  //         if(rtnList[0] == "N/A") return;

  //         logisEqPosWrkPlCd.setValue(rtnList[0]);	//물류작업장번호
  //         logisEqPosWrkPlNm.setValue(rtnList[1]);	//물류작업장명

  //     }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_wrkPlInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_logisEqPosWrkPlCd.setValue(rtnList[0]); //물류작업장번호
    ed_logisEqPosWrkPlNm.setValue(rtnList[1]); //물류작업장명
  }
};

//-------------------------------------------------------------------------
// 사원 팝업
//-------------------------------------------------------------------------

scwin.f_openEmpPopUp = function (idx) {
  switch (idx) {
    case '1':
      udc_empInfo1.cfCommonPopUp(scwin.udc_empInfo1_callBackFunc, '', '', "T", null, null, "150,180", "3,4,5,6,7,8,9,10", "PSTCD_8E", null, null, null, null, null, null, null, null);
      break;
    case '2':
      udc_empInfo2.cfCommonPopUp(scwin.udc_empInfo2_callBackFunc, '', '', "T", null, null, "150,180", "3,4,5,6,7,8,9,10", "PSTCD_8E", null, null, null, null, null, null, null, null);
      break;
    case '3':
      udc_empInfo3.cfCommonPopUp(scwin.udc_empInfo3_callBackFunc, '', '', "T", null, null, "150,180", "3,4,5,6,7,8,9,10", "PSTCD_8E", null, null, null, null, null, null, null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_empInfo1_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_drvEmpNo1.setValue(rtnList[0]); //기사1번호
    ed_drvEmpNm1.setValue(rtnList[1]); //기사1명
  }
};
scwin.udc_empInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_drvEmpNo2.setValue(rtnList[0]); //기사2번호
    ed_drvEmpNm2.setValue(rtnList[1]); //기사2명
  }
};
scwin.udc_empInfo3_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_drvEmpNo3.setValue(rtnList[0]); //기사3번호
    ed_drvEmpNm3.setValue(rtnList[1]); //기사3명
  }
};
scwin.f_toExcel1 = async function () {
  if (ds_logisticsHeavyEquip.getRowCount() == 0) {
    await $c.win.alert($p, "중기 목록이 없습니다.");
    return;
  }
  let fileName = '중기목록';
  let sheetTitle = '중기목록';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_logisticsHeavyEquip, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

scwin.acb_sysCls_onchange = function (info) {
  scwin.txt_sysCls = acb_sysCls.getSelectedIndex();
};
scwin.acb_qryCond_onchange = function (info) {
  scwin.txt_qryCond = acb_qryCond.getSelectedIndex();
};
scwin.sbm_saveLogisticsHeavyEquip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_logisticsHeavyEquip.reform();
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [b_Cancel, btn_save]);
  scwin.f_Retrieve();
};
scwin.ds_logisticsHeavyEquip_onrowpositionchange = async function (info) {
  let vCountRow = ds_logisticsHeavyEquip.getRowCount();
  let vChgCount = 0;
  let vChgRow = 0;
  for (let i = 0; i <= vCountRow; i++) {
    let vCurRowStatus = ds_logisticsHeavyEquip.getRowStatus(i);
    if (vCurRowStatus == "C" || vCurRowStatus == "U") {
      vChgCount++;
      vChgRow = i;
    }
  }
  if (vChgCount > 0 && ds_logisticsHeavyEquip.getRowPosition() != vChgRow) {
    await $c.win.alert($p, "장비 신규등록이나 변경사항을 저장하신 후에 다른 장비정보로 이동하실수 있습니다.");
    ds_logisticsHeavyEquip.setRowPosition(vChgRow);
    gr_logisticsHeavyEquip.setFocusedCell(ds_logisticsHeavyEquip.getRowPosition(), 0);
    return;
  }
};
scwin.udc_1_onclickEvent = function (e) {
  scwin.f_openEqWorkPlPopUp();
};
scwin.udc_empInfo1_onclickEvent = function (e) {
  scwin.f_openEmpPopUp('1');
};
scwin.udc_empInfo2_onclickEvent = function (e) {
  scwin.f_openEmpPopUp('2');
};
scwin.udc_empInfo3_onclickEvent = function (e) {
  scwin.f_openEmpPopUp('3');
};
scwin.f_initTable = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.txt_sysCls = acb_sysCls.getSelectedIndex();
  scwin.txt_qryCond = acb_qryCond.getSelectedIndex();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물류중기관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70.00px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미사용',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_eqDelYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sysCls',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_sysCls_onchange',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류중기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비분류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_eqClssCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'선택',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_qryCond',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',chooseOptionLabel:'선택',ref:'','ev:onchange':'scwin.acb_qryCond_onchange',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'단축코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비(차량)번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'모델명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_qryCntn',style:'width: 150px'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_initTable'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_toExcel1',gridID:'gr_logisticsHeavyEquip'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_logisticsHeavyEquip',focusMode:'cell',id:'gr_logisticsHeavyEquip',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'장비코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'차량단축코드',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'구분',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclShortCd',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqHomeClsCd',inputType:'select',removeBorderStyle:'false',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_eqCd',style:'width: 100px;',ref:'data:ds_logisticsHeavyEquip.eqCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_eqKndNm',style:'width: 150px',ref:'data:ds_logisticsHeavyEquip.eqKndNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNrmNm',style:'width: 150px',ref:'data:ds_logisticsHeavyEquip.eqNrmNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',style:'width: 150px',ref:'data:ds_logisticsHeavyEquip.vehclNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_assgnLobranCd',class:'',ref:'data:ds_logisticsHeavyEquip.assgnLobranCd'}},{T:1,N:'xf:input',A:{style:'width: 150px',id:'ed_assgnLobranNm',class:'',ref:'data:ds_logisticsHeavyEquip.assgnLobranNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_assgnDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_logisticsHeavyEquip.assgnDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목표유류소모율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_csmpRtStd',class:'tar',maxlength:'6.2',displayFormatter:'#,##0.00','ev:onviewchange':'scwin.ed_csmpRtStd_onviewchange',objType:'data',ref:'data:ds_logisticsHeavyEquip.csmpRtStd'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(%)',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목표월가동시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_oprtHhCnt',style:'width: 100px;',ref:'data:ds_logisticsHeavyEquip.oprtHhCnt',objType:'data',maxlength:'3',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시간',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveWrkPlInfo',codeId:'ed_logisEqPosWrkPlCd',validTitle:'',nameId:'ed_logisEqPosWrkPlNm',style:'',objTypeCode:'data',code:'logisEqPosWrkPlCd',name:'logisEqPosWrkPlNm',btnId:'logisEqPosWrkPl_search',id:'udc_wrkPlInfo',refDataCollection:'ds_logisticsHeavyEquip','ev:onclickEvent':'scwin.udc_1_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정기사1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drvEmpNo1',nameId:'ed_drvEmpNm1',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'',objTypeCode:'data',code:'drvEmpNo1',name:'drvEmpNm1',btnId:'drv1_search',id:'udc_empInfo1',refDataCollection:'ds_logisticsHeavyEquip','ev:onclickEvent':'scwin.udc_empInfo1_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정기사2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drvEmpNo2',nameId:'ed_drvEmpNm2',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'',code:'drvEmpNo2',name:'drvEmpNm2',btnId:'drv2_search',objTypeCode:'data',id:'udc_empInfo2',refDataCollection:'ds_logisticsHeavyEquip','ev:onclickEvent':'scwin.udc_empInfo2_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정기사3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drvEmpNo3',nameId:'ed_drvEmpNm3',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'',code:'drvEmpNo3',name:'drvEmpNm3',btnId:'drv3_search',objTypeCode:'data',id:'udc_empInfo3',refDataCollection:'ds_logisticsHeavyEquip','ev:onclickEvent':'scwin.udc_empInfo3_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_eqDelYn',ref:'data:ds_logisticsHeavyEquip.eqDelYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_regId',style:'width: 150px',ref:'data:ds_logisticsHeavyEquip.regId'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:'',id:'ica_regDtm',style:'width:150px;',displayFormat:'yyyy/MM/dd',ref:'data:ds_logisticsHeavyEquip.regDtm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정자ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_modId',style:'width: 150px',ref:'data:ds_logisticsHeavyEquip.modId'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:'',id:'ica_modDtm',style:'width:150px;',displayFormat:'yyyy/MM/dd',ref:'data:ds_logisticsHeavyEquip.modDtm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장비변경일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_eqChgDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'data',ref:'data:ds_logisticsHeavyEquip.eqChgDt',title:'장비변경일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'b_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn',userAuth:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})