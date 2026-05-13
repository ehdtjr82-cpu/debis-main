/*amd /ui/cm/mg/mg_managerb.xml 15657 efc25ae30d3c932b315fc081d5bf2756a616ad9a7d2bb81eaf9dca40d3718c82 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgCd',name:'종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgNm',name:'메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_pageIN'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'targetRow',name:'targetRow',dataType:'number',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'numOfRowPerPage',name:'numOfRowPerPage',dataType:'number',defaultValue:'10'}},{T:1,N:'w2:key',A:{id:'numOfIndexPerPage',name:'numOfIndexPerPage',dataType:'number'}},{T:1,N:'w2:key',A:{id:'currentPage',name:'currentPage',dataType:'number'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'totalPage',dataType:'number'}},{T:1,N:'w2:key',A:{id:'totalRecords',name:'totalRecords',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_msg',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgCd',name:'msgCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgCdType',name:'msgCdType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgNm',name:'msgNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mesursItm',name:'mesursItm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_pageOUT',style:'',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'',id:'targetRow',name:'targetRow'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'',id:'numOfRowPerPage',name:'numOfRowPerPage'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numOfIndexPerPage',name:'numOfIndexPerPage'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currentPage',name:'currentPage'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totalPage',name:'totalPage'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totalRecords',name:'totalRecords'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMsgPage',action:'/cm.mg.RetrieveMessageCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_pageIN","key":"IN_DS1"},{"id":"dma_view_cond","key":"IN_DS2"}, {"id":"ds_pageOUT","key":"OUT_DS1"},{"id":"ds_msg","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_msg","key":"OUT_DS2"},{"id":"dma_page","key":"OUT_DS1"},{"id":"ds_pageOUT","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveMsgPage_submitdone','ev:submiterror':'scwin.sbm_retrieveMsgPage_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMsg',action:'/cm.mg.CUDMessageCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_msg","key":"IN_DS1"},{"id":"dma_view_cond","key":"IN_DS21"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMsg_submitdone','ev:submiterror':'scwin.sbm_saveMsg_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getSubSysCodeList",
    compID: "lc_commonCode"
  }];
  $c.data.setGauceUtil($p, param, scwin.callbackInit);
};
scwin.callbackInit = function () {
  dma_view_cond.set("sysCd", "AS");
  dma_view_cond.set("msgCd", "%");
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};

//-------------------------------------------------------------------------
// displayFormatter 처리
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  scwin.moveToPage(''); // 현재 페이지 검색      
};
scwin.f_addRow = function () {
  var rowIndexC = ds_msg.getTotalRow();
  ds_msg.insertRow(rowIndexC);
  gr_msg.setFocusedCell(rowIndexC, 0);
};
scwin.f_delRow = function () {
  // $c.data.deleteRow(ds_msg);
  let row = ds_msg.getRowPosition();
  if (ds_msg.getRowStatus(row) == "C") {
    ds_msg.removeRow(row);
  } else {
    ds_msg.deleteRow(row);
  }
  gr_msg.setFocusedCell(row, "msgCdType", true);
};
scwin.f_cancelRow = function () {
  $c.data.undoRow($p, ds_msg, "Y");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 	
  if (ds_msg.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let confirmmsg = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmmsg) {
    // var arrJson = { sysCd: lc_commonCode.getValue()};
    // $c.sbm.execute(sbm_saveMsg, arrJson);
    $c.sbm.execute($p, sbm_saveMsg);
  }
};

// 페이지 이동
scwin.moveToPage = function (targetRow) {
  // cfSetTargetRow(oGDS_page, targetRow) ;  
  // oGDS_view_cond.UseChangeInfo = false ; // 조회조건으로 넘기기위하여 임의로 모든 Data를 Insert Status로 변경
  // tr_retrieveMsgPage.Action = "/cm.mg.RetrieveMessageCMD.do";    
  // tr_retrieveMsgPage.Post();
  $c.sbm.execute($p, sbm_retrieveMsgPage);
};
scwin.sbm_retrieveMsgPage_submitdone = function (e) {
  var rowCnt = ds_msg.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  gr_msg_spanTotal.setLabel(rowCnt);
  gr_msg.setFocusedCell(0, 0);
  let totrowcnt = ds_pageOUT.getCellData(0, "totalRecords");
  scwin.setPageListCount(totrowcnt); //페이징 갯수 세팅
};

//페이징 갯수 세팅
scwin.setPageListCount = function (totrowcnt) {
  // let cnt = Number(totrowcnt) / ds_pageOUT.getCellData(0, "totalPage");
  let cnt = 1;
  if (ds_pageOUT.getCellData(0, "totalRecords") > 10) {
    //cnt = Number(totrowcnt) / ds_pageOUT.getCellData(0, "totalPage");
    cnt = Number(totrowcnt) / 10;
  }
  cnt = Math.ceil(cnt);
  console.log(cnt);
  if (pgl_msgpageList.getCount() !== cnt) {
    pgl_msgpageList.setCount(cnt);
  }
};
scwin.pgl_msgpageList_onclick = function (index) {
  dma_pageIN.set("targetRow", (index - 1) * 10 + 1);
  $c.sbm.execute($p, sbm_retrieveMsgPage);
};
scwin.sbm_retrieveMsgPage_submiterror = function (e) {};
scwin.sbm_saveMsg_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_saveMsg_submiterror = function (e) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시스템 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'lc_commonCode',mandatory:'true',ref:'data:dma_view_cond.sysCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',sortOption:'value',sortMethod:'ascending'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'lc_msgTypeCode',mandatory:'true',ref:'data:dma_view_cond.msgCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',sortOption:'value',sortMethod:'ascending'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'%'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정보'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메시지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msgPartNm',style:'width: 150px;',ref:'data:dma_view_cond.msgNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_msg',focusMode:'row',id:'gr_msg',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'메시지',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'조치사항',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'등록자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'등록일',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'수정자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'수정일',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'msgCdType',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정보'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'msgCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msgNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mesursItm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'80',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'80',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'',width:'80',dataType:'date',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_msg_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',id:'udc_gr1btn',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancelRow'}}]}]},{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#',id:'pgl_msgpageList',pageSize:'10',pagingType:'0',style:'','ev:onclick':'scwin.pgl_msgpageList_onclick'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})