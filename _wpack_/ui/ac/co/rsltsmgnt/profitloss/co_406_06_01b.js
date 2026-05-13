/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_06_01b.xml 24865 2e002c3d30fd06f47fe03c4729f1108552a677ceca9b57d810fdfbfe4ba26c52 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'distClsCd',name:'결산구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distDegCd',name:'배부 및 집계',dataType:'text'}},{T:1,N:'w2:key',A:{id:'calRate',name:'비율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDd',name:'마감일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'공통1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'공통2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'공통3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'공통4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_distTarget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkId',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'작업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDd',name:'마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeStDtm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeEndDtm',name:'종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNo',name:'오류번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDesc',name:'작업설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempCount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.profitloss.ExecuteDistributionAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 손익자료집계
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_06_01b.jsp
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
 * 테스트데이터 
 *    1. 결산구분[실적], 배부및집계[배부1차], 배부년월[2020/01]
 * 수정이력 :
 *    - 2025-12-24      배기원    최초작성
 */

scwin.wrkNo = ""; // 작업구분코드
scwin.fromDate = ""; // 작업날짜

//배부년월 초기값
scwin.today = "";
scwin.closeYm = "";

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = " distYm:STRING(6)" // 배부년월
  //     + ",distClsCd:STRING(1)" // 결산구분
  //     + ",distDegCd:STRING(1)" // 배부차수구분코드
  //     + ",calRate:STRING";
  // ds_searchDistTarget.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_searchDistTarget.insertRow();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_distTarget.setNoResultMessageVisible(false);
  ds_distTarget.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_SetSrchDefault();
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [rd_distClsCd]);
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
 * 초기화 관련 변수 정의 함수
 */
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
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
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, lc_distDegCd, rd_distClsCd]);
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
    date = ica_fromDate.getValue() + "0101";
    // 실적일경우
  } else {
    if (ica_fromDate.getValue().length != 6) {
      await $c.win.alert($p, "배부년월은(는) 6자리수만큼 입력하십시오.");
      ica_fromDate.focus();
      return;
    }
    date = ica_fromDate.getValue() + "01";
  }
  ret = await $c.date.isDate($p, date);
  if (!ret) {
    await $c.win.alert($p, "올바른 배부년월을(를) 입력하십시오.");
    ica_fromDate.focus();
    return;
  }

  // 작업구분코드 및 날짜 세팅함수 호출
  if (!scwin.f_setWrkNoFromDate()) {
    return;
  }

  // var condition = "?closeYm=" + fromDate + "&closeDd=00&mgntNo=0";
  // condition += "&wrkNo=" + wrkNo;
  // ds_distTarget.DataID = "/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do" + condition;
  // ds_distTarget.undoAll();
  scwin.setInit();
  dma_search.set("closeYm", scwin.fromDate);
  dma_search.set("closeDd", "00");
  dma_search.set("mgntNo", "0");
  dma_search.set("wrkNo", scwin.wrkNo);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_distTarget.setNoResultMessageVisible(true);
  ds_distTarget.setJSON(e.responseJSON.GAUCE);
  let rowCnt = ds_distTarget.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_distTarget.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 마감체크
 */
scwin.f_JobCloseYN = function () {
  // 작업구분코드 및 날짜 세팅함수 호출
  if (!scwin.f_setWrkNoFromDate()) {
    return;
  }
  return true;
};

