/*amd /ui/ds/lo/comninfomgnt/lo_100_07_05b.xml 29099 12cef35b8b29af9f86f7ce5311a0c2f2e8ef91d510793d86e0a47878a651814c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntyCd',name:'국가코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntyNm',name:'국가명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_port',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portEngNm',name:'항구명(국문)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntyCd',name:'국가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCntyNm',name:'hid국가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntyNm',name:'국가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperPortCd',name:'상위항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperPortNm',name:'상위항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidUpperPortNm',name:'히든상위항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'관리점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'관리점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'관리점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncdYn',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrievePortListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_view_cond","key":"GAUCE"}',target:'data:json,{"id":"ds_port","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SavePortListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_port","key":"IN_DS1"}] ',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// scwin.name : 
// scwin.desc : 전역변수 선언
//-------------------------------------------------------------------------  
scwin.pos_rowSts = 0;
scwin.MSG_LO_ERR_001 = "국가를 먼저 입력 바랍니다.";

//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  //여기는 안타네.
  //console.log("f_OnLoad~~");
  //f_defaultValue();
  //f_createHeader();
};
scwin.onUdcCompleted = function () {
  console.log("onUdcCompleted~~");
  scwin.f_defaultValue();
};
//-------------------------------------------------------------------------
// scwin.name : f_newCtrt
// scwin.desc : 신규화면 클릭
//-------------------------------------------------------------------------
scwin.f_newCtrt = function () {};
//-------------------------------------------------------------------------
// scwin.name : f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("f_defaultValue~~");
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_save]);

  // 입력 Object 중 한글입력 항목의 IME Mode를 설정한다.
  //cfSetIMEModeActiveObjects([txt_CntyNm]);

  ed_CntyCd.focus();
};

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  /*	BE
  	var strPath = "/ds.lo.comninfomgnt.RetrievePortListCMD.do?cntyCd=" + ed_CntyCd.Text.trim();
  
  	tr_retrieve.Action = strPath;
      tr_retrieve.Post();
  */
  if ((await $c.gus.cfValidate($p, [portCondtionPart])) == false) {
    return;
  }
  ds_port.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);

  //ds_port.DataId = "/ds.lo.comninfomgnt.RetrievePortListCMD.do?cntyCd=" + ed_CntyCd.Text.trim();
  //ds_port.Reset();
};

//-------------------------------------------------------------------------
// 항구관리 엑셀파일로 저장
//-------------------------------------------------------------------------
/*
scwin.f_portCondtionPartExcel() {
    //sheet명, 저장파일명,     저장 다이얼로그
	cfGridToExcel(gr_port, "항구관리", "항구관리.xls", 4+8+16);
}

//-------------------------------------------------------------------------
// scwin.name : f_grdHeiht
// scwin.desc : 그리드 높이조정
//-------------------------------------------------------------------------   
scwin.f_grdHeiht = function(objGrd, size) {
    var objGrd = eval(objGrd);
  	var strHeight = objGrd.style.height ;
  	var intHeight = parseInt(strHeight.replace("px",""));
  	intHeight = intHeight + size;
 	if (intHeight > 0 ) {
  		objGrd.style.height = intHeight + "px";
 	}
};
*/

//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------

