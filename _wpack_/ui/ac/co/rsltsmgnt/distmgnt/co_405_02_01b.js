/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_02_01b.xml 48835 2b08c6c6561f53c8495fc75926801002ed13d5ebaf43eebdc92bb9c6340531c8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distClsCd',name:'계획/결산구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distAcctDeptCd',name:'배부부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_giveDept',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distDegCd',name:'배부차수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAcctDeptCd',name:'배부귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAcctDeptNm',name:'배부귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mgntAcct',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정과목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정과목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_distDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMgntAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distStdCd',name:'배부기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distDegCd',name:'배부차수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAcctDeptCd',name:'배부귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deleteFlag',name:'삭제플러그(F)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_distStdCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'distDegCd',name:'배부차수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAcctDeptCd',name:'배부귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distStdCd',name:'배부기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.distmgnt.RetrieveDistributionStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_mgntAcct","key":"OUT_DS1"},{"id":"ds_giveDept","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_mgntAcct","key":"OUT_DS1"},{"id":"ds_giveDept","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ac.co.rsltsmgnt.distmgnt.RetrieveDistributionStandardDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchDetail","key":"IN_DS1"},{"id":"ds_distDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_distDetail", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.distmgnt.SaveDistributionStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_distDetail","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_batchDistSts',action:'/ac.co.rsltsmgnt.distmgnt.ExecuteSaleManagementDistributionStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_distStdCd","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_batchDistSts_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
* 화 면 명 : 배부기준등록
* 메뉴경로 : 회계/관리회계/실적관리/배부관리/
* ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_02_01b.jsp
* 작 성 자 : 배기원
* 작 업 일 : 2025-12-15
* 작업내용 :
*    1. 화면세팅
*    2. 초기세팅(UDC), 그리드(데이터리스트)
*    3. 스크립트 TOBE전환
*    4. 기능확인(버튼)
* 참고사항
*    1. login정보 확인 필요 
*     ☞  $c.data.getMemInfo() 처리
* 테스트데이터 
*    1. 회사코드[000], 계획/실적[실적배부], 배부년월[2023/08], 차수[1차]
*     ☞  배부기준일괄등록 테스트 시 배부부서[01374:국제사업개발팀], 계정과목[5002500:판)광고선전비] => 아래 콤보박스 변경 시 계정항목 일괄 변경 됨
* 수정이력 :
*    - 2025-12-15      배기원    최초작성
*/
//hidden 값
scwin.txtCoClsCd = "";
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;

//배부년월 초기값
scwin.today = "";
scwin.closeYm = "";
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

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
  },
  //배부차수
  {
    grpCd: "CO007",
    compID: "lc_distStdCd, gr_distDetail:distStdCd"
  } //배부기준코드
  ];
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
  // var GAUCE_DATASET_HEADER = "distDegCd:STRING(1)"
  //     + ",distYm:STRING(6)"
  //     + ",distClsCd:STRING(1)";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();

  // GAUCE_DATASET_HEADER = "distDegCd:STRING(1)"
  //     + ",distYm:STRING(6)"
  //     + ",distAcctDeptCd:STRING(5)"
  //     + ",mgntAcctCd:STRING(7)";
  // ds_searchDetail.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_searchDetail.insertRow();

  // GAUCE_DATASET_HEADER = "distDegCd:STRING(1)"
  //     + ",distYm:STRING(6)"
  //     + ",distAcctDeptCd:STRING(5)"
  //     + ",mgntAcctCd:STRING(7)"
  //     + ",distStdCd:STRING(2)"
  //     ;
  // ds_distStdCd.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_distStdCd.insertRow();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_giveDept.setNoResultMessageVisible(false);
  gr_mgntAcct.setNoResultMessageVisible(false);
  gr_distDetail.setNoResultMessageVisible(false);
  ds_giveDept.reform();
  ds_mgntAcct.reform();
  ds_distDetail.reform();
  ds_giveDept.removeAll();
  ds_mgntAcct.removeAll();
  ds_distDetail.removeAll();
  totalRows1.setValue("0");
  totalRows2.setValue("0");
  totalRows3.setValue("0");
  scwin.f_commCdPopupRow = 0;
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
  ica_fromDate.focus();
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
  ica_fromDate.setCalendarValueType("yearMonth", {
    "displayFormat": "yyyy/MM"
  });
  ica_fromDate.setValue(scwin.closeYm);
  rd_distClsCd.setValue("2");
  lc_distDegCd.setSelectedIndex(0);
  ica_fromDate.focus();
};

