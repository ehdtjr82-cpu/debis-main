/*amd /ui/ds/op/adjmbd/pchsadjmproc/op_402_02_01b.xml 34557 9c3dbb927df6eddb7747a41016039380a884bbc4b10c2d27f509245355843a4e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_railroadFareSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarBran',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fareAdpt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNm',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadFare',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranNm',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'운송;명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcar',name:'운임;적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR.NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSpec',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F"/"E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railoadFare',name:'철송임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할인할증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입기본단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitAmt',name:'이익금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitRt',name:'원가율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hndlRate',name:'조작료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reHndlRate',name:'재조작료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmpndCgshfRate',name:'구내이적료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rateTot',name:'합계',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchsadjmproc.RetrieveRailroadFareDayEachResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_railroadFareSearch","key":"IN_DS1"},{"id":"ds_railroadFare","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadFare","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.wq_gvw .gridFooterTDDefault,.wq_gvw .gridSubtotalDefault{height:20px!important}'}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_402_02_01b
// 이름     : 철송임일별실적조회
// 경로     : 물류/실적현황/철송
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

/* 배차점소계 footer row(row5) DOM 직접 hide/show */
scwin.setLobranFooterVisible = function (isVisible) {
  try {
    var rowEl = document.getElementById("row5");
    if (rowEl) {
      rowEl.style.display = isVisible ? "" : "none";
    }
  } catch (e) {
    console.log("setLobranFooterVisible error", e);
  }
};
scwin.onpageload = function () {
  //공통코드 적용(조건 :운송명의)
  const codeOptions = [{
    grpCd: "OP147",
    compID: "acb_lc_transNm"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //배차점소 콤보 조회
  const gauceParam = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_lc_alloccarBran"
  }];
  $c.data.setGauceUtil($p, gauceParam);

  // 분기(지점) 콤보 데이터 조회 — ds_lobran 채움 (itemset 바인딩 활성화)
  $c.sbm.execute($p, sbm_lobran);
  scwin.onUdcCompleted();

  // 렌더링 이후 배차점소계 숨김 (전체합계는 유지)
  setTimeout(function () {
    scwin.setLobranFooterVisible(false);
  }, 0);
};
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); //udc달력 형식
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_retrieve, null);
  ed_qryDtFrom.setValue(scwin.strCurDate);
  ed_qryDtTo.setValue(scwin.strCurDate);
};

//출발역 돋보기 클릭
scwin.udc_comCode_dptstn_onclickEvent = function (e) {
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, em_dptStn.getValue(), ed_dptStnNm.getValue(), "F", null, "역명코드,역명,역명코드,역명", null, null, null, null, null, null, null, null, null, "역명조회,역명코드,역명");
};
//출발역 코드 blur — 자동조회
scwin.udc_comCode_dptstn_onblurCodeEvent = function (e) {
  if (em_dptStn.getValue() === "") {
    ed_dptStnNm.setValue("");
    return;
  }
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, em_dptStn.getValue(), "", "T", null, "역명코드,역명,역명코드,역명", null, null, null, null, null, null, null, null, null, "역명조회,역명코드,역명");
};
//출발역 명 blur — 자동조회
scwin.udc_comCode_dptstn_onblurNameEvent = function (e) {
  if (ed_dptStnNm.getValue() === "") {
    em_dptStn.setValue("");
    return;
  }
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, "", ed_dptStnNm.getValue(), "T", null, "역명코드,역명,역명코드,역명", null, null, null, null, null, null, null, null, null, "역명조회,역명코드,역명");
};
//출발역 callback
scwin.udc_comCode_dptstn_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, em_dptStn, ed_dptStnNm);
};

