/*amd /ui/ds/fs/adjm/fs_102_01_05b.xml 54209 c67b4d2e4476142d9ef5c3ae7ca8e0d29f05d0b9c915bb461607a5498ba1c65c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_copCoConfirmDt',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'from',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'to',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stevedoringOrthersPrimeCostDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsNm',name:'확인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPkNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vssl',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsNm',name:'승인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dissent',name:'이의처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pstpnRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btn',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkStpNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkWrkStpNm',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsPic',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name51',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseListQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드(물류점소)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'일자구분(실적일자/확인일자)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'출발일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'출발일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtSt',name:'확인일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtEnd',name:'확인일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmClsCd',name:'협력업체확인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAdmitClsCd',name:'매입승인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unconfirmedIncluYn',name:'미확인포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unAdmitIncluYn',name:'미승인포함여',dataType:'text'}},{T:1,N:'w2:key',A:{id:'incluYn',name:'구분(미확인포함여부/미승인포함여부)',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_purchaseListQueryConditionDTO',action:'/ds.fs.adjm.pchscerticoll.RetrieveStevedoringOrthersPrimeCostListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseListQueryConditionDTO","key":"IN_DS1"},{"id":"ds_stevedoringOrthersPrimeCostDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stevedoringOrthersPrimeCostDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_purchaseListQueryConditionDTO_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_registCooperationCompanyConfirmation',action:'/ds.fs.adjm.pchscerticoll.RegistCooperationCompanyConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_stevedoringOrthersPrimeCostDTOList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_registCooperationCompanyConfirmation_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
  let codeOptions;
  codeOptions = [{
    grpCd: "FS261",
    compID: "acb_copCoConfirmClsCd"
  }, {
    grpCd: "FS262",
    compID: "acb_pchsAdmitClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_copCoConfirmClsCd.addItem('전체', '', '', 0);
    acb_copCoConfirmClsCd.setMaxLength(50);
    acb_copCoConfirmClsCd.setSelectedIndex(0);
    acb_pchsAdmitClsCd.addItem('전체', '', '', 0);
    acb_pchsAdmitClsCd.setMaxLength(50);
    acb_pchsAdmitClsCd.setSelectedIndex(0);
  });
  codeOptions = [{
    method: "getLuxeComboData",
    param1: "LogisticsPurchaseEvidenceEBC",
    param2: "retriveSelpchItemCdList",
    compID: "acb_selpchItemCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, () => {
    acb_selpchItemCd.addItem('전체', '', '', 0);
    acb_selpchItemCd.setMaxLength(50);
    acb_selpchItemCd.setSelectedIndex(0); // 매입항목
  });
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
  scwin.userClsCd = loginDTO.userClsCd; // 사용자구분코드(02:협력업체(운송))
  scwin.loginClntNo = loginDTO.clntNo;
  scwin.loginClntNm = loginDTO.clntNm;
  scwin.vCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
  const yearMonth = scwin.vCurDate.slice(0, 6);
  scwin.vQryStDt = yearMonth + "01"; // 조회일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = yearMonth + $c.date.getLastDateOfMonth($p, yearMonth); // 조회일자 to(현재 날짜가 포함된 달의 마지막 일자)
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  acb_dtCls.setSelectedIndex(0); // 일자구분
  scwin.f_SelWrkDt();
  scwin.f_SetDefaultData();
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfDisableObjects($p, [ica_allCopCoConfirmDt]);

  // 테스트 데이터
  // ed_pchsClntNo.setValue('529135');

  // ed_pchsClntNo.setValue('100009');
  // ed_wrkDtSt.setValue('20151201');
  // ed_wrkDtEnd.setValue('20251230');
};

/**
 * @method 
 * @name f_SetDefaultData 
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  scwin.f_GetConfirmCntTotAmt(); // 건수/총금액 계산

  dma_wrkDt.set('from', scwin.vQryStDt); // 출발일자시작		
  dma_wrkDt.set('to', scwin.vQryEndDt); // 출발일자종료
  dma_copCoConfirmDt.set('from', scwin.vQryStDt); // 확인일자시작
  dma_copCoConfirmDt.set('to', scwin.vQryEndDt); // 확인일자종료

  // 내부사용자가 아니면
  if (scwin.userClsCd != "01") {
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    txt_pchsClntNm.setValue(scwin.loginClntNm);
    ed_pchsClntNo.setDisabled(true);
    txt_pchsClntNm.setDisabled(true);
    img_PopUp1.setDisabled(true);
  } else {
    ed_pchsClntNo.focus();
  }
  ;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 하역기타원가목록 조회
 */
