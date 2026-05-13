/*amd /ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_02p.xml 46311 955df1f49bac683a08a35c630fcf5bd990b45963e43c28063df7ad232f29a9a0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgNo',name:'청구번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'내부거래청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptCd',name:'매입귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptNm',name:'매입귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'LINE거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'운송화물구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입수출내수구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsCd',name:'회계매입매출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsNm',name:'회계매입매출구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeCd',name:'노선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeNm',name:'노선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsCd',name:'노선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsNm',name:'노선구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostYn',name:'표준원가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'내부단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnStsCd',name:'내부거래상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realTxnDt',name:'실거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'FBP,MB의배차주정보_SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizDom',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'bizDomNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizDomCd',name:'upperBizDomCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizDomNm',name:'upperBizDomNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'useYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'date'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'date'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'checkLevel',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_bizDom',action:'/ac.co.stdinfomgnt.RetrieveBusinessDomainCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_bizDom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.internaltxnmgnt.RetrieveInternalTransactionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txn","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.internaltxnmgnt.SaveInternalTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.co.rsltsmgnt.internaltxnmgnt.DeleteInternalTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 내부거래상세
 * 메뉴경로 : 회계/관리회계/실적관리/내부거래관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_02p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2026-01-05
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
 *    5. 2026-05-12 T-7960 결함 수정 건(data:ds_txn.ctrtClntNm >> AS-IS 버그인데, 결함으로 인한 동기화 처리)
 * 수정이력 :
 *    - 2026-01-05      배기원    최초작성
 */
//hidden 값
scwin.hid_txnDt = ""; //거래일자
scwin.wrkNo = ""; //작업구분코드
scwin.fromDate = ""; //년월
scwin.isClose = ""; //마감체크(tobe 추가)
scwin.today = ""; //오늘날짜

scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.today = $c.date.getServerDateTime($p);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [udc_pchsAcctDeptCd, udc_reqClntNo]);
  $c.gus.cfDisableObjects($p, [btn_save, btn_delete, btn_update]);
  ds_txn.reform();
  ds_txn.removeAll();
  scwin.f_clear();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = async function () {
  //타이틀 추가
  $c.data.setPopupTitle($p, "내부거래상세조회");
  await scwin.f_HeaderCreate();
  ed_schBilgNo.setValue($c.data.getParameter($p, "internalTxnBilgNo"));
  await scwin.f_Retrieve();
  ed_schBilgNo.focus();
  // $c.gus.cfDisableKeyData();
  // //UDC disable
  // $c.gus.cfDisableObjects([udc_pchsAcctDeptCd, udc_reqClntNo]);

  let ret;
  ret = await scwin.f_JobCloseYN2();
  // 해당 거래일자가 마감이면 버튼 비활성화 시킨다.
  if (!ret) {
    $c.gus.cfDisableObjects($p, [btn_save, btn_delete, btn_update]);
  }
  //내부거래상태코드 상태가 등록이 아니면 버튼 비활성화시킨다.
  if (ds_txn.getCellData(0, "internalTxnStsCd") != "0") {
    $c.gus.cfDisableObjects($p, [btn_save, btn_delete, btn_update]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_save, btn_delete, btn_update]);
  }
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [tb_search]);
  if (!ret) {
    return false;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_txn.getRowCount() > 0) {
    scwin.f_fill();
    ds_txn.setRowPosition(0, event);
    scwin.hid_txnDt = ica_txnDt.getValue().trim().substring(0, 6);

    // 내부거래상태코드 상태가 등록인 경우 활성화
    if (ds_txn.getCellData(0, "internalTxnStsCd") == "0") {
      $c.gus.cfEnableObjects($p, [btn_save, btn_delete, btn_update]);
    }
  } else {
    //조회결과가 존재하지 않습니다
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사업영역 가져오는걸로 사용
 */
scwin.f_HeaderCreate = async function () {
  // var GAUCE_DATASET_HEADER = "bilgNo:STRING";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();

  ds_bizDom.removeAll();
  await $c.sbm.execute($p, sbm_bizDom, {
    "useYn": 1
  });
  ds_bizDom.reform();
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }

  //    if (ds_txn.isUpdated == false) {
  // 변경된 사항이 있는지 확인.
  if (ds_txn.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["내부거래상세정보"]);
    return;
  }

  //Mandatory 항목이 누락하지 않았는지 체크한다.
  ret = await $c.gus.cfValidate($p, [tb_bilg]);
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_save]);
    //UDC disable
    $c.gus.cfDisableObjects($p, [udc_pchsAcctDeptCd, udc_reqClntNo]);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 수정버튼
 */
