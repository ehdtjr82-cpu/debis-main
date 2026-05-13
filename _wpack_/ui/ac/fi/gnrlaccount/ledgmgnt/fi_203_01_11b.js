/*amd /ui/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_11b.xml 90615 908eba070c3ead9871dce7bb5cecb4ba5d7bac9e8324a1fbc564b304f1096ac4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryYm',name:'조회년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCdSt',name:'계정코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCdEnd',name:'계정코드To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdSt',name:'회계부서코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCond',name:'조회조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'Receipt Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivYn',name:'사업부조회여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total',saveRemovedData:'true',keepDataType:'true','ev:ondataload':'scwin.ds_total_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prevAmt',name:'전월이월',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prev12Amt',name:'12개월이전',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prev09Amt',name:'9개월',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prev06Amt',name:'6개월',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prev05Amt',name:'5개월',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prev04Amt',name:'4개월',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prev03Amt',name:'3개월',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeStd',name:'병합기준',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizdiv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'상위코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'코드영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'코드영문명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'필터코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'필터코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_process'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryYm',name:'조회년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_admin',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'그룹코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCd',name:'상위코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCdNm',name:'상위코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNm',name:'코드영문명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNmAbbr',name:'코드명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNmAbbr',name:'코드영문명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'정렬번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'코드설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'필터코드1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'필터코드2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'필터코드3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveTotalSpecialAccountLedgerTabulationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_total","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dataProcess',action:'/ac.fi.gnrlaccount.ledgmgnt.ProcessTotalSpecialAccountLedgerTabulationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_dataProcess_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bizdiv',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bizdiv","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admin',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_admin","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_admin_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_203_01_11b
// 이름     : 사업부지사별계정잔액집계표조회
// 경로     : 재무회계/일반회계/원장관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//            2026-02-02 : 개인화 위해 그리드 완전 분리
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
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

scwin.vUserAcctDeptCd = ""; //  사용자귀속부서코드

scwin.isSubCompany = false; // 자회사여부

// <input type="hidden" name="txtCoClsCd" id="txtCoClsCd">
// <input type="hidden" name="txtRtnMsg" id="txtRtnMsg">
// <input type="hidden" name="txtRtnNo" id="txtRtnNo">
// <input type="hidden" name="txtUserId" id="txtUserId">
scwin.txtCoClsCd = "";
scwin.txtRtnMsg = "";
scwin.txtRtnNo = "";
scwin.txtUserId = "";
scwin.ed_acctCdSt_hidVal = ""; // 계정From
scwin.ed_acctCdEnd_hidVal = ""; // 계정To
scwin.ed_acctDeptCdSt_hidVal = ""; // 부서
scwin.ed_clntNo_hidVal = ""; // 거래처
scwin.ed_crn_hidVal = ""; // 사업자번호
scwin.ed_coCd_hidVal = ""; // 회사코드

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.sort_options = {};
scwin.sort_options.sortIndex = "acctCd acctDeptCd mgntClntNo";
scwin.sort_options.sortOrder = "1 1 1"; // 1: 오름차순

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

  // KYU_TEST : 사용안하지만(주석처리) 혹시 몰라서 지정
  let userAcctDeptCd = $c.data.getMemInfo($p, "empNo");
  scwin.vUserAcctDeptCd = userAcctDeptCd;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // KYU_TEST : admin == T
    div_selectYn.show("");
    // div_selectYn.hide();

    // scwin.f_Header();
    scwin.f_Setting(); // 조회조건 셋팅
    scwin.f_setCompanyInfo(); // 자회사 회계 시스템 추가에 따른 설정

    // KYU_ORDER
    scwin.f_AdminAuth(); // 재경팀 여부 체크
    scwin.f_BizDivAuth(); // 사업부별 조회권한 여부 체크
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  console.log("=== f_Setting (조회조건 셋팅)");
  //   ed_qryYm.text = <%=DDate.getDate().substring(0,6)%>;
  //   ed_acctCdSt.hidVal = ds_search.NameString(1,"acctCdSt");
  //   ed_acctCdEnd.hidVal = ds_search.NameString(1,"acctCdEnd");
  //   ed_acctDeptCdSt.hidVal = ds_search.NameString(1,"acctDeptCdSt");
  //   ed_clntNo.hidVal = ds_search.NameString(1,"clntNo")
  //   ed_crn.hidVal = ds_search.NameString(1,"crn");
  //   rd_type.CodeValue="2";
  //   lc_qryCond.index=0;
  //   ed_qryYm.focus();
  //   f_QryCond();

  var thisYm = $c.date.getServerDateTime($p, "yyyyMM"); // 현재년월
  ica_qryYm.setValue(thisYm);
  scwin.ed_acctCdSt_hidVal = ds_search.get("acctCdSt");
  scwin.ed_acctCdEnd_hidVal = ds_search.get("acctCdEnd");
  scwin.ed_acctDeptCdSt_hidVal = ds_search.get("acctDeptCdSt");
  scwin.ed_clntNo_hidVal = ds_search.get("clntNo");
  scwin.ed_crn_hidVal = ds_search.get("crn");
  rd_type.setValue("2"); // 조정반영 선택
  lc_qryCond.setSelectedIndex(0); // 조회조건  1:계정 선택

  chk_bizDivYn.checkAll(false); // 사업부조회여부 체크 해제

  ica_qryYm.focus(); // 회계연월에 포커스

  scwin.f_QryCond();

  // txtUserId.value = "<%=login.getUserId()%>";
  scwin.txtUserId = scwin.userId;
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 추가에 따른 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 재경팀 여부 체크 (FI007)
//-------------------------------------------------------------------------
scwin.f_AdminAuth = function () {
  console.log("=== f_AdminAuth (재경팀 여부 체크 - FI007 전자세금계산서(즉시신고)/종이계산서출력권한)");
  var userId = scwin.userId;
  var admin = "";
  ds_admin.setJSON([]);

  // KYU_NEW
  // ds_admin --> ds_code (결과가 같으므로 하나의 DS 로 리턴) / 초기화 필요

  // 관리자 권한 체크
  // ds_admin.SyncLoad = true;
  // ds_admin.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=FI007&cd=&cdNm=";
  // ds_admin.Reset();

  let condition = "?grpCd=FI007&cd=&cdNm=";
  sbm_admin.action = "/cm.zz.RetrieveCodeCMD.do" + condition;
  $c.sbm.execute($p, sbm_admin);
};

//-------------------------------------------------------------------------
// 재경팀 여부 체크 submitdone (FI007)
//-------------------------------------------------------------------------
scwin.sbm_admin_submitdone = function (e) {
  console.log("▷ sbm_ds_admin_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var admin = "";
  var count = 0;
  for (var i = 0; i < ds_admin.getTotalRow(); i++) {
    admin = ds_admin.getCellData(i, "cd");
    if (scwin.userId == admin) {
      count++;
    }
  }
  console.log("  ds_admin count : " + count);
  if (count > 0) {
    $c.gus.cfEnableElement($p, btn_data, 1); // 집계버튼 활성화
    $c.gus.cfEnableObjects($p, [rd_type]); // 조회조건 활성화
    console.log("==-==-==  집계버튼, 라디오버튼 활성");
  } else {
    $c.gus.cfDisableElement($p, btn_data, 1);
    $c.gus.cfDisableObjects($p, [rd_type]);
    console.log("==-==-==  집계버튼, 라디오버튼 비활성");
  }
  if ('T' == scwin.vAdminYn) {
    $c.gus.cfEnableElement($p, btn_data, 1);
  }
};

//-------------------------------------------------------------------------
// 사업부별 조회권한 여부 체크 (FI200)
//-------------------------------------------------------------------------
scwin.f_BizDivAuth = function () {
  console.log("=== f_BizDivAuth (사업부별 조회권한 여부 체크 - FI200 사업부별지사별잔액집계표조회권한)");
  ds_bizdiv.setJSON([]);
  var userId = scwin.userEmpNo;

  // ds_bizdiv.SyncLoad = true;
  // ds_bizdiv.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=FI200&cd=&cdNm=";
  // ds_bizdiv.Reset();

  let condition = "?grpCd=FI200&cd=&cdNm=";
  sbm_bizdiv.action = "/cm.zz.RetrieveCodeCMD.do" + condition;
  $c.sbm.execute($p, sbm_bizdiv);
};

//-------------------------------------------------------------------------
// 사업부별 조회권한 여부 체크 submitdone (FI200)
//-------------------------------------------------------------------------
scwin.sbm_bizdiv_submitdone = function (e) {
  console.log("▷ sbm_bizdiv_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var count = 0;
  var bizdiv = "";
  for (var i = 0; i < ds_bizdiv.getTotalRow(); i++) {
    bizdiv = ds_bizdiv.getCellData(i, "cd");
    if (scwin.userId == bizdiv) {
      count++;
    }
  }
  console.log("  ds_bizdiv 일치 count : " + count);

  // if (count > 0 || 'T' == '<%=privAdmin%>'){ //권한있음
  if (count > 0 || 'T' == scwin.vAdminYn) {
    //권한있음
    // div_selectYn.style.visibility = "visible";

    chk_bizDivYn.show("");
    console.log("==-==-==  사업부조회여부 체크박스 보임");
  } else {
    //권한없음

    // KYU_TEST : 임시로 보이게 함
    //div_selectYn.style.visibility = "hidden";
    chk_bizDivYn.hide(); // KYU_TEST
    // div_selectYn.show("");

    console.log("==-==-==  사업부조회여부 체크박스 숨김");
  }
};

//-------------------------------------------------------------------------
//  조건이 바뀔때마다(1^계정,2^사업자번호 (부서),3^거래처)
//-------------------------------------------------------------------------
scwin.f_QryCond = function () {
  console.log("=== f_QryCond   lc_qryCond : " + lc_qryCond.getValue());
  if (lc_qryCond.getValue() == "1") {
    // gr1.style.display = "inline";
    // gr2.style.display = "none";
    // gr3.style.display = "none";

    // 그리드 네비게이터에 그리드 연결
    // udc_grdMain.setGridId("gr_total1");
    // gr_total1.show("");
    // gr_total2.hide();
    // gr_total3.hide();
    tb_acct.show("");
    tb_crn.hide();
    tb_clnt.hide();

    // ds_total.SortExpr = "+acctCd+acctDeptCd+mgntClntNo" ;
    scwin.sort_options.sortIndex = "acctCd acctDeptCd mgntClntNo";
    scwin.sort_options.sortOrder = "1 1 1"; // 1: 오름차순
    //        ds_total.SubsumExpr = "2:acctNm,1:acctDeptNm" ;
  } else if (lc_qryCond.getValue() == "2") {
    // 사업자번호 : 정렬은 부서코드 우선
    // gr1.style.display = "none";
    // gr2.style.display = "inline";
    // gr3.style.display = "none";

    // // 그리드 네비게이터에 그리드 연결
    // udc_grdMain.setGridId("gr_total2");
    // gr_total1.hide();
    // gr_total2.show("");
    // gr_total3.hide();

    tb_acct.hide();
    tb_crn.show("");
    tb_clnt.hide();

    // ds_total.SortExpr = "+acctDeptCd+acctCd +mgntClntNo";
    scwin.sort_options.sortIndex = "acctDeptCd acctCd mgntClntNo";
    scwin.sort_options.sortOrder = "1 1 1"; // 1: 오름차순
  } else if (lc_qryCond.getValue() == "3") {
    // gr1.style.display = "none";
    // gr2.style.display = "none";
    // gr3.style.display = "inline";

    // udc_grdMain.setGridId("gr_total3");
    // gr_total1.hide();
    // gr_total2.hide();
    // gr_total3.show("");

    tb_acct.hide();
    tb_crn.hide();
    tb_clnt.show("");

    // ds_total.SortExpr = "+mgntClntNo+acctCd +acctDeptCd";
    scwin.sort_options.sortIndex = "mgntClntNo acctCd acctDeptCd";
    scwin.sort_options.sortOrder = "1 1 1"; // 1: 오름차순
  }

  // ds_total.Sort();
  if (ds_total.getTotalRow() > 0) {
    ds_total.multisort(scwin.sort_options);
  }
  // ds_total.RowPosition=1;
  ds_total.setRowPosition(0);
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 초기화 버튼 (기존은 없음)
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, searchTable);

  // KYU_NEW : 초기화 히든
  scwin.ed_acctCdSt_hidVal = ""; // 계정From
  scwin.ed_acctCdEnd_hidVal = ""; // 계정To
  scwin.ed_acctDeptCdSt_hidVal = ""; // 부서
  scwin.ed_clntNo_hidVal = ""; // 거래처
  scwin.ed_crn_hidVal = ""; // 사업자번호
  scwin.ed_coCd_hidVal = ""; // 회사코드

  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = function (str, msg) {
  console.log("=== f_HiddenCheck ( str:" + str.getValue() + "  msg:" + msg + ")");
  if (str.getValue().trim() == "") return true;
  // if (str.getValue().trim() != str.hidVal){
  if (msg == "계정From" && str.getValue().trim() != scwin.ed_acctCdSt_hidVal || msg == "계정To" && str.getValue().trim() != scwin.ed_acctCdEnd_hidVal || msg == "귀속부서From" && str.getValue().trim() != scwin.ed_acctDeptCdSt_hidVal) {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, [msg])); // 유효한 가 아닙니다.
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 숫자차이체크
//-------------------------------------------------------------------------
scwin.f_BetweenCheck = function (str1, str2) {
  if (str1 == "" && str2 != "" || str1 != "" && str2 == "") {
    return false;
  }
  if (parseInt(str2) - parseInt(str1) < 0) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회(사업부별지사별계정잔액집계표)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  console.log("====== f_Retrieve ==================");
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_qryYm, ed_acctCdSt, ed_acctCdEnd, ed_acctDeptCdSt, ed_crn]);
  if (!ret) return false;
  if (!scwin.f_HiddenCheck(ed_acctCdSt, "계정From")) return false;
  if (!scwin.f_HiddenCheck(ed_acctCdEnd, "계정To")) return false;
  if (!scwin.f_HiddenCheck(ed_acctDeptCdSt, "귀속부서From")) return false;

  // 계정From 넣었으면 계정To 반드시 넣어야 함
  if (!scwin.f_BetweenCheck(ed_acctCdSt.getValue().trim(), ed_acctCdEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "계정코드To", "계정코드From")); // %1은(는) %2 보다 큰 값으로 입력하십시오
    ed_acctCdSt.focus();
    return false;
  }
  scwin.f_QryCond();
  // gr_total1.ReDraw = "False";
  // gr_total2.ReDraw = "False";
  // gr_total3.ReDraw = "False";

  // ds_search.UseChangeInfo = false;
  ed_createDate1.setValue("");
  ed_createDate2.setValue("");
  ed_createDate3.setValue("");

  // KYU_TEST : 알럿 대체
  //dataSetDebug(ds_search, true)
  // var dcJSON = ds_search.getJSON();
  // $c.gus.alert("  *** ds_search : "+ JSON.stringify(dcJSON));

  // tr_search.Action="/ac.fi.gnrlaccount.ledgmgnt.RetrieveTotalSpecialAccountLedgerTabulationCMD.do";
  // tr_search.Post();

  // 전역변수값 ds 에 반영
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(사업부별지사별계정잔액집계표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    // language=JavaScript for=tr_search event=OnFail()>
    // cfShowError(tr_search);
    ds_total.setJSON([]);
    ed_createDate1.setValue("");
    ed_createDate2.setValue("");
    ed_createDate3.setValue("");

    // gr_total1.ReDraw = "true";
    //        cfShowTotalRows(totalRows, 0);
    ed_totalRows1.setValue(ds_total.getTotalRow());
    ed_totalRows2.setValue(ds_total.getTotalRow());
    ed_totalRows3.setValue(ds_total.getTotalRow());
    if (ds_total.getTotalRow() == 0) {
      ed_createDate1.setValue("");
      ed_createDate2.setValue("");
      ed_createDate3.setValue("");
      ed_totalRows1.setValue(ds_total.getTotalRow());
      ed_totalRows2.setValue(ds_total.getTotalRow());
      ed_totalRows3.setValue(ds_total.getTotalRow());
    }
    return;
  }

  // language=JavaScript for=tr_search event=OnSuccess()>
  //조회성공시 집계일시 표시
  if (ds_total.getTotalRow() > 0) {
    ed_createDate1.setValue(ds_total.getCellData(0, "regDtm"));
    ed_createDate2.setValue(ds_total.getCellData(0, "regDtm"));
    ed_createDate3.setValue(ds_total.getCellData(0, "regDtm"));
    ed_totalRows1.setValue(ds_total.getTotalRow());
    ed_totalRows2.setValue(ds_total.getTotalRow());
    ed_totalRows3.setValue(ds_total.getTotalRow());
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다

    ed_totalRows1.setValue(ds_total.getTotalRow());
    ed_totalRows2.setValue(ds_total.getTotalRow());
    ed_totalRows3.setValue(ds_total.getTotalRow());
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
//  데이타셋 정렬
//-------------------------------------------------------------------------
scwin.ds_total_ondataload = function () {
  console.log("----- ds_total_ondataload");
  if (ds_total.getTotalRow() > 0) {
    ds_total.multisort(scwin.sort_options);
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
// 회사 입력 팝업
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  console.log("=== f_PopUpCompanyInfo ( pWinCloseTF[ " + pWinCloseTF + " ]");

  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc
  //                             ,ed_coCd.getValue(), ed_coNm.getValue()
  //                             ,pWinCloseTF,null,null,null,null
  //                             ,null,null,null,null,null);
  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

//-------------------------------------------------------------------------
// 회사코드 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) scwin.f_initObj(); // 사업자번호,부서,거래처 초기화

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
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true) {
    // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    console.log("  ==-==-== 자회사 여부에 따른 회사코드팝업 활성/비활성 처리 (최초 1회)");

    // KYU_ORDER 
    if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
      // cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    } else {
      // cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    }
    scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

    // KYU_ORDER : 순서 조정
    scwin.f_AdminAuth(); // 재경팀 여부 체크
    scwin.f_BizDivAuth(); // 사업부별 조회권한 여부 체크
  }
};

//-------------------------------------------------------------------------
// 사업자번호,부서,거래처 초기화
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  //     cfInitObjects([ed_crn,txt_busiNm]); // 사업자번호
  //     cfInitObjects([ed_acctDeptCdSt,txt_acctDeptNmSt /*,ed_acctDeptCdEnd , txt_acctDeptNmEnd*/]); //  부서
  //     cfInitObjects([ed_clntNo,txt_clntNm]); // 거래처 코드

  $c.gus.cfInitObjects($p, [ed_crn, ed_crnNm]); // 사업자번호
  $c.gus.cfInitObjects($p, [ed_acctDeptCdSt, ed_acctDeptNmSt]); //  부서
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); // 거래처 코드
};

