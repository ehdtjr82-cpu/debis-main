/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_06b.xml 42210 e75a8e71e6c32c3f97cfe2b58d8a80eebdcf97e0537edae31fba033d82709447 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrieveCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm2',name:'귀속계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddUnArrv',name:'수금조건미도래',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyFddOvr',name:'수금조건초과',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sum',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt120',name:'4개월이상',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt90',name:'3개월이전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt60',name:'2개월이전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt30',name:'1개월이전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt0',name:'당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalSum',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmtPercent',name:'%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'results',name:'회수금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unArrvResults',name:'수금미도래;회수금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'resultsPercent',name:'%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmtPercent',name:'%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'level',name:'',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyFddUnArrv_org',name:'name20',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyFddOvr_org',name:'name21',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt120_org',name:'name22',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt90_org',name:'name23',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt60_org',name:'name24',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt30_org',name:'name25',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt0_org',name:'name26',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'results_org',name:'name27',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'unArrvResults_org',name:'name28',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master_org',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm2',name:'귀속계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddUnArrv',name:'수금조건미도래',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddOvr',name:'수금조건초과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sum',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt120',name:'4개월이상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt90',name:'3개월이전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt60',name:'2개월이전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt30',name:'1개월이전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt0',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalSum',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmtPercent',name:'%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'results',name:'회수금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unArrvResults',name:'수금미도래;회수금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'resultsPercent',name:'%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmtPercent',name:'%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddUnArrv_org',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddOvr_org',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt120_org',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt90_org',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt60_org',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt30_org',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyGoalAmt0_org',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'results_org',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unArrvResults_org',name:'name27',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveCollMoneyGoalCompRotatRtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_603_01_06b
// 이름     : 수금목표대비 회수율 현황
// 경로     : 회계/자금관리/채권관리/채권내역관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-06
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

// f_HiddenCheck 용 전역변수
scwin.ed_sclntNo_hidVal = ""; // 거래처
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
scwin.coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
scwin.userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.empNo = $c.data.getMemInfo($p, "empNo");
scwin.empNm = $c.data.getMemInfo($p, "empNm");
scwin.acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.vLoginCoCd = scwin.coCd;
scwin.vLoginCoClsCd = scwin.coClsCd;
scwin.vUserHomeClsCd = scwin.userHomeClsCd;
scwin.vCoCd = scwin.coCd; // 동일
scwin.userId = scwin.userId;
scwin.privAdmin = scwin.privAdmin;
scwin.txt_coCd = scwin.coCd;
scwin.txt_coClsCd = scwin.coClsCd;
scwin.txt_acctDeptCd = scwin.acctDeptCd;
scwin.txt_empNo = scwin.empNo;
scwin.txt_drawEmpNm = scwin.empNm;
scwin.sortType = "";
scwin.sortOrder = "";
scwin.onUdcCompleted = function () {
  ed_srchStdYm.setValue(scwin.today);
};
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO012",
    compID: "lc_unit"
  } //단위
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Re3333trieve ==================");
  const strParam = {
    stdYm: ed_srchStdYm.getValue(),
    acctDeptCd: ed_srchAcctDeptCd.getValue(),
    acctDeptCls: lc_acctDeptCls.getValue(),
    retrieveCls: lc_retrieveCls.getValue() //udc
    ,
    clntNo: ed_sclntNo.getValue() //udc : 거래처
  };

  //데이터셋에 정보설정
  ds_search.setJSON(strParam);
  var sortArr = gr_master.getSortableStatus();
  console.log('retrieve sortArr');
  console.log(sortArr);
  if (sortArr.length > 0) {
    scwin.sortType = sortArr[0].colID;
    scwin.sortOrder = sortArr[0].sortOrder == 1 ? 0 : 1;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  //원본 데이터를 ds_deptProfitLossOriginal에 백업
  let originalData = ds_master.getAllJSON();
  ds_master_org.setJSON(originalData);
  //ds_master.sort('acctDeptNm', 0);

  ed_totalRows.setValue(ds_master.getRowCount());
  scwin.lc_unit_onchange();
  if (ds_master.getRowCount() > 0) {
    var sortOption = {};
    if (scwin.sortType != "") {
      sortOption = {
        sortIndex: scwin.sortType,
        sortOrder: scwin.sortOrder
      };
    } else {
      sortOption = {
        sortIndex: "acctDeptNm2",
        sortOrder: 0
      };
    }
    console.log(sortOption);
    ds_master.sort(sortOption.sortIndex, sortOption.sortOrder);
    console.log(sortOption.sortIndex + " ::: " + sortOption.sortOrder);
    //ds_master.sort('acctDeptNm', 0);
  }
};