scwin.f_Update = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [udc_pchsAcctDeptCd, udc_reqClntNo]);
  $c.gus.cfDisableBtn($p, [btn_update]);
};

/**
 * 삭제버튼
 */
scwin.f_Delete = async function () {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }

  // if (ds_txn.getRowCount() == 0 || ds_txn.RowStatus(ds_txn.getRowPosition) == 1) {
  if (ds_txn.getRowCount() == 0) {
    await $c.win.alert($p, "조회후 삭제가능합니다.");
    return;
  } else {
    if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
      // ds_txn.deleteRow(ds_txn.getRowPosition());
      // $c.sbm.execute(sbm_deleteTxn);
      ds_txn.modifyRowStatus(0, "D");
      $c.sbm.execute($p, sbm_delete);
    }
  }
};
scwin.sbm_delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ed_schBilgNo.setValue("");
    scwin.setInit();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableObjects($p, [udc_pchsAcctDeptCd, udc_reqClntNo]);
    $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
    ed_schBilgNo.focus();
  }
};
scwin.sbm_deletee_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 부서팝업
 */
scwin.f_openDeptPopUp = function (check) {
  //asis 소스
  // var rtnList = new Array();
  // ed_pchsAcctDeptNm.value = "";
  // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', ed_pchsAcctDeptCd.getValue().trim(), '', check, null
  //     , null, null, null, "scwin.DDate.getDate("")", "410", null, null, null);
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") {
  //         $c.gus.cfInitHidVal(ed_pchsAcctDeptCd);
  //         return;
  //     }
  //     ed_pchsAcctDeptCd.setValue = rtnList[0]; //귀속코드
  //     ed_pchsAcctDeptNm.value = rtnList[1]; //귀속명
  // } else {
  //     ed_pchsAcctDeptCd.setValue = "";
  //     ed_pchsAcctDeptNm.value = "";
  // }
  let param = scwin.today;
  udc_pchsAcctDeptCd.cfCommonPopUp(scwin.udc_pchsAcctDeptCd_callBackFunc, ed_pchsAcctDeptCd.getValue(), ed_pchsAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_pchsAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_pchsAcctDeptCd.setValue(ret[0]); //부서코드
    ed_pchsAcctDeptNm.setValue(ret[1]); //부서명
    ed_pchsAcctDeptCd.hidVal = ret[0]; //히든값
  } else {
    ed_pchsAcctDeptCd.setValue(""); //부서코드
    ed_pchsAcctDeptNm.setValue(""); //부서명
    ed_pchsAcctDeptCd.hidVal = ""; //히든값
  }
};

/**
 * 거래처 팝업
 */
scwin.f_openClntPopUp = function (check) {
  //asis 소스
  // var rtnList = new Array();
  // ed_reqClntNm.value = "";
  // rtnList = cfCommonPopUp('retrieveClntList', ed_reqClntNo.getValue().trim(), '', check, null
  //     , null, null, null, null, "410", null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") {
  //         $c.gus.cfInitHidVal(ed_reqClntNo);
  //         return;
  //     }
  //     ed_reqClntNo.setValue = rtnList[0];
  //     ed_reqClntNm.value = rtnList[1];
  // } else {
  //     ed_reqClntNo.setValue = "";
  //     ed_reqClntNm.value = "";
  // }
  udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_callBackFunc, ed_reqClntNo.getValue(), ed_reqClntNm.getValue(), check, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 거래처코드 팝업 callBack
 */
scwin.udc_reqClntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_reqClntNo.setValue(ret[0]); //거래처코드
    ed_reqClntNm.setValue(ret[1]); //거래처명
    ed_reqClntNo.hidVal = ret[0]; //히든값
  } else {
    ed_reqClntNo.setValue(""); //거래처코드
    ed_reqClntNm.setValue(""); //거래처명
    ed_reqClntNo.hidVal = ""; //히든값
  }
};

