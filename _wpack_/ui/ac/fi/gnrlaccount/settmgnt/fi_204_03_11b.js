/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_11b.xml 38606 f806a7448f4b25cc4fd6ed15df1f5e415da090ebd3c54f5fdc36fde3117f7f8b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchMonthCostResult'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'preCloseYm',name:'결산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'preCloseYm2',name:'결산년월2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdOrigin',name:'회계부서코드Origin',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'귀속부서레벨',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_monthCostResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pamt',name:'일반금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'camt',name:'조정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ypamt',name:'일반금액(누계)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ycamt',name:'조정금액(누계)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'yamt',name:'실적금액(누계)',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveMonthEachPrimeCostResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchMonthCostResult","key":"IN_DS1"},{"id":"ds_monthCostResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_monthCostResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCommon',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchCommon_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_204_03_11b
// 이름     : 월별원가실적조회
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
// 레포트   :
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

scwin.isSubCompany = false;
scwin.txtCoCd = ""; // 회사코드
scwin.txtCoClsCd = ""; // 회사구분

scwin.ed_sacctDeptCd_hidVal = ""; // HIDDEN 코드값
scwin.ed_sacctDeptNm_hidVal = ""; // HIDDEN 코드명  

scwin.hid_fromDate = "";
scwin.txt_preCloseYm = "";
scwin.txt_preCloseYm2 = "";
scwin.wrkNo = ""; // 작업구분코드
scwin.fromDate = ""; // 작업날짜

scwin.unitAmt = 1; // 단위변경 금액 (0 으로 주면 NaN 발생)

scwin.isStarted = false; // 최초 이벤트 시에 메시지 방지

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
    grpCd: "CO012",
    compID: "lc_unit"
  } // 단위
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
    ica_fromDate.setValue($c.date.getServerDateTime($p, "yyyyMM"));
    scwin.hid_fromDate = ica_fromDate.getValue();
    $c.gus.cfDisableKey($p);
    lc_unit.setSelectedIndex(1);
    scwin.isStarted = true; // 단위 변경시 이벤트 통제 : 이제부턴 조회 이벤트 실행

    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 초기화 버튼
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  // KYU_TEST : 하위포함만 초기화
  // scwin.ed_sacctDeptCd_hidVal = "";  // HIDDEN 코드값
  // scwin.ed_sacctDeptNm_hidVal = "";  // HIDDEN 코드명

  // cfInitObjects(table1,[ed_FromDate,ed_sacctDeptCd,ed_sacctDeptNm])

  // $c.gus.cfInitObjects(searchTable,[ica_fromDate,ed_sacctDeptCd,ed_sacctDeptNm]);
  // 2026-01-29 : 결함에 의한 삭제
  // $c.gus.cfInitObjects([ica_fromDate,ed_sacctDeptCd,ed_sacctDeptNm]);
  // $c.gus.cfInitObjects(searchTable);

  cbx_lowerDeptIncluYn.checkAll(false);
};

//-------------------------------------------------------------------------
// 실적부서를 구한다.
//-------------------------------------------------------------------------
scwin.f_GetRsltsDept = async function () {
  console.log("=== f_GetRsltsDept (실적부서 조회 - 셀렉트 박스)");

  // 조회조건 필수사항 체크
  // if (!$c.gus.cfValidate([ica_fromDate,ed_sacctDeptCd])) {
  let rtn = await $c.gus.cfValidate($p, [ica_fromDate, ed_sacctDeptCd]);
  if (!rtn) return;
  if (ica_fromDate.getValue().length < 6) {
    await $c.win.alert($p, "결산년도는 6자리수만큼 입력하십시오.");
    ica_fromDate.focus();
    return false;
  }

  // ds_dept.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ManagementProfitAndLossEBC" +
  // 				 "&queryId=retrievePlanComparisonResultsAcctDept" +
  // 				 "&param1=" + ed_sacctDeptCd.text.trim() +
  // 				 "&param2=" + ed_FromDate.text.trim() +
  // 				 "&param3=" + ds_searchMonthCostResult.NameValue(ds_searchMonthCostResult.RowPosition,"lowerDeptIncluYn") +
  // 				 "&param4=" + ds_searchMonthCostResult.NameValue(ds_searchMonthCostResult.RowPosition,"acctDeptLvl") ;	
  // ds_dept.Reset();

  const strParam = {
    sysCd: "ManagementProfitAndLossEBC" // 시스템코드
    ,
    queryId: "retrievePlanComparisonResultsAcctDept" // 쿼리ID
    ,
    param1: ed_sacctDeptCd.getValue().trim(),
    param2: ica_fromDate.getValue().trim(),
    param3: ds_searchMonthCostResult.get("lowerDeptIncluYn"),
    param4: ds_searchMonthCostResult.get("acctDeptLvl")
  };
  console.log(" strParam [" + JSON.stringify(strParam) + "]");

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  $c.sbm.execute($p, sbm_searchCommon);
};

