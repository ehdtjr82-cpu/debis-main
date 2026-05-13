/*amd /ui/ac/fm/fundemploy/borrmgnt/fm_201_01_02b.xml 68048 b82066be01f91d9a38f68cfc551062b6fe4f912bb6d52004d925a0c7d55674ea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrLedgNo',name:'차입번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'화면구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_borrow',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_borrow_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrLedgNo',name:'차입원장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrKndCd',name:'차입종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrKndNm',name:'차입종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'차입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prmsDt',name:'약정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'차입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ddCntCd',name:'일수코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcNm',name:'통화명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrExchRt',name:'차입환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prmsAmtFcrc',name:'약정금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrAmtFcrc',name:'차입금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrRamtFcrc',name:'차입잔액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prmsAmt',name:'약정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'차입금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'차입잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deferYyCnt',name:'거치년수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deferMmCnt',name:'거치월수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrDesc',name:'차입설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAcctCd',name:'차입계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'차입전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipDt',name:'차입전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cprRpayMmCnt',name:'원금상환월수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rpayAmt',name:'상환금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rpayAmtFcrc',name:'상환금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'firstRpayDt',name:'최초상환일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intPayMmCnt',name:'이자지급월수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'intPayMthdCd',name:'이자지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intClsCd',name:'이자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'금리',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'firstIntDt',name:'최초이자일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtDt',name:'보증일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtYmDdCnt',name:'보증년월일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'grtClntNo',name:'보증거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtClntNm',name:'보증거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtRpayMmCnt',name:'보증상환월수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'grtClsCd',name:'보증구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grtRt',name:'보증율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'intPayYmDdCnt',name:'이자지급년월일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'firstGrtDt',name:'최초보증일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certfNo',name:'증서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptBankbookNo',name:'입금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intAmt',name:'이자금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'intRtClsCd',name:'이자율수정구분코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dueDtClsCd',name:'만기일수정구분코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'grtRtClsCd',name:'보증율수정구분코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'intPayDtCalnCd',name:'이자지급일자계산방식코드(FM127)',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBorrow',action:'/ac.fm.fundemploy.borrmgnt.RetrieveBorrowingLedgerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_borrow","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_borrow","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBorrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBorrow',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_borrow","key":"IN_DS1"},{"id":"ds_borrow","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_borrow","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBorrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteBorrow',action:'/ac.fm.fundemploy.borrmgnt.ProcessBorrowingLedgerDeleteCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_borrow","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteBorrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.KRW = "KRW";
scwin.USD = "USD";
scwin.updateFlag = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM001",
    compID: "lc_borrKndCd",
    opt: {
      'range': '1,10'
    }
  }, {
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  }, {
    grpCd: "FM002",
    compID: "lc_intClsCd"
  }, {
    grpCd: "FM004",
    compID: "lc_grtClsCd"
  }, {
    grpCd: "FM047",
    compID: "lc_intPayMthdCd"
  }, {
    grpCd: "FM127",
    compID: "lc_intPayDtCalnCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  try {
    ed_intPayYmDdCnt.setValue("365");
    ed_grtYmDdCnt.setValue("365");
    lc_intClsCd.setValue("20");
    lc_intPayDtCalnCd.setValue("01");
    scwin.f_Create();
  } catch (e) {
    console.log("onUdcCompleted  : " + e);
  }
};

//-------------------------------------------------------------------------
// 신규 : 신규입력화면으로 초기화한다.
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  try {
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Delete]);
    ds_borrow.removeAll(); //정보초기화
    ds_borrow.insertRow(0);
    ds_borrow.setRowPosition(0);
    lc_crcCd.setValue("KRW"); //lc_crcCd.setSelectedIndex(0);//lc_crcCd.index = 0;

    ed_prmsDt.setValue(scwin.g_sCurrDate);
    ed_borrDt.setValue(scwin.g_sCurrDate);
    ed_intPayYmDdCnt.setValue("365");
    ed_grtYmDdCnt.setValue("365");
    lc_intClsCd.setValue("20");
    lc_intPayDtCalnCd.setValue("01");
    $c.gus.cfDisableObjects($p, [ed_txt_clntNm, ed_txt_acctNm, ed_txt_acctDeptNm, ed_txt_bankAcntNo, ed_txt_grtClntNm, ed_borrRamtFcrc, ed_borrRamt, ed_borrLedgNo]);
    ed_txt_borrSlipNo.setReadOnly(true);
    $c.gus.cfEnableObjects($p, [ed_firstRpayDt, ed_firstIntDt, ed_firstGrtDt, ed_borrSlipDt, ed_grtDt, ed_dueDt, ed_borrDt, ed_prmsDt, btn_borrClntNo, btn_acctDeptCd, btn_grtClntNo, btn_rcptBankbookNo, btn_acctCd]);
    scwin.lc_crcCd_onchange(); //
  } catch (e) {
    console.log("f_Create  : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openSlipNo = function (e) {
  let sSlipNo = ed_txt_borrSlipNo.getValue();
  if (!(sSlipNo == null || sSlipNo == "")) $c.gus.cfShowSlipInfo($p, sSlipNo);
};

//-------------------------------------------------------------------------
// 차임번호(조회) 찾기
//-------------------------------------------------------------------------
scwin.btn_srchBorrLedgNo_onclick = function (e) {
  scwin.f_openPopUp('2', ed_srchBorrLedgNo, null, 'F');
};
//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_borrClntNo, ed_txt_clntNm, '1');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_borrClntNo, ed_txt_clntNm, 'F');
};

//-------------------------------------------------------------------------
// 부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_txt_acctDeptNm, '3');
};

//-------------------------------------------------------------------------
// 부서코드찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_acctDeptCd, ed_txt_acctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 보증기관
//-------------------------------------------------------------------------
scwin.udc_grtClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_grtClntNo, ed_txt_grtClntNm, '11');
};

//-------------------------------------------------------------------------
// 보증기관찾기
//-------------------------------------------------------------------------
scwin.udc_grtClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('11', ed_grtClntNo, ed_txt_grtClntNm, 'F');
};

//-------------------------------------------------------------------------
// 계정과목
//-------------------------------------------------------------------------
scwin.udc_borrAcct_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_borrAcctCd, ed_txt_acctNm, '4');
};

//-------------------------------------------------------------------------
// 계정과목찾기
//-------------------------------------------------------------------------
scwin.udc_borrAcct_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_borrAcctCd, ed_txt_acctNm, 'F');
};

//-------------------------------------------------------------------------
// 입금통장
//-------------------------------------------------------------------------
scwin.udc_rcptBankbook_onblurCodeEvent = function (e) {
  scwin.f_CheckBankBookPopUp(ed_rcptBankbookNo, ed_txt_bankAcntNo);
};

//-------------------------------------------------------------------------
// 입금통장찾기
//-------------------------------------------------------------------------
scwin.udc_rcptBankbook_onclickEvent = function (e) {
  scwin.f_BankBookPopUp('F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      if (!(orgObjNm == null)) orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!(orgObjNm == null)) {
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
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = "";
    if (txtName == null) {
      name = "";
    } else {
      name = txtName.getValue();
    }
    switch (select_code) {
      // 차입기관 PopUp 호출
      case '1':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 차입기관
        udc_borrClntNo.setSelectId('retrieveBorrowingInst');
        udc_borrClntNo.cfCommonPopUp(scwin.udc_borrClntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      // 차입기관 PopUp 호출
      case '11':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 차입기관
        udc_grtClntNo.setSelectId('retrieveBorrowingInst');
        udc_grtClntNo.cfCommonPopUp(scwin.udc_grtClntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      //예적금번호 PopUp 호출  
      case '2':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 차입번호
        udc_comCodeGrid.setSelectId('retrieveBorrLedgNoInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_srchBorrLedgNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      //예적금번호 PopUp 호출  
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,null,null,null); // 관리부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      //부서 PopUp 호출  
      case '4':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 계정
        udc_borrAcct.setSelectId('retrieveAcctCdInfo');
        udc_borrAcct.cfCommonPopUp(scwin.udc_borrAcct_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_borrClntNo.setValue(rtnList[0]); // 코드
      ed_txt_clntNm.setValue(rtnList[1]); // 코드명
      ed_borrClntNo.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_borrClntNo.setValue("");
      ed_txt_clntNm.setValue("");
      ed_borrClntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_borrClntNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 보증기관 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_grtClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_grtClntNo.setValue(rtnList[0]); // 코드
      ed_txt_grtClntNm.setValue(rtnList[1]); // 코드명
      ed_grtClntNo.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_grtClntNo.setValue("");
      ed_txt_grtClntNm.setValue("");
      ed_grtClntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_grtClntNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 차입번호 팝업 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_srchBorrLedgNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_srchBorrLedgNo.setValue(rtnList[0]); // 코드
      ed_srchBorrLedgNo.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_srchBorrLedgNo.setValue("");
      ed_srchBorrLedgNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_srchBorrLedgNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 부서코드 팝업 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_acctDeptCd.setValue(rtnList[0]); // 코드
      ed_txt_acctDeptNm.setValue(rtnList[1]); // 코드명
      ed_acctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_acctDeptCd.setValue("");
      ed_txt_acctDeptNm.setValue("");
      ed_acctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 계정과목 팝업 콜백(5)
//-------------------------------------------------------------------------
scwin.udc_borrAcct_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_borrAcctCd.setValue(rtnList[0]); // 코드
      ed_txt_acctNm.setValue(rtnList[1]); // 코드명
      ed_borrAcctCd.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_borrAcctCd.setValue("");
      ed_txt_acctNm.setValue("");
      ed_borrAcctCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_borrAcct_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckBankBookPopUp = function (orgObjCd, orgObjNm) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_BankBookPopUp("T");
    } else {
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckBankBookPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 출금 통장조회 POPUP호출.
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = function (sFlag) {
  try {
    let i_bankbookno = ed_rcptBankbookNo.getValue();
    i_bankbookno = i_bankbookno.trim();

    //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',i_bankbookno,'',sFlag,null,null,null,null,null,null,null,null,null); // 거래처
    udc_rcptBankbook.setSelectId('retrieveBankBookCdInfo');
    udc_rcptBankbook.cfCommonPopUp(scwin.udc_rcptBankbook_callBackFunc // 콜백 함수
    , i_bankbookno // 화면에서의 ??? Code Element의 Value
    , '' // 화면에서의 ??? Name Element의 Value
    , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
  } catch (e) {
    console.log("f_BankBookPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 입금통장 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_rcptBankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      ed_rcptBankbookNo.setValue(rtnList[0]); //통장번호
      ed_txt_bankAcntNo.setValue(rtnList[4]); // 계좌번호
      ed_rcptBankbookNo.hidVal = rtnList[0];
    } else {
      ed_rcptBankbookNo.setValue(""); //통장번호
      ed_txt_bankAcntNo.setValue(""); // 계좌번호
      ed_rcptBankbookNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_rcptBankbook_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_borrLedgNo]);
    if (!ret) {
      return false;
    }
    ds_condition.set("borrLedgNo", ed_srchBorrLedgNo.getValue());
    ds_condition.set("scClsCd", 1);
    $c.sbm.execute($p, sbm_retrieveBorrow);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveBorrow_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_borrow.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      ds_borrow.setRowPosition(0); //조회기본정보설정
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableObjects($p, [ed_firstRpayDt, ed_firstIntDt, ed_firstGrtDt, ed_borrSlipDt, ed_grtDt, ed_dueDt, ed_borrDt, ed_prmsDt, btn_borrClntNo, btn_acctDeptCd, btn_grtClntNo, btn_rcptBankbookNo, ed_borrRamt, ed_borrRamtFcrc, btn_acctCd]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfDisableBtn($p, [btn_Save]);
    }
  } catch (e) {
    console.log("sbm_retrieveBorrow_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 통화코드 선택시
//-------------------------------------------------------------------------
scwin.lc_crcCd_onchange = function (info) {
  try {
    if (lc_crcCd.getValue() == "KRW") {
      ds_borrow.setCellData(0, "borrAmtFcrc", "0");
      ds_borrow.setCellData(0, "borrExchRt", "0");
      ds_borrow.setCellData(0, "stdExchRt", "0");
      $c.gus.cfDisableObjects($p, [ed_prmsAmtFcrc, ed_borrAmtFcrc, ed_borrRamtFcrc, ed_stdExchRt, ed_borrExchRt, ed_borrRamt]);
      $c.gus.cfEnableObjects($p, [ed_prmsAmt, ed_borrAmt]);
    } else {
      ds_borrow.setCellData(0, "prmsAmt", "0");
      ds_borrow.setCellData(0, "borrAmt", "0");
      $c.gus.cfEnableObjects($p, [ed_prmsAmtFcrc, ed_borrAmtFcrc, ed_borrRamtFcrc, ed_stdExchRt, ed_borrExchRt]);
      $c.gus.cfDisableObjects($p, [ed_prmsAmt, ed_borrAmt, ed_borrRamt, ed_borrRamtFcrc]);
    }
  } catch (e) {
    console.log("lc_crcCd_onchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 데이터셋 정보 변경시 ASIS : for=ds_borrow event=OnColumnChanged
//-------------------------------------------------------------------------
scwin.ds_borrow_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let sBorrDt = ds_borrow.getCellData(0, "borrDt");
    let sDueDt = ds_borrow.getCellData(0, "dueDt");
    let sPrmsDt = ds_borrow.getCellData(0, "prmsDt");
    if (colid == "dueDt") {
      if (sDueDt.length == 8) {
        if (sDueDt < sBorrDt) {
          $c.win.alert($p, "만기일이 차입일보다 작을 수 없습니다.");
          ds_borrow.setCellData(0, "dueDt", "");
          return false;
        }
        if (sDueDt < sPrmsDt) {
          $c.win.alert($p, "만기일이 차입일보다 작을 수 없습니다.");
          ds_borrow.setCellData(0, "dueDt", "");
          return false;
        }
      }
    } else if (colid == "stdExchRt") {
      ds_borrow.setCellData(0, "prmsAmt", ds_borrow.getCellData(0, "prmsAmtFcrc") * ds_borrow.getCellData(0, "stdExchRt"));
      ds_borrow.setCellData(0, "borrAmt", ds_borrow.getCellData(0, "borrAmtFcrc") * ds_borrow.getCellData(0, "stdExchRt"));
    } else if (colid == "prmsAmtFcrc") {
      ds_borrow.setCellData(0, "prmsAmt", ds_borrow.getCellData(0, "prmsAmtFcrc") * ds_borrow.getCellData(0, "stdExchRt"));
      ds_borrow.setCellData(0, "borrAmt", ds_borrow.getCellData(0, "borrAmtFcrc") * ds_borrow.getCellData(0, "stdExchRt"));
    } else if (colid == "borrAmtFcrc") {
      ds_borrow.setCellData(0, "prmsAmt", ds_borrow.getCellData(0, "prmsAmtFcrc") * ds_borrow.getCellData(0, "stdExchRt"));
      ds_borrow.setCellData(0, "borrAmt", ds_borrow.getCellData(0, "borrAmtFcrc") * ds_borrow.getCellData(0, "stdExchRt"));
    }
  } catch (e) {
    console.log("ds_borrow_oncelldatachange : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 :
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    if (ds_borrow.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "차입원장등록"));
      return false;
    }

    //부서명 check
    let ret = await $c.gus.cfValidate($p, [ed_borrClntNo, lc_borrKndCd, ed_acctDeptCd, ed_rcptBankbookNo, ed_prmsDt, ed_borrAmt]);
    if (!ret) {
      return false;
    }
    //notAllowed=0 처리 추가
    if (ed_borrAmt.getValue() == "0") {
      //차입원화
      await $c.gus.cfAlertMsg($p, "차입원화은(는) 다음 문자가 올 수 없습니다. 0");
      ed_borrAmt.focus();
      return false;
    }
    if (ed_prmsAmt.getValue() == "0") {
      //약정원화
      await $c.gus.cfAlertMsg($p, "약정원화은(는) 다음 문자가 올 수 없습니다. 0");
      ed_prmsAmt.focus();
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_prmsAmt, ed_borrSlipDt, ed_dueDt]);
    if (!ret2) {
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      if (ds_borrow.getRowStatus(ds_borrow.getRowPosition()) == "C") {
        ds_borrow.setCellData(0, "regDtm", scwin.g_sCurrDate);
        ds_borrow.setCellData(0, "modDtm", scwin.g_sCurrDate);
        scwin.updateFlag = 0;
        sbm_saveBorrow.action = "/ac.fm.fundemploy.borrmgnt.ProcessBorrowingLedgerRegistCMD.do";
      } else if (ds_borrow.getRowStatus(ds_borrow.getRowPosition()) == "U") {
        if (ds_borrow.getOriginalCellData(ds_borrow.getRowPosition(), "intRt") != ds_borrow.getCellData(ds_borrow.getRowPosition(), "intRt")) {
          ds_borrow.setCellData(ds_borrow.getRowPosition(), "intRtClsCd", 1);
        } else {
          ds_borrow.setCellData(ds_borrow.getRowPosition(), "intRtClsCd", 0);
        }
        if (ds_borrow.getOriginalCellData(ds_borrow.getRowPosition(), "grtRt") != ds_borrow.getCellData(ds_borrow.getRowPosition(), "grtRt")) {
          ds_borrow.setCellData(ds_borrow.getRowPosition(), "grtRtClsCd", 1);
        } else {
          ds_borrow.setCellData(ds_borrow.getRowPosition(), "grtRtClsCd", 0);
        }
        if (ds_borrow.getOriginalCellData(ds_borrow.getRowPosition(), "dueDt") != ds_borrow.getCellData(ds_borrow.getRowPosition(), "dueDt")) {
          ds_borrow.setCellData(ds_borrow.getRowPosition(), "dueDtClsCd", 1);
        } else {
          ds_borrow.setCellData(ds_borrow.getRowPosition(), "dueDtClsCd", 0);
        }
        scwin.updateFlag = 1;
        sbm_saveBorrow.action = "/ac.fm.fundemploy.borrmgnt.UpdateBorrowingLedgerCMD.do";
      }
      $c.sbm.execute($p, sbm_saveBorrow);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBorrow_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    //scwin.f_Retrieve();
    if (scwin.updateFlag == 0) {
      $c.gus.cfAlertMsg($p, ds_borrow.getCellData(0, "borrLedgNo") + "번으로 등록되었습니다.");
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    }
    ds_borrow.setRowPosition(0); //저장하고 받은정보로 화면설정을 처리한다.
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Save]);
  } catch (e) {
    console.log("sbm_saveBorrow_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 수정 :
//-------------------------------------------------------------------------
scwin.f_Update = function (e) {
  try {
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableBtn($p, [btn_Update]);
    if (!(ds_borrow.getCellData(ds_borrow.getRowPosition(), "borrLedgNo") == null || ds_borrow.getCellData(ds_borrow.getRowPosition(), "borrLedgNo") == "")) {
      $c.gus.cfDisableObjects($p, [ed_borrClntNo, ed_txt_clntNm, lc_borrKndCd, ed_txt_acctNm, ed_acctDeptCd, ed_txt_acctDeptNm, ed_rcptBankbookNo, ed_prmsDt, ed_prmsAmt, ed_prmsAmtFcrc, ed_borrDt, ed_borrAmt, ed_borrAmtFcrc, ed_borrRamt, ed_borrRamtFcrc, lc_crcCd, ed_stdExchRt, ed_borrSlipDt, ed_borrDt, ed_borrSlipDt, ed_txt_bankAcntNo, ed_borrLedgNo]);
      $c.gus.cfEnableObjects($p, [ed_grtDt, ed_dueDt, btn_grtClntNo]);
    } else {
      $c.win.alert($p, "수정할 자료가 없습니다");
      return false;
    }
  } catch (e) {
    console.log("f_Update : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제 : 조회된 데이터를 삭제요청한다.
//-------------------------------------------------------------------------
scwin.f_Delete = async function (info) {
  try {
    if (ds_borrow.getRowCount() == 0 || ds_borrow.getRowStatus(0) == "C") {
      $c.win.alert($p, "조회후 삭제가능합니다.");
      return false;
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
        ds_borrow.deleteRow(ds_borrow.getRowPosition()); //ds_borrow.UserStatus(ds_borrow.RowPosition)=2;
        $c.sbm.execute($p, sbm_deleteBorrow);
      }
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제 콜백
//-------------------------------------------------------------------------
scwin.sbm_deleteBorrow_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_004);
    $c.gus.cfDisableKeyData($p);
    scwin.f_Create();
  } catch (e) {
    console.log("sbm_deleteBorrow_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차입번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_srchBorrLedgNo',style:'width: 150px;',maxlength:'5',allowChar:'0-9',mandatory:'true',title:'차입번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_srchBorrLedgNo',style:'',type:'button','ev:onclick':'scwin.btn_srchBorrLedgNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차입번호'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_borrClntNo',nameId:'ed_txt_clntNm',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',id:'udc_borrClntNo',editTypeName:'select',maxlengthName:'50',name:'clntNm',refDataCollection:'ds_borrow',code:'borrClntNo',mandatoryCode:'true',selectID:'retrieveBorrowingInst',validTitle:'거래처',objTypeCode:'data',btnId:'btn_borrClntNo','ev:onblurCodeEvent':'scwin.udc_borrClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_borrClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차입종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',ref:'data:ds_borrow.borrKndCd',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_borrKndCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',mandatory:'true',chooseOptionLabel:'$blank',title:'차입종류'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정과목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_borrAcctCd',nameId:'ed_txt_acctNm',validExpCode:'',maxlengthCode:'7',editTypeCode:'select',id:'udc_borrAcct',editTypeName:'select',maxlengthName:'50',name:'acctNm',refDataCollection:'ds_borrow',code:'borrAcctCd',selectID:'retrieveAcctCdInfo',validTitle:'계정과목',objTypeCode:'data',objTypeName:'data',btnId:'btn_acctCd','ev:onblurCodeEvent':'scwin.udc_borrAcct_onblurCodeEvent','ev:onclickEvent':'scwin.udc_borrAcct_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_txt_acctDeptNm',validExpCode:'',maxlengthCode:'5',editTypeCode:'select',id:'udc_acctDeptCd',editTypeName:'select',maxlengthName:'50',name:'acctDeptNm',refDataCollection:'ds_borrow',code:'acctDeptCd',selectID:'retrieveAcctDeptCdInfo',validTitle:'부서코드',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',btnId:'btn_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_rcptBankbookNo',nameId:'ed_txt_bankAcntNo',validExpCode:'',maxlengthCode:'5',editTypeCode:'select',id:'udc_rcptBankbook',editTypeName:'select',maxlengthName:'50',name:'bankAcntNo',refDataCollection:'ds_borrow',code:'rcptBankbookNo',selectID:'retrieveBankBookCdInfo',validTitle:'입금통장',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',btnId:'btn_rcptBankbookNo','ev:onblurCodeEvent':'scwin.udc_rcptBankbook_onblurCodeEvent','ev:onclickEvent':'scwin.udc_rcptBankbook_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_certfNo',style:'width: 200px;',objType:'data',title:'증서번호'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'약정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_prmsDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'약정일',ref:'data:ds_borrow.prmsDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'약정원화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_prmsAmt',class:'tar',objType:'data',mandatory:'true',displayFormat:'#,##0',dataType:'number',maxlength:'13',title:'약정원화',ref:'data:ds_borrow.prmsAmt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'약정외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_prmsAmtFcrc',style:'width: 200px;',displayFormat:'#,##0.##',objType:'data',dataType:'number',maxlength:'15',title:'약정외화',ref:'data:ds_borrow.prmsAmtFcrc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차입일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_borrDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'차입일',ref:'data:ds_borrow.borrDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차입원화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_borrAmt',class:'tar',mandatory:'true',objType:'data',displayFormat:'#,##0',dataType:'number',maxlength:'13',title:'차입원화',ref:'data:ds_borrow.borrAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrAmtFcrc',style:'width: 200px;',displayFormat:'#,##0.##',objType:'data',dataType:'number',maxlength:'15',title:'차입외화',ref:'data:ds_borrow.borrAmtFcrc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_dueDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'만기일',ref:'data:ds_borrow.dueDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔액원화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_borrRamt',class:'tar',objType:'data',displayFormat:'#,##0',dataType:'number',maxlength:'13',title:'잔액원화',ref:'data:ds_borrow.borrRamt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔액외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrRamtFcrc',style:'width: 200px;',displayFormat:'#,##0.##',objType:'data',dataType:'number',maxlength:'15',title:'잔액외화',ref:'data:ds_borrow.borrRamtFcrc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',ref:'data:ds_borrow.crcCd',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'width: 150px;',submenuSize:'fixed',objType:'data','ev:onchange':'scwin.lc_crcCd_onchange'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_stdExchRt',style:'width: 200px;',displayFormat:'#,##0.####',objType:'data',dataType:'number',maxlength:'9',title:'기준환율',ref:'data:ds_borrow.stdExchRt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrExchRt',style:'width: 200px;',displayFormat:'#,##0.####',objType:'data',dataType:'number',maxlength:'9',title:'차입환율',ref:'data:ds_borrow.borrExchRt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_grtDt',class:'',calendarValueType:'yearMonthDate',objType:'data',title:'보증일자',ref:'data:ds_borrow.grtDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증기관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_grtClntNo',nameId:'ed_txt_grtClntNm',validExpCode:'',maxlengthCode:'6',editTypeCode:'select',id:'udc_grtClntNo',editTypeName:'select',maxlengthName:'50',name:'grtClntNm',refDataCollection:'ds_borrow',code:'grtClntNo',selectID:'retrieveBorrowingInst',validTitle:'보증기관',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',btnId:'btn_grtClntNo','ev:onblurCodeEvent':'scwin.udc_grtClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_grtClntNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거치기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_deferYyCnt',class:'tar',objType:'data',dataType:'number',maxlength:'2',title:'거치기간',ref:'data:ds_borrow.deferYyCnt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'년',class:''}},{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_deferMmCnt',class:'tar',objType:'data',dataType:'number',maxlength:'2',title:'거치기간',ref:'data:ds_borrow.deferMmCnt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'월',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_borrSlipDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'전표일자',ref:'data:ds_borrow.borrSlipDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'underline txt-blue',id:'ed_txt_borrSlipNo',style:'width: 200px;','ev:onclick':'scwin.f_openSlipNo',ref:'data:ds_borrow.borrSlipNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_borrLedgNo',class:'tar',objType:'data',dataType:'number',maxlength:'5',title:'차입번호',ref:'data:ds_borrow.borrLedgNo'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'}},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원금상환 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'이자지급 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보증료 ',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상환기간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cprRpayMmCnt',style:'width:80px;',allowChar:'0-9',dataType:'number',maxlength:'2',ref:'data:ds_borrow.cprRpayMmCnt',title:'상환기간',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개월',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_intPayMmCnt',style:'width:80px;',allowChar:'0-9',dataType:'number',maxlength:'2',ref:'data:ds_borrow.intPayMmCnt',title:'지급기간',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개월',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_grtRpayMmCnt',style:'width:80px;',allowChar:'0-9',dataType:'number',maxlength:'2',ref:'data:ds_borrow.grtRpayMmCnt',title:'지급기간',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개월',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원화',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_rpayAmt',class:'tar',objType:'data',displayFormat:'#,##0',dataType:'number',maxlength:'13',title:'원화',ref:'data:ds_borrow.rpayAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',ref:'data:ds_borrow.intClsCd',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_intClsCd',style:'width: 100px;',submenuSize:'fixed',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',ref:'data:ds_borrow.grtClsCd',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_grtClsCd',style:'width: 100px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'$blank'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_rpayAmtFcrc',style:'width: 200px;',displayFormat:'#,##0.##',objType:'data',dataType:'float',maxlength:'15.2',title:'외화',ref:'data:ds_borrow.rpayAmtFcrc',allowChar:'0-9.'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금리구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',ref:'data:ds_borrow.intPayMthdCd',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_intPayMthdCd',style:'width: 120px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'$blank'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이율/보증율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_intRt',style:'width: 100px;',title:'이율/보증율',maxlength:'7',allowChar:'0123456789.',dataType:'number',objType:'data',ref:'data:ds_borrow.intRt'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_grtRt',style:'width: 100px;',title:'이율/보증율',maxlength:'7',allowChar:'0123456789.',dataType:'number',objType:'data',ref:'data:ds_borrow.grtRt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월일수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_intPayYmDdCnt',style:'width: 100px;',title:'년월일수',maxlength:'3',allowChar:'0-9',dataType:'number',objType:'data',ref:'data:ds_borrow.intPayYmDdCnt'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_grtYmDdCnt',style:'width: 100px;',title:'년월일수',maxlength:'3',allowChar:'0-9',dataType:'number',objType:'data',ref:'data:ds_borrow.grtYmDdCnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_firstRpayDt',class:'',calendarValueType:'yearMonthDate',objType:'data',title:'최초일자',ref:'data:ds_borrow.firstRpayDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_firstIntDt',class:'',calendarValueType:'yearMonthDate',objType:'data',title:'최초일자',ref:'data:ds_borrow.firstIntDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_firstGrtDt',class:'',calendarValueType:'yearMonthDate',objType:'data',title:'최초일자',ref:'data:ds_borrow.firstGrtDt',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일자계산방식',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_intPayDtCalnCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:ds_borrow.intPayDtCalnCd'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})