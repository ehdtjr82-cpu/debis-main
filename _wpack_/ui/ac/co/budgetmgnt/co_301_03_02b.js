/*amd /ui/ac/co/budgetmgnt/co_301_03_02b.xml 18649 304169b3e11c8f416c3920a8a267a15417ff7c76379e9d535b88945f976464ad */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYr',name:'예산년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'예산통제부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'비용구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsCMD.do',method:'post',mediatype:'application/json',ref:'IN_DS1=ds_search,O:OUT_DS1=ds_master',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.COST_CLS_PCOST = ACConstants.COST_CLS_PCOST;
scwin.COST_CLS_SALE_MGNT = ACConstants.COST_CLS_SALE_MGNT;
scwin.COST_CLS_PCOST_SALE_MGNT = ACConstants.COST_CLS_PCOST_SALE_MGNT;
scwin.ACCT_PREFIX_PCOST = ACConstants.ACCT_PREFIX_PCOST;
scwin.ACCT_PREFIX_SALE_MGNT = ACConstants.ACCT_PREFIX_SALE_MGNT;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.isStart = false;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI042",
    compID: "lc_costClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  lc_costClsCd.hide();
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_budgetYr, lc_costClsCd]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  lc_costClsCd.setSelectedIndex(-1);
  ica_budgetYr.setValue($c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6));
  ica_budgetYr.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1]; // 전역변수에 회사구분 저장
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, pWinCloseTF) {
  let code = $c.gus.cfIsNull($p, paramArray.pCode) ? "" : paramArray.pCode;
  let name = $c.gus.cfIsNull($p, paramArray.pName) ? "" : paramArray.pName;
  await udc_budgetCtrlDeptInfo.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, code, name, pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.udc_budgetCtrlDeptInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_srchAcctDeptCd.setValue(rtnList[0]);
      ed_srchAcctDeptCd.options.hidVal = rtnList[0];
      ed_srchAcctDeptNm.setValue(rtnList[1]);
    }
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
    ed_srchAcctDeptNm.setValue("");
  }
  if (rtnList != null && rtnList[0] != "N/A") {
    lc_costClsCd.setValue(rtnList[2]);
  }
};

//-------------------------------------------------------------------------
// cfSetValue 확장. Object의 값과 Hidden Value를 설정한다.
//-------------------------------------------------------------------------
scwin.f_SetValueEx = function (inObj, inVal) {
  $c.gus.cfSetValue($p, inObj, inVal);
  $c.gus.cfSetHiddenValue($p, inObj, inVal);
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, inObj2) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    inObj2.setValue("");
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

//-------------------------------------------------------------------------
// 조회 귀속부서코드 팝업
//-------------------------------------------------------------------------
scwin.f_srchDeptPopUp = async function (pWinCloseTF) {
  let codeObj = ed_srchAcctDeptCd;
  let nameObj = ed_srchAcctDeptNm;
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlDeptInfo";
  paramArray.pCode = $c.gus.cfGetValue($p, codeObj);
  paramArray.pW = "410";
  paramArray.pAllSearchTF = 'T';
  paramArray.pWhere = "," + ica_budgetYr.getValue().trim() + "," + ed_coCd.getValue() + ",0,,1";
  await scwin.f_PopUp(paramArray, pWinCloseTF);
};

//-------------------------------------------------------------------------
// 콤보데이터 검증
//-------------------------------------------------------------------------
scwin.f_CheckComboData = async function (objCombo, comboTitle) {
  if (objCombo.getSelectedIndex() == -1 && !$c.gus.cfIsNull($p, objCombo.getValue())) {
    objCombo.setSelectedIndex(objCombo.getIndexByValue(objCombo.getValue()));
    if (objCombo.getSelectedIndex() == -1) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, [comboTitle + "코드"]));
      objCombo.focus();
    }
  }
};

//-------------------------------------------------------------------------
// 원가, 판관비 구분 계정레벨을 구한다.
//-------------------------------------------------------------------------
scwin.f_GetAcctPrefix_1 = function (costClsCd) {
  switch (costClsCd) {
    case scwin.COST_CLS_PCOST:
      return scwin.ACCT_PREFIX_PCOST;
    //판관비
    case scwin.COST_CLS_SALE_MGNT:
      return scwin.ACCT_PREFIX_SALE_MGNT;
    //원가
    case scwin.COST_CLS_PCOST_SALE_MGNT:
      return scwin.ACCT_PREFIX_PCOST;
    //원가+판관비
    default:
      return '';
  }
};

