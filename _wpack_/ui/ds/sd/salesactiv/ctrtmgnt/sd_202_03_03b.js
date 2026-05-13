/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_03_03b.xml 85201 2ecd2604107de18eaa685c3ca039f892f4868d20b2221fbb3be809ce2c2aff9f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_ctrt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'계약구분코드',dataType:'text',length:'4',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ctrtDt',name:'계약일자',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'거래처 대표이사',dataType:'text',length:'60',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntAddr',name:'거래처주소',dataType:'text',length:'200',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text',length:'20',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'10',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text',length:'50',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처이메일',dataType:'text',length:'60',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntPicTelNo',name:'거래처담당자전화번호',dataType:'text',length:'50',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcomEmpNo',name:'담당자사번',dataType:'text',length:'10',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'30',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ctrtApprDt',name:'계약체결일',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text',length:'15',defaultValue:''}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',length:'2',defaultValue:''}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text',length:'300',defaultValue:''}},{T:1,N:'w2:column',A:{id:'compensationLimit',name:'적재물배상책임보험 보상한도',dataType:'number',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'periodYear',name:'계약기간(년수)',dataType:'number',length:'3',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cancelPeriod',name:'서면해지통보 기한',dataType:'text',length:'20',defaultValue:''}},{T:1,N:'w2:column',A:{id:'extenstionPeriod',name:'자동연장 기간',dataType:'text',length:'20',defaultValue:''}},{T:1,N:'w2:column',A:{id:'comScale',name:'업체 차량운영 규모',dataType:'text',length:'20',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text',length:'2',defaultValue:''}},{T:1,N:'w2:column',A:{id:'licenseYn',name:'면허여부',dataType:'number',length:'1',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'comFlttYm',name:'업체설립년월',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcomTraDt',name:'당사 거래기간 (신규 or 기간)',dataType:'text',length:'50',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exPchsAmt',name:'연간 예상 매입액',dataType:'number',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payCon',name:'대금지급조건',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'comScore',name:'업체평가점수',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'comReason',name:'업체선정사유',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'creditRating',name:'신용등급',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'operTar',name:'운영대상',dataType:'text',length:'200'}},{T:1,N:'w2:column',A:{id:'drawUserId',name:'작성자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'drawUserNm',name:'작성자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',length:'50'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25'}},{T:1,N:'w2:key',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'도착권역코드명',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ctrtClsCd',name:'품명',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_reqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'요청자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'EP사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCnt',name:'계약건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'YES'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveEleContractSubCooperListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"}, {"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveEleContractSubCooperCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_ctrt","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reqApprove',action:'/ds.sd.salesactiv.ctrtmgnt.EleContractApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_reqApprove',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reqApprove_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// LoginDTO loginDTO = LoginUtil.getLoginDTO(request);

// 화면
scwin.onpageload = function () {
  scwin.userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn") + "";
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
  scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate);
  scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate;
  scwin.pos_ctrt = 0;
  scwin.g_sUserId = $c.data.getMemInfo($p, "userId");
  scwin.g_sUserNm = $c.data.getMemInfo($p, "userNm");
  scwin.g_sAcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  scwin.g_sAcctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  scwin.g_sEmpNo = $c.data.getMemInfo($p, "epId");
  scwin.currentDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.manager = "";
  scwin.managerYn = ""; //관리자 여부

  const codeOptions = [{
    grpCd: "ZZ021",
    compID: "lc_apprvStsCd",
    opt: {
      "range": "2,1"
    }
  } // 상태
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//----------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Cancel, btn_Save, btn_Delete, btn_Aprv]);

  // f_createHeader();
  ed_ctrtStDt.setValue(scwin.strFromDate);
  ed_ctrtEndDt.setValue(scwin.strToDate);
  /*
     const codeOptions = [
         { grpCd: "ZZ021", compID: "lc_apprvStsCd", opt: { "range": "2,1" } } // 상태
     ]
     $c.data.setCommonCode(codeOptions) */
  // TEST DATA
  // ds_retrieveCtrtClnt.set("ctrtClntNo", 316381)
  //ed_ctrtStDt.setValue("20260101");
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  lc_apprvStsCd.addItem("99", "회수");
};

// 귀속부서 공통팝업 
scwin.openAcctDeptPopup = function (udcObj, codeInput, nameInput, codeVal, nameVal) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  udcObj.cfCommonPopUp(function (ret) {
    scwin.commonAcctDeptCallback(codeInput, nameInput, ret);
  }, codeVal, nameVal, "T", null, null, null, null, pWhere, "450", "500", null, null, null, "F", null, null);
};

// 귀속부서 공통 콜백
scwin.commonAcctDeptCallback = function (codeInput, nameInput, ret) {
  if (!ret || ret[0] == "N/A") {
    return;
  }
  codeInput.setValue(ret[0]);
  nameInput.setValue(ret[1]);
};

// 클릭
scwin.udc_acctDeptCd_onclickEvent = function () {
  scwin.openAcctDeptPopup(udc_acctDeptCd, ed_acctDeptCd, ed_acctDeptNm, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue());
};

