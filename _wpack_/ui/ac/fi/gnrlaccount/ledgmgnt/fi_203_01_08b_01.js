/*amd /ui/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_08b_01.xml 81236 9db3ea40e175e5e871130febe4d3c4d85f80a2ecf79a1696ac5bedc826710693 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_closeYm',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'COL1'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'ebcId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryYm',name:'조회년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCdSt',name:'회계코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCdEnd',name:'회계코드To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdSt',name:'회계부서코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdEnd',name:'회계부서코드To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchAcctDeptCd',name:'조회회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'quantityOfRows',name:'조회ROW수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageNumber',name:'페이지번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total',saveRemovedData:'true','ev:ondataload':'scwin.ds_total_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prevAmt',name:'전월이월금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drSumFcrc',name:'차변외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crSumFcrc',name:'대변외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_total2',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_total2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'회계부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'회계부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNo',name:'관리거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNm',name:'관리거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'사업자등록번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'busiNm',name:'사업부명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'prevAmt',name:'전월이월금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'drSumFcrc',name:'차변외화금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'crSumFcrc',name:'대변외화금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'charge',name:'잔액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ramt',name:'잔액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomCd',name:'사업영역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomNm',name:'사업영역명'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_closeYm',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_closeYm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveCrcTotalAccountLedgerTabulationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_total","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveCrcTotalAccountLedgerTabulationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_total2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_203_01_08b_01
// 이름     : 총계정외화원장집계표
// 경로     : 재무회계/일반회계/원장관리/
// 사용계정 : 내부
// 비고     : 
//            1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역
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
scwin.quantityOfRows = "1000"; // 조회ROW수
scwin.pageNumber = "1"; // 페이지번호

scwin.ed_coCd_hidVal = ""; // 회사코드
scwin.ed_acctCdSt_hidVal = ""; // 계정From
scwin.ed_acctCdEnd_hidVal = ""; // 계정To
scwin.ed_acctDeptCdSt_hidVal = ""; // 회계부서코드From
scwin.ed_acctDeptCdEnd_hidVal = ""; // 회계부서코드To
scwin.ed_clntNo_hidVal = ""; // 거래처코드
scwin.ed_crn_hidVal = ""; // 사업자번호
scwin.ed_srchAcctDeptCd_hidVal = ""; // 지사
scwin.ed_bizDomCd_hidVal = ""; // 사업영역

scwin.txtCoClsCd = "";
scwin.txt_pageNumber = "";
scwin.txt_quantityOfRows = "";
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
  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [
  //  { grpCd : "ZZ006", compID : "lc_crcCd", opt:{"range":"1"} } // 통화코드 (정렬 - KRW 가 제일 위)
  // { grpCd: "ZZ006", compID: "gr_total:crcCd", useLocalCache : false }  // 그리드.통화코드
  {
    grpCd: "ZZ006",
    compID: "gr_total:crcCd",
    opt: {
      "range": "1"
    },
    useLocalCache: false
  } // 그리드.통화코드
  ];
  console.log(" codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function (e) {
  // 통화코드 분할
  let dltStr = "dlt_commonCodeZZ006"; // ZZ006 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeZZ006_1", true); // dlt_commonCodeFM017_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeZZ006_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "range == '1'"); // 새로운 데이터리스트에 필터("range" : "1") (정렬 - KRW 가 제일 위)

  lc_crcCd.setNodeSet("data:dlt_commonCodeZZ006_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // 재조회 버튼 숨김
    btn_fieldClear.hide();
    scwin.f_Header();
    scwin.f_Setting();
    scwin.f_setCompanyInfo();

    // paging 처리 관련
    // btn_addSearch.style.display = "none";
    // bSearch.style.display="none";
    // lAddRow.style.display="none";
    // bSearch2.style.display="none";

    btn_addSearch.hide(); // 추가조회 버튼
    ed_bSearch.hide(); // 데이터 추가 조회중입니다. 데이터 양에 따라 조회되는 시간은 달라 질 수 있습니다.
    ed_lAddRow.hide(); // 데이터 병합중입니다.
    ed_bSearch2.hide(); // 현재 데이터 조회중입니다. 잠시만 기다려 주세요.

    scwin.txt_pageNumber = scwin.pageNumber;
    scwin.txt_quantityOfRows = scwin.quantityOfRows;
    ed_srchAcctDeptCd.setValue("00000");
    ed_srchAcctDeptNm.setValue("전사");
    scwin.f_CloseYm();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {};

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  var thisYm = $c.date.getServerDateTime($p, "yyyyMM"); // 현재년월

  ica_qryYm.setValue(thisYm);
  // ed_acctCdSt.hidVal = ds_search.NameString(1,"acctCdSt");
  // ed_acctCdEnd.hidVal = ds_search.NameString(1,"acctCdEnd");
  // ed_acctDeptCdSt.hidVal = ds_search.NameString(1,"acctDeptCdSt");
  // ed_acctDeptCdEnd.hidVal = ds_search.NameString(1,"acctDeptCdEnd");
  // ed_clntNo.hidVal = ds_search.NameString(1,"clntNo")
  // ed_crn.hidVal = ds_search.NameString(1,"crn");

  scwin.ed_acctCdSt_hidVal = ds_search.get("acctCdSt"); // 회계시작일자
  scwin.ed_acctCdEnd_hidVal = ds_search.get("acctCdEnd"); // 회계종료일자
  scwin.ed_acctDeptCdSt_hidVal = ds_search.get("acctDeptCdSt"); // 회계부서코드From
  scwin.ed_acctDeptCdEnd_hidVal = ds_search.get("acctDeptCdEnd"); // 회계부서코드To
  scwin.ed_clntNo_hidVal = ds_search.get("clntNo"); // 거래처코드
  scwin.ed_crn_hidVal = ds_search.get("crn"); // 사업자번호
  /*
      <C> Col=coClsCd       	     Ctrl=txtCoClsCd    		Param=value       </C>
  	<C> Col=pageNumber       	 Ctrl=txt_pageNumber    	Param=value       </C>
  	<C> Col=quantityOfRows       Ctrl=txt_quantityOfRows    Param=value       </C>
  */
  ica_qryYm.focus();

  // KYU_TEST
  // ds_total.SortExpr = "+acctCd+acctDeptCd+mgntClntNo" ;
  // ds_total.Sort();

  // ds_total.RowPosition=1;
  ds_total.setRowPosition(0);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }

  // ed_coCd.text = vLoginCoCd;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');

  // KYU_ORDER
  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  // if('T' == scwin.vAdminYn ||  !scwin.isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  // 	$c.gus.cfEnableObjects([ed_coCd,ed_coNm,btn_coCd ]);    
  // }else {
  //    	$c.gus.cfDisableObjects([ed_coCd,ed_coNm,btn_coCd  ]);   
  // }  

  console.log("▶ vLoginCoCd [" + scwin.vLoginCoCd + "]   vLoginCoClsCd [" + scwin.vLoginCoClsCd + "]");
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.f_CloseYm = async function () {
  console.log("=== getMaxCloseYm (전월 마감여부)");

  // var ebcId = "ManagementProfitAndLossEBC";
  // var queryId = "retrieveManagementProfitAndLossCloseYm";
  //     ds_closeYm.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd="+ebcId +"&queryId="+queryId ;

  // ds_closeYm.Reset();

  const strParam = {
    sysCd: "ManagementProfitAndLossEBC" // 시스템코드
    ,
    queryId: "retrieveManagementProfitAndLossCloseYm" // 쿼리ID
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  await $c.sbm.execute($p, sbm_closeYm);
};

//-------------------------------------------------------------------------
// 전월 마감여부 submitdone
//-------------------------------------------------------------------------
scwin.sbm_closeYm_submitdone = function (e) {
  console.log("▷ sbm_closeYm_submitdone (전월 마감여부)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_closeYm.setJSON(e.responseJSON.GAUCE);
  }
  var dc = ds_closeYm.getAllArray();
  console.log("  *** ds_closeYm (" + ds_closeYm.getTotalRow() + ") : " + JSON.stringify(dc));
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = function (str, msg) {
  console.log("=== f_HiddenCheck ( str:" + str.getValue() + "  msg:" + msg + ")");
  if (str.getValue().trim() == "") return true;
  // if (str.getValue().trim() != str.hidVal){
  if (msg == "계정From" && str.getValue().trim() != scwin.ed_acctCdSt_hidVal || msg == "계정To" && str.getValue().trim() != scwin.ed_acctCdEnd_hidVal || msg == "귀속부서From" && str.getValue().trim() != scwin.ed_acctDeptCdSt_hidVal || msg == "귀속부서To" && str.getValue().trim() != scwin.ed_acctDeptCdEnd_hidVal) {
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
// 조회(총계정외화원장집계표)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  console.log("====== f_Retrieve ==================");

  // if (!$c.gus.cfValidate([ed_coCd,ica_qryYm,ed_acctCdSt,ed_acctCdEnd,ed_acctDeptCdSt,ed_acctDeptCdEnd,ed_crn])) return false;
  let rtn = await $c.gus.cfValidate($p, [ed_coCd, ica_qryYm, ed_acctCdSt, ed_acctCdEnd, ed_acctDeptCdSt, ed_acctDeptCdEnd, ed_crn]);
  if (!rtn) return false;
  if (!scwin.f_HiddenCheck(ed_acctCdSt, "계정From")) return false;
  if (!scwin.f_HiddenCheck(ed_acctCdEnd, "계정To")) return false;
  if (!scwin.f_HiddenCheck(ed_acctDeptCdSt, "귀속부서From")) return false;
  if (!scwin.f_HiddenCheck(ed_acctDeptCdEnd, "귀속부서To")) return false;
  if (!scwin.f_BetweenCheck(ed_acctCdSt.getValue().trim(), ed_acctCdEnd.getValue().trim())) {
    // cfAlertMsg(MSG_CM_ERR_057,Array("계정코드To","계정코드From"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "계정코드To", "계정코드From"));
    ed_acctCdSt.Focus();
    return false;
  }

  // if(bSearch2.style.display=="none"){  // 현재 데이터 조회중입니다. 잠시만 기다려 주세요.
  //     bSearch2.style.display="";
  // }
  if (ed_bSearch2.getStyle("visibility") == "hidden") {
    // 현재 데이터 조회중입니다. 잠시만 기다려 주세요.
    ed_bSearch2.show("");
  }
  scwin.txt_pageNumber = scwin.pageNumber;
  scwin.txt_quantityOfRows = scwin.quantityOfRows;

  // 전역변수값 ds 에 반영
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  ds_search.set("pageNumber", scwin.txt_pageNumber);
  ds_search.set("quantityOfRows", scwin.txt_quantityOfRows);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));

  // ds_search.UseChangeInfo = false;  // 

  // // tr_search.Action="/ac.fi.gnrlaccount.ledgmgnt.RetrieveCrcTotalAccountLedgerTabulationCMD.do";
  // tr_search.post();

  // KYU_NEW : 조회시 재클릭 안되도록 처리 (비활성화) - 무한 루프 발생하므로 제외
  // btn_retrieve.setDisabled(true);

  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(총계정외화원장집계표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  /*
   language=JavaScript for=ds_total event=OnLoadCompleted(rowCnt)>
  	var temp = ds_total.RealCount(1,ds_total.CountRow);
  	
  	cfShowTotalRows(totalRows, temp);		
  	cfEnableObjects([btn_addSearch]);
   */
  //var temp = ds_total.RealCount(1,ds_total.CountRow);  // ?
  var temp = ds_total.getRowCount();
  ed_totalRows.setValue(temp);
  console.log("  메인조회 건수 : " + temp);

  // KYU_NEW
  if (temp == 0) {
    // KYU_NEW : 조회시 재클릭 안되도록 처리 (활성화) - 무한 루프 발생하므로 제외
    // btn_retrieve.setDisabled(false);
  }
  // KYU_NEW : 재조회 처리가 안되어있어 추가
  else {
    // KYU_TEST
    //조회 완료후 추가조회 - 페이지 번호가 제 역할을 못함. 페이지를 넘겨도 계속 같은 수로 가져옴.
    // scwin.f_Retrieve2();
  }

  // cfShowTotalRows(totalRows, temp);
  ed_totalRows.setValue(temp);
  $c.gus.cfEnableObjects($p, [btn_addSearch]);
  gr_total.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 조회(총계정외화원장집계표) 2
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = function (e) {
  console.log("====== f_Retrieve2 ==================");

  //PAGE 계산 후 다시 조회 해서 ds_total에 데이터를 계속 add 한다.
  // var pagenum = parseInt(txt_pageNumber.value)+1;
  // var quantityOfRows2 = parseInt(txt_quantityOfRows.value);

  var pagenum = parseInt(scwin.txt_pageNumber) + 1;
  var quantityOfRows2 = String(pagenum);
  scwin.txt_pageNumber = String(pagenum);
  scwin.txt_quantityOfRows = String(quantityOfRows2);

  // <C> Col=pageNumber       	 Ctrl=txt_pageNumber    	Param=value       </C>
  // <C> Col=quantityOfRows       Ctrl=txt_quantityOfRows    Param=value       </C>

  // 전역변수값 ds 에 반영
  // ds_search.set("coClsCd"       , scwin.txtCoClsCd);
  ds_search.set("pageNumber", scwin.txt_pageNumber);
  ds_search.set("quantityOfRows", scwin.txt_quantityOfRows);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));

  // if(bSearch.style.display=="none"){
  // 	bSearch.style.display="";
  // }

  if (ed_bSearch.getStyle("visibility") == "hidden") {
    // 데이터 추가 조회중입니다. 데이터 양에 따라 조회되는 시간은 달라 질 수 있습니다.
    ed_bSearch.show("");
  }

  // ds_search.UseChangeInfo = false;  //

  // tr_search2.Action="/ac.fi.gnrlaccount.ledgmgnt.RetrieveCrcTotalAccountLedgerTabulationCMD.do";
  // tr_search2.post();

  $c.sbm.execute($p, sbm_search2);
};

//-------------------------------------------------------------------------
// 조회(총계정외화원장집계표) 2 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search2_submitdone = function (e) {
  console.log("▷ sbm_search2_submitdone2");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var rowCnt = ds_total2.getTotalRow();
  console.log("    =-=- rowCnt (ds_total2) : " + rowCnt);

  // 추가조회
  /*
   language=JavaScript for=ds_total2 event=OnLoadCompleted(rowCnt)>
  	lAddRow.style.display="";
  	if ( rowCnt > 0 ) {
  		ds_total.ImportData(ds_total2.ExportData(1,rowCnt,false));
  		ds_total.ResetStatus();
  	}
  	lAddRow.style.display="none";
  	
      cfShowTotalRows(totalRows, ds_total.CountRow);  
      ds_total2.ClearAll();  
      
      if( rowCnt == 0){
          cfDisableObjects([btn_addSearch]);
          bSearch.style.display="none";
      }else{
  	   	//recursive 조회
  	   	f_Retrieve2();
  	   	bSearch.style.display="";
      	cfDisableObjects([btn_addSearch]);
      }
  */
  ed_lAddRow.show(""); // 데이터 병합중입니다...

  if (rowCnt > 0) {
    // ds_total.ImportData(ds_total2.ExportData(1,rowCnt,false));
    var dcJSON = ds_total2.getAllJSON();
    ds_total.setJSON(dcJSON, true); // append
    // ds_total.ResetStatus();
    ds_total.modifyAllStatus("R");
  }
  ed_lAddRow.hide(); // 데이터 병합중입니다...

  ed_totalRows.setValue(ds_total.getRowCount());
  console.log(" 누적건수 : " + ds_total.getRowCount());
  ds_total2.removeAll();
  if (rowCnt == 0) {
    $c.gus.cfDisableObjects($p, [btn_addSearch]);
    // bSearch.style.display="none";
    ed_bSearch.hide(); // 데이터 추가 조회중입니다. 데이터 양에 따라 조회되는 시간은 달라 질 수 있습니다.

    // KYU_NEW : 조회시 재클릭 안되도록 처리 (활성화) - 무한 루프 발생하므로 제외
    // btn_retrieve.setDisabled(false);
  } else {
    //recursive 조회
    console.log("-- recursive 조회");
    scwin.f_Retrieve2();
    // bSearch.style.display="";
    ed_bSearch.show(""); // 데이터 추가 조회중입니다. 데이터 양에 따라 조회되는 시간은 달라 질 수 있습니다.
    $c.gus.cfDisableObjects($p, [btn_addSearch]);
  }
  $c.gus.cfDisableObjects($p, [btn_addSearch]);
  gr_total.setFocusedCell(0, 0);
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
//  재조회 로딩 ds_total2_ondataload
//-------------------------------------------------------------------------
scwin.ds_total2_ondataload = function () {
  console.log("----- ds_total2_ondataload (재조회 로딩)...");
  // language=JavaScript for=ds_total2 event=OnLoadProcess(rowCnt)>
  rowCnt = ds_total2.getTotalRow();
  if (rowCnt > 0) {
    // 병합중 메세지 
    // lAddRow.style.display = "";
    ed_lAddRow.show(""); // 데이터 병합중입니다.
    // 조회 메시지
    // bSearch.style.display = "none";
    ed_bSearch.hide(); // 데이터 추가 조회중입니다. 데이터 양에 따라 조회되는 시간은 달라 질 수 있습니다.
  }
};

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
// 회사코드 돋보기 팝업
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
// 사업자번호,부서,거래처 초기화
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  // cfInitObjects([ed_crn,txt_busiNm]); // 사업자번호
  // cfInitObjects([ed_acctDeptCdSt,txt_acctDeptNmSt ,ed_acctDeptCdEnd , txt_acctDeptNmEnd]); //  부서
  // cfInitObjects([ed_clntNo,txt_clntNm]); // 거래처 코드

  $c.gus.cfInitObjects($p, [ed_crn, ed_crnNm]); // 사업자번호
  $c.gus.cfInitObjects($p, [ed_acctDeptCdSt, ed_acctDeptNmSt, ed_acctDeptCdEnd, ed_acctDeptNmEnd]); //  부서
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); // 거래처 코드
};

