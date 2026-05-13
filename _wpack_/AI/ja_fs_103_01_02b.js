/*amd /AI/ja_fs_103_01_02b.xml 27114 0b4e6e4f9480e591a74a9d8f13401fa761695799a7b97a7ef1b9055a15d7f566 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_purchaseCertiQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'정산부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitPic',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtSt',name:'전표일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'전표일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'세금계산서공급일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'세금계산서공급일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitPic',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'세금계산서공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_purchaseCertiQueryConditionDTO',action:'/ja.ds.fs.adjm.pchsadjmdcsn.JaRetrievePurchaseEvidenceListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_purchaseCertiQueryConditionDTO","key":"IN_DS1"},{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_purchaseCertiQueryConditionDTO_submitdone','ev:submiterror':'scwin.sbm_purchaseCertiQueryConditionDTO_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSlip',action:'/ja.ds.fs.adjm.pchsadjmdcsn.JaCancelSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_purchaseEvidenceList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_cancelSlip_submitdone','ev:submiterror':'scwin.sbm_cancelSlip_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.vCurDate = "";
scwin.vQryStDt = "";
scwin.vQryEndDt = "";
scwin.empNo = "";
scwin.privAdmin = "";
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.hd_acctCdGbn = "";
scwin.hd_acctDeptCdGbn = "";
scwin.ACConstants_CO_CLS_CD_DONGBU = "0";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01";
  scwin.vQryEndDt = scwin.vCurDate;
  scwin.empNo = $c.ses.getUserId();
  scwin.privAdmin = $c.ses.getPrivAdmin();
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.ses.getCoCd()) ? "" : $c.ses.getCoCd();
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.ses.getCoClsCd()) ? "" : $c.ses.getCoClsCd();
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd();
  scwin.vCoCd = scwin.vLoginCoCd;
  scwin.vCoClsCd = scwin.vLoginCoClsCd;
};
scwin.onUdcCompleted = function () {
  scwin.f_SetDefaultData();
  $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  scwin.f_setCompanyInfo();
};
scwin.f_setCompanyInfo = function () {
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo("T");
  $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm]);
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  let rtnList = $c.gus.cfCommonPopUp($p, "retrieveDongbuGroupCompanyInfo", ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.hd_coCd_hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]);
    txt_coNm.setValue(rtnList[5]);
    scwin.hd_coCd_hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    scwin.hd_coCd_hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > scwin.ACConstants_CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_pchsDeptCd, txt_pchsDeptNm]);
  $c.gus.cfInitObjects($p, [ed_pchsClntNo, txt_pchsClntNm]);
};
scwin.f_SetDefaultData = function () {
  udc_slipDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  acb_dcsnClsCd.setSelectedIndex(0);
  ed_pchsDeptCd.setFocus();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrievePurchaseEvidenceList();
};
scwin.f_RetrievePurchaseEvidenceList = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_pchsDeptCd, ica_slipDtSt, ica_slipDtEnd]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_slipDtSt.getValue(), ica_slipDtEnd.getValue())) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_slipDtSt.setFocus();
    return;
  }
  scwin.f_ProcessBinding();
  await $c.sbm.execute($p, sbm_purchaseCertiQueryConditionDTO);
};
scwin.f_ProcessBinding = function () {
  ds_purchaseCertiQueryConditionDTO.set("coCd", ed_coCd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsDeptCd", ed_pchsDeptCd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("admitPic", ed_admitPic.getValue());
  ds_purchaseCertiQueryConditionDTO.set("slipDtSt", ica_slipDtSt.getValue());
  ds_purchaseCertiQueryConditionDTO.set("slipDtEnd", ica_slipDtEnd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsClntNo", ed_pchsClntNo.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsIntendDtSt", ica_pchsIntendDtSt.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsIntendDtEnd", ica_pchsIntendDtEnd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("dcsnClsCd", acb_dcsnClsCd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("slipNo", ed_slipNo.getValue());
};
scwin.sbm_purchaseCertiQueryConditionDTO_submitdone = async function (e) {
  let rowCnt = ds_purchaseEvidenceList.getRowCount();
  gr_purchaseEvidenceList.setColumnProp("chk", "headCheck", false);
  spa_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  }
};
scwin.sbm_purchaseCertiQueryConditionDTO_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.responseJSON ? e.responseJSON.message : e.message);
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_CancelSlip();
};
scwin.f_CancelSlip = async function () {
  if (!ds_purchaseEvidenceList.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]);
    return;
  }
  let chk = await $c.win.confirm($p, "전표를 삭제하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_cancelSlip);
  }
};
scwin.sbm_cancelSlip_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_RetrievePurchaseEvidenceList();
};
scwin.sbm_cancelSlip_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_RunExcel = async function (value) {
  let count = ds_purchaseEvidenceList.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    $c.data.downloadGridViewExcel($p, gr_purchaseEvidenceList, {
      fileName: "매입전표 조회 및 삭제.xlsx",
      sheetName: "매입전표 조회 및 삭제"
    });
  }
};
scwin.gr_purchaseEvidenceList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    for (let i = 0; i < ds_purchaseEvidenceList.getRowCount(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T" && ds_purchaseEvidenceList.getCellData(i, "dcsnClsCd") != "3") {
        ds_purchaseEvidenceList.setCellData(i, "chk", "F");
        await $c.gus.cfAlertMsg($p, "확정구분이 계산서작성인 경우만 가능합니다.");
        return;
      }
    }
    let cnt = 0;
    for (let i = 0; i < ds_purchaseEvidenceList.getRowCount(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
        cnt++;
      }
    }
    if (cnt > 1) {
      ds_purchaseEvidenceList.setCellData(ds_purchaseEvidenceList.getRowPosition(), "chk", "F");
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["1건"]);
      return;
    }
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array();
  let qryYear = scwin.vCurDate.substring(0, 4);
  switch (disGubun) {
    case 1:
      let param1 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo6", ed_pchsDeptCd.getValue().trim(), txt_pchsDeptNm.getValue(), "T", null, null, null, null, param1, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_pchsDeptCd, txt_pchsDeptNm, rtnList);
      break;
    case 2:
      let param2 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveEmpInfo3", pCode.trim(), pName, pClose, null, null, null, null, param2, null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_admitPic, txt_admitPicNm);
      break;
    case 3:
      let param3 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_pchsClntNo.getValue().trim(), txt_pchsClntNm.getValue(), "T", null, null, null, null, param3, null, null, null, null);
      scwin.f_resultPopEd(ed_pchsClntNo, txt_pchsClntNm, rtnList);
      break;
    default:
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, [ed_pchsDeptCd, txt_pchsDeptNm, ed_admitPic, txt_admitPicNm, ed_pchsClntNo, txt_pchsClntNm, ica_slipDtSt, ica_slipDtEnd, ica_pchsIntendDtSt, ica_pchsIntendDtEnd, acb_dcsnClsCd, ed_slipNo]);
  scwin.f_SetDefaultData();
};
scwin.f_deptPopUp = function (deptCd, deptNm) {
  let param = scwin.vQryEndDt;
  if (scwin.vCoClsCd > scwin.ACConstants_CO_CLS_CD_DONGBU) {
    param = param + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  let paramArray = {};
  paramArray.pSelectID = "retrieveAcctDeptCdInfo6";
  paramArray.pCode = deptCd;
  paramArray.pName = deptNm;
  paramArray.pWhere = param;
  let rtnList = scwin.f_PopUp2(paramArray);
};
scwin.f_PopUp2 = function (paramArray) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  let rtnList = $c.gus.cfCommonPopUp($p, paramArray.pSelectID, $c.gus.cfGetValue($p, codeObj), "", scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetValue($p, codeObj, rtnList[0]);
      if (codeObj.hidVal !== undefined) {
        codeObj.hidVal = rtnList[0];
      }
      $c.gus.cfSetValue($p, nameObj, rtnList[1]);
    }
  } else {
    $c.gus.cfSetValue($p, codeObj, "");
    if (codeObj.hidVal !== undefined) {
      codeObj.hidVal = "";
    }
    $c.gus.cfSetValue($p, nameObj, "");
  }
  return rtnList;
};
scwin.f_EventCheck = function () {
  return "F";
};
scwin.f_openPopUp = function (flag, check) {
  let qryYear = scwin.vCurDate.substring(0, 4);
  let rtnList = new Array();
  switch (flag) {
    case "3":
      let param3 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo10", ed_bilgLodeptCd.getValue().trim(), txt_bilgLodeptNm.getValue(), check, null, null, null, null, param3, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_bilgLodeptCd, txt_bilgLodeptNm, rtnList);
      break;
    case "4":
      let param4 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_bilgClntNo.getValue().trim(), txt_bilgClntNm.getValue(), check, null, null, null, null, param4, null, null, null, null);
      scwin.f_resultPopEd(ed_bilgClntNo, txt_bilgClntNm, rtnList);
      break;
    case "5":
      let param5 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo10", ed_bilgLodeptCd.getValue().trim(), txt_bilgLodeptNm.getValue(), check, null, null, null, null, param5, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_bilgLodeptCd, txt_bilgLodeptNm, rtnList);
      break;
    case "6":
      let param6 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveAcctDeptCdInfo10", ed_pchsDeptCd.getValue().trim(), txt_pchsDeptNm.getValue(), check, null, null, null, null, param6, null, null, null, null, null, null, null, null, null, qryYear);
      scwin.f_resultPopEd(ed_pchsDeptCd, txt_pchsDeptNm, rtnList);
      break;
    case "7":
      let param7 = ",,," + ed_coCd.getValue();
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntList2", ed_pchsClntNo.getValue().trim(), txt_pchsClntNm.getValue(), check, null, null, null, null, param7, null, null, null, null);
      scwin.f_resultPopEd(ed_pchsClntNo, txt_pchsClntNm, rtnList);
      break;
    default:
      break;
  }
};
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]);
    strNm.setValue(rtnList[1]);
    if (strCd.hidVal !== undefined) {
      strCd.hidVal = rtnList[0];
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");
    if (strCd.hidVal !== undefined) {
      strCd.hidVal = "";
    }
  }
};
scwin.hd_coCd_hidVal = "";
scwin.udc_pchsDept_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 1);
};
scwin.udc_admitPic_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_admitPic, txt_admitPicNm, 2);
};
scwin.udc_pchsClnt_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 3);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_co',codeId:'ed_coCd',nameId:'txt_coNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_pchsDept',codeId:'ed_pchsDeptCd',nameId:'txt_pchsDeptNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_slipDt',edFromId:'ica_slipDtSt',edToId:'ica_slipDtEnd',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_admitPic',codeId:'ed_admitPic',nameId:'txt_admitPicNm',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_pchsClnt',codeId:'ed_pchsClntNo',nameId:'txt_pchsClntNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서 공급일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_pchsIntendDt',edFromId:'ica_pchsIntendDtSt',edToId:'ica_pchsIntendDtEnd',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dcsnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_purchaseCertiQueryConditionDTO.dcsnClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',placeholder:'',style:'width:150px;',ref:'data:ds_purchaseCertiQueryConditionDTO.slipNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_purchaseEvidenceList',id:'gr_purchaseEvidenceList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',width:'50',value:'',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmDept',inputType:'text',value:'정산부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitPic',inputType:'text',value:'작성자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsNm',inputType:'text',value:'확정<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNo',inputType:'text',value:'사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsVatNo',inputType:'text',value:'세금계산서<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',value:'세금계산서<br/>공급일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmDept',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitPic',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNo',inputType:'text',width:'100',readOnly:'true',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsVatNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column75',displayMode:'label',textAlign:'right',expression:'sum(\'spplyAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',expression:'sum(\'vat\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'sum(\'sumAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save','ev:onclick':'scwin.btn_Save_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]}]}]}]}]}]}]}]})