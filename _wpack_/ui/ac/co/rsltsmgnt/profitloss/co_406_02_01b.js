/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_02_01b.xml 41265 4a34c19f40218da5e6700f37343941c91038cde00f4537ef3fd24033f5c528cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntInfoClsCd',name:'경영정보구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntInfoClsCdNm',name:'경영정보구분코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCdNm',name:'통화코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'abroadYn',name:'해외여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planAdptExchRt',name:'계획환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptExchRt',name:'실적환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_info',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_info_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yearlyPlanAmt',name:'연간계획금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmFyearRsltsAmt',name:'당월전년실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmPlanAmt',name:'당월계획금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmRsltsAmt',name:'당월실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumFyearRsltsAmt',name:'누계전년실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumPlanAmt',name:'누계계획금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumRsltsAmt',name:'누계실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntInfoClsCd',name:'입력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmPlanRcrcAmt',name:'당월계획외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmRsltsRcrcAmt',name:'당월실적외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'실적적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planAdptExchRt',name:'계획적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmPlanRsltYn',name:'계획확정여부',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.profitloss.RetrieveSubsidiaryDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_info","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_info", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.profitloss.RegistSubsidiaryDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_info","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ac.co.rsltsmgnt.profitloss.UpdateSubsidiaryDataConfirmYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_info","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자회사자료업로드
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_02_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-29
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. login정보 확인 필요 
 *     ☞  $c.data.getMemInfo() 처리
 *    2. [해결]<%@ page import="dbl.ac.am.constants.ACConstants" %> 상수가져오는건 공통에서 글로벌 상수로 변경할 듯. 
 *    3. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 *    4. ☏ $c.gus.cfJobCloseYN 공통함수 없음
 *     ☞ 2025-12-22 공통개발됨(udc_comChkRes)
 *    5. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 테스트데이터 :
 *    1. 조회조건 : 마감년월[2026/02], 입력구분[15]
 * 수정이력 :
 *    - 2025-12-29      배기원    최초작성
 */
scwin.mgntInfoClsCd = ""; //tobe 사용안함
scwin.isClose = ""; //마감체크(tobe 추가)