//-------------------------------------------------------------------------
// 지사 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};

//-------------------------------------------------------------------------
// 사업영역 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_BizDomCd_onclickEvent = function (e) {
  scwin.f_openPopUp('8', 'F');
};

//-------------------------------------------------------------------------
// 사업자번호 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('6', 'F');
};

//-------------------------------------------------------------------------
// 부서From 돋보기 팝업
//-------------------------------------------------------------------------
scwin.ed_acctDeptCdSt_onclickEvent = function (e) {
  scwin.acctPopUp('3', 'ed_acctDeptCdSt');
};

//-------------------------------------------------------------------------
// 부서To 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdEnd_onclickEvent = function (e) {
  // <a href="javascript:acctPopUp('5','ed_acctDeptCdEnd')" border=0><img src="/common/images/search.gif"></a>
  scwin.acctPopUp('5', 'ed_acctDeptCdEnd');
};

//-------------------------------------------------------------------------
// 거래처코드 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

//-------------------------------------------------------------------------
// 계정From 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_acctCdSt_onclickEvent = function (e) {
  // <a href="javascript:acctPopUp('1','ed_acctCdSt')" border=0><img src="/common/images/search.gif"></a>&nbsp;~&nbsp;
  scwin.acctPopUp('1', 'ed_acctCdSt');
};

