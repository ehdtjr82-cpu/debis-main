/*amd /ui/ds/fs/adjm/fs_102_01_02b.xml 75288 4e34e28ba3b70c670a5bf3a9284f672077fa8b2495bdefa7299c80f14e3aad9b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'to',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_copCoConfirmDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'to',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBulkTpchsList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드(물류점소)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'일자구분(실적일자/확인일자)',dataType:''}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'실적일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'실적일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtSt',name:'협력업체확인일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtEnd',name:'협력업체확인일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmClsCd',name:'협력업체확인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAdmitClsCd',name:'매입승인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unconfirmedIncluYn',name:'미확인포함여부',dataType:'',defaultValue:'',encYN:'',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'unAdmitIncluYn',name:'미승인포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:''}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:''}},{T:1,N:'w2:key',A:{id:'incluYn',name:'구분(미확인포함여부/미승인포함여부)',dataType:''}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkTpchsList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'운송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtUnitNm',name:'중량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'매입물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitNm',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisTpchs',name:'기본하불',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisVatTpchs',name:'기본부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScVatAmt',name:'할증부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScItem',name:'할증항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPic',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsNm',name:'확인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsNm',name:'동부승인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dissent',name:'이의처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pstpnRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsCd',name:'확인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtUnitCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsPic',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'name77',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBulkTpchsList',action:'/ds.fs.adjm.pchscerticoll.RetrieveBulkTpchsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchBulkTpchsList","key":"IN_DS1"},{"id":"ds_bulkTpchsList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bulkTpchsList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_searchBulkTpchsList_submit','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBulkTpchsList',action:'/ds.fs.adjm.pchscerticoll.RegistCooperationCompanyConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bulkTpchsList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FS262",
    compID: "acb_pchsAdmitClsCd"
  }, {
    grpCd: "SD113",
    compID: "acb_odrKndCd"
  }, {
    grpCd: "FS261",
    compID: "acb_copCoConfirmClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const loginDTO = $c.data.getMemInfo($p); // 공통 세션 변수
  scwin.userClsCd = loginDTO.userClsCd ?? ''; // 사용자구분코드(02:협력업체(운송))
  scwin.loginClntNo = loginDTO.clntNo ?? '';
  scwin.loginClntNm = loginDTO.clntNm ?? '';
  scwin.vCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
  let yearMonth = scwin.vCurDate.slice(0, 6);
  scwin.vQryStDt = yearMonth + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = yearMonth + $c.date.getLastDateOfMonth($p, yearMonth); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
};

/**
 * @method 
 * @name f_OnLoad
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  acb_pchsAdmitClsCd.addItem('전체', '', '', 0);
  acb_odrKndCd.addItem('전체', '', '', 0);
  acb_copCoConfirmClsCd.addItem('전체', '', '', 0);
  acb_dtCls.setSelectedIndex(0); // 일자구분
  scwin.f_SelWrkDt();
  scwin.f_SetDefaultData();
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfDisableObjects($p, [ica_allCopCoConfirmDt]);

  // 테스트 데이터
  // ed_pchsClntNo.setValue('112595');
  // dma_wrkDt.set('from', '20200901');
  // dma_wrkDt.set('to', '20200930');

  // ed_pchsClntNo.setValue('316785');
  // dma_wrkDt.set('from', '20250101');
  // dma_wrkDt.set('to', '20260228');
  // ed_vehclShortCd.setValue('6688');

  // ed_pchsClntNo.setValue('316785');
  // dma_wrkDt.set('from', '20250701');
  // dma_wrkDt.set('to', '20250701');
  // ed_dptWrkPlCd.setValue('3M45');
  // ed_arvWrkPlCd.setValue('3P01');

  // ed_pchsClntNo.setValue('903702');
  // ed_wrkDtSt.setValue('20250101');
  // ed_wrkDtEnd.setValue('20250630');
};

/**
 * @method 
 * @name f_SetDefaultData
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  scwin.f_GetConfirmCntTotAmt(); // 건수/총금액 계산

  ed_wrkDtSt.setValue(scwin.vQryStDt); // 실적일자시작
  ed_wrkDtEnd.setValue(scwin.vQryEndDt); // 실적일자종료
  ed_copCoConfirmDtSt.setValue(scwin.vQryStDt); // 확인일자시작
  ed_copCoConfirmDtEnd.setValue(scwin.vQryEndDt); // 확인일자종료

  acb_copCoConfirmClsCd.setMaxLength(50);
  acb_copCoConfirmClsCd.setSelectedIndex(0);
  acb_pchsAdmitClsCd.setMaxLength(50);
  acb_pchsAdmitClsCd.setSelectedIndex(0);
  acb_odrKndCd.setMaxLength(50);
  acb_odrKndCd.setSelectedIndex(0);
  if (scwin.userClsCd != "01") {
    // 내부사용자가 아니면
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    txt_pchsClntNm.setValue(scwin.loginClntNm);
    ed_pchsClntNo.setDisabled(false);
    txt_pchsClntNm.setDisabled(true);
    img_PopUp1.setDisabled(true);
  } else {
    ed_pchsClntNo.focus();
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveBulkTpchsList
 * @description 벌크하불목록 조회
 */
