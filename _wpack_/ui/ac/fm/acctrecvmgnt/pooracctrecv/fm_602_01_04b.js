/*amd /ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_01_04b.xml 12008 bbea5e5e2f2a5e2ba71c99ac5ef76284c0b57e277a1d13bde1d4963c76e88b11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수

scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FM058",
    compID: "acb_acctClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // $c.gus.cfDisableKey();
  $c.gus.cfDisableObjects($p, [ed_sacctDeptNm]);
  ed_FromDate.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  acb_acctClsCd.setSelectedIndex(0);
  chb_printCheck.setValue("1");
};
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  var rtnList = new Array();
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출
    case '1':
      rtnList = udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, cd, nm, "T", null, null, null, null, ",,,,", "450", "500", null, null); // 귀속부서			
      // f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sacctDeptCd.setValue(rtnList[0]); // 코드값
    ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
    ed_sacctDeptCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_sacctDeptNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptNm.options.hidVal = "";
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
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.f_Report = async function () {
  // 대표귀속일경우는 수금부서 필수임.
  if (acb_acctClsCd.getValue() == "01") {
    if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_sacctDeptCd, acb_acctClsCd]))) {
      return;
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [ed_FromDate, acb_acctClsCd]))) {
      return;
    }
  }
  var mode = "";
  if (chb_printCheck.getValue() == "1") {
    mode = "print";
  }
  if (chb_previewCheck.getValue() == "1") {
    mode = "preview";
  }
  let data = {
    reportName: "/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_01_04.ozr",
    odiParam: {
      stdYm: ed_FromDate.getValue().trim(),
      acctDeptCd: ed_sacctDeptCd.getValue().trim(),
      acctDeptNm: ed_sacctDeptNm.getValue().trim(),
      acctClsCd: acb_acctClsCd.getValue(),
      acctClsNm: acb_acctClsCd.getText(true) || "",
      amtStd: ed_amtStd.getValue().trim(),
      billRecvAmtStd: ed_billRecvAamtStd.getValue().trim()
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: mode
    },
    formParam: {}
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  if (mode == "print") {
    $c.ext.printOzReport($p, data);
  } else {
    $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  }

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("fm_602_01_04");
  // odiParam.add("stdYm", ed_FromDate.getValue().trim());
  // odiParam.add("acctDeptCd", ed_sacctDeptCd.getValue().trim());
  // odiParam.add("acctDeptNm", ed_sacctDeptNm.getValue().trim());
  // odiParam.add("acctClsCd", acb_acctClsCd.getValue());
  // odiParam.add("acctClsNm", acb_acctClsCd.getValue());
  // odiParam.add("amtStd", ed_amtStd.getValue().trim());
  // odiParam.add("billRecvAmtStd",ed_billRecvAamtStd.getValue().trim());

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();
  // //formParam.add("form1","폼1");

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // //viewerParam.add("viewer.showtree","false");
  // //viewerParam.add("viewer.useprogressbar","true");
  // //viewerParam.add("viewer.zoom","100");
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_01_04.ozr", odiParam, viewerParam, formParam);
};
scwin.button_ozprint_onclick = function (e) {
  scwin.f_Report();
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
scwin.udc_srchAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_FromDate',style:'',pickerType:'dynamic',mandatory:'true',title:'기준년월',displayFormat:'yyyy/MM'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',codeId:'ed_sacctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',nameId:'ed_sacctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfopopup',selectID:'retrieveAcctDeptCdInfo',style:'width:500px','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_srchAcctDeptCd_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',mandatoryCode:'true',validTitle:'수금부서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_acctClsCd',style:'width: 150px;',submenuSize:'fixed'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외매금액기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_amtStd',style:'width: 200px;',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(백만원이상)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부도어음금액기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_billRecvAamtStd',style:'width: 200px;',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(백만원이상)',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'button_ozprint',style:'',type:'button','ev:onclick':'scwin.button_ozprint_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})