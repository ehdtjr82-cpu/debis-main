/*amd /ui/ds/sd/salesactiv/estmgnt/sd_201_02_08b.xml 49723 8bb5003294e4f078bf9f7344816ad6d5e6571835de8e4e44189e8470afd18aeb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_approveList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'estNo',name:'견적번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cstmrNo',name:'고객번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cstmrNm',name:'고객명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cstmrPicNm',name:'고객담당자명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'사업영역운송여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'사업영역하역여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'사업영역보관여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'title',name:'설문타이틀',dataType:'String'}},{T:1,N:'w2:column',A:{id:'estBranCd',name:'견적점소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'estBranNm',name:'견적점소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'estDt',name:'견적일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'estApprvStsClsCd',name:'견적결재상태구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stndPcost',name:'표준원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'basisPcost',name:'기본원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mktPcost',name:'시장원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'estPcost',name:'견적원가',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_approveListCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'estFromDt',name:'견적시작일자',dataType:'String'}},{T:1,N:'w2:key',A:{id:'estToDt',name:'견적종료일자',dataType:'String'}},{T:1,N:'w2:key',A:{id:'cstmrNo',name:'고객번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'cstmrNm',name:'고객명',dataType:'String'}},{T:1,N:'w2:key',A:{id:'estNm',name:'견적명',dataType:'String'}},{T:1,N:'w2:key',A:{id:'estNo',name:'견적번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'estBranCd',name:'견적점소코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'estBranNm',name:'견적점소명',dataType:'String'}},{T:1,N:'w2:key',A:{id:'empNo',name:'사원번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'empNm',name:'사원명',dataType:'String'}},{T:1,N:'w2:key',A:{id:'apprvStsClsCd',name:'결재상태',dataType:'String'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_estimateApproveList',action:'/ds.sd.salesactiv.estmgnt.RetrieveEstimateApproveListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_approveListCondition","key":"IN_DS1"},{"id":"ds_approveList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_approveList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_estimateApproveList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : sd_201_02_08b
// 이름     : 견적전자결재요청
// 작 성 자 : 최지수
// 작 업 일 : 2026-03-11
//==================================================================================================================
// LoginDTO loginDTO		= LoginUtil.getLoginDTO(request);
scwin.userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn") + "";
scwin.acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd"); // 귀속부서코드
scwin.acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm"); // 귀속부서
scwin.empNo = $c.data.getMemInfo($p, "empNo"); // 사원번호
scwin.userNm = $c.data.getMemInfo($p, "userNm"); // 사원명
scwin.userId = $c.data.getMemInfo($p, "userId"); // 사원ID
scwin.epId = $c.data.getMemInfo($p, "epId"); // 사원ID

scwin.vAcctDeptNm = scwin.acctDeptNm;
scwin.vUserNm = scwin.userNm;
scwin.vUserId = scwin.userId;
scwin.vEpUserId = scwin.epId;
scwin.onpageload = function () {
  grp_totalCnt.setStyle("display", "none");
  tbx_totalRows.setValue(0);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD166",
    compID: "acb_apprvStsClsCd,gr_approveList:estApprvStsClsCd"
  } // 결재상태
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_defaultValue();
  tbx_totalRows.setValue(0);
};

//-------------------------------------------------------------------------
// 날짜설정
//-------------------------------------------------------------------------
scwin.f_SetDate = function (pSetType) {
  //유형 1:현재일 7일전  , 2:현재일 , 3:이후일
  var vReturnDate = "";
  if (pSetType == "1") {
    vReturnDate = new Date().before(0, 0, 7).format("YYYYMMDD");
  } else if (pSetType == "2") {
    vReturnDate = new Date().format("YYYYMMDD");
  } else if (pSetType == "3") {
    vReturnDate = new Date().format("YYYYMM");
  } else if (pSetType == "4") {
    vReturnDate = new Date().before(0, 0, 30).format("YYYYMMDD");
  }
  return vReturnDate;
};

//-------------------------------------------------------------------------
// 검색 조건 데이타 셋 초기화 
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // 데이타 셋 헤더 셋팅 
  // f_createHeader();  

  // 견적일자 셋팅 
  var vEstFrom = scwin.f_SetDate("4");
  var vEstTo = scwin.f_SetDate("2");
  ed_fromEstDt.setValue(vEstFrom);
  ed_toEstDt.setValue(vEstTo);
  btn_request.setDisabled(true);
  tbx_totalRows.setValue(0);

  // 전자결재 버튼 비활성화 팝업 미포함 삭제처리
  // $c.gus.cfEnableObj(btn_Request, false)
};
scwin.f_Retrieve = async function (e) {
  var vFromEstDt = (ed_fromEstDt.getValue() || "").trim();
  var vToEstDt = (ed_toEstDt.getValue() || "").trim();

  // 필수항목 체크
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) return;

  // if(vFromEstDt!="" && vToEstDt!="" && vFromEstDt>vToEstDt){
  // 	alert("견적조회종료일자가 견적조회 시작일자보다 이전입니다.");
  // 	ed_toEstDt.Focus();
  // 	return false;
  // }

  // 시작일자 없음
  if (vFromEstDt === "") {
    $c.win.alert($p, "견적시작일자은(는) 필수 입력 항목입니다.");
    ed_fromEstDt.focus();
    return;
  }

  // 종료일자 없음
  if (vToEstDt === "") {
    $c.win.alert($p, "견적종료일자은(는) 필수 입력 항목입니다.");
    ed_toEstDt.focus();
    return;
  }

  // 날짜 역전 체크
  if (vFromEstDt > vToEstDt) {
    $c.win.alert($p, "견적조회종료일자가 견적조회 시작일자보다 이전입니다.");
    ed_toEstDt.focus();
    return;
  }
  btn_request.setDisabled(true);
  grp_totalCnt.setStyle("display", "none");
  tbx_totalRows.setValue(0);
  $c.sbm.execute($p, sbm_estimateApproveList);
};
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);

  // var vEstFrom = scwin.f_SetDate("4");
  // var vEstTo = scwin.f_SetDate("2");

  ed_fromEstDt.setValue("");
  ed_toEstDt.setValue("");

  // ds_approveList.removeAll();
  // tbx_totalRows.setValue(0);
  // btn_request.setDisabled(true);
};
scwin.udc_cstmrNo_onclickEvent = function (e) {
  let pClose = 'F';
  let pAllSearch = 'T';
  udc_cstmrNo.cfCommonPopUp(scwin.udc_cstmrNo_callBackFunc, ed_cstmrNo.getValue().trim(), ed_cstmrNm.getValue(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
};
scwin.udc_cstmrNo_onblurCodeEvent = function (e) {
  // scwin.f_chkOpenCommonPopUp(ed_cstmrNo.getValue(), ed_cstmrNm.getValue(), 1)
  scwin.f_chkOpenCommonPopUp(ed_cstmrNo, ed_cstmrNm, 1, true);
};
scwin.udc_cstmrNo_onviewchangeNameEvent = function (info) {
  // scwin.f_chkOpenCommonPopUp(ed_cstmrNo.getValue(), ed_cstmrNm.getValue(), 1);
  scwin.f_chkOpenCommonPopUp(ed_cstmrNm, ed_cstmrNo, 1, false);
};
scwin.udc_cstmrNo_callBackFunc = function (ret) {
  if (!ret || ret[0] == "N/A") return;
  ed_cstmrNo.setValue(ret[0]);
  ed_cstmrNm.setValue(ret[1]);
};
scwin.udc_estBranCd_onclickEvent = function (e) {
  let pClose = 'F';
  let pAllSearch = 'T';
  udc_estBranCd.cfCommonPopUp(scwin.udc_estBranCd_callBackFunc, ed_estBranCd.getValue().trim(), ed_estBranNm.getValue(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
};
scwin.udc_estBranCd_onblurCodeEvent = function (e) {
  // scwin.f_chkOpenCommonPopUp(ed_estBranCd.getValue(), ed_estBranNm.getValue(), 3)
  scwin.f_chkOpenCommonPopUp(ed_estBranCd, ed_estBranNm, 3, true);
};
scwin.udc_estBranCd_onviewchangeNameEvent = function (info) {
  // scwin.f_chkOpenCommonPopUp(ed_estBranCd.getValue(), ed_estBranNm.getValue(), 3)
  scwin.f_chkOpenCommonPopUp(ed_estBranNm, ed_estBranCd, 3, false);
};
scwin.udc_estBranCd_callBackFunc = function (ret) {
  if (!ret || ret[0] == "N/A") return;
  ed_estBranCd.setValue(ret[0]);
  ed_estBranNm.setValue(ret[1]);
};
scwin.udc_empNo_onclickEvent = function (e) {
  let pClose = 'F';
  let pAllSearch = 'T';
  udc_empNo.cfCommonPopUp(scwin.udc_empNo_callBackFunc, ed_empNo.getValue().trim(), ed_empNm.getValue(), pClose, null, null, "150,176", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, "사원팝업, 사원번호, 사원명", null);
};
scwin.udc_empNo_onblurCodeEvent = function (e) {
  // scwin.f_chkOpenCommonPopUp(ed_empNo.getValue(), ed_regNm.getValue(), 2)
  scwin.f_chkOpenCommonPopUp(ed_empNo, ed_empNm, 2, true);
};
scwin.udc_empNo_onviewchangeNameEvent = function (info) {
  // scwin.f_chkOpenCommonPopUp(ed_empNo.getValue(), ed_regNm.getValue(), 2)
  scwin.f_chkOpenCommonPopUp(ed_empNm, ed_empNo, 2, false);
};
scwin.udc_empNo_callBackFunc = function (ret) {
  if (!ret || ret[0] == "N/A") return;
  ed_empNo.setValue(ret[0]);
  ed_empNm.setValue(ret[1]);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // f_chkOpenCommonPopUp(inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  let pCode = '';
  let pName = '';
  let pClose = 'T';
  let pAllSearch = 'T';

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode === true) {
    pCode = (pVal || "").trim();
  } else {
    pName = pVal || "";
  }
  switch (disGubun) {
    case 1:
      udc_cstmrNo.cfCommonPopUp(scwin.udc_cstmrNo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_empNo.cfCommonPopUp(scwin.udc_empNo_callBackFunc, (pCode || "").trim(), pName, pClose, null, null, "150,176", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, "사원팝업, 사원번호, 사원명", null);
      break;
    case 3:
      udc_estBranCd.cfCommonPopUp(scwin.udc_estBranCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 전자결재요청 상세 정보 팝업 
//-------------------------------------------------------------------------  
scwin.f_RequestElectronicApprovePopUp = async function (e) {
  ////////////////////////////////////////////////////////////////////////////
  var checkedRow = -1;
  var count = 0;
  for (let i = 0; i < ds_approveList.getRowCount(); i++) {
    if (ds_approveList.getCellData(i, "chk") == "1") {
      count++;
      checkedRow = i;
    }
  }
  ////////////////////////////////////////////////////////////////////////////

  if (count == 0) {
    $c.win.alert($p, "전자결재 요청처리할 견적번호를 선택해 주십시오.");
    return;
  }
  if (count > 1) {
    $c.win.alert($p, "견적번호 선택은 한건만 가능합니다.");
    return;
  }

  /*
  var EXIST_YN = "";
  var EP_sabun = "";
  var EP_mailaddr = "";
  var EP_username = "";
  var EP_info = "";
   try { 
          EXIST_YN = SSOCheck.IsExist("GROUP") ;
      EP_sabun = SSOCheck.GetETC("GROUP","F14");		// 사번      
      EP_mailaddr = SSOCheck.GetETC("GROUP","F13");	// 사용자 메일주소   
      EP_username = SSOCheck.GetETC("GROUP","F2");	// 사용자 명      	
   } catch ( exception ) { 
          EXIST_YN = 0 ;
  }
    if ( EXIST_YN != 1 ) {
      alert("현재 포털(PORTE)에 접속하지 않은 상태 입니다.\n전자결재를 위해서은 반드시 PORTE에 접속하셔야 합니다.") ;
      return ;
  }  
  */
  let ret = await $c.gus.cfValidate($p, [gr_approveList]);
  if (!ret) return false;
  ds_approveList.setRowPosition(checkedRow);

  // 선택 해 놓은 상태에서 더블클릭 선택했을 경우 Position 체크를 위해서 
  // for (i = 0; i < ds_approveList.getRowCount(); i++) {
  //     if (ds_approveList.getCellData(i, "chk") == "1") {
  //         ds_approveList.setRowPosition(i)
  //         break
  //     }
  // }

  var valueObject = {
    estNo: ds_approveList.getCellData(checkedRow, "estNo"),
    estDblClick: ""
  };
  const opts = {
    id: "sd_201_02_09p",
    popupName: "견적전자결재 상세",
    width: "820px",
    height: "520px",
    modal: true,
    scrollbars: "no",
    resizable: false
  };
  $c.win.openPopup($p, "./sd_201_02_09p.xml", opts, valueObject);

  // var valueObject = new Object();
  // valueObject.estNo = ds_approveList.getCellData(ds_approveList.getRowPosition(), "estNo")
  // valueObject.estDblClick = ""

  // const opts = {
  //     width: "820px"
  //     , height: "520px"
  //     , scrollbars: "no"
  //     , status: "no"
  // }
  // // var result = window.showModalDialog("./sd_201_02_09p.jsp", valueObject, "dialogWidth:820px; dialogHeight:520px; status:no; scroll:no");	    
  // let url = "./sd_201_02_09p.xml"
  // $c.win.openPopup(url, opts, valueObject)
};
scwin.sbm_estimateApproveList_submitdone = function (e) {
  console.log("조회결과 rowcnt =", ds_approveList.getRowCount());
  console.log("첫행 estNo =", ds_approveList.getCellData(0, "estNo"));
  console.log("첫행 cstmrNm =", ds_approveList.getCellData(0, "cstmrNm"));
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    let rowcnt = ds_approveList.getRowCount();
    if (rowcnt == 0) {
      btn_request.setDisabled(true);
      grp_totalCnt.setStyle("display", "");
      tbx_totalRows.setValue(0);
      $c.win.alert($p, MSG_CM_WRN_002);
    } else {
      btn_request.setDisabled(false);
      grp_totalCnt.setStyle("display", "");
      tbx_totalRows.setValue(rowcnt);
      // 전자결재 버튼 활성화 팝업 미포함 삭제처리
      // $c.gus.cfEnableObj(btn_Request, true)
    }

    // 그리드 조회건수
    // tbx_totalRows.setValue($c.gus.cfInsertComma(ds_approveList.getRowCount()))
  } else {
    btn_request.setDisabled(true);
    grp_totalCnt.setStyle("display", "");
    tbx_totalRows.setValue(0);
  }
};
scwin.gr_approveList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  if (columnId !== "chk") return;
  var apprvSts = (ds_approveList.getCellData(rowIndex, "estApprvStsClsCd") || "").trim();

  // 결재상태가 있으면 체크 불가
  if (apprvSts !== "") {
    ds_approveList.setCellData(rowIndex, "chk", "0");
    return;
  }
  var currChk = ds_approveList.getCellData(rowIndex, "chk");

  // 이미 체크된 행 다시 클릭하면 해제
  if (currChk == "1" || currChk == 1 || currChk === true) {
    ds_approveList.setCellData(rowIndex, "chk", "0");
    return;
  }

  // 한 건만 체크 가능
  for (let i = 0; i < ds_approveList.getRowCount(); i++) {
    ds_approveList.setCellData(i, "chk", i === rowIndex ? "1" : "0");
  }
  ds_approveList.setRowPosition(rowIndex);
};

