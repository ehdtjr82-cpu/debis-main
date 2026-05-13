/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01b.xml 60467 a42e05a6f53e21d9943a915509d3ab1eb6721c27a5c406d5c7bc7c95da5191cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'prvsCtrtYn',name:'가계약여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'deptNo',name:'부서번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'empNo',name:'사원번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'bizDomTransYn',name:'사업영역운송여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomStvYn',name:'사업영역하역여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomStrYn',name:'사업영역보관여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomInatYn',name:'사업영역국제여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomInatSeaYn',name:'사업영역국제해운여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDomTplYn',name:'사업영역3자물류여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'tsExclusiveCd',name:'T/S제외',dataType:'Integer'}},{T:1,N:'w2:key',A:{id:'expYn',name:'수출여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'domesticYn',name:'내수여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'sellClntClsCd',name:'매출거래처구분코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'dctrtMchtYn',name:'직계약화주여부',dataType:'Integer',defaultValue:''}},{T:1,N:'w2:key',A:{id:'inqDtCls',name:'일자별조회조건',dataType:'String'}},{T:1,N:'w2:key',A:{id:'inqStDt',name:'시작일',dataType:'String'}},{T:1,N:'w2:key',A:{id:'inqEndDt',name:'종료일',dataType:'String'}},{T:1,N:'w2:key',A:{id:'ctrtRegStsCd',name:'계약등록상태코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'ctrtDocExstYn',name:'계약서존재여부',dataType:'Integer'}},{T:1,N:'w2:key',A:{id:'busiNo',name:'사업자번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'impYn',name:'수입',dataType:'Integer',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bizDivYn',name:'계약부문',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bizDomYn',name:'계약영역',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impExpYn',name:'수출입구분',dataType:'String'}},{T:1,N:'w2:column',A:{id:'sellClntClsCd',name:'매출거래처구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'sellClntClsNm',name:'청구처구분명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dctrtMchtYn',name:'직계약화주여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtRegStsCd',name:'계약등록상태코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtRegStsNm',name:'계약등록상태명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtEmpNo',name:'계약담당자사번',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtEmpNm',name:'계약담당자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtDeptCd',name:'등록점소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtDeptNm',name:'등록점소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtAllocRt',name:'배분율',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtDocExstYn',name:'계약서존재여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'prvsCtrtYn',name:'가계약여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regEmpNm',name:'실등록자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtTmnDt',name:'계약해지일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소',dataType:'String'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ctrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'contractCopyClassificationCode',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copyOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractCopyClassificationCode',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.sd.salesactiv.ctrtmgnt.ExecuteContractDeleteCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_ctrtNo',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_copy',action:'/ds.sd.salesactiv.ctrtmgnt.ExecuteContractCopyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ctrtNo","key":"IN_DS1"},{"id":"ds_copyOut","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_copyOut","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_copy_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// scwin.aaa = ""

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
scwin.strBasSdId = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01"; // 월의 시작일
scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate);
scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate;
console.log(scwin.strFromDate + " : " + scwin.strLastDate);
scwin.regId = $c.data.getMemInfo($p, "userId");
scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn");
scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd"); // 사용자 소속점소코드
scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm"); // 사용자 소속점소명

scwin.param = $c.data.getParameter($p) || {};
scwin.clntNo = scwin.param.clntNo == null ? "" : scwin.param.clntNo;
scwin.DD_Start = scwin.param.DD_Start == null ? "" : scwin.param.DD_Start;
scwin.DD_End = scwin.param.DD_End == null ? "" : scwin.param.DD_End;
scwin.sView = scwin.param.sView == null ? "" : scwin.param.sView; //싱글뷰에서 넘어온값
scwin.acctDeptCd = scwin.param.acctDeptCd == null ? "" : scwin.param.acctDeptCd; //싱글뷰에서 넘어온값
scwin.strLobran = scwin.param.strLobran == null ? "" : scwin.param.strLobran; //싱글뷰에서 넘어온값

//메세지용 전역변수 SETTING
scwin.MSG_SD_WRN_001 = "수정하고자 하는 계약번호를 선택하여 주십시오.";
scwin.MSG_SD_WRN_002 = "조회 후 처리하시기 바랍니다.";
scwin.MSG_SD_ERR_001 = "시작일자와 종료일자를 정확히 입력 바랍니다.";
scwin.MSG_SD_CRM_001 = "@을 실행하시겠습니까?";
scwin.MSG_SD_INF_001 = "계약복사가 완료되었습니다.";
scwin.MSG_SD_INF_002 = "계약이 삭제되었습니다.";
scwin.wrkLobranCd = scwin.lobranCd; // 작업점소코드
scwin.wrkLobranNm = scwin.lobranNm; // 작업점소명
scwin.wrkRegID = scwin.regId; // User_ID
// scwin.sView = scwin.sView
// scwin.strLobran = scwin.strLobran

scwin.onpageload = function () {
  // scwin.aaa = "10"
  // scwin.onUdcCompleted();
  console.log("cfCommonPopUp length:", udc_comCode1.cfCommonPopUp.length);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD040",
    compID: "lc_ctrtRegStsCd"
  } // 등록상태
  , {
    grpCd: "LO111",
    compID: "lc_sellClntClsCd"
  } // 거래처구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_defaultValue();
  var chk = scwin.clntNo;
  if (chk != "") {
    oGDS_view_cond.set("clntNo", scwin.clntNo);
    lc_inqDtCls.setValue("03");
    ed_inqStDt.setValue(scwin.DD_Start);
    ed_inqEndDt.setValue(scwin.DD_End);
    scwin.f_Retrieve();
  }

  // console.log("    scwin.aaa = " + scwin.aaa)
  if (scwin.sView == "Y") {
    lc_inqDtCls.setValue("03");
    ed_inqStDt.setValue(scwin.strFromDate);
    ed_inqEndDt.setValue(scwin.strToDate);
    ed_deptCd.setValue(scwin.strLobran);
    scwin.f_Retrieve();
  }
  // TEST DATA
  // oGDS_view_cond.set("mrn", "06SCLKF0757")

  // TODO popupdefine 미작업.
  //계약등록한 사람과 변경한사람이 다른건이 있을 경우 팝업호출
  // $c.popupdefine.cfAutoPopUpRun("820", "520", "1", "retrieveChgContractCnt", "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_53b.jsp", scwin.regId)
  scwin.lc_sellClntClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_inqStDt.setValue(scwin.strPreDate);
  ed_inqEndDt.setValue(scwin.strCurDate);
  lc_inqDtCls.setValue("01");
  $c.gus.cfDisableKey($p);
  lc_ctrtDocExstYn.setValue("-1");

  // $c.gus.cfDisableObjects([chb_dctrtMchtYn])

  ed_CtrtNo.focus();
};

