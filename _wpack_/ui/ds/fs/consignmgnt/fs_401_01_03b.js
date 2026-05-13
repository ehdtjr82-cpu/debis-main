/*amd /ui/ds/fs/consignmgnt/fs_401_01_03b.xml 63535 350f39cf088fe521acb8cb0e9c34d744961ce2d401bcadbf180d8cad2f2c2a33 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_consignmentContractDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비;분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'위수탁자 성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptCls',name:'보증금적용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'거래은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'거래은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisClntMpNo',name:'물류거래처핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisClntTelNo',name:'물류거래처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDt',name:'계약일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_depositSetoffPlanDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stYm',name:'상계 시작년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endYm',name:'상계 종료년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffAmt',name:'월 상계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmCnt',name:'개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_trusteeInformationDTO',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstPmntAmt',name:'최초납부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addPmntAmt',name:'추가납부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repayAmt',name:'변제금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accumSetoffAmt',name:'누적상계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalSetoffYm',name:'최종상계년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBank',name:'거래은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBankNm',name:'거래은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstr',name:'예금주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDeposit',name:'적용보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkMst',name:'수탁자정보 수정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkDtl',name:'보증금상계계획 수정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclStDt',name:'차량시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclEndDt',name:'차량종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstSubstPayAmt',name:'최초대급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substRamt',name:'대급금액잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substPayCnt',name:'대급금액횟수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSubstPayAmt',name:'계약대급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preRettrvCnt',name:'사전회수횟수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositAmt',name:'수입보증금-일반',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_consignmentContractDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptCls',name:'보증금적용구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentContractListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryConditionDTO","key":"IN_DS1"},{"id":"ds_consignmentContractDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_consignmentContractDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveTrusteeInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_consignmentContractDTO","key":"IN_DS1"},{"id":"ds_trusteeInformationDTO","key":"OUT_DS1"},{"id":"ds_depositSetoffPlanDTOList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_trusteeInformationDTO","key":"OUT_DS1"},{"id":"ds_depositSetoffPlanDTOList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_regist',action:'/ds.fs.consignmgnt.consignmgntcadjm.RegistTrusteeInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_trusteeInformationDTO","key":"IN_DS1", "action":"modified"},{"id":"ds_depositSetoffPlanDTOList","key":"IN_DS2", "action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_regist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_update',action:'/ds.fs.consignmgnt.consignmgntcadjm.UpdateTrusteeInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_trusteeInformationDTO","key":"IN_DS1", "action":"modified"},{"id":"ds_depositSetoffPlanDTOList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_update_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.gubun = 0; // 중복 체크 flag
scwin.button = ""; // 버튼 체크 flag
scwin.flag = ""; // 저장시 등록, 수정 체크 flag
scwin.posnClsCd = ""; // 업체구분 flag

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드- 소유구분
  const codeOptions = [{
    grpCd: "OP108",
    compID: "gr_consignmentContractDTOList:posnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_SetDefaultData();
  $c.gus.cfDisableObjects($p, [btn_rowAdd, btn_rowDel, btn_cancel, btn_Save]); //버튼 비활성
  ed_stdDt.setValue(scwin.strCurDate);

  // 달력 버튼 포커스 방지
  setTimeout(function () {
    document.querySelectorAll('.w2inputCalendar_div_img button').forEach(function (btn) {
      btn.tabIndex = -1;
    });
  }, 0);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ed_stdDt.setValue(scwin.strCurDate); // 조회기준일
  ed_stdDt.focus();
  lc_posnClsCd.setValue("W"); // 업체구분
  lc_posnClsCd.focus();
};

//-------------------------------------------------------------------------
// 위수탁계약목록 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  // 필수입력항목 체크
  let chkValid = await $c.gus.cfValidate($p, [ed_stdDt, ed_lobranCd, lc_posnClsCd]);
  if (!chkValid) {
    return;
  }

  //dataMap set
  dma_queryConditionDTO.set("stdDt", ed_stdDt.getValue()); // 기준일자
  dma_queryConditionDTO.set("lobranCd", ed_lobranCd.getValue()); // 물류점소코드
  dma_queryConditionDTO.set("posnClsCd", lc_posnClsCd.getValue()); // 업체구분코드

  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = async function () {
  // 총 조회건수 표시
  let nCnt = ds_consignmentContractDTOList.getRowCount();
  scwin.f_ConsignmgntClear(); //위수탁정보 초기화
  if (nCnt == 0) {
    $c.gus.cfDisableObjects($p, [btn_rowAdd, btn_rowDel, btn_cancel, btn_Save]); //버튼 비활성
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    gr_consignmentContractDTOList.setFocusedCell(0, 0);
    total.setValue(nCnt);
    $c.gus.cfEnableObjects($p, [btn_rowAdd, btn_rowDel, btn_cancel, btn_Save]);
    // udc_bottomGrdBtn.setDisabled(false); //udc 비활성화 
  }

  /*freeFrom setting 지정 function call*/
  scwin.freeFromSet();
};

