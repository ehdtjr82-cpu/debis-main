/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_03_01b.xml 86275 e3830840916c4a2876a1cbf33ad10614f8b4d02e0b07f8cf8b7ef4968c457f8c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'1'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'25'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'70'}},{T:1,N:'w2:column',A:{id:'ctrtDt',name:'계약일자',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'8'}},{T:1,N:'w2:column',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'30'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태코드',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'300'}},{T:1,N:'w2:column',A:{id:'ctrtApprDt',name:'계약체결일',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'8'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'20'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'50'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'10'}},{T:1,N:'w2:column',A:{id:'clntRepstNm',name:'거래처 대표이사',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'60'}},{T:1,N:'w2:column',A:{id:'clntAddr',name:'거래처주소',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'200'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'20'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'50'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처이메일',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'60'}},{T:1,N:'w2:column',A:{id:'clntPicTelNo',name:'거래처담당자전화번호',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'50'}},{T:1,N:'w2:column',A:{id:'mcomEmpNo',name:'담당자사번',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'10'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'15'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'2'}},{T:1,N:'w2:column',A:{id:'propertyInsurance',name:'종합보험 대물 보험금',dataType:'number',defaultValue:'0',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'13'}},{T:1,N:'w2:column',A:{id:'numberCompensation',name:'적재물 책임 배상보험 사고당 보상액',dataType:'number',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'selfPayment',name:'적재물 배상 책임보험 자기부담금',dataType:'number',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'administrationCost',name:'관리비(월)',dataType:'number',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'agencyCommission',name:'물류대행 서비스 수수료',dataType:'number',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'5',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vehclCommissionG',name:'피견인차량사용료(월)_일반',dataType:'number',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vehclCommissionD',name:'피견인차량사용료(월)_3축신생tire',dataType:'number',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'13',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drawUserId',name:'작성자ID',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'8'}},{T:1,N:'w2:column',A:{id:'drawUserNm',name:'작성자명',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'50'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'5'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'계약구분코드',dataType:'text',defaultValue:'',encYN:'FALSE',ignoreStatus:'',importFormatter:'',length:'4'}},{T:1,N:'w2:column',A:{id:'clntBrthDt',name:'수탁자생년월일',dataType:'text',length:'8'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'vehclName',name:'차명',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'년식',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'shipwgtVol',name:'적재적량',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'차대번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'차량종류',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'payCon',name:'대금지급조건',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'operTar',name:'운영대상',dataType:'text',defaultValue:'',length:'500'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',length:'25'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:'',length:'3'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25'}},{T:1,N:'w2:key',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'도착권역코드명',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ctrtClsCd',name:'품명',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryDtl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_reqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'요청자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'EP사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCnt',name:'계약건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'YES'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempVehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveEleContractOwnVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"}, {"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveEleContractOwnVehclDtlListCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVehcl_submitdone','ev:submiterror':'',id:'sbm_retrieveVehcl',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_QueryDtl","key":"IN_DS1"}, {"id":"ds_vehcl","key":"OUT_DS1"}]',replace:'',target:'data:json,[{"id":"ds_vehcl","key":"OUT_DS1"}]',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveEleContractOwnVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"action":"modified","id":"ds_vehcl","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reqApprove',action:'/ds.sd.salesactiv.ctrtmgnt.EleContractApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_reqApprove',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reqApprove_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 
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
scwin.rowCount = "-1";
scwin.ctrtClsCd = "DL01";

// 화면로딩시
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
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Cancel, btn_Save, btn_Delete, btn_Aprv, btn_addRow, btn_deleteRow, btn_cancelRow]);

  // f_createHeader();
  ed_ctrtStDt.setValue(scwin.strFromDate);
  ed_ctrtEndDt.setValue(scwin.strToDate);

  // TEST DATA
  // ds_retrieveCtrtClnt.set("ctrtClntNo", 316381)
  //ed_ctrtStDt.setValue("20221101")
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