scwin.f_RetrieveStevedoringOrthersPrimeCostList = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  switch (acb_dtCls.getValue()) {
    case '01':
      // 실적일자 기준
      if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, ed_wrkDtSt, ed_wrkDtEnd]))) {
        return;
      }
      ;
      if (!$c.gus.cfIsAfterDate($p, dma_wrkDt.get('from'), dma_wrkDt.get('to'))) {
        await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
        ed_wrkDtSt.focus();
        return;
      }
      ;
      break;
    case '02':
      // 확인일자 기준
      if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, ed_copCoConfirmDtSt, ed_copCoConfirmDtEnd]))) {
        return;
      }
      if (!$c.gus.cfIsAfterDate($p, dma_copCoConfirmDt.get('from'), dma_copCoConfirmDt.get('to'))) {
        await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
        ed_copCoConfirmDtSt.focus();
        return;
      }
      break;
    default:
      break;
  }
  ;

  // 구분(미확인포함여부/미승인포함여부)- 쿼리문에서 사용
  if (chb_unconfirmedIncluYn.getValue() == 0 && chb_unAdmitIncluYn.getValue() == 0) {
    dma_purchaseListQueryConditionDTO.set("incluYn", "N");
  } else {
    dma_purchaseListQueryConditionDTO.set("incluYn", "Y");
  }
  ;
  const retExecute = await $c.sbm.execute($p, sbm_purchaseListQueryConditionDTO);
  if (retExecute.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    scwin.sbm_purchaseListQueryConditionDTO_submitdone(retExecute);
  }
  ;
};

/**
 * @method 
 * @name f_Confirm 
 * @description 기타 원가 확인
 */
