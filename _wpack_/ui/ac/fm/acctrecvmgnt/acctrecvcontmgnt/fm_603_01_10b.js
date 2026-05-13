/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_10b.xml 39014 4c321b298c8e7d3b3cff79d0cbbd030b6c32e1fbd3787685c38de431972adf16 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allDept',name:'name6',dataType:'text'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_overDayAcctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrDd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overSum',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recvReason',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collectionActiv',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDt',name:'name19',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableOverDayConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_overDayAcctRecv","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_overDayAcctRecv","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.SaveAccountReceivableOverDayConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_overDayAcctRecv","key":"IN_DS1", "action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.params = "";
scwin.strFromDate = ""; // 현재년월일의 첫번째 일자
scwin.dateStr = ""; //현재일자를 구한다

scwin.sView = "";
scwin.vAcctDeptCd = "";
scwin.vClntNo = "";
scwin.vStdDt = "";
scwin.login = "";
scwin.privAdmin = ""; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님 
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.vLoginCoCd = ""; // 소속 자회사
scwin.vLoginCoClsCd = ""; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.login = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.

  scwin.params = $c.data.getParameter($p);
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 현재년월일의 첫번째 일자
  scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자를 구한다

  if (scwin.params) {
    scwin.sView = scwin.params.sView || ""; //싱글뷰에서 넘어온값
    scwin.vAcctDeptCd = scwin.params.acctDeptCd || ""; //싱글뷰에서 넘어온값
    scwin.vClntNo = scwin.params.clntNo || ""; //싱글뷰에서 넘어온값
    scwin.vStdDt = scwin.params.stdDt || ""; //싱글뷰에서 넘어온값
  }

  //로그인정보 추출
  scwin.privAdmin = scwin.login.privAdmin;
  scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
  scwin.vLoginCoCd = scwin.login.coCd || "";
  scwin.vLoginCoClsCd = scwin.login.coClsCd || "";
  scwin.f_Reset();

  //날짜 초기값
  ica_stdDt.setValue(scwin.dateStr); //현재일자
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();

  //메일 링크 클릭시
  if (scwin.sView == "Y") {
    ed_acctDeptCd.setValue(scwin.vAcctDeptCd);
    ed_sclntNo.setValue(scwin.vClntNo);
    ica_stdDt.setValue(scwin.vStdDt);
    scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'CD');
    scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처 , 2:조회->귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  var rtnList = {};
  var cd = "";
  var nm = "";

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  if (flag != "SKIP") {
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
  } else {
    cd = orgObjCd;
    nm = "";
  }
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '1':
      param = ",,," + ed_coCd.getValue();
      await udc_sclnt.cfCommonPopUp(scwin.udc_sclnt_callbackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null); // 거래처	  		
      break;
    // 조회조건용 귀속부서 PopUp 호출
    case '2':
      param = "," + ed_coCd.getValue() + "," + edCoClsCd.getValue();
      await udc_acctDept.cfCommonPopUp(scwin.udc_acctDept_callbackFunc, cd, nm, "T", null, null, null, null, param, null, null, null, null, null, null, null, null); //귀속부서    
      break;

    //tobe 변경 : 해당 부분 미사용하여 주석처리
    // 조회조건용 수금부서 PopUp 호출
    // case '3' :
    //     param    = ","+ ed_coCd.text+","+txtCoClsCd.value; 		 
    //     rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd, nm,"T",null,null,null,null,param,null,null,null,null); // 귀속부서							
    //     f_resultPopUp(orgObjCd, orgObjNm,rtnList);
    //     break;

    case '4':
      await udc_crn.cfCommonPopUp(scwin.udc_crn_callbackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); //사업자번호
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_sclnt_callbackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_sclntNo, ed_sclntNm, rtnList);
};

//-------------------------------------------------------------------------
// 귀속부서 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_acctDept_callbackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_acctDeptCd, ed_acctDeptNm, rtnList);
};