/**
 * 초기화 시
 */
scwin.f_SetDefault = function () {
  if (rd_distClsCd.getValue() == "1") {
    ica_fromDate.setCalendarValueType("year", {
      "displayFormat": "yyyy"
    });
    ica_fromDate.setValue(scwin.closeYm.substring(0, 4));
  } else {
    ica_fromDate.setCalendarValueType("yearMonth", {
      "displayFormat": "yyyy/MM"
    });
    ica_fromDate.setValue(scwin.closeYm);
  }
};

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->거래처 , 2:Grid->직급코드
 * code변수는 각 항목별 검색요청 값이다.
 * TOBE : scwin.f_gridPop로 호출(UDC 사용)
 */
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  //asis 소스t에 따른 PopUp을 호출 한다.
  // var rtnList = new Array();

  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  // if (flag != "SKIP") {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.Text;
  //         nm = orgObjNm.Text;
  //     }
  // } else {
  //     cd = orgObjCd;
  //     nm = "";
  // }

  // switch (select_code) {
  //     // 조회조건용 수금부서 PopUp 호출
  //     case '1':
  //         var whereStr = ica_fromDate.getValue().substring(0, 6) + "01" + ",,,,givedept"
  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', cd, nm, "T", null, null, null, null, whereStr, null, null, null, null);
  //         return rtnList;
  //         break;
  //     default:
  //         $c.win.alert("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  //         break;
  // }
};

/**
 * PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 * TOBE 사용안함(UDC 사용)
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  // if (flag == "CD") {
  //     if (orgObjCd.Text == orgObjCd.hidVal) {
  //         return;
  //     } else {
  //         orgObjNm.Text = "";
  //     }
  // } else {
  //     if (orgObjNm.Text == orgObjNm.hidVal) {
  //         return;
  //     } else {
  //         orgObjCd.Text = "";
  //     }
  // }

  // if (orgObjCd.Text.trim() != "" || flag == "NM") {
  //     if (orgObjNm.Text.trim() != "" || flag == "CD") {
  //         orgObjCd.Text = orgObjCd.Text.trim();
  //         orgObjNm.Text = orgObjNm.Text.trim();
  //         scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
  //     }
  // } else {
  //     orgObjNm.Text = "";
  //     orgObjCd.Text = "";
  //     orgObjCd.hidVal = "";
  // }
};

/**
 * 팝업결과
 * TOBE 사용안함(UDC 사용)
 */
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.Text = rtnList[0]; // 코드값
    orgObjNm.Text = rtnList[1]; // 코드명
    orgObjCd.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.Text = "";
    orgObjNm.Text = "";
    orgObjCd.hidVal = "";
    orgObjNm.hidVal = "";
  }
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  let sqlId = "";
  //관리계정
  scwin.f_commCdPopupRow = row;
  if (colId == "distAcctDeptCd") {
    ds_giveDept.setCellData(row, "distAcctDeptCd", "");
    ds_giveDept.setCellData(row, "distAcctDeptNm", "");
    let fromDate = ica_fromDate.getValue();
    if (rd_distClsCd.getValue() == "1") {
      fromDate = fromDate + "01";
    }
    let param = fromDate + "01" + ",,,,givedept,1,,,," + ed_coCd.getValue();
    udc_comCode_Grid.setSelectId("retrieveAcctDeptCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_distAcctDeptCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 배부부서코드(그리드팝업)
 */
scwin.udc_comCode_Grid_distAcctDeptCd_callBackFunc = function (ret) {
  // let rowIdx = gr_giveDept.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_giveDept.setCellData(rowIdx, "distAcctDeptCd", ret[0]); //배부부서코드
    ds_giveDept.setCellData(rowIdx, "distAcctDeptNm", ret[1]); //배부부서명
    scwin.f_RetrieveDetail(ds_mgntAcct.getRowPosition());
  } else {
    ds_giveDept.setCellData(rowIdx, "distAcctDeptCd", ""); //배부부서코드
    ds_giveDept.setCellData(rowIdx, "distAcctDeptNm", ""); //배부부서명
  }
  // gr_giveDept.setEventPause("", false);
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  // 조회 필수조건 확인
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, ed_coCd]);
  if (!ret) {
    return false;
  }
  let date = ica_fromDate.getValue().trim();
  //계획일경우는 년도+"00", 실적일경우는 년월
  // 계획일경우
  if (rd_distClsCd.getValue() == "1") {
    if (ica_fromDate.getValue().length != 4) {
      await $c.win.alert($p, "배부년도은(는) 4자리수만큼 입력하십시오.");
      ica_fromDate.focus();
      return;
    }
    dma_search.set("distYm", ica_fromDate.getValue().trim() + "00");
    date = ica_fromDate.getValue() + "0101";
    // 실적배부일경우
  } else {
    if (ica_fromDate.getValue().length != 6) {
      await $c.win.alert($p, "배부년월은(는) 6자리수만큼 입력하십시오.");
      ica_fromDate.focus();
      return;
    }
    dma_search.set("distYm", ica_fromDate.getValue().trim());
    date = ica_fromDate.getValue() + "01";
  }
  ret = await $c.date.isDate($p, date);
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
  gr_giveDept.setNoResultMessageVisible(true);
  gr_mgntAcct.setNoResultMessageVisible(true);
  let rowCnt1 = ds_giveDept.getRowCount();
  let rowCnt2 = ds_mgntAcct.getRowCount();
  totalRows1.setValue(rowCnt1);
  totalRows2.setValue(rowCnt2);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    // ds_giveDept.sort("distAcctDeptCd", 0);
    gr_giveDept.setEventPause("", true);
    gr_giveDept.setFocusedCell(0, 0);
    gr_giveDept.setEventPause("", false);
    gr_mgntAcct.setFocusedCell(0, 0);
    if (rowCnt2 > 0) {
      scwin.f_RetrieveDetail(0);
    }
  }
};

