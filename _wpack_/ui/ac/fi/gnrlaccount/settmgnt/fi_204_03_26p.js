/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_26p.xml 37069 2361069f191757081862b28e195b1a6673f26c6ee0db8df3ccbc87ebe481b55f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryYm',name:'회계년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'schGb',name:'조회구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'회계년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSumFcrc',name:'차변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSumFcrc',name:'대변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeFcrc',name:'잔액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSumFcrc',name:'차변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSumFcrc',name:'대변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prevAmtFcrc',name:'전월이월(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSumFcrc',name:'차변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSumFcrc',name:'대변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeFcrc',name:'잔액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prevAmt',name:'전월이월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'- expressions -',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'전월이월(외)',name:'SUM("prevAmtFcrc")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'차변금액(외)',name:'SUM("drSumFcrc")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'대변금액(외)',name:'SUM("crSumFcrc")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'잔액(외)',name:'SUM("chargeFcrc")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'전월이월',name:'SUM("prevAmt")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'차변금액',name:'SUM("drSum")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'대변금액',name:'SUM("crSum")',dataType:'text'}},{T:1,N:'w2:column',A:{id:'잔액',name:'SUM("charge")',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveCrcFinancialStatementsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_total","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve2',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveCrcFinancialStatementsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_total2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve3',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveCrcFinancialStatementsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_total3","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total3","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve3_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 재무제표(외화)상세팝업
 * 메뉴경로 : 자회사회계/재무회계/일반회계/결산관리/대차대조표(외화)
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_03_26p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-18
 * 수정이력  :
 *    - 2025-12-18      정승혜    최초작성
 *    - 2026-03-03      정승혜    기타수정
 * 메모 : 
 * 해외법인 계정 로그인 340125/1111
 * 부모페이지 fi_204_03_24b
 * 조회조건 : 
 * 결산년월-202410 비교년월-202411, 사업부-01519미국법인(집계), 통화코드-USD, Ⅰ.자산 금액 더블클릭
 * 회계년월 202409 더블클릭시 '총계정원장'show 잔액(외) 2465482.57 더블클릭시 '총계정원장집계표'show
 * 총계정원장 전표번호 더블클릭시 전표내역조회 팝업
 * 총계정원장 증빙개수 더블클릭시 증빙등록조회 팝업
 * 해야할 리스트 : 
 */
scwin.params = "";

// 화면로딩시
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  gr_total2_group.hide();
  gr_total3_group.hide();
  scwin.f_Header();
  scwin.f_Retrieve();
};

// Header 초기화
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

// 계정원장조회
scwin.f_Retrieve = function () {
  dma_search.set("qryYm", scwin.params["closeYm"]); // 회계년월
  dma_search.set("acctCd", scwin.params["acctCd"]); // 계정
  dma_search.set("acctDeptCd", scwin.params["deptCd"]); // 부서코드
  dma_search.set("bizDomCd", scwin.params["bizDomCd"]); // 사업영역
  dma_search.set("crcCd", scwin.params["crcCd"]); // 통화코드
  dma_search.set("exchRt", scwin.params["exchRt"]); // 환율
  dma_search.set("coCd", scwin.params["coCd"]); // 회사코드
  dma_search.set("schGb", "1"); // 조회구분(계정원장조회)

  $c.sbm.execute($p, sbm_tr_retrieve);
};

// 총계정원장조회
scwin.f_retrieve2 = function () {
  dma_search.set("qryYm", ds_total.getCellData(ds_total.getRowPosition(), "closeYm")); // 회계년월
  dma_search.set("schGb", "2"); // 조회구분(총계정원장조회)
  $c.sbm.execute($p, sbm_tr_retrieve2);
};

// 총계정원장집계표조회
scwin.f_retrieve3 = function () {
  dma_search.set("qryYm", ds_total.getCellData(ds_total.getRowPosition(), "closeYm")); // 회계년월
  dma_search.set("schGb", "3"); // 조회구분(총계정원장집계표조회)
  $c.sbm.execute($p, sbm_tr_retrieve3);
};

// 엑셀 파일 다운로드
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "총계정원장.xlsx",
      sheetName: "총계정원장",
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_total2, options);
  }
};

// 엑셀 파일 다운로드
scwin.f_Excel2 = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "총계정원장집계표.xlsx",
      sheetName: "총계정원장집계표",
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_total3, options);
  }
};

// 부가세 e세로 대사 팝업 
scwin.f_evidPopUp = function () {
  let data = {};
  data.slipNo = ds_total2.getCellData(ds_total2.getRowPosition(), "slipNo");
  let opt = {};
  opt.width = "1500";
  opt.height = "800";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  opt.popupName = "증빙등록조회";
  $c.win.openPopup($p, "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml", opt, data);
};

// grid decode format
scwin.acctNmDisplayFm = function (data) {
  //return $c.gus.decode(data, CurLevel, "1", "계정계");
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_total.getRowCount());
  ds_total.setRowPosition(0);
  gr_total.setFocusedCell(0, 0, false);
  if (scwin.params["type"] == "FCRC") {
    gr_total.setColumnVisible("drSumFcrc", true);
    gr_total.setColumnVisible("crSumFcrc", true);
    gr_total.setColumnVisible("chargeFcrc", true);
    gr_total.setColumnVisible("drSum", false);
    gr_total.setColumnVisible("crSum", false);
    gr_total.setColumnVisible("charge", false);
  } else {
    gr_total.setColumnVisible("drSumFcrc", false);
    gr_total.setColumnVisible("crSumFcrc", false);
    gr_total.setColumnVisible("chargeFcrc", false);
    gr_total.setColumnVisible("drSum", true);
    gr_total.setColumnVisible("crSum", true);
    gr_total.setColumnVisible("charge", true);
  }
};

