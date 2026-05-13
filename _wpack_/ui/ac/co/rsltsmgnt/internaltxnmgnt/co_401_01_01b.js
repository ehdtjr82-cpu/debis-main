/*amd /ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_01_01b.xml 53475 19858820eee66b3c9fc773522f08cfba44d063f9fddb4d1033bf4467c6384762 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'내부거래청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'내부매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'내부매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptCd',name:'내부매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptNm',name:'내부매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text',defaultValue:'CO'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'LINE거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'운송화물구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입수출내수구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsCd',name:'회계매입매출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsNm',name:'회계매입매출구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeCd',name:'노선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeNm',name:'노선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsCd',name:'노선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsNm',name:'노선구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostYn',name:'표준원가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'청구금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'내부단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnStsCd',name:'내부거래상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realTxnDt',name:'실거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'FBP,MB의배차주정보_SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizDom',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_bizDom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_bizDom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bizDom2',action:'/ac.co.stdinfomgnt.RetrieveBusinessDomainCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.internaltxnmgnt.SaveInternalTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 내부거래매출등록
 * 메뉴경로 : 회계/관리회계/실적관리/내부거래관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/internaltxnmgnt/co_401_01_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2026-01-09
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
 *    5. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 수정이력 :
 *    - 2026-01-09      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = "";
scwin.wrkNo = ""; //작업구분코드
scwin.fromDate = ""; //년월
scwin.isClose = ""; //마감체크(tobe 추가)
scwin.today = ""; //오늘날짜

//로그인 정보
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;
scwin.acctDeptCd;
scwin.acctDeptNm;
scwin.vLoginUserNm;

/**
 * TODO : ASIS에서 내부거래계정 그룹의 내부매출:001의 코드설명값을 가져오는 것
 * ☏ 값이 9000003,9000001 이면 첫번째값을 가져오는건지?? 다른 처리방법이 있는가
 */
// CodeDTOCache codeDTOCache = CodeDTOCache.getInstance();
// CodeDTO codeDTO = (CodeDTO)codeDTOCache.getCodeDTO("CO005", "001");
scwin.codeDTO;
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // scwin.f_HeaderCreate();
  // scwin.f_LoadBizDom();
  // $c.gus.cfDisableKeyData();
  // co_lc_bizdom.index = -1;
  // scwin.f_Add();

  // scwin.f_setCompanyInfo();

  //사업부코드, 작성일자 숨기기(일단 테스트니까 주석처리)
  ed_bizdivCd.hide();
  ica_regDtm.hide();
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.acctDeptCd = $c.gus.cfIsNull($p, scwin.memJson["acctDeptCd"]) ? "" : scwin.memJson["acctDeptCd"]; //사용자소속부서코드
  scwin.acctDeptNm = $c.gus.cfIsNull($p, scwin.memJson["acctDeptNm"]) ? "" : scwin.memJson["acctDeptNm"]; //사용자소속부서
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한
  scwin.vLoginUserNm = $c.gus.cfIsNull($p, scwin.memJson["userNm"]) ? "" : scwin.memJson["userNm"]; //로그인사용자명

  scwin.today = $c.date.getServerDateTime($p);
  scwin.first = 0;
};

