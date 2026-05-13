/*amd /ui/ac/fi/fixedaset/fi_301_05_02b.xml 27143 22ecd1dcb351b8e0f2ee65a0f8be31b03870eb17920f51f01c167e26ad2b72b0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'이관전귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'이관전귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCumAmt',name:'(이관전자산)당기상각액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provTendAmt',name:'감가상각누계액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histDt',name:'이관일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histQty',name:'이관수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfAcctDeptCd',name:'이관후귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfAcctDeptNm',name:'이관후귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfFixedAsetNo',name:'이관후자산번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsTransferCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:'','ev:submitdone':'scwin.sbm_search_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
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
scwin.onUdcCompleted = async function () {
  // scwin.f_SearchHeaderCreate();
  // udc_companyInfo2.hide("");
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
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_transferDtStDt, ed_transferDtEndDt]);
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
  ed_transferDtStDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + "01");
  ed_transferDtEndDt.setValue(WebSquare.date.getCurrentServerDate());
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_Validation())) {
    return;
  }
  dma_search.set("asetPatternCd", acb_asetPatternCd.getValue());
  dma_search.set("asetKndCd", ""); // hid_asetKndCd
  dma_search.set("fixedAsetNo", ed_srchFixedAsetNo.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ed_transferDtStDt, ed_transferDtEndDt]))) {
    return false;
  }

  // if (!cfValidateValue(ed_transferDtEndDt.text,"minDate=" + ed_transferDtStDt.text)) {
  //     cfAlertMsg(MSG_CM_ERR_039);
  //     ed_transferDtStDt.focus();
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
//     var GAUCE_DATASET_HEADER = "acqDtStDt:STRING"
//                             + ",acqDtEndDt:STRING"
//                             + ",fixedAsetNo:STRING"
//                             + ",acctDeptCd:STRING"
//                             + ",asetPatternCd:STRING"
//                             + ",asetKndCd:STRING"
//                             + ",procDt:STRING"
//                             + ",coCd:STRING(3)" 
//                             + ",coClsCd:STRING(1)" ;
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
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "자산이관명세서.xlsx",
      sheetName: "자산이관명세서"
    };
    $c.data.downloadGridViewExcel($p, gr_master, options);
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
    if (ed_transferDtEndDt.getValue() != "") {
      acctYear = ed_transferDtEndDt.getValue().substring(0, 4);
    } else {
      acctYear = WebSquare.date.getCurrentServerDate().substring(0, 4);
    }
    // 최상위부서조회
    ed_coCd2.setValue(ed_coCd.getValue());
    ed_coNm2.setValue(ed_coNm.getValue());
    udc_companyInfo2.cfCommonPopUp(scwin.udc_coCd_callBackFunc2, ed_coCd2.getValue(), acctYear, scwin.pWinClose, null, null, null, null, null, null, null, null, null);
  } else {
    ed_srchAcctDeptCd.setValue("00000");
    ed_srchAcctDeptNm.setValue("전사");
  }
};
scwin.udc_coCd_callBackFunc2 = function (rtnAcctDeptList) {
  if (rtnAcctDeptList != null) {
    if (rtnAcctDeptList[1] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnAcctDeptList[1]); // 최상위 부서코드
    ed_srchAcctDeptNm.setValue("");
  }
  // 귀속부서 조회
  scwin.f_srchDeptPopUp('T');
};

//-------------------------------------------------------------------------
// 조회 귀속부서코드 팝업
//-------------------------------------------------------------------------
scwin.f_srchDeptPopUp = function (sIsEvent) {
  var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, "retrieveAcctDeptCdInfo6", param, "410");
};
scwin.f_Search = async function () {
  if (!(await scwin.f_Validation())) {
    return;
  }
  var asetPatternNmStr = $c.gus.cfIsNull($p, acb_asetPatternCd.getValue()) ? "" : acb_asetPatternCd.getText();
  if (asetPatternNmStr.indexOf(":") != -1) {
    asetPatternNmStr = asetPatternNmStr.split(":")[1].trim();
  }
  let data = {
    reportName: "/ac/fi/fixedaset/fi_301_05_02.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      sysPath: "dbl.ac.fi.fixedaset",
      asetPatternCd: acb_asetPatternCd.getValue(),
      transferDtStDt: ed_transferDtStDt.getValue(),
      transferDtEndDt: ed_transferDtEndDt.getValue(),
      fixedAsetNo: ed_srchFixedAsetNo.getValue(),
      acctDeptCd: ed_srchAcctDeptCd.getValue(),
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd,
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      asetPatternNm: acb_asetPatternCd.getText(true) || ""
    },
    viewerParam: {
      //useprogressbar : false, // 프로그레스바 쓸지 말지
    },
    formParam: {
      // acctDeptNm : ed_srchAcctDeptNm.getValue(),     
      // asetPatternNm : asetPatternNmStr
    }
  };
  await wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  $p.setTimeout(async function () {
    await wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  }, {
    "delay": 1000
  });
  scwin.f_Retrieve();
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
scwin.btn_search_onclick = function (e) {
  scwin.f_Search();
  // scwin.f_Retrieve();
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_master.getRowCount();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {}
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue()) == false) {
    ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveUppermostAcctDeptCdInfo',codeId:'ed_coCd2',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm2',style:'display: none;',code:'',name:'',refDataCollection:'',btnId:'btn_company2',id:'udc_companyInfo2',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이관일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'acqDtStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'acqDtEndDt',edFromId:'ed_transferDtStDt',edToId:'ed_transferDtEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent',mandatoryCode:'true',validTitle:'귀속부서',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_asetPatternCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchFixedAsetNo',style:'width: 150px;','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur',allowChar:'0-9',maxlength:'10'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',btnPlusYn:'N',btnUser:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:'height: 1px;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'자산유형코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'자산유형명',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'자산번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'자산명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'취득일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'내용연수',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'내용월수',width:'80',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'이관전귀속부서코드',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column60',value:'이관전귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'원취득액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'취득가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'(이관전자산)당기상각액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'감가상각누계액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'이관일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'이관수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'이관후귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'이관후귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'이관후자산번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',style:'',value:'',width:'100',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLife',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLifeMonth',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgAcqAmt',inputType:'text',style:'',value:'',width:'80',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'acqAmt',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deprCumAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provTendAmt',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bookAmt',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'histDt',value:'',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'histQty',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAfFixedAsetNo',value:'',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame ',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})