// master(계약정보) 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    tbx_totalRows2.setValue(0);
    //gr_master.checkAll('chk', false)
    if (ds_master.getRowCount() == 0) {
      scwin.f_ContentsDisable();
      ds_vehcl.removeAll();
      $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save, btn_Aprv, btn_Copy, btn_Delete]);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    } else {
      scwin.rowCount = ds_master.getRowCount();
      // 		cfGoPrevPosition(ds_master, pos_ctrt);  // 저장 이전 로우
      ds_vehcl.removeAll();
      ds_master.setRowPosition(0);
      gr_ctrt.setFocusedCell(0, 0);
      ds_QueryDtl.set("ctrtNo", ds_master.getCellData(0, "ctrtNo")); // 계약번호

      $c.sbm.execute($p, sbm_retrieveVehcl);
    }

    // 그리드 조회건수
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_master.getRowCount()));
  }
};

// detail(차량정보) 조회 완료
scwin.sbm_retrieveVehcl_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_vehcl.getRowCount() == 0) {
      $c.win.alert($p, "조회된 차량정보 데이터가 없습니다.");
    }
    // 그리드 조회건수
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_vehcl.getRowCount()));
  }
};

// 저장(계약정보) 완료시
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Cancel, btn_Save, btn_Aprv]);
  scwin.f_Retrieve();
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
    if (rtnList[0] == "N/A") return;
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
  // if (gbn == "1") {//조회인경우
  //     udc_clntCrn.cfCommonPopUp(scwin.udc_clntCrn_srch_callBackFunc
  // } else {
  // }
  udc_clntCrn.setSelectId("retrieveCrnInfo");
  udc_clntCrn.cfCommonPopUp(gbn == "1" ? scwin.udc_clntCrn_srch_callBackFunc : scwin.udc_clntCrn_form_callBackFunc, '', '', "F", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  사업자등록번호
};

// 사업자등록정보 공통팝업
scwin.f_openCrnPopUp = function (_schGb) {
  scwin.udc_clntCrn_onclickEvent(_schGb);
};

////////////////////////////////////////////////////////
// 사업자번호 공통팝업 그리드 콜백
////////////////////////////////////////////////////////
scwin.udc_clntCrn_srch_callBackFunc = function (ret) {
  ed_clntCrn.setValue(ret[0]); // 사업자등록번호
};
scwin.udc_clntCrn_form_callBackFunc = function (ret) {
  ed_clntCrn2.setValue(ret[0]); // 사업자등록번호
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
  for (i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "T") {
      vCtrtCount++;
      vCtrtNo = ds_master.getCellData(i, "ctrtNo");
      vDrawUserNm = ds_master.getCellData(i, "drawUserNm");
      if (scwin.g_sUserId != ds_master.getCellData(i, "drawUserId")) {
        $c.win.alert($p, "계약번호[" + vCtrtNo + "] " + "결재요청은 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
        return false;
      }
    }
  }
  if (vCtrtCount > 20) {
    $c.win.alert($p, "20건 초과된 계약을 한번에 전자결재 요청하실 수 없습니다.");
    return;
  }
  let ret = await $c.win.confirm($p, "전자결재 요청하시겠습니까?");
  if (ret != true) {
    return;
  }

  //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var vReqApprvDocKndCd = "039"; // 결재문서종류 -- 전자계약 신청(공통코드 ZZ022)
  var vReqUserId = scwin.g_sUserId; // 결재요청자 ID
  var vEpUsrId = scwin.g_sEmpNo; // EP사용자 ID
  var vReqApprvTitle = "";
  //         if ( vCtrtCount > 1 ) {
  vReqApprvTitle = "화물 차량 지입 관리 계약서 " + vCtrtCount + " 건 ";
  //         }  else {
  //         	vReqApprvTitle = "화물 차량 지입 관리 계약서[ " + ds_master.NameValue(ds_master.RowPosition, "clntNm") + " ] ";
  //         }

  var vApprvDtlInfo = "<br>";
  for (var m = 0; m < ds_master.getRowCount(); m++) {
    if (ds_master.getCellData(m, "chk") == "T") {
      vCtrtNoList += ds_master.getCellData(m, "ctrtNo") + "_";
      vApprvDtlInfo += "<span style='font-size:10pt;'>*계약번호(" + ds_master.getCellData(m, "ctrtNo") + ")</span>";
      vApprvDtlInfo += "<br><br>";
      vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[계약정보]</span>";
      vApprvDtlInfo += "<table border='1' width='1350' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom: 2px;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>수탁자명</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_master.getCellData(m, "clntNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>계약기간</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      var ctrtStDt = $c.gus.cfGetFormatStr($p, ds_master.getCellData(m, "ctrtStDt"), "####/##/##");
      var ctrtEndDt = $c.gus.cfGetFormatStr($p, ds_master.getCellData(m, "ctrtEndDt"), "####/##/##");
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ctrtStDt + " ~ " + ctrtEndDt + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>종합보험 대물 보험금</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_master.getCellData(m, "propertyInsurance")) + "(원)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>적재물 책임 배상보험 <br>사고당 보상액</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_master.getCellData(m, "numberCompensation")) + "(원)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>적재물배상책임보험 <br>자기부담금</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_master.getCellData(m, "selfPayment")) + "(원)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>관리비(월)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_master.getCellData(m, "administrationCost")) + "(원)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>물류대행 서비스 <br>수수료</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_master.getCellData(m, "agencyCommission") + "(%)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>피견인차량 <br>사용료(월)_일반</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_master.getCellData(m, "vehclCommissionG")) + "(원)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>피견인차량 <br>사용료(월)_3축 및 신생타이어</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, ds_master.getCellData(m, "vehclCommissionD")) + "(원)</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>계약서일자</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      var ctrtDt = $c.gus.cfGetFormatStr($p, ds_master.getCellData(m, "ctrtDt"), "####/##/##");
      vApprvDtlInfo += "<td width='200'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ctrtDt + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='250' height='50' style='background-color:#F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>수탁자 소재지</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='200'  colspan='3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ds_master.getCellData(m, "clntAddr") + "</span></font></p>";
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
};
scwin.f_checkCharacter = function (e) {
  if (e.keyCode != 45 && (e.keyCode < 48 || e.keyCode > 57)) {
    $c.win.alert($p, "전화번호는 '숫자', '-' 만 입력 가능 합니다.");
    e.returnValue = false;
    //return;
  }
};