//-------------------------------------------------------------------------
// 위수탁계약목록 정보 Clear
//-------------------------------------------------------------------------
scwin.f_ConsignmgntClear = async function () {
  await $c.gus.cfInitObjects($p, tb_vehclInfo);
  await $c.gus.cfInitObjects($p, tb_bankInfo);
  await $c.gus.cfInitObjects($p, tb_info1);
  await $c.gus.cfInitObjects($p, tb_info2);
  ds_depositSetoffPlanDTOList.removeAll(); // 향후 예상 상계금액
  lay_afterSetoffAmt.setValue(0);
};

//-------------------------------------------------------------------------
// 보증금상계계획 행추가
//-------------------------------------------------------------------------
scwin.f_AddRowDepositSetoffPlanDTOList = function () {
  let rowCnt = ds_depositSetoffPlanDTOList.getRowCount();
  ds_depositSetoffPlanDTOList.insertRow(rowCnt);
  let dataRow = ds_consignmentContractDTOList.getRowPosition();
  ds_depositSetoffPlanDTOList.setCellData(rowCnt, "ctrtNo", ds_consignmentContractDTOList.getCellData(dataRow, "ctrtNo")); // 계약번호
  ds_depositSetoffPlanDTOList.setCellData(rowCnt, "eqCd", ds_consignmentContractDTOList.getCellData(dataRow, "eqCd")); // 장비코드

  // 행추가 후 마우스 클릭없이 바로 입력
  gr_depositSetoffPlanDTOList.setFocusedCell(rowCnt, "stYm", true);
};

//-------------------------------------------------------------------------
// 보증금상계계획 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRowDepositSetoffPlanDTOList = function () {
  if (ds_depositSetoffPlanDTOList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "보증금상계계획을 1건 이상 입력하십시오.");
  } else {
    // 포커스된 행 인덱스
    var focusedIdx = gr_depositSetoffPlanDTOList.getFocusedRowIndex();
    if (focusedIdx === -1) {
      return;
    }

    // 신규행(I)이면 바로 제거, 기존행이면 D 상태로 변경
    if (ds_depositSetoffPlanDTOList.getRowStatusValue(focusedIdx) === 2) {
      $c.data.undoRow($p, ds_depositSetoffPlanDTOList, "Y");
    } else {
      $c.data.undoRow($p, ds_depositSetoffPlanDTOList, "Y");
      $c.data.deleteRow($p, ds_depositSetoffPlanDTOList, focusedIdx);
    }
  }
};

