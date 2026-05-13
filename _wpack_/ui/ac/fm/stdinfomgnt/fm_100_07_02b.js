/*amd /ui/ac/fm/stdinfomgnt/fm_100_07_02b.xml 42083 e58879aa3685c0f68ab55531fb72ba55b0c2b7b73114cb838465fc864aef0eda */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_userCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_user',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'sysCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'조회조건구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'조회조건내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확인여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountCustomer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountClntKndCd',name:'계열구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'거래처사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처 전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처 핸드폰 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fncInstCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처 EMAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'거래처 팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확인여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyCond',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_collMoneyCond_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결제조건 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결제조건 결제기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'수금수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCrcCd',name:'지급화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyBankbookNo',name:'수금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_user',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_userCondition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_user_submitdone','ev:submiterror':'',abortTrigger:'',style:';display:none;'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCustomerList',action:'',method:'post',mediatype:'application/json',ref:'data:json,ds_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveCustomerList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveAccountCustomerList',action:'/ac.fm.stdinfomgnt.RetrieveCollectionOfMoneyConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition2","key":"ds_condition2"},{"id":"ds_collMoneyCond","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoneyCond","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveAccountCustomerList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAccountCustomer',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_accountCustomer","key":"IN_DS1"},{"action":"modified","id":"ds_collMoneyCond","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAccountCustomer_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.pos_clnt = 0;
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)

//-------------------------------------------------------------------------
// 히든정보설정
//-------------------------------------------------------------------------
scwin.txt_clntNoValChk = "";
scwin.txt_clntNo = "";
scwin.txt_clntLupCond = "";
scwin.txt_sysCls = "";
scwin.txt_payIdx = "";
scwin.txt_createYn = "";
scwin.txt_updateYn = "";
scwin.txt_rowCount = "";
scwin.txt_saveType = "";
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "SD020",
    compID: "gr_collMoneyCondition:stmtPrdClsCd"
  }, {
    grpCd: "FM019",
    compID: "gr_collMoneyCondition:collMoneyCntShtCd"
  }, {
    grpCd: "ZZ006",
    compID: "gr_collMoneyCondition:collMoneyCrcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  acb_confirmYn.setSelectedIndex(0);
  acb_clntLupCond.setSelectedIndex(0);
  scwin.f_retrieveUser();
};

//-------------------------------------------------------------------------
// 확인여부 심사권한.
// 2010.06.03. 재경팀, 김학봉씨 요청으로 심사권한이 있는 사람만 확인여부 수정할 수 있도록 변경.
// 기본적으로 "아니요"로 셋팅됨.
//-------------------------------------------------------------------------
scwin.f_retrieveUser = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveBorrowAcqKindInfo",
    param1: "FM092"
  };

  //데이터셋에 정보설정
  ds_userCondition.setJSON(params);
  $c.sbm.execute($p, sbm_user);
};
//-------------------------------------------------------------------------
// 확인여부 심사권한. 콜백
//-------------------------------------------------------------------------
scwin.sbm_user_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    //alert(JSON.stringify(e.responseJSON.GAUCE[0])); 리스트지만 원래 1건인경우
    ds_user.setJSON(e.responseJSON.GAUCE);
    var gJudgeYn = "0";
    var sLoginId = $c.data.getMemInfo($p, "empNo");
    for (var i = 0; i < ds_user.getRowCount(); i++) {
      if (ds_user.getCellData(i, "col1") == sLoginId) {
        gJudgeYn = "1";
      }
    }
    if (gJudgeYn == 0) {
      gr_collMoneyCondition.setColumnReadOnly("confirmYn", true);
      //    gr_collMoneyCondition.ColumnProp("confirmYn","Edit") = "NONE";
    } else if (gJudgeYn == 1) {
      gr_collMoneyCondition.setColumnReadOnly("confirmYn", false);
      //  gr_collMoneyCondition.ColumnProp("confirmYn","Edit") = "ANY";
    }
  }
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
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var edQryCntn = ed_qryCntn.getValue().trim();
  let ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) {
    return false;
  }
  if (scwin.bytelength(edQryCntn) < 2 && acb_confirmYn.getValue() == '-1') {
    /*msgArr = new Array(2);
    msgArr[0] = "검색어";
    msgArr[1] = "글자(숫자) 한(두)";*/

    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_011, "검색어", "글자(숫자) 한(두)"));
    ed_qryCntn.focus();
    return false;
  } else if (scwin.bytelength(edQryCntn) > 1 && acb_confirmYn.getValue() == '-1') {
    sbm_RetrieveCustomerList.action = "/ac.fm.stdinfomgnt.RetrieveAccountCustomerAllListCMD.do";
  } else {
    sbm_RetrieveCustomerList.action = "/ac.fm.stdinfomgnt.RetrieveCustomerListCMD.do";
  }
  const params = {
    sysCls: "0",
    clntLupCond: acb_clntLupCond.getValue(),
    qryCntn: ed_qryCntn.getValue(),
    confirmYn: acb_confirmYn.getValue(),
    coCd: ed_coCd.getValue()
  };

  //데이터셋에 정보설정
  ds_condition.setJSON(params);
  ds_accountCustomer.removeAll();
  $c.sbm.execute($p, sbm_RetrieveCustomerList);
};

