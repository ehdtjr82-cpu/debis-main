/*amd /ui/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_02b.xml 46497 5ece2a77f20c262af15acd92e2d006778233665af9d38ddbc42200c29697db1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtSt',name:'전표작성일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'전표작성일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postAcctDeptCd',name:'회계처리귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postAcctDeptNm',name:'회계처리귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'coCd',name:'회사코드'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_getMaxCloseYm',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'closeYm',name:'마감년월'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_present',saveRemovedData:'true','ev:ondataload':'scwin.ds_present_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modNm',name:'수정자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postActDt',name:'회계처리실행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postEmpNo',name:'회계처리자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postEmpNm',name:'회계처리자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reg',name:'reg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mod',name:'mod',dataType:'text'}},{T:1,N:'w2:column',A:{id:'del',name:'del',dataType:'text'}},{T:1,N:'w2:column',A:{id:'post',name:'post',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveSlipInsertPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_203_01_02b
// 이름     : 전표입력현황
// 경로     : 재무회계/일반회계/원장관리/
// 사용계정 : 내부
// 비고     : 
//           1:전표종류,2:전표귀속부서,3:작성자
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

scwin.isSubCompany = false;
scwin.ed_slipKndCd_hidVal = ""; // 전표종류
scwin.ed_slipAcctDeptCd_hidVal = ""; // 전표귀속부서
scwin.ed_drawEmpNo_hidVal = ""; // 작성자

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

// 그리드(데이타셋) 정렬용 변수
/*<!-- 총괄현황조회 DataSet -->
<object id="ds_present" classid="<%=DGauceCLSID.DATASET%>">
<param name=SortExpr	value="+slipDt+slipNo+slipAcctDeptCd+slipKndCd">
*/
scwin.sort_options = {};
scwin.sort_options.sortIndex = "slipDt slipNo slipAcctDeptCd slipKndCd";
scwin.sort_options.sortOrder = "1 1 1 1"; // 1: 오름차순

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
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
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
  // 조회조건
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  console.log("=== f_Setting");
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
  var dcJSON = ds_search2.getJSON();
  console.log("  *** ds_search2 : " + JSON.stringify(dcJSON));
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
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  console.log("----- f_SearchClear (재조회)");
  // cfInitObjects(searchTable);
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회(전표입력현황내역)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  // if (!$c.gus.cfValidate([ed_coCd,ed_slipDtSt,ed_slipDtEnd,ed_slipAcctDeptCd]))
  let rtn = await $c.gus.cfValidate($p, [ed_coCd, ed_slipDtSt, ed_slipDtEnd, ed_slipAcctDeptCd]);
  if (!rtn) return false;
  if (!$c.gus.cfIsAfterDate($p, ed_slipDtSt.getValue().trim(), ed_slipDtEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_slipDtSt.focus();
    return false;
  }

  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.gnrlaccount.ledgmgnt.RetrieveSlipInsertPresentConditionCMD.do";
  // tr_search.post();

  // <C> Col=coClsCd		       		Ctrl=txtCoClsCd         		Param=value  	  </C>
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(전표입력현황내역) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  /*
    cfHideDSWaitMsg(gr_present);
    cfShowTotalRows(totalRows, rowCnt);
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
  console.log("----- ds_present_ondataload");
  if (ds_present.getTotalRow() > 0) {
    ds_present.multisort(scwin.sort_options);
  }
};

//-------------------------------------------------------------------------
// 그리드 - 입력자 DECODE
//-------------------------------------------------------------------------
scwin.regCustomExp = function (data, formatData, rowIdx, colIdx) {
  //value ={regDtm&" "&regNm}
  let ret = ds_present.getCellData(rowIdx, "regDtm") + " " + ds_present.getCellData(rowIdx, "regNm");
  return ret;
};

//-------------------------------------------------------------------------
// 그리드 - 수정자 DECODE
//-------------------------------------------------------------------------
scwin.modCustomExp = function (data, formatData, rowIdx, colIdx) {
  // value ={decode(delYn,0,modDtm&" "&modNm)}
  let delYn = ds_present.getCellData(rowIdx, "delYn");
  let ret = ds_present.getCellData(rowIdx, "modDtm") + " " + ds_present.getCellData(rowIdx, "modNm");
  return $c.gus.decode($p, delYn, 0, ret);
};

//-------------------------------------------------------------------------
// 그리드 - 삭제자 DECODE
//-------------------------------------------------------------------------
scwin.delCustomExp = function (data, formatData, rowIdx, colIdx) {
  // value ={decode(delYn,1,modDtm&" "&modNm)}
  let delYn = ds_present.getCellData(rowIdx, "delYn");
  let ret = ds_present.getCellData(rowIdx, "modDtm") + " " + ds_present.getCellData(rowIdx, "modNm");
  return $c.gus.decode($p, delYn, 1, ret);
};

//-------------------------------------------------------------------------
// 그리드 - 회계처리자 DECODE
//-------------------------------------------------------------------------
scwin.postCustomExp = function (data, formatData, rowIdx, colIdx) {
  // value ={postActDt&" "&postEmpNm} 
  var ret = ds_present.getCellData(rowIdx, "postActDt") + " " + ds_present.getCellData(rowIdx, "postEmpNm");
  return ret;
};

//-------------------------------------------------------------------------
// 전표번호 클릭 - 전표내역조회 팝업
//-------------------------------------------------------------------------
scwin.gr_present_oncellclick = async function (rowIndex, columnIndex, columnId) {
  console.log("----- gr_present_oncellclick    row [" + rowIndex + "] column [" + columnIndex + "] columId [" + columnId + "]");
  // <!-- 전표번호클릭시  -->
  //  language="javascript"  for=gr_present event=OnClick(Row,Colid)>
  //     if(Colid=="slipNo" && Row >0){
  //         cfShowSlipInfo(ds_present.NameValue(Row,"slipNo"));

  if (columnId == "slipNo" && rowIndex >= 0) {
    // 특정 셀 체크
    var slipNo = ds_present.getCellData(rowIndex, "slipNo");
    console.log("  -- slipNo : " + slipNo);
    if (slipNo != "") {
      //cfShowSlipInfo(ds_present.NameValue(Row,"slipNo"));
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo); // 전표내역조회
      console.log(rtnList);
    }
  }
};

// @@ ====== 이벤트 - 팝업 ===================================================================== //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // <!-- 회사코드 입력시  -->
  //  language=JavaScript for=ed_coCd event=OnKillFocus()>
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 전표종류코드 focus out
//-------------------------------------------------------------------------
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  scwin.removeKor(ed_slipKndCd);
  scwin.f_checkPopEd(ed_slipKndCd, ed_slipKndNm, '1');
};
scwin.removeKor = function (e) {
  // var val = e.target.value.toUpperCase();

  var val = e.getValue().toUpperCase();
  console.log("  val [" + val + "]");

  //한글방지
  val = val.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
  //영문 대문자 + 숫자만 남기기
  val = val.replace(/[^A-Z0-9]/g, "");

  //포맷: 첫 글자는 영문 대문자, 나머지 두 글자는 숫자
  var formatted = "";
  if (val.length >= 1) {
    // 첫 글자: 영문 대문자만 허용
    formatted += val.charAt(0).replace(/[^A-Z]/g, "");
  }
  if (val.length >= 2) {
    // 두 번째부터: 숫자만 허용
    formatted += val.substring(1).replace(/[^0-9]/g, "");
  }
  console.log("  formatted [" + formatted + "]");

  // this.setValue(formatted);
  e.setValue(formatted);
};

//-------------------------------------------------------------------------
// 전표귀속부서코드 focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '2');
};

//-------------------------------------------------------------------------
// 작성자번호 focus out
//-------------------------------------------------------------------------
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_drawEmpNo, ed_drawEmpNm, '3');
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
// 전표귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 작성자 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// f_openPopUp 팝업  @@
//   1:전표종류,2:전표귀속부서,3:작성자
//-------------------------------------------------------------------------
// 파라미터 갯수 맞춤
scwin.f_openPopUp = async function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ] 1:전표종류,2:전표귀속부서,3:작성자)");
  switch (flag) {
    case '1':
      // 전표종류 
      //rtnList = cfCommonPopUp('retrieveSlipKndCd',ed_slipKndCd.text.trim(),txt_slipKndNm.value,check,null,null,null,null,"0",null,null,null,null);
      udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_callBackFunc, ed_slipKndCd.getValue().trim(), ed_slipKndNm.getValue(), check /* 3 */, null, null, null, null, "0", null, null, null, null);
      break;
    case '2':
      // 전표귀속부서 (조회부)
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      console.log("  전표귀속부서 popup  param [" + param + "]");

      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',ed_slipAcctDeptCd.text.trim(),txt_slipAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check /* 3 */, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 작성자 (사원)
      var param = '';
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사인 경우에만  회사코드 check
        param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      }
      console.log("  작성자 popup  param [" + param + "]");

      //rtnList = cfCommonPopUp('retrieveAcEmpInfo',ed_drawEmpNo.text.trim(),txt_drawEmpNm.value,check,null,null,null,null,param,null,null,null,null);

      // 2026-01-29 : 사원(작성자) 팝업 빈값에 전체조회 방지
      // - 이진희 차장님 : 박진수 부장님 계실 때 pAllSearchTF 인자값 안넘어왔을 경우 T로 셋팅하는 부분이 있는데, 해당 부분을 수정하면 안될 거 같아 안전하게 화면에서 위와 같이 호출해주세요.
      // udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_callBackFunc,ed_drawEmpNo.getValue().trim(),ed_drawEmpNm.getValue(),check /* 3 */,null,null,null,null,param,null,null,null,null);
      udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_callBackFunc, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check /* 3 */, null, null, null, null, param, null, null, null, null, null, "F");
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//    1:전표종류,2:전표귀속부서,3:작성자

