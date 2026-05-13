/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_08b.xml 44679 fe3ed5a7cae11294cd5dd134d976c2e697aa3f42f832472533a133fe5fd0ae40 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'플래그',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeCd',name:'구청코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeNm',name:'구청명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withholdList',saveRemovedData:'true','ev:ondataload':'scwin.ds_withholdList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dofficeCd',name:'구청코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구청명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'declarDept',name:'신고부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdPmntSlipNo',name:'소득세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizTaxPmntSlipNo',name:'사업세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'manTaxPmntSlipNo',name:'주민세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdPmntPostDt',name:'원천세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizTaxPmntPostDt',name:'사업세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'manTaxPmntPostDt',name:'주민세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'subSumTaxnAmt',name:'근로소득합계과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumIncomeTax',name:'근로소득합계소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumManTax',name:'근로소득합계주민세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizTaxAmt',name:'사업세액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumStaff',name:'근로소득합계인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dusePstMmWorkDdCnt',name:'일용직월근무일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retSlip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrievePaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_withholdList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_withholdList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.CreateBusinessTaxPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_withholdList","key":"IN_DS1"},{"id":"ds_search","key":"IN_DS2"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retSlip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ac.fi.taxbiz.withhold.DeleteBusinessTaxPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_withholdList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_08b
// 이름     : 사업소세지급요청전표
// 경로     : 재무회계/세무/원천세/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//           
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.vAdminYn = ""; // 어드민여부
scwin.userEmpNo = ""; // 사용자번호

scwin.isSubCompany = false; // 자회사여부

scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.ed_coCd_hidVal = ""; // 회사코드 히든
scwin.ed_dofficeCd_hidVal = ""; // 구청코드 히든
scwin.ed_acctDeptCd_hidVal = ""; // 신고부서 히든

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
scwin.txtClntNo = ""; //hidden의 거래처번호 초기화.

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd;
  scwin.vCoClsCd = coClsCd;
  scwin.userId = userId;
  scwin.vAdminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ userId     : " + scwin.userId + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ vUserHomeClsCd : " + scwin.vUserHomeClsCd + "   vAdminYn : " + scwin.vAdminYn);
  //    console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI048",
    compID: "lc_reqPayMthdCd"
  } // 지급방법
  ];
  console.log(" codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // f_createHeader();
    scwin.f_Setting();
    $c.gus.cfDisableAllBtn($p);
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 공통코드 후처리
//-------------------------------------------------------------------------
scwin.ondataload = function (e) {
  console.log("=== ondataload (공통코드2중화 - full 복사한후 조건에 따라 반영)");
  let dltStr = "dlt_commonCodeFI048"; // 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFI048_1", true); // dlt_commonCodeFI048_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFI048_1"); // 객체화
  //  $c.data.dataListFilter(dlt2, "fltrCd1 == 'D'");  // 새로운 데이터리스트에 필터("range" : "1,D")
  //  lc_payStsCd.setNodeSet("data:dlt_commonCodeFM053_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
};

//-------------------------------------------------------------------------
// 지급수단
//-------------------------------------------------------------------------
scwin.f_setPayMethod = function () {
  console.log("=== f_setPayMethod (지급방법 세팅)  txtCoClsCd [" + scwin.txtCoClsCd + "]");
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); // 지급귀속부서

  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU)
    // 자회사 회계 시스템  0
    {
      console.log("  -- 지급방법 FI048 변경 - 미지급금(1) 만");

      // lc_reqPayMthdCd.CBData ="1^미지급금";
      dlt_commonCodeFI048.removeAll();
      dlt_commonCodeFI048.insertRow();
      dlt_commonCodeFI048.setRowPosition(0);
      dlt_commonCodeFI048.setCellData(0, "grpCd", "FI048");
      dlt_commonCodeFI048.setCellData(0, "cd", "1");
      dlt_commonCodeFI048.setCellData(0, "cdNm", "미지급금"); // 필터 없음

      lc_reqPayMthdCd.setNodeSet("data:dlt_commonCodeFI048", "cdNm", "cd"); // 미지급금만 있는 DS
    } else {
    console.log("  -- 지급방법 FI048 변경 - 초기목록으로 복원");

    // lc_reqPayMthdCd.CBData ="<%= GauceUtil.getCodeList("FI048") %>";
    lc_reqPayMthdCd.setNodeSet("data:dlt_commonCodeFI048_1", "cdNm", "cd");
  }
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  lc_reqPayMthdCd.setSelectedIndex(0);

  // ds_search.NameString(1,"closeYm") =  "<%=DDate.getDate().substring(0,6)%>";
  var thisYm = $c.date.getServerDateTime($p, "yyyyMM");
  ds_search.set("closeYm", thisYm);
  ica_closeYm.focus();
  ed_coCd.setValue(scwin.vCoCd);
  scwin.txtCoClsCd = scwin.vCoClsCd;

  // 2025-12-17 중복실행으로 삭제
  // scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.txtCoClsCd = scwin.vCoClsCd;
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
  // if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>')  {  	// 자회사 회계 시스템
  // 	isSubCompany = true;
  // }else{
  // 	isSubCompany = false;
  // }

  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  // }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