//-------------------------------------------------------------------------
// 보증금상계계획 취소
//-------------------------------------------------------------------------
scwin.f_CancelRowDepositSetoffPlanDTOList = function () {
  $c.data.undoRow($p, ds_depositSetoffPlanDTOList, "Y");
};
scwin.freeFromSet = function () {
  /* <script language=JavaScript for=ds_trusteeInformationDTO event=OnLoadCompleted(rowCnt)> 
  수탁자정보 조회 후 ..
  */

  // 차량적용기간 반영
  let vehclStdt = ds_trusteeInformationDTO.getCellData(0, "vehclStDt");
  let vehclEndDt = ds_trusteeInformationDTO.getCellData(0, "vehclEndDt");
  udc_fromToCalendar.setInitDate(vehclStdt, vehclEndDt);
  if (ds_trusteeInformationDTO.getCellData(0, "ctrtNo") == "") {
    scwin.flag = "REGIST";
    ed_txnBank.setValue(ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "bankCd")); // 거래은행코드
    ed_txnBankNm.setValue(ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "bankNm")); // 거래은행명
    ed_bankAcntNo.setValue(ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "bankAcntNo")); // 계좌번호
    ed_dpstr.setValue(ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "dpstrNm")); // 예금주
  } else {
    scwin.flag = "UPDATE";
    ed_txnBank.setValue(ds_trusteeInformationDTO.getCellData(0, "txnBank")); // 거래은행코드
    ed_txnBankNm.setValue(ds_trusteeInformationDTO.getCellData(0, "txnBankNm")); // 거래은행명
    ed_bankAcntNo.setValue(ds_trusteeInformationDTO.getCellData(0, "bankAcntNo")); // 계좌번호
    ed_dpstr.setValue(ds_trusteeInformationDTO.getCellData(0, "dpstr")); // 예금주			
  }
  if (ds_trusteeInformationDTO.getRowCount() == 0) {
    $c.gus.cfDisableObjects($p, [btn_rowAdd, btn_rowDel, btn_cancel, btn_Save]);
    return;
  }

  //업체구분
  let posnClsCd = ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "posnClsCd");
  ed_firstSubstPayAmt.setValue(ds_trusteeInformationDTO.getCellData(0, "firstSubstPayAmt")); // 최초대급금액
  lay_substRamt.setValue($c.gus.cfInsertComma($p, ds_trusteeInformationDTO.getCellData(0, "substRamt"))); // 대급금액잔액
  lay_substPayCnt.setValue($c.gus.cfInsertComma($p, ds_trusteeInformationDTO.getCellData(0, "substPayCnt"))); // 대급금횟수
  ed_ctrtSubstPayAmt.setValue(ds_trusteeInformationDTO.getCellData(0, "ctrtSubstPayAmt")); // 계약대급금액
  ed_preRettrvCnt.setValue(ds_trusteeInformationDTO.getCellData(0, "preRettrvCnt")); // 사전회수횟수

  if (posnClsCd == "G") {
    lay_adptDeposit.setValue("");
    lay_payAmt.setValue("");
    lay_diffAmt.setValue("");
    lay_depositAmt.setValue("");
  } else {
    lay_adptDeposit.setValue($c.gus.cfInsertComma($p, ds_trusteeInformationDTO.getCellData(0, "adptDeposit"))); // 적용보증금
    lay_depositAmt.setValue($c.gus.cfInsertComma($p, ds_trusteeInformationDTO.getCellData(0, "depositAmt"))); // 수입보증금-일반
  }
  ed_firstPmntAmt.setValue(ds_trusteeInformationDTO.getCellData(0, "firstPmntAmt")); // 초기 납입금액
  ed_addPmntAmt.setValue(ds_trusteeInformationDTO.getCellData(0, "addPmntAmt")); // 추가 납입금액
  ed_repayAmt.setValue(ds_trusteeInformationDTO.getCellData(0, "repayAmt")); // 반제금액
  ed_accumSetoffAmt.setValue(ds_trusteeInformationDTO.getCellData(0, "accumSetoffAmt")); // 누적 상계금액
  ed_finalSetoffYm.setValue(ds_trusteeInformationDTO.getCellData(0, "finalSetoffYm")); // 최종 상계년월

  scwin.f_SetPayAmt(); // 납입액 계산

  // 위수탁업체는 보증금 입력 가능 
  if (posnClsCd == "W" || posnClsCd == "J") {
    $c.gus.cfDisableObjects($p, [ed_firstSubstPayAmt, ed_ctrtSubstPayAmt, ed_preRettrvCnt]);
    $c.gus.cfEnableObjects($p, [ed_firstPmntAmt, ed_addPmntAmt, ed_repayAmt, ed_accumSetoffAmt, ed_finalSetoffYm]);
    $c.gus.cfEnableObjects($p, [btn_rowAdd, btn_rowDel, btn_cancel, btn_Save]);
  }
  // 지입차는대급금 입력 가능
  if (posnClsCd == "G") {
    $c.gus.cfEnableObjects($p, [ed_firstSubstPayAmt, ed_ctrtSubstPayAmt, ed_preRettrvCnt]);
    $c.gus.cfDisableObjects($p, [ed_firstPmntAmt, ed_addPmntAmt, ed_repayAmt, ed_accumSetoffAmt, ed_finalSetoffYm]);
    $c.gus.cfEnableObjects($p, [btn_Save]);
    $c.gus.cfDisableObjects($p, [btn_rowAdd, btn_rowDel, btn_cancel]);
  }
  scwin.posnClsCd = posnClsCd; // 동기화
};

// 콤마 제거 후 정수 변환 공통 함수
scwin.f_parseInt = function (value) {
  if (!value) return 0;
  return parseInt(value.toString().replaceAll(",", ""), 10) || 0;
};

//-------------------------------------------------------------------------
// 납입액 계산
//-------------------------------------------------------------------------
scwin.f_SetPayAmt = function () {
  if (lay_adptDeposit.getValue() == "" || ed_firstPmntAmt.getValue() == "" || ed_addPmntAmt.getValue() == "" || ed_repayAmt.getValue() == "" || ed_accumSetoffAmt.getValue() == "") {
    return;
  }

  // 납입액 = 초기 납입금액 + 추가 납입금액 - 반제금액 + 누적 상계금액
  let payAmt = 0;
  payAmt = scwin.f_parseInt(ed_firstPmntAmt.getValue()) + scwin.f_parseInt(ed_addPmntAmt.getValue()) - scwin.f_parseInt(ed_repayAmt.getValue()) + scwin.f_parseInt(ed_accumSetoffAmt.getValue());
  lay_payAmt.setValue($c.gus.cfInsertComma($p, payAmt));

  // 차이 = 적용 보증금 - 납입액
  let diffAmt = 0;
  diffAmt = scwin.f_parseInt(lay_adptDeposit.getValue()) - payAmt;
  lay_diffAmt.setValue($c.gus.cfInsertComma($p, diffAmt));
};

