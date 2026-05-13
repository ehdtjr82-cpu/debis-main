/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_06_06b.xml 32447 e4e1beb70b64ee3f90a9cd1a1fb86015f59583ce238f7043b5306d0e1c18d1ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payMthdCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'지급 귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'지급 귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankNm',name:'지급은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'지급계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급 전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음 일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'요청일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrieveElectronicSettlementContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.isChecked = true;
scwin.payMthdCd = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면 open
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM063",
    compID: "lc_bankCd"
  }, {
    grpCd: "FM071",
    compID: "lc_bankCd02"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  rd_cashDraft.hide();
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
  ica_wrkDt.setValue(scwin.g_sCurrDate);
  ica_dcsnDt.setValue(scwin.g_sCurrDate);
  lc_bankCd02.hide();
};

//-------------------------------------------------------------------------
// function name : f_Setting(
// function desc : 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  scwin.rd_payMthdCd_onchange();
  ica_dcsnDt.setValue(scwin.g_sCurrDate);
  ica_wrkDt.setValue(scwin.g_sCurrDate);
  rd_payMthdCd.setSelectedIndex(0);
  rd_cashDraft.setSelectedIndex(1);
  cbx_printCheck.setValue("1");
  cbx_previewCheck.setValue("1");
  ica_wrkDt.focus();
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  let param = '';
  let code = txtCode.getValue();
  let name = txtName.getValue();
  if (select_code == '2') {
    //자회사 회계시스템 추가사항  
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    // 거래처 PopUp 호출
    case '2':
      sCmdName = "retrieveClntList";
      param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null); // 거래처
      break;
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.setValue(rtnList[0]);	// 코드
  //     txtName.setValue(rtnList[1]);	// 코드명
  //     txtCode.options.hidVal = rtnList[0];	// 코드
  // } else {
  //     txtCode.setValue("");	// 코드
  //     txtName.setValue("");	// 코드명
  //     txtCode.options.hidVal = "";	// 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_clntNo.options.hidVal = ""; // 코드
  }
};
scwin.f_openPopUpNm = async function (select_code, txtCode, txtName, sFlag) {
  let param = '';
  let code = "";
  let name = txtName.getValue();
  if (select_code == '2') {
    //자회사 회계시스템 추가사항  
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    case '2':
      param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      rtnList = udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null); // 거래처
      break;
  }
  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A"){
  //         txtCode.setValue("");	// 코드
  //         txtName.setValue("");	// 코드명
  //         txtCode.options.hidVal = "";	// 코드
  //         return;
  //     }
  //     txtCode.setValue(rtnList[0]);	// 코드
  //     txtName.setValue(rtnList[1]);	// 코드명
  //     txtCode.options.hidVal = rtnList[0];	// 코드
  // } else {
  //     txtCode.setValue("");	// 코드
  //     txtName.setValue("");	// 코드명
  //     txtCode.options.hidVal = "";	// 코드
  // }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 지급방법 
//-------------------------------------------------------------------------

scwin.f_payMthdCd = function () {
  let payMthdCd = "";
  let selected = rd_payMthdCd.getValue();
  if (selected == "02") {
    payMthdCd = "20";
  } else {
    // 전자결제(어음)	
    payMthdCd = "40";
  }
  return payMthdCd;
};

//-------------------------------------------------------------------------
// 지불명세서출력 
//-------------------------------------------------------------------------