//로그인 정보 전역 변수를 선언(ASIS 사용안함)
scwin.memJson;
scwin.G_acctDeptCd;
scwin.G_acctDeptNm;
scwin.G_empNo;
scwin.G_empNm;
scwin.initJson = {}; //초기세팅값(TOBE)

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.G_acctDeptCd = $c.gus.cfIsNull($p, scwin.memJson["acctDeptCd"]) ? "" : scwin.memJson["acctDeptCd"];
  scwin.G_acctDeptNm = $c.gus.cfIsNull($p, scwin.memJson["acctDeptNm"]) ? "" : scwin.memJson["acctDeptNm"];
  scwin.G_empNo = $c.gus.cfIsNull($p, scwin.memJson["empNo"]) ? "" : scwin.memJson["empNo"];
  scwin.G_empNm = $c.gus.cfIsNull($p, scwin.memJson["empNm"]) ? "" : scwin.memJson["empNm"];
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "mgntInfoClsCd:STRING(2)"            // 경영정보구분
  //                             + ",fromDate:STRING(6)"                // 마감년월
  //                             + ",acctDeptCd:STRING(5)"              // 귀속부서
  //                             + ",adptExchRt:STRING()"
  //                             + ",planAdptExchRt:STRING()";

  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.AddRow();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_info.setNoResultMessageVisible(false);
  ds_info.reform();
  ds_info.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_SetSrchDefault();
  $c.gus.cfDisableObjects($p, [ed_crcCd, ed_crcCdNm, rd_abroadYn, ed_adptExchRt, ed_planAdptExchRt]);
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  let today = $c.date.getServerDateTime($p);
  let closeYm = today.substring(0, 6);
  ica_fromDate.setValue(closeYm);
  ica_fromDate.hidVal = ica_fromDate.getValue();
  rd_abroadYn.setValue("1");
  ed_mgntInfoClsCd.setValue("");
  ed_mgntInfoClsCdNm.setValue("");
  ed_crcCd.setValue("");
  ed_crcCdNm.setValue("");
  ed_adptExchRt.setValue("");
  ed_planAdptExchRt.setValue("");
  ica_fromDate.focus();
};

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 */
scwin.f_openCommonPopUp = function (pCode, pName, pClose, pAllSearch) {
  //asis
  // if (pName==null) {
  //     pName="";
  // }
  // var rtnList  = new Array();  // 공통POP-UP -> 요청화면 ;
  // var pWhere;
  // var SELID;
  // SELID = "retrieveCoInsCls"; //;

  // rtnList = cfCommonPopUp(SELID,  //SQL SELECT ID;
  //                         pCode,  //조회조건 CODE;
  //                         pName,  //조회조건 CODE_NAME;
  //                         pClose, //1건일경우 자동 닫기 여부(T:자동닫기, F:보여주기);
  //                         null,
  //                         null,
  //                         null,
  //                         null,
  //                         pWhere, //SQL WHERE조건에 들어가는 INPUT PARAMETER;
  //                         null,
  //                         null,
  //                         null,
  //                         null); 

  // if ( rtnList != null ) {
  //     ed_mgntInfoClsCd.text =  rtnList[0];		//선박코드	
  //     txt_mgntInfoClsCdNm.value  = rtnList[1];	//선박명
  //     ed_crcCd.text  = rtnList[2];				//신호부자코드
  //     ed_crcCdNm.text  = rtnList[3];				//신호부자코드
  //     if (rtnList[4]=="Y") {
  //         rd_abroadYn.CodeValue = 1;				//신호부자코드
  //         cfEnableObjects(ed_adptExchRt);
  //         cfEnableObjects(ed_planAdptExchRt);
  //     } else {
  //         cfDisableObjects(ed_adptExchRt, ed_planAdptExchRt);
  //         cfDisableObjects(ed_planAdptExchRt);
  //         rd_abroadYn.CodeValue = 2;
  //         cfDisableObjects(rd_abroadYn);
  //         ed_adptExchRt.text="";
  //         ed_planAdptExchRt.text="";
  //     }
  // }
  //조회조건 9번째, 전체검색허용여부 15번째
  let param = "";
  udc_mgntInfoClsCd.cfCommonPopUp(scwin.udc_mgntInfoClsCd_callBackFunc, ed_mgntInfoClsCd.getValue(), ed_mgntInfoClsCdNm.getValue(), pClose, null, null, null, null, param, null, null, null, null, null, null, null, null);
};

/**
 * 입력구분 팝업 callBack
 */
scwin.udc_mgntInfoClsCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_mgntInfoClsCd.setValue(ret[0]); //선박코드
    ed_mgntInfoClsCdNm.setValue(ret[1]); //선박명
    ed_mgntInfoClsCd.hidVal = ret[0]; //히든값
    ed_crcCd.setValue(ret[2]); //신호부자코드
    ed_crcCdNm.setValue(ret[3]); //신호부자코드명

    if (ret[4] == "Y") {
      rd_abroadYn.setValue("1");
      $c.gus.cfEnableObjects($p, [ed_adptExchRt, ed_planAdptExchRt]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_adptExchRt, ed_planAdptExchRt, rd_abroadYn]);
      rd_abroadYn.setValue("2");
      ed_adptExchRt.setValue("");
      ed_planAdptExchRt.setValue("");
    }
  } else {
    ed_mgntInfoClsCd.setValue(""); //선박코드
    ed_mgntInfoClsCdNm.setValue(""); //선박명
    ed_mgntInfoClsCd.hidVal = ""; //히든값
    ed_crcCd.setValue(""); //신호부자코드
    ed_crcCdNm.setValue(""); //신호부자코드명

    $c.gus.cfDisableObjects($p, [ed_adptExchRt, ed_planAdptExchRt, rd_abroadYn]);
    rd_abroadYn.setValue("1");
    ed_adptExchRt.setValue("");
    ed_planAdptExchRt.setValue("");
  }
};