/**
 * 로그인기본세팅
*/
scwin.f_SetLoginDefault = function () {
  ed_bilgAcctDeptCd.setValue(scwin.acctDeptCd);
  ed_bilgAcctDeptCd.hidVal = scwin.acctDeptCd;
  ed_bilgAcctDeptNm.setValue(scwin.acctDeptNm);
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "txnDt:STRING(8)" // 거래일자
  //     + ",bilgAcctDeptCd:STRING(5)" // 청구귀속부서코드
  //     + ",bilgAcctDeptNm:STRING(50)" // 청구귀속부서코드
  //     + ",pchsAcctDeptCd:STRING(5)" // 매입귀속부서코드
  //     + ",pchsAcctDeptNm:STRING(50)" // 매입귀속부서코드
  //     + ",mgntAcctCd:STRING(7)" //관리계정코드
  //     + ",sysCd:STRING(2)" // 시스템코드
  //     + ",bizDomCd:STRING(3)" // 사업영역코드
  //     + ",bizdivCd:STRING(3)" // 사업부코드
  //     + ",reqClntNo:STRING(6)" // 요청거래처번호
  //     + ",reqClntNm:STRING(30)" // 요청거래처번호
  //     + ",rsltsAmt:DECIMAL(13.0)" // 실적금액
  //     + ",internalTxnStsCd:STRING(2)" // 내부거래상태코드
  //     + ",summary:STRING(50)" // 적요
  //     + ",accountPchsSellClsCd:STRING(1)" // 회계매입매출구분코드
  //     + ",regDtm:STRING(8)" // 등록일시
  //     + ",bilgClntNo:STRING(6)" // 청구거래처번호
  //     + ",bilgClntNm:STRING(30)" // 청구거래처번호
  //     ;

  // ds_txn.SetDataHeader(GAUCE_DATASET_HEADER);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_txn.setNoResultMessageVisible(false);
  ds_txn.removeAll();
  ds_txn.reform();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  // scwin.f_HeaderCreate();
  $c.gus.cfDisableKeyData($p);
  scwin.f_LoadBizDom();
  lc_bizdom.setValue("110");
  const codeOptions = [{
    grpCd: "ZZ001",
    compID: "gr_txn:sysCd"
  } //시스템코드
  , {
    grpCd: "CO005"
  } //내부거래계정
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  scwin.codeDTO = dlt_commonCodeCO005.getCellData(dlt_commonCodeCO005.getMatchedIndex("cd", "001")[0], "cdDesc");
  let codeArry = scwin.codeDTO.split(",");
  scwin.codeDTO = codeArry[0];
  scwin.f_Add();
};

/**
 * 사업영역정보를 가져온다.
 */
scwin.f_LoadBizDom = async function () {
  /**
   * TODO : ASIS Connection reset by peer: socket write error 떨어짐
   * retrieveBizDomCdInfo2 만 된다는 말.......
   */
  // ds_bizDom.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" +

  //     "&queryId=retrieveBizDomCdInfo2" +
  //     "&param1=" +
  //     "&param2=" +
  //     "&param3=";
  // ds_bizDom.undoAll();   
  //<jsp:param name="DataID" 			value="/ac.co.stdinfomgnt.RetrieveBusinessDomainCMD.do?useYn=1" />

  ds_bizDom.removeAll();
  //await $c.sbm.execute(sbm_bizDom, {"sysCd":"CommonEBC", "queryId":"retrieveBizDomCdInfo2", "param1":"", "param2":"", "param3":""});

  let json = {};
  json.useYn = "1";
  json.bizDomCd = null;
  let ret = await $c.sbm.execute($p, sbm_bizDom2, json);
  let arryBizDom = ret.responseJSON.GAUCE;
  for (let i = 0; i < arryBizDom.length; i++) {
    let newRow = ds_bizDom.insertRow();
    ds_bizDom.setCellData(newRow, "col1", arryBizDom[i]["bizDomCd"]);
    ds_bizDom.setCellData(newRow, "col2", arryBizDom[i]["bizDomNm"]);
  }
  ds_bizDom.reform();
  ds_bizDom.sort("col1", 0);
};

/**
 * 행추가
 */
scwin.f_Add = async function () {
  // var rtnList = new Array();
  // ds_txn.insertRow();
  // scwin.f_fill();
  // $c.gus.cfDisableKey();

  // scwin.f_SetLoginDefault();

  // ds_txn.setCellData(ds_txn.RowPosition, "mgntAcctCd", "scwin.codeDTO.getCdDesc()");
  // ds_txn.setCellData(ds_txn.RowPosition, "internalTxnStsCd", "scwin.ACConstants.INTERNAL_TXN_REG");
  // ds_txn.setCellData(ds_txn.RowPosition, "accountPchsSellClsCd", "scwin.ACConstants.SELL");
  // ed_bilgAcctDeptCd.focus();

  // var temp = "scwin.DDate.getDate(""),,,0";
  // // 내부매출부서의 귀속부서의 사업영역을 가져온다.
  // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', ed_bilgAcctDeptCd.getValue().trim(), "", "T", null, null, null, null, temp, "450", "500", null, null, null, null, null, "T"); // 귀속부서
  // if (rtnList != null) {
  //     if (rtnList[0] != "N/A") {
  //         ds_txn.setCellData(ds_txn.RowPosition, "bizdivCd", rtnList[2]);
  //         ds_txn.setCellData(ds_txn.RowPosition, "bizDomCd", rtnList[3]);
  //     }
  // } else {
  //     ds_txn.setCellData(ds_txn.RowPosition, "bizdivCd", "110"); // 사업영역 기본값 세팅
  //     ds_txn.setCellData(ds_txn.RowPosition, "bizDomCd", "110");
  // }
  let row = ds_txn.insertRow();
  gr_txn.setFocusedCell(row, 0);
  ed_bilgAcctDeptCd.focus();
  $c.gus.cfDisableKey($p);
  await scwin.f_fill();
  await scwin.f_SetLoginDefault();
  ds_txn.setCellData(row, "mgntAcctCd", scwin.codeDTO);
  ds_txn.setCellData(row, "internalTxnStsCd", ACConstants.INTERNAL_TXN_REG);
  ds_txn.setCellData(row, "accountPchsSellClsCd", ACConstants.SELL);
  await scwin.f_openBilgDeptPopUp("P");
  totalRows.setValue(ds_txn.getRowCount());
};

/**
 * 행삭제
 * TOBE UDC 사용
 */
scwin.f_DeleteRow = function () {
  let row = gr_txn.getFocusedRowIndex();
  if (ds_txn.getRowStatus(row) == "C") {
    ds_txn.removeRow(row);
  } else {
    ds_txn.deleteRow(row);
    gr_txn.setFocusedCell(row, 0);
  }
  totalRows.setValue(ds_txn.getRowCount());
};

/**
 * 행취소
 * TOBE UDC 사용
 */
scwin.f_CancelRow = function () {
  let row = ds_txn.getRowPosition();
  if (ds_txn.getRowStatus(row) == "C") {
    ds_txn.removeRow(row);
  } else {
    ds_txn.undoRow(row);
  }
  totalRows.setValue(ds_txn.getRowCount());
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  let ret;
  //필수입력사항 확인
  ret = await $c.gus.cfValidate($p, [ica_txnDt]);
  if (!ret) {
    return false;
  }
  //거래일자
  if (ica_txnDt.getValue().length != 8) {
    await $c.gus.cfAlertMsg($p, "거래일자은(는) 8자리수만큼 입력하십시오.");
    ica_txnDt.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_txnDt.getValue());
  if (!ret) {
    await $c.gus.cfAlertMsg($p, "올바른 거래일자을(를) 입력하십시오.");
    ica_txnDt.focus();
    return;
  }

  // 마감여부 확인
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }

  //    if (ds_txn.isUpdated == false) {
  // 변경된 사항이 있는지 확인.
  if (ds_txn.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["내부거래매출정보"]);
    return;
  }

  //Mandatory 항목이 누락하지 않았는지 체크한다.
  // ret = await $c.gus.cfValidate([tb_bilg, gr_txn]);
  ret = await $c.gus.cfValidate($p, [ed_coCd, ed_coNm, lc_bizdom, ed_bilgAcctDeptCd, ed_bilgAcctDeptNm, ed_pchsAcctDeptCd, ed_pchsAcctDeptNm, ed_rsltsAmt, ed_reqClntNo, ed_reqClntNm, ed_bilgClntNo, ed_bilgClntNm]);
  if (!ret) {
    return false;
  }
  ret = await $c.gus.cfValidate($p, [gr_txn]);
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
    scwin.f_clear();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableAllBtn($p);
    scwin.f_Add();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 팝업호출
 * TOBE 사용하지 않음(UDC 사용)
 */