// 조회조건 초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함. (TO-BE 공통패턴)
// inObj: 코드/명 입력 컴포넌트
// pairObj: 짝 컴포넌트(코드면 명, 명이면 코드)
// disGubun: 1/2/3
// isCode: true(코드필드), false(명필드)
//-------------------------------------------------------------------------
// object 데이타 변경시 호출
scwin.f_chkField = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  var pVal = ($c.gus.cfGetValue($p, inObj) || "").trim();
  if (!pVal) return;

  // 코드 입력이면 코드로 검색, 명 입력이면 명으로 검색
  if (isCode == null || isCode === true) scwin.f_openPopUp(disGubun, pVal, "", "T");else scwin.f_openPopUp(disGubun, "", pVal, "T");
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : 계약관리 조회조건 (거래처/등록점소/담당자)
// disGubun: 1=거래처, 2=등록점소, 3=계약담당자
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose) {
  pCode = (pCode || "").trim();
  pName = (pName || "").trim();
  pClose = pClose || "F"; // 기본은 강제 팝업

  // 전체검색은 필요하면 케이스별로 변경 (거래처는 내부에서 강제 F 처리됨)
  var pAllSearchTF = "T";
  switch (disGubun) {
    // 1) 계약거래처
    case 1:
      {
        udc_comCode1.setSelectId("retrieveClntInfo"); // AS-IS retrieveClntInfo

        udc_comCode1.cfCommonPopUp(scwin.udc_comCode1_callBackFunc,
        // 1 pCallback
        pCode,
        // 2 pCode
        pName,
        // 3 pName
        pClose,
        // 4 pWinCloseTF("T"/"F")
        "9",
        // 5 pDispCnt (AS-IS에서 '9' 사용)
        "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,",
        // 6 pTitle
        "100,100,0,120,100,0,100,100,100,0",
        // 7 pWidth
        "3,10",
        // 8 pHidden (AS-IS에서 여기에 "3,10"을 넣었음)
        "LOGISCLNT1,,CTRT",
        // 9 pWhere
        "800",
        // 10 pW
        "600",
        // 11 pH
        null,
        // 12 pTop
        null,
        // 13 pLeft
        "F",
        // 14 pExistTF
        "F",
        // 15 pAllSearchTF
        "거래처조회,거래처번호,거래처명",
        // 16 pWtitleSearch
        "F",
        // 17 pNoDataCloseTF
        null,
        // 18 tmpDataSet
        null,
        // 19 pYear
        null,
        // 20 pCodeObj
        null // 21 pNameObj
        );
        break;
      }

    // 2) 등록점소
    case 2:
      {
        udc_comCode2.setSelectId("retrieveLogisDeptInfo"); // AS-IS retrieveLogisDeptInfo

        // udc_comCode2.cfCommonPopUp(
        //     scwin.udc_comCode2_callBackFunc, // 1
        //     pCode,                            // 2
        //     pName,                            // 3
        //     pClose,                           // 4 
        //     "5",                              // 5 pDispCnt
        //     null,                             // 6 pTitle
        //     "150,170",                        // 7 pWidth (AS-IS에서 여기 사용)
        //     null,                             // 8 pHidden
        //     null,                             // 9 pWhere
        //     "440",                            // 10 pW
        //     "500",                            // 11 pH
        //     null,                             // 12
        //     "F",                           // 13
        //     "F",                              // 14
        //     pAllSearchTF,                     // 15 (여긴 필요하면 "F"로)
        //     "등록점소조회,점소코드,점소명",      // 16
        //     "F",                              // 17
        //     null, null, null, null            // 18~21
        // );

        udc_comCode2.cfCommonPopUp(scwin.udc_comCode2_callBackFunc,
        // 1 pCallback
        pCode,
        // 2 pCode
        pName,
        // 3 pName
        pClose,
        // 4 pWinCloseTF
        "5",
        // 5 pDispCnt
        null,
        // 6 pTitle
        "150,170",
        // 7 pWidth
        null,
        // 8 pHidden
        null,
        // 9 pWhere
        "440",
        // 10 pW
        "500",
        // 11 pH
        null,
        // 12 pTop
        null,
        // 13 pLeft
        null,
        // 14 pExistTF
        "F",
        // 15 pAllSearchTF
        null,
        // 16 pWtitleSearch
        null,
        // 17 pNoDataCloseTF
        null,
        // 18 tmpDataSet
        null // 19 pYear
        );
        break;
      }

    // 3) 계약담당자
    case 3:
      {
        udc_comCode3.setSelectId("retrieveLoBranEmpInfo"); // AS-IS retrieveLoBranEmpInfo

        // udc_comCode3.cfCommonPopUp(
        //     scwin.udc_comCode3_callBackFunc, // 1
        //     pCode,                            // 2
        //     pName,                            // 3
        //     pClose,                           // 4 
        //     "5",                              // 5
        //     null,                             // 6
        //     "150,170",                        // 7
        //     null,                             // 8
        //     null,                             // 9
        //     "440",                            // 10
        //     "500",                            // 11
        //     null,                             // 12
        //     "F",                            // 13
        //     "F",                              // 14
        //     pAllSearchTF,                     // 15
        //     "담당자조회,사번,성명",             // 16
        //     "F",                              // 17
        //     null, null, null, null            // 18~21
        // );
        udc_comCode3.cfCommonPopUp(scwin.udc_comCode3_callBackFunc,
        // 1 pCallback
        pCode,
        // 2 pCode
        pName,
        // 3 pName
        pClose,
        // 4 pWinCloseTF
        "5",
        // 5 pDispCnt
        null,
        // 6 pTitle
        "150,170",
        // 7 pWidth
        null,
        // 8 pHidden
        null,
        // 9 pWhere
        "440",
        // 10 pW
        "500",
        // 11 pH
        null,
        // 12 pTop
        null,
        // 13 pLeft
        null,
        // 14 pExistTF
        "F",
        // 15 pAllSearchTF
        null,
        // 16 pWtitleSearch
        null,
        // 17 pNoDataCloseTF
        null,
        // 18 tmpDataSet
        null // 19 pYear
        );
        break;
      }
    default:
      break;
  }
};
scwin.udc_comCode1_onclickEvent = function (e) {
  scwin.f_openPopUp(1, ed_ctrtClntNo.getValue(), ed_ctrtClntNm.getValue(), "F");
};
scwin.udc_comCode1_onblurCodeEvent = function (e) {
  scwin.f_chkField(ed_ctrtClntNo, ed_ctrtClntNm, 1, true);
};
scwin.udc_comCode1_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_ctrtClntNo, ed_ctrtClntNm);
};
scwin.udc_comCode1_onviewchangeNameEvent = function (info) {
  scwin.f_chkField(ed_ctrtClntNm, ed_ctrtClntNo, 1, false);
};
scwin.udc_comCode2_onclickEvent = function (e) {
  scwin.f_openPopUp(2, ed_deptCd.getValue(), ed_deptNm.getValue(), "F");
};
scwin.udc_comCode2_onblurCodeEvent = function (e) {
  scwin.f_chkField(ed_deptCd, ed_deptNm, 2, true);
};
scwin.udc_comCode2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_deptCd, ed_deptNm);
};
scwin.udc_comCode2_onviewchangeNameEvent = function (info) {
  scwin.f_chkField(ed_deptNm, ed_deptCd, 2, false);
};
scwin.udc_comCode3_onclickEvent = function (e) {
  scwin.f_openPopUp(3, ed_empNo.getValue(), ed_empNm.getValue(), "F");
};
scwin.udc_comCode3_onblurCodeEvent = function (e) {
  scwin.f_chkField(ed_empNo, ed_empNm, 3, true);
};
scwin.udc_comCode3_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_empNo, ed_empNm);
};
scwin.udc_comCode3_onviewchangeNameEvent = function (info) {
  scwin.f_chkField(ed_empNm, ed_empNo, 3, false);
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openSalesPopup();
};

