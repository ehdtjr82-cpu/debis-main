/*amd /ui/ps/eq/fmsmgnt/fmsinterfacemgnt/eq_630_01_04b.xml 49965 c7bd881be7c122ddc104200302b35c1c26ef2b22cb459b315adcab85ce7fb51d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commClsCd',name:'상품구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideClsCd',name:'외부구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fmsAPUnitPriceQueryConditon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDt',name:'회계처리일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmsInterface',saveRemovedData:'true','ev:oncelldatachange':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sndMm',name:'sndMm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSeq',name:'sndSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardSndSeq',name:'cardSndSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'매출입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClsCd',name:'상품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'constSite',name:'공사현장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptClnt',name:'인도처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'공급가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pcostAmt',name:'원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockSetlYn',name:'재고정리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnMm',name:'매출입년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'외부구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Org_fmsInterface',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'postDt',name:'매출입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClsCd',name:'상품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'constSite',name:'공사현장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptClnt',name:'인도처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'공급가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pcostAmt',name:'원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockSetlYn',name:'재고정리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnMm',name:'매출입년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'외부구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_fmsInterface","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fmsInterface","key":"OUT_DS1"}',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.RetrieveFmsInterfaceSelpchCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipKnd',ref:'data:json,[{"id":"ds_fmsInterface","action":"modified","key":"IN_DS1"}]',target:'',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.SaveFmsInterfaceSelpchCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_slipKnd_submitdone','ev:submiterror':'scwin.sbm_slipKnd_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_calcAmount',ref:'data:json,dma_fmsAPUnitPriceQueryConditon',target:'',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.CalcFmsInterfaceSelpchAmountCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_calcAmount_submitdone','ev:submiterror':'scwin.sbm_calcAmount_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_calcAmount',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.CalcFmsInterfaceSelpchAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_fmsAPUnitPriceQueryConditon","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_calcAmount_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_getConstSite',ref:'',target:'data:json,co_ds_combo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_getConstSite_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = async function () {
  // 검색조건 초기값 설정
  ds_search.set("osideClsCd", "F");

  // 하단 초기값 설정
  var curMonth = scwin.g_sCurrDate.substring(0, 6);
  ed_tnxMm.setValue(curMonth);
  dma_fmsAPUnitPriceQueryConditon.set("postDt", curMonth);

  // 공통코드 설정
  var codeOptions = [{
    grpCd: "TL106",
    compID: "lc_commClsCd,gr_fmsInterface:commClsCd"
  }, {
    grpCd: "FI019",
    compID: "lc_selpchClsCdCond,gr_fmsInterface:selpchClsCd"
  }, {
    grpCd: "TL406",
    compID: "gr_fmsInterface:constSite"
  }, {
    grpCd: "TL405",
    compID: "gr_fmsInterface:rcptClnt"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * udc onload
 */
scwin.onUdcCompleted = function () {
  // UDC 초기값 설정
  udc_fromTo.setInitDate(scwin.g_sCurrDate.substring(0, 6) + "01", scwin.g_sCurrDate);

  // 포커스
  udc_fromTo.inputFocus("ipt_from");
};

/**
 * data onload
 */
scwin.ondataload = function () {
  // 상품 selectbox
  dlt_commonCodeTL106.setColumnFilter({
    type: 'row',
    colIndex: 'fltrCd1',
    key: "A",
    condition: 'and',
    exactMatch: true
  });
  lc_commClsCd.setSelectedIndex(0);
};

/**
 * 조회조건 초기화
 */
scwin.btn_refresh_onclick = function (e) {
  ds_search.setEmptyValue();
  ds_search.set("osideClsCd", "F");
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  let validVal = await $c.gus.cfValidate($p, [ed_stDt, ed_endDt]);
  if (!validVal) {
    return;
  }
  ;

  // keyin
  if (WebSquare.util.parseFloat(ed_stDt.getValue()) > WebSquare.util.parseFloat(ed_endDt.getValue())) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.").then(r => {
      ed_stDt.focus();
    });
    return false;
  }

  // 조회 실행
  await $c.sbm.execute($p, sbm_search);
};

