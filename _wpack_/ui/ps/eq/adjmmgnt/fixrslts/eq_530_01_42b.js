/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_42b.xml 33571 7fe4f73485ed5b48c1a5768b359f3f5edd29a13e96452120999f4c909496bb69 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cFix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aFixPartAmt',name:'정비 부품비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'aPaintAmt',name:'와이어 소모품',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'aAmt',name:'계',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcoilAmt',name:'잡유비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'tireAmt',name:'타이어비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fixPartAmt',name:'정비 부품비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'machineAmt',name:'기계 장치비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fixUseUpAmt',name:'소모품비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'paintAmt',name:'와이어 소모품',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'carAmt',name:'차량 운반구',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'외주 수선비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'정비 부품비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAcctCd',name:'와이어 소모품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repFixWrkPlCd',name:'잡유비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repFixWrkPlNm',name:'타이어비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixPartAmt',name:'정비 부품비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcoilAmt',name:'기계 장치비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paintAmt',name:'소모품비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tireAmt',name:'와이어 소모품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixUseUpAmt',name:'차량 운반구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carAmt',name:'외주 수선비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'machineAmt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accidentTotAmt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.startDt = scwin.strCurDate.substring(0, 6) + "01";
scwin.endDt = $c.date.addMonth($p, scwin.startDt, 1);
scwin.endDt = $c.date.addDate($p, scwin.endDt, -1);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_wrkStDt.setValue(scwin.startDt);
  ed_wrkEndDt.setValue(scwin.endDt);
  //-------------------------------------------------------------------------
  // 사업부문combo데이터호출 조회
  //-------------------------------------------------------------------------
  sbm_co_ds_combo1.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveHomeClsList&strVal=&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo1);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); // 정비소속구분코드

  ed_wrkStDt.focus();

  // scwin.f_gridInit();
};
scwin.f_gridDataSet = async function () {
  ds_cFix_work_list.removeAll();
  if (ds_fix_work_list.getRowCount() == 0) {
    totalRows.setValue("0");
    return;
  }
  let fixWrkPlCd = "";
  let cFixWrkPlCd = "";
  let cAcctDeptNm = "";
  let acctDeptNm = "";
  let dsCnt = -1; // 가공한 데이터셋에 셋팅하기 위한 Count

  for (i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    fixWrkPlCd = ds_fix_work_list.getCellData(i, "fixWrkPlCd");
    acctDeptNm = ds_fix_work_list.getCellData(i, "acctDeptNm");
    if (fixWrkPlCd != cFixWrkPlCd || acctDeptNm != cAcctDeptNm) {
      ++dsCnt;
      ds_cFix_work_list.insertRow();
      ds_cFix_work_list.setCellData(dsCnt, "fixWrkPlCd", ds_fix_work_list.getCellData(i, "fixWrkPlCd"));
      ds_cFix_work_list.setCellData(dsCnt, "acctDeptNm", ds_fix_work_list.getCellData(i, "acctDeptNm"));
      // ds_cFix_work_list.setCellData(dsCnt , "fixWrkPlNm"    , ds_fix_work_list.getCellData(i , "fixWrkPlNm"    ));        
    }
    cFixWrkPlCd = ds_fix_work_list.getCellData(i, "fixWrkPlCd");
    cAcctDeptNm = ds_fix_work_list.getCellData(i, "acctDeptNm");
    if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000001") {
      // 정비부품비(000001)
      if (ds_fix_work_list.getCellData(i, "fixWrkPlNm") == "accident") {
        // 사고
        ds_cFix_work_list.setCellData(dsCnt, "aFixPartAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
      } else {
        ds_cFix_work_list.setCellData(dsCnt, "fixPartAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
      }
    } else if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000004") {
      // 잡유비(000004)
      ds_cFix_work_list.setCellData(dsCnt, "etcoilAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
    } else if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000016") {
      // 페인트비(000016)
      if (ds_fix_work_list.getCellData(i, "fixWrkPlNm") == "accident") {
        // 사고
        ds_cFix_work_list.setCellData(dsCnt, "aPaintAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
      } else {
        ds_cFix_work_list.setCellData(dsCnt, "paintAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
      }
    } else if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000002") {
      // 타이어비 (000002)
      ds_cFix_work_list.setCellData(dsCnt, "tireAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
    } else if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000015") {
      // 소모품비(000015)
      ds_cFix_work_list.setCellData(dsCnt, "fixUseUpAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
    } else if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000009") {
      // 차량운반구(000009)
      ds_cFix_work_list.setCellData(dsCnt, "carAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
    } else if (ds_fix_work_list.getCellData(i, "outAcctCd") == "000007") {
      // 기계장치비(000007)
      ds_cFix_work_list.setCellData(dsCnt, "machineAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
    } else {
      // 외주수선비(외주수선비)
      ds_cFix_work_list.setCellData(dsCnt, "outAmt", ds_fix_work_list.getCellData(i, "bilgAmt"));
    }
  }
  for (let i = 0; i < ds_cFix_work_list.getRowCount(); i++) {
    let aFixPartAmt = Number(ds_cFix_work_list.getCellData(i, "aFixPartAmt"));
    let fixPartAmt = Number(ds_cFix_work_list.getCellData(i, "fixPartAmt"));
    let etcoilAmt = Number(ds_cFix_work_list.getCellData(i, "etcoilAmt"));
    let aPaintAmt = Number(ds_cFix_work_list.getCellData(i, "aPaintAmt"));
    let paintAmt = Number(ds_cFix_work_list.getCellData(i, "paintAmt"));
    let tireAmt = Number(ds_cFix_work_list.getCellData(i, "tireAmt"));
    let fixUseUpAmt = Number(ds_cFix_work_list.getCellData(i, "fixUseUpAmt"));
    let carAmt = Number(ds_cFix_work_list.getCellData(i, "carAmt"));
    let machineAmt = Number(ds_cFix_work_list.getCellData(i, "machineAmt"));
    let outAmt = Number(ds_cFix_work_list.getCellData(i, "outAmt"));
    let data = aFixPartAmt + fixPartAmt + etcoilAmt + aPaintAmt + paintAmt + tireAmt + fixUseUpAmt + carAmt + machineAmt + outAmt;
    ds_cFix_work_list.setCellData(i, "totAmt", data);
  }
  ;

  // ds_cFix_work_list.resetStatus();

  // ds_fix_work_list.removeAll();
  totalRows.setValue(ds_cFix_work_list.getRowCount());
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_wrkStDt, ed_wrkEndDt]))) return;

  // let st = Number(ed_wrkStDt.getValue());
  // let ed = Number(ed_wrkEndDt.getValue());

  // if ((ed - st) > 30) {
  //     $c.gus.cfAlertMsg(MSG_CM_ERR_041, ["조회기간", "한달이상"]);
  //     ed_wrkStDt.focus();
  //     return;
  // }

  if (ed_wrkStDt.getValue() > ed_wrkEndDt.getValue()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return;
  }

  // if ( !$c.gus.cfIsAfterDate( ed_wrkEndDt.getValue() , scwin.strCurDate ) ) {
  //    $c.gus.cfAlertMsg( MSG_CM_ERR_061 , [ "일자" , "현재 일자 보다 이전" ] ); // 
  //    ed_wrkStDt.focus();
  //    return;
  // }
  // ds_fix_work_re.setUseChangeInfo(false); // 조회조건

  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveFixWorkPlaceEachAccountEachCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);

  // scwin.f_gridDataSet();
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부

  let pWhere = "";
  switch (disGubun) {
    case 2:
      // 귀속부서 팝업			
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), pClose, null, null, null, null, pWhere, null, null, null, null, null, "T", "귀속부서,부서코드,부서명");
      // cfSetReturnValue(rtnList, ed_acctDeptCd,   ed_acctDeptNm);
      break;
  }
  ;
};