scwin.f_RetrieveBulkTpchsList = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  let validDateArray = []; // datamap, from, to
  let dtClsVal = acb_dtCls.getValue();
  switch (dtClsVal) {
    // 실적일자/운송일자 기준
    case '01':
    case '03':
      validDateArray = [dma_wrkDt, ed_wrkDtSt, ed_wrkDtEnd];
      break;

    // 확인일자 기준
    case '02':
      validDateArray = [dma_copCoConfirmDt, ed_copCoConfirmDtSt, ed_copCoConfirmDtEnd];
      break;
    default:
      break;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, validDateArray[1], validDateArray[2]]))) {
    return;
  }
  ;
  if (!$c.gus.cfIsAfterDate($p, validDateArray[0].get('from'), validDateArray[0].get('to'))) {
    $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    validDateArray[1].focus();
    return;
  }
  ;

  // 차량번호와 SPOT차량번호 조회 조건 체크
  dma_searchBulkTpchsList.set("vehclNo", "");
  if (!$c.gus.cfIsNull($p, txt_vehclNo.getValue()) && !$c.gus.cfIsNull($p, ed_spotVehclNo.getValue())) {
    $c.gus.cfAlertMsg($p, "차량번호와 SPOT차량번호 중 하나만 조회가능합니다.");
    txt_vehclNo.focus();
    return;
  }
  ;
  if (!$c.gus.cfIsNull($p, txt_vehclNo.getValue())) {
    // 차량번호
    dma_searchBulkTpchsList.set("vehclNo", txt_vehclNo.getValue());
  } else if (!$c.gus.cfIsNull($p, ed_spotVehclNo.getValue())) {
    // SPOT차량번호
    dma_searchBulkTpchsList.set("vehclNo", ed_spotVehclNo.getValue());
  }
  ;

  // 구분(미확인포함여부/미승인포함여부)- 쿼리문에서 사용
  if (cbx_unconfirmedIncluYn.getValue() == 0 && cbx_unAdmitIncluYn.getValue() == 0) {
    dma_searchBulkTpchsList.set("incluYn", "N");
  } else {
    dma_searchBulkTpchsList.set("incluYn", "Y");
  }
  ;
  scwin.submitExcute(sbm_searchBulkTpchsList);
};

/**
 * @method 
 * @name f_RetrieveBulkTpchsList
 * @description 벌크하불 확인
 */