/**
 * 조회 후처리
 */
scwin.sbm_search_submitdone = async function (e) {
  const totalRow = ds_fmsInterface.getTotalRow();
  tbx_totalCnt.setValue(totalRow);
  if (totalRow == 0) {
    // "조회결과가 존재하지 않습니다."
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_fmsInterface.setFocusedCell(0);
  }
};

/**
 * 조회 에러처리
 */
scwin.sbm_search_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};

/**
 * 저장
 */
scwin.f_Save = async function () {
  const gridName = "정비직판매출입";
  if (!ds_fmsInterface.getModifiedIndex().length > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, [gridName]); // "@은(는) 변경된 사항이 없습니다."
    return;
  }
  const validArry = [{
    id: "postDt",
    name: "매출입일자",
    mandatory: true
  }, {
    id: "clntNm",
    name: "거래처",
    mandatory: true
  }, {
    id: "selpchClsCd",
    name: "매출입구분",
    mandatory: true
  }, {
    id: "commClsCd",
    name: "상품",
    mandatory: true
  }, {
    id: "rcptClnt",
    name: "인도처",
    mandatory: true
  }, {
    id: "evidClsCd",
    name: "증빙구분",
    mandatory: true
  }, {
    id: "qty",
    name: "수량",
    mandatory: true
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_fmsInterface, null, null, validArry, gridName))) {
    return false;
  }

  // 데이터 보정 로직
  for (let i = 0; i < ds_fmsInterface.getRowCount(); i++) {
    const {
      rowStatus,
      selpchClsCd
    } = ds_fmsInterface.getRowJSON(i);
    if (rowStatus == "C" || rowStatus == "U") {
      if (selpchClsCd == "1") {
        // 매출
        ds_fmsInterface.setCellData(i, "slipKndCd", "H24");
        ds_fmsInterface.setCellData(i, "acctCd", "");
      } else if (selpchClsCd == "2") {
        // 매입
        ds_fmsInterface.setCellData(i, "slipKndCd", "H25");
        ds_fmsInterface.setCellData(i, "acctCd", "");
      }
    }
  }

  // 저장하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_slipKnd);
  }
};

/**
 * 저장 후처리
 */
scwin.sbm_slipKnd_submitdone = function (e) {
  // 성공적으로 저장하였습니다.
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001).then(() => {
    // 재조회
    scwin.f_Retrieve();
  });
};

/**
 * 저장 에러처리
 */
scwin.sbm_slipKnd_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};

/**
 * 금액계산
 */
scwin.f_CalcAmount = async function () {
  var postDt = dma_fmsAPUnitPriceQueryConditon.get("postDt");
  if ($c.util.isEmpty($p, postDt)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["기준년월"]);
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    await $c.sbm.execute($p, sbm_calcAmount);
  }
};

/**
 * 금액계산 후처리
 */
scwin.sbm_calcAmount_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

/**
 * 금액계산 에러처리
 */
scwin.sbm_calcAmount_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};

/**
 * 행추가
 */
scwin.f_AddRow = async function () {
  const insertJson = ds_fmsInterface.getModifiedJSON().filter(ele => {
    return ele.rowStatus == "C";
  });
  if (insertJson.length > 0) {
    const ret = await $c.gus.cfValidate($p, [gr_fmsInterface]);
    if (ret) {
      scwin.insertRow();
    } else {
      return;
    }
  } else {
    scwin.insertRow();
  }
};

/**
 * 행추가 function
 */
