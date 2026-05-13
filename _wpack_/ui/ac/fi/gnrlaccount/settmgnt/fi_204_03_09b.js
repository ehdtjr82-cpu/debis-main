/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_09b.xml 47623 74850440658e8af6858ed19dbc4177a02571fd1792e0475896ad410b0457af28 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'closeYm1',name:'마감년월1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'closeYm2',name:'마감년월2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'closeYm3',name:'마감년월3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'type',name:'Receipt Type'}},{T:1,N:'w2:key',A:{dataType:'text',id:'deptCd',name:'부서코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'deptNm',name:'부서명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'compYm1',name:'비교년월1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'compYm2',name:'비교년월2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'compYm3',name:'비교년월3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'flag',name:'플래그'}},{T:1,N:'w2:key',A:{dataType:'text',id:'coCd',name:'회사코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'coClsCd',name:'회사구분코드'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'prtPosSeq',name:'발행위치순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'prtAcctNm',name:'계정과목'}},{T:1,N:'w2:column',A:{dataType:'text',id:'prtAcctEngNm',name:'발행계정영문명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'closeThisAmt',name:'결산년월-당월금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',id:'closeCumAmt',name:'결산년월-누계금액'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',id:'compThisAmt',name:'비교년월-당월금액'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',id:'compCumAmt',name:'비교년월-누계금액'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',id:'variationThisAmt',name:'증감-당월'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',id:'variationCumAmt',name:'증감-누계'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param4',name:'param4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param5',name:'param5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param6',name:'param6'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param7',name:'param7'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param8',name:'param8'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param9',name:'param9'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param10',name:'param10'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_empNo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'COL1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'COL2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'COL3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'COL4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'COL5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'COL6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'COL7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'COL8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'COL9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'COL10'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bizCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'COL1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'COL2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'COL3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'COL4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'COL5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'COL6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'COL7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'COL8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'COL9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'COL10'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCommon',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchCommon_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_setBizCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_setBizCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveProfitAndLossCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_204_03_09b
// 이름     : 손익계산서
// 경로     : 재무회계/일반회계/결산관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   : /ac/fi/gnrlaccount/settmgnt/fi_204_03_09p.ozr (손익계산서)
// 호출     : 
//            fi_100_02_02p.jsp(회사조회팝업) - 미호출
//            fi_204_03_10p_01.jsp(재무제표상세팝업)
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

scwin.isSubCompany = false;
scwin.ed_coCd_hidVal = ""; // 회사코드 히든값

scwin.txtCoClsCd = ""; // 회사구분

scwin.txt_closeYm1 = "";
scwin.txt_compYm1 = "";
scwin.txt_closeYm3 = "";
scwin.txt_compYm3 = "";

// <INPUT type="hidden" class=input_text id=txt_deptNm objType="data"  name="txt_deptNm">
scwin.txt_deptNm = ""; // 부서명 (ds_search 에 사용)

scwin.empno_Yn = "N";
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
    grpCd: "CO022",
    compID: "lc_flag"
  } // 조회구분
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // f_Header();
    rd_type.setValue("2"); // 조정반영
    lc_flag.setSelectedIndex(0);

    //날짜셋팅
    // ed_closeYm2.text = <%=DDate.getDate().substring(0,6)%>;
    // ed_compYm2.text  = <%=DDate.getPrevMonthDate(DDate.getDate(),12).substring(0,6)%>; 

    var today = $c.date.getServerDateTime($p, "yyyyMMdd");
    var bef12mothDay = $c.date.getDateAddMonthDirection($p, today, -12, "F");
    ica_closeYm2.setValue(today.substring(0, 6));
    ica_compYm2.setValue(bef12mothDay.substring(0, 6));

    // KYU_NEW : 자회사 설정후 사업부 조회해야 함
    scwin.f_OnLoad();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// f_OnLoad
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  console.log("=== f_OnLoad (자회사 설정후 사업부 조회해야 함)");

  // cbx_printCheck.checkAll(true);
  cbx_printCheck.setValue(1); // 인쇄옵션 체크

  scwin.f_Setting();
  scwin.f_setCompanyInfo();
  ica_closeYm2.focus();
  scwin.f_empNo();
};

