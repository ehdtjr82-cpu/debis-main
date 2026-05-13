/*amd /ui/ac/fi/taxbiz/withhold/fi_310_01_01b.xml 74244 1006a044820b44602735a4d6cd3796085f272ed266b371d6ddc2054dd5bbf2d5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_oGDS_search_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workSiteCd',name:'근무지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workSiteNm',name:'근무지명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oGDS_result_list',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_oGDS_result_list_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withholdDofficeCd',name:'원천세구청코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구청명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctDeptCd',name:'관리귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWorkSiteYn',name:'대표근무지여부(1:대표)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizTaxAggrPatternCd',name:'사업소세집계유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizTaxAggrExceptYn',name:'사업소세집계제외여부(1:제외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outWorkSiteYn',name:'국외근무지여부(1:국외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsNm',name:'회사구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxNo',name:'팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'적용종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withholdDofficeNm',name:'원천세구청명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcctDeptNm',name:'자산귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'checkLevel',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveWithholdWorkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oGDS_search_cond","key":"IN_DS1"},{"id":"ds_oGDS_result_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oGDS_result_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.CreateWorkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_oGDS_result_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/cm/fw/constants/DGlobalValue.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_310_01_01b
// 이름     : 근무지(사업장)등록
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

scwin.txt_userClsCd = "";
scwin.txt_countRow = "";
scwin.txt_SaveType = "";
scwin.txtCoClsCd = "";
scwin.editYn = 0;
scwin.ed_coCd_cond_hidVal = ""; // 회사코드(조회) 히든  ed_coCd.hidVal
scwin.ed_coCd_hidVal = ""; // 회사코드(입력) 히든  txt_coCd.hidVal
scwin.ed_withholdDofficeCd_hidVal = ""; // 원천세신고구청 히든
scwin.ed_mgntAcctDeptCd_hidVal = ""; // 관리귀속부서 히든

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
    grpCd: "FI089",
    compID: "lc_bizTaxAggrPatternCd"
  } // 사업소세집계유형
  , {
    grpCd: "CO035",
    compID: "lc_coClsCd"
  } // 회사구분
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
    // f_createHeader();
    scwin.f_ContentsDisable();
    scwin.f_ToggleImgBtn(false);
    // lc_srchUseYn_excep.setValue( DGlobalValue.ALL );  // -1
    lc_srchUseYn_excep.setValue(-1); // -1

    $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save]);
    console.log("  ==-== 활성 ( 수정,취소,저장 )");
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
  console.log("=== f_setCompanyInfo");

  // 사용자 구분이 자회사('SA')인 경우
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }

  // ed_coCd.text = vLoginCoCd;
  ed_coCd.setValue(scwin.vLoginCoCd);

  // KYU_NEW : 회사코드를 넣어야 T 가 적용됨
  ed_coCd_cond.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T', '1');

  // KYU_ORDER : 팝업 콜백으로 이동 - f_enableCompanyInfo 다중 실행 가능
  // scwin.f_enableCompanyInfo();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 enable 처리
//-------------------------------------------------------------------------
scwin.f_enableCompanyInfo = function () {
  if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    // cfEnableObjects([ed_coCd,txt_coNm,img_company1 ]);
    $c.gus.cfEnableObjects($p, [ed_coCd_cond, ed_coNm_cond, btn_coCd_cond]);
    console.log("  ==-== 활성 ( 회사코드(입력) )");
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd_cond, ed_coNm_cond, btn_coCd_cond]);
    console.log("  ==-== 비활성 ( 회사코드(입력) )");
  }
};

//-------------------------------------------------------------------------
// function name : f_ContentsEnable
// function desc : 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  console.log("=== f_ContentsEnable");
  $c.gus.cfEnableKeyData($p);

  // cfEnableObj(txt_workSiteCd, true);
  // cfEnableObj(txt_workSiteNm, true);
  // cfEnableObj(txt_withholdDofficeCd, true);
  // cfEnableObj(txt_dofficeNm, true);
  // cfEnableObj(txt_mgntAcctDeptCd, true);
  // cfEnableObj(txt_acctDeptNm, true);
  // cfEnableObj(txt_repWorkSiteYn, true);
  // cfEnableObj(txt_bizTaxAggrPatternCd, true);
  // cfEnableObj(txt_bizTaxAggrExceptYn, true);
  // cfEnableObj(txt_outWorkSiteYn, true);
  // cfEnableObj(txt_coCd, true);
  // cfEnableObj(txt_coClsNm, true);
  // cfEnableObj(txt_coClsCd, true);
  // cfEnableObj(txt_zip, true);
  // cfEnableObj(txt_addr1, true);
  // cfEnableObj(txt_addr2, true);
  // cfEnableObj(txt_telNo, true);
  // cfEnableObj(txt_faxNo, true);
  // cfEnableObj(txt_adptStDt, true);
  // cfEnableObj(txt_adptEndDt, true);
  // cfEnableObj(lc_srchUseYn, true);

  $c.gus.cfEnableObj($p, ed_workSiteCd, true);
  $c.gus.cfEnableObj($p, ed_workSiteNm, true);
  $c.gus.cfEnableObj($p, ed_withholdDofficeCd, true);
  $c.gus.cfEnableObj($p, ed_dofficeNm, true);
  $c.gus.cfEnableObj($p, ed_mgntAcctDeptCd, true);
  $c.gus.cfEnableObj($p, ed_acctDeptNm, true);
  $c.gus.cfEnableObj($p, chk_repWorkSiteYn, true);
  $c.gus.cfEnableObj($p, lc_bizTaxAggrPatternCd, true);
  $c.gus.cfEnableObj($p, chk_bizTaxAggrExceptYn, true);
  $c.gus.cfEnableObj($p, chk_outWorkSiteYn, true);
  $c.gus.cfEnableObj($p, ed_coCd, true);
  $c.gus.cfEnableObj($p, ed_coClsNm, true);
  $c.gus.cfEnableObj($p, lc_coClsCd, true);
  $c.gus.cfEnableObj($p, ed_zip, true);
  $c.gus.cfEnableObj($p, ed_addr1, true);
  $c.gus.cfEnableObj($p, ed_addr2, true);
  $c.gus.cfEnableObj($p, ed_telNo, true);
  $c.gus.cfEnableObj($p, ed_faxNo, true);
  $c.gus.cfEnableObj($p, ed_adptStDt, true);
  $c.gus.cfEnableObj($p, ed_adptEndDt, true);
  $c.gus.cfEnableObj($p, lc_srchUseYn, true);
};

//-------------------------------------------------------------------------
// function name : f_ContentsDisable
// function desc : 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  console.log("=== cfDisableKeyData");
  $c.gus.cfDisableKeyData($p);

  // 아래는 f_ContentsEnable 과 동일
  $c.gus.cfEnableObj($p, ed_workSiteCd, false);
  $c.gus.cfEnableObj($p, ed_workSiteNm, false);
  $c.gus.cfEnableObj($p, ed_withholdDofficeCd, false);
  $c.gus.cfEnableObj($p, ed_dofficeNm, false);
  $c.gus.cfEnableObj($p, ed_mgntAcctDeptCd, false);
  $c.gus.cfEnableObj($p, ed_acctDeptNm, false);
  $c.gus.cfEnableObj($p, chk_repWorkSiteYn, false);
  $c.gus.cfEnableObj($p, lc_bizTaxAggrPatternCd, false);
  $c.gus.cfEnableObj($p, chk_bizTaxAggrExceptYn, false);
  $c.gus.cfEnableObj($p, chk_outWorkSiteYn, false);
  $c.gus.cfEnableObj($p, ed_coCd, false);
  $c.gus.cfEnableObj($p, ed_coClsNm, false);
  $c.gus.cfEnableObj($p, lc_coClsCd, false);
  $c.gus.cfEnableObj($p, ed_zip, false);
  $c.gus.cfEnableObj($p, ed_addr1, false);
  $c.gus.cfEnableObj($p, ed_addr2, false);
  $c.gus.cfEnableObj($p, ed_telNo, false);
  $c.gus.cfEnableObj($p, ed_faxNo, false);
  $c.gus.cfEnableObj($p, ed_adptStDt, false);
  $c.gus.cfEnableObj($p, ed_adptEndDt, false);
  $c.gus.cfEnableObj($p, lc_srchUseYn, false);
};

//-------------------------------------------------------------------------
// function name : f_ToggleImgBtn
// function desc : 이미지 버튼의 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_ToggleImgBtn = function (mode) {
  console.log("=== f_ToggleImgBtn (컴포넌트 버튼 활성/비활성)");
  if (mode == true) {
    //Enable
    // cfEnableObjects([img_withholdDoffice, img_upperAcctDept, img_zip, img_company]);
    $c.gus.cfEnableObjects($p, [btn_withholdDoffice, btn_upperAcctDept, btn_zip, btn_company]);
    console.log("  ==-== 활성 ( 원천세신고구청,관리귀속부서,우편번호,회사코드입력 의 돋보기)");
  } else {
    //Disable
    $c.gus.cfDisableObjects($p, [btn_withholdDoffice, btn_upperAcctDept, btn_zip, btn_company]);
    console.log("  ==-== 비활성 ( 원천세신고구청,관리귀속부서,우편번호,회사코드입력 의 돋보기)");
  }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 근무지 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!cfValidate([ed_coCd]))
  let ret = await $c.gus.cfValidate($p, [ed_coCd_cond]);
  if (!ret) return false;

  // oGDS_search_cond.UseChangeInfo = false; // 매번 조회 하도록 한다.

  // tr_retrieve.Action = "/ac.fi.taxbiz.withhold.RetrieveWithholdWorkListCMD.do";
  // tr_retrieve.Post();

  var dcJSON = ds_oGDS_search_cond.getJSON();
  console.log("  *** ds_oGDS_search_cond : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(근무지 조회) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    ed_totalRows.setValue(ds_oGDS_result_list.getTotalRow());
    return;
  }

  // for=oGDS_result_list event=OnLoadCompleted(rowcnt)>
  // 	cfHideDSWaitMsg(gr_user);
  // cfShowTotalRows(totalRows, rowcnt);
  var rowcnt = ds_oGDS_result_list.getTotalRow();
  ed_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save]);
    console.log("  ==-== 비활성 ( 수정,취소,저장 )");
  } else if (rowcnt > 0) {
    scwin.f_ContentsDisable(); // 항목 Disable
    scwin.f_enableCompanyInfo();
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Cancel]);
    console.log("  ==-== 비활성 ( 저장,취소 )");
  }

  // cfRefreshMandSign();   // 오브젝트가 mandatory이면 mandatory 표시를 하고, 아니면 표시를 지운다 - 지원안함
  // ds_oGDS_result_list.ResetStatus();
  ds_oGDS_result_list.initRowStatus();
  gr_user.setFocusedCell(0, 0, true);
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드(조회) 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_cond_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', '1');
};

//-------------------------------------------------------------------------
// 회사코드(입력) 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', '2');
};

//-------------------------------------------------------------------------
// 원천세신고구청 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_withholdDofficeCd_onclickEvent = function (e) {
  scwin.f_dOfficeCdPopUp('F');
};

//-------------------------------------------------------------------------
// 관리귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntAcctDeptCd_onclickEvent = function (e) {
  scwin.f_upperAcctCdPopUp('F');
};

//-------------------------------------------------------------------------
// 우편번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.btn_zip_onclick = function (e) {
  scwin.f_openPopUp('F', '1');
};

//-------------------------------------------------------------------------
// function name : f_PopUpCompanyInfo
// function desc : 회사 입력 팝업  : 회사코드 이벤트 두개라서  상단,하단  파라미터로 넘김.
//  1:회사코드(조회),2:회사코드(입력)
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF, pType) {
  console.log("=== f_PopUpCompanyInfo ( pWinCloseTF[ " + pWinCloseTF + " ]  pType[ " + pType + " ]    1:회사코드(조회),2:회사코드(입력)))");
  if (pType == "1") {
    //상단 검색창 회사코드
    // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
    // 							,ed_coCd.text, txt_coNm.value
    // 							,pWinCloseTF,null,null,null,null
    // 							,null,null,null,null,null);
    // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19

    console.log("  -- 1");
    let pNoDataCloseTF = pWinCloseTF;
    udc_coCd_cond.cfCommonPopUp(scwin.udc_coCd_cond_callBackFunc, ed_coCd_cond.getValue(), ed_coNm_cond.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
  } else if (pType == "2") {
    //form 입력창 회사코드
    // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
    // 							,txt_coCd.text, txt_coClsNm.value
    // 							,pWinCloseTF,null,null,null,null
    // 							,null,null,null,null,null);
    // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19

    console.log("  -- 2");
    let pNoDataCloseTF = pWinCloseTF;
    udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coClsNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
  }
};

//-------------------------------------------------------------------------
// function name : f_dOfficeCdPopUp
// function desc : 구청팝업 (3)
//-------------------------------------------------------------------------
scwin.f_dOfficeCdPopUp = function (check) {
  console.log("=== f_dOfficeCdPopUp   check [" + check + "]");
  var paramArray = new Object();
  var param = "";

  // param = param+"1,"+ed_coCd.text+","+txtCoClsCd.value; //자회사 회계시스템 수정사항 : form안에 있는 회사코드를 파라미터로 이용함
  param = param + "1," + ed_coCd_cond.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 수정사항 : form안에 있는 회사코드를 파라미터로 이용함
  console.log("  구청 pop  param [" + param + "]");
  paramArray.pSelectID = "retrieveDOfficeCdInfo";
  paramArray.pCode = ed_withholdDofficeCd.getValue();
  paramArray.pName = ed_dofficeNm.getValue();
  paramArray.pWhere = param;

  //var rtnList = f_PopUp(paramArray);
  scwin.f_PopUp(paramArray, '3', check);
};

//-------------------------------------------------------------------------
// function name : f_upperAcctCdPopUp
// function desc : 관리부서코드팝업 (4)
//-------------------------------------------------------------------------
scwin.f_upperAcctCdPopUp = function (check) {
  console.log("=== f_upperAcctCdPopUp   check [" + check + "]");
  var param = ds_oGDS_result_list.getCellData(ds_oGDS_result_list.getRowPosition(), "acctDeptCd");
  param = param + ",,,," + ed_coCd_cond.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 수정사항 : form안에 있는 회사코드를 파라미터로 이용함
  console.log("  관리부서 pop  param [" + param + "]");
  var paramArray = new Object();
  paramArray.pSelectID = "retrieveAcctDeptCdInfo2";
  paramArray.pCode = ed_mgntAcctDeptCd.getValue();
  paramArray.pName = ed_acctDeptNm.getValue();
  paramArray.pWhere = param;

  // var rtnList = f_PopUp(paramArray);
  scwin.f_PopUp(paramArray, '4', check);
};

//-------------------------------------------------------------------------
// function name : f_PopUp  @@
// function desc : 팝업
//   flag - 3:원천세신고구청,4:관리귀속부서
//-------------------------------------------------------------------------
scwin.f_PopUp = function (paramArray, flag, check) {
  console.log("=== f_PopUp ( flag[ " + flag + " ] check[ " + check + " ]  3:원천세신고구청,4:관리귀속부서)");
  var codeObj = paramArray.pCode;
  var nameObj = paramArray.pName;

  // var rtnList = cfCommonPopUp(paramArray.pSelectID, cfGetValue(codeObj), ""
  // 					   ,f_EventCheck(), paramArray.pDispCnt
  // 					   ,paramArray.pTitle, paramArray.pWidth
  // 					   ,paramArray.pHidden, paramArray.pWhere
  // 					   ,paramArray.pW, paramArray.pH
  // 					   ,paramArray.pTop, paramArray.pLeft
  // 					   ,paramArray.pExistTF, paramArray.pAllSearchTF
  // 					   ,paramArray.pWtitleSearch)

  switch (flag) {
    case '3':
      // 원천세신고구청
      udc_withholdDofficeCd.cfCommonPopUp(scwin.udc_withholdDofficeCd_callBackFunc, ed_withholdDofficeCd.getValue(), "", check // "F" // ,scwin.f_EventCheck()
      , paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      break;
    case '4':
      // 관리귀속부서
      udc_mgntAcctDeptCd.cfCommonPopUp(scwin.udc_mgntAcctDeptCd_callBackFunc, ed_mgntAcctDeptCd.getValue(), "", check // "F"  // ,scwin.f_EventCheck()
      , paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : 우편번호팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (check, flag) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ] 1:우편번호)");
  var rtnList = new Array();
  // var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "",
  // 			"dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");

  // 우편번호팝업 호출 
  var data = {
    zip: ed_zip.getValue(),
    callbackFn: scwin.btn_zip_callBackFunc
  };
  let win_url = "/ui/cm/zz/newzipcodePopup.xml";
  let opts = {
    id: "smpPop",
    popupName: "우편번호팝업"
    // , modal : true
    ,
    type: "browserPopup" // 화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    width: 460 // "10px"
    ,
    height: 460 // "10px"
    ,
    title: "우편번호 검색"
  };
  var popupResult = await $c.win.openPopup($p, win_url, opts, data);

  // console.log(" popupResult ["+ JSON.stringify(popupResult) +"]" );

  // // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  // if (popupResult != null) {
  // 	// if (rtnList[0] == "N/A") return;

  // 	if(flag=="1"){
  // 		ed_zip.setValue( popupResult.zip );
  // 		ed_addr1.setValue( popupResult.addr1 );
  // 		ed_addr2.focus();
  // 	}else{
  // 		// em_busiZip.Text = popupResult.zip;  없슴 !
  // 		txt_busiAddr1.value = popupResult.addr1;
  // 		txt_busiAddr2.focus();
  // 	}
  // }
  // // 입력값이 없는경우 삭제
  // else{
  // 	if(flag=="1"){
  // 		ed_zip.setValue("");
  // 		ed_addr1.setValue("");
  // 	}else{
  // 		// em_busiZip.Text = "";   없슴 !
  // 		ed_busiAddr1.setValue("");
  // 	}
  // }
};

//-------------------------------------------------------------------------
// 우편번호(조회) callBackFunc
//-------------------------------------------------------------------------
scwin.btn_zip_callBackFunc = function (popupResult) {
  console.log("▲ btn_zip_callBackFunc (우편번호(조회) callBackFunc)");
  console.log("  콜백 popupResult [" + JSON.stringify(popupResult) + "]");

  // KYU_NEW
  var flag = "1";

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    // if (rtnList[0] == "N/A") return;

    if (flag == "1") {
      ed_zip.setValue(popupResult.zip);
      ed_addr1.setValue(popupResult.addr1);
      ed_addr2.focus();
    } else {
      // em_busiZip.Text = popupResult.zip;  없슴 !
      txt_busiAddr1.value = popupResult.addr1;
      txt_busiAddr2.focus();
    }
  }
  // 입력값이 없는경우 삭제
  else {
    if (flag == "1") {
      ed_zip.setValue("");
      ed_addr1.setValue("");
    } else {
      // em_busiZip.Text = "";   없슴 !
      ed_busiAddr1.setValue("");
    }
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   3:원천세신고구청,4:관리귀속부서

//-------------------------------------------------------------------------
// 회사코드(조회) callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_coCd_cond_callBackFunc = function (rtnList) {
  console.log("▲ udc_coCd_cond_callBackFunc (회사코드(조회) 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) scwin.f_initObj(); // 별다른 동작없슴

    // ed_coCd.text = rtnList[0];	// 코드
    // txt_coNm.value = rtnList[5]; // 회사명
    // ed_coCd.hidVal = rtnList[0];  // 히든값
    // txtCoClsCd.value =rtnList[1];	// 회사구분

    ed_coCd_cond.setValue(rtnList[0]); // 코드
    ed_coNm_cond.setValue(rtnList[5]); // 회사명
    scwin.ed_coCd_cond_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd_cond.setValue(""); // 코드
    ed_coNm_cond.setValue(""); // 회사명
    scwin.ed_coCd_cond_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }
  if (scwin.vLoginCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 (로그인한 사람이 동부이면 권한주었음..)
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }

  // KYU_ORDER : 팝업 콜백으로 이동 - f_enableCompanyInfo 다중 실행 가능
  scwin.f_enableCompanyInfo();
};
scwin.f_initObj = function () {};

//-------------------------------------------------------------------------
// 회사코드(입력) callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드(입력) 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;

    // txt_coCd.text = rtnList[0];	// 코드
    // txt_coClsNm.value = rtnList[5]; // 회사명
    // txt_coCd.hidVal = rtnList[0];  // 히든값
    // txt_coClsCd.BindColVal =rtnList[1];	// 회사구분

    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coClsNm.setValue(rtnList[5]); // 회사명
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    lc_coClsCd.setValue(rtnList[1]); // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coClsNm.setValue(""); // 회사명
    scwin.ed_coCd_hidVal = ""; // 히든값
  }
};

//-------------------------------------------------------------------------
// 원천세신고구청 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_withholdDofficeCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_withholdDofficeCd_callBackFunc (원천세신고구청 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_withholdDofficeCd, ed_dofficeNm, rtnList, '3');
};

//-------------------------------------------------------------------------
// 관리귀속부서 callBackFunc (4)
//-------------------------------------------------------------------------
scwin.udc_mgntAcctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_mgntAcctDeptCd_callBackFunc (관리귀속부서 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_mgntAcctDeptCd, ed_acctDeptNm, rtnList, '4');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//   3:원천세신고구청,4:관리귀속부서
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  3:원천세신고구청,4:관리귀속부서)");

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
        scwin.ed_withholdDofficeCd_hidVal = rtnList[0];
        break;
      // 원천세신고구청
      case '4':
        scwin.ed_mgntAcctDeptCd_hidVal = rtnList[0];
        break;
      // 관리귀속부서
      default:
        break;
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '3':
        scwin.ed_withholdDofficeCd_hidVal = "";
        break;
      // 원천세신고구청
      case '4':
        scwin.ed_mgntAcctDeptCd_hidVal = "";
        break;
      // 관리귀속부서
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_IsPopUp  @@
// function desc : 팝업 여부 검사
//-------------------------------------------------------------------------
//   3:원천세신고구청,4:관리귀속부서
scwin.f_IsPopUp = function (strCd, strNm, flag) {
  console.log("===== f_IsPopUp (팝업 여부 검사  strCd[" + strCd.getValue() + "]  strNm[" + strNm.getValue() + "]  flag[" + flag + "]  3:원천세신고구청,4:관리귀속부서");

  // var inValue = $c.gus.cfGetValue(inObj);
  // var hidValue = inObj.hidVal;

  // if (cfIsNull(inValue)) {
  if (strCd.getValue() == "" || strCd.getValue() == null) {
    // inObj.hidVal = "";
    // 히든값 초기화
    switch (flag) {
      case '3':
        scwin.ed_withholdDofficeCd_hidVal = "";
        break;
      // 원천세신고구청
      case '4':
        scwin.ed_mgntAcctDeptCd_hidVal = "";
        break;
      // 관리귀속부서
      default:
        break;
    }
    strNm.setValue("");
    // for (var i=1; i < f_IsPopUp.arguments.length; i++) {
    // 	cfSetValue(f_IsPopUp.arguments[i],"");
    // }

    console.log("  strCd is null :  return false");
    return false;
  } else {
    // strCd 가 널이 아닌 상태로 히든과 동일하면 false
    // if (inValue == hidValue)
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)

    if (flag == '3' && strCd.getValue().trim() == scwin.ed_withholdDofficeCd_hidVal ||
    // 원천세신고구청
    flag == '4' && strCd.getValue().trim() == scwin.ed_mgntAcctDeptCd_hidVal // 관리귀속부서
    ) {
      console.log("  strCd 가 널이 아닌 상태로 히든과 동일하면 false :  return false");
      // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
      if (strCd.getValue() != "") return false;
    }
  }
  console.log("  return true");
  return true;
};

// @@ ====== 이벤트 ============================================================================ //

scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 근무지코드 keypress
//-------------------------------------------------------------------------
scwin.ed_workSiteCd_param_onkeypress = function (e) {
  if (e.keyCode == 13) {
    // KYU_NEW
    ds_oGDS_search_cond.set("workSiteCd", ed_workSiteCd_param.getValue());
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 근무지명 keypress
//-------------------------------------------------------------------------
scwin.ed_workSiteNm_param_onkeypress = function (e) {
  if (e.keyCode == 13) {
    // KYU_NEW
    ds_oGDS_search_cond.set("workSiteNm", ed_workSiteNm_param.getValue());
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 회사코드(조회) focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_cond_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_coCd event=OnKillFocus()>
  ed_coNm_cond.setValue("");
  scwin.f_PopUpCompanyInfo('T', '1');
};

//-------------------------------------------------------------------------
// 회사코드(입력) focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // <!-- 회사코드 입력시  -->
  // language=JavaScript for=txt_coCd event=onKillFocus()>
  ed_coClsNm.setValue("");
  scwin.f_PopUpCompanyInfo('T', '2');
};

//-------------------------------------------------------------------------
// 원천세신고구청코드 focus out
//-------------------------------------------------------------------------
scwin.udc_withholdDofficeCd_onblurCodeEvent = function (e) {
  // <!-- 원천세신고구청  validation -->
  // language=JavaScript for=txt_withholdDofficeCd event=OnKillFocus()>
  // if (f_IsPopUp(txt_withholdDofficeCd, txt_dofficeNm)) f_dOfficeCdPopUp();
  if (scwin.f_IsPopUp(ed_withholdDofficeCd, ed_dofficeNm, '3')) {
    scwin.f_dOfficeCdPopUp('T');
  }
};

//-------------------------------------------------------------------------
// 관리귀속부서 focus out
//-------------------------------------------------------------------------
scwin.udc_mgntAcctDeptCd_onblurCodeEvent = function (e) {
  // <!-- 상위귀속부서  validation -->
  // language=JavaScript for=txt_mgntAcctDeptCd event=OnKillFocus()>
  // if (f_IsPopUp(txt_mgntAcctDeptCd, txt_acctDeptNm)) f_upperAcctCdPopUp();
  if (scwin.f_IsPopUp(ed_mgntAcctDeptCd, ed_acctDeptNm, '4')) {
    scwin.f_upperAcctCdPopUp('T');
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// ds_oGDS_result_list row changer
//-------------------------------------------------------------------------
scwin.ds_oGDS_result_list_onrowpositionchange = function (info) {
  console.log("----- ds_oGDS_result_list_onrowpositionchange");
  var oldValue = info.oldIndex;
  var newValue = info.newIndex;

  // language=JavaScript for=oGDS_result_list event=OnRowPosChanged(row)>
  if (newValue > 0) scwin.f_SetHidVal();
};

//-------------------------------------------------------------------------
// function name : f_SetHidVal
// function desc : 코드검증 Hidden 값 설정
//-------------------------------------------------------------------------
scwin.f_SetHidVal = function () {
  console.log("----- f_SetHidVal (코드검증 Hidden 값 설정)");
  var row = oGDS_result_list.getRowPosition();
  scwin.ed_mgntAcctDeptCd_hidVal = ds_oGDS_result_list.getCellData(row, "mgntAcctDeptCd"); //상위귀속부서
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_Addrow = function () {
  console.log("----- f_Addrow");
  // oGDS_result_list.AddRow();

  if (ds_oGDS_result_list.getTotalRow() <= 0) {
    ds_oGDS_result_list.insertRow();
    ds_oGDS_result_list.setRowPosition(0);
  } else {
    ds_oGDS_result_list.insertRow();
    console.log("  ds_oGDS_result_list.getRowPosition [" + ds_oGDS_result_list.getRowPosition() + "]");
    ds_oGDS_result_list.setRowPosition(ds_oGDS_result_list.getRowPosition());
  }

  // 주의 !! <조회부>의 근무지명을 초기화함
  ed_workSiteNm_param.setValue("");
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// function name : f_Create
// function desc : 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  console.log("=== f_Create (신규)");

  // cfDisableBtn([b_Create, b_Update]);
  // f_Addrow();
  // f_ContentsEnable();
  // cfDisableKey();
  // f_ToggleImgBtn(true);
  // cfEnableObj(txt_workSiteCd, false);
  // cfRefreshMandSign();

  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update]);
  console.log("  ==-== 비활성 ( 신규,수정 )");
  scwin.f_Addrow();
  var row = ds_oGDS_result_list.getTotalRow() - 1;
  console.log(" row [" + row + "]");
  ds_oGDS_result_list.setRowPosition(ds_oGDS_result_list.getTotalRow() - 1);

  // 그리드 포커싱
  gr_user.setFocusedCell(row, "workSiteCd", true);
  scwin.f_ContentsEnable();
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(true);
  $c.gus.cfEnableObj($p, ed_workSiteCd, false);

  // $c.gus.cfRefreshMandSign();  // 오브젝트가 mandatory이면 mandatory 표시를 하고, 아니면 표시를 지운다 (지원안함)

  // if(ed_coCd.text == "<%=ACConstants.CO_CD_DONGBU%>"){
  if (ed_coCd_cond.getValue() == ACConstants.CO_CD_DONGBU) {
    // 000
    // ed : 조회  txt : 입력
    // txt_coCd.Text =  '000';					//신규버튼 클릭시 회사코드 000 으로 초기화
    // txt_coClsNm.value = '동부EXPRESS';		//신규버튼 클릭시 회사명 동부EXPRESS 으로 초기화
    // txt_coClsCd.Index = 0;					//신규버튼 클릭시 회사구분 동부EXPRESS 으로 초기화

    ed_coCd.setValue('000'); //신규버튼 클릭시 회사코드 000 으로 초기화
    ed_coClsNm.setValue('동부EXPRESS'); //신규버튼 클릭시 회사명 동부EXPRESS 으로 초기화
    lc_coClsCd.setSelectedIndex(0); //신규버튼 클릭시 회사구분 동부EXPRESS 으로 초기화
  } else {
    // ed : 조회  txt : 입력
    // txt_coCd.Text = ed_coCd.text;
    // txt_coClsNm.value = txt_coNm.value;
    // txt_coClsCd.BindColVal = txtCoClsCd.value;

    // 회사코드(조회) 를 그대로 옮김
    ed_coCd.setValue(ed_coCd_cond.getValue());
    ed_coClsNm.setValue(ed_coNm_cond.getValue()); // 회사코드명(입력)
    lc_coClsCd.setValue(scwin.txtCoClsCd);
  }
  scwin.f_enableCompanyInfo();
  scwin.editYn = 1;
  lc_srchUseYn.setValue("0"); // 사용여부(입력) : 사용
  chk_repWorkSiteYn.checkAll(false); // 대표근무자여부  체크 해제
  chk_outWorkSiteYn.checkAll(false); // 국외근무지여부 체크 해제
  chk_bizTaxAggrExceptYn.checkAll(false); // 사업소세집계제외 체크 해제
};

//-------------------------------------------------------------------------
// function name : f_Update
// function desc : 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  console.log("======= f_Update (수정) =======");

  // cfDisableBtn([b_Create, b_Update]);
  // f_ContentsEnable();
  // cfDisableKey();
  // f_ToggleImgBtn(true);
  // cfEnableObj(txt_workSiteCd, false);
  // cfRefreshMandSign();
  // f_enableCompanyInfo();
  // editYn = 0;

  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update]);
  console.log("  ==-== 비활성 ( 신규,수정 )");
  scwin.f_ContentsEnable();
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(true);
  $c.gus.cfEnableObj($p, ed_workSiteCd, false); // 근무지코드
  // cfRefreshMandSign();
  scwin.f_enableCompanyInfo();
  scwin.editYn = 0;
};

//-------------------------------------------------------------------------
// function name : f_Save @@
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("======= f_Save (저장) =======");
  var vUserClsCd = ed_workSiteCd.getValue();
  var vUserRowStatus = ds_oGDS_result_list.getRowStatus(ds_oGDS_result_list.getRowPosition());
  console.log("  -- -- ds_oGDS_result_list [" + ds_oGDS_result_list.getRowPosition() + "] 상태 vUserRowStatus [" + vUserRowStatus + "]");

  // 근무지명 체크
  // if(WorkSiteNm.value.length == 0 ){
  if (ed_workSiteNm.getValue().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "근무지명"));
    // document.all.WorkSiteNm.focus();
    ed_workSiteNm.focus();
    return false; // ?
  }

  // 원천세 신고구청 체크
  if (ds_oGDS_result_list.getCellData(ds_oGDS_result_list.getRowPosition(), "checkLevel") != '0' && ed_withholdDofficeCd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "원천세신고구청"));
    ed_withholdDofficeCd.focus();
    return;
  }

  // 관리귀속부서 체크
  if (ds_oGDS_result_list.getCellData(ds_oGDS_result_list.getRowPosition(), "checkLevel") != '0' && ed_mgntAcctDeptCd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "관리귀속부서"));
    ed_mgntAcctDeptCd.focus();
    return;
  }

  //사업소세집계유형 체크
  // if(txt_bizTaxAggrPatternCd.ValueOfIndex("code",  txt_bizTaxAggrPatternCd.Index) == "" ){
  if (lc_bizTaxAggrPatternCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사업소세집계유형"));
    lc_bizTaxAggrPatternCd.focus();
    return false;
  }

  // 회사 코드 체크
  if (ds_oGDS_result_list.getCellData(ds_oGDS_result_list.getRowPosition(), "checkLevel") != '0' && ed_coCd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "회사코드"));
    ed_coCd.focus();
    return;
  }

  //회사구분 체크
  // if( txt_coClsCd.ValueOfIndex("code",  txt_coClsCd.Index) == "" ){
  if (lc_coClsCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사업소세집계유형"));
    lc_coClsCd.focus();
    return false;
  }

  // 시작, 종료일자 체크
  if (ed_adptStDt.getValue() == "" || ed_adptEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적용기간"));
    ed_adptStDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_adptStDt.getValue(), ed_adptEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  // if (!oGDS_result_list.IsUpdated) {
  if (ds_oGDS_result_list.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  } else {
    // 가우스    0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
    // 웹스퀘어  (R:초기상태, U:갱신, C:삽입, D:삭제, V:삽입 후 삭제)

    // if(vUserRowStatus==1)
    if (vUserRowStatus == "C") {
      scwin.txt_SaveType = "1";
    }
    // else if(vUserRowStatus==3)
    else if (vUserRowStatus == "U") {
      scwin.txt_SaveType = "3";
    }
    console.log("  txt_SaveType [" + scwin.txt_SaveType + "]");
    let rtn = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (rtn) {
      // 리턴 처리
      // tr_save.Action = "/ac.fi.taxbiz.withhold.CreateWorkListCMD.do";
      // tr_save.Post();

      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  console.log("▷ sbm_save_submitdone (저장 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!--  Query DataSet Event -->
  // for="tr_save" event="OnSuccess()">
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  var vSaveType = scwin.txt_SaveType;
  var vCountRow = ds_oGDS_result_list.getTotalRow();

  // 상태 R 처리
  ds_oGDS_result_list.modifyAllStatus("R");
  console.log("  -- -- vSaveType [" + vSaveType + "]");
  if (vSaveType == "1") {
    scwin.f_Retrieve();
  } else {
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Cancel, btn_Update]);
    console.log("  ==-== 비활성 ( 저장,취소,수정 )");
  }

  // KYU_TEST 서브미션을 완전히 종료한 뒤에 돌아야 함 !!
  //   cfDisableKeyData();
  //   f_ToggleImgBtn(false);
  //   f_ContentsDisable();
  //   f_enableCompanyInfo();
  //   cfDisableBtn([b_Save]);

  // disable 처리
  $c.gus.cfDisableKeyData($p);
  scwin.f_ToggleImgBtn(false);
  scwin.f_ContentsDisable();
  scwin.f_enableCompanyInfo();
  $c.gus.cfDisableBtn($p, [btn_Save]);
  console.log("  ==-== 비활성 ( 저장 )");
};

//-------------------------------------------------------------------------
// function name : f_Cancel
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  console.log("=== f_Cancel(취소)");

  // scwin.f_ToggleImgBtn(false);
  // $c.gus.cfDisableKeyData();
  // $c.gus.cfDisableBtn([btn_Save]);

  scwin.f_ToggleImgBtn(false);
  scwin.f_ContentsDisable();
  // cfRefreshMandSign();
  scwin.f_enableCompanyInfo();
  var vRowCount = scwin.txt_countRow; // 선언한 이후로 값 지정안함

  var vResultListPosition = ds_oGDS_result_list.getRowPosition();

  // ds_oGDS_result_list.Undo(vResultListPosition);
  $c.data.undoRow($p, ds_oGDS_result_list, "Y");
  if (vRowCount == "" || vRowCount == "0") {
    // 조회를 하지 않은 경우
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
    console.log("  ==-== 비활성 ( 취소,저장)");
  } else
    // 조회를 한 경우
    {
      $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
      console.log("  ==-== 비활성 ( 취소,저장)");
    }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// function name : f_userToExcel
// function desc : Excel 다운로드
//-------------------------------------------------------------------------
scwin.f_userToExcel = async function () {
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";

  // gr_user.SetExcelTitle(1, "value:근무지;"     // 표시할 타이틀
  //                             + "font-face:'돋움체';" // 폰트
  //                             + "font-size:16pt;"    // 폰트 크기
  //                             + "font-color:black;"  // 폰트 색깔
  //                             + "bgcolor:#ffffff;"   // 배경 색깔
  //                             + "align:center;"      // 정렬
  //                             + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  //                             + "line-width:0pt;"    // 타이틀 테두리선 굵기
  //                             + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  //                             //sheet명, 저장파일명,     저장 다이얼로그
  // cfGridToExcel(gr_user, "근무지조회LIST", "근무지조회LIST.xls", 4+8+16);

  var totCnt = ds_oGDS_result_list.getRowCount();
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }

  // var vDay = "조회일자 : "+"<%=strCurDate%>";
  // gr_user.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );

  // KYU_TEST
  // 1행 : 근무지 (셀통합-가운데 정렬)
  // 2행 : 없음
  // 3행 : 조회일자 | 20260124  (셀통합-왼쪽 정렬)

  var sheetTitle = "근무지조회LIST";
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리

    //그리드에 대한 내용을 추가 옵션
    // let infoArr = [
    //     //제목
    //     {
    //           rowIndex: 0               //제목을 표시할 행 index
    //         , colIndex: 0               //제목을 표시할 열 index
    //         // , rowSpan: 1                //병합할 행의 수
    //         // , colSpan: 25               //병합할 열의 수
    //         , text: sheetTitle          //표시할 내용(제목)
    //         , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
    //         , fontSize: "12px"          //폰트 size
    //         , fontName: "돋움체"        //폰트이름 
    //         , drawBorder: false         //cell의 border 지정(true, false)
    //     }
    // ];

    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      //   removeColumns : "1,3",  // 컬럼 지우기
      //   foldColumns  : "2",
      startRowIndex: 3,
      // 내용 앞으로 몇 row 띄우는지...
      startColumnIndex: 0,
      bodyWordwrap: true // 줄바꿈
      // , useSubTotal : true  // 소계 출력여부
      // , rowNumBodyFontName : "굴림"       // body 폰트 - 굴림 9
      // , rowNumHeaderFontName : "Calibri"  // 헤더 폰트 - 사이즈 16
      // , rowNumSubTotalColor : 소계 배경
    };
    var today = "조회일자 | " + $c.date.getServerDateTime($p, "yyyyMMdd");
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 8 /* 병합할 컬럼갯수 */,
      text: "근무지",
      textAlign: "center",
      drawBorder: false,
      fontSize: "16px"
    }, {
      rowIndex: 2,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 8,
      text: today,
      textAlign: "left",
      drawBorder: false,
      fontSize: "10px",
      fontName: "굴림체"
    }];
    $c.data.downloadGridViewExcel($p, gr_user, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'tbl_search',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfoCondpopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd_cond',validTitle:'회사코드',nameId:'ed_coNm_cond',style:'',id:'udc_coCd_cond',btnId:'btn_coCd_cond',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_cond_onclickEvent',refDataCollection:'ds_oGDS_search_cond',code:'coCd','ev:onblurCodeEvent':'scwin.udc_coCd_cond_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_workSiteCd_param',style:'','ev:onkeypress':'scwin.ed_workSiteCd_param_onkeypress',ref:'data:ds_oGDS_search_cond.workSiteCd',title:'근무지코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_workSiteNm_param',style:'','ev:onkeypress':'scwin.ed_workSiteNm_param_onkeypress',ref:'data:ds_oGDS_search_cond.workSiteNm',title:'근무지명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn_excep',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_oGDS_search_cond.useYn',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'근무지 조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_user',gridUpYn:'N',gridDownFn:'scwin.f_userToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oGDS_result_list',focusMode:'cell',id:'gr_user',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'근무지코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'근무지명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'구청코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'구청명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'관리부서코드',width:'120',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'관리부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'근무지주소1',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'근무지주소2',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'workSiteCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSiteNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'withholdDofficeCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctDeptCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr1',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr2',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:'margin-top:32px;'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_workSiteCd',style:'',objType:'data',ref:'data:ds_oGDS_result_list.workSiteCd',title:'근무지코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'근무지명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_workSiteNm',style:'',objType:'data',mandatory:'true',ref:'data:ds_oGDS_result_list.workSiteNm',title:'근무지명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'원천세신고구청',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_withholdDofficeCd',nameId:'ed_dofficeNm',popupID:'retrieveDOfficeCdInfopopup',selectID:'retrieveDOfficeCdInfo',style:'',validTitle:'원천세신고구청',mandatoryCode:'true',id:'udc_withholdDofficeCd',btnId:'btn_withholdDoffice',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'key',maxlengthName:'50','ev:onclickEvent':'scwin.udc_withholdDofficeCd_onclickEvent',refDataCollection:'ds_oGDS_result_list',code:'withholdDofficeCd',name:'dofficeNm','ev:onblurCodeEvent':'scwin.udc_withholdDofficeCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntAcctDeptCd',nameId:'ed_acctDeptNm',popupID:'retrieveAcctDeptCdInfo2popup',selectID:'retrieveAcctDeptCdInfo2',style:'',validTitle:'관리귀속부서',mandatoryCode:'true',id:'udc_mgntAcctDeptCd',btnId:'btn_upperAcctDept',objTypeName:'key',objTypeCode:'data','ev:onclickEvent':'scwin.udc_mgntAcctDeptCd_onclickEvent',maxlengthName:'50',maxlengthCode:'5',allowCharCode:'0-9',name:'acctDeptNm',refDataCollection:'ds_oGDS_result_list',code:'mgntAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_mgntAcctDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표근무지여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_repWorkSiteYn',ref:'data:ds_oGDS_result_list.repWorkSiteYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',refInitSync:'false',title:'대표근무지여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'국외근무지여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_outWorkSiteYn',ref:'data:ds_oGDS_result_list.outWorkSiteYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'국외근무지여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업소세집계유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bizTaxAggrPatternCd',style:'',submenuSize:'fixed',mandatory:'true',ref:'data:ds_oGDS_result_list.bizTaxAggrPatternCd',chooseOptionLabel:'선택',title:'사업소세집계유형'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업소세집계제외',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_bizTaxAggrExceptYn',ref:'data:ds_oGDS_result_list.bizTaxAggrExceptYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',title:'사업소세집계제외'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지우편번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 110px;'},E:[{T:1,N:'xf:input',A:{id:'ed_zip',style:'',objType:'data',ref:'data:ds_oGDS_result_list.zip',title:'근무지우편번호',allowChar:'0-9',validateOnInput:'true',maxlength:'6'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_zip',style:'',type:'button','ev:onclick':'scwin.btn_zip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지주소1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_addr1',style:'',objType:'data',ref:'data:ds_oGDS_result_list.addr1',title:'근무지주소1',maxByteLength:'100',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무지주소2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_addr2',style:'',objType:'data',ref:'data:ds_oGDS_result_list.addr2',title:'근무지주소2',maxByteLength:'100',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_telNo',style:'',ref:'data:ds_oGDS_result_list.telNo',title:'전화번호',allowChar:'0-9',displayFormat:'###-####-####',validateOnInput:'true',maxlength:'11'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FAX번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_faxNo',style:'',ref:'data:ds_oGDS_result_list.faxNo',title:'FAX번호',allowChar:'0-9',displayFormat:'###-####-####',validateOnInput:'true',maxlength:'11'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',style:'',submenuSize:'fixed',ref:'data:ds_oGDS_result_list.useYn',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coClsNm',popupID:'retrieveDongbuGroupCompanyInfopopup2',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'회사코드',id:'udc_coCd',btnId:'btn_company','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',refDataCollection:'ds_oGDS_result_list',code:'coCd',name:'coClsNm','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_coClsCd',style:'',submenuSize:'fixed',mandatory:'true',objType:'data',ref:'data:ds_oGDS_result_list.coClsCd',title:'회사구분'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_adptDt',refDataMap:'ds_oGDS_result_list',refEdDt:'adptEndDt',refStDt:'adptStDt',style:'',edFromId:'ed_adptStDt',edToId:'ed_adptEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})