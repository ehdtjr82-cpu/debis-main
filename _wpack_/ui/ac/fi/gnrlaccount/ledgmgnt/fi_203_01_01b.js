/*amd /ui/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_01b.xml 38282 d53da6686c893daea9cb8db52d255814b061ade75cb6dbe56d0480bd7f990be5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_getMaxCloseYm',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'closeYm',name:'마감년월'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtSt',name:'전표작성일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'전표작성일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postAcctDeptCd',name:'회계처리귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postAcctDeptNm',name:'회계처리귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_present',saveRemovedData:'true','ev:ondataload':'scwin.ds_present_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCnt',name:'총개수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'delCnt',name:'삭제건수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postCnt',name:'회계처리건수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'unPostCnt',name:'가결건수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveSlipPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_203_01_01b
// 이름     : 전표현황조회
// 경로     : 재무회계/일반회계/원장관리/
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

scwin.txtCoCd = "";
scwin.txtCoClsCd = ""; // 회사구분 (회사코드팝업 리턴시)

scwin.ed_slipKndCd_hidVal = ""; // 전표종류
scwin.ed_slipAcctDeptCd_hidVal = ""; // 발행부서

scwin.isSubCompany = false;
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

// 그리드(데이타셋) 정렬용 변수
/*<!-- 총괄현황조회 DataSet -->
<object id="ds_present" classid="<%=DGauceCLSID.DATASET%>">
<param name=SortExpr	value="+slipAcctDeptCd+slipKndCd">
<param name=SubsumExpr	value="slipAcctDeptCd">
*/
scwin.sort_options = {};
scwin.sort_options.sortIndex = "slipAcctDeptCd slipKndCd";
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

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
  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    //f_Retrieve();
    scwin.f_Header();
    scwin.f_setCompanyInfo();
    scwin.getMaxCloseYm(); //마감년월 가져오기 
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // ed_slipDtSt.text = <%=DDate.getDate().substring(0,6)+"01"%>;
  // ed_slipDtEnd.text = <%=DDate.getDate()%>;

  var thisYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 오늘일자 가져오기
  var firstDay = thisYm.substring(0, 4) + thisYm.substring(4, 6) + "01"; // 1일
  ed_slipDtSt.setValue(firstDay);
  ed_slipDtEnd.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); // 현재일자

  ed_slipDtSt.focus();
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
scwin.getMaxCloseYm = function () {
  console.log("=== getMaxCloseYm (전월 마감여부)");
  //	tr_getMaxCloseYm.Post();

  // ds_search2.AddRow();
  // ds_search2.NameValue(1,"coCd") = vCoCd;
  ds_search2.set("coCd", scwin.vCoCd);

  // var dcJSON = ds_search2.getJSON();
  // console.log("  *** ds_search2 : "+ JSON.stringify(dcJSON));

  $c.sbm.execute($p, sbm_getMaxCloseYm);
};

