/*amd /ui/ac/fi/fixedaset/fi_304_04_02b.xml 20507 ede4cb46dadb6c0a3f717d1797877ab8ba8862fa7112b4cf919da8e6ccb72d3c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_304_04_02b
// 이름     : 부외자산명세서
// 경로     : 회계/재무회계/고정자산/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-19
// 사용계정 : 내부
// 비고     : 오즈 oz
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.load = true;
// 회원정보를 json 데이터로 모두 받음
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";
scwin.popTF = 'F';
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_srchAcctDeptCdSt.focus();
  scwin.f_setCompanyInfo();
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
  scwin.load = true;
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_coCd, ed_deprCompleteYm, ed_acqDtStDt, ed_acqDtEndDt]);
  if (!ret) {
    return false;
  }
  const stDt = ed_acqDtStDt.getValue();
  const endDt = ed_acqDtEndDt.getValue();
  if ($c.gus.cfIsNull($p, stDt) && !$c.gus.cfIsNull($p, endDt)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, stDt) && $c.gus.cfIsNull($p, endDt)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtEndDt.focus();
    return false;
  }

  /*  
  if (!cfIsNull(ed_acqDtStDt.text) && !cfIsNull(ed_acqDtEndDt.text)) {
      if (!cfValidateValue(ed_acqDtEndDt.text,"minDate=" + ed_acqDtStDt.text)) {
          cfAlertMsg(MSG_CM_ERR_039);
          ed_acqDtStDt.focus();
          return false;
      }
  }
  */
  return true;
};
scwin.udc_goodsCd_cb = function (rtnList) {
  if (rtnList != null) {
    ed_goodsCd.setValue(rtnList[0]); // 코드
    ed_goodsNm.setValue(rtnList[1]); // 명
  }
};

//-------------------------------------------------------------------------
// 유형팝업
//------------------------------------------------------------------------- 
scwin.f_openPopUp = function (flag, check) {
  switch (flag) {
    case '1':
      // 부외자산유형코드조회 ( 조회조건  )
      udc_goodsCd.setSelectId("retrieveNonledgerAsetPatternCdInfo");
      udc_goodsCd.cfCommonPopUp(scwin.udc_goodsCd_cb, ed_goodsCd.getValue().trim(), ed_goodsNm.getValue().trim(), check, null, null, null, null, "FI041", null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_srchAcctDeptCdSt_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_srchAcctDeptCdSt.setValue(rtnList[0]);
      ed_srchAcctDeptCdSt.options.hidVal = rtnList[0];
      ed_srchAcctDeptNmSt.setValue(rtnList[1]);
    }
  } else {
    ed_srchAcctDeptCdSt.setValue("");
    ed_srchAcctDeptCdSt.options.hidVal = "";
    ed_srchAcctDeptNmSt.setValue("");
  }
};
scwin.udc_srchAcctDeptCdEnd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_srchAcctDeptCdEnd.setValue(rtnList[0]);
      ed_srchAcctDeptCdEnd.options.hidVal = rtnList[0];
      ed_srchAcctDeptNmEnd.setValue(rtnList[1]);
    }
  } else {
    ed_srchAcctDeptCdEnd.setValue("");
    ed_srchAcctDeptCdEnd.options.hidVal = "";
    ed_srchAcctDeptNmEnd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업
//------------------------------------------------------------------------- 
scwin.f_PopUp = function (flag, sQueryID, sWhere) {
  switch (flag) {
    case '1':
      // 조회 귀속부서코드 팝업(FROM)
      udc_srchAcctDeptCdSt.setSelectId(sQueryID);
      udc_srchAcctDeptCdSt.cfCommonPopUp(scwin.udc_srchAcctDeptCdSt_cb, ed_srchAcctDeptCdSt.getValue(), "", scwin.popTF, null, null, null, null, sWhere, null, null, null, null);
      break;
    case '2':
      // 조회 귀속부서코드 팝업(TO)
      udc_srchAcctDeptCdEnd.setSelectId(sQueryID);
      udc_srchAcctDeptCdEnd.cfCommonPopUp(scwin.udc_srchAcctDeptCdEnd_cb, ed_srchAcctDeptCdEnd.getValue(), "", scwin.popTF, null, null, null, null, sWhere, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//------------------------------------------------------------------------- 
scwin.f_IsPopUp = function (inObj) {
  let inValue = inObj.getValue();
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (var i = 0; i < scwin.f_IsPopUp.arguments.length; i++) {
      //f_SetObjValue(f_IsPopUp.arguments[i],""); 
      scwin.f_IsPopUp.arguments[i].setValue("");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창을 자동닫기 여부를 구한다.
//------------------------------------------------------------------------- 
/*
function f_EventCheck() {
    if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
        return 'F';
    } else {
        return 'T';
    }     
}
*/

//-------------------------------------------------------------------------
// 조회 귀속부서코드 팝업(FROM)
//------------------------------------------------------------------------- 
scwin.f_srchDeptPopUp = function () {
  let pWhere = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  scwin.f_PopUp("1", "retrieveAcctDeptCdInfo6", pWhere);
};

//-------------------------------------------------------------------------
// 조회 귀속부서코드 팝업(TO)
//------------------------------------------------------------------------- 
scwin.f_srchDeptPopUp2 = function () {
  let pWhere = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  scwin.f_PopUp("2", "retrieveAcctDeptCdInfo6", pWhere);
};

//-------------------------------------------------------------------------
// 오즈 검색 후 결과를 화면 하단에 표시
//-------------------------------------------------------------------------
scwin.f_Search = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_coCd, ed_acqDtStDt, ed_acqDtEndDt, ed_srchAcctDeptCdSt, ed_srchAcctDeptCdEnd]);
  if (!ret) return false;

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam) 
  /*
  var odiParam;
  if(ed_acqDtStDt.getValue() !='' &&  ed_acqDtEndDt.getValue() != '')
      odiParam = new ODIParam("fi_304_04_02") ;
  else if(ed_acqDtStDt.getValue() =='' ||  ed_acqDtEndDt.getValue() == '')
      odiParam = new ODIParam("fi_304_04_02_01") ;
   //odiParam.add("sysPath", txt_sysPath.value) ;
  */

  /*
  odiParam.add("acqDtSt", ed_acqDtStDt.getValue()) ;
  odiParam.add("acqDtEnd", ed_acqDtEndDt.getValue()) ;
  odiParam.add("gubun", lc_srchUseYn.getValue()) ;
  odiParam.add("acctDeptCdSt", ed_srchAcctDeptCdSt.getValue()) ;  
  odiParam.add("acctDeptNmSt", ed_srchAcctDeptNmSt.getValue()) ;
  odiParam.add("coCd", ed_coCd.getValue()) ;  
  odiParam.add("goodsCd", ed_goodsCd.getValue()) ;
  odiParam.add("acctDeptCdEnd", ed_srchAcctDeptCdEnd.getValue()) ;    
  odiParam.add("acctDeptNmEnd", ed_srchAcctDeptNmEnd.getValue()) ;
  odiParam.add("coClsCd", scwin.txtCoClsCd) ;
  */

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  //let formParam = new FormParam() ;
  //formParam.add("form1","폼1") ;			

  //alert(  odiParam.getParameterValues());

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  //let viewerParam = new ViewerParam();
  //viewerParam.add("viewer.showtree","false"); // 트리 표시
  //viewerParam.add("viewer.useprogressbar","true"); // 인쇄 진행 중 프로그레스바 표시
  //viewerParam.add("viewer.zoom","85");    // 확대 비율
  //viewerParam.add("viewer.largebundle","true"); //스크롤바
  //viewerParam.add("print.mode","silent"); // 인쇄 옵션창 표시 없이 바로 출력

  //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터 
  let reportName;
  if (ed_acqDtStDt.getValue() != '' && ed_acqDtEndDt.getValue() != '') {
    //cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fi/fixedaset/fi_304_04_02.ozr", odiParam, viewerParam, formParam);
    reportName = "/ac/fi/fixedaset/fi_304_04_02.ozr";
  } else if (ed_acqDtStDt.getValue() == '' || ed_acqDtEndDt.getValue() == '') {
    //cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fi/fixedaset/fi_304_04_02_01.ozr", odiParam, viewerParam, formParam);
    reportName = "/ac/fi/fixedaset/fi_304_04_02_01.ozr";
  }
  let data = {
    reportName: reportName,
    odiParam: {
      acqDtSt: ed_acqDtStDt.getValue(),
      acqDtEnd: ed_acqDtEndDt.getValue(),
      gubun: lc_srchUseYn.getValue(),
      acctDeptCdSt: ed_srchAcctDeptCdSt.getValue(),
      acctDeptNmSt: ed_srchAcctDeptNmSt.getValue(),
      coCd: ed_coCd.getValue(),
      goodsCd: ed_goodsCd.getValue(),
      acctDeptCdEnd: ed_srchAcctDeptCdEnd.getValue(),
      acctDeptNmEnd: ed_srchAcctDeptNmEnd.getValue(),
      coClsCd: scwin.txtCoClsCd
    },
    viewerParam: {
      mode: "silent"
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
scwin.udc_coCd_cb = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
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
  if (scwin.load) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.load = false;
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_srchAcctDeptCdSt, ed_srchAcctDeptNmSt, ed_srchAcctDeptCdEnd, ed_srchAcctDeptNmEnd]); //  사용부서  
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_initObj();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Search();
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//from
scwin.udc_srchAcctDeptCdSt_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCdSt, ed_srchAcctDeptNmSt)) {
    scwin.popTF = 'T';
    scwin.f_srchDeptPopUp();
  }
};

