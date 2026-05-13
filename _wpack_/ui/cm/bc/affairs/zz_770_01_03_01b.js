/*amd /ui/cm/bc/affairs/zz_770_01_03_01b.xml 13735 d7e41f621c0cc2206e9957d3aaeebc7ba166539918c61aeaad8233409834ff65 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'managerCd',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'logisticCenter',name:'물류센터'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'담당자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pstNm',name:'직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userMpNo',name:'연락처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'email',name:'메일주소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'logisticCenter',name:'logisticCenter'}},{T:1,N:'w2:key',A:{dataType:'text',id:'useYn',name:'useYn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userNm',name:'userNm'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.affairs.RetrieveCenterManagerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.affairs.SaveCenterManagerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ784",
    compID: "lc_logisticCenter, gr_master:logisticCenter"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function (e) {
  lc_useYn.setValue("1");
};

// 조회
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

//행추가
scwin.f_AddRow = function () {
  var rowIndex = ds_master.getTotalRow();
  ds_master.insertRow(rowIndex);
  ds_master.setCellData(rowIndex, "useYn", "1");
  ds_master.setCellData(rowIndex, "logisticCenter", lc_logisticCenter.getValue());
  gr_master.setFocusedCell(rowIndex, 0);
};

//  행삭제
scwin.f_DeleteRow = function () {
  $c.data.deleteRow($p, ds_master);
  gr_master.setFocusedCell(ds_master.getRowPosition(), 0);
};

// 취소
scwin.f_UndoRow = function () {
  // ds_master.Undo(ds_master.RowPosition);
  $c.data.undoRow($p, ds_master, "Y");
};

//저장
scwin.f_Save = async function () {
  // 필수입력사항 확인
  // let ret = await $c.gus.cfValidate([gr_master])
  // if (!ret) {
  //     return;
  // }

  // 변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let validArry = [{
    id: "logisticCenter",
    name: "물류센터",
    mandatory: true
  }, {
    id: "userNm",
    name: "담당자",
    mandatory: true
  }, {
    id: "userMpNo",
    name: "연락처",
    mandatory: true
  }, {
    id: "email",
    name: "메일주소",
    mandatory: true
  }];
  let gridName = "경조용품 물류센터 담당자";
  if (!(await $c.gus.cfValidateGrid($p, gr_master, null, null, validArry, gridName))) {
    return false;
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    $c.sbm.execute($p, sbm_save);
  }
};

// 그리드 데이터 엑셀로 다운
scwin.f_runExcel = function () {
  let sheetTitle = "경조용품 물류센터 담당자";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
};
scwin.sbm_save_submitdone = function (e) {
  scwin.f_Retrieve();
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_master.getRowCount();
  spanTotal.setLabel(rowCnt);
  gr_master.setFocusedCell(0, 0);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'물류센터 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_logisticCenter',mandatory:'true',ref:'data:dma_Query.logisticCenter',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_useYn',mandatory:'true',ref:'data:dma_Query.useYn',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input2',ref:'data:dma_Query.userNm',style:'width: 150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'경조용품 물류센터 담당자 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownFn:'scwin.f_runExcel',id:'udc_gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',rowStatusVisible:'true',rowStatusWidth:'30',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'물류센터',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'담당자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'직위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'연락처',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'메일주소',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'사용여부',width:'60'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'managerCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logisticCenter',inputType:'select',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100',mandatory:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pstNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userMpNo',inputType:'text',style:'',value:'',width:'100',mandatory:'true',dataType:'text',displayFormat:'###-####-####',allowChar:'0-9',maxLength:'11'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'email',inputType:'text',style:'',value:'',width:'130',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'select',style:'',value:'',width:'60',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'N',cancelFunction:'scwin.f_UndoRow',rowDelFunction:'scwin.f_DeleteRow ',rowAddFunction:'scwin.f_AddRow',gridID:'gr_master',rowAddUserAuth:'C',btnRowAddObj:'btn_AddRow',id:'udc_bottomGrdBtn'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'장의용품 신청시 등록된 물류센터 담당자에게 신청내역이 문자와 메일로 전송됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})