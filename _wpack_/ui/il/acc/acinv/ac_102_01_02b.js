/*amd /ui/il/acc/acinv/ac_102_01_02b.xml 23229 8198957a28a97d4ff02094a41fc9dc101347421c55ca8acf45ce77725bfac2ee */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_condition',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'iogb'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'seaair'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'blno'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'dateFrom'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'dateTo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'hblno'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'seaAirCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'iogb'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name4',id:'duty',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name5',id:'surtax',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'prepayDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'kcomcd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'mhno'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'hblno'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'seaAirCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'iogb'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'duty'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'surtax'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'prepayDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'kcomcd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'mhno'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExcelInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',action:'/il.acc.acinv.RetrieveDutySurtaxListCMD.do',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',action:'/il.acc.acinv.SaveDutySurtaxListCMD.do',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.p_hhio = "";
scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -2);

//hidden
scwin.hd_kcomcd = "DBEX";
scwin.onpageload = function () {
  scwin.p_hhio = $c.data.getParameter($p, "hhio") == null ? "" : $c.data.getParameter($p, "hhio");
};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "IL041",
    compID: "gr_master:seaAirCls",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_setDSHeader();
  scwin.f_set("ONLOAD");
  acb_seaair.setValue("");
  acb_ioClsCd.setValue("");
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.f_setDSHeader = function () {
  ds_condition.insertRow();
  ds_condition.setRowPosition(0);
};

// 화면 open시 초기 데이타 setting
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      ed_fromDt.setValue(scwin.strPreDate);
      ed_toDt.setValue(scwin.strCurDate);
      break;
    case "RETRIEVE":
      $c.gus.cfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};

// 조회
scwin.f_Retrieve = async function () {
  // VALIDATE
  let chk = await $c.gus.cfValidate($p, [ed_fromDt, ed_toDt]);
  if (!chk) {
    return;
  }
  let chk2 = await $c.gus.cfIsAfterDate($p, ed_fromDt.getValue(), ed_toDt.getValue());
  if (!chk2) {
    if (await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["ETA From", "ETA To"])) {
      // @은(는) 보다 작아야 합니다.
      ed_fromDt.focus();
      return false;
    }
  }

  // 조회
  let e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};

// 저장
scwin.f_Save = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 내역이 없습니다.");
    return false;
  }
  scwin.gr_master_validConfig = [scwin.getValItem("hblno", "House B/L NO", {
    key: true
  }), scwin.getValItem("seaAirCls", "Sea/Air"), scwin.getValItem("iogb", "Export/Import")];
  let chk = await $c.gus.cfValidateGrid($p, gr_master, null, null, scwin.gr_master_validConfig, "관부가세관리");
  if (!chk) {
    return;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    // 조회
    let e = await $c.sbm.execute($p, sbm_save);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_save_submitdone(e);
    }
  }
  ;
};

// 조회 조건 지우기
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve); // 조회조건의 테이블을 초기화. 
};

// 행추가
scwin.f_addRow = function () {
  var rowIndex = ds_master.insertRow();
  ds_master.setCellData(rowIndex, "kcomcd", scwin.hd_kcomcd);
};

// 행삭제
scwin.f_deleteRow = function () {
  if (ds_master.getRowStatus(ds_master.getRowPosition()) == "C") {
    ds_master.removeRow(ds_master.getRowPosition());
  } else {
    ds_master.deleteRow(ds_master.getRowPosition());
  }
};

// 행취소
scwin.f_cancelRow = function () {
  if (ds_master.getRowStatus(ds_master.getRowPosition()) == "C") {
    ds_master.removeRow(ds_master.getRowPosition());
  } else {
    ds_master.undoRow(ds_master.getRowPosition());
  }
};
scwin.f_excelUpload = async function () {
  var options = {
    "startRowIndex": 1
  };
  ds_tmp.removeAll();
  if (udc_topGrd.getUpExt() == "1") {
    // xlsx, csv 선택값
    await $c.data.uploadGridViewCSV($p, gr_masterTemp, options); // CSV를 선택하였을 경우
  } else {
    await $c.data.uploadGridViewExcel($p, gr_masterTemp, options); // XLSX를 선택하였을 경우
  }
};
scwin.f_Upload = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    if ((await $c.win.confirm($p, "변경사항이 없습니다. 계속하시겠습니까?")) == false) {
      return;
    }
  }
  ds_ExcelInformation.removeAll();
  ds_master.removeAll();
  var duty = "";
  var surtax = "";
  var seaAirCls = "";
  var iogb = "";
  var prepayDt = "";
  for (var i = 0; i < ds_tmp.getRowCount(); i++) {
    var rowIndex = ds_master.insertRow();
    duty = ds_tmp.getCellData(i, "duty");
    surtax = ds_tmp.getCellData(i, "surtax");
    seaAirCls = ds_tmp.getCellData(i, "seaAirCls").substring(0, 1);
    iogb = ds_tmp.getCellData(i, "iogb").substring(0, 1);
    prepayDt = ds_tmp.getCellData(i, "prepayDt");
    ds_master.setCellData(i, "hblno", ds_tmp.getCellData(i, "hblno").toUpperCase());
    ds_master.setCellData(i, "seaAirCls", seaAirCls.toUpperCase());
    if (iogb == "e" || iogb == "E") {
      iogb = "O";
    }
    ds_master.setCellData(i, "iogb", iogb.toUpperCase());
    ds_master.setCellData(i, "duty", scwin.fReplaceStr(duty.trim(), ",", ""));
    ds_master.setCellData(i, "surtax", scwin.fReplaceStr(surtax.trim(), ",", ""));
    ds_master.setCellData(i, "prepayDt", scwin.fReplaceStr(scwin.fReplaceStr(prepayDt, "/", ""), "-", ""));
    ds_master.setCellData(i, "kcomcd", scwin.hd_kcomcd);
  }
  ds_tmp.removeAll();
};