//to
scwin.udc_srchAcctDeptCdEnd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCdEnd, ed_srchAcctDeptNmEnd)) {
    scwin.popTF = 'T';
    scwin.f_srchDeptPopUp2();
  }
};
scwin.udc_goodsCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_srchAcctDeptCdSt_onclickEvent = function (e) {
  scwin.popTF = 'F';
  scwin.f_srchDeptPopUp();
};
scwin.udc_srchAcctDeptCdEnd_onclickEvent = function (e) {
  scwin.popTF = 'F';
  scwin.f_srchDeptPopUp2();
};
scwin.udc_goodsCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_coCd',popupTitle:'',nameId:'ed_coNm',style:'',id:'udc_coCd','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',btnId:'btn_company',allowCharCode:'0-9',validTitle:'회사코드',maxlengthCode:'3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_srchAcctDeptCdSt',selectID:'',popupID:'',popupTitle:'',nameId:'ed_srchAcctDeptNmSt',style:'',id:'udc_srchAcctDeptCdSt',btnId:'btn_acctDeptCdst','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCdSt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCdSt_onclickEvent',objTypeName:'data',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_srchAcctDeptCdEnd',selectID:'',popupID:'',popupTitle:'',nameId:'ed_srchAcctDeptNmEnd',style:'',btnId:'btn_acctDeptCdEnd',id:'udc_srchAcctDeptCdEnd','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCdEnd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCdEnd_onclickEvent',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',maxlengthCode:'5'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유 형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_goodsCd',nameId:'ed_goodsNm',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_goodsCd','ev:onblurCodeEvent':'scwin.udc_goodsCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_goodsCd_onclickEvent',objTypeCode:'data',mandatoryName:'false',allowCharCode:'0-9',maxlengthCode:'5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'false',mandatoryTo:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',style:'',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'폐기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})