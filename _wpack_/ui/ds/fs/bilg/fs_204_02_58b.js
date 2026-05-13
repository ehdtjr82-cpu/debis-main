/*amd /ui/ds/fs/bilg/fs_204_02_58b.xml 57712 69b5c57d63a207b9fa5dee8a88f7b6acd055c56d3132401336e733d04b63ff17 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_unsettledGapQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sellPurchaseClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFmTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detailAllYn',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_departmentEachUnsettledContents',saveRemovedData:'true','ev:ondataload':'scwin.ds_departmentEachUnsettledContents_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befBefMm1',name:'이월;A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'befMm1',name:'당월입력;B',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumBefMm2',name:'누계;C(A+B)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'befMm',name:'이월;D',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mm',name:'당월입력;E',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumBefMm1',name:'누계;F(D+E)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gapBefMm1',name:'실적;G(F-C)',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerEachUnsettledContents',saveRemovedData:'true','ev:ondataload':'scwin.ds_customerEachUnsettledContents_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delAmt',name:'삭제',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnCtrlAmt',name:'조정후 확정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnGapCtrlAmt',name:'확정차액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnUnctrlAmt',name:'확정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cumUnsettledCaryFwrdAmt',name:'미확정;잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totUnsettledCaryFwrdAmt',name:'미확정;총계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledCtrlAmt',name:'조정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledGapCtrlAmt',name:'조정차액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledUnctrlAmt',name:'미조정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledEtcAmt',name:'이월기타',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledCustAmt',name:'거래처변경',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledBefMmRslts',name:'전월실적;당월입력분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unsettledThisMm',name:'당월발생분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cumUnsettledThisMm',name:'당월미확정;누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qryConDtTo',name:'조회To일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryConDtFm',name:'조회From일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderEachUnsettledDetail',saveRemovedData:'true','ev:ondataload':'scwin.ds_orderEachUnsettledDetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calType',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfrSellVol',name:'매출;물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfrSellUpr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfrVatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfrSellAmt',name:'원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfrSellAmtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aftSellVol',name:'매출;물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aftSellUpr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aftVatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aftSellAmt',name:'원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'aftSellAmtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출;물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name24',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_departmentEachUnsettledContents',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveDepartmentEachUnsettledContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_unsettledGapQueryCondition","key":"IN_DS1"},{"id":"ds_departmentEachUnsettledContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_departmentEachUnsettledContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submission1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customerEachUnsettledContents',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveCustomerEachUnsettledContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_unsettledGapQueryCondition","key":"IN_DS1"},{"id":"ds_customerEachUnsettledContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_customerEachUnsettledContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_customerEachUnsettledContents_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_orderEachUnsettledDetail',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderEachUnsettledDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_unsettledGapQueryCondition","key":"IN_DS1"},{"id":"ds_orderEachUnsettledDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderEachUnsettledDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_orderEachUnsettledDetail_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// hidden 컴포넌트 선언
//-------------------------------------------------------------------------
scwin.ed_bilgLodeptCd = "";
scwin.ed_acctCd = "";
scwin.hid_acctCd = "";

//-------------------------------------------------------------------------
// Parameter 선언
//-------------------------------------------------------------------------
scwin.param = "";
scwin.flag = scwin.param.flag == null ? "" : scwin.param.flag;
scwin.selPchLodeptCd = scwin.param.selPchLodeptCd == null ? "" : scwin.param.selPchLodeptCd;
// scwin.selPchLodeptCd = "8BB";
scwin.qryConDt = scwin.param.qryConDt == null ? "" : scwin.param.qryConDt;
scwin.selPchCls = scwin.param.selPchCls == null ? "" : scwin.param.selPchCls;
scwin.acctCd = scwin.param.acctCd == null ? "" : scwin.param.acctCd;
scwin.acctNm = scwin.param.acctNm == null ? "" : scwin.param.acctNm;

//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strFrDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.param = $c.data.getParameter($p);
  scwin.flag = scwin.param.flag == null ? "" : scwin.param.flag;
  scwin.selPchLodeptCd = scwin.param.selPchLodeptCd == null ? "" : scwin.param.selPchLodeptCd;
  // scwin.selPchLodeptCd = "8BB";
  scwin.qryConDt = scwin.param.qryConDt == null ? "" : scwin.param.qryConDt;
  scwin.selPchCls = scwin.param.selPchCls == null ? "" : scwin.param.selPchCls;
  scwin.acctCd = scwin.param.acctCd == null ? "" : scwin.param.acctCd;
  scwin.acctNm = scwin.param.acctNm == null ? "" : scwin.param.acctNm;

  //공통코드데이터 호출   
  const codeOptions = [
    // { grpCd: "SD113", compID: "acb_odrKndCd" } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  rd_sellPurchaseClsCd.setValue("0");
  scwin.f_dateTitle(ica_qryConDtFm.getValue());
  ds_departmentEachUnsettledContents.setJSON([]);
};

//-------------------------------------------------------------------------
// 로드시 분기처리
//-------------------------------------------------------------------------
scwin.f_executeFromLinked = function () {
  if (scwin.selPchCls == "SELL") {
    rd_sellPurchaseClsCd.setValue("0");
  } else if (scwin.selPchCls == "PCHS") {
    rd_sellPurchaseClsCd.setValue("1");
  }
  if (scwin.acctCd != "") {
    dma_unsettledGapQueryCondition.set("acctCd", scwin.acctCd);
    ed_acctNm.setValue(scwin.acctNm);
    ed_acctCd.setValue(scwin.acctCd);
    scwin.ed_acctCd = scwin.acctCd;
  }
  scwin.f_dateTitle(ica_qryConDtFm.getValue());

  // UDC 기본값 세팅
  // scwin.onUdcCompleted();

  // retrieve 함수
  scwin.btn_retrieve_onClick();
};
//-------------------------------------------------------------------------
//  UDC 기본값 세팅 함수
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_qryConDtFm.setValue(scwin.qryConDt);
  ed_bilgLodeptCd.setValue(scwin.selPchLodeptCd);
  ed_acctCd.hide();
  if (scwin.selPchLodeptCd != "") {
    scwin.f_executeFromLinked();
  }
};

//-------------------------------------------------------------------------
// 부서별 미확정 조회 retrieve 함수
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  /* 시간 수식 */1;
  let qryConDtTo = ica_qryConDtFm.getValue().substring(0, 4) + "01";
  let calDate = new Date();
  let fromDate = "";
  let fromToDate = "";
  let toDate = "";
  toDate = ica_qryConDtFm.getValue().substring(0, 6);
  fromToDate = ica_qryConDtFm.getValue().substring(0, 6) - 1;
  fromDate = ica_qryConDtFm.getValue().substring(0, 6) - 2;
  dma_unsettledGapQueryCondition.set("sellPurchaseClsCd", rd_sellPurchaseClsCd.getValue()); //매출입항목코드
  dma_unsettledGapQueryCondition.set("bilgLodeptCd", ed_bilgLodeptCd.getValue()); //부서코드
  dma_unsettledGapQueryCondition.set("qryConDtTo", toDate); //조회일자 From
  dma_unsettledGapQueryCondition.set("qryConDtFmTo", fromToDate); //조회일자 From
  dma_unsettledGapQueryCondition.set("qryConDtFm", fromDate); //조회일자 TO
  dma_unsettledGapQueryCondition.set("acctCd", ed_acctNm.getValue()); //회계계정코드

  /* DataSet Clear */
  ds_departmentEachUnsettledContents.removeAll();
  ds_customerEachUnsettledContents.removeAll();
  ds_orderEachUnsettledDetail.removeAll();
  $c.sbm.execute($p, sbm_departmentEachUnsettledContents);
};