scwin.insertRow = function () {
  const row = $c.data.insertRow($p, gr_fmsInterface);
  ds_fmsInterface.setCellData(row, "postDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_fmsInterface.setCellData(row, "qty", 0);
  ds_fmsInterface.setCellData(row, "upr", 0);
  ds_fmsInterface.setCellData(row, "amt", 0);
  ds_fmsInterface.setCellData(row, "vat", 0);
  ds_fmsInterface.setCellData(row, "pcostAmt", 0);
  ds_fmsInterface.setCellData(row, "rmk", "");
  ds_fmsInterface.setCellData(row, "slipNo", "");
  ds_fmsInterface.setCellData(row, "sumAmt", 0);
  ds_fmsInterface.setCellData(row, "acctCd", "");
  ds_fmsInterface.setCellData(row, "acctDeptCd", "");
  ds_fmsInterface.setCellData(row, "osideClsCd", "F");
};

/**
 * 행삭제
 */
scwin.f_DelRow = async function () {
  const row = gr_fmsInterface.getFocusedRowIndex();
  if (row < 0) {
    await $c.win.alert($p, "삭제할 데이타가 없습니다");
    return;
  }
  var slipNo = ds_fmsInterface.getCellData(row, "slipNo");
  if (!$c.util.isEmpty($p, slipNo)) {
    await $c.win.alert($p, row + 1 + "행은 이미 전표를 생성하였으므로 삭제하실 수 없습니다.");
    return;
  }

  // ds_fmsInterface.removeRow(row);
  $c.data.deleteRow($p, ds_fmsInterface);
};

/**
 * 전체삭제
 */
scwin.f_DelRowAll = async function () {
  if (ds_fmsInterface.getRowCount() == 0) {
    await $c.win.alert($p, "삭제할 데이타가 없습니다");
    return;
  }
  for (let i = 0; i < ds_fmsInterface.getRowCount(); i++) {
    const slipNo = ds_fmsInterface.getCellData(i, "slipNo");
    if (!$c.util.isEmpty($p, slipNo)) {
      await $c.win.alert($p, i + 1 + "행은 이미 전표를 생성하였으므로 삭제하실 수 없습니다.");
      return;
    } else {
      if (ds_fmsInterface.getRowStatus(i) == "C") {
        ds_fmsInterface.removeRow(i);
      } else {
        ds_fmsInterface.deleteRow(i);
      }
    }
  }
};

/**
 * 엑셀 다운로드
 */
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const excelTitle = "정비직판매출입";
    const options = {
      fileName: `${excelTitle}.xlsx`,
      sheetName: excelTitle,
      bodyWordwrap: true,
      evenRowBackgroundColor: "#f5fff5",
      useStyle: true,
      useDataFormat: true
    };
    $c.data.downloadGridViewExcel($p, gr_fmsInterface, options);
  }
};

/**
 * 엑셀 양식 다운로드
 */
