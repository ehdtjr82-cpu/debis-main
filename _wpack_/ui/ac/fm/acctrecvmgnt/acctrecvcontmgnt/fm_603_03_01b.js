/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_03_01b.xml 45247 8f8892f493446ae9a16db10d87b23cd082fd7b9831179ef6424aee8a524c4c44 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgFromDate',name:'청구일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgToDate',name:'청구일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'청구금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt1',name:'잔액(원)1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'청구금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc1',name:'잔액(외) 1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'코드영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPatternCd',name:'계약유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addAcctRecvBdebt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'processEtc',name:'처리종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건)',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableBadDebtTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAcctRecv","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAcctRecvBdebt',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RegistAccountReceivableBadDebtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_acctRecv","key":"IN_DS1"},{"action":"modified","id":"ds_addAcctRecvBdebt","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAcctRecvBdebt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// 전역변수를 선언한다.
//-------------------------------------------------------------------------
scwin.checkSearch = false; // 거래처 귀속부서 필수값으로 조회된지 여부 확인변수
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)

//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {

  //ASIS 히든,showfalse 그리드 필드정보
  /*
  gr_acctRecv.setColumnVisible("collMoneyAcctDeptNm", false);
   gr_acctRecv.setColumnVisible("acctCd", false);
  gr_acctRecv.setColumnVisible("collMoneyIntendDt", false);
  gr_acctRecv.setColumnVisible("cdEngNm", false);
  gr_acctRecv.setColumnVisible("checknum", false);
  gr_acctRecv.setColumnVisible("acctRecvNo", false);
  gr_acctRecv.setColumnVisible("sellAcctDeptNm", false);
  gr_acctRecv.setColumnVisible("collMoneyAcctDeptCd", false);
   gr_acctRecv.setColumnVisible("bilgAcctDeptCd", false);
  gr_acctRecv.setColumnVisible("sellAcctDeptCd", false);
  gr_acctRecv.setColumnVisible("clntNo", false);
  gr_acctRecv.setColumnVisible("coCd", false);
  gr_acctRecv.setColumnVisible("coClsCd", false);
  */
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
  scwin.f_Reset();
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ed_wrkDt.setValue(scwin.strToDate);
  $p.setTimeout(function () {
    ed_sclntNo.focus();
  }, {
    "delay": 50
  });
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_Reset = function (e) {
  ed_amt.setValue("");
  ed_summary.setValue("");
  ds_addAcctRecvBdebt.insertRow(0);
  ds_addAcctRecvBdebt.setCellData(0, "processEtc", "1");
  $c.gus.cfEnableObj($p, "ed_amt", false);
  $c.gus.cfEnableObj($p, "ed_summary", false);
  ed_amt.setMandatory(false);
  ed_summary.setMandatory(false);
  //cfRefreshMandSign();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  try {
    //사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
      scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
      scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
    }
    ed_coCd.setValue(scwin.vLoginCoCd);
    scwin.f_PopUpCompanyInfo('T');
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 회사코드입력시
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  scwin.isStarted = false;
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사코드 찾기버튼 클릭시
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.isStarted = false;
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  /*
   var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  				,ed_coCd.text, txt_coNm.value
  				,pWinCloseTF,null,null,null,null
  				,null,null,null,null,null);
  */
  udc_coCd.setSelectId('retrieveDongbuGroupCompanyInfo');
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc // 콜백 함수
  , ed_coCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_coNm.getValue() // 화면에서의 ??? Name Element의 Value
  , pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // SET	 
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ed_coCd.setValue(rtnList[0]); // 코드
      ed_coNm.setValue(rtnList[5]); // 회사명
      ed_coCd.hidVal = rtnList[0]; // 히든값
      scwin.txtCoClsCd = rtnList[1]; // 회사구분  
    } else {
      ed_coCd.setValue("");
      ed_coNm.setValue("");
      scwin.txtCoClsCd = "";
      scwin.txtCoClsCd = "";
    }
    if (scwin.txtCoClsCd > '0') {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    if (scwin.isStarted == true) {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
    }
    ed_sclntNo.focus();
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 초기화버튼 클릭
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
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
    if (select_code == "1" || select_code == "2") scwin.checkSearch = false; // 정상조회여부 확인

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
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->청구(수금)귀속부서, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";
    let param = "";

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
      // 조회조건용 거래처 PopUp 호출
      case '1':
        scwin.checkSearch = false; // 정상조회여부 확인
        param = ed_coCd.getValue();
        //rtnList = cfCommonPopUp('retrieveClntEmpNoList',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntEmpNoList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 조회조건용 수금부서 PopUp 호출
      case '2':
        scwin.checkSearch = false; // 정상조회여부 확인
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd, nm,"T",null,null,null,null,param,null,null,null,null); // 귀속부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      default:
        $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sclntNo.setValue(rtnList[0]); // 코드값
      ed_sclntNm.setValue(rtnList[1]); // 코드명
      ed_sclntNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sclntNm.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_sclntNo.setValue("");
      ed_clntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 부서 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sacctDeptCd.setValue(rtnList[0]); // 코드값
      ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
      ed_sacctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sacctDeptNm.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 채권내역 및 수금수단 조회 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "청구일자 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }

    // 조회 조건의 필수 입력 사항 체크
    let ret = await $c.gus.cfValidate($p, [ed_sclntNo, ed_FromDate, ed_ToDate, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret2) {
      return false;
    }

    //채권내역 선택금액 초기화
    ed_selectAmt.setValue(0);
    ed_selectAmtFcrc.setValue(0);

    // 대손처리내역 초기화
    ed_amt.setValue("");
    ed_summary.setValue("");
    ds_acctRecv.removeAll();
    $c.sbm.execute($p, sbm_searchAcctRecv);
  } catch (e) {
    console.log("f_Retrieve " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchAcctRecv_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctRecv.getRowCount()));
    if (ds_acctRecv.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    } else {
      $c.gus.cfGoPrevPosition($p, gr_acctRecv, 0);
    }
  } catch (e) {
    console.log("sbm_searchAcctRecv_submitdone " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드셀클릭
//-------------------------------------------------------------------------
scwin.gr_acctRecv_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    //ASIS 값이 null인경우 NaN 에 대한 방어처리
    let ramt = 0;
    let ramtFcrc = 0;
    if (ed_selectAmt.getValue() == "") ed_selectAmt.setValue(0);
    if (ed_selectAmtFcrc.getValue() == "") ed_selectAmtFcrc.setValue(0);
    if (!$c.gus.cfIsNull($p, ds_acctRecv.getCellData(rowIndex, "ramt"))) ramt = parseInt(ds_acctRecv.getCellData(rowIndex, "ramt"));
    if (!$c.gus.cfIsNull($p, ds_acctRecv.getCellData(rowIndex, "ramtFcrc"))) ramtFcrc = parseInt(ds_acctRecv.getCellData(rowIndex, "ramtFcrc"));
    if (ds_acctRecv.getCellData(rowIndex, "num") == "T" && columnId == "num" && ds_acctRecv.getCellData(rowIndex, "checkNum") == "F") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) + ramt);
      ed_selectAmtFcrc.setValue(parseInt(ed_selectAmtFcrc.getValue()) + ramtFcrc);
      ds_acctRecv.setCellData(rowIndex, "checkNum", "T");
    } else if (ds_acctRecv.getCellData(rowIndex, "num") == "F" && columnId == "num" && ds_acctRecv.getCellData(rowIndex, "checkNum") == "T") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) - ramt);
      ed_selectAmtFcrc.setValue(parseInt(ed_selectAmtFcrc.getValue()) - ramtFcrc);
      ds_acctRecv.setCellData(rowIndex, "checkNum", "F");
    }
  } catch (e) {
    console.log("gr_acctRecv_oncellclick " + e);
  }
};

