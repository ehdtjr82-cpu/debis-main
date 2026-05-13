/*amd /AI/eq_220_04_01b.xml 38751 0039b81aa48d3f74f69f5bdb53e89e8027ed98d62144802ac333796393f94754 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_work_unit_re',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'정비작업단위번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'작업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_work_unit',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndWrkHhCnt',name:'표준작업시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_work_unit_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useExpectQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'정비작업단위번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_com_unit_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useExpectQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'정비작업단위번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_work_unit_re","key":"IN_DS1"},{"id":"ds_work_unit","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_work_unit","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_work_unit_list","key":"OUT_DS1"},{"id":"ds_com_unit_list","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_work_unit_list","key":"OUT_DS1"},{"id":"ds_com_unit_list","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'scwin.sbm_retrieve_detail_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_work_unit","key":"IN_DS1"},{"id":"ds_work_unit_list","key":"IN_DS2"},{"id":"ds_com_unit_list","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.tr_save_action = "";
scwin.cvNNew = false;
scwin.cvUpdate = false;
scwin.cntWorkUnit = 0;
scwin.cntComUnit = 0;
scwin.onpageload = async function () {
  scwin.eqHomeClsCd = $c.ses.getEqHomeClsCd();
  ds_work_unit_re.insertRow(0);
  ds_work_unit_re.setCellData(0, "homeClsCd", "");
  ds_work_unit_re.setCellData(0, "catCd", "");
  ds_work_unit_re.setCellData(0, "fixWrkUnitNo", "");
  ds_work_unit_re.setCellData(0, "fixWrkUnitNm", "");
  ds_work_unit_re.setCellData(0, "useYn", 1);
  let codeOptions = [{
    grpCd: "ZZ205",
    compID: "lux_homeClsCd,lux_d_homeClsCd",
    opt: {
      "range": "1",
      "filter": "EQ"
    }
  }, {
    grpCd: "EQ005",
    compID: "lux_catCd,lux_d_catCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  lux_homeClsCd.setValue(scwin.eqHomeClsCd);
  lux_d_homeClsCd.setValue(scwin.eqHomeClsCd);
  lux_catCd.setSelectedIndex(0);
  lux_d_catCd.setSelectedIndex(0);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, bCancel, btn_Upt, btn_Del]);
  scwin.f_disabledGrdBtn(true);
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  sbm_retrieve.action = "/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitListCMD.do";
  await $c.sbm.execute($p, sbm_retrieve);
  gr_work_pl.setReadOnly("grid", false);
  gr_work_part_pl.setReadOnly("grid", true);
  gr_com_part_pl.setReadOnly("grid", true);
  $c.gus.cfDisableKeyData($p);
  if (ds_work_unit.getRowCount() == 0) {
    lux_d_homeClsCd.setValue(lux_homeClsCd.getValue());
    $c.gus.cfDisableBtn($p, [btn_Add, bCancel, btn_Upt, btn_Del]);
  } else {
    $c.gus.cfDisableBtn($p, [bCancel, btn_Upt]);
  }
  scwin.f_disabledGrdBtn(true);
};
scwin.f_Retrieve_detail = async function (fixWorkUnitNumber) {
  let strPath = "/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitDetailCMD.do";
  sbm_retrieve_detail.action = strPath + "?fixWorkUnitNumber=" + fixWorkUnitNumber + "&homeClsCd=" + lux_d_homeClsCd.getValue();
  await $c.sbm.execute($p, sbm_retrieve_detail);
};
scwin.f_AddPartRow = async function () {
  if (scwin.cvUpdate == true || scwin.cvNNew == true) {
    let chk = await $c.gus.cfValidate($p, [em_d_fixWrkUnitNo, txt_d_fixWrkUnitNm]);
    if (!chk) return;
    if (scwin.cvUpdate == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.UpdateFixWorkUnitCMD.do";else if (scwin.cvNNew == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do";
    let newIdx = ds_work_unit_list.insertRow(ds_work_unit_list.getRowCount());
    ds_work_unit_list.setCellData(newIdx, "fixWrkUnitNo", em_d_fixWrkUnitNo.getValue());
    ds_work_unit_list.setCellData(newIdx, "homeClsCd", lux_d_homeClsCd.getValue());
  }
};
scwin.f_AddComPartRow = async function () {
  if (scwin.cvUpdate == true || scwin.cvNNew == true) {
    let chk = await $c.gus.cfValidate($p, [em_d_fixWrkUnitNo, txt_d_fixWrkUnitNm]);
    if (!chk) return;
    if (scwin.cvUpdate == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.UpdateFixWorkUnitCMD.do";else if (scwin.cvNNew == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do";
    let newIdx = ds_com_unit_list.insertRow(ds_com_unit_list.getRowCount());
    ds_com_unit_list.setCellData(newIdx, "fixWrkUnitNo", em_d_fixWrkUnitNo.getValue());
    ds_com_unit_list.setCellData(newIdx, "homeClsCd", lux_homeClsCd.getValue());
  }
};
scwin.btn_Init_onclick = async function (e) {
  scwin.f_Create();
};
scwin.f_Create = async function () {
  scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do";
  scwin.cvNNew = true;
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  scwin.f_disabledGrdBtn(false);
  if (ds_work_unit.getRowCount() > 0) {
    let newIdx = ds_work_unit.insertRow(ds_work_unit.getRowCount());
    ds_work_unit.setCellData(newIdx, "homeClsCd", scwin.eqHomeClsCd);
    ds_work_unit.setCellData(newIdx, "catCd", "01");
    ds_work_unit.setCellData(newIdx, "useYn", 1);
  } else {
    let newIdx = ds_work_unit.insertRow(0);
    ds_work_unit.setCellData(newIdx, "fixWrkUnitNo", "");
    ds_work_unit.setCellData(newIdx, "fixWrkUnitNm", "");
    ds_work_unit.setCellData(newIdx, "catCd", "01");
    ds_work_unit.setCellData(newIdx, "useYn", 1);
  }
  lux_d_homeClsCd.setValue(ds_work_unit.getCellData(0, "homeClsCd"));
  lux_d_catCd.setSelectedIndex(0);
  await scwin.f_Retrieve_detail("0");
  gr_work_pl.setReadOnly("grid", true);
  gr_work_part_pl.setReadOnly("grid", false);
  gr_com_part_pl.setReadOnly("grid", false);
  em_d_fixWrkUnitNo.setFocus();
};
scwin.btn_Add_onclick = async function (e) {
  scwin.f_Update();
};
scwin.f_Update = async function () {
  scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.UpdateFixWorkUnitCMD.do";
  scwin.cvUpdate = true;
  gr_work_pl.setReadOnly("grid", true);
  gr_work_part_pl.setReadOnly("grid", false);
  gr_com_part_pl.setReadOnly("grid", false);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_Add, btn_Del]);
  scwin.f_disabledGrdBtn(false);
};
scwin.bCancel_onclick = async function (e) {
  scwin.f_Cancel();
};
scwin.f_Cancel = async function () {
  if (ds_work_unit.getRowCount() > 0) {
    $c.gus.cfDisableBtn($p, [bCancel, btn_Upt]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Add, bCancel, btn_Upt, btn_Del]);
  }
  scwin.f_disabledGrdBtn(true);
  ds_work_unit.undoAll();
  ds_work_unit_list.undoAll();
  ds_com_unit_list.undoAll();
  $c.gus.cfDisableKeyData($p);
  gr_work_pl.setReadOnly("grid", false);
  gr_work_part_pl.setReadOnly("grid", true);
  gr_com_part_pl.setReadOnly("grid", true);
  scwin.cvUpdate = false;
  scwin.cvNNew = false;
};
scwin.btn_Upt_onclick = async function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  let chkTb = await $c.gus.cfValidate($p, [tb_fixWrkUnit]);
  if (!chkTb) return;
  if (ds_work_unit.getUpdatedIndex().length == 0 && ds_work_unit_list.getUpdatedIndex().length == 0 && ds_com_unit_list.getUpdatedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업단위정보"]);
  } else {
    let chkGrd = await $c.gus.cfValidate($p, [gr_work_part_pl, gr_com_part_pl]);
    if (chkGrd) {
      if (parseInt(em_d_stndWrkHhCnt.getValue()) < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ["표준작업시간", "1"]);
        em_d_stndWrkHhCnt.setFocus();
        return;
      }
      for (let row = 0; row < ds_work_unit_list.getRowCount(); row++) {
        if (parseInt(ds_work_unit_list.getCellData(row, "useExpectQty")) < 1) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ["수량", "1"]);
          gr_work_part_pl.setFocusedCell(row, "useExpectQty");
          return;
        }
      }
      for (let row = 0; row < ds_com_unit_list.getRowCount(); row++) {
        if (parseInt(ds_com_unit_list.getCellData(row, "useExpectQty")) < 1) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ["수량", "1"]);
          gr_com_part_pl.setFocusedCell(row, "useExpectQty");
          return;
        }
      }
      let confirmResult = await $c.win.confirm($p, "저장하시겠습니까?");
      if (confirmResult == true) {
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableBtn($p, [bCancel, btn_Upt]);
        bCancel.setDisabled(true);
        scwin.f_disabledGrdBtn(true);
        gr_work_pl.setReadOnly("grid", false);
        gr_work_part_pl.setReadOnly("grid", true);
        gr_com_part_pl.setReadOnly("grid", true);
        sbm_save.action = scwin.tr_save_action;
        await $c.sbm.execute($p, sbm_save);
      }
    }
  }
};
scwin.btn_Del_onclick = async function (e) {
  scwin.f_Delete();
};
scwin.f_Delete = async function () {
  let confirmResult = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (confirmResult == true) {
    sbm_save.action = "/ps.eq.opinfomgnt.opinfomgnt.DeleteFixWorkUnitCMD.do" + "?fixWorkUnitNumber=" + em_d_fixWrkUnitNo.getValue() + "&homeClsCd=" + lux_d_homeClsCd.getValue();
    await $c.sbm.execute($p, sbm_save);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Upt]);
    await scwin.f_Retrieve();
  }
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
};
scwin.f_openCommPopUpGrid = async function (disGubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  let pWhere = "";
  let pHomeClsCd = lux_d_homeClsCd.getValue();
  if (pHomeClsCd == "LO") {
    pWhere = "LV";
  } else {
    pWhere = "TV";
  }
  switch (disGubun) {
    case 1:
      pCode = ds_work_unit_list.getCellData(row, "eqModelCd");
      rtnList = await $c.gus.cfCommonPopUp($p, 'retrieveEqModelListInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, "T", "모델정보,모델코드,모델명");
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_work_unit_list, row, "eqModelCd", "eqModelNm");
      break;
    case 2:
      pCode = ds_work_unit_list.getCellData(row, "partCd");
      rtnList = await $c.gus.cfCommonPopUp($p, 'retrievePartBasicInfo', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "부품정보,부품코드,부품명");
      if (rtnList != null && rtnList != undefined && rtnList[0] != "N/A") {
        for (let i = 0; i < ds_work_unit_list.getRowCount(); i++) {
          if (ds_work_unit_list.getCellData(i, "partCd") == rtnList[0]) {
            await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
            return;
          }
        }
        for (let i = 0; i < ds_com_unit_list.getRowCount(); i++) {
          if (ds_com_unit_list.getCellData(i, "partCd") == rtnList[0]) {
            await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
            return;
          }
        }
        ds_work_unit_list.setCellData(row, "partCd", rtnList[0]);
        ds_work_unit_list.setCellData(row, "partNm", rtnList[1]);
        ds_work_unit_list.setCellData(row, "partUnitNm", rtnList[3]);
        ds_work_unit_list.setCellData(row, "catNm", rtnList[4]);
        ds_work_unit_list.setCellData(row, "partMakerNm", rtnList[5]);
      }
      break;
    case 3:
      pCode = ds_com_unit_list.getCellData(row, "partCd");
      rtnList = await $c.gus.cfCommonPopUp($p, 'retrievePartBasicInfo', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "부품정보,부품코드,부품명");
      if (rtnList != null && rtnList != undefined && rtnList[0] != "N/A") {
        for (let i = 0; i < ds_work_unit_list.getRowCount(); i++) {
          if (ds_work_unit_list.getCellData(i, "partCd") == rtnList[0]) {
            await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
            return;
          }
        }
        for (let i = 0; i < ds_com_unit_list.getRowCount(); i++) {
          if (ds_com_unit_list.getCellData(i, "partCd") == rtnList[0]) {
            await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
            return;
          }
        }
        ds_com_unit_list.setCellData(row, "partCd", rtnList[0]);
        ds_com_unit_list.setCellData(row, "partNm", rtnList[1]);
        ds_com_unit_list.setCellData(row, "partUnitNm", rtnList[3]);
        ds_com_unit_list.setCellData(row, "catNm", rtnList[4]);
        ds_com_unit_list.setCellData(row, "partMakerNm", rtnList[5]);
      }
      break;
  }
};
scwin.f_grdHeiht = async function (objGrdId, size) {
  let objGrd = $p.getComponentById(objGrdId);
  if (objGrd) {
    let strHeight = objGrd.style.height;
    let intHeight = parseInt(strHeight.replace("px", ""));
    intHeight = intHeight + size;
    if (intHeight > 0) {
      objGrd.style.height = intHeight + "px";
    }
  }
};
scwin.f_disabledGrdBtn = function (ctrl) {
  let btnAddIds = ["btnAddrow_0", "btnAddrow_1"];
  let btnDelIds = ["btnDelrow_0", "btnDelrow_1"];
  let btnCanIds = ["btnCanrow_0", "btnCanrow_1"];
  let cursor = ctrl ? "default" : "pointer";
  for (let i = 0; i < 2; i++) {
    let btnAdd = $p.getComponentById(btnAddIds[i]);
    let btnDel = $p.getComponentById(btnDelIds[i]);
    let btnCan = $p.getComponentById(btnCanIds[i]);
    if (btnAdd) {
      btnAdd.setDisabled(ctrl);
      btnAdd.setStyle("cursor", cursor);
    }
    if (btnDel) {
      btnDel.setDisabled(ctrl);
      btnDel.setStyle("cursor", cursor);
    }
    if (btnCan) {
      btnCan.setDisabled(ctrl);
      btnCan.setStyle("cursor", cursor);
    }
  }
};
scwin.f_toExcel1 = async function () {
  $c.data.downloadGridViewExcel($p, gr_work_pl, {
    fileName: "작업단위.xls",
    sheetName: "작업단위"
  });
};
scwin.sbm_retrieve_submitdone = async function (e) {};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_detail_submitdone = async function (e) {};
scwin.sbm_retrieve_detail_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  if (scwin.cvNNew) {
    scwin.f_Cancel();
    scwin.f_Create();
  }
};
scwin.ds_work_unit_onloadcompleted = async function (e) {
  if (ds_work_unit.getRowCount() > 0) {
    scwin.f_Retrieve_detail(ds_work_unit.getCellData(0, "fixWrkUnitNo"));
  }
};
scwin.ds_work_unit_list_onloadcompleted = async function (e) {
  scwin.cntWorkUnit = ds_work_unit_list.getRowCount();
};
scwin.ds_com_unit_list_onloadcompleted = async function (e) {
  scwin.cntComUnit = ds_com_unit_list.getRowCount();
};
scwin.gr_work_pl_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    scwin.f_Retrieve_detail(ds_work_unit.getCellData(rowIndex, "fixWrkUnitNo"));
  }
};
scwin.gr_work_part_pl_onfocus = async function () {
  if (ds_work_unit_list.getRowPosition() < scwin.cntWorkUnit) {
    gr_work_part_pl.setColumnProperty("eqModelCd", "readOnly", true);
  } else {
    gr_work_part_pl.setColumnProperty("eqModelCd", "readOnly", false);
  }
};
scwin.gr_work_part_pl_ontextimageclick = async function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "eqModelCd":
      scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
      break;
    case "partCd":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
  }
};
scwin.gr_work_part_pl_oneditend = async function (rowIndex, columnId, oldValue, newValue) {
  if (rowIndex >= 0 && ds_work_unit_list.getRowCount() > rowIndex) {
    switch (columnId) {
      case "eqModelCd":
        if (newValue != "" && newValue != oldValue) {
          ds_work_unit_list.setCellData(rowIndex, "eqModelNm", "");
          await scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
        } else if (newValue == "") {
          ds_work_unit_list.setCellData(rowIndex, "eqModelCd", "");
          ds_work_unit_list.setCellData(rowIndex, "eqModelNm", "");
        }
        break;
      case "partCd":
        if (newValue != "" && newValue != oldValue) {
          ds_work_unit_list.setCellData(rowIndex, "partNm", "");
          ds_work_unit_list.setCellData(rowIndex, "partUnitNm", "");
          ds_work_unit_list.setCellData(rowIndex, "catNm", "");
          ds_work_unit_list.setCellData(rowIndex, "partMakerNm", "");
          await scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
        } else if (newValue == "") {
          ds_work_unit_list.setCellData(rowIndex, "partCd", "");
          ds_work_unit_list.setCellData(rowIndex, "partNm", "");
          ds_work_unit_list.setCellData(rowIndex, "partUnitNm", "");
          ds_work_unit_list.setCellData(rowIndex, "catNm", "");
          ds_work_unit_list.setCellData(rowIndex, "partMakerNm", "");
        }
        break;
    }
  }
};
scwin.gr_com_part_pl_onfocus = async function () {
  if (ds_com_unit_list.getRowPosition() < scwin.cntComUnit) {
    gr_com_part_pl.setColumnProperty("partCd", "readOnly", true);
  } else {
    gr_com_part_pl.setColumnProperty("partCd", "readOnly", false);
  }
};
scwin.gr_com_part_pl_ontextimageclick = async function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "partCd":
      scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
      break;
  }
};
scwin.gr_com_part_pl_oneditend = async function (rowIndex, columnId, oldValue, newValue) {
  if (rowIndex >= 0 && ds_com_unit_list.getRowCount() > rowIndex) {
    switch (columnId) {
      case "partCd":
        if (newValue != "" && newValue != oldValue) {
          ds_com_unit_list.setCellData(rowIndex, "partNm", "");
          ds_com_unit_list.setCellData(rowIndex, "partUnitNm", "");
          ds_com_unit_list.setCellData(rowIndex, "catNm", "");
          ds_com_unit_list.setCellData(rowIndex, "partMakerNm", "");
          await scwin.f_openCommPopUpGrid(3, rowIndex, 'T');
        } else if (newValue == "") {
          ds_com_unit_list.setCellData(rowIndex, "partCd", "");
          ds_com_unit_list.setCellData(rowIndex, "partNm", "");
          ds_com_unit_list.setCellData(rowIndex, "partUnitNm", "");
          ds_com_unit_list.setCellData(rowIndex, "catNm", "");
          ds_com_unit_list.setCellData(rowIndex, "partMakerNm", "");
        }
        break;
    }
  }
};
scwin.lux_homeClsCd_onchange = function (e) {
  lux_d_homeClsCd.setValue(lux_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_work_unit_re.homeClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_catCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_work_unit_re.catCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단위',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'em_fixWrkUnitNo',class:'',ref:'data:ds_work_unit_re.fixWrkUnitNo'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'txt_fixWrkUnitNm',class:'',ref:'data:ds_work_unit_re.fixWrkUnitNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단위 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_work_unit',id:'gr_work_pl',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',style:'',value:'작업단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'단위명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catCd',inputType:'text',style:'',value:'계통코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stndWrkHhCnt',inputType:'text',style:'',value:'표준작업시간',width:'120',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stndWrkHhCnt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업단위코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'em_d_fixWrkUnitNo',style:'width: 150px;',ref:'data:ds_work_unit.fixWrkUnitNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업단위명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_d_fixWrkUnitNm',style:'',ref:'data:ds_work_unit.fixWrkUnitNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'표준작업시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_d_stndWrkHhCnt',style:'width: 150px;',ref:'data:ds_work_unit.stndWrkHhCnt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_d_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_work_unit.homeClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계통',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_d_catCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_work_unit.catCd',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비모델별 부품 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_work_unit_list',focusMode:'row',id:'gr_work_part_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',value:'모델코드',width:'100',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelCd',inputType:'text',removeBorderStyle:'false',value:'모델명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelNm',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'수량',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useExpectQty',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',value:'계통',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catNm',value:'제조사',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelCd',inputType:'textImage',removeBorderStyle:'false',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'textImage',removeBorderStyle:'false',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',textAlign:'center',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useExpectQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',allowChar:'0-9',displayFormat:'99999'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catNm',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'공통 부품 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_com_unit_list',focusMode:'row',id:'gr_com_part_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'100',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',value:'수량',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'useExpectQty',inputType:'text',removeBorderStyle:'false',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',value:'계통',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'제조사',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'textImage',removeBorderStyle:'false',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'useExpectQty',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',allowChar:'0-9',displayFormat:'99999'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',textAlign:'center',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'N',btnDelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init','ev:onclick':'scwin.btn_Init_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Add','ev:onclick':'scwin.btn_Add_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bCancel','ev:onclick':'scwin.bCancel_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Upt','ev:onclick':'scwin.btn_Upt_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del','ev:onclick':'scwin.btn_Del_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})