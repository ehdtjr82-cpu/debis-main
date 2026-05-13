/*amd /ui/ac/fi/taxbiz/withhold/fi_311_01_01b.xml 41408 719464532f8eb72a477ecda6fa95b84fab837a55bb8362dc28b6ad9f2754e079 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regYn',name:'등록여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oGDS_result_list',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_oGDS_result_list_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withholdNo',name:'원천세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStaff',name:'총인원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmWorkDdCnt',name:'월근무일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totSal',name:'총급여',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxnTrgtSal',name:'과세대상급여',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'incomeTax',name:'소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'manTax',name:'주민세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveWithholdCheckCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_oGDS_result_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oGDS_result_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ac.fi.taxbiz.withhold.UpdateWithholdCheckCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_oGDS_result_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_311_01_01b
// 이름     : 원천세내역근무지수정
// 경로     : 재무회계/세무/원천세/
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
scwin.txtCoClsCd = "";
scwin.txt_SaveType = "";
scwin.ed_coCd_hidVal = ""; // 회사코드 히든
scwin.ed_acctDeptCd_hidVal = ""; // 귀속부서 히든

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.editYn = 0;
scwin.isSubCompany = false; // 자회사여부

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

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // f_createHeader();
    scwin.f_Setting();
    // setWorkSiteCdHeader();
    $c.gus.cfDisableBtn($p, [btn_Save]);
    // lc_regYn.BindColVal = <%=DGlobalValue.ALL%>;
    lc_regYn.setValue(-1); // 전체
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Setting
// function desc : 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  var thisYm = $c.date.getServerDateTime($p, "yyyyMM");
  ica_closeYm.setValue(thisYm);
  ica_closeYm.focus();
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
  ed_coCd.setValue(scwin.vCoCd);
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  // }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회(원천세내역근무지수정)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // ds_search.UseChangeInfo = false; // 매번 조회 하도록 한다.

  // KYU_NEW : 회사코드 점검 추가
  // if (!cfValidate([ed_closeYm])) return false;
  // let ret = await $c.gus.cfValidate([ica_closeYm]);
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) return false;

  // tr_retrieve.Action = "/ac.fi.taxbiz.withhold.RetrieveWithholdCheckCMD.do";
  // tr_retrieve.Post();

  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(원천세내역근무지수정) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    ed_totalRows.setValue(0);
    return;
  }

  // <script language=JavaScript for=oGDS_result_list event=OnLoadCompleted(rowcnt)>
  // 	cfHideDSWaitMsg(gr_user);
  // cfShowTotalRows(totalRows, rowcnt);
  rowCnt = ds_oGDS_result_list.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    // KYU_NEW
    return;
  }
  // cfRefreshMandSign();
  // oGDS_result_list.ResetStatus();
  ds_oGDS_result_list.modifyAllStatus("R");
  if (rowCnt != 0) {
    for (var i = 0; i < rowCnt; i++) {
      if (ds_oGDS_result_list.getCellData(i, "workSiteNm") == "" && ds_oGDS_result_list.getCellData(i, "workSiteCd") != "") {
        // scwin.f_AutoClntPopUp(i); // 거래처팝업

        console.log(" 근무지 팝업 [" + i + "]  근무지코드 [" + ds_oGDS_result_list.getCellData(i, "workSiteCd") + "]  근무지명 [" + ds_oGDS_result_list.getCellData(i, "workSiteNm") + "]");
        scwin.f_openClntPopUp();
      }
    }
  }

  // KYU_NEW
  // $c.gus.cfDisableBtn([]);
  $c.gus.cfEnableBtnOnly($p, [btn_Save]);
};

// @@ ====== 그리드 / DS ======================================================================= //

scwin.ds_oGDS_result_list_onrowpositionchange = function (info) {
  var oldValue = info.oldIndex;
  var newValue = info.newIndex;
  // language=JavaScript for=oGDS_result_list event=OnRowPosChanged(row)>
  // if (row > 0) f_SetHidVal();
  if (newValue > 0) scwin.f_SetHidVal();
};

//-------------------------------------------------------------------------
// function name : f_SetHidVal
// function desc : 코드검증 Hidden 값 설정
//-------------------------------------------------------------------------
scwin.f_SetHidVal = function () {
  var row = ds_oGDS_result_list.getRowPosition();
  scwin.ed_acctDeptCd_hidVal = ds_oGDS_result_list.getCelllData(row, "acctDeptCd"); //귀속부서
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("======= f_Save (저장) =======");

  // var vUserRowStatus = oGDS_result_list.RowStatus(oGDS_result_list.RowPosition);
  var vUserRowStatus = ds_oGDS_result_list.getRowStatus(ds_oGDS_result_list.getRowPosition());

  // if(oGDS_result_list.IsUpdated==false){
  if (ds_oGDS_result_list.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let rtn = await $c.win.confirm($p, "저장하시겠습니까?");
  if (rtn) {
    // tr_update.Action = "/ac.fi.taxbiz.withhold.UpdateWithholdCheckCMD.do";
    // tr_update.Post();
    $c.sbm.execute($p, sbm_update);
    scwin.editYn = 1;
  }
};

//-------------------------------------------------------------------------
// 수정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_update_submitdone = async function (e) {
  console.log("▷ sbm_update_submitdone (수정 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language="JavaScript" for="tr_update" event="OnSuccess()">
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

// @@ ====== 이벤트 - 팝업 ======================================================================//

//-------------------------------------------------------------------------
// 그리드셀 클릭시 (GRID 근무지 팝업) : 미사용
//-------------------------------------------------------------------------
scwin.gr_user_oncellclick = function (rowIndex, columnIndex, columnId) {
  // console.log("----- gr_user_oncellclick ("+ rowIndex +",  "+ columnIndex +") "+ds_oGDS_result_list.getColumnID(columnIndex));

  // 불필요 삭제
  // let retText = {inputType : "text"};
  // let retTextImage= {inputType : "textImage", options : {imageClickFunction:"scwin.gr_user_ontextimageclick(rowIndex, columnIndex)"} };

  // if  ( ds_oGDS_result_list.getColumnID(columnIndex) == "workSiteCd" ) {
  //     gr_user.setCellInputType(rowIndex, "workSiteCd", retTextImage);

  //     scwin.gr_user_ontextimageclick(rowIndex, columnIndex);
  // }
};

//-------------------------------------------------------------------------
// 그리드 팝업 (이미지 클릭)
//-------------------------------------------------------------------------
scwin.gr_user_ontextimageclick = function (rowIndex, columnIndex) {
  // 2026-03-27 : [관통] 팝업 띄웠을 때 코드값 옮겨지도록 함
  var temp_workSiteCd = ds_oGDS_result_list.getCellData(rowIndex, "workSiteCd");
  let Colid = gr_user.getColumnID(columnIndex);
  if (Colid == "workSiteCd") {
    scwin.f_openClntPopUp(temp_workSiteCd);
  }
};

//-------------------------------------------------------------------------
// function name : f_openClntPopUp
// function desc : GRID 근무지 팝업
//-------------------------------------------------------------------------
scwin.f_openClntPopUp = function (str) {
  // var rtnList = new Array();
  var param = "";
  param = param + "1," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 수정사항 : form안에 있는 회사코드를 파라미터로 이용함

  console.log("  GRID 근무지 pop  param [" + param + "]");

  // rtnList = cfCommonPopUp("retrieveWorkSiteInfo",'','',"T",null,null,null,null,param,null,null,null,null);
  udc_comCode_Grid.setSelectId("retrieveWorkSiteInfo");

  // 2026-03-27 : [관통] 팝업 띄웠을 때 코드값 옮겨지도록 하였으나 하나만 계속 나옴. 기존에도 옮겨가지 않음.
  udc_comCode_Grid.cfCommonPopUp(scwin.workSiteCd_callBackFun, '', '', "T", null, null, null, null, param, null, null, null, null);
  // udc_comCode_Grid.cfCommonPopUp(scwin.workSiteCd_callBackFun,str,'',"T",null,null,null,null,param,null,null,null,null);
};

//-------------------------------------------------------------------------
// GRID 근무지조회 callBackFunc
//-------------------------------------------------------------------------
scwin.workSiteCd_callBackFun = function (rtnList) {
  console.log("▲ workSiteCd_callBackFun (GRID 근무지조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  var rowIdx = gr_user.getFocusedRowIndex(); // 현재 포커스된(선택된) 행 인덱스

  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    // repClntRowPosi = ds_oGDS_result_list.getRowPosition();

    ds_oGDS_result_list.setCellData(rowIdx, "workSiteCd", rtnList[0]); //근무지코드
    ds_oGDS_result_list.setCellData(rowIdx, "workSiteNm", rtnList[1]); //근무지명
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
  scwin.f_upperAcctCdPopUp('F');
};

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
  // <!-- 귀속부서  validation -->
  // language=JavaScript for=txt_acctDeptCd event=OnKillFocus()>
  if (scwin.f_IsPopUp(ed_acctDeptCd, ed_acctDeptNm, '3')) scwin.f_upperAcctCdPopUp('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  console.log("=== f_PopUpCompanyInfo ( pWinCloseTF[ " + pWinCloseTF + " ]");

  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // ,ed_coCd.text, txt_coNm.value
  // ,pWinCloseTF,null,null,null,null
  // ,null,null,null,null,null);
  // udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc
  // 							,ed_coCd.getValue(), ed_coNm.getValue()
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);

  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

//-------------------------------------------------------------------------
// function name : f_upperAcctCdPopUp
// function desc : 귀속부서코드팝업 (3)
//-------------------------------------------------------------------------
scwin.f_upperAcctCdPopUp = function (check) {
  var param = $c.date.getServerDateTime($p, "yyyyMMdd");
  param = param + "," + ed_coCd.getValue() + ",";
  console.log("  귀속부서pop  param [" + param + "]");
  var paramArray = new Object();
  paramArray.pSelectID = "retrieveAcctDeptCdInfo6";
  paramArray.pCode = ed_acctDeptCd.getValue();
  paramArray.pName = ed_acctDeptNm.getValue();
  paramArray.pWhere = param;

  // var rtnList = f_PopUp(paramArray);
  scwin.f_PopUp(paramArray, '3', check);
};

//-------------------------------------------------------------------------
// function name : f_PopUp  @@
// function desc : 팝업
//   flag - 3:귀속부서
//-------------------------------------------------------------------------
scwin.f_PopUp = function (paramArray, flag, check) {
  console.log("=== f_PopUp ( flag[ " + flag + " ]  check[ " + check + " ]  3:귀속부서)");
  var codeObj = paramArray.pCode;
  var nameObj = paramArray.pName;

  // var rtnList = cfCommonPopUp(paramArray.pSelectID, cfGetValue(codeObj), ""
  // 							,f_EventCheck(), paramArray.pDispCnt
  // 							,paramArray.pTitle, paramArray.pWidth
  // 							,paramArray.pHidden, paramArray.pWhere
  // 							,paramArray.pW, paramArray.pH
  // 							,paramArray.pTop, paramArray.pLeft
  // 							,paramArray.pExistTF, paramArray.pAllSearchTF
  // 							,paramArray.pWtitleSearch)

  switch (flag) {
    case '3':
      // 관리귀속부서
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), "", check //"F"  // ,scwin.f_EventCheck()
      , paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
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
// 귀속부서 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_acctDeptCd_callBackFunc (귀속부서 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctDeptCd, ed_acctDeptNm, rtnList, '3');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//   3:귀속부서
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  3:귀속부서)");

  // if (rtnList != null ) {
  // 	if (rtnList[0] != "N/A") {
  // 		cfSetValue(codeObj,rtnList[0]);
  // 		codeObj.hidVal = rtnList[0];
  // 		cfSetValue(nameObj,rtnList[1]);
  // 	}
  // } else {
  // 	cfSetValue(codeObj,"");
  // 	codeObj.hidVal = "";
  // 	cfSetValue(nameObj,"");
  // }
  // return rtnList;

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '3':
        scwin.ed_acctDeptCd_hidVal = rtnList[0];
        break;
      // 귀속부서
      default:
        break;
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '3':
        scwin.ed_acctDeptCd_hidVal = "";
        break;
      // 귀속부서
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_IsPopUp
// function desc : 팝업 여부 검사
//-------------------------------------------------------------------------
//   3:귀속부서
scwin.f_IsPopUp = function (strCd, strNm, flag) {
  console.log("===== f_IsPopUp (팝업 여부 검사  strCd[" + strCd.getValue() + "]  strNm[" + strNm.getValue() + "]  flag[" + flag + "]  3:귀속부서");

  // var inValue = $c.gus.cfGetValue(inObj);
  // var hidValue = inObj.hidVal;

  // if (cfIsNull(inValue)) {
  if (strCd.getValue() == "" || strCd.getValue() == null) {
    // inObj.hidVal = "";
    // 히든값 초기화
    switch (flag) {
      case '3':
        scwin.ed_acctDeptCd_hidVal = "";
        break;
      // 귀속부서
      default:
        break;
    }
    strNm.setValue("");
    // for (var i=1; i < f_IsPopUp.arguments.length; i++) {
    // 	cfSetValue(f_IsPopUp.arguments[i],"");
    // }
    console.log("  strCd is null :  return false");
    return false;
  }
  // if (inValue == hidValue)
  else {
    if (flag == '3' && strCd.getValue().trim() == scwin.ed_acctDeptCd_hidVal)
      // 귀속부서
      {
        console.log("  strCd 가 널이 아닌 상태로 히든과 동일하면 false :  return false");
        return false;
      }
  }
  return true;
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 적용년월 focus out
//-------------------------------------------------------------------------
scwin.ica_closeYm_onblur = function (e) {
  // <!-- 적용년월 변경시 발생한다. -->
  //language=JavaScript for=ed_FromDate event=onKillFocus()>
  // scwin.f_LoadVer();  // 코딩 없음!
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// function name : f_userToExcel
// function desc : Excel 다운로드
//-------------------------------------------------------------------------
scwin.f_userToExcel = async function () {
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";

  // gr_user.SetExcelTitle(1, "value:원천세내역근무지및근무일수;"     // 표시할 타이틀
  // 						+ "font-face:'돋움체';" // 폰트
  // 						+ "font-size:16pt;"    // 폰트 크기
  // 						+ "font-color:black;"  // 폰트 색깔
  // 						+ "bgcolor:#ffffff;"   // 배경 색깔
  // 						+ "align:center;"      // 정렬
  // 						+ "line-color:white;"  // 타이틀 부분 테두리선 색깔
  // 						+ "line-width:0pt;"    // 타이틀 테두리선 굵기
  // 						+ "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // var vDay = "조회일자 : "+"<%=strCurDate%>";
  // gr_user.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  // //sheet명, 저장파일명,     저장 다이얼로그
  // cfGridToExcel(gr_user, "원천세내역근무지및근무일수조회LIST", "원천세내역근무지및근무일수조회LIST.xls", 4+8+16);

  if (ds_oGDS_result_list.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = '원천세내역근무지및근무일수조회LIST';
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      // type: "1",
      // headerColor: "#eeeeee", //"#E8E8E8", //연한회색 #33CCCC
      startRowIndex: 3,
      startColumnIndex: 0,
      bodyWordwrap: true // 줄바꿈
    };
    //그리드에 대한 내용을 추가 옵션

    var today = "조회일자 | " + $c.date.getServerDateTime($p, "yyyyMMdd");
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 18 /* 병합할 컬럼갯수 */,
      text: "원천세내역근무지및근무일수",
      textAlign: "center",
      drawBorder: false,
      fontSize: "16px"
    }, {
      rowIndex: 2,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 18,
      text: today,
      textAlign: "left",
      drawBorder: false,
      fontSize: "10px",
      fontName: "굴림체"
    }];
    $c.data.downloadGridViewExcel($p, gr_user, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',mandatory:'true',ref:'data:ds_search.payDt','ev:onblur':'scwin.ica_closeYm_onblur',displayFormat:'yyyy/MM',title:'지급년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'귀속부서',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',refDataCollection:'ds_search',code:'acctDeptCd',name:'acctDeptNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지코드등록여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regYn',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.regYn',title:'근무지코드등록여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_userToExcel',gridID:'gr_user'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oGDS_result_list',focusMode:'cell',id:'gr_user',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_user_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'거래처명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'귀속부서명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'계정명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'근무지명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'근무지코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'귀속부서코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'지급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'원천세번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'총인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'월근무일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'총급여',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'과세대상급여',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column42',value:'적요',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'200',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'200',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSiteNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSiteCd',inputType:'textImage',style:'',value:'',width:'120',textAlign:'center',readOnly:'true',viewType:'icon'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'withholdNo',value:'',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totStaff',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mmWorkDdCnt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totSal',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'taxnTrgtSal',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'incomeTax',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'manTax',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:udc_comCode',A:{'ev:onclickEvent':'scwin.udc_pchsItemCd_onclickEvent',codeId:'ed_Cd',selectID:'',code:'gridCode',popupID:'',validTitle:'',name:'gridCodeNm',nameId:'',style:'width:250px;visibility:hidden;',id:'udc_comCode_Grid',btnId:'btn_comCode_Grid'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'crtrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})