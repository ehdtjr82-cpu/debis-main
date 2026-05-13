/*amd /ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_04_01b.xml 36561 ced153852131e53c6f7819ebf15278a3cbaf09665a1310f47039edf734124d17 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnYm',name:'거래년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text',defaultValue:'내부매출'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befMm',name:'전월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMm',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'incrDecr',name:'증감',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn2',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text',defaultValue:'내부매입'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befMm',name:'전월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMm',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'incrDecr',name:'증감',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.internaltxnmgnt.RetrieveInternalTransactionDecisionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txn","key":"OUT_DS1"},{"id":"ds_txn2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_txn","key":"OUT_DS1"},{"id":"ds_txn2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 내부거래확인
 * 메뉴경로 : 회계/관리회계/실적관리/내부거래관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/internaltxnmgnt/co_401_04_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2026-01-02
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 : 
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 테스트데이터 
 *    1. 회사코드[000], 거래년월[2025/05], 부서[00050]
 *    2. co_401_02_02p용 : 회사코드[000], 거래년월[2014/05], 부서[00049], 청구번호[0009595163]
 * 수정이력 :
 *    - 2026-01-02      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = "";
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;
scwin.acctDeptCd;
scwin.acctDeptNm;
scwin.strBasSdId = "/ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_04_02p.xml"; //상세주소
scwin.initJson = {}; //초기세팅값(TOBE)
//그리드 더블클릭시-상세보기팝업 클릭을 위한 그리드변수 값
scwin.GRID_NM;
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.acctDeptCd = $c.gus.cfIsNull($p, scwin.memJson["acctDeptCd"]) ? "" : scwin.memJson["acctDeptCd"]; //사용자소속부서코드
  scwin.acctDeptNm = $c.gus.cfIsNull($p, scwin.memJson["acctDeptNm"]) ? "" : scwin.memJson["acctDeptNm"]; //사용자소속부서
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
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_txn.setNoResultMessageVisible(false);
  //gr_txn.setColumnColor("acctDeptNm", "#007FFF");
  ds_txn.removeAll();
  gr_txn2.setNoResultMessageVisible(false);
  //gr_txn2.setColumnColor("acctDeptNm", "#007FFF");
  ds_txn2.removeAll();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_HeaderCreate();
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_bilg, [ed_coCd, ed_coNm, ica_inqYm]);
  //dma_search.setJSON(scwin.initJson);
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  ed_acctDeptCd.setValue(scwin.acctDeptCd);
  ed_acctDeptNm.setValue(scwin.acctDeptNm);
  //부서명 세션에 있으니 아래팝업 호출안해도 됨
  // scwin.f_openPopUp('T');

  let today = $c.date.getServerDateTime($p);
  let closeYm = today.substring(0, 6);
  ica_inqYm.setValue(closeYm);
  ica_inqYm.focus();
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "txnYm:STRING"
  //     + ",acctDeptCd:STRING"
  //     + ",aggrDeptYn:DECIMAL";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};
/**
 * 증감 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate2 = function () {
  // var GAUCE_DATASET_HEADER = "befMm:DECIMAL"
  //     + ",thisMm:DECIMALA"
  //     + ",incrDecr:DECIMAL";
  // ds_txn3.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_txn3.insertRow();
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [tb_bilg]);
  if (!ret) {
    return false;
  }
  if (ica_inqYm.getValue().length != 6) {
    await $c.win.alert($p, "거래년월은(는) 6자리수만큼 입력하십시오.");
    ica_inqYm.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_inqYm.getValue() + "01");
  if (!ret) {
    await $c.win.alert($p, "거래년월은(는) 유효한 날짜형식이 아닙니다.");
    ica_inqYm.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_txn.setNoResultMessageVisible(true);
  gr_txn2.setNoResultMessageVisible(true);
  let rowCnt = ds_txn.getRowCount();
  let rowCnt2 = ds_txn2.getRowCount();

  //증감 = 내부매출 - 내부매입
  let befMm = Number(gr_txn.getFooterData("befMm_s1") || 0) - Number(gr_txn2.getFooterData("befMm_s2") || 0);
  let thisMm = Number(gr_txn.getFooterData("thisMm_s1") || 0) - Number(gr_txn2.getFooterData("thisMm_s2") || 0);
  let incrDecr = Number(gr_txn.getFooterData("incrDecr_s1") || 0) - Number(gr_txn2.getFooterData("incrDecr_s2") || 0);
  gr_txn3.setFooterData("befMm_s3", befMm);
  gr_txn3.setFooterData("thisMm_s3", thisMm);
  gr_txn3.setFooterData("incrDecr_s3", incrDecr);
  if (rowCnt > 0) {
    scwin.GRID_NM = "gr_txn";
    gr_txn.setFocusedCell(0, 0);
    gr_txn2.setFocusedCell(0, 0);
  } else if (rowCnt2 > 0) {
    scwin.GRID_NM = "gr_txn2";
    gr_txn2.setFocusedCell(0, 0);
  } else {
    //조회결과가 존재하지 않습니다
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 상세버튼 클릭
 */
