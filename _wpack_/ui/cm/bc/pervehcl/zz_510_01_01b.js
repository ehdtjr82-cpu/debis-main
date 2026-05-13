/*amd /ui/cm/bc/pervehcl/zz_510_01_01b.xml 11113 1293176853a9da8efc6dfd5e96b4167bd029835435ba68a3a47ded0d9bfb8ccc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'stdYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fuelKndCd',name:'fuelKndCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fuelKndCd',name:'연료종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fuelUpr',name:'단가',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.pervehcl.RetrievePerVehclUprCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.pervehcl.SavePerVehclUprCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.userInfo = $c.data.getMemInfo($p);
scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ica_stdYm.setValue(scwin.strCurDate);
  const codeOptions = [{
    grpCd: "ZZ604",
    compID: "lc_fuelKndCd,gr_master:fuelKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableObjects($p, [btn_Save, btn_AddRow, btn_DelRow, btn_UndoRow]);
};
scwin.ondataload = function () {};

// 조회
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfValidate($p, [ica_stdYm])) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

// 저장
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 	
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let validArry = [{
    id: "stdYm",
    name: "기준년월",
    mandatory: true
  }, {
    id: "fuelKndCd",
    name: "연료종류",
    mandatory: true
  }];
  let gridName = "개인차량유류단가List";
  if (!(await $c.gus.cfValidateGrid($p, gr_master, null, null, validArry, gridName))) {
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_master])) {
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

// 행추가.
scwin.f_AddRow = function () {
  let row = ds_master.insertRow();
  gr_master.setFocusedCell(row, 0);
  ds_master.setCellData(row, "stdYm", ica_stdYm.getValue());
};

// 행삭제.
scwin.f_DeleteRow = function () {
  let row = ds_master.getRowPosition();
  $c.data.deleteRow($p, ds_master);
  gr_master.setFocusedCell(row, 0);
};

// 행 취소.
scwin.f_Undo = function () {
  $c.data.undoRow($p, ds_master, "Y");
};
scwin.f_downExcelSheet = function () {
  let sheetTitle = "개인차량유류단가List";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_master.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  // ds_master.setFocusedCell(0, 0);
  $c.gus.cfEnableObjects($p, [btn_Save, btn_AddRow, btn_DelRow, btn_UndoRow]);
  gr_master.setFocusedCell(0, 0);
};
scwin.gr_master_onrowindexchange = function (rowIndex, oldRow) {
  if ("C" == ds_master.getRowStatus(rowIndex)) {
    gr_master.setCellReadOnly(rowIndex, "stdYm", false);
    gr_master.setCellReadOnly(rowIndex, "fuelKndCd", false);
  } else {
    gr_master.setCellReadOnly(rowIndex, "stdYm", true);
    gr_master.setCellReadOnly(rowIndex, "fuelKndCd", true);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',style:'',pickerType:'dynamic',ref:'data:dma_search.stdYm',delimiter:'/'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연료종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fuelKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.fuelKndCd',chooseOptionLabel:'전체',visibleRowNum:'10'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 개인차량유류단가List ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_master',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true','ev:onviewchange':'scwin.gr_master_onviewchange','ev:onrowindexchange':'scwin.gr_master_onrowindexchange',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'기준년월',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'연료종류',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'단가',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'calendar',style:'',value:'',width:'120',mandatory:'true',displayFormat:'yyyy/MM',dataType:'date',calendarValueType:'yearMonth',pickerType:'dynamic'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fuelKndCd',inputType:'select',style:'',value:'',width:'120',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fuelUpr',inputType:'text',style:'',value:'',width:'140',dataType:'number',displayFormat:'#,###,###,##0.##',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',style:'',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_master',btnRowAddObj:'btn_AddRow',btnRowDelObj:'btn_DelRow',btnCancelObj:'btn_UndoRow',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_Undo'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})