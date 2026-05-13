/*amd /ui/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_07b.xml 61256 588e60bb887b599599c962238f37eccf594186c314bd235a71e70245fe4d3808 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'거래처코드(대변)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호(대변)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNoD',name:'거래처코드(차변)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnD',name:'사업자번호(차변)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgFromDate',name:'수금예정일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgToDate',name:'수금예정일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyFromDate',name:'입금일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyToDate',name:'입금일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCntSht',name:'수금수단 계정종류 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'수금사원',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처사용유무(수금에서만 사용한다.값:T)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptrNm',name:'수금사항 입금자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'취소포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_addCollMoney'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'initAmt',name:'선수금',dataType:'number'}},{T:1,N:'w2:key',A:{id:'commiSsionAmt',name:'수수료(원)',dataType:'number'}},{T:1,N:'w2:key',A:{id:'commiSsionAmtFcrc',name:'수수료(외)',dataType:'number'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'processEtc',name:'처리종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'청구금액(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'청구금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'통화코드Desc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checknum',name:'CheckBox검사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramtFcrc1',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPatternCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt1',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'name57',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoney',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CheckBox검사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountItem',name:'계정항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvKey',name:'수금정산용Key값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'changeDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmtFcrc',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrcCheck',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtCheck',name:'name44',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveCollectionOfMoneyTargetAccountReceivableTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCollMoney',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveAccountReceivableSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_collMoney","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoney","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAcctRecvCollMoney',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RegistCollectionOfMoneyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_collMoney","key":"IN_DS1"},{"action":"modified","id":"ds_acctRecv","key":"IN_DS2"},{"id":"dma_addCollMoney","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAcctRecvCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.sDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.sDate.substring(0, 6) + "01";
scwin.strToDate = scwin.sDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.checkSearch = true;
scwin.checkRetrieveSave = "F";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.login.coCd) ? '' : scwin.login.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.login.coClsCd) ? '' : scwin.login.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;
scwin.g_sUserId = scwin.login.empNo;
scwin.isChecked = true;

//hidden
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->수금귀속부서, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  if (select_code == '1' || select_code == '2' || select_code == '3' || select_code == '1D' || select_code == '4D') {
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  let param = "";
  // let rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  cd = orgObjCd.getValue();
  nm = orgObjNm.getValue();
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '1':
      param = "" + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      rtnList = udc_clntEmpNo.cfCommonPopUp(scwin.udc_clntEmpNo_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처(모든 거래처를 다 조회한다.)
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      scwin.checkSearch = false; // 정상조회여부 확인
      break;
    // 조회조건용 수금부서 PopUp 호출
    case '2':
      param = ed_FromDate.getValue().trim() + "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",,,"; //자회사 회계시스템 추가사항 
      rtnList = udc_acctDept.cfCommonPopUp(scwin.udc_acctDept_callBackFunc, cd, nm, "T", null, null, null, null, param, "450", "500", null, null); // 귀속부서			
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      scwin.checkSearch = false; // 정상조회여부 확인
      break;
    /* 		 case '3' :
            param    = ",,,,,"+ed_coCd.getValue();	//자회사 회계시스템 추가사항
            rtnList = udc_bankBookCdInfo(scwin.udc_bankBookCdInfo_callBackFunc, cd,nm,"T",null,null,null,null,param,null,null,null,null); // 통장명
            //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
            if ( rtnList != null ) {
                let tempbankbookNm = rtnList[1];
                rtnList[1] = rtnList[2];
                rtnList[2] = tempbankbookNm;
                scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
            }
            break; */
    case '4':
      // 사업자번호
      rtnList = udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      // scwin.f_resultPopUp(orgObjCd,orgObjNm,rtnList);
      break;

    // 조회조건용 거래처 PopUp 호출(차변)
    case '1D':
      param = "" + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      rtnList = udc_clntEmpNoD.cfCommonPopUp(scwin.udc_clntEmpNoD_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처(모든 거래처를 다 조회한다.)
      // scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      scwin.checkSearch = false; // 정상조회여부 확인
      break;
    case '4D':
      // 사업자번호(차변)
      rtnList = udc_crnDInfo.cfCommonPopUp(scwin.udc_crnDInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      // scwin.f_resultPopUp(orgObjCd,orgObjNm,rtnList);
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) return;else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) return;else {
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }

  // 정상조회여부 확인
  if (select_code != "3") scwin.checkSearch = false;
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
// 팝업결과
//-------------------------------------------------------------------------     
scwin.udc_clntEmpNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sclntNo.setValue(rtnList[0]);
    ed_sclntNm.setValue(rtnList[1]);
    ed_sclntNo.options.hidVal = rtnList[0];
    ed_sclntNm.options.hidVal = rtnList[1];
  } else {
    ed_sclntNo.setValue("");
    ed_sclntNm.setValue("");
    ed_sclntNo.options.hidVal = "";
    ed_sclntNm.options.hidVal = "";
  }
};
scwin.udc_clntEmpNoD_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sclntNoD.setValue(rtnList[0]);
    ed_sclntNmD.setValue(rtnList[1]);
    ed_sclntNoD.options.hidVal = rtnList[0];
    ed_sclntNmD.options.hidVal = rtnList[1];
  } else {
    ed_sclntNoD.setValue("");
    ed_sclntNmD.setValue("");
    ed_sclntNoD.options.hidVal = "";
    ed_sclntNmD.options.hidVal = "";
  }
};
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]);
    ed_crnNm.setValue(rtnList[1]);
    ed_crn.options.hidVal = rtnList[0];
    ed_crnNm.options.hidVal = rtnList[1];
  } else {
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
    ed_crnNm.options.hidVal = "";
  }
};
scwin.udc_crnDInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crnD.setValue(rtnList[0]);
    ed_crnNmD.setValue(rtnList[1]);
    ed_crnD.options.hidVal = rtnList[0];
    ed_crnNmD.options.hidVal = rtnList[1];
  } else {
    ed_crnD.setValue("");
    ed_crnNmD.setValue("");
    ed_crnD.options.hidVal = "";
    ed_crnNmD.options.hidVal = "";
  }
};
scwin.udc_acctDept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sacctDeptCd.setValue(rtnList[0]);
    ed_sacctDeptNm.setValue(rtnList[1]);
    ed_sacctDeptCd.options.hidVal = rtnList[0];
    ed_sacctDeptNm.options.hidVal = rtnList[1];
  } else {
    ed_sacctDeptCd.setValue("");
    ed_crnNmD.setValue("");
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  //header정의
  dma_addCollMoney.set("processEtc", "1");
  $c.gus.cfDisableKey($p);
  scwin.f_setCompanyInfo();
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);

  //	alert(gJudgeYn);
  ica_wrkDt.setValue(scwin.strToDate); // 추가내역 작업일자 초기화

  dma_searchAcctRecv.set("repClntNo", "T"); // 대표거래처사용유무 
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, []);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 채권내역 및 수금수단 조회 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    await $c.win.alert($p, "수금예정 시작일자는 만기일자보다 이전 날짜 이어야 합니다.");
    ed_FromDate.focus();
    return;
  }
  dma_searchAcctRecv.set("queryDeptSearchStDate", ed_FromDate.getValue());
  dma_searchAcctRecv.set("queryDeptSearchEndDate", ed_ToDate.getValue());
  dma_addCollMoney.set("queryDeptSearchStDate", ed_FromDate.getValue());
  dma_addCollMoney.set("queryDeptSearchEndDate", ed_ToDate.getValue());

  // 조회 조건의 필수 입력 사항 체크
  if (ed_crn.getValue().trim() == "" && ed_sclntNo.getValue().trim() == "") {
    // 필수 조회조건 입력 여부(거래처) Check
    if (!(await $c.gus.cfValidate($p, [ed_sclntNo]))) {
      return;
    }
  } else {
    if (ed_crnD.getValue().trim() == "" && ed_sclntNoD.getValue().trim() == "") {
      if (!(await $c.gus.cfValidate($p, [ed_sclntNoD]))) {
        return;
      }
    }
  }
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_sacctDeptCd]))) {
    return;
  }
  $c.sbm.execute($p, sbm_searchAcctRecv);
  scwin.f_Retrieve2();

  //채권내역 선택금액 초기화
  ed_selectAmt.setValue("0");
  ed_selectAmtFcrc.setValue("0");

  //수금내역 선택금액 초기화
  ed_selectAmtCollMoney.setValue("0");
  ed_selectAmtFcrcCollMoney.setValue("0");
  dma_searchAcctRecv.set("repClntNo", "T");
  scwin.checkRetrieveSave = "F"; // 저장버튼에 의한 재조회인지 유저가 조회버튼을 클릭했는지 유무 확인 (전역변수)
};

