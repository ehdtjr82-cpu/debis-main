/*amd /ui/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_03_02b.xml 10636 ce15a90b530268b93cd209e99fc22c10bf1435eb72d1124c33f1ee1eb77b02e0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startprtMn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endprtMn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptNm',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FM062",
    compID: "acb_deptClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //f_Retrieve();
  // scwin.f_Header();

  dma_search.set("acctDeptCd", scwin.login.acctDeptCd);
  dma_search.set("deptNm", scwin.login.acctDeptNm);
  acb_deptClsCd.setSelectedIndex(0);
  //날짜셋팅
  ed_startprtMn.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  ed_endprtMn.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  ed_startprtMn.focus();
};

// //-------------------------------------------------------------------------
// // 헤더생성
// //-------------------------------------------------------------------------   
// function f_Header(){
//     // 조회조건
//     var SEARCH_HEADER =         ",startprtMn:STRING(6)"  
//                                 + ",endprtMn:STRING(6)" 
//                             + ",deptClsCd:STRING(2)"
//                             + ",acctDeptCd:STRING(5)"
//                             + ",deptNm:STRING(50)"
//                             + ",outClsCd:STRING(1)";

//     ds_search.SetDataHeader(SEARCH_HEADER);
//     ds_search.AddRow();
//         // Session 이용
//     ds_search.NameString(1,"acctDeptCd") = "<%=login.getAcctDeptCd()%>"
//     ds_search.NameString(1,"deptNm") = "<%=login.getAcctDeptNm()%>";
// }

//-------------------------------------------------------------------------
// 채권실적 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_startprtMn, ed_endprtMn, ed_acctDeptCd]))) {
    return;
  }

  //     // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  //     var formParam = new FormParam() ;
  //     //formParam.add("form1","폼1") ; 

  //     // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  //     var viewerParam = new ViewerParam();
  //     //viewerParam.add("viewer.showtree","false"); // 트리 표시
  //     viewerParam.add("viewer.zoom","100");
  //     viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  //     viewerParam.add("print.mode","silent"); // 인쇄 옵션창 표시 없이 바로 출력

  //     //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  //     // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)-수금부서별

  //     var odiParam = new ODIParam("fm_601_03_02") ;
  // //		odiParam.add("sysPath", "dbl.ac.fm.acctrecvmgnt.acctrecvperiodmgnt") ;
  //     odiParam.add("startprtMn",ed_startprtMn.getValue().trim());
  //     odiParam.add("endprtMn",ed_endprtMn.getValue().trim());
  //     odiParam.add("deptClsCd",acb_deptClsCd.getValue().trim()); 
  //     odiParam.add("acctDeptCd",ed_acctDeptCd.getValue().trim());

  //     cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_03_02.ozr", odiParam, viewerParam, formParam);

  let data = {
    reportName: "/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_03_02.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      startprtMn: ed_startprtMn.getValue().trim(),
      // ds_retrieve.getCellData(row, "cvsslMgntNo")
      endprtMn: ed_endprtMn.getValue().trim(),
      // ds_retrieve.getCellData(row, "rltNo")
      deptClsCd: acb_deptClsCd.getValue().trim(),
      //ds_retrieve.getCellData(row, "stockMgntNo")
      acctDeptCd: ed_acctDeptCd.getValue().trim()
      // mode : "silent"
      // isframe : false
      // configmode : "html"
      // printcommand : false
      // showTree : true,
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  // 부서조회
  //var param = ",,,0,"; 
  rtnList = udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_deptNm.getValue(), check, null, null, null, null, null, null, null, null, null);
  // f_resultPopEd(ed_acctDeptCd,txt_deptNm,rtnList);
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]); // 코드
    ed_deptNm.setValue(rtnList[1]); // 명
    ed_acctDeptCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_acctDeptCd.setValue("");
    ed_deptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};
scwin.btn_search_onclick = async function (e) {
  if ($c.gus.cfIsNull($p, ed_startprtMn.getValue()) || $c.gus.cfIsNull($p, ed_endprtMn.getValue())) {
    await $c.win.alert($p, "기준년월은 필수 입력 항목입니다.");
    ed_startprtMn.focus();
    return;
  }
  scwin.f_OzReport();
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_deptNm, '1');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_acqDate',refDataMap:'dma_search',refEdDt:'endprtMn',refStDt:'startprtMn',style:'',edFromId:'ed_startprtMn',edToId:'ed_endprtMn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_acctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'deptNm',nameId:'ed_deptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfopopup',selectID:'retrieveAcctDeptCdInfo',style:'',refDataCollection:'dma_search',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',validTitle:'수금부서코드',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_deptClsCd',style:'width: 150px;',submenuSize:'fixed'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'ozFrame',class:'ozWrap'},E:[{T:1,N:'w2:iframe',A:{src:'/ui/cm/zz/ozreportComp.xml',style:'',id:'wfm_ozReport'}}]}]}]}]}]}]})