//-------------------------------------------------------------------------
// 날짜셋팅 
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  var imsi_date1 = ica_closeYm2.getValue().trim() + "01";
  var imsi_date2 = ica_compYm2.getValue().trim() + "01";
  if (imsi_date1.substring(4, 6) == "01" || imsi_date1.substring(4, 6) == "00") {
    scwin.txt_closeYm1 = imsi_date1.substring(0, 4) + "00";
  } else {
    scwin.txt_closeYm1 = imsi_date1.toDate().after(0, -1, 0).format("YYYYMM");
  }
  if (imsi_date2.substring(4, 6) == "01" || imsi_date2.substring(4, 6) == "00") {
    scwin.txt_compYm1 = imsi_date2.substring(0, 4) + "00";
  } else {
    console.log(" txt_compYm1 [" + imsi_date2.toDate().after(0, -1, 0).format("YYYYMM") + "]");
    scwin.txt_compYm1 = imsi_date2.toDate().after(0, -1, 0).format("YYYYMM");
  }
  scwin.txt_closeYm3 = ica_closeYm2.getValue().substring(0, 4);
  scwin.txt_compYm3 = ica_compYm2.getValue().substring(0, 4);
  var closeDate = ica_closeYm2.getValue() + "01";
  var compDate = ica_compYm2.getValue() + "01";
  // gr_master.ColumnProp('closeYm', 'Name')          = closeDate.toDate().after(0,0,0).format("결산년월 : YYYY년MM월");
  // gr_master.ColumnProp('compYm', 'Name')           = compDate.toDate().after(0,0,0).format("비교년월 : YYYY년MM월");

  var title1 = closeDate.toDate().after(0, 0, 0).format("결산년월 : YYYY년MM월");
  var title2 = compDate.toDate().after(0, 0, 0).format("비교년월 : YYYY년MM월");
  gr_master.setHeaderValue("closeYmTitle", title1);
  gr_master.setHeaderValue("compYmTitle", title2);
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
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제
  console.log("  ▲△ openCompanyPopup  [호출전]");
  // scwin.openCompanyPopup();  // ----------------------------------------------------------------
  console.log("  △▲ openCompanyPopup  [호출후]");

  // KYU_ORDER
  // if('T' == scwin.vAdminYn  ||  !scwin.isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  // 	$c.gus.cfEnableObjects([ed_coCd,ed_coNm,btn_coCd ]);    
  // }else {
  // 	$c.gus.cfDisableObjects([ed_coCd,ed_coNm,btn_coCd  ]);   
  // }
};

//-------------------------------------------------------------------------
// 사업부 조회 (셀렉트 박스)
//-------------------------------------------------------------------------
scwin.f_setBizCd = function () {
  console.log("=== f_setBizCd (사업부 조회 - 셀렉트 박스) ----------------- 벌써 들어가면 안돼!!!");

  // var con = "param7=" +  ed_coCd.getValue().trim() + "&param8=" + scwin.txtCoClsCd.trim();
  // if (ed_coCd.getValue().trim() == '000') {
  //    con = con + "&param9=1"
  // }

  console.log("   --- f_setBizCd - ed_coCd [" + ed_coCd.getValue() + "]  txtCoClsCd (사업부조회용) [" + scwin.txtCoClsCd + "]");
  ds_bizCd.removeAll();
  ds_commonCode.setEmptyValue();
  var dcJSON = ds_commonCode.getJSON();
  console.log("  *** ds_commonCode (setJSON 후) : " + JSON.stringify(dcJSON));

  // KYU_TEST
  var param7 = ed_coCd.getValue().trim();
  var param8 = scwin.txtCoClsCd; /// 팝업 리턴이 늦으므로 전에 값으로 나가게 됨 !!

  // var param7 = scwin.vCoCd;      // 로그인한 회사코드
  // var param8 = scwin.vCoClsCd;   // 로그인한 회사종류코드

  var param9 = "";
  if (ed_coCd.getValue().trim() == '000') {
    // console.log("  - - 회사코드 000 이므로 1 처리");
    param9 = "1";
  }

  // ds_bizCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  // 		  	    + "&queryId=retrieveAcctDeptCdInfo2&param1=&param2=&"+ con;
  // ds_bizCd.Reset();

  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,
    queryId: "retrieveAcctDeptCdInfo2" // 쿼리ID
    ,
    param7: param7,
    param8: param8,
    param9: param9
  };
  console.log(" *** param7 회사코드 param8 회사종류코드 parm9 '1' (000 일 때) - strParam [" + JSON.stringify(strParam) + "]");

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  var dcJSON = ds_commonCode.getJSON();
  console.log("  *** ds_commonCode : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_setBizCd);
};