// @@ ===== 조회 =============================================================================== //

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  console.log("=== f_SearchClear (조회부 클리어)");
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();

  // 2025-12-17 회사명 채움
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회(사업소세지급요청전표)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  scwin.txtClntNo = ""; //hidden의 거래처번호 초기화.

  // KYU_TEST : 회사코드 필수 체크 안함
  // if (!cfValidate([ed_closeYm,ed_dofficeCd]))
  let ret = await $c.gus.cfValidate($p, [ica_closeYm, ed_dofficeCd]);
  if (!ret) return false;

  // ds_search.UseChangeInfo = false;
  ds_search.set("flag", "Y");
  // tr_search.Action="/ac.fi.taxbiz.withhold.RetrievePaymentRequestSlipCMD.do";
  // tr_search.post();

  ds_search.set("coClsCd", scwin.txtCoClsCd);
  ds_search.set("clntNo", scwin.txtClntNo);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(사업소세지급요청전표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_withholdList event=OnLoadCompleted(rowCnt)>
  //   cfHideDSWaitMsg(gr_withholdList);
  // cfShowTotalRows(totalRows, rowCnt);

  var rowCnt = ds_withholdList.getTotalRow();
  ed_totalRows.setValue(rowCnt);

  // temp_cnt = rowCnt;  // 의미없음

  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

scwin.ds_withholdList_ondataload = function () {
  // <param name=SortExpr          value="+acctDeptCd">
  ds_withholdList.sort("acctDeptCd", 0);
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 구청코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_dofficeCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 귀속부서코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 								,ed_coCd.text, txt_coNm.value
  // 								,pWinCloseTF,null,null,null,null
  // 								,null,null,null,null,null);
  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

//-------------------------------------------------------------------------
// 팝업 @@
//    1:구청코드,2:귀속부서
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:구청코드,2:귀속부서)");
  switch (flag) {
    case '1':
      // 구청코드
      var param = "1," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      console.log("  구청코드popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveDOfficeCdInfo',ed_dofficeCd.text.trim(),txt_dofficeNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_dofficeCd.cfCommonPopUp(scwin.udc_dofficeCd_callBackFunc, ed_dofficeCd.getValue().trim(), ed_dofficeNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 귀속부서
      var param = "," + ica_closeYm.getValue().trim() + ",0,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      console.log("  귀속부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo7',ed_acctDeptCd.text.trim(),txt_acctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 회사코드조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    // KYU_NEW
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    // KYU_NEW
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }
  console.log("  scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]");

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차) - 자회사여부는 계속 바뀌어야 함
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      console.log("  ==-==-== 자회사 여부에 따른 회사코드팝업 활성/비활성 처리 (최초 1회)");

      // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
      if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
      }
      scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    }
};

//-------------------------------------------------------------------------
// 구청코드조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_dofficeCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_dofficeCd_callBackFunc (구청코드조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_dofficeCd, ed_dofficeNm, rtnList, '1');
};

