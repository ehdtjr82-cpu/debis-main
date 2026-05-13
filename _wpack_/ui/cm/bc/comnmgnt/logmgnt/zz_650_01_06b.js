/*amd /ui/cm/bc/comnmgnt/logmgnt/zz_650_01_06b.xml 25686 d8c1a5f3d2c0dc05cd4d549576546a558bc5f8ad7026f9b7299026736d28864a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_qry'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'empNo',name:'empNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logStDt',name:'logStDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logEndDt',name:'logEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'gubun',dataType:'text'}},{T:1,N:'w2:key',A:{id:'systemClsCd',name:'systemClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userClsCd',name:'userClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkLobranCd',name:'transWrkLobranCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ListTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'actPgmId',name:'actPgmId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmNm',name:'actPgmNm',dataType:'text',valueType:''}},{T:1,N:'w2:column',A:{id:'monCnt',name:'monCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tueCnt',name:'tueCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wedCnt',name:'wedCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thrCnt',name:'thrCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'friCnt',name:'friCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'satCnt',name:'satCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sunCnt',name:'sunCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCdNm',name:'sysCdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'totCnt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_List',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'actPgmId',name:'actPgmId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'actPgmNm',name:'actPgmNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'monCnt',name:'monCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tueCnt',name:'tueCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wedCnt',name:'wedCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'thrCnt',name:'thrCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'friCnt',name:'friCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'satCnt',name:'satCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sunCnt',name:'sunCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sysCdNm',name:'sysCdNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totCnt',name:'totCnt'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/cm.bc.comnmgnt.logmgnt.RetrievePgmUseLogEachWeekdayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_qry","key":"IN_DS1"},{"id":"ds_List","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_queryConditionDTO_submitdone','ev:submiterror':'scwin.sbm_queryConditionDTO_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ010",
    compID: "lc_userClsCd"
  }, {
    grpCd: "ZZ019",
    compID: "lc_userHomeClsCd",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  var vBeforeAWeekDay = scwin.f_SetDate("2", 7);
  var vToday = scwin.f_SetDate("1", 0);
  ica_logStDt.setValue(vBeforeAWeekDay);
  ica_logEndDt.setValue(vToday);
  const codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: [""],
    compID: "lc_transWrkLobranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions1);
  lc_systemClsCd.setSelectedIndex(0);
  lc_userClsCd.setValue("01");
  lc_userHomeClsCd.setValue("CM");
  scwin.f_userSelChange();
  lc_userCdNtis.hide();

  // if( lc_userCd.getValue() == "01"){
  //  	scwin.f_Retrieve( lc_sysCd.getValue() );
  // }
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 날짜설정
//-------------------------------------------------------------------------
scwin.f_SetDate = function (pSetType, pDayCnt) {
  //유형 1:현재일, 2:이전일, 3:이후일
  var vReturnDate = "";
  if (pSetType == "1") {
    vReturnDate = scwin.currDate;
  } else if (pSetType == "2") {
    vReturnDate = WebSquare.date.dateAdd(scwin.currDate, -pDayCnt);
  } else if (pSetType == "3") {
    vReturnDate = WebSquare.date.dateAdd(scwin.currDate, pDayCnt);
  }
  return vReturnDate;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var systemClsCd = lc_systemClsCd.getValue();
  dma_qry.set("systemClsCd", systemClsCd);
  if (systemClsCd == "DEBIS") {
    dma_qry.set("sysCd", lc_userClsCd.getValue());
  } else if (systemClsCd == "NTIS") {
    dma_qry.set("sysCd", lc_userCdNtis.getValue());
    dma_qry.set("userClsCd", lc_userCdNtis.getValue());
  } else if (systemClsCd == "SHR") {
    dma_qry.set("sysCd", "HR");
  } else {
    dma_qry.set("sysCd", "BS");
  }
  ds_ListTemp.setJSON([]);
  if (ed_empNoCond.getValue() != "") {
    dma_qry.set("gubun", "1");
  } else {
    dma_qry.set("gubun", "");
  }
  if (systemClsCd == "DEBIS") {
    if (lc_userHomeClsCd.getValue() == "") {
      if (lc_userClsCd.getValue() == "01") {
        //내부사용자
        dma_qry.set("sysCd", "");
      } else {
        dma_qry.set("sysCd", lc_userClsCd.getValue());
      }
    } else {
      dma_qry.set("sysCd", lc_userHomeClsCd.getValue());
    }
  }
  if (ica_logEndDt.getValue() == "" || ica_logEndDt.getValue() == "") {
    await $c.win.alert($p, "로그일자는 필수 입니다.");
    return;
  }
  if (dma_qry.get("logStDt") == "" || dma_qry.get("logEndDt") == "") {
    await $c.win.alert($p, "로그일자는 필수 입니다.");
    return;
  }
  $c.sbm.execute($p, sbm_queryConditionDTO);
};
scwin.f_copyData = function () {
  var fco = ed_logFromCount.getValue();
  var tco = ed_logToCount.getValue();
  ds_ListTemp.setJSON([]);
  if (fco == "" || tco == "") {
    var jsonData = ds_List.getAllJSON();
    ds_ListTemp.setJSON(jsonData);
  } else {
    var x = 0;
    for (var i = 0; i < ds_List.getTotalRow(); i++) {
      var totSum = 0;
      var irow = ds_List.getRowJSON(i);
      totSum = Number(irow.monCnt) + Number(irow.tueCnt) + Number(irow.wedCnt) + Number(irow.thrCnt) + Number(irow.friCnt) + Number(irow.satCnt) + Number(irow.sunCnt);
      if (fco <= totSum && tco >= totSum) {
        ds_ListTemp.setRowJSON(x++, irow);
      }
    }
  }
};
scwin.f_downExcelSheet = function (rowCnt) {
  let sheetTitle = "접속통계메뉴별사용현황";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_List, options);
};

//-------------------------------------------------------------------------
// 사원번호 팝업
//-------------------------------------------------------------------------
scwin.f_OpenEmpPopUp = async function () {
  // 팝업을 띄운다.
  // "retrieveEmpInfo" 
  await udc_empNoCond.cfCommonPopUp(scwin.udc_empNoCond_callback, ed_empNoCond.getValue(), ed_empNmCond.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "F");
};

//-------------------------------------------------------------------------
// 사원코드 입력창 OnChange Event
//-------------------------------------------------------------------------
scwin.f_EmpNoChanged = function (code, name) {
  // // 사원명 입력창을 지운다
  // name.value = "";

  // // 사원코드를 가져온다.
  // var sCode = code.value.trim();

  // if( sCode.length > 0){
  // // 조회결과가 하나면 값을 리턴하고 아니면 조회창을 띄운다.
  // aResult = cfCommonPopUp("retrieveEmpInfo", sCode, '', "T", null, null, null, null, null, null, null, null, null, null, "F");
  // cfSetReturnValue(aResult, code, name);	
  // }
};
scwin.f_EmpNmChanged = function (code, name) {
  // // 사원코드 입력창을 지운다
  // code.value = "";

  // // 사원명를 가져온다.
  // var sName = name.value.trim();

  // if( sName.length > 0){
  // // 조회결과가 하나면 값을 리턴하고 아니면 조회창을 띄운다.
  // aResult = cfCommonPopUp("retrieveEmpInfo", '', sName, "T", null, null, null, null, null, null, null, null, null, null, "F");
  // cfSetReturnValue(aResult, code, name);  
  // }
};
scwin.f_userSelChange = function () {
  if (lc_userClsCd.getValue() == "01") {
    lc_userHomeClsCd.setDisabled(false);
    lc_userHomeClsCd.focus();
  } else {
    lc_userHomeClsCd.setDisabled(true);
    lc_userHomeClsCd.setValue("");
  }
};
scwin.udc_empNoCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_empNoCond.setValue(rtnList[0]);
      ed_empNoCond.options.hidVal = rtnList[0];
      ed_empNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_empNoCond.setValue("");
    ed_empNoCond.options.hidVal = "";
    ed_empNmCond.setValue("");
  }
};
scwin.udc_empNoCond_onblurCodeEvent = function (e) {
  scwin.f_OpenEmpPopUp();
};
scwin.udc_empNoCond_onclickEvent = function (e) {
  scwin.f_OpenEmpPopUp();
};
scwin.sbm_queryConditionDTO_submitdone = function (e) {
  var rowCnt = ds_List.getRowCount();
  gr_spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  } else {
    // gr_List.setFocusedCell(0, 0);
    scwin.f_copyData();
  }
};
scwin.sbm_queryConditionDTO_submiterror = function (e) {};
scwin.lc_systemClsCd_onchange = function (info) {
  var vSystemClsCd = info.newValue;
  //DEBIS, NTIS
  if (vSystemClsCd == "DEBIS") {
    lc_userClsCd.show();
    lc_userCdNtis.hide();
    lc_userHomeClsCd.setDisabled(false);
    lc_userHomeClsCd.setValue("CM");
    lc_userClsCd.setValue("01");
  } else if (vSystemClsCd == "NTIS") {
    lc_userCdNtis.show();
    lc_userCdNtis.setDisabled(false);
    lc_userCdNtis.setValue("DS");
    lc_userClsCd.hide();
    lc_userHomeClsCd.setDisabled(true);
    lc_userHomeClsCd.setValue("");
  } else {
    lc_userCdNtis.show();
    lc_userCdNtis.setDisabled(true);
    lc_userCdNtis.setValue("");
    lc_userClsCd.hide();
    lc_userHomeClsCd.setDisabled(true);
    lc_userHomeClsCd.setValue("");
  }
};
scwin.lc_userClsCd_onchange = function (info) {
  scwin.f_userSelChange();
};
scwin.lc_userCdNtis_onchange = function (info) {
  var vSystemClsCd = info.newValue;
  if (vSystemClsCd == "NTIS") {
    dma_qry.set("sysCd", lc_userCdNtis.getValue());
    scwin.f_Retrieve();
  }
};
scwin.lc_userHomeClsCd_onchange = function (info) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_systemClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'','ev:onchange':'scwin.lc_systemClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DEBIS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NTIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'NTIS'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',disableEdit:'true',editType:'select',id:'lc_userClsCd',mandatory:'true',readOnly:'false',ref:'data:dma_qry.userClsCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15','ev:onchange':'scwin.lc_userClsCd_onchange'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',disableEdit:'true',editType:'select',id:'lc_userCdNtis',mandatory:'true',readOnly:'false',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15','ev:onchange':'scwin.lc_userCdNtis_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용자명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포워더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력업체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력업체2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주+협력'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'81'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주(신대양)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가(데비스)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',disableEdit:'true',editType:'select',id:'lc_userHomeClsCd',mandatory:'true',readOnly:'false',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15','ev:onchange':'scwin.lc_userHomeClsCd_onchange'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'로그일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_logStDt',edToId:'ica_logEndDt',id:'udc_fromToCalendar2',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_qry',refEdDt:'logEndDt',refStDt:'logStDt',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접속횟수 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_logFromCount',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_logToCount',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_empNoCond',code:'empNo',codeId:'ed_empNoCond',editTypeName:'focus','ev:onblurCodeEvent':'scwin.udc_empNoCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_empNoCond_onclickEvent',id:'udc_empNoCond',maxlengthCode:'6',maxlengthName:'30',name:'empNm',nameId:'ed_empNmCond',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_qry',selectID:'retrieveEmpInfo',style:'',validExpCode:'사원번호:no'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'물류점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'선택',class:'',disableEdit:'true',editType:'select','ev:onchange':'scwin.lc_sysCd_onchange',id:'lc_transWrkLobranCd',mandatory:'true',readOnly:'false',ref:'data:dma_qry.transWrkLobranCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'접속통계 매뉴별 사용현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_downExcelSheet',id:'udc_grtoExcel',gridID:'gr_List'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_ListTemp',focusMode:'row',id:'gr_List',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'화면ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'화면명',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'총접속</br>회수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'목',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'금',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'토',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'시스템구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'actPgmId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'actPgmNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',valueType:'binary',dataType:'text',displayType:'all',class:'ws-pre'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totCnt',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',expression:'Number(datalist(\'monCnt\'))+Number(datalist(\'tueCnt\'))+Number(datalist(\'wedCnt\'))+Number(datalist(\'thrCnt\'))+Number(datalist(\'friCnt\'))+Number(datalist(\'satCnt\'))+Number(datalist(\'sunCnt\'))',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'monCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tueCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wedCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thrCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'friCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'satCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sunCnt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sysCdNm',value:'',displayMode:'label',colMerge:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',expression:'sum(\'totCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',expression:'sum(\'monCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',expression:'sum(\'tueCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',expression:'sum(\'wedCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'sum(\'thrCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',expression:'sum(\'friCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',expression:'sum(\'satCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',expression:'sum(\'sunCnt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})