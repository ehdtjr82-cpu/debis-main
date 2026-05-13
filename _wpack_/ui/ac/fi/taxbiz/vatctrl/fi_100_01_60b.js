/*amd /ui/ac/fi/taxbiz/vatctrl/fi_100_01_60b.xml 84379 cf382d68875c4f6455144760c638481c99ec356327cdc50f4a9569a45ad6d355 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'신고년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'부가세분기구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'시작년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'종료년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'submitDt',name:'제출일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Tmp_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'신고년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'부가세분기구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDeptNm',name:'신고부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'propertyAddr',name:'부동산소재지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWkPlaceNo',name:'단위사업장적용번호(종사업장번호)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWkPlaceNm',name:'상호명(법인명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dong',name:'동',dataType:'text'}},{T:1,N:'w2:column',A:{id:'floor',name:'층',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hoNo',name:'호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'면적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseCrn',name:'임차인사업자(주민)등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseName',name:'임차인상호(성명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentContMoveDt',name:'임대계약입주일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentContChgDt',name:'임대계약갱신일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentContOutDt',name:'임대계약퇴거일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentContCertAmt',name:'임대계약내용보증금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rentContRentAmt',name:'임대계약내용월임대료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sum',name:'임대수입료합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rentCertRate',name:'임대료보증금이자',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rentInMmAmt',name:'임대료수입금액월임대료',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'신고년도',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'부가세분기구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'declarDeptNm',name:'신고부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'propertyAddr',name:'부동산소재지',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'subWkPlaceNo',name:'단위사업장적용번호(종사업장번호)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'subWkPlaceNm',name:'상호명(법인명)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dong',name:'동',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'floor',name:'층',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hoNo',name:'호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'area',name:'면적',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'leaseCrn',name:'임차인사업자(주민)등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'leaseName',name:'임차인상호(성명)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rentContMoveDt',name:'임대계약입주일',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rentContChgDt',name:'임대계약갱신일',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rentContOutDt',name:'임대계약퇴거일',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rentContCertAmt',name:'임대계약내용보증금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rentContRentAmt',name:'임대계약내용월임대료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sum',name:'임대수입료합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rentCertRate',name:'임대료보증금이자',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rentInMmAmt',name:'임대료수입금액월임대료',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_VatDeclare',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'COL11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'COL12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'COL13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'COL14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'COL15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'COL16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'COL17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'COL18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col19',name:'COL19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col20',name:'COL20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col21',name:'COL21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col22',name:'COL22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col23',name:'COL23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col24',name:'COL24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filesize',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatctrl.RetrieveRealEstateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatctrl.SaveRealEstateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_evid","key":"IN_DS1"},{"id":"ds_search","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vatDeclare',action:'/ac.fi.taxbiz.vatctrl.CreateFileRealEstateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_VatDeclare","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_VatDeclare","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_100_01_60b
// 이름     : 부동산임대공급가액명세서
// 경로     : 재무회계/세무/부가세신고
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
/*
CSV파일로 내역 업로드 > 저장 > 조회 > 파일생성 을 순환하며
데이터를 가공해 전자매체를 생성한다.

// 업로드시 유의사항

1. CSV파일로 변환시 ( , )를 기준으로 변환되어 금액필드의 , 앞의 숫자만 읽어들이는 현상이 있으므로
   금액필드를 일반서식으로 전환 후 업로드 해야한다.

2. 갱신일이 있을 경우에 입주일과 퇴거일을 기재해야한다.

3. 분기구분을 1기예정 : 1, 1기확정 : 2, 2기예정 : 3, 2기확정 : 4 로 입력해야한다.

4. 귀속년도와 분기구분이 화면상의 조회필수조건과 일치해야한다.

5. 사업자등록번호와 주민등록번호, 입주일, 갱신일, 퇴거일을 숫자형태로만 기재해야한다.

6. 층을 기재할 경우 “B", "숫자”, “-”, “,” 만 기재할 수 있다.

7. 임대료수익금액계(과세표준)은 임대료보증금이자와 임대료수입금액월임대료를 합한 금액이다.

8. 임대료보증금이자 : (해당과세기간의 임대보증금 또는 전세금)*정기예금이자율*해당 과세기간의 일수 / 365(윤년의 경우에는 366)
    2014. 04. 04 현재 기준 [ 보증금 * (0.029 * (90 / 365)) ] 로 계산한다.

9. 임대계약내용보증금 : 임대차계약서상의 임대보증금 · 전세금

10. 임대계약내용월임대료 : 임대차계약서상의 월세

11. 임대료수입금액월임대료 : 해당과세기간의 월수 * 월임대료 (개월수 필드없이 계산된 금액을 입력받는다.)

12. 면적 소수점은 2자리까지 기재할수있다.

13. 종사업자일련번호 : 주사업장인 경우 ‘0000’, 사업자단위과세적용사업장이 아닌 경우 ‘0000’

14. 갱신일 : 과세기간내에 갱신일이 기재된 경우 임차인에 대해 2개의 자료가 기재되어야 하며
     입주일, 퇴거일을 반드시 입력해야 한다.

15. 부가세신고의 목적으로 개발되었으며 귀속부서코드로 조회되는 종사업장번호와
     실제 신고해야하는 종사업장번호가 다른 경우가 있어 tb_fi315 테이블에서 별도관리 한다. (재경팀 요청사항)

16. 파일생성시 제출자정보를 호출해야하므로 조회액션을 거쳐야 한다.

17. 중복된 귀속년도/분기 업로드시 해당 분기의 자료를 삭제하고 새로 등록한다.

18. 회사코드 ‘000’ 설정 후 파일생성시 부가세귀속부서코드가 ‘00009’로 적용되어 제출자 정보가 호출된다.

19. 홈택스 루트 : 로그인 > 세금신고신고분납분 > 부가가치세 > 일반과세자신고서작성하기 > 작성화면실행
                       > 사업자번호 입력 > 부동산임대공급가액명세서 체크 > 파일호출 > 변환시 오류검증
*/

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

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

