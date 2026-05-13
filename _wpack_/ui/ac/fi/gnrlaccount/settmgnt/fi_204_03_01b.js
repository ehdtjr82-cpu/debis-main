/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_01b.xml 26044 cb07018b7b7f02e9e656bae61445ba10348c5db1e42bc84cb35e85fe076c1438 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_month',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkId',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeStDtm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeEndDtm',name:'종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDesc',name:'작업설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNo',name:'오류번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'작업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDd',name:'마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'결산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closePrgsStsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'monthAllCompanyClose',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_judge'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_company'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_judge',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_company',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'회사명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_month","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_month","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_judge',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_judge_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_company',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_company',target:'data:json,{"id":"ds_company","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_month',action:'/ac.fi.gnrlaccount.settmgnt.ProcessMonthSettlementOfAccountsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_month_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_monthAllCompany',action:'/cm.bc.comnmgnt.closemgnt.RegistCloseControlInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_monthAllCompany_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.gJudgeYn = "0";
scwin.g_sLoginDept = scwin.memJson.acctDeptCd;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.txtMonthAllCompanyClose = "";
scwin.txtWrkNo = "";
scwin.txtCloseDd = "";
scwin.txtMgntNo = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_retrieveJudge(); // 권한 -거래처수금조건권한부서(TB_ZZ023)

  dma_search.set("closeDd", "00");
  dma_search.set("mgntNo", "0");
  ica_closeYm.focus();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) return false;
  dma_search.set("wrkNo", ACConstants.CLOSE_MONTH);
  dma_search.set("coCd", ed_coCd.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 월결산
//-------------------------------------------------------------------------
scwin.f_MonthProcess = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) {
    return false;
  }

  // 마감체크
  let ret2 = await scwin.f_JobCloseYN(ACConstants.CLOSE_MONTH);
  if (!ret2) {
    return false;
  }
  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "월결산"))) {
    dma_search.set("coCd", ed_coCd.getValue()); // DataSet Bind 하지 말 것.(월 마감, 통합 마감 같이 사용.)
    dma_search.set("coClsCd", scwin.txtCoClsCd); // DataSet Bind 하지 말 것.(월 마감, 통합 마감 같이 사용.)
    $c.sbm.execute($p, sbm_month);
  }
};

