/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_01b.xml 32320 3d269d5eec46f332d91ba19fe4667602db47273dd9372d75ae115fe81d818ba8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_ctrt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rentCtrtClsCd',name:'임대계약구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rentCtrtClsNm',name:'임대계약구분코드명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtEmpNm',name:'계약담당자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtDeptNm',name:'등록점소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtDocExstYn',name:'계약서존재여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtRegStsCd',name:'계약등록상태코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtRegStsNm',name:'계약등록상태명',dataType:'String'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'rentCtrtClsCd',name:'임대계약구분코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'deptNo',name:'부서번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'empNo',name:'사원번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'qryDtCls',name:'일자별조회조건',dataType:'String'}},{T:1,N:'w2:key',A:{id:'qryDtFrom',name:'시작일',dataType:'String'}},{T:1,N:'w2:key',A:{id:'qryDtTo',name:'종료일',dataType:'String'}},{T:1,N:'w2:key',A:{id:'ctrtRegStsCd',name:'계약등록상태코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'ctrtDocExstYn',name:'계약서존재여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ctrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contractNumber',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outDs',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveRentalContractListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.sd.salesactiv.ctrtmgnt.ExecuteRentalContractDeleteCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ctrtNo","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_copy',action:'/ds.sd.salesactiv.ctrtmgnt.ExecuteRentalContractCopyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["ds_ctrtNo",{"id":"ds_outDs","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_copy_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// DDate sDate = new DDate();

scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);

// LoginDTO login =  LoginUtil.getLoginDTO( request ) ;
scwin.regId = $c.data.getMemInfo($p, "userId");
scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn");

//메세지용 전역변수 SETTING
scwin.MSG_SD_WRN_001 = "수정하고자 하는 계약번호를 선택하여 주십시오.";
scwin.MSG_SD_WRN_002 = "조회 후 처리하시기 바랍니다.";
scwin.MSG_SD_ERR_001 = "시작일자와 종료일자를 정확히 입력 바랍니다.";
scwin.MSG_SD_CRM_001 = "@을 실행하시겠습니까?";
scwin.MSG_SD_INF_001 = "계약복사가 완료되었습니다.";
scwin.MSG_SD_INF_002 = "계약이 삭제되었습니다.";

// function desc : 화면로딩시 
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD138",
    compID: "lc_rentCtrtClsCd"
  } // 임대계약구분
  , {
    grpCd: "SD040",
    compID: "lc_ctrtRegStsCd"
  } // 등록상태
  ];
  $c.data.setCommonCode($p, codeOptions);
  udc_topGrp.setHideBtn("btn_userSave", "true");
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_qryDtFrom.setValue(scwin.strPreDate);
  ed_qryDtTo.setValue(scwin.strCurDate);

  // lc_qryDtCls.BindColVal = "01";
  lc_qryDtCls.setValue("01");
  $c.gus.cfDisableKey($p);

  // lc_ctrtDocExstYn.BindColVal = "-1";
  lc_ctrtDocExstYn.setValue("-1");
  ed_CtrtNo.focus();

  // 입력 Object 중 한글입력 항목의 IME Mode를 설정한다.
  // cfSetIMEModeActiveObjects([txt_ctrtClntNm, txt_deptNm, txt_empNm]);
};

// 계약번호 대문자 변환
scwin.ed_CtrtNo_onkeyup = function (e) {
  let val = this.getValue().toUpperCase();

  // 첫글자 영어 체크
  if (val.length >= 1 && !/^[A-Z]/.test(val.charAt(0))) {
    val = val.substring(1);
  }

  // 두번째부터 숫자만
  if (val.length > 1) {
    val = val.charAt(0) + val.substring(1).replace(/[^0-9]/g, "");
  }
  this.setValue(val);
};
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};

/*
    조회
*/
scwin.f_Retrieve = async function (e) {
  //조회 필수 조건 check
  if (!$c.gus.cfIsAfterDate($p, ed_qryDtFrom.getValue(), ed_qryDtTo.getValue())) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_qryDtFrom.focus();
    return;
  }
  if (ed_qryDtFrom.getValue().trim() == "" || ed_qryDtTo.getValue().trim() == "") {
    $c.win.alert($p, scwin.MSG_SD_ERR_001);
    return;
  }
  // var strPath = "/ds.sd.salesactiv.ctrtmgnt.RetrieveRentalContractListCMD.do";
  // sbm_retrieve.Action = strPath;
  $p.executeSubmission("sbm_retrieve");
};