// blur
scwin.udc_acctDeptCd_onblurCodeEvent = function () {
  scwin.openAcctDeptPopup(udc_acctDeptCd, ed_acctDeptCd, ed_acctDeptNm, ed_acctDeptCd.getValue(), "");
};

// name 변경
scwin.udc_acctDeptCd_onviewchangeNameEvent = function () {
  scwin.openAcctDeptPopup(udc_acctDeptCd, ed_acctDeptCd, ed_acctDeptNm, "", ed_acctDeptNm.getValue());
};

// 클릭
scwin.udc_acctDeptCd2_onclickEvent = function () {
  scwin.openAcctDeptPopup(udc_acctDeptCd2, ed_acctDeptCd2, ed_acctDeptNm2, ed_acctDeptCd2.getValue(), ed_acctDeptNm2.getValue());
};

// blur
scwin.udc_acctDeptCd2_onblurCodeEvent = function () {
  scwin.openAcctDeptPopup(udc_acctDeptCd2, ed_acctDeptCd2, ed_acctDeptNm2, ed_acctDeptCd2.getValue(), "");
};

// name 변경
scwin.udc_acctDeptCd2_onviewchangeNameEvent = function () {
  scwin.openAcctDeptPopup(udc_acctDeptCd2, ed_acctDeptCd2, ed_acctDeptNm2, "", ed_acctDeptNm2.getValue());
};

// 주소 우편번호 검색
scwin.f_openZipPopUp = async function (e) {
  //var rtnList = new Array();
  // var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "",
  //     "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");

  var url = "/ui/cm/zz/newzipcodePopup.xml";
  let opts = {
    width: "530px",
    height: "400px",
    dialogleft: "100px",
    scrollbars: "no",
    status: "no",
    help: "no",
    style: "center"
  };
  var popupResult = await $c.win.openPopup($p, url, opts);

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    if (popupResult[0] == "N/A") return;
    //        		zip.Text = popupResult.zip;
    ed_clntAddr.setValue(popupResult.addr1);
  } else {
    //        		zip.Text = "";
    ed_clntAddr.setValue("");
  }
};

// 사업자번호 UDC
scwin.udc_clntCrn_onclickEvent = function (gbn) {
  // rtnList = cfCommonPopUp('retrieveCrnInfo', '', '', "F", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  사업자등록번호

  udc_clntCrn.setSelectId("retrieveCrnInfo");
  udc_clntCrn.cfCommonPopUp(gbn == "1" ? scwin.udc_clntCrn_srch_callBackFunc : scwin.udc_clntCrn_form_callBackFunc, '', '', "F", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  사업자등록번호
};

// 사업자등록정보 공통팝업
scwin.f_openCrnPopUp = function (_schGb) {
  scwin.udc_clntCrn_onclickEvent(_schGb);
};

////////////////////////////////////////////////////////
// 품명 공통팝업 그리드 콜백
////////////////////////////////////////////////////////
scwin.udc_clntCrn_srch_callBackFunc = function (ret) {
  ed_clntCrn.setValue(ret[0]); // 사업자등록번호
};
scwin.udc_clntCrn_form_callBackFunc = function (ret) {
  ed_clntCrn2.setValue(ret[0]); // 사업자등록번호
};

// 조회조건 초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

// 조회
scwin.f_Retrieve = async function (e) {
  scwin.f_ContentsDisable();
  let ret = await $c.gus.cfValidate($p, [ed_ctrtStDt, ed_ctrtEndDt]);
  if (!ret) {
    return false;
  }

  // 조회일자 from ~ to 체크	
  if (!$c.gus.cfIsAfterDate($p, ed_ctrtStDt.getValue(), ed_ctrtEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // "시작일자가 종료일자 이전이어야 합니다."
    return;
  }

  // tr_retrieve.Post(); 
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 그리드 사용여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayCtrtApprDt = function (data) {
  return $c.gus.decode($p, data, "", "N", "Y");
};

// ctrt(계약정보) 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    //gr_ctrt.checkAll('chk', false)
    if (ds_ctrt.getRowCount() == 0) {
      scwin.f_ContentsDisable();
      $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save, btn_Aprv, btn_Copy, btn_Delete]);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    } else {
      ds_ctrt.setRowPosition(0);
      gr_ctrt.setFocusedCell(0, 0);
    }
    // 그리드 조회건수
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_ctrt.getRowCount()));
  }
};
scwin.rowPos = 0;
// 계약정보 행 변경시
scwin.ds_ctrt_onrowpositionchange = function (info) {
  scwin.rowPos = info.newRowIndex ?? scwin.rowPos;
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableObj($p, ed_ctrtDt, true); // 계약일자
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, true); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, true); // 계약종료일
  // $c.gus.cfEnableObj(ed_ctrtDt_search, true);
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_clntNm2, true); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntAddr, true); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_clntRepstNm, true); // 거래처 대표이사
  $c.gus.cfEnableObj($p, ed_clntTelNo, true); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntPicNm, true); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_clntCrn2, true); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_clntEmail, true); // 거래처 담당자이메일
  $c.gus.cfEnableObj($p, ed_clntPicTelNo, true); // 거래처 담당자휴대폰
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_periodYear, true); // 계약기간(년수)
  $c.gus.cfEnableObj($p, ed_cancelPeriod, true); // 서면해지통보 기한
  $c.gus.cfEnableObj($p, ed_extenstionPeriod, true); // 자동연장 기간
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_mcomEmpNo, true); // 계약 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, true); // 계약 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, true); // 귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, true);
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_compensationLimit, true); //적재물배상책임보험 보상한도
  $c.gus.cfEnableObj($p, ed_periodYear, true); // 계약기간(년수)
  $c.gus.cfEnableObj($p, ed_cancelPeriod, true); //서면해지통보 기한
  $c.gus.cfEnableObj($p, ed_extenstionPeriod, true); //자동연장 기간
  $c.gus.cfEnableObj($p, ed_comScale, true); //업체 차량운영 규모
  $c.gus.cfEnableObj($p, lc_licenseYn, true); //운송사업 면허보유 여부 
  $c.gus.cfEnableObj($p, lc_transCargoClsCd, true); // CNTR/BULK 구분 (C:컨테이너, B:벌크) 
  $c.gus.cfEnableObj($p, ed_comFlttYm, true); //업체설립년월
  $c.gus.cfEnableObj($p, ed_mcomTraDt, true); // 당사 거래기간 (신규 or 기간)
  $c.gus.cfEnableObj($p, ed_exPchsAmt, true); //연간 예상 매입액
  $c.gus.cfEnableObj($p, ed_payCon, true); //대금지급조건
  $c.gus.cfEnableObj($p, ed_comScore, true); //업체평가점수
  $c.gus.cfEnableObj($p, ed_comReason, true); //업체선정사유
  $c.gus.cfEnableObj($p, ed_creditRating, true); //신용도
  $c.gus.cfEnableObj($p, txt_operTar, true); //운영대상    
};

