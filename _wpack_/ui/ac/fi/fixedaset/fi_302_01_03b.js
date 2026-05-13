/*amd /ui/ac/fi/fixedaset/fi_302_01_03b.xml 23586 70f8f60bc6f2378284b3c21f4296ad2f1af275695d200da41019593286fa7f5c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo2',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_empNo_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstFixedAsetNo',name:'최초자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyProvAmt',name:'감가상각누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyBookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt',name:'당월;감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyDeprAmt',name:'감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'감가상각누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyBookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprRt',name:'상각율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsName',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNo',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNm',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',name:'종료일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.empNo = $c.data.getMemInfo($p, "empNm"); // 사용자 아이디

scwin.isSubCompany;
scwin.pWinClose;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.isStarted = true;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  // scwin.f_SearchHeaderCreate();

  //자산유형 조회
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "FixedAsetPatternEBC",
    param2: "retrieveFixedAsetPatternCd",
    param3: ["CMP"],
    compID: "acb_asetPatternCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_closeYm, ed_acqDtStDt, ed_acqDtEndDt]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_closeYm.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  ed_acqDtStDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + "01");
  ed_acqDtEndDt.setValue(WebSquare.date.getCurrentServerDate());
  ica_closeYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (!scwin.f_Validation()) {
    return;
  }
};

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm, ed_acqDtStDt, ed_acqDtEndDt]))) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtEndDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    // if (!$c.gus.cfValidateValue(ed_acqDtEndDt.getValue(),"minDate=" + ed_acqDtStDt.getValue())) {
    if (WebSquare.date.dateDiff(ed_acqDtStDt.getValue(), ed_acqDtEndDt.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_acqDtStDt.focus();
      return false;
    }
  }
  if (!(await $c.gus.cfValidate($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm, ed_srchAcctDeptCd2, ed_srchAcctDeptNm2, ed_srchFixedAsetNo, ed_srchFixedAsetNo2]))) {
    return false;
  }
  if (ed_srchAcctDeptCd.getValue() > ed_srchAcctDeptCd2.getValue()) {
    await $c.gus.cfAlertMsg($p, "시작범위는 종료범위보다 작아야 합니다.:@");
    ed_srchAcctDeptCd.focus();
    return false;
  }
  if (ed_srchFixedAsetNo.getValue() > ed_srchFixedAsetNo2.getValue()) {
    await $c.gus.cfAlertMsg($p, "시작범위는 종료범위보다 작아야 합니다.:@");
    ed_srchFixedAsetNo.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 데이터셋 헤더 생성
//-------------------------------------------------------------------------
// function f_SearchHeaderCreate(){
//     var GAUCE_DATASET_HEADER = "acqDtStDt:STRING"
//                             + ",acqDtEndDt:STRING"
//                             + ",fixedAsetNo:STRING"
//                             + ",acctDeptCd:STRING"
//                             + ",asetPatternCd:STRING"
//                             + ",asetKndCd:STRING"
//                             + ",procDt:STRING"
//                             + ",coCd:STRING(3)"
//                             + ",coClsCd:STRING(1)";

//     ds_search.ClearAll();
//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.AddRow();
// }

scwin.f_PopUp = function (flag, flag2) {
  var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  if (flag == "1") {
    var rtnList = udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), "", flag2, null, null, null, null, param, 410, null, null, null);
  } else {
    var rtnList = udc_srchAcctDeptCd2.cfCommonPopUp(scwin.udc_srchAcctDeptCd2_callBackFunc, ed_srchAcctDeptCd2.getValue(), "", flag2, null, null, null, null, param, 410, null, null, null);
  }
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
  }
};
scwin.udc_srchAcctDeptCd2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd2.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm2.setValue(rtnList[1]); // 회사명
    ed_srchAcctDeptCd2.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd2.setValue("");
    ed_srchAcctDeptNm2.setValue("");
    ed_srchAcctDeptCd2.options.hidVal = "";
  }
};
scwin.f_Search = async function () {
  if (!(await scwin.f_Validation())) {
    return;
  }
  var reportName;
  if (acb_printType.getValue() == "1") {
    reportName = "fi_302_01_03_2";
  } else {
    reportName = "fi_302_01_03";
  }
  var asetPatternNmStr = $c.gus.cfIsNull($p, acb_asetPatternCd.getValue()) ? "" : acb_asetPatternCd.getText();
  if (asetPatternNmStr.indexOf(":") != -1) {
    asetPatternNmStr = asetPatternNmStr.split(":")[1].trim();
  }
  let data = {
    reportName: "/ac/fi/fixedaset/" + reportName + ".ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      sysPath: "dbl.ac.fi.fixedaset",
      closeYm: ica_closeYm.getValue(),
      asetPatternCd: acb_asetPatternCd.getValue(),
      acqDtStDt: ed_acqDtStDt.getValue(),
      acqDtEndDt: ed_acqDtEndDt.getValue(),
      fixedAsetNo: ed_srchFixedAsetNo.getValue(),
      fixedAsetNo2: ed_srchFixedAsetNo2.getValue(),
      acctDeptCd: ed_srchAcctDeptCd.getValue(),
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      acctDeptCd2: ed_srchAcctDeptCd2.getValue(),
      acctDeptNm2: ed_srchAcctDeptNm2.getValue(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd,
      asetPatternNm: acb_asetPatternCd.getText(true) || ""
      // mode : "silent"
      // isframe : false
      // configmode : "html"
      // printcommand : false
      // showTree : true,
    },
    viewerParam: {
      useprogressbar: true // 프로그레스바 쓸지 말지
    },
    formParam: {
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      acctDeptNm2: ed_srchAcctDeptNm2.getValue(),
      asetPatternNm: acb_asetPatternCd.getText(true) || ""
    }
  };
  await wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  $p.setTimeout(async function () {
    await wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  }, {
    "delay": 1000
  });
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
    $c.gus.cfInitObjects($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm]); // 조회조건 - 귀속부서  From
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isStarted = false;
  }
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_PopUp("1", "F");
};
scwin.udc_srchAcctDeptCd2_onclickEvent = function (e) {
  scwin.f_PopUp("2", "F");
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Search();
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  ed_srchAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    scwin.f_PopUp("1", "T");
  }
};
scwin.udc_srchAcctDeptCd2_onblurCodeEvent = function (e) {
  ed_srchAcctDeptNm2.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd2.getValue())) {
    scwin.f_PopUp("2", "T");
  }
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue()) == false) ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
};
scwin.ed_srchFixedAsetNo2_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo2.getValue()) == false) ed_srchFixedAsetNo2.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo2.getValue(), 10));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',mandatory:'true',title:'마감년월',displayFormat:'yyyy/MM',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_asetPatternCd',style:'',submenuSize:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd2',code:'',codeId:'ed_srchAcctDeptCd2',id:'udc_srchAcctDeptCd2',maxlengthCode:'5',maxlengthName:'100',name:'',nameId:'ed_srchAcctDeptNm2',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'','ev:onclickEvent':'scwin.udc_srchAcctDeptCd2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd2_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_acqDate',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_printType',style:'',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부서별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_srchFixedAsetNo',placeholder:'',style:'',maxlength:'10',allowChar:'0-9','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{class:' w100',id:'ed_srchFixedAsetNo2',placeholder:'',style:'',maxlength:'10',allowChar:'0-9','ev:onblur':'scwin.ed_srchFixedAsetNo2_onblur'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame ',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})