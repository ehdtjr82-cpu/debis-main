/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_09b.xml 47557 d54bb112bd37abfa7948768c5d5ce58459485b4e9f61b4477302a2d53cb35ca7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDept',name:'신고부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDeptNm',name:'신고부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withholdList',saveRemovedData:'true','ev:ondataload':'scwin.ds_withholdList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dofficeCd',name:'구청코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'declarDept',name:'신고부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdPmntSlipNo',name:'소득세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizTaxPmntSlipNo',name:'사업세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdPmntPostDt',name:'원천세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizTaxPmntPostDt',name:'사업세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizEtcTaxPmntSlipNo',name:'전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizEtcTaxPmntPostDt',name:'사업소득세/기타소득세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizStaff',name:'사업소득-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizTotAmt',name:'사업소득-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizIncomeTax',name:'사업-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizManTax',name:'사업소득-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcStaff',name:'기타소득-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcTotAmt',name:'기타소득-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcIncomeTax',name:'기타소득-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcManTax',name:'기타소득-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retSlip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveBizEtcPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_withholdList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_withholdList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.CreateBizEtcTaxPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_withholdList","key":"IN_DS1"},{"id":"ds_search","key":"IN_DS2"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retSlip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ac.fi.taxbiz.withhold.DeleteBizEtcTaxPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_withholdList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_09b
// 이름     : 사업/기타소득지급요청전표 
// 경로     : 재무회계/세무/원천세/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 그리드 헤더 2층
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
scwin.ed_declarDept_hidVal = ""; // 납부부서 히든
scwin.ed_clntNo_hidVal = ""; // 거래처 히든

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

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
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // f_Header();
    scwin.f_Setting();
    $c.gus.cfDisableAllBtn($p);
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 지급수단
//-------------------------------------------------------------------------
scwin.f_setPayMethod = function () {
  console.log("=== f_setPayMethod (지급방법 세팅)  txtCoClsCd [" + scwin.txtCoClsCd + "]");
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

  // KYU_TEST : 회사코드 필수 체크 안함
  // if (!cfValidate([ed_closeYm,ed_declarDept]))
  let ret = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept]);
  if (!ret) return false;

  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.taxbiz.withhold.RetrieveBizEtcPaymentRequestSlipCMD.do";
  // tr_search.post();

  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(사업소세지급요청전표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    ed_totalRows.setValue(ds_withholdList.getTotalRow());
    return;
  }

  // language=JavaScript for=ds_withholdList event=OnLoadCompleted(rowCnt)>
  //   cfHideDSWaitMsg(gr_withholdList);
  //   cfShowTotalRows(totalRows, rowCnt);

  var rowCnt = ds_withholdList.getTotalRow();
  ed_totalRows.setValue(rowCnt);

  // temp_cnt = rowCnt;  // 의미없음 - 행삭제,추가용

  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

