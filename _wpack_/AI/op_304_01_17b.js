/*amd /AI/op_304_01_17b.xml 35708 b8e779281538863271be68b668d85f0af0dc9beb14a3efb3602792dbdfaea6a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranGbn',name:'점소구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtGbn',name:'일자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcScYn',name:'할증유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'운송단계유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costRate',name:'원가율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SZ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellDcScAmt',name:'매출할증',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입기본단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsDcScAmt',name:'매입할증액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할증사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitAmt',name:'이익금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitRt',name:'원가율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKndCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveOrderUnAdoptionDiscountSurchargeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'scwin.sbm_retreive_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_odrKndCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD113',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_odrKndCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_odrKndCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_odrKndCd_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sLoUpperLobranCd = "";
scwin.ed_srchWrkStDt = "";
scwin.ed_srchWrkEndDt = "";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm();
  scwin.sLobranCd = $c.ses.getLobranCd();
  scwin.sellDept = "";
  scwin.fromRsltsDt = "";
  scwin.toRsltsDt = "";
  scwin.odrNofromRequest = "";
  let params = $c.data.getParameter($p);
  if (params != null) {
    scwin.sellDept = params["sellDept"] || "";
    scwin.fromRsltsDt = params["fromRsltsDt"] || "";
    scwin.toRsltsDt = params["toRsltsDt"] || "";
    scwin.odrNofromRequest = params["odrNofromRequest"] || "";
  }
  scwin.sLoUpperLobranCd = scwin.sLobranCd;
  scwin.ed_srchWrkStDt = scwin.vCurDate + scwin.vCurDate;
  scwin.ed_srchWrkEndDt = scwin.vCurDate + scwin.vCurDate;
  await $c.sbm.execute($p, sbm_odrKndCd);
  let codeOptions = [{
    grpCd: "OP190",
    compID: "acb_odrKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  udc_srchWrkDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
  acb_lobranGbn.setSelectedIndex(1);
  acb_dtGbn.setSelectedIndex(0);
  acb_dcScYn.setSelectedIndex(0);
  acb_wrkStpCd.setSelectedIndex(0);
  if (scwin.sLoUpperLobranCd != "") {
    let foundIdx = -1;
    for (let i = 0; i < acb_lobranGbn.getItemCount(); i++) {
      if (acb_lobranGbn.getItemValue(i) == scwin.sLoUpperLobranCd) {
        foundIdx = i;
        break;
      }
    }
    if (foundIdx > 0) {
      acb_lobranGbn.setSelectedIndex(foundIdx);
    } else {
      acb_lobranGbn.setSelectedIndex(0);
    }
  }
  acb_lobranGbn.setFocus();
  if (scwin.sellDept != "") {
    acb_lobranGbn.setValue(scwin.sellDept);
    ica_srchWrkStDt.setValue(scwin.fromRsltsDt);
    ica_srchWrkEndDt.setValue(scwin.toRsltsDt);
    acb_dcScYn.setValue("2");
    txt_odrNo.setValue(scwin.odrNofromRequest);
    scwin.f_Retrieve();
  }
};
scwin.sbm_odrKndCd_submitdone = function (e) {
  ds_odrKndCd.insertRow(0);
  ds_odrKndCd.setCellData(0, "cd", "");
  ds_odrKndCd.setCellData(0, "cdNm", "전체");
  lc_odrKndCd.setSelectedIndex(0);
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_srchWrkStDt])) || !(await $c.gus.cfValidate($p, [ica_srchWrkEndDt]))) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_srchWrkStDt.getValue(), ica_srchWrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_srchWrkStDt.setFocus();
    return;
  }
  if (ed_bilgClntNo.getValue() == "" && txt_odrNo.getValue() == "" && txt_cntrNo.getValue() == "") {
    if (acb_dcScYn.getValue() == "2" && lc_odrKndCd.getValue() == "") {
      await $c.win.alert($p, "오더종류를 선택하십시요.");
      lc_odrKndCd.setFocus();
      return;
    }
  }
  scwin.f_ProcessBinding();
  $c.gus.cfShowDSWaitMsg($p, gr_cntrWrkRslts);
  await $c.sbm.execute($p, sbm_retreive);
  scwin.f_Rate();
};
scwin.f_ProcessBinding = function () {
  dma_srchCond.set("lobranCd", acb_lobranGbn.getValue());
  dma_srchCond.set("wrkStDt", ica_srchWrkStDt.getValue());
  dma_srchCond.set("wrkEndDt", ica_srchWrkEndDt.getValue());
  dma_srchCond.set("lobranGbn", acb_lobranGbn.getValue());
  dma_srchCond.set("dtGbn", acb_dtGbn.getValue());
  dma_srchCond.set("wrkClsCd", acb_odrKndCd.getValue());
  dma_srchCond.set("odrNo", txt_odrNo.getValue());
  dma_srchCond.set("cntrNo", txt_cntrNo.getValue());
  dma_srchCond.set("odrKndCd", lc_odrKndCd.getValue());
  dma_srchCond.set("dcScYn", acb_dcScYn.getValue());
  dma_srchCond.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_srchCond.set("wrkStpCd", acb_wrkStpCd.getValue());
  dma_srchCond.set("costRate", ed_pcostRt.getValue());
};
scwin.f_Rate = function () {
  let totalSellAmt = 0;
  let totalSellDcScAmt = 0;
  let totalPchsAmt = 0;
  let totalPchsDcScAmt = 0;
  let rowCnt = ds_cntrWrkRslts.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    totalSellAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "sellAmt") || 0);
    totalSellDcScAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "sellDcScAmt") || 0);
    totalPchsAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "pchsAmt") || 0);
    totalPchsDcScAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "pchsDcScAmt") || 0);
  }
  let totalSell = totalSellAmt + totalSellDcScAmt;
  let totalPchs = totalPchsAmt + totalPchsDcScAmt;
  let totalProfitAmt = totalSell - totalPchs;
  let totalProfitRt = 0;
  if (totalSell != 0) {
    totalProfitRt = Math.round(totalPchs / totalSell * 1000) / 10;
  }
  let prevCntrNo = "";
  let subSellAmt = 0;
  let subSellDcScAmt = 0;
  let subPchsAmt = 0;
  let subPchsDcScAmt = 0;
  let subStartRow = 0;
  for (let i = 0; i < rowCnt; i++) {
    let currentCntrNo = ds_cntrWrkRslts.getCellData(i, "cntrNo");
    subSellAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "sellAmt") || 0);
    subSellDcScAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "sellDcScAmt") || 0);
    subPchsAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "pchsAmt") || 0);
    subPchsDcScAmt += parseFloat(ds_cntrWrkRslts.getCellData(i, "pchsDcScAmt") || 0);
    let nextCntrNo = "";
    if (i + 1 < rowCnt) {
      nextCntrNo = ds_cntrWrkRslts.getCellData(i + 1, "cntrNo");
    }
    if (currentCntrNo != nextCntrNo) {
      let subSell = subSellAmt + subSellDcScAmt;
      let subPchs = subPchsAmt + subPchsDcScAmt;
      let subProfit = subSell - subPchs;
      let subProfitRt = 0;
      if (subSell != 0) {
        subProfitRt = Math.round(subPchs / subSell * 1000) / 10;
      }
      for (let j = subStartRow; j <= i; j++) {
        ds_cntrWrkRslts.setCellData(j, "profitAmt", subProfit);
        ds_cntrWrkRslts.setCellData(j, "profitRt", subProfitRt);
      }
      subSellAmt = 0;
      subSellDcScAmt = 0;
      subPchsAmt = 0;
      subPchsDcScAmt = 0;
      subStartRow = i + 1;
    }
  }
};
scwin.sbm_retreive_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  let rowCnt = ds_cntrWrkRslts.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  let unDuplCnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    let currentCntrNo = ds_cntrWrkRslts.getCellData(i, "cntrNo");
    let nextCntrNo = "";
    if (i + 1 < rowCnt) {
      nextCntrNo = ds_cntrWrkRslts.getCellData(i + 1, "cntrNo");
    }
    if (currentCntrNo != nextCntrNo) {
      unDuplCnt++;
    }
  }
  cntrWrkRsltsRows.setValue(unDuplCnt);
};
scwin.sbm_retreive_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_cntrWrkRslts);
  $c.gus.cfShowError($p, e);
};
scwin.lc_odrKndCd_onchange = function (e) {
  let wrkClsCdVal = acb_odrKndCd.getValue();
  let rowCnt = ds_odrKndCd.getRowCount();
  for (let i = rowCnt - 1; i >= 0; i--) {
    let fltrCd1 = ds_odrKndCd.getCellData(i, "fltrCd1");
    let cd = ds_odrKndCd.getCellData(i, "cd");
    if (cd != "") {
      if (wrkClsCdVal == "C") {
        if (fltrCd1 != "C") {
          ds_odrKndCd.setRowVisible(i, false);
        } else {
          ds_odrKndCd.setRowVisible(i, true);
        }
      } else if (wrkClsCdVal == "B") {
        if (fltrCd1 != "B") {
          ds_odrKndCd.setRowVisible(i, false);
        } else {
          ds_odrKndCd.setRowVisible(i, true);
        }
      } else {
        ds_odrKndCd.setRowVisible(i, true);
      }
    }
  }
  lc_odrKndCd.setSelectedIndex(0);
  if (wrkClsCdVal == "C") {
    gr_cntrWrkRslts.setColumnHeaderValue("cntrNo", "컨테이너번호");
    gr_cntrWrkRslts.setColumnHeaderValue("cntrSizCd", "SZ");
    gr_cntrWrkRslts.setColumnHeaderValue("cntrTypCd", "TP");
    gr_cntrWrkRslts.setColumnHeaderValue("fullEmptyClsCd", "F/E");
  } else if (wrkClsCdVal == "B") {
    gr_cntrWrkRslts.setColumnHeaderValue("cntrNo", "품명");
    gr_cntrWrkRslts.setColumnHeaderValue("cntrSizCd", "수량");
    gr_cntrWrkRslts.setColumnHeaderValue("cntrTypCd", "중량");
    gr_cntrWrkRslts.setColumnHeaderValue("fullEmptyClsCd", "CBM");
  }
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    udc_bilgClnt.ilCommonPopUp(scwin.callbackBilgClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
  }
};
scwin.callbackBilgClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm, null);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
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
scwin.udc_bilgClnt_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, '1');
};
scwin.udc_bilgClnt_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, '1', false);
};
scwin.udc_bilgClnt_onClick = function () {
  scwin.f_openPopUp('1', ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  udc_srchWrkDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.f_toExcel1 = function () {
  gr_cntrWrkRslts.setColumnVisible("bilgClntNo", true);
  gr_cntrWrkRslts.setColumnVisible("shpCoClntNo", true);
  gr_cntrWrkRslts.setColumnVisible("lineCd", true);
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, {
    fileName: "운송할인할증실적현황.xlsx",
    sheetName: "운송할인할증실적현황"
  });
  gr_cntrWrkRslts.setColumnVisible("bilgClntNo", false);
  gr_cntrWrkRslts.setColumnVisible("shpCoClntNo", false);
  gr_cntrWrkRslts.setColumnVisible("lineCd", false);
};
scwin.gr_cntrWrkRslts_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0 && columnId == "cntrNo" && acb_odrKndCd.getValue() == "C") {
    let cntrNoVal = ds_cntrWrkRslts.getCellData(rowIndex, "cntrNo");
    let fileURL = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml";
    let tabTitle = "컨테이너 화물추적";
    let param = {
      cntrNo: cntrNoVal
    };
    $c.win.openMenu($p, tabTitle, fileURL, "as_102_01_02b.xml", param);
  } else if (rowIndex >= 0 && columnId == "odrNo") {
    let odrNoVal = ds_cntrWrkRslts.getCellData(rowIndex, "odrNo");
    let fileURL = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
    let tabTitle = "컨테이너오더";
    let param = {
      odrNo: odrNoVal
    };
    $c.win.openMenu($p, tabTitle, fileURL, "sd_402_01_11t.xml", param);
  } else if (rowIndex >= 0 && columnId == "bilgClntNm") {
    let odrNoVal = ds_cntrWrkRslts.getCellData(rowIndex, "odrNo");
    let fileURL = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml";
    let tabTitle = "통합매출입조정";
    let param = {
      odrNo: odrNoVal
    };
    $c.win.openMenu($p, tabTitle, fileURL, "sd_402_01_26b.xml", param);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranGbn',style:'width: 100px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranGbn',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:' req',editType:'select',id:'lc_dtGbn',ref:'',search:'start',style:'width:100px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchWrkDt',refDataMap:'',edFromId:'ica_srchWrkStDt',edToId:'ica_srchWrkEndDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:100px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dcScYn',search:'start',style:'width:200px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkStpCd',search:'start',style:'width:100px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkStpCd',search:'start',style:'width:100px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_odrNo',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_cntrNo',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원가율 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 100px;'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_pcostRt',placeholder:'',class:'tar'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'% 이상',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송단위별 원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_cntrWrkRslts',id:'gr_cntrWrkRslts',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1800',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',value:'청구화주코드',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',value:'청구화주명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',value:'오더<br/>종류',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'컨테이너<br/>/품명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SZ',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TP',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',value:'매출액',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'sellDcScAmt',value:'매입액',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsAmt',value:'이익',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsDcScAmt',value:'출발지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScNm',value:'도착지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profitAmt',value:'작업단계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profitRt',value:'출발일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',value:'도착일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlNm',value:'협력업체',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',value:'차량번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDtm',value:'라인코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDtm',value:'선사코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrNo',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNo',value:'할증',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrKndCd',value:'할증액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrNo',value:'할증사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrSizCd',value:'이익금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrTypCd',value:'원가율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',colMerge:'true',readOnly:'true',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',colMerge:'true',readOnly:'true',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'70',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',textAlign:'left',colMerge:'true',readOnly:'true',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'60',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'60',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'60',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellDcScAmt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsDcScAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScNm',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profitAmt',displayMode:'label',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'profitRt',displayMode:'label',textAlign:'right',colMerge:'true',readOnly:'true',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDtm',displayMode:'label',readOnly:'true',displayFormat:'{Decode(Left(dptDtm,1),'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDtm',displayMode:'label',readOnly:'true',displayFormat:'{Decode(Left(arvDtm,1),'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'copCoClntNm',displayMode:'label',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shpCoClntNo',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column82',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label',value:'소계'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'sellDcScAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'sum(\'pchsDcScAmt\')',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'cntrWrkRsltsRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})