/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_02_09b.xml 65475 7bed1078ded4392987acde4a2ddf904d824841959df132837aafc7e7766548bf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClsCd',name:'거래처구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'매출거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'keepClntNo',name:'보관거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bpClntNo',name:'BP거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'preCoAfClsCd',name:'유류판매구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilkndCd',name:'유종',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCoAfClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNo',name:'매출거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNm',name:'매출거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'대표거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptCd',name:'원가귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransYn',name:'운송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNo',name:'운송거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNm',name:'운송거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSellClsCd',name:'단가기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'saleUpr',name:'판매_단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'saleVatAmt',name:'판매_부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'saleAmt',name:'판매_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellStdUpr',name:'세부내역_공장도가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellDcUpr',name:'세부내역_할인',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transDcUpr',name:'세부내역_운송',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qtyDcRt',name:'세부내역_할증률',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realSellUpr',name:'세부내역_판매단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realSellAmt',name:'세부내역_판매금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'keepClntNo',name:'보관거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'keepClntNm',name:'보관거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'keepCmisUpr',name:'보관수수료_단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'keepCmisAmt',name:'보관수수료_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bpClntNo',name:'BP거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bpClntNm',name:'BP거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bpCmisUpr',name:'BP수수료_단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bpCmisAmt',name:'BP수수료_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cardCmisAmt',name:'카드수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stdQty',name:'기준수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'현대카드구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyDcStdQty',name:'수량할증기준수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'accumQty',name:'누적수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subTotalColumn',name:'임시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFMSOilSellingContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ps/pscommon.js',type:'text/javascript',scopeVariable:'pscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : FMS유류매출세부내역 (eq_610_02_09b)
// 작성자 : 송정희
// 최초작성일자 : 2026-12-18
//-------------------------------------------------------------------------

scwin.fromDate_YyMmDd = ""; // 작업날짜
scwin.fromDate_YyMmDd = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.sort_options = {};
scwin.sort_options.sortIndex = "";
scwin.sort_options.sortOrder = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "TL104",
    compID: "lc_preCoAfClsCd,gr_master:preCoAfClsCd"
  },
  // 판매구분
  {
    grpCd: "TL105",
    compID: "lc_oilkndCd,gr_master:oilkndCd"
  },
  // 유종  
  {
    grpCd: "TL113",
    compID: "gr_master:payClsCd"
  },
  // 거래구분
  {
    grpCd: "TL110",
    compID: "gr_master:oilSellClsCd"
  } // 단가기준
  ];
  $c.data.setCommonCode($p, codeOptions);
  //ed_stDt.setValue(scwin.fromDate_YyMmDd);
};
scwin.onUdcCompleted = function () {
  ed_stDt.setValue(scwin.fromDate_YyMmDd.substring(0, 6) + "01");
  ed_endDt.setValue(scwin.fromDate_YyMmDd);
  ed_stDt.focus();
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var vChkVal = await scwin.f_CheckAdptDt(); //날짜 체크한 결과 값을 리턴
  if (!vChkVal) {
    //true or false 결과을 체크하여 잘못들어갔다면, false값 리턴
    return false;
  }

  //gr_oilOutList.ReDraw = "false";
  //ds_search.UseChangeInfo = "false";
  console.log("f_Retrieve - vChkVal : " + vChkVal);
  dma_search.set("oilOilStatNo", ed_oilOilStatNo.getValue()); // 주유소코드
  dma_search.set("stDt", ed_stDt.getValue()); // 출고일자from
  dma_search.set("endDt", ed_endDt.getValue()); // 출고일자to
  dma_search.set("oilStatClsCd", lc_oilStatClsCd.getValue()); // 거래처구분
  dma_search.set("acctDeptCd", ed_acctDeptCd.getValue()); // 매출부서 
  dma_search.set("clntNo", ed_clntNo.getValue()); // 매출거래처
  dma_search.set("keepClntNo", ed_keepClntNo.getValue()); // 보관거래처
  dma_search.set("bpClntNo", ed_bpClntNo.getValue()); // BP거래처
  dma_search.set("repClntNo", ed_repClntNo.getValue()); // 대표거래처
  dma_search.set("preCoAfClsCd", lc_preCoAfClsCd.getValue()); // 판매구분
  dma_search.set("oilkndCd", lc_oilkndCd.getValue()); // 유종

  $c.sbm.execute($p, sbm_master);
};