// scwin.sbm_retrieve_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * 상세조회
 * TODO : row는 계정과목임
 */
scwin.f_RetrieveDetail = function (row) {
  dma_searchDetail.setEmptyValue();
  // 계획일경우
  if (rd_distClsCd.getValue() == "1") {
    dma_searchDetail.set("distYm", ica_fromDate.getValue().trim() + "00");
    // 실적배부일경우
  } else {
    dma_searchDetail.set("distYm", ica_fromDate.getValue().trim());
  }
  dma_searchDetail.set("distDegCd", lc_distDegCd.getValue());
  dma_searchDetail.set("distAcctDeptCd", ds_giveDept.getCellData(ds_giveDept.getRowPosition(), "distAcctDeptCd"));
  dma_searchDetail.set("mgntAcctCd", ds_mgntAcct.getCellData(row, "acctCd"));
  dma_searchDetail.set("coCd", ed_coCd.getValue());
  ds_distDetail.removeAll();
  totalRows3.setValue("0");
  $c.sbm.execute($p, sbm_retrieveDetail);
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_distDetail.setNoResultMessageVisible(true);
  let rowCnt = ds_distDetail.getRowCount();
  totalRows3.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    //조회된 결과 정렬(asis:<param name=SortExpr +mgntAcctCd 참조)
    // ds_distDetail.sort("mgntAcctCd", 0);
    gr_distDetail.setFocusedCell(0, 0);
  }
};

// scwin.sbm_retrieveDetail_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * 저장
 */