//-------------------------------------------------------------------------
// 수금수단 조회 
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  // 조회 조건의 필수 입력 사항 체크
  if (ed_crn.getValue().trim() == "" && ed_sclntNo.getValue().trim() == "") {
    // 필수 조회조건 입력 여부(거래처) Check
    if (!(await $c.gus.cfValidate($p, [ed_sclntNo]))) {
      return;
    }
  } else {
    if (ed_crnD.getValue().trim() == "" && ed_sclntNoD.getValue().trim() == "") {
      if (!(await $c.gus.cfValidate($p, [ed_sclntNoD]))) {
        return;
      }
    }
  }
  $c.sbm.execute($p, sbm_searchCollMoney);

  //수금내역 선택금액 초기화
  ed_selectAmtCollMoney.setValue("0");
  ed_selectAmtFcrcCollMoney.setValue("0");
  dma_searchAcctRecv.set("repClntNo", "T");
};

//-------------------------------------------------------------------------
// 수금등록 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 필수 조건 입력 여부 Check(부서 날짜 검색시 이용됨)
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]))) {
    return;
  }
  let acctRecvCnt = 0;
  let collMoneyCnt = 0;
  let nCollMoneyAmt = 0;
  for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (ds_acctRecv.getCellData(i, "num") == "T") {
      acctRecvCnt++;
      dma_addCollMoney.set("acctDeptCd", ds_acctRecv.getCellData(i, "bilgAcctDeptCd"));
      dma_addCollMoney.set("clntNo", ds_acctRecv.getCellData(i, "clntNo"));
      dma_addCollMoney.set("crn", ds_acctRecv.getCellData(i, "crn"));
    }
  }
  if (acctRecvCnt == 0) {
    await $c.win.alert($p, "채권대변금액을 선택하십시오");
    return;
  }
  for (i = 0; i < ds_collMoney.getRowCount(); i++) {
    if (ds_collMoney.getCellData(i, "num") == "T") {
      collMoneyCnt++;
      nCollMoneyAmt = nCollMoneyAmt + Number(ds_collMoney.getCellData(i, "setlAmt"));
    }
  }
  if (collMoneyCnt == 0) {
    await $c.win.alert($p, "채권차변금액을 선택하십시오");
    return;
  }
  if (acctRecvCnt > 1 && collMoneyCnt > 1) {
    await $c.win.alert($p, "대변채권과 차변채권금액을 n건 선택할 수 없습니다.");
    return;
  }

  //if ( nCollMoneyAmt > ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "ramt") ){
  //	alert("채권잔액보다 수금할 금액이 클 경우는 수금처리를 못합니다.")
  //	return false
  //}

  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    $c.sbm.execute($p, sbm_saveAcctRecvCollMoney);
  }
};

