/*amd /ui/ac/fi/fixedaset/fi_302_01_02b.xml 44392 f6c06e05103b5eb5c4bbdc97ee2ba5020d73362f74b24721c2065a9359135d57 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo2',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_empNo_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstFixedAsetNo',name:'최초자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyProvAmt',name:'감가상각누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyBookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt',name:'당월;감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyDeprAmt',name:'감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'감가상각누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyBookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprRt',name:'상각율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsName',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNo',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNm',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',name:'종료일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveDepreciationDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEmpNo',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_empNo_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchEmpNo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
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
  udc_companyInfo2.hide("");
  chb_printCheck.setValue("1");
  // scwin.f_SearchHeaderCreate();

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
  scwin.f_empNo();
};
scwin.f_empNo = function () {
  var grp_cd = "FI624";
  var pCode = scwin.empNo;

  // SELECT 절 
  // var param1 = 
  //     " CD      as COL1 "
  // + ",CD_NM 	as COL2 "
  // + ",'' 		as COL3 "
  // + ",'' 		as COL4 "
  // + ",'' 		as COL5 "
  // + ",'' 		as COL6 "
  // + ",''      as COL7 "
  // + ",''      as COL8 "
  // + ",''      as COL9 "
  // + ",''      as COL10"
  // ;

  var param1 = "CD  as COL1 , CD_NM  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ002 ";

  // 조건절
  var param3 = " AND GRP_CD = '" + grp_cd + "'" + " AND USE_YN = '1' "
  //+ " AND CD_NM LIKE '"+pCode+"' || '%'"
  + " AND CD_NM = '" + pCode + "' ";
  var param4 = "CD";
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,
    queryId: "dinymicQueryTest" // 쿼리ID
    ,
    param1: param1 // SELECT
    ,
    param2: param2 // 대상테이블
    ,
    param3: param3 // 조건절
    ,
    param4: param4 // CD
  };
  //데이터셋에 정보설정
  ds_empNo_condition.setJSON(strParam);
  $c.sbm.execute($p, sbm_searchEmpNo);

  // ds_empNo.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  // ds_empNo.Reset();  
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_closeYm, ed_acqDtStDt, ed_acqDtEndDt]);
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

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_closeYm.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  ed_acqDtStDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + "01");
  ed_acqDtEndDt.setValue(WebSquare.date.getCurrentServerDate());
  ica_closeYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_Validation())) {
    return;
  }
  // ds_search.UseChangeInfo = false

  dma_search.set("closeYm", ica_closeYm.getValue());
  dma_search.set("asetPatternCd", acb_asetPatternCd.getValue());
  dma_search.set("asetKndCd", ""); //hid_asetKndCd
  dma_search.set("fixedAsetNo", ed_srchFixedAsetNo.getValue());
  dma_search.set("fixedAsetNo2", ed_srchFixedAsetNo2.getValue());
  dma_search.set("asetPatternClsCd", acb_asetPatternClsCd.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
// function f_grdHeiht(objGrd, size)
// {    
//     var objGrd = eval(objGrd);
//     var strHeight = objGrd.style.height ;
//     var intHeight = parseInt(strHeight.replace("px",""));

//     intHeight = intHeight + size;

//     if (intHeight > 0 ) {
//         objGrd.style.height = intHeight + "px";
//     }
// }

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm, ed_acqDtStDt, ed_acqDtEndDt]))) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await c.gus.cfAlertMsg(MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtEndDt.focus();
    return false;
  }

  // if (!$c.gus.cfIsNull(ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull(ed_acqDtEndDt.getValue())) {
  //     if (!$c.gus.cfValidateValue(ed_acqDtEndDt.getValue(),"minDate=" + ed_acqDtStDt.getValue())) {
  //         $c.gus.cfAlertMsg(MSG_CM_ERR_039);
  //         ed_acqDtStDt.focus();
  //         return false;
  //     }
  // }

  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    if (WebSquare.date.dateDiff(ed_acqDtStDt.getValue(), ed_acqDtEndDt.getValue()) < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_acqDtStDt.focus();
      return false;
    }
  }
  if (!(await $c.gus.cfValidate($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm, ed_srchFixedAsetNo, ed_srchFixedAsetNo2]))) {
    return false;
  }
  if (ed_srchFixedAsetNo.getValue() > ed_srchFixedAsetNo2.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_045);
    ed_srchFixedAsetNo.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 데이터셋 헤더 생성
//-------------------------------------------------------------------------
// function f_SearchHeaderCreate(){
//     var GAUCE_DATASET_HEADER ="closeYm:STRING" 
//                             + ",acqDtStDt:STRING"
//                             + ",acqDtEndDt:STRING"
//                             + ",fixedAsetNo:STRING"
//                             + ",fixedAsetNo2:STRING"                             	
//                             + ",acctDeptCd:STRING"
//                             + ",asetPatternCd:STRING"
//                             + ",asetKndCd:STRING"
//                             + ",procDt:STRING"
//                             + ",asetPatternClsCd:STRING"
//                             + ",coCd:STRING(3)"
//                             + ",coClsCd:STRING(1)";
//     ds_search.ClearAll();
//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.AddRow();
// }

//-------------------------------------------------------------------------
// Object 값 반환함수
//-------------------------------------------------------------------------
// function f_GetObjValue(inObj) {
//     return (inObj.tagName == "OBJECT") ? inObj.text : inObj.value;
// }

//-------------------------------------------------------------------------
// 귀속부서 팝업
//-------------------------------------------------------------------------
scwin.f_srchDeptPopUp = function () {
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
// 콤보데이터 검증
//-------------------------------------------------------------------------
scwin.f_CheckComboData = function (objCombo, comboTitle) {
  if (objCombo.Index == -1 && $c.gus.cfIsNull($p, objCombo.getValue()) == false) {
    objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.getValue());
    if (objCombo.Index == -1) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [comboTitle + "코드"]);
      objCombo.Focus();
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function (gr_groupCode, gridName) {
  if (ds_master.getRowCount() <= 0) {
    $c.win.alert($p, "감가상각내역이 존재하지않습니다.");
    return false;
  }
  var options = {
    fileName: "감가상각명세서",
    sheetName: "감가상각명세서"
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
  // cfGridToExcel(gr_groupCode, gridName,"C:\\" + gridName + ".xls", 4+8+16);
};
scwin.f_OzReport = async function () {
  if (!scwin.f_Validation()) {
    return;
  }
  var mode = "";
  if (chb_printCheck.getValue() == "1") {
    mode = "print";
  }
  if (chb_previewCheck.getValue() == "1") {
    mode = "preview";
  }
  let data = {
    // odiName    : "fi_302_01_02",
    reportName: "/ac/fi/fixedaset/fi_302_01_02.ozr",
    odiParam: {
      sysPath: "dbl.ac.fi.fixedaset",
      closeYm: ica_closeYm.getValue(),
      asetPatternCd: acb_asetPatternCd.getValue(),
      acqDtStDt: ed_acqDtStDt.getValue(),
      acqDtEndDt: ed_acqDtEndDt.getValue(),
      fixedAsetNo: ed_srchFixedAsetNo.getValue(),
      fixedAsetNo2: ed_srchFixedAsetNo2.getValue(),
      acctDeptCd: ed_srchAcctDeptCd.getValue(),
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      asetPatternClsCd: acb_asetPatternClsCd.getValue(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd
    },
    formParam: {
      acctDeptNm: ed_srchAcctDeptNm.getValue(),
      asetPatternNm: acb_asetPatternCd.getText(true) || ""
    },
    viewerParam: {
      // useprogressbar : true, // 프로그레스바 쓸지 말지
      // zoom : 90, // 배율 설정
      mode: mode
    }
  };

  // let opts = {
  //     id: "ozReportPopup",
  //     popupName: "오즈 리포트",
  //     modal: true,
  //     type: "browserPopup",
  //     width: 1000,
  //     height: 600,
  //     title: "오즈 리포트"
  // };

  if (mode == "print") {
    let opts = {
      "type": 'print',
      "printMode": 'view'
    };
    $c.ext.printOzReport($p, data, opts);
  } else {
    let opts = {
      "type": 'viewer',
      "printMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  }

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("fi_302_01_02") ;
  // odiParam.add("sysPath", "dbl.ac.fi.fixedaset") ;
  // odiParam.add("closeYm",ica_closeYm.getValue());
  // odiParam.add("asetPatternCd",acb_asetPatternCd.getValue());
  // odiParam.add("acqDtStDt",ed_acqDtStDt.getValue());
  // odiParam.add("acqDtEndDt",ed_acqDtEndDt.getValue());
  // odiParam.add("fixedAsetNo",ed_srchFixedAsetNo.getValue());
  // odiParam.add("fixedAsetNo2",ed_srchFixedAsetNo2.getValue());
  // odiParam.add("acctDeptCd",ed_srchAcctDeptCd.getValue());
  // odiParam.add("acctDeptNm",ed_srchAcctDeptNm.getValue()) ;
  // //odiParam.add("acctDeptNm2",txt_srchAcctDeptNm2.value) ;
  // odiParam.add("asetPatternClsCd",acb_asetPatternClsCd.getValue());
  // //odiParam.add("asetPatternNm",(cfIsNull(lc_asetPatternCd.BindColVal)?"":lc_asetPatternCd.text)) ;
  // odiParam.add("coCd",ed_coCd.getValue());
  // odiParam.add("coClsCd",scwin.txtCoClsCd) ;

  //     //alert(odiParam.getParameterValues() );

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;
  // //formParam.add("form1","폼1") ;
  // formParam.add("acctDeptNm",ed_srchAcctDeptNm.getValue()) ;
  // //formParam.add("acctDeptNm2",txt_srchAcctDeptNm2.value) ;
  // formParam.add("asetPatternNm",($c.gus.cfIsNull(acb_asetPatternCd.getValue())?"":acb_asetPatternCd.getValue())) ;

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // //viewerParam.add("viewer.showtree","false"); // 트리 표시
  // //viewerParam.add("viewer.useprogressbar","true"); // 인쇄 진행 중 프로그레스바 표시
  // //viewerParam.add("viewer.zoom","85");    // 확대 비율
  // viewerParam.add("print.mode","print"); // 인쇄 옵션창 표시

  // //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  // $c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/fixedaset/fi_302_01_02.ozr", odiParam, viewerParam, formParam);
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
    txt_coNm.setValue("");
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
    if (ica_closeYm.getValue() != "") {
      acctYear = ica_closeYm.getValue().substring(0, 4);
    } else {
      acctYear = WebSquare.date.getCurrentServerDate().substring(0, 4);
    }

    // 최상위부서조회
    ed_coCd2.setValue(ed_coCd.getValue());
    ed_coNm2.setValue(ed_coNm.getValue());
    var rtnAcctDeptList = udc_companyInfo2.cfCommonPopUp(scwin.udc_coCd_callBackFunc2, ed_coCd2.getValue(), acctYear, scwin.pWinClose, null, null, null, null, null, null, null, null, null);
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
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, sbm_search);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp();
};
scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_srchAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    scwin.f_srchDeptPopUp();
  }
};
scwin.sbm_search_submitdone = async function (e) {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ed_totalRow.setValue(ds_master.getRowCount());
};
scwin.btn_ozprint_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.sbm_searchEmpNo_submitdone = function (e) {
  // if(e.responseJSON.GAUCE) {
  //     ds_empNo.setJSON(e.responseJSON.GAUCE);

  //     if (ds_empNo.getRowCount() > 0){
  //         chb_printCheck.show("");
  //         chb_previewCheck.show("");
  //         btn_ozprint.show("");
  //     }else{
  //         chb_printCheck.hide("");
  //         chb_previewCheck.hide("");
  //         btn_ozprint.hide("");
  //     }
  // }
};
scwin.btn_clean_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.deprRtFormat = function (value) {
  return (Math.floor(value * 100) / 100).toFixed(2);
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue()) == false) ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
};
scwin.ed_srchFixedAsetNo2_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo2.getValue()) == false) ed_srchFixedAsetNo2.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo2.getValue(), 10));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveUppermostAcctDeptCdInfo',codeId:'ed_coCd2',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm2',style:'display: none;',code:'',name:'',refDataCollection:'',btnId:'btn_company2',id:'udc_companyInfo2',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',mandatory:'true',title:'마감년월',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_asetPatternCd',style:'',submenuSize:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent',refDataCollection:'dma_search','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_acqDate',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_asetPatternClsCd',style:'',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_srchFixedAsetNo',placeholder:'',style:'',maxlength:'10','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{class:' w100',id:'ed_srchFixedAsetNo2',placeholder:'',style:'',maxlength:'10','ev:onblur':'scwin.ed_srchFixedAsetNo2_onblur',allowChar:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clean',style:'',type:'button','ev:onclick':'scwin.btn_clean_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridID:'gr_master',gridDownFn:'scwin.f_GridToExcel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'자산유형',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'자산명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'귀속부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'자산번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column26',value:'최초자산번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'내용연수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'내용월수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'원취득액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'취득가액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column21',value:'전기말',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'당월</br>감가상각비',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column64',value:'당기말',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'취득일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'상각율',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'자산증가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'자산감소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'취득구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column40',value:'리스거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'시작일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'종료일',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'감가상각누계',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'감가상각비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'감가상각누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'장부가액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'firstFixedAsetNo',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLife',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLifeMonth',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgAcqAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befYyProvAmt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befYyBookAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mmDeprAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyDeprAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyProvAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyBookAmt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprRt',inputType:'text',style:'',value:'',width:'100',dataType:'float',displayFormat:'#.#0',displayFormatter:'scwin.deprRtFormat',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetIncrAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetDecrAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqClsName',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lsClntNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqClsStdt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqClsEnddt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'orgAcqAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'acqAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'befYyProvAmt\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'befYyBookAmt\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'mmDeprAmt\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',expression:'sum(\'thisYyDeprAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column83',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',expression:'sum(\'thisYyProvAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',expression:'sum(\'thisYyBookAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',expression:'sum(\'asetIncrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',expression:'sum(\'asetDecrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ozprint',style:'',type:'button','ev:onclick':'scwin.btn_ozprint_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감가상각명세서'}]}]}]}]}]}]}]}]}]})