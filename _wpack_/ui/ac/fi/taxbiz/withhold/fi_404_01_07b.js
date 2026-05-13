/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_07b.xml 73232 72a3aa5d4a8f41e8a6b3033a238ef3697732e7f91df1f6ef6b18f5ffb3629db7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDept',name:'신고부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDeptNm',name:'신고부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipGb',name:'전표구분(0:소득세 1:지방소득세)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withholdList',saveRemovedData:'true','ev:ondataload':'scwin.ds_withholdList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chadae',name:'차대구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dofficeCd',name:'구청코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'declarDept',name:'신고부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdPmntSlipNo',name:'소득세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizTaxPmntSlipNo',name:'사업세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'manTaxPmntSlipNo',name:'주민세납부전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdPmntPostDt',name:'원천세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizTaxPmntPostDt',name:'사업세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'manTaxPmntPostDt',name:'주민세납부회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'salStaff',name:'급여와상여-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salTotAmt',name:'급여와상여-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salTaxnAmt',name:'급여와상여-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salIncomeTax',name:'급여와상여-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salManTax',name:'급여와상여-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstStaff',name:'일용직-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstMmWorkDdCnt',name:'일용직-근무일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstTotAmt',name:'일용직-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstTaxnAmt',name:'일용직-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstIncomeTax',name:'일용직-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstManTax',name:'일용직-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamStaff',name:'중도퇴직정산-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamTotAmt',name:'중도퇴직정산-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamTaxnAmt',name:'중도퇴직정산-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamIncomeTax',name:'중도퇴직정산-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamManTax',name:'중도퇴직정산-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdStaff',name:'이월납부세액계-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdTotAmt',name:'이월납부세액계-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdTaxnAmt',name:'이월납부세액계-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdIncomeTax',name:'이월납부세액계-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdManTax',name:'이월납부세액계-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireStaff',name:'퇴사소득-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireTotAmt',name:'퇴사소득-총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireTaxnAmt',name:'퇴사소득-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireIncomeTax',name:'퇴사소득-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireManTax',name:'퇴사소득-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mergeStd',name:'병합기준',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_retSlip',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveManPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_withholdList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_withholdList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.CreateWithholdPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_withholdList","key":"IN_DS1"},{"id":"ds_search","key":"IN_DS2"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retSlip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ac.fi.taxbiz.withhold.DeleteWithholdPaymentRequestSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_withholdList","key":"IN_DS1"},{"id":"ds_search","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_07b
// 이름     : 소득세/지방소득세지급요청전표 
// 경로     : 재무회계/세무/원천세/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 그리드 헤더 2층
//            지방소득세 일 때, 소계 포함됨 (sum 특수처리), 소계 보라색 처리
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

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.onpageload = function () {
  console.log("====== onpageload ================== v 1.01");

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
    // f_createHeader();
    scwin.f_Setting();
    $c.gus.cfDisableAllBtn($p);
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  lc_reqPayMthdCd.setSelectedIndex(0);
  lc_slipGb.setSelectedIndex(0);

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

//-------------------------------------------------------------------------
// 지급수단
//-------------------------------------------------------------------------
scwin.f_setPayMethod = function () {
  console.log("=== f_setPayMethod (지급방법 세팅)  txtCoClsCd [" + scwin.txtCoClsCd + "]");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU)
    // 자회사 회계 시스템
    {
      console.log("  -- 지급방법 FI048 변경 - 미지급금(1) 만");

      // lc_reqPayMthdCd.CBData ="1^미지급금";
      dlt_commonCodeFI048.removeAll();
      dlt_commonCodeFI048.insertRow();
      dlt_commonCodeFI048.setRowPosition(i);
      dlt_commonCodeFI048.setCellData(i, "grpCd", "FI048");
      dlt_commonCodeFI048.setCellData(i, "cd", "1");
      dlt_commonCodeFI048.setCellData(i, "cdNm", "미지급금"); // 필터 없음

      lc_reqPayMthdCd.setNodeSet("data:dlt_commonCodeFI048", "cdNm", "cd"); // 미지급금만 있는 DS
    } else {
    console.log("  -- 지급방법 FI048 변경 - 초기목록으로 복원");

    // lc_reqPayMthdCd.CBData ="<%= GauceUtil.getCodeList("FI048") %>";
    lc_reqPayMthdCd.setNodeSet("data:dlt_commonCodeFI048_1", "cdNm", "cd");
  }
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
// 전표구분 변경
//-------------------------------------------------------------------------
scwin.lc_slipGb_onchange = function (info) {
  scwin.f_Retrieve();
  // 전표구분변경 후처리
  // scwin.afterChangeSlipGb();
};

//-------------------------------------------------------------------------
// 조회(소득세/지방소득세지급요청전표)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!cfValidate([ed_closeYm,ed_declarDept,lc_slipGb]))
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm, ed_declarDept, lc_slipGb]);
  if (!ret) return false;

  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.taxbiz.withhold.RetrieveManPaymentRequestSlipCMD.do";
  // tr_search.post();

  // <C> Col=coCd		         	Ctrl=txtCoCd		            Param=value     </C> 
  // <C> Col=coClsCd		         	Ctrl=txtCoClsCd                 Param=value     </C>

  // KYU_TEST : 오류. txtCoCd 에 값을 부여하지 않음. 회사코드팝업의 코드로 연결
  // ds_search.set("coCd", scwin.txtCoCd );
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(소득세/지방소득세지급요청전표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_withholdList event=OnLoadCompleted(rowCnt)>
  //   cfHideDSWaitMsg(gr_withholdList);

  // 전표구분변경 후처리
  scwin.afterChangeSlipGb();
};