//위수탁 정보 setting
scwin.gr_consignmentContractDTOList_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex < 0) return;
  lay_vehclNo.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "vehclNo")); // 차량번호
  let acqDt = ds_consignmentContractDTOList.getCellData(rowIndex, "acqDt");
  if (!$c.gus.cfIsNull($p, acqDt)) {
    lay_acqDt.setValue($c.gus.cfGetFormatStr($p, acqDt, "####/##/##")); // 차량등록일자
  } else {
    lay_acqDt.setValue(""); // 차량등록일자
  }
  ed_vehclStDt.setValue(ds_trusteeInformationDTO.getCellData(0, "vehclStDt"));
  ed_vehclEndDt.setValue(ds_trusteeInformationDTO.getCellData(0, "vehclEndDt"));
  lay_clntNm.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "clntNm")); // 위수탁자
  lay_crn.setValue($c.gus.cfGetFormatStr($p, ds_consignmentContractDTOList.getCellData(rowIndex, "crn"), "###-##-#####")); // 사업자번호
  lay_logisClntMpNo.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "logisClntMpNo")); // 휴대번호
  lay_logisClntTelNo.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "logisClntTelNo")); // 전화번호

  lay_ctrtDt.setValue($c.gus.cfGetFormatStr($p, ds_consignmentContractDTOList.getCellData(rowIndex, "ctrtDt"), "####/##/##")); // 계약일자
  lay_ctrtDtTerm.setValue($c.gus.cfGetFormatStr($p, ds_consignmentContractDTOList.getCellData(rowIndex, "ctrtStDt"), "####/##/##") + " ~ " + $c.gus.cfGetFormatStr($p, ds_consignmentContractDTOList.getCellData(rowIndex, "ctrtEndDt"), "####/##/##")); // 계약기간

  scwin.f_RetrieveTrusteeInformation(rowIndex); // 수탁자정보조회

  scwin.f_AfterSetoffAmt(); // 향후 예상 상계금액 계산
};

//-------------------------------------------------------------------------
// 수탁자정보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveTrusteeInformation = function (rowIndex) {
  // 1. DataList에서 특정 인덱스의 데이터를 JSON 객체로 가져옵니다.
  // index는 가져오려는 행의 번호(0부터 시작)입니다.
  var rowData = ds_consignmentContractDTOList.getRowJSON(rowIndex);
  // dma_consignmentContractDTO.setJSON(rowData);
  // dma_consignmentContractDTO.set("stdDt", ed_stdDt.getValue());

  dma_consignmentContractDTO.set("ctrtNo", ds_consignmentContractDTOList.getCellData(rowIndex, "ctrtNo"));
  dma_consignmentContractDTO.set("eqCd", ds_consignmentContractDTOList.getCellData(rowIndex, "eqCd"));
  dma_consignmentContractDTO.set("acqDt", ds_consignmentContractDTOList.getCellData(rowIndex, "acqDt"));
  dma_consignmentContractDTO.set("adptCls", ds_consignmentContractDTOList.getCellData(rowIndex, "adptCls"));
  dma_consignmentContractDTO.set("stdDt", ed_stdDt.getValue());
  dma_consignmentContractDTO.set("clntNo", ds_consignmentContractDTOList.getCellData(rowIndex, "clntNo"));
  dma_consignmentContractDTO.set("posnClsCd", ds_consignmentContractDTOList.getCellData(rowIndex, "posnClsCd"));
  $c.sbm.execute($p, sbm_retrieve_detail);
};

//-------------------------------------------------------------------------
// 향후 예상 상계금액 계산
//-------------------------------------------------------------------------
scwin.f_AfterSetoffAmt = function () {
  // 향후 예상 상계금액 계산
  // 1.종료년월 <= 최종상계년월 : 0
  // 2.최종상계년월 < 시작년월 : 월 상계금액 * 개월수
  // 3.최종상계년월 >= 시작년월 : 월 상계금액 * (종료년월 - 최종상계년월)

  let finalSetoffYm = ""; // 최종상계년월
  let stYm = ""; // 시작년월
  let endYm = ""; // 종료년월
  let setoffAmt = 0; // 월 상계금액
  let mmCnt = 0; // 개월수
  var afterSetoffAmt = 0; // 향후 예상 상계금액
  let totAmt = 0; // 향후 예상 상계금액 합계

  //finalSetoffYm = ds_trusteeInformationDTO.getCellData(0, "finalSetoffYm");
  finalSetoffYm = ed_finalSetoffYm.getValue(); // 최종 상계년월 (데이터 변경시 데이터 리스트에서는 반영이 안되어 직접 참조)

  if ($c.util.isEmpty($p, finalSetoffYm)) return;
  for (i = 0; i < ds_depositSetoffPlanDTOList.getRowCount(); i++) {
    stYm = ds_depositSetoffPlanDTOList.getCellData(i, "stYm");
    endYm = ds_depositSetoffPlanDTOList.getCellData(i, "endYm");
    setoffAmt = scwin.f_parseInt(ds_depositSetoffPlanDTOList.getCellData(i, "setoffAmt"));
    mmCnt = scwin.f_parseInt(ds_depositSetoffPlanDTOList.getCellData(i, "mmCnt"));
    if (endYm < finalSetoffYm || endYm == finalSetoffYm) {
      afterSetoffAmt = 0;
    } else if (finalSetoffYm < stYm) {
      afterSetoffAmt = setoffAmt * mmCnt;
    } else if (finalSetoffYm > stYm || finalSetoffYm == stYm) {
      //afterSetoffAmt = setoffAmt * (f_MonthDiffer(finalSetoffYm, endYm) - 1);  // 최종상계년월은 포함 달수 계산		
      afterSetoffAmt = setoffAmt * $c.gus.cfMonthsBetween($p, finalSetoffYm.toDate(), endYm.toDate()); // 최종상계년월은 포함 달수 계산		
    }
    totAmt = parseInt(totAmt + afterSetoffAmt);
  }
  let reuslt = $c.gus.cfInsertComma($p, totAmt);
  lay_afterSetoffAmt.setValue(reuslt ? reuslt : "0");
};