//-------------------------------------------------------------------------
// 사업자번호 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_crn_callbackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_crn, ed_crnNm, rtnList);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    orgObjNm.setValue("");
  } else {
    orgObjCd.setValue("");
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_co.cfCommonPopUpAsync(scwin.udc_co_callbackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_co_callbackFunc = function (rtnList) {
  // SET	 
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    edCoClsCd.setValue(rtnList[1]); // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    edCoClsCd.setValue("");
  }
  if (edCoClsCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 담당자 조회 팝업
//-------------------------------------------------------------------------	
scwin.f_PopUp = async function (Row) {
  var param = ed_coCd.getValue() + "," + edCoClsCd.getValue();
  await udc_pic.cfCommonPopUp(scwin.udc_pic_callbackFunc, "", ds_overDayAcctRecv.getRowJSON(Row).picNm, "F", null, null, null, null, param, null, null, null, null, "F", "F");
};
scwin.udc_pic_callbackFunc = function (rtnList) {
  var Row = ds_overDayAcctRecv.getRowPosition();
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] == "N/A") {
      ds_overDayAcctRecv.setCellData(Row, "picId", ""); //담당자 아이디
      ds_overDayAcctRecv.setCellData(Row, "picNm", ""); //담당자명
    } else {
      ds_overDayAcctRecv.setCellData(Row, "picId", rtnList[0]); //담당자 아이디
      ds_overDayAcctRecv.setCellData(Row, "picNm", rtnList[1]); //담당자명
    }
  }
};

//-------------------------------------------------------------------------
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ica_stdDt]))) return;
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;
  dma_searchAcctRecv.set("coCd", ed_coCd.getValue());
  dma_searchAcctRecv.set("stdDt", ica_stdDt.getValue());
  dma_searchAcctRecv.set("clntNo", ed_sclntNo.getValue());
  dma_searchAcctRecv.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_searchAcctRecv.set("crn", ed_crn.getValue());
  dma_searchAcctRecv.set("allDept", chk_allDept.getValue());
  $c.sbm.execute($p, sbm_searchAcctRecv);
};
scwin.sbm_searchAcctRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_overDayAcctRecv.getRowCount();
    //조회된 건수를 Grid 왼쪽 하단에 표시한다.
    totalRows.setValue(rowCnt);
    ds_overDayAcctRecv.sort("clntNm", 0);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      return;
    }
    gr_overDayAcctRecv.setFocusedCell(0, 0); //초기포커스
  }
  ;
};

