/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_01b.xml 30278 0609ebd6d76725350f523a7561d9bbf444668d739f2992ef7bef2d2f7a6162d0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_pre'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDt',name:'구매요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'change',name:'잔액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',name:'매입환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellovExchRt',name:'매도환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_exchRt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePre',action:'/ac.fi.gnrlaccount.slipmgnt.RequestSuspensePayableCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_pre","key":"IN_DS1"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePre_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_02_01b
// 이름     : 가지급금입력
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     :
// 업로드   :
// 다운로드 : 
// 레포트   :
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

scwin.ed_reqEmpNo_hidVal = ""; // 신청자히든
scwin.txt_change = 0; //잔액 (미사용)

scwin.txt_reqAcctDeptCd = ""; //부서코드
scwin.txt_clntNo = ""; //거래처코드

//var slipDt    = "<%=DDate.getDate()%>";
scwin.checkExchRt = 0; //환율 부분 추가

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
    grpCd: "FI031",
    compID: "lc_susPayClsCd"
  } // 신청계정종류
  , {
    grpCd: "ZZ006",
    compID: "lc_crcCd",
    opt: {
      "range": "1"
    }
  } // 통화코드 - KRW가 제일 위로
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    scwin.slipDt = WebSquare.date.getCurrentServerDate();
    scwin.f_Header();
    //ed_reqDt.Text = slipDt;
    ica_reqDt.setValue(scwin.slipDt);

    // KYU_TEST start (원화일 때에는 비활성화)
    //lc_susPayClsCd.setValue("KRW");
    //ed_exchRt.setValue("1400.01");
    // KYU_TEST end

    $c.gus.cfDisableObjects($p, [lc_susPayClsCd]);
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Header
// function desc : 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  var str_detail_header = "";

  // ds_pre.SetDataHeader(str_detail_header);
  // ds_pre.AddRow();
  // ds_pre.NameValue(ds_pre.CountRow,"crcCd") = '<%=ACConstants.KOREA_WON%>'

  ds_pre.set("crcCd", ACConstants.KOREA_WON);

  // KYU_NEW : 환율, 외화금액 비활성 위해
  scwin.crcCdChange();
  $c.gus.cfDisableObjects($p, [ed_reqEmpNm, ed_reqAcctDeptNm]);

  //    lc_susPayClsCd.BindColVal = "1";
  lc_susPayClsCd.setValue("1");
  // cfInitHidVal(tbl_prepay);

  $c.gus.cfInitHidVal($p, tbl_prepay); // 오브젝트의 히든값 초기화

  // KYU_NEW : 2025-12-23 발행한 후에 신청자 다시 불러오게 하려면 히든값 초기화 필요  !!!!!!!!!!!!!!!!!
  scwin.ed_reqEmpNo_hidVal = ""; // 신청자히든

  //cfSetIMEModeActiveObjects([ed_summary]);  // Object 의 IME Mode 를 active(한글입력) 으로 설정 --> 불가능
};
scwin.sbm_exchRt_submitdone = function (e) {
  console.log("▷ sbm_exchRt_submitdone ==================");

  // <!-- 통화코드 DataSet -->
  // language=JavaScript for=tr_exchRt event=OnSuccess()>
  ed_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfEnableObjects($p, [ed_amt]);
    $c.gus.cfDisableObjects($p, [ed_amtFcrc]);
    ed_amt.focus();
  } else {
    $c.gus.cfEnableObjects($p, [ed_amtFcrc]);
    $c.gus.cfDisableObjects($p, [ed_amt]);
    ed_amtFcrc.focus();
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 신청자 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_reqEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp(1, 'F');
};

