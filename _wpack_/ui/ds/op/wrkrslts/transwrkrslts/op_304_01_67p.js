/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_67p.xml 11040 861e445abce45fa50773171607fe01838afd3556d67768e9504ffd065cac21b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'srchWrkStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rateList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strTrf',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'endDt',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveStorageRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCond","key":"IN_DS1"},{"id":"ds_rateList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_rateList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.transwrkrslts.SaveRetrieveStorageRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_rateList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFullDate = WebSquare.date.getCurrentServerDate(); // 현재년월일을 구한다.
scwin.strDate = scwin.strFullDate.substring(0, 8);
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "BRL07",
    compID: "acb_srchLobranCd,gr_InIntendInformation:lobranCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};
scwin.setCommonCodeCallBack = function () {
  acb_srchLobranCd.addItem("전체", "", null, 0);
  acb_srchLobranCd.setSelectedIndex(0);
};
scwin.onUdcCompleted = function () {
  ed_srchAdptDt.setValue(scwin.strDate);
};
scwin.f_Retrieve = function () {
  if ($c.gus.cfValidate($p, tb_searchCondition)) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_Save = async function () {
  //요율목록의  변경한 데이터가 있는지 체크한다. 
  if (ds_rateList.getModifiedIndex().length == 0 || ds_rateList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("목록")); //변경된 정보가 없습니다.
    return;
  }

  // 필수 입력사항을 체크    
  if (await scwin.f_validChk()) {
    if (await $c.win.confirm($p, "저장하시겠습니까?")) {
      //MSG_CM_CRM_001, new Array("요율목록")
      $c.sbm.execute($p, sbm_save);
    }
  }
};

// 저장전 validation check
scwin.f_validChk = async function () {
  //필수 입력사항을 체크
  if (await $c.gus.cfValidate($p, [gr_InIntendInformation], null, true)) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_close = function () {
  let args = {
    close: "close"
  };
  $c.win.closePopup($p, args);
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function () {
  let rowIndex = ds_rateList.insertRow();
  ds_rateList.setCellData(rowIndex, "endDt", "99991231");
  ds_rateList.setRowPosition(rowIndex);
  gr_InIntendInformation.setFocusedCell(rowIndex, 0, true);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_rateList.getRowCount() > 0) {
    // ds_rateList.setRowPosition(0);
    gr_InIntendInformation.setFocusedCell(0, 0);
    totalRows.setValue(ds_rateList.getRowCount());
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_srchAdptDt',style:'',ref:'data:dma_searchCond.srchWrkStDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'창고',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_srchLobranCd',search:'start',style:'',submenuSize:'auto',ref:'data:dma_searchCond.lobranCd',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:' btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요율목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_rateList',id:'gr_InIntendInformation',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'40',validExp:'adptDt:적용일:yes:date=YYYYMMDD,endDt:종료일:yes:,lobranCd:창고:yes'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'적용일',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'창고',width:'150',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매출단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'고정보관비',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'종료일자',width:'100',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'lobranCd',inputType:'select',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strTrf',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0.#0',applyFormat:'all',dataType:'float',defaultValue:'0.00',autoDecimalPoint:'false',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'strAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'float',defaultValue:'0',allowChar:'0-9',autoDecimalPoint:'false',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endDt',inputType:'calendar',style:'',value:'',width:'100',editFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_InIntendInformation',id:'udc_bottomGrdBtn1',rowAddFunction:'scwin.f_AddRow',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})