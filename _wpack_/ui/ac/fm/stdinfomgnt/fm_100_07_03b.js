/*amd /ui/ac/fm/stdinfomgnt/fm_100_07_03b.xml 38533 12c248aa7a0fa65f9c38506a6262618aee8766bd6fdaec86c53da5e216cf9c7b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payClsCd',name:'지급구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftRt',name:'어음비율',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'confirmConYn',name:'지급조건 확인여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'confirmAccYn',name:'지급계좌 학인여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'payCntShtCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payAcctDeptCd',name:'계약부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'은행코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptNm',name:'지급부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCycCd',name:'지급주기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCntShtCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashRt',name:'현금비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftRt',name:'어음비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'지급부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'지급구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgBankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col24',name:'지급주기',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBankCd',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bankcd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.stdinfomgnt.SavePaymentBankCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_paymgnt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.stdinfomgnt.RetrievePaymentBankCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.login = $c.data.getMemInfo($p);
scwin.userId = scwin.login.userId;
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";
scwin.modId = scwin.login.userId;
scwin.isChecked = true;
scwin.onpageload = function () {
  // 코드리스트
  const codeOptions = [{
    grpCd: "FM041",
    compID: "gr_paymgnt:payCycCd"
  }, {
    grpCd: "ZZ522",
    compID: "gr_paymgnt:payDd"
  }, {
    grpCd: "FM018",
    compID: "gr_paymgnt:payCntShtCd, lc_payCntShtCd",
    opt: {
      'range': '3,99'
    }
  }, {
    grpCd: "ZZ006",
    compID: "gr_paymgnt:payCrcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  lc_payClsCd.setSelectedIndex(1);
  lc_confirmConYn.setSelectedIndex(2);
  lc_confirmAccYn_.setSelectedIndex(2);
  ed_draftRt.setValue(100);
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
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // ds_condition.setUseChangeInfo(false);
  let ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) return;
  $c.sbm.execute($p, sbm_retrievePaymgnt);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
// scwin.f_bankcd_Retrieve = function() {  
//     $c.sbm.execute(sbm_retrieveBankCd);
//   }
// sbm_retrievePaymgnt 서브미션에 은행코드, 은행명이 들어가있어서 해당 서브미션 삭제

//-------------------------------------------------------------------------
// 일괄적용함수
//-------------------------------------------------------------------------	
scwin.f_save = function () {
  scwin.f_WholeAdoption();
};
scwin.f_WholeAdoption = async function () {
  let cnt = 0;
  if (ds_paymgnt.getRowCount() <= 0) {
    $c.win.alert($p, "자료가 존재하지 않습니다.");
    return false;
  }
  for (let i = 0; i < ds_paymgnt.getRowCount(); i++) {
    if (ds_paymgnt.getCellData(i, "selYn") == "1") {
      cnt++;
      ds_paymgnt.setCellData(i, "modId", scwin.modId);
      const prevBankCd = ds_paymgnt.getCellData(i, "bankCd");
      const changeBankCd = ed_changeBankCd.getValue();

      //변경은행 선택시
      if (prevBankCd === changeBankCd) {
        await $c.win.alert($p, "이전은행과 변경은행이 같습니다. 다시 선택해 주십시오.");
        return;
      }
      if (changeBankCd == "") {
        await $c.win.alert($p, "변경은행을 선택해 주십시오.");
        return;
      }
      ds_paymgnt.setCellData(i, "chgBankCd", changeBankCd);
      const draftRt = ds_paymgnt.getCellData(i, "draftRt");
      const confirmYn = ds_paymgnt.getCellData(i, "confirmYn");
      // 조건 불만족 시
      if (!(draftRt == 100.00 && confirmYn == "1")) {
        await $c.win.alert($p, "어음 100%, 지급조건 확인여부, 지급계좌 확인여부가 '예'일 경우만 일괄적용 가능합니다.");
        return;
      }
    }
  }
  if (cnt <= 0) {
    await $c.win.alert($p, "일괄변경할 자료가 존재하지 않습니다.");
    return;
  } else {
    scwin.f_Save();
    return;
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  const confirm = await $c.win.confirm($p, "일괄적용 하시겠습니까?");
  if (!confirm) return;
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, tbl_table1);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_paymgnt.getRowCount() == 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return;
  }
  let fileName = '지급은행 일괄변경';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_paymgnt, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->은행 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  // let rtnList = null;
  // let sCmdName = "";
  let code = txtCode.getValue();
  let name = txtName.getValue();
  let param = "";
  switch (select_code) {
    // 귀속부서 PopUp 호출
    case '1':
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null); // 거래처			  
      break;
    // 거래처 PopUp 호출
    case '2':
      param = ",,," + ed_coCd.getValue();
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 거래처				 			  
      break;
    // 은행코드 PopUp 호출
    case '3':
      udc_bankCdInfo.cfCommonPopUp(scwin.udc_bankCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 은행
      break;
    // 변경 은행코드 PopUp 호출
    case '4':
      udc_changeBankCdInfo.cfCommonPopUp(scwin.udc_changeBankCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 은행
      break;
  }

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A")
  //         return;
  //     txtCode.setValue(rtnList[0]); // 코드
  //     txtName.setValue(rtnList[1]); // 코드명
  //     txtCode.options.hidVal = rtnList[0]; // 코드
  // } else {
  //     txtCode.setValue(""); // 코드
  //     txtName.setValue(""); // 코드명
  //     txtCode.options.hidVal = ""; // 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_payAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
    ed_payAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_payAcctDeptCd.setValue(""); // 코드
    ed_reqAcctDeptNm.setValue(""); // 코드명
    ed_payAcctDeptCd.options.hidVal = ""; // 코드
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
scwin.udc_bankCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_bankCd.setValue(rtnList[0]); // 코드
    ed_bankNm.setValue(rtnList[1]); // 코드명
    ed_bankCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_bankCd.setValue(""); // 코드
    ed_bankNm.setValue(""); // 코드명
    ed_bankCd.options.hidVal = ""; // 코드
  }
};
scwin.udc_changeBankCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_changeBankCd.setValue(rtnList[0]); // 코드
    ed_changebankNm.setValue(rtnList[1]); // 코드명
    ed_changeBankCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_changeBankCd.setValue(""); // 코드
    ed_changebankNm.setValue(""); // 코드명
    ed_changeBankCd.options.hidVal = ""; // 코드
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
// script
//-------------------------------------------------------------------------
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_payAcctDeptCd, ed_reqAcctDeptNm, 'F');
};
scwin.udc_bankCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_bankCd, ed_bankNm, 'F');
};
scwin.udc_changeBankCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_changeBankCd, ed_changebankNm, 'F');
};
scwin.udc_bankCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '3');
};
scwin.udc_changeBankCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_changeBankCd, ed_changebankNm, '4');
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_payAcctDeptCd, ed_reqAcctDeptNm, '1');
};
scwin.udc_clntList_onviewchangeNameEvent = function (info) {
  ed_clntNo.setValue("");
  if (ed_clntNm.getValue() != "") {
    scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'T');
  }
};
scwin.udc_acctDeptCdInfo6_onviewchangeNameEvent = function (info) {
  ed_payAcctDeptCd.setValue("");
  if (ed_reqAcctDeptNm.getValue() != "") {
    scwin.f_openPopUp('1', ed_payAcctDeptCd, ed_reqAcctDeptNm, 'F');
  }
};
scwin.udc_bankCdInfo_onviewchangeNameEvent = function (info) {
  ed_bankCd.setValue("");
  if (ed_bankNm.getValue() != "") {
    scwin.f_openPopUp('3', ed_bankCd, ed_bankNm, 'F');
  }
};
scwin.udc_changeBankCdInfo_onviewchangeNameEvent = function (info) {
  ed_changeBankCd.setValue("");
  if (ed_changebankNm.getValue() != "") {
    scwin.f_openPopUp('4', ed_changeBankCd, ed_changebankNm, 'F');
  }
};

// 서브미션
scwin.sbm_retrievePaymgnt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_paymgnt.getRowCount();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCnt == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      totalRows.setValue(ds_paymgnt.getRowCount());
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// grid decode format
scwin.draftDdCntCdDisplayFm = function (data) {
  return $c.gus.decode($p, data, "000", "", data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:115px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:115px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급조건 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group col7',style:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 100px',allOption:'',id:'lc_payClsCd',class:'form-control ',direction:'auto',ref:'data:dma_condition.payClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_draftRt',placeholder:'',class:'form-control ',ref:'data:dma_condition.draftRt',initValue:'100',allowChar:'0-9',maxlength:'3',readOnly:'false'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급조건 확인여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w85',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_confirmConYn',style:'',submenuSize:'auto',ref:'data:dma_condition.confirmConYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급계좌 확인여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w85',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_confirmAccYn_',style:'',submenuSize:'auto',ref:'data:dma_condition.confirmAccYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급수단',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payCntShtCd',style:'width: 230px;',submenuSize:'auto',ref:'data:dma_condition.payCntShtCd',chooseOptionLabel:'전체',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',codeId:'ed_coCd',nameId:'ed_coNm',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',btnId:'btn_company',objTypeCode:'data',objTypeName:'data',code:'coCd',refDataCollection:'dma_condition',selectID:'retrieveDongbuGroupCompanyInfo',popupTitle:'회사조회,회사코드,법인명',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',id:'udc_companyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',allowCharCode:'0-9',maxlengthCode:'6',mandatoryCode:'false',objTypeCode:'data',objTypeName:'data',selectID:'retrieveClntList',code:'clntNo',refDataCollection:'dma_condition',popupTitle:'거래처팝업,거래처코드,거래처명',popupGridHeadTitle:'거래처코드,거래처명,temp,temp,사업자번호',id:'udc_clntList',popupGridHiddenColumn:'3,4,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntList_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clntList_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',codeId:'ed_payAcctDeptCd',nameId:'ed_reqAcctDeptNm',mandatoryCode:'false',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'Data',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'dma_condition',popupGridHeadTitle:'귀속코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',id:'udc_acctDeptCdInfo6',code:'payAcctDeptCd',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo6_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',codeId:'ed_bankCd',allowCharCode:'0-9',maxlengthCode:'2',mandatoryCode:'false',objTypeCode:'data',nameId:'ed_bankNm',objTypeName:'key',selectID:'retrieveBankCdInfo',code:'bankCd',refDataCollection:'dma_condition',id:'udc_bankCdInfo',popupGridHeadTitle:'은행코드,은행명',popupTitle:'은행조회,은행코드,은행명','ev:onclickEvent':'scwin.udc_bankCdInfo_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onviewchangeNameEvent':'scwin.udc_bankCdInfo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_bankCdInfo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_initTable',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_paymgnt',focusMode:'cell',id:'gr_paymgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',readOnly:'false',preventPasteColumn:'true',rowStatusVisible:'true',rowStatusWidth:'15',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'checkbox',removeBorderStyle:'false',width:'50',value:'선택여부',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'거래처 번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'150',value:'거래처명',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'사업자등록번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'계약부서명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'지급주기',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'지급일',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'지급수단',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'어음일수',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'지급화폐',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column41',value:'적용비율(%)',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'지급은행',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'계좌번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'예금주',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'확인',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'현금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'어음',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selYn',inputType:'checkbox',removeBorderStyle:'false',width:'50',trueValue:'1',falseValue:'0',valueType:'other'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'crn',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAcctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCycCd',inputType:'select',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDd',inputType:'select',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCntShtCd',inputType:'select',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftDdCntCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.draftDdCntCdDisplayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCrcCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cashRt',value:'',displayMode:'label',displayFormat:'##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'draftRt',value:'',displayMode:'label',displayFormat:'##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'bankCd',value:'',displayMode:'value delim label',textAlign:'left',allOption:'',chooseOption:'',ref:'',readOnlyClass:'false',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_paymgnt'},E:[{T:1,N:'w2:label',A:{ref:'bankNm'}},{T:1,N:'w2:value',A:{ref:'bankCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bankAcntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dpstrNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'info-list'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'여러건 수정시 한건이상 성공할 경우 성공 메세지가 뜹니다. 여러건 수정시 확인하여 주십시오.',class:''}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'어음 100%, 지급조건 확인여부, 지급계좌 확인여부가 "예"일경우 일괄적용 가능합니다.',class:''}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'이전은행과 변경은행이 다를 경우 일괄적용 가능합니다.',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'변경은행코드',style:'',tagname:'span'}},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'2',codeId:'ed_changeBankCd',nameId:'ed_changebankNm',objTypeName:'key',objTypeCode:'data',id:'udc_changeBankCdInfo',selectID:'retrieveBankCdInfo',popupGridHeadTitle:'은행코드,은행명',popupTitle:'은행조회,은행코드,은행명','ev:onclickEvent':'scwin.udc_changeBankCdInfo_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_changeBankCdInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_changeBankCdInfo_onviewchangeNameEvent',validTitle:'변경은행코드'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄적용'}]}]}]}]}]}]}]}]}]}]})