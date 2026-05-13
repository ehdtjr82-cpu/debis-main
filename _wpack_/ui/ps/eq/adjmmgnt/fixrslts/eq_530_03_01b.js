/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_03_01b.xml 20157 51816429375e9c12c158c9053b228c689273e626a22902757bab884741ea5c75 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repFixWrkPl',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'년식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carAge',name:'차령',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'eqModelEngNm',name:'모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngModelCd',name:'엔진모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carAge1',name:'name13',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ203",
    compID: "gr_work_pl:posnClsCd,lc_posnClsCd"
  }, {
    grpCd: "ZZ210",
    compID: "gr_work_pl:eqKndCd"
  }, {
    grpCd: "ZZ208",
    compID: "gr_work_pl:eqNrmCd"
  }, {
    grpCd: "OP190",
    compID: "gr_work_pl:cargoClsCd"
  }, {
    grpCd: "EQ031",
    compID: "gr_work_pl:ngModelCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  //-------------------------------------------------------------------------
  // 사업부문combo데이터호출 조회
  //-------------------------------------------------------------------------
  sbm_co_ds_combo1.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveHomeClsList&strVal=&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo1);
  lc_homeClsCd.setValue("LO"); // 정비소속구분코드

  ed_eqCd.setValue("");
  lc_posnClsCd.setSelectedIndex(0);
  ed_vehclNo.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, tb_wrk))) return;
  // dma_fix_work_re.setUseChangeInfo(false); // 조회조건

  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveLogisticsBranchEachEquipmentPresentConditionCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 

  let pWhere = "";
  switch (disGubun) {
    case 1:
      // 장비 팝업			
      rtnList = udc_eqBasicListInfo.cfCommonPopUp(scwin.udc_eqBasicListInfo_callBackFunc, ed_eqCd.getValue().trim(), ed_vehclNo.getValue(), pClose, null, null, null, null, pWhere, "750", null, null, null, null, pAllSearch, "장비,장비코드,차량번호");

      // cfSetReturnValue(rtnList, ed_eqCd,   ed_vehclNo);
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_eqBasicListInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_eqCd.setValue(rtnList[0]);
    ed_vehclNo.setValue(rtnList[1]);
    ed_eqCd.options.hidVal = rtnList[0];
    ed_vehclNo.options.hidVal = rtnList[1];
  } else {
    ed_eqCd.setValue("");
    ed_vehclNo.setValue("");
    ed_eqCd.options.hidVal = "";
    ed_vehclNo.options.hidVal = "";
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
  lc_homeClsCd.setValue("LO"); // 정비소속구분코드
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  } else {
    scwin.lc_homeClsCd_onviewchange();
  }
  ed_eqCd.setValue("");
  lc_posnClsCd.setSelectedIndex(0);
  ed_vehclNo.setValue("");
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  let fileName = '물류점소별장비현황조회';
  let sheetTitle = "물류점소별장비현황조회";
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
  let rowCnt = ds_fix_work_list.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  ;
  for (let i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    let carAge = Number(ds_fix_work_list.getCellData(i, "carAge"));
    let yearAge = carAge / 12;
    ds_fix_work_list.setCellData(i, "carAge1", yearAge);
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
  } else {
    lc_WrkPlCd.setSelectedIndex(0);
  }
};
scwin.udc_eqBasicListInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_vehclNo.getValue(), 'F', 'T');
};
scwin.udc_eqBasicListInfo_onblurCodeEvent = function (e) {
  if (ed_eqCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqCd, ed_vehclNo, 1, false);
  } else {
    ed_vehclNo.setValue("");
  }
};
scwin.udc_eqBasicListInfo_onviewchangeNameEvent = function (info) {
  if (ed_vehclNo.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_eqCd, 1, false);
  } else {
    ed_eqCd.setValue("");
  }
};
scwin.sbm_co_ds_combo1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_fix_work_re.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',title:'사업부문',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_WrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fix_work_re.repFixWrkPl',title:'대표정비작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',refDataCollection:'ds_fix_work_re',code:'eqCd',allowCharCode:'0-9',objTypeCode:'data',maxlengthCode:'6',codeId:'ed_eqCd',objTypeName:'key',id:'udc_eqBasicListInfo',selectID:'retrieveEqBasicListInfo',nameId:'ed_vehclNo','ev:onclickEvent':'scwin.udc_eqBasicListInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_eqBasicListInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqBasicListInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_posnClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_fix_work_re.posnClsCd',chooseOptionLabel:'전체',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel1',gridUpYn:'N',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',focusMode:'cell',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'소유<br/>구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'장비종류',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'배정점소',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'물류점소명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'년식',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'차령',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'모델',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'장비규격',width:'100'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column40',value:'용도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'엔진모델',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'posnClsCd',inputType:'select',style:'',value:'',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'eqKndCd',inputType:'select',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranCd',inputType:'text',style:'',value:'',width:'120',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prdyr',inputType:'calendar',style:'',value:'',width:'80',calendarValueType:'yearMonth',displayFormat:'yyyy/MM'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carAge1',inputType:'text',style:'',value:'',width:'100',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelEngNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'eqNrmCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'select',style:'',id:'cargoClsCd',value:'',displayMode:'value delim label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'ngModelCd',value:'',displayMode:'value delim label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})