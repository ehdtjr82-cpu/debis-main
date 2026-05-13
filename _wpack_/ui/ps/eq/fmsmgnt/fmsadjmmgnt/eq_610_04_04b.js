/*amd /ui/ps/eq/fmsmgnt/fmsadjmmgnt/eq_610_04_04b.xml 59116 93dda03e51f848d8d38f119fcd698171d30ac4a3e2b36d712378bf76ae2107fb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search','ev:onkeyset':'scwin.dma_search_onkeyset'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'bilgAcctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'bilgClntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'qryConKnd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'qryConDtFm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'qryConDtTo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConCd',name:'qryConCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmPrgsStsCd',name:'adjmPrgsStsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellAcctDeptCd',name:'sellAcctDeptCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_taxinvcPrint',saveRemovedData:'true','ev:ondataload':'scwin.ds_taxinvcPrint_ondataload','ev:onrowpositionchange':'scwin.ds_taxinvcPrint_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmPrgsStsCd',name:'정산진행상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'청구일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiPrint',saveRemovedData:'true','ev:ondataload':'scwin.ds_certiPrint_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'반납일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_certiPrint','ev:onsetdata':'scwin.dma_certiPrint_onsetdata'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'certiNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_adjmPrgsStsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name3',dataType:'number'}}]},{T:1,N:'w2:data'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_taxinvcPrint',action:'/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveFmsOilBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_taxinvcPrint","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_taxinvcPrint","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveVehclList',action:'/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveFmsOilBillingDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_certiPrint","key":"IN_DS1"},{"id":"ds_certiPrint","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_certiPrint","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : FMS거래명세서발행 (eq_610_04_04b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-07 
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.fromDate_YMD1 = ""; // 작업년월1일
scwin.fromDate_YMD1 = WebSquare.date.getCurrentServerDate("yyyyMM") + "01";
scwin.p_taxinvcNo = "";
scwin.G_userId = "";
scwin.G_userNm = "";
scwin.G_empNo = "";
scwin.bCheck = "";
scwin.exl_qryConDtFm = "";
scwin.exl_qryConDtTo = "";
scwin.exl_qryConCd = "";
scwin.sort_options = {};
scwin.sort_options.sortIndex = "slipDt taxinvcNo";
scwin.sort_options.sortOrder = "1 1";
scwin.sort_options1 = {};
scwin.sort_options1.sortIndex = "certiNo oilkndCd vehclNo";
scwin.sort_options1.sortOrder = "1 1 1";
scwin.isTotPrint = false;

//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("PGM명 : FMS거래명세서발행 (eq_610_04_04b)");
  const codeOptions = [{
    grpCd: "RC903",
    compID: "gr_taxinvcPrint:adjmPrgsStsCd"
  } // 정산상태구분
  , {
    grpCd: "TL105",
    compID: "gr_vehclList:oilkndCd"
  } // 유종
  ];
  $c.data.setCommonCode($p, codeOptions);
  lc_qryConKnd.setValue("1"); // 세금계산서일자

  lc_adjmPrgsStsCd.setValue("전체");
  rd_printFg.setValue("02");

  // KYU_NEW : 2026-05-07 비활성화
  // rd_printFg.Enable 	 = "false";
  rd_printFg.setDisabled(true);
  ed_printPage.setValue("1");
  scwin.G_userId = $c.data.getMemInfo($p, "userId");
  scwin.G_userNm = $c.data.getMemInfo($p, "userNm");
  scwin.G_empNo = $c.data.getMemInfo($p, "empNo");
  scwin.params = $c.data.getParameter($p);
  if (scwin.p_taxinvcNo != "") {
    lc_qryConKnd.setValue("2");
    td_qryConDt.setStyle("display", "none");
    td_qryConCd.setStyle("display", "block");
    ed_qryConCd.setValue(scwin.p_taxinvcNo);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_qryConDtFm.setValue(scwin.fromDate_YMD1);
  ed_qryConDtTo.setValue(scwin.fromDate_YMD);
  ed_bilgClntNm.setValue("");
  ed_bilgAcctDeptNm.setValue("");
  ed_modId.setValue(scwin.G_userId);
  ed_userNm.setValue(scwin.G_userNm);
};

//-------------------------------------------------------------------------
// 세금계산서일자/세금계산서번호 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_qryConKndOnCloseUp = function () {
  if (lc_qryConKnd.getValue() == "1") {
    td_qryConDt.setStyle("display", "block");
    udc_qryConKnd1.style = "display:block;";
    td_qryConCd.setStyle("display", "none");
    ed_qryConCd.style = "display:none;";
  } else if (lc_qryConKnd.getValue() == "2") {
    td_qryConDt.setStyle("display", "none");
    udc_qryConKnd1.style = "display:none;";
    td_qryConCd.setStyle("display", "block");
    ed_qryConCd.style = "display:block;";
  }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회조건 Clear 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  lc_qryConKnd.setValue("0");
  ed_qryConDtFm.setValue(scwin.fromDate_YMD1);
  ed_qryConDtTo.setValue(scwin.fromDate_YMD);
  ed_modId.setValue(scwin.G_userId);
  ed_userNm.setValue(scwin.G_userNm);
  scwin.f_qryConKndOnCloseUp();
};

//-------------------------------------------------------------------------
// 조회 (먼저 서버에서 조회조건을 가져온다)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (lc_qryConKnd.getValue() == "1") {
    let check1 = await $c.gus.cfValidate($p, [ed_bilgAcctDeptCd, ed_qryConDtFm, ed_qryConDtTo, lc_adjmPrgsStsCd]);
    let check2 = await $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue());
    if (!check1) {
      return; //일자는 시작과 끝의 날짜값을 가져옴
    } //조회시작일자가 더 클경우 체크
    if (!check2) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  } else if (lc_qryConKnd.getValue() == "2") {
    if (ed_qryConCd.getValue() == "" || ed_qryConCd.getValue() == null) {
      $c.win.alert($p, "선조회항목은(는) 필수 입력 항목입니다.");
      return;
    }
    let check3 = await $c.gus.cfValidate($p, [ed_bilgAcctDeptCd, ed_qryConCd, lc_adjmPrgsStsCd]);
    if (!check3) {
      return;
    }
  }
  scwin.exl_qryConDtFm = "";
  scwin.exl_qryConDtTo = "";
  scwin.exl_qryConCd = "";
  if (lc_qryConKnd.getValue() == "1") {
    scwin.exl_qryConDtFm = ed_qryConDtFm.getValue();
    scwin.exl_qryConDtTo = ed_qryConDtTo.getValue();
  } else if (lc_qryConKnd.getValue() == "2") {
    scwin.exl_qryConCd = ed_qryConCd.getValue();
  }
  dma_search.set("bilgAcctDeptCd", ed_bilgAcctDeptCd.getValue());
  dma_search.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_search.set("qryConKnd", lc_qryConKnd.getValue());
  dma_search.set("qryConDtFm", ed_qryConDtFm.getValue());
  dma_search.set("qryConDtTo", ed_qryConDtTo.getValue());
  dma_search.set("qryConCd", ed_qryConCd.getValue());
  dma_search.set("modId", ed_modId.getValue());
  dma_search.set("adjmPrgsStsCd", lc_adjmPrgsStsCd.getValue());
  dma_search.set("sellAcctDeptCd", ed_sellAcctDeptCd.getValue());
  ds_taxinvcPrint.removeAll(); //상세화면 데이타 Clear

  await $c.sbm.execute($p, sbm_taxinvcPrint);
  gr_taxinvcPrint.setFocusedCell(0, 1, false);
};

//-------------------------------------------------------------------------
//  세금 계산서 내역 상세 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveVehclList = function (certiNo) {
  dma_certiPrint.set("certiNo", certiNo);
  $c.sbm.execute($p, sbm_RetrieveVehclList);
};

// @@ ====== 그리드 / DS ======================================================================= //

scwin.ds_taxinvcPrint_onrowpositionchange = function (info) {
  if (info.newRowIndex != null && info.newRowIndex >= 0) {
    var certiNo = ds_taxinvcPrint.getCellData(info.newRowIndex, "certiNo");
    scwin.f_RetrieveVehclList(certiNo, "", "세금계산서별집계");
  }
};
scwin.osideClsCd_customFormatter = function (data, formattedData, rowIndex, columnIndex) {
  return data == "S" ? "카드" : data == "K" ? "카드" : "계산서";
};

//-------------------------------------------------------------------------
// 세금계산서내역
//-------------------------------------------------------------------------
scwin.ds_taxinvcPrint_ondataload = async function () {
  let rowCnt = ds_taxinvcPrint.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    //    ds_taxinvcPrint.multisort(scwin.sort_options);     
    gr_taxinvcPrint.setFocusedCell(0, "bilgClntNo", false);
  }
};

//-------------------------------------------------------------------------
// 세금계산서 상세내역
//-------------------------------------------------------------------------
scwin.ds_certiPrint_ondataload = async function () {
  let rowCnt1 = ds_certiPrint.getTotalRow();
  totalRows1.setValue(rowCnt1);
  if (rowCnt1 == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt1 > 0) {
    ds_certiPrint.multisort(scwin.sort_options1);
  }
  gr_vehclList.setFocusedCell(0, 0, false);
};

//-------------------------------------------------------------------------
// 조회조건	세금계산서일자 / 세금계산서번호 토글처리
//-------------------------------------------------------------------------
scwin.lc_qryConKnd_onselected = function () {
  scwin.f_qryConKndOnCloseUp();
};

//-------------------------------------------------------------------------
// 세금계산서 그리드 헤더 클릭시
//-------------------------------------------------------------------------
scwin.gr_taxinvcPrint_onheadertextimageclick = function (headerId, headerValue) {
  var i = 0;
  if (headerId == "choice") {
    if (scwin.bCheck == "1") {
      for (var i = 1; i <= ds_taxinvcPrint.getRowCount(); i++) {
        ds_taxinvcPrint.setCellAllData(i, "choice", "1");
      }
    } else {
      for (var i = 1; i <= ds_taxinvcPrint.getRowCount(); i++) {
        ds_taxinvcPrint.setCellAllData(i, "choice", "1");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 세금계산서 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_taxinvcPrint_oncellclick = function (rowIndex, columnIndex, columnId) {};

// @@ ====== 이벤트 - 팝업 ===================================================================== //

scwin.udc_bilgAcctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_bilgAcctDeptCd, ed_bilgAcctDeptNm)) {
    scwin.f_openCommonPopUp(2, ed_bilgAcctDeptCd.getValue(), ed_bilgAcctDeptNm.getValue(), 'T', 'F');
  }
};
scwin.udc_bilgAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgAcctDeptCd.getValue(), ed_bilgAcctDeptNm.getValue(), 'T', 'F');
};
scwin.udc_bilgAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgAcctDeptCd.getValue(), ed_bilgAcctDeptNm.getValue(), 'T', 'F');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_bilgClntNo, ed_bilgClntNm)) {
    scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'T', 'F');
  }
};
scwin.udc_bilgClntNo_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'T', 'F');
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'T', 'F');
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 청구담당자 focus out
//-------------------------------------------------------------------------
scwin.udc_modId_onblurCodeEvent = function (e) {
  // onChange="f_chkOpenCommonPopUp(this, ed_bilgAcctDeptCd, 2, false);"
  if (scwin.f_IsPopUp(ed_modId, ed_userNm)) {
    // KYU_NEW : 청구처 가 채워짐
    // scwin.f_openCommonPopUp(4, ed_modId.getValue(), ed_userNm.getValue(), 'T', 'F');
    scwin.f_openCommonPopUp(1, ed_modId.getValue(), ed_userNm.getValue(), 'T', 'F');
  }
};

//-------------------------------------------------------------------------
// 청구담당자명 focus out
//-------------------------------------------------------------------------
scwin.udc_modId_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_modId.getValue(), ed_userNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 청구담당자 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_modId_onclickEvent = function (e) {
  //  onClick="f_openCommonPopUp(2, ed_bilgAcctDeptCd.Text,ed_bilgAcctDeptNm.value,'F','F');"
  scwin.f_openCommonPopUp(4, ed_modId.getValue(), ed_userNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 매출부서 focus out
//-------------------------------------------------------------------------
scwin.udc_sellAcctDeptCd_onblurCodeEvent = function (e) {
  // onChange="f_chkOpenCommonPopUp(this, ed_sellAcctDeptCd, 3, false);"
  if (scwin.f_IsPopUp(ed_sellAcctDeptCd, ed_sellAcctDeptNm)) {
    scwin.f_openCommonPopUp(3, ed_sellAcctDeptCd.getValue(), ed_sellAcctDeptNm.getValue(), 'T', 'F');
  }
};

//-------------------------------------------------------------------------
// 매출부서명 focus out
//-------------------------------------------------------------------------
scwin.udc_sellAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_sellAcctDeptCd.getValue(), ed_sellAcctDeptNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 매출부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_sellAcctDeptCd_onclickEvent = function (e) {
  // onClick="f_openCommonPopUp(3, ed_sellAcctDeptCd.text,ed_sellAcctDeptNm.value,'F','F');"
  scwin.f_openCommonPopUp(3, ed_sellAcctDeptCd.getValue(), ed_sellAcctDeptNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  //if (!cfCanOpenPopup(inObj, pairObj))
  //    return;												// 짝이 되는 오브젝트의 값 제거
  //cfClearPairObj(pairObj);								// 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj); // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};

//-------------------------------------------------------------------------
// 	팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 청구처 retrieveClntEmpNoList bilgClntNo
      udc_bilgClntNo.setSelectId("retrieveClntEmpNoList");
      udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 2:
      // 청구귀속부서 retrieveAcctDeptCdInfo  bilgAcctDeptCd
      udc_bilgAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo");
      udc_bilgAcctDeptCd.cfCommonPopUp(scwin.udc_bilgAcctDeptCd_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 3:
      // 매출귀속부서  retrieveAcctDeptCdInfo
      udc_sellAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo");
      udc_sellAcctDeptCd.cfCommonPopUp(scwin.udc_sellAcctDeptCd_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 4:
      // 청구담당자
      udc_modId.setSelectId("retrieveClntEmpNoList"); // 청구담당자
      udc_modId.cfCommonPopUp(scwin.udc_modId_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

scwin.udc_bilgAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bilgAcctDeptCd.setValue(ret[0]);
    ed_bilgAcctDeptNm.setValue(ret[1]);
  } else {
    ed_bilgAcctDeptCd.setValue("");
    ed_bilgAcctDeptNm.setValue("");
  }
};
scwin.udc_bilgClntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bilgClntNo.setValue(ret[0]);
    ed_bilgClntNm.setValue(ret[1]);
  } else {
    ed_bilgClntNo.setValue("");
    ed_bilgClntNm.setValue("");
  }
};
scwin.udc_modId_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_modId.setValue(ret[0]);
    ed_userNm.setValue(ret[1]);
  } else {
    ed_modId.setValue("");
    ed_userNm.setValue("");
  }
};
scwin.udc_sellAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_sellAcctDeptCd.setValue(ret[0]);
    ed_sellAcctDeptNm.setValue(ret[1]);
  } else {
    ed_sellAcctDeptCd.setValue("");
    ed_sellAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, inObjNm) {
  let inValue1 = $c.gus.cfGetValue($p, inObj);
  let inValue2 = $c.gus.cfGetValue($p, inObjNm);
  if ($c.gus.cfIsNull($p, inValue1) && $c.gus.cfIsNull($p, inValue2)) {
    for (var i = 1; i < scwin.f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, scwin.f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  return true;
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
// 인쇄 (조건에 따라 출력물을 분기한다.) --> 발행로직 확인 필요
//-------------------------------------------------------------------------
scwin.btn_OzPrint_onclick = async function (e) {
  if (rd_printFg.getValue() == "01") {
    await scwin.f_taxinvcPrint();
  } else if (rd_printFg.getValue() == "02") {
    await scwin.f_certiPrint();
  } else if (rd_printFg.getValue() == "03") {
    await scwin.f_totalPrint();
  }
};

//-------------------------------------------------------------------------
// 인쇄 (세금계산서)
//-------------------------------------------------------------------------
scwin.f_taxinvcPrint = async function () {
  var param = "";
  var printCnt = 0;
  var spplyFg = "02p";
  var osideClsCd = "";
  //await $c.win.alert("카드 판매인 경우 세금계산서는 발행할 수 없습니다.");
  //return;

  for (let i = 0; i < ds_taxinvcPrint.getRowCount(); i++) {
    if (ds_taxinvcPrint.getCellData(i, "choice") == "1") {
      osideClsCd = ds_taxinvcPrint.getCellData(i, "osideClsCd"); // 외부구분 (신한카드는 계산서 출력 불가
      if (osideClsCd != "S" && osideClsCd != "K") {
        param = param + "," + ds_taxinvcPrint.getCellData(i, "taxinvcNo");
        printCnt++;
      }
    }
  }
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 거래명세서"]);
    return;
  }
  if (lc_spplyFg.getValue() == "receive") {
    spplyFg = "02p"; // 공급받는자
  } else {
    spplyFg = "03p"; // 공급하는자
  }
  let odiName = "fi_401_01_" + spplyFg;
  if (chb_previewCheck.getValue() == 1) {
    // 미리보기 버튼 클릭
    const data = {
      odiName: odiName,
      reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_" + spplyFg + ".ozr",
      odiParam: {
        pchsSellCls: param.substring(1) // 세금 계산서 번호
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        zoom: 100,
        mode: "silent"
      },
      formParam: {
        copies: ed_printPage.getValue()
      }
    };
    await scwin.openPopup(data);
  } else {
    const data = {
      odiName: odiName,
      reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_" + spplyFg + ".ozr",
      odiParam: {
        pchsSellCls: param.substring(1) // 세금 계산서 번호
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        zoom: 100,
        mode: "silent"
      },
      formParam: {
        odiName: odiName,
        copies: ed_printPage.getValue()
      }
    };
    var opts = {};
    await $c.ext.printOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 인쇄 (거래명세서)
//-------------------------------------------------------------------------
scwin.f_certiPrint = async function () {
  var printCnt = 0;
  let reportDataList = [];
  for (var i = 0; i < ds_taxinvcPrint.getRowCount(); i++) {
    if (ds_taxinvcPrint.getCellData(i, "choice") == "1") {
      var odiParam = {};
      odiParam.certiNo = ds_taxinvcPrint.getCellData(i, "certiNo");
      odiParam.taxinvcNo = ds_taxinvcPrint.getCellData(i, "taxinvcNo");
      odiParam.spplyFg = lc_spplyFg.getValue();
      reportDataList.push({
        odiName: "eq_610_04_04b",
        reportName: "/ps/eq/fmsmgnt/eq_610_04_04b.ozr",
        odiParam: odiParam,
        viewerParam: {
          useprogressbar: false // 프로그레스바 쓸지 말지
        },
        formParam: {}
      });
      printCnt++;
    }
  }
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 거래명세서"]);
    return;
  }

  // 미리보기 미체크 (단건, 다건)
  if (chb_previewCheck.getSelectedIndex().length == 0) {
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
    // 미리보기 체크 && 1건 선택
  } else if (chb_previewCheck.getSelectedIndex().length > 0 && reportDataList.length == 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    // 미리보기 체크 && 다건 선택
  } else if (chb_previewCheck.getSelectedIndex().length > 0 && reportDataList.length > 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList, opts);
    // reportDataList.shift();

    // let opts2 = {
    //     type:'print', // viewer, print, download
    //     viewerMode:'print',
    //     printMode:'silent', // silent, view
    // }
    // await $c.ext.openBatchOzReport(reportDataList, opts2);
  }
};

//-------------------------------------------------------------------------
// 인쇄 (통합발행)
//-------------------------------------------------------------------------
scwin.f_totalPrint = async function () {
  scwin.isTotPrint = true;
  // 필터링
  // ds_certiPrint.filter();
  var param = "";
  var printCnt = 0;
  var spplyFg = "02p";
  let reportDataList = [];
  // scwin.OZStartBatch();

  for (var j = 0; j < ds_taxinvcPrint.getRowCount(); j++) {
    if (ds_taxinvcPrint.getCellData(j, "choice") == "1") {
      param = param + "," + ds_taxinvcPrint.getCellData(j, "taxinvcNo");
      printCnt++;
      var odiParam = {};
      odiParam.certiNo = ds_taxinvcPrint.getCellData(j, "certiNo");
      odiParam.taxinvcNo = ds_taxinvcPrint.getCellData(j, "taxinvcNo");
      odiParam.spplyFg = lc_spplyFg.getValue();
      reportDataList.push({
        odiName: "eq_610_04_04b",
        reportName: "/ps/eq/fmsmgnt/eq_610_04_04b.ozr",
        odiParam: odiParam,
        viewerParam: {
          useprogressbar: false // 프로그레스바 쓸지 말지
        },
        formParam: {}
      });
    }
  }
  if (lc_spplyFg.getValue() == "receive") {
    spplyFg = "02p"; // 공급받는자
  } else {
    spplyFg = "03p"; // 공급하는자
  }
  param = "";
  var osideClsCd = "";
  for (var i = 0; i < ds_taxinvcPrint.getRowCount(); i++) {
    if (ds_taxinvcPrint.getCellData(i, "choice") == "1") {
      osideClsCd = ds_taxinvcPrint.getCellData(i, "osideClsCd"); // 외부구분 (신한카드는 계산서 출력 불가
      if (osideClsCd != "S" && osideClsCd != "K") {
        param = param + "," + ds_taxinvcPrint.getCellData(i, "taxinvcNo");
        printCnt++;
      }
    }
  }
  reportDataList.push({
    odiName: "fi_401_01_" + spplyFg,
    reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_" + spplyFg + ".ozr",
    odiParam: {
      pchsSellCls: param.substring(1) // 세금 계산서 번호
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
    },
    formParam: {}
  });
  await $c.gus.cfAlertMsg($p, "신한카드 판매인 경우 세금계산서는 발행할 수 없습니다.");
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 통합발행내역"]);
    scwin.isTotPrint = false;
    return;
  }
  scwin.isTotPrint = false;
  // scwin.OZExecuteBatch();
  // 미리보기 미체크 (단건, 다건)
  if (chb_previewCheck.getSelectedIndex().length == 0) {
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
    // 미리보기 체크 && 1건 선택
  } else if (chb_previewCheck.getSelectedIndex().length > 0 && reportDataList.length == 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    // 미리보기 체크 && 다건 선택
  } else if (chb_previewCheck.getSelectedIndex().length > 0 && reportDataList.length > 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList, opts);
    // reportDataList.shift();

    // let opts2 = {
    //     type:'print', // viewer, print, download
    //     viewerMode:'print',
    //     printMode:'silent', // silent, view
    // }
    // await $c.ext.openBatchOzReport(reportDataList, opts2);
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_taxinvcPrint.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_taxinvcPrint.getTotalCol(); i++) {
    if (gr_taxinvcPrint.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }

  // let str = "";

  // if(lc_qryConKnd.getValue() == "1"){
  //     str = "세금계산서일자 : " + $c.gus.cfGetFormatStr(scwin.exl_qryConDtFm, "####-##-##")+" ~ ";
  //     str = str + $c.gus.cfGetFormatStr(scwin.exl_qryConDtTo, "####-##-##");       
  // } else if(lc_qryConKnd.getValue() == "2"){
  //     str = "세금계산서번호 : " + scwin.exl_qryConCd; 
  // }

  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "세금계산서 내역",
    textAlign: "center",
    //정렬
    FontFace: "돋움체",
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }
  // ,{
  //     rowIndex : 2,             // 첫 번째 줄
  //     colIndex : 0,             // 첫 번째 칸부터
  //     colSpan : gridColCount,   // 그리드 전체 너비만큼 병합
  //     rowSpan : 1,
  //     text : " (조회조건)"+"["+ str +"]",
  //     textAlign : "left",     //정렬
  //     fontSize : 10,
  //     drawBorder : false,        // 테두리
  //     color : "black",          // 글자색
  //     backgroundColor : "#ffffff" // 배경색
  // }
  ];
  const options = {
    fileName: "세금계산서 내역.xlsx",
    sheetName: "세금계산서 내역",
    startRowIndex: 2,
    startColumnIndex: 0,
    type: 2
  };
  await $c.data.downloadGridViewExcel($p, gr_taxinvcPrint, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel_detail = async function () {
  if (ds_certiPrint.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_vehclList.getTotalCol(); i++) {
    if (gr_vehclList.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = "";
  if (lc_qryConKnd.getValue() == "1") {
    str = "세금계산서일자 : " + $c.gus.cfGetFormatStr($p, scwin.exl_qryConDtFm, "####-##-##") + " ~ ";
    str = str + $c.gus.cfGetFormatStr($p, scwin.exl_qryConDtTo, "####-##-##");
  } else if (lc_qryConKnd.getValue() == "2") {
    str = "세금계산서번호 : " + scwin.exl_qryConCd;
  }
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "세금계산서 상세내역",
    textAlign: "center",
    //정렬
    FontFace: "돋움체",
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }, {
    rowIndex: 2,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: " (조회조건)" + "[" + str + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }];
  const options = {
    fileName: "세금계산서 상세내역.xlsx",
    sheetName: "세금계산서 상세내역",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_vehclList, options, infoArr);
};

// @@ ====== 미사용 ============================================================================ //

scwin.udc_modId_onviewchangeCodeEvent = function (info) {
  //cfValidateMaxByteLength(this, 20);
};
scwin.chb_previewCheck_oncheckboxclick = function (index, checked, value) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgAcctDeptCd',nameId:'ed_bilgAcctDeptNm',popupID:'bilgAcctDeptCdPopUp',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',code:'bilgAcctDeptCd',name:'bilgAcctDeptNm',btnId:'btn_bilgAcctDeptCd',id:'udc_bilgAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_bilgAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgAcctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgAcctDeptCd_onclickEvent',refDataCollection:'dma_search',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',popupID:'bilgClntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'bilgClntNo',name:'bilgClntNm',btnId:'btn_bilgClntNo',id:'udc_bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',refDataCollection:'dma_search',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_qryConKnd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.qryConKnd','ev:onselected':'scwin.lc_qryConKnd_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'td_qryConDt',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',id:'udc_qryConKnd1',mandatory:'true',refDataMap:'dma_search',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'td_qryConCd',tagname:'td',style:'display:none;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_qryConCd',mandatory:'true',ref:'data:dma_search.qryConCd',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_modId',nameId:'ed_userNm',popupID:'modIdPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'modId',name:'userNm',btnId:'btn_modId',id:'udc_modId','ev:onblurCodeEvent':'scwin.udc_modId_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_modId_onblurNameEvent','ev:onclickEvent':'scwin.udc_modId_onclickEvent',refDataCollection:'dma_search','ev:onviewchangeCodeEvent':'scwin.udc_modId_onviewchangeCodeEvent',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산진행상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_adjmPrgsStsCd',style:'width: 230px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_search.adjmPrgsStsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'전체'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sellAcctDeptCd',nameId:'ed_sellAcctDeptNm',popupID:'sellAcctDeptCdPopUp',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',code:'sellAcctDeptCd',name:'sellAcctDeptNm',btnId:'btn_sellAcctDeptCd',id:'udc_sellAcctDeptCd',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_sellAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sellAcctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_sellAcctDeptCd_onclickEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 200px;'}},{T:1,N:'xf:group',A:{style:'width: 100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출력구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_printFg',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합발행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서발행부수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 60px;text-align:right;',id:'ed_printPage',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_spplyFg',ref:'',style:'',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공급받는자 보관용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'receive'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공급자 보관용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'spply'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미리보기',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:oncheckboxclick':'scwin.chb_previewCheck_oncheckboxclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar bl0'},E:[{T:1,N:'xf:trigger',A:{class:'btn pt-blue',id:'btn_OzPrint',style:'',type:'button','ev:onclick':'scwin.btn_OzPrint_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]},{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'세금계산서내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_taxinvcPrint',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'both',visibleRowNumFix:'true',dataList:'data:ds_taxinvcPrint',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_taxinvcPrint',visibleRowNum:'8',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:onheadertextimageclick':'scwin.gr_taxinvcPrint_onheadertextimageclick','ev:oncellclick':'scwin.gr_taxinvcPrint_oncellclick','ev:onviewchange':'scwin.gr_taxinvcPrint_onviewchange',checkReadOnlyOnCut:'true',checkReadOnlyOnPaste:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',value:'청구처<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column36',value:'청구처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column34',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'정산진행<br/>상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',value:'청구금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',value:'매출<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'청구일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'회계처리<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'세금계산서<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column58',value:'거래명세서<br/>번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left',textImageRenderType:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDeptNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'adjmPrgsStsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'osideClsCd',displayMode:'label',readOnly:'true',customFormatter:'scwin.osideClsCd_customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'bilgDt',displayMode:'calendar',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'slipDt',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'taxinvcNo',displayMode:'label',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'certiNo',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'세금계산서 상세내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'group2',style:'',gridID:'gr_vehclList',gridUpYn:'N',gridUpUserAuth:'X',gridDownFn:'scwin.f_Excel_detail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_certiPrint',focusMode:'both',id:'gr_vehclList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true',checkReadOnlyOnCut:'true',checkReadOnlyOnPaste:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래명세서번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'유종코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'차량번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'공급가액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'부가세',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'매출귀속<br/>부서코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'매출귀속<br/>부서',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column73',inputType:'text',style:'',value:'반납일',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column70',inputType:'text',style:'',value:'비고',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilkndCd',inputType:'select',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptCd',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'calendar',style:'',value:'',width:'120',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})