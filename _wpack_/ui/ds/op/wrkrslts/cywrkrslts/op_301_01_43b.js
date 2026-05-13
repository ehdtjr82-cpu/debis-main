/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_43b.xml 30998 125b64d4007878b8b146cfacd2f85fd77d6935c161aaa3e1292fc0b039c53db4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryInAndCarryOutSumup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt20e',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt20es',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt20f',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt20fs',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt40e',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt40es',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt40f',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt40fs',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt45e',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt45es',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt45f',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt45fs',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sum',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sums',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teu',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teus',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subsum1',name:'subsum1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutDtFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutHhFrom',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutHhTo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCls',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_wrkPlCd',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveCarryInAndCarryOutSumupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_carryInAndCarryOutSumup","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_carryInAndCarryOutSumup","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*년월 setting*/
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strCurYyMm = scwin.strCurDate.substring(0, 6);
scwin.sort_options = {
  sortIndex: "wrkPlNm lineNm",
  sortOrder: "1 1"
};
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMddHHmm"); //현재시간분

scwin.onpageload = function () {
  //작업장 
  dma_wrkPlCd.set("sysCd", "CommonEBC");
  dma_wrkPlCd.set("queryId", "retriveWrkLobranCd");
  dma_wrkPlCd.set("param1", $c.data.getMemInfo($p, "cyCd")); //param

  // 점소가 NULL이 아닐경우 넘어온 점소로 세팅함.
  if ($c.data.getMemInfo($p, "cyCd") != "") {
    for (var i = 0; i <= ds_wrkPlCd.getRowCount(); i++) {
      if (ds_wrkPlCd.getCellData(i, "col1") == $c.data.getMemInfo($p, "cyCd")) {
        acb_lc_wrkPlCd.getSelectedIndex(i - 1);
        break;
      }
    }
    $c.sbm.execute($p, sbm_wrkPlCd); //작업장 submit
  }

  //$c.sbm.execute(sbm_wrkPlCd);

  //공통코드 적용
  const codeOptions = [{
    grpCd: "OP197",
    compID: "acb_lc_crryInOutCd"
  }, {
    grpCd: "SD113",
    compID: "acb_lc_odrKnd"
  }];
  console.log(codeOptions);
  $c.data.setCommonCode($p, codeOptions);
  ed_crryinoutDtFrom.setValue(scwin.strCurDate);
  ed_crryinoutDtTo.setValue(scwin.strCurDate);
};

