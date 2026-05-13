/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_01_01b.xml 72561 2fc359bfad1eae05282abaa0c4ccc545b137607d68fe8b46254dd4964a63682f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'날짜구분(청구일자,진료일자)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payCrcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'계약서초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'차대귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'차대귀속코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'차대거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECKNUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'지급등록기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'국제데이터여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_empNo_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContents_searchCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEmpNo',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_empNo_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchEmpNo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){let memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님    
scwin.empNo = $c.data.getMemInfo($p, "empNo"); // 사용자 아이디

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)

//-------------------------------------------------------------------------
// hidden
//------------------------------------------------------------------------
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM017",
    compID: "lc_payStsCd,gr_paymgnt:payStsCd"
  }, {
    grpCd: "FM018",
    compID: "lc_payMthdCd,gr_paymgnt:payMthdCd"
  },
  //GauceUtil.getCodeList("FM018",1,"00") , GauceUtil.getCodeList("FM018",1,"10") 
  {
    grpCd: "ZZ006",
    compID: "lc_payCrcCd"
  } //GauceUtil.getCodeList("ZZ006",GauceUtil.CODE) GauceUtil.CODE-> 1 
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  lc_payMthdCd.setSelectedIndex(0);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  acb_dt_cls.setSelectedIndex(0);
  lc_payCrcCd.setSelectedIndex(0);
  scwin.f_setCompanyInfo();
  //f_empNo(); 
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  let dltStr = "dlt_commonCodeFM018"; // FM018 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFM018_1", true); // dlt_commonCodeFM018_1 으로 dataList 을 복사
  //$c.gus.copy(dltStr, "dlt_commonCodeFM018_2", true); // dlt_commonCodeFM018_2 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM018_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd1 == '00' || fltrCd1 == '10'"); // 새로운 데이터리스트에 필터("range" : "1,00")

  var options = {};
  options.sortIndex = "sortSeq";
  options.sortOrder = "1";
  dlt_commonCodeFM018_1.multisort(options);
  lc_payMthdCd.setNodeSet("data:dlt_commonCodeFM018_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑

  /*let dlt2 = $c.gus.object("dlt_commonCodeFM018_1"); // 객체화
  let addDlt1 = $c.data.dataListFilter(dlt2, "fltrCd1 == '00'");  // 새로운 데이터리스트에 필터("range" : "1,00")
  //lc_payMthdCd.setNodeSet("data:dlt_commonCodeFM018_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
  
  
  let dlt3 = $c.gus.object("dlt_commonCodeFM018_2"); // 객체화
  let addDlt = $c.data.dataListFilter(dlt3, "fltrCd1 == '10'");  // 새로운 데이터리스트에 필터("range" : "1,10")
   let allDlt = addDlt.setJSON(addDlt1.getAllJSON(), true);
   lc_payMthdCd.setNodeSet("data:allDlt", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
  */
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
      if (ed_coCd.hidVal != rtnList[0]) scwin.f_initObj();
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
    scwin.f_empNo();
  } catch (e) {
    console.log(e);
  }
};
//-------------------------------------------------------------------------
// 공통코드 조회
//-------------------------------------------------------------------------
scwin.f_empNo = function () {
  let grp_cd = "FI624";
  let pCode = scwin.empNo;

  // SELECT 절 
  let param1 = "CD  as COL1 , CD_NM  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

  // 대상테이블 	
  let param2 = " TB_ZZ002 ";

  // 조건절
  let param3 = " AND GRP_CD = '" + grp_cd + "' AND USE_YN = '1' AND CD_NM = '" + pCode + "' ";
  let param4 = "CD";
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,
    queryId: "dinymicQueryTest" // 쿼리ID
    ,
    param1: param1 // SELECT
    ,
    param2: param2 // 대상테이블
    ,
    param3: param3 // 조건절
    ,
    param4: param4 // CD
  };
  //데이터셋에 정보설정
  ds_empNo_condition.setJSON(strParam);
  $c.sbm.execute($p, sbm_searchEmpNo);
};
//-------------------------------------------------------------------------
// 공통코드 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchEmpNo_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_empNo.setJSON(e.responseJSON.GAUCE);
    if (ds_empNo.getRowCount() > 0) {
      gr_paymgnt.setColumnVisible("evidenceCnt", "false");
      gr_paymgnt.setColumnVisible("regNm", "false");
      gr_paymgnt.setColumnVisible("regNm2", "false");
      gr_paymgnt.setColumnVisible("slipKndNm", "false");
      ed_reqStartDt.setValue("20150101");
      ed_reqEndDt.setValue("20150101");
    } else {
      gr_paymgnt.setColumnVisible("evidenceCnt", "true");
      gr_paymgnt.setColumnVisible("regNm", "true");
      gr_paymgnt.setColumnVisible("regNm2", "true");
      gr_paymgnt.setColumnVisible("slipKndNm", "true");
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------     
scwin.f_Retrieve = async function (e) {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_reqStartDt.getValue().trim(), ed_reqEndDt.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_reqStartDt.focus();
      return false;
      ;
    }
    let date1 = ed_reqStartDt.getValue().trim();
    let date2 = ed_reqEndDt.getValue().trim();
    if (ds_empNo.getRowCount() > 0) {
      if (date1.substring(0, 4) <= "2013" || date2.substring(0, 4) >= "2019") {
        $c.win.alert($p, "2014~2018년 이외의 조회 권한이 없습니다.");
        return false;
        ;
      }
    }
    let ret = await $c.gus.cfValidate($p, [ed_outbrSlipNo, ed_payNo]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_coCd, ed_reqStartDt]);
    if (!ret2) {
      return false;
    }
    let ret3 = await $c.gus.cfValidate($p, [ed_reqEndDt]);
    if (!ret3) {
      return false;
    }
    if (ret2 && ret3) {
      const params = {
        payStsCd: lc_payStsCd.getValue(),
        payMthdCd: lc_payMthdCd.getValue(),
        qryStDt: ed_reqStartDt.getValue(),
        qryEndDt: ed_reqEndDt.getValue(),
        reqDept: ed_reqAcctDeptCd.getValue(),
        coClsCd: scwin.txtCoClsCd,
        payNo: ed_payNo.getValue(),
        clntNo: ed_clntNo.getValue(),
        outbrSlipNo: ed_outbrSlipNo.getValue(),
        apprvReqNo: ed_apprvReqNo.getValue(),
        coCd: ed_coCd.getValue(),
        crn: ed_crn.getValue(),
        dtClsCd: acb_dt_cls.getValue(),
        payCrcCd: lc_payCrcCd.getValue(),
        slipKndCd: ed_slipKndCd.getValue(),
        lowerDeptIncluYn: cbx_lowerDeptIncluYn.getValue(),
        // 하위부서여부 

        corRegNo: ed_corRegNo.getValue()
      };

      //데이터셋에 정보설정
      ds_condition.setJSON(params);
      ds_paymgnt.removeAll();
      $c.sbm.execute($p, sbm_retrieve);
    } else {
      return false;
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.GAUCE) {
    ds_paymgnt.setJSON(e.responseJSON.GAUCE);
    ds_paymgnt.sort("payNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)

    cbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_paymgnt.getRowCount()));
    if (ds_paymgnt.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_paymgnt.getRowCount() <= 0) {
    $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "지급조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "지급조회",
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};
scwin.f_initObj = function (e) {
  $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, ed_txt_reqAcctDeptNm]); //  귀속부서
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_txt_clntNm]); //거래처 
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  	
scwin.f_evidPopUp = function (e) {
  try {
    let data = {
      pgmId: "fm_301_01_01b",
      //TOBE returnValue Y f_Retrieve(); 를 화면에서 처리하기 위한 정보
      slipNo: ds_paymgnt.getCellData(ds_paymgnt.getRowPosition(), "outbrSlipNo"),
      slipKndCd: ds_paymgnt.getCellData(ds_paymgnt.getRowPosition(), "apprvReqNo")
    };
    let win_url = "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml";
    let opts = {
      id: "smpPop",
      popupName: "증빙등록조회",
      modal: true,
      type: "browserPopup",
      width: 1450,
      height: 1000,
      title: true
    };
    $c.win.openPopup($p, win_url, opts, data);
  } catch (e) {
    console.log("scwin.f_evidPopUp(); : " + e);
  }
};