// 재사용
scwin.f_Copy = function (e) {
  let rowData = ds_master.getRowData(ds_master.getRowPosition());
  ds_master.setRowPosition(ds_master.getRowCount());
  ds_master.setRowData(ds_master.getRowPosition(), rowData, false);
  ds_master.setCellData(ds_master.getRowPosition(), "ctrtNo", ""); // 계약번호
  ds_master.setCellData(ds_master.getRowPosition(), "apprvStsNm", ""); // 결재상태
  ds_master.setCellData(ds_master.getRowPosition(), "ctrtApprDt", ""); // 계약체결유무

  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Delete, btn_Aprv]);
  $c.gus.cfEnableObjects($p, [btn_Cancel, btn_Save, btn_addRow, btn_deleteRow, btn_cancelRow]);
  // ds_tempVehcl.ImportData(ds_vehcl.ExportData(1, ds_vehcl.CountRow, true));
  // ds_tempVehcl.ClearData();
  // ds_tempVehcl.ImportData(ds_vehcl.ExportData(1,ds_vehcl.CountRow, true));
  // ds_vehcl.ImportData(ds_tempVehcl.ExportData(1,ds_tempVehcl.CountRow, true));

  ds_tempVehcl.removeAll();
  //      * @param {string} features desc
  //  *     copyHeader  : Header를 복사할지 여부. (default:yes)
  //  *     resetStatus : 복사된 DataSet의 Status를 reset 할 지 여부. (default:yes)
  //  *     rowFrom     : 복사할 row의 시작 index. (default:1)
  //  *     rowCnt      : 복사할 row의 갯수 index. (default:DataSet.CountRow 의 값)
  //  *     사용예) "copyHeader=yes,rowFrom=1,rowCnt=2"  -> 1번 row 부터 3번 row까지 Header와 함께 복사함.
  var features = "copyHeader=no,rowFrom=0,rowCnt=" + ds_vehcl.getRowCount();
  $c.gus.cfCopyDataSet($p, ds_vehcl, ds_tempVehcl, features);
  ds_vehcl.removeAll();
  var features = "copyHeader=no,rowFrom=0,rowCnt=" + ds_tempVehcl.getRowCount();
  $c.gus.cfCopyDataSet($p, ds_tempVehcl, ds_vehcl, features);
  for (let i = 0; i < ds_vehcl.getRowCount(); i++) {
    ds_vehcl.setCellData(i, "ctrtNo", ed_ctrtNo2.getValue()); // 계약번호
    ds_vehcl.modifyRowStatus(i, 'C'); // 상태값
  }
  scwin.f_ContentsEnable();
};

