/*amd /ui/ac/fm/collmoneymgnt/billrecv/fm_504_02_01b.xml 54890 c8bb45cbc37c5b52bb05e4c6cb2fd39e6410ae3b91b11cfce7563637bcda38c1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBillRecvDue'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'만기예정일자 시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'만기예정일자 종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'trustBankbookNo',name:'수탁통장번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billRecvDue',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_billRecvDue_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'num',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'checkNum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgBillRecvNo',name:'원본받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'받을어음계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldBillRecvStsCd',name:'이전받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'수취일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcClntNo',name:'할인거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcClntNm',name:'할인거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAmt',name:'발행금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtBankNm',name:'발행은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidTrustBankbookNo',name:'히든수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'obankCheckYn',name:'타수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'변경사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchgBfBillRecvMgntNo',name:'교환전받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procAmt',name:'처리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procSlipNo',name:'처리전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procDt',name:'처리 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctRecvPatternCd',name:'관리채권유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctRecvAmt',name:'sellAcctRecvAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcRt',name:'할인율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvBfStsCd',name:'받을어음전상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcRcptAmt',name:'할인입금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcRcptBankbookNo',name:'할인입금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcRcptBankbookNm',name:'할인입금통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoRegYn',name:'자동등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcYn',name:'할인여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payInterest',name:'결제이자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'feYn',name:'여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfBillRecvMgntNo',name:'이전받을어음관리번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchBillRecvDue',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveBillReceivableCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBillRecvDue","key":"IN_DS1"},{"id":"ds_billRecvDue","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_billRecvDue","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBillRecvDuet_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBillRecvDue',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_billRecvDue","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBillRecvDue_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 만기예정일자 기간을 구한다.
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

//-------------------------------------------------------------------------
// 전역변수 선언
//--------------------------------------------------------------------fm_301_03_03b-----
scwin, wrkNo = ""; // 작업구분코드
scwin, fromDate = ""; // 작업날짜
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
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  /*
     f_Header();
  cfDisableKey();
  f_setCompanyInfo(); 
  lc_billRecvAcctCd.Index = 0;
  ed_FromDate.Text = "<%=strFromDate%>";
  ed_ToDate.Text = "<%=strToDate%>";
  ed_slipDt.Text = "<%=strToDate%>";
  ds_searchBillRecvDue.NameValue(1,"billRecvStsCd") = -1; 
     */
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM014",
    compID: "lc_billRecvAcctCd,gr_billRecvDue:billRecvAcctCd"
  }, {
    grpCd: "FM015",
    compID: "gr_billRecvDue:billRecvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
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
  , ed_coCd.getValue() // 화면에서의  Code Element의 Value
  , ed_coNm.getValue() // 화면에서의  Name Element의 Value
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
      ed_coCd.setValue(""); // 코드
      ed_coNm.setValue(""); // 회사명
      ed_coCd.hidVal = "";
      scwin.txtCoClsCd = ""; // 회사구분    
    }
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
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
    lc_billRecvAcctCd.setSelectedIndex(0);
    ed_FromDate.setValue(scwin.strFromDate);
    ed_ToDate.setValue(scwin.strToDate);
    ed_slipDt.setValue(scwin.strToDate);
    ds_searchBillRecvDue.set("billRecvStsCd", -1);
  } catch (e) {
    console.log("udc_coCd_callBackFunc" + e);
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
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      await $c.win.alert($p, "조회 만기일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_FromDate]);
    if (!ret2) {
      return false;
    }
    let ret3 = await $c.gus.cfValidate($p, [ed_ToDate]);
    if (!ret2) {
      return false;
    }
    ed_cmis.setValue("0");
    ed_dueAmt.setValue("0");
    const params = {
      coClsCd: scwin.txtCoClsCd
    };
    //데이터셋에 정보설정
    ds_searchBillRecvDue.setJSON(params);
    ds_billRecvDue.removeAll(); //정보삭제
    $c.sbm.execute($p, sbm_searchBillRecvDue);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBillRecvDuet_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_billRecvDue.getRowCount()));
    if (ds_billRecvDue.getRowCount() == 0) {
      await $c.win.alert($p, MSG_CM_ERR_003);
      $c.gus.cfEnableObjects($p, [btn_Upt, btn_Add]);
    } else {
      if (ds_searchBillRecvDue.get("billRecvStsCd") == "-1") {
        $c.gus.cfDisableObjects($p, [btn_Upt, btn_Add]);
      } else if (ds_searchBillRecvDue.get("billRecvStsCd") == "40") {
        $c.gus.cfEnableObjects($p, [btn_Upt]);
        $c.gus.cfDisableObjects($p, [btn_Add]);
      } else if (ds_searchBillRecvDue.get("billRecvStsCd") == "-4") {
        $c.gus.cfDisableObjects($p, [btn_Upt]);
        $c.gus.cfEnableObjects($p, [btn_Add]);
      }
      $c.gus.cfGoPrevPosition($p, gr_billRecvDue, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchBillRecvDuet_submitdone : " + e);
  }
};
scwin.f_initObj = function () {};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_billRecvDue.getRowCount() <= 0) {
    await $c.win.alert($p, "받을어음만기처리내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "받을어음만기처리.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "받을어음만기처리" //엑셀내 시트명 지정필요시
    ,

    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_billRecvDue, options, infoArr);
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  try {
    scwin.f_setWrkNoFromDate();

    //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
    let isClose = await udc_closeYn.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "N", ed_coCd.getValue());
    console.log("마감체크 : " + isClose);

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
    console.log("f_JobCloseYN : " + e);
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
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 그리드 클릭시
//-------------------------------------------------------------------------
scwin.gr_billRecvDue_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    let Colid = columnId;
    if (ds_billRecvDue.getCellData(rowIndex, "billRecvStsCd") == ACConstants.BILLRECV_CLOSE) {
      //만기 40
      gr_billRecvDue.setReadOnly("cell", rowIndex, "cmis", true); //gr_billRecvDue.ColumnProp("cmis","Edit")="None";
      gr_billRecvDue.setReadOnly("cell", rowIndex, "trustBankbookNo", true); //gr_billRecvDue.ColumnProp("trustBankbookNo",'Edit')="None";
    } else if (ds_billRecvDue.getCellData(rowIndex, "billRecvStsCd") == ACConstants.BILLRECV_DRAFT_DC) {
      //할인 60
      gr_billRecvDue.setReadOnly("cell", rowIndex, "cmis", true); //gr_billRecvDue.ColumnProp("cmis","Edit")="None";
      gr_billRecvDue.setReadOnly("cell", rowIndex, "trustBankbookNo", false); //gr_billRecvDue.ColumnProp("trustBankbookNo",'Edit')="Numeric";
    } else if (ds_billRecvDue.getCellData(rowIndex, "billRecvStsCd") == ACConstants.BILLRECV_DUE) {
      //30 수금
      //BILLRECV_ELEC_BILLRECV : 20 어음종류-전자어음
      if (ds_billRecvDue.getCellData(rowIndex, "billRecvAcctCd") == ACConstants.BILLRECV_ELEC_BILLRECV || ds_billRecvDue.getCellData(rowIndex, "billRecvAcctCd") == "25") {
        gr_billRecvDue.setReadOnly("cell", rowIndex, "cmis", false); //gr_billRecvDue.ColumnProp("cmis","Edit")="Any";
      } else {
        gr_billRecvDue.setReadOnly("cell", rowIndex, "cmis", true); //gr_billRecvDue.ColumnProp("cmis","Edit")="None";
      }
      gr_billRecvDue.setReadOnly("cell", rowIndex, "trustBankbookNo", false); //gr_billRecvDue.ColumnProp("trustBankbookNo",'Edit')="Numeric";
    }
    if (rowIndex >= 0) {
      // 전표번호 POPUP호출
      if (Colid == "procSlipNo") {
        $c.gus.cfShowSlipInfo($p, ds_billRecvDue.getCellData(rowIndex, "procSlipNo"));
      }
    }
  } catch (e) {
    console.log("gr_billRecvDue_oncellclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드에서 통장번호 조회시 popup
//-------------------------------------------------------------------------
scwin.gr_billRecvDue_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    //TOBE 팝업선택이 그리드에 가능하여 팝업호출 가능여부를 제어
    if (ds_billRecvDue.getCellData(rowIndex, "billRecvStsCd") == ACConstants.BILLRECV_CLOSE) {
      //만기 40
      return false;
    } else if (ds_billRecvDue.getCellData(rowIndex, "billRecvStsCd") == ACConstants.BILLRECV_DRAFT_DC) {//할인 60
      //입금 통장조회 팝업처리 가능 
    } else if (ds_billRecvDue.getCellData(rowIndex, "billRecvStsCd") == ACConstants.BILLRECV_DUE) {//30 수금
      //입금 통장조회 팝업처리 가능
    } else {
      return false;
    }
    scwin.ontextimageclick = "Y";
    scwin.f_BankBookPopUpDeposit(rowIndex, columnIndex);
  } catch (e) {
    console.log("gr_billRecvDue_ontextimageclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 입금 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUpDeposit = function (rowIndex, columnIndex) {
  try {
    //ASIS f_BankBookPopUpDeposit 처리부
    let colid = gr_billRecvDue.getColumnID(columnIndex);
    let pCocd = ds_billRecvDue.getCellData(rowIndex, "coCd");
    if (pCocd == "") pCocd = ed_coCd.getValue();
    let i_bankbookno = ds_billRecvDue.getCellData(rowIndex, "trustBankbookNo");
    if (colid == "trustBankbookNo") {
      console.log("scwin.ontextimageclick :" + scwin.ontextimageclick);

      //ASIS blur 값이 있을때만 처리하는 부분 위치 변경
      if (scwin.ontextimageclick == "N" && ds_billRecvDue.getCellData(rowIndex, "trustBankbookNo").trim() == "") {
        return false;
      }
      //ontextimageclick일 경우 2개의 이벤트가 동시에 뜨게되어 1개는 처리하지 않도록 함.
      if (scwin.ontextimageclick == "Y") {
        return false;
      }
      ds_billRecvDue.setCellData(rowIndex, "trustBankbookNo", ""); //통장번호
      ds_billRecvDue.setCellData(rowIndex, "trustBankbookNm", ""); //통장명
      let param = ",,,,," + pCocd; //자회사 회계시스템 추가사항
      //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',i_bankbookno,'',"T",null,null,null,null,param,null,null,null,null);
      udc_comCodeGrid.setSelectId('retrieveBankBookCdInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_trustBankbookNo_callBackFunc // 콜백 함수
      , i_bankbookno // 화면에서의  Code Element의 Value
      , '' // 화면에서의  Name Element의 Value
      , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
    }
  } catch (e) {
    console.log("f_BankBookPopUpDeposit : " + e);
  }
};

//-------------------------------------------------------------------------
// 입금 통장조회 POPUP호출 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_trustBankbookNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    let row = ds_billRecvDue.getRowPosition();
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ds_billRecvDue.setCellData(row, "trustBankbookNo", rtnList[0]); //통장번호
      ds_billRecvDue.setCellData(row, "trustBankbookNm", rtnList[2]); //통장명
      ds_billRecvDue.setCellData(row, "hidTrustBankbookNo", rtnList[0]); //Hidden 통장번호
    } else {
      ds_billRecvDue.setCellData(row, "trustBankbookNo", ""); //통장번호
      ds_billRecvDue.setCellData(row, "trustBankbookNm", ""); //통장명
      ds_billRecvDue.setCellData(row, "hidTrustBankbookNo", ""); //Hidden 통장번호
    }
  } catch (e) {
    console.log("udc_comCodeGrid_trustBankbookNo_callBackFunc" + e);
  }
};

