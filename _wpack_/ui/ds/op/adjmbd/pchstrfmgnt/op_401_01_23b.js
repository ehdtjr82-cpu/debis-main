/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_23b.xml 32956 4745499e920ab6534e7eb903967ec9af429b805a12978de8cf9f47a9e9511ef6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitNm',name:'작업단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strPchsRate',name:'보관료',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'onPchsRate',name:'상차료',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'offPchsRate',name:'하차료',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCheck',name:'계약체크',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveYardOrthersPurchaseTariffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_outInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_emp2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp2","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.SaveYardOrthersPurchaseTariffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_outInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.searchFlag = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  let codeOptions = [{
    grpCd: "LO102",
    compID: "gr_out:wrkUnitCd,gr_out:wrkUnitNm"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  let firstOfMonth = scwin.vCurDate.substring(0, 6) + "01";
  ed_wrkStDt.setValue(firstOfMonth);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_bilgMchtCd.getValue() == "") {
    await $c.win.alert($p, "거래처정보를 입력하십시오");
    ed_bilgMchtCd.focus();
  } else {
    gr_out.setColumnReadOnly("clntNm", true);
    gr_out.setColumnReadOnly("ctrtNo", true);
    gr_out.setColumnReadOnly("wrkPlNm", true);
    gr_out.setColumnReadOnly("commCd", true);
    gr_out.setColumnReadOnly("commNm", true);
    gr_out.setColumnReadOnly("pchsClntNm", true);
    gr_out.setColumnReadOnly("wrkUnitCd", true);
    gr_out.setColumnReadOnly("adptDt", true);
    gr_out.setColumnReadOnly("expireDt", true);
    dma_Query.set("clntNo", ed_bilgMchtCd.getValue());
    dma_Query.set("ctrtNo", lc_ctrtNo.getValue());
    dma_Query.set("wrkPlCd", ed_wrkPlCd.getValue());
    dma_Query.set("commCd", ed_commCd.getValue());
    dma_Query.set("adptDt", ed_wrkStDt.getValue());
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let chk = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
  if (chk == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_condition, null);
  lc_ctrtNo.setValue("");
  let firstOfMonth = scwin.vCurDate.substring(0, 6) + "01";
  ed_wrkStDt.setValue(firstOfMonth);
};

//-------------------------------------------------------------------------
// POP-UP Call전 Checking
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (data, disGubun, isCode) {
  let pVal = data;
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_bilgMcht.cfCommonPopUp(scwin.retrieveClntList, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
    case 2:
      udc_wrkPl.cfCommonPopUp(scwin.retrieveWrkPlInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      break;
    case 3:
      let param = "2,4,,," + ed_bilgMchtCd.getValue();
      udc_comm.cfCommonPopUp(scwin.retrieveCommInfo, pCode, pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch, "거래처품명,품명코드,품명");
      break;
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백 처리
//-------------------------------------------------------------------------
scwin.retrieveClntList = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgMchtCd, txt_bilgMcht);
  if (rtnList != null) {
    dma_retrieve2.set("ctrtClntNo", rtnList[0]);
    dma_retrieve2.set("ctrtCheck", "0");
    $c.sbm.execute($p, sbm_retrieve2);
  }
  lc_ctrtNo.setDisabled(false);
};

//-------------------------------------------------------------------------
// 작업장 팝업 콜백 처리
//-------------------------------------------------------------------------
scwin.retrieveWrkPlInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
};

//-------------------------------------------------------------------------
// 거래처품명 팝업 콜백 처리
//-------------------------------------------------------------------------
scwin.retrieveCommInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, txt_comm);
};

