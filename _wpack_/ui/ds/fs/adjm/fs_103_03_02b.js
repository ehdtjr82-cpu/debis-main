/*amd /ui/ds/fs/adjm/fs_103_03_02b.xml 54579 37b63da3a0a3ff16962d7ddd6979b8d6b12b243ca490e5112c1acf23c0c59679 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'전자인증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호(명세서출력)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'공급받는자(동부)E-MAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSts',name:'신고상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCertiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseCertiQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'협력회사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'공급일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'공급일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCerti',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidKndClsCd',name:'증빙종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'전자인증여부(전자세금계산서)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_duplication',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceDTO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'상호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_purchaseCertiQueryConditionDTO',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseCertiQueryConditionDTO","key":"IN_DS1"},{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"},{"id":"ds_purchaseCertiList","key":"OUT_DS2"},{"id":"ds_purchaseEvidenceDTO","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"},{"id":"ds_purchaseCertiList","key":"OUT_DS2"},{"id":"ds_purchaseEvidenceDTO","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_purchaseCertiQueryConditionDTO_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegistTaxInvoiceHistory',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_purchaseEvidenceList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegistPurchaseEvidence',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseCerti","key":"IN_DS1"},{"id":"ds_purchaseCertiList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRegistPurchaseEvidence_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 헙력업체  jbloex / jbloex9900
// 협력업체 세금계산서 발행
// ASIS: 거래명세서, 세금계산서 출력 버튼 아이디가 동일함
// TOBE: btn_Print, btn_Print1 로 구분하였음.

// 아이디 : a112595 비밀번호 : a1245
// 조회조건 :20250101~ 현재

scwin.memJson = $c.data.getMemInfo($p);
scwin.userClsCd = scwin.memJson.userClsCd; // 사용자구분코드(02:협력업체(운송))
scwin.loginClntNo = scwin.memJson.clntNo;
scwin.loginClntNm = scwin.memJson.clntNm;
scwin.vQryStDt = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 20251201 서버시간 기준 해당 월 가장 첫날
scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.vQryStDt); // 31
scwin.vQryEndDt = scwin.vQryStDt.substring(0, 6) + scwin.strLastDate; // 20251231 서버시간 기준 해당 월 가장 마지막날

scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  scwin.f_SetDefaultData();
  $c.gus.cfDisableBtnOnly($p, [btn_Print, btn_Save]);
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ed_pchsIntendDtSt.setValue(scwin.vQryStDt); // 공급일자시작
  ed_pchsIntendDtEnd.setValue(scwin.vQryEndDt); // 공급일자종료
  if (scwin.userClsCd != "01") {
    ed_pchsClntNo.setValue(scwin.loginClntNo);
    txt_pchsClntNm.setValue(scwin.loginClntNm);
    ed_pchsClntNo.setDisabled(true);
    txt_pchsClntNm.setDisabled(true);
    img_PopUp1.setDisabled(true);
    controlShow.hide();
  } else {
    ed_pchsClntNo.focus();
    controlShow.show();
  }
};
scwin.elecAuthTrgtYn_formatter = function (value) {
  if (value == "1") {
    return "Y";
  } else {
    return "N";
  }

  // let totalRow = ds_purchaseEvidenceList.getTotalRow();

  // for (var i = 0; i < totalRow; i++) {
  //     if (value == "1") {
  //         ds_purchaseEvidenceList.setCellData(i, "elecAuthTrgtYn", "Y")
  //     } else {
  //         ds_purchaseEvidenceList.setCellData(i, "elecAuthTrgtYn", "N")
  //     }
  // }
};

//-------------------------------------------------------------------------
// 세금계산서등록현황 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveTaxInvoiceRegistPresent = async function (e) {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크

  let validVal = await $c.gus.cfValidate($p, [ed_pchsClntNo, ed_pchsIntendDtSt, ed_pchsIntendDtEnd]);
  if (!validVal) {
    return;
  }
  let dateVal = $c.gus.cfIsAfterDate($p, ed_pchsIntendDtSt.getValue(), ed_pchsIntendDtEnd.getValue());
  if (!dateVal) {
    $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_pchsIntendDtSt.focus();
    return;
  }
  sbm_ds_purchaseCertiQueryConditionDTO.action = "/ds.fs.adjm.pchsadjmdcsn.RetrieveTaxInvoiceRegistPresentConditionCMD.do";
  $c.sbm.execute($p, sbm_ds_purchaseCertiQueryConditionDTO); // tr_ds_purchaseCertiQueryConditionDTO.post();
};

// // 호출하는곳 없음.
// scwin.f_PrintElecAuth = function () {
//     var printCnt = 0;
//     var rowPosition = 0;  // 선택된 RowPosition
//     for (var i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
//         if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
//             rowPosition = i;
//             printCnt++;
//         }
//     }
//     if (printCnt == 0) {
//         $c.gus.cfAlertMsg(MSG_CM_WRN_007, ["발행할 세금계산서"]);  // @을(를) 선택하십시오.
//         return;
//     }
//     if (ds_purchaseEvidenceList.getCellData(ds_purchaseEvidenceList.getRowPosition(), "elecAuthTrgtYn") == 0) {
//         ds_purchaseEvidenceList.setCellData(ds_purchaseEvidenceList.getRowPosition(), "chk", "F");
//         $c.gus.cfAlertMsg("전자인증이 Y인 경우만 발행 가능합니다.");
//         return;
//     }
//     var pchsVatNo = ds_purchaseEvidenceList.getCellData(rowPosition, "pchsVatNo");
//     var url = "/ds.fs.adjm.pchsadjmdcsn.cmd.PrintTaxInvoiceCMD.do?purchaseEvidenceNumber=" + pchsVatNo;
//     iframe1.location = url;
// }

//-------------------------------------------------------------------------
// 세금계산서 출력
//-------------------------------------------------------------------------
scwin.f_Print = async function (e) {
  var param = "";
  var printCnt = 0;
  for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
    if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
      // 계산서번호
      param = param + ",TO_CHAR(" + ds_purchaseEvidenceList.getCellData(i, "pchsVatNo") + ")";
      printCnt++;
    }
  }
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 세금계산서"]); // @을(를) 선택하십시오.
    return;
  }
  if (ds_purchaseEvidenceList.getCellData(ds_purchaseEvidenceList.getRowPosition(), "elecAuthTrgtYn") == 1) {
    ds_purchaseEvidenceList.setCellData(ds_purchaseEvidenceList.getRowPosition(), "chk", "F");
    await $c.gus.cfAlertMsg($p, "전자인증이 N인 경우만 출력 가능합니다.");
    return;
  }

  // OZ리포트
  const data = {
    odiName: "fi_401_01_09p",
    reportName: '/ac/fi/taxbiz/vatctrl/fi_401_01_09p.ozr',
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: {
      pchsSellCls: param.substring(1)
    },
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: {
      mode: 'preview' // 미리보기
    },
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);

  //세금계산서출력후 이력생성
  // ds_purchaseEvidenceList.UseChangeInfo = false;
  sbm_saveRegistTaxInvoiceHistory.action = "/ds.fs.adjm.pchsadjmdcsn.SaveTaxInvoiceHistoryCMD.do";
  $c.sbm.execute($p, sbm_saveRegistTaxInvoiceHistory); // tr_saveRegistTaxInvoiceHistory.Post();
};

//-------------------------------------------------------------------------
// 세금계산서 접수
//-------------------------------------------------------------------------
scwin.f_RegistPurchaseEvidence = async function () {
  // Data 변경 여부 조회
  if (!ds_purchaseCertiList.getModifiedIndex().length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }

  // 매입예정일자와 매입부서가 같은 목록만 가능
  ds_duplication.removeAll();
  for (var i = 0; i < ds_purchaseCertiList.getTotalRow(); i++) {
    if (ds_purchaseCertiList.getCellData(i, "chk") == "T") {
      ds_duplication.insertRow();
      let rowPos = ds_duplication.getRowPosition();
      let rowData = ds_purchaseCertiList.getRowJSON(i);
      ds_duplication.setCellData(rowPos, "pchsIntendDt", rowData["pchsIntendDt"]); // 매입예정일자
      ds_duplication.setCellData(rowPos, "pchsDeptCd", rowData["pchsDeptCd"]); // 매입부서
    }
  }
  var rowCount = 1;
  var val0 = "";
  var val1 = "";
  var val3 = "";
  var val4 = "";
  for (var i = 0; i < ds_duplication.getTotalRow(); i++) {
    if (i == ds_duplication.getTotalRow()) {} else {
      var row1 = ds_duplication.getCellData(i, "pchsIntendDt");
      var row2 = ds_duplication.getCellData(i + 1, "pchsIntendDt");
      var key1 = ds_duplication.getCellData(i, "pchsDeptCd");
      var key2 = ds_duplication.getCellData(i + 1, "pchsDeptCd");
      if (row1 != null && row2 != null && key1 != null && key2 != null) {
        val0 = row1;
        val1 = row2;
        val3 = key1;
        val4 = key2;
      } else {
        val0 = ds_duplication.getCellData(i, "pchsIntendDt");
        val1 = ds_duplication.getCellData(i + 1, "pchsIntendDt");
        val3 = ds_duplication.getCellData(i, "pchsDeptCd");
        val4 = ds_duplication.getCellData(i + 1, "pchsDeptCd");
      }
      if (val0 == val1 && val3 == val4) {} else {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["선택된 매입예정일자와 매입부서"]); // @을(를) 확인하여 주십시오.
        return;
      }
    }
  }

  // 선택건의 공급가액, 부가세 합계 계산
  var spplyAmt = 0;
  var vat = 0;
  for (var i = 0; i < ds_purchaseCertiList.getTotalRow(); i++) {
    if (ds_purchaseCertiList.getCellData(i, "chk") == "T") {
      spplyAmt += ds_purchaseCertiList.getCellData(i, "spplyAmt");
      vat += ds_purchaseCertiList.getCellData(i, "vat");
    }
  }

  // 적요
  let validVal = await $c.gus.cfValidate($p, [txt_summary, ed_drawEmpNo, ed_drawAcctDeptCd]);
  if (!validVal) {
    return;
  }
  let confirmVal = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmVal) {
    // 저장하시겠습니까?

    let rowPos = ds_purchaseCerti.getRowPosition();
    let bizNum = ds_purchaseEvidenceDTO.getCellData(ds_purchaseEvidenceDTO.getRowPosition(), "busiNo");
    ds_purchaseCerti.setCellData(rowPos, "busiNo", bizNum); // 사업자번호
    ds_purchaseCerti.setCellData(rowPos, "elecAuthTrgtYn", 1); // 전자인증여부(전자세금계산서)-적용
    ds_purchaseCerti.setCellData(rowPos, "spplyAmt", spplyAmt); // 공급금액
    ds_purchaseCerti.setCellData(rowPos, "vat", vat); // 부가세

    sbm_saveRegistPurchaseEvidence.action = "/ds.fs.adjm.pchsadjmdcsn.RegistCompanyPurchaseEvidenceCMD.do";
    $c.sbm.execute($p, sbm_saveRegistPurchaseEvidence); // tr_saveRegistPurchaseEvidence.Post();
  }
};

//-------------------------------------------------------------------------
// 작성자, 작성부서 세팅
//-------------------------------------------------------------------------	
scwin.f_SetDrawInfo = function (value) {
  if (value == "SET") {
    var row = 0;
    for (i = 0; i < ds_purchaseCertiList.getTotalRow(); i++) {
      if (ds_purchaseCertiList.getCellData(i, "chk") == "T") {
        row = i;
      }
    }
    if (row == 0) {
      ed_drawEmpNo.setValue(""); // 작성자코드
      txt_drawEmpNm.setValue(""); // 작성자명
      ed_drawAcctDeptCd.setValue(""); // 작성귀속부서코드
      txt_drawAcctDeptNm.setValue(""); // 작성귀속부서명
    } else {
      let rowData = ds_purchaseCertiList.getRowJSON(row);
      ed_drawEmpNo.setValue(rowData["drawEmpNo"]); // 작성자코드
      txt_drawEmpNm.setValue(rowData["drawEmpNm"]); // 작성자명
      ed_drawAcctDeptCd.setValue(rowData["drawAcctDeptCd"]); // 작성귀속부서코드
      txt_drawAcctDeptNm.setValue(rowData["drawAcctDeptNm"]); // 작성귀속부서명
    }
  } else if (value == "CLEAR") {
    ed_drawEmpNo.setValue(""); // 작성자코드
    txt_drawEmpNm.setValue(""); // 작성자명
    ed_drawAcctDeptCd.setValue(""); // 작성귀속부서코드
    txt_drawAcctDeptNm.setValue(""); // 작성귀속부서명
  }
};

//-------------------------------------------------------------------------
// 거래명세서 출력(전표번호)
//-------------------------------------------------------------------------
scwin.f_PrintSlipNo = async function (slipNo) {
  let v_loginClntNo = scwin.loginClntNo;

  // 협력업체인지 체크하여 거래명세양식 따로 발행 2009.06.09
  if (ed_pchsClntNo.getValue() == v_loginClntNo) {
    const data = {
      odiName: "fs_401_01_08p",
      reportName: '/ds/fs/adjm/fs_401_01_08p.ozr',
      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      odiParam: {
        slipNo: slipNo
      },
      // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
      viewerParam: {
        mode: 'preview' // 미리보기
      },
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
      formParam: {}
    };
    let options = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
  } else {
    const data = {
      odiName: "fs_401_01_06p",
      reportName: '/ds/fs/adjm/fs_401_01_06p.ozr',
      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      odiParam: {
        slipNo: slipNo
      },
      // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
      viewerParam: {
        mode: 'preview' // 미리보기
      },
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
      formParam: {}
    };
    let options = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
  }
};

//-------------------------------------------------------------------------
// 거래명세서 출력(전표번호)
//-------------------------------------------------------------------------
scwin.f_PrintSlipNo_v2 = async function () {
  const data = {
    odiName: "fs_401_01_06_v2p",
    reportName: '/ds/fs/adjm/fs_401_01_06_v2p.ozr',
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: {
      slipNo: ds_purchaseEvidenceList.getCellData(ds_purchaseEvidenceList.getRowPosition(), "slipNo")
    },
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: {
      mode: 'preview' // 미리보기
    },
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

//-------------------------------------------------------------------------
// 거래명세서 출력(전표번호) -- 신대양 제지용 거래명세서 발행 
//-------------------------------------------------------------------------
scwin.f_PrintSlipNoDaeYang = async function () {
  let slipNo = "";
  let vCount = 0;
  if (ds_purchaseEvidenceList.getTotalRow() > 0) {
    for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
        vCount++;
      }
    }
    if (vCount > 1) {
      await $c.win.alert($p, '명세서 발행시 한건씩 발행 가능합니다.');
      return;
    }
    for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
        // OZ리포트
        const data = {
          odiName: "fs_401_01_07p",
          reportName: '/ds/fs/adjm/fs_401_01_07p.ozr',
          // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
          odiParam: {
            slipNo: ds_purchaseEvidenceList.getCellData(i, "slipNo")
          },
          // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
          viewerParam: {
            mode: 'preview' // 미리보기
          },
          // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
          formParam: {}
        };
        let options = {
          id: "ozReportPopup",
          popupName: "오즈 리포트",
          modal: true,
          type: "browserPopup",
          width: 1000,
          height: 600,
          title: "오즈 리포트"
        };
        await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 거래명세서 출력(전표번호) -- 복화  거래명세서 발행 
//-------------------------------------------------------------------------
scwin.f_PrintSlipNoBokhwa = async function () {
  var slipNo = "";
  var vCount = 0;
  if (ds_purchaseEvidenceList.getTotalRow() > 0) {
    for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
        vCount++;
      }
    }
    if (vCount > 1) {
      await $c.win.alert($p, '명세서 발행시 한건씩 발행 가능합니다.');
      return;
    }
    for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
        // OZ리포트
        const data = {
          odiName: "fs_401_01_08p",
          reportName: '/ds/fs/adjm/fs_401_01_08p.ozr',
          // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
          odiParam: {
            slipNo: ds_purchaseEvidenceList.getCellData(i, "slipNo")
          },
          // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
          viewerParam: {
            mode: 'preview' // 미리보기
          },
          // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
          formParam: {}
        };
        let options = {
          id: "ozReportPopup",
          popupName: "오즈 리포트",
          modal: true,
          type: "browserPopup",
          width: 1000,
          height: 600,
          title: "오즈 리포트"
        };
        await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
      }
    }
  }
};
scwin.excelDownA = function () {
  scwin.f_RunExcel('A');
};
scwin.excelDownB = function () {
  scwin.f_RunExcel('B');
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------	
scwin.f_RunExcel = async function (value) {
  var gridId = ""; // 그리드ID
  var sheetName = ""; // 생성될 엑셀 파일의 쉬트명
  var fileName = ""; // 생성될 엑셀 파일명
  var cnt = 0;
  var colCnt = 0;
  if (value == "A") {
    for (var i = 0; i < ds_purchaseEvidenceList.getColCnt(); i++) {
      if (gr_purchaseEvidenceList.getColumnVisible(i) == true) {
        colCnt++;
      }
    }
    var cnt = ds_purchaseEvidenceList.getTotalRow();
    if (!(cnt > 0)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return;
    }
    gridId = "gr_purchaseEvidenceList";
    sheetName = "접수완료 세금계산서";
    fileName = "접수완료 세금계산서.xlsx";
  } else if (value == "B") {
    var cnt = ds_purchaseCertiList.getTotalRow();
    for (var i = 0; i < ds_purchaseCertiList.getColCnt(); i++) {
      if (gr_purchaseCertiList.getColumnVisible(i) == true) {
        colCnt++;
      }
    }
    if (!(cnt > 0)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return;
    }
    gridId = "gr_purchaseCertiList";
    sheetName = "세금계산서 미접수 거래명세서";
    fileName = "세금계산서 미접수 거래명세서.xlsx";
  }
  let gridName = $p.getComponentById(gridId);
  let confirmVal = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (confirmVal) {
    // gridName.SetExcelTitle(1, "value:" + sheetName + ";"  // 표시할 타이틀
    //     + "font-face:'돋움체';" // 폰트
    //     + "font-size:12pt;"    // 폰트 크기
    //     + "font-color:black;"  // 폰트 색깔
    //     + "bgcolor:#ffffff;"   // 배경 색깔
    //     + "align:center;"      // 정렬
    //     + "line-color:white;"  // 타이틀 부분 테두리선 색깔
    //     + "line-width:0pt;"    // 타이틀 테두리선 굵기
    //     + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

    // cfGridToExcel(gridName, sheetName, fileName, 4 + 8 + 16);
    const grdObj = gridName;
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: colCnt,
      text: sheetName,
      textAlign: "center",
      drawBorder: false,
      fontSize: "18px"
    }];
    const options = {
      fileName: fileName,
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetName,
      startRowIndex: 2,
      startColumnIndex: 0
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      // 협력회사 팝업
      rtnList = udc_ed_pchsClntNo.cfCommonPopUp(scwin.udc_ed_pchsClntNo_callback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 매입부서 팝업
      rtnList = udc_ed_pchsDeptCd.cfCommonPopUp(scwin.udc_ed_pchsDeptCd_callback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 작성자 팝업
      rtnList = udc_ed_drawEmpNo.cfCommonPopUp(scwin.udc_ed_drawEmpNo_callback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      // 작성귀속부서 팝업
      rtnList = udc_ed_drawAcctDeptCd.cfCommonPopUp(scwin.udc_ed_drawAcctDeptCd_callback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_ed_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), txt_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_ed_pchsDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsDeptCd.getValue(), txt_pchsDeptNm.getValue(), 'F', 'F');
};
scwin.udc_ed_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_drawEmpNo.getValue(), txt_drawEmpNm.getValue(), 'F', 'T');
};
scwin.udc_ed_drawAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_drawAcctDeptCd.getValue(), txt_drawAcctDeptNm.getValue(), 'F', 'T');
};

// 협력회사 팝업 콜백
scwin.udc_ed_pchsClntNo_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsClntNo, txt_pchsClntNm); // 협력회사코드, 협력회사명
};

// 매입부서 팝업 콜백
scwin.udc_ed_pchsDeptCd_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsDeptCd, txt_pchsDeptNm); // 매입부서코드, 매입부서명
};

// 작성자 팝업 콜백
scwin.udc_ed_drawEmpNo_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_drawEmpNo, txt_drawEmpNm); // 사원번호, 사원명
};

// 작성귀속부서 팝업 콜백
scwin.udc_ed_drawAcctDeptCd_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_drawAcctDeptCd, txt_drawAcctDeptNm); // 작성귀속부서코드, 작성귀속부서명
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  let val = $c.gus.cfCanOpenPopup($p, inObj, pairObj);
  if (!val) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 매입거래처 공통POP-UP
// for=ed_pchsClntNo event=onKillFocus()
scwin.udc_ed_pchsClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 1);
};

// 매입부서 공통POP-UP
// for=ed_pchsDeptCd event=onKillFocus()
scwin.udc_ed_pchsDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, txt_pchsDeptNm, 2);
};

// 작성자 EMEdit Focus 이동시
// for=ed_drawEmpNo event=OnKillFocus()
scwin.udc_ed_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawEmpNo, txt_drawEmpNm, 3);
};

// 작성귀속부서 공통POP-UP
// for=ed_drawAcctDeptCd event=onKillFocus()
scwin.udc_ed_drawAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawAcctDeptCd, txt_drawAcctDeptNm, 4);
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 화면 중앙에 새창열기 f_OpenWin(URL, 이름, 너비, 높이, 스크롤여부(0/1))
//-------------------------------------------------------------------------
// // 호출하는곳 없음
// scwin.f_OpenWin = function (winUrl, winName, winWidth, winHeight, scroll) {
//     newTop = window.screen.height / 2 - winHeight / 2;
//     newLeft = window.screen.width / 2 - winWidth / 2;

//     if (winName == null) winName = "";

//     // ("target page","윈도우이름","위쪽위치,왼쪽위치,높이,너비,그외 설정 ...")
//     p_msgwin = window.open(winUrl, winName, "top=" + newTop + ",left=" + newLeft
//         + ",height=" + winHeight + ",width=" + winWidth
//         + ",scrollbars=" + scroll + ",resizable=0,status=1,toolbar=0,menubar=0");

//     if (p_msgwin != null) {
//         //p_msgwin.resizeTo(winWidth, winHeight);
//         p_msgwin.focus();
//     }
//     return p_msgwin;
// }

//-------------------------------------------------------------------------
// Grid Popup : 송화주
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      //email
      pCode = ds_purchaseEvidenceList.getCellData(row, "pchsClntNo");
      pName = ds_purchaseEvidenceList.getCellData(row, "email");
      var where = "";
      var check = "F";
      // to-do
      udc_grid_email.setSelectId('retrieveClntEmail');
      rtnList = udc_grid_email.cfCommonPopUp(scwin.udc_grid_email_callback, pCode, pName, check, null, null, null, null, where, null, null, null, null);

      // if (rtnList != null) {
      //     if (rtnList[0] != "N/A") {
      //         ds_purchaseEvidenceList.setCellData(row, "email", rtnList[0]);
      //     }
      // }
      break;
  }
};

// to-do row가 값을 받는지 확인 필요.
scwin.udc_grid_email_callback = function (rtnList, row) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ds_purchaseEvidenceList.setCellData(row, "email", rtnList[0]);
    }
  }
};

// for="gr_purchaseEvidenceList" event=OnPopup(row,colid,data)
scwin.grid_popup = function (rowIndex, colId, nowValue) {
  switch (colId) {
    case "email":
      scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
      break;
  }
};

// for=ds_purchaseEvidenceList event=OnLoadCompleted(rowCnt)
scwin.sbm_ds_purchaseCertiQueryConditionDTO_submitdone = function (e) {
  // 총 조회건수 표시
  let rowCnt = ds_purchaseEvidenceList.getTotalRow();
  totalRowsTop.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_Print]);
    $c.gus.cfAlertMsg($p, "접수완료 세금계산서 조회결과가 존재하지 않습니다.");
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Print]);
  }

  //gr_purchaseEvidenceList.setColumnStyle("slipNo", "color", "blue");
  //gr_purchaseEvidenceList.setColumnStyle("slipNo", "text-decoration", "underline");
};

// to-do
// for= ds_purchaseCertiList event = OnLoadCompleted(rowCnt)
// cfHideDSWaitMsg(gr_purchaseCertiList);

// // 총 조회건수 표시
// cfShowTotalRows(totalRowsBottom, rowCnt);

// txt_summary.value = "";  // 적요
// ed_drawEmpNo.Text = "";  // 작성자코드
// txt_drawEmpNm.value = "";  // 작성자명
// ed_drawAcctDeptCd.Text = "";  // 작성귀속부서코드
// txt_drawAcctDeptNm.value = "";  // 작성귀속부서명

// if (rowCnt == 0) {
//     $c.gus.cfDisableBtnOnly([btn_Save]);
//     //$c.gus.cfAlertMsg("세금계산서 미접수 거래명세서 조회결과가 존재하지 않습니다.");
// } else {
//     $c.gus.cfEnableBtnOnly([btn_Save]);
// }

// 세금계산서 접수 TR 
// for=tr_saveRegistPurchaseEvidence event=OnSuccess()
scwin.sbm_saveRegistPurchaseEvidence_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  scwin.f_RetrieveTaxInvoiceRegistPresent();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};

// 계산서 출력시 1건만 선택
// for=gr_purchaseEvidenceList event=OnClick(Row,Colid)
scwin.gr_purchaseEvidenceList_oncellclick = function (rowIndex, columnIndex, columnId) {
  let Row = rowIndex;
  let Colid = columnId;

  //그리드클릭 이벤트처리(거래영세서 출력)
  if (Row >= 0) {
    if (Colid == "slipNo" && ds_purchaseEvidenceList.getCellData(Row, "slipNo") != "") {
      scwin.f_PrintSlipNo(ds_purchaseEvidenceList.getCellData(Row, "slipNo"));
    }
  }
};

// 접수완료된 세금계산서 목록 전체선택/전체취소
// for=gr_purchaseEvidenceList event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_purchaseEvidenceList_onheaderclick = function (colid) {
  var i = 0;
  if (colid == "chkHeader") {
    var bCheck = gr_purchaseEvidenceList.getHeaderValue("chkHeader");
    if (bCheck == "1") {
      for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
        ds_purchaseEvidenceList.setCellData(i, "chk", "T");
      }
    } else {
      for (i = 0; i < ds_purchaseEvidenceList.getTotalRow(); i++) {
        ds_purchaseEvidenceList.setCellData(i, "chk", "F");
      }
    }
  }
};

// 미접수거래명세서목록 전체선택/전체취소
// for=gr_purchaseCertiList event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_purchaseCertiList_onheaderclick = function (colid) {
  var i = 0;
  if (colid == "chkHeader") {
    if (bCheck == "1") {
      for (i = 0; i < ds_purchaseCertiList.getTotalRow(); i++) {
        ds_purchaseCertiList.setCellData(i, "chkHeader", "T");
      }
      scwin.f_SetDrawInfo("SET");
    } else {
      for (i = 0; i < ds_purchaseCertiList.getTotalRow(); i++) {
        ds_purchaseCertiList.setCellData(i, "chk", "F");
      }
      scwin.f_SetDrawInfo("CLEAR");
    }
  }
};

// 작성자, 작성부서 세팅
// for=gr_purchaseCertiList event=OnClick(Row,Colid)
// to-do
scwin.gr_purchaseCertiList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    scwin.f_SetDrawInfo("SET");
    var row = 0;
    for (i = 0; i < ds_purchaseCertiList.getTotalRow(); i++) {
      if (ds_purchaseCertiList.getCellData(i, "chk") == "T") {
        row++;
      }
    }
    if (row == 0) {
      // gr_purchaseCertiList.ColumnProp("chk", "HeadCheck") = "false";
      gr_purchaseCertiList.setHeaderValue("chkHeader", "F", false);
    }
    if (row == ds_purchaseCertiList.getTotalRow()) {
      // gr_purchaseCertiList.ColumnProp("chk", "HeadCheck") = "true";
      gr_purchaseCertiList.setHeaderValue("chkHeader", "T", false);
    } else {
      // gr_purchaseCertiList.ColumnProp("chk", "HeadCheck") = "false";
      gr_purchaseCertiList.setHeaderValue("chkHeader", value, false);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력회사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_pchsClntNo',id:'udc_ed_pchsClntNo',nameId:'txt_pchsClntNm',mandatoryCode:'true',mandatoryName:'false',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_ed_pchsClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ed_pchsClntNo_onclickEvent',btnId:'img_PopUp1',refDataCollection:'dma_purchaseCertiQueryConditionDTO',code:'pchsClntNo',name:'pchsClntNm',allowCharCode:'0-9A-Za-z',maxlengthCode:'6',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'dma_purchaseCertiQueryConditionDTO',refEdDt:'pchsIntendDtEnd',refStDt:'pchsIntendDtSt',style:'',edFromId:'ed_pchsIntendDtSt',edToId:'ed_pchsIntendDtEnd',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_pchsDeptCd',nameId:'txt_pchsDeptNm',id:'udc_ed_pchsDeptCd',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_ed_pchsDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ed_pchsDeptCd_onblurCodeEvent',refDataCollection:'dma_purchaseCertiQueryConditionDTO',code:'pchsDeptCd',name:'pchsDeptNm',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger3',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger4',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_RetrieveTaxInvoiceRegistPresent'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'접수완료 세금계산서 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.excelDownA',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_purchaseEvidenceList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseEvidenceList',defaultCellHeight:'24',id:'gr_purchaseEvidenceList',rowNumWidth:'40',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_purchaseEvidenceList_oncellclick','ev:onheaderclick':'scwin.gr_purchaseEvidenceList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chkHeader',inputType:'checkbox',width:'50',falseValue:'F',trueValue:'T',valueType:'other',value:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계산서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'공급일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정산부서',width:'126'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공급금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'부가세',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'합계금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'전자인증',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'전표번호<br/>(명세서출력)',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',value:'공급받는자<br/>(동부)E-MAIL',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'신고제외여부',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'신고상태',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',width:'50',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsVatNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'adjmDept',inputType:'text',width:'126',style:'',textAlign:'center'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'summary',inputType:'text',width:'300',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'spplyAmt',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'vat',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'expression',width:'120',textAlign:'right',dataType:'number',expression:'sum(\'spplyAmt\',  \'vat\')',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'elecAuthTrgtYn',inputType:'text',width:'120',displayFormatter:'scwin.elecAuthTrgtYn_formatter'}},{T:1,N:'w2:column',A:{class:'underline',displayMode:'label',id:'slipNo',inputType:'text',width:'140',textAlign:'center'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'email',inputType:'textImage',width:'180',imageClickFunction:'scwin.grid_popup'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'declarExceptYn',inputType:'select',width:'150',allOption:'',chooseOption:'',ref:'',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarSts',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsTop',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'controlShow'},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Print_v2',style:'',type:'button','ev:onclick':'scwin.f_PrintSlipNo_v2',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할증포함 거래명세서'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Print',style:'',type:'button','ev:onclick':'scwin.f_PrintSlipNoBokhwa',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Print1',style:'',type:'button','ev:onclick':'scwin.f_Print',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서 출력'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_grid_email'}}]}]},{T:1,N:'xf:group',A:{id:'',class:' row-gap-8',style:'display:none;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'세금계산서 미접수 거래명세서',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_purchaseCertiList',gridDownFn:'scwin.excelDownB',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseCertiList',defaultCellHeight:'24',id:'gr_purchaseCertiList',rowNumWidth:'40',style:'',visibleRowNum:'5',visibleRowNumFix:'true',sortable:'true','ev:onheaderclick':'scwin.gr_purchaseCertiList_onheaderclick','ev:oncellclick':'scwin.gr_purchaseCertiList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chkHeader',inputType:'checkbox',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래명세서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입항목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입예정일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매입부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'비고',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'합계금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'t',id:'chk',inputType:'checkbox',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pchsIntendDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pchsDeptCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'rmk',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'spplyAmt',inputType:'text',width:'100',textAlign:'right',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',textAlign:'right',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',excelCellType:'number',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRowsBottom',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' col6',id:'txt_summary',style:'',maxByteLength:'100',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_drawEmpNo',nameId:'txt_drawEmpNm',id:'udc_ed_drawEmpNo',mandatoryCode:'true',maxlengthCode:'6',selectID:'retrieveEmpInfo','ev:onblurCodeEvent':'scwin.udc_ed_drawEmpNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ed_drawEmpNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_drawAcctDeptCd',nameId:'txt_drawAcctDeptNm',id:'udc_ed_drawAcctDeptCd',maxlengthCode:'5',selectID:'retrieveAcctDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_ed_drawAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ed_drawAcctDeptCd_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:button',A:{class:'btn white',id:'btn_Save',label:'세금계산서 접수',style:'',userAuth:'U','ev:onclick':'scwin.f_RegistPurchaseEvidence'}}]}]}]}]}]}]}]}]})