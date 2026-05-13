/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_05b.xml 18477 c7e60dd92c11ecf2b8a2c352501dd734edf16c0d915a7818444e629b8b185daf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outAcctCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastYearAmt',name:'전년',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planAmt',name:'계획',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYearAmt',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastYear',name:'전년대비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planYear',name:'계획대비',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'co_ds_combo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'co_ds_combo1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.firstDate = scwin.strCurDate.substring(0, 6);
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "EQ029",
    compID: "gr_work_pl:outAcctCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ed_wrkStDt.setValue(scwin.firstDate);
  ed_wrkEndDt.setValue(scwin.firstDate);
  //-------------------------------------------------------------------------
  // 사업부문combo데이터호출 조회
  //-------------------------------------------------------------------------
  sbm_co_ds_combo1.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveHomeClsList&strVal=&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo1);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); // 정비소속구분코드

  ed_wrkStDt.focus();
};
scwin.ondataload = function () {
  lc_homeClsCd.setSelectedIndex(0);
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_wrk]))) return;
  if (ed_wrkStDt.getValue() > ed_wrkEndDt.getValue()) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return;
  }
  if (ed_wrkStDt.getValue().trim().substring(0, 4) != ed_wrkEndDt.getValue().trim().substring(0, 4)) {
    await $c.win.alert($p, "조회기간은 같은 년도이어야 합니다.");
    ed_wrkStDt.focus();
    return;
  }

  // ds_fix_work_re.setUseChangeInfo(false); // 조회조건                    
  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveMonthEachAccountEachPlanResultsCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 

  let pWhere = " ," + lux_WrkPlCd.getValue() + "";
  switch (disGubun) {
    case 1:
      // 정비사 팝업			
      rtnList = udc_fixEmpInfo.cfCommonPopUp(scwin.udc_fixEmpInfo_callBackFunc, ed_fixEmpNo.getValue().trim(), ed_fixEmpNm.getValue(), pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "정비사원,사원코드,사원명");
      // cfSetReturnValue(rtnList, ed_fixEmpNo,   ed_fixEmpNm);
      break;
  }
};

//-------------------------------------------------------------------------
// 콜백 함수
//-------------------------------------------------------------------------
scwin.udc_fixEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_fixEmpNo.setValue(rtnList[0]);
    ed_fixEmpNm.setValue(rtnList[1]);
    ed_fixEmpNo.options.hidVal = rtnList[0];
    ed_fixEmpNm.options.hidVal = rtnList[1];
  } else {
    ed_fixEmpNo.setValue("");
    ed_fixEmpNm.setValue("");
    ed_fixEmpNo.options.hidVal = "";
    ed_fixEmpNm.options.hidVal = "";
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

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  let lcIndex = "";
  if (scwin.userInfo.eqHomeClsCd == "") {
    lcIndex = "LO";
  } else {
    lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); // 정비소속구분코드
    lcIndex = lc_homeClsCd.getValue();
  }

  // 대표정비작업장콤보 조회
  scwin.f_RetrieveSecond(lcIndex);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
  ;
  lc_homeClsCd.setSelectedIndex(-1);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  // let cntRow = ds_fix_work_list.getRowCount();
  // if(cntRow == 0)
  //     return;

  let fileName = '월별계정별계획실적';
  let sheetTitle = "월별계정별계획실적";
  await $c.data.downloadGridViewExcel($p, gr_work_pl, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  sbm_co_ds_combo.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveFixWrkList&strVal=" + param1 + "&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_fix_work_list.getRowCount());
  if (ds_fix_work_list.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let lcIndex = lc_homeClsCd.getValue();
  // 대표정비작업장콤보 조회
  scwin.f_RetrieveSecond(lcIndex);
};
scwin.sbm_co_ds_combo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  co_ds_combo.sort("code", 0);
  lc_WrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
};
scwin.sbm_co_ds_combo1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'termFrom',refDataMap:'dma_fix_work_re',style:'',id:'',refEdDt:'termTo',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'일자',titleTo:'일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_work_re.homeClsCd',mandatory:'true',title:'사업부문','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',visibleRowNum:'20',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_WrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_work_re.fixWrkPlCd',mandatory:'true',title:'대표정비작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_toExcel1',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',focusMode:'cell',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true',columnMoveWithFooter:'true',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'전년',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'계획',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'실적',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'전년대비',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'계획대비',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'outAcctCd',inputType:'select',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lastYearAmt',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planAmt',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYearAmt',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lastYear',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planYear',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("lastYearAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("planAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("thisYearAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("lastYear")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("planYear")',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})