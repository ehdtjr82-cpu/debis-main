/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_03_01b.xml 81294 1d2a5dea6b63791684f7b774a79a344f418bba7ac96f2cff6187ef17dc1a36e4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptLvl',name:'부서레벨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrDeptYn',name:'집계여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'공통1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'공통2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'공통3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'공통4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staffResults',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldAcctDeptCd',name:'old귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctDeptCd',name:'상위귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a11',name:'임원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b11',name:'M',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b12',name:'M',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b13',name:'M',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b21',name:'S',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b22',name:'S',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b23',name:'J',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b24',name:'J',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b25',name:'J',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b31',name:'E',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b35',name:'E',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b32',name:'O',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b33',name:'O',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b34',name:'O',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b41',name:'A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b42',name:'A',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b43',name:'ETC',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b44',name:'승무직',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b51',name:'기능직',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b52',name:'하역직',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b53',name:'경비원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b54',name:'노무직',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'b55',name:'별정직',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deptList',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.distmgnt.RetrieveStaffResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_staffResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_staffResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.distmgnt.SaveStaffResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_staffResults","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDept',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인원실적등록
 * 메뉴경로 : 회계/관리회계/실적관리/배부관리
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_03_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-23
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
 *    ☞ 2025-12-22 공통개발됨(udc_comChkRes)
 *    5. 엑셀 업로드 기능(gridUpYn="Y", 그리드_onfilereadend)
 *    6. 테스트 값 : 회사코드(000), 결산구분(실적), 차수(전체), 배부년월(2020/01), 버전(002), 부서(00208:국내물류사업부장)
 * 수정이력 :
 *    - 2025-12-23      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = ""; //회사구분코드
scwin.hid_acctDeptLvl = ""; //부서레벨
scwin.hid_aggrDeptYn = ""; //집계여부

//전역변수
scwin.check_select = true; //년월 , 버젼 변경여부 false일 경우는 재조회 및 엑셀파일 재 Import하여야 함.
scwin.fromDate = ""; //작업날짜
scwin.isClose = ""; //마감체크(tobe 추가)

scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;

//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