//-------------------------------------------------------------------------
// 전월 마감여부 submitdone
//-------------------------------------------------------------------------
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  console.log("▷ sbm_getMaxCloseYm_submitdone (전월 마감여부)");

  // console.log("ds_getMaxCloseYm.getCellData(0, closeYm) : " + ds_getMaxCloseYm.getCellData(0, "closeYm") );
  /*
  <!-- 미마감 월  확인후 작성일자 셋팅 -->
   language="javascript"  for=ds_getMaxCloseYm event=OnLoadCompleted(rowcnt)>
  	var thisYm = "<%= strToDate %>"; // 오늘일자 가져오기
  	//최소 미마감월이 당월이 아닐때
  		if(ds_getMaxCloseYm.NameValue(1,"CloseYm") != thisYm.substr(0,6)){ 
  		var closeYm = ds_getMaxCloseYm.NameValue(1,"CloseYm");
  		var firstDay = closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/"+"01";  // 1일
  		var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
  		ed_slipDtEnd.text = lastDay; //작성일자 셋팅
  		ed_slipDtSt.text = firstDay;
  	}else{
  		var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
  		var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
  		ed_slipDtEnd.text = lastDay; //작성일자 셋팅
  		ed_slipDtSt.text = firstDay;
  	}
  */
  var thisYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 오늘일자 가져오기

  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substring(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    // var firstDay = closeYm.substring(0,4)+"/"+closeYm.substring(4,6)+"/"+"01";  // 1일
    var firstDay = closeYm.substring(0, 4) + closeYm.substring(4, 6) + "01"; // 1일

    // console.log(" 확인 : closYm.substring(0,4) ["+closeYm.substring(0,4)+"] closYm.substring(4,6) ["+closeYm.substring(4,6)+"]");
    // var lastDay  = closeYm.substring(0,4)+"/"+closeYm.substring(4,6)+"/" + new Date(closeYm.substring(0,4),closeYm.substring(4,6),0).getDate(); // 마지막날
    var lastDay = closeYm.substring(0, 4) + closeYm.substring(4, 6) + new Date(closeYm.substring(0, 4), closeYm.substring(4, 6), 0).getDate(); // 마지막날

    console.log("  -=-= closeYm [" + ds_getMaxCloseYm.getCellData(0, "closeYm") + "]  thisYm [" + thisYm + "]  firstDay [" + firstDay + "]  lastDay [" + lastDay + "]");
    ed_slipDtEnd.setValue(lastDay); //작성일자 셋팅
    ed_slipDtSt.setValue(firstDay);
  } else {
    var firstDay = thisYm.substring(0, 4) + thisYm.substring(4, 6) + "01"; //당월 1일
    var lastDay = thisYm.substring(0, 4) + thisYm.substring(4, 6) + new Date(thisYm.substring(0, 4), thisYm.substring(4, 6), 0).getDate(); //당월 마지막날
    ed_slipDtEnd.setValue(lastDay); //작성일자 셋팅
    ed_slipDtSt.setValue(firstDay);
  }
  console.log("  ^^^^  ed_slipDtSt [" + ed_slipDtSt.getValue() + "] ed_slipDtEnd [" + ed_slipDtEnd.getValue() + "]");
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회(전표현황내역)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_slipDtSt, ed_slipDtEnd, ed_slipAcctDeptCd]); // 작성부서는 mandatory 아님

  if (!ret) {
    // console.log(" 필수 체크 오류");
    return false;
  }
  console.log("  ^^^^^ ed_slipDtSt [" + ed_slipDtSt.getValue() + "] ed_slipDtEnd [" + ed_slipDtEnd.getValue() + "]");

  // if (!cfIsAfterDate(ed_slipDtSt.text.trim(), ed_slipDtEnd.text.trim())){
  if (!$c.gus.cfIsAfterDate($p, ed_slipDtSt.getValue().trim(), ed_slipDtEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_slipDtSt.focus();
    return false;
  }

  // ds_search.UseChangeInfo = false;

  // tr_search.Action="/ac.fi.gnrlaccount.ledgmgnt.RetrieveSlipPresentConditionCMD.do";
  // tr_search.post();

  // <C> Col=coClsCd       			Ctrl=txtCoClsCd      			Param=value  	  </C>
  //    ds_search.set("coClsCd", scwin.txtCoClsCd);

  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(전표현황내역) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  /*
   language=JavaScript for=ds_present event=OnLoadCompleted(rowCnt)>
    cfHideDSWaitMsg(gr_present);
    var temp = ds_present.RealCount(1,ds_present.CountRow);
    cfShowTotalRows(totalRows, temp);
    
      if( rowCnt == 0 ){
  		cfAlertMsg(MSG_CM_WRN_002);
  	}
  */

  var temp = ds_present.getRowCount();
  ed_totalRows.setValue(temp);
  if (temp == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

scwin.ds_present_ondataload = function () {
  if (ds_present.getTotalRow() > 0) {
    //    ds_present.sort("slipAcctDeptCd", 0);
    //       ds_present.sort("slipAcctDeptCd", 0, "slipKndCd", 0);

    ds_present.multisort(scwin.sort_options);
  }
};

// @@ ====== 이벤트 - 팝업 ===================================================================== //

//-------------------------------------------------------------------------
// 전표종류코드 focus out
//-------------------------------------------------------------------------
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_slipKndCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_slipKndCd, ed_slipKndNm, '1');
};

//-------------------------------------------------------------------------
// 발행부서코드 focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_slipAcctDeptCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '2');
};

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_coCd event=OnKillFocus()> 

  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
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
// 전표종류 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipKndCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 작성부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// f_openPopUp 팝업  @@
//   1:전표종류,2:작성부서
//-------------------------------------------------------------------------
// 파라미터 갯수 맞춤
scwin.f_openPopUp = async function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  pCode[ " + check + " ] 1:전표종류,2:작성부서)");
  switch (flag) {
    case '1':
      // 전표종류 
      //rtnList = cfCommonPopUp('retrieveSlipKndCd',ed_slipKndCd.text.trim(),txt_slipKndNm.value,check,null,null,null,null,"0",null,null,null,null); 
      udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_callBackFunc, ed_slipKndCd.getValue().trim(), ed_slipKndNm.getValue(), check /* 3 */, null, null, null, null, "0", null, null, null, null);
      break;
    case '2':
      // 작성부서 (조회부)
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      console.log("  작성부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',ed_slipAcctDeptCd.text.trim(),txt_slipAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null); 
      udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check /* 3 */, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 회사코드 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.hidVal != rtnList[0]) scwin.f_initObj();

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
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    }
    scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
  }
};

//-------------------------------------------------------------------------
// 작성부서,작성부서명 초기화
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_slipAcctDeptCd, ed_slipAcctDeptNm]); //  작성부서
};

//-------------------------------------------------------------------------
// 전표종류 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_slipKndCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipKndCd_callBackFunc (전표종류 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_slipKndCd, ed_slipKndNm, rtnList);
};