//-------------------------------------------------------------------------
// 날짜 체크한 결과 값을 리턴
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = async function () {
  var vAdptStDt = ed_stDt.getValue();
  var vAdptEndDt = ed_endDt.getValue();
  var vReturn = true;
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    await $c.win.alert($p, "출고시작일자를 정확하게 입력해주십시오.");
    ed_stDt.focus();
    vReturn = false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    await $c.win.alert($p, "출고종료일자를 정확하게 입력해주십시오.");
    ed_endDt.focus();
    vReturn = false;
  }
  if (vAdptStDt > vAdptEndDt) {
    await $c.win.alert($p, "출고시작일자가 종료일자보다 늦은 날짜입니다.");
    ed_stDt.focus();
    vReturn = false;
  }
  if (vAdptStDt < "20090101") {
    await $c.win.alert($p, "2009년 1월 1일 출고내역부터 조회할 수 있습니다.");
    ed_stDt.focus();
    vReturn = false;
  }
  return vReturn;
};
scwin.ds_master_ondataload = function () {
  var rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    totalRows.setValue(rowCnt);
    const sumClsCd = lc_sumClsCd.getValue();
    const subColumnInfo = {
      "A": "oilOilStatNm",
      "B": "selpchClntNm",
      "C": "pcostAcctDeptNm",
      "D": "bpClntNm",
      "E": "keepClntNm",
      "F": "osideClsCd"
    };
    const subSortInfo = {
      "A": "oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty",
      "B": "selpchClntNm oilOilStatNm ioDt preCoAfClsCd qty",
      "C": "pcostAcctDeptNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty",
      "D": "bpClntNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty",
      "E": "keepClntNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty",
      "F": "osideClsCd oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty"
    };
    ds_master.getAllJSON().forEach((info, rowIndex) => {
      ds_master.setCellData(rowIndex, "subTotalColumn", info[subColumnInfo[sumClsCd]]);
    });
    var options = {};
    options.sortIndex = subSortInfo[sumClsCd];
    options.sortOrder = "1 1 1 1 1 1";
    ds_master.multisort(options);
  }
};

//-------------------------------------------------------------------------
//  소계 설정 FUNCTION
//-------------------------------------------------------------------------	
scwin.f_MakeSubSum = function () {
  var clsCd = lc_sumClsCd.getValue();
  var sortCls = "";
  var sortOrd = "";
  var sumCls = "";
  var slipKndCd = "";

  // value="A^주유소별,B^매출거래처별,C^귀속부서별,D^BP거래처별,E^보관거래처별,F^카드수수료">
  // gr_oilOutList.Redraw = "false";

  if (clsCd == "A") {
    // 주유소기준
    sortCls = "oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty";
    sortOrd = "1 1 1 1 1";
    sumCls = "oilOilStatNm";
  } else if (clsCd == "B") {
    // 매출거래처 기준
    sortCls = "selpchClntNm oilOilStatNm ioDt preCoAfClsCd qty";
    sortOrd = "1 1 1 1 1";
    sumCls = "selpchClntNm";
  } else if (clsCd == "C") {
    // 귀속부서 기준
    sortCls = "pcostAcctDeptNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty";
    sortOrd = "1 1 1 1 1 1";
    sumCls = "pcostAcctDeptNm";
  } else if (clsCd == "D") {
    // BP거래처 기준
    sortCls = "bpClntNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty";
    sortOrd = "1 1 1 1 1 1";
    sumCls = "bpClntNm";
  } else if (clsCd == "E") {
    // 보관거래처 기준
    sortCls = "keepClntNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty";
    sortOrd = "1 1 1 1 1 1";
    sumCls = "keepClntNm";
  } else if (clsCd == "F") {
    // 카드수수료 기준
    sortCls = "osideClsCd oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty";
    sortOrd = "1 1 1 1 1 1";
    sumCls = "osideClsCd";
  }
  scwin.sort_options.sortIndex = sortCls;
  scwin.sort_options.sortOrder = sortOrd;

  //	ds_oilOutList.SubsumExpr = sumCls;

  //	ds_oilOutList.ResetSubsum();		
  //	gr_oilOutList.Redraw = "true";	
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_runExcel = function (varGrNm) {
  console.log("f_runExcel");
  var totCnt = ds_master.getRowCount();
  var sheetTitle = 'FMS유류매출세부내역';
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  cfrm = $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    sheetTitle = sheetTitle + scwin.f_Excel(p_title);
    $c.data.downloadGridViewExcel($p, varGrNm, sheetTitle, sheetTitle + ".xlsx", 2 + 8 + 16);
  }
};
//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_master.getTotalCol(); i++) {
    if (gr_master.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  const title = "FMS유류매출세부내역";
  const fileName = title + ".xlsx";
  const {
    titleList,
    excelStyle,
    sheetName
  } = scwin.f_Excel_searchTitle();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: startRowIndex,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: title,
    fontName: "돋움체",
    textAlign: "center",
    // 정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "#ffffff" // 배경색
  }];
  startRowIndex = 2;
  titleList.forEach((titleText, idx) => {
    infoArr.push({
      rowIndex: startRowIndex,
      colIndex: 0,
      colSpan: gridColCount,
      rowSpan: 1,
      drawBorder: false,
      text: titleText,
      ...excelStyle
    });
    startRowIndex++;
  });
  const options = {
    fileName,
    sheetName: title,
    startRowIndex,
    startColumnIndex: 0,
    type: 1
  };
  console.log(options);
  console.table(infoArr);
  await $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 출력 sETitle