//-------------------------------------------------------------------------
// 사업자번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('6', 'F');
};

//-------------------------------------------------------------------------
// 부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdSt_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

//-------------------------------------------------------------------------
// 계정From 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCdSt_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 계정To 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCdEnd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 팝업 @@
//  1:계정From,2:계정To,3:부서,4:거래처,6:사업자번호
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ] 1:계정From,2:계정To,3:부서,4:거래처,6:사업자번호)");
  var qryYear = ica_qryYm.getValue().trim().substring(0, 4);
  console.log(" qryYear (회계년월) : " + qryYear);
  switch (flag) {
    case '1':
      // 계정조회From
      var temp = "T,,";
      console.log("  계정From popup  temp [" + temp + "]");

      //rtnList = cfCommonPopUp('retrieveAcctCdInfo',ed_acctCdSt.text.trim(),txt_acctCdStNm.value,check,null,null,null,null,temp,null,null,null,null);
      udc_acctCdSt.cfCommonPopUp(scwin.udc_acctCdSt_callBackFunc1, ed_acctCdSt.getValue().trim(), ed_acctNmSt.getValue(), check, null, null, null, null, temp, null, null, null, null);
      break;
    case '2':
      // 계정조회To
      var temp = "T,,";
      console.log("  계정To popup  temp [" + temp + "]");

      // rtnList = cfCommonPopUp('retrieveAcctCdInfo',ed_acctCdEnd.text.trim(),txt_acctCdEndNm.value,check,null,null,null,null,temp,null,null,null,null);
      udc_acctCdEnd.cfCommonPopUp(scwin.udc_acctCdEnd_callBackFunc2, ed_acctCdEnd.getValue().trim(), ed_acctNmEnd.getValue(), check, null, null, null, null, temp, null, null, null, null);
      break;
    case '3':
      // 귀속부서From
      // var param = ","+ed_coCd.getValue()+","+scwin.txtCoClsCd+",0";
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; // 2026-01-28 수정
      console.log("  귀속부서From popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo10',ed_acctDeptCdSt.text.trim(),txt_acctDeptNmSt.value,check,null,null,null,null,param,null,null,null,null,null,null,null,null,null,qryYear);
      udc_acctDeptCdSt.cfCommonPopUp(scwin.udc_acctDeptCdSt_callBackFunc1, ed_acctDeptCdSt.getValue().trim(), ed_acctDeptNmSt.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case '5':
      break;
    case '4':
      // 거래처
      var param = ",,," + ed_coCd.getValue();
      console.log("  거래처 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntList2',ed_clntNo.text.trim(),txt_clntNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '6':
      // 사업자번호 - 쿼리는 동일하나 파라미터가 다름
      // var selectID ='retrieveCrnInfo';
      // udc_crn.setSelectId("retrieveCrnInfo");
      var param = '';
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사인 경우에만  회사코드 check
        // selectID ='retrieveCrnClntInfo';
        udc_crn.setSelectId("retrieveCrnInfo");
        param = "," + ed_coCd.getValue();
        console.log("  사업자번호 popup (자회사) param [" + param + "]");

        // rtnList = cfCommonPopUp(selectID,ed_crn.text.trim(),txt_busiNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc1, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        console.log("  사업자번호 popup (자회사 아님) param [" + param + "]"); // KYU_TEST

        udc_crn.setSelectId("retrieveCrnInfo");
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc2, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 계정From조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_acctCdSt_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_acctCdSt_callBackFunc1 (계정From조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctCdSt, ed_acctNmSt, rtnList, '1');
};

//-------------------------------------------------------------------------
// 계정To조회 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_acctCdEnd_callBackFunc2 = function (rtnList) {
  console.log("▲ udc_acctCdEnd_callBackFunc2 (계정To조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctCdEnd, ed_acctNmEnd, rtnList, '2');
};

//-------------------------------------------------------------------------
// 부서From조회 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdSt_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_acctDeptCdSt_callBackFunc1 (부서From조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, rtnList, '3');
};

//-------------------------------------------------------------------------
// 거래처 callBackFunc (4)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_clntNo_callBackFunc (거래처 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_clntNo, ed_clntNm, rtnList, '4');
};

//-------------------------------------------------------------------------
// udc_crn_callBackFunc1 (사업자번호 팝업 callBackFunc 1) (6)
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_acctCd_callBackFunc1 (사업자번호 팝업 callBackFunc 1)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.afterCrnPopup(rtnList);
};

