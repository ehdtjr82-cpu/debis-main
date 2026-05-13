/*amd /ui/ac/fi/electaxinvc/fi_900_01_04b.xml 60514 efea9beebd8f2cb2bc7c5c6475408c43d77526440df99ea7489cd6978b3b257e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'spplyDtSt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDtEnd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarYn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendEmpNo',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountDetailHistory',saveRemovedData:'true','ev:ondataload':'scwin.ds_accountDetailHistory_ondataload','ev:onremoverow':'scwin.ds_accountDetailHistory_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'responsetype',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetypeNm',name:'응답',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation1',name:'응답 메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'senddate',name:'전송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'registdate',name:'등록일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_backUp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'responsetype',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetypeNm',name:'응답',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation1',name:'응답 메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'senddate',name:'전송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'registdate',name:'등록일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountHistory',saveRemovedData:'true','ev:ondataload':'scwin.ds_accountHistory_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'classGbn',name:'신고 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxbilltypecodeNm',name:'세금계산서 종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplydate',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demandername',name:'공급받는자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demandercorpregnum',name:'공급받는자 종사업장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demandercorpregnumNm',name:'공급받는자 종사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyamount',name:'공급가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxamount',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentidentifier',name:'부가세 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgVatNo',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalamount',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demandercontact',name:'E-MAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'E-MAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'classcode',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suppliername',name:'공급자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suppliercorpregnum',name:'공급자 종사업장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suppliercorpregnumNm',name:'공급자 종사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentfunccodeNm',name:'신고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxbilltypecode',name:'세금계산서 종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentfunccode',name:'신고 상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'registdate',name:'등록일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:ondataload':'scwin.ds_out_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellPchsGbn',name:'매출입 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatNo',name:'부가세 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계 처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'받는자 이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDelYn',name:'전표삭제 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newDeclarYn',name:'신규 거래처전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delDeclarYn',name:'삭제 거래처전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarYn',name:'전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentfunccodeNm',name:'신고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demanderidentifier',name:'공급받는자 (사업자번호)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demandername',name:'공급받는자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyamount',name:'공급가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxamount',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalamount',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastResponse',name:'최종 응답',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newDeclarCnt',name:'신규신고 카운트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDeclarCnt',name:'수정신고 카운트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delDeclarCnt',name:'삭제요청 카운트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'전표 작성자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'전표 작성자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newSendId',name:'전송자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newSendNm',name:'전송자명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchHist'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'documentidentifier',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.electaxinvc.RetreiveElecTaxinvcSlipHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_History',action:'/ac.fi.electaxinvc.RetreiveElecTaxinvcInfoHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchHist","key":"IN_DS1"},{"id":"ds_accountHistory","key":"OUT_DS1"},{"id":"ds_accountDetailHistory","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_accountHistory","key":"OUT_DS1"},{"id":"ds_accountDetailHistory","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_History_submitdone','ev:submiterror':'scwin.sbm_History_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isRetrieve = false;
scwin.strCurDate;
scwin.strFromDate = false;
scwin.isSubCompany;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.hid_coClsCd;
scwin.onpageload = function () {
  scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 현재년월일을 구한다.
  scwin.strFromDate = WebSquare.date.dateAdd(scwin.strCurDate, -5);
  if (scwin.strFromDate.substring(0, 6) != scwin.strCurDate.substring(0, 6)) {
    scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
  }
  div_qryConKnd1.show("");
  div_qryConKnd2.hide("");
  div_qryConKnd3.hide("");
  div_qryConKnd4.hide("");
};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "FI065",
    compID: "gr_out:lastResponse"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = async function () {
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.hid_coClsCd = scwin.vLoginCoClsCd;
  scwin.f_PopUpCompanyInfo('T');
  ed_spplyDtSt.setValue(scwin.strFromDate);
  ed_spplyDtEnd.setValue(scwin.strCurDate);
  acb_qryConKnd.setValue("공급일자");
  acb_selpchClsCd.setValue("매출");
  if (ACConstants.CO_CD_DONGBU != scwin.vLoginCoCd && scwin.sysAdminYn != 1) {
    await $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
  } else {
    ed_coCd.setValue(ACConstants.CO_CD_DONGBU);
  }
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// DataSet Header 정의                                                                                                                                                                                                                                                                     
//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// function f_createHeader() {    
//     // 조회조건
//     var SEARCH_HEADER =  "spplyDtSt:STRING(8)"     
//                         + ",spplyDtEnd:STRING(8)"                
//                         + ",acctCd:STRING(5)"           
//                         + ",crn:STRING(13)"           
//                         + ",declarYn:STRING(1)"      
//                         + ",selpchClsCd:STRING(10)"
//                         + ",slipNo:STRING(10)"
//                         + ",vatNo:STRING(10)"
//                         + ",blNo:STRING(20)"
//                         + ",coCd:STRING(3)"
//                         + ",coClsCd:STRING(1)"
//                         + ",qryConKnd:STRING(100)"
//                         + ",drawEmpNo:STRING(8)"
//                         + ",sendEmpNo:STRING(8)"
//                         + ",vatDeclarAcctDeptCd:STRING"                         
//                         ;

//     ds_search.SetDataHeader(SEARCH_HEADER);
//             ds_search.AddRow(); 

//             SEARCH_HEADER =  "documentidentifier:STRING(35)"
//                         ;

//     ds_searchHist.SetDataHeader(SEARCH_HEADER);
//     ds_searchHist.AddRow(); 
// }

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //ds_search.nameValue(1,"clntNo") = '100002';

  if (acb_qryConKnd.getValue() == "전표번호") {
    if (!(await $c.gus.cfValidate($p, [ed_slipNo]))) {
      return;
    }
  } else if (acb_qryConKnd.getValue() == "부가세번호") {
    if (!(await $c.gus.cfValidate($p, [ed_vatNo]))) {
      return;
    }
  } else if (acb_qryConKnd.getValue() == "공급일자") {
    if ($c.gus.cfIsNull($p, ed_spplyDtSt.getValue())) {
      await $c.win.alert($p, "공급일자는 필수 입니다.");
      ed_spplyDtSt.focus();
      return;
    }
    if ($c.gus.cfIsNull($p, ed_spplyDtEnd.getValue())) {
      await $c.win.alert($p, "공급일자는 필수 입니다.");
      ed_spplyDtEnd.focus();
      return;
    }
    var dateDiff = WebSquare.date.dateDiff(ed_spplyDtSt.getValue().trim(), ed_spplyDtEnd.getValue().trim());
    if (dateDiff > 60) {
      await $c.win.alert($p, "조회기간(공급일자)이 60일을 넘을 수 없습니다.");
      return;
    }
    // if(WebSquare.date.isValidDate(ed_spplyDtSt.getValue()) == false){
    //     await $c.win.alert("공급일자가 날자 형식에 맞지 않습니다.");
    //     ed_spplyDtSt.focus();
    //     return;
    // }
    // if(!$c.gus.cfValidate(ed_spplyDtSt.getValue().trim().replace(" ",""), "date=YYYYMMDD")){
    //     await $c.win.alert("공급일자가 날자 형식에 맞지 않습니다.");
    //     ed_spplyDtSt.focus();
    //     return;
    // }
    // if(!$c.gus.cfValidateValue(ed_spplyDtEnd.getValue().trim().replace(" ",""), "date=YYYYMMDD")){
    //     await $c.win.alert("공급일자가 날자 형식에 맞지 않습니다.");
    //     ed_spplyDtEnd.focus();
    //     return;
    // }
  }
  if ($c.gus.cfIsNull($p, ed_coCd.getValue())) {
    await $c.win.alert($p, "회사코드는 필수입니다.");
    ed_coCd.focus();
    return;
    // if(ed_coCd.isDisabled == false) ed_coCd.focus();
    // return;
  }
  ds_accountDetailHistory.removeAll();
  ds_accountHistory.removeAll();

  //alert(ds_search.text);

  scwin.isRetrieve = true;
  dma_search.set("coClsCd", scwin.hid_coClsCd);
  dma_search.set("declarYn", acb_declarYn.getValue());
  dma_search.set("selpchClsCd", acb_selpchClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
  scwin.isRetrieve = false;
  // scwin.f_retrieveHistory();
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 귀속부서 팝업
      var param = "";
      rtnList = udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // scwin.f_resultPopEd(ed_acctCd, txt_acctNm, rtnList);		
      break;
    case '2':
      // 사업자번호 
      var param = "";
      rtnList = udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_crn, txt_crnNm, rtnList);
      break;
    case '3':
      // 귀속부서 팝업
      var param = ",,,,," + ed_spplyDtSt.getValue().substr(0, 4);
      if (scwin.isSubCompany)
        // 자회사 회계 시스템   
        {
          param = ",,," + ed_coCd.getValue() + "," + edCoClsCd.getValue() + "," + ed_spplyDtSt.getValue().substr(0, 4);
        }
      udc_c_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_c_vatDeclarAcctDeptCd_callBackFunc, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);

      //  f_resultPopEd(ed_vatDeclarAcctDeptCd, txt_vatDeclarAcctDeptNm, rtnList);
      break;
    default:
      break;
  }
};
scwin.udc_c_vatDeclarAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    //ed_spotSalePlcCd.text = "";               
    //txt_spotSalePlcNm.value = "";
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openPopUp(disGubun, 'T');
    return;
  }
  if (inObj.getValue().trim() == inObj.options.hidVal) {
    return;
  }

  //strNm.value = "";
  //strCd.hidVal = "";
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  if (inObj.getValue().trim() != "") {
    scwin.f_openPopUp(disGubun, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue(""); // 코드
    strNm.setValue(""); // 명
    strCd.options.hidVal = ""; // 히든값
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
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
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond, [ed_coCd, ed_coNm, scwin]);
  ed_spplyDtSt.setValue(scwin.strFromDate);
  ed_spplyDtEnd.setValue(scwin.strCurDate);
};
scwin.f_Excel = async function () {
  if (ds_out.getTotalRow() == 0) {
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "전자세금계산서 전표이력조회.xlsx",
      sheetName: "전자세금계산서 전표이력조회",
      startRowIndex: 0,
      startColumnIndex: 0,
      type: 1
    };
    $c.data.downloadGridViewExcel($p, gr_out, options);
  }
};

//-------------------------------------------------------------------------
// 응답 이력 조회
//-------------------------------------------------------------------------
scwin.f_retrieveHistory = function () {
  if (ds_out.getTotalRow() == 0) {
    return;
  }

  // ds_searchHist.setCellData(1, "documentidentifier", ds_out.getCellData(ds_out.getRowPosition(), "vatNo"));
  ds_searchHist.set("documentidentifier", ds_out.getCellData(0, "vatNo"));
  // ds_searchHist.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_History);
};

// -------------------------------------------------------------------------
// 이력 그리드 Height 조절
// -------------------------------------------------------------------------
// function f_grdHeight(add){
//     cfGrdHeiht("gr_accountHistory",add);
//     cfGrdHeiht("gr_accountDetailHistory",add);    
// }

scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 사원팝업 - 전표작성자
//-------------------------------------------------------------------------
// scwin.f_openEmpPopUp = function(orgObjCd, orgObjNm, select_code, flag) {

// 	// POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
// 	// 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
// 	// flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
// 	let cd = "";
// 	let nm = "";

// 	if ( flag != "SKIP") {
// 		if (flag == "ALL") {
// 			cd = "";
// 			nm = "";
// 		} else {
// 			cd = orgObjCd.getValue();
// 			nm = orgObjNm.getValue();
// 		}
// 	} else {
// 		cd = orgObjCd;
// 		nm = "";
// 	}

//     rtnList = udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, cd,nm,"T",null,null,null,null,null,null,null,null,null); 
// }

//-------------------------------------------------------------------------
// 사원팝업 - 전표작성자
//-------------------------------------------------------------------------
scwin.f_openEmpPopUp = function (gubun, gb, cdObj, nmObj) {
  var vTitle = "사원팝업, 사원번호, 사원명";
  var rtnList = new Array();
  var pCode = cdObj.getValue();
  var pName = nmObj.getValue();
  if (gb == 1) $c.gus.cfClearPairObj($p, cdObj);else if (gb == 2) $c.gus.cfClearPairObj($p, nmObj);
  if (gubun == 1) {
    rtnList = udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, pCode, pName, "T", null, null, "150,176", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  사원코드
    // cfSetReturnValue(rtnList, cdObj, nmObj);
  } else if (gubun == 2) {
    rtnList = udc_acEmpInfo2.cfCommonPopUp(scwin.udc_acEmpInfo2_callBackFunc, pCode, pName, "T", null, null, "150,176", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  사원코드
    // cfSetReturnValue(rtnList, cdObj, nmObj);
  }
};

// 전표작성자 udc
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  // scwin.f_openEmpPopUp(ed_drawEmpNo,ed_drawEmpNm, '6','ALL');
  scwin.f_openEmpPopUp(1, '', ed_drawEmpNo, ed_drawEmpNm);
};
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_drawEmpNo, ed_drawEmpNm, rtnList);
};
scwin.udc_acEmpInfo_onviewchangeCodeEvent = function (info) {
  scwin.f_openEmpPopUp(1, 1, ed_drawEmpNo, ed_drawEmpNm);
};
scwin.udc_acEmpInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openEmpPopUp(1, 2, ed_drawEmpNo, ed_drawEmpNm);
};

// 전표작성부서 udc
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_dept_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_acctCd, ed_acctNm, rtnList);
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_checkPopEd(ed_acctNm, ed_acctCd, '1');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '1');
};

// 전송자 udc
scwin.udc_acEmpInfo2_onclickEvent = function (e) {
  scwin.f_openEmpPopUp(2, '', ed_sendEmpNo, ed_sendEmpNm);
};
scwin.udc_acEmpInfo2_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_sendEmpNo, ed_sendEmpNm, rtnList);
};
scwin.udc_acEmpInfo2_onviewchangeCodeEvent = function (info) {
  scwin.f_openEmpPopUp(2, 1, ed_sendEmpNo, ed_sendEmpNm);
};
scwin.udc_acEmpInfo2_onviewchangeNameEvent = function (info) {
  scwin.f_openEmpPopUp(2, 2, ed_sendEmpNo, ed_sendEmpNm);
};

// 사업자 udc
scwin.udc_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_crn, ed_crnNm, rtnList);
};
scwin.udc_crnInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', 'F');
};
scwin.udc_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_crn, ed_crnNm, '2');
};

// 부가세신고부서서 udc
scwin.udc_c_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_c_vatDeclarAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, '3');
};

// 회사코드
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.acb_qryConKnd_onchange = function (info) {
  var value = acb_qryConKnd.getValue();
  if (value == "공급일자") {
    div_qryConKnd1.show("");
    div_qryConKnd2.hide("");
    div_qryConKnd3.hide("");
    div_qryConKnd4.hide("");
  } else if (value == "전표번호") {
    div_qryConKnd1.hide("");
    div_qryConKnd2.show("");
    div_qryConKnd3.hide("");
    div_qryConKnd4.hide("");
  } else if (value == "부가세번호") {
    div_qryConKnd1.hide("");
    div_qryConKnd2.hide("");
    div_qryConKnd3.show("");
    div_qryConKnd4.hide("");
  } else if (value == "BL넘버") {
    div_qryConKnd1.hide("");
    div_qryConKnd2.hide("");
    div_qryConKnd3.hide("");
    div_qryConKnd4.show("");
  }
};
scwin.clear = function (objCd, objNm) {
  objCd.setValue("");
  objNm.setValue("");
};
scwin.btn_clear1_onclick = function (e) {
  scwin.clear(ed_drawEmpNo, ed_drawEmpNm);
};
scwin.btn_clear2_onclick = function (e) {
  scwin.clear(ed_sendEmpNo, ed_sendEmpNm);
};
scwin.btn_clear3_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // $c.gus.cfHideDSWaitMsg(gr_out);

  if (gr_out.getTotalRow() == 0) {
    await $c.win.alert($p, "조회결과가 존재하지 않습니다.");
  } else {
    scwin.f_retrieveHistory();
    ed_totalRow.setValue(gr_out.getTotalRow());
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_out);
  $c.gus.cfShowError($p, sbm_retrieve);
};
scwin.sbm_History_submitdone = function (e) {
  ds_backUp.setData(ds_accountDetailHistory.getAllData());
};
scwin.sbm_History_submiterror = function (e) {
  $c.gus.cfShowError($p, tr_History);
};
scwin.textColorFormat = function (data, formatData, rowIdx, colIdx) {
  if (data == "Y") {
    gr_out.setCellColor(rowIdx, colIdx, "red");
  } else {
    gr_out.setCellColor(rowIdx, colIdx, "blue");
  }
  return data;
};
scwin.declarYnFormat = function (data, formatData, rowIdx, colIdx) {
  var result;
  if (ds_out.getCellData(rowIdx, "newDeclarYn") == "Y") {
    gr_out.setCellColor(rowIdx, colIdx, "red");
    result = "예";
  } else {
    gr_out.setCellColor(rowIdx, colIdx, "blue");
    result = "아니오";
  }
  return result;
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  ds_searchHist.set("documentidentifier", ds_out.getCellData(rowIndex, "vatNo"));
  $c.sbm.execute($p, sbm_History);
};
scwin.gr_accountHistory_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (gr_accountHistory.getCellDisplayData(rowIndex, 0) != "신규발급") {
    ds_accountDetailHistory.removeAll();
  } else {
    ds_accountDetailHistory.setData(ds_backUp.getAllData());
  }
};
scwin.ds_out_ondataload = function () {
  ed_totalRow.setValue(ds_out.getTotalRow());
};
scwin.ds_accountHistory_ondataload = function () {
  ed_totalRow2.setValue(ds_accountHistory.getTotalRow());
};
scwin.ds_accountDetailHistory_ondataload = function () {
  ed_totalRow3.setValue(ds_accountDetailHistory.getTotalRow());
};
scwin.ds_accountDetailHistory_onremoverow = function (info) {
  ed_totalRow3.setValue("0");
};
scwin.udc_acEmpInfo2_onblurCodeEvent = function (e) {
  scwin.f_openEmpPopUp('', 1, ed_sendEmpNo, ed_sendEmpNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th',id:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_qryConKnd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.qryConKnd','ev:onchange':'scwin.acb_qryConKnd_onchange',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공급일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'공급일자'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'전표번호'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부가세번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'부가세번호'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B/L NO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'BL넘버'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td',id:'div_qryConKnd1'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'spplyDtSt',refDataMap:'dma_search',style:'',id:'',refEdDt:'spplyDtEnd',edFromId:'ed_spplyDtSt',edToId:'ed_spplyDtEnd',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'display: none;',tagname:'td',id:'div_qryConKnd2'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',ref:'data:dma_search.slipNo',mandatory:'true',title:'전표번호',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'display: none;',tagname:'td',id:'div_qryConKnd3'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vatNo',style:'width: 150px;',ref:'data:dma_search.vatNo',title:'부가세번호',mandatory:'true',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'display: none;',tagname:'td',id:'div_qryConKnd4'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',style:'width: 150px;',ref:'data:dma_search.blNo',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표작성부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',nameId:'ed_acctNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',id:'udc_dept',refDataCollection:'dma_search',code:'acctCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',maxlengthName:'30','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'사업자번호조회,사업자번호,사업자명',selectID:'retrieveCrnInfo',style:'',code:'crn',refDataCollection:'dma_search',btnId:'btn_crn',id:'udc_crnInfo',popupGridHeadTitle:'사업자번호,사업자명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validExpName:'사업자명:no:maxLength=70&notAllowed',maxlengthCode:'10',maxlengthName:'70',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'false',objTypeCode:'data',mandatoryName:'false','ev:onclickEvent':'scwin.udc_crnInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_crnInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_crnInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표작성자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drawEmpNo',nameId:'ed_drawEmpNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'사원조회,사원코드,사원명',selectID:'retrieveAcEmpInfo',style:'',objTypeCode:'data',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'6',validExpCode:'작성자:no:format=000000',mandatoryName:'false',maxlengthName:'50',code:'drawEmpNo',refDataCollection:'dma_search',id:'udc_acEmpInfo',popupGridHeadTitle:'사원코드,사원명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',btnId:'btn_drawEmpNo_search','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acEmpInfo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onviewchangeCodeEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear1',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sendEmpNo',nameId:'ed_sendEmpNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'사원조회,사원코드,사원명',selectID:'retrieveAcEmpInfo',style:'',objTypeCode:'data',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'6',validExpCode:'작성자:no:format=000000',mandatoryName:'false',maxlengthName:'50',code:'sendEmpNo',refDataCollection:'dma_search',id:'udc_acEmpInfo2',popupGridHeadTitle:'사원코드,사원명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',btnId:'btn_drawEmpNo_search','ev:onclickEvent':'scwin.udc_acEmpInfo2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acEmpInfo2_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_acEmpInfo2_onviewchangeCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear2',style:'',type:'button','ev:onclick':'scwin.btn_clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_c_vatDeclarAcctDeptCd',btnId:'btn_c_vatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',nameId:'ed_vatDeclarAcctDeptNm',popupID:'popup_c_vatDeclarAcctDeptCd',validTitle:'부가세관리부서',selectID:'retrieveVatDeclarAcctDeptCd',refDataCollection:'dma_search',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',maxlengthCode:'5',objTypeCode:'key',allowCharCode:'0-9',editTypeCode:'select',validExpCode:'부가세관리부서',maxlengthName:'30',objTypeName:'key',style:'','ev:onclickEvent':'scwin.udc_c_vatDeclarAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_c_vatDeclarAcctDeptCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_declarYn',style:'width: 230px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미신고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_selpchClsCd',style:'width: 230px;',submenuSize:'fixed',ref:'',displayMode:'label',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'매출'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'매입'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear3',style:'',type:'button','ev:onclick':'scwin.btn_clear3_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표 이력',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_out_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'매출입</br>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'전표</br>번호',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'부가세</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'회계</br>처리일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'받는자</br>이메일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'전표삭제</br>여부',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'신규</br>거래처전송',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column60',value:'삭제</br>거래처전송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'신고상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'공급받는자</br>(사업자번호)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'공급받는자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'공급가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'최종</br>응답',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'신규신고</br>카운트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'수정신고</br>카운트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'삭제요청</br>카운트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'전표</br>작성자사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'전표</br>작성자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'전송자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'전송자명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellPchsGbn',inputType:'text',style:'',value:'',width:'100',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'email',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDelYn',inputType:'text',style:'',value:'',width:'80',readOnly:'true',customFormatter:'scwin.textColorFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'newDeclarYn',inputType:'text',style:'',value:'',width:'80',readOnly:'true',customFormatter:'scwin.textColorFormat'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'delDeclarYn',value:'',displayMode:'label',readOnly:'true',customFormatter:'scwin.textColorFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'declarYn',value:'',displayMode:'label',readOnly:'true',customFormatter:'scwin.declarYnFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'documentfunccodeNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'demanderidentifier',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'demandername',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supplyamount',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxamount',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totalamount',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',style:'',id:'lastResponse',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'newDeclarCnt',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDeclarCnt',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'delDeclarCnt',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drawEmpNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'empNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drawAcctDeptCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true',hidden:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'newSendId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'newSendNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:' row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'section',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신고 이력',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_accountHistory',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_accountHistory',id:'gr_accountHistory',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_accountHistory_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'신고</br>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'세금계산서</br>종류',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'공급받는자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'공급받는자</br>종사업장번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'공급받는자</br>종사업장명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'공급가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'부가세</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'E-MAIL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'E-MAIL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'공급자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'공급자</br>종사업장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'공급자</br>종사업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'신고상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'세금계산서</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'신고</br>상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'등록일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'classGbn',inputType:'text',style:'',value:'',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxbilltypecodeNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplydate',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'demandername',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'demandercorpregnum',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'demandercorpregnumNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyamount',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxamount',inputType:'text',style:'',value:'',width:'100',hidden:'false',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'documentidentifier',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgVatNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totalamount',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'demandercontact',value:'',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'email',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'classcode',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'suppliername',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'suppliercorpregnum',value:'',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'suppliercorpregnumNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'documentfunccodeNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'taxbilltypecode',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'documentfunccode',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{inputType:'text',style:'',id:'registdate',value:'',readOnly:'true',dataType:'text',displayFormat:'####/##/## ##:##:##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'응답 이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_accountDetailHistory',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_accountDetailHistory',focusMode:'row',id:'gr_accountDetailHistory',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'응답',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'응답 메시지',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'전송일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'등록일',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'responsetype',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'responsetypeNm',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'messageinformation1',inputType:'text',removeBorderStyle:'false',width:'130',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'senddate',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',displayFormat:'####/##/## ##:##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'registdate',inputType:'text',style:'',textAlign:'right',value:'',width:'100',readOnly:'true',displayFormat:'####/##/## ##:##:##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'이메일재전송일경우 성공적으로 전송하였을 경우엔 응답이력이 오지 않습니다. ',style:''}}]}]}]}]}]})