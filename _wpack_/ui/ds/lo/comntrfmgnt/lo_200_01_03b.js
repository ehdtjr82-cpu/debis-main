/*amd /ui/ds/lo/comntrfmgnt/lo_200_01_03b.xml 23826 b8a2194080063eacaa82bb77a26436fa1ba4759ebd94dce032a786b2412af8a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo400',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항구명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo412',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'anucScItemCd',name:'고시할증항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anucTrfClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anucTrfClsNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo413',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'anucScItemCd',name:'고시할증항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'히든품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellitem',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'anucScItemCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveSurchargeItemEachAdoptionInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json, [{"id":"ds_search","key":"GAUCE"},{"id":"ds_lo412","key":"OUT_DS1"},{"id":"ds_lo413","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_lo412","key":"OUT_DS1"},{"id":"ds_lo413","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveSurchargeItemEachAdoptionInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_lo412","key":"IN_DS1"},{"action":"modified","id":"ds_lo413","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lo400',action:'/ds.lo.comntrfmgnt.RetrieveSurchargeItemListCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lo400","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lo400_submitdone','ev:submiterror':'scwin.sbm_lo400_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/매출요율/하역/할증항목별 적용대상관리

scwin.onpageload = function () {
  scwin.f_OnLoad();
};
scwin.MSG_LO_WRN_001 = "적용일자를 입력한 후 신규 고시요율을 생성하십시오.";
scwin.MSG_LO_ERR_001 = "변경된 사항이 없습니다.";
scwin.arrSelpchItemCd = new Array("0001", "0064", "0065", "0043", "0044", "0045", "0046", "0062", "0052");
scwin.curPos = 0;
scwin.lo412Pos = 0;
scwin.lo413Pos = 0;

//-------------------------------------------------------------------------
// scwin.name : scwin.f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  scwin.f_defaultValue();
  scwin.f_Retrieve();
  $c.gus.cfDisableObjects($p, [udc_addRow, btn_save]);
  $c.gus.cfEnableObjects($p, [btn_edit]);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  var i;
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_lo400);
  $c.gus.cfDisableObjects($p, [udc_addRow, btn_save]);
  $c.gus.cfEnableObjects($p, [btn_edit]);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_validChk
// scwin.desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = function () {
  return true;
};
//-------------------------------------------------------------------------
// scwin.name : scwin.f_Edit
// scwin.desc : 수정버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Edit = function () {
  //gr_lo412.setReadOnly("grid", false);

  gr_lo412.setReadOnly("column", "chk", false);
  gr_lo413.setReadOnly("grid", false);
  $c.gus.cfEnableObjects($p, [udc_addRow, btn_save]);
  $c.gus.cfDisableObjects($p, [btn_edit]);

  //gr_lo412.Editable = true;
  //gr_lo413.Editable = true;

  //$c.gus.cfEnableObjects([udc_addRow, btn_save]);
  //$c.gus.cfDisableObjects([btn_edit]);
};
//-------------------------------------------------------------------------
// scwin.name : scwin.f_Create
// scwin.desc : 저장
//-------------------------------------------------------------------------

scwin.f_Create = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_ReqFieldChk
// scwin.desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_lo412.getModifiedJSON().length == 0 && ds_lo413.getModifiedJSON().length == 0) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
    return false;
  }
  let validArry = [{
    id: "commCd",
    name: "제외품목",
    key: true,
    mandatory: true
  }];
  let gridName = "적용제외품목목록";
  if (!(await $c.gus.cfValidateGrid($p, gr_lo413, null, null, validArry, gridName))) {
    return false;
  }
  return true;

  /*
  	if (await $c.gus.cfValidate([gr_lo413])) {
    		return true;
  	} else {
    		return false;
  	}
  */
};
scwin.f_addrow = function () {
  var row = ds_lo413.insertRow();
  ds_lo413.setCellData(row, "anucScItemCd", ds_lo400.getCellData(ds_lo400.getRowPosition(), "selpchItemCd"));
  gr_lo413.setReadOnly("grid", false);
  gr_lo413.setFocusedCell(row, "commNm", false);
};
scwin.f_undo = function () {
  ds_lo413.undoRow(ds_lo413.getRowPosition());
  gr_lo413.setReadOnly("grid", true);
};
scwin.sbm_lo400_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_lo400.getRowCount();
    tbx_totalRows1.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }

    //gr_lo400.setFocusedCell(0, "selpchItemNm", false);
    gr_lo400.setFocusedCell(scwin.curPos, "selpchItemNm", false);
    scwin.curPos = 0;
    $c.gus.cfDisableObjects($p, [udc_addRow, btn_save]);
    $c.gus.cfEnableObjects($p, [btn_edit]);
  } catch (e) {
    console.log("sbm_lo400_submitdone : " + e);
  }
};
scwin.sbm_lo400_submiterror = function (e) {};
scwin.sbm_retrieve_submitdone = function (e) {
  // console.log("sbm_retrieve_submitdone ~~~");
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_lo412.getRowCount();
    tbx_totalRows2.setValue(rowcnt);
    rowcnt = ds_lo413.getRowCount();
    tbx_totalRows3.setValue(rowcnt);

    // gr_lo412.setFocusedCell(0, "anucTrfClsNm", false);
    // gr_lo413.setFocusedCell(0, "commNm", false);
    gr_lo412.setFocusedCell(scwin.lo412Pos, "selpchItemNm", false);
    gr_lo413.setFocusedCell(scwin.lo413Pos, "commNm", false);
    scwin.lo412Pos = 0;
    scwin.lo413Pos = 0;
    gr_lo400.setFocusedCell(ds_lo400.getRowPosition(), "selpchItemNm", false);
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfDisableObjects($p, [udc_addRow, btn_save]);
  $c.gus.cfEnableObjects($p, [btn_edit]);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == "-1") return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 

  scwin.curPos = ds_lo400.getRowPosition();
  scwin.lo412Pos = ds_lo412.getRowPosition();
  scwin.f_Retrieve();
  $c.gus.cfDisableObjects($p, [udc_addRow, btn_save]);
  $c.gus.cfEnableObjects($p, [btn_edit]);

  //gr_lo412.setReadOnly("grid", true);
  gr_lo412.setReadOnly("column", "chk", true);
  gr_lo413.setReadOnly("grid", true);

  //gr_lo412.Editable = false;
  //gr_lo413.Editable = false;
};
scwin.sbm_save_submiterror = function (e) {};
scwin.btn_search_onclick = function (e) {
  scwin.curPos = 0;
  scwin.lo412Pos = 0;
  scwin.f_Retrieve();
};
scwin.btn_edit_onclick = function (e) {
  scwin.f_Edit();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Create();
};
scwin.gr_lo400_onrowindexchange = function (rowIndex, oldRow) {
  ds_search.set("anucScItemCd", ds_lo400.getCellData(rowIndex, "selpchItemCd"));
  $c.sbm.execute($p, sbm_retrieve);
  $c.gus.cfDisableObjects($p, [udc_addRow, btn_save]);
  $c.gus.cfEnableObjects($p, [btn_edit]);
  gr_lo412.setReadOnly("column", "chk", true);
  gr_lo413.setReadOnly("grid", true);
};
scwin.gr_lo413_ontextimageclick = function (rowIndex, columnIndex) {
  var rtnList = new Array();
  //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveCommInfo',	
  //var colId = gr_lo413.getColumnID("columnIndex");

  udc_comCodeGrid.setSelectId('retrieveCommInfo');
  rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, ds_lo413.getCellData(rowIndex, "commCd"), ds_lo413.getCellData(rowIndex, "commNm"), "T", '5', "품목코드,품목", '150,170', null, "2,3", '440', '500', null, null, null, null, "품목,품목코드,품목");
};
scwin.gr_lo413_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  if (ds_lo413.getCellData(rowIndex, "hidCommNm") == ds_lo413.getCellData(rowIndex, "commNm")) {
    return;
  } else {
    ds_lo413.setCellData(rowIndex, "commCd", ""); //품목코드
    ds_lo413.setCellData(rowIndex, "hidCommNm", ""); //품목

    var rtnList = new Array();
    //rtnList = cfCommonPopUp('retrieveCommInfo',	

    udc_comCodeGrid.setSelectId('retrieveCommInfo');
    rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, ds_lo413.getCellData(rowIndex, "commCd"), ds_lo413.getCellData(rowIndex, "commNm"), "T", '5', "품목", '150,170', null, "2,3", '440', '500', null, null);
  }
};
scwin.gr_lo413_onviewchange = function (info) {
  //console.log('scwin.gr_lo413_onviewchange~~');
  //console.log(info);

  var rowIndex = info.rowIndex;
  if (ds_lo413.getCellData(rowIndex, "hidCommNm") == ds_lo413.getCellData(rowIndex, "commNm")) {
    return;
  } else {
    ds_lo413.setCellData(rowIndex, "commCd", ""); //품목코드
    ds_lo413.setCellData(rowIndex, "hidCommNm", ""); //품목

    var rtnList = new Array();
    udc_comCodeGrid.setSelectId('retrieveCommInfo');
    rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, ds_lo413.getCellData(rowIndex, "commCd"), ds_lo413.getCellData(rowIndex, "commNm"), "T", '5', "품목", '150,170', null, "2,3", '440', '500', null, null);
  }
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  var row = ds_lo413.getRowPosition();
  if (rtnList != null && rtnList != "N/A") {
    ds_lo413.setCellData(row, "commCd", rtnList[0]); //품목코드
    ds_lo413.setCellData(row, "hidCommNm", rtnList[1]); //품목
    ds_lo413.setCellData(row, "commNm", rtnList[1]); //품목
  } else {
    ds_lo413.setCellData(row, "commCd", ""); //품목코드
    ds_lo413.setCellData(row, "hidCommNm", ""); //품목
    ds_lo413.setCellData(row, "commNm", ""); //품목
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox col3 wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'할증항목목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_lo400',gridUpYn:'N',grdDownOpts:'{"sheetName" : "할증항목목록","fileName":"할증항목목록.xlsx","type":"2+4+8+16","hiddenVisible":"true"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_lo400',focusMode:'row',id:'gr_lo400',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_lo400_onrowindexchange',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'할증항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'할증항목',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출입항목목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_lo412',gridUpYn:'N',grdDownOpts:'{"sheetName" : "매출입항목목록","fileName":"매출입항목목록.xlsx","type":"2+4+8+16"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_lo412',focusMode:'row',id:'gr_lo412',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'요율구분코드 ',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column21',inputType:'text',style:'',value:'요율구분명',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'고시할증항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'매출입항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column19',inputType:'text',style:'',value:'매출입항목명',width:'150'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column17',inputType:'text',style:'',value:'포함',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'anucTrfClsCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'anucTrfClsNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'anucScItemCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적용제외품목목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_lo413',gridDownUserAuth:'X',grdDownOpts:'{"sheetName" : "적용제외품목목록","fileName":"적용제외품목목록.xlsx","type":"2+4+8+16","hiddenVisible":"true"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_lo413',focusMode:'row',id:'gr_lo413',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_lo413_ontextimageclick',readOnly:'true',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_lo413_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'고시할증항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'품목코드 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'히든품목',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'제외품목',width:'100',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'anucScItemCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hidCommNm',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_lo413',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addrow',id:'udc_addRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})