//-------------------------------------------------------------------------
// udc_crn_callBackFunc2 (사업자번호 팝업 callBackFunc 2) (6)
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc2 = function (rtnList) {
  console.log("▲ udc_crn_callBackFunc2 (사업자번호 팝업 callBackFunc 2)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.afterCrnPopup(rtnList);
};

//-------------------------------------------------------------------------
// afterCrnPopup (사업자번호 팝업 통합처리)
//-------------------------------------------------------------------------
scwin.afterCrnPopup = function (rtnList) {
  console.log("▲▲ afterCrnPopup (사업자번호 팝업 통합처리)");
  console.log("   rtnList [" + rtnList + "]");

  // KYU_DEL : 불필요 로직 - 삭제처리
  // if (rtnList != null ) {
  //     if (rtnList[0] == "N/A") {
  //         return;
  //     }
  // }

  scwin.f_resultPopEd(ed_crn, ed_crnNm, rtnList, '6');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:계정From,2:계정To,3:부서From,4:거래처,6:사업자번호
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  rtnList [" + rtnList + "] 1:계정From,2:계정To,3:부서From,4:거래처,6:사업자번호)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫을 때
      // 히든값 초기화
      switch (flag) {
        case '1':
          scwin.ed_acctCdSt_hidVal = "";
          break;
        // 계정From
        case '2':
          scwin.ed_acctCdEnd_hidVal = "";
          break;
        // 계정To
        case '3':
          scwin.ed_acctDeptCdSt_hidVal = "";
          break;
        // 부서From
        case '4':
          scwin.ed_clntNo_hidVal = "";
          break;
        // 거래처
        case '6':
          scwin.ed_crn_hidVal = "";
          break;
        // 사업자번호
        default:
          break;
      }
      return;
    }
    // strCd.Text = rtnList[0];    // 코드
    // strNm.value = rtnList[1];   // 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_acctCdSt_hidVal = rtnList[0];
        break;
      // 계정From
      case '2':
        scwin.ed_acctCdEnd_hidVal = rtnList[0];
        break;
      // 계정To
      case '3':
        scwin.ed_acctDeptCdSt_hidVal = rtnList[0];
        break;
      // 부서From
      case '4':
        scwin.ed_clntNo_hidVal = rtnList[0];
        break;
      // 거래처
      case '6':
        scwin.ed_crn_hidVal = rtnList[0];
        break;
      // 사업자번호
      default:
        break;
    }
  } else {
    // strCd.Text = "";
    // strNm.value = "";
    // strCd.hidVal = "";

    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_acctCdSt_hidVal = "";
        break;
      // 계정From
      case '2':
        scwin.ed_acctCdEnd_hidVal = "";
        break;
      // 계정To
      case '3':
        scwin.ed_acctDeptCdSt_hidVal = "";
        break;
      // 부서From
      case '4':
        scwin.ed_clntNo_hidVal = "";
        break;
      // 거래처
      case '6':
        scwin.ed_crn_hidVal = "";
        break;
      // 사업자번호
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//  1:계정From,2:계정To,3:부서From,4:거래처,6:사업자번호
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  // console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색)  srtCd["+strCd.getValue()+"] strNm["+strNm.getValue()+"] flag["+flag+"]");
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색)  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal) return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_acctCdSt_hidVal ||
  // 계정From
  flag == '2' && strCd.getValue().trim() == scwin.ed_acctCdEnd_hidVal ||
  // 계정To
  flag == '3' && strCd.getValue().trim() == scwin.ed_acctDeptCdSt_hidVal ||
  // 부서From
  flag == '4' && strCd.getValue().trim() == scwin.ed_clntNo_hidVal ||
  // 거래처
  flag == '6' && strCd.getValue().trim() == scwin.ed_crn_hidVal // 사업자번호
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";
  strNm.setValue("");

  // 명 초기화
  // switch (flag){
  //     case '1'  : ed_acctNmSt.setValue("");       break;  // 계정From 
  //     case '2'  : ed_acctNmEnd.setValue("");      break;  // 계정To
  //     case '3'  : ed_acctDeptNmSt.setValue("");   break;  // 부서From 
  //     case '4'  : ed_ClntNm.setValue("");         break;  // 거래처명
  //     case '6'  : ed_crn.setValue("");            break;  // 사업자번호
  //     default   : break;
  // }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_acctCdSt_hidVal = "";
      break;
    // 계정From
    case '2':
      scwin.ed_acctCdEnd_hidVal = "";
      break;
    // 계정To
    case '3':
      scwin.ed_acctDeptCdSt_hidVal = "";
      break;
    // 부서From
    case '4':
      scwin.ed_clntNo_hidVal = "";
      break;
    // 거래처
    case '6':
      scwin.ed_crn_hidVal = "";
      break;
    // 사업자번호
    default:
      break;
  }

  // if(strCd.text.trim()!="") f_openPopUp(flag,'T');
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_coCd event=OnKillFocus()>
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 계정코드From focus out
//-------------------------------------------------------------------------
scwin.udc_acctCdSt_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctCdSt event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctCdSt, ed_acctNmSt, '1');
};