scwin.txtCoClsCd = ""; // 회사구분
scwin.ed_coCd_hidVal = ""; // 회사 히든값
scwin.ed_acctDeptCd_hidVal = ""; // 귀속부서 (1)

// <input type="hidden" name="txt_stYm" id="txt_stYm">
// <input type="hidden" name="txt_endYm" id="txt_endYm">
// <input type="hidden" name="txt_submitDt" id="txt_submitDt">
// <input type="hidden" name="txtCoClsCd" id="txtCoClsCd">
// <input type="hidden" name="update_Check" id="update_Check">

scwin.txt_stYm = "";
scwin.txt_endYm = "";
scwin.txt_submitDt = "";
scwin.txtCoClsCd = "";
scwin.update_Check = "";
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

  // 회계부서코드/명
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  let acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  scwin.acctDeptCd = acctDeptCd;
  scwin.acctDeptNm = acctDeptNm;
  console.log("▶▶ acctDeptCd : " + scwin.acctDeptCd + "   acctDeptNm : " + scwin.acctDeptNm);

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI013",
    compID: "lc_vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  } // 부가세분기구분코드
  // ,{ grpCd : "FI005", compID : "lc_deductClsCd" }      // 공제종류코드  
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
    gr_vat.hide(); // 파일 다운로드용 그리드 숨김
    gr_excel.hide(); // 엑셀 업로드용 그리드 숨김

    // f_Header();
    scwin.f_Setting();
    scwin.f_setCompanyInfo();
    $c.gus.cfDisableObjects($p, [btn_Save]);
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  lc_vatQuartYyClsCd.index = 0;
  var thisYear = $c.date.getServerDateTime($p, "yyyy");
  ica_declarYr.setValue(thisYear);
  scwin.txt_submitDt = $c.date.getServerDateTime($p, "yyyyMMdd");
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  //   }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_DateSetting = function () {
  var imsi_date = "";
  if (lc_vatQuartYyClsCd.getValue() == "1") {
    imsi_date = "0101";
  } else if (lc_vatQuartYyClsCd.getValue() == "2") {
    imsi_date = "0401";
  } else if (lc_vatQuartYyClsCd.getValue() == "3") {
    imsi_date = "0701";
  } else if (lc_vatQuartYyClsCd.getValue() == "4") {
    imsi_date = "1001";
  }
  imsi_date = ica_declarYr.getValue().trim() + imsi_date;
  scwin.txt_stYm = imsi_date;
  scwin.txt_endYm = imsi_date.toDate().after(0, 3, -1).format("YYYYMMDD");
};

//-------------------------------------------------------------------------
// 조회(부동산임대공급가액명세서)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  scwin.f_DateSetting();
  if (ed_coCd.getValue() == "") {
    await $c.win.alert($p, "회사코드는 필수 입력 조회 조건입니다.");
    ed_coCd.focus();
    return;
  }
  if (ica_declarYr.getValue() == "") {
    await $c.win.alert($p, "기간은 필수 입력 조회 조건입니다.");
    ica_declarYr.focus();
    return;
  }
  if (ica_declarYr.getValue().length < 4) {
    await $c.win.alert($p, "기간은 4자리수만큼 입력하십시오.");
    ica_spplyYr.focus();
    return false;
  }

  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.taxbiz.vatctrl.RetrieveRealEstateCMD.do";
  // tr_search.post();

  // <C> Col=stYm               Ctrl=txt_stYm               				Param=value        </C>	<!--  분기를 인식할 히든밸류  -->
  // <C> Col=endYm              Ctrl=txt_endYm              				Param=value        </C>	<!--  분기를 인식할 히든밸류  -->
  // <C> Col=submitDt           Ctrl=txt_submitDt        				Param=value        </C>	<!--  자회사여부  -->
  // <C> Col=coClsCd            Ctrl=txtCoClsCd          				Param=value        </C>	<!--  회사구분코드  -->

  ds_search.set("stYm", scwin.txt_stYm);
  ds_search.set("endYm", scwin.txt_endYm);
  ds_search.set("submitDt", scwin.txt_submitDt);
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(부동산임대공급가액명세서) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_evid event=OnLoadCompleted(rowCnt)>
  // cfHideDSWaitMsg(gr_evid);
  // cfShowTotalRows(totalRows, rowCnt);
  var rowCnt = ds_evid.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 							,ed_coCd.text, txt_coNm.value
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);
  // udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc
  // 							,ed_coCd.getValue(), ed_coNm.getValue()
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);
  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//    1: 귀속부서