/**
 * 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * TOBE 사용안함
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, isCode) {
  // // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  // if (!cfCanOpenPopup(inObj, pairObj)) {
  //     return;
  // }

  // // 짝이 되는 오브젝트의 값 제거
  // cfClearPairObj(pairObj);

  // // 검색어 세팅
  // var pVal = cfGetValue(inObj);

  // // inObj가 코드 필드일 경우 팝업
  // if (isCode == null || isCode == true) {
  //     f_openCommonPopUp( pVal, '', 'T', 'T');
  // }
  // // inObj가 코드명 필드일 경우 팝업
  // else {
  //     f_openCommonPopUp( '', pVal, 'T', 'T');
  // }
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ica_fromDate, ed_mgntInfoClsCd]);
  if (!ret) {
    return false;
  }
  if (ica_fromDate.getValue().length != 6) {
    await $c.gus.cfAlertMsg($p, "마감년월은(는) 6자리수만큼 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_fromDate.getValue() + "01");
  if (!ret) {
    await $c.gus.cfAlertMsg($p, "올바른 마감년월을(를) 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_info.setNoResultMessageVisible(true);
  let rowCnt = ds_info.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    //계획확정여부[1:확정, 0:미확정]
    if (ds_info.getCellData(0, "confirmPlanRsltYn") == "1") {
      gr_info.setColumnReadOnly("thisMmPlanAmt", true); //당월계획금액
      gr_info.setColumnReadOnly("thisMmPlanRcrcAmt", true); //당얼계획외화
      $c.gus.cfDisableObjects($p, [ed_planAdptExchRt]);
    } else {
      gr_info.setColumnReadOnly("thisMmPlanAmt", false); //당월계획금액
      gr_info.setColumnReadOnly("thisMmPlanRcrcAmt", false); //당얼계획외화
      $c.gus.cfEnableObjects($p, [ed_planAdptExchRt]);
    }
    gr_info.setColumnReadOnly("thisMmRsltsAmt", false); //당월실적금액

    if (rd_abroadYn.getValue() == "1") {
      ed_adptExchRt.setValue(ds_info.getCellData(0, "adptExchRt"));
      ed_planAdptExchRt.setValue(ds_info.getCellData(0, "planAdptExchRt"));
      if (ds_info.getCellData(0, "confirmPlanRsltYn") == "0") {
        gr_info.setColumnReadOnly("thisMmPlanRcrcAmt", false); //당월계획금액
      } else {
        gr_info.setColumnReadOnly("thisMmPlanRcrcAmt", true); //당월계획금액
      }
      gr_info.setColumnReadOnly("thisMmRsltsRcrcAmt", false); //당얼계획외화
    } else {
      ed_adptExchRt.setValue("");
      ed_planAdptExchRt.setValue("");
      gr_info.setColumnReadOnly("thisMmPlanRcrcAmt", true); //당월계획금액
      gr_info.setColumnReadOnly("thisMmRsltsRcrcAmt", true); //당얼계획외화
    }
    ds_info.reform();
    gr_info.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 저장
 */
