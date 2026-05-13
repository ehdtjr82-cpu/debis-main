/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_02b.xml 37625 76484ed3a8b3acff5c2ee0d7db460b40cb94df08834cae31ec2adb9fc2cac630 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RealestSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pldgNo',name:'수출입구분코드',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataList',A:{id:'p_ds_pldgNo',scope:'../ds_pldgNo',style:''}},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Realest',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'등록부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDept',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currprc',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ancdLpr',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'jdgEstmtAdptRt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'jdgEstmtAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslRankEstmtAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'leasePriorityRepayAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'realPldgValue',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pldgSetupLimitRt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fixedCollatSetupAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fixedCollatSetupPsblAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setupNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'landUsePlan',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bldgYyCnt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'jointGrtYn',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'landCatBldgKnd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'priorityPrscond',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnYn',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tmnDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realestPattern',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgPattern',name:'',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tmnYnOrg',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pldgNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realestAddr',name:'name31',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_RealestSearch","key":"IN_DS1"},{"id":"ds_Realest","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Realest","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.acctrecvmgnt.crdtmgnt.SaveRealestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_Realest","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.parentFrame = $c.win.getParent($p);
scwin.pldgNo = scwin.parentFrame.scwin.pldgNo;
scwin.login = $c.data.getMemInfo($p);
scwin.g_sAcctDeptCd = scwin.login.acctDeptCd;
scwin.g_sUserId = scwin.login.userId;
scwin.globalCreateYn = -1;

//hidden
scwin.hid_pldgNo = "";
scwin.hid_creditLimit = "";
scwin.hid_pldgNo = "";
scwin.hid_creditLimit = "";
scwin.onpageload = function () {
  ds_Realest.insertRow(0);
  ds_Realest.setRowPosition(0);
  lc_tmnYn.setValue("0");
  const codeOptions = [{
    grpCd: "FM091",
    compID: "lc_realestPattern"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  if (scwin.pldgNo != "") {
    scwin.setPldgNo(scwin.pldgNo);
    ds_Realest.setCellData(0, "pldgNo", scwin.pldgNo);
    // ds_Realest.setCellData(0,"pldgNo", scwin.pldgNo);
  }

  // $c.gus.cfDisableKeyData();
  $c.gus.cfDisableObjects($p, [ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm, ica_regDtm, ed_fixedCollatSetupAmt]);
  // $c.util.setTimeout(function() {
  //         $c.gus.cfDisableObjects([ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm, ica_regDtm, ed_fixedCollatSetupAmt]);
  //     }, {"delay":200});  

  scwin.parentFrame.tac_tabControl1.activateTab(1);
};
scwin.setPldgNo = function (pldgNo) {
  ds_Realest.setCellData(0, "pldgNo", scwin.pldgNo);
  // ds_Realest.set(0,"pldgNo", pldgNo);
  dma_RealestSearch.set("pldgNo", pldgNo);

  //alert(hid_pldgNo.getValue());
  sbm_retrieve.action = "/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveRealestCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
  //submitdone으로 이동
  // if(lc_tmnYn.getValue() == "1"){
  //     $c.gus.cfDisableObjects([table4]);
  //     $c.gus.cfDisableBtnOnly([btnUpdate]);
  // }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->사업자번호 , 2:조회->등록부서, 3:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  // let rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  if (flag != "SKIP") {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  } else {
    cd = orgObjCd;
    nm = "";
  }
  switch (select_code) {
    // 조회조건용 사업자번호 PopUp 호출
    case '1':
      udc_creditCrnInfo.cfCommonPopUp(scwin.udc_creditCrnInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 사업자번호
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      // if(rtnList != null )
      // {
      //     if(rtnList[0] !="N/A")
      //     {
      //         p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "crn", rtnList[0]);
      //         p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "busiNm", rtnList[1]);
      //     }
      // }
      break;
    // 조회조건용 등록부서 PopUp 호출
    case '2':
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, ",,,0", "450", "500", null, null); // 귀속부서			
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      // if(rtnList != null )
      // {
      //     if(rtnList[0] !="N/A")
      //     {
      //         p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDept", rtnList[0]);
      //         p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDeptNm", rtnList[1]);
      //     }
      // }
      break;
    // 조회조건용 등록자 PopUp 호출
    case '3':
      udc_empDeptClntInfo.cfCommonPopUp(scwin.udc_empDeptClntInfo_callBackFunc, cd, nm, "T", null, null, null, null, ",,,0", "450", "500", null, null); // 등록자			
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_creditCrnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]);
    ed_busiNm.setValue(rtnList[1]);
    ed_crn.options.hidVal = rtnList[0];
    ed_busiNm.options.hidVal = rtnList[1];
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "crn", rtnList[0]);
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "busiNm", rtnList[1]);
  } else {
    ed_crn.setValue("");
    ed_busiNm.setValue("");
    ed_crn.options.hidVal = "";
    ed_busiNm.options.hidVal = "";
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_regDept.setValue(rtnList[0]);
    ed_regDeptNm.setValue(rtnList[1]);
    ed_regDept.options.hidVal = rtnList[0];
    ed_regDeptNm.options.hidVal = rtnList[1];
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDept", rtnList[0]);
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDeptNm", rtnList[1]);
  } else {
    ed_regDept.setValue("");
    ed_regDeptNm.setValue("");
    ed_regDept.options.hidVal = "";
    ed_regDeptNm.options.hidVal = "";
  }
};
scwin.udc_empDeptClntInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_regId.setValue(rtnList[0]);
    ed_empNm.setValue(rtnList[1]);
    ed_regId.options.hidVal = rtnList[0];
    ed_empNm.options.hidVal = rtnList[1];
  } else {
    ed_regId.setValue("");
    ed_empNm.setValue("");
    ed_regId.options.hidVal = "";
    ed_empNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_crn, ica_regDtm, lc_realestPattern, ed_currprc, ed_regDept, ed_fixedCollatSetupAmt, ed_setupNo, ed_ancdLpr, ed_jdgEstmtAdptRt, ed_jdgEstmtAmt]))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 신규입력
