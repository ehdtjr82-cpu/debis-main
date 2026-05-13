/*amd /AI/op_303_03_18b.xml 40581 40c59834b3c1143f3eacdd1b666a8c5d80e9b883679cc833ecdbff5cac659a0f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_stockQuery'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branch',name:'지점',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yard',name:'장치장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcht',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcg',name:'화종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term1From',name:'기간1FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term1To',name:'기간1To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term2From',name:'기간2From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term2To',name:'기간2To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term3From',name:'기간3From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term3To',name:'기간3To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term4From',name:'기간4From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term4To',name:'기간4To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTotalF',name:'termTotalF',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTotalT',name:'termTotalT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cls',name:'일반체화구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accfCargoStd',name:'체화기준',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'장치장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty1',name:'수량1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt1',name:'중량1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm1',name:'CBM1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty2',name:'수량2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt2',name:'중량2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm2',name:'CBM2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty3',name:'수량3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt3',name:'중량3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm3',name:'CBM3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty4',name:'수량4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt4',name:'중량4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm4',name:'CBM4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQtyTotal',name:'수량합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWtTotal',name:'중량합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbmTotal',name:'CBM합계',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrievePossessionTermEachBulkStockPresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_stockQuery","key":"IN_DS1"},{"id":"ds_stockPresent","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_stockPresent","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_lobranCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lobranCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_lobranCd_submitdone','ev:submiterror':'scwin.sbm_lobranCd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.cur_unitState = "02";
scwin.loUpperLobranCd = "";
scwin.onpageload = function () {
  scwin.loUpperLobranCd = $c.ses.getLoUpperLobranCd();
  if (scwin.loUpperLobranCd == null) {
    scwin.loUpperLobranCd = "";
  }
  $c.sbm.execute($p, sbm_lobranCd);
  lc_branch.setFocus();
  scwin.f_UnitChage(1);
};
scwin.onUdcCompleted = function () {
  scwin.f_setDefaultData();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_mainData]))) return;
  await scwin.f_validateDate();
};
scwin.f_setDefaultData = function () {
  ed_term1From.setValue("1");
  ed_term1To.setValue("5");
  ed_term2From.setValue("6");
  ed_term2To.setValue("10");
  ed_term3From.setValue("11");
  ed_term3To.setValue("30");
  ed_term4From.setValue("30");
  lc_con_accfCargoStd.setSelectedIndex(0);
  rd_cls.setValue("1");
  scwin.f_clsCondRdoShowHide();
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_setDefaultData();
  scwin.f_columnShowHide();
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_yard.ilCommonPopUp(scwin.callbackYard, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "장치장,장치장코드,장치장명");
      break;
    case 2:
      udc_stockClnt.ilCommonPopUp(scwin.callbackStockClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
      break;
    case 3:
      udc_kcg.ilCommonPopUp(scwin.callbackKcg, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      udc_comm.ilCommonPopUp(scwin.callbackComm, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.callbackYard = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_yardCd, txt_yardNm);
};
scwin.callbackStockClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_stockClntCd, txt_stockClntNm);
};
scwin.callbackKcg = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_kcgCd, txt_kcgNm);
};
scwin.callbackComm = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, txt_commNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};
scwin.f_openPopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case 2:
      udc_yard.ilCommonPopUp(scwin.callbackPopUpYard, ed_yardCd.getValue(), txt_yardNm.getValue(), chgGubun, "5", null, "150,170", null, null, "440", "500", null, null);
      break;
    case 3:
      udc_stockClnt.ilCommonPopUp(scwin.callbackPopUpStockClnt, ed_stockClntCd.getValue(), txt_stockClntNm.getValue(), chgGubun, "5", null, "150,170", null, null, "440", "500", null, null);
      break;
    case 4:
      udc_kcg.ilCommonPopUp(scwin.callbackPopUpKcg, ed_kcgCd.getValue(), txt_kcgNm.getValue(), chgGubun, "5", null, "150,170", null, null, "440", "500", null, null);
      break;
    case 5:
      udc_comm.ilCommonPopUp(scwin.callbackPopUpComm, ed_commCd.getValue(), txt_commNm.getValue(), chgGubun, "5", null, "150,170", null, "3,4", "440", "500", null, null);
      break;
    default:
      break;
  }
};
scwin.callbackPopUpYard = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_yardCd, txt_yardNm);
  }
};
scwin.callbackPopUpStockClnt = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_stockClntCd, txt_stockClntNm);
  }
};
scwin.callbackPopUpKcg = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_kcgCd, txt_kcgNm);
  }
};
scwin.callbackPopUpComm = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, txt_commNm);
  }
};
scwin.f_validateDate = async function () {
  let chFlag = [false, false, false, false];
  if (ed_term1From.getValue() != "" && ed_term1To.getValue() != "") {
    if (Number(ed_term1From.getValue()) > Number(ed_term1To.getValue())) {
      await $c.win.alert($p, "보유기간 1: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term1From.setFocus();
      return;
    }
    chFlag[0] = true;
  }
  if (ed_term2From.getValue() != "" && ed_term2To.getValue() != "") {
    if (Number(ed_term2From.getValue().trim()) > Number(ed_term2To.getValue().trim())) {
      await $c.win.alert($p, "보유기간 2: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term2From.setFocus();
      return;
    }
    chFlag[1] = true;
  }
  if (ed_term3From.getValue() != "" && ed_term3To.getValue() != "") {
    if (Number(ed_term3From.getValue().trim()) > Number(ed_term3To.getValue().trim())) {
      await $c.win.alert($p, "보유기간 3: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term3From.setFocus();
      return;
    }
    chFlag[2] = true;
  }
  if (ed_term4From.getValue() != "") chFlag[3] = true;
  if (chFlag[0]) {
    if (chFlag[1]) {
      if (Number(ed_term1To.getValue().trim()) >= Number(ed_term2From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 1과 2의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?"))) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term2From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 1과 2의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?"))) return;
      }
    } else if (chFlag[2]) {
      if (Number(ed_term1To.getValue().trim()) >= Number(ed_term3From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 1과 3의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?"))) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term3From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 1과 3의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?"))) return;
      }
    } else if (chFlag[3]) {
      if (Number(ed_term1To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 1과 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?"))) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term4From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 1과 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?"))) return;
      }
    }
  }
  if (chFlag[1]) {
    if (chFlag[2]) {
      if (Number(ed_term2To.getValue().trim()) >= Number(ed_term3From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 2와 3의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?"))) return;
      } else if (Number(ed_term2To.getValue().trim()) + 1 != Number(ed_term3From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 2와 3의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?"))) return;
      }
    } else if (chFlag[3]) {
      if (Number(ed_term2To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 2와 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?"))) return;
      } else if (Number(ed_term2To.getValue().trim()) + 1 != Number(ed_term4From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 2와 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?"))) return;
      }
    }
  }
  if (chFlag[2]) {
    if (chFlag[3]) {
      if (Number(ed_term3To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 3과 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?"))) return;
      } else if (Number(ed_term3To.getValue().trim()) != Number(ed_term4From.getValue().trim())) {
        if (!(await $c.win.confirm($p, "보유기간 3과 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?"))) return;
      }
    }
  }
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_columnShowHide = function () {
  if (ed_term1From.getValue() != "" && ed_term1To.getValue() != "") {
    gr_stockPresent.setColumnVisible("stockQty1", true);
    gr_stockPresent.setColumnVisible("stockWt1", true);
    gr_stockPresent.setColumnVisible("stockCbm1", true);
  } else {
    gr_stockPresent.setColumnVisible("stockQty1", false);
    gr_stockPresent.setColumnVisible("stockWt1", false);
    gr_stockPresent.setColumnVisible("stockCbm1", false);
  }
  if (ed_term2From.getValue() != "" && ed_term2To.getValue() != "") {
    gr_stockPresent.setColumnVisible("stockQty2", true);
    gr_stockPresent.setColumnVisible("stockWt2", true);
    gr_stockPresent.setColumnVisible("stockCbm2", true);
  } else {
    gr_stockPresent.setColumnVisible("stockQty2", false);
    gr_stockPresent.setColumnVisible("stockWt2", false);
    gr_stockPresent.setColumnVisible("stockCbm2", false);
  }
  if (ed_term3From.getValue() != "" && ed_term3To.getValue() != "") {
    gr_stockPresent.setColumnVisible("stockQty3", true);
    gr_stockPresent.setColumnVisible("stockWt3", true);
    gr_stockPresent.setColumnVisible("stockCbm3", true);
  } else {
    gr_stockPresent.setColumnVisible("stockQty3", false);
    gr_stockPresent.setColumnVisible("stockWt3", false);
    gr_stockPresent.setColumnVisible("stockCbm3", false);
  }
  if (ed_term4From.getValue() != "") {
    gr_stockPresent.setColumnVisible("stockQty4", true);
    gr_stockPresent.setColumnVisible("stockWt4", true);
    gr_stockPresent.setColumnVisible("stockCbm4", true);
  } else {
    gr_stockPresent.setColumnVisible("stockQty4", false);
    gr_stockPresent.setColumnVisible("stockWt4", false);
    gr_stockPresent.setColumnVisible("stockCbm4", false);
  }
};
scwin.f_toExcel1 = function () {
  $c.data.downloadGridViewExcel($p, gr_stockPresent, {
    "fileName": "보유기간별 벌크 재고현황.xlsx",
    "sheetName": "보유기간별 벌크 재고현황"
  });
};
scwin.f_clsCondRdoShowHide = function () {
  if (rd_cls.getValue() == "1") lc_con_accfCargoStd.setDisabled(true);else if (rd_cls.getValue() == "2") lc_con_accfCargoStd.setDisabled(false);
};
scwin.f_UnitChage = function (flag) {
  let total_cnt = ds_stockPresent.getRowCount();
  let change_unitState = co_lc_unitCd.getValue();
  if (change_unitState == "01") {
    gr_stockPresent.setColumnProp("stockWt1", "header", "중량<br/>(Ton)");
    gr_stockPresent.setColumnProp("stockWt2", "header", "중량<br/>(Ton)");
    gr_stockPresent.setColumnProp("stockWt3", "header", "중량<br/>(Ton)");
    gr_stockPresent.setColumnProp("stockWt4", "header", "중량<br/>(Ton)");
    gr_stockPresent.setColumnProp("stockWtTotal", "header", "중량<br/>(Ton)");
  } else {
    gr_stockPresent.setColumnProp("stockWt1", "header", "중량<br/>(Kg)");
    gr_stockPresent.setColumnProp("stockWt2", "header", "중량<br/>(Kg)");
    gr_stockPresent.setColumnProp("stockWt3", "header", "중량<br/>(Kg)");
    gr_stockPresent.setColumnProp("stockWt4", "header", "중량<br/>(Kg)");
    gr_stockPresent.setColumnProp("stockWtTotal", "header", "중량<br/>(Kg)");
  }
  if (flag == 1) {
    if (change_unitState == "01") {
      for (let i = 0; i < total_cnt; i++) {
        ds_stockPresent.setCellData(i, "stockWt1", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt1") == null ? 0 : ds_stockPresent.getCellData(i, "stockWt1"), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWt2", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt2") == null ? 0 : ds_stockPresent.getCellData(i, "stockWt2"), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWt3", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt3") == null ? 0 : ds_stockPresent.getCellData(i, "stockWt3"), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWt4", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt4") == null ? 0 : ds_stockPresent.getCellData(i, "stockWt4"), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWtTotal", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWtTotal") == null ? 0 : ds_stockPresent.getCellData(i, "stockWtTotal"), "KG", "TON"));
      }
    }
    scwin.cur_unitState = change_unitState;
  } else {
    if (scwin.cur_unitState != change_unitState) {
      for (let i = 0; i < total_cnt; i++) {
        if (change_unitState == "01") {
          ds_stockPresent.setCellData(i, "stockWt1", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt1"), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWt2", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt2"), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWt3", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt3"), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWt4", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt4"), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWtTotal", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWtTotal"), "KG", "TON"));
        } else {
          ds_stockPresent.setCellData(i, "stockWt1", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt1"), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWt2", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt2"), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWt3", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt3"), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWt4", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt4"), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWtTotal", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWtTotal"), "TON", "KG"));
        }
      }
      scwin.cur_unitState = change_unitState;
    }
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.f_columnShowHide();
  let i = 0;
  while (ds_stockPresent.getRowCount() > i) {
    if (Number(String(ds_stockPresent.getCellData(i, "stockQtyTotal")).trim()) == 0 && Number(String(ds_stockPresent.getCellData(i, "stockWtTotal")).trim()) == 0 && Number(String(ds_stockPresent.getCellData(i, "stockCbmTotal")).trim()) == 0) {
      ds_stockPresent.removeRow(i);
    } else {
      i++;
    }
  }
  if (ds_stockPresent.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  spa_totalRow.setValue(ds_stockPresent.getRowCount());
  scwin.f_UnitChage(1);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_lobranCd_submitdone = function (e) {
  let idx = -1;
  for (let i = 0; i < ds_lobranCd.getRowCount(); i++) {
    if (ds_lobranCd.getCellData(i, "lobranCd") == scwin.loUpperLobranCd) {
      idx = i;
      break;
    }
  }
  if (idx > 0) {
    lc_branch.setSelectedIndex(idx);
  } else {
    lc_branch.setSelectedIndex(0);
  }
};
scwin.sbm_lobranCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.co_lc_unitCd_onchange = function (e) {
  scwin.f_UnitChage(2);
};
scwin.gr_stockPresent_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex == -1) {
    switch (columnId) {
      case "wrkPlNm":
        ds_stockPresent.sort("wrkPlNm", "asc");
        break;
      case "stockClntNm":
        ds_stockPresent.sort("stockClntNm", "asc");
        break;
      case "kcgNm":
        ds_stockPresent.sort("kcgNm", "asc");
        break;
      case "commNm":
        ds_stockPresent.sort("commNm", "asc");
        break;
      default:
        break;
    }
  }
};
scwin.ed_yardCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_yardCd, txt_yardNm, 1, true);
};
scwin.ed_stockClntCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntCd, txt_stockClntNm, 2, true);
};
scwin.ed_kcgCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_kcgCd, txt_kcgNm, 3, true);
};
scwin.ed_commCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, txt_commNm, 4, true);
};
scwin.rd_cls_onviewchange = function (e) {
  scwin.f_clsCondRdoShowHide();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_InitObjects();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_branch',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_stockQuery.branch',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장치장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_yard',codeId:'ed_yardCd',nameId:'txt_yardNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_stockClnt',codeId:'ed_stockClntCd',nameId:'txt_stockClntNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_kcg',popupID:'',selectID:'',codeId:'ed_kcgCd',validTitle:'',nameId:'txt_kcgNm',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'txt_commNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cls',ref:'data:ds_stockQuery.cls',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'체화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_con_accfCargoStd',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_stockQuery.accfCargoStd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간1 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 40px;',id:'ed_term1From',class:'',ref:'data:ds_stockQuery.term1From'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'width: 40px;',id:'ed_term1To',class:'',ref:'data:ds_stockQuery.term1To'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_term2From',style:'width: 40px;',ref:'data:ds_stockQuery.term2From'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_term2To',style:'width: 40px;',ref:'data:ds_stockQuery.term2To'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_term3From',style:'width: 40px;',ref:'data:ds_stockQuery.term3From'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_term3To',style:'width: 40px;',ref:'data:ds_stockQuery.term3To'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간4 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_term4From',style:'width: 40px;',ref:'data:ds_stockQuery.term4From'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_input9',style:'width: 40px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단위 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_unitCd',search:'start',style:'width: 150px;',submenuSize:'fixed'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보유기간별 벌크 재고현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_stockPresent',focusMode:'row',id:'gr_stockPresent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'장치장',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',style:'',value:'화주',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',style:'',value:'화종',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'품명',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'stockQty1',value:'1 ~ 5 일',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'stockWt1',value:'6 ~ 10 일',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'stockCbm1',value:'11 ~ 30 일',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty2',inputType:'text',style:'',value:'30일 초과',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt2',inputType:'text',style:'',value:'TOTAL',width:'210',colSpan:'3',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlNm',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockClntNm',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'kcgNm',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty1',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt1',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockCbm1',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty2',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt2',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockCbm2',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty3',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt3',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockCbm3',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty4',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt4',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt1',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockCbm1',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt2',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockCbm2',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty3',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWt3',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCbm3',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty4',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt4',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCbm4',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQtyTotal',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockWtTotal',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockCbmTotal',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column85',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty1\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column84',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt1\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column83',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockCbm1\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column82',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty2\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt2\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column80',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockCbm2\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column79',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty3\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column78',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt3\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockCbm3\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty4\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column75',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt4\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column74',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockCbm4\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'stockQtyTotal\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column93',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockWtTotal\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column97',value:'0.000',displayMode:'label',textAlign:'right',expression:'sum(\'stockCbmTotal\')',dataType:'float',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})