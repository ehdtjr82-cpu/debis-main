/*amd /ui/ds/op/adjmbd/pchsadjmproc/op_402_02_02b.xml 23487 c982e81d2f8ed9c9e536f4854eddee0df421a6b59448487967facdc4082fb4f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadFarePresentCondition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranNm',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcar',name:'운임적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'운임명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empty20',name:'20E',dataType:'number'}},{T:1,N:'w2:column',A:{id:'full20',name:'20F',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empty40',name:'40E',dataType:'number'}},{T:1,N:'w2:column',A:{id:'full40',name:'40F',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrTot',name:'계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'teu',name:'TEU',dataType:'number'}},{T:1,N:'w2:column',A:{id:'railoadFare',name:'철송임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hndlRate',name:'조작료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reHndlRate',name:'재조작료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmpndCgshfRate',name:'구내이적료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rateTot',name:'합계',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarBran',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fareAdpt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNm',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchsadjmproc.RetrieveRailroadFarePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_railroadFarePresentCondition","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadFarePresentCondition","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_402_02_02b
// 이름     : 철송임현황조회
// 경로     : 물류/실적현황/철송/철송임현황조회
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

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
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, ed_dptStn.getValue(), ed_dptStnNm.getValue(), "F", null, "작업장코드,작업장명,작업장코드,작업장명", null, null, null, null, null, null, null, null, null, "출발역명조회,출발역명코드,출발역명");
};
//출발역 코드 blur — 자동조회
scwin.udc_comCode_dptstn_onblurCodeEvent = function (e) {
  if (ed_dptStn.getValue() === "") {
    ed_dptStnNm.setValue("");
    return;
  }
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, ed_dptStn.getValue(), "", "T", null, "작업장코드,작업장명,작업장코드,작업장명", null, null, null, null, null, null, null, null, null, "출발역명조회,출발역명코드,출발역명");
};
//출발역 명 blur — 자동조회
scwin.udc_comCode_dptstn_onblurNameEvent = function (e) {
  if (ed_dptStnNm.getValue() === "") {
    ed_dptStn.setValue("");
    return;
  }
  udc_comCode_dptstn.cfCommonPopUp(scwin.udc_comCode_dptstn_callBackFunc, "", ed_dptStnNm.getValue(), "T", null, "작업장코드,작업장명,작업장코드,작업장명", null, null, null, null, null, null, null, null, null, "출발역명조회,출발역명코드,출발역명");
};
//출발역 callback
scwin.udc_comCode_dptstn_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptStn, ed_dptStnNm);
};

//도착역 돋보기 클릭
scwin.udc_comCode_arv_onclickEvent = function (e) {
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, ed_arvStn.getValue(), ed_arvStnNm.getValue(), "F", null, "작업장코드,작업장명,작업장코드,작업장명", null, null, null, null, null, null, null, null, null, "도착역명조회,도착역명코드,도착역명");
};
//도착역 코드 blur — 자동조회
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  if (ed_arvStn.getValue() === "") {
    ed_arvStnNm.setValue("");
    return;
  }
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, ed_arvStn.getValue(), "", "T", null, "작업장코드,작업장명,작업장코드,작업장명", null, null, null, null, null, null, null, null, null, "도착역명조회,도착역명코드,도착역명");
};
//도착역 명 blur — 자동조회
scwin.udc_comCode_arv_onblurNameEvent = function (e) {
  if (ed_arvStnNm.getValue() === "") {
    ed_arvStn.setValue("");
    return;
  }
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, "", ed_arvStnNm.getValue(), "T", null, "작업장코드,작업장명,작업장코드,작업장명", null, null, null, null, null, null, null, null, null, "도착역명조회,도착역명코드,도착역명");
};
//도착역 callback
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvStn, ed_arvStnNm);
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

  //dataMap set
  dma_search.set("qryDtFrom", ed_qryDtFrom.getValue());
  dma_search.set("qryDtTo", ed_qryDtTo.getValue());
  dma_search.set("dptStn", ed_dptStn.getValue());
  dma_search.set("arvStn", ed_arvStn.getValue());
  dma_search.set("alloccarBran", acb_lc_alloccarBran.getValue());
  dma_search.set("fareAdpt", acb_lc_fareAdpt.getValue());
  dma_search.set("transNm", acb_lc_transNm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_railroadFarePresentCondition.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_railroadFarePresentCondition.setFocusedCell(0, 0);
  }
  let tot_cnt = 0;
  for (let i = 0; i < ds_railroadFarePresentCondition.getRowCount(); i++) {
    if (ds_railroadFarePresentCondition.getCellData(i, "dptWrkPlNm") != "" && ds_railroadFarePresentCondition.getCellData(i, "adminfrtcar") != "") {
      tot_cnt += 1;
    }
  }
  total.setValue(tot_cnt);

  /*grid 컬럼 formatter 적용 안되서 응용(docode(decode(decode 형식 start..............................*/
  for (let j = 0; j < ds_railroadFarePresentCondition.getRowCount(); j++) {
    let d_adminfrtcar = ds_railroadFarePresentCondition.getCellData(j, "adminfrtcar");
    let d_dptWrkPlNm = ds_railroadFarePresentCondition.getCellData(j, "dptWrkPlNm");
    let d_lobranNm = ds_railroadFarePresentCondition.getCellData(j, "lobranNm");
    let d_arvWrkPlNm = ds_railroadFarePresentCondition.getCellData(j, "arvWrkPlNm");
    /*점소컬럼*/
    if (d_adminfrtcar == "") {
      if (d_dptWrkPlNm == "") {
        ds_railroadFarePresentCondition.setCellData(j, "lobranNm", "배차점소합계");
      } else {
        ds_railroadFarePresentCondition.setCellData(j, "lobranNm", "");
      }
    } else {
      if (d_dptWrkPlNm == "") {
        ds_railroadFarePresentCondition.setCellData(j, "lobranNm", "배차점소계");
      } else {
        ds_railroadFarePresentCondition.setCellData(j, "lobranNm", d_lobranNm);
      }
    }
    /*출발컬럼*/
    if (d_adminfrtcar == "") {
      if (d_dptWrkPlNm == "") {
        ds_railroadFarePresentCondition.setCellData(j, "dptWrkPlNm", "");
      } else {
        ds_railroadFarePresentCondition.setCellData(j, "dptWrkPlNm", "구간계");
      }
    } else {
      ds_railroadFarePresentCondition.setCellData(j, "dptWrkPlNm", d_dptWrkPlNm);
    }
    /*도착컬럼*/
    if (d_adminfrtcar == "") {
      ds_railroadFarePresentCondition.setCellData(j, "arvWrkPlNm", "");
    } else {
      ds_railroadFarePresentCondition.setCellData(j, "arvWrkPlNm", d_arvWrkPlNm);
    }
  }
  /*grid 컬럼 formatter 적용 안되서 응용(docode(decode(decode 형식 end.........................*/
};

