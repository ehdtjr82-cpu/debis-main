/*amd /ui/ac/fm/collmoneymgnt/billrecv/fm_504_06_01b.xml 52331 5619de79e7beafc63de8a217709ef1e61a8dac88a85042be6f3cbcdbfae4cb8c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBillRecvBdebt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dishoFromDate',name:'부도일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dishoToDate',name:'부도일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'수금부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountAmtBdebt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procAmt',name:'대손충당금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmis',name:'대손상각비',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billRecvBdebt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'받을어음계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldBillRecvStsCd',name:'이전받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'수취일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAmt',name:'어음금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtBankNm',name:'발행은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁은행거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidTrustBankbookNo',name:'히든수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'obankCheckYn',name:'타수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'수금부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchgBfBillRecvMgntNo',name:'교환전받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procAmt',name:'처리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procDt',name:'처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctRecvPatternCd',name:'관리채권유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctRecvAmt',name:'sellAcctRecvAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcRt',name:'할인율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvBfStsCd',name:'받을어음전상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcYn',name:'할인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchgBfBillRecvNo',name:'교환전받을어음번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchBillRecvBdebt',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveBillReceivableBadDebtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBillRecvBdebt","key":"IN_DS1"},{"id":"ds_billRecvBdebt","key":"OUT_DS1"},{"id":"ds_accountAmtBdebt","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billRecvBdebt","key":"OUT_DS1"},{"id":"ds_accountAmtBdebt","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBillRecvBdebt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBillRecvDisho',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_billRecvBdebt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBillRecvDisho_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 부도일자 기간을 구한다.
//-------------------------------------------------------------------------
scwin.strDishoFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strDishoToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.memJson = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// 로그인 정보 전역 변수를 선언
//-------------------------------------------------------------------------
scwin.G_acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.G_acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.G_empNo = $c.data.getMemInfo($p, "empNo");
scwin.G_empNm = $c.data.getMemInfo($p, "userNm");

//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.wrkNo = ""; // 작업구분코드
scwin.fromDate = ""; // 작업날짜

scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM014",
    compID: "acb_sbillRecvAcctCd,lc_billRecvAcctCd,gr_billRecvBdebt:billRecvAcctCd"
  }, {
    grpCd: "FM015",
    compID: "lc_billRecvStsCd,gr_billRecvBdebt:billRecvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //ASIS 히든,showfalse 그리드 필드정보
  /*gr_billRecvBdebt.setColumnVisible("acctDeptCd", false);
  gr_billRecvBdebt.setColumnVisible("billRecvMgntNo", false);
  gr_billRecvBdebt.setColumnVisible("procDt", false);
  gr_billRecvBdebt.setColumnVisible("slipDt", false);
  gr_billRecvBdebt.setColumnVisible("recDt", false);
  gr_billRecvBdebt.setColumnVisible("prtDt", false);
  gr_billRecvBdebt.setColumnVisible("clntNo", false);
  gr_billRecvBdebt.setColumnVisible("prtBankNm", false);
  gr_billRecvBdebt.setColumnVisible("trustBankbookNo", false);
  gr_billRecvBdebt.setColumnVisible("obankCheckYn", false);
  gr_billRecvBdebt.setColumnVisible("chgRsn", false);
  gr_billRecvBdebt.setColumnVisible("mgntEmpNo", false);
  gr_billRecvBdebt.setColumnVisible("exchgBfBillRecvNo", false);*/
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //공통코드재매핑.
  let dltStr = "dlt_commonCodeFM015"; // FM015 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFM015_1", true); // dlt_commonCodeFM015_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM015_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '20'"); // 새로운 데이터리스트에 필터 lc_sbillRecvStsCd GauceUtil.getCodeList("FM015",2,"20")

  acb_sbillRecvStsCd.setNodeSet("data:dlt_commonCodeFM015_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
  acb_sbillRecvStsCd.addItem("전체", "-3", "data:dlt_commonCodeFM015_1", 0);
  acb_sbillRecvAcctCd.setSelectedIndex(0);
  acb_sbillRecvStsCd.setSelectedIndex(0);
  ed_DishoFromDate.setValue(scwin.strDishoFromDate);
  ed_DishoToDate.setValue(scwin.strDishoToDate);
  $c.gus.cfDisableKey($p);
  ed_sacctDeptCd.setValue(scwin.G_acctDeptCd);
  ed_sacctDeptCd.hidVal = scwin.G_acctDeptCd;
  ed_sacctDeptNm.setValue(scwin.G_acctDeptNm);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_DishoFromDate.getValue(), ed_DishoToDate.getValue())) {
      await $c.win.alert($p, "조회 부도일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ed_DishoFromDate.focus();
      return false;
      ;
    }
    let ret = await $c.gus.cfValidate($p, [ed_DishoFromDate, ed_DishoToDate, ed_sacctDeptCd, ed_sclntNo]);
    if (!ret) {
      return false;
    }
    ds_billRecvBdebt.removeAll(); //정보삭제
    $c.sbm.execute($p, sbm_searchBillRecvBdebt);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBillRecvBdebt_submitdone = async function (e) {
  try {
    ed_slipDt.setValue(scwin.strDishoToDate);
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_billRecvBdebt.getRowCount()));
    if (ds_billRecvBdebt.getRowCount() == 0) {
      await $c.win.alert($p, MSG_CM_ERR_003);
    } else {
      scwin.gr_billRecvBdebt_onrowindexchange(0);
      $c.gus.cfGoPrevPosition($p, gr_billRecvBdebt, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchBillRecvDuet_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드정보와 입력정보 매핑
//-------------------------------------------------------------------------
scwin.gr_billRecvBdebt_onrowindexchange = function (rowIndex, oldRow) {
  ds_billRecvBdebt.setRowPosition(rowIndex);
};

//-------------------------------------------------------------------------
// 부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
//-------------------------------------------------------------------------
// 부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};
//-------------------------------------------------------------------------
// 부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    if (flag == "CD") {
      if (orgObjCd.getValue() == orgObjCd.hidVal) {
        return false;
      } else {
        orgObjNm.setValue("");
      }
    } else {
      if (orgObjNm.getValue() == orgObjNm.hidVal) {
        return false;
      } else {
        orgObjNm.setValue("");
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
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금부서 , 2:조회->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = '';
    let nm = '';

    // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
    // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
    // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
    if (flag != "SKIP") {
      if (flag == "ALL") {
        cd = "";
        nm = "";
      } else {
        cd = orgObjCd.getValue();
        nm = orgObjNm.getValue();
      }
    } else {
      cd = orgObjCd;
      nm = "";
    }
    switch (select_code) {
      // 조회조건용 수금부서
      case '1':
        //rtnList = rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',cd,nm,"T",null,null,null,null,",,,","450","500",null,null);  // 수금부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , cd // 화면에서의  Code Element의 Value
        , nm // 화면에서의  Name Element의 Value
        , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ",,," // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , "450" // POP-UP뛰을때 원도우의 사용자 정의 폭
        , "500" // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 조회조건용 거래처 PopUp 호출
      case '2':
        //rtnList = cfCommonPopUp('retrieveClntList',cd,nm,"T",null,null,null,null,null,null,null,null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의  Code Element의 Value
        , nm // 화면에서의  Name Element의 Value
        , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 부서 PopUp 콜백
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
      ed_sacctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 PopUp 콜백
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
      ed_sclntNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_sclntNo.setValue("");
      ed_sclntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  try {
    scwin.f_setWrkNoFromDate();
    let isClose = await udc_closeYn.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "N", '');
    // 마감작업 조회시 해당값이 없을경우 오류 발생
    if (isClose[0] == "DNF") {
      $c.gus.cfAlertMsg($p, "마감되었습니다.");
      return false;
    }

    // 선행마감 작업에 대한 검사
    if (isClose[3] == "PRE") {
      if (isClose[0] == "1") {
        $c.gus.cfAlertMsg($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
        return false;
      } else if (isClose[0] == "0") {
        $c.gus.cfAlertMsg($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
        return false;
      }
    }

    // 해당마감 작업에 대한 검사
    if (isClose[3] == "CUR") {
      if (isClose[0] == "0") {
        $c.gus.cfAlertMsg($p, isClose[2] + "(이)가 마감중입니다.");
        return false;
      } else if (isClose[0] == "2") {
        $c.gus.cfAlertMsg($p, isClose[2] + "(이)가 마감완료가 되었습니다");
        return false;
      } else {
        return true;
      }
    }
  } catch (e) {
    console.log("f_setWrkNoFromDate : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = function () {
  try {
    scwin.wrkNo = ACConstants.CLOSE_MONTH;
    scwin.fromDate = ed_slipDt.getValue().trim();
    scwin.fromDate = scwin.fromDate.substring(0, 6);
  } catch (e) {
    console.log("f_setWrkNoFromDate : " + e);
  }
};

//-------------------------------------------------------------------------
// 대손처리시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    let checkCount = 0;
    let i = 0;

    // 마감여부확인
    /*if (!scwin.f_JobCloseYN() ) {
        return false;
    }*/
    let jobCloseYN = await scwin.f_JobCloseYN();
    if (!jobCloseYN) {
      return false;
    }
    for (i = 0; i < ds_billRecvBdebt.getRowCount(); i++) {
      if (ds_billRecvBdebt.getCellData(i, "billRecvStsCd") != ACConstants.BILLRECV_DISHO && ds_billRecvBdebt.getCellData(i, "num") == "T") {
        await $c.win.alert($p, "상태가 부도 인것만 대손처리가 가능합니다.");
        ds_billRecvBdebt.setRowPosition(i);
        return false;
      }

      // Check 여부 카운트
      if (ds_billRecvBdebt.getCellData(i, "num") == "T") {
        checkCount++;
      } else {
        ds_billRecvBdebt.undoRow(i); //ds_billRecvBdebt.Undo(i);
      }
    }
    let ret = await $c.gus.cfValidate($p, [ed_slipDt]);
    if (!ret) {
      return false;
    }

    // 선택사항이 있는지 유무 검사
    if (checkCount == 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, "현재 선택하신 부도어음을 대손처리 하시겠습니까?")) {
      // 대손처리할 내역에 전표일자를 Setting한다.
      for (i = 0; i < ds_billRecvBdebt.getRowCount(); i++) {
        if (ds_billRecvBdebt.getCellData(i, "num") == "T") {
          ds_billRecvBdebt.setCellData(i, "slipDt", ed_slipDt.getValue());
        }
      }
      sbm_saveBillRecvDisho.action = "/ac.fm.collmoneymgnt.billrecv.ProcessBadDebtCMD.do";
      $c.sbm.execute($p, sbm_saveBillRecvDisho);
    }
  } catch (e) {
    console.log("f_Save" + e);
  }
};

//-------------------------------------------------------------------------
// 대손처리 취소시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_billRecvBdebt.getRowCount(); i++) {
      if (ds_billRecvBdebt.getCellData(i, "billRecvStsCd") != ACConstants.BILLRECV_BDEBT && ds_billRecvBdebt.getCellData(i, "num") == "T") {
        await $c.win.alert($p, "상태가 대손인것만 대손취소 처리가 가능합니다.");
        ds_billRecvBdebt.setRowPosition(i);
        return false;
      }

      // Check 여부 카운트
      if (ds_billRecvBdebt.getCellData(i, "num") == "T") {
        checkCount++;
      } else {
        ds_billRecvBdebt.undoRow(i); //ds_billRecvBdebt.Undo(i);
      }
    }
    let ret = await $c.gus.cfValidate($p, [ed_slipDt]);
    if (!ret) {
      return false;
    }

    // 선택사항이 있는지 유무 검사
    if (checkCount == 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, "현재 선택하신 대손어음을 대손취소 하시겠습니까?")) {
      sbm_saveBillRecvDisho.action = "/ac.fm.collmoneymgnt.billrecv.CancelBadDebtProcessCMD.do";
      $c.sbm.execute($p, sbm_saveBillRecvDisho);
    }
  } catch (e) {
    console.log("f_Cancel" + e);
  }
};