//-------------------------------------------------------------------------
// 전표구분변경 후처리
//-------------------------------------------------------------------------
scwin.afterChangeSlipGb = async function () {
  console.log("=== afterChangeSlipGb (전표구분변경 후처리)");
  var rowCnt = ds_withholdList.getTotalRow();
  var rowCntOri = ds_withholdList.getTotalRow();
  var temp_salStaffTot = 0;
  var temp_salTotAmtTot = 0;
  var temp_salTaxnAmtTot = 0;
  var temp_salIncomeTaxTot = 0;
  var temp_salManTaxTot = 0;
  var temp_dusePstStaffTot = 0;
  var temp_dusePstMmWorkDdCntTot = 0;
  var temp_dusePstTotAmtTot = 0;
  var temp_dusePstTaxnAmtTot = 0;
  var temp_dusePstIncomeTaxTot = 0;
  var temp_dusePstManTaxTot = 0;
  var temp_midstreamStaffTot = 0;
  var temp_midstreamTotAmtTot = 0;
  var temp_midstreamTaxnAmtTot = 0;
  var temp_midstreamIncomeTaxTot = 0;
  var temp_midstreamManTaxTot = 0;
  var temp_caryFwrdStaffTot = 0;
  var temp_caryFwrdTotAmtTot = 0;
  var temp_caryFwrdTaxnAmtTot = 0;
  var temp_caryFwrdIncomeTaxTot = 0;
  var temp_caryFwrdManTaxTot = 0;
  var temp_retireStaffTot = 0;
  var temp_retireTotAmtTot = 0;
  var temp_retireTaxnAmtTot = 0;
  var temp_retireIncomeTaxTot = 0;
  var temp_retireManTaxTot = 0;
  if (lc_slipGb.getValue() == "1") {
    // 지방소득세 일때 총건수 (총 row수 - 합계수)
    var count = 0;
    for (i = 0; i < rowCnt; i++) {
      if (ds_withholdList.getCellData(i, "chadae") == "D") {
        count = count + 1;
        temp_salStaffTot = temp_salStaffTot + Number(ds_withholdList.getCellData(i, "salStaff"));
        temp_salTotAmtTot = temp_salTotAmtTot + Number(ds_withholdList.getCellData(i, "salTotAmt"));
        temp_salTaxnAmtTot = temp_salTaxnAmtTot + Number(ds_withholdList.getCellData(i, "salTaxnAmt"));
        temp_salIncomeTaxTot = temp_salIncomeTaxTot + Number(ds_withholdList.getCellData(i, "salIncomeTax"));
        temp_salManTaxTot = temp_salManTaxTot + Number(ds_withholdList.getCellData(i, "salManTax"));
        temp_dusePstStaffTot = temp_dusePstStaffTot + Number(ds_withholdList.getCellData(i, "dusePstStaff"));
        temp_dusePstMmWorkDdCntTot = temp_dusePstMmWorkDdCntTot + Number(ds_withholdList.getCellData(i, "dusePstMmWorkDdCnt"));
        temp_dusePstTotAmtTot = temp_dusePstTotAmtTot + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"));
        temp_dusePstTaxnAmtTot = temp_dusePstTaxnAmtTot + Number(ds_withholdList.getCellData(i, "dusePstTaxnAmt"));
        temp_dusePstIncomeTaxTot = temp_dusePstIncomeTaxTot + Number(ds_withholdList.getCellData(i, "dusePstIncomeTax"));
        temp_dusePstManTaxTot = temp_dusePstManTaxTot + Number(ds_withholdList.getCellData(i, "dusePstManTax"));
        temp_midstreamStaffTot = temp_midstreamStaffTot + Number(ds_withholdList.getCellData(i, "midstreamStaff"));
        temp_midstreamTotAmtTot = temp_midstreamTotAmtTot + Number(ds_withholdList.getCellData(i, "midstreamTotAmt"));
        temp_midstreamTaxnAmtTot = temp_midstreamTaxnAmtTot + Number(ds_withholdList.getCellData(i, "midstreamTaxnAmt"));
        temp_midstreamIncomeTaxTot = temp_midstreamIncomeTaxTot + Number(ds_withholdList.getCellData(i, "midstreamIncomeTax"));
        temp_midstreamManTaxTot = temp_midstreamManTaxTot + Number(ds_withholdList.getCellData(i, "midstreamManTax"));
        temp_caryFwrdStaffTot = temp_caryFwrdStaffTot + Number(ds_withholdList.getCellData(i, "caryFwrdStaff"));
        temp_caryFwrdTotAmtTot = temp_caryFwrdTotAmtTot + Number(ds_withholdList.getCellData(i, "caryFwrdTotAmt"));
        temp_caryFwrdTaxnAmtTot = temp_caryFwrdTaxnAmtTot + Number(ds_withholdList.getCellData(i, "caryFwrdTaxnAmt"));
        temp_caryFwrdIncomeTaxTot = temp_caryFwrdIncomeTaxTot + Number(ds_withholdList.getCellData(i, "caryFwrdIncomeTax"));
        temp_caryFwrdManTaxTot = temp_caryFwrdManTaxTot + Number(ds_withholdList.getCellData(i, "caryFwrdManTax"));
        temp_retireStaffTot = temp_retireStaffTot + Number(ds_withholdList.getCellData(i, "retireStaff"));
        temp_retireTotAmtTot = temp_retireTotAmtTot + Number(ds_withholdList.getCellData(i, "retireTotAmt"));
        temp_retireTaxnAmtTot = temp_retireTaxnAmtTot + Number(ds_withholdList.getCellData(i, "retireTaxnAmt"));
        temp_retireIncomeTaxTot = temp_retireIncomeTaxTot + Number(ds_withholdList.getCellData(i, "retireIncomeTax"));
        temp_retireManTaxTot = temp_retireManTaxTot + Number(ds_withholdList.getCellData(i, "retireManTax"));
      }
    }
    rowCnt = rowCnt - count; // subTotal 건수는 뺀다
  } else {
    // 소득세는 그냥 더한다
    for (i = 0; i < rowCnt; i++) {
      count = count + 1;
      temp_salStaffTot = temp_salStaffTot + Number(ds_withholdList.getCellData(i, "salStaff"));
      temp_salTotAmtTot = temp_salTotAmtTot + Number(ds_withholdList.getCellData(i, "salTotAmt"));
      temp_salTaxnAmtTot = temp_salTaxnAmtTot + Number(ds_withholdList.getCellData(i, "salTaxnAmt"));
      temp_salIncomeTaxTot = temp_salIncomeTaxTot + Number(ds_withholdList.getCellData(i, "salIncomeTax"));
      temp_salManTaxTot = temp_salManTaxTot + Number(ds_withholdList.getCellData(i, "salManTax"));
      temp_dusePstStaffTot = temp_dusePstStaffTot + Number(ds_withholdList.getCellData(i, "dusePstStaff"));
      temp_dusePstMmWorkDdCntTot = temp_dusePstMmWorkDdCntTot + Number(ds_withholdList.getCellData(i, "dusePstMmWorkDdCnt"));
      temp_dusePstTotAmtTot = temp_dusePstTotAmtTot + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"));
      temp_dusePstTaxnAmtTot = temp_dusePstTaxnAmtTot + Number(ds_withholdList.getCellData(i, "dusePstTaxnAmt"));
      temp_dusePstIncomeTaxTot = temp_dusePstIncomeTaxTot + Number(ds_withholdList.getCellData(i, "dusePstIncomeTax"));
      temp_dusePstManTaxTot = temp_dusePstManTaxTot + Number(ds_withholdList.getCellData(i, "dusePstManTax"));
      temp_midstreamStaffTot = temp_midstreamStaffTot + Number(ds_withholdList.getCellData(i, "midstreamStaff"));
      temp_midstreamTotAmtTot = temp_midstreamTotAmtTot + Number(ds_withholdList.getCellData(i, "midstreamTotAmt"));
      temp_midstreamTaxnAmtTot = temp_midstreamTaxnAmtTot + Number(ds_withholdList.getCellData(i, "midstreamTaxnAmt"));
      temp_midstreamIncomeTaxTot = temp_midstreamIncomeTaxTot + Number(ds_withholdList.getCellData(i, "midstreamIncomeTax"));
      temp_midstreamManTaxTot = temp_midstreamManTaxTot + Number(ds_withholdList.getCellData(i, "midstreamManTax"));
      temp_caryFwrdStaffTot = temp_caryFwrdStaffTot + Number(ds_withholdList.getCellData(i, "caryFwrdStaff"));
      temp_caryFwrdTotAmtTot = temp_caryFwrdTotAmtTot + Number(ds_withholdList.getCellData(i, "caryFwrdTotAmt"));
      temp_caryFwrdTaxnAmtTot = temp_caryFwrdTaxnAmtTot + Number(ds_withholdList.getCellData(i, "caryFwrdTaxnAmt"));
      temp_caryFwrdIncomeTaxTot = temp_caryFwrdIncomeTaxTot + Number(ds_withholdList.getCellData(i, "caryFwrdIncomeTax"));
      temp_caryFwrdManTaxTot = temp_caryFwrdManTaxTot + Number(ds_withholdList.getCellData(i, "caryFwrdManTax"));
      temp_retireStaffTot = temp_retireStaffTot + Number(ds_withholdList.getCellData(i, "retireStaff"));
      temp_retireTotAmtTot = temp_retireTotAmtTot + Number(ds_withholdList.getCellData(i, "retireTotAmt"));
      temp_retireTaxnAmtTot = temp_retireTaxnAmtTot + Number(ds_withholdList.getCellData(i, "retireTaxnAmt"));
      temp_retireIncomeTaxTot = temp_retireIncomeTaxTot + Number(ds_withholdList.getCellData(i, "retireIncomeTax"));
      temp_retireManTaxTot = temp_retireManTaxTot + Number(ds_withholdList.getCellData(i, "retireManTax"));
    }
  }

  // cfShowTotalRows(totalRows, rowCnt);
  ed_totalRows.setValue(rowCnt);
  gr_withholdList.setFooterValue("salStaffTot", temp_salStaffTot);
  gr_withholdList.setFooterValue("salTotAmtTot", temp_salTotAmtTot);
  gr_withholdList.setFooterValue("salTaxnAmtTot", temp_salTaxnAmtTot);
  gr_withholdList.setFooterValue("salIncomeTaxTot", temp_salIncomeTaxTot);
  gr_withholdList.setFooterValue("salManTaxTot", temp_salManTaxTot);
  gr_withholdList.setFooterValue("dusePstStaffTot", temp_dusePstStaffTot);
  gr_withholdList.setFooterValue("dusePstMmWorkDdCntTot", temp_dusePstMmWorkDdCntTot);
  gr_withholdList.setFooterValue("dusePstTotAmtTot", temp_dusePstTotAmtTot);
  gr_withholdList.setFooterValue("dusePstTaxnAmtTot", temp_dusePstTaxnAmtTot);
  gr_withholdList.setFooterValue("dusePstIncomeTaxTot", temp_dusePstIncomeTaxTot);
  gr_withholdList.setFooterValue("dusePstManTaxTot", temp_dusePstManTaxTot);
  gr_withholdList.setFooterValue("midstreamStaffTot", temp_midstreamStaffTot);
  gr_withholdList.setFooterValue("midstreamTotAmtTot", temp_midstreamTotAmtTot);
  gr_withholdList.setFooterValue("midstreamTaxnAmtTot", temp_midstreamTaxnAmtTot);
  gr_withholdList.setFooterValue("midstreamIncomeTaxTot", temp_midstreamIncomeTaxTot);
  gr_withholdList.setFooterValue("midstreamManTaxTot", temp_midstreamManTaxTot);
  gr_withholdList.setFooterValue("caryFwrdStaffTot", temp_caryFwrdStaffTot);
  gr_withholdList.setFooterValue("caryFwrdTotAmtTot", temp_caryFwrdTotAmtTot);
  gr_withholdList.setFooterValue("caryFwrdTaxnAmtTot", temp_caryFwrdTaxnAmtTot);
  gr_withholdList.setFooterValue("caryFwrdIncomeTaxTot", temp_caryFwrdIncomeTaxTot);
  gr_withholdList.setFooterValue("caryFwrdManTaxTot", temp_caryFwrdManTaxTot);
  gr_withholdList.setFooterValue("retireStaffTot", temp_retireStaffTot);
  gr_withholdList.setFooterValue("retireTotAmtTot", temp_retireTotAmtTot);
  gr_withholdList.setFooterValue("retireTaxnAmtTot", temp_retireTaxnAmtTot);
  gr_withholdList.setFooterValue("retireIncomeTaxTot", temp_retireIncomeTaxTot);
  gr_withholdList.setFooterValue("retireManTaxTot", temp_retireManTaxTot);
  scwin.temp_cnt = rowCnt;
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
  if (rowCnt > 0) {
    if (lc_slipGb.getValue() == "0") {
      // 소득세
      // tbl_sumComment.style.visibility = "hidden";
      tbl_sumComment.hide(); // 행은 합계입니다. 숨김

      // gr_withholdList.setSubtotalVisible(false);  // subTotal 안보임 - 구현불가
    } else {
      // 지방소득세
      // tbl_sumComment.style.visibility = "";
      tbl_sumComment.show(""); // 행은 합계입니다. 보임

      // gr_withholdList.setSubtotalVisible(true);  // subTotal 보임 - 구현불가
    }
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// cell 색상 변경 : 부여 필요
//-------------------------------------------------------------------------
scwin.changeCellColorExp = function (data, formatData, rowIdx, colIdx) {
  //pmntSlipNoExp
  // console.log("  === === cell 색 변경 row ["+rowIdx+"] col ["+colIdx+"]");
  let temp_slipGb = lc_slipGb.getValue();
  let temp_chadae = ds_withholdList.getCellData(rowIdx, "chadae");
  if (temp_slipGb == '1' && temp_chadae == "D") {
    // 지방소득세
    gr_withholdList.setCellBackgroundColor(rowIdx, colIdx, "#E8D9FF");
  } else {}
  return formatData;
};

// scwin.declarDeptExp = function (data, formatData, rowIdx, colIdx) { //pmntSlipNoExp
//     console.log("=== declarDeptExp (납부부서코드) ["+rowIdx+"]");
//     let lc_declarDept = ds_search.get("declarDept");
//     return lc_declarDept;
// };

// scwin.declarDeptNmExp = function (data, formatData, rowIdx, colIdx) { //pmntSlipNoExp
//     console.log("=== declarDeptExp (납부부서명) ["+rowIdx+"]");
//     let lc_declarDeptNm = ds_search.get("declarDeptNm");
//     return lc_declarDeptNm;
// };

//-------------------------------------------------------------------------
// 그리드 정렬
//-------------------------------------------------------------------------
scwin.ds_withholdList_ondataload = function () {
  // <param name=SortExpr          value="+dofficeCd">
  ds_withholdList.sort("dofficeCd", 0);
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
//    1:납부부서
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:납부부서)");
  switch (flag) {
    case '1':
      // 납부부서 (신고부서)
      var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      console.log("  납부부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveWithHoldInfo',ed_declarDept.text.trim(),txt_declarDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_declarDept.cfCommonPopUp(scwin.udc_declarDept_callBackFunc, ed_declarDept.getValue().trim(), ed_declarDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
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
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:납부부서)");

  // if (rtnList != null ) {
  //   if (rtnList[0] == "N/A") {
  // 		return;
  // 	}
  // 	ed_declarDept.Text = rtnList[1];	// 코드
  // 	txt_declarDeptNm.value = rtnList[2];	// 명
  // 	ed_declarDept.hidVal = rtnList[1];  // 히든값

  // 	//회사 정보 set
  // 	ed_coCd.text    	= rtnList[3];		//회사코드
  // 	txtCoClsCd.value    = rtnList[4];		//회사구분코드

  // 	f_setPayMethod();
  // }else{
  // 	ed_declarDept.Text = "";
  // 	txt_declarDeptNm.value = "";
  // 	ed_declarDept.hidVal = "";
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
    }

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_declarDept_hidVal = rtnList[1];
        break;
      // 납부부서
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
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_declarDept_hidVal // 납부부서
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
      default:
        break;
    }
  }
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

  // if (!cfValidate([ed_closeYm,ed_declarDept,lc_reqPayMthdCd,lc_slipGb])) //20111019 lc_slipGb 추가
  let ret = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept, lc_reqPayMthdCd, lc_slipGb]); //20111019 lc_slipGb 추가
  if (!ret) return false;
  if (lc_slipGb.getValue() == "0") {
    //20111020 소득세
    for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
      if (ds_withholdList.getCellData(i, "withholdPmntSlipNo") != "") {
        await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "withholdPmntSlipNo") + "]는 이미 전표처리를 했습니다.");
        return;
      }
      if (ds_withholdList.getCellData(i, "closeYm") != ica_closeYm.getValue().trim()) {
        await $c.gus.cfAlertMsg($p, "지급연월이 조회된 데이타와 틀립니다.\n조회후 전표발행을 해야합니다.");
        return;
      }
      if (ds_withholdList.getCellData(i, "declarDept") != ed_declarDept.getValue().trim()) {
        cfAlertMsg("납부부서가 조회된 데이타와 틀립니다.\n조회후 전표발행을 해야합니다.");
        return;
      }
    }
  } else if (lc_slipGb.getValue() == "1") {
    //20111020 지방소득세
    for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
      if (ds_withholdList.getCellData(i, "manTaxPmntSlipNo") != "") {
        await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "manTaxPmntSlipNo") + "]는 이미 전표처리를 했습니다.");
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
  }

  // ds_withholdList.UseChangeInfo = false;
  // ds_search.UseChangeInfo = false;

  // if(confirm("발행하시겠습니까?")==true){
  //  tr_save.Action="/ac.fi.taxbiz.withhold.CreateWithholdPaymentRequestSlipCMD.do";
  //  tr_save.Post();
  // }

  let rtn = await $c.win.confirm($p, "발행하시겠습니까?");
  if (rtn) {
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
  if (lc_slipGb.getValue() == "0") {
    //20111020 소득세

    for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
      if (ds_withholdList.getCellData(i, "withholdPmntSlipNo") == "") {
        await $c.gus.cfAlertMsg($p, "이미 취소처리를 했습니다.");
        return;
      }
      if (ds_withholdList.getCellData(i, "withholdPmntPostDt") != "") {
        await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "withholdPmntSlipNo") + "]는 이미 회계처리를 했습니다.");
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
  } else if (lc_slipGb.getValue() == "1") {
    //20111020 지방소득세

    for (i = 0; i < ds_withholdList.getTotalRow(); i++) {
      if (ds_withholdList.getCellData(i, "manTaxPmntSlipNo") == "") {
        await $c.gus.cfAlertMsg($p, "이미 취소처리를 했습니다.");
        return;
      }
      if (ds_withholdList.getCellData(i, "manTaxPmntPostDt") != "") {
        await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withholdList.getCellData(i, "manTaxPmntSlipNo") + "]는 이미 회계처리를 했습니다.");
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
  }

  // ds_withholdList.UseChangeInfo = false;
  // if(confirm("취소하시겠습니까?")==true){
  //  tr_cancel.Action="/ac.fi.taxbiz.withhold.DeleteWithholdPaymentRequestSlipCMD.do";
  //  tr_cancel.Post();
  // }

  let rtn = await $c.win.confirm($p, "취소하시겠습니까?");
  if (rtn) {
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
  // 	cfGridToExcel(objGridName, "소득세/지방소득세지급요청전표","소득세/지방소득세지급요청전표.xls",8+16);

  if (ds_withholdList.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }

  // 파일명에 / 있으면 생성 안됨
  var sheetTitle = "소득세_지방소득세지급요청전표";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true,
      // 줄바꿈
      useSubTotal: true // 소계출력
      ,
      "colMerge": "true" // 병합
      ,
      "colMergeValue": "Y" // 병합 풀어내면 데이타 들어가있음
    };
    $c.data.downloadGridViewExcel($p, gr_withholdList, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'searchTable',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',btnId:'btn_coCd',id:'udc_coCd',allowCharCode:'0-9',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',ref:'data:ds_search.closeYm',displayFormat:'yyyy/MM',title:'지급년월',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'납부부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_declarDept',nameId:'ed_declarDeptNm',popupID:'retrieveWithHoldInfopopup',selectID:'retrieveWithHoldInfo',style:'',validTitle:'납부부서',id:'udc_declarDept',btnId:'btn_declarDept',code:'declarDept',name:'declarDeptNm',refDataCollection:'ds_search',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_declarDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_declarDept_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipGb',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.slipGb',objType:'data','ev:onchange':'scwin.lc_slipGb_onchange',title:'전표구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'소득세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지방소득세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_withholdList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_withholdList',focusMode:'cell',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 300px;',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'귀속부서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column64',value:'귀속부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'근무지명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column49',value:'급여와상여',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'일용직',width:'560',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column82',value:'중도퇴직정산',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column122',value:'이월납부세액계',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column106',value:'퇴직소득',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'근무일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column91',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column131',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column127',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column103',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column159',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column155',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column151',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column147',value:'지방소득세',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'workSiteNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',customFormatter:'scwin.changeCellColorExp',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'salStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salTotAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salTaxnAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salIncomeTax',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salManTax',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dusePstStaff',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dusePstMmWorkDdCnt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dusePstTotAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstTaxnAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstIncomeTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dusePstManTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamStaff',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamTotAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamTaxnAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamIncomeTax',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'midstreamManTax',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdStaff',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdTotAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdTaxnAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdIncomeTax',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'caryFwrdManTax',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireStaff',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireTotAmt',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireTaxnAmt',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireIncomeTax',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'retireManTax',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',customFormatter:'scwin.changeCellColorExp'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'salStaffTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'salStaff\')',customFormatter:'scwin.changeClassExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'salTotAmtTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'salTotAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'salTaxnAmtTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'salTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'salIncomeTaxTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'salIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'salManTaxTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'salManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstStaffTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'dusePstStaff\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstMmWorkDdCntTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'dusePstMmWorkDdCnt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstTotAmtTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'dusePstTotAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstTaxnAmtTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'dusePstTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstIncomeTaxTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'dusePstIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dusePstManTaxTot',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'sum(\'dusePstManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamStaffTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'midstreamStaff\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamTotAmtTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'midstreamTotAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamTaxnAmtTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'midstreamTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamIncomeTaxTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'midstreamIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'midstreamManTaxTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'midstreamManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdStaffTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdTotAmtTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'caryFwrdStaff\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdTaxnAmtTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'caryFwrdTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdIncomeTaxTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'caryFwrdIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'caryFwrdManTaxTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'caryFwrdManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireStaffTot',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'sum(\'retireStaff\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireTotAmtTot',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'sum(\'retireTotAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireTaxnAmtTot',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'sum(\'retireTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireIncomeTaxTot',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'sum(\'retireIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'retireManTaxTot',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'sum(\'retireManTax\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급수단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqPayMthdCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.reqPayMthdCd',sortMethod:'ascending',sortOption:'value',title:'지급수단'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_btPost',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_btPostCancel',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'tbl_sumComment',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'bg-type6',id:'',label:'',style:'padding: 10px 20px;;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'행은 합계입니다.',style:''}}]}]}]}]}]}]}]})