//-------------------------------------------------------------------------
// 작성부서조회 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipAcctDeptCd_callBackFunc (작성부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    // strCd.Text = rtnList[0];	// 코드
    // strNm.value = rtnList[1];	// 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_slipKndCd_hidVal = rtnList[0];
        break;
      // 전표종류
      case '2':
        scwin.ed_slipAcctDeptCd_hidVal = rtnList[0];
        break;
      // 발행부서
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
        scwin.ed_slipKndCd_hidVal = "";
        break;
      // 전표종류
      case '2':
        scwin.ed_slipAcctDeptCd_hidVal = "";
        break;
      // 발행부서
      default:
        break;
    }
  }
  console.log("  팝업 처리후 ed_slipKndCd_hidVal [" + scwin.ed_slipKndCd_hidVal + "]");
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:전표종류,2:부서
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색)  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  console.log("ed_slipKndCd_hidVal : " + scwin.ed_slipKndCd_hidVal);
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_slipKndCd_hidVal ||
  // 전표종류
  flag == '2' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCd_hidVal // 발행부서
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";
  strNm.setValue("");

  // 명 초기화
  // switch (flag){
  //     case '1'  : ed_slipKndNm.setValue("");      break;  // 전표종류
  //     case '2'  : ed_slipAcctDeptNm.setValue(""); break;  // 발행부서
  //     default   : break;
  // }

  //  strCd.hidVal = "";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_slipKndCd_hidVal = "";
      break;
    // 전표종류
    case '2':
      scwin.ed_slipAcctDeptCd_hidVal = "";
      break;
    // 발행부서
    default:
      break;
  }

  // if(strCd.text.trim()!="") f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    // 팝업 로딩
    switch (flag) {
      case '1':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 전표종류
      case '2':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 발행부서
      default:
        break;
    }
  }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_present");

  // // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "전표현황","전표현황조회.xls",1+8+16);
  // }

  var totCnt = ds_present.getRowCount();
  var sheetTitle = "전표현황";
  var fileName = "전표현황조회";
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리
    const options = {
      fileName: fileName + ".xlsx",
      // 직접 입력에서 변수로 변경
      sheetName: sheetTitle,
      useSubTotal: true // 소계출력
      ,
      mergeCell: "true" // 병합
      ,
      "bodyWordwrap": "true" // 줄바꿈
      //    , "colMergeValue": "Y"  // 병합 풀어내면 데이타 들어가있음
    };
    $c.data.downloadGridViewExcel($p, gr_present, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',popupID:'retrieveDongbuGroupCompanyInfopopup',popupTitle:'',selectID:'retrieveDongbuGroupCompanyInfo',style:'',id:'udc_coCd',btnId:'btn_coCd',onloadCallbackFunc:'',objType:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',maxlengthCode:'3',maxlengthName:'50',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_search',code:'coCd',mandatoryCode:'true',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'slipDtSt',refDataMap:'ds_search',style:'',id:'udc_slipDt',refEdDt:'slipDtEnd',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',objType:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveSlipKndCdpopup',onloadCallbackFunc:'',selectID:'retrieveSlipKndCd',codeId:'ed_slipKndCd',popupTitle:'',nameId:'ed_slipKndNm',style:'',id:'udc_slipKndCd',btnId:'btn_slipKndCd',objType:'data','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent',maxlengthCode:'3',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_search',code:'slipKndCd',name:'slipKndNm',allowCharCode:'A-Za-z0-9',validTitle:'전표종류',UpperFlagCode:'1',afterAllowCharCode:'0-9',allowCharCodeLength:'1',beforeAllowCharCode:'A-Za-z'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_slipAcctDeptCd',code:'slipAcctDeptCd',codeId:'ed_slipAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_slipAcctDeptCd_onclickEvent',id:'udc_slipAcctDeptCd',maxlengthCode:'5',maxlengthName:'50',name:'slipAcctDeptNm',nameId:'ed_slipAcctDeptNm',objType:'data',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupID:'retrieveAcctDeptCdInfo6popup',popupTitle:'',refDataCollection:'ds_search',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'작성부서'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridUpYn:'N',gridID:'gr_present'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_present',id:'gr_present',style:'',visibleRowNum:'16',visibleRowNumFix:'true',mergeCells:'bycol',mergeCol:'slipAcctDeptCd,slipAcctDeptNm',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작성부서',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'작성부서명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'전표종류',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'입력건수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'삭제건수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'회계처리',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'가결건수',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipAcctDeptCd',inputType:'text',style:'',value:'',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipAcctDeptNm',inputType:'text',style:'',value:'',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postCnt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unPostCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'slipAcctDeptCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',dataType:'number',expression:'sum(\'totalCnt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',dataType:'number',expression:'sum(\'delCnt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',dataType:'number',expression:'sum(\'postCnt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column31',value:'',displayMode:'label',dataType:'number',expression:'sum(\'unPostCnt\')',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'totalCntSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'totalCnt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'delCntSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'delCnt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'postCntSum',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'postCnt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'unPostCntSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'unPostCnt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})