//-------------------------------------------------------------------------
// 대손처리/취소 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBillRecvDisho_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 그리드 클릭시
//-------------------------------------------------------------------------
scwin.gr_billRecvBdebt_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 전표번호 POPUP호출
  if (columnId == "procSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_billRecvBdebt.getCellData(rowIndex, "procSlipNo"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'청구부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',mandatoryName:'true',mandatoryCode:'true',maxlengthName:'50',refDataCollection:'ds_searchBillRecvBdebt',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sclntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_sclntNm',id:'udc_clntNo',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_searchBillRecvBdebt',code:'clntNo',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_sbillRecvAcctCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_searchBillRecvBdebt.billRecvAcctCd',disabled:'false',displayMode:'value delim label',searchTarget:'both',title:'계정코드'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부도일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchBillRecvBdebt',refEdDt:'dishoToDate',refStDt:'dishoFromDate',style:'',edFromId:'ed_DishoFromDate',edToId:'ed_DishoToDate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_sbillRecvStsCd',search:'start',style:'',submenuSize:'auto',allOption:'',ref:'data:ds_searchBillRecvBdebt.billRecvStsCd',disabled:'false',displayMode:'value delim label',searchTarget:'both'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_sbillRecvNo',style:'',maxlength:'20',ref:'data:ds_searchBillRecvBdebt.billRecvNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_billRecvBdebt',id:'gr_billRecvBdebt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_billRecvBdebt_onrowindexchange','ev:oncellclick':'scwin.gr_billRecvBdebt_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column23',value:'',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'수금부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'어음금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'만기일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'billRecvMgntNo',value:'어음관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'procDt',value:'처리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'recDt',value:'수취일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtDt',value:'발행일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prtBankNm',value:'발행은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'trustBankbookNo',value:'수탁은행거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'obankCheckYn ',value:'타수여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chgRsn',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntEmpNo',value:'관리사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'exchgBfBillRecvNo',value:'교환전받을어음번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'billRecvAcctCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'billRecvNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prtAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'remainAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dueDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'billRecvStsCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'procSlipNo',value:'',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'billRecvMgntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'procDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'recDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prtBankNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'trustBankbookNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'obankCheckYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chgRsn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntEmpNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'exchgBfBillRecvNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'prtAmt\')',textAlign:'right',displayFormat:'#,##0',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'remainAmt\')',textAlign:'right',displayFormat:'#,##0',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_slipDt',title:'전표일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'받을어음상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',id:'lc_billRecvStsCd',ref:'data:ds_billRecvBdebt.billRecvStsCd',objType:'key',mandatory:'true',style:'',submenuSize:'fixed',title:'받을어음상태',chooseOptionLabel:'$blank'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',id:'lc_billRecvAcctCd',ref:'data:ds_billRecvBdebt.billRecvAcctCd',objType:'key',mandatory:'true',style:'',submenuSize:'fixed',title:'받을어음상태',chooseOptionLabel:'$blank'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_billRecvNo',style:'width: 150px;',ref:'data:ds_billRecvBdebt.billRecvNo',objType:'key',mandatory:'true',maxByteLength:'20',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_txt_clntNo',ref:'data:ds_billRecvBdebt.clntNo',title:'거래처',style:'width: 80px;',mandatory:'true',objType:'key',maxlength:'6',allowChar:'0-9'}},{T:1,N:'xf:input',A:{id:'ed_txt_clntNm',ref:'data:ds_billRecvBdebt.clntNm',title:'거래처명',style:'width: 150px;',objType:'key',maxlength:'20'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행은행명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_prtBankNm',style:'',ref:'data:ds_billRecvBdebt.prtBankNm',objType:'key',maxByteLength:'30',maxlength:'30'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁은행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_txt_trustBankbookNo',ref:'data:ds_billRecvBdebt.trustBankbookNo',objType:'key',initValue:'수탁은행',style:'width: 80px;',maxlength:'6'}},{T:1,N:'xf:input',A:{id:'ed_txt_trustBankbookNm',ref:'data:ds_billRecvBdebt.trustBankbookNm',objType:'key',initValue:'수탁은행명',style:'width: 150px;'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_recDt',title:'수취일자',style:'',objType:'key',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_billRecvBdebt.recDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_prtDt',title:'발행일자',style:'',objType:'key',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_billRecvBdebt.prtDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_dueDt',title:'만기일자',style:'',objType:'key',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_billRecvBdebt.dueDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_prtAmt',title:'어음금액',objType:'key',mandatory:'true',style:'width: 150px;',ref:'data:ds_billRecvBdebt.prtAmt',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_remainAmt',title:'잔액',objType:'key',mandatory:'true',style:'width: 150px;',ref:'data:ds_billRecvBdebt.remainAmt',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대손충당금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_procAmt',title:'대손충당금',objType:'key',mandatory:'true',style:'width: 150px;',ref:'data:ds_billRecvBdebt.procAmt',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대손상각비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cmis',title:'대손상각비',objType:'key',mandatory:'true',style:'width: 150px;',ref:'data:ds_billRecvBdebt.cmis',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_txt_acctDeptCd',style:'width: 80px;',mandatory:'true',objType:'key',maxlength:'5'}},{T:1,N:'xf:input',A:{id:'ed_txt_acctDeptNm',style:'width: 150px;',objType:'key',maxlength:'20'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리사원',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_mgntEmpNm',style:'width: 150px;',objType:'key',maxlength:'15'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손처리'}]}]}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'visibility: hidden;',id:'udc_closeYn'}}]}]}]})