// 신규
scwin.f_Create = function (e) {
  ds_master.insertRow();
  ds_master.setRowPosition(ds_master.getRowCount() - 1);
  ds_vehcl.removeAll();
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Delete, btn_Aprv]);
  $c.gus.cfEnableObjects($p, [btn_Cancel, btn_Save, btn_addRow, btn_deleteRow, btn_cancelRow]);
  let rowIndex = ds_master.getRowPosition();
  ds_master.setCellData(rowIndex, "ctrtClsCd", "DL01"); // 계약서코드
  ds_master.setCellData(rowIndex, "mcomEmpNm", scwin.g_sUserNm); // 계약담당자명
  ds_master.setCellData(rowIndex, "acctDeptCd", scwin.g_sAcctDeptCd); // 귀속부서
  ds_master.setCellData(rowIndex, "acctDeptNm", scwin.g_sAcctDeptNm);
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
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Copy, btn_Update, btn_Delete, btn_Aprv]);
  $c.gus.cfEnableObjects($p, [btn_addRow, btn_deleteRow, btn_cancelRow]);
};

// 취소
scwin.f_Cancel = function (e) {
  scwin.f_ContentsDisable();
  $c.data.undoAll($p, ds_master);
  $c.data.undoAll($p, ds_vehcl);
  if (ds_master.getRowPosition() >= 0) {
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
         return;
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
  if (ds_vehcl.getRowCount() == 0) {
    $c.win.alert($p, "차량정보는 필수입력사항입니다.");
    return false;
  }

  //차량정보 필수값체크
  let validArray2 = [{
    id: "vehclNo",
    name: "차량번호",
    mandatory: true
  }, {
    id: "vehclName",
    name: "차명",
    mandatory: true
  }, {
    id: "prdyr",
    name: "년식",
    mandatory: true
  }, {
    id: "shipwgtVol",
    name: "적재량",
    mandatory: true
  }, {
    id: "drcrNo",
    name: "차대번호",
    mandatory: true
  }];
  /*
     ret = await $c.gus.cfValidate(gr_vehcl)
     if (!ret) {
         return;
     }
  */
  ret = await $c.gus.cfValidateGrid($p, gr_vehcl, null, null, validArray2, "차량정보");
  if (!ret) {
    return;
  }

  //변경한 데이터가 있는지 체크한다. 
  if (ds_master.getModifiedIndex().length < 1 && ds_vehcl.getModifiedIndex().length < 1) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ed_propertyInsurance.getValue() == 0) {
    $c.win.alert($p, "종합보험 대물 보험금은 필수입력사항입니다");
    return;
  }
  if (ed_numberCompensation.getValue() == 0) {
    $c.win.alert($p, "적재물 책임 배상보험 사고당은  필수입력사항입니다");
    return;
  }

  // 저장확인 
  ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret == true) {
    pos_ctrt = ds_master.getRowPosition();
    $c.sbm.execute($p, sbm_save);
  }
};

// 삭제
scwin.f_Delete = async function (e) {
  if (!scwin.f_ChkDrawUser("삭제")) {
    return;
  }
  if (!scwin.f_ChkApprvSts("DELETE")) {
    return;
  }
  let row = ds_master.getRowPosition() ?? scwin.rowPos;
  if (row >= 0) {
    ds_master.deleteRow(row);
    var vCtrtNo = ds_master.getCellData(row, "ctrtNo");
    let ret = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, Array("선택하신 계약번호(" + vCtrtNo + ")")));
    if (ret == true) {
      $c.sbm.execute($p, sbm_save);
    } else {
      scwin.f_Cancel();
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 사용여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayCtrtApprDt = function (data) {
  return $c.gus.decode($p, data, "", "N", "Y");
};

// 항목 Enable
scwin.f_ContentsEnable = function () {
  // 		cfEnableKeyData();

  $c.gus.cfEnableObj($p, ed_ctrtDt, true); // 계약일자
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, true); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, true); // 계약종료일
  // $c.gus.cfEnableObjects([udc_fromToCtrt2])       // 계약기간

  $c.gus.cfEnableObj($p, ed_clntNm2, true); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntAddr, true); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_clntTelNo, true); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntCrn2, true); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_clntPicNm, true); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_clntEmail, true); // 거래처 담당자이메일
  $c.gus.cfEnableObj($p, ed_clntPicTelNo, true); // 거래처 담당자휴대폰
  $c.gus.cfEnableObj($p, ed_clntBrthDt, true);
  $c.gus.cfEnableObj($p, ed_mcomEmpNo, true); // 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, true); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, true); // 계약귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, true); // 계약귀속부서명

  $c.gus.cfEnableObj($p, ed_propertyInsurance, true); //종합보험 대물 보험금
  $c.gus.cfEnableObj($p, ed_numberCompensation, true); //화폐적재물 책임 배상보험 사고당 보상액
  $c.gus.cfEnableObj($p, ed_selfPayment, true); //적재물 배상 책임보험 자기부담금
  $c.gus.cfEnableObj($p, ed_administrationCost, true); //관리비(월)
  $c.gus.cfEnableObj($p, ed_agencyCommission, true); //물류대행 서비스 수수료
  $c.gus.cfEnableObj($p, ed_vehclCommissionG, true); //피견인차량 사용료(월)_일반
  $c.gus.cfEnableObj($p, ed_vehclCommissionD, true); //피견인차량 사용료(월)_3축 및 신생타이어
};