//-------------------------------------------------------------------------
// 그리드 사용여부 데이터 포맷처리
//-------------------------------------------------------------------------
// scwin.displayChk = function (data) {
//     console.log("rowIndex = " + rowIndex + " : " + data)
//     // for ( var i = 0; i < ds_approveList.getRowCount(); i++) {

//     // }
//     // decode(estApprvStsClsCd, "","true","false")
//     return $c.gus.decode(data, "1", "사용", "미사용");
// };

scwin.gr_approveList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  ds_approveList.setRowPosition(rowIndex);
  var valueObject = {
    estNo: ds_approveList.getCellData(rowIndex, "estNo"),
    estDblClick: "1"
  };
  const opts = {
    id: "sd_201_02_09p",
    popupName: "견적전자결재 상세",
    width: "820px",
    height: "520px",
    modal: true,
    scrollbars: "no",
    resizable: false
  };
  $c.win.openPopup($p, "./sd_201_02_09p.xml", opts, valueObject);
};

// //-------------------------------------------------------------------------
// // 전자결재요청 (사용안함) 상세팝업창에서 사용하고 있음. 
// //-------------------------------------------------------------------------
// function f_RequestElectronicApprove() {  

// ////////////////////////////////////////////////////////////////////////////
// var count = 0;
// for(i=1;i<=ds_approveList.CountRow;i++){
//     if(ds_approveList.NameValue(i, "chk") == "1") count++;
// }
// ////////////////////////////////////////////////////////////////////////////

