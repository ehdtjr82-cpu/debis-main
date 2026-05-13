/*amd /AI/op_301_01_54b.xml 43130 16bce378d48b58477123ae2466fd038be35d53afb8b31b26edd95185c3882515 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'arrvlportDtmFrom',name:'입항일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportDtmTo',name:'입항일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inOdrNo',name:'반입오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outOdrNo',name:'반출오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellCreateYn',name:'매출생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'반입오더출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'반입오더출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pluginDt',name:'PLUG IN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pluginHh',name:'PLUG IN 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plugoutDt',name:'PLUG OUT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plugoutHh',name:'PLUG OUT 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDay',name:'총장치일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'applyDt',name:'적용일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'applyHh',name:'적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOdrSellDay',name:'반입오더매출일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outOdrSellDay',name:'반출오더매출일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inOdrChk',name:'반입오더체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'반입오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOdrSellClsCd',name:'반입매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOdrDcsnClsCd',name:'반입오더매출확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outOdrChk',name:'반출오더체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outOdrNo',name:'반출오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outOdrSellClsCd',name:'반출매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outOdrDcsnClsCd',name:'반출오더매출확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totBillingDay',name:'총청구일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayYn',name:'XLAY여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvChrgClsCd',name:'전배여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setupTemper',name:'설정온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqTemper',name:'요청온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pluginModId',name:'PLUG IN 수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plugoutModId',name:'PLUG OUT 수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pluginModNm',name:'PLUG IN 수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plugoutModNm',name:'PLUG OUT 수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierDtm',name:'접안일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd2',name:'수출입구분(TB_OP681)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCreateYn',name:'매출생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impVsslCd',name:'수입모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'수입항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expVsslCd',name:'수출모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'수출항차',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ret',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveDpctFreezingContainerListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_ret_submitdone','ev:submiterror':'scwin.sbm_ret_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveDpctFreezingContainerSellingListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.regId = "";
scwin.onpageload = function () {
  scwin.regId = $c.ses.getUserId();
};
scwin.onUdcCompleted = function () {
  let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  let monthStart = curDate.substring(0, 6) + "01";
  udc_arrvlportDtm.setInitDate(monthStart, curDate);
};
scwin.updateDate = function (temp, index) {
  let newDate = new Date(parseInt(temp.substring(0, 4), 10), parseInt(temp.substring(4, 6), 10) - 1, parseInt(temp.substring(6, 8), 10), parseInt(temp.substring(8, 10), 10), parseInt(temp.substring(10), 10) + index);
  return scwin.dateToStr(newDate);
};
scwin.dateToStr = function (user_day) {
  let year = user_day.getFullYear();
  let month = user_day.getMonth() + 1;
  month = month < 10 ? "0" + month : "" + month;
  let date = user_day.getDate();
  date = date < 10 ? "0" + date : "" + date;
  let hour = user_day.getHours();
  hour = hour < 10 ? "0" + hour : "" + hour;
  let minute = user_day.getMinutes();
  minute = minute < 10 ? "0" + minute : "" + minute;
  return year + "" + month + "" + date + "" + hour + "" + minute;
};
scwin.getOffsetDate = function (sDate1, sDate2) {
  let date1 = scwin.parseDate(sDate1);
  let date2 = scwin.parseDate(sDate2);
  let month1 = sDate1.substring(4, 6);
  let month2 = sDate2.substring(4, 6);
  let num_days = (date1 - date2) / (1000 * 60 * 60 * 24);
  if (month1 - month2 == 1 && month2 == '01') {
    num_days = num_days + 3;
  }
  if (month1 - month2 == 1 && month2 == '02') {
    num_days = num_days - 3;
  }
  if (month1 - month2 == 1 && month2 == '03') {
    num_days = num_days + 1;
  }
  if (month1 - month2 == 1 && month2 == '04') {
    num_days = num_days - 1;
  }
  if (month1 - month2 == 1 && month2 == '05') {
    num_days = num_days + 1;
  }
  if (num_days < 0) num_days = 0;
  return Math.ceil(num_days);
};
scwin.parseDate = function (sDate) {
  let year = sDate.substring(0, 4);
  let month = sDate.substring(4, 6);
  let day = sDate.substring(6, 8);
  let hours = sDate.substring(8, 10);
  let minutes = sDate.substring(10, 12);
  let seconds = sDate.substring(12, 14);
  let date = new Date(year, month, day, hours, minutes, seconds, 0);
  return date;
};
scwin.parseDate2 = function (sDate) {
  let year = sDate.substring(0, 4);
  let month = sDate.substring(4, 6);
  let day = sDate.substring(6, 8);
  let date = new Date(year, month, day);
  return date;
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tbl_search]))) return;
  if (ds_search.get("arrvlportDtmFrom") > ds_search.get("arrvlportDtmTo")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  await $c.sbm.execute($p, sbm_ret);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  if (!ds_master.isUpdated()) return;
  let chkCount = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "inOdrChk") == 1 || ds_master.getCellData(i, "outOdrChk") == 1) {
      chkCount++;
    }
  }
  if (chkCount == 0) {
    await $c.gus.cfAlertMsg($p, "선택된 건이 하나도 없습니다.\n확인해 주십시오.");
    return;
  }
  if (!(await scwin.f_Check())) return;
  let confirmResult = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!confirmResult) return;
  await $c.sbm.execute($p, sbm_save);
};
scwin.f_Check = async function () {
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    let displayRow = i + 1;
    if (ds_master.getCellData(i, "inOdrChk") == 1 || ds_master.getCellData(i, "outOdrChk") == 1) {
      if (ds_master.getCellData(i, "pluginDt") == "" && ds_master.getCellData(i, "plugoutDt") == "") {
        await $c.gus.cfAlertMsg($p, displayRow + "번째 항의 PLUG IN과 PLUG OUT은 필수 입력 사항입니다.\n자동 선택 해제 처리 합니다.");
        ds_master.setCellData(i, "inOdrChk", "F");
        ds_master.setCellData(i, "outOdrChk", "F");
        return false;
      }
      if (ds_master.getCellData(i, "pluginDt") != "" && ds_master.getCellData(i, "plugoutDt") == "") {
        ds_master.setCellData(i, "outOdrNo", "");
      }
      if (ds_master.getCellData(i, "pluginDt") == "" && ds_master.getCellData(i, "plugoutDt") != "") {
        ds_master.setCellData(i, "inOdrNo", "");
      }
    }
    if (ds_master.getCellData(i, "inOdrChk") == 1) {
      if (ds_master.getCellData(i, "inOdrDcsnClsCd") > 1) {
        await $c.gus.cfAlertMsg($p, displayRow + "번째 항의 반입오더 매출이 미확정이 아닙니다.\n자동 선택 해제 처리 합니다.");
        ds_master.setCellData(i, "inOdrChk", "F");
        return false;
      }
    }
    if (ds_master.getCellData(i, "outOdrChk") == 1) {
      if (ds_master.getCellData(i, "outOdrDcsnClsCd") > 1) {
        await $c.gus.cfAlertMsg($p, displayRow + "번째 항의 반출오더 매출이 미확정이 아닙니다.\n자동 선택 해제 처리 합니다.");
        ds_master.setCellData(i, "outOdrChk", "F");
        return false;
      }
    }
  }
  return true;
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
};
scwin.f_chkOpenCommonPopUpText = function (inObj, codeObj, disGubun) {
  let pCode = "";
  let pName = "";
  if (inObj.getDisabled && inObj.getDisabled()) return;
  if (inObj.getValue() == inObj.hidVal) return;
  if (codeObj != null) {
    codeObj.setValue("");
  }
  pName = inObj.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = [];
  switch (disGubun) {
    case 1:
      udc_line.ilCommonPopUp(scwin.callbackLineInfo, pCode, pName, pClose, null, null, null, null, '2', null, null, null, null, null, pAllSearch, "LINE조회,LINE코드,LINE명");
      break;
    case 2:
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackVsslInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, 'T', null);
      break;
  }
};
scwin.callbackLineInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
};
scwin.callbackVsslInfo = function (rtnList) {
  let row = ds_master.getRowPosition();
  if (rtnList != null && rtnList.length > 0) {
    ds_master.setCellData(row, "vsslCd", rtnList[0]);
    ds_master.setCellData(row, "vsslNm", rtnList[1]);
  }
};
scwin.f_Excel = function () {
  if (ds_master.getRowCount() == 0) return;
  $c.data.downloadGridViewExcel($p, grd_master, {
    fileName: "DPCT냉동컨테이너.xlsx",
    sheetName: "DPCT 냉동컨테이너"
  });
};
scwin.f_cntrSearch = function () {
  let row = ds_master.getRowPosition();
  if (row > -1) {
    let v_cntrNo = ds_master.getCellData(row, "cntrNo");
    let param = {
      cntrNo: v_cntrNo
    };
    $c.win.openMenu($p, "컨테이너  화물추적", "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml", "as_102_01_02b.xml", param);
  }
};
scwin.f_openPopUpCntrSearch = async function () {
  let cntrNo = "";
  let row = ds_master.getRowPosition();
  if (cntrNo == "") {
    cntrNo = ds_master.getCellData(row, "cntrNo");
  }
  if (cntrNo == "") {
    await $c.win.alert($p, "오더번호가 없습니다.");
    return false;
  }
  let obj = {
    cntrNo: cntrNo
  };
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_54p.xml", {
    width: 500,
    height: 400,
    modal: true,
    data: obj
  });
  if (rtnValues != null) {
    if (rtnValues[0] != null) {
      ds_master.setCellData(row, "arrvlportDtm", rtnValues[1]);
      if (ds_master.getCellData(row, "expimpClsCd") == "D") {
        if (ds_master.getCellData(row, "blNo") != "") {
          ds_master.setCellData(row, "impVsslCd", rtnValues[2]);
          ds_master.setCellData(row, "impPortcnt", rtnValues[3]);
        } else if (ds_master.getCellData(row, "blNo") == "") {
          ds_master.setCellData(row, "expVsslCd", rtnValues[2]);
          ds_master.setCellData(row, "expPortcnt", rtnValues[3]);
        }
      }
    }
  }
};
scwin.sbm_ret_submitdone = async function (e) {};
scwin.sbm_ret_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_master_onloadcompleted = async function (e) {
  let rowCnt = ds_master.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "[DPCT 냉동 컨테이너 조회 ] " + MSG_CM_ERR_003);
  }
  spa_totalRow.setValue(rowCnt);
};
scwin.grd_master_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "vsslCd") {
    scwin.f_openCommonPopUp(2, ds_master.getCellData(rowIndex, "vsslCd"), ds_master.getCellData(rowIndex, "vsslNm"), "F");
  }
  if (columnId == "arrvlportDtm") {
    scwin.f_openPopUpCntrSearch();
  }
};
scwin.grd_master_oneditend = async function (rowIndex, columnId, oldValue, newValue) {
  let row = rowIndex;
  if (columnId == "plugoutDt" || columnId == "pluginDt") {
    if (!(ds_master.getCellData(row, 'pluginDt') == "") && !(ds_master.getCellData(row, 'applyDt') == "")) {
      ds_master.setCellData(row, 'inOdrSellDay', scwin.getOffsetDate(ds_master.getCellData(row, 'applyDt') + "00", ds_master.getCellData(row, 'pluginDt') + "00"));
    }
    if (!(ds_master.getCellData(row, 'plugoutDt') == "") && !(ds_master.getCellData(row, 'applyDt') == "")) {
      ds_master.setCellData(row, 'outOdrSellDay', scwin.getOffsetDate(ds_master.getCellData(row, 'plugoutDt') + "00", ds_master.getCellData(row, 'applyDt') + "00"));
    }
    if (!(ds_master.getCellData(row, 'pluginDt') == "") && !(ds_master.getCellData(row, 'plugoutDt') == "")) {
      ds_master.setCellData(row, 'totDay', scwin.getOffsetDate(ds_master.getCellData(row, 'plugoutDt') + "00", ds_master.getCellData(row, 'pluginDt') + "00"));
    }
    if (columnId == "pluginDt") {
      if (ds_master.getCellData(row, 'pluginDt') != oldValue) {
        ds_master.setCellData(row, 'pluginModId', scwin.regId);
      }
    }
    if (columnId == "plugoutDt") {
      if (ds_master.getCellData(row, 'plugoutDt') != oldValue) {
        ds_master.setCellData(row, 'plugoutModId', scwin.regId);
      }
    }
  }
  if (columnId == "applyDt") {
    if (ds_master.getCellData(row, 'inOdrDcsnClsCd') > 1 || ds_master.getCellData(row, 'outOdrDcsnClsCd') > 1) {
      await $c.gus.cfAlertMsg($p, row + 1 + "번째 항의 적용일시는 반입오더 or 반출오더가 미확정이 아닐경우 수정하실수 없습니다.");
      ds_master.setCellData(row, 'applyDt', oldValue);
      return true;
    }
    if (ds_master.getCellData(row, 'pluginDt') != '' && ds_master.getCellData(row, 'plugoutDt') != '') {
      if (ds_master.getCellData(row, 'applyDt') > ds_master.getCellData(row, 'plugoutDt') || ds_master.getCellData(row, 'applyDt') < ds_master.getCellData(row, 'pluginDt')) {
        await $c.gus.cfAlertMsg($p, "적용일시는 PLUGIN보다 크고 PLUGOUT보다 작아야합니다.");
        ds_master.setCellData(row, 'applyDt', oldValue);
        return true;
      }
    }
    if (!(ds_master.getCellData(row, 'pluginDt') == "")) {
      if (ds_master.getCellData(row, 'pluginDt') == ds_master.getCellData(row, 'applyDt')) {
        ds_master.setCellData(row, 'inOdrSellDay', 0);
      } else {
        ds_master.setCellData(row, 'inOdrSellDay', scwin.getOffsetDate(ds_master.getCellData(row, 'applyDt') + "00", ds_master.getCellData(row, 'pluginDt') + "00"));
      }
    }
    if (!(ds_master.getCellData(row, 'plugoutDt') == "")) {
      ds_master.setCellData(row, 'outOdrSellDay', scwin.getOffsetDate(ds_master.getCellData(row, 'plugoutDt') + "00", ds_master.getCellData(row, 'applyDt') + "00"));
    }
  }
  if (columnId == "inOdrSellDay") {
    if (ds_master.getCellData(row, 'inOdrDcsnClsCd') > 1 || ds_master.getCellData(row, 'outOdrDcsnClsCd') > 1) {
      await $c.gus.cfAlertMsg($p, row + 1 + "번째 항의 반입오더 매출일수는 반입오더 or 반출오더가 미확정이 아닐경우 수정하실수 없습니다.");
      ds_master.setCellData(row, 'inOdrSellDay', oldValue);
      return true;
    }
    if (ds_master.getCellData(row, 'inOdrSellDay') < 0) {
      await $c.gus.cfAlertMsg($p, "반입오더 매출일수를 잘못 입력하셨습니다.");
      ds_master.setCellData(row, 'inOdrSellDay', oldValue);
      return true;
    }
    if (!(ds_master.getCellData(row, 'pluginDt') == "")) {
      if (ds_master.getCellData(row, 'pluginDt') != '' && ds_master.getCellData(row, 'plugoutDt') != '') {
        if (ds_master.getCellData(row, 'applyDt') > ds_master.getCellData(row, 'plugoutDt') || ds_master.getCellData(row, 'applyDt') < ds_master.getCellData(row, 'pluginDt')) {
          await $c.gus.cfAlertMsg($p, "적용일시는 PLUGIN보다 크고 PLUGOUT보다 작아야합니다.");
          ds_master.setCellData(row, 'inOdrSellDay', oldValue);
          return true;
        }
      }
      if (ds_master.getCellData(row, 'inOdrSellDay') == 0) {
        ds_master.setCellData(row, 'applyDt', ds_master.getCellData(row, 'pluginDt'));
      } else {
        let minutes = ds_master.getCellData(row, 'inOdrSellDay') * 24 * 60 - 1;
        if (ds_master.getCellData(row, 'plugoutDt') != "") {
          if (scwin.updateDate(ds_master.getCellData(row, 'pluginDt'), minutes) > ds_master.getCellData(row, 'plugoutDt')) {
            await $c.gus.cfAlertMsg($p, "반입오더 매출일수를 다시 입력해주세요.");
            ds_master.setCellData(row, 'inOdrSellDay', oldValue);
            return true;
          }
        }
        ds_master.setCellData(row, 'applyDt', scwin.updateDate(ds_master.getCellData(row, 'pluginDt'), minutes));
      }
    }
    if (!(ds_master.getCellData(row, 'plugoutDt') == "") && !(ds_master.getCellData(row, 'applyDt') == "")) {
      if (ds_master.getCellData(row, 'plugoutDt') == ds_master.getCellData(row, 'applyDt')) {
        ds_master.setCellData(row, 'outOdrSellDay', 0);
      } else {
        ds_master.setCellData(row, 'outOdrSellDay', scwin.getOffsetDate(ds_master.getCellData(row, 'plugoutDt') + "00", ds_master.getCellData(row, 'applyDt') + "00"));
      }
    }
  }
  if (columnId == "outOdrSellDay") {
    if (ds_master.getCellData(row, 'inOdrDcsnClsCd') > 1 || ds_master.getCellData(row, 'outOdrDcsnClsCd') > 1) {
      await $c.gus.cfAlertMsg($p, row + 1 + "번째 항의 반출오더 매출일수는 반입오더 or 반출오더가 미확정이 아닐경우 수정하실수 없습니다.");
      ds_master.setCellData(row, 'outOdrSellDay', oldValue);
      return true;
    }
    if (ds_master.getCellData(row, 'outOdrSellDay') < 0) {
      await $c.gus.cfAlertMsg($p, "반입오더 매출일수를 잘못 입력하셨습니다.");
      ds_master.setCellData(row, 'outOdrSellDay', oldValue);
      return true;
    }
    if (!(ds_master.getCellData(row, 'plugoutDt') == "")) {
      if (ds_master.getCellData(row, 'pluginDt') != '' && ds_master.getCellData(row, 'plugoutDt') != '') {
        if (ds_master.getCellData(row, 'applyDt') > ds_master.getCellData(row, 'plugoutDt') || ds_master.getCellData(row, 'applyDt') < ds_master.getCellData(row, 'pluginDt')) {
          await $c.gus.cfAlertMsg($p, "적용일시는 PLUGIN보다 크고 PLUGOUT보다 작아야합니다.");
          ds_master.setCellData(row, 'outOdrSellDay', oldValue);
          return true;
        }
      }
      if (ds_master.getCellData(row, 'outOdrSellDay') == 0) {
        ds_master.setCellData(row, 'applyDt', ds_master.getCellData(row, 'plugoutDt'));
      } else {
        let minutes = ds_master.getCellData(row, 'outOdrSellDay') * 24 * 60 - 1;
        if (scwin.updateDate(ds_master.getCellData(row, 'plugoutDt'), -minutes) > ds_master.getCellData(row, 'plugoutDt')) {
          await $c.gus.cfAlertMsg($p, "반입오더 매출일수를 다시 입력해주세요.");
          ds_master.setCellData(row, 'outOdrSellDay', oldValue);
          return true;
        }
        ds_master.setCellData(row, 'applyDt', scwin.updateDate(ds_master.getCellData(row, 'plugoutDt'), -minutes));
      }
    }
    if (!(ds_master.getCellData(row, 'pluginDt') == "") && !(ds_master.getCellData(row, 'applyDt') == "")) {
      ds_master.setCellData(row, 'inOdrSellDay', scwin.getOffsetDate(ds_master.getCellData(row, 'applyDt') + "00", ds_master.getCellData(row, 'pluginDt') + "00"));
    }
  }
};
scwin.ds_master_onrowpositionchange = function (rowIndex, oldRowIndex) {
  grd_master.setColumnProp("applyDt", "readOnly", false);
  grd_master.setColumnProp("inOdrSellDay", "readOnly", false);
  grd_master.setColumnProp("outOdrSellDay", "readOnly", false);
};
scwin.ds_master_oncelldatachange = function (info) {
  let colid = info.colId;
  if (colid == "applyDt") {
    if (ds_master.isUpdated()) {
      grd_master.setColumnProp("inOdrSellDay", "readOnly", true);
      grd_master.setColumnProp("outOdrSellDay", "readOnly", true);
    }
  }
  if (colid == "inOdrSellDay") {
    if (ds_master.isUpdated()) {
      grd_master.setColumnProp("applyDt", "readOnly", true);
      grd_master.setColumnProp("outOdrSellDay", "readOnly", true);
    }
  }
  if (colid == "outOdrSellDay") {
    if (ds_master.isUpdated()) {
      grd_master.setColumnProp("applyDt", "readOnly", true);
      grd_master.setColumnProp("inOdrSellDay", "readOnly", true);
    }
  }
};
scwin.grd_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    if (columnId == "cntrNo") {
      scwin.f_cntrSearch();
    }
  }
};
scwin.grd_master_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "inOdrChk") {
    let allChecked = true;
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "inOdrChk") != "T" && ds_master.getCellData(i, "inOdrChk") != 1) {
        allChecked = false;
        break;
      }
    }
    if (!allChecked) {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "inOdrChk", 1);
      }
    } else {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "inOdrChk", 0);
      }
    }
  }
  if (columnId == "outOdrChk") {
    let allChecked = true;
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "outOdrChk") != "T" && ds_master.getCellData(i, "outOdrChk") != 1) {
        allChecked = false;
        break;
      }
    }
    if (!allChecked) {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "outOdrChk", 1);
      }
    } else {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "outOdrChk", 0);
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_arrvlportDtm',refDataMap:'',refEdDt:'ica_arrvlportDtmTo',refStDt:'ica_arrvlportDtmFrom',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',ref:'data:ds_search.cntrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_expimpClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_search.expimpClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반입오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_inOdrNo',placeholder:'',style:'width:150px;',ref:'data:ds_search.inOdrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_outOdrNo',placeholder:'',style:'width:150px;',ref:'data:ds_search.outOdrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출생성여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sellCreateYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_search.sellCreateYn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_line',codeId:'ed_lineCd',nameId:'txt_lineNm',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'DPCT 냉동 컨테이너 조회/매출등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_master',id:'grd_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'2',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'expimpClsCd',inputType:'text',value:'수출입<br/>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'컨네이너번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',value:'라인',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',value:'반입오더<br/>출발지코드',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'반입오더<br/>출발지',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pluginDt',inputType:'text',value:'PLUG IN',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pluginHh',inputType:'text',value:'PLUG IN 시간',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plugoutDt',inputType:'text',value:'PLUG OUT',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plugoutHh',inputType:'text',value:'PLUG OUT 시간',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totDay',inputType:'text',value:'총 장치일수',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'applyDt',value:'적용일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'applyHh',value:'적용시간',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOdrSellDay',value:'반입오더<br/>매출일수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outOdrSellDay',value:'반출오더<br/>매출일수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',id:'inOdrChk',value:'반입오더',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',id:'inOdrNo',value:'반출오더',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOdrSellClsCd',value:'총청구일수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOdrDcsnClsCd',value:'XLAY여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outOdrChk',value:'전배여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outOdrNo',value:'컨테이너<br/>사이즈',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outOdrSellClsCd',value:'설정<br/>온도',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outOdrDcsnClsCd',value:'요청<br/>온도',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'totBillingDay',value:'모선명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xrayYn',value:'모선명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stvChrgClsCd',value:'항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrSizCd',value:'PLUG IN<br/>수정자ID',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setupTemper',value:'PLUG OUT<br/>수정자ID',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqTemper',value:'PLUG IN<br/>수정자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',value:'PLUG OUT<br/>수정자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',value:'입항일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'portcnt',value:'접안일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pluginModId',value:'SEQ',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'plugoutModId',value:'수출입구분<br/>(TB_OP681)',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pluginModNm',value:'매출생성여부',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'expimpClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cntrNo',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lineCd',value:'매출구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'dptWrkPlCd',value:'반입오더 매출 확정구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'dptWrkPlNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pluginDt',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pluginHh',value:'매출구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'plugoutDt',value:'반출오더 매출 확정구분코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'expimpClsCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',readOnly:'true',class:'underline',style:'color:<%=dcss.optional_color%>;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pluginDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pluginHh',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plugoutDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plugoutHh',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totDay',inputType:'text',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'applyDt',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'applyHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOdrSellDay',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outOdrSellDay',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'inOdrChk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inOdrNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'inOdrSellClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'inOdrDcsnClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'outOdrChk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'outOdrNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'outOdrSellClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'outOdrDcsnClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totBillingDay',displayMode:'label',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xrayYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'stvChrgClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전배'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrSizCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'setupTemper',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqTemper',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vsslCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pluginModId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'plugoutModId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pluginModNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'plugoutModNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDtm',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'alngpierDtm',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'seq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpClsCd2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'sellCreateYn',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'list-box'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'수입 전배 모선인 경우 PLUG IN시간을 타터미널 PLUG IN시간으로 변경 필요',class:'txt-dot txt-red',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'수출 전배 모선인 경우 PLUG OUT시간을 타터미널 PLUG OUT시간으로 변경필요',class:'txt-dot txt-red',escape:'false'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})