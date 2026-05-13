/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_05_01b.xml 41643 5197793784121d10482a074674fb69516e723ece25fc620b4b0987fae194036c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distClsCd',name:'결산구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'공통1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'공통2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'공통3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'공통4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dist',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptNm',name:'배부하는부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distTrgtAmt',name:'배부대상금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptNm',name:'배부받는부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rt',name:'비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAmt',name:'배부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptCd',name:'배부받는귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptCd',name:'배부하는부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modRt',name:'수정비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDistAmt',name:'수정배부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distClsCd',name:'배부구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distStdCd',name:'배부기준코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.distmgnt.RetrieveDistributionResultUpdateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_dist","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_dist","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.distmgnt.CreateDistributionResultUpdateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_dist","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부결과수정
 * 메뉴경로 : 회계/관리회계/실적관리/배부관리
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_05_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-19
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
 *    4. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 테스트데이터 :
 *    1. 회사코드(000), 결산구분(계획), 차수(전체), 배부년월(2020/01), 버전(002), 부서(00208:국내물류사업부장)
 * 수정이력 :
 *    - 2025-12-19      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = "";

//전역변수
scwin.fromDate = ""; //작업날짜
//배부년월 초기값
scwin.today = "";
scwin.closeYm = "";
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;

//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};
scwin.initJson = {}; //초기세팅값(TOBE)
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한

  const codeOptions = [{
    grpCd: "CO024",
    compID: "lc_distDegCd"
  } //배부차수
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeCO024.sort("cd", 0);
  scwin.initJson = dma_search.getJSON();
  scwin.first = 0;
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "distYm:STRING(6)" // 배부년월
  //     + ",distClsCd:STRING(1)" // 결산구분
  //     + ",distDegCd:STRING(1)" // 배부차수구분코드
  //     + ",ver:STRING(3)" // 버전
  //     + ",acctDeptCd:STRING(5)" // 부서
  //     + ",coCd:STRING(3)"; // 회사코드

  // ds_searchDistTarget.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_searchDistTarget.insertRow();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_dist.setNoResultMessageVisible(false);
  ds_dist.reform();
  ds_dist.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_Reset();
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm, rd_distClsCd]);
  //dma_search.setJSON(scwin.initJson);
  scwin.f_SetDefault();
};
/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  scwin.today = $c.date.getServerDateTime($p);
  scwin.closeYm = scwin.today.substring(0, 6);
  ica_fromDate.setValue(scwin.closeYm);
  rd_distClsCd.setValue("2");
  lc_distDegCd.setSelectedIndex(0);
  ed_sacctDeptCd.setValue("");
  ed_sacctDeptNm.setValue("");
  $c.gus.cfEnableObjects($p, [ed_sacctDeptCd, ed_sacctDeptNm]);
  scwin.f_LoadVer();
  ica_fromDate.focus();
};

/**
 * 초기화 시
 */
scwin.f_SetDefault = function () {
  ica_fromDate.setValue(scwin.closeYm);
};

/**
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 */
scwin.f_setWrkNoFromDate = function () {
  scwin.fromDate = ica_fromDate.getValue().trim();
};

/**
 * 초기화 관련 변수 정의 함수
 */
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [udc_sacctDeptCd]);
};

/**
 * 저장 완료후 화면 Reset시 사용하는 함수 
 */
