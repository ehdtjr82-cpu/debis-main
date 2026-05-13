/*amd /ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_01b.xml 46080 b9412ed247d9e92fe5eeb698e60595a993e9c3d59ba7e40e6fc04ce23521202d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStDt',name:'거래일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnEndDt',name:'거래일자(끝)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrDeptYn',name:'집계부서여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptBilgCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptBilgNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'internalTxnStsCd',name:'진행상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'매출/매입구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'내부거래청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptCd',name:'매입귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptNm',name:'매입귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'LINE거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'운송화물구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입수출내수구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsCd',name:'회계매입매출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsNm',name:'회계매입매출구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeCd',name:'노선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeNm',name:'노선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsCd',name:'노선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsNm',name:'노선구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostYn',name:'표준원가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'내부단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnStsCd',name:'내부거래상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'realTxnDt',name:'실거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'FBP,MB의배차주정보_SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.internaltxnmgnt.RetrieveInternalTransactionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txn","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_billTxn',action:'/ac.co.rsltsmgnt.internaltxnmgnt.ProcessInternalTransactionSellingBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_billTxn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelTxn',action:'/ac.co.rsltsmgnt.internaltxnmgnt.CancelInternalTransactionSellingBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelTxn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 내부매출청구
 * 메뉴경로 : 회계/관리회계/실적관리/내부거래관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2026-01-07
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
 *    2. 회사코드[000], 거래년월[20140101~20140131], 부서[00049]
 *    3. co_401_02_02p용 : 회사코드[000], 거래년월[2014/05], 부서[00049], 청구번호[0009595163]
 * 수정이력 :
 *    - 2026-01-07      배기원    최초작성
 */
//hidden 값
scwin.wrkNo = ""; //작업구분코드
scwin.fromDate = ""; //년월
scwin.isClose = ""; //마감체크(tobe 추가)
scwin.today = ""; //오늘날짜

scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;
scwin.acctDeptCd;
scwin.acctDeptNm;
scwin.strBasSdId = "/ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_02p.xml"; //상세주소
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
  scwin.acctDeptCd = $c.gus.cfIsNull($p, scwin.memJson["acctDeptCd"]) ? "" : scwin.memJson["acctDeptCd"]; //사용자소속부서코드
  scwin.acctDeptNm = $c.gus.cfIsNull($p, scwin.memJson["acctDeptNm"]) ? "" : scwin.memJson["acctDeptNm"]; //사용자소속부서
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한

  scwin.today = $c.date.getServerDateTime($p);
  const codeOptions = [{
    grpCd: "ZZ001",
    compID: "gr_txn:sysCd"
  } //시스템코드
  , {
    grpCd: "CO003",
    compID: "gr_txn:internalTxnStsCd, lc_internalTxnStsCd"
  } //내부거래상태
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
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_txn.setNoResultMessageVisible(false);
  gr_txn.setColumnColor("internalTxnBilgNo", "#007FFF");
  ds_txn.removeAll();
  totalRows.setValue("0");
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_bilg, [ed_coCd, ed_coNm]);
  //dma_search.setJSON(scwin.initJson);

  ica_inqStDt.setValue(scwin.today.substring(0, 6) + "01");
  ica_inqEndDt.setValue(scwin.today);
  ed_deptBilgCd.setValue(scwin.acctDeptCd);
  ed_deptBilgNm.setValue(scwin.acctDeptNm);
  ed_deptCd.setValue("");
  ed_deptNm.setValue("");
  lc_internalTxnStsCd.setValue("");

  //txt_deptBilgNm.value = "<%=login.getAcctDeptNm()%>";
  //부서값 있어서 주석    ica_inqStDt.setValue = "scwin.DDate.getDate()".substring(0, 6) + "01"
  // scwin.f_openBilgPopUp('T');
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "txnStDt:STRING"
  //     + ",txnEndDt:STRING"
  //     + ",acctDeptBilgCd:STRING"
  //     + ",acctDeptCd:STRING"
  //     + ",internalTxnStsCd:STRING"
  //     + ",scClsCd:STRING"
  //     + ",aggrDeptYn:DECIMAL";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_setCompanyInfo();
  scwin.f_FieldClear();
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
  if (!$c.gus.cfIsAfterDate($p, ica_inqStDt.getValue().trim(), ica_inqEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_inqStDt.focus();
    return false;
  }
  dma_search.set("scClsCd", "1");
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_txn.setNoResultMessageVisible(true);
  let rowCnt = ds_txn.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_txn.setFocusedCell(0, 0);
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
  // var internalTxnBilgNo = ds_txn.getCellData(row, 'internalTxnBilgNo');
  // var sFeatures = "dialogWidth:825px; dialogHeight:570px;"
  //     + "status:No; scroll:No";

  // sURL = "scwin.strBasSdId?internalTxnBilgNo=" + internalTxnBilgNo;
  // window.showModalDialog(sURL, window, sFeatures);
  let internalTxnBilgNo = ds_txn.getCellData(row == "-1" ? ds_txn.getRowPosition() : row, "internalTxnBilgNo");
  let opts = {};
  let data = {};
  //팝업파라메터 
  data.internalTxnBilgNo = internalTxnBilgNo;
  opts.width = "825";
  opts.height = "700";
  opts.id = "popInternalTxnBilgNo";
  opts.title = "내부거래상세조회";
  opts.popupName = "내부거래상세조회";
  opts.scrollbars = false;
  opts.type = "browserPopup";
  $c.win.openPopup($p, scwin.strBasSdId, opts, data);
};

