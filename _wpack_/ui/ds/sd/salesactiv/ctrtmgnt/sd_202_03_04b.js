/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_03_04b.xml 36809 d3a6c223b340635c279ed3760863b1d7c324d047d4aefc336513e6af271d3c64 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_ctrt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'clntAddr',name:'거래처주소',dataType:'text',length:'200'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인등록번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처이메일',dataType:'text',length:'60'}},{T:1,N:'w2:column',A:{id:'clntPicTelNo',name:'거래처담당자전화번호',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'mcomEmpNo',name:'담당자사번',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'부서코드',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'docNo',name:'문서번호',dataType:'text',length:'30'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'25'}},{T:1,N:'w2:key',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'도착권역코드명',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ctrtClsCd',name:'품명',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'mcomEmpNm',name:'담당자명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dma_reqApprove',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprvDocKndCd',name:'결재문서종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqUserId',name:'요청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'epUserId',name:'EP사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtCnt',name:'계약건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'YES'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveEleContractNonStandardListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"}, {"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveEleContractNonStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_ctrt","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// LoginDTO loginDTO = LoginUtil.getLoginDTO(request);
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
scwin.g_sUserId = $c.data.getMemInfo($p, "userId");
scwin.g_sUserNm = $c.data.getMemInfo($p, "userNm");
scwin.g_sEmpNo = $c.data.getMemInfo($p, "epId");
scwin.currentDate = $c.date.getServerDateTime($p, "yyyyMMdd");

// 화면
scwin.onpageload = function () {};

//----------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_ContentsDisable(false);

  // f_createHeader();
  ed_ctrtStDt.setValue(scwin.strFromDate);
  ed_ctrtEndDt.setValue(scwin.strToDate);
  $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save]);
  // TEST DATA
  // ds_retrieveCtrtClnt.set("ctrtClntNo", 316381)
  //ed_ctrtStDt.setValue("20221101")
};

// 귀속부서 버튼클릭시
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  // 'retrieveAcctDeptCdInfo'
  // ed_acctDeptCd,ed_acctDeptNm,'1','ALL'
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
};

// 귀속부서코드 blur시
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), "", "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
};

// 귀속부서명 변경시
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  // scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, "", ed_acctDeptNm.getValue(), "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
};

// 귀속부서명 변경시
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  // if ( ret.lenght < 0 ) return
  ed_acctDeptCd.setValue(ret[0]);
  ed_acctDeptNm.setValue(ret[1]);
};

// 사업자번호 UDC
scwin.udc_clntCrn_onclickEvent = function (gbn) {
  console.log("[][][udc_clntCrn_onclickEvent] >>> gbn = " + gbn);
  // rtnList = cfCommonPopUp('retrieveCrnInfo', '', '', "F", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  사업자등록번호

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
  console.log("udc_clntCrn_srch_callBackFunc");
  ed_clntCrn.setValue(ret[0]); // 사업자등록번호
};
scwin.udc_clntCrn_form_callBackFunc = function (ret) {
  console.log("udc_clntCrn_form_callBackFunc");
  ed_clntCrn2.setValue(ret[0]); // 사업자등록번호
};

// 조회조건 초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

// 조회
scwin.f_Retrieve = async function (e) {
  scwin.f_ContentsDisable(false);
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
    if (ds_ctrt.getRowCount() == 0) {
      scwin.f_ContentsDisable(false);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
      $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save]);
    } else {
      ds_ctrt.setRowPosition(0);
      gr_ctrt.setFocusedCell(0, 0);
      // 그리드 조회건수
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_ctrt.getRowCount()));
    }
  }
};

// 계약정보 행 변경시
scwin.ds_ctrt_onrowpositionchange = function (info) {
  scwin.f_ContentsDisable(false);
  $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
};

//-------------------------------------------------------------------------
// 항목 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function (_flag) {
  $c.gus.cfEnableObj($p, ed_ctrtNo2, false); // 계약번호
  $c.gus.cfEnableObj($p, ed_ctrtStDt2, false); // 계약시작일
  $c.gus.cfEnableObj($p, ed_ctrtEndDt2, false); // 계약종료일

  $c.gus.cfEnableObj($p, ed_mcomEmpNo, _flag); // 담당자사번
  $c.gus.cfEnableObj($p, ed_mcomEmpNm2, _flag); // 거래처 담당자명
  $c.gus.cfEnableObj($p, ed_acctDeptCd2, _flag); // 귀속부서
  $c.gus.cfEnableObj($p, ed_acctDeptNm2, _flag);
  $c.gus.cfEnableObj($p, ed_clntNm2, _flag); // 거래처 상호
  $c.gus.cfEnableObj($p, ed_clntNo, _flag); // 거래처번호
  $c.gus.cfEnableObj($p, ed_vehclNo2, _flag); // 차량번호
  $c.gus.cfEnableObj($p, ed_clntAddr, _flag); // 거래처 주소
  $c.gus.cfEnableObj($p, ed_repstNm, _flag); // 거래처 대표이사

  $c.gus.cfEnableObj($p, ed_clntCrn2, false); // 거래처 사업자번호
  $c.gus.cfEnableObj($p, ed_corRegNo, false); // 법인번호

  $c.gus.cfEnableObj($p, ed_clntTelNo, _flag); // 거래처 전화번호
  $c.gus.cfEnableObj($p, ed_clntEmail, _flag); // 거래처 담당자이메일
  $c.gus.cfEnableObj($p, ed_clntPicTelNo, _flag); // 거래처 담당자휴대폰
};