//grid2 callback
// 수탁자정보 조회 
scwin.sbm_retrieve_detail_submitdone = function () {
  scwin.freeFromSet(); //freeFrom setting 지정 function call
  scwin.f_AfterSetoffAmt(); // 향후 예상 상계금액 계산

  let totCnt = ds_depositSetoffPlanDTOList.getRowCount();
  total_etc.setValue(totCnt);
};

//-------------------------------------------------------------------------
// 수탁자정보 등록 저장
//-------------------------------------------------------------------------
scwin.btn_Save_onclick = async function (e) {
  scwin.button = "SAVE";

  // 보증금상계계획 Grid 체크
  let chkValid = await $c.gus.cfValidate($p, [ed_txnBank, ed_firstSubstPayAmt, ed_ctrtSubstPayAmt, ed_firstPmntAmt]);
  if (!chkValid) return;
  let valInfoArr = [{
    id: 'stYm',
    name: '상계 시작년월',
    mandatory: true
  }, {
    id: 'endYm',
    name: '상계 종료년월',
    mandatory: true
  }];
  let chkValid2 = await $c.gus.cfValidateGrid($p, gr_depositSetoffPlanDTOList, null, null, valInfoArr, "보증금상계계획");
  if (!chkValid2) return;

  // 차량적용기간 필수 및 기간 체크
  if ($c.gus.cfIsNull($p, ed_vehclStDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["차량적용기간"]);
    ed_vehclStDt.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, ed_vehclEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["차량적용기간"]);
    ed_vehclEndDt.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_vehclStDt.getValue(), ed_vehclEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  // -----------------------------------------------
  // 공통 필드 세팅 - 매핑 테이블로 정리
  // -----------------------------------------------
  var commonFields = {
    // 문자열 그대로
    vehclStDt: ed_vehclStDt.getValue(),
    vehclEndDt: ed_vehclEndDt.getValue(),
    //finalSetoffYm: ed_finalSetoffYm.getValue(),
    txnBank: ed_txnBank.getValue(),
    txnBankNm: ed_txnBankNm.getValue(),
    bankAcntNo: ed_bankAcntNo.getValue(),
    dpstr: ed_dpstr.getValue(),
    // 숫자 변환
    firstSubstPayAmt: scwin.f_parseInt(ed_firstSubstPayAmt.getValue()),
    ctrtSubstPayAmt: scwin.f_parseInt(ed_ctrtSubstPayAmt.getValue()),
    preRettrvCnt: scwin.f_parseInt(ed_preRettrvCnt.getValue()),
    repayAmt: scwin.f_parseInt(ed_repayAmt.getValue()),
    firstPmntAmt: scwin.f_parseInt(ed_firstPmntAmt.getValue()),
    addPmntAmt: scwin.f_parseInt(ed_addPmntAmt.getValue()),
    accumSetoffAmt: scwin.f_parseInt(ed_accumSetoffAmt.getValue())
  };

  // 공통 필드 일괄 세팅
  Object.keys(commonFields).forEach(function (key) {
    ds_trusteeInformationDTO.setCellData(0, key, commonFields[key]);
  });

  // 최초대급금액 체크
  scwin.f_SetFirstSubstPayAmt();
  if (scwin.flag == "REGIST") {
    if (!ds_depositSetoffPlanDTOList.getModifiedIndex().length < 1 && (scwin.posnClsCd == "W" || scwin.posnClsCd == "J")) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["보증금상계계획"]);
      return;
    }
  } else if (scwin.flag == "UPDATE") {
    if (ds_trusteeInformationDTO.getModifiedIndex().length < 1 && ds_depositSetoffPlanDTOList.getModifiedIndex().length < 1) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
      return;
    }
  }
  if (scwin.posnClsCd == "G") {
    scwin.gubun = 0;
  } else {
    // 필수입력사항 확인, 상계기간 년월 유효값 체크 >> 유효값 전체 체크 후 From-to 체크하기 위해 for문 중복 실행
    for (var i = 0; i < ds_depositSetoffPlanDTOList.getRowCount(); i++) {
      let stYm = ds_depositSetoffPlanDTOList.getCellData(i, "stYm");
      let endYm = ds_depositSetoffPlanDTOList.getCellData(i, "endYm");
      let rowC = i + 1;
      if (!scwin.f_chkValidDate(stYm)) {
        await $c.win.alert($p, "적용시작일은(는) 유효한 날짜가 아닙니다.");
        gr_depositSetoffPlanDTOList.setFocusedCell(i, "stYm");
        return;
      }
      if (!scwin.f_chkValidDate(endYm)) {
        await $c.win.alert($p, "적용종료일은(는) 유효한 날짜가 아닙니다.");
        gr_depositSetoffPlanDTOList.setFocusedCell(i, "endYm");
        return;
      }
    }

    // 상계기간 from ~ to 체크
    for (var i = 0; i < ds_depositSetoffPlanDTOList.getRowCount(); i++) {
      let stYm = ds_depositSetoffPlanDTOList.getCellData(i, "stYm");
      let endYm = ds_depositSetoffPlanDTOList.getCellData(i, "endYm");
      if (!$c.gus.cfIsAfterDate($p, stYm + "01", endYm + "01")) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자가 종료일자 이전이어야 합니다.
        ds_depositSetoffPlanDTOList.getRowPosition(i);
        gr_depositSetoffPlanDTOList.setFocusedCell(i, "endYm");
        return;
      }
    }

    // 상계기간 중복 체크
    scwin.f_CheckFlag(ds_depositSetoffPlanDTOList.getRowPosition());
  }
  if (scwin.gubun != 1) {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      // -----------------------------------------------
      // REGIST
      // -----------------------------------------------
      if (scwin.flag === "REGIST") {
        var curRow = ds_consignmentContractDTOList.getRowPosition();
        ds_trusteeInformationDTO.setCellData(0, "ctrtNo", ds_consignmentContractDTOList.getCellData(curRow, "ctrtNo"));
        ds_trusteeInformationDTO.setCellData(0, "eqCd", ds_consignmentContractDTOList.getCellData(curRow, "eqCd"));
        $c.sbm.execute($p, sbm_save_regist);

        // -----------------------------------------------
        // UPDATE
        // -----------------------------------------------
      } else if (scwin.flag === "UPDATE") {
        // 수탁자정보 수정여부
        if (ds_trusteeInformationDTO.getModifiedIndex().length > 0) {
          ds_trusteeInformationDTO.setCellData(0, "chkMst", "UPDATE");
        }

        // 보증금상계계획 수정여부
        if (ds_depositSetoffPlanDTOList.getModifiedIndex().length > 0) {
          ds_trusteeInformationDTO.setCellData(0, "chkDtl", "UPDATE");
        }

        // 삭제 상태 아닌 행 모두 insert 처리
        for (var i = 0; i < ds_depositSetoffPlanDTOList.getRowCount(); i++) {
          if (ds_depositSetoffPlanDTOList.getRowStatusValue(i) !== 3) {
            ds_depositSetoffPlanDTOList.modifyRowStatus(i, "C");
          }
        }
        $c.sbm.execute($p, sbm_save_update);
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["상계기간"]); // @은(는) 중복될 수 없습니다.
  }
};