//-------------------------------------------------------------------------
// 품명 조회 Popup 처리 : 그리드에서 입력된 코드정보로 품명을 조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  let pCode = "";
  let pName = "";
  let rowPosition = ds_outInfo.getRowPosition();
  let rowJson = ds_outInfo.getRowJSON(row);
  switch (disGubun) {
    case 2:
      pName = rowJson.wrkPlNm;
      udc_comCodeGrid.setSelectId("retrieveWrkPlInfo");
      udc_comCodeGrid.cfCommonPopUp(async function (rtnList) {
        await $c.gus.cfSetReturnValue($p, rtnList, ed_comCodeGrid, txt_comCodeGrid);
        ds_outInfo.setCellData(rowPosition, "wrkPlCd", ed_comCodeGrid.getValue());
        ds_outInfo.setCellData(rowPosition, "wrkPlNm", txt_comCodeGrid.getValue());
      }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,작업장코드,작업장명");
      break;
    case 3:
      let param = "2,4,,," + ed_bilgMchtCd.getValue();
      pCode = rowJson.commCd;
      udc_comCodeGrid.setSelectId("retrieveCommInfo");
      udc_comCodeGrid.cfCommonPopUp(async function (rtnList) {
        await $c.gus.cfSetReturnValue($p, rtnList, ed_comCodeGrid, txt_comCodeGrid);
        ds_outInfo.setCellData(rowPosition, "commCd", ed_comCodeGrid.getValue());
        ds_outInfo.setCellData(rowPosition, "commNm", txt_comCodeGrid.getValue());
      }, pCode, pName, "T", null, null, null, null, param, null, null, null, null, null, "F", "거래처품명,품명코드,품명");
      break;
    case 4:
      pName = rowJson.pchsClntNm;
      udc_comCodeGrid.setSelectId("retrieveBuyClntList");
      udc_comCodeGrid.cfCommonPopUp(async function (rtnList) {
        await $c.gus.cfSetReturnValue($p, rtnList, ed_comCodeGrid, txt_comCodeGrid);
        ds_outInfo.setCellData(rowPosition, "pchsClntNo", ed_comCodeGrid.getValue());
        ds_outInfo.setCellData(rowPosition, "pchsClntNm", txt_comCodeGrid.getValue());
      }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "매입거래처,거래처코드,거래처명");
      break;
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (scwin.searchFlag != 1) {
    return;
  }
  let row = ds_outInfo.insertRow(ds_outInfo.getRowCount());
  gr_out.setFocusedCell(row, 1);
  if (ds_outInfo.getRowCount() == 1) {
    ds_outInfo.setCellData(row, "clntNo", ed_bilgMchtCd.getValue());
    ds_outInfo.setCellData(row, "clntNm", txt_bilgMcht.getValue());
    ds_outInfo.setCellData(row, "ctrtNo", lc_ctrtNo.getValue());
  } else {
    ds_outInfo.setCellData(row, "clntNm", ds_outInfo.getCellData(row - 1, "clntNm"));
    ds_outInfo.setCellData(row, "ctrtNo", ds_outInfo.getCellData(row - 1, "ctrtNo"));
    ds_outInfo.setCellData(row, "wrkPlCd", ds_outInfo.getCellData(row - 1, "wrkPlCd"));
    ds_outInfo.setCellData(row, "wrkPlNm", ds_outInfo.getCellData(row - 1, "wrkPlNm"));
    ds_outInfo.setCellData(row, "commCd", ds_outInfo.getCellData(row - 1, "commCd"));
    ds_outInfo.setCellData(row, "commNm", ds_outInfo.getCellData(row - 1, "commNm"));
    ds_outInfo.setCellData(row, "pchsClntNo", ds_outInfo.getCellData(row - 1, "pchsClntNo"));
    ds_outInfo.setCellData(row, "pchsClntNm", ds_outInfo.getCellData(row - 1, "pchsClntNm"));
    ds_outInfo.setCellData(row, "wrkUnitCd", ds_outInfo.getCellData(row - 1, "wrkUnitCd"));
    ds_outInfo.setCellData(row, "wrkUnitNm", ds_outInfo.getCellData(row - 1, "wrkUnitNm"));
    ds_outInfo.setCellData(row, "adptDt", ds_outInfo.getCellData(row - 1, "adptDt"));
    ds_outInfo.setCellData(row, "expireDt", ds_outInfo.getCellData(row - 1, "expireDt"));
    ds_outInfo.setCellData(row, "strPchsRate", ds_outInfo.getCellData(row - 1, "strPchsRate"));
    ds_outInfo.setCellData(row, "onPchsRate", ds_outInfo.getCellData(row - 1, "onPchsRate"));
    ds_outInfo.setCellData(row, "offPchsRate", ds_outInfo.getCellData(row - 1, "offPchsRate"));
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  let row = gr_out.getFocusedRowIndex();
  let rowStatus = ds_outInfo.getRowStatus(row);
  if (rowStatus == "C") {
    ds_outInfo.removeRow(row);
  } else {
    ds_outInfo.deleteRow(row);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  let row = gr_out.getFocusedRowIndex();
  let rowStatus = ds_outInfo.getRowStatus(row);
  if (rowStatus == "C") {
    ds_outInfo.removeRow(row);
  } else {
    ds_outInfo.undoRow(row);
  }
};

//-------------------------------------------------------------------------
// 그리드 설정
//-------------------------------------------------------------------------
scwin.RowChange = function (row, colid) {
  if (row >= 0) {
    let rowStatus = ds_outInfo.getRowStatus(row);
    if (rowStatus == "C") {
      switch (colid) {
        case "wrkPlNm":
          gr_out.setColumnReadOnly("wrkPlNm", false);
          break;
        case "commCd":
          gr_out.setColumnReadOnly("commCd", false);
          break;
        case "pchsClntNm":
          gr_out.setColumnReadOnly("pchsClntNm", false);
          break;
        case "wrkUnitCd":
          gr_out.setColumnReadOnly("wrkUnitCd", false);
          break;
        case "adptDt":
          gr_out.setColumnReadOnly("adptDt", false);
          break;
        case "expireDt":
          gr_out.setColumnReadOnly("expireDt", false);
          break;
        case "strPchsRate":
          gr_out.setColumnReadOnly("strPchsRate", false);
          break;
        case "onPchsRate":
          gr_out.setColumnReadOnly("onPchsRate", false);
          break;
        case "offPchsRate":
          gr_out.setColumnReadOnly("offPchsRate", false);
          break;
      }
    } else {
      switch (colid) {
        case "wrkPlNm":
          gr_out.setColumnReadOnly("wrkPlNm", true);
          break;
        case "commCd":
          gr_out.setColumnReadOnly("commCd", true);
          break;
        case "pchsClntNm":
          gr_out.setColumnReadOnly("pchsClntNm", true);
          break;
        case "wrkUnitCd":
          gr_out.setColumnReadOnly("wrkUnitCd", true);
          break;
        case "adptDt":
          gr_out.setColumnReadOnly("adptDt", true);
          break;
        case "expireDt":
          gr_out.setColumnReadOnly("expireDt", true);
          break;
      }
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭 이벤트
//-------------------------------------------------------------------------
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.RowChange(rowIndex, columnId);
  return true;
};

//-------------------------------------------------------------------------
// 그리드 팝업 버튼 클릭 시 발생하는 이벤트
//-------------------------------------------------------------------------
scwin.gr_out_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, "F");
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(3, rowIndex, "F");
      break;
    case "pchsClntNm":
      scwin.f_openCommPopUpGrid(4, rowIndex, "F");
      break;
  }
};

//-------------------------------------------------------------------------
// 저장 서비스 후처리
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    $c.data.undoAll($p, ds_outInfo);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 서비스 후처리
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.searchFlag = 1;
  let rowCnt = ds_outInfo.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// udc코드부분에서 포커스를 잃었을 때 발생하는 이벤트
//-------------------------------------------------------------------------
scwin.udc_bilgMcht_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgMchtCd.getValue(), 1);
};
scwin.udc_wrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd.getValue(), 2);
};
scwin.udc_comm_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd.getValue(), 3);
};

