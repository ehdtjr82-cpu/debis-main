/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_06b.xml 29166 f9f0a3c2b9ad57816f3d0def567693dddbd096f39d76667aba56d6935045cb83 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_saleCreditInfoSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pldgNo',name:'담보번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_saleCreditInfo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'등록년도',dataType:''}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'보증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stCtrtDt',name:'계약시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endCtrtDt',name:'계약종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtDocNo',name:'보증서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbn',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnYn',name:'해지여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tmnDt',name:'해지일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgPattern',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDept',name:'등록부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtInst',name:'보증기관',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDeptNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataList',A:{id:'p_ds_pldgNo',scope:'../ds_pldgNo',style:''}}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_saleCreditInfoSearch","key":"IN_DS1"},{"id":"ds_saleCreditInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_saleCreditInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.acctrecvmgnt.crdtmgnt.SaveSaleCreditCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_saleCreditInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.parentFrame = $c.win.getParent($p);
scwin.pldgNo = scwin.parentFrame.scwin.pldgNo;
scwin.login = $c.data.getMemInfo($p);
scwin.g_sAcctDeptCd = scwin.login.acctDeptCd;
scwin.g_sUserId = scwin.login.userId;
scwin.globalCreateYn = -1;

//hidden
scwin.hid_pldgNo = "";
scwin.hid_creditLimit = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------  
scwin.onpageload = function () {
  ds_saleCreditInfo.insertRow(0);
  ds_saleCreditInfo.setRowPosition(0);
  lc_tmnYn.setValue("0");
};
scwin.onUdcCompleted = function () {
  if (scwin.pldgNo != "") {
    scwin.setPldgNo(scwin.pldgNo);
    ds_saleCreditInfo.setCellData(0, "pldgNo", scwin.pldgNo);
  }
  // $c.util.setTimeout(function() {
  //         $c.gus.cfDisableObjects([ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  //     }, {"delay":200});  
  $c.gus.cfDisableObjects($p, [ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  scwin.parentFrame.tac_tabControl1.activateTab(3);
};
scwin.setPldgNo = function (pldgNo) {
  ds_saleCreditInfo.setCellData(0, "pldgNo", pldgNo);
  dma_saleCreditInfoSearch.set("pldgNo", pldgNo);

  //alert(hid_pldgNo.getValue());
  sbm_retrieve.action = "/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveSaleCreditListCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
  //submitdone으로 이동
  // if(lc_tmnYn.getValue() == "1"){
  //     $c.gus.cfDisableObjects([table1]);
  //     $c.gus.cfDisableBtnOnly([btnUpdate]);
  // }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
// scwin.f_openPopUp = function(select_code,txtCode,txtName,sFlag) {
// 	let rtnList = null;
// 	let sCmdName = "";
// 	let code = txtCode.getValue();
// 	let name = txtName.getValue();

//   	switch (select_code) {
// 		// 관리부서 PopUp 호출
//   		case '1' :
// 			rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code,name,sFlag,null,null,null,null,null,null,null,null,null); // 관리부서
//   			break;
//   		// 거래처 PopUp 호출
//   		case '2' :
// 			rtnList = udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 거래처
// 		 	break;
// 	}

// 	if ( rtnList != null ) {
//    		if (rtnList[0] == "N/A") return;
// 		txtCode.setValue(rtnList[0]);	// 코드
// 		txtName.setValue(rtnList[1]);	// 코드명
// 		txtCode.options.hidVal = rtnList[0];	// 코드
// 	} else {
// 		txtCode.setValue("");	// 코드
// 		txtName.setValue("");	// 코드명
// 		txtCode.options.hidVal = "";	// 코드
// 	}
//   }

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
// scwin.f_CheckPopUp = function(orgObjCd, orgObjNm,select_code) {
//     if (orgObjCd._wTagName.toUpperCase() == "INPUT" ) {
//         if (orgObjCd.getValue() != orgObjCd.options.hidVal){
//             orgObjNm.setValue("");
//         }

//         if (orgObjCd.getValue().trim() != "" ) {
//             scwin.f_openPopUp(select_code,orgObjCd,orgObjNm,"T")
//         } else {
//             if (!orgObjNm == null)
//             {
//                 orgObjNm.setValue("");
//             }
//             orgObjCd.setValue("");
//             orgObjCd.options.hidVal = "";
//         }
//     }
//     else if (orgObjCd._wTagName.toUpperCase() == "OBJECT" ) {
//         if (orgObjCd.getValue() != orgObjCd.options.hidVal){
//             orgObjNm.setValue("");
//         }

//         if (orgObjCd.getValue().trim() != "") {
//             scwin.f_openPopUp(select_code,orgObjCd,orgObjNm,"T");
//         } else {
//             if (!orgObjNm == null)
//             {
//                 orgObjNm.setValue("");
//             }
//             orgObjCd.setValue("");
//         }
//     }
// }

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
      break;

    // 조회조건용 등록부서 PopUp 호출
    case '2':
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, ",,,0", "450", "500", null, null); // 귀속부서			
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);

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
  if (!(await $c.gus.cfValidate($p, [ed_crn, ica_regDtm, ed_regDept, ed_deposit, ica_stCtrtDt, ica_endCtrtDt]))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 신규입력
//-------------------------------------------------------------------------
scwin.fn_Create = function () {
  ds_saleCreditInfo.setCellData(0, "pldgNo", "");
  // ds_saleCreditInfo.setCellData(0,"crdtLimit", "");
  ds_saleCreditInfo.modifyRowStatus(0, "C");
  ed_crn.options.hidVal = "";
  ed_busiNm.options.hidVal = "";
  ed_regDept.options.hidVal = "";
  ed_regDeptNm.options.hidVal = "";
  ed_regId.options.hidVal = "";
  ed_empNm.options.hidVal = "";
  let rowIdx = p_ds_pldgNo.insertRow();
  p_ds_pldgNo.setRowPosition(rowIdx);
  p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "tmnYn", "0");
  scwin.parentFrame.gr_pldgNo.setFocusedCell(rowIdx, 0);
  $c.gus.cfInitObjects($p, table2, null);
  lc_tmnYn.setValue("0");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, [ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  $c.gus.cfDisableBtn($p, [btnUpdate]);
  scwin.globalCreateYn = 1;
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.fn_Update = function () {
  // disable 처리
  //$c.gus.cfDisableKey();
  $c.gus.cfEnableObjects($p, [table2]);
  $c.gus.cfDisableBtn($p, [btnUpdate]);
  $c.gus.cfEnableObjects($p, [ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm, btn_save]);
  $c.gus.cfDisableObjects($p, [ed_deposit]);
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [lc_tmnYn, ica_tmnDt]);
  }
  //focus 설정
  //lc_realestPattern.focus();
  scwin.globalCreateYn = 0;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let creditLimit = "";
  let deposit = "";

  //변경한 데이터가 있는지 체크한다. 
  if (ds_saleCreditInfo.getModifiedIndex().length == 0 && p_ds_pldgNo.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }

  // 체크
  if (lc_tmnYn.getValue() == "1" && ica_tmnDt.getValue().trim() == "") {
    let ret = await $c.gus.cfValidate($p, [ica_tmnDt]);
    if (!ret) return;
  }
  if (!(await scwin.f_Validation())) return;
  if (scwin.globalCreateYn == 0) {
    // 해지여부비교

    ds_saleCreditInfo.setCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYnOrg', p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn"));
    if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn") == ds_saleCreditInfo.getCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYn') && ds_saleCreditInfo.getCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYn') == 1) {
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit"));
      scwin.hid_creditLimit = creditLimit;
    } else if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn") == ds_saleCreditInfo.getCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYn') && ds_saleCreditInfo.getCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYn') == 0) {
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit"));
      scwin.hid_creditLimit = creditLimit;
    } else if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), 'tmnYn') != ds_saleCreditInfo.getCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYn') && ds_saleCreditInfo.getCellData(ds_saleCreditInfo.getRowPosition(), 'tmnYn') == 1) {
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit")) - parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "deposit"));
      scwin.hid_creditLimit = creditLimit;
    }
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    ds_saleCreditInfo.setCellData(ds_saleCreditInfo.getRowPosition(), 'pldgPattern', "05");
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "pldgPattern", "05");
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.time = function () {
  // cfOpenCalendar(document.all.ica_regDtm);
  // p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDt", ica_regDtm.getValue());
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_saleCreditInfo.setRowPosition(0);
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [table2]);
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  } else {
    // $c.gus.cfEnableBtnOnly([btnUpdate]);
    // $c.gus.cfDisableObjects([ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  }
  let rowCnt = ds_saleCreditInfo.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [lc_tmnYn, ica_tmnDt]);
  }
  let value = ds_saleCreditInfo.getCellData(0, "regId");
  if (value && !/^\d{1,8}$/.test(value)) {
    ds_saleCreditInfo.setCellData(0, "regId", "");
  }
  data = ds_saleCreditInfo.getCellData(0, "regDtm");
  if (data.length > 10) {
    ds_saleCreditInfo.setCellData(0, "regDtm", data.substring(0, 10).replace(/-/g, ""));
  }
  ds_saleCreditInfo.reform();
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
  $c.gus.cfDisableKeyData($p);
  scwin.parentFrame.scwin.f_Retrieve();
  $c.gus.cfDisableBtn($p, [btn_save]);
};
scwin.ica_regDtm_onblur = function (e) {
  if (ica_regDtm.getValue() != "") {
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "regDt", ica_regDtm.getValue());
  }
};
scwin.ed_deposit_onblur = function (e) {
  if (ed_deposit.getValue() != "") {
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "deposit", ed_deposit.getValue());
  }
};
scwin.lc_tmnYn_onchange = function (info) {
  ica_tmnDt.setValue("");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'crn',codeId:'ed_crn','ev:onblurCodeEvent':'scwin.udc_creditCrnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_creditCrnInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_creditCrnInfo_onclickEvent',id:'udc_creditCrnInfo',mandatoryCode:'true',maxlengthCode:'13',maxlengthName:'20',nameId:'ed_busiNm',objTypeCode:'key',objTypeName:'key',popupID:'',refDataCollection:'ds_saleCreditInfo',selectID:'retrieveCreditCrnInfo',style:'',validExpCode:'사업자번호:yes:maxLength=13&number',validTitle:'사업자번호',name:'crnNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd','ev:onblur':'scwin.ica_regDtm_onblur',id:'ica_regDtm',mandatory:'true',objType:'key',ref:'data:ds_saleCreditInfo.regDtm',style:'',title:'등록일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증기관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_grtInst',objType:'data',ref:'data:ds_saleCreditInfo.grtInst',style:'width: 200px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'tar',id:'ed_grtDocNo',maxlength:'20',objType:'data',ref:'data:ds_saleCreditInfo.grtDocNo',style:'width: 200px;',title:'보증서번호'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록부서 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'regDept',codeId:'ed_regDept','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',id:'udc_acctDeptCdInfo',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'50',nameId:'ed_regDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'',refDataCollection:'ds_saleCreditInfo',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'등록부서',name:'regDeptNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보증금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'tar',dataType:'number',displayFormat:'#,##0','ev:onblur':'scwin.ed_deposit_onblur',id:'ed_deposit',mandatory:'true',maxlength:'13',objType:'data',ref:'data:ds_saleCreditInfo.deposit',style:'width: 200px;',title:'보증금액'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간From',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ica_stCtrtDt',mandatory:'true',objType:'data',ref:'data:ds_saleCreditInfo.stCtrtDt',style:'',title:'계약기간From'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간To',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ica_endCtrtDt',mandatory:'true',objType:'data',ref:'data:ds_saleCreditInfo.endCtrtDt',style:'',title:'계약기간To'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'regId',codeId:'ed_regId','ev:onblurCodeEvent':'scwin.udc_empDeptClntInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_empDeptClntInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_empDeptClntInfo_onclickEvent',id:'udc_empDeptClntInfo',maxlengthCode:'8',maxlengthName:'50',nameId:'ed_empNm',objTypeCode:'key',objTypeName:'key',popupID:'',refDataCollection:'ds_saleCreditInfo',selectID:'retrieveEmpDeptClntInfo',style:'',validTitle:'',name:'empNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_tmnYn',objType:'data',ref:'data:ds_saleCreditInfo.tmnYn',style:'width: 150px',submenuSize:'fixed','ev:onviewchange':'scwin.lc_tmnYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ica_tmnDt',objType:'data',ref:'data:ds_saleCreditInfo.tmnDt',style:'',title:'해지일자',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_gbn',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_saleCreditInfo.gbn',displayMode:'value delim label',objType:'data',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개별한도'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자유한도'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btnCreate',type:'button',class:'btn','ev:onclick':'scwin.fn_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btnUpdate',type:'button',class:'btn','ev:onclick':'scwin.fn_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})