//-------------------------------------------------------------------------
// function name : f_openSalesPopup
// function desc : 사업자등록번호 조회
//-------------------------------------------------------------------------
scwin.f_openSalesPopup = function () {
  // 1) 공통팝업 selectId
  udc_crn.setSelectId("retrieveCrnInfo");

  // 2) 현재 입력값(검색어)
  var pCode = (ed_busiNo.getValue() || "").trim();

  // 3) 공통팝업 오픈
  // cfCommonPopUp( callback, pCode, pName, pClose, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, ...)
  udc_crn.cfCommonPopUp(scwin.f_openSalesPopup_callback,
  // callback
  pCode,
  // pCode (초기 검색값)
  "",
  // pName
  "F",
  // pClose (항상 목록 팝업 표시)
  null,
  // pDispCnt
  null,
  // pTitle
  null,
  // pWidth
  "3,4,5,6,7,8,9,10",
  // pHidden (원하던대로 숨김)
  null,
  // pWhere
  null,
  // pW
  null,
  // pH
  null, null, null, null, null, null // 나머지 옵션
  );
};

//-------------------------------------------------------------------------
// callback : 사업자등록번호 선택 후
// rtnList 예시: [0]=사업자번호, [1]=상호(사업자명) ... (시스템 정의에 따라 다름)
//-------------------------------------------------------------------------
scwin.f_openSalesPopup_callback = async function (rtnList) {
  if (!rtnList) return;
  if (rtnList[0] === "N/A") return;
  var busiNo = String(rtnList[0] || "").trim();
  if (!busiNo) return;

  // 1) 화면 입력값 세팅
  ed_busiNo.setValue(busiNo);

  // 2) 조회조건에도 반영(지금 화면은 ref로도 묶여있지만, 안전하게 같이 set)
  if (typeof oGDS_view_cond !== "undefined") {
    oGDS_view_cond.set("busiNo", busiNo);
  }

  // 3) (선택) 이미 다른 거래처에 등록 여부 체크가 필요하면 여기서 호출
  /*
  try {
      udc_retrieveClntCrnInfo.setSelectId("retrieveClntCrnInfo");
      const res = await udc_retrieveClntCrnInfo.cfCommonPopUpAsync(
          scwin.f_openSalesPopup_dupCheck_callback,
          busiNo,
          "",
          null, null, null, null,
          null, null, null, null, null, null,
          "T",   // closeTF
          null, null
      );
       if (res && res > 0) {
          await $c.win.alert("사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
      }
  } catch (ex) {
      console.warn("사업자번호 중복체크 실패(선택):", ex);
  }
  */
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  // UDC 화면값을 서버 조회조건 key로 확정 복사
  oGDS_view_cond.set("clntNo", (ed_ctrtClntNo.getValue() || "").trim());
  oGDS_view_cond.set("deptNo", (ed_deptCd.getValue() || "").trim());
  oGDS_view_cond.set("empNo", (ed_empNo.getValue() || "").trim());
  oGDS_view_cond.set("busiNo", (ed_busiNo.getValue() || "").trim());
  let stDt = (ed_inqStDt.getValue() || "").trim();
  let endDt = (ed_inqEndDt.getValue() || "").trim();

  // 1. 날짜 형식 체크
  if (!$c.date.isDate($p, stDt) || !$c.date.isDate($p, endDt)) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_001);
    ed_inqStDt.focus();
    return;
  }

  // 2. 시작일 <= 종료일 체크
  let ret = $c.gus.cfIsAfterDate($p, stDt, endDt);
  if (!ret) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_inqStDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON && e.responseJSON.resultDataSet && e.responseJSON.resultDataSet[0].Code == 0) {
    var cnt = ds_ctrt.getRowCount();
    tbx_totalRows.setValue(cnt);
    if (cnt === 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      scwin.gr_ctrt_onrowindexchange(-1, -1);
      return;
    }
    gr_ctrt.setFocusedCell(0, "ctrtNo", false);

    // 1) 먼저 YES/NO 치환
    for (let i = 0; i < cnt; i++) {
      const v1 = String(ds_ctrt.getCellData(i, "dctrtMchtYn") ?? "").trim();
      const v2 = String(ds_ctrt.getCellData(i, "ctrtDocExstYn") ?? "").trim();
      const v3 = String(ds_ctrt.getCellData(i, "prvsCtrtYn") ?? "").trim();
      ds_ctrt.setCellData(i, "dctrtMchtYn", v1 === "1" ? "Yes" : v1 === "0" ? "No" : "");
      ds_ctrt.setCellData(i, "ctrtDocExstYn", v2 === "1" ? "Yes" : v2 === "0" ? "No" : "");
      ds_ctrt.setCellData(i, "prvsCtrtYn", v3 === "1" ? "Yes" : v3 === "0" ? "No" : "");
    }

    // 2) 그리드 갱신(환경 따라 둘 중 하나)
    if (gr_ctrt && typeof gr_ctrt.refresh === "function") gr_ctrt.refresh();else if (gr_ctrt && typeof gr_ctrt.redraw === "function") gr_ctrt.redraw();

    // 3) 버튼 상태 갱신
    scwin.gr_ctrt_onrowindexchange(0, -1);
  } else {
    // $c.gus.cfShowError(e);
    console.error(e);
  }
};

