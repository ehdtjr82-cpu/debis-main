/*amd /ui/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_01_01b.xml 35288 d46c79bb7e7578678b6286a7a76c98a8d2aa6d9e3169c64c67e59ae1333fe387 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntAcctCdSt',name:'상대계정코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntAcctCdEnd',name:'상대계정코드To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermStDtSt',name:'선급기간시작일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermStDtEnd',name:'선급기간시작일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermEndDtSt',name:'선급기간종료일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayTermEndDtEnd',name:'선급기간종료일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'선급적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayCostStsCd',name:'선급비용상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prepayCostNo',name:'선급비용번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtSt',name:'회계처리일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'회계처리일자To;',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prepay',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermDt',name:'기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostNo',name:'선급비용번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermStDt',name:'prepayTermStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermEndDt',name:'prepayTermEndDt',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.prepaycostmgnt.RetrievePrepayCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_prepay","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prepay","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 선급비용조회/연장/해지
 * 메뉴경로 : 회계/재무회계/일반회계/선급비용관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_01_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-12
 * 수정이력  :
 *    - 2025-12-12      정승혜    최초작성
 *    - 2026-01-21      정승혜    기타수정
 * 메모 :
 * flag==1 "기간연장" | flag==2 "해지" | flag==3 "상세내역조회"
 * 조회조건 : 
 * 계정- 5001350~5001350 / 20100101~20101231 / 회계처리-전체
 * 해야할 리스트:
 * 
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.g_sLoginDept = scwin.memJson.acctDeptCd; // 사용자 소속 부서

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.coCd = "000";
scwin.coClsCd = "0";
scwin.txtCoClsCd = "";
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI020",
    compID: "gr_prepay:prepayCostStsCd, lc_prepayCostStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  lc_postYn.setValue(0);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_Header();
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
  dma_search.set("coCd", scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.txtCoClsCd = rtnList[1]; // 회사구분 
    scwin.coCd = ed_coCd.getValue();
    scwin.coClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
    scwin.coCd = "";
    scwin.coClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

// 회사코드
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
  lc_postYn.setValue(-1);
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  ed_opntAcctCdSt.focus();
  ed_prepayTermStDtEnd.hide();
  ed_prepayTermEndDtEnd.hide();
  ed_postDtSt.setValue(scwin.vCurDate.substring(0, 6) + "01");
  ed_postDtEnd.setValue(scwin.vCurDate);
  scwin.f_setCompanyInfo(); //자회사여부 

  if (scwin.g_sLoginDept != '00009') {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 숫자차이체크
//-------------------------------------------------------------------------
scwin.f_BetweenCheck = function (str1, str2) {
  if (str1 == "" && str2 != "" || str1 != "" && str2 == "") {
    return false;
  }
  if (parseInt(str2) - parseInt(str1) < 0) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ed_prepayTermStDtEnd.setValue(ed_prepayTermStDtSt.getValue().trim());
  ed_prepayTermEndDtEnd.setValue(ed_prepayTermEndDtSt.getValue().trim());

  //ed_prepayTermStDtSt,ed_prepayTermStDtEnd,ed_prepayTermEndDtSt,ed_prepayTermEndDtEnd asis no 라서 tobe 에서 제외처리
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_acctDeptCd, ed_postDtSt, ed_postDtEnd, ed_slipNo, ed_slipKndCd]);
  if (!ret) {
    return false;
  }
  if (!scwin.f_BetweenCheck(ed_opntAcctCdSt.getValue().trim(), ed_opntAcctCdEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "계정코드To", "계정코드From"));
    ed_opntAcctCdEnd.focus();
    return false;
  }
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let rtnList = new Array();
  let temp = "";
  let param = "";
  switch (flag) {
    case '1':
      // 계정조회 
      temp = ",,,,,03";
      rtnList = udc_acctCdInfo.cfCommonPopUp(scwin.udc_acctCdInfo_callBackFunc, ed_opntAcctCdSt.getValue().trim(), ed_opntAcctCdStNm.getValue(), check, null, null, null, null, temp, null, null, null, null);
      break;
    case '2':
      // 계정조회
      temp = ",,,,,03";
      rtnList = udc_acctCdInfo2.cfCommonPopUp(scwin.udc_acctCdInfo2_callBackFunc, ed_opntAcctCdEnd.getValue().trim(), ed_opntAcctCdEndNm.getValue(), check, null, null, null, null, temp, null, null, null, null);
      break;
    case '3':
      // 부서
      param = "," + ed_coCd.getValue() + ",,0";
      rtnList = udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '4':
      // 전표종류
      param = ",,,0,";
      rtnList = udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_callBackFunc, ed_slipKndCd.getValue().trim(), ed_slipKndNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// 계정st
scwin.udc_acctCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_opntAcctCdSt.setValue(rtnList[0]); // 코드
    ed_opntAcctCdStNm.setValue(rtnList[1]); // 명
    ed_opntAcctCdSt.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_opntAcctCdSt.setValue("");
    ed_opntAcctCdStNm.setValue("");
    ed_opntAcctCdSt.options.hidVal = "";
  }
};

// 계정end
scwin.udc_acctCdInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_opntAcctCdEnd.setValue(rtnList[0]); // 코드
    ed_opntAcctCdEndNm.setValue(rtnList[1]); // 명
    ed_opntAcctCdEnd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_opntAcctCdEnd.setValue("");
    ed_opntAcctCdEndNm.setValue("");
    ed_opntAcctCdEnd.options.hidVal = "";
  }
};

// 부서
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]); // 코드
    ed_acctDeptNm.setValue(rtnList[1]); // 명
    ed_acctDeptCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};

// 전표종류
scwin.udc_slipKndCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_slipKndCd.setValue(rtnList[0]); // 코드
    ed_slipKndNm.setValue(rtnList[1]); // 명
    ed_slipKndCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_slipKndCd.setValue("");
    ed_slipKndNm.setValue("");
    ed_slipKndCd.options.hidVal = "";
  }
};

// 계정st
scwin.udc_acctCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

// 계정end
scwin.udc_acctCdInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

// 부서
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

// 전표종류
scwin.udc_slipKndCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //udc
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function (row, flag) {
  if (ds_prepay.getRowCount() > 0) {
    let str_title = "";
    //팝업화면에게 key 정보인 선급비용번호,상태,flag를 넘겨준다.
    let valueObject = new Object();
    valueObject.prepayCostNo = ds_prepay.getCellData(row, "prepayCostNo");
    valueObject.prepayCostStsCd = ds_prepay.getCellData(row, "prepayCostStsCd");
    valueObject.flag = flag;
    if (valueObject.flag == 1) str_title = "상세내역조회/기간연장";else if (valueObject.flag == 2) str_title = "상세내역조회/해지";else if (valueObject.flag == 3) str_title = "상세내역조회";

    // 기간연장 및 해지처리는 상태가 대기, 진행인 경우만 가능하다  
    if (valueObject.flag == 1 || valueObject.flag == 2) {
      if (valueObject.prepayCostStsCd != 10 && valueObject.prepayCostStsCd != 20) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "상태가 해지나 만기", "기간연장 및 해지처리를 "));
        return;
      }
      if (ds_prepay.getCellData(row, "postDt") == "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "회계처리가 가결인 건", "기간연장 및 해지처리를 "));
        return;
      }
    }

    //상세화면 호출 
    let data = {
      str: valueObject.flag,
      str_title: str_title,
      valueObject: valueObject
    };
    let opt = {};
    opt.width = "825";
    opt.height = "540";
    opt.modal = true;
    opt.title = "title";
    opt.id = "popup";
    opt.popupName = str_title;
    opt.type = "browserPopup";
    let result = $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_01_02p.xml", opt, data);

    //다시 조회함 
    scwin.f_Retrieve();
  } else {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "row"));
  }
};

// 상세내역
scwin.pu_evid_onclick = function (e) {
  scwin.f_Detail(ds_prepay.getRowPosition(), '3');
};

// 기간연장
scwin.pu_evid2_onclick = function (e) {
  scwin.f_Detail(ds_prepay.getRowPosition(), '1');
};

// 해지처리
scwin.pu_evid3_onclick = function (e) {
  scwin.f_Detail(ds_prepay.getRowPosition(), '2');
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  let sheetTitle = "선급비용내역";
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    $c.data.downloadGridViewExcel($p, gr_prepay, {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      type: 1
    });
  }
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function () {};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_prepay.getRowCount());
  ds_prepay.setRowPosition(0);
  $c.gus.cfGoPrevPosition($p, gr_prepay, 0);
  if (ds_prepay.getRowCount() > 0) {
    let sort_options = {};
    sort_options.sortIndex = "opntAcctCd";
    sort_options.sortOrder = "1"; // 1: 오름차순
    ds_prepay.multisort(sort_options);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ;
};
scwin.gr_prepay_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    await $c.gus.cfShowSlipInfo($p, ds_prepay.getCellData(rowIndex, "slipNo"));
  }
};
scwin.udc_acctCdInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_opntAcctCdSt, ed_opntAcctCdStNm, '1');
};
scwin.udc_acctCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_opntAcctCdEnd, ed_opntAcctCdEndNm, '2');
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '3');
};
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipKndCd, ed_slipKndNm, '4');
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
  ed_acctDeptCd.setValue("");
  ed_acctDeptNm.setValue("");
};

// value={(prepayTermStDt&prepayTermEndDt)}
scwin.prepayTermDtDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  data = "";
  let st = ds_prepay.getCellData(rowIndex, "prepayTermStDt");
  let end = ds_prepay.getCellData(rowIndex, "prepayTermEndDt");
  data = st.substring(0, 4) + "/" + st.substring(4, 6) + "/" + st.substring(6, 8) + "~" + end.substring(0, 4) + "/" + end.substring(4, 6) + "/" + end.substring(6, 8);
  return data;
};
scwin.udc_acctCdInfo_onviewchangeCodeEvent = function (info) {
  if (ed_opntAcctCdSt.getValue() == "") {
    ed_opntAcctCdSt.options.hidVal = "";
    ed_opntAcctCdStNm.setValue("");
  }
  if (info.oldValue != info.newValue) {
    ed_opntAcctCdStNm.setValue("");
  }
};
scwin.udc_acctCdInfo2_onviewchangeCodeEvent = function (info) {
  if (ed_opntAcctCdEnd.getValue() == "") {
    ed_opntAcctCdEnd.options.hidVal = "";
    ed_opntAcctCdEndNm.setValue("");
  }
  if (info.oldValue != info.newValue) {
    ed_opntAcctCdEndNm.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req\'',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',refDataCollection:'dma_search',code:'coCd',id:'udc_dongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',btnId:'btn_company'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_opntAcctCdSt',selectID:'retrieveAcctCdInfo',popupID:'',validTitle:'계정From',nameId:'ed_opntAcctCdStNm',style:'',maxlengthCode:'7',allowCharCode:'0-9',refDataCollection:'dma_search',code:'opntAcctCdSt',id:'udc_acctCdInfo','ev:onclickEvent':'scwin.udc_acctCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCdInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data','ev:onviewchangeCodeEvent':'scwin.udc_acctCdInfo_onviewchangeCodeEvent'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_opntAcctCdEnd',selectID:'retrieveAcctCdInfo',popupID:'',validTitle:'계정To',nameId:'ed_opntAcctCdEndNm',style:'',maxlengthCode:'7',allowCharCode:'0-9',refDataCollection:'dma_search',code:'opntAcctCdEnd',id:'udc_acctCdInfo2','ev:onclickEvent':'scwin.udc_acctCdInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCdInfo2_onblurCodeEvent',objTypeCode:'data',objTypeName:'data','ev:onviewchangeCodeEvent':'scwin.udc_acctCdInfo2_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'부서',maxlengthCode:'5',refDataCollection:'dma_search',code:'acctDeptCd',id:'udc_acctDeptCdInfo6','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent',objTypeCode:'data',editTypeName:'data',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선급시작일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_prepayTermStDtSt',style:'',ref:'data:dma_search.prepayTermStDtSt',objType:'data',title:'선급시작일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선급종료일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_prepayTermEndDtSt',style:'',ref:'data:dma_search.prepayTermEndDtSt',objType:'data',title:'선급종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_prepayCostStsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.prepayCostStsCd',objType:'data',title:'상태'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',popupID:'',selectID:'retrieveSlipKndCd',style:'',validTitle:'전표종류',refDataCollection:'dma_search',code:'slipKndCd',id:'udc_slipKndCd','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',maxlengthCode:'3',maxlengthName:'50',afterAllowCharCode:'0-9',allowCharCodeLength:'1',beforeAllowCharCode:'A-Za-z',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리시작일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_postDtSt',style:'',ref:'data:dma_search.postDtSt',objType:'data',displayFormat:'yyyy/MM/dd',title:'회계처리시작일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리종료일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_postDtEnd',style:'',ref:'data:dma_search.postDtEnd',objType:'data',displayFormat:'yyyy/MM/dd',title:'회계처리종료일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.postYn',objType:'data',title:'회계처리'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가결'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',id:'ed_slipNo',maxlength:'10',objType:'data',ref:'data:dma_search.slipNo',style:'width: 150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_prepay',gridDownFn:'scwin.f_Excel',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_prepay',id:'gr_prepay',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_prepay_oncellclick',readOnly:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'부서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'적요',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'금액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'잔액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'기간',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'선급비용번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'opntAcctCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opntAcctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',style:'',value:'',width:'70',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prepayTermDt',inputType:'text',style:'',value:'',customFormatter:'scwin.prepayTermDtDisplayFm',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'prepayCostStsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prepayCostNo',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white link',id:'pu_evid',style:'',type:'button','ev:onclick':'scwin.pu_evid_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세내역'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white link',id:'pu_evid2',style:'',type:'button','ev:onclick':'scwin.pu_evid2_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기간연장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white link',id:'pu_evid3',style:'',type:'button','ev:onclick':'scwin.pu_evid3_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해지처리'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_prepayTermStDtEnd',ref:'data:dma_search.prepayTermStDtSt',style:'',objType:'data'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_prepayTermEndDtEnd',ref:'data:dma_search.prepayTermStDtSt',style:'',objType:'data'}}]}]}]}]}]})