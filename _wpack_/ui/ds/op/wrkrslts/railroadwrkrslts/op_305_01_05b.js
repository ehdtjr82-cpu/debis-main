/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_305_01_05b.xml 30685 0e24b054a88c9a1eb38398585ff7dc7a4bc79cce8210d475ac655d1b095d7e63 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadAllocationOfCarsResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c20ePt',name:'사유;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20eAf',name:'청;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20eBt',name:'BT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20e',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20fPt',name:'사유;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20fAf',name:'청;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20fBt',name:'BT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c20f',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40ePt',name:'사유;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40eAf',name:'청;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40eBt',name:'BT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40e',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40fPt',name:'사유;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40fAf',name:'청;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40fBt',name:'BT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c40f',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45ePt',name:'사유;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45eAf',name:'청;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45eBt',name:'BT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45e',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45fPt',name:'사유;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45fAf',name:'청;화차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45fBt',name:'BT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'c45f',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCntr',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsTeu',name:'TEU',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNmCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkBlock',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnCd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadAllocationOfCarsResultsSumCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_RailroadAllocationOfCarsResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadAllocationOfCarsResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

scwin.onpageload = function () {
  //공통코드 적용(조건 :운송몀의)
  const codeOptions = [{
    grpCd: "OP147",
    compID: "acb_lc_transNmCd"
  }];
  console.log(codeOptions);
  $c.data.setCommonCode($p, codeOptions);
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); //udc달력 형식
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve, [em_wrkDtFrom, em_wrkDtTo]);
  //현재날짜 셋팅
  em_wrkDtFrom.setValue(scwin.strCurDate);
  em_wrkDtTo.setValue(scwin.strCurDate);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  var from = (em_wrkDtFrom.getValue() || "").trim();
  var to = (em_wrkDtTo.getValue() || "").trim();
  if (from === "") {
    $c.gus.cfAlertMsg($p, "출발예정일 조회 시작일자은(는) 필수 입력 항목입니다.");
    em_wrkDtFrom.focus();
    return;
  }
  if (to === "") {
    $c.gus.cfAlertMsg($p, "출발예정일 조회 종료일자은(는) 필수 입력 항목입니다.");
    em_wrkDtTo.focus();
    return;
  }

  //출발예정일 validate 체크
  if (!$c.gus.cfValidate($p, em_wrkDtFrom) || !$c.gus.cfValidate($p, em_wrkDtTo)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, em_wrkDtFrom.getValue(), em_wrkDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    em_wrkDtFrom.focus();
    return;
  }

  //dataMap set
  dma_retrieve.set("wrkDtFrom", em_wrkDtFrom.getValue());
  dma_retrieve.set("wrkDtTo", em_wrkDtTo.getValue());
  dma_retrieve.set("transNmCd", acb_lc_transNmCd.getValue()); //운송명의
  dma_retrieve.set("wrkBlock", acb_co_lc_wrkBlock.getValue()); //작업구간
  dma_retrieve.set("dptStnCd", ed_dptStn.getValue());
  dma_retrieve.set("arvStnCd", ed_arvStn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = async function () {
  let nCnt = ds_RailroadAllocationOfCarsResults.getRowCount();
  if (nCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_RailroadAllocationOfCarsResults.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 출발역
      udc_comCode_dptstn.setSelectId("retrieveTrainWorkPlace");
      udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, pCode, pName, pClose, null, "출발역코드,출발역명", null, null, null, null, null, null, null, null, pAllSearch, "출발역조회,출발역코드,출발역명");
      break;
    case 2:
      // 도착역
      udc_comCode_arv.setSelectId("retrieveTrainWorkPlace");
      udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, pCode, pName, pClose, null, "도착역코드,도착역명", null, null, null, null, null, null, null, null, pAllSearch, "도착역조회,도착역코드,도착역명");
      break;
  }
};
//출발역 udc popup
scwin.udc_comCode_dptstn_onclickEvent = function (e) {
  debugger;
  // udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, ed_dptStn.getValue(), ed_dptStnNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);

  var code = (ed_dptStn.getValue() || "").trim();
  var name = (ed_dptStnNm.getValue() || "").trim();

  // 1) 빈칸이면 무조건 목록 팝업(전체검색)
  if (code === "" && name === "") {
    scwin.f_openCommonPopUp(1, "", "", "F", "T");
    return;
  }

  // 2) 코드가 "정상 코드"면 단건 자동조회 우선
  var isValidCode = /^[A-Za-z0-9]{4}$/.test(code);

  // 2-1) 정상 코드면 "단건 자동조회" (pClose="T", pAllSearch="F")
  if (isValidCode) {
    scwin.f_openCommonPopUp(1, code, "", "T", "F");
    return;
  }
  // 이름이 있으면 이름으로 목록 팝업
  if (name !== "") {
    scwin.f_openCommonPopUp(1, "", name, "F", "T");
    return;
  }

  // 그 외는 전체 목록
  scwin.f_openCommonPopUp(1, "", "", "F", "T");
};