scwin.f_Excel2 = async function () {
  if (await $c.win.confirm($p, "Excel 양식을 다운로드 하시겠습니까?")) {
    const excelTitle = "정비직판매출입";
    const options = {
      fileName: `${excelTitle}.xlsx`,
      sheetName: excelTitle,
      bodyWordwrap: true,
      evenRowBackgroundColor: "#f5fff5",
      useStyle: "true",
      useFooter: "false"
    };
    gr_fmsInterface.setHeaderColor("hd_commClsCd", "#ff0022"); // 상품

    if (ds_fmsInterface.getTotalRow() == 0) {
      gr_fmsInterface.setColumnVisible("clntNo", true); // 거래처코드
      gr_fmsInterface.setColumnVisible("upr", false); // 단가
      gr_fmsInterface.setColumnVisible("amt", false); // 공급가
      gr_fmsInterface.setColumnVisible("vat", false); // vat
      gr_fmsInterface.setColumnVisible("pcostAmt", false); // 원가
      gr_fmsInterface.setColumnVisible("slipNo", false); // 전표번호
      gr_fmsInterface.setColumnVisible("sumAmt", false); // 합계
      gr_fmsInterface.setColumnVisible("sellAcctDeptCd", false); // 매출귀속부서
      gr_fmsInterface.setColumnVisible("sellAcctDeptNm", false); // 매출귀속부서명

      // 다운로드
      $c.data.downloadGridViewExcel($p, gr_fmsInterface, options);

      // 컬럼 복원
      gr_fmsInterface.setColumnVisible("clntNo", false); // 거래처코드
      gr_fmsInterface.setColumnVisible("upr", true); // 단가
      gr_fmsInterface.setColumnVisible("amt", true); // 공급가
      gr_fmsInterface.setColumnVisible("vat", true); // vat
      gr_fmsInterface.setColumnVisible("pcostAmt", true); // 원가
      gr_fmsInterface.setColumnVisible("slipNo", true); // 전표번호
      gr_fmsInterface.setColumnVisible("sumAmt", true); // 합계
      gr_fmsInterface.setColumnVisible("sellAcctDeptCd", true); // 매출귀속부서
      gr_fmsInterface.setColumnVisible("sellAcctDeptNm", true); // 매출귀속부서명
    } else {
      gr_fmsInterface.setColumnVisible("clntNo", true); // 거래처코드
      gr_fmsInterface.setColumnVisible("upr", false); // 단가
      gr_fmsInterface.setColumnVisible("amt", false); // 공급가
      gr_fmsInterface.setColumnVisible("vat", false); // vat
      gr_fmsInterface.setColumnVisible("slipNo", false); // 전표번호
      gr_fmsInterface.setColumnVisible("sumAmt", false); // 합계

      // 다운로드
      $c.data.downloadGridViewExcel($p, gr_fmsInterface, options);

      // 컬럼 복원
      gr_fmsInterface.setColumnVisible("clntNo", false); // 거래처코드
      gr_fmsInterface.setColumnVisible("upr", true); // 단가
      gr_fmsInterface.setColumnVisible("amt", true); // 공급가
      gr_fmsInterface.setColumnVisible("vat", true); // vat
      gr_fmsInterface.setColumnVisible("slipNo", true); // 전표번호
      gr_fmsInterface.setColumnVisible("sumAmt", true); // 합계
    }
    gr_fmsInterface.setHeaderColor("hd_commClsCd", "#0c172c"); // 상품
  }
};

/**
 * 거래명세서 발행 (OZ Report)
 */
scwin.f_certiPrint = async function () {
  const tnxMm = ed_tnxMm.getValue(); // 기준년월
  const curDt = tnxMm.substring(4, 6); // 기준월
  const ctrlNo = ed_clntNo2.getValue(); // 거래처코드
  const constSite = lc_constSite.getValue(); // 공사현장

  const data = {
    reportName: "/ps/eq/fmsmgnt/eq_630_01_04b.ozr",
    odiParam: {
      tnxMm: tnxMm,
      ctrlNo: ctrlNo,
      constSite: constSite,
      curDt: curDt
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      //
      zoom: 100 // 배율 설정
      // mode: "silent",
      // copies: "1",
    },
    formParam: {}
  };
  if (!(await $c.gus.cfValidate($p, [ed_tnxMm, ed_clntNo2, lc_constSite]))) return;
  if ($c.util.isEmpty($p, constSite)) {
    // 필수값 체크
    if ($c.util.isEmpty($p, constSite)) {
      await $c.win.alert($p, "공사현장은 필수 입력항목입니다.");
      lc_constSite.focus();
      return;
    }
    return;
  }
  const opts = {
    id: "ozReportPopup",
    popupName: "OZ 뷰어",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "OZ 뷰어"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

/**
 * 검색조건 거래처 - 코드 onchange
 */
scwin.udc_comCodeSearch_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    txt_clntNmCond.setValue("");
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_openCommonPopUp(1, newValue, txt_clntNmCond.getValue());
  }
};

/**
 * 검색조건 거래처 - 코드명 onchange
 */