//-------------------------------------------------------------------------
// function name : f_newCtrt
// function desc : 신규화면 클릭
//-------------------------------------------------------------------------
scwin.f_newCtrt = function () {
  // $c.win.openMenu("신규 계약등록", scwin.strBasSdId, "sd_202_01_02b.xml")
  //scwin.cfTabMenuAdd(scwin.strBasSdId, "신규 계약등록");
  $c.win.openMenu($p, "신규 계약등록", scwin.strBasSdId, "sd_202_01_02b.xml", null, {
    openAction: "exist",
    menuCode: $c.data.getParameter($p, "menuInfo").refreshPid || ""
  });
};

//-------------------------------------------------------------------------
// function name : f_deleteCtrt
// function desc : 계약삭제
//-------------------------------------------------------------------------
scwin.f_deleteCtrt = function (e) {
  // 1) 조회된 데이터 없으면 종료
  if (ds_ctrt.getRowCount() === 0) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_002); // "조회 후 처리하시기 바랍니다."
    return;
  }
  // 2) 선택 계약번호
  var ctrtNo = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtNo") || "").replace(/-/g, "").trim();
  if (!ctrtNo) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_001); // "수정하고자 하는 계약번호를 선택..."
    return;
  }
  // 3) confirm (AS-IS MSG_SD_CRM_001="@을 실행하시겠습니까?")
  var messageStr = String(scwin.MSG_SD_CRM_001 || "").replace("@", "계약삭제");
  $c.win.confirm($p, messageStr, function (rtn) {
    if (rtn === false) return;
    if (rtn && typeof rtn === "object" && rtn.clickValue === false) return;

    // 4) 삭제 실행: IN_DS1에 ctrtNo 세팅 후 submission 호출
    ds_ctrtNo.set("ctrtNo", ctrtNo);
    ds_ctrtNo.set("contractCopyClassificationCode", "");
    $c.sbm.execute($p, sbm_delete);
  }, {});
};