/**
 * 청구 버튼
 */
scwin.f_Bill = async function () {
  //asis 소스
  // let row = ds_txn.getRowCount();
  // let ret;
  // for (let i=0; i<row; i++) {
  //     if (ds_txn.getCellData(i, "selYn") == "1" &&
  //         ds_txn.getCellData(i, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_REG) {
  //         await $c.gus.cfAlertMsg("등록상태인 data만 청구할 수 있습니다.");
  //         return;
  //     }
  //     if (ds_txn.getCellData(i, "selYn") == "1" &&
  //         ds_txn.getCellData(i, "sysCd") != ACConstants.INTERNAL_MGNT_SYS_CD) {
  //         await $c.gus.cfAlertMsg("관리회계 시스템에서 등록한 데이타만 청구 가능합니다.");
  //         return;
  //     }
  //     //마감여부 확인
  //     if (ds_txn.getCellData(i, "selYn") == "1") {
  //         let txnDt = ds_txn.getCellData(i, "txnDt");
  //         ret = await scwin.f_JobCloseYN($c.gus.cfIsNull(txnDt)?"":txnDt.substring(0, 6));
  //         if(!ret) {
  //             return;
  //         }
  //     }
  // }
  var row = ds_txn.getMatchedIndex("selYn", "1");
  for (let i = 0; i < row.length; i++) {
    if (ds_txn.getCellData(row[i], "internalTxnStsCd") != ACConstants.INTERNAL_TXN_REG) {
      await $c.gus.cfAlertMsg($p, "등록상태인 data만 청구할 수 있습니다.");
      return;
    }
    if (ds_txn.getCellData(row[i], "sysCd") != ACConstants.INTERNAL_MGNT_SYS_CD) {
      await $c.gus.cfAlertMsg($p, "관리회계 시스템에서 등록한 데이타만 청구 가능합니다.");
      return;
    }
    let txnDt = ds_txn.getCellData(row[i], "txnDt");
    ret = await scwin.f_JobCloseYN($c.gus.cfIsNull($p, txnDt) ? "" : txnDt.substring(0, 6));
    if (!ret) {
      return;
    }
  }

  // if (ds_txn.IsUpdated == false) {
  // 변경된 사항이 있는지 확인.
  if (ds_txn.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, "청구할 data가 없습니다.");
    return;
  }

  //청구할 것인지 confirm
  if (await $c.win.confirm($p, "청구하시겠습니까?")) {
    sbm_billTxn.userData1 = "noError";
    $c.sbm.execute($p, sbm_billTxn);
  }
};
scwin.sbm_billTxn_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "처리되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_billTxn_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 청구해제 버튼
 */
