/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_01b.xml 50795 facc55241384ef1e538ecafc87da3b3ca217dfb8894b9c91a6ae8603f755cc62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'수취일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'수취일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'상태구분',dataType:'number'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgDutyEmpNo',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'corRegNo',name:'법인번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'청구금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'samt',name:'수금금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'수금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'수금전표회계처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'청구금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneySlipNo',name:'수금전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col26',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvStsCd',name:'채권상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_judge'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_judge',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveBorrowAcqKindInfo&param1=FM092',method:'post',mediatype:'application/json',ref:'data:json,dma_judge',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 조회조건 거래처번호 236333
// 전역변수
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strToDate = scwin.strCurDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.argObject = window.dialogArguments;
scwin.G_acctDeptCd = scwin.login.acctDeptCd;
scwin.G_acctDeptNm = scwin.login.acctDeptNm;
scwin.G_empNo = scwin.login.empNo;
scwin.G_empNm = scwin.login.empNm;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isChecked = true;

//화면로딩 전역변수
scwin.g_sUserId = scwin.login.empNo;
scwin.gJudgeYn = "0";

// 부모화면이 없기에 하드코딩된 전역변수. (삭제필요)
// scwin.vForwardingYn = "Y";

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

  // 팝업으로 열린 경우 사업자번호/사업자명 세팅
  if (scwin.params != "" && scwin.params != undefined) {
    let flag = scwin.params.flag;
    let crn = scwin.params.crn;
    let busiNm = scwin.params.busiNm;
    if (flag == "Y") {
      ed_crn.setValue(crn);
      ed_crnNm.setValue(busiNm);
      scwin.f_Retrieve();
      scwin.params.flag = '';
    }
  }
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
scwin.test = function () {
  ds_acctRecv.set;
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처 , 2:조회->귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  let cd = "";
  let nm = "";
  if (flag != "SKIP") {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  } else {
    cd = orgObjCd.getValue();
    nm = "";
  }
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '1':
      param = ed_coCd.getValue();
      rtnList = udc_clntEmpNoList.cfCommonPopUp(scwin.udc_clntEmpNoList_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처
      break;
    case '3':
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      rtnList = udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 청구부서						
      break;
    case '4':
      // 법인번호
      rtnList = udc_corRegNo.cfCommonPopUp(scwin.udc_corRegNo_callBackFunc, orgObjCd.getValue(), nm, "T", null, null, null, null, null, null, null, null, null); //법인번호
      break;
    case '5':
      // 사업자번호
      rtnList = udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      break;
    case '6':
      // 사원
      rtnList = udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_clntEmpNoList_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_sclntNo, ed_sclntNm, rtnList);
};
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_bilgAcctDeptCd, ed_sellAcctDeptNm, rtnList);
};
scwin.udc_corRegNo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_corRegNo, ed_hidcol, rtnList);
};
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_crn, ed_crnNm, rtnList);
};
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_bilgDutyEmpNo, ed_bilgDutyEmpNm, rtnList);
};
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
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
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
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 화면로딩시
//------------------------------------------------------------------------- 
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.crn = scwin.params.crn;
  scwin.busiNm = scwin.params.busiNm;
  scwin.vforwardingYn = scwin.params.forwardingYn;
};
scwin.onUdcCompleted = function () {
  ed_hidcol.hide(); // ucd 컴포넌트 설정.
  // header 설정
  dma_searchAcctRecv.set("lowerDeptIncluYn", "0");
  scwin.f_Reset();
  scwin.f_retrieveJudge();
  scwin.f_setCompanyInfo();
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  if (scwin.vForwardingYn == "Y") {
    ed_bilgAcctDeptCd.setValue("00907");
    ed_sellAcctDeptNm.setValue("국제영업팀(집계)");
    cbx_lowerDeptIncluYn.setValue("1");
  }
  scwin.gJudgeYn = "0";
  for (let i = 0; i < ds_judge.getRowCount(); i++) {
    if (scwin.g_sUserId == ds_judge.getCellData("col1")) {
      scwin.gJudgeYn = "1";
    }
  }

  //let flag =   scwin.params.flag;
  // let crn    = scwin.params.crn;
  // let compNm = scwin.params.compNm;

  // $c.win.alert( "flag   =>" + flag
  //     +"\ncrn    =>" + crn
  //     +"\ncompNm =>" + compNm
  // );

  ed_sclntNo.focus();
};