// 수정
scwin.f_Update = function (e) {
  // if (!scwin.f_ChkDrawUser("수정")) {
  //     return;
  // }
  scwin.f_ContentsDisable(true);
  $c.gus.cfDisableBtn($p, [btn_Update]);
};

// 취소
scwin.f_Cancel = function (e) {
  scwin.f_ContentsDisable(false);
  ds_ctrt.undoAll();
  if (ds_ctrt.getRowPosition() >= 0) {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
  }
};

// 저장
scwin.f_Save = async function (e) {
  //계약정보 필수값체크
  let ret = await $c.gus.cfValidate($p, [gr_ctrt], null, true);
  if (!ret) {
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
    await $c.sbm.execute($p, sbm_save).then(function (e) {
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

      scwin.f_ContentsDisable(false);
      $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save]);
      scwin.f_Retrieve();
    });
  }
};

// 작성자  체크
scwin.f_ChkDrawUser = function (strChk) {
  var vCtrtNo = ds_master.getCellData(ds_master.getRowPosition(), "ctrtNo");
  var vDrawUserNm = ds_master.getCellData(ds_master.getRowPosition(), "drawUserNm");
  if (scwin.g_sUserId != ds_master.getCellData(ds_master.getRowPosition(), "drawUserId")) {
    $c.win.alert($p, "계약번호[" + vCtrtNo + "] " + strChk + "작업은 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
    return false;
  }
  return true;
};

// Excel Download
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_ctrt.getRowCount();
  var sheetTitle = "비표준계약서";
  if (vResultCountRow != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      fileName = sheetTitle + "_" + ed_ctrtStDt.getValue() + "~" + ed_ctrtEndDt.getValue();
      // cfGridToExcel(gr_ctrt, sheetTitle, fileName, 2 + 8 + 16); //show false 미출력 1 , 출력 2
      await $c.data.downloadGridViewExcel($p, gr_ctrt, {
        fileName: fileName + ".xlsx",
        sheetName: sheetTitle,
        type: "2 + 8 + 16"
      });
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};

//수정 버튼 클릭
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};

//취소 버튼 클릭
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};

//저장 버튼 클릭
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_acctDeptCd2_onclickEvent = function (e) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  udc_acctDeptCd2.cfCommonPopUp(scwin.udc_acctDeptCd2_callBackFunc, ed_acctDeptCd2.getValue(), ed_acctDeptNm2.getValue(), "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
};
scwin.udc_acctDeptCd2_onblurCodeEvent = function (e) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  udc_acctDeptCd2.cfCommonPopUp(scwin.udc_acctDeptCd2_callBackFunc, ed_acctDeptCd2.getValue(), "", "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
};
scwin.udc_acctDeptCd2_onblurNameEvent = function (e) {
  var pWhere = ed_ctrtStDt.getValue().substring(0, 4) + ",,,,,,,,," + "000";
  udc_acctDeptCd2.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd2.getValue(), ed_acctDeptNm2.getValue(), "T", null, null, null, null, pWhere, "450", "500", null, null); // 귀속부서	
};