scwin.udc_comCodeSearch_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_clntNmCond, ed_clntNoCond, 1, false);
};

/**
 * 검색조건 거래처 - button click
 */
scwin.udc_comCodeSearch_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNoCond.getValue(), txt_clntNmCond.getValue(), 'F', 'F');
};

/**
 * 검색조건 거래처 - callback
 */
scwin.udc_comCodeSearch_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNoCond, txt_clntNmCond);
};

/**
 * 팝업 호출 전 체크
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  const pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * 팝업 호출
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처 - 검색조건
      udc_comCodeSearch.cfCommonPopUp(scwin.udc_comCodeSearch_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , null // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 거래처 - grid
      const row = ds_fmsInterface.getRowPosition();
      ds_fmsInterface.setCellData(row, "clntNo", "");
      ds_fmsInterface.setCellData(row, "clntNm", "");
      udc_comCodeSearch.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , null // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 거래처 - 거래명세서
      udc_comCodeCertiPrint.cfCommonPopUp(scwin.udc_comCodeCertiPrint_callBackFunc, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
  }
  return;
};

/**
 * 그리드 row 변경
 */
scwin.gr_fmsInterface_onrowindexchange = function (rowIndex, oldRow) {
  const {
    rowStatus,
    slipNo
  } = ds_fmsInterface.getRowJSON(rowIndex);
  if ($c.util.isEmpty($p, slipNo)) {
    if (rowStatus == "R" || rowStatus == "U") {
      gr_fmsInterface.setCellReadOnly(rowIndex, "commClsCd", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "evidClsCd", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "qty", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "constSite", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "rcptClnt", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "rmk", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "pcostAmt", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "stockSetlYn", false);
    }
    if (rowStatus == "C") {
      gr_fmsInterface.setCellReadOnly(rowIndex, "postDt", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "clntNo", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "clntNm", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "selpchClsCd", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "commClsCd", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "evidClsCd", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "qty", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "constSite", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "rcptClnt", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "rmk", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "pcostAmt", false);
      gr_fmsInterface.setCellReadOnly(rowIndex, "stockSetlYn", false);
    }
  }
};

/**
 * 그리드 데이터 변경
 */
scwin.gr_fmsInterface_onviewchange = function (info) {
  const {
    oldValue,
    newValue,
    rowIndex,
    colIndex,
    colId
  } = info;
  if (colId == "clntNm") {
    // 거래처
    scwin.f_openCommonPopUp(2, "", newValue);
  }
};
scwin.gr_fmsInterface_onafteredit = function (rowIndex, columnIndex, value) {
  const colID = ds_fmsInterface.getColumnID(columnIndex);
  if (colID == "clntNm") {
    // 거래처
    if ($c.util.isEmpty($p, ds_fmsInterface.getCellData(rowIndex, colID))) {
      scwin.f_openCommonPopUp(2, "", "");
    }
  }
};

/**
 * 그리드 column move
 */
scwin.gr_fmsInterface_onbeforecolumnmove = function (info) {
  const {
    startColumnID,
    startColumnIndex,
    endColumnID,
    endColumnIndex
  } = info;
  const noMoveArr = ["postDt", "clntNm", "selpchClsCd", "commClsCd"];
  if (noMoveArr.includes(startColumnID)) {
    return false;
  }
  if (endColumnIndex < 5) {
    return false;
  }
};

/**
 * 그리드 팝업 클릭
 */
scwin.gr_fmsInterface_ontextimageclick = function (row, col) {
  var colId = gr_fmsInterface.getColumnID(col);
  if (colId == "clntNm") {
    var val = ds_fmsInterface.getCellData(row, "clntNo");
    scwin.f_openCommonPopUp(2, val, "");
  }
};

/**
 * 그리드 팝업 클릭 - 거래처 callback
 */
