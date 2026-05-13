/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_03_02b.xml 72279 330faaad71be5eb6e322f6071b8e076f6981d9e483f95ae61904d42eca5791cd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_ctrt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'ctrtDt',name:'계약일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commission',name:'물류대행서비스 수수료(%)',dataType:'number',length:'5',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'ctrtApprDt',name:'계약체결일',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'cargoRegYn',name:'화물연대가입여부',dataType:'number',length:'1',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntAddr',name:'거래처주소',dataType:'text',length:'200'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처이메일',dataType:'text',length:'60'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'clntPicTelNo',name:'거래처담당자전화번호',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'거래처 대표이사',dataType:'text',length:'60'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'계약구분코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'mcomEmpNo',name:'담당자사번',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'numberCompensation',name:'적재물 책임 배상보험 사고당 보상액',dataType:'number',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'operTar',name:'운영대상',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'payCon',name:'대금지급조건',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'년식',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'차량종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'drawUserId',name:'작성자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'drawUserNm',name:'작성자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'clntBrthDt',name:'수탁자생년월일',dataType:'text',length:'8'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25'}},{T:1,N:'w2:key',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'도착권역코드명',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ctrtClsCd',name:'품명',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_reqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'요청자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'EP사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCnt',name:'계약건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'YES'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveEleContractLongVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"}, {"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveEleContractLongVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_ctrt","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reqApprove',action:'/ds.sd.salesactiv.ctrtmgnt.EleContractApproveCMD.do',method:'post',mediatype:'application/x-www-form-urlencoded',ref:'data:json,{"id":"dma_reqApprove","key":"IN_DS1"}',target:'_blank',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reqApprove_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// LoginDTO loginDTO = LoginUtil.getLoginDTO(request);
scwin.userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn") + "";

// String currentDate = DDate.getDate("");	// 현재일자를 구한다.
// DDate sDate = new DDate();
// String strFromDate = sDate.getDate("");         // 현재년월일을 구한다.
// strFromDate = strFromDate.substring(0, 6) + "01";
// String strLastDate = Integer.toString(sDate.getLastDate(strFromDate));
// String strToDate = strFromDate.substring(0, 6) + strLastDate;

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

// 화면
scwin.onpageload = function () {
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

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Create2, btn_Copy2, btn_Update2, btn_Cancel2, btn_Save2, btn_Delete2, btn_Aprv2]);

  // f_createHeader();
  ed_ctrtStDt.setValue(scwin.strFromDate);
  ed_ctrtEndDt.setValue(scwin.strToDate);

  /* const codeOptions = [
      { grpCd: "ZZ021", compID: "lc_apprvStsCd,gr_ctrt:apprvStsCd" } // 상태
  ]
  $c.data.setCommonCode(codeOptions) */
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
  // var rtnList = new Array();
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
  if (ret[0] == "N/A") {
    return;
  }
  ed_clntCrn.setValue(ret[0]); // 사업자등록번호
};
scwin.udc_clntCrn_form_callBackFunc = function (ret) {
  if (ret[0] == "N/A") {
    return;
  }
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
      $c.gus.cfDisableBtn($p, [btn_Update2, btn_Cancel2, btn_Save2, btn_Aprv2, btn_Copy2, btn_Delete2]);
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
  $c.gus.cfDisableBtn($p, [btn_Cancel2, btn_Save2]);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableObj($p, ed_ctrtDt, true); // 계약일자
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, true); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, true); // 계약종료일
  // $c.gus.cfEnableObj(ed_ctrtDt_search, true);

  $c.gus.cfEnableObj($p, ed_clntNm2, true); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntAddr, true); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_clntTelNo, true); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntPicNm, true); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_clntCrn2, true); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_clntEmail, true); // 거래처 담당자이메일

  $c.gus.cfEnableObj($p, ed_clntPicTelNo, true); // 거래처 담당자휴대폰
  $c.gus.cfEnableObj($p, ed_clntBrthDt, true); // 수탁자 생년월일
  $c.gus.cfEnableObj($p, ed_mcomEmpNo, true); // 계약 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, true); // 계약 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, true); // 귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, true);
  $c.gus.cfEnableObj($p, ed_commission, true); //물류대행서비스 수수료(%)
  $c.gus.cfEnableObj($p, ed_vehclNo2, true); //차량번호
  $c.gus.cfEnableObj($p, lc_vehclKnd, true); //차량종류(C:컨테이너/B:벌크)
  $c.gus.cfEnableObj($p, ed_prdyr, true); //년식
  $c.gus.cfEnableObj($p, ed_payCon, true); //대금지급조건
  $c.gus.cfEnableObj($p, ed_numberCompensation, true); //적재물배상책임보험 보상한도액
  $c.gus.cfEnableObj($p, txa_operTar, true); //운영대상
  $c.gus.cfEnableObj($p, lc_cargoRegYn, true); // 화물연대가입여부
};