scwin.f_Save = async function () {
  // if (ds_distDetail.isUpdated == false) {
  if (ds_distDetail.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["배부기준정보"]);
    return;
  }
  let ret = await $c.gus.cfValidate($p, [lc_distDegCd, ica_fromDate, rd_distClsCd]);
  if (!ret) {
    return false;
  } else {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      for (let i = 0; i < ds_distDetail.getRowCount(); i++) {
        //asis 0:Normal, tobe R:Normal
        if (ds_distDetail.getRowStatus(i) != "R") {
          // 계획일경우
          if (rd_distClsCd.getValue() == "1") {
            ds_distDetail.setCellData(i, "distYm", ica_fromDate.getValue().trim() + "00");
            // 실적배부일경우
          } else {
            ds_distDetail.setCellData(i, "distYm", ica_fromDate.getValue().trim());
          }
          if ($c.gus.cfIsNull($p, ds_distDetail.getCellData(i, "distAcctDeptCd"))) {
            ds_distDetail.setCellData(i, "distAcctDeptCd", ds_giveDept.getCellData(ds_giveDept.getRowPosition(), "distAcctDeptCd"));
          }
          ds_distDetail.setCellData(i, "distDegCd", lc_distDegCd.getValue());
          if ($c.gus.cfIsNull($p, ds_distDetail.getCellData(i, "coCd"))) {
            let coCd = ds_giveDept.getCellData(ds_giveDept.getRowPosition(), "coCd");
            coCd = $c.gus.cfIsNull($p, coCd) ? ed_coCd.getValue() : coCd;
            ds_distDetail.setCellData(i, "coCd", coCd);
          }
        }
      }
      sbm_save.userData1 = "noError";
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

// scwin.sbm_save_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * 첫번째  그리드추가 - 차수별,배부부서코드  적용
 */
scwin.f_AddRowRegion = async function () {
  // if (ds_distDetail.IsUpdated) {
  if (ds_distDetail.getModifiedIndex().length > 0) {
    if (!(await $c.win.confirm($p, "계정항목에 변경된 사항이 있습니다.<BR>다른 부서의 계정항목을 불러 오시겠습니까?"))) {
      return false;
    }
  }
  let row = ds_giveDept.insertRow();
  ds_distDetail.removeAll();
  ds_giveDept.setCellData(row, "distDegCd", lc_distDegCd.getValue());
  ds_giveDept.setCellData(row, "distYM", ica_fromDate.getValue().trim());
  ds_giveDept.setCellData(row, "coCd", ed_coCd.getValue().trim());
  //gr_giveDept.setCellReadOnly(row, "distAcctDeptCd", false);
  gr_giveDept.setFocusedCell(row, "distAcctDeptCd", true);
};

/**
 * 행삭제
 */
scwin.f_Delete = function () {
  // let row = ds_giveDept.getRowPosition();
  let row = gr_giveDept.getFocusedRowIndex();
  if (ds_giveDept.getRowStatus(row) == "C") {
    ds_giveDept.removeRow(row);
  } else {
    gr_giveDept.setEventPause("", true);
    ds_giveDept.deleteRow(row);
    for (let i = 0; i < ds_distDetail.getRowCount(); i++) {
      if (ds_giveDept.getCellData(row, "distAcctDeptCd") == ds_distDetail.getCellData(i, "distAcctDeptCd")) {
        ds_distDetail.deleteRow(i);
      }
    }
    gr_giveDept.setCellReadOnly(row, "distAcctDeptCd", true);
    gr_giveDept.setFocusedCell(row, 0);
    gr_giveDept.setEventPause("", false);
  }
};

/**
 * 행취소
 */
scwin.f_Cancel = function () {
  let row = ds_giveDept.getRowPosition();
  if (ds_giveDept.getRowStatus(row) == "C") {
    ds_giveDept.removeRow(row);
  } else {
    ds_distDetail.undoAll();
    ds_giveDept.undoRow(row);
  }
  gr_giveDept.setFocusedCell(row, 0);
};

/**
 * 배부기준 부서등록 자동생성 팝업
 */
scwin.f_PopUpAutoCreation = function () {
  // var	param =  ed_FromDate.text.trim();
  // var	param1 =  ds_giveDept.NameValue(ds_giveDept.RowPosition,"distAcctDeptCd");
  // var	param2 =  ds_giveDept.NameValue(ds_giveDept.RowPosition,"distAcctDeptNm");
  // var	param3 =  ed_coCd.text.trim();
  // var	param4 =  txt_coNm.value;  
  // var sFeatures =	"dialogWidth:450px; dialogHeight:550px;" 
  //                 + "center:Yes; help:No; resizable:No; status:No; scroll:No";    
  // sURL = "/ac/co/rsltsmgnt/distmgnt/co_405_02_02p.jsp?stdYm=" + param+"&distAcctDeptCd=" + param1+"&distAcctDeptNm=" + param2
  //                                                 +"&coCd=" + param3 +"&coNm=" + param4;    
  // window.showModalDialog(sURL,param,sFeatures);

  let row = ds_giveDept.getRowPosition();
  let opt = {};
  let data = {};
  opt.width = "760";
  opt.height = "650";
  opt.id = "popUpAutoCreation";
  opt.title = "배부기준등록 자동생성";
  opt.popupName = "배부기준등록 자동생성";
  opt.type = "browserPopup";
  data.stdYm = ica_fromDate.getValue().trim();
  data.distAcctDeptCd = ds_giveDept.getCellData(row, "distAcctDeptCd");
  data.distAcctDeptNm = ds_giveDept.getCellData(row, "distAcctDeptNm");
  data.coCd = ed_coCd.getValue();
  data.coNm = ed_coNm.getValue();

  //실제호출
  $c.win.openPopup($p, "/ui/ac/co/rsltsmgnt/distmgnt/co_405_02_02p.xml", opt, data);
};

/**
 * 배부기준일괄변경
 */
scwin.f_PopUpDistChange = function () {
  // var	param =  ed_FromDate.text.trim();
  // var sFeatures =	"dialogWidth:450px; dialogHeight:250px;" 
  //                 + "center:Yes; help:No; resizable:No; status:No; scroll:No";    
  // var valueObject = new Object();
  // valueObject.stdYr 		= ed_FromDate.text.trim().substring(0, 4);
  // valueObject.coCd 		= ed_coCd.text.trim() ;
  // valueObject.coNm 		= txt_coNm.value;

  // sURL = "/ac/co/rsltsmgnt/distmgnt/co_405_02_01p.jsp";
  // window.showModalDialog(sURL,valueObject,sFeatures);

  let opt = {};
  let data = {};
  opt.width = "500";
  opt.height = "460";
  opt.id = "popUpDistChange";
  opt.title = "배부기준 일괄변경";
  opt.popupName = "배부기준 일괄변경";
  data.stdYr = ica_fromDate.getValue().trim().substring(0, 4);
  data.coCd = ed_coCd.getValue();
  data.coNm = ed_coNm.getValue();

  //실제호출
  $c.win.openPopup($p, "/ui/ac/co/rsltsmgnt/distmgnt/co_405_02_01p.xml", opt, data);
};

/**
 * 배부기준일괄등록
 */
scwin.f_DistBatch = async function () {
  if (ds_giveDept.getRowCount() <= 0) {
    // MSG_CM_ERR_052   =  "해당조건의 %1이(가) 존재하지 않습니다."
    // await $c.win.alert(MSG_CM_ERR_052, ["배부부서"]);
    await $c.win.alert($p, "해당조건의 배부부서이(가) 존재하지 않습니다.");
    return false;
  }
  if ($c.gus.cfIsNull($p, lc_distStdCd.getValue())) {
    // MSG_CM_WRN_007   =  "%1을(를) 선택하십시오."
    // await $c.win.alert(MSG_CM_WRN_007, Array("배부기준"));
    await $c.win.alert($p, "배부기준을(를) 선택하십시오.");
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_016)) {
    let distYm = "";
    //계획일경우
    if (rd_distClsCd.getValue() == "1") {
      //ds_giveDept.setCellData(ds_giveDept.getRowPosition(), "distYm", ica_fromDate.getValue().trim() + "00");
      distYm = ica_fromDate.getValue().trim() + "00";
      //실적배부일경우
    } else {
      //ds_giveDept.setCellData(ds_giveDept.getRowPosition(), "distYm", ica_fromDate.getValue().trim());
      distYm = ica_fromDate.getValue().trim();
    }
    ds_distStdCd.removeAll();
    let deptRow = ds_giveDept.getRowPosition();
    let row = ds_distStdCd.insertRow();
    ds_distStdCd.setCellData(row, "distYm", distYm);
    ds_distStdCd.setCellData(row, "distAcctDeptCd", ds_giveDept.getCellData(deptRow, "distAcctDeptCd"));
    ds_distStdCd.setCellData(row, "distDegCd", ds_giveDept.getCellData(deptRow, "distDegCd"));
    ds_distStdCd.setCellData(row, "distStdCd", lc_distStdCd.getValue());
    sbm_batchDistSts.userData1 = "noError";
    $c.sbm.execute($p, sbm_batchDistSts);
  }
};
scwin.sbm_batchDistSts_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