// var EXIST_YN = "";
// var EP_sabun = "";
// var EP_mailaddr = "";
// var EP_username = "";
// var EP_info = "";
// try { 
//     EXIST_YN = SSOCheck.IsExist("GROUP") ;
//     EP_sabun = SSOCheck.GetETC("GROUP","F14");		// 사번      
//     EP_mailaddr = SSOCheck.GetETC("GROUP","F13");	// 사용자 메일주소   
//     EP_username = SSOCheck.GetETC("GROUP","F2");	// 사용자 명      	

// } catch ( exception ) { 
//     EXIST_YN = 0 ;
// }

// if(!cfValidate([gr_approveList])) return false;

// if ( EXIST_YN != 1 ) {
//     alert("현재 포털(PORTE)에 접속하지 않은 상태 입니다.\n전자결재를 위해서은 반드시 PORTE에 접속하셔야 합니다.") ;
//     return ;
// }
// EP_info  = "PORTE Mail:" + EP_mailaddr ;
// EP_info += "\nPORTE 사번:" + EP_sabun ;
// EP_info += "\nPORTE 이름:" + EP_username ;
// EP_info += "\nPORTE 인증:" + EXIST_YN ;
// alert(EP_info);

// var vReqApprvDocKndCd = "013";  // 결재문서종류 
// var vReqUserId = vUserId; // 결재요청자 ID
// var vEpUsrId = vEpUserId;  // EP사용자 ID ()
// //var vReqApprvTitle = apprvTitle.value;  //결재제목 
// var vInfoPostReqDt = "";