//작업장callback
scwin.sbm_wrkPlCd_submitdone = function () {
  ds_wrkPlCd.insertRow(0);
  ds_wrkPlCd.setCellData(0, "col1", "");
  ds_wrkPlCd.setCellData(0, "col2", "전체");
};
//Line popup
scwin.udc_comCode_line_onclickEvent = async function (e) {
  udc_comCode_line.cfCommonPopUp(scwin.udc_comCode_line_callBackFunc, ed_lineCd.getValue(), ed_lineNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//LINE 팝업callback
scwin.udc_comCode_line_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd, ed_lineNm);
  console.log(ret);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  // acb_lc_wrkPlCd.setValue("");
  // ed_crryinoutDtFrom.setValue(scwin.strCurDate);
  // ed_crryinoutDtTo.setValue(scwin.strCurDate);
  // ds_lobran.setCellData(0,"lobranCd" ,"6AA");
  // ds_lobran.setCellData(0,"lobranNm" ,"부산지사");
  // acb_lc_posnClsCd.setValue("");
  // acb_lux_insrkndCd.setValue("");

  $c.gus.cfInitObjects($p, tb_wrk, [ed_crryinoutDtFrom, ed_crryinoutDtTo]);
  //현재날짜 셋팅
  ed_crryinoutDtFrom.setValue(scwin.strCurDate);
  ed_crryinoutDtTo.setValue(scwin.strCurDate);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  var from = (ed_crryinoutDtFrom.getValue() || "").trim();
  var to = (ed_crryinoutDtTo.getValue() || "").trim();
  if (from === "") {
    $c.gus.cfAlertMsg($p, "작업 조회 시작일자은(는) 필수 입력 항목입니다.");
    ed_crryinoutDtFrom.focus();
    return;
  }
  if (to === "") {
    $c.gus.cfAlertMsg($p, "작업 조회 종료일자은(는) 필수 입력 항목입니다.");
    ed_crryinoutDtTo.focus();
    return;
  }
  if (!$c.gus.cfValidate($p, ed_crryinoutDtFrom) || !$c.gus.cfValidate($p, ed_crryinoutDtTo)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_crryinoutDtFrom.getValue(), ed_crryinoutDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_crryinoutDtFrom.focus();
    return;
  }

  // if (ed_crryinoutHhFrom.getValue() != "") {
  //     if (!$c.gus.cfValidateValue(ed_crryinoutHhFrom.getValue().length == '4')) {
  //         $c.gus.cfAlertMsg("시작시간이 잘못되었습니다.");
  //         return;
  //     }
  // }
  // if (ed_crryinoutHhTo.getValue() != "") {
  //     if (!$c.gus.cfValidateValue(ed_crryinoutHhTo.getValue().length == '4')) {
  //         $c.gus.cfAlertMsg("종료시간이 잘못되었습니다.");
  //         return;
  //     }
  // }

  var hhFrom = scwin._toHHMM(ed_crryinoutHhFrom.getValue());
  if (hhFrom === null) {
    $c.gus.cfAlertMsg($p, "시작시간이 잘못되었습니다.");
    ed_crryinoutHhFrom.focus();
    return;
  }
  var hhTo = scwin._toHHMM(ed_crryinoutHhTo.getValue());
  if (hhTo === null) {
    $c.gus.cfAlertMsg($p, "종료시간이 잘못되었습니다.");
    ed_crryinoutHhTo.focus();
    return;
  }
  let vInOut = (acb_lc_crryInOutCd.getValue() || "").trim();

  // allOption="true" 케이스에서 "전체"가 ALL/%/전체 등으로 넘어오는 것 방지
  if (vInOut === "all" || vInOut === "%" || vInOut === "전체") {
    vInOut = "";
  }

  //dataMap setting

  dma_retrieve.set("wrkPlCd", acb_lc_wrkPlCd.getValue());
  dma_retrieve.set("crryinoutDtFrom", ed_crryinoutDtFrom.getValue());
  dma_retrieve.set("crryinoutHhFrom", hhFrom);
  dma_retrieve.set("crryinoutDtTo", ed_crryinoutDtTo.getValue());
  dma_retrieve.set("crryinoutHhTo", hhTo);
  dma_retrieve.set("crryinoutClsCd", vInOut); // 반출/반입
  dma_retrieve.set("odrKndCd", acb_lc_odrKnd.getValue()); // 오더종류
  dma_retrieve.set("lineCd", ed_lineCd.getValue()); // Line코드
  dma_retrieve.set("qryCls", acb_lc_qryCls.getValue()); // 조회구분

  $c.sbm.execute($p, sbm_retrieve);
};

// --- 시간 입력(HHMM 또는 HH:MM) 처리: 서버로는 HHMM 전송 ---
scwin._toHHMM = function (v) {
  v = (v || "").trim();
  if (v === "") return "";

  // 4자리(HHMM)
  if (/^\d{4}$/.test(v)) return v;

  // 5자리(HH:MM)
  if (/^\d{2}:\d{2}$/.test(v)) return v.replace(":", "");
  return null; // invalid
};
scwin.subExp1 = function (val) {
  if (!val) return "";
  var arr = String(val).split("|");
  return arr[0] || "";
};
scwin.subExp2 = function (val) {
  if (!val) return "";
  var arr = String(val).split("|");
  return arr[1] || "";
};

//조회callback
scwin.sbm_retrieve_submitdone = async function () {
  debugger;
  const ds = ds_carryInAndCarryOutSumup;

  // 그리드 정렬 상태 초기화 (사용자 클릭 정렬 제거)
  try {
    gr_dayEachCarryInAndCarryOut.clearSort();
  } catch (e) {}

  // 서버 소계 row 제거 
  // for (let i = ds.getRowCount() - 1; i >= 0; i--) {
  //     const cls = (ds.getCellData(i, "crryinoutClsCd") || "").trim();

  //     if (cls === "소계") {
  //         ds.removeRow(i);
  //     }
  // }

  // subsum1 생성(보정된 값 기반) 
  for (let i = 0; i < ds.getRowCount(); i++) {
    const w = (ds.getCellData(i, "wrkPlNm") || "").trim();
    const l = (ds.getCellData(i, "lineNm") || "").trim();
    ds.setCellData(i, "subsum1", w + "|" + l);
  }
  ds.multisort(scwin.sort_options);

  // 기존 데이터 행만 건수로 책정(asis 와 정책 변경)
  const totalCnt = ds.getRowCount();
  total.setValue(totalCnt);
  if (ds.getRowCount() === 0) {
    total.setValue(0);
    await $c.win.alert($p, "조회결과가 존재하지 않습니다.");
  }
  gr_dayEachCarryInAndCarryOut.refresh();
};