//-------------------------------------------------------------------------
// 지급조회 셀클릭시.
//-------------------------------------------------------------------------  	
scwin.gr_paymgnt_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "outbrSlipNo" && rowIndex > -1) {
    if (!(ds_paymgnt.getCellData(rowIndex, "outbrSlipNo") == null || ds_paymgnt.getCellData(rowIndex, "outbrSlipNo") == "")) {
      await $c.gus.cfShowSlipInfo($p, ds_paymgnt.getCellData(rowIndex, "outbrSlipNo"));
    }
  }
  if (columnId == "evidenceCnt" && rowIndex > -1) {
    scwin.f_evidPopUp();
  }
  if (columnId == "paySlipNo" && rowIndex > -1) {
    await $c.gus.cfShowSlipInfo($p, ds_paymgnt.getCellData(rowIndex, "paySlipNo"));
  }
};

//-------------------------------------------------------------------------
// 전표종류
//-------------------------------------------------------------------------  	
scwin.udc_slipKnd_onblurCodeEvent = function (e) {
  ed_slipKndCd.setValue(ed_slipKndCd.getValue().trim().toUpperCase());
  scwin.f_CheckPopUp(ed_slipKndCd, ed_slipKndNm, '4');
};

//-------------------------------------------------------------------------
// 전표종류명
//-------------------------------------------------------------------------  	
scwin.udc_slipKnd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('4', ed_slipKndCd, ed_slipKndNm, 'F');
};