scwin.btn_detail_onclick = function (e) {
  scwin.f_Detail("-1");
};

/**
 * 상세(팝업호출)
 */
scwin.f_Detail = function (row) {
  //asis 소스
  // var sFeatures = "dialogWidth:825px; dialogHeight:570px;"
  //     + "status:No; scroll:No";

  // var txnEndDt = ica_inqYm.getValue() + "31";
  // var txnStDt = ica_inqYm.getValue() + "01";
  // var acctDeptCd = ds_search.getCellData(ds_search.RowPosition, "acctDeptCd");
  // var internalTxnStsCd = "scwin.ACConstants.INTERNAL_TXN_DCSN";
  // var scClsCd = 1;
  // var aggrDeptYn = ds_search.getCellData(ds_search.RowPosition, "aggrDeptYn");
  // var bilgAcctDeptCd = "";
  // var pchsAcctDeptCd = "";

  // if (GRID_NM == "gr_txn") {
  //     scClsCd = 1;
  //     if (aggrDeptYn == 1) {
  //         bilgAcctDeptCd = ds_txn.getCellData(ds_txn.RowPosition, "acctDeptCd");
  //         pchsAcctDeptCd = "";
  //     } else {
  //         bilgAcctDeptCd = "";
  //         pchsAcctDeptCd = ds_txn.getCellData(ds_txn.RowPosition, "acctDeptCd");
  //     }

  // } else if (GRID_NM == "gr_txn2") {
  //     scClsCd = 2;
  //     if (aggrDeptYn == 1) {
  //         bilgAcctDeptCd = "";
  //         pchsAcctDeptCd = ds_txn2.getCellData(ds_txn2.RowPosition, "acctDeptCd");
  //     } else {
  //         bilgAcctDeptCd = ds_txn2.getCellData(ds_txn2.RowPosition, "acctDeptCd");
  //         pchsAcctDeptCd = "";
  //     }
  // }

  // sURL = "scwin.strBasSdId?txnStDt=" + txnStDt +
  //     "&txnEndDt=" + txnEndDt +
  //     "&acctDeptCd=" + acctDeptCd +
  //     "&internalTxnStsCd=" + internalTxnStsCd +
  //     "&scClsCd=" + scClsCd +
  //     "&aggrDeptYn=" + aggrDeptYn +
  //     "&bilgAcctDeptCd=" + bilgAcctDeptCd +
  //     "&pchsAcctDeptCd=" + pchsAcctDeptCd;

  // window.showModalDialog(sURL, window, sFeatures);

  let txnEndDt = ica_inqYm.getValue() + "31";
  let txnStDt = ica_inqYm.getValue() + "01";
  let acctDeptCd = ed_acctDeptCd.getValue();
  let internalTxnStsCd = ACConstants.INTERNAL_TXN_DCSN;
  let scClsCd = 1;
  let aggrDeptYn = dma_search.get("aggrDeptYn");
  let bilgAcctDeptCd = "";
  let pchsAcctDeptCd = "";
  if (scwin.GRID_NM == "gr_txn") {
    scClsCd = 1;
    if (aggrDeptYn == 1) {
      bilgAcctDeptCd = ds_txn.getCellData(row == "-1" ? ds_txn.getRowPosition() : row, "acctDeptCd");
      pchsAcctDeptCd = "";
    } else {
      bilgAcctDeptCd = "";
      pchsAcctDeptCd = ds_txn.getCellData(row == "-1" ? ds_txn.getRowPosition() : row, "acctDeptCd");
    }
  } else if (scwin.GRID_NM == "gr_txn2") {
    scClsCd = 2;
    if (aggrDeptYn == 1) {
      bilgAcctDeptCd = "";
      pchsAcctDeptCd = ds_txn2.getCellData(row == "-1" ? ds_txn2.getRowPosition() : row, "acctDeptCd");
    } else {
      bilgAcctDeptCd = ds_txn2.getCellData(row == "-1" ? ds_txn2.getRowPosition() : row, "acctDeptCd");
      pchsAcctDeptCd = "";
    }
  }
  let opts = {};
  let data = {};
  //팝업파라메터 
  data.txnStDt = txnStDt;
  data.txnEndDt = txnEndDt;
  data.acctDeptCd = acctDeptCd;
  data.internalTxnStsCd = internalTxnStsCd;
  data.scClsCd = scClsCd;
  data.aggrDeptYn = aggrDeptYn;
  data.bilgAcctDeptCd = bilgAcctDeptCd;
  data.pchsAcctDeptCd = pchsAcctDeptCd;

  //console.log("팝업 파라메터 : "+JSON.stringify(data));

  opts.width = "1024";
  opts.height = "760";
  opts.id = "popDetail";
  opts.title = "내부거래확인";
  opts.popupName = "내부거래확인";
  opts.scrollbars = false;
  opts.type = "browserPopup";
  $c.win.openPopup($p, scwin.strBasSdId, opts, data);
};