scwin.udc_comCodeGrid_callBackFunc = function (ret) {
  const row = ds_fmsInterface.getRowPosition();
  if (ret && ret[0] != "N/A") {
    ds_fmsInterface.setCellData(row, "clntNo", ret[0]);
    ds_fmsInterface.setCellData(row, "clntNm", ret[1]);
  } else {
    ds_fmsInterface.setCellData(row, "clntNo", "");
    ds_fmsInterface.setCellData(row, "clntNm", "");
  }
};

/**
 * 공사현장 조회 (Combo Data Load)
 */
scwin.f_getConstSite = function () {
  const tnxMm = ed_tnxMm.getValue();
  const clntNo = ed_clntNo2.getValue();
  const actionUrl = `/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retrieveConstSite&param1=${tnxMm}&param2=${clntNo}`;
  sbm_getConstSite.action = actionUrl;
  $c.sbm.execute($p, sbm_getConstSite);
};

/**
 * 공사현장 조회 후처리
 */
scwin.sbm_getConstSite_submitdone = function (e) {
  co_ds_combo.setJSON(e.responseJSON.GAUCE);
  lc_constSite.setNodeSet("data:co_ds_combo", "name", "code");
  lc_constSite.setSelectedIndex(0);
};

/**
 * 하단 기준년월 변경 시
 */
scwin.ed_tnxMm_onviewchange = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if (oldValue != newValue) {
    scwin.f_getConstSite();
  }
};

/**
 * 하단 거래처 - 코드 onchange
 */
scwin.udc_comCodeCertiPrint_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    txt_clntNm2.setValue("");
    co_ds_combo.removeAll();
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_openCommonPopUp(4, newValue, "");
  }
};

/**
 * 하단 거래처 - 코드명 onchange
 */
scwin.udc_comCodeCertiPrint_onviewchangeNameEvent = function (info) {
  // scwin.f_chkOpenCommonPopUp(txt_clntNm2, ed_clntNo2, 4, false);
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_clntNo2.setValue("");
    co_ds_combo.removeAll();
  }
  if (oldValue != newValue && !$c.util.isEmpty($p, newValue)) {
    scwin.f_openCommonPopUp(4, "", newValue);
  }
};

/**
 * 하단 거래처 - button click
 */
scwin.udc_comCodeCertiPrint_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_clntNo2.getValue(), txt_clntNm2.getValue(), 'F', 'F');
};

/**
 * 하단 거래처 - callback
 */