//도착역 돋보기 클릭
scwin.udc_comCode_arv_onclickEvent = function (e) {
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, em_arvStn.getValue(), ed_arvStnNm.getValue(), "F", null, "역명코드,역명,역명코드,역명", null, null, null, null, null, null, null, null, null, "역명조회,역명코드,역명");
};
//도착역 코드 blur — 자동조회
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  if (em_arvStn.getValue() === "") {
    ed_arvStnNm.setValue("");
    return;
  }
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, em_arvStn.getValue(), "", "T", null, "역명코드,역명,역명코드,역명", null, null, null, null, null, null, null, null, null, "역명조회,역명코드,역명");
};
//도착역 명 blur — 자동조회
scwin.udc_comCode_arv_onblurNameEvent = function (e) {
  if (ed_arvStnNm.getValue() === "") {
    em_arvStn.setValue("");
    return;
  }
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, "", ed_arvStnNm.getValue(), "T", null, "역명코드,역명,역명코드,역명", null, null, null, null, null, null, null, null, null, "역명조회,역명코드,역명");
};
//도착역 callback
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, em_arvStn, ed_arvStnNm);
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  // 필수항목 체크
  let chk = await $c.gus.cfValidate($p, [tbl_retrieve]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_qryDtFrom.getValue(), ed_qryDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_qryDtFrom.focus();
    return;
  }

  // ASIS: 조회기간이 1개월 이상이면 confirm
  var sFrom = String(ed_qryDtFrom.getValue() || "").replace(/[^0-9]/g, "");
  var sTo = String(ed_qryDtTo.getValue() || "").replace(/[^0-9]/g, "");
  if (sFrom.length === 8 && sTo.length === 8) {
    var fY = parseInt(sFrom.substr(0, 4), 10);
    var fM = parseInt(sFrom.substr(4, 2), 10);
    var fD = parseInt(sFrom.substr(6, 2), 10);
    var tY = parseInt(sTo.substr(0, 4), 10);
    var tM = parseInt(sTo.substr(4, 2), 10);
    var tD = parseInt(sTo.substr(6, 2), 10);
    var monthDiff = (tY - fY) * 12 + (tM - fM);
    if (tD < fD) monthDiff -= 1;
    if (monthDiff >= 1) {
      var ok = await $c.win.confirm($p, "조회기간이 1개월 이상입니다.\n계속하시겠습니까?");
      if (!ok) {
        ed_qryDtFrom.focus();
        return;
      }
    }
  }

  //dataMap set
  dma_railroadFareSearch.set("qryDtFrom", ed_qryDtFrom.getValue());
  dma_railroadFareSearch.set("qryDtTo", ed_qryDtTo.getValue());
  dma_railroadFareSearch.set("dptStn", em_dptStn.getValue());
  dma_railroadFareSearch.set("arvStn", em_arvStn.getValue());
  dma_railroadFareSearch.set("alloccarBran", acb_lc_alloccarBran.getValue());
  dma_railroadFareSearch.set("fareAdpt", acb_lc_fareAdpt.getValue());
  dma_railroadFareSearch.set("transNm", acb_lc_transNm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

// 조회 callback
scwin.sbm_retrieve_submitdone = function () {
  var nCnt = ds_railroadFare.getRowCount();
  if (nCnt == 0) {
    scwin.setLobranFooterVisible(false);
    total.setValue(0);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    // 배차점소 + 출발역 + 도착역 순 정렬 (subTotal이 자동 계산)
    ds_railroadFare.multisort({
      sortIndex: "lobranNm,dptWrkPlNm,arvWrkPlNm",
      sortOrder: "0,0,0"
    });

    // 정렬/재렌더 후 배차점소계 표시
    setTimeout(function () {
      scwin.setLobranFooterVisible(true);
    }, 0);
    gr_railroadFare.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};

//엑셀 다운로드
scwin.f_gridDown = function () {
  // 히든컬럼 및 개인화로 미노출된 컬럼 인덱스 수집
  var removeColIdx = [];
  var colCount = gr_railroadFare.getColumnCount();
  for (var i = 0; i < colCount; i++) {
    if (!gr_railroadFare.getColumnVisible(i)) {
      removeColIdx.push(i);
    }
  }
  $c.data.downloadGridViewExcel($p, gr_railroadFare, {
    fileName: '철송임일별실적조회.xlsx',
    sheetName: '철송임일별실적조회',
    type: "1",
    useDataFormat: "true",
    removeColumns: removeColIdx.join(","),
    hiddenVisible: "false"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryDtFrom',edToId:'ed_qryDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'출발일자시작',titleTo:'출발일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'em_dptStn',nameId:'ed_dptStnNm',id:'udc_comCode_dptstn',maxlengthCode:'6',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_dptstn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dptstn_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dptstn_onblurNameEvent',imeMode:'disabled',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'em_arvStn',nameId:'ed_arvStnNm',id:'udc_comCode_arv',maxlengthCode:'6',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_arv_onblurNameEvent',imeMode:'disabled',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_alloccarBran',search:'start',style:'width:208px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운임적용 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_fareAdpt',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'5'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유화차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청화차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송명의 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_transNm',search:'start',style:'width:230px;',submenuSize:'auto',visibleRowNum:'10',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송임 일별실적조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_railroadFare',gridDownYn:'Y',gridDownFn:'scwin.f_gridDown',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_railroadFare',id:'gr_railroadFare',style:'',initFixedHeightByRowNum:'20',visibleRowNum:'18',defaultCellHeight:'20',focusMode:'row',focusMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:'height: 20px;'},E:[{T:1,N:'w2:row',A:{id:'row1',style:'height:20px !important;'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'배차점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'출발역',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'도착역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'운송<br/>명의',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'운임<br/>적용',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'CNTR No.',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column64',value:'철송임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'할인할증사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'할인할증금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'매입기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'이익금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'원가율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'조작료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'재조작료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'구내이적료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',expression:'display(\'lobranNm\') + display(\'dptWrkPlNm\') + display(\'arvWrkPlNm\')',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transNm',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adminfrtcar',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSpec',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'railoadFare',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dcScNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dcScAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'profitAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profitRt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hndlRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reHndlRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmpndCgshfRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmis',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rateTot',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'column68',style:'height: 20px !important;',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'height:20px !important;',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'구간계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column90',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'railoadFare\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'dcScAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'pchsAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'profitAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.0',expression:'AVG(\'profitRt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'sellAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'hndlRate\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'reHndlRate\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'cmpndCgshfRate\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'cmis\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'rateTot\')',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'height: 20px;',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'height:20px !important;',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',displayMode:'label',value:'배차점소계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column100',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column119',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column118',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column116',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'railoadFare\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column115',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column114',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'dcScAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column113',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column112',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'profitAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column111',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0',expression:'AVG(\'profitRt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column110',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'sellAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column109',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'hndlRate\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column108',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'reHndlRate\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column107',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'cmpndCgshfRate\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column106',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'cmis\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column105',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'rateTot\')'}}]},{T:1,N:'w2:row',A:{style:'height:20px !important;',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'전체합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'railoadFare\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'dcScAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'profitAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0',expression:'AVG(\'profitRt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'hndlRate\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'reHndlRate\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'cmpndCgshfRate\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'cmis\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column39',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'rateTot\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})