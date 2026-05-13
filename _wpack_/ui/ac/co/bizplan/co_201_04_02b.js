/*amd /ui/ac/co/bizplan/co_201_04_02b.xml 25432 8233531a0931fd5654f1918115bb6180e05a645e998592ebcf09e4f6cc9e4501 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staffPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchCd',name:'상위부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd2',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm2',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdPlan01',name:'관리직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdPlan02',name:'일반직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdPlan03',name:'운영직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdPlan04',name:'사무직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdPlan05',name:'현장직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdDcsn01',name:'관리직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdDcsn02',name:'일반직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdDcsn03',name:'운영직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdDcsn04',name:'사무직',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occpgrdDcsn05',name:'현장직',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchStaffPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYm',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'ver',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'clsCd',name:'name3',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coCd',name:'name4',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchStaffPlan',action:'/ac.co.bizplan.RetrieveStaffPlanControlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchStaffPlan","key":"IN_DS1"},{"id":"ds_staffPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_staffPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchStaffPlan_submitdone','ev:submiterror':'scwin.sbm_searchStaffPlan_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVer',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_version',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVer_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역 변수
//-------------------------------------------------------------------------
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.G_acctDeptCd = "";
scwin.G_acctDeptNm = "";
scwin.G_empNo = "";
scwin.G_empNm = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  	
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)	
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;
scwin.fromDate = ""; // 작업날짜
scwin.txtCoClsCd = ""; // 회사구분 히든 값
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.gus.cfDisableKey($p);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  ica_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));
  scwin.fromDate = ica_FromDate;
  scwin.f_LoadVer();
  acb_clsCd.setSelectedIndex(0);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_FromDate, acb_version, acb_clsCd]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_searchStaffPlan);
};

//-------------------------------------------------------------------------
// Ver정보를 가져온다.
//-------------------------------------------------------------------------
scwin.f_LoadVer = function () {
  // 작업구분코드 및 날짜 세팅함수 호출
  scwin.f_setWrkNoFromDate();
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveVersionInfo",
    param1: scwin.fromDate
  };

  //데이터셋에 정보설정
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
  acb_version.setSelectedIndex(index);
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = function () {
  scwin.fromDate = ica_FromDate.getValue().trim() + "00";
};

/**
 * 엑셀 다운로드
 */
scwin.f_runExcel = async function () {
  let totCnt = ds_staffPlan.getRowCount();
  let sheetTitle = "인원계획조정내역";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_staffPlan, options);
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
scwin.f_setCompanyInfo = async function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//회사 입력 팝업
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
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
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};
scwin.sbm_searchStaffPlan_submitdone = async function (e) {
  totalRows.setValue(ds_staffPlan.getRowCount());
  if (ds_staffPlan.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
};
scwin.sbm_retrieveVer_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.ica_FromDate_onblur = function (e) {
  scwin.f_LoadVer();
};
scwin.btn_reset_onclick = function (e) {
  $c.gus.cfInitObjects($p, table2, [ica_FromDate, acb_version, acb_clsCd, ed_coCd, ed_coNm]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'table2',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp1',style:'',codeId:'ed_coCd',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo',selectID:'retrieveDongbuGroupCompanyInfo',code:'coCd',name:'coNm','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHeadTitle:'회사코드,,,,,회사명',popupTitle:'회사조회,회사코드,법인명',refDataCollection:'dma_searchStaffPlan',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_FromDate',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy',validateOnInput:'true',editType:'select',placeholder:' ',ref:'data:dma_searchStaffPlan.planYm',title:'예산년도','ev:onblur':'scwin.ica_FromDate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_version',search:'start',style:'width: 130px;',submenuSize:'auto',mandatory:'true',disabled:'false',allowChar:'0-9',ref:'data:dma_searchStaffPlan.ver',allOption:'',chooseOption:'',displayMode:'value delim label',title:'버전'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'w2:label',A:{ref:'col4'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_clsCd',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_searchStaffPlan.clsCd',disabled:'false',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사업부별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지점별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인원계획내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridID:'gr_staffPlan',id:'udc_topGrd',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_staffPlan',id:'gr_staffPlan',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'인원계획조정조회',userAttr2:'ignoreStatus=no',columnMove:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'280',value:'구분',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'계획',width:'350',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'column57',value:'확정',displayMode:'label',colSpan:'5',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'branchCd',value:'상위부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'branchNm',value:'구분명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'branchNm2',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'branchCd2',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdPlan01',value:'관리직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdPlan02',value:'일반직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdPlan03',value:'운영직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdPlan04',value:'사무직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdPlan05',value:'현장직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn01',value:'관리직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn02',value:'일반직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn03',value:'운영직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn04',value:'사무직',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn05',value:'현장직',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'branchCd',inputType:'text',removeBorderStyle:'false',width:'100',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'branchNm',inputType:'text',removeBorderStyle:'false',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'branchNm2',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'branchCd2',inputType:'text',removeBorderStyle:'false',width:'100',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdPlan01',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdPlan02',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdPlan03',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdPlan04',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdPlan05',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn01',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn02',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn03',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn04',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdDcsn05',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'branchNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label',value:'소계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column70',displayMode:'label',expression:'SUM("occpgrdPlan01")',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column69',displayMode:'label',expression:'SUM("occpgrdPlan02")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column68',displayMode:'label',expression:'SUM("occpgrdPlan03")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column67',displayMode:'label',expression:'SUM("occpgrdPlan04")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column66',displayMode:'label',expression:'SUM("occpgrdPlan05")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column65',displayMode:'label',expression:'SUM("occpgrdDcsn01")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column64',displayMode:'label',expression:'SUM("occpgrdDcsn02")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column63',displayMode:'label',expression:'SUM("occpgrdDcsn03")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column62',displayMode:'label',expression:'SUM("occpgrdDcsn04")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column61',displayMode:'label',expression:'SUM("occpgrdDcsn05")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdPlan01")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdPlan02")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdPlan03")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdPlan04")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdPlan05")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdDcsn01")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column56',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdDcsn02")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column52',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdDcsn03")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column44',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdDcsn04")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'SUM("occpgrdDcsn05")',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})