// 항목 Disable
scwin.f_ContentsDisable = function () {
  // 		cfDisableKeyData();

  $c.gus.cfEnableObj($p, ed_ctrtNo2, false); // 계약번호
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_ctrtDt, false); // 계약일자
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, false); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, false); // 계약종료일
  // $c.gus.//		cfEed_nableObj(ctrtDt_search, false);
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_clntNm2, false); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntAddr, false); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_clntRepstNm, false); // 거래처 대표이사
  $c.gus.cfEnableObj($p, ed_clntTelNo, false); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntPicNm, false); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_clntCrn2, false); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_clntEmail, false); // 거래처 담당자이메일
  $c.gus.cfEnableObj($p, ed_clntPicTelNo, false); // 거래처 담당자휴대폰
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_periodYear, false); // 계약기간(년수)
  $c.gus.cfEnableObj($p, ed_cancelPeriod, false); // 서면해지통보 기한
  $c.gus.cfEnableObj($p, ed_extenstionPeriod, false); // 자동연장 기간
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_mcomEmpNo, false); // 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, false); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, false); // 귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, false);
  // $c.gus.ed_
  $c.gus.cfEnableObj($p, ed_compensationLimit, false); //적재물배상책임보험 보상한도
  $c.gus.cfEnableObj($p, ed_periodYear, false); // 계약기간(년수)
  $c.gus.cfEnableObj($p, ed_cancelPeriod, false); //서면해지통보 기한
  $c.gus.cfEnableObj($p, ed_extenstionPeriod, false); //자동연장 기간
  $c.gus.cfEnableObj($p, ed_comScale, false); //업체 차량운영 규모
  $c.gus.cfEnableObj($p, lc_licenseYn, false); //운송사업 면허보유 여부 
  $c.gus.cfEnableObj($p, lc_transCargoClsCd, false); // CNTR/BULK 구분 (C:컨테이너, B:벌크) 
  $c.gus.cfEnableObj($p, ed_comFlttYm, false); //업체설립년월
  $c.gus.cfEnableObj($p, ed_mcomTraDt, false); // 당사 거래기간 (신규 or 기간)
  $c.gus.cfEnableObj($p, ed_exPchsAmt, false); //연간 예상 매입액
  $c.gus.cfEnableObj($p, ed_payCon, false); //대금지급조건
  $c.gus.cfEnableObj($p, ed_comScore, false); //업체평가점수
  $c.gus.cfEnableObj($p, ed_comReason, false); //업체선정사유
  $c.gus.cfEnableObj($p, ed_creditRating, false); //신용도
  $c.gus.cfEnableObj($p, txt_operTar, false); //운영대상
};

