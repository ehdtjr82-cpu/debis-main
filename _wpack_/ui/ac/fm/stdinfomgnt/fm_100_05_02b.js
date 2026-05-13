/*amd /ui/ac/fm/stdinfomgnt/fm_100_05_02b.xml 34415 5f260f67215a0eb01ae3ec36160ca5bffe3e50b07d920f398452ccbe5a29a6b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNoMessage',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipNoMessage'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bankBook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankbookNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndNm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExchangeRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchExchangeRate'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_depositWithDraw'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptWithdrawClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmtFcrc',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commiSsion',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.stdinfomgnt.RegistBankbookReceiptWithdrawCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_depositWithDraw","key":"IN_DS1"},{"id":"ds_slipNoMessage","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNoMessage","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchExchangeRate',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchExchangeRate","key":"IN_DS1"},{"id":"ds_ExchangeRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ExchangeRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchExchangeRate_submitdone','ev:submiterror':'scwin.sbm_searchExchangeRate_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_100_05_02b
// 이름     : 통장입출금
// 경로     : 회계/자금관리/기준정보관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-21
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.loginAcctDeptCd = scwin.memJson.acctDeptCd;
scwin.loginAcctDeptNm = scwin.memJson.acctDeptNm;
scwin.checkUser = false;
scwin.planYr = "";
scwin.acctDeptCd = "";
scwin.ver = "";
scwin.clsCd = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.flag = "";
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.checkExchRt = 0; //환율 부분 추가
scwin.hid_bankbookNo;
scwin.onpageload = function () {
  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FM023",
    compID: "lc_rcptWithdrawClsCd"
  }, {
    grpCd: "FM031",
    compID: "lc_acctCd"
  }, {
    grpCd: "ZZ006",
    compID: "lc_crcCd",
    opt: {
      "range": "1"
    }
  }];
  //console.log(" codeOptions : "+ JSON.stringify(codeOptons));
  $c.data.setCommonCode($p, codeOptions);
  console.log("scwin.onpageload");
};

//-------------------------------------------------------------------------
// udc completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_Reset();
  scwin.f_setCompanyInfo();
  console.log("scwin.onUdcCompleted");
};

//-------------------------------------------------------------------------
// 데이타리셋
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  // 입출금내역 초기화
  dma_depositWithDraw.setEmptyValue();
  // 통장정보 초기화
  dma_bankBook.setEmptyValue();
  // 부서 정보 초기화 
  ed_acctDeptNm.setValue("");

  // 통화코드 초기화
  //    lc_crcCd.setValue("KRW");

  lc_crcCd.setSelectedIndex(0);
  ed_exchRt.setDisabled(true);
  ed_txnAmtFcrc.setDisabled(true);
  ed_txnAmt.setDisabled(false);
  //	$c.gus.cfEnableObj(ed_exchRt,false);
  //	$c.gus.cfEnableObj(ed_txnAmtFcrc,false);    
  /*
      $c.gus.cfEnableObj(ed_exchRt,false);
  	$c.gus.cfEnableObj(ed_txnAmtFcrc,false);
  	$c.gus.cfEnableObj(ed_txnAmt,true);
  */
  // 환율 초기화
  ed_exchRt.setValue("");
  // 금액(외화) 초기화
  ed_txnAmtFcrc.setValue("");
  // 금액 초기화
  ed_txnAmt.setValue("");
  // 수수료 초기화
  ed_commiSsion.setValue("");
  // 입출금일자 초기화 
  ed_txnDt.setValue(scwin.dateStr);
  // 귀속부서명 초기화
  ed_DeptNm.setValue("");

  // 입출금구분 초기화
  lc_rcptWithdrawClsCd.setSelectedIndex(0);
  // 입출금계정 초기화
  lc_acctCd.setSelectedIndex(0);
  scwin.hid_bankbookNo = "";

  /*
      //ds_bankBook.removeAll();
  
      //$p.dataMap.clear("dma_depositWithDraw");
    	//f_Header();
      ed_commiSsion.setValue("");
      ed_acctDeptNm.setValue("");
      ed_DeptNm.setValue("");
      
  
      //lc_crcCd.setSelectedIndex(0);
      //lc_crcCd.setValue("KRW");
  
      ed_txnAmt.setValue("");
      ed_txnDt.setValue( scwin.dateStr );
      $c.gus.cfDisableKey();
  
  	$c.gus.cfEnableObj(ed_exchRt,false);
  	$c.gus.cfEnableObj(ed_txnAmtFcrc,false);
  	ed_exchRt.setValue("");
  	ed_txnAmtFcrc.setValue("");
  */
  scwin.f_LoadExchangeRate();
  ed_bankbookNo.focus();
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
  scwin.f_PopUpCompanyInfo('T', ed_coCd, ed_coNm);
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF, _coCd, _coNm, _coClsCd) {
  udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, _coCd.getValue(), _coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coNm.setValue("");
    ed_coCd.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.cfAlertMsg($p, ds_slipNoMessage.getCellData(0, "slipNo") + "번호로 전표처리 되었습니다.");
    scwin.f_Reset();
  }
};
scwin.sbm_save_submiterror = function (e) {
  //cfShowError(tr_save);
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_searchExchangeRate_submitdone = function (e) {
  if (ds_ExchangeRate.getRowCount() > 0) {
    ed_exchRt.setValue(ds_ExchangeRate.getCellData(0, "stdExchRt"));
  }
  scwin.checkExchRt = dma_depositWithDraw.get("exchRt"); //환율 부분 추가
};
scwin.sbm_searchExchangeRate_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.udc_DeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_DeptCd, ed_DeptNm, '2', 'ALL');
};
scwin.udc_DeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_DeptCd, ed_DeptNm, '2', 'CD');
};
scwin.udc_DeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_DeptCd, ed_DeptNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
//  2:조회->수금귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag, check) {
  var rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출
    case '2':
      // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
      if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
        scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
        scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
      }
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템 
        scwin.isSubCompany = true;
      } else {
        scwin.isSubCompany = false;
      }
      ed_coCd.setValue(scwin.vLoginCoCd);

      // 부서조회    
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",";
      udc_DeptCd.cfCommonPopUp(scwin.udc_DeptCd_callBackFunc, orgObjCd.getValue().trim(), orgObjNm.getValue(), check, null, null, null, null, param, null, null, null, null);

      //scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_DeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_DeptCd.setValue(rtnList[0]); // 코드값
    ed_DeptNm.setValue(rtnList[1]); // 코드명
    ed_DeptCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    ed_DeptNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    ed_DeptCd.setValue("");
    ed_DeptNm.setValue("");
    ed_DeptCd.options.hidVal = "";
    ed_DeptNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과 : 사용안함
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    //orgObjCd.options.hidVal = rtnList[0];	// HIDDEN 코드값
    //orgObjNm.options.hidVal = rtnList[1];	// HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    //orgObjCd.options.hidVal = "";
    //orgObjNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.hidVal) {
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
    orgObjCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 가장최근의 환율을 구한다.