//-------------------------------------------------------------------------
// 실적부서 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_searchCommon_submitdone = function (e) {
  console.log("▷ sbm_searchCommon_submitdone (실적부서 조회 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_dept.setJSON(e.responseJSON.GAUCE);
  }
  var ds_deptCnt = ds_dept.getTotalRow();
  console.log("  -- -- ds_dept (실적부서 조회) 건수 : " + ds_deptCnt);

  // language=JavaScript for=ds_dept event=OnLoadCompleted(rowCnt)>
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  console.log("=== f_Setting (날짜셋팅)");
  var imsi_date = ica_fromDate.getValue().trim() + "01";
  scwin.txt_preCloseYm = imsi_date.toDate().after(0, -1, 0).format("YYYYMM");
  scwin.txt_preCloseYm2 = scwin.txt_preCloseYm.substring(4, 6);
  console.log("    txt_preCloseYm [" + scwin.txt_preCloseYm + "]  txt_preCloseYm2 [" + scwin.txt_preCloseYm2 + "]");
};

//-------------------------------------------------------------------------
// 실적부서 변경
//-------------------------------------------------------------------------
scwin.lc_acctDeptCd_onchange = function (info) {
  console.log("----- lc_acctDeptCd_onchange (실적부서 변경)");
  // <!-- 실적부서 LuxeCombo -->
  // language=JavaScript for=lc_acctDeptCd event=OnCloseUp()>
  if ($c.gus.cfIsNull($p, lc_acctDeptCd.getValue())) return;
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 (월별원가실적조회)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!$c.gus.cfValidate([ica_fromDate,ed_sacctDeptCd])) {
  let rtn = await $c.gus.cfValidate($p, [ica_fromDate, ed_sacctDeptCd]);
  if (!rtn) return;

  // if ( ica_fromDate.getValue().length < 6 ) {
  //     await $c.win.alert("결산년도는 6자리수만큼 입력하십시오.");
  //     ica_fromDate.focus();
  //     return false;
  // }

  // 귀속부서로 조회 할 경우
  // if ( ed_sacctDeptCd.Text.trim() != "" ) {
  // 	ds_searchMonthCostResult.NameString(ds_searchMonthCostResult.RowPosition, "acctDeptCd") = lc_acctDeptCd.BindColVal;
  // } 

  // 귀속부서로 조회 할 경우
  if (ed_sacctDeptCd.getValue().trim() != "") {
    // KYU_TEST : acctDeptCdOrigin 추가 - 조회 부서 유지한 채 조회만 하위부서로 함
    ds_searchMonthCostResult.set("acctDeptCd", lc_acctDeptCd.getValue());
  }
  scwin.f_Setting();
  //alert(ds_searchMonthCostResult.text);
  // tr_searchMonthCostResult.Post();

  // <C> Col=closeYm                   Ctrl=ed_FromDate                   Param=Text        </C> <!-- 결산년월 -->
  // <C> Col=preCloseYm                Ctrl=txt_preCloseYm                Param=value       </C> <!-- 결산년월 -->
  // <C> Col=preCloseYm2               Ctrl=txt_preCloseYm2               Param=value       </C> <!-- 결산년월 -->
  // <C> Col=acctDeptCd                Ctrl=ed_acctDeptCd                 Param=text        </C> <!-- 부서 -->
  // <C> Col=acctDeptNm                Ctrl=txt_acctDeptNm                Param=value       </C> <!-- 부서명 -->
  // <C> Col=lowerDeptIncluYn          Ctrl=chk_lowerDeptIncluYn          Param=checked     </C> <!-- 하위부서포함여부 -->

  ds_searchMonthCostResult.set("preCloseYm", scwin.txt_preCloseYm);
  ds_searchMonthCostResult.set("preCloseYm2", scwin.txt_preCloseYm2);
  // KYU_NEW
  // ds_searchMonthCostResult.set("acctDeptCd", lc_acctDeptCd.getValue());  // 부서코드로 연결

  var dcJSON = ds_searchMonthCostResult.getJSON();
  console.log("  *** ds_searchMonthCostResult : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 (월별원가실적조회) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var temp = ds_monthCostResult.getRowCount();
  ed_totalRows.setValue(temp);
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 단위 변경
//-------------------------------------------------------------------------
scwin.lc_unit_onchange = function (info) {
  console.log("----- lc_unit_onchange (단위 변경)");
  // <!-- 단위 선택시 화면에 단위 변경 -->
  // language=JavaScript for=lc_unit event=OnCloseUp()>

  scwin.f_changeUnit();
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnit = function () {
  if (lc_unit.getValue() == "01") {
    // 원
    // scwin.f_changeUnitAmt(1);
    scwin.unitAmt = 1;
  } else if (lc_unit.getValue() == "02") {
    // 천원
    // scwin.f_changeUnitAmt(1000);
    scwin.unitAmt = 1000;
  } else if (lc_unit.getValue() == "03") {
    // 백만원
    // scwin.f_changeUnitAmt(1000000);
    scwin.unitAmt = 1000000;
  } else if (lc_unit.getValue() == "04") {
    // 억
    // scwin.f_changeUnitAmt(100000000);
    scwin.unitAmt = 100000000;
  }

  // KYU_NEW
  // OnLoad 시의 지정은 이벤트 제외
  if (scwin.isStarted == true) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 금액을 변경한다
//-------------------------------------------------------------------------
scwin.f_changeUnitAmt = function (val) {
  if (val == 0) return "-0"; // 0 이면 -0 표현
  // if ( val <  0 ) return val ;  // 음수이면 그냥 표현

  let ret = Math.round(parseInt(val) / scwin.unitAmt);

  // console.log("  vat ["+vat+"]   ret ["+ret+"]");

  // 음수 처리 :
  //   60 만 / 원     양수 60만, 음수 -60만
  //   60 만 / 1000   양수 600 , 음수 -600
  //   60 만 / 백만   양수 1, 음수 -1
  //   60 만 / 1억    양수 0, 음수 -0  (엑셀 양수 0, 음수 0)

  // 음수의 round 가 0 이면 -0 으로 표현
  if (val < 0) {
    if (ret == 0) return "-0";
  }

  // if ( ret == 0 ) {
  //     return "-0";  // 금액이 0 이면 -0 표현
  // } else {
  return $c.num.formatNumber($p, ret);
  // }

  // gr_monthCostResult.ColumnProp("amt","value") = "{Round(amt/"+unitAmt+")}";
  // gr_monthCostResult.ColumnProp("camt","value") = "{Round(camt/"+unitAmt+")}";
  // gr_monthCostResult.ColumnProp("pamt","value") = "{Round(pamt/"+unitAmt+")}";
  // gr_monthCostResult.ColumnProp("yamt","value") = "{Round(yamt/"+unitAmt+")}";
  // gr_monthCostResult.ColumnProp("ycamt","value") = "{Round(ycamt/"+unitAmt+")}";
  // gr_monthCostResult.ColumnProp("ypamt","value") = "{Round(ypamt/"+unitAmt+")}";
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 부서코드 focus out
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_onblurCodeEvent = function (e) {
  console.log("----- udc_sacctDeptCd_onblurCodeEvent (부서코드)");

  // <!-- 귀속부서코드  -->
  // <script language=JavaScript for=ed_sacctDeptCd event=OnKillFocus()>
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 부서명 focus out
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_onblurNameEvent = function (e) {
  console.log("----- udc_sacctDeptCd_onblurNameEvent (부서명)");

  // <!-- 귀속부서명 -->
  // <script language=JavaScript for=ed_sacctDeptNm event=OnKillFocus()>
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.  @@
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  console.log("=== f_openPopUp  orgObjCd[" + orgObjCd + "] orgObjNm[" + orgObjNm + "] select_code[" + select_code + "] flag[" + flag + "]");

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출(물류 귀속부서만 POPUP에 포함)
    case '1':
      var param = "";
      if (scwin.isSubCompany) {
        // 자회사인 경우   
        param = ",,,," + scwin.vCoCd + "," + scwin.vCoClsCd;
      }
      console.log("  부서popup  param [" + param + "]");

      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo2',cd, nm,"T",null,null,null,null,param,"450","500",null,null); // 귀속부서
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 귀속부서

      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 부서조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_sacctDeptCd_callBackFunc (부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      scwin.ed_sacctDeptCd_hidVal = ""; // HIDDEN 코드값
      scwin.ed_sacctDeptNm_hidVal = ""; // HIDDEN 코드명    
      return;
    }

    // KYU_TEST : dim TEST
    // await scwin.test();

    ds_searchMonthCostResult.set("acctDeptLvl", rtnList[6]);
  } else {
    // X 로 닫음
    // scwin.ed_sacctDeptCd_hidVal = "";  // HIDDEN 코드값
    // scwin.ed_sacctDeptNm_hidVal = "";  // HIDDEN 코드명

    ds_searchMonthCostResult.set("acctDeptLvl", 0);
  }
  console.log("  acctDeptLvl : " + ds_searchMonthCostResult.get("acctDeptLvl"));
  scwin.f_resultPopUp(ed_sacctDeptCd, ed_sacctDeptNm, rtnList);
};

// KYU_TEST : dim 처리
scwin.test = async function () {
  await $c.win.alert($p, "TEST !!");
  await $c.gus.cfAlertMsg($p, "TEST !!!!");
  let rtn = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, "선택하신 데이타"));
  // return;
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (ed_coCd, ed_coNm, rtnList) {
  console.log("===== f_resultPopUp (팝업결과)  ed_coCd[" + ed_coCd + "] ed_coNm[" + ed_coNm + "] rtnList[" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_coCd.setValue(""); // 코드값
      ed_coNm.setValue(""); // 코드명 
      scwin.ed_sacctDeptCd_hidVal = ""; // HIDDEN 코드값
      scwin.ed_sacctDeptNm_hidVal = ""; // HIDDEN 코드명    

      return;
    }

    // orgObjCd.Text = rtnList[0];	// 코드값
    // orgObjNm.Text = rtnList[1];	// 코드명
    // orgObjCd.hidVal = rtnList[0];	// HIDDEN 코드값
    // orgObjNm.hidVal = rtnList[1];	// HIDDEN 코드명

    ed_coCd.setValue(rtnList[0]); // 코드값
    ed_coNm.setValue(rtnList[1]); // 코드명 
    scwin.ed_sacctDeptCd_hidVal = rtnList[0]; // HIDDEN 코드값
    scwin.ed_sacctDeptNm_hidVal = rtnList[1]; // HIDDEN 코드명

    ds_searchMonthCostResult.set("acctDeptLvl", rtnList[6]);

    // KYU_TEST : 하위부서 선택시 조회 부서 유지
    ds_searchMonthCostResult.set("acctDeptCd", rtnList[0]);
  } else {
    // orgObjCd.Text = "";
    // orgObjNm.Text = "";
    // orgObjCd.hidVal = "";
    // orgObjNm.hidVal = "";

    ed_coCd.setValue(""); // 코드값
    ed_coNm.setValue(""); // 코드명 
    scwin.ed_sacctDeptCd_hidVal = ""; // HIDDEN 코드값
    scwin.ed_sacctDeptNm_hidVal = ""; // HIDDEN 코드명    

    ds_searchMonthCostResult.set("acctDeptLvl", 0);

    // KYU_TEST : 하위부서 선택시 조회 부서 유지
    ds_searchMonthCostResult.set("acctDeptCd", "");
  }
  console.log("  acctDeptLvl : " + ds_searchMonthCostResult.get("acctDeptLvl"));
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD : 코드변경이 없으면 POPUP안뛰움
//          NM : 무조건 POPUP뛰움
// select_code : 구분 (1: 부서)
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  console.log("===== f_checkPopEd (팝업체크)  orgObjCd[" + orgObjCd.getValue() + "] orgObjNm[" + orgObjNm.getValue() + "] select_code[" + select_code + "] flag[" + flag + "]");
  console.log("        ed_sacctDeptCd_hidVal [" + scwin.ed_sacctDeptCd_hidVal + "]  ed_sacctDeptNm_hidVal [" + scwin.ed_sacctDeptNm_hidVal + "]");
  if (flag == "CD") {
    // if (orgObjCd.Text == orgObjCd.hidVal) {
    if (select_code == '1' && ed_sacctDeptCd.getValue() == scwin.ed_sacctDeptCd_hidVal // 부서코드
    ) {
      if (ed_sacctDeptCd.getValue() != "") return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    // if (orgObjNm.Text == orgObjNm.hidVal) {
    if (select_code == '1' && ed_sacctDeptNm.getValue() == scwin.ed_sacctDeptNm_hidVal // 부서명
    ) {
      if (ed_sacctDeptNm.getValue() != "") return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim()); // 의미없음
      orgObjNm.setValue(orgObjNm.getValue().trim()); // 의미없음

      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    // orgObjCd.hidVal = "";
    switch (select_code) {
      case '1':
        scwin.ed_sacctDeptCd_hidVal = "";

        // KYU_NEW : 히든이름도 지워야 함
        scwin.ed_sacctDeptNm_hidVal = "";
        break;
      // 부서코드
      default:
        break;
    }
  }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  console.log("=== f_Export");

  // var objGridName = eval("gr_monthCostResult");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	var exportFileName = "월별원가실적조회_" + ed_sacctDeptNm.Text.trim() + "_"+ed_FromDate.Text.trim();	
  // 	cfGridToExcel(objGridName, "월별원가실적조회",exportFileName,8+16);
  // }

  if (ds_monthCostResult.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var exportFileName = "월별원가실적조회_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_fromDate.getValue().trim();
  var sheetTitle = '월별원가실적조회';
  console.log(" exportFileName : " + exportFileName);
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: exportFileName + ".xlsx",
      sheetName: sheetTitle
      // type: "1",
      // headerColor: "#eeeeee", //"#E8E8E8", //연한회색 #33CCCC
      // startRowIndex: 2
    };
    $c.data.downloadGridViewExcel($p, gr_monthCostResult, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_fromDate',style:'',displayFormat:'yyyy/MM',ref:'data:ds_searchMonthCostResult.closeYm',objType:'data',title:'결산년도',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo2popup',selectID:'retrieveAcctDeptCdInfo2',codeId:'ed_sacctDeptCd',validTitle:'부서',nameId:'ed_sacctDeptNm',style:'',id:'udc_sacctDeptCd',btnId:'btn_sacctDeptCd','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent',maxlengthCode:'5',maxlengthName:'50',objTypeName:'data',objTypeCode:'data',allowCharCode:'0-9',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_sacctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sacctDeptCd_onblurNameEvent',refDataCollection:'ds_searchMonthCostResult',code:'acctDeptCdOrigin',name:'acctDeptNm',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lowerDeptIncluYn',ref:'data:ds_searchMonthCostResult.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_GetRsltsDept',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctDeptCd',style:'width: 150px;',submenuSize:'fixed',sortMethod:'ascending',sortOption:'value',ref:'','ev:onchange':'scwin.lc_acctDeptCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_dept'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Export',gridID:'gr_monthCostResult',gridDownUserAuth:'X',id:'udc_gridMain'}},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위 ',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_unit',class:'',direction:'auto','ev:onchange':'scwin.lc_unit_onchange'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_monthCostResult',focusMode:'cell',id:'gr_monthCostResult',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'일반금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'조정금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'실적금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'일반금액(누계)',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'조정금액(누계)',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'실적금액(누계)',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'prtAcctNm',inputType:'text',style:'',value:'',width:'180',class:'ws-pre',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pamt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormatter:'scwin.f_changeUnitAmt',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'camt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayFormatter:'scwin.f_changeUnitAmt',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayFormatter:'scwin.f_changeUnitAmt',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ypamt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayFormatter:'scwin.f_changeUnitAmt',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ycamt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayFormatter:'scwin.f_changeUnitAmt',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yamt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayFormatter:'scwin.f_changeUnitAmt',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'pamt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'camt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'ypamt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'ycamt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'yamt\')',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})