// 결재요청
scwin.f_Aprv = async function (e) {
  // 		if (!f_ChkDrawUser("결재요청")) {
  //   			return;
  //   		}

  try {
    if (!scwin.f_ChkApprvSts("APPRV")) {
      return;
    }

    // 임시 조정 -- 건수가 20건을 넘으면 수행 못하도록 수정
    var vCtrtCount = 0;
    var vCtrtNoList = ""; // 계약번호 목록

    var vCtrtNo = "";
    var vDrawUserNm = "";
    for (i = 0; i < ds_ctrt.getRowCount(); i++) {
      if (ds_ctrt.getCellData(i, "chk") == "T") {
        vCtrtCount++;
        vCtrtNo = ds_ctrt.getCellData(i, "ctrtNo");
        vDrawUserNm = ds_ctrt.getCellData(i, "drawUserNm");
        if (scwin.g_sUserId != ds_ctrt.getCellData(i, "drawUserId")) {
          $c.win.alert($p, "계약번호[" + vCtrtNo + "] " + "결재요청은 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
          return false;
        }
      }
    }
    if (vCtrtCount > 20) {
      $c.win.alert($p, "20건 초과된 계약을 한번에 전자결재 요청하실 수 없습니다.");
      return;
    }
    if (await $c.win.confirm($p, "전자결재 요청하시겠습니까?")) {
      //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      var vReqApprvDocKndCd = "039"; // 결재문서종류 -- 전자계약 신청(공통코드 ZZ022)
      var vReqUserId = scwin.g_sUserId; // 결재요청자 ID
      var vEpUsrId = scwin.g_sEmpNo; // EP사용자 ID
      var vReqApprvTitle = "";
      //         if ( vCtrtCount > 1 ) {
      vReqApprvTitle = "화물 차량 협력업체 협력계약서 " + vCtrtCount + " 건 ";
      //         }  else {
      //         	vReqApprvTitle = "화물 차량 지입 관리 계약서[ " + ds_ctrt.NameValue(ds_ctrt.RowPosition, "clntNm") + " ] ";
      //         }

      var vApprvDtlInfo = "<br>";
      for (var m = 0; m < ds_ctrt.getRowCount(); m++) {
        if (ds_ctrt.getCellData(m, "chk") == "T") {
          vCtrtNoList += ds_ctrt.getCellData(m, "ctrtNo") + "_";
          vApprvDtlInfo += "<span style='font-size:10pt;'>*계약번호(" + ds_ctrt.getCellData(m, "ctrtNo") + ")</span>";
          vApprvDtlInfo += "<br><br>";
          vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[계약정보]</span>";
          vApprvDtlInfo += "<table border='1' width='1350' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom: 2px;'>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>수탁자명</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "clntNm") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>계약기간</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          var ctrtStDt = $c.gus.cfGetFormatStr($p, ds_ctrt.getCellData(m, "ctrtStDt"), "####/##/##");
          var ctrtEndDt = $c.gus.cfGetFormatStr($p, ds_ctrt.getCellData(m, "ctrtEndDt"), "####/##/##");
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ctrtStDt + " ~ " + ctrtEndDt + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>적재물배상책임보험보상한도</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_ctrt.getCellData(m, "compensationLimit")) + "(원)</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>대표자명</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "clntRepstNm") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>수탁자 소재지</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'  colspan='3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "clntAddr") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>계약서일자</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          var ctrtDt = $c.gus.cfGetFormatStr($p, ds_ctrt.getCellData(m, "ctrtDt"), "####/##/##");
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ctrtDt + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>계약기간(년수)</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "periodYear") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>서면해지통보 기한</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "cancelPeriod") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>자동연장기간</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "extenstionPeriod") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "</table>";
          vApprvDtlInfo += "<br>";
          vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[차량정보]</span>";
          vApprvDtlInfo += "<table border='1' width='1350' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom: 2px;'>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>업체차량운영규모</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "comScale") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>운송사업면허보유여부</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          if (ds_ctrt.getCellData(m, "licenseYn") == "0") {
            vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>N</span></font></p>";
          } else if (ds_ctrt.getCellData(m, "licenseYn") == "1") {
            vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>Y</span></font></p>";
          }
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>CNTR/BULK 구분</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          if (ds_ctrt.getCellData(m, "transCargoClsCd") == "C") {
            vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'> 컨테이너</span></font></p>";
          } else if (ds_ctrt.getCellData(m, "transCargoClsCd") == "B") {
            vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'> 벌크</span></font></p>";
          }
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>업체설립년월</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "comFlttYm") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>당사거래기간</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "mcomTraDt") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>연간예상매입액</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_ctrt.getCellData(m, "exPchsAmt")) + "(원)</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>대금지급조건</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "payCon") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>업체평가점수</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "comScore") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>신용도</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "creditRating") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>업체선정사유</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'  colspan='5'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "comReason") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "<tr>";
          vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>운영대상</span></font><span style='font-size:10pt;'></span></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "<td width='200'  colspan='5'>";
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "operTar") + "</span></font></p>";
          vApprvDtlInfo += "</td>";
          vApprvDtlInfo += "</tr>";
          vApprvDtlInfo += "</table>";
          vApprvDtlInfo += "<br>";
        }
      }

      //결재요청내역 END>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // frmReqApprove.apprvDocKndCd.value 	 = vReqApprvDocKndCd;   //결재문서종류
      // frmReqApprove.reqUserId.value 		 = vReqUserId;          //결재요청자
      // frmReqApprove.epUserId.value 		 = vEpUsrId;            //EP사용자
      // frmReqApprove.apprvTitle.value 		 = vReqApprvTitle;      //결재제목
      // frmReqApprove.apprvDtlInfo.value 	 = vApprvDtlInfo;       //결재문서양식
      // frmReqApprove.ctrtNo.value 			 = vCtrtNoList;			//계약번호리스트
      // frmReqApprove.ctrtCnt.value 		 = vCtrtCount;			//계약전송건수
      // frmReqApprove.submit();

      /*
      dma_reqApprove.set("apprvDocKndCd", vReqApprvDocKndCd)   // 결재문서종류
      dma_reqApprove.set("reqUserId", vReqUserId)          // 결재요청자
      dma_reqApprove.set("epUserId", vEpUsrId)            // EP사용자
      dma_reqApprove.set("apprvTitle", vReqApprvTitle)      // 결재제목
      dma_reqApprove.set("apprvDtlInfo", vApprvDtlInfo)       // 결재문서양식
      dma_reqApprove.set("ctrtNo", vCtrtNoList)		   // 계약번호리스트
      dma_reqApprove.set("ctrtCnt", vCtrtCount)		   // 계약전송건수
      dma_reqApprove.set("ElectronicApprovalRequestFrame", "YES")		   // 전자결재요청화면 여부
       $c.sbm.execute(sbm_reqApprove)
      */
      const params = {
        apprvDocKndCd: vReqApprvDocKndCd,
        //결재문서종류
        reqUserId: vReqUserId,
        //결재요청자
        epUserId: vEpUsrId,
        //EP사용자
        apprvTitle: vReqApprvTitle,
        //결재제목
        apprvDtlInfo: vApprvDtlInfo,
        //결재문서양식
        ctrtNo: vCtrtNoList,
        //계약번호리스트
        ctrtCnt: vCtrtCount //계약전송건수
      };
      dma_reqApprove.setJSON(params);
      let url = "/ds.sd.salesactiv.ctrtmgnt.EleContractApproveCMD.do";
      let targetName = "aprvPopup";
      var data = dma_reqApprove.getJSON() || {};
      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;
      form.target = targetName;

      // ✅ 팝업 차단 회피: 사용자 클릭 이벤트 안에서 실행되어야 함
      const win = window.open("", targetName); // about:blank 대신 빈 문자열로 재사용
      // 팝업이 막히면 win이 null일 수 있음
      if (!win) {
        // 여기서 그냥 location 이동하거나 alert 처리 등
        console.warn("Popup blocked");
        //$c.win.alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해 주세요.");
        return;
      }
      Object.keys(data).forEach(key => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;

        // 배열/객체는 서버가 JSON 문자열로 받는 구조인지 확인 필요.
        // 보통은 stringify 해서 보내는 게 안전함.
        const val = data[key];
        input.value = val && typeof val === "object" ? JSON.stringify(val) : (val ?? "").toString();
        form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    }
  } catch (e) {}
};