/**
 * 매입부서 팝업
 */
scwin.f_openPopUp = function (check) {
  //asis 소스
  // var rtnList = new Array();
  // ed_acctDeptNm.value = "";
  // var param = scwin.DDate.getDate("") + ",,,,,,,,," + ed_coCd.getValue();
  // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.value, check, null
  //     , null, null, null, param, "410", null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") {
  //         $c.gus.cfInitHidVal(ed_acctDeptCd);
  //         return;
  //     }
  //     ed_acctDeptCd.setValue = rtnList[0]; //귀속코드
  //     ed_acctDeptNm.value = rtnList[1]; //귀속명
  //     ds_search.setCellData(ds_search.RowPosition, "aggrDeptYn", rtnList[8]); //집계부서여부

  // } else {
  //     ed_acctDeptCd.setValue = "";
  //     ed_acctDeptNm.value = "";
  // }

  let param = $c.date.getServerDateTime($p) + ",,,,,,,,," + ed_coCd.getValue();
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_acctDeptCd.setValue(ret[0]); //부서코드
    ed_acctDeptNm.setValue(ret[1]); //부서명
    ed_acctDeptCd.hidVal = ret[0]; //히든값
  } else {
    ed_acctDeptCd.setValue(""); //부서코드
    ed_acctDeptNm.setValue(""); //부서명
    ed_acctDeptCd.hidVal = ""; //히든값
  }
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
scwin.f_grdHeiht = function (gridNm, size) {
  // var strHeight = gridNm.style.height;
  // var intHeight = parseInt(strHeight.replace("px", ""));
  // intHeight = intHeight + size;
  // if (intHeight > 150) {
  //     gridNm.style.height = intHeight + "px";
  // }
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
scwin.f_runExcel = function (varGrNm) {
  // totCnt = ds_txn.getRowCount();
  // sheetTitle = "내부매출현황";
  // if (totCnt != 0) {
  //     cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
  //     if (cfrm) {
  //         $c.data.downloadGridViewExcel(varGrNm, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
  //     }
  // } else {
  //     $c.win.alert(MSG_CM_WRN_002);
  // }
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
scwin.f_runExcel2 = function (varGrNm) {
  // totCnt2 = ds_txn2.getRowCount();
  // sheetTitle2 = "내부매출현황";
  // if (totCnt2 != 0) {
  //     cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
  //     if (cfrm) {
  //         $c.data.downloadGridViewExcel(varGrNm, sheetTitle2, sheetTitle2 + ".xls", 4 + 8 + 16);
  //     }
  // } else {
  //     $c.win.alert(MSG_CM_WRN_002);
  // }
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
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
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
 * 귀속코드(조회) 팝업 호출
 */
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  if (ed_acctDeptCd.hidVal != ed_acctDeptCd.getValue()) {
    ed_acctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp(close);
};
scwin.udc_acctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_acctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    scwin.f_openPopUp("T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_txn_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.GRID_NM = "gr_txn";
  //상세조회팝업
  if (columnId == "acctDeptNm") {
    scwin.f_Detail(rowIndex);
  }
};
/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_txn2_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.GRID_NM = "gr_txn2";
  //상세조회팝업
  if (columnId == "acctDeptNm") {
    scwin.f_Detail(rowIndex);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'#mf_tac_layout_contents_co_401_04_01b_body_gr_txn3_scrollY_div{-ms-overflow-style:none!important;scrollbar-width:none!important;display:none!important;background-color:var(--dw-bg-type4)!important}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_bilg',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_inqYm',mandatory:'true',objType:'data',ref:'data:dma_search.txnYm',style:'',title:'거래년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctDeptCd',code:'acctDeptCd',codeId:'ed_acctDeptCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCd_onviewchangeCodeEvent',id:'udc_acctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_acctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_acctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo6',style:'',validExpCode:'부서',validTitle:'부서'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부매출현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"내부매출현황.xlsx", "sheetName":"내부매출현황", "type":"1", "hiddenVisible":false, "useStyle":true}',gridID:'gr_txn',gridUpYn:'N',grp:'grd_section1',id:'udc_excel1',style:'',templateYn:'N',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_txn',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_txn',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_txn_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'gubun_h1',value:'구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptCd_h1',value:'부서',class:'col-type2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'220',inputType:'text',id:'acctDeptNm_h1',value:'부서',class:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'befMm_h1',value:'전월',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'thisMm_h1',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'incrDecr_h1',value:'증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'gubun',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptCd',blockSelect:'false',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'220',inputType:'link',id:'acctDeptNm',blockSelect:'false',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'180',inputType:'text',id:'befMm',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',id:'thisMm',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',id:'incrDecr',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'gubun_s1',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'acctDeptNm_s1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'expression',style:'',id:'befMm_s1',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("befMm")',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'expression',style:'',id:'thisMm_s1',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("thisMm")',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'expression',style:'',id:'incrDecr_s1',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("incrDecr")',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부매입현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"내부매입현황.xlsx", "sheetName":"내부매입현황", "type":"1", "hiddenVisible":false, "useStyle":true}',gridID:'gr_txn2',gridUpYn:'N',grp:'grd_section2',id:'udc_excel2',style:'',templateYn:'N',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_txn2',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_txn2',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_txn2_oncellclick',syncScroll:'true',syncScrollId:'gr_txn3',hideHeader:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'gubun_h2',value:'구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptCd_h2',value:'부서',class:'col-type2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'220',inputType:'text',id:'acctDeptNm_h2',value:'부서',class:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'befMm_h2',value:'전월',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'thisMm_h2',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'incrDecr_h2',value:'증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'gubun',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptCd',blockSelect:'false',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'220',inputType:'link',id:'acctDeptNm',blockSelect:'false',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'180',inputType:'text',id:'befMm',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',id:'thisMm',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',id:'incrDecr',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'gubun_s2',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd_s2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'acctDeptNm_s2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'expression',style:'',id:'befMm_s2',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("befMm")',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'expression',style:'',id:'thisMm_s2',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("thisMm")',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'expression',style:'',id:'incrDecr_s2',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("incrDecr")',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}}]}]}]},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_txn2',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_txn3',visibleRowNum:'0',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_txn2_oncellclick',syncScrollId:'gr_txn3',syncScroll:'false',hideHeader:'true',overflowY:'hidden'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'gubun_h2',value:'구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptCd_h2',value:'부서',class:'col-type2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'220',inputType:'text',id:'acctDeptNm_h2',value:'부서',class:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'befMm_h2',value:'전월',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'thisMm_h2',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'incrDecr_h2',value:'증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'gubun',blockSelect:'false',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'acctDeptCd',blockSelect:'false',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'220',inputType:'link',id:'acctDeptNm',blockSelect:'false',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'180',inputType:'text',id:'befMm',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',id:'thisMm',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',id:'incrDecr',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'gubun_h3',value:'증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd_h3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'acctDeptNm_h3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',style:'',id:'befMm_s3',value:'0',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',style:'',id:'thisMm_s3',value:'0',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'180',inputType:'text',style:'',id:'incrDecr_s3',value:'0',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_detail',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]}]}]}]}]}]}]}]})