//출발역pop callback
scwin.udc_comCode_dptstn_callBackFunc = function (ret) {
  debugger;
  $c.gus.cfSetReturnValue($p, ret, ed_dptStn, ed_dptStnNm);
  console.log(ret);
};
scwin.udc_comCode_dptstn_onblurCodeEvent = function (e) {
  debugger;
  var v = (ed_dptStn.getValue() || "").trim();

  // 값이 없으면 이름 초기화하고 끝
  if (v === "") {
    ed_dptStnNm.setValue("");
    return;
  }
  // 정상코드(4자리)면 단건 자동조회
  if (/^[A-Za-z0-9]{4}$/.test(v)) {
    scwin.f_openCommonPopUp(1, v, "", "T", "F");
  } else {
    // 부분코드 검색이면 팝업
    scwin.f_openCommonPopUp(1, v, "", "F", "T");
  }
};
scwin.udc_comCode_dptstn_onviewchangeNameEvent = function (info) {
  debugger;
  var v = (ed_dptStnNm.getValue() || "").trim();

  // 이름이 비어있으면 코드 초기화
  if (v === "") {
    ed_dptStn.setValue("");
    return;
  }
  //입력값(이름) 유지한 채로, 검색 파라미터만 "이름"으로 넘김
  scwin.f_openCommonPopUp(1, "", v, "F", "T");
};

//도착역pop
scwin.udc_comCode_arv_onclickEvent = function (e) {
  // udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, ed_arvStn.getValue(), ed_arvStnNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);

  var code = (ed_arvStn.getValue() || "").trim();
  var name = (ed_arvStnNm.getValue() || "").trim();
  if (code === "" && name === "") {
    scwin.f_openCommonPopUp(2, "", "", "F", "T");
    return;
  }

  // 코드가 정상(2R03 같은 4자리 영숫자)이면 단건 자동조회 우선
  if (/^[A-Za-z0-9]{4}$/.test(code)) {
    scwin.f_openCommonPopUp(2, code, "", "T", "F");
    return;
  }

  // 이름이 있으면 이름으로 목록 팝업
  if (name !== "") {
    scwin.f_openCommonPopUp(2, "", name, "F", "T");
    return;
  }

  // 그 외 전체목록
  scwin.f_openCommonPopUp(2, "", "", "F", "T");
};