scwin.f_Confirm = function () {
  // Data 변경 여부 조회
  if (ds_bulkTpchsList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 01:미확인, 03:이의신청, 04:이의거부, 05:이의수용
  let rowCnt = ds_bulkTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      if (rowData.copCoConfirmClsCd == "02") {
        $c.gus.cfAlertMsg($p, "이미 확인된 건이 포함되어 있습니다.");
        return;
      }
      ;
    }
    ;
  }
  ;

  // 일괄적용 확인일자
  let allCopCoConfirmDt = ica_allCopCoConfirmDt.getValue();
  if ($c.gus.cfIsNull($p, allCopCoConfirmDt) || allCopCoConfirmDt == "") {
    allCopCoConfirmDt = scwin.vCurDate;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      rowData.copCoConfirmClsCd = "02";
      rowData.copCoConfirmClsNm = "확인";
      rowData.copCoConfirmDt = allCopCoConfirmDt; // 일괄적용 확인일자
      rowData.btn = "T";
      rowData.chk = "F";
      ds_bulkTpchsList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveBulkTpchsList
 * @description 벌크하불 확인일자 수정
 */
scwin.f_ConfirmDtUpdate = function () {
  // Data 변경 여부 조회
  if (ds_bulkTpchsList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인, 03:보류
  let rowCnt = ds_bulkTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      if (rowData.copCoConfirmClsCd != "02") {
        $c.gus.cfAlertMsg($p, "미확인인 건이 포함되어 있습니다.");
        return;
      }
      ;
      if (rowData.pchsAdmitClsCd == "02") {
        $c.gus.cfAlertMsg($p, "이미 동부 승인이 이루어진 건이 포함되어 있습니다.");
        return;
      }
      ;
    }
    ;
  }
  ;

  // 일괄적용 확인일자
  let allCopCoConfirmDt = ica_allCopCoConfirmDt.getValue();
  if ($c.gus.cfIsNull($p, allCopCoConfirmDt) || allCopCoConfirmDt == "") {
    allCopCoConfirmDt = scwin.vCurDate;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      rowData.copCoConfirmDt = allCopCoConfirmDt; // 일괄적용 확인일자
      rowData.btn = "T";
      rowData.chk = "F";
      ds_bulkTpchsList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveBulkTpchsList
 * @description 벌크하불 확인 취소
 */
scwin.f_ConfirmCancel = function () {
  // Data 변경 여부 조회
  if (ds_bulkTpchsList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인
  let rowCnt = ds_bulkTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      if (rowData.copCoConfirmClsCd != "02") {
        $c.gus.cfAlertMsg($p, "미확인인 건이 포함되어 있습니다.");
        return;
      }
      ;
      if (rowData.pchsAdmitClsCd != "01") {
        $c.gus.cfAlertMsg($p, "이미 동부 승인이 이루어진 건이 포함되어 있습니다.");
        return;
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      rowData.copCoConfirmClsCd = "01";
      rowData.copCoConfirmClsNm = "미확인";
      rowData.copCoConfirmDt = "";
      rowData.rsltsPic = ""; // 실적담당자							
      rowData.btn = "T";
      rowData.chk = "F";
      ds_bulkTpchsList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_DissentApply
 * @description 벌크하불 이의제기
 */
scwin.f_DissentApply = function () {
  // Data 변경 여부 조회
  if (ds_bulkTpchsList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 01:미확인, 04:이의거부, 05:이의수용
  let rowCnt = ds_bulkTpchsList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      if (["02", "03"].includes(rowData.copCoConfirmClsCd)) {
        $c.gus.cfAlertMsg($p, "확인된 건이 포함되어 있습니다.\n해당건은 먼저 확인취소를 해야 합니다.");
        return;
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.chk == "T") {
      rowData.copCoConfirmClsCd = "03";
      rowData.copCoConfirmClsNm = "이의신청";
      rowData.copCoConfirmDt = "";
      rowData.dissent = "이의 내용을 입력하십시오.";
      rowData.btn = "T";
      rowData.chk = "F";
      ds_bulkTpchsList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_Cancel
 * @description 취소
 */
scwin.f_Cancel = function () {
  // Data 변경 여부 조회
  if (ds_bulkTpchsList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 취소할 목록 선택
  let rowCnt = ds_bulkTpchsList.getRowCount();
  let cnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_bulkTpchsList.getCellData(i, "chk") == "T") {
      cnt++;
    }
    ;
  }
  ;
  if (cnt == 0) {
    $c.gus.cfAlertMsg($p, "취소할 목록을 선택하십시오.");
    return;
  }
  ;

  // 원래값 복원		
  for (let i = 0; i < rowCnt; i++) {
    if (ds_bulkTpchsList.getCellData(i, "chk") == "T") {
      // 해당 DataSet의 Row를 원래값(=Original Data)로 복원
      ds_bulkTpchsList.undoRow(i);
      ds_bulkTpchsList.setCellData(i, "btn", "F");
      ds_bulkTpchsList.setCellData(i, "chk", "F");
    }
    ;
  }
  ;
  gr_bulkTpchsList.setColumnReadOnly('copCoConfirmDt', false); // 입력불가
};

/**
 * @method 
 * @name f_Save
 * @description 저장
 */
scwin.f_Save = async function () {
  // Data 변경 여부 조회
  if (ds_bulkTpchsList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 처리버튼 클릭여부
  let rowCnt = ds_bulkTpchsList.getRowCount();
  let cnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_bulkTpchsList.getCellData(i, "chk") == "T") {
      cnt++;
    }
    ;
  }
  ;
  if (cnt == 0) {
    $c.gus.cfAlertMsg($p, "처리할 업무을 선택하십시오.");
    return;
  }
  ;

  // 확인 날짜입력시 validate 체크
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.btn == "T" && rowData.copCoConfirmClsCd == "02") {
      if ($c.num.isNumber($p, rowData.copCoConfirmDt)) {
        if (!$c.date.isDate($p, rowData.copCoConfirmDt, false)) {
          $c.gus.cfAlertMsg($p, i + 1 + "번째 데이타에서 확인일자는 'YYYYMMDD' 형식이어야 합니다.");
          ds_bulkTpchsList.setRowPosition(i);
          return;
        }
        ;
      }
      ;

      // 이의신청시 이의처리/보류사유 입력
      if (rowData.copCoConfirmClsCd == "03") {
        if (rowData.dissent.length == 0 || rowData.dissent == null || rowData.dissent == "이의 내용을 입력하십시오.") {
          $c.gus.cfAlertMsg($p, i + "번째 데이타에서 이의처리/보류사유를 입력하십시오.");
          ds_bulkTpchsList.setRowPosition(i);
          return;
        }
        ;
      }
      ;
    }
    ;
  }
  ;

  // 저장하시겠습니까?
  let retVal = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retVal) return;
  scwin.submitExcute(sbm_saveBulkTpchsList);
};

/**
 * @method 
 * @name f_RetrieveDissentApplyHistory
 * @description 이의신청 이력 수정
 * @param {number} row
 */
scwin.f_RetrieveDissentApplyHistory = async function (row) {
  // 팝업화면에게 key 정보인 오더번호와 매입순번을 넘겨준다.
  let rowData = ds_bulkTpchsList.getRowJSON(row);
  let valueObject = {
    'odrNo': rowData.odrNo,
    // 오더번호
    'pchsSeq': rowData.pchsSeq // 매입순번
  };

  // 이의신청 이력 화면 호출
  let url = '/ui/ds/fs/adjm/fs_102_01_01p.xml';
  let options = {
    type: 'browserPopup',
    width: '825px',
    height: '520px'
  };
  await $c.win.openPopup($p, url, options, valueObject);

  // 다시 조회함 
  // scwin.f_RetrieveContainerTpchsList(); // TODO - 해당 함수 미존재
};

/**
 * @method 
 * @name f_GetConfirmCntTotAmt
 * @description 조회건수/조회총금액, 확인건수/확인총금액 계산
 */
scwin.f_GetConfirmCntTotAmt = function () {
  // 기본하불 + 할증금액	
  let qryCnt = 0;
  let qryTotAmt = 0;
  let rowCnt = ds_bulkTpchsList.getRowCount();

  // 합계 계산
  let columnValArray = [];
  columnValArray = ds_bulkTpchsList.getColData('basisTpchs');
  let basisTpchsTotAmt = columnValArray.reduce((accumulator, currentValue) => {
    return accumulator += $c.num.parseInt($p, currentValue);
  }, 0);
  columnValArray = ds_bulkTpchsList.getColData('dcScAmt');
  let dcScAmtTotAmt = columnValArray.reduce((accumulator, currentValue) => {
    return accumulator += $c.num.parseInt($p, currentValue);
  }, 0);
  if (rowCnt > 0) {
    qryCnt = rowCnt;
    qryTotAmt = basisTpchsTotAmt + dcScAmtTotAmt;
  }
  ;
  lay_qryCnt.setValue($c.gus.cfInsertComma($p, qryCnt));
  lay_qryTotAmt.setValue($c.gus.cfInsertComma($p, qryTotAmt));

  // 확인구분이 승인(02)인 경우만 기본하불 + 할증금액 계산		
  let confirmTotAmt = 0;
  let confirmVatAmt = 0;
  let confirmCnt = 0;
  for (let i = 0; i < ds_bulkTpchsList.getRowCount(); i++) {
    let rowData = ds_bulkTpchsList.getRowJSON(i);
    if (rowData.copCoConfirmClsCd == "02") {
      confirmTotAmt += $c.num.parseInt($p, rowData.basisTpchs) + $c.num.parseInt($p, rowData.dcScAmt);
      confirmVatAmt += $c.num.parseInt($p, rowData.basisVatTpchs) + $c.num.parseInt($p, rowData.dcScVatAmt);
      confirmCnt++;
    }
    ;
  }
  ;
  lay_confirmCnt.setValue($c.gus.cfInsertComma($p, confirmCnt));
  lay_confirmTotAmt.setValue($c.gus.cfInsertComma($p, confirmTotAmt));
  lay_confirmVatAmt.setValue($c.gus.cfInsertComma($p, confirmVatAmt));
};

/**
 * @method 
 * @name f_SelWrkDt
 * @description 실적일자/운송일자 선택
 */
scwin.f_SelWrkDt = function () {
  udc_wrkDt.show('');
  udc_copCoConfirmDt.hide();
  lay_gubun1.show('');
  lay_gubun2.show('');
  lay_gubun3.show('');
  lay_gubun4.show('');
};

/**
 * @method 
 * @name f_SelWrkDt
 * @description 확인일자 선택
 */
scwin.f_SelCopCoConfirmDt = function () {
  udc_wrkDt.hide();
  udc_copCoConfirmDt.show('');
  lay_gubun1.hide();
  lay_gubun2.hide();
  lay_gubun3.hide();
  lay_gubun4.hide();
};

/**
 * @method 
 * @name f_RunExcel
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = function () {
  let count = ds_bulkTpchsList.getRowCount();
  if (!(count > 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;
  let options = {
    sheetName: "벌크 하불 내역 확인",
    fileName: "벌크 하불 내역 확인.xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  let infoArr = [{
    text: '벌크 하불 내역 확인',
    rowIndex: 0,
    colSpan: gr_bulkTpchsList.getTotalCol(),
    textAlign: 'center',
    fontSize: '12px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff'
  }];
  $c.data.downloadGridViewExcel($p, gr_bulkTpchsList, options, infoArr);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 * @param {number} disGubun
 * @param {string} pCode
 * @param {string} pName
 * @param {string} pClose
 * @param {string} pAllSearch
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let comCodeComp, codeNameArray, selectedId;
  let pDispCnt = null,
    pTitle = null,
    pWidth = null,
    pHidden = null,
    pWhere = null,
    pW = null,
    pH = null,
    pTop = null,
    pLeft = null,
    pExistTF = null,
    pWtitleSearch = null,
    pNoDataCloseTF = null;
  switch (disGubun) {
    case 1:
      // 협력회사 팝업
      comCodeComp = udc_pchsClnt;
      selectedId = 'retrieveClntList';
      codeNameArray = [ed_pchsClntNo, txt_pchsClntNm]; // 협력회사코드, 협력회사명
      break;
    case 2:
      // 차량번호 팝업
      comCodeComp = udc_vehcl;
      selectedId = 'retrieveVehiclesNo';
      codeNameArray = [ed_vehclShortCd, txt_vehclNo]; // 차량단축코드, 차량번호
      break;
    case 3:
      // 동부부서 팝업
      comCodeComp = udc_pchsDept;
      selectedId = 'retrieveLobranInfo';
      codeNameArray = [ed_pchsDeptCd, txt_pchsDeptNm]; // 점소코드, 점소명
      break;
    case 4:
      // 화주 팝업
      comCodeComp = udc_realMchtClnt;
      selectedId = 'retrieveClntList';
      codeNameArray = [ed_realMchtClntNo, txt_realMchtClntNm]; // 화주코드, 화주명	
      break;
    case 5:
      // 출발지 팝업
      comCodeComp = udc_dptWrkPl;
      selectedId = 'retrieveWrkPlInfo';
      codeNameArray = [ed_dptWrkPlCd, txt_dptWrkPlNm]; // 출발지코드, 출발지명	
      break;
    case 6:
      // 도착지 팝업
      comCodeComp = udc_arvWrkPl;
      selectedId = 'retrieveWrkPlInfo';
      codeNameArray = [ed_arvWrkPlCd, txt_arvWrkPlNm]; // 도착지코드, 도착지명	
      break;
    case 7:
      // 화종 팝업
      comCodeComp = udc_kcg;
      selectedId = 'retrieveKcgInfo';
      codeNameArray = [ed_kcgCd, txt_kcgNm]; // 화종코드, 화종명	
      break;
    case 8:
      // 품명 팝업
      comCodeComp = udc_comm;
      selectedId = 'retrieveCommInfo';
      codeNameArray = [ed_commCd, txt_commNm]; // 품명코드, 품명명	
      break;
    case 9:
      // 본선관리번호
      let args = new Array();
      args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호

      let url = '/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml';
      let options = {
        type: 'browserPopup',
        width: '900px',
        height: '500px',
        popupName: '본선관리번호검색팝업'
      };
      let rtnValues = await $c.win.openPopup($p, url, options, args);
      if (rtnValues != null) ed_cvsslMgntNo.setValue(rtnValues[0]);
      return;
    case 10:
      // 협력업체 팝업
      comCodeComp = udc_copCoClnt;
      selectedId = 'retrieveClntList';
      codeNameArray = [ed_copCoClntNo, txt_copCoClntNm]; // 협력회사코드, 협력회사명	
      break;
    default:
      break;
  }
  ;
  comCodeComp.setSelectId(selectedId);
  comCodeComp.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeNameArray[0], codeNameArray[1]);
  }, pCode.trim(), pName, pClose, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearch, pWtitleSearch, pNoDataCloseTF);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} pairObj
 * @param {number} disGubun
 * @param {string} isCode
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData, [acb_dtCls]);
  // todo - cfInitObjects 으로 초기화가 안됨
  ed_pchsClntNo.setValue('');
  txt_pchsClntNm.setValue('');
  scwin.f_SetDefaultData();
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @evnet 
 * @name sbm_searchBulkTpchsList_submit 
 * @description 벌크하불목록 조회 요청 전
 */
scwin.sbm_searchBulkTpchsList_submit = function (e) {
  let jsonData = dma_searchBulkTpchsList.getJSON();
  jsonData.pchsClntNo = ed_pchsClntNo.getValue(); // 매입거래처번호
  jsonData.pchsDeptCd = ed_pchsDeptCd.getValue(); // 매입부서코드(물류점소)
  jsonData.dtCls = acb_dtCls.getValue(); // 일자구분(실적일자/확인일자)
  jsonData.wrkDtSt = ed_wrkDtSt.getValue(); // 실적일자시작
  jsonData.wrkDtEnd = ed_wrkDtEnd.getValue(); // 실적일자종료
  jsonData.copCoConfirmDtSt = ed_copCoConfirmDtSt.getValue(); // 협력업체확인일자시작
  jsonData.copCoConfirmDtEnd = ed_copCoConfirmDtEnd.getValue(); // 협력업체확인일자종료
  jsonData.copCoConfirmClsCd = acb_copCoConfirmClsCd.getValue(); // 협력업체확인구분코드
  jsonData.pchsAdmitClsCd = acb_pchsAdmitClsCd.getValue(); // 매입승인구분코드
  jsonData.unconfirmedIncluYn = cbx_unconfirmedIncluYn.getValue(); // 미확인포함여부
  jsonData.unAdmitIncluYn = cbx_unAdmitIncluYn.getValue(); // 미승인포함여부
  jsonData.odrNo = ed_odrNo.getValue(); // 오더번호	
  jsonData.odrKndCd = acb_odrKndCd.getValue(); // 오더종료코드
  jsonData.realMchtClntNo = ed_realMchtClntNo.getValue(); // 실화주거래처번호
  jsonData.dptWrkPlCd = ed_dptWrkPlCd.getValue(); // 출발작업장코드
  jsonData.arvWrkPlCd = ed_arvWrkPlCd.getValue(); // 도착작업장코드
  jsonData.kcgCd = ed_kcgCd.getValue(); // 화종코드
  jsonData.commCd = ed_commCd.getValue(); // 품명코드
  jsonData.copCoClntNo = ed_copCoClntNo.getValue(); // 협력업체
  jsonData.cvsslMgntNo = ed_cvsslMgntNo.getValue(); // 본선관리번호

  dma_searchBulkTpchsList.setJSON(jsonData);
};

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    // 벌크하불목록 조회
    case sbm_searchBulkTpchsList:
      // 총 조회건수 표시
      const rowCnt = ds_bulkTpchsList.getRowCount();
      totalRows.setValue(rowCnt);

      // 건수/총금액 계산
      scwin.f_GetConfirmCntTotAmt();
      gr_bulkTpchsList.setHeaderValue('chkHeader', false);
      if (rowCnt == 0) {
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfDisableObjects($p, [ica_allCopCoConfirmDt]);
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
      } else {
        $c.gus.cfEnableAllBtn($p);
        $c.gus.cfEnableObjects($p, [ica_allCopCoConfirmDt]);
      }
      ;
      break;

    // 벌크하불목록 조회
    case sbm_saveBulkTpchsList:
      scwin.f_RetrieveBulkTpchsList();
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      break;
    default:
      break;
  }
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @evnet 
 * @name acb_dtCls_onchange 
 * @description 사용자가 선택 항목을 변경할 경우 발생.
 */
scwin.acb_dtCls_onchange = function (info) {
  // 조회조건(실적일자 / 운송일자 / 확인일자) 선택
  let dtClsVal = acb_dtCls.getValue();
  switch (dtClsVal) {
    case '01':
    case '03':
      scwin.f_SelWrkDt();
      break;
    case '02':
      scwin.f_SelCopCoConfirmDt();
      break;
    default:
      break;
  }
  ;
};

/**
 * @evnet 
 * @name gr_bulkTpchsList_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} columnId
 */
scwin.gr_bulkTpchsList_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 그리드 편집
  const rowData = ds_bulkTpchsList.getRowJSON(rowIndex);
  let btn = rowData.btn;
  let copCoConfirmClsCd = rowData.copCoConfirmClsCd;

  // 확인
  if (columnId == "copCoConfirmDt" && btn == "T" && copCoConfirmClsCd != "03") {
    gr_bulkTpchsList.setColumnReadOnly('copCoConfirmDt', false);
  } else {
    gr_bulkTpchsList.setColumnReadOnly('copCoConfirmDt', true);
  }

  // 미확인
  if (columnId == "copCoConfirmDt" && btn == "T" && copCoConfirmClsCd == "01") {
    gr_bulkTpchsList.setColumnReadOnly('copCoConfirmDt', true);
  }

  // 이의처리/보류사유
  if (columnId == "dissent" && btn == "T" && copCoConfirmClsCd == "03") {
    gr_bulkTpchsList.setColumnReadOnly('dissent', false);
  } else {
    gr_bulkTpchsList.setColumnReadOnly('dissent', true);
  }
  ;

  // 이의신청 이력 수정
  if (columnId == "dissent" && ds_bulkTpchsList.getRowStatusValue(rowIndex) == "0" && ds_bulkTpchsList.getCellData(rowIndex, "dissent") != "") {
    // tobe - 사용하지않음
    return;
    scwin.f_RetrieveDissentApplyHistory(rowIndex);
  }
  ;
};

/**
 * @evnet 
 * @name gr_bulkTpchsList_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} value
 */
scwin.gr_bulkTpchsList_oneditend = function (rowIndex, columnIndex, value) {
  // 확인 날짜입력시 validate 체크
  if (columnIndex != "copCoConfirmDt") return;
  let date = ds_bulkTpchsList.getCellData(rowIndex, "copCoConfirmDt");
  if ($c.num.isNumber($p, value)) {
    if (!$c.date.isDate($p, value, false)) {
      $c.gus.cfAlertMsg($p, "확인일자는 'YYYYMMDD' 형식이어야 합니다.");
      return;
    }
    ;
  } else {
    ds_bulkTpchsList.setCellData(rowIndex, "copCoConfirmDt", date);
    $c.gus.cfAlertMsg($p, "확인일자를 다시 입력하십시오.");
    return;
  }
  ;
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 협력회사 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 1);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 협력회사 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsClntNm, ed_pchsClntNo, 1, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 협력회사 검색버튼 클릭시 발생
 */
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), txt_pchsClntNm.getValue(), 'F', 'F');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 차량번호 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_vehcl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclShortCd, txt_vehclNo, 2);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 차량번호 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_vehcl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_vehclNo, ed_vehclShortCd, 2, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 차량번호 검색버튼 클릭시 발생
 */