scwin.initJson = {}; //초기세팅값(TOBE)
scwin.closeYm = "";
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

  /**
   * TODO : 임시로 회사코드 초기값 가지고 있기 위해 처리
   * 로드 시 마지막으로 처리되는 로직
   */
  const codeOptions = [{
    grpCd: "EQ055",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  scwin.initJson = dma_search.getJSON();
  scwin.first = 0;
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "distYm:STRING(6)"               	// 적용년월
  // 						  +",ver:STRING(3)"						// 버젼정보
  //                           +",acctDeptCd:STRING(5)"				// 부서
  //                           +",acctDeptLvl:DECIMAL(3)"			// 귀속부서 레벨
  //                           +",aggrDeptYn:DECIMAL(1)"			// 집계부서여부
  // 						  +",coCd:STRING(3)";				// 회사코드
  // ds_searchStaffResults.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_searchStaffResults.AddRow();

  // var GAUCE_DATASET_HEADER = "acctDeptCd:STRING(5)"               	// 부서코드
  //                           +",acctDeptNm:STRING(30)";				// 부서명

  // ds_staffResults.SetDataHeader(GAUCE_DATASET_HEADER);

  //     GAUCE_DATASET_HEADER = "acctDeptCd:STRING(5)"               // 귀속부서코드
  //                          + ",acctDeptNm:STRING(50)"              // 귀속부서명
  //                          + ",a11:INT(5)"       			// 임원         
  //                          + ",b11:INT(5)"               // M3            
  //                          + ",b12:INT(5)"               // M2            
  //                          + ",b13:INT(5)"               // M1            
  //                          + ",b21:INT(5)"               // S2            
  //                          + ",b22:INT(5)"               // S1            
  //                          + ",b23:INT(5)"               // J3            
  //                          + ",b24:INT(5)"               // J2            
  //                          + ",b25:INT(5)"               // J1            
  //                          + ",b31:INT(5)"               // E2 
  //                          + ",b35:INT(5)"               // E1           
  //                          + ",b32:INT(5)"               // 03            
  //                          + ",b33:INT(5)"               // 02            
  //                          + ",b34:INT(5)"               // 01            
  //                          + ",b41:INT(5)"               // A2            
  //                          + ",b42:INT(5)"               // A1            
  //                          + ",b43:INT(5)"               // ETC           
  //                          + ",b44:INT(5)"               // 승무직        
  //                          + ",b51:INT(5)"               // 기능직        
  //                          + ",b52:INT(5)"               // 하역직        
  //                          + ",b53:INT(5)"               // 경비원        
  //                          + ",b54:INT(5)"               // 노무직        
  //                          + ",b55:INT(5)";              // 별정직        

  // ds_tempstaffResults.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_upstaffResults.SetDataHeader(GAUCE_DATASET_HEADER);

  //     GAUCE_DATASET_HEADER = "acctDeptCd:STRING(5)"               // 귀속부서코드
  //     					 + ",oldAcctDeptCd:STRING(5)"			// 이전귀속부서코드
  //     					 + ",closeYm:STRING(6)"					// 적용년월
  //     					 + ",ver:STRING(3)"						// 버젼정보
  //                          + ",acctDeptNm:STRING(50)"              // 귀속부서명
  //                          + ",upperAcctDeptCd:STRING(5)"          // 상위귀속부서코드
  //                          + ",a11:INT(5)"            // 임원
  //                          + ",b11:INT(5)"           // M3
  //                          + ",b12:INT(5)"           // M2
  //                          + ",b13:INT(5)"           // M1
  //                          + ",b21:INT(5)"           // S2
  //                          + ",b22:INT(5)"           // S1
  //                          + ",b23:INT(5)"           // J3
  //                          + ",b24:INT(5)"           // J2
  //                          + ",b25:INT(5)"           // J1
  //                          + ",b31:INT(5)"           // E2
  //                          + ",b35:INT(5)"           // E1
  //                          + ",b32:INT(5)"           // 03
  //                          + ",b33:INT(5)"           // 02
  //                          + ",b34:INT(5)"           // 01
  //                          + ",b41:INT(5)"           // A2
  //                          + ",b42:INT(5)"           // A1
  //                          + ",b43:INT(5)"           // ETC
  //                          + ",b44:INT(5)"           // 승무직
  //                          + ",b51:INT(5)"           // 기능직
  //                          + ",b52:INT(5)"           // 하역직
  //                          + ",b53:INT(5)"           // 경비원
  //                          + ",b54:INT(5)"           // 노무직
  //                          + ",b55:INT(5)";          // 별정직

  // ds_staffResults.SetDataHeader(GAUCE_DATASET_HEADER);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  scwin.check_select = false;
  gr_staffResults.setNoResultMessageVisible(false);
  ds_staffResults.reform();
  ds_staffResults.removeAll();
  totalRows.setValue("0");
  scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  $c.gus.cfDisableKey($p);
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
  ica_fromDate.hidVal = ica_fromDate.getValue();
  lc_version.hidVal = lc_version.getValue();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm]);
  //dma_search.setJSON(scwin.initJson);
  scwin.f_SetDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  scwin.closeYm = $c.date.getServerDateTime($p).substring(0, 6);
  ica_fromDate.setValue(scwin.closeYm);
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
  ed_sacctDeptCd.setValue("");
  ed_sacctDeptNm.setValue("");
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, ed_sacctDeptCd, ed_coCd, ed_coNm, lc_version]);
  if (!ret) {
    return false;
  }
  if (ica_fromDate.getValue().length != 6) {
    await $c.gus.cfAlertMsg($p, "적용년월은(는) 6자리수만큼 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_fromDate.getValue() + "01");
  if (!ret) {
    await $c.gus.cfAlertMsg($p, "올바른 적용년월을(를) 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  scwin.setInit();
  dma_search.set("acctDeptLvl", scwin.hid_acctDeptLvl); //부서레벨
  dma_search.set("aggrDeptYn", scwin.hid_aggrDeptYn); //집계여부
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_staffResults.setNoResultMessageVisible(true);
  let rowCnt = ds_staffResults.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    ds_staffResults.reform();
    gr_staffResults.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  //정상조회후 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  ica_fromDate.hidVal = ica_fromDate.getValue();
  lc_version.hidVal = lc_version.getValue();
  scwin.check_select = true;
};

/**
 * 행추가
 */
scwin.f_AddRow = function () {
  let row = ds_staffResults.insertRow();
  ds_staffResults.setCellData(row, "ver", lc_version.getValue());
  ds_staffResults.setCellData(row, "closeYm", ica_fromDate.getValue().trim());
  ds_staffResults.setCellData(row, "coCd", ed_coCd.getValue());
  gr_staffResults.setRowReadOnly(row, false);
  gr_staffResults.setCellReadOnly(row, "acctDeptNm", true);
  gr_staffResults.setFocusedCell(row, "acctDeptCd", true);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

/**
 * 행삭제
 * TOBE UDC 사용
 */
scwin.f_DeleteRow = function () {
  let row = ds_staffResults.getRowPosition();
  if (ds_staffResults.getRowStatus(row) == "C") {
    ds_staffResults.removeRow(row);
  } else {
    ds_staffResults.deleteRow(row);
    gr_staffResults.setFocusedCell(row, 0);
  }
};

/**
 * 행취소
 * TOBE UDC 사용
 */
scwin.f_CancelRow = function () {
  let row = ds_staffResults.getRowPosition();
  if (ds_staffResults.getRowStatus(row) == "C") {
    ds_staffResults.removeRow(row);
  } else {
    ds_staffResults.undoRow(row);
  }
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  let ret;
  if (!scwin.check_select) {
    await $c.win.alert($p, "조회 조건인 적용년월과 버젼이 변경되어서 저장 하실 수 없습니다.<BR>재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }
  //필수입력사항 확인
  ret = await $c.gus.cfValidate($p, [gr_staffResults]);
  if (!ret) {
    return false;
  }

  //중복체크
  let validArry = [{
    id: "acctDeptCd",
    name: "귀속부서코드",
    mandatory: true,
    key: true
  }, {
    id: "acctDeptNm",
    name: "귀속부서명",
    mandatory: true,
    key: true
  }];
  ret = await $c.gus.cfValidateGrid($p, gr_staffResults, null, null, validArry, "인원실적등록");
  if (!ret) {
    return false;
  }

  //변경한 데이터가 있는지 체크한다.
  // if (ds_staffResults.IsUpdated == false) {
  if (ds_staffResults.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  if ($c.gus.cfIsNull($p, lc_version.getValue())) {
    await $c.win.alert($p, "해당 년월의 버전정보가 없습니다.<BR>관리실적버전에서 버전을 등록하시기 바랍니다.");
    return;
  }

  // 마감여부 확인
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }
  let msg = ica_fromDate.getValue().substring(0, 4) + "년 " + ica_fromDate.getValue().substring(4, 6) + "월 ";
  msg += lc_version.getValue() + "버젼으로 저장하시겠습니까?";
  if (await $c.win.confirm($p, msg)) {
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
    ds_staffResults.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
  //저장가능상태로 Flag변경함.
  scwin.check_select = true;
};

// scwin.sbm_save_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  // if (flag == "CD") {
  //     if (orgObjCd.getValue() == orgObjCd.hidVal) {
  //         return;
  //     } else {
  //         orgObjNm.setValue("");
  //     }
  // } else {
  //     if (orgObjNm.getValue() == orgObjNm.hidVal) {
  //         return;
  //     } else {
  //         orgObjCd.setValue("");
  //     }
  // }

  // if (orgObjCd.Text.trim() != "" || flag == "NM") {
  // 	if (orgObjNm.Text.trim() != "" || flag == "CD") {
  // 		orgObjCd.Text = orgObjCd.Text.trim();
  // 		orgObjNm.Text = orgObjNm.Text.trim();
  // 		f_openPopUp(orgObjCd, orgObjNm, select_code,"NO");
  // 	}
  // } else {
  // 	orgObjNm.Text = "";
  // 	orgObjCd.Text = "";
  // 	orgObjCd.hidVal = "";
  // 	// 부서코드의 집계여부 및 레벨을 초기화한다.
  // 	if (select_code == 1) {
  // 		hid_acctDeptLvl.Value = "";
  // 		hid_aggrDeptYn.Value = "";
  // 	}
  //}
};

/**
 * 팝업결과
 * TOBE 사용안함(UDC 사용)
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

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->거래처 , 2:조회->귀속부서
 * code변수는 각 항목별 검색요청 값이다.
 */
// scwin.f_openPopUp = function(orgObjCd, orgObjNm, select_code, flag) {
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag, close) {
  //asis 소스
  // var rtnList = new Array();
  // var param = ica_fromDate.text.trim()+",,,,,,,,,"+ed_coCd.text;
  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // if ( flag != "SKIP") {
  // 	if (flag == "ALL") {
  // 		cd = "";
  // 		nm = "";
  // 	} else {
  // 		cd = orgObjCd.Text;
  // 		nm = orgObjNm.Text;
  // 	}
  // } else {
  // 	cd = orgObjCd;
  // 	nm = orgObjNm;
  // }
  // switch (select_code) {
  // 	// 조회조건용 수금부서 PopUp 호출
  // 	 case "1" :
  // 		//rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo5',cd, nm,"T",null,null,null,null,null,"450","500",null,null); // 귀속부서			
  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo5',cd, nm,"T",null,null,null,null,param,",,,,,,1","450","500",null,null); // 귀속부서
  // 		f_resultPopUp(orgObjCd, orgObjNm,rtnList);
  // 	 	break;
  // 	 case '2' :
  // 		//rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo5',cd, nm,"T",null,null,null,null,null,"450","500",null,null); // 귀속부서			
  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo5',cd, nm,"T",null,null,null,null,param,",,,,,,1","450","500",null,null); // 귀속부서
  // 		return rtnList

  // 		break;
  // 	 default :
  // 	 	cfAlertMsg("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  // 	 	break;
  // }

  //조회조건 9번째, 전체검색허용여부 15번째
  let param = ica_fromDate.getValue() + ",,,,,,,,," + ed_coCd.getValue();
  switch (select_code) {
    case "1":
      //귀속부서
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, orgObjCd.getValue(), "", close, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    // 그리드 UDC 팝업에서 처리
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
    scwin.hid_acctDeptLvl = ret[6]; // 부서레벨
    scwin.hid_aggrDeptYn = ret[8]; // 집계여부
  } else {
    ed_sacctDeptCd.setValue(""); // 부서코드
    ed_sacctDeptNm.setValue(""); // 부서명
    ed_sacctDeptCd.hidVal = ""; // 히든값
    scwin.hid_acctDeptLvl = ""; // 부서레벨
    scwin.hid_aggrDeptYn = ""; // 집계여부
  }
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  //귀속부서
  if (colId == "acctDeptCd") {
    ds_staffResults.setCellData(row, "acctDeptCd", "");
    ds_staffResults.setCellData(row, "acctDeptNm", "");
    let param = ica_fromDate.getValue().trim() + ",,,,,,,,," + ed_coCd.getValue();
    udc_comCode_Grid.setSelectId("retrieveAcctDeptCdInfo5");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_acctDeptCd_callBackFunc, data, "", "T", null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 부서코드(그리드팝업)
 */
scwin.udc_comCode_Grid_acctDeptCd_callBackFunc = function (ret) {
  // let rowIdx = gr_staffResults.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_staffResults.setCellData(rowIdx, "acctDeptCd", ret[0]); //부서코드
    ds_staffResults.setCellData(rowIdx, "acctDeptNm", ret[1]); //부서명
  } else {
    ds_staffResults.setCellData(rowIdx, "acctDeptCd", ""); //부서코드
    ds_staffResults.setCellData(rowIdx, "acctDeptNm", ""); //부서명
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
  dma_search.set("param1", ica_fromDate.getValue());
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
 * 마감체크
 */
scwin.f_JobCloseYN = async function () {
  scwin.f_setWrkNoFromDate();
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
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", scwin.fromDate, "00", "CO03", "0", "", "", ed_coCd.getValue()).then(function (arrRtn) {
    scwin.isClose = arrRtn;
    //             console.log("부모창 isClose : " + scwin.isClose);
  });
  if (scwin.isClose == "0") {
    await $c.gus.cfAlertMsg($p, "마감중입니다.");
    return false;
  } else if (scwin.isClose == "2") {
    await $c.gus.cfAlertMsg($p, "마감완료가 되었습니다.");
    return false;
  } else if (scwin.isClose == "DNF") {
    await $c.gus.cfAlertMsg($p, "데이터를 찾을 수 없습니다.");
    return false;
  } else if ($c.gus.cfIsNull($p, scwin.isClose)) {
    await $c.gus.cfAlertMsg($p, "잘못된 데이터 입니다.");
    return false;
  } else {
    return true;
  }
};

/**
 * 마감년월 포커스 잃었을 시
 */
scwin.ica_fromDate_onblur = function (e) {
  scwin.f_LoadVer();

  // 년월이 변경되었을경우는 저장이 안됨.
  if (ica_fromDate.hidVal != ica_fromDate.getValue()) {
    scwin.check_select = false;
  }
  // 버젼이 변경되었을경우는 저장이 안됨.
  if (lc_version.hidVal != lc_version.getValue()) {
    scwin.check_select = false;
  }
};

/**
 * 버전 값 변경 시
 */
scwin.lc_version_onviewchange = function (info) {
  if (lc_version.hidVal != lc_version.getValue()) {
    scwin.check_select = false;
  }
};

/**
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 */
scwin.f_setWrkNoFromDate = function () {
  scwin.fromDate = ica_fromDate.getValue().trim();
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
  // gr_staffResults.ReDraw = "false";
  // ds_excel.ClearData();
  // ds_temp.ClearData();
  // ds_excel.DataId = fileUploadGDS.getCellData( 0, "filePath" );
  // ds_excel.Reset();
  // resetForm('frm');
  // window.setTimeout("f_Import()",1000);//시간
};

/**
 * 엑셀 파일 업로드
 * TOBE UDC 사용으로 로직만 복사해서 사용(gr_grid_onfilereadend 이벤트)
 */
scwin.f_Import = async function () {
  //ASIS 소스
  //ds_tempstaffResults.ImportData(ds_upstaffResults.ExportData(1, ds_upstaffResults.getRowCount(), true));
  // var cd = "";
  // var nm = "";
  // var acctDeptCd = "";
  // for(let i=0 ; i<ds_tempstaffResults.getRowCount(); i++) {
  // 	let row = ds_staffResults.insertRow();
  // 	// 귀속부서 코드가 정상적으로 입력되어 있는지 확인함.
  // 	acctDeptCd = $c.gus.cfGetLeftPad(ds_tempstaffResults.getCellData(i,"acctDeptCd"),5);
  // 	if ($c.gus.cfIsNull(ds_tempstaffResults.getCellData(i,"acctDeptCd")) ) {
  // 		await $c.win.alert((i+1) + "번째 행의 귀속부서 코드값이 없습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	// 귀속부서코드가 숫자가 아닐경우 오류표시
  // 	for (var j=0; j<=4; j++) {
  // 		if ( !$c.gus.cfIsIn(acctDeptCd.substring(j,j+1),[0,1,2,3,4,5,6,7,8,9]) ) {
  // 			await $c.win.alert((i+1)+"번째 행의 귀속부서 코드가 잘못 입력 되었습니다.");
  // 			return;
  // 		}
  // 	}

  // 	ds_staffResults.setCellData(row, "acctDeptCd"   , $c.gus.cfGetLeftPad(ds_tempstaffResults.getCellData(i,"acctDeptCd"),5));
  // 	ds_staffResults.setCellData(row, "oldAcctDeptCd", $c.gus.cfGetLeftPad(ds_tempstaffResults.getCellData(i,"acctDeptCd"),5));
  // 	ds_staffResults.setCellData(row, "acctDeptNm"   , ds_tempstaffResults.getCellData(i,"acctDeptNm"));

  // 	// 귀속부서코드 존재유무 확인 없을경우 귀속부서코드와 코드명을 공백처리함.
  // 	cd = $c.gus.cfGetLeftPad(ds_tempstaffResults.getCellData(i,"acctDeptCd"),5);
  // 	rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',cd,'',"T",null,null,null,null,null,null,"450","500",null,"T",null,null); // 귀속부서
  // 	ds_staffResults.setCellData(row, "ver"    , lc_version.getValue());
  // 	ds_staffResults.setCellData(row, "closeYm", ica_fromDate.getValue().trim());
  // 	ds_staffResults.setCellData(row, "a11"    , ds_tempstaffResults.getCellData(i, "a11"));
  //     ds_staffResults.setCellData(row, "b11"    , ds_tempstaffResults.getCellData(i, "b11"));
  //     ds_staffResults.setCellData(row, "b12"    , ds_tempstaffResults.getCellData(i, "b12"));
  //     ds_staffResults.setCellData(row, "b13"    , ds_tempstaffResults.getCellData(i, "b13"));
  //     ds_staffResults.setCellData(row, "b21"    , ds_tempstaffResults.getCellData(i, "b21"));
  //     ds_staffResults.setCellData(row, "b22"    , ds_tempstaffResults.getCellData(i, "b22"));
  //     ds_staffResults.setCellData(row, "b23"    , ds_tempstaffResults.getCellData(i, "b23"));
  //     ds_staffResults.setCellData(row, "b24"    , ds_tempstaffResults.getCellData(i, "b24"));
  //     ds_staffResults.setCellData(row, "b25"    , ds_tempstaffResults.getCellData(i, "b25"));
  //     ds_staffResults.setCellData(row, "b31"    , ds_tempstaffResults.getCellData(i, "b31"));
  //     ds_staffResults.setCellData(row, "b35"    , ds_tempstaffResults.getCellData(i, "b35"));
  //     ds_staffResults.setCellData(row, "b32"    , ds_tempstaffResults.getCellData(i, "b32"));
  //     ds_staffResults.setCellData(row, "b33"    , ds_tempstaffResults.getCellData(i, "b33"));
  //     ds_staffResults.setCellData(row, "b34"    , ds_tempstaffResults.getCellData(i, "b34"));
  //     ds_staffResults.setCellData(row, "b41"    , ds_tempstaffResults.getCellData(i, "b41"));
  //     ds_staffResults.setCellData(row, "b42"    , ds_tempstaffResults.getCellData(i, "b42"));
  //     ds_staffResults.setCellData(row, "b43"    , ds_tempstaffResults.getCellData(i, "b43"));
  //     ds_staffResults.setCellData(row, "b44"    , ds_tempstaffResults.getCellData(i, "b44"));
  //     ds_staffResults.setCellData(row, "b51"    , ds_tempstaffResults.getCellData(i, "b51"));
  //     ds_staffResults.setCellData(row, "b52"    , ds_tempstaffResults.getCellData(i, "b52"));
  //     ds_staffResults.setCellData(row, "b53"    , ds_tempstaffResults.getCellData(i, "b53"));
  //     ds_staffResults.setCellData(row, "b54"    , ds_tempstaffResults.getCellData(i, "b54"));
  //     ds_staffResults.setCellData(row, "b55"    , ds_tempstaffResults.getCellData(i, "b55"));

  // 	// 인원수에 대한 자릿수를 체크한다. 
  // 	if ( ds_tempstaffResults.getCellData(i,"a11") > 99999 ) {
  // 		await $c.win.alert("임원의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b11") > 99999) {
  // 		await $c.win.alert("M3의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b12") > 99999) {
  // 		await $c.win.alert("M2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b13") > 99999) {
  // 		await $c.win.alert("M1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b21") > 99999) {
  // 		await $c.win.alert("S2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b22") > 99999) {
  // 		await $c.win.alert("S1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b23") > 99999) {
  // 		await $c.win.alert("J3의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b24") > 99999) {
  // 		await $c.win.alert("J2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b25") > 99999) {
  // 		await $c.win.alert("J1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b31") > 99999) {
  // 		await $c.win.alert("E2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b35") > 99999) {
  // 		await $c.win.alert("E1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b32") > 99999) {
  // 		await $c.win.alert("03의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b33") > 99999) {
  // 		await $c.win.alert("02의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b34") > 99999) {
  // 		await $c.win.alert("01의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}

  // 	if ( ds_tempstaffResults.getCellData(i,"b41") > 99999) {
  // 		await $c.win.alert("A2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b42") > 99999) {
  // 		await $c.win.alert("A1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b43") > 99999) {
  // 		await $c.win.alert("ETC의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b44") > 99999) {
  // 		await $c.win.alert("승무직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b51") > 99999) {
  // 		await $c.win.alert("기능직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b52") > 99999) {
  // 		await $c.win.alert("하역직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b53") > 99999) {
  // 		await $c.win.alert("경비원의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b54") > 99999) {
  // 		await $c.win.alert("노무직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // 	if ( ds_tempstaffResults.getCellData(i,"b55") > 99999) {
  // 		await $c.win.alert("별정직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
  // 		return;
  // 	}
  // }

  let acctDeptCd = "";
  let json;
  for (let i = 0; i < ds_staffResults.getRowCount(); i++) {
    // 귀속부서 코드가 정상적으로 입력되어 있는지 확인함.
    acctDeptCd = $c.gus.cfGetLeftPad($p, ds_staffResults.getCellData(i, "acctDeptCd"), 5);
    if ($c.gus.cfIsNull($p, ds_staffResults.getCellData(i, "acctDeptCd"))) {
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
    ds_staffResults.setCellData(i, "acctDeptCd", acctDeptCd);
    ds_staffResults.setCellData(i, "oldAcctDeptCd", acctDeptCd);
    ds_deptList.removeAll();
    json = {};
    json.sysCd = "CommonEBC";
    //TODO : 그리드팝업 호출과 같은 쿼리를 서야 하나? 이거 쓰면 안나오는부서 있던데
    // json.queryId = "retrieveAcctDeptCdInfo";
    json.queryId = "retrieveAcctDeptCdInfo5";
    json.param1 = acctDeptCd;
    //retrieveAcctDeptCdInfo5 사용 시 파라메터 추가
    json.param3 = ica_fromDate.getValue().trim();
    json.param12 = ed_coCd.getValue();
    let ret = await $c.sbm.execute($p, sbm_retrieveDept, json);
    ds_deptList.setJSON(ret.responseJSON.GAUCE);
    if (ds_deptList.getRowCount() == 0) {
      ds_staffResults.setCellData(i, "acctDeptCd", "");
      ds_staffResults.setCellData(i, "acctDeptNm", "");
    }
    ds_staffResults.setCellData(i, "ver", lc_version.getValue());
    ds_staffResults.setCellData(i, "closeYm", ica_fromDate.getValue().trim());

    // 인원수에 대한 자릿수를 체크한다. 
    if (Number(ds_staffResults.getCellData(i, "a11")) > 99999) {
      await $c.win.alert($p, "임원의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b11")) > 99999) {
      await $c.win.alert($p, "M3의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b12")) > 99999) {
      await $c.win.alert($p, "M2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b13")) > 99999) {
      await $c.win.alert($p, "M1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b21")) > 99999) {
      await $c.win.alert($p, "S2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b22")) > 99999) {
      await $c.win.alert($p, "S1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b23")) > 99999) {
      await $c.win.alert($p, "J3의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b24")) > 99999) {
      await $c.win.alert($p, "J2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b25")) > 99999) {
      await $c.win.alert($p, "J1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b31")) > 99999) {
      await $c.win.alert($p, "E2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b35")) > 99999) {
      await $c.win.alert($p, "E1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b32")) > 99999) {
      await $c.win.alert($p, "03의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b33")) > 99999) {
      await $c.win.alert($p, "02의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b34")) > 99999) {
      await $c.win.alert($p, "01의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b41")) > 99999) {
      await $c.win.alert($p, "A2의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b42")) > 99999) {
      await $c.win.alert($p, "A1의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b43")) > 99999) {
      await $c.win.alert($p, "ETC의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b44")) > 99999) {
      await $c.win.alert($p, "승무직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b51")) > 99999) {
      await $c.win.alert($p, "기능직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b52")) > 99999) {
      await $c.win.alert($p, "하역직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b53")) > 99999) {
      await $c.win.alert($p, "경비원의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b54")) > 99999) {
      await $c.win.alert($p, "노무직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_staffResults.getCellData(i, "b55")) > 99999) {
      await $c.win.alert($p, "별정직의 인원수가 최대자릿수를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
  }

  // 엑셀파일 Import가 정상종료시 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  ica_fromDate.hidVal = ica_fromDate.getValue();
  lc_version.hidVal = lc_version.getValue();
  scwin.check_select = true;
  ds_staffResults.modifyAllStatus("C");
  totalRows.setValue(ds_staffResults.getTotalRow());
};

/**
 * 그리드 데이터 엑셀로 다운
 */
scwin.f_Export = async function () {
  let sheetTitle = "인원실적등록";
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
  //           rowIndex: 0               //제목을 표시할 행 index
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
  await $c.data.downloadGridViewExcel($p, gr_staffResults, options);
};

/**
 * 엑셀 파일 업로드
 */
scwin.f_excelUpload = async function () {
  let options;

  // grdUpOpts="" UDC 옵션임
  //'{"headerExist":"0","footerExist":"1","startRowIndex":2,"status":"C"}'
  if (udc_excel.getUpExt() == "1") {
    options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 0,
      "type": "1",
      "startRowIndex": 2
      //"delim":"||",     //[default: ',']CSV 파일에서 데이터를 구분할 구분자
    };
    await $c.data.uploadGridViewCSV($p, gr_staffResults, options);
  } else {
    options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 0,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 2,
      "footerExist": 1,
      "processMsg": "Y"
    };
    await $c.data.uploadGridViewExcel($p, gr_staffResults, options);
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
  //     ed_coCd.hidVal = rtnList[0]; // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분

  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     ed_coCd.hidVal = "";
  //     scwin.txtCoClsCd = "";
  // }

  // if (scwin.txtCoClsCd > 'scwin.ACConstants.CO_CLS_CD_DONGBU') { // 자회사 회계 시스템
  //     scwin.isSubCompany = true;
  // } else {
  //     scwin.isSubCompany = false;
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
  // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,"1", "CD");
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, "1", "CD", close);
};
scwin.udc_sacctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_sacctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,"1", "CD");
    scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, "1", "CD", "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 이미지셀 클릭 이벤트