// if(vEpUserId==""){ 
// //	alert(" EP사용자 ID정보가 없습니다. EP사이트에 먼저 로그인해주십시오.");
// //	return false;
// }

// if(count==undefined || count<1){
//     alert("전자결재를 요청할 견적번호를 선택해 주십시오.");
//     return false;	
// }

// var count = 0;
// var asPicEmpNo = "";
// var apprvReqAvailable = false;

// var vApprvDtlInfo  = "";
// if ( count == 1 ) {
//     vApprvDtlInfo = f_MakeHtmlMulti();
// } else {
//     vApprvDtlInfo = f_MakeHtmlMulti();	
// }

// var today = "<%=DDate.getDate()%>";
// var vReqApprvTitle = "견적전자결재[" + today.substring(0,4) + "년 " 
//                                         + today.substring(4,6) + "월 " 
//                                         + today.substring(6,8) + "일]" ;	//결재제목 

// //frmReqApprove.ymFrom.value = today.substring(0,4);
// //frmReqApprove.ymTo.value =  today.substring(0,4);
// frmReqApprove.apprvDocKndCd.value = vReqApprvDocKndCd;
// frmReqApprove.reqUserId.value =  vReqUserId;
// frmReqApprove.epUserId.value = vEpUsrId;
// frmReqApprove.apprvTitle.value = vReqApprvTitle;
// frmReqApprove.apprvDtlInfo.value = vApprvDtlInfo[0];
// frmReqApprove.apprvEstNoList.value = vApprvDtlInfo[1];
// //alert(sMx_ds1.ExportData(1, sMx_ds1.CountRow, true);

// var winPop = window.open("","APPROVE_POPUP",'left=0,top=0,width=850px,height=500px,toolbar=no,menubar=no,status=no,scrollbars=no,resizable=yes');	
// frmReqApprove.target = winPop.name ;	
// frmReqApprove.submit();

// }  

// //-------------------------------------------------------------------------
// // HTML 생성
// //-------------------------------------------------------------------------
// function f_MakeHtmlMulti() {  

//     var vApprvDtlInfoHeader = "";	
//     var vApprvDtlInfoBody   = "";	
//     var vApprvDtlInfoTail   = "";	
//     //var clntToNm			=  	ds_rcvodrResultsAggregation1.NameValue(1,'clntToNm');            		
//     //var rcvodrNo    		=  	ds_rcvodrResultsAggregation1.NameValue(1,'rcvodrNo');            
//     //var lobranNm    		=  	ds_rcvodrResultsAggregation1.NameValue(1,'lobranNm');            
//     var vApprvEstNo 		= "";