scwin.udc_comCodeCertiPrint_callBackFunc = function (ret) {
  const clntNo2 = ed_clntNo2.getValue();
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo2, txt_clntNm2);

  // 변경이 있는 경우 공사현장 재조회
  if (clntNo2 != ret[0]) {
    scwin.f_getConstSite();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'ds_search',style:'',id:'udc_fromTo',refEdDt:'endDt',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_endDt',edFromId:'ed_stDt',titleFrom:'시작일자',titleTo:'종료일자',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',btnId:'btn_clntNo',codeId:'ed_clntNoCond',nameId:'txt_clntNmCond',id:'udc_comCodeSearch',maxlengthCode:'6',popupID:'retrieveClntEmpNoListPopup',refDataCollection:'ds_search',selectID:'retrieveClntEmpNoList',style:'',class:'upper','ev:onclickEvent':'scwin.udc_comCodeSearch_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeSearch_onviewchangeNameEvent',code:'clntNo',skipOnBlurCodeValueEmpty:'N',name:'clntNm','ev:onviewchangeCodeEvent':'scwin.udc_comCodeSearch_onviewchangeCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_commClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.commClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCdCond',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.selpchClsCd',chooseOption:'true',chooseOptionLabel:'전체'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_fmsInterface',style:'',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_fmsInterface',gridDownUserAuth:'X'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_tempDownload',style:'',type:'button','ev:onclick':'scwin.f_Excel2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'양식DOWN'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_fmsInterface',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fmsInterface',focusMode:'row',id:'gr_fmsInterface',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',gridName:'정비직판매출입','ev:ontextimageclick':'scwin.gr_fmsInterface_ontextimageclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_fmsInterface_onviewchange',fixedColumn:'5','ev:onafteredit':'scwin.gr_fmsInterface_onafteredit','ev:onrowindexchange':'scwin.gr_fmsInterface_onrowindexchange',columnMove:'true','ev:onbeforecolumnmove':'scwin.gr_fmsInterface_onbeforecolumnmove'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',style:'',value:'매출입</br>일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'거래처',width:'100',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'거래처',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'text',style:'',value:'매출입</br>구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hd_commClsCd',inputType:'text',style:'',value:'상품',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'constSite',inputType:'text',style:'',value:'공사</br>현장',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcptClnt',inputType:'text',style:'',value:'인도처',width:'110',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'text',style:'',value:'증빙</br>구분',width:'90',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'수량',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'upr',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'공급가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'vat',value:'VAT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'pcostAmt',value:'원가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rmk',value:'비고',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'sumAmt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAcctDeptCd',value:'매출귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sellAcctDeptNm',value:'매출귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockSetlYn',value:'재고</br>정리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'계정<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptNm',value:'귀속</br>부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnMm',value:'매출입</br>년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'osideClsCd',value:'외부구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndCd',value:'전표</br>종류',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClsCd',inputType:'select',style:'',value:'',width:'70',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'constSite',inputType:'select',style:'',value:'',width:'150',textAlign:'left',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcptClnt',inputType:'select',style:'',value:'',width:'110',textAlign:'left',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'select',style:'',value:'',width:'90',allOption:'',ref:'',textAlign:'left',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'vat',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'pcostAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'sumAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sellAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'stockSetlYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',emptyValue:'F',valueType:'other',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',hidden:'true',hiddenCol:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타이어매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101212'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부품매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101214'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101216'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)타이어'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204742'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)부품'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204743'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204744'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AP매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4101220'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원)AP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4204745'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상품-AP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1120260'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnMm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'osideClsCd',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'slipKndCd',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:'',hidden:'true',hiddenCol:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비직판매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H24'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비직판매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H25'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'qty\')',id:'column40',inputType:'expression',style:'',textAlign:'right',value:'0',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'amt\')',id:'column69',inputType:'expression',style:'',textAlign:'right',value:'0',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'vat\')',id:'column66',inputType:'expression',style:'',textAlign:'right',value:'',width:'110'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'pcostAmt\')',id:'column63',inputType:'expression',style:'',textAlign:'right',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'sumAmt\')',id:'column51',inputType:'expression',style:'',textAlign:'right',value:'0',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column96',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddYn:'Y',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',gridID:'gr_fmsInterface',id:'udc_grdButton',rowDelUserAuth:'D',rowAddUserAuth:'C'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delAll',style:'',type:'button','ev:onclick':'scwin.f_DelRowAll',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'기준년월 ',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_tnxMm',class:'',calendarValueType:'yearMonth',displayFormat:'yyyy/MM','ev:onviewchange':'scwin.ed_tnxMm_onviewchange',title:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo2',nameId:'txt_clntNm2',popupID:'',selectID:'retrieveClntEmpNoList',style:'',validTitle:'거래처',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',id:'udc_comCodeCertiPrint',btnId:'btn_clntNoCertiPrint','ev:onclickEvent':'scwin.udc_comCodeCertiPrint_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeCertiPrint_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N','ev:onviewchangeCodeEvent':'scwin.udc_comCodeCertiPrint_onviewchangeCodeEvent',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공사현장 ',style:''}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_constSite',style:'width: 175px;',submenuSize:'fixed',title:'공사현장'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_certiPrint',style:'',type:'button','ev:onclick':'scwin.f_certiPrint',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서 발행'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn','ev:onclick':'scwin.f_Save',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})