//-------------------------------------------------------------------------
scwin.fn_Create = function () {
  ds_Realest.setCellData(0, "pldgNo", "");
  ds_Realest.setCellData(0, "crdtLimit", "");
  ds_Realest.modifyRowStatus(0, "C");
  ed_crn.options.hidVal = "";
  ed_busiNm.options.hidVal = "";
  ed_regDept.options.hidVal = "";
  ed_regDeptNm.options.hidVal = "";
  ed_regId.options.hidVal = "";
  ed_empNm.options.hidVal = "";

  // ds_Realest.set(0,"pldgNo", "");
  let rowIdx = p_ds_pldgNo.insertRow();
  p_ds_pldgNo.setRowPosition(rowIdx);
  p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "tmnYn", "0");
  scwin.parentFrame.gr_pldgNo.setFocusedCell(rowIdx, 0);
  $c.gus.cfInitObjects($p, table4, null);
  lc_tmnYn.setValue("0");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, [table4]);
  $c.gus.cfDisableBtn($p, [btnCreate]);
  // ds_Realest.setRowPosition();
  scwin.globalCreateYn = 1;
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.fn_Update = function () {
  // disable 처리
  //$c.gus.cfDisableKey();
  // $c.gus.cfDisableBtn([btnUpdate]);
  $c.gus.cfEnableObjects($p, [ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm, btn_save]);
  $c.gus.cfEnableObjects($p, [table4]);
  $c.gus.cfDisableObjects($p, [ed_fixedCollatSetupAmt]);
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [lc_tmnYn, ica_tmnDt]);
  }
  //focus 설정
  //lc_realestPattern.focus();
  scwin.globalCreateYn = 0;
  ds_Realest.setCellData(0, "RowStatus", "U");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_Realest.getModifiedIndex().length == 0 && scwin.parentFrame.ds_pldgNo.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }
  if (0 > Number(ed_jdgEstmtAdptRt.getValue()) || Number(ed_jdgEstmtAdptRt.getValue()) > 100) {
    await $c.gus.cfAlertMsg($p, "감정평가적용율은 0부터 100사이로 입력하십시오.");
    return;
  }
  // 체크
  if (!(await scwin.f_Validation())) return;
  if (lc_tmnYn.getValue() == "1" && ica_tmnDt.getValue().trim() == "") {
    let ret = await $c.gus.cfValidate($p, [ica_tmnDt]);
    if (!ret) return;
  }
  if (scwin.globalCreateYn == 0) {
    // 해지여부비교

    ds_Realest.setCellData(0, 'tmnYnOrg', p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn"));
    if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn") == ds_Realest.getCellData(0, 'tmnYn') && ds_Realest.getCellData(0, 'tmnYn') == 1) {
      //ds_Realest.setCellData(0,'fixedCollatSetupAmt', 0 );
      //creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit")) - parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "fixedCollatSetupAmt"));
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit"));
      scwin.hid_creditLimit = creditLimit;
      //alert(ds_Realest.getCellData(0,"creditLimit"));
    } else if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn") == ds_Realest.getCellData(0, 'tmnYn') && ds_Realest.getCellData(0, 'tmnYn') == 0) {
      //ds_Realest.setCellData(0,'fixedCollatSetupAmt', 0 );

      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit"));
      scwin.hid_creditLimit = creditLimit;
    } else if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), 'tmnYn') != ds_Realest.getCellData(0, 'tmnYn') && ds_Realest.getCellData(0, 'tmnYn') == 1) {
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit")) - parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "fixedCollatSetupAmt"));
      scwin.hid_creditLimit = creditLimit;
    }
  }
  if (ds_Realest.getCellData(0, "bldgYyCnt") == "") {
    ds_Realest.setCellData(0, "bldgYyCnt", 0);
  }
  if (ds_Realest.getCellData(0, "crdtLimit") == "") {
    ds_Realest.setCellData(0, "crdtLimit", 0);
  }
  if (ds_Realest.getCellData(0, "fixedCollatSetupPsblAmt") == "") {
    ds_Realest.setCellData(0, "fixedCollatSetupPsblAmt", 0);
  }
  if (ds_Realest.getCellData(0, "jointGrtYn") == "") {
    ds_Realest.setCellData(0, "jointGrtYn", 0);
  }
  if (ds_Realest.getCellData(0, "leasePriorityRepayAmt") == "") {
    ds_Realest.setCellData(0, "leasePriorityRepayAmt", 0);
  }
  if (ds_Realest.getCellData(0, "pldgSetupLimitRt") == "") {
    ds_Realest.setCellData(0, "pldgSetupLimitRt", 0);
  }
  if (ds_Realest.getCellData(0, "realPldgValue") == "") {
    ds_Realest.setCellData(0, "realPldgValue", 0);
  }
  if (ds_Realest.getCellData(0, "tmnYnOrg") == "") {
    ds_Realest.setCellData(0, "tmnYnOrg", 0);
  }
  if (ds_Realest.getCellData(0, "vsslRankEstmtAmt") == "") {
    ds_Realest.setCellData(0, "vsslRankEstmtAmt", 0);
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    ds_Realest.setCellData(0, "pldgPattern", "01");
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "pldgPattern", "01");
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_Realest.setRowPosition(0);
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [table4]);
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  } else {
    // $c.gus.cfEnableBtnOnly([btnUpdate]);
    // $c.gus.cfDisableObjects([ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm, ed_fixedCollatSetupAmt]);
  }
  // let rowCnt = ds_Realest.getRowCount();
  // if( rowCnt == 0 ){
  // 	await $c.win.alert(MSG_CM_ERR_003);
  // }
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [lc_tmnYn, ica_tmnDt]);
  }
  let value = ds_Realest.getCellData(0, "regId");
  if (value && !/^\d{1,8}$/.test(value)) {
    ds_Realest.setCellData(0, "regId", "");
  }
  data = ds_Realest.getCellData(0, "regDtm");
  if (data.length > 10) {
    ds_Realest.setCellData(0, "regDtm", data.substring(0, 10).replace(/-/g, ""));
  }
  ds_Realest.reform();
};
scwin.udc_creditCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_busiNm, '1', 'ALL');
};
scwin.udc_creditCrnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_busiNm, '1', 'CD');
};
scwin.udc_creditCrnInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_busiNm, '1', 'NM');
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_regDept, ed_regDeptNm, '2', 'ALL');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_regDept, ed_regDeptNm, '2', 'CD');
};
scwin.udc_acctDeptCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_regDept, ed_regDeptNm, '2', 'NM');
};
scwin.udc_empDeptClntInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_regId, ed_empNm, '3', 'ALL');
};
scwin.udc_empDeptClntInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_regId, ed_empNm, '3', 'CD');
};
scwin.udc_empDeptClntInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_regId, ed_empNm, '3', 'NM');
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  // disable 처리
  scwin.parentFrame.scwin.f_Retrieve();
  $c.gus.cfDisableKeyData($p);
  //  $c.gus.cfDisableObjects([ed_pldgSetupLimitRt, ed_ancdLpr, ed_vsslRankEstmtAmt, ed_fixedCollatSetupAmt, ed_bldgYyCnt, ed_jdgEstmtAdptRt, ed_leasePriorityRepayAmt, ed_fixedCollatSetupPsblAmt, ica_tmnDt, ed_currprc, ed_jdgEstmtAmt, ed_realPldgValue, ed_setupNo ]);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