scwin.f_Reset = function () {
  scwin.f_Initial();
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  // 필수조건 확인
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, rd_distClsCd, lc_version, ed_sacctDeptCd, ed_coCd]);
  if (!ret) {
    return false;
  }
  if (ica_fromDate.getValue().length != 6) {
    await $c.win.alert($p, "배부년월은(는) 6자리수만큼 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_fromDate.getValue() + "01");
  if (!ret) {
    await $c.win.alert($p, "올바른 배부년월을(를) 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_dist.setNoResultMessageVisible(true);
  let rowCnt = ds_dist.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_dist.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행삭제
 * TOBE UDC 사용
 */
scwin.f_DeleteRow = function () {
  let row = ds_dist.getRowPosition();
  let deptCd = ds_dist.getCellData(row, "distRecvAcctDeptCd");
  //선택한 같은 배부받는귀속부서코드[distRecvAcctDeptCd] 행삭제
  let deptCdArry = ds_dist.getMatchedIndex("distRecvAcctDeptCd", deptCd);
  for (let i = 0; i < deptCdArry.length; i++) {
    ds_dist.deleteRow(deptCdArry[i]);
  }
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  if (ds_dist.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
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
    ds_dist.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 엑셀 파일 다운로드
 */
scwin.f_Export = async function () {
  // var objGridName = eval("gr_dist");
  // if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
  //     var exportFileName = "배부결과배부하는부서_" + ed_sacctDeptNm.getValue().trim() + "_" + ed_FromDate.getValue().trim() + "_ver_" + acb_version.getValue();
  //     $c.data.downloadGridViewExcel(objGridName, "배부결과배부하는부서", exportFileName, 8 + 16);
  // }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let sheetTitle = "배부결과배부하는부서";
    let options = {
      fileName: sheetTitle + "_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_fromDate.getValue() + "_ver_" + lc_version.getValue() + ".xlsx",
      sheetName: sheetTitle,
      type: "1",
      headerColor: "#d9d9d9",
      //"#E8E8E8", //연한회색 #33CCCC
      hiddenVisible: false,
      //히든값(true : 포함, false : 미포함)
      startRowIndex: 0,
      //시작되는 행의 번호(헤더 포함)
      //removeColumns:"",     //다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
      useFooter: "true" //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    };
    //그리드에 대한 내용을 추가 옵션
    // let infoArr = [
    //     //제목
    //     {
    //         rowIndex: 0               //제목을 표시할 행 index
    //         , colIndex: 0               //제목을 표시할 열 index
    //         , rowSpan: 1                //병합할 행의 수
    //         , colSpan: 9                //병합할 열의 수
    //         , text: sheetTitle          //표시할 내용(제목)
    //         , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
    //         , fontSize: "18px"          //폰트 size
    //         , fontName: "돋움체"        //폰트이름 
    //         //, drawBorder: false         //cell의 border 지정(true, false)
    //     }
    // ];
    $c.data.downloadGridViewExcel($p, gr_dist, options);
  }
};

/**
 * Ver정보를 가져온다.
 */
scwin.f_LoadVer = async function () {
  //작업구분코드 및 날짜 세팅함수 호출
  scwin.f_setWrkNoFromDate();
  dma_search.set("sysCd", "CommonEBC");
  dma_search.set("queryId", "retrieveVersionInfo");
  dma_search.set("param1", scwin.fromDate);
  ds_version.removeAll();
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup);
  ds_version.setJSON(ret.responseJSON.GAUCE);
  ds_version.reform();
  await scwin.f_SetFinalVer();
};

/**
 * 최종 Ver을 설정
 */
scwin.f_SetFinalVer = function () {
  if (ds_version.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_version.getRowCount(); i++) {
    if (ds_version.getCellData(i, "col3") == scwin.DGlobalValue.TRUE) {
      index = i;
      break;
    }
  }
  lc_version.setSelectedIndex(index);
};

/**
 * 마감년월 포커스 잃었을 시
 */
scwin.ica_fromDate_onblur = function (e) {
  scwin.f_LoadVer();
};

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

/**
 * 회사입력팝업
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  //asis 소스
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  //     , ed_coCd.text, ed_coNm.value
  //     , pWinCloseTF, null, null, null, null
  //     , null, null, null, null, null);
  // // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;
  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value = rtnList[5]; // 회사명
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분
  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     scwin.txtCoClsCd = "";
  // }

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
    scwin.txtCoClsCd = ret[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }

  //TODO : 처음 로딩 시 한번만 처리(웹스퀘어 UDC 싱크....)
  if (scwin.first == 0) {
    // 자회사 회계 시스템
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.first++;
};

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->거래처 , 2:조회->귀속부서
 * code변수는 각 항목별 검색요청 값이다.
 */
// scwin.f_openPopUp = function(orgObjCd, orgObjNm, select_code, flag) {
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag, close) {
  //asis 소스
  // var rtnList = new Array();
  // var param = ed_FromDate.text.trim()+",,,,,,,,,"+ed_coCd.text;

  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // if (flag == "ALL") {
  // 	cd = "";
  // 	nm = "";
  // } else {
  // 	cd = orgObjCd.Text;
  // 	nm = orgObjNm.Text;
  // }

  // //<--<수정_080529_박범민> 자회사포함 부서조회 
  // if ( ed_FromDate.Text.substring(0,4).trim() == '2006' ){
  // 	var popUpText = 'retrieveAcctDeptCdInfoBef'
  // }else{
  // 	var popUpText = 'retrieveAcctDeptCdInfo5'
  // };

  // switch (select_code) {
  // 	// 조회조건용 수금부서 PopUp 호출
  // 	 case '1' :
  //         rtnList = cfCommonPopUp(popUpText,cd, nm,"T",null,null,null,null,param,",,,,,,1","450","500",null,null); // 귀속부서
  // 		f_resultPopUp(orgObjCd, orgObjNm,rtnList);
  // 	 	break;
  // 	 default :
  // 	 	cfAlertMsg("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  // 	 	break;
  // }

  let sqlId = "";
  if (ica_fromDate.getValue().substring(0, 4).trim() == '2006') {
    sqlId = 'retrieveAcctDeptCdInfoBef';
  } else {
    sqlId = 'retrieveAcctDeptCdInfo5';
  }
  ;
  udc_sacctDeptCd.setSelectId(sqlId);

  //조회조건 9번째, 전체검색허용여부 15번째
  let param = ica_fromDate.getValue() + ",,,,,,,,," + ed_coCd.getValue();
  switch (select_code) {
    case '1':
      //귀속부서
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, orgObjCd.getValue(), "", close, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    default:
      break;
  }
};

/**
 * 귀속부서코드 팝업 callBack
 */
scwin.udc_sacctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_sacctDeptCd.setValue(ret[0]); // 부서코드
    ed_sacctDeptNm.setValue(ret[1]); // 부서명
    ed_sacctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_sacctDeptCd.setValue(""); // 부서코드
    ed_sacctDeptNm.setValue(""); // 부서명
    ed_sacctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (!$c.gus.cfIsNull($p, orgObjCd.getValue()) || flag == "NM") {
    if (!$c.gus.cfIsNull($p, orgObjNm.getValue()) || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO", "T");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.hidVal = "";
  }
};

/**
 * 팝업결과
 * TOBE 사용안함(UDC 콜백함수 사용)
 */
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;
  //     orgObjCd.Text = rtnList[0]; // 코드값
  //     orgObjNm.Text = rtnList[1]; // 코드명
  //     orgObjCd.hidVal = rtnList[0]; // HIDDEN 코드값
  //     orgObjNm.hidVal = rtnList[1]; // HIDDEN 코드명
  // } else {
  //     orgObjCd.Text = "";
  //     orgObjNm.Text = "";
  //     orgObjCd.hidVal = "";
  //     orgObjNm.hidVal = "";
  // }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
* 회사코드(조회) 팝업 호출
*/
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/**
* 부서코드(조회) 팝업 호출
*/
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  if (ed_sacctDeptCd.hidVal != ed_sacctDeptCd.getValue()) {
    ed_sacctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD', close);
};
scwin.udc_sacctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_sacctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD', "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 셀의 편집모드가 종료
 */
scwin.gr_dist_onafteredit = function (rowIndex, columnIndex, value) {
  let colId = gr_dist.getColumnID(columnIndex);
  if (colId == "rt") {
    let deptCd = ds_dist.getCellData(rowIndex, "distRecvAcctDeptCd");
    let rt = ds_dist.getCellData(rowIndex, colId);
    let distTargtAmt = ds_dist.getCellData(rowIndex, "distTrgtAmt");
    //배부금액[distAmt] = 비율[rt] * 배부대상금액[distTrgtAmt] / 100
    let distAmt = Number(rt) * Number(distTargtAmt) / 100;
    ds_dist.setCellData(rowIndex, "distAmt", $c.num.round($p, distAmt));

    //같은 배부받는귀속부서코드[distRecvAcctDeptCd] 수정
    let deptCdArry = ds_dist.getMatchedIndex("distRecvAcctDeptCd", deptCd);
    for (let i = 0; i < deptCdArry.length; i++) {
      ds_dist.setCellData(deptCdArry[i], "rt", value);
      distTargtAmt = ds_dist.getCellData(deptCdArry[i], "distTrgtAmt");
      distAmt = Number(rt) * Number(distTargtAmt) / 100;
      ds_dist.setCellData(deptCdArry[i], "distAmt", $c.num.round($p, distAmt));
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 25%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_distClsCd',mandatory:'true',ref:'data:dma_search.distClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'결산구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차수 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:' w120',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_distDegCd',mandatory:'true',ref:'data:dma_search.distDegCd',style:'',submenuSize:'auto',title:'차수'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.distYm',style:'',title:'배부년월','ev:onblur':'scwin.ica_fromDate_onblur',nextTabID:'lc_version'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_version',mandatory:'true',ref:'data:dma_search.ver',style:'',submenuSize:'auto',tabIndex:'-1',title:'버전',validExp:'버전:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_sacctDeptCd',code:'acctDeptCd',codeId:'ed_sacctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_sacctDeptCd_onviewchangeCodeEvent',id:'udc_sacctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_sacctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_sacctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo5',style:'',validExpCode:'배부부서',validTitle:'배부부서',mandatoryName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배부결과',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Export',gridID:'gr_dist',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_dist',focusMode:'cell',id:'gr_dist',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onafteredit':'scwin.gr_dist_onafteredit',rowStatusVisible:'true',rowStatusWidth:'20',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'차수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'배부하는부서코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'배부하는부서',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'배부받는귀속부서코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'배부받는부서',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'계정코드',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'계정명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'배부대상금액',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'비율(%) ',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'배부금액',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'수정비율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'수정배부금액',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'column80',inputType:'text',style:'',value:'버전',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'배부년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'배부구분코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',inputType:'text',style:'',value:'배부기준코드',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'distDegCd',inputType:'text',name:'차수',style:'',textAlign:'center',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distGiveAcctDeptCd',inputType:'text',name:'배부하는부서코드',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distGiveAcctDeptNm',inputType:'text',name:'배부하는부서',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distRecvAcctDeptCd',inputType:'text',name:'배부받는귀속부서코드',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distRecvAcctDeptNm',inputType:'text',name:'배부받는부서',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',name:'계정코드',style:'',textAlign:'center',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',name:'계정명',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'distTrgtAmt',inputType:'text',name:'배부대상금액',style:'',textAlign:'right',value:'',width:'120',hidden:'true',hiddenCol:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###.00',displayMode:'label',id:'rt',inputType:'text',name:'비율',style:'',textAlign:'right',value:'',width:'100',readOnly:'false',validateOnInput:'true',maxLength:'5',excelCellType:'number',excelFormat:'#,##0.00',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'distAmt',inputType:'text',name:'배부금액',style:'',textAlign:'right',value:'',width:'100',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'modRt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.00',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'modDistAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ver',inputType:'text',style:'',value:'',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distYm',inputType:'text',name:'배부년월',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distClsCd',inputType:'text',name:'배부구분코드',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distStdCd',inputType:'text',name:'배부기준금액',style:'',value:'',width:'100'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'distDegCd_s1',inputType:'text',name:'차수',style:'',textAlign:'center',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distGiveAcctDeptCd_s1',inputType:'text',name:'배부하는부서코드',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distGiveAcctDeptNm_s1',inputType:'text',name:'배부하는부서',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distRecvAcctDeptCd_s1',inputType:'text',name:'배부받는귀속부서코드',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distRecvAcctDeptNm_s1',inputType:'text',name:'배부받는부서',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd_s1',inputType:'text',name:'계정코드',style:'',textAlign:'center',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm_s1',inputType:'text',name:'계정명',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distTrgtAmt_s1',inputType:'text',name:'배부대상금액',style:'',textAlign:'right',value:'',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{dataType:'text',displayMode:'label',id:'rt_s1',inputType:'text',name:'비율',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'SUM("distAmt")',id:'distAmt_s1',inputType:'expression',name:'배부금액',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'text',displayMode:'label',id:'modRt_s1',inputType:'text',name:'수정비율',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'SUM("modDistAmt")',id:'modDistAmt_s1',inputType:'expression',name:'수정배부금액',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'ver_s1',inputType:'text',name:'버전',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distYm_s1',inputType:'text',name:'배부년월',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distClsCd_s1',inputType:'text',name:'배부구분코드',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distStdAmt1_s1',inputType:'text',name:'배부기준금액',style:'',textAlign:'center',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'N',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',btnRowDelYn:'Y',gridID:'gr_dist',rowDelFunction:'scwin.f_DeleteRow',style:'',btnRowAddYn:'N',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})