//-------------------------------------------------------------------------
//  초과  이력  조회
//-------------------------------------------------------------------------
scwin.f_detail = async function (Row) {
  //상세화면 호출
  var opts = {
    id: "smpPop",
    popupName: "초과채권관리이력",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 552,
    title: ""
  };
  var data = {
    acctRecvNo: ds_overDayAcctRecv.getRowJSON(Row).acctRecvNo
  };
  await $c.win.openPopup($p, "/ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_10p.xml", opts, data);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = function () {
  var options = {
    fileName: "초과일별채권현황조회.xlsx",
    sheetName: "초과일별채권현황조회_.xls",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1,
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: "초과일별채권현황",
    textAlign: "center",
    fontSize: 18,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_overDayAcctRecv, options, infoArr);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function (e) {
  if (ds_overDayAcctRecv.getRowCount() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  for (var i = 0; i < ds_overDayAcctRecv.getRowCount(); i++) {
    var rowJson = ds_overDayAcctRecv.getRowJSON(i);
    if (rowJson.overSum != 0 && (rowJson.recvReason != "" || rowJson.collectionActiv != "" || rowJson.retrvDt != "" || rowJson.picId != "" || rowJson.picNm != "")) {
      await $c.win.alert($p, "채권번호(" + rowJson.acctRecvNo + ") 건은 지연채권금액이 존재하여 등록이 불가능 합니다.");
      ds_overDayAcctRecv.setCellData(i, "recvReason", "");
      ds_overDayAcctRecv.setCellData(i, "collectionActiv", "");
      ds_overDayAcctRecv.setCellData(i, "retrvDt", "");
      ds_overDayAcctRecv.setCellData(i, "picId", "");
      ds_overDayAcctRecv.setCellData(i, "picNm", "");
      return;
    }
  }
  if (ds_overDayAcctRecv.getModifiedIndex().length < 1) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  var valid = await $c.gus.cfValidate($p, [gr_overDayAcctRecv], null, true);
  if (!valid) {
    return;
  }
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 회사코드 칸에서 포커스 아웃시
//-------------------------------------------------------------------------
scwin.udc_co_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_sclnt_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_sclnt_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 청구귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 청구귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 사업자번호
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'CD');
};

//-------------------------------------------------------------------------
// 사업자명
//-------------------------------------------------------------------------
scwin.udc_crn_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'NM');
};
scwin.gr_overDayAcctRecv_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_PopUp(rowIndex);
};
scwin.gr_overDayAcctRecv_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (ds_overDayAcctRecv.getCellData(rowIndex, "overSum") != 0) {
    gr_overDayAcctRecv.setColumnReadOnly("recvReason", true);
    gr_overDayAcctRecv.setColumnReadOnly("collectionActiv", true);
    gr_overDayAcctRecv.setColumnReadOnly("retrvDt", true);
    gr_overDayAcctRecv.setColumnReadOnly("picNm", true);

    // gr_overDayAcctRecv.ColumnProp("recvReason","Edit")="None";
    // gr_overDayAcctRecv.ColumnProp("collectionActiv","Edit")="None";
    // gr_overDayAcctRecv.ColumnProp("retrvDt","Edit")="None";
    // gr_overDayAcctRecv.ColumnProp("picNm","Edit")="None";
  } else {
    gr_overDayAcctRecv.setColumnReadOnly("recvReason", false);
    gr_overDayAcctRecv.setColumnReadOnly("collectionActiv", false);
    gr_overDayAcctRecv.setColumnReadOnly("retrvDt", false);
    gr_overDayAcctRecv.setColumnReadOnly("picNm", false);
    // gr_overDayAcctRecv.ColumnProp("recvReason","Edit")="Any";
    // gr_overDayAcctRecv.ColumnProp("collectionActiv","Edit")="Any";
    // gr_overDayAcctRecv.ColumnProp("retrvDt","Edit")="Any";
    // gr_overDayAcctRecv.ColumnProp("picNm","Edit")="Any";
  }
  if (columnId == "acctRecvNo" && rowIndex >= 0) {
    if (ds_overDayAcctRecv.getCellData(rowIndex, "recvReason") == "") {
      await $c.win.alert($p, "등록된 관리 내역이 없습니다.");
      return;
    } else if (ds_overDayAcctRecv.getCellData(rowIndex, "recvReason") != "") {
      scwin.f_detail(rowIndex);
    }
  }
};
scwin.udc_co_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_acctDept_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '2', 'ALL');
};
scwin.udc_sclnt_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_crnNm, '4', 'ALL');
};
scwin.btn_delete_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ed_sclntNo, ed_sclntNm, ica_stdDt]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:65px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 22%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfoPopup',style:'',class:'',id:'udc_co',codeId:'ed_coCd',btnId:'btn_company',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_co_onclickEvent',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_co_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'기준년월',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_stdDt',class:' cal',calendarValueType:'yearMonthDate',mandatory:'true',title:'기준년월',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo6Popup',style:'',class:'col7',id:'udc_acctDept',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',btnId:'btn_acctDept',validExpCode:'청구귀속:no:maxLength=5&number',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'0-9',maxlengthName:'20','ev:onclickEvent':'scwin.udc_acctDept_onclickEvent',validTitle:'귀속부서',selectID:'retrieveAcctDeptCdInfo6','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDept_onblurNameEvent'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'chk_allDept',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',refInitSync:'true',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_sclnt',class:'',codeId:'ed_sclntNo','ev:onblurCodeEvent':'scwin.udc_sclnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sclnt_onblurNameEvent','ev:onclickEvent':'scwin.udc_sclnt_onclickEvent',id:'udc_sclnt',maxlengthCode:'6',maxlengthName:'50',nameId:'ed_sclntNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveClntListPopup',selectID:'retrieveClntList',style:'',validExpCode:'거래처:no:maxLength=6&number',validTitle:'거래처'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',codeId:'ed_crn','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',id:'udc_crn',maxlengthCode:'13',maxlengthName:'50',nameId:'ed_crnNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveCrnInfoPopup',selectID:'retrieveCrnInfo',style:'',validExpCode:'사업자번호:no:format=0000000000',validExpName:'사업자명:no:maxLength=70&notAllowed',validTitle:'사업자번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_delete',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_retrieve',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'초과채권내역',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Export',gridID:'gr_overDayAcctRecv'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_overDayAcctRecv',scrollByColumn:'false',style:'',id:'gr_overDayAcctRecv',visibleRowNum:'11',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:ontextimageclick':'scwin.gr_overDayAcctRecv_ontextimageclick','ev:onyearselect':'scwin.gr_overDayAcctRecv_onyearselect','ev:oncellclick':'scwin.gr_overDayAcctRecv_oncellclick',readOnly:'true',rowStatusVisible:'true',dataName:'초과채권내역',validExp:'retrvDt:회수예정일자:yes:date=YYYYMMDD,recvReason:초과채권발생사유:yes:maxByteLength=1000,collectionActiv:회수활동내역:yes:maxByteLength=1000,picId:담당자:yes:maxLength=6'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'청구귀속',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'기준일자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'청구귀속명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'사업자번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'80',inputType:'text',id:'column9',value:'거래처',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'120',inputType:'text',id:'column8',value:'거래처명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'100',inputType:'text',id:'column7',value:'채권번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',removeBorderStyle:'false',width:'210',inputType:'text',id:'column6',value:'초과채권',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'250',inputType:'text',id:'column3',value:'초과채권발생사유',class:'col-type1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'250',inputType:'text',style:'',id:'column47',value:'회수활동내역',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column44',value:'회수예정일',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column41',value:'담당자명',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column38',value:'등록자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column35',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column32',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column23',value:'수정일시',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'채권금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column15',value:'초과일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column14',value:'지연채권금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'bilgAcctDeptCd',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stdDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'link',id:'acctRecvNo',blockSelect:'false',displayMode:'label',class:'linktype',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'100',inputType:'text',id:'ovrAmt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'ovrDd',blockSelect:'false',displayMode:'label',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'120',inputType:'text',id:'overSum',blockSelect:'false',displayMode:'label',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'250',inputType:'text',id:'recvReason',blockSelect:'false',displayMode:'label',readOnly:'false',editModeEvent:'onclick',maxLength:'1000',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'250',inputType:'text',style:'',id:'collectionActiv',value:'',displayMode:'label',readOnly:'false',editModeEvent:'onclick',maxLength:'1000',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'retrvDt',value:'',displayMode:'label',readOnly:'false',editModeEvent:'onclick',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'picId',value:'',displayMode:'label',maxLength:'6',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'picNm',value:'',displayMode:'label',editModeEvent:'onclick',readOnly:'false',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'regDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'modDt',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'SUM("ovrAmt")',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',expression:'SUM("ovrDd")',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',expression:'SUM("overSum")',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_save',label:'저장',class:'btn','ev:onclick':'scwin.f_save',userAuth:'U',objType:'bSave'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcEmpInfoPopup',selectID:'retrieveAcEmpInfo',codeId:'ed_picCd',validTitle:'',nameId:'ed_picNm',style:'width:%; height:px; ',id:'udc_pic',btnId:'btn_pic',refDataCollection:'ds_overDayAcctRecv',code:'picId',name:'picNm'}},{T:1,N:'xf:input',A:{style:'',id:'edCoClsCd'}}]}]}]}]}]})