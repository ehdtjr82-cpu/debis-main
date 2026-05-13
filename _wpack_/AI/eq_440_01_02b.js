/*amd /AI/eq_440_01_02b.xml 48137 b19cce03ed394f98708fb34a1a901a0ea9118b84fc9ff14887a2c648cd6e4905 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Inspection'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'tranDtFrom',name:'이관일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tranDtTo',name:'이관일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'owner',name:'담당자사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tranBfOfc',name:'이관전사업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tranAfOfc',name:'이관후사업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Transfer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selcYn',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranNo',name:'이관번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranPicNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAmt',name:'이관총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranDt',name:'이관일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranBfFixWrkPlCd',name:'이관전작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranBfFixWrkPlNm',name:'이관전작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctBdeptCd',name:'이관전귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfFixWrkPlCd',name:'이관후작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfFixWrkPlNm',name:'이관후작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctAdeptCd',name:'이관후귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranPicId',name:'담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_TransferContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tranNo',name:'이관번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranSeq',name:'이관순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranQty',name:'이관수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tranUpr',name:'이관단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tranAmt',name:'이관금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockAmt',name:'재고금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd',name:'입고계정코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InspectionContent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.RetrievePartsTransferCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Inspection","key":"IN_DS1"},{"id":"ds_Transfer","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Transfer","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContents',action:'/ps.eq.RetrievePartsTransferListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Inspection","key":"IN_DS1"},{"id":"ds_TransferContents","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_TransferContents","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveContents_submitdone','ev:submiterror':'scwin.sbm_retrieveContents_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.RegistPartsTransferCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Transfer","key":"IN_DS1"},{"id":"ds_TransferContents","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_slipCreate',action:'/ps.eq.partmgnt.parttranreg.RegistPartsTransferSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Transfer","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_slipCreate_submitdone','ev:submiterror':'scwin.sbm_slipCreate_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_slipDelete',action:'/ps.eq.partmgnt.parttranreg.DeletePartsTransferSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Transfer","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_slipDelete_submitdone','ev:submiterror':'scwin.sbm_slipDelete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.insertRewCnt = 0;
scwin.dangaCode = new Array(50);
scwin.dangaSum = new Array(50);
scwin.booleanCheck = "false";
scwin.txt_checkOfficePopup = "";
scwin.hid_tranBfFixWrkPlNm = "";
scwin.hid_tranAfFixWrkPlNm = "";
scwin.btnList = ["bSlipCreate", "bSlipDel"];
scwin.dateStr = "";
scwin.firstDate = "";
scwin.onpageload = async function () {
  scwin.dateStr = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.firstDate = scwin.dateStr.substring(0, 6) + "01";
  $c.gus.cfDisableObjects($p, [ica_tranDt, ed_picEmpNo, ed_tranBfFixWrkPlCd, ed_tranAfFixWrkPlCd, lc_inClsCd, ed_clntNo, txt_clntNm]);
  $c.gus.cfDisableBtn($p, [bSave, bCreate]);
  $c.gus.cfDisableBtnOnly($p, scwin.btnList);
  scwin.txt_checkOfficePopup = "";
};
scwin.onUdcCompleted = async function () {
  udc_tranDt.setInitDate(scwin.firstDate, scwin.dateStr);
};
scwin.f_Retrieve = async function () {
  dma_Inspection.set("tranDtFrom", ica_tranDtFrom.getValue());
  dma_Inspection.set("tranDtTo", ica_tranDtTo.getValue());
  dma_Inspection.set("owner", ed_owner.getValue());
  dma_Inspection.set("tranBfOfc", ed_tranBfOfc.getValue());
  dma_Inspection.set("tranAfOfc", ed_tranAfOfc.getValue());
  let tranBfOfc = ed_tranBfOfc.getValue();
  let tranAfOfc = ed_tranAfOfc.getValue();
  if (ica_tranDtFrom.getValue() > ica_tranDtTo.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039, [""]);
    ica_tranDtTo.setFocus();
  } else if (tranBfOfc.length <= 0 && tranAfOfc.length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, [" 이관전 작업장 또는  이관후 작업장 을 입력 하셔야 합니다. 작업장"]);
    ed_tranBfOfc.setFocus();
  } else if (ed_tranBfOfc.getValue().length > 0 && ed_tranAfOfc.getValue().length > 0 && ed_tranBfOfc.getValue() == ed_tranAfOfc.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["조회 조건에서 이관전 작업장과 이관후 작업장이 동일 합니다. 작업장"]);
    ed_tranAfOfc.setFocus();
  } else if (await $c.gus.cfValidate($p, [tb_retrieve])) {
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_Create = async function () {
  scwin.booleanCheck = "true";
  let rowCnt = ds_Transfer.getRowCount();
  ds_Transfer.insertRow(rowCnt);
  ds_TransferContents.removeAll();
  scwin.f_AddRowPrice();
  ica_tranDt.setValue(scwin.dateStr);
  ed_tranBfFixWrkPlCd.setValue(ed_tranBfOfc.getValue());
  txt_tranBfFixWrkPlNm.setValue(txt_tranBfOfc.getValue());
  ed_tranAfFixWrkPlCd.setValue(ed_tranAfOfc.getValue());
  txt_tranAfFixWrkPlNm.setValue(txt_tranAfOfc.getValue());
  lc_inClsCd.setSelectedIndex(0);
  ed_clntNo.setValue("000000");
  gr_TransferContents.setReadOnly("grid", false);
  $c.gus.cfEnableObjects($p, [ica_tranDt, ed_picEmpNo, ed_tranBfFixWrkPlCd, ed_tranAfFixWrkPlCd, lc_inClsCd]);
  $c.gus.cfEnableBtnOnly($p, [bSave]);
  $c.gus.cfDisableBtn($p, [bCreate]);
};
scwin.f_AddRowPrice = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_TransferContents]);
  if (chk) {
    ds_TransferContents.insertRow(ds_TransferContents.getRowCount());
  }
};
scwin.f_Save = async function () {
  let checkBf = ed_tranBfFixWrkPlCd.getValue();
  let checkAf = ed_tranAfFixWrkPlCd.getValue();
  if (checkBf.length > 0 && checkAf.length > 0 && checkBf == checkAf) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["이관전 작업장과 이관후 작업장이 동일 합니다. 작업장"]);
    ed_tranAfFixWrkPlCd.setFocus();
    return;
  }
  checkBf = scwin.hid_tranBfFixWrkPlNm;
  checkAf = scwin.hid_tranAfFixWrkPlNm;
  if (checkBf.length > 0 && checkAf.length > 0 && checkBf != checkAf) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["이관전 작업장과 이관후 작업장의 소속 구분 코드가 동일 하지 않습니다. 작업장"]);
    ed_tranAfFixWrkPlCd.setFocus();
    return;
  }
  let clntNo = ed_clntNo.getValue();
  let check = lc_inClsCd.getValue();
  if (check == "3") {
    if (clntNo.length <= 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["입고 구분이 선입고일 경우 거래처를 입력하셔야 합니다. 거래처"]);
      return;
    }
  }
  if (checkBf.length > 0 && checkAf.length > 0 && checkBf != checkAf) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["이관전 작업장과 이관후 작업장의 소속 구분 코드가 동일 하지 않습니다. 작업장"]);
    ed_tranAfFixWrkPlCd.setFocus();
    return;
  }
  let chk1 = await $c.gus.cfValidate($p, [tb_check]);
  if (!chk1) return;
  let chk2 = await $c.gus.cfValidate($p, [gr_TransferContents]);
  if (!chk2) return;
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    let row = ds_Transfer.getRowPosition();
    ds_Transfer.setCellData(row, "clntNo", ed_clntNo.getValue());
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_owner.setFocus();
  scwin.txt_checkOfficePopup = "";
};
scwin.f_Cancel = async function () {
  ds_Transfer.undoAll();
  let pos = ds_Transfer.getRowPosition();
  if (pos >= 0) {
    ds_Transfer.removeRow(pos);
  }
  ds_TransferContents.removeAll();
  gr_TransferContents.setReadOnly("grid", true);
  $c.gus.cfDisableObjects($p, [ica_tranDt, ed_picEmpNo, ed_tranBfFixWrkPlCd, ed_tranAfFixWrkPlCd, lc_inClsCd, ed_clntNo]);
  $c.gus.cfDisableBtn($p, [bSave]);
  $c.gus.cfEnableBtnOnly($p, [bCreate]);
  let Row = ds_Transfer.getRowPosition();
  if (Row >= 0) {
    dma_Inspection.set("transferNumber", ds_Transfer.getCellData(Row, "tranNo"));
    await $c.sbm.execute($p, sbm_retrieveContents);
  }
  scwin.booleanCheck = "false";
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_owner.ilCommonPopUp(scwin.callbackCase1, pCode, pName, pClose, null, null, null, null, "T", null, null, null, null, null, pAllSearch, "담당자,담당자번호,담당자명");
      break;
    case 2:
      udc_tranBfOfc.ilCommonPopUp(scwin.callbackCase2, pCode, pName, pClose, null, null, null, null, scwin.txt_checkOfficePopup, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      break;
    case 3:
      udc_tranAfOfc.ilCommonPopUp(scwin.callbackCase3, pCode, pName, pClose, null, null, null, null, scwin.txt_checkOfficePopup, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      break;
    case 4:
      udc_picEmp.ilCommonPopUp(scwin.callbackCase4, pCode, pName, pClose, null, null, null, null, "T", null, null, null, null, null, pAllSearch, "담당자,담당자번호,담당자명");
      break;
    case 5:
      udc_tranBfFixWrkPl.ilCommonPopUp(scwin.callbackCase5, ed_tranBfFixWrkPlCd.getValue().trim(), txt_tranBfFixWrkPlNm.getValue(), pAllSearch, null, null, null, null, scwin.txt_checkOfficePopup, null);
      break;
    case 6:
      udc_tranAfFixWrkPl.ilCommonPopUp(scwin.callbackCase6, ed_tranAfFixWrkPlCd.getValue().trim(), txt_tranAfFixWrkPlNm.getValue(), pAllSearch, null, null, null, null, scwin.txt_checkOfficePopup, null);
      break;
    case 7:
      udc_clnt.ilCommonPopUp(scwin.callbackCase7, ed_clntNo.getValue().trim(), txt_clntNm.getValue(), pAllSearch, null, null, null, null, null, null);
      break;
  }
};
scwin.callbackCase1 = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_owner, txt_owner);
};
scwin.callbackCase2 = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_tranBfOfc, txt_tranBfOfc, [scwin.txt_checkOfficePopup]);
  if (rtnList != null && rtnList.length > 2) {
    scwin.txt_checkOfficePopup = rtnList[2];
  }
};
scwin.callbackCase3 = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_tranAfOfc, txt_tranAfOfc, [scwin.txt_checkOfficePopup]);
  if (rtnList != null && rtnList.length > 2) {
    scwin.txt_checkOfficePopup = rtnList[2];
  }
};
scwin.callbackCase4 = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_picEmpNo, txt_picEmpNm);
};
scwin.callbackCase5 = async function (firstList) {
  if (firstList != null) {
    ed_tranBfFixWrkPlCd.setValue(firstList[0]);
    txt_tranBfFixWrkPlNm.setValue(firstList[1]);
    scwin.hid_tranBfFixWrkPlNm = firstList[2];
  } else {
    ed_tranBfFixWrkPlCd.setValue("");
    txt_tranBfFixWrkPlNm.setValue("");
    scwin.hid_tranBfFixWrkPlNm = "";
  }
  $c.gus.cfSetReturnValue($p, firstList, ed_tranBfFixWrkPlCd, txt_tranBfFixWrkPlNm, [scwin.hid_tranBfFixWrkPlNm]);
};
scwin.callbackCase6 = async function (firstList) {
  if (firstList != null) {
    ed_tranAfFixWrkPlCd.setValue(firstList[0]);
    txt_tranAfFixWrkPlNm.setValue(firstList[1]);
    scwin.hid_tranAfFixWrkPlNm = firstList[2];
  } else {
    ed_tranAfFixWrkPlCd.setValue("");
    txt_tranAfFixWrkPlNm.setValue("");
    scwin.hid_tranAfFixWrkPlNm = "";
  }
  $c.gus.cfSetReturnValue($p, firstList, ed_tranAfFixWrkPlCd, txt_tranAfFixWrkPlNm, [scwin.hid_tranAfFixWrkPlNm]);
};
scwin.callbackCase7 = async function (firstList) {
  $c.gus.cfSetReturnValue($p, firstList, ed_clntNo, txt_clntNm);
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  scwin.txt_checkOfficePopup = "";
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_checkflag = async function (funCMD) {
  let check_flag = "false";
  let slipNo = "";
  let msgStr = "";
  let bfWrkPlCd = "";
  for (let i = 0; i < ds_Transfer.getRowCount(); i++) {
    if (ds_Transfer.getCellData(i, "selcYn") == "T") {
      check_flag = "true";
      slipNo = ds_Transfer.getCellData(i, "slipNo");
      bfWrkPlCd = ds_Transfer.getCellData(i, "tranBfFixWrkPlCd");
      msgStr = "" + (i + 1) + "번째 행에";
      if (funCMD == "slipCreate" && slipNo.length > 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["" + msgStr + " 생성된 전표가 있습니다. \n전표번호"]);
        return false;
      }
      if (funCMD == "slipCreate" && slipNo.length < 1) {
        if (bfWrkPlCd.substring(0, 1) == "2") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["" + msgStr + " [이관전 작업장]이 '고속'일 경우", "전표생성"]);
          return false;
        }
      }
      if (funCMD == "slipDel" && slipNo.length < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["" + msgStr + " 생성된 전표가 없습니다. \n전표번호"]);
        return false;
      }
    }
  }
  if (check_flag == "true") {
    return true;
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    return false;
  }
};
scwin.f_slipCreate = async function () {
  let tranBfOfc = ed_tranBfOfc.getValue();
  let tranAfOfc = ed_tranAfOfc.getValue();
  if (ica_tranDtFrom.getValue() > ica_tranDtTo.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039, [""]);
    ica_tranDtTo.setFocus();
    return;
  } else if (tranBfOfc.length <= 0 && tranAfOfc.length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, [" 이관전 작업장 또는  이관후 작업장 을 입력 하셔야 합니다. 작업장"]);
    ed_tranBfOfc.setFocus();
    return;
  } else if (ed_tranBfOfc.getValue().length > 0 && ed_tranAfOfc.getValue().length > 0 && ed_tranBfOfc.getValue() == ed_tranAfOfc.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["조회 조건에서 이관전 작업장과 이관후 작업장이 동일 합니다. 작업장"]);
    ed_tranAfOfc.setFocus();
    return;
  }
  if (!(await scwin.f_checkflag('slipCreate'))) return;
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_009.replace("@", "전표"));
  if (confirmResult) {
    for (let i = 0; i < ds_Transfer.getRowCount(); i++) {
      if (ds_Transfer.getCellData(i, "selcYn") == "T") {
        ds_Transfer.setRowStatus(i, "C");
      }
    }
    await $c.sbm.execute($p, sbm_slipCreate);
  }
};
scwin.f_slipDel = async function () {
  if (!(await scwin.f_checkflag('slipDel'))) return;
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_008.replace("@", "전표"));
  if (confirmResult) {
    for (let i = 0; i < ds_Transfer.getRowCount(); i++) {
      if (ds_Transfer.getCellData(i, "selcYn") == "T") {
        ds_Transfer.setRowStatus(i, "C");
      }
    }
    await $c.sbm.execute($p, sbm_slipDelete);
  }
};
scwin.f_OzReportSlip = async function (row) {
  let param = "";
  if (ds_Transfer.getCellData(row, "slipNo") != "") {
    param = param + "," + ds_Transfer.getCellData(row, "slipNo");
  }
  let odiParam = new ODIParam("fi_201_04_02p");
  odiParam.add("slipNo", param.substring(1));
  let formParam = new FormParam();
  let viewerParam = new ViewerParam();
  viewerParam.add("viewer.zoom", "100");
  viewerParam.add("viewer.useprogressbar", "true");
  $c.gus.cfOZPreview($p, "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr", odiParam, viewerParam, formParam);
};
scwin.f_LastJobCloseDate = async function (currentYM) {
  let pReqKind = "CUR";
  let pCloseYM = currentYM;
  let pCloseDD = "00";
  let pWorkNo = "FI01";
  let pMgntNo = "0";
  let pRtnKind = "";
  let pDualChkYN = "";
  let isClose = "";
  isClose = $c.gus.cfJobCloseYN($p, pReqKind, pCloseYM.substring(0, 6), pCloseDD, pWorkNo, pMgntNo, pRtnKind, pDualChkYN);
  if (isClose == "1" || isClose == "DNF") {
    return false;
  } else {
    return true;
  }
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {};
scwin.sbm_retrieveContents_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveContents_submitdone = async function (e) {};
scwin.sbm_slipCreate_submitdone = async function (e) {
  await $c.win.alert($p, "전표 생성 완료");
  scwin.f_Retrieve();
};
scwin.sbm_slipCreate_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_slipDelete_submitdone = async function (e) {
  await $c.win.alert($p, "전표 삭제 완료");
  scwin.f_Retrieve();
};
scwin.sbm_slipDelete_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_Transfer_onrowpositionchange = async function (rowIndex, oldRowIndex) {
  if (rowIndex >= 0) {
    dma_Inspection.set("transferNumber", ds_Transfer.getCellData(rowIndex, "tranNo"));
    await $c.sbm.execute($p, sbm_retrieveContents);
  }
  lc_inClsCd.setValue("1");
  let contentsRow = ds_TransferContents.getRowPosition();
  if (contentsRow >= 0) {
    lc_inClsCd.setValue(ds_TransferContents.getCellData(contentsRow, "inClsCd"));
  }
  ed_clntNo.setValue(ds_Transfer.getCellData(ds_Transfer.getRowPosition(), "clntNo"));
  $c.gus.cfDisableObjects($p, [ed_clntNo]);
};
scwin.gr_Transfer_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  if (columnId == "slipNo" && ds_Transfer.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_Transfer.getCellData(rowIndex, "slipNo"));
  }
};
scwin.gr_Transfer_onheaderclick = async function (columnIndex, columnId) {
  if (columnId == "selcYn") {
    let allChecked = true;
    for (let i = 0; i < ds_Transfer.getRowCount(); i++) {
      if (ds_Transfer.getCellData(i, "selcYn") != "T") {
        allChecked = false;
        break;
      }
    }
    let newVal = allChecked ? "F" : "T";
    for (let i = 0; i < ds_Transfer.getRowCount(); i++) {
      ds_Transfer.setCellData(i, "selcYn", newVal);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  $c.gus.cfDisableObjects($p, [imgPicEmp00, imgPicEmp01, imgPicEmp02, imgPicEmp03, imgPicEmp04]);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.lc_inClsCd_onchange = async function (e) {
  let check = lc_inClsCd.getValue();
  if (check == "3") {
    $c.gus.cfEnableObjects($p, [ed_clntNo]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_clntNo]);
    ed_clntNo.setValue("000000");
  }
};
scwin.ds_Transfer_onloadcompleted = async function (e) {
  scwin.booleanCheck = "false";
  gr_TransferContents.setReadOnly("grid", true);
  $c.gus.cfDisableObjects($p, [ica_tranDt, ed_picEmpNo, ed_tranBfFixWrkPlCd, ed_tranAfFixWrkPlCd, lc_inClsCd, ed_clntNo]);
  $c.gus.cfDisableBtn($p, [bSave]);
  $c.gus.cfEnableBtnOnly($p, [bCreate]);
  let rowCnt = ds_Transfer.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, [""]);
    ds_TransferContents.removeAll();
    $c.gus.cfDisableBtnOnly($p, scwin.btnList);
  } else {
    dma_Inspection.set("transferNumber", ds_Transfer.getCellData(0, "tranNo"));
    await $c.sbm.execute($p, sbm_retrieveContents);
    let contRow = ds_TransferContents.getRowCount();
    if (contRow > 0) {
      lc_inClsCd.setValue(ds_TransferContents.getCellData(contRow - 1, "inClsCd"));
      ed_clntNo.setValue(ds_Transfer.getCellData(ds_Transfer.getRowPosition(), "clntNo"));
      $c.gus.cfDisableObjects($p, [ed_clntNo]);
    }
    let bfWrkPlCd = ed_tranBfOfc.getValue();
    if (bfWrkPlCd.substring(0, 1) == "2") {
      $c.gus.cfDisableBtnOnly($p, scwin.btnList);
      // TODO: gr_Transfer.ColumnProp('selcYn','Edit') = "None" - 그리드 컬럼 동적 편집 제어
      // TODO: gr_Transfer.ColumnProp('selcYn','HeadCheckShow') = "None" - 헤더 체크박스 숨김
    } else {
      $c.gus.cfEnableBtnOnly($p, scwin.btnList);
      // TODO: gr_Transfer.ColumnProp('selcYn','Edit') = "True" - 그리드 컬럼 동적 편집 제어
      // TODO: gr_Transfer.ColumnProp('selcYn','HeadCheckShow') = "True" - 헤더 체크박스 표시
    }
  }
  // TODO: $c.gus.cfShowTotalRows(totalRowsContents, rowCnt) - 총건수 표시
};
scwin.ds_TransferContents_onloadcompleted = async function (e) {
  let rowCnt = ds_TransferContents.getRowCount();
  // TODO: $c.gus.cfShowTotalRows(totalRowsChart, rowCnt) - 총건수 표시
  scwin.booleanCheck = "false";
  $c.gus.cfDisableObjects($p, [ica_tranDt, ed_picEmpNo, ed_tranBfFixWrkPlCd, ed_tranAfFixWrkPlCd, lc_inClsCd, ed_clntNo]);
  $c.gus.cfDisableBtn($p, [bSave]);
  $c.gus.cfEnableBtnOnly($p, [bCreate]);
};
scwin.ed_owner_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_owner, txt_owner, 1);
};
scwin.ed_picEmpNo_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_picEmpNo, txt_picEmpNm, 4);
};
scwin.ed_tranBfOfc_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_tranBfOfc, txt_tranBfOfc, 2);
};
scwin.ed_tranAfOfc_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_tranAfOfc, txt_tranAfOfc, 3);
};
scwin.ed_tranBfFixWrkPlCd_onblur = async function (e) {
  if ($c.gus.cfCanOpenPopup($p, ed_tranBfFixWrkPlCd, txt_tranBfFixWrkPlNm)) {
    ds_TransferContents.removeAll();
  }
  scwin.f_chkOpenCommonPopUp(ed_tranBfFixWrkPlCd, txt_tranBfFixWrkPlNm, 5);
};
scwin.ed_tranAfFixWrkPlCd_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_tranAfFixWrkPlCd, txt_tranAfFixWrkPlNm, 6);
};
scwin.ed_clntNo_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 7);
};
scwin.gr_TransferContents_oneditend = async function (rowIndex, columnId, oldValue, newValue) {
  if (columnId == "partCd") {
    let partCdValue = ds_TransferContents.getCellData(rowIndex, "partCd").trim();
    let par1 = ed_tranBfFixWrkPlCd.getValue().trim();
    let par2 = lc_inClsCd.getValue();
    let par3 = "";
    if (par1.length <= 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["이관 전 작업장"]);
      ds_TransferContents.setCellData(rowIndex, "partCd", "");
      ed_tranBfFixWrkPlCd.setFocus();
      return;
    }
    if (par2 <= 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["입고구분코드"]);
      ds_TransferContents.setCellData(rowIndex, "partCd", "");
      lc_inClsCd.setFocus();
      return;
    }
    if (par2 == 3) {
      par3 = ed_clntNo.getValue().trim();
    } else {
      par3 = "000000";
    }
    let clntNo = ed_clntNo.getValue();
    if (par2 == "3") {
      if (clntNo.length <= 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["입고 구분이 선입고일 경우 거래처를 입력하셔야 합니다. 거래처"]);
        return;
      }
    }
    if (partCdValue != oldValue) {
      udc_comCode_Grid.ilCommonPopUp(function (firstList) {
        ds_TransferContents.setCellData(rowIndex, "inClsCd", par2);
        if (firstList != null) {
          ds_TransferContents.setCellData(rowIndex, "partCd", firstList[2]);
          ds_TransferContents.setCellData(rowIndex, "partNm", firstList[3]);
          ds_TransferContents.setCellData(rowIndex, "partUnitCd", firstList[5]);
          ds_TransferContents.setCellData(rowIndex, "eqModelNm", firstList[8]);
          ds_TransferContents.setCellData(rowIndex, "stockQty", firstList[4]);
          ds_TransferContents.setCellData(rowIndex, "tranUpr", firstList[6]);
          ds_TransferContents.setCellData(rowIndex, "stockAmt", firstList[7]);
        } else {
          ds_TransferContents.setCellData(rowIndex, "partCd", "");
          ds_TransferContents.setCellData(rowIndex, "partNm", "");
          ds_TransferContents.setCellData(rowIndex, "partUnitCd", "");
          ds_TransferContents.setCellData(rowIndex, "stockQty", "");
          ds_TransferContents.setCellData(rowIndex, "tranUpr", "");
          ds_TransferContents.setCellData(rowIndex, "stockAmt", "");
          ds_TransferContents.setCellData(rowIndex, "eqModelNm", "");
        }
      }, ds_TransferContents.getCellData(rowIndex, "partCd"), "", "T", null, null, null, null, "" + par1 + "," + par2 + "," + par3 + "", null);
    }
  }
  if (columnId == "tranQty") {
    let tranQtyValue = ds_TransferContents.getCellData(rowIndex, "tranQty");
    let orgQty = ds_TransferContents.getCellData(rowIndex, "stockQty");
    if (tranQtyValue != oldValue) {
      if (Number(tranQtyValue) > Number(orgQty)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["이관수량", "재고량"]);
        ds_TransferContents.setCellData(rowIndex, "tranQty", "");
      } else {
        let check = ds_TransferContents.getCellData(rowIndex, "tranUpr");
        let total = Number(check) * Number(tranQtyValue);
        ds_TransferContents.setCellData(rowIndex, "tranAmt", total);
        let masterRow = ds_Transfer.getRowPosition();
        ds_Transfer.setCellData(masterRow, "tranAmt", total);
      }
    }
  }
};
scwin.gr_TransferContents_ontextimageclick = async function (rowIndex, columnIndex, columnId) {
  let partCdValue = ds_TransferContents.getCellData(rowIndex, "partCd").trim();
  if (columnId == "partCd") {
    let par1 = ed_tranBfFixWrkPlCd.getValue().trim();
    let par2 = lc_inClsCd.getValue();
    let par3 = "";
    if (par1.length <= 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["이관 전 작업장"]);
      ed_tranBfFixWrkPlCd.setFocus();
      return;
    }
    if (par2 <= 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["입고구분코드"]);
      lc_inClsCd.setFocus();
      return;
    }
    if (par2 == 3) {
      par3 = ed_clntNo.getValue().trim();
    } else {
      par3 = "000000";
    }
    let clntNo = ed_clntNo.getValue();
    if (par2 == "3") {
      if (clntNo.length <= 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["입고 구분이 선입고일 경우 거래처를 입력하셔야 합니다. 거래처"]);
        return;
      }
    }
    udc_comCode_Grid.ilCommonPopUp(function (firstList) {
      ds_TransferContents.setCellData(rowIndex, "inClsCd", par2);
      if (firstList == null || partCdValue == ds_TransferContents.getCellData(rowIndex, "partCd")) {
        if (firstList != null) {
          ds_TransferContents.setCellData(rowIndex, "partCd", firstList[2]);
          ds_TransferContents.setCellData(rowIndex, "partNm", firstList[3]);
          ds_TransferContents.setCellData(rowIndex, "partUnitCd", firstList[5]);
          ds_TransferContents.setCellData(rowIndex, "stockQty", firstList[4]);
          ds_TransferContents.setCellData(rowIndex, "tranUpr", firstList[6]);
          ds_TransferContents.setCellData(rowIndex, "stockAmt", firstList[7]);
          ds_TransferContents.setCellData(rowIndex, "eqModelNm", firstList[8]);
        }
      } else {
        ds_TransferContents.setCellData(rowIndex, "partCd", "");
        ds_TransferContents.setCellData(rowIndex, "partNm", "");
        ds_TransferContents.setCellData(rowIndex, "partUnitCd", "");
        ds_TransferContents.setCellData(rowIndex, "stockQty", "");
        ds_TransferContents.setCellData(rowIndex, "tranUpr", "");
        ds_TransferContents.setCellData(rowIndex, "stockAmt", "");
        ds_TransferContents.setCellData(rowIndex, "eqModelNm", "");
      }
    }, ds_TransferContents.getCellData(rowIndex, "partCd"), "", "T", null, null, null, null, "" + par1 + "," + par2 + "," + par3 + "", null);
  }
};
scwin.f_addRow = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_TransferContents]);
  if (chk) {
    ds_TransferContents.insertRow(ds_TransferContents.getRowCount());
  }
};
scwin.f_deleteRow = function () {
  let pos = ds_TransferContents.getRowPosition();
  if (pos >= 0) {
    ds_TransferContents.removeRow(pos);
  }
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.bSlipCreate_onclick = function (e) {
  scwin.f_slipCreate();
};
scwin.bSlipDel_onclick = function (e) {
  scwin.f_slipDel();
};
scwin.bCreate_onclick = function (e) {
  scwin.f_Create();
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이관일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_tranDt',refEdDt:'',edFromId:'ica_tranDtFrom',edToId:'ica_tranDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_owner',codeId:'ed_owner',nameId:'txt_owner',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이관전 작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_tranBfOfc',popupID:'',selectID:'',codeId:'ed_tranBfOfc',validTitle:'',nameId:'txt_tranBfOfc',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이관후 작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_tranAfOfc',codeId:'ed_tranAfOfc',nameId:'txt_tranAfOfc',popupID:'',selectID:'',style:'',validTitle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품이관 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Transfer',focusMode:'row',id:'gr_Transfer',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selcYn',inputType:'checkbox',removeBorderStyle:'false',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tranNo',inputType:'text',removeBorderStyle:'false',value:'이관번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tranPicNm',inputType:'text',removeBorderStyle:'false',value:'담당자',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tranAmt',inputType:'text',removeBorderStyle:'false',value:'이관</br>총금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tranDt',inputType:'text',style:'',value:'이관일자',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tranBfFixWrkPlCd',inputType:'text',style:'',value:'이관전</br>작업장',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranBfFixWrkPlNm',value:'이관전</br>작업장명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acctBdeptCd',value:'이관전</br>귀속부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfFixWrkPlCd',value:'이관후</br>작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfFixWrkPlNm',value:'이관후</br>작업장명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acctAdeptCd',value:'이관후</br>귀속부서코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selcYn',inputType:'checkbox',removeBorderStyle:'false',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tranNo',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tranPicNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tranAmt',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',textAlign:'center',value:'',width:'100',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tranDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tranBfFixWrkPlCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranBfFixWrkPlNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acctBdeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfFixWrkPlCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfFixWrkPlNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acctAdeptCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이관일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_tranDt',style:'',ref:'data:ds_Transfer.tranDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_picEmp',codeId:'ed_picEmpNo',nameId:'txt_picEmpNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이관 전 작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_tranBfFixWrkPl',codeId:'ed_tranBfFixWrkPlCd',nameId:'txt_tranBfFixWrkPlNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이관 후 작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_tranAfFixWrkPl',codeId:'ed_tranAfFixWrkPlCd',nameId:'txt_tranAfFixWrkPlNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고구분코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'부품이관 상세목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_TransferContents',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_TransferContents',visibleRowNum:'10',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'partCd',value:'부품코드',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'partNm',value:'부품명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'partUnitCd',value:'단위',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'eqModelNm',value:'장비모델명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty',value:'재고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranQty',value:'이관수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranUpr',value:'이관단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAmt',value:'이관금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAcctCd',value:'입고계정',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'textImage',id:'partCd',blockSelect:'false',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'partNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'partUnitCd',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'eqModelNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'stockQty',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranQty',value:'',displayMode:'label',allowChar:'0-9',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranUpr',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAmt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAcctCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bSlipCreate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSlipDel',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bCreate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})