/**
 * clear data
 * TOBE 데이터리스트로 매핑되어 있어 사용안함
 */
scwin.f_clear = function () {
  bilgAcctDeptNm.setValue("");
  // internalTxnBilgNo.setValue("");
  // regDt.setValue("");
  // regNm.setValue("");
  // reqClntNm.setValue("");
  // bilgClntNm.setValue("");
  // ctrtClntNm.setValue("");
  // lineClntNm.setValue("");
  // copCoClntNm.setValue("");
  // commNm.setValue("");
  // transCargoClsNm.setValue("");
  // eqCd.setValue("");
  // lobranNm.setValue("");
  // vsslNm.setValue("");
  // portcnt.setValue("");
  // stdWrkPathNm.setValue("");
  // wrkStpNm.setValue("");
  // impExpDomesticClsNm.setValue("");
  // routeNm.setValue("");
  // routeClsNm.setValue("");
  // accountPchsSellClsNm.setValue("");
  stndPcostYn.setValue("");
};

/**
 * f_fill data
 * TOBE 데이터리스트로 매핑되어 있어 사용안함
 */
scwin.f_fill = function () {
  bilgAcctDeptNm.setValue(ds_txn.getCellData(0, "bilgAcctDeptCd") + " " + ds_txn.getCellData(0, "bilgAcctDeptNm"));

  // internalTxnBilgNo.setValue(ds_txn.getCellData(0, "internalTxnBilgNo"));
  // regDt.setValue(ds_txn.getCellData(0, "regDt"));
  // regNm.setValue(ds_txn.getCellData(0, "regNm"));
  // reqClntNm.setValue(ds_txn.getCellData(0, "reqClntNm"));
  // bilgClntNm.setValue(ds_txn.getCellData(0, "bilgClntNm"));
  // ctrtClntNm.setValue(ds_txn.getCellData(0, "ctrtClntNm"));
  // lineClntNm.setValue(ds_txn.getCellData(0, "lineClntNm"));
  // copCoClntNm.setValue(ds_txn.getCellData(0, "copCoClntNm"));
  // commNm.setValue(ds_txn.getCellData(0, "commNm"));
  // transCargoClsNm.setValue(ds_txn.getCellData(0, "transCargoClsNm"));
  // eqCd.setValue(ds_txn.getCellData(0, "eqCd"));
  // lobranNm.setValue(ds_txn.getCellData(0, "lobranNm"));
  // vsslNm.setValue(ds_txn.getCellData(0, "vsslNm"));
  // portcnt.setValue(ds_txn.getCellData(0, "portcnt"));
  // stdWrkPathNm.setValue(ds_txn.getCellData(0, "stdWrkPathNm"));
  // wrkStpNm.setValue(ds_txn.getCellData(0, "wrkStpNm"));
  // impExpDomesticClsNm.setValue(ds_txn.getCellData(0, "impExpDomesticClsNm"));
  // routeNm.setValue(ds_txn.getCellData(0, "routeNm"));
  // routeClsNm.setValue(ds_txn.getCellData(0, "routeClsNm"));
  // accountPchsSellClsNm.setValue(ds_txn.getCellData(0, "accountPchsSellClsNm"));
  if (ds_txn.getCellData(0, "stndPcostYn") == 1) {
    stndPcostYn.setValue("Y");
  } else if (ds_txn.getCellData(0, "stndPcostYn") == 0) {
    stndPcostYn.setValue("N");
  }
};

/**
 * 마감체크
 */