//-------------------------------------------------------------------------
// 최초대급금액 체크
//-------------------------------------------------------------------------
scwin.f_SetFirstSubstPayAmt = function () {
  var firstSubstPayAmt = ds_trusteeInformationDTO.getOriginalCellData(0, "firstSubstPayAmt"); // 원본값
  var substRamt = ds_trusteeInformationDTO.getOriginalCellData(0, "substRamt");

  // 최초대급금액 수정 체크
  if (firstSubstPayAmt == substRamt) {
    var newAmt = parseInt(ed_firstSubstPayAmt.getValue() || 0);
    ds_trusteeInformationDTO.setCellData(0, "firstSubstPayAmt", newAmt);
    ds_trusteeInformationDTO.setCellData(0, "substRamt", newAmt);
    lay_substRamt.setValue($c.gus.cfInsertComma($p, newAmt));
    let ctrtSubstPayAmt = scwin.f_parseInt(ds_trusteeInformationDTO.getCellData(0, "ctrtSubstPayAmt"));
    // 계약대급금액 체크
    if (ctrtSubstPayAmt == 0) {
      // ds_trusteeInformationDTO.setCellData(0, "ctrtSubstPayAmt", newAmt);
      // ds_trusteeInformationDTO.setCellData(0, "preRettrvCnt", 0);
      ed_ctrtSubstPayAmt.setValue(newAmt);
      ed_preRettrvCnt.setValue(0);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["최초대급금액", "수정"]);
  }
};