//-------------------------------------------------------------------------
// 전표종류찾기
//-------------------------------------------------------------------------  	
scwin.udc_slipKnd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_slipKndCd, ed_slipKndNm, 'F');
};

//-------------------------------------------------------------------------
// 귀속부서
//-------------------------------------------------------------------------  
scwin.udc_reqAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_txt_reqAcctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------  
scwin.udc_reqAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('1', ed_reqAcctDeptCd, ed_txt_reqAcctDeptNm, 'T');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------  
scwin.udc_reqAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, ed_txt_reqAcctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 사업자번호
//------------------------------------------------------------------------- 
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_txt_crn, '3');
};

//-------------------------------------------------------------------------
// 사업자명
//------------------------------------------------------------------------- 
scwin.udc_crn_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('3', ed_crn, ed_txt_crn, 'T');
};

//-------------------------------------------------------------------------
// 사업자번호찾기
//------------------------------------------------------------------------- 
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_txt_crn, 'F');
};

//-------------------------------------------------------------------------
// 거래처
//------------------------------------------------------------------------- 
scwin.udc_cint_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_txt_clntNm, '2');
};

//-------------------------------------------------------------------------
// 거래처명
//------------------------------------------------------------------------- 
scwin.udc_cint_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('2', ed_clntNo, ed_txt_clntNm, 'T');
};

//-------------------------------------------------------------------------
// 거래처찾기
//------------------------------------------------------------------------- 
scwin.udc_cint_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_txt_clntNm, 'F');
};

//-------------------------------------------------------------------------
// 법인번호
//------------------------------------------------------------------------- 
scwin.ed_corRegNo_onblur = function (e) {
  scwin.f_CheckPopUp(ed_corRegNo, '', '5');
};