//-------------------------------------------------------------------------
scwin.f_LoadExchangeRate = function () {
  dma_searchExchangeRate.set("crcCd", lc_crcCd.getValue());
  dma_searchExchangeRate.set("stdDt", scwin.dateStr);

  //alert("sbm_searchExchangeRate");
  $c.sbm.execute($p, sbm_searchExchangeRate);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  // 필수입력 항목에 대한 내역을 CHECK한다.
  /*
  console.log("ed_bankbookNo:", ed_bankbookNo);
  console.log("ed_bankbookKndNm:", ed_bankbookKndNm);
  console.log("ed_bankbookNm:", ed_bankbookNm);
  console.log("ed_bankAcntNo:", ed_bankAcntNo);
  console.log("ed_acctDeptNm:", ed_acctDeptNm);
  console.log("lc_rcptWithdrawClsCd:", lc_rcptWithdrawClsCd);
  console.log("lc_acctCd:", lc_acctCd);
  console.log("ed_txnAmt:", ed_txnAmt);
  console.log("ed_commiSsion:", ed_commiSsion);
  console.log("ed_txnDt:", ed_txnDt);
  console.log("ed_summary:", ed_summary);
  */

  var ret;
  ret = await $c.gus.cfValidate($p, [ed_bankbookNo, ed_bankbookKndNm, ed_bankbookNm, ed_bankAcntNo, ed_acctDeptNm, lc_rcptWithdrawClsCd, lc_acctCd, ed_txnAmt, ed_txnDt, ed_summary]);
  if (!ret) {
    return;
  }
  if (lc_rcptWithdrawClsCd.getValue() == "01" && lc_acctCd.getValue() != "40") {
    // 필수 조건 입력 여부(상대계정 귀속부서) Check

    ret = await $c.gus.cfValidate($p, [ed_DeptCd]);
    if (!ret) {
      return;
    }
  }

  //-----------------------------------------------------------------------------------------------------
  //------------------------------------- 환율부분 추가 ---------------------------------------------------
  //-----------------------------------------------------------------------------------------------------
  if (lc_crcCd.getValue() != ACConstants.KOREA_WON) {
    var changeExchRt = dma_depositWithDraw.get("exchRt");
    if (!$c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt))
      // 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
      return;
  }
  //-----------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------

  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    dma_depositWithDraw.set("confirmDt", dma_depositWithDraw.get("txnDt"));
    dma_depositWithDraw.set("bankbookKndNm", dma_bankBook.get("bankbookKndNm"));
    dma_depositWithDraw.set("bankAcntNo", dma_bankBook.get("bankAcntNo"));
    dma_depositWithDraw.set("bankbookNm", dma_bankBook.get("bankbookNm"));
    dma_depositWithDraw.set("acctDeptCd", dma_bankBook.get("acctDeptCd"));
    //}

    //tr_save.Action = "/ac.fm.stdinfomgnt.RegistBankbookReceiptWithdrawCMD.do";
    //tr_save.Post();

    console.log(dma_depositWithDraw);
    $c.sbm.execute($p, sbm_save);
    $c.gus.cfEnableAllBtn($p);
  }
};

