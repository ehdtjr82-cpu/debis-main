/*amd /ui/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_02_02b.xml 60354 3a2bed64e0ee42b18e49dbdd46f88c6d0e695594e18c6431370304c4ea26b029 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdCls',name:'기준구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyAcctDept',name:'수금귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDept',name:'청구귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCls',name:'거래처구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCls',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allDept',name:'하위부서포함',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정과목',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctrecvperiod',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbn',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleAcctDeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'거래처직원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'경로상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thismonth',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'culmulative',name:'누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonth2',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'beforemonthunder',name:'컬럼헤더명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결제기한구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결제기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctrecvperiodExcept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crossTab',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubunDesc',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAcctRecvMgnt',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.RetrieveAcctrecvperiodCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_acctrecvperiod","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctrecvperiod","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAcctRecvMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAcctRecvMgntExcept',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.RetrieveAcctrecvperiodExceptCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_acctrecvperiodExcept","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctrecvperiodExcept","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAcctRecvMgntExcept_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  

//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  div_grd2.hide();
  rd_std.setValue("1");
  $c.gus.cfDisableObjects($p, [ed_stdDt, lc_acctCd]);
  $c.gus.cfEnableObjects($p, [ed_stdYm]);
  ed_stdYm.setValue(scwin.g_sCurrDate.substring(0, 6));
  ed_stdDt.setValue(scwin.g_sCurrDate);
  rd_select.setValue(1);
  ed_stdYm.options.mandatory = true;
  //cfRefreshMandSign
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

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
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, ed_stdYm, ed_stdDt, ed_clntNo, txt_clntNm, lc_clntcls, lc_qrycls);
};

//-------------------------------------------------------------------------
// 기준년월 라디오클릭 f_disableStdDt
//-------------------------------------------------------------------------
scwin.rd_std_onviewchange = function (info) {
  if (rd_std.getValue() == "1") {
    rd_std2.setValue("");
    ed_stdDt.options.mandatory = false;
    ed_stdYm.options.mandatory = true;
    //cfRefreshMandSign();

    $c.gus.cfDisableObjects($p, [ed_stdDt]);
    $c.gus.cfEnableObjects($p, [ed_stdYm]);
  }
};
//-------------------------------------------------------------------------
// 기준일자 라디오클릭 f_disableStdDt
//-------------------------------------------------------------------------
scwin.rd_std2_onviewchange = function (info) {
  if (rd_std2.getValue() == "1") {
    rd_std.setValue("");
    ed_stdDt.options.mandatory = true;
    ed_stdYm.options.mandatory = false;
    //cfRefreshMandSign();

    $c.gus.cfDisableObjects($p, [ed_stdYm]);
    $c.gus.cfEnableObjects($p, [ed_stdDt]);
    ds_acctrecvperiod.removeAll();
    div_grd.show("");
    div_grd2.hide();
    div_btn1.show("");
  }
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_txt_clntNm, '2');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_txt_clntNm, 'F');
};

//-------------------------------------------------------------------------
// 청구부서찾기
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgAcctdept, ed_bilgAcctdeptNm, '1');
};

//-------------------------------------------------------------------------
// 청구부서명찾기
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgAcctdeptNm, ed_bilgAcctdeptNm, '1');
};

//-------------------------------------------------------------------------
// 청구부서찾기
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_bilgAcctdept, ed_bilgAcctdeptNm, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() != orgObjCd.hidVal) {
    orgObjNm.setValue("");
  }
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
  } else {
    if (!orgObjNm == null) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sPopupCls) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    name = txtName.getValue();
    switch (select_code) {
      // 관리부서 PopUp 호출
      case '1':
        //udc_bilgAcctDept
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 관리부서
        udc_bilgAcctDept.setSelectId('retrieveAcctDeptCdInfo6');
        udc_bilgAcctDept.cfCommonPopUp(scwin.udc_bilgAcctDept_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        , 'F' // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 거래처 PopUp 호출	
      case '2':
        param = ed_coCd.getValue();
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 관리부서
        udc_clntNo.setSelectId('retrieveClntEmpNoList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        , 'F' // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 청구부서 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_bilgAcctdept.setValue(rtnList[0]); // 코드
      ed_bilgAcctdeptNm.setValue(rtnList[1]); // 코드
      ed_bilgAcctdept.hidVal = rtnList[0]; // 코드
    } else {
      ed_bilgAcctdept.setValue("");
      ed_bilgAcctdeptNm.setValue("");
      ed_bilgAcctdept.hidVal = "";
    }
  } catch (e) {
    console.log("udc_bilgAcctDept_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드
      ed_txt_clntNm.setValue(rtnList[1]); // 코드
      ed_clntNo.hidVal = rtnList[0]; // 코드
    } else {
      ed_clntNo.setValue("");
      ed_txt_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_detail = function () {
  try {
    if (ds_acctrecvperiod.getRowCount() <= 0) {
      $c.win.alert($p, "월령상세내역이 존재하지 않습니다.");
      return false;
    }
    if (rd_std2.getValue() == "1") {
      /* 미사용
      var style = "center:yes; dialogwidth:960px; dialogheight:750px; scroll:no; resizable:no; status:yes;";
      var strPath = "fm_601_02_03p.jsp?stdDt="+ed_stdDt.text.trim()+"&clntNo="+ed_clntNo.text.trim()+"&bilgAcctDept="+ed_bilgAcctdept.text.trim()+ "&coCd=" + ed_coCd.text;
      var returnValue = window.showModalDialog(strPath, ds_acctrecvperiod ,style ) ;
       */
    } else {
      //valueObject
      let data = {
        stdYm: ed_stdYm.getValue(),
        clntNo: ed_clntNo.getValue(),
        bilgAcctDept: ed_bilgAcctdept.getValue(),
        coCd: ed_coCd.getValue()
      };
      let opts = {
        id: "fm_601_02_04p",
        popupName: "월령상세조회화면",
        modal: true,
        type: "browserPopup",
        title: "",
        width: "1100",
        height: "750",
        scrollbars: "no"
      };
      $c.win.openPopup($p, "/ui/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_02_04p.xml", opts, data);
    }
  } catch (e) {
    console.log("f_detail :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    if (rd_select.getValue() == "1") {
      scwin.f_retrieveAcctRecvMgnt();
    } else {
      scwin.f_retrieveAcctRecvMgntExcept();
    }
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회(외상매출금)
//-------------------------------------------------------------------------
scwin.f_retrieveAcctRecvMgnt = async function () {
  try {
    if (rd_std2.getValue() == "1") {
      let ret = await $c.gus.cfValidate($p, [ed_stdDt]);
      if (!ret) {
        return false;
      }
      gr_acctrecvperiod.setHeaderValue("thismonth", ed_stdDt.getValue().toDate().after(0, 0, 0).format("YYYY년MM월"));
      gr_acctrecvperiod.setHeaderValue("beforemonth", ed_stdDt.getValue().toDate().after(0, -1, 0).format("YYYY년MM월"));
      gr_acctrecvperiod.setHeaderValue("beforemonth2", ed_stdDt.getValue().toDate().after(0, -2, 0).format("YYYY년MM월"));
      gr_acctrecvperiod.setHeaderValue("beforemonthunder", ed_stdDt.getValue().toDate().after(0, -3, 0).format("YYYY년MM월이전"));
      ds_condition.set("stdCls", "1");
    } else {
      let ret2 = await $c.gus.cfValidate($p, [ed_stdYm]);
      if (!ret2) {
        return false;
      }
      let sDate = ed_stdYm.getValue() + "01";
      gr_acctrecvperiod.setHeaderValue("thismonth", sDate.toDate().after(0, 0, 0).format("YYYY년MM월"));
      gr_acctrecvperiod.setHeaderValue("beforemonth", sDate.toDate().after(0, -1, 0).format("YYYY년MM월"));
      gr_acctrecvperiod.setHeaderValue("beforemonth2", sDate.toDate().after(0, -2, 0).format("YYYY년MM월"));
      gr_acctrecvperiod.setHeaderValue("beforemonthunder", sDate.toDate().after(0, -3, 0).format("YYYY년MM월이전"));
      ds_condition.set("stdCls", "2");
    }
    let vChk_allDept = "0";
    if (chb_allDept.getValue() == "1") {
      vChk_allDept = "1";
    }
    ds_acctrecvperiod.removeAll();
    ds_condition.set("allDept", vChk_allDept);
    $c.sbm.execute($p, sbm_retrieveAcctRecvMgnt);
  } catch (e) {
    console.log("f_retrieveAcctRecvMgnt :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회(외상매출금)결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveAcctRecvMgnt_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctrecvperiod.getRowCount()));
    if (ds_acctrecvperiod.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      var options = {};
      options.sortIndex = "collMoneyAcctDeptCd crn clntNm";
      options.sortOrder = "1 1 1";
      ds_acctrecvperiod.multisort(options); //SortExpr +collMoneyAcctDeptCd +crn +clntNm
      $c.gus.cfGoPrevPosition($p, gr_acctrecvperiod, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_retrieveAcctRecvMgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회(그외)
//-------------------------------------------------------------------------
scwin.f_retrieveAcctRecvMgntExcept = async function () {
  try {
    let vChk_allDept = "0";
    if (chb_allDept.getValue() == "1") {
      vChk_allDept = "1";
    }
    ds_acctrecvperiodExcept.removeAll();
    ds_condition.set("allDept", vChk_allDept);
    $c.sbm.execute($p, sbm_retrieveAcctRecvMgntExcept);
  } catch (e) {
    console.log("f_retrieveAcctRecvMgntExcept : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회(그외)결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveAcctRecvMgntExcept_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    ds_crossTab.setJSON(ds_acctrecvperiodExcept.getAllJSON());
    if (ds_crossTab.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      for (var i = 0; i < ds_crossTab.getRowCount(); i++) {
        if (ds_crossTab.getCellData(i, "gubun") == "1") {
          ds_crossTab.setCellData(i, "gubun", "발생");
        } else if (ds_crossTab.getCellData(i, "gubun") == "2") {
          ds_crossTab.setCellData(i, "gubun", "정리");
        } else if (ds_crossTab.getCellData(i, "gubun") == "3") {
          ds_crossTab.setCellData(i, "gubun", "잔액");
        }
      }
    }
  } catch (e) {
    console.log("sbm_retrieveAcctRecvMgntExcept_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 피벗 구분필드에 대한 정렬정의
//-------------------------------------------------------------------------
scwin.customPivotSort = function (columnId) {
  if (columnId === "gubun") {
    return function (a, b) {
      const order = {
        "발생": 1,
        "정리": 2,
        "잔액": 3
      };
      return order[a] - order[b];
    };
  }
};

//-------------------------------------------------------------------------
// 피벗그리드 카운트 정의
//-------------------------------------------------------------------------
scwin.gr_acctrecvperiodExcept_onrefresh = function (options) {
  tbx_totalRows2.setValue($c.gus.cfInsertComma($p, gr_acctrecvperiodExcept.getTotalRow()));
};

//-------------------------------------------------------------------------
// 출력
//-------------------------------------------------------------------------
scwin.f_OzReport = async function (e) {
  try {
    let sAcctDeptNm = "";
    let sClntNm = "";
    let sDate = "";
    let printMode = "";
    if (chb_printCheck.getValue() == "1") {
      printMode = "print";
    }

    //chb_printCheck, chb_previewCheck 인경우도 preview가 됨
    if (chb_previewCheck.getValue() == "1") {
      printMode = "preview";
    }
    let ret = await $c.gus.cfValidate($p, [ed_stdDt]);
    if (!ret) {
      return false;
    }
    if (rd_std2.getValue() == "1") sDate = ed_stdDt.getValue();else sDate = ed_stdYm.getValue();
    let thismonth = sDate.toDate().after(0, 0, 0).format("YYYY년MM월");
    let beforemonth = sDate.toDate().after(0, -1, 0).format("YYYY년MM월");
    let beforemonth2 = sDate.toDate().after(0, -2, 0).format("YYYY년MM월");
    let beforemonthunder = sDate.toDate().after(0, -3, 0).format("YYYY년MM월이전");
    if (ed_bilgAcctdeptNm.getValue().trim() == null || ed_bilgAcctdeptNm.getValue().trim() == "") {
      sAcctDeptNm = "전체";
    } else {
      sAcctDeptNm = ed_bilgAcctdeptNm.getValue().trim();
    }
    if (ed_txt_clntNm.getValue().trim() == null || ed_txt_clntNm.getValue().trim() == "") {
      sClntNm = "전체";
    } else {
      sClntNm = ed_txt_clntNm.getValue().trim();
    }
    let data = "";
    if (rd_std2.getValue() == "1") {
      data = {
        odiName: "fm_601_02_02",
        reportName: "/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_02_02.ozr",
        odiParam: {
          P_STD_DT: ed_stdDt.getValue()
        },
        viewerParam: {
          useprogressbar: true,
          // 프로그레스바 쓸지 말지
          zoom: 90,
          // 배율 설정
          mode: printMode
        },
        formParam: {}
      };
    } else {
      data = {
        oodiName: "fm_601_02_03",
        reportName: "/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_02_03.ozr",
        odiParam: {
          P_STD_YM: ed_stdYm.getValue().trim(),
          P_COLL_MONEY_ACCT_DEPT_CD: ed_bilgAcctdept.getValue(),
          P_CLNT_NO: ed_clntNo.getValue(),
          P_CLNT_CD: lc_clntcls.getValue(),
          P_STD_YM: ed_stdYm.getValue(),
          BEF1: thismonth.trim(),
          BEF2: beforemonth.trim(),
          BEF3: beforemonth2.trim(),
          BEF4: beforemonthunder.trim(),
          ACCT_DEPT_NM: sAcctDeptNm.trim(),
          CLNT_NM: sClntNm.trim(),
          CLNT_CD_NM: lc_clntcls.getValue(),
          STS_NM: lc_qrycls.getValue(),
          CO_CD: ed_coCd.getValue()
        },
        viewerParam: {
          useprogressbar: true,
          // 프로그레스바 쓸지 말지
          zoom: 90,
          // 배율 설정
          mode: printMode
        },
        formParam: {}
      };
    }
    //출력
    if (printMode == "print") {
      let opts = {
        "type": 'print',
        "printMode": 'view'
      };
      $c.ext.printOzReport($p, data, opts);
    } else if (printMode == "preview") {
      let opts = {
        "type": 'viewer',
        "printMode": 'view'
      };
      $c.ext.openOzReport($p, data, opts);
    } else {
      let opts = {
        filename: '',
        exportMode: 'view'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }

    //scwin.openPopup(data);
  } catch (e) {
    console.log("f_OzReport : " + e);
  }
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
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
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  try {
    let gridName = "";
    if (ds_acctrecvperiod.getRowCount() <= 0) {
      $c.win.alert($p, "월령내역이 존재하지않습니다.");
      return false;
    }
    gridName = "월령조회";
    const options = {
      fileName: gridName + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: gridName //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_acctrecvperiod, options, infoArr);
  } catch (e) {
    console.log("f_GridToExcel : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장(월령조회 그외)
//-------------------------------------------------------------------------
scwin.f_GridToExcel2 = function () {
  try {
    let gridName = "";
    if (ds_acctrecvperiodExcept.getRowCount() <= 0) {
      $c.win.alert($p, "월령내역이 존재하지않습니다.");
      return false;
    }
    gridName = "월령조회_그외";

    /*const options = {
        fileName : gridName +".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,sheetName :gridName //엑셀내 시트명 지정필요시
    };*/

    let options = {};
    options.type = "1";
    options.fileName = gridName + ".xlsx";
    options.sheetName = gridName;

    //왼쪽상단 빈값
    options.axisLColor = "#e8e8e8"; //excel파일에서 좌측 상단 axis 영역의 색
    options.axisLFontName = "굴림"; //excel파일에서 좌측 상단 axis 영역의 font name
    options.axisLFontSize = "10"; //excel파일에서 좌측 상단 axis 영역의 font size
    options.axisLTextAlign = "center"; //excel파일에서 좌측 상단 axis 영역의 정렬값 ("center", "right", "left")

    //우측상단(구분)
    options.axisRColor = "#e8e8e8"; //excel파일에서 우측 상단 axis 영역의 색
    options.axisRFontName = "굴림"; //excel파일에서 우측 상단 axis 영역의 font name
    options.axisRFontSize = "10"; //excel파일에서 우측 상단 axis 영역의 font size
    options.axisRTextAlign = "center"; //excel파일에서 우측 상단 axis 영역의 정렬값 ("center", "right", "left")

    //하단상단(형태,자산유형)
    options.axisBColor = "#e8e8e8"; //excel파일에서 하단 상단 axis 영역의 색
    options.axisBFontName = "굴림"; //excel파일에서 하단 상단 axis 영역의 font name
    options.axisBFontSize = "10"; //excel파일에서 하단 상단 axis 영역의 font size
    options.axisBTextAlign = "center"; //excel파일에서 하단 상단 axis 영역의 정렬값 ("center", "right", "left")

    //우측축 헤더(2025 실적계)
    options.headerXColor = "#e8e8e8"; //excel파일에서 상단 header 영역의 색
    options.headerXFontName = "굴림"; //excel파일에서 상단 header 영역의 font name
    options.headerXFontSize = "10"; //excel파일에서 상단 header 영역의 font size

    //좌측축 헤더(유형,무형)
    options.headerYColor = "#e8e8e8"; //excel파일에서 좌측축 영역의 색
    options.headerYFontName = "굴림"; //excel파일에서 좌측축 영역의 font name
    options.headerYFontSize = "10"; //excel파일에서 좌측축 영역의 font size
    options.headerYTextAlign = "left"; //excel파일에서 좌측축 영역의 정렬값 ("center", "right", "left")

    //BODY 영역 변경(숫자값)
    options.bodyTextAlign = "right"; //excel파일에서 body영역의 정렬값 ("center", "right", "left")
    options.autoSizeColumn = "body"; //너비자동맞춤 설정 유무
    options.bodyWordwrap = "true"; //다운로드시 바디의 줄 바꿈 기능
    options.bodyFontName = "굴림"; //excel파일에서 body영역의 font name
    options.bodyFontSize = "10"; //excel파일에서 body영역의 font size

    //이건하나도 아니네
    // options.totalXColor    = "#e8e8e8"; //excel파일에서 상단 header의 합계 영역의 색
    // options.totalXFontName = "굴림";    //excel파일에서 상단 header의 합계 영역의 font name
    // options.totalXFontSize = "10";      //excel파일에서 상단 header의 합계 영역의 font size
    // options.totalXTextAlign= "left";    //excel파일에서 상단 header의 합계 영역의 정렬값 ("center", "right", "left")

    //총계 영역 : 요약에서만 사용
    options.totalYColor = "#e8e8e8"; //excel파일에서 좌측축의 합계 영역의 색
    options.totalYFontName = "굴림"; //excel파일에서 좌측축의 합계 영역의 font name
    options.totalYFontSize = "10"; //excel파일에서 좌측축의 합계 영역의 font size
    options.totalYFontWeight = "N"; //excel파일에서 좌측축의 합계 영역의 Bold 지정 ( ex) "bold" )
    options.totalYTextAlign = "left"; //excel파일에서 좌측축의 합계 영역의 정렬값 ("center", "right", "left")

    //TOTAL(숫자값)
    //options.sumColor       = "e8e8e8";//excel파일에서 body 영역의 합계부분의 색
    options.sumFontName = "굴림"; //excel파일에서 body 영역의 합계부분의 font name
    options.sumFontSize = "10"; //excel파일에서 body 영역의 합계부분의 font size
    options.sumTextAlign = "right"; //excel파일에서 body 영역의 합계부분의 정렬값 ("center", "right", "left")
    options.sumFontWeight = "N"; //excel파일에서 body 영역의 합계부분의 Bold 지정 ( ex) "bold" );
    // options.sumFormat      = "#,###";   //excel파일에서 body 영역의 합계부분의 format (ex) #,###)

    const infoArr = [];
    gr_acctrecvperiodExcept.pivotExcelDownload(options, infoArr);
  } catch (e) {
    console.log("f_GridToExcel2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처팝업화면 호출
//-------------------------------------------------------------------------
scwin.gr_acctrecvperiod_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntNo") {
    if (!(ds_acctrecvperiod.getCellData(rowIndex, columnId) == null && ds_acctrecvperiod.getCellData(rowIndex, columnId) == "")) {
      $c.gus.cfViewClntInfo($p, ds_acctrecvperiod.getCellData(rowIndex, columnId));
    }
  }
};

//-------------------------------------------------------------------------
// 외상매출/그외 선택시
//-------------------------------------------------------------------------
scwin.rd_select_onviewchange = function (info) {
  try {
    let rdSelect = rd_select.getValue();
    if (rdSelect == 1) {
      div_grd.show("");
      div_grd2.hide();
      div_btn1.show("");
      $c.gus.cfEnableObjects($p, [rd_std2]);
      ds_condition.set("acctCd", "");
      $c.gus.cfDisableObjects($p, [lc_acctCd]);
    } else {
      div_grd.hide();
      div_grd2.show("");
      div_btn1.hide();
      rd_std.setValue(1); //rd_std[0].checked = true;
      rd_std2.setValue(0);
      $c.gus.cfDisableObjects($p, [rd_std2]);
      $c.gus.cfEnableObjects($p, [lc_acctCd]);
    }
  } catch (e) {
    console.log("rd_select_onviewchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 피벗 구분필드에 대한 정렬정의
//-------------------------------------------------------------------------
scwin.customPivotSort = function (columnId) {
  if (columnId === "gubun") {
    return function (a, b) {
      const order = {
        "발생": 1,
        "정리": 2,
        "잔액": 3
      };
      return order[a] - order[b];
    };
  }
};

//-------------------------------------------------------------------------
// 피벗그리드 카운트 정의
//-------------------------------------------------------------------------
scwin.gr_acctrecvperiodExcept_onrefresh = function (options) {
  tbx_totalRows2.setValue($c.gus.cfInsertComma($p, gr_acctrecvperiodExcept.getTotalRow()));
  //tbx_totalRows2.setValue($c.gus.cfInsertComma(ds_crossTab.getRowCount()));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_std',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_std_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기준년월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ed_stdYm',style:'',mandatory:'true',displayFormat:'yyyy/MM',ref:'data:ds_condition.stdYm',title:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:group',A:{class:'req',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_std2',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_std2_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기준일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_stdDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_condition.stdDt',title:'기준일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 100%',class:'',code:'coCd',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',id:'udc_coCd',objTypeCode:'data',UpperFlagCode:'1',objTypeName:'data',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',validExpCode:'회사코드:yes',refDataCollection:'ds_condition',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_bilgAcctDept',code:'bilgAcctDept',codeId:'ed_bilgAcctdept','ev:onblurCodeEvent':'scwin.udc_bilgAcctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgAcctDept_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgAcctDept_onclickEvent',id:'udc_bilgAcctDept',nameId:'ed_bilgAcctdeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'ds_condition',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'청구부서',allowCharCode:'0-9'}},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_allDept',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_select',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'1',style:'',objType:'data','ev:onviewchange':'scwin.rd_select_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'그외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정과목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_condition.acctCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11105'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금(일반제외)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11104'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11107'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11110'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_qrycls',objType:'data',ref:'data:ds_condition.qryCls',style:'width: 85px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잔액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'99'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntcls',objType:'data',ref:'data:ds_condition.clntCls',style:'width: 90px;',submenuSize:'auto',title:'거래처구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계열사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntNo',code:'clntNo',codeId:'ed_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',id:'udc_clntNo',maxlengthName:'6',nameId:'ed_txt_clntNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'ds_condition',selectID:'retrieveClntEmpNoList',style:'',validTitle:'거래처'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'div_grd'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_acctrecvperiod',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_acctrecvperiod',id:'gr_acctrecvperiod',hideFilterIconOnNoData:'data:ds_acctrecvperiod',fixedColumn:'12',readOnly:'true',resize:'true',columnMove:'true',fixedColumnNoMove:'true','ev:oncellclick':'scwin.gr_acctrecvperiod_oncellclick',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'청구부서',width:'100',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'부서명',width:'120',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'사업자번호',width:'100',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처',width:'100',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'거래처명',width:'140',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'구분',width:'70',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'계정코드',width:'100',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'계정명',width:'120',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'사업영역',width:'100',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출부서',width:'100',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'부서명',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'구분',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'beforemonthunder',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'beforemonth2',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'beforemonth',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thismonth',value:'컬럼헤더명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'누계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'전화번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'담당자명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'결제조건',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'결제기한',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAcctDeptCd',inputType:'text',width:'100',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'120',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'link',width:'100',colMerge:'true',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'140',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gbn',inputType:'text',width:'70',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptCd',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'saleAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'stsCd',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'발생'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'잔액'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'beforemonthunder',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'beforemonth2',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'beforemonth',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thismonth',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'culmulative',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'Number(display(\'thismonth\'))+Number(display(\'beforemonth\'))+Number(display(\'beforemonth2\'))+Number(display(\'beforemonthunder\'))'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntTelNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntPersNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stmtPrdClsCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stmtPrdDd',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'div_grd2'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_acctrecvperiodExcept',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel2',btnUser:'N',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:pivot',A:{allTotalName:'합계',vals:'amt',editablePivotMode:'false',rows:'acctDeptCd,acctDeptNm,acctCd,acctNm,clntNo,crn,clntNm,gubun',valuesAxis:'row','ev:onRefresh':'',showGrandTotal:'false',showZero:'true',dataList:'data:ds_crossTab',style:'height:475px;max-width: 1380px;margin-top:-5px; padding: 0;',id:'gr_acctrecvperiodExcept',cols:'yyyymm',class:'',useNumberFormat:'true',noColumnMove:'false',hiddenHeaderList:'row,col,val,hidden',bodyTextAlign:'right',textAlign:'center',headerTextAlign:'center',headerListOrder:'row,col',headerYMerge:'true',sortFunction:'scwin.customPivotSort','ev:onrefresh':'scwin.gr_acctrecvperiodExcept_onrefresh',autoFit:'allColumn'},E:[{T:1,N:'w2:fieldInfo',E:[{T:1,N:'w2:field',A:{name:'부서',id:'acctDeptCd'}},{T:1,N:'w2:field',A:{name:'부서명',id:'acctDeptNm'}},{T:1,N:'w2:field',A:{name:'계정',id:'acctCd',sortOrder:'asc'}},{T:1,N:'w2:field',A:{name:'계정명',id:'acctNm'}},{T:1,N:'w2:field',A:{name:'사업자번호',id:'crn'}},{T:1,N:'w2:field',A:{name:'거래처',id:'clntNo',sortOrder:'asc'}},{T:1,N:'w2:field',A:{name:'거래처명',id:'clntNm'}},{T:1,N:'w2:field',A:{name:'구분',id:'gubun',sortOrder:'asc'}},{T:1,N:'w2:field',A:{name:'년월',id:'yyyymm'}},{T:1,N:'w2:field',A:{name:'합계',id:'amt'}}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'div_btn1',style:''},E:[{T:1,N:'xf:group',A:{id:'pu_detail',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_detail',label:'월령상세',type:'button',class:'btn link','ev:onclick':'scwin.f_detail'},E:[{T:1,N:'xf:label',E:[{T:3,text:'월령상세'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Report',label:'>월(일)령현황',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'월(일)령현황'}]}]}]}]}]}]}]}]}]})