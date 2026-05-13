/*amd /ui/ps/eq/fmsmgnt/fmsinterfacemgnt/eq_630_01_03b.xml 71388 5aea1060ab8debdd19d48705f01100fd4a175ee50564cfca849ff8f2a8d03fa4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commClsCd',name:'상품구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_sellCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'APunitPriceList',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifylines',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifybody',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_apUnitPrice',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_apUnitPrice_onrowpositionchange','ev:oncelldatachange':'scwin.ds_apUnitPrice_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'선택',dataType:'text',defaultValue:'F'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsNm',name:'매출입구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrkUpr',name:'시장단가',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confReqNo',name:'확정요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confDtm',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClsCd',name:'상품구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellContents'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'constSite',name:'현장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'전기일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellContentsTemp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'constSite',name:'현장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'전기일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.RetrieveFmsAPUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_apUnitPrice","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_apUnitPrice","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveApPrice',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.SaveFmsAPUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_apUnitPrice","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveApPrice_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_confirmApPrice',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.ConfirmFmsAPUnitPriceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_apUnitPrice","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_confirmApPrice_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSellCont',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.RetrieveFmsAPSellcontentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_sellCond","key":"IN_DS1"},{"id":"ds_sellContents","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_sellContents","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveSellCont_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.empNo = "";
scwin.epId = "";
scwin.today = "";
scwin.ed_stdDt = "";
scwin.frmReqApprove_apprvDocKndCd = "";
scwin.frmReqApprove_reqUserId = "";
scwin.frmReqApprove_epUserId = "";
scwin.frmReqApprove_apprvTitle = "";
scwin.frmReqApprove_apprvDtlInfo = "";
scwin.frmReqApprove_APunitPriceList = "";
scwin.frmReqApprove_bmodifylines = "";
scwin.frmReqApprove_bmodifybody = "";
scwin.frmReqApprove_bmodifyattach = "";
scwin.onpageload = async function () {
  scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.ed_stdDt = scwin.today.substring(0, 6) + "01";
  scwin.empNo = $c.data.getMemInfo($p, "empNo");
  scwin.epId = $c.data.getMemInfo($p, "epId");
  let codeOptions = [{
    grpCd: "FI019",
    compID: "lc_selpchClsCdCond,gr_apUnitPrice:selpchClsCd"
  }, {
    grpCd: "TL106",
    compID: "lc_commClsCd,gr_apUnitPrice:commClsCd",
    opt: {
      "range": "1,A"
    }
  }, {
    grpCd: "ZZ021",
    compID: "gr_apUnitPrice:apprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    lc_selpchClsCdCond.addItem("전체", "", null, 0);
    lc_selpchClsCdCond.setSelectedIndex(0);
  });
};
scwin.onUdcCompleted = async function () {
  ed_stdDt.setValue(scwin.ed_stdDt);
  ed_endDt.setValue(scwin.today);
  lc_confYn.setSelectedIndex(0);
  ed_stdDt.focus();
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Check = async function () {
  let vaildArray = [{
    id: "stdDt",
    name: "기준일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD",
    length: 8
  }, {
    id: "clntNo",
    name: "거래처",
    mandatory: true
  }, {
    id: "clntNm",
    name: "거래처",
    mandatory: true
  }, {
    id: "upr",
    name: "단가",
    mandatory: true
  }, {
    id: "selpchClsCd",
    name: "매출입구분",
    mandatory: true
  }, {
    id: "endDt",
    name: "종료일자",
    mandatory: true
  }, {
    id: "commClsCd",
    name: "상품구분",
    mandatory: true
  }];
  let value = await $c.gus.cfValidateGrid($p, gr_apUnitPrice, null, null, vaildArray, "유류구매공장도단가 그리드");
  return value;
};

/*=============================================================================* 
 * 년월일을 입력받아 마지막 일를 반환한다
 * 
 * param : sYM 입력스트링(YYYYMMDD)
 *
 * return : String 해당월의 마지막날
 *============================================================================*/
scwin.lastDay = async function (sYM) {
  if (sYM.length != 8) {
    await $c.win.alert($p, "정확한 년월을 입력하십시오.");
    return;
  }
  let yearMonth = sYM.substring(0, 6);
  return yearMonth + $c.date.getLastDateOfMonth($p, yearMonth);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let count = ds_apUnitPrice.getRowCount();
  if (!(count > 0)) return;
  $c.data.downloadGridViewExcel($p, gr_apUnitPrice, {
    fileName: "정비상품단가관리.xlsx",
    sheetName: "정비상품단가관리"
  });
};

//-------------------------------------------------------------------------
// 조회기간 체크
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = async function () {
  let vAdptStDt = ed_stdDt.getValue().trim();
  let vAdptEndDt = ed_endDt.getValue().trim();
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    await $c.win.alert($p, "시작일자를 정확하게 입력해주십시오.");
    ed_stdDt.setFocus();
    return false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    await $c.win.alert($p, "종료일자를 정확하게 입력해주십시오.");
    ed_endDt.setFocus();
    return false;
  }
  if (vAdptStDt > vAdptEndDt) {
    await $c.win.alert($p, "시작일자가 종료일자보다 늦은 날짜입니다.");
    ed_stdDt.setFocus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 외부거래 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let vChkVal = await scwin.f_CheckAdptDt();
  if (!vChkVal) {
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_apUnitPrice.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상품 매출/입 판매단가 그리드"]);
    return;
  }
  let chkValid = await scwin.f_Check();
  if (!chkValid) return;
  for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
    let rowJson = ds_apUnitPrice.getRowJSON(i);
    if (rowJson.stdDt > rowJson.endDt) {
      await $c.win.alert($p, i + 1 + " 행의 종료일자가 기준일자와 맞지 않습니다.");
      return;
    }
    if (rowJson.selpchClsCd == "1" && rowJson.acctDeptCd == "") {
      await $c.win.alert($p, "매출일 경우 귀속부서 입력은 필수입니다.");
      return;
    }
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk) {
    $c.sbm.execute($p, sbm_saveApPrice);
  }
};