// 서브미션
scwin.sbm_tr_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_total2.getRowCount());
  ds_total2.setRowPosition(0);
  gr_total2.setFocusedCell(0, 0, false);
  if (scwin.params["type"] == "FCRC") {
    gr_total2.setColumnVisible("drSumFcrc", true);
    gr_total2.setColumnVisible("crSumFcrc", true);
    gr_total2.setColumnVisible("drSum", false);
    gr_total2.setColumnVisible("crSum", false);
  } else {
    gr_total2.setColumnVisible("drSumFcrc", false);
    gr_total2.setColumnVisible("crSumFcrc", false);
    gr_total2.setColumnVisible("drSum", true);
    gr_total2.setColumnVisible("crSum", true);
  }
};

// 서브미션
scwin.sbm_tr_retrieve3_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows3.setValue(ds_total3.getRowCount());
  ds_total3.setRowPosition(0);
  gr_total3.setFocusedCell(0, 0, false);
  if (scwin.params["type"] == "FCRC") {
    gr_total3.setColumnVisible("prevAmtFcrc", true);
    gr_total3.setColumnVisible("drSumFcrc", true);
    gr_total3.setColumnVisible("crSumFcrc", true);
    gr_total3.setColumnVisible("chargeFcrc", true);
    gr_total3.setColumnVisible("prevAmt", false);
    gr_total3.setColumnVisible("drSum", false);
    gr_total3.setColumnVisible("crSum", false);
    gr_total3.setColumnVisible("charge", false);
  } else {
    gr_total3.setColumnVisible("prevAmtFcrc", false);
    gr_total3.setColumnVisible("drSumFcrc", false);
    gr_total3.setColumnVisible("crSumFcrc", false);
    gr_total3.setColumnVisible("chargeFcrc", false);
    gr_total3.setColumnVisible("prevAmt", true);
    gr_total3.setColumnVisible("drSum", true);
    gr_total3.setColumnVisible("crSum", true);
    gr_total3.setColumnVisible("charge", true);
  }
};

// 닫기
scwin.f_close = function () {
  $c.win.closePopup($p);
};
scwin.gr_total_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "closeYm") {
    scwin.f_retrieve2();
    gr_total2_group.show();
    gr_total3_group.hide();
  } else if (columnId == "chargeFcrc" || columnId == "charge") {
    scwin.f_retrieve3();
    gr_total2_group.hide();
    gr_total3_group.show();
  }
};
scwin.gr_total2_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_total2.getCellData(rowIndex, "slipNo"));
  }
  if (columnId == "evidenceCnt") {
    scwin.f_evidPopUp();
  }
};
scwin.gr_total3_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_total3.getCellData(rowIndex, "slipNo"));
  }
};
scwin.grDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  if (data == null || data === "") {
    return "";
  }
  let num = Number(data);
  if (isNaN(num)) {
    return data;
  }
  if (num == 0) {
    return num.toLocaleString();
  }
  if (num % 1 !== 0) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  } else {
    return num.toLocaleString();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box flex_no',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'계정원장조회 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_total',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_total',visibleRowNum:'7',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncelldblclick':'scwin.gr_total_oncelldblclick',fixedColumn:'3',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'회계년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column20',value:'차변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'대변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'잔액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'closeYm',value:'',displayMode:'label',class:'txt-blue underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'drSumFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'crSumFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'chargeFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',class:'txt-blue underline',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'drSum',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'crSum',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'charge',value:'',displayMode:'label',class:'txt-blue underline',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'gr_total2_group',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'gr_total2_top',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'총계정원장',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_total2',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',fixedColumn:'4',dataList:'data:ds_total2',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_total2',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_total2_oncellclick',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'전표번호',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column37',value:'거래처명 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column70',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'차변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'대변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'증빙개수',class:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',class:'txt-blue underline'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'mgntClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'drSumFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'crSumFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'drSum',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'crSum',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'evidenceCnt',value:'',displayMode:'label',class:'txt-blue underline',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'계정계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'SUM("drSumFcrc")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'SUM("crSumFcrc")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',expression:'SUM("drSum")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',expression:'SUM("crSum")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'gr_total2_bottom',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'gr_total3_group',class:'row-gap-8',style:'margin-top:20;'},E:[{T:1,N:'xf:group',A:{style:'',id:'gr_total3_top',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'총계정원장집계표',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_total3',gridDownFn:'scwin.f_Excel2',gridDownUserAuth:'X',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_total3',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_total3',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_total3_oncellclick',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column23',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column13',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'법인명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'전월이월(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'차변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'대변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'잔액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'전월이월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'busiNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'prevAmtFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'drSumFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'crSumFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'chargeFcrc',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'prevAmt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'drSum',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'crSum',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'charge',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',expression:'SUM("prevAmtFcrc")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',expression:'SUM("drSumFcrc")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',expression:'SUM("crSumFcrc")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',expression:'SUM("chargeFcrc")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',expression:'SUM("prevAmt")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',expression:'SUM("drSum")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'SUM("crSum")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',expression:'SUM("charge")',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'gr_total3_bottom',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})