//-------------------------------------------------------------------------
// 계정To 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_acctCdEnd_onclickEvent = function (e) {
  // <a href="javascript:acctPopUp('2','ed_acctCdEnd')" border=0><img src="/common/images/search.gif"></a>&nbsp;&nbsp;
  scwin.acctPopUp('2', 'ed_acctCdEnd');
};

//-------------------------------------------------------------------------
// function name : acctPopUp
// function desc : 부서, 계정 between 팝업용 연동
// function Parameter : null
//-------------------------------------------------------------------------
scwin.acctPopUp = function (flag, check) {
  console.log("=== acctPopUp (부서, 계정 between 팝업용 연동) ( flag[ " + flag + " ]  check[ " + check + " ] )");

  // F 로 오픈시킴
  scwin.f_openPopUp(flag, 'F');
  if (check == "ed_acctDeptCdSt") {
    if (ed_acctDeptCdEnd.getValue() == "") {
      ed_acctDeptCdEnd.setValue(ed_acctDeptCdSt.getValue());
      scwin.f_checkPopEd(ed_acctDeptCdEnd, ed_acctDeptNmEnd, '5');
    }
  }
  if (check == "ed_acctDeptCdEnd") {
    if (ed_acctDeptCdSt.getValue() == "") {
      ed_acctDeptCdSt.setValue(ed_acctDeptCdEnd.getValue());
      scwin.f_checkPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, '3');
    }
  }
  if (check == "ed_acctCdSt") {
    if (ed_acctCdEnd.getValue() == "") {
      ed_acctCdEnd.setValue(ed_acctCdSt.getValue());
      scwin.f_checkPopEd(ed_acctCdEnd, ed_acctNmEnd, '2');
    }
  }
  if (check == "ed_acctCdEnd") {
    if (ed_acctCdSt.getValue() == "") {
      ed_acctCdSt.setValue(ed_acctCdEnd.getValue());
      scwin.f_checkPopEd(ed_acctCdSt, ed_acctNmSt, '1');
    }
  }
};

