/*amd /ui/ac/co/bizplan/co_203_06_01b.xml 23266 5ee0377ff56f63db635b95129e99e454ce93036346acc0b3c89910791755e143 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYr',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'마감구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrClsCd',name:'집계구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bizPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_version'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkId',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeStDtm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeEndDtm',name:'종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDesc',name:'작업설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNo',name:'오류번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'작업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDd',name:'마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_batchBizPlan',action:'/ac.co.bizplan.ExecuteBusinessPlanProfitAndLossBatchCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_batchBizPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchVer',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_version',target:'data:json,{"id":"ds_version","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchVer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_bizPlan',target:'data:json,{"id":"ds_bizPlan","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.wrkNo = "";
scwin.fromDate = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.isStart = false;
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "CO010",
    compID: "acb_aggrClsCd",
    opt: {
      "range": "1,002"
    }
  } // 오토컴플리트
  ];
  await $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  acb_aggrClsCd.setSelectedIndex(0);
  scwin.f_LoadVer();
  scwin.f_setCompanyInfo();
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_Reset();
  ica_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));
};

//-------------------------------------------------------------------------
// 초기화 관련 변수 정의 함수
//-------------------------------------------------------------------------
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
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
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
  }
  if (ed_coCd.getValue() > ACConstants.CO_CD_DONGBU) {
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
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  scwin.f_Initial();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수조건 확인
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_FromDate, acb_version, acb_aggrClsCd]);
  if (!ret) {
    return false;
  }

  // 작업구분코드 및 날짜 세팅함수 호출
  if (!scwin.f_setWrkNoFromDate()) {
    return;
  }
  const params = {
    closeYm: scwin.fromDate,
    closeDd: "00",
    mgntNo: "0",
    wrkNo: scwin.wrkNo,
    coCd: ed_coCd.getValue()
  };
  dma_bizPlan.setJSON(params);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Ver정보를 가져온다.
//-------------------------------------------------------------------------
scwin.f_LoadVer = function () {
  // 작업구분코드 및 날짜 세팅함수 호출
  if (!scwin.f_setWrkNoFromDate()) {
    return;
  }
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveVersionInfo",
    param1: scwin.fromDate
  };
  dma_version.setJSON(params);
  $c.sbm.execute($p, sbm_searchVer);
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
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  if (!scwin.f_setWrkNoFromDate()) {
    return;
  }
  let isClose = await udc_closeYn.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "", ed_coCd.getValue());
  if (isClose[3] == "PRE") {
    if (isClose[0] == "1") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (isClose[0] == "0") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (isClose[0] == "2") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감완료가 되었습니다");
      return false;
    } else {
      return true;
    }
  }
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = async function () {
  if (acb_aggrClsCd.getValue() == ACConstants.BUSINESS_PLAN_CLOSE_11) {
    scwin.wrkNo = ACConstants.CLOSE_PLAN_CREATION;
    scwin.fromDate = ica_FromDate.getValue().trim() + "00";
  } else if (acb_aggrClsCd.getValue() == ACConstants.BUSINESS_PLAN_CLOSE_15) {
    scwin.wrkNo = ACConstants.CLOSE_BUSINESS_PLAN_AGGR;
    scwin.fromDate = ica_FromDate.getValue().trim() + "00";
  } else if (acb_aggrClsCd.getValue() == ACConstants.BUSINESS_PLAN_CLOSE_20) {
    scwin.wrkNo = ACConstants.CLOSE_BUSINESS_PLAN_PROFITLOSS_RSLT;
    scwin.fromDate = ica_FromDate.getValue().trim() + "00";
  } else if (acb_aggrClsCd.getValue() == ACConstants.BUSINESS_PLAN_CLOSE_25) {
    scwin.wrkNo = ACConstants.CLOSE_MEET_REPORT;
    scwin.fromDate = ica_FromDate.getValue().trim() + "00";
  } else {
    await $c.win.alert($p, "잘못된 집계구분 코드를 선택하셨습니다.");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 필수조건 확인
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, acb_version]);
  if (!ret) {
    return false;
  }

  // 사업계획마감일때만 마감여부를 확인한다.
  if (acb_aggrClsCd.getValue() == ACConstants.BUSINESS_PLAN_CLOSE_11) {
    // 마감여부 확인
    if (!(await scwin.f_JobCloseYN())) {
      return;
    }
  }
  let cfrm2 = await $c.win.confirm($p, "Batch Job을 실행하시겠습니까?");
  if (cfrm2) {
    dma_search.set("wrkNo", scwin.wrkNo);
    $c.sbm.execute($p, sbm_batchBizPlan);
  }
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_bizPlan.getRowCount();
  let sheetTitle = "사업계획집계내역";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_bizPlan, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.sbm_retrieve_submitdone = async function (e) {
  totalRows.setValue(ds_bizPlan.getRowCount());
  if (ds_bizPlan.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  gr_bizPlan.setFocusedCell(0, 0);
};
scwin.sbm_searchVer_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.sbm_batchBizPlan_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    if (scwin.wrkNo != ACConstants.CLOSE_PLAN_CREATION) {
      await $c.win.alert($p, "Batch Job이 정상적으로 실행되었습니다.");
    } else if (scwin.wrkNo == ACConstants.CLOSE_PLAN_CREATION) {
      scwin.wrkNo = ACConstants.CLOSE_DEPT_PROFIT_LOSS;
      dma_search.set("wrkNo", scwin.wrkNo);
      $c.sbm.execute($p, sbm_batchBizPlan);
    }
  }
};
scwin.ica_FromDate_onblur = function (e) {
  scwin.f_LoadVer();
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.btn_Init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, []);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',UpperFlagCode:'1',nameId:'ed_coNm',objTypeName:'data',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHeadTitle:'회사코드,,,,,회사명',popupTitle:'회사조회,회사코드,법인명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_FromDate',style:'',mandatory:'true',validExp:'사업년도:yes:date=YYYY',displayFormat:'yyyy',validateOnInput:'true',editType:'select',placeholder:' ',ref:'data:dma_search.planYr',title:'사업년도','ev:onblur':'scwin.ica_FromDate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_version',search:'start',style:'width: 130px;',submenuSize:'auto',mandatory:'true',tabIndex:'-1',validExp:'버전:yes:number',disabled:'false',allOption:'',chooseOption:'',ref:'data:dma_search.ver',title:'버전'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'w2:label',A:{ref:'col4'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'집계 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_aggrClsCd',search:'start',style:'width: 160px;',submenuSize:'auto',mandatory:'true',validExp:'집계:yes:number',ref:'data:dma_search.aggrClsCd',allOption:'',chooseOption:'',title:'집계'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Init',style:'',type:'button','ev:onclick':'scwin.btn_Init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사업계획집계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',gridID:'gr_bizPlan',userAuth:'X',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_bizPlan',id:'gr_bizPlan',rowNumHeaderValue:'No',rowNumWidth:'60',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',dataName:'사업계획손익집계',validFeatures:'ignoreStatus=no',validExp:'',columnMove:'true',readOnly:'true',editModeEvent:'onclick'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',value:'순번',displayMode:'label',sortable:'true',sortLabel:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'작업자ID',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'시작일시',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'종료일시',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'작업설명',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'오류번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업자',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'마감년월',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'마감일',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'작업번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'관리번호',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'seq',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkId',inputType:'text',removeBorderStyle:'false',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'closeStDtm',inputType:'text',removeBorderStyle:'false',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'closeEndDtm',inputType:'text',removeBorderStyle:'false',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDesc',inputType:'text',textAlign:'left',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'errNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNm',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeDd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',width:'100',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_batch',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'실행'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;display:none;',id:'udc_closeYn'}}]}]}]}]}]})