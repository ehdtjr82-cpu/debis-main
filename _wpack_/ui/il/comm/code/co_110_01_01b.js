/*amd /ui/il/comm/code/co_110_01_01b.xml 17860 b535d8c745d285490b5653137336bc00a2c34fdf8266c444fa0a0d89eaad9b52 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_menuList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'Customer'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'Customer'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'Address1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'Address2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'Address3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'Address4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'Tel'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'CRN'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mymenuList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'seq',name:'seq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userId',name:'사용자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'customerGrpNm',name:'즐겨찾기그룹명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'customerCd',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'customerNm',name:'거래처명'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_menuList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_menuList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_menuList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mymenuList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mymenuList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mymenuList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.clnt.clntmgnt.SaveMyCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_mymenuList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// function name : scwin.onpageload
// function desc : 화면로딩시 
//-------------------------------------------------------------------------  
scwin.onpageload = function () {
  // 세션 정보
  scwin.sessionInfo = $c.data.getMemInfo($p);
  scwin.userId = scwin.sessionInfo.userId;
  scwin.userType = scwin.sessionInfo.userType;
  scwin.userHomeClsCd = scwin.sessionInfo.userHomeClsCd;
  scwin.coCd = scwin.sessionInfo.coCd;
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// function name : scwin.f_Retrieve
// function desc : 등록한 거래처 조회 
//-------------------------------------------------------------------------  
scwin.f_Retrieve = function () {
  sbm_mymenuList.action = "/cm.bc.clnt.clntmgnt.RetrieveMyCustomerListCMD.do?userId=" + scwin.userId;
  $c.sbm.execute($p, sbm_mymenuList);
};

//-------------------------------------------------------------------------
// function name : scwin.sbm_mymenuList_submitdone
// function desc : 등록한 거래처 조회 완료
//-------------------------------------------------------------------------  
scwin.sbm_mymenuList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_mymenuList.setFocusedCell(0, "customerGrpNm", false);
  tbx_totalMyMenuRows.setValue(ds_mymenuList.getRowCount());
};

//-------------------------------------------------------------------------
// function name : scwin.f_RetrieveEngClntInfo
// function desc : 거래처 조회
//-------------------------------------------------------------------------  
scwin.f_RetrieveEngClntInfo = function () {
  if (ed_Condition1.getValue() == "" && ed_Condition2.getValue() == "") {
    $c.win.alert($p, "전체검색이 허용되지 않았습니다.<br/><br/>검색어를 입력하세요..");
    ed_Condition2.focus();
    return;
  }
  sbm_menuList.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ilCommonEBC" + "&queryId=retrieveEngClntInfo3" + "&param1=" + ed_Condition1.getValue() + "&param2=" + ed_Condition2.getValue();
  $c.sbm.execute($p, sbm_menuList);
};

//-------------------------------------------------------------------------
// function name : scwin.f_Retrieve
// function desc : 거래처 조회 완료
//-------------------------------------------------------------------------  
scwin.sbm_menuList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_menuList.setFocusedCell(0, "col2", false);
  tbx_totalMenuRows.setValue(ds_menuList.getRowCount());
};

//-------------------------------------------------------------------------
// function name : scwin.gr_mymenuList_addrow
// function desc : 거래처 그리드 하단 행추가 버튼 이벤트
//-------------------------------------------------------------------------  
scwin.gr_mymenuList_addrow = function (e) {
  console.log("[co_110_01_01b scwin.gr_mymenuList_addrow]");
  let rows = ds_menuList.getMatchedIndex("col1", "1");
  let row;
  if (rows.length == 0) {
    $c.win.alert($p, "거래처를 먼저 선택해주세요.");
    return;
  }
  for (let i = 0; i < rows.length; i++) {
    ds_mymenuList.insertRow();
    row = ds_mymenuList.getRowCount() - 1;
    ds_mymenuList.setCellData(row, "userId", scwin.userId);
    ds_mymenuList.setCellData(row, "customerCd", ds_menuList.getCellData(rows[i], "col2"));
    ds_mymenuList.setCellData(row, "customerNm", ds_menuList.getCellData(rows[i], "col3"));
  }
  tbx_totalMyMenuRows.setValue(ds_mymenuList.getRowCount());
};

//-------------------------------------------------------------------------
// function name : scwin.gr_mymenuList_deleterow
// function desc : 즐겨찾기 그리드 하단 행삭제 버튼 이벤트
//-------------------------------------------------------------------------  
scwin.gr_mymenuList_deleterow = function (e) {
  console.log("[co_110_01_01b scwin.gr_mymenuList_deleterow]");
  let rowStatus = ds_mymenuList.getRowStatus(ds_mymenuList.getRowPosition());
  if (rowStatus == "C") {
    ds_mymenuList.removeRow(ds_mymenuList.getRowPosition());
  } else {
    ds_mymenuList.deleteRow(ds_mymenuList.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// function name : scwin.gr_mymenuList_cancelrow
// function desc : 즐겨찾기 그리드 하단 취소 버튼 이벤트
//-------------------------------------------------------------------------  
scwin.gr_mymenuList_cancelrow = function (e) {
  $c.data.undoAll($p, ds_mymenuList);
};

//-------------------------------------------------------------------------
// function name : scwin.f_Save
// function desc : 저장 버튼 onclick
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_mymenuList.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["거래처"]);
    return;
  }
  let validArry = [{
    id: "customerGrpNm",
    name: "즐겨찾기그룹명",
    mandatory: true
  }];
  let gridName = "즐겨찾기";
  if (await $c.gus.cfValidateGrid($p, gr_mymenuList, null, null, validArry, gridName)) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// function name : scwin.sbm_save_submitdone
// function desc : 저장 성공
//-------------------------------------------------------------------------  
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// function name : scwin.btn_fieldClear_onclick
// function desc : 검색 조건 clear
//-------------------------------------------------------------------------  
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_Condition2.focus();
};

//-------------------------------------------------------------------------
// function name : scwin.ed_Condition_onkeyup
// function desc : 거래처코드/거래처명 onkeyup
//-------------------------------------------------------------------------  
scwin.ed_Condition_onkeyup = function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    scwin.f_RetrieveEngClntInfo();
  }
};

//-------------------------------------------------------------------------
// function name : scwin.btn_close_onclick
// function desc : 닫기 버튼 onclick
//-------------------------------------------------------------------------  
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_Condition1',placeholder:'',style:'','ev:onkeyup':'scwin.ed_Condition_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer Name',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_Condition2',placeholder:'',style:'','ev:onkeyup':'scwin.ed_Condition_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_RetrieveEngClntInfo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_menuList',id:'gr_menuList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'chk',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'Customer Code',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'Customer Name',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Address1',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'Address2',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'Address3',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'Address4',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'Tel',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'CRN',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'checkbox',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col6',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col7',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col8',inputType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col10',inputType:'text',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalMenuRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'N',style:'',btnRowAddYn:'Y',btnRowDelYn:'N',rowAddFunction:'scwin.gr_mymenuList_addrow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'즐겨찾기',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_mymenuList',id:'gr_mymenuList',style:'',visibleRowNum:'18',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'그룹명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'customerGrpNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'false',mandatory:'true',maxByteLength:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customerCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customerNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalMyMenuRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',style:'',btnCancelYn:'Y',btnRowAddYn:'N',btnRowDelYn:'Y',rowDelFunction:'scwin.gr_mymenuList_deleterow',cancelFunction:'scwin.gr_mymenuList_cancelrow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Save',style:'',id:'btn_save',type:'button',class:'btn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})