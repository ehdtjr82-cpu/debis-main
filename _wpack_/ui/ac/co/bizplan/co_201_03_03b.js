/*amd /ui/ac/co/bizplan/co_201_03_03b.xml 24061 fd0ab3b6cf68a34f4dda24b4607af4f5db1a00335a9b65af80f2198cd5ac6975 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'ver',name:'버전'}},{T:1,N:'w2:key',A:{dataType:'text',id:'planYr',name:'계획년도'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_version',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name4'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'name3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'investPlanClsNm',name:'계정과목'}},{T:1,N:'w2:column',A:{dataType:'date',id:'planYm',name:'년월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'planSummary',name:'내역'}},{T:1,N:'w2:column',A:{dataType:'number',id:'planQty',name:'수량'}},{T:1,N:'w2:column',A:{dataType:'number',id:'priority',name:'순위'}},{T:1,N:'w2:column',A:{id:'planAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col11',name:'년월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnSummary',name:'내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnAmt',name:'금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ac.co.bizplan.RetrieveInvestmentPlanControlCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',id:'sbm_search',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',replace:'',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVer_submitdone','ev:submiterror':'',id:'sbm_retrieveVer',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_version',replace:'',target:'data:json,{"id":"ds_version","key":"GAUCE"}',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
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
  if (ds_master.getRowCount() > 0 && ds_master.getRowIndexByStatus('CUD').length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) return;
  }
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
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
scwin.f_IsPopUp = function (inObj, ...pairObjs) {
  let inValue = inObj.getValue();
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      pairObjs[i].setValue("");
    }
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
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  let colCount = gr_master.getTotalCol();
  let sheetName = "투자계획조정조회";
  if (ds_master.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return false;
  }
  const options = {
    fileName: "투자계획조정조회_" + ".xlsx",
    sheetName: sheetName,
    startRowIndex: 3,
    startColumnIndex: 0,
    columnMove: true,
    type: 1
  };
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: sheetName,
    textAlign: "center",
    fontSize: 18,
    drawBorder: false,
    color: "black",
    backgroundColor: "white"
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
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
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.isStart = true;
  scwin.f_PopUpCompanyInfo('T');
};

// 회사 입력 팝업
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
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
scwin.sbm_retrieveVer_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_acctDeptCdInfo_onclickEvent = async function (e) {
  scwin.f_deptPopUp('F');
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 50px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_coCd',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo',selectID:'retrieveDongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHeadTitle:'회사코드,,,,,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupTitle:'회사조회,회사코드,법인명','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_srchPlanYr',style:'',objType:'data',validExp:'예산년도:yes:date=YYYY',mandatory:'true',editType:'focus',placeholder:' ',displayFormat:'yyyy',validateOnInput:'true',ref:'data:dma_search.planYr',title:'예산년도','ev:onblur':'scwin.ica_srchPlanYr_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'width: 130px;',submenuSize:'auto',mandatory:'true',validExp:'버전:yes',ref:'data:dma_search.ver',title:'버전'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_srchAcctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'focus',nameId:'ed_srchAcctDeptNm',maxlengthName:'30',mandatoryName:'true',validExpCode:'부서:yes:length=5',objTypeCode:'data',objTypeName:'data',id:'udc_acctDeptCdInfo',selectID:'retrieveAcctDeptCdInfo',code:'acctDeptCd',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',mandatoryCode:'true',validTitle:'부서',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'투자계획 조정내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',id:'udc_topGrd',gridDownFn:'scwin.f_GridToExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:ds_master',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_master',visibleRowNum:'14',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',editModeEvent:'onclick',columnMove:'true',dataDragSelectAutoScroll:'true',columnMoveWithFooter:'true',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'150',inputType:'text',id:'acctDeptNm',value:'부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'150',inputType:'text',id:'investPlanClsNm',value:'계정과목',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'5',removeBorderStyle:'false',width:'350',inputType:'text',id:'column10',value:'계획',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'4',width:'280',inputType:'text',id:'column13',value:'조정',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'plan',value:'년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'planSummary',value:'내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'planQty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'priority',value:'순위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'planAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'plan2',value:'년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dcsnSummary',value:'내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnQty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnAmt',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'investPlanClsNm',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'calendar',id:'planYm',blockSelect:'false',displayMode:'label',calendarValueType:'yearMonth',displayFormat:'yyyy/MM'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'140',inputType:'text',id:'planSummary',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'planQty',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'priority',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'planAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'col11',displayMode:'label',expression:'display("planYm").substr(0, 4)+ "/" +display("planYm").substr(4, 2)',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'dcsnSummary',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'dcsnQty',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'dcsnAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column48',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column44',displayMode:'label',expression:'sum("planQty")',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column42',displayMode:'label',expression:'sum("planAmt")',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column38',displayMode:'label',expression:'sum("dcsnAmt")',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 백만원)',class:''}}]}]}]}]}]}]}]})