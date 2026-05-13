/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_02_01b.xml 61333 4c19ebb79cad53b719fd5a62d27db7f49ce00bcbcb636bd7f2c9ff67601d7eb8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'청구(수금)귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgFromDate',name:'청구시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgToDate',name:'청구종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyFromDate',name:'입금일시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyToDate',name:'입금일종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCntSht',name:'계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'청구금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt1',name:'잔액(원)1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'청구금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc1',name:'잔액(외)1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'통화코드Desc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoney',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvKey',name:'수금정산용Key값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountItem',name:'계정항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'가수금선수금발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'changeDt',name:'변경일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'입금자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmtCheck',name:'정리금액_CHECK',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrcCheck',name:'정리금액_외화_CHECK',dataType:'number'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'잔가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'remainAmtFcrc',name:'잔가(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분(CSR/SVC)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'가상계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addCollMoney',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispClntNo',name:'매각 거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispDcRt',name:'할인율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lostAmt',name:'처분손',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commiSsionAmt',name:'수수료(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'CommiSsionAmtFcrc',name:'수수료(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableDispositionTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAcctRecv","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCollMoney',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableDispositionAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAcctRecv","key":"IN_DS1"},{"id":"ds_collMoney","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoney","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAcctRecvCollMoney',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RegistAccountReceivableDispositionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_acctRecv","key":"IN_DS1"},{"action":"modified","id":"ds_acctRecv","key":"IN_DS2"},{"action":"modified","id":"ds_addCollMoney","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAcctRecvCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 수금예정일자의 초기날짜를 구한다. 
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.

//-------------------------------------------------------------------------
// 전역변수를 선언한다.
//-------------------------------------------------------------------------
scwin.checkSearch = false; // 거래처 귀속부서 필수값으로 조회된지 여부 확인변수

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //그리드 hidden="true" hiddenCol="true" 로 변경

  //ASIS 히든,showfalse 그리드 필드정보
  gr_acctRecv.setColumnVisible("sellAcctDeptNm", false);
  gr_acctRecv.setColumnVisible("acctCd", false);
  gr_acctRecv.setColumnVisible("collMoneyIntendDt", false);
  gr_acctRecv.setColumnVisible("cdEngNm", false);
  gr_acctRecv.setColumnVisible("checknum", false);
  gr_acctRecv.setColumnVisible("acctRecvNo", false);
  gr_acctRecv.setColumnVisible("collMoneyAcctDeptCd", false);
  gr_acctRecv.setColumnVisible("bilgAcctDeptCd", false);
  gr_acctRecv.setColumnVisible("sellAcctDeptCd", false);
  gr_acctRecv.setColumnVisible("clntNo", false);

  //ASIS 히든,showfalse 그리드 필드정보
  gr_collMoney.setColumnVisible("checkNum", false);
  gr_collMoney.setColumnVisible("clntNo", false);
  gr_collMoney.setColumnVisible("gubun", false);
  gr_collMoney.setColumnVisible("billRecvKey", false);
  gr_collMoney.setColumnVisible("crcCd", false);
  gr_collMoney.setColumnVisible("bankbookNo", false);
  gr_collMoney.setColumnVisible("billRecvAcctCd", false);
  gr_collMoney.setColumnVisible("summary", false);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  try {
    scwin.f_Reset();
    ed_FromDate.setValue(scwin.strFromDate);
    ed_ToDate.setValue(scwin.strToDate);
    ed_collMoneyFromDate.setValue(scwin.strFromDate);
    ed_collMoneyToDate.setValue(scwin.strToDate);
    ds_addCollMoney.insertRow(0);
    ds_addCollMoney.setRowPosition(0);
    ds_addCollMoney.setCellData(0, "wrkDt", scwin.strToDate); //ed_wrkDt.setValue(scwin.strToDate);

    // 해당 사항은 차후 초기화값을 지운다 (개발을 위해서 코딩한 사항임.)하드코딩
    acb_collMoneyCntSht.setSelectedIndex(0);
    ed_sclntNo.focus();
  } catch (e) {
    console.log("scwin.ondataload " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_Reset = function (e) {
  ed_lostAmt.setValue("");
  ed_dispDcRt.setValue("");
  ed_commiSsionAmt.setValue("");
  ed_commiSsionAmtFcrc.setValue("");
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, []);
};

//-------------------------------------------------------------------------
// 초기화(입금조회)
//-------------------------------------------------------------------------
scwin.f_InitObjects2 = function (e) {
  $c.gus.cfInitObjects($p, table2, []);
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
// 거래처 찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 청구부서
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 청구부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 청구부서 찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 통장번호
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sbankbookCd, ed_sbankbookNm, '3', 'CD');
};

//-------------------------------------------------------------------------
// 통장명
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sbankbookCd, ed_sbankbookNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// 통장 찾기
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sbankbookCd, ed_sbankbookNm, '3', 'ALL');
};