//-------------------------------------------------------------------------
// 상계기간 중복 체크
//-------------------------------------------------------------------------	
scwin.f_CheckFlag = function (row) {
  if (row == 0) {
    return;
  }
  let nowAdptStDt = ds_depositSetoffPlanDTOList.getCellData(row, "stYm");
  let nowAdptEndDt = ds_depositSetoffPlanDTOList.getCellData(row, "endYm");
  if (nowAdptStDt == "" || nowAdptEndDt == "")
    //아무것도 입력하지 않았다.
    return;
  for (let i = 0; i < ds_depositSetoffPlanDTOList.getRowCount(); i++) {
    if (row != i) {
      let stYm = ds_depositSetoffPlanDTOList.getCellData(i, "stYm");
      let endYm = ds_depositSetoffPlanDTOList.getCellData(i, "endYm");
      if (stYm == "" || endYm == "")
        //입력되지 않은 것은 무시한다.
        continue;
      if (!scwin.f_IsAfterDate(nowAdptStDt, nowAdptEndDt, stYm, endYm)) {
        if (scwin.button != "SAVE") {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["상계기간"]); // @은(는) 중복될 수 없습니다.
        }
        scwin.gubun = 1;
        return;
      }
      scwin.gubun = 0;
    }
  }
};

//-------------------------------------------------------------------------
// 상계기간 중복  체크 함수(등록상계시작년월, 등록적용상계종료년월, 기존상계시작년월, 기존적용상계종료년월)
//-------------------------------------------------------------------------
scwin.f_IsAfterDate = function (nowStart, nowEnd, compDate1, compDate2) {
  if (compDate1 <= nowStart && compDate2 > nowStart) {
    return false;
  }
  if (compDate1 < nowEnd && compDate2 > nowEnd) {
    return false;
  }
  if ((compDate1 > nowStart || compDate2 >= nowStart) && (compDate1 <= nowEnd || compDate2 < nowEnd)) {
    return false;
  }
  if (compDate1 > nowEnd && compDate2 < nowEnd) {
    return false;
  }
  return true;
};

// 상계기간 년월 유효값 체크
scwin.f_chkValidDate = function (value) {
  value = (value ?? "").toString().replace(/\D/g, ""); // 숫자만
  if (!/^\d{6}$/.test(value)) return false; // 6자리 숫자 아님

  const y = parseInt(value.substring(0, 4), 10);
  const m = parseInt(value.substring(4, 6), 10);
  if (y < 0001) return false;
  if (m < 1 || m > 12) return false; // 월 범위 체크

  return true;
};

// 보증금상계계획 테이블의 개월수, 금액 계산
scwin.gr_depositSetoffPlanDTOList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  scwin.f_CheckFlag(rowIndex);
  if (ds_depositSetoffPlanDTOList.getCellData(rowIndex, "stYm") != "" && ds_depositSetoffPlanDTOList.getCellData(rowIndex, "endYm") != "") {
    let stYm = ds_depositSetoffPlanDTOList.getCellData(rowIndex, "stYm") + "01";
    let endYm = ds_depositSetoffPlanDTOList.getCellData(rowIndex, "endYm") + "01";
    let diffInMonths = $c.gus.cfMonthsBetween($p, stYm.toDate(), endYm.toDate()); //월수계산으로 

    ds_depositSetoffPlanDTOList.setCellData(rowIndex, "mmCnt", diffInMonths + 1);

    // 향후 예상 상계금액 계산
    scwin.f_AfterSetoffAmt(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopup = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 점소 팝업
      udc_comCode_lobran.setSelectId();
      await udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 거래은행 팝업 (grid 2 > 은행)
      udc_comCode_bank.setSelectId("");
      await udc_comCode_bank.cfCommonPopUp(scwin.udc_comCode_bank_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopup(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopup(disGubun, '', pVal, 'T', 'T');
};

//점소popup
scwin.udc_comCode_lobran_onclickEvent = function (e) {
  scwin.f_openCommonPopup(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", "T");
};
//점소 pop callback
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};
scwin.udc_comCode_lobran_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 1);
};
scwin.udc_comCode_lobran_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm, ed_lobranCd, 1, false);
};

//거래은행 popup
scwin.udc_comCode_bank_onclickEvent = function (e) {
  scwin.f_openCommonPopup(2, ed_txnBank.getValue(), ed_txnBankNm.getValue(), "F", "T");
};