//-------------------------------------------------------------------------
// 회사코드 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    // if(ed_coCd.hidVal != rtnList[0] )  // 	f_initObj();  -- 선안안됨

    // ed_coCd.text = rtnList[0];  // 코드
    // txt_coNm.value = rtnList[5]; // 회사명
    // ed_coCd.hidVal = rtnList[0];  // 히든값
    // txtCoClsCd.value =rtnList[1];   // 회사구분

    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    // ed_coCd.text   = "";
    // txt_coNm.value = "";
    // ed_coCd.hidVal = "";
    // txtCoClsCd.value ="";

    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }

  // KYU_TEST
  // if ( scwin.isStarted  == true )   // 최초 이벤트 여부
  // {
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  // }

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
// 팝업 @@
//    1:귀속부서
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:귀속부서)");
  // var rtnList = new Array();
  switch (flag) {
    case '1':
      // 귀속부서
      var param = ",,,0,";
      if (scwin.isSubCompany)
        // 자회사 회계 시스템
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      console.log("  귀속부서 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',ed_acctDeptCd.text.trim(),txt_acctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:귀속부서

//-------------------------------------------------------------------------
// 귀속부서조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_acctDeptCd_callBackFunc (귀속부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET	 
  scwin.f_resultPopEd(ed_acctDeptCd, ed_acctDeptNm, rtnList, '1');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:귀속부서)");

  // if (rtnList != null ) {
  //     if (rtnList[0] == "N/A") {
  //     	return;
  //     }
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
      // 팝업 그냥 닫힘
      // 히든값 분기처리
      switch (flag) {
        case '1':
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
        scwin.ed_acctDeptCd_hidVal = rtnList[0];
        break;
      //  귀속부서
      default:
        break;
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
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
//    1:귀속부서
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색  srtCd[" + strCd + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_acctDeptCd_hidVal // 귀속부서
  ) {
    return;
  }

  // strNm.value="";
  strNm.setValue("");

  // 명 초기화
  // switch (flag){
  //     case '1'  : ed_acctDeptNm.setValue("")       ; break;  // 귀속부서
  //     default   : break;
  // }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_acctDeptCd_hidVal = "";
      break;
    // 귀속in.ed_acctDeptCd_hidVal  = ""; break;  // 귀속부서
    default:
      break;
  }

  // if(strCd.text.trim()!="")  f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');

    // 팝업 로딩
    // switch (flag){
    //     case '1'  : scwin.f_openPopUp(flag,'T'); break;  // 귀속부서
    //     default   : break;
    // }
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
// 귀속부서 focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  // <!-- 귀속부서코드 입력시 -->
  // language=JavaScript for=ed_acctDeptCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '1');
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save (저장) ==================================================");

  // var objGrd = eval(gr_evid);
  // var objDs = eval(objGrd.DataID) ;

  var rowCount = ds_evid.getTotalRow();
  if (rowCount <= 0) {
    await $c.gus.cfAlertMsg($p, "저장할 데이타가 없습니다.");
    return false;
  }
  let validArray = [{
    id: "leaseName",
    name: "상호(성명)",
    maxLength: 30
  }];
  let rtn1 = await $c.gus.cfValidateGrid($p, gr_evid, null, null, validArray, "부동산임대공급가액명세서");
  if (!rtn1) return;

  //변경한 데이터가 있는지 체크한다.
  // if(ds_evid.IsUpdated == false) {
  if (ds_evid.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  }

  // ds_evid.UseChangeInfo = false;
  // if(confirm("저장하시겠습니까?")==true) {
  let rtn = await $c.win.confirm($p, "저장하시겠습니까");
  if (rtn) {
    // tr_save.Action="/ac.fi.taxbiz.vatctrl.SaveRealEstateCMD.do";
    // tr_save.post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone (저장 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  await $c.gus.cfAlertMsg($p, "저장이 완료되었습니다.");

  // KYU_ORDER
  $c.gus.cfDisableObjects($p, [btn_Save]);
  scwin.f_Retrieve();
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
// function Parameter :
//-------------------------------------------------------------------------
// <img src="/common/images/icon_excel.gif" align="absmiddle" style="cursor:hand" onClick="f_GridToExcel(gr_evid,'부동산임대공급가액명세서');" userAuth="X">

scwin.f_GridToExcel = async function () {
  // var objGrd = eval(gr_groupCode);
  // var objDs = eval(objGrd.DataID) ;

  // if (objDs.getTotalRow() <= 0){
  // cfAlertMsg(MSG_CM_WRN_009,Array("데이타"));  // 출력할 @이(가) 없습니다.

  // 	return false;
  // }

  // cfGridToExcel(gr_groupCode, gridName,"C:\\" + gridName + ".xls", 4+8+16);
  if (gr_evid.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_009, "데이타")); // 출력할 @이(가) 없습니다.
    return;
  }
  var fileName = "부동산임대공급가액명세서";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: fileName + ".xlsx",
      sheetName: fileName
      // useStyle: "true"       //다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)
      // type: "1"
      // headerColor: "#eeeeee", //"#E8E8E8", //연한회색 #33CCCC
      // startRowIndex: 2
    };
    $c.data.downloadGridViewExcel($p, gr_evid, options);
  }
};

//-------------------------------------------------------------------------
// 파일 생성  @@
//-------------------------------------------------------------------------
scwin.btn_Create_onclick = function (e) {
  // f_CreateFile(gr_evid);
  scwin.f_CreateFile();
};

