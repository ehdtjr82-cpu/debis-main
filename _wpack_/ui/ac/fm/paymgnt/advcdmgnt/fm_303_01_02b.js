/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_02b.xml 9482 fa4bb6b356cdb8464075f44f6ee9d5e018bc97f07f219a0c3daaa210491b2718 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.login = $c.data.getMemInfo($p);
scwin.sAcctDeptCd = scwin.login.acctDeptCd;
scwin.sAppDeptNm = scwin.login.acctDeptNm;
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ica_stdYm.setValue(scwin.strCurDate.substring(0, 6));
  ed_appDept.setValue(scwin.sAcctDeptCd);
  ed_appDeptNm.setValue(scwin.sAppDeptNm);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  let rtnList = null;
  let sCmdName = "";
  let name = "";
  code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 부서 PopUp 호출
    case '1':
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null); // 관리부서
      break;
    // 차입번호 PopUp 호출
    // case '2' :
    //     udc_borrLedgNoInfo.cfCommonPopUp(scwin.udc_borrLedgNoInfo_callBackFunc, code,name,sPopupCls,null,null,null,null,null,null,null,null,null); // 차입번호
    //     break;
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.setValue(rtnList[0]);	 // 코드
  //     if ( txtName != null )
  //     {
  //         txtName.setValue(rtnList[1]);	 // 코드명
  //     }
  //     txtCode.options.hidVal = rtnList[0]; // 코드
  // } else {
  //     txtCode.setValue("");	 // 코드
  //     if ( txtName != null )
  //     {
  //         txtName.setValue("");	 // 코드명
  //     }
  //     txtCode.options.hidVal = ""; // 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_appDept.setValue(rtnList[0]); // 코드
    if (ed_appDeptNm != null) {
      ed_appDeptNm.setValue(rtnList[1]); // 코드명
    }
    ed_appDept.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_appDept.setValue(""); // 코드
    if (ed_appDeptNm != null) {
      ed_appDeptNm.setValue(""); // 코드명
    }
    ed_appDept.options.hidVal = ""; // 코드
  }
};

// scwin.udc_borrLedgNoInfo_callBackFunc = function(rtnList) {

// };

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
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
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 오즈 검색 후 결과를 화면 하단에 표시
//-------------------------------------------------------------------------
scwin.f_Search = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_stdYm, ed_appDept]))) return;
  let sPostYn = lc_postYn.getValue() + "";
  let data = {
    reportName: "/ac/fm/paymgnt/advcdmgnt/fm_303_01_02.ozr",
    odiName: "fm_303_01_02",
    odiParam: {
      CLOSE_YM: ica_stdYm.getValue(),
      DEPT_CD: ed_appDept.getValue(),
      DEPT_NM: ed_appDeptNm.getValue(),
      POST_YN: sPostYn
    },
    viewerParam: {
      mode: "silent" // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_appDept, ed_appDeptNm, 'F');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_appDept, ed_appDeptNm, '1');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_appDept',nameId:'ed_appDeptNm',objTypeCode:'data',mandatoryCode:'true',maxlengthCode:'5',allowCharCode:'0-9',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',validTitle:'사용부서',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',style:'',displayFormat:'yyyy/MM',title:'사용년월',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'w80',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',style:'',submenuSize:'auto',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Search'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})