//은행 pop callback
scwin.udc_comCode_bank_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_txnBank, ed_txnBankNm);
};
scwin.udc_comCode_bank_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_txnBank, ed_txnBankNm, 2);
};
scwin.udc_comCode_bank_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_txnBankNm, ed_txnBank, 2, false);
};
scwin.sbm_save_update_submitdone = async function (e) {
  // responseJSON에서 resultDataSet 추출
  var resultDataSet = e.responseJSON.resultDataSet;
  if (!resultDataSet || resultDataSet.length === 0) {
    return;
  }

  // 첫번째 행 = Result (성공/실패 여부)
  var result = resultDataSet[0];
  if (result.Msg === "SUCC") {
    scwin.flag = "UPDATE";

    // 성공
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_RetrieveTrusteeInformation(gr_consignmentContractDTOList.getFocusedRowIndex());
  }
};
scwin.fn_inputChange = function (info) {
  // 이벤트를 발생시킨 컴포넌트의 ID와 값 확인
  var inputId = this.getID();
  var newValue = this.getValue();
  this.setValue(newValue);

  // 여기에 공통으로 실행할 로직을 작성합니다.
  scwin.f_SetPayAmt();
  scwin.f_AfterSetoffAmt();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기준일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_stdDt',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'조회기준일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_comCode_lobran',maxlengthCode:'4',mandatoryCode:'true',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',UpperFlagCode:'1',validTitle:'점소',allowCharCode:'a-zA-Z0-9',maxlengthName:'50',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'[]전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_consignmentContractDTOList',style:'',autoFit:'allColumn',id:'gr_consignmentContractDTOList',visibleRowNum:'20',class:'wq_gvw',focusMode:'cell',focusMove:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_consignmentContractDTOList_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'장비분류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column15',value:'위수탁자 성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'거래처',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqClssCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'posnClsCd',displayMode:'value delim label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_vehclInfo',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_vehclNo',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량등록일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_acqDt',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량적용기간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_vehclStDt',edToId:'ed_vehclEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleTo:'차량적용기간',titleFrom:'차량적용기간'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'위수탁자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_clntNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_crn',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'휴대번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_logisClntMpNo',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_logisClntTelNo',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_ctrtDt',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약기간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_ctrtDtTerm',label:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_bankInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁자<br/>지급 대행<br/>계좌',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래은행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_txnBank',nameId:'ed_txnBankNm',id:'udc_comCode_bank',mandatoryCode:'true',maxlengthCode:'2',UpperFlagCode:'1',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_comCode_bank_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_bank_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_bank_onviewchangeNameEvent',selectID:'retrieveBankCdInfo',maxlengthName:'30',validTitle:'거래은행',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계좌번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_bankAcntNo',placeholder:'',style:'width:250px;',maxlength:'20',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예금주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dpstr',placeholder:'',style:'width:150px;',maxlength:'30'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_info1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:10%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최초대급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_firstSubstPayAmt',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'13',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',title:'최초대급금액'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대급금잔액/회수개월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_substRamt',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_substPayCnt',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약대급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ctrtSubstPayAmt',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'13',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',title:'계약대급금액'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사전회수횟수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_preRettrvCnt',placeholder:'',style:'width:100px;',maxlength:'3',allowChar:'0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_info2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용 보증금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_adptDeposit',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입보증금-일반',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_depositAmt',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'초기 납입금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_firstPmntAmt',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'13',allowChar:'0-9','ev:onviewchange':'scwin.fn_inputChange',displayFormat:'#,##0',dataType:'number',title:'초기 납입금액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'납입액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_payAmt',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'추가 납입금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_addPmntAmt',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'0-9','ev:onviewchange':'scwin.fn_inputChange',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반제금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_repayAmt',placeholder:'',class:'tar',maxlength:'13',allowChar:'0-9','ev:onviewchange':'scwin.fn_inputChange',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'누적 상계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_accumSetoffAmt',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'0-9','ev:onviewchange':'scwin.fn_inputChange ',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종 상계년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_finalSetoffYm',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM','ev:onviewchange':'scwin.fn_inputChange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차이',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_diffAmt',label:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_depositSetoffPlanDTOList',id:'gr_depositSetoffPlanDTOList',style:'',visibleRowNum:'all',visibleRowNumFix:'true',rowStatusVisible:'true',focusMode:'cell',focusMove:'true','ev:oncellindexchange':'scwin.gr_depositSetoffPlanDTOList_oncellindexchange',gridName:'보증금상계계획'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'상계 시작년월',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'상계 종료년월',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'월 상계금액',width:'140',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'개월수',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'금액',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stYm',inputType:'text',width:'120',textAlign:'center',allowChar:'0-9',displayFormat:'####/##',mandatory:'true',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endYm',inputType:'text',width:'120',textAlign:'center',allowChar:'0-9',displayFormat:'####/##',mandatory:'true',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffAmt',inputType:'text',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mmCnt',inputType:'text',width:'100',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'expression',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'Number(display(\'setoffAmt\')) * Number(datalist(\'mmCnt\'))'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total_etc',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',id:'udc_bottomGrdBtn',gridID:'gr_depositSetoffPlanDTOList',rowAddFunction:'scwin.f_AddRowDepositSetoffPlanDTOList',rowDelFunction:'scwin.f_DelRowDepositSetoffPlanDTOList',cancelFunction:'scwin.f_CancelRowDepositSetoffPlanDTOList',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',btnCancelObj:'btn_cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'향후 예상 상계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_afterSetoffAmt',label:'',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})