//-------------------------------------------------------------------------
// 파일생성
//-------------------------------------------------------------------------
scwin.f_CreateFile = async function () {
  console.log("=== f_CreateFile (파일생성)");

  // cfAlertMsg("모든파일( * ) 형식으로 저장해야하며, \n자동으로 생성되는 확장자(.txt) 를 삭제해주세요.");

  scwin.f_DateSetting();
  var dcJSON = ds_search.getJSON();
  console.log("  파일생성 *** ds_search : " + JSON.stringify(dcJSON));

  // ds_search.UseChangeInfo = false;
  // tr_vatDeclare.Action="/ac.fi.taxbiz.vatctrl.CreateFileRealEstateCMD.do";
  // tr_vatDeclare.post();
  let e = await $c.sbm.execute($p, sbm_vatDeclare);
  console.log("▷▷ sbm_vatDeclare_submitdone (파일생성)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var dc = ds_VatDeclare.getAllArray();
  // console.log("  *** ds_VatDeclare ("+ds_VatDeclare.getTotalRow()+") ["+JSON.stringify(dc)+"]");
  console.log("  *** ds_VatDeclare (" + ds_VatDeclare.getTotalRow() + ")");

  // <!--  파일생성  -->
  // language=JavaScript for=ds_VatDeclare event=OnLoadCompleted(rowCnt)>
  // var objGrd = eval(gr_vat);
  // var objDs = eval(objGrd.DataID);

  var crnChk = /^[*]{10}[\s]{3}$/; // 사업자번호 패턴

  console.log("  파일생성용 그리드 gr_vat 총건수 [" + gr_vat.getTotalRow() + "]");
  if (ds_VatDeclare.getTotalRow() <= 0) {
    await $c.gus.cfAlertMsg($p, "파일생성할 내역이 없습니다.");
    return false;
  } else {
    // 파일제목생성
    var title = "";
    var crn_Check = ds_VatDeclare.getCellData(0, "col5");
    if (!crnChk.test(crn_Check)) {
      title = "E" + crn_Check + ".V120";
    } else {
      title = "E" + crn_Check.subString(0, 10) + ".V120";
    }
    console.log("   --- --- title [" + title + "]");

    // 파일Output
    // gr_vat.ExportFile2(title,'',+9);

    // KYU_TEST

    // tobe : 텍스트파일 생성 방식을 알수없어 우선 아래와 같이 작성
    // asis -> txt 파일로 생성, tobe -> xlsx로 생성
    // 파일제목생성
    // var title = "";
    // title = "U"+ds_vatDeclare.NameValue(1,'col5')+".V166";	
    // gr_vat3.ExportFile2(title,'',+9);

    // 이건 어디서 온 건지...
    // var tmpFileNm  = "U"+ds_VatDeclare.getCellData(0, "col5")+".V166"+".txt";
    // var tmpSheetNm = "U"+ds_VatDeclare.getCellData(0, "col5")+".V166";

    // console.log("  tmpFileNm  ["+tmpFileNm+"]");
    // console.log("  tmpSheetNm ["+tmpSheetNm+"]");

    const options = {
      //   fileName: `U${ds_VatDeclare.getRowJSON(0).col5}.V166.txt`
      // , sheetName: `U${ds_VatDeclare.getRowJSON(0).col5}.V166`
      fileName: title + ".txt"
      // , sheetName: title
      ,
      header: "0" //[default: 1, 0] [default: 1, 0] 헤더의 존재 여부 (0 : 헤더 행의 수 무시하고 전부 업로드, 1 : 헤더 행의 수 만큼 건너 뜀)
      ,
      delim: "\u200B" // 델리미터 없슴
      ,
      removeQuotation: "0"
      // , quoteInside: true
    };

    // const options = {

    //     fileName : title+".txt", //[default : excel.csv] options.fileName 값이 없을 경우 default값 세팅
    //     type : "1",
    //     header : "0",
    //     delim : "\u200B"

    //     // fileName : title +".txt" ,//[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    //     // header : "0" ,
    //     // quoteInside: true, 
    // };

    $c.data.downloadGridViewCSV($p, gr_vat, options);
  }
};

// @@ ====== 파일 (엑셀 업로드)  =============================================================== //

//-------------------------------------------------------------------------
// function name : f_excelUpload
// function desc : 엑셀 Upload
// function Parameter :
//-------------------------------------------------------------------------
// 엑셀 Upload
scwin.f_excelUpload = async function () {
  console.log("==-==-====-==-== f_excelUpload ==-==-====-==-== ");
  ds_Tmp_FillUse.setJSON([]);
  // ds_evid.setJSON([]);

  // $c.gus.cfProgressWinOpen();

  // ds_Org_FillUse.DataId = fileUploadGDS.getCellData( 0, "filePath" );
  // ds_Org_FillUse.Reset();
  // resetForm('frm');
  // window.setTimeout("f_upload()",1000);//시간

  // if(udc_gridMain.getUpExt() == "1") { // csv
  //     options = {
  //         "header": 0,
  //         "type": "1",
  //         "startRowIndex": 1,
  //         "footerExist": 0,
  //         "fileName" : "gridDataUpload.csv"
  //     }
  // } else { // 엑셀
  //     options = {
  //         "headerExist": 0,
  //         "type": "1",
  //         "startRowIndex": 1,
  //         "footerExist": 0,
  //         "fileName" : "gridDataUpload.xlsx"
  //     }
  // }

  let options = {
    "header": 0,
    // excel파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)
    "type": "1",
    // 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때, 0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때
    "startRowIndex": 1,
    // excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
    "footerExist": 0 // excel파일에서 그리드의 데이터에 footer가 있는지 여부(1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)
  };

  // ds_Tmp_FillUse 로 직접 받음 (ds_Org_FillUse 사용안함)
  await udc_gridMain.uploadGridViewExcel(gr_excel, options);
};

//-------------------------------------------------------------------------
// function name : gr_excel_onfilereadend
// function desc : Excel 그리드 등록
//-------------------------------------------------------------------------
scwin.gr_excel_onfilereadend = function (value) {
  scwin.f_Import();
};

//-------------------------------------------------------------------------
//  한글 포함 문자열 바이트 단위 자르기
//    @param {string} str - 원본 문자열
//    @param {number} length - 자를 바이트 길이
//    @returns {string} - 잘린 문자열
//-------------------------------------------------------------------------
scwin.cutStringByByte = function (str, length) {
  if (!str) return "";
  let len = 0;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // 한글(2바이트) 체크: 128보다 크면 한글/특수문자
    if (str.charCodeAt(i) > 128) {
      len += 2;
    } else {
      len += 1;
    }
    if (len <= length) {
      newStr += str.charAt(i);
    } else {
      break;
    }
  }
  return newStr;
};

