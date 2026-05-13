/*amd /ui/to/in/bulk/tmlbulk/in_201_02_10p.xml 13164 b54a2e5ff74083dff0e1c112cd458c8a027c849e2d4e824751a74d5806e6c197 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'commCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repKcgCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_registBudget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkCargoLupContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_registBudget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_registBudget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrParent;
scwin.commCd;
scwin.repKcgCd;
scwin.commNm;
scwin.g_closeTF;
scwin.CREATE_AUTH;
scwin.RETRIEVE_AUTH;
scwin.UPDATE_AUTH;
scwin.DELETE_AUTH;
scwin.PRINT_AUTH;
scwin.EXCEL_AUTH;
scwin.cd1;
scwin.gubun;
scwin.nm1;
scwin.onpageload = async function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  await scwin.f_OnLoad();
};
scwin.initSetVal = function () {
  scwin.arrParent = $c.data.getParameter($p);
  scwin.commCd = scwin.arrParent.cd;
  scwin.repKcgCd = scwin.arrParent.repKcgCd;
  scwin.commNm = scwin.arrParent.nm;
  if (scwin.arrParent.closeTF == undefined || scwin.arrParent.closeTF == null || scwin.arrParent.closeTF == "") {
    scwin.g_closeTF = "T";
  } else {
    scwin.g_closeTF = scwin.arrParent.closeTF;
  }
  var popTitle = scwin.arrParent.menuInfo.popupName;
  if (popTitle == undefined || popTitle == null || popTitle == "") {
    popTitle = "품목 검색";
    scwin.arrParent.menuInfo.popupName = popTitle;
  }
  scwin.CREATE_AUTH = "C";
  scwin.RETRIEVE_AUTH = "R";
  scwin.UPDATE_AUTH = "U";
  scwin.DELETE_AUTH = "D";
  scwin.PRINT_AUTH = "P";
  scwin.EXCEL_AUTH = "X";
  scwin.cd1 = scwin.commCd;
  scwin.gubun = scwin.repKcgCd;
  scwin.nm1 = scwin.commNm;
};
scwin.f_OnLoad = async function () {
  em_commCd.setValue(scwin.commCd);
  lc_repKcgCd.setValue(scwin.repKcgCd);
  txt_commNm.setValue(scwin.commNm);

  //await scwin.f_Retrieve();

  setTimeout(async function () {
    $c.data.setPopupTitle($p, "품목 검색");
    await scwin.f_Retrieve();
  }, 100);
};
scwin.f_Retrieve = async function () {
  scwin.commCd = em_commCd.getValue();
  scwin.commNm = txt_commNm.getValue();
  if (scwin.commCd == "" && scwin.commNm == "") {
    return;
  }
  let ret = await $c.gus.cfValidate($p, [tb_searchCondition]);
  if (!ret) {
    return;
  }

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_condition);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_condition_submitdone();
  }
};
scwin.sbm_condition_submitdone = async function (e) {
  scwin.gubun = lc_repKcgCd.getValue();
  var rowCnt = ds_registBudget.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
  } else if (scwin.gubun == "2" && rowCnt == 1 && scwin.g_closeTF == "T") {
    var rtnValues = new Array();
    rtnValues.commCd = ds_registBudget.getCellData(0, "commCd"); // 품명
    rtnValues.commNm = ds_registBudget.getCellData(0, "commNm");
    rtnValues.repKcgCd = dma_condition.get("repKcgCd");
    let rt = [rtnValues.commCd, rtnValues.commNm, rtnValues.repKcgCd];
    $c.win.closePopup($p, rt);
  } else if (scwin.gubun == "1" && rowCnt == 1 && scwin.g_closeTF == "T") {
    var rtnValues = new Array();
    rtnValues.upperCommCd = ds_registBudget.getCellData(0, "upperCommCd"); // 품목
    rtnValues.upperCommNm = ds_registBudget.getCellData(0, "upperCommNm");
    rtnValues.repKcgCd = dma_condition.get("repKcgCd");
    let rt = [rtnValues.upperCommCd, rtnValues.upperCommNm, rtnValues.repKcgCd];
    $c.win.closePopup($p, rt);
  } else if (scwin.gubun == "0" && rowCnt == 1 && scwin.g_closeTF == "T") {
    var rtnValues = new Array();
    rtnValues.kcgCd = ds_registBudget.getCellData(0, "kcgCd"); // 화종
    rtnValues.kcgNm = ds_registBudget.getCellData(0, "kcgNm");
    rtnValues.repKcgCd = dma_condition.get("repKcgCd");
    let rt = [rtnValues.kcgCd, rtnValues.kcgNm, rtnValues.repKcgCd];
    $c.win.closePopup($p, rt);
  }
};
scwin.f_FieldClear = function () {
  em_commCd.setValue(""); //-> 코드값 
  txt_commNm.setValue(""); //-> 이름 값
};
scwin.f_WinClose = function () {
  //let rt = [];
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};
scwin.f_ExcelDown = function () {
  //scwin.f_runExcel(gr_registBudget,1);

  var sheetTitle = "품목 검색.xlsx";
  const options = {
    fileName: sheetTitle,
    sheetName: "품목 검색"
  };
  $c.data.downloadGridViewExcel($p, gr_registBudget, options);
};
scwin.gr_registBudget_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var row = rowIndex;
  var colid = columnId;
  var rtnValues = new Array();
  let rt;
  if (scwin.gubun == 0) {
    rtnValues.kcgCd = ds_registBudget.getCellData(row, "kcgCd");
    rtnValues.kcgNm = ds_registBudget.getCellData(row, "kcgNm");
    rtnValues.repKcgCd = dma_condition.get("repKcgCd");
    rt = [rtnValues.kcgCd, rtnValues.kcgNm, rtnValues.repKcgCd];
  } else if (scwin.gubun == 1) {
    rtnValues.upperCommCd = ds_registBudget.getCellData(row, "upperCommCd");
    rtnValues.upperCommNm = ds_registBudget.getCellData(row, "upperCommNm");
    rtnValues.repKcgCd = dma_condition.get("repKcgCd");
    rt = [rtnValues.upperCommCd, rtnValues.upperCommNm, rtnValues.repKcgCd];
  } else if (scwin.gubun == 2) {
    rtnValues.commCd = ds_registBudget.getCellData(row, "commCd");
    rtnValues.commNm = ds_registBudget.getCellData(row, "commNm");
    rtnValues.repKcgCd = dma_condition.get("repKcgCd");
    rt = [rtnValues.commCd, rtnValues.commNm, rtnValues.repKcgCd];
  }
  $c.win.closePopup($p, rt);
};
scwin.em_commCd_onkeyup = function (e) {
  em_commCd.setValue(em_commCd.getValue().toUpperCase());
};
scwin.em_commCd_Nm_onkeydown = async function (e) {
  if (e.keyCode == 13) {
    this.blur();
    scwin.sleep(30).then(async function () {
      await scwin.f_Retrieve();
    });
  }
};
scwin.sleep = function (ms) {
  return new Promise(r => setTimeout(r, ms));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'width:120px;',id:'lc_repKcgCd',class:'',allOption:'',chooseOption:'',ref:'data:dma_condition.repKcgCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width:120px;',id:'em_commCd',class:'',objType:'Data',maxlength:'8',displayFormat:'########',ref:'data:dma_condition.commCd',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.em_commCd_onkeyup','ev:onkeydown':'scwin.em_commCd_Nm_onkeydown'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_commNm',class:'',objType:'Data',ref:'data:dma_condition.commNm','ev:onkeydown':'scwin.em_commCd_Nm_onkeydown'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger5',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger6',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품목 검색 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_ExcelDown',gridID:'gr_registBudget',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_registBudget',id:'gr_registBudget',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_registBudget_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'품명코드',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'품명이름',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'품목코드',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'품목이름',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'화종코드',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'화종이름',width:'120',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCommCd',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCommNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgCd',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'totalRows_gr',style:'display:none;'},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})