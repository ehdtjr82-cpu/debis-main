/*amd /ui/ac/fi/fixedaset/fi_301_01_04b.xml 21106 b1dd7703edb267e7fb47ba83354e717bbf63d72b34db79eabe52288b895fa9ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:''}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstFixedAsetNo',name:'최초자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyProvAmt',name:'감가상각누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyBookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt',name:'당월;감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyDeprAmt',name:'감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'감가상각누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyBookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprRt',name:'상각율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsName',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNo',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNm',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',name:'종료일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.empNo = $c.data.getMemInfo($p, "empNm"); // 사용자 아이디

scwin.isSubCompany;
scwin.pWinClose;
scwin.isFirst = true;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.onpageload = function () {};
scwin.ondataload = function () {};
scwin.onUdcCompleted = async function () {
  // scwin.f_SearchHeaderCreate();
  udc_companyInfo2.hide("");
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
  if (!$c.gus.f_Validation($p)) {
    return;
  }
};

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]))) {
    return false;
  }

  //    if (!cfValidateValue(ed_acqDtEndDt.text,"minDate=" + ed_acqDtStDt.text)) {
  // 			cfAlertMsg(MSG_CM_ERR_039);
  // 			ed_acqDtStDt.focus();
  // 			return false;
  //     }

  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    // if (!$c.gus.cfValidateValue(ed_acqDtEndDt.getValue(),"minDate=" + ed_acqDtStDt.getValue())) {
    if (WebSquare.date.dateDiff(ed_acqDtStDt.getValue(), ed_acqDtEndDt.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_acqDtStDt.focus();
      return false;
    }
  }
  if ($c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) || $c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, "취득일자는 필수입력 항목 입니다.");
    ed_acqDtStDt.focus();
    return false;
  }

  // if ($c.gus.cfIsNull(ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull(ed_acqDtEndDt.getValue())) {
  //     await $c.gus.cfAlertMsg(MSG_CM_WRN_003,["취득일자"]);
  //     ed_acqDtStDt.focus();
  //     return false;
  // }

  // if (!$c.gus.cfIsNull(ed_acqDtStDt.getValue()) && $c.gus.cfIsNull(ed_acqDtEndDt.getValue())) {
  //     await $c.gus.cfAlertMsg(MSG_CM_WRN_003,["취득일자"]);
  //     ed_acqDtEndDt.focus();
  //     return false;
  // }

  if (!(await $c.gus.cfValidate($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm, ed_srchFixedAsetNo]))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 데이터셋 헤더 생성
//-------------------------------------------------------------------------
// function f_SearchHeaderCreate(){
//     var GAUCE_DATASET_HEADER = "coCd:STRING"					 //회사코드      
//                             + ",acqDtStDt:STRING"
//                             + ",acqDtEndDt:STRING"
//                             + ",fixedAsetNo:STRING"
//                             + ",acctDeptCd:STRING"
//                             + ",asetPatternCd:STRING"
//                             + ",asetKndCd:STRING"
//                             + ",procDt:STRING";
//     ds_search.ClearAll();
//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.AddRow();
// }

scwin.f_PopUp = function () {
  var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  var rtnList = udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), "T", null, null, null, null, param, 410, null, null, null);
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
  if (scwin.isFirst == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isFirst = false;
  }

  // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.

  if (scwin.isSubCompany == true) {
    var acctYear = ""; //결산년월
    var coCd = ""; //회사코드

    coCd = ed_coCd.getValue;

    //결산년월 (회계년도)
    if (ica_closeYm.getValue() != "") {
      acctYear = ica_closeYm.getValue().substring(0, 4);
    } else {
      acctYear = WebSquare.date.getCurrentServerDate().substring(0, 4);
    }
    debugger;
    // 최상위부서조회
    ed_coCd2.setValue(ed_coCd.getValue());
    ed_coNm2.setValue(ed_coNm.getValue());
    var rtnAcctDeptList = udc_companyInfo2.cfCommonPopUp(scwin.udc_coCd_callBackFunc2, ed_coCd2.getValue(), acctYear, scwin.pWinClose, null, null, null, null, null, null, null, null, null);
  } else {
    ed_srchAcctDeptCd.setValue("00000");
    ed_srchAcctDeptNm.setValue("전사");
  }
};
scwin.udc_coCd_callBackFunc2 = function (rtnAcctDeptList) {
  debugger;
  if (rtnAcctDeptList != null) {
    if (rtnAcctDeptList[1] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnAcctDeptList[1]); // 최상위 부서코드
    ed_srchAcctDeptNm.setValue("");
  }

  // 귀속부서 조회
  scwin.f_PopUp();
};
scwin.f_Search = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;
  if (!(await scwin.f_Validation())) {
    return;
  }
  var asetPatternNmStr = $c.gus.cfIsNull($p, acb_asetPatternCd.getValue()) ? "" : acb_asetPatternCd.getText();
  if (asetPatternNmStr.indexOf(":") != -1) {
    asetPatternNmStr = asetPatternNmStr.split(":")[1].trim();
  }
  let data = {
    odiName: "fi_301_01_04",
    reportName: "/ac/fi/fixedaset/fi_301_01_04.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      sysPath: "dbl.ac.fi.fixedaset",
      closeYm: ica_closeYm.getValue(),
      asetPatternCd: acb_asetPatternCd.getValue(),
      acqDtStDt: ed_acqDtStDt.getValue(),
      acqDtEndDt: ed_acqDtEndDt.getValue(),
      fixedAsetNo: ed_srchFixedAsetNo.getValue(),
      acctDeptCd: ed_srchAcctDeptCd.getValue(),
      // acctDeptNm: ed_srchAcctDeptNm.getValue(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd,
      asetPatternNm: acb_asetPatternCd.getText(true) || ""
    },
    viewerParam: {
      mode: "print"
    },
    formParam: {
      asetPatternNm: acb_asetPatternCd.getText(true) || ""
    }
  };
  // await wfm_ozReport.getWindow().mf_scwin.reportSearch(data);

  $p.setTimeout(async function () {
    await wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  }, {
    "delay": 1000
  });
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_PopUp();
};
scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_srchAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    scwin.f_PopUp();
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = async function (e) {
  await scwin.f_Search();
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue()) == false) {
    ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:260px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveUppermostAcctDeptCdInfo',codeId:'ed_coCd2',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm2',style:'',code:'',name:'',refDataCollection:'',btnId:'btn_company2',id:'udc_companyInfo2',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',validateOnInput:'true',mandatory:'true',title:'마감년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'취득일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt'}},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_asetPatternCd',style:'width: 230px;',submenuSize:'fixed',displayMode:'value delim label',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent',mandatoryCode:'true',validTitle:'귀속부서',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchFixedAsetNo',style:'width:208px;',allowChar:'0-9','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur',maxlength:'10'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame ',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})