scwin.f_CallCommonPopUp = function (paramArray) {
  return cfCommonPopUp(paramArray.pSelectID, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};

/**
 * 팝업 여부 검사
 * TOBE 사용하지 않음(UDC 사용)
 */
scwin.f_CanOpenPopUp = function (inObj, pairObj, obj) {
  var retVal = $c.gus.cfCanOpenPopup($p, inObj, pairObj);
  if (retVal == false) {
    if (obj != null) {
      if (obj.length != null) {
        for (i = 0; i < obj.length; i++) {
          $c.gus.cfSetValue($p, obj[i], "");
        }
      } else {
        $c.gus.cfSetValue($p, obj, "");
      }
    }
  }
  return retVal;
};

/**
 * 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
 * TOBE 사용하지 않음(UDC 사용)
 */
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

/**
 * 매출부서팝업
 */
scwin.f_openBilgDeptPopUp = function (check) {
  //asis 소스
  // var codeObj = ed_bilgAcctDeptCd;
  // var nameObj = ed_bilgAcctDeptNm;

  // var paramArray = new Object();
  // paramArray.pSelectID = "retrieveAcctDeptCdInfo";
  // paramArray.pCode = $c.gus.cfGetValue(codeObj);
  // paramArray.pName = "";
  // paramArray.pWinCloseTF = scwin.f_EventCheck();
  // var param = scwin.DDate.getDate("") + ",,,0,,,,,," + ed_coCd.getValue();
  // paramArray.pWhere = param;
  // paramArray.pW = "410";

  // if (paramArray.pWinCloseTF == 'T' && scwin.f_CanOpenPopUp(codeObj, nameObj) == false) {
  //     return;
  // }

  // var rtnList = scwin.f_CallCommonPopUp(paramArray);
  // $c.gus.cfSetReturnValue(rtnList, codeObj, nameObj);

  // if (rtnList != null) {
  //     if (rtnList[0] != "N/A") {
  //         ds_txn.setCellData(ds_txn.RowPosition, "bizdivCd", rtnList[2]);
  //         ds_txn.setCellData(ds_txn.RowPosition, "bizDomCd", rtnList[3]);
  //     }
  // } else {
  //     ds_txn.setCellData(ds_txn.RowPosition, "bizdivCd", "110"); // 사업영역 기본값 세팅
  //     ds_txn.setCellData(ds_txn.RowPosition, "bizDomCd", "110");
  // }
  let param = scwin.today + ",,,0,,,,,," + ed_coCd.getValue();
  let allSearch = "T";
  if (check == "T") {
    allSearch = "F";
    /**
     * TOBE else if(check == "P") { 추가함
     * 추가버튼 클릭 시 자동값 세팅할때
     */
  } else if (check == "P") {
    check = "T";
    param = scwin.today + ",,,0";
    allSearch = "F";
  }
  udc_bilgAcctDeptCd.cfCommonPopUp(scwin.udc_bilgAcctDeptCd_callBackFunc, ed_bilgAcctDeptCd.getValue(), ed_bilgAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, allSearch, null, null);
};

/**
 * 청구부서팝업 callBack
 */
scwin.udc_bilgAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bilgAcctDeptCd.setValue(ret[0]); // 청구부서코드
    ed_bilgAcctDeptNm.setValue(ret[1]); // 청구부서명
    ed_bilgAcctDeptCd.hidVal = ret[0]; // 히든값
    ed_bizdivCd.setValue(ret[2]); // 사업부코드
    lc_bizdom.setValue(ret[3]); // 사업영억 
  } else {
    ed_bilgAcctDeptCd.setValue(""); // 청구부서코드
    ed_bilgAcctDeptNm.setValue(""); // 청구부서명
    ed_bilgAcctDeptCd.hidVal = ""; // 히든값
    ed_bizdivCd.setValue("110"); // 사업부코드
    lc_bizdom.setValue("110"); // 사업영억 
  }
};