scwin.f_CancelBill = async function () {
  //asis 소스
  // let row = ds_txn.getRowCount();
  // let ret;
  // for (let i=0; i<row; i++) {
  //     if (ds_txn.getCellData(i, "selYn") == "1" &&
  //         ds_txn.getCellData(i, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_BILG) {
  //         await $c.gus.cfAlertMsg("청구상태인 data만 청구취소할 수 있습니다.");
  //         return;
  //     }
  //     if (ds_txn.getCellData(i, "selYn") == "1" &&
  //         ds_txn.getCellData(i, "sysCd") != ACConstants.INTERNAL_MGNT_SYS_CD) {
  //         await $c.gus.cfAlertMsg("관리회계 시스템에서 등록한 데이타만 청구해제 가능합니다.");
  //         return;
  //     }
  //     //마감여부 확인
  //     if (ds_txn.getCellData(i, "selYn") == "1") {
  //         let txnDt = ds_txn.getCellData(i, "txnDt");
  //         ret = await scwin.f_JobCloseYN($c.gus.cfIsNull(txnDt)?"":txnDt.substring(0, 6));
  //         if(!ret) {
  //             return;
  //         }
  //     }
  // }

  var row = ds_txn.getMatchedIndex("selYn", "1");
  for (let i = 0; i < row.length; i++) {
    if (ds_txn.getCellData(row[i], "internalTxnStsCd") != ACConstants.INTERNAL_TXN_BILG) {
      await $c.gus.cfAlertMsg($p, "청구상태인 data만 청구취소할 수 있습니다.");
      return;
    }
    if (ds_txn.getCellData(row[i], "sysCd") != ACConstants.INTERNAL_MGNT_SYS_CD) {
      await $c.gus.cfAlertMsg($p, "관리회계 시스템에서 등록한 데이타만 청구해제 가능합니다.");
      return;
    }
    //마감여부 확인
    let txnDt = ds_txn.getCellData(row[i], "txnDt");
    ret = await scwin.f_JobCloseYN($c.gus.cfIsNull($p, txnDt) ? "" : txnDt.substring(0, 6));
    if (!ret) {
      return;
    }
  }

  // if (ds_txn.IsUpdated == false) {
  // 변경된 사항이 있는지 확인.
  if (ds_txn.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, "청구취소할 data가 없습니다.");
    return;
  }

  //청구취소 할 것인지 confirm
  if (await $c.win.confirm($p, "청구취소하시겠습니까?")) {
    sbm_cancelTxn.userData1 = "noError";
    $c.sbm.execute($p, sbm_cancelTxn);
  }
};
scwin.sbm_cancelTxn_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "처리되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_cancelTxn_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 청구부서팝업
 */
scwin.f_openBilgPopUp = function (check) {
  //asis 소스
  // var rtnList = new Array();
  // ed_deptBilgNm.value = "";
  // var param = scwin.DDate.getDate("") + ",,,,,,,,," + ed_coCd.getValue();
  // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', ed_deptBilgCd.getValue().trim(), ed_deptBilgNm.value, check, null
  //     , null, null, null, param, "410", null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") {
  //         $c.gus.cfInitHidVal(ed_deptBilgCd);
  //         return;
  //     }
  //     ed_deptBilgCd.setValue = rtnList[0]; //귀속코드
  //     ed_deptBilgNm.value = rtnList[1]; //귀속명
  //     ds_search.setCellData(ds_search.RowPosition, "aggrBilgDeptYn", rtnList[8]); //집계부서여부
  // } else {
  //     ed_deptBilgCd.setValue = "";
  //     ed_deptBilgNm.value = "";
  // }
  let param = scwin.today + ",,,,,,,,," + ed_coCd.getValue();
  let allSearch = "T";
  if (check == "T") {
    allSearch = "F";
  }
  udc_deptBilgCd.cfCommonPopUp(scwin.udc_deptBilgCd_callBackFunc, ed_deptBilgCd.getValue(), ed_deptBilgNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, allSearch, null, null);
};

