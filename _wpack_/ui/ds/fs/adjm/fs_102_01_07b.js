/*amd /ui/ds/fs/adjm/fs_102_01_07b.xml 45710 ae0a2c0a2c30f5c9517aa6087ccf35702d8c3eae5d175926ac305cc1ec937e32 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerOrthersPrimeCostDTOList',saveRemovedData:'true','ev:ondataload':'scwin.ds_containerOrthersPrimeCostDTOList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkStpNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkWrkStpNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsCd',name:'협력업체확인구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmDt',name:'협력업체확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsCd',name:'매입승인구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dissent',name:'이의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pstpnRsn',name:'연기사유',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseListQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'동부부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'일자구분(작업일자/확인일자)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'작업일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'작업일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtSt',name:'확인일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmDtEnd',name:'확인일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoConfirmClsCd',name:'확인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAdmitClsCd',name:'동부승인구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unconfirmedIncluYn',name:'미확인포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unAdmitIncluYn',name:'미승인포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'incluYn',name:'name14',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_purchaseListQueryConditionDTO',action:'/ds.fs.adjm.pchscerticoll.RetrieveContainerOrthersPrimeCostListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseListQueryConditionDTO","key":"IN_DS1"},{"id":"ds_containerOrthersPrimeCostDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_containerOrthersPrimeCostDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_registCooperationCompanyConfirmation',action:'/ds.fs.adjm.pchscerticoll.RegistCooperationCompanyConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_containerOrthersPrimeCostDTOList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_registCooperationCompanyConfirmation_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.loginDTO = "";
scwin.userClsCd = ""; // 사용자구분코드(02:협력업체(운송))
scwin.loginClntNo = "";
scwin.loginClntNm = "";
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.olddata = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.userClsCd = scwin.loginDTO.userClsCd;
  scwin.loginClntNo = scwin.loginDTO.userClsCd;
  scwin.loginClntNm = scwin.loginDTO.userClsCdNm;
  const codeOptions = [{
    grpCd: "FS261",
    compID: "acb_copCoConfirmClsCd"
  },
  // 셀렉트
  {
    grpCd: "FS262",
    compID: "acb_pchsAdmitClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);

  // btn_Confirm.setDisabled(true);
  // btn_ConfirmDtUpdate.setDisabled(true);
  // btn_ConfirmCancel.setDisabled(true);
  // btn_DissentApply.setDisabled(true);
  // btn_Cancel.setDisabled(true);
  // btn_Save.setDisabled(true);
  $c.gus.cfDisableAllBtn($p);
};

//-------------------------------------------------------------------------
// 기본세팅 / 쓸데없는거 지워버림
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  udc_copCoConfirmDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  udc_wrkDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  if (scwin.userClsCd != "01") {
    // 내부사용자가 아니면
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    ed_pchsClntNm.setValue(scwin.loginClntNm);
    udc_pchsClnt.setDisabled(true);
  } else {
    ed_pchsClntNo.focus();
  }
};
scwin.onUdcCompleted = function () {
  scwin.f_SelWrkDt();
  scwin.f_SetDefaultData();
  udc_copCoConfirmDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  udc_wrkDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  if (scwin.userClsCd != "01") {
    // 내부사용자가 아니면
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    ed_pchsClntNm.setValue(scwin.loginClntNm);
    udc_pchsClnt.setDisabled(true);
  } else {
    ed_pchsClntNo.focus();
  }
};

//-------------------------------------------------------------------------
// 조회  f_RetrieveContainerOrthersPrimeCostList
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if (acb_dtCls.getValue() == "01") {
    // 작업일자 기준			
    if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, acb_selpchItemCd, ica_wrkDtSt, ica_wrkDtEnd]))) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ica_wrkDtSt.getValue(), ica_wrkDtEnd.getValue()))) {
      $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ica_wrkDtSt.focus();
      return;
    }
  } else if (acb_dtCls.getValue() == "02") {
    // 확인일자 기준
    if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, acb_selpchItemCd, ica_copCoConfirmDtSt, ica_copCoConfirmDtEnd]))) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ica_copCoConfirmDtSt.getValue(), ica_copCoConfirmDtEnd.getValue()))) {
      $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ica_copCoConfirmDtSt.focus();
      return;
    }
  }

  // 구분(미확인포함여부/미승인포함여부)- 쿼리문에서 사용
  if (cbx_unconfirmedIncluYn.getValue() == "0" && cbx_unAdmitIncluYn.getValue() == "0") {
    dma_purchaseListQueryConditionDTO.set("incluYn", "N");
  } else {
    dma_purchaseListQueryConditionDTO.set("incluYn", "Y");
  }
  dma_purchaseListQueryConditionDTO.set("pchsClntNo", ed_pchsClntNo.getValue());
  // dma_purchaseListQueryConditionDTO.set("vehclNo" ,ed_vehclNo.getValue());
  dma_purchaseListQueryConditionDTO.set("pchsDeptCd", ed_pchsDeptCd.getValue());
  dma_purchaseListQueryConditionDTO.set("selpchItemCd", acb_selpchItemCd.getValue());
  dma_purchaseListQueryConditionDTO.set("dtCls", acb_dtCls.getValue());
  dma_purchaseListQueryConditionDTO.set("wrkDtSt", ica_wrkDtSt.getValue());
  dma_purchaseListQueryConditionDTO.set("wrkDtEnd", ica_wrkDtEnd.getValue());
  dma_purchaseListQueryConditionDTO.set("copCoConfirmDtSt", ica_copCoConfirmDtSt.getValue());
  dma_purchaseListQueryConditionDTO.set("copCoConfirmDtEnd", ica_copCoConfirmDtEnd.getValue());
  dma_purchaseListQueryConditionDTO.set("copCoConfirmClsCd", acb_copCoConfirmClsCd.getValue());
  dma_purchaseListQueryConditionDTO.set("pchsAdmitClsCd", acb_pchsAdmitClsCd.getValue());
  dma_purchaseListQueryConditionDTO.set("unconfirmedIncluYn", cbx_unconfirmedIncluYn.getValue());
  dma_purchaseListQueryConditionDTO.set("unAdmitIncluYn", cbx_unAdmitIncluYn.getValue());
  $c.sbm.execute($p, sbm_purchaseListQueryConditionDTO);
};

//-------------------------------------------------------------------------
// 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_containerOrthersPrimeCostDTOList_ondataload = function () {
  let rowCnt = ds_containerOrthersPrimeCostDTOList.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    $c.gus.cfDisableAllBtn($p);
    // btn_Confirm.setDisabled(true);
    // btn_ConfirmDtUpdate.setDisabled(true);
    // btn_ConfirmCancel.setDisabled(true);
    // btn_DissentApply.setDisabled(true);
    // btn_Cancel.setDisabled(true);
    // btn_Save.setDisabled(true);
  } else {
    $c.gus.cfEnableAllBtn($p);
    // btn_Confirm.setDisabled(false);
    // btn_ConfirmDtUpdate.setDisabled(false);
    // btn_ConfirmCancel.setDisabled(false);
    // btn_DissentApply.setDisabled(false);
    // btn_Cancel.setDisabled(false);
    // btn_Save.setDisabled(false);
  }
  spa_totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 기타 원가 확인 f_Confirm
//-------------------------------------------------------------------------
scwin.btn_Confirm_onClick = function (e) {
  // Data 변경 여부 조회
  if (ds_containerOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }

  // 협력업체확인구분(FS261)이 01:미확인, 03:이의신청, 04:이의거부, 05:이의수용
  let copCoConfirmClsCd = "";
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    copCoConfirmClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "copCoConfirmClsCd");
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      if (copCoConfirmClsCd == "02" || copCoConfirmClsCd == "03") {
        $c.win.alert($p, "이미 확인된 건이 포함되어 있습니다.");
        return;
      }
    }
  }
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmClsCd", "02");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmClsNm", "확인");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmDt", scwin.vCurDate); // 현재날짜
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "btn", "T");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "chk", "F");
    }
  }
};

//-------------------------------------------------------------------------
// 기타 원가 확인일자 수정 f_ConfirmDtUpdate
//-------------------------------------------------------------------------
scwin.btn_ConfirmDtUpdate_onClick = function (e) {
  // Data 변경 여부 조회
  if (ds_containerOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인, 03:보류
  let copCoConfirmClsCd = "";
  let pchsAdmitClsCd = "";
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    copCoConfirmClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "copCoConfirmClsCd");
    pchsAdmitClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "pchsAdmitClsCd");
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      if (copCoConfirmClsCd != "02") {
        $c.win.alert($p, "미확인인 건이 포함되어 있습니다.");
        return;
      }
      if (pchsAdmitClsCd == "02") {
        $c.win.alert($p, "이미 동부 승인이 이루어진 건이 포함되어 있습니다.");
        return;
      }
    }
  }
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmDt", scwin.vCurDate); // 현재날짜
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "btn", "T");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "chk", "F");
    }
  }
};

//-------------------------------------------------------------------------
// 기타 원가 확인 취소 f_ConfirmCancel
//-------------------------------------------------------------------------
scwin.btn_ConfirmCancel_onClick = function (e) {
  // Data 변경 여부 조회
  if (ds_containerOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["자료"]));
    return;
  }

  // 협력업체확인구분(FS261)이 02:확인 이면서 매입승인구분(FS262)이 01:미승인
  let copCoConfirmClsCd = "";
  let pchsAdmitClsCd = "";
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    copCoConfirmClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "copCoConfirmClsCd");
    pchsAdmitClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "pchsAdmitClsCd");
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      if (copCoConfirmClsCd != "02") {
        $c.win.alert($p, "미확인인 건이 포함되어 있습니다.");
        return;
      }
      if (pchsAdmitClsCd != "01") {
        $c.win.alert($p, "이미 동부 승인이 이루어진 건이 포함되어 있습니다.");
        return;
      }
    }
  }
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmClsCd", "01");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmClsNm", "미확인");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmDt", "");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "rsltsPic", ""); // 실적담당자
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "btn", "T");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "chk", "F");
    }
  }
};

//-------------------------------------------------------------------------
// 기타 원가 이의제기 f_DissentApply
//-------------------------------------------------------------------------
scwin.btn_DissentApply_onClick = function (e) {
  // Data 변경 여부 조회
  if (ds_containerOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }

  // 협력업체확인구분(FS261)이 01:미확인, 04:이의거부, 05:이의수용
  let copCoConfirmClsCd = "";
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    copCoConfirmClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "copCoConfirmClsCd");
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      if (copCoConfirmClsCd == "02" || copCoConfirmClsCd == "03") {
        $c.win.alert($p, "확인된 건이 포함되어 있습니다. <br>해당건은 먼저 확인취소를 해야 합니다.");
        return;
      }
    }
  }
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmClsCd", "03");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmClsNm", "이의신청");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "copCoConfirmDt", "");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "dissent", "이의 내용을 입력하십시오.");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "btn", "T");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "chk", "F");
    }
  }
};

//-------------------------------------------------------------------------
// 취소 f_Cancel
//-------------------------------------------------------------------------
scwin.btn_Cancel_onClick = function (e) {
  // Data 변경 여부 조회
  if (ds_containerOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }

  // 취소할 목록 선택
  let cnt = 0;
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getRowStatus(i) == "U" && ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "취소할 목록을 선택하십시오.");
    return;
  }

  // 원래값 복원
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getRowStatus(i) == "U" && ds_containerOrthersPrimeCostDTOList.getCellData(i, "chk") == "T") {
      ds_containerOrthersPrimeCostDTOList.undoRow(i); // 해당 DataSet의 Row를 원래값(=Original Data)로 복원
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "btn", "F");
      ds_containerOrthersPrimeCostDTOList.setCellData(i, "chk", "F");
    }
  }
  gr_containerOrthersPrimeCostDTOList.setColumnDisabled("copCoConfirmDt", true); // 입력불가 
};

//-------------------------------------------------------------------------
// 저장 f_Save
//-------------------------------------------------------------------------
scwin.btn_Save_onClick = async function (e) {
  // Data 변경 여부 조회
  if (ds_containerOrthersPrimeCostDTOList.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }

  // 처리버튼 클릭여부
  let cnt = 0;
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "btn") == "T") {
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "처리할 업무을 선택하십시오.");
    return;
  }

  // 확인 날짜입력시 validate 체크
  let copCoConfirmDt = "";
  let copCoConfirmClsCd = "";
  let dissent = "";
  for (i = 0; i < ds_containerOrthersPrimeCostDTOList.getTotalRow(); i++) {
    copCoConfirmClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(i, "copCoConfirmClsCd");
    if (ds_containerOrthersPrimeCostDTOList.getCellData(i, "btn") == "T" && copCoConfirmClsCd == "02") {
      copCoConfirmDt = ds_containerOrthersPrimeCostDTOList.getCellData(i, "copCoConfirmDt");

      // 추후 체크   
      if (copCoConfirmDt.length != 8) {
        $c.win.alert($p, i + 1 + "번째 데이타에서 확인일자는 'YYYYMMDD' 형식이어야 합니다.");
        ds_containerOrthersPrimeCostDTOList.setRowPosition(i);
        return;
      }

      // 이의신청시 이의처리/보류사유 입력
      dissent = ds_containerOrthersPrimeCostDTOList.getCellData(i, "dissent");
      if (copCoConfirmClsCd == "03") {
        if (dissent.length == 0 || dissent == null || dissent == "이의 내용을 입력하십시오.") {
          $c.win.alert($p, i + 1 + "번째 데이타에서 이의처리/보류사유를 입력하십시오.");
          ds_containerOrthersPrimeCostDTOList.setRowPosition(i);
          return;
        }
      }
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?						
    $c.sbm.execute($p, sbm_registCooperationCompanyConfirmation);
  }
};

//-------------------------------------------------------------------------
// 이의신청 이력 수정
//-------------------------------------------------------------------------
scwin.f_RetrieveDissentApplyHistory = async function (rowIndex) {
  // 팝업화면에게 key 정보인 오더번호와 매입순번을 넘겨준다.
  let param = {
    odrNo: ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "odrNo"),
    // 오더번호
    pchsSeq: ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "pchsSeq") // 매입순번
  };

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "browserPopup",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  // 이의신청 이력 화면 호출
  let rtn = await $c.win.openPopup($p, "/pub/ds/fs/adjm/fs_102_01_01b.xml.xml", options, param);

  // 다시 조회함 
  scwin.btn_retrieve_onClick();
};

//-------------------------------------------------------------------------
// 작업일자 선택시
//-------------------------------------------------------------------------
scwin.f_SelWrkDt = function () {
  grp_copCoConfirmDt.setStyle("display", "none");
  grp_wrkDt.setStyle("display", "block");

  // 확인구분
  ed_check.show();
  acb_copCoConfirmClsCd.show();
  cbx_unconfirmedIncluYn.show();
  // 동부승인구분
  ed_confirm.show();
  acb_pchsAdmitClsCd.show();
  cbx_unAdmitIncluYn.show();
};

//-------------------------------------------------------------------------
// 확인일자 선택시
//-------------------------------------------------------------------------
scwin.f_SelCopCoConfirmDt = function () {
  // 확인구분
  ed_check.hide();
  acb_copCoConfirmClsCd.hide();
  cbx_unconfirmedIncluYn.hide();
  // 동부승인구분
  ed_confirm.hide();
  cbx_unAdmitIncluYn.hide();
  acb_pchsAdmitClsCd.hide();
  grp_copCoConfirmDt.setStyle("display", "block");
  grp_wrkDt.setStyle("display", "none");
};

//-------------------------------------------------------------------------
// 엑셀 다운로드 , 연결하니까 오류 뜸 나중에 다시 할거 
//-------------------------------------------------------------------------	
scwin.RunExcel = function () {
  let count = ds_containerOrthersPrimeCostDTOList.getTotalRow();
  let gridId = "gr_containerOrthersPrimeCostDTOList";
  let options = {
    fileName: "컨테이너별 기타원가 내역 확인.xlsx",
    sheetName: "컨테이너별 기타원가 내역 확인"
  };
  let infoArr = [];
  if (count <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  } else {
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (협력회사)
//-------------------------------------------------------------------------
scwin.udc_pchsClnt_onClick = async function (e) {
  udc_pchsClnt.cfCommonPopUp(scwin.udc_pchsClnt_callBackFunc, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_pchsClnt_onblurCode = async function (e) {
  if (ed_pchsClntNo.getValue() != "") {
    udc_pchsClnt.cfCommonPopUp(scwin.udc_pchsClnt_callBackFunc, ed_pchsClntNo.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};
scwin.udc_pchsClnt_onChangeName = async function (info) {
  if (ed_pchsClntNm.getValue() != "") {
    udc_pchsClnt.cfCommonPopUp(scwin.udc_pchsClnt_callBackFunc, "", ed_pchsClntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(협력회사)
//-------------------------------------------------------------------------
scwin.udc_pchsClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_pchsClntNo, ed_pchsClntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (동부부서)
//-------------------------------------------------------------------------
scwin.udc_pcphsDept_onClick = async function (e) {
  udc_pcphsDept.cfCommonPopUp(scwin.udc_pcphsDept_callBackFunc, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_pcphsDept_onblurCode = async function (e) {
  if (ed_pchsDeptCd.getValue() != "") {
    udc_pcphsDept.cfCommonPopUp(scwin.udc_pcphsDept_callBackFunc, ed_pchsDeptCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};
scwin.udc_pcphsDept_onChangeName = async function (info) {
  if (ed_pchsDeptNm.getValue() != "") {
    udc_pcphsDept.cfCommonPopUp(scwin.udc_pcphsDept_callBackFunc, "", ed_pchsDeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(동부부서)
//-------------------------------------------------------------------------
scwin.udc_pcphsDept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_pchsDeptCd, ed_pchsDeptNm);
};

//-------------------------------------------------------------------------
// 일자 종류 변경시
//-------------------------------------------------------------------------
scwin.acb_dtCls_Change = function (info) {
  if (acb_dtCls.getValue() == "01") {
    scwin.f_SelWrkDt();
  } else if (acb_dtCls.getValue() == "02") {
    scwin.f_SelCopCoConfirmDt();
  }
};

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------
scwin.btn_init_onclick = function (e) {
  // $c.gus.cfInitObjects(tb_mainData, acb_dtCls);

  ed_pchsClntNm.setValue("");
  ed_pchsClntNo.setValue("");
  ed_pchsDeptCd.setValue("");
  ed_pchsDeptNm.setValue("");
  acb_copCoConfirmClsCd.setValue("");
  acb_pchsAdmitClsCd.setValue("");
  acb_selpchItemCd.setValue("");
  cbx_unAdmitIncluYn.setValue("");
  cbx_unconfirmedIncluYn.setValue("");
  udc_copCoConfirmDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  udc_wrkDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 엑셓 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = function () {
  let cnt = ds_containerOrthersPrimeCostDTOList.getRowCount();
  if (cnt <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  } else {
    const options = {
      fileName: "컨테이너별 기타원가 내역 확인.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "컨테이너별 기타원가 내역 확인",
      startRowIndex: 2
    };

    // 타이틀
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 18,
      text: "컨테이너별 기타원가 내역 확인",
      textAlign: "center",
      drawBorder: false,
      fontSize: "18px"
    }];
    $c.data.downloadGridViewExcel($p, gr_containerOrthersPrimeCostDTOList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 저장 완료시
//-------------------------------------------------------------------------
scwin.sbm_registCooperationCompanyConfirmation_submitdone = function (e) {
  scwin.btn_retrieve_onClick();
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_containerOrthersPrimeCostDTOList_oncellclick = function (rowIndex, columnIndex, columnId) {
  var chk = ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "chk");
  var btn = ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "btn");

  // 확인
  var copCoConfirmClsCd = ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "copCoConfirmClsCd");
  if (columnId == "copCoConfirmDt" && btn == "T" && copCoConfirmClsCd != "03") {
    gr_containerOrthersPrimeCostDTOList.setCellReadOnly(rowIndex, "copCoConfirmDt", false);
  } else {
    gr_containerOrthersPrimeCostDTOList.setCellReadOnly(rowIndex, "copCoConfirmDt", true);
  }

  // 미확인
  if (columnId == "copCoConfirmDt" && btn == "T" && copCoConfirmClsCd == "01") {
    gr_containerOrthersPrimeCostDTOList.setCellReadOnly(rowIndex, "copCoConfirmDt", true);
  }

  // 이의처리/보류사유
  if (columnId == "dissent" && btn == "T" && copCoConfirmClsCd == "03") {
    gr_containerOrthersPrimeCostDTOList.setCellReadOnly(rowIndex, "dissent", false);
  } else {
    gr_containerOrthersPrimeCostDTOList.setCellReadOnly(rowIndex, "dissent", true);
  }

  // 이의신청 이력 수정
  if (columnId == "dissent" && ds_containerOrthersPrimeCostDTOList.getRowStatus(rowIndex) == "R") {
    if (ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "dissent") != "") {
      scwin.f_RetrieveDissentApplyHistory(rowIndex);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 편집시
//-------------------------------------------------------------------------
scwin.gr_containerOrthersPrimeCostDTOList_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_containerOrthersPrimeCostDTOList.getColumnID(columnIndex);
  if (colid == "copCoConfirmDt") {
    var copCoConfirmDt = ds_containerOrthersPrimeCostDTOList.getCellData(rowIndex, "copCoConfirmDt");
    if (!isNaN(copCoConfirmDt)) {
      if (!$c.date.isDate($p, copCoConfirmDt)) {
        $c.win.alert($p, "확인일자는 'YYYYMMDD' 형식이어야 합니다.");
        return;
      }
    } else {
      ds_containerOrthersPrimeCostDTOList.setCellData(rowIndex, "copCoConfirmDt", scwin.olddata);
      $c.win.alert($p, "확인일자를 다시 입력하십시오.");
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 편집전
//-------------------------------------------------------------------------
scwin.gr_containerOrthersPrimeCostDTOList_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_pchsClntNo',nameId:'ed_pchsClntNm',id:'udc_pchsClnt',UpperFlagCode:'0',allowCharCode:'0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',validExpCode:'협력회사:yes',maxlengthName:'50',objTypeCode:'Data',objTypeName:'data',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_pchsClnt_onClick','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onChangeName',validTitle:'협력회사'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'req',editType:'select',id:'acb_dtCls',ref:'',search:'start',style:'width:90px;',submenuSize:'auto','ev:onchange':'scwin.acb_dtCls_Change',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'grp_wrkDt'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',objTypeTo:'Data',mandatoryTo:'true',refDataMap:'',edFromId:'ica_wrkDtSt',edToId:'ica_wrkDtEnd',mandatoryFrom:'true',style:'',objTypeFrom:'Data',id:'udc_wrkDt',refEdDt:''}}]},{T:1,N:'xf:group',A:{id:'grp_copCoConfirmDt'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',objTypeTo:'Data',mandatoryTo:'true',refDataMap:'',edFromId:'ica_copCoConfirmDtSt',edToId:'ica_copCoConfirmDtEnd',mandatoryFrom:'true',objTypeFrom:'Data',style:'',id:'udc_copCoConfirmDt',refEdDt:''}}]}]},{T:1,N:'xf:group',A:{id:'grp_copCoConfirmClsCd'},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ed_check',label:'확인구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{ref:'',search:'start',submenuSize:'auto',editType:'select',style:'width: 120px;',allOption:'',id:'acb_copCoConfirmClsCd',class:'',objType:'data',searchTarget:'value',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{falseValue:'false',ref:'',appearance:'full',disabled:'',style:'',id:'cbx_unconfirmedIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 이전 미확인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_pchsDeptCd',nameId:'ed_pchsDeptNm',id:'udc_pcphsDept',objTypeCode:'Data',objTypeName:'Data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryCode:'false',maxlengthCode:'4',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_pcphsDept_onClick','ev:onblurCodeEvent':'scwin.udc_pcphsDept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_pcphsDept_onChangeName',validTitle:'동부부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'원가유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:208px;',submenuSize:'auto',mandatory:'true',objType:'data',allOption:'',chooseOption:'true',ref:'',title:'원가유형',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위험물 장치료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0037'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지체료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0083'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_pchsAdmitClsCd'},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ed_confirm',label:'동부승인구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{ref:'',search:'start',submenuSize:'auto',editType:'select',style:'width: 120px;',allOption:'',id:'acb_pchsAdmitClsCd',class:'',searchTarget:'value',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'xf:select',A:{falseValue:'false',ref:'',appearance:'full',disabled:'',style:'',id:'cbx_unAdmitIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자범위 동부 미승인 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_containerOrthersPrimeCostDTOList',gridUpYn:'N',gridDownYn:'Y',id:'gr_excel',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_containerOrthersPrimeCostDTOList',id:'gr_containerOrthersPrimeCostDTOList',style:'',visibleRowNum:'16',visibleRowNumFix:'true',fixedColumn:'1','ev:oncellclick':'scwin.gr_containerOrthersPrimeCostDTOList_oncellclick','ev:onafteredit':'scwin.gr_containerOrthersPrimeCostDTOList_onafteredit','ev:onbeforeedit':'scwin.gr_containerOrthersPrimeCostDTOList_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:' ',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업단계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'CNTR',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'일수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'동부부서',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'확인구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'확인일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'동부승인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column33',value:'이의처리',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column31',value:'보류사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vol',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'18.3',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrowDdCnt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsDeptCd',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoConfirmClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copCoConfirmDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAdmitClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'dissent',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'pstpnRsn',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Confirm',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_Confirm_onClick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ConfirmDtUpdate',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_ConfirmDtUpdate_onClick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인일자 수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ConfirmCancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_ConfirmCancel_onClick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확인 취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_DissentApply',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_DissentApply_onClick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'이의제기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onClick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onClick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]}]})