scwin.f_Save = async function () {
  if (ds_port.getModifiedJSON().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("항구관리"));
    return false;
  }
  scwin.pos_rowSts = ds_port.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    //if ( cfConfirmMsg(MSG_CM_CRM_001)) {	
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_ReqFieldChk = async function () {
  //필수입력항목 체크
  /*
  if (await $c.gus.cfValidate([gr_port]) == false) {
  return false;
  }
  */

  let validArry = [{
    id: "portCd",
    name: "항구코드",
    key: true,
    mandatory: true
  }, {
    id: "portNm",
    name: "항구명",
    key: false,
    mandatory: true
  }, {
    id: "cntyCd",
    name: "국가코드",
    key: false,
    mandatory: true
  }, {
    id: "useYn",
    name: "사용여부명",
    key: false,
    mandatory: true
  }];
  let gridName = "항구";
  if (!(await $c.gus.cfValidateGrid($p, gr_port, null, null, validArry, gridName))) {
    return false;
  }
  return true;
};
scwin.f_OpenPopUp = function (chgGubun) {
  var rtnList = new Array();

  //rtnList = cfCommonPopUp('retrieveCountryCodeInfo',

  udc_CntyCd.setSelectId('retrieveCountryCodeInfo');
  rtnList = udc_CntyCd.cfCommonPopUp(scwin.udc_CntyCd_callBack, ed_CntyCd.getValue().trim(), ed_CntyNm.getValue(), chgGubun, '5', '국가코드,국가명', '150,170', null, 'ZZ103', '440', '500', null, null, null, 'F', null);

  //$c.gus.cfSetReturnValue(rtnList, ed_CntyCd, txt_CntyNm);
};

//-------------------------------------------------------------------------
// scwin.name : f_chkField
// scwin.desc : object변경
//-------------------------------------------------------------------------
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = eval(chgValue1);
  var chgObj2 = eval(chgValue2);
  var objType1 = chgValue1.substr(0, 2);
  var objType2 = chgValue2.substr(0, 2);
  if (objType1 == "ed") {
    if (chgObj1.getValue().trim() == "") {
      chgObj2.setValue("");
    } else {
      chgObj2.setValue("");
      //scwin.f_OpenPopUp(disGubun, "T");
      scwin.f_OpenPopUp("T");
    }
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, portCondtionPart, null);
  //f_defaultValue();
};
scwin.f_addRow = function () {
  console.log("scwin.f_addrow~~");
  var row = ds_port.insertRow();
  gr_port.setFocusedCell(row, 1, false);
  ds_port.setCellData(row, "useYn", 1);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

//-------------------------------------------------------------------------
// scwin.name : f_delrow
// scwin.desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  var row = ds_port.getRowPosition();
  if (ds_port.getRowStatus(row) == "C") {
    ds_port.removeRow(row);
  } else {
    ds_port.deleteRow(row);
  }
  var preRow = 0;
  if (row > 0) preRow = row - 1;
  //ds_port.setRowPosition(preRow);
  gr_port.setFocusedCell(preRow, 1, false);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_port.getRowCount();
  //cfHideDSWaitMsg(gr_port);
  //gr_port.ColumnProp('portCd', 'Edit') = "none";

  //cfShowTotalRows(totalRows, rowcnt);
  tbx_totalRows.setValue(rowcnt);

  //$c.gus.cfGoPrevPosition((ds_port, pos_rowSts);

  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ds_port.sort('portNm', 0);
  gr_port.setFocusedCell(0, "portCd", false);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfCheckCreateFlag($p, false);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  //cfHideDSWaitMsg(gr_port);
  //cfShowError(gr_port);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  //cfShowError(this);
};
scwin.gr_port_onrowindexchange = function (rowIndex, oldRow) {
  console.log("scwin.gr_port_onrowindexchange~~");
  var Row = rowIndex;
  //debugger;
  $c.gus.cfPrepareHidVal($p, ds_port, Row, ["cntyCd", "cntyNm", "lobranCd", "lobranNm", "upperPortCd", "upperPortNm"]);
  if (ds_port.getRowStatus(Row) == "C") {
    gr_port.setReadOnly("cell", Row, "portCd", false);
  } else {
    gr_port.setReadOnly("cell", Row, "portCd", true);
  }
};
scwin.udc_CntyCd_onblurCodeEvent = function (e) {
  console.log('scwin.udc_CntyCd_onblurCodeEvent~~');
  scwin.f_chkField('ed_CntyCd', 'ed_CntyNm', 1);
};
scwin.udc_CntyCd_onblurNameEvent = function (e) {
  console.log('scwin.udc_CntyCd_onblurNameEvent~~');
  scwin.f_chkField('ed_CntyNm', 'ed_CntyCd', 1);
};
scwin.udc_CntyCd_onclickEvent = function (e) {
  console.log('scwin.udc_CntyCd_onblurNameEvent~~');
  scwin.f_OpenPopUp('F');
};
scwin.udc_CntyCd_callBack = function (ret) {
  console.log("scwin.udc_CntyCd_callBack");
  scwin.f_setUdcPopCallback(ret, ed_CntyCd, ed_CntyNm);
};

