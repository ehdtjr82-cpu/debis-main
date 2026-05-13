/*amd /ui/cm/bc/comnmgnt/emailmgnt/zz_110_01_01b.xml 24914 01611ef761958d5274b9f81b22e534835950db5ebc00e74e2936a99811edc3f3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'typeCode',name:'lc_typeCode',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chargerEmpNo',name:'ed_chargerEmpNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'managerEmpNo',name:'ed_managerEmpNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chargerAcctDeptCd',name:'ed_chargerAcctDeptCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'typeCode',name:'typeCode',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerEmpNo',name:'chargerEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerEmpNm',name:'chargerEmpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerEmail',name:'chargerEmail',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerAcctDeptCd',name:'chargerAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerAcctDeptNm',name:'chargerAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerUseYn',name:'chargerUseYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargerEmpStsCd',name:'chargerEmpStsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preChargerEmpNo',name:'preChargerEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerEmpNo',name:'managerEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerEmpNm',name:'managerEmpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerEmail',name:'managerEmail',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerAcctDeptCd',name:'managerAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerAcctDeptNm',name:'managerAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerUseYn',name:'managerUseYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerEmpStsCd',name:'managerEmpStsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preManagerEmpNo',name:'preManagerEmpNo',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.comnmgnt.emailmgnt.RetrieveEmailMgntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.comnmgnt.emailmgnt.SaveEmailMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ110",
    compID: "lc_typeCode, gr_result: typeCode"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};

//-------------------------------------------------------------------------
// Header 초기화 
//-------------------------------------------------------------------------

// displayFormatter 처리
scwin.UseYn = function (data) {
  return $c.gus.decode($p, data, "1", "사용", "미사용");
};
scwin.EmpStsCd = function (data) {
  return $c.gus.decode($p, data, "H2101", "재직", "H2103", "휴직", "H2104", "퇴직");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //alert("lc_chargerUseYn.BindColVal >>> " + lc_chargerUseYn.BindColVal);
  // tr_search.Post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("===========scwin.f_Save==========");
  //변경한 데이터가 있는지 체크한다. 	
  if (ds_result.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    j = i + 1;
    var irow = ds_result.getRowJSON(i);
    if ("" == irow.typeCode) {
      await $c.win.alert($p, j + "번째 행 입력 오류\n\n" + "저장 시 메일구분은 필수입력 입니다.");
      return;
    }
    if ("" == irow.chargerEmpNo) {
      await $c.win.alert($p, j + "번째 행 입력 오류\n\n" + "저장 시 담당자 정보는 필수입력 입니다.");
      return;
    }
    if ("" == irow.managerEmpNo) {
      await $c.win.alert($p, j + "번째 행 입력 오류\n\n" + "저장 시 관리자 정보는 필수입력 입니다.");
      return;
    }
    if (irow.managerEmpNo == irow.chargerEmpNo) {
      await $c.win.alert($p, j + "번째 행 입력 오류\n\n" + "채권 담당자와 관리자는 같은 사람으로 등록 불가능 합니다.");
      return;
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 팝업1
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      var param = "";
      var selectID = 'retrieveEmpInfo2';
      await udc_chargerEmpNoCond.cfCommonPopUp(scwin.udc_chargerEmpNoCond_callback // XML상의 SELECT ID
      , ed_chargerEmpNoCond.getValue(), ed_chargerEmpNmCond.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      var param = "";
      var selectID = 'retrieveEmpInfo2';
      await udc_managerEmpNoCond.cfCommonPopUp(scwin.udc_managerEmpNoCond_callback // XML상의 SELECT ID	
      , ed_managerEmpNoCond.getValue(), ed_managerEmpNmCond.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      var param = "";
      var selectID = 'retrieveAcctDeptCdInfo';
      await udc_chargerAcctDeptCdCond.cfCommonPopUp(scwin.udc_chargerAcctDeptCdCond_callback // XML상의 SELECT ID	
      , ed_chargerAcctDeptCdCond.getValue(), ed_chargerAcctDeptNmCond.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업2
//-------------------------------------------------------------------------
scwin.f_openUserPopUp1 = async function () {
  // var rtnList = new Array();
  // rtnList = udc_.cfCommonPopUp("retrieveEmpInfo2",'','',"T",null,null,null,"3,4,5,6,7,8,9,10",null,null,null,null,null,null,null,null);
  udc_comCode_Grid1.setSelectId("retrieveEmpInfo2");
  await udc_comCode_Grid1.cfCommonPopUp(scwin.udc_comCode_Grid1_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null);
};
scwin.udc_comCode_Grid1_callBackFunc = function (ret) {
  let row = gr_result.getFocusedRowIndex();
  if (ret != null && ret[0] != 'N/A') {
    ds_result.setCellData(row, "chargerEmpNo", ret[0]);
    ds_result.setCellData(row, "chargerEmpNm", ret[1]);
    ds_result.setCellData(row, "chargerEmail", ret[4]);
    ds_result.setCellData(row, "chargerUseYn", ret[5]);
    ds_result.setCellData(row, "chargerEmpStsCd", ret[6]);
  }
};

//-------------------------------------------------------------------------
// 팝업3
//-------------------------------------------------------------------------
scwin.f_openUserPopUp2 = async function () {
  // var rtnList = new Array();
  // rtnList = udc_.cfCommonPopUp("retrieveEmpInfo2",'','',"T",null,null,null,"3,4,5,6,7,8,9,10",null,null,null,null,null,null,null,null);
  udc_comCode_Grid2.setSelectId("retrieveEmpInfo2");
  await udc_comCode_Grid2.cfCommonPopUp(scwin.udc_comCode_Grid2_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null);
};
scwin.udc_comCode_Grid2_callBackFunc = function (ret) {
  let row = gr_result.getFocusedRowIndex();
  if (ret != null && ret[0] != 'N/A') {
    ds_result.setCellData(row, "managerEmpNo", ret[0]);
    ds_result.setCellData(row, "managerEmpNm", ret[1]);
    ds_result.setCellData(row, "managerEmail", ret[4]);
    ds_result.setCellData(row, "managerUseYn", ret[5]);
    ds_result.setCellData(row, "managerEmpStsCd", ret[6]);
  }
};

//Pop-up UDC
scwin.udc_chargerEmpNoCond_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
scwin.udc_chargerEmpNoCond_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
scwin.udc_managerEmpNoCond_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('2', 'T');
};
scwin.udc_managerEmpNoCond_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'T');
};
scwin.udc_chargerAcctDeptCdCond_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('3', 'T');
};
scwin.udc_chargerAcctDeptCdCond_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'T');
};
scwin.udc_chargerEmpNoCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_chargerEmpNoCond.setValue(rtnList[0]);
      ed_chargerEmpNoCond.options.hidVal = rtnList[0];
      ed_chargerEmpNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_chargerEmpNoCond.setValue("");
    ed_chargerEmpNoCond.options.hidVal = "";
    ed_chargerEmpNmCond.setValue("");
  }
};
scwin.udc_managerEmpNoCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_managerEmpNoCond.setValue(rtnList[0]);
      ed_managerEmpNoCond.options.hidVal = rtnList[0];
      ed_managerEmpNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_managerEmpNoCond.setValue("");
    ed_managerEmpNoCond.options.hidVal = "";
    ed_managerEmpNmCond.setValue("");
  }
};
scwin.udc_chargerAcctDeptCdCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_chargerAcctDeptCdCond.setValue(rtnList[0]);
      ed_chargerAcctDeptCdCond.options.hidVal = rtnList[0];
      ed_chargerAcctDeptNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_chargerAcctDeptCdCond.setValue("");
    ed_chargerAcctDeptCdCond.options.hidVal = "";
    ed_chargerAcctDeptNmCond.setValue("");
  }
};
scwin.f_toExcel = function () {
  let sheetTitle = "e메일전송관리";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  gr_result.setColumnVisible("chargerEmpNmPopup", false);
  gr_result.setColumnVisible("managerEmpNmPopup", false);
  $c.data.downloadGridViewExcel($p, gr_result, options);
  gr_result.setColumnVisible("chargerEmpNmPopup", true);
  gr_result.setColumnVisible("managerEmpNmPopup", true);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_result.getRowCount();
  gr_result_spanTotal.setLabel(rowCnt);
  $c.gus.cfEnableObjects($p, [btn_save]);
};
scwin.sbm_search_submiterror = function (e) {};
scwin.gr_result_ontextimageclick = function (rowIndex, columnIndex) {
  switch (gr_result.getColumnID(columnIndex)) {
    case "chargerEmpNmPopup":
      scwin.f_openUserPopUp1();
      break;
    case "managerEmpNmPopup":
      scwin.f_openUserPopUp2();
      break;
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_result.removeAll();
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송메일종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'true',class:'',editType:'select',id:'lc_typeCode',mandatory:'true',ref:'data:dma_search.typeCode',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionValue:'$blank',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_chargerEmpNoCond',code:'chargerEmpNo',codeId:'ed_chargerEmpNoCond',editTypeName:'focus',id:'udc_chargerEmpNoCond',maxlengthCode:'6',maxlengthName:'30',name:'chargerEmpNm',nameId:'ed_chargerEmpNmCond',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',selectID:'retrieveEmpInfo2',style:'',validExpCode:'담당자:no','ev:onblurCodeEvent':'scwin.udc_chargerEmpNoCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_chargerEmpNoCond_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_chargerAcctDeptCdCond',code:'chargerAcctDeptCd',codeId:'ed_chargerAcctDeptCdCond',editTypeName:'focus',id:'udc_chargerAcctDeptCdCond',maxlengthCode:'5',maxlengthName:'30',name:'chargerAcctDeptNm',nameId:'ed_chargerAcctDeptNmCond',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'담당부서:yes','ev:onblurCodeEvent':'scwin.udc_chargerAcctDeptCdCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_chargerAcctDeptCdCond_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_managerEmpNoCond',code:'managerEmpNo',codeId:'ed_managerEmpNoCond',editTypeName:'focus',id:'udc_managerEmpNoCond',maxlengthCode:'6',maxlengthName:'30',name:'managerEmpNm',nameId:'ed_managerEmpNmCond',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',selectID:'retrieveEmpInfo2',style:'',validExpCode:'관리자:no','ev:onblurCodeEvent':'scwin.udc_managerEmpNoCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_managerEmpNoCond_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' e메일전송관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_toExcel',gridID:'gr_result',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_result',focusMode:'row',id:'gr_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true','ev:ontextimageclick':'scwin.gr_result_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'메일구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'부서코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column44',value:'부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'550',inputType:'text',style:'',id:'column42',value:'담당자',displayMode:'label',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'550',inputType:'text',style:'',id:'column36',value:'관리자',displayMode:'label',colSpan:'7',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'이름',displayMode:'label',class:'txt-red',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column68',value:'e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'DEBIS</br>사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'재직상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column76',value:'이름',displayMode:'label',class:'txt-red',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column52',value:'e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'DEBIS</br>사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'재직상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'typeCode',value:'',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chargerAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'chargerAcctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'preChargerEmpNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chargerEmpNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'chargerEmpNm',value:'',displayMode:'label',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'25',inputType:'textImage',style:'',id:'chargerEmpNmPopup',value:'',displayMode:'label',textAlign:'left',readOnly:'true',viewType:'icon'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'chargerEmail',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'tex',style:'',id:'chargerUseYn',value:'',displayMode:'label',displayFormatter:'scwin.UseYn'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chargerEmpStsCd',value:'',displayMode:'label',displayFormatter:'scwin.EmpStsCd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'preManagerEmpNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'managerEmpNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'managerEmpNm',value:'',displayMode:'label',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'25',inputType:'textImage',style:'',id:'managerEmpNmPopup',value:'',displayMode:'label',textAlign:'left',readOnly:'true',viewType:'icon'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'managerEmail',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'managerUseYn',value:'',displayMode:'label',displayFormatter:'scwin.UseYn'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'managerEmpStsCd',value:'',displayMode:'label',displayFormatter:'scwin.EmpStsCd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_result_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:' 초과채권의 경우: 담당자, 관리자의 DEBIS사용여부가 사용, 재직상태가 재직 인 경우에만 메일 발송. ',class:'txt-blue txt-dot'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display: none;',id:'udc_comCode_Grid1'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display: none;',id:'udc_comCode_Grid2'}}]}]}]}]}]})