/*amd /AI/eq_610_01_02b.xml 46257 19c58497c906aeef08593b2faca4257cd8574d961d6ffb408142cd5d9271850d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilBizClsCd',name:'유류사업구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilUprrglClsCd',name:'유류단가유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilTskClsCd',name:'유류업무구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnSts',name:'확정상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payChkCd',name:'거래구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilUnitPrice',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'유류업무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'유류사업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilUprrglClsCd',name:'유류단가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprGasoline',name:'휘발유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLight',name:'경유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLpg',name:'LPG단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'시작수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toQty',name:'종료수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEndDt',name:'거래종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcUpr',name:'경유할인단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aaa',name:'실구매단가경유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSellClsCd',name:'유류판매구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매출거래처번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilPrice',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RegistFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveOilPrice_submitdone','ev:submiterror':'scwin.sbm_saveOilPrice_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOilPrice',action:'/ps.eq.fmsmgnt.fmsoilmgnt.ConfirmFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_confirmOilPrice_submitdone','ev:submiterror':'scwin.sbm_confirmOilPrice_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_fixEndDt',action:'/ps.eq.fmsmgnt.fmsoilmgnt.UpdateFixEndDtCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_fixEndDt_submitdone','ev:submiterror':'scwin.sbm_fixEndDt_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.clntNo = "125109";
scwin.clntNm = "지에스칼텍스(주)여수공장";
scwin.deptCd = "00276";
scwin.empNo = "";
scwin.epId = "";
scwin.vCurDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.empNo = $c.ses.getEmpNo();
  scwin.epId = $c.ses.getEpId();
  ds_search.set("oilTskClsCd", "F");
  ds_search.set("oilBizClsCd", "01");
  ds_search.set("selpchClsCd", "01");
  ds_search.set("payChkCd", "Y");
  btn_confirmC.setStyle("visibility", "hidden");
  btn_confirmD.setStyle("visibility", "hidden");
  let codeOptions = [{
    grpCd: "TL103",
    compID: "gr_oilUnitPrice:oilTskClsCd"
  }, {
    grpCd: "TL100",
    compID: "gr_oilUnitPrice:oilBizClsCd"
  }, {
    grpCd: "TL101",
    compID: "gr_oilUnitPrice:selpchClsCd"
  }, {
    grpCd: "TL113",
    compID: "lc_oilUprrglClsCd,gr_oilUnitPrice:oilUprrglClsCd"
  }, {
    grpCd: "TL201",
    compID: "gr_oilUnitPrice:clntNm"
  }, {
    grpCd: "ZZ021",
    compID: "gr_oilUnitPrice:apprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  let stdDtVal = scwin.vCurDate.substring(0, 6) + "01";
  udc_stEndDt.setInitDate(stdDtVal, scwin.vCurDate);
  lc_dcsnSts.removeAll();
  lc_dcsnSts.addItem({
    label: "전체",
    value: ""
  });
  lc_dcsnSts.addItem({
    label: "미확정",
    value: "0"
  });
  lc_dcsnSts.addItem({
    label: "확정",
    value: "1"
  });
  lc_dcsnSts.setSelectedIndex(0);
  scwin.f_Retrieve();
  ica_stdDt.setFocus();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_confirmC_onclick = function (e) {
  scwin.f_Confirm("1");
};
scwin.btn_confirmD_onclick = function (e) {
  scwin.f_Confirm("0");
};
scwin.btn_elecApprove_onclick = function (e) {
  scwin.f_RequestElectronicApprove();
};
scwin.btn_fixEndDt_onclick = function (e) {
  scwin.f_fixEndDt();
};
scwin.f_grdHeight = function (size) {
  let strHeight = gr_oilUnitPrice.getStyle("height");
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gr_oilUnitPrice.setStyle("height", intHeight + "px");
  }
};
scwin.f_Excel = function () {
  let count = ds_oilUnitPrice.getRowCount();
  if (!(count > 0)) return;
  let payClsNm = "";
  if (ds_oilUnitPrice.getCellData(0, "oilUprrglClsCd") == "01") {
    payClsNm = "[여신거래]";
  } else if (ds_oilUnitPrice.getCellData(0, "oilUprrglClsCd") == "10") {
    payClsNm = "[현물거래]";
  }
  $c.data.downloadGridViewExcel($p, gr_oilUnitPrice, {
    fileName: "유류구매공장도단가" + payClsNm + ".xlsx",
    sheetName: "유류구매공장도단가" + payClsNm
  });
};
scwin.f_setqrynm = function (tname, str) {
  // TODO: WebSquare 엑셀 타이틀 설정 방식으로 대체 필요
};
scwin.f_CheckAdptDt = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_stdDt, ica_endDt]);
  if (!chk) return false;
  if (!$c.gus.cfIsAfterDate($p, ica_stdDt.getValue(), ica_endDt.getValue(), false)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_stdDt.setFocus();
    return false;
  }
  return true;
};
scwin.f_Retrieve = async function () {
  let vChkVal = await scwin.f_CheckAdptDt();
  if (!vChkVal) {
    return false;
  }
  await $c.sbm.execute($p, sbm_retrieve);
  gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", true);
  gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", true);
  gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", true);
  gr_oilUnitPrice.setColumnReadOnly("clntNo", true);
  gr_oilUnitPrice.setColumnReadOnly("clntNm", true);
  gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", true);
  gr_oilUnitPrice.setColumnReadOnly("oilkndCd", true);
  gr_oilUnitPrice.setColumnReadOnly("stdDt", true);
  gr_oilUnitPrice.setColumnReadOnly("endDt", true);
  gr_oilUnitPrice.setColumnReadOnly("dcUpr", true);
};
scwin.f_Save = async function () {
  if (ds_oilUnitPrice.getUpdatedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["유류단가 그리드"]);
    return;
  }
  let chkValid = await $c.gus.cfValidate($p, [gr_oilUnitPrice]);
  if (!chkValid) return;
  let chkConfirm = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
  if (chkConfirm == true) {
    await $c.sbm.execute($p, sbm_saveOilPrice);
  }
};
scwin.f_Check = async function () {
  let chk = await $c.gus.cfValidateGrid($p, gr_oilUnitPrice);
  if (!chk) {
    return false;
  }
  return true;
};
scwin.f_AddRow = async function () {
  let chk = await scwin.f_Check();
  if (!chk) {
    return;
  }
  let newIdx = $c.data.insertRow($p, ds_oilUnitPrice);
  let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ds_oilUnitPrice.setCellData(newIdx, "stdDt", curDate);
  ds_oilUnitPrice.setCellData(newIdx, "endDt", "99999999");
  ds_oilUnitPrice.setCellData(newIdx, "oilTskClsCd", "F");
  ds_oilUnitPrice.setCellData(newIdx, "oilBizClsCd", "01");
  ds_oilUnitPrice.setCellData(newIdx, "selpchClsCd", "01");
  ds_oilUnitPrice.setCellData(newIdx, "oilUprrglClsCd", lc_oilUprrglClsCd.getValue());
  if (newIdx > 0) {
    ds_oilUnitPrice.setCellData(newIdx, "oilkndCd", ds_oilUnitPrice.getCellData(newIdx - 1, "oilkndCd"));
  }
  ds_oilUnitPrice.setCellData(newIdx, "bilgAcctDeptCd", scwin.deptCd);
  ds_oilUnitPrice.setCellData(newIdx, "sellAcctDeptCd", scwin.deptCd);
  ds_oilUnitPrice.setCellData(newIdx, "clntNo", scwin.clntNo);
  ds_oilUnitPrice.setCellData(newIdx, "clntNm", scwin.clntNm);
  ds_oilUnitPrice.setCellData(newIdx, "qty", "1");
  ds_oilUnitPrice.setCellData(newIdx, "toQty", "9999999999");
  gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", false);
  gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", false);
  gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", false);
  gr_oilUnitPrice.setColumnReadOnly("clntNo", false);
  gr_oilUnitPrice.setColumnReadOnly("clntNm", true);
  gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", false);
  gr_oilUnitPrice.setColumnReadOnly("oilkndCd", false);
  gr_oilUnitPrice.setColumnReadOnly("stdDt", false);
  gr_oilUnitPrice.setColumnReadOnly("endDt", true);
  gr_oilUnitPrice.setColumnReadOnly("dcUpr", true);
};
scwin.f_DelRow = async function () {
  if (ds_oilUnitPrice.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let chkCnt = 0;
  for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
    if (ds_oilUnitPrice.getCellData(i, "selYn") == "T") {
      let tempStdCd = ds_oilUnitPrice.getCellData(i, "apprvStsCd");
      if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 항목은 삭제 할 수 없습니다.\n결재상태를 확인해 주시기바랍니다.");
        ds_oilUnitPrice.setRowPosition(i);
        gr_oilUnitPrice.setFocusedCell(i, "apprvStsCd");
        return;
      }
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]);
    return;
  }
  ds_oilUnitPrice.removeRow(ds_oilUnitPrice.getRowPosition());
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = [];
  switch (disGubun) {
    case 1:
      udc_clnt.ilCommonPopUp(scwin.callbackClnt, pCode, pName, "T", null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callbackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};
scwin.f_checkflag = function () {
  for (let idx = 0; idx < ds_oilUnitPrice.getRowCount(); idx++) {
    if (ds_oilUnitPrice.getCellData(idx, "selYn") == "T") {
      return true;
    }
  }
  return false;
};
scwin.f_Confirm = async function (confirmYn) {
  let message = "";
  if (confirmYn == "1") {
    message = "확정";
  } else if (confirmYn == "0") {
    message = "확정취소";
  } else {
    return;
  }
  if (!scwin.f_checkflag()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    return;
  }
  for (let idx = 0; idx < ds_oilUnitPrice.getRowCount(); idx++) {
    if (ds_oilUnitPrice.getCellData(idx, "selYn") == "T") {
      if (confirmYn == "1" && ds_oilUnitPrice.getCellData(idx, "confYn") == "1") {
        await $c.gus.cfAlertMsg($p, idx + 1 + "번째 항목은 이미 확정된 항목 입니다.");
        ds_oilUnitPrice.setRowPosition(idx);
        gr_oilUnitPrice.setFocusedCell(idx, "stdDt");
        return;
      } else if (confirmYn == "0" && ds_oilUnitPrice.getCellData(idx, "confYn") == "0") {
        await $c.gus.cfAlertMsg($p, idx + 1 + "번째 항목은 아직 확정 되지 않은 항목 입니다.");
        ds_oilUnitPrice.setRowPosition(idx);
        gr_oilUnitPrice.setFocusedCell(idx, "stdDt");
        return;
      }
    }
  }
  let chk = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_010, [message]);
  if (chk == true) {
    for (let idx = 0; idx < ds_oilUnitPrice.getRowCount(); idx++) {
      if (ds_oilUnitPrice.getCellData(idx, "selYn") == "T") {
        ds_oilUnitPrice.setCellData(idx, "confYn", confirmYn);
      }
    }
    await $c.sbm.execute($p, sbm_confirmOilPrice);
  }
};
scwin.f_RequestElectronicApprove = async function () {
  let toDay = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  let vReqApprvDocKndCd = "021";
  let vReqUserId = scwin.empNo;
  let vEpUsrId = scwin.epId;
  let fineInfo = scwin.f_getFineItemList();
  if (fineInfo.itemSize == 0) {
    await $c.gus.cfAlertMsg($p, "전자결재 대상을 선택해주십시오.");
    return false;
  }
  let payClsNm = "";
  for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
    if (ds_oilUnitPrice.getCellData(i, "selYn") == "T") {
      let tempStdCd = ds_oilUnitPrice.getCellData(i, "apprvStsCd");
      if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 항목은 전자결재를 진행 할 수 없습니다.\n결재상태를 확인해 주시기바랍니다.");
        ds_oilUnitPrice.setRowPosition(i);
        gr_oilUnitPrice.setFocusedCell(i, "apprvStsCd");
        return;
      }
      if (payClsNm == "") {
        if (ds_oilUnitPrice.getCellData(i, "oilUprrglClsCd") == "01") {
          payClsNm = "[여신거래]";
        } else if (ds_oilUnitPrice.getCellData(i, "oilUprrglClsCd") == "10") {
          payClsNm = "[현물거래]";
        }
      }
    }
  }
  if (vEpUsrId == "") {}
  let confirmResult = await $c.win.confirm($p, "전자결재 요청하시겠습니까?");
  if (confirmResult != true) {
    return;
  }
  let vReqApprvTitle = "FMS 유류구매 및 자가사용 공장도단가" + payClsNm + " 승인요청_" + toDay;
  let styleTb = 'class=tb';
  let vApprvDtlInfo = '\x3Chead>';
  vApprvDtlInfo += '<style type=text/css>';
  vApprvDtlInfo += '	.tb { ';
  vApprvDtlInfo += '		border-top:solid 1px #000000;';
  vApprvDtlInfo += '		border-right:solid 1px #000000;';
  vApprvDtlInfo += '		border-left:solid 1px #000000; ';
  vApprvDtlInfo += '		border-bottom:solid 1px #000000;';
  vApprvDtlInfo += '	}';
  vApprvDtlInfo += '</style>';
  vApprvDtlInfo += '\x3C/head>';
  vApprvDtlInfo += '\x3Cbody align=center>';
  vApprvDtlInfo += '<table width=850 cellspacing=0 cellpadding=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td height=35 align=center ' + styleTb + '>제 목</td>';
  vApprvDtlInfo += '		<td ' + styleTb + '><b>FMS 유류구매 및 자가사용 공장도단가' + payClsNm + ' 승인요청 -  (' + toDay + ')</b></td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td colspan=2 ' + styleTb + '>';
  vApprvDtlInfo += '			<table width=850 border=0>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아래와 같이 FMS 및 자가사용 유류공장도단가' + payClsNm + '를 확정하고자 하오니 승인하여 주시기 바랍니다.</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 align=center><font face=굴림><b>- 아&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;래 -</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td><font face=굴림><b>1. FMS 유류구매 및 자가사용 공장도단가' + payClsNm + ' 내역</b></font></td>';
  vApprvDtlInfo += '					<td align=right>(단위:리터/원, VAT포함)</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 align=right>';
  vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '							<col width=150 align=left></col>';
  vApprvDtlInfo += '							<col width=100 align=left></col>';
  vApprvDtlInfo += '							<col width=300 align=right></col>';
  vApprvDtlInfo += '							<col width=150 align=right></col>';
  vApprvDtlInfo += '							<col width=150 align=right></col>';
  vApprvDtlInfo += '							<col width=150 align=right></col>';
  vApprvDtlInfo += '							<col width=150 align=right></col>';
  vApprvDtlInfo += '							<tr>';
  vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>기준일자</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처코드</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>경유단가</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>등유단가</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>휘발유단가</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>종료일자</b></font></td>';
  vApprvDtlInfo += '							</tr>';
  let oilCount = 0;
  for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
    if (ds_oilUnitPrice.getCellData(i, "selYn") == "T") {
      let stdDt1 = ds_oilUnitPrice.getCellData(i, "stdDt");
      let endDt1 = ds_oilUnitPrice.getCellData(i, "endDt");
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림>' + stdDt1.substring(0, 4) + '/' + stdDt1.substring(4, 6) + '/' + stdDt1.substring(6, 8) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(i, "clntNo") + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(i, "clntNm") + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(ds_oilUnitPrice.getCellData(i, "uprLight"))) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(ds_oilUnitPrice.getCellData(i, "uprLpg"))) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(ds_oilUnitPrice.getCellData(i, "uprGasoline"))) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + endDt1.substring(0, 4) + '/' + endDt1.substring(4, 6) + '/' + endDt1.substring(6, 8) + '</font></td>';
      vApprvDtlInfo += '							</tr>';
      oilCount++;
    }
  }
  vApprvDtlInfo += '						</table>';
  vApprvDtlInfo += '					</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td align=right colspan=2><font face=굴림><b>이상 ' + oilCount + '건</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '			</table>';
  vApprvDtlInfo += '		</td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '</table>';
  vApprvDtlInfo += '\x3C/body>';
  let approveData = {
    apprvDocKndCd: vReqApprvDocKndCd,
    reqUserId: vReqUserId,
    epUserId: vEpUsrId,
    apprvTitle: vReqApprvTitle,
    apprvDtlInfo: vApprvDtlInfo,
    OilunitPriceList: fineInfo.itemList,
    bmodifylines: "Y",
    bmodifybody: "Y",
    bmodifyattach: "Y"
  };

  // TODO: frmReqApprove.submit() 대체 — WebSquare form submit 또는 submission 방식으로 전환 필요
  let form = document.createElement("form");
  form.method = "post";
  form.action = "/ps.eq.fmsmgnt.RequestFmsOilUnitPriceApproveCMD.do";
  form.target = "_blank";
  for (let key in approveData) {
    let input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = approveData[key];
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
scwin.f_getSSOInfo = function () {
  let EXIST_YN = 0;
  let epUserId = "";
  try {
    EXIST_YN = SSOCheck.IsExist("GROUP");
  } catch (exception) {
    EXIST_YN = 0;
  }
  if (EXIST_YN == 1) {
    epUserId = SSOCheck.GetUID("GROUP");
  }
  return epUserId;
};
scwin.f_getFineItemList = function () {
  let oResult = {};
  oResult.itemList = "";
  oResult.itemSize = 0;
  oResult.itemTotal = 0;
  for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
    if (ds_oilUnitPrice.getCellData(i, "selYn") == "T") {
      if (oResult.itemList == "") {
        oResult.itemList += ds_oilUnitPrice.getCellData(i, "stdDt") + ":" + ds_oilUnitPrice.getCellData(i, "selpchClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilSellClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilTskClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilBizClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilUprrglClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "qty") + ":" + ds_oilUnitPrice.getCellData(i, "sellClntNo") + ":" + ds_oilUnitPrice.getCellData(i, "clntNo");
      } else {
        oResult.itemList += "," + ds_oilUnitPrice.getCellData(i, "stdDt") + ":" + ds_oilUnitPrice.getCellData(i, "selpchClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilSellClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilTskClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilBizClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "oilUprrglClsCd") + ":" + ds_oilUnitPrice.getCellData(i, "qty") + ":" + ds_oilUnitPrice.getCellData(i, "sellClntNo") + ":" + ds_oilUnitPrice.getCellData(i, "clntNo");
      }
      oResult.itemSize += 1;
      oResult.itemTotal += 1;
    }
  }
  return oResult;
};
scwin.f_fixEndDt = async function () {
  let chkValid = await $c.gus.cfValidate($p, [ed_fixEndDt]);
  if (!chkValid) return;
  if (!scwin.f_checkflag()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    return;
  }
  let cnt = 0;
  let chkConfirm = await $c.win.confirm($p, "거래를 종료하시겠습니까?");
  if (chkConfirm == true) {
    for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
      if (ds_oilUnitPrice.getCellData(i, "selYn") == "T") {
        if (ds_oilUnitPrice.getCellData(i, "endDt") != "99999999") {
          await $c.gus.cfAlertMsg($p, i + 1 + "번째 항목은 종료일자가 9999/99/99이 아닙니다.거래종료를 할수 없습니다.");
          return;
        } else if (!$c.gus.cfIsAfterDate($p, ds_oilUnitPrice.getCellData(i, "stdDt"), ed_fixEndDt.getValue(), false)) {
          await $c.gus.cfAlertMsg($p, "종료일자는 기준일자보다 이후이어야 합니다.");
          ed_fixEndDt.setFocus();
          return;
        }
        ds_oilUnitPrice.setCellData(i, "fixEndDt", ed_fixEndDt.getValue());
        cnt++;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_fixEndDt);
    }
  }
};
scwin.sbm_saveOilPrice_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_saveOilPrice_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_oilUnitPrice);
  totalRows.setValue(ds_oilUnitPrice.getRowCount());
  if (ds_oilUnitPrice.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_confirmOilPrice_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_confirmOilPrice_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_fixEndDt_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_fixEndDt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_oilUnitPrice_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "stdDt" || columnId == "endDt") {
    // TODO: 그리드 내 달력 팝업 — inputType="calendar"로 대체됨
  }
  if (columnId == "clntNo") {
    let data = ds_oilUnitPrice.getCellData(rowIndex, "clntNo");
    udc_clnt.ilCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_oilUnitPrice.setCellData(rowIndex, "clntNo", rtnList[0]);
        ds_oilUnitPrice.setCellData(rowIndex, "clntNm", rtnList[1]);
      }
    }, data, "", "T", null, null, null, null, null, null, null, null, null);
  }
  if (columnId == "bilgAcctDeptCd") {
    let data = ds_oilUnitPrice.getCellData(rowIndex, "bilgAcctDeptCd");
    // TODO: 부서코드 팝업 구현 필요
  }
  if (columnId == "sellAcctDeptCd") {
    let data = ds_oilUnitPrice.getCellData(rowIndex, "sellAcctDeptCd");
    // TODO: 매출귀속부서코드 팝업 구현 필요
  }
};
scwin.gr_oilUnitPrice_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  if (columnId == "clntNo") {
    udc_clnt.ilCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_oilUnitPrice.setCellData(rowIndex, "clntNo", rtnList[0]);
        ds_oilUnitPrice.setCellData(rowIndex, "clntNm", rtnList[1]);
      }
    }, ds_oilUnitPrice.getCellData(rowIndex, "clntNo"), "", "T", null, null, null, null, null, null, null, null, null);
  }
};
scwin.gr_oilUnitPrice_onrowindexchange = function (rowIndex, oldRowIndex) {
  if (rowIndex < 0) return;
  let rowStatus = ds_oilUnitPrice.getRowStatus(rowIndex);
  if (rowStatus == "R" || rowStatus == "D") {
    gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("clntNo", true);
    gr_oilUnitPrice.setColumnReadOnly("clntNm", true);
    gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("oilkndCd", true);
    gr_oilUnitPrice.setColumnReadOnly("stdDt", true);
    gr_oilUnitPrice.setColumnReadOnly("endDt", true);
    gr_oilUnitPrice.setColumnReadOnly("dcUpr", true);
  } else if (rowStatus == "C") {
    gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("clntNo", false);
    gr_oilUnitPrice.setColumnReadOnly("clntNm", true);
    gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("oilkndCd", false);
    gr_oilUnitPrice.setColumnReadOnly("stdDt", false);
    gr_oilUnitPrice.setColumnReadOnly("endDt", true);
    gr_oilUnitPrice.setColumnReadOnly("dcUpr", true);
  }
  let tempStdCd = ds_oilUnitPrice.getCellData(rowIndex, "apprvStsCd");
  if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
    gr_oilUnitPrice.setColumnReadOnly("stdDt", true);
    gr_oilUnitPrice.setColumnReadOnly("clntNo", true);
    gr_oilUnitPrice.setColumnReadOnly("uprLight", true);
    gr_oilUnitPrice.setColumnReadOnly("uprGasoline", true);
    gr_oilUnitPrice.setColumnReadOnly("uprLpg", true);
    gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("dcUpr", true);
  } else {
    if (rowStatus == "C" || rowStatus == "U") {
      gr_oilUnitPrice.setColumnReadOnly("stdDt", false);
      gr_oilUnitPrice.setColumnReadOnly("clntNo", false);
      gr_oilUnitPrice.setColumnReadOnly("uprLight", false);
      gr_oilUnitPrice.setColumnReadOnly("uprGasoline", false);
      gr_oilUnitPrice.setColumnReadOnly("uprLpg", false);
      gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", false);
      gr_oilUnitPrice.setColumnReadOnly("dcUpr", true);
    }
  }
};
scwin.gr_oilUnitPrice_onheaderclick = function (headerIndex, columnIndex, columnId) {
  if (columnId == "selYn" && ds_oilUnitPrice.getRowCount() > 0) {
    let allChecked = true;
    for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
      if (ds_oilUnitPrice.getCellData(i, "selYn") != "T") {
        allChecked = false;
        break;
      }
    }
    if (!allChecked) {
      for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
        ds_oilUnitPrice.setCellData(i, "selYn", "T");
      }
    } else {
      for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
        ds_oilUnitPrice.setCellData(i, "selYn", "F");
      }
    }
  }
};
scwin.udc_clnt_onblurCode = function () {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), "F", "F");
};
scwin.decode_confYn = function (data) {
  return $c.gus.decode($p, data, "1", "확정", "0", "미확정", "미확정");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_sub_contents',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_shbox',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_shbox_inner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_w2tb',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'grp_row1',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_stdDtLabel',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_stEndDt',refEdDt:'',edFromId:'ica_stdDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_clntLabel',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_clntTd',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'txt_clntNm',style:'',id:'udc_clnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'grp_dcsnStsth',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_dcsnStsLabel',label:'확정상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'grp_dcsnStstd',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dcsnSts',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.dcsnSts'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'grp_oilUprrglClsCdth',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_oilUprrglClsCdLabel',label:'거래구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'grp_oilUprrglClsCdtd',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilUprrglClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.oilUprrglClsCd',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'grp_btnShbox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_roundBox',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_titleWrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_title'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_gridTitle',label:'유류구매공장도단가관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_titleRight'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_oilUnitPrice',focusMode:'row',id:'gr_oilUnitPrice',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'text',style:'',value:'기준일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilTskClsCd',inputType:'text',style:'',value:'유류업무</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilBizClsCd',inputType:'text',style:'',value:'유류사업</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'text',style:'',value:'매출입</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilUprrglClsCd',inputType:'text',style:'',value:'거래</br>구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'거래처</br>코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'uprLight',inputType:'text',style:'',value:'경유</br>단가',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'uprGasoline',value:'휘발유</br>단가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'uprLpg',value:'등유</br>단가 ',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptCd',value:'청구귀속</br>부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'청구</br>귀속부서 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptCd',value:'매출귀속</br>부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptNm',value:'매출</br>귀속부서 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'endDt',value:'종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'confYn',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvStsCd',value:'결재</br>상태 ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcUpr',value:'할인단가<br/>경유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'aaa',value:'실구매단가<br/>경유(공급가)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fixEndDt',value:'종료일자',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'70',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilTskClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilBizClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilUprrglClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'uprLight',inputType:'text',style:'',value:'',width:'70',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'uprGasoline',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'uprLpg',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'bilgAcctDeptCd',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'sellAcctDeptCd',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'endDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'confYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvStsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcUpr',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'aaa',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fixEndDt',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'grp_gridBottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_gridBottomLeft',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_gridTotal'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalLabel1',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalLabel2',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'grp_gridBottomRight',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'grp_btnbox',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_btnboxLeft',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_elecApprove','ev:onclick':'scwin.btn_elecApprove_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_btnboxRight',style:''},E:[{T:1,N:'xf:group',A:{id:'grp_fixEndDt',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'tbx_fixEndDtLabel',label:'적용일자 ',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_fixEndDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true'}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_fixEndDt','ev:onclick':'scwin.btn_fixEndDt_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래종료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})