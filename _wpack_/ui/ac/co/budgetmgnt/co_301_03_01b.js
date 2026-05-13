/*amd /ui/ac/co/budgetmgnt/co_301_03_01b.xml 20922 ee82b137d826a07fb2b6c88775a22986209a2438e8bd84f00a0722e9139dd622 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산년월(시작)',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'budgetYmTo',name:'예산년월(까지)',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'통제기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'고정자산번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'budgetReduceRt',name:'name5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'budgetReduceAmt',name:'name6',dataType:'number'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'name7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'yearAmt',name:'name8',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.budgetmgnt.RetrieveBudgetAssignListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.gus.cfDisableKey($p);
  const codeOptions = [{
    grpCd: "CO001",
    compID: "lc_srchCntlUnitClsCd,gr_master:cntlUnitClsCd"
  },
  // 셀렉트
  {
    grpCd: "FI042",
    compID: "lc_costClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  let cnt = dlt_commonCodeCO001.getRowCount();
  for (let i = 0; i < cnt; i++) {
    let cdNm = dlt_commonCodeCO001.getCellData(i, "cdNm");
    if (cdNm == "") {
      dlt_commonCodeCO001.removeRow(i);
    }
  }
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
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  ed_srchBudgetYm.setValue($c.date.getServerDateTime($p, "yyyy") + "01");
  ed_srchBudgetYmTo.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ed_srchBudgetYm.focus();
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_srchBudgetYm, ed_srchBudgetYmTo, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  if (ed_srchBudgetYm.getValue().substring(0, 4) != ed_srchBudgetYmTo.getValue().substring(0, 4)) {
    await $c.win.alert($p, "조회기간의 년도가 다릅니다.");
    ed_srchBudgetYm.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_srchBudgetYm.getValue() + "01", ed_srchBudgetYmTo.getValue() + "01")) {
    await $c.win.alert($p, "예산년월의 범위가 잘못되었습니다.");
    ed_srchBudgetYm.focus();
    return;
  }
  let ret2 = await $c.gus.cfValidate($p, [ed_srchAcctDeptCd]);
  if (!ret2) {
    return false;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
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
  //SET
  if (rtnList !== null) {
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

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, pAllSearchTF) {
  let code = $c.gus.cfIsNull($p, paramArray.pCode) ? "" : $c.gus.cfGetValue($p, paramArray.pCode);
  await udc_budgetCtrlDeptInfo.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, code, "", pAllSearchTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.udc_budgetCtrlDeptInfo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_srchAcctDeptCd, ed_srchAcctDeptNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    lc_costClsCd.setValue(rtnList[2]);
  }
};

//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = async function (pAllSearchTF) {
  let codeObj = ed_srchAcctDeptCd;
  let nameObj = ed_srchAcctDeptNm;
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlDeptInfo";
  paramArray.pCode = codeObj;
  paramArray.pName = nameObj;
  paramArray.pW = "410";
  paramArray.pAllSearchTF = 'T';
  paramArray.pWhere = ",," + ed_coCd.getValue();
  await scwin.f_PopUp(paramArray, pAllSearchTF);
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------	
scwin.f_runExcel = async function () {
  let totCnt = ds_master.getRowCount();
  let sheetTitle = "예산배정내역";
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
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_budgetCtrlDeptInfo_onclickEvent = async function (e) {
  scwin.f_deptPopUp('T');
};
scwin.sbm_search_submitdone = async function (e) {
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    gr_master.focus();
  }
};
scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent = function (e) {
  if (ed_srchAcctDeptCd.getValue() != "") {
    scwin.f_deptPopUp('T');
  } else {
    ed_srchAcctDeptNm.setValue("");
  }
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',id:'udc_dongbuGroupCompanyInfo',objTypeName:'data',btnId:'btn_company',code:'coCd',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHeadTitle:'회사코드,,,,,회사명',class:'col7',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',popupTitle:'회사조회,회사코드,법인명','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'budgetYm',style:'',id:'udc_fromToCalendar1',refEdDt:'budgetYmTo',refDataMap:'dma_search',edFromId:'ed_srchBudgetYm',objTypeFrom:'data',mandatoryFrom:'true',objTypeBtn:'data',edToId:'ed_srchBudgetYmTo',mandatoryTo:'true',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예산통제기준 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control col7',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchCntlUnitClsCd',style:'width:150px',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.cntlUnitClsCd',displayMode:'value delim label',visibleRowNum:'20',sortOption:'value'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산통제부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_srchAcctDeptCd',id:'udc_budgetCtrlDeptInfo',mandatoryCode:'true',validExpCode:'예산통제부서:yes:length=5',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'focus',nameId:'ed_srchAcctDeptNm',maxlengthName:'30',objTypeName:'data',mandatoryName:'true',selectID:'retrieveBudgetCtrlDeptInfo','ev:onclickEvent':'scwin.udc_budgetCtrlDeptInfo_onclickEvent',popupGridHeadTitle:'부서코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',code:'acctDeptCd','ev:onblurCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validTitle:'예산통제부서'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_costClsCd',style:';display:none;',submenuSize:'auto',mandatory:'false',objType:'data',validExp:'비용구분:no',ref:'data:dma_search.costClsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'예산배정내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_master',id:'udc_topGrd',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataDragSelectAutoScroll:'true',columnMove:'true',columnMoveWithFooter:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctCd',inputType:'text',removeBorderStyle:'false',width:'100',value:'계정코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'190',value:'계정명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntlUnitClsCd',inputType:'text',removeBorderStyle:'false',width:'100',value:'통제기준'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'assgnAmt',inputType:'text',removeBorderStyle:'false',width:'120',value:'배정예산'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'budgetReduceRt',inputType:'text',value:'절감율',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'budgetReduceAmt',inputType:'text',value:'절감액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'actAmt',inputType:'text',value:'실행예산',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yearAmt',inputType:'text',value:'년간예산',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'190',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntlUnitClsCd',inputType:'select',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'assgnAmt',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'budgetReduceRt',inputType:'text',width:'80',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'budgetReduceAmt',inputType:'expression',width:'120',textAlign:'right',expression:'Number(display(\'assgnAmt\')) - Number(display(\'actAmt\'))',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'actAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yearAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'SUM("assgnAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'SUM("actAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'SUM("yearAmt")',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원)',style:''}}]}]}]}]}]}]}]}]})