//-------------------------------------------------------------------------
// 체크박스 선택 상태 유무 체크
//-------------------------------------------------------------------------
scwin.f_checkflag = function () {
  for (let idx = 0; idx < ds_apUnitPrice.getRowCount(); idx++) {
    if (ds_apUnitPrice.getCellData(idx, "selYn") == "T") {
      return true;
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.f_Confirm = async function (confirmYn) {
  let message = "";
  if (confirmYn == "1") {
    message = "확정";
  } else if (confirmYn == "0") {
    message = "확정취소";
  } else {
    return;
  }
  if (!(await scwin.f_checkflag())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]);
    return;
  }

  // let chk = await $c.win.confirm(MSG_CM_CRM_010);
  let chk;
  if (confirmYn == "1") {
    chk = await $c.win.confirm($p, "확정을(를) 적용하시겠습니까?");
  } else if (confirmYn == "0") {
    chk = await $c.win.confirm($p, "확정취소을(를) 적용하시겠습니까?");
  }
  if (chk) {
    for (let idx = 0; idx < ds_apUnitPrice.getRowCount(); idx++) {
      if (ds_apUnitPrice.getCellData(idx, "selYn") == "T") {
        ds_apUnitPrice.setCellData(idx, "confYn", confirmYn);
      }
    }
    $c.sbm.execute($p, sbm_confirmApPrice);
  }
};

//-------------------------------------------------------------------------
// 신규(행추가)
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (!(await scwin.f_Check())) {
    return;
  }
  ds_apUnitPrice.insertRow(ds_apUnitPrice.getRowCount());
  let curPos = ds_apUnitPrice.getRowCount() - 1;
  gr_apUnitPrice.setFocusedCell(curPos, 0);
  ds_apUnitPrice.setCellData(curPos, "stdDt", scwin.today);
  if (ds_apUnitPrice.getRowCount() > 1) {
    let rowJson = ds_apUnitPrice.getRowJSON(curPos - 1);
    ds_apUnitPrice.setCellData(curPos, "clntNo", rowJson.clntNo);
    ds_apUnitPrice.setCellData(curPos, "clntNm", rowJson.clntNm);
    ds_apUnitPrice.setCellData(curPos, "selpchClsCd", rowJson.selpchClsCd);
  }
  ds_apUnitPrice.setCellData(curPos, "upr", "0");
  ds_apUnitPrice.setCellData(curPos, "endDt", await scwin.lastDay(scwin.today));
};

//-------------------------------------------------------------------------
// 삭제(행삭제)
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  if (ds_apUnitPrice.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    let rowPosition = gr_apUnitPrice.getFocusedRowIndex();
    if (ds_apUnitPrice.getRowStatus(rowPosition) == "C") {
      ds_apUnitPrice.removeRow(rowPosition);
    } else {
      ds_apUnitPrice.deleteRow(rowPosition);
    }
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_clnt.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
      }, pCode, pName, "T", null, null, null, null, null, null, null, null, null);
      break;
  }
  return;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (data, disGubun, isCode) {
  let pVal = data;
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};

//-------------------------------------------------------------------------
// 전자결재를 위한 해당월 매출집계내역을 조회한다.
//-------------------------------------------------------------------------
scwin.f_RetrieveSellCont = async function () {
  let pchsCnt = 0;
  let stdDt = "";
  let endDt = "";
  let clntNo = "";
  for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
    let rowJson = ds_apUnitPrice.getRowJSON(i);
    if (rowJson.selYn == "T" && rowJson.selpchClsCd == "1") {
      stdDt = rowJson.stdDt;
      endDt = rowJson.endDt;
      clntNo = rowJson.clntNo;
      pchsCnt++;
      ds_sellCond.set("stdDt", stdDt);
      ds_sellCond.set("endDt", endDt);
      ds_sellCond.set("clntNo", clntNo);
      if (pchsCnt > 0) {
        $c.sbm.execute($p, sbm_retrieveSellCont);
      }
    }
    pchsCnt = 0;
  }
};

//-------------------------------------------------------------------------
// 전자결재를 위한 범칙금 리스트 정보와 건수, 총금액을 리턴한다
//-------------------------------------------------------------------------
scwin.f_getFineItemList = async function () {
  let oResult = {};
  oResult.itemList = "";
  oResult.itemSize = 0;
  oResult.itemTotal = 0;
  for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
    let rowJson = ds_apUnitPrice.getRowJSON(i);
    if (rowJson.selYn == "T") {
      if (oResult.itemList == "") {
        oResult.itemList += rowJson.stdDt + ":" + rowJson.selpchClsCd + ":" + rowJson.clntNo + ":" + rowJson.commClsCd;
      } else {
        oResult.itemList += "," + rowJson.stdDt + ":" + rowJson.selpchClsCd + ":" + rowJson.clntNo + ":" + rowJson.commClsCd;
      }
      oResult.itemSize += 1;
      oResult.itemTotal += 1;
    }
  }
  return oResult;
};

//-------------------------------------------------------------------------
// 전자결재요청 Tray Component에서 EP 사용자 ID가져오기
//-------------------------------------------------------------------------	
scwin.f_getSSOInfo = async function () {
  // TODO
  /* let EXIST_YN = 0;
  let epUserId = "";
   try {
      EXIST_YN = SSOCheck.IsExist("GROUP");
  } catch (exception) {
      EXIST_YN = 0;
  }
   if (EXIST_YN == 1) {
      epUserId = SSOCheck.GetUID("GROUP");
  }
  return epUserId; */
};

