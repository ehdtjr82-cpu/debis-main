/*amd /ui/ac/fm/fundemploy/borrmgnt/fm_201_01_06b.xml 11536 42a3f0cb075edbd0a5a3bd0f6e7bd86d0f15f3b8c0bb4948f0b8ebfafb233157 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  ica_stdDt.focus();
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  var rtnList = null;
  var sCmdName = "";
  var name;
  code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 차입번호 PopUp 호출
    case '1':
      rtnList = udc_borrLedgNo.cfCommonPopUp(scwin.udc_borrLedgNo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null); // 차입번호
      break;
  }
};
scwin.udc_borrLedgNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_borrLedgNo.setValue(rtnList[0]); // 코드
    if (!(ed_borrLedgNm.getValue() == null)) ed_borrLedgNm.setValue(rtnList[1]); // 코드명
    ed_borrLedgNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_borrLedgNo.setValue(""); // 코드
    if (!(ed_borrLedgNm.getValue() == null)) ed_borrLedgNm.setValue(""); // 코드명
    ed_borrLedgNo.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.tagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm.getValue() == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd.tagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm.getValue() == null) {
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
  if (!(await $c.gus.cfValidate($p, [ica_stdDt, ed_borrLedgNo]))) return false;

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam;
  // if(acb_prtClsCd.getValue()=='02')
  //     odiParam = new ODIParam("fm_201_01_06") ;
  // else if(acb_prtClsCd.getValue()=='03')
  //     odiParam = new ODIParam("fm_201_01_06_01") ;
  // else if(acb_prtClsCd.getValue()=='04')
  //     odiParam = new ODIParam("fm_201_01_06_02") ;
  // else if(acb_prtClsCd.getValue()=='01')
  //     odiParam = new ODIParam("fm_201_01_06_03") ;

  // //odiParam.add("sysPath", txt_sysPath.value) ;
  // odiParam.add("stdDate", ica_stdDt.getValue()) ;                   
  // odiParam.add("endYn", acb_endYn.getValue()) ;
  // odiParam.add("borrLedgNo", ed_borrLedgNo.getValue()) ;

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;
  // //formParam.add("form1","폼1") ;

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // //viewerParam.add("viewer.showtree","false"); // 트리 표시
  // //viewerParam.add("viewer.useprogressbar","true"); // 인쇄 진행 중 프로그레스바 표시
  // //viewerParam.add("viewer.zoom","85");    // 확대 비율
  // //viewerParam.add("viewer.largebundle","true"); //스크롤바
  // viewerParam.add("print.mode","silent"); // 인쇄 옵션창 표시 없이 바로 출력

  //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터

  var reportName;
  if (acb_prtClsCd.getValue() == '02')
    // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fm/fundemploy/borrmgnt/fm_201_01_06.ozr", odiParam, viewerParam, formParam);
    reportName = "/ac/fm/fundemploy/borrmgnt/fm_201_01_06.ozr";else if (acb_prtClsCd.getValue() == '03')
    // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fm/fundemploy/borrmgnt/fm_201_01_06_01.ozr", odiParam, viewerParam, formParam);
    reportName = "/ac/fm/fundemploy/borrmgnt/fm_201_01_06_01.ozr";else if (acb_prtClsCd.getValue() == '04')
    // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fm/fundemploy/borrmgnt/fm_201_01_06_02.ozr", odiParam, viewerParam, formParam);
    reportName = "/ac/fm/fundemploy/borrmgnt/fm_201_01_06_02.ozr";else if (acb_prtClsCd.getValue() == '01')
    // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fm/fundemploy/borrmgnt/fm_201_01_06_03.ozr", odiParam, viewerParam, formParam);
    reportName = "/ac/fm/fundemploy/borrmgnt/fm_201_01_06_03.ozr";
  let data = {
    reportName: reportName,
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      stdDate: ica_stdDt.getValue(),
      endYn: acb_endYn.getValue(),
      borrLedgNo: ed_borrLedgNo.getValue()

      // mode : "silent"
      // isframe : false
      // configmode : "html"
      // printcommand : false
      // showTree : true,
    },
    viewerParam: {
      useprogressbar: true // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  // wfm_ozReport.getWindow().scwin.reportSearch(data);
};
scwin.udc_borrLedgNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_borrLedgNo, null, 'F');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Search();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_common_textbox',type:'page',variableClone:'',src:'/cm/udc/common_textbox.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stdDt',style:'',mandatory:'true',title:'기준일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_prtClsCd',style:'width: 150px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_endYn',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'',code:'',codeId:'ed_borrLedgNo',id:'udc_borrLedgNo',maxlengthCode:'5',maxlengthName:'100',name:'',nameId:'ed_borrLedgNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveBorrLedgNoInfopopup',selectID:'retrieveBorrLedgNoInfo',style:'',refDataCollection:'',hideName:'true','ev:onclickEvent':'scwin.udc_borrLedgNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'ozFrame',class:'ozWrap'},E:[{T:1,N:'w2:iframe',A:{src:'/ui/cm/zz/ozreportComp.xml',style:'',id:'wfm_ozReport'}}]}]}]}]}]}]})