// function desc : 신규화면 클릭
scwin.f_newCtrt = function (rentCtrtClsCd) {
  // alert(rentCtrtClsCd)
  // await $c.gus.cfAlertMsg(rentCtrtClsCd)
  if (rentCtrtClsCd == "01") {
    // $c.gus.cfAlertMsg("장비임대계약정보")
    // cfTabMenuAdd( "/ds/sd/salesactiv/ctrtmgnt/sd_202_02_02b.jsp" , "장비임대계약정보") ;
    $c.win.openMenu($p, "장비임대계약정보", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_02b.xml", "sd_202_02_02b");
  } else {
    // $c.gus.cfAlertMsg("사무실임대계약정보")
    // cfTabMenuAdd( "/ds/sd/salesactiv/ctrtmgnt/sd_202_02_03b.jsp" , "사무실임대계약정보") ;
    $c.win.openMenu($p, "사무실임대계약정보", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_03b.xml", "sd_202_02_03b");
  }
};

// function desc : 계약변경, 재계약
scwin.f_changeCtrt = async function (contractCopyClassificationCode) {
  // $c.gus.cfAlertMsg("contractCopyClassificationCode = " + contractCopyClassificationCode)
  // /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_01b.xml
  if (ds_ctrt.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_SD_WRN_002);
    return;
  }
  var ctrtNo = ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtNo").replace("-", "");

  // let cfRet = await $c.win.confirm(scwin.MSG_SD_CRM_001, new Array("재계약"))
  let cfRet = await $c.win.confirm($p, "재계약을 실행하시겠습니까?");
  if (cfRet) {
    // tr_copy.Action = "/ds.sd.salesactiv.ctrtmgnt.ExecuteRentalContractCopyCMD.do?contractNumber=" + ctrtNo ;
    // tr_copy.post();
    ds_ctrtNo.set("contractNumber", ctrtNo);
    $c.sbm.execute($p, sbm_copy);
  }
};

// function desc : 계약삭제
scwin.f_deleteCtrt = async function (e) {
  if (ds_ctrt.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_002);
    return;
  }
  var ctrtNo = ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtNo").replace("-", "");
  // let cfRet = await $c.win.confirm(scwin.MSG_SD_CRM_001, new Array("계약삭제"))
  let cfRet = await $c.win.confirm($p, "계약삭제을 실행하시겠습니까?"); // (scwin.MSG_SD_CRM_001, new Array("계약삭제"))
  if (cfRet) {
    // sbm_tr_delete.Action = "/ds.sd.salesactiv.ctrtmgnt.ExecuteRentalContractDeleteCMD.do?contractNumber=" + ctrtNo;
    // sbm_tr_delete.post();
    ds_ctrtNo.set("contractNumber", ctrtNo);
    $c.sbm.execute($p, sbm_delete);
  }
};
scwin.udc_comCode1_onclickEvent = function (gubun) {
  let chgGubun = 'F';
  if (gubun != null) chgGubun = gubun;
  udc_comCode1.cfCommonPopUp(scwin.udc_comCode1_callBackFunc, ed_ctrtClntNo.getValue().trim(), ed_ctrtClntNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null, null, "F", null);
};
scwin.udc_comCode1_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_ctrtClntNo.getValue().trim();

  // if (ed_ctrtClntNo.Modified ) {

  if (strClntNo != null && strClntNo != "") {
    scwin.f_chkField("ed_ctrtClntNo", "ed_ctrtClntNm", 1);
  } else {
    ed_ctrtClntNm.setValue("");
  }
  // }
};
scwin.udc_comCode1_onviewchangeNameEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_ctrtClntNm.getValue().trim();
  if (strClntNo != null && strClntNo != "") {
    scwin.f_chkField("ed_ctrtClntNo", "ed_ctrtClntNm", 1);
  } else {
    ed_ctrtClntNm.setValue("");
  }
};
scwin.udc_comCode1_callBackFunc = function (ret) {
  if (!ret || ret[0] == "N/A") {
    return;
  }
  ed_ctrtClntNo.setValue(ret[0]);
  ed_ctrtClntNm.setValue(ret[1]);
};
scwin.udc_comCode2_onclickEvent = function (gubun) {
  let chgGubun = 'F';
  if (gubun != null) chgGubun = gubun;
  udc_comCode2.cfCommonPopUp(scwin.udc_comCode2_callBackFunc, ed_deptCd.getValue().trim(), ed_deptNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null, null, "F", null);
};
scwin.udc_comCode2_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_deptCd.getValue().trim();
  if (strClntNo != null && strClntNo != "") {
    scwin.f_chkField("ed_deptCd", "ed_deptNm", 2);
  } else {
    ed_deptNm.setValue("");
  }
};
scwin.udc_comCode2_onviewchangeNameEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_deptNm.getValue().trim();
  if (strClntNo != null && strClntNo != "") {
    scwin.f_chkField("ed_deptCd", "ed_deptNm", 2);
  } else {
    ed_deptNm.setValue("");
  }
};
scwin.udc_comCode2_callBackFunc = function (ret) {
  if (!ret || ret[0] == "N/A") {
    return;
  }
  ed_deptCd.setValue(ret[0]);
  ed_deptNm.setValue(ret[1]);
};
scwin.udc_comCode3_onclickEvent = function (gubun) {
  let chgGubun = 'F';
  if (gubun != null) chgGubun = gubun;
  udc_comCode3.cfCommonPopUp(scwin.udc_comCode3_callBackFunc, ed_empNo.getValue().trim(), ed_empNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null, null, "F", null);
};
scwin.udc_comCode3_onblurCodeEvent = function (e) {
  var strempNo = "";
  strempNo = ed_empNo.getValue().trim();
  if (strempNo != null && strempNo != "") {
    scwin.f_chkField("ed_empNo", "ed_empNm", 3);
  } else {
    ed_empNm.setValue("");
  }
};
scwin.udc_comCode3_onviewchangeNameEvent = function (info) {
  var strempNo = "";
  strempNo = ed_empNm.getValue().trim();
  if (strempNo != null && strempNo != "") {
    scwin.f_chkField("ed_empNo", "ed_empNm", 3);
  } else {
    ed_empNm.setValue("");
  }
};
scwin.udc_comCode3_callBackFunc = function (ret) {
  if (!ret || ret[0] == "N/A") {
    return;
  }
  ed_empNo.setValue(ret[0]);
  ed_empNm.setValue(ret[1]);
};

