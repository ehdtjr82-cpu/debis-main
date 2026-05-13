/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_10b.xml 41284 dd5957554060806b452ca9155fe24e40253b5074bba28e0d9f04f5ef25d403f7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차지사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd2',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transClsCd',name:'운송구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchDtl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptLobranCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allocaClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rgnClsCd',name:'지역구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvLobranCd',name:'도착물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transClsCd',name:'운송구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCnt',name:'총개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumTotal',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumUnalloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAlloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shuttleTotal',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shuttleUnalloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shuttleAlloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sameRgnTotal',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sameRgnUnalloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sameRgnAlloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffRgnTotal',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffRgnUnalloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffRgnAlloca',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvLobranCd',name:'도착물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffRgnUnallocaDtl',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffRgnAllocaDtl',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClsCd',name:'운송_구분_코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reusltsDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCommNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNo',name:'배차협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carLocation',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'CDMA번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errMsg',name:'오류메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveCase',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizeSum',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetrieveRegionDstirctVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetrieveRegionDstirctVolume_DetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchDtl","key":"IN_DS1"},{"id":"ds_reusltsDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_reusltsDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.strCurDate = $c.date.getServerDateTime($p);

  //공통코드 조회
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, [acb_cargoClsCd, acb_transClsCd]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  if ($c.util.isEmpty($p, ed_dptIntendDd.getValue()) || $c.util.isEmpty($p, ed_dptIntendDd2.getValue())) {
    $c.win.alert($p, "출발예정일은 필수 입력 항목입니다.");
    ed_dptIntendDd.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_dptIntendDd.getValue(), ed_dptIntendDd2.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_dptIntendDd.focus();
    return;
  }
  ds_reusltsDetail.removeAll(); //재조회시 Detail Data Clear
  spn_totalRowDtl.setValue(ds_reusltsDetail.getTotalRow());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if (ds_results.getTotalRow() == 0) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  if (columnId == "wrkStpCd") {
    return $c.gus.decode($p, data, "0001", "셔틀", "0002", "운송", "0003", "회수", "0047", "육송");
  }
};
scwin.f_displayFormatter = function (data) {
  if (data == 0) return "";else return $c.num.formatNumber($p, data);
};
scwin.f_customFormatterSize = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  if (columnId == "sizeSum") {
    data = $c.gus.decode($p, ds_reusltsDetail.getCellData(rowIndex, "cntrSizCd"), "", 0, "20", 1, 2);
    ds_reusltsDetail.setCellData(rowIndex, columnId, data);
    return data;
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_down = async function () {
  if (ds_results.getTotalRow() > 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      var options = {
        "fileName": "권역별화물.xlsx",
        "sheetName": "권역별화물",
        "type": "4+8+16",
        "useSubTotal": "true",
        "useSubTotalData": "true"
      };
      $c.data.downloadGridViewExcel($p, gr_results, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_downDtl = async function () {
  if (ds_reusltsDetail.getTotalRow() > 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      var options = {
        "fileName": "권역별화물상세.xlsx",
        "sheetName": "권역별화물상세",
        "type": "4+8+16",
        "useSubTotal": "true",
        "useSubTotalData": "true"
      };
      $c.data.downloadGridViewExcel($p, gr_reusltsDetail, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// Formatt
//-------------------------------------------------------------------------
scwin.f_displayFormatter = function (data) {
  if (data == 0) return "";else return $c.num.formatNumber($p, $c.num.round($p, data, 3));
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//권역별화물 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_results.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//권역별화물상세 조회 완료
scwin.sbm_retrieveDetail_submitdone = function (e) {
  console.log("scwin.sbm_retrieveDetail_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_reusltsDetail.getTotalRow();
  spn_totalRowDtl.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    for (var i = 0; i < ds_reusltsDetail.getTotalRow(); i++) {
      var data = $c.gus.decode($p, ds_reusltsDetail.getCellData(i, "cntrSizCd"), "", 0, "20", 1, 2);
      ds_reusltsDetail.setCellData(i, "sizeSum", data);
    }
  }
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//권역별화물 그리드 더블 클릭
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  var v_allocaClsCd = "";
  var v_rgnClsCd = "";
  var v_arvLobranCd = "";
  if (columnId == "shuttleUnalloca" || columnId == "shuttleAlloca" || columnId == "sameRgnUnalloca" || columnId == "sameRgnAlloca" || columnId == "diffRgnUnalloca" || columnId == "diffRgnAlloca" || columnId == "diffRgnUnallocaDtl" || columnId == "diffRgnAllocaDtl") {
    if (Number(ds_results.getCellData(rowIndex, columnId)) == 0) {
      $c.win.alert($p, "수량이 0보다 큰 물량만 조회할 수 있습니다.");
      return;
    }
    switch (columnId) {
      case "shuttleUnalloca":
        v_allocaClsCd = "N";
        v_rgnClsCd = "SHUTTLE";
        v_arvLobranCd = "";
        break;
      case "shuttleAlloca":
        v_allocaClsCd = "Y";
        v_rgnClsCd = "SHUTTLE";
        v_arvLobranCd = "";
        break;
      case "sameRgnUnalloca":
        v_allocaClsCd = "N";
        v_rgnClsCd = "SAME";
        v_arvLobranCd = "";
        break;
      case "sameRgnAlloca":
        v_allocaClsCd = "Y";
        v_rgnClsCd = "SAME";
        v_arvLobranCd = "";
        break;
      case "diffRgnUnalloca":
        v_allocaClsCd = "N";
        v_rgnClsCd = "OTHER";
        v_arvLobranCd = "";
        break;
      case "diffRgnAlloca":
        v_allocaClsCd = "Y";
        v_rgnClsCd = "OTHER";
        v_arvLobranCd = "";
        break;
      case "diffRgnUnallocaDtl":
        v_allocaClsCd = "N";
        v_rgnClsCd = "OTHER_DETAIL";
        v_arvLobranCd = ds_results.getCellData(rowIndex, "arvLobranCd");
        break;
      case "diffRgnAllocaDtl":
        v_allocaClsCd = "Y";
        v_rgnClsCd = "OTHER_DETAIL";
        v_arvLobranCd = ds_results.getCellData(rowIndex, "arvLobranCd");
        break;
    }
    dma_searchDtl.set("dptLobranCd", ds_results.getCellData(rowIndex, "wrkLobranCd"));
    dma_searchDtl.set("dptIntendDd", ed_dptIntendDd.getValue());
    dma_searchDtl.set("dptIntendDd2", ed_dptIntendDd2.getValue());
    dma_searchDtl.set("cargoClsCd", ds_results.getCellData(rowIndex, "cargoClsCd"));
    dma_searchDtl.set("transClsCd", ds_results.getCellData(rowIndex, "transClsCd"));
    dma_searchDtl.set("allocaClsCd", v_allocaClsCd);
    dma_searchDtl.set("rgnClsCd", v_rgnClsCd);
    dma_searchDtl.set("arvLobranCd", v_arvLobranCd);
    $c.sbm.execute($p, sbm_retrieveDetail);
  }
};

//권역별화물상세 그리드 더블 클릭 > 오더 개발 후 적용
scwin.gr_reusltsDetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var v_odrNo = ds_reusltsDetail.getCellData(rowIndex, "odrNo");
  var v_odrKndCd = v_odrNo.substring(1, 3);
  var strOrderDetailUrl = "";
  let programId = "";
  let paramObj = {
    PARAM_MAINTAIN_YN: "N",
    odrNo: v_odrNo,
    linkPage: "odrList"
  };
  if (columnId != "odrNo") return;
  if (v_odrKndCd == "C1" || v_odrKndCd == "CS" || v_odrKndCd == "CT") {
    // 오더 종류가 C1,CS,CT 인 경우
    strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_05b.xml";
    programId = "tn_201_02_05b.jsp";
    $c.win.openMenu($p, "수입본선오더", strOrderDetailUrl, programId, paramObj);
  } else if (v_odrKndCd == "C2" || v_odrKndCd == "CX") {
    // 오더 종류가 C2,CX 인 경우
    strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml";
    programId = "tn_201_02_03b.jsp";
    $c.win.openMenu($p, "수입일반오더", strOrderDetailUrl, programId, paramObj);
  } else if (v_odrKndCd == "C3" || v_odrKndCd == "CW" || v_odrKndCd == "CR" || v_odrKndCd == "CP") {
    // 오더 종류가 C3,CW,CR,CP 인 경우
    strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.xml";
    programId = "tn_201_02_06b.jsp";
    $c.win.openMenu($p, "수출본선오더", strOrderDetailUrl, programId, paramObj);
  } else if (v_odrKndCd == "C4") {
    // 오더 종류가 C4 인 경우
    strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml";
    programId = "tn_201_02_04b.jsp";
    $c.win.openMenu($p, "수출일반오더", strOrderDetailUrl, programId, paramObj);
  } else if (v_odrKndCd == "C5" || v_odrKndCd == "C6" || v_odrKndCd == "C7") {
    // 오더 종류가 C5,C6,C7 인 경우
    strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_07b.xml";
    programId = "tn_201_02_07b.jsp";
    $c.win.openMenu($p, "기타오더", strOrderDetailUrl, programId, paramObj);
  } else if (v_odrKndCd == "B2" || v_odrKndCd == "B4" || v_odrKndCd == "D1" || v_odrKndCd == "D2" || v_odrKndCd == "D3" || v_odrKndCd == "D4" || v_odrKndCd == "D6") {
    // 오더 종류가 B2,B4,D1,D2,D3,D4,D6 인 경우
    strOrderDetailUrl = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_05b.xml";
    programId = "tn_202_02_05b.jsp";
    $c.win.openMenu($p, "벌크오더", strOrderDetailUrl, programId, paramObj);
  } else {
    $c.win.alert($p, "오더종류를 확인하세요.");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',validExp:'배차점소:yes',searchTarget:'value',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.lobranCd',mandatory:'true',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cargoClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.cargoClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_transClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.transClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'dptIntendDd2',refStDt:'dptIntendDd',style:'',edFromId:'ed_dptIntendDd',edToId:'ed_dptIntendDd2',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:'',hidden:'true'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'권역별화물',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_results',templateYn:'N',gridDownFn:'scwin.f_down',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',autoFit:'allColumn',id:'gr_results',visibleRowNum:'7',class:'wq_gvw',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:oncelldblclick':'scwin.gr_results_oncelldblclick',readOnly:'true',dataDragDrop:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'배차지사',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column15',value:'전체권역',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column9',value:'셔틀',displayMode:'label',colSpan:'3',hidden:'true'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column7',value:'동일권역',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column23',value:'타권역',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column46',value:'타권역상세',displayMode:'label',colSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'전체',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'미배차',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'미배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'배차',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'미배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',value:'배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',value:'미배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'미배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',value:'배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'타지사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',value:'미배차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'배차',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cargoClsCd',displayMode:'label',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너(TEU)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크(TON)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNm',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'snumTotaDis',displayMode:'label',expression:'Number(display(\'sameRgnTotal\'))+Number(display(\'diffRgnTotal\'))',dataType:'number',displayFormat:'#,###.##0',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'snumTota',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'display(\'snumTotaDis\')',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sumUnallocaDis',displayMode:'label',expression:'Number(display(\'sameRgnUnalloca\'))+Number(display(\'diffRgnUnalloca\'))',displayFormat:'#,###.##0',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumUnalloca',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'display(\'sumUnallocaDis\')',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sumAllocaDis',displayMode:'label',textAlign:'right',expression:'Number(display(\'sameRgnAlloca\'))+Number(display(\'diffRgnAlloca\'))',dataType:'number',displayFormatter:'scwin.f_displayFormatter',displayFormat:'#,###.##0',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumAlloca',value:'',displayMode:'label',textAlign:'right',expression:'display(\'sumAllocaDis\')',displayFormat:'#,###.###',dataType:'number',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shuttleTotal',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shuttleUnalloca',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shuttleAlloca',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sameRgnTotal',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'sameRgnUnalloca',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',displayFormat:'#,###.##0',class:'txt-black linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'sameRgnAlloca',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',class:'txt-black linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'diffRgnTotal',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'diffRgnUnalloca',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',class:'txt-black linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'diffRgnAlloca',displayMode:'label',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_displayFormatter',class:'txt-black linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvLobranNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'diffRgnUnallocaDtl',displayMode:'label',textAlign:'right',dataType:'number',class:'txt-black linktype',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'diffRgnAllocaDtl',displayMode:'label',textAlign:'right',dataType:'number',class:'txt-black linktype',displayFormatter:'scwin.f_displayFormatter'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'cargoClsCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'cargoClsCd',displayMode:'label',expression:'targetColLabel()'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'snumTota',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumSnumTotaDis',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'snumTotaDis\')',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sumUnalloca',displayMode:'label',textAlign:'right',expression:'sum("sumUnalloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumSsumUnallocaDis',value:'',displayMode:'label',expression:'sum(\'sumUnallocaDis\')',textAlign:'right',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sumAlloca',displayMode:'label',textAlign:'right',expression:'sum("sumAlloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumSsumAlloca',value:'',displayMode:'label',expression:'sum(\'sumAlloca\')',textAlign:'right',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'shuttleTotal',displayMode:'label',textAlign:'right',expression:'sum("shuttleTotal")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'shuttleUnalloca',displayMode:'label',textAlign:'right',expression:'sum("shuttleUnalloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'shuttleAlloca',displayMode:'label',textAlign:'right',expression:'sum("shuttleAlloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sameRgnTotal',displayMode:'label',textAlign:'right',expression:'sum("sameRgnTotal")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sameRgnUnalloca',displayMode:'label',textAlign:'right',expression:'sum("sameRgnUnalloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sameRgnAlloca',displayMode:'label',textAlign:'right',expression:'sum("sameRgnAlloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'diffRgnTotal',displayMode:'label',textAlign:'right',expression:'sum("diffRgnTotal")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'diffRgnUnalloca',displayMode:'label',textAlign:'right',expression:'sum("diffRgnUnalloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'diffRgnAlloca',displayMode:'label',textAlign:'right',expression:'sum("diffRgnAlloca")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvLobranNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'diffRgnUnallocaDtl',displayMode:'label',textAlign:'right',expression:'sum("diffRgnUnallocaDtl")',displayFormatter:'scwin.f_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'diffRgnAllocaDtl',displayMode:'label',textAlign:'right',expression:'sum("diffRgnAllocaDtl")',displayFormatter:'scwin.f_displayFormatter'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'권역별화물상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_reusltsDetail',gridDownUserAuth:'X',gridDownFn:'scwin.f_downDtl',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_reusltsDetail',id:'gr_reusltsDetail',style:'',visibleRowNum:'10',visibleRowNumFix:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_reusltsDetail_oncelldblclick',dataDragDrop:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'청구거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명<br/>/컨테이너',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'sizeSum',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'TON',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업<br/>단계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'권역<br/>상세',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'협력업체명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'소유<br/>구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrCommNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sizeSum',value:'',displayMode:'label',dataType:'number',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'70',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'moveCase',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptDh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'posnClsNm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sizeSum\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right',expression:'sum("grossWt")',displayFormat:'#,##0.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRowDtl',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-list row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동-동 : 동일권역-동일권역',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동-타 : 동일권역-타권역',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'타-동 : 타권역-동일권역',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'타-타 : 타권역-타권역',style:'',tagname:'p'}}]}]}]}]}]}]}]})