//-------------------------------------------------------------------------
scwin.f_Excel_searchTitle = function () {
  var count = ds_master.getRowCount();
  if (!(count > 0)) return;
  let titleList = [];
  let stDt = $c.gus.cfGetFormatStr($p, ed_stDt.getValue(), "####/##/##");
  let endDt = $c.gus.cfGetFormatStr($p, ed_endDt.getValue(), "####/##/##");
  titleList.push(`출고일자 [${stDt}~${endDt}]`);
  const sheetName = `출고기간${stDt.replaceAll("/", "_")}_${endDt.replaceAll("/", "_")}`;
  const excelStyle = {
    fontName: "굴림체",
    fontSize: 10,
    color: "black",
    backgroundColor: "#ffffff",
    textAlign: "left"
  };
  if (ed_oilOilStatNo.getValue() != "") {
    titleList.push(`주유소 [${ed_oilOilStatNm.getValue()} [${ed_oilOilStatNo.getValue()}]]`);
  }
  if (lc_oilStatClsCd.getValue() != "") {
    titleList.push(`거래처구분 [${lc_oilStatClsCd.getItemArray().find(f => f.value == lc_oilStatClsCd.getValue())["orgLabel"]}]`);
  }
  if (ed_acctDeptCd.getValue() != "") {
    titleList.push(`매출부서 [${ed_acctDeptNm.getValue()} [${ed_acctDeptCd.getValue()}]]`);
  }
  if (ed_clntNo.getValue() != "") {
    titleList.push(`매출거래처 [${ed_clntNm.getValue()} [${ed_clntNo.getValue()}]]`);
  }
  if (ed_keepClntNo.getValue() != "") {
    titleList.push(`보관거래처 [${ed_keepClntNm.getValue()} [${ed_keepClntNo.getValue()}]]`);
  }
  if (ed_bpClntNo.getValue() != "") {
    titleList.push(`BP거래처 [${ed_bpClntNm.getValue()} [${ed_bpClntNo.getValue()}]]`);
  }
  if (ed_repClntNo.getValue() != "") {
    titleList.push(`대표거래처 [${ed_repClntNm.getValue()} [${ed_repClntNo.getValue()}]]`);
  }
  if (lc_preCoAfClsCd.getValue() != "") {
    titleList.push(`유류판매구분 [${lc_preCoAfClsCd.getItemArray().find(f => f.value == lc_preCoAfClsCd.getValue())["orgLabel"]}]`);
  }
  return {
    titleList,
    excelStyle,
    sheetName
  };
  //   $c.gus.cfGridToExcel(gr_master, "FMS유류매출세부내역","FMS유류매출세부내역", 4+8+16);	    
};
scwin.f_setqrynm = function (tname, str) {
  //    var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  //    gr_master.SetExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption );
  let sExcelTitle = "";
  return sExcelTitle = " § " + tname + " [" + str + "] ";
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array();
  var pWhere; // 조회조건
  switch (disGubun) {
    case 1:
      // 주유소
      await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'NM', '전체', '전체');
      /*
          udc_oilOilStatNo.cfCommonPopUp(scwin.udc_oilOilStatNo_callBackFunc
                      , ed_oilOilStatNo.getValue(),ed_oilOilStatNm.getValue()
                      , "T"                             // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
                      , null                            // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
                      , null                            // Title순서
                      , null                            // 보여주는 각 컬럼들의 폭
                      , null                            // 컬럼중에서 숨기는 컬럼 지정
                      , null                            // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
                      , null                            // POP-UP뛰을때 원도우의 사용자 정의 폭
                      , null                            // POP-UP뛰을때 윈도우의 사용자 정의 높이
                      , null                            // 윈도우 위치 Y좌표
                      , null                            // 윈도우 위치 X좌표
                      , null                            // 중복체크여부	("F")
                      , "F"                             // 전체검색허용여부	("F")
                      , null                            // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
                      );  
      */
      break;
    case 5:
      // 매출거래처
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_clntNo.getValue(), ed_clntNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 6:
      // 귀속부서
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 7:
      // BP거래처
      udc_bpClntNo.cfCommonPopUp(scwin.udc_bpClntNo_callBackFunc, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 8:
      // 보관거래처
      udc_keepClntNo.cfCommonPopUp(scwin.udc_keepClntNo_callBackFunc, ed_keepClntNo.getValue(), ed_keepClntNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 9:
      // 대표거래처
      udc_repClntNo.cfCommonPopUp(scwin.udc_repClntNo_callBackFunc, ed_repClntNo.getValue(), ed_repClntNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};

//------------------------------------------------------------------------- 
// 주유소
//------------------------------------------------------------------------- 
scwin.udc_oilOilStatNo_callBackFunc = function (ret) {
  console.log("udc_oilOilStatNo_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_oilOilStatNo.setValue(ret[0]);
    ed_oilOilStatNm.setValue(ret[1]);
  } else {
    ed_oilOilStatNo.setValue("");
    ed_oilOilStatNm.setValue("");
  }
  scwin.oilOilStatNo = ed_oilOilStatNo.getValue();
  scwin.oilOilStatNm = ed_oilOilStatNm.getValue();
};
//------------------------------------------------------------------------- 
// 매출거래처
//------------------------------------------------------------------------- 
scwin.udc_clntNo_callBackFunc = function (ret) {
  console.log("udc_clntNo_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_clntNo.setValue(ret[0]);
    ed_clntNm.setValue(ret[1]);
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
  scwin.clntNo = ed_clntNo.getValue();
  scwin.clntNm = ed_clntNm.getValue();
};
//------------------------------------------------------------------------- 
// 귀속부서
//------------------------------------------------------------------------- 
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  console.log("udc_acctDeptCd_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_acctDeptCd.setValue(ret[0]);
    ed_acctDeptNm.setValue(ret[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
  scwin.acctDeptCd = ed_acctDeptCd.getValue();
  scwin.acctDeptNm = ed_acctDeptNm.getValue();
};
//------------------------------------------------------------------------- 
// BP거래처
//------------------------------------------------------------------------- 
scwin.udc_bpClntNo_callBackFunc = function (ret) {
  console.log("udc_bpClntNo_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bpClntNo.setValue(ret[0]);
    ed_bpClntNm.setValue(ret[1]);
  } else {
    ed_bpClntNo.setValue("");
    ed_bpClntNm.setValue("");
  }
  scwin.bpClntNo = ed_bpClntNo.getValue();
  scwin.bpClntNm = ed_bpClntNm.getValue();
};
//------------------------------------------------------------------------- 
// 보관거래처
//------------------------------------------------------------------------- 
scwin.udc_keepClntNo_callBackFunc = function (ret) {
  console.log("udc_keepClntNo_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_keepClntNo.setValue(ret[0]);
    ed_keepClntNm.setValue(ret[1]);
  } else {
    ed_keepClntNo.setValue("");
    ed_keepClntNm.setValue("");
  }
  scwin.keepClntNo = ed_keepClntNo.getValue();
  scwin.keepClntNm = ed_keepClntNm.getValue();
};
//------------------------------------------------------------------------- 
// 대표거래처
//------------------------------------------------------------------------- 
scwin.udc_repClntNo_callBackFunc = function (ret) {
  console.log("udc_repClntNo_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_repClntNo.setValue(ret[0]);
    ed_repClntNm.setValue(ret[1]);
  } else {
    ed_repClntNo.setValue("");
    ed_repClntNm.setValue("");
  }
  scwin.repClntNo = ed_repClntNo.getValue();
  scwin.repClntNm = ed_repClntNm.getValue();
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_oilOilStatNo_onblurCodeEvent = async function (e) {
  if (scwin.oilOilStatNo == ed_oilOilStatNo.getValue()) {
    return false;
  } else {
    scwin.oilOilStatNo = ed_oilOilStatNo.getValue();
  }
  if (ed_oilOilStatNo.getValue().trim() == "") {
    ed_oilOilStatNm.setValue("");
  } else {
    await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'NM', '전체', '전체');
    scwin.oilOilStatNm = ed_oilOilStatNm.getValue();
  }
};
scwin.udc_oilOilStatNo_onblurNameEvent = async function (e) {
  if (scwin.oilOilStatNm == ed_oilOilStatNm.getValue()) {
    return false;
  } else {
    scwin.oilOilStatNm = ed_oilOilStatNm.getValue();
  }
  if (ed_oilOilStatNm.getValue().trim() == "") {
    ed_oilOilStatNo.setValue("");
  } else {
    await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'NM', '전체', '전체');
    scwin.oilOilStatNo = ed_oilOilStatNo.getValue();
  }
};
scwin.udc_oilOilStatNo_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'IMG', '전체', '전체');
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.acctDeptCd == ed_acctDeptCd.getValue()) {
    return false;
  } else {
    scwin.acctDeptCd = ed_acctDeptCd.getValue();
  }
  if (ed_acctDeptCd.getValue().trim() == "") {
    ed_acctDeptNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
  }
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  if (scwin.acctDeptNm == ed_acctDeptNm.getValue()) {
    return false;
  } else {
    scwin.acctDeptNm = ed_acctDeptNm.getValue();
  }
  if (ed_acctDeptNm.getValue().trim() == "") {
    ed_acctDeptCd.setValue("");
  } else {
    scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
  }
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (scwin.clntNo == ed_clntNo.getValue()) {
    return false;
  } else {
    scwin.clntNo = ed_clntNo.getValue();
  }
  if (ed_clntNo.getValue().trim() == "") {
    ed_clntNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  if (scwin.clntNm == ed_clntNm.getValue()) {
    return false;
  } else {
    scwin.clntNm = ed_bpClntNo.getValue();
  }
  if (ed_clntNm.getValue().trim() == "") {
    ed_clntNo.setValue("");
  } else {
    scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_bpClntNo_onblurCodeEvent = function (e) {
  if (scwin.bpClntNo == ed_bpClntNo.getValue()) {
    return false;
  } else {
    scwin.bpClntNo = ed_bpClntNo.getValue();
  }
  if (ed_bpClntNo.getValue().trim() == "") {
    ed_bpClntNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_bpClntNo_onblurNameEvent = function (e) {
  if (scwin.bpClntNm == ed_bpClntNm.getValue()) {
    return false;
  } else {
    scwin.bpClntNm = ed_bpClntNm.getValue();
  }
  if (ed_bpClntNm.getValue().trim() == "") {
    ed_bpClntNo.setValue("");
  } else {
    scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_bpClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), 'F', 'F');
};
scwin.udc_keepClntNo_onblurCodeEvent = function (e) {
  if (scwin.keepClntNo == ed_keepClntNo.getValue()) {
    return false;
  } else {
    scwin.keepClntNo = ed_keepClntNo.getValue();
  }
  if (ed_keepClntNo.getValue().trim() == "") {
    ed_keepClntNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(8, ed_keepClntNo.getValue(), ed_keepClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_keepClntNo_onblurNameEvent = function (e) {
  if (scwin.keepClntNm == ed_keepClntNm.getValue()) {
    return false;
  } else {
    scwin.keepClntNm = ed_keepClntNm.getValue();
  }
  if (ed_keepClntNm.getValue().trim() == "") {
    ed_keepClntNo.setValue("");
  } else {
    scwin.f_openCommonPopUp(8, ed_keepClntNo.getValue(), ed_keepClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_keepClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_keepClntNo.getValue(), ed_keepClntNm.getValue(), 'F', 'F');
};
scwin.udc_repClntNo_onblurCodeEvent = function (e) {
  if (scwin.repClntNo == ed_repClntNo.getValue()) {
    return false;
  } else {
    scwin.repClntNo = ed_repClntNo.getValue();
  }
  if (ed_repClntNo.getValue().trim() == "") {
    ed_repClntNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(9, ed_repClntNo.getValue(), ed_repClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_repClntNo_onblurNameEvent = function (e) {
  if (scwin.repClntNm == ed_repClntNm.getValue()) {
    return false;
  } else {
    scwin.repClntNm = ed_repClntNm.getValue();
  }
  if (ed_repClntNm.getValue() == "") {
    ed_repClntNo.setValue("");
  } else {
    scwin.f_openCommonPopUp(9, ed_repClntNo.getValue(), ed_repClntNm.getValue(), 'F', 'F');
  }
};
scwin.udc_repClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_repClntNo.getValue(), ed_repClntNm.getValue(), 'F', 'F');
};
scwin.osideClsCd_customFormatter = function (data, formattedData, rowIndex, columnIndex) {
  return data == "01" ? "카드" : "";
};
scwin.keepCmisUpr_displayFormatter = function (data) {
  try {
    return Math.round(Number(data) * 1.1 * 10) / 10;
  } catch (e) {
    return 0;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'oilOilStatNoPopUp',selectID:'retrieveFmsOilStationInfo',codeId:'ed_oilOilStatNo',validTitle:'',nameId:'ed_oilOilStatNm',style:'',code:'oilOilStatNo',id:'udc_oilOilStatNo',name:'oilOilStatNm',refDataCollection:'dma_search',btnId:'btn_oilOilStatNo','ev:onblurCodeEvent':'scwin.udc_oilOilStatNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_oilOilStatNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_oilOilStatNo_onclickEvent',UpperFlagCode:'0',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ed_stDt',edToId:'ed_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStatClsCd',style:'width: 110px;',submenuSize:'fixed',ref:'data:dma_search.oilStatClsCd',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카드만'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카드 제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'판매구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_preCoAfClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.preCoAfClsCd',sortOption:'value',chooseOption:'true',chooseOptionLabel:'선택'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'acctDeptCdPopUp',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'dma_search',btnId:'btn_acctDeptCd',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9a-zA-Z',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'clntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'clntNo',name:'clntNm',refDataCollection:'dma_search',btnId:'btn_clntNo',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilkndCd',style:'width: 110px;',submenuSize:'fixed',ref:'data:dma_search.oilkndCd',sortOption:'value',chooseOptionLabel:'선택'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소계기준 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sumClsCd',ref:'',sortOption:'value',style:'width: 150px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주유소별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출거래처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'귀속부서별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BP거래처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관거래처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카드수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BP거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bpClntNo',nameId:'ed_bpClntNm',popupID:'bpClntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'bpClntNo',name:'bpClntNm',refDataCollection:'dma_search',btnId:'btn_bpClntNo',id:'udc_bpClntNo','ev:onblurCodeEvent':'scwin.udc_bpClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bpClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bpClntNo_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_repClntNo',nameId:'ed_repClntNm',popupID:'repClntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'repClntNo',name:'repClntNm',refDataCollection:'dma_search',btnId:'btn_repClntNo',id:'udc_repClntNo','ev:onblurCodeEvent':'scwin.udc_repClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_repClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_repClntNo_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보관거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_keepClntNo',code:'keepClntNo',codeId:'ed_keepClntNo','ev:onblurCodeEvent':'scwin.udc_keepClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_keepClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_keepClntNo_onclickEvent',id:'udc_keepClntNo',name:'keepClntNm',nameId:'ed_keepClntNm',popupID:'keepClntNoPopUp',refDataCollection:'dma_search',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' FMS유류매출세부내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownUserAuth:'X',id:'udc_topGrd',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',style:'',id:'column30',value:'주유소코드',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'150',inputType:'text',style:'',id:'column38',value:'주유소명',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',style:'',id:'column36',value:'출고일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column64',value:'구분',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column61',value:'유종',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column58',value:'매출</br>거래처',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'180',inputType:'text',style:'',id:'column55',value:'매출</br>거래처명',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',style:'',id:'column52',value:'원가귀속부서',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',style:'',id:'column49',value:'귀속</br>부서 ',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column34',value:'거래</br>구분 ',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column32',value:'운송',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',style:'',id:'column28',value:'운송거래처',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',style:'',id:'column26',value:'운송거래처',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',style:'',id:'column102',value:'차량번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column98',value:'거래</br>구분',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column94',value:'단가</br>기준',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',style:'',id:'column90',value:'수량',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'370',inputType:'text',style:'',id:'column86',value:'판매',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'600',inputType:'text',style:'',id:'column114',value:'세부내역',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'410',inputType:'text',style:'',id:'column134',value:'보관수수료',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'410',inputType:'text',style:'',id:'column122',value:'BP수수료',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',style:'',id:'column162',value:'카드</br>수수료',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',style:'',id:'column163',value:'소개컬럼',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'공급가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'공장도가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'운송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column147',value:'할증률',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column143',value:'판매단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column139',value:'판매금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'보관거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column131',value:'보관거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'BP거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column151',value:'BP거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column155',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column159',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',id:'oilOilStatNo',value:'',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'150',inputType:'text',id:'oilOilStatNm',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'ioDt',value:'',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'select',id:'preCoAfClsCd',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'select',id:'oilkndCd',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'selpchClntNo',value:'',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'150',inputType:'text',id:'selpchClntNm',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'pcostAcctDeptCd',value:'',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'150',inputType:'text',id:'pcostAcctDeptNm',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'select',id:'payClsCd',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'checkbox',id:'selfTransYn',value:'',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',id:'transClntNo',value:'',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',id:'transClntNm',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'vehclNo',value:'',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'osideClsCd',value:'',customFormatter:'scwin.osideClsCd_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'select',id:'oilSellClsCd',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'qty',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'saleUpr',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'accumQty',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'saleVatAmt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'saleAmt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'sellStdUpr',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'sellDcUpr',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'transDcUpr',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'qtyDcRt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'realSellUpr',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'realSellAmt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',id:'keepClntNo',value:'',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'150',inputType:'text',id:'keepClntNm',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'keepCmisUpr',value:'',displayFormat:'#,##0.0',textAlign:'right',displayFormatter:'scwin.keepCmisUpr_displayFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'keepCmisAmt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',id:'bpClntNo',value:'',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'120',inputType:'text',id:'bpClntNm',value:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'bpCmisUpr',value:'',displayFormat:'#,##0',textAlign:'right',displayFormatter:'scwin.keepCmisUpr_displayFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'bpCmisAmt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'cardCmisAmt',value:'',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'100',inputType:'text',id:'subTotalColumn',value:'',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subTotalColumn',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column201',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column200',value:'소개',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column199',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column198',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column197',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column196',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column195',expression:'COUNT(\'oilOilStatNo\') + "건"',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column194',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column193',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column192',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column191',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column190',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column189',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column188',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column187',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column186',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column185',expression:'sum(\'qty\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column184',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column183',displayFormat:'#,##0',expression:'sum(\'saleAmt\') - sum(\'saleVatAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column182',displayFormat:'#,##0',expression:'sum(\'saleVatAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column181',displayFormat:'#,##0',expression:'sum(\'saleAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column180',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column179',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column178',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column177',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column176',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column175',expression:'sum(\'realSellAmt\')',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column174',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column173',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column172',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column171',displayFormat:'#,##0',expression:'sum(\'keepCmisAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column170',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column169',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column168',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column167',displayFormat:'#,##0',expression:'sum(\'bpCmisAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'expression',id:'column166',displayFormat:'#,##0',expression:'sum(\'cardCmisAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',inputType:'text',id:'column202',value:''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'qty\')',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'saleAmt\') - sum(\'saleVatAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'saleVatAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'saleAmt\')',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column141',value:'',displayMode:'label',expression:'sum(\'realSellAmt\')',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column121',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'keepCmisAmt\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column153',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column157',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column161',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'bpCmisAmt\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column165',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'cardCmisAmt\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column202',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})