//-------------------------------------------------------------------------
// 계정코드To focus out
//-------------------------------------------------------------------------
scwin.udc_acctCdEnd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctCdEnd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctCdEnd, ed_acctNmEnd, '2');
};

//-------------------------------------------------------------------------
// 부서코드From focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdSt_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctDeptCdSt event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, '3');
};

//-------------------------------------------------------------------------
// 부서코드To focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdEnd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctDeptCdEnd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctDeptCdEnd, ed_acctDeptNmEnd, '5');
};

//-------------------------------------------------------------------------
// 사업자번호 focus out
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  //  language=JavaScript for=ed_crn event=OnKillFocus()>
  scwin.f_checkPopEd(ed_crn, ed_crnNm, '6');
};

//-------------------------------------------------------------------------
// 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_clntNo event=OnKillFocus()>
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '4');
};

// @@ ====== 기타 ============================================================================== //

//-------------------------------------------------------------------------
// 집계테이블 데이터생성
//-------------------------------------------------------------------------
scwin.f_Process = async function (e) {
  console.log("=== f_Process (집계테이블 데이터생성)");
  //dataSetDebug(ds_process, true);

  var msg = ica_qryYm.getValue().trim().substring(0, 4) + "/" + ica_qryYm.getValue().trim().substring(ica_qryYm.getValue().trim().length - 2);
  console.log("  msg [" + msg + "]");
  let rtn = await $c.win.confirm($p, "매출년월 " + msg + "로 데이터를 집계합니다.\n\n" + "계속 진행하시려면 [예]버튼을 눌러주세요.\n\n" + "집계완료후 자동으로 조회됩니다.");
  if (rtn) {
    // 리턴 처리

    // <C> Col=qryYm                Ctrl=ed_qryYm          	Param=text        </C>
    // <C> Col=coCd   	    	   	 Ctrl=ed_coCd    		    Param=text        </C>   
    // <C> Col=coClsCd       	     Ctrl=txtCoClsCd    		Param=value       </C> 
    // <C> Col=regId       	     Ctrl=txtUserId    			Param=value       </C> 

    console.log("  ica_qryYm  [" + ica_qryYm.getValue() + "]");
    console.log("  ed_coCd    [" + ed_coCd.getValue() + "]");
    console.log("  txtCoClsCd [" + scwin.txtCoClsCd + "]");
    console.log("  txtUserId  [" + scwin.txtUserId + "]");
    ds_process.set("qryYm", ica_qryYm.getValue());
    ds_process.set("coCd", ed_coCd.getValue());
    ds_process.set("coClsCd", scwin.txtCoClsCd);
    ds_process.set("regId", scwin.txtUserId);
    var dcJSON = ds_process.getJSON();
    console.log("  *** ds_process : " + JSON.stringify(dcJSON));

    // tr_dataProcess.Action="/ac.fi.gnrlaccount.ledgmgnt.ProcessTotalSpecialAccountLedgerTabulationCMD.do";
    // tr_dataProcess.Post();

    $c.sbm.execute($p, sbm_dataProcess);
  }
};