//-------------------------------------------------------------------------
// 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = function (flag) {
  //var rtnList = new Array();
  /*
  var i_bankbookno = ed_bankbookNo.getValue().trim();
   if (flag == "ALL") {
      i_bankbookno = "";
  } else {
      i_bankbookno = i_bankbookno.trim();
  }
  */
  var param = ",,,,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항 	

  udc_bankbookNo.cfCommonPopUp(scwin.udc_bankbookNo_callBackFunc, ed_bankbookNo.getValue(), '', "T", null, null, null, null, param, null, null, null, null); // 거래처
};
scwin.udc_bankbookNo_callBackFunc = function (rtnList) {
  //console.log(rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    console.log(rtnList);
    dma_bankBook.set("bankbookNo", rtnList[0]); //통장번호
    dma_bankBook.set("bankCd", rtnList[1]); //통장코드
    dma_bankBook.set("bankbookNm", rtnList[2]); //통장명
    dma_bankBook.set("acctDeptCd", rtnList[3]); //관리부서코드
    dma_bankBook.set("bankAcntNo", rtnList[4]); //통장계좌번호
    dma_bankBook.set("bankbookKndNm", rtnList[8]); //통장종류코드명
    ed_bankbookNo.setValue(rtnList[0]); //통장번호
    ed_acctDeptNm.setValue(rtnList[7]); //관리부서명
    scwin.hid_bankbookNo = rtnList[0];
  } else {
    dma_bankBook.set("bankbookNo", "");
    dma_bankBook.set("bankCd", "");
    dma_bankBook.set("bankbookNm", "");
    dma_bankBook.set("acctDeptCd", "");
    dma_bankBook.set("bankAcntNo", "");
    dma_bankBook.set("bankbookKndNm", "");
    ed_acctDeptNm.setValue("");
    scwin.hid_bankbookNo = "";
  }
};