//도착역POP callback
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvStn, ed_arvStnNm);
  console.log(ret);
};
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  var v = (ed_arvStn.getValue() || "").trim();

  // 값이 없으면 이름 초기화하고 끝
  if (v === "") {
    ed_arvStnNm.setValue("");
    return;
  }

  // 정상코드면 단건 자동조회, 아니면 부분검색 팝업 (출발역과 동일 정책 추천)
  if (/^[A-Za-z0-9]{4}$/.test(v)) {
    scwin.f_openCommonPopUp(2, v, "", "T", "F");
  } else {
    scwin.f_openCommonPopUp(2, v, "", "F", "T");
  }
};
scwin.udc_comCode_arv_onviewchangeNameEvent = function (info) {
  var v = (ed_arvStnNm.getValue() || "").trim();

  // 이름이 비어있으면 코드 초기화
  if (v === "") {
    ed_arvStn.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(2, "", v, "F", "T");
};

/**
 * method
 * @name f_runExcel
 * @description Excel 
 * @param 
 */
scwin.f_runExcel = async function () {
  debugger;
  if (gr_RailroadAllocationOfCarsResults.getRowCount()) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_RailroadAllocationOfCarsResults, {
        fileName: '철송컨테이너실적현황조회.xlsx',
        sheetName: '철송컨테이너실적현황조회',
        type: '1',
        useDataFormat: "true"
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'em_wrkDtFrom',edToId:'em_wrkDtTo',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_wrkBlock',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전구간'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경부간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송명의 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_transNmCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',mandatory:'false',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptStn',nameId:'ed_dptStnNm',id:'udc_comCode_dptstn',maxlengthCode:'4',mandatoryCode:'false',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_dptstn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dptstn_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dptstn_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',btnId:'btn_triggerU'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvStn',nameId:'ed_arvStnNm',id:'udc_comCode_arv',mandatoryCode:'false',maxlengthCode:'6',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_arv_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',btnId:'btn_trigger'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송컨테이너 실적현황조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_RailroadAllocationOfCarsResults',id:'udc_topGrdBtn',btnUser:'Y',gridDownYn:'Y',btnPlusYn:'Y',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadAllocationOfCarsResults',id:'gr_RailroadAllocationOfCarsResults',style:'',visibleRowNum:'13',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',readOnly:'true',fixedColumn:'2',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출발역',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'도착역',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'20E',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'280',value:'20F',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column52',displayMode:'label',value:'40E',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column40',displayMode:'label',value:'40F',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column73',displayMode:'label',value:'45E',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column55',displayMode:'label',value:'45F',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column101',value:'TEU',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column98',value:'사유<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',value:'청<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',value:'BT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column95',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column94',value:'사유<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',value:'청<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column92',value:'BT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'사유<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'청<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',value:'BT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column86',value:'사유<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'청<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',value:'BT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'사유<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',value:'청<br/>화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',value:'BT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',displayMode:'label',value:'사유<br/>화차'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',displayMode:'label',value:'청<br/>화차'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',displayMode:'label',value:'BT'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column110',value:'계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',value:'',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20ePt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20eAf',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20eBt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20e',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20fPt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20fAf',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20fBt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20f',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40ePt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40eAf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40eBt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40e',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40fPt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40fAf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40fBt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c40f',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45ePt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45eAf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45eBt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45e',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45fPt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45fAf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'c45fBt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'c45f',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totCntr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'rsltsTeu',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column28',displayMode:'label',textAlign:'right',expression:'SUM(\'c20ePt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'SUM(\'c20eAf\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'SUM(\'c20eBt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'SUM(\'c20e\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'SUM(\'c20fPt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'SUM(\'c20fAf\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'SUM(\'c20fBt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'SUM(\'c20f\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'SUM(\'c40ePt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'SUM(\'c40eAf\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'SUM(\'c40eBt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'SUM(\'c40e\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',expression:'SUM(\'c40fPt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',expression:'SUM(\'c40fAf\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',expression:'SUM(\'c40fBt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column39',displayMode:'label',textAlign:'right',expression:'SUM(\'c40f\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column75',displayMode:'label',textAlign:'right',expression:'SUM(\'c45ePt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',expression:'SUM(\'c45eAf\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'SUM(\'c45eBt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',expression:'SUM(\'c45e\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',expression:'SUM(\'c45fPt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'SUM(\'c45fAf\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',expression:'SUM(\'c45fBt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column112',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'c45f\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column108',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'totCntr\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column104',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'rsltsTeu\')',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})