//-------------------------------------------------------------------------
// function name : f_changeCtrt
// function desc : 계약변경, 재계약
//-------------------------------------------------------------------------
scwin.f_changeCtrt = function (contractCopyClassificationCode) {
  debugger;
  if (ds_ctrt.getRowCount() === 0) {
    $c.gus.cfAlertMsg($p, MSG_SD_WRN_002);
    return;
  }

  // 공통거래처(9999) 제한
  var clntNo = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "clntNo") || "");
  if (clntNo.substring(0, 4).trim() === "9999") {
    $c.gus.cfAlertMsg($p, "공통거래처의 경우 계약변경이나 재계약을 할 수 없습니다.");
    //return;
  }
  ;
  var ctrtNo = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtNo") || "").replace(/-/g, "");
  if (!ctrtNo) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_001);
    return;
  }
  var msgParam = contractCopyClassificationCode === "C" ? "계약변경" : "재계약";
  var allowUser = {
    "010028": true,
    "180058": true,
    "110805": true,
    "101384": true,
    "233072": true,
    "210277": true,
    "210175": true,
    "290146": true
  };
  var ctrtDeptNm = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtDeptNm") || "").trim();
  if (ctrtDeptNm === "선사영업팀" && String(scwin.wrkLobranCd) !== "1EE" && allowUser[String(scwin.wrkRegID)] !== true) {
    $c.gus.cfAlertMsg($p, "선사영업팀에서 등록한 계약은 선사영팀 담당자만 재계약및 계약변경을 할수 있습니다!!!");
    return;
  }

  //선사영업팀 계약에 대해서 선사영업팀 소속담당자만 재계약과 계약변경 할수 있도록 체크!!!
  //alert("kk::"+ds_ctrt.NameValue(ds_ctrt.RowPosition, "lobranCd")+"::"+wrkLobranCd);
  // if (ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtDeptNm") == "선사영업팀" && wrkLobranCd != "1EE" && wrkRegID != "180058") { //20200402 엄장호추가

  //     alert("선사영업팀에서 등록한 계약은 선사영팀 담당자만 재계약및 계약변경을 할수 있습니다!!!");
  //     return false;
  // if (wrkRegID == "010028") {

  //     if ( cfConfirmMsg(MSG_SD_CRM_001, new Array(msgParam)) ) {
  //         tr_copy.Action = "/ds.sd.salesactiv.ctrtmgnt.ExecuteContractCopyCMD.do?ctrtNo=" + ctrtNo +
  //                                                                             "&contractCopyClassificationCode="+contractCopyClassificationCode;
  //         tr_copy.post();
  //     }

  //     return false;
  // }else{
  //     alert("선사영업팀에서 등록한 계약은 선사영팀 담당자만 재계약및 계약변경을 할수 있습니다!!!");
  //     return false;
  // }

  // if (cfRet) {
  //     // oGDS_view_cond.set("ctrtNo", ctrtNo)
  //     // oGDS_view_cond.set("contractCopyClassificationCode", contractCopyClassificationCode)
  //     ds_ctrtNo.set("ctrtNo", ctrtNo);
  //     ds_ctrtNo.set("contractCopyClassificationCode", contractCopyClassificationCode);
  //     // tr_copy.Action = "/ds.sd.salesactiv.ctrtmgnt.ExecuteContractCopyCMD.do?ctrtNo=" + ctrtNo +"&contractCopyClassificationCode="+contractCopyClassificationCode;
  //     $c.sbm.execute(sbm_copy)
  // }

  // ===== confirm =====
  var messageStr = String(scwin.MSG_SD_CRM_001 || "").replace("@", msgParam);
  $c.win.confirm($p, messageStr, function (rtn) {
    if (rtn === false) return;
    if (rtn && typeof rtn === "object" && rtn.clickValue === false) return;

    // AS-IS: tr_copy.Action에 붙이던 파라미터를 IN_DS1(ds_ctrtNo)에 세팅
    ds_ctrtNo.set("ctrtNo", ctrtNo);
    ds_ctrtNo.set("contractCopyClassificationCode", contractCopyClassificationCode);

    // 중요: OUT_DS1 비우기
    if (typeof ds_copyOut !== "undefined") {
      ds_copyOut.removeAll();
    }

    // AS-IS: tr_copy.post()와 동일
    $c.sbm.execute($p, sbm_copy);
  }, {});
};

