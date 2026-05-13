/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_01_11b.xml 51576 5ea2e83299eeb4dd55e733300826b9aa5b1bbf70b4323b654f6e904a6fbba9a6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilBizClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilUprrglClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilTskClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnSts',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilUnitPrice',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'selYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'유류업무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'유류사업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilUprrglClsCd',name:'유류단가정상구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLight',name:'경유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprGasoline',name:'휘발유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprLpg',name:'등유단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confYn',name:'상태',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toQty',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'name23',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'OilunitPriceList',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifylines',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifybody',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilPrice',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RegistFmsOilUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1","action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilPrice_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fixEndDt',action:'/ps.eq.fmsmgnt.fmsoilmgnt.UpdateFixEndDtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fixEndDt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_frmReqApprove',action:'/ps.eq.fmsmgnt.RequestFmsOilUnitPriceApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_approve',target:'_blank',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_frmReqApprove_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.memJson = "";
scwin.empNo = "";
scwin.epId = "";
scwin.userId = "";
scwin.clntNo = "";
scwin.clntNm = "";
scwin.deptCd = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 회원정보를 json 데이터로 모두 받음
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.empNo = scwin.memJson.empNo; // 사원번호
  scwin.epId = scwin.memJson.epId; // 다이렉트 아이디  
  scwin.userId = scwin.memJson.userId;
  scwin.clntNo = "125109";
  scwin.clntNm = "지에스칼텍스(주)여수공장";
  scwin.deptCd = "00276";
  var codeOptions = [{
    grpCd: "TL103",
    compID: "gr_oilUnitPrice:oilTskClsCd"
  },
  // 셀렉트
  {
    grpCd: "TL100",
    compID: "gr_oilUnitPrice:oilBizClsCd"
  },
  // 셀렉트
  {
    grpCd: "TL101",
    compID: "gr_oilUnitPrice:selpchClsCd"
  },
  // 부가세분기구분
  {
    grpCd: "TL102",
    compID: "gr_oilUnitPrice:oilUprrglClsCd"
  },
  // 부가세분기구분
  // { grpCd : "TL201", compID : "gr_oilUnitPrice:clntNm"},
  {
    grpCd: "ZZ021",
    compID: "gr_oilUnitPrice:apprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted 완료 후, 호출됨. 
//-------------------------------------------------------------------------
scwin.ondataload = async function () {
  await scwin.f_Retrieve(); // 화면 자동조회
  ed_stdDt.focus();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_stdDt.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
  ed_endDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  dma_search.set('oilTskClsCd', "F");
  dma_search.set('oilBizClsCd', "01");
  dma_search.set('selpchClsCd', "01");
  dma_search.set('oilUprrglClsCd', "07");
  dma_search.set('clntNo', ed_clntNo.getValue());
  dma_search.set('dcsnSts', lc_dcsnSts.getValue());
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var count = ds_oilUnitPrice.getRowCount();
  if (!(count > 0)) return;
  var options = {
    fileName: "유류판매공장도단가관리.xlsx",
    sheetName: "유류판매공장도단가관리",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1,
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    //evenRowBackgroundColor : "#f5fff5"//excel파일에서 그리드 body의 짝수줄의 배경색
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 10,
    text: "유류판매공장도단가관리",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 10,
    text: `기준일자 [${$c.date.formatDate($p, ed_stdDt.getValue(), "date")} ~ ${$c.date.formatDate($p, ed_endDt.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 10,
    text: `거래처 [${ed_clntNm.getValue()}[${ed_clntNo.getValue()}]]`,
    textAlign: "left",
    fontSize: 10,
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
  dma_search.set('oilTskClsCd', "F");
  dma_search.set('oilBizClsCd', "01");
  dma_search.set('selpchClsCd', "01");
  dma_search.set('oilUprrglClsCd', "07");
  dma_search.set('clntNo', ed_clntNo.getValue());
  dma_search.set('dcsnSts', lc_dcsnSts.getValue());
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
    gr_oilUnitPrice.setColumnReadOnly('oilTskClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('oilBizClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('selpchClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNm', true);
    gr_oilUnitPrice.setColumnReadOnly('oilUprrglClsCd', true);
    gr_oilUnitPrice.setColumnReadOnly('oilkndCd', true);
    gr_oilUnitPrice.setColumnReadOnly('stdDt', true);
    gr_oilUnitPrice.setColumnReadOnly('endDt', true);
  }, 100);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_oilUnitPrice.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      gr_oilUnitPrice.setFocusedCell(0, 0); //tobe추가 : 조회후, 맨 위의 행 포커스
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_oilUnitPrice.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['유류판매기준단가 그리드']); //변경된 정보가 없습니다.
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
  if (!(await $c.gus.cfValidateGrid($p, gr_oilUnitPrice))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (!scwin.f_Check()) return;
  var focusCol = gr_oilUnitPrice.getFocusedColumnIndex();
  ds_oilUnitPrice.insertRow();

  //tobe추가 : 그리드 포커스 셋팅
  gr_oilUnitPrice.setFocusedCell(ds_oilUnitPrice.getRowCount() - 1, focusCol);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'stdDt', $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'endDt', "99999999");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilTskClsCd', "F");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilBizClsCd', "01");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'selpchClsCd', "01");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilUprrglClsCd', "07");
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'oilkndCd', ds_oilUnitPrice.getCellData(ds_oilUnitPrice.getRowPosition() - 1, 'oilkndCd'));
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'bilgAcctDeptCd', scwin.deptCd);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'sellAcctDeptCd', scwin.deptCd);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'clntNo', scwin.clntNo); //매입거래처
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'clntNm', scwin.clntNm); //매입거래처
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'qty', 1);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'toQty', 9999999999);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'uprLight', 0);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'uprGasoline', 0);
  ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'uprLpg', 0);
  gr_oilUnitPrice.setColumnReadOnly('oilTskClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('oilBizClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('selpchClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('clntNo', false);
  gr_oilUnitPrice.setColumnReadOnly('clntNm', true);
  gr_oilUnitPrice.setColumnReadOnly('oilUprrglClsCd', false);
  gr_oilUnitPrice.setColumnReadOnly('oilkndCd', false);
  gr_oilUnitPrice.setColumnReadOnly('stdDt', false);
  gr_oilUnitPrice.setColumnReadOnly('endDt', true);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = async function (gubun) {
  var focusRow = gr_oilUnitPrice.getFocusedRowIndex(); //현재 포커스 되어잇는 row
  var focusCol = gr_oilUnitPrice.getFocusedColumnIndex(); //현재 포커스 되어있는 column

  if (ds_oilUnitPrice.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  var chkCnt = 0;
  var checkRow = gr_oilUnitPrice.getCheckedIndex("selYn"); //체크된 row

  for (var i = 0; i < checkRow.length; i++) {
    var tempStdCd = ds_oilUnitPrice.getCellData(checkRow[i], "apprvStsCd");
    if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
      // 02:상신, 04:중간승인, 05:최종승인
      await $c.gus.cfAlertMsg($p, checkRow[i] + 1 + "번째 항목은 삭제 할 수 없습니다.\n결재상태를 확인해 주시기바랍니다.");
      ds_oilUnitPrice.setRowPosition(checkRow[i]);
      gr_oilUnitPrice.setFocusedCell(checkRow[i], "apprvStsCd");
      return;
    }
    chkCnt++;
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  if (ds_oilUnitPrice.getRowStatus(focusRow) == "C") {
    //생성된 행
    ds_oilUnitPrice.removeRow(focusRow);
  } else {
    ds_oilUnitPrice.deleteRow(focusRow);
    for (var i = 0; i < 22; i++) {
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
      await udc_clnt.cfCommonPopUp(scwin.udc_clnt_callbackFunc, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_clnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  //toeb변경: 해당 부분 무조건 true 타서 팝업창 떠야하나 return됨.
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //if (!$c.gus.cfCanOpenPopup(inObj, pairObj))	return;			// 짝이 되는 오브젝트의 값 제거

  $c.gus.cfClearPairObj($p, pairObj); // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj); // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// tobe 변경 : gr_oilUnitPrice.getCheckedIndex("selYn").length == 0 이렇게 표현식으로 변경
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
  var vEpUsrId = scwin.epId; // EP사용자 ID

  var fineInfo = await scwin.f_getFineItemList(); // 결재대상 (유류단가 정보)

  if (fineInfo.itemSize == 0) {
    await $c.gus.cfAlertMsg($p, "전자결재 대상을 선택해주십시오.");
    return false;
  }
  var checkRow = gr_oilUnitPrice.getCheckedIndex("selYn");
  for (var i = 0; i < checkRow.length; i++) {
    var tempStdCd = ds_oilUnitPrice.getCellData(checkRow[i], "apprvStsCd");
    if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
      // 02:상신, 04:중간승인, 05:최종승인
      await $c.gus.cfAlertMsg($p, checkRow[i] + 1 + "번째 항목은 전자결재를 진행 할 수 없습니다.\n결재상태를 확인해 주시기바랍니다.");
      ds_oilUnitPrice.setRowPosition(checkRow[i]);
      gr_oilUnitPrice.setFocusedCell(checkRow[i], "apprvStsCd");
      return;
    }
  }

  // 사용자 액션(confirm) 이후에 팝업 오픈해야 차단 회피 확률이 높음
  if ((await $c.win.confirm($p, "전자결재 요청하시겠습니까?")) != true) {
    return;
  }
  var vReqApprvTitle = "FMS 유류판매 공장도단가 승인요청_" + toDay; // 결재제목 
  var styleTb = 'class=tb';

  // ===================== 결재 본문 HTML 구성 (기존 그대로) =====================
  var vApprvDtlInfo = '<head>';
  vApprvDtlInfo += '<style type=text/css>';
  vApprvDtlInfo += '  .tb { ';
  vApprvDtlInfo += '    border-top:solid 1px #000000;';
  vApprvDtlInfo += '    border-right:solid 1px #000000;';
  vApprvDtlInfo += '    border-left:solid 1px #000000;';
  vApprvDtlInfo += '    border-bottom:solid 1px #000000;';
  vApprvDtlInfo += '  }';
  vApprvDtlInfo += '</style>';
  vApprvDtlInfo += '</head>';
  vApprvDtlInfo += '<body align=center>';
  vApprvDtlInfo += '<table width=850 cellspacing=0 cellpadding=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '  <tr>';
  vApprvDtlInfo += '    <td height=35 align=center ' + styleTb + '>제 목</td>';
  vApprvDtlInfo += '    <td ' + styleTb + '><b>FMS 유류판매 공장도단가 승인요청 -  (' + toDay + ')</b></td>';
  vApprvDtlInfo += '  </tr>';
  vApprvDtlInfo += '  <tr>';
  vApprvDtlInfo += '    <td colspan=2 ' + styleTb + '>';
  vApprvDtlInfo += '      <table width=850 border=0>';
  vApprvDtlInfo += '        <tr><td colspan=2 height=10 align=center>&nbsp;</td></tr>';
  vApprvDtlInfo += '        <tr><td colspan=2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아래와 같이 FMS 유류판매 공장도단가를 확정하고자 하오니 승인하여 주시기 바랍니다.</td></tr>';
  vApprvDtlInfo += '        <tr><td colspan=2 height=10 align=center>&nbsp;</td></tr>';
  vApprvDtlInfo += '        <tr><td colspan=2 align=center><font face=굴림><b>- 아&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;래 -</b></font></td></tr>';
  vApprvDtlInfo += '        <tr><td colspan=2 height=10 align=center>&nbsp;</td></tr>';
  vApprvDtlInfo += '        <tr>';
  vApprvDtlInfo += '          <td><font face=굴림><b>1. FMS 유류판매  공장도단가 내역</b></font></td>';
  vApprvDtlInfo += '          <td align=right>(단위:리터/원, VAT포함)</td>';
  vApprvDtlInfo += '        </tr>';
  vApprvDtlInfo += '        <tr><td colspan=2 align=right>';
  vApprvDtlInfo += '          <table cellspacing=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '            <col width=150 align=left></col>';
  vApprvDtlInfo += '            <col width=100 align=left></col>';
  vApprvDtlInfo += '            <col width=300 align=right></col>';
  vApprvDtlInfo += '            <col width=150 align=right></col>';
  vApprvDtlInfo += '            <col width=150 align=right></col>';
  vApprvDtlInfo += '            <col width=150 align=right></col>';
  vApprvDtlInfo += '            <tr>';
  vApprvDtlInfo += '              <td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>기준일자</b></font></td>';
  vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처코드</b></font></td>';
  vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처</b></font></td>';
  vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림><b>경유단가</b></font></td>';
  vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림><b>휘발유단가</b></font></td>';
  vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림><b>종료일자</b></font></td>';
  vApprvDtlInfo += '            </tr>';
  var oilCount = 0;
  for (var r = 0; r < ds_oilUnitPrice.getRowCount(); r++) {
    if (ds_oilUnitPrice.getCellData(r, "selYn") == "T") {
      var stdDt1 = ds_oilUnitPrice.getCellData(r, "stdDt");
      var endDt1 = ds_oilUnitPrice.getCellData(r, "endDt");
      vApprvDtlInfo += '            <tr>';
      vApprvDtlInfo += '              <td ' + styleTb + ' height=30 align=center><font size=2 face=굴림>' + stdDt1.substring(0, 4) + '/' + stdDt1.substring(4, 6) + '/' + stdDt1.substring(6, 8) + '</font></td>';
      vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(r, "clntNo") + '</font></td>';
      vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_oilUnitPrice.getCellData(r, "clntNm") + '</font></td>';
      vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, $c.num.parseInt($p, ds_oilUnitPrice.getCellData(r, "uprLight"))) + '</font></td>';
      vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림>' + $c.gus.cfInsertComma($p, $c.num.parseInt($p, ds_oilUnitPrice.getCellData(r, "uprGasoline"))) + '</font></td>';
      vApprvDtlInfo += '              <td ' + styleTb + ' align=center><font size=2 face=굴림>' + endDt1.substring(0, 4) + '/' + endDt1.substring(4, 6) + '/' + endDt1.substring(6, 8) + '</font></td>';
      vApprvDtlInfo += '            </tr>';
      oilCount++;
    }
  }
  vApprvDtlInfo += '          </table>';
  vApprvDtlInfo += '        </td></tr>';
  vApprvDtlInfo += '        <tr><td align=right colspan=2><font face=굴림><b>이상 ' + oilCount + '건</b></font></td></tr>';
  vApprvDtlInfo += '      </table>';
  vApprvDtlInfo += '    </td>';
  vApprvDtlInfo += '  </tr>';
  vApprvDtlInfo += '</table>';
  vApprvDtlInfo += '</body>';
  // ======================================================================

  const params = {
    apprvDocKndCd: vReqApprvDocKndCd,
    reqUserId: vReqUserId,
    epUserId: vEpUsrId,
    apprvTitle: vReqApprvTitle,
    apprvDtlInfo: vApprvDtlInfo,
    OilunitPriceList: fineInfo.itemList,
    bmodifylines: "Y",
    bmodifybody: "Y",
    bmodifyattach: "Y"
  };

  // DataMap에 세팅
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
  var oResult = {};
  oResult.itemList = '';
  oResult.itemSize = 0;
  oResult.itemTotal = 0;
  var checkRow = gr_oilUnitPrice.getCheckedIndex("selYn");
  for (var i = 0; i < checkRow.length; i++) {
    if (oResult.itemList == "") {
      //시작일자, 매출입구분, 판매단가기준, 유류업무구분, 유류사업구분, 유류단가정산구분코드, 수량, 매출거래처번호, 거래처번호
      oResult.itemList += ds_oilUnitPrice.getCellData(checkRow[i], "stdDt") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "selpchClsCd") + ":" + "" + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "oilTskClsCd") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "oilBizClsCd") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "oilUprrglClsCd") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "qty") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "sellClntNo") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "clntNo");
    } else {
      oResult.itemList += "," + ds_oilUnitPrice.getCellData(checkRow[i], "stdDt") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "selpchClsCd") + ":" + "" + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "oilTskClsCd") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "oilBizClsCd") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "oilUprrglClsCd") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "qty") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "sellClntNo") + ":" + ds_oilUnitPrice.getCellData(checkRow[i], "clntNo");
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
  var checkRow = gr_oilUnitPrice.getCheckedIndex("selYn");
  if (checkRow.length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["항목"]); //선택된 @이(가) 없습니다.
    return;
  }
  var cnt = 0;
  if (await $c.win.confirm($p, "거래를 종료하시겠습니까?")) {
    for (var i = 0; i < checkRow.length; i++) {
      if (ds_oilUnitPrice.getCellData(checkRow[i], "endDt") != "99999999") {
        await $c.gus.cfAlertMsg($p, checkRow[i] + 1 + "번째 항목은 종료일자가 9999/99/99이 아닙니다.거래종료를 할수 없습니다.");
        return;
      } else if (!(await $c.gus.cfIsAfterDate($p, ds_oilUnitPrice.getCellData(checkRow[i], "stdDt"), ica_fixEndDt.getValue(), false))) {
        await $c.gus.cfAlertMsg($p, "종료일자는 기준일자보다 이후이어야 합니다.");
        ica_fixEndDt.focus();
        return;
      }
      ds_oilUnitPrice.setCellData(checkRow[i], "fixEndDt", ica_fixEndDt.getValue());
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
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 그리드 안 거래처 돋보기 버튼 클릭시
//-------------------------------------------------------------------------
scwin.gr_oilUnitPrice_ontextimageclick = async function (rowIndex, columnIndex) {
  var colId = gr_oilUnitPrice.getColumnID(columnIndex);
  if (colId == "clntNo") {
    //거채처코드
    var data = ds_oilUnitPrice.getCellData(rowIndex, colId);
    await udc_grClntNo.cfCommonPopUp(scwin.udc_grClntNo_callbackFunc, data, "", 'T', null, null, null, null, null, null, null, null, null); // 거래처
  }
};
scwin.udc_grClntNo_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    var row = ds_oilUnitPrice.getRowPosition();
    ds_oilUnitPrice.setCellData(row, "clntNo", rtnList[0]);
    ds_oilUnitPrice.setCellData(row, "clntNm", rtnList[1]);
  }
};
scwin.gr_oilUnitPrice_onafteredit = function (rowIndex, columnIndex, value) {
  var colId = gr_oilUnitPrice.getColumnID(columnIndex);
  if (colId == "clntNo") scwin.gr_oilUnitPrice_ontextimageclick(rowIndex, columnIndex);
};
scwin.gr_oilUnitPrice_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  // var colId = gr_oilUnitPrice.getColumnID(columnIndex);
  // if (colid == "clntNo") {
  //     gr_oilUnitPrice.UrlImages = SEARCH_BTN;
  // } else if (colid == "stdDt") {
  //     gr_oilUnitPrice.UrlImages = CALENDAR_BTN;
  // }

  var RowStatus = ds_oilUnitPrice.getRowStatus(rowIndex); // ASIS-RowStatus : 0 Normal, 1 Insert, 2 Delete, 3 Update
  // TOBE-            :초기상태:"R", 갱신:"U", 삽입:"C", 삭제:"D", 삽입 후 삭제:"V"
  if (RowStatus == "R" || RowStatus == "D") {
    gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("clntNo", true);
    gr_oilUnitPrice.setColumnReadOnly("clntNm", true);
    gr_oilUnitPrice.setColumnReadOnly("oilUprrglClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("oilkndCd", true);
    gr_oilUnitPrice.setColumnReadOnly("stdDt", true);
    gr_oilUnitPrice.setColumnReadOnly("endDt", true);
    gr_oilUnitPrice.setCellReadOnly(rowIndex, "selYn", false); //체크박스 
    if (RowStatus == "D") gr_oilUnitPrice.setCellReadOnly(rowIndex, "selYn", true); //체크박스  
  } else if (RowStatus == "C") {
    gr_oilUnitPrice.setColumnReadOnly('oilTskClsCd', false);
    gr_oilUnitPrice.setColumnReadOnly('oilBizClsCd', false);
    gr_oilUnitPrice.setColumnReadOnly('selpchClsCd', false);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', false);
    gr_oilUnitPrice.setColumnReadOnly('clntNm', true);
    gr_oilUnitPrice.setColumnReadOnly('oilUprrglClsCd', false);
    gr_oilUnitPrice.setColumnReadOnly('oilkndCd', false);
    gr_oilUnitPrice.setColumnReadOnly('stdDt', false);
    gr_oilUnitPrice.setColumnReadOnly('endDt', true);
  }
  var tempStdCd = ds_oilUnitPrice.getCellData(rowIndex, "apprvStsCd");
  if (tempStdCd == "02" || tempStdCd == "04" || tempStdCd == "05") {
    // 02:상신, 04:중간승인, 05:최종승인
    gr_oilUnitPrice.setColumnReadOnly('stdDt', true);
    gr_oilUnitPrice.setColumnReadOnly('clntNo', true);
    gr_oilUnitPrice.setColumnReadOnly('uprLight', true);
    gr_oilUnitPrice.setColumnReadOnly('uprGasoline', true);
    gr_oilUnitPrice.setColumnReadOnly('uprLpg', true);
  } else {
    if (RowStatus != "D") {
      gr_oilUnitPrice.setColumnReadOnly('stdDt', false);
      gr_oilUnitPrice.setColumnReadOnly('clntNo', false);
      gr_oilUnitPrice.setColumnReadOnly('uprLight', false);
      gr_oilUnitPrice.setColumnReadOnly('uprGasoline', false);
      gr_oilUnitPrice.setColumnReadOnly('uprLpg', false);
    }
  }
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 그리드 상태컬럼 값 설정
//-------------------------------------------------------------------------
scwin.confYn_cutomFormatter = function (data, formattedData, rowIndex, colIndex) {
  if ($c.num.parseInt($p, data) > 0) {
    return "확정";
  } else {
    return "미확정";
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //ds_oilUnitPrice.undoRow(ds_oilUnitPrice.getRowPosition());

  //tobe변경 : 추가된 행 취소시, 화면에서 삭제. 추가된 행이 아닐시, 원래의 값으로 되돌아감.
  if (ds_oilUnitPrice.getRowStatus(ds_oilUnitPrice.getRowPosition()) == "C") {
    ds_oilUnitPrice.removeRow(ds_oilUnitPrice.getRowPosition());
  } else {
    ds_oilUnitPrice.undoRow(ds_oilUnitPrice.getRowPosition());
    gr_oilUnitPrice.setCellReadOnly(ds_oilUnitPrice.getRowPosition(), "selYn", false); //체크박스 
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'dma_search',refEdDt:'endDt',refStDt:'stdDt',style:'',edFromId:'ed_stdDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처    ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',UpperFlagCode:'1',maxlengthCode:'6',id:'udc_clnt','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정상태    ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dcsnSts',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'유류판매공장도단가관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridUpYn:'N',templateYn:'N',id:'udc_topGrd',gridID:'gr_oilUnitPrice',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilUnitPrice',focusMode:'cell',id:'gr_oilUnitPrice',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_oilUnitPrice_ontextimageclick','ev:onafteredit':'scwin.gr_oilUnitPrice_onafteredit',editModeEvent:'ondblclick','ev:oncellindexchange':'scwin.gr_oilUnitPrice_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'column30',inputType:'checkbox',style:'',value:'selYn',width:'50'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column38',inputType:'text',style:'',value:'기준일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'유류업무</br>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'유류사업</br>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'매출입</br>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'유류단가</br>정상구분',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column26',inputType:'text',style:'',value:'거래처</br>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'거래처',width:'300'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column55',inputType:'text',style:'',value:'경유<br/>단가',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column49',inputType:'text',style:'',value:'휘발유</br>단가',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column52',inputType:'text',style:'',value:'등유</br>단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'청구</br>부서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'청구</br>귀속부서 ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'매출</br>부서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'매출</br>귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'text',style:'',value:'종료일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column76',inputType:'text',style:'',value:'결재</br>상태 ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'종료일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',textAlign:'center',trueValue:'T',falseValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',style:'',value:'',width:'100',mandatory:'true',textAlign:'center',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilTskClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilBizClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilUprrglClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'100',mandatory:'true',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'300',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'uprLight',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',applyFormat:'all',maxLength:'11.2',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'uprGasoline',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',applyFormat:'all',maxLength:'11.2',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'uprLpg',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',applyFormat:'all',maxLength:'11.2',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'70',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptCd',inputType:'text',style:'',value:'',width:'70',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confYn',inputType:'text',style:'',value:'',width:'70',textAlign:'center',customFormatter:'scwin.confYn_cutomFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'select',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEndDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',hidden:'true',displayFormat:'####/##/##'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_Cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrl',style:'',type:'button',userAuth:'R',objType:'CtrlBtn','ev:onclick':'scwin.f_RequestElectronicApprove'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자 ',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_fixEndDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'적용일자'}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_fixEndDt',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_fixEndDt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래종료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'gr_clntNo','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent',id:'udc_grClntNo',maxlengthCode:'6',nameId:'gr_clntNm',popupID:'',selectID:'retrieveClntEmpNoList',style:'display: none;',validTitle:''}}]}]}]}]}]})