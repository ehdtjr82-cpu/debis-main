/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_28b.xml 34543 15eff7ac1e6aca5bec810728ecadf57e09652b2ceb02d245188c08bb1ac40e93 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_impExpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selfTransList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryinoutDt',name:'반출일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'B/K번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'TMC',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'작업지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'담당자코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnCd',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subsum1',name:'subsum1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'stDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'impExpClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtClntCd',name:'mchtClntCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doorRgnCd',name:'doorRgnCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'selfTransClntNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_impExpCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD060',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_impExpCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_impExpCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_lobran","key":"IN_DS1"}',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveSelfTransAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCond","key":"IN_DS1"},{"id":"ds_selfTransList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_selfTransList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 계정 부서(점소)

scwin.subTotalOn = false;
scwin.sortState = {};
scwin.onpageload = function () {
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); //udc달력 형식

  grp_totalCnt.setStyle("display", "none");
  total.setValue("");

  //점소콤보 조회 start
  dma_lobran.set("sysCd", "WorkImplementEBC");
  dma_lobran.set("queryId", "retriveLobran2CodeList");
  dma_lobran.set("param1", "");
  $c.sbm.execute($p, sbm_lobran);

  //점소콤보 
  $c.sbm.execute($p, sbm_impExpCd);
};
scwin.sbm_impExpCd_submitdone = function () {
  acb_lc_srchImpExpCd.setSelectedIndex(0);
};
scwin.sbm_lobran_submitdone = function () {
  //매출점소
  acb_lc_srchLobran.setValue(scwin.lobranCd);
  ed_srchFromDate.focus();
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  acb_lc_srchLobran.setValue(0);
};

//실화주popup
scwin.udc_comCode_srchmch_onclickEvent = function (e) {
  /*동일한 쿼리ID를 사용할 경우 title에 asis와 동일하게 적용*/
  // udc_comCode_srchmch.cfCommonPopUp(scwin.udc_comCode_srchmch_callBackFunc, ed_srchMchtClntCd.getValue(), ed_srchMchtClntNm.getValue(), "T", null, null, null, null, ",LOGISCLNT1", null, null, null, null, null, null, "실화주거래처,화주코드,화주명", null);
  udc_comCode_srchmch.cfCommonPopUp(scwin.udc_comCode_srchmch_callBackFunc, ed_srchMchtClntCd.getValue(), ed_srchMchtClntNm.getValue(), "T", null, null, null, null, ",LOGISCLNT1", null, null, null, null, null, "T", "실화주거래처,화주코드,화주명", null);
};
//실화주callback
scwin.udc_comCode_srchmch_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_srchMchtClntCd, ed_srchMchtClntNm);
  console.log(ret);
};
scwin.udc_comCode_srchmch_onblurCodeEvent = function (e) {
  var code = (ed_srchMchtClntCd.getValue() || "").trim();
  var name = (ed_srchMchtClntNm.getValue() || "").trim();

  // 코드가 없으면 이름도 지우고 종료
  if (code === "") {
    ed_srchMchtClntNm.setValue("");
    return;
  }

  // 기존 이름값은 일단 초기화
  ed_srchMchtClntNm.setValue("");

  // AS-IS OnKillFocus 대응
  udc_comCode_srchmch.cfCommonPopUp(scwin.udc_comCode_srchmch_callBackFunc,
  // callback
  code,
  // 코드값
  "",
  // 이름값
  "T",
  // 1건이면 자동닫기
  null, null, null, null, ",LOGISCLNT1",
  // where 조건
  null, null, null, null, null, "T",
  // 전체검색허용
  "실화주거래처,화주코드,화주명", null);
};
scwin.udc_comCode_srchmch_onviewchangeNameEvent = function (info) {
  var name = (ed_srchMchtClntNm.getValue() || "").trim();

  // 이름이 비면 코드도 초기화
  if (name === "") {
    ed_srchMchtClntCd.setValue("");
    return;
  }

  // 코드 초기화 후 이름 기준 검색
  ed_srchMchtClntCd.setValue("");
  udc_comCode_srchmch.cfCommonPopUp(scwin.udc_comCode_srchmch_callBackFunc, "",
  // 코드 없음
  name,
  // 이름 검색
  "T", null, null, null, null, ",LOGISCLNT1", null, null, null, null, null, "T", "실화주거래처,화주코드,화주명", null);
};

