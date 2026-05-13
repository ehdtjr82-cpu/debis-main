/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_05_02b.xml 27663 65f09b48317a72a94400140aebad1e02f087e3781b23d134c95f6a2012792182 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dummy'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_MonthEachOilInSlip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilCoClntNo',name:'주유소거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilCoNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inQty',name:'출고수량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inAmt',name:'출고금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilCoClntNoRow',name:'정유사별 순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilCoClntNoCnt',name:'정유사별 건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'재고귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payAcctDeptCd',name:'지급귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payClsCd',name:'지급구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MonthEachOilIn',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_MonthEachOilIn_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipYn',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoNm',name:'정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량(L)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'재고부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'외상매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNoRow',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNoCnt',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MonthEachOilInSlip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNoRow',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNoCnt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'name14',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveMonthEachOilCompanyInContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_dummy","key":"IN_DS1"},{"id":"ds_MonthEachOilIn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_MonthEachOilIn","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMonthEachOilIn',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_MonthEachOilIn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMonthEachOilIn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_CreateMonthEachOilIn',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_MonthEachOilInSlip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_CreateMonthEachOilIn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_CancelMonthEachOilIn',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_MonthEachOilInSlip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_CancelMonthEachOilIn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "acb_homeClsCd,gr_MonthEachOilIn:homeClsCd",
    opt: {
      "range": "2,TR"
    }
  }, {
    grpCd: "TL113",
    compID: "gr_MonthEachOilIn:payClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  ica_standardYearMonth.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_standardYearMonth.focus();
  btn_create.setDisabled(true);
  btn_cancel.setDisabled(true);
  acb_homeClsCd.setValue("LO");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_standardYearMonth.getValue().trim().length !== 6) {
    await $c.win.alert($p, "기준년월은 필수입력 입니다.");
    ica_standardYearMonth.focus();
    return;
  }
  let homeClsCd = acb_homeClsCd.getValue();
  if (homeClsCd.length == 0) {
    await $c.win.alert($p, "소속구분은 필수입력 입니다.");
    acb_homeClsCd.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (cls) {
  let clsstr = "";
  let pathstr = "";
  if (ds_MonthEachOilIn.getRowCount() === 0) {
    await $c.win.alert($p, "조회된 자료가 없습니다. 조회 후 선택하세요.");
    return;
  }
  if (cls === 3) {
    if (ds_MonthEachOilIn.getModifiedIndex().length === 0) {
      await $c.win.alert($p, "변경된 자료가 없습니다.");
      return;
    }
    let ret = await $c.gus.cfValidate($p, [gr_MonthEachOilIn]);
    if (!ret) {
      return false;
    }
    pathstr = "/ps.tr.expropmgnt.oilingmgnt.UpdateOilInValueAddedTaxCMD.do";
    if (!(await $c.win.confirm($p, "저장하시겠습니까?"))) {
      return;
    }
    sbm_saveMonthEachOilIn.action = pathstr;
    $c.sbm.execute($p, sbm_saveMonthEachOilIn);
    return;
  }

  // 체크박스 추가 작업에 따른 전표 생성 여부 판단하기 2006.11 박혜연 추가   
  let slipNo = "";
  let rtn = "";
  let stdYm = ica_standardYearMonth.getValue().trim();

  // 전표생성시 유류재고 마감여부 확인 추가. 2009.04.10
  rtn = await udc_closeYn.cfJobCloseYN("CUR", stdYm, "00", "TR50", "00", "", "N"); // 원본 로직 유지

  if (cls === 1) {
    if (rtn == "1" || rtn == "DNF") {
      await $c.win.alert($p, stdYm + "월 유류마감이 확정돼지 않았습니다. 구매팀 담당자에게 문의하세요.");
      return;
    }
  }

  // 정유사 입고전표 생성여부 체크 
  rtn = await udc_closeYn.cfJobCloseYN("CUR", stdYm, "00", "TR39", "00", "", "N");
  if (cls === 1) {
    clsstr = "전표생성";
    if (rtn == "1" || rtn == "DNF") {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.CreateOilInSlipCMD.do";
    } else if (rtn == "0" || rtn == "2") {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.RegistOilInSlipCMD.do";
    }
  } else if (cls === 2) {
    clsstr = "전표취소";
    let slipNo = "";
    let slipNoCn = 0;
    for (let j = 0; j < ds_MonthEachOilIn.getRowCount(); j++) {
      if (ds_MonthEachOilIn.getCellData(j, "slipYn") === 0) {
        if (ds_MonthEachOilIn.getCellData(j, "slipNo") > 0) {
          slipNoCn = slipNoCn + 1;
        }
      }
    }
    if (slipNoCn === 0) {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.CancelOilInSlipCreationCMD.do";
    } else {
      pathstr = "/ps.tr.expropmgnt.oilingmgnt.UpdateOilInSlipCreationCMD.do";
    }
  }
  if (await scwin.f_ValidCheck(cls)) {
    if (!(await $c.win.confirm($p, "정유사에 대해" + clsstr + " 하시겠습니까?"))) {
      return;
    }
  } else {
    return;
  }
  if (cls === 1) {
    sbm_CreateMonthEachOilIn.action = pathstr;
    $c.sbm.execute($p, sbm_CreateMonthEachOilIn);
  } else if (cls === 2) {
    sbm_CancelMonthEachOilIn.action = pathstr;
    $c.sbm.execute($p, sbm_CancelMonthEachOilIn);
  }
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 그리드 선택사항 체크 (cls 1:생성,2:취소 )
//------------------------------------------------------------------------- 
scwin.f_ValidCheck = async function (cls) {
  let slipYn = 0;
  let slipTot = 0;
  let slipNo = "";
  ds_MonthEachOilInSlip.removeAll();

  // 선택행 값 체크
  for (let i = 0; i < ds_MonthEachOilIn.getRowCount(); i++) {
    slipYn = ds_MonthEachOilIn.getCellData(i, "slipYn");
    if (slipYn === "1") {
      slipNo = ds_MonthEachOilIn.getCellData(i, "slipNo");
      if (slipNo.length > 0 && cls === 1) {
        // 전표번호와 버튼명 체크1
        await $c.win.alert($p, i + 1 + "행은 이미 전표생성하였습니다. 전표취소후 재생성하실 수 있습니다.");
        return false;
      }
      if (slipNo.length === 0 && cls === 2) {
        // 전표번호와 버튼명 체크2
        await $c.win.alert($p, i + 1 + "행은 전표를 생성하지 않았습니다. 전표취소하실 수 없습니다.");
        return false;
      }
      slipTot += 1;
      let newRow = ds_MonthEachOilInSlip.insertRow();
      ds_MonthEachOilInSlip.setCellData(newRow, "stdYm", ds_MonthEachOilIn.getCellData(i, "stdYm"));
      ds_MonthEachOilInSlip.setCellData(newRow, "oilCoClntNo", ds_MonthEachOilIn.getCellData(i, "oilCoClntNo"));
      ds_MonthEachOilInSlip.setCellData(newRow, "oilCoNm", ds_MonthEachOilIn.getCellData(i, "oilCoNm"));
      ds_MonthEachOilInSlip.setCellData(newRow, "homeClsCd", ds_MonthEachOilIn.getCellData(i, "homeClsCd"));
      ds_MonthEachOilInSlip.setCellData(newRow, "inQty", ds_MonthEachOilIn.getCellData(i, "inQty"));
      ds_MonthEachOilInSlip.setCellData(newRow, "inAmt", ds_MonthEachOilIn.getCellData(i, "inAmt"));
      ds_MonthEachOilInSlip.setCellData(newRow, "vatAmt", ds_MonthEachOilIn.getCellData(i, "vatAmt"));
      ds_MonthEachOilInSlip.setCellData(newRow, "slipNo", ds_MonthEachOilIn.getCellData(i, "slipNo"));
      ds_MonthEachOilInSlip.setCellData(newRow, "crn", ds_MonthEachOilIn.getCellData(i, "crn"));
      ds_MonthEachOilInSlip.setCellData(newRow, "oilCoClntNoRow", ds_MonthEachOilIn.getCellData(i, "oilCoClntNoRow"));
      ds_MonthEachOilInSlip.setCellData(newRow, "oilCoClntNoCnt", ds_MonthEachOilIn.getCellData(i, "oilCoClntNoCnt"));
      ds_MonthEachOilInSlip.setCellData(newRow, "acctDeptCd", ds_MonthEachOilIn.getCellData(i, "acctDeptCd"));
      ds_MonthEachOilInSlip.setCellData(newRow, "payAcctDeptCd", ds_MonthEachOilIn.getCellData(i, "payAcctDeptCd"));
      ds_MonthEachOilInSlip.setCellData(newRow, "payClsCd", ds_MonthEachOilIn.getCellData(i, "payClsCd"));
    }
  }
  if (slipTot === 0) {
    // 선택한 행수 체크
    await $c.win.alert($p, "선택하신 자료가 없습니다. 먼저 정유사를 선택하십시요");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 부가세 수정가능 여부 처리
//-------------------------------------------------------------------------
scwin.f_control = function (row, colid) {
  let slipYn = "";
  slipYn = ds_MonthEachOilIn.getCellData(row, "slipNo");
  if (slipYn == null || slipYn == "") {
    gr_MonthEachOilIn.setColumnReadOnly("vatAmt", false);
  } else {
    gr_MonthEachOilIn.setColumnReadOnly("vatAmt", true);
  }
};

//-------------------------------------------------------------------------
// 회계전표발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let param = "";
  let slipNo = ds_MonthEachOilIn.getCellData(ds_MonthEachOilIn.getRowPosition(), "slipNo");
  if (slipNo != "") {
    param = param + "," + slipNo;
  } else {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["데이타"]));
    return;
  }
  let data = {
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      slipNo: param.substring(1)
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 100 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ica_standardYearMonth.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let count = ds_MonthEachOilIn.getRowCount();
  if (!(count > 0)) return;
  let gridColCount = gr_MonthEachOilIn.getTotalCol();
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정유사 입고전표",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 2,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "기준년월 [" + $c.gus.cfGetFormatStr($p, ica_standardYearMonth.getValue(), "####/##") + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "정유사 입고전표.xlsx",
    sheetName: "정유사 입고전표",
    startRowIndex: 3,
    startColumnIndex: 0,
    columnMove: true,
    columnMoveWithFooter: true,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_MonthEachOilIn, options, infoArr);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_MonthEachOilIn.getRowCount();
  totalRows.setValue(rowCnt);
  gr_MonthEachOilIn.setFocusedCell(0, 2);
  if (rowCnt === 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    btn_create.setDisabled(true);
    btn_cancel.setDisabled(true);
  } else {
    btn_create.setDisabled(false);
    btn_cancel.setDisabled(false);
  }
};
scwin.sbm_CreateMonthEachOilIn_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_012, ["정유사입고전표"])); // 성공적으로 생성하였습니다.

    ds_MonthEachOilIn.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_CancelMonthEachOilIn_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, "정유사 입고전표를 취소하였습니다.");
    ds_MonthEachOilIn.reform();
    scwin.f_Retrieve();
  }
};
scwin.gr_MonthEachOilIn_oncellclick = async function (rowIndex, columnIndex, columnId) {
  scwin.f_control(rowIndex, columnId);
  if (columnId === "slipNo" && ds_MonthEachOilIn.getCellData(rowIndex, "slipNo").length > 0) {
    await $c.gus.cfShowSlipInfo($p, ds_MonthEachOilIn.getCellData(rowIndex, "slipNo"));
  }
};
scwin.ds_MonthEachOilIn_onbeforerowpositionchange = async function (info) {
  let rowIndex = info.oldRowIndex;
  if (ds_MonthEachOilIn.getCellData(rowIndex, "vatAmt" === 0)) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, ['부가세', 1]));
    ds_MonthEachOilIn.setCellData(rowIndex, "vatAmt", ds_MonthEachOilIn.getOriginalCellData(rowIndex, "vatAmt"));
    gr_MonthEachOilIn.focus();
    return false;
  } else {
    return true;
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Save(1);
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Save(2);
};
scwin.sbm_saveMonthEachOilIn_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

    ds_MonthEachOilIn.reform();
    scwin.f_Retrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_standardYearMonth',style:'',pickerType:'dynamic',mandatory:'true',displayFormat:'yyyy/MM',editType:'select',ref:'data:dma_dummy.stdYm',title:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_homeClsCd',search:'start',style:'width:150px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_dummy.homeClsCd',title:'소속구분'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',btnUser:'Y',gridUpYn:'N',gridID:'gr_MonthEachOilIn',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_MonthEachOilIn',id:'gr_MonthEachOilIn',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',dataName:'정유사 입고내역',userAttr2:'ignoreStatus=no',editModeEvent:'onclick',columnMove:'true',checkAllType:'exclude',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_MonthEachOilIn_oncellclick',rowStatusWidth:'20',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',width:'50',fixColumnWidth:'true',value:'check',disabled:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column58',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'정유사',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'소속구분',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'거래구분',width:'150',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'입고수량(L)',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'입고금액(원)',width:'150'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column55',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column52',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',value:'재고부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'외상매입부서코드',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipYn',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'oilCoClntNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilCoNm',inputType:'text',width:'100',readOnly:'true',readOnlyClass:'true',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'select',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payClsCd',inputType:'select',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',width:'120',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'link',id:'slipNo',displayMode:'label',readOnly:'true',style:'',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAcctDeptCd',inputType:'text',width:'100',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column44',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum("inQty")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column43',value:'0',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum("inAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',value:'0',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum("vatAmt")'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',userAuth:'C',objType:'bSave','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_closeYn'}}]}]}]}]}]})