//-------------------------------------------------------------------------
// 조회결과 콜백(거래처 정보)
//-------------------------------------------------------------------------
scwin.sbm_RetrieveCustomerList_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_accountCustomer.setJSON(e.responseJSON.GAUCE);
    if (ds_accountCustomer.getRowCount() == 0) {
      //TOBE 기본정보 미존재시 지급조건,지급계좌 데이터 초기화밒 합계 0 처리 추가
      ds_collMoneyCond.removeAll();
      tbx_totalRows.setValue(0);
      tbx_totalRows2.setValue(0); //지급조건합계

      scwin.onUdcCompleted(); //f_OnLoad();
      await $c.win.alert($p, "조회된 데이터가 없습니다.");
      ed_qryCntn.focus();
    } else {
      tbx_totalRows.setValue(ds_accountCustomer.getRowCount());
      // 저장전의 위치로 이동시킨다.
      $c.gus.cfGoPrevPosition($p, gr_accountCustomer, scwin.pos_clnt);
      scwin.gr_accountCustomer_onrowindexchange(scwin.pos_clnt);
    }
  }
};

//-------------------------------------------------------------------------
// 거래처 정보 그리드가 변경되는 경우
//-------------------------------------------------------------------------
scwin.gr_accountCustomer_onrowindexchange = function (rowIndex, oldRow) {
  ds_accountCustomer.setRowPosition(rowIndex);
  scwin.f_RetrieveCollPayAcnt();
};

//-------------------------------------------------------------------------
// 지급조건, 지급계좌 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCollPayAcnt = function () {
  const params = {
    clntNo: ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo"),
    confirmYn: acb_confirmYn.getValue(),
    coCd: ed_coCd.getValue()
  };

  //데이터셋에 정보설정
  ds_condition2.setJSON(params);
  $c.sbm.execute($p, sbm_RetrieveAccountCustomerList);
};