//-------------------------------------------------------------------------
// 회사코드 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) scwin.f_initObj(); // 작성부서,작성자 초기화

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
  }
};

//-------------------------------------------------------------------------
// 작성부서,작성자 초기화
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_slipAcctDeptCd, ed_slipAcctDeptNm]); //  작성부서
  $c.gus.cfInitObjects($p, [ed_drawEmpNo, ed_drawEmpNm]); //  작성자
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
// 귀속부서조회 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipAcctDeptCd_callBackFunc (귀속부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);
};

//-------------------------------------------------------------------------
// 작성자 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_drawEmpNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_drawEmpNo_callBackFunc (작성자 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_drawEmpNo, ed_drawEmpNm, rtnList);
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_slipKndCd_hidVal = "";
          break;
        // 전표종류
        case '2':
          scwin.ed_slipAcctDeptCd_hidVal = "";
          break;
        // 전표귀속부서
        case '3':
          scwin.ed_drawEmpNo_hidVal = "";
          break;
        // 작성자
        default:
          break;
      }
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
      // 전표귀속부서
      case '3':
        scwin.ed_drawEmpNo_hidVal = rtnList[0];
        break;
      // 작성자
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
      // 전표귀속부서
      case '3':
        scwin.ed_drawEmpNo_hidVal = "";
        break;
      // 작성자
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:전표종류,2:귀속부서,3:작성자
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - 코드값 변경시 자동검색)  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;

  if (flag == '1' && strCd.getValue().trim() == scwin.ed_slipKndCd_hidVal ||
  // 전표종류
  flag == '2' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCd_hidVal ||
  // 전표귀속부서
  flag == '3' && strCd.getValue().trim() == scwin.ed_drawEmpNo_hidVal // 작성자
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  //  strNm.value="";

  // 명 초기화
  switch (flag) {
    case '1':
      ed_slipKndNm.setValue("");
      break;
    // 전표종류
    case '2':
      ed_slipAcctDeptNm.setValue("");
      break;
    // 전표귀속부서
    case '2':
      ed_drawEmpNm.setValue("");
      break;
    // 작성자
    default:
      break;
  }

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
    // 전표귀속부서
    case '2':
      scwin.ed_drawEmpNo_hidVal = "";
      break;
    // 작성자
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
      // 전표귀속부서
      case '3':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 작성자
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
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "전표입력현황","전표입력현황조회.xls",8+16);
  // }

  var totCnt = ds_present.getRowCount();
  var sheetTitle = "전표입력현황";
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리

    const options = {
      fileName: "전표입력현황" + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true // 줄바꿈
    };
    $c.data.downloadGridViewExcel($p, gr_present, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd',allowCharCode:'0-9',maxlengthCode:'3',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',mandatoryCode:'true',code:'coCd',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'slipDtSt',refDataMap:'ds_search',style:'',id:'udc_slipDt',refEdDt:'slipDtEnd',edToId:'ed_slipDtEnd',edFromId:'ed_slipDtSt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',popupID:'retrieveSlipKndCdpopup',popupTitle:'',selectID:'retrieveSlipKndCd',style:'',id:'udc_slipKndCd',btnId:'btn_slipKndCd',objTypeCode:'data',objTypeName:'data',maxlengthCode:'3',maxlengthName:'50',code:'slipKndCd',name:'slipKndNm',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',validTitle:'전표종류',afterAllowCharCode:'0-9',beforeAllowCharCode:'A-Za-z',allowCharCodeLength:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipAcctDeptCd',nameId:'ed_slipAcctDeptNm',popupID:'retrieveAcctDeptCdInfo6popup',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',id:'udc_slipAcctDeptCd',btnId:'btn_slipAcctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',code:'slipAcctDeptCd',name:'slipAcctDeptNm',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_slipAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent',validTitle:'전표귀속부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drawEmpNo',nameId:'ed_drawEmpNm',popupID:'retrieveAcEmpInfopopup',popupTitle:'',selectID:'retrieveAcEmpInfo',style:'',id:'udc_drawEmpNo',btnId:'btn_drawEmpNo',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',maxlengthName:'10',refDataCollection:'ds_search',code:'drawEmpNo',name:'drawEmpNm','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent',validTitle:'작성자',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_present',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_present',id:'gr_present',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_present_oncellclick',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작성일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'전표번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'전표귀속부서',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작성자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'전표종류',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'입력자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'수정자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'삭제자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'회계처리자',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:';color:blue;',value:'',width:'100',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipAcctDeptNm',inputType:'text',style:'',value:'',width:'130',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reg',inputType:'text',style:'',value:'',width:'100',readOnly:'true',customFormatter:'scwin.regCustomExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mod',inputType:'text',style:'',value:'',width:'100',readOnly:'true',customFormatter:'scwin.modCustomExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'del',inputType:'text',style:'',value:'',width:'100',readOnly:'true',customFormatter:'scwin.delCustomExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'post',inputType:'text',style:'',value:'',width:'120',readOnly:'true',customFormatter:'scwin.postCustomExp'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})