//-------------------------------------------------------------------------
// udc코드명부분에서 포커스를 잃었을 때 발생하는 이벤트
//-------------------------------------------------------------------------
scwin.udc_bilgMcht_onviewchangeNameEvent = function (info) {
  if (txt_bilgMcht.getValue() == "") {
    ed_bilgMchtCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(txt_bilgMcht.getValue(), 1, false);
};
scwin.udc_wrkPl_onviewchangeNameEvent = function (info) {
  if (txt_wrkPlNm.getValue() == "") {
    ed_wrkPlCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm.getValue(), 2, false);
};
scwin.udc_comm_onviewchangeNameEvent = function (info) {
  if (txt_comm.getValue() == "") {
    ed_commCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(txt_comm.getValue(), 3, false);
};

//-------------------------------------------------------------------------
// udc 검색 버튼 클릭 시 발생하는 이벤트
//-------------------------------------------------------------------------
scwin.udc_bilgMcht_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgMchtCd.getValue(), txt_bilgMcht.getValue(), "F", "T");
};
scwin.udc_wrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_wrkPlCd.getValue(), txt_wrkPlNm.getValue(), "F", "T");
};
scwin.udc_comm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_commCd.getValue(), txt_comm.getValue(), "F", "T");
};

//-------------------------------------------------------------------------
// 팝업 처리 후처리
//-------------------------------------------------------------------------
scwin.gr_out_onafteredit = function (rowIndex, columnIndex, value) {
  let columnID = gr_out.getColumnID(columnIndex);
  switch (columnID) {
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, "F");
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(3, rowIndex, "F");
      break;
    case "pchsClntNm":
      scwin.f_openCommPopUpGrid(4, rowIndex, "F");
      break;
  }
};
scwin.f_excel = function () {
  let options = {
    fileName: "작업장 기타 매입 요율 관리" + ".xlsx",
    sheetName: "작업장 기타 매입 요율 관리"
  };
  $c.data.downloadGridViewExcel($p, gr_out, options);
};
scwin.customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  if (colID == "strPchsRate" || colID == "onPchsRate" || colID == "offPchsRate") {
    let value = "0.00";
    if (data != "") {
      value = formattedData;
    }
    return value;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_main',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_shbox',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_shboxInner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'grp_row1',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_bilgMchtLabel',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgMcht',popupID:'',selectID:'retrieveClntList',codeId:'ed_bilgMchtCd',validTitle:'',nameId:'txt_bilgMcht',style:'',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_bilgMcht_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgMcht_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_bilgMcht_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_ctrtNoLabel',label:'계약서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_ctrtNoTd',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtNo',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'',mandatory:'true',allOption:'',chooseOption:'',sortOption:'value',sortMethod:'descending',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_emp2'},E:[{T:1,N:'w2:label',A:{ref:'empNm'}},{T:1,N:'w2:value',A:{ref:'ctrtNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'grp_wrkPlTh',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_wrkPlLabel',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_wrkPlTd',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',popupID:'',selectID:'retrieveWrkPlInfo',style:'',validTitle:'','ev:onclickEvent':'scwin.udc_wrkPl_onclickEvent',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{id:'grp_row2',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_commLabel',label:'거래처품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'txt_comm',popupID:'',selectID:'retrieveCommInfo',style:'',validTitle:'',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comm_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comm_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8','ev:onviewchangeNameEvent':'scwin.udc_comm_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_wrkStDtLabel',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_wrkStDtTd',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkStDt',style:'',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'grp_emptyTh',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_emptyTd',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'grp_btnShbox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.f_FieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.f_Retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_roundBox',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_titleWrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_title'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_gridTitle',label:'작업장 기타 매입 요율 관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_topBtnRight'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_top',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_out',gridDownFn:'scwin.f_excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_outInfo',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_out_oncellclick','ev:ontextimageclick':'scwin.gr_out_ontextimageclick',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_out_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'계약거래처',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'계약거래처',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'계약번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',style:'',value:'작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'작업장',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'품명코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'품명',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'매입거래처',width:'120',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',style:'',value:'매입거래처',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkUnitCd',value:'작업단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkUnitNm',value:'작업단위',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptDt',value:'적용일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'expireDt',value:'만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'strPchsRate',value:'보관료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onPchsRate',value:'상차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPchsRate',value:'하차료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkUnitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkUnitNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'expireDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'strPchsRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number',textAlign:'left',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onPchsRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number',textAlign:'left',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPchsRate',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number',textAlign:'left',customFormatter:'scwin.customFormatter'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'grp_gridBottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_gridBottomLeft',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_gridTotal'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalLabel',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalUnit',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'grp_gridBottomRight',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_Cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'grp_btnbox',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'grp_btnboxRight',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.f_Save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_comCodeGrid',id:'udc_comCodeGrid',nameId:'txt_comCodeGrid',popupID:'',selectID:'',style:'display: none;',validTitle:''}}]}]}]}]}]})