//     var today = "<%=DDate.getDate()%>";		
//     var rowCnt = 0;
//     var vAsPicEmpNo = "";
//     // 1.HTML 고정 부분(컬럼명)

// // 결재상세정보

//         vApprvDtlInfoHeader ='<table width=840 border=0 id=tb_border cellspacing=0>';	
//         vApprvDtlInfoHeader += '<tr>';
//         vApprvDtlInfoHeader += '<td align=left>';

//         vApprvDtlInfoHeader += '<table width=840 border=1 id=tb_border cellspacing=0>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td width=100>견적번호:</td>';
//         vApprvDtlInfoHeader += '<td width=100></td>';
//         vApprvDtlInfoHeader += '<td width=100> 견적고객 :</td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '<td width=100> 고객구분 :</td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '</tr>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td>견적영역:</td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '<td> 견적부문 :</td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '<td> 수출입 : </td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '</tr>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td>견적일자:</td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '<td> 견적담당자 :</td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '<td> 견적부서 : </td>';
//         vApprvDtlInfoHeader += '<td></td>';
//         vApprvDtlInfoHeader += '</tr>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td>제목:</td>';
//         vApprvDtlInfoHeader += '<td colspan=5></td>';
//         vApprvDtlInfoHeader += '</tr>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td>기타사항:</td>';
//         vApprvDtlInfoHeader += '<td colspan=5></td>';
//         vApprvDtlInfoHeader += '</tr>';
//         vApprvDtlInfoHeader += '</table>';

//         vApprvDtlInfoHeader += '<table border=1 cellpadding=0 cellspacing=0>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td width=50 rowspan=2>품명:</td>';
//         vApprvDtlInfoHeader += '<td width=80 rowspan=2>청구<br>단위</td>';
//         vApprvDtlInfoHeader += '<td width=80 colspan=2>차량종류</td>';
//         vApprvDtlInfoHeader += '<td width=80 colspan=2>운송구간</td>';
//         vApprvDtlInfoHeader += '<td width=80 rowspan=2>표준원가 </td>';
//         vApprvDtlInfoHeader += '<td width=80 rowspan=2>시장원가</td>';
//         vApprvDtlInfoHeader += '<td colspan=8>견적원가</td>';
//         vApprvDtlInfoHeader += '</tr>';
//         vApprvDtlInfoHeader += '<tr height=24>';
//         vApprvDtlInfoHeader += '<td>차종</td>';
//         vApprvDtlInfoHeader += '<td>규격</td>';
//         vApprvDtlInfoHeader += '<td>From </td>';
//         vApprvDtlInfoHeader += '<td>To</td>';
//         vApprvDtlInfoHeader += '<td>계 </td>';
//         vApprvDtlInfoHeader += '<td>원가</td>';
//         vApprvDtlInfoHeader += '<td>냉동</td>';
//         vApprvDtlInfoHeader += '<td>중량</td>';
//         vApprvDtlInfoHeader += '<td>위험물</td>';
//         vApprvDtlInfoHeader += '<td>기타할증</td>';
//         vApprvDtlInfoHeader += '<td>판관비</td>';
//         vApprvDtlInfoHeader += '<td>조정금액</td>';
//         vApprvDtlInfoHeader += '</tr>';

//     // 2.HTML 변동 부분(실데이타)		
//     for(j=1; j<=ds_approveList.CountRow; j++){

//             // 변수 초기화
//             clntToNm			=  	ds_approveList.NameValue(ds_approveList.RowPosition,'estNo');            	
//             rcvodrNo    		=  	ds_approveList.NameValue(ds_approveList.RowPosition,'estNo');              

//             vApprvDtlInfoBody += '<tr height=24>';
//             vApprvDtlInfoBody += '<td>40F</td>';
//             vApprvDtlInfoBody += '<td>E/A</td>';
//             vApprvDtlInfoBody += '<td>카고트럭</td>';
//             vApprvDtlInfoBody += '<td>25TON </td>';
//             vApprvDtlInfoBody += '<td>부산시</td>';
//             vApprvDtlInfoBody += '<td>인천시</td>';
//             vApprvDtlInfoBody += '<td>250,000</td>';
//             vApprvDtlInfoBody += '<td>320,000</td>';
//             vApprvDtlInfoBody += '<td>324,000</td>';
//             vApprvDtlInfoBody += '<td>234,000</td>';
//             vApprvDtlInfoBody += '<td>&nbsp;</td>';
//             vApprvDtlInfoBody += '<td>31000</td>';
//             vApprvDtlInfoBody += '<td>0</td>';
//             vApprvDtlInfoBody += '<td>0</td>';
//             vApprvDtlInfoBody += '<td>10</td>';
//             vApprvDtlInfoBody += '<td>50000</td>';
//             vApprvDtlInfoBody += '</tr>';	

//             vApprvEstNo += ds_approveList.NameValue(ds_approveList.RowPosition,'estNo') + "_";				        		

//     //alert(asPicNm +"-"+ asPlanCnt +"-"+ asGnrlFixCnt +"-"+ asEmgcFixCnt +"-"+ rsltsSubtotal +"-"+ planComp +"-"+ raTe +"-"+ workCnt +"-"+ dayAvg +"-"+ monthAvg +"-"+ rsltsTotal +"-"+ repairRsn);

//     } 

