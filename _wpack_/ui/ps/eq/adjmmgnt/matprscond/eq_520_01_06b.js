/*amd /ui/ps/eq/adjmmgnt/matprscond/eq_520_01_06b.xml 29275 0da0a980f1b6c31bee82b14957283e26027ff53f3b62711baaa9efe937a04869 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ym',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqModelCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq450',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAmt',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.matprscond.RetrieveMonthEquipmentModelNameEachCategoryEachPartsStockPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq450","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq450","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_fixWrkPl',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.outDt = WebSquare.date.getCurrentServerDate().substring(0, 6);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }];
  $c.data.setGauceUtil($p, param);
  const codeOptions = [{
    grpCd: "EQ017",
    compID: "gr_eq450:inClsCd,lc_inClsCd"
  }, {
    grpCd: "EQ005",
    compID: "lc_catCd"
  }
  // { grpCd : "ZZ205", compID : "lc_homeClsCd", opt : {'range': '1,EQ'}  },
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  chb_printCheck.hide();
  chb_previewCheck.hide();
  ica_inYm.setValue(scwin.outDt);
  scwin.f_defaultValue();
};
scwin.ondataload = function (e) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_eqModelCd, ed_eqModelNm, ed_clntNo, ed_clntNm]);
  lc_inClsCd.index = 0; //입고구분:전체
  udc_fixClntList.setDisabled(true);
  $c.gus.cfEnableObj($p, ed_clntNo, false);
  $c.gus.cfEnableObj($p, ed_clntNm, false);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); //정비소속구분코드
  if (scwin.userInfo.getEqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq450, null);
  scwin.lc_homeClsCd_onviewchange();
  scwin.lc_inClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [ica_inYm, lc_homeClsCd, lc_fixWrkPlCd]))) return;

  // ds_search.setUseChangeInfo("false");
  $c.sbm.execute($p, sbm_retrieve);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  sbm_ds_fixWrkPl.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + homeClsCd;
  $c.sbm.execute($p, sbm_ds_fixWrkPl);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; //공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 장비모델 팝업	
      rtnList = udc_eqModelList.cfCommonPopUp(scwin.udc_eqModelList_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "장비모델,모델코드,모델명");

      // cfSetReturnValue(rtnList, ed_eqModelCd, ed_eqModelNm);
      break;
    case 2:
      // 거래처 팝업			
      rtnList = udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");

      // cfSetReturnValue(rtnList, ed_clntNo, ed_clntNm);  			
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_eqModelList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_eqModelCd.setValue(rtnList[0]);
    ed_eqModelNm.setValue(rtnList[1]);
    ed_eqModelCd.options.hidVal = rtnList[0];
    ed_eqModelNm.options.hidVal = rtnList[1];
  } else {
    ed_eqModelCd.setValue("");
    ed_eqModelNm.setValue("");
    ed_eqModelCd.options.hidVal = "";
    ed_eqModelNm.options.hidVal = "";
  }
};
scwin.udc_fixClntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
///let PGM_ID ="eq_520_01_06b.jsp";

scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, ica_inYm]))) return;

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "/ps/eq/adjmmgnt/matprscond/eq_520_01_06.ozr",
    odiName: "eq_520_01_06",
    odiParam: {
      homeClsCd: lc_homeClsCd.getValue(),
      homeClsNm: $c.win.getComboLabel($p, lc_homeClsCd),
      wrkPlCd: lc_fixWrkPlCd.getValue(),
      wrkPlNm: $c.win.getComboLabel($p, lc_fixWrkPlCd),
      ym: ica_inYm.getValue(),
      inClsCd: lc_inClsCd.getValue(),
      inClsNm: $c.win.getComboLabel($p, lc_inClsCd),
      clntNo: ed_clntNo.getValue(),
      clntNm: ed_clntNm.getValue(),
      eqModelCd: ed_eqModelCd.getValue(),
      eqModelNm: ed_eqModelNm.getValue(),
      catCd: lc_catCd.getValue(),
      catNm: $c.win.getComboLabel($p, lc_catCd)
    },
    viewerParam: {
      useprogressbar: false
    },
    formParam: {
      //
    }
  };
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ps/eq/adjmmgnt/matprscond/eq_520_01_06.ozr", odiParam, viewerParam, formParam);
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//------------------------------------------------------------------------
// script
//------------------------------------------------------------------------  
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  // cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_eq450.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  ;
};
scwin.sbm_ds_fixWrkPl_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_fixWrkPl.sort("code", 0);
  lc_fixWrkPlCd.setSelectedIndex(0);
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
scwin.lc_inClsCd_onviewchange = function (info) {
  if (lc_inClsCd.getSelectedIndex() == 3) {
    udc_fixClntList.setDisabled(false);
    $c.gus.cfEnableObj($p, ed_clntNo, true);
    $c.gus.cfEnableObj($p, ed_clntNm, true);
  } else {
    udc_fixClntList.setDisabled(true);
    $c.gus.cfEnableObj($p, ed_clntNo, false);
    $c.gus.cfEnableObj($p, ed_clntNm, false);

    //거래처 Clear시키기
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_fixClntList_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2);
  } else {
    ed_clntNm.setValue("");
  }
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  if (ed_clntNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 2, false);
  } else {
    ed_clntNo.setValue("");
  }
};
scwin.udc_eqModelList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqModelCd.getValue(), ed_eqModelNm.getValue(), 'F', 'T');
};
scwin.udc_eqModelList_onblurCodeEvent = function (e) {
  if (ed_eqModelCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqModelCd, ed_eqModelNm, 1);
  } else {
    ed_eqModelNm.setValue("");
  }
};
scwin.udc_eqModelList_onviewchangeNameEvent = function (info) {
  if (ed_eqModelNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqModelNm, ed_eqModelCd, 1, false);
  } else {
    ed_eqModelCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq450',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',mandatory:'true','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_search.homeClsCd',title:'소속'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPlCd',mandatory:'true',title:'작업장',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_inClsCd_onviewchange',chooseOptionLabel:'전체',ref:'data:dma_search.inClsCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',refDataCollection:'dma_search',code:'clntCd',id:'udc_fixClntList','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_inYm',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM',ref:'data:dma_search.ym',title:'년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.catCd',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_eqModelCd',nameId:'ed_eqModelNm',popupID:'',selectID:'retrieveEqModelList',style:'width: 340px;',validTitle:'',refDataCollection:'dma_search',code:'eqModelCd',id:'udc_eqModelList',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_eqModelList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_eqModelList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqModelList_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월장비 모델명별 계통별 부품재고 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName" : "월장비모델명별계통별부품재고현황.xlsx", "sheetName" : "월장비모델명별계통별부품재고현황"  ,"type" : "1", "useSubTotal" : "true" }',gridID:'gr_eq450',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq450',focusMode:'cell',id:'gr_eq450',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'장비모델코드',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'장비모델명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'계통코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'계통',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'부품코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'부품명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'단위',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'입고</br>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catCd',value:'',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'',width:'70',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inClsCd',inputType:'select',style:'',value:'',width:'70',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outUpr',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'eqModelCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'소계',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',expression:'SUM("stockQty")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',expression:'SUM("outUpr")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'SUM("stockAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column65',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'합계',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("stockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("outUpr")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("stockAmt")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_oz',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'visibility: hidden;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hid1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'visibility: hidden;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hid2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]})