//-------------------------------------------------------------------------
// 데이터셋 정보 변경시 ASIS : for=ds_billRecvDue event=onColumnChanged
//-------------------------------------------------------------------------
scwin.ds_billRecvDue_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;
    let intCmis = 0;
    let intDueAmt = 0;
    if (colid == "cmis" || colid == "num") {
      for (i = 0; i < ds_billRecvDue.getRowCount(); i++) {
        if (ds_billRecvDue.getCellData(row, "billRecvMgntNo") == ds_billRecvDue.getCellData(i, "billRecvMgntNo") && colid == "num") {
          ds_billRecvDue.setCellData(i, "num", ds_billRecvDue.getCellData(row, "num"));
        }
        if (ds_billRecvDue.getCellData(i, "num") == "T") {
          intCmis += parseInt(ds_billRecvDue.getCellData(i, "cmis"));
          intDueAmt += parseInt(ds_billRecvDue.getCellData(i, "dcAmt"));
        }
      }
      ed_cmis.setValue(intCmis);
      ed_dueAmt.setValue(intDueAmt);
    }
  } catch (e) {
    console.log("ds_billRecvDue_oncelldatachange" + e);
  }
};

//-------------------------------------------------------------------------
// 입금통장에 대한 수정 혹은 Focus이동시 발생함 OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_billRecvDue_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_billRecvDue.getColumnID(columnIndex);
    let row = rowIndex;
    if (ds_billRecvDue.getCellData(row, "trustBankbookNo").trim() == ds_billRecvDue.getCellData(row, "hidTrustBankbookNo").trim()) {
      return false;
    } else if (ds_billRecvDue.getCellData(row, "trustBankbookNo").trim() == "") {
      return false;
    }

    //if (colid == "trustBankbookNo" && ds_billRecvDue.getCellData(row,"trustBankbookNo").trim() != "") {
    scwin.ontextimageclick = "N";
    scwin.f_BankBookPopUpDeposit(row, colid);
    //}
  } catch (e) {
    console.log("gr_billRecvDue_onafteredit" + e);
  }
};

