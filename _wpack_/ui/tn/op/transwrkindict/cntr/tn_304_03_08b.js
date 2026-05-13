/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_08b.xml 27955 a6505e81e177904e5f89f6b1943abf3bf070c9383da014757aa026b448b63356 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_scanpasstime',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyCoYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecReceiptYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mngStDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mngEdDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scnAmStHm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scnAmEdHm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scnFmStHm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scnFmEdHm',name:'name17',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_scanpasstime',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_scanpasstime","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyCreditClntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.SaveCyCreditClntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.interval01;
scwin.interval02;
scwin.userId;
scwin.sysAdminYn;
scwin.userLobranCd;
scwin.strDate;
scwin.strCurDate;
scwin.v_amSthm;
scwin.v_amEdhm;
scwin.v_fmSthm;
scwin.v_fmEdhm;
scwin.loUpperLobranCd;
scwin.flag = false;
scwin.pgrId;
scwin.onpageload = async function () {
  scwin.f_SetDefaultData();
  const codeOptions1 = [{
    grpCd: "OP317",
    compID: "acb_wrkPlCd"
  } //<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>">
  ];
  await $c.data.setCommonCode($p, codeOptions1, scwin.callback2);
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lobranCd" //바인딩 할 컴포넌트 id
  }];
  await $c.data.setGauceUtil($p, codeOptions, function () {
    //배차점소
    acb_lobranCd.setValue(scwin.loUpperLobranCd);
  });
  if (scwin.sysAdminYn == 1) {
    //cfEnableObj(lux_wrkPlCd, true);
    $c.gus.cfEnableObj($p, acb_lobranCd, true);
  } else {
    //cfEnableObj(lux_wrkPlCd, false);
    $c.gus.cfEnableObj($p, acb_lobranCd, false);
  }
  ;

  // 협력업체 차량스캔 가능시간 조회
  // 공통코드OP319에 협렵업체스캔가능시간 등록 선행
  // 정산거래처 추가시 default setting위하여...
};
scwin.callback1 = function () {
  if (scwin.userLobranCd == "") {
    acb_lobranCd.setValue(scwin.loUpperLobranCd);
  } else {
    acb_lobranCd.setValue(scwin.userLobranCd);
  }
  ;
};
scwin.callback2 = async function () {
  acb_wrkPlCd.setSelectedIndex(0);
  var lobrandCd = $c.gus.cfIsNull($p, scwin.userLobranCd) ? scwin.loUpperLobranCd : scwin.userLobranCd;
  if (lobrandCd == "4AA") {
    acb_wrkPlCd.setSelectedIndex(0);
  } else if (lobrandCd == "4BB") {
    acb_wrkPlCd.setSelectedIndex(1);
  } else if (lobrandCd == "5AA") {
    acb_wrkPlCd.setSelectedIndex(2);
  } else if (lobrandCd == "6AA") {
    acb_wrkPlCd.setSelectedIndex(3);
  } else {
    acb_wrkPlCd.setSelectedIndex(1);
  }
  ;
  ds_scanpasstime.removeAll();
  sbm_scanpasstime.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=NcallCommonEBC" + "&queryId=retrieveScanTime&param1=" + acb_wrkPlCd.getValue();
  await $c.sbm.execute($p, sbm_scanpasstime);
  if (!$c.gus.cfIsNull($p, ds_scanpasstime.getCellData(0, "col1"))) {
    scwin.v_amSthm = ds_scanpasstime.getCellData(0, "col3");
    scwin.v_amEdhm = ds_scanpasstime.getCellData(0, "col4");
    scwin.v_fmSthm = ds_scanpasstime.getCellData(1, "col3");
    scwin.v_fmEdhm = ds_scanpasstime.getCellData(1, "col4");
  }
};
scwin.f_SetDefaultData = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.strDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
  scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
  scwin.userId = scwin.memJson.userId;
  scwin.userLobranCd = $c.gus.cfIsNull($p, scwin.memJson.userLobranCd) ? "" : scwin.memJson.userLobranCd;
  scwin.sysAdminYn = scwin.memJson.sysAdminYn;
  scwin.loUpperLobranCd = $c.gus.cfIsNull($p, scwin.memJson.loUpperLobranCd) ? "" : scwin.memJson.loUpperLobranCd;
  scwin.pgrId = $c.data.getParameter($p, "pgrId") == null ? "tn_304_03_08b" : $c.data.getParameter($p, "pgrId");
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [ed_crn, ed_adjmClntNo]);
};
scwin.btn_retrieve_onclick = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_result.getRowIndexByStatus('CUD').length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  ;
  for (var dsRow = 0; dsRow < ds_result.getRowCount(); dsRow++) {
    if (ds_result.getCellData(dsRow, 'adjmClntNo') == '') {
      $c.win.alert($p, '거래처번호는 필수입력 값입니다.');
      return;
    }
    if (ds_result.getCellData(dsRow, 'cyCoYn') == '') {
      $c.win.alert($p, 'CY업체여부는 필수입력 값입니다.\n\nex)CY업체-Y, 협력업체-N');
      return;
    }
  }
  ;
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_Delete = function () {
  var delRow = ds_result.getRowPosition();
  if (ds_result.getRowStatus(delRow) == "C") {
    ds_result.removeRow(delRow);
  } else {
    ds_result.deleteRow(delRow);
    gr_result.setFocusedCell(delRow, 0);
    gr_result.setReadOnly("grid", true);
  }
};
scwin.sbm_save_submitDone = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.addRow = function () {
  var nRow = ds_result.getRowCount();
  ds_result.insertRow(nRow);
  scwin.f_EditTrue(nRow);
  ds_result.setCellData(nRow, "lobranCd", acb_lobranCd.getValue());
  ds_result.setCellData(nRow, "lobranNm", acb_lobranCd.getText(true));
  ds_result.setCellData(nRow, "wrkPlCd", acb_wrkPlCd.getValue().substr(0, 4));
  ds_result.setCellData(nRow, "wrkPlNm", acb_wrkPlCd.getText(true));
  ds_result.setCellData(nRow, "adjmClntNo", ds_result.getCellData(nRow, "adjmClntNo"));
  ds_result.setCellData(nRow, "clntNm", ds_result.getCellData(nRow, "clntNm"));
  ds_result.setCellData(nRow, "crn", ds_result.getCellData(nRow, "crn"));
  ds_result.setCellData(nRow, "clntPersNm", ds_result.getCellData(nRow, "clntPersNm"));
  ds_result.setCellData(nRow, "clntTelNo", ds_result.getCellData(nRow, "clntTelNo"));
  ds_result.setCellData(nRow, "mngStDt", scwin.strCurDate);
  ds_result.setCellData(nRow, "mngEdDt", "99991231");
  ds_result.setCellData(nRow, "cyCoYn", "1");
  ds_result.setCellData(nRow, "scnAmStHm", scwin.v_amSthm);
  ds_result.setCellData(nRow, "scnAmEdHm", scwin.v_amEdhm);
  ds_result.setCellData(nRow, "scnFmStHm", scwin.v_fmSthm);
  ds_result.setCellData(nRow, "scnFmEdHm", scwin.v_fmEdhm);
  ds_result.setCellData(nRow, "regId", scwin.userId);
  ds_result.setCellData(nRow, "regDtm", scwin.strCurDate);
  ds_result.setCellData(nRow, "modId", scwin.userId);
  ds_result.setCellData(nRow, "modDtm", scwin.strCurDate);

  //gr_result.ColSelect = true;
  gr_result.setFocusedCell(nRow, 0);
};
scwin.delRow = function () {
  //행삭제

  var row = ds_result.getRowPosition();
  if (ds_result.getRowStatus(row) == 'C') {
    ds_result.removeRow(row);
  }
  ;
};
scwin.f_Cancel = function () {
  $c.data.undoRow($p, ds_result, "Y");
  gr_result.setFocusedCell(0, 0);
};
scwin.f_EditTrue = function (Row) {
  gr_result.setCellInputType(Row, "adjmClntNo", {
    inputType: "textImage"
  });
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (pCode, pName, pClose, pAllSearch) {
  var rtnList;
  // 계약 거래처코드팝업retrieveClntListPhone_tpro
  udc_adjmClntNo.setSelectId("retrieveClntListPhone_tpro");
  rtnList = udc_adjmClntNo.cfCommonPopUp(scwin.retrieveClntListPhoneTproCB // XML상의 SELECT ID
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null, null
  //,"80,120,120,120,120"						// 보여주는 각 컬럼들의 폭
  //,"4,6,7,9,10"						// 컬럼중에서 숨기는	컬럼 지정
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , "650" // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pAllSearch // 전체검색허용여부	("F")
  , "청구 거래처,거래처코드" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.retrieveClntListPhoneTproCB = function (rtnList) {
  if (rtnList != null) {
    ds_result.setCellData(ds_result.getRowPosition(), "adjmClntNo", rtnList[0]);
    ds_result.setCellData(ds_result.getRowPosition(), "clntNm", rtnList[1]);
    ds_result.setCellData(ds_result.getRowPosition(), "crn", rtnList[2]);
    ds_result.setCellData(ds_result.getRowPosition(), "clntPersNm", rtnList[7]);
    ds_result.setCellData(ds_result.getRowPosition(), "clntTelNo", rtnList[4]);
  }
};
scwin.udc_adjmClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ds_result.getCellData(ds_result.getRowPosition(), 'adjmClntNo'), '', 'T', 'F');
};

//-------------------------------------------------------------------------
// CY당사상하차차량확인 cfTabMenuUpdate
//-------------------------------------------------------------------------
scwin.f_openMcomOnoffInfo = function () {
  // cfTabMenuUpdate( "/tn/op/transwrkindict/cntr/tn_304_03_10b.jsp" , "CY당사상하차차량확인" ) ;
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_10b.xml";
  let programId = "tn_304_03_10b";
  $c.win.openMenu($p, "CY당사상하차차량확인", strUrl, programId, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// CY로케이션관리 cfTabMenuUpdate
//-------------------------------------------------------------------------
scwin.f_openLocationInfo = function () {
  // cfTabMenuUpdate( "/tn/op/transwrkindict/cntr/tn_304_03_07b.jsp" , "CY로케이션관리" ) ;
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_07b.xml";
  let programId = "tn_304_03_07b";
  $c.win.openMenu($p, "CY로케이션관리", strUrl, programId, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// CY상하차진행현황 cfTabMenuUpdate
//-------------------------------------------------------------------------
scwin.f_openOnoffInfo = function () {
  //cfTabMenuUpdate( "/tn/op/transwrkindict/cntr/tn_304_03_06b.jsp" , "CY상하차진행현황" ) ;
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_06b.xml";
  let programId = "tn_304_03_06b";
  $c.win.openMenu($p, "CY상하차진행현황", strUrl, programId, {
    openAction: "exist"
  });
};
scwin.sbm_retrieve_submitDone = async function () {
  if ((await $c.gus.cfCheckCreateFlag($p)) == true) {
    await $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (ds_result.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      for (var i = 0; i <= ds_result.getRowCount(); i++) {
        scwin.f_EditTrue(i);
        //gr_result.setReadOnly("column","adjmClntNo",true);
      }
      totalRows.setValue(ds_result.getRowCount());
    }
    scwin.flag = true;
  }
};
scwin.imgClick = function () {
  scwin.f_openPopUp(ds_result.getCellData(ds_result.getRowPosition(), 'adjmClntNo'), '', 'T', 'F');
};
scwin.ed_crn_onkeyup = function (e) {
  ed_crn.setValue(e.key.toUpperCase());
};
scwin.ed_crn_oneditkeyup = function (info, e) {
  var oldv = info.newValue;
  ed_crn.setValue(oldv.toUpperCase());
};
scwin.gr_result_oneditend = function (rowIndex, columnIndex, value) {
  if (columnIndex == 4) {
    scwin.f_openPopUp(value, '', 'T', 'T');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_lobranCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPlCd',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_crn',style:'width: 150px;',ref:'data:dma_search.crn',allowChar:'a-z0-9A-Z','ev:oneditkeyup':'scwin.ed_crn_oneditkeyup',maxlength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_adjmClntNo',style:'width: 150px;',ref:'data:dma_search.adjmClntNo',allowChar:'a-z0-9A-Z',maxlength:'13'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px;  display:none;',id:'udc_adjmClntNo','ev:onclickEvent':'scwin.udc_adjmClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'후불 거래처',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_result',focusMode:'row',id:'gr_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',setCellInputTypeCustom:'true',rowStatusVisible:'true',readOnly:'true','ev:oneditend':'scwin.gr_result_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'소속</br>점소',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'점소명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'작업장',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'작업장명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'거래처</br>코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'CY여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'전자수납</br>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'사업자번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'담당자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'연락처',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'관리</br>시작일',width:'100',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'관리</br>종료일',width:'100',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'오전스캔가능',width:'140',colSpan:'2',rowSpan:'',sortable:'false',sortLabel:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'오후스캔가능',width:'140',colSpan:'2',rowSpan:'',sortable:'false',sortLabel:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'종료',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'종료',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',style:'',id:'adjmClntNo',value:'',displayMode:'label',imageClickFunction:'scwin.imgClick',readOnly:'false',allowChar:'0-9',maxLength:'6'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',style:'',id:'cyCoYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',style:'',id:'elecReceiptYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',emptyValue:'0',defaultValue:'0',readOnly:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntPersNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntTelNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mngStDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mngEdDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',viewTypeIconImage:'false',readOnly:'false',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scnAmStHm',inputType:'text',style:'',value:'',width:'70',readOnly:'false',displayFormat:'##:##',allowChar:'0-9',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scnAmEdHm',inputType:'text',style:'',value:'',width:'70',readOnly:'false',displayFormat:'##:##',allowChar:'0-9',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scnFmStHm',inputType:'text',style:'',value:'',width:'70',readOnly:'false',displayFormat:'##:##',allowChar:'0-9',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scnFmEdHm',inputType:'text',style:'',value:'',width:'70',readOnly:'false',displayFormat:'##:##',allowChar:'0-9',maxByteLength:'4'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',id:'btnInsertRow',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.delRow',cancelFunction:'scwin.f_Cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_link1',style:'',type:'button','ev:onclick':'scwin.f_openMcomOnoffInfo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당사상하차차량확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_link2',style:'',type:'button','ev:onclick':'scwin.f_openLocationInfo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로케이션관리'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_link3',style:'',type:'button','ev:onclick':'scwin.f_openOnoffInfo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상하차진행현황'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btm_delete',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})