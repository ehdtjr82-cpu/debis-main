/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_09_03b.xml 40540 5d5b36a49947720971eed579474270070973c9443b08da16207106e6641ce46a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'flag',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'dcsnDt',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'coCd',name:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bankBook',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'bankbookNo',name:'통장번호'}},{T:1,N:'w2:key',A:{dataType:'number',id:'txnSeq',name:'거래순번'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bankbookKndNm',name:'거래순번'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rcptWithdrawClsCd',name:'입출구분코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'txnDt',name:'거래일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:key',A:{dataType:'number',id:'txnAmt',name:'거래금액'}},{T:1,N:'w2:key',A:{dataType:'number',id:'txnAmtFcrc',name:'거래금액_외화'}},{T:1,N:'w2:key',A:{dataType:'number',id:'exchRt',name:'환율'}},{T:1,N:'w2:key',A:{dataType:'text',id:'confirmDt',name:'확인일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'txnStsCd',name:'거래상태코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'payNo',name:'지급번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bankbookKndCd',name:'통장종류코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bankbookNm',name:'통장명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bankAcntNo',name:'계좌번호'}},{T:1,N:'w2:key',A:{dataType:'number',id:'commiSsion',name:'수수료'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctCd',name:'입출금상대계정 코드'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bankcd',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'name',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'체크박스',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankNm',name:'지급은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'flag',name:'전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procSts',name:'전송결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'전표적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileGb',name:'파일구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileDate',name:'파일생성일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileCnt',name:'파일회차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAcctNo',name:'출금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'entTime',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'name23',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bankcd',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bankcd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrieveAdvancedPaymentTransCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecision',action:'/ac.fm.paymgnt.paymgnt.AdvancedPaymentTransferCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_payment","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecision_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecisionCancel',action:'/ac.fm.paymgnt.paymgnt.AdvancedPaymentTransferCancelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_payment","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecisionCancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vLoginCoCd = scwin.login.coCd ?? "";
scwin.vLoginCoClsCd = scwin.login.coClsCd ?? "";
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.isSubCompany = false;
scwin.isChecked = true;

//hidden
scwin.hid_bankbookNo = "";
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
// dataSetDebug = function(dataSet, isDebug){
//     if(isDebug == true){
//         let obj = dataSet;
//         let str = "[[[["+ obj.id+"]]]]]\n";
//         for (dsRow = 0; dsRow < obj.getRowCount(); dsRow++){
//             for ( let dsCol = 1; dsCol <= obj.CountColumn; dsCol++ ){
//                 str += "["+obj.ColumnId(dsCol)+"] "+obj.getCellData(dsRow, obj.ColumnId(dsCol))+", "
//             }
//             str += "\n\n";
//         }
//         alert( str );
//     }
// }

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  // scwin.f_HeaderCreate(); 
  // scwin.f_bankBookHeaderCreate();
  scwin.f_setCompanyInfo();
  scwin.f_bankcd_Retrieve();
  // lc_flagSts.index = 0;

  ica_dcsnDt.setValue(scwin.g_sCurrDate);
  // gsBankbookFlag = "0";
  $c.gus.cfDisableObjects($p, [ed_bankbookNm, ed_bankbookKndNm]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = function () {
  sbm_bankcd.action = "/ac.fm.stdinfomgnt.RetrieveBankCMD.do";
  $c.sbm.execute($p, sbm_bankcd);
};

//-------------------------------------------------------------------------
// 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = async function (sFlag) {
  let i_bankbookno = ed_bankbookNo.getValue().trim();
  let param = '';
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
    return;
  }
  param = ",,,," + ed_coCd.getValue() + ",,Y"; //자회사 회계시스템 추가사항
  rtnList = udc_expenseTransferInfo.cfCommonPopUp(scwin.udc_expenseTransferInfo_callBackFunc, i_bankbookno, '', sFlag, null, null, null, null, param, null, null, null, null); // 경비이체 

  // if (rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     ds_bankBook.setCellData(1, "bankbookNo", rtnList[0]);	//통장번호
  //     ds_bankBook.setCellData(1, "bankCd", rtnList[1]);	//통장코드
  //     ds_bankBook.setCellData(1, "bankbookKndNm", rtnList[8]);	//통장종류명
  //     ds_bankBook.setCellData(1, "bankbookNm", rtnList[2]);	//통장명
  //     ds_bankBook.setCellData(1, "acctDeptCd", rtnList[3]);	//관리부서코드
  //     ds_bankBook.setCellData(1, "bankAcntNo", rtnList[4]);	//통장계좌번호
  //     ds_bankBook.setCellData(1, "bankbookKndCd", rtnList[5]);	//통장종류코드
  //     scwin.hid_bankbookNo = rtnList[0];
  // } else {
  //     ds_bankBook.setCellData(1, "bankbookNo", "");
  //     ds_bankBook.setCellData(1, "bankbookKndNm", "");	//통장종류명
  //     ds_bankBook.setCellData(1, "bankCd", "");
  //     ds_bankBook.setCellData(1, "bankbookNm", "");
  //     ds_bankBook.setCellData(1, "acctDeptCd", "");
  //     ds_bankBook.setCellData(1, "bankAcntNo", "");
  //     ds_bankBook.setCellData(1, "bankbookKndCd", "");
  //     scwin.hid_bankbookNo = "";
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_expenseTransferInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    dma_bankBook.set("bankbookNo", rtnList[0]); //통장번호
    dma_bankBook.set("bankCd", rtnList[1]); //통장코드
    dma_bankBook.set("bankbookKndNm", rtnList[8]); //통장종류명
    dma_bankBook.set("bankbookNm", rtnList[2]); //통장명
    dma_bankBook.set("acctDeptCd", rtnList[3]); //관리부서코드
    dma_bankBook.set("bankAcntNo", rtnList[4]); //통장계좌번호
    dma_bankBook.set("bankbookKndCd", rtnList[5]); //통장종류코드
    scwin.hid_bankbookNo = rtnList[0];
  } else {
    dma_bankBook.set("bankbookNo", "");
    dma_bankBook.set("bankbookKndNm", ""); //통장종류명
    dma_bankBook.set("bankCd", "");
    dma_bankBook.set("bankbookNm", "");
    dma_bankBook.set("acctDeptCd", "");
    dma_bankBook.set("bankAcntNo", "");
    dma_bankBook.set("bankbookKndCd", "");
    scwin.hid_bankbookNo = "";
  }
};