//udc팝업공통 콜백처리
scwin.f_setUdcPopCallback = function (ret, objCode, objName) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        objCode.setValue("");
        objName.setValue("");
        objCode.hidVal = "";
        return;
      }
      objCode.setValue(rtnList[0]); // 코드값
      objName.setValue(rtnList[1]); // 코드명
      objCode.hidVal = rtnList[0]; // 코드값
    } else {
      objCode.setValue("");
      objName.setValue("");
      objCode.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//function f_openCommPopUpGrid(disGubun, row, pClose) {
scwin.gr_port_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_port.getColumnID(columnIndex);
  var rtnList = new Array();
  switch (colid) {
    case "lobranNm":
      udc_comCodeGrid.setSelectId('retrieveLobranInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranCd_callBackFunc, ds_port.getCellData(rowIndex, "lobranCd"), ds_port.getCellData(rowIndex, "lobranNm"), "F", '5', null, '150,170', null, null, '440', '500', null, null, null, 'F', null);
      ds_port.setCellData(rowIndex, "lobranCd", "");
      //cfSetGridReturnValue(rtnList, ds_port, rowIndex, "lobranCd", "lobranCd");	
      break;
    case "cntyNm":
      udc_comCodeGrid.setSelectId('retrieveCountryCodeInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_cntyCd_callBackFunc, ds_port.getCellData(rowIndex, "cntyCd"), ds_port.getCellData(rowIndex, "cntyNm"), "F", '5', '국가코드,국가명', '150,170', null, 'ZZ103', '440', '500', null, null, null, 'F', null);

      //cfSetGridReturnValue(rtnList, ds_port, rowIndex, "cntyCd", "cntyNm");	
      ds_port.setCellData(rowIndex, "cntyCd", "");
      break;
    case "upperPortNm":
      if (ds_port.getCellData(rowIndex, "cntyCd") == "") {
        $c.gus.cfAlertMsg($p, MSG_LO_ERR_001);
        return;
      }
      ds_port.setCellData(rowIndex, "upperPortCd", "");
      udc_comCodeGrid.setSelectId('retrievePortInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_upperPortCd_callBackFunc, ds_port.getCellData(rowIndex, "upperPortCd"),
      //상위항구코드	
      ds_port.getCellData(rowIndex, "upperPortNm"),
      //상위항구명	
      "F", '5', null, '150,170', null, ds_port.getCellData(rowIndex, "cntyCd"), '440', '500', null, null, null, 'F', null);

      //cfSetGridReturnValue(rtnList, ds_port, rowIndex, "upperPortCd", "upperPortNm");	

      break;
    default:
      break;
  }
};
scwin.gr_port_onafteredit = function (rowIndex, columnIndex, value) {
  //console.log("gr_port_onafteredit~~~");
  //console.log("rowIndex-->"+rowIndex);
  //console.log("new-->"+ds_port.getCellData(rowIndex,"lobranNm"));
  //console.log("org-->"+ds_port.getOriginalCellData(rowIndex,"lobranNm"));
  //console.log("value-->"+value);

  //var rtnList = new Array();
  let colid = gr_port.getColumnID(columnIndex);
  let olddata = ds_port.getOriginalCellData(rowIndex, colid);
  scwin.pos_rowSts = rowIndex; //현재포커스 콜백에서 사용.
  switch (colid) {
    case "lobranNm":
      if (ds_port.getCellData(rowIndex, "lobranNm") == olddata) {
        return;
      } else {
        /*
        if (ds_port.getCellData(rowIndex,"lobranNm").trim() == "") {
        ds_port.setCellData(rowIndex,"lobranCd","");	//관리점소코드
        return;
        }
        */
        //ds_port.setCellData(rowIndex,"lobranCd","");	//관리점소코드
        //ds_port.setCellData(rowIndex,"lobranNm","");

        //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveLobranInfo',	
        udc_comCodeGrid.setSelectId('retrieveLobranInfo');
        rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_lobranCd_callBackFunc, ds_port.getCellData(rowIndex, "lobranCd"),
        //관리점소코드
        ds_port.getCellData(rowIndex, "lobranNm"),
        //관리점소
        "T", '5', null, '150,170', null, null, '440', '500', null, null, null, 'F', null);

        //cfSetGridReturnValue(rtnList, ds_port, Row, "lobranCd", "lobranNm");
        ds_port.setCellData(rowIndex, "lobranCd", "");
        ds_port.setCellData(rowIndex, "lobranNm", "");
      }
      break;
    case "cntyNm":
      if (ds_port.getCellData(rowIndex, "cntyNm") == olddata) {
        return;
      } else {
        /*
        				if (ds_port.getCellData(rowIndex,"cntyNm").trim() == "") {
        					ds_port.setCellData(rowIndex,"cntyCd","");	//국가코드
        					return;
        				}
                        
                        */
        //ds_port.setCellData(rowIndex,"cntyCd","");	//국가코드

        //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveCountryCodeInfo',	
        udc_comCodeGrid.setSelectId('retrieveCountryCodeInfo');
        rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_cntyCd_callBackFunc, ds_port.getCellData(rowIndex, "cntyCd"),
        //국가코드	
        ds_port.getCellData(rowIndex, "cntyNm"),
        //국가명	
        "T", '5', null, '150,170', null, null, '440', '500', null, null, null, 'F', null);
        ds_port.setCellData(rowIndex, "cntyNm", ""); //관리점소코드
        ds_port.setCellData(rowIndex, "cntyCd", "");
        console.log('국가명~~');
        //cfSetGridReturnValue(rtnList, ds_port, Row, "cntyCd", "cntyNm");
      }
      break;
    case "upperPortNm":
      if (ds_port.getCellData(rowIndex, "upperPortNm") == olddata) {
        return;
      } else {
        if (ds_port.getCellData(rowIndex, "upperPortNm").trim() == "") {
          ds_port.setCellData(rowIndex, "upperPortCd", ""); //상위항구코드
          return;
        }
        if (ds_port.getCellData(rowIndex, "cntyCd") == "") {
          cfAlertMsg(MSG_LO_ERR_001);
          return;
        }
        ds_port.setCellData(rowIndex, "upperPortCd", ""); //상위항구코드

        //rtnList = udc_comCodeGrid.cfCommonPopUp('retrievePortInfo',	
        udc_comCodeGrid.setSelectId('retrievePortInfo');
        rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_cntyCd_callBackFunc, ds_port.getCellData(rowIndex, "upperPortCd"),
        //상위항구코드	
        ds_port.getCellData(rowIndex, "upperPortNm"),
        //상위항구명	
        "T", '5', null, '150,170', null, ds_port.getCellData(rowIndex, "cntyCd"), '440', '500', null, null, null, 'F', null);
      }
      //cfSetGridReturnValue(rtnList, ds_port, Row, "upperPortCd", "upperPortNm");

      break;
    default:
      break;
  }
};
scwin.udc_comCodeGrid_lobranCd_callBackFunc = function (ret) {
  console.log('scwin.udc_comCodeGrid_lobranCd_callBackFunc~~');
  console.log(ret);
  if (ret != null && ret != 'N/A') {
    $c.gus.cfSetGridReturnValue($p, ret, ds_port, scwin.pos_rowSts, "lobranCd", "lobranNm");
  } else {
    ds_port.setCellData(scwin.pos_rowSts, "lobranCd", "");
    ds_port.setCellData(scwin.pos_rowSts, "lobranNm", "");
  }
};
scwin.udc_comCodeGrid_cntyCd_callBackFunc = function (ret) {
  console.log('scwin.udc_comCodeGrid_cntyCd_callBackFunc~~');
  console.log(ret);
  if (ret != null && ret != 'N/A') {
    $c.gus.cfSetGridReturnValue($p, ret, ds_port, scwin.pos_rowSts, "cntyCd", "cntyNm");
  } else {
    ds_port.setCellData(scwin.pos_rowSts, "cntyCd", "");
    ds_port.setCellData(scwin.pos_rowSts, "cntyNm", "");
  }
};
scwin.udc_comCodeGrid_upperPortCd_callBackFunc = function (ret) {
  if (ret != null && ret != 'N/A') {
    $c.gus.cfSetGridReturnValue($p, ret, ds_port, scwin.pos_rowSts, "upperPortCd", "upperPortNm");
  } else {
    ds_port.setCellData(scwin.pos_rowSts, "upperPortCd", "");
    ds_port.setCellData(scwin.pos_rowSts, "upperPortNm", "");
  }
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.gr_port_onviewchange = function (info) {
  console.log('gr_port_onviewchange~');
  console.log(info);
  var row = info.rowIndex;
  var colid = info.colId;
  if (colid == 'lobranNm') {
    if (ds_port.getCellData(row, colid) == "") {
      ds_port.setCellData(row, "lobranCd", "");
      ds_port.setCellData(row, "lobranNm", "");
    }
  }
  scwin.pos_rowSts = row; //현재포커스 콜백에서 사용.
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

/*
scwin.containerCntseal2ToUpper = function(value) {
   //속성 allowChar="a-zA-Z0-9" displayFormatter="scwin.containerCntseal2ToUpper"
    try{
        return value.toUpperCase();
    }catch (e){
        console.log("containerCntseal2ToUpper : " + e);
    }
};
*/

scwin.gr_port_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "portCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'국가',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_CntyCd',selectID:'retrieveCountryCodeInfo',codeId:'ed_CntyCd',popupTitle:'',nameId:'ed_CntyNm',style:'',id:'udc_CntyCd',btnId:'btn_CntyCd',mandatoryName:'true',mandatoryCode:'true',validTitle:'국가','ev:onblurCodeEvent':'scwin.udc_CntyCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_CntyCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_CntyCd_onclickEvent',refDataCollection:'ds_view_cond',code:'cntyCd',name:'cntyNm',maxlengthCode:'2',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',objTypeCode:'Data',objTypeName:'data',maxlengthName:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'항구관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_port',gridUpYn:'N',grdDownOpts:'{"fileName" : "항구관리.xlsx","sheetName" : "항구관리","type":"2+4+8+16","hiddenVisible":"true"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_port',id:'gr_port',style:'',visibleRowNum:'17',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_port_onrowindexchange','ev:ontextimageclick':'scwin.gr_port_ontextimageclick','ev:onafteredit':'scwin.gr_port_onafteredit','ev:onviewchange':'scwin.gr_port_onviewchange','ev:oneditkeyup':'scwin.gr_port_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'항구코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'항구명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'항구명(국문)',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'국가코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'hid국가명',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'국가명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'상위항구코드',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'상위항구명',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'히든상위항구명',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'관리점소코드',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'관리점소',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'관리점소',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'UNCODE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'portCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left',maxLength:'5',allowChar:'A-Za-z0-9',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portEngNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hidCntyNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntyNm',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperPortCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperPortNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hidUpperPortNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hidLobranNm',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'lobranNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'useYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'uncdYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow',btnCancelObj:'btn_canRow',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_delRow',rowAddObjType:'data',rowAddUserAuth:'C',rowDelObjType:'data',rowDelUserAuth:'D',cancelObjType:'data',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',gridID:'gr_port'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent(\'F\')','ev:onviewchangeNameEvent':'scwin.udc_ctrtClntNo_onviewchangeNameEvent',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'retrieveClntInfo',style:'display:none;'}}]}]}]})