// 통화 공통코드 소팅
scwin.ondataload = function () {
  /*
  var options = {};
  options.sortIndex = "sortSeq";
  options.sortOrder = "1";
  dlt_commonCodeZZ006.multisort( options );
  두개이상의 컬럼
  */

  //dlt_commonCodeZZ006.setSort("sortSeq", "asc");   // 오름차순
  //sortType: "numeric"

  /*
  dlt_commonCodeZZ006.multisort(
      {"sortIndex" : "sortSeq", "sortOrder" : "asc", "sortType" : "numeric"} 
  );   // 오름차순
  */

  //lc_crcCd.setValue("KRW");

  /*
  linkedDataList1.sort('date', 0); // date컬럼의 값을 기준으로 오름차순으로 정렬한다. 
  sort함수를 사용시, dataType에 상관없이 text로 간주하여 정렬이 된다. 
  number 타입의 컬럼을 정렬해야 하는 경우에는 multisort 사용을 권장한다.
  */
  //dlt_commonCodeZZ006.sort('sortSeq', 0);
};

//-------------------------------------------------------------------------
// 환율 * 외화금액의 값을 금액에 표시한다.
//-------------------------------------------------------------------------
scwin.f_CalExchange = function () {
  var exchangeAmt;
  exchangeAmt = Number(Math.round(parseFloat(dma_depositWithDraw.get("txnAmtFcrc")) * parseFloat(dma_depositWithDraw.get("exchRt"))));
  if (!isNaN(exchangeAmt)) {
    dma_depositWithDraw.set("txnAmt", exchangeAmt);
  }
};

//-------------------------------------------------------------------------
// <!-- 환율 포커스 변경시 -->
//-------------------------------------------------------------------------
scwin.ed_exchRt_onblur = function (e) {
  if (ed_exchRt.getDisabled() == false) {
    scwin.f_CalExchange();
    var changeExchRt = dma_depositWithDraw.get("exchRt");
    if (!$c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt))
      // 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
      return;
  }
};

//-------------------------------------------------------------------------
// <!-- 외화금액 포커스 변경시 -->
//-------------------------------------------------------------------------
scwin.ed_txnAmtFcrc_onblur = function (e) {
  //alert( ed_txnAmtFcrc.getDisabled() );
  if (ed_txnAmtFcrc.getDisabled() == false) {
    scwin.f_CalExchange();
  }
};
scwin.udc_bankbookNo_onclickEvent = function (e) {
  scwin.f_BankBookPopUp('ALL');
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', ed_coCd, ed_coNm);
};

//-------------------------------------------------------------------------
// <!-- 통장번호에서 Focus를 벗어날 경우 발생 -->
//-------------------------------------------------------------------------
scwin.udc_bankbookNo_onblurCodeEvent = function (e) {
  if (ed_bankbookNo.getValue().trim() == scwin.hid_bankbookNo) {
    return;
  } else if (ed_bankbookNo.getValue().trim() == "") {
    dma_bankBook.set("bankbookNo", "");
    dma_bankBook.set("bankCd", "");
    dma_bankBook.set("bankbookNm", "");
    dma_bankBook.set("acctDeptCd", "");
    dma_bankBook.set("bankAcntNo", "");
    dma_bankBook.set("bankbookKndNm", "");
    ed_acctDeptNm.setValue("");
    scwin.hid_bankbookNo = "";
    return;
  }
  if (ed_bankbookNo.getValue().trim() != "") {
    scwin.f_BankBookPopUp('NO');
  }
};

