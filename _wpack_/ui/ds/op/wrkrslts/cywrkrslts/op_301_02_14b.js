/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_14b.xml 33652 a9ff1396a747f3752b902daf2a9ec421e5b973c5c778c4ad0f530b85ad79b995 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitClsCd',name:'접수구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onReqInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'admitClsCd',name:'승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onIntendDd',name:'상차예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BL/Booking',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntF20',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntF45',name:'40[45]',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실 화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnNm',name:'Door 지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'Door 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrict',name:'Door 권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNoView',name:'name23',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempOnReqInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOnRequestInfo',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveOnRequestAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond","key":"IN_DS1"},{"id":"ds_onReqInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_onReqInfo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOnRequestInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveOnRequestInfo_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/작업실적/입출고/반출입(자가)/상차 요청 승인 현황(협력업체)
//조회조건 : 자가운송사 241591((주)보승물류), 상차요청일 : 20200213
/*
	//세션정보
	LoginDTO loginDTO = LoginUtil.getLoginDTO(request);

	String userClsCd = loginDTO.getUserClsCd(); 
	//사용자구분코드(01:그룹사구분코드(01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객))

	String clntNo = loginDTO.getClntNo();  //거래처번호
	String clntNm = loginDTO.getClntNm();  //거래처명

	if(userClsCd == null) userClsCd = "";
*/
scwin.params = "";
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = $c.date.addDate($p, scwin.vCurDate, -7);
//scwin.vQryStDt = $c.date.addDate(scwin.vCurDate, -10);
scwin.memJson = $c.data.getMemInfo($p);
scwin.hid_srchSelfTransCoCd = "";
scwin.hid_srchSelfTransCoNm = "";
scwin.onpageload = function () {};

//var userClsCd = "<%=userClsCd%>";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  ica_srchFromDate.setValue(scwin.vCurDate);
  ica_srchToDate.setValue(scwin.vCurDate);
  ed_srchSelfTransCoCd.focus();

  //공통코드 적용()
  const codeOptions = [{
    grpCd: "SD060",
    compID: "acb_srchImpExpClsCd"
  } // 수출입 구분
  , {
    grpCd: "OP179",
    compID: "acb_srchRecptClsCd,gr_onReqInfo:admitClsCd"
  } // 접수구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  if (scwin.memJson.userClsCd != "01") {
    //사용자 구분 : 05
    ed_srchSelfTransCoCd.setValue(scwin.memJson.clntNo);
    ed_srchSelfTransCoNm.setValue(scwin.memJson.clntNm);
    $c.gus.cfDisableObjects($p, [udc_srchSelfTransCoCd]);
  } else {
    ed_srchSelfTransCoCd.setValue("");
    ed_srchSelfTransCoNm.setValue("");
    $c.gus.cfEnableObjects($p, [udc_srchSelfTransCoCd]);
  }
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 검색조건 초기화 & 초기값 세팅
//-------------------------------------------------------------------------
scwin.f_SetInitCondVal = function () {
  ed_srchSelfTransCoCd.setValue("");
  ed_srchSelfTransCoNm.setValue("");
  scwin.hid_srchSelfTransCoCd = "";
  scwin.hid_srchSelfTransCoNm = "";
  acb_srchImpExpClsCd.setValue("");
  acb_srchRecptClsCd.setValue("");
  ica_srchFromDate.setValue(scwin.vCurDate);
  ica_srchToDate.setValue(scwin.vCurDate);
  ed_srchSelfTransCoCd.focus();
};

//-------------------------------------------------------------------------
// 코드 조회 팝업
//-------------------------------------------------------------------------
scwin.f_OpenPopup = function (id, obj, param1, param2, pWinCloseTF, pWhere) {
  var rtnList = new Array();
  pWhere = ",LOGISCLNT2";
  //rtnList = cfCommonPopUp(id,param1,param2,pWinCloseTF,null,null,null,null,pWhere,null,null,null,null);

  //udc_srchSelfTransCoCd.setSelectId("retrieveClntList");
  udc_srchSelfTransCoCd.setSelectId(id);
  rtnList = udc_srchSelfTransCoCd.cfCommonPopUp(scwin.udc_srchSelfTransCoCdCallback, param1, param2, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null);

  /*
  	if( rtnList != null && rtnList[0] != "N/A" ){
  		for( var i = 0; i < obj.length; i++ ){
  			if( eval(obj[i]).tagName == "INPUT" ){
  				eval(obj[i]).setValue(rtnList[i%2]);
  			}else if( eval(obj[i]).tagName == "SPAN" ){
  				eval(obj[i]).innerText = rtnList[i%2];
  			}else if( eval(obj[i]).tagName == "OBJECT" ){
  				eval(obj[i]).setValue(rtnList[i%2]);
  			}
  		}
  	}else{
  		for( var i = 0; i < obj.length; i++ ){
  			if( eval(obj[i]).tagName == "INPUT" ){
  				eval(obj[i]).setValue("");
  			}else if( eval(obj[i]).tagName == "SPAN" ){
  				eval(obj[i]).innerText = "";
  			}else if( eval(obj[i]).tagName == "OBJECT" ){
  				eval(obj[i]).setValue("");
  			}
  		}
  	}
  */
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, ica_srchFromDate)) || !(await $c.gus.cfValidate($p, ica_srchToDate))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_srchFromDate.getValue(), ica_srchToDate.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_srchFromDate.focus();
    return;
  }
  if (ed_srchSelfTransCoCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["자가운송사"]);
    ed_srchSelfTransCoCd.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [tb_srchCond]))) return;
  ds_onReqInfo.setJSON([]);
  $c.sbm.execute($p, sbm_retrieveOnRequestInfo);
};

