/*amd /ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_03b.xml 46813 48030b2eaf0d37760e643b068e98e07106c10c572005a6116b5a22538dcf1f8a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'line',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingNumber',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'선석명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingNumberBulkContainer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'출발_입고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현위치명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRetrvDt',name:'컨테이너회수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mainWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mainCbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발_출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'출발_잔수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'출발_잔중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착_도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'도착_입고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'도착_입고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'도착_도착지CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvStockQty',name:'도착_잔수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvStockWt',name:'도착_잔중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvStockCbm',name:'도착지CBM',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingEachAmtInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LineList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_LineList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.as.cstmrsrvc.coafmgnt.RetrieveBookingNumberTrackingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Retrieve","key":"IN_DS1"},{"id":"ds_BookingNumber","key":"OUT_DS1"},{"id":"ds_BookingNumberBulkContainer","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_BookingNumber","key":"OUT_DS1"},{"id":"ds_BookingNumberBulkContainer","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve2',action:'/ds.as.cstmrsrvc.coafmgnt.RetrieveBookingEachAmtInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Retrieve","key":"IN_DS1"},{"id":"ds_BookingEachAmtInformation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BookingEachAmtInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_LineList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_LineList',target:'data:json,{"id":"ds_LineList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// ASIS 벌크, BL번호 : CS0A0CCS011SA001일때 도착_입고수량이 소수점으로 표시되는데 자연수만 표시하기로 협의(2026.02.06 박주령PM)
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "-" : $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm") == null ? "" : $c.data.getMemInfo($p, "clntNm"); //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드

scwin.params = $c.data.getParameter($p);
scwin.blNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  if (scwin.params.blNo != undefined && scwin.params.blNo != "") {
    scwin.blNo = scwin.params.blNo;
  }
  acb_cargoClsCd.setSelectedIndex(0);
  //scwin.f_Setting(); TOBE에서는 UDC 로드 때문에 순서 바꿈
  //scwin.f_setLine();	
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_Setting();
    if (scwin.userClsCd != "01") {
      //사용자가 협력업체 일때
      ed_shpCo.setValue(scwin.loginClntNo);
      ed_shpCoNm.setValue(scwin.loginClntNm);
      ed_shpCo.setDisabled(true);
      ed_shpCoNm.setDisabled(true);
      $c.gus.cfDisableObjects($p, [btn_shpCo]);
      scwin.f_setLine();
      acb_cndLineCd.focus();
    } else {
      scwin.f_setLine();
      ed_shpCo.focus();
    }

    // BLNO값이 있으면 자동 조회 되도록 한다.
    if (scwin.blNo != "") {
      ed_blNo.setValue(scwin.blNo);
      scwin.f_Retrieve();
    }
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // BOOKING번호 입력시 선사와 LINE은 필수 입력임	
  if (ed_blNo.getValue() != "") {
    if (ed_mrn.getValue() != "") {
      $c.win.alert($p, "BL번호와 MRN으로 같이 조회하실 수 없습니다.");
      ed_mrn.setValue("");
      return false;
    }
  }
  if (ed_mrn.getValue() != "" || ed_msn.getValue() != "" || ed_hsn.getValue() != "") {
    if (ed_mrn.getValue() == "" || ed_msn.getValue() == "" || ed_hsn.getValue() == "") {
      $c.win.alert($p, "MRN, MSN, HSN은 모두 같이 입력되어야 합니다.");
      ed_msn.focus();
      return false;
    }
  }
  scwin.f_settingContainerInfo("0");
  $c.sbm.execute($p, sbm_Retrieve); //tr_Retrieve.post();    
};

//-------------------------------------------------------------------------
// 출하지시 오더 정보 화면에 셋팅
//-------------------------------------------------------------------------
scwin.f_settingContainerInfo = function (type) {
  if (type == '1') {
    tbx_vsslNm.setValue(ds_BookingNumber.getCellData(0, "vsslNm")); //모선
    tbx_portcnt.setValue(ds_BookingNumber.getCellData(0, "portcnt")); //항차
    tbx_lineNm.setValue(ds_BookingNumber.getCellData(0, "lineNm")); //LINE
    tbx_berthNm.setValue(ds_BookingNumber.getCellData(0, "berthNm")); // 양하항선석

    if (!$c.gus.cfIsNull($p, ds_BookingNumber.getCellData(0, "arrvlportDtm"))) tbx_arrvlportDtm.setValue(ds_BookingNumber.getCellData(0, "arrvlportDtm").toDate("YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm:ss")); // 양하일시
    if (!$c.gus.cfIsNull($p, ds_BookingNumber.getCellData(0, "blNo"))) {
      tbx_booking.setValue("BL"); // TITLE
      tbx_booking2.setValue(ds_BookingNumber.getCellData(0, "blNo")); // 내용
    } else {
      tbx_booking.setValue("BOOKING번호"); // TITLE
      tbx_booking2.setValue(ds_BookingNumber.getCellData(0, "bookingNo")); // 내용
    }
  } else {
    tbx_vsslNm.setValue(""); //모선
    tbx_portcnt.setValue(""); //항차
    tbx_lineNm.setValue(""); //LINE

    tbx_berthNm.setValue(""); // 양하항선석
    tbx_arrvlportDtm.setValue(""); // 양하일시
    tbx_booking.setValue("");
    tbx_booking2.setValue("");
  }
};

//-------------------------------------------------------------------------
// 선사 UDC START
//-------------------------------------------------------------------------
scwin.udc_shpCo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(3, ed_shpCo.getValue(), ed_shpCoNm.getValue(), 'F', 'F');
};
scwin.udc_shpCo_onblurCodeEvent = function (e) {
  scwin.f_ChkOpenCommonPopUp(ed_shpCo, ed_shpCoNm, 3);
};
scwin.udc_shpCo_onviewchangeNameEvent = function (info) {
  scwin.f_ChkOpenCommonPopUp(ed_shpCoNm, ed_shpCo, 3, false);
};
scwin.udc_shpC_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_shpCo, ed_shpCoNm);
  scwin.f_setLine();
};
//-------------------------------------------------------------------------
// 선사 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_ChkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    scwin.f_setLine();
    return;
  }

  //짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  //검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  //inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다
//-------------------------------
scwin.f_OpenCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 3:
      // 선사 팝업
      udc_shpCo.cfCommonPopUp(scwin.udc_shpC_callBackFunc // 팝업 콜백
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , 'SHP' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// Grid내역 표시여부 Setting
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  if (acb_cargoClsCd.getValue() == "01") {
    //tbx_grTitle1.setValue("컨테이너 정보");
    //gr_BookingNumberEachContainerInformation.setStyle("display", "");
    //gr_BookingNumberEachContainerInformation2.setStyle("display", "none");
    grp_cntr.show("");
    grp_bulk.hide();
    $c.gus.cfEnableObj($p, ed_cntrNo, true);
    ed_cntrNo.setValue("");
    ds_BookingNumberBulkContainer.setJSON([]);
    ds_BookingNumber.setJSON([]);
    //udc_topGrdBtn1.setGridId("gr_BookingNumberEachContainerInformation");
  } else if (acb_cargoClsCd.getValue() == "02") {
    // tbx_grTitle1.setValue("BULK정보");
    // gr_BookingNumberEachContainerInformation.setStyle("display", "none");
    // gr_BookingNumberEachContainerInformation2.setStyle("display", "");
    grp_cntr.hide();
    grp_bulk.show("");
    $c.gus.cfEnableObj($p, ed_cntrNo, false);
    ed_cntrNo.setValue("");
    ds_BookingNumberBulkContainer.setJSON([]);
    ds_BookingNumber.setJSON([]);
    //udc_topGrdBtn1.setGridId("gr_BookingNumberEachContainerInformation2");
  }

  //테스트 데이터
  // if (acb_cargoClsCd.getValue() == "01") {
  //     ds_Retrieve.set("blNo", "EGLV520000078014");
  // } else {
  //     ds_Retrieve.set("blNo", "JM060907");
  // }
};

//-------------------------------------------------------------------------
// 라인콤보 조회 
//-------------------------------------------------------------------------
scwin.f_setLine = function () {
  dma_LineList.set("sysCd", "LineEBC");
  dma_LineList.set("queryId", "retrieveLineEachShpCoCdCombo");
  dma_LineList.set("param1", scwin.loginClntNo);
  dma_LineList.set("param2", scwin.userClsCd);
  dma_LineList.set("param3", ed_shpCo.getValue());
  $c.sbm.execute($p, sbm_LineList);
};
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_BookingNumber.getRowCount() > 0) {
    scwin.f_settingContainerInfo("1");
  }
  /*
  if(acb_cargoClsCd.BindColVal == "01"){
          cfHideDSWaitMsg(gr_BookingNumberEachContainerInformation);
      }
      else if(acb_cargoClsCd.BindColVal == "02"){
          cfHideDSWaitMsg(gr_BookingNumberEachContainerInformation2);
      }
  */
  tbx_totalRows1.setValue(ds_BookingNumberBulkContainer.getRowCount());
  tbx_totalRows2.setValue(ds_BookingNumberBulkContainer.getRowCount());
  if (ed_blNo.getValue() != "" || ed_mrn.getValue() != "") {
    $c.sbm.execute($p, sbm_Retrieve2);
  } else {
    ds_BookingEachAmtInformation.removeAll();
    tbx_totalRows3.setValue(0);
  }
};
scwin.sbm_Retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows3.setValue(ds_BookingEachAmtInformation.getRowCount());
};
scwin.acb_cargoClsCd_onchange = function (info) {
  scwin.f_Setting();
};
scwin.gr_BookingNumberEachContainerInformation_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "cntrNo") {
    let cntrNo = ds_BookingNumberBulkContainer.getCellData(rowIndex, "cntrNo"); // 컨테이너 번호
    let strUrl = "/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml";
    let programId = "as_102_01_02b.jsp";
    let strTitle = "컨테이너화물추적";
    let paramObj = {
      cntrNo: cntrNo
    };
    $c.win.openMenu($p, strTitle, "/ui" + strUrl, programId, paramObj);
  }
};
scwin.gr_BookingEachAmtInformation_oncellclick = function (rowIndex, columnIndex, columnId) {
  /* ASIS에 있으나 조회쿼리에 해당 컬럼이 없고 해당 컬럼은 hidden 되어 있음
  if (columnId == "slipNo" && ds_BookingEachAmtInformation.getCellData(rowIndex, "slipNo") != "") { 
      $c.gus.cfShowSlipInfo(ds_BookingEachAmtInformation.getCellData(rowIndex,"slipNo"));
  }
  */
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_cargoClsCd',style:'width:150px;',submenuSize:'auto',search:'start',objType:'data',textAlign:'left',allOption:'',chooseOption:'',ref:'data:ds_Retrieve.cargoClsCd','ev:onchange':'scwin.acb_cargoClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BOOKING번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bookingNo',placeholder:'',style:'width:150px;',mandatory:'false',readOnly:'false','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_Retrieve.bookingNo',maxlength:'20',allowChar:'a-zA-Z0-9',editType:'focus'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width:150px;',readOnly:'false','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_Retrieve.blNo',allowChar:'a-zA-Z0-9',maxlength:'20',editType:'focus'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',readOnly:'false',mandatory:'false','ev:onkeyup':'scwin.onkeyup',maxByteLength:'11',ref:'data:ds_Retrieve.cntrNo',allowChar:'a-zA-Z0-9',editType:'focus'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntInfoPopup',style:'',id:'udc_shpCo',codeId:'ed_shpCo',nameId:'ed_shpCoNm',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'6',refDataCollection:'ds_Retrieve',code:'shpCo',btnId:'btn_shpCo',selectID:'retrieveClntInfo',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_shpCo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_shpCo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_shpCo_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_mrn',placeholder:'',class:'',mandatory:'false',readOnly:'false',ref:'data:ds_Retrieve.mrn',maxlength:'11','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9',editType:'focus'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_msn',placeholder:'',class:'',readOnly:'false',mandatory:'false',ref:'data:ds_Retrieve.msn',maxlength:'11','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9',editType:'focus'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_hsn',placeholder:'',class:'',readOnly:'false',mandatory:'false',ref:'data:ds_Retrieve.hsn',maxlength:'11','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9',editType:'focus'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_cndLineCd',style:'width:150px;height:21px;',submenuSize:'auto',search:'contain',objType:'data',validExp:'Line:yes',ref:'data:ds_Retrieve.line',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',searchTarget:'both',class:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LineList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'선박 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vsslNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_portcnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_lineNm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양하항선석',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_berthNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양하일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_arrvlportDtm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_booking',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_booking2',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_cntr'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_grTitle1',label:'컨테이너 정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"BOOKING/BL번호추적정보.xlsx","sheetName":"BOOKING/BL번호추적정보","type":"8+16"}',gridUpYn:'N',id:'udc_topGrdBtn1',gridID:'gr_BookingNumberEachContainerInformation'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_BookingNumberBulkContainer',id:'gr_BookingNumberEachContainerInformation',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_BookingNumberEachContainerInformation_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'170',value:'컨테이너'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'SIZE'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'TYPE'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'F/E'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'중량',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'현재위치',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'반입일',width:'125'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'170',textAlign:'center',class:'underline'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSizCd',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrTypCd',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fullEmptyClsCd',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',width:'150',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinDt',inputType:'text',width:'125',textAlign:'center',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows1',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_bulk',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'textbox3',label:'BULK 정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"BOOKING/BL번호추적정보.xlsx","sheetName":"BOOKING/BL번호추적정보","type":"8+16"}',gridID:'gr_BookingNumberEachContainerInformation2',gridUpYn:'N',grp:'grd_section2',id:'udc_topGrdBtn2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_BookingNumberBulkContainer',scrollByColumn:'false',style:'',readOnly:'true',autoFit:'allColumn',id:'gr_BookingNumberEachContainerInformation2',visibleRowNum:'10',class:'wq_gvw',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'품명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'수량',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'중량',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'CBM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'8',width:'650',inputType:'text',id:'column53',value:'출발',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'8',width:'560',inputType:'text',id:'column62',value:'도착',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column54',value:'출발지코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'입고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',value:'입고중량',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column57',value:'출발지CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'잔수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'잔중량',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column60',value:'출발지CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column63',value:'도착지코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',value:'입고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'입고중량',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column66',value:'도착지CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'잔수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'잔중량',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column72',value:'도착지CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'commNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'mainQty',blockSelect:'false',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'mainWt',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'mainCbm',blockSelect:'false',displayMode:'label',hiddenCol:'true',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptWrkPlCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'qty',displayMode:'label',hiddenCol:'true',hidden:'false'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'wt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'cbm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'stockQty',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'stockWt',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'stockCbm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'rsltsQty',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'rsltsWt',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'rsltsCbm',displayMode:'label',hiddenCol:'ture',hidden:'true'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'arvStockQty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'arvStockWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'arvStockCbm',displayMode:'label',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'BL금액 정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',grdDownOpts:'{"fileName":"BOOKING/BL번호추적정보.xlsx","sheetName":"BOOKING/BL번호추적정보","type":"8+16"}',id:'udc_topGrdBtn3',gridUpYn:'N',gridID:'gr_BookingEachAmtInformation'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_BookingEachAmtInformation',id:'gr_BookingEachAmtInformation',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_BookingEachAmtInformation_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'130',value:'BL번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'청구거래처번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'180',value:'청구거래처명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'매출입항목코드'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출입항목명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매출단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'매출금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'확정구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'blNo',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNo',inputType:'text',width:'120',textAlign:'center',hidden:'true',colMerge:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNm',inputType:'text',removeBorderStyle:'false',width:'180',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellItemCd',inputType:'text',width:'120',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNo',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsCd',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'sellAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column43',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'vatAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column40',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'sumAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows3',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'table',A:{summary:'',style:'width:100%; ',id:''}}]}]}]}]})