// 항목 Disable
scwin.f_ContentsDisable = function () {
  // 		cfDisableKeyData();

  $c.gus.cfEnableObj($p, ed_ctrtNo2, false); // 계약번호

  $c.gus.cfEnableObj($p, ed_ctrtDt, false); // 계약일자
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, false); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, false); // 계약종료일
  // $c.gus.cfEnableObjects([udc_fromToCtrt2])       // 계약기간

  $c.gus.cfEnableObj($p, ed_clntNm2, false); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntAddr, false); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_clntTelNo, false); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntCrn2, false); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_clntPicNm, false); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_clntEmail, false); // 거래처 담당자이메일
  $c.gus.cfEnableObj($p, ed_clntPicTelNo, false); // 거래처 담당자휴대폰
  $c.gus.cfEnableObj($p, ed_clntBrthDt, false);
  $c.gus.cfEnableObj($p, ed_mcomEmpNo, false); // 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, false); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, false); // 계약귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, false); // 계약귀속부서명

  $c.gus.cfEnableObj($p, ed_propertyInsurance, false); //종합보험 대물 보험금
  $c.gus.cfEnableObj($p, ed_numberCompensation, false); //화폐적재물 책임 배상보험 사고당 보상액
  $c.gus.cfEnableObj($p, ed_selfPayment, false); //적재물 배상 책임보험 자기부담금
  $c.gus.cfEnableObj($p, ed_administrationCost, false); //관리비(월)
  $c.gus.cfEnableObj($p, ed_agencyCommission, false); //물류대행 서비스 수수료
  $c.gus.cfEnableObj($p, ed_vehclCommissionG, false); //피견인차량 사용료(월)_일반
  $c.gus.cfEnableObj($p, ed_vehclCommissionD, false); //피견인차량 사용료(월)_3축 및 신생타이어

  $c.gus.cfDisableBtn($p, [btn_addRow, btn_deleteRow, btn_cancelRow]);
};
scwin.rowPos = 0;
// 계약정보 행 변경시
scwin.ds_master_onrowpositionchange = function (info) {
  scwin.rowPos = info.newRowIndex ?? scwin.rowPos;
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
};