//-------------------------------------------------------------------------
// 부서별 미확정 조회 완료시
//-------------------------------------------------------------------------
scwin.sbm_submission1_submitdone = function (e) {
  spa_totalRow1.setValue(ds_departmentEachUnsettledContents.getTotalRow());
  if (ds_departmentEachUnsettledContents.getRowCount() == 0) {
    ds_departmentEachUnsettledContents.setJSON([]);
  }
};

//-------------------------------------------------------------------------
//날자에 따른 TITLE 설정
//-------------------------------------------------------------------------	
scwin.f_dateTitle = function (arg) {
  // let toDate = "";
  let fromDate = "";
  let qryConDtTo = arg;
  let toDate = ica_qryConDtFm.getValue().substring(0, 4); // 검색 년
  let toMonth = ica_qryConDtFm.getValue().substring(4, 6); // 검색 월;
  let fromMonth = ica_qryConDtFm.getValue().substring(4, 6) - 1; // 검색기준 한달전
  let fromMonth2 = ica_qryConDtFm.getValue().substring(4, 6) - 2; // 검색기준 한달전

  if (ica_qryConDtFm.getValue() == "" || ica_qryConDtFm.getValue() == null) {
    return;
  } else {
    for (i = 0; i < 3; i++) {
      fromDate = ica_qryConDtFm.getValue().substring(0, 6);
      fromDate = ica_qryConDtFm.getValue().substring(0, 6) - i;
      titleDate = fromDate;
      if (i == 2) {
        // gr_departmentEachUnsettledContents.ColumnProp('title3', 'Name') = ;				
        gr_departmentEachUnsettledContents.setHeaderValue("title3_head", toDate + "년 " + fromMonth2 + "월분");
      } else if (i == 1) {
        gr_departmentEachUnsettledContents.setHeaderValue("title2_head", toDate + "년 " + fromMonth + "월분");
      } else if (i == 0) {
        gr_departmentEachUnsettledContents.setHeaderValue("title1_head", toDate + "년 " + toMonth + "월분");
        gr_departmentEachUnsettledContents.setHeaderValue("gapBefMm1_head", toDate + "년 " + toMonth + "월분 실적;(G(F-C))");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 거래처별 미확정 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCustomer = function (fromDate, toDate, row) {
  ed_bilgLodeptCd.setValue(ds_departmentEachUnsettledContents.getCellData(row, "sellLodeptCd"));
  dma_unsettledGapQueryCondition.set("sellPurchaseClsCd", rd_sellPurchaseClsCd.getValue()); //매출입항목코드
  dma_unsettledGapQueryCondition.set("bilgLodeptCd", ed_bilgLodeptCd.getValue()); //부서코드
  dma_unsettledGapQueryCondition.set("acctCd", scwin.ed_acctCd); //회계계정코드
  dma_unsettledGapQueryCondition.set("qryConDtTo", fromDate); //조회일자 From
  dma_unsettledGapQueryCondition.set("qryConDtFm", toDate); //조회일자 TO

  $c.sbm.execute($p, sbm_customerEachUnsettledContents);
};

//-------------------------------------------------------------------------
// 거래처별 미확정 조회 완료시
//-------------------------------------------------------------------------
scwin.sbm_customerEachUnsettledContents_submitDone = function (e) {
  spa_totalRow2.setValue(ds_customerEachUnsettledContents.getTotalRow());
};

//-------------------------------------------------------------------------
// 오더상세 미확정 조회
//-------------------------------------------------------------------------
scwin.gr_customerEachUnsettledContentsList_onClick = function (rowIndex, columnIndex, columnId) {
  dma_unsettledGapQueryCondition.set("sellPurchaseClsCd", rd_sellPurchaseClsCd.getValue()); //매출입항목코드
  dma_unsettledGapQueryCondition.set("bilgLodeptCd", ed_bilgLodeptCd.getValue()); //부서코드
  dma_unsettledGapQueryCondition.set("qryConDtTo", ds_customerEachUnsettledContents.getCellData(rowIndex, "qryConDtTo")); //조회일자 From
  dma_unsettledGapQueryCondition.set("qryConDtFm", ds_customerEachUnsettledContents.getCellData(rowIndex, "qryConDtFm")); //조회일자 TO
  dma_unsettledGapQueryCondition.set("acctCd", scwin.ed_acctCd); //회계계정코드
  dma_unsettledGapQueryCondition.set("clntNo", ds_customerEachUnsettledContents.getCellData(rowIndex, "clntNo")); //거래처코드
  if (cbx_detailAllYn.getValue() == 1) {
    dma_unsettledGapQueryCondition.set("detailAllYn", "ALL"); //전체조회
  }
  $c.sbm.execute($p, sbm_orderEachUnsettledDetail);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (계정코드)
//-------------------------------------------------------------------------
scwin.udc_acct_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, '', ed_acctNm.getValue(), 'F', 'F');
};
scwin.udc_acct_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, '', ed_acctNm.getValue(), 'F', 'F');
};
scwin.udc_acct_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_acctCd, ed_acctNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (물류부서)
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgLodept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLodept_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};
scwin.udc_bilgLodept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgLodeptCd, ed_bilgLodeptNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
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

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      //청구부서코드팝업			
      udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_acct.cfCommonPopUp(scwin.udc_acct_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 부서별 미확정 조회 그리드클릭 이벤트처리
//-------------------------------------------------------------------------
scwin.gr_departmentEachUnsettledContents_CellClick = function (rowIndex, columnIndex, columnId) {
  let qryConDtTo = ica_qryConDtFm.getValue().substring(0, 6) + "01";
  let calDate = new Date();
  let bef3Mm = "";
  let bef2Mm = "";
  let bef1Mm = "";
  let befMm = "";
  calDate = qryConDtTo;
  // 당월
  calDate = ica_qryConDtFm.getValue().substring(0, 6);
  befMm = calDate;
  // 1개월 전   	
  calDate = ica_qryConDtFm.getValue().substring(0, 6) - 1;
  bef1Mm = calDate;
  // 2개월 전
  calDate = ica_qryConDtFm.getValue().substring(0, 6) - 2;
  bef2Mm = calDate;
  // 3개월 전
  calDate = ica_qryConDtFm.getValue().substring(0, 6);
  bef3Mm = calDate;
  if (ds_departmentEachUnsettledContents.getTotalRow() > 0) {
    scwin.f_RetrieveCustomer(befMm, bef1Mm, rowIndex);
  }
};
scwin.sbm_orderEachUnsettledDetail_submitDone = function (e) {
  spa_totalRow3.setValue(ds_orderEachUnsettledDetail.getTotalRow());
};
scwin.btn_init = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  ica_qryConDtFm.setValue("");
  cbx_detailAllYn.setValue(0);
  rd_sellPurchaseClsCd.setValue("0");
};
scwin.runExcel1 = async function () {
  debugger;
  let options = {
    fileName: "미확정 증감 내역조회.xlsx",
    sheetName: "미확정 증감 내역조회"
    // ,
    // useFooter : true
  };
  let grdObj = gr_departmentEachUnsettledContents;
  let infoArr = {};
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.runExcel2 = async function () {
  // {"fileName":"미확정 증감 내역조회.xlsx", "sheetName": "미확정 증감 내역조회"}

  let options = {
    fileName: "미확정 증감 내역조회.xlsx",
    sheetName: "미확정 증감 내역조회",
    useFooter: true
  };
  let grdObj = gr_customerEachUnsettledContentsList;
  let infoArr = {};
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.runExcel3 = async function () {
  // {"fileName":"미확정 증감 내역조회.xlsx", "sheetName": "미확정 증감 내역조회"}

  let options = {
    fileName: "미확정 증감 내역조회.xlsx",
    sheetName: "미확정 증감 내역조회",
    useFooter: true
  };
  let grdObj = gr_orderEachUnsettledDetail;
  let infoArr = {};
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.ds_departmentEachUnsettledContents_ondataload = function () {
  gr_departmentEachUnsettledContents.setFocusedCell(0, 0);
};
scwin.ds_customerEachUnsettledContents_ondataload = function () {
  gr_customerEachUnsettledContentsList.setFocusedCell(0, 0);
};
scwin.ds_orderEachUnsettledDetail_ondataload = function () {
  gr_orderEachUnsettledDetail.setFocusedCell(0, 0);
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    		.guide-wrap{overflow:hidden}\n\n    	'}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'2',id:'rd_sellPurchaseClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'물류부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'4',id:'udc_bilgLodept',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_bilgLodept_onClick','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_qryConDtFm',style:'',mandatory:'true',displayFormat:'yyyy/MM',editType:'select','ev:onviewchange':'scwin.f_dateTitle'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_acctNm',nameId:'ed_acctCd',id:'udc_acct',selectID:'retrieveAcctCdInfo','ev:onclickEvent':'scwin.udc_acct_onClick','ev:onblurCodeEvent':'scwin.udc_acct_onblurCodeEvent',hideName:'true',maxlengthCode:'50',validTitle:'매입대변계정코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'cbx_detailAllYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더별 증감 전체 '}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_init'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부서별 미확정 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_departmentEachUnsettledContents',gridDownYn:'Y',gridDownFn:'scwin.runExcel1',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',fixedColumn:'2',visibleRowNumFix:'true',dataList:'data:ds_departmentEachUnsettledContents',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_departmentEachUnsettledContents',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_departmentEachUnsettledContents_CellClick',visibleRowNum:'3'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'매출부서',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'300',inputType:'text',id:'title2_head',value:'전전월',blockSelect:'false',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'title1_head',value:'월',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'gapBefMm1_head',value:'실적G(F-C)',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'이월A',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'당월입력B',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'누계C(A+B)',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'이월D',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'당월입력E',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'누계F(D+E)',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'sellLodeptCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'befBefMm1',blockSelect:'false',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'befMm1',blockSelect:'false',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'sumBefMm2',blockSelect:'false',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'befMm',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',style:'background-color: #FFFCE0;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mm',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',style:'background-color: #ECF5EB;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumBefMm1',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',style:'background-color: #DFEEDD;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'gapBefMm1',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',expression:'sum("befBefMm1")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'sum("befMm1")',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',expression:'sum("sumBefMm2")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right',expression:'sum("befMm")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',expression:'sum("mm")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',textAlign:'right',expression:'sum("sumBefMm1")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',textAlign:'right',expression:'sum("gapBefMm1")',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_totalRow1',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 미확정 증감현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_customerEachUnsettledContentsList',gridDownYn:'Y',gridDownFn:'scwin.runExcel2',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_customerEachUnsettledContents',fixedColumn:'0',focusMode:'row',id:'gr_customerEachUnsettledContentsList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_customerEachUnsettledContentsList_onClick',readOnly:'true',columnMove:'true',resize:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'거래처',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'6',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',rowSpan:'',value:'전월 미확정(정산이력)',width:'600',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',hidden:'false',id:'column38',inputType:'text',rowSpan:'',style:'',value:'이월 미확정',width:'380',sortable:'false'}},{T:1,N:'w2:column',A:{width:'270',inputType:'text',style:'',id:'column59',value:'당월 미확정 금액',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'당월미확정<br/>누계',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column77',value:'조회To일자',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column80',value:'조회From일자',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'삭제',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'조정후 확정',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'확정차액',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'확정',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'미확정잔액',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'미확정총계',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column55',value:'조정',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'조정차액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'미조정',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'이월기타',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'거래처변경',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'전월실적<br/>당월입력분',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'당월발생분',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'delAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',style:'background-color: #FFFDEF;'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcsnCtrlAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',style:'background-color: #FFFDEF;'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcsnGapCtrlAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnUnctrlAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',style:'background-color: #FFFDEF;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumUnsettledCaryFwrdAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',style:'background-color: #FFFCE0;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totUnsettledCaryFwrdAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',style:'background-color: #FFFAC7;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unsettledCtrlAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',style:'background-color: #ECF5EB;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unsettledGapCtrlAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'background-color: #ECF5EB;',id:'unsettledUnctrlAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'background-color: #ECF5EB;',id:'unsettledEtcAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'background-color: #ECF5EB;',id:'unsettledCustAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'background-color: #ECF5EB;',id:'unsettledBefMmRslts',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'background-color: #ECF5EB;',id:'unsettledThisMm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'background-color: #DFEEDD;',id:'cumUnsettledThisMm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'qryConDtTo',value:'',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'qryConDtFm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column100',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column98',value:'',displayMode:'label',textAlign:'right',expression:'sum("delAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcsnCtrlAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcsnGapCtrlAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column95',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcsnUnctrlAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column94',value:'',displayMode:'label',textAlign:'right',expression:'sum("cumUnsettledCaryFwrdAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',textAlign:'right',expression:'sum("totUnsettledCaryFwrdAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledCtrlAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column91',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledGapCtrlAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledUnctrlAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledEtcAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledCustAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledBefMmRslts")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right',expression:'sum("unsettledThisMm")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right',expression:'sum("cumUnsettledThisMm")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRow2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더 상세정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_edit',label:'저장',style:';visibility:hidden;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_orderEachUnsettledDetail',gridDownYn:'Y',gridDownFn:'scwin.runExcel3',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_orderEachUnsettledDetail',fixedColumn:'0',focusMode:'row',id:'gr_orderEachUnsettledDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'오더번호',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column48',inputType:'text',rowSpan:'2',style:'',value:'TYPE',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'거래처코드',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column83',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column84',value:'매출항목',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column85',value:'실적일자',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'440',inputType:'text',style:'',id:'column86',value:'변경 전',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'530',inputType:'text',style:'',id:'column90',value:'변경 후',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'7',displayMode:'label',id:'column77',inputType:'text',rowSpan:'',style:'',value:'통합 매출입',width:'590',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'매출물량',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'단가',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column55',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'원화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'외화',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'매출물량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',value:'원화',width:'100'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column93',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column94',value:'매출물량',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column95',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'회계처리<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'확정구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'calType',inputType:'text',style:'',value:'',width:'70',colMerge:'true',upperColumn:'odrNo'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfrSellVol',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfrSellUpr',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfrVatAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfrSellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfrSellAmtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aftSellVol',inputType:'text',style:'',value:'',width:'100',textAlign:'right',sortable:'false',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aftSellUpr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',sortable:'false',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aftVatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aftSellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aftSellAmtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',sortable:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVol',inputType:'text',style:'',value:'',width:'100',textAlign:'right',sortable:'false',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',sortable:'false',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtFcrc',value:'',displayMode:'label',textAlign:'right',sortable:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnClsCd',value:'',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column156',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column155',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column154',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column153',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column152',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column151',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column150',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column148',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column147',value:'',displayMode:'label',textAlign:'right',expression:'sum("bfrSellAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column146',value:'',displayMode:'label',textAlign:'right',expression:'sum("bfrSellAmtFcrc")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column145',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column144',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column143',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column142',value:'',displayMode:'label',textAlign:'right',expression:'sum("aftSellAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column141',value:'',displayMode:'label',textAlign:'right',expression:'sum("aftSellAmtFcrc")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column139',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column138',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',textAlign:'right',expression:'sum("sellAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column136',value:'',displayMode:'label',textAlign:'right',expression:'sum("sellAmtFcrc")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRow3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})