//-------------------------------------------------------------------------
// 초기화 관련 변수 정의 함수
//-------------------------------------------------------------------------
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
  //	$c.gus.cfDisableObjects([img2,img3,img4,img5,img6,img7]);
};

//-------------------------------------------------------------------------
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  scwin.f_Initial();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // asis는 회계일자 기준으로 sort해서 가지고옴.
  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    await $c.win.alert($p, "조회 청구일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_FromDate.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;

  // 거래처번호가 입력되었을경우                
  if (ed_sclntNo.getValue().trim() != "") {
    if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_sclntNo]))) {
      return;
    }
    // 사업자번호가 입력되었을경우
  } else if (ed_crn.getValue().trim() != "") {
    if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_crn]))) {
      return;
    }
    // 법인번호가 입력되었을경우
  } else if (ed_corRegNo.getValue().trim() != "") {
    if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_corRegNo]))) {
      return;
    }
    // 거래처번호, 사업자번호 둘다 입력안되었을경우
  } else {
    if (scwin.vForwardingYn == "Y") {
      if (ed_bilgAcctDeptCd.getValue().trim() == "") {
        await $c.win.alert($p, "거래처번호 혹은 사업자번호, 법인번호, 청구부서 중에 하나는 입력 하셔야 합니다.");
        return;
      }
    } else if (scwin.vLoginCoCd != "023") {
      // BIDC는  전체조회 가능
      await $c.win.alert($p, "거래처번호 혹은 사업자번호, 법인번호 중에 하나는 입력 하셔야 합니다.");
      return;
    }
  }

  // 어음상태코드는 수취만 조회 가능하게 함.
  dma_searchAcctRecv.set("billRecvStsCd", ACConstants.BILLRECV_DUE);
  // dma_searchAcctRecv.set("flag", "-1");
  $c.sbm.execute($p, sbm_searchAcctRecv);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.(그리드용)2006.11백진욱추가함
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function () {
  //심사권한 조회
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveBorrowAcqKindInfo",
    param1: "FM092"
  };
  dma_judge.setJSON(params);
  $c.sbm.execute($p, sbm_judge);
};
scwin.sbm_searchAcctRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_acctRecv.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  totalRows.setValue(rowCnt);

  // 수금금액의 값이 밑의 로직과 동일함. 청구금액 = 수금금액.

  // ============================================
  // 청구금액(원) 합계 계산
  // ============================================
  let sumAmt = 0;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (i == 0) {
      // 첫 행 방어
      sumAmt += Number(ds_acctRecv.getCellData(i, "amt")) || 0;
      continue;
    }
    if (ds_acctRecv.getCellData(i, "acctRecvNo") == ds_acctRecv.getCellData(i - 1, "acctRecvNo") &&
    // 채권번호
    ds_acctRecv.getCellData(i, "clntNo") == ds_acctRecv.getCellData(i - 1, "clntNo") &&
    // 거래처번호
    ds_acctRecv.getCellData(i, "acctRecvOutbrDt") == ds_acctRecv.getCellData(i - 1, "acctRecvOutbrDt") &&
    // 청구일자
    ds_acctRecv.getCellData(i, "bilgAcctDeptNm") == ds_acctRecv.getCellData(i - 1, "bilgAcctDeptNm") &&
    // 청구부서
    ds_acctRecv.getCellData(i, "amt") == ds_acctRecv.getCellData(i - 1, "amt") // 청구금액(원)
    ) {
      sumAmt = sumAmt + 0;
    } else {
      sumAmt = sumAmt + (Number(ds_acctRecv.getCellData(i, "amt")) || 0);
    }
  }
  gr_acctRecv.setFooterData("sumAmt", sumAmt);

  // ============================================
  // 잔액(원) 합계 계산
  // ============================================
  let sumRamt = 0;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (i == 0) {
      sumRamt += Number(ds_acctRecv.getCellData(i, "ramt")) || 0;
      continue;
    }
    if (ds_acctRecv.getCellData(i, "acctRecvNo") == ds_acctRecv.getCellData(i - 1, "acctRecvNo") && ds_acctRecv.getCellData(i, "clntNo") == ds_acctRecv.getCellData(i - 1, "clntNo") && ds_acctRecv.getCellData(i, "acctRecvOutbrDt") == ds_acctRecv.getCellData(i - 1, "acctRecvOutbrDt") && ds_acctRecv.getCellData(i, "bilgAcctDeptNm") == ds_acctRecv.getCellData(i - 1, "bilgAcctDeptNm") && ds_acctRecv.getCellData(i, "ramt") == ds_acctRecv.getCellData(i - 1, "ramt")) {
      sumRamt = sumRamt + 0;
    } else {
      sumRamt = sumRamt + (Number(ds_acctRecv.getCellData(i, "ramt")) || 0);
    }
  }
  gr_acctRecv.setFooterData("sumRamt", sumRamt);

  // ============================================
  // 청구금액(외) 합계 계산
  // ============================================
  let sumAmtFcrc = 0;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (i == 0) {
      sumAmtFcrc += Number(ds_acctRecv.getCellData(i, "amtFcrc")) || 0;
      continue;
    }
    if (ds_acctRecv.getCellData(i, "acctRecvNo") == ds_acctRecv.getCellData(i - 1, "acctRecvNo") && ds_acctRecv.getCellData(i, "clntNo") == ds_acctRecv.getCellData(i - 1, "clntNo") && ds_acctRecv.getCellData(i, "acctRecvOutbrDt") == ds_acctRecv.getCellData(i - 1, "acctRecvOutbrDt") && ds_acctRecv.getCellData(i, "bilgAcctDeptNm") == ds_acctRecv.getCellData(i - 1, "bilgAcctDeptNm") && ds_acctRecv.getCellData(i, "amtFcrc") == ds_acctRecv.getCellData(i - 1, "amtFcrc")) {
      sumAmtFcrc = sumAmtFcrc + 0;
    } else {
      sumAmtFcrc = sumAmtFcrc + (Number(ds_acctRecv.getCellData(i, "amtFcrc")) || 0);
    }
  }
  gr_acctRecv.setFooterData("sumAmtFcrc", sumAmtFcrc);

  // ============================================
  // 잔액(외) 합계 계산
  // ============================================
  let sumRamtFcrc = 0;
  for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (i == 0) {
      sumRamtFcrc += Number(ds_acctRecv.getCellData(i, "ramtFcrc")) || 0;
      continue;
    }
    if (ds_acctRecv.getCellData(i, "acctRecvNo") == ds_acctRecv.getCellData(i - 1, "acctRecvNo") && ds_acctRecv.getCellData(i, "clntNo") == ds_acctRecv.getCellData(i - 1, "clntNo") && ds_acctRecv.getCellData(i, "acctRecvOutbrDt") == ds_acctRecv.getCellData(i - 1, "acctRecvOutbrDt") && ds_acctRecv.getCellData(i, "bilgAcctDeptNm") == ds_acctRecv.getCellData(i - 1, "bilgAcctDeptNm") && ds_acctRecv.getCellData(i, "ramtFcrc") == ds_acctRecv.getCellData(i - 1, "ramtFcrc")) {
      sumRamtFcrc = sumRamtFcrc + 0;
    } else {
      sumRamtFcrc = sumRamtFcrc + (Number(ds_acctRecv.getCellData(i, "ramtFcrc")) || 0);
    }
  }
  gr_acctRecv.setFooterData("sumRamtFcrc", sumRamtFcrc);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  if (ds_acctRecv.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let fileName = '채권현황조회';
    let sheetTitle = '채권현황조회';
    await $c.data.downloadGridViewExcel($p, gr_acctRecv, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

// 초기화 버튼
scwin.btn_init_onclick = async function (e) {
  let sclntNo = ed_sclntNo.getValue();
  let sclntNm = ed_sclntNm.getValue();
  let fromDate = ed_FromDate.getValue();
  let toDate = ed_ToDate.getValue();
  await $c.gus.cfInitObjects($p, table1);
  ed_sclntNo.setValue(sclntNo);
  ed_sclntNm.setValue(sclntNm);
  ed_FromDate.setValue(fromDate);
  ed_ToDate.setValue(toDate);
};

//grid formatter (decode)
scwin.postYnDecode = function (data) {
  return $c.gus.decode($p, data, 1, "처리", "미처리");
};
scwin.flagDecode = function (data) {
  return $c.gus.decode($p, data, "1", "정리", "미정리");
};

// 전표번호 
scwin.gr_acctRecv_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    var slipNo = ds_acctRecv.getCellData(rowIndex, "slipNo");
    if (slipNo != "") {
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
  if (columnId == "collMoneySlipNo") {
    var collMoneySlipNo = ds_acctRecv.getCellData(rowIndex, "collMoneySlipNo");
    if (collMoneySlipNo != "") {
      await $c.gus.cfShowSlipInfo($p, collMoneySlipNo);
    }
  }
};
scwin.udc_clntEmpNoList_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};
scwin.udc_empNoInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bilgDutyEmpNo, ed_bilgDutyEmpNm, '6', 'ALL');
};
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bilgAcctDeptCd, ed_sellAcctDeptNm, '3', 'ALL');
};
scwin.udc_corRegNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_corRegNo, '', '4', 'SKIP');
};
scwin.ucd_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_crnNm, '5', '');
};
scwin.ucd_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '5', 'CD');
};
scwin.udc_crnInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '5', 'NM');
};
scwin.udc_clntEmpNoList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};
scwin.udc_clntEmpNoList_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgAcctDeptCd, ed_sellAcctDeptNm, '3', 'CD');
};
scwin.udc_acctDeptCdInfo6_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgAcctDeptCd, ed_sellAcctDeptNm, '3', 'NM');
};
scwin.udc_empNoInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgDutyEmpNo, ed_bilgDutyEmpNm, '6', 'CD');
};
scwin.udc_acEmpInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgDutyEmpNo, ed_bilgDutyEmpNm, '6', 'NM');
};
scwin.udc_corRegNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUp(ed_corRegNo, '', '4', 'SKIP');
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    		.guide-wrap{overflow:hidden}\n\n    	'}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'fromDate',refDataMap:'dma_searchAcctRecv',style:'',id:'',refEdDt:'toDate',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveClntEmpNoList',codeId:'ed_sclntNo',popupTitle:'거래처팝업,거래처코드,거래처명',nameId:'ed_sclntNm',style:'',code:'clntNo',refDataCollection:'dma_searchAcctRecv',id:'udc_clntEmpNoList',popupGridHeadTitle:'거래처코드,거래처명,temp,temp,사업자번호',popupGridHiddenColumn:'3,4,6,7,8,9,10',allowCharCode:'0-9',mandatoryCode:'false',validExpCode:'거래처:no:maxLength=6&number',maxlengthCode:'6',objTypeCode:'data',mandatoryName:'true','ev:onblurNameEvent':'scwin.udc_clntEmpNoList_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_clntEmpNoList_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntEmpNoList_onclickEvent',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgDutyEmpNo',nameId:'ed_bilgDutyEmpNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'사원조회,사원코드,사원명',selectID:'retrieveAcEmpInfo',style:'',objTypeCode:'data',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'6',validExpCode:'작성자:no:format=000000',mandatoryName:'false',maxlengthName:'50',code:'bilgDutyEmpNo',refDataCollection:'dma_searchAcctRecv',id:'udc_acEmpInfo','ev:onclickEvent':'scwin.udc_empNoInfo_onclickEvent',popupGridHeadTitle:'사원코드,사원명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_empNoInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acEmpInfo_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_flag',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_searchAcctRecv.flag'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgAcctDeptCd',nameId:'ed_sellAcctDeptNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',selectID:'retrieveAcctDeptCdInfo6',style:'',mandatoryName:'false',refDataCollection:'dma_searchAcctRecv',code:'bilgAcctDeptCd',id:'udc_acctDeptCdInfo6',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validExpCode:'청구귀속:no:maxLength=5&number',maxlengthName:'20',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9',objTypeCode:'data',mandatoryCode:'false','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo6_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_corRegNo',nameId:'ed_hidcol',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'법인번호조회,법인번호,법인명',selectID:'retrieveCorRegNo',style:'',mandatoryCode:'false',code:'corRegNo',refDataCollection:'dma_searchAcctRecv',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'data',validExpCode:'법인번호:no:format=0000000000000',id:'udc_corRegNo','ev:onclickEvent':'scwin.udc_corRegNo_onclickEvent',popupGridHeadTitle:'법인번호,사업자번호,법인명',popupGridHiddenColumn:'4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_corRegNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'사업자번호조회,사업자번호,사업자명',selectID:'retrieveCrnInfo',style:'',code:'crn',refDataCollection:'dma_searchAcctRecv',btnId:'btn_crn',id:'udc_crnInfo',popupGridHeadTitle:'사업자번호,사업자명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validExpName:'사업자명:no:maxLength=70&notAllowed',maxlengthCode:'13',maxlengthName:'70',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'false',objTypeCode:'data',mandatoryName:'false','ev:onclickEvent':'scwin.ucd_crnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.ucd_crnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crnInfo_onblurNameEvent',validTitle:'사업자번호',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'회사조회,회사코드,법인명',selectID:'retrieveDongbuGroupCompanyInfo',style:'',refDataCollection:'dma_searchAcctRecv',code:'coCd',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validExpCode:'회사코드:yes',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',validTitle:'회사코드',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_crcCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_searchAcctRecv.crcCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'외화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_lowerDeptIncluYn',ref:'data:dma_searchAcctRecv.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'채권현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_acctRecv',gridDownFn:'scwin.f_Export'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_acctRecv',id:'gr_acctRecv',readOnly:'true',style:'',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_acctRecv_oncellclick',visibleRowNum:'13'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'법인번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'채권번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'청구일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'청구부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'청구금액(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'수금금액(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'잔액(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'수금일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'수금전표회계처리',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'입금일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'적요',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'청구금액(외)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'잔액(외)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'통화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'환율',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'매출부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'회계일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'수금전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',style:'',value:'세금계산서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'전표순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'채권상태코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'매출귀속부서코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',value:'청구귀속부서코드',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'corRegNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{colMerge:'true',displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',upperColumn:'acctRecvNo',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',upperColumn:'acctRecvNo',colMerge:'true'}},{T:1,N:'w2:column',A:{displayFormat:'yyyy/MM/dd',displayMode:'label',id:'acctRecvOutbrDt',inputType:'calendar',style:'',value:'',width:'100',upperColumn:'acctRecvNo',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',excelExpression:'decode(bilgAcctDeptNm,"1","Y","0","N","")',id:'bilgAcctDeptNm',inputType:'text',style:'',value:'',width:'100',upperColumn:'acctRecvNo',colMerge:'true'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'right',excelCellType:'number',upperColumn:'acctRecvNo'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'samt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',colMerge:'false',excelCellType:'number',upperColumn:'acctRecvNo'}},{T:1,N:'w2:column',A:{colMerge:'true',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'ramt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayFormat:'yyyy/MM/dd',displayMode:'label',id:'wrkDt',inputType:'calendar',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.postYnDecode',displayMode:'label',id:'postYn',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayFormat:'yyyy/MM/dd',displayMode:'label',id:'susRecvInitamtOutbrDt',inputType:'calendar',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{colMerge:'true',displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayFormatter:'scwin.flagDecode',displayMode:'label',id:'flag',inputType:'text',ref:'',style:'',value:'',width:'70',colMerge:'true',upperColumn:'summary'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]}]}]},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'#,##0.00',displayMode:'label',id:'amtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',excelCellType:'number',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'#,##0.00',displayMode:'label',id:'ramtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',excelCellType:'number',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',style:'',value:'',width:'70',dataType:'float',maxLength:'.3',displayFormat:'#,##0.00',excelCellType:'number',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayFormat:'yyyy/MM/dd',displayMode:'label',id:'postDt',inputType:'calendar',style:'',value:'',width:'100',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'slipNo',inputType:'text',readOnly:'false',style:'color:blue;text-decoration:underline;',value:'',width:'100',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'collMoneySlipNo',inputType:'text',readOnly:'false',style:'color:blue;text-decoration:underline;',value:'',width:'100',colMerge:'true',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'',width:'120',upperColumn:'summary'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'col26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'slipSeq',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'acctRecvStsCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'sellAcctDeptCd',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'130'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column89',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column88',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column86',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'expression',style:'',value:'',width:'100',dataType:'number',expression:'SUM("samt")',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumRamt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column77',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmtFcrc',inputType:'text',style:'',value:'',width:'100',dataType:'float',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumRamtFcrc',inputType:'text',style:'',value:'',width:'100',dataType:'float',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column74',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column68',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'',width:'130'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''}}]}]}]}]}]})