*/
scwin.gr_staffResults_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_staffResults.getColumnID(columnIndex);
  let data = ds_staffResults.getCellData(rowIndex, columnId);
  let status = ds_staffResults.getRowStatus(rowIndex, columnId);
  if (columnId == "acctDeptCd") {
    if (status != "D") {
      scwin.f_GridPop(columnId, rowIndex, data, "F");
    }
  }
  return true;
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_staffResults_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = ds_staffResults.getRowStatus(rowIndex);
  if (status == "D") {
    gr_staffResults.setRowReadOnly(rowIndex, true);
  } else {
    gr_staffResults.setRowReadOnly(rowIndex, false);
    gr_staffResults.setCellReadOnly(rowIndex, "acctDeptNm", true);
  }
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_staffResults_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_staffResults.getColumnID(columnIndex);
  if (columnId == "acctDeptCd") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_GridPop(columnId, rowIndex, value, "T");
    } else if ($c.gus.cfIsNull($p, value)) {
      ds_staffResults.setCellData(rowIndex, "acctDeptNm", "");
    }
  }
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_staffResults_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_staffResults.getColumnID(columnIndex);
  if (columnId == "acctDeptCd") {
    scwin.oldValue = value;
  }
};

/**
 * 그리드에서 엑셀 업로드 끝난 뒤 발생
 */