//-------------------------------------------------------------------------
// 매각거래처
//-------------------------------------------------------------------------
scwin.udc_dispClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_dispClntNo, ed_dispClntNm, '4', 'CD');
};

//-------------------------------------------------------------------------
// 매각거래처 찾기
//-------------------------------------------------------------------------
scwin.udc_dispClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_dispClntNo, ed_dispClntNm, '4', 'ALL');
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
// 1:조회->수금부서, 2:조회->매각사원, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";

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
        //rtnList = cfCommonPopUp('retrieveClntEmpNoList',cd,nm,"T",null,null,null,null,null,null,null,null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntEmpNoList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        break;
      //조회조건용 청구(수금)부서 PopUp 호출    
      case '2':
        scwin.checkSearch = false; // 정상조회여부 확인
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',cd, nm,"T",null,null,null,null,",,,0","450","500",null,null); // 귀속부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ",,,0" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '450' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '3':
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',cd,nm,"T",null,null,null,null,null,null,null,null,null); // 통장명
        udc_Bankbook.setSelectId('retrieveBankBookCdInfo');
        udc_Bankbook.cfCommonPopUp(scwin.udc_Bankbook_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        break;
      //매각내역용 거래처 PopUp 호출
      case '4':
        //rtnList = cfCommonPopUp('retrieveClntList',cd,'',"T",null,null,null,null,null,null,null,null,null); // 거래처
        udc_dispClntNo.setSelectId('retrieveClntList');
        udc_dispClntNo.cfCommonPopUp(scwin.udc_dispClntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , '' // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      ed_sclntNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sclntNo.setValue("");
      ed_sclntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 청구부서 팝업 콜백(2)
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
      ed_sacctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 통장 팝업 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_Bankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sbankbookCd.setValue(rtnList[0]); // 코드값
      ed_sbankbookNm.setValue(rtnList[2]); // 코드명
      ed_sbankbookCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sbankbookNm.hidVal = rtnList[2]; // HIDDEN 코드명
    } else {
      ed_sbankbookCd.setValue("");
      ed_sbankbookNm.setValue("");
      ed_sbankbookCd.hidVal = "";
      ed_sbankbookNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_Bankbook_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 매각처 팝업 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_dispClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_dispClntNo.setValue(rtnList[0]); // 코드값
      ed_dispClntNm.setValue(rtnList[1]); // 코드명
      ed_dispClntNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_dispClntNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_dispClntNo.setValue("");
      ed_dispClntNm.setValue("");
      ed_dispClntNo.hidVal = "";
      ed_dispClntNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_dispClntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "청구일자 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_collMoneyFromDate.getValue(), ed_collMoneyToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "입금일자 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }

    // 조건의 필수 입력 사항 체크
    let ret = await $c.gus.cfValidate($p, [ed_sclntNo, ed_FromDate, ed_ToDate, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }

    //채권내역 선택금액 초기화
    ed_selectAmt.setValue(0);
    ed_selectAmtFcrc.setValue(0);

    // 수금내역 선택금액 초기화
    ed_selectAmtCollMoney.setValue(0);
    ed_selectAmtFcrcCollMoney.setValue(0);
    ds_acctRecv.removeAll();
    $c.sbm.execute($p, sbm_searchAcctRecv);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchAcctRecv_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.checkSearch = true; // 정상 조회 되었음.

    if (ds_acctRecv.getRowCount() != 0) {
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctRecv.getRowCount()));
      $c.gus.cfGoPrevPosition($p, gr_acctRecv, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchAcctRecv_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드셀클릭
//-------------------------------------------------------------------------
scwin.gr_acctRecv_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    if (ds_acctRecv.getCellData(rowIndex, "num") == "T" && columnId == "num" && ds_acctRecv.getCellData(rowIndex, "checkNum") == "F") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) + parseInt(ds_acctRecv.getCellData(rowIndex, "ramt")));
      ed_selectAmtFcrc.setValue(parseInt(ed_selectAmtFcrc.getValue()) + parseInt(ds_acctRecv.getCellData(rowIndex, "ramtFcrc")));
      ds_acctRecv.setCellData(rowIndex, "checkNum", "T");
    } else if (ds_acctRecv.getCellData(rowIndex, "num") == "F" && columnId == "num" && ds_acctRecv.getCellData(rowIndex, "checkNum") == "T") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) - parseInt(ds_acctRecv.getCellData(rowIndex, "ramt")));
      ed_selectAmtFcrc.setValue(parseInt(ed_selectAmtFcrc.getValue()) - parseInt(ds_acctRecv.getCellData(rowIndex, "ramtFcrc")));
      ds_acctRecv.setCellData(rowIndex, "checkNum", "F");
    }
  } catch (e) {
    console.log("gr_acctRecv_oncellclick " + e);
  }
};