/**
 * 매입부서팝업
 */
scwin.f_openPchsDeptPopUp = function (check) {
  //asis 소스
  // var codeObj = ed_pchsAcctDeptCd;
  // var nameObj = ed_pchsAcctDeptNm;

  // var paramArray = new Object();
  // paramArray.pSelectID = "retrieveAcctDeptCdInfo";
  // paramArray.pCode = $c.gus.cfGetValue(codeObj);
  // paramArray.pName = "";
  // paramArray.pWinCloseTF = scwin.f_EventCheck();
  // var param = scwin.DDate.getDate("") + ",,,0,,,,,," + ed_coCd.getValue();
  // paramArray.pWhere = param;
  // paramArray.pW = "410";

  // if (paramArray.pWinCloseTF == 'T' && scwin.f_CanOpenPopUp(codeObj, nameObj) == false) {
  //     return;
  // }

  // var rtnList = scwin.f_CallCommonPopUp(paramArray);
  // $c.gus.cfSetReturnValue(rtnList, codeObj, nameObj);

  let param = scwin.today + ",,,0,,,,,," + ed_coCd.getValue();
  let allSearch = "T";
  if (check == "T") {
    allSearch = "F";
  }
  udc_pchsAcctDeptCd.cfCommonPopUp(scwin.udc_pchsAcctDeptCd_callBackFunc, ed_pchsAcctDeptCd.getValue(), ed_pchsAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, allSearch, null, null);
};