//     vApprvDtlInfoHeader += '</table>';		
//     vApprvDtlInfoTail += '</td> ';				
//     vApprvDtlInfoTail += '</tr> ';				
//     vApprvDtlInfoTail += '</table> ';

//     var vReturnArray = new Array(1);
//     alert(vReturnArray.length);

//     alert(vApprvDtlInfoHeader+vApprvDtlInfoBody+vApprvDtlInfoTail);
//     vReturnArray[0]	= vApprvDtlInfoHeader + vApprvDtlInfoBody + vApprvDtlInfoTail;	// HTML
//     vReturnArray[1] = vApprvEstNo;	

//     return vReturnArray;
// }  	 

// //-------------------------------------------------------------------------
// // 선택된 전표번호 상신정보
// //-------------------------------------------------------------------------
// function f_CheckedSlipListInfo() {  
// var vCountRow = ds_approveList.CountRow;

// var vSlipNoList = "";  // 전표번호 목록
// var vPostReqDtList = "";  // 회계요청일자 목록
// var vModDtmList = "";  // 수정일자 목록

// var vTotalDrAmt = 0; // 차변금액총액
// var vTotalCrAmt = 0; // 대변금액총액
// var vClntNm = "";  // 거래처명
// var vDrAcctNm = ""; // 차변계정명
// var vCrAcctNm = ""; // 대변계정명
// var vTotSlipCnt = 0; // 총건수

// var vTmpDrAcctNm = "";
// var vTmpCrAcctNm = "";
// var vTmpChk = "";
// var vTmpClntNm = "";
// var vTmpTotalCnt = 0;

// if(vCountRow>0){
//     for(var i=1;i<=vCountRow;i++){
//         var vChk = ds_approveList.NameString(i, "chk");

//         if(vChk=="T"){
//             var vBfSlipNo = "";

//             if(vTmpChk==""){
//                 vTmpClntNm = ds_approveList.NameString(i, "mgntClntNm");
//                 if ( vTmpClntNm.trim() != "" ) {
//                     //alert (vTmpClntNm);
//                     vTmpChk = vChk;		
//                 }			
//             }

//             if(i>1){
//                 vBfSlipNo = ds_approveList.NameString(i-1, "slipNo");
//             }

//             var vSlipNo = ds_approveList.NameString(i, "slipNo");

//             if(vSlipNo!=vBfSlipNo){
//                 vSlipNoList += ds_approveList.NameString(i, "slipNo") + "_";
//                 var vTmpPostReqDt = ds_approveList.NameString(i, "postReqDt");

//                 vPostReqDtList += ds_approveList.NameString(i, "postReqDt") + "_";
//                 vModDtmList += ds_approveList.NameString(i, "modDtm") + "_";
//                 vTmpTotalCnt++;
//             }

//             var vDrAmt = ds_approveList.NameValue(i, "drAmt"); //차변금액
//             var vCrAmt = ds_approveList.NameValue(i, "crAmt"); //대변금액

//             if(vDrAmt>0){
//                 if(vTmpDrAcctNm==""){
//                     vTmpDrAcctNm = ds_approveList.NameValue(i, "acctNm");
//                 }
//             }

//             if(vCrAmt>0){
//                 if(vTmpCrAcctNm==""){
//                     vTmpCrAcctNm = ds_approveList.NameValue(i, "acctNm");
//                 }
//             }

//             vTotalDrAmt += vDrAmt;
//             vTotalCrAmt += vCrAmt;			

//         }
//     }

//     if(vTmpTotalCnt>0){

//         vClntNm = vTmpClntNm + " 外"; //거래처명
//         vDrAcctNm = vTmpDrAcctNm + " 外"; // 차변계정명
//         vCrAcctNm = vTmpCrAcctNm + " 外"; // 대변계정명
//         vTotSlipCnt = vTmpTotalCnt; // 총건수

//         var vReturnArray = new Array(8);

//         vReturnArray[0] = vDrAcctNm; // 차변계정명
//         vReturnArray[1] = vCrAcctNm; // 대변계정명
//         vReturnArray[2] = vClntNm; // 거래처명
//         vReturnArray[3] = vTotSlipCnt + "  건"; // 총건수
//         vReturnArray[4] = cfInsertComma(vTotalCrAmt); // 대변총금액
//         vReturnArray[5] = cfInsertComma(vTotalDrAmt); // 차변총금액
//         vReturnArray[6] = vSlipNoList; // 전표목록
//         vReturnArray[7] = vPostReqDtList; // 회계요청번호 목록
//         vReturnArray[8] = vModDtmList; // 수정일자 목록

//         var info = "";
//         info  = "거래처명:" + vTmpClntNm + " 外\n" ;
//         info += "총건수:" + vTmpTotalCnt + "\n" ;
//         info += "대변총금액:" + vReturnArray[4] + "\n" ;
//         info += "차변총금액:" + vReturnArray[5] + "\n" ;

//         alert ( info );

//     }

//     return vReturnArray;
// }
// }

// //-------------------------------------------------------------------------
// // 동일한 전표번호 체크박스상태 동일하게 유지
// //-------------------------------------------------------------------------
// function f_ChangeCheckBoxStatus(pRow, pVal) {  
// var vCountRow = ds_approveList.CountRow;
// var vCurrentRowSlipNo = ds_approveList.NameString(pRow, "slipNo");