//-------------------------------------------------------------------------
// 수금수단 조회 
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_collMoneyFromDate.getValue(), ed_collMoneyToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "입금일자 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_collMoneyToDate.focus();
      return false;
      ;
    }

    // 조건의 필수 입력 사항 체크
    let ret = await $c.gus.cfValidate($p, [ed_collMoneyFromDate, ed_collMoneyToDate]);
    if (!ret) {
      return false;
    }
    $c.sbm.execute($p, sbm_searchCollMoney);
  } catch (e) {
    console.log("f_Retrieve2 :" + e);
  }
};

//-------------------------------------------------------------------------
// 수금수단 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchCollMoney_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (ds_collMoney.getRowCount() != 0) {
      tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_collMoney.getRowCount()));
      $c.gus.cfGoPrevPosition($p, gr_collMoney, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchCollMoney_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드셀클릭
//-------------------------------------------------------------------------
scwin.gr_collMoney_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    if (ds_collMoney.getCellData(rowIndex, "crcCd") == ACConstants.USD) {
      ds_collMoney.setCellData(rowIndex, "checkNum", "F");
      ds_collMoney.setCellData(rowIndex, "num", "F");
    }
    if (ds_collMoney.getCellData(rowIndex, "crcCd") != ACConstants.USD) {
      if (ed_selectAmtCollMoney.getValue() == "") {
        ed_selectAmtCollMoney.setValue(0);
      }
      if (ed_selectAmtFcrcCollMoney.getValue() == "") {
        ed_selectAmtFcrcCollMoney.setValue(0);
      }
      if (ds_collMoney.getCellData(rowIndex, "num") == "T" && columnId == "num" && ds_collMoney.getCellData(rowIndex, "checkNum") == "F") {
        ed_selectAmtCollMoney.setValue(parseInt(ed_selectAmtCollMoney.getValue()) + parseInt(ds_collMoney.getCellData(rowIndex, "setlAmt")));
        ed_selectAmtFcrcCollMoney.setValue(parseInt(ed_selectAmtFcrcCollMoney.getValue()) + parseInt(ds_collMoney.getCellData(rowIndex, "setlAmtFcrc")));
        ds_collMoney.setCellData(rowIndex, "checkNum", "T");
      } else if (ds_collMoney.getCellData(rowIndex, "num") == "F" && columnId == "num" && ds_collMoney.getCellData(rowIndex, "checkNum") == "T") {
        ed_selectAmtCollMoney.setValue(parseInt(ed_selectAmtCollMoney.getValue()) - parseInt(ds_collMoney.getCellData(rowIndex, "setlAmt")));
        ed_selectAmtFcrcCollMoney.setValue(parseInt(ed_selectAmtFcrcCollMoney.getValue()) - parseInt(ds_collMoney.getCellData(rowIndex, "setlAmtFcrc")));
        ds_collMoney.setCellData(rowIndex, "checkNum", "F");
      }
    }
  } catch (e) {
    console.log("gr_collMoney_oncellclick : " + e);
  }
};
//-------------------------------------------------------------------------
// 수금등록 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    // 저장시 필수 입력 사항 체크
    let ret = await $c.gus.cfValidate($p, [ed_sclntNo, ed_sacctDeptCd, ed_wrkDt, ed_dispClntNo, ed_dispDcRt, ed_lostAmt]);
    if (!ret) {
      return false;
    }

    //귀속부서 및 거래처가 변경되었을 경우 재조회후 수금처리 가능하게 함.
    if (scwin.checkSearch == false) {
      $c.gus.cfAlertMsg($p, "필수 입력사항인 거래처,수금부가 변경되었습니다.\n재조회 하신후 채권매각 하시기 바랍니다.");
      return false;
    }

    //TOBE 널값인경우 parseInt방어
    let icommiamt = parseInt(ds_addCollMoney.getCellData(0, "commiSsionAmt")); //수수료(원)
    if (ds_addCollMoney.getCellData(0, "commiSsionAmt") == "") {
      icommiamt = 0;
    } else {
      icommiamt = parseInt(ds_addCollMoney.getCellData(0, "commiSsionAmt")); //수수료(원)
    }
    let ilostamt = 0;
    if (ds_addCollMoney.getCellData(0, "lostAmt") == "") {
      ilostamt = 0;
    } else {
      ilostamt = parseInt(ds_addCollMoney.getCellData(0, "lostAmt")); //처분손 금액
    }

    // 처리할 채권 금액 합산
    let iAcctRecvAmt = parseInt(ed_selectAmt.getValue());
    // 처리할 수금 금액 합산
    let iCollMoneyAmt = icommiamt + parseInt(ed_selectAmtCollMoney.getValue()) + ilostamt;
    //alert("icommiamt : " + icommiamt + ", "+ parseInt(ed_selectAmtCollMoney.getValue()) +",ilostamt" +ilostamt);

    // 채권금액과 수금금액은 동일하여야 채권매각이 가능함.
    if (iAcctRecvAmt != iCollMoneyAmt) {
      $c.gus.cfAlertMsg($p, "채권매각시는 채권금액과 (가수금+처분손+수수료) 금액이 일치해야 합니다.");
      return false;
    }

    // 채권이나 수금쪽에 Check 여부 확인
    let intAccountReceivable = 0;
    let intCollectionOfMoney = 0;

    // 선택한 채권 금액을 구한다.
    for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
      if (ds_acctRecv.getCellData(i, "num") == "T") {
        intAccountReceivable++;
      }
    }

    // 선택한 어음 금액 및 수금항목중 어음을 선택했는지 여부를 확인한다.
    for (let i = 0; i < ds_collMoney.getRowCount(); i++) {
      if (ds_collMoney.getCellData(i, "num") == "T") {
        intCollectionOfMoney++;
      }
    }
    if (intAccountReceivable == 0) {
      $c.gus.cfAlertMsg($p, "채권 항목은 최소 1개이상 선택 하셔야 합니다.");
      return false;
    }
    if (intCollectionOfMoney == 0) {
      $c.gus.cfAlertMsg($p, "수금 항목은 최소 1개이상 선택 하셔야 합니다.");
      return false;
    }
    if (intAccountReceivable >= 2 && intCollectionOfMoney >= 2) {
      $c.gus.cfAlertMsg($p, "채권항목 수금항목중 한개의 항목은 1개만 선택 하셔야 합니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      ds_addCollMoney.setCellData(0, "clntNo", ed_sclntNo.getValue()); //거래처코드
      ds_addCollMoney.setCellData(0, "acctDeptCd", ed_sacctDeptCd.getValue()); //귀속부서코드
      ed_wrkDt.setValue(scwin.strToDate); // 추가내역 작업일자 초기
      $c.sbm.execute($p, sbm_saveAcctRecvCollMoney);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAcctRecvCollMoney_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Reset();
    scwin.f_Retrieve();
    scwin.f_Retrieve2();
  } catch (e) {
    console.log("sbm_saveAcctRecvCollMoney_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'table1',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:105px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'6',editTypeCode:'select',refDataCollection:'ds_searchAcctRecv',objTypeCode:'data',popupID:'',code:'clntNo',validExpCode:'',UpperFlagCode:'1',maxlengthName:'50',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',allowCharCode:'0-9',codeId:'ed_sclntNo',selectID:'retrieveClntList',validTitle:'거래처',objTypeName:'data',nameId:'ed_sclntNm',style:'',editTypeName:'select','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',class:'',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구일자 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'bilgFromDate',objTypeTo:'data',mandatoryTo:'true',refDataMap:'ds_searchAcctRecv',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',style:'',objTypeFrom:'data',id:'',refEdDt:'bilgToDate',titleFrom:'청구일자',titleTo:'청구일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구부서 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',refDataCollection:'ds_searchAcctRecv',objTypeCode:'data',popupID:'',code:'acctDeptCd',maxlengthName:'20',mandatoryName:'true',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',allowCharCode:'0-9',codeId:'ed_sacctDeptCd',selectID:'retrieveAcctDeptCdInfo',validTitle:'청구부서',objTypeName:'data',nameId:'ed_sacctDeptNm',style:'','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',class:'',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_InitObjects',style:'',id:'btn_init',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Retrieve',disabled:'',style:'',id:'btn_Retrieve',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'채권내역(대변)',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_acctRecv_oncellclick',readOnly:'true',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctRecv',resize:'true',style:'',columnMove:'true',autoFit:'lastColumn',id:'gr_acctRecv',visibleRowNum:'5',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'num',sortable:'false',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'mgntNo',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvOutbrDt',value:'청구일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'sellAcctDeptNm',value:'매출귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgAcctDeptNm',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amt',sortable:'false',value:'청구금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ramt',sortable:'false',value:'잔액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrc',sortable:'false',value:'청구금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ramtFcrc',sortable:'false',value:'잔액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',sortable:'false',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',sortable:'false',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'summary',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyIntendDt',value:'수금예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'cdEngNm',value:'통화코드Desc',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checknum',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',value:'채권번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'collMoneyAcctDeptCd',value:'청구(수금)귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgAcctDeptCd',value:'청구귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDeptCd',value:'매출귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{falseValue:'F',trueValue:'T',valueType:'other',width:'70',inputType:'checkbox',readOnly:'false',id:'num',checkAlways:'true',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',id:'mgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',displayFormat:'####/##/##',inputType:'text',id:'acctRecvOutbrDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'sellAcctDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'text',id:'bilgAcctDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',displayFormat:'#,##0',inputType:'text',id:'amt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',id:'ramt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',displayFormat:'#,##0',inputType:'text',id:'amtFcrc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',id:'ramtFcrc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',displayFormat:'#,###.#0',inputType:'text',id:'exchRt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',id:'summary',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyIntendDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'cdEngNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checknum',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bilgAcctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(원)',class:'req'}},{T:1,N:'xf:input',A:{maxlength:'20',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_selectAmt',placeholder:'',allowChar:'0-9',title:'선택금액(원)',class:'tar',objType:'key',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(외)',class:'req'}},{T:1,N:'xf:input',A:{maxlength:'20',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_selectAmtFcrc',placeholder:'',allowChar:'0-9',title:'선택금액(외)',class:'tar',objType:'key',mandatory:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'table2',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:105px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계정 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',ref:'data:ds_searchAcctRecv.collMoneyCntSht',editType:'select',style:'',disabled:'false',id:'acb_collMoneyCntSht',allOption:'',class:'form-control w150',searchTarget:'both',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가수금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'입금일자 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'collMoneyFromDate',objTypeTo:'data',mandatoryTo:'true',refDataMap:'ds_searchAcctRecv',edFromId:'ed_collMoneyFromDate',edToId:'ed_collMoneyToDate',mandatoryFrom:'true',style:'',objTypeFrom:'data',id:'',refEdDt:'collMoneyToDate',titleFrom:'입금일자',titleTo:'입금일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'통장명 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',editTypeCode:'select',refDataCollection:'ds_searchAcctRecv',popupID:'',code:'bankbookNo',validExpCode:'',UpperFlagCode:'1',maxlengthName:'20',mandatoryName:'false',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_Bankbook_onclickEvent',allowCharCode:'0-9',codeId:'ed_sbankbookCd',selectID:'retrieveBankBookCdInfo',validTitle:'통장명',objTypeName:'key',nameId:'ed_sbankbookNm',style:'',editTypeName:'select','ev:onblurNameEvent':'scwin.udc_Bankbook_onblurNameEvent',id:'udc_Bankbook','ev:onblurCodeEvent':'scwin.udc_Bankbook_onblurCodeEvent',class:'',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',btnId:'btn_Bankbook'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_InitObjects2',style:'',id:'btn_init2',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Retrieve2',disabled:'',style:'',id:'btn_Retrieve2',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'입금수단(차변)',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_collMoney_oncellclick',readOnly:'true',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_collMoney',resize:'true',style:'',columnMove:'true',autoFit:'lastColumn',id:'gr_collMoney',visibleRowNum:'5',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'num',sortable:'false',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checkNum',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'accountItem',value:'계정항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bankbookNm',value:'통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'susRecvInitamtOutbrDt',value:'입금일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'rcptrNm',value:'입금인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',value:'금액(원) ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'setlAmt',value:'정리금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'amtFcrc',value:'금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'setlAmtFcrc',value:'정리금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'gubun',value:'수금구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'billRecvKey',value:'수금정산용Key값',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'bankbookNo',value:'통장번호/어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'billRecvAcctCd',value:'어음상태코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{falseValue:'F',trueValue:'T',valueType:'other',width:'70',inputType:'checkbox',readOnly:'false',id:'num',checkAlways:'true',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checkNum',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'accountItem',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',id:'bankbookNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',displayFormat:'####/##/##',inputType:'text',id:'susRecvInitamtOutbrDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'text',id:'rcptrNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',id:'amt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',displayFormat:'#,##0',inputType:'text',id:'setlAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',displayFormat:'#,###.#0',inputType:'text',id:'amtFcrc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',displayFormat:'#,###.#0',inputType:'text',id:'setlAmtFcrc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',displayFormat:'###.##0',inputType:'text',id:'exchRt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'gubun',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'billRecvKey',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'bankbookNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'billRecvAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(원)',class:'req'}},{T:1,N:'xf:input',A:{maxlength:'20',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_selectAmtCollMoney',placeholder:'',allowChar:'0-9',title:'선택금액(원)',class:'tar',objType:'key',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택금액(외)',class:'req'}},{T:1,N:'xf:input',A:{maxlength:'20',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_selectAmtFcrcCollMoney',placeholder:'',allowChar:'0-9',title:'선택금액(외)',class:'tar',objType:'key',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_wrkDt',title:'작업일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_addCollMoney.wrkDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매각처 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_dispClntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_dispClntNm',id:'udc_dispClntNo',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_addCollMoney',code:'dispClntNo',selectID:'retrieveClntList',validTitle:'매각처',objTypeCode:'data',objTypeName:'key','ev:onblurCodeEvent':'scwin.udc_dispClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dispClntNo_onclickEvent',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'할인율 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_dispDcRt',title:'할인율',objType:'data',mandatory:'true',style:'width: 150px;',ref:'data:ds_addCollMoney.dispDcRt',allowChar:'0-9',dataType:'number',displayFormat:'###.#0',maxlength:'5'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'처분손',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_lostAmt',title:'처분손',objType:'data',mandatory:'true',style:'width: 150px;',ref:'data:ds_addCollMoney.lostAmt',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료(원) ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_commiSsionAmt',title:'수수료(원)',objType:'data',mandatory:'true',style:'width: 150px;',ref:'data:ds_addCollMoney.commiSsionAmt',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료(외)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_commiSsionAmtFcrc',title:'수수료(외)',objType:'data',mandatory:'true',style:'width: 150px;',ref:'data:ds_addCollMoney.commiSsionAmtFcrc',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매각등록'}]}]}]}]}]}]}]}]}]}]}]})