/**
 * 매입부서팝업 callBack
 */
scwin.udc_pchsAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_pchsAcctDeptCd.setValue(ret[0]); // 매입부서코드
    ed_pchsAcctDeptNm.setValue(ret[1]); // 매입부서명
    ed_pchsAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_pchsAcctDeptCd.setValue(""); // 매입부서코드
    ed_pchsAcctDeptNm.setValue(""); // 매입부서명
    ed_pchsAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 거래처팝업
 * clntGubun : 1:요청거래처, 2:청구거래처
 */
scwin.f_openClntPopUp = function (clntGubun, chk) {
  var codeObj = "";
  var nameObj = "";

  //요청거래처
  if (clntGubun == "1") {
    codeObj = ed_reqClntNo;
    nameObj = ed_reqClntNm;
    //청구거래처
  } else if (clntGubun == "2") {
    codeObj = ed_bilgClntNo;
    nameObj = ed_bilgClntNm;
  }

  // var paramArray = new Object();
  // paramArray.pSelectID = "retrieveClntList";
  // paramArray.pCode = $c.gus.cfGetValue(codeObj);
  // paramArray.pName = "";
  // paramArray.pWinCloseTF = scwin.f_EventCheck();
  // var param = ",,," + ed_coCd.getValue();
  // paramArray.pWhere = param;
  // paramArray.pW = "410";
  // paramArray.pAllSearchTF = 'F';

  // if (paramArray.pWinCloseTF == 'T' && scwin.f_CanOpenPopUp(codeObj, nameObj) == false) {
  //     return;
  // }

  // var rtnList = scwin.f_CallCommonPopUp(paramArray);
  // $c.gus.cfSetReturnValue(rtnList, codeObj, nameObj);

  let param = ",,," + ed_coCd.getValue();
  switch (clntGubun) {
    case "1":
      udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_callBackFunc, codeObj.getValue(), nameObj.getValue(), chk, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case "2":
      udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc, codeObj.getValue(), nameObj.getValue(), chk, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

/**
 * 요청거래처팝업 callBack
 */
scwin.udc_reqClntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_reqClntNo.setValue(ret[0]); // 요청거래처번호
    ed_reqClntNm.setValue(ret[1]); // 요청거래처명
    ed_reqClntNo.hidVal = ret[0]; // 히든값
  } else {
    ed_reqClntNo.setValue(""); // 요청거래처번호
    ed_reqClntNm.setValue(""); // 요청거래처명
    ed_reqClntNo.hidVal = ""; // 히든값
  }
};

/**
 * 청구거래처팝업 callBack
 */
scwin.udc_bilgClntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bilgClntNo.setValue(ret[0]); // 청구거래처번호
    ed_bilgClntNm.setValue(ret[1]); // 청구거래처명
    ed_bilgClntNo.hidVal = ret[0]; // 히든값
  } else {
    ed_bilgClntNo.setValue(""); // 청구거래처번호
    ed_bilgClntNm.setValue(""); // 청구거래처명
    ed_bilgClntNo.hidVal = ""; // 히든값
  }
};

/**
 * 행추가시 필요한 초기 데이타를 Setting한다.
 */
scwin.f_fill = function () {
  // let rowPosition = ds_txn.getRowPosition();
  // ds_txn.setCellData(rowPosition, "regDtm", scwin.today);
  // ds_txn.setCellData(rowPosition, "sysCd", "CO");  //데이터리스트 디폴트 값으로 처리
  regDt.setValue($c.gus.cfGetFormatStr($p, scwin.today, "####/##/##"));
  ica_regDtm.setValue(scwin.today);
  regNm.setValue(scwin.vLoginUserNm);
  ed_bilgAcctDeptCd.setValue(scwin.acctDeptCd);
  ed_bilgAcctDeptCd.hidVal = scwin.acctDeptCd;
  ed_bilgAcctDeptNm.setValue(scwin.acctDeptNm);
};

/**
 * clear data
 * 저장이후 사용
 */