// 작성자  체크
scwin.f_ChkDrawUser = function (strChk) {
  let rowPos = ds_master.getRowPosition() ?? scwin.rowPos;
  var vCtrtNo = ds_master.getCellData(rowPos, "ctrtNo");
  var vDrawUserNm = ds_master.getCellData(rowPos, "drawUserNm");
  if (scwin.g_sUserId != ds_master.getCellData(rowPos, "drawUserId")) {
    $c.win.alert($p, "계약번호[" + vCtrtNo + "] " + strChk + "작업은 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
    return false;
  }
  return true;
};

// 결재상태 체크
scwin.f_ChkApprvSts = function (flag) {
  let rowPos = ds_master.getRowPosition() ?? scwin.rowPos;
  var vApprvStsCd = ds_master.getCellData(rowPos, "apprvStsCd");
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

// 계약정보 Grid
scwin.gr_ctrt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (ds_master.getRowStatusValue(rowIndex) != "2") {
      //신규건이 아닌경우
      if (columnId != "chk") {
        ds_vehcl.removeAll();
        ds_QueryDtl.set("ctrtNo", ds_master.getCellData(rowIndex, "ctrtNo")); // 계약번호
        $c.sbm.execute($p, sbm_retrieveVehcl);
      }
    }
  }
};
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
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
    // 귀속부서
    case '1':
      var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
      rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', cd, nm, "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
      f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      break;
    // 담당자 사번
    case '2':
      var pWhere = "";
      if (ctrtDt.Text == "") {
        pWhere = ed_ctrtStDt.getValue().substring(0, 4);
      } else {
        pWhere = ctrtDt.getValue().substring(0, 4);
      }
      pWhere = pWhere + ",,,,,,,,," + "000";
      rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', cd, nm, "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
      f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      break;
    default:
      $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.Text == orgObjCd.hidVal) {
      return;
    } else {
      orgObjNm.Text = "";
    }
  } else {
    if (orgObjNm.Text == orgObjNm.hidVal) {
      return;
    } else {
      orgObjCd.Text = "";
    }
  }
  if (orgObjCd.Text.trim() != "" || flag == "NM") {
    if (orgObjNm.Text.trim() != "" || flag == "CD") {
      orgObjCd.Text = orgObjCd.Text.trim();
      orgObjNm.Text = orgObjNm.Text.trim();
      f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.Text = "";
    orgObjCd.Text = "";
    orgObjCd.hidVal = "";
  }
};

// 결재요청 처리 완료시
scwin.sbm_reqApprove_submitdone = function (e) {};

// 행추가
scwin.f_AddRow = function () {
  ds_vehcl.insertRow();
  ds_vehcl.setRowPosition(ds_vehcl.getRowCount() - 1);
  ds_vehcl.setCellData(ds_vehcl.getRowPosition(), "ctrtNo", ed_ctrtNo2.getValue()); // 계약번호
};

//  행삭제
scwin.f_DeleteRow = function () {
  ds_vehcl.deleteRow(ds_vehcl.getRowPosition());
};

// 차량정보 취소
scwin.f_CancelRow = function () {
  //    ds_vehcl.UndoMarked()
  $c.data.undoRow($p, ds_vehcl, "Y");
};

// 조회조건 초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