//-------------------------------------------------------------------------
// 귀속부서 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_acctDeptCd_callBackFunc (귀속부서 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctDeptCd, ed_acctDeptNm, rtnList, '2');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:구청코드,2:귀속부서)");

  // if (rtnList != null ) {
  // 	if (rtnList[0] == "N/A") {
  // 			return;
  // 		}
  // 		strCd.Text = rtnList[0];	// 코드
  // 		strNm.value = rtnList[1];	// 명
  // 		strCd.hidVal = rtnList[0];  // 히든값

  //	    txt_costClsCd.value =  ""+rtnList[9];	//비용구분코드  (부서)

  // }else{
  // 	strCd.Text = "";
  // 	strNm.value = "";
  // 	strCd.hidVal = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 열고 그냥 닫았을 때
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_dofficeCd_hidVal = "";
          break;
        // 구청코드
        case '2':
          scwin.ed_acctDeptCd_hidVal = "";
          break;
        // 귀속부서
        default:
          break;
      }
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_dofficeCd_hidVal = rtnList[0];
        break;
      // 구청코드
      case '2':
        scwin.ed_acctDeptCd_hidVal = rtnList[0];
        break;
      // 귀속부서
      default:
        break;
    }

    // 구청일 경우 지급방법 세팅
    if (flag == '1') {
      scwin.f_setPayMethod();
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_dofficeCd_hidVal = "";
        break;
      // 구청코드
      case '2':
        scwin.ed_acctDeptCd_hidVal = "";
        break;
      // 귀속부서
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//    1:구청코드,2:귀속부서
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색  srtCd[" + strCd + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_dofficeCd_hidVal ||
  // 구청코드
  flag == '2' && strCd.getValue().trim() == scwin.ed_acctDeptCd_hidVal // 귀속부서
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";

  // 명 초기화
  switch (flag) {
    case '1':
      ed_dofficeNm.setValue("");
      break;
    // 구청코드
    case '2':
      ed_acctDeptNm.setValue("");
      break;
    // 귀속부서
    default:
      break;
  }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_dofficeCd_hidVal = "";
      break;
    // 구청코드
    case '2':
      scwin.ed_acctDeptCd_hidVal = "";
      break;
    // 귀속부서
    default:
      break;
  }

  // if(strCd.text.trim()!="")  f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    // 팝업 로딩
    switch (flag) {
      case '1':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 구청코드
      case '2':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 귀속부서
      default:
        break;
    }
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // <!-- 회사코드 입력시  --> 
  // language=JavaScript for=ed_coCd event=OnKillFocus()> 
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 구청코드 focus out
//-------------------------------------------------------------------------
scwin.udc_dofficeCd_onblurCodeEvent = function (e) {
  // <!-- 공통코드 -->
  // language=JavaScript for=ed_dofficeCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_dofficeCd, ed_dofficeNm, '1');
};

//-------------------------------------------------------------------------
// 지급귀속부서 focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  // JavaScript for=ed_acctDeptCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '2');
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 전표발행
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save(전표발행)");
  if (ds_withholdList.getTotalRow() == 0) {
    $c.win.alert($p, "데이타가 없습니다.");
    return;
  }

  // if (!cfValidate([ed_closeYm,ed_acctDeptCd,lc_reqPayMthdCd]))
  let ret = await $c.gus.cfValidate($p, [ica_closeYm, ed_acctDeptCd, lc_reqPayMthdCd]);
  if (!ret) return false;

  //2011.10.18 추가: 해당 신고 구청 거래처
  if (ds_withholdList.getCellData(0, "clntNo") == "") {
    await $c.win.alert($p, "해당 구청의 거래처가 등록되지 않았습니다.");
    return;
  } else {
    scwin.txtClntNo = ds_withholdList.getCellData(0, "clntNo");
  }
  for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
    if (ds_withholdList.getCellData(i, "bizTaxPmntSlipNo") != "") {
      await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "bizTaxPmntSlipNo") + "]는 이미 전표처리를 했습니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "closeYm") != ica_closeYm.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "지급연월이 조회된 데이타와 틀립니다.\n조회후 전표발행을 해야합니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "dofficeCd") != ed_dofficeCd.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "구청코드가 조회된 데이타와 틀립니다.\n조회후 전표발행을 해야합니다.");
      return;
    }
  }

  // ds_withholdList.UseChangeInfo = false;
  // ds_search.UseChangeInfo = false;
  // if(confirm("발행하시겠습니까?")==true){

  let rtn = await $c.win.confirm($p, "발행하시겠습니까?");
  if (rtn) {
    // tr_save.Action="/ac.fi.taxbiz.withhold.CreateBusinessTaxPaymentRequestSlipCMD.do";
    // tr_save.Post();

    ds_search.set("coClsCd", scwin.txtCoClsCd);
    ds_search.set("clntNo", scwin.txtClntNo);
    var dcJSON = ds_search.getJSON();
    console.log("  *** ds_search : " + JSON.stringify(dcJSON));
    var dc = ds_withholdList.getAllArray();
    console.log("  *** ds_withholdList (" + ds_withholdList.getTotalRow() + ") : " + JSON.stringify(dc));
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  console.log("▷ sbm_save_submitdone (저장 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 저장 DataSet -->
  // language=JavaScript for=tr_save event=OnSuccess()>

  if (ds_retSlip.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_retSlip.getCellData(0, "slipNo"));
  }
  $c.gus.cfEnableObjects($p, [ica_closeYm, ed_acctDeptCd, ed_acctDeptNm]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 전표취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  console.log("=== f_Cancel(전표취소)");
  if (ds_withholdList.getTotalRow() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
    if (ds_withholdList.getCellData(i, "bizTaxPmntSlipNo") == "") {
      await $c.gus.cfAlertMsg($p, "이미 취소처리를 했습니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "bizTaxPmntPostDt") != "") {
      await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "bizTaxPmntSlipNo") + "]는 이미 회계처리를 했습니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "closeYm") != ica_closeYm.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "지급연월이 조회된 데이타와 틀립니다.\n조회후 전표취소를 해야합니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "dofficeCd") != ed_dofficeCd.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "구청코드가 조회된 데이타와 틀립니다.\n조회후 전표취소를 해야합니다.");
      return;
    }
  }

  // ds_withholdList.UseChangeInfo = false;

  // if(confirm("취소하시겠습니까?")==true){
  let rtn = await $c.win.confirm($p, "취소하시겠습니까?");
  if (rtn) {
    // tr_cancel.Action="/ac.fi.taxbiz.withhold.DeleteBusinessTaxPaymentRequestSlipCMD.do";
    // tr_cancel.Post();

    ds_search.set("coClsCd", scwin.txtCoClsCd);
    ds_search.set("clntNo", scwin.txtClntNo);
    var dc = ds_withholdList.getAllArray();
    console.log("  *** ds_withholdList (" + ds_withholdList.getTotalRow() + ") : " + JSON.stringify(dc));
    $c.sbm.execute($p, sbm_cancel);
  }
};