//-------------------------------------------------------------------------
// 집계테이블 데이터생성 submitdone
//-------------------------------------------------------------------------
scwin.sbm_dataProcess_submitdone = function (e) {
  console.log("▷▷ sbm_dataProcess_submitdone (집계테이블 데이터생성)");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    // <language=JavaScript for=tr_dataProcess event=OnFail()>
    // $c.win.alert("조회가 실패 했습니다.=>");  // 테스트 용으로 보임
    // cfShowError(tr_dataProcess);   // KYU_TEST 사용금지 : 표준 메시지 사용
    return;
  }

  // language=JavaScript for=tr_dataProcess event=OnSuccess()>
  $c.win.alert($p, "Data집계가 완료되었습니다.");
  scwin.f_Retrieve();
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // if (lc_qryCond.getValue() == "1"){
  //     var objGridName = eval("gr_total1");
  // }else if(lc_qryCond.getValue() == "2"){
  //     var objGridName = eval("gr_total2");
  // }else if(lc_qryCond.getValue() == "3"){
  //     var objGridName = eval("gr_total3");
  // }

  var totCnt = ds_total.getRowCount();
  var sheetTitle = "사업부지사별계정잔액집계표조회";
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }

  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      mergeCell: "true"
      //   , "colMerge": "true"    // 병합
      ,
      "colMergeValue": "Y" // 병합 풀어내면 데이타 들어가있음
    };

    // cfGridToExcel(objGridName, "사업부지사별계정잔액집계표조회","사업부지사별계정잔액집계표조회.xls",8+16);

    // $c.data.downloadGridViewExcel(gridId, options, infoArr);

    if (lc_qryCond.getValue() == "1") {
      $c.data.downloadGridViewExcel($p, gr_total1, options);
    } else if (lc_qryCond.getValue() == "2") {
      $c.data.downloadGridViewExcel($p, gr_total2, options);
    } else if (lc_qryCond.getValue() == "3") {
      $c.data.downloadGridViewExcel($p, gr_total3, options);
    }
  }
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// 사업부조회여부 (주석처리)
//-------------------------------------------------------------------------
scwin.checkBizYn = function () {
  // 사업부조회여부 = 체크 이면 부서 초기화
  if (chk_bizDivYn.checked) {
    ed_acctDeptNmSt.setValue("");
    ed_acctDeptCdSt.setValue("");
    scwin.ed_acctDeptCdSt_hidVal = "";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',objType:'data',allowCharCode:'0-9',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd',mandatoryCode:'true',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_qryYm',style:'',objType:'data',ref:'data:ds_search.qryYm',title:'회계연월',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회조건',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_qryCond',style:'',submenuSize:'auto',ref:'data:ds_search.qryCond',objType:'data',title:'조회조건'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_type',ref:'data:ds_search.type',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',title:'조정전/조정반영'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정전'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정반영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',popupID:'retrieveCrnClntInfopopup',popupTitle:'',selectID:'retrieveCrnClntInfo',style:'',objType:'data',id:'udc_crn',btnId:'btn_crn',maxlengthCode:'10',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_crn_onclickEvent',code:'crn',refDataCollection:'ds_search','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCdSt',nameId:'ed_acctDeptNmSt',popupID:'retrieveAcctDeptCdInfo10popup',popupTitle:'',selectID:'retrieveAcctDeptCdInfo10',style:'',objType:'data',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',id:'udc_acctDeptCdSt',btnId:'btn_acctDeptCdSt','ev:onclickEvent':'scwin.udc_acctDeptCdSt_onclickEvent',code:'acctDeptCdSt',refDataCollection:'ds_search',validTitle:'부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCdSt_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'div_selectYn',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_bizDivYn',ref:'data:ds_search.bizDivYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'사업부조회여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업부조회여부'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'retrieveClntListpopup',popupTitle:'',selectID:'retrieveClntList',style:'',objType:'data',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',id:'udc_clntNo',btnId:'btn_clntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',refDataCollection:'ds_search',code:'clntNo',validTitle:'거래처코드','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCdSt',selectID:'retrieveAcctCdInfo',popupID:'retrieveAcctCdInfopopup',popupTitle:'',nameId:'ed_acctNmSt',style:'',objType:'data',allowCharCode:'0-9',maxlengthCode:'7',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',id:'udc_acctCdSt',btnId:'btn_acctCdSt','ev:onclickEvent':'scwin.udc_acctCdSt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCdSt_onblurCodeEvent',refDataCollection:'ds_search',code:'acctCdSt',validTitle:'계정From',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCdEnd',selectID:'retrieveAcctCdInfo',popupID:'retrieveAcctCdInfopopup',popupTitle:'',nameId:'ed_acctNmEnd',style:'',objType:'data',objTypeName:'data',maxlengthName:'50',allowCharCode:'0-9',maxlengthCode:'7',objTypeCode:'data',id:'udc_acctCdEnd',btnId:'btn_acctCdEnd','ev:onclickEvent':'scwin.udc_acctCdEnd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCdEnd_onblurCodeEvent',code:'acctCdEnd',validTitle:'계정To',refDataCollection:'ds_search',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'tb_acct',class:'row-gap-8',style:'display: flex'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업부지사별계정잔액집계표조회',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'집계일시',class:''}},{T:1,N:'xf:input',A:{style:';color:blue;',readOnly:'true',id:'ed_createDate1',class:' w150'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',templateYn:'N',style:'',id:'udc_grdMain',gridDownFn:'scwin.f_Excel',gridID:'gr_total1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{focusMode:'cell',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_total',style:'',autoFit:'allColumn',id:'gr_total1',visibleRowNum:'12',mergeCells:'byrestriccol',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'8',width:'750',inputType:'text',style:'',id:'column40',sortable:'false',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'7',width:'730',inputType:'text',style:'',id:'column53',sortable:'false',value:'잔액추이',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'390',inputType:'text',style:'',id:'column35',sortable:'false',value:'당월반영',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column58',value:'법인명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column54',value:'12개월이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'9개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column46',value:'6개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'5개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'4개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'3개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column11',value:'전월이월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column9',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column3',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column5',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{expression:'display(\'acctCd\')+display(\'acctNm\')+display(\'acctDeptCd\')+display(\'acctDeptNm\')',hidden:'true',width:'120',hiddenCol:'true',inputType:'expression',style:'',id:'mergeStd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'mergeStd',textAlign:'left',width:'100',colMerge:'true',inputType:'text',style:'',readOnly:'true',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'mergeStd',textAlign:'left',width:'70',colMerge:'true',inputType:'text',style:'',readOnly:'true',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'mergeStd',textAlign:'left',width:'70',colMerge:'true',inputType:'text',style:'',readOnly:'true',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'mergeStd',textAlign:'left',width:'70',colMerge:'true',inputType:'text',style:'',readOnly:'true',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',readOnly:'true',id:'mgntClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',style:'',readOnly:'true',id:'mgntClntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'130',inputType:'text',style:'',readOnly:'true',id:'busiNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev12Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev09Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev06Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev05Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev04Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev03Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prevAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'drSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'crSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'charge',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev12Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev09Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev06Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev05Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev04Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev03Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prevAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'drSum\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'crSum\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'charge\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'tb_crn',style:'display: visible;',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사업부지사별계정잔액집계표조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'집계일시',style:''}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_createDate2',readOnly:'true',style:';color:blue;'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Excel',gridUpYn:'N',grp:'grd_section2',id:'udc_topGrdBtn1',style:'',templateYn:'N',gridID:'gr_total2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{mergeCol:'acctDeptNm',focusMode:'cell',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_total',style:'',autoFit:'allColumn',id:'gr_total2',visibleRowNum:'12',mergeCells:'bycol',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'750',inputType:'text',style:'',id:'column40',sortable:'false',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'7',width:'730',inputType:'text',style:'',id:'column53',sortable:'false',value:'잔액추이',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'370',inputType:'text',style:'',id:'column35',sortable:'false',value:'당월반영',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'사업자번호',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column58',value:'법인명',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column54',value:'12개월이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'9개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column46',value:'6개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'5개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'4개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'3개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column11',value:'전월이월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column9',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column3',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column5',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'130',inputType:'text',style:'',readOnly:'true',id:'busiNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev12Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev09Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev06Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev05Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev04Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev03Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prevAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'drSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'crSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'charge',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev12Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev09Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev06Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev05Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev04Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev03Amt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prevAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'drSum\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'crSum\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'charge\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'tb_clnt',style:'display: flex;',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사업부지사별계정잔액집계표조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'집계일시',style:''}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_createDate3',readOnly:'true',style:';color:blue;'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Excel',gridUpYn:'N',grp:'grd_section3',id:'udc_topGrdBtn2',style:'',templateYn:'N',gridID:'gr_total3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{mergeCol:'mgntClntNo,mgntClntNm',focusMode:'cell',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_total',style:'',autoFit:'allColumn',id:'gr_total3',visibleRowNum:'12',mergeCells:'bycol',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column1',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',style:'',id:'column74',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',style:'',id:'column70',value:'법인명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',style:'',id:'column66',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column62',value:'12개월이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'9개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column54',value:'6개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'5개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column46',value:'4개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'3개월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'전월이월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column11',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column9',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',colMerge:'true',inputType:'text',style:';vertical-align:;',readOnly:'true',id:'mgntClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',colMerge:'true',inputType:'text',style:';vertical-align:middle;',readOnly:'true',id:'mgntClntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',hiddenCol:'true',inputType:'text',style:'',readOnly:'true',id:'crn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',hiddenCol:'true',inputType:'text',style:'',readOnly:'true',id:'busiNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',hiddenCol:'true',inputType:'text',style:'',readOnly:'true',id:'acctDeptNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev12Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev09Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev06Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev05Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev04Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prev03Amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'prevAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'drSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'crSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'charge',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev12Amt\')',textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev09Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev06Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev05Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev04Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prev03Amt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'prevAmt\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'drSum\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'crSum\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'charge\')',textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_data',style:'',type:'button','ev:onclick':'scwin.f_Process',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Data집계'}]}]}]}]}]}]}]}]}]})