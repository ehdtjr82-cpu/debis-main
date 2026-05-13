/*amd /ui/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_02_01b.xml 24823 9da0892182dedfc49e3932b4a6d117a657b62bbb0ae565037bfd70b2a92a7ae6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prepay',saveRemovedData:'true','ev:ondataload':'scwin.ds_prepay_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkId',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeStDtm',name:'마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeEndDtm',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDesc',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDd',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNo',name:'오류번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_prepay',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_prepay","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_prepay_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_prepayCost',action:'/ac.fi.gnrlaccount.prepaycostmgnt.ProcessPrepayCostAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_prepayCost_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteLongPrepayCost',action:'/ac.fi.gnrlaccount.prepaycostmgnt.DeleteLongPrepayCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_search", "key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_deleteLongPrepayCost_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_202_02_01b
// 이름     : 선급비용집계/전표처리
// 경로     : 재무회계/일반회계/선급비용관리/
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

scwin.txtCoClsCd = ""; // 회사구분

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
    // f_Header();
    scwin.f_setCompanyInfo(); //자회사여부

    // KYU_TEST : 자회사 상관없이 회사코드는 비활성
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
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
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  ds_search.set("coCd", scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회(마감로그목록)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) {
    return false;
  }

  // if ( ica_closeYm.getValue() == "" ) {
  //     $c.win.alert(MSG_CM_ERR_002,"회계연월");
  // }

  var condition = "?closeYm=" + ica_closeYm.getValue().trim() + "&closeDd=00&mgntNo=0" + "&coCd=" + ed_coCd.getValue();
  condition += "&wrkNo=" + ACConstants.CLOSE_PREPAY_COST;

  // ds_prepay.DataID = "/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do" + condition;
  // ds_prepay.Reset();

  sbm_prepay.action = "/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do" + condition;
  $c.sbm.execute($p, sbm_prepay);
};

//-------------------------------------------------------------------------
// 조회(마감로그목록) submitdone
//-------------------------------------------------------------------------
scwin.sbm_prepay_submitdone = async function (e) {
  console.log("▷ sbm_prepay_submitdone");

  // language=JavaScript for=ds_prepay event=OnLoadCompleted(rowCnt)>
  // cfHideDSWaitMsg(gr_prepay);
  // cfShowTotalRows(totalRows, rowCnt);

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var rowCnt = ds_prepay.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  gr_prepay.setFocusedCell(0, 0);
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
//  데이타셋 정렬
//-------------------------------------------------------------------------
scwin.ds_prepay_ondataload = function () {
  // <object id="ds_prepay" classid="<%=DGauceCLSID.DATASET%>">
  // <param name=SortExpr value=+opntAcctCd>

  // KYU_TEST
  ds_prepay.sort("opntAcctCd", 0); // 상대계정코드 - CloseLogInformationDTOAliasResultMap 에 없음
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
  // 							,ed_coCd.text, txt_coNm.value
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);
  // udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc
  // 							,ed_coCd.getValue(), ed_coNm.getValue()
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);
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

    // ed_coCd.text = rtnList[0];	// 코드
    // txt_coNm.value = rtnList[5]; // 회사명
    // txtCoClsCd.value =rtnList[1];	// 회사구분
    // coCd = ed_coCd.text;
    // coClsCd = rtnList[1];	// 회사구분

    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
    scwin.vCoCd = ed_coCd.getValue();
    scwin.vCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    scwin.txtCoClsCd = ""; // 회사구분
    scwin.vCoCd = "";
    scwin.vCoClsCd = "";
  }

  // KYU_TEST : 자회사에 따른 구분동작이 없으므로 무의미함
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
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
// 선급비용계산내역조회 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_RetrieveDetail = async function (e) {
  console.log("=== f_RetrieveDetail (선급비용계산내역조회)");
  let ret = await $c.gus.cfValidate($p, [ica_closeYm]);
  if (!ret) return false;

  // var valueObject = new Object();
  // valueObject.closeYm = ed_closeYm.text.trim();

  // //상세화면 호출
  // var result = window.showModalDialog("fi_202_02_02p.jsp", valueObject,
  //           "dialogWidth:1030px; dialogHeight:540px; status:no; scroll:no");

  // 선급비용집계내역조회
  let data = {
    closeYm: ica_closeYm.getValue().trim()
  };
  console.log("  선급비용집계내역조회 data [" + JSON.stringify(data) + "]");
  let win_url = "/ui/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_02_02p.xml";
  let opts = {
    id: "smpPop",
    popupName: "선급비용집계내역조회",
    modal: true,
    type: "browserPopup",
    width: 1030,
    height: 720,
    title: "선급비용집계내역조회"
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 선급비용계산 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_PrepayCost = async function (e) {
  console.log("=== f_PrepayCost (선급비용계산)");
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) return false;

  // 마감체크
  // if (!scwin.f_JobCloseYN())
  let rtn1 = await scwin.f_JobCloseYN();
  if (!rtn1) return false;
  let rtn2 = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "선택하신 선급비용계산"));
  if (rtn2) {
    // 리턴 처리
    // ds_search.UseChangeInfo = false;
    // tr_prepayCost.Post();

    var dcJSON = ds_search.getJSON();
    console.log("  *** ds_search : " + JSON.stringify(dcJSON));
    $c.sbm.execute($p, sbm_prepayCost);
  }
};

//-------------------------------------------------------------------------
// 선급비용계산 submitdone
//-------------------------------------------------------------------------
scwin.sbm_prepayCost_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <script language=JavaScript for=tr_prepayCost event=OnSuccess()>
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다"); // 성공적으로삭제하였습니다
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  console.log("=== f_JobCloseYN (마감체크)");

  // KYU_SKIP  2025-12-05 : cfJobCloseYN 개발전까지
  // return true;

  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  // var isClose = cfJobCloseYN("CUR",ed_closeYm.text.trim(),"00",'<%=ACConstants.CLOSE_PREPAY_COST%>',"0","","",ed_coCd.text);
  // var isClose = await $c.gus.cfJobCloseYN("CUR",ica_closeYm.getValue().trim(),"00",ACConstants.CLOSE_PREPAY_COST,"0","","",ed_coCd.getValue());

  var isClose = await udc_closeYn.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00", ACConstants.CLOSE_PREPAY_COST, "0", "", "");
  // var isClose = await $c.gus.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00",ACConstants.CLOSE_PREPAY_COST,"0","","",ed_coCd.getValue());

  console.log("  선급비용계산  isClose [" + isClose + "]");
  if (isClose == "0") {
    await $c.gus.cfAlertMsg($p, "마감중입니다.");
    return false;
  } else if (isClose == "2") {
    await $c.gus.cfAlertMsg($p, "마감완료가 되었습니다");
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 유동성대체전표삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_deleteLongPrepayCost = async function (e) {
  console.log("=== f_deleteLongPrepayCost (유동성대체전표삭제)");
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);

  // KYU_SKIP  2025-12-05 : cfJobCloseYN 개발전까지
  ret = true;
  if (!ret) return false;

  // 전월 마감체크
  // if (!scwin.f_JobCloseYN2())
  let rtn1 = await scwin.f_JobCloseYN2();
  if (!rtn1) return false;
  let rtn = await $c.win.confirm($p, "유동성대체전표를 삭제하시겠습니까");
  if (rtn) {
    // 리턴 처리
    // ds_search.UseChangeInfo = false;
    // tr_deleteLongPrepayCost.Post();

    var dcJSON = ds_search.getJSON();
    console.log("  *** ds_search : " + JSON.stringify(dcJSON));
    $c.sbm.execute($p, sbm_deleteLongPrepayCost);
  }
};

//-------------------------------------------------------------------------
// 유동성대체전표삭제 submitdone
//-------------------------------------------------------------------------
scwin.sbm_deleteLongPrepayCost_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=tr_deleteLongPrepayCost event=OnSuccess()>
  await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다"); // 성공적으로삭제하였습니다
};

//-------------------------------------------------------------------------
// 마감체크 2
//-------------------------------------------------------------------------
scwin.f_JobCloseYN2 = async function () {
  console.log("=== f_JobCloseYN2 (마감체크 2)");

  // KYU_SKIP  2025-12-05 : cfJobCloseYN 개발전까지
  // return true;

  // var isClose = cfJobCloseYN("CUR",ed_closeYm.text.trim(),"00",'<%=ACConstants.CLOSE_PREPAY_COST%>',"0","","",ed_coCd.text);
  // var isClose = $c.gus.cfJobCloseYN("CUR",ica_closeYm.getValue().trim(),"00",ACConstants.CLOSE_PREPAY_COST,"0","","",ed_coCd.getValue());
  var isClose = await udc_closeYn.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00", ACConstants.CLOSE_PREPAY_COST, "0", "", "");
  console.log("  유동성대체전표삭제  isClose [" + isClose + "]");
  if (isClose != "2") {
    await $c.gus.cfAlertMsg($p, "마감완료후 삭제가 가능합니다.");
    return false;
  } else {
    return true;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',allowCharCode:'0-9',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계연월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',displayFormat:'yyyy/MM',objType:'data',mandatory:'true',ref:'data:ds_search.closeYm',title:'회계연월'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_prepay',id:'gr_prepay',style:'',visibleRowNum:'17',visibleRowNumFix:'true',rowNumHeaderValue:'순번',rowNumVisible:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작업자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'시작일시',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'종료일시',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작업설명',width:'400'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'오류번호',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkId',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeStDtm',inputType:'text',style:'',value:'',width:'110',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeEndDtm',inputType:'text',style:'',value:'',width:'110',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDesc',inputType:'text',style:'',value:'',width:'400',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'errNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link white',id:'btn_retrieveDetail',style:'',type:'button','ev:onclick':'scwin.f_RetrieveDetail',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용계산내역조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link white',id:'btn_prepayCost',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_PrepayCost'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용계산'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link white',id:'btn_deleteLongPrepayCost',style:'',type:'button','ev:onclick':'scwin.f_deleteLongPrepayCost'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성대체전표삭제'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; visibility:hidden;',id:'udc_closeYn'}}]}]}]}]}]})