// scwin.sbm_batchDistSts_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_GridToExcel = function (gr_groupCode, gridName) {
//     var dataSet = new Object();
//     dataSet = eval(gr_groupCode.DataId);
//     if (dataSet.getRowCount() <= 0) {
//         $c.win.alert(gridName + "가(이) 존재하지않습니다.");
//         return false
//     }
//     $c.data.downloadGridViewExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);
// };

/**
 * 계획/실적 변경 이벤트
 */
scwin.rd_distClsCd_onviewchange = function (info) {
  if (rd_distClsCd.getValue() == "1") {
    ica_fromDate.setCalendarValueType("year", {
      "displayFormat": "yyyy"
    });
    ica_fromDate.setValue(ica_fromDate.getValue().substring(0, 4));
  } else {
    ica_fromDate.setCalendarValueType("yearMonth", {
      "displayFormat": "yyyy/MM"
    });
    ica_fromDate.setValue(scwin.closeYm);
  }
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

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 행의 인덱스가 변경된 경우에 발생
 * TODO : ASIS는 CanRowPosChange, OnRowPosChanged 사용하는데 웹스퀘어 cfConfirmMsg 사용하기 위해 현재 이벤트만 사용
 */
scwin.gr_giveDept_onrowindexchange = async function (rowIndex, oldRow) {
  let row = rowIndex;
  if (row < 0) return;
  //start asis의 CanRowPosChange 이벤트 로직 사용
  if (ds_distDetail.getModifiedIndex().length > 0) {
    let ret = await $c.win.confirm($p, "계정항목에 변경된 사항이 있습니다.<BR>다른 부서의 계정항목을 불러 오시겠습니까?");
    if (!ret) {
      gr_giveDept.setEventPause("", true);
      gr_giveDept.setFocusedCell(oldRow, 0);
      gr_giveDept.setEventPause("", false);
      return;
    }
  }
  //end asis
  if (!$c.gus.cfIsNull($p, ds_giveDept.getCellData(row, "distAcctDeptCd"))) {
    scwin.f_RetrieveDetail(ds_mgntAcct.getRowPosition());
  } else {
    ds_distDetail.removeAll();
    totalRows3.setValue("0");
  }
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_giveDept_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = ds_giveDept.getRowStatus(rowIndex);
  let ret = false;
  if (status == "D") {
    ret = true;
  }
  gr_giveDept.setCellReadOnly(rowIndex, "distAcctDeptCd", ret);
};

/**
 * 그리드 이미지셀 클릭 이벤트
*/
scwin.gr_giveDept_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_giveDept.getColumnID(columnIndex);
  let data = ds_giveDept.getCellData(rowIndex, columnId);
  let status = ds_giveDept.getRowStatus(rowIndex);
  if (columnId == "distAcctDeptCd") {
    if (status != "D") {
      scwin.f_GridPop(columnId, rowIndex, data, "F");
    }
  }
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_giveDept_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_giveDept.getColumnID(columnIndex);
  if (columnId == "distAcctDeptCd") {
    scwin.oldValue = value;
  }
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_giveDept_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_giveDept.getColumnID(columnIndex);
  if (columnId == "distAcctDeptCd") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_GridPop(columnId, rowIndex, value, "T");
    } else if ($c.gus.cfIsNull($p, value)) {
      ds_giveDept.setCellData(rowIndex, "distAcctDeptNm", "");
    }
  }
};

