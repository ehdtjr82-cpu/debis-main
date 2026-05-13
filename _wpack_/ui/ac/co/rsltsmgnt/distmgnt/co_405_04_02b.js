/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_04_02b.xml 27183 3b23d6e27b50624d3d5b5706d83d4a939805c4a9a005973f09cb9070f9147529 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distClsCd',name:'결산구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'공통1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'공통2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'공통3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'공통4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_distTarget',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAcctDeptCd',name:'배부귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAcctDeptNm',name:'배부귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distStdCd',name:'배부기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distTrgtAmt',name:'배부대상금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distClsCd',name:'배부구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.distmgnt.RetrieveDistributionTargetAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_distTarget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_distTarget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부대상금액조회
 * 메뉴경로 : 회계/관리회계/실적관리/배부관리/배부결과조회
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_04_02b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-18
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
 *    1. 회사코드[000], 결산구분[계획], 차수[3차], 배부년월[202001], 버전[002]
 * 수정이력 :
 *    - 2025-12-18      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = "";

//전역변수
scwin.fromDate = ""; //작업날짜

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
scwin.initJson = ""; //초기세팅값(TOBE)
scwin.closeYm = "";

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
    compID: "gr_distTarget:distStdCd"
  } //배부기준코드
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeCO024.sort("cd", 0);
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
  gr_distTarget.setNoResultMessageVisible(false);
  ds_distTarget.reform();
  ds_distTarget.removeAll();
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
  scwin.closeYm = $c.date.getServerDateTime($p).substring(0, 6);
  ica_fromDate.setValue(scwin.closeYm);
  rd_distClsCd.setValue("2");
  lc_distDegCd.setSelectedIndex(0);
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
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, rd_distClsCd, lc_version, ed_coCd]);
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
  gr_distTarget.setNoResultMessageVisible(true);
  let rowCnt = ds_distTarget.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_distTarget.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};

// scwin.sbm_retrieve_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg)
// };

/**
 * 엑셀 파일 다운로드
 */
scwin.f_Export = async function () {
  // var objGridName = eval("gr_distTarget");
  // if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
  //     var exportFileName = "배부대상액조회_" + ed_FromDate.getValue().trim() + "_ver_" + acb_version.getValue();
  //     $c.data.downloadGridViewExcel(objGridName, "배부대상액조회", exportFileName, 8 + 16);
  // }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let sheetTitle = "배부대상액조회";
    let options = {
      fileName: sheetTitle + "_" + ica_fromDate.getValue() + "_ver_" + lc_version.getValue() + ".xlsx",
      sheetName: sheetTitle,
      type: "1",
      headerColor: "#d9d9d9",
      //"#E8E8E8", //연한회색 #33CCCC
      hiddenVisible: "true",
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
    $c.data.downloadGridViewExcel($p, gr_distTarget, options);
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
  if ($c.gus.cfIsNull($p, scwin.initJson)) {
    scwin.initJson = dma_search.getJSON();
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 25%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_distClsCd',mandatory:'true',ref:'data:dma_search.distClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'결산구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차수 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:' w120',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_distDegCd',mandatory:'true',ref:'data:dma_search.distDegCd',style:'',submenuSize:'auto',title:'차수'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.distYm',style:'',title:'배부년월','ev:onblur':'scwin.ica_fromDate_onblur',nextTabID:'lc_version'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_version',mandatory:'true',ref:'data:dma_search.ver',style:'',submenuSize:'auto',tabIndex:'-1',title:'버전',validExp:'버전:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배부대상금액 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Export',gridID:'gr_distTarget',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_distTarget',focusMode:'cell',id:'gr_distTarget',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',gridName:'배부대상액'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'차수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'배부귀속부서코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'배부귀속부서명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'계정코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'계정명',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'배부기준코드',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'배부대상금액',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'버전',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'배부년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'배부구분코드',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'distDegCd',inputType:'text',name:'차수',style:'',textAlign:'center',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distAcctDeptCd',inputType:'text',name:'배부귀속부서코드',style:'',textAlign:'center',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distAcctDeptNm',inputType:'text',name:'배부귀속부서명',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',name:'계정코드',style:'',textAlign:'center',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',name:'계정명',style:'',textAlign:'left',value:'',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distStdCd',inputType:'select',name:'배부기준코드',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'distTrgtAmt',inputType:'text',name:'배부대상금액',style:'',textAlign:'right',value:'',width:'160',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ver',value:'',displayMode:'label',hidden:'true',hiddenCol:'true',name:'버전'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distYm',inputType:'text',name:'배부년월',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distClsCd',inputType:'text',name:'배부구분코드',style:'',textAlign:'center',value:'',width:'140'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'distDegCd_s1',inputType:'text',name:'차수',style:'',textAlign:'center',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distAcctDeptCd_s1',inputType:'text',name:'배부귀속부서코드',style:'',textAlign:'center',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distAcctDeptNm_s1',inputType:'text',name:'배부귀속부서명',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd_s1',inputType:'text',name:'계정코드',style:'',textAlign:'center',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm_s1',inputType:'text',name:'계정명',style:'',textAlign:'center',value:'합계',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distStdCd_s1',inputType:'text',name:'배부기준코드',style:'',textAlign:'left',value:'',width:'140'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'SUM("distTrgtAmt")',id:'distTrgtAmt_s1',inputType:'expression',name:'배부대상금액',style:'',textAlign:'right',value:'',width:'160'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ver_s1',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distYm_s1',inputType:'text',name:'배부년월',style:'',textAlign:'center',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',hiddenCol:'true',id:'distClsCd_s1',inputType:'text',name:'배부구분코드',style:'',textAlign:'center',value:'',width:'140'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]})