//자가운송popup
scwin.udc_comCode_srchsel_onclickEvent = function (e) {
  // udc_comCode_srchsel.cfCommonPopUp(scwin.udc_comCode_srchsel_callBackFunc, ed_srchSelfTransCoCd.getValue(), ed_srchSelfTransCoNm.getValue(), "T", null, null, null, null, ",LOGISCLNT2", null, null, null, null, null, null, null, null);
  udc_comCode_srchsel.cfCommonPopUp(scwin.udc_comCode_srchsel_callBackFunc, ed_srchSelfTransCoCd.getValue(), ed_srchSelfTransCoNm.getValue(), "T", null, null, null, null, ",LOGISCLNT2", null, null, null, null, null, "T", "자가운송거래처,거래처코드,거래처명", null);
};

//자가운송popup callback
scwin.udc_comCode_srchsel_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_srchSelfTransCoCd, ed_srchSelfTransCoNm);
  console.log(ret);
};
scwin.udc_comCode_srchsel_onblurCodeEvent = function (e) {
  var code = (ed_srchSelfTransCoCd.getValue() || "").trim();
  if (code === "") {
    ed_srchSelfTransCoNm.setValue("");
    return;
  }
  ed_srchSelfTransCoNm.setValue("");
  udc_comCode_srchsel.cfCommonPopUp(scwin.udc_comCode_srchsel_callBackFunc, code, "", "T", null, null, null, null, ",LOGISCLNT2", null, null, null, null, null, "T", "자가운송거래처,거래처코드,거래처명", null);
};
scwin.udc_comCode_srchsel_onviewchangeNameEvent = function (info) {
  var name = (ed_srchSelfTransCoNm.getValue() || "").trim();
  if (name === "") {
    ed_srchSelfTransCoCd.setValue("");
    return;
  }
  ed_srchSelfTransCoCd.setValue("");
  udc_comCode_srchsel.cfCommonPopUp(scwin.udc_comCode_srchsel_callBackFunc, "", name, "T", null, null, null, null, ",LOGISCLNT2", null, null, null, null, null, "T", "자가운송거래처,거래처코드,거래처명", null);
};

//door popup
scwin.udc_comCode_srchdoor_onclickEvent = function (e) {
  // udc_comCode_srchdoor.cfCommonPopUp(scwin.udc_comCode_srchdoor_callBackFunc, ed_srchDoorRgnCd.getValue(), ed_srchDoorRgnNm.getValue(), "T", null, null, null, null, "D", null, null, null, null, null, null, null, null);
  udc_comCode_srchdoor.cfCommonPopUp(scwin.udc_comCode_srchdoor_callBackFunc, ed_srchDoorRgnCd.getValue(), ed_srchDoorRgnNm.getValue(), "T", null, null, null, null, "D", null, null, null, null, null, "T", "DOOR지역,지역코드,지역명", null);
};