//-------------------------------------------------------------------------
// 취소 submitdone
//-------------------------------------------------------------------------
scwin.sbm_cancel_submitdone = function (e) {
  console.log("▷ sbm_cancel_submitdone (취소 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  // <!-- 취소 DataSet -->
  // language=JavaScript for=tr_cancel event=OnSuccess()>
  $c.gus.cfAlertMsg($p, "성공적으로 취소되었습니다");
  $c.gus.cfEnableObjects($p, [ica_closeYm, ed_acctDeptCd, ed_acctDeptNm]);
  scwin.f_Retrieve();
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_withholdList");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "사업소세지급요청전표","사업소세지급요청전표.xls",8+16);

  if (ds_withholdList.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "사업소세지급요청전표";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: "true" // 줄바꿈
      ,
      colMerge: "true" // 병합
      ,
      colMergeValue: "Y" // 병합 풀어내면 데이타 들어가있음
    };
    $c.data.downloadGridViewExcel($p, gr_withholdList, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'searchTable',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'회사코드',id:'udc_coCd',btnId:'btn_coCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',code:'coCd',refDataCollection:'ds_search',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',ref:'data:ds_search.closeYm',title:'지급년월',objType:'data',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구청코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_dofficeCd',nameId:'ed_dofficeNm',popupID:'retrieveDOfficeCdInfopopup',selectID:'retrieveDOfficeCdInfo',style:'',validTitle:'구청코드',id:'udc_dofficeCd',btnId:'btn_dofficeCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',mandatoryCode:'true',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_dofficeCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dofficeCd_onblurCodeEvent',code:'dofficeCd',name:'dofficeNm',refDataCollection:'ds_search',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',gridID:'gr_withholdList',id:'udc_gridMain'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_withholdList',fixedColumn:'5',focusMode:'cell',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column30',inputType:'text',rowSpan:'',style:'',value:'구분',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column38',inputType:'text',rowSpan:'',style:'',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column64',inputType:'text',rowSpan:'',style:'',value:'귀속부서명',width:'200'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column52',inputType:'text',rowSpan:'',style:'',value:'근로소득과세금액',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column49',inputType:'text',rowSpan:'',style:'',value:'근로소득과세인원',width:'150'}},{T:1,N:'w2:column',A:{hidden:'false',width:'150',inputType:'text',style:'',id:'column166',value:'사업소세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column167',value:'사업세납부전표번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeNm',inputType:'text',style:'',value:'',width:'120',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subSumTaxnAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subSumStaff',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizTaxAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizTaxPmntSlipNo',value:'',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'subSumTaxnAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column74',inputType:'expression',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'subSumStaff\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'bizTaxAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column169',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급수단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqPayMthdCd',style:'',submenuSize:'fixed',ref:'data:ds_search.reqPayMthdCd',sortMethod:'ascending',sortOption:'value',title:'지급수단',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'retrieveAcctDeptCdInfo7popup',selectID:'retrieveAcctDeptCdInfo7',style:'',validTitle:'지급귀속부서',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',refDataCollection:'ds_search',code:'acctDeptCd',objTypeCode:'data',name:'acctDeptNm',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_btPost',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_btPostCancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]}]}]}]}]}]})