// 재사용
scwin.f_Copy = function (e) {
  let rowData = ds_ctrt.getRowData(ds_ctrt.getRowPosition());
  ds_ctrt.setRowPosition(ds_ctrt.getRowCount());
  ds_ctrt.setRowData(ds_ctrt.getRowPosition(), rowData, false);
  ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtNo", ""); // 계약번호
  ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "apprvStsNm", ""); // 결재상태
  ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtApprDt", ""); // 계약체결유무

  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Delete, btn_Aprv]);
  $c.gus.cfEnableObjects($p, [btn_Cancel, btn_Save]);
  scwin.f_ContentsEnable();
  gr_ctrt.setFocusedCell(ds_ctrt.getRowPosition(), 0);
};

// 신규
scwin.f_Create = function (e) {
  ds_ctrt.insertRow();
  ds_ctrt.setRowPosition(ds_ctrt.getRowCount() - 1);
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Aprv]);
  $c.gus.cfEnableObjects($p, [btn_Cancel, btn_Save]);
  let rowIndex = ds_ctrt.getRowPosition();
  ds_ctrt.setCellData(rowIndex, "ctrtClsCd", "DL03"); // 계약서코드
  ds_ctrt.setCellData(rowIndex, "mcomEmpNm", scwin.g_sUserNm); // 계약담당자명
  ds_ctrt.setCellData(rowIndex, "acctDeptCd", scwin.g_sAcctDeptCd); // 귀속부서
  ds_ctrt.setCellData(rowIndex, "acctDeptNm", scwin.g_sAcctDeptNm);
  gr_ctrt.setFocusedCell(rowIndex, 0);
};

// 수정
scwin.f_Update = function (e) {
  if (!scwin.f_ChkDrawUser("수정")) {
    return;
  }
  if (!scwin.f_ChkApprvSts("UPDATE")) {
    return;
  }
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Delete, btn_Aprv]);
};

// 취소
scwin.f_Cancel = function (e) {
  scwin.f_ContentsDisable();
  $c.data.undoAll($p, ds_ctrt);
  if (ds_ctrt.getRowPosition() >= 0) {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save, btn_Delete, btn_Aprv]);
  }

  // 취소 후 포커스
  let col = gr_ctrt.getFocusedColumnIndex() ?? 0;
  gr_ctrt.setFocusedCell(0, col);
};

