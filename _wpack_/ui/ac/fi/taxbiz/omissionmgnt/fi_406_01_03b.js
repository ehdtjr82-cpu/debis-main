/*amd /ui/ac/fi/taxbiz/omissionmgnt/fi_406_01_03b.xml 51770 b506967dce7f023bd34d61467ab4a7076ac200c810285acdd4f0028157d68630 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sapuCls',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mainkey',name:'메인키',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'이메일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mainkey',name:'메인키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapuCls',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetype',name:'응답여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoCls',name:'수동자동구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firSecCls',name:'1차2차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'message',name:'메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'createDt',name:'생성일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid2',saveRemovedData:'true','ev:ondataload':'scwin.ds_evid2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sapuCls',name:'매출입구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etaxId',name:'전자세금계산서ID',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'recverCrn',name:'공급받는자사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'busiClsNm',name:'사업자구분명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'계산서번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'email',name:'이메일(매출)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etaxKind',name:'증빙구분(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyBusiNo',name:'신고사업자번호(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCompName',name:'신고사업자(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNo',name:'공급사업자;번호(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supCompName',name:'공급사업자(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsNm2',name:'사업자구분명2(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supAmt',name:'공급금액(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세액(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDate',name:'작성일자(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userStd',name:'E메일수신자(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userFir',name:'1차대상',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'userSec',name:'2차대상',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'puRegYn',name:'발송제외등록여부(매입)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'수정가능여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionMailSendListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_evid1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_evid2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_406_01_03b
// 이름     : e메일발송결과조회
// 경로     : 재무회계/세무/세금계산서누락관리/
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

//  var scbHeadTag = document.getElementsByTagName("head")[0];
//  var scbScript = document.createElement('script');
//  scbScript.type = 'text/javascript';
//  var scbRandom = (Math.random().toString(36).slice(-8)).toUpperCase();
//  scbScript.src = '/js/ShiftCrossBrowser_ver.2.2.min.js?1='+scbRandom;
//  scbHeadTag.appendChild(scbScript);
//  window.onload= fn_onload;

//  function fn_onload(){
//  	window.setTimeout("fn_check()",1000);
//  }

//  function fn_check(){
//  	if(typeof ShiftCrossBrowser_BrowserDetect != "undefined"){
//  		if(ShiftCrossBrowser_BrowserDetect.browser == "Explorer" && ShiftCrossBrowser_BrowserDetect.browserVersion == "x86"){

//  		}
//  	}
//  }

//  var g_sCurrDate = "<%=DDate.getDate()%>"

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

scwin.sapuCls = "";
scwin.startDt = "";
scwin.endDt = "";
scwin.email = "";
scwin.sendPeriod = "";
scwin.g_sCurrDate = "";
scwin.txt_mainkey = ""; // 메인키 (ds_evid2 조회용)

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // KYU_TEST  팝업이 아닌데 이런 식으로 값을 가져옴
  // String sapuCls = request.getParameter("sapuCls") == null ? ""	: request.getParameter("sapuCls");
  // String startDt = request.getParameter("startDt") == null ? ""	: request.getParameter("startDt");
  // String endDt = request.getParameter("endDt") == null ? ""	: request.getParameter("endDt");
  // String email = request.getParameter("email") == null ? ""	: request.getParameter("email");
  // String sendPeriod = request.getParameter("sendPeriod") == null ? ""	: request.getParameter("sendPeriod");

  scwin.sapuCls = $c.data.getParameter($p, "sapuCls") == null ? "" : $c.data.getParameter($p, "sapuCls");
  scwin.startDt = $c.data.getParameter($p, "startDt") == null ? "" : $c.data.getParameter($p, "startDt");
  scwin.endDt = $c.data.getParameter($p, "endDt") == null ? "" : $c.data.getParameter($p, "endDt");
  scwin.email = $c.data.getParameter($p, "email") == null ? "" : $c.data.getParameter($p, "email");
  scwin.sendPeriod = $c.data.getParameter($p, "sendPeriod") == null ? "" : $c.data.getParameter($p, "sendPeriod");

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
    grpCd: "FI019",
    compID: "lc_sapuCls"
  } // 매출입구분
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    evidDetail.hide();
    scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");

    // f_Header();
    //  lc_sapuCls.addItem("", "전체", 0);  // addItem(보낼 값, 보여주는 이름, 인덱스)

    lc_sapuCls.setSelectedIndex(0);
    scwin.f_setCalender();
    if (ica_startDt.getValue() != "" && lc_sapuCls.getValue("") != "" && ed_email.getValue() != "") {
      scwin.f_Retrieve();
    }
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 조회조건 달력 셋팅
//-------------------------------------------------------------------------
scwin.f_setCalender = function () {
  // 현재일자 부여
  ica_startDt.setValue(scwin.g_sCurrDate);

  // if("<%=startDt%>" != ""){
  // 	ed_startDt.text = "<%=startDt%>";
  if (scwin.startDt != "") {
    ica_startDt.setValue(scwin.startDt);
  }
  // if("<%=sapuCls%>" != ""){
  // 	if("<%=sapuCls%>" == "SA"){
  // 		lc_sapuCls.BindColVal = "1";
  // 	}else if("<%=sapuCls%>" == "PU"){
  // 		lc_sapuCls.BindColVal = "2";
  // 	}
  // }
  if (scwin.sapuCls != "") {
    if (scwin.sapuCls == "SA") {
      lc_sapuCls.setValue("1"); // 매출
    } else if (scwin.sapuCls == "PU") {
      lc_sapuCls.setValue("2"); // 매입
    }
  }
  if (scwin.email != "") {
    ed_email.setValue(scwin.email);
  }
  if (scwin.sendPeriod != "") {
    sp_sendPeriod.innerHTML = "[ " + scwin.sendPeriod + " ]";
  }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회(메일발송리스트)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // 시작, 종료일자 체크
  if (ica_startDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "발송일"));
    ica_startDt.focus();
    return;
  }

  // ds_search.UseChangeInfo = false;

  // tr_search.Action="/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionMailSendListCMD.do";
  // tr_search.post();
  ds_search.set("endDt", ica_startDt.getValue()); // 이중으로 지정이 불가함

  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(메일발송리스트) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_evid1 event=OnLoadCompleted(rowCnt)>
  // cfHideDSWaitMsg(gr_evid1);
  // cfShowTotalRows(totalRows1, rowCnt);

  // 두번째 그리드는 조회를 누르면 나와야 함 : 건수 무관
  // document.getElementById("evidDetail").style.display = "block";
  evidDetail.show("");
  var rowCnt = ds_evid1.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ds_evid2.setJSON([]);

    // KYU_NEW
    return;
  }

  // KYU_NEW
  ds_evid1.setRowPosition(0);

  // 두번째 그리드 메시지 방지 : 처음이 없으면 두번째도 없슴
  if (rowCnt > 0) {
    scwin.f_Retrieve2();
  }
};

//-------------------------------------------------------------------------
// 조회(전자세금계산서누락리스트)
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = function () {
  console.log("====== f_Retrieve2 ==================");

  // ds_search.UseChangeInfo = false;
  // txt_mainkey.value = ds_evid1.NameValue(ds_evid1.RowPosition,"mainkey");

  scwin.txt_mainkey = ds_evid1.getCellData(ds_evid1.getRowPosition(), "mainkey");
  console.log(" row [" + ds_evid1.getRowPosition() + "]   mainkey [" + scwin.txt_mainkey + "]");
  ds_search.set("endDt", ica_startDt.getValue()); // startDt 에 지정됨. 이중으로 지정이 불가하여 따로 처리

  ds_search.set("mainkey", scwin.txt_mainkey);
  if (ds_evid1.getCellData(ds_evid1.getRowPosition(), "sapuCls") == 'SA') {
    console.log("  --- 매출(SA) : /ac.fi.taxbiz.omissionmgnt.RetrieveOmissionSaListDetailCMD.do");
    // tr_search2.Action="/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionSaListDetailCMD.do";
    // tr_search2.post();

    $c.sbm.setAction($p, sbm_search2, "/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionSaListDetailCMD.do");
  } else if (ds_evid1.getCellData(ds_evid1.getRowPosition(), "sapuCls") == 'PU') {
    console.log("  --- 매입(PU) : /ac.fi.taxbiz.omissionmgnt.RetrieveOmissionPuListDetailCMD.do");
    // tr_search2.Action="/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionPuListDetailCMD.do";
    // tr_search2.post();

    $c.sbm.setAction($p, sbm_search2, "/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionPuListDetailCMD.do");
  }
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search2);
};

//-------------------------------------------------------------------------
// 조회(전자세금계산서누락리스트) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search2_submitdone = async function (e) {
  console.log("▷▷ sbm_search2_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var rowCnt = ds_evid2.getTotalRow();
  ed_totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 대상구분 DECODE
//-------------------------------------------------------------------------
scwin.firClsExp = function (data) {
  return $c.gus.decode($p, data, "1", "1차", "2", "2차");
};

//-------------------------------------------------------------------------
// 매입매출구분 DECODE (ds_evid1, ds_evid2)
//-------------------------------------------------------------------------
scwin.sapuClsExp = function (data) {
  return $c.gus.decode($p, data, "SA", "매출", "PU", "매입");
};

//-------------------------------------------------------------------------
// 전자세금계산서 누락 리스트 gr_evid2 - 공급사업자구분 DECODE  (매입 only)
//   busiClsNm 을 가지고 busiClsNm2 를 넣음
//-------------------------------------------------------------------------
scwin.busClsNm2Exp = function (data, formatData, rowIdx, colIdx) {
  //pmntSlipNoExp
  console.log("  busClsNm2Exp - data [" + data + "]  rowIdx [" + rowIdx + "]");
  let busiClsNm = ds_evid2.getCellData(rowIdx, "busiClsNm"); // 전표번호(원가)

  return $c.gus.decode($p, busiClsNm, "1", "법인사업자", "2", "개인사업자", "3", "주민등록신고자", "4", "기타", "5", "재외국인사업자");
};

//-------------------------------------------------------------------------
// ds_evid2 ondataload
//-------------------------------------------------------------------------
scwin.ds_evid2_ondataload = async function () {
  console.log("----- ds_evid2_ondataload : 실행되지 않아도 돌려짐");

  // language=JavaScript for=ds_evid2 event=OnLoadCompleted(rowCnt)>
  // cfHideDSWaitMsg(gr_evid2);
  // cfShowTotalRows(totalRows2, rowCnt);
  var rowCnt = ds_evid2.getTotalRow();

  // if( rowCnt == 0 ){
  // 	await $c.gus.cfAlertMsg(MSG_CM_WRN_002);
  // }

  // var strFormat = "";

  if (ds_evid1.getCellData(ds_evid1.getRowPosition(), "sapuCls") == 'SA' || rowCnt == 0 // KYU_NEW : 0 건 일 때에도 보여주는 줘야함
  ) {
    //		gridheader.innerHTML = '전자세금계산서 누락 리스트(매출)';
    gr_evid2_title.setValue("전자세금계산서 누락 리스트(매출)");
    gr_evid2.setColumnVisible("evidClsNm", "true"); // 증빙구분명(매출)
    gr_evid2.setColumnVisible("recverCrn", "true"); // 공급받는자사업자등록번호(매출)
    gr_evid2.setColumnVisible("busiNm", "true"); // 사업부명(매출)
    gr_evid2.setColumnVisible("busiClsNm", "true"); // 사업자구분명(매출)
    gr_evid2.setColumnVisible("acctDeptNm", "true"); // 작성부서명(매출)
    gr_evid2.setColumnVisible("spplyDt", "true"); // 공급일자(매출)
    gr_evid2.setColumnVisible("postDt", "true"); // 회계처리일자(매출)
    gr_evid2.setColumnVisible("spplyAmt", "true"); // 계산서금액(매출)
    gr_evid2.setColumnVisible("vat", "true"); // 부가세(매출)
    gr_evid2.setColumnVisible("sumAmt", "true"); // 총합계금액(매출)
    gr_evid2.setColumnVisible("slipNo", "true"); // DEBIS전표번호(매출)
    gr_evid2.setColumnVisible("sellVatNo", "true"); // 계산서번호(매출)
    gr_evid2.setColumnVisible("regNm", "true"); // 전표등록자명(매출)
    gr_evid2.setColumnVisible("email", "true"); // 이메일(매출)

    gr_evid2.setColumnVisible("etaxKind", "false"); // 증빙구분(매입)
    gr_evid2.setColumnVisible("buyBusiNo", "false"); // 신고사업자번호(매입)
    gr_evid2.setColumnVisible("buyCompName", "false"); // 신고사업자(매입)
    gr_evid2.setColumnVisible("supBusiNo", "false"); // 공급사업자;번호(매입)
    gr_evid2.setColumnVisible("supCompName", "false"); // 공급사업자(매입)
    gr_evid2.setColumnVisible("busiClsNm2", "false"); // 사업자구분명2(매입)
    gr_evid2.setColumnVisible("supAmt", "false"); // 공급금액(매입)
    gr_evid2.setColumnVisible("vatAmt", "false"); // 부가세액(매입)
    gr_evid2.setColumnVisible("totAmt", "false"); // 합계(매입)
    gr_evid2.setColumnVisible("writeDate", "false"); // 작성일자(매입)
    gr_evid2.setColumnVisible("userStd", "false"); // E메일수신자(매입)
    gr_evid2.setColumnVisible("userFir", "true"); // 1차대상
    gr_evid2.setColumnVisible("userSec", "true"); // 2차대상
    gr_evid2.setColumnVisible("puRegYn", "false"); // 발송제외등록여부(매입)
  } else if (ds_evid1.getCellData(ds_evid1.getRowPosition(), "sapuCls") == 'PU') {
    // gridheader.innerHTML = '증빙 누락 리스트(매입)';
    gr_evid2_title.setValue("증빙 누락 리스트(매입)");
    gr_evid2.setColumnVisible("evidClsNm", "false"); // 증빙구분명(매출)
    gr_evid2.setColumnVisible("recverCrn", "false"); // 공급받는자사업자등록번호(매출)
    gr_evid2.setColumnVisible("busiNm", "false"); // 사업부명(매출)
    gr_evid2.setColumnVisible("busiClsNm", "false"); // 사업자구분명(매출)
    gr_evid2.setColumnVisible("acctDeptNm", "false"); // 작성부서명(매출)
    gr_evid2.setColumnVisible("spplyDt", "false"); // 공급일자(매출)
    gr_evid2.setColumnVisible("postDt", "false"); // 회계처리일자(매출)
    gr_evid2.setColumnVisible("spplyAmt", "false"); // 계산서금액(매출)
    gr_evid2.setColumnVisible("vat", "false"); // 부가세(매출)
    gr_evid2.setColumnVisible("sumAmt", "false"); // 총합계금액(매출)
    gr_evid2.setColumnVisible("slipNo", "false"); // DEBIS전표번호(매출)
    gr_evid2.setColumnVisible("sellVatNo", "false"); // 계산서번호(매출)
    gr_evid2.setColumnVisible("regNm", "false"); // 전표등록자명(매출)
    gr_evid2.setColumnVisible("email", "false"); // 이메일(매출)

    gr_evid2.setColumnVisible("etaxKind", "true"); // 증빙구분(매입)
    gr_evid2.setColumnVisible("buyBusiNo", "true"); // 신고사업자번호(매입)
    gr_evid2.setColumnVisible("buyCompName", "true"); // 신고사업자(매입)
    gr_evid2.setColumnVisible("supBusiNo", "true"); // 공급사업자;번호(매입)
    gr_evid2.setColumnVisible("supCompName", "true"); // 공급사업자(매입)
    gr_evid2.setColumnVisible("busiClsNm2", "true"); // 사업자구분명2(매입)
    gr_evid2.setColumnVisible("supAmt", "true"); // 공급금액(매입)
    gr_evid2.setColumnVisible("vatAmt", "true"); // 부가세액(매입)
    gr_evid2.setColumnVisible("totAmt", "true"); // 합계(매입)
    gr_evid2.setColumnVisible("writeDate", "true"); // 작성일자(매입)
    gr_evid2.setColumnVisible("userStd", "true"); // E메일수신자(매입)
    gr_evid2.setColumnVisible("userFir", "true"); // 1차대상
    gr_evid2.setColumnVisible("userSec", "true"); // 2차대상
    gr_evid2.setColumnVisible("puRegYn", "true"); // 발송제외등록여부(매입)
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ica_startDt]);
};

//-------------------------------------------------------------------------
// gr_evid1 클릭
//-------------------------------------------------------------------------
scwin.gr_evid1_oncellclick = function (rowIndex, columnIndex, columnId) {
  // language="javascript" for=gr_evid1 event=OnClick(Row,Colid)>
  scwin.f_Retrieve2();
};

//-------------------------------------------------------------------------
// gr_evid2 클릭
//   - KYU_TEST : 전표번호, 계산서번호 클릭 (대상 없음) - 호출안함으로 예상
//-------------------------------------------------------------------------
scwin.gr_evid2_oncellclick = function (rowIndex, columnIndex, columnId) {
  var Row = rowIndex;
  var Colid = columnId;
  // <!-- 전표번호 클릭시  -->
  // language="javascript" for=gr_evid2 event=OnClick(Row,Colid)>

  // 전표내역 팝업
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_evid2.getCellData(Row, "slipNo"));
  }

  // 계산서번호
  if (Colid == "sellVatNo" && Row >= 0) {
    scwin.f_Evidence(Row);
  }
};

//-------------------------------------------------------------------------
// 증빙내역 (부가세내역등록)
//-------------------------------------------------------------------------
scwin.f_Evidence = async function (row) {
  console.log("=== f_Evidence 증빙내역 (부가세내역등록)");
  if (row >= 0) {
    var valueObject = new Object();
    valueObject.popupMode = 'U'; // Update
    valueObject.coCd = ds_evid2.getCellData(row, "coCd");
    valueObject.coClsCd = ds_evid2.getCellData(row, "coClsCd");
    valueObject.postYn = ds_evid2.getCellData(row, "postYn");
    valueObject.modPsblYn = ds_evid2.getCellData(row, "modPsblYn");
    valueObject.delYn = ds_evid2.getCellData(row, "delYn");
    valueObject.pchsEvidNo = ds_evid2.getCellData(row, "sellVatNo");
    valueObject.pchsSellCls = '1';
    console.log("^^^^^  before fi_401_01_09p (부가세내역등록) valueObject " + JSON.stringify(valueObject));

    // // 부가세내역 호출
    // var result = window.showModalDialog("/ac/fi/taxbiz/vatctrl/fi_401_01_09p.jsp", valueObject,
    // 	"dialogWidth:880px; dialogHeight:460px; status:no; scroll:no");

    // var data = {
    //           popupMode  : 'U'  // Update
    //         , coCd       : ds_evid2.getCellData(row, "coCd")       // 회사코드
    //         , coClsCd    : ds_evid2.getCellData(row, "coClsCd")    // 회사종류코드
    //         , postYn     : ds_evid2.getCellData(row, "postYn")     // 회계처리여부 (1: 회계처리됨, 0: 회계처리안됨)
    //         , modPsblYn  : ds_evid2.getCellData(row, "modPsblYn")  // 수정가능여부 (1: 수정가능, 0: 수정불가능)
    //         , delYn      : ds_evid2.getCellData(row, "delYn")      // 삭제여부 (1: 삭제, 0: 미삭제)
    //         , pchsEvidNo : ds_evid2.getCellData(row, "sellVatNo")      // 삭제여부 (1: 삭제, 0: 미삭제)
    //         , pchsSellCls : '1'
    // };

    // console.log("^^^^^  before fi_401_01_09p (부가세내역등록) data "+ JSON.stringify(data));

    var opts = {
      id: "smpPop",
      popupName: "부가세내역등록",
      modal: true,
      type: "browserPopup",
      width: 800,
      height: 350,
      title: "Win pop"
    };
    let rtnList = await $c.win.openPopup($p, "/ui/ac/fi/taxbiz/vatctrl/fi_401_01_09p.xml", opts, valueObject);
    // let rtnList = await $c.win.openPopup("/ui/ac/fi/taxbiz/vatctrl/fi_401_01_09p.xml", opts, data);
  } else {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "Row"));
  }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
//   flag  1:매일발송 리스트,2:누락 리스트
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function (flag) {
  console.log("=== f_GridToExcel    1:매일발송 리스트)");
  if (ds_evid1.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_009, "데이타"));
    return false;
  }
  var sheetTitle = "메일발송 리스트";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true // 줄바꿈
    };
    $c.data.downloadGridViewExcel($p, gr_evid1, options);
  }
};

//-------------------------------------------------------------------------
// function name : f_GridToExcel2
// function desc : 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel2 = async function (flag) {
  console.log("=== f_GridToExcel2   2:누락 리스트)");
  if (ds_evid2.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_009, "데이타"));
    return false;
  }
  var sheetTitle = "누락 리스트";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true // 줄바꿈
    };
    $c.data.downloadGridViewExcel($p, gr_evid2, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발송일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_startDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_search.startDt',title:'발송일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sapuCls',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.sapuCls',title:'매출매입구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'e메일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_email',style:'width: 200px;',ref:'data:ds_search.email',title:'e메일'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:' 메일발송 리스트',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_evid1',gridDownFn:'scwin.f_GridToExcel',id:'udc_grodMain1',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_evid1_oncellclick',scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_evid1',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_evid1',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'메인키',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column38',value:'매출입</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column36',value:'수동자동</br>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column34',value:'1,2차</br>대상구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column32',value:'수신자</br>e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column22',value:'송신일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column24',value:'메일내용',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{dataType:'text',width:'80',hiddenCol:'true',inputType:'text',style:'',readOnly:'true',id:'mainkey',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.sapuClsExp',dataType:'text',width:'80',inputType:'text',style:'',readOnly:'true',id:'sapuCls',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'text',width:'100',hiddenCol:'true',inputType:'text',style:'',readOnly:'true',id:'autoCls',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.firClsExp',dataType:'text',width:'80',inputType:'text',style:'',readOnly:'true',id:'firSecCls',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',dataType:'text',width:'150',inputType:'text',style:'',readOnly:'true',id:'email',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',dataType:'text',width:'100',inputType:'text',style:'',readOnly:'true',id:'userNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',dataType:'text',width:'100',inputType:'text',style:'',readOnly:'true',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'80',displayFormat:'yyyy/MM/dd',inputType:'text',style:'',readOnly:'true',id:'createDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'text',width:'300',inputType:'text',style:'',readOnly:'true',id:'message',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'evidDetail',class:'mt16'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'gr_evid2_title',label:' 메일발송 리스트',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section2',style:'',gridID:'gr_evid2',gridDownFn:'scwin.f_GridToExcel2',id:'udc_gridMain2',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_evid2_oncellclick',scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_evid2',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_evid2',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'매출입</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'증빙구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'공급자</br>사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'공급자</br>사업자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'사업자</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'계산서</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'회계처리</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'부가세</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'전표</br>등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'전표등록자</br>e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column117',value:'증빙구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column120',value:'신고사업자<br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'신고사업자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column126',value:'공급사업자</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column129',value:'공급사업자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column132',value:'공급사업자</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column141',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column147',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column150',value:'E메일</br>수신자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column105',value:'1차대상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column96',value:'2차대상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column144',value:'발송제외</br>등록여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{displayFormatter:'scwin.sapuClsExp',width:'100',inputType:'text',style:'',readOnly:'true',id:'sapuCls',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',readOnly:'true',id:'evidClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'recverCrn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',readOnly:'true',id:'busiNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',readOnly:'true',id:'busiClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',readOnly:'true',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',inputType:'text',style:'',readOnly:'true',id:'spplyDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',inputType:'text',style:'',readOnly:'true',id:'postDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'spplyAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'vat',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'sumAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',style:';color:blue;',readOnly:'true',id:'slipNo',value:'',class:'underline',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',style:';color:blue;',readOnly:'true',id:'sellVatNo',value:'',class:'underline',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',style:'',readOnly:'true',id:'regNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',readOnly:'true',id:'email',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'etaxKind',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'buyBusiNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'buyCompName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'supBusiNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'supCompName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.busClsNm2Exp',textAlign:'left',width:'120',inputType:'text',style:'',readOnly:'true',id:'busiClsNm2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'supAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'vatAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'totAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',inputType:'text',style:'',readOnly:'true',id:'writeDate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'text',style:'',readOnly:'true',id:'userStd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',style:'',readOnly:'true',id:'userFir',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',style:'',readOnly:'true',id:'userSec',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',readOnly:'true',id:'puRegYn',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'spplyAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'vat\')',textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'sumAmt\')',textAlign:'right',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'supAmt\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'vatAmt\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'totAmt\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column152',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})