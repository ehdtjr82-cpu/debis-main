/*amd /AI/op_401_01_23b.xml 26309 1163ff32c0abbd044032cdbb87b89dda45fb326bad665a0f166b3d748ff36032 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitNm',name:'작업단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strPchsRate',name:'보관료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPchsRate',name:'상차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPchsRate',name:'하차료',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCheck',name:'계약체크',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveYardOrthersPurchaseTariffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_outInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_emp2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'scwin.sbm_retrieve2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.SaveYardOrthersPurchaseTariffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_outInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  let codeOptions = [{
    grpCd: "LO102",
    compID: "gr_out:wrkUnitCd,gr_out:wrkUnitNm"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  let firstOfMonth = scwin.vCurDate.substring(0, 6) + "01";
  ica_wrkStDt.setValue(firstOfMonth);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_rowAdd_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_rowDel_onclick = function (e) {
  scwin.f_DelRow();
};
scwin.btn_Cancel_onclick = function (e) {
  ds_outInfo.undoAll();
};
scwin.f_Retrieve = async function () {
  if (ed_bilgMchtCd.getValue() == "") {
    await $c.win.alert($p, "거래처정보를 입력하십시오");
    ed_bilgMchtCd.setFocus();
  } else {
    ds_Query.set("clntNo", ed_bilgMchtCd.getValue());
    ds_Query.set("ctrtNo", lc_ctrtNo.getValue());
    ds_Query.set("wrkPlCd", ed_wrkPlCd.getValue());
    ds_Query.set("commCd", ed_commCd.getValue());
    ds_Query.set("adptDt", ica_wrkStDt.getValue());
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_Save = async function () {
  let chk = await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_CRM_001"));
  if (chk == true) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, grp_searchTable, null);
  lc_ctrtNo.setValue("");
  let firstOfMonth = scwin.vCurDate.substring(0, 6) + "01";
  ica_wrkStDt.setValue(firstOfMonth);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_bilgMcht.ilCommonPopUp(scwin.callbackClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
    case 2:
      udc_wrkPl.ilCommonPopUp(scwin.callbackWrkPl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      break;
    case 3:
      let param = "2,4,,," + ed_bilgMchtCd.getValue();
      udc_comm.ilCommonPopUp(scwin.callbackComm, pCode, pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch, "거래처품명,품명코드,품명");
      break;
  }
};
scwin.callbackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgMchtCd, txt_bilgMcht);
  if (rtnList != null) {
    dma_retrieve2.set("ctrtClntNo", rtnList[0]);
    dma_retrieve2.set("ctrtCheck", "0");
    $c.sbm.execute($p, sbm_retrieve2);
    lc_ctrtNo.setDisabled(false);
  }
};
scwin.callbackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
};
scwin.callbackComm = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, txt_comm);
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 2:
      pName = ds_outInfo.getCellData(row, "wrkPlNm");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ds_outInfo.setCellData(ds_outInfo.getRowPosition(), "wrkPlCd", rtnList[0]);
            ds_outInfo.setCellData(ds_outInfo.getRowPosition(), "wrkPlNm", rtnList[1]);
          }
        }
      }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,작업장코드,작업장명");
      break;
    case 3:
      let param = "2,4,,," + ed_bilgMchtCd.getValue();
      pCode = ds_outInfo.getCellData(row, "commCd");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ds_outInfo.setCellData(ds_outInfo.getRowPosition(), "commCd", rtnList[0]);
            ds_outInfo.setCellData(ds_outInfo.getRowPosition(), "commNm", rtnList[1]);
          }
        }
      }, pCode, pName, "T", null, null, null, null, param, null, null, null, null, null, "F", "거래처품명,품명코드,품명");
      break;
    case 4:
      pName = ds_outInfo.getCellData(row, "pchsClntNm");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ds_outInfo.setCellData(ds_outInfo.getRowPosition(), "pchsClntNo", rtnList[0]);
            ds_outInfo.setCellData(ds_outInfo.getRowPosition(), "pchsClntNm", rtnList[1]);
          }
        }
      }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "매입거래처,거래처코드,거래처명");
      break;
  }
};
scwin.f_AddRow = function () {
  let row = ds_outInfo.getRowPosition();
  ds_outInfo.insertRow(ds_outInfo.getRowCount());
  let newRow = ds_outInfo.getRowPosition();
  if (ds_outInfo.getRowCount() == 1) {
    ds_outInfo.setCellData(newRow, "clntNo", ed_bilgMchtCd.getValue());
    ds_outInfo.setCellData(newRow, "clntNm", txt_bilgMcht.getValue());
    ds_outInfo.setCellData(newRow, "ctrtNo", lc_ctrtNo.getValue());
  }
  if (ds_outInfo.getRowCount() != 1) {
    ds_outInfo.setCellData(newRow, "clntNm", ds_outInfo.getCellData(row, "clntNm"));
    ds_outInfo.setCellData(newRow, "ctrtNo", ds_outInfo.getCellData(row, "ctrtNo"));
    ds_outInfo.setCellData(newRow, "wrkPlCd", ds_outInfo.getCellData(row, "wrkPlCd"));
    ds_outInfo.setCellData(newRow, "wrkPlNm", ds_outInfo.getCellData(row, "wrkPlNm"));
    ds_outInfo.setCellData(newRow, "commCd", ds_outInfo.getCellData(row, "commCd"));
    ds_outInfo.setCellData(newRow, "commNm", ds_outInfo.getCellData(row, "commNm"));
    ds_outInfo.setCellData(newRow, "pchsClntNo", ds_outInfo.getCellData(row, "pchsClntNo"));
    ds_outInfo.setCellData(newRow, "pchsClntNm", ds_outInfo.getCellData(row, "pchsClntNm"));
    ds_outInfo.setCellData(newRow, "wrkUnitCd", ds_outInfo.getCellData(row, "wrkUnitCd"));
    ds_outInfo.setCellData(newRow, "wrkUnitNm", ds_outInfo.getCellData(row, "wrkUnitNm"));
    ds_outInfo.setCellData(newRow, "adptDt", ds_outInfo.getCellData(row, "adptDt"));
    ds_outInfo.setCellData(newRow, "expireDt", ds_outInfo.getCellData(row, "expireDt"));
    ds_outInfo.setCellData(newRow, "strPchsRate", ds_outInfo.getCellData(row, "strPchsRate"));
    ds_outInfo.setCellData(newRow, "onPchsRate", ds_outInfo.getCellData(row, "onPchsRate"));
    ds_outInfo.setCellData(newRow, "offPchsRate", ds_outInfo.getCellData(row, "offPchsRate"));
  }
  tbx_totalRows.setValue(ds_outInfo.getRowCount());
};
scwin.f_DelRow = function () {
  let checkedRows = ds_outInfo.getMatchedIndex("chk", "1", true);
  if (checkedRows.length > 0) {
    for (let i = checkedRows.length - 1; i >= 0; i--) {
      ds_outInfo.removeRow(checkedRows[i]);
    }
  } else {
    let curRow = ds_outInfo.getRowPosition();
    if (curRow >= 0) {
      ds_outInfo.removeRow(curRow);
    }
  }
  tbx_totalRows.setValue(ds_outInfo.getRowCount());
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.RowChange(rowIndex, columnId);
  return true;
};
scwin.gr_out_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "adptDt":
      break;
    case "expireDt":
      break;
    case "wrkPlCd":
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
      break;
    case "pchsClntNm":
      scwin.f_openCommPopUpGrid(4, rowIndex, 'F');
      break;
  }
};
scwin.gr_out_oneditend = function (rowIndex, columnId, oldValue, newValue) {
  switch (columnId) {
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
      break;
    case "pchsClntNm":
      scwin.f_openCommPopUpGrid(4, rowIndex, 'F');
      break;
  }
};
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
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "MSG_CM_INF_001");
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  ds_outInfo.undoAll();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_outInfo.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_003");
  }
  tbx_totalRows.setValue(rowCnt);
  gr_out.setFocusedCell(0, "clntNm", true);
  gr_out.setColumnReadOnly("clntNm", true);
  gr_out.setColumnReadOnly("ctrtNo", true);
  gr_out.setColumnReadOnly("wrkPlNm", true);
  gr_out.setColumnReadOnly("commCd", true);
  gr_out.setColumnReadOnly("commNm", true);
  gr_out.setColumnReadOnly("pchsClntNm", true);
  gr_out.setColumnReadOnly("wrkUnitCd", true);
  gr_out.setColumnReadOnly("adptDt", true);
  gr_out.setColumnReadOnly("expireDt", true);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve2_submitdone = function (e) {};
scwin.sbm_retrieve2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.udc_bilgMcht_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_bilgMchtCd, ed_bilgMchtCd.getValue(), 1);
};
scwin.udc_wrkPl_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlCd.getValue(), 2);
};
scwin.udc_comm_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commCd.getValue(), 3);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_main',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_shbox',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_shboxInner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'grp_row1',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_bilgMchtLabel',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgMcht',popupID:'',selectID:'',codeId:'ed_bilgMchtCd',validTitle:'',nameId:'txt_bilgMcht',style:'작업장 기타 매입 요율 관리'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_ctrtNoLabel',label:'계약서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_ctrtNoTd',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtNo',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_Query.ctrtNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'grp_wrkPlTh',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_wrkPlLabel',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_wrkPlTd',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',popupID:'',selectID:'',style:'작업장 기타 매입 요율 관리',validTitle:''}}]}]},{T:1,N:'xf:group',A:{id:'grp_row2',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_commLabel',label:'거래처품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'txt_comm',popupID:'',selectID:'',style:'작업장 기타 매입 요율 관리',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_wrkStDtLabel',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_wrkStDtTd',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',ref:'data:ds_Query.adptDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'grp_emptyTh',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_emptyTd',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'grp_btnShbox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.btn_fieldClear_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_roundBox',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_titleWrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_title'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_gridTitle',label:'작업장 기타 매입 요율 관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_topBtnRight'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_outInfo',focusMode:'row',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'계약거래처',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'계약거래처',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'계약번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',style:'',value:'작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'작업장',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'품명코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'품명',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'매입거래처',width:'120',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',style:'',value:'매입거래처',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkUnitCd',value:'작업단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkUnitNm',value:'작업단위',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptDt',value:'적용일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'expireDt',value:'만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'strPchsRate',value:'보관료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onPchsRate',value:'상차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPchsRate',value:'하차료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkUnitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkUnitNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'expireDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'strPchsRate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onPchsRate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPchsRate',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'grp_gridBottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_gridBottomLeft',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_gridTotal'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalLabel',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalUnit',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'grp_gridBottomRight',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'grp_btnbox',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'grp_btnboxRight',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})