// 저장
scwin.f_Save = async function (e) {
  //계약정보 필수값체크
  /*
     let ret = await $c.gus.cfValidate(gr_ctrt)
     if (!ret) {
         return
     }
  */

  let validArray = [{
    id: "clntNm",
    name: "수탁자명",
    mandatory: true
  }, {
    id: "ctrtDt",
    name: "계약일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "ctrtStDt",
    name: "계약시작일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "ctrtEndDt",
    name: "계약종료일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "mcomEmpNo",
    name: "담당자사번",
    mandatory: true,
    length: 8
  }, {
    id: "clntAddr",
    name: "수탁자소재지",
    mandatory: true
  }, {
    id: "clntCrn",
    name: "거래처사업자번호",
    mandatory: true
  }, {
    id: "clntPicNm",
    name: "거래처담당자명",
    mandatory: true
  }, {
    id: "clntEmail",
    name: "거래처담당자이메일",
    mandatory: true
  }, {
    id: "clntPicTelNo",
    name: "거래처담당자휴대폰",
    mandatory: true
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_ctrt, null, null, validArray, "계약내역");
  if (!ret) {
    return;
  }
  if (ed_compensationLimit.getValue() == 0) {
    await $c.win.alert($p, "적재물배상책임보험 보상한도액은 필수입력사항입니다");
    return;
  }

  //변경한 데이터가 있는지 체크한다. 
  if (ds_ctrt.getModifiedIndex().length < 1) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 저장확인 
  ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret == true) {
    pos_ctrt = ds_ctrt.getRowPosition();
    $c.sbm.execute($p, sbm_save);
  }
};

// 저장완료
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save, btn_Delete, btn_Aprv]);
  scwin.f_Retrieve();
};

// 삭제
scwin.f_Delete = async function (e) {
  if (!scwin.f_ChkDrawUser("삭제")) {
    return;
  }
  if (!scwin.f_ChkApprvSts("DELETE")) {
    return;
  }
  let row = ds_ctrt.getRowPosition() ?? scwin.rowPos;
  if (row >= 0) {
    ds_ctrt.deleteRow(row);
    var vCtrtNo = ds_ctrt.getCellData(row, "ctrtNo");
    let ret = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, Array("선택하신 계약번호(" + vCtrtNo + ")")));
    if (ret == true) {
      $c.sbm.execute($p, sbm_save);
    } else {
      scwin.f_Cancel();
    }
  }
};

// 작성자  체크
scwin.f_ChkDrawUser = function (strChk) {
  let rowPos = ds_ctrt.getRowPosition() ?? scwin.rowPos;
  var vCtrtNo = ds_ctrt.getCellData(rowPos, "ctrtNo");
  var vDrawUserNm = ds_ctrt.getCellData(rowPos, "drawUserNm");
  if (scwin.g_sUserId != ds_ctrt.getCellData(rowPos, "drawUserId")) {
    $c.win.alert($p, "계약번호[" + vCtrtNo + "] " + strChk + "작업은 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
    return false;
  }
  return true;
};

// 결재상태 체크
scwin.f_ChkApprvSts = function (flag) {
  let rowPos = ds_ctrt.getRowPosition() ?? scwin.rowPos;
  var vApprvStsCd = ds_ctrt.getCellData(rowPos, "apprvStsCd");
  if (flag == "DELETE") {
    if (!(vApprvStsCd == "01" || vApprvStsCd == "03" || vApprvStsCd == "99")) {
      $c.win.alert($p, "상태가 대기/반려/회수인 경우만  가능합니다.");
      return false;
    }
  } else {
    if (vApprvStsCd == "99") {
      $c.win.alert($p, "상태가 회수인 경우 계약을 신규 등록해야합니다.");
      return false;
    }
    if (!(vApprvStsCd == "01")) {
      $c.win.alert($p, "상태가 대기인 경우만  가능합니다.");
      return false;
    }
  }
  return true;
};

// 계약정보 셀 클릭 
scwin.gr_ctrt_oncellclick = function (rowIndex, columnIndex, columnId) {
  var msg = "결재가 이미 진행된 상태입니다.";
  // 체크박스
  if (columnId == "chk") {
    if (ds_ctrt.getCellData(rowIndex, "apprvStsNm") != "대기") {
      $c.win.alert($p, msg);
      ds_ctrt.setCellData(rowIndex, "chk", "F");
    }
  }
};
scwin.f_checkCharacter = function (e) {
  if (e.keyCode != 45 && (e.keyCode < 48 || e.keyCode > 57)) {
    $c.win.alert($p, "전화번호는 '숫자', '-' 만 입력 가능 합니다.");
    e.returnValue = false;
    //return;
  }
};

// 그리드 : 면허여부 구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.licenseYnExp = function (data) {
  return $c.gus.decode($p, data, 1, "Y", 0, "N");
};