scwin.gr_staffResults_onfilereadend = function (value) {
  let removeRow = ds_staffResults.getMatchedIndex("acctDeptNm", "총인원");
  if (removeRow.length > 0) {
    ds_staffResults.removeRow(removeRow[0]);
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.distYm',style:'',title:'적용년월','ev:onblur':'scwin.ica_fromDate_onblur',nextTabID:'lc_version'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_version',mandatory:'true',ref:'data:dma_search.ver',style:'',submenuSize:'auto',tabIndex:'-1',title:'버전',validExp:'버전:yes',visibleRowNum:'5','ev:onviewchange':'scwin.lc_version_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_sacctDeptCd',code:'acctDeptCd',codeId:'ed_sacctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_sacctDeptCd_onviewchangeCodeEvent',id:'udc_sacctDeptCd',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_sacctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_sacctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo5',style:'',validExpCode:'부서',validTitle:'부서'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인원실적현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridID:'gr_staffResults',grp:'grd_section1',id:'udc_excel',gridUpYn:'Y',style:'',templateYn:'N',gridDownFn:'scwin.f_Export',gridUpFn:'scwin.f_excelUpload',btnUser:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_staffResults',id:'gr_staffResults',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'2',readOnly:'false',focusMode:'cell',enterKeyMove:'editRight',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_staffResults_oncellclick','ev:ontextimageclick':'scwin.gr_staffResults_ontextimageclick','ev:onafteredit':'scwin.gr_staffResults_onafteredit','ev:onfilereadend':'scwin.gr_staffResults_onfilereadend','ev:onbeforeedit':'scwin.gr_staffResults_onbeforeedit',fixedColumnNoMove:'true',keepDefaultColumnWidth:'true',gridName:'인원실적등록'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column40',value:'부서코드',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'임원',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'M3',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'M2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'M1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'S2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'S1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'J3',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'J2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'J1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'E2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'E1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'O3',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'O2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'O1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'A2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'A1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'ETC',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'승무직',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'기능직',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'하역직',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'경비원',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'노무직',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'별정직',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'귀속부서코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'귀속부서명',width:'140',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',width:'100',textAlign:'center',displayMode:'label',inputType:'textImage',style:'',value:'',editFormat:'#####',mandatory:'true',key:'true'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',width:'140',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'',mandatory:'true',readOnly:'true',key:'true'}},{T:1,N:'w2:column',A:{id:'a11',name:'임원',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b11',name:'M',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b12',name:'M',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b13',name:'M',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b21',name:'S',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b22',name:'S',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b23',name:'J',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b24',name:'J',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b25',name:'J',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b31',name:'E',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b35',name:'E',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b32',name:'O',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b33',name:'O',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b34',name:'O',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b41',name:'A',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b42',name:'A',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b43',name:'ETC',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b44',name:'승무직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b51',name:'기능직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b52',name:'하역직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b53',name:'경비원',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b54',name:'노무직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{id:'b55',name:'별정직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',maxLength:'6',validateOnInput:'true',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'acctDeptCd_s1',name:'귀속부서코드',width:'100',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm_s1',name:'귀속부서명',width:'140',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'총인원'}},{T:1,N:'w2:column',A:{id:'a11_s1',name:'임원',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("a11")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b11_s1',name:'M',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b11")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b12_s1',name:'M',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b12")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b13_s1',name:'M',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b13")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b21_s1',name:'S',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b21")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b22_s1',name:'S',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b22")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b23_s1',name:'J',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b23")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b24_s1',name:'J',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b24")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b25_s1',name:'J',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b25")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b31_s1',name:'E',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b31")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b35_s1',name:'E',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b35")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b32_s1',name:'O',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b32")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b33_s1',name:'O',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b33")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b34_s1',name:'O',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b34")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b41_s1',name:'A',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b41")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b42_s1',name:'A',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b42")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b43_s1',name:'ETC',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b43")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b44_s1',name:'승무직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b44")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b51_s1',name:'기능직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b51")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b52_s1',name:'하역직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b52")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b53_s1',name:'경비원',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b53")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b54_s1',name:'노무직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b54")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'b55_s1',name:'별정직',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',displayMode:'label',inputType:'expression',expression:'SUM("b55")',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',displayFormatter:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_staffResults',rowAddFunction:'scwin.f_AddRow',style:'',btnRowDelYn:'Y',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'w2:udc_comChkRes',A:{style:'width:%; height:px; ;visibility:hidden;',id:'udc_cfJobCloseYN'}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})