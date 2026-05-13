/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_01_03b.xml 53637 7e8468c50018ea195d7d3ef01a0633a67724745c435e779574ceb0fe3f0aa999 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilBizClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilUprrglClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilTskClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnSts',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilUnitPrice',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'selYn',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'유류업무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'유류사업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilUprrglClsCd',name:'유류단가정상구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSellClsCd',name:'단가기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'시작수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toQty',name:'종료수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLight',name:'경유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprGasoline',name:'휘발유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLpg',name:'등유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confYn',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'OilunitPriceList',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifylines',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifybody',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submtidone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilPrice',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RegistFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1","action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilPrice_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOilPrice',action:'/ps.eq.fmsmgnt.fmsoilmgnt.ConfirmFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirmOilPrice_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fixEndDt',action:'/ps.eq.fmsmgnt.fmsoilmgnt.UpdateFixEndDtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fixEndDt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_frmReqApprove',action:'/ps.eq.fmsmgnt.RequestFmsOilUnitPriceApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_approve',target:'_blank',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_frmReqApprove_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.clntNo = "125109";
scwin.clntNm = "지에스칼텍스(주)여수공장";
scwin.deptCd = "00276";
scwin.userId = "";
scwin.empNo = "";
scwin.epId = "";
scwin.changRow = -1;

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //로그인정보추출
  var login = $c.data.getMemInfo($p);
  scwin.userId = login.userId;
  scwin.empNo = login.empNo;
  scwin.epId = login.epId;
  const codeOptions = [{
    grpCd: "TL103",
    compID: "gr_oilUnitPrice:oilTskClsCd"
  } // 셀렉트
  , {
    grpCd: "TL100",
    compID: "gr_oilUnitPrice:oilBizClsCd"
  } // 셀렉트
  , {
    grpCd: "TL101",
    compID: "gr_oilUnitPrice:selpchClsCd"
  } // 부가세분기구분
  , {
    grpCd: "TL102",
    compID: "gr_oilUnitPrice:oilUprrglClsCd"
  }
  // , { grpCd : "TL201", compID : "gr_oilUnitPrice:clntNm"}
  , {
    grpCd: "TL110",
    compID: "gr_oilUnitPrice:oilSellClsCd"
  }, {
    grpCd: "ZZ021",
    compID: "gr_oilUnitPrice:apprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = async function () {
  await scwin.f_Retrieve();
  setTimeout(function () {
    ed_stdDt.focus();
  }, 100);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_stdDt.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
  ed_endDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));

  //조회데이터 셋팅
  dma_search.set("stdDt", ed_stdDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("dcsnSts", lc_dcsnSts.getValue());
  dma_search.set("oilTskClsCd", "F");
  dma_search.set("oilBizClsCd", "01");
  dma_search.set("selpchClsCd", "01");
  dma_search.set("oilUprrglClsCd", "02");
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var options = {
    fileName: "유류구매단가.xlsx",
    sheetName: "유류구매단가",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1,
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    // evenRowBackgroundColor : "#f5fff5"//excel파일에서 그리드 body의 짝수줄의 배경색
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: "유류구매단가",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: `기준일자 [${$c.date.formatDate($p, ed_stdDt.getValue(), "date")} ~ ${$c.date.formatDate($p, ed_endDt.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: `주유소 [${ed_clntNm.getValue()}[${ed_clntNo.getValue()}]]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_oilUnitPrice, options, infoArr);
};

