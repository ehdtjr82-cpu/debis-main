/*amd /ui/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_04b.xml 13581 1824b8b2ab60e829e291106f02ff1c452806a5c31659e9779b97ef2c6d5a50de */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//환경변수
scwin.sDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.sDate.substring(0, 6) + "01";
scwin.strToDate = scwin.sDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vLoginCoCd = scwin.login.coCd ?? "";
scwin.vLoginCoClsCd = scwin.login.coClsCd ?? "";
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.isChecked = true;

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------

scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  let cd = "";
  let nm = "";
  cd = orgObjCd.getValue();
  nm = orgObjNm.getValue();
  switch (select_code) {
    case 1:
      let param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, cd, nm, "T", null, null, null, null, param, "450", "500", null, null);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      // orgObjCd.setValue(orgObjCd.getValue().trim());
      // orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_dept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList == 'N/A') return;
    ed_sacctDeptCd.setValue(rtnList[0]);
    ed_sacctDeptNm.setValue(rtnList[1]);
    ed_sacctDeptCd.options.hidVal = rtnList[0];
    ed_sacctDeptNm.options.hidVal = rtnList[1];
  } else {
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptNm.options.hidVal = "";
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, 1, 'ALL');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, 1, 'CD');
};
scwin.udc_dept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, 1, 'NM');
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
  scwin.f_setCompanyInfo();
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.f_Report = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_sacctDeptCd, ed_sacctDeptNm]))) {
    return;
  }
  let data = {
    reportName: "/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_04.ozr",
    odiName: "fm_501_01_04",
    odiParam: {
      fromDate: ed_FromDate.getValue().trim(),
      toDate: ed_ToDate.getValue().trim(),
      acctDeptCd: ed_sacctDeptCd.getValue().trim(),
      acctDeptNm: ed_sacctDeptNm.getValue().trim(),
      coCd: ed_coCd.getValue().trim()
    },
    viewerParam: {
      mode: "silent" // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_Close = function () {
  window.close();
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);

  //SET
  //    if(rtnList != null ) { 
  //         if (rtnList[0] == "N/A") return; 
  // 		if(ed_coCd.hidVal != rtnList[0] ){
  // 			scwin.f_initObj();  
  // 		} 
  // 		ed_coCd.setValue(rtnList[0]);	// 코드
  // 		ed_coNm.setValue(rtnList[5]); // 회사명 
  // 		ed_coCd.hidVal = rtnList[0];  // 히든값
  // 		txtCoClsCd.setValue(rtnList[1]);	// 회사구분   
  //     }else{ 
  //     	ed_coCd.setValue("");
  // 		ed_coNm.setValue("");
  // 		ed_coCd.hidVal = ""; 
  // 		txtCoClsCd.setValue(""); 
  // 	} 
  // 	if(txtCoClsCd.getValue() > ACConstants.CO_CLS_CD_DONGBU)  {  	// 자회사 회계 시스템 
  // 		isSubCompany = true;
  // 	}else{
  // 		isSubCompany = false;
  // 	} 
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
  if (ed_coCd.getValue() !== "") {
    ed_coNm.setValue('');
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  if (ed_coNm.getValue() !== "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 회사 변경시 이벤트 
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_sacctDeptCd, ed_sacctDeptNm]); //  부서     
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',popupTitle:'',nameId:'ed_coNm',style:'',btnId:'btn_company',id:'udc_companyInfo',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',objTypeName:'data',validExpCode:'회사코드:yes','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수금일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_FromDate',edToId:'ed_ToDate',objTypeBtn:'data',objTypeFrom:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구(수금)귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'청구(수금)귀속부서',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',id:'udc_dept','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dept_onblurNameEvent',maxlengthName:'30',mandatoryCode:'true',mandatoryName:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger9',style:'',type:'button','ev:onclick':'scwin.f_Report',objType:'bSave',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구(수금)귀속부서내역출력'}]}]}]}]},{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})