//-------------------------------------------------------------------------
// 원가, 판관비 구분 계정레벨을 구한다.
//-------------------------------------------------------------------------
scwin.f_GetAcctPrefix_2 = function (costClsCd) {
  switch (costClsCd) {
    case scwin.COST_CLS_PCOST:
      return scwin.ACCT_PREFIX_PCOST;
    //판관비
    case scwin.COST_CLS_SALE_MGNT:
      return scwin.ACCT_PREFIX_SALE_MGNT;
    //원가    
    case scwin.COST_CLS_PCOST_SALE_MGNT:
      return scwin.ACCT_PREFIX_SALE_MGNT;
    //원가+판관비
    default:
      return '';
  }
};

// 오즈 검색 후 결과를 화면 하단에 표시
scwin.f_Search = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_budgetYr, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  let data = {
    odiName: "co_301_03_02",
    reportName: "/ac/co/budgetmgnt/co_301_03_02.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      CO_CD: ed_coCd.getValue(),
      START_DATE: $c.date.getServerDateTime($p, "yyyyMMdd"),
      END_DATE: $c.date.getServerDateTime($p, "yyyyMMdd"),
      P_ACCT_DEPT_CD: dma_search.get("acctDeptCd"),
      budgetYr: ica_budgetYr.getValue(),
      quartYy: lc_quartYy.getValue(),
      acctDeptCd: ed_srchAcctDeptCd.getValue(),
      acctPrefix_1: scwin.f_GetAcctPrefix_1(lc_costClsCd.getValue()),
      acctPrefix_2: scwin.f_GetAcctPrefix_2(lc_costClsCd.getValue())
    },
    viewerParam: {
      mode: "print"
    },
    formParam: {
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      quartYyNm: $c.win.getComboLabel($p, lc_quartYy)
    }
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
scwin.sbm_search_submitdone = async function (e) {
  totalRows1.setValue(ds_master.getRowCount());
  totalRows2.setValue(0);
  if (ds_master.getRowCount() == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  }
};
scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm)) {
    scwin.f_srchDeptPopUp('T');
  }
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_budgetCtrlDeptInfo_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp('F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',nameId:'ed_coNm',id:'udc_dongbuGroupCompanyInfo',objTypeName:'data',btnId:'btn_company','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',selectID:'retrieveDongbuGroupCompanyInfo',popupGridHeadTitle:'회사코드,,,,,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupTitle:'회사조회,회사코드,법인명','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_budgetYr',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy',placeholder:' ',editType:'focus',validateOnInput:'true',ref:'data:dma_search.budgetYr',title:'년도',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'분기 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'w85',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_quartYy',ref:'',renderType:'',style:'',submenuSize:'auto',displayMode:'value delim label',title:'분기'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1분기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2분기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3분기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4분기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산통제부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',editTypeCode:'focus',refDataCollection:'dma_search',popupID:'',code:'acctDeptCd',validExpCode:'예산통제부서:yes:length=5',maxlengthName:'30',mandatoryName:'false',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_budgetCtrlDeptInfo_onclickEvent',allowCharCode:'0-9',codeId:'ed_srchAcctDeptCd',selectID:'retrieveBudgetCtrlDeptInfo',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupGridHeadTitle:'부서코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',validTitle:'예산통제부서',objTypeName:'data',nameId:'ed_srchAcctDeptNm',style:'',id:'udc_budgetCtrlDeptInfo','ev:onblurCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent',class:'',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'false',validExp:'비용구분:no',allOption:'false',mandatory:'false',ref:'data:dma_search.costClsCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:';display:;',id:'lc_costClsCd',class:'form-control w150',objType:'data',direction:'auto'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Search',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'예산배정표',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 원)',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'ozFrame',class:'ozWrap'},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''},E:[{T:3,text:'오즈불러오기'}]}]}]}]}]}]}]})