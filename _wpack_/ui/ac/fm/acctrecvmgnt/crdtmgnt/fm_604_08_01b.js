/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_08_01b.xml 28935 e7009878935edd3d502a49de402bd21a0fff5c1751b917ee39312d45dfa2b162 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_detailCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_crdtLimitMgnt',repeatNode:'map',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_crdtLimitMgnt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befCrdtLimit',name:'변경전 여신한도',dataType:'number'}},{T:1,N:'w2:column',A:{id:'modCrdtLimit',name:'변경후 여신한도',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befCrdtLimit',name:'변경전여신한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCrdtLimit',name:'변경후여신한도',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtSchedule',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCrdtScheduleListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_crdtLimitMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtLimitMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtSchedule_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createCrdtSchedule',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RegistCrdtScheduleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_crdtLimitMgnt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createCrdtSchedule_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveHistSchedule',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveHistScheduleListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_detailCondition","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveHistSchedule_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.rowOld = 0;
scwin.today = scwin.g_sCurrDate;
scwin.eventCnt = 0;
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 8));
  ed_endDt.setValue(scwin.g_sCurrDate.substring(0, 8));
  udc_creditCrnLimitInfo.hide();
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  // $p.setTimeout(function () {
  //     scwin.eventCnt = 0;
  // }, { delay: 1500 });

  let rtnList = null;
  let sCmdName = "";
  let code = txtCode.getValue();
  let name = txtName.getValue();
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null); // 거래처
      break;
    // 여신대상사업자번호 PopUp 호출
    case '2':
      rtnList = udc_creditCrnInfo.cfCommonPopUp(scwin.udc_creditCrnInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 여신대상사업자번호
      break;
    // 여신한도조회 설정PopUp 호출
    case '3':
      rtnList = udc_creditCrnLimitInfo.cfCommonPopUp(scwin.udc_creditCrnLimitInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 여신대상사업자번호+신용정보등록내역포함
      break;
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.setValue(rtnList[0]);	    // 코드
  //     txtName.setValue(rtnList[1]);	    // 코드명
  //     txtCode.options.hidVal = rtnList[0];	// 코드
  // } else {
  //     txtCode.setValue("");	    // 코드
  //     txtName.setValue("");	    // 코드명
  //     txtCode.options.hidVal = "";	// 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    txtCode.setValue(rtnList[0]); // 코드
    txtName.setValue(rtnList[1]); // 코드명
    txtCode.options.hidVal = rtnList[0]; // 코드
  } else {
    txtCode.setValue(""); // 코드
    txtName.setValue(""); // 코드명
    txtCode.options.hidVal = ""; // 코드
  }
};
scwin.udc_creditCrnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]); // 코드
    ed_crnNm.setValue(rtnList[1]); // 코드명
    ed_crn.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_crn.setValue(""); // 코드
    ed_crnNm.setValue(""); // 코드명
    ed_crn.options.hidVal = ""; // 코드
  }
};
scwin.udc_creditCrnLimitInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    txtCode.setValue(rtnList[0]); // 코드
    txtName.setValue(rtnList[1]); // 코드명
    txtCode.options.hidVal = rtnList[0]; // 코드
  } else {
    txtCode.setValue(""); // 코드
    txtName.setValue(""); // 코드명
    txtCode.options.hidVal = ""; // 코드
  }
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
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
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
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (select_code, pCode, pName, row, pClose) {
  debugger;
  let evNm = arguments[5] || "";
  if (evNm && $c.win.getEventList($p, gr_crdtLimitMgnt, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });

  // 선언부
  // let rtnList = null;  // 공통POP-UP -> 요청화면 
  // let rowPos = 0;
  code = ds_crdtLimitMgnt.getCellData(row, pCode);
  if (code == null || code == "") code = "";
  switch (select_code) {
    // 관리부서 PopUp 호출
    // case '1' :
    //     udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, "","",pClose,null,null,null,null,null,null,null,null,null); // 부서
    //     break;
    // // 여신대상사업자번호 PopUp 호출
    // case '2' :
    //     udc_creditCrnInfo.cfCommonPopUp(scwin.udc_creditCrnInfo_callBackFunc, "","",pClose,null,null,null,null,null,null,null,null,null,null,null,null,null); // 여신대상사업자번호
    //     break;
    // 여신한도조회 설정PopUp 호출
    case '3':
      if (scwin.eventCnt == 1) {
        let crn = ds_crdtLimitMgnt.getCellData(row, "crn");
        ds_crdtLimitMgnt.setCellData(row, "crn", "");
        ds_crdtLimitMgnt.setCellData(row, "busiNm", "");
        udc_creditCrnLimitInfo.cfCommonPopUp(scwin.udc_creditCrnLimitInfo_grid_callBackFunc, crn, "", pClose, null, null, null, null, null, null, null, null, null, null, null, null, null); // 여신대상사업자번호
        break;
      }
  }

  // if (select_code == '3'){
  //     $c.gus.cfSetGridReturnValue(rtnList, ds_crdtLimitMgnt,Row,pCode,pName);	
  //     ds_crdtLimitMgnt.setCellData(Row, "befCrdtLimit", rtnList[7]);

  // } else {
  //     $c.gus.cfSetGridReturnValue(rtnList, ds_crdtLimitMgnt,Row,pCode,pName);		    
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
// scwin.udc_acctDeptCdInfo_callBackFunc = function(rtnList) {};

// scwin.udc_creditCrnInfo_callBackFunc = function(rtnList) {};

scwin.udc_creditCrnLimitInfo_grid_callBackFunc = function (rtnList) {
  const idx = gr_crdtLimitMgnt.getFocusedRowIndex();
  ds_crdtLimitMgnt.setCellData(idx, "befCrdtLimit", rtnList[7]);
  ds_crdtLimitMgnt.setCellData(idx, "crn", rtnList[0]);
  ds_crdtLimitMgnt.setCellData(idx, "busiNm", rtnList[1]);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------

scwin.f_RowAdd = async function () {
  if (!(await $c.gus.cfValidate($p, [gr_crdtLimitMgnt]))) {
    return;
  }
  scwin.addRowIndex = ds_crdtLimitMgnt.getRowCount();
  // gr_crdtLimitMgnt.setRowReadOnly(rowIndex, false);
  ds_crdtLimitMgnt.insertRow(scwin.addRowIndex);
  gr_crdtLimitMgnt.setCellReadOnly(scwin.addRowIndex, "crn", false);
};

//-------------------------------------------------------------------------
// 행 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  $c.data.undoAll($p);
  // $c.data.undoGridView(ds_crdtLimitMgnt)
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = async function () {
  var rowIndex = ds_crdtLimitMgnt.getRowPosition();
  if (ds_crdtLimitMgnt.getCellData(ds_crdtLimitMgnt.rowPosition, "adptDt") <= scwin.today) {
    await $c.win.alert($p, "일자가 지난 스케쥴은 삭제가 불가능 합니다.");
    return;
  }
  if (rowIndex >= 0) {
    // ds_exchangeRt.removeRow(rowIndex);
    ds_crdtLimitMgnt.deleteRow(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_startDt, ed_endDt]))) {
    return;
  }
  if (ed_startDt.getValue().trim() != "" && ed_endDt.getValue().trim() == "" || ed_endDt.getValue().trim() != "" && ed_startDt.getValue().trim() == "") {
    await $c.win.alert($p, "적용일자로 조회시 시작일자 종료일자 모두 입력하세요");
    return;
  }
  // ds_condition.setUseChangeInfo(false);
  $c.sbm.execute($p, sbm_retrieveCrdtSchedule);
};