/**
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 */
scwin.f_setWrkNoFromDate = function () {
  if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "1") {
    scwin.wrkNo = "CO41"; //손익보고계획
    scwin.fromDate = ica_fromDate.getValue().trim() + "00";
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "5") {
    scwin.wrkNo = "CO43"; //손익집계
    scwin.fromDate = ica_fromDate.getValue().trim();
  } else if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "2") {
    scwin.wrkNo = "CO44"; //손익 계획 배부1차
    scwin.fromDate = ica_fromDate.getValue().trim() + "00";
  } else if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "3") {
    scwin.wrkNo = "CO45"; //손익 계획 배부2차
    scwin.fromDate = ica_fromDate.getValue().trim() + "00";
  } else if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "4") {
    scwin.wrkNo = "CO46"; // 손익 계획 배부3차
    scwin.fromDate = ica_fromDate.getValue().trim() + "00";
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "2") {
    scwin.wrkNo = "CO47"; //손익 실적 배부1차
    scwin.fromDate = ica_fromDate.getValue().trim();
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "3") {
    scwin.wrkNo = "CO48"; //손익 실적 배부2차
    scwin.fromDate = ica_fromDate.getValue().trim();
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "4") {
    scwin.wrkNo = "CO49"; //손익 실적 배부3차
    scwin.fromDate = ica_fromDate.getValue().trim();
  } else {
    $c.win.alert($p, "잘못된 조회 조건을 선택하셨습니다.<BR>조회 조건을 확인하시기 바랍니다.");
    return false;
  }
  return true;
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  // 필수조건 확인
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, lc_distDegCd, rd_distClsCd]);
  if (!ret) {
    return false;
  }

  // 마감여부 확인(2006.05.03) 마감여부를 체크 하지 않음 주석처리 되어 있음.
  // wrkNo(마감구분코드)fromDate(년월)의 값을 세팅하기 위해서 호출은 해야함.
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }
  if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "5") {
    if ($c.gus.cfIsNull($p, ed_calRt.getValue())) {
      await $c.win.alert($p, "손익집계실행시 비율은 필수입력입니다.");
      ed_calRt.focus();
      return;
    }
  }
  if ($c.gus.cfIsNull($p, lc_distDegCd.getValue())) {
    await $c.win.alert($p, "실행시는 전체 조건을 선택하실수 없습니다.");
    lc_distDegCd.focus();
    return;
  }
  if (await $c.win.confirm($p, "실행하시겠습니까?")) {
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
    ds_distTarget.reform();
    await $c.gus.cfAlertMsg($p, "정상적으로 실행되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 배부처리시 실행한적이 있는지 여부 확인
 * ASIS 주석처리
 */
scwin.f_distCount = async function () {
  var ebcId = "";
  var queryId = "";
  var param1 = rd_distClsCd.getValue(); // 결산구분
  var param2 = lc_distDegCd.getValue(); // 차수
  var param3 = scwin.fromDate; // 배부년월(계획은 년도+00, 실적은 입력된 년월임)

  if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "2") {
    ebcId = "DistributionEBC";
    queryId = "retrieveDistCount";
  } else if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "3") {
    ebcId = "DistributionEBC";
    queryId = "retrieveDistCount";
  } else if (rd_distClsCd.getValue() == "1" && lc_distDegCd.getValue() == "4") {
    ebcId = "DistributionEBC";
    queryId = "retrieveDistCount";
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "2") {
    ebcId = "DistributionEBC";
    queryId = "retrieveDistCount";
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "3") {
    ebcId = "DistributionEBC";
    queryId = "retrieveDistCount";
  } else if (rd_distClsCd.getValue() == "2" && lc_distDegCd.getValue() == "4") {
    ebcId = "DistributionEBC";
    queryId = "retrieveDistCount";
  }
  // ds_tempCount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + ebcId +
  //     "&queryId=" + queryId +
  //     "&param1=" + param1 +
  //     "&param2=" + param2 +
  //     "&param3=" + param3 +
  //     "&param4=" + param4;
  // ds_tempCount.undoAll();

  dma_search.set("sysCd", ebcId);
  dma_search.set("queryId", queryId);
  dma_search.set("param1", param1);
  dma_search.set("param2", param2);
  dma_search.set("param3", param3);
  ds_tempCount.removeAll();
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup);
  ds_tempCount.setJSON(ret.responseJSON.GAUCE);
  ds_tempCount.reform();
};

/**
 * 엑셀저장
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
 * 결산구분 변경 이벤트
 */
scwin.rd_distClsCd_onchange = function (info) {
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결산구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_distClsCd',ref:'data:dma_search.distClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'결산구분',mandatory:'true','ev:onchange':'scwin.rd_distClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_calRt',class:' w100',title:'비율',maxlength:'6.4',trim:'true',dataType:'float',displayFormat:'#,###.####',applyFormat:'all',ref:'data:dma_search.calRate',allowChar:'0-9.',adjustMaxLength:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'%',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부 및 집계',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_distDegCd',mandatory:'true',ref:'data:dma_search.distDegCd',style:'',submenuSize:'auto',title:'배부 및 집계'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획마감'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부1차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부2차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부3차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'손익집계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'cal w80',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.distYm',style:'',title:'배부년월'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'배부처리',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"배부처리내역.xlsx", "sheetName":"배부처리내역", "type":"1"}',gridID:'gr_distTarget',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_distTarget',style:'',autoFit:'allColumn',id:'gr_distTarget',visibleRowNum:'16',class:'wq_gvw',readOnly:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column1',value:'작업자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'시작일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'종료일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column13',value:'작업설명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column11',value:'오류번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'작업자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'마감년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'마감일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'작업번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'관리번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'wrkId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'closeStDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'closeEndDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'wrkDesc',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'errNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'closeYm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'closeDd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',displayFormatter:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'실행'}]}]}]}]}]}]}]}]}]})