//-------------------------------------------------------------------------
// 팝업 @@
//  1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ] 1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역)");
  var qryYear = ica_qryYm.getValue().trim().substring(0, 4);
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
      // 부서From
      // var param = ","+ed_coCd.text+","+txtCoClsCd.value+",0";
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      console.log("  부서From popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo10',ed_acctDeptCdSt.text.trim(),txt_acctDeptNmSt.value,check,null,null,null,null,param,null,null,null,null,null,null,null,null,null,qryYear);
      udc_acctDeptCdSt.cfCommonPopUp(scwin.udc_acctDeptCdSt_callBackFunc1, ed_acctDeptCdSt.getValue().trim(), ed_acctDeptNmSt.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case '5':
      // 부서To
      // var param = ","+ed_coCd.text+","+txtCoClsCd.value+",0";
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      console.log("  부서To popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo10',ed_acctDeptCdEnd.text.trim(),txt_acctDeptNmEnd.value,check,null,null,null,null,param,null,null,null,null,null,null,null,null,null,qryYear);
      udc_acctDeptCdEnd.cfCommonPopUp(scwin.udc_acctDeptCdEnd_callBackFunc2, ed_acctDeptCdEnd.getValue().trim(), ed_acctDeptNmEnd.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
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
    case '7':
      // 지사 - 쿼리는 동일하나 파라미터가 다름
      // var selectID ='retrieveAcctDeptCdInfo';
      var param = "";
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사인 경우에만  회사코드 check
        selectID = 'retrieveAcctDeptCdInfo';
        udc_srchAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo");
        param = "," + ed_coCd.getValue();
        console.log("  지사 popup (자회사)  param [" + param + "]");

        // rtnList = cfCommonPopUp(selectID,ed_crn.text.trim(),txt_busiNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc1, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        udc_srchAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo");
        // rtnList = cfCommonPopUp(selectID,ed_crn.text.trim(),txt_busiNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc2, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '8':
      // 사업영역 - 쿼리는 동일하나 파라미터가 다름
      // var selectID ='retrieveBizDomCdInfo';
      var param = '';
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사인 경우에만  회사코드 check
        selectID = 'retrieveBizDomCdInfo';
        udc_bizDomCd.setSelectId("retrieveBizDomCdInfo");
        param = "," + ed_coCd.text;
        console.log("  사업영역 popup (자회사)  param [" + param + "]");

        // rtnList = cfCommonPopUp(selectID,ed_BizDomCd.text.trim(),txt_BizDomNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_bizDomCd.cfCommonPopUp(scwin.udc_bizDomCd_callBackFunc1, ed_bizDomCd.getValue().trim(), ed_bizDomNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        udc_bizDomCd.setSelectId("retrieveBizDomCdInfo");
        // rtnList = cfCommonPopUp(selectID,ed_BizDomCd.text.trim(),txt_BizDomNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_bizDomCd.cfCommonPopUp(scwin.udc_bizDomCd_callBackFunc2, ed_bizDomCd.getValue().trim(), ed_bizDomNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//  1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역

//-------------------------------------------------------------------------
// 계정From조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_acctCdSt_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_acctCdSt_callBackFunc1 (계정From조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctCdSt, ed_acctNmSt, rtnList, '1');

  // if(ed_acctCdEnd.text == ""){
  // 	ed_acctCdEnd.text = ed_acctCdSt.text;
  // 	f_checkPopEd(ed_acctCdEnd,txt_acctCdEndNm,'2');
  // }

  // 계정To 채우기
  if (ed_acctCdEnd.getValue() == "") {
    console.log(" ed_acctCdEnd 가 비었음...");
    ed_acctCdEnd.setValue(ed_acctCdSt.getValue());
    scwin.f_checkPopEd(ed_acctCdEnd, ed_acctNmEnd, '2');
  }
};

//-------------------------------------------------------------------------
// 계정To조회 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_acctCdEnd_callBackFunc2 = function (rtnList) {
  console.log("▲ udc_acctCdEnd_callBackFunc2 (계정To조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctCdEnd, ed_acctNmEnd, rtnList, '2');

  // if(ed_acctCdSt.text == ""){
  // 	ed_acctCdSt.text = ed_acctCdEnd.text;
  //     f_checkPopEd(ed_acctCdSt,txt_acctCdStNm,'1');
  // }

  // 계정From 채우기
  if (ed_acctCdSt.getValue() == "") {
    console.log(" ed_acctCdSt 가 비었음...");
    ed_acctCdSt.setValue(ed_acctCdEnd.getValue());
    scwin.f_checkPopEd(ed_acctCdSt, ed_acctNmSt, '1');
  }
};

//-------------------------------------------------------------------------
// 부서From조회 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdSt_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_acctDeptCdSt_callBackFunc1 (부서From조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, rtnList, '3');

  // 부서To 채우기
  if (ed_acctDeptCdEnd.getValue() == "") {
    ed_acctDeptCdEnd.setValue(ed_acctDeptCdSt.getValue());
    scwin.f_checkPopEd(ed_acctDeptCdEnd, ed_acctDeptNmEnd, '5');
  }
};

//-------------------------------------------------------------------------
// 부서To조회 callBackFunc (5)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdEnd_callBackFunc2 = function (rtnList) {
  console.log("▲ udc_acctDeptCdEnd_callBackFunc2 (부서To조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctDeptCdEnd, ed_acctDeptNmEnd, rtnList, '5');

  // 부서From 채우기
  if (ed_acctDeptCdSt.getValue() == "") {
    ed_acctDeptCdSt.setValue(ed_acctDeptCdEnd.getValue());
    scwin.f_checkPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, '3');
  }
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
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      scwin.ed_crn_hidVal = ""; // 사업자번호
      return;
    }
  }
  scwin.f_resultPopEd(ed_crn, ed_crnNm, rtnList, '6');
};