scwin.f_Confirm = async function () {
  // Data 변경 여부 조회
  if (ds_stevedoringOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }

  // 협력업체확인구분(FS261)이 01:미확인, 03:이의신청, 04:이의거부, 05:이의수용
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["chk"] == "T") {
      if (["02", "03"].includes(rowData["copCoConfirmClsCd"])) {
        await $c.gus.cfAlertMsg($p, "이미 확인된 건이 포함되어 있습니다.");
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
  for (let i = 0; i < ds_stevedoringOrthersPrimeCostDTOList.getRowCount(); i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["chk"] == "T") {
      rowData["copCoConfirmClsCd"] = "02";
      rowData["copCoConfirmClsNm"] = "확인";
      rowData["copCoConfirmDt"] = allCopCoConfirmDt; // 일괄적용 확인일자
      rowData["btn"] = "T";
      rowData["chk"] = "F";
      ds_stevedoringOrthersPrimeCostDTOList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_Confirm 
 * @description 기타 원가 확인일자 수정
 */
scwin.f_ConfirmDtUpdate = async function () {
  // Data 변경 여부 조회
  if (ds_stevedoringOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인, 03:보류
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (ds_stevedoringOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      if (rowData["copCoConfirmClsCd"] != "02") {
        await $c.gus.cfAlertMsg($p, "미확인인 건이 포함되어 있습니다.");
        return;
      }
      ;
      if (rowData["pchsAdmitClsCd"] == "02") {
        await $c.gus.cfAlertMsg($p, "이미 동부 승인이 이루어진 건이 포함되어 있습니다.");
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
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["chk"] == "T") {
      rowData["copCoConfirmDt"] = allCopCoConfirmDt; // 일괄적용 확인일자
      rowData["btn"] = "T";
      rowData["chk"] = "F";
      ds_stevedoringOrthersPrimeCostDTOList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_Confirm 
 * @description 기타 원가 확인 취소
 */
scwin.f_ConfirmCancel = async function () {
  // Data 변경 여부 조회
  if (ds_stevedoringOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (ds_stevedoringOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      if (rowData["copCoConfirmClsCd"] != "02") {
        await $c.gus.cfAlertMsg($p, "미확인인 건이 포함되어 있습니다.");
        return;
      }
      ;
      if (rowData["pchsAdmitClsCd"] != "01") {
        await $c.gus.cfAlertMsg($p, "이미 동부 승인이 이루어진 건이 포함되어 있습니다.");
        return;
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["chk"] == "T") {
      rowData["copCoConfirmClsCd"] = "01";
      rowData["copCoConfirmClsNm"] = "미확인";
      rowData["copCoConfirmDt"] = "";
      rowData["rsltsPic"] = ""; // 실적담당자
      rowData["btn"] = "T";
      rowData["chk"] = "F";
      ds_stevedoringOrthersPrimeCostDTOList.setRowJSON(i, rowData, true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_DissentApply 
 * @description 기타 원가 이의제기
 */
scwin.f_DissentApply = async function () {
  // Data 변경 여부 조회
  if (ds_stevedoringOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  ;

  // 협력업체확인구분(FS261)이 01:미확인, 04:이의거부, 05:이의수용
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["chk"] == "T") {
      if (["02", "03"].includes(rowData["copCoConfirmClsCd"])) {
        await $c.gus.cfAlertMsg($p, "확인된 건이 포함되어 있습니다.\n해당건은 먼저 확인취소를 해야 합니다.");
        return;
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["chk"] == "T") {
      rowData["copCoConfirmClsCd"] = "03";
      rowData["copCoConfirmClsNm"] = "이의신청";
      rowData["copCoConfirmDt"] = "";
      rowData["dissent"] = "이의 내용을 입력하십시오.";
      rowData["btn"] = "T";
      rowData["chk"] = "F";
      ds_stevedoringOrthersPrimeCostDTOList.setRowJSON(i, rowData, true);
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
scwin.f_Cancel = async function () {
  // Data 변경 여부 조회
  if (ds_stevedoringOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  ;

  // 취소할 목록 선택
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  let cnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    if (
    //ds_stevedoringOrthersPrimeCostDTOList.getRowStatusValue(i) == 3 &&
    ds_stevedoringOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      cnt++;
    }
    ;
  }
  ;
  if (cnt == 0) {
    await $c.gus.cfAlertMsg($p, "취소할 목록을 선택하십시오.");
    return;
  }
  ;

  // 원래값 복원
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (
    //ds_stevedoringOrthersPrimeCostDTOList.getRowStatusValue(i) == 3 &&
    rowData["chk"] == "T") {
      // 해당 DataSet의 Row를 원래값(=Original Data)로 복원
      ds_stevedoringOrthersPrimeCostDTOList.undoRow(i);
      ds_stevedoringOrthersPrimeCostDTOList.setCellData(i, 'btn', 'F');
      ds_stevedoringOrthersPrimeCostDTOList.setCellData(i, 'chk', 'F');
    }
    ;
  }
  ;
  gr_stevedoringOrthersPrimeCostDTOList.setColumnReadOnly('copCoConfirmDt', true); // 입력불가
};

/**
 * @method 
 * @name f_Save 
 * @description 저장
 */
scwin.f_Save = async function () {
  // Data 변경 여부 조회
  if (ds_stevedoringOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  ;

  // 처리버튼 클릭여부
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  let cnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_stevedoringOrthersPrimeCostDTOList.getCellData(i, "btn") == "T") {
      cnt++;
    }
    ;
  }
  ;
  if (cnt == 0) {
    await $c.gus.cfAlertMsg($p, "처리할 업무을 선택하십시오.");
    return;
  }
  ;

  // 확인 날짜입력시 validate 체크
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["btn"] == "T" && rowData["copCoConfirmClsCd"] == "02") {
      if ($c.num.isNumber($p, rowData["copCoConfirmDt"])) {
        if (!$c.date.isDate($p, rowData["copCoConfirmDt"], false)) {
          await $c.gus.cfAlertMsg($p, i + "번째 데이타에서 확인일자는 'YYYYMMDD' 형식이어야 합니다.");
          ds_stevedoringOrthersPrimeCostDTOList.setRowPosition(i);
          return;
        }
        ;
      }
      ;

      // 이의신청시 이의처리/보류사유 입력
      if (rowData["copCoConfirmClsCd"] == "03") {
        if (rowData["dissent"].length == 0 || rowData["dissent"] == null || rowData["dissent"] == "이의 내용을 입력하십시오.") {
          await $c.gus.cfAlertMsg($p, i + "번째 데이타에서 이의처리/보류사유를 입력하십시오.");
          ds_stevedoringOrthersPrimeCostDTOList.setRowPosition(i);
          return;
        }
        ;
      }
      ;
    }
    ;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  const retExecute = await $c.sbm.execute($p, sbm_registCooperationCompanyConfirmation);
  if (retExecute.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    scwin.sbm_registCooperationCompanyConfirmation_submitdone(retExecute);
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveDissentApplyHistory 
 * @description 이의신청 이력 수정
 */
scwin.f_RetrieveDissentApplyHistory = async function (row) {
  // 팝업화면에게 key 정보인 오더번호와 매입순번을 넘겨준다.
  const rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(row);
  const data = {
    odrNo: rowData["odrNo"],
    // 오더번호
    pchsSeq: rowData["pchsSeq"] // 매입순번   
  };
  const options = {
    type: "browserPopup",
    width: "825px",
    height: "520px",
    scrollbars: 'no'
  };
  const url = "/ui/ds/fs/adjm/fs_102_01_01p.xml";

  // 이의신청 이력 화면 호출
  await $c.win.openPopup($p, url, options, data);

  // 다시 조회함 
  // scwin.f_RetrieveContainerTpchsList(); // TODO - 해당 함수 없음
};

/**
 * @method 
 * @name f_GetConfirmCntTotAmt 
 * @description 조회건수/조회총금액, 확인건수/확인총금액 계산
 */
scwin.f_GetConfirmCntTotAmt = function () {
  // 기타원가
  let qryCnt = 0;
  let qryTotAmt = 0;
  let rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  if (rowCnt > 0) {
    qryCnt = rowCnt;
    const pchsAmtArray = ds_stevedoringOrthersPrimeCostDTOList.getColData("pchsAmt");
    for (let i = 0; i < pchsAmtArray.length; i++) {
      qryTotAmt = qryTotAmt + $c.num.parseInt($p, pchsAmtArray[i]);
    }
    ;
  }
  ;
  lay_qryCnt.setValue($c.gus.cfInsertComma($p, qryCnt));
  lay_qryTotAmt.setValue($c.gus.cfInsertComma($p, qryTotAmt));

  // 매입승인구분이 승인(02)인 경우만 사용료 + 운반비 계산
  let confirmCnt = 0;
  let confirmTotAmt = 0;
  for (let i = 0; i < rowCnt; i++) {
    const rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(i);
    if (rowData["copCoConfirmClsCd"] == "02") {
      confirmTotAmt += $c.num.parseInt($p, rowData["pchsAmt"], 0);
      confirmCnt++;
    }
    ;
  }
  ;
  lay_confirmCnt.setValue($c.gus.cfInsertComma($p, confirmCnt));
  lay_confirmTotAmt.setValue($c.gus.cfInsertComma($p, confirmTotAmt));
};

/**
 * @method 
 * @name f_SelWrkDt 
 * @description 실적일자 선택
 */
scwin.f_SelWrkDt = function () {
  udc_wrkDt.show('');
  udc_copCoConfirmDt.hide();
  lay_gubun.show('');
};

/**
 * @method 
 * @name f_SelCopCoConfirmDt 
 * @description 확인일자 선택
 */
scwin.f_SelCopCoConfirmDt = function () {
  udc_wrkDt.hide();
  udc_copCoConfirmDt.show('');
  lay_gubun.hide();
};

/**
 * @method 
 * @name f_RunExcel 
 * @description 엑셀 다운로드
 */
scwin.f_RunExcel = async function () {
  let count = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  ;

  // gr_stevedoringOrthersPrimeCostDTOList.SetExcelTitle(1, "value:기타원가 내역 확인;"  // 표시할 타이틀
  //     + "font-face:'돋움체';" // 폰트
  //     + "font-size:12pt;"    // 폰트 크기
  //     + "font-color:black;"  // 폰트 색깔
  //     + "bgcolor:#ffffff;"   // 배경 색깔
  //     + "align:center;"      // 정렬
  //     + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  //     + "line-width:0pt;"    // 타이틀 테두리선 굵기
  //     + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // // cfGridToExcel(그리드ID, "엑셀 파일의 쉬트명", "엑셀 파일명", 저장 옵션);

  const options = {
    fileName: "기타원가 내역 확인.xlsx",
    sheetName: "기타원가 내역 확인"
  };
  $c.data.downloadGridViewExcel($p, gr_stevedoringOrthersPrimeCostDTOList, options);
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let comCodeComp, codeNameArray;
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
      codeNameArray = [ed_pchsClntNo, txt_pchsClntNm]; // 협력회사코드, 협력회사명
      break;
    case 2:
      // 동부부서 팝업
      comCodeComp = udc_pchsDept;
      codeNameArray = [ed_pchsDeptCd, txt_pchsDeptNm]; // 점소코드, 점소명
      break;
    case 3:
      // LINE코드 팝업
      comCodeComp = udc_line;
      codeNameArray = [ed_lineCd, txt_lineNm]; // 점소코드, 점소명
      break;
    default:
      break;
  }
  ;
  comCodeComp.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeNameArray[0], codeNameArray[1]);
  }, pCode.trim(), pName, pClose, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearch, pWtitleSearch, pNoDataCloseTF);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
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
 * @name f_InitObjects 
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData, [acb_dtCls]);
  scwin.f_SetDefaultData();
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_purchaseListQueryConditionDTO_submit 
 * @description 하역기타원가목록 조회 요청 전
 */
scwin.sbm_purchaseListQueryConditionDTO_submit = function (e) {
  let inDsData = dma_purchaseListQueryConditionDTO.getJSON();
  inDsData['pchsClntNo'] = ed_pchsClntNo.getValue();
  inDsData['pchsDeptCd'] = ed_pchsDeptCd.getValue();
  inDsData['selpchItemCd'] = acb_selpchItemCd.getValue();
  inDsData['lineCd'] = ed_lineCd.getValue();
  inDsData['dtCls'] = acb_dtCls.getValue();
  inDsData['wrkDtSt'] = ed_wrkDtSt.getValue(); // 실적일자
  // todo - 왜 tobe쿼리는 3달을 추가로 조회하지?
  // inDsData['wrkDtSt'] = $c.date.addMonth(ed_wrkDtSt.getValue(), 3); // 실적일자
  inDsData['wrkDtEnd'] = ed_wrkDtEnd.getValue(); // 실적일자
  inDsData['copCoConfirmDtSt'] = ed_copCoConfirmDtSt.getValue(); // 확인일자
  inDsData['copCoConfirmDtEnd'] = ed_copCoConfirmDtEnd.getValue(); // 확인일자
  inDsData['copCoConfirmClsCd'] = acb_copCoConfirmClsCd.getValue();
  inDsData['pchsAdmitClsCd'] = acb_pchsAdmitClsCd.getValue();
  inDsData['unconfirmedIncluYn'] = chb_unconfirmedIncluYn.getValue();
  inDsData['unAdmitIncluYn'] = chb_unAdmitIncluYn.getValue();
  dma_purchaseListQueryConditionDTO.setJSON(inDsData);
};

/**
 * @event 
 * @name sbm_purchaseListQueryConditionDTO_submitdone 
 * @description 하역기타원가목록 조회 성공
 */
scwin.sbm_purchaseListQueryConditionDTO_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;

  // 총 조회건수 표시
  const rowCnt = ds_stevedoringOrthersPrimeCostDTOList.getRowCount();
  totalRows.setValue(rowCnt);

  // 건수/총금액 계산
  scwin.f_GetConfirmCntTotAmt();
  gr_stevedoringOrthersPrimeCostDTOList.setHeaderValue('chkHeader', false);
  if (rowCnt == 0) {
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [ica_allCopCoConfirmDt]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [ica_allCopCoConfirmDt]);
  }
  ;
};

/**
 * @event 
 * @name sbm_registCooperationCompanyConfirmation_submitdone 
 * @description 협력업체확인등록 저장 성공
 */
scwin.sbm_registCooperationCompanyConfirmation_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  scwin.f_RetrieveStevedoringOrthersPrimeCostList();
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name acb_dtCls_onchange 
 * @description 조회조건(실적일자 / 확인일자) 선택
 */
scwin.acb_dtCls_onchange = function (info) {
  switch (acb_dtCls.getValue()) {
    case "01":
      scwin.f_SelWrkDt();
      break;
    case "02":
      scwin.f_SelCopCoConfirmDt();
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_stevedoringOrthersPrimeCostDTOList_oncellclick 
 * @description 셀이 클릭된 경우 발생
 */
scwin.gr_stevedoringOrthersPrimeCostDTOList_oncellclick = function (rowIndex, columnIndex, columnId) {
  let rowData = ds_stevedoringOrthersPrimeCostDTOList.getRowJSON(rowIndex);
  let btn = rowData["btn"];
  let copCoConfirmClsCd = rowData["copCoConfirmClsCd"];
  switch (columnId) {
    case "copCoConfirmDt":
      // 확인
      if (btn == "T" && copCoConfirmClsCd != "03") {
        gr_stevedoringOrthersPrimeCostDTOList.setColumnReadOnly('copCoConfirmDt', false);
      } else {
        gr_stevedoringOrthersPrimeCostDTOList.setColumnReadOnly('copCoConfirmDt', true);
      }
      ;

      // 미확인
      if (btn == "T" && copCoConfirmClsCd == "01") {
        gr_stevedoringOrthersPrimeCostDTOList.setColumnReadOnly('copCoConfirmDt', true);
      }
      break;
    case "dissent":
      // 이의처리/보류사유
      if (btn == "T" && copCoConfirmClsCd == "03") {
        gr_stevedoringOrthersPrimeCostDTOList.setColumnReadOnly('dissent', false);
      } else {
        gr_stevedoringOrthersPrimeCostDTOList.setColumnReadOnly('dissent', true);
      }
      ;

      // 이의신청 이력 수정
      if (ds_stevedoringOrthersPrimeCostDTOList.getRowStatusValue(rowIndex) == "0") {
        if (rowData["dissent"] != "") {
          // tobe - 사용하지 않음
          return;
          scwin.f_RetrieveDissentApplyHistory(rowIndex);
        }
        ;
      }
      ;
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name gr_stevedoringOrthersPrimeCostDTOList_ondateselect 
 * @description inputType이 캘린더인 경우, 날짜 선택 시 발생
 */
scwin.gr_stevedoringOrthersPrimeCostDTOList_ondateselect = async function (rowIndex, columnIndex, date, dateObject) {
  // 확인 날짜입력시 validation 체크
  const colid = gr_stevedoringOrthersPrimeCostDTOList.getColumnID(columnIndex);
  if (colid != "copCoConfirmDt") return;
  let oldDate = ds_stevedoringOrthersPrimeCostDTOList.getCellData(rowIndex, "copCoConfirmDt");
  if ($c.num.isNumber($p, date)) {
    if (!$c.date.isDate($p, date, false)) {
      await $c.gus.cfAlertMsg($p, "확인일자는 'YYYYMMDD' 형식이어야 합니다.");
      return;
    }
    ;
  } else {
    ds_stevedoringOrthersPrimeCostDTOList.setCellData(rowIndex, "copCoConfirmDt", oldDate);
    await $c.gus.cfAlertMsg($p, "확인일자를 다시 입력하십시오.");
    return;
  }
  ;
};

/**
 * @event 
 * @name udc_pchsClnt_onblurCodeEvent 
 * @description 협력회사 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 1);
};

/**
 * @event 
 * @name udc_pchsClnt_onviewchangeNameEvent 
 * @description 협력회사 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsClntNm, ed_pchsClntNo, 1, false);
};

/**
 * @event 
 * @name udc_pchsClnt_onclickEvent 
 * @description 협력회사 검색버튼 마우스로 클릭할 경우 발생. 
 */
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), txt_pchsClntNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent 
 * @description 동부부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 2);
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent 
 * @description 동부부서 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pchsDeptNm, ed_pchsDeptCd, 2, false);
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent 
 * @description 동부부서 검색버튼 마우스로 클릭할 경우 발생.
 */
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsDeptCd.getValue(), txt_pchsDeptNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description LINE code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 3);
};

/**
 * @event 
 * @name udc_pchsDept_onblurCodeEvent 
 * @description LINE name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_line_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, 3, false);
};

/**
 * @event 
 * @name udc_line_onclickEvent 
 * @description LINE 검색버튼 마우스로 클릭할 경우 발생.
 */
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsClntNo',nameId:'txt_pchsClntNm',id:'udc_pchsClnt',allowCharCode:'0-9',mandatoryCode:'true',objTypeCode:'Data',maxlengthCode:'6',UpperFlagCode:'0',maxlengthName:'50',objTypeName:'data',mandatoryName:'false',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent',btnId:'img_PopUp1',validTitle:'협력회사'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'req',editType:'select',id:'acb_dtCls',ref:'',search:'start',style:'width:90px;',submenuSize:'auto','ev:onchange':'scwin.acb_dtCls_onchange',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:' 확인일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_wrkDt',refEdDt:'to',refStDt:'from',style:'',edFromId:'ed_wrkDtSt',edToId:'ed_wrkDtEnd',objTypeFrom:'Data',objTypeTo:'Data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'운송일자시작',titleTo:'운송일자종료'}},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_copCoConfirmDtSt',edToId:'ed_copCoConfirmDtEnd',id:'udc_copCoConfirmDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',refDataMap:'dma_copCoConfirmDt',refEdDt:'to',refStDt:'from',style:'display: none;',titleFrom:'확인일자시작',titleTo:'확인일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'lay_gubun',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_copCoConfirmClsCd',objType:'data',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',falseValue:'0',id:'chb_unconfirmedIncluYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 이전 미확인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부승인구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_pchsAdmitClsCd',ref:'',search:'start',searchTarget:'value',style:'width: 120px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'chb_unAdmitIncluYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 동부 미승인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_pchsDeptCd',nameId:'txt_pchsDeptNm',id:'udc_pchsDept',objTypeCode:'Data',mandatoryCode:'false',maxlengthCode:'4',hideName:'Y',maxlengthName:'50',objTypeName:'Data',mandatoryName:'false',selectID:'retrieveLobranInfo','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent',btnId:'img_PopUp2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원가유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:230px;',submenuSize:'auto',mandatory:'true',title:'원가유형',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',style:'width:0;',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:'width: 48px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'width: 315px;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd',nameId:'txt_lineNm',id:'udc_line',mandatoryCode:'false',maxlengthCode:'5',UpperFlagCode:'1',mandatoryName:'false',selectID:'retrieveLineInfo','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_line_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',btnId:'img_PopUp3',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',style:'width:0;',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_RetrieveStevedoringOrthersPrimeCostList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'f_RunExcel',gridID:'gr_stevedoringOrthersPrimeCostDTOList',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_stevedoringOrthersPrimeCostDTOList',id:'gr_stevedoringOrthersPrimeCostDTOList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'1','ev:oncellclick':'scwin.gr_stevedoringOrthersPrimeCostDTOList_oncellclick','ev:ondateselect':'scwin.gr_stevedoringOrthersPrimeCostDTOList_ondateselect'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkHeader',inputType:'checkbox',width:'50',valueType:'boolean',value:' ',emptyValue:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'실적일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매입항목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'할인할증',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'물량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'단가',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매입금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'매입부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'확인일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'확인구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'경과일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'승인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column43',value:'이의처리',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column45',value:'보류사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',width:'100',textAlign:'center',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vol',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitNm',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsUpr',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsDeptCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',id:'copCoConfirmDt',displayMode:'label',textAlign:'center',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoConfirmClsNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrowDdCnt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'wrkPkNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vssl',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAdmitClsNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'dissent',displayMode:'label',textAlign:'left',readOnly:'true',maxByteLength:'100'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'pstpnRsn',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_qryCnt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_qryTotAmt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_confirmCnt',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'lay_confirmTotAmt',label:'0',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일괄적용 확인일자',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_allCopCoConfirmDt',pickerType:'dynamic',style:'',validExp:'확인일자일괄적용:yes:length=8',title:'확인일자일괄적용',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ConfirmDtUpdate',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_ConfirmDtUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인일자 수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ConfirmCancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_ConfirmCancel',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인 취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Confirm',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Confirm',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_DissentApply',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_DissentApply',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'이의제기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]}]})