//door popup callback
scwin.udc_comCode_srchdoor_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_srchDoorRgnCd, ed_srchDoorRgnNm);
  console.log(ret);
};
scwin.udc_comCode_srchdoor_onblurCodeEvent = function (e) {
  var code = (ed_srchDoorRgnCd.getValue() || "").trim();
  if (code === "") {
    ed_srchDoorRgnNm.setValue("");
    return;
  }
  ed_srchDoorRgnNm.setValue("");
  udc_comCode_srchdoor.cfCommonPopUp(scwin.udc_comCode_srchdoor_callBackFunc, code, "", "T", null, null, null, null, "D", null, null, null, null, null, "T", "DOOR지역,지역코드,지역명", null);
};
scwin.udc_comCode_srchdoor_onviewchangeNameEvent = function (info) {
  var name = (ed_srchDoorRgnNm.getValue() || "").trim();
  if (name === "") {
    ed_srchDoorRgnCd.setValue("");
    return;
  }
  ed_srchDoorRgnCd.setValue("");
  udc_comCode_srchdoor.cfCommonPopUp(scwin.udc_comCode_srchdoor_callBackFunc, "", name, "T", null, null, null, null, "D", null, null, null, null, null, "T", "DOOR지역,지역코드,지역명", null);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  var fromDt = (ed_srchFromDate.getValue() || "").trim();
  var toDt = (ed_srchToDate.getValue() || "").trim();

  // 반출기간 필수 체크
  if (fromDt === "" || toDt === "") {
    if (fromDt === "") {
      $c.gus.cfAlertMsg($p, "반출입 조회 시작일자은(는) 필수 입력 항목입니다.");
      ed_srchFromDate.focus();
    } else {
      $c.gus.cfAlertMsg($p, "반출입 조회 종료일자은(는) 필수 입력 항목입니다.");
      ed_srchToDate.focus();
    }
    return;
  }

  // 날짜 역전 체크
  if (!$c.gus.cfIsAfterDate($p, fromDt, toDt)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchFromDate.focus();
    return;
  }

  //dataMap set
  dma_searchCond.set("lobranCd", acb_lc_srchLobran.getValue());
  dma_searchCond.set("stDt", ed_srchFromDate.getValue());
  dma_searchCond.set("endDt", ed_srchToDate.getValue());
  dma_searchCond.set("impExpClsCd", acb_lc_srchImpExpCd.getValue());
  dma_searchCond.set("mchtClntCd", ed_srchMchtClntCd.getValue());
  dma_searchCond.set("doorRgnCd", ed_srchDoorRgnCd.getValue());
  dma_searchCond.set("selfTransClntNo", ed_srchSelfTransCoCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_selfTransList.getRowCount();
  grp_totalCnt.setStyle("display", "");
  total.setValue(nCnt);
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  // subtotal 그룹키 생성
  for (var i = 0; i < ds_selfTransList.getRowCount(); i++) {
    var v = (ds_selfTransList.getCellData(i, "realMchtClntNm") || "").trim();
    ds_selfTransList.setCellData(i, "subsum1", v);
  }

  // // 기본 정렬
  // ds_selfTransList.multisort({
  //     sortIndex: "realMchtClntNm crryinoutDt odrNo",
  //     sortOrder: "1 1 1"
  // });

  // ds_selfTransList.reform();

  // 처음엔 subtotal 숨김
  scwin.subTotalOn = false;
  gr_selfTransList.setSubtotalVisible(false);
  gr_selfTransList.setFocusedCell(0, 0);
};
scwin.f_getNextSortOrder = function (colId) {
  debugger;
  var cur = scwin.sortState[colId];
  if (cur === "1") {
    scwin.sortState[colId] = "-1";
  } else {
    scwin.sortState[colId] = "1";
  }
  return scwin.sortState[colId];
};

/**
 * method
 * @name f_runExcel
 * @description Excel
 * @param 
 */
scwin.f_runExcel = function () {
  $c.data.downloadGridViewExcel($p, gr_selfTransList, {
    fileName: '자가운송승인세부내역목록.xlsx',
    sheetName: '자가운송승인세부내역목록',
    type: "1",
    useDataFormat: "true",
    useFooter: "true",
    useSubTotal: "false",
    footerType: "1",
    columnMove: "true",
    columnMoveWithFooter: "true"
  });
};
scwin.gr_selfTransList_onheaderclick = function (headerId) {
  debugger;
  var colId = "";
  switch (headerId) {
    case "column1":
      colId = "crryinoutDt";
      break;
    case "column17":
      colId = "odrNo";
      break;
    case "column15":
      colId = "bookingNo";
      break;
    case "column13":
      colId = "cntrNo";
      break;
    case "column11":
      colId = "cntrSizCd";
      break;
    case "column3":
      colId = "selfTransClntNm";
      break;
    case "column7":
      colId = "reqClntNm";
      break;
    case "column55":
      colId = "realMchtClntNm";
      break;
    case "column52":
      colId = "sellAmt";
      break;
    case "column49":
      colId = "doorNm";
      break;
    case "column43":
      colId = "regNm";
      break;
    default:
      return;
  }
  var order = scwin.f_getNextSortOrder(colId);
  var options = {};

  // 실화주 헤더를 눌렀을 때 subtotal 표시 시작
  if (colId === "realMchtClntNm") {
    scwin.subTotalOn = true;
  }
  if (scwin.subTotalOn) {
    // subtotal 유지 상태에서는 항상 실화주를 첫 키로 둔다
    if (colId === "realMchtClntNm") {
      options.sortIndex = "realMchtClntNm crryinoutDt odrNo";
      options.sortOrder = order + " 1 1";
    } else {
      options.sortIndex = "realMchtClntNm " + colId + " crryinoutDt odrNo";
      options.sortOrder = "1 " + order + " 1 1";
    }
  } else {
    // subtotal off 상태에서는 일반 정렬
    options.sortIndex = colId + " crryinoutDt odrNo";
    options.sortOrder = order + " 1 1";
  }
  ds_selfTransList.multisort(options);
  ds_selfTransList.reform();
  if (scwin.subTotalOn) {
    gr_selfTransList.setSubtotalVisible(true);
  } else {
    gr_selfTransList.setSubtotalVisible(false);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchLobran',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'',ref:'',visibleRowNum:'15',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반출기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_srchFromDate',edToId:'ed_srchToDate',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_srchMchtClntCd',nameId:'ed_srchMchtClntNm',id:'udc_comCode_srchmch',maxlengthCode:'6',allowCharCode:'0-9',maxlengthName:'20',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_comCode_srchmch_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_srchmch_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_srchmch_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입/수출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchImpExpCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_impExpCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가운송사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_srchSelfTransCoCd',nameId:'ed_srchSelfTransCoNm',id:'udc_comCode_srchsel',maxlengthCode:'6',allowCharCode:'0-9',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_comCode_srchsel_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_srchsel_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_srchsel_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Door지역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_srchDoorRgnCd',nameId:'ed_srchDoorRgnNm',id:'udc_comCode_srchdoor',UpperFlagCode:'1',maxlengthCode:'5',maxlengthName:'20',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_comCode_srchdoor_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_srchdoor_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_srchdoor_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자가운송승인 세부내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_selfTransList',gridDownFn:'scwin.f_runExcel',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_selfTransList',id:'gr_selfTransList',style:'',visibleRowNum:'10',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',readOnly:'true','ev:onheaderclick':'scwin.gr_selfTransList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'반출일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'B/K번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'자가운송사',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'자가운송사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'요청거래처',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'요청거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'실화주거래처',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'실화주거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'TMC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'작업지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'담당자코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'컬럼헤더명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'subsum1',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bookingNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNo',inputType:'text',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNo',inputType:'text',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNo',inputType:'text',width:'120',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realMchtClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'onReqNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSeq',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptWrkPlCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'doorRgnCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellLodeptCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'subsum1',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subsum1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'st_column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'st_column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column9',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column5',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'st_column19',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'st_column55',displayMode:'label',expression:'targetColValue()',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'st_column52',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("sellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column46',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'st_column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column40',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column31',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column34',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column37',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column64',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column58',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'st_column61',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'st_subsum1',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',class:'bg-type3',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'sellAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'ft_subsum1',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_totalCnt'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})