// 사용자 정의 replace 함수. value의 전체문자열에서 desti 값이 나오면 result 로 치환 
scwin.fReplaceStr = function (value, Destination, Result) {
  if (value == '' || value == null) {
    return "";
  }
  var replaced_result = "";
  for (var i = 0; i < value.length; i++) {
    if (value.substr(i, 1) == Destination) {
      replaced_result = replaced_result + Result;
    } else {
      replaced_result = replaced_result + value.substr(i, 1);
    }
  }
  return replaced_result;
};

// 유효성 항목 생성용 헬퍼 함수
scwin.getValItem = function (id, name, options = {}) {
  return {
    id: id,
    name: name,
    mandatory: options.mandatory !== undefined ? options.mandatory : true,
    ...options // 나머지 옵션(minNumber, date 등)을 병합
  };
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_master.getRowCount() == 0) {
    totalRows.setValue(0);
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    return;
  } else {
    totalRows.setValue(ds_master.getRowCount());
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, "저장이 완료되었습니다.")) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 초기화 버튼 클릭 이벤트 
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 조회 버튼 클릭 이벤트 
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

// 저장 버튼 클릭 이벤트 
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

// Excel등록 클릭 이벤트 
scwin.btn_xls_onclick = function (e) {
  scwin.f_Upload();
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_masterTemp_onfilereadend = function (value) {
  scwin.f_Upload();
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
scwin.ed_blno_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Air/Sea',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_seaair',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',ref:'data:ds_condition.seaair',chooseOptionLabel:'All'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_ioClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',ref:'data:ds_condition.iogb',chooseOptionLabel:'All'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선납일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'dateFrom',refDataMap:'ds_condition',style:'',id:'udc_fromToDt',refEdDt:'dateTo',edFromId:'ed_fromDt',edToId:'ed_toDt',mandatoryFrom:'false',mandatoryTo:'false'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',displayFormat:'####################',id:'ed_blno',ref:'data:ds_condition.blno',style:'width: 150px;','ev:onkeyup':'scwin.ed_blno_onkeyup',allowChar:'a-zA-Z0-9',maxByteLength:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'관/부가세관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'Y',gridID:'gr_master',grdDownOpts:'{"fileName" : "관부가세 관리.xlsx", "sheetName":"관부가세 관리"}',gridDownYn:'Y',id:'udc_topGrd',gridUpFn:'scwin.f_excelUpload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:onaftercolumnmove':'scwin.gr_master_onaftercolumnmove',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'House B/L NO',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'Sea/Air',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'Export/Import',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'관세',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'부가세',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'선납일자',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',style:'',value:'',width:'150',maxByteLength:'20',validExp:'House B/L No:yes::key',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAirCls',inputType:'select',style:'',value:'',width:'120',emptyItem:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iogb',inputType:'select',style:'',value:'',width:'150',allOption:'',chooseOption:'',ref:'',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'duty',inputType:'text',style:'',value:'',width:'70',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'surtax',inputType:'text',style:'',value:'',width:'100',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prepayDt',inputType:'calendar',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',style:'',value:'',width:'70',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',style:'',value:'',width:'70',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnDelYn:'N',btnRowDelYn:'Y',EngYn:'Y',gridID:'gr_master',rowAddFunction:'scwin.f_addRow',btnRowAddObj:'btn_AddRow1',btnRowDelObj:'btn_DelRow1',btnCancelObj:'btn_CancelRow1',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_xls',style:'display: none;',type:'button','ev:onclick':'scwin.btn_xls_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excel등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_tmp',focusMode:'row',id:'gr_masterTemp',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'display: none;',visibleRowNum:'16',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_masterTemp_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column30',inputType:'text',style:'',value:'House B/L NO',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column38',inputType:'text',style:'',value:'Sea/Air',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column36',inputType:'text',style:'',value:'Export/Import',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column34',inputType:'text',style:'',value:'관세',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column32',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column28',inputType:'text',style:'',value:'선납일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column26',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column22',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',maxByteLength:'20',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',emptyItem:'true',id:'seaAirCls',inputType:'select',selectedData:'false',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',emptyItem:'true',id:'iogb',inputType:'select',ref:'',selectedData:'false',style:'',value:'',width:'150'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'duty',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'surtax',inputType:'text',maxLength:'13',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prepayDt',inputType:'calendar',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',style:'',value:'',width:'70'}}]}]}]}]}]}]}]}]})