// 항목 Disable
scwin.f_ContentsDisable = function () {
  // 		cfDisableKeyData();

  $c.gus.cfEnableObj($p, ed_ctrtNo2, false); // 계약번호

  $c.gus.cfEnableObj($p, ed_ctrtDt, false); // 계약일자
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, false); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, false); // 계약종료일
  //	ed_	cfEnableObj(ctrtDt_search, false);

  $c.gus.cfEnableObj($p, ed_clntNm2, false); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntAddr, false); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_clntTelNo, false); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntPicNm, false); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_clntCrn2, false); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_clntEmail, false); // 거래처 담당자이메일
  $c.gus.cfEnableObj($p, ed_clntPicTelNo, false); // 거래처 담당자휴대폰
  $c.gus.cfEnableObj($p, ed_clntBrthDt, false); // 수탁자 생년월일

  $c.gus.cfEnableObj($p, ed_mcomEmpNo, false); // 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, false); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, false); // 귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, false);
  $c.gus.cfEnableObj($p, ed_commission, false); //물류대행서비스 수수료(%)
  $c.gus.cfEnableObj($p, ed_vehclNo2, false); //차량번호
  $c.gus.cfEnableObj($p, lc_vehclKnd, false); //차량종류(C:컨테이너/B:벌크)
  $c.gus.cfEnableObj($p, ed_prdyr, false); //년식
  $c.gus.cfEnableObj($p, ed_payCon, false); //대금지급조건
  $c.gus.cfEnableObj($p, ed_numberCompensation, false); //적재물배상책임보험 보상한도액
  $c.gus.cfEnableObj($p, txa_operTar, false); //운영대상
  $c.gus.cfEnableObj($p, lc_cargoRegYn, false); // 화물연대가입여부
};

// 결재요청
scwin.f_Aprv = async function (e) {
  // 		if (!f_ChkDrawUser("결재요청")) {
  //   			return;
  //   		}

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
    vReqApprvTitle = "화물 차량 장기용차 계약서 " + vCtrtCount + " 건 ";
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
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>물류대행 서비스 수수료(%)</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "commission") + "(%)</span></font></p>";
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
        vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>수탁자 소재지</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'  colspan='3'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "clntAddr") + "</span></font></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "</tr>";
        vApprvDtlInfo += "</table>";
        vApprvDtlInfo += "<br>";
        vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[차량정보]</span>";
        vApprvDtlInfo += "<table border='1' width='1350' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom: 2px;'>";
        vApprvDtlInfo += "<tr>";
        vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>차량번호</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "vehclNo") + "</span></font></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>컨테이너/벌크 차종구분</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'>";
        if (ds_ctrt.getCellData(m, "vehclKnd") == "C") {
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'> 컨테이너</span></font></p>";
        } else if (ds_ctrt.getCellData(m, "vehclKnd") == "B") {
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'> 벌크</span></font></p>";
        }
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>년식</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_ctrt.getCellData(m, "prdyr") + "</span></font></p>";
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
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>적재물배상책임보험 <br>보상한도액</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_ctrt.getCellData(m, "numberCompensation")) + "(원)</span></font></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
        vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>화물연대가입여부</span></font><span style='font-size:10pt;'></span></p>";
        vApprvDtlInfo += "</td>";
        vApprvDtlInfo += "<td width='200'>";
        if (ds_ctrt.getCellData(m, "cargoRegYn") == "0") {
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>N</span></font></p>";
        } else if (ds_ctrt.getCellData(m, "cargoRegYn") == "1") {
          vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>Y</span></font></p>";
        }
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

    dma_reqApprove.set("apprvDocKndCd", vReqApprvDocKndCd); // 결재문서종류
    dma_reqApprove.set("reqUserId", vReqUserId); // 결재요청자
    dma_reqApprove.set("epUserId", vEpUsrId); // EP사용자
    dma_reqApprove.set("apprvTitle", vReqApprvTitle); // 결재제목
    dma_reqApprove.set("apprvDtlInfo", vApprvDtlInfo); // 결재문서양식
    dma_reqApprove.set("ctrtNo", vCtrtNoList); // 계약번호리스트
    dma_reqApprove.set("ctrtCnt", vCtrtCount); // 계약전송건수
    dma_reqApprove.set("ElectronicApprovalRequestFrame", "YES"); // 전자결재요청화면 여부

    //$c.sbm.execute(sbm_reqApprove)

    /* 		const params = {
    			apprvDocKndCd      : vReqApprvDocKndCd , //결재문서종류
    			reqUserId : vReqUserId ,//결재요청자
    			epUserId : vEpUsrId ,//EP사용자
    			apprvTitle : vReqApprvTitle ,//결재제목
    			apprvDtlInfo : vApprvDtlInfo ,//결재문서양식
    			ctrtNo : vCtrtNoList , //계약번호리스트
    			ctrtCnt : vCtrtCount, //계약전송건수
    			ElectronicApprovalRequestFrame : "YES", //전자결재요청화면 여부
    		};
    
    		dma_reqApprove.setJSON(params); */
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
      return;
    }
    Object.keys(data).forEach(key => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = (data[key] ?? "").toString();
      form.appendChild(input);
    });
    /////////////////////// param 확인 TEST START /////////////
    // var f = form;
    // var str = "";

    // for (var i = 0; i < f.elements.length; i++) {
    //     var el = f.elements[i];
    //     str += el.name + " : " + el.value + "\n";
    // }

    // win.document.write("<textarea style='width:100%;height:100%;'>" + str + "</textarea>");
    ///////////////////// param 확인 TEST END  //////////////

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
};