//-------------------------------------------------------------------------
// 팝업 @@
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  // var rtnList = new Array();
  var param = ica_reqDt.getValue().trim() + ",0,0"; //자회사 사원 조회 불가(2015.03.31)
  console.log("  신청자 popup  param [" + param + "]");

  // rtnList = cfCommonPopUp('retrieveEmpDeptClntInfo',ed_reqEmpNo.text.trim(),txt_reqEmpNm.value,check,null,null,null,null,param,null,null,null,null,null,"F"); // 사원
  udc_reqEmpNo.cfCommonPopUp(scwin.udc_reqEmpNo_callBackFunc, ed_reqEmpNo.getValue().trim(), ed_reqEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, "F"); // 사원
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 신청자 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_reqEmpNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_reqEmpNo_callBackFunc (신청자 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_reqEmpNo.setValue(""); // 사원코드
      ed_reqEmpNm.setValue(""); // 사원명
      scwin.txt_reqAcctDeptCd = ""; // 부서코드
      ed_reqAcctDeptNm.setValue(""); // 부서명
      scwin.txt_clntNo = ""; // 거래처코드
      scwin.ed_reqEmpNo_hidVal = ""; // 히든값

      return;
    }
    // ed_reqEmpNo.text = rtnList[0];	//사원코드
    // txt_reqEmpNm.value= rtnList[1];	//사원명
    // txt_reqAcctDeptCd.value = rtnList[2];	//부서코드
    // txt_reqAcctDeptNm.value =  rtnList[3];	//부서명
    // txt_clntNo.value =  rtnList[4];	//거래처코드
    // ed_reqEmpNo.hidVal = rtnList[0];   // 히든값

    ed_reqEmpNo.setValue(rtnList[0]); // 사원코드
    ed_reqEmpNm.setValue(rtnList[1]); // 사원명
    scwin.txt_reqAcctDeptCd = rtnList[2]; // 부서코드
    ed_reqAcctDeptNm.setValue(rtnList[3]); // 부서명
    scwin.txt_clntNo = rtnList[4]; // 거래처코드
    scwin.ed_reqEmpNo_hidVal = rtnList[0]; // 히든값
  } else {
    ed_reqEmpNo.setValue(""); // 사원코드
    ed_reqEmpNm.setValue(""); // 사원명
    scwin.txt_reqAcctDeptCd = ""; // 부서코드
    ed_reqAcctDeptNm.setValue(""); // 부서명
    scwin.txt_clntNo = ""; // 거래처코드
    scwin.ed_reqEmpNo_hidVal = ""; // 히든값
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 신청자 focus out
//-------------------------------------------------------------------------
scwin.udc_reqEmpNo_onblurCodeEvent = function (e) {
  // <!-- 공통코드 -->
  // language=JavaScript for=ed_reqEmpNo event=OnKillFocus()>
  console.log("  신청자 focus out : ed_reqEmpNo [" + ed_reqEmpNo.getValue().trim() + "] ed_reqEmpNo_hidVal [" + scwin.ed_reqEmpNo_hidVal + "]");

  // if ( ed_reqEmpNo.getValue().trim() == scwin.ed_reqEmpNo_hidVal )
  if (ed_reqEmpNo.getValue().trim() == scwin.ed_reqEmpNo_hidVal) {
    if (ed_reqEmpNo.getValue() != "") return;
  }
  ed_reqEmpNm.setValue("");
  scwin.txt_reqAcctDeptCd = "";
  ed_reqAcctDeptNm.setValue("");
  scwin.txt_clntNo = "";
  if (ed_reqEmpNo.getValue().trim() != "") scwin.f_openPopUp('1', 'T');
};

//-------------------------------------------------------------------------
// 환율 focus out
//-------------------------------------------------------------------------
scwin.ed_exchRt_onblur = async function (e) {
  // <!--  환율 focus out -->
  // language=JavaScript for=ed_exchRt event=OnKillFocus()>

  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_amtFcrc]);
    $c.gus.cfEnableObjects($p, [ed_amt]);
    // ed_amt.text = ed_exchRt.text.trim();
    ed_amt.setValue(ed_exchRt.getValue().trim());
    return;
    //ed_amt.focus();
  }

  // var changeExchRt = ds_pre.nameValue(1, "exchRt");
  // ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ed_exchRt.text.trim());

  var changeExchRt = ds_pre.get("exchRt");
  var temp_amtFcrc = Math.floor(ed_amtFcrc.getValue().trim() * ed_exchRt.getValue().trim());
  console.log("  -- -- changeExchRt [" + changeExchRt + "]  temp_amtFcrc [" + temp_amtFcrc + "] ");
  ed_amt.setValue(temp_amtFcrc);
  // if (!cfCheckExchRt(checkExchRt, changeExchRt))	// 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
  let rtn1 = await $c.gus.cfCheckExchRt($p, checkExchRt, changeExchRt); // 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
  if (!rtn1) return; // 이 함수는 common.js에 위치해 있다.
};

//-------------------------------------------------------------------------
//  통화코드 변경시
//-------------------------------------------------------------------------
scwin.lc_crcCd_onchange = function (info) {
  console.log("  ----- lc_crcCd_onchange (통화코드 변경시)  -- --");
  scwin.crcCdChange();
};