//-------------------------------------------------------------------------
// 단위변경
//-------------------------------------------------------------------------
scwin.lc_unit_onchange = function (info) {
  var val = lc_unit.getValue();
  if (val == "01") {
    scwin.f_changeUnitAmt(1);
  } else if (val == "02") {
    scwin.f_changeUnitAmt(1000);
  } else if (val == "03") {
    scwin.f_changeUnitAmt(1000000);
  } else if (val == "04") {
    scwin.f_changeUnitAmt(100000000);
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnitAmt = function (unitAmt) {
  let calculatedData = ds_master_org.getAllJSON();
  const cols = ["collMoneyFddUnArrv", "collMoneyFddOvr", "collMoneyGoalAmt120", "collMoneyGoalAmt90", "collMoneyGoalAmt60", "collMoneyGoalAmt30", "collMoneyGoalAmt0", "collMoneyGoalSum", "results", "unArrvResults", "results", "unArrvResults", "resultsPercent", "collMoneyAmtPercent"];
  for (let i = 0; i < calculatedData.length; i++) {
    let rowData = calculatedData[i];
    for (const colId of cols) {
      if (rowData.hasOwnProperty(colId)) {
        let originalValue = parseFloat(rowData[colId] || 0);
        rowData[colId] = Math.round(originalValue / unitAmt);
      }
    }
    rowData['collMoneyFddUnArrv_org'] = ds_master_org.getCellAllData(i, 'collMoneyFddUnArrv');
    rowData['collMoneyFddOvr_org'] = ds_master_org.getCellAllData(i, 'collMoneyFddOvr');
    rowData['collMoneyGoalAmt120_org'] = ds_master_org.getCellAllData(i, 'collMoneyGoalAmt120');
    rowData['collMoneyGoalAmt90_org'] = ds_master_org.getCellAllData(i, 'collMoneyGoalAmt90');
    rowData['collMoneyGoalAmt60_org'] = ds_master_org.getCellAllData(i, 'collMoneyGoalAmt60');
    rowData['collMoneyGoalAmt30_org'] = ds_master_org.getCellAllData(i, 'collMoneyGoalAmt30');
    rowData['collMoneyGoalAmt0_org'] = ds_master_org.getCellAllData(i, 'collMoneyGoalAmt90');
    rowData['results_org'] = ds_master_org.getCellAllData(i, 'results');
    rowData['unArrvResults_org'] = ds_master_org.getCellAllData(i, 'unArrvResults');
  }
  ds_master.setJSON(calculatedData);
};

//-------------------------------------------------------------------------
// 작성부서 돋보기 클릭
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("▷ f_openPopUp ( flag : " + flag + ", chkeck : " + check + ")");
  let param;
  switch (flag) {
    // 부서조회    
    case '1':
      param = "," + scwin.txt_coCd + "," + scwin.txt_coClsCd + ",0"; // 주의 : , 중간에 공백 있으면 지울 것
      console.log(" param [" + param + "]");
      udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue().trim(), ed_srchAcctDeptNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      //arrParm[0] = ["귀속부서조회","귀속부서코드","귀속부서명",options.pSelectID,options.bWinCloseTF,options.iDispCnt,options.bExistTF,options.bAllSearchTF,null,null,null];

      // param 해체
      //        await udc_drawAcctDeptCd.cfCommonPopUp( scwin.udc_drawAcctDeptCd_callBackFunc, ed_drawAcctDeptCd.getValue(), ed_drawAcctDeptNm.getValue(), check, null,null,null,null,scwin.txt_coCd,scwin.txt_coClsCd,0,null,null,null,null); 

      //await udc_drawAcctDeptCd.cfCommonPopUp( scwin.udc_drawAcctDeptCd_callBackFunc, 'retrieveAcctDeptCdInfo6', ed_drawAcctDeptCd.getValue(), ed_drawAcctDeptNm.getValue(), check, null,null,null,null,param,null,null,null,null); 
      //udc_drawAcctDeptCd.cfCommonPopUp( scwin.udc_drawAcctDeptCd_callBackFunc, ed_drawAcctDeptCd.getValue(), ed_drawAcctDeptNm.getValue(), check, null,null,null,null,param,null,null,null,null); 

      break;
    // 사원
    case '2':
      param = '';
      let resignYn = '';
      if (chk_resignYn.getValue() == true) {
        // 퇴사자포함
        resignYn = 'Y';
      } else {
        resignYn = '';
      }
      //param = txt_coCd.value + "," + txt_coClsCd.value + "," + resignYn;
      param = scwin.txt_coCd + "," + scwin.txt_coClsCd + "," + resignYn;
      console.log(" param [" + param + "]");
      //rtnList = cfCommonPopUp('retrieveAcEmpInfo', ed_drawEmpNo.text.trim(), txt_drawEmpNm.value, check, null,null,null,null,param,null,null,null,null); 
      udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_callBackFunc, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      //f_resultPopEd(ed_drawEmpNo,txt_drawEmpNm,rtnList);
      break;

    // 거래처
    case '4':
      param = '';
      param = scwin.txtCoCd;
      if (param == "") console.log("  ▶▶ 거래처pop  param [" + param + "]");
      console.log(check);
      udc_sclntNo.setSelectId("retrieveClntEmpNoList");
      udc_sclntNo.cfCommonPopUp(scwin.afterMgntClntNoPopup, ed_sclntNo.getValue(), '', check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// afterMgntClntNoPopup (거래처조회 팝업 통합처리)
//-------------------------------------------------------------------------
scwin.afterMgntClntNoPopup = function (rtnList) {
  console.log("▲▲ afterMgntClntNoPopup (거래처조회 팝업 통합처리)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_sclntNo.setValue(rtnList[0]); // 거래처코드
    ed_sclntNo.options.hidVal = rtnList[0];
    ed_sclntNm.setValue(rtnList[1]); // 거래처명명
    ed_sclntNm.options.hidVal = rtnList[1];
    scwin.ed_sclntNo_hidVal = rtnList[0]; // 히든값

    scwin.txt_clntCrn = rtnList[4]; // 사업자번호
    //사원거래처일경우 사번셋팅(수정 20060412)

    //if(ed_mgntEmpNo.Enable==true && rtnList[10]=="EM"){
    if (ed_mgntEmpNo.getDisabled() == false && rtnList[10] == "EM") {
      ed_sclntNo.setValue(rtnList[11]);
      ed_sclntNm.setValue(rtnList[12]);
      scwin.ed_sclntNo_hidVal = rtnList[11];
    }
  } else {
    console.log("   리턴 없슴");
    ed_sclntNo.setValue("");
    ed_sclntNm.setValue("");
    ed_sclntNo.options.hidVal = "";
    ed_sclntNm.options.hidVal = "";
    scwin.ed_sclntNo_hidVal = "";
    scwin.txt_clntCrn = "";
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 부서조회 팝업 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  console.log("▷ udc_srchAcctDeptCd_callBackFunc (작성부서조회 팝업 callBackFunc)");
  console.log("   rtnList : " + rtnList);
  scwin.f_resultPopEd(ed_srchAcctDeptCd, ed_srchAcctDeptNm, rtnList);
};

//-------------------------------------------------------------------------
//팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  console.log("=== f_resultPopEd (팝업결과)");

  // 2025-11-06 : strCd.s 사용안함

  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    strCd.setValue(rtnList[0]); // 코드
    strCd.options.hidVal = rtnList[0];
    strNm.setValue(rtnList[1]); // 명
    strNm.options.hidVal = rtnList[1];
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
    strNm.options.hidVal = "";
  }
};
scwin.subtotalTargetColumnView = function (tci) {
  return tci;
};
scwin.f_Export = function () {
  //cfGridToExcel(varGrNm, sheetTitle, sheetTitle+".xls", 4+8+16);
  let sheetTitle = "수금목표대비회수율현황_" + ed_srchStdYm.getValue();
  const gridId = gr_master;
  const infoArr = [];
  const options = {
    fileName: sheetTitle + ".xlsx",
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};

// expression 에서 값을 넘겨줄때 SUM(A,B,C) A합계가 0 이면 출력 0 된다.
scwin.calcPercent = function (param1, param2) {
  var returnValue = 0;
  if (isFinite(100 * param1 / param2)) {
    returnValue = 100 * parseFloat(param1) / parseFloat(param2);
  } else {
    returnValue = '';
  }
  return returnValue;
};

// expression 에서 값을 넘겨줄때 SUM(A,B,C) A합계가 0 이면 출력 0 된다.
scwin.calcPercent2 = function (param1, param2, param3, param4, param5, param6) {
  var returnValue = 0;
  var pParam1 = Number(param1) + Number(param2);
  var pParam2 = Number(param3) + Number(param4) + Number(param5) + Number(param6);
  if (isFinite(100 * pParam1 / pParam2)) {
    returnValue = 100 * pParam1 / pParam2;
  } else {
    returnValue = '';
  }
  return returnValue;
};
scwin.calcPercent3 = function (param1, param2, param3, param4) {
  var returnValue = 0;
  var pParam1 = Number(param1) + Number(param2);
  var pParam2 = Number(param3) + Number(param4);
  if (isFinite(100 * pParam1 / pParam2)) {
    returnValue = 100 * pParam1 / pParam2;
  } else {
    returnValue = '';
  }
  return returnValue;
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, inObj2) {
  let inValue = inObj.getValue();
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    inObj2.setValue("");
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm)) {
    scwin.f_openPopUp('1', 'T');
  }
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_sclntNo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_sclntNo, ed_sclntNm)) {
    scwin.f_openPopUp('4', 'T');
  }
};
scwin.udc_sclntNo_onclickEvent = function (e) {
  ed_sclntNo.setValue("");
  ed_sclntNm.setValue("");
  scwin.f_openPopUp('4', 'T');
};
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, table1, [ed_srchStdYm]);
  scwin.f_SetSrchDefault();
};
scwin.f_SetSrchDefault = function (e) {
  $c.gus.cfInitHidVal($p, table1);
  ed_srchStdYm.setValue(scwin.today);
  ed_srchStdYm.focus();
};
scwin.getSubTotal = function (sumValue) {
  var val = lc_unit.getValue();
  var returnValue = 0;
  if (val == "01") {
    returnValue = Math.round(sumValue);
  } else if (val == "02") {
    returnValue = Math.round(sumValue / 1000);
  } else if (val == "03") {
    returnValue = Math.round(sumValue / 1000000);
  } else if (val == "04") {
    returnValue = Math.round(sumValue / 100000000);
  }
  return returnValue;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ed_srchStdYm',style:'',displayFormat:'yyyy/MM',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구(수금)귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfo6popup',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',name:'name',maxlengthName:'100','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent',refDataCollection:'ds_search',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctDeptCls',style:'',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_sclntNo',class:'w300',code:'sclntNo',codeId:'ed_sclntNo',id:'udc_sclntNo',maxlengthCode:'6',maxlengthName:'30',name:'sclntNm',nameId:'ed_sclntNm',objType:'data',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupID:'retrieveScLntInfopopup',popupTitle:'',refDataCollection:'ds_search',selectID:'retrieveClntEmpNoList',style:'','ev:onclickEvent':'scwin.udc_sclntNo_onclickEvent',skipOnBlurCodeValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_sclntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'조회구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClassbm_searchs:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 230px;',allOption:'',id:'lc_retrieveCls',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마감일기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금초과일기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'단위',class:''}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_unit_onchange',id:'lc_unit',style:'width: 120px;',submenuSize:'auto'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Export',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y',btnPlusYn:'Y',gridDownUserAuth:'X',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_master',style:'',id:'gr_master',class:'wq_gvw',visibleRowNumFix:'true',visibleRowNum:'15',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column20',value:'구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column116',value:'귀속계',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column18',value:'거래처명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column17',value:'전월말 채권액',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'670',inputType:'text',id:'column16',value:'당월 수금목표',displayMode:'label',colSpan:'7',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column64',value:'수금목표대비 회수실적',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'수금율(일반)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column121',value:'레벨',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'수금조건미도래',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'수금조건초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'4개월이상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'3개월이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'2개월이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'1개월이전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'%',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'회수금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column46',value:'수금미도래 회수금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'%',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',value:'%',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'acctDeptNm2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyFddUnArrv',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyFddOvr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'collMoneyFddUnArrv\', \'collMoneyFddOvr\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyGoalAmt120',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyGoalAmt90',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyGoalAmt60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyGoalAmt30',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyGoalAmt0',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'collMoneyGoalSum',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyGoalAmt0\', \'collMoneyGoalAmt30\', \'collMoneyGoalAmt60\', \'collMoneyGoalAmt90\', \'collMoneyGoalAmt120\')',dataType:'number',displayFormat:'#,##0',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'collMoneyGoalAmtPercent',displayMode:'label',textAlign:'right',expression:'scwin.calcPercent(sum(\'collMoneyGoalSum\'),sum(\'sum\'))',displayFormat:'0.0[trunc]',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'results',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'unArrvResults',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'resultsPercent',displayMode:'label',textAlign:'right',expression:'scwin.calcPercent2(sum(\'results\'),sum(\'unArrvResults\'),sum(\'collMoneyGoalAmt90\'),sum(\'collMoneyGoalAmt60\'),sum(\'collMoneyGoalAmt30\'), sum(\'collMoneyGoalAmt120\'))',dataType:'number',displayFormat:'0.0[trunc]',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'collMoneyAmtPercent',displayMode:'label',textAlign:'right',expression:'scwin.calcPercent3( sum(\'results\'),sum(\'unArrvResults\'),sum(\'collMoneyFddUnArrv\'),sum(\'collMoneyFddOvr\') )',dataType:'number',displayFormat:'0.0',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'level',value:'0',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'acctDeptNm2',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'acctDeptNm',displayMode:'label',textAlign:'left',targetColumnView:'scwin.subtotalTargetColumnView',expression:'scwin.subtotalTargetColumnView(targetColValue())'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column119',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column104',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyFddUnArrv',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyFddUnArrv_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyFddOvr',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyFddOvr_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_sum',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyFddUnArrv_org\')+ sum(\'collMoneyFddOvr_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyGoalAmt120',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyGoalAmt120_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyGoalAmt90',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyGoalAmt90_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyGoalAmt60',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyGoalAmt60_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyGoalAmt30',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyGoalAmt30_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyGoalAmt0',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyGoalAmt0_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_collMoneyGoalSum',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'collMoneyGoalAmt0_org\')+sum(\'collMoneyGoalAmt30_org\')+sum(\'collMoneyGoalAmt60_org\')+sum(\'collMoneyGoalAmt90_org\')+sum(\'collMoneyGoalAmt120_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'s_collMoneyGoalAmtPercent',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'0.0[trunc]',expression:'scwin.calcPercent(sum(\'collMoneyGoalSum\'),sum(\'sum\'))'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'s_results',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'results_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'s_unArrvResults',displayMode:'label',textAlign:'right',expression:'scwin.getSubTotal(sum(\'unArrvResults_org\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'s_resultsPercent',displayMode:'label',textAlign:'right',expression:'scwin.calcPercent2(sum(\'results_org\'),sum(\'unArrvResults_org\'),sum(\'collMoneyGoalAmt90_org\'),sum(\'collMoneyGoalAmt60_org\'),sum(\'collMoneyGoalAmt30_org\'), sum(\'collMoneyGoalAmt120_org\'))',dataType:'number',displayFormat:'0.0[trunc]'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'s_collMoneyAmtPercent',displayMode:'label',textAlign:'right',expression:'scwin.calcPercent3( sum(\'results_org\'),sum(\'unArrvResults_org\'),sum(\'collMoneyFddUnArrv_org\'),sum(\'collMoneyFddOvr_org\') )',dataType:'number',displayFormat:'0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column124',value:'1',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column83',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'collMoneyFddUnArrv_org\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column82',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyFddOvr_org\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column81',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyFddUnArrv_org\')+sum(\'collMoneyFddOvr_org\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column80',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'collMoneyGoalAmt120_org\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column79',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'collMoneyGoalAmt90_org\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column78',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'collMoneyGoalAmt60_org\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column77',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'collMoneyGoalAmt30_org\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column75',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyGoalAmt0_org\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyGoalAmt0_org\')+sum(\'collMoneyGoalAmt30_org\')+sum(\'collMoneyGoalAmt60_org\')+sum(\'collMoneyGoalAmt90_org\')+sum(\'collMoneyGoalAmt120_org\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column71',displayMode:'label',textAlign:'right',dataType:'number',expression:'scwin.calcPercent((sum(\'collMoneyGoalAmt0_org\')+sum(\'collMoneyGoalAmt30_org\')+sum(\'collMoneyGoalAmt60_org\')+sum(\'collMoneyGoalAmt90_org\')+sum(\'collMoneyGoalAmt120_org\')),(sum(\'collMoneyFddUnArrv_org\')+sum(\'collMoneyFddOvr_org\')))',displayFormat:'0.0[trunc]'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column70',displayMode:'label',textAlign:'right',expression:'sum(\'results_org\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'sum(\'unArrvResults_org\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column68',displayMode:'label',textAlign:'right',displayFormat:'0.0[trunc]',dataType:'number',expression:'scwin.calcPercent2(sum(\'results_org\'),sum(\'unArrvResults_org\'),sum(\'collMoneyGoalAmt90_org\'),sum(\'collMoneyGoalAmt60_org\'),sum(\'collMoneyGoalAmt30_org\'), sum(\'collMoneyGoalAmt120_org\'))'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column67',displayMode:'label',textAlign:'right',expression:'scwin.calcPercent3( sum(\'results_org\'),sum(\'unArrvResults_org\'),sum(\'collMoneyFddUnArrv_org\'),sum(\'collMoneyFddOvr_org\') )',displayFormat:'0.0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column125',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})