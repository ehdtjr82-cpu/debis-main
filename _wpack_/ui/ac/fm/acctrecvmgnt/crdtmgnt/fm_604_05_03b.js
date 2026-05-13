/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_05_03b.xml 29613 3d717f17c4ca49e0b059fc8f2ac50b68594cf57f448e49832835441c32601356 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_GuarantyInsuranceSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pldgNo',name:'수출입구분코드',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataList',A:{scope:'../ds_pldgNo',id:'p_ds_pldgNo'}},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_GuarantyInsurance',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'등록부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDept',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmnYn',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tmnDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endCtrtDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stCtrtDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corSsn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtDocNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtInst',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inst',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgPattern',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tmnYnOrg',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pldgNo',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_GuarantyInsuranceSearch","key":"IN_DS1"},{"id":"ds_GuarantyInsurance","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_GuarantyInsurance","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.acctrecvmgnt.crdtmgnt.SaveGuarantyInsuranceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_GuarantyInsurance","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.parentFrame = $c.win.getParent($p);
scwin.pldgNo = scwin.parentFrame.scwin.pldgNo;
scwin.login = $c.data.getMemInfo($p);
scwin.regId = scwin.login.userId;
scwin.globalCreateYn = -1;

//hidden
scwin.hid_pldgNo = "";
scwin.hid_creditLimit = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------  
scwin.onpageload = function () {
  ds_GuarantyInsurance.insertRow(0);
  ds_GuarantyInsurance.setRowPosition(0);
  lc_tmnYn.setValue("0");
};
scwin.onUdcCompleted = function () {
  if (scwin.pldgNo != "") {
    scwin.setPldgNo(scwin.pldgNo);
    ds_GuarantyInsurance.setCellData(0, "pldgNo", scwin.pldgNo);
  }
  // $c.util.setTimeout(function() {
  //         $c.gus.cfDisableObjects([ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  //     }, {"delay":200});  
  $c.gus.cfDisableObjects($p, [ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  scwin.parentFrame.tac_tabControl1.activateTab(2);
};
scwin.setPldgNo = function (pldgNo) {
  dma_GuarantyInsuranceSearch.set("pldgNo", pldgNo);
  ds_GuarantyInsurance.setCellData(0, "pldgNo", pldgNo);

  //alert(hid_pldgNo.getValue());
  sbm_retrieve.action = "/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveGuarantyInsuranceCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
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
  if (!(await $c.gus.cfValidate($p, [ed_crn, ica_regDtm, ed_regDept, ed_grtDocNo, ed_deposit, ica_stCtrtDt, ica_endCtrtDt]))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 신규입력
//-------------------------------------------------------------------------
scwin.fn_Create = function () {
  ds_GuarantyInsurance.setCellData(0, "pldgNo", "");
  ds_GuarantyInsurance.setCellData(0, "crdtLimit", "");
  ds_GuarantyInsurance.modifyRowStatus(0, "C");
  ed_crn.options.hidVal = "";
  ed_busiNm.options.hidVal = "";
  ed_regDept.options.hidVal = "";
  ed_regDeptNm.options.hidVal = "";
  ed_regId.options.hidVal = "";
  ed_empNm.options.hidVal = "";
  let rowIdx = p_ds_pldgNo.insertRow();
  scwin.parentFrame.gr_pldgNo.setFocusedCell(rowIdx, 0);
  p_ds_pldgNo.setRowPosition(rowIdx);
  p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "tmnYn", "0");
  $c.gus.cfInitObjects($p, table1, null);
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
  $c.gus.cfDisableBtn($p, [btnUpdate]);
  $c.gus.cfEnableObjects($p, [table1]);
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
  if (ds_GuarantyInsurance.getModifiedIndex().length == 0 && p_ds_pldgNo.getModifiedIndex().length == 0) {
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

    ds_GuarantyInsurance.setCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYnOrg', p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn"));
    if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn") == ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYn') && ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYn') == 1) {
      //ds_GuarantyInsurance.setCellData(ds_GuarantyInsurance.getRowPosition(), 'deposit', 0 );

      //creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit")) - parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "deposit"));
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit"));
      scwin.hid_creditLimit = creditLimit;
      //alert(ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), "creditLimit"));
    } else if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "tmnYn") == ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYn') && ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYn') == 0) {
      //ds_GuarantyInsurance.setCellData(ds_GuarantyInsurance.getRowPosition(), 'deposit', 0 );

      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit"));
      scwin.hid_creditLimit = creditLimit;
    } else if (p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), 'tmnYn') != ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYn') && ds_GuarantyInsurance.getCellData(ds_GuarantyInsurance.getRowPosition(), 'tmnYn') == 1) {
      creditLimit = parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "crdtLimit")) - parseFloat(p_ds_pldgNo.getCellData(p_ds_pldgNo.getRowPosition(), "deposit"));
      scwin.hid_creditLimit = creditLimit;
    }
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    ds_GuarantyInsurance.setCellData(ds_GuarantyInsurance.getRowPosition(), 'pldgPattern', "02");
    p_ds_pldgNo.setCellData(p_ds_pldgNo.getRowPosition(), "pldgPattern", "02");
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
  ds_GuarantyInsurance.setRowPosition(0);
  let rowCnt = ds_GuarantyInsurance.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  if (lc_tmnYn.getValue() == "1") {
    $c.gus.cfDisableObjects($p, [lc_tmnYn, ica_tmnDt]);
  }
  data = ds_GuarantyInsurance.getCellData(0, "regDtm");
  if (data.length > 10) {
    ds_GuarantyInsurance.setCellData(0, "regDtm", data.substring(0, 10).replace(/-/g, ""));
  }

  // if(scwin.parentFrame.ds_pldgNo.getRowStatus(scwin.parentFrame.ds_pldgNo.getRowPosition()) == "R"){
  //     if(lc_tmnYn.getValue() == "1"){
  //         $c.gus.cfDisableObjects([table1]);
  //         $c.gus.cfDisableBtnOnly([btnUpdate]);
  //     }else{
  //         $c.gus.cfEnableObjects([table1]);
  //         $c.gus.cfEnableBtnOnly([btnUpdate]);
  //         $c.gus.cfDisableObjects([ica_regDtm, ed_crn, ed_busiNm, ed_regDept, ed_regDeptNm, ed_regId, ed_empNm]);
  //     }
  //     let rowCnt = ds_GuarantyInsurance.getRowCount();
  //     if( rowCnt == 0 ){
  //         await $c.win.alert(MSG_CM_ERR_003);
  //     }
  //     if(lc_tmnYn.getValue() == "1"){
  //         $c.gus.cfDisableObjects([lc_tmnYn, ica_tmnDt]);
  //     }

  //     data = ds_GuarantyInsurance.getCellData(0, "regDtm")
  //     if (data.length > 10) {
  //         ds_GuarantyInsurance.setCellData(0, "regDtm", data.substring(0, 10).replace(/-/g, ""));
  //     }
  // }
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
  let idx = p_ds_pldgNo.getRowPosition();
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCreditCrnInfo',codeId:'ed_crn',validTitle:'사업자번호',nameId:'ed_busiNm',style:'',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'key',objTypeName:'key',maxlengthName:'20',validExpCode:'사업자번호:yes:maxLength=13&number',refDataCollection:'ds_GuarantyInsurance',code:'crn',name:'busiNm',id:'udc_creditCrnInfo','ev:onclickEvent':'scwin.udc_creditCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_creditCrnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_creditCrnInfo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_regDtm',style:'',mandatory:'true',objType:'key',ref:'data:ds_GuarantyInsurance.regDtm','ev:onblur':'scwin.ica_regDtm_onblur',displayFormat:'yyyy/MM/dd',title:'등록일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증기관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_grtInst',style:'width: 200px;',objType:'data',ref:'data:ds_GuarantyInsurance.grtInst'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보증서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_grtDocNo',style:'width: 200px;',mandatory:'true',objType:'data',maxlength:'20',allowChar:'0-9',ref:'data:ds_GuarantyInsurance.grtDocNo',title:'보증서번호'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록부서 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regDept',nameId:'ed_regDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'등록부서',refDataCollection:'ds_GuarantyInsurance',objTypeCode:'key',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'5',maxlengthName:'50',objTypeName:'key',code:'regDept',name:'regDeptNm',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보증금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_deposit',style:'width: 200px;',displayFormat:'#,##0',dataType:'number',mandatory:'true',objType:'data',maxlength:'13',allowChar:'0-9',ref:'data:ds_GuarantyInsurance.deposit','ev:onblur':'scwin.ed_deposit_onblur',title:'보증금액'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간From',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stCtrtDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_GuarantyInsurance.stCtrtDt',title:'계약기간From'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간To',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_endCtrtDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'data',ref:'data:ds_GuarantyInsurance.endCtrtDt',title:'계약기간To'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regId',nameId:'ed_empNm',popupID:'',selectID:'retrieveEmpDeptClntInfo',style:'',validTitle:'',refDataCollection:'ds_GuarantyInsurance',maxlengthCode:'8',objTypeCode:'key',allowCharCode:'0-9',objTypeName:'key',maxlengthName:'50',code:'regId',name:'empNm',id:'udc_empDeptClntInfo','ev:onclickEvent':'scwin.udc_empDeptClntInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_empDeptClntInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_empDeptClntInfo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_tmnYn',style:'width: 150px',submenuSize:'fixed',objType:'data',ref:'data:ds_GuarantyInsurance.tmnYn','ev:onblur':'scwin.lc_tmnYn_onblur','ev:onchange':'scwin.lc_tmnYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_tmnDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_GuarantyInsurance.tmnDt',title:'해지일자',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btnCreate',type:'button',class:'btn','ev:onclick':'scwin.fn_Create',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btnUpdate',type:'button',class:'btn','ev:onclick':'scwin.fn_Update',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn','ev:onclick':'scwin.f_Save',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})