/*amd /ui/ac/fi/taxbiz/vatctrl/fi_401_01_11b.xml 17449 e4d9949465a021149d14e0b8dcae0ec7fecfb0f7e417bb896088a803972946a0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'submitDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;
scwin.stYm = "";
scwin.endYm = "";
scwin.submitDt = "";
scwin.txtCoClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI013",
    compID: "lc_vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  lc_vatQuartYyClsCd.setSelectedIndex(0);
  lc_pchsSellClsCd.setSelectedIndex(0);
  ed_declarYr.setValue($c.date.getServerDateTime($p, "yyyy"));
  ed_vatDeclarAcctDeptCd.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd !== ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_DateSetting = function () {
  let imsi_date = "";
  if (lc_vatQuartYyClsCd.getValue() === "1") {
    imsi_date = "0101";
  } else if (lc_vatQuartYyClsCd.getValue() === "2") {
    imsi_date = "0401";
  } else if (lc_vatQuartYyClsCd.getValue() === "3") {
    imsi_date = "0701";
  } else if (lc_vatQuartYyClsCd.getValue() === "4") {
    imsi_date = "1001";
  }
  imsi_date = ed_declarYr.getValue().trim() + imsi_date;
  scwin.stYm = imsi_date;
  scwin.endYm = $c.date.getDateQuarterDirection($p, scwin.stYm, "L");
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  // 부가세신고부서조회
  let param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ed_declarYr.getValue().substring(0, 4);
  await udc_vatDeclarAcctDept.cfCommonPopUp(scwin.udc_vatDeclarAcctDept_callBackFunc, ed_vatDeclarAcctDeptCd.getValue(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
};
scwin.udc_vatDeclarAcctDept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatDeclarCrn.setValue(rtnList[5]); //부가세사업자번호

    if (!ed_vatDeclarAcctDeptCd.options) ed_vatDeclarAcctDeptCd.options = {};
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값      
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
    if (!ed_vatDeclarAcctDeptCd.options) ed_vatDeclarAcctDeptCd.options = {};
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 제출자별집계표발행 
//------------------------------------------------------------------------- 
scwin.f_OzReport = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_declarYr, lc_vatQuartYyClsCd]);
  if (!ret) return false;
  if (ed_declarYr.getValue().length < 4) {
    await $c.win.alert($p, "기간은(는) 4자리수만큼 입력하십시오");
    return false;
  }
  scwin.f_DateSetting();

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  if (lc_pchsSellClsCd.getValue() == "1") {
    let data = {
      odiName: "fi_401_01_10p",
      reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_10p.ozr",
      odiParam: {
        sysPath: "dbl.ac.fi.taxbiz.vatctrl",
        declarYr: ed_declarYr.getValue().trim(),
        vatDeclarAcctDeptCd: ed_vatDeclarAcctDeptCd.getValue().trim(),
        vatDeclarAcctDeptNm: ed_vatDeclarAcctDeptNm.getValue().trim(),
        vatQuartYyClsCd: lc_vatQuartYyClsCd.getValue().trim(),
        pchsSellClsCd: lc_pchsSellClsCd.getValue().trim(),
        stYm: scwin.stYm.trim(),
        endYm: scwin.endYm.trim(),
        coCd: ed_coCd.getValue(),
        coClsCd: scwin.txtCoClsCd
      },
      viewerParam: {
        zoom: "100",
        useprogressbar: false,
        mode: "print"
      },
      formParam: {}
    };
    wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  } else {
    let data = {
      odiName: "fi_401_01_10_01p",
      reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_10p_1.ozr",
      odiParam: {
        sysPath: "dbl.ac.fi.taxbiz.vatctrl",
        declarYr: ed_declarYr.getValue().trim(),
        vatDeclarAcctDeptCd: ed_vatDeclarAcctDeptCd.getValue().trim(),
        vatDeclarAcctDeptNm: ed_vatDeclarAcctDeptNm.getValue().trim(),
        vatQuartYyClsCd: lc_vatQuartYyClsCd.getValue().trim(),
        pchsSellClsCd: lc_pchsSellClsCd.getValue().trim(),
        stYm: scwin.stYm.trim(),
        endYm: scwin.endYm.trim(),
        coCd: ed_coCd.getValue(),
        coClsCd: scwin.txtCoClsCd
      },
      viewerParam: {
        zoom: "100",
        useprogressbar: false,
        mode: "print"
      },
      formParam: {}
    };
    wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET  
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if (scwin.privAdmin === 'T' || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, ed_vatDeclarCrn]); //  부가세 신고 부서  
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.udc_vatDeclarAcctDept_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp("", 'T');
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.ed_declarYr_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    if (!ed_vatDeclarAcctDeptCd.options) ed_vatDeclarAcctDeptCd.options = {};
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
  } else {
    scwin.f_openPopUp("", 'T');
  }
};
scwin.udc_vatDeclarAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};
scwin.udc_vatDeclarAcctDept_onviewchangeCodeEvent = function (info) {
  if (info.newValue == "") {
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',objTypeName:'data',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',code:'coCd',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입/출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pchsSellClsCd',style:'width: 100px;',submenuSize:'fixed',mandatory:'true',objType:'data',ref:'data:dma_search.pchsSellClsCd',title:'매입/출'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_slipAcctDeptCdEnd',code:'vatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vatDeclarAcctDept_onclickEvent',id:'udc_vatDeclarAcctDept',name:'vatDeclarAcctDeptNm',nameId:'ed_vatDeclarAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'retrieveVatDeclarAcctDeptCd',style:'',validExpCode:'부가세신고부서:no:format=00000',validTitle:'부가세신고부서',allowCharCode:'0-9',maxlengthCode:'5','ev:onviewchangeCodeEvent':'scwin.udc_vatDeclarAcctDept_onviewchangeCodeEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vatDeclarCrn',objType:'data',style:'width: 100px;s'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',dataType:'date',displayFormat:'yyyy',editType:'focus','ev:onblur':'scwin.ed_declarYr_onblur',id:'ed_declarYr',ioFormat:'yyyy',mandatory:'true',maxlength:'4',objType:'data',ref:'data:dma_search.declarYr',style:'width: 60px;',validateOnInput:'true',title:'기간'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vatQuartYyClsCd',objType:'data',ref:'data:dma_search.vatQuartYyClsCd',style:'width: 100px;',submenuSize:'fixed'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})