/**
 * 청구부서팝업 callBack
 */
scwin.udc_deptBilgCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_deptBilgCd.setValue(ret[0]); // 청구부서코드
    ed_deptBilgNm.setValue(ret[1]); // 청구부서명
    ed_deptBilgCd.hidVal = ret[0]; // 히든값
  } else {
    ed_deptBilgCd.setValue(""); // 청구부서코드
    ed_deptBilgNm.setValue(""); // 청구부서명
    ed_deptBilgCd.hidVal = ""; // 히든값
  }
};

/**
 * 매입부서팝업
 */
scwin.f_openPopUp = function (check) {
  //asis 소스
  // var rtnList = new Array();
  // ed_deptNm.value = "";
  // var param = scwin.DDate.getDate("") + ",,,,,,,,," + ed_coCd.getValue();
  // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', ed_deptCd.getValue().trim(), ed_deptNm.value, check, null
  //     , null, null, null, param, "410", null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") {
  //         $c.gus.cfInitHidVal(ed_deptCd);
  //         return;
  //     }
  //     ed_deptCd.setValue = rtnList[0]; //귀속코드
  //     ed_deptNm.value = rtnList[1]; //귀속명
  //     ds_search.setCellData(ds_search.RowPosition, "aggrDeptYn", rtnList[8]); //집계부서여부
  // } else {
  //     ed_deptCd.setValue = "";
  //     ed_deptNm.value = "";
  // }

  let param = scwin.today + ",,,,,,,,," + ed_coCd.getValue();
  let allSearch = "T";
  if (check == "T") {
    allSearch = "F";
  }
  udc_deptCd.cfCommonPopUp(scwin.udc_deptCd_callBackFunc, ed_deptCd.getValue(), ed_deptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, allSearch, null, null);
};

/**
 * 매입부서팝업 callBack
 */
scwin.udc_deptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_deptCd.setValue(ret[0]); // 매입부서코드
    ed_deptNm.setValue(ret[1]); // 매입부서명
    ed_deptCd.hidVal = ret[0]; // 히든값
    dma_search.set("aggrDeptYn", ret[8]); // 집계부서여부
  } else {
    ed_deptCd.setValue(""); // 매입부서코드
    ed_deptNm.setValue(""); // 매입부서명
    ed_deptCd.hidVal = ""; // 히든값
    dma_search.set("aggrDeptYn", ""); // 집계부서여부
  }
};

/**
 * 마감체크
 */
scwin.f_JobCloseYN = async function (txnDt) {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  // var isClose = cfJobCloseYN("CUR", txnDt, "00", wrkNo, "0", "ARR", "N", ed_coCd.getValue());
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
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", txnDt, "00", scwin.wrkNo, "0", "ARR", "N", ed_coCd.getValue()).then(function (arrRtn) {
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
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
scwin.f_GridToExcel = function (gr_groupCode, gridName) {
  // if (ds_txn.getRowCount() <= 0) {
  //     $c.win.alert("내부거래매출청구내역이 존재하지않습니다.");
  //     return false
  // }
  // $c.data.downloadGridViewExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);
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
 * 매입부서(조회) 팝업 호출
 */
scwin.udc_deptCd_onclickEvent = function (e) {
  if (ed_deptCd.hidVal != ed_deptCd.getValue()) {
    ed_deptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_deptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp(close);
};
scwin.udc_deptCd_onviewchangeCodeEvent = function (info) {
  ed_deptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_deptCd.getValue())) {
    scwin.f_openPopUp("T");
  }
};

/**
 * 청구부서(조회) 팝업 호출
 */
scwin.udc_deptBilgCd_onclickEvent = function (e) {
  if (ed_deptBilgCd.hidVal != ed_deptBilgCd.getValue()) {
    ed_deptBilgNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_deptBilgCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openBilgPopUp(close);
};
scwin.udc_deptBilgCd_onviewchangeCodeEvent = function (info) {
  ed_deptBilgNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_deptBilgCd.getValue())) {
    scwin.f_openBilgPopUp("T");
  }
};