//-------------------------------------------------------------------------
// udc_srchAcctDeptCd_callBackFunc1 (지사 팝업 callBackFunc 1) (7)
//-------------------------------------------------------------------------
scwin.udc_srchAcctDeptCd_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_srchAcctDeptCd_callBackFunc1 (지사 팝업 callBackFunc 1)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.afterSrchAcctDeptCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// udc_srchAcctDeptCd_callBackFunc2 (지사 팝업 callBackFunc 2) (7)
//-------------------------------------------------------------------------
scwin.udc_srchAcctDeptCd_callBackFunc2 = function (rtnList) {
  console.log("▲ udc_srchAcctDeptCd_callBackFunc2 (지사 팝업 callBackFunc 2)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.afterSrchAcctDeptCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// afterSrchAcctDeptCdPopup (지사 팝업 통합처리)
//-------------------------------------------------------------------------
scwin.afterSrchAcctDeptCdPopup = function (rtnList) {
  console.log("▲▲ afterSrchAcctDeptCdPopup (지사 팝업 통합처리)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      scwin.ed_srchAcctDeptCd_hidVal = ""; // 지사
      return;
    }
  }
  scwin.f_resultPopEd(ed_srchAcctDeptCd, ed_srchAcctDeptNm, rtnList, '7');
};

//-------------------------------------------------------------------------
// udc_bizDomCd_callBackFunc1 (사업영역 팝업 callBackFunc 1) (8)
//-------------------------------------------------------------------------
scwin.udc_bizDomCd_callBackFunc1 = function (rtnList) {
  console.log("▲ udc_bizDomCd_callBackFunc1 (사업영역 팝업 callBackFunc 1)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.afterBizDomCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// udc_bizDomCd_callBackFunc2 (지사 팝업 callBackFunc 2) (8)
//-------------------------------------------------------------------------
scwin.udc_bizDomCd_callBackFunc2 = function (rtnList) {
  console.log("▲ udc_bizDomCd_callBackFunc2 (사업영역 팝업 callBackFunc 2)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.afterBizDomCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// afterBizDomCdPopup (사업영역 팝업 통합처리)
//-------------------------------------------------------------------------
scwin.afterBizDomCdPopup = function (rtnList) {
  console.log("▲▲ afterBizDomCdPopup (사업영역 팝업 통합처리)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      scwin.ed_bizDomCd_hidVal = ""; // 사업영역
      return;
    }
  }
  scwin.f_resultPopEd(ed_bizDomCd, ed_bizDomNm, rtnList, '8');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
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
        case '5':
          scwin.ed_acctDeptCdEnd_hidVal = "";
          break;
        // 부서To
        case '4':
          scwin.ed_clntNo_hidVal = "";
          break;
        // 거래처
        case '6':
          scwin.ed_crn_hidVal = "";
          break;
        // 사업자번호
        case '7':
          scwin.ed_srchAcctDeptCd_hidVal = "";
          break;
        // 지사
        case '8':
          scwin.ed_bizDomCd_hidVal = "";
          break;
        // 사업영역
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
      case '5':
        scwin.ed_acctDeptCdEnd_hidVal = rtnList[0];
        break;
      // 부서To
      case '4':
        scwin.ed_clntNo_hidVal = rtnList[0];
        break;
      // 거래처
      case '6':
        scwin.ed_crn_hidVal = rtnList[0];
        break;
      // 사업자번호
      case '7':
        scwin.ed_srchAcctDeptCd_hidVal = rtnList[0];
        break;
      // 지사
      case '8':
        scwin.ed_bizDomCd_hidVal = rtnList[0];
        break;
      // 사업영역
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
      case '5':
        scwin.ed_acctDeptCdEnd_hidVal = "";
        break;
      // 부서To
      case '4':
        scwin.ed_clntNo_hidVal = "";
        break;
      // 거래처
      case '6':
        scwin.ed_crn_hidVal = "";
        break;
      // 사업자번호
      case '7':
        scwin.ed_srchAcctDeptCd_hidVal = "";
        break;
      // 지사
      case '8':
        scwin.ed_bizDomCd_hidVal = "";
        break;
      // 사업영역
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//  1:계정From,2:계정To,3:부서From,4:거래처,5:부서To,6:사업자번호,7:지사,8:사업영역
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
  flag == '5' && strCd.getValue().trim() == scwin.ed_acctDeptCdEnd_hidVal ||
  // 부서To
  flag == '4' && strCd.getValue().trim() == scwin.ed_clntNo_hidVal ||
  // 거래처
  flag == '6' && strCd.getValue().trim() == scwin.ed_crn_hidVal ||
  // 사업자번호
  flag == '7' && strCd.getValue().trim() == scwin.ed_srchAcctDeptCd_hidVal ||
  // 지사
  flag == '8' && strCd.getValue().trim() == scwin.ed_bizDomCd_hidVal // 사업영역
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";
  strNm.setValue("");

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
    case '5':
      scwin.ed_acctDeptCdEnd_hidVal = "";
      break;
    // 부서To
    case '4':
      scwin.ed_clntNo_hidVal = "";
      break;
    // 거래처
    case '6':
      scwin.ed_crn_hidVal = "";
      break;
    // 사업자번호
    case '7':
      scwin.ed_srchAcctDeptCd_hidVal = "";
      break;
    // 지사
    case '8':
      scwin.ed_bizDomCd_hidVal = "";
      break;
    // 사업영역
    default:
      break;
  }

  // if(strCd.text.trim()!="") f_openPopUp(flag,'T');
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');

  // // 팝업 로딩
  // switch (flag){
  //     case '1'  : scwin.f_openPopUp(flag,'T'); break;  // 계정From
  //     case '2'  : scwin.f_openPopUp(flag,'T'); break;  // 계정To
  //     case '3'  : scwin.f_openPopUp(flag,'T'); break;  // 부서From
  //     case '5'  : scwin.f_openPopUp(flag,'T'); break;  // 부서To
  //     case '4'  : scwin.f_openPopUp(flag,'T'); break;  // 거래처
  //     case '6'  : scwin.f_openPopUp(flag,'T'); break;  // 사업자번호
  //     case '7'  : scwin.f_openPopUp(flag,'T'); break;  // 지사
  //     case '8'  : scwin.f_openPopUp(flag,'T'); break;  // 사업영역
  //     default   : break;
  // }
};

// @@ ====== 이벤트 ============================================================================ //

// 초기화 버튼 : f_SearchClear  호출은 없음
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

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

  // 계정코드To 동시 반영
  if (ed_acctCdSt.getValue() != "") {
    if (ed_acctCdEnd.getValue() == "") {
      ed_acctCdEnd.setValue(ed_acctCdSt.getValue());
      scwin.f_checkPopEd(ed_acctCdEnd, ed_acctNmEnd, '2');
    }
  } else {
    ed_acctNmSt.setValue("");
  }
};

//-------------------------------------------------------------------------
// 계정코드To focus out
//-------------------------------------------------------------------------
scwin.udc_acctCdEnd_onblurCodeEvent = function (e) {
  // console.log("----- udc_acctCdEnd_onblurCodeEvent");

  // language=JavaScript for=ed_acctCdEnd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctCdEnd, ed_acctNmEnd, '2');

  // 계정코드From 동시 반영
  if (ed_acctCdEnd.getValue() != "") {
    if (ed_acctCdSt.getValue() == "") {
      ed_acctCdSt.setValue(ed_acctCdEnd.getValue());
      scwin.f_checkPopEd(ed_acctCdSt, ed_acctNmSt, '1');
    }
  } else {
    ed_acctNmEnd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 부서코드From focus out
//-------------------------------------------------------------------------
scwin.ed_acctDeptCdSt_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctDeptCdSt event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, '3');

  // 부서코드To 동시 반영
  if (ed_acctDeptCdSt.getValue() != "") {
    if (ed_acctDeptCdEnd.getValue() == "") {
      ed_acctDeptCdEnd.setValue(ed_acctDeptCdSt.getValue());
      scwin.f_checkPopEd(ed_acctDeptCdEnd, ed_acctDeptNmEnd, '5');
    }
  } else {
    ed_acctDeptNmSt.setValue("");
  }
};

//-------------------------------------------------------------------------
// 부서코드To focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdEnd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctDeptCdEnd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctDeptCdEnd, ed_acctDeptNmEnd, '5');

  // 부서코드From 동시 반영
  if (ed_acctDeptCdEnd.getValue() != "") {
    if (ed_acctDeptCdSt.getValue() == "") {
      ed_acctDeptCdSt.setValue(ed_acctDeptCdEnd.getValue());
      scwin.f_checkPopEd(ed_acctDeptCdSt, ed_acctDeptNmSt, '3');
    }
  } else {
    ed_acctDeptNmEnd.setValue("");
  }
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

//-------------------------------------------------------------------------
// 지사 focus out
//-------------------------------------------------------------------------
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  //  language=JavaScript for=ed_srchAcctDeptCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_srchAcctDeptCd, ed_srchAcctDeptNm, '7');
};

//-------------------------------------------------------------------------
// 사업영역 focus out
//-------------------------------------------------------------------------
// language=JavaScript for=ed_BizDomCd event=OnKillFocus()>
scwin.udc_bizDomCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_bizDomCd, ed_bizDomNm, '8');
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  var totCnt = ds_total.getRowCount();
  var sheetTitle = "총계정원장집계표(외화)";
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }

  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리
    // $c.gus.cfGridToExcel(objGridName, "총계정원장집계표(외화)","총계정원장집계표(외화).xls",8+16);

    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true // 줄바꿈
    };
    $c.data.downloadGridViewExcel($p, gr_total, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',style:'',id:'udc_coCd',nameId:'ed_coNm',codeId:'ed_coCd',btnId:'btn_coCd',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',selectID:'retrieveDongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd',name:'coNm',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_qryYm',style:'',ref:'data:ds_search.qryYm',title:'회계년월',mandatory:'true',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfopopup',style:'',selectID:'retrieveAcctDeptCdInfo',btnId:'btn_srchAcctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',nameId:'ed_srchAcctDeptNm',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',refDataCollection:'ds_search',code:'srchAcctDeptCd',validTitle:'지사',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBizDomCdInfopopup',style:'',selectID:'retrieveBizDomCdInfo',btnId:'btn_bizDomCd',codeId:'ed_bizDomCd',id:'udc_bizDomCd',nameId:'ed_bizDomNm',maxlengthCode:'3',allowCharCode:'0-9',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_BizDomCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bizDomCd_onblurCodeEvent',refDataCollection:'ds_search',code:'bizDomCd',validTitle:'사업영역',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_crcCd_onchange',id:'lc_crcCd',ref:'data:ds_search.crcCd',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',title:'통화코드'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:''},E:[{T:1,N:'xf:label',A:{ref:''}},{T:1,N:'xf:value',A:{ref:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveCrnInfopopup',style:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',id:'udc_crn',btnId:'btn_crn',nameId:'ed_crnNm',maxlengthCode:'10',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_crn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',refDataCollection:'ds_search',code:'crn',validTitle:'사업자번호',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo10popup1',style:'',selectID:'retrieveAcctDeptCdInfo10',btnId:'btn_acctDeptCdSt',codeId:'ed_acctDeptCdSt',id:'udc_acctDeptCdSt',nameId:'ed_acctDeptNmSt',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.ed_acctDeptCdSt_onclickEvent','ev:onblurCodeEvent':'scwin.ed_acctDeptCdSt_onblurCodeEvent',refDataCollection:'ds_search',code:'acctDeptCdSt',validTitle:'부서From',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo10popup2',style:'',selectID:'retrieveAcctDeptCdInfo10',codeId:'ed_acctDeptCdEnd',id:'udc_acctDeptCdEnd',nameId:'ed_acctDeptNmEnd',btnId:'btn_acctDeptCdEnd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_acctDeptCdEnd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdEnd_onblurCodeEvent',code:'acctDeptCdEnd',refDataCollection:'ds_search',validTitle:'부서To',skipOnBlurCodeValueEmpty:'N'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처코드 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntList2popup',style:'',selectID:'retrieveClntList2',id:'udc_clntNo',nameId:'ed_clntNm',codeId:'ed_clntNo',btnId:'btn_clntNo',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',refDataCollection:'ds_search',code:'clntNo',validTitle:'거래처코드',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctCdInfopopup1',style:'',selectID:'retrieveAcctCdInfo',id:'udc_acctCdSt',codeId:'ed_acctCdSt',nameId:'ed_acctNmSt',btnId:'btn_acctCdSt',maxlengthCode:'7',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_acctCdSt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCdSt_onblurCodeEvent',refDataCollection:'ds_search',code:'acctCdSt',validTitle:'계정From',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctCdInfopopup2',style:'',selectID:'retrieveAcctCdInfo',codeId:'ed_acctCdEnd',id:'udc_acctCdEnd',nameId:'ed_acctNmEnd',btnId:'btn_acctCdEnd',allowCharCode:'0-9',maxlengthCode:'7',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_acctCdEnd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCdEnd_onblurCodeEvent',refDataCollection:'ds_search',code:'acctCdEnd',validTitle:'계정To',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'총계정원장집계표',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'ed_lAddRow',label:'데이터 병합중입니다...',style:''}},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'ed_bSearch',label:'데이터 추가 조회중입니다. 데이터 양에 따라 조회되는 시간은 달라 질 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{style:'',id:'ed_bSearch2',label:'현재 데이터 조회중입니다. 잠시만 기다려 주세요.',class:'txt-red'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_addSearch',type:'button',class:'btn','ev:ondblclick':'scwin.f_Retrieve2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가조회'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_total',gridDownFn:'scwin.f_Excel',gridUpYn:'N',id:'udc_gridMain',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_total',id:'gr_total',style:'',visibleRowNum:'14',visibleRowNumFix:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계정명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'부서명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'사업영역명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'거래처명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'법인명',width:'180'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column61',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'전월이월금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'차변외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'대변외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'잔액(외화)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'150',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'select',id:'crcCd',delimiter:' ',dataType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'prevAmt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'drSumFcrc',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crSumFcrc',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'charge',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',hiddenCol:'true',textAlign:'right',hidden:'true',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'float',expression:'sum(\'prevAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'float',expression:'sum(\'drSumFcrc\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'float',expression:'sum(\'crSumFcrc\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'float',expression:'sum(\'charge\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',displayFormat:'#,##0.00',dataType:'float',expression:'sum(\'ramt\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})