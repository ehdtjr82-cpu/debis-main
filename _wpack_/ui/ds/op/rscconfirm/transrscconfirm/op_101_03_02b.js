/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_03_02b.xml 22689 d915a3c0584c9428641cc5e1c35411110cf8b1f20fb7dd37d973a79ca6ce1ee2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptWrkPlNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadSchedule',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_railroadSchedule_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'출발역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runSeq',name:'운행순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc',name:'거리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frt',name:'임률',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'sortColumn'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveRailroadScheduleListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_railroadSchedule","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadSchedule","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_railroadSchedule',action:'/ds.op.rscconfirm.transrscconfirm.SaveRailroadScheduleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_railroadSchedule","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_railroadSchedule_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.focusedCol = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  if (ds_railroadSchedule.getRowCount() == 0) {
    btn_addRow.setDisabled(true);
    btn_deleteRow.setDisabled(true);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_railroadScheduleExcel = function () {
  let options = {
    fileName: "철송스케줄등록" + ".xlsx",
    sheetName: "철송스케줄등록"
  };
  $c.data.downloadGridViewExcel($p, gr_railroadSchedule, options);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_railroadSchedule.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }
  let chk1 = await $c.gus.cfValidate($p, [gr_railroadSchedule], null, true);
  if (!chk1) return;
  let chk2 = await scwin.f_checkDistance();
  if (!chk2) return;
  if (chk1 && chk2) {
    let chk3 = await $c.win.confirm($p, "저장하시겠습니까?");
    if (chk3) {
      $c.sbm.execute($p, sbm_railroadSchedule);
    }
  }
};

