/*amd /ui/to/in/bulk/tmlbulk/in_201_02_10_1p.xml 12895 5b5bacd3f9155c4b280740f729161da9f8b3a797b115e8f31ce9630423e98027 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'repKcgCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commcd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_registBudget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommNm',name:'품목이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종이름',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkCargoLupContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_registBudget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_registBudget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const paramData = $c.data.getParameter($p);
  scwin.commCd = paramData["cd"];
  scwin.repKcgCd = paramData["repKcgCd"];
  scwin.commNm = paramData["nm"];
  scwin.g_closeTF = paramData["closeTF"] ?? "T";
  scwin.gubun = scwin.repKcgCd;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 
 */
scwin.f_OnLoad = function () {
  ed_commCd.setValue(scwin.commCd);
  acb_repKcgCd.setValue(scwin.repKcgCd);
  ed_commNm.setValue(scwin.commNm);
  scwin.f_Retrieve();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 
 */
scwin.f_Retrieve = async function () {
  scwin.commCd = ed_commCd.getValue();
  scwin.commNm = ed_commNm.getValue();
  if (scwin.commCd == "" && scwin.commNm == "") return;
  const validSearchCondition = await $c.gus.cfValidate($p, tb_searchCondition);
  if (!validSearchCondition) return;
  scwin.submitExcute(sbm_condition);
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 조회 필드 Clear
 */
scwin.f_FieldClear = function () {
  ed_commCd.setValue(""); //-> 코드값 
  ed_commNm.setValue(""); //-> 이름 값
};

/**
 * @method 
 * @name f_FieldClear 
 * @description Windows Close
 */
scwin.f_WinClose = function () {
  const returnValue = ["N/A"];
  $c.win.closePopup($p, returnValue);
};

/**
 * @method 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_condition:
      ds_registBudget.break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_registBudget_OnLoadCompleted 
 * @description
 * @asis for=ds_registBudget event=OnLoadCompleted(rowCnt)
 */
scwin.ds_registBudget_OnLoadCompleted = async function () {
  // 팝업 호출 시 하나의 결과일 경우 자동 Close 후 값 본 화면에 Setting
  const rowCnt = ds_registBudget.getRowCount();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
    return;
  }
  ;
  if (rowCnt == 1 && scwin.g_closeTF == "T") {
    const rowData = ds_registBudget.getRowJSON(0);
    let rtnValues = [];
    rtnValues[0] = rowData["commCd"]; // 품명
    rtnValues[1] = rowData["commNm"];
    $c.win.closePopup($p, rtnValues);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_registBudget_oncelldblclick 
 * @description 셀이 더블 클릭된 경우 발생
 * @asis for=gr_registBudget event=OnDblClick(row,colid)
 */
scwin.gr_registBudget_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  const rowData = this._dataList.getRowJSON(rowIndex);
  const conditionData = dma_condition.getJSON();
  let rtnValues = [];
  switch (scwin.gubun) {
    case 0:
      rtnValues[0] = rowData["kcgCd"];
      rtnValues[1] = rowData["kcgNm"];
      break;
    case 1:
      rtnValues[0] = rowData["upperCommCd"];
      rtnValues[1] = rowData["upperCommNm"];
      break;
    case 2:
      rtnValues[0] = rowData["commCd"];
      rtnValues[1] = rowData["commNm"];
      break;
    default:
      break;
  }
  ;
  rtnValues[2] = dma_condition.get("repKcgCd");
  $c.win.closePopup($p, rtnValues);
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화 버튼 클릭
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 엑셀다운로드 버튼 클릭
 */
scwin.excel_registBudget = function () {
  // todo - f_runExcel 함수 미존재
  // f_runExcel(gr_registBudget, 1);
};

/**
 * @event 
 * @name btn_winClose_onclick 
 * @description 닫기 버튼 클릭
 */
scwin.btn_winClose_onclick = function (e) {
  scwin.f_WinClose();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:'',msaName:'품목 검색'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'width:120px;',id:'acb_repKcgCd',class:'',allOption:'',chooseOption:'',ref:'data:dma_condition.repKcgCd',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width:120px;',id:'ed_commCd',class:'',objType:'data',maxlength:'8','ev:onkeyup':'scwin.upperFlag',ref:'data:dma_condition.commcd'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'ed_commNm',class:'',objType:'data',ref:'data:dma_condition.commNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목 검색 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_registBudget',grdDownOpts:'scwin.excel_registBudget',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_registBudget',id:'gr_registBudget',style:'',visibleRowNum:'12',visibleRowNumFix:'true',gridName:'품목 검색','ev:oncelldblclick':'scwin.gr_registBudget_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'품명코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명이름',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품목코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품목이름',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'화종코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'화종이름',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'80',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCommCd',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCommNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgCd',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_winClose',style:'',type:'button','ev:onclick':'scwin.btn_winClose_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})