//엑셀 다운로드
scwin.f_gridDown = function () {
  $c.data.downloadGridViewExcel($p, gr_railroadFarePresentCondition, {
    fileName: '철송임현황조회.xlsx',
    sheetName: '철송임현황조회',
    type: "1",
    useDataFormat: "true"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryDtFrom',edToId:'ed_qryDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업기간시작',titleTo:'작업기간종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_dptStn',nameId:'ed_dptStnNm',id:'udc_comCode_dptstn',maxlengthCode:'6',imeMode:'disabled',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_comCode_dptstn_onclickEvent',selectID:'retrieveTrainWorkPlace','ev:onblurCodeEvent':'scwin.udc_comCode_dptstn_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dptstn_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_arvStn',nameId:'ed_arvStnNm',id:'udc_comCode_arv',maxlengthCode:'6',imeMode:'disabled',allowCharCode:'a-zA-Z0-9',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_arv_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_alloccarBran',search:'start',style:'width:208px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운임적용 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_fareAdpt',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'5'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유화차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청화차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송명의 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_transNm',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송임 현황조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_railroadFarePresentCondition',gridDownYn:'Y',gridDownFn:'scwin.f_gridDown',gridDownUserAuth:'X',btnUser:'Y',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_railroadFarePresentCondition',id:'gr_railroadFarePresentCondition',style:'',visibleRowNum:'20',visibleRowNumFix:'true',defaultCellHeight:'20',focusMode:'row',focusMove:'true',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:'height:20px !important;'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'배차점소',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'출발역',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'도착역',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'운임<br/>적용',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'운임<br/>명의',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'물량',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'철송임',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'조작료',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'재조작료',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'구내이적료',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'수수료',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'합계',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'height:20px !important;',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'TEU',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adminfrtcar',inputType:'text',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transNm',inputType:'text',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty20',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'full20',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty40',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'full40',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTot',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'teu',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'railoadFare',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hndlRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reHndlRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cmpndCgshfRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cmis',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rateTot',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})