//-------------------------------------------------------------------------
// function name : f_Import
// function desc : Excel CSV 파일 import
//-------------------------------------------------------------------------
scwin.f_Import = async function () {
  console.log("=== f_Import (Excel CSV 파일 import)");
  if (ds_Tmp_FillUse.getTotalRow() == 0) {
    // cfProgressWinClose();
    // 
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  var k = 0; // 메세지 표기 순서
  var i;
  var j;
  var intRowPosition;
  var topWrkStpCd;
  var ssnChk = /^[0-9]{10,13}$/; // 사업자번호, 주민번호 패턴
  var DtChk = /^[0-9]{8}$/; // 날짜 패턴
  var floorChk = /^[0-9A-Z\-,]{0,10}$/; // 층 패턴
  var areaChk = /^[0-9]{0,7}[0-9\.]{0,3}$/; // 면적 패턴
  // var leaseNameChk=/^[가-힝a-zA-Z0-9\(\)\s\/\&\-]{1,30}$/;  // 임차인성명 패턴
  dateFormat = "YYYYMMDD";

  // ds_Tmp_FillUse.ImportData(ds_Org_FillUse.ExportData(1, ds_Org_FillUse.CountRow, true));

  // var dcJSON = ds_Org_FillUse.getAllJSON();  // JSON 배열로 담기
  // ds_Tmp_FillUse.setJSON(dcJSON, true);       // append

  // 그리드세팅
  for (i = 0; i < ds_Tmp_FillUse.getTotalRow(); i++) {
    k = i + 1;
    if (ds_Tmp_FillUse.getCellData(i, "propertyAddr") != "") {
      //  Upload 유효성 검사 및 세팅
      // 연도 체크
      var declarYr_Check = ds_Tmp_FillUse.getCellData(i, "declarYr");
      if (declarYr_Check != ica_declarYr.getValue()) {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 연도가 상단의 필수설정된 연도와 다릅니다.");
        await $c.gus.cfAlertMsg($p, "해당 연도  :  " + declarYr_Check);
        // $c.gus.cfProgressWinClose();
        return;
      }

      // 분기 체크
      var vatQuartYyClsCd_Check = ds_Tmp_FillUse.getCellData(i, "vatQuartYyClsCd");
      if (vatQuartYyClsCd_Check != lc_vatQuartYyClsCd.getValue()) {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 분기가 상단의 필수설정된 분기와 다릅니다.");
        await $c.gus.cfAlertMsg($p, "해당 분기  :  " + vatQuartYyClsCd_Check);
        // $c.gus.cfProgressWinClose();
        return;
      }

      // 임차인 사업자번호, 주민번호 체크
      var leaseCrn_Check = ds_Tmp_FillUse.getCellData(i, "leaseCrn");
      if (leaseCrn_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 임차인 사업자등록번호 또는 주민등록번호를 입력해주세요.");
        // $c.gus.cfProgressWinClose();
        return;
      }
      if (!ssnChk.test(leaseCrn_Check)) {
        await $c.gus.cfAlertMsg($p, "사업자등록번호 또는 주민등록번호는 숫자로만 기입해주세요.");
        await $c.gus.cfAlertMsg($p, "해당 등록번호  :  " + leaseCrn_Check);
        // $c.gus.cfProgressWinClose();
        return;
      }

      // 임차인성명 체크
      var leaseName_Check = ds_Tmp_FillUse.getCellData(i, "leaseName");
      if (leaseName_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 임차인 상호(성명)을 입력해주세요.");
        return;
      }

      // KYU_NEW : 임차인성명 30바이트 초과시 30바이트로 자르기 (한글)
      var leaseNameStr = ds_Tmp_FillUse.getCellData(i, "leaseName");
      var leaseNameLen = $c.str.getByteLength($p, leaseNameStr);
      if (leaseNameLen > 30) {
        var leaseNameFix = scwin.cutStringByByte(leaseNameStr, 30);
        console.log("  [" + i + "] 임차인 성명 (leaseName) 30 바이트 초과 : 수정전 [" + leaseNameStr + "] 수정후 [" + leaseNameFix + "]");
        ds_Tmp_FillUse.setCellData(i, "leaseName", leaseNameFix);
      }

      // Date 체크
      var rentContMoveDt_Check = ds_Tmp_FillUse.getCellData(i, "rentContMoveDt");
      var rentContChgDt_Check = ds_Tmp_FillUse.getCellData(i, "rentContChgDt");
      var rentContOutDt_Check = ds_Tmp_FillUse.getCellData(i, "rentContOutDt");
      // var validator1 = new covDateValidator(dateFormat);
      // var validator2 = new covDateValidator(dateFormat);
      // var validator3 = new covDateValidator(dateFormat);

      if (rentContMoveDt_Check != "") {
        // if(!DtChk.test(rentContMoveDt_Check)   ||   rentContMoveDt_Check.length < 8){

        if ($c.date.isDate($p, rentContMoveDt_Check) == false || rentContMoveDt_Check.length < 8) {
          await $c.gus.cfAlertMsg($p, "입주일을 숫자 8자리로 기입해주세요.");
          await $c.gus.cfAlertMsg($p, "해당 입주일  :  " + rentContMoveDt_Check);
          $c.gus.cfProgressWinClose($p);
          return;
        }
        // 입력된 날짜의 validation 체크
        rentContMoveDt_Check = rentContMoveDt_Check.trim();

        // if (validator1.validate(rentContMoveDt_Check) == false) {
        if ($c.date.isDate($p, rentContMoveDt_Check) == false) {
          await $c.win.alert($p, "입주일은 '" + dateFormat + "' 형식이어야 합니다.");
          await $c.gus.cfAlertMsg($p, "해당 입주일  :  " + rentContMoveDt_Check);
          $c.gus.cfProgressWinClose($p);
          return;
        }
      }
      if (rentContChgDt_Check != "") {
        // if(!DtChk.test(rentContChgDt_Check)   ||   rentContChgDt_Check.length < 8){
        if ($c.date.isDate($p, rentContChgDt_Check) == false || rentContChgDt_Check.length < 8) {
          await $c.gus.cfAlertMsg($p, "갱신일을 숫자 8자리로 기입해주세요.");
          await $c.gus.cfAlertMsg($p, "해당 갱신일  :  " + rentContChgDt_Check);
          $c.gus.cfProgressWinClose($p);
          return;
        }
        // 입력된 날짜의 validation 체크
        rentContChgDt_Check = rentContChgDt_Check.trim();
        // if (validator2.validate(rentContChgDt_Check) == false) {
        if ($c.date.isDate($p, rentContChgDt_Check) == false) {
          await $c.win.alert($p, "갱신일은 '" + dateFormat + "' 형식이어야 합니다.");
          await $c.gus.cfAlertMsg($p, "해당 갱신일  :  " + rentContChgDt_Check);
          $c.gus.cfProgressWinClose($p);
          return;
        }
        if (rentContMoveDt_Check == "") {
          await $c.gus.cfAlertMsg($p, "갱신일이 있으므로" + k + "번째 열의 입주일을 기입해주세요.");
          $c.gus.cfProgressWinClose($p);
          return;
        }
        if (rentContOutDt_Check == "") {
          await $c.gus.cfAlertMsg($p, "갱신일이 있으므로" + k + "번째 열의 퇴거일을 기입해주세요.");
          $c.gus.cfProgressWinClose($p);
          return;
        }
      }
      if (rentContOutDt_Check != "") {
        // if(!DtChk.test(rentContOutDt_Check)   ||   rentContOutDt_Check.length < 8){
        if ($c.date.isDate($p, rentContOutDt_Check) == false || rentContOutDt_Check.length < 8) {
          await $c.gus.cfAlertMsg($p, "퇴거일을 숫자 8자리로 기입해주세요.");
          await $c.gus.cfAlertMsg($p, "해당 퇴거일  :  " + rentContOutDt_Check);
          $c.gus.cfProgressWinClose($p);
          return;
        }
        // 입력된 날짜의 validation 체크
        rentContOutDt_Check = rentContOutDt_Check.trim();
        // if (validator3.validate(rentContOutDt_Check) == false) {
        if ($c.date.isDate($p, rentContOutDt_Check) == false) {
          await $c.win.alert($p, "퇴거일은 '" + dateFormat + "' 형식이어야 합니다.");
          await $c.gus.cfAlertMsg($p, "해당 퇴거일  :  " + rentContOutDt_Check);
          cfProgressWinClose();
          return;
        }
      }

      // 층 체크
      var floor_Check = ds_Tmp_FillUse.getCellData(i, "floor");
      if (floor_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 층을 입력해주세요.");
        $c.gus.cfProgressWinClose($p);
        return;
      }
      if (!floorChk.test(floor_Check)) {
        await $c.gus.cfAlertMsg($p, "층을 기재하실 경우 'B', '숫자', ' - ', ', '만 기재할 수 있습니다.");
        await $c.gus.cfAlertMsg($p, "해당 층  :  " + floor_Check);
        $c.gus.cfProgressWinClose($p);
        return;
      }

      // 면적 체크
      var area_Check = ds_Tmp_FillUse.getCellData(i, "area");
      if (area_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 면적을 입력해주세요.");
        $c.gus.cfProgressWinClose($p);
        return;
      }
      if (!areaChk.test(area_Check)) {
        cfAlertMsg("면적의 경우 소수점 둘째자리까지만 기재할 수 있습니다.");
        cfAlertMsg("해당 면적  :  " + area_Check);
        cfProgressWinClose();
        return;
      }

      // 부서코드체크
      var acctDeptCd_Check = ds_Tmp_FillUse.getCellData(i, "acctDeptCd");
      if (acctDeptCd_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 부서코드를 입력해주세요.");
        $c.gus.cfProgressWinClose($p);
        return;
      }
      if (acctDeptCd_Check.length < 5) {
        var m = 4 - acctDeptCd_Check.length;
        for (var h = 0; h <= m; h++) {
          acctDeptCd_Check = "0" + acctDeptCd_Check;
        }
        ds_Tmp_FillUse.setCellData(i, "acctDeptCd", acctDeptCd_Check);
      }

      // 종사업장번호 체크
      var subWkPlaceNo_Check = ds_Tmp_FillUse.getCellData(i, "subWkPlaceNo");
      if (subWkPlaceNo_Check == "" || subWkPlaceNo_Check.length < 4) {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 종사업장번호를 숫자 4자리로 입력해주세요.");
        await $c.gus.cfAlertMsg($p, "해당 종사업장번호  :  " + subWkPlaceNo_Check);
        $c.gus.cfProgressWinClose($p);
        return;
      }

      // 부동산소재지 체크
      var propertyAddr_Check = ds_Tmp_FillUse.getCellData(i, "propertyAddr");
      if (propertyAddr_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 부동산소재지를 입력해주세요.");
        $c.gus.cfProgressWinClose($p);
        return;
      }

      // 면적 체크
      var area_Check = ds_Tmp_FillUse.getCellData(i, "area");
      if (area_Check == "") {
        await $c.gus.cfAlertMsg($p, k + "번째 열의 면적을 입력해주세요.");
        $c.gus.cfProgressWinClose($p);
        return;
      }

      // 보증금 체크
      var rentContCertAmt_Check = ds_Tmp_FillUse.getCellData(i, "rentContCertAmt");
      if (rentContCertAmt_Check == "") {
        ds_Tmp_FillUse.setCellData(i, "rentContCertAmt", "0");
      }

      // 월임대료 체크
      var rentContRentAmt_Check = ds_Tmp_FillUse.getCellData(i, "rentContRentAmt");
      if (rentContRentAmt_Check == "") {
        ds_Tmp_FillUse.setCellData(i, "rentContRentAmt", "0");
      }

      // 월임대료수입금액월임대료 체크
      var rentInMmAmt_Check = ds_Tmp_FillUse.getCellData(i, "rentInMmAmt");
      if (rentInMmAmt_Check == "") {
        ds_Tmp_FillUse.setCellData(i, "rentInMmAmt", "0");
      }

      // 보증금이자 체크
      var rentCertRate_Check = ds_Tmp_FillUse.getCellData(i, "rentCertRate");
      if (rentCertRate_Check == "") {
        ds_Tmp_FillUse.setCellData(i, "rentCertRate", "0");
      }

      // 임대료수익금액계 (과세표준) = 임대료보증금이자 + 임대료수입금액월임대료
      var sum_Check = ds_Tmp_FillUse.getCellData(i, "sum");
      if (sum_Check == "") {
        //	sum_Check = rentCertRate_Check + rentInMmAmt_Check;
        //	cfAlertMsg("합계를 입력하지 않을 경우 \n(임대료보증금이자 + 임대료수입금액월임대료)로 계산됩니다.");
        ds_Tmp_FillUse.setCellData(i, "sum", "0");
      }

      // 	// 그리드세팅
      // 	scwin.f_AddRow();

      //     ds_evid.setCellData(i,"declarYr"        , ds_Tmp_FillUse.getCellData(i,"declarYr"               ) );  // 신고년도
      //     ds_evid.setCellData(i,"vatQuartYyClsCd" , ds_Tmp_FillUse.getCellData(i,"vatQuartYyClsCd"        ) );  // 부가세분기구분코드
      //     ds_evid.setCellData(i,"acctDeptCd"      , ds_Tmp_FillUse.getCellData(i,"acctDeptCd"             ) );  // 회계부서코드
      //     ds_evid.setCellData(i,"declarDeptNm"    , ds_Tmp_FillUse.getCellData(i,"declarDeptNm"           ) );  // 신고부서명
      //     ds_evid.setCellData(i,"propertyAddr"    , ds_Tmp_FillUse.getCellData(i,"propertyAddr"           ) );  // 부동산소재지
      //     ds_evid.setCellData(i,"subWkPlaceNo"    , ds_Tmp_FillUse.getCellData(i,"subWkPlaceNo"           ) );  // 단위사업장적용번호(종사업장번호)
      //     ds_evid.setCellData(i,"subWkPlaceNm"    , ds_Tmp_FillUse.getCellData(i,"subWkPlaceNm"           ) );  // 상호명(법인명)
      //     ds_evid.setCellData(i,"dong"            , ds_Tmp_FillUse.getCellData(i,"dong"                   ) );  // 동
      //     ds_evid.setCellData(i,"floor"           , ds_Tmp_FillUse.getCellData(i,"floor"                  ) );  // 층
      //     ds_evid.setCellData(i,"hoNo"            , ds_Tmp_FillUse.getCellData(i,"hoNo"                   ) );  // 호
      //     ds_evid.setCellData(i,"area"            , ds_Tmp_FillUse.getCellData(i,"area"                   ) );  // 면적
      //     ds_evid.setCellData(i,"leaseName"       , ds_Tmp_FillUse.getCellData(i,"leaseName"              ) );  // 임차인상호(성명)
      //     ds_evid.setCellData(i,"leaseCrn"        , ds_Tmp_FillUse.getCellData(i,"leaseCrn"               ) );  // 임차인사업자(주민)등록번호
      //     ds_evid.setCellData(i,"rentContMoveDt"  , ds_Tmp_FillUse.getCellData(i,"rentContMoveDt").trim()   );  // 임대계약입주일
      //     ds_evid.setCellData(i,"rentContChgDt"   , ds_Tmp_FillUse.getCellData(i,"rentContChgDt").trim()    );  // 임대계약갱신일
      //     ds_evid.setCellData(i,"rentContOutDt"   , ds_Tmp_FillUse.getCellData(i,"rentContOutDt").trim()    );  // 임대계약퇴거일
      //     ds_evid.setCellData(i,"rentContCertAmt" , ds_Tmp_FillUse.getCellData(i,"rentContCertAmt"        ) );  // 임대계약내용보증금
      //     ds_evid.setCellData(i,"rentContRentAmt" , ds_Tmp_FillUse.getCellData(i,"rentContRentAmt"        ) );  // 임대계약내용월임대료
      //     ds_evid.setCellData(i,"rentInMmAmt"     , ds_Tmp_FillUse.getCellData(i,"rentInMmAmt"            ) );  // 임대료수입금액월임대료
      //     ds_evid.setCellData(i,"sum"             , ds_Tmp_FillUse.getCellData(i,"sum"                    ) );  // 합계
      //     ds_evid.setCellData(i,"rentCertRate"    , ds_Tmp_FillUse.getCellData(i,"rentCertRate"           ) );  // 임대료보증금이자
    }
  }

  // 업로드자료 추가
  if (scwin.f_AddRowUploaded()) {
    // $c.gus.cfProgressWinClose();
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }

  // 건수 상관없이 총건수는 업데이트
  // cfShowTotalRows(totalRows, ds_evid.CountRow);
  ed_totalRows.setValue(ds_evid.getTotalRow());
  if (ds_evid.getTotalRow() > 0) {
    $c.gus.cfEnableObjects($p, [btn_Save]);
  }

  // $c.gus.cfProgressWinClose();
  // ds_Tmp_FillUse.ClearData();
  ds_Tmp_FillUse.setJSON([]);
};

//-------------------------------------------------------------------------
// 업로드 자료 추가
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = function () {
  console.log("=== f_AddRowUploaded (업로드 자료 추가)");

  // ds_temp에 ds_excel의 데이터를 받아서 수입한다. 1부터 엑셀의 총 행수까지 받아라
  // ds_temp.ImportData(ds_excel.ExportData(1,ds_excel.CountRow,true));

  // ds_excel 수입받은 총 데이터 행수가 0보다 크면
  if (ds_Tmp_FillUse.getTotalRow() > 0) {
    ds_evid.setJSON([]);
    var dcJSON = ds_Tmp_FillUse.getAllJSON(); // JSON 배열로 담기
    ds_evid.setJSON(dcJSON, true); // append

    // 숫자로 변환
    for (let i = 0; i < ds_evid.getRowCount(); i++) {
      ds_evid.setCellData(i, "rentContCertAmt", Number(ds_evid.getCellData(i, "rentContCertAmt")));
      ds_evid.setCellData(i, "rentContRentAmt", Number(ds_evid.getCellData(i, "rentContRentAmt")));
      ds_evid.setCellData(i, "sum", Number(ds_evid.getCellData(i, "sum")));
      ds_evid.setCellData(i, "rentCertRate", Number(ds_evid.getCellData(i, "rentCertRate")));
      ds_evid.setCellData(i, "rentInMmAmt", Number(ds_evid.getCellData(i, "rentInMmAmt")));
    }
    ds_evid.modifyAllStatus("C");
    var dc = ds_evid.getAllArray();
    // console.log("  *** ds_evid ("+ds_evid.getTotalRow()+") : " + JSON.stringify(dc));
    console.log("  *** ds_evid (" + ds_evid.getTotalRow() + ")");
  }
  ed_totalRows.setValue(ds_evid.getTotalRow());
  return true;
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// 그리드추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var row = ds_evid.getRowPosition();
  // ds_evid.AddRow();
  ds_evid.insertRow();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',btnId:'btn_coCd',id:'udc_coCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ica_declarYr',initValue:'텍스트',style:'width: 100px;',title:'기간',ref:'data:ds_search.declarYr',allowChar:'0-9',maxlength:'4'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vatQuartYyClsCd',style:'width: 150px',submenuSize:'fixed',title:'부가세분기구분코드',ref:'data:ds_search.vatQuartYyClsCd'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',code:'acctDeptCd',refDataCollection:'ds_search','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'Y',templateYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_evid',id:'udc_gridMain',gridUpFn:'scwin.f_excelUpload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',focusMode:'cell',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'신고년도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'분기',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'귀속부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'부동산소재지',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'종사업장번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'종사업장명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'동',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'층',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'면적(㎡)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column58',value:'임차인사업자등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'주민등록번호원본',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column49',value:'상호(성명)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'입주일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'갱신일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'퇴거일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column73',value:'임대계약내용보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column67',value:'임대계약내용월임대료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column70',value:'임대료수익금액계(과세표준)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column82',value:'임대료보증금이자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column85',value:'임대료수입금액월임대료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDeptNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'propertyAddr',inputType:'text',style:'',value:'',width:'250',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subWkPlaceNo',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subWkPlaceNm',inputType:'text',style:'',value:'',width:'200',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dong',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'floor',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hoNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'area',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'leaseCrn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'orgLeaseCrn',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'leaseName',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentContMoveDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentContChgDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentContOutDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'rentContCertAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',class:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'rentContRentAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',class:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sum',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',class:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'rentCertRate',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',class:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'rentInMmAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',class:''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'expression',style:'',id:'column75',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'',expression:'sum(\'rentContCertAmt\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column69',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'',expression:'sum(\'rentContRentAmt\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column72',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'',expression:'sum(\'sum\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column84',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'',expression:'sum(\'rentCertRate\')'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column87',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'',expression:'sum(\'rentInMmAmt\')'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_VatDeclare',id:'gr_vat',style:';visibility:visible;'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'col1',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'col2',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'col3',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'col4',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'col5',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'col6',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'col7',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'col8',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'col9',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'col10',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'col11',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'col12',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'col13',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'col14',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'col15',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'col16',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'col17',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'col18',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'col19',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'col20',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'col21',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'col22',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'col23',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'col24',displayMode:'label',hidden:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col6',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col7',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col8',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col9',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col10',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col24',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'CSV파일은 쉼표( , )가 포함될 경우 정상적인 금액 Upload가 불가합니다. <br/> &nbsp;금액란을 일반서식으로 바꿔주시기 바랍니다. &nbsp; &nbsp; &nbsp;',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Tmp_FillUse',focusMode:'cell',id:'gr_excel',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'신고년도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'분기',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'귀속부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'부동산소재지',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'종사업장번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'종사업장명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'동',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'층',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'면적(㎡)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'임차인사업자등록번호',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'상호(성명)',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'입주일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'갱신일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',inputType:'text',style:'',value:'퇴거일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'임대계약내용보증금',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'임대계약내용월임대료',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'임대료수익금액계(과세표준)',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'임대료보증금이자',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'text',style:'',value:'임대료수입금액월임대료',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDeptNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'propertyAddr',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subWkPlaceNo',inputType:'text',readOnly:'true',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subWkPlaceNm',inputType:'text',readOnly:'true',style:'',textAlign:'center',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dong',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'floor',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hoNo',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'area',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseCrn',inputType:'text',readOnly:'true',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseName',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentContMoveDt',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentContChgDt',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentContOutDt',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{class:'tar',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'rentContCertAmt',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'180'}},{T:1,N:'w2:column',A:{class:'tar',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'rentContRentAmt',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'200'}},{T:1,N:'w2:column',A:{class:'tar',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'sum',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'200'}},{T:1,N:'w2:column',A:{class:'tar',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'rentCertRate',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'200'}},{T:1,N:'w2:column',A:{class:'tar',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'rentInMmAmt',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'200'}}]}]}]}]}]}]}]}]})