//-------------------------------------------------------------------------
// 체크박스 클릭이벤트 발생시 해당 금액을 화면에 표시하는 함수(수금대상)
//-------------------------------------------------------------------------
scwin.collMoneyCheck = function (rowIdx) {
  if (ds_collMoney.getCellData(rowIdx, "num") == "T") {
    ed_selectAmtCollMoney.setValue(parseInt(ed_selectAmtCollMoney.getValue()) + parseInt(ds_collMoney.getCellData(rowIdx, "setlAmt")));
    ed_selectAmtFcrcCollMoney.setValue(parseFloat(ed_selectAmtFcrcCollMoney.getValue()) + parseFloat(ds_collMoney.getCellData(rowIdx, "setlAmtFcrc")));
  } else if (ds_collMoney.getCellData(rowIdx, "num") == "F") {
    ed_selectAmtCollMoney.setValue(parseInt(ed_selectAmtCollMoney.getValue()) - parseInt(ds_collMoney.getCellData(rowIdx, "setlAmt")));
    ed_selectAmtFcrcCollMoney.setValue(parseFloat(ed_selectAmtFcrcCollMoney.getValue()) - parseFloat(ds_collMoney.getCellData(rowIdx, "setlAmtFcrc")));
  }
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
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); //  귀속부서      
  $c.gus.cfInitObjects($p, [ed_sclntNo, ed_sclntNm]); //거래처    
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, ed_mgntEmpNm]); //사원  
};