//-------------------------------------------------------------------------
// 법인번호찾기
//------------------------------------------------------------------------- 
scwin.btn_ed_corRegNo_onclick = function (e) {
  scwin.f_openPopUp('5', ed_corRegNo, '', 'T');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      //법인번호는 이름이 없음
      if (select_code != "5") orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    //법인번호는 이름이 없음
    if (select_code != "5") name = txtName.getValue();
    if (select_code == '1' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.20)
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 관리부서 PopUp 호출	
      case '1':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null); // 거래처
        udc_reqAcctDept.setSelectId("retrieveAcctDeptCdInfo6");
        udc_reqAcctDept.cfCommonPopUp(scwin.udc_reqAcctDept_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      // 거래처 PopUp 호출	
      case '2':
        param = ",,," + ed_coCd.getValue();
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_cint.setSelectId("retrieveClntList");
        udc_cint.cfCommonPopUp(scwin.udc_cint_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_crn.setSelectId("retrieveCrnInfo");
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 전표종류	
      case '4':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,"0",null,null,null,null); 
        udc_slipKnd.setSelectId("retrieveSlipKndCd");
        udc_slipKnd.cfCommonPopUp(scwin.udc_slipKnd_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , '0' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 전표종류	
      case '5':
        //UDC가 아니어서 하단의 공통그리드  UDC폼을 이용함.
        //rtnList = cfCommonPopUp(sCmdName,code,'',sFlag,null,null,null,null,"0",null,null,null,null); 
        udc_comCodeGrid.setSelectId('retrieveCorRegNo');
        udc_comCodeGrid.cfCommonPopUp(scwin.ed_corRegNo_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 코드명검색
//-------------------------------------------------------------------------
scwin.f_openPopUpNm = async function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = '';
    name = txtName.getValue();
    if (select_code == '1' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.20)
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 관리부서 PopUp 호출	
      case '1':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null); // 거래처
        udc_reqAcctDept.setSelectId("retrieveAcctDeptCdInfo6");
        udc_reqAcctDept.cfCommonPopUp(scwin.udc_reqAcctDept_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      // 거래처 PopUp 호출	
      case '2':
        param = ",,," + ed_coCd.getValue();
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_cint.setSelectId("retrieveClntList");
        udc_cint.cfCommonPopUp(scwin.udc_cint_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_crn.setSelectId("retrieveCrnInfo");
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 전표종류	
      case '4':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,"0",null,null,null,null); 
        udc_slipKnd.setSelectId("retrieveSlipKndCd");
        udc_slipKnd.cfCommonPopUp(scwin.udc_slipKnd_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , '0' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUpNm : " + e);
  }
};

//-------------------------------------------------------------------------
// 귀속부서 PopUp 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_reqAcctDept_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_reqAcctDeptCd.setValue("");
        ed_txt_reqAcctDeptNm.setValue("");
        ed_reqAcctDeptCd.hidVal = "";
        return;
      }
      ed_reqAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_txt_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
      ed_reqAcctDeptCd.hidVal = rtnList[0]; // 코드값
    } else {
      ed_reqAcctDeptCd.setValue("");
      ed_txt_reqAcctDeptNm.setValue("");
      ed_reqAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_reqAcctDept_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 PopUp 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_cint_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_clntNo.setValue("");
        ed_txt_clntNm.setValue("");
        ed_clntNo.hidVal = "";
        return;
      }
      ed_clntNo.setValue(rtnList[0]); // 코드값
      ed_txt_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // 코드값
    } else {
      ed_clntNo.setValue("");
      ed_txt_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_cint_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자번호 PopUp 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_crn.setValue("");
        ed_txt_crn.setValue("");
        ed_crn.hidVal = "";
        return;
      }
      ed_crn.setValue(rtnList[0]); // 코드값
      ed_txt_crn.setValue(rtnList[1]); // 코드명
      ed_crn.hidVal = rtnList[0]; // 코드값
    } else {
      ed_crn.setValue("");
      ed_txt_crn.setValue("");
      ed_crn.hidVal = "";
    }
  } catch (e) {
    console.log("udc_crn_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 전표종류 PopUp 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_slipKnd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_slipKndCd.setValue("");
        ed_slipKndNm.setValue("");
        ed_slipKndCd.hidVal = "";
        return;
      }
      ed_slipKndCd.setValue(rtnList[0]); // 코드값
      ed_slipKndNm.setValue(rtnList[1]); // 코드명
      ed_slipKndCd.hidVal = rtnList[0]; // 코드값
    } else {
      ed_slipKndCd.setValue("");
      ed_slipKndNm.setValue("");
      ed_slipKndCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_slipKnd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 전표종류 PopUp 콜백(4)
//-------------------------------------------------------------------------
scwin.ed_corRegNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_corRegNo.setValue("");
        ed_corRegNo.hidVal = "";
        return;
      }
      ed_corRegNo.setValue(rtnList[0]); // 코드값
      ed_corRegNo.hidVal = rtnList[0]; // 코드값
    } else {
      ed_corRegNo.setValue("");
      ed_corRegNo.hidVal = "";
    }
  } catch (e) {
    console.log("ed_corRegNo_callBackFunc  " + e);
  }
};

//-------------------------------------------------------------------------
// 승인일자 선택시
//------------------------------------------------------------------------- 
scwin.acb_dt_cls_onchange = function (info) {
  scwin.f_ApproveDate();
};

