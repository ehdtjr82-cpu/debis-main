/*amd /AI/op_302_01_22b.xml 27115 7f0aaa28dd519402ffecc0053ce5f8edcb3ae442a19a13ece8bc25ce05629eef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPl',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutTermFrom',name:'반출입시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutTermTo',name:'반출입종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBulk',name:'컨테이너벌크',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndClsCd',name:'전송구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateInOut',name:'게이트인아웃',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ckWrkPlCd',name:'작업장체크',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_save'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cheAll',name:'전체체크',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sndYn',name:'전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinoutCnt',name:'신고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutWt',name:'신고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternNm',name:'반출입유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinAccdWt',name:'반입사고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinoutBasisNo',name:'근거번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCdNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtm',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'전송담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBulk',name:'컨테이너벌크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termExtdBasisNo',name:'근거번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdPatternNm',name:'상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveCustomCarryInAndCarryOutPresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/ds.op.wrkrslts.yardwrkrslts.SaveCustomCarryInAndCarryOutPresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_emp","key":"IN_DS1"},{"id":"dma_save","key":"IN_DS2"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'scwin.sbm_saveEmp_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.strDate = "";
scwin.odrNo = "";
scwin.mrn = "";
scwin.msn = "";
scwin.hsn = "";
scwin.blNo = "";
scwin.wrkPlCd = "";
scwin.wrkPlNm = "";
scwin.crryinoutTermFrom = "";
scwin.crryinoutTermTo = "";
scwin.crryinoutCls = "";
scwin.gateInOut = "";
scwin.cntrBulk = "";
scwin.pos_groupCode = 0;
scwin.cheVal = "";
scwin.onpageload = async function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd() == null ? "" : $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo() == null ? "" : $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm() == null ? "" : $c.ses.getClntNm();
  scwin.strFromDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strToDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
  let params = $c.data.getParameter($p);
  if (params != null) {
    scwin.odrNo = params["odrNo"] == null ? "" : params["odrNo"];
    scwin.mrn = params["mrn"] == null ? "" : params["mrn"];
    scwin.msn = params["msn"] == null ? "" : params["msn"];
    scwin.hsn = params["hsn"] == null ? "" : params["hsn"];
    scwin.blNo = params["blNo"] == null ? "" : params["blNo"];
    scwin.wrkPlCd = params["wrkPlCd"] == null ? "" : params["wrkPlCd"];
    scwin.wrkPlNm = params["wrkPlNm"] == null ? "" : params["wrkPlNm"];
    scwin.crryinoutTermFrom = params["crryinoutTermFrom"] == null ? "" : params["crryinoutTermFrom"];
    scwin.crryinoutTermTo = params["crryinoutTermTo"] == null ? "" : params["crryinoutTermTo"];
    scwin.crryinoutCls = params["crryinoutCls"] == null ? "" : params["crryinoutCls"];
    scwin.gateInOut = params["gateInOut"] == null ? "" : params["gateInOut"];
    scwin.cntrBulk = params["cntrBulk"] == null ? "" : params["cntrBulk"];
  }
  let codeOptions = [{
    grpCd: "OP197",
    compID: "acb_crryinoutCls"
  }, {
    grpCd: "OP121",
    compID: "acb_sndCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  udc_crryinoutTerm.setInitDate("20050101", scwin.strFromDate);
  ed_wrkPlCd.setFocus();
  if ("" != scwin.wrkPlCd) {
    scwin.f_OpenRetrieve();
  }
};
scwin.f_OpenRetrieve = async function () {
  ed_wrkPlCd.setValue(scwin.wrkPlCd);
  txt_wrkPlNm.setValue(scwin.wrkPlNm);
  txt_mrn.setValue(scwin.mrn);
  txt_msn.setValue(scwin.msn);
  txt_hsn.setValue(scwin.hsn);
  txt_blNo.setValue(scwin.blNo);
  acb_crryinoutCls.setValue(scwin.crryinoutCls);
  dma_retrieve.set("wrkPl", scwin.wrkPlCd);
  dma_retrieve.set("crryinoutTermFrom", scwin.crryinoutTermFrom);
  dma_retrieve.set("crryinoutTermTo", scwin.crryinoutTermTo);
  dma_retrieve.set("crryinoutCls", scwin.crryinoutCls);
  dma_retrieve.set("mrn", scwin.mrn);
  dma_retrieve.set("msn", scwin.msn == "" ? -1 : scwin.msn);
  dma_retrieve.set("hsn", scwin.hsn == "" ? -1 : scwin.hsn);
  dma_retrieve.set("odrNo", scwin.odrNo);
  dma_retrieve.set("blNo", scwin.blNo);
  dma_retrieve.set("cntrBulk", scwin.cntrBulk);
  dma_retrieve.set("sndClsCd", acb_sndCls.getValue());
  dma_retrieve.set("gateInOut", scwin.gateInOut);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [tb_queryList]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_crryinoutTermFrom.getValue(), ica_crryinoutTermTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_crryinoutTermFrom.setFocus();
    return;
  }
  if (ckWrkPlCd.getValue() != "") {
    scwin.cheVal = "1";
  } else {
    scwin.cheVal = "0";
  }
  dma_retrieve.set("wrkPl", ed_wrkPlCd.getValue());
  dma_retrieve.set("crryinoutTermFrom", ica_crryinoutTermFrom.getValue());
  dma_retrieve.set("crryinoutTermTo", ica_crryinoutTermTo.getValue());
  dma_retrieve.set("crryinoutCls", acb_crryinoutCls.getValue());
  dma_retrieve.set("mrn", txt_mrn.getValue());
  dma_retrieve.set("msn", txt_msn.getValue() == "" ? -1 : txt_msn.getValue());
  dma_retrieve.set("hsn", txt_hsn.getValue() == "" ? -1 : txt_hsn.getValue());
  dma_retrieve.set("ckWrkPlCd", scwin.cheVal);
  dma_retrieve.set("blNo", txt_blNo.getValue());
  dma_retrieve.set("cntrBulk", scwin.cntrBulk);
  dma_retrieve.set("sndClsCd", acb_sndCls.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Save = async function () {
  if (ds_emp.getUpdatedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["Data"]);
    return;
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk == true) {
    dma_save.set("vehclNo", scwin.vehclNo);
    dma_save.set("wrkDt", scwin.wrkDt);
    dma_save.set("odrNo", scwin.odrNo);
    dma_save.set("transWrkIndictNo", scwin.transWrkIndictNo);
    dma_save.set("cntrNo", scwin.cntrNo);
    dma_save.set("cheAll", scwin.che);
    scwin.pos_groupCode = ds_emp.getRowPosition();
    await $c.sbm.execute($p, sbm_saveEmp);
  }
};
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  udc_wrkPl.ilCommonPopUp(scwin.callbackWrkPl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
};
scwin.callbackWrkPl = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
  if (rtnList != null && rtnList.length > 2) {
    scwin.cntrBulk = rtnList[2];
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_Reset = async function () {
  $c.gus.cfInitObjects($p, [tb_queryList]);
  udc_crryinoutTerm.setInitDate(scwin.strFromDate, scwin.strFromDate);
};
scwin.vehclNoOpen = async function () {
  let row = ds_emp2.getRowPosition();
  if (row < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["조회한 DATA"]);
    return;
  }
  let transWrkIndictNoVal = ds_emp2.getCellData(row, "transWrkIndictNo");
  let transRsltsSeqVal = ds_emp2.getCellData(row, "transRsltsSeq");
  let eqCdVal = ds_emp2.getCellData(row, "transRsltsSeq");
  let vehclNoVal = ds_emp2.getCellData(row, "vehclNo");
  if (transWrkIndictNoVal == null || transWrkIndictNoVal == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["조회한 DATA"]);
    return;
  }
  let obj = {
    transWrkIndictNo: transWrkIndictNoVal,
    transRsltsSeq: transRsltsSeqVal,
    eqCd: eqCdVal,
    vehclNo: vehclNoVal,
    cntrBulkDiv: "C"
  };
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_05p.xml", {
    width: 600,
    height: 200,
    modal: true,
    data: obj
  });
};
scwin.f_Dcsn = async function () {
  let row = ds_emp2.getRowPosition();
  if (ds_emp2.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  let vehclNoVal = ds_emp2.getCellData(row, "vehclNo");
  let len = vehclNoVal.length;
  let param = {
    transWrkIndictNo: ds_emp2.getCellData(row, "transWrkIndictNo"),
    lobranCd: ds_emp2.getCellData(row, "wrkLobranCd"),
    wrkStDt: ds_emp2.getCellData(row, "dptDt"),
    vehclNo: vehclNoVal,
    vehclNoCd: vehclNoVal.substring(len - 4, len),
    eqCd: ds_emp2.getCellData(row, "eqCd")
  };
  $c.win.openMenu($p, "운송할인할증등록", "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml", "op_304_03_01b.xml", param);
};
scwin.f_toExcel1 = async function () {
  $c.data.downloadGridViewExcel($p, gr_emp, {
    fileName: "작업지시정보.xlsx",
    sheetName: "작업지시정보"
  });
};
scwin.f_Detail = async function (row, winName) {
  let obj = {
    odrNo: ds_emp.getCellData(row, "odrNo"),
    mrn: ds_emp.getCellData(row, "mrn"),
    msn: ds_emp.getCellData(row, "msn"),
    hsn: ds_emp.getCellData(row, "hsn"),
    blNo: ds_emp.getCellData(row, "blNo"),
    wrkPlCd: ds_emp.getCellData(row, "wrkPlCd"),
    wrkPlNm: ds_emp.getCellData(row, "wrkPlNm"),
    cntrBulk: ds_emp.getCellData(row, "cntrBulk")
  };
  let xmlName = winName.replace(".xml", ".xml");
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/yardwrkrslts/" + xmlName, {
    width: 1000,
    height: 550,
    modal: true,
    data: obj
  });
};
scwin.f_Close = async function () {
  $c.win.closePopup($p);
};
scwin.f_Trans = async function () {
  return null;
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = async function (e) {
  scwin.f_Reset();
};
scwin.btn_Upt_onclick = async function (e) {
  scwin.f_Trans();
};
scwin.btn_Init_onclick = async function (e) {
  scwin.f_Close();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_emp.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  $c.gus.cfGoPrevPosition($p, ds_emp, scwin.pos_groupCode);
  // TODO: totalRows 표시 - body에 spa_totalRow id가 없으므로 grid-total 내 textbox에 id 부여 필요
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveEmp_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001, [""]);
};
scwin.sbm_saveEmp_submiterror = async function (e) {
  await $c.win.alert($p, e.errorMsg);
};
scwin.gr_emp_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (columnId == "sndYn") {
      if (ds_emp.getOriginalCellData(rowIndex, "sndYn") == "1") {
        await $c.win.alert($p, "전송완료된 데이타는 수정할 수 없습니다.");
        ds_emp.setCellData(rowIndex, "sndYn", "1");
      }
    }
  }
};
scwin.gr_emp_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (ds_emp.getCellData(rowIndex, "crryinoutClsCd") == "I") {
      scwin.f_Detail(rowIndex, "op_302_01_16b.xml");
    } else if (ds_emp.getCellData(rowIndex, "crryinoutClsCd") == "O") {
      scwin.f_Detail(rowIndex, "op_302_01_17b.xml");
    }
  }
};
scwin.ed_wrkPlCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, '1');
};
scwin.txt_wrkPlNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm, ed_wrkPlCd, '', false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_queryList',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',popupID:'',style:''}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'ckWrkPlCd',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반출입일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_crryinoutTerm',edFromId:'ica_crryinoutTermFrom',edToId:'ica_crryinoutTermTo',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_crryinoutCls',search:'start',style:'width: 150px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 85px;',id:'txt_mrn',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'txt_msn',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'txt_hsn',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_blNo',placeholder:'',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sndCls',search:'start',style:'width: 150px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box flex-full',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반출입현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_emp',id:'gr_emp',style:'',autoFit:'allColumn',autoFitMinWidth:'1700',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sndYn',inputType:'text',value:'전송',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',value:'MRN',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',value:'MSN',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',value:'HSN',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'BL번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutClsNm',inputType:'text',value:'구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',value:'작업장',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',value:'수량',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',value:'중량',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutCnt',inputType:'text',value:'신고물량',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinoutWt',value:'반출입유형',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinoutPatternNm',value:'반입사고중량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinAccdWt',value:'근거번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutBasisNo',value:'전송구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsCd',value:'상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsCdNm',value:'일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutDtm',value:'전송담당자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',value:'전송일자',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sndYn',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'mrn',value:'중량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sndYn',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutClsNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',width:'80',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutCnt',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'crryinoutWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinoutPatternNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinAccdWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutBasisNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsCdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutDtm',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndDt',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Upt','ev:onclick':'scwin.btn_Upt_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init','ev:onclick':'scwin.btn_Init_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'닫기'}]}]}]}]}]}]}]}]}]})