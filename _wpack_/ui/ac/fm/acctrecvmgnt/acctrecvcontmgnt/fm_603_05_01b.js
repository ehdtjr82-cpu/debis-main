/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_05_01b.xml 17212 22a557c29f6b66afad30c450bf40ba17f2347f230d96f517a4083ba389cdc3bb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'잔액년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyAcctDeptCd',name:'수금부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ramtStdDt',name:'잔액기준일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnDt',name:'회신일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveRemainAmtConfirmationDocumentPrint',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.CreateRemainAmtConfirmationDocumentPrintCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRemainAmtConfirmationDocumentPrint_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_collMoneyAcctDeptNm, ed_clntNm, ed_crnNm]);
  ica_ramtYm.setValue(scwin.g_sCurrDate.substring(0, 6));
  ica_ramtStdDt.setValue(scwin.g_sCurrDate);
  ica_returnDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  // let rtnList = null;
  // let sCmdName = "";
  let code = txtCode.getValue();
  let name = txtName.getValue();
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null); // 관리부서
      break;
    // 거래처 PopUp 호출
    case '2':
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 거래처
      break;
    case '3':
      udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 거래처
      break;
  }

  // if ( rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     txtCode.setValue(rtnList[0]);	// 코드
  //     txtName.setValue(rtnList[1]);	// 코드명
  //     txtCode.options.hidVal = rtnList[0];	// 코드
  // }else{
  //     txtCode.setValue("");	// 코드
  //     txtName.setValue("");	// 코드명
  //     txtCode.options.hidVal = "";	// 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_collMoneyAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_collMoneyAcctDeptNm.setValue(rtnList[1]); // 코드명
    ed_collMoneyAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_collMoneyAcctDeptCd.setValue(""); // 코드
    ed_collMoneyAcctDeptNm.setValue(""); // 코드명
    ed_collMoneyAcctDeptCd.options.hidVal = ""; // 코드
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_clntNo.options.hidVal = ""; // 코드
  }
};
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]); // 코드
    ed_crnNm.setValue(rtnList[1]); // 코드명
    ed_crn.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_crn.setValue(""); // 코드
    ed_crnNm.setValue(""); // 코드명
    ed_crn.options.hidVal = ""; // 코드
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
// 우편번호 코드조회 팝업
//-------------------------------------------------------------------------
scwin.f_openZipPopUp = function () {
  let vZip = ed_zip.getValue();
  let vTitle = "우편번호, 우편번호, 주소";
  udc_zipList.cfCommonPopUp(scwin.udc_zipList_callBackFunc, vZip, '', "T", null, null, null, null, null, null, null, null, null, null, null, vTitle, null); //  

  //우편번호 코드
  // if (rtnList != null ) {
  //     if(rtnList[0] == "N/A") return false;

  //     zip.setValue(rtnList[0]);
  //     addr1.setValue(rtnList[1]);
  //     addr2.focus();
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_zipList_callBackFunc = function (rtnList) {
  //우편번호 코드
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    ed_zip.setValue(rtnList[0]);
    ed_addr1.setValue(rtnList[1]);
    ed_addr2.focus();
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  // ds_condition.setUseChangeInfo(false)
  $c.sbm.execute($p, sbm_saveRemainAmtConfirmationDocumentPrint);
};

//-------------------------------------------------------------------------
// 전표입력내역서발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  // 조회 조건의 필수 입력 사항 체크
  let ret = await $c.gus.cfValidate($p, [ica_ramtYm]);
  if (!ret) return;
  scwin.f_Save(); //저장

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_05_01_1.ozr",
    odiName: "fm_603_05_01",
    odiParam: {
      P_RAMT_YM: ica_ramtYm.getValue(),
      P_COLL_MONEY_ACCT_DEPT_CD: ed_collMoneyAcctDeptCd.getValue(),
      P_CLNT_NO: ed_clntNo.getValue(),
      P_CRN: ed_crn.getValue(),
      P_RAMT_STD_DT: ica_ramtStdDt.getValue(),
      P_RETURN_DT: ica_returnDt.getValue(),
      P_ZIP: ed_zip.getValue(),
      P_ADDR1: ed_addr1.getValue(),
      P_ADDR2: ed_addr2.getValue()
    },
    viewerParam: {
      //
    },
    formParam: {}
  };
  if (cbx_printCheck.getValue() == "1") {
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
  // cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_05_01_1.ozr", odiParam, viewerParam, formParam);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_collMoneyAcctDeptCd, ed_collMoneyAcctDeptNm, 'F');
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_crn, 'F');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_collMoneyAcctDeptCd, ed_collMoneyAcctDeptNm, '1');
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};
scwin.udc_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '3');
};
scwin.udc_zipList_onclickEvent = function (e) {
  scwin.f_openZipPopUp();
};
scwin.udc_zipList_onblurCodeEvent = function (e) {
  let vZip = ed_zip.getValue();
  if (vZip.trim() != "") {
    scwin.f_openZipPopUp();
  }
};
scwin.sbm_saveRemainAmtConfirmationDocumentPrint_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_prepay',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'잔액년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ramtYm',style:'',displayFormat:'yyyy/MM',ref:'data:dma_condition.stdYm',title:'잔액년월',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_collMoneyAcctDeptCd',validTitle:'',nameId:'ed_collMoneyAcctDeptNm',style:'width: 400px;',objTypeCode:'data',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'5',code:'collMoneyAcctDeptCd',refDataCollection:'dma_condition',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveClntList',style:'width: 400px;',validTitle:'',refDataCollection:'dma_condition',maxlengthCode:'6',allowCharCode:'0-9',objTypeCode:'data',mandatoryCode:'false',objTypeName:'data',code:'clntNo',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',popupID:'',selectID:'retrieveCrnInfo',style:'width: 400px;',validTitle:'',refDataCollection:'dma_condition',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',mandatoryCode:'false',objTypeName:'data',code:'crn',id:'udc_crnInfo','ev:onclickEvent':'scwin.udc_crnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crnInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_zip',selectID:'retrieveZipList',popupID:'',validTitle:'',nameId:'ed_addr1',style:'width: 400px;',refDataCollection:'dma_condition',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',id:'udc_zipList','ev:onclickEvent':'scwin.udc_zipList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_zipList_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',codeDisplayFormat:'###-###',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_addr2',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔액기준일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ramtStdDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.ramtStdDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회신일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_returnDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.returnDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_oz',type:'button',class:'btn','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})