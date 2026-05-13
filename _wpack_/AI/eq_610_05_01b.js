/*amd /AI/eq_610_05_01b.xml 41626 e1eec04685aa60e079e9e0c474963395aa910c25e72ee5a70c41789d91176349 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'일자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqSelfTransYn',name:'운송구분(요청)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'realSelfTransYn',name:'운송구분(실적)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqOilStatNo',name:'입고주유소',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchRecent'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilBizClsCd',name:'유류사업구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilUprrglClsCd',name:'유류단가유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilTskClsCd',name:'유류사업구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnSts',name:'확정상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payChkCd',name:'거래구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilInOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqRegDt',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqInDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqSelfTransYn',name:'운송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNm',name:'요청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etc',name:'기타사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inConfYn',name:'입고확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSendDt',name:'sms전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realInDt',name:'실제입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realInQty',name:'실제입고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'입고정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realSelfTransYn',name:'실제자가운송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNo',name:'자가운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtClsCd',name:'일자구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqInHm',name:'요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqOilStatNo',name:'입고요청주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inSmsSendDt',name:'입고SMS전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqInPlace',name:'저유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqOilStatNm',name:'입고요청주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inYn',name:'입고요청여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_upDown'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'upDown',name:'등락',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilUnitPrice'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLight',name:'경유단가',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveUpDown',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilPriceUpDownCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_upDown","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_upDown","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveUpDown_submitdone','ev:submiterror':'scwin.sbm_retrieveUpDown_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_oilInOut","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilInOut","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilOrder',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveOilOrder_submitdone','ev:submiterror':'scwin.sbm_saveOilOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_fix',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_fix_submitdone','ev:submiterror':'scwin.sbm_fix_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cancle',action:'/ps.eq.fmsmgnt.fmsoilmgnt.SaveFmsOilOrderContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_oilInOut","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_cancle_submitdone','ev:submiterror':'scwin.sbm_cancle_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRecent',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_searchRecent","key":"IN_DS1"},{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveRecent_submitdone','ev:submiterror':'scwin.sbm_retrieveRecent_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.clntNo = "";
scwin.clntNm = "";
scwin.vCurDate = "";
scwin.ed_stdDt = "";
scwin.strPreMonthDate = "";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.ed_stdDt = scwin.vCurDate.substring(0, 6) + "01";
  scwin.strPreMonthDate = $c.date.addMonth($p, scwin.vCurDate, -1);
  scwin.clntNo = $c.ses.getClntNo();
  scwin.clntNm = $c.ses.getClntNm();
  acb_dtClsCd.setValue("0");
  acb_reqSelfTransYn.setValue("2");
  scwin.f_retrieveOilPrice();
  scwin.f_getRecentPrice();
};
scwin.onUdcCompleted = async function () {
  udc_dt.setInitDate(scwin.ed_stdDt, scwin.vCurDate);
  if (scwin.clntNo != null && scwin.clntNo != "") {
    ed_clntNo.setValue(scwin.clntNo);
    txt_clntNm.setValue(scwin.clntNm);
    $c.gus.cfDisableObjects($p, [ed_clntNo, txt_clntNm]);
  }
};
scwin.f_getRecentPrice = async function () {
  ds_searchRecent.set("oilBizClsCd", "01");
  ds_searchRecent.set("selpchClsCd", "01");
  ds_searchRecent.set("oilUprrglClsCd", "01");
  ds_searchRecent.set("stdDt", scwin.strPreMonthDate);
  ds_searchRecent.set("oilTskClsCd", "F");
  ds_searchRecent.set("endDt", scwin.vCurDate);
  ds_searchRecent.set("clntNo", "244974");
  ds_searchRecent.set("payChkCd", "Y");
  await $c.sbm.execute($p, sbm_retrieveRecent);
};
scwin.f_retrieveOilPrice = async function () {
  ds_search.set("endDt", scwin.vCurDate);
  ds_search.set("oilkndCd", "01");
  await $c.sbm.execute($p, sbm_retrieveUpDown);
};
scwin.f_grdHeiht = function (size) {
  let strHeight = gr_oilInOut.getStyle("height");
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gr_oilInOut.setStyle("height", intHeight + "px");
  }
};
scwin.f_Excel = function () {
  let count = ds_oilInOut.getRowCount();
  if (!(count > 0)) return;
  $c.data.downloadGridViewExcel($p, gr_oilInOut, {
    fileName: "유류구매요청내역.xlsx",
    sheetName: "유류구매요청내역"
  });
};
scwin.f_setqrynm = function (tname, str) {
  let vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  gr_oilInOut.setExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption);
};
scwin.f_CheckAdptDt = async function () {
  let vAdptStDt = ica_stdDt.getValue();
  let vAdptEndDt = ica_endDt.getValue();
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    await $c.win.alert($p, "적용시작일자를 정확하게 입력해주십시오.");
    ica_stdDt.setFocus();
    return false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    await $c.win.alert($p, "적용종료일자를 정확하게 입력해주십시오.");
    ica_endDt.setFocus();
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [ica_stdDt, ica_endDt]);
  if (!chk) return false;
  if (!$c.gus.cfIsAfterDate($p, ica_stdDt.getValue(), ica_endDt.getValue(), false)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_stdDt.setFocus();
    return false;
  }
  return true;
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  let vChkVal = await scwin.f_CheckAdptDt();
  if (!vChkVal) {
    return false;
  }
  ds_search.set("realSelfTransYn", "2");
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_save_onclick = async function (e) {
  let label = e.target.innerText || "";
  if (label.indexOf("입고요청") > -1 && label.indexOf("취소") == -1) {
    await scwin.f_Fix();
  } else if (label.indexOf("요청취소") > -1) {
    await scwin.f_Cancle();
  } else if (label.indexOf("저장") > -1) {
    await scwin.f_Save();
  }
};
scwin.f_Save = async function () {
  if (!ds_oilInOut.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  let chk = await $c.gus.cfValidate($p, [gr_oilInOut]);
  if (!chk) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "reqSelfTransYn") == "1" && ds_oilInOut.getCellData(i, "transVehclNo") == "") {
      await $c.win.alert($p, i + 1 + "번째행 자가운송일때 차량번호는 필수입력입니다.");
      return;
    }
  }
  let confirmChk = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001);
  if (confirmChk == true) {
    await $c.sbm.execute($p, sbm_saveOilOrder);
  }
};
scwin.f_Fix = async function () {
  let chkResult = await scwin.f_Chk();
  if (chkResult == false) {
    return;
  }
  let chk = await $c.gus.cfValidate($p, [gr_oilInOut]);
  if (!chk) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") != "0") {
      await $c.win.alert($p, i + 1 + "번째행은 대기상태가 아닙니다.");
      return;
    }
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "reqSelfTransYn") == "1" && ds_oilInOut.getCellData(i, "transVehclNo") == "") {
      await $c.win.alert($p, i + 1 + "번째행 자가운송일때 차량번호는 필수입력입니다.");
      return;
    }
  }
  let cnt = 0;
  let confirmChk = await $c.win.confirm($p, "입고요청을 하시겠습니까?");
  if (confirmChk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") == "0") {
        ds_oilInOut.setCellData(i, "inYn", "F");
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_fix);
    }
  }
};
scwin.f_Cancle = async function () {
  let chkResult = await scwin.f_Chk();
  if (chkResult == false) {
    return;
  }
  let chk = await $c.gus.cfValidate($p, [gr_oilInOut]);
  if (!chk) {
    return;
  }
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") != "1") {
      await $c.win.alert($p, i + 1 + "번째행은 요청상태가 아닙니다.");
      return;
    }
  }
  let cnt = 0;
  let confirmChk = await $c.win.confirm($p, "입고요청을 취소하시겠습니까?");
  if (confirmChk == true) {
    for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
      if (ds_oilInOut.getCellData(i, "chk") == "T" && ds_oilInOut.getCellData(i, "stsCd") == "1") {
        ds_oilInOut.setCellData(i, "inYn", "C");
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      await $c.sbm.execute($p, sbm_cancle);
    }
  }
};
scwin.f_Chk = async function () {
  let newOrderFlag = "F";
  for (let i = 0; i < ds_oilInOut.getRowCount(); i++) {
    if (ds_oilInOut.getCellData(i, "chk") == "T") {
      newOrderFlag = "T";
    }
  }
  if (newOrderFlag == "F") {
    await $c.win.alert($p, "선택된 데이타가 존재하지 않습니다.");
    return false;
  }
};
scwin.f_AddRow = async function () {
  ds_oilInOut.insertRow();
  let rowPos = ds_oilInOut.getRowPosition();
  ds_oilInOut.setCellData(rowPos, "reqRegDt", scwin.vCurDate);
  ds_oilInOut.setCellData(rowPos, "reqInDt", scwin.vCurDate);
  ds_oilInOut.setCellData(rowPos, "stsCd", "0");
  ds_oilInOut.setCellData(rowPos, "reqSelfTransYn", "0");
  ds_oilInOut.setCellData(rowPos, "clntNo", ed_clntNo.getValue());
  ds_oilInOut.setCellData(rowPos, "clntNm", txt_clntNm.getValue());
  ds_oilInOut.setCellData(rowPos, "reqOilStatNo", ed_reqOilStatNo.getValue());
  ds_oilInOut.setCellData(rowPos, "reqOilStatNm", txt_reqOilStatNm.getValue());
  if (ed_reqOilStatNo.getValue() != "") {
    let clntNoVal = "";
    udc_reqOilStat.ilCommonPopUp(scwin.callbackAddRowOilStat, ed_reqOilStatNo.getValue(), "", "T", null, null, null, null, clntNoVal, null, null, null, null);
  }
  if (scwin.clntNo != null && scwin.clntNo != "") {
    ds_oilInOut.setCellData(rowPos, "clntNo", scwin.clntNo);
    ds_oilInOut.setCellData(rowPos, "clntNm", scwin.clntNm);
  }
};
scwin.callbackAddRowOilStat = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    let rowPos = ds_oilInOut.getRowPosition();
    ds_oilInOut.setCellData(rowPos, "reqOilStatNo", rtnList[0]);
    ds_oilInOut.setCellData(rowPos, "reqOilStatNm", rtnList[1]);
    ds_oilInOut.setCellData(rowPos, "mpNo", rtnList[2]);
    ds_oilInOut.setCellData(rowPos, "reqNm", rtnList[3]);
  }
};
scwin.f_DelRow = async function (row) {
  if (ds_oilInOut.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let stsCd = ds_oilInOut.getCellData(row, "stsCd");
  if (stsCd == "1" || stsCd == "2" || stsCd == "3") {
    await $c.gus.cfAlertMsg($p, row + 1 + "번째 항목은 삭제 할 수 없습니다.\n발주상태를 확인해 주시기바랍니다.");
    return;
  }
  ds_oilInOut.removeRow(row);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_clnt.ilCommonPopUp(scwin.callbackClnt, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    case 2:
      let clntNoVal = "";
      udc_reqOilStat.ilCommonPopUp(scwin.callbackReqOilStat, pCode, "", "T", null, null, null, null, clntNoVal, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callbackClnt = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
  }
};
scwin.callbackReqOilStat = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_reqOilStatNo, txt_reqOilStatNm);
  } else {
    ed_reqOilStatNo.setValue("");
    txt_reqOilStatNm.setValue("");
  }
};
scwin.f_openPopUp = function (row, colid, data) {
  if (colid == "reqInDt") {
    // TODO: 그리드 내 달력 팝업은 inputType="calendar"로 대체됨
  }
  if (colid == "clntNo") {
    let pCode = ds_oilInOut.getCellData(row, "clntNo");
    udc_clnt.ilCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_oilInOut.setCellData(row, "clntNo", rtnList[0]);
        ds_oilInOut.setCellData(row, "clntNm", rtnList[1]);
      } else {
        ds_oilInOut.setCellData(row, "clntNo", "");
        ds_oilInOut.setCellData(row, "clntNm", "");
      }
    }, pCode, "", "T", null, null, null, null, null, null, null, null, null);
  }
  if (colid == "reqOilStatNm") {
    let clntNoVal = "";
    udc_reqOilStat.ilCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        ds_oilInOut.setCellData(row, "reqOilStatNo", rtnList[0]);
        ds_oilInOut.setCellData(row, "reqOilStatNm", rtnList[1]);
        ds_oilInOut.setCellData(row, "mpNo", rtnList[2]);
        ds_oilInOut.setCellData(row, "reqNm", rtnList[3]);
      } else {
        ds_oilInOut.setCellData(row, "reqOilStatNo", "");
        ds_oilInOut.setCellData(row, "reqOilStatNm", "");
        ds_oilInOut.setCellData(row, "mpNo", "");
        ds_oilInOut.setCellData(row, "reqNm", "");
      }
    }, "", "", "T", null, null, null, null, clntNoVal, null, null, null, null);
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};
scwin.gr_oilInOut_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  if (columnId == "chk") {
    if (ds_oilInOut.getCellData(rowIndex, "stsCd") == "2" || ds_oilInOut.getCellData(rowIndex, "stsCd") == "3") {
      ds_oilInOut.setCellData(rowIndex, "chk", "F");
      await $c.win.alert($p, "상태가 입고,발주인 것은 선택할수 없습니다.");
    }
  }
  let stsCd = ds_oilInOut.getCellData(rowIndex, "stsCd");
  if (stsCd == "1" || stsCd == "2" || stsCd == "3") {
    gr_oilInOut.setCellReadOnly(rowIndex, "reqInDt", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "clntNo", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "oilkndCd", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqQty", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqNm", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "mpNo", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "stockQty", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "etc", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqOilStatNm", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqSelfTransYn", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "transVehclNo", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqInHm", true);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqInPlace", true);
  } else if (stsCd == "0") {
    gr_oilInOut.setCellReadOnly(rowIndex, "reqInDt", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "clntNo", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "oilkndCd", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqQty", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqNm", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "mpNo", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "stockQty", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "etc", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqOilStatNm", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqSelfTransYn", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "transVehclNo", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqInHm", false);
    gr_oilInOut.setCellReadOnly(rowIndex, "reqInPlace", false);
    if (scwin.clntNo != null && scwin.clntNo != "") {
      gr_oilInOut.setCellReadOnly(rowIndex, "clntNo", true);
    }
  }
};
scwin.gr_oilInOut_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_oilInOut.getColumnID(columnIndex);
  scwin.f_openPopUp(rowIndex, columnId, "");
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 1);
};
scwin.ed_reqOilStatNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_reqOilStatNo, txt_reqOilStatNm, 2);
};
scwin.sbm_saveOilOrder_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
};
scwin.sbm_saveOilOrder_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_oilInOut.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveUpDown_submitdone = function (e) {
  if (ds_upDown.getRowCount() != 0) {
    let upDownVal = Number(ds_upDown.getCellData(0, "upDown"));
    let plusVal = upDownVal + 5;
    let minusVal = upDownVal - 5;
    scwin.txt_plus = plusVal < 0 ? String(plusVal) : "+" + plusVal;
    scwin.txt_minus = minusVal < 0 ? String(minusVal) : "+" + minusVal;
  }
};
scwin.sbm_retrieveUpDown_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveRecent_submitdone = function (e) {
  if (ds_oilUnitPrice.getRowCount() != 0) {
    let uPrice = 0;
    for (let i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
      if (ds_oilUnitPrice.getCellData(i, "endDt") == "99999999") {
        uPrice = ds_oilUnitPrice.getCellData(i, "uprLight");
        uPrice = $c.gus.cfInsertComma($p, uPrice);
      }
    }
    scwin.txt_price = uPrice;
    scwin.txt_today = "(" + scwin.vCurDate.substring(0, 4) + "/" + scwin.vCurDate.substring(4, 6) + "/" + scwin.vCurDate.substring(6, 8) + ")";
  }
};
scwin.sbm_retrieveRecent_submiterror = function (e) {};
scwin.sbm_fix_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "입고요청 되었습니다.");
  await scwin.f_Retrieve();
};
scwin.sbm_fix_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_cancle_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "입고요청이 취소되었습니다.");
  await scwin.f_Retrieve();
};
scwin.sbm_cancle_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.dtClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_dt',refEdDt:'',edFromId:'ica_stdDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilkndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.oilkndCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqSelfTransYn',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.reqSelfTransYn'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'txt_clntNm',style:'',id:'udc_clnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reqOilStatNo',nameId:'txt_reqOilStatNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_reqOilStat'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_stsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.stsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'유류구매요청내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'info-list row'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'차주 경유 유가변동은 리터당 원 ~원 수준으로 예상됩니다. ',class:'txt-dot txt-red'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'금일 경유 공장도가는 리터당 원 입니다.(VAT 포함)',class:'txt-dot txt-red'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilInOut',focusMode:'row',id:'gr_oilInOut',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',colSpan:'',rowSpan:'2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'530',inputType:'text',style:'',id:'reqInDt',value:'입고요청내역',displayMode:'label',colSpan:'6',rowSpan:'',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'clntNo',value:'자가운송여부',displayMode:'label',colSpan:'2',rowSpan:'',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'입고</br>요청</br>시간',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqOilStatNm',value:'요청</br>주유소',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilkndCd',value:'기타사항',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'reqQty',value:'발주자정보',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqSelfTransYn',value:'상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'transVehclNo',value:'발주정보',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'reqInHm',value:'입고확인',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqInPlace',value:'등록</br>일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etc',value:'재고량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqNm',value:'순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mpNo',value:'입고주유소코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'stsCd',value:'입고요청여부',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',style:'',value:'요청</br>일자',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqInDt',inputType:'text',style:'',value:'거래처</br>코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'입고주유소',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqOilStatNm',value:'유종',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilkndCd',value:'리터(L)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqQty',value:'자가</br>운송',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqSelfTransYn',value:'차량</br>번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transVehclNo',value:'요청자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqInHm',value:'휴대전화',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqInPlace',inputType:'text',style:'',value:'발주</br>일자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etc',inputType:'text',style:'',value:'발주</br>수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqNm',inputType:'text',style:'',value:'입고</br>일자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',style:'',value:'입고</br>수량',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqInDt',inputType:'calendar',style:'',value:'',width:'70',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'reqOilStatNm',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'oilkndCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqQty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'reqSelfTransYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정유사운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transVehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqInHm',value:'',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqInPlace',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etc',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mpNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realInDt',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realInQty',inputType:'text',style:'',value:'',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',style:'',value:'',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqRegDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stockQty',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqSeq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'reqOilStatNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'inYn',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum(\'reqQty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'sum(\'realInQty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',expression:'sum(\'inQty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'list-box'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청일자 : 유류입고를 희망하는 일자.',class:'txt-dot txt-blue'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'등록일자 : 데이터를 저장한 일자.',class:'txt-dot txt-blue'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'데이터 저장후 입고요청 버튼을 눌러, 상태가 \'요청\'인 것만 발주가 진행 됩니다.',class:'txt-dot txt-blue'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'경유 유가변동시점 : SK/GS(월->화,자정), 현대(화->수,자정)',class:'txt-dot txt-blue'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고요청'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요청취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})