scwin.f_clear = function () {
  // let rowPosition = ds_txn.getRowPosition();
  // ds_txn.setCellData(rowPosition,  "regDtm", "");
  // ds_txn.setCellData(rowPosition,  "sysCd", "");
  ds_txn.removeAll();
  ds_txn.reform();
  regDt.setValue("");
  regNm.setValue("");
};

/**
 * 마감체크
 */
scwin.f_JobCloseYN = async function () {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  //var isClose = cfJobCloseYN("CUR", fromDate, "00", wrkNo, "0", "ARR", "N", ed_coCd.getValue());
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
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "N", ed_coCd.getValue()).then(function (arrRtn) {
    scwin.isClose = arrRtn;
    //              console.log("부모창 arrRtn : " + arrRtn);
    //              console.log("scwin.isClose[3] : " + scwin.isClose[3]);
    //              console.log("scwin.isClose[0] : " + scwin.isClose[0]);
  });

  // 마감작업 조회시 해당값이 없을경우 오류 발생
  if (scwin.isClose[0] == "DNF") {
    await $c.gus.cfAlertMsg($p, "마감되었습니다.");
    return false;
  }

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
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 */
scwin.f_setWrkNoFromDate = function () {
  scwin.wrkNo = ACConstants.CLOSE_STAFF_RESULTS;
  scwin.fromDate = ica_txnDt.getValue().trim().substring(0, 6);
};

/**
 * 그리드 데이터 엑셀로 다운
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
scwin.f_runExcel = function (varGrNm) {
  // totCnt = ds_txn.getRowCount();
  // sheetTitle = "내부매출등록내역";

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
 * 회사코드(저장) 팝업 호출
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
 * 내부매출부서(저장) 팝업 호출
 */
scwin.udc_bilgAcctDeptCd_onclickEvent = function (e) {
  if (ed_bilgAcctDeptCd.hidVal != ed_bilgAcctDeptCd.getValue()) {
    ed_bilgAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_bilgAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openBilgDeptPopUp(close);
};
scwin.udc_bilgAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_bilgAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_bilgAcctDeptCd.getValue())) {
    scwin.f_openBilgDeptPopUp("T");
  }
};

