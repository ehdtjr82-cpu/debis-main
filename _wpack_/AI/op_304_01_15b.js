/*amd /AI/op_304_01_15b.xml 33668 d4f6ca9ee2630e98148af092019e14af2995da18d042b10bb9380b0dc4dffbd5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKnd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoCd',name:'협력업체',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtClntCd',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발지',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srchCond',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKnd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoCd',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntCd',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKnd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realSellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'내부매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'Line',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveBulkWorkResultsDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'scwin.sbm_retreive_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLobranCd = "";
scwin.vCurDate = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.strDate = "";
scwin.sLoUpperLobranCd = "";
scwin.ed_srchWrkStDt = "";
scwin.ed_srchWrkEndDt = "";
scwin.txt_srchMchtClntNo = "";
scwin.txt_srchCommCd = "";
scwin.txt_srchCopCoCd = "";
scwin.onpageload = function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm();
  scwin.sLobranCd = $c.ses.getLoUpperLobranCd();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate.substring(0, 8);
  scwin.strToDate = scwin.vCurDate;
  scwin.strDate = scwin.strFromDate;
  scwin.sLoUpperLobranCd = scwin.sLobranCd;
};
scwin.onUdcCompleted = function () {
  udc_srchWrkDt.setInitDate(scwin.strDate, scwin.strDate);
  let acb = lc_srchOdrKnd;
  if (scwin.sLoUpperLobranCd != "") {
    let idx = -1;
    let totalRow = acb.getItemCount ? acb.getItemCount() : 0;
    for (let i = 0; i < totalRow; i++) {
      if (acb.getItemValue(i) == scwin.sLoUpperLobranCd) {
        idx = i;
        break;
      }
    }
    if (idx > 0) {
      acb.setSelectedIndex(idx);
    } else {
      acb.setSelectedIndex(0);
    }
  } else {
    acb.setSelectedIndex(0);
  }
  acb.setFocus();
};
scwin.f_Retrieve = async function () {
  let chkFrom = await $c.gus.cfValidate($p, [ica_srchWrkStDt]);
  if (!chkFrom) {
    return;
  }
  let chkTo = await $c.gus.cfValidate($p, [ica_srchWrkEndDt]);
  if (!chkTo) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_srchWrkStDt.getValue(), ica_srchWrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_srchWrkStDt.setFocus();
    return;
  }
  dma_srchCond.set("lobranCd", lc_srchOdrKnd.getValue());
  dma_srchCond.set("wrkStDt", ica_srchWrkStDt.getValue());
  dma_srchCond.set("wrkEndDt", ica_srchWrkEndDt.getValue());
  dma_srchCond.set("mchtClntCd", txt_srchMchtClntNo.getValue());
  dma_srchCond.set("commCd", txt_srchCommCd.getValue());
  dma_srchCond.set("odrKnd", lc_srchOdrKnd.getValue());
  dma_srchCond.set("copCoCd", txt_srchCopCoCd.getValue());
  dma_srchCond.set("userId", ed_userId.getValue());
  dma_srchCond.set("dptWrkPlCd", em_dptWrkPlCd.getValue());
  dma_srchCond.set("arvWrkPlCd", em_arvWrkPlCd.getValue());
  $c.gus.cfShowDSWaitMsg($p, gr_cntrWrkRslts);
  await $c.sbm.execute($p, sbm_retreive);
};
scwin.sbm_retreive_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  if (ds_cntrWrkRslts.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  cntrWrkRsltsRows.setValue(ds_cntrWrkRslts.getTotalRow());
};
scwin.sbm_retreive_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  $c.gus.cfShowError($p, e);
};
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    udc_srchMchtClnt.ilCommonPopUp(scwin.callbackMchtClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
  } else if (disGubun == "2") {
    if (txt_srchMchtClntNo.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["청구처코드"]);
      txt_srchMchtClntNo.setFocus();
      return;
    }
    if (txt_srchMchtClntNm.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["청구처명"]);
      txt_srchMchtClntNm.setFocus();
      return;
    }
    let param = ",,,," + txt_srchMchtClntNo.getValue();
    udc_srchComm.ilCommonPopUp(scwin.callbackComm, pCode, pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch, "품명,품명코드,품명명");
  } else if (disGubun == "4") {
    udc_user.ilCommonPopUp(scwin.callbackUser, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
  } else if (disGubun == "5") {
    udc_dptWrkPl.ilCommonPopUp(scwin.callbackDptWrkPl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
  } else if (disGubun == "6") {
    udc_arvWrkPl.ilCommonPopUp(scwin.callbackArvWrkPl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
  } else {
    udc_srchCopCo.ilCommonPopUp(scwin.callbackCopCo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "협력업체,협력업체코드,협력업체명");
  }
};
scwin.callbackMchtClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_srchMchtClntNo, txt_srchMchtClntNm);
};
scwin.callbackComm = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_srchCommCd, txt_srchCommNm);
};
scwin.callbackUser = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_userId, txt_empNm);
};
scwin.callbackDptWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_dptWrkPlCd, txt_dptWrkPlNm);
};
scwin.callbackArvWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_arvWrkPlCd, txt_arvWrkPlNm);
};
scwin.callbackCopCo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_srchCopCoCd, txt_srchCopCoNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  udc_srchWrkDt.setInitDate(scwin.strDate, scwin.strDate);
};
scwin.f_toExcel1 = function () {
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, {
    fileName: "벌크작업실적 상세.xlsx",
    sheetName: "벌크 작업실적 상세"
  });
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_srchMchtClnt_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(txt_srchMchtClntNo, txt_srchMchtClntNm, "1");
};
scwin.udc_srchComm_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(txt_srchCommCd, txt_srchCommNm, "2");
};
scwin.udc_srchCopCo_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(txt_srchCopCoCd, txt_srchCopCoNm, "3");
};
scwin.udc_user_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_userId, txt_empNm, "4");
};
scwin.udc_dptWrkPl_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(em_dptWrkPlCd, txt_dptWrkPlNm, "5");
};
scwin.udc_dptWrkPl_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_dptWrkPlNm, em_dptWrkPlCd, 5, false);
};
scwin.udc_arvWrkPl_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(em_arvWrkPlCd, txt_arvWrkPlNm, "6");
};
scwin.udc_arvWrkPl_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_arvWrkPlNm, em_arvWrkPlCd, 6, false);
};
scwin.udc_srchMchtClnt_onClick = function () {
  scwin.f_openPopUp("1", txt_srchMchtClntNo.getValue(), txt_srchMchtClntNm.getValue(), "F", "F");
};
scwin.udc_srchComm_onClick = function () {
  scwin.f_openPopUp("2", txt_srchCommCd.getValue(), txt_srchCommNm.getValue(), "F", "F");
};
scwin.udc_srchCopCo_onClick = function () {
  scwin.f_openPopUp("3", txt_srchCopCoCd.getValue(), txt_srchCopCoNm.getValue(), "F", "F");
};
scwin.udc_user_onClick = function () {
  scwin.f_openPopUp("4", ed_userId.getValue(), txt_empNm.getValue(), "F", "F");
};
scwin.udc_dptWrkPl_onClick = function () {
  scwin.f_openPopUp("5", em_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), "F", "T");
};
scwin.udc_arvWrkPl_onClick = function () {
  scwin.f_openPopUp("6", em_arvWrkPlCd.getValue(), txt_arvWrkPlNm.getValue(), "F", "T");
};
scwin.udc_srchMchtClnt_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_srchMchtClntNm, txt_srchMchtClntNo, "1", false);
};
scwin.udc_srchComm_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_srchCommNm, txt_srchCommCd, "2", false);
};
scwin.udc_srchCopCo_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_srchCopCoNm, txt_srchCopCoCd, "3", false);
};
scwin.udc_user_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_empNm, ed_userId, "4", false);
};
scwin.co_lc_srchLobran_onchange = function (e) {
  // TODO: 원본 JSP에서 해당 이벤트 로직이 주석 처리되어 있음 (비활성 코드)
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchOdrKnd',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:ds_srchCond.odrKnd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchWrkDt',refDataMap:'',edFromId:'ica_srchWrkStDt',edToId:'ica_srchWrkEndDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_srchMchtClnt',codeId:'txt_srchMchtClntNo',nameId:'txt_srchMchtClntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_user',codeId:'ed_userId',nameId:'txt_empNm',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchOdrKnd',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:ds_srchCond.odrKnd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_srchComm',codeId:'txt_srchCommCd',nameId:'txt_srchCommNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_srchCopCo',codeId:'txt_srchCopCoCd',nameId:'txt_srchCopCoNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_dptWrkPl',codeId:'em_dptWrkPlCd',nameId:'txt_dptWrkPlNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_arvWrkPl',codeId:'em_arvWrkPlCd',nameId:'txt_arvWrkPlNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크 작업실적 상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_cntrWrkRslts',id:'gr_cntrWrkRslts',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'4',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',value:'화주<br/>오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',value:'청구처',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'To',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'수량<br/>(VAN)',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realSellAmt',inputType:'text',value:'매출액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',value:'매입액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',value:'From',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',value:'도착권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptDt',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDt',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoClntNm',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',value:'차량종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmNm',value:'차량규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'invoiceNo',value:'송장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',value:'내부매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndCd',value:'오더<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shpCoClntNm',value:'선사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslCd',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineCd',value:'Line',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'120',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realSellAmt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptDt',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDt',displayMode:'label',colMerge:'true',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoClntNm',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmNm',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'invoiceNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndCd',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'shpCoClntNm',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:' '}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'vsslCd',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:' '}]},{T:1,N:'w2:value',E:[{T:4,cdata:'null'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'lineCd',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:' '}]},{T:1,N:'w2:value',E:[{T:4,cdata:'null'}]}]}]}]}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column100',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'grossWt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'realSellAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column81',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'cbm\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'cntrWrkRsltsRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})