// 재사용
scwin.f_Copy = function (e) {
  let rowData = ds_ctrt.getRowData(ds_ctrt.getRowPosition());
  ds_ctrt.setRowPosition(ds_ctrt.getRowCount());
  ds_ctrt.setRowData(ds_ctrt.getRowPosition(), rowData, false);
  ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtNo", ""); // 계약번호
  ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "apprvStsNm", ""); // 결재상태
  ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtApprDt", ""); // 계약체결유무

  $c.gus.cfDisableBtn($p, [btn_Create2, btn_Copy2, btn_Update2, btn_Delete2, btn_Aprv2]);
  $c.gus.cfEnableObjects($p, [btn_Cancel2, btn_Save2]);
  scwin.f_ContentsEnable();
  gr_ctrt.setFocusedCell(ds_ctrt.getRowPosition(), 0);
};

// 신규
scwin.f_Create = function (e) {
  ds_ctrt.insertRow();
  ds_ctrt.setRowPosition(ds_ctrt.getRowCount() - 1);
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [btn_Create2, btn_Copy2, btn_Update2, btn_Aprv2]);
  $c.gus.cfEnableObjects($p, [btn_Cancel2, btn_Save2]);
  let rowIndex = ds_ctrt.getRowPosition();
  ds_ctrt.setCellData(rowIndex, "ctrtClsCd", "DL02"); // 계약서코드
  // ds_ctrt.setCellData(rowIndex, "mcomEmpNm", scwin.g_sUserNm)	// 계약담당자명
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
  $c.gus.cfDisableBtn($p, [btn_Create2, btn_Update2, btn_Delete2, btn_Aprv2]);
};

