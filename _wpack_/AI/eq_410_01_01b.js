/*amd /AI/eq_410_01_01b.xml 43497 aeb41d011087bd68b8ea86a4e58e51c0e4dbf98da3d0dae63ac63c2f68679375 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partMakerCd',name:'제조사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inAcctCd',name:'입고계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outAcctCd',name:'출고계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq410',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catalPage',name:'카탈로그PAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catalNo',name:'카탈로그번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerCd',name:'부품제조사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'부품제조사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'부품단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partClsCd',name:'부품구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd',name:'입고계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAcctCd',name:'출고계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalCdYn',name:'내부코드여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'circulPartYn',name:'수리순환품여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'circulPartModelCd',name:'수리순환품모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partstdinforeg.RetrievePartsStandardInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq410","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eq410","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.partmgnt.partstdinforeg.RegistPartsStandardInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_eq410","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_circulPartModel',action:'/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveCirculPartModelCdList',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"co_ds_combo2","key":"OUT_DS1"}]',target:'data:json,[{"id":"co_ds_combo2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_circulPartModel_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.savebool = false;
scwin.curDate = "";
scwin.getModelNm = false;
scwin.strCatCd = "";
scwin.ModeState = "false";
scwin.upPartCd = "";
scwin.onpageload = async function () {
  scwin.curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [acb_OutAcctCd]);
  acb_UseYnParam.setValue("1");
  em_partCd.setFocus();
};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "EQ005",
    compID: "acb_CatCdParam,acb_CatCd,gr_eq410:catCd"
  }, {
    grpCd: "EQ029",
    compID: "acb_InAcctCdParam,acb_InAcctCd",
    opt: {
      "range": "1",
      "filter": "1"
    }
  }, {
    grpCd: "EQ029",
    compID: "acb_OutAcctCdParam,acb_OutAcctCd",
    opt: {
      "range": "2",
      "filter": "1"
    }
  }, {
    grpCd: "EQ023",
    compID: "acb_PartUnitCd,gr_eq410:partUnitCd"
  }, {
    grpCd: "EQ024",
    compID: "acb_PartClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableObjects($p, [udc_partMaker, udc_eqModel]);
};
scwin.btn_Retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Init_onclick = async function (e) {
  scwin.f_Create();
};
scwin.btn_Add_onclick = async function (e) {
  scwin.f_Update();
};
scwin.btn_Esc_onclick = async function (e) {
  scwin.f_Cancel();
};
scwin.btn_Sav_onclick = async function (e) {
  scwin.f_Save();
};
scwin.btn_Del_onclick = async function (e) {
  scwin.f_Delete();
};
scwin.f_Retrieve = async function () {
  scwin.getModelNm = false;
  dma_search.set("partCd", em_partCd.getValue());
  dma_search.set("partNm", em_partNm.getValue());
  dma_search.set("eqModelCd", txt_eqModelCdParam.getValue());
  dma_search.set("partMakerCd", txt_partMakerCdParam.getValue());
  dma_search.set("catCd", acb_CatCdParam.getValue());
  dma_search.set("useYn", acb_UseYnParam.getValue());
  dma_search.set("inAcctCd", acb_InAcctCdParam.getValue());
  dma_search.set("outAcctCd", acb_OutAcctCdParam.getValue());
  btn_Esc.setDisabled(true);
  await $c.sbm.execute($p, sbm_retrieve);
  scwin.ModeState = "false";
};
scwin.f_Create = async function () {
  scwin.ModeState = "insOnLoad";
  ds_eq410.insertRow();
  chb_InternalCdYn.setValue("");
  chb_UseYn.setValue("1");
  ds_eq410.setCellData(ds_eq410.getRowPosition(), "useYn", "1");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableObjects($p, [acb_OutAcctCd]);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  $c.gus.cfEnableObjects($p, [udc_partMaker, udc_eqModel]);
  ed_PartCd.setFocus();
  acb_circulPartModelCd.setDisabled(true);
  gr_eq410.setReadOnly("grid", true);
};
scwin.f_Update = async function () {
  if (ds_eq410.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  scwin.ModeState = "upTrue";
  scwin.upPartCd = ed_PartCd.getValue();
  scwin.savebool = false;
  $c.gus.cfDisableKey($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  $c.gus.cfEnableObjects($p, [udc_partMaker, udc_eqModel]);
  acb_circulPartModelCd.setDisabled(true);
  gr_eq410.setReadOnly("grid", true);
  if (chb_CirculPartYn.getValue() == "1") {
    acb_circulPartModelCd.setDisabled(false);
  } else {
    acb_circulPartModelCd.setDisabled(true);
  }
};
scwin.f_Delete = async function () {
  if (ds_eq410.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  scwin.savebool = false;
  scwin.ModeState = "delTrue";
  scwin.upPartCd = ed_PartCd.getValue();
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add]);
  $c.gus.cfDisableObjects($p, [udc_partMaker, udc_eqModel]);
  chb_UseYn.setDisabled(false);
  chb_UseYn.setValue("");
  gr_eq410.setReadOnly("grid", true);
};
scwin.f_Save = async function () {
  if (ds_eq410.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!(await scwin.f_valueCheck())) {
    return;
  }
  let chk = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!chk) {
    return;
  }
  scwin.savebool = true;
  let rowPos = ds_eq410.getRowPosition();
  if (ds_eq410.getRowStatus(rowPos) == "U") {
    sbm_save.action = "/ps.eq.partmgnt.partstdinforeg.UpdatePartsStandardInformationCMD.do";
  } else {
    sbm_save.action = "/ps.eq.partmgnt.partstdinforeg.RegistPartsStandardInformationCMD.do";
  }
  await $c.sbm.execute($p, sbm_save);
  btn_Esc.setDisabled(true);
  gr_eq410.setReadOnly("grid", false);
};
scwin.f_Cancel = async function () {
  scwin.ModeState = "false";
  scwin.upPartCd = "";
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableObjects($p, [udc_partMaker, udc_eqModel]);
  ds_eq410.undoRow(ds_eq410.getRowPosition());
  gr_eq410.setReadOnly("grid", false);
};
scwin.f_valueCheck = async function () {
  if (chb_InternalCdYn.getValue() != "1") {
    if (ed_PartCd.getValue().trim().length == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["부품코드"]);
      ed_PartCd.setFocus();
      return false;
    }
    let rowPos = ds_eq410.getRowPosition();
    if (ds_eq410.getRowStatus(rowPos) == "C") {
      let partCd = ed_PartCd.getValue();
      if (partCd.indexOf("=") >= 0 || partCd.indexOf(",") >= 0 || partCd.indexOf("'") >= 0 || partCd.indexOf('"') >= 0) {
        await $c.win.alert($p, "부품코드에 특수문자(= , ' \") 를 빼고 입력하세요");
        ed_PartCd.setFocus();
        return false;
      }
    }
  }
  if (acb_CatCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계통코드"]);
    acb_CatCd.setFocus();
    return false;
  }
  let partCd = ed_PartCd.getValue().trim();
  if (partCd.indexOf(",") != -1) {
    await $c.win.alert($p, "부품코드에 쉼표(,)를 입력할 수 없습니다.");
    return false;
  }
  if (txt_PartNm.getValue().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["부품명"]);
    txt_PartNm.setFocus();
    return false;
  } else if (acb_PartUnitCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["단위"]);
    acb_PartUnitCd.setFocus();
    return false;
  } else if (acb_InAcctCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["입고계정"]);
    acb_InAcctCd.setFocus();
    return false;
  } else if (acb_OutAcctCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출고계정"]);
    acb_OutAcctCd.setFocus();
    return false;
  } else if (ed_CatalPage.getValue().length > 7) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_012, ["카탈로그 PAGE", 7]);
    ed_CatalPage.setFocus();
    return false;
  } else if (ed_CatalNo.getValue().length > 3) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_012, ["카탈로그 번호", 3]);
    ed_CatalNo.setFocus();
    return false;
  } else if (txt_partMakerCd.getValue().length > 0 && txt_partMakerCd.getValue().length < 2) {
    await $c.win.alert($p, txt_partMakerCd.getValue() + "은 유효한 제조사코드가 아닙니다.");
    txt_partMakerCd.setFocus();
    return false;
  } else if (txt_eqModelCd.getValue().length > 0 && txt_eqModelCd.getValue().length < 7) {
    await $c.win.alert($p, txt_eqModelCd.getValue() + "은 유효한 장비모델코드가 아닙니다.");
    txt_eqModelCd.setFocus();
    return false;
  } else if (chb_CirculPartYn.getValue() == "1") {
    if (acb_circulPartModelCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수리순환품여부 체크시 부품모델"]);
      acb_circulPartModelCd.setFocus();
      return false;
    }
  } else if (acb_InAcctCd.getValue() != acb_OutAcctCd.getValue()) {
    await $c.win.alert($p, "입고계정과 출고계정은 같아야합니다");
    acb_InAcctCd.setFocus();
    return false;
  } else {
    return true;
  }
};
scwin.f_onClickCirculPartYn = async function () {
  if (chb_CirculPartYn.getValue() == "1") {
    acb_circulPartModelCd.setDisabled(false);
  } else {
    acb_circulPartModelCd.setDisabled(true);
  }
  scwin.getModelNm = true;
  scwin.f_getModelNm();
};
scwin.f_onClickInternalCdYn = async function () {
  if (chb_InternalCdYn.getValue() == "1") {
    ed_PartCd.setValue("");
    ed_PartCd.setDisabled(true);
    txt_PartNm.setFocus();
  } else {
    ed_PartCd.setDisabled(false);
    ed_PartCd.setFocus();
  }
};
scwin.f_partPopUp = async function (popbool) {
  let tmpPartNm = em_partNm.getValue();
  let tmpPartCd = em_partCd.getValue();
  if (tmpPartNm == "undefined" || tmpPartNm == null) {
    tmpPartNm = "";
  }
  if (tmpPartCd == "undefined" || tmpPartCd == null) {
    tmpPartCd = "";
  }
  let firstList = $c.gus.cfCommonPopUp($p, 'retrievePartInfo', tmpPartCd, "", popbool, null, null, null, null, "T", null);
  if (firstList != null) {
    if (firstList[0] == "N/A") return;
    em_partCd.setValue(firstList[0]);
    em_partNm.setValue(firstList[1]);
  } else {
    em_partCd.setValue("");
    em_partNm.setValue("");
  }
};
scwin.f_getModelNm = async function () {
  let catCd = acb_CatCd.getValue();
  let rowPos = ds_eq410.getRowPosition();
  let modelCd = "";
  if (rowPos >= 0) {
    modelCd = ds_eq410.getCellData(rowPos, "circulPartModelCd");
  }
  if (catCd == "" || chb_CirculPartYn.getValue() != "1") {
    co_ds_combo2.removeAll();
    return;
  }
  if (scwin.strCatCd == catCd) {
    return;
  }
  let tmpCode = "";
  if (rowPos >= 0) {
    tmpCode = ds_eq410.getCellData(rowPos, "circulPartModelCd");
  }
  dma_search.set("catCd", catCd);
  await $c.sbm.execute($p, sbm_circulPartModel);
};
scwin.sbm_circulPartModel_submitdone = function (e) {
  co_ds_combo2.insertRow(0);
  co_ds_combo2.setCellData(0, "code", "");
  co_ds_combo2.setCellData(0, "name", "선택");
  let rowPos = ds_eq410.getRowPosition();
  let tmpCode = "";
  if (rowPos >= 0) {
    tmpCode = ds_eq410.getCellData(rowPos, "circulPartModelCd");
  }
  if (tmpCode != "") {
    acb_circulPartModelCd.setValue(tmpCode);
  } else {
    acb_circulPartModelCd.setValue("");
  }
};
scwin.f_PopUpMaker = function (pchk) {
  let rtnList;
  if (pchk == 1) {
    let partMakerCd = txt_partMakerCd.getValue().trim();
    if (txt_partMakerCd.getValue().length < 2) {
      txt_partMakerNm.setValue("");
      return;
    }
    rtnList = $c.gus.cfCommonPopUp($p, 'retrievePartMakerInfo', partMakerCd, '', "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        txt_partMakerCd.setValue("");
        txt_partMakerNm.setValue("");
      } else {
        txt_partMakerCd.setValue(rtnList[0]);
        txt_partMakerNm.setValue(rtnList[1]);
      }
    } else {
      txt_partMakerCd.setValue("");
      txt_partMakerNm.setValue("");
    }
    return;
  }
  if (txt_partMakerNm.getDisabled()) return;
  rtnList = $c.gus.cfCommonPopUp($p, 'retrievePartMakerInfo', txt_partMakerCd.getValue(), txt_partMakerNm.getValue(), "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      txt_partMakerCd.setValue("");
      txt_partMakerNm.setValue("");
    } else {
      txt_partMakerCd.setValue(rtnList[0]);
      txt_partMakerNm.setValue(rtnList[1]);
    }
  } else {
    txt_partMakerCd.setValue("");
    txt_partMakerNm.setValue("");
  }
};
scwin.f_PopUpEqModel = function (pchk) {
  let rtnList;
  if (pchk == 1) {
    if (txt_eqModelCd.getValue().length < 7) {
      txt_eqModelNm.setValue("");
      return;
    }
    rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEqModelInfo', txt_eqModelCd.getValue(), '', "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        txt_eqModelCd.setValue("");
        txt_eqModelNm.setValue("");
      } else {
        txt_eqModelCd.setValue(rtnList[0]);
        txt_eqModelNm.setValue(rtnList[1]);
      }
    } else {
      txt_eqModelCd.setValue("");
      txt_eqModelNm.setValue("");
    }
    return;
  }
  if (txt_eqModelNm.getDisabled()) return;
  rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEqModelInfo', txt_eqModelCd.getValue(), txt_eqModelNm.getValue(), "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      txt_eqModelCd.setValue("");
      txt_eqModelNm.setValue("");
    } else {
      txt_eqModelCd.setValue(rtnList[0]);
      txt_eqModelNm.setValue(rtnList[1]);
    }
  } else {
    txt_eqModelCd.setValue("");
    txt_eqModelNm.setValue("");
  }
};
scwin.f_PopUpMakerParam = async function (pchk) {
  let rtnList;
  if (pchk == 1) {
    let partMakerCd = txt_partMakerCdParam.getValue().trim();
    if (txt_partMakerCdParam.getValue().length < 2) {
      txt_partMakerNmParam.setValue("");
      return;
    }
    rtnList = $c.gus.cfCommonPopUp($p, 'retrievePartMakerInfo', partMakerCd, '', "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        txt_partMakerCdParam.setValue("");
        txt_partMakerNmParam.setValue("");
      } else {
        txt_partMakerCdParam.setValue(rtnList[0]);
        txt_partMakerNmParam.setValue(rtnList[1]);
      }
    } else {
      txt_partMakerCdParam.setValue("");
      txt_partMakerNmParam.setValue("");
    }
    return;
  }
  if (txt_partMakerNmParam.getDisabled()) return;
  rtnList = $c.gus.cfCommonPopUp($p, 'retrievePartMakerInfo', txt_partMakerCdParam.getValue(), txt_partMakerNmParam.getValue(), "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      txt_partMakerCdParam.setValue("");
      txt_partMakerNmParam.setValue("");
    } else {
      txt_partMakerCdParam.setValue(rtnList[0]);
      txt_partMakerNmParam.setValue(rtnList[1]);
    }
  } else {
    txt_partMakerCdParam.setValue("");
    txt_partMakerNmParam.setValue("");
  }
};
scwin.f_PopUpEqModelParam = async function (pchk) {
  let rtnList;
  if (pchk == 1) {
    if (txt_eqModelCdParam.getValue().length < 7) {
      txt_eqModelNmParam.setValue("");
      return;
    }
    rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEqModelInfo', txt_eqModelCdParam.getValue(), '', "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        txt_eqModelCdParam.setValue("");
        txt_eqModelNmParam.setValue("");
      } else {
        txt_eqModelCdParam.setValue(rtnList[0]);
        txt_eqModelNmParam.setValue(rtnList[1]);
      }
    } else {
      txt_eqModelCdParam.setValue("");
      txt_eqModelNmParam.setValue("");
    }
    return;
  }
  if (txt_eqModelNmParam.getDisabled()) return;
  rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEqModelInfo', txt_eqModelCdParam.getValue(), txt_eqModelNmParam.getValue(), "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      txt_eqModelCdParam.setValue("");
      txt_eqModelNmParam.setValue("");
    } else {
      txt_eqModelCdParam.setValue(rtnList[0]);
      txt_eqModelNmParam.setValue(rtnList[1]);
    }
  } else {
    txt_eqModelCdParam.setValue("");
    txt_eqModelNmParam.setValue("");
  }
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  em_partCd.setFocus();
};
scwin.f_Excel = async function () {
  if (!(ds_eq410.getRowCount() > 0)) return;
  $c.data.downloadGridViewExcel($p, gr_eq410, {
    fileName: "부품기준정보목록.xlsx",
    sheetName: "부품기준정보목록"
  });
};
scwin.onlyEng = async function (obj) {
  let inText = obj.getValue();
  let ret;
  for (let i = 0; i < inText.length; i++) {
    ret = inText.charCodeAt(i);
    if (!(32 < ret && ret < 123)) {
      await $c.win.alert($p, "영문자와 숫자만을 입력하세요\n\n한글과 특수문자는 안됩니다.");
      obj.setValue("");
      obj.setFocus();
      return false;
    }
  }
  obj.setValue(inText.toUpperCase().trim());
  return true;
};
scwin.checkPartCd = async function (obj) {
  let inText = obj.getValue();
  obj.setValue(inText.toUpperCase().trim());
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_eq410.getRowCount();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, "조회된 데이터가 없습니다.");
    }
  } else {
    ds_eq410.resetStatus();
  }
  spa_totalRow.setValue(rowCnt);
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  scwin.ModeState = "false";
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  scwin.savebool = false;
};
scwin.ds_eq410_onrowpositionchange = async function (rowIndex, oldRowIndex) {
  let ModeState = scwin.ModeState;
  if (ModeState == "insTrue") {
    let chk = await $c.win.confirm($p, "신규작업을 중단하시겠습니까?");
    if (chk == true) {
      ds_eq410.undoAll();
      scwin.ModeState = "false";
      scwin.f_Cancel();
    } else {
      scwin.ModeState = "insOnLoad";
      ds_eq410.setRowPosition(ds_eq410.getRowCount() - 1);
    }
  } else if (ModeState == "insOnLoad") {
    scwin.ModeState = "insTrue";
  } else if (ModeState == "upTrue" || ModeState == "delTrue") {
    let Msg = "";
    if (ModeState == "upTrue") {
      Msg = "수정작업을 중단하시겠습니까?";
    } else {
      Msg = "삭제작업을 중단하시겠습니까?";
    }
    let chk = await $c.win.confirm($p, Msg);
    if (chk == true) {
      ds_eq410.undoAll();
      scwin.ModeState = "false";
      scwin.upPartCd = "";
      scwin.f_Cancel();
    } else {
      scwin.ModeState = "upOnLoad";
      for (let idx = 0; idx < ds_eq410.getRowCount(); idx++) {
        if (ds_eq410.getCellData(idx, "partCd") == scwin.upPartCd) {
          ds_eq410.setRowPosition(idx);
          break;
        }
      }
    }
  } else if (ModeState == "upOnLoad") {
    scwin.ModeState = "upTrue";
  }
  if (scwin.getModelNm == true) {
    scwin.f_getModelNm();
  }
};
scwin.gr_eq410_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    scwin.getModelNm = true;
    scwin.f_getModelNm();
  }
};
scwin.acb_CatCd_onchange = function (e) {
  scwin.getModelNm = true;
  scwin.f_getModelNm();
};
scwin.acb_circulPartModelCd_onchange = function (e) {
  let rowPos = ds_eq410.getRowPosition();
  if (rowPos >= 0) {
    ds_eq410.setCellData(rowPos, "circulPartModelCd", acb_circulPartModelCd.getValue());
  }
};
scwin.acb_InAcctCd_onchange = function (e) {
  acb_OutAcctCd.setValue(acb_InAcctCd.getValue());
};
scwin.chb_CirculPartYn_onclick = function (e) {
  scwin.f_onClickCirculPartYn();
};
scwin.chb_InternalCdYn_onclick = function (e) {
  scwin.f_onClickInternalCdYn();
};
scwin.em_partCd_onkeyup = function (e) {
  scwin.checkPartCd(em_partCd);
};
scwin.ed_PartCd_onkeyup = function (e) {
  scwin.onlyEng(ed_PartCd);
};
scwin.btn_FieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'em_partCd',class:''}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'em_partNm',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_CatCdParam',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제조사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_partMakerCdParam',codeId:'txt_partMakerCdParam',nameId:'txt_partMakerNmParam',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_eqModelCdParam',codeId:'txt_eqModelCdParam',nameId:'txt_eqModelNmParam',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_InAcctCdParam',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_OutAcctCdParam',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_UseYnParam',style:'width: 100px;',submenuSize:'fixed'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve','ev:onclick':'scwin.btn_Retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품기준정보 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq410',focusMode:'row',id:'gr_eq410',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'catCd',inputType:'text',removeBorderStyle:'false',value:'계통코드',width:'100'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'catNm',value:'카탈로그PAGE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'catalPage',value:'카탈로그번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'catalNo',value:'부품제조사코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partMakerCd',value:'단위',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'partUnitCd',value:'부품구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'partClsCd',value:'입고계정코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'inAcctCd',value:'출고계정코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'outAcctCd',value:'장비모델코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'eqModelCd',value:'장비모델명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'eqModelNm',value:'내부코드여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'internalCdYn',value:'수리순환품여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'circulPartYn',value:'수리순환품모델코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'circulPartModelCd',value:'사용여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'catCd',inputType:'select',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'catNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'catalPage',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'catalNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partMakerCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'partUnitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'partClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'inAcctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'outAcctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'eqModelCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'internalCdYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'circulPartYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'circulPartModelCd',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_PartCd',class:'',ref:'data:ds_eq410.partCd'}},{T:1,N:'xf:select',A:{ref:'data:ds_eq410.internalCdYn',appearance:'full',style:'',id:'chb_InternalCdYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_PartNm',style:'width: 200px;',ref:'data:ds_eq410.partNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계통',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_CatCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.catNm',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카탈로그 PAGE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_CatalPage',style:'width:100px;',ref:'data:ds_eq410.catalPage'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카탈로그 번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_CatalNo',style:'width:100px;',ref:'data:ds_eq410.catalNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제조사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_partMaker',popupID:'',selectID:'',codeId:'txt_partMakerCd',validTitle:'',nameId:'txt_partMakerNm',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_PartUnitCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.partUnitCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_eqModel',codeId:'txt_eqModelCd',nameId:'txt_eqModelNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_PartClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.partClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_InAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.inAcctCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_OutAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.outAcctCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수리순환품여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_CirculPartYn',ref:'data:ds_eq410.circulPartYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품모델',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_circulPartModelCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.circulPartModelCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_UseYn',ref:'data:ds_eq410.useYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot',id:'',label:'신규부품 등록시 부품코드에 특수문자(\' " = , 등)를 입력할 수 없습니다. ',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init','ev:onclick':'scwin.btn_Init_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Add','ev:onclick':'scwin.btn_Add_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Esc','ev:onclick':'scwin.btn_Esc_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav','ev:onclick':'scwin.btn_Sav_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del','ev:onclick':'scwin.btn_Del_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})