/**
 * 그리드 선택한 셀의 행이 변경되거나, API를 이용하여 셀에 포커스를 적용한 셀의 행이 변경되었을 때 이벤트
*/
scwin.gr_mgntAcct_onrowindexchange = async function (rowIndex, oldRow) {
  //start asis의 CanRowPosChange 이벤트 로직 사용
  if (ds_distDetail.getModifiedIndex().length > 0) {
    let ret = await $c.win.confirm($p, "계정항목에 변경된 사항이 있습니다.<BR>다른 부서의 계정항목을 불러 오시겠습니까?");
    if (!ret) {
      gr_mgntAcct.setEventPause("", true);
      gr_mgntAcct.setFocusedCell(oldRow);
      gr_mgntAcct.setEventPause("", false);
      return;
    }
  }
  //end asis
  if (!$c.gus.cfIsNull($p, ds_giveDept.getCellData(ds_giveDept.getRowPosition(), "distAcctDeptCd"))) {
    scwin.f_RetrieveDetail(rowIndex);
  } /*else {
       ds_distDetail.removeAll();
       totalRows3.setValue("0");
    }*/
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계획/실적',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_distClsCd',ref:'data:dma_search.distClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'계획/실적',mandatory:'true','ev:onviewchange':'scwin.rd_distClsCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획배부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적배부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'',style:'',title:'배부년월',nextTabID:'lc_distDegCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차수 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_distDegCd',style:'',submenuSize:'auto',title:'차수',mandatory:'true',ref:'data:dma_search.distDegCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox col3 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배부부서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"배부부서.xlsx", "sheetName":"배부부서", "type":"1"}',gridID:'gr_giveDept',gridUpYn:'N',grp:'grd_section1',id:'udc_excel1',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_giveDept',focusMode:'cell',id:'gr_giveDept',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:ontextimageclick':'scwin.gr_giveDept_ontextimageclick','ev:onafteredit':'scwin.gr_giveDept_onafteredit',autoFit:'allColumn','ev:oncellclick':'scwin.gr_giveDept_oncellclick','ev:onrowindexchange':'scwin.gr_giveDept_onrowindexchange',enterKeyMove:'editRight','ev:onbeforeedit':'scwin.gr_giveDept_onbeforeedit',keepDefaultColumnWidth:'true',gridName:'배부부서'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'배부부서',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'부서명',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'distAcctDeptCd',inputType:'textImage',style:'',value:'',width:'80',editFormat:'#####',dataType:'number',validateOnInput:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distAcctDeptNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_cancel',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',btnRowDelYn:'Y',gridID:'gr_giveDept',rowAddFunction:'scwin.f_AddRowRegion',style:'',rowDelFunction:'scwin.f_Delete',cancelFunction:'scwin.f_Cancel',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계정과목',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"계정과목.xlsx", "sheetName":"계정과목", "type":"1"}',gridID:'gr_mgntAcct',gridUpYn:'N',grp:'grd_section2',id:'udc_excel2',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_mgntAcct',focusMode:'cell',id:'gr_mgntAcct',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',autoFit:'allColumn','ev:onrowindexchange':'scwin.gr_mgntAcct_onrowindexchange',rowStatusWidth:'20',rowStatusVisible:'true',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'계정과목',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'계정과목명',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_popUpAutoCreation',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_PopUpAutoCreation'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계정항목',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"계정항목.xlsx", "sheetName":"계정항목", "type":"1"}',gridID:'gr_distDetail',gridUpYn:'N',grp:'grd_section3',id:'udc_excel3',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_distDetail',focusMode:'cell',id:'gr_distDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20',autoFit:'allColumn',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'계정항목',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'계정항목명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'배부기준',width:'180'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distStdCd',inputType:'select',style:'',value:'',width:'180',readOnly:'false',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:'',class:'tal'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOptionLabel:'선택',chooseOption:'true',allOption:'',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',id:'lc_distStdCd',visibleRowNum:'20',class:' w300',direction:'auto'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.f_DistBatch',style:'',id:'btn_distBatch',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부기준일괄등록'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_popUpDistChange',style:'',type:'button','ev:onclick':'scwin.f_PopUpDistChange',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부기준일괄변경'}]}]}]}]}]}]}]}]}]})