//-------------------------------------------------------------------------
// 만기처리시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function (rowIndex, columnIndex, value) {
  try {
    let checkCount = 0;
    let i = 0;

    // 마감여부 확인
    let jobCloseYN = await scwin.f_JobCloseYN();
    if (!jobCloseYN) {
      return false;
    }
    for (i = 0; i < ds_billRecvDue.getRowCount(); i++) {
      if (ds_billRecvDue.getCellData(i, "billRecvStsCd") == ACConstants.BILLRECV_CLOSE && ds_billRecvDue.getCellData(i, "num") == "T") {
        await $c.win.alert($p, "상태가 수금인것만 만기처리가 가능합니다.");
        ds_billRecvDue.setRowPosition(i);
        return false;
      }
      if (ds_billRecvDue.getCellData(i, "billRecvStsCd") == ACConstants.BILLRECV_DRAFT_DC && ds_billRecvDue.getCellData(i, "num") == "T" && parseInt(ds_billRecvDue.getCellData(i, "slipDt")) < parseInt("20110101")) {
        await $c.win.alert($p, "상태가 할인이면서 전표 생성일 기준으로 2011년 01월 01일 이전인 건은 만기처리 대상이 아닙니다.");
        ds_billRecvDue.setRowPosition(i);
        return false;
      }
      if (parseInt(ds_billRecvDue.getCellData(i, "dcAmt")) < parseInt(ds_billRecvDue.getCellData(i, "cmis"))) {
        await $c.win.alert($p, "수수료 금액이 어음금액보다 큽니다.\n수수료 금액을 확인 하시기 바랍니다.");
        ds_billRecvDue.setRowPosition(i);
        return false;
      }

      // Check 여부 카운트
      if (ds_billRecvDue.getCellData(i, "num") == "T") {
        checkCount++;
      } else {
        ds_billRecvDue.undoRow(i); //ds_billRecvDue.Undo(i);
      }
    }
    let ret = await $c.gus.cfValidate($p, [ed_slipDt, gr_billRecvDue]);
    if (!ret) {
      return false;
    }

    // 선택사항이 있는지 유무 검사
    if (checkCount == 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }

    // 선택사항 만기처리시 처리일자이전 인지 체크
    for (i = 0; i < ds_billRecvDue.getRowCount(); i++) {
      if (ds_billRecvDue.getCellData(i, "num") == "T") {
        if (ds_billRecvDue.getCellData(i, "slipDt") > ed_slipDt.getValue()) {
          await $c.win.alert($p, gr_billRecvDue.getCellDisplayData(i, "billRecvStsCd") + "전표일자보다 이전으로 만기처리할 수 없습니다.");
          return false;
        }
      }
    }
    if (await $c.win.confirm($p, "선택하신 사항을 만기처리 하시겠습니까?")) {
      // 만기처리할 내역에 전표일자를 Setting한다.
      for (i = 0; i < ds_billRecvDue.getRowCount(); i++) {
        if (ds_billRecvDue.getCellData(i, "num") == "T") {
          ds_billRecvDue.setCellData(i, "slipDt", ed_slipDt.getValue());
        }
      }
      sbm_saveBillRecvDue.action = "/ac.fm.collmoneymgnt.billrecv.ProcessExpirationCMD.do";
      $c.sbm.execute($p, sbm_saveBillRecvDue);
    }
  } catch (e) {
    console.log("f_Save" + e);
  }
};