//-------------------------------------------------------------------------
// 사업부 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_setBizCd_submitdone = function (e) {
  console.log("▷ sbm_setBizCd_submitdone (사업부 조회 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_bizCd.setJSON(e.responseJSON.GAUCE);
  }
  var ds_bizCdCnt = ds_bizCd.getTotalRow();
  console.log("==== ds_bizCd (사업부 조회) : " + ds_bizCdCnt);

  // language=JavaScript for=ds_bizCd event=OnLoadCompleted(rowCnt)>
  lc_deptCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 공통코드 조회 (증빙관리권한 조회 - 세무조사 id 여부)
//-------------------------------------------------------------------------
scwin.f_empNo = function () {
  console.log("=== f_empNo (증빙관리권한 조회 - 세무조사id 여부)");

  // 데이타셋 초기화 필요
  ds_empNo.removeAll();
  ds_commonCode.setJSON({});
  var grp_cd = "FI624"; // FI624 (증빙관리권한)
  //	var pCode = '<%=empNo%>' ;
  var pCode = scwin.userEmpNo;

  // SELECT 절 
  var param1 = "CD  as COL1 , CD_NM  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ002 ";

  // 조건절
  var param3 = " AND GRP_CD = '" + grp_cd + "' AND USE_YN = '1' AND CD_NM = '" + pCode + "' ";
  var param4 = "CD";

  //	ds_empNo.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  //	ds_empNo.Reset();

  // FI624 (증빙관리권한) - 01: user01, 02: user31, 03: user32, 04: user33, 05: user34, 06: user35, 07: user36, 08: user37
  // 2025-10-02 : 세무조사시에만 사용하는 계정으로 , 세무조사 인원이 조회시 보이지 않아야 하는 부분으로 구현 필요

  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,
    queryId: "dinymicQueryTest" // 쿼리ID
    ,
    param1: param1 // SELECT
    ,
    param2: param2 // 대상테이블
    ,
    param3: param3 // 조건절
    ,
    param4: param4 // CD
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  var dcJSON = ds_commonCode.getJSON();
  console.log("  *** ds_commonCode : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_searchCommon);
};

//-------------------------------------------------------------------------
// 증빙관리권한 - 세무조사용id 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_searchCommon_submitdone = function (e) {
  console.log("▷ sbm_searchCommon_submitdone (증빙관리권한 - 세무조사용id 조회 submitdone)");

  // 2025-10-02 : 세무조사시에만 사용하는 계정으로 , 세무조사 인원이 조회시 보이지 않아야 하는 부분으로 구현 필요
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_empNo.setJSON(e.responseJSON.GAUCE);
  }
  var empCnt = ds_empNo.getTotalRow();
  console.log("==== empCnt (세무조사용id 건수 - FI624) : " + empCnt);

  // language=JavaScript for=ds_empNo event=OnLoadCompleted(rowCnt)>
  if (empCnt > 0) {
    console.log("  세무조사 모드");

    // lc_flag.CBData = "1^요약,2^일반";
    lc_flag.removeAll(); // 콤보박스 클리어
    lc_flag.addItem("1", "요약", 0, true); // fn(value: string, label: string, index: number, refresh: bool)
    lc_flag.addItem("2", "일반", 1, true);
    lc_deptCd.setValue("00000"); //  사업부
    $c.gus.cfDisableObjects($p, [lc_deptCd]);
    ica_closeYm2.setValue("201501");
    ica_compYm2.setValue("201501");
    scwin.empno_Yn = "Y";

    // ozprint.style.display = "none";
    ozprint.hide(); // 하단 버튼열 전체 숨김
  } else {
    console.log("  일반 모드");

    // lc_flag.CBData = "<%= GauceUtil.getCodeList("CO022") %>";
    // ozprint.style.display = "block";
    ozprint.show(""); // 하단 버튼열 전체 보임

    scwin.empno_Yn = "N";
  }
};