//-------------------------------------------------------------------------
//  통화코드변경시
//-------------------------------------------------------------------------
scwin.crcCdChange = function () {
  console.log("=== crcCdChange");
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    console.log("  -- 원화 : " + ACConstants.KOREA_WON);
    $c.gus.cfDisableObjects($p, [ed_amtFcrc]);
    $c.gus.cfDisableObjects($p, [ed_exchRt]);
    $c.gus.cfEnableObjects($p, [ed_amt]);
    ed_exchRt.setValue(0);
    ed_amtFcrc.setValue(0);
    ed_amt.setValue(0);
    ed_amtFcrc.setStyle("ValidExp", "외화금액:no:maxLength=13");
    //ed_amt.focus();
  } else {
    console.log("  -- 원화 아님 : " + lc_crcCd.getValue());

    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    $c.gus.cfEnableObjects($p, [ed_exchRt]);
    ed_amtFcrc.setStyle("validExp", "외화금액:yes:notAllowed=0&maxLength=13"); // 0 이면 안됨

    ds_exchRtSearch.set("crcCd", lc_crcCd.getValue());
    ds_exchRtSearch.set("stdDt", ica_reqDt.getValue());
    var dcJSON = ds_exchRtSearch.getJSON();
    console.log("  *** ds_exchRtSearch : " + JSON.stringify(dcJSON));

    //        tr_exchRt.Post();
    $c.sbm.execute($p, sbm_exchRt);
    scwin.checkExchRt = ds_pre.get("exchRt"); //환율 부분 추가

    console.log("  -- scwin.checkExchRt : " + scwin.checkExchRt);
  }
};

//-------------------------------------------------------------------------
//  외화금액 변경시
//-------------------------------------------------------------------------
scwin.ed_amtFcrc_onblur = function (e) {
  console.log("  --- ed_amtFcrc_onblur (외화금액 변경시)");
  /*
  language=JavaScript for=ed_amtFcrc event=OnKillFocus()
  	ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ed_exchRt.text.trim());
  */
  //var sTotalCalorie = Number( ibxCal.getValue() ).toFixed(3);
  var amtRcrc = Number(ed_amtFcrc.getValue());
  var exchRt = Number(ed_exchRt.getValue()).toFixed(3);
  var calc = amtRcrc * exchRt;
  console.log("  외화금액 [" + amtRcrc + "] * 환율 [" + exchRt + "]  = 금액 [" + calc + "]");

  //    var calc  = Double.parseDouble(ed_amtFcrc.getValue()) * Double.parseDouble(ed_exchRt.getValue());
  ed_amt.setValue(calc);
  ds_pre.set("amt", calc);
};