//-------------------------------------------------------------------------
// 콜백 함수
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
    ed_acctDeptCd.options.hidVal = rtnList[0];
    ed_acctDeptNm.options.hidVal = rtnList[1];
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    ed_acctDeptNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); // 정비소속구분코드
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
  ;
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cntRow = ds_fix_work_list.getRowCount();
  if (cntRow == 0) return;
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비작업장별 계정별집계",
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
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비기간 [" + $c.gus.cfGetFormatStr($p, ed_wrkStDt.getValue(), "####/##/##") + " ~ " + $c.gus.cfGetFormatStr($p, ed_wrkEndDt.getValue(), "####/##/##") + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 3,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "사업부문 [" + $c.win.getComboLabel($p, lc_homeClsCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 4,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "대표정비작업장 [" + $c.win.getComboLabel($p, lc_WrkPlCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  if (ed_acctDeptCd.getValue().length !== 0) {
    infoArr.push({
      rowIndex: 5,
      // 첫 번째 줄
      colIndex: 0,
      // 첫 번째 칸부터
      colSpan: 14,
      // 그리드 전체 너비만큼 병합
      rowSpan: 1,
      text: "귀속부서 [" + ed_acctDeptCd.getValue().trim() + " - " + ed_acctDeptNm.getValue().trim() + "]",
      textAlign: "left",
      //정렬
      fontSize: 10,
      drawBorder: false,
      // 테두리
      color: "black",
      // 글자색
      backgroundColor: "white" // 배경색
    });
    startRowIndex = 6;
  } else {
    startRowIndex = 5;
  }
  const options = {
    fileName: "정비작업장별 계정별집계.xlsx",
    sheetName: "정비작업장별 계정별집계",
    startRowIndex: startRowIndex,
    startColumnIndex: 0,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  sbm_co_ds_combo.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveFixWrkList&strVal=" + param1 + "&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_fix_work_list.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  await scwin.f_gridDataSet();
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let lcIndex = lc_homeClsCd.getValue();
  // 대표정비작업장콤보 조회
  scwin.f_RetrieveSecond(lcIndex);
};
scwin.sbm_co_ds_combo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  co_ds_combo.sort("code", 0);
  lc_WrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 2, false);
  } else {
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  if (ed_acctDeptNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 2, false);
  } else {
    ed_acctDeptCd.setValue("");
  }
};
scwin.sbm_co_ds_combo1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'termFrom',refDataMap:'dma_fix_work_re',style:'',id:'udc_fromToCalendar3',refEdDt:'termTo',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleTo:'일자',titleFrom:'일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_fix_work_re.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',title:'사업부문',mandatory:'false',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_WrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_work_re.fixWrkPlCd',title:'대표정비작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_acctDeptCd',validTitle:'',nameId:'ed_acctDeptNm',style:'',refDataCollection:'dma_fix_work_re',code:'acctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cFix_work_list',focusMode:'cell',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'작업장명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'귀속부서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'270',inputType:'text',style:'',id:'column70',value:'사고수리',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'잡유비',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'타이어비',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'정비</br>부품비',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'기계</br>장치비',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'소모품비',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'와이어</br>소모품',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'차량</br>운반구',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'외주</br>수선비',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'합계',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'정비</br>부품비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'와이어</br>소모품',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'aFixPartAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'aPaintAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'aAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcoilAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tireAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixPartAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'machineAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixUseUpAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paintAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',valueType:'binary',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',valueType:'binary',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("aFixPartAmt")',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("aPaintAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("aAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("etcoilAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("tireAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("fixPartAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("machineAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("fixUseUpAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("paintAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("carAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("outAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("totAmt")',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})