// var vSearchRowUnit = 10;  // 전표검색시 한 전표의 갯수가 계정항목갯수가 n개 이상인 경우 n개 이상으로 변경

// var vSearchStartRow = pRow - vSearchRowUnit;
// var vAdaptVal = pVal;
// var vTmpCompareCheck = "";

// if(pRow>0){
//     if(vSearchStartRow<0){
//         vSearchStartRow= 0;
//     }

//     out:

//     for(var i=vSearchStartRow;i<=vCountRow;i++){

//         var vTmpSlipNo = ds_approveList.NameString(i, "slipNo");

//         if(vCurrentRowSlipNo==vTmpSlipNo){
//             ds_approveList.NameString(i, "chk") = vAdaptVal;
//             vTmpCompareCheck = vAdaptVal;
//         }else if(vTmpCompareCheck!= "" && vCurrentRowSlipNo!=vTmpSlipNo){
//             break out;
//         }
//     }

// }
// }

// //-------------------------------------------------------------------------
// // 전자결재요청 Tray Component에서 EP 사용자 ID가져오기
// //-------------------------------------------------------------------------
// function f_getSSOInfo() {   
// var EXIST_YN = 0 ;

// try { 
//     EXIST_YN = SSOCheck.IsExist("GROUP") ;
// } catch ( exception ) { 
//     EXIST_YN = 0 ;
// }

// if(EXIST_YN==1) {  
//     SSO_LOGIN_YN = true ;
//     vEpUserId = SSOCheck.GetUID("GROUP");	// EP사용자ID
// }    
// return vEpUserId;
// }

// //-------------------------------------------------------------------------
// // 회계요청일자 입력창 Enable, Disable
// //-------------------------------------------------------------------------
// function f_CheckPostReqDtInputYn(vRow){   
// var vCurrentRowSlipNo = ds_approveList.NameString(vRow, "slipNo");
// var vFirstYn = true;
// var vEqualSplitNo = 0;

// for(var i=1;i<vRow;i++){
//     var vTmpSlipNo = ds_approveList.NameString(i, "slipNo");

//     if(vCurrentRowSlipNo==vTmpSlipNo){
//         vEqualSplitNo++;
//     }	
// }

// if(vEqualSplitNo>0){
//     vFirstYn = false;
// }    	

// if(vFirstYn){
//     gr_approveList.UrlImages = CALENDAR_BTN;
//     gr_approveList.ColumnProp("postReqDt", "Edit") = "ANY";
//     gr_approveList.ColumnProp("postReqDt", "EditStyle") = "Popup";
// }else{
//     gr_approveList.ColumnProp("postReqDt", "Edit") = "None";
//     gr_approveList.ColumnProp("postReqDt", "EditStyle") = "";
// }
// }

// //-------------------------------------------------------------------------
// // 선택된 전표의 회계요청일자 입력체크 
// //-------------------------------------------------------------------------
// function f_CheckSlectedSlipPostReqDt(){   
// var vCountRow = ds_approveList.CountRow;
// var vReturnMsg = "* 전자결재 요청 시 아래전표의 회계요청일자는 필수 입력 사항입니다. \n\n";
// var vBlankRowCnt = 0;

// for(var i=1;i<=vCountRow;i++){
//     var vCheck = ds_approveList.NameString(i, "chk");
//     var vSlipNo = ds_approveList.NameString(i, "slipNo");

//     if(vCheck=="T"){
//         var vTmpPostReqDt = ds_approveList.NameString(i, "postReqDt");
//         var vBeforeSlipNo = ds_approveList.NameString(i-1, "slipNo");

//         if(i>1){
//             if(vBeforeSlipNo!=vSlipNo){
//                 if(vTmpPostReqDt.trim()==""){
//                     vReturnMsg += " - 전표번호 : " + vSlipNo + "  \n";
//                     vBlankRowCnt++;
//                 }
//             }
//         }else{
//             if(vTmpPostReqDt.trim()==""){
//                 vReturnMsg += " - 전표번호 : " + vSlipNo + "  \n";
//                 vBlankRowCnt++;
//             }

//         }
//     }	
// }

// if(vBlankRowCnt>0){
//     return vReturnMsg;
// }else{
//     return "0";
// }
// }

// //-------------------------------------------------------------------------
// // 귀속부서팝업
// //-------------------------------------------------------------------------
// function f_openDeptPopUp(gb) {
// var vTitle = "귀속부서, 귀속부서코드, 귀속부서명";
// var rtnList = new Array();
// var pCode = drawAcctDeptCd.value ;
// var pName = drawAcctDeptNm.value ;

// if ( gb == 1 )
//     cfClearPairObj(drawAcctDeptNm);
// else if ( gb == 2 )
//     cfClearPairObj(drawAcctDeptCd);

// rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',pCode,pName,"F",null,null,null,"3,4,5,6,7,8,9,10",null,null,null,null,null,null,null,vTitle,null);//

// cfSetReturnValue(rtnList, drawAcctDeptCd, drawAcctDeptNm);

// if (rtnList != null ) {
//     if(rtnList[0] == "N/A") return false;

//         //drawAcctDeptCd.value = rtnList[0];	//부서코드
//         //drawAcctDeptNm.value = rtnList[1];	//부서명

//     drawEmpNo.value = "";	//사원번호
//     drawEmpNm.value = "";	//사원명

//         //drawAcctDeptCd.readOnly = false;
// }
// }

