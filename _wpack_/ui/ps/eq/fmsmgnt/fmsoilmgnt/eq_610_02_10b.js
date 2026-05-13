/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_02_10b.xml 66212 22059d316842aa8927bcee376cf38a9be7b46f9753fc5055aa38f1ada6483a67 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilOilStatNo',name:'oilOilStatNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'stDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClsCd',name:'oilStatClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'keepClntNo',name:'keepClntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bpClntNo',name:'bpClntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transClntNo',name:'transClntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'preCoAfClsCd',name:'preCoAfClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcClsCd',name:'dcClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioDt',name:'매출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCoAfClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptCd',name:'원가귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNo',name:'매출거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNm',name:'매출거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'매출물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellStdUpr',name:'공장도가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellDcUpr',name:'할인단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transDcUpr',name:'운송할인',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qtyDcRt',name:'할증율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realSellUpr',name:'판매단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'saleAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'saleSplyAmt',name:'공급가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realSellSplyUpr',name:'공급단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'매입단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inRealUpr',name:'실매입단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inRealAmt',name:'실매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'keepClntNo',name:'보관수수료_거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'keepClntNm',name:'보관수수료_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'keepCmisUpr',name:'보관수수료_단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'keepCmisAmt',name:'보관수수료_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bpClntNo',name:'BP수수료_거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bpClntNm',name:'BP수수료_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bpCmisUpr',name:'BP수수료_단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bpCmisAmt',name:'BP수수료_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inTransClntNo',name:'운송료_거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTransClntNm',name:'운송료_거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCmisUpr',name:'운송료_단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transCmisAmt',name:'운송료_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cardCmisAmt',name:'카드수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addProfAmt',name:'매출이익_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addProfRt',name:'매출이익_%',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'매입단가세부_입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStdUpr',name:'매입단가세부_공장도가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inTransDcUpr',name:'매입단가세부_운송할인',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inDcUpr',name:'매입단가세부_기본할인',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAddDcUpr',name:'매입단가세부_추가할인',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'매입단가세부_재고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'매출세부_거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSellClsCd',name:'매출세부_단가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTotalColumn',name:'임시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dummy'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFMSOilSellingWongaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.fmsmgnt.fmsoilmgnt.CreateFMSOilSellingWongaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_dummy","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ps/pscommon.js',type:'text/javascript',scopeVariable:'pscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// FMS유류매출원가조회

