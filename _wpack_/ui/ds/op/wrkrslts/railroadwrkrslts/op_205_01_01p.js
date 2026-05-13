/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_01p.xml 34010 02ca3d81d9678d88e987fd02d79d200919aa04d987b161deb5e87b0efbf94c73 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_popup',saveRemovedData:'true','ev:ondataload':'scwin.ds_popup_OnLoadCompleted'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sendChk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'dptHndlRateSateYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'arvHndlRateSateYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'arrvlportDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnLobranCd',name:'dptStnLobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnLobranCd',name:'arvStnLobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCutAmt',name:'railroadCutAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvUpperWrkPlCd',name:'arvUpperWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'ediSndYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptUpperWrkPlCd',name:'dptUpperWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateWrkStpSeq',name:'dptHndlRateWrkStpSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateWrkStpSeq',name:'arvHndlRateWrkStpSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'lineCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'dptWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'arvWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'odrKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'selfClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'impExpClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'destPortCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'realMchtClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'blNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'bookingNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btRsnCheck',name:'btRsnCheck',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nextDay',name:'nextDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptDt',name:'pchsAdptDt',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBox',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvArkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_pKind1Grp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_pKind2Grp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_popup_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'name15',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveShippingWeightSubCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond","key":"IN_DS1"},{"id":"ds_popup","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_popup","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_popup',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_popup","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_205_01_01p 
// 이름     : 오더별컨테이너조회
// 경로     : 물류/작업실적/철송/적재내역등록
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-19
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  // scwin.arrParent         = $p.getAllParameter().paramData.data;
  scwin.arrParent = $p.getAllParameter().paramData.arrParm;

  // scwin.paramTitle = $c.data.getParameter("paramTitle");	// 윈도우 및 POPUP 타이틀
  scwin.pKind1 = $c.gus.cfIsNull($p, $c.data.getParameter($p, "pKind1")) ? "" : $c.data.getParameter($p, "pKind1"); // 조회존건 구분1 레이블명
  scwin.pKind2 = $c.gus.cfIsNull($p, $c.data.getParameter($p, "pKind2")) ? "" : $c.data.getParameter($p, "pKind2"); // 조회존건 구분2 레이블명
  scwin.pKind1Grp = $c.data.getParameter($p, "pKind1Grp"); // 조회존건 구분2 공통코드 그룹코드
  scwin.pKind2Grp = $c.data.getParameter($p, "pKind2Grp"); // 조회존건 구분2 공통코드 그룹코드

  ds_pKind1Grp.setJSON(scwin.pkind1Grp);
  ds_pKind2Grp.setJSON(scwin.pkind2Grp);
  scwin.load_cnt = 0;
  scwin.arrOptCnd = new Array("", "", "", "", "", "", "", "", "", ""); // Where절의 추가 조건
  scwin.strQueryId = ""; // XML SELECT ID
  scwin.iDispCnt = ""; // Grid 항목개수
  scwin.strOnCloseTF = ""; // Result건수 1건일경우 AutoClose 여부
  scwin.strExistTF = ""; // 중복체크여부
  scwin.strAllSearchTF = ""; // 전체검색 허용여부
  scwin.nLenCD = ""; // 입력코드 Length
  scwin.nLenNM = ""; // 입력명 Length
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  $p.setTimeout(async function () {
    // 검색영역 lux_kind1, lux_kind2 값에따른 숨김처리
    if (!(scwin.pKind1.length > 0 || scwin.pKind2.length > 0)) {
      grp_pkind1.hide("");
    }
    if (!(scwin.pKind1.length > 0)) {
      td_pkind1_title.hide("");
      acb_kind1.hide("");
    }
    if (scwin.pKind1.length > 0 && scwin.pKind2.length > 0) {}

    // lblTitle.innerHTML = arrParent[0][0];	// POPUP타이틀
    $c.data.setPopupTitle($p, scwin.arrParent[0][0]);
    txt_cndTitleCd.setValue(scwin.arrParent[0][1]); // 코드 Value
    txt_cndTitleNm.setValue(scwin.arrParent[0][2]); // Name Value
    scwin.strQueryId = scwin.arrParent[0][3]; // XML SQL Query ID
    scwin.strOnCloseTF = scwin.arrParent[0][4]; // 결과 1건일? AutoClose 여부
    scwin.iDispCnt = scwin.arrParent[0][5]; // Grid 항목개수
    scwin.strExistTF = scwin.arrParent[0][6]; // 중복체크 여부
    scwin.strAllSearchTF = scwin.arrParent[0][7]; // 전체검색 허용 여부
    scwin.nLenCD = scwin.arrParent[0][8]; // 코드 입력 자리수 제한 길이
    scwin.nLenNM = scwin.arrParent[0][9]; // 명 입력 자리수 제한 길이

    ed_Condition1.setValue(scwin.arrParent[1][0]); // 넘머온 코드 Value SET
    ed_Condition2.setValue(scwin.arrParent[1][1]); // 넘머온 Name Value SET

    // cfSetIMEModeActiveObjects([ed_Condition2]);	

    // 칼럼 hidden setting
    for (i = 0; i < scwin.arrParent[5].length; i++) {
      gr_popup.setColumnVisible('col' + scwin.arrParent[5][i], false);
    }

    // 추가옵션 Where절
    if (scwin.arrParent[6] != null) {
      for (i = 0; i < scwin.arrParent[6].length; i++) {
        if (i > 5) {
          break;
        }
        scwin.arrOptCnd[i] = scwin.arrParent[6][i];
      }
    }
    // 검색문자영 길이 체크
    if (!(await scwin.f_ByteLengthChk(ed_Condition1.getValue(), ed_Condition2.getValue()))) {
      ed_Condition2.focus();
      return;
    }
    ed_Condition2.focus();

    // 파라메터1 : DataSet
    // 파라메터2 : 0:타른화면에서 부려졌을경우, 1:Self화면에서 요청 
    // scwin.f_Retrieve(scwin.arrParent[7][0],"0");

    scwin.pWhere_str = "";
    scwin.pWhere_cnt = 2;
    for (i = 0; i < scwin.arrOptCnd.length; i++) {
      scwin.pWhere_cnt++;
      // scwin.pWhere_str += "&param" + scwin.pWhere_cnt + "=" + scwin.arrOptCnd[i];
      ds_popup_search.set("param" + scwin.pWhere_cnt, scwin.arrOptCnd[i]);
    }

    // retrivecRegistShippingWeightSubInfo2
    ds_popup_search.set("sysCd", "StationEachRailroadResultsEBC");
    ds_popup_search.set("queryId", "retrivecRegistShippingWeightSubInfo");
    ds_popup_search.set("queryId", scwin.strQueryId);
    ds_popup_search.set("param1", ed_Condition1.getValue());
    // ds_popup_search.set("param2", ed_Condition2.getValue() + scwin.pWhere_str);
    ds_popup_search.set("param2", ed_Condition2.getValue());
    var rs = await $c.sbm.execute($p, sbm_popup);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      ds_popup.setJSON(rs.responseJSON.GAUCE);
      // co_ds_combo1.sort("code", 0);
    }
    ;
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 문자열 자리수 체크
//-------------------------------------------------------------------------
scwin.f_ByteLengthChk = async function (str1, str2) {
  if (scwin.strAllSearchTF == "T") {
    return true;
  }
  var len1 = $c.gus.cfGetByteLength($p, str1);
  var len2 = $c.gus.cfGetByteLength($p, str2);
  var nLenCD_isNum = false;
  var nLenNM_isNum = false;
  var nLenCD_isHun = false;
  var nLenNM_isHun = false;
  nLenCD_isNum = $c.num.isNumber($p, scwin.nLenCD);
  nLenNM_isNum = $c.num.isNumber($p, scwin.nLenNM);
  if (scwin.nLenCD > 0 && scwin.nLenCD <= 100) {
    nLenCD_isHun = true;
  }
  if (scwin.nLenNM > 0 && scwin.nLenNM <= 100) {
    nLenNM_isHun = true;
  }
  if (nLenCD_isNum && nLenCD_isHun && len1 > 0) {
    if (len1 < scwin.nLenCD) {
      await $c.win.alert($p, "검색어를 " + scwin.nLenCD + "자리 이상 입력 하세요");
      ed_Condition1.focus();
      return false;
    }
  }
  if (nLenNM_isNum && nLenNM_isHun && len2 > 0) {
    if (len2 < scwin.nLenNM) {
      await $c.win.alert($p, "검색어를 " + scwin.nLenNM + "자리 이상 입력 하세요");
      ed_Condition2.focus();
      return false;
    }
  }
  if (len1 == 0 && len2 == 0) {
    ed_Condition2.focus();
    return false;
  } else if (len1 < 1 && len2 < 2) {
    await $c.win.alert($p, "검색어는\n숫자(문자)=> 1자\n한글=> 1자\n이상을 입력하세요...");
    ed_Condition2.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_Condition2.focus();
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  var arrRtnVal = new Array(); // Return Value
  arrRtnVal[0] = new Array(1);
  arrRtnVal[0][0] = "N/A";
  $c.win.closePopup($p, arrRtnVal);
};

//-------------------------------------------------------------------------
// 201705 신규조회버튼생성
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  scwin.load_cnt = 0;
  if (ed_Condition2.getValue() == "") {
    await $c.win.alert($p, "오더번호를 입력하세요.");
    ed_Condition2.focus();
    return;
  }
  if (!(await scwin.f_ByteLengthChk(ed_Condition1.getValue(), ed_Condition2.getValue()))) {
    ed_Condition2.focus();
    return;
  }
  ds_srchCond.set("cntrNo", ed_Condition1.getValue());
  ds_srchCond.set("odrNo", ed_Condition2.getValue());
  ds_srchCond.set("transWrkIndictNo", scwin.arrOptCnd[0]);
  ds_srchCond.set("dptWrkPlCd", scwin.arrOptCnd[1]);
  ds_srchCond.set("arvArkPlCd", scwin.arrOptCnd[2]);
  ds_srchCond.set("wrkDt", scwin.arrOptCnd[3]);
  //미배차조회
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (arg_ds, init_gb) {
  var lux_value1 = "";
  var lux_value2 = "";
  if (scwin.strAllSearchTF != "T") {
    if (ed_Condition1.getValue() == "" && ed_Condition2.getValue() == "") {
      await $c.win.alert($p, "전체검색이 허용되지 않았습니다.\n\n검색어를 입력하세요..");
      ed_Condition2.focus();
      return;
    }
  }
  if (!(await scwin.f_ByteLengthChk(ed_Condition1.getValue(), ed_Condition2.getValue()))) {
    ed_Condition2.focus();
    return;
  }
  if (scwin.pKind1 != "" || scwin.pKind2 != "") {
    if (scwin.pKind1 != "") {
      lux_value1 = acb_kind1.getValue();
    }
    if (scwin.pKind2 != "") {
      lux_value2 = acb_kind2.getValue();
    }
  }
  scwin.pWhere_str = "";
  scwin.pWhere_cnt = 2;
  for (i = 0; i < scwin.arrOptCnd.length; i++) {
    scwin.pWhere_cnt++;
    scwin.pWhere_str += "&param" + scwin.pWhere_cnt + "=" + scwin.arrOptCnd[i];
  }
  if (init_gb == "0") {
    //await $c.win.alert(arg_ds.ExportData(1,arg_ds.getRowCount(), true));

    // cfCopyDataSet(arg_ds, ds_popup);
    ds_popup.setJSON([arg_dsgetAllJSON()]);
    txt_totalRows.setValue(ds_popup.getRowCount());
    if (ds_popup.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      ed_Condition1.setValue("");
      ed_Condition2.setValue("");
      ed_Condition2.focus();
      return;
    } else {
      ds_popup.setRowPosition(0);
      gr_popup.focus();
    }
    //await $c.win.alert(ds_popup.ExportData(1,ds_popup.getRowCount(), true));
  } else {
    // retrivecRegistShippingWeightSubInfo2
    ds_popup_search.set("sysCd", "StationEachRailroadResultsEBC");
    ds_popup_search.set("queryId", "retrivecRegistShippingWeightSubInfo");
    ds_popup_search.set("queryId", scwin.strQueryId);
    ds_popup_search.set("param1", ed_Condition1.getValue());
    ds_popup_search.set("param2", ed_Condition2.getValue() + scwin.pWhere_str);
    var rs = await $c.sbm.execute($p, sbm_popup);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      ds_popup.setJSON(rs.responseJSON.GAUCE);
      // co_ds_combo1.sort("code", 0);
    }
    ;
    scwin.load_cnt = 0;
  }
};

//-------------------------------------------------------------------------
// Grid에서 선택된 Rows 의  Value 리턴
//-------------------------------------------------------------------------
scwin.f_rtnValue = function () {
  scwin.ds_popup_filter();
  scwin.load_cnt = 1;
  var arrRtnVal = new Array(); // Return Value

  for (var j = 0; j < ds_popup.getRowCount(); j++) {
    arrRtnVal[j] = new Array(10);
  }
  for (j = 0; j < ds_popup.getRowCount(); j++) {
    arrRtnVal[j][0] = ds_popup.getCellData(j, "odrNo");
    arrRtnVal[j][1] = ds_popup.getCellData(j, "cntrSizCd");
    arrRtnVal[j][2] = ds_popup.getCellData(j, "fullEmptyClsCd");
    arrRtnVal[j][3] = ds_popup.getCellData(j, "bilgClntNm");
    arrRtnVal[j][4] = ds_popup.getCellData(j, "sealNo");
    arrRtnVal[j][5] = ds_popup.getCellData(j, "cntrNo");
    arrRtnVal[j][6] = ds_popup.getCellData(j, "cntrSeq");
    arrRtnVal[j][7] = ds_popup.getCellData(j, "wrkPathSeq");
    arrRtnVal[j][8] = ds_popup.getCellData(j, "wrkStpSeq");
    arrRtnVal[j][9] = ds_popup.getCellData(j, "internalSellLodeptCd");
    arrRtnVal[j][10] = ds_popup.getCellData(j, "commCd");
    arrRtnVal[j][11] = ds_popup.getCellData(j, "cntrTypCd");
    arrRtnVal[j][12] = ds_popup.getCellData(j, "dptIntendDt");
    arrRtnVal[j][13] = ds_popup.getCellData(j, "dptIntendHh");
    arrRtnVal[j][14] = ds_popup.getCellData(j, "arvIntendDt");
    arrRtnVal[j][15] = ds_popup.getCellData(j, "arvIntendHh");
    arrRtnVal[j][16] = ds_popup.getCellData(j, "dptHndlRateSateYn");
    arrRtnVal[j][17] = ds_popup.getCellData(j, "arvHndlRateSateYn");
    arrRtnVal[j][18] = ds_popup.getCellData(j, "arrvlportDtm");
    arrRtnVal[j][19] = ds_popup.getCellData(j, "dptStnLobranCd");
    arrRtnVal[j][20] = ds_popup.getCellData(j, "arvStnLobranCd");
    arrRtnVal[j][21] = ds_popup.getCellData(j, "railroadCutAmt"); // 철송저감액
    arrRtnVal[j][22] = ds_popup.getCellData(j, "arvUpperWrkPlCd");
    arrRtnVal[j][23] = ds_popup.getCellData(j, "ediSndYn");
    arrRtnVal[j][24] = ds_popup.getCellData(j, "dptUpperWrkPlCd"); // 출발역상위코드
    arrRtnVal[j][25] = ds_popup.getCellData(j, "dptHndlRateWrkStpSeq"); // 출발역조작료작업단계순번
    arrRtnVal[j][26] = ds_popup.getCellData(j, "arvHndlRateWrkStpSeq"); // 도착역조작료작업단계순번
    arrRtnVal[j][27] = ds_popup.getCellData(j, "lineCd");
    arrRtnVal[j][28] = ds_popup.getCellData(j, "dptWrkPlCd");
    arrRtnVal[j][29] = ds_popup.getCellData(j, "arvWrkPlCd");
    arrRtnVal[j][30] = ds_popup.getCellData(j, "odrKndCd");
    arrRtnVal[j][31] = ds_popup.getCellData(j, "selfClsCd");
    arrRtnVal[j][32] = ds_popup.getCellData(j, "impExpClsCd");
    arrRtnVal[j][33] = ds_popup.getCellData(j, "destPortCd");
    arrRtnVal[j][34] = ds_popup.getCellData(j, "realMchtClntNo");
    arrRtnVal[j][35] = ds_popup.getCellData(j, "blNo");
    arrRtnVal[j][36] = ds_popup.getCellData(j, "bookingNo");
    arrRtnVal[j][37] = ds_popup.getCellData(j, "btRsnCheck");
    arrRtnVal[j][38] = ds_popup.getCellData(j, "nextDay");
    arrRtnVal[j][39] = ds_popup.getCellData(j, "pchsAdptDt");
  }
  $c.win.closePopup($p, arrRtnVal);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve2();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.btn_select_onclick = function (e) {
  scwin.f_rtnValue();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowcnt = ds_popup.getRowCount();
  txt_totalRows.setValue(rowcnt);
  if (scwin.strExistTF == "T") {
    $c.win.closePopup($p, rowcnt);
    return;
  } else {
    if (rowcnt == 1) {
      //	scwin.f_rtnValue(); 	   
      ds_popup.setCellData(0, "sendChk", "T");
      scwin.f_rtnValue();
    }
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      ed_Condition1.setValue("");
      ed_Condition2.setValue("");
      ed_Condition2.focus();
      return;
    }
  }
  ds_popup.setRowPosition(0);
  gr_popup.focus();
  scwin.load_cnt = 1;
};
scwin.gr_popup_oncelldblclick = function (row, columnIndex, columnId) {
  ds_popup.setCellData(row, "sendChk", "T");
  scwin.f_rtnValue();
};
scwin.gr_popup_oncellclick = function (rowIndex, columnIndex, columnId) {
  //전체check
  // if (Colid=="sendChk" && Row==0){
  //   for(i=0;i<ds_popup.getRowCount();i++){   
  //       if ( ds_popup.NameValue(i+1,"sendChk") == 'T' )
  //         ds_popup.NameValue(i+1,"sendChk") = "";
  //       else
  //         ds_popup.NameValue(i+1,"sendChk") = 'T';
  //   }
  // }
};
scwin.udc_cntrBox_ondblclick = async function (e) {
  // var args = new Array();
  // args[0] = ed_cntrBox.getValue().trim(); //오더번호

  // var rtnList = window.showModalDialog('/common/jsp/commonTextArea.jsp?paramTitle=오더리스트입력', args, 'dialogWidth:180px; dialogHeight:200px; status:No;');
  // let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_16b.xml";
  // let opts = {
  //     id : "orderListEditPop"
  //     , popupName : "오더리스트입력"
  //     , modal : true
  //     , type : "browserPopup"
  //     , width : 840
  //     , height : 400
  //     , title : "오더리스트입력"
  // };
  // var rtnList = await $c.win.openPopup(win_url, opts, args);

  // if (rtnList != null) {
  //     if (rtnList[0] != "N/A"){
  //         var result = rtnList[0].trim();
  //         ed_cntrBox.setValue(result);  // 오더번호
  //         ds_srchCond.set("cntrBox", result);
  //     }
  // }
};
scwin.screen_onkeyup = function (e) {
  if (e.target.tagName == "TEXTAREA") return;
  if (e.keyCode == 13) {
    if (gr_popup.getFocusedRowIndex() == -1) return;
    //await $c.win.alert(activeElement.id);
    scwin.f_rtnValue();
  }
  if (e.ctrlKey) {
    if (e.keyCode == 88) {
      // window.clipboardData.setData("Text", eval(event.srcElement.DataID).NameValue(eval(event.srcElement.DataID).RowPosition, event.srcElement.GetColumn()) );
    }
  }
};
scwin.ds_popup_filter = function () {
  if (scwin.load_cnt != 0) {
    ds_popup.clearFilter();
    ds_popup.setColumnFilter({
      type: 'row',
      colIndex: 'sendChk',
      key: "T",
      condition: 'and'
    });
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:'','ev:onkeyup':'scwin.screen_onkeyup'},E:[{T:1,N:'w2:wframe',A:{id:'lblTitle',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'grp_pkind1',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'td_pkind1_title',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',chooseOptionLabel:'전체',ref:'',chooseOption:'true',editType:'select',style:'width:150px;',id:'acb_kind1',allOption:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_pKind1Grp'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'td_pkind2_title',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',chooseOptionLabel:'전체',ref:'',chooseOption:'true',editType:'select',style:'width:150px;',id:'acb_kind2',allOption:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_pKind2Grp'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_cndTitleCd',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_Condition1',placeholder:'',class:'',ref:''}},{T:1,N:'w2:udc_schInput',A:{style:'width: 150px;',class:'',id:'udc_cntrBox',iptNm:'cntrBox',refDataMap:'ds_srchCond'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_cndTitleNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_Condition2',placeholder:'',style:'width:150px;',ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_popup',id:'gr_popup',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_popup_oncellclick','ev:oncelldblclick':'scwin.gr_popup_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'선택',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'SIZE',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'F/E구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'TYPE',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'화주명',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'봉인번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'컨테이너순번',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'작업경로순번',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'작업단계순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'매입부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'출발예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'출발예정시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'도착예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'도착예정시간',displayMode:'label',displayFormat:'##:##'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sendChk',inputType:'checkbox',style:'',value:'',width:'50',readOnly:'false',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'170',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',style:'',value:'',width:'120',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPathSeq',inputType:'text',style:'',value:'',width:'120',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###[floor]'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStpSeq',value:'',displayMode:'label',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###[floor]'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'internalSellLodeptCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dptIntendDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',textAlign:'center',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dptIntendHh',value:'',displayMode:'label',displayFormat:'##:##',textAlign:'center',readOnly:'true',dataType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'arvIntendDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',textAlign:'center',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'arvIntendHh',value:'',displayMode:'label',displayFormat:'##:##',textAlign:'center',readOnly:'true',dataType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_select',style:'',type:'button','ev:onclick':'scwin.btn_select_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]}]}]}]}]}]}]})