scwin.ds_withholdList_ondataload = function () {
  // <param name=SortExpr          value="+dofficeCd">
  ds_withholdList.sort("dofficeCd", 0);
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 납부부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_declarDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 						,ed_coCd.text, txt_coNm.value
  // 						,pWinCloseTF,null,null,null,null
  // 						,null,null,null,null,null);
  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

//-------------------------------------------------------------------------
// 팝업 @@
//    1:납부부서,2:거래처
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:납부부서,2:거래처)");
  switch (flag) {
    case '1':
      // 납부부서 (신고부서)
      var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      console.log("  납부부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveWithHoldInfo',ed_declarDept.text.trim(),txt_declarDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_declarDept.cfCommonPopUp(scwin.udc_declarDept_callBackFunc, ed_declarDept.getValue().trim(), ed_declarDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 거래처
      var param = ",,," + ed_coCd.getValue();
      console.log("  거래처popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntList',ed_clntNo.text.trim(),txt_clntNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
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

    // txt_coNm.value = rtnList[5]; 	// 회사명
    // txtCoClsCd.value =rtnList[1];	// 회사구분
    // ed_coCd.text 	  = rtnList[0];

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
// 납부부서조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_declarDept_callBackFunc = function (rtnList) {
  console.log("▲ udc_declarDept_callBackFunc (납부부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_declarDept, ed_declarDeptNm, rtnList, '1');
};

//-------------------------------------------------------------------------
// 거래처 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_clntNo_callBackFunc (거래처 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_clntNo, ed_clntNm, rtnList, '2');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:납부부서,2:거래처)");

  // if (rtnList != null ) {
  //    if (rtnList[0] == "N/A") {
  // 			return;
  // 		}
  // 	strCd.Text = rtnList[0];	// 코드
  // 	strNm.value = rtnList[1];	// 명
  // 	strCd.hidVal = rtnList[0];  // 히든값
  // }else{
  // 	strCd.Text = "";
  // 	strNm.value = "";
  // 	strCd.hidVal = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_declarDept_hidVal = "";
          break;
        // 납부부서
        case '2':
          scwin.ed_clntNo_hidVal = "";
          break;
        // 거래처
        default:
          break;
      }
      return;
    }

    // 납부부서일 경우 지급방법 세팅
    //  rtnList [10,00009,재경,000,0,,,,,]    0 번이 다른 값!
    if (flag == '1') {
      strCd.setValue(rtnList[1]); // 코드
      strNm.setValue(rtnList[2]); // 명

      //회사 정보 set
      ed_coCd.setValue(rtnList[3]); //회사코드
      scwin.txtCoClsCd = rtnList[4]; //회사구분코드
      scwin.f_setPayMethod();
    } else if (flag == '2') {
      // 거래처
      strCd.setValue(rtnList[0]); // 코드
      strNm.setValue(rtnList[1]); // 명
    }

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_declarDept_hidVal = rtnList[1];
        break;
      // 납부부서
      case '2':
        scwin.ed_clntNo_hidVal = rtnList[0];
        break;
      // 거래처
      default:
        break;
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_declarDept_hidVal = "";
        break;
      // 납부부서
      case '2':
        scwin.ed_clntNo_hidVal = "";
        break;
      // 거래처
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//    1:납부부서,2:거래처
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색  srtCd[" + strCd + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_declarDept_hidVal ||
  // 납부부서
  flag == '2' && strCd.getValue().trim() == scwin.ed_clntNo_hidVal // 거래처
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";

  // 명 초기화
  switch (flag) {
    case '1':
      ed_declarDeptNm.setValue("");
      break;
    // 납부부서
    case '2':
      ed_clntNm.setValue("");
      break;
    // 거래처
    default:
      break;
  }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_declarDept_hidVal = "";
      break;
    // 납부부서
    case '2':
      scwin.ed_clntNo_hidVal = "";
      break;
    // 거래처
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
      // 납부부서
      case '2':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 거래처
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
// 납부부서 focus out
//-------------------------------------------------------------------------
scwin.udc_declarDept_onblurCodeEvent = function (e) {
  // <!-- 공통코드 -->
  // language=JavaScript for=ed_declarDept event=OnKillFocus()>
  scwin.f_checkPopEd(ed_declarDept, ed_declarDeptNm, '1');
};

//-------------------------------------------------------------------------
// 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  // <!-- 거래처 -->
  // language=JavaScript for=ed_clntNo event=OnKillFocus()>
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '2');
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

  // if (!cfValidate([ed_closeYm,ed_declarDept,lc_reqPayMthdCd,ed_clntNo]))
  let ret = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept, lc_reqPayMthdCd, ed_clntNo]);
  if (!ret) return false;
  for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
    if (ds_withholdList.getCellData(i, "bizEtcTaxPmntSlipNo") != "") {
      await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "bizEtcTaxPmntSlipNo") + "]는 이미 전표처리를 했습니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "closeYm") != ica_closeYm.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "지급연월이 조회된 데이타와 틀립니다.\n조회후 전표발행을 해야합니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "declarDept") != ed_declarDept.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "납부부서가 조회된 데이타와 틀립니다.\n조회후 전표발행을 해야합니다.");
      return;
    }
  }

  // ds_withholdList.UseChangeInfo = false;
  // ds_search.UseChangeInfo = false;
  // if(confirm("발행하시겠습니까?")==true){

  let rtn = await $c.win.confirm($p, "발행하시겠습니까?");
  if (rtn) {
    // tr_save.Action="/ac.fi.taxbiz.withhold.CreateBizEtcTaxPaymentRequestSlipCMD.do";
    // tr_save.Post();

    ds_search.set("coClsCd", scwin.txtCoClsCd);
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
  $c.gus.cfEnableObjects($p, [ica_closeYm, ed_declarDept, ed_declarDeptNm]);
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
    if (ds_withholdList.getCellData(i, "bizEtcTaxPmntSlipNo") == "") {
      await $c.gus.cfAlertMsg($p, "이미 취소처리를 했습니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "bizEtcTaxPmntPostDt") != "") {
      await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "bizEtcTaxPmntSlipNo") + "]는 이미 회계처리를 했습니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "closeYm") != ica_closeYm.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "지급연월이 조회된 데이타와 틀립니다.\n조회후 전표취소를 해야합니다.");
      return;
    }
    if (ds_withholdList.getCellData(i, "declarDept") != ed_declarDept.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "납부부서가 조회된 데이타와 틀립니다.\n조회후 전표취소를 해야합니다.");
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
  $c.gus.cfEnableObjects($p, [ica_closeYm, ed_declarDept, ed_declarDeptNm]);
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

  // 파일명에 / 있으면 생성 안됨
  var sheetTitle = "사업_기타소득지급요청전표";
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'searchTable',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'회사코드',id:'udc_coCd',btnId:'btn_coCd',refDataCollection:'ds_search',code:'coCd',allowCharCode:'0-9',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'3',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',pickerType:'dynamic',mandatory:'true',objType:'data',ref:'data:ds_search.closeYm',displayFormat:'yyyy/MM',title:'지급년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'납부부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_declarDept',nameId:'ed_declarDeptNm',popupID:'retrieveWithHoldInfopopup',selectID:'retrieveWithHoldInfo',style:'',validTitle:'납부부서',mandatoryCode:'true',id:'udc_declarDept',btnId:'btn_declarDept',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',code:'declarDept',name:'declarDeptNm',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_declarDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_declarDept_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger5',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_withholdList',gridDownUserAuth:'X',id:'udc_gridMain',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_withholdList',fixedColumn:'5',focusMode:'cell',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column162',value:'구청코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column30',inputType:'text',rowSpan:'2',style:'',value:'구분',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column38',inputType:'text',rowSpan:'2',style:'',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column64',inputType:'text',rowSpan:'2',style:'',value:'귀속부서명',width:'200'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column52',inputType:'text',rowSpan:'2',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column49',inputType:'text',rowSpan:'',style:'',value:'사업소득',width:'460',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column26',inputType:'text',rowSpan:'',style:'',value:'기타소득',width:'560',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column106',inputType:'text',rowSpan:'2',style:'',value:'전표번호',width:'150',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'인원',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'소득세',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'지방소득세',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'인원',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column95',inputType:'text',style:'',value:'소득세',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',style:'',value:'지방소득세',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'dofficeCd',value:'',displayMode:'label',textAlign:'center',hidden:'true',colMerge:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeNm',inputType:'text',style:'',value:'',width:'120',textAlign:'center',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizStaff',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizTotAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizIncomeTax',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizManTax',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcStaff',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcTotAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcIncomeTax',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcManTax',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizEtcTaxPmntSlipNo',inputType:'text',style:';color:blue;',value:'',width:'150',class:'underline',textAlign:'center',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column165',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column74',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'bizStaff\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'bizTotAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'bizIncomeTax\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'bizManTax\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'etcStaff\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'etcTotAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column97',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'etcIncomeTax\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'expression',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'etcManTax\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column149',inputType:'text',style:'',value:'',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급수단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqPayMthdCd',style:'',submenuSize:'fixed',ref:'data:ds_search.reqPayMthdCd',sortMethod:'ascending',sortOption:'value',title:'지급수단'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'retrieveClntListpopup',selectID:'retrieveClntList',style:'',validTitle:'거래처',id:'udc_clntNo',btnId:'btn_clntNo',refDataCollection:'ds_search',code:'clntNo',allowCharCode:'0-9',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'6',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]}]}]}]}]}]})