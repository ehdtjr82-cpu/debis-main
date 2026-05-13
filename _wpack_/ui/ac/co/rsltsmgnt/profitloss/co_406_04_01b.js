/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_04_01b.xml 40040 686dbeeb903e4a1711d86e99b7902b8b537171c6cf95828d838cdf9a7191cff3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mgntPrfloss',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldAcctDeptCd',name:'귀속부서코드(수정용)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldMgntAcctCd',name:'관리계정코드(수정용)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'손익조정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldCloseYm',name:'마감년월(수정용)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.profitloss.RetrieveProfitAndLossControlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_mgntPrfloss","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_mgntPrfloss", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.profitloss.SaveProfitAndLossControlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_mgntPrfloss","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 손익조정
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_04_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-24
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
 *    4. 엑셀 업로드 기능(gridUpYn="Y", 그리드_onfilereadend)
 * 테스트데이터 
 *    1. 마감년월[202502]
 * 수정이력 :
 *    - 2025-12-24      배기원    최초작성
 */
//전역변수
scwin.check_select; // 년월 , 버젼 변경여부 false일 경우는 재조회 및 엑셀파일 재 Import하여야 함.
scwin.fromDate = ""; // 작업날짜

scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "closeYm:STRING(6)"			// 마감년월
  //                             + ",acctDeptCd:STRING(5)"	// 부서코드
  //                             + ",mgntAcctCd:STRING(7)"    // 계정코드
  //                             ;
  // ds_searchMgntPrfloss.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_searchMgntPrfloss.AddRow();

  // var EXCELUPLOAD_HEADER = "acctDeptCd:STRING(5)"  		//귀속부서코드
  //                         + ",acctDeptNm:STRING"			//귀속부서명
  //                         + ",mgntAcctCd:STRING(7)"		//관리계정코드
  //                         + ",mgntAcctNm:STRING"			//관리계정명
  //                         + ",mgntCtrlAmt:DECIMAL(30)"		//손익조정금액
  //                         + ",closeYm:STRING(6)"			//마감년월
  //                         + ",rmk:STRING(300)"				//비고
  //                         + ",sysCd:STRING(2)"				//시스템	                       
  //                         ;

  // ds_excel.SetDataHeader(EXCELUPLOAD_HEADER);
  // ds_temp.SetDataHeader(EXCELUPLOAD_HEADER);
  // ds_mgntPrfloss.SetDataHeader(EXCELUPLOAD_HEADER);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  scwin.check_select = false;
  gr_mgntPrfloss.setNoResultMessageVisible(false);
  ds_mgntPrfloss.removeAll();
  totalRows.setValue("0");

  //UDC 그리드 팝업 호출 시 row값
  scwin.f_commCdPopupRow = 0;
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_SetSrchDefault();
  ica_closeYm.hidVal = ica_closeYm.getValue();
  scwin.check_select = true;
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_closeYm]);
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  let today = $c.date.getServerDateTime($p);
  let closeYm = today.substring(0, 6);
  ica_closeYm.setValue(closeYm);
  ica_closeYm.focus();
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_closeYm]);
  if (!ret) {
    return false;
  }
  if (ica_closeYm.getValue().length != 6) {
    await $c.win.alert($p, "마감년월은(는) 6자리수만큼 입력하십시오.");
    ica_closeYm.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_closeYm.getValue() + "01");
  if (!ret) {
    await $c.win.alert($p, "올바른 마감년월을(를) 입력하십시오.");
    ica_closeYm.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_mgntPrfloss.setNoResultMessageVisible(true);
  let rowCnt = ds_mgntPrfloss.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    ds_mgntPrfloss.reform();
    gr_mgntPrfloss.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  //저장가능상태로 Flag변경함.
  ica_closeYm.hidVal = ica_closeYm.getValue();
  scwin.check_select = true;
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_AddRow = function () {
  let row = ds_mgntPrfloss.insertRow();
  ds_mgntPrfloss.setCellData(row, "sysCd", "CO");
  ds_mgntPrfloss.setCellData(row, "closeYm", ica_closeYm.getValue().trim());
  ds_mgntPrfloss.setCellData(row, "mgntCtrlAmt", 0);
  gr_mgntPrfloss.setFocusedCell(row, "acctDeptCd", true);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

/**
 * 행삭제
 * TOBE UDC 사용
 */
scwin.f_DeleteRow = function () {
  let row = gr_mgntPrfloss.getFocusedRowIndex();
  if (ds_mgntPrfloss.getRowStatus(row) == "C") {
    ds_mgntPrfloss.removeRow(row);
  } else {
    ds_mgntPrfloss.deleteRow(row);
    gr_mgntPrfloss.setFocusedCell(row, 0);
  }
};

/**
 * 행전체삭제
 */
scwin.f_AllDeleteRow = function () {
  for (let i = ds_mgntPrfloss.getRowCount(); i >= 0; i--) {
    if (ds_mgntPrfloss.getRowStatus(i) == "C") {
      ds_mgntPrfloss.removeRow(i);
    } else {
      ds_mgntPrfloss.deleteRow(i);
    }
  }
};

/**
 * 행취소
 * TOBE UDC 사용
 */
scwin.f_CancelRow = function () {
  let row = ds_mgntPrfloss.getRowPosition();
  if (ds_mgntPrfloss.getRowStatus(row) == "C") {
    ds_mgntPrfloss.removeRow(row);
  } else {
    ds_mgntPrfloss.undoRow(row);
  }
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  if (scwin.check_select == false) {
    await $c.gus.cfAlertMsg($p, "조회 조건인 마감년월이 변경되어서 저장 하실 수 없습니다.<BR>재 조회 후 저장 하시기 바랍니다.");
    return;
  }

  //필수입력사항 확인
  let ret = await $c.gus.cfValidate($p, [gr_mgntPrfloss]);
  if (!ret) {
    return false;
  }

  //변경한 데이터가 있는지 체크한다.
  // if (ds_mgntPrfloss.IsUpdated == false) {
  if (ds_mgntPrfloss.getModifiedIndex().length < 1) {
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
    ds_mgntPrfloss.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
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
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
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
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->부서  , 2:입력->부서, 3:입력->관리계정
 * code변수는 각 항목별 검색요청 값이다.
 */
// scwin.f_openPopUp = function(orgObjCd, orgObjNm, select_code, flag) {
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag, close) {
  //asis 소스
  // var rtnList = new Array();
  // var popUpText = 'retrieveAcctDeptCdInfo';

  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // if ( flag != "SKIP") {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.Text;
  //         nm = orgObjNm.Text;
  //     }
  // } else {
  //     cd = orgObjCd;
  //     nm = orgObjNm;
  // }

  // switch (select_code) {
  // // 조회조건용 수금부서 PopUp 호출
  //     case '1' :
  //         rtnList = cfCommonPopUp(popUpText,cd, "","T",null,null,null,null,",,,0,,1,","450","500",null,null); // 입력용부서
  //         f_resultPopUp(orgObjCd, orgObjNm,rtnList);
  //         break;
  //     case '2' :
  //         rtnList = cfCommonPopUp(popUpText,cd, "","T",null,null,null,null,",,,0,,1,","450","500",null,null); // 입력용부서
  //         return rtnList;
  //         break;
  //     case '3' :
  //         rtnList = cfCommonPopUp('retrieveAcctCdInfo',cd, "","T",null,null,null,null,"temp","450","500",null,null); // 입력용관리계정		
  //         f_resultPopUp(orgObjCd, orgObjNm,rtnList);
  //         break;	
  //     case '4' :
  //             // 계정조회
  //         var temp = ",,"; 
  //         rtnList = cfCommonPopUp('retrieveAcctCdInfo',cd, "","T",null,null,null,null,"temp","450","500",null,null); // 입력용관리계정		
  //         return rtnList;
  //         break;
  //     default :
  //         cfAlertMsg("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  //         break;
  // }

  let param = ",,,0,,1,";
  //조회조건 9번째, 전체검색허용여부 15번째
  switch (select_code) {
    //귀속부서
    case '1':
      udc_sacctDeptCd.setSelectId("retrieveAcctDeptCdInfo");
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, orgObjCd.getValue(), "", close, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '2':
      break;

    //계정코드
    case '3':
      param = "temp";
      udc_mgntAcctCd.cfCommonPopUp(scwin.udc_mgntAcctCd_callBackFunc, orgObjCd.getValue(), "", close, null, null, null, null, param, null, null, null, null, null, "F", null, null);
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
 * 계정코드 팝업 callBack
 */
scwin.udc_mgntAcctCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_mgntAcctCd.setValue(ret[0]); // 계정코드
    ed_mgntAcctNm.setValue(ret[1]); // 계정명
    ed_sacctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_mgntAcctCd.setValue(""); // 계정코드
    ed_mgntAcctNm.setValue(""); // 계정명
    ed_mgntAcctCd.hidVal = ""; // 히든값
  }
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  //관리계정
  let param = "";
  if (colId == "mgntAcctCd") {
    ds_mgntPrfloss.setCellData(row, "mgntAcctCd", "");
    ds_mgntPrfloss.setCellData(row, "mgntAcctNm", "");
    param = "temp";
    udc_comCode_Grid.setSelectId("retrieveAcctCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);

    //귀속부서
  } else if (colId == "acctDeptCd") {
    ds_mgntPrfloss.setCellData(row, "acctDeptCd", "");
    ds_mgntPrfloss.setCellData(row, "acctDeptNm", "");
    param = ",,,0,,1,";
    udc_comCode_Grid.setSelectId("retrieveAcctDeptCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_acctDeptCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 계정코드(그리드팝업)
 */
scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc = function (ret) {
  // let rowIdx = gr_mgntPrfloss.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_mgntPrfloss.setCellData(rowIdx, "mgntAcctCd", ret[0]); //계정코드
    ds_mgntPrfloss.setCellData(rowIdx, "mgntAcctNm", ret[1]); //계정명
  } else {
    ds_mgntPrfloss.setCellData(rowIdx, "mgntAcctCd", ""); //계정코드
    ds_mgntPrfloss.setCellData(rowIdx, "mgntAcctNm", ""); //계정명
  }
};

/**
 * 부서코드(그리드팝업)
 */
scwin.udc_comCode_Grid_acctDeptCd_callBackFunc = function (ret) {
  // let rowIdx = gr_mgntPrfloss.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_mgntPrfloss.setCellData(rowIdx, "acctDeptCd", ret[0]); //부서코드
    ds_mgntPrfloss.setCellData(rowIdx, "acctDeptNm", ret[1]); //부서명
  } else {
    ds_mgntPrfloss.setCellData(rowIdx, "acctDeptCd", ""); //부서코드
    ds_mgntPrfloss.setCellData(rowIdx, "acctDeptNm", ""); //부서명
  }
};

/**
 * 마감년월 포커스 잃었을 시
 */
scwin.ica_closeYm_onblur = function (e) {
  // 년월이 변경되었을경우는 저장이 안됨.
  if (ica_closeYm.hidVal != ica_closeYm.getValue()) {
    scwin.check_select = false;
  }
};

/**
 * drmFileSubmit명 고정
 * ASIS 사용안함
 */
scwin.drmFileSubmit = function () {
  // var formObj = document.frm ; 
  // cfDrmUploadFile( formObj , fileUploadGDS, "f_Upload");
};

/**
 * 엑셀 Upload
 */
scwin.f_Upload = function () {
  // ds_excel.removeAll();
  // gr_mgntPrfloss.ReDraw = "false";
  // ds_excel.ClearData();
  // ds_temp.ClearData();
  // ds_excel.DataId = fileUploadGDS.NameValue( 0, "filePath" );
  // ds_excel.Reset();
  // resetForm('frm');
  // window.setTimeout("f_Import()",1000);//시간
};

/**
 * 엑셀 파일 업로드
 * TOBE UDC 사용으로 로직만 복사해서 사용(gr_grid_onfilereadend 이벤트)
 */
scwin.f_Import = async function () {
  /*
      if (ds_excel.CountRow == 0) {
          $c.gus.cfProgressWinClose();
          $c.gus.cfAlertMsg(MSG_CM_ERR_003);
          return;
      }
  
      // 로드된 엑셀 데이터 기본검증 /////////////////////////////////////////////////////////////////////////////////
      // 로드된 엑셀 데이터의 열값이 8개가 아니면 프로그램 종료 
      // 첫번째 행에 헤더값이 아닌 다른 값이 있으면, 경고 메세지 출력후 종료 
      if (ds_excel.CountColumn != 9) {
          $c.gus.cfProgressWinClose();
          $c.gus.cfAlertMsg("업로드 cvs 파일의 형식이 잘못되었습니다." +
              "<BR>엑셀 업로드 기본양식은 엑셀다운로드후," +
              "<BR>첫번째 타이틀 행, 두번째 공백행, 마지막 합계행을 제거하고" +
              "<BR>사용하시면 됩니다. 파일형식을 확인후 다시 업로드하시길 바랍니다." +
              "<BR>컬럼값이 상이합니다. [형식=9개] 입력한값 => " + ds_excel.CountColumn
          );
          return;
      }
  
      // 파일의 마지막 행에 합계행이 있을경우 삭제 경고 메세지 출력후 종료 
      if (ds_excel.NameValue(ds_excel.CountRow, ds_excel.ColumnID(1)) == "합계") {
          $c.gus.cfProgressWinClose();
          $c.gus.cfAlertMsg("업로드 CVS 파일의 형식이 잘못되었습니다." +
              "<BR>사용하신 CVS파일의 마지막 합계행을 제거하고," +
              "<BR>다시 사용하시길 바랍니다.");
          return;
      }
  
      var i = 0;
      var temp = new String();
  
      for (i = 1; i <= ds_excel.CountRow; i++) {
          // 손익조정금액에 ',', ' ' 값이 있을경우 제거
          temp = ds_excel.NameValue(i, ds_excel.ColumnID(5));
          temp = temp.replace(/,/gi, "");
          temp = temp.replace(/ /gi, "");
          ds_excel.NameValue(i, ds_excel.ColumnID(5)) = temp;
          // 각값에 null이나 공백이 있을경우 경고메세지 출력후 종료 
          for (var j = 1; j <= ds_excel.CountColumn; j++) {
              if (j != 8) { // 비고는 null이어도 pass
                  if (ds_excel.NameValue(i, ds_excel.ColumnID(j)) == "" || ds_excel.NameValue(i, ds_excel.ColumnID(j)) == null) {
                      $c.gus.cfProgressWinClose();
                      $c.gus.cfAlertMsg("업로드 cvs 파일의 데이터가 잘못되었습니다." + "<BR>[" + i + "] 번째 행의 [" + ds_excel.ColumnID(j) + "] 값이 없습니다.<BR>사용하신 CVS파일의 데이터를 확인 후,<BR>다시 업로드하시길 바랍니다.");
                      return;
                  }
              }//if
          }//for
      }
  
      if (f_AddRowUploaded()) {
          $c.gus.cfProgressWinClose();
          $c.gus.cfAlertMsg("업로드작업이 완료되었습니다.");
      }
      gr_mgntPrfloss.ReDraw = "true";
  */

  let acctDeptCd = "";
  let mgntCtrlAmt = "";
  for (let i = 0; i < ds_mgntPrfloss.getRowCount(); i++) {
    // 귀속부서 코드가 정상적으로 입력되어 있는지 확인함.
    acctDeptCd = $c.gus.cfGetLeftPad($p, ds_mgntPrfloss.getCellData(i, "acctDeptCd"), 5);
    mgntCtrlAmt = ds_mgntPrfloss.getCellData(i, "mgntCtrlAmt");
    if ($c.gus.cfIsNull($p, ds_mgntPrfloss.getCellData(i, "acctDeptCd"))) {
      await $c.win.alert($p, i + 1 + "번째 행의 귀속부서 코드값이 없습니다. 확인하시기 바랍니다.");
      return;
    }
    // 귀속부서코드가 숫자가 아닐경우 오류표시
    for (var j = 0; j <= 4; j++) {
      if (!$c.gus.cfIsIn($p, acctDeptCd.substring(j, j + 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
        await $c.win.alert($p, i + 1 + "번째 행의 귀속부서 코드가 잘못 입력 되었습니다.");
        return;
      }
    }
    ds_mgntPrfloss.setCellData(i, "acctDeptCd", acctDeptCd);

    //손익조정금액 [",", " "] 제거
    let val = mgntCtrlAmt.replace(/,/gi, "");
    val = val.replace(/ /gi, "");
    ds_mgntPrfloss.setCellData(i, "mgntCtrlAmt", val);
  }
  totalRows.setValue(ds_mgntPrfloss.getTotalRow());
};

/**
 * 그리드 데이터 엑셀로 다운
 */
scwin.f_Excel = async function () {
  if (ds_mgntPrfloss.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "손익조정";
  let options = {
    fileName: sheetTitle + "_" + ica_closeYm.getValue() + ".xlsx",
    sheetName: sheetTitle + "_" + ica_closeYm.getValue(),
    type: "1",
    headerColor: "#d9d9d9",
    //"#E8E8E8", //연한회색 #33CCCC
    hiddenVisible: "true",
    //히든값(true : 포함, false : 미포함)
    startRowIndex: 2,
    //시작되는 행의 번호(헤더 포함)
    useFooter: "true" //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
  };
  //그리드에 대한 내용을 추가 옵션
  let infoArr = [
  //제목
  {
    rowIndex: 0 //제목을 표시할 행 index
    ,
    colIndex: 0 //제목을 표시할 열 index
    ,
    rowSpan: 1 //병합할 행의 수
    ,
    colSpan: 8 //병합할 열의 수
    ,
    text: sheetTitle //표시할 내용(제목)
    ,
    textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
    ,
    fontSize: "18px" //폰트 size
    ,
    fontName: "돋움체" //폰트이름 
    //, drawBorder: false       //cell의 border 지정(true, false)
    // ,useFooter:"true"        //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
  }];
  $c.data.downloadGridViewExcel($p, gr_mgntPrfloss, options, infoArr);
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

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 부서코드(조회) 팝업 호출
 */
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  if (ed_sacctDeptCd.hidVal != ed_sacctDeptCd.getValue()) {
    ed_sacctDeptNm.setValue("");
  }
  // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,'1','CD');
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
    // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,'1','CD')
    scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD', "T");
  }
};
/**
 * 계정코드(조회) 팝업 호출
 */
scwin.udc_mgntAcctCd_onclickEvent = function (e) {
  if (ed_mgntAcctCd.hidVal != ed_mgntAcctCd.getValue()) {
    ed_mgntAcctNm.setValue("");
  }
  // scwin.f_CheckPopUp(ed_mgntAcctCd,ed_mgntAcctNm,'3','CD');
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_mgntAcctCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp(ed_mgntAcctCd, ed_mgntAcctNm, '3', 'CD', close);
};
scwin.udc_mgntAcctCd_onviewchangeCodeEvent = function (info) {
  ed_mgntAcctNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_mgntAcctCd.getValue())) {
    // scwin.f_CheckPopUp(ed_mgntAcctCd,ed_mgntAcctNm,'3','CD')
    scwin.f_openPopUp(ed_mgntAcctCd, ed_mgntAcctNm, '3', 'CD', "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 이미지셀 클릭 이벤트
*/
scwin.gr_mgntPrfloss_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_mgntPrfloss.getColumnID(columnIndex);
  let data = ds_mgntPrfloss.getCellData(rowIndex, columnId);
  if (columnId == "mgntAcctCd" || columnId == "acctDeptCd") {
    scwin.f_GridPop(columnId, rowIndex, data, "F");
  }
  return true;
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_mgntPrfloss_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = gr_mgntPrfloss.getRowStatus(rowIndex);
  let ret = false;
  if (status == "D") {
    ret = true;
  }
  // gr_mgntPrfloss.setCellReadOnly(rowIndex, "mgntAcctCd" , ret);
  gr_mgntPrfloss.setReadOnly("row", rowIndex, ret);
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_mgntPrfloss_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_mgntPrfloss.getColumnID(columnIndex);
  if (columnId == "mgntAcctCd" || columnId == "acctDeptCd") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_GridPop(columnId, rowIndex, value, "T");
    } else if ($c.gus.cfIsNull($p, value)) {
      if (columnId == "mgntAcctCd") {
        ds_mgntPrfloss.setCellData(rowIndex, "mgntAcctNm", "");
      } else {
        ds_mgntPrfloss.setCellData(rowIndex, "acctDeptNm", "");
      }
    }
  }
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_mgntPrfloss_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_mgntPrfloss.getColumnID(columnIndex);
  if (columnId == "mgntAcctCd" || columnId == "acctDeptCd") {
    scwin.oldValue = value;
  }
};

/**
 * 그리드에서 엑셀 업로드 끝난 뒤 발생
 */
scwin.gr_mgntPrfloss_onfilereadend = function (value) {
  let removeRow = ds_mgntPrfloss.getMatchedIndex("acctDeptCd", "합계");
  if (removeRow.length > 0) {
    ds_mgntPrfloss.removeRow(removeRow[0]);
  }
  scwin.f_Import();
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_closeYm',mandatory:'true',objType:'data',ref:'data:dma_search.closeYm',style:'',title:'마감년월','ev:onblur':'scwin.ica_closeYm_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_sacctDeptCd',code:'acctDeptCd',codeId:'ed_sacctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_sacctDeptCd_onviewchangeCodeEvent',id:'udc_sacctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_sacctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_sacctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'부서',validTitle:'부서',mandatoryName:'true',validExpName:'부서',class:'',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_mgntAcctCd',code:'mgntAcctCd',codeId:'ed_mgntAcctCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_mgntAcctCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mgntAcctCd_onviewchangeCodeEvent',id:'udc_mgntAcctCd',mandatoryCode:'',maxlengthCode:'7',maxlengthName:'30',name:'mgntAcctNm',nameId:'ed_mgntAcctNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_mgntAcctCd',refDataCollection:'dma_search',selectID:'retrieveAcctCdInfo',style:'',validExpCode:'계정',validTitle:'계정',validExpName:'계정',codeWidth:'60'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:' 손익조정현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridID:'gr_mgntPrfloss',grp:'grd_section1',id:'udc_excel',gridUpYn:'Y',grdUpOpts:'{"headerExist":"1", "footerExist":"0", "startRowIndex":2, "hidden":"1", "status":"C"}',style:'',templateYn:'N',gridDownFn:'scwin.f_Excel',btnUser:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_mgntPrfloss',focusMode:'cell',id:'gr_mgntPrfloss',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_mgntPrfloss_oncellclick','ev:ontextimageclick':'scwin.gr_mgntPrfloss_ontextimageclick','ev:onafteredit':'scwin.gr_mgntPrfloss_onafteredit',enterKeyMove:'editRight','ev:onfilereadend':'scwin.gr_mgntPrfloss_onfilereadend','ev:onbeforeedit':'scwin.gr_mgntPrfloss_onbeforeedit',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'귀속부서코드',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column17',value:'귀속부서명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'계정코드',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column13',value:'계정명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column11',value:'손익조정금액',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column9',value:'마감년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column3',value:'비고',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'시스템',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'textImage',style:'',value:'',width:'100',readOnly:'false',editFormat:'#####',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'textImage',style:'',value:'',width:'100',readOnly:'false',editFormat:'#######',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntCtrlAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9,-',validateOnInput:'true',readOnly:'false',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',style:'',value:'',width:'80',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'160',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sysCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd_s1',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'acctDeptNm_s1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntAcctCd_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'mgntAcctNm_s1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'mgntCtrlAmt_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM("mgntCtrlAmt")'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'closeYm_s1',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'rmk_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sysCd_s1',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',displayFormatter:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'N',gridID:'gr_mgntPrfloss',rowAddFunction:'scwin.f_AddRow',style:'',btnRowDelYn:'Y',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',rowDelFunction:'scwin.f_DeleteRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_allDelete',style:'',type:'button','ev:onclick':'scwin.f_AllDeleteRow',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancle',style:'',type:'button','ev:onclick':'scwin.f_CancelRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red ',id:'',label:'엑셀 업로드시에는 기존 데이터를 전체 삭제후 실행하세요 ',style:''}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})