/**
 * 내부매입부서(저장) 팝업 호출
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
  scwin.f_openPchsDeptPopUp(close);
};
scwin.udc_pchsAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_pchsAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_pchsAcctDeptCd.getValue())) {
    scwin.f_openPchsDeptPopUp("T");
  }
};

/**
 * 요청거래처(저장) 팝업 호출
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
  scwin.f_openClntPopUp("1", close);
};
scwin.udc_reqClntNo_onviewchangeCodeEvent = function (info) {
  ed_reqClntNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_reqClntNo.getValue())) {
    scwin.f_openClntPopUp("1", "T");
  }
};

/**
 * 청구거래처(저장) 팝업 호출
 */
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  if (ed_bilgClntNo.hidVal != ed_bilgClntNo.getValue()) {
    ed_bilgClntNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_bilgClntNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openClntPopUp("2", close);
};
scwin.udc_bilgClntNo_onviewchangeCodeEvent = function (info) {
  ed_bilgClntNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_bilgClntNo.getValue())) {
    scwin.f_openClntPopUp("2", "T");
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'true',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_bilg',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'popupCocd',class:'w300',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50',mandatoryName:'true',validExpName:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업영역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'form-control w200',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',emptyItem:'true',id:'lc_bizdom',mandatory:'true',objType:'data',ref:'data:ds_txn.bizDomCd',style:'',submenuSize:'auto',title:'사업영역',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bizDom'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:input',A:{id:'ed_bizdivCd',style:'',class:'w30',title:'사업부코드',ref:'data:ds_txn.bizdivCd',objType:'data'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal w80',displayFormat:'yyyy/MM/dd',id:'ica_regDtm',objType:'data',ref:'data:ds_txn.regDtm',style:'',title:'작성일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'내부매출부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bilgAcctDeptCd',code:'bilgAcctDeptCd',codeId:'ed_bilgAcctDeptCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_bilgAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_bilgAcctDeptCd_onviewchangeCodeEvent',id:'udc_bilgAcctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'bilgAcctDeptNm',nameId:'ed_bilgAcctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_bilgAcctDeptCd',refDataCollection:'ds_txn',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'내부매출부서',validTitle:'내부매출부서',class:'w300',mandatoryName:'true',readOnlyName:'true',validExpName:'내부매출부서'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'내부매입부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_pchsAcctDeptCd',code:'pchsAcctDeptCd',codeId:'ed_pchsAcctDeptCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_pchsAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_pchsAcctDeptCd_onviewchangeCodeEvent',id:'udc_pchsAcctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'pchsAcctDeptNm',nameId:'ed_pchsAcctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_pchsAcctDeptCd',refDataCollection:'ds_txn',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'내부매입부서',validTitle:'내부매입부서',class:'w300',mandatoryName:'true',readOnlyName:'true',validExpName:'내부매입부서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'regDt',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',displayFormat:'yyyy/MM/dd',id:'ica_txnDt',mandatory:'true',objType:'data',ref:'data:ds_txn.txnDt',style:'',title:'거래일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'regNm',label:'text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'form-control col8 tar w300',dataType:'number',displayFormat:'#,###',id:'ed_rsltsAmt',mandatory:'true',maxlength:'13',objType:'data',placeholder:'',ref:'data:ds_txn.rsltsAmt',style:'',title:'청구금액',allowChar:'0-9,-',validator:'scwin.validatorNumber'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청거래처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_reqClntNo',btnId:'btn_reqClntNo',codeId:'ed_reqClntNo',nameId:'ed_reqClntNm',popupID:'popup_reqClntNo',validTitle:'요청거래처',selectID:'retrieveClntList',refDataCollection:'ds_txn',code:'reqClntNo',name:'reqClntNm',maxlengthCode:'6',objTypeCode:'data',mandatoryCode:'true',validExpCode:'요청거래처',allowCharCode:'0-9',editTypeCode:'select',maxlengthName:'30',objTypeName:'key',mandatoryName:'true',validExpName:'요청거래처','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_reqClntNo_onviewchangeCodeEvent',style:'',class:'w300',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구거래처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClntNo',btnId:'btn_bilgClntNo',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',popupID:'popup_bilgClntNo',validTitle:'청구거래처',selectID:'retrieveClntList',refDataCollection:'ds_txn',code:'bilgClntNo',name:'bilgClntNm',maxlengthCode:'6',objTypeCode:'data',mandatoryCode:'true',validExpCode:'청구거래처',allowCharCode:'0-9',editTypeCode:'select',maxlengthName:'30',objTypeName:'key',mandatoryName:'true',validExpName:'청구거래처','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_bilgClntNo_onviewchangeCodeEvent',style:'',class:'w300',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_summary',maxByteLength:'50',objType:'data',placeholder:'',ref:'data:ds_txn.summary',style:'',title:'적요'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부매출등록내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"내부매출등록내역.xlsx", "sheetName":"내부매출등록내역", "type":"1", "hiddenVisible":false}',gridID:'gr_txn',gridUpYn:'N',grp:'grd_section1',id:'udc_excel1',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_txn',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_txn',visibleRowNum:'12',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column12',value:'시스템',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'내부매출부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'160',inputType:'text',id:'column10',value:'내부매출부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'내부매입부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column21',value:'내부매입부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'거래일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'청구금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'요청거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'청구거래처',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'select',id:'sysCd',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'bilgAcctDeptCd',blockSelect:'false',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'160',inputType:'text',id:'bilgAcctDeptNm',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'pchsAcctDeptCd',blockSelect:'false',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'160',inputType:'text',style:'',id:'pchsAcctDeptNm',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDtm',value:'',escape:'false',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'txnDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'rsltsAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',mandatory:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'select',style:'',id:'bizDomCd',value:'',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',mandatory:'true',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bizDom'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'reqClntNm',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnRowDelYn:'Y',gridID:'gr_txn',rowAddFunction:'scwin.f_Add',rowDelFunction:'scwin.f_DeleteRow',style:'',btnRowAddYn:'Y',EngYn:'N',btnCancelObj:'btn_cancelRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'사업부간 내부거래시에도 거래처 등록은 필수입니다.요청 거래처 코드는 거래일자가 2011년 이전인 경우 109856(동부건설(주)물류부문)를 입력하시고, <br/>2011년 이후인 경우 238802(동원로엑스(주))를 입력하시기 바랍니다. ',class:'info-txt txt-blue',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_comChkRes',A:{style:'width:%; height:px; ;visibility:hidden;',id:'udc_cfJobCloseYN'}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})