// //-------------------------------------------------------------------------
// // 사원팝업
// //-------------------------------------------------------------------------
// function f_openEmpPopUp(gb) {
// var vTitle = "사원팝업, 사원번호, 사원명";
// var rtnList = new Array();
// var pCode = drawEmpNo.value ;
// var pName = drawEmpNm.value ;

// if ( gb == 1 )
//     cfClearPairObj(drawEmpNm);
// else if ( gb == 2 )
//     cfClearPairObj(drawEmpNo);

// rtnList = cfCommonPopUp('retrieveEmpInfo',pCode,pName,"F",null,null,"150,176","3,4,5,6,7,8,9,10", null,null,null,null,null,null,null,vTitle,null); //  사원코드
// cfSetReturnValue(rtnList, drawEmpNo, drawEmpNm);

// if (rtnList != null ) {
//     if(rtnList[0] == "N/A") return false;
//         //drawEmpNo.value = rtnList[0];	//사원번호
//         //drawEmpNm.value = rtnList[1];	//사원명

//     drawAcctDeptCd.readOnly = true;
// }

// }  

//전자결재 요청버튼
scwin.btn_request_onclick = function (e) {
  scwin.f_RequestElectronicApprovePopUp(e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'견적일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'ds_approveListCondition',refEdDt:'estToDt',refStDt:'estFromDt',style:'',edToId:'ed_toEstDt',edFromId:'ed_fromEstDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'견적고객'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_cstmrNo',style:'',codeId:'ed_cstmrNo',nameId:'ed_cstmrNm',id:'udc_cstmrNo',objTypeCode:'Data',objTypeName:'Data',mandatoryCode:'false',mandatoryName:'false',refDataCollection:'ds_approveListCondition',code:'cstmrNo',name:'cstmrNm',selectID:'retrieveCstmrList','ev:onclickEvent':'scwin.udc_cstmrNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cstmrNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_cstmrNo_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'7'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'견적번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_estNo',placeholder:'',style:'width: 150px;',mandatory:'false',objType:'Data',displayFormat:'###########',readOnly:'false',ref:'data:ds_approveListCondition.estNo'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'견적점소'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_estBranCd',codeId:'ed_estBranCd',nameId:'ed_estBranNm',id:'udc_estBranCd',objTypeCode:'Data',objTypeName:'Data',mandatoryCode:'false',mandatoryName:'false',refDataCollection:'ds_approveListCondition',selectID:'retrieveLobranInfo',code:'estBranCd','ev:onclickEvent':'scwin.udc_estBranCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_estBranCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_estBranCd_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'견적담당자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_empNo',codeId:'ed_empNo',nameId:'ed_empNm',id:'udc_empNo',mandatoryCode:'false',mandatoryName:'false',objTypeCode:'Data',objTypeName:'Data',refDataCollection:'ds_approveListCondition',selectID:'retrieveEmpInfo',code:'empNo','ev:onclickEvent':'scwin.udc_empNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_empNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_empNo_onviewchangeNameEvent',name:'empNm',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_apprvStsClsCd',style:'width: 150px;',submenuSize:'auto',search:'start',ref:'data:ds_approveListCondition.apprvStsClsCd',chooseOption:'true',chooseOptionLabel:'전체'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:''},E:[{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_reset',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',id:'',label:'견적전자결재 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumVisible:'false',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_approveList',evenRowBackgroundColor:'#F8FFF8',id:'gr_approveList',visibleRowNum:'19',class:'wq_gvw',autoFit:'allColumn','ev:oncellclick':'scwin.gr_approveList_oncellclick','ev:oncelldblclick':'scwin.gr_approveList_oncelldblclick',oddEvenColorDisplay:'false',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption5',value:'견적전자결재'}},{T:1,N:'w2:header',A:{id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'h_chk',value:'선택',displayMode:'label',class:'',defaultValue:'선택',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'h_estNo',value:'견적번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'h_cstmrNo',value:'고객번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'h_cstmrNm',value:'고객명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'h_cstmrPicNm',value:'고객성명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'h_area',value:'영역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'h_bizDomTransYn',value:'사업영역운송여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'h_bizDomStvYn',value:'사업영역하역여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'h_bizDomStrYn',value:'사업영역보관여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'h_title',value:'제목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'h_stndPcost',value:'표준원가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'h_mktPcost',value:'시장원가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'h_estPcost',value:'견적원가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'h_estApprvStsClsCd',value:'결재상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'h_estDt',value:'견적일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'75',inputType:'text',id:'h_empNm',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'h_estBranNm',value:'견적점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'h_apprvReqNo',value:'결재요청번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'chk',readOnly:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'estNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmrNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmrNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmrPicNm',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'expression',id:'areaExpr',displayMode:'label',textAlign:'center',readOnly:'true',expression:'"운송"'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizDomTransYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizDomStvYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizDomStrYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'title',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stndPcost',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mktPcost',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'estPcost',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'estApprvStsClsCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'estDt',displayMode:'label',textAlign:'center',readOnly:'true',editFormat:'XXXX/XX/XX'}},{T:1,N:'w2:column',A:{width:'75',inputType:'text',id:'empNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'estBranNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'apprvReqNo',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'grp_totalCnt',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_request',label:'',style:'',type:'button','ev:onclick':'scwin.btn_request_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전자결재 요청'}]}]}]}]}]}]}]}]}]})