scwin.udc_vehcl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_vehclShortCd.getValue(), txt_vehclNo.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 동부부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 3);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 동부부서 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsDeptNm, ed_pchsDeptCd, 3, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 동부부서 검색버튼 클릭시 발생
 */
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_pchsDeptCd.getValue(), txt_pchsDeptNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 화주 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_realMchtClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_realMchtClntNo, txt_realMchtClntNm, 4);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 화주 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_realMchtClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_realMchtClntNm, ed_realMchtClntNo, 4, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 화주 검색버튼 클릭시 발생
 */
scwin.udc_realMchtClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_realMchtClntNo.getValue(), txt_realMchtClntNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 출발지 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_dptWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, txt_dptWrkPlNm, 5);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 출발지 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_dptWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_dptWrkPlNm, ed_dptWrkPlCd, 5, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 출발지 검색버튼 클릭시 발생
 */
scwin.udc_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 도착지 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_arvWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, txt_arvWrkPlNm, 6);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 도착지 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_arvWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_arvWrkPlNm, ed_arvWrkPlCd, 6, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 도착지 검색버튼 클릭시 발생
 */
scwin.udc_arvWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_arvWrkPlCd.getValue(), txt_arvWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 화종 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_kcg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_kcgCd, txt_kcgNm, 7);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 화종 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_kcg_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_kcgNm, ed_kcgCd, 7, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 화종 검색버튼 클릭시 발생
 */