// @@ ===== 조회 =============================================================================== //

//-------------------------------------------------------------------------
// 조회(손익계산서)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!$c.gus.cfValidate([ed_coCd,ica_closeYm2, rd_type, lc_deptCd,ica_compYm2])) {
  // let ret = await $c.gus.cfValidate([ed_coCd,ica_closeYm2,rd_type,lc_deptCd,ica_compYm2]);  // rd_type mandatory 아님
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm2, lc_deptCd, ica_compYm2]); // rd_type mandatory 아님

  if (!ret) {
    return;
  }
  scwin.f_Setting();
  var date1 = ica_closeYm2.getValue().trim();
  var date2 = ica_compYm2.getValue().trim();
  if (ds_empNo.getTotalRow() > 0) {
    if (date1.substring(0, 4) <= "2013" || date2.substring(0, 4) >= "2019") {
      await $c.win.alert($p, "2014~2018년 이외의 조회 권한이 없습니다.");
      return;
    }
  }
  ds_search.set("closeYm1", scwin.txt_closeYm1);
  ds_search.set("closeYm3", scwin.txt_closeYm3);
  ds_search.set("deptNm", scwin.txt_deptNm); // 부서명 (전역변수)
  ds_search.set("compYm1", scwin.txt_compYm1);
  ds_search.set("compYm3", scwin.txt_compYm3);
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));

  // ds_search.UseChangeInfo = false
  // tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(손익계산서) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var temp = ds_master.getRowCount();
  ed_totalRows.setValue(temp);
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
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
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }
  console.log("  --------------- 팝업 scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      console.log("  ==-==-== 자회사 여부에 따른 회사코드팝업 활성/비활성 처리 (최초 1회)");
      if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
      }
      scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    }

  // KYU_NEW : 위치 이동 - 000 일 때 조회값이 달라짐
  scwin.f_setBizCd();
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_coCd event=OnKillFocus()>
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');

  // KYU_ORDER
  // scwin.f_setBizCd();
};

//-------------------------------------------------------------------------
// 사업부 focus out
//-------------------------------------------------------------------------
scwin.lc_selectbox2_onblur = function (e) {
  // language=JavaScript for=lc_deptCd event=OnKillFocus()>
  // scwin.f_CheckComboData(this, "사업부");
};

//-------------------------------------------------------------------------
// 사업부 변경시
//-------------------------------------------------------------------------
scwin.lc_selectbox2_onchange = function (info) {
  // language=JavaScript for=lc_deptCd event=OnSelChange2()>
  // 	var row = ds_bizCd.NameValueRow("COL1", lc_deptCd.ValueOfIndex("COL1", lc_deptCd.Index));
  // 	txt_deptNm.value  = ds_bizCd.NameValue(row,"COL2");

  // 부서명 : ds_bizCd 와 lc_deptCd 순서가 다름 (중간에 정렬됨)
  var row = ds_bizCd.getMatchedIndex("col1", lc_deptCd.getValue());
  scwin.txt_deptNm = ds_bizCd.getCellData(row, "col2");
  console.log("  사업부 변경시 : deptCd [" + lc_deptCd.getValue() + "]  ds.row [" + row + "]  txt_deptNm [" + scwin.txt_deptNm + "]");
};

//-------------------------------------------------------------------------
// 그리드셀 더블클릭
//-------------------------------------------------------------------------
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // language="javascript"  for=gr_master event=OnDblClick(row,colid)>
  var row = rowIndex;
  var colid = columnId;
  if (row >= 0) {
    if (colid == "closeThisAmt") {
      scwin.f_PopUp();
    }
  }
};