//-------------------------------------------------------------------------
// function name : f_print
// function desc : 계약발행
//-------------------------------------------------------------------------
scwin.f_print = async function (e) {
  // TODO
  // var parObject = new Object();
  // 	parObject.ctrtNo = ds_ctrt.NameValue(ds_ctrt.RowPosition, "ctrtNo").replace("-","");
  // 	parObject.clntNo = ds_ctrt.NameValue(ds_ctrt.RowPosition, "clntNo");
  // 	parObject.clntNm = ds_ctrt.NameValue(ds_ctrt.RowPosition, "clntNm");

  // var style = "center:yes; dialogwidth:445px; dialogheight:570px; dialogleft:100px; dialogtop:50px; scroll:yes; resizable:no; status:yes;";
  // var strPath = "sd_202_01_21p.jsp";

  // 	vRtnValue = window.showModalDialog(strPath, parObject ,style )

  // 1) 조회된 데이터 없으면
  if (ds_ctrt.getRowCount() === 0) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_002); // "조회 후 처리하시기 바랍니다."
    return;
  }

  // 2) 선택 계약정보
  var ctrtNo = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtNo") || "").replace(/-/g, "").trim();
  if (!ctrtNo) {
    $c.gus.cfAlertMsg($p, scwin.MSG_SD_WRN_001); // "수정하고자 하는 계약번호를 선택..."
    return;
  }
  var clntNo = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "clntNo") || "").trim();
  var clntNm = String(ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "clntNm") || "").trim();

  // 3) AS-IS parObject 대응 데이터
  var data = {
    ctrtNo: ctrtNo,
    clntNo: clntNo,
    clntNm: clntNm,
    closeTF: "T"
  };

  // 4) 팝업 옵션 (AS-IS dialogwidth/height 대응)
  var opts = {
    title: "계약발행",
    width: "445px",
    height: "570px",
    modal: true,
    popupName: "계약발행"
  };

  // 5) TO-BE 발행 팝업 경로 (xml)
  var pURL = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_21p.xml";

  // AS-IS showModalDialog 대응
  await $c.win.openPopup($p, pURL, opts, data);
};

// =======================================================
// 계약 상세 탭 오픈 공통
// =======================================================
scwin.cfTabMenuAdd = function (url, name) {
  var sURL = url.split("?")[0];
  var dataString = url.split("?")[1];
  var data = {};
  var ctrtNo = "";
  if (dataString) {
    dataString.split("&").forEach(function (param) {
      var kv = param.split("=");
      var key = kv[0];
      var value = kv[1];
      data[key] = value;
      if (key === "ctrtNo") ctrtNo = value;
    });
  }

  // 신규면 menuCode 비움
  var menuCode = data.mode === "NEW" ? "" : ctrtNo;
  const tabInfoArr = $p.main().tac_layout.getTabInfo();
  const filtered = tabInfoArr.filter(e => e.label === name && e.id.includes(ctrtNo));
  if (filtered.length > 0) {
    $p.main().tac_layout.setSelectedTabIndex(filtered[0].id);
    return;
  }
  $c.win.openMenu($p, name, sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
    menuCode: `${menuCode}_${Date.now()}`,
    openAction: "select"
  });
};

// // ctrtNo(그리드 값) 정규화
// scwin.getCtrtNoPlain = function () {
//     if (ds_ctrt.getRowCount() === 0) return "";
//     var v = ds_ctrt.getCellData(ds_ctrt.getRowPosition(), "ctrtNo");
//     return String(v || "").replace(/-/g, "").trim();
// };