scwin.f_Save = async function (e) {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN(ACConstants.CLOSE_SUBSIDIARY_DATA);
  if (!ret) {
    return false;
  }

  // 변경된 사항이 있는지 확인.
  if (ds_info.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }

  // 필수입력사항 확인
  ret = await $c.gus.cfValidate($p, [gr_info]);
  if (!ret) {
    return false;
  }

  //환율저장
  for (let i = 0; i <= ds_info.getRowCount(); i++) {
    ds_info.setCellData(i, "adptExchRt", ed_adptExchRt.getValue()); //실적환율
    ds_info.setCellData(i, "planAdptExchRt", ed_planAdptExchRt.getValue()); //계획환율
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //ds_info.UseChangeInfo = false;   TOBE:ds_info.modifyAllStatus("C");
    //재조회 인 경우는 모든데이터 insert 상태로 변경
    ds_info.modifyAllStatus("C");
    sbm_save.userData1 = "noError";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_info.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 계획금액확정
 */
scwin.f_confirm = async function (e) {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN(ACConstants.CLOSE_SUBSIDIARY_DATA);
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //환율저장
    for (let i = 0; i <= ds_info.getRowCount(); i++) {
      ds_info.setCellData(i, "confirmPlanRsltYn", "1"); //계획확정여부[1:확정]
    }
    //ds_info.UseChangeInfo = false;   TOBE:ds_info.modifyAllStatus("C");
    //재조회 인 경우는 모든데이터 insert 상태로 변경
    ds_info.modifyAllStatus("C");
    sbm_update.userData1 = "noError";
    $c.sbm.execute($p, sbm_update);
  }
};

/**
 * 계획금액확정취소
 */
scwin.f_cancel = async function (e) {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN(ACConstants.CLOSE_SUBSIDIARY_DATA);
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //환율저장
    for (let i = 0; i <= ds_info.getRowCount(); i++) {
      ds_info.setCellData(i, "confirmPlanRsltYn", "0"); //계획확정여부[0:미확정]
    }
    //ds_info.UseChangeInfo = false;   TOBE:ds_info.modifyAllStatus("C");
    //재조회 인 경우는 모든데이터 insert 상태로 변경
    ds_info.modifyAllStatus("C");
    sbm_update.userData1 = "noError";
    $c.sbm.execute($p, sbm_update);
  }
};
scwin.sbm_update_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_info.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_update_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 엑셀 파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_toExcel = function (varGrNm) {
// totCnt      = gr_info.CountRow;
// sheetTitle  = "자회사자료업로드";

// if ( totCnt != 0) {
//     cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");

//     if (cfrm) {
//         cfGridToExcel(varGrNm, sheetTitle, sheetTitle+".xls", 4+8+16);
//     }
// } else {
//     cfAlertMsg(MSG_CM_WRN_002);
// }
// };

/**
 * 마감체크
 */
scwin.f_JobCloseYN = async function () {
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  /**
   * @param  : pReqKind  : 마감요청구분("PRE":선행마감체크, "CUR":작업마감체크)
   *           pCloseYM  : 마감년월(YYYYMM, MM이 '00'이 들어가는 경우는 년,월 마감일경우)
   *           pCloseDD  : 마감일 | 마감주기 (Y)년마감   : 00
   *                                     (H)반기마감 : 1:전기, 2:후기
   *                                     (Q)분기마감 : 1,2,3,4
   *                                     (M)월마감   : 00
   *                                     (W)주마감   : 1,2,3,4,5
   *                                     (D)일마감   : 해당일(01~31)
   *           pWorkNo   : 작업번호
   *           pMgntNo   : 관리번호(Default : "0")
   *           pRtnKind  : DAY:마감일리턴, ARR:결과를배열로, null:마감여부 결과리턴
   *           pDualChkYN: 작업마감체크기(CUR) 선행마감까지 체크를 할것인가 여부 Y:체크함
   *           pCoCd     : 회사코드
   *
   * @return : 0     : 마감중
   *           1     : 미마감
   *           2     : 마감완료
   *           DNF   : Data Not Found
   *           null  : 파라메터 오류
   *           마감일 : 리턴구분이 "DAY" 일경우(YYYYMMDD)
   *           ArrayObj : 리턴구분이 "ARR" 일경우 (리턴코드,작업번호,작업명,CUR or PRE)
   *           리턴구분이 DAY,ARR이 아닌경우 선행마감이 안된경우 (P0:마감중,P1:미마감 리턴함)
   */
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", ica_fromDate.getValue(), "00", "CO42", "0", "").then(function (arrRtn) {
    scwin.isClose = arrRtn;
    //             console.log("부모창 arrRtn : " + scwin.isClose);
  });

  // 선행마감 작업에 대한 검사
  if (scwin.isClose == "2") {
    //MSG_CM_ERR_041 = "@은(는) @할 수 없습니다."
    //cfAlertMsg(MSG_CM_ERR_041, ['['+sCloseYM+']손익보고 자회사자료', '마감되어 수정'] );
    // $c.win.alert("손익보고 자회사자료은(는)" + "마감되어 수정할 수 없습니다.");
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['[' + ica_fromDate.getValue() + ']손익보고 자회사자료', '마감되어 수정']);
    return false;
  } else {
    return true;
  }
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (gridNm, size) {
//     var strHeight = gridNm.style.height;
//     var intHeight = parseInt(strHeight.replace("px", ""));
//     intHeight = intHeight + size;
//     if (intHeight > 0) {
//         gridNm.style.height = intHeight + "px";
//     }
// };

/**
 * 마감년월 키보드에서 키를 눌렀을 때 발생
 */
scwin.ica_fromDate_onkeydown = function (e) {
  if (e.keyCode == "13") {
    if (!$c.util.isEmpty($p, this.getValue())) {
      this.setValue(this.getValue());
      scwin.f_Retrieve();
    } else {
      ed_mgntInfoClsCd.focus();
    }
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
* 구분코드(조회) 팝업 호출
*/
scwin.udc_mgntInfoClsCd_onclickEvent = function (e) {
  if (ed_mgntInfoClsCd.hidVal != ed_mgntInfoClsCd.getValue()) {
    ed_mgntInfoClsCdNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_mgntInfoClsCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openCommonPopUp(ed_mgntInfoClsCd, ed_mgntInfoClsCdNm, close, "T");
};
scwin.udc_mgntInfoClsCd_onviewchangeCodeEvent = function (info) {
  ed_mgntInfoClsCdNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_mgntInfoClsCd.getValue())) {
    scwin.f_openCommonPopUp(ed_mgntInfoClsCd, ed_mgntInfoClsCdNm, "T", "T");
  }
};
scwin.udc_mgntInfoClsCd_onviewchangeNameEvent = function (info) {
  ed_mgntInfoClsCd.setValue("");
  if (!$c.gus.cfIsNull($p, ed_mgntInfoClsCdNm.getValue())) {
    scwin.f_openCommonPopUp(ed_mgntInfoClsCd, ed_mgntInfoClsCdNm, "T", "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 * 외화금액계산
 */
scwin.gr_info_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_info.getColumnID(columnIndex);

  //해외여부인 경우
  if (rd_abroadYn.getValue() == "1") {
    //계획환율
    if (!$c.gus.cfIsNull($p, ed_planAdptExchRt.getValue()) && ed_planAdptExchRt.getValue() != "0") {
      if (columnId == "thisMmPlanRcrcAmt") {
        // 당월계획금액 = 당월계획외화 * 환율 
        for (let i = 0; i < ds_info.getRowCount(); i++) {
          ds_info.setCellData(i, "thisMmPlanAmt", Number(ds_info.getCellData(i, "thisMmPlanRcrcAmt")) * Number(ed_planAdptExchRt.getValue()));
        }
      } else if (columnId == "thisMmPlanAmt") {
        // 당월계획외화 = 당월실적외화 / 환율
        for (let i = 0; i < ds_info.getRowCount(); i++) {
          ds_info.setCellData(i, "thisMmPlanRcrcAmt", Number(ds_info.getCellData(i, "thisMmPlanAmt")) / Number(ed_planAdptExchRt.getValue()));
        }
      }
    }
    //실적환율
    if (!$c.gus.cfIsNull($p, ed_adptExchRt.getValue()) && ed_adptExchRt.getValue() != "0") {
      if (columnId == "thisMmRsltsRcrcAmt") {
        // 당월실적금액 = 당월실적외화 * 환율
        for (let i = 0; i < ds_info.getRowCount(); i++) {
          ds_info.setCellData(i, "thisMmRsltsAmt", Number(ds_info.getCellData(i, "thisMmRsltsRcrcAmt")) * Number(ed_adptExchRt.getValue()));
        }
      } else if (columnId == "thisMmRsltsAmt") {
        // 당월실적외화 = 당월계획외화 / 환율
        for (let i = 0; i < ds_info.getRowCount(); i++) {
          ds_info.setCellData(i, "thisMmRsltsRcrcAmt", Number(ds_info.getCellData(i, "thisMmRsltsAmt")) / Number(ed_adptExchRt.getValue()));
        }
      }
    }
  }
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'true',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'cal w80',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.fromDate',style:'',title:'마감년월','ev:onkeydown':'scwin.ica_fromDate_onkeydown'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입력구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_mgntInfoClsCd',code:'mgntInfoClsCd',codeId:'ed_mgntInfoClsCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_mgntInfoClsCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mgntInfoClsCd_onviewchangeCodeEvent',id:'udc_mgntInfoClsCd',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'mgntInfoClsCdNm',nameId:'ed_mgntInfoClsCdNm',objTypeCode:'data',objTypeName:'data',popupID:'popupMgntInfoClsCd',refDataCollection:'dma_search',selectID:'retrieveCoInsCls',style:'',validExpCode:'입력구분',validTitle:'입력구분',codeWidth:'50','ev:onviewchangeNameEvent':'scwin.udc_mgntInfoClsCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_crcCd',class:' w100',ref:'data:dma_search.crcCd',maxlength:'5',dataType:'text',title:'통화코드'}},{T:1,N:'xf:input',A:{style:'',id:'ed_crcCdNm',class:' w200',ref:'data:dma_search.crcCdNm',maxlength:'20',title:'통화코드'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해외여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_abroadYn',ref:'data:dma_search.abroadYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'해외여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'no'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계획환율',class:''}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',allowChar:'0-9.',applyFormat:'all',class:' w150',dataType:'float',displayFormat:'#,###.####',id:'ed_planAdptExchRt',maxlength:'13.4',ref:'data:dma_search.planAdptExchRt',style:'',title:'계획환율',trim:'true'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적환율',style:''}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',allowChar:'0-9.',applyFormat:'all',class:' w150',dataType:'float',displayFormat:'#,###.####',id:'ed_adptExchRt',maxlength:'13.4',ref:'data:dma_search.adptExchRt',style:'',title:'실적환율',trim:'true'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"자회사자료업로드.xlsx", "sheetName":"자회사자료업로드", "type":"1"}',gridID:'gr_info',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_info',id:'gr_info',style:'',visibleRowNum:'15',readOnly:'true',focusMode:'cell',rowStatusVisible:'true',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_info_onafteredit',keepDefaultColumnWidth:'true',gridName:'자회사자료업로드'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'마감년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'시스템코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'계정명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'계획확정여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'연간계획금액',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'당월전년실적금액',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'당월계획금액',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'당월계획외화',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'당월실적금액',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'당월실적외화',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column40',value:'누계전년실적금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'누계계획금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column34',value:'누계실적금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'실적환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'계획환율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'calendar',style:'',value:'',width:'100',calendarValueType:'yearMonth',displayFormat:' yyyy/MM'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sysCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmPlanRsltYn',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'yearlyPlanAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmFyearRsltsAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmPlanAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,##0[floor]',validateOnInput:'true',allowChar:'0-9,-',maxLength:'16',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmPlanRcrcAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,##0.##[floor]',validateOnInput:'true',allowChar:'0-9,-.',maxLength:'16.2',applyFormat:'display',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRsltsAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,##0[floor]',validateOnInput:'true',allowChar:'0-9,-',maxLength:'16',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'thisMmRsltsRcrcAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,##0.##[floor]',validateOnInput:'true',allowChar:'0-9,-.',maxLength:'16.2',applyFormat:'display',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'cumFyearRsltsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'cumPlanAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'cumRsltsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptExchRt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0[floor]',hidden:'true',hiddenCol:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planAdptExchRt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0[floor]',hidden:'true',hiddenCol:'true',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'closeYm_s1',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sysCd_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'mgntAcctNm_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'confirmPlanRsltYn_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'yearlyPlanAmt_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'thisMmFyearRsltsAmt_s1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',expression:'sum("thisMmFyearRsltsAmt")',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'thisMmPlanAmt_s1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',expression:'sum("thisMmPlanAmt")',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'thisMmPlanRcrcAmt_s1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##[floor]',expression:'sum("thisMmPlanRcrcAmt")',excelCellType:'number',excelFormat:'#,##0.##'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'thisMmRsltsAmt_s1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]',expression:'sum("thisMmRsltsAmt")',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'thisMmRsltsRcrcAmt_s1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00[floor]',expression:'sum("thisMmRsltsRcrcAmt")',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',displayFormatter:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_comChkRes',A:{style:'width:%; height:px; ;visibility:hidden;',id:'udc_cfJobCloseYN'}},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_confirm',id:'btn_confirm',objType:'bSave',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계획확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_cancel',id:'btn_cancel',objType:'bSave',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계획확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})