// object 데이타 변경시 호출
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = chgValue1;
  var chgObj2 = chgValue2;
  var objType1 = chgValue1.substr(0, 2);
  var objType2 = chgValue2.substr(0, 2);
  if (objType1 == "ed") {
    chgObj2 = "";
    // if (chgObj1.Text.trim() != "") {
    if (chgObj1.trim() != "") {
      scwin.f_openPopUp(disGubun, "T");
    }
  } else {
    // if (chgObj1.value.trim() == "") {
    if (chgObj1.trim() == "") {
      if (objType2 == "ed") {
        chgObj2 = "";
      } else {
        chgObj2 = "";
      }
    } else {
      if (chgObj1.hidVal != null && chgObj1.value == chgObj1.hidVal) return;
      if (objType2 == "ed") {
        chgObj2 = "";
      } else {
        chgObj2 = "";
      }
      scwin.f_openPopUp(disGubun, "T");
    }
  }
};
scwin.f_openPopUp = function (disGubun, chkChg) {
  switch (disGubun) {
    case 1:
      scwin.udc_comCode1_onclickEvent(chkChg);
      break;
    case 2:
      scwin.udc_comCode2_onclickEvent(chkChg);
      break;
    case 3:
      scwin.udc_comCode3_onclickEvent(chkChg);
      break;
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    var row = ds_ctrt.getRowCount();
    if (row == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    ds_ctrt.setRowPosition(0);
    gr_ctrt.setFocusedCell(0, 0);
    // 그리드 조회건수
    tbx_totalRows.setValue(row);
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
      let paramObj = {
        ctrtNo: ds_ctrt.getCellData(row - 1, "ctrtNo")
      };
      if (ds_ctrt.getCellData(row - 1, "rentCtrtClsCd") == "01") {
        // cfTabMenuAdd("/ds/sd/salesactiv/ctrtmgnt/sd_202_02_02b.jsp?ctrtNo=" + ds_ctrt.nameValue(ds_ctrt.CountRow, "ctrtNo"), "장비임대계약정보");
        $c.win.openMenu($p, "장비임대계약정보", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_02b.xml", "sd_202_02_02b.jsp", paramObj);
      } else {
        // cfTabMenuAdd("/ds/sd/salesactiv/ctrtmgnt/sd_202_02_03b.jsp?ctrtNo=" + ds_ctrt.nameValue(ds_ctrt.CountRow, "ctrtNo"), "사무실임대계약정보");
        $c.win.openMenu($p, "사무실임대계약정보", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_03b.xml", "sd_202_02_03b", paramObj);
      }
    }

    //gr_ctrt.setColumnStyle("ctrtNo", "color:blue; text-decoration:underline;");
  }
};
scwin.sbm_copy_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_SD_INF_001);
    $c.gus.cfTurnCreateFlag($p, true);
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_INF_002);
    scwin.f_Retrieve();
  }
};
scwin.ds_ctrt_onrowpositionchange = function (info) {
  let row = info.newRowIndex;

  // 기본 disable
  $c.gus.cfDisableObjects($p, [btn_ctrtDel]);
  if (row < 0) return;
  if (ds_ctrt.getCellData(row, "ctrtRegStsCd") != "02") {
    $c.gus.cfEnableObjects($p, [btn_ctrtDel]);
    return;
  }
  if (ds_ctrt.getCellData(row, "regId") == scwin.regId && scwin.sysAdminYn != "1") {
    $c.gus.cfEnableObjects($p, [btn_ctrtDel]);
  }
};
scwin.gr_ctrt_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    var ctrtNo = ds_ctrt.getCellData(rowIndex, "ctrtNo").replace("-", "");
    let paramObj = {
      ctrtNo: ctrtNo
    };

    // if (ds_ctrt.nameValue(ds_ctrt.CountRow, "rentCtrtClsCd") == "01") {
    if (ds_ctrt.getCellData(rowIndex, "rentCtrtClsCd") == "01") {
      // cfTabMenuAdd("/ds/sd/salesactiv/ctrtmgnt/sd_202_02_02b.jsp?ctrtNo=" + ds_ctrt.getCellData(rowIndex, "ctrtNo"), "장비임대계약정보");
      $c.win.openMenu($p, "장비임대계약정보", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_02b.xml", "sd_202_02_02b", paramObj);
    } else {
      // cfTabMenuAdd("/ds/sd/salesactiv/ctrtmgnt/sd_202_02_03b.jsp?ctrtNo=" + ds_ctrt.getCellData(rowIndex, "ctrtNo"), "사무실임대계약정보");
      $c.win.openMenu($p, "사무실임대계약정보", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_02_03b.xml", "sd_202_02_03b", paramObj);
    }
  }
};

