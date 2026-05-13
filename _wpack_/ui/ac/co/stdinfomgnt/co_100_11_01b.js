/*amd /ui/ac/co/stdinfomgnt/co_100_11_01b.xml 19402 5204dba64262a0688364ff54e44a45614412ae14f0d9ce7e9257e897b4314f9a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bookKndCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pageNo',name:'페이지번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colNo',name:'컬럼번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrDeptCd',name:'집계귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrDeptNm',name:'집계귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookKndCd',name:'장부종류',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.stdinfomgnt.SaveBookColumnPositionInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.stdinfomgnt.RetrieveBookColumnPositionInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.bookKndCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI010",
    compID: "lc_srchBookKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [btn_save, udc_bottomGrdBtn]);
  scwin.f_FieldClear();
};
scwin.ondataload = function () {
  dlt_commonCodeFI010.sort("cd", 0);
  lc_srchBookKndCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  //lc_srchBookKndCd.focus();
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedIndex().length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) return;
  }
  let ret = await $c.gus.cfValidate($p, [lc_srchBookKndCd]);
  if (ret) {
    scwin.f_SetGridFormat();
    $c.sbm.execute($p, sbm_search);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["자료"]));
    return;
  } else {
    let ret = await scwin.f_Validate();
    if (!ret) {
      return false;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_master);
  }
};

//-------------------------------------------------------------------------
// 입력 Validate
//-------------------------------------------------------------------------
scwin.f_Validate = async function () {
  let returnVal;
  let validExp = gr_master.options.validExp;
  gr_master.options.validExp = "bizdivCd:사업부코드:yes:length=3&number:key," + "pageNo:페이지번호:yes:minNumber=1:key," + "colNo:컬럼번호:yes:minNumber=1:key," + "aggrDeptCd:집계귀속부서코드:yes:length=5";
  returnVal = await $c.gus.cfValidate($p, [gr_master]);
  gr_master.options.validExp = validExp;
  return returnVal;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  if ($c.gus.cfIsNull($p, scwin.bookKndCd)) {
    await $c.win.alert($p);
    return;
  }
  scwin.f_SetGridFormat("2");
  let newRow = ds_master.insertRow();
  gr_master.setFocusedCell(newRow, 0);
  ds_master.setCellData(newRow, "bookKndCd", scwin.bookKndCd);
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let rowIndex = ds_master.getRowPosition();
  let rowStatus = ds_master.getRowStatus(rowIndex);
  if (rowStatus == "C") {
    ds_master.removeRow(rowIndex);
  } else {
    ds_master.deleteRow(rowIndex);
    gr_master.setFocusedCell(rowIndex, 0);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  $c.data.undoRow($p, ds_master, "Y");
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.f_GridPopUp = async function (inValue, sIsEvent, sQueryID, sWhere, sWidth) {
  let rtnList = null;
  rtnList = await $c.gus.cfCommonPopUp($p, sQueryID, inValue, "", sIsEvent, null, null, null, null, sWhere, sWidth, null, null, null);
  return rtnList;
};

//-------------------------------------------------------------------------
// 그리드 Format 설정
//-------------------------------------------------------------------------
scwin.f_SetGridFormat = function (gubun) {
  if (gubun == null || gubun == "1") {
    gr_master.setColumnReadOnly("bizdivCd", true);
    gr_master.setColumnReadOnly("pageNo", true);
    gr_master.setColumnReadOnly("colNo", true);
  } else {
    gr_master.setColumnReadOnly("bizdivCd", false);
    gr_master.setColumnReadOnly("pageNo", false);
    gr_master.setColumnReadOnly("colNo", false);
  }
};

//-------------------------------------------							
// 그리드 높이 늘리고 줄이기							
//-------------------------------------------							
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_master.getRowCount();
  let sheetTitle = "출력컬럼등록현황";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_master, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle,
        columnMove: true,
        columnMoveWithFooter: true
      });
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.udc_bizDivCdInfo_callBackFunc = async function (rtnList) {
  let row = gr_master.getFocusedRowIndex();
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_master.setCellData(row, "bizdivCd", rtnList[0]);
    ds_master.setCellData(row, "bizdivNm", rtnList[1]);
  } else {
    ds_master.setCellData(row, "bizdivCd", "");
    ds_master.setCellData(row, "bizdivNm", "");
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = async function (rtnList) {
  let row = gr_master.getFocusedRowIndex();
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_master.setCellData(row, "aggrDeptCd", rtnList[0]);
    ds_master.setCellData(row, "aggrDeptNm", rtnList[1]);
  } else {
    ds_master.setCellData(row, "aggrDeptCd", "");
    ds_master.setCellData(row, "aggrDeptNm", "");
  }
};
scwin.sbm_master_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    ds_master.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_search_submitdone = async function (e) {
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    gr_master.focus();
  }
  scwin.bookKndCd = lc_srchBookKndCd.getValue();
  $c.gus.cfEnableObjects($p, [btn_save, udc_bottomGrdBtn]);
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "bizdivNm" || columnId == "aggrDeptNm") return;
  if (ds_master.getRowStatus(rowIndex) == "C") {
    gr_master.setColumnReadOnly("bizdivCd", false);
    gr_master.setColumnReadOnly("pageNo", false);
    gr_master.setColumnReadOnly("colNo", false);
  } else {
    if (columnId == "bizdivCd" || columnId == "pageNo" || columnId == "colNo") {
      gr_master.setColumnReadOnly(columnId, true);
    } else {
      gr_master.setColumnReadOnly(columnId, false);
    }
  }
};
scwin.gr_master_ontextimageclick = async function (row, columnIndex) {
  let colId = gr_master.getColumnID(columnIndex);
  let value = ds_master.getCellData(row, colId);
  if (colId == "bizdivCd") {
    await udc_bizDivCdInfo.cfCommonPopUp(scwin.udc_bizDivCdInfo_callBackFunc, value, "", "F", null, null, null, null, null, "410", null, null, null);
  } else if (colId == "aggrDeptCd") {
    await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, value, "", "F", null, null, null, null, null, "410", null, null, null);
  }
};
scwin.gr_master_onviewchange = async function (info) {
  let newData = info.newValue;
  let oldData = info.oldValue;
  if (info.colId == "bizdivCd") {
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(row, "bizdivNm", "");
      return;
    }
    if (newData == oldData) return;
    await udc_bizDivCdInfo.cfCommonPopUp(scwin.udc_bizDivCdInfo_callBackFunc, newData, "", "T", null, null, null, null, null, "410", null, null, null);
  } else if (info.colId == "aggrDeptCd") {
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(row, "aggrDeptNm", "");
      return;
    }
    if (newData == oldData) return;
    await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, newData, "", "T", null, null, null, null, null, "410", null, null, null);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'장부종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:dma_search.bookKndCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:200px;',allOption:'',id:'lc_srchBookKndCd',renderType:'',class:'form-control col2',direction:'auto',displayMode:'value delim label',title:'장부종류',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'출력컬럼 등록현황',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_master',id:'udc_topGrd',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_master_oncellclick',scrollByColumnAdaptive:'false',editModeEvent:'onclick',dataDragSelectAutoScroll:'true','ev:ontextimageclick':'scwin.gr_master_ontextimageclick',validExp:'bizdivCd:사업부코드:yes:length=3&number:key,pageNo:페이지번호:yes:minNumber=1:key,colNo:컬럼번호:yes:minNumber=1:key,aggrDeptCd:집계귀속부서코드:yes:length=5',scrollByColumn:'false',checkReadOnlyOnPasteEnable:'',visibleRowNumFix:'true',dataList:'data:ds_master','ev:onviewchange':'scwin.gr_master_onviewchange',style:'',columnMove:'true',autoFit:'allColumn',id:'gr_master',visibleRowNum:'14',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'bizdivCd',value:'사업부코드',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'250',inputType:'text',id:'bizdivNm',value:'사업부명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'pageNo',value:'페이지번호',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'colNo',value:'컬럼번호',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'aggrDeptCd',value:'집계귀속부서코드',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'250',inputType:'text',id:'aggrDeptNm',value:'집계귀속부서명',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{editModeEvent:'onclick',removeBorderStyle:'false',width:'120',viewType:'default',inputType:'textImage',readOnly:'true',id:'bizdivCd',allowChar:'0-9',blockSelect:'false',displayMode:'label',maxLength:'3',editModeEventIcon:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'250',inputType:'text',readOnly:'true',id:'bizdivNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',readOnly:'true',id:'pageNo',blockSelect:'false',displayMode:'label',mandatory:'true',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',readOnly:'true',id:'colNo',blockSelect:'false',displayMode:'label',mandatory:'true',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{editModeEvent:'onclick',removeBorderStyle:'false',width:'150',viewType:'default',inputType:'textImage',id:'aggrDeptCd',allowChar:'0-9',blockSelect:'false',displayMode:'label',editModeEventIcon:'onclick',maxLength:'5',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'250',inputType:'text',readOnly:'true',id:'aggrDeptNm',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{addFunction:'scwin.f_Add',btnCancelYn:'Y',style:'',gridID:'gr_master',id:'udc_bottomGrdBtn',rowDelUserAuth:'D',btnDelYn:'N',rowAddUserAuth:'C',rowDelFunction:'scwin.f_Delete',cancelFunction:'scwin.f_Cancel',rowAddFunction:'scwin.f_Add'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveBizdivCdInfo',codeId:'ed_bizdivCd',validTitle:'',nameId:'ed_bizdivNm',style:'width:100px; height:px;visibility:hidden;',btnId:'btn_bizdiv',id:'udc_bizDivCdInfo'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'width:100px; height:px;visibility:hidden;',validTitle:'',btnId:'btn_acctDeptCd',id:'udc_acctDeptCdInfo'}},{T:1,N:'xf:trigger',A:{userAuth:'U',style:'',id:'btn_save',label:'저장',type:'button',class:'btn',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]})