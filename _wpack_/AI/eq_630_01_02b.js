/*amd /AI/eq_630_01_02b.xml 45610 7b7b3073150e4927eb5a7d69ac403fd326d0ed12eab9fc4b3eecfec763fd8764 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commClsCd',name:'상품구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideClsCd',name:'외부구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmsInterface',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'자동전표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'수정가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipYn',name:'통제전표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reversePsblYn',name:'역분개가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseAutoSlipYn',name:'역분개자동전표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtTrgtYn',name:'전자명세서대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'외부구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndMm',name:'전송월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSeq',name:'전송순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardSndSeq',name:'카드전송순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnMm',name:'매출입년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'매출입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClsCd',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'공급가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aaa',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'instmtMmCnt',name:'할부월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'전표적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAmt',name:'원가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'constSite',name:'현장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptClnt',name:'인도처',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.RetrieveFmsInterfaceSelpchCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_fmsInterface","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fmsInterface","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_slipKnd',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.SaveFmsInterfaceSelpchCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_fmsInterface","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_slipKnd_submitdone','ev:submiterror':'scwin.sbm_slipKnd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = "";
scwin.savebool = false;
scwin.ModeState = "false";
scwin.upPartCd = "";
scwin.acctDeptCd = "";
scwin.onpageload = async function () {
  scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.acctDeptCd = $c.ses.getAcctDeptCd();
  ds_search.set("osideClsCd", "F");
};
scwin.onUdcCompleted = async function () {
  udc_dt.setInitDate(scwin.g_sCurrDate.substring(0, 6) + "01", scwin.g_sCurrDate);
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [ica_postDt, udc_clnt, udc_acctDept]);
  ica_postDt.setReadOnly(true);
  const codeOptions = [{
    grpCd: "FI019",
    compID: "acb_selpchClsCdCond,acb_selpchClsCd,gr_fmsInterface:selpchClsCd"
  }, {
    grpCd: "TL106",
    compID: "acb_commClsCdCond,acb_commClsCd,gr_fmsInterface:commClsCd"
  }, {
    grpCd: "FM103",
    compID: "acb_instmtMmCnt,gr_fmsInterface:instmtMmCnt"
  }, {
    grpCd: "ZZ522",
    compID: "acb_payDd,gr_fmsInterface:payDd"
  }, {
    grpCd: "TL406",
    compID: "acb_constSite"
  }, {
    grpCd: "TL405",
    compID: "acb_rcptClnt"
  }];
  $c.data.setCommonCode($p, codeOptions);
  acb_selpchClsCdCond.setChooseOption(true, "전체", "");
  acb_commClsCdCond.setChooseOption(true, "전체", "");
  acb_instmtMmCnt.setChooseOption(true, " ", "");
  acb_payDd.setChooseOption(true, " ", "");
  acb_constSite.setChooseOption(true, "", "");
  acb_rcptClnt.setChooseOption(true, "", "");
};
scwin.btn_search_onclick = async function (e) {
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
  acb_acctCd.removeAll();
  await $c.sbm.execute($p, sbm_search);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  ica_postDt.setReadOnly(true);
  scwin.ModeState = "false";
  gr_fmsInterface.setReadOnly("grid", false);
};
scwin.sbm_search_submitdone = async function (e) {
  spa_totalRow.setValue(ds_fmsInterface.getTotalRow());
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  if (ds_fmsInterface.getTotalRow() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
scwin.sbm_search_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_Create = async function () {
  scwin.ModeState = "insOnLoad";
  $c.data.insertRow($p, ds_fmsInterface);
  $c.gus.cfEnableKeyData($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  $c.gus.cfEnableObjects($p, [ica_postDt, udc_clnt, udc_acctDept]);
  let lastRow = ds_fmsInterface.getRowCount() - 1;
  ds_fmsInterface.setCellData(lastRow, "osideClsCd", "F");
  ica_postDt.setReadOnly(false);
  ica_postDt.setFocus();
  gr_fmsInterface.setReadOnly("grid", true);
  let acctCdItems = acb_acctCd.getItemCount();
  for (let i = acctCdItems - 1; i >= 0; i--) {
    if (acb_acctCd.getItemValue(i) == "4204745") {
      acb_acctCd.removeItem(i);
      break;
    }
  }
};
scwin.f_Update = async function () {
  if (ds_fmsInterface.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  let row = ds_fmsInterface.getRowPosition();
  let slipNo = ds_fmsInterface.getCellData(row, "slipNo");
  if (slipNo != "") {
    await $c.win.alert($p, "이미 전표를 생성하였으므로 수정하실 수 없습니다.");
    return;
  }
  scwin.ModeState = "upTrue";
  scwin.savebool = false;
  $c.gus.cfDisableKey($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);
  $c.gus.cfEnableObjects($p, [udc_clnt, udc_acctDept]);
  gr_fmsInterface.setReadOnly("grid", true);
  let acctCdItems = acb_acctCd.getItemCount();
  for (let i = acctCdItems - 1; i >= 0; i--) {
    if (acb_acctCd.getItemValue(i) == "4204745") {
      acb_acctCd.removeItem(i);
      break;
    }
  }
};
scwin.f_Delete = async function () {
  if (ds_fmsInterface.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  let row = ds_fmsInterface.getRowPosition();
  ds_fmsInterface.removeRow(row);
  scwin.savebool = false;
  scwin.ModeState = "delTrue";
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add]);
  $c.gus.cfDisableObjects($p, [udc_clnt, udc_acctDept]);
  gr_fmsInterface.setReadOnly("grid", true);
};
scwin.f_Save = async function () {
  if (ds_fmsInterface.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!(await scwin.f_Validation())) {
    return;
  }
  let instmtMmCntVal = acb_instmtMmCnt.getValue();
  let payDdVal = acb_payDd.getValue();
  if (instmtMmCntVal != "" && payDdVal == "") {
    await $c.win.alert($p, "할부개월수가 있는 경우 지급일을 입력하세요");
    acb_payDd.setFocus();
    return;
  } else if (instmtMmCntVal == "" && payDdVal != "") {
    await $c.win.alert($p, "지급일이 있는 경우 할부개월수를 입력하세요");
    acb_instmtMmCnt.setFocus();
    return;
  }
  let sumAmt = 0;
  let amt = 0;
  let vat = 0;
  let totAmt = 0;
  sumAmt = ed_sumAmt.getValue();
  amt = ed_amt.getValue();
  vat = ed_vat.getValue();
  totAmt = parseFloat(amt) + parseFloat(vat);
  if (sumAmt != totAmt) {
    await $c.win.alert($p, "금액 및 부가세를 확인하세요.");
    ed_sumAmt.setFocus();
    return;
  }
  let evidClsCd = acb_evidClsCd.getValue();
  if (evidClsCd == "99" && vat > 0) {
    await $c.win.alert($p, "증빙이 기타입니다. 부가세를 확인하세요.");
    ed_vat.setFocus();
    return;
  }
  let selpchClsCd = acb_selpchClsCd.getValue();
  let slipKndCd = acb_slipKndCd.getValue();
  let acctCd = acb_acctCd.getValue();
  if (selpchClsCd == "1") {
    if (slipKndCd == "H25") {
      await $c.win.alert($p, "매출입구분과 전표종류가 올바르지 않습니다.");
      acb_slipKndCd.setFocus();
      return;
    } else if (acctCd == "4204742" || acctCd == "4204743" || acctCd == "4204744" || acctCd == "4204745" || acctCd == "1120260") {
      await $c.win.alert($p, "매출인 경우 매출계정만 입력하실 수 있습니다..");
      acb_acctCd.setFocus();
      return;
    }
  }
  if (selpchClsCd == "2") {
    if (slipKndCd == "H24") {
      await $c.win.alert($p, "매출입구분과 전표종류가 올바르지 않습니다.");
      acb_slipKndCd.setFocus();
      return;
    } else if (acctCd == "4101212" || acctCd == "4101214" || acctCd == "4101216" || acctCd == "4101220") {
      await $c.win.alert($p, "매입인 경우 원가계정만 입력하실 수 있습니다.");
      acb_acctCd.setFocus();
      return;
    }
  }
  let chkValidate = await $c.gus.cfValidate($p, [gr_fmsInterface]);
  if (chkValidate) {
    let chkConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chkConfirm == true) {
      scwin.savebool = true;
      await $c.sbm.execute($p, sbm_slipKnd);
      btn_Esc.setDisabled(true);
      gr_fmsInterface.setReadOnly("grid", false);
    }
  }
};
scwin.sbm_slipKnd_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  scwin.ModeState = "false";
};
scwin.sbm_slipKnd_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  scwin.savebool = false;
};
scwin.f_Cancel = async function () {
  scwin.ModeState = "false";
  scwin.upPartCd = "";
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableObjects($p, [udc_clnt, udc_acctDept]);
  acb_acctCd.removeAll();
  let row = ds_fmsInterface.getRowPosition();
  if (row >= 0) {
    ds_fmsInterface.undoRow(row);
  }
  gr_fmsInterface.setReadOnly("grid", false);
};
scwin.f_Validation = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_postDt, udc_clnt]);
  if (!chk) {
    return false;
  } else {
    return true;
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  let row;
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveClntEmpNoList', pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNoCond, txt_clntNmCond);
      break;
    case 2:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveClntEmpNoList', pCode, "", 'T', null, null, null, null, null, null, null, null, null);
      if (rtnList != null && rtnList[0] != "N/A") {
        row = ds_fmsInterface.getRowPosition();
        ds_fmsInterface.setCellData(row, 'clntNo', rtnList[0]);
        ds_fmsInterface.setCellData(row, 'clntNm', rtnList[1]);
      }
      break;
    case 3:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveAcctDeptCdInfo', pCode, "", 'T', null, null, null, null, null, null, null, null, null);
      if (rtnList != null && rtnList[0] != "N/A") {
        row = ds_fmsInterface.getRowPosition();
        ds_fmsInterface.setCellData(row, 'acctDeptCd', rtnList[0]);
        ds_fmsInterface.setCellData(row, 'acctDeptNm', rtnList[1]);
      }
      break;
  }
  return;
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_Excel = async function () {
  let chk = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gr_fmsInterface, "정비직판매출입", "정비직판매출입");
  }
};
scwin.ed_sumAmt_onblur = function (e) {
  let evidClsCd = acb_evidClsCd.getValue();
  let sumAmt = 0;
  let amt = 0;
  let vat = 0;
  sumAmt = ed_sumAmt.getValue();
  if (evidClsCd == "10") {
    amt = Math.round(sumAmt / 1.1);
    ed_amt.setValue(amt);
    ed_vat.setValue(sumAmt - amt);
  } else if (evidClsCd == "99") {
    ed_amt.setValue(sumAmt);
    ed_vat.setValue(0);
  }
};
scwin.ed_amt_onblur = function (e) {
  let evidClsCd = acb_evidClsCd.getValue();
  let sumAmt = 0;
  let amt = 0;
  let vat = 0;
  sumAmt = ed_sumAmt.getValue();
  if (evidClsCd == "10") {
    amt = ed_amt.getValue();
    vat = sumAmt - amt;
    ed_vat.setValue(vat);
  } else if (evidClsCd == "99") {
    ed_amt.setValue(sumAmt);
    ed_vat.setValue(0);
  }
};
scwin.acb_evidClsCd_onchange = function (e) {
  let evidClsCd = acb_evidClsCd.getValue();
  let sumAmt = 0;
  let amt = 0;
  let vat = 0;
  sumAmt = ed_sumAmt.getValue();
  if (evidClsCd == "10") {
    amt = Math.round(sumAmt / 1.1);
    ed_amt.setValue(amt);
    ed_vat.setValue(sumAmt - amt);
  } else if (evidClsCd == "99") {
    ed_amt.setValue(sumAmt);
    ed_vat.setValue(0);
  }
};
scwin.udc_clntNoCond_onblurCode = function () {
  scwin.f_openCommonPopUp(1, ed_clntNoCond.getValue(), txt_clntNmCond.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurCode = function () {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurName = function () {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_acctDept_onblurCode = function () {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDept_onblurName = function () {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.ds_fmsInterface_onrowpositionchange = function (info) {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
};
scwin.txt_clntNmCond_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_clntNmCond, ed_clntNoCond, 1, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_dt',refEdDt:'',edFromId:'ica_stDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNoCond',validTitle:'',nameId:'txt_clntNmCond',style:'',id:'udc_clntNoCond'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCdCond',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.selpchClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상품구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_commClsCdCond',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.commClsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search','ev:onclick':'scwin.btn_search_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' FMS정비직판매출입 목록 ',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fmsInterface',focusMode:'row',id:'gr_fmsInterface',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'osideClsCd',value:'외부구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndMm',value:'전송월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndSeq',value:'전송순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'cardSndSeq',value:'카드전송순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnMm',value:'매출입</br>년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'매출입</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'거래처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchClsCd',value:'매출입</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndCd',value:'전표</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'계정</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'evidClsCd',value:'증빙</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commClsCd',value:'상품</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptNm',value:'귀속</br>부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'공급가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat',value:'VAT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'aaa',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'instmtMmCnt',value:'할부</br>월수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDd',value:'지급일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'설명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zeroTaxClsCd',value:'영세구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyDt',value:'공급일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'전표적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'osideClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndMm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'cardSndSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnMm',value:'',displayMode:'label',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'slipKndCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비직판매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H24'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비직판매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H25'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'acctCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타이어매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101212'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부품매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101214'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101216'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)타이어'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204742'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)부품'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204743'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204744'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AP매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101220'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)AP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204745'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상품-AP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1120260'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'evidClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현금영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'aaa',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'instmtMmCnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zeroTaxClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',expression:'sum(\'amt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'sum(\'vat\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_postDt',style:'',ref:'data:ds_fmsInterface.postDt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_clnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.selpchClsCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상품구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_commClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.commClsCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.slipKndCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.acctCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.evidClsCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_acctDept'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할부개월수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_instmtMmCnt',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.instmtMmCnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payDd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.payDd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액/원가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_sumAmt',class:'tar',ref:'data:ds_fmsInterface.sumAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pcostAmt',style:'width: 150px;',ref:'data:ds_fmsInterface.pcostAmt'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가/부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',style:'width: 150px;',ref:'data:ds_fmsInterface.amt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vat',style:'width: 150px;',ref:'data:ds_fmsInterface.vat'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',style:'',ref:'data:ds_fmsInterface.rmk'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipDt',style:'width: 150px;',ref:'data:ds_fmsInterface.slipDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_spplyDt',style:'width: 150px;',ref:'data:ds_fmsInterface.spplyDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',ref:'data:ds_fmsInterface.slipNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표 적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'',ref:'data:ds_fmsInterface.summary'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량/단가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_qty',style:'width: 150px;',ref:'data:ds_fmsInterface.qty'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_upr',style:'width: 150px;',ref:'data:ds_fmsInterface.upr'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_constSite',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.constSite'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rcptClnt',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fmsInterface.rcptClnt'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Init',type:'button',class:'btn','ev:onclick':'scwin.btn_Init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Add',type:'button',class:'btn','ev:onclick':'scwin.btn_Add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Esc',style:'',type:'button','ev:onclick':'scwin.btn_Esc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav',style:'',type:'button','ev:onclick':'scwin.btn_Sav_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del',style:'',type:'button','ev:onclick':'scwin.btn_Del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})