/**
 * 거래일자 onBlue 이벤트(시작)
 */
scwin.udc_fromToCalendar1_onBlur = function () {
  // if(!$c.gus.cfIsNull(ica_inqStDt.getValue())) {
  //     if(!$c.date.isDate(ica_inqStDt.getValue())) {
  //         ica_inqStDt.setValue("");
  //         ica_inqStDt.focus();
  //     }
  // }
  // if(!$c.gus.cfIsNull(ica_inqStDt.getValue())) {
  //     ica_inqEndDt.focus();
  // }
};
/**
 * 거래일자 onBlue 이벤트(종료)
 */
scwin.udc_fromToCalendar1_onBlurTo = function (e) {
  // if(!$c.gus.cfIsNull(ica_inqEndDt.getValue())) {
  //     if(!$c.date.isDate(ica_inqEndDt.getValue())) {
  //         ica_inqEndDt.setValue("");
  //         ica_inqEndDt.focus();
  //     }
  // }
  // if(!$c.gus.cfIsNull(ica_inqStDt.getValue()) && !$c.gus.cfIsNull(ica_inqEndDt.getValue())) {
  //     ed_deptBilgCd.focus();
  // }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_txn_oncellclick = function (rowIndex, columnIndex, columnId) {
  //상세조회팝업
  if (columnId == "internalTxnBilgNo") {
    scwin.f_Detail(rowIndex);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'true',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_bilg',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_inqStDt',edToId:'ica_inqEndDt',id:'udc_fromToCalendar1',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_search',refEdDt:'txnEndDt',refStDt:'txnStDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_deptBilgCd',code:'acctDeptBilgCd',codeId:'ed_deptBilgCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_deptBilgCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_deptBilgCd_onviewchangeCodeEvent',id:'udc_deptBilgCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptBilgNm',nameId:'ed_deptBilgNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_deptBilgCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'매출부서',validTitle:'매출부서'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_deptCd',code:'acctDeptCd',codeId:'ed_deptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_deptCd_onviewchangeCodeEvent',id:'udc_deptCd',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_deptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_deptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'매입부서',validTitle:'매입부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_internalTxnStsCd',search:'start',style:'',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.internalTxnStsCd',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'내부매출청구현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"내부매출청구현황.xlsx", "sheetName":"내부매출청구현황", "type":"1", "hiddenVisible":false}',gridID:'gr_txn',gridUpYn:'N',grp:'grd_section1',id:'udc_excel1',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_txn',focusMode:'cell',id:'gr_txn',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true',rowStatusWidth:'20',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_txn_oncellclick',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'checkbox',removeBorderStyle:'false',width:'50',value:' ',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'110',value:'청구번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'110',value:'시스템'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'내부매출부서'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'내부매출부서',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'내부매입부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'내부매입부서',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작성일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'실거래일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'실화주거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'B/L번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column35',value:'진행상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selYn',inputType:'checkbox',removeBorderStyle:'false',width:'50',readOnly:'false',trueValue:'1',falseValue:'0',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'internalTxnBilgNo',inputType:'link',removeBorderStyle:'false',width:'110',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sysCd',inputType:'select',removeBorderStyle:'false',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAcctDeptCd',inputType:'text',width:'120',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAcctDeptNm',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'calendar',width:'100',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnDt',inputType:'calendar',width:'100',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'realTxnDt',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realMchtClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'select',id:'internalTxnStsCd',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column31',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'rsltsAmt_s1',displayMode:'label',textAlign:'right',expression:'SUM("rsltsAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column37',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_comChkRes',A:{style:'width:%; height:px; ;visibility:hidden;',id:'udc_cfJobCloseYN'}},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_detail',label:'상세',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bill',label:'청구',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Bill'},E:[{T:1,N:'xf:label',E:[{T:3,text:'청구'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancelBill',label:'청구취소',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_CancelBill'},E:[{T:1,N:'xf:label',E:[{T:3,text:'청구취소'}]}]}]}]}]}]}]}]}]})