//-------------------------------------------------------------------------
// 전송
//-------------------------------------------------------------------------
scwin.f_transfer = async function () {
  let cnt = 0;
  let i = 0;
  if (ds_payment.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_049.replace("%1", "자료"));
    return;
  }
  for (i = 0; i < ds_payment.getRowCount(); i++) {
    const selYn = ds_payment.getCellData(i, "selYn");
    const flag = ds_payment.getCellData(i, "flag");
    if (ds_payment.getRowStatus(i) !== "R" && selYn == "1") {
      cnt++;
      if (flag && flag.trim() !== "") {
        await $c.win.alert($p, i + 1 + "행의 전송여부가 '미전송'이 아닙니다.\n미전송인 건만 전송이 가능합니다.");
        return;
      }
    }
  }
  if (cnt <= 0) {
    await $c.win.alert($p, "전송할 자료가 존재하지않습니다");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [ed_bankbookNo]);
  if (!ret) {
    return;
  }

  // ret = await $c.gus.cfValidate([gr_paymgnt])
  // if (!ret){
  //     return ;
  // }

  if ((await $c.win.confirm($p, "전송하시겠습니까?")) == true) {
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == "1") {
        //출금계좌 
        ds_payment.setCellData(i, "outAcctNo", dma_bankBook.get("bankAcntNo"));
      }
    }
    $c.sbm.execute($p, sbm_savePayDecision);
  }
  // ds_payment.setUseChangeInfo(true);
};
scwin.fn_cancel = async function () {
  let cnt = 0;
  if (ds_payment.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_049.replace("%1", "자료"));
    return;
  }
  for (let i = 0; i < ds_payment.getRowCount(); i++) {
    const selYn = ds_payment.getCellData(i, "selYn");
    const flag = ds_payment.getCellData(i, "flag");
    if (ds_payment.getRowStatus(i) !== "R" && selYn == "1") {
      cnt++;
      if (flag !== "EE") {
        await $c.win.alert($p, i + 1 + "행의 요청상태가 이체요청 상태가 아닙니다.\n이체요청 상태인 건만 취소 가능합니다.");
        return;
      }
    }
  }
  if (cnt <= 0) {
    await $c.win.alert($p, "취소할 자료가 존재하지 않습니다");
    return;
  }
  if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
    if (await $c.win.confirm($p, "취소하시겠습니까?")) {
      $c.sbm.execute($p, sbm_savePayDecisionCancel);
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfValidate($p, [ed_coCd])) {
    // ds_condition.setUseChangeInfo(false)
    $c.sbm.execute($p, sbm_retrievePaymgnt);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  ica_dcsnDt.setValue(scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function (gr_groupCode, gridName) {
  if (ds_payment.getRowCount() == 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return;
  }
  let fileName = '지급이체자료';
  let sheetTitle = '지급이체자료';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_paymgnt, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

//-------------------------------
// 그리드 높이 늘리고 줄이기
//-------------------------------
// function f_grdHeiht(gridNm, size) {
//     var strHeight = gridNm.style.height ;
//     var intHeight = parseInt(strHeight.replace("px",""));
//     intHeight = intHeight + size;
//     if (intHeight > 0 ) {
//         gridNm.style.height = intHeight + "px";
//     }
// }

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
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
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isChecked == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isChecked = false;
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
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
};
scwin.f_initObj = async function () {
  await $c.gus.cfInitObjects($p, [ed_bankbookNo, scwin.hid_bankbookNo, ed_bankbookKndNm, ed_bankbookNm]); //통장
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_savePayDecision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_savePayDecisionCancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_retrievePaymgnt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_payment.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다");
    $c.gus.cfDisableObjects($p, [btnConfirm, btnCancel]);
  } else {
    totalRows.setValue(ds_payment.getRowCount());
    $c.gus.cfEnableObjects($p, [btnConfirm, btnCancel]);
    ed_bankbookNo.setValue("");
    ed_bankbookNm.setValue("");
    ed_bankbookKndNm.setValue("");
  }
};
scwin.gr_paymgnt_onheaderclick = function (headerId) {
  let yCount = 0;
  for (i = 0; i < ds_payment.getRowCount(); i++) {
    if (ds_payment.getCellData(i, "flag") == "" || ds_payment.getCellData(i, "flag") == "EE") {
      ds_payment.setCellData(i, "selYn", "1");
      yCount += 1;
    }
  }
  let bCheck = gr_paymgnt.getHeaderValue("header_selYn");
  if (headerId == "header_selYn") {
    gr_paymgnt.setColumnReadOnly("selYn", false);
    if (bCheck == true) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(i, "flag") == "" || ds_payment.getCellData(i, "flag") == "EE") {
          ds_payment.setCellData(i, "selYn", "1");
        } else {
          ds_payment.setCellData(i, "selYn", "0");
          ds_payment.modifyRowStatus(i, "R");
          gr_paymgnt.setColumnReadOnly("selYn", true);
        }
      }
      if (yCount > 0) {
        gr_paymgnt.setColumnReadOnly("selYn", true);
      }
    } else {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        ds_payment.setCellData(i, "selYn", "0");
        ds_payment.modifyRowStatus(i, "R");
      }
      if (yCount == 0) {
        gr_paymgnt.setColumnReadOnly("selYn", false);
      }
    }
  }
};

