/*amd /ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_04_02p.xml 13639 db75a5f43317faa84c6a33c4e47e16853ea722f04a44528aedfe73bc2d4e9a97 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txnStDt',name:'거래일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnEndDt',name:'거래일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'internalTxnStsCd',name:'확정취소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'매출/매입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrDeptYn',name:'집계부서여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'내부매출부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAcctDeptCd',name:'내부매입부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'내부매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'내부매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptCd',name:'내부매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptNm',name:'내부매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'금액',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.internaltxnmgnt.RetrieveInternalTransactionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txn", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 내부거래확인상세조회
 * 메뉴경로 : 회계/관리회계/실적관리/내부거래관리/내부거래확인상세조회
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/internaltxnmgnt/co_401_04_02p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2026-01-03
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 :
 *    1. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 수정이력 :
 *    - 2026-01-03      배기원    최초작성
 */
scwin.params;
/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ001",
    compID: "gr_txn:sysCd"
  } //시스템코드
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  scwin.f_HeaderCreate();
  scwin.f_Retrieve();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_txn.setNoResultMessageVisible(false);
  gr_txn.setColumnColor("internalTxnBilgNo", "#007FFF");
  ds_txn.reform();
  ds_txn.removeAll();
  totalRows.setValue("0");
};

/**
 * 데이터셋 세팅
 * tobe 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "txnStDt:STRING"
  //     + ",txnEndDt:STRING"
  //     + ",acctDeptCd:STRING"
  //     + ",internalTxnStsCd:STRING"
  //     + ",scClsCd:STRING"
  //     + ",aggrDeptYn:DECIMAL"
  //     + ",bilgAcctDeptCd:STRING"
  //     + ",pchsAcctDeptCd:STRING";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  //타이틀 추가
  $c.data.setPopupTitle($p, "내부거래확인상세조회");
};

/**
 * 조회
 */
scwin.f_Retrieve = function () {
  // ds_search.setCellData(ds_search.RowPosition, "txnStDt", "scwin.txnStDt");
  // ds_search.setCellData(ds_search.RowPosition, "txnEndDt", "scwin.txnEndDt");
  // ds_search.setCellData(ds_search.RowPosition, "acctDeptCd", "scwin.acctDeptCd");
  // ds_search.setCellData(ds_search.RowPosition, "internalTxnStsCd", "scwin.internalTxnStsCd");
  // ds_search.setCellData(ds_search.RowPosition, "scClsCd", "scwin.scClsCd");
  // ds_search.setCellData(ds_search.RowPosition, "aggrDeptYn", "scwin.aggrDeptYn");
  // ds_search.setCellData(ds_search.RowPosition, "bilgAcctDeptCd", "scwin.bilgAcctDeptCd");
  // ds_search.setCellData(ds_search.RowPosition, "pchsAcctDeptCd", "scwin.pchsAcctDeptCd");
  // $c.sbm.execute(sbm_search);
  dma_search.setJSON(scwin.params);
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_txn.setNoResultMessageVisible(true);
  let rowCnt = ds_txn.getRowCount();
  totalRows.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      gr_txn.setFocusedCell(0, 0);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 상세팝업호출
 */
scwin.f_Detail = function (row) {
  // var internalTxnBilgNo = ds_txn.getCellData(row, 'internalTxnBilgNo');
  // var sFeatures = "dialogWidth:825px; dialogHeight:570px;"
  //     + "status:No; scroll:No";
  // sURL = "/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_02p.jsp?internalTxnBilgNo=" + internalTxnBilgNo;
  // window.showModalDialog(sURL, window, sFeatures);

  let internalTxnBilgNo = ds_txn.getCellData(row, 'internalTxnBilgNo');
  let opts = {};
  let data = {};
  //팝업파라메터 
  data.internalTxnBilgNo = internalTxnBilgNo;
  opts.width = "825";
  opts.height = "580";
  opts.id = "popInternalTxnBilgNo";
  opts.title = "내부거래상세조회";
  opts.popupName = "내부거래상세조회";
  opts.scrollbars = false;
  opts.type = "browserPopup";
  $c.win.openPopup($p, "/ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_02p.xml", opts, data);
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
scwin.f_grdHeiht = function (gridNm, size) {
  // var strHeight = gridNm.style.height;
  // var intHeight = parseInt(strHeight.replace("px", ""));
  // intHeight = intHeight + size;
  // if (intHeight <= 400) {
  //     gridNm.style.height = intHeight + "px";
  // }
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
scwin.f_runExcel = function (varGrNm) {
  // totCnt = ds_txn.getRowCount();
  // sheetTitle = "내부거래상세내역";
  // if (totCnt != 0) {
  //     cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
  //     if (cfrm) {
  //         $c.data.downloadGridViewExcel(varGrNm, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
  //     }
  // } else {
  //     $c.win.alert(MSG_CM_WRN_002);
  // }
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_txn_oncellclick = function (rowIndex, columnIndex, columnId) {
  //상세조회팝업
  if (columnId == "internalTxnBilgNo") {
    scwin.f_Detail(rowIndex);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'내부거래 상세내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"내부거래상세내역.xlsx", "sheetName":"내부거래상세내역", "type":"1", "useStyle":true}',gridID:'gr_txn',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_txn',focusMode:'cell',id:'gr_txn',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_txn_oncellclick',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'140',value:'청구번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'시스템'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'200',value:'내부매출부서'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'200',value:'내부매입부서'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'작성일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'거래일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'internalTxnBilgNo',inputType:'link',removeBorderStyle:'false',width:'140',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sysCd',inputType:'select',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pchsAcctDeptNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'rsltsAmt_s1',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM("rsltsAmt")',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})