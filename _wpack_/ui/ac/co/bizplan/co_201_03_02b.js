/*amd /ui/ac/co/bizplan/co_201_03_02b.xml 24771 d253f913b6cdfc94283dd158ba76ef3301ca3610d4aa27b404a22a78e0de14dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planYr',name:'계획년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'presumeYm',name:'추정년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'investPlanClsNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befBefYyRsltsAmt',name:'전전년 실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyRsltsAmt',name:'1 -추정년월 이전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyPlanAmt',name:'추정년월 - 12월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYySum',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyPlanAmt',name:'금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.bizplan.RetrieveInvestmentPlanDepartmentEachCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVer',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_version',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVer_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.isStart = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.gus.cfTurnCreateFlag($p, true);
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
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchPlanYr, lc_version, ed_coCd, ed_coNm]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_srchPlanYr.setValue($c.date.getServerDateTime($p, "yyyy"));
  scwin.f_GetVersion();
  ed_srchAcctDeptCd.focus();
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ds_master.getRowCount() > 0 && ds_master.getRowIndexByStatus("CUD").length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) return;
  }
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  let presumeYm = scwin.f_GetPresumeYm();
  if (!presumeYm.length == 6) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, ["추정년월"]));
    return false;
  }
  scwin.f_SetGridFormat();
  dma_search.set("presumeYm", scwin.f_GetPresumeYm());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 버전정보를 구한다.
//-------------------------------------------------------------------------
scwin.f_GetVersion = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveVersionInfo",
    param1: ica_srchPlanYr.getValue().trim() + "00"
  };
  dma_version.setJSON(params);
  $c.sbm.execute($p, sbm_retrieveVer);
};

//-------------------------------------------------------------------------
// 최종 Ver을 설정
//-------------------------------------------------------------------------
scwin.f_SetFinalVer = function () {
  if (ds_version.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_version.getRowCount(); i++) {
    if (ds_version.getCellData(i, "col3") == DGlobalValue.TRUE) {
      index = i;
      break;
    }
  }
  lc_version.setSelectedIndex(index);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, pWinCloseTF) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  if (!codeObj.options) codeObj.options = {};
  await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, codeObj.getValue(), "", pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
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
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, inObj2) {
  let inValue = inObj.getValue();
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
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = async function (pWinCloseTF) {
  let paramArray = {};
  paramArray.pSelectID = "retrieveAcctDeptCdInfo";
  paramArray.pCode = ed_srchAcctDeptCd;
  paramArray.pName = ed_srchAcctDeptNm;
  paramArray.pWhere = ica_srchPlanYr.getValue().trim() + ",,,,,,,,," + ed_coCd.getValue();
  paramArray.pW = "410";
  await scwin.f_PopUp(paramArray, pWinCloseTF);
};

//-------------------------------------------------------------------------
// 그리드 포맷설정
//-------------------------------------------------------------------------
scwin.f_SetGridFormat = function () {
  let presumeYm = scwin.f_GetPresumeYm().substring(4, 6);
  let planYear = ica_srchPlanYr.getValue();
  gr_master.setHeaderValue("befBefYyRsltsAmt", planYear.toDate("YYYY").before(2).format("YYYY") + "년 실적");
  gr_master.setHeaderValue("befYy", planYear.toDate("YYYY").before(1).format("YYYY") + "년 추정");
  gr_master.setHeaderValue("befYyRsltsAmt", "1 - " + (Number(presumeYm) - 1) + " 월");
  gr_master.setHeaderValue("befYyPlanAmt", Number(presumeYm) + " - 12 월");
  gr_master.setHeaderValue("thisYy", planYear + "년 계획");
};

//-------------------------------------------------------------------------
// 추정년월을 반환
//-------------------------------------------------------------------------
scwin.f_GetPresumeYm = function () {
  let row = ds_version.getMatchedIndex("col1", lc_version.getValue());
  if (row.length < 1) {
    return "";
  } else {
    return ds_version.getCellData(row[0], "col5");
  }
};

//-------------------------------------------                         
// 그리드 데이터 엑셀로 다운                         
//-------------------------------------------  
scwin.f_runExcel = async function () {
  let totCnt = ds_master.getRowCount();
  let sheetTitle = "투자계획내역";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_master, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------                         
// 그리드 높이 늘리고 줄이기                         
//-------------------------------------------    
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.getHeight();
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.setHeight(intHeight + "px");
  }
};

// 자회사 회계 시스템 추가에 따른 설정 
scwin.f_setCompanyInfo = function () {
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

// 회사 입력 팝업 
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  if (!ed_coCd.options) ed_coCd.options = {};
  ed_coCd.options.hidVal = ed_coCd.getValue();
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
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
scwin.sbm_search_submitdone = async function (e) {
  totalRows.setValue(ds_master.getRowCount());
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    gr_master.focus();
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_acctDeptCdInfo_onclickEvent = async function (e) {
  scwin.f_deptPopUp('F');
};
scwin.sbm_retrieveVer_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm) == false) return;
  scwin.f_deptPopUp('T');
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.ica_srchPlanYr_onblur = function (e) {
  scwin.f_GetVersion();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',codeId:'ed_coCd',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',selectID:'retrieveDongbuGroupCompanyInfo',popupGridHeadTitle:'회사코드,,,,,회사명',popupTitle:'회사조회,회사코드,법인명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'예산년도 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_srchPlanYr',class:'',calendarValueType:'year',objType:'data',mandatory:'true',validExp:'예산년도:yes:date=YYYY',editType:'focus',placeholder:' ',displayFormat:'yyyy',validateOnInput:'true',ref:'data:dma_search.planYr',title:'예산년도','ev:onblur':'scwin.ica_srchPlanYr_onblur',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'버전 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 130px;',allOption:'',id:'lc_version',class:'',direction:'auto',validExp:'버전:yes',tabIndex:'-1',mandatory:'true',ref:'data:dma_search.ver',title:'버전'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',class:'col7',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',editTypeCode:'focus','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',id:'udc_acctDeptCdInfo',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'30',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'부서:yes:length=5',validTitle:'부서',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'lc_clsCd',objType:'data',ref:'data:dma_search.clsCd',style:'width: 80px;',submenuSize:'auto',title:'구분',validExp:'구분:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'투자계획내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',id:'udc_topGrd',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_master',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_master',visibleRowNum:'14',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',editModeEvent:'onclick',editModeEventIcon:'onclick',columnMove:'true',dataDragSelectAutoScroll:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'160',inputType:'text',id:'investPlanClsNm',value:'구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'150',inputType:'text',id:'befBefYyRsltsAmt',value:'전전년 실적',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'3',removeBorderStyle:'false',width:'210',inputType:'text',id:'befYy',value:'전년 추정',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'thisYy',value:'당년 계획',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'befYyRsltsAmt',value:'1 -추정년월 이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'befYyPlanAmt',value:'추정년월 - 12월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'befYySum',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'thisYyPlanAmt',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'160',inputType:'text',id:'investPlanClsNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'150',inputType:'text',id:'befBefYyRsltsAmt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'150',inputType:'text',id:'befYyRsltsAmt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'150',inputType:'text',id:'befYyPlanAmt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'befYySum',displayMode:'label',dataType:'number',expression:'Number(display("befYyRsltsAmt")) + Number(display("befYyPlanAmt"))',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',id:'thisYyPlanAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column30',displayMode:'label',expression:'sum("befBefYyRsltsAmt")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column29',displayMode:'label',expression:'sum("befYyRsltsAmt")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column28',displayMode:'label',expression:'sum("befYyPlanAmt")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column27',displayMode:'label',expression:'sum("befYySum")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column26',displayMode:'label',expression:'sum("thisYyPlanAmt")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 백만원)',class:''}}]}]}]}]}]}]}]})