// Excel Download
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_ctrt.getRowCount();
  var sheetTitle = "계약목록";
  var row = gr_ctrt.getFocusedRowIndex();
  var col = gr_ctrt.getFocusedColumnIndex();

  // focus 이동 (예: 0,0)
  gr_ctrt.setFocusedCell(0, 1);
  if (vResultCountRow != 0) {
    // cfGridToExcel(gr_ctrt, sheetTitle, fileName, 2+4+8+16); //show false 미출력 1 , 출력 2
    var options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      type: "2+4+8+16",
      useStyle: "true"
    };
    await $c.data.downloadGridViewExcel($p, gr_ctrt, options);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  gr_ctrt.setFocusedCell(row, col); // 다시 복원
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:125px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td',headers:''},E:[{T:1,N:'xf:input',A:{class:'input_class',id:'ed_CtrtNo',placeholder:'',style:'','ev:oninput':'scwin.ed_CtrtNo_onkeyup',readOnly:'false',objType:'Data',ref:'data:oGDS_view_cond.ctrtNo',maxlength:'11',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'ed_ctrtClntNo',tagname:'td',headers:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCode1',maxlengthCode:'6',codeId:'ed_ctrtClntNo',nameId:'ed_ctrtClntNm',code:'clntNo',name:'ClntNm',refDataCollection:'oGDS_view_cond',btnId:'btn_comCode1','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode1_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode1_onviewchangeNameEvent',selectID:'retrieveClntInfo',allowCharCode:'0-9',objTypeName:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'txt_ctrtClntNm',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임대계약구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',headers:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:oGDS_view_cond.rentCtrtClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 175px;',id:'lc_rentCtrtClsCd',renderType:'',class:'',direction:'auto',sortOption:'label',sortMethod:'descending',textAlign:'left',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이의수용'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이의신청'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_ctrtRegStsCd',objType:'data',ref:'data:oGDS_view_cond.ctrtRegStsCd',search:'start',style:'width: 150px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th w2tb_noTH'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',headers:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCode2',refDataCollection:'oGDS_view_cond',codeId:'ed_deptCd',nameId:'ed_deptNm',code:'deptCd',name:'deptNm',btnId:'btn_comCode2','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode2_onviewchangeNameEvent',selectID:'retrieveLogisDeptInfo',objTypeName:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',headers:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCode3',maxlengthCode:'6',refDataCollection:'oGDS_view_cond',codeId:'ed_empNo',nameId:'ed_empNm',code:'empNo',name:'empNm',btnId:'btn_comCode3','ev:onclickEvent':'scwin.udc_comCode3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode3_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode3_onviewchangeNameEvent',selectID:'retrieveLoBranEmpInfo',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{ref:'data:oGDS_view_cond.qryDtCls',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',id:'lc_qryDtCls',renderType:'',class:'req',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약등록일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약개시일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약만료일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',headers:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar5',refDataMap:'oGDS_view_cond',refEdDt:'qryDtTo',refStDt:'qryDtFrom',style:'',class:'req',edFromId:'ed_qryDtFrom',edToId:'ed_qryDtTo',mandatory:'true',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약서유무 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ctrtDocExstYn',displayMode:'label',ref:'data:oGDS_view_cond.ctrtDocExstYn',renderType:'',sortMethod:'descending',sortOption:'label',style:'width: 150px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1 : YES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0 : NO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrp',gridUpYn:'N',gridDownFn:'scwin.f_logisDownLoadExcelSheet',gridID:'gr_ctrt',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowNumWidth:'40',columnMove:'false',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ctrt',style:'',id:'gr_ctrt',visibleRowNum:'17',class:'wq_gvw',defaultCellHeight:'24',autoFit:'allColumn',resize:'true',dataDragDrop:'false',dataDragSelectAutoScroll:'false',checkReadOnlyOnPasteEnable:'false',focusMode:'cell',readOnly:'true',sortable:'true','ev:oncelldblclick':'scwin.gr_ctrt_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption15',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ed_CtrtNo',value:'계약번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'거래처 코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'거래처명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'임대계약구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'410',inputType:'text',id:'column48',value:'계약일자',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column50',value:'담당자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',value:'등록점소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'계약서유무',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'등록상태',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'등록',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'개시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'만료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtNo',displayMode:'label',textAlign:'left',sortable:'true',class:'underline',style:'color:#0000FF;'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'center',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rentCtrtClsNm',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regDtm',displayMode:'label',textAlign:'center',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtStDt',displayMode:'label',textAlign:'center',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtEndDt',displayMode:'label',textAlign:'center',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'ctrtEmpNm',displayMode:'label',textAlign:'left',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtDeptNm',displayMode:'label',textAlign:'left',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'ctrtDocExstYn',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtRegStsNm',displayMode:'value delim label',textAlign:'left',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'',disabled:'false',id:'btn_reCtrt',type:'button',class:'btn white',title:'기존거래처의 계약만료후에 재계약하는 것으로 계약번호가 신규로 생성됩니다.','ev:onclick':'scwin.f_changeCtrt',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'재계약'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ctrtNew01',style:'',type:'button',title:'기존거래처의 계약만료후에 재계약하는 것으로 계약번호가 신규로 생성됩니다.','ev:onclick':'scwin.f_newCtrt(\'01\')',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'장비신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ctrtNew02',style:'',type:'button',title:'사무실임대 신규 계약등록을 하는것으로 계약번호가 신규로 생성됩니다.','ev:onclick':'scwin.f_newCtrt(\'02\')',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'사무실신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtDel',style:'',type:'button','ev:onclick':'scwin.f_deleteCtrt',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})