// scwin.test = function(){
//     let bCheck = gr_paymgnt.getHeaderValue("header_selYn");
//     if(headerId == "header_selYn"){
// 		if ( bCheck == true){
// 			for (i = 0; i < ds_payment.getRowCount(); i++){
// 				if(ds_payment.getCellData(i, "flag") == "" ||ds_payment.getCellData(i, "flag") == "EE"){
// 					ds_payment.setCellData(i, "selYn", "1");
// 				}else{
//                     ds_payment.setCellData(i, "selYn", "0");
//                     ds_payment.modifyRowStatus(i, "R");
//                 }
// 			}
// 		} else {
// 			for (i = 0; i < ds_payment.getRowCount(); i++){
// 				ds_payment.setCellData(i, "selYn", "0");
//                 ds_payment.modifyRowStatus(i, "R");
// 			}
// 		}
// 	}
// }

scwin.gr_paymgnt_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "paySlipNo") {
    var slipNo = ds_payment.getCellData(rowIndex, "paySlipNo");
    if (slipNo != "") {
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
  if (columnId == "selYn") {
    // 미전송이나 이체요청 상태가 아니면 체크 불가
    if (ds_payment.getCellData(rowIndex, "fileDate") != null && !(ds_payment.getCellData(rowIndex, "flag") == "" || ds_payment.getCellData(rowIndex, "flag") == "EE")) {
      ds_payment.setCellData(rowIndex, "selYn", "0");
      gr_paymgnt.setColumnReadOnly("selYn", true);
      // gr_paymgnt.setDisabled("column","selYn", true)
      // gr_paymgnt.ColumnProp("selYn","Edit") = "None";
    } else {
      gr_paymgnt.setColumnReadOnly("selYn", false);
      // gr_paymgnt.setDisabled("column", rowIndex, "selYn", false)
      // gr_paymgnt.ColumnProp("selYn","Edit") = "Any";
    }

    // 같이 전송된 데이터끼리 묶어서 선택 및 해제
    if (ds_payment.getCellData(rowIndex, "selYn") == "1") {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(rowIndex, "fileDate") == ds_payment.getCellData(i, "fileDate") && ds_payment.getCellData(rowIndex, "fileCnt") == ds_payment.getCellData(i, "fileCnt") && ds_payment.getCellData(i, "siteCd") != "" && ds_payment.getCellData(i, "flag") == "EE") {
          ds_payment.setCellData(i, "selYn", "1");
        }
      }
    }
    if (ds_payment.getCellData(rowIndex, "selYn") == "0") {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(rowIndex, "fileDate") == ds_payment.getCellData(i, "fileDate") && ds_payment.getCellData(rowIndex, "fileCnt") == ds_payment.getCellData(i, "fileCnt") && ds_payment.getCellData(i, "siteCd") != "" && ds_payment.getCellData(i, "flag") == "EE") {
          ds_payment.setCellData(i, "selYn", "0");
          ds_payment.modifyRowStatus(i, "R");
        }
      }
    }

    // 같은 전표번호끼리 묶어서 선택 및 해제
    if (ds_payment.getCellData(rowIndex, "selYn") == "1") {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(rowIndex, "paySlipNo") == ds_payment.getCellData(i, "paySlipNo") && ds_payment.getCellData(rowIndex, "paySlipNo") != "") {
          ds_payment.setCellData(i, "selYn", "1");
        }
      }
    }
    if (ds_payment.getCellData(rowIndex, "selYn") == "0") {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(rowIndex, "paySlipNo") == ds_payment.getCellData(i, "paySlipNo") && ds_payment.getCellData(rowIndex, "paySlipNo") != "") {
          ds_payment.setCellData(i, "selYn", "0");
          ds_payment.modifyRowStatus(i, "R");
        }
      }
    }
  }
};
scwin.udc_expenseTransferInfo_onclickEvent = function (e) {
  scwin.f_BankBookPopUp('T');
};
scwin.udc_expenseTransferInfo_onblurCodeEvent = function (e) {
  if (ed_bankbookNo.getValue().trim() == scwin.hid_bankbookNo) {
    return;
  } else if (ed_bankbookNo.getValue().trim() == "") {
    dma_bankBook.set("bankbookNo", "");
    dma_bankBook.set("bankCd", "");
    dma_bankBook.set("bankbookNm", "");
    dma_bankBook.set("acctDeptCd", "");
    dma_bankBook.set("bankAcntNo", "");
    dma_bankBook.set("bankbookKndCd", "");
    scwin.hid_bankbookNo = "";
    return;
  }
  if (ed_bankbookNo.getValue().trim() != "") {
    scwin.f_BankBookPopUp('T');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'table1',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',id:'udc_companyInfo',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'dma_condition',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드:yes',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'확정일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ica_dcsnDt',mandatory:'true',ref:'data:dma_condition.dcsnDt',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전송여부 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_flagSts',ref:'data:dma_condition.flag',renderType:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이체요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EE'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EG'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EP'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_init',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_paymgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_payment',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_paymgnt',visibleRowNum:'11',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',columnMove:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick','ev:onheaderclick':'scwin.gr_paymgnt_onheaderclick',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'header_selYn',value:'',displayMode:'label',valueType:'boolean'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'거래처번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'column10',value:'거래처명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'170',inputType:'text',id:'column9',value:'사업자번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'전송결과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column21',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'사업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'파일구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'파일생성일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'파일회차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'출금계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'전송시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'selYn',blockSelect:'false',displayMode:'label',readOnly:'false',falseValue:'0',trueValue:'1',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payBankNm',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payment'},E:[{T:1,N:'w2:label',A:{ref:'payBankCd'}},{T:1,N:'w2:value',A:{ref:'payBankCd'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'payAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'flag',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'이체요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EE'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'처리완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EP'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'procSts',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불능'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color: blue;text-decoration: underline;',id:'paySlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'outbrAcctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payBankCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'siteCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fileGb',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fileDate',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fileCnt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outAcctNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'entTime',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("payAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출금통장',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'sch-box col5'}},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{class:'flex_no',code:'bankbookNo',codeId:'ed_bankbookNo','ev:onblurCodeEvent':'scwin.udc_expenseTransferInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_expenseTransferInfo_onclickEvent',id:'udc_expenseTransferInfo',mandatoryCode:'true',maxlengthCode:'5',name:'bankbookKndNm',nameId:'ed_bankbookKndNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_bankBook',selectID:'retrieveExpenseTransferInfo',style:'',validTitle:'출금통장',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bankbookNm',objType:'key',placeholder:'',ref:'data:dma_bankBook.bankbookNm',style:'width: 200px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btnCancel',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btnConfirm',label:'삭제',type:'button',class:'btn',objType:'ctrlBtn','ev:onclick':'scwin.f_transfer'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송'}]}]}]}]}]}]}]}]})