scwin.sbm_copy_submitdone = function (e) {
  debugger;
  if (!(e.responseJSON && e.responseJSON.resultDataSet && e.responseJSON.resultDataSet[0].Code == 0)) {
    console.error(e);
    return;
  }

  // AS-IS: "계약복사가 완료되었습니다." → 재조회 → 새번호 탭오픈
  $c.gus.cfAlertMsg($p, scwin.MSG_SD_INF_001);

  // var newCtrtNo = String(ds_ctrtNo.get("ctrtNo") || "").replace(/-/g, "").trim();
  var newCtrtNo = String(ds_copyOut.getCellData(0, "ctrtNo") || "").replace(/-/g, "").trim();
  if (!newCtrtNo) {
    console.warn("복사 성공 후 신규 계약번호를 못 읽음");
    return;
  }
  console.log("copy result:", e.responseJSON);
  console.log("opened ctrtNo:", ds_ctrtNo.get("ctrtNo"));
  scwin.cfTabMenuAdd(scwin.strBasSdId + "?ctrtNo=" + encodeURIComponent(newCtrtNo), "신규 계약등록");
  scwin.f_Retrieve();
};
scwin.sbm_delete_submitdone = function (e) {
  if (!(e.responseJSON && e.responseJSON.resultDataSet && e.responseJSON.resultDataSet[0].Code == 0)) {
    console.error(e);
    return;
  }
  $c.gus.cfAlertMsg($p, scwin.MSG_SD_INF_002); // "계약이 삭제되었습니다."
  scwin.f_Retrieve();
};
scwin.gr_ctrt_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex == null || rowIndex < 0) return;
  if (ds_ctrt.getRowCount() === 0) return;
  var ctrtNo = String(ds_ctrt.getCellData(rowIndex, "ctrtNo") || "").replace(/-/g, "").trim();
  if (!ctrtNo) return;

  // AS-IS: 선사영업팀(1EE) 등록 계약은 권한자만 상세 이동
  var lobranCd = String(ds_ctrt.getCellData(rowIndex, "lobranCd") || "").trim();
  var allowUser = {
    "010028": true,
    "180058": true,
    "110805": true,
    "101384": true,
    "233072": true,
    "210277": true,
    "210175": true,
    "290146": true
  };
  if (lobranCd === "1EE" && String(scwin.wrkLobranCd) !== "1EE") {
    if (allowUser[String(scwin.wrkRegID)] === true) {
      scwin.cfTabMenuAdd(scwin.strBasSdId + "?ctrtNo=" + encodeURIComponent(ctrtNo), "신규 계약등록");
    } else {
      $c.gus.cfAlertMsg($p, "선사영업팀에서 등록한 계약은 선사영팀 담당자만 상세내역으로 이동할수 있습니다.!!!");
    }
    return;
  }

  // AS-IS: 그냥 ctrtNo만 들고 상세로 이동 (타이틀도 동일)
  scwin.cfTabMenuAdd(scwin.strBasSdId + "?ctrtNo=" + encodeURIComponent(ctrtNo), "신규 계약등록");
};
scwin.gr_ctrt_onrowindexchange = function (rowIndex, oldRow) {
  // 기본 disable (AS-IS: cfDisableObjects)
  btn_ctrtChg.setDisabled(true);
  btn_reCtrt.setDisabled(true);
  btn_ctrtDel.setDisabled(true);
  if (rowIndex == null || rowIndex < 0) return;
  if (ds_ctrt.getRowCount() === 0) return;
  var ctrtRegStsCd = (ds_ctrt.getCellData(rowIndex, "ctrtRegStsCd") || "").trim();
  var regId = (ds_ctrt.getCellData(rowIndex, "regId") || "").trim();

  // AS-IS: if ctrtRegStsCd == "02" -> 변경/재계약 enable
  if (ctrtRegStsCd === "02") {
    btn_ctrtChg.setDisabled(false);
    btn_reCtrt.setDisabled(false);
  }

  // AS-IS: else if (등록자==로그인 || sysAdmin) -> 삭제 enable
  if (regId === String(scwin.regId) || String(scwin.sysAdminYn) === "1") {
    btn_ctrtDel.setDisabled(false);
  }
};

// scwin.toYesNo = function (v) {
//     debugger;
//     v = (v === null || v === undefined) ? "" : String(v).trim();
//     if (v === "1") return "Yes";
//     if (v === "0") return "No";
//     if (v === "-1") return "";   // 또는 "전체"
//     return "";
// };

scwin.lc_sellClntClsCd_onviewchange = function (info) {
  var v = String(lc_sellClntClsCd.getValue() || "").trim();
  if (v === "02") {
    chb_dctrtMchtYn.setDisabled(false);
  } else {
    chb_dctrtMchtYn.setDisabled(true);
    chb_dctrtMchtYn.setValue("");
    oGDS_view_cond.set("dctrtMchtYn", ""); //조건 제거
  }
};