//-------------------------------------------------------------------------
// 승인일자 선택시
//------------------------------------------------------------------------- 
scwin.f_ApproveDate = function (info) {
  try {
    if (acb_dt_cls.getValue() == "5") {
      //ed_slipKndCd.text = "A17";
      //f_CheckPopUp(ed_slipKndCd,txt_slipKndNm,'4');
      //cfDisableObjects([ed_slipKndCd, txt_slipKndNm, img_acctDeptCd]);
      //cfDisableObjects(btn_popup);
      //btn_popup.style.display = "none";
    } else {
      ed_slipKndCd.setValue("");
      scwin.f_CheckPopUp(ed_slipKndCd, ed_txt_slipKndNm, '4');
      $c.gus.cfEnableObjects($p, [ed_slipKndCd, ed_txt_slipKndNm, btn_slipKnd]);
    }
  } catch (e) {
    console.log("scwin.f_ApproveDate(); : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',chooseOption:'true',chooseOptionLabel:'전체',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payStsCd',style:'width: 150px;',submenuSize:'auto',ref:'',objType:'data',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',displayMode:'label',editType:'select',id:'acb_dt_cls',objType:'data',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto',visibleRowNum:'6','ev:onchange':'scwin.acb_dt_cls_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'요청일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계처리일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'만기일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'카드승인일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지급등록기준일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt',id:'udc_fromToCalendar1',refDataMap:'',refEdDt:'',refStDt:'',style:'',mandatoryTo:'true',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_apprvReqNo',maxlength:'15',style:'width: 150px;'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveSlipKndCd',style:'',btnId:'btn_slipKnd',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',validTitle:'전표종류',objTypeCode:'data',objTypeName:'data',id:'udc_slipKnd','ev:onblurCodeEvent':'scwin.udc_slipKnd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_slipKnd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_slipKnd_onclickEvent',maxlengthCode:'3',allowCharCodeLength:'1',afterAllowCharCode:'0-9',beforeAllowCharCode:'A-Za-z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',id:'ed_outbrSlipNo',maxlength:'10',objType:'data',style:'width: 150px;',UpperFlag:'1',format:'0000000000',title:'전표번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_reqAcctDept',codeId:'ed_reqAcctDeptCd',maxlengthCode:'5',nameId:'ed_txt_reqAcctDeptNm',objTypeName:'data',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',id:'udc_reqAcctDept',validTitle:'귀속부서',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_reqAcctDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_reqAcctDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_reqAcctDept_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지불방법',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payMthdCd',objType:'data',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',visibleRowNum:'15'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_crn',codeId:'ed_crn',maxlengthCode:'13',nameId:'ed_txt_crn',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveCrnInfo',style:'',id:'udc_crn',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_crn_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payCrcCd',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',visibleRowNum:'25'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_cint',codeId:'ed_clntNo',nameId:'ed_txt_clntNm',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'',id:'udc_cint','ev:onblurCodeEvent':'scwin.udc_cint_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_cint_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_cint_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',falseValue:'0',id:'cbx_lowerDeptIncluYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_payNo',style:'',maxlength:'10',allowChar:'0-9',UpperFlag:'1',objType:'data',format:'0000000000',title:'지급번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 150px;'},E:[{T:1,N:'xf:input',A:{class:'width: 100px;',id:'ed_corRegNo',placeholder:'',style:'',maxlength:'13',allowChar:'0-9',UpperFlag:'1','ev:onblur':'scwin.ed_corRegNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_ed_corRegNo',style:'',type:'button',objType:'data','ev:onclick':'scwin.btn_ed_corRegNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지급조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_paymgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymgnt',id:'gr_paymgnt',style:'',visibleRowNumFix:'true',resize:'true',columnMove:'true',sortable:'true',readOnly:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',visibleRowNum:'13'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'요청</br>번호 ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'지불방법',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'회계</br>처리일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'카드</br>승인일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column21',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'거래처</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'사업자</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'지급등록</br>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'지급계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'어음</br>수표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'환종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'상계대기</br>예정일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'증빙개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'정리</br>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'정리전표</br>회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'정리전표</br>작성자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',width:'100',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'100',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'approveDate',inputType:'text',width:'100',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',width:'100',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'outbrSlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'outbrSummary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crn',displayMode:'label',textAlign:'center',displayFormat:'###-##-#####',maskFormat:'default'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'outbrAcctNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'interPayDt',displayMode:'label',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'payBankAcntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'draftCheckNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payCrcCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payExchRt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payAmtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipKndNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtDocOvrDd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'evidenceCnt',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'paySlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt2',displayMode:'label',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm2',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column91',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'payAmt',displayMode:'label',expression:'sum(\'payAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'payAmtFcrc',displayMode:'label',expression:'sum(\'payAmtFcrc\')',displayFormat:'#,##0.00',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'cbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})