//-------------------------------------------------------------------------
// 조회(스케쥴이력)
//-------------------------------------------------------------------------
scwin.f_TxnContents = function (row) {
  dma_detailCondition.set("crn", ds_crdtLimitMgnt.getCellData(row, "crn"));
  // dma_detailCondition.setUseChangeInfo(false);
  $c.sbm.execute($p, sbm_retrieveHistSchedule);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  ed_startDt.setValue(g_sCurrDate.substring(0, 8));
  ed_endDt.setValue(g_sCurrDate.substring(0, 8));
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_crdtLimitMgnt.getRowCount() == 0) {
    await $c.win.alert($p, "내역이 존재하지않습니다.");
    return;
  }
  let fileName = '';
  await $c.data.downloadGridViewExcel($p, gr_susRecvList, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let i = 0;
  let cnt = 0;
  if (ds_crdtLimitMgnt.getRowCount() == false) {
    await $c.win.alert($p, MSG_CM_ERR_049.replace("%1", "자료"));
    return;
  }
  if (ds_crdtLimitMgnt.getModifiedIndex().length > 0 == false) {
    await $c.win.alert($p, MSG_CM_ERR_001.replace("%1", "자료"));
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_crdtLimitMgnt]))) {
    return;
  }
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_createCrdtSchedule);
  }
  // ds_crdtLimitMgnt.setUseChangeInfo(true);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_createCrdtSchedule_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_retrieveCrdtSchedule_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  rowCnt = ds_crdtLimitMgnt.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다");
  } else {
    totalRows1.setValue(rowCnt);
  }
};
scwin.udc_creditCrnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '2');
};
scwin.gr_crdtLimitMgnt_onviewchange = async function (info) {
  let idx = info.rowIndex;
  let colid = info.colId;
  if (colid == "adptDt") {
    if (ds_crdtLimitMgnt.getCellData(idx, colid) <= scwin.today && ds_crdtLimitMgnt.getCellData(idx, colid) != "") {
      await $c.win.alert($p, "적용일자는 현재일자보다 작거나 같은일자는 입력할수 없습니다.");
      ds_crdtLimitMgnt.setCellData(idx, colid, "");
    }
  }
  if (colid == "modCrdtLimit") {
    if (ds_crdtLimitMgnt.getCellData(idx, colid) == ds_crdtLimitMgnt.getCellData(idx, "befCrdtLimit") && ds_crdtLimitMgnt.getCellData(idx, colid) != "") {
      await $c.win.alert($p, "변경전 여신한도와 변경후 여신한도 금액은 같을수 없습니다.");
      ds_crdtLimitMgnt.setCellData(idx, colid, "");
    }
  }
  if (colid == "crn") {
    if (ds_crdtLimitMgnt.getCellData(idx, colid) !== "") {
      scwin.f_openCommonPopUp('3', "crn", "busiNm", idx, 'T', 'onviewchange');
    } else {
      ds_crdtLimitMgnt.setCellData(idx, "befCrdtLimit", "");
      ds_crdtLimitMgnt.setCellData(idx, "crn", "");
      ds_crdtLimitMgnt.setCellData(idx, "busiNm", "");
    }
  }
};
scwin.gr_crdtLimitMgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  const crn = ds_crdtLimitMgnt.getCellData(rowIndex, "crn");
  const adptDt = ds_crdtLimitMgnt.getCellData(rowIndex, "adptDt");
  const rowStatus = ds_crdtLimitMgnt.getRowStatus(rowIndex);
  const today = scwin.today;
  if (rowIndex >= 0 && crn !== "" && rowStatus !== "C") {
    scwin.f_TxnContents(rowIndex);
  }
  if (adptDt <= today && rowStatus === "C") {
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "adptDt", false);
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "crn", false);
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "modCrdtLimit", false);
  } else if (adptDt <= today && (rowStatus === "R" || rowStatus === "U")) {
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "adptDt", true);
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "crn", true);
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "modCrdtLimit", true);
  } else if (adptDt > today && (rowStatus === "R" || rowStatus === "D")) {
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "adptDt", true);
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "crn", true);
    gr_crdtLimitMgnt.setReadOnly("cell", rowIndex, "modCrdtLimit", false);
  }
};
scwin.gr_crdtLimitMgnt_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == 1) {
    scwin.f_openCommonPopUp('3', "crn", "busiNm", rowIndex, 'T', 'ontextimageclick');
  }
};
scwin.sbm_retrieveHistSchedule_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  rowCnt = ds_detail.getRowCount();
  totalRows2.setValue(rowCnt);
};
scwin.f_FieldClear = function (e) {};
scwin.ds_crdtLimitMgnt_onrowpositionchange = function (info) {
  if (info.newRowIndex != null) {
    if (scwin.addRowIndex != info.newRowIndex | scwin.newRowIndex != info.oldRowIndex) {
      $c.gus.cfValidate($p, [gr_crdtLimitMgnt]);
    }
  }
  scwin.newRowIndex = info.newRowIndex;
};
scwin.udc_creditCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_crnNm, 'F', 'onclickEvent');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'startDt',refDataMap:'dma_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'endDt',edFromId:'ed_endDt',edToId:'ed_startDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCreditCrnInfo',codeId:'ed_crn',validTitle:'',nameId:'ed_crnNm',style:'',id:'udc_creditCrnInfo',code:'crn',objTypeName:'Data',objTypeCode:'Data',maxlengthCode:'13',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_condition','ev:onblurCodeEvent':'scwin.udc_creditCrnInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_creditCrnInfo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',code:'crn',codeId:'',id:'udc_creditCrnLimitInfo',maxlengthCode:'13',nameId:'',objTypeCode:'Data',objTypeName:'Data',popupID:'',refDataCollection:'ds_crdtLimitMgnt',selectID:'retrieveCreditCrnLimitInfo',style:'',validTitle:'',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'스케쥴 내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_crdtLimitMgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_crdtLimitMgnt',focusMode:'cell',id:'gr_crdtLimitMgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'8',visibleRowNumFix:'true',readOnly:'true','ev:onviewchange':'scwin.gr_crdtLimitMgnt_onviewchange','ev:ontextimageclick':'scwin.gr_crdtLimitMgnt_ontextimageclick',editModeEvent:'ondblclick',rowStatusVisible:'true',rowStatusWidth:'15','ev:oncellindexchange':'scwin.gr_crdtLimitMgnt_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'적용일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'사업자번호',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'법인명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'변경전 여신한도',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'변경후 여신한도',width:'150',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',editModeEvent:'onclick',mandatory:'true',minLength:'8',dateValidSet:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'textImage',style:'',value:'',width:'120',maxLength:'13',allowChar:'a-zA-Z0-9',noDisabledOnReadOnly:'false',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befCrdtLimit',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modCrdtLimit',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_RowAdd',rowDelFunction:'scwin.f_delMarked',gridID:'gr_crdtLimitMgnt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'스케쥴 이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_detail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',focusMode:'cell',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'법인명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'등록일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'변경전여신한도',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'변경후여신한도',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'textImage',style:'',value:'',width:'120',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befCrdtLimit',inputType:'text',style:'',value:'',width:'150',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modCrdtLimit',inputType:'text',style:'',value:'',width:'150',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})