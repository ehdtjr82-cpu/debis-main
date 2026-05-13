/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_02_01b.xml 109221 ad1c224bfc8480fc63af6543c4782bf98e3deb45818d7b359ad7470e54736699 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBankAccount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txnDtFrom',name:'거래일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDtTo',name:'거래일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookCls',name:'통장구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnCls',name:'거래구분(사업영역)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procCls',name:'처리구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankAcctList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxday',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxdaySeq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jeokyo',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inoutGubun',name:'입출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txAmt',name:'거래금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'txAmtFcrc',name:'거래금액(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'currCd',name:'통화코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'txCurBal',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'branch',name:'취급점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandReg',name:'수기등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandRegday',name:'수기등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'취소여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'number'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'number'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxday',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inoutGubun',name:'입출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeokyo',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxdaySeq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'txAmt',name:'거래금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'txAmtFcrc',name:'거래금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'txCurBal',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'currCd',name:'통화코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'branch',name:'취급점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandReg',name:'수기등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandRegday',name:'수기등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'취소여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelOrgin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'text1',name:'text1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text2',name:'text2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text3',name:'text3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text4',name:'text4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text5',name:'text5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text6',name:'text6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text7',name:'text7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text8',name:'text8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text9',name:'text9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text10',name:'text10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bankCombo_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankCombo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addBankAccount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bankbookCombo_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankbookCombo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchBankAccount',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBankAccount","key":"IN_DS1"},{"id":"ds_bankAcctList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bankAcctList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBankAccount_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bankCombo',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_bankCombo_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankCombo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bankbookCombo',action:'',method:'post',mediatype:'application/json',ref:'data:json,ds_bankbookCombo_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankbookCombo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecide',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_searchBankAccount","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecide_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deletecancelSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deletecancelSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveExcel',action:'/ac.fm.collmoneymgnt.rcptmgnt.CreateBankAccountTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_excelData","key":"IN_DS1"},{"action":"modified","id":"ds_addBankAccount","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveExcel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveExcelForeign',action:'/ac.fm.collmoneymgnt.rcptmgnt.ForeignCreateBankAccountTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_excelData","key":"IN_DS1"},{"action":"modified","id":"ds_addBankAccount","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveExcelForeign_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 거래일자의 초기날짜를 구한다.
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
scwin.systemPathVal = "common/csv/uploadTemp";
scwin.path = "/WEB-INF/struts_config/pt/co.xml";

//scwin.userid = $c.data.getMemInfo("uerId");
scwin.userid = scwin.memJson.userId;
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
scwin.pos_groupCode = 0;
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
    grpCd: "FM064",
    compID: "lc_bankbookCls"
  }, {
    grpCd: "FM023",
    compID: "lc_txnCls"
  }, {
    grpCd: "FM065",
    compID: "lc_procCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  lc_bankbookCls.setSelectedIndex(0);

  //그리드 컬럼 show 정의
  gr_Tmp_UpExcel.setColumnVisible("currCd", false); //안보이기
  gr_Tmp_UpExcel.setColumnVisible("txAmt", true); //보이기
  gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false); //안보이기

  const params = {
    grpCd: "FM011",
    fltrCd1: 1
  };
  //은행콤보 셋팅  
  ds_bankCombo_condition.setJSON(params);
  $c.sbm.execute($p, sbm_bankCombo);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 은행콤보 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_bankCombo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_bankCombo.setJSON(e.responseJSON.GAUCE);
    //TOBE 데이터셋 연동이 안되어 직접처리로 변경함.
    lc_bankCombo.setNodeSet("data:ds_bankCombo", "cdNm", "cdNmAbbr");
    scwin.lc_bankCombo_onviewchange();
  }
  $c.gus.cfDisableKey($p);
  scwin.f_setCompanyInfo();
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
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
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
      scwin.ed_coCd = rtnList[0];
    } else {
      ed_coCd.setValue(""); // 코드
      ed_coNm.setValue(""); // 회사명
      ed_coCd.hidVal = "";
      scwin.txtCoClsCd = ""; // 회사구분    
    }
    if (scwin.txtCoClsCd > '0') {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    scwin.f_enableCompanyInfo();
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 enable 처리 
//-------------------------------------------------------------------------
scwin.f_enableCompanyInfo = function () {
  if (scwin.isStarted == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_txt_bankbookNo, ed_txt_bankbookNm]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }

    // 필수 조회조건 입력 여부 Check
    let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_FromDate, ed_ToDate]);
    if (!ret) {
      return false;
    }
    if (lc_bankbookCls.getValue() == "01") {
      sbm_searchBankAccount.action = "/ac.fm.collmoneymgnt.rcptmgnt.RetrieveBankAccountTransactionContentsCMD.do";
    }
    if (lc_bankbookCls.getValue() == "02") {
      sbm_searchBankAccount.action = "/ac.fm.collmoneymgnt.rcptmgnt.RetrieveForeignCurrencyBankAccountTransactionContentsCMD.do";
    }
    const params = {
      coClsCd: scwin.txtCoClsCd,
      queryDeptSearchStDate: ed_FromDate.getValue(),
      queryDeptSearchEndDate: ed_ToDate.getValue()
    };

    //데이터셋에 정보설정
    ds_searchBankAccount.setJSON(params);
    ds_bankAcctList.removeAll();
    $c.sbm.execute($p, sbm_searchBankAccount);
  } catch (e) {
    console.log("f_Retrieve: " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBankAccount_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_bankAcctList.getRowCount()));
  if (ds_bankAcctList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// 통장번호
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_txt_bankbookNo, ed_txt_bankbookNm, '1');
};