scwin.f_OzReport = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  if (!(await $c.gus.cfValidate($p, [ica_wrkDt, ed_clntNo]))) return;
  let data = {
    reportName: "",
    odiName: "",
    odiParam: {
      payMthdCd: scwin.f_payMthdCd(),
      bankCd: lc_bankCd.getValue(),
      bankNm: lc_bankCd.getText(true),
      dcsnDt: ica_dcsnDt.getValue(),
      clntNo: ed_clntNo.getValue(),
      clntNm: ed_clntNm.getValue(),
      wrkDt: ica_wrkDt.getValue(),
      coCd: ed_coCd.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
      // mode: "print"
    },
    formParam: {}
  };

  // 현금일경우		
  if (rd_cashDraft.getValue() == "01" || rd_cashDraft.getValue() == "") {
    data.reportName = "/ac/fm/paymgnt/paymgnt/fm_301_06_06p.ozr";
    data.odiName = "fm_301_06_06p";

    // 어음일경우
  } else {
    data.reportName = "/ac/fm/paymgnt/paymgnt/fm_301_06_06p_1.ozr";
    data.odiName = "fm_301_06_06p_1";
  }
  if (cbx_printCheck.getValue() == "0") {
    let opts = {
      "type": 'print',
      "printMode": 'view'
    };
    $c.ext.printOzReport($p, data, opts);
  } else {
    let opts = {
      "type": 'viewer',
      "printMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//------------------------------------------------------------------------- 
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수입력사항 체크
  // if(!$c.gus.cfValidate([ed_coCd])){
  //     return;
  // }
  if (!(await $c.gus.cfValidate($p, [ica_wrkDt, ed_coCd]))) {
    return;
  }
  scwin.payMthdCd = rd_payMthdCd.getValue();
  let payMthdCd = scwin.f_payMthdCd();
  dma_condition.set("payMthdCd", payMthdCd);
  $c.sbm.execute($p, sbm_retrievePaymgnt);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isChecked == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isChecked = false;
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
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
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrievePaymgnt_submitdone = async function (e) {
  dma_condition.set("payMthdCd", scwin.payMthdCd);
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_paymgnt.getRowCount();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCnt == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      totalRows.setValue(ds_paymgnt.getRowCount());
    }
  }
};
scwin.gr_paymgnt_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "paySlipNo") {
    var slipNo = ds_paymgnt.getCellData(rowIndex, "paySlipNo");
    if (slipNo != "") {
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};

//공통코드 미구현.
scwin.setPayMethod = function (payMthdCd) {
  if (payMthdCd === "01") {
    rd_cashDraft.setSelectedIndex(1);
    rd_cashDraft.reset();
    $c.data.setCommonCode($p, [{
      grpCd: "FM063",
      compID: "lc_bankCd"
    }]);
  } else {
    rd_cashDraft.setSelectedIndex(-1);
    rd_cashDraft.reset();
    $c.data.setCommonCode($p, [{
      grpCd: "FM071",
      compID: "lc_bankCd"
    }]);
  }
};
scwin.rd_payMthdCd_onchange = function (info) {
  // scwin.setPayMethod(rd_payMthdCd.getValue());
  if (rd_payMthdCd.getValue() == '02') {
    lc_bankCd.unbindRef();
    lc_bankCd.hide();
    lc_bankCd02.setRef("data:dma_condition.bankCd");
    lc_bankCd02.show();
    rd_cashDraft.setSelectedIndex(0);
    rd_cashDraft.reset();
  } else {
    lc_bankCd02.unbindRef();
    lc_bankCd02.hide();
    lc_bankCd.setRef("data:dma_condition.bankCd");
    lc_bankCd.show();
    rd_cashDraft.setSelectedIndex(1);
    // rd_cashDraft.reset();
  }
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_clntList_onviewchangeNameEvent = function (info) {
  if (ed_clntNm.getValue() != "") {
    scwin.f_openPopUpNm('2', ed_clntNo, ed_clntNm, 'T');
  } else {
    ed_clntNo.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validExpCode:'회사코드:yes',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',UpperFlagCode:'1',objTypeName:'data',maxlengthName:'65','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',refDataCollection:'dma_condition',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_payMthdCd',ref:'data:dma_condition.payMthdCd',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'','ev:onviewchange':'scwin.rd_payMthdCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비이체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd',style:'',submenuSize:'auto',objType:'data',ref:'data:dma_condition.bankCd'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd02',objType:'data',ref:'data:dma_condition.bankCd',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전송일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_wrkDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.wrkDt',title:'전송일자'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'popupMgntClntNo',popupTitle:'거래처팝업,거래처코드,거래처명',selectID:'retrieveClntList',style:'',id:'udc_clntList',refDataCollection:'dma_condition',code:'clntNo',popupGridHeadTitle:'거래처코드,거래처명,temp,temp,사업자번호',popupGridHiddenColumn:'3,4,6,7,8,9,10',allowCharCode:'0-9',mandatoryCode:'false',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntList_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_dcsnDt',style:'',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:dma_condition.dcsnDt',title:'지급일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'chk-grp',cols:'','ev:onchange':'scwin.cbx_printCheck_onchange',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_1',type:'button',class:'btn',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_cashDraft',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName" : "지불명세서.xlsx" ,"type" : "1" }',gridID:'gr_paymgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymgnt',id:'gr_paymgnt',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사업자</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'지급</br>귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'지급</br>귀속부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'계좌번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'어음번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'계산서</br>일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'지급은행',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'지급계좌',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'지급</br>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column25',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'만기일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'어음</br>일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'요청일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankAcntNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftCheckNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col10',inputType:'expression',style:'',value:'',width:'120',expression:'display("payBankAcntNo")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'color: blue;text-decoration: underline;',id:'paySlipNo',value:'',displayMode:'label',readOnly:'false',class:'underline'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dueDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'draftDdCntCd',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dcsnDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',expression:'SUM("payAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})