// 엑셀다운
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_master.getRowCount();
  var sheetTitle = "지입(자차)관리계약서";
  if (vResultCountRow != 0) {
    var cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCtrt',refDataMap:'ds_Query',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',mandatory:'true',edFromId:'ed_ctrtStDt',edToId:'ed_ctrtEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control',id:'ed_vehclNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.vehclNo','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control',id:'ed_clntNm',placeholder:'',style:'width:150px;',ref:'data:ds_Query.clntNm','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control',id:'ed_ctrtNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.ctrtNo','data-length':'25',maxByteLength:'25'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',ref:'data:ds_Query.apprvStsCd',renderType:'component',style:'width: 100px;',submenuSize:'auto',objType:'data','data-length':'2',chooseOptionLabel:'전체',displayMode:'value delim label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',code:'acctDeptCd',name:'acctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',refDataCollection:'ds_Query',selectID:'retrieveAcctDeptCdInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_Query.clntCrn',maxlength:'10',maxByteLength:'255',style:'width: 150px;',id:'ed_clntCrn',placeholder:'',class:'','data-length':'255'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openCrnPopUp(1)',style:'',id:'btn_clntCrn',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_mcomEmpNm',style:'width:150px;',ref:'data:ds_Query.mcomEmpNm','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ctrt',gridUpYn:'N',gridDownFn:'scwin.f_logisDownLoadExcelSheet',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_ctrt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_ctrt_oncellclick',rowStatusVisible:'true',rowStatusWidth:'15','ev:onheaderclick':'scwin.gr_ctrt_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'checkbox',width:'40',value:'check'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'계약번호',width:'200',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'수탁자명',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'계약일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'계약시작일자',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약종료일자',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'담당자명',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'결재상태',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'계약체결유무',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'차량번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',value:'귀속부서코드',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'귀속부서명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'수탁자생년월일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'사업자번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column30',value:'대표이사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column31',value:'수탁자소재지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'수탁자전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column33',value:'수탁자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column34',value:'수탁자이메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'수탁자휴대폰',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column36',value:'종합보험대물보험금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'적재물책임배상보험사고당보상액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column38',value:'적재물배상책임보험자기부담금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'관리비(월)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column40',value:'물류대행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column41',value:'피견인차량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column42',value:'피견인차량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column43',value:'계약서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column44',value:'담당자사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column45',value:'결재요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column46',value:'신청상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column47',value:'작성자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column48',value:'작성자명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtNo',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',maxByteLength:'25',class:'underline'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',class:'req',maxByteLength:'30'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtDt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',class:'req',allowChar:'0-9',maxlength:'8'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtStDt',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',class:'req',allowChar:'0-9',maxlength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'text',width:'120',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',class:'req',allowChar:'0-9',maxlength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcomEmpNm',inputType:'text',width:'120',textAlign:'center',maxByteLength:'30'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtApprDt',inputType:'text',width:'120',textAlign:'center',readOnly:'true',displayFormatter:'scwin.displayCtrtApprDt'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntBrthDt',displayMode:'label',textAlign:'left',displayFormat:'yyyy/MM/dd',dataType:'date',allowChar:'0-9',maxlength:'8'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntCrn',displayMode:'label',textAlign:'center',maxByteLength:'10'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntRepstNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntAddr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntPicNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntEmail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntPicTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'propertyInsurance',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'numberCompensation',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfPayment',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'administrationCost',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'agencyCommission',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclCommissionG',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclCommissionD',displayMode:'label',hidden:'true',textAlign:'right',numberExtraction:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mcomEmpNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvReqNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvStsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawUserId',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawUserNm',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',gridID:'gr_vehcl',gridUpYn:'N',gridDownYn:'N',btnUser:'N',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vehcl',focusMode:'row',id:'gr_vehcl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'차명(자동차등록증상)',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'년식',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'적재량',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차대번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'컨테이너벌크차종구분',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'대금지급조건',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'운영대상 (주요투입고객사명,구간등)',width:'250'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column20',displayMode:'label',hidden:'true',value:'계약번호'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label',hidden:'true',value:'Seq'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclNo',inputType:'text',class:'req',sortable:'true',textAlign:'center',maxByteLength:'20'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclName',inputType:'text',class:'req',sortable:'true',textAlign:'left',maxByteLength:'20'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'prdyr',inputType:'text',class:'req',sortable:'true',textAlign:'center',maxByteLength:'20'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shipwgtVol',inputType:'text',class:'req',sortable:'true',textAlign:'center',maxByteLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrNo',inputType:'text',class:'req',sortable:'true',textAlign:'center',maxByteLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKnd',inputType:'autoComplete',emptyItem:'true',allOption:'',chooseOption:'',ref:'',sortable:'true',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCon',inputType:'text',sortable:'true',textAlign:'left',maxByteLength:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'operTar',inputType:'text',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{inputType:'text',id:'ctrtNo',displayMode:'label'}},{T:1,N:'w2:column',A:{inputType:'text',id:'seq',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowDelObj:'btn_deleteRow',btnRowAddObj:'btn_addRow',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',btnCancelObj:'btn_cancelRow',cancelFunction:'scwin.f_CancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo2',placeholder:'',style:'width:200px;',displayFormat:'#########################',ref:'data:ds_master.ctrtNo','data-length':'25',maxByteLength:'25'}},{T:1,N:'w2:textbox',A:{id:'',label:'(자동부여) ',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자사번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mcomEmpNo',objType:'data',placeholder:'',style:'width:200px;',validExp:'담당자사번:yes',ref:'data:ds_master.mcomEmpNo','data-length':'10',maxByteLength:'10'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mcomEmpNm2',objType:'data',placeholder:'',style:'width:150px;',validExp:'담당자명:yes',ref:'data:ds_master.mcomEmpNm','data-length':'30',maxlength:'30'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약귀속부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'acctDeptCd',codeId:'ed_acctDeptCd2',hideName:'Y',id:'udc_acctDeptCd2',name:'acctDeptNm',nameId:'ed_acctDeptNm2',popupID:'',style:'width: 250px;',maxlengthCode:'5',maxlengthName:'20',refDataCollection:'ds_master',selectID:'retrieveAcctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCd2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCd2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd2_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm2',placeholder:'',style:'width:200px;',objType:'data',validExp:'수탁자명:yes',ref:'data:ds_master.clntNm','data-length':'70',maxByteLength:'30'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCtrt2',refDataMap:'ds_master',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',edFromId:'ed_ctrtStDt2',edToId:'ed_ctrtEndDt2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종합보험 대물 보험금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_propertyInsurance',placeholder:' ',style:'width:150px;',validExp:'종합보험대물보험금:yes',objType:'data',ref:'data:ds_master.propertyInsurance','data-length':'13',maxByteLength:'13',inputMode:'numeric',maxlength:'.1',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'적재물 책임 배상보험 <br/>사고당 보상액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_numberCompensation',placeholder:' ',style:'width:200px;',validExp:'적재물책임배상보험 사고당보상액:yes',objType:'data',ref:'data:ds_master.numberCompensation','data-length':'13',maxByteLength:'13',inputMode:'numeric',maxlength:'.1',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'적재물배상책임보험 <br/>자기부담금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_selfPayment',placeholder:' ',style:'width:150px;',objType:'data',mandatory:'true',ref:'data:ds_master.selfPayment','data-length':'13',maxByteLength:'13',inputMode:'numeric',maxlength:'.1',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리비(월)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_administrationCost',placeholder:' ',style:'width:150px;',mandatory:'true',objType:'data',ref:'data:ds_master.administrationCost','data-length':'13',maxByteLength:'13',inputMode:'numeric',maxlength:'.1',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'물류대행 서비스<br/>수수료(%)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_agencyCommission',placeholder:' ',style:'width:200px;',mandatory:'true',objType:'data',ref:'data:ds_master.agencyCommission','data-length':'5',maxByteLength:'5',inputMode:'numeric',dataType:'float',maxlength:'.1',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'%',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'피견인차량 사용료<br/>(월)_일반',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_vehclCommissionG',placeholder:' ',style:'width:150px;',objType:'data',mandatory:'true',ref:'data:ds_master.vehclCommissionG','data-length':'13',maxByteLength:'13',inputMode:'numeric',maxlength:'.1',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'피견인차량 사용료<br/>(월)_3축 및 신생타이어',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_vehclCommissionD',placeholder:' ',style:'width:150px;',mandatory:'true',objType:'data',ref:'data:ds_master.vehclCommissionD','data-length':'13',maxByteLength:'13',inputMode:'numeric',maxlength:'.1',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{id:'',label:'원',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ctrtDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_master.ctrtDt','data-length':'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자 소재지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntAddr',placeholder:'',style:'',mandatory:'true',ref:'data:ds_master.clntAddr','data-length':'200',maxByteLength:'200'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'zip_search',style:'',type:'button','ev:onclick':'scwin.f_openZipPopUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수탁자 기본정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',tagname:'p',id:'',label:'휴대전화번호 명의가 수탁자명과 동일해야합니다.',class:'info-txt'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'udc_clntCrnPopup',style:'width: 250px;',hideName:'true',id:'udc_clntCrn',codeId:'ed_clntCrn2','ev:onclickEvent':'scwin.udc_clntCrn_onclickEvent',refDataCollection:'ds_master',code:'clntCrn',selectID:'retrieveCrnInfo',maxlengthCode:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자 전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntTelNo',placeholder:'',style:'width:150px;',objType:'data','ev:onkeypress':'scwin.f_checkCharacter',ref:'data:ds_master.clntTelNo','data-length':'20',maxByteLength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicNm',placeholder:'',style:'width:150px;',mandatory:'true',objType:'data',ref:'data:ds_master.clntPicNm','data-length':'50',maxByteLength:'30'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁자 E-mail',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntEmail',placeholder:'',style:'width:200px;',objType:'data',mandatory:'true',ref:'data:ds_master.clntEmail','data-length':'60',maxByteLength:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁자 휴대전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicTelNo',placeholder:'',style:'width:150px;',objType:'data',mandatory:'true',ref:'data:ds_master.clntPicTelNo','data-length':'20',maxByteLength:'20','ev:onkeypress':'scwin.f_checkCharacter'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자 생년월일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_clntBrthDt',style:'',objType:'data',validExp:'생년월일:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_master.clntBrthDt','data-length':'8'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Aprv',style:'',type:'button','ev:onclick':'scwin.f_Aprv',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재요청'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Copy',style:'',type:'button','ev:onclick':'scwin.f_Copy',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재사용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})