//-------------------------------------------------------------------------
// 처리종류 클릭시 발생
//-------------------------------------------------------------------------
scwin.rd_processEtc_onviewchange = function (info) {
  try {
    if (rd_processEtc.getValue() == "1" || rd_processEtc.getValue() == "3") {
      $c.gus.cfEnableObj($p, ed_amt, false);
      $c.gus.cfEnableObj($p, ed_summary, false);
      ed_amt.setMandatory(false);
      ed_summary.setMandatory(false);
      //cfRefreshMandSign();
      ed_amt.setValue("");
      ed_summary.setValue("");
      txt_amt.removeClass("req");
      txt_summary.removeClass("req");
    } else {
      $c.gus.cfEnableObj($p, ed_amt, true);
      $c.gus.cfEnableObj($p, ed_summary, true);
      ed_amt.setMandatory(true);
      ed_summary.setMandatory(true);
      txt_amt.addClass("req");
      txt_summary.addClass("req");
      //cfRefreshMandSign();
    }
  } catch (e) {
    console.log("rd_processEtc_onviewchange " + e);
  }
};

//-------------------------------------------------------------------------
// 수금등록 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    // 조회 조건의 필수 입력 사항 체크
    let ret = await $c.gus.cfValidate($p, [ed_sclntNo, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }
    let AccountReceivableAmt = 0; // 채권 선택 금액 합계
    let wertAmt = ed_amt.getValue().trim(); // 유가증권금액
    // 채권이나 수금쪽에 Check 여부 확인
    let intAccountReceivable = 0;

    // 선택한 채권 금액을 구한다.
    for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
      if (ds_acctRecv.getCellData(i, "num") == "T") {
        intAccountReceivable++;
        let ramt = 0;
        if (!$c.gus.cfIsNull($p, ds_acctRecv.getCellData(i, "ramt"))) parseInt(ds_acctRecv.getCellData(i, "ramt"));
        AccountReceivableAmt += ramt;
      }
    }
    if (rd_processEtc.getValue() == "1" || rd_processEtc.getValue() == "3") {
      // 충당금처리 저장시 필수 입력 사항 체크
      let ret2 = await $c.gus.cfValidate($p, [ed_sclntNo, ed_wrkDt, rd_processEtc]);
      if (!ret2) {
        return false;
      }
    } else {
      // 유가증권 저장시 필수 입력 사항 체크
      let ret3 = await $c.gus.cfValidate($p, [ed_sclntNo, ed_wrkDt, rd_processEtc, ed_amt, ed_summary]);
      if (!ret3) {
        return false;
      }
      if (wertAmt > AccountReceivableAmt) {
        $c.gus.cfAlertMsg($p, "유가증권금액이 채권선택금액보다 큽니다.\n유가증권금액을 확인하시기 바랍니다.");
        return false;
      }
    }
    if (intAccountReceivable == 0) {
      $c.gus.cfAlertMsg($p, "채권 항목은 최소 1개이상 선택 하셔야 합니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      ds_addAcctRecvBdebt.setCellData(0, "wrkDt", ed_wrkDt.getValue()); //load시 insertrow 했음
      ds_addAcctRecvBdebt.setCellData(0, "amt", ed_amt.getValue());
      ds_addAcctRecvBdebt.setCellData(0, "processEtc", rd_processEtc.getValue());
      ds_addAcctRecvBdebt.setCellData(0, "summary", ed_summary.getValue());
      ds_addAcctRecvBdebt.setCellData(0, "queryDeptSearchStDate", ed_FromDate.getValue());
      ds_addAcctRecvBdebt.setCellData(0, "queryDeptSearchEndDate", ed_ToDate.getValue());
      $c.sbm.execute($p, sbm_saveAcctRecvBdebt);
    }
  } catch (e) {
    console.log("f_Save " + e);
  }
};