//-------------------------------------------------------------------------
// 만기처리 취소시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function (rowIndex, columnIndex, value) {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_billRecvDue.getRowCount(); i++) {
      if (ds_billRecvDue.getCellData(i, "billRecvStsCd") == ACConstants.BILLRECV_DUE && ds_billRecvDue.getCellData(i, "num") == "T") {
        await $c.win.alert($p, "상태가 만기인것만 만기취소가 가능합니다.");
        ds_billRecvDue.setRowPosition(i);
        return false;
      }
      // Check 여부 카운트
      if (ds_billRecvDue.getCellData(i, "num") == "T") {
        checkCount++;
      } else {
        ds_billRecvDue.undoRow(i); //ds_billRecvDue.Undo(i);
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
    if (await $c.win.confirm($p, "선택하신 사항을 만기취소 처리 하시겠습니까?")) {
      // 만기처리할 내역에 전표일자를 Setting한다.
      for (i = 0; i < ds_billRecvDue.getRowCount(); i++) {
        if (ds_billRecvDue.getCellData(i, "num") == "T") {
          ds_billRecvDue.setCellData(i, "slipDt", ed_slipDt.getValue());
        }
      }
      sbm_saveBillRecvDue.action = "/ac.fm.collmoneymgnt.billrecv.CancelExpirationProcessCMD.do";
      $c.sbm.execute($p, sbm_saveBillRecvDue);
    }
  } catch (e) {
    console.log("f_Cancel" + e);
  }
};