//-------------------------------------------------------------------------
// 재무제표상세팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function () {
  // var amtParam = new Object(); 

  // amtParam.closeYm2 = ed_closeYm2.text; //결산년월
  // amtParam.type = rd_type.CodeValue; //조정반영
  // amtParam.deptCd = lc_deptCd.BindColVal; //사업부
  // amtParam.flag = lc_flag.BindColVal; //조회구분
  // amtParam.coCd = ed_coCd.text; //회사코드
  // amtParam.acctCd = ds_master.NameValue(ds_master.RowPosition,"acctCd"); //회사코드

  // if(empno_Yn=="N"){
  //     // open pop-up window
  //     var sURL = "/ac/fi/gnrlaccount/settmgnt/fi_204_03_10p_01.jsp";
  //     var rtnList = window.showModelessDialog(sURL, amtParam,"dialogWidth:1200px; dialogHeight:700px; scroll:yes;resizable:yes;status:no;");
  // }

  // 증빙관리권한 사용자일 경우 리턴
  if (scwin.empno_Yn > 0) return;

  // 전표복사(분개내역) 호출 
  let data = {
    closeYm2: ica_closeYm2.getValue() // 결산년월
    ,
    type: rd_type.getValue() // 조정반영
    ,
    deptCd: lc_deptCd.getValue() // 사업부
    ,
    flag: lc_flag.getValue() // 조회구분
    ,
    coCd: ed_coCd.getValue() // 회사코드
    ,
    acctCd: ds_master.getCellData(ds_master.getRowPosition(), "acctCd") // 계정코드
  };
  console.log("   data [" + JSON.stringify(data) + "]");
  let win_url = "/ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_10p_01.xml";
  let opts = {
    id: "smpPop",
    popupName: "재무재표상세팝업",
    modal: true,
    type: "browserPopup",
    width: 1280,
    height: 780,
    title: "재무재표상세팝업"
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_master.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = '손익계산서_xls';

  // 	gr_master.SetExcelTitle(0, "");
  // 	gr_master.SetExcelTitle(1, "value:"+sheetTitle+";"  // 표시할 타이틀
  // 								    + "font-face:'돋움체';" // 폰트
  // 								    + "font-size:18pt;"    // 폰트 크기
  // 								    + "font-color:black;"  // 폰트 색깔
  // 								    + "bgcolor:#ffffff;"   // 배경 색깔
  // 								    + "align:center;"      // 정렬
  // 								    + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  // 								    + "line-width:0pt;"    // 타이틀 테두리선 굵기
  // 								    + "skiprow:2;");       // 타이틀 다음 떼는 로우 수
  // fileName = '손익계산서_'+".xls";
  // cfGridToExcel(gr_master, fileName, fileName, 8+16);

  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      startRowIndex: 3,
      // 내용 앞으로 몇 row 띄우는지...
      startColumnIndex: 0,
      bodyWordwrap: true // 줄바꿈
    };
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 7 /* 병합할 컬럼갯수 */,
      text: "손익계산서",
      textAlign: "center",
      drawBorder: false,
      fontSize: "18px",
      fontName: "돋움체"
    }];
    $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
  }
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
// 손익계산서 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = function (e) {
  console.log("=== f_OzReport (손익계산서 발행)");
  if (!$c.gus.cfValidate($p, [ed_coCd, ica_closeYm2, rd_type, lc_deptCd, ica_compYm2])) {
    return;
  }
  scwin.f_Setting();

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("fi_204_03_09p") ;
  // odiParam.add("sysPath", "dbl.ac.fi.gnrlaccount.settmgnt") ;
  // odiParam.add("closeYm1",txt_closeYm1.value.trim());
  // odiParam.add("closeYm2",ed_closeYm2.text.trim());
  // odiParam.add("closeYm3",txt_closeYm3.value.trim());
  // odiParam.add("type",rd_type.CodeValue.trim());
  // odiParam.add("deptCd",lc_deptCd.BindColVal);
  // odiParam.add("deptNm",txt_deptNm.value.trim()) ;
  // odiParam.add("compYm1",txt_compYm1.value.trim());
  // odiParam.add("compYm2",ed_compYm2.text.trim());
  // odiParam.add("compYm3",txt_compYm3.value.trim());
  // odiParam.add("flag",lc_flag.BindColVal.trim());
  // odiParam.add("coCd",ed_coCd.text.trim());
  // odiParam.add("coClsCd",txtCoClsCd.value.trim());

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;
  //formParam.add("form1","폼1") ;
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  //viewerParam.add("viewer.showtree","false"); // 트리 표시
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  //viewerParam.add("print.mode","silent"); // 인쇄 옵션창 표시 없이 바로 출력
  //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/gnrlaccount/settmgnt/fi_204_03_09p.ozr", odiParam, viewerParam, formParam);
  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);

  let data = {
    odiName: "fi_204_03_09p",
    reportName: "/ac/fi/gnrlaccount/settmgnt/fi_204_03_09p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.taxbiz.withhold"
      closeYm1: scwin.txt_closeYm1.trim(),
      closeYm2: ica_closeYm2.getValue().trim(),
      closeYm3: scwin.txt_closeYm3.trim(),
      type: rd_type.getValue().trim(),
      deptCd: lc_deptCd.getValue(),
      deptNm: scwin.txt_deptNm.trim(),
      compYm1: scwin.txt_compYm1.trim(),
      compYm2: ica_compYm2.getValue().trim(),
      compYm3: scwin.txt_compYm3.trim(),
      flag: lc_flag.getValue().trim(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd.trim()
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };

  // 미리보기 체크인
  if (cbx_previewCheck.getValue() == "1") {
    console.log("  손익계산서 - 미리보기 data [" + JSON.stringify(data) + "]");
    scwin.openPopup(data);
  } else if (cbx_printCheck.getValue() == "1")
    // 인쇄옵션 체크
    {
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'view' // silent, view
      };

      // 인쇄옵션
      $c.ext.printOzReport($p, data, opts);
    } else
    // 미리보기, 인쇄옵션 둘 다 체크아웃 - pdf 다운로드
    {
      let opts = {
        filename: 'fi_204_03_09p',
        exportMode: 'view'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }
};

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// 콤보데이터 검증 (의미없음)
//------------------------------------------------------------------------- 
scwin.f_CheckComboData = function (objCombo, comboTitle) {
  // if (objCombo.Index == -1 && cfIsNull(objCombo.text) == false) {
  // objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.text);

  // 	if (objCombo.Index == -1) {
  // 		cfAlertMsg(MSG_CM_ERR_038, [comboTitle + "코드"]);
  // 		objCombo.Focus();
  // 	}
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',btnId:'btn_coCd',id:'udc_coCd',code:'coCd',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'3',maxlengthName:'50',objTypeName:'data',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm2',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',ref:'data:ds_search.closeYm2',mandatory:'true',title:'결산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'비교년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_compYm2',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',mandatory:'true',ref:'data:ds_search.compYm2',title:'비교년월'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onblur':'scwin.lc_selectbox2_onblur','ev:onchange':'scwin.lc_selectbox2_onchange',id:'lc_deptCd',mandatory:'true',ref:'data:ds_search.deptCd',sortMethod:'ascending',sortOption:'value',style:'width: 150px;',submenuSize:'fixed',title:'사업부',visibleRowNum:'50'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bizCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_flag',ref:'data:ds_search.flag',style:'width: 120px;',submenuSize:'fixed',title:'조회구분'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_type',ref:'data:ds_search.type',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정전'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정반영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'손익계산서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정과목',width:'300',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'계정코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYmTitle',inputType:'text',style:'',value:'결산년월 : 2015년12월',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'compYmTitle',value:'비교년월: 2014년12월',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column52',value:'증감',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column46',value:'당월금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column62',value:'누계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column59',value:'당월금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column56',value:'누계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column53',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column50',value:'누계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'prtAcctNm',inputType:'text',style:'',value:'',width:'300',class:'ws-pre',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeThisAmt',inputType:'text',style:';color:black;',value:'',width:'180',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'closeCumAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'compThisAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'compCumAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'variationThisAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'variationCumAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'ozprint',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ozprint',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'손익계산서'}]}]}]}]}]}]}]}]}]})