scwin.udc_kcg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_kcgCd.getValue(), txt_kcgNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 품명 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_comm_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, txt_commNm, 8);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 품명 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_comm_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_commNm, ed_commCd, 8, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 품명 검색버튼 클릭시 발생
 */
scwin.udc_comm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_commCd.getValue(), txt_commNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 품명 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_copCoClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNo, txt_copCoClntNm, 10);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 품명 name 컴포넌트의 value가 변경되었을 때 발생.
 */
scwin.udc_copCoClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_copCoClntNm, ed_copCoClntNo, 10, false);
};

/**
 * @evnet 
 * @name udc_pchsClnt_onclickEvent 
 * @description 품명 검색버튼 클릭시 발생
 */
scwin.udc_copCoClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_copCoClntNo.getValue(), txt_copCoClntNm.getValue(), 'F', 'T');
};

/**
 * @evnet 
 * @name btn_cvsslMgntNo_onclick 
 * @description 본선관리번호 검색버튼 클릭시 발생
 */
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(9, 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_pchsClntNo',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'6',nameId:'txt_pchsClntNm',maxlengthName:'50',objTypeName:'data',readOnlyName:'false',btnId:'img_PopUp1',id:'udc_pchsClnt','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent',validTitle:'협력회사',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'req',editType:'select',id:'acb_dtCls',ref:'',search:'start',style:'width:90px;',submenuSize:'auto',displayMode:'label','ev:onchange':'scwin.acb_dtCls_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_wrkDt',refEdDt:'to',refStDt:'from',style:'',edFromId:'ed_wrkDtSt',edToId:'ed_wrkDtEnd',objTypeFrom:'Data',objTypeTo:'Data',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',titleFrom:'실적(운송)일자시작',titleTo:'실적(운송)일자종료'}},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_copCoConfirmDtSt',edToId:'ed_copCoConfirmDtEnd',id:'udc_copCoConfirmDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'Data',objTypeTo:'Data',refDataMap:'dma_copCoConfirmDt',refEdDt:'to',refStDt:'from',style:'display: none;'}},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_copCoConfirmDtSt',edToId:'ed_copCoConfirmDtEnd',id:'udc_copCoConfirmDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'Data',objTypeTo:'Data',refDataMap:'dma_copCoConfirmDt',refEdDt:'to',refStDt:'from',style:'',titleFrom:'확인일자시작',titleTo:'확인일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'lay_gubun1',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인구분',ref:'',style:'width: 72px;',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'lay_gubun2',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_copCoConfirmClsCd',objType:'data',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',falseValue:'0',id:'cbx_unconfirmedIncluYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 이전 미확인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'lay_gubun3',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부승인구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'lay_gubun4',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_pchsAdmitClsCd',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',falseValue:'0',id:'cbx_unAdmitIncluYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 동부 미승인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclShortCd',nameId:'txt_vehclNo',mandatoryCode:'false',UpperFlagCode:'1',maxlengthCode:'6',objTypeName:'Data',mandatoryName:'false',maxlengthName:'50',btnId:'img_PopUp2',id:'udc_vehcl','ev:onblurCodeEvent':'scwin.udc_vehcl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehcl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_vehcl_onclickEvent',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SPOT차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_spotVehclNo',placeholder:'',style:'width:150px;',maxlength:'12'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',style:'width:0;',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:'width: 315px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptWrkPlCd',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'5',maxlengthName:'50',objTypeName:'data',mandatoryName:'false',btnId:'img_PopUp5',nameId:'txt_dptWrkPlNm',id:'udc_dptWrkPl','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptWrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent',validTitle:'출발지',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',style:'width:0;',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:'width: 72px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',nameId:'txt_arvWrkPlNm',btnId:'img_PopUp6',id:'udc_arvWrkPl',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'5',maxlengthName:'50',objTypeName:'data',mandatoryName:'false','ev:onblurCodeEvent':'scwin.udc_arvWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_arvWrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_arvWrkPl_onclickEvent',validTitle:'도착지',progressBarSwitch:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_realMchtClntNo',nameId:'txt_realMchtClntNm',btnId:'img_PopUp4',id:'udc_realMchtClnt',maxlengthCode:'6',UpperFlagCode:'0',mandatoryCode:'false',maxlengthName:'50',objTypeName:'data',mandatoryName:'false','ev:onblurCodeEvent':'scwin.udc_realMchtClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_realMchtClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_realMchtClnt_onclickEvent',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_kcgCd',nameId:'txt_kcgNm',btnId:'img_PopUp7',id:'udc_kcg',mandatoryCode:'false',UpperFlagCode:'1',maxlengthCode:'6',objTypeName:'data',mandatoryName:'false',maxlengthName:'50','ev:onblurCodeEvent':'scwin.udc_kcg_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_kcg_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_kcg_onclickEvent',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_commCd',nameId:'txt_commNm',btnId:'img_PopUp8',id:'udc_comm',UpperFlagCode:'1',maxlengthCode:'8',mandatoryCode:'false',maxlengthName:'50',objTypeName:'data',mandatoryName:'false','ev:onblurCodeEvent':'scwin.udc_comm_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comm_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_comm_onclickEvent',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsDeptCd',nameId:'txt_pchsDeptNm',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',mandatoryCode:'false',maxlengthCode:'4',UpperFlagCode:'1',maxlengthName:'50',btnId:'img_PopUp3',id:'udc_pchsDept','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent',progressBarSwitch:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:110px;',maxlength:'13',allowChar:'A-Z0-9',mandatory:'true',title:'오더번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 85px;',maxlength:'8',allowChar:'A-Z 0-9',validExp:'본선관리번호:yes',objType:'data',mandatory:'true',title:'본선관리번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_copCoClntNo',nameId:'txt_copCoClntNm',btnId:'img_PopUp10',id:'udc_copCoClnt',objTypeCode:'Data',objTypeName:'data',mandatoryCode:'true',mandatoryName:'false',validExpCode:'협력회사:yes',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'6',maxlengthName:'50','ev:onblurCodeEvent':'scwin.udc_copCoClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_copCoClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_copCoClnt_onclickEvent',validTitle:'협력회사',progressBarSwitch:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_RetrieveBulkTpchsList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'f_RunExcel',gridID:'gr_bulkTpchsList',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bulkTpchsList',id:'gr_bulkTpchsList',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'1','ev:oncellclick':'scwin.gr_bulkTpchsList_oncellclick','ev:oneditend':'scwin.gr_bulkTpchsList_oneditend',columnMove:'true',mergeExcludeValue:' ,$blank,0'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkHeader',inputType:'checkbox',width:'50',valueType:'boolean',checkboxLabel:'   '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'운송일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'송장번호',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품명',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수량',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'중량',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'중량<br/>단위',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'CBM',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매입물량',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업<br/>단위',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column94',value:'단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'출발지',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'도착지',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'기본하불',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',value:'기본<br/>부가세',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'할증금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'할증<br/>부가세',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'할증항목',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'확인일자',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'배차담당자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'화주',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column61',value:'오더번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'오더종류',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'차량번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'합적번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'확인<br/>구분',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'동부<br/>승인',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column43',value:'이의처리',displayMode:'label',class:'txt-blue',sortable:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column40',value:'보류사유',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'부서',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'실적기준일자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'본선관리번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'협력업체',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',displayFormat:'\'\''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',colMerge:'true',upperColumn:'wrkUnitNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'invoiceNo',inputType:'text',width:'100',readOnly:'true',colMerge:'true',upperColumn:'wrkDt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'invoiceNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',readOnly:'true',colMerge:'true',upperColumn:'commNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.000',colMerge:'true',upperColumn:'qty'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wtUnitNm',inputType:'text',width:'70',readOnly:'true',colMerge:'true',upperColumn:'wt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'70',textAlign:'right',readOnly:'true',colMerge:'true',upperColumn:'wtUnitNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vol',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.000',colMerge:'true',upperColumn:'cbm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkUnitNm',inputType:'text',width:'70',readOnly:'true',colMerge:'true',upperColumn:'vol'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsUpr',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',colMerge:'true',upperColumn:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'basisTpchs',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'basisVatTpchs',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScVatAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScItem',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoConfirmDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarPic',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'coshippingNo'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true',colMerge:'true',value:'',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndCd',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'odrNo'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'odrKndCd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshippingNo',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'vehclNo'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'copCoConfirmClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAdmitClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'dissent',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'pstpnRsn',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsDeptCd',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'vol\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column96',displayMode:'label',textAlign:'right',expression:'sum(\'pchsUpr\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column87',displayMode:'label',textAlign:'right',expression:'sum(\'basisTpchs\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column84',displayMode:'label',textAlign:'right',expression:'sum(\'basisVatTpchs\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column81',displayMode:'label',textAlign:'right',expression:'sum(\'dcScAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column78',displayMode:'label',textAlign:'right',expression:'sum(\'dcScVatAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_qryCnt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_qryTotAmt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_confirmCnt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_confirmTotAmt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인총부가세금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_confirmVatAmt',label:'0',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일괄적용 확인일자',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_allCopCoConfirmDt',pickerType:'dynamic',style:'',mandatory:'true',title:'확인일자일괄적용'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ConfirmDtUpdate',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.f_ConfirmDtUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인일자 수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ConfirmCancel',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.f_ConfirmCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인 취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Confirm',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.f_Confirm'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_DissentApply',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.f_DissentApply'},E:[{T:1,N:'xf:label',E:[{T:3,text:'이의제기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]}]})