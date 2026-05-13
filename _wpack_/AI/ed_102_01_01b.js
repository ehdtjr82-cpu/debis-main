/*amd /AI/ed_102_01_01b.xml 55015 d31bde64be4d1dd5adbfa014a6625d5ce0f7a006491ac66aa4edb34f10c2bb5f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mrnno',name:'MRN No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mdno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntno',name:'Container No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elno',name:'송장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'CONSOL번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportModify',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbun',name:'정정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsdt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custom',name:'세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'세관과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'UserID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cscd1',name:'세관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cscd2',name:'세관과명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mnfgb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'part',name:'파트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpnm',name:'담당자명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportUnitModify',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'MD NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modcd',name:'정정항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mody1',name:'정정내역1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mody2',name:'정정내역2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mody3',name:'정정내역3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mody4',name:'정정내역4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'UserID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportStatementModify',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'MD NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elno',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbun',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldElno',name:'OLD수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'UserID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfMody1',name:'bfMody1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfMody2',name:'bfMody2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfMody3',name:'bfMody3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfMody4',name:'bfMody4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportContainerModify',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'MD NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntno',name:'CONTAINER NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbun',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'TEXT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldCntno',name:'OLD CONTAINER NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modcd',name:'컨테이너정정항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'UserID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportStatementModifyComboList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'elno',name:'수출신고번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportContainerModifyComboList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntno',name:'CONTAINER NO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaExportStatementModifyCheckNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flag',name:'flag',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SendEDI'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnno',name:'적하목록신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'전송화면명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediliner',name:'EDI선사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dummy',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seedi.seed.RetrieveSeaExportModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportModify","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_SeaExportModify","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaExportModifyList',action:'/il.seedi.seed.RetrieveSeaExportModifyListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportUnitModify","key":"OUT_DS1"},{"id":"ds_SeaExportStatementModify","key":"OUT_DS2"},{"id":"ds_SeaExportContainerModify","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_SeaExportUnitModify","key":"OUT_DS1"},{"id":"ds_SeaExportStatementModify","key":"OUT_DS2"},{"id":"ds_SeaExportContainerModify","key":"OUT_DS3"}]','ev:submiterror':'scwin.sbm_SeaExportModifyList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaExportUnitModifyList',action:'/il.seedi.seed.RetrieveSeaExportUnitModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportUnitModify","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_SeaExportUnitModify","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_SeaExportUnitModifyList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaExportStatementModifyList',action:'/il.seedi.seed.RetrieveSeaExportStatementModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportStatementModify","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_SeaExportStatementModify","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_SeaExportStatementModifyList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaExportContainerModifyList',action:'/il.seedi.seed.RetrieveSeaExportContainerModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportContainerModify","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_SeaExportContainerModify","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_SeaExportContainerModifyList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaExportModifyComboList',action:'/il.seedi.seed.RetrieveSeaExportModifyListComboListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportStatementModifyComboList","key":"OUT_DS1"},{"id":"ds_SeaExportContainerModifyComboList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_SeaExportStatementModifyComboList","key":"OUT_DS1"},{"id":"ds_SeaExportContainerModifyComboList","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_SeaExportModifyComboList_submitdone','ev:submiterror':'scwin.sbm_SeaExportModifyComboList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_CheckNo',action:'/il.seedi.seed.RetrieveSeaExportModifyCheckNoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaExportStatementModifyCheckNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_SeaExportStatementModifyCheckNo","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_CheckNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seedi.seed.SaveSeaExportModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_SeaExportModify","key":"IN_DS1"},{"id":"ds_SeaExportUnitModify","key":"IN_DS2"},{"id":"ds_SeaExportStatementModify","key":"IN_DS3"},{"id":"ds_SeaExportContainerModify","key":"IN_DS4"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SendEDI',action:'/il.seedi.seed.SeaSendEDICMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_SendEDI","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_SendEDI_submitdone','ev:submiterror':'scwin.sbm_SendEDI_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.actionFlag = "";
scwin.retrieveSubGrid = false;
scwin.retrieveSubGrid2 = false;
scwin.flagSatus = "";
scwin.statmentCnt = 0;
scwin.containerCnt = 0;
scwin.hid_kcomcd = "DBEX";
scwin.hid_mhno = "";
scwin.hid_mblno = "";
scwin.hid_mrnseq = "";
scwin.txt_countRow = "";
scwin.userId = "";
scwin.vCurDate = "";
scwin.strPreDate = "";
scwin.onpageload = function () {
  scwin.userId = $c.ses.getUserId();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
  ds_Search.set("kcomcd", scwin.hid_kcomcd);
  scwin.f_Set("INIT");
  cnd_ed_mrnno.setFocus();
  $c.gus.cfDisableObjects($p, [txt_inpid, txt_inpnm]);
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [txt_inpid, txt_inpnm]);
};
scwin.f_Set = function (gubun) {
  scwin.flagSatus = gubun;
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save, b_Delete]);
      $c.gus.cfEnableBtnOnly($p, [b_Create]);
      $c.gus.cfDisableBtnOnly($p, [pu_portRate]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl2, btn_undoMarkIntnl2]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl3, btn_undoMarkIntnl3]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Delete]);
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save]);
      if (ed_mdno.getValue() == "") {
        $c.gus.cfDisableBtnOnly($p, [pu_portRate]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [pu_portRate]);
      }
      gr_SeaExportUnitModify.setReadOnly("grid", true);
      gr_SeaExportStatementModify.setReadOnly("grid", true);
      gr_SeaExportContainerModify.setReadOnly("grid", true);
      break;
    case "DELETE":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [pu_portRate]);
      $c.gus.cfDisableBtnOnly($p, [b_Save, b_Create, b_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [b_Delete]);
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [pu_portRate]);
      $c.gus.cfDisableBtnOnly($p, [b_Create, b_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [b_Cancel, b_Save]);
      gr_SeaExportUnitModify.setReadOnly("grid", true);
      gr_SeaExportStatementModify.setReadOnly("grid", true);
      gr_SeaExportContainerModify.setReadOnly("grid", true);
      break;
    case "CREATEMORE":
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [pu_portRate]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl2, btn_undoMarkIntnl2]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl3, btn_undoMarkIntnl3]);
      gr_SeaExportUnitModify.setReadOnly("grid", false);
      gr_SeaExportStatementModify.setReadOnly("grid", false);
      gr_SeaExportContainerModify.setReadOnly("grid", false);
      break;
  }
};
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [img_PopUp1, img_PopUp2]);
};
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [img_PopUp1, img_PopUp2, txt_cscd1, txt_cscd2]);
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case 1:
      udc_custom.ilCommonPopUp(scwin.callbackCustom, ed_custom.getValue().trim(), '', pWinCloseTF, '2', '관할세관 Code, 관할세관 Name', '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, '관할세관 Search,관할세관 Code, 관할세관 Name', pNoDataCloseTF);
      break;
    case 2:
      udc_dept.ilCommonPopUp(scwin.callbackDept, ed_dept.getValue().trim(), '', pWinCloseTF, '2', '세관과 Code, 세관과 Name', '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, '세관과 Search,세관과 Code, 세관과 Name', pNoDataCloseTF);
      break;
  }
};
scwin.callbackCustom = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custom, txt_cscd1);
};
scwin.callbackDept = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_cscd2);
};
scwin.f_SetDefaultKeyValue = async function (ds) {
  if (scwin.hid_mhno == "") {
    await $c.win.alert($p, '사용할 수 있는 House B/L 번호를 입력 하세요.');
    ed_hblno.setFocus();
    return;
  }
  await scwin.f_RetrieveComboList();
  if (scwin.hid_mhno.length > 0) {
    let newIdx = ds.insertRow();
    ds.setCellData(newIdx, "kcomcd", scwin.hid_kcomcd);
    ds.setCellData(newIdx, "updid", scwin.userId);
    ds.setCellData(newIdx, "hblno", ed_hblno.getValue());
    ds.setCellData(newIdx, "mhno", scwin.hid_mhno);
  }
};
scwin.f_GridSetValue = function (ds) {
  let ds1 = ds_SeaExportModify;
  let row = ds.getRowPosition();
  let row1 = ds1.getRowPosition();
  ds.setCellData(row, "kcomcd", scwin.hid_kcomcd);
  ds.setCellData(row, "mdno", ds1.getCellData(row1, "mdno"));
  ds.setCellData(row, "hblno", ds1.getCellData(row1, "hblno"));
  ds.setCellData(row, "mhno", scwin.hid_mhno);
};
scwin.f_Retrieve = async function () {
  if (cnd_ed_hblno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    cnd_ed_mrnno.setFocus();
    return false;
  }
  scwin.actionFlag = "RETRIEVE";
  ds_Search.set("hblno", ds_Search.get("hblno").trim());
  ds_Search.set("kcomcd", scwin.hid_kcomcd);
  ds_Search.set("iogb", "E");
  await $c.sbm.execute($p, sbm_retrieve);
  if (ds_SeaExportModify.getRowCount() > 0) {
    scwin.f_Set("DELETE");
    if (lc_gbun.getSelectedIndex() == 0) {
      scwin.retrieveSubGrid = true;
      scwin.retrieveSubGrid2 = true;
      $c.gus.cfEnableObjects($p, [tr_tab_center1]);
      scwin.f_Set("RETRIEVE");
    }
  } else {
    scwin.f_Set("RETRIEVE");
    scwin.f_ClearData();
  }
  scwin.f_Set("RETRIEVE");
};
scwin.f_RetrieveSeaExportUnitModifyList = async function () {
  let ds2 = ds_SeaExportModify;
  let row2 = ds2.getRowPosition();
  ds_Search.set("hblno", ds2.getCellData(row2, "hblno"));
  ds_Search.set("kcomcd", ds2.getCellData(row2, "kcomcd"));
  ds_Search.set("mdno", ds2.getCellData(row2, "mdno"));
  await $c.sbm.execute($p, sbm_SeaExportUnitModifyList);
};
scwin.f_RetrieveSeaExportContainerModifyList = async function () {
  let ds2 = ds_SeaExportModify;
  let row2 = ds2.getRowPosition();
  ds_Search.set("kcomcd", ds2.getCellData(row2, "kcomcd"));
  ds_Search.set("hblno", ds2.getCellData(row2, "hblno"));
  ds_Search.set("mdno", ds2.getCellData(row2, "mdno"));
  ds_Search.set("hblno", ds2.getCellData(row2, "hblno"));
  ds_Search.set("mhno", ds2.getCellData(row2, "mhno"));
  await $c.sbm.execute($p, sbm_SeaExportContainerModifyList);
};
scwin.f_RetrieveComboList = async function () {
  let ds2 = ds_SeaExportModify;
  let row2 = ds2.getRowPosition();
  ds_Search.set("kcomcd", scwin.hid_kcomcd);
  ds_Search.set("hblno", ds2.getCellData(row2, "hblno"));
  ds_Search.set("mrnno", ds2.getCellData(row2, "mrn"));
  await $c.sbm.execute($p, sbm_SeaExportModifyComboList);
};
scwin.f_RetrieveExportList = async function () {
  let ds2 = ds_SeaExportModify;
  let row2 = ds2.getRowPosition();
  ds_Search.set("mhno", ds2.getCellData(row2, "mhno"));
  ds_Search.set("hblno", ds2.getCellData(row2, "hblno"));
  ds_Search.set("mdno", ds2.getCellData(row2, "mdno"));
  ds_Search.set("kcomcd", scwin.hid_kcomcd);
  await $c.sbm.execute($p, sbm_SeaExportStatementModifyList);
};
scwin.f_RetrieveContainerList = function () {
  let ds2 = ds_SeaExportModify;
  let row2 = ds2.getRowPosition();
  ds_Search.set("mhno", ds2.getCellData(row2, "mhno"));
  ds_Search.set("hblno", ds2.getCellData(row2, "hblno"));
  ds_Search.set("mdno", ds2.getCellData(row2, "mdno"));
  ds_Search.set("kcomcd", scwin.hid_kcomcd);
};
scwin.f_CheckNo = async function () {
  let ds = ds_SeaExportStatementModifyCheckNo;
  if (ed_hblno.getValue() == "") {
    await $c.win.alert($p, "House B/L No를 입력하십시오");
    return false;
  }
  ds_Search.set("kcomcd", scwin.hid_kcomcd);
  ds_Search.set("mrnno", "");
  ds_Search.set("hblno", ed_hblno.getValue());
  await $c.sbm.execute($p, sbm_CheckNo);
  if (ds.getRowCount() < 1) {
    await $c.win.alert($p, '존재하지 않는 House b/l No 입니다.');
    ed_hblno.setFocus();
    return false;
  } else {
    scwin.hid_mhno = ds.getCellData(0, "mhno");
    scwin.hid_mblno = ds.getCellData(0, "mblno");
    ed_etd.setValue(ds.getCellData(0, "etd"));
    return true;
  }
};
scwin.f_Cancel = function () {
  cnd_ed_mrnno.setFocus();
  $c.gus.cfDisableObjects($p, [tr_tab_center1]);
  ds_SeaExportModify.undoAll();
  scwin.f_ClearData();
  scwin.f_Set("INIT");
};
scwin.f_Create = function () {
  let cnt = ds_SeaExportModify.getRowCount();
  let etd = "";
  let mrnNo = "";
  let hblNo = "";
  let custom = "";
  let customNm = "";
  let dept = "";
  let deptNm = "";
  if (cnt > 0) {
    etd = ed_etd.getValue();
    mrnNo = ed_mrn.getValue();
    hblNo = ed_hblno.getValue();
    custom = ed_custom.getValue();
    customNm = txt_cscd1.getValue();
    dept = ed_dept.getValue();
    deptNm = txt_cscd2.getValue();
  }
  scwin.actionFlag = "CREATE";
  $c.gus.cfDisableObjects($p, [tr_tab_center1]);
  $c.gus.cfDisableObjects($p, [txt_inpid, txt_inpnm]);
  scwin.f_selectTabMenu(0);
  ds_SeaExportUnitModify.removeAll();
  ds_SeaExportStatementModify.removeAll();
  ds_SeaExportContainerModify.removeAll();
  ds_SeaExportModify.removeAll();
  ds_SeaExportModify.insertRow();
  if (cnt > 0) {
    ds_SeaExportModify.setCellData(0, "etd", etd);
    ds_SeaExportModify.setCellData(0, "mrn", mrnNo);
    ds_SeaExportModify.setCellData(0, "hblno", hblNo);
    ds_SeaExportModify.setCellData(0, "custom", custom);
    ds_SeaExportModify.setCellData(0, "cscd1", customNm);
    ds_SeaExportModify.setCellData(0, "dept", dept);
    ds_SeaExportModify.setCellData(0, "cscd2", deptNm);
  }
  scwin.f_Set("CREATE");
};
scwin.f_Save = async function () {
  if (await scwin.f_CheckNo()) {
    let row = ds_SeaExportModify.getRowPosition();
    ds_SeaExportModify.setCellData(row, "kcomcd", scwin.hid_kcomcd);
    ds_SeaExportModify.setCellData(row, "mhno", scwin.hid_mhno);
    ds_SeaExportModify.setCellData(row, "mblno", scwin.hid_mblno);
    if (lc_gbun.getSelectedIndex() == 1) {
      ds_SeaExportModify.setCellData(row, "part", "3");
    } else {
      ds_SeaExportModify.setCellData(row, "part", "0");
    }
    ds_SeaExportModify.setCellData(row, "mnfgb", "E");
    await $c.sbm.execute($p, sbm_save);
    ds_Search.set("kcomcd", scwin.hid_kcomcd);
    ds_Search.set("hblno", ed_hblno.getValue());
    ds_Search.set("mrnno", ed_mrn.getValue());
    await scwin.f_Retrieve();
  }
};
scwin.f_SendEDI = async function () {
  if (scwin.flagSatus == "RETRIEVE") {
    if (await scwin.f_CheckNo()) {
      let newIdx = ds_SendEDI.insertRow();
      ds_SendEDI.setCellData(newIdx, "kcomcd", scwin.hid_kcomcd);
      ds_SendEDI.setCellData(newIdx, "mdno", ds_SeaExportModify.getCellData(ds_SeaExportModify.getRowPosition(), "mdno"));
      ds_SendEDI.setCellData(newIdx, "gubun", "SeaCargoManifestUnit");
      await $c.sbm.execute($p, sbm_SendEDI);
      ds_SendEDI.removeAll();
    }
  } else {
    await $c.win.alert($p, "데이터를 저장 후 전송 해주십시오.");
  }
};
scwin.f_ReqFieldChk = async function () {
  if (ed_mrn.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["MRN No"]);
    ed_mrn.setFocus();
    return false;
  }
  if (ed_hblno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No"]);
    ed_hblno.setFocus();
    return false;
  }
  let chk1 = await $c.gus.cfValidate($p, [tb_headerMandantory]);
  if (chk1 == false) {
    return false;
  }
  let chk2 = await $c.gus.cfValidate($p, [gr_SeaExportUnitModify]);
  if (chk2 == false) {
    return false;
  }
  let chk3 = await $c.gus.cfValidate($p, [gr_SeaExportStatementModify]);
  if (chk3 == false) {
    return false;
  }
  let chk4 = await $c.gus.cfValidate($p, [gr_SeaExportContainerModify]);
  if (chk4 == false) {
    return false;
  }
  return true;
};
scwin.f_Delete = async function () {
  if (ds_SeaExportModify.getCellData(ds_SeaExportModify.getRowPosition(), "tsdt") != "") {
    await $c.win.alert($p, "정정내역이 전송완료되었습니다.");
    return;
  }
  scwin.actionFlag = "Delete";
  if (lc_gbun.getSelectedIndex() == 0) {
    ds_SeaExportModify.setRowStatus(ds_SeaExportModify.getRowPosition(), "U");
    if (ds_SeaExportUnitModify.getRowCount() > 0) {
      for (let i = 0; i < ds_SeaExportUnitModify.getRowCount(); i++) {
        ds_SeaExportUnitModify.setRowStatus(i, "U");
      }
    }
    if (ds_SeaExportStatementModify.getRowCount() > 0) {
      for (let i = 0; i < ds_SeaExportStatementModify.getRowCount(); i++) {
        ds_SeaExportStatementModify.setRowStatus(i, "U");
      }
    }
    if (ds_SeaExportContainerModify.getRowCount() > 0) {
      for (let i = 0; i < ds_SeaExportContainerModify.getRowCount(); i++) {
        ds_SeaExportContainerModify.setRowStatus(i, "U");
      }
    }
  } else {
    ds_SeaExportModify.setRowStatus(ds_SeaExportModify.getRowPosition(), "U");
  }
  await $c.sbm.execute($p, sbm_save);
  await scwin.f_Retrieve();
};
scwin.f_grdHeight = function (objGrdId, size) {
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
scwin.f_downExcelSheet = async function () {
  let cntRow = scwin.txt_countRow;
  if (cntRow != "0") {
    let cfrm = await $c.win.confirm($p, "Booking 검색 List를 EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_invoiceList, {
        fileName: "gr_invoiceList.xlsx",
        sheetName: "gr_invoiceList"
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_addRow = function (ds) {
  ds.insertRow();
};
scwin.f_DeleteRow = function (ds) {
  ds.removeRow(ds.getRowPosition());
};
scwin.f_undoRow = function (ds) {
  ds.undoRow(ds.getRowPosition());
};
scwin.f_initSetTab = function () {
  $c.gus.cfEnableObjects($p, [tr_tab_center0]);
  $c.gus.cfDisableObjects($p, [tr_tab_center1]);
  $c.gus.cfViewTab($p, 0);
};
scwin.f_ClearData = function () {
  ds_SeaExportUnitModify.removeAll();
  ds_SeaExportStatementModify.removeAll();
  ds_SeaExportContainerModify.removeAll();
};
scwin.f_selectTabMenu = async function (idx) {
  switch (idx) {
    case 0:
      $c.gus.cfViewTab($p, idx);
      break;
    case 1:
      if (lc_gbun.getSelectedIndex() == 0) {
        $c.gus.cfViewTab($p, idx);
      } else {
        await $c.win.alert($p, '정정구분이 수정 이외 에는 Tab을 선택 할 수 없습니다. ');
      }
      break;
  }
};
scwin.f_EditNone = function (gr, field) {
  gr.setColumnProp(field, "readOnly", true);
};
scwin.f_EditAny = function (gr, field) {
  gr.setColumnProp(field, "readOnly", false);
};
scwin.f_ChkKeyCode = function (ds, row, colid) {
  try {
    let str = ds.getCellData(row, colid);
    let comStr = "";
    let badStr = "";
    for (let i = 0; i < str.length; i++) {
      let chkStr = str.charCodeAt(i);
      if (chkStr >= 33 && chkStr <= 39) {
        badStr += str.charAt(i);
      } else if (chkStr >= 91 && chkStr <= 96) {
        badStr += str.charAt(i);
      } else if (chkStr >= 123 && chkStr <= 126) {
        badStr += str.charAt(i);
      } else if (chkStr == 63) {
        badStr += str.charAt(i);
      } else if (chkStr == 64) {
        badStr += str.charAt(i);
      } else if (chkStr == 43) {
        badStr += str.charAt(i);
      } else if (chkStr == 59) {
        badStr += str.charAt(i);
      } else if (chkStr == 0) {
        badStr += str.charAt(i);
      } else {
        comStr += str.charAt(i);
      }
    }
    ds.setCellData(row, colid, comStr);
  } catch (e) {}
};
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let cdObjVal = cdObj.getValue().trim();
  if (cdObj.modified) {
    if (cdObjVal == "") {
      nmObj.setValue("");
    } else {
      nmObj.setValue("");
      scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
    }
  }
};
scwin.f_CheckDigitl = async function (mrnno) {
  let result = mrnno;
  let ChkCode;
  ChkCode = mrnno.charAt(10);
  try {
    if (mrnno.length != 11) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_005, ["MRN No", "11"]);
      scwin.hid_mrnseq = "";
      return;
    } else {
      result = mrnno.charCodeAt(0) * 3 % 10;
      result += mrnno.charCodeAt(1) * 7 % 10;
      result += mrnno.charCodeAt(2) * 9 % 10;
      result += mrnno.charCodeAt(3) * 3 % 10;
      result += mrnno.charCodeAt(4) * 7 % 10;
      result += mrnno.charCodeAt(5) * 9 % 10;
      result += mrnno.charCodeAt(6) * 3 % 10;
      result += mrnno.charCodeAt(7) * 7 % 10;
      result += mrnno.charCodeAt(8) * 9 % 10;
      result += mrnno.charCodeAt(9) * 3 % 10;
      result = result % 10;
      if (ChkCode != result) {
        if (mrnno.length == 11) {
          scwin.hid_mrnseq = result;
        } else {
          scwin.hid_mrnseq = "";
        }
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["MRN No"]);
        return false;
      }
      scwin.hid_mrnseq = mrnno.substring(0, 10);
      return true;
    }
  } catch (e) {}
};
scwin.f_FieldClear = function () {
  cnd_ed_mrnno.setValue("");
  cnd_ed_hblno.setValue("");
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.pu_portRate_onclick = function (e) {
  scwin.f_SendEDI();
};
scwin.b_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.b_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.b_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.b_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_addRowIntnl_onclick = function (e) {
  scwin.f_SetDefaultKeyValue(ds_SeaExportUnitModify);
};
scwin.btn_undoMarkIntnl_onclick = function (e) {
  scwin.f_undoRow(ds_SeaExportUnitModify);
};
scwin.btn_addRowIntnl2_onclick = function (e) {
  scwin.f_SetDefaultKeyValue(ds_SeaExportStatementModify);
};
scwin.btn_undoMarkIntnl2_onclick = function (e) {
  scwin.f_undoRow(ds_SeaExportStatementModify);
};
scwin.btn_addRowIntnl3_onclick = function (e) {
  scwin.f_SetDefaultKeyValue(ds_SeaExportContainerModify);
};
scwin.btn_undoMarkIntnl3_onclick = function (e) {
  scwin.f_undoRow(ds_SeaExportContainerModify);
};
scwin.btn_deleteRowIntnl_onclick = function (e) {
  scwin.f_DeleteRow(ds_SeaExportUnitModify);
};
scwin.btn_deleteRowIntnl2_onclick = function (e) {
  scwin.f_DeleteRow(ds_SeaExportStatementModify);
};
scwin.btn_deleteRowIntnl3_onclick = function (e) {
  scwin.f_DeleteRow(ds_SeaExportContainerModify);
};
scwin.gr_SeaExportStatementModify_oncloseup = function () {
  let ds = ds_SeaExportStatementModify;
  let gr = gr_SeaExportStatementModify;
  let row = ds.getRowPosition();
  if (ds.getCellData(row, "gbun") == "X") {
    scwin.f_EditAny(gr, "oldElno");
  } else {
    scwin.f_EditNone(gr, "oldElno");
  }
};
scwin.gr_SeaExportContainerModify_oncloseup = function () {
  let ds = ds_SeaExportContainerModify;
  let gr = gr_SeaExportContainerModify;
  let row = ds.getRowPosition();
  if (ds.getCellData(row, "gbun") == "X") {
    scwin.f_EditAny(gr, "oldCntno");
  } else {
    scwin.f_EditNone(gr, "oldCntno");
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.f_ClearData();
  if (lc_gbun.getSelectedIndex() == 1 || lc_gbun.getSelectedIndex() == 2) {
    await scwin.f_RetrieveSeaExportUnitModifyList();
  }
  if (lc_gbun.getSelectedIndex() == 0) {
    await scwin.f_RetrieveExportList();
    scwin.f_RetrieveContainerList();
    await scwin.f_RetrieveSeaExportUnitModifyList();
    await scwin.f_RetrieveSeaExportContainerModifyList();
    scwin.f_Set("RETRIEVE");
    $c.gus.cfEnableObjects($p, [tr_tab_center1]);
  } else {
    $c.gus.cfDisableObjects($p, [tr_tab_center1]);
  }
  if (ed_custom.getValue() != "") {
    scwin.f_PopUp(1, 'T', 'F', 'F');
    scwin.f_PopUp(2, 'T', 'F', 'F');
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SeaExportModifyList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SeaExportUnitModifyList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SeaExportStatementModifyList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SeaExportContainerModifyList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SendEDI_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SendEDI_submitdone = async function (e) {
  await $c.win.alert($p, '성공적으로 전송 했습니다.');
};
scwin.sbm_SeaExportModifyComboList_submitdone = function (e) {
  ed_cntrcnt.setValue(ds_SeaExportContainerModifyComboList.getRowCount());
};
scwin.sbm_SeaExportModifyComboList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_CheckNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  if (scwin.actionFlag == "Save") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
  }
  if (scwin.actionFlag == "Delete") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
  }
};
scwin.gr_SeaExportModify_oncellclick = async function (rowIndex, columnIndex, columnId) {
  scwin.f_ClearData();
  if (lc_gbun.getSelectedIndex() == 1 || lc_gbun.getSelectedIndex() == 2) {
    await scwin.f_RetrieveSeaExportUnitModifyList();
  }
  if (lc_gbun.getSelectedIndex() == 0) {
    await scwin.f_RetrieveExportList();
    scwin.f_RetrieveContainerList();
    await scwin.f_RetrieveSeaExportUnitModifyList();
    await scwin.f_RetrieveSeaExportContainerModifyList();
    scwin.f_Set("RETRIEVE");
    $c.gus.cfEnableObjects($p, [tr_tab_center1]);
  } else {
    $c.gus.cfDisableObjects($p, [tr_tab_center1]);
  }
  if (ed_custom.getValue() != "") {
    scwin.f_PopUp(1, 'T', 'F', 'F');
    scwin.f_PopUp(2, 'T', 'F', 'F');
  }
};
scwin.ed_hblno_onblur = async function (e) {
  if (ed_hblno.getValue().length > 0) {
    await scwin.f_CheckNo();
    return;
  }
};
scwin.ed_mrn_onblur = function (e) {};
scwin.ed_custom_onblur = function (e) {
  scwin.f_BeforePopUpEd(txt_cscd1, ed_custom, 1, "T", "F", "F");
};
scwin.ed_dept_onblur = function (e) {
  scwin.f_BeforePopUpEd(txt_cscd2, ed_dept, 2, "T", "F", "F");
};
scwin.ds_SeaExportModify_oncelldatachange = function (info) {
  scwin.f_ChkKeyCode(ds_SeaExportModify, info.row, info.colId);
};
scwin.ds_SeaExportUnitModify_oncelldatachange = function (info) {
  scwin.f_ChkKeyCode(ds_SeaExportUnitModify, info.row, info.colId);
};
scwin.ds_SeaExportStatementModify_oncelldatachange = function (info) {
  scwin.f_ChkKeyCode(ds_SeaExportStatementModify, info.row, info.colId);
};
scwin.ds_SeaExportContainerModify_oncelldatachange = function (info) {
  scwin.f_ChkKeyCode(ds_SeaExportContainerModify, info.row, info.colId);
};
scwin.lc_gbun_onchange = async function (e) {
  if (scwin.actionFlag == "CREATE") {
    if (ed_mrn.getValue().length < 1) {
      await $c.win.alert($p, 'MRN No를 입력해 주십시오.');
      ed_mrn.setFocus();
      lc_gbun.setSelectedIndex(-1);
      return;
    }
    if (ed_hblno.getValue().length < 1) {
      await $c.win.alert($p, 'House b/l No를 입력해 주십시오.');
      ed_hblno.setFocus();
      lc_gbun.setSelectedIndex(-1);
      return;
    }
    if (lc_gbun.getSelectedIndex() == 0) {
      $c.gus.cfEnableObjects($p, [tr_tab_center0, tr_tab_center1]);
      scwin.f_Set("CREATEMORE");
    } else {
      $c.gus.cfEnableObjects($p, [tr_tab_center0]);
      $c.gus.cfDisableObjects($p, [tr_tab_center1]);
      scwin.f_ClearData();
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/cm/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mrnno',placeholder:'',style:'width:150px;',ref:'data:ds_Search.mrnno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hblno',placeholder:'',style:'width:150px;',ref:'data:ds_Search.hblno'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox '},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',style:'',id:'',class:'wq_tab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs12',label:'Main'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs13',label:'Modify'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content12'},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_SeaExportModify',id:'gr_SeaExportModify',style:'',visibleRowNum:'9',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gbun',inputType:'text',value:'정정구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',value:'House No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',value:'정정신청번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text',inputType:'text',value:'정정사유',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gbun',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text',inputType:'text',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Status ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_status',ref:'data:ds_SeaExportModify.status',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Send Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group10',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_tsdt',style:'',ref:'data:ds_SeaExportModify.tsdt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_tsdt_time',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_etd',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_SeaExportModify.etd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',ref:'data:ds_SeaExportModify.mrn',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hblno',placeholder:'',style:'width:200px;',ref:'data:ds_SeaExportModify.hblno',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정신청번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mdno',placeholder:'',style:'width:300px;',ref:'data:ds_SeaExportModify.mdno'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고세관',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_custom',codeId:'ed_custom',nameId:'txt_cscd1',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고과',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_dept',codeId:'ed_dept',nameId:'txt_cscd2',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_gbun',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_SeaExportModify.gbun',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정사유',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_text',placeholder:'',style:'',ref:'data:ds_SeaExportModify.text',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정 담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_inpid',placeholder:'',style:'width: 80px',ref:'data:ds_SeaExportModify.inpid'}},{T:1,N:'xf:input',A:{class:'',id:'txt_inpnm',placeholder:'',style:'',ref:'data:ds_SeaExportModify.inpnm'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'단일항목수정',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_SeaExportUnitModify',style:'',autoFit:'allColumn',id:'gr_SeaExportUnitModify',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'modcd',value:'정정항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody1',value:'정정사유(수정후 숫자만 입력)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody2',value:'정정사유2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody3',value:'정정사유3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody4',value:'정정사유4',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'select',id:'modcd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'mody4',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content13'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수출신고내역수정 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_SeaExportStatementModify',style:'',autoFit:'allColumn',id:'gr_SeaExportStatementModify',visibleRowNum:'4',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'elno',value:'수출신고번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'gbun',value:'작업구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'oldElno',value:'정정전 신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'text',value:'정정사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'elno',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'elno:elno'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_SeaExportStatementModifyComboList'}]}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'select',id:'gbun',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'번호정정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'X'}]}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'oldElno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'text',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y',EngYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너수정 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_SeaExportContainerModify',id:'gr_SeaExportContainerModify',style:'',visibleRowNum:'8',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntno',inputType:'text',value:'Container No',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gbun',inputType:'text',value:'작업구분',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oldCntno',inputType:'text',value:'정정전 Container',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text',inputType:'text',value:'정정사유',width:'350'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntno',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gbun',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oldCntno',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text',inputType:'text',width:'350',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:' Container CNT',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cntrcnt',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'N',btnDelYn:'Y',style:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'pu_portRate',type:'button',class:'btn link',disabled:'true','ev:onclick':'scwin.pu_portRate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Cancel',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.b_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.b_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Save',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.b_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Delete',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.b_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})