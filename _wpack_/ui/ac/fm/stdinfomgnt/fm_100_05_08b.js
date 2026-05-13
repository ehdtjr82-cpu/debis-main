/*amd /ui/ac/fm/stdinfomgnt/fm_100_05_08b.xml 25022 121e2e6fb656dc98eba6ff9938f52e43026d5f6f1efad6a7dad07774ce16d82d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankbookHistory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befRamt',name:'이전잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'증가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withdrawAmt',name:'감소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'현재잔액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBankbook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBankbook',action:'/ac.fm.stdinfomgnt.RetrieveBankbookEachLedgerDurationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchBankbook","key":"IN_DS1"},{"id":"ds_bankbookHistory","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bankbookHistory","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBankbook_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.strFromDate = ""; // 현재일자를 구한다.
scwin.login = ""; // 로그인 정보를 가져온다.
scwin.privAdmin = ""; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  

scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.vLoginCoCd = ""; // 소속 자회사  
scwin.vLoginCoClsCd = ""; //회계_회사구분('CO035' : 0:동부 EXPRESS)	

scwin.isSubCompany = false; // 자회사여부

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.
  scwin.login = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
  scwin.privAdmin = ""; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  

  scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드 
  scwin.vLoginCoCd = scwin.login.coCd || ""; // 소속 자회사  
  scwin.vLoginCoClsCd = scwin.login.coClsCd || ""; //회계_회사구분('CO035' : 0:동부 EXPRESS)	

  //공통코드값
  const codeOptions = [{
    grpCd: "FM010",
    compID: "lc_bankbookKndCd"
  }];
  await $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  //초기값
  ed_stdDtSt.setValue(scwin.strFromDate);
  ed_stdDtEnd.setValue(scwin.strFromDate);
  chk_printCheck.setValue("1");
  chk_previewCheck.setValue("1");
  $c.gus.cfDisableKey($p);
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
  scwin.f_PopUpCompanyInfo('T');
  if (scwin.login.acctDeptCd == "00009") {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_co.cfCommonPopUpAsync(scwin.udc_co_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_co_callBackFunc = function (rtnList) {
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    edCoClsCd.setValue(rtnList[1]); // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    edCoClsCd.setValue("");
  }

  //tobe삭제 : 그리드에 ramtFcrc,rcptAmtFcrc,withdrawAmtFcrc,sumRamtFcrc 컬럼 미존재
  // if(ed_coCd.getValue() =="017"){
  //     gr_bankbookHisotry.ColumnProp("ramtFcrc","show") = "true";
  //     gr_bankbookHisotry.ColumnProp("rcptAmtFcrc","show") = "true";
  //     gr_bankbookHisotry.ColumnProp("withdrawAmtFcrc","show") = "true";
  //     gr_bankbookHisotry.ColumnProp("sumRamtFcrc","show") = "true";
  // }else{
  //     gr_bankbookHisotry.ColumnProp("ramtFcrc","show") = "false";
  //     gr_bankbookHisotry.ColumnProp("rcptAmtFcrc","show") = "false";
  //     gr_bankbookHisotry.ColumnProp("withdrawAmtFcrc","show") = "false";
  //     gr_bankbookHisotry.ColumnProp("sumRamtFcrc","show") = "false";
  // }

  if (edCoClsCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  // 필수입력 항목에 대한 내역을 CHECK한다.
  if (!(await $c.gus.cfValidate($p, [ed_stdDtSt, ed_stdDtEnd]))) {
    return;
  }
  if ($c.date.diffDate($p, ed_stdDtSt.getValue().trim(), ed_stdDtEnd.getValue().trim()) > 365) {
    await $c.win.alert($p, "조회기간은 1년을 넘을 수 없습니다.");
    return;
  }
  if ($c.date.diffDate($p, ed_stdDtSt.getValue().trim(), ed_stdDtEnd.getValue().trim()) < 0) {
    await $c.win.alert($p, "시작일자를 종료일 이전으로 선택[입력]하여 주십시오.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;

  //데이터셋팅
  dma_searchBankbook.set("bankbookNo", ed_bankbookNo.getValue());
  dma_searchBankbook.set("bankbookKndCd", lc_bankbookKndCd.getValue());
  $c.sbm.execute($p, sbm_searchBankbook);
};
scwin.sbm_searchBankbook_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    var rowCnt = ds_bankbookHistory.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    }
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  var code = txtCode.getValue().trim();
  var name = txtName.getValue();
  switch (select_code) {
    case '1':
      // 통장조회    
      var param = "," + "," + "," + "," + "," + ed_coCd.getValue() + "," + edCoClsCd.getValue() + ",0";
      await udc_bankbookNo.cfCommonPopUpAsync(scwin.udc_bankbookNo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, "F", null, null);
    // 통장
  }
};
scwin.udc_bankbookNo_callBackFunc = function (rtnList) {
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_bankbookNo.setValue(rtnList[0].trim()); // 코드
    ed_bankbookNm.setValue(rtnList[2]); // 코드명
    ed_bankbookNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_bankbookNo.setValue(""); // 코드
    ed_bankbookNm.setValue(""); // 코드명
    ed_bankbookNo.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
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
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_bankbookHistory.getRowCount() <= 0) {
    await $c.win.alert($p, "통장별원장내역이 존재하지않습니다.");
    return false;
  }
  var options = {
    fileName: "통장별원장내역.xlsx",
    sheetName: "통장별원장내역"
  };
  $c.data.downloadGridViewExcel($p, gr_bankbookHisotry, options);
};

//-------------------------------------------------------------------------
// 오즈 출력
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  // 필수입력 항목에 대한 내역을 CHECK한다.
  if (!(await $c.gus.cfValidate($p, [ed_stdDtSt, ed_stdDtEnd]))) return;
  if ($c.date.diffDate($p, ed_stdDtSt.getValue().trim(), ed_stdDtEnd.getValue().trim()) > 365) {
    await $c.win.alert($p, "조회기간은 1년을 넘을 수 없습니다.");
    return;
  }
  if ($c.date.diffDate($p, ed_stdDtSt.getValue().trim(), ed_stdDtEnd.getValue().trim()) < 0) {
    await $c.win.alert($p, "시작일자를 종료일 이전으로 선택[입력]하여 주십시오.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "/ac/fm/stdinfomgnt/fm_100_05_08b.ozr",
    odiParam: {
      sysPath: "dbl.ac.fm.stdinfomgnt",
      fromDate: ed_stdDtSt.getValue().trim(),
      toDate: ed_stdDtEnd.getValue().trim(),
      bankbookKndCd: lc_bankbookKndCd.getValue().trim(),
      bankbookNo: ed_bankbookNo.getValue().trim(),
      coCd: ed_coCd.getValue().trim(),
      coNm: ed_coNm.getValue().trim()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  let opts = {};
  //둘다 체크 표시시엔 미리보기 표시
  if (chk_previewCheck.getValue() == "1") {
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

  // let opts = {
  //     id: "ozReportPopup",
  //     popupName: "오즈 리포트",
  //     modal: true,
  //     type: "browserPopup",
  //     width: 1000,
  //     height: 600,
  //     title: "오즈 리포트"
  // };
  // await $c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);

  //asis코드
  // var odiParam = new ODIParam("fm_100_05_08b") ;
  // odiParam.add("sysPath", "dbl.ac.fm.stdinfomgnt") ;
  // odiParam.add("fromDate",ed_stdDtSt.text.trim());
  // odiParam.add("toDate",ed_stdDtEnd.text.trim());
  // odiParam.add("bankbookKndCd",lc_bankbookKndCd.BindColVal.trim());   
  // odiParam.add("bankbookNo",ed_bankbookNo.text.trim());   
  // odiParam.add("coCd",ed_coCd.text.trim());   
  // odiParam.add("coNm",txt_coNm.value.trim());   

  // //alert('odiParam:' + odiParam.getParameterValues());
  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;
  // //formParam.add("form1","폼1") ; 

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();

  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  // viewerParam.add("export.filename", "통장별원장조회");
  // //viewerParam.add("print.mode","silent"); // 인쇄 옵션창 표시 없이 바로 출력

  // //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fm/stdinfomgnt/fm_100_05_08b.ozr", odiParam, viewerParam, formParam);
};

//-------------------------------------------------------------------------
// 회사코드 입력시
//-------------------------------------------------------------------------
scwin.udc_co_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_co_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_bankbookNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_bankbookNo, ed_bankbookNm, 'F');
};
scwin.udc_bankbookNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankbookNo, ed_bankbookNm, '1');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:55px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfoPopup',style:'',class:'',id:'udc_co',codeId:'ed_coCd',btnId:'btn_company',nameId:'ed_coNm',refDataCollection:'dma_searchBankbook',code:'coCd',validTitle:'회사코드',validExpCode:'회사코드:yes',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_co_onclickEvent',selectID:'retrieveDongbuGroupCompanyInfo',mandatoryName:'true',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_co_onblurCodeEvent',maxByteLengthCode:'3',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_stdDtSt',refDataMap:'dma_searchBankbook',refEdDt:'toDate',refStDt:'fromDate',style:'',edFromId:'ed_stdDtSt',edToId:'ed_stdDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data',titleFrom:'조회일자Form',titleTo:'조회일자To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBankBookCdInfoPopup',style:'',class:'',id:'udc_bankbookNo',codeId:'ed_bankbookNo',btnId:'btn_bankbookNo',validExpCode:'통장번호:yes',maxlengthCode:'5',nameId:'ed_bankbookNm',objTypeCode:'data',objTypeName:'key','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent',selectID:'retrieveBankBookCdInfo','ev:onblurCodeEvent':'scwin.udc_bankbookNo_onblurCodeEvent',readOnlyName:'true',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankbookKndCd',style:'',submenuSize:'auto',chooseOptionLabel:'전체',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'display: none',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',templateYn:'N',gridUpYn:'N',gridID:'gr_bankbookHisotry',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_bankbookHistory',id:'gr_bankbookHisotry',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'통장번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'통장명',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'계정명',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'이전잔액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'증가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'감소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'현재잔액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'befRamt',inputType:'text',removeBorderStyle:'false',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcptAmt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'withdrawAmt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###',dataType:'number',expression:'SUM("befRamt")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###',dataType:'number',expression:'SUM("rcptAmt")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###',dataType:'number',expression:'SUM("withdrawAmt")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###',dataType:'number',expression:'SUM("ramt")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozprint',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통장별원장(기간)'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none;'},E:[{T:1,N:'xf:input',A:{style:'',id:'edCoClsCd'}}]}]}]}]}]})