// 계약귀속부서명 변경시
scwin.udc_acctDeptCd2_callBackFunc = function (ret) {
  ed_acctDeptCd2.setValue(ret[0]);
  ed_acctDeptNm2.setValue(ret[1]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCtrt',refDataMap:'ds_Query',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',mandatory:'true',edFromId:'ed_ctrtStDt',edToId:'ed_ctrtEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.vehclNo','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',placeholder:'',style:'width:150px;',ref:'data:ds_Query.clntNm','data-length':'255',maxByteLength:'255'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.ctrtNo','data-length':'25',maxByteLength:'25'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',code:'acctDeptCd',name:'acctDeptNm',allowCharCode:'0-9',refDataCollection:'ds_Query',selectID:'retrieveAcctDeptCdInfo','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',maxlengthCode:'5',maxlengthName:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_Query.clntCrn',maxlength:'10',maxByteLength:'255',style:'width: 150px;',id:'ed_clntCrn',placeholder:'',class:'','data-length':'255'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openCrnPopUp(1)',style:'',id:'btn_clntCrn',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_mcomEmpNm',style:'width:150px;',ref:'data:ds_Query.mcomEmpNm','data-length':'255',maxByteLength:'255'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ctrt',gridUpYn:'N',gridDownFn:'scwin.f_logisDownLoadExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ctrt',style:'',autoFit:'allColumn',id:'gr_ctrt',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'15',focusMode:'row',dataName:'계약내역',validExp:'clntNm:거래처명:yes:,                ctrtStDt:계약시작일자:yes:date=YYYYMMDD,                ctrtEndDt:계약종료일자:yes:date=YYYYMMDD,                mcomEmpNo:담당자사번:yes:length=8,                clntAddr:거래처소재지:yes,                clntCrn:사업자번호:yes,                clntEmail:거래처담당자이메일 :yes,                clntPicTelNo:거래처담당자휴대폰 :yes                '},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column1',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'101',inputType:'text',id:'column2',value:'거래처코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column4',value:'계약시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'계약종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column6',value:'담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'87',inputType:'text',id:'column7',value:'귀속부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column8',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column10',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'98',inputType:'text',id:'column11',value:'거래처대표이사',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'91',inputType:'text',id:'column12',value:'거래처소재지',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'92',inputType:'text',id:'column13',value:'거래처전화번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'109',inputType:'text',id:'column14',value:'거래처이메일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'94',inputType:'text',id:'column15',value:'거래처휴대폰',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'column16',value:'담당자사번',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ctrtNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'101',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtStDt',displayMode:'label',editFormat:'XXXX/XX/XX'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtEndDt',displayMode:'label',editFormat:'XXXX/XX/XX'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomEmpNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'87',inputType:'text',id:'acctDeptCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntCrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'98',inputType:'text',id:'repstNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'clntAddr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'92',inputType:'text',id:'clntTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'clntEmail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'94',inputType:'text',id:'clntPicTelNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'mcomEmpNo',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'계약정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo2',placeholder:'',style:'width:250px;',ref:'data:ds_ctrt.ctrtNo','data-length':'30',maxByteLength:'30',objType:'data',validExp:'계약번호:no'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:''},E:[{T:1,N:'xf:input',A:{class:'','data-length':'10',id:'ed_mcomEmpNo',maxByteLength:'10',objType:'data',placeholder:'',ref:'data:ds_ctrt.mcomEmpNo',style:'width:100px;',validExp:'담당자사번:yes',allowChar:'0-9'}},{T:1,N:'xf:input',A:{ref:'data:ds_ctrt.mcomEmpNm',maxByteLength:'50',validExp:'담당자명:yes',style:'width:100px;',id:'ed_mcomEmpNm2',placeholder:'',class:'','data-length':'50',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_acctDeptCd2',codeId:'ed_acctDeptCd2',nameId:'ed_acctDeptNm2',maxlengthCode:'5',maxlengthName:'20',refDataCollection:'ds_ctrt',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',code:'acctDeptCd',name:'acctDeptNm',selectID:'retrieveAcctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCd2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCd2_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd2_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처명(업체명)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'','data-length':'20',id:'ed_clntNo',maxByteLength:'6',objType:'data',placeholder:'',ref:'data:ds_ctrt.clntNo',style:'width:85px;',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'','data-length':'100',id:'ed_clntNm2',maxByteLength:'100',objType:'data',placeholder:'',ref:'data:ds_ctrt.clntNm',style:'',validExp:'수탁자명:yes'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_ctrtStDt2',edToId:'ed_ctrtEndDt2',id:'',objTypeFrom:'data',refDataMap:'ds_ctrt',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','data-length':'20',id:'ed_vehclNo2',maxByteLength:'20',objType:'data',placeholder:'',ref:'data:ds_ctrt.vehclNo',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','data-length':'50',id:'ed_repstNm',maxByteLength:'50',objType:'data',placeholder:'',ref:'data:ds_ctrt.repstNm',style:'width:150px;',validExp:'대표자명:yes'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 소재지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'','data-length':'200',id:'ed_clntAddr',maxByteLength:'200',placeholder:'',ref:'data:ds_ctrt.clntAddr',style:'',validExp:'주소:yes'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'거래처 기본정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntCrn2',placeholder:'',style:'width:150px;',ref:'data:ds_ctrt.clntCrn','data-length':'20',maxByteLength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'법인번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_corRegNo',placeholder:'',style:'width:150px;',ref:'data:ds_ctrt.corRegNo','data-length':'20',maxByteLength:'20',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처 전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_clntTelNo',placeholder:'',style:'width:150px;',ref:'data:ds_ctrt.clntTelNo','data-length':'20',maxByteLength:'20',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처 E-mail',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntEmail',placeholder:'',style:'width:150px;',ref:'data:ds_ctrt.clntEmail','data-length':'60',maxByteLength:'60',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처 휴대전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntPicTelNo',placeholder:'',style:'width:150px;',ref:'data:ds_ctrt.clntPicTelNo','data-length':'50',maxByteLength:'50',objType:'data',validExp:'휴대전화번호:no:telNumber'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'','ev:onclickEvent':'scwin.udc_clntCrn_onclickEvent',hideName:'true',id:'udc_clntCrn',mandatoryCode:'true',maxlengthCode:'10',popupID:'',style:';display:none;'}}]}]}]}]})