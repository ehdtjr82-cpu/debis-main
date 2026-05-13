/*amd /ui/ac/co/budgetmgnt/co_303_01_03b.xml 19222 2cd5c2d15f1493f63deee48a80342281fe6263e89fb98dbc34cb95d88d5c29de */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pyCnt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempTaxDeductYn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'landCat',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotAcqAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr1',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr2',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLpr',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranBfFixedAsetNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLprStdDt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmtFcrc',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotArea',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo1',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgFixedAsetNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name34',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
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
  $c.gus.cfInitObjects($p, tbl_search, [ica_budgetYm, lc_costClsCd]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  lc_costClsCd.setSelectedIndex(-1);
  ica_budgetYm.setValue($c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6));
  ica_budgetYm.focus();
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
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
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
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
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
  let codeObj = paramArray.pCode;
  if (!codeObj.options) codeObj.options = {}; // hidVal을 위한 options 객체 생성

  await udc_budgetCtrlDeptInfo.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, $c.gus.cfGetValue($p, codeObj), "", pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
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
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = async function (inObj, inObj2) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if (await $c.gus.cfIsNull($p, inValue)) {
    console.log("실행");
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
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlDeptInfo";
  paramArray.pCode = ed_srchAcctDeptCd;
  paramArray.pName = ed_srchAcctDeptNm;
  paramArray.pAllSearchTF = 'T';
  paramArray.pWhere = "," + ica_budgetYm.getValue().trim() + "," + ed_coCd.getValue() + ",0,,1";
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
scwin.f_GetAcctClsCd_1 = function (costClsCd) {
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
scwin.f_GetAcctClsCd_2 = function (costClsCd) {
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
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_budgetYm, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  let data = {
    odiName: "co_303_01_03",
    reportName: "/ac/co/budgetmgnt/co_303_01_03.ozr",
    odiParam: {
      budgetYm: ica_budgetYm.getValue(),
      acctDeptCd: ed_srchAcctDeptCd.getValue(),
      acctClsCd_1: scwin.f_GetAcctClsCd_1(lc_costClsCd.getValue()),
      acctClsCd_2: scwin.f_GetAcctClsCd_2(lc_costClsCd.getValue())
    },
    viewerParam: {
      mode: "print"
    },
    formParam: {
      acctDeptNm: ed_srchAcctDeptNm.getValue()
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
scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent = async function (e) {
  if (await scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm)) {
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',id:'udc_dongbuGroupCompanyInfo',btnId:'btn_company',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHeadTitle:'회사코드,,,,,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupTitle:'회사조회,회사코드,법인명',refDataCollection:'dma_search',code:'coCd',objTypeName:'data',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_budgetYm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',validateOnInput:'true',placeholder:' ',editType:'focus',ref:'data:dma_search.budgetYm',validExp:'년월:yes:date=YYYYMM',title:'년월',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산통제부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',editTypeCode:'focus',refDataCollection:'dma_search',popupID:'',code:'acctDeptCd',validExpCode:'예산통제부서:yes:length=5',maxlengthName:'30',mandatoryName:'false',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_budgetCtrlDeptInfo_onclickEvent',allowCharCode:'0-9',codeId:'ed_srchAcctDeptCd',selectID:'retrieveBudgetCtrlDeptInfo',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupGridHeadTitle:'부서코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',validTitle:'예산통제부서',objTypeName:'data',nameId:'ed_srchAcctDeptNm',style:'',id:'udc_budgetCtrlDeptInfo','ev:onblurCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent',class:'',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',validExp:'비용구분:no',allOption:'',mandatory:'false',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:';display:;',id:'lc_costClsCd',class:' w150',objType:'data',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Search',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'예산실적집계표',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 원)',class:''}}]}]},{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''},E:[{T:3,text:'오즈불러오기'}]}]}]}]}]}]}]})