//-------------------------------------------------------------------------
//  check distance column id(dtc) value
//-------------------------------------------------------------------------	
scwin.f_checkDistance = async function () {
  for (let i = 0; i < ds_railroadSchedule.getRowCount(); i++) {
    let rowJson = ds_railroadSchedule.getRowJSON(i);
    if (ds_railroadSchedule.getRowStatus(i) == "C" || ds_railroadSchedule.getRowStatus(i) == "U") {
      if (rowJson.dtc == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["거리입력 값", " 0 "]);
        gr_railroadSchedule.setFocusedCell(i, "dtc");
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
//  check for pre-defined distance data
//  change to the distance data which departure & destination are selected pre-defined same data
//-------------------------------------------------------------------------	
scwin.f_changeDistance = function (pCode, pRowPos) {
  let pCompareCd;
  let pDistance;
  let pNoChange = 0;
  for (let i = 0; i < ds_railroadSchedule.getRowCount(); i++) {
    let rowJson = ds_railroadSchedule.getRowJSON(i);
    if (i == pRowPos) continue;
    pCompareCd = rowJson.dptStnWrkPlCd + rowJson.arvStnWrkPlCd;
    pDistance = rowJson.dtc;
    if (pCode == pCompareCd) {
      ds_railroadSchedule.setCellData(pRowPos, "dtc", pDistance);
      return true;
    }
    pCompareCd = "";
    pDistance = "";
  }
  if (pNoChange == 0) ds_railroadSchedule.setCellData(pRowPos, "dtc", 0);
};

//-------------------------------------------------------------------------
//  check for pre-defined distance data
//  change to the distance data which departure & destination are selected pre-defined same data
//-------------------------------------------------------------------------	
scwin.f_changeDistanceAll = function (row, colid) {
  let rowJson = ds_railroadSchedule.getRowJSON(row);
  let pCompareCd = "";
  let pDistance = "";
  let pCode = "";
  pCode = rowJson.dptStnWrkPlCd + rowJson.arvStnWrkPlCd;
  pDistance = rowJson.dtc;
  for (let i = 0; i <= ds_railroadSchedule.getRowCount(); i++) {
    let rJson = ds_railroadSchedule.getRowJSON(i);
    if (i == row) continue;
    pCompareCd = rJson.dptStnWrkPlCd + rJson.arvStnWrkPlCd;
    if (pCode == pCompareCd) {
      ds_railroadSchedule.setCellData(i, "dtc", pDistance);
    }
    pCompareCd = "";
  }
};

//-------------------------------------------------------------------------
//  eidt_Control FUNCTION : scwin.f_EditNone)() , scwin.f_EditTrue()
//-------------------------------------------------------------------------	
scwin.f_EditNone = function () {
  gr_railroadSchedule.setColumnReadOnly("dptWrkPlNm", true);
  gr_railroadSchedule.setColumnReadOnly("arvWrkPlNm", true);
};
scwin.f_EditTrue = function () {
  gr_railroadSchedule.setColumnReadOnly("dptWrkPlNm", false);
  gr_railroadSchedule.setColumnReadOnly("arvWrkPlNm", false);
};

//-------------------------------------------------------------------------
// function name : scwin.f_addRow
// function desc : Row 추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  let row = ds_railroadSchedule.insertRow(ds_railroadSchedule.getRowCount());
  gr_railroadSchedule.setFocusedCell(row, 0);
};

//-------------------------------------------------------------------------
// function name : scwin.f_deleteRow
// function desc : Row 삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  let focusedRow = gr_railroadSchedule.getFocusedRowIndex();
  if (ds_railroadSchedule.getRowCount() > 0) {
    if (ds_railroadSchedule.getRowStatus(focusedRow) == "C") {
      ds_railroadSchedule.removeRow(focusedRow);
    } else {
      ds_railroadSchedule.deleteRow(focusedRow);
    }
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_dptWrkPl.cfCommonPopUp(scwin.udc_dptWrkPl_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
  }
};
scwin.f_openPopUp = function (gubun, pWinCloseTF) {
  let pCurPos = gr_railroadSchedule.getFocusedRowIndex();
  let pDummyCode = gubun + "StnWrkPlCd";
  let pdummyName = gubun + "WrkPlNm";
  let pCode = ds_railroadSchedule.getCellData(pCurPos, pDummyCode);
  let pName = ds_railroadSchedule.getCellData(pCurPos, pdummyName);
  if (pName == "") {
    pCode = "";
  }
  udc_dptWrkPlNm.cfCommonPopUp(scwin.gridCallBack,
  //pSelectID
  pCode,
  //pCode
  pName,
  //pName
  pWinCloseTF,
  //pWinCloseTF
  "5",
  //pDispCnt
  null,
  //pTitle
  "150,170",
  //pWidth
  null,
  //pHidden
  null,
  //pWhere
  "440",
  //pW
  "500",
  //pH
  null,
  //pTop
  null); //pLeft
};
scwin.gridCallBack = function (rtnList) {
  let pCurPos = gr_railroadSchedule.getFocusedRowIndex();
  let pCol = scwin.focusedCol;
  ds_railroadSchedule.setCellData(pCurPos, pCol - 1, rtnList[0]);
  ds_railroadSchedule.setCellData(pCurPos, pCol, rtnList[1]);
  let dptStnWrkPlCd = ds_railroadSchedule.getCellData(pCurPos, "dptStnWrkPlCd");
  let arvStnWrkPlCd = ds_railroadSchedule.getCellData(pCurPos, "arvStnWrkPlCd");
  if (dptStnWrkPlCd != "" && arvStnWrkPlCd != "") {
    scwin.f_changeDistance(dptStnWrkPlCd + arvStnWrkPlCd, pCurPos);
  }
};
scwin.f_openPopUpBefore = function (row, nmColid, cdColid, olddata, gubun, pWinCloseTF) {
  let nmVal = ds_railroadSchedule.getCellData(row, nmColid);
  if (nmVal == "") {
    ds_railroadSchedule.setCellData(row, cdColid, "");
  } else {
    /* if (nmVal != olddata) {
        ds_railroadSchedule.setCellData(row, cdColid, "");
        scwin.f_openPopUp(gubun, pWinCloseTF);
    } */

    ds_railroadSchedule.setCellData(row, cdColid, "");
    scwin.f_openPopUp(gubun, pWinCloseTF);
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [txt_dptWrkPlNm, ed_dptWrkPlCd]);
};
scwin.sbm_railroadSchedule_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_railroadSchedule.getRowCount());
  if (ds_railroadSchedule.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    for (let i = 0; i < ds_railroadSchedule.getRowCount(); i++) {
      let rowJson = ds_railroadSchedule.getRowJSON(i);
      ds_railroadSchedule.setCellData(i, "sortColumn", rowJson.dptWrkPlNm + rowJson.arvWrkPlNm + rowJson.dptHh);
    }
    ds_railroadSchedule.initRowStatus();
    ds_railroadSchedule.sort("sortColumn", 0);
  }
  btn_addRow.setDisabled(false);
  btn_deleteRow.setDisabled(false);
};
scwin.udc_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), "F", "T");
};
scwin.udc_dptWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, txt_dptWrkPlNm, 1, true);
};
scwin.udc_dptWrkPl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_dptWrkPlNm, ed_dptWrkPlCd, 1, false);
};
scwin.udc_dptWrkPl_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, txt_dptWrkPlNm);
};
scwin.gr_railroadSchedule_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_railroadSchedule.getColumnID(columnIndex);
  if (colId == "dptWrkPlNm") {
    scwin.f_openPopUp("dpt", "F");
  } else if (colId == "arvWrkPlNm") {
    scwin.f_openPopUp("arv", "F");
  }
};
scwin.gr_railroadSchedule_onafteredit = function (rowIndex, columnIndex, value) {
  scwin.focusedCol = gr_railroadSchedule.getFocusedColumnIndex();
  let colId = gr_railroadSchedule.getColumnID(columnIndex);
  let olddata = ds_railroadSchedule.getCellData(rowIndex, colId);
  if (colId == "dptWrkPlNm") {
    scwin.f_openPopUpBefore(rowIndex, "dptWrkPlNm", "dptStnWrkPlCd", olddata, "dpt", "T");
  } else if (colId == "arvWrkPlNm") {
    scwin.f_openPopUpBefore(rowIndex, "arvWrkPlNm", "arvStnWrkPlCd", olddata, "arv", "T");
  }
  if (colId == "dtc") {
    scwin.f_changeDistanceAll(rowIndex, colId);
  }
};
scwin.ds_railroadSchedule_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (ds_railroadSchedule.getRowStatus(row) == "C") {
    //신규
    scwin.f_EditTrue();
  } else {
    scwin.f_EditNone();
  }
};
scwin.f_cancel = function () {
  let row = gr_railroadSchedule.getFocusedRowIndex();
  if (ds_railroadSchedule.getRowStatus(row) == "C") {
    ds_railroadSchedule.removeRow(row);
  } else {
    ds_railroadSchedule.undoRow(row);
  }
};
scwin.customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  if (colID == "dtc") {
    if (data == "") {
      return "0.0";
    } else {
      return formattedData;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveTrainWorkPlace',codeId:'ed_dptWrkPlCd',validTitle:'',nameId:'txt_dptWrkPlNm',style:'',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',id:'udc_dptWrkPl',refDataCollection:'oGDS_view_cond',code:'dptWrkPlCd',name:'dptWrkPlNm','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dptWrkPl_onblurNameEvent',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송스케줄등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_railroadSchedule',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridDownFn:'scwin.f_railroadScheduleExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_railroadSchedule',id:'gr_railroadSchedule',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_railroadSchedule_ontextimageclick',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_railroadSchedule_onafteredit',dataName:'철송스케줄',validFeatures:'ignoreStatus=no',validExp:'dptStnWrkPlCd:출발역작업장코드:yes:key,arvStnWrkPlCd:도착역작업장코드:yes:key,dptHh:출발시간:yes:key:date=HHmm,arvHh:도착시간:yes:date=HHmm,dtc:거리(㎞):yes'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'출발역작업장코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'출발역작업장',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'도착역작업장코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'도착역작업장 ',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'운행순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'출발시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'도착시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'거리(㎞)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'임률',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'정렬',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlCd',inputType:'text',style:'',value:'',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'textImage',style:'',value:'',width:'130',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'textImage',style:'',value:'',width:'130',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'runSeq',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptHh',inputType:'text',style:'',value:'',width:'100',displayFormat:'##:##',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvHh',inputType:'text',style:'',value:'',width:'100',displayFormat:'##:##',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',maxLength:'5',dataType:'number',excelCellType:'number',displayFormat:'#,###.0',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frt',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'sortColumn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',id:'udc_bottomGrdBtn',gridID:'gr_railroadSchedule',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_cancel',btnRowAddObj:'btn_addRow',rowAddObjType:'data',btnRowDelObj:'btn_deleteRow',delObjType:'data'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveTrainWorkPlace',codeId:'',validTitle:'',nameId:'',style:'display: none;',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',id:'udc_dptWrkPlNm',class:''}}]}]}]}]})