//-------------------------------------------------------------------------
// 공급물량내역을 가져온후 TEMP DATASET에 추가
//-------------------------------------------------------------------------
scwin.f_addRowSellCont = async function () {
  if (ds_sellContents.getRowCount() > 0) {
    for (let i = 0; i < ds_sellContents.getRowCount(); i++) {
      ds_sellContentsTemp.insertRow(ds_sellContentsTemp.getRowCount());
      let tRow = ds_sellContentsTemp.getRowCount() - 1;
      let rowJson = ds_sellContents.getRowJSON(i);
      ds_sellContentsTemp.setCellData(tRow, "clntNo", rowJson.clntNo);
      ds_sellContentsTemp.setCellData(tRow, "clntNm", rowJson.clntNm);
      ds_sellContentsTemp.setCellData(tRow, "constSite", rowJson.constSite);
      ds_sellContentsTemp.setCellData(tRow, "qty", rowJson.qty);
      ds_sellContentsTemp.setCellData(tRow, "postDt", rowJson.postDt);
    }
  }
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_RequestElectronicApprove = async function () {
  let vReqApprvDocKndCd = "018";
  let vReqUserId = $c.data.getMemInfo($p, "userId");
  let vEpUsrId = scwin.epId;
  ds_sellContentsTemp.removeAll();
  await scwin.f_RetrieveSellCont();
  let fineInfo = await scwin.f_getFineItemList();
  if (fineInfo.itemSize == 0) {
    await $c.gus.cfAlertMsg($p, "전자결재 대상을 선택해주십시오.");
    return false;
  }
  if (vEpUsrId == "") {
    await $c.gus.cfAlertMsg($p, " EP사용자 ID정보가 없습니다.");
    return false;
  }
  let confirmChk = await $c.win.confirm($p, "전자결재 요청하시겠습니까?");
  if (confirmChk != true) {
    return;
  }
  let apprvYm = "";
  for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
    let rowJson = ds_apUnitPrice.getRowJSON(i);
    if (rowJson.selYn == "T") {
      apprvYm = rowJson.stdDt;
      if (apprvYm.length > 0) {
        break;
      }
    }
  }
  for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
    let rowJsonI = ds_apUnitPrice.getRowJSON(i);
    if (rowJsonI.selYn == "T") {
      for (let j = 0; j < ds_apUnitPrice.getRowCount(); j++) {
        let rowJsonJ = ds_apUnitPrice.getRowJSON(j);
        if (rowJsonJ.selYn == "T" && rowJsonI.commClsCd != rowJsonJ.commClsCd) {
          await $c.win.alert($p, "단일 상품그룹만 전자결재 상신이 가능합니다.");
          return;
        }
      }
    }
  }
  let vReqApprvTitle = "아스팔트 " + apprvYm.substring(0, 4) + "년 " + apprvYm.substring(4, 6) + "월 정산확정";
  let cnt = 0;
  let modelNm = "";
  let partNm = "";
  let partCd = "";
  let chkValue = "0";
  let chkCnt = 0;
  let pchsCnt = 0;
  let sellCnt = 0;
  let sellRowCnt = 0;
  let pchsAmt = 0;
  let pchsUpr = 0;
  let nextMonth = "";
  let sumQty = 0;
  let sumAmt = 0;
  let commClsCd = "";
  let commClsNm = "";
  let nowDt = scwin.today;
  nextMonth = apprvYm.substring(0, 4) + apprvYm.substring(4, 6) + "01";
  for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
    let rowJson = ds_apUnitPrice.getRowJSON(i);
    if (rowJson.selYn == "T") {
      chkCnt++;
      if (rowJson.selpchClsCd == "1") {
        pchsCnt++;
      } else if (rowJson.selpchClsCd == "2") {
        sellCnt++;
      }
      if (chkCnt == 1) {
        commClsCd = rowJson.commClsCd;
        commClsNm = gr_apUnitPrice.getCellDisplayData(i, "commClsCd");
      }
    }
  }
  if (chkCnt == 0) {
    await $c.win.alert($p, "선택된 FMS정비AP단가관리가  없습니다.");
    return;
  } else if (chkCnt > 0 && pchsCnt == chkCnt) {
    chkValue = "1";
  } else if (chkCnt > 0 && sellCnt == chkCnt) {
    chkValue = "2";
  } else {
    chkValue = "0";
  }
  let vApprvDtlInfo = "";
  if (commClsCd == "05") {
    let styleTb = 'class=tb';
    vApprvDtlInfo = '<head>';
    vApprvDtlInfo += '<style type=text/css>';
    vApprvDtlInfo += '	.tb { ';
    vApprvDtlInfo += '		border-top:solid 1px #000000;';
    vApprvDtlInfo += '		border-right:solid 1px #000000;';
    vApprvDtlInfo += '		border-left:solid 1px #000000; ';
    vApprvDtlInfo += '		border-bottom:solid 1px #000000;';
    vApprvDtlInfo += '	}';
    vApprvDtlInfo += '</style>';
    vApprvDtlInfo += '</head>';
    vApprvDtlInfo += '<body align=center>';
    vApprvDtlInfo += '<table width=850 cellspacing=0 cellpadding=0 border=1 ' + styleTb + '>';
    vApprvDtlInfo += '	<tr>';
    vApprvDtlInfo += '		<td height=35 align=center ' + styleTb + '>제 목</td>';
    vApprvDtlInfo += '		<td ' + styleTb + '><b>아스팔트 정산 확정  (' + apprvYm.substring(0, 4) + '년 ' + apprvYm.substring(4, 6) + '월)</b></td>';
    vApprvDtlInfo += '	</tr>';
    vApprvDtlInfo += '	<tr>';
    vApprvDtlInfo += '		<td colspan=2 ' + styleTb + '>';
    vApprvDtlInfo += '			<table width=850 border=0>';
    vApprvDtlInfo += '				<tr>';
    vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
    vApprvDtlInfo += '				</tr>';
    vApprvDtlInfo += '				<tr>';
    vApprvDtlInfo += '					<td colspan=2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아스팔트 공급관련 ' + apprvYm.substring(4, 6) + '월초 예상단가 제시 후 ' + apprvYm.substring(4, 6) + '월말 확정단가를 아래와 같이';
    vApprvDtlInfo += '						통보하여 상호 정산하고자 하오니 재가하여 주시기 바랍니다.</td>';
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
    for (let j = 0; j < ds_apUnitPrice.getRowCount(); j++) {
      let rowJsonJ = ds_apUnitPrice.getRowJSON(j);
      if (rowJsonJ.selpchClsCd == "1" && rowJsonJ.clntNo == "230335" && rowJsonJ.selYn == "T") {
        pchsAmt = rowJsonJ.upr;
      }
    }
    if (chkValue == "0") {
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td><font face=굴림><b>1. AP(아스팔트)단가</b></font></td>';
      vApprvDtlInfo += '					<td align=right>(단위:원/kg, VAT별도)</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td colspan=2 align=right>';
      vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
      vApprvDtlInfo += '							<col width=80 align=center></col>';
      vApprvDtlInfo += '							<col width=80 align=center></col>';
      vApprvDtlInfo += '							<col width=130 align=left></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=180 align=left></col>';
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td height=30 colspan=2 ' + styleTb + '><font size=2 face=굴림><b>구분</b></font></td>';
      vApprvDtlInfo += '								<td align=center ' + styleTb + '><font size=2 face=굴림><b>내역</b></font></td>';
      vApprvDtlInfo += '								<td align=center ' + styleTb + '><font size=2 face=굴림><b>시장단가</b></font></td>';
      vApprvDtlInfo += '								<td align=center ' + styleTb + '><font size=2 face=굴림><b>매입단가</b></font></td>';
      vApprvDtlInfo += '								<td align=center ' + styleTb + '><font size=2 face=굴림><b>공급단가</b></font></td>';
      vApprvDtlInfo += '								<td align=center ' + styleTb + '><font size=2 face=굴림><b>비고</b></font></td>';
      vApprvDtlInfo += '							</tr>';
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' rowspan=' + (sellCnt + 1) + '><font size=2 face=굴림>' + apprvYm.substring(4, 6) + '월</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=25><font size=2 face=굴림>월초</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>납품예정단가</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '							</tr>';
      for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
        let rJson = ds_apUnitPrice.getRowJSON(i);
        if (rJson.selpchClsCd == "2" && rJson.selYn == "T") {
          vApprvDtlInfo += '							<tr>';
          vApprvDtlInfo += '								<td ' + styleTb + ' height=25><font size=2 face=굴림>월말</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>정산확정단가</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(rJson.mrkUpr)) + '</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(rJson.upr)) + '</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(pchsAmt)) + '</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + rJson.clntNm + '</font></td>';
          vApprvDtlInfo += '							</tr>';
        }
      }
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=25><font size=2 face=굴림>' + (Number(nextMonth.substring(4, 2)) + 1) + '월</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>월초</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>납품예정단가</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '							</tr>';
      vApprvDtlInfo += '						</table>';
      vApprvDtlInfo += '					</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td colspan=2 height=30 align=center>&nbsp;</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td><font face=굴림><b>2. ' + apprvYm.substring(4, 6) + '월 공급 물량</b></font></td>';
      vApprvDtlInfo += '					<td align=right>(단위:원, VAT별도)</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td colspan=2 align=right>';
      vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
      vApprvDtlInfo += '							<col width=140 align=left></col>';
      vApprvDtlInfo += '							<col width=180 align=left></col>';
      vApprvDtlInfo += '							<col width=115 align=right></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=115 align=right></col>';
      vApprvDtlInfo += '							<col width=140 align=left></col>';
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>업체명</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>현장</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>수량(kg)</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>단가(원/kg)</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>금액</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>비고</b></font></td>';
      vApprvDtlInfo += '							</tr>';
      let rowSpanCnt = 0;
      let temp = 0;
      let rArray = [];
      for (let x = 0; x < ds_sellContentsTemp.getRowCount(); x++) {
        let rowJsonX = ds_sellContentsTemp.getRowJSON(x);
        let xClntNo = rowJsonX.clntNo;
        let xStdDt = rowJsonX.postDt;
        for (let y = 0; y < ds_sellContentsTemp.getRowCount(); y++) {
          let rowJsonY = ds_sellContentsTemp.getRowJSON(y);
          let zClntNo = rowJsonY.clntNo;
          let zStdDt = rowJsonY.postDt;
          if (xClntNo == zClntNo && xStdDt == zStdDt) {
            rowSpanCnt++;
          }
        }
        rArray[x] = rowSpanCnt;
        rowSpanCnt = 0;
      }
      for (let k = 0; k < ds_sellContentsTemp.getRowCount(); k++) {
        let rowJsonK = ds_sellContentsTemp.getRowJSON(k);
        let clntNo = rowJsonK.clntNo;
        let stdDtTemp = rowJsonK.postDt;
        for (let m = 0; m < ds_apUnitPrice.getRowCount(); m++) {
          let rowJsonM = ds_apUnitPrice.getRowJSON(m);
          let apClntNo = rowJsonM.clntNo;
          let apStdDt = rowJsonM.stdDt;
          if (clntNo == apClntNo && stdDtTemp == apStdDt) {
            pchsUpr = rowJsonM.upr;
          }
        }
        vApprvDtlInfo += '							<tr>';
        vApprvDtlInfo += '								<td ' + styleTb + ' height=25 align=left><font size=2 face=굴림>&nbsp;' + rowJsonK.clntNm + '</font></td>';
        vApprvDtlInfo += '								<td ' + styleTb + ' align=left><font size=2 face=굴림>&nbsp;' + rowJsonK.constSite + '</font></td>';
        vApprvDtlInfo += '								<td ' + styleTb + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(rowJsonK.qty)) + '</font></td>';
        if (rArray[k] > 1 && temp == 0) {
          vApprvDtlInfo += '								<td ' + styleTb + ' rowspan=' + rArray[k] + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(pchsUpr)) + '</font></td>';
          temp++;
        } else if (rArray[k] == 1) {
          vApprvDtlInfo += '								<td ' + styleTb + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(pchsUpr)) + '</font></td>';
        }
        vApprvDtlInfo += '								<td ' + styleTb + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(rowJsonK.qty * pchsUpr)) + '</font></td>';
        vApprvDtlInfo += '								<td ' + styleTb + ' align=left><font size=2 face=굴림>&nbsp;</font></td>';
        vApprvDtlInfo += '							</tr>';
        sumQty += Number(rowJsonK.qty);
        sumAmt += Number(rowJsonK.qty) * pchsUpr;
        if (temp == rArray[k]) {
          temp = 0;
        }
      }
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=25 align=center colspan=2><font size=2 face=굴림>계</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(sumQty)) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(sumAmt)) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '							</tr>';
      vApprvDtlInfo += '						</table>';
      vApprvDtlInfo += '					</td>';
      vApprvDtlInfo += '				</tr>';
    } else if (chkValue == "1") {
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td><font face=굴림><b>1. ' + apprvYm.substring(4, 6) + '월 공급 물량</b></font></td>';
      vApprvDtlInfo += '					<td align=right>(단위:원, VAT별도)</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td colspan=2 align=right>';
      vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
      vApprvDtlInfo += '							<col width=140 align=left></col>';
      vApprvDtlInfo += '							<col width=180 align=left></col>';
      vApprvDtlInfo += '							<col width=115 align=right></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=115 align=right></col>';
      vApprvDtlInfo += '							<col width=140 align=left></col>';
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>업체명</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>현장</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>수량(kg)</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>단가(원/kg)</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>금액</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>비고</b></font></td>';
      vApprvDtlInfo += '							</tr>';
      let rowSpanCnt2 = 0;
      let temp2 = 0;
      let rArray2 = [];
      for (let x = 0; x < ds_sellContentsTemp.getRowCount(); x++) {
        let rowJsonX = ds_sellContentsTemp.getRowJSON(x);
        let xClntNo = rowJsonX.clntNo;
        let xStdDt = rowJsonX.postDt;
        for (let y = 0; y < ds_sellContentsTemp.getRowCount(); y++) {
          let rowJsonY = ds_sellContentsTemp.getRowJSON(y);
          let zClntNo = rowJsonY.clntNo;
          let zStdDt = rowJsonY.postDt;
          if (xClntNo == zClntNo && xStdDt == zStdDt) {
            rowSpanCnt2++;
          }
        }
        rArray2[x] = rowSpanCnt2;
        rowSpanCnt2 = 0;
      }
      for (let k = 0; k < ds_sellContentsTemp.getRowCount(); k++) {
        let rowJsonK = ds_sellContentsTemp.getRowJSON(k);
        let clntNo = rowJsonK.clntNo;
        let stdDtTemp = rowJsonK.postDt;
        for (let m = 0; m < ds_apUnitPrice.getRowCount(); m++) {
          let rowJsonM = ds_apUnitPrice.getRowJSON(m);
          let apClntNo = rowJsonM.clntNo;
          let apStdDt = rowJsonM.stdDt;
          if (clntNo == apClntNo && stdDtTemp == apStdDt) {
            pchsUpr = rowJsonM.upr;
          }
        }
        vApprvDtlInfo += '							<tr>';
        vApprvDtlInfo += '								<td ' + styleTb + ' height=25 align=left><font size=2 face=굴림>&nbsp;' + rowJsonK.clntNm + '</font></td>';
        vApprvDtlInfo += '								<td ' + styleTb + ' align=left><font size=2 face=굴림>&nbsp;' + rowJsonK.constSite + '</font></td>';
        vApprvDtlInfo += '								<td ' + styleTb + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(rowJsonK.qty)) + '</font></td>';
        if (rArray2[k] > 1 && temp2 == 0) {
          vApprvDtlInfo += '								<td ' + styleTb + ' rowspan=' + rArray2[k] + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(pchsUpr)) + '</font></td>';
          temp2++;
        } else if (rArray2[k] == 1) {
          vApprvDtlInfo += '								<td ' + styleTb + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(pchsUpr)) + '</font></td>';
        }
        vApprvDtlInfo += '								<td ' + styleTb + ' align=right><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(rowJsonK.qty * pchsUpr)) + '</font></td>';
        vApprvDtlInfo += '								<td ' + styleTb + ' align=left><font size=2 face=굴림>&nbsp;</font></td>';
        vApprvDtlInfo += '							</tr>';
        sumQty += Number(rowJsonK.qty);
        sumAmt += Number(rowJsonK.qty) * pchsUpr;
        if (temp2 == rArray2[k]) {
          temp2 = 0;
        }
      }
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=25 align=center colspan=2><font size=2 face=굴림><b>계</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(sumQty)) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;' + $c.gus.cfInsertComma($p, Number(sumAmt)) + '</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '							</tr>';
      vApprvDtlInfo += '						</table>';
      vApprvDtlInfo += '					</td>';
      vApprvDtlInfo += '				</tr>';
    } else if (chkValue == "2") {
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td><font face=굴림><b>1. AP(아스팔트)단가</b></font></td>';
      vApprvDtlInfo += '					<td align=right>(단위:원/kg, VAT별도)</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td colspan=2 align=right>';
      vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
      vApprvDtlInfo += '							<col width=80 align=center></col>';
      vApprvDtlInfo += '							<col width=80 align=center></col>';
      vApprvDtlInfo += '							<col width=130 align=left></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=110 align=right></col>';
      vApprvDtlInfo += '							<col width=180 align=left></col>';
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=30 colspan=2><font size=2 face=굴림><b>구분</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>내역</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>시장단가</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>매입단가</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>공급단가</b></font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>비고</b></font></td>';
      vApprvDtlInfo += '							</tr>';
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' rowspan=' + (sellCnt + 1) + '><font size=2 face=굴림>' + apprvYm.substring(4, 6) + '월</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=25><font size=2 face=굴림>월초</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>납품예정단가</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '							</tr>';
      for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
        let rowJsonI = ds_apUnitPrice.getRowJSON(i);
        if (rowJsonI.selpchClsCd == "2" && rowJsonI.selYn == "T") {
          vApprvDtlInfo += '							<tr>';
          vApprvDtlInfo += '								<td ' + styleTb + ' height=25><font size=2 face=굴림>월말</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>정산확정단가</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(rowJsonI.mrkUpr)) + '</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(rowJsonI.upr)) + '</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(pchsAmt)) + '</font></td>';
          vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>' + rowJsonI.clntNm + '</font></td>';
          vApprvDtlInfo += '							</tr>';
        }
      }
      vApprvDtlInfo += '							<tr>';
      vApprvDtlInfo += '								<td ' + styleTb + ' height=25><font size=2 face=굴림>' + (Number(nextMonth.substring(4, 2)) + 1) + '월</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>월초</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>납품예정단가</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '								<td ' + styleTb + '><font size=2 face=굴림>&nbsp;</font></td>';
      vApprvDtlInfo += '							</tr>';
      vApprvDtlInfo += '						</table>';
      vApprvDtlInfo += '					</td>';
      vApprvDtlInfo += '				</tr>';
      vApprvDtlInfo += '				<tr>';
      vApprvDtlInfo += '					<td colspan=2 height=30 align=center>&nbsp;</td>';
      vApprvDtlInfo += '				</tr>';
    }
    vApprvDtlInfo += '				<tr>';
    vApprvDtlInfo += '					<td colspan=2 height=60 align=center>&nbsp;</td>';
    vApprvDtlInfo += '				</tr>';
    vApprvDtlInfo += '			</table>';
    vApprvDtlInfo += '		</td>';
    vApprvDtlInfo += '	</tr>';
    vApprvDtlInfo += '</table>';
    vApprvDtlInfo += '</body>';
  } else {
    vReqApprvTitle = commClsNm + " 단가 승인요청 - (" + nowDt.substring(0, 4) + "/" + nowDt.substring(4, 6) + "/" + nowDt.substring(6, 8) + ")";
    vApprvDtlInfo = " <html> ";
    vApprvDtlInfo += "  <head></head>";
    vApprvDtlInfo += "  <body wdith='80%'>";
    vApprvDtlInfo += "	<font style='font-family:맑은 고딕; font-size:12px'>";
    vApprvDtlInfo += "	&nbsp;&nbsp;&nbsp;아래와 같이 " + commClsNm + " 단가를 확정하고자 하오니 승인하여 주시기 바랍니다.";
    vApprvDtlInfo += "	</font><br/><br/>";
    vApprvDtlInfo += "    <table width='100%' border=0  cellspacing=0 cellpadding=2 style='font-family:맑은 고딕; font-size:12px'>";
    vApprvDtlInfo += "		<col width='15%' align='center'>";
    vApprvDtlInfo += "		<col width='10%' align='center'>";
    vApprvDtlInfo += "		<col width='15%' align='center'>";
    vApprvDtlInfo += "		<col width='25%' align='left'>";
    vApprvDtlInfo += "		<col width='20%' align='right'>";
    vApprvDtlInfo += "		<col width='15%' align='center'>";
    vApprvDtlInfo += "		<tr>";
    vApprvDtlInfo += "		 <td colspan='3' align='left'  >＊" + commClsNm + " 단가 내역</td>";
    vApprvDtlInfo += "		 <td colspan='3' align='right' >(단위 : 10리터/원, VAT포함 )</td>";
    vApprvDtlInfo += "		</tr>";
    vApprvDtlInfo += "		<tr>";
    vApprvDtlInfo += "		  <td align='center' style='border-top:solid 1px #000000;border-bottom:solid 1px #000000;border-right:solid 1px #000000;border-left:solid 1px #000000;'>기준일자</td>";
    vApprvDtlInfo += "		  <td align='center' style='border-top:solid 1px #000000;border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>구분</td>";
    vApprvDtlInfo += "		  <td align='center' style='border-top:solid 1px #000000;border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>거래처코드</td>";
    vApprvDtlInfo += "		  <td align='center' style='border-top:solid 1px #000000;border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>거래처명</td>";
    vApprvDtlInfo += "		  <td align='center' style='border-top:solid 1px #000000;border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>단가</td>";
    vApprvDtlInfo += "		  <td align='center' style='border-top:solid 1px #000000;border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>종료일자</td>";
    vApprvDtlInfo += "		</tr>";
    let stdDt2 = "";
    let endDt2 = "";
    for (let k = 0; k < ds_apUnitPrice.getRowCount(); k++) {
      let rowJsonK = ds_apUnitPrice.getRowJSON(k);
      if (rowJsonK.selYn == "T") {
        stdDt2 = rowJsonK.stdDt;
        endDt2 = rowJsonK.endDt;
        vApprvDtlInfo += "		<tr>";
        vApprvDtlInfo += "		  <td align='center' style='border-bottom:solid 1px #000000;border-right:solid 1px #000000;border-left:solid 1px #000000;'>" + stdDt2.substring(0, 4) + "/" + stdDt2.substring(4, 6) + "/" + stdDt2.substring(6, 8) + "</td>";
        vApprvDtlInfo += "		  <td align='center' style='border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>" + gr_apUnitPrice.getCellDisplayData(k, "selpchClsCd") + "</td>";
        vApprvDtlInfo += "		  <td align='center' style='border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>" + rowJsonK.clntNo + "</td>";
        vApprvDtlInfo += "		  <td align='left'   style='border-bottom:solid 1px #000000;border-right:solid 1px #000000;padding-left:5'>" + rowJsonK.clntNm + "</td>";
        vApprvDtlInfo += "		  <td align='right'  style='border-bottom:solid 1px #000000;border-right:solid 1px #000000;padding-right:5'>" + $c.gus.cfInsertComma($p, rowJsonK.upr) + "</td>";
        vApprvDtlInfo += "		  <td align='center' style='border-bottom:solid 1px #000000;border-right:solid 1px #000000;'>" + endDt2.substring(0, 4) + "/" + endDt2.substring(4, 6) + "/" + endDt2.substring(6, 8) + "</td>";
        vApprvDtlInfo += "		</tr>";
      }
    }
    vApprvDtlInfo += "	</table>";
    vApprvDtlInfo += "  </body>";
    vApprvDtlInfo += "</html>";
  }
  let params = {
    apprvDocKndCd: vReqApprvDocKndCd,
    //결재문서종류
    reqUserId: vReqUserId,
    //결재요청자
    epUserId: vEpUsrId,
    //EP사용자
    apprvTitle: vReqApprvTitle,
    //결재제목
    apprvDtlInfo: vApprvDtlInfo,
    //결재문서양식
    APunitPriceList: fineInfo.itemList,
    //결제대상(유류정보)
    bmodifylines: "Y",
    // 문서정보 변경 가능 여부
    bmodifybody: "Y",
    // 문서 본문 수정 여부
    bmodifyattach: "Y" // 첨부파일 기능 활성화 여부
  };

  // 데이터셋에 정보설정
  dma_approve.setJSON(params);

  // 여기부터가 핵심: f_aprv처럼 팝업 + POST submit
  let url = "/ps.eq.fmsmgnt.RequestFmsAPUnitPriceApproveCMD.do";
  let targetName = "aprvPopup"; // 고정 이름 재사용

  let data = dma_approve.getJSON() || {};
  let form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = targetName;

  // 팝업 차단 회피: 사용자 confirm 이후 즉시 open
  let win = window.open("", targetName);
  if (!win) {
    console.warn("Popup blocked");
    // 필요하면 여기서 alert 처리
    // $c.win.alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해 주세요.");
  }
  Object.keys(data).forEach(key => {
    let input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = (data[key] ?? "").toString();
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
scwin.sbm_saveApPrice_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_confirmApPrice_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_apUnitPrice.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieveSellCont_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_addRowSellCont();
};
scwin.gr_apUnitPrice_ontextimageclick = async function (rowIndex, columnIndex, columnId) {
  let data = ds_apUnitPrice.getCellData(rowIndex, columnId);
  if (columnId == "clntNo") {
    udc_comCode1.cfCommonPopUp(function (rtnList) {
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo1, txt_clntNm1);
      ds_apUnitPrice.setCellData(rowIndex, columnId, ed_clntNo1.getValue());
      ds_apUnitPrice.setCellData(rowIndex, "clntNm", txt_clntNm1.getValue());
    }, data, "", "T", null, null, null, null, null, null, null, null, null);
  }
  if (columnId == "acctDeptCd") {
    udc_comCode2.cfCommonPopUp(function (rtnList) {
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo2, txt_clntNm2);
      ds_apUnitPrice.setCellData(rowIndex, columnId, ed_clntNo2.getValue());
      ds_apUnitPrice.setCellData(rowIndex, "acctDeptNm", txt_clntNm2.getValue());
    }, data, "", "T", null, null, null, null, null, null, null, null, null);
  }
  return true;
};
scwin.gr_apUnitPrice_onafteredit = async function (rowIndex, columnIndex, value) {
  let rowJson = ds_apUnitPrice.getRowJSON(rowIndex);
  let columnId = this.getColumnID(columnIndex);
  if (columnId == "clntNo") {
    udc_comCode1.cfCommonPopUp(function (rtnList) {
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo1, txt_clntNm1);
      ds_apUnitPrice.setCellData(rowIndex, columnId, ed_clntNo1.getValue());
      ds_apUnitPrice.setCellData(rowIndex, "clntNm", txt_clntNm1.getValue());
    }, rowJson.clntNo, "", "T", null, null, null, null, null, null, null, null, null);
  }
  if (columnId == "acctDeptCd") {
    udc_comCode2.cfCommonPopUp(function (rtnList) {
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo2, txt_clntNm2);
      ds_apUnitPrice.setCellData(rowIndex, columnId, ed_clntNo2.getValue());
      ds_apUnitPrice.setCellData(rowIndex, "acctDeptNm", txt_clntNm2.getValue());
    }, rowJson.acctDeptCd, "", "T", null, null, null, null, null, null, null, null, null);
  }
  if (columnId == "endDt") {
    if (rowJson.stdDt > rowJson.endDt) {
      await $c.win.alert($p, "종료일자가 기준일자와 맞지 않습니다.");
      return false;
    }
  }
  return true;
};
scwin.ds_apUnitPrice_oncelldatachange = async function (info) {
  let row = info.row;
  let colid = info.colId;
  if (row >= 0 && colid == "selpchClsCd") {
    ds_apUnitPrice.setCellData(row, "selpchClsNm", gr_apUnitPrice.getCellDisplayData(row, "selpchClsCd"));
  }
};
scwin.gr_apUnitPrice_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let RowStatus = ds_apUnitPrice.getRowStatus(rowIndex);
  gr_apUnitPrice.setColumnReadOnly("stdDt", true);
  gr_apUnitPrice.setColumnReadOnly("clntNo", true);
  gr_apUnitPrice.setColumnReadOnly("clntNm", true);
  gr_apUnitPrice.setColumnReadOnly("selpchClsCd", true);
  gr_apUnitPrice.setColumnReadOnly("upr", true);
  gr_apUnitPrice.setColumnReadOnly("endDt", true);
  gr_apUnitPrice.setColumnReadOnly("confReqNo", true);
  gr_apUnitPrice.setColumnReadOnly("confYn", true);
  gr_apUnitPrice.setColumnReadOnly("confDtm", true);
  gr_apUnitPrice.setColumnReadOnly("regId", true);
  gr_apUnitPrice.setColumnReadOnly("regDtm", true);
  gr_apUnitPrice.setColumnReadOnly("modId", true);
  gr_apUnitPrice.setColumnReadOnly("modDtm", true);
  gr_apUnitPrice.setColumnReadOnly("mrkUpr", true);
  gr_apUnitPrice.setColumnReadOnly("rmk", true);
  if (Number(ds_apUnitPrice.getCellData(rowIndex, "confYn")) < 1) {
    if (RowStatus == "R" || RowStatus == "U") {
      gr_apUnitPrice.setColumnReadOnly("stdDt", true);
      gr_apUnitPrice.setColumnReadOnly("clntNo", true);
      gr_apUnitPrice.setColumnReadOnly("clntNm", true);
      gr_apUnitPrice.setColumnReadOnly("selpchClsCd", false);
      gr_apUnitPrice.setColumnReadOnly("upr", false);
      gr_apUnitPrice.setColumnReadOnly("endDt", false);
      gr_apUnitPrice.setColumnReadOnly("confReqNo", true);
      gr_apUnitPrice.setColumnReadOnly("confYn", true);
      gr_apUnitPrice.setColumnReadOnly("confDtm", true);
      gr_apUnitPrice.setColumnReadOnly("regId", true);
      gr_apUnitPrice.setColumnReadOnly("regDtm", true);
      gr_apUnitPrice.setColumnReadOnly("modId", true);
      gr_apUnitPrice.setColumnReadOnly("modDtm", true);
      gr_apUnitPrice.setColumnReadOnly("mrkUpr", false);
      gr_apUnitPrice.setColumnReadOnly("rmk", false);
    } else if (RowStatus == "C") {
      gr_apUnitPrice.setColumnReadOnly("stdDt", false);
      gr_apUnitPrice.setColumnReadOnly("clntNo", false);
      gr_apUnitPrice.setColumnReadOnly("clntNm", true);
      gr_apUnitPrice.setColumnReadOnly("selpchClsCd", false);
      gr_apUnitPrice.setColumnReadOnly("upr", false);
      gr_apUnitPrice.setColumnReadOnly("endDt", false);
      gr_apUnitPrice.setColumnReadOnly("confReqNo", false);
      gr_apUnitPrice.setColumnReadOnly("confYn", true);
      gr_apUnitPrice.setColumnReadOnly("confDtm", false);
      gr_apUnitPrice.setColumnReadOnly("regId", false);
      gr_apUnitPrice.setColumnReadOnly("regDtm", false);
      gr_apUnitPrice.setColumnReadOnly("modId", false);
      gr_apUnitPrice.setColumnReadOnly("modDtm", false);
      gr_apUnitPrice.setColumnReadOnly("mrkUpr", false);
      gr_apUnitPrice.setColumnReadOnly("rmk", false);
    }
  }
  if (columnId == "selYn") {
    for (let i = 0; i < ds_apUnitPrice.getRowCount(); i++) {
      let rowJson = ds_apUnitPrice.getRowJSON(i);
      if (rowJson.selYn == "T") {
        if (ds_apUnitPrice.getCellData(rowIndex, "commClsCd") != rowJson.commClsCd) {
          ds_apUnitPrice.setCellData(rowIndex, "selYn", "F");
          await $c.win.alert($p, "단일 상품그룹만 전자결재 상신이 가능합니다.");
          return;
        }
      }
    }
  }
};
scwin.ds_apUnitPrice_onrowpositionchange = function (info) {
  if (ds_apUnitPrice.getRowStatus(info.newRowIndex) != "C") {
    gr_apUnitPrice.setColumnReadOnly("commClsCd", true);
  } else {
    gr_apUnitPrice.setColumnReadOnly("commClsCd", false);
  }
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  if (ed_clntNo.originalValue == ed_clntNo.getValue()) return;
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), "F", "F");
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  if (txt_clntNm.getValue() == "") {
    ed_clntNo.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(txt_clntNm.getValue(), 1, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), "F", "F");
};
scwin.btn_button1_onclick = function (e) {
  scwin.f_Confirm("1");
};
scwin.btn_button2_onclick = function (e) {
  scwin.f_Confirm("0");
};
scwin.f_Cancel = function () {
  $c.data.undoAll($p, ds_apUnitPrice);
};
scwin.customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  if (colID == "confYn") {
    return data > 0 ? "확정" : "미확정";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stdDt',refDataMap:'ds_search',style:'',id:'udc_stdDt',refEdDt:'endDt',edFromId:'ed_stdDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'lc_selpchClsCdCond',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.selpchClsCd',editType:'select'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'lc_commClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.commClsCd',mandatory:'true',editType:'select',disableEdit:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',id:'lc_confYn',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.confYn',editType:'select'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntEmpNoList',codeId:'ed_clntNo',validTitle:'',nameId:'txt_clntNm',style:'',id:'udc_clnt',refDataCollection:'ds_search',code:'clntNo',UpperFlagCode:'1',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' FMS정비상품단가관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_apUnitPrice',gridDownFn:'scwin.f_Excel',id:'udc_top'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_apUnitPrice',id:'gr_apUnitPrice',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false','ev:ontextimageclick':'scwin.gr_apUnitPrice_ontextimageclick','ev:onafteredit':'scwin.gr_apUnitPrice_onafteredit','ev:oncellclick':'scwin.gr_apUnitPrice_oncellclick',columnMove:'true',fixedColumnNoMove:'true',fixedColumn:'4',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'text',style:'',value:'기준</br>일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'거래처</br>코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'거래처',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'귀속</br>부서',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'귀속</br>부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'text',style:'',value:'매출입</br>구분 ',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClsCd',inputType:'text',style:'',value:'상품',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsNm',inputType:'text',style:'',value:'단가구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'upr',value:'단가(원)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mrkUpr',value:'시장단가(원)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'endDt',value:'종료일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'confYn',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'비고',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'apprvStsCd',value:'결재</br>상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'confReqNo',value:'확정요청번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'confDtm',value:'확정일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'등록자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'등록일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'수정자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'수정일시',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',emptyValue:'F',valueType:'other',readOnly:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',style:'',value:'',width:'120',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'140',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'select',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsNm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mrkUpr',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'endDt',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'confYn',value:'',displayMode:'label',readOnly:'true',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'autoComplete',style:'',id:'apprvStsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'confReqNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'confDtm',value:'',displayMode:'label',hidden:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',hidden:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',hidden:'true',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',id:'udc_bottom',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelFunction:'f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin-top: 15px;'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_button1',type:'button',class:'btn','ev:onclick':'scwin.btn_button1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_button2',style:'',type:'button','ev:onclick':'scwin.btn_button2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_button3',style:'',type:'button','ev:onclick':'scwin.f_RequestElectronicApprove'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_clntNo1',id:'udc_comCode1',maxlengthCode:'6',nameId:'txt_clntNm1',popupID:'',selectID:'retrieveClntEmpNoList',style:'display:none;',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_clntNo2',id:'udc_comCode2',maxlengthCode:'6',nameId:'txt_clntNm2',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'display:none;',validTitle:''}}]}]}]}]}]})