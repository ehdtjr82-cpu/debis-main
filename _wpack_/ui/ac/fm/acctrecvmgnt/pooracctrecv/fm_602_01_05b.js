/*amd /ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_01_05b.xml 12834 f68f2bd3a4a935cfcb455c7f427bd01a42772f53d5ba871431c418ba360e3d61 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.gus.cfDisableKey($p);
  var strFromDate = $c.date.getServerDateTime($p, "yyyyMM");
  ica_FromDate.setValue(strFromDate);

  //공통코드
  var codeOptions = [{
    grpCd: "FM058",
    compID: "lc_acctClsCd"
  }, {
    grpCd: "FM044",
    compID: "lc_poorAcctRecvClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //인쇄옵션초기값
  cbx_printCheck.setValue("1");
};
scwin.ondataload = function () {
  lc_acctClsCd.setSelectedIndex(0);
  lc_poorAcctRecvClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.f_Report = async function (e) {
  //asis
  // // 대표귀속일경우는 수금부서 필수임.
  // if (lc_acctClsCd.BindColVal == "01") {
  //     if (!cfValidate([ed_FromDate, lc_acctClsCd, lc_poorAcctRecvClsCd])) {
  //         return;
  //     }
  // } else {
  //     if (!cfValidate([ed_FromDate, lc_poorAcctRecvClsCd])) {
  //         return;
  //     }
  // }

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("fm_602_01_05");
  // odiParam.add("stdYm", ed_FromDate.Text.trim());
  // odiParam.add("acctDeptCd", ed_sacctDeptCd.Text.trim());
  // odiParam.add("acctDeptNm", ed_sacctDeptNm.Text.trim());
  // odiParam.add("acctClsCd", lc_acctClsCd.BindColVal);
  // odiParam.add("acctClsNm", lc_acctClsCd.Text);
  // odiParam.add("poorAcctRecvClsCd", lc_poorAcctRecvClsCd.BindColVal);
  // odiParam.add("poorAcctRecvClsNm", lc_poorAcctRecvClsCd.Text);

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();
  // //formParam.add("form1","폼1");

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // //viewerParam.add("viewer.showtree","false");
  // //viewerParam.add("viewer.useprogressbar","true");
  // //viewerParam.add("viewer.zoom","100");
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_01_05.ozr", odiParam, viewerParam, formParam);

  //tobe
  if (lc_acctClsCd.getValue() == "01") {
    //tobe변경 : asis 관리채권유형 전체여도 필수 alert창 안뜸.
    if (!(await $c.gus.cfValidate($p, [ica_FromDate, lc_acctClsCd]))) {
      //if (!(await $c.gus.cfValidate([ica_FromDate, lc_acctClsCd, lc_poorAcctRecvClsCd]))) {
      return;
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [ica_FromDate]))) {
      //if (!(await $c.gus.cfValidate([ica_FromDate, lc_poorAcctRecvClsCd]))) {
      return;
    }
  }
  var data = {
    reportName: "/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_01_05.ozr",
    odiParam: {
      stdYm: ica_FromDate.getValue().trim(),
      acctDeptCd: ed_sacctDeptCd.getValue().trim(),
      acctDeptNm: ed_sacctDeptNm.getValue().trim(),
      acctClsCd: lc_acctClsCd.getValue(),
      acctClsNm: lc_acctClsCd.getText(true),
      poorAcctRecvClsCd: lc_poorAcctRecvClsCd.getValue().trim(),
      poorAcctRecvClsNm: lc_poorAcctRecvClsCd.getText(true).trim()
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  let opts = {};
  //둘다 체크 표시시엔 미리보기 표시
  if (cbx_previewCheck.getValue() == 1) {
    //미리보기
    opts = {
      "type": 'viewer',
      "printMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  } else {
    //인쇄옵션
    opts = {
      "type": 'print',
      "printMode": 'view'
    };
    $c.ext.printOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  var cd = "";
  var nm = "";
  if (flag != "ALL") {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출
    case '1':
      await udc_sacctDept.cfCommonPopUp(scwin.f_resultPopUp, cd, nm, "T", null, null, null, null, ",,,,", "450", "500", null, null); // 귀속부서			
      //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
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
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] == "N/A") return;
    ed_sacctDeptCd.setValue(rtnList[0]); // 코드값
    ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
    ed_sacctDeptCd.opitons.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_sacctDeptNm.opitons.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    ed_sacctDeptCd.opitons.hidVal = "";
    ed_sacctDeptNm.opitons.hidVal = "";
  }
};
scwin.udc_sacctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
scwin.udc_sacctDept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};
scwin.udc_sacctDept_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_FromDate',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'기준년월'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfoPopup',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_sacctDeptCd',validTitle:'',nameId:'ed_sacctDeptNm',style:'',id:'udc_sacctDept',btnId:'btn_sacctDept',objTypeCode:'data',objTypeName:'key',validExpCode:'수금부서:yes:maxLength=5&number',maxlengthCode:'5',allowCharCode:'0-9',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_sacctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sacctDept_onblurNameEvent','ev:onclickEvent':'scwin.udc_sacctDept_onclickEvent',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctClsCd',style:'width: 159px;',submenuSize:'auto',mandatory:'true',title:'부서구분',sortOption:'value',displayMode:'value delim label',search:'start'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리채권유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_poorAcctRecvClsCd',style:'width: 159px;',submenuSize:'auto',mandatory:'true',title:'관리채권유형',chooseOptionLabel:'전체',displayMode:'value delim label',editType:'select',search:'start'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report',style:'',type:'button','ev:onclick':'scwin.f_Report',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})