//엑셀 다운로드 함수
scwin.cfGridToExcel = function () {
  const options = {
    fileName: "계약목록.xlsx",
    sheetName: "계약목록",
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_ctrt, options);
};
scwin.ed_CtrtNo_oneditkeyup = function (info, e) {
  var v = ed_CtrtNo.getValue() || "";
  var up = v.toUpperCase();
  if (v !== up) {
    ed_CtrtNo.setValue(up);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:400px;'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_CtrtNo',style:'width: 183px;',allowChar:'a-zA-Z0-9',maxlength:'11',objType:'Data',ref:'data:oGDS_view_cond.ctrtNo','ev:oneditkeyup':'scwin.ed_CtrtNo_oneditkeyup'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'chb_prvsCtrtYn',ref:'data:oGDS_view_cond.prvsCtrtYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가계약여부 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_ctrtClntNo',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',nameId:'ed_ctrtClntNm',id:'udc_comCode1',objTypeName:'data',code:'ctrtClntNo',name:'ctrtClntNm',refDataCollection:'oGDS_view_cond','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode1_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode1_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtRegStsCd',search:'start',style:'width:230px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',chooseOption:'true',ref:'data:oGDS_view_cond.ctrtRegStsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th w2tb_noTH'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_inqDtCls',search:'start',style:'width: 130px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:oGDS_view_cond.inqDtCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계약등록일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계약개시일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계약만료일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'inqStDt',style:'',id:'udc_fromToCalendar5',refEdDt:'inqEndDt',refDataMap:'oGDS_view_cond',class:'req',objTypeFrom:'data',mandatoryFrom:'true',edFromId:'ed_inqStDt',objTypeTo:'data',mandatoryTo:'true',objTypeBtn:'data',edToId:'ed_inqEndDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',objTypeCode:'Data',UpperFlagCode:'1',codeId:'ed_deptCd',nameId:'ed_deptNm',id:'udc_comCode2',objTypeName:'Data',maxlengthCode:'5',refDataCollection:'oGDS_view_cond',code:'deptCd','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent',name:'deptNm','ev:onviewchangeNameEvent':'scwin.udc_comCode2_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_empNo',nameId:'ed_empNm',id:'udc_comCode3',objTypeName:'data',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',UpperFlagCode:'1',refDataCollection:'oGDS_view_cond',code:'empNo',name:'empNm','ev:onclickEvent':'scwin.udc_comCode3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode3_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode3_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDomTransYn',objType:'data',ref:'data:oGDS_view_cond.bizDomTransYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDomStvYn',objType:'data',ref:'data:oGDS_view_cond.bizDomStvYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDomStrYn',objType:'data',ref:'data:oGDS_view_cond.bizDomStrYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDomInatYn',objType:'data',ref:'data:oGDS_view_cond.bizDomInatYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제항공'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDomInatSeaYn',objType:'data',ref:'data:oGDS_view_cond.bizDomInatSeaYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제해운'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDomTplYn',objType:'data',ref:'data:oGDS_view_cond.bizDomTplYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDivCntrYn',objType:'data',ref:'data:oGDS_view_cond.bizDivCntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_bizDivBulkYn',objType:'data',ref:'data:oGDS_view_cond.bizDivBulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_impYn',objType:'data',ref:'data:oGDS_view_cond.impYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_expYn',objType:'data',ref:'data:oGDS_view_cond.expYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_domesticYn',objType:'data',ref:'data:oGDS_view_cond.domesticYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sellClntClsCd',search:'start',style:'width: 150px;',submenuSize:'auto',objType:'data',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:oGDS_view_cond.sellClntClsCd',allOption:'','ev:onviewchange':'scwin.lc_sellClntClsCd_onviewchange'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'chb_dctrtMchtYn',ref:'data:oGDS_view_cond.dctrtMchtYn',rows:'',selectedindex:'1',style:'',renderType:'checkboxgroup',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직계약화주 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약서유무 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtDocExstYn',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:oGDS_view_cond.ctrtDocExstYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자등록번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_busiNo',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_crn',hideName:'true','ev:onclickEvent':'scwin.udc_crn_onclickEvent',allowCharCode:'0-9',maxlengthCode:'10'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrp',gridID:'gr_ctrt',btnUser:'Y',gridDownYn:'Y',btnPlusYn:'Y',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ctrt',style:'',id:'gr_ctrt',visibleRowNum:'14',class:'wq_gvw',defaultCellHeight:'24','ev:oncelldblclick':'scwin.gr_ctrt_oncelldblclick','ev:onrowindexchange':'scwin.gr_ctrt_onrowindexchange',readOnly:'true',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption15',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'계약번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'거래처 코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'사업자번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'계약영역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'계약 부문',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'수출입',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'거래처 구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'직계약 화주',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'계약서 유무',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'가계약 여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'등록 상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'410',inputType:'text',style:'',id:'column48',value:'계약일자',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column50',value:'계약담당',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'등록점소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'실등록자',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'등록',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'개시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'만료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column86',value:'해지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column85',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column84',value:'배분율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'link',id:'ctrtNo',displayMode:'label',sortable:'true',textAlign:'center',style:'color:blue;'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label',sortable:'false',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',class:'',displayMode:'label',sortable:'true',textAlign:'left',style:'text-align: left;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crn',class:'',displayMode:'label',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizDomYn',class:'',displayMode:'label',sortable:'true',textAlign:'left',fixPickerStatus:'bizDomYn',style:'text-align: left;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizDivYn',class:'',displayMode:'label',sortable:'true',textAlign:'left',fixPickerStatus:'bizDivYn',style:'text-align: left;'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'text-align: left;',id:'impExpYn',value:'',displayMode:'label',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'text-align: left;',id:'sellClntClsNm',value:'',displayMode:'label',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'text-align: center;',id:'dctrtMchtYn',class:'',value:'',displayMode:'label',sortable:'false',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'text-align: center;',id:'ctrtDocExstYn',class:'',value:'',displayMode:'label',sortable:'false',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'text-align: center;',id:'prvsCtrtYn',class:'',value:'',displayMode:'label',sortable:'false',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'text-align: left;',id:'ctrtRegStsNm',value:'',displayMode:'label',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',editFormat:'XXXX/XX/XX',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrtStDt',value:'',displayMode:'label',editFormat:'XXXX/XX/XX',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtEndDt',value:'',displayMode:'label',editFormat:'XXXX/XX/XX',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ctrtTmnDt',value:'',displayMode:'label',editFormat:'XXXX/XX/XX',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'text-align: left;',id:'ctrtEmpNm',value:'',displayMode:'label',sortable:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'ctrtAllocRt',value:'',displayMode:'label',sortable:'false',textAlign:'right',fixPickerStatus:'ctrtAllocRt',displayFormat:'###.00',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'text-align: left;',id:'ctrtDeptNm',value:'',displayMode:'label',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'text-align: left;',id:'regEmpNm',value:'',displayMode:'label',sortable:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ctrtChg',label:'삭제',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_changeCtrt(\'C\')'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계약변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_reCtrt',label:'저장',style:'',type:'button',disabled:'false',userAuth:'C','ev:onclick':'scwin.f_changeCtrt(\'R\')'},E:[{T:1,N:'xf:label',E:[{T:3,text:'재계약'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtNew',label:'저장',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_newCtrt'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtDel',label:'저장',style:'',type:'button',disabled:'true',userAuth:'D','ev:onclick':'scwin.f_deleteCtrt'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtPrint',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})