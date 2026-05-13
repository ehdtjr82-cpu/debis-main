/*amd /AI/fm_504_01_04b.xml 52088 a2509e77091da716a60247d092ff8604d3e9e45ff19f6c3b8eafe20f1a8cd29a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'siteCd',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'통장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromRecDate',name:'발행일자FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toRecDate',name:'발행일자TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDueDate',name:'만기일자FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDueDate',name:'만기일자TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regYn',name:'등록여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'divBilldebenture',name:'어음채권구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'siteCd',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'통장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromRecDate',name:'발행일자FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toRecDate',name:'발행일자TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDueDate',name:'만기일자FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDueDate',name:'만기일자TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regYn',name:'등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divBilldebenture',name:'어음채권구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkYn',name:'체크',dataType:'number'}},{T:1,N:'w2:column',A:{id:'siteCd',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'금융기관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'b2bType',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arNo',name:'매출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDate',name:'접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seqNo',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCorpNm',name:'구매업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDate',name:'매출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDate',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcCanDate',name:'할인가능일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcTotAmt',name:'할인누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcCanAmt',name:'할인가능금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCorpNo',name:'구매업체사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'b2bTypeNm',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNo',name:'부계약자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainCorpNo',name:'주계약자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'변경사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNm',name:'부계약사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'어음채권구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'어음채권구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoRegYn',name:'엑셀업로드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regYn',name:'등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billDivNo',name:'분할구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_XLS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'arNo',name:'매출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'어음채권구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCorpNm',name:'구매업체사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCorpNo',name:'구매업체사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDate',name:'접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDate',name:'매출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDate',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNo',name:'부계약자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNm',name:'부계약자사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'금융기관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDate',name:'발행일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveElecAcctRecvInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_acctRecv","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ac.fm.collmoneymgnt.billrecv.RegistElecAcctRecvInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_acctRecv","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'scwin.sbm_regist_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Delete',action:'/ac.fm.collmoneymgnt.billrecv.DeleteElecAcctRecvInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_acctRecv","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_Delete_submitdone','ev:submiterror':'scwin.sbm_Delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_excelRegist',action:'/ac.fm.collmoneymgnt.billrecv.RegistElecAcctRecvInfoExcelCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_acctRecv","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_excelRegist_submitdone','ev:submiterror':'scwin.sbm_excelRegist_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pos_groupCode = 0;
scwin.isUpdate = 0;
scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.today = "";
scwin.G_acctDeptCd = "";
scwin.G_acctDeptNm = "";
scwin.G_empNo = "";
scwin.G_empNm = "";
scwin.privAdmin = "";
scwin.txtCoClsCd = "";
scwin.CO_CLS_CD_DONGBU = "0";
scwin.CO_CD_DONGBU = "000";
scwin.SUBSIDIARY_USER_HOME_CLS_CD = "SA";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.today = scwin.vCurDate;
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.ses.getCoCd()) ? "" : $c.ses.getCoCd();
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.ses.getCoClsCd()) ? "" : $c.ses.getCoClsCd();
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd();
  scwin.G_acctDeptCd = $c.ses.getAcctDeptCd();
  scwin.G_acctDeptNm = $c.ses.getAcctDeptNm();
  scwin.G_empNo = $c.ses.getEmpNo();
  scwin.G_empNm = $c.ses.getUserNm();
  scwin.privAdmin = $c.ses.getPrivAdmin();
  scwin.f_Initial();
  scwin.f_setCompanyInfo();
  $c.gus.cfDisableBtn($p, [acb_delYn]);
};
scwin.onUdcCompleted = async function () {
  let strFromDate = scwin.vCurDate.substring(0, 6) + "01";
  udc_recDate.setInitDate(strFromDate, scwin.vCurDate);
};
scwin.f_Initial = async function () {};
scwin.f_OnFocus = async function () {
  let strFromDate = scwin.vCurDate.substring(0, 6) + "01";
  ica_fromRecDate.setValue(strFromDate);
  ica_toRecDate.setValue(scwin.vCurDate);
};
scwin.b_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ica_fromRecDate, ica_toRecDate]))) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_fromRecDate.getValue(), ica_toRecDate.getValue())) {
    await $c.win.alert($p, "발행일자의 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.");
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_fromDueDate.getValue(), ica_toDueDate.getValue())) {
    await $c.win.alert($p, "만기일자의 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.");
    return;
  }
  $c.gus.cfDisableBtn($p, [btn_Save]);
  dma_search.set("siteCd", ed_siteCd_04.getValue());
  dma_search.set("bankCd", ed_bankCd.getValue());
  dma_search.set("fromRecDate", ica_fromRecDate.getValue());
  dma_search.set("toRecDate", ica_toRecDate.getValue());
  dma_search.set("fromDueDate", ica_fromDueDate.getValue().trim());
  dma_search.set("toDueDate", ica_toDueDate.getValue().trim());
  dma_search.set("regYn", acb_regYn.getValue());
  dma_search.set("delYn", acb_delYn.getValue());
  dma_search.set("divBilldebenture", acb_divBilldebenture.getValue());
  dma_search.set("coCd", ed_coCd.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_Save_onclick = async function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  $c.gus.cfDisableBtn($p, [btn_Save]);
  if (!(await $c.gus.cfValidate($p, [ed_sclntNo, ed_trustBankCd, ed_sacctDeptCd_04]))) {
    $c.gus.cfEnableObj($p, btn_Save, true);
    b_retrieve.setDisabled(false);
    return;
  }
  if (!scwin.f_checkflag()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    $c.gus.cfEnableObj($p, btn_Save, true);
    b_retrieve.setDisabled(false);
    return;
  }
  let compareToday = null;
  let compareDueDate = null;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (ds_acctRecv.getCellData(i, "chkYn") == 1) {
      if (ds_acctRecv.getCellData(i, "status") == "만기일경과") {
        $c.gus.cfEnableObj($p, btn_Save, true);
        await $c.win.alert($p, "만기일경과인 데이터는 저장하실수 없습니다.");
        return;
      }
      compareToday = parseInt(scwin.today);
      compareDueDate = parseInt(ds_acctRecv.getCellData(i, "dueDate"));
      if (compareDueDate - compareToday < 0) {
        await $c.win.alert($p, "만기일이 지난 데이터는 저장할 수 없습니다. (" + (i + 1) + "번째열)");
        return;
      }
    }
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk == true) {
    await $c.sbm.execute($p, sbm_regist);
  } else {
    $c.gus.cfEnableObj($p, btn_Save, true);
  }
};
scwin.f_ChangeStatus = async function () {};
scwin.f_GridToExcel = async function (gr_groupCode, gridName) {
  if (ds_acctRecv.getRowCount() <= 0) {
    await $c.win.alert($p, "전자채권 정보 내역이 존재하지않습니다.");
    return false;
  }
  $c.data.downloadGridViewExcel($p, gr_groupCode, gridName);
};
scwin.f_CheckPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.getUserData("hidVal")) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.getUserData("hidVal")) {
      return;
    } else {
      orgObjCd.setValue("");
      orgObjCd.setUserData("hidVal", "");
    }
  }
  if (select_code == "1" || select_code == "2" || select_code == "4") {
    scwin.checkSearch = false;
    scwin.checkSearch1 = false;
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.setUserData("hidVal", "");
  }
};
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  let rtnList = null;
  let cd = "";
  let nm = "";
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    case '1':
      let param1 = "" + ed_coCd.getValue();
      udc_sclnt.ilCommonPopUp(function (rtnListCb) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnListCb);
        scwin.checkSearch = false;
        scwin.checkSearch1 = false;
      }, cd, nm, "T", null, null, null, null, param1, null, null, null, null);
      break;
    case '2':
      let param2 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_sacctDeptCd_04.ilCommonPopUp(function (rtnListCb) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnListCb);
        scwin.checkSearch = false;
        scwin.checkSearch1 = false;
      }, cd, nm, "T", null, null, null, null, param2, "450", "500", null, null);
      break;
    case '3':
      let param3 = ",,,,," + ed_coCd.getValue();
      udc_trustBank.ilCommonPopUp(function (rtnListCb) {
        if (rtnListCb != null) {
          let tempbankbookNm = rtnListCb[1];
          rtnListCb[1] = rtnListCb[2];
          rtnListCb[2] = tempbankbookNm;
          scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnListCb);
        }
      }, cd, nm, "T", null, null, null, null, param3, null, null, null, null);
      break;
    case '4':
      udc_siteCd_04.ilCommonPopUp(function (rtnListCb) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnListCb);
      }, cd, nm, "T", null, null, null, null, null, null, null, null, null);
      break;
    case '5':
      let param5 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_sacctDeptCd_04.ilCommonPopUp(function (rtnListCb) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnListCb);
      }, cd, nm, "T", null, null, null, null, param5, "450", "500", null, null);
      break;
    case '6':
      udc_bank.ilCommonPopUp(function (rtnListCb) {
        if (rtnListCb != null) {
          ed_bankCd.setValue(rtnListCb[0]);
          ed_bankNm.setValue(rtnListCb[1]);
          scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnListCb);
        }
      }, cd, nm, "T", null, null, null, null, null, null, null, null, null);
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.f_resultPopUp = async function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]);
    orgObjNm.setValue(rtnList[1]);
    orgObjCd.setUserData("hidVal", rtnList[0]);
    orgObjNm.setUserData("hidVal", rtnList[1]);
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.setUserData("hidVal", "");
    orgObjNm.setUserData("hidVal", "");
  }
};
scwin.f_checkflag = async function () {
  let check_flag = "false";
  for (let idx = 0; idx < ds_acctRecv.getRowCount(); idx++) {
    if (ds_acctRecv.getCellData(idx, "chkYn") == 1) {
      check_flag = "true";
      ds_acctRecv.setCellData(idx, "clntNo", ed_sclntNo.getValue());
      ds_acctRecv.setCellData(idx, "trustBankbookNo", ed_trustBankCd.getValue());
      ds_acctRecv.setCellData(idx, "acctDeptCd", ed_sacctDeptCd_04.getValue());
      ds_acctRecv.setCellData(idx, "chgRsn", txt_chgRsn.getValue());
    }
  }
  if (check_flag == "true") {
    return true;
  } else {
    return false;
  }
};
scwin.btn_Del_onclick = async function (e) {
  scwin.f_Delete();
};
scwin.f_Delete = async function () {
  let chkCount = 0;
  let regYnCount = 0;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (ds_acctRecv.getCellData(i, "chkYn") == 1) {
      chkCount = chkCount + 1;
      if (ds_acctRecv.getCellData(i, "billRecvMgntNo") > 0) {
        regYnCount = regYnCount + 1;
      }
    }
  }
  if (chkCount == 0) {
    await $c.win.alert($p, "삭제할 데이터를 선택해주세요");
    return;
  }
  if (regYnCount != 0) {
    await $c.win.alert($p, "등록건이 선택되어 삭제할 수 없습니다.");
    return;
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (chk == true) {
    await $c.sbm.execute($p, sbm_Delete);
  }
};
scwin.btn_DelCancel_onclick = async function (e) {
  scwin.f_DeleteCancel();
};
scwin.f_DeleteCancel = async function () {
  let chkCount = 0;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (ds_acctRecv.getCellData(i, "chkYn") == 1) {
      chkCount = chkCount + 1;
      if (ds_acctRecv.getCellData(i, "delYn") == 0) {
        await $c.win.alert($p, "미삭제건은 삭제취소 하실 수 없습니다.");
      }
    }
  }
  if (chkCount == 0) {
    await $c.win.alert($p, "삭제취소 할 데이터를 선택해주세요");
    return;
  }
  let chk = await $c.win.confirm($p, "삭제취소하시겠습니까?");
  if (chk == true) {
    await $c.sbm.execute($p, sbm_Delete);
  }
};
scwin.drmFileSubmit = async function () {
  // TODO: cfDrmUploadFile 파일 업로드 처리 - WebSquare 파일 업로드 컴포넌트로 대체 필요
  $c.gus.cfDrmUploadFile($p, null, fileUploadGDS, "scwin.f_Upload");
};
scwin.f_Upload = async function () {
  ds_acctRecv.removeAll();
  ds_XLS.removeAll();

  // TODO: ds_XLS 데이터 로딩 - WebSquare 파일 업로드 후 데이터 바인딩 처리 필요
  $c.gus.cfProgressWinOpen($p);
  $p.setTimeout(function () {
    scwin.f_Import();
  }, {
    "delay": 1000
  });
};
scwin.f_Import = async function () {
  if (ds_XLS.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  let i = 0;
  for (i = 0; i < ds_XLS.getRowCount(); i++) {
    ds_acctRecv.insertRow();
    ds_acctRecv.setCellData(i, "arNo", ds_XLS.getCellData(i, "arNo").replace(/-/gi, ""));
    ds_acctRecv.setCellData(i, "billRecvAcctCd", ds_XLS.getCellData(i, "billRecvAcctCd"));
    ds_acctRecv.setCellData(i, "buyCorpNm", ds_XLS.getCellData(i, "buyCorpNm"));
    ds_acctRecv.setCellData(i, "buyCorpNo", ds_XLS.getCellData(i, "buyCorpNo").replace(/-/gi, ""));
    ds_acctRecv.setCellData(i, "arAmt", ds_XLS.getCellData(i, "arAmt"));
    ds_acctRecv.setCellData(i, "recDate", ds_XLS.getCellData(i, "recDate").replace(/-/gi, ""));
    ds_acctRecv.setCellData(i, "arDate", ds_XLS.getCellData(i, "arDate").replace(/-/gi, ""));
    ds_acctRecv.setCellData(i, "dueDate", ds_XLS.getCellData(i, "dueDate").replace(/-/gi, ""));
    ds_acctRecv.setCellData(i, "subCorpNo", ds_XLS.getCellData(i, "subCorpNo").replace(/-/gi, ""));
    ds_acctRecv.setCellData(i, "subCorpNm", ds_XLS.getCellData(i, "subCorpNm"));
    ds_acctRecv.setCellData(i, "bankNm", ds_XLS.getCellData(i, "bankNm"));
    ds_acctRecv.setCellData(i, "bankCd", ds_XLS.getCellData(i, "bankCd"));
    ds_acctRecv.setCellData(i, "autoRegYn", 1);
  }
  spa_totalRow.setValue(i);
  $c.gus.cfProgressWinClose($p);
  await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  ds_XLS.removeAll();
};
scwin.f_ExcelSave = async function () {
  if (!scwin.f_checkflag()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    return;
  }
  await $c.sbm.execute($p, sbm_excelRegist);
};
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  udc_co.ilCommonPopUp(function (rtnList) {
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      if (ed_coCd.getUserData("hidVal") != rtnList[0]) {
        scwin.f_initObj();
      }
      ed_coCd.setValue(rtnList[0]);
      txt_coNm.setValue(rtnList[5]);
      ed_coCd.setUserData("hidVal", rtnList[0]);
      scwin.txtCoClsCd = rtnList[1];
    } else {
      ed_coCd.setValue("");
      txt_coNm.setValue("");
      ed_coCd.setUserData("hidVal", "");
      scwin.txtCoClsCd = "";
    }
    if (scwin.txtCoClsCd > scwin.CO_CLS_CD_DONGBU) {
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
  }, ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.f_initObj = async function () {};
scwin.f_setCompanyInfo = async function () {
  if (scwin.vUserHomeClsCd != scwin.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = scwin.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = scwin.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo("T");
  if (scwin.privAdmin == "T" || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm]);
  }
};
scwin.gr_acctRecv_onheaderclick = async function (headerIndex, columnIndex, columnId) {
  if (columnId == "chkYn") {
    let bCheck = gr_acctRecv.getHeaderValue(headerIndex, columnIndex);
    if (bCheck == 1 || bCheck == true) {
      for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
        if (ds_acctRecv.getCellData(i, "billRecvMgntNo") == "") {
          if (ds_acctRecv.getCellData(i, "status") != "만기일경과") {
            if (ds_acctRecv.getCellData(i, "delYn") != "1") {
              ds_acctRecv.setCellData(i, columnId, 1);
            }
          }
        }
      }
    } else {
      for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
        ds_acctRecv.setCellData(i, columnId, 0);
      }
    }
  }
};
scwin.gr_acctRecv_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (ds_acctRecv.getCellData(rowIndex, "billRecvMgntNo") != "") {
      ed_sclntNo.setValue(ds_acctRecv.getCellData(rowIndex, "clntNo"));
      ed_sclntNm.setValue(ds_acctRecv.getCellData(rowIndex, "clntNm"));
      ed_trustBankCd.setValue(ds_acctRecv.getCellData(rowIndex, "trustBankbookNo"));
      ed_trustBankNm.setValue(ds_acctRecv.getCellData(rowIndex, "trustBankbookNm"));
      ed_sacctDeptCd_04.setValue(ds_acctRecv.getCellData(rowIndex, "acctDeptCd"));
      ed_sacctDeptNm.setValue(ds_acctRecv.getCellData(rowIndex, "acctDeptNm"));
      txt_chgRsn.setValue(ds_acctRecv.getCellData(rowIndex, "chgRsn"));
    } else {
      ed_sclntNo.setValue("");
      ed_sclntNm.setValue("");
      ed_trustBankCd.setValue("");
      ed_trustBankNm.setValue("");
      ed_sacctDeptCd_04.setValue("");
      ed_sacctDeptNm.setValue("");
      txt_chgRsn.setValue("");
    }
    if (columnId == "chkYn") {
      if (ds_acctRecv.getCellData(rowIndex, "billRecvMgntNo") != "") {
        ds_acctRecv.setCellData(rowIndex, columnId, 0);
        await $c.win.alert($p, "이미 등록되어 선택할 수 없습니다!");
      }
      if (ds_acctRecv.getCellData(rowIndex, "status") == "만기일경과") {
        ds_acctRecv.setCellData(rowIndex, columnId, 0);
        await $c.win.alert($p, "만기일이 경과하여 선택할 수 없습니다!");
      }
      let compareToday = parseInt(scwin.today);
      let compareDueDate = parseInt(ds_acctRecv.getCellData(rowIndex, "dueDate"));
      if (compareDueDate - compareToday < 0) {
        ds_acctRecv.setCellData(rowIndex, columnId, 0);
        await $c.win.alert($p, "만기일이 경과하여 선택할 수 없습니다!");
        return;
      }
      if (ds_acctRecv.getCellData(rowIndex, "billDivNo") == "00") {
        let count1 = 0;
        let count2 = 0;
        let rowPosionArno = ds_acctRecv.getCellData(rowIndex, "arNo");
        let rowPosionArAmto = ds_acctRecv.getCellData(rowIndex, "arAmt");
        for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
          if (rowPosionArno == ds_acctRecv.getCellData(i, "arNo")) {
            count1++;
            if (rowPosionArAmto == ds_acctRecv.getCellData(i, "arAmt")) {
              count2++;
            }
          }
        }
        if (count1 >= 2 && count2 < 2) {
          ds_acctRecv.setCellData(rowIndex, columnId, 0);
          await $c.win.alert($p, "이미 분할 된 건이라 선택할 수 없습니다.");
        }
      }
      if (ds_acctRecv.getCellData(rowIndex, "chkYn") == "1") {
        for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
          if (ds_acctRecv.getCellData(i, "chkYn") == "1") {
            if (ds_acctRecv.getCellData(rowIndex, "delYn") != ds_acctRecv.getCellData(i, "delYn")) {
              await $c.win.alert($p, "삭제건과 미삭제건은 동시에 선택하실 수 없습니다.");
              ds_acctRecv.setCellData(rowIndex, columnId, 0);
              return;
            }
          }
        }
        if (ds_acctRecv.getCellData(rowIndex, "delYn") == "1") {
          $c.gus.cfEnableBtnOnly($p, [btn_DelCancel]);
          $c.gus.cfDisableBtn($p, [btn_Del, btn_Save]);
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_Del, btn_Save]);
          $c.gus.cfDisableBtn($p, [btn_DelCancel]);
        }
      }
    }
  }
};
scwin.udc_siteCd_04_onblurCode = async function () {
  scwin.f_CheckPopUp(ed_siteCd_04, ed_siteCd_04Nm, '4', 'CD');
};
scwin.udc_siteCd_04_onblurName = async function () {
  scwin.f_CheckPopUp(ed_siteCd_04, ed_siteCd_04Nm, '4', 'NM');
};
scwin.udc_bank_onblurCode = async function () {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '6', 'CD');
};
scwin.udc_bank_onblurName = async function () {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '6', 'NM');
};
scwin.udc_sclnt_onblurCode = async function () {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};
scwin.udc_sclnt_onblurName = async function () {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};
scwin.udc_trustBank_onblurCode = async function () {
  scwin.f_CheckPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'CD');
};
scwin.udc_trustBank_onblurName = async function () {
  scwin.f_CheckPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'NM');
};
scwin.udc_sacctDeptCd_04_onblurCode = async function () {
  scwin.f_CheckPopUp(ed_sacctDeptCd_04, ed_sacctDeptNm, '2', 'CD');
};
scwin.udc_sacctDeptCd_04_onblurName = async function () {
  scwin.f_CheckPopUp(ed_sacctDeptCd_04, ed_sacctDeptNm, '2', 'NM');
};
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfEnableObj($p, btn_Save, true);
  b_retrieve.setDisabled(false);
  if (ds_acctRecv.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    spa_totalRow.setValue(ds_acctRecv.getRowCount());
    $c.gus.cfGoPrevPosition($p, ds_acctRecv, scwin.pos_groupCode);
  }
  $c.gus.cfEnableObj($p, btn_Save, true);
  b_retrieve.setDisabled(false);
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_regist_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $c.gus.cfEnableObj($p, btn_Save, true);
  b_retrieve.setDisabled(false);
  await $c.sbm.execute($p, sbm_retrieve);
  ed_sclntNo.setValue("");
  ed_sclntNm.setValue("");
  ed_trustBankCd.setValue("");
  ed_trustBankNm.setValue("");
  ed_sacctDeptCd_04.setValue("");
  ed_sacctDeptNm.setValue("");
  txt_chgRsn.setValue("");
};
scwin.sbm_regist_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  $c.gus.cfEnableObj($p, btn_Save, true);
  b_retrieve.setDisabled(false);
};
scwin.sbm_excelRegist_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_excelRegist_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_Delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_Delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'content',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_co',popupID:'',onloadCallbackFunc:'',selectID:'',codeId:'ed_coCd',popupTitle:'',nameId:'txt_coNm',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'접수일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_recDate',edFromId:'ica_fromRecDate',edToId:'ica_toRecDate',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dueDate',edFromId:'ica_fromDueDate',edToId:'ica_toDueDate',refStDt:'',refDataMap:'',style:'',refEdDt:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_regYn',style:'width: 150px;',submenuSize:'auto',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'채권/어음 구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_divBilldebenture',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_search.divBilldebenture',editType:'select'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bank',codeId:'ed_bankCd',nameId:'ed_bankNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_siteCd_04',codeId:'ed_siteCd_04',nameId:'ed_siteCd_04Nm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_delYn',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_search.delYn',editType:'select'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'b_retrieve','ev:onclick':'scwin.b_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'ds_acctRecv',id:'gr_acctRecv',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'3',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkYn',inputType:'checkbox',style:'',value:'',width:'70',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regYn',inputType:'text',style:'',value:'등록</br>여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',style:'',value:'삭제</br>여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctNm',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNm',inputType:'text',style:'',value:'구매업체명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arAmt',inputType:'text',style:'',value:'매출금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recDate',inputType:'text',style:'',value:'접수일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDate',inputType:'text',style:'',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNm',inputType:'text',style:'',value:'부계약자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNo',inputType:'text',style:'',value:'부계약자</br>사업자번호',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'billRecvMgntNo',value:'받을어음</br>관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'siteNm',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'bankNm',value:'금융기관명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arNo',value:'매출번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arDate',value:'매출일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'status',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcCanDate',value:'할인</br>가능일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcTotAmt',value:'할인누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcAmt',value:'할인금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'dcCanAmt',value:'할인가능금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'buyCorpNo',value:'구매업체</br>사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'b2bTypeNm',value:'거래번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mainCorpNo',value:'주계약자</br>사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'siteCd',value:'사업자</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankCd',value:'금융기관</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'b2bType',value:'상품</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seqNo',value:'일련</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'autoRegYn',value:'등록</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'billDivNo',value:'분할</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'billRecvAcctCd',value:'구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'trustBankbookNo',value:'수탁은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'trustBankbookNm',value:'수탁은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chgRsn',value:'변경사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkYn',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regYn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNm',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arAmt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recDate',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDate',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'billRecvMgntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'siteNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arDate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'status',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcCanDate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcTotAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'dcCanAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'buyCorpNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'b2bTypeNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mainCorpNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'siteCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'b2bType',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seqNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'autoRegYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'billDivNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'billRecvAcctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'trustBankbookNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'trustBankbookNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chgRsn',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column107',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_sclnt',popupID:'',onloadCallbackFunc:'',selectID:'',codeId:'ed_sclntNo',popupTitle:'',nameId:'ed_sclntNm',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁통장번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_trustBank',codeId:'ed_trustBankCd',nameId:'ed_trustBankNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구귀속',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_sacctDeptCd_04',codeId:'ed_sacctDeptCd_04',nameId:'ed_sacctDeptNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_chgRsn',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save','ev:onclick':'scwin.btn_Save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del','ev:onclick':'scwin.btn_Del_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_DelCancel','ev:onclick':'scwin.btn_DelCancel_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제취소'}]}]}]}]}]}]}]}]}]})