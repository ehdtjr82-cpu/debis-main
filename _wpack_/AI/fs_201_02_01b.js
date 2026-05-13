/*amd /AI/fs_201_02_01b.xml 55027 15783a9a2c2d59d6534fc6ab59bd6a80aeb9c4f1eece5a9cf375087f81bc9d96 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_linelist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgComnCdKnd',name:'청구공통코드종류',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_billcover_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgComnCdKnd',name:'청구공통코드종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_linelist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billcover',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverPatternNm',name:'유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverFmlaClsCd',name:'BILL COVER양식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messersLabel',name:'귀하라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNmLabel',name:'선명라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslInscrpYn',name:'선명기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsFvLabel',name:'T/S F/V라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsFvInscrpYn',name:'T/S F/V기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDtLabel',name:'입출항일라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDtInscrpYn',name:'입출항일기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntLabel',name:'항차라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntInscrpYn',name:'항차기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'titleSortClsCd',name:'TITLE정렬구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsTransDstInscrpYn',name:'T/S운송구간기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntInfoInscrpYn',name:'은행계좌정보기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRtInscrpYn',name:'환율기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'signInscrpYn',name:'서명기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAmtInscrpTitle1',name:'BILL금액기재TITLE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAmtInscrpTitle2',name:'BILL금액기재TITLE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgComnCdKnd',name:'청구공통코드종류',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_linelist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingComnCdLineListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_linelist_con","key":"IN_DS1"},{"id":"ds_linelist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_linelist","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_linelist_retrieve_submitdone','ev:submiterror':'scwin.sbm_linelist_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_billcover_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillCoverListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_billcover_con","key":"IN_DS1"},{"id":"ds_billcover","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_billcover","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_billcover_retrieve_submitdone','ev:submiterror':'scwin.sbm_billcover_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_billcover_save',action:'/ds.fs.bilg.bilgcomncdmgnt.RegistBillCoverCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_billcover","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_billcover_save_submitdone','ev:submiterror':'scwin.sbm_billcover_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_FS_WRN_004 = "저장되지 않은 건입니다.";
scwin.MSG_FS_WRN_005 = "공통코드는 삭제할 수 없습니다.";
scwin.addflag = "";
scwin.delflag = "";
scwin.billcover = "BILLCOVER";
scwin.condition = "";
scwin.tabCompIds = [{
  txt_billCoverPatternNm: "txt_billCoverPatternNm",
  rd_billCoverFmlaClsCd: "rd_billCoverFmlaClsCd",
  txt_messersLabel: "txt_messersLabel",
  txt_vsslNmLabel: "txt_vsslNmLabel",
  chb_vsslInscrpYn: "chb_vsslInscrpYn",
  txt_tsFvLabel: "txt_tsFvLabel",
  chb_tsFvInscrpYn: "chb_tsFvInscrpYn",
  txt_arDepPortDtLabel: "txt_arDepPortDtLabel",
  chb_arDepPortDtInscrpYn: "chb_arDepPortDtInscrpYn",
  txt_portcntLabel: "txt_portcntLabel",
  chb_portcntInscrpYn: "chb_portcntInscrpYn",
  rd_titleSortClsCd: "rd_titleSortClsCd",
  chb_tsTransDstInscrpYn: "chb_tsTransDstInscrpYn",
  chb_bankAcntInfoInscrpYn: "chb_bankAcntInfoInscrpYn",
  chb_exchRtInscrpYn: "chb_exchRtInscrpYn",
  chb_signInscrpYn: "chb_signInscrpYn",
  txt_billAmtInscrpTitle1: "txt_billAmtInscrpTitle1",
  txt_billAmtInscrpTitle2: "txt_billAmtInscrpTitle2"
}, {
  txt_billCoverPatternNm: "txt_billCoverPatternNm_2",
  rd_billCoverFmlaClsCd: "rd_billCoverFmlaClsCd_2",
  txt_messersLabel: "txt_messersLabel_2",
  txt_vsslNmLabel: "txt_vsslNmLabel_2",
  chb_vsslInscrpYn: "chb_vsslInscrpYn_2",
  txt_tsFvLabel: "txt_tsFvLabel_2",
  chb_tsFvInscrpYn: "chb_tsFvInscrpYn_2",
  txt_arDepPortDtLabel: "txt_arDepPortDtLabel_2",
  chb_arDepPortDtInscrpYn: "chb_arDepPortDtInscrpYn_2",
  txt_portcntLabel: "txt_portcntLabel_2",
  chb_portcntInscrpYn: "chb_portcntInscrpYn_2",
  rd_titleSortClsCd: "rd_titleSortClsCd_2",
  chb_tsTransDstInscrpYn: "chb_tsTransDstInscrpYn_2",
  chb_bankAcntInfoInscrpYn: "chb_bankAcntInfoInscrpYn_2",
  chb_exchRtInscrpYn: "chb_exchRtInscrpYn_2",
  chb_signInscrpYn: "chb_signInscrpYn_2",
  txt_billAmtInscrpTitle1: "txt_billAmtInscrpTitle1_2",
  txt_billAmtInscrpTitle2: "txt_billAmtInscrpTitle2_2"
}, {
  txt_billCoverPatternNm: "txt_billCoverPatternNm_3",
  rd_billCoverFmlaClsCd: "rd_billCoverFmlaClsCd_3",
  txt_messersLabel: "txt_messersLabel_3",
  txt_vsslNmLabel: "txt_vsslNmLabel_3",
  chb_vsslInscrpYn: "chb_vsslInscrpYn_3",
  txt_tsFvLabel: "txt_tsFvLabel_3",
  chb_tsFvInscrpYn: "chb_tsFvInscrpYn_3",
  txt_arDepPortDtLabel: "txt_arDepPortDtLabel_3",
  chb_arDepPortDtInscrpYn: "chb_arDepPortDtInscrpYn_3",
  txt_portcntLabel: "txt_portcntLabel_3",
  chb_portcntInscrpYn: "chb_portcntInscrpYn_3",
  rd_titleSortClsCd: "rd_titleSortClsCd_3",
  chb_tsTransDstInscrpYn: "chb_tsTransDstInscrpYn_3",
  chb_bankAcntInfoInscrpYn: "chb_bankAcntInfoInscrpYn_3",
  chb_exchRtInscrpYn: "chb_exchRtInscrpYn_3",
  chb_signInscrpYn: "chb_signInscrpYn_3",
  txt_billAmtInscrpTitle1: "txt_billAmtInscrpTitle1_3",
  txt_billAmtInscrpTitle2: "txt_billAmtInscrpTitle2_3"
}];
scwin._getComp = function (tabIdx, fieldKey) {
  let compId = scwin.tabCompIds[tabIdx][fieldKey];
  return $p.getComponentById(compId);
};
scwin.onpageload = function () {
  ed_bilgLoofcCd.setFocus();
  for (let i = 0; i < 3; i++) {
    scwin._getComp(i, "rd_billCoverFmlaClsCd").setValue("T1");
    scwin._getComp(i, "rd_titleSortClsCd").setValue("C");
  }
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_cancelRow]);
  scwin.f_ViewTab(0);
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_bilgLoofcCd, txt_bilgLoofcNm]);
};
scwin.f_GetDataSet = async function (condition, row) {
  if (condition == "LINE_CON") {
    dma_linelist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
    dma_linelist_con.set("bilgComnCdKnd", scwin.billcover);
    sbm_linelist_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingComnCdLineListCMD.do";
    await $c.sbm.execute($p, sbm_linelist_retrieve);
  } else if (condition == "BILGCOMNCD_CON") {
    dma_billcover_con.set("bilgLoofcCd", ds_linelist.getCellData(0, "bilgLoofcCd"));
    dma_billcover_con.set("lineCd", ds_linelist.getCellData(row - 1, "lineCd"));
    dma_billcover_con.set("bilgComnCdKnd", scwin.billcover);
    if (row == "1") {
      sbm_billcover_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillCoverListCMD.do";
    } else {
      sbm_billcover_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillCoverListCMD.do";
    }
    await $c.sbm.execute($p, sbm_billcover_retrieve);
  }
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_bilgLoofcCd]);
  if (!chk) return;
  await scwin.f_GetDataSet("LINE_CON");
};
scwin.f_Save = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_line, txt_billCoverPatternNm, txt_messersLabel, txt_vsslNmLabel, txt_tsFvLabel, txt_arDepPortDtLabel, txt_portcntLabel]);
  if (!chk) return;
  let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
  if (!confirmResult) return;
  let activeTab = tac_tabControl1.getSelectedTabIndex();
  for (let j = 0; j < ds_billcover.getRowCount(); j++) {
    ds_billcover.setCellData(j, "bilgLoofcCd", ds_linelist.getCellData(0, "bilgLoofcCd"));
    ds_billcover.setCellData(j, "lineCd", ds_linelist.getCellData(ds_linelist.getRowPosition(), "lineCd"));
    ds_billcover.setCellData(j, "billCoverPatternNm", scwin._getComp(j, "txt_billCoverPatternNm").getValue());
    ds_billcover.setCellData(j, "billCoverFmlaClsCd", scwin._getComp(j, "rd_billCoverFmlaClsCd").getValue());
    ds_billcover.setCellData(j, "messersLabel", scwin._getComp(j, "txt_messersLabel").getValue());
    ds_billcover.setCellData(j, "vsslNmLabel", scwin._getComp(j, "txt_vsslNmLabel").getValue());
    ds_billcover.setCellData(j, "vsslInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_vsslInscrpYn")));
    ds_billcover.setCellData(j, "tsFvLabel", scwin._getComp(j, "txt_tsFvLabel").getValue());
    ds_billcover.setCellData(j, "tsFvInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_tsFvInscrpYn")));
    ds_billcover.setCellData(j, "arDepPortDtLabel", scwin._getComp(j, "txt_arDepPortDtLabel").getValue());
    ds_billcover.setCellData(j, "arDepPortDtInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_arDepPortDtInscrpYn")));
    ds_billcover.setCellData(j, "portcntLabel", scwin._getComp(j, "txt_portcntLabel").getValue());
    ds_billcover.setCellData(j, "portcntInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_portcntInscrpYn")));
    ds_billcover.setCellData(j, "titleSortClsCd", scwin._getComp(j, "rd_titleSortClsCd").getValue());
    ds_billcover.setCellData(j, "tsTransDstInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_tsTransDstInscrpYn")));
    ds_billcover.setCellData(j, "bankAcntInfoInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_bankAcntInfoInscrpYn")));
    ds_billcover.setCellData(j, "exchRtInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_exchRtInscrpYn")));
    ds_billcover.setCellData(j, "signInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_signInscrpYn")));
    ds_billcover.setCellData(j, "billAmtInscrpTitle1", scwin._getComp(j, "txt_billAmtInscrpTitle1").getValue());
    ds_billcover.setCellData(j, "billAmtInscrpTitle2", scwin._getComp(j, "txt_billAmtInscrpTitle2").getValue());
  }
  scwin.delflag = "";
  if (scwin.addflag == "REG") {
    sbm_billcover_save.action = "/ds.fs.bilg.bilgcomncdmgnt.RegistBillCoverCMD.do";
  } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
    sbm_billcover_save.action = "/ds.fs.bilg.bilgcomncdmgnt.UpdateBillCoverCMD.do";
  }
  await $c.sbm.execute($p, sbm_billcover_save);
};
scwin.f_AddRow = async function () {
  ds_linelist.insertRow();
  scwin.f_Popup();
  await scwin.f_GetDataSet("BILGCOMNCD_CON", "1");
  if (ds_linelist.getRowStatus(ds_linelist.getRowPosition()) == "C") {
    scwin.addflag = "REG";
  }
};
scwin.f_Delete = async function () {
  if (ds_linelist.getRowStatus(ds_linelist.getRowPosition()) == "C") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_004);
    return;
  } else {
    if (ds_linelist.getCellData(ds_linelist.getRowPosition(), "lineCd") == "0000") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_005);
      return;
    }
    let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_004);
    if (confirmResult == true) {
      ds_linelist.removeRow(ds_linelist.getRowPosition());
      ds_billcover.removeRow(ds_billcover.getRowPosition());
      scwin.delflag = "DEL";
      sbm_billcover_save.action = "/ds.fs.bilg.bilgcomncdmgnt.DeleteBillCoverCMD.do";
      await $c.sbm.execute($p, sbm_billcover_save);
      await scwin.f_Retrieve();
    }
  }
};
scwin.f_Editable = function (edit) {
  if (edit == "true") {
    gr_line.setColumnProp("lineCd", "readOnly", false);
    gr_line.setColumnProp("lineNm", "readOnly", true);
  } else {
    gr_line.setColumnProp("lineCd", "readOnly", true);
    gr_line.setColumnProp("lineNm", "readOnly", true);
  }
};
scwin.f_ViewTab = async function (idx) {
  let chk = await $c.gus.cfValidate($p, [gr_line, txt_billCoverPatternNm, txt_messersLabel, txt_vsslNmLabel, txt_tsFvLabel, txt_arDepPortDtLabel, txt_portcntLabel]);
  if (!chk) return;
  tac_tabControl1.setSelectedTabIndex(idx);
};
scwin.f_GetChkValue = function (chkComp) {
  let val = chkComp.getValue();
  if (val != null && val != "" && val.length > 0) {
    return "1";
  } else {
    return "0";
  }
};
scwin.f_SetChkValue = function (dsId, row, id) {
  if (dsId.getCellData(row, id) == "1") {
    return true;
  } else {
    return false;
  }
};
scwin.f_Cancel = function () {
  ds_linelist.undoRow(ds_linelist.getRowPosition());
  scwin.addflag = "MOD";
};
scwin.f_Popup = function () {
  let rtnList = [];
  let pCode = "";
  let pName = "";
  rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLineInfo', pCode, pName, 'F', null, null, null, null, null, null, null, null, null, null, 'F', null);
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_linelist.setCellData(ds_linelist.getRowPosition(), "lineCd", rtnList[0]);
    ds_linelist.setCellData(ds_linelist.getRowPosition(), "lineNm", rtnList[1]);
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = [];
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveOpDeptCdInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLoofcCd, txt_bilgLoofcNm);
      break;
    default:
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_addRow_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_cancelRow_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.sbm_linelist_retrieve_submitdone = async function (e) {
  let rowcnt = ds_linelist.getRowCount();
  // TODO: $c.gus.cfShowTotalRows(totalRows, rowcnt) — totalRows 컴포넌트 매핑 필요

  if (rowcnt == 0) {
    $c.gus.cfInitObjects($p, tbl_search);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_cancelRow]);
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [btn_addRow, btn_cancelRow]);
    await scwin.f_GetDataSet("BILGCOMNCD_CON", "1");
    scwin.f_Editable("false");
  }
};
scwin.sbm_linelist_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_billcover_retrieve_submitdone = function (e) {
  for (let i = 0; i < ds_billcover.getRowCount(); i++) {
    scwin._getComp(i, "txt_billCoverPatternNm").setValue(ds_billcover.getCellData(i, "billCoverPatternNm"));
    scwin._getComp(i, "rd_billCoverFmlaClsCd").setValue(ds_billcover.getCellData(i, "billCoverFmlaClsCd"));
    scwin._getComp(i, "txt_messersLabel").setValue(ds_billcover.getCellData(i, "messersLabel"));
    scwin._getComp(i, "txt_vsslNmLabel").setValue(ds_billcover.getCellData(i, "vsslNmLabel"));
    scwin._getComp(i, "txt_tsFvLabel").setValue(ds_billcover.getCellData(i, "tsFvLabel"));
    scwin._getComp(i, "txt_arDepPortDtLabel").setValue(ds_billcover.getCellData(i, "arDepPortDtLabel"));
    scwin._getComp(i, "txt_portcntLabel").setValue(ds_billcover.getCellData(i, "portcntLabel"));
    scwin._getComp(i, "rd_titleSortClsCd").setValue(ds_billcover.getCellData(i, "titleSortClsCd"));
    if (scwin.f_SetChkValue(ds_billcover, i, "vsslInscrpYn")) {
      scwin._getComp(i, "chb_vsslInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_vsslInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "tsFvInscrpYn")) {
      scwin._getComp(i, "chb_tsFvInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_tsFvInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "arDepPortDtInscrpYn")) {
      scwin._getComp(i, "chb_arDepPortDtInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_arDepPortDtInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "portcntInscrpYn")) {
      scwin._getComp(i, "chb_portcntInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_portcntInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "tsTransDstInscrpYn")) {
      scwin._getComp(i, "chb_tsTransDstInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_tsTransDstInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "bankAcntInfoInscrpYn")) {
      scwin._getComp(i, "chb_bankAcntInfoInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_bankAcntInfoInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "exchRtInscrpYn")) {
      scwin._getComp(i, "chb_exchRtInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_exchRtInscrpYn").setValue("");
    }
    if (scwin.f_SetChkValue(ds_billcover, i, "signInscrpYn")) {
      scwin._getComp(i, "chb_signInscrpYn").setValue("1");
    } else {
      scwin._getComp(i, "chb_signInscrpYn").setValue("");
    }
    scwin._getComp(i, "txt_billAmtInscrpTitle1").setValue(ds_billcover.getCellData(i, "billAmtInscrpTitle1"));
    scwin._getComp(i, "txt_billAmtInscrpTitle2").setValue(ds_billcover.getCellData(i, "billAmtInscrpTitle2"));
  }
};
scwin.sbm_billcover_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_billcover_save_submitdone = async function (e) {
  scwin.addflag = "MOD";
  if (scwin.delflag == "DEL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
};
scwin.sbm_billcover_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_linelist_onrowpositionchange = async function (rowIndex, oldRowIndex) {
  if (rowIndex >= 0) {
    if (ds_linelist.getRowStatus(rowIndex) != "C") {
      await scwin.f_GetDataSet("BILGCOMNCD_CON", rowIndex + 1);
      scwin.addflag = "MOD";
      scwin.f_Editable("false");
    } else {
      scwin.f_Editable("true");
      scwin.addflag = "REG";
    }
  }
};
scwin.ds_linelist_onbeforerowpositionchange = async function (rowIndex, oldRowIndex) {
  if (ds_linelist.getRowStatus(oldRowIndex) == "C") {
    let confirmResult = await $c.win.confirm($p, "저장하지 않은 데이타를 취소하시겠습니까?");
    if (confirmResult == true) {
      ds_linelist.undoRow(oldRowIndex);
    } else {
      return false;
    }
  }
};
scwin.gr_line_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_Popup();
};
scwin.ed_bilgLoofcCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, txt_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofc_onblurCode = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, txt_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofc_onClick = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLoofcCd.getValue(), txt_bilgLoofcNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구지점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgLoofc',codeId:'ed_bilgLoofcCd',nameId:'txt_bilgLoofcNm',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{style:'width: 40%;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_linelist',style:'',autoFit:'allColumn',id:'gr_line',visibleRowNum:'15',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgLoofcCd',value:'청구지점코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',value:'LINE',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'lineNm',value:'LINE명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgLoofcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'lineNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',style:'',id:'tac_tabControl1',class:'wq_tab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'A TYPE'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'B TYPE'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'C TYPE'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content1'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DATE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' BILL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'유형명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_billCoverPatternNm',placeholder:'',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_billCoverFmlaClsCd',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(1)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(2)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀하',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_messersLabel',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_vsslNmLabel',placeholder:'',class:''}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_vsslInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'T/S F/V',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_tsFvLabel',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsFvInscrpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_arDepPortDtLabel',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arDepPortDtInscrpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcntLabel',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_portcntInscrpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th pa16'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-10 tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'We herby request the payment for the following service rendered to you',class:''}},{T:1,N:'xf:group',A:{id:'',class:'form-group tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TITLE',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_titleSortClsCd',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중앙정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_tsTransDstInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'tac',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(P#C ~ P#2) T/S 운송구간 출력여부 '}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14 tac'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TITLE1',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_billAmtInscrpTitle1',placeholder:'',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TITLE2',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_billAmtInscrpTitle2',placeholder:'',class:''}}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BILL 내역',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th pa16'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14 tac'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bankAcntInfoInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ACCOUNT INFO'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_exchRtInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환율'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th pa16'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-10 tac'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-2'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'"We certify that above is true and correct"',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DONGBU CORPORATION',class:''}}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_signInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'tac',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SIGN'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content2'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DATE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' BILL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유형명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_billCoverPatternNm_2',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_billCoverFmlaClsCd_2',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(1)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(2)'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀하',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_messersLabel_2',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_vsslNmLabel_2',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_vsslInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S F/V',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_tsFvLabel_2',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsFvInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_arDepPortDtLabel_2',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arDepPortDtInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcntLabel_2',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_portcntInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'We herby request the payment for the following service rendered to you',ref:'',style:'',userData2:''}},{T:1,N:'xf:group',A:{class:'form-group tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_titleSortClsCd_2',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽정렬'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중앙정렬'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_tsTransDstInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(P#C ~ P#2) T/S 운송구간 출력여부 '}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE1',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle1_2',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE2',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle2_2',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL 내역',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bankAcntInfoInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ACCOUNT INFO'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_exchRtInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환율'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-2',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'"We certify that above is true and correct"',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DONGBU CORPORATION',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_signInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SIGN'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DATE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' BILL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유형명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_billCoverPatternNm_3',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_billCoverFmlaClsCd_3',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(1)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(2)'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀하',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_messersLabel_3',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_vsslNmLabel_3',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_vsslInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S F/V',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_tsFvLabel_3',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsFvInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_arDepPortDtLabel_3',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arDepPortDtInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcntLabel_3',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_portcntInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'We herby request the payment for the following service rendered to you',ref:'',style:'',userData2:''}},{T:1,N:'xf:group',A:{class:'form-group tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_titleSortClsCd_3',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽정렬'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중앙정렬'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_tsTransDstInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(P#C ~ P#2) T/S 운송구간 출력여부 '}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE1',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle1_3',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE2',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle2_3',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL 내역',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bankAcntInfoInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ACCOUNT INFO'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_exchRtInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환율'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-2',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'"We certify that above is true and correct"',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DONGBU CORPORATION',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_signInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SIGN'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_del',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})