// 취소
scwin.f_Cancel = function (e) {
  scwin.f_ContentsDisable();

  //ds_ctrt.undoAll()
  $c.data.undoAll($p, ds_ctrt);
  if (ds_ctrt.getRowPosition() >= 0) {
    $c.gus.cfDisableBtn($p, [btn_Cancel2, btn_Save2]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Cancel2, btn_Save2, btn_Delete2, btn_Aprv2]);
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
  }, {
    id: "commission",
    name: "물류대행 서비스수수료",
    mandatory: true
  }, {
    id: "vehclNo",
    name: "차량번호",
    mandatory: true
  }, {
    id: "vehclKnd",
    name: "컨테이너/벌크차종구분",
    mandatory: true
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_ctrt, null, null, validArray, "계약내역");
  if (!ret) {
    return;
  }
  if (ed_numberCompensation.getValue() == 0) {
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
  $c.gus.cfDisableBtn($p, [btn_Cancel2, btn_Save2, btn_Delete2, btn_Aprv2]);
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

// Excel Download
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_ctrt.getRowCount();
  var sheetTitle = "장기용차계약서";
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box mw1'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCtrt',refDataMap:'ds_Query',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',edFromId:'ed_ctrtStDt',edToId:'ed_ctrtEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.vehclNo','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',placeholder:'',style:'width:150px;',ref:'data:ds_Query.clntNm','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.ctrtNo','data-length':'25',maxByteLength:'25'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',ref:'data:ds_Query.apprvStsCd',renderType:'component',style:'width: 100px;',submenuSize:'auto',objType:'data','data-length':'2',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',maxlengthCode:'5',style:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',code:'acctDeptCd',name:'acctDeptNm',allowCharCode:'0-9',refDataCollection:'ds_Query',selectID:'retrieveAcctDeptCdInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntCrn',placeholder:'',style:'width: 150px;',ref:'data:ds_Query.clntCrn','data-length':'255',maxByteLength:'255',maxlength:'10'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_clntCrn',style:'',type:'button','ev:onclick':'scwin.f_openCrnPopUp(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_mcomEmpNm',style:'width:150px;',ref:'data:ds_Query.mcomEmpNm','data-length':'255',maxByteLength:'255'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_ctrt',id:'udc_topGrd',gridDownFn:'scwin.f_logisDownLoadExcelSheet',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ctrt',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_ctrt',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',rowStatusWidth:'15','ev:oncellclick':'scwin.gr_ctrt_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'column21',displayMode:'label',value:'check',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'column12',value:'계약번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'수탁자명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'계약일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'계약시작일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'계약종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column15',value:'물류대행서비스수수료'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'결재상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'계약체결유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label',value:'귀속부서코드'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',value:'귀속부서명'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',value:'수탁자생년월일'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',hidden:'false',value:'사업자번호'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column30',displayMode:'label',value:'계약서코드'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column31',displayMode:'label',value:'대표이사'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column32',displayMode:'label',value:'수탁자소재지'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label',value:'수탁자전화번호'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column34',displayMode:'label',value:'수탁자명'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column35',displayMode:'label',value:'수탁자이메일'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label',value:'수탁자휴대폰'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column37',displayMode:'label',value:'담당자사번'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column38',displayMode:'label',value:'결재요청번호'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column39',displayMode:'label',value:'신청상태'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column40',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column41',displayMode:'label',value:'년식'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column42',displayMode:'label',value:'대금지급조건'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column43',displayMode:'label',value:'적재물배상책임보험보상한도액'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',displayMode:'label',value:'운영대상'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column45',displayMode:'label',value:'화물연대가입여부'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'chk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtNo',blockSelect:'false',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ctrtDt',blockSelect:'false',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center',maxlength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'ctrtStDt',blockSelect:'false',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center',maxlength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtEndDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center',allowChar:'0-9',maxlength:'8'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'commission',displayMode:'label',textAlign:'center',hidden:'true',numberExtraction:'true',dataType:'number',displayFormat:'0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomEmpNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvStsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtApprDt',displayMode:'label',textAlign:'center',displayFormatter:'scwin.displayCtrtApprDt',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntBrthDt',displayMode:'label',textAlign:'left',displayFormat:'yyyy/MM/dd',dataType:'date',maxlength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntCrn',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntRepstNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntAddr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntPicNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntEmail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntPicTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mcomEmpNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvReqNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvStsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclKnd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prdyr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payCon',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'numberCompensation',displayMode:'label',numberExtraction:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'operTar',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoRegYn',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo2',placeholder:'',style:'width:150px;',objType:'data',validExp:'차량번호:no',ref:'data:ds_ctrt.vehclNo','data-length':'20',maxByteLength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너/벌크 차종구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vehclKnd',style:'width:120px;',submenuSize:'auto',ref:'data:ds_ctrt.vehclKnd','data-length':'2',displayMode:'label',chooseOptionLabel:'선택',chooseOptionValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년식',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_prdyr',placeholder:'',style:'width:150px;',objType:'data',validExp:'년식:no',ref:'data:ds_ctrt.prdyr','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대금지급조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_payCon',placeholder:'',style:'width:150px;',objType:'data',validExp:'대금지급조건:no',ref:'data:ds_ctrt.payCon','data-length':'100',maxByteLength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적재물배상책임보험 보상한도액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_numberCompensation',placeholder:'',style:'width:150px;',validExp:'적재물배상책임보험 보상한도액:no',objType:'data',ref:'data:ds_ctrt.numberCompensation','data-length':'13',dataType:'number',inputMode:'numeric',maxlength:'13',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물연대가입여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cargoRegYn',style:'width:150px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'선택',ref:'data:ds_ctrt.cargoRegYn','data-length':'1',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'운영대상<br/><em>(주요 투입 고객사명,<br/> 구간 등)</em>',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'txa_operTar',style:'',ref:'data:ds_ctrt.operTar','data-length':'500',maxByteLength:'500'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group col5',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo2',placeholder:'',style:'width:150px;',objType:'data',validExp:'계약번호:no',ref:'data:ds_ctrt.ctrtNo','data-length':'25',maxByteLength:'25'}},{T:1,N:'w2:textbox',A:{id:'',label:'(자동부여) ',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자사번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','data-length':'10',id:'ed_mcomEmpNo',maxByteLength:'10',objType:'data',placeholder:'',ref:'data:ds_ctrt.mcomEmpNo',style:'width:150px;',validExp:'담당자사번:yes'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','data-length':'30',id:'ed_mcomEmpNm2',maxByteLength:'30',objType:'data',placeholder:'',ref:'data:ds_ctrt.mcomEmpNm',style:'width:150px;',validExp:'담당자명:yes'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약귀속부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'acctDeptCd',codeId:'ed_acctDeptCd2','ev:onblurCodeEvent':'scwin.udc_acctDeptCd2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd2_onclickEvent',maxlengthCode:'5','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd2_onviewchangeNameEvent',hideName:'Y',id:'udc_acctDeptCd2',name:'acctDeptNm',nameId:'ed_acctDeptNm2',popupID:'',refDataCollection:'ds_ctrt',selectID:'retrieveAcctDeptCdInfo',style:'width: 250px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자명(업체명)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm2',placeholder:'',style:'width:150px;',objType:'data',validExp:'수탁자명:yes',ref:'data:ds_ctrt.clntNm','data-length':'70',maxByteLength:'70'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'ctrtStDt',refDataMap:'ds_ctrt',style:'',id:'udc_fromToCtrt2',refEdDt:'ctrtEndDt',edFromId:'ed_ctrtStDt2',edToId:'ed_ctrtEndDt2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col5',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'물류대행 서비스<br/>수수료(%)',style:'',escape:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_commission',placeholder:'',style:'width: 150px;',validExp:'물류대행 서비스 수수료:yes',objType:'data',dataType:'float',ref:'data:ds_ctrt.commission',inputMode:'numeric',maxlength:'.1'}},{T:1,N:'w2:textbox',A:{id:'',label:'%',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ctrtDt',style:'',objType:'data',validExp:'계약일자:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_ctrt.ctrtDt','data-length':'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자 소재지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'','ev:onviewchange':'scwin.ed_input1_onviewchange',id:'ed_clntAddr',style:'',validExp:'주소:yes',ref:'data:ds_ctrt.clntAddr','data-length':'200',maxByteLength:'200'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.f_openZipPopUp',id:'btn_zip_search',style:'',title:'Search',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수탁자 기본정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'휴대전화번호 명의가 수탁자명과 동일해야합니다.',class:'info-txt'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',code:'clntCrn',codeId:'ed_clntCrn2',refDataCollection:'ds_ctrt',mandatoryCode:'true',maxlengthCode:'10',hideName:'true',id:'udc_clntCrn','ev:onclickEvent':'scwin.udc_clntCrn_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자 전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntTelNo',placeholder:'',style:'width:150px;',objType:'data',ref:'data:ds_ctrt.clntTelNo','data-length':'20',maxByteLength:'20','ev:onkeypress':'scwin.f_checkCharacter'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicNm',placeholder:'',style:'width:150px;',mandatory:'true',objType:'data',ref:'data:ds_ctrt.clntPicNm','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁자 E-mail',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntEmail',placeholder:'',style:'width:150px;',mandatory:'true',objType:'data',ref:'data:ds_ctrt.clntEmail','data-length':'60',maxByteLength:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁자 휴대전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicTelNo',placeholder:'',style:'width: 150px;',validExp:'휴대전화번호:no:telNumber',objType:'data',mandatory:'true',ref:'data:ds_ctrt.clntPicTelNo','data-length':'20',maxByteLength:'50','ev:onkeypress':'scwin.f_checkCharacter'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자 생년월일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_clntBrthDt',style:'',objType:'data',validExp:'생년월일:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_ctrt.clntBrthDt','data-length':'8'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Aprv2',style:'',type:'button','ev:onclick':'scwin.f_Aprv',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재요청'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Copy2',style:'',type:'button','ev:onclick':'scwin.f_Copy',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재사용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create2',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update2',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel2',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save2',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete2',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})