scwin.fromDate_YyMmDd = ""; // 작업날짜
scwin.fromDate_YyMmDd = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.fromDate_YyMm = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "TL104",
    compID: "lc_preCoAfClsCd,gr_master:preCoAfClsCd"
  },
  // 판매구분
  {
    grpCd: "TL110",
    compID: "gr_master:oilSellClsCd"
  } // 단가기준
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ed_stDt.setValue(scwin.fromDate_YyMm + "01");
  ed_endDt.setValue(scwin.fromDate_YyMmDd);
  ed_stdYm.setValue(scwin.fromDate_YyMm);
  ed_stDt.focus();
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  var vChkVal = scwin.f_CheckAdptDt(); //날짜 체크한 결과 값을 리턴
  if (!vChkVal) {
    //true or false 결과을 체크하여 잘못들어갔다면, false값 리턴
    return false;
  }
  dma_search.set("oilOilStatNo", ed_oilOilStatNo.getValue()); // 주유소코드
  dma_search.set("stDt", ed_stDt.getValue()); // 출고일자from
  dma_search.set("endDt", ed_endDt.getValue()); // 출고일자to
  dma_search.set("oilStatClsCd", lc_oilStatClsCd.getValue()); // 거래처구분
  dma_search.set("acctDeptCd", ed_acctDeptCd.getValue()); // 매출부서 
  dma_search.set("clntNo", ed_clntNo.getValue()); // 매출거래처
  dma_search.set("keepClntNo", ed_keepClntNo.getValue()); // 보관거래처
  dma_search.set("bpClntNo", ed_bpClntNo.getValue()); // BP거래처
  dma_search.set("transClntNo", ed_transClntNo.getValue()); // 운송거래처
  dma_search.set("preCoAfClsCd", lc_preCoAfClsCd.getValue()); // 판매구분
  dma_search.set("dcClsCd", lc_dcClsCd.getValue()); // 단가구분

  $c.sbm.execute($p, sbm_master);
};
//-------------------------------------------------------------------------
// 날짜 체크한 결과 값을 리턴
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = function () {
  var vAdptStDt = ed_stDt.getValue();
  var vAdptEndDt = ed_endDt.getValue();
  var vReturn = true;
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    alert("매출시작일자를 정확하게 입력해주십시오.");
    ed_stDt.focus();
    vReturn = false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    alert("매출종료일자를 정확하게 입력해주십시오.");
    ed_endDt.focus();
    vReturn = false;
  }
  if (vAdptStDt > vAdptEndDt) {
    alert("매출시작일자가 종료일자보다 늦은 날짜입니다.");
    ed_stDt.focus();
    vReturn = false;
  }
  if (vAdptStDt < "20090101") {
    alert("2009년 1월 1일 매출내역부터 조회할 수 있습니다.");
    ed_stDt.focus();
    vReturn = false;
  }
  return vReturn;
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  const gridColCount = gr_master.hiddenList.filter(f => !f).length;
  const title = "FMS유류매출원가조회";
  const fileName = title + ".xlsx";
  const {
    titleList,
    excelStyle
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
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel_searchTitle = function () {
  var count = ds_master.getRowCount();
  if (!(count > 0)) return;
  let titleList = [];
  let stDt = $c.gus.cfGetFormatStr($p, ed_stDt.getValue(), "####/##/##");
  let endDt = $c.gus.cfGetFormatStr($p, ed_endDt.getValue(), "####/##/##");
  titleList.push(`매출일자 [${stDt}~${endDt}]`);
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
  if (ed_transClntNo.getValue() != "") {
    titleList.push(`운송거래처 [${ed_transClntNm.getValue()} [${ed_transClntNo.getValue()}]]`);
  }
  if (lc_preCoAfClsCd.getValue() != "") {
    titleList.push(`유류판매구분 [${lc_preCoAfClsCd.getItemArray().find(f => f.value == lc_preCoAfClsCd.getValue())["orgLabel"]}]`);
  }
  return {
    titleList,
    excelStyle
  };
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ed_stdYm.getValue().trim().length != 6) {
    alert("기준년월은 필수입력입니다.");
    return;
  }
  if (!(await $c.win.confirm($p, ed_stdYm.getValue() + "월에대한 매출내역 및 매출원가를 집계하시겠습니까?"))) {
    return;
  }
  dma_dummy.set("stdYm", ed_stdYm.getValue());
  const result = await $c.sbm.execute($p, sbm_save);
  if (result.responseJSON.resultDataSet[0].Code == "0") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["유류매출원가"]);
    scwin.f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, "");
  }
};
//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array();
  var pWhere; // 조회조건
  switch (disGubun) {
    case 1:
      // 주유소
      udc_oilOilStatNo.cfCommonPopUp(scwin.udc_oilOilStatNo_callBackFunc, ed_oilOilStatNo.getValue(), ed_oilOilStatNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      , null // 전체검색허용여부	("F")
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
      // 운송거래처
      udc_transClntNo.cfCommonPopUp(scwin.udc_transClntNo_callBackFunc, ed_transClntNo.getValue(), ed_transClntNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
};
//------------------------------------------------------------------------- 
// 운송거래처
//------------------------------------------------------------------------- 
scwin.udc_transClntNo_callBackFunc = function (ret) {
  console.log("udc_transClntNo_callBackFunc");
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_transClntNo.setValue(ret[0]);
    ed_transClntNm.setValue(ret[1]);
  } else {
    ed_transClntNo.setValue("");
    ed_transClntNm.setValue("");
  }
};
scwin.udc_oilOilStatNo_onblurCodeEvent = function (e) {
  if (ed_oilOilStatNo.getValue().trim() == "") {
    ed_oilOilStatNm.setValue("");
  }
};
scwin.udc_oilOilStatNo_onblurNameEvent = async function (e) {
  if (ed_oilOilStatNm.getValue().trim() == "") {
    ed_oilOilStatNo.setValue("");
  } else {
    await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'NM', '전체', '전체');
  }
};
scwin.udc_oilOilStatNo_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'IMG', '전체', '전체');
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue().trim() == "") {
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue().trim() == "") {
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_bpClntNo_onblurCodeEvent = function (e) {
  if (ed_bpClntNo.getValue().trim() == "") {
    ed_bpClntNm.setValue("");
  }
};
scwin.udc_bpClntNo_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), 'F', 'F');
};
scwin.udc_bpClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), 'F', 'F');
};
scwin.udc_keepClntNo_onblurCodeEvent = function (e) {
  if (ed_keepClntNo.getValue().trim() == "") {
    ed_keepClntNm.setValue("");
  }
};
scwin.udc_keepClntNo_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_keepClntNo.getValue(), ed_keepClntNm.getValue(), 'F', 'F');
};
scwin.udc_keepClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_keepClntNo.getValue(), ed_keepClntNm.getValue(), 'F', 'F');
};
scwin.udc_transClntNo_onblurCodeEvent = function (e) {
  if (ed_transClntNo.getValue().trim() == "") {
    ed_transClntNm.setValue("");
  }
};
scwin.udc_transClntNo_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_transClntNo.getValue(), ed_transClntNm.getValue(), 'F', 'F');
};
scwin.udc_transClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_transClntNo.getValue(), ed_transClntNm.getValue(), 'F', 'F');
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
      "C": "pcostAcctDeptNm"
    };
    const subSortInfo = {
      "A": "oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty",
      "B": "selpchClntNm oilOilStatNm ioDt preCoAfClsCd qty",
      "C": "pcostAcctDeptNm oilOilStatNm ioDt preCoAfClsCd selpchClntNm qty"
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
scwin.getSumClsCdText = function (data) {
  return lc_sumClsCd.getValue() == "C" ? data : "";
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.osideClsCd_customFormatter = function (data, formattedData, rowIndex, columnIndex) {
  return data == "1" ? "카드" : "";
};
scwin.lc_sumClsCd_onviewchange = function (info) {
  if (ds_master.getRowCount() > 0) scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'oilOilStatNoPopUp',selectID:'retrieveFmsOilStationInfo',codeId:'ed_oilOilStatNo',validTitle:'',nameId:'ed_oilOilStatNm',style:'',code:'oilOilStatNo',name:'oilOilStatNm',refDataCollection:'dma_search',btnId:'btn_oilOilStatNo',id:'udc_oilOilStatNo','ev:onblurCodeEvent':'scwin.udc_oilOilStatNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_oilOilStatNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_oilOilStatNo_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9A-Za-z',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ed_stDt',edToId:'ed_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStatClsCd',style:'width:230px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현대카드만'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현대카드 제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'판매구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_preCoAfClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.preCoAfClsCd',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'선택'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'acctDeptCdPopUp',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'dma_search',btnId:'btn_acctDeptCd',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9A-Za-z',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'clntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'clntNo',name:'clntNm',refDataCollection:'dma_search',btnId:'btn_clntNo',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',maxlengthCode:'6',allowCharCode:'0-9A-Za-z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보관거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_keepClntNo',nameId:'ed_keepClntNm',popupID:'keepClntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'keepClntNo',name:'keepClntNm',refDataCollection:'dma_search',btnId:'btn_keepClntNo',id:'udc_keepClntNo','ev:onblurCodeEvent':'scwin.udc_keepClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_keepClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_keepClntNo_onclickEvent',allowCharCode:'0-9A-Za-z',maxlengthCode:'6',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BP거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bpClntNo',nameId:'ed_bpClntNm',popupID:'bpClntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'bpClntNo',name:'bpClntNm',refDataCollection:'dma_search',btnId:'btn_bpClntNo',id:'udc_bpClntNo','ev:onblurCodeEvent':'scwin.udc_bpClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bpClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bpClntNo_onclickEvent',allowCharCode:'0-9A-Za-z',maxlengthCode:'6',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_transClntNo',nameId:'ed_transClntNm',popupID:'transClntNoPopUp',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',code:'transClntNo',name:'transClntNm',refDataCollection:'dma_search',btnId:'btn_transClntNo',id:'udc_transClntNo','ev:onblurCodeEvent':'scwin.udc_transClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_transClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_transClntNo_onclickEvent',allowCharCode:'0-9A-Za-z',maxlengthCode:'6',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소계기준 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sumClsCd',style:'width:230px;',submenuSize:'fixed',ref:'','ev:onviewchange':'scwin.lc_sumClsCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주유소별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출거래처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'귀속부서별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'단가구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dcClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.dcClsCd',sortOption:'value',sortMethod:'ascending'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'평균할인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실제할인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'FMS유류매출세부내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',gridDownUserAuth:'X',id:'udc_topGrd',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',autoFitMinWidth:'1000',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'11',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'매출일자',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'구분',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'주유소코드',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'주유소명',width:'160',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'매출',width:'990',colSpan:'13',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'매출원가',width:'1190',colSpan:'17',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column173',inputType:'text',style:'',value:'매출이익',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column163',inputType:'text',style:'',value:'매입단가세부',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column238',inputType:'text',style:'',value:'매출세부',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column913',inputType:'text',style:'',value:'TEMP',width:'160',colSpan:'',rowSpan:'3',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column914',inputType:'text',style:'',value:'소계',width:'160',colSpan:'',rowSpan:'3',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'원가귀속부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'귀속부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'매출거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column110',value:'매출거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'매출물량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'공장도가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'할인단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'운송할인',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'할증율',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'판매단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'공급가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'공급단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'매입단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'매입단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'매입금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'실매입금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column54',value:'보관수수료',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column42',value:'BP수수료',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column199',value:'운송료',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column179',value:'카드<br/>수수료',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column174',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column169',value:'(%)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column164',value:'입고일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column159',value:'공장도가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column154',value:'운송할인',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column144',value:'기본할인',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'추가할인',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column244',value:'재고수량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column239',value:'거래구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column234',value:'단가기준',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column229',value:'차량번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column121',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column118',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column215',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column210',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column205',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column200',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column195',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column190',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column185',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ioDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'preCoAfClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilOilStatNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'oilOilStatNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pcostAcctDeptCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pcostAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellStdUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellDcUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transDcUpr',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qtyDcRt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realSellUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'saleAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'saleSplyAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realSellSplyUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inRealUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inRealAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'keepClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'keepClntNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'keepCmisUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'keepCmisAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bpClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bpClntNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bpCmisUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bpCmisAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inTransClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inTransClntNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transCmisUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transCmisAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cardCmisAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'addProfAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'Number(datalist(\'saleSplyAmt\')) - Number(datalist(\'inAmt\')) - Number(datalist(\'keepCmisAmt\')) - Number(datalist(\'bpCmisAmt\')) - Number(datalist(\'transCmisAmt\'))'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'addProfRt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',expression:'Number(datalist(\'saleSplyAmt\')) == 0 ? \'0\' : Math.round( (Number(datalist(\'saleSplyAmt\')) - Number(datalist(\'inAmt\')) - Number(datalist(\'keepCmisAmt\')) - Number(datalist(\'bpCmisAmt\')) - Number(datalist(\'transCmisAmt\'))) / Number(datalist(\'saleSplyAmt\')) * 100 * 100 ) / 100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inStdUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'inTransDcUpr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'datalist(\'inTransDcUpr\').split(\'.\').at(0)'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'inDcUpr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'Math.trunc(Number(datalist(\'inDcUpr\')))'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAddDcUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stockQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'osideClsCd',value:'',displayMode:'label',customFormatter:'scwin.osideClsCd_customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'oilSellClsCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'temp001',value:'',displayMode:'label',hidden:'true',hiddenCol:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',expression:'Math.round(Number(datalist(\'saleAmt\'))/1.1)'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'subTotalColumn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subTotalColumn',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column01',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column02',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column03',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column04',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column05',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column06',value:'',displayMode:'label',expression:'lc_sumClsCd.getValue() == \'C\' ? targetColValue() : \'\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column07',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column08',value:'',displayMode:'label',textAlign:'left',expression:'count(\'subTotalColumn\') + \' 건\''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column09',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'qty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column15',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'saleAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column16',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'saleSplyAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inRealAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'keepCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'bpCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'transCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'cardCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'addProfAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number',expression:'sum(\'saleSplyAmt\') == 0 ? 0 : sum(\'addProfAmt\') / sum(\'saleSplyAmt\') * 100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockQty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column01',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column02',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column03',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column04',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column05',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column06',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column07',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column08',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column09',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'qty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column15',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'saleAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column16',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'saleSplyAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column20',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inRealAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'keepCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column29',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'bpCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'transCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column34',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'cardCmisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column36',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'temp001\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'매출년월',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_stdYm',class:'',calendarValueType:'yearMonth',pickerType:'dynamic'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출원가 집계'}]}]}]}]}]}]}]}]}]})