//-------------------------------------------------------------------------
// On-Hire반입(반납) 등록 ed_srchSelfTransCoCd, ed_srchSelfTransCoNm
//-------------------------------------------------------------------------
scwin.f_On_Hire_Regist = async function () {
  var tabTitle = "On-Hire반입(반납) 등록";
  var v_odrNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "odrNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "odrNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "odrNo");
  if (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") != 'D') {
    await $c.win.alert($p, "On-Hire건만 가능합니다.");
    return;
  } else {
    let strUrl = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_19b.xml";
    let programId = "op_301_02_19b.jsp";
    let paramObj = {
      selfTransClntNo: ed_srchSelfTransCoCd.getValue(),
      selfTransClntNm: ed_srchSelfTransCoNm.getValue(),
      odrNo: v_odrNo
    };
    console.log(paramObj);
    debugger;
    $c.win.openMenu($p, tabTitle, strUrl, programId, paramObj, {
      openAction: "exist"
    });

    //cfTabMenuUpdate("ds/op/wrkrslts/cywrkrslts/op_301_02_19b.jsp?"+param, tabTitle);			
  }
};
//-------------------------------------------------------------------------
// 수입/수출 상차 요청 등록
//-------------------------------------------------------------------------
scwin.f_RegistOnReq = async function () {
  var tabTitle = "수입/수출 상차 요청 등록";
  var v_selfTransClntNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo");
  var v_selfTransClntNm = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm");
  var v_impExpClsCd = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd");
  var v_onReqDt = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo").substring(0, 8);
  var v_clntNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo");
  var v_clntNm = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm");
  if (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == 'D') {
    await $c.win.alert($p, "수출,수입건만 가능합니다.");
    return;
  } else {
    let strUrl = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_01b.xml";
    let programId = "op_301_02_01b.jsp";
    let paramObj = {
      selfTransClntNo: v_selfTransClntNo,
      selfTransClntNm: v_selfTransClntNm,
      impExpClsCd: v_impExpClsCd,
      onReqDt: v_onReqDt,
      clntNo: v_clntNo,
      clntNm: v_clntNm
    };
    //console.log(paramObj);
    //debugger;
    $c.win.openMenu($p, tabTitle, strUrl, programId, paramObj, {
      openAction: "exist"
    });
  }
};

//-------------------------------------------------------------------------
// 반출(상차) 예정정보 등록
//-------------------------------------------------------------------------
scwin.f_RegistOnExport = async function () {
  var tabTitle = "반출(상차) 예정정보 등록";
  var v_selfTransClntNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo");
  var v_selfTransClntNm = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm");
  var v_impExpClsCd = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd");
  var v_onReqDt = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo").substring(0, 8);
  var v_clntNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo");
  var v_clntNm = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm");
  if (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == 'D') {
    await $c.win.alert($p, "수출,수입건만 가능합니다.");
    return;
  } else {
    let strUrl = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_09b.xml";
    let programId = "op_301_02_09b.jsp";
    let paramObj = {
      selfTransClntNo: v_selfTransClntNo,
      selfTransClntNm: v_selfTransClntNm,
      impExpClsCd: v_impExpClsCd,
      onReqDt: v_onReqDt,
      clntNo: v_clntNo,
      clntNm: v_clntNm
    };
    console.log(paramObj);
    console.log("반출~");
    debugger;
    $c.win.openMenu($p, tabTitle, strUrl, programId, paramObj, {
      openAction: "exist"
    });
  }
};