//-------------------------------------------------------------------------
// 조회기간 체크
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_stdDt, ed_endDt]))) return;
  if (!(await $c.gus.cfIsAfterDate($p, ed_stdDt.getValue(), ed_endDt.getValue(), false))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자가 종료일자 이전이어야 합니다
    ed_stdDt.focus();
    return;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  var vChkVal = await scwin.f_CheckAdptDt(); //날짜 체크한 결과 값을 리턴
  if (!vChkVal) {
    //true or false 결과을 체크하여 잘못들어갔다면, false값 리턴
    return false;
  }

  //ds_search.UseChangeInfo = "false";
  //조회데이터 셋팅
  dma_search.set("stdDt", ed_stdDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("dcsnSts", lc_dcsnSts.getValue());
  dma_search.set("oilTskClsCd", "F");
  dma_search.set("oilBizClsCd", "01");
  dma_search.set("selpchClsCd", "01");
  dma_search.set("oilUprrglClsCd", "02");
  $c.sbm.execute($p, sbm_retrieve);
  setTimeout(function () {
    gr_oilUnitPrice.setColumnReadOnly('oilTskClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('oilBizClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('selpchClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNm', true);
    gr_oilUnitPrice.setColumnReadOnly('oilUprrglClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('oilkndCd', true);
    gr_oilUnitPrice.setColumnReadOnly('stdDt', true);
    gr_oilUnitPrice.setColumnReadOnly('endDt', true);
    gr_oilUnitPrice.setColumnReadOnly('qty', true);
    gr_oilUnitPrice.setColumnReadOnly('toQty', true);
  }, 100);
};
scwin.sbm_retrieve_submtidone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_oilUnitPrice.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gr_oilUnitPrice.setFocusedCell(0, 0); //그리드 초기포커스
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_oilUnitPrice.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['유류단가 그리드']); //변경된 정보가 없습니다.
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_oilUnitPrice]))) return;
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //저장하시겠습니까?
    $c.sbm.execute($p, sbm_saveOilPrice);
  }
};
scwin.sbm_saveOilPrice_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var deleteRow = ds_oilUnitPrice.getRowIndexByStatus("D");
    if (deleteRow.length > 0) {
      ds_oilUnitPrice.removeRows(deleteRow);
    }
    ds_oilUnitPrice.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
  ;
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Check = async function () {
  var validArry = [{
    id: "stdDt",
    name: "기준일자",
    key: true
  }, {
    id: "oilTskClsCd",
    name: "유류업무구분",
    key: true
  }, {
    id: "oilBizClsCd",
    name: "유류사업구분",
    key: true
  }, {
    id: "selpchClsCd",
    name: "매출입구분",
    key: true
  }, {
    id: "oilUprrglClsCd",
    name: "유류단가정상구분",
    key: true
  }, {
    id: "clntNm",
    name: "거래처",
    key: true
  }, {
    id: "qty",
    name: "시작수량",
    key: true
  }];
  let gridName = "유류구매단가그리드";
  if (!(await $c.gus.cfValidateGrid($p, gr_oilUnitPrice, null, null, validArry, gridName))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = async function (e) {
  if (!(await scwin.f_Check())) {
    return;
  }
  ds_oilUnitPrice.insertRow();

  //tobe추가 : 그리드 getRowPosition셋팅
  gr_oilUnitPrice.setFocusedCell(ds_oilUnitPrice.getRowCount() - 1, "selYn");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'stdDt', $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'endDt', "99999999");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilTskClsCd', "F");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilBizClsCd', "01");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'selpchClsCd', "01");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilUprrglClsCd', "02");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilkndCd', ds_oilUnitPrice.getCellData(ds_oilUnitPrice.getRowPosition() - 1, 'oilkndCd'));
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'bilgAcctDeptCd', scwin.deptCd);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'sellAcctDeptCd', scwin.deptCd);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'clntNo', scwin.clntNo); //거래처
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'clntNm', scwin.clntNm); //거래처
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilSellClsCd', "07"); // 유류판매구분코드 : 01 공장도가, 07 판매기준단가

  gr_oilUnitPrice.setColumnReadOnly('oilTskClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('oilBizClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('selpchClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('clntNo', false);
  gr_oilUnitPrice.setColumnReadOnly('clntNm', true);
  gr_oilUnitPrice.setColumnReadOnly('oilUprrglClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('oilkndCd', false);
  gr_oilUnitPrice.setColumnReadOnly('stdDt', false);
  gr_oilUnitPrice.setColumnReadOnly('endDt', true);
  gr_oilUnitPrice.setColumnReadOnly('qty', false);
  gr_oilUnitPrice.setColumnReadOnly('toQty', false);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = async function (e) {
  if (ds_oilUnitPrice.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  var chkCnt = 0;
  var chkRowIdx = gr_oilUnitPrice.getCheckedIndex("selYn");
  var focusRow = gr_oilUnitPrice.getFocusedRowIndex(); //현재 포커스 되어있는 row
  var focusCol = gr_oilUnitPrice.getFocusedColumnIndex(); //현재 포커스 되어있는 column

  for (var i = 0; i < chkRowIdx.length; i++) {
    var tempStdCd = ds_oilUnitPrice.getCellData(chkRowIdx[i], "apprvStsCd");
    if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
      // 02:상신, 04:중간승인, 05:최종승인
      await $c.gus.cfAlertMsg($p, chkRowIdx[i] + 1 + "번째 항목은 삭제 할 수 없습니다.\n결재상태를 확인해 주시기바랍니다.");
      ds_oilUnitPrice.setRowPosition(chkRowIdx[i]);
      gr_oilUnitPrice.setFocusedCell(chkRowIdx[i], "apprvStsCd");
      return;
    }
    chkCnt++;
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }

  //ds_oilUnitPrice.DeleteRow(ds_oilUnitPrice.RowPosition);

  //tobe 변경 : 추가된 행 삭제시 화면에서도 바로 삭제. 추가된 행이 아닌경우, 화면에서는 지워지지 않고 status만 삭제표시
  if (ds_oilUnitPrice.getRowStatus(focusRow) == "C") {
    //추가된 행
    ds_oilUnitPrice.removeRow(focusRow);
  } else {
    ds_oilUnitPrice.deleteRow(focusRow);
    for (var i = 0; i < 23; i++) {
      ds_oilUnitPrice.setCellData(focusRow, ds_oilUnitPrice.getColumnID(i), ds_oilUnitPrice.getOriginalCellData(focusRow, ds_oilUnitPrice.getColumnID(i)));
    }

    //deleteRow 이후, 포커스 유지
    gr_oilUnitPrice.setFocusedCell(focusRow, focusCol);
  }
};

//-------------------------------------------------------------------------
// 	팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처
      await udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callbackFunc, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_clntNo_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return; // 짝이 되는 오브젝트의 값 제거

  $c.gus.cfClearPairObj($p, pairObj); // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj); // inObj가 코드 필드일 경우 팝업

  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// tobe삭제 : gr_oilUnitPrice.getCheckedIndex("selYn").length == 0 변경하여 진행
// 체크박스 선택 상태 유무 체크 
//-------------------------------------------------------------------------
// scwin.f_checkflag = function(){
//     for( var idx=1; idx <= ds_oilUnitPrice.CountRow ; idx++) {
//         if (ds_oilUnitPrice.NameValue(idx, "selYn") == "T"){
//             return true;
//         }
//     }
//     return false;
// };

//-------------------------------------------------------------------------
// 전자결제 
//-------------------------------------------------------------------------
scwin.f_RequestElectronicApprove = async function (e) {
  var toDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  var vReqApprvDocKndCd = "021"; // 결재문서종류 -- 유류판매단가 내역
  var vReqUserId = scwin.userId; // 결재요청자 ID
  var vEpUsrId = scwin.epId; //f_getSSOInfo();  				// EP사용자 ID

  var fineInfo = await scwin.f_getFineItemList(); // 결재대상 (유류단가 정보)

  if (fineInfo.itemSize == 0) {
    await $c.gus.cfAlertMsg($p, "전자결재 대상을 선택해주십시오.");
    return false;
  }
  var chkRowIdx = gr_oilUnitPrice.getCheckedIndex("selYn");
  for (var i = 0; i < chkRowIdx.length; i++) {
    var tempStdCd = ds_oilUnitPrice.getCellData(chkRowIdx[i], "apprvStsCd");
    if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
      // 02:상신, 04:중간승인, 05:최종승인
      await $c.gus.cfAlertMsg($p, chkRowIdx[i] + 1 + "번째 항목은 전자결재를 진행 할 수 없습니다.\n결재상태를 확인해 주시기바랍니다.");
      ds_oilUnitPrice.setRowPosition(chkRowIdx[i]);
      gr_oilUnitPrice.setFocusedCell(chkRowIdx[i], "apprvStsCd");
      return;
    }
  }
  if (!(await $c.win.confirm($p, "전자결재 요청하시겠습니까?"))) return;
  var vReqApprvTitle = "FMS 유류구매단가 승인요청_" + toDay; //결재제목 

  var styleTb = 'class=tb';
  var vApprvDtlInfo = '<head>';
  vApprvDtlInfo += '<style type=text/css>';
  vApprvDtlInfo += '	.tb { ';
  vApprvDtlInfo += '		border-top:solid 1px #000000;';
  vApprvDtlInfo += '		border-right:solid 1px #000000;';
  vApprvDtlInfo += '		border-left:solid 1px #000000; ';
  vApprvDtlInfo += '		border-bottom:solid 1px #000000;';
  vApprvDtlInfo += '	}';
  vApprvDtlInfo += '</style>';
  vApprvDtlInfo += '</head>';
  vApprvDtlInfo += '<body align=center>';
  vApprvDtlInfo += '<table width=850 cellspacing=0 cellpadding=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td height=35 align=center ' + styleTb + '>제 목</td>';
  vApprvDtlInfo += '		<td ' + styleTb + '><b>FMS 유류구매단가 승인요청 -  (' + toDay + ')</b></td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td colspan=2 ' + styleTb + '>';
  vApprvDtlInfo += '			<table width=850 border=0>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아래와 같이 FMS 유류구매단가를 확정하고자 하오니 승인하여 주시기 바랍니다.</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 align=center><font face=굴림><b>- 아&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;래 -</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td><font face=굴림><b>1. FMS 유류구매단가 내역</b></font></td>';
  vApprvDtlInfo += '					<td align=right>(단위:리터/원, VAT포함)</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 align=right>';
  vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '							<col width=150 align=left></col>';
  vApprvDtlInfo += '							<col width=100 align=left></col>';
  vApprvDtlInfo += '							<col width=200 align=right></col>';
  vApprvDtlInfo += '							<col width=100 align=right></col>';
  vApprvDtlInfo += '							<col width=100 align=right></col>';
  vApprvDtlInfo += '							<col width=100 align=right></col>';
  vApprvDtlInfo += '							<col width=100 align=right></col>';
  vApprvDtlInfo += '							<col width=100 align=right></col>';
  vApprvDtlInfo += '							<tr>';
  vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>기준일자</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처코드</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>시작수량</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>종료수량</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>경유단가</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>휘발유단가</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>종료일자</b></font></td>';
  vApprvDtlInfo += '							</tr>';
  var oilCount = 0;
  for (var i = 0; i < chkRowIdx.length; i++) {
    var stdDt1 = ds_oilUnitPrice.getCellData(chkRowIdx[i], "stdDt");
    var endDt1 = ds_oilUnitPrice.getCellData(chkRowIdx[i], "endDt");
    vApprvDtlInfo += '							<tr>';
    vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림>' + stdDt1.substring(0, 4) + '/' + stdDt1.substring(4, 6) + '/' + stdDt1.substring(6, 8) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(chkRowIdx[i], "clntNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(chkRowIdx[i], "clntNm") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(chkRowIdx[i], "qty") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(chkRowIdx[i], "toQty") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, $c.num.parseInt($p, ds_oilUnitPrice.getCellData(chkRowIdx[i], "uprLight"))) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, $c.num.parseInt($p, ds_oilUnitPrice.getCellData(chkRowIdx[i], "uprGasoline"))) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + endDt1.substring(0, 4) + '/' + endDt1.substring(4, 6) + '/' + endDt1.substring(6, 8) + '</font></td>';
    vApprvDtlInfo += '							</tr>';
    oilCount++;
  }
  vApprvDtlInfo += '						</table>';
  vApprvDtlInfo += '					</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td align=right colspan=2><font face=굴림><b>이상 ' + oilCount + '건</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '			</table>';
  vApprvDtlInfo += '		</td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '</table>';
  vApprvDtlInfo += '</body>';

  // ======================================================================

  const params = {
    apprvDocKndCd: vReqApprvDocKndCd,
    //결재문서종류
    reqUserId: vReqUserId,
    //결재요청자
    epUserId: vEpUsrId,
    //EP사용자
    apprvTitle: vReqApprvTitle,
    //결재제목
    apprvDtlInfo: vApprvDtlInfo,
    //결재문서양식
    OilunitPriceList: fineInfo.itemList,
    //결제대상(유류정보)
    bmodifylines: "Y",
    // 문서정보 변경 가능 여부
    bmodifybody: "Y",
    // 문서 본문 수정 여부
    bmodifyattach: "Y" // 첨부파일 기능 활성화 여부
  };
  //데이터셋에 정보설정
  dma_approve.setJSON(params);

  // 여기부터가 핵심: f_aprv처럼 팝업 + POST submit
  let url = "/ps.eq.fmsmgnt.RequestFmsOilUnitPriceApproveCMD.do";
  let targetName = "aprvPopup"; // 고정 이름 재사용

  var data = dma_approve.getJSON() || {};
  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = targetName;

  // 팝업 차단 회피: 사용자 confirm 이후 즉시 open
  const win = window.open("", targetName);
  if (!win) {
    console.warn("Popup blocked");
    // 필요하면 여기서 alert 처리
    // $c.win.alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해 주세요.");
  }
  Object.keys(data).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;

    // 배열/객체는 서버가 JSON 문자열로 받는 구조인지 확인 필요.
    // 보통은 stringify 해서 보내는 게 안전함.
    const val = data[key];
    input.value = val && typeof val === "object" ? JSON.stringify(val) : (val ?? "").toString();
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

//-------------------------------------------------------------------------
// 전자결재를 위한 범칙금 리스트 정보와 건수, 총금액을 리턴한다
//-------------------------------------------------------------------------
scwin.f_getFineItemList = function () {
  var oResult = {
    itemList: "",
    itemSize: 0,
    itemTotal: 0
  };
  var chkRowIdx = gr_oilUnitPrice.getCheckedIndex("selYn");
  for (var i = 0; i < chkRowIdx.length; i++) {
    if (oResult.itemList == "") {
      //시작일자, 매출입구분, 판매단가기준, 유류업무구분, 유류사업구분, 유류단가정산구분코드, 수량, 매출거래처번호, 거래처번호
      oResult.itemList += ds_oilUnitPrice.getCellData(chkRowIdx[i], "stdDt") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "selpchClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilSellClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilTskClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilBizClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilUprrglClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "qty") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "sellClntNo") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "clntNo");
    } else {
      oResult.itemList += "," + ds_oilUnitPrice.getCellData(chkRowIdx[i], "stdDt") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "selpchClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilSellClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilTskClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilBizClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "oilUprrglClsCd") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "qty") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "sellClntNo") + ":" + ds_oilUnitPrice.getCellData(chkRowIdx[i], "clntNo");
    }
    oResult.itemSize += 1;
    oResult.itemTotal += 1;
  }
  return oResult;
};

//-------------------------------------------------------------------------
// 거래종료
//-------------------------------------------------------------------------
scwin.f_fixEndDt = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ica_fixEndDt]))) return;
  var chkRowIdx = gr_oilUnitPrice.getCheckedIndex("selYn"); // 체크된 Row의 인덱스

  if (chkRowIdx.length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]); //선택된 @이(가) 없습니다.
    return;
  }
  var cnt = 0;
  if (await $c.win.confirm($p, "거래를 종료하시겠습니까?")) {
    for (var i = 0; i < chkRowIdx.length; i++) {
      if (ds_oilUnitPrice.getCellData(chkRowIdx[i], "endDt") != "99999999") {
        await $c.gus.cfAlertMsg($p, chkRowIdx[i] + 1 + "번째 항목은 종료일자가 9999/99/99이 아닙니다.거래종료를 할수 없습니다.");
        return;
      } else if (!(await $c.gus.cfIsAfterDate($p, ds_oilUnitPrice.getCellData(chkRowIdx[i], "stdDt"), ica_fixEndDt.getValue(), false))) {
        await $c.gus.cfAlertMsg($p, "종료일자는 기준일자보다 이후이어야 합니다.");
        ica_fixEndDt.focus();
        return;
      }
      ds_oilUnitPrice.setCellData(chkRowIdx[i], "fixEndDt", ica_fixEndDt.getValue());
      cnt++;
    }
    if (cnt > 0) {
      $c.sbm.execute($p, sbm_fixEndDt);
    }
  }
};
scwin.sbm_fixEndDt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
  ;
};
scwin.gr_oilUnitPrice_ontextimageclick = async function (rowIndex, columnIndex) {
  var colId = gr_oilUnitPrice.getColumnID(columnIndex);
  if (colId == "clntNo") {
    await udc_grclnt.cfCommonPopUp(scwin.udc_grclnt_callbackFunc, ds_oilUnitPrice.getCellData(rowIndex, 'clntNo'), "", 'T', null, null, null, null, null, null, null, null, null); // 거래처
  }
};
scwin.udc_grclnt_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), "clntNo", rtnList[0]);
    ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), "clntNm", rtnList[1]);
  }
};
scwin.gr_oilUnitPrice_onafteredit = async function (rowIndex, columnIndex, value) {
  var colId = gr_oilUnitPrice.getColumnID(columnIndex);
  if (colId == "clntNo") {
    await udc_grclnt.cfCommonPopUp(scwin.udc_grclnt_callbackFunc, ds_oilUnitPrice.getCellData(rowIndex, 'clntNo'), "", 'T', null, null, null, null, null, null, null, null, null); // 거래처
  } else if (colId == "uprLight" || colId == "uprGasoline" || colId == "uprLpg") {
    if (value == "") {
      ds_oilUnitPrice.setCellData(rowIndex, colId, 0);
    }
  }
};
scwin.gr_oilUnitPrice_oncolumnindexchange = function (columnIndex, oldColumnIndex) {
  // if (colid == "clntNo") {
  //     gr_oilUnitPrice.UrlImages = SEARCH_BTN;
  // } else if (colid == "stdDt") {
  //     gr_oilUnitPrice.UrlImages = CALENDAR_BTN;
  // }
  var rowIndex = gr_oilUnitPrice.getFocusedRowIndex();
  var RowStatus = ds_oilUnitPrice.getRowStatus(rowIndex); // RowStatus : ASIS - 0 Normal, 1 Insert, 2 Delete, 3 Update
  //             TOBE - 초기상태:"R", 갱신:"U", 삽입:"C", 삭제:"D", 삽입 후 삭제:"V"
  if (RowStatus == "R" || RowStatus == "D") {
    gr_oilUnitPrice.setColumnReadOnly('stdDt', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', true);
    gr_oilUnitPrice.setColumnReadOnly('uprLight', true);
    gr_oilUnitPrice.setColumnReadOnly('uprGasoline', true);
    gr_oilUnitPrice.setColumnReadOnly('uprLpg', true);
    gr_oilUnitPrice.setColumnReadOnly('qty', true);
    gr_oilUnitPrice.setColumnReadOnly('toQty', true);
    gr_oilUnitPrice.setCellReadOnly(rowIndex, "selYn", false);
    if (RowStatus == "D") gr_oilUnitPrice.setCellReadOnly(rowIndex, "selYn", true);
  } else if (RowStatus == "C") {
    gr_oilUnitPrice.setColumnReadOnly('stdDt', false);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', false);
    gr_oilUnitPrice.setColumnReadOnly('uprLight', false);
    gr_oilUnitPrice.setColumnReadOnly('uprGasoline', false);
    gr_oilUnitPrice.setColumnReadOnly('uprLpg', false);
    gr_oilUnitPrice.setColumnReadOnly('qty', false);
    gr_oilUnitPrice.setColumnReadOnly('toQty', false);
  }
  var tempStdCd = ds_oilUnitPrice.getCellData(rowIndex, "apprvStsCd");
  if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
    // 02:상신, 04:중간승인, 05:최종승인
    gr_oilUnitPrice.setColumnReadOnly('stdDt', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', true);
    gr_oilUnitPrice.setColumnReadOnly('uprLight', true);
    gr_oilUnitPrice.setColumnReadOnly('uprGasoline', true);
    gr_oilUnitPrice.setColumnReadOnly('uprLpg', true);
    gr_oilUnitPrice.setColumnReadOnly('qty', true);
    gr_oilUnitPrice.setColumnReadOnly('toQty', true);
  } else {
    if (RowStatus != "D") {
      // tobe 추가
      gr_oilUnitPrice.setColumnReadOnly('stdDt', false);
      gr_oilUnitPrice.setColumnReadOnly('clntNo', false);
      gr_oilUnitPrice.setColumnReadOnly('uprLight', false);
      gr_oilUnitPrice.setColumnReadOnly('uprGasoline', false);
      gr_oilUnitPrice.setColumnReadOnly('uprLpg', false);
      gr_oilUnitPrice.setColumnReadOnly('qty', false);
      gr_oilUnitPrice.setColumnReadOnly('toQty', false);
    }
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function (e) {
  if (ds_oilUnitPrice.getRowStatus(ds_oilUnitPrice.getRowPosition()) == "C") {
    ds_oilUnitPrice.removeRow(ds_oilUnitPrice.getRowPosition());
  } else {
    ds_oilUnitPrice.undoRow(ds_oilUnitPrice.getRowPosition());
    gr_oilUnitPrice.setCellReadOnly(ds_oilUnitPrice.getRowPosition(), "selYn", false); //체크박스 
  }
};

//-------------------------------------------------------------------------
// 그리드 confYn 값에 따른데이터 셋팅
//-------------------------------------------------------------------------
scwin.confYn_displayFormatter = function (data) {
  if (data > 0) {
    return "확정";
  } else {
    return "미확정";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_stdDt',edToId:'ed_endDt',mandatoryTo:'true',mandatoryFrom:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntEmpNoList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',id:'udc_clntNo',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dcsnSts',style:'width: 150px;',submenuSize:'fixed',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'유류구매단가',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',templateYn:'N',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_oilUnitPrice'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilUnitPrice',focusMode:'cell',id:'gr_oilUnitPrice',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:ontextimageclick':'scwin.gr_oilUnitPrice_ontextimageclick','ev:onafteredit':'scwin.gr_oilUnitPrice_onafteredit',rowStatusVisible:'true','ev:oncolumnindexchange':'scwin.gr_oilUnitPrice_oncolumnindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'기준일자',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'유류업무</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'유류사업</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'매출입</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'유류단가</br>정상구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'거래처</br>코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'거래처',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'단가</br>기준',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'시작</br>수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'종료</br>수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'경유<br>단가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'휘발유</br>단가 ',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'등유</br>단가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'청구</br>부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'청구</br>귀속부서 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'매출</br>부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'매출</br>귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'결재</br>상태 ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'종료일자',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',style:'',value:'',width:'80',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilTskClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilBizClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilUprrglClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'100',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilSellClsCd',inputType:'select',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',mandatory:'true',dataType:'number',displayFormat:'#,###',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'toQty',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'uprLight',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'uprGasoline',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'uprLpg',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'bilgAcctDeptCd',value:'',displayMode:'label',viewType:'default',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'sellAcctDeptCd',value:'',displayMode:'label',viewType:'default',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'endDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'confYn',value:'',displayMode:'label',displayFormatter:'scwin.confYn_displayFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'apprvStsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixEndDt',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_approve',style:'',type:'button','ev:onclick':'scwin.f_RequestElectronicApprove',userAuth:'R',objType:'CtrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'적용일자 ',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_fixEndDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',title:'적용일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_fixEndDt',style:'',type:'button','ev:onclick':'scwin.f_fixEndDt',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래종료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'ed_grclntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',id:'udc_grclnt',nameId:'ed_grclntNm',popupID:'',selectID:'retrieveClntEmpNoList',style:'display: none',validTitle:''}}]}]}]}]}]})