//-------------------------------------------------------------------------
// 수금등록 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAcctRecvBdebt_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      scwin.f_Retrieve();
      return; //onFail
    }
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_searchAcctRecv',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sclntNo',nameId:'ed_sclntNm',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',id:'udc_clntNo',mandatoryName:'false',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_searchAcctRecv',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntEmpNoList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',btnId:'btn_clntNo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchAcctRecv',refEdDt:'bilgToDate',refStDt:'bilgFromDate',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_ToDate'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',refDataCollection:'ds_searchAcctRecv',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'청구귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',mandatoryCode:'true',maxlengthName:'20',objTypeCode:'data',objTypeName:'data',btnId:'btn_acctDeptCd',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'채권내역(대변)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_acctRecv',id:'gr_acctRecv',style:'',visibleRowNum:'12',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_acctRecv_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'text',value:'선택',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',value:'세금계산서번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvOutbrDt',inputType:'text',value:'청구일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm ',inputType:'text',value:'계정코드',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',value:'청구귀속부서',width:'130',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAcctDeptNm',inputType:'text',value:'청구(수금)귀속부서',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',value:'청구금액(원)',width:'130',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',value:'잔액(원)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',value:'청구금액(외)',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramtFcrc',inputType:'text',value:'잔액(외)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',value:'통화',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',value:'환율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'summary',value:'적요',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'collMoneyIntendDt',value:'수금예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cdEngNm',value:'통화코드Desc ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checknum',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',value:'채권번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellAcctDeptNm',value:'매출귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'collMoneyAcctDeptCd',value:'청구(수금)귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgAcctDeptCd',value:'청구귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDeptCd',value:'매출귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'coClsCd',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',width:'130',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvOutbrDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',width:'130',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAcctDeptNm',inputType:'text',width:'150',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramtFcrc',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'collMoneyIntendDt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cdEngNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checknum',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellAcctDeptNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'coClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(원)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_selectAmt',placeholder:'',style:'',objType:'key',mandatory:'true',title:'선택금액(원)',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(외)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_selectAmtFcrc',placeholder:'',style:'',objType:'key',mandatory:'true',title:'선택금액(외)',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',title:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_processEtc',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'','ev:onviewchange':'scwin.rd_processEtc_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'충당금처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상각비처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_amt',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',placeholder:'',style:'',objType:'data',mandatory:'true',title:'금액',maxlength:'13',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_summary',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'width: 250px;',objType:'data',mandatory:'true',title:'적요',maxByteLength:'100',maxlength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손등록'}]}]}]}]}]}]}]}]}]}]})