//-------------------------------------------------------------------------
// 회사코드 입력시
//-------------------------------------------------------------------------
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// <!-- 통화 이벤트시 -->
//-------------------------------------------------------------------------
scwin.lc_crcCd_onviewchange = function (info) {
  if (lc_crcCd.getValue() == "KRW") {
    $c.gus.cfEnableObj($p, ed_exchRt, false);
    $c.gus.cfEnableObj($p, ed_txnAmtFcrc, false);
    $c.gus.cfEnableObj($p, ed_txnAmt, true);
    ed_exchRt.setValue("0");
    ed_txnAmtFcrc.setValue("0");
    ed_txnAmt.setValue("0");
  } else {
    //$c.gus.cfEnableObj(ObjectItem, Status)    
    $c.gus.cfEnableObj($p, ed_exchRt, true);
    $c.gus.cfEnableObj($p, ed_txnAmtFcrc, true);
    $c.gus.cfEnableObj($p, ed_txnAmt, false);
    scwin.f_LoadExchangeRate();
    scwin.f_CalExchange();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box col2',id:'',style:'width: 550px;'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBankBookCdInfoPopup',style:'',selectID:'retrieveBankBookCdInfo',code:'bankbookNo',name:'bankbookNm',id:'udc_bankbookNo',codeId:'ed_bankbookNo',nameId:'','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bankbookNo_onblurCodeEvent',refDataCollection:'dma_depositWithDraw',mandatoryCode:'true',validTitle:'통장번호',hideName:'true',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9',maxlengthCode:'5'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_bankbookKndNm',placeholder:'',style:'width: 150px;',objType:'key',readOnly:'true',ref:'data:dma_bankBook.bankbookKndNm',disabled:'true'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_bankbookNm',placeholder:'',style:'width: 150px;',readOnly:'true',objType:'key',maxlength:'30',ref:'data:dma_bankBook.bankbookNm',disabled:'true'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_bankAcntNo',placeholder:'',style:'width: 150px;',readOnly:'true',objType:'key',maxlength:'20',ref:'data:dma_bankBook.bankAcntNo',disabled:'true'}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',class:'',codeId:'ed_coCd',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:'display:none;',validExpCode:'회사코드:yes',id:'udc_dongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',code:'coCd',refDataCollection:'dma_depositWithDraw',selectID:'retrieveDongbuGroupCompanyInfo'}},{T:1,N:'xf:input',A:{class:'form-control w120',id:'ed_acctDeptNm',placeholder:'',style:'width: 150px;',readOnly:'true',objType:'key',maxlength:'30',disabled:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rcptWithdrawClsCd',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_depositWithDraw.rcptWithdrawClsCd','ev:onchange':''},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출금계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_depositWithDraw.acctCd','ev:onchange':''},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 350px;',class:'col2',codeId:'ed_DeptCd',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'5',allowCharCode:'0-9',nameId:'ed_DeptNm',UpperFlagCode:'1',maxlengthName:'20',mandatoryName:'true',id:'udc_DeptCd','ev:onclickEvent':'scwin.udc_DeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_DeptCd_onblurCodeEvent',selectID:'retrieveAcctDeptCdInfo6',validTitle:'귀속부서',refDataCollection:'dma_depositWithDraw',code:'deptCd',validExpCode:'귀속부서:yes:maxLength=5&number',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_depositWithDraw.crcCd','ev:onviewchange':'scwin.lc_crcCd_onviewchange'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'환율 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar col2',id:'ed_exchRt',placeholder:'',style:'width: 150px;',mandatory:'true',objType:'data',maxlength:'12.4',displayFormat:'#,###.####',dataType:'float','ev:onblur':'scwin.ed_exchRt_onblur',disabled:'true',ref:'data:dma_depositWithDraw.exchRt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액(외화)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control tar col2',id:'ed_txnAmtFcrc',placeholder:'',style:'width: 150px;',maxlength:'8.2',displayFormat:'#,###.##',mandatory:'true',objType:'data',dataType:'number','ev:onblur':'scwin.ed_txnAmtFcrc_onblur',disabled:'true',ref:'data:dma_depositWithDraw.txnAmtFcrc',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar col2',id:'ed_txnAmt',placeholder:'',style:'width: 150px;',mandatory:'true',objType:'data',maxlength:'12',displayFormat:'#,###',dataType:'number',invalidMessage:'금액',displaymessage:'true',ref:'data:dma_depositWithDraw.txnAmt',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar col2',id:'ed_commiSsion',placeholder:'',style:'width: 150px;',objType:'data',maxlength:'7',dataType:'number',ref:'data:dma_depositWithDraw.commiSsion',displayFormat:'#,###',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출금일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_txnDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_depositWithDraw.txnDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col4',id:'ed_summary',placeholder:'',style:'width: 370px;',mandatory:'true',objType:'data',maxlength:'30',invalidMessage:'적요',displaymessage:'true',ref:'data:dma_depositWithDraw.summary'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',label:'저장',style:'',type:'button','ev:onclick':'scwin.bSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})