//-------------------------------------------------------------------------
// 조회결과 콜백(지급조건, 지급계좌 조회)
scwin.sbm_RetrieveAccountCustomerList_submitdone = function () {
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  tbx_totalRows2.setValue(ds_collMoneyCond.getRowCount()); //지급조건합계
  $c.gus.cfGoPrevPosition($p, gr_collMoneyCondition, 0); //수급조건목록 1번째 포커스 이동
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------
scwin.bytelength = function (bstr) {
  //var bstr = ed_qryCntn.getValue().trim();
  var len = bstr.length;
  for (ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substr(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  debugger;
  let row = $c.data.insertRow($p, $p.getComponentById("gr_collMoneyCondition"));

  //row 추가
  ds_collMoneyCond.setCellData(row, "clntNo", ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo"));
  ds_collMoneyCond.setCellData(row, "collMoneyCrcCd", "KRW");
  ds_collMoneyCond.setCellData(row, "seq", "0");
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_UndoAll = function () {
  if (ds_collMoneyCond.getRowStatus(ds_collMoneyCond.getRowPosition()) == "C") {
    ds_collMoneyCond.removeRow(ds_collMoneyCond.getRowPosition());
  } else {
    $c.data.undoRow($p, ds_collMoneyCond, "Y");
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  var row = ds_collMoneyCond.getRowPosition();
  //추가등록정보만 삭제, 나머지는 상태값 삭제가 됨
  if (ds_collMoneyCond.getRowStatus(row) == "C") {
    ds_collMoneyCond.removeRow(row);
  } else {
    ds_collMoneyCond.deleteRow(row);
    $c.gus.cfGoPrevPosition($p, gr_collMoneyCondition, row);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// 콤보박스 변경에 따른 처리
//-------------------------------------------------------------------------
scwin.gr_collMoneyCondition_onafteredit = function (rowIndex, columnIndex, value) {
  var stmtPrdDd = ds_collMoneyCond.getCellData(rowIndex, "stmtPrdDd");
  var stmtPrdClsCd = ds_collMoneyCond.getCellData(rowIndex, "stmtPrdClsCd");
  var collMoneyCondRowPosition = ds_collMoneyCond.getRowPosition();
  var vCollMoneyCntShtCd = ds_collMoneyCond.getCellData(rowIndex, "collMoneyCntShtCd"); //수금수단

  var colid = gr_collMoneyCondition.getColumnID(columnIndex);

  // 지급주기, 주기일콤보를 여는 경우
  if (colid == "stmtPrdClsCd") {
    // 결제조건 구분에 상관없이 edit
    //if(stmtPrdClsCd ==0){
    // 수시인 경우
    //	ds_collMoneyCond.NameValue(row,"stmtPrdDd") = "";
    //	gr_collMoneyCondition.ColumnProp("stmtPrdDd","Edit") = "None";
    //}else if(stmtPrdClsCd !=0){
    //	// 익월, 익익월, 당월인 경우
    gr_collMoneyCondition.setColumnReadOnly("stmtPrdDd", false);
    ds_collMoneyCond.setCellData(rowIndex, "stmtPrdDd", "30");
    //}
  }
  if (colid == "collMoneyCntShtCd") {
    if (vCollMoneyCntShtCd == "50") {
      // 수금수단이 어음인 경우
      gr_collMoneyCondition.setColumnReadOnly("draftDdCnt", false);
      ds_collMoneyCond.setCellData(rowIndex, "draftDdCnt", "0");
    } else {
      // 수금수단이 현금인 경우
      gr_collMoneyCondition.setColumnReadOnly("draftDdCnt", true);
      ds_collMoneyCond.setCellData(rowIndex, "draftDdCnt", "0");
    }
  }

  /*
  ASIS 정보변경 후 처리없음. 필요시 추가하면 됨
  if(colid=="collMoneyAcctDeptNm"){
      scwin.f_openDeptPopUp4CollMoney();   // 귀속부서팝업
  }
   if(colid=="collMoneyBankbookNo"){
      scwin.f_openBankBookPopUp();   // 통장번호팝업
  }*/
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_accountCustomer.getModifiedIndex().length == 0 && ds_collMoneyCond.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }

  // 결제구분은 Bill 수령후를 선택할 수 없게함	
  if (ds_collMoneyCond.getCellData(0, 'stmtPrdClsCd') == "02") {
    await $c.win.alert($p, "결제 구분은 Bill 수령후를 선택하실 수 없습니다.");
    return 0;
  }

  // 수금조건 필수항목 체크
  let ret = await $c.gus.cfValidate($p, [gr_collMoneyCondition]);
  if (!ret) {
    return false;
  }
  var payCondRowPosi = ds_collMoneyCond.getRowPosition();
  var stmtPrdClsCd = ds_collMoneyCond.getCellData(payCondRowPosi, "stmtPrdClsCd");
  var vstmtPrdDd = ds_collMoneyCond.getCellData(payCondRowPosi, "stmtPrdDd");
  if (stmtPrdClsCd != "" && vstmtPrdDd == "") {
    $c.win.alert($p, "결제기한은 필수 입력 사항입니다.");
    return false;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    scwin.pos_clnt = ds_accountCustomer.getRowPosition();
    sbm_saveAccountCustomer.action = "/ac.fm.stdinfomgnt.SaveCollectionOfMoneyConditionCMD.do";
    $c.sbm.execute($p, sbm_saveAccountCustomer);
  }
};

//-------------------------------------------------------------------------
// 저장결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAccountCustomer_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 수금조건 PopUp 호출
//-------------------------------------------------------------------------
scwin.gr_collMoneyCondition_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    let Colid = gr_collMoneyCondition.getColumnID(columnIndex);
    if (Colid == "collMoneyAcctDeptNm") {
      scwin.f_openDeptPopUp4CollMoney(); // 귀속부서팝업
    } else if (Colid == "collMoneyBankbookNo") {
      scwin.f_openBankBookPopUp(); // 통장번호팝업
    }
  } catch (e) {
    console.log("gr_collMoneyCondition_ontextimageclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업 (수금조건용)
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp4CollMoney = function () {
  try {
    let vTitle = "수금부서, 수금부서코드, 수금부서명";

    //var rtnList = new Array();
    //rtnList = cfCommonPopUp('retrieveCommCdInfo','','',"F",null,null,null,"3,4,5,6,7,8,9,10","FM080",null,null,null,null,null,"T",vTitle,null);//
    udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_collMoneyAcctDeptNm_callBackFunc // 팝업 콜백
    , '' // 화면에서의 ??? Code Element의    Value
    , '' // 화면에서의 ??? Name Element의    Value
    , 'F' // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
    , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서    
    , null // 보여주는 각 컬럼들의 폭  
    , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는    컬럼 지정   
    , 'FM080' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의    사용자 정의 폭
    , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
    , null // 윈도우 위치 Y좌표    
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , 'T' // 전체검색허용여부 ("F")
    , vTitle // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } catch (e) {
    console.log("f_openDeptPopUp4CollMoney : " + e);
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업 (수금조건용) 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_collMoneyAcctDeptNm_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    let collMoneyCondRowPosi = ds_collMoneyCond.getRowPosition();
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptCd", rtnList[0]); //수금귀속부서코드
      ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptNm", rtnList[1]); //수금귀속부서명
    } else {
      ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptCd", ""); //수금귀속부서코드
      ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptNm", ""); //수금귀속부서명
    }
  } catch (e) {
    console.log("udc_comCodeGrid_collMoneyAcctDeptNm_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장번호팝업
//-------------------------------------------------------------------------
scwin.f_openBankBookPopUp = function () {
  try {
    let param = "," + "," + "," + "," + "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항

    //rtnList = cfCommonPopUp('retrieveBankBookCdInfo','','',"T",null,null,null,null,param,null,null,null,null); // 거래처 //
    udc_comCodeGrid.setSelectId('retrieveBankBookCdInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_collMoneyBankbookNo_callBackFunc // 팝업 콜백
    , '' // 화면에서의 ??? Code Element의    Value
    , '' // 화면에서의 ??? Name Element의    Value
    , 'T' // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
    , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서    
    , null // 보여주는 각 컬럼들의 폭  
    , null // 컬럼중에서 숨기는    컬럼 지정   
    , param // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의    사용자 정의 폭
    , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
    , null // 윈도우 위치 Y좌표    
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , null // 전체검색허용여부 ("F")
    , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } catch (e) {
    console.log("f_openBankBookPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장번호팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_collMoneyBankbookNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      let collMoneyCondRowPosi = ds_collMoneyCond.getRowPosition();
      ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyBankbookNo", rtnList[0]); //통장번호
    }
  } catch (e) {
    console.log("udc_comCodeGrid_collMoneyBankbookNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 수금조건 그리드 컬럼 선택시
//-------------------------------------------------------------------------
scwin.ds_collMoneyCond_oncelldatachange = function (info) {
  let Colid = info.colID;
  let row = info.rowIndex;
  if (Colid == "collMoneyAcctDeptNm") {
    if (ds_collMoneyCond.getCellData(row, "collMoneyAcctDeptNm").trim() == "") {
      ds_collMoneyCond.setCellData(row, "collMoneyAcctDeptCd", "");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_clntLupCond',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_qryCntn',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_confirmYn',search:'start',style:'width: 80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',searchTarget:'value',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_accountCustomer',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_accountCustomer',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',resize:'true',columnMove:'true',sortable:'true','ev:onrowindexchange':'scwin.gr_accountCustomer_onrowindexchange',readOnly:'true',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'80',value:'거래처번호',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'거래처명'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'150',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수금조건',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_collMoneyCond',focusMode:'row',id:'gr_collMoneyCondition',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',rowStatusVisible:'true',editModeEvent:'onclick','ev:ontextimageclick':'scwin.gr_collMoneyCondition_ontextimageclick',gridName:'수금조건','ev:onafteredit':'scwin.gr_collMoneyCondition_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'70',value:'번호',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'적용일자',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'160',value:'수금부서명',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'140',value:'결제조건',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'수금수단',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'어음일수',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'수금화폐',width:'100',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수금통장번호',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'confirmYn',value:'확인',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'구분',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'결제기한',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'seq',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'adptDt',inputType:'calendar',removeBorderStyle:'false',width:'120',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'collMoneyAcctDeptNm',inputType:'textImage',removeBorderStyle:'false',width:'160'}},{T:1,N:'w2:column',A:{width:'120',displayMode:'label',id:'stmtPrdClsCd',inputType:'select',removeBorderStyle:'false',value:'0',textAlign:'left',allOption:'',chooseOption:'',ref:'',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stmtPrdDd',inputType:'text',width:'100',allowCharCode:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'100',displayMode:'label',id:'collMoneyCntShtCd',inputType:'select',removeBorderStyle:'false',value:'0',textAlign:'left',allOption:'',chooseOption:'',ref:'',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftDdCnt',inputType:'text',width:'100',allowCharCode:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'100',displayMode:'label',id:'collMoneyCrcCd',inputType:'select',removeBorderStyle:'false',value:'0',textAlign:'left',allOption:'',chooseOption:'',ref:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyBankbookNo',inputType:'textImage',width:'150',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',displayMode:'label',id:'confirmYn',inputType:'select',removeBorderStyle:'false',value:'0',textAlign:'left',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddYn:'Y',rowAddObjType:'ctrlBtn',rowAddFunction:'f_AddRow',rowAddUserAuth:'C',rowDelFunction:'f_Delete',cancelFunction:'f_UndoAll',gridID:'gr_collMoneyCondition',id:'udc_gridAddDel',cancelUserAuth:'D',rowDelUserAuth:'D',delObjType:'ctrlBtn',rowDelObjType:'ctrlBtn'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bSav',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})