//-------------------------------------------------------------------------
// 회사 변경시 이벤트 
//-------------------------------------------------------------------------

scwin.f_initObj = function () {
  //$c.gus.cfInitObjects([ed_acctDeptCd,ed_acctDeptNm]); //  귀속부서      
  //$c.gus.cfInitObjects([ed_sclntNo,ed_sclntNm]); //거래처    
  //$c.gus.cfInitObjects([ed_mgntEmpNo,ed_mgntEmpNm]); //사원  
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
// script 
//-------------------------------------------------------------------------
scwin.sbm_saveAcctRecvCollMoney_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.checkRetrieveSave = "T";
  scwin.f_Retrieve();
  scwin.f_Retrieve2();
};
scwin.sbm_searchAcctRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  let rowCnt = ds_acctRecv.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  ;
  totalRows.setValue(rowCnt);
};
scwin.sbm_searchCollMoney_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  let rowCnt = ds_collMoney.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  ;
  totalRows2.setValue(rowCnt);
};

//채권내역의 CheckBox 선택시 이벤트 발생
scwin.gr_acctRecv_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_acctRecv.getCellData(rowIndex, "num") == "T" && columnId == "num") {
    ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) + parseInt(ds_acctRecv.getCellData(rowIndex, "ramt")));
    ed_selectAmtFcrc.setValue(parseFloat(ed_selectAmtFcrc.getValue()) + parseFloat(ds_acctRecv.getCellData(rowIndex, "ramtFcrc")));
  } else if (ds_acctRecv.getCellData(rowIndex, "num") == "F" && columnId == "num") {
    ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) - parseInt(ds_acctRecv.getCellData(rowIndex, "ramt")));
    ed_selectAmtFcrc.setValue(parseFloat(ed_selectAmtFcrc.getValue()) - parseFloat(ds_acctRecv.getCellData(rowIndex, "ramtFcrc")));
  }
};

//채권내역 CheckBox 에서 키보드 이벤트에 대한 처리
scwin.gr_acctRecv_onkeyup = function (e) {
  if (e.keyCode == "32") {
    if (ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "num") == "T") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) + parseInt(ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "ramt")));
      ed_selectAmtFcrc.setValue(parseFloat(ed_selectAmtFcrc.getValue()) + parseFloat(ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "ramtFcrc")));
    } else if (ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "num") == "F") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) - parseInt(ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "ramt")));
      ed_selectAmtFcrc.setValue(parseFloat(ed_selectAmtFcrc.getValue()) - parseFloat(ds_acctRecv.getCellData(ds_acctRecv.rowPosition, "ramtFcrc")));
    }
  }
};

//수금내역의 CheckBox 선택시 이벤트 발생
//함수연결이 존재하나 컬럼이 존재하지 않음
scwin.gr_collMoney_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "num") {
    // if(ds_collMoney.getCellData(rowIndex, columnIndex) == "F"){
    //     ds_collMoney.setCellData(rowIndex, columnIndex, "T")
    // }else{
    //     ds_collMoney.setCellData(rowIndex, columnIndex, "F")
    // }
    // 체크박스 클릭시 이벤트 처리(금액계산)
    scwin.collMoneyCheck(rowIndex);
  }

  // 잔액을 수정하기 위해서 클릭시
  if (columnId == "setlAmt" || columnId == "setlAmtFcrc") {
    // 가수금과 선수금계정만 수정이 가능하다.
    if (ds_collMoney.getCellData(rowIndex, "acctCd") == ACConstants.ACCTCD_SUS_RECV || ds_collMoney.getCellData(rowIndex, "acctCd") == ACConstants.ACCTCD_INITAMT) {
      //  gr_collMoney.ColumnProp("setlAmt","Edit") = "Any";
      //  gr_collMoney.ColumnProp("setlAmtFcrc","Edit") = "Any";
      gr_collMoney.setCellReadOnly(rowIndex, "setlAmt", false);
      gr_collMoney.setCellReadOnly(rowIndex, "setlAmtFcrc", false);
    } else {
      //  gr_collMoney.ColumnProp("setlAmt","Edit") = "None";
      //  gr_collMoney.ColumnProp("setlAmtFcrc","Edit") = "None";
      gr_collMoney.setCellReadOnly(rowIndex, "setlAmt", true);
      gr_collMoney.setCellReadOnly(rowIndex, "setlAmtFcrc", true);
    }
  }
};