//-------------------------------------------------------------------------
// 통장명찾기
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_txt_bankbookNo, ed_txt_bankbookNm, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      if (orgObjCd.getValue().trim() == "") {
        orgObjNm.setValue("");
        orgObjCd.setValue("");
        orgObjCd.hidVal = "";
      }
      return false;
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금귀속부서, 2:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  try {
    if (select_code == '1') {
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 통장명 PopUp 호출
      case '1':
        ed_txt_bankbookNm.setValue("");
        code = ed_txt_bankbookNo.getValue();
        let param = ",,,,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',code,'',"T",null,null,null,null,param,null,null,null,null); // 통장명

        udc_Bankbook.setSelectId('retrieveBankBookCdInfo');
        udc_Bankbook.cfCommonPopUp(scwin.udc_Bankbook_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , '' // 화면에서의 ??? Name Element의 Value
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
// 통장번호 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_Bankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_txt_bankbookNo.setValue(rtnList[0]); // 통장번호
      ed_txt_bankbookNm.setValue(rtnList[2]); // 통장명
      ed_txt_bankbookNo.hidVal = rtnList[0];
    } else {
      ed_txt_bankbookNo.setValue("");
      ed_txt_bankbookNm.setValue("");
      ed_txt_bankbookNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_Bankbook_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    let checkCount = 0;
    for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "inoutGubun") == "1") {
        $c.gus.cfAlertMsg($p, "출금은 가수금으로 등록 할 수 없습니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "1") {
        $c.gus.cfAlertMsg($p, "삭제된 가수금은 가수금으로 등록 할 수 없습니다.삭제 취소후 등록하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() != "") {
          $c.gus.cfAlertMsg($p, "가수등록된 가수금은 가수등록 하실 수 없습니다.가수취소후 등록하시기 바랍니다.");
          return false;
        }
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      if (lc_bankbookCls.getValue() == "01") {
        sbm_saveSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistSuspenseReceivableSlipProcessCMD.do";
      }
      if (lc_bankbookCls.getValue() == "02") {
        sbm_saveSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistForeignCurrencySuspenseReceivableSlipProcessCMD.do";
      }
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_saveSusRecv);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 가수처리내역 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_batch = async function () {
  try {
    if (scwin.userid == "hades119") {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        sbm_savePayDecide.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoSuspenseReceivableSlipProcessCMD.do";
        $c.sbm.execute($p, sbm_savePayDecide);
      }
    } else {
      $c.win.alert($p, "권한이 없습니다.");
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Forbatch = async function () {
  try {
    if (scwin.userid == "hades119") {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        sbm_savePayDecide.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoForeignCurrencySuspenseReceivableSlipProcessCMD.do";
        $c.sbm.execute($p, sbm_savePayDecide);
      }
    } else {
      $c.win.alert($p, "권한이 없습니다.");
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// f_batch. f_Forbatch  콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecide_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  취소 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  try {
    let checkCount = 0;
    for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "inoutGubun") == "1") {
        $c.gus.cfAlertMsg($p, "출금은 가수취소 대상이 아닙니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "1") {
        $c.gus.cfAlertMsg($p, "삭제된 가수금은 가수취소 대상이 아닙니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() == "") {
          $c.gus.cfAlertMsg($p, "가수취소는 가수등록이 된 입금내역만 가능합니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
          return false;
        }
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      if (lc_bankbookCls.getValue() == "01") {
        sbm_cancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelSuspenseReceivableSlipProcessCMD.do";
      }
      if (lc_bankbookCls.getValue() == "02") {
        sbm_cancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelForeignCurrencySuspenseReceivableSlipProcessCMD.do";
      }
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_cancelSusRecv);
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소 버튼 클릭 콜백
//-------------------------------------------------------------------------
scwin.sbm_cancelSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  삭제  버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  try {
    let checkCount = 0;
    for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "inoutGubun") == "1") {
        $c.gus.cfAlertMsg($p, "출금은 삭제 처리 할 수  없습니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() != "") {
          $c.gus.cfAlertMsg($p, "가수등록된 가수금은 삭제 하실 수 없습니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
          return false;
        }
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "1") {
        $c.gus.cfAlertMsg($p, "삭제 대상이 아닙니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      if (lc_bankbookCls.getValue() == "01") {
        sbm_deleteSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.DeleteBankAccountTransactionContentsCMD.do";
      }
      if (lc_bankbookCls.getValue() == "02") {
        sbm_deleteSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.DeleteForeignCurrencyBankAccountTransactionContentsCMD.do";
      }
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_deleteSusRecv);
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제 버튼 클릭 콜백
//-------------------------------------------------------------------------
scwin.sbm_deleteSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  삭제취소  버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel_Delete = async function () {
  try {
    let checkCount = 0;
    for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "0") {
        $c.gus.cfAlertMsg($p, "삭제취소 대상이 아닙니다.<br/>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      if (lc_bankbookCls.getValue() == "01") {
        sbm_deletecancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelBankAccountTransactionContentsDeleteCMD.do";
      }
      if (lc_bankbookCls.getValue() == "02") {
        sbm_deletecancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelForeignCurrencyBankAccountTransactionContentsDeleteCMD.do";
      }
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_deletecancelSusRecv);
    }
  } catch (e) {
    console.log("f_Cancel_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제취소 버튼 클릭 콜백
//-------------------------------------------------------------------------
scwin.sbm_deletecancelSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "자동가수처리조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: "자동가수처리" //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_bankAcctList, options, infoArr);
  }
};
scwin.f_checkDigit = function (str) {
  if (/^[0-9].*$/.test(str)) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 은행별 엑셀파일 데이터 컬럼 위치 정보가져오기  
//-------------------------------------------------------------------------
scwin.f_getBankColInfo = function (bankCd) {
  try {
    let excelCol;
    if (bankCd == "10000004") {
      //국민은행 
      if (vLoginCoCd == "004") {
        //광양 국민은행
        excelCol = new Array(1 //계좌번호 행        -0  
        , 8 //데이터 시작행      -1   //실제 데이터는 +1된 위치임..
        , 1 //계좌번호 col      -2
        , 2 //거래일 col        -3
        , 5 //출금금액 col      -4
        , 6 //입금금액 col      -5
        , 7 //잔액 col         -6
        , 4 //적요 col         -7 (입금자명)
        );
      } else {
        excelCol = new Array(2 //계좌번호 행        -0  
        , 7 //데이터 시작행      -1   //실제 데이터는 +1된 위치임..
        , 1 //계좌번호 col      -2
        , 2 //거래일 col        -3
        , 5 //출금금액 col      -4
        , 6 //입금금액 col      -5
        , 7 //잔액 col         -6
        , 4 //적요 col         -7 (입금자명)
        );
      }
    } else if (bankCd == "10000020") {
      //우리은행 
      excelCol = new Array(2 //계좌번호 행        -0 
      , 5 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 2 //거래일 col        -3
      , 5 //출금금액 col      -4
      , 6 //입금금액 col      -5
      , 7 //잔액 col          -6
      , 4 //적요 col          -7 
      );
    } else if (bankCd == "10000081") {
      //하나은행 
      excelCol = new Array(4 //계좌번호 행        -0 
      , 8 //데이터 시작행      -1
      , 2 //계좌번호 col      -2
      , 1 //거래일 col        -3
      , 5 //출금금액 col      -4
      , 4 //입금금액 col      -5
      , 6 //잔액 col          -6
      , 2 //적요 col          -7 
      );
    } else if (bankCd == "10000088") {
      //신한은행 
      excelCol = new Array(2 //계좌번호 행        -0 
      , 3 //데이터 시작행      -1
      , 2 //계좌번호 col     -2
      , 1 //거래일 col       -3
      , 4 //출금금액 col      -4
      , 3 //입금금액 col      -5
      , 6 //잔액 col          -6
      , 5 //적요 col          -7 
      );
    } else if (bankCd == "10000005") {
      //외환은행
      excelCol = new Array(3 //계좌번호 행        -0 
      , 7 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 2 //거래일 col        -3
      , 7 //출금금액 col      -4
      , 6 //입금금액 col      -5
      , 8 //잔액 col          -6
      , 3 //적요 col          -7 
      );
    } else if (bankCd == "10000003") {
      //기업은행
      excelCol = new Array(3 //계좌번호 행        -0 
      , 7 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 2 //거래일 col        -3
      , 3 //출금금액 col      -4
      , 4 //입금금액 col      -5
      , 5 //잔액 col          -6
      , 6 //적요 col          -7 
      );
    } else if (bankCd == "10000002") {
      //산업은행 
      excelCol = new Array(9 //계좌번호 행        -0 
      , 15 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 1 //거래일 col        -3
      , 3 //출금금액 col      -4
      , 4 //입금금액 col      -5
      , 5 //잔액 col          -6
      , 2 //적요 col          -7 
      );
    } else if (bankCd == "10000012") {
      //농협 
      excelCol = new Array(6 //계좌번호 행        -0 
      , 11 //데이터 시작행      -1
      , 3 //계좌번호col  -2
      , 2 //거래일col    -3
      , 3 //출금금액      -4
      , 4 //입금금액      -5
      , 5 //잔액          -6
      , 7 //적요          -7 
      );
    } else if (bankCd == "100000EY") {
      //NH투자증권
      excelCol = new Array(2 //데이터 시작행 -0
      , 1 //거래일col    -1
      , 3 //입출금구분     -2
      , 4 //입출금금액     -3
      , 5 //잔액         	-4
      , 6 //적요          	-5 
      );
    } else {}
    return excelCol;
  } catch (e) {
    console.log("f_getBankColInfo : " + e);
  }
};

//-------------------------------------------------------------------------
// 은행별 엑셀파일 데이터 컬럼 위치 정보가져오기  - 외화 업로드(2017.03.28)
//-------------------------------------------------------------------------
scwin.f_getBankColInfoForeign = function (bankCd) {
  try {
    let excelCol;
    if (bankCd == "10000004") {
      //국민은행 
      excelCol = new Array(2 //계좌번호 행         
      , 6 //데이터 시작행         
      , 1 //계좌번호 col      
      , 1 //거래일 col        
      , 2 //입출구분                         
      , 4 //입출금액 col     
      , 5 //잔액 col      
      , 6 //적요 col         
      , 3 //통화종류                     											  
      );
    } else if (bankCd == "10000003") {
      //기업은행 (2019.09.24 BIDC추가)
      excelCol = new Array(3 //계좌번호 행        -0 
      , 5 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 2 //거래일 col        -3
      , 5 //출금금액 col      -4
      , 4 //입금금액 col      -5
      , 6 //잔액 col          -6
      , 7 //적요 col          -7 
      , 3 //통화종류                -8
      );
    } else if (bankCd == "10000081") {
      //하나은행 (2019.09.30 BIDC추가)
      excelCol = new Array(4 //계좌번호 행        -0 
      , 8 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 1 //거래일 col        -3
      , 6 //출금금액 col      -4
      , 5 //입금금액 col      -5
      , 7 //잔액 col          -6
      , 3 //적요 col          -7 
      , 4 //통화종류                -8
      );
    } else if (bankCd == "100000AB") {
      //hami bank (2024.07.03 해외법인추가)
      excelCol = new Array(1 //계좌번호 행        -0 
      , 2 //데이터 시작행      -1
      , 1 //계좌번호 col      -2
      , 2 //거래일 col        -3
      , 6 //출금금액 col      -4
      , 5 //입금금액 col      -5
      , 8 //잔액 col          -6
      , 4 //적요 col          -7 
      , 0 //통화종류                -8
      );
    } else {}
    return excelCol;
  } catch (e) {
    console.log("f_getBankColInfoForeign : " + e);
  }
};

//-------------------------------------------------------------------------
// 업로드한 내역 저장
//-------------------------------------------------------------------------
scwin.f_saveExcel = async function (e) {
  try {
    if (ds_excelData.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, "업로드된 내역이 없습니다.");
      return false;
    }
    if (lc_bankbookCombo.getValue() == "") {
      $c.win.alert($p, "계좌번호를 선택해주세요.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //저장하시겠습니까
      for (let i = 0; i < ds_excelData.getRowCount(); i++) {
        ds_excelData.setCellData(i, "regId", scwin.userid);
        ds_excelData.setCellData(i, "modId", scwin.userid);
      }
      scwin.pos_groupCode = ds_excelData.getRowPosition();
      let rowList = ds_bankbookCombo.getMatchedJSON("bankAcntNo", lc_bankbookCombo.getValue());
      let lc_bankbookComboValue = "";
      if (rowList.length > 0) {
        lc_bankbookComboValue = rowList[0].crcCd;
      }
      console.log("엑셀정보저장 : lc_bankbookComboValue :" + lc_bankbookComboValue);

      //업로드 저장시 추가  Data Bind bnd_addBankAccount
      let addAccRow = ds_addBankAccount.insertRow();
      ds_addBankAccount.setCellData(addAccRow, "coCd", ed_coCd.getValue());
      ds_addBankAccount.setCellData(addAccRow, "queryDeptSearchStDate", ed_FromDate.getValue());
      ds_addBankAccount.setCellData(addAccRow, "queryDeptSearchEndDate", ed_ToDate.getValue());
      ds_addBankAccount.setCellData(addAccRow, "acctNo", lc_bankbookCombo.getValue());
      if (lc_bankbookComboValue == 'KRW') {
        // 원화업로드 일때
        $c.sbm.execute($p, sbm_saveExcel);
      } else {
        // 외화업로드 일때
        $c.sbm.execute($p, sbm_saveExcelForeign);
      }
    }
  } catch (e) {
    console.log("f_saveExcel : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀업로드 외화 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveExcel_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    ds_excelData.removeAll();
    scwin.f_Retrieve();
    return; //onFail
  }
  ds_excelData.removeAll();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀업로드내역 저장 TR(외화) 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveExcelForeign_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    ds_excelData.removeAll();
    scwin.f_Retrieve();
    return; //onFail
  }
  ds_excelData.removeAll();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 계좌 콤보박스 변경시 이벤트
//-------------------------------------------------------------------------
scwin.lc_bankCombo_onviewchange = function () {
  scwin.f_set_bankbookCombo();
};

//-------------------------------------------------------------------------
// function name : f_set_bankbookCombo
// function desc : 은행변경시 계좌콤보 셋팅하기
//-------------------------------------------------------------------------
scwin.f_set_bankbookCombo = async function () {
  try {
    // 필수입력 여부 Check
    let ret = await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]); //해당 기간에 해당되는 부서로 검색되므로 필수로 보내기..
    if (!ret) {
      return false;
    }
    const params = {
      coCd: ed_coCd.getValue(),
      bankCd: lc_bankCombo.getValue(),
      queryDeptSearchStDate: ed_FromDate.getValue(),
      queryDeptSearchEndDate: ed_FromDate.getValue()
    };
    ds_bankbookCombo.removeAll();
    ds_bankbookCombo_condition.setJSON(params);
    sbm_bankbookCombo.action = "/ac.fm.stdinfomgnt.RetrieveBankbookListBySubCMD.do";
    $c.sbm.execute($p, sbm_bankbookCombo);
  } catch (e) {
    console.log("f_set_bankbookCombo : " + e);
  }
};

//-------------------------------------------------------------------------
// 은행변경시 콜백
//-------------------------------------------------------------------------
scwin.sbm_bankbookCombo_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (e.responseJSON.GAUCE) {
      ds_bankbookCombo.setJSON(e.responseJSON.GAUCE);
    }
    if (ds_bankbookCombo.getRowCount() == "0") {
      ds_bankbookCombo.insertRow(0);
      ds_bankbookCombo.setCellData(0, "crcCd", "");
      ds_bankbookCombo.setCellData(0, "bankAcntNo", "없음");
      gr_Tmp_UpExcel.setColumnVisible("currCd", false);
      gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false);
      gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
    } else {
      let rowList = ds_bankbookCombo.getMatchedJSON("bankAcntNo", lc_bankbookCombo.getValue());
      let lc_bankbookComboValue = "";
      if (rowList.length > 0) {
        lc_bankbookComboValue = rowList[0].crcCd;
      }
      if (lc_bankbookComboValue == 'KRW') {
        gr_Tmp_UpExcel.setColumnVisible("currCd", false);
        gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false);
        gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
      } else {
        gr_Tmp_UpExcel.setColumnVisible("currCd", true);
        gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", true);
        gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
      }
    }

    //TOBE 데이터셋 연동이 안되어 직접처리로 변경함.
    lc_bankbookCombo.setNodeSet("data:ds_bankbookCombo", "bankAcntNo", "bankAcntNo");
    scwin.isOnloadYn = "Y";
    console.log("sbm_bankbookCombo_submitdone scwin.isOnloadYn : " + scwin.isOnloadYn);
    scwin.lc_bankbookCombo_onviewchange();
    scwin.isOnloadYn = "N";
  } catch (e) {
    console.log("sbm_bankbookCombo_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 헤더클릭시
//-------------------------------------------------------------------------
scwin.gr_bankAcctList_onheaderclick = function (headerId) {
  try {
    let i = 0;
    if (headerId == "num") {
      if (gr_bankAcctList.getHeaderValue("num") == true) {
        for (i = 0; i < ds_bankAcctList.getRowCount(); i++) {
          ds_bankAcctList.setCellData(i, "num", "T");
          if (ds_bankAcctList.getCellData(i, "inoutGubun") == "2") {
            if (ds_bankAcctList.getCellData(i, "num") == "T") {
              ds_bankAcctList.setCellData(i, "num", "T");
            } else {
              ds_bankAcctList.setCellData(i, "num", "F");
            }
          } else {
            ds_bankAcctList.setCellData(i, "num", "F");
          }
        }
      } else {
        for (i = 0; i < ds_bankAcctList.getRowCount(); i++) {
          ds_bankAcctList.setCellData(i, "num", "F");
        }
      }
    }
  } catch (e) {
    console.log("gr_bankAcctList_onheaderclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 셀클릭시
//-------------------------------------------------------------------------
scwin.gr_bankAcctList_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    if (columnId == "num") {
      if (ds_bankAcctList.getCellData(rowIndex, "inoutGubun") == "2") {
        if (ds_bankAcctList.getCellData(rowIndex, "num") == "T") {
          ds_bankAcctList.setCellData(rowIndex, "num", "T");
        } else {
          ds_bankAcctList.setCellData(rowIndex, "num", "F");
        }
      } else {
        ds_bankAcctList.setCellData(rowIndex, "num", "F");
      }
    }

    // 전표 POPUP
    if (columnId == "slipNo") {
      if (ds_bankAcctList.getCellData(rowIndex, "slipNo") != "") {
        $c.gus.cfShowSlipInfo($p, ds_bankAcctList.getCellData(rowIndex, "slipNo"));
      }
    }
  } catch (e) {
    console.log("gr_bankAcctList_oncellclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 계좌번호 콤보박스 선택시 통화코드  show 여부
//-------------------------------------------------------------------------
scwin.lc_bankbookCombo_onviewchange = function (info) {
  try {
    let rowList = ds_bankbookCombo.getMatchedJSON("bankAcntNo", lc_bankbookCombo.getValue());
    let lc_bankbookComboValue = "";
    if (rowList.length > 0) {
      lc_bankbookComboValue = rowList[0].crcCd;
    }
    console.log("lc_bankbookCombo_onviewchange : lc_bankbookComboValue : " + lc_bankbookComboValue);
    if (lc_bankbookComboValue == 'KRW') {
      //if( lc_bankbookCombo.getValue() == 'KRW' ) {fm_604_01_01b
      gr_Tmp_UpExcel.setColumnVisible("currCd", false);
      gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false);
      gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
    } else {
      console.log("lc_bankbookCombo.getValue() : " + lc_bankbookCombo.getValue());
      console.log("isOnloadYn: " + scwin.isOnloadYn);
      if (lc_bankbookCombo.getValue() != "없음" && scwin.isOnloadYn != "Y") {
        //TOBE 추가 ASIS txAmtFcrc,txAmt 값이 왔다 갔다가 함. 최초로딩시는 원화만 표기하기 위함
        gr_Tmp_UpExcel.setColumnVisible("currCd", true);
        gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", true);
        gr_Tmp_UpExcel.setColumnVisible("txAmt", false);
      }
    }
  } catch (e) {
    console.log("lc_bankbookCombo_onviewchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Upload
// 기존엑셍정보를 데이터셋에 담아 처리하던 부분을 -> TOBE 히든 그리드에 업로드 처리한 후 대상 그리드로 옮김
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  try {
    ds_excelOrgin.setJSON([]);
    ds_excelData.setJSON([]);
    if (excelUdc.getUpExt() == "1") {
      // csv
      let options = {
        "fileName": "gridDataUpload.csv",
        "status": "C",
        "useMaxByteLength": ",",
        "type": "1",
        "startRowIndex": 0,
        "footerExist": "0",
        "endColumnIndex": 10 //TOBE 일부포맷의 정보가 1열만 존재하여 총 열을 지정하도록 추가
      };
      await $c.data.uploadGridViewCSV($p, gr_excelUpload, options);
    } else {
      // 엑셀
      let options = {
        "fileName": "gridDataUpload.xlsx",
        "status": "C",
        "useMaxByteLength": ",",
        "type": "1",
        "startRowIndex": 0,
        "footerExist": "0",
        "endColumnIndex": 10 //TOBE 일부포맷의 정보가 1열만 존재하여 총 열을 지정하도록 추가
      };
      await $c.data.uploadGridViewExcel($p, gr_excelUpload, options);
    }
  } catch (e) {
    console.log("f_Import : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 업로드 진행 후 
//-------------------------------------------------------------------------
scwin.gr_excelUpload_onfilereadend = async function (value) {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    if (lc_bankCombo.getValue() == "") {
      $c.gus.cfAlertMsg($p, "은행을 선택해주세요.");
      return false;
    }
    if (ds_excelOrgin.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      return false;
    }
    let rowList = ds_bankbookCombo.getMatchedJSON("bankAcntNo", lc_bankbookCombo.getValue());
    let lc_bankbookComboValue = "";
    if (rowList.length > 0) {
      lc_bankbookComboValue = rowList[0].crcCd;
    }
    if (lc_bankbookComboValue == 'KRW') {
      scwin.f_reloadExcelByBank(); //은행별 엑셀파일 업로드 처리  - 원화
    } else {
      scwin.f_reloadExcelByBankForeign(); //은행별 엑셀파일 업로드 처리  - 외화(2017.03.28)
    }
  } catch (e) {
    console.log("gr_excelUpload_onfilereadend : " + e);
  }
};

//-------------------------------------------------------------------------
// 은행별 엑셀파일 업로드 처리 - 은행별로 컬럼에 맞게 해당 데이터를 저장할 ds_excelData 에 넣어준다
//-------------------------------------------------------------------------
scwin.f_reloadExcelByBank = async function (value) {
  try {
    let count = 0;
    console.log("원화 ds_excelOrgin.getRowCount() :: " + ds_excelOrgin.getRowCount());
    if (ds_excelOrgin.getRowCount() > 0) {
      let dataCnt = 0;
      let bankCd = lc_bankCombo.getValue(); //8자리 은행코드 가져오기  
      let bankNm = lc_bankCombo.getText();
      let excelCol = scwin.f_getBankColInfo(bankCd); //은행별 엑셀파일 데이터 컬럼 위치 정보가져오기  

      console.log("bankCd 원화:: " + bankCd);
      console.log("excelCol 원화:: " + excelCol);
      if (excelCol == null) {
        $c.gus.cfAlertMsg($p, "엑셀업로드 처리가능하지 않은 은행입니다.");
        return false;
      }
      if (bankCd == "100000EY") {
        //NH투자증권
        let dataStartIndex = Number(excelCol[0]) - 1; //데이터 시작행
        let colAcctTxday = "text" + excelCol[1]; //거래일col
        let colTxGubun = "text" + excelCol[2]; //입출금구분
        let colTxAmt = "text" + excelCol[3]; //입출금금액
        let colTxCurBal = "text" + excelCol[4]; //잔액
        let colJeokyo = "text" + excelCol[5]; //적요 
        let acctNo = ""; //계좌번호 : 현재 콤보선택으로 바뀌어서 불필요함.

        for (let i = 0; i < ds_excelOrgin.getRowCount(); i++) {
          count = count + i;
          if (ds_excelOrgin.getCellData(i, "text1") != "" && i >= dataStartIndex) {
            //데이터 시작행 && 첫번째 컬럼에 데이터가 있는것으로 체크함(합계행 포함하지 않기위해)
            let inoutGubun = ""; //입출구분- 1:출금,2:입금 
            let txGubun = ds_excelOrgin.getCellData(i, colTxGubun).trim(); //입출금구분
            let txAmt = ds_excelOrgin.getCellData(i, colTxAmt).trim().replace(/,/g, ""); //입출금금액 
            let txCurBal = ds_excelOrgin.getCellData(i, colTxCurBal).trim().replace(/,/g, ""); //잔액
            let acctTxday = ds_excelOrgin.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, ""); //거래일 
            let jeokyo = ds_excelOrgin.getCellData(i, colJeokyo).trim(); //적요:거래기록사항    

            if (txGubun == "출금") {
              inoutGubun = "1"; //입출구분
            } else if (txGubun == "입금") {
              inoutGubun = "2"; //입출구분
            }
            if (!scwin.f_checkDigit(txAmt)) {
              $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(txCurBal)) {
              $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(acctTxday)) {
              $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (inoutGubun != "") {
              //입출금 모두 0 인 경우는 제외함.
              row = ds_excelData.insertRow(dataCnt);
              ds_excelData.setCellData(row, "bankCd", bankCd); //은행코드
              //ds_excelData.NameValue(dataCnt , "acctNo") 		= acctNo; //계좌번호 
              ds_excelData.setCellData(dataCnt, "txAmt", txAmt); //거래금액
              ds_excelData.setCellData(dataCnt, "inoutGubun", inoutGubun); //입출구분- 1:출금,2:입금
              ds_excelData.setCellData(dataCnt, "txCurBal", txCurBal); //잔액
              ds_excelData.setCellData(dataCnt, "acctTxday", acctTxday); //거래일 
              ds_excelData.setCellData(dataCnt, "jeokyo", jeokyo); //적요:거래기록사항   
              dataCnt++;
            }
          }
        }
      } else {
        let acctNoIndex = Number(excelCol[0]) - 1; //계좌번호 행   
        let dataStartIndex = Number(excelCol[1]) - 1; //데이터 시작행
        let colAcctNo = "text" + excelCol[2]; //계좌번호col
        let colAcctTxday = "text" + excelCol[3]; //거래일col
        let colTxAmt1 = "text" + excelCol[4]; //출금금액
        let colTxAmt2 = "text" + excelCol[5]; //입금금액
        let colTxCurBal = "text" + excelCol[6]; //잔액
        let colJeokyo = "text" + excelCol[7]; //적요 
        let acctNo = ""; //계좌번호 : 현재 콤보선택으로 바뀌어서 불필요함.           
        for (let i = 0; i < ds_excelOrgin.getRowCount(); i++) {
          count = count + i;
          if (ds_excelOrgin.getCellData(i, "text1") != "" && i >= dataStartIndex) {
            //데이터 시작행 && 첫번째 컬럼에 데이터가 있는것으로 체크함(합계행 포함하지 않기위해)
            let inoutGubun = ""; //입출구분- 1:출금,2:입금 
            let txAmt = 0;
            let txAmt1 = ds_excelOrgin.getCellData(i, colTxAmt1).trim().replace(/,/g, ""); //출금금액 
            let txAmt2 = ds_excelOrgin.getCellData(i, colTxAmt2).trim().replace(/,/g, ""); //입금금액   
            let txCurBal = ds_excelOrgin.getCellData(i, colTxCurBal).trim().replace(/,/g, ""); //잔액
            let acctTxday = ds_excelOrgin.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, ""); //거래일 
            let jeokyo = ds_excelOrgin.getCellData(i, colJeokyo).trim(); //적요:거래기록사항    
            if (Number(txAmt1) != 0) {
              inoutGubun = "1"; //입출구분
              txAmt = txAmt1;
            } else if (Number(txAmt2) != 0) {
              inoutGubun = "2"; //입출구분
              txAmt = txAmt2;
            }
            if (!scwin.f_checkDigit(txAmt)) {
              $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(txCurBal)) {
              $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(acctTxday)) {
              $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 1) + "행)");
              break;
            }
            if (inoutGubun != "") {
              //입출금 모두 0 인 경우는 제외함.
              row = ds_excelData.insertRow(dataCnt);
              ds_excelData.setCellData(row, "bankCd", bankCd); //은행코드
              //ds_excelData.NameValue(dataCnt , "acctNo") 		= acctNo; //계좌번호 
              ds_excelData.setCellData(dataCnt, "txAmt", txAmt); //거래금액
              ds_excelData.setCellData(dataCnt, "inoutGubun", inoutGubun); //입출구분- 1:출금,2:입금
              ds_excelData.setCellData(dataCnt, "txCurBal", txCurBal); //잔액
              ds_excelData.setCellData(dataCnt, "acctTxday", acctTxday); //거래일 
              ds_excelData.setCellData(dataCnt, "jeokyo", jeokyo); //적요:거래기록사항   
              dataCnt++;
            }
          }
        }
      }
    }
    if (ds_excelData.getRowCount() > 0) {
      $c.gus.cfAlertMsg($p, "업로드가 완료되었습니다.");
    }
    tbx_ex_totalRows.setValue($c.gus.cfInsertComma($p, ds_excelData.getRowCount()));
  } catch (e) {
    console.log("f_reloadExcelByBank : " + e);
  }
};
//-------------------------------------------------------------------------
// 은행별 엑셀파일 업로드 처리(외화) - 은행별로 컬럼에 맞게 해당 데이터를 저장할 ds_excelData 에 넣어준다 (2017.03.28 추가)
//-------------------------------------------------------------------------
scwin.f_reloadExcelByBankForeign = async function (value) {
  try {
    let count = 0;
    console.log("외화 ds_excelOrgin.getRowCount() :: " + ds_excelOrgin.getRowCount());
    if (ds_excelOrgin.getRowCount() > 0) {
      let dataCnt = 0;
      let bankCd = lc_bankCombo.getValue(); //8자리 은행코드 가져오기  
      let bankNm = lc_bankCombo.getText();
      let excelCol = scwin.f_getBankColInfoForeign(bankCd); //은행별 엑셀파일 데이터 컬럼 위치 정보가져오기  

      console.log("bankCd :: " + bankCd);
      console.log("excelCol :: " + excelCol);
      if (excelCol == null) {
        $c.gus.cfAlertMsg($p, "엑셀업로드 처리가능하지 않은 은행입니다.");
        return false;
      }
      if (bankCd == "10000003" || bankCd == "10000081") {
        //기업은행 (2019.09.24 BIDC추가) , 하나은행 (2019.09.30 BIDC추가) 
        let acctNoIndex = Number(excelCol[0]) - 1; //계좌번호 행   //ASIS 미사용
        let dataStartIndex = Number(excelCol[1]) - 1; //데이터 시작행
        let colAcctNo = "text" + excelCol[2]; //계좌번호col  //ASIS 미사용
        let colAcctTxday = "text" + excelCol[3]; //거래일col
        let colTxAmt1 = "text" + excelCol[4]; //출금금액
        let colTxAmt2 = "text" + excelCol[5]; //입금금액
        let colTxCurBal = "text" + excelCol[6]; //잔액
        let colJeokyo = "text" + excelCol[7]; //적요         //ASIS 외환은행은 의뢰인정보임.
        let colCurrCd = "text" + excelCol[8]; //통화코드   		
        let acctNo = ""; //계좌번호 : 현재 콤보선택으로 바뀌어서 불필요함.

        console.log("dataStartIndex :: " + dataStartIndex);
        for (let i = 0; i < ds_excelOrgin.getRowCount(); i++) {
          count = count + i;
          if (ds_excelOrgin.getCellData(i, "text1") != "" && i >= dataStartIndex) {
            //데이터 시작행 && 첫번째 컬럼에 데이터가 있는것으로 체크함(합계행 포함하지 않기위해)
            let inoutGubun = ""; //입출구분- 1:출금,2:입금 
            let txAmtFcrc = 0;
            let txAmt1 = ds_excelOrgin.getCellData(i, colTxAmt1).trim().replace(/,/g, ""); //출금금액 
            let txAmt2 = ds_excelOrgin.getCellData(i, colTxAmt2).trim().replace(/,/g, ""); //입금금액 
            let txCurBal = ds_excelOrgin.getCellData(i, colTxCurBal).trim().replace(/,/g, ""); //잔액
            let acctTxday = ds_excelOrgin.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, ""); //거래일 
            let jeokyo = ds_excelOrgin.getCellData(i, colJeokyo).trim(); //적요:거래기록사항
            let currCd = ds_excelOrgin.getCellData(i, colCurrCd).trim(); //통화코드

            if (Number(txAmt1) != 0) {
              inoutGubun = "1"; //출금
              txAmtFcrc = txAmt1;
            } else if (Number(txAmt2) != 0) {
              inoutGubun = "2"; //입금
              txAmtFcrc = txAmt2;
            }
            if (!scwin.f_checkDigit(txAmtFcrc)) {
              $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(txCurBal)) {
              $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(acctTxday)) {
              $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (inoutGubun != "") {
              //입출금 모두 0 인 경우는 제외함.
              row = ds_excelData.insertRow(dataCnt);
              ds_excelData.setCellData(row, "bankCd", bankCd); //은행코드
              //ds_excelData.NameValue(dataCnt , "acctNo") 		= acctNo; //계좌번호 
              ds_excelData.setCellData(dataCnt, "txAmtFcrc", txAmtFcrc); //거래금액
              ds_excelData.setCellData(dataCnt, "inoutGubun", inoutGubun); //입출구분- 1:출금,2:입금
              ds_excelData.setCellData(dataCnt, "txCurBal", txCurBal); //잔액
              ds_excelData.setCellData(dataCnt, "acctTxday", acctTxday); //거래일 
              ds_excelData.setCellData(dataCnt, "jeokyo", jeokyo); //적요:거래기록사항   
              ds_excelData.setCellData(dataCnt, "currCd", currCd); //통화종류  
              dataCnt++;
            }
          }
        }
      } else if (bankCd == "100000AB") {
        //hanmi bank (2024.07.03) 해외법인 엑셀 업로드 추가
        let acctNoIndex = Number(excelCol[0]) - 1; //계좌번호 행   
        let dataStartIndex = Number(excelCol[2]) - 1; //데이터 시작행
        let acctNo = ""; //계좌번호 : 현재 콤보선택으로 바뀌어서 불필요함.

        for (let i = 0; i < ds_excelOrgin.getRowCount(); i++) {
          count = count + i;
          let inoutGubun = ""; //입출구분- 1:출금,2:입금 
          let txAmtFcrc = 0;
          let txAmt1 = ds_excelOrgin.getCellData(i, "text5").trim().replace(/,/g, ""); //출금금액 
          let txAmt2 = ds_excelOrgin.getCellData(i, "text6").trim().replace(/,/g, ""); //입금금액   
          let txCurBal = ds_excelOrgin.getCellData(i, "text8").trim().replace(/,/g, ""); //잔액
          let acctTxday = ds_excelOrgin.getCellData(i, "text2").trim().substring(0, 10).replace("/", "").substring(0, 10).replace("/", "").substring(0, 10).replace("/", "").replace("/", ""); //거래일 
          let jeokyo = ds_excelOrgin.getCellData(i, "text4").trim(); //적요:거래기록사항
          let currCd = "USD"; //통화코드

          let year = acctTxday.slice(-4);
          let month = ds_excelOrgin.getCellData(i, "text2").trim().substring(0, 2).replace("/", "");
          let day = ds_excelOrgin.getCellData(i, "text2").trim().slice(-7).replace("/", "").slice(-6, -4).replace("/", "");
          acctTxday = year + ("00" + month.toString()).slice(-2) + ("00" + day.toString()).slice(-2);
          if (Number(txAmt1) != 0) {
            inoutGubun = "1"; //출금
            txAmtFcrc = txAmt1;
          } else if (Number(txAmt2) != 0) {
            inoutGubun = "2"; //입금
            txAmtFcrc = txAmt2;
          }
          if (!scwin.f_checkDigit(txAmtFcrc)) {
            $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(txCurBal)) {
            $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(acctTxday)) {
            $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
            break;
          }
          if (inoutGubun != "") {
            //입출금 모두 0 인 경우는 제외함.
            row = ds_excelData.insertRow(dataCnt);
            ds_excelData.setCellData(row, "bankCd", bankCd); //은행코드
            //ds_excelData.NameValue(dataCnt , "acctNo") 		= acctNo; //계좌번호 
            ds_excelData.setCellData(dataCnt, "txAmtFcrc", txAmtFcrc); //거래금액
            ds_excelData.setCellData(dataCnt, "inoutGubun", inoutGubun); //입출구분- 1:출금,2:입금
            ds_excelData.setCellData(dataCnt, "txCurBal", txCurBal); //잔액
            ds_excelData.setCellData(dataCnt, "acctTxday", acctTxday); //거래일 
            ds_excelData.setCellData(dataCnt, "jeokyo", jeokyo); //적요:거래기록사항   
            ds_excelData.setCellData(dataCnt, "currCd", currCd); //통화종류  
            dataCnt++;
          }
        }
      } else {
        let acctNoIndex = Number(excelCol[0]) - 1; //계좌번호 행   
        let dataStartIndex = Number(excelCol[1]) - 1; //데이터 시작행
        let colAcctNo = "text" + excelCol[2]; //계좌번호col
        let colAcctTxday = "text" + excelCol[3]; //거래일col
        let colInoutGubun = "text" + excelCol[4]; //거래구분(입출 구분)   			
        let colTxAmtFcrc = "text" + excelCol[5]; //입출금액
        let colTxCurBal = "text" + excelCol[6]; //잔액
        let colJeokyo = "text" + excelCol[7]; //적요 
        let colCurrCd = "text" + excelCol[8]; //통화코드   			
        let acctNo = "";
        for (let i = 0; i < ds_excelOrgin.getRowCount(); i++) {
          count = count + i;
          if (ds_excelOrgin.getCellData(i, "text1") != "" && i >= dataStartIndex) {
            //데이터 시작행 && 첫번째 컬럼에 데이터가 있는것으로 체크함(합계행 포함하지 않기위해)
            let txAmtFcrc = ds_excelOrgin.getCellData(i, colTxAmtFcrc).trim().replace(/,/g, ""); //입출금액 
            let txCurBal = ds_excelOrgin.getCellData(i, colTxCurBal).trim().replace(/,/g, ""); //잔액
            let acctTxday = ds_excelOrgin.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, ""); //거래일 
            let jeokyo = ds_excelOrgin.getCellData(i, colJeokyo).trim().replace(/\?/g, ""); //적요:거래기록사항    
            let currCd = ds_excelOrgin.getCellData(i, colCurrCd).trim(); //통화코드
            let inoutGubun = ds_excelOrgin.getCellData(i, colInoutGubun).trim().replace(/\?/g, ""); // 입출구분 
            let inoutlength = inoutGubun.length;
            let inoutGubunCheck = inoutGubun.substring(inoutlength - 2, inoutlength); //입출구분 1:출금,2:입금

            if (inoutGubunCheck == "출금") {
              inoutGubun = "1";
            } else if (inoutGubunCheck == "입금") {
              inoutGubun = "2";
            }
            if (!scwin.f_checkDigit(txAmtFcrc)) {
              $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(txCurBal)) {
              $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (!scwin.f_checkDigit(acctTxday)) {
              $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. <br/>또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) <br/>엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (count + 1) + "행)");
              break;
            }
            if (inoutGubun != "") {
              //입출금 모두 0 인 경우는 제외함.
              row = ds_excelData.insertRow(dataCnt);
              ds_excelData.setCellData(row, "bankCd", bankCd); //은행코드
              //ds_excelData.NameValue(dataCnt , "acctNo") 		= acctNo; //계좌번호 
              ds_excelData.setCellData(dataCnt, "txAmtFcrc", txAmtFcrc); //거래금액
              ds_excelData.setCellData(dataCnt, "inoutGubun", inoutGubun); //입출구분- 1:출금,2:입금
              ds_excelData.setCellData(dataCnt, "txCurBal", txCurBal); //잔액
              ds_excelData.setCellData(dataCnt, "acctTxday", acctTxday); //거래일 
              ds_excelData.setCellData(dataCnt, "jeokyo", jeokyo); //적요:거래기록사항   
              ds_excelData.setCellData(dataCnt, "currCd", currCd); //통화종류  
              dataCnt++;
            }
          }
        }
      }
    }
    if (ds_excelData.getRowCount() > 0) {
      $c.gus.cfAlertMsg($p, "업로드가 완료되었습니다.");
    }
    tbx_ex_totalRows.setValue($c.gus.cfInsertComma($p, ds_excelData.getRowCount()));
  } catch (e) {
    console.log("f_reloadExcelByBankForeign : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_searchBankAccount',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchBankAccount',refEdDt:'txnDtTo',refStDt:'txnDtFrom',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_ToDate',titleFrom:'거래일자',titleTo:'거래일자'}},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankbookCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_searchBankAccount.bankbookCls'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',refDataCollection:'ds_searchBankAccount',popupID:'',code:'bankbookNo',mandatoryCode:'true',allowCharCode:'0-9',codeId:'ed_txt_bankbookNo',selectID:'retrieveBankBookCdInfo',validTitle:'통장명',editTypeName:'select',id:'udc_Bankbook',class:'',maxlengthCode:'5',editTypeCode:'select',validExpCode:'',UpperFlagCode:'1',mandatoryName:'false',nameId:'ed_txt_bankbookNm',style:'width: 300px;',objTypeName:'key',btnId:'btn_Bankbook','ev:onblurCodeEvent':'scwin.udc_Bankbook_onblurCodeEvent','ev:onclickEvent':'scwin.udc_Bankbook_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_txnCls',style:'width: 84px;',submenuSize:'fixed',ref:'data:ds_searchBankAccount.txnCls',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_procCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_searchBankAccount.procCls',chooseOptionLabel:'전체'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'통장입출금내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_bankAcctList',id:'excelUdc'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'50',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_bankAcctList',style:'',autoFit:'none',id:'gr_bankAcctList',visibleRowNum:'5',class:'wq_gvw',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:onheaderclick':'scwin.gr_bankAcctList_onheaderclick','ev:oncellclick':'scwin.gr_bankAcctList_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'num',displayMode:'label',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankCd',value:'금융기관코드',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctTxday',value:'거래일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inoutGubun',value:'구분',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'jeokyo',value:'입금자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctNo',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'bankbookNm',value:'통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctTxdaySeq',value:'일련번호',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'txAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'txAmtFcrc',value:'금액(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'txCurBal',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'currCd',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'branch',value:'취급점',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hisHandReg',value:'수기등록여부',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hisHandRegday',value:'수기등록일',displayMode:'label',hidden:'true',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'susRecvInitamtOutbrNo',value:'가수번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cancelYn',value:'취소',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'delYn',value:'삭제여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',value:'등록자ID',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDtm',value:'등록일시',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modId',value:'수정자ID',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modDtm',value:'수정일시',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',value:'회사코드',displayMode:'label',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coClsCd',value:'회사구분코드',displayMode:'label',hiddenClass:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'num',displayMode:'label',textAlign:'center',trueValue:'T',falseValue:'F',valueType:'other',readOnly:'false',moveColumn:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankCd',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctTxday',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'inoutGubun',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'jeokyo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'bankbookNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctTxdaySeq',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',id:'txAmt',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',id:'txAmtFcrc',displayMode:'label',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',id:'txCurBal',displayMode:'label',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'110',inputType:'text',id:'currCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'branch',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hisHandReg',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hisHandRegday',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'susRecvInitamtOutbrNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'slipNo',displayMode:'label',textAlign:'left',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cancelYn',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'delYn',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regId',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regDtm',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'modId',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'modDtm',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column24',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column22',expression:'sum(\'txAmt\')',displayFormat:'#,##0',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',id:'column21',expression:'sum(\'txAmtFcrc\')',displayFormat:'#,##0.00',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'110',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column129',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_batch',type:'button',class:'btn','ev:onclick':'scwin.f_batch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동(원화)'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Forbatch',type:'button',class:'btn','ev:onclick':'scwin.f_Forbatch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동(외화)'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Cancel',type:'button',class:'btn white','ev:onclick':'scwin.f_Cancel'},E:[{T:3,text:'>\n								'},{T:1,N:'xf:label',E:[{T:4,cdata:'등록취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:3,text:'>\n								'},{T:1,N:'xf:label',E:[{T:4,cdata:'가수등록'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Cancel_Delete',type:'button',class:'btn white','ev:onclick':'scwin.f_Cancel_Delete'},E:[{T:3,text:'>\n								'},{T:1,N:'xf:label',E:[{T:4,cdata:'삭제취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Delete',type:'button',class:'btn','ev:onclick':'scwin.f_Delete'},E:[{T:3,text:'>\n								'},{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'엑셀UPLOAD내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행 :',style:'',tagname:'span'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCombo',style:'width:180px;',submenuSize:'auto','ev:onviewchange':'scwin.lc_bankCombo_onviewchange',ref:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계좌 :',style:'',tagname:'span'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankbookCombo',style:'width:140px;',submenuSize:'auto','ev:onviewchange':'scwin.lc_bankbookCombo_onviewchange',ref:'',displayMode:'label',visibleRowNum:'50'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnUser:'N',gridDownYn:'N',gridID:'gr_Tmp_UpExcel',gridUpYn:'Y',gridUpFn:'scwin.f_upload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_excelData',id:'gr_Tmp_UpExcel',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true',hideFilterIconOnNoData:'data:ds_excelData'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',value:'금융기관코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxday',inputType:'text',value:'거래일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inoutGubun',inputType:'text',value:'구분',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jeokyo',inputType:'text',value:'입금자명',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNo',inputType:'text',value:'계좌번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNm',inputType:'text',value:'통장번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxdaySeq',inputType:'text',value:'일련번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmt',inputType:'text',value:'금액',width:'150',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmtFcrc',inputType:'text',value:'금액(외화)',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txCurBal',inputType:'text',value:'잔액',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currCd',inputType:'text',value:'통화',width:'110',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branch',inputType:'text',value:'취급점',width:'100',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandReg',inputType:'text',value:'수기등록여부',width:'100',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandRegday',inputType:'text',value:'수기등록일',width:'120',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvInitamtOutbrNo',inputType:'text',value:'가수번호',width:'120',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',value:'삭제여부',width:'100',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cancelYn',inputType:'text',value:'취소',width:'100',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',value:'등록자ID',width:'100',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',value:'등록일시',width:'100',hiddenClass:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',value:'수정자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',value:'수정일시',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxday',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inoutGubun',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jeokyo',inputType:'text',width:'250',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNo',inputType:'text',width:'150',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNm',inputType:'text',width:'130',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxdaySeq',inputType:'text',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmt',inputType:'text',textAlign:'right',width:'150',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmtFcrc',inputType:'text',textAlign:'right',width:'150',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txCurBal',inputType:'text',textAlign:'right',width:'150',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currCd',inputType:'text',textAlign:'center',width:'110',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branch',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandReg',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandRegday',inputType:'text',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvInitamtOutbrNo',inputType:'text',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cancelYn',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column99',inputType:'text',textAlign:'right',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column96',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column126',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column123',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column117',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column114',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column111',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_ex_totalRows',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_saveExcel',style:'',type:'button','ev:onclick':'scwin.f_saveExcel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_excelOrgin',id:'gr_excelUpload',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:';display:none;',visibleRowNum:'17',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excelUpload_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'text1',inputType:'text',value:'text1',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text2',inputType:'text',value:'text2',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text3',inputType:'text',value:'text3',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text4',inputType:'text',value:'text4',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text5',inputType:'text',value:'text5',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text6',inputType:'text',value:'text6',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text7',inputType:'text',value:'text7',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text8',inputType:'text',value:'text8',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text9',inputType:'text',value:'text9',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text10',inputType:'text',value:'text10',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'text1',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text2',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text3',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text4',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text5',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text6',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text7',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text8',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text9',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text10',inputType:'text',width:'200'}}]}]}]}]}]}]}]}]}]})