// Excel Download
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_ctrt.getRowCount();
  var sheetTitle = "협력업체운송계약서";
  if (vResultCountRow != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      fileName = sheetTitle + "_" + ed_ctrtStDt.getValue() + "~" + ed_ctrtEndDt.getValue();
      // cfGridToExcel(gr_ctrt, sheetTitle, fileName, 2 + 8 + 16); //show false 미출력 1 , 출력 2
      var options = {
        fileName: fileName + ".xlsx",
        sheetName: sheetTitle,
        type: "2 + 8 + 16",
        hiddenVisible: false,
        //히든값(true : 포함, false : 미포함)
        numberToText: true // 숫자 포맷적용
      };
      await $c.data.downloadGridViewExcel($p, gr_ctrt, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_ctrtStDt',edToId:'ed_ctrtEndDt',id:'udc_fromToCtrt',mandatory:'true',refDataMap:'ds_Query',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'','data-length':'255',id:'ed_clntNm',maxByteLength:'255',placeholder:'',ref:'data:ds_Query.clntNm',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','data-length':'25',id:'ed_ctrtNo',maxByteLength:'25',placeholder:'',ref:'data:ds_Query.ctrtNo',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'','data-length':'2',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_apprvStsCd',objType:'data',ref:'data:ds_Query.apprvStsCd',renderType:'component',style:'width: 100px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',maxlengthCode:'5',code:'acctDeptCd',codeId:'ed_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',hideName:'Y',id:'udc_acctDeptCd',name:'acctDeptNm',nameId:'ed_acctDeptNm',popupID:'',refDataCollection:'ds_Query',selectID:'retrieveAcctDeptCdInfo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_Query.clntCrn',maxlength:'10',maxByteLength:'255',style:'width: 150px;',id:'ed_clntCrn',placeholder:'',class:'','data-length':'255'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openCrnPopUp(1)',style:'',id:'btn_clntCrn',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{'data-length':'255',id:'ed_mcomEmpNm',maxByteLength:'255',ref:'data:ds_Query.mcomEmpNm',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false','ev:onclick':'scwin.f_Retrieve',id:'btn_retrieve',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_ctrt',gridDownFn:'scwin.f_logisDownLoadExcelSheet',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'true',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ctrt',scrollByColumn:'false',style:'',id:'gr_ctrt',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowStatusWidth:'15',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_ctrt_oncellclick',autoFit:'none'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'column21',displayMode:'label',value:'check'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'column12',value:'계약번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'수탁자명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'계약일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'계약시작일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'계약종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'결재상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'계약체결유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'계약서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'거래처대표이사',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'252',inputType:'text',id:'column57',value:'수탁자소재지',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column49',value:'협력사전화번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',id:'column47',value:'협력사명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'협력사이메일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'협력사휴대폰',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'담당자사번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column39',value:'결재요청번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'신청상태',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'계약기간(년수)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'서면해지통보기한',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',value:'자동연장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'업체차량운영규모',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column81',value:'운송사업면허보유여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'CNTR',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column79',value:'업체설립년월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column77',value:'당사',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column75',value:'연간예상매입액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column73',value:'대금지급조건',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',value:'업체평가점수',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column69',value:'업체선정사유',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column67',value:'신용도',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',value:'운영대상',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'적재물배상책임보험보상한도(원)',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'chk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'ctrtNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ctrtDt',blockSelect:'false',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',maxlength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'ctrtStDt',blockSelect:'false',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',maxlength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtEndDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',maxlength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomEmpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvStsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtApprDt',displayMode:'label',displayFormatter:'scwin.displayCtrtApprDt',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntCrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtClsCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntRepstNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'252',inputType:'text',id:'clntAddr',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'clntTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',id:'clntPicNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntEmail',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntPicTelNo',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomEmpNo',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'apprvReqNo',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'apprvStsCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'periodYear',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cancelPeriod',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'extenstionPeriod',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'comScale',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'licenseYn',displayMode:'label',textAlign:'left',displayFormatter:'scwin.licenseYnExp',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'transCargoClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'comFlttYm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomTraDt',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exPchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'payCon',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'comScore',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'comReason',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'creditRating',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'operTar',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'compensationLimit',displayMode:'label',textAlign:'right',displayFormat:'#,##0',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_ctrtNo2',placeholder:'',class:'',objType:'data',validExp:'계약번호:no',ref:'data:ds_ctrt.ctrtNo','data-length':'25',maxByteLength:'25'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(자동부여) '}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자사번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mcomEmpNo',maxByteLength:'10',objType:'data',placeholder:'',ref:'data:ds_ctrt.mcomEmpNo',style:'width:150px;',validExp:'담당자사번:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','data-length':'30',id:'ed_mcomEmpNm2',maxByteLength:'30',objType:'data',placeholder:'',ref:'data:ds_ctrt.mcomEmpNm',style:'width:150px;',validExp:'담당자명:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'acctDeptCd',codeId:'ed_acctDeptCd2',maxlengthCode:'5','ev:onblurCodeEvent':'scwin.udc_acctDeptCd2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd2_onviewchangeNameEvent',hideName:'Y',id:'udc_acctDeptCd2',name:'acctDeptNm',nameId:'ed_acctDeptNm2',popupID:'',refDataCollection:'ds_ctrt',selectID:'retrieveAcctDeptCdInfo',style:'width: 250px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자명(업체명)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm2',placeholder:'',style:'width:150px;',objType:'data',validExp:'수탁자명:yes',ref:'data:ds_ctrt.clntNm','data-length':'70',maxByteLength:'70'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'ctrtStDt',refDataMap:'ds_ctrt',style:'',id:'udc_fromToCtrt2',refEdDt:'ctrtEndDt',edFromId:'ed_ctrtStDt2',edToId:'ed_ctrtEndDt2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'적재물배상책임보험<br/>보상한도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_compensationLimit',placeholder:'',class:'tar',validExp:'적재물배상책임보험보상한도:no',dataType:'number',inputMode:'numeric',ref:'data:ds_ctrt.compensationLimit','data-length':'13',maxByteLength:'13',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'대표자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_clntRepstNm',placeholder:'',style:'width:150px;',ref:'data:ds_ctrt.clntRepstNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'수탁자 소재지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'','ev:onviewchange':'scwin.ed_input1_onviewchange',id:'ed_clntAddr',style:'',validExp:'주소:yes',ref:'data:ds_ctrt.clntAddr','data-length':'200',maxByteLength:'200'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.f_openZipPopUp',id:'btn_zip_search',style:'',title:'Search',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'계약일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ctrtDt',style:'',objType:'data',validExp:'계약일자:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_ctrt.ctrtDt','data-length':'8'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'계약기간(년수)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_periodYear',placeholder:'',style:'width:100px;',objType:'data',validExp:'계약기간:no',ref:'data:ds_ctrt.periodYear','data-length':'3',maxByteLength:'3'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'서면해지통보 기한',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cancelPeriod',placeholder:'',style:'width:150px;',objType:'data',validExp:'서면해지통보 기한:no',ref:'data:ds_ctrt.cancelPeriod','data-length':'20',maxByteLength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'자동연장기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_extenstionPeriod',placeholder:'',style:'width:150px;',objType:'data',validExp:'자동연장기간:no',ref:'data:ds_ctrt.extenstionPeriod','data-length':'20',maxByteLength:'20'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'추가정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체차량운영규모',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_comScale',placeholder:'',style:'width:150px;',objType:'data',validExp:'업체차량운영규모:no',ref:'data:ds_ctrt.comScale','data-length':'20',maxByteLength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송사업 면허보유 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_licenseYn',search:'start',style:'width:100px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'선택',allOption:'',ref:'data:ds_ctrt.licenseYn',objType:'data','data-length':'1',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR/BULK 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_transCargoClsCd',search:'start',style:'width:100px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'선택',allOption:'',ref:'data:ds_ctrt.transCargoClsCd',objType:'data','data-length':'2',displayMode:'label',chooseOptionValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체설립년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_comFlttYm',style:'',objType:'data',validExp:'대금지급조건:no',ref:'data:ds_ctrt.comFlttYm','data-length':'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사거래기간 <br/>(신규 or 00년 0월부)',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mcomTraDt',placeholder:'',style:'width:150px;',objType:'data',validExp:'당사거래기간:no',ref:'data:ds_ctrt.mcomTraDt','data-length':'50',maxByteLength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연간예상매입액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_exPchsAmt',placeholder:'',style:'width:150px;',validExp:'연간예상매입액:no',objType:'data',ref:'data:ds_ctrt.exPchsAmt','data-length':'13',maxByteLength:'13',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대금지급조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_payCon',placeholder:'',style:'width:150px;',objType:'data',validExp:'대금지급조건:no',ref:'data:ds_ctrt.payCon','data-length':'100',maxByteLength:'100'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체평가점수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_comScore',placeholder:'',style:'width:150px;',objType:'data',validExp:'업체평가점수:no',ref:'data:ds_ctrt.comScore','data-length':'50',maxByteLength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신용도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_creditRating',placeholder:'',style:'width:150px;',objType:'data',validExp:'신용도:no',ref:'data:ds_ctrt.creditRating','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체선정사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_comReason',placeholder:'',style:'',objType:'data',validExp:'업체선정사유:no',ref:'data:ds_ctrt.comReason','data-length':'500',maxByteLength:'500'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운영대상<br/>(주요 투입 고객사명, <br/>구간 등)',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'txt_operTar',style:'',ref:'data:ds_ctrt.operTar','data-length':'200',maxByteLength:'200'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력사 기본정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{code:'clntCrn',codeId:'ed_clntCrn2',mandatoryCode:'true',maxlengthCode:'10',popupID:'',refDataCollection:'ds_ctrt',style:'',hideName:'true',id:'udc_clntCrn','ev:onclickEvent':'scwin.udc_clntCrn_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력사 전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntTelNo',placeholder:'',style:'width:150px;','ev:onkeypress':'scwin.f_checkCharacter',objType:'data',ref:'data:ds_ctrt.clntTelNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력사 담당자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicNm',placeholder:'',style:'width:150px;',objType:'data',mandatory:'true',ref:'data:ds_ctrt.clntPicNm','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력사 E-mail',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntEmail',placeholder:'',style:'width:150px;',objType:'data',mandatory:'true',ref:'data:ds_ctrt.clntEmail','data-length':'60',maxByteLength:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',escape:'false',id:'',label:'협력사 휴대전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicTelNo',placeholder:'',style:'width:150px;','ev:onkeypress':'scwin.f_checkCharacter',objType:'data',ref:'data:ds_ctrt.clntPicTelNo'}},{T:1,N:'w2:textbox',A:{class:'info-txt',id:'',label:'휴대전화번호 명의가 계약 담당자명과 동일해야합니다.',ref:'',style:'',tagname:'p',userData2:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Aprv',style:'',type:'button','ev:onclick':'scwin.f_Aprv',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재요청'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Copy',style:'',type:'button','ev:onclick':'scwin.f_Copy',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재사용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})