//함수연결이 존재하나 컬럼이 존재하지 않음
scwin.gr_collMoney_onkeyup = function (e) {
  // 	if (e.keyCode == "32") {
  // 		// 체크박스 클릭시 이벤트 처리(금액계산)
  // 		collMoneyCheck(ds_collMoney.getRowPosition());
  // /*		if ( ds_collMoney.getCellData(ds_collMoney.rowPosition, "num") == "T" && ds_collMoney.getCellData(ds_collMoney.rowPosition, "checkNum") == "F") {
  // 			ed_selectAmtCollMoney.setValue(parseInt(ed_selectAmtCollMoney.getValue()) + parseInt(ds_collMoney.getCellData(ds_collMoney.rowPosition, "setlAmt")));
  // 			ed_selectAmtFcrcCollMoney.setValue(parseFloat(ed_selectAmtFcrcCollMoney.getValue()) + parseFloat(ds_collMoney.getCellData(ds_collMoney.rowPosition, "setlAmtFcrc")));
  // 			ds_collMoney.setCellData(ds_collMoney.rowPosition, "checkNum", "T");
  // 		} else if (ds_collMoney.getCellData(ds_collMoney.rowPosition, "num") == "F" && ds_collMoney.getCellData(ds_collMoney.rowPosition, "checkNum") == "T") {
  // 			ed_selectAmtCollMoney.setValue(parseInt(ed_selectAmtCollMoney.getValue()) - parseInt(ds_collMoney.getCellData(ds_collMoney.rowPosition, "setlAmt")));
  // 			ed_selectAmtFcrcCollMoney.setValue(parseFloat(ed_selectAmtFcrcCollMoney.getValue()) - parseFloat(ds_collMoney.getCellData(ds_collMoney.rowPosition, "setlAmtFcrc")));
  // 			ds_collMoney.setCellData(ds_collMoney.rowPosition, "checkNum", "F");
  // 		}
  // */
  // 	}

  // 	// 가수금과 선수금계정만 수정이 가능하다.
  // 	if ( ds_collMoney.getCellData(ds_collMoney.rowPosition, "acctCd") == ACConstants.ACCTCD_SUS_RECV ||
  // 		 ds_collMoney.getCellData(ds_collMoney.rowPosition, "acctCd") == ACConstants.ACCTCD_INITAMT) {
  // 		//  gr_collMoney.ColumnProp("setlAmt","Edit") = "Any";
  // 		//  gr_collMoney.ColumnProp("setlAmtFcrc","Edit") = "Any";
  //             gr_collMoney.setCellReadOnly(rowIndex, "setlAmt", false)
  //             gr_collMoney.setCellReadOnly(rowIndex, "setlAmtFcrc", false)
  // 	} else {
  // 		//  gr_collMoney.ColumnProp("setlAmt","Edit") = "None";
  // 		//  gr_collMoney.ColumnProp("setlAmtFcrc","Edit") = "None";
  //             gr_collMoney.setCellReadOnly(rowIndex, "setlAmt", true)
  //             gr_collMoney.setCellReadOnly(rowIndex, "setlAmtFcrc", true)
  // 	}
};
scwin.gr_acctRecv_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "mgntNo") {
    let vsellVatNo = ds_acctRecv.getCellData(rowIndex, "mgntNo");
    let vUrl = "/ui/ds/fs/bilg/fs_202_06_10b.xml";
    let vTitle = "세금계산서 통합 발행";
    let menuId = "fs_202_06_10b.xml";
    data = {};
    data.sellVatNo = vsellVatNo;
    //cfTabMenuUpdate(url,"세금계산서 통합 발행");
    // $c.gus.cfCommonTabMenuAdd(url, "세금계산서 통합 발행");
    $c.win.openMenu($p, vTitle, vUrl, menuId, data, {
      menuCode: vsellVatNo,
      menuCode2: "new"
    });
  }
};
scwin.udc_clntEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};
scwin.udc_clntEmpNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};
scwin.udc_clntEmpNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};
scwin.udc_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_crnNm, '4', 'ALL');
};
scwin.udc_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'CD');
};
scwin.udc_crnInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'NM');
};
scwin.udc_clntEmpNoD_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNoD, ed_sclntNmD, '1D', 'ALL');
};
scwin.udc_clntEmpNoD_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNoD, ed_sclntNmD, '1D', 'CD');
};
scwin.udc_clntEmpNoD_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNoD, ed_sclntNmD, '1D', 'NM');
};
scwin.udc_crnDInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crnD, ed_crnNmD, '4D', 'ALL');
};
scwin.udc_crnDInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crnD, ed_crnNmD, '4D', 'CD');
};
scwin.udc_crnDInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crnD, ed_crnNmD, '4D', 'NM');
};
scwin.udc_acctDept_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'ALL');
};
scwin.udc_acctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'CD');
};
scwin.udc_acctDept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'NM');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:110px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'3',validExpCode:'회사코드:yes',nameId:'ed_coNm',btnId:'btn_company',UpperFlagCode:'1',objTypeName:'data',maxlengthName:'65',refDataCollection:'dma_searchAcctRecv',code:'coCd',id:'udc_companyInfo',selectID:'retrieveDongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',validTitle:'회사코드',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처(대변)',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_sclntNo',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'0-9',objTypeCode:'data',UpperFlagCode:'1',validExpCode:'거래처(대변):yes:maxLength=6&number',nameId:'ed_sclntNm',mandatoryName:'true',objTypeName:'data',maxlengthName:'50',refDataCollection:'dma_searchAcctRecv',code:'clntNo',selectID:'retrieveClntEmpNoList',id:'udc_clntEmpNo','ev:onclickEvent':'scwin.udc_clntEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntEmpNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntEmpNo_onblurNameEvent',validTitle:'거래처(대변)',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자번호(대변)',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',validExpCode:'사업자번호(대변):yes:format=0000000000',mandatoryCode:'true',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data',mandatoryName:'false',maxlengthName:'70',validExpName:'사업자명:no:maxLength=70&notAllowed',nameId:'ed_crnNm',refDataCollection:'dma_searchAcctRecv',code:'crn',selectID:'retrieveCrnInfo',id:'udc_crnInfo','ev:onclickEvent':'scwin.udc_crnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crnInfo_onblurNameEvent',codeId:'ed_crn',validTitle:'사업자번호(대변)',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'bilgFromDate',refDataMap:'dma_searchAcctRecv',style:'',id:'udc_fromToCalendar1',refEdDt:'bilgToDate',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data','ev:onBlur':'scwin.udc_fromToCalendar1_onBlur',titleFrom:'청구일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처(차변)',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_sclntNoD',nameId:'ed_sclntNmD',validExpCode:'거래처(차변):yes:maxLength=6&number',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'0-9',objTypeCode:'data',UpperFlagCode:'1',mandatoryName:'true',maxlengthName:'50',objTypeName:'data',refDataCollection:'dma_searchAcctRecv',code:'clntNoD',selectID:'retrieveClntEmpNoList',id:'udc_clntEmpNoD','ev:onclickEvent':'scwin.udc_clntEmpNoD_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntEmpNoD_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntEmpNoD_onblurNameEvent',validTitle:'거래처(차변)',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자번호(차변)',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_crnD',mandatoryCode:'true',maxlengthCode:'10',UpperFlagCode:'1',allowCharCode:'0-9',objTypeCode:'data',mandatoryName:'true',validExpName:'사업자명:no:maxLength=70&notAllowed',objTypeName:'data',maxlengthName:'50',refDataCollection:'dma_searchAcctRecv',code:'crnD',selectID:'retrieveCrnInfo',nameId:'ed_crnNmD',id:'udc_crnDInfo','ev:onclickEvent':'scwin.udc_crnDInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crnDInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crnDInfo_onblurNameEvent',validTitle:'사업자번호(변)',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구귀속',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',objTypeName:'data',validExpCode:'청구귀속:yes:maxLength=5&number',maxlengthCode:'5',mandatoryCode:'true',allowCharCode:'0-9',UpperFlagCode:'1',objTypeCode:'data',mandatoryName:'true',maxlengthName:'20',refDataCollection:'dma_searchAcctRecv',code:'acctDeptCd',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDept','ev:onclickEvent':'scwin.udc_acctDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDept_onblurNameEvent',validTitle:'청구귀속',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_serch',type:'button',class:'btn_cm sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'채권내역(대변)',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_acctRecv'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctRecv',evenRowBackgroundColor:'#F8FFF8',id:'gr_acctRecv',autoFit:'allColumn',class:'wq_gvw',visibleRowNum:'5',columnMove:'true','ev:oncellclick':'scwin.gr_acctRecv_oncellclick','ev:onkeyup':'scwin.gr_acctRecv_onkeyup','ev:oncelldblclick':'scwin.gr_acctRecv_oncelldblclick',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column2',value:'선택',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column1',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'청구일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'채권번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'청구귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'매출귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'청구금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'잔액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'청구금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'잔액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'통화코드Desc',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column47',value:'수금귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column45',value:'청구귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column43',value:'매출귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',id:'num',displayMode:'label',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'mgntNo',displayMode:'label',class:'underline',style:'color: blue;text-decoration: underline;',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'acctRecvOutbrDt',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'collMoneyIntendDt',class:'',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',class:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgAcctDeptNm',class:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellAcctDeptNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'amt',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'ramt',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'amtFcrc',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'ramtFcrc',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'exchRt',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'summary',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cdEngNm',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'checkbox',id:'checknum',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgAcctDeptCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDeptCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'coClsCd',displayMode:'label',readOnly:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(원)',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAmt',placeholder:'',class:' amt tar',mandatory:'true',objType:'key',maxlength:'20',displayFormat:'#,##0',dataType:'number',disabled:'true',initValue:'0'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(외)',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAmtFcrc',placeholder:'',class:' amt tar',maxlength:'20',mandatory:'true',objType:'key',displayFormatter:'#,##0',dataType:'number',type:'text',disabled:'true',initValue:'0'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'채권내역(차변)',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_collMoney'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_collMoney',evenRowBackgroundColor:'#F8FFF8',id:'gr_collMoney',autoFit:'allColumn',class:'wq_gvw',visibleRowNum:'4',columnMove:'true','ev:oncellclick':'scwin.gr_collMoney_oncellclick','ev:onkeyup':'scwin.gr_collMoney_onkeyup',rowStatusVisible:'true',rowStatusWidth:'15',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column2',value:'선택',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column19',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'계정항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'수금정산용Key값',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'채권발생일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'회사코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',id:'num',value:'',displayMode:'label',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'checkbox',style:'',id:'checkNum',value:'',displayMode:'label',falseValue:'F',trueValue:'T',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'accountItem',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'billRecvKey',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'susRecvInitamtOutbrDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'',id:'amt',class:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'',id:'amtFcrc',class:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'exchRt',value:'',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(원)',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAmtCollMoney',placeholder:'',class:'amt tar',mandatory:'true',objType:'key',maxlength:'20',dataType:'number',readOnly:'true',disabled:'true',initValue:'0',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(외)',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_selectAmtFcrcCollMoney',placeholder:'',class:' amt tar',mandatory:'true',objType:'key',dataType:'number',readOnly:'true',disabled:'true',initValue:'0',displayFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_wrkDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_addCollMoney.wrkDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선수금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_initAmt',placeholder:'',class:'tar',objType:'data',maxlength:'13',dataType:'number',displayFormat:'#,##0',initValue:'0',ref:'data:dma_addCollMoney.initAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료(원)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_commiSsionAmt',placeholder:'',class:'tar',objType:'data',displayFormat:'#,##0',dataType:'number',maxlength:'13',initValue:'0',ref:'data:dma_addCollMoney.commiSsionAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료(외)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_commiSsionAmtFcrc',placeholder:'',class:'tar',maxlength:'13.2',objType:'data',displayFormat:'#,##0.000',dataType:'float',initValue:'0',ref:'data:dma_addCollMoney.commiSsionAmtFcrc'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_save',label:'수금등록',class:'btn ',userAuth:'C','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]})