/**
 * method
 * @name f_runExcel
 * @description Excel
 * @param
 */
scwin.f_runExcel = async function () {
  if (gr_dayEachCarryInAndCarryOut.getRowCount()) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_dayEachCarryInAndCarryOut, {
        fileName: '반출입현황.xlsx',
        sheetName: '반출입현황',
        "type": "1",
        useSubTotal: "true"
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.udc_comCode_line_onblurCodeEvent = function (e) {
  var v = (ed_lineCd.getValue() || "").trim();
  if (v === "") {
    ed_lineNm.setValue("");
    return;
  }
  btn_triggerU.click();
};
scwin.udc_comCode_line_onviewchangeNameEvent = function (info) {
  var v = (ed_lineNm.getValue() || "").trim();
  if (v === "") {
    ed_lineCd.setValue("");
    return;
  }
  btn_triggerU.click();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_wrk',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_wrkPlCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleColumn:'10',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출/반입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_crryInOutCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'true',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입 일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_group6',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_crryinoutDtFrom',class:'',calendarValueType:'yearMonthDate',delimiter:'/'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',id:'ed_crryinoutHhFrom',class:'w50 tac',editFormat:'##:##',maxlength:'5',allowChar:'0-9'}}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'xf:group',A:{style:'',id:'grp_group7',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_crryinoutDtTo',class:'',calendarValueType:'yearMonthDate',delimiter:'/'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',id:'ed_crryinoutHhTo',class:'w50 tac',editFormat:'##:##',maxlength:'5',allowChar:'0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_odrKnd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'',visibleRowNum:'15'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_qryCls',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LINE별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_line',style:'',codeId:'ed_lineCd',nameId:'ed_lineNm',id:'udc_comCode_line',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveLineInfo',popupGridHeadTitle:'LINE코드,LINE명,COL3,COL4,COL5',popupTitle:'선박,선박코드,선박명','ev:onclickEvent':'scwin.udc_comCode_line_onclickEvent',popupGridHiddenColumn:'6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_comCode_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_line_onviewchangeNameEvent',btnId:'btn_triggerU',allowCharCode:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반출입현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridUpYn:'N',id:'udc_topGrdBtn',btnUser:'Y',gridDownYn:'Y',gridID:'gr_dayEachCarryInAndCarryOut',grdDownOpts:'{"fileName" : "반출입현황.xlsx" , "sheetName" : "반출입현황" , "type" : "1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_carryInAndCarryOutSumup',id:'gr_dayEachCarryInAndCarryOut',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'3',autoFit:'allColumn',fixedColumnNoMove:'true',readOnly:'true',initFixedHeightByRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업장',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'LINE/오더종류',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'반출입',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'20E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'20E(S)',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'20F',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'20F(S)',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'40E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'40E(S)',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'40F',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'40F(S)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'45E(S)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'45F(S)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'합계(S)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',displayMode:'label',value:'TEU(S)'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'subsum1',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineNm',inputType:'text',width:'200',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutClsCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt20e',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt20es',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt20f',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt20fs',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt40e',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt40es',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt40f',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt40fs',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt45e',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt45es',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt45f',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt45fs',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sum',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sums',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'teu',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'teus',displayMode:'label',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'subsum1',displayMode:'label',hidden:'true',hiddenCol:'true',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subsum1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',expression:'scwin.subExp1(targetColValue())'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',expression:'scwin.subExp2(targetColValue())',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column74',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20e")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20es")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20f")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20fs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40e")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40es")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40f")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40fs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45e")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45es")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45f")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column62',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45fs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("sum")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("sums")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("teu")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM("teus")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'st_subsum1',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20e")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20es")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20f")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt20fs")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40e")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40es")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40f")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt40fs")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45e")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45es")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45f")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("cnt45fs")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("sum")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("sums")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("teu")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column39',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("teus")'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'ft_subsum1',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})