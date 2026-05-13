/*amd /ui/ac/fm/fundemployenterprise/fundemployent/fm_204_01_05b.xml 29973 1f4194ee5819b3e2faf507f01573a95aa1c6e42f83ac8814cb2b64d1597f590c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrAcctCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstRpayDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastRpayDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callableRpayDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rpayAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a3',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a4',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a5',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a6',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a7',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a8',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a9',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a10',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a11',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a12',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a13',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.fundemployenterprise.fundemployent.RetrieveMonthBorrowCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"} ',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  ed_qryStDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + '01');
  ed_qryEndDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + '01');
  $c.gus.cfDisableObjects($p, [ed_srchEmpNo]);
};

//-------------------------------------------------------------------------
// DataSet HeaderCreate
//-------------------------------------------------------------------------
// function f_HeaderCreate(){

//     var GAUCE_DATASET_HEADER = "borrClntNo"                
//                                 + ",borrNo"               
//                                 + ",borrAcctCd"           
//                                 + ",qryStDt"
//                                 + ",qryEndDt"
//                                 ;
//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.AddRow();

// }

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  var rtnList = null;
  var sCmdName = "";
  var code = txtCode.getValue();
  var name;
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 조회조건 대출거래처  PopUp 호출
    case '1':
      debugger;
      ed_srchEmpNo.setValue("");
      sCmdName = "retrieveClntList2";
      var param = ",,,025";
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null); // 대출거래처
      break;
    // 대출번호 PopUp 호출
    case '2':
      sCmdName = "retrieveBorrNoInfo";
      rtnList = udc_BorrNo.cfCommonPopUp(scwin.udc_BorrNo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null); // 대출번호
      break;
    // 대출거래처  PopUp 호출
    // case '3' :
    //     sCmdName = "retrieveClntList2"
    //     var param=",,,025";
    //     rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null); // 대출거래처
    // break;
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.Text = rtnList[0];	 // 코드

  // if ( !(txtName == null) )
  //     txtName.value = rtnList[1];	 // 코드명
  //     txtCode.hidVal = rtnList[0]; // 코드
  //     if(select_code =='1'){
  //         txt_srchEmpNo.value = rtnList[4]; // 코드
  //     }else if(select_code =='3'){
  //         txt_empNo.value = rtnList[4]; // 코드
  //     } 
  // } else {
  //     txtCode.Text = ""	 // 코드
  //     if ( !(txtName == null) )
  //     txtName.value = ""	 // 코드명
  //     txtCode.hidVal = "" // 코드

  //     if(select_code =='1'){
  //         txt_srchEmpNo.value = ""; // 코드
  //     }else if(select_code =='3'){
  //         txt_empNo.value = ""; // 코드
  //     } 
  // }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchBorrClntNo.setValue(rtnList[0]); // 코드
    ed_srchClntNm.setValue(rtnList[1]); // 코드명
    ed_srchBorrClntNo.options.hidVal = rtnList[0]; // 코드
    ed_srchEmpNo.setValue(rtnList[4]); // 코드
  } else {
    ed_srchBorrClntNo.setValue(""); // 코드
    ed_srchClntNm.setValue(""); // 코드명
    ed_srchBorrClntNo.options.hidVal = ""; // 코드
    ed_srchEmpNo.setValue(""); // 코드
  }
};
scwin.udc_BorrNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchBorrNo.setValue(rtnList[0]); // 코드
    ed_srchBorrNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_srchBorrNo.setValue(""); // 코드
    ed_srchBorrNo.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [search_cond]))) {
    return;
  }

  //조회기간 외 컬럼 숨기기
  var strtDate = dma_search.get("qryStDt");
  var endDate = dma_search.get("qryEndDt");
  var strtYear = strtDate.substring(0, 4);
  var strtMonth = strtDate.substring(4, 6);
  var endYear = endDate.substring(0, 4);
  var endMonth = endDate.substring(4, 6);
  var month = (endYear - strtYear) * 12 + (endMonth - strtMonth);

  //조회기간 헤더 이름 변경
  scwin.f_headerSetting(strtDate);
  for (var i = 1; month + 1 >= i; i++) {
    var name = "a" + i;
    gr_results.setColumnVisible(name, true);
  }

  // if (!cfIsAfterDate(strtDate,endDate)) {
  //     cfAlertMsg("조회기간시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
  //     ds_search.NameValue(1,"qryEndDt") = "";
  //     return;
  // }

  if (month > 12) {
    await $c.gus.cfAlertMsg($p, "조회기간은  1년을 초과할수 없습니다.");
    dma_search.set("qryEndDt", "");
    return;
  }

  // ds_search.UseChangeInfo = false;
  dma_search.set("borrAcctCd", acb_borrAcctCd.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, search_cond, null);
  ed_qryStDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + '01');
  ed_qryEndDt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + '01');
};
scwin.f_headerSetting = function (strtDate) {
  ds_results.removeAll();
  var a1 = strtDate.toDate("YYYYMMDD").after(0, 0, 0).format("YYYYMM") + "월";
  var a2 = strtDate.toDate("YYYYMMDD").after(0, 1, 0).format("YYYYMM") + "월";
  var a3 = strtDate.toDate("YYYYMMDD").after(0, 2, 0).format("YYYYMM") + "월";
  var a4 = strtDate.toDate("YYYYMMDD").after(0, 3, 0).format("YYYYMM") + "월";
  var a5 = strtDate.toDate("YYYYMMDD").after(0, 4, 0).format("YYYYMM") + "월";
  var a6 = strtDate.toDate("YYYYMMDD").after(0, 5, 0).format("YYYYMM") + "월";
  var a7 = strtDate.toDate("YYYYMMDD").after(0, 6, 0).format("YYYYMM") + "월";
  var a8 = strtDate.toDate("YYYYMMDD").after(0, 7, 0).format("YYYYMM") + "월";
  var a9 = strtDate.toDate("YYYYMMDD").after(0, 8, 0).format("YYYYMM") + "월";
  var a10 = strtDate.toDate("YYYYMMDD").after(0, 9, 0).format("YYYYMM") + "월";
  var a11 = strtDate.toDate("YYYYMMDD").after(0, 10, 0).format("YYYYMM") + "월";
  var a12 = strtDate.toDate("YYYYMMDD").after(0, 11, 0).format("YYYYMM") + "월";
  var a13 = strtDate.toDate("YYYYMMDD").after(0, 12, 0).format("YYYYMM") + "월";
  gr_results.setHeaderValue("headearA1", a1);
  gr_results.setHeaderValue("headearA2", a2);
  gr_results.setHeaderValue("headearA3", a3);
  gr_results.setHeaderValue("headearA4", a4);
  gr_results.setHeaderValue("headearA5", a5);
  gr_results.setHeaderValue("headearA6", a6);
  gr_results.setHeaderValue("headearA7", a7);
  gr_results.setHeaderValue("headearA8", a8);
  gr_results.setHeaderValue("headearA9", a9);
  gr_results.setHeaderValue("headearA10", a10);
  gr_results.setHeaderValue("headearA11", a11);
  gr_results.setHeaderValue("headearA12", a12);
  gr_results.setHeaderValue("headearA13", a13);
  gr_results.setColumnVisible("a1", false);
  gr_results.setColumnVisible("a2", false);
  gr_results.setColumnVisible("a3", false);
  gr_results.setColumnVisible("a4", false);
  gr_results.setColumnVisible("a5", false);
  gr_results.setColumnVisible("a6", false);
  gr_results.setColumnVisible("a7", false);
  gr_results.setColumnVisible("a8", false);
  gr_results.setColumnVisible("a9", false);
  gr_results.setColumnVisible("a10", false);
  gr_results.setColumnVisible("a11", false);
  gr_results.setColumnVisible("a12", false);
  gr_results.setColumnVisible("a13", false);
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = function () {
  var options = {
    fileName: "월별대출잔액현황",
    sheetName: "월별대출잔액현황"
  };
  $c.data.downloadGridViewExcel($p, gr_results, options);
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var rowCnt = ds_results.getTotalRow();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      ed_totalRow.setValue(rowCnt);
    }
  } else {
    return;
  }
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (ed_srchBorrClntNo.getValue() == "") {
    ed_srchClntNm.setValue("");
    ed_srchEmpNo.setValue("");
  } else {
    scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
  }
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchBorrClntNo, ed_srchClntNm, 'F');
};
scwin.udc_BorrNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_srchBorrNo, null, 'F');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'search_cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntList2popup',style:'',selectID:'retrieveClntList2',id:'udc_clntNo',nameId:'ed_srchClntNm',codeId:'ed_srchBorrClntNo',btnId:'btn_clntNo',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',refDataCollection:'dma_search',code:'borrClntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_srchEmpNo',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대출번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',selectID:'retrieveBorrNoInfo',id:'udc_BorrNo',nameId:'',codeId:'ed_srchBorrNo',btnId:'btn_srchBorrNo',maxlengthCode:'5',objTypeCode:'Data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_BorrNo_onclickEvent',refDataCollection:'dma_search',code:'borrNo',hideName:'true',objTypeName:'key',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_borrAcctCd',style:'width:140px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'qryEndDt',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월별대출잔액현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel',gridID:'gr_results',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'대출번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'성명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'대출금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'대출일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'최초상환일',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'최종상환일',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'중도상환일',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'회당금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA1',value:'1월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA2',value:'2월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA3',value:'3월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA4',value:'4월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA5',value:'5월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA6',value:'6월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA7',value:'7월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA8',value:'8월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA9',value:'9월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA10',value:'10월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA11',value:'11월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA12',value:'12월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'headearA13',value:'13월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrClntNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrAmt',inputType:'text',style:'',value:'',width:'80',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'firstRpayDt',inputType:'text',style:'',value:'',width:'120',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lastRpayDt',inputType:'text',style:'',value:'',width:'120',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'callableRpayDt',inputType:'text',style:'',value:'',width:'120',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rpayAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a3',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a4',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a5',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a6',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a7',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a8',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a9',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a10',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a11',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a12',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a13',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'borrAmt\')',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',expression:'sum(\'a1\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum(\'a2\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',expression:'sum(\'a3\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',expression:'sum(\'a4\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',expression:'sum(\'a5\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',expression:'sum(\'a6\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',expression:'sum(\'a7\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column83',value:'',displayMode:'label',expression:'sum(\'a8\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',expression:'sum(\'a9\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',expression:'sum(\'a10\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',expression:'sum(\'a11\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',expression:'sum(\'a12\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',expression:'sum(\'a13\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})