scwin.f_JobCloseYN = async function () {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  //var isClose = cfJobCloseYN("CUR", fromDate, "00", wrkNo, "0", "ARR", "N", scwin.vLoginCoCd);
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
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "N", scwin.vLoginCoCd).then(function (arrRtn) {
    scwin.isClose = arrRtn;
    //              console.log("부모창 arrRtn : " + arrRtn);
    //              console.log("scwin.isClose[3] : " + scwin.isClose[3]);
    //              console.log("scwin.isClose[0] : " + scwin.isClose[0]);
  });
  // 선행마감 작업에 대한 검사
  if (scwin.isClose[3] == "PRE") {
    if (scwin.isClose[0] == "1") {
      await $c.gus.cfAlertMsg($p, "선행작업 " + scwin.isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (scwin.isClose[0] == "0") {
      await $c.gus.cfAlertMsg($p, "선행작업 " + scwin.isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }
  // 해당마감 작업에 대한 검사
  if (scwin.isClose[3] == "CUR") {
    if (scwin.isClose[0] == "0") {
      await $c.gus.cfAlertMsg($p, scwin.isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (scwin.isClose[0] == "2") {
      await $c.gus.cfAlertMsg($p, scwin.isClose[2] + "(이)가 마감완료가 되었습니다");
      return false;
    } else {
      return true;
    }
  }
};

/**
 * 화면로딩시 마감여부 값 리턴
 */
scwin.f_JobCloseYN2 = async function () {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  // var isClose = cfJobCloseYN("CUR", fromDate, "00", wrkNo, "0", "ARR", "N");
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
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "N").then(function (arrRtn) {
    scwin.isClose = arrRtn;
    //              console.log("부모창 arrRtn : " + arrRtn);
    //              console.log("부모창 scwin.isClose[3] : " + scwin.isClose[3]);
    //              console.log("부모창 scwin.isClose[0] : " + scwin.isClose[0]);
  });

  // 마감작업 조회시 해당값이 없을경우 오류 발생
  if (scwin.isClose[0] == "DNF") {
    return false;
  }

  // 선행마감 작업에 대한 검사
  if (scwin.isClose[3] == "PRE") {
    if (scwin.isClose[0] == "1") {
      return false;
    } else if (scwin.isClose[0] == "0") {
      return false;
    }
  }

  // 해당마감 작업에 대한 검사
  if (scwin.isClose[3] == "CUR") {
    if (scwin.isClose[0] == "0") {
      return false;
    } else if (scwin.isClose[0] == "2") {
      return false;
    } else {
      return true;
    }
  }
};

/**
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 */
scwin.f_setWrkNoFromDate = function () {
  scwin.wrkNo = ACConstants.CLOSE_STAFF_RESULTS;
  scwin.fromDate = scwin.hid_txnDt;
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/**
 * 청구번호 엔터 입력
 */
scwin.ed_schBilgNo_onkeydown = function (e) {
  if (e.keyCode == "13") {
    if (!$c.util.isEmpty($p, e.target.value)) {
      // console.log("this.getID() : "+ this.getID());
      this.setValue(e.target.value);
      scwin.f_Retrieve();
    }
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 귀속코드(조회) 팝업 호출
 */
scwin.udc_pchsAcctDeptCd_onclickEvent = function (e) {
  if (ed_pchsAcctDeptCd.hidVal != ed_pchsAcctDeptCd.getValue()) {
    ed_pchsAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_pchsAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openDeptPopUp(close);
};
scwin.udc_pchsAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_pchsAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_pchsAcctDeptCd.getValue())) {
    scwin.f_openDeptPopUp("T");
  }
};
/**
 * 거래처(조회) 팝업 호출
 */
scwin.udc_reqClntNo_onclickEvent = function (e) {
  if (ed_reqClntNo.hidVal != ed_reqClntNo.getValue()) {
    ed_reqClntNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_reqClntNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openClntPopUp(close);
};
scwin.udc_reqClntNo_onviewchangeCodeEvent = function (info) {
  ed_reqClntNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_reqClntNo.getValue())) {
    scwin.f_openClntPopUp("T");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_schBilgNo',placeholder:'',style:'',mandatory:'true',maxlength:'10',allowChar:'0-9',ref:'data:dma_search.bilgNo',editFormat:'##########',title:'청구번호','ev:onkeydown':'scwin.ed_schBilgNo_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_bilg',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.internalTxnBilgNo',style:'',userData2:'',id:'internalTxnBilgNo',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'내부매입부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_pchsAcctDeptCd',code:'pchsAcctDeptCd',codeId:'ed_pchsAcctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_pchsAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_pchsAcctDeptCd_onviewchangeCodeEvent',id:'udc_pchsAcctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'pchsAcctDeptNm',nameId:'ed_pchsAcctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_pchsAcctDeptCd',refDataCollection:'ds_txn',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'부서',validTitle:'부서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'내부매출부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'bilgAcctDeptNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{displayFormat:'yyyy/MM/dd',style:'',id:'ica_txnDt',class:'form-control cal',objType:'data',mandatory:'true',calendarValueType:'yearMonthDate',title:'거래일자',ref:'data:ds_txn.txnDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.regDt',style:'',userData2:'',id:'regDt',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{maxlength:'13',dataType:'number',style:'',id:'ed_rsltsAmt',placeholder:'',class:'form-control col8 tar',objType:'data',mandatory:'true',ref:'data:ds_txn.rsltsAmt',displayFormat:'#,###',title:'청구금액'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.regNm',style:'',userData2:'',id:'regNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업영역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_bizdom',class:'form-control col5',direction:'auto',ref:'data:ds_txn.bizDomCd',mandatory:'true',visibleRowNum:'10',title:'사업영역',objType:'data',chooseOptionLabel:'$blank',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bizDom'},E:[{T:1,N:'xf:label',A:{ref:'bizDomNm'}},{T:1,N:'xf:value',A:{ref:'bizDomCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청거래처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_reqClntNo',btnId:'btn_reqClntNo',codeId:'ed_reqClntNo',nameId:'ed_reqClntNm',popupID:'popup_reqClntNo',validTitle:'거래처',selectID:'retrieveClntList',refDataCollection:'ds_txn',code:'reqClntNo',name:'reqClntNm',maxlengthCode:'6',objTypeCode:'data',mandatoryCode:'true',validExpCode:'거래처코드',allowCharCode:'0-9',editTypeCode:'select',maxlengthName:'30',objTypeName:'key',mandatoryName:'true',validExpName:'거래처명','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_reqClntNo_onviewchangeCodeEvent',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{maxByteLength:'50',style:'',id:'ed_summary',placeholder:'',class:'form-control ',objType:'data',title:'적요',ref:'data:ds_txn.summary'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_bilg2',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.reqClntNm',style:'',userData2:'',id:'reqClntNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.bilgClntNm',style:'',userData2:'',id:'bilgClntNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ctrtClntNm',label:'',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.lineClntNm',style:'',userData2:'',id:'lineClntNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'협력업체',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.copCoClntNm',style:'',userData2:'',id:'copCoClntNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'품명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.commNm',style:'',userData2:'',id:'commNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.transCargoClsNm',style:'',userData2:'',id:'transCargoClsNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.eqNm',style:'',userData2:'',id:'eqCd',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업장',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.lobranNm',style:'',userData2:'',id:'lobranNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선박',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.vsslNm',style:'',userData2:'',id:'vsslNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.portcnt',style:'',userData2:'',id:'portcnt',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기준작업경로번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.stdWrkPathNm',style:'',userData2:'',id:'stdWrkPathNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업단계',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.wrkStpNm',style:'',userData2:'',id:'wrkStpNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출입구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.impExpDomesticClsNm',style:'',userData2:'',id:'impExpDomesticClsNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'노선',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.routeNm',style:'',userData2:'',id:'routeNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'노선구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.routeClsNm',style:'',userData2:'',id:'routeClsNm',label:'text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회계매입매출구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_txn.accountPchsSellClsNm',style:'',userData2:'',id:'accountPchsSellClsNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'표준원가여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'stndPcostYn',label:'text',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'w2:udc_comChkRes',A:{style:'width:%; height:px; ;visibility:hidden;',id:'udc_cfJobCloseYN'}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]})