//감정평가액
scwin.ed_jdgEstmtAmt_onblur = function (e) {
  if (ed_jdgEstmtAmt.getValue() != "") {
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "jdgEstmtAmt", ed_jdgEstmtAmt.getValue());
  }
};

//근저당설정액
scwin.ed_fixedCollatSetupAmt_onblur = function (e) {
  if (ed_fixedCollatSetupAmt.getValue() != "") {
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "fixedCollatSetupAmt", ed_fixedCollatSetupAmt.getValue());
  }
};

//등록일자
scwin.ica_regDtm_onblur = function (e) {
  if (ica_regDtm.getValue() != "") {
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDt", ica_regDtm.getValue());
  }
};

//해지여부
scwin.lc_tmnYn_onviewchange = function (info) {
  ica_tmnDt.setValue("");
};
scwin.ed_jdgEstmtAdptRt_onblur = function (e) {
  ed_jdgEstmtAmt.setValue(ed_ancdLpr.getValue() * ed_jdgEstmtAdptRt.getValue());
};
scwin.ed_ancdLpr_onblur = function (e) {
  ed_jdgEstmtAmt.setValue(ed_ancdLpr.getValue() * ed_jdgEstmtAdptRt.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table4',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'crn',codeId:'ed_crn','ev:onblurCodeEvent':'scwin.udc_creditCrnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_creditCrnInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_creditCrnInfo_onclickEvent',id:'udc_creditCrnInfo',mandatoryCode:'true',maxlengthCode:'13',maxlengthName:'20',name:'busiNm',nameId:'ed_busiNm',objTypeCode:'key',objTypeName:'key',popupID:'',refDataCollection:'ds_Realest',selectID:'retrieveCreditCrnInfo',style:'',validExpCode:'사업자번호:yes:maxLength=13&number',validTitle:'사업자번호',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_regDtm',pickerType:'dynamic',style:'',ref:'data:ds_Realest.regDtm',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'key',title:'등록일자','ev:onblur':'scwin.ica_regDtm_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부동산유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_realestPattern',style:'width:100px;',submenuSize:'auto',ref:'data:ds_Realest.realestPattern',mandatory:'true',title:'부동산유형'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'시가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_currprc',placeholder:'',style:'width:150px;',ref:'data:ds_Realest.currprc',mandatory:'true',maxlength:'13',allowChar:'0-9',objType:'data',initValue:'0',dataType:'number',displayFormat:'#,##0',title:'시기','ev:onblur':'scwin.ed_currprc_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'regDept',codeId:'ed_regDept','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',id:'udc_acctDeptCdInfo',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'50',name:'regDeptNm',nameId:'ed_regDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'',refDataCollection:'ds_Realest',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'등록부서',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공시지가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ancdLpr',placeholder:'',style:'width:150px;',ref:'data:ds_Realest.ancdLpr',mandatory:'true',maxlength:'13',objType:'data',initValue:'0',dataType:'number',displayFormat:'#,##0',title:'공시지기','ev:onblur':'scwin.ed_ancdLpr_onblur',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'감정평가적용율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_jdgEstmtAdptRt',placeholder:'',style:'width:150px;',mandatory:'true',ref:'data:ds_Realest.jdgEstmtAdptRt',objType:'data',maxlength:'3',allowChar:'0-9',initValue:'0',dataType:'number',displayFormat:'#,##0',title:'감정평가적용율','ev:onblur':'scwin.ed_jdgEstmtAdptRt_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'감정평가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_jdgEstmtAmt',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'13',ref:'data:ds_Realest.jdgEstmtAmt',objType:'data',allowChar:'0-9',initValue:'0',dataType:'number',displayFormat:'#,##0',title:'감정평가액','ev:onblur':'scwin.ed_jdgEstmtAmt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'regId',codeId:'ed_regId','ev:onblurCodeEvent':'scwin.udc_empDeptClntInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_empDeptClntInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_empDeptClntInfo_onclickEvent',id:'udc_empDeptClntInfo',maxlengthCode:'8',maxlengthName:'50',name:'empNm',nameId:'ed_empNm',objTypeCode:'key',objTypeName:'key',popupID:'',refDataCollection:'ds_Realest',selectID:'retrieveEmpDeptClntInfo',style:'',validTitle:'',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선순위평가금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vsslRankEstmtAmt',placeholder:'',style:'width:150px;',allowChar:'0-9',objType:'data',maxlength:'13',ref:'data:ds_Realest.vsslRankEstmtAmt',initValue:'0',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임대차우선변제금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_leasePriorityRepayAmt',placeholder:'',style:'width:150px;',allowChar:'0-9',objType:'data',maxlength:'13',ref:'data:ds_Realest.leasePriorityRepayAmt',initValue:'0',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실담보가치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_realPldgValue',placeholder:'',style:'width:150px;',initValue:'0',dataType:'number',displayFormat:'#,##0',ref:'data:ds_Realest.realPldgValue',maxlength:'13',objType:'data',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보설정한도율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgSetupLimitRt',placeholder:'',style:'width:150px;',initValue:'0',dataType:'number',displayFormat:'#,##0',maxlength:'3',ref:'data:ds_Realest.pldgSetupLimitRt',objType:'data',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'근저당설정금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_fixedCollatSetupAmt',placeholder:'',style:'width:150px;',mandatory:'true',allowChar:'0-9',initValue:'0',dataType:'number',displayFormat:'#,##0',ref:'data:ds_Realest.fixedCollatSetupAmt',objType:'key',maxlength:'13',title:'근저당설정금액','ev:onblur':'scwin.ed_fixedCollatSetupAmt_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근저당설정가능금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_fixedCollatSetupPsblAmt',placeholder:'',style:'width:150px;',allowChar:'0-9',initValue:'0',dataType:'number',displayFormat:'#,##0',ref:'data:ds_Realest.fixedCollatSetupPsblAmt',objType:'data',maxlength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'설정번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_setupNo',placeholder:'',style:'width:150px;',mandatory:'true',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',ref:'data:ds_Realest.setupNo',objType:'data',maxlength:'3',title:'설정번호'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'토지사용계획',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_landUsePlan',placeholder:'',style:'',ref:'data:ds_Realest.landUsePlan'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건물건축연수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_bldgYyCnt',placeholder:'',style:'width:150px;',dataType:'number',displayFormat:'#,##0',ref:'data:ds_Realest.bldgYyCnt',maxlength:'13',objType:'data',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'단독/공담',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_jointGrtYn',style:'width:100px;',submenuSize:'auto',ref:'data:ds_Realest.jointGrtYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단독'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공담'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지목/건물 종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_landCatBldgKnd',placeholder:'',style:'width:150px;',ref:'data:ds_Realest.landCatBldgKnd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'우선순위현황',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_priorityPrscond',placeholder:'',style:'',ref:'data:ds_Realest.priorityPrscond'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',id:'lc_tmnYn',style:'width:100px;',submenuSize:'auto',ref:'data:ds_Realest.tmnYn',disabledClass:'w2selectbox_disabled',disabled:'false','ev:onviewchange':'scwin.lc_tmnYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_tmnDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_Realest.tmnDt',title:'해지일자',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btnCreate',label:'저장',style:'',type:'button','ev:onclick':'scwin.fn_Create',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btnUpdate',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]})