/*amd /ui/ds/fs/bilg/fs_204_03_02b.xml 49949 b42e8aae958743c055bc26665783e4474aafde14925b386549b620e01c1ddbb9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_srchInfo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'srcLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'qryConDtFm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'qryConDtTo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'srcBilgClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'srcOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'srcCntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'queryClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'bilgClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'odrNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clntPcost',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'blank'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'bilgClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'bilgClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'sellAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'pchsAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'pchsRate'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderPcost',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'bilgClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'cntrSiz20'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'cntrSiz40'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'cntrSiz45'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'sellAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'pchsAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'pchsRate'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrSell',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'commSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'sellItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'sellAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'odrNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrPchs',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'cntrInfo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'wrkStpNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'transSection'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'rsltsStdDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'lobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'selpchItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'pchsAmt'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveClntPcostRateListCMD.do',ref:'data:json,[{"id":"ds_srchInfo","key":"IN_DS1"},{"id":"ds_clntPcost","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_clntPcost","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveOrder',encoding:'UTF-8',mediatype:'application/json',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderPcostRateListCMD.do',ref:'data:json,[{"id":"ds_srchInfo","key":"IN_DS1"},{"id":"ds_orderPcost","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderPcost","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveSell',encoding:'UTF-8',mediatype:'application/json',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveCntrSellListCMD.do',ref:'data:json,[{"id":"ds_srchInfo","key":"IN_DS1"},{"id":"ds_cntrSell","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrSell","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrievePchs',encoding:'UTF-8',mediatype:'application/json',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveCntrPchsListCMD.do',ref:'data:json,[{"id":"ds_srchInfo","key":"IN_DS1"},{"id":"ds_cntrPchs","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrPchs","key":"OUT_DS1"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.dateStr = $c.date.getServerDateTime($p);
scwin.firstDate = $c.date.getDateAddMonthDirection($p, scwin.dateStr, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.process = "";
scwin.odrNo = "";
scwin.type = "";
scwin.onpageload = function () {
  scwin.odrNo = $c.data.getParameter($p, "odrNo") == null ? "" : $c.data.getParameter($p, "odrNo");
  scwin.type = $c.data.getParameter($p, "type") == null ? "" : $c.data.getParameter($p, "type");
};
scwin.onUdcCompleted = function () {
  scwin.f_setDSHeader();
  ed_qryConDtFm.setValue(scwin.firstDate);
  ed_qryConDtTo.setValue(scwin.dateStr);
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.f_setDSHeader = function () {
  var rowIndex = ds_srchInfo.insertRow();
  ds_srchInfo.setRowPosition(0);
  ds_srchInfo.setCellAllData(rowIndex, "queryClsCd", "bilgClnt");
  ds_srchInfo.reform();
};

// 거래처별 원가율 조회
scwin.f_retrieve = async function () {
  scwin.process = "search";
  let chk = await $c.gus.cfValidate($p, [ed_srcLobranCd, ed_qryConDtFm, ed_qryConDtTo]);
  if (!chk) {
    return false;
  }
  let chk2 = await $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue());
  if (!chk2) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039)) {
      ed_qryConDtFm.focus();
      return false;
    }
  }
  ds_srchInfo.reform();

  // 조회
  let e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};

// 컨테이너 매출/입 조회
scwin.f_retrieve2 = async function () {
  //ds_cntrPchs.UseFilter = false;

  if (ds_srchInfo.getCellData(0, "odrNo") == "") {
    //넘어온 오더번호가 없다면
    if (await $c.gus.cfAlertMsg($p, "거래처별 원가율을 먼저 조회하세요.")) {
      //조회값 초기화
      ed_srcOdrNo.setValue("");
      ed_srcCntrNo.setValue("");
      return false;
    }
  }
  var chk = !(await $c.gus.cfValidate($p, [ed_srcCntrNo]));
  if (chk) return false;
  ds_srchInfo.setCellData(0, "odrNo", ed_srcOdrNo.getValue());
  //ds_srchInfo.UseChangeInfo = true;
  scwin.f_cntrSellInfo();
};

// 컨테이너 매출 조회
scwin.f_cntrSellInfo = async function () {
  if (ds_srchInfo.getCellAllData(0, "odrNo") != "") {
    // ds_srchInfo.UseChangeInfo = false;
    // 조회
    let e = await $c.sbm.execute($p, sbm_retrieveSell);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      await scwin.sbm_retrieveSell_submitdone(e);
    }
  }
};

// 컨테이너 매입 조회
scwin.f_cntrPchsInfo = async function () {
  if (ds_srchInfo.getCellAllData(0, "odrNo") != "") {
    // ds_srchInfo.UseChangeInfo = false;
    //tr_retrievePchs.Post();
    let e = await $c.sbm.execute($p, sbm_retrievePchs);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrievePchs_submitdone(e);
    }
  }
};

// 조회조건 변경시 기존조건으로 초기화
scwin.f_orderPcostInfo = async function () {
  if (ds_srchInfo.getCellData(0, "bilgClntNo") != "") {
    if (process != "search") {
      // 검색버튼 클릭이 아니라면
      // 검색조건변경여부
      if (!scwin.f_isChangedSrchRslt()) {
        // 변경되지 않았다면 전송
        //ds_srchInfo.UseChangeInfo = false;
        let e = await $c.sbm.execute($p, sbm_retrieveOrder);
        if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
          await scwin.sbm_retrieveOrder_submitdone(e);
        }
      } else {
        // 변경되었다면
        // 이전값으로 변경한다.
        ds_srchInfo.setCellData(0, "srcLobranCd", ds_srchInfo.getOriginalCellData(0, "srcLobranCd"));
        ds_srchInfo.setCellData(0, "qryConDtFm", ds_srchInfo.getOriginalCellData(0, "qryConDtFm"));
        ds_srchInfo.setCellData(0, "qryConDtTo", ds_srchInfo.getOriginalCellData(0, "qryConDtTo"));
        ds_srchInfo.setCellData(0, "srcBilgClntNo", ds_srchInfo.getOriginalCellData(0, "srcBilgClntNo"));

        // 청 구처코드 값이 빈값이면 text박스 초기화
        //if (ds_srchInfo.OrgNameString(1, "srcBilgClntNo") == "") {
        if (ds_srchInfo.getCellData(0, "srcBilgClntNo") == "") {
          ed_srcBilgClntNm.setValue("");
        }

        //ds_srchInfo.UseChangeInfo = false;
        let e = await $c.sbm.execute($p, sbm_retrieveOrder);
        if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
          await scwin.sbm_retrieveOrder_submitdone(e);
        }
      }
    } else {
      // ds_srchInfo.UseChangeInfo = false;
      let e = await $c.sbm.execute($p, sbm_retrieveOrder);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        await scwin.sbm_retrieveOrder_submitdone(e);
      }
    }
  }
};

// 조회조건 변경여부 체크 return bool
scwin.f_isChangedSrchRslt = function () {
  if (ds_srchInfo.getCellData(0, "srcLobranCd") == ds_srchInfo.getOriginalCellData(0, "srcLobranCd")) {
    return true;
  } else if (ds_srchInfo.getCellData(0, "qryConDtFm") == ds_srchInfo.getOriginalCellData(0, "qryConDtFm")) {
    return true;
  } else if (ds_srchInfo.getCellData(0, "qryConDtTo") == ds_srchInfo.getOriginalCellData(0, "qryConDtTo")) {
    return true;
  } else if (ds_srchInfo.getCellData(0, "srcBilgClntNo") == ds_srchInfo.getOriginalCellData(0, "srcBilgClntNo")) {
    return true;
  } else {
    return false;
  }
};

// EMEDIT상자에서 팝업열기전 작업
scwin.f_openPopUpEmeditBefore = function (gubun, nmObj, cdObj, pWinCloseTF) {
  var cdVal = cdObj.getValue().trim();
  if (cdVal == "") {
    if (nmObj != null) {
      nmObj.setValue("");
    }
  } else {
    scwin.f_openPopUpText(gubun, nmObj, cdObj, pWinCloseTF);
  }
};

// text상자에서 팝업열기전 작업
scwin.f_openPopUpTextBefore = function (gubun, nmObj, cdObj, pWinCloseTF) {
  if (nmObj.getValue() == "") {
    cdObj.setValue("");
    return;
  } else {
    cdObj.setValue("");
  }
  scwin.f_openPopUpText(gubun, nmObj, cdObj, pWinCloseTF);
};

// text상자팝업열기(코드(emedit)와 코드명(text) object가 있는경우
scwin.f_openPopUpText = async function (gubun, nmObj, cdObj, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pSelectID = "";
  var pWtitleSearch = "";
  var rtnList = new Array();
  var pWhere = null;
  pCode = cdObj.getValue().trim();
  if (gubun == 3) {
    if (nmObj != null) {
      pName = "";
    }
  } else {
    if (nmObj != null) {
      pName = nmObj.getValue().trim();
    }
  }
  if (gubun == 1) {
    // 매출물류부서
    pSelectID = "retrieveOpDeptCdInfo";
    pWtitleSearch = null;
    pDispCnt = "5";
    pTitle = null;
    pAllSearchTF = "T";

    //udc_srcLobranCd.setSelectId(pSelectID);
    rtnList = await udc_srcLobranCd.cfCommonPopUpAsync('', pCode,
    //pCode
    pName,
    //pName
    pWinCloseTF,
    //pWinCloseTF
    pDispCnt,
    //pDispCnt
    pTitle,
    //pTitle
    null,
    //pWidth
    null,
    //pHidden
    pWhere,
    //pWhere
    null,
    //pW
    null,
    //pH
    null,
    //pTop
    null,
    //pLeft
    null,
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } else if (gubun == 2) {
    //청구처
    pSelectID = "retrieveClntInfo";
    pWtitleSearch = "청구처,청구처코드,청구처";
    pDispCnt = "5";
    pTitle = null;
    pAllSearchTF = "F";
    udc_srcBilgClntNo.setSelectId(pSelectID);
    rtnList = await udc_srcBilgClntNo.cfCommonPopUpAsync('', pCode,
    //pCode
    pName,
    //pName
    pWinCloseTF,
    //pWinCloseTF
    pDispCnt,
    //pDispCnt
    pTitle,
    //pTitle
    null,
    //pWidth
    null,
    //pHidden
    pWhere,
    //pWhere
    null,
    //pW
    null,
    //pH
    null,
    //pTop
    null,
    //pLeft
    null,
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } else if (gubun == 3) {
    // 컨테이너번호
    pSelectID = "retrieveOrderInfo";
    pWtitleSearch = null;
    pDispCnt = "5";
    pTitle = null;
    pAllSearchTF = "F";
    udc_ed_srcCntrNo.setSelectId(pSelectID);
    rtnList = await udc_ed_srcCntrNo.cfCommonPopUpAsync('', pCode,
    //pCode
    pName,
    //pName
    pWinCloseTF,
    //pWinCloseTF
    pDispCnt,
    //pDispCnt
    pTitle,
    //pTitle
    null,
    //pWidth
    null,
    //pHidden
    pWhere,
    //pWhere
    null,
    //pW
    null,
    //pH
    null,
    //pTop
    null,
    //pLeft
    null,
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (gubun != 3) {
    $c.gus.cfSetReturnValue($p, rtnList, cdObj, nmObj); // 매출물류부서코드, 매출물류부서명
  } else {
    if (rtnList != null && rtnList[0] != "N/A") {
      ed_srcOdrNo.setValue(rtnList[0]);
      ed_srcCntrNo.setValue(rtnList[2]);
    } else {
      ed_srcOdrNo.setValue("");
      ed_srcCntrNo.setValue("");
    }
  }
};

// GRID에서 선택된 오더번호로 통합매출입관리 링크
scwin.f_sellPchs = async function () {
  // 선택된 오더번호
  var v_odrNo = ds_orderPcost.getCellData(ds_orderPcost.getRowPosition(), "odrNo");
  if (ds_orderPcost.getRowPosition() > -1) {
    var paramObj = {
      "odrNo": v_odrNo
    };
    let options = {
      "openAction": "exist"
    };
    $c.win.openMenu($p, "통합매출입관리", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml", "sd_402_01_26b.jsp", paramObj, options);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("통합매출입관리"));
    return;
  }
};

// filter
scwin.f_filter = function () {
  if (chk_SelfCondCd.getValue()) {
    ds_srchInfo.setCellData(0, "queryClsCd", "pchsClnt");
    dspType.setValue("협력사별 원가율");
    dspTypeCls.setValue("협력사");
  } else {
    ds_srchInfo.setCellData(0, "queryClsCd", "bilgClnt");
    dspType.setValue("거래처별 원가율");
    dspTypeCls.setValue("거래처");
  }
};
scwin.f_ds_cntrPchs_filter = function () {
  ds_cntrPchs.clearFilter();
  var commSeq = ds_cntrSell.getCellData(ds_cntrSell.getRowPosition(), "commSeq");
  var filterLogic = function (cellData, tmpParam, rowIdx) {
    if (ds_cntrPchs.getCellData(rowIdx, "cntrSeq") == commSeq) {
      return true;
    } else {
      return false;
    }
  };
  ds_cntrPchs.setColumnFilter({
    type: "func",
    columnId: "odrNo",
    key: filterLogic,
    condition: "and"
  });
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, searchTb, null);
  udc_qryConDt.setInitDate(scwin.firstDate, scwin.dateStr);
  ed_srcLobranCd.focus();
};
scwin.f_FieldClear2 = function () {
  $c.gus.cfInitObjects($p, searchTb2, null);
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_clntPcost.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ds_orderPcost.removeAll();
  ds_cntrSell.removeAll();
  ds_cntrPchs.removeAll();

  // 총로우수초기화
  orderTotalRows.setValue(ds_orderPcost.getRowCount());
  pchsTotalRows.setValue(ds_cntrSell.getRowCount());
  sellTotalRows.setValue(ds_cntrPchs.getRowCount());

  // 총로우수
  clntTotalRows.setValue(ds_clntPcost.getRowCount());
};

// 오더별 원가율 조회후
scwin.sbm_retrieveOrder_submitdone = async function (e) {
  if (ds_orderPcost.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_srchInfo.setCellData(0, "odrNo", ds_orderPcost.getCellData(0, "odrNo"));
    gr_orderPcostInfo.setFocusedCell(0, "odrNo", false);
    await scwin.f_cntrSellInfo();
  }

  // 총로우수
  orderTotalRows.setValue(ds_orderPcost.getRowCount());
};

// 매출 조회후
scwin.sbm_retrieveSell_submitdone = async function (e) {
  if (ds_cntrSell.getRowCount() == 0) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002)) {
      if (ds_cntrPchs.getRowCount() > 0) {
        // 검색결과가 없고 매입그리드에 값이 있다면 클리어
        ds_cntrPchs.removeAll();

        // 매입 총로우수
        pchsTotalRows.setValue(ds_cntrSell.getRowCount());
      }
    }
  } else {
    ds_srchInfo.setCellData(0, "odrNo", ds_cntrSell.getCellData(0, "odrNo"));
    gr_cntrSellInfo.setFocusedCell(0, "cntrNo", false);
    await scwin.f_cntrPchsInfo();
  }

  // 매입filter
  if (ds_cntrSell.getRowCount() > 0) {
    //ds_cntrPchs.UseFilter = false;
  }

  // 총로우수
  sellTotalRows.setValue(ds_cntrSell.getRowCount());
};

// 매입 조회후
scwin.sbm_retrievePchs_submitdone = async function (e) {
  // 총로우수
  if (ds_cntrPchs.getRowCount() > 0) {
    gr_cntrPchsInfo.setFocusedCell(0, "odrNo", false);
  }
  pchsTotalRows.setValue(ds_cntrPchs.getRowCount());
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 거래처별 원가율 조회 버튼 클릭 이벤트 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};

// 매출/입 조회 버튼 클릭 이벤트
scwin.btn_retrieve2_onclick = function (e) {
  scwin.f_retrieve2();
};

// 물류부서 찾기 버튼 클릭 이벤트
scwin.udc_srcLobranCd_onclickEvent = function (e) {
  scwin.f_openPopUpText(1, ed_lobranNm, ed_srcLobranCd, 'T');
};

// 거래처 찾기 버튼 클릭 이벤트
scwin.udc_srcBilgClntNo_onclickEvent = function (e) {
  scwin.f_openPopUpText(2, ed_srcBilgClntNm, ed_srcBilgClntNo, 'F');
};

// 컨테이너번호 버튼 클릭 이벤트
scwin.btn_PopUpOdrNoList_onclick = function (e) {
  scwin.f_openPopUpText(3, ed_srcOdrNo, ed_srcCntrNo, 'T');
};

// 클리어 버튼 클릭 이벤트
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 클리어 버튼 클릭 이벤트
scwin.btn_clear2_onclick = function (e) {
  scwin.f_FieldClear2();
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 물류부서 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_srcLobranCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUpEmeditBefore(1, ed_lobranNm, ed_srcLobranCd, "T");
};

// 거래처 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_srcBilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUpEmeditBefore(2, ed_srcBilgClntNm, ed_srcBilgClntNo, "T");
};

// 컨테이너번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_srcCntrNo_onblur = async function (e) {
  if (ed_srcCntrNo.getValue().length == 11) {
    scwin.f_openPopUpEmeditBefore(3, null, ed_srcCntrNo, "T");
  } else {
    if (await $c.gus.cfAlertMsg($p, "컨테이너번호는 11자리를 입력하세요.")) {
      ed_srcOdrNo.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// Event onviewchange
//-------------------------------------------------------------------------
// 물류부서 명 onChange 이벤트 발생시
scwin.udc_srcLobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpTextBefore(1, ed_lobranNm, ed_srcLobranCd, 'T');
};

// 거래처 명 onChange 이벤트 발생시
scwin.udc_srcBilgClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpTextBefore(2, ed_srcBilgClntNm, ed_srcBilgClntNo, 'T');
};

// 협력사기준 체크박스 이벤트 발생시
scwin.chk_SelfCondCd_onviewchange = function (info) {
  scwin.f_filter();
};

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
// 거래처별 원가율 Cell Click 이벤트
scwin.gr_clntPcostInfo_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    process = "click";

    // 컨테이너 매출/입의 조회조건을 초기화 한다.
    ed_srcCntrNo.setValue("");
    ed_srcOdrNo.setValue("");
    ds_srchInfo.setCellData(0, "bilgClntNo", ds_clntPcost.getCellData(rowIndex, "bilgClntNo"));
    if (chk_SelfCondCd.getValue()) {
      ds_srchInfo.setCellData(0, "queryClsCd", "pchsClnt");
    } else {
      ds_srchInfo.setCellData(0, "queryClsCd", "bilgClnt");
    }
    await scwin.f_orderPcostInfo();
    gr_clntPcostInfo.setFocusedCell(rowIndex, columnIndex);
  }
};

// 오더별 원가율 Cell Click 이벤트
scwin.gr_orderPcostInfo_oncellclick = async function (rowIndex, columnIndex, columnId) {
  //ds_cntrPchs.UseFilter = false;

  if (rowIndex > -1) {
    //클릭한 행이 오더번호가 아닐 경우(더블클릭이벤트와 충돌)
    if (columnId != "odrNo") {
      // 컨테이너 매출/입의 조회조건을 초기화 한다.
      ed_srcCntrNo.setValue("");
      ed_srcOdrNo.setValue("");
      ds_srchInfo.setCellData(0, "odrNo", ds_orderPcost.getCellData(rowIndex, "odrNo"));
      ds_srchInfo.setCellData(0, "bilgClntNo", ds_clntPcost.getCellData(ds_clntPcost.getRowPosition(), "bilgClntNo"));
      if (chk_SelfCondCd.getValue()) {
        ds_srchInfo.setCellData(0, "queryClsCd", "pchsClnt");
      } else {
        ds_srchInfo.setCellData(0, "queryClsCd", "bilgClnt");
      }
      await scwin.f_cntrSellInfo();
      gr_orderPcostInfo.setFocusedCell(rowIndex, columnIndex);
    }
  }
};

// 오더별 원가율 Cell Db Click 이벤트
scwin.gr_orderPcostInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "odrNo") {
    // GRID에서 선택된 오더번호로 통합매출/입관리 링크
    scwin.f_sellPchs();
  }
};

// 매출 Cell Click 이벤트
scwin.gr_cntrSellInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    //ds_cntrPchs.UseFilter = true;
    //ds_cntrPchs.Filter();
    scwin.f_ds_cntrPchs_filter();
  }

  // 필터후 재계산 총로우수
  pchsTotalRows.setValue(ds_cntrPchs.getRowCount());
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
scwin.ed_srcCntrNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchTb',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'물류부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveOpDeptCdInfo',style:'',codeId:'ed_srcLobranCd',nameId:'ed_lobranNm',btnId:'btn_srcLobranCd',id:'udc_srcLobranCd',UpperFlagCode:'1',maxlengthCode:'4',mandatoryName:'true',mandatoryCode:'true',selectID:'retrieveOpDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_srcLobranCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srcLobranCd_onclickEvent',validExpCode:'매출물류부서:yes',refDataCollection:'ds_srchInfo',code:'srcLobranCd',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_srcLobranCd_onviewchangeNameEvent',validTitle:'매출물류부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDt',refDataMap:'ds_srchInfo',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'dspTypeCls',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntInfoPopup',style:'',codeId:'ed_srcBilgClntNo',nameId:'ed_srcBilgClntNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',objTypeCode:'data',btnId:'btn_bilgClntNo',objTypeName:'data',mandatoryName:'false',selectID:'retrieveClntInfo',validExpCode:'청구처:no',id:'udc_srcBilgClntNo','ev:onblurCodeEvent':'scwin.udc_srcBilgClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srcBilgClntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_srcBilgClntNo_onviewchangeNameEvent',code:'srcBilgClntNo',refDataCollection:'ds_srchInfo',name:'srcBilgClntNm',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'chk_SelfCondCd',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'','ev:onviewchange':'scwin.chk_SelfCondCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력사 기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'}},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'dspType',label:'거래처별 원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "거래처별 원가율", "sheetName" : "거래처별 원가율", "type" : "4+8+16"}',gridID:'gr_clntPcostInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_clntPcost',focusMode:'row',id:'gr_clntPcostInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_clntPcostInfo_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'140',value:'거래처',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'90',value:'매출액',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'매입액',width:'90',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'원가율<br/>(%)',width:'90',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNo',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellAmt',inputType:'text',removeBorderStyle:'false',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsRate',inputType:'text',style:'',value:'',width:'90',textAlign:'center',dataType:'float',readOnly:'true',displayFormat:'#,###.0',excelCellType:'bigDecimal',excelFormat:'#,##0.0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'sellAmt\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'center',dataType:'float',displayFormat:'#,###.0',expression:'avg(\'pchsRate\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'clntTotalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더별 원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "오더별 원가율", "sheetName" : "오더별 원가율", "type" : "4+8+16"}',gridID:'gr_orderPcostInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_orderPcost',focusMode:'row',id:'gr_orderPcostInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_orderPcostInfo_oncellclick','ev:oncelldblclick':'scwin.gr_orderPcostInfo_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'오더번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'210',value:'컨테이너 SIZE',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'매출액',width:'90',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'매입액',width:'90',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'원가율<br/>(%)',width:'90',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'45',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true',class:'underline txt-blue',style:';cursor:default;'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSiz20',inputType:'text',removeBorderStyle:'false',width:'70',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSiz40',inputType:'text',removeBorderStyle:'false',width:'70',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSiz45',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsRate',inputType:'text',style:'',value:'',width:'90',textAlign:'center',dataType:'float',readOnly:'true',displayFormat:'#,###.0',excelCellType:'bigDecimal',excelFormat:'#,##0.0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'cntrSiz20\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'cntrSiz40\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'cntrSiz45\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'sellAmt\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'center',dataType:'float',displayFormat:'#,###.0',expression:'avg(\'pchsRate\')',excelCellType:'bigDecimal',excelFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'orderTotalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchTb2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srcCntrNo',placeholder:'',style:'width:150px;',mandatory:'true',allowChar:'a-zA-Z0-9',maxlength:'11','ev:onkeyup':'scwin.ed_srcCntrNo_onkeyup',ref:'data:ds_srchInfo.srcCntrNo','ev:onblur':'scwin.ed_srcCntrNo_onblur',title:'컨테이너번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUpOdrNoList',style:'',type:'button','ev:onclick':'scwin.btn_PopUpOdrNoList_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srcOdrNo',placeholder:'',style:'width:150px;',allowChar:'A-Z0-9',maxlength:'13',readOnly:'true',ref:'data:ds_srchInfo.srcOdrNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear2',style:'',type:'button','ev:onclick':'scwin.btn_clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve2',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "컨테이너 매출", "sheetName" : "컨테이너 매출", "type" : "4+8+16"}',gridID:'gr_cntrSellInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrSell',focusMode:'row',id:'gr_cntrSellInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_cntrSellInfo_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'70',value:'SEQ',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'컨테이너번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'140',value:'매출',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column38',value:'항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true',displayFormat:'#,##0',dataType:'number',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellItemNm',inputType:'text',removeBorderStyle:'false',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'sellAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'sellTotalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "컨테이너 매입", "sheetName" : "컨테이너 매입", "type" : "4+8+16"}',gridID:'gr_cntrPchsInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrPchs',focusMode:'row',id:'gr_cntrPchsInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'40',value:'SEQ',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'490',value:'매입',colSpan:'7',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'INFO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column36',value:'구간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSeq',inputType:'text',removeBorderStyle:'false',width:'40',readOnly:'true',displayFormat:'#,##0',dataType:'number',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrInfo',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkStpNm',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transSection',inputType:'text',style:'',value:'',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pchsAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'pchsTotalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_ed_srcCntrNo',nameId:'',popupID:'',selectID:'retrieveOrderInfo',style:'display:none'}}]}]}]})