//-------------------------------------------------------------------------
// 월 - 통합마감
//-------------------------------------------------------------------------
scwin.f_MonthAllCompanyProcess = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) {
    return false;
  }
  scwin.txtWrkNo = ACConstants.CLOSE_MONTH_ALL_SETUP; // 월 결산 통합마감
  scwin.txtMonthAllCompanyClose = "T"; //마감완료

  // 마감체크
  let ret2 = await scwin.f_JobMonthCloseYN(ACConstants.CLOSE_MONTH_ALL_SETUP);
  if (!ret2) return false;
  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "월 통합마감"))) {
    dma_search.set("coCd", ACConstants.CO_CD_DONGBU); // DataSet Bind 하지 말 것. (월 마감, 통합 마감 같이 사용.)
    dma_search.set("coClsCd", ACConstants.CO_CLS_CD_DONGBU); // DataSet Bind 하지 말 것. (월 마감, 통합 마감 같이 사용.)
    dma_search.set("closePrgsStsCd", ACConstants.WRK_NO_CLOSE_COMPLETE); //월 통합 마감 시에는 '마감완료(2)'로 Default set
    dma_search.set("monthAllCompanyClose", scwin.txtMonthAllCompanyClose);
    dma_search.set("wrkNo", scwin.txtWrkNo);
    $c.sbm.execute($p, sbm_monthAllCompany);
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function (wrkNo) {
  // 월마감시 감가상각, 선급비용 마감 체크 (둘다 마감완료가 되어야한다.)
  // 감가상각마감체크
  let isCloseDepr = await udc_closeYn.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00", ACConstants.CLOSE_DEPRECIATION, "0", "", "", ed_coCd.getValue());
  if (isCloseDepr == "1") {
    await $c.win.alert($p, "선행작업 감가상각마감이 미마감되어서 현재 작업을 진행할 수 없습니다.");
    return false;
  } else if (isCloseDepr == "0") {
    await $c.win.alert($p, "선행작업 감가상각마감이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
    return false;
  }

  // 월마감체크
  let isClose = await udc_closeYn.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00", wrkNo, "0", "ARR", "Y", ed_coCd.getValue());
  // 선행마감 작업에 대한 검사
  if (isClose[3] == "PRE") {
    if (isClose[0] == "1") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (isClose[0] == "0") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }

  // 해당마감 작업에 대한 검사
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (isClose[0] == "2") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감완료가 되었습니다");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 월 통합 마감을 위한 선행 마감 및 해당 통합마감에 대한 체크
//-------------------------------------------------------------------------
scwin.f_JobMonthCloseYN = async function (wrkNo) {
  let vCompanyCode = '';
  let vCompanyName = '';

  // 각 자회사별 월 마감이 여부 Check

  // 자회사 리스트 정보 Get
  await scwin.f_retrieveDongbuCompanyList();
  for (let i = 0; i < ds_company.getRowCount(); i++) {
    vCompanyCode = ds_company.getCellData(i, "col1"); // 회사 코드
    vCompanyName = ds_company.getCellData(i, "col6"); // 회사명

    let preWrkNo = ACConstants.CLOSE_MONTH; // 각 사별 월 마감 Check

    let isCloseDepr = await udc_closeYn.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00", preWrkNo, "0", "", "", vCompanyCode);
    if (isCloseDepr == "1") {
      await $c.win.alert($p, vCompanyName + "(" + vCompanyCode + ") 의 선행작업 월마감 (" + preWrkNo + ")이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (isCloseDepr == "0") {
      await $c.win.alert($p, vCompanyName + "(" + vCompanyCode + ") 의 선행작업 월마감 (" + preWrkNo + ")이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }

  // 월 통합 마감체크 - 동부 EXPRESS만 통합 마감 정보 가짐.
  let isClose = await udc_closeYn.cfJobCloseYN("CUR", ica_closeYm.getValue().trim(), "00", wrkNo, "0", "ARR", "Y", ACConstants.CO_CD_DONGBU);

  // 선행마감 작업에 대한 검사
  if (isClose[3] == "PRE") {
    if (isClose[0] == "1") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (isClose[0] == "0") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }
  // 해당마감 작업에 대한 검사
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (isClose[0] == "2") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감완료가 되었습니다");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.(그리드용)
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = async function () {
  //심사권한 조회
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveBorrowAcqKindInfo",
    param1: "ZZ023"
  };
  dma_judge.setJSON(params);
  $c.sbm.execute($p, sbm_judge);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany || scwin.gJudgeYn == '1') {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      if (scwin.gJudgeYn == '1')
        // 통합 마감 권한
        $c.gus.cfEnableObjects($p, [btn_allClose]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company, btn_allClose]);
    }
  }
  scwin.isStart = false;
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.(그리드용)
//-------------------------------------------------------------------------
scwin.f_retrieveDongbuCompanyList = async function () {
  // 동부 자회사 List 조회
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveDongbuGroupCompanyInfo",
    param1: "",
    param2: ""
  };
  dma_company.setJSON(params);
  $c.sbm.execute($p, sbm_company);
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_month.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_month_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, "성공적으로 처리되었습니다");
  }
};
scwin.sbm_monthAllCompany_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, "성공적으로 처리되었습니다");
  }
};
scwin.gr_prepay_oncelldblclick = async function (row, columnIndex, columnId) {
  if (row >= 0) {
    let data = {};
    data.closeYm = ica_closeYm.getValue();
    data.closeEndDtm = ds_month.getCellData(row, "closeEndDtm");
    const options = {
      id: "fi_204_03_01p",
      popupName: "월결산 전표 리스트",
      width: 825,
      height: 560
    };
    $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_01p.xml", options, data);
  } else {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["Row"]));
  }
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_evid_onclick = function (e) {
  scwin.f_MonthProcess();
};
scwin.btn_allClose_onclick = function (e) {
  scwin.f_MonthAllCompanyProcess();
};
scwin.sbm_judge_submitdone = function (e) {
  for (let i = 0; i < ds_judge.getRowCount(); i++) {
    if (scwin.g_sLoginDept == ds_judge.getCellData(i, "col1")) {
      scwin.gJudgeYn = "1";
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',objTypeName:'data',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산연월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',objType:'data',mandatory:'true',ioFormat:'yyyyMM',displayFormat:'yyyy/MM',editType:'focus',title:'결산년월',ref:'data:dma_search.closeYm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_month',id:'gr_prepay',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_prepay_oncelldblclick',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업자ID ',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'시작일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'종료일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'작업설명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'오류번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'작업자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'마감년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'마감일',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'작업번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'작업번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkId',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeStDtm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeEndDtm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDesc',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'errNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeDd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white link',id:'btn_evid',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_evid_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월결산'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white link',id:'btn_allClose',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_allClose_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합마감'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_closeYn'}}]}]}]}]}]})