// @@ ====== 저장-준비 ========================================================================= //

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  // 미사용
  console.log("=== f_HiddenCheck");
  if (str.getValue().trim() == "") return true;
  if (str.getValue().trim() != scwin.ed_reqEmpNo_hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("=== f_Validation");

  // if (!$c.gus.cfValidate([lc_susPayClsCd, ed_reqDt, ed_reqEmpNo, ed_amt, ed_setlIntendDt, ed_summary]))
  // let rtn = await $c.gus.cfValidate([lc_susPayClsCd, ica_reqDt, ed_reqEmpNo, ed_amt, ica_setlIntendDt, ed_summary]);
  let rtn = await $c.gus.cfValidate($p, [lc_susPayClsCd, ica_reqDt, ed_reqEmpNo, ica_setlIntendDt, ed_summary]);
  if (!rtn) {
    console.log("  cfValidate  오류");
    return false;
  }

  // 신청금액은(는) 1 이상으로 입력하십시오.
  // 신청금액:yes:minNumber=1&maxLength=13

  // 금액은 0 보다 작으면 안됩니다.
  if (ed_amt.getValue() <= 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "신청금액", "1"));
    return;
  }

  // 정리예정일자는 신청일자보다 크거나 같아야 한다.
  //if (!$c.gus.cfIsAfterDate(ed_reqDt.text.trim(), ed_setlIntendDt.text.trim())){
  if (!$c.gus.cfIsAfterDate($p, ica_reqDt.getValue(), ica_setlIntendDt.getValue())) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "정리예정일자", "신청일자"));
    ica_setlIntendDt.focus();
    return false;
  }
  return true;
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 발행 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save");
  /*
  	// 필수 입력 항목 중 빈 내용이 있다면
  	//if (!cfCheckMandatory())
  	//	return;
  	if(!f_HiddenCheck(ed_reqEmpNo,"신청자")) return false; 
  	// 체크		
  	if (!f_Validation())		return;
  */

  let ret = await scwin.f_HiddenCheck(ed_reqEmpNo, "신청자");
  if (!ret) {
    console.log("    -- f_HiddenCheck 오류");
    return false;
  }
  let ret2 = await scwin.f_Validation();
  if (!ret2) {
    console.log("    -- f_Validation 오류");
    return false;
  }

  //-----------------------------------------------------------------------------------------------------
  //------------------------------------- 환율부분 추가 ---------------------------------------------------
  //-----------------------------------------------------------------------------------------------------

  if (lc_susPayClsCd.getValue() != ACConstants.KOREA_WON) {
    var changeExchRt = ds_pre.get("exchRt");
    console.log("  checkExchRt [" + scwin.checkExchRt + "]  changeExchRt [" + changeExchRt + "]  ");
    if (!$c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt)) {
      // 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
      return;
    }
  } // 이 함수는 common.js 에 위치해 있다.
  //-----------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------

  // ds_pre  세팅

  // <C> Col=reqAcctDeptCd   Ctrl=txt_reqAcctDeptCd  Param=value 	  </C> 
  // <C> Col=clntNo   		Ctrl=txt_clntNo  		Param=value 	  </C>

  ds_pre.set("reqAcctDeptCd", scwin.txt_reqAcctDeptCd); // 전표귀속부서코드
  ds_pre.set("clntNo", scwin.txt_clntNo); // 거래처번호

  var dcJSON = ds_pre.getJSON();
  console.log(" ======================= ds_pre : " + JSON.stringify(dcJSON));
  let rtn = await $c.win.confirm($p, "발행하시겠습니까?");
  if (rtn) {
    //		tr_savePre.Action = "/ac.fi.gnrlaccount.slipmgnt.RequestSuspensePayableCMD.do";
    //		tr_savePre.Post();

    $c.sbm.execute($p, sbm_savePre);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_savePre_submitdone = function (e) {
  console.log("▷ sbm_savePre_submitdone ==================");
  /*
   language=JavaScript for=tr_savePre event=OnSuccess()>
      //cfAlertMsg(MSG_CM_INF_001);
      f_Header();
      if(ds_slipNo.NameValue(1,"slipNo") !=""){
  		cfShowSlipInfo(ds_slipNo.NameValue(1,"slipNo"));
  	}
  */
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    console.log("   --- tr_save - OnFail ");
    // $c.gus.cfShowError(tr_savePre);  // 
  } else {
    console.log("   --- tr_save - OnSuccess ");
    scwin.f_Header();
    if (ds_slipNo.getCellData(0, "slipNo") != "") {
      // 전표내역조회 오픈
      $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_prepay',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_susPayClsCd',style:'width: 270px;',submenuSize:'auto',search:'start',class:'',objType:'data',validExp:'신청계정:yes',allOption:'',chooseOption:'',ref:'data:ds_pre.susPayClsCd',mandatory:'true',title:'신청계정',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가지급금-일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선급금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가지급금-급여'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_reqDt',style:'',objType:'data',validExp:'신청일자:yes:date=YYYYMMDD',placeholder:' ',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_pre.reqDt',title:'신청일자',validCheck:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveEmpDeptClntInfopopup',selectID:'retrieveEmpDeptClntInfo',codeId:'ed_reqEmpNo',validTitle:'신청자',nameId:'ed_reqEmpNm',style:'',btnId:'btn_reqEmpNo',id:'udc_reqEmpNo','ev:onclickEvent':'scwin.udc_reqEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reqEmpNo_onblurCodeEvent',refDataCollection:'ds_pre',code:'reqEmpNo',name:'reqEmpNm',mandatoryCode:'true',allowCharCode:'0-9',objTypeCode:'data',maxlengthCode:'6',maxlengthName:'50',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{class:'',id:'ed_reqAcctDeptNm',placeholder:'',style:'width: 300px;',objType:'data',ref:'data:ds_pre.reqAcctDeptNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',id:'lc_crcCd',ref:'data:ds_pre.crcCd',style:'width: 150px;',submenuSize:'auto',objType:'data',validExp:'통화코드:yes',mandatory:'true',title:'통화코드','ev:onchange':'scwin.lc_crcCd_onchange',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:' tar',id:'ed_exchRt',placeholder:'',style:'width: 117px;',objType:'data',maxlength:'13',dataType:'float',displayFormat:'#,###.##',ref:'data:ds_pre.exchRt',title:'환율','ev:onblur':'scwin.ed_exchRt_onblur'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amtFcrc',placeholder:'',style:'width: 270px;',maxlength:'13',objType:'data',validExp:'외화금액:yes:notAllowed=0&maxLength=13',allowChar:'0-9',displayFormat:'#,##0.00',dataType:'float',ref:'data:ds_pre.amtFcrc',title:'외화금액','ev:onblur':'scwin.ed_amtFcrc_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_amt',placeholder:'',style:'width: 270px;',objType:'Data',validExp:'신청금액:yes:minNumber=1&maxLength=13',minlength:'1',maxlength:'13',mandatory:'true',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',ref:'data:ds_pre.amt',title:'신청금액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정리예정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_setlIntendDt',style:'',objType:'data',validExp:'정리예정일:yes:date=YYYYMMDD',placeholder:' ',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_pre.setlIntendDt',title:'정리예정일',validCheck:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_summary',placeholder:'',style:'ime-mode:active;',objType:'Data',validExp:'적요:yes:maxByteLength=100',mandatory:'true',ref:'data:ds_pre.summary',maxlength:'162',title:'적요'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_ctrtPrint',label:'발행',style:'',userAuth:'U','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]}]})