/*
//-------------------------------------------------------------------------
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_ResultsExcel = function () {
	cfGridToExcel(gr_onReqInfo, "상차요청승인현황(협력업체)", "상차요청승인현황(협력업체).xls", 4+8+16);
};
*/
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_SetInitCondVal();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_On_Hire_onclick = function (e) {
  scwin.f_On_Hire_Regist();
};
scwin.btn_RegistOnExport_onclick = function (e) {
  scwin.f_RegistOnExport();
};
scwin.btn_RegistOnReq_onclick = function (e) {
  scwin.f_RegistOnReq();
};
scwin.sbm_retrieveOnRequestInfo_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_onReqInfo.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  for (var i = 0; i < ds_onReqInfo.getRowCount(); i++) {
    var v_blNo = ds_onReqInfo.getCellData(i, "blNo");
    var v_bookingNo = ds_onReqInfo.getCellData(i, "bookingNo");
    //console.log(v_blNo+':'+v_bookingNo);
    if (ds_onReqInfo.getCellData(i, "impExpClsCd") == "I") {
      ds_onReqInfo.setCellData(i, "bookingNoView", v_blNo);
    } else if (ds_onReqInfo.getCellData(i, "impExpClsCd") == "O") {
      ds_onReqInfo.setCellData(i, "bookingNoView", v_bookingNo);
    } else if (ds_onReqInfo.getCellData(i, "impExpClsCd") == "D") {
      if (v_blNo == "") {
        ds_onReqInfo.setCellData(i, "bookingNoView", v_bookingNo);
      } else {
        ds_onReqInfo.setCellData(i, "bookingNoView", v_blNo);
      }
    } else {
      ds_onReqInfo.setCellData(i, "bookingNoView", "");
    }
    //console.log(ds_onReqInfo.getCellData(i,"bookingNoView"));
  }
  gr_onReqInfo.setFocusedCell(0, "admitClsCd", false);
};
scwin.sbm_retrieveOnRequestInfo_submiterror = function (e) {};
scwin.udc_srchSelfTransCoCd_onblurCodeEvent = function (e) {
  if (ed_srchSelfTransCoCd.getValue().trim() == "" || ed_srchSelfTransCoCd.getValue() == scwin.hid_srchSelfTransCoCd) {
    ed_srchSelfTransCoNm.setValue("");
    return;
  }
  scwin.f_OpenPopup('retrieveClntList', ['ed_srchSelfTransCoCd', 'ed_srchSelfTransCoNm', 'hid_srchSelfTransCoCd', 'hid_srchSelfTransCoNm'], ed_srchSelfTransCoCd.getValue(), '', 'T', '');
};
scwin.udc_srchSelfTransCoCd_onblurNameEvent = function (e) {
  if (ed_srchSelfTransCoNm.getValue().trim() == "" || ed_srchSelfTransCoNm.getValue() == scwin.hid_srchSelfTransCoNm) {
    ed_srchSelfTransCoCd.setValue("");
    return;
  }
  scwin.f_OpenPopup('retrieveClntList', ['ed_srchSelfTransCoCd', 'ed_srchSelfTransCoNm', 'hid_srchSelfTransCoCd', 'hid_srchSelfTransCoNm'], '', ed_srchSelfTransCoNm.getValue(), 'T', '');
};
scwin.udc_srchSelfTransCoCd_onclickEvent = function (e) {
  scwin.f_OpenPopup('retrieveClntList', ['ed_srchSelfTransCoCd', 'ed_srchSelfTransCoNm', 'hid_srchSelfTransCoCd', 'hid_srchSelfTransCoNm'], ed_srchSelfTransCoCd.getValue(), '', 'F', '');
};
scwin.udc_srchSelfTransCoCdCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_srchSelfTransCoCd.setValue(rtnList[0]);
    ed_srchSelfTransCoNm.setValue(rtnList[1]);
  } else {
    ed_srchSelfTransCoCd.setValue('');
    ed_srchSelfTransCoNm.setValue('');
  }
};
scwin.gr_onReqInfo_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  var tabTitle = "수입/수출 상차 요청 등록";
  var tabTitle2 = "On-Hire 반입요청 등록";
  var v_selfTransClntNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo");
  var v_selfTransClntNm = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm");
  var v_impExpClsCd = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd");
  var v_onReqDt = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo").substring(0, 8);
  var v_onReqNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo");
  var v_clntNo = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo");
  var v_clntNm = ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm");

  //var v_onReqDt         = (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "onReqNo").substring(0,8))
  //var v_clntNo          = (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNo"))
  //var v_clntNm          = (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == null || ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm") == "undefined" ? "" : ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "selfTransClntNm"));

  if (ds_onReqInfo.getCellData(ds_onReqInfo.getRowPosition(), "impExpClsCd") == 'D') {
    let strUrl = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_24b.xml";
    let programId = "op_301_02_24b.jsp";
    let paramObj = {
      selfTransClntNo: v_selfTransClntNo,
      selfTransClntNm: v_selfTransClntNm,
      impExpClsCd: v_impExpClsCd,
      onReqDt: v_onReqDt,
      onReqNo: v_onReqNo,
      clntNo: v_clntNo,
      clntNm: v_clntNm
    };
    //console.log("f_RegistOnExport1111~");
    //console.log(paramObj);
    $c.win.openMenu($p, tabTitle2, strUrl, programId, paramObj, {
      openAction: "exist"
    });
  } else {
    let strUrl = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_01b.xml";
    let programId = "op_301_02_01b.jsp";
    let paramObj = {
      selfTransClntNo: v_selfTransClntNo,
      selfTransClntNm: v_selfTransClntNm,
      impExpClsCd: v_impExpClsCd,
      onReqDt: v_onReqDt,
      onReqNo: v_onReqNo,
      clntNo: v_clntNo,
      clntNm: v_clntNm
    };
    //console.log("f_RegistOnExport2222~");
    //console.log(paramObj);
    $c.win.openMenu($p, tabTitle, strUrl, programId, paramObj, {
      openAction: "exist"
    });
  }
};
scwin.fn_setBlNo = function (data, formatData, rowIdx, colIdx) {
  //pmntSlipNoExp
  //console.log('scwin.fn_setBlNo~~~~');//241591

  var impExpClsCd = ds_onReqInfo.getCellData(rowIdx, "impExpClsCd");
  var blNo = ds_onReqInfo.getCellData(rowIdx, "blNo");
  var bookingNo = ds_onReqInfo.getCellData(rowIdx, "bookingNo");
  return $c.gus.decode($p, impExpClsCd, "I", blNo, "O", bookingNo, "D", $c.gus.decode($p, blNo, "", bookingNo, blNo), "");

  //let pmntYn = ds_retrieveCargo.getCellData(rowIdx, "pmntYn");
  //return $c.gus.decode(pmntYn, 0, data, 1, "기사납부");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자가 운송사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_srchSelfTransCoCd',style:'',btnId:'btn_srchSelfTransCoCd',codeId:'ed_srchSelfTransCoCd',id:'udc_srchSelfTransCoCd',nameId:'ed_srchSelfTransCoNm','ev:onblurCodeEvent':'scwin.udc_srchSelfTransCoCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchSelfTransCoCd_onclickEvent',code:'selfTransClntNo',refDataCollection:'ds_srchCond',maxlengthCode:'6',mandatoryCode:'true',allowCharCode:'0-9',validTitle:'자가 운송사','ev:onviewchangeNameEvent':'scwin.udc_srchSelfTransCoCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차요청일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchFromDate',refDataMap:'ds_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ica_srchFromDate',edToId:'ica_srchToDate',mandatoryFrom:'true',mandatoryTo:'true',titleTo:'반출입 조회 종료일자',titleFrom:'반출입 조회 시작일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입/수출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_srchImpExpClsCd',search:'start',style:'width:120px;',submenuSize:'auto',ref:'data:ds_srchCond.impExpClsCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접수구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_srchRecptClsCd',search:'start',style:'width:120px;',submenuSize:'auto',ref:'data:ds_srchCond.admitClsCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수입 상차 요청 승인',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_onReqInfo',gridUpYn:'N',grdDownOpts:'{"fileName":"상차요청승인현황(협력업체).xlsx","sheetName": "상차요청승인현황(협력업체)","type":"4+8+16"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_onReqInfo',id:'gr_onReqInfo',style:'',visibleRowNum:'16',visibleRowNumFix:'true',autoFitMinWidth:'1700',readOnly:'true','ev:oncelldblclick':'scwin.gr_onReqInfo_oncelldblclick',objType:'data'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'승인구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'상차요청번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'자가운송업체코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'자가운송사',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'상차예정일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'BL/Booking',width:'140'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'BL/Booking2',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Line',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'20',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'40[45]',width:'80'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'요청거래처코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'요청거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'청구거래처코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'실화주거래처코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'실화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'Door 지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'Door 명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'Door 권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column21',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'admitClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반납'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'onReqNo',inputType:'link',width:'120',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNo',inputType:'text',width:'150',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onIntendDd',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bookingNoView',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'bookingNo',value:'',displayMode:'label',customFormatter:'scwin.fn_setBlNo',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntF20',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntF45',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNo',inputType:'text',width:'120',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'120',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNo',inputType:'text',width:'150',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorRgnNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorDistrict',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'250',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_On_Hire',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_On_Hire_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'On-Hire반입(반납)등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_RegistOnExport',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_RegistOnExport_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반출(상차)예정정보 등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_RegistOnReq',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_RegistOnReq_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수입/수출 상차요청 등록'}]}]}]}]}]}]}]}]}]})