//-------------------------------------------------------------------------
// 만기취소/만기처리 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBillRecvDue_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//개선사항 수탁통장번호 추가

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

    // 정상조회여부 확인
    if (select_code == "1" || select_code == "2" || select_code == "4") {
      scwin.checkSearch = false;
      scwin.checkSearch1 = false;
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
//각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->수금귀속부서, 3:조회->통장번호
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
    let param = "";
    switch (select_code) {
      // 조회조건용 거래처 PopUp 호출
      case '3':
        param = ",,,,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 통장명
        //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
        udc_trustBank.setSelectId('retrieveBankBookCdInfo');
        udc_trustBank.cfCommonPopUp(scwin.udc_trustBank_callBackFunc // 콜백 함수
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
        await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 수탁통장번호 팝업 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_trustBank_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      let tempbankbookNm = rtnList[1];
      rtnList[1] = rtnList[2];
      rtnList[2] = tempbankbookNm;
      ed_trustBankCd.setValue(rtnList[0]); // 코드값
      ed_trustBankNm.setValue(rtnList[1]); // 코드명
      ed_trustBankCd.hidVal = rtnList[0]; //HIDDEN 코드값
      ed_trustBankNm.hidVal = rtnList[1]; //HIDDEN 코드값
    } else {
      ed_trustBankCd.setValue("");
      ed_trustBankNm.setValue("");
      ed_trustBankCd.hidVal = "";
      ed_trustBankNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 수탁통장번호
//-------------------------------------------------------------------------
scwin.udc_trustBank_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'CD');
};

//-------------------------------------------------------------------------
// 수탁통장명
//-------------------------------------------------------------------------
scwin.udc_trustBank_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// 수탁통장번호찾기
//-------------------------------------------------------------------------
scwin.udc_trustBank_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'ALL');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_searchBillRecvDue',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchBillRecvDue',refEdDt:'toDate',refStDt:'fromDate',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_ToDate',titleFrom:'만기예정일자',titleTo:'만기예정일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',allOption:'false',id:'lc_billRecvAcctCd',class:' w150',direction:'auto',ref:'data:ds_searchBillRecvDue.billRecvAcctCd',objType:'data',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁통장번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagName:'1',allowCharCode:'0-9',btnId:'btn_trustBank',code:'trustBankbookNo',codeId:'ed_trustBankCd','ev:onblurCodeEvent':'scwin.udc_trustBank_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_trustBank_onblurNameEvent','ev:onclickEvent':'scwin.udc_trustBank_onclickEvent',id:'udc_trustBank',mandatoryCode:'true',maxlengthCode:'6',maxlengthName:'20',nameId:'ed_trustBankNm',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_searchBillRecvDue',selectID:'retrieveBankInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',style:'',validTitle:'통장명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'ed_billRecvStsCd',ref:'data:ds_searchBillRecvDue.billRecvStsCd',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-4'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_billRecvDue',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_billRecvDue',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'true',resize:'true',columnMove:'true',id:'gr_billRecvDue',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_billRecvDue_oncellclick','ev:ontextimageclick':'scwin.gr_billRecvDue_ontextimageclick','ev:onafteredit':'scwin.gr_billRecvDue_onafteredit',rowStatusVisible:'true',gridName:'받을어음만기처리'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'50',fixColumnWidth:'true',sortable:'false',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'어음번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'총어음금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'어음금액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmis',inputType:'text',value:'수수료',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trustBankbookNo',inputType:'text',value:'수탁</br>통장번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'수탁통장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column52',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column73',value:'할인거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',displayMode:'label',value:'여부'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctCd',inputType:'select',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvNo',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcAmt',inputType:'text',width:'110',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmis',inputType:'text',width:'100',mandatory:'true',textAlign:'right',displayFormat:'#,##0',minNumber:'0',dataType:'number',maxLength:'13',allowChar:'0-9',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trustBankbookNo',inputType:'textImage',mandatory:'true',width:'100',allowChar:'0-9',maxLength:'5',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trustBankbookNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'billRecvStsCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dcClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'procSlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'feYn',displayMode:'label',textAlign:'left',readOnly:'false',dataType:'number',maxLength:'1',allowChar:'0-9'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'prtAmt\')',displayFormat:'#,##0',textAlign:'right',id:'column44',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',expression:'sum(\'dcAmt\')',displayFormat:'#,##0',textAlign:'right',id:'column43',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'cmis\')',displayFormat:'#,##0',textAlign:'right',id:'column42',displayMode:'label',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_slipDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',title:'전표일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전자어음 수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cmis',style:'width: 200px;',mandatory:'true',objType:'key',allowChar:'0-9',maxlength:'13',displayFormat:'#,##0',dataType:'number',initValue:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_dueAmt',style:'width: 200px;',mandatory:'true',objType:'key',allowChar:'0-9',maxlength:'13',displayFormat:'#,##0',dataType:'number',initValue:'0'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Upt',label:'만기취소',style:'',type:'button',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'만기취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Add',label:'만기처리',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'만기처리'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'visibility: hidden;',id:'udc_closeYn'}}]}]}]})