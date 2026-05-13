/*amd /ui/ac/co/stdinfomgnt/co_100_09_01b.xml 22839 917fbbcdcc729f061d046491226771c7cf543a4cd29042da9ee804b71b7aec21 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_varfixedCls',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_varfixedCls_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'budgetYr',name:'예산년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'varFixedClsCd',name:'변고정비 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_varfixedCls'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bizdom'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srchBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVarfixedCls',action:'/ac.co.stdinfomgnt.RetrieveVarfixedClassificationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_varfixedCls',target:'data:json,{"id":"ds_varfixedCls","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVarfixedCls_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveVarfixedCls',action:'/ac.co.stdinfomgnt.SaveVarfixedClassificationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_varfixedCls","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveVarfixedCls_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_resetBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_bizdom',target:'data:json,{"id":"ds_srchBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_resetBizdom_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO015",
    compID: "gr_varfixedCls:varFixedClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_ResetBizdom(dma_bizdom);
  ica_budgetYr.setValue($c.date.getServerDateTime($p, "yyyy"));
  ica_budgetYr.focus();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  $c.sbm.execute($p, sbm_retrieveVarfixedCls);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_varfixedCls.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["변고정비 구분정보"]));
    return;
  }
  for (let idx = 0; idx < ds_varfixedCls.getRowCount(); idx++) {
    if (ds_varfixedCls.getCellData(idx, "budgetYr") == "") {
      ds_varfixedCls.setCellData(idx, "budgetYr", ica_budgetYr.getValue());
    }
    if (ds_varfixedCls.getCellData(idx, "coCd") == "") {
      ds_varfixedCls.setCellData(idx, "coCd", ed_coCd.getValue());
    }
  }
  let ret = await $c.gus.cfValidate($p, [gr_varfixedCls]);
  if (!ret) {
    return;
  }
  for (let i = 0; i < ds_varfixedCls.getRowCount(); i++) {
    if (ds_varfixedCls.getRowStatus(i) == "C") {
      for (let j = 0; j < i; j++) {
        if (ds_varfixedCls.getCellData(j, "budgetYr") == ds_varfixedCls.getCellData(i, "budgetYr") && ds_varfixedCls.getCellData(j, "mgntAcctCd") == ds_varfixedCls.getCellData(i, "mgntAcctCd") && ds_varfixedCls.getCellData(j, "bizDomCd") == ds_varfixedCls.getCellData(i, "bizDomCd")) {
          await $c.win.alert($p, "변고정비 구분정보의 " + (i + 1) + "번 째 데이터에서 예산년도, 사업영역, 계정코드은(는) 중복될 수 없습니다.");
          gr_varfixedCls.setFocusedCell(i, "mgntAcctCd", true);
          return;
        }
      }
    }
  }
  if (ret) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_saveVarfixedCls);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let newRow = ds_varfixedCls.insertRow();
  ds_varfixedCls.setCellData(newRow, "budgetYr", ica_budgetYr.getValue());
  ds_varfixedCls.setCellData(newRow, "coCd", ed_coCd.getValue());
};

//-------------------------------------------------------------------------
// 계정팝업 (그리드용)
//-------------------------------------------------------------------------
scwin.f_OpenPopUp = async function (row, check) {
  ds_varfixedCls.setCellData(row, "acctNm", "");
  await udc_mgntAcctCdInfo.cfCommonPopUp(scwin.udc_mgntAcctCdInfo_callBackFunc, ds_varfixedCls.getCellData(row, "mgntAcctCd"), '', check, null, null, null, null, ",5,5,5,,4200000", null, null, null, null);
};
scwin.udc_mgntAcctCdInfo_callBackFunc = async function (rtnList) {
  // SET
  let row = gr_varfixedCls.getFocusedRowIndex();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_varfixedCls.setCellData(row, "mgntAcctCd", rtnList[0]);
    ds_varfixedCls.setCellData(row, "acctNm", rtnList[1]);
  } else {
    ds_varfixedCls.setCellData(row, "mgntAcctCd", "");
    ds_varfixedCls.setCellData(row, "acctNm", "");
  }
};

//-------------------------------------------------------------------------
// 변고정비구분 자동생성 팝업
//-------------------------------------------------------------------------
scwin.f_PupUpAutoCreation = function () {
  let data = {};
  let options = {};
  options.id = "co_100_09_02p";
  options.popupName = "변고정비구분 자동생성";
  data.standardBudgetYr = ica_budgetYr.getValue();
  data.coCd = ed_coCd.getValue();
  $c.win.openPopup($p, "/ui/ac/co/stdinfomgnt/co_100_09_02p.xml", options, data);
};

//-------------------------------------------------------------------------
// 사업영역 데이터셋을 Reset
//-------------------------------------------------------------------------
scwin.f_ResetBizdom = function (dataSet) {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveBizDomCdInfo2",
    param1: "",
    param2: "",
    param3: "1"
  };
  dataSet.setJSON(params);
  $c.sbm.execute($p, sbm_resetBizdom);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  let objGridName = gr_varfixedCls;
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let exportFileName = "변고정비등록_" + ica_budgetYr.getValue().trim() + "_" + lc_srchBizdom.getValue() + ".xlsx";
    gr_varfixedCls.setColumnVisible("num", false);
    gr_varfixedCls.setColumnVisible("month", false);
    const options = {
      fileName: exportFileName,
      sheetName: "변고정비등록"
    };
    await $c.data.downloadGridViewExcel($p, objGridName, options);
    gr_varfixedCls.setColumnVisible("num", true);
    gr_varfixedCls.setColumnVisible("month", true);
  }
};

//-------------------------------------------							
// 그리드 높이 늘리고 줄이기							
//-------------------------------------------							
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm]);
  scwin.f_SetDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetDefault = function () {
  ica_budgetYr.setValue($c.date.getServerDateTime($p, "yyyy"));
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
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.isStart == true) {
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};
scwin.sbm_saveVarfixedCls_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    ds_varfixedCls.reform();
  }
};
scwin.sbm_retrieveVarfixedCls_submitdone = async function (e) {
  let rowCnt = ds_varfixedCls.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.gr_varfixedCls_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_OpenPopUp(rowIndex, "F");
};
scwin.gr_varfixedCls_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_varfixedCls.getRowStatus(rowIndex) == "C") {
    gr_varfixedCls.setColumnReadOnly("mgntAcctCd", false);
    gr_varfixedCls.setColumnReadOnly("bizDomCd", false);
  } else {
    gr_varfixedCls.setColumnReadOnly("mgntAcctCd", true);
    gr_varfixedCls.setColumnReadOnly("bizDomCd", true);
  }
};
scwin.ds_varfixedCls_onrowpositionchange = function (info) {
  if (info.newRowIndex < 0) return;
  $c.gus.cfPrepareHidVal($p, this, info.newRowIndex, ["mgntAcctCd", "acctNm"]);
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
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.gr_varfixedCls_onviewchange = function (info) {
  if (gr_varfixedCls.getColumnID(info.colId) == "mgntAcctCd") {
    scwin.f_OpenPopUp(info.rowIndex, "T");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 12%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',class:'col8',codeId:'ed_coCd',mandatoryCode:'false',validExpCode:'회사코드:yes',allowCharCode:'0-9',UpperFlagCode:'1',nameId:'ed_coNm',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo',refDataCollection:'dma_varfixedCls',code:'coCd',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예산년도',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'form-control cal',id:'ica_budgetYr',style:'',editType:'focus',displayFormat:'yyyy',validateOnInput:'true',ref:'data:dma_varfixedCls.budgetYr',title:'예산년도'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업영역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchBizdom',ref:'data:dma_varfixedCls.bizDomCd',renderType:'',style:'',submenuSize:'auto',mandatory:'true',displayMode:'value delim label',chooseOptionLabel:'전체',title:'사업영역',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_srchBizdom'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'변고정비 구분현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{style:'',grp:'grd_section1',gridUpYn:'N',gridID:'gr_varfixedCls',id:'udc_topGrd',gridDownUserAuth:'X',gridDownFn:'scwin.f_Export',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_varfixedCls',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_varfixedCls',visibleRowNum:'16',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',validFeatures:'ignoreStatus=no','ev:ontextimageclick':'scwin.gr_varfixedCls_ontextimageclick','ev:oncellclick':'scwin.gr_varfixedCls_oncellclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_varfixedCls_onviewchange',rowStatusWidth:'20',gridName:'변고정비 구분정보'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'budgetYr',value:'예산년도',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'bizDomCd',value:'사업영역',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'mgntAcctCd',value:'계정코드',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'300',inputType:'text',id:'acctNm',value:'계정명',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'varFixedClsCd',value:'변고정비 구분',blockSelect:'false',displayMode:'label',class:'txt-red',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'budgetYr',displayMode:'label',hidden:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'select',id:'bizDomCd',blockSelect:'false',displayMode:'label',readOnly:'true',editModeEvent:'onclick',mandatory:'true',title:'사업영역'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_srchBizdom'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'textImage',id:'mgntAcctCd',blockSelect:'false',displayMode:'label',readOnly:'true',allowChar:'0-9',maxLength:'7',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',mandatory:'true',title:'계정코드'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'300',inputType:'text',id:'acctNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true',mandatory:'true',title:'계정명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'select',id:'varFixedClsCd',blockSelect:'false',displayMode:'label',editModeEvent:'onclick',viewType:'default',editModeEventIcon:'onclick',mandatory:'true',title:'변고정비 구분',sortable:'false'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_varfixedCls'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveMgntAcctCdInfo',codeId:'ed_mgntAcctCd',validTitle:'',nameId:'ed_mgntAcctNm',style:'width:%; height:px; ;visibility:hidden;',id:'udc_mgntAcctCdInfo',btnId:'btn_mgntAcctCd'}},{T:1,N:'w2:button',A:{style:'',id:'',label:'자동생성',class:'btn  white',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_PupUpAutoCreation'}},{T:1,N:'w2:button',A:{style:'',id:'btn_save',label:'저장',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]}]})