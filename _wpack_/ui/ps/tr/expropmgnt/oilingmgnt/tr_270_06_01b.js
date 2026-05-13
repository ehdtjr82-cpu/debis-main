/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_06_01b.xml 74393 e591e82cb471ea3e48dd7a157ba41cb8853e8e8e81d863191bff643a3c35982e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_OilingContentsQry'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'주유일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'주유일자 TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClsCd',name:'주유소구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClntNo',name:'주유소명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilingPurpsCd',name:'주유용도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spareYn',name:'예비여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_OilingContentsDet',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_OilingContentsDet_onrowpositionchange','ev:onremoverow':'scwin.dlt_onremoverow','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:ondataload':'scwin.dlt_onload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilingDt',name:'주유일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingSeq',name:'주유순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingClsCd',name:'주유용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exprSeatCntCd',name:'고속좌석수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exprEmpNo',name:'고속사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingVol',name:'주유량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'출고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gnrlOilStatNm',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingHhmi',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spareYn',name:'예비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'차량모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'차량규격',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_co_ds_combo2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_OlingClntList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_item',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_OlingClntList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_OilingContentsQry',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveOilingContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_OilingContentsQry","key":"IN_DS1"},{"id":"ds_OilingContentsDet","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_OilingContentsDet","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_OilingContentsQry_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilingContents',action:'/ps.tr.expropmgnt.oilingmgnt.SaveOilingContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_OilingContentsDet","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilingContents_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo2',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_combo_item","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_OlingClntList',action:'',method:'post',mediatype:'application/json',ref:'data:json,ds_OlingClntList',target:'data:json,{"id":"ds_OlingClntList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 주유일자 20200901 - 20200915
// 주유소명 autocomplete data 바인딩 확인해야됨. 
// value=/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveOilStatByAllClsCd&strVal=&intVal=>

// [조회조건]
// 주유일자: 2025/01/01~2025/01/05 
// [결함내용]
// 주유량 입력란  "+" 입력됨

scwin.curDate = WebSquare.date.getCurrentServerDate(); // 오늘 날짜
scwin.tenRowAdd = false;
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "ZZ503",
    compID: "lc_oilStatClsCd"
  }, {
    grpCd: "ZZ701",
    compID: "lc_oilingPurpsCd"
  }];
  await $c.data.setCommonCode($p, codeOptions, scwin.onUdcCompleted);
};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = async function () {
  lc_oilStatClntNo.setSelectedIndex(0);
  var wrkDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 서버시간 기준 해당 월 가장 첫날
  ed_stDt.setValue(wrkDate);
  ed_endDt.setValue(scwin.curDate);
  ed_stDt.focus();
  scwin.f_getOilStatNm();
  lc_hiddenCombo.setValue(0);
  lc_homeClsCd.setValue("LO");

  // 전체 기본 선택
  lc_oilStatClsCd.setSelectedIndex(0);
  lc_oilingPurpsCd.setSelectedIndex(0);

  // 테스트 데이터
  // 주유일자: 2025/01/01~2025/01/05 
  // ed_stDt.setValue("20250101");
  // ed_endDt.setValue("20250105");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------    
scwin.f_termChk = function (stObj, endObj) {
  if (stObj.getValue().trim().length != 8) {
    $c.win.alert($p, "주유일자는 필수입력 입니다.");
    stObj.focus();
    return true;
  }
  if (endObj.getValue().trim().length != 8) {
    $c.win.alert($p, "주유일자는 필수입력 입니다.");
    endObj.focus();
    return true;
  }
  if (stObj.getValue().trim() > endObj.getValue().trim()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_045, ['주유일자']); //기간 체크
    stObj.focus();
    return true;
  }
  return false;
};
scwin.f_Retrieve = async function () {
  let chkVal = await scwin.f_termChk(ed_stDt, ed_endDt);
  if (chkVal) return;
  // to-do
  // ds_OilingContentsQry.ClearData();
  // ds_OilingContentsQry.setEmptyValue();
  ds_OilingContentsQry.set("stDt", ed_stDt.getValue());
  ds_OilingContentsQry.set("endDt", ed_endDt.getValue());
  ds_OilingContentsQry.set("homeClsCd", lc_homeClsCd.getValue());
  ds_OilingContentsQry.set("oilStatClsCd", lc_oilStatClsCd.getValue());
  ds_OilingContentsQry.set("oilStatClntNo", lc_oilStatClntNo.getValue());
  ds_OilingContentsQry.set("oilingPurpsCd", lc_oilingPurpsCd.getValue());
  ds_OilingContentsQry.set("spareYn", lc_spareYn.getValue());
  $c.sbm.execute($p, sbm_OilingContentsQry);
};

//-------------------------------------------------------------------------
// 행추가 : 행추가 후 Default로 조회조건의 자료 Setting
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  ds_OilingContentsDet.insertRow();
  let rowPos = ds_OilingContentsDet.getTotalRow() - 1;
  ds_OilingContentsDet.setCellData(rowPos, "oilingDt", ed_endDt.getValue());
  ds_OilingContentsDet.setCellData(rowPos, "useClsCd", lc_homeClsCd.getValue());
  ds_OilingContentsDet.setCellData(rowPos, "oilStatClntNo", lc_oilStatClntNo.getValue());
  ds_OilingContentsDet.setCellData(rowPos, "oilingClsCd", lc_oilingPurpsCd.getValue());

  // tobe에 추가함
  ds_OilingContentsDet.setCellData(rowPos, "oilingVol", 0); // 주유량 0
  ds_OilingContentsDet.setCellData(rowPos, "outUpr", 0); // 출고 단가 0.00
  ds_OilingContentsDet.setCellData(rowPos, "outAmt", 0); // 출고 금액 0

  if (ed_endDt.getValue() == "") {
    scwin.f_colfocus("F", "", rowPos, "oilingDt");
  } else if (lc_oilStatClntNo.getValue() == "") {
    scwin.f_colfocus("F", "", rowPos, "oilStatClntNo");
  } else if (lc_homeClsCd.getValue() == "") {
    scwin.f_colfocus("F", "", rowPos, "useClsCd");
  } else if (lc_oilingPurpsCd.getValue() == "") {
    scwin.f_colfocus("F", "", rowPos, "oilingClsCd");
  } else {
    scwin.f_colfocus("F", "", rowPos, "vehclShortCd");
  }

  // for=ds_OilingContentsDet event=OnRowPosChanged(row)
  // scwin.ds_OilingContentsDet_onrowpositionchange << 해당 이벤트를 안타고 있어서 추가함.
  // $c.gus.cfPrepareHidVal(ds_OilingContentsDet, rowPos, ["acctDeptCd", "acctDeptNm"
  //     , "infmalRouteCd", "infmalRouteNm"
  //     , "vehclShortCd", "vehclNo"
  //     , "exprSeatCnt", "eqCd"
  //     , "exprEmpNo", "drvNm"]);
  // scwin.f_EditControl(rowPos);

  // asis 소스가 asis 작동과 상이하여 주석처리함.
  // if (ds_OilingContentsDet.getTotalRow() == 0) { // list인지 map인지 확인 필요
  //     $c.gus.cfTurnCreateFlag(true);
  //     // ds_OilingContentsQry.ClearData();
  //     ds_OilingContentsQry.setEmptyValue()
  //     ds_OilingContentsQry.set("stDt", "00000000");
  //     ds_OilingContentsQry.set("endDt", "00000000");
  //     await $c.sbm.execute(sbm_OilingContentsQry);
  // }
  // else {
  //     ds_OilingContentsDet.insertRow();
  //     let rowPos = ds_OilingContentsDet.getTotalRow() - 1;
  //     ds_OilingContentsDet.setCellData(rowPos, "oilingDt", ed_endDt.getValue())
  //     ds_OilingContentsDet.setCellData(rowPos, "useClsCd", lc_homeClsCd.getValue());
  //     ds_OilingContentsDet.setCellData(rowPos, "oilStatClntNo", lc_oilStatClntNo.getValue());
  //     ds_OilingContentsDet.setCellData(rowPos, "oilingClsCd", lc_oilingPurpsCd.getValue());

  //     // tobe에 추가함
  //     ds_OilingContentsDet.setCellData(rowPos, "oilingVol", "0") // 주유량 0
  //     ds_OilingContentsDet.setCellData(rowPos, "outUpr", "0") // 출고 단가 0.00
  //     ds_OilingContentsDet.setCellData(rowPos, "outAmt", "0") // 출고 금액 0

  //     if (ed_endDt.getValue() == "") {
  //         scwin.f_colfocus("F", "", rowPos, "oilingDt");
  //     } else if (lc_oilStatClntNo.getValue() == "") {
  //         scwin.f_colfocus("F", "", rowPos, "oilStatClntNo");
  //     } else if (lc_homeClsCd.getValue() == "") {
  //         scwin.f_colfocus("F", "", rowPos, "useClsCd");
  //     } else if (lc_oilingPurpsCd.getValue() == "") {
  //         scwin.f_colfocus("F", "", rowPos, "oilingClsCd");
  //     } else {
  //         scwin.f_colfocus("F", "", rowPos, "vehclShortCd");
  //     }
  // }
};

//-------------------------------------------------------------------------
// 행복사 : RowPosition에 해당하는 Row 복사하여 새로운 행 추가
//-------------------------------------------------------------------------
scwin.f_RowCopy = function () {
  if (ds_OilingContentsDet.getTotalRow() < 1) {
    $c.win.alert($p, "복사할 행을 지정해 주십시오.");
    return;
  } else {
    let row = ds_OilingContentsDet.getRowPosition();
    ds_OilingContentsDet.insertRow();
    let addedRow = ds_OilingContentsDet.getTotalRow() - 1;
    let rowData = ds_OilingContentsDet.getRowJSON(row);
    ds_OilingContentsDet.setCellData(addedRow, "oilingDt", rowData["oilingDt"]);
    ds_OilingContentsDet.setCellData(addedRow, "oilStatClntNo", rowData["oilStatClntNo"]);
    ds_OilingContentsDet.setCellData(addedRow, "useClsCd", rowData["useClsCd"]);
    ds_OilingContentsDet.setCellData(addedRow, "oilingClsCd", rowData["oilingClsCd"]);
    ds_OilingContentsDet.setCellData(addedRow, "vehclShortCd", rowData["vehclShortCd"]);
    ds_OilingContentsDet.setCellData(addedRow, "vehclNo", rowData["vehclNo"]);
    ds_OilingContentsDet.setCellData(addedRow, "exprEmpNo", rowData["exprEmpNo"]);
    ds_OilingContentsDet.setCellData(addedRow, "drvNm", rowData["drvNm"]);
    ds_OilingContentsDet.setCellData(addedRow, "acctDeptCd", rowData["acctDeptCd"]);
    ds_OilingContentsDet.setCellData(addedRow, "acctDeptNm", rowData["acctDeptNm"]);
    ds_OilingContentsDet.setCellData(addedRow, "oilingVol", rowData["oilingVol"]);
    ds_OilingContentsDet.setCellData(addedRow, "outUpr", rowData["outUpr"]);
    ds_OilingContentsDet.setCellData(addedRow, "outAmt", rowData["outAmt"]);
    ds_OilingContentsDet.setCellData(addedRow, "gnrlOilStatNm", rowData["gnrlOilStatNm"]);
    ds_OilingContentsDet.setCellData(addedRow, "eqModelNm", rowData["eqModelNm"]);
    ds_OilingContentsDet.setCellData(addedRow, "eqNrmNm", rowData["eqNrmNm"]);
    ds_OilingContentsDet.setCellData(addedRow, "spareYn", rowData["spareYn"]);
  }
};

//-------------------------------------------------------------------------
// 10행추가
//-------------------------------------------------------------------------        
scwin.f_TenRowAdd = async function () {
  let curRow = ds_OilingContentsDet.getTotalRow();
  for (j = 0; j < 10; j++) {
    ds_OilingContentsDet.insertRow();
    let rowPos = ds_OilingContentsDet.getTotalRow() - 1;
    ds_OilingContentsDet.setCellData(rowPos, "oilingDt", ed_endDt.getValue());
    ds_OilingContentsDet.setCellData(rowPos, "useClsCd", lc_homeClsCd.getValue());
    ds_OilingContentsDet.setCellData(rowPos, "oilStatClntNo", lc_oilStatClntNo.getValue());
    ds_OilingContentsDet.setCellData(rowPos, "oilingClsCd", lc_oilingPurpsCd.getValue());

    // tobe에 추가함
    ds_OilingContentsDet.setCellData(rowPos, "oilingVol", "0"); // 주유량 0
    ds_OilingContentsDet.setCellData(rowPos, "outUpr", "0"); // 출고 단가 0.00
    ds_OilingContentsDet.setCellData(rowPos, "outAmt", "0"); // 출고 금액 0

    if (ed_endDt.getValue() == "") {
      scwin.f_colfocus("F", "", rowPos, "oilingDt");
    } else if (lc_oilStatClntNo.getValue() == "") {
      scwin.f_colfocus("F", "", rowPos, "oilStatClntNo");
    } else if (lc_homeClsCd.getValue() == "") {
      scwin.f_colfocus("F", "", rowPos, "useClsCd");
    } else if (lc_oilingPurpsCd.getValue() == "") {
      scwin.f_colfocus("F", "", rowPos, "oilingClsCd");
    } else {
      scwin.f_colfocus("F", "", rowPos, "vehclShortCd");
    }

    // for=ds_OilingContentsDet event=OnRowPosChanged(row)
    // scwin.ds_OilingContentsDet_onrowpositionchange << 해당 이벤트를 안타고 있어서 추가함.
    // $c.gus.cfPrepareHidVal(ds_OilingContentsDet, rowPos,
    //     ["acctDeptCd", "acctDeptNm"
    //         , "infmalRouteCd", "infmalRouteNm"
    //         , "vehclShortCd", "vehclNo"
    //         , "exprSeatCnt", "eqCd"
    //         , "exprEmpNo", "drvNm"]);
    // scwin.f_EditControl(rowPos);
  }
  gr_OilingContents.setFocusedCell(curRow, "oilingDt", false);

  // 아래 asis 소스를 타면 에러가 발생함..
  // var curRow = ds_OilingContentsDet.getTotalRow();
  // for (j = 0; j < 10; j++) {
  //     await scwin.f_AddRow();
  // }
  // ds_OilingContentsDet.rowPosition = curRow + 1;
};

//-------------------------------------------------------------------------
// 그리드 : 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  let focusIdx = ds_OilingContentsDet.getRowPosition();
  var outUpr = ds_OilingContentsDet.getCellData(focusIdx, 'outUpr');
  var outAmt = ds_OilingContentsDet.getCellData(focusIdx, 'outAmt');
  var curRow = focusIdx;
  if (outUpr != 0 && outAmt != 0) {
    $c.win.alert($p, Number(curRow) + 1 + "행은 유류재고집계내역이 있으므로 행삭제할 수 없습니다.");
  } else {
    let allFocusIdx = gr_OilingContents.getAllFocusedRowIndex();
    let rowStatus = ds_OilingContentsDet.getRowStatusValue(focusIdx);
    if (rowStatus == 2) {
      ds_OilingContentsDet.deleteRows(allFocusIdx);
      ds_OilingContentsDet.removeRows(allFocusIdx);
      let row = ds_OilingContentsDet.getTotalRow() - 1;
      gr_OilingContents.setFocusedCell(row, "oilingHhmi", false);
    } else {
      ds_OilingContentsDet.deleteRows(allFocusIdx);
      // let row = ds_OilingContentsDet.getTotalRow() - 1;
      gr_OilingContents.setFocusedCell(focusIdx, "oilingHhmi", false);
    }
  }
};

// 행 취소
scwin.cancelRow = function () {
  $c.data.undoRow($p, ds_OilingContentsDet, "Y");
};

//-------------------------------------------------------------------------
// 그리드 : 행전체삭제
//-------------------------------------------------------------------------
scwin.f_DelAllRow = function () {
  let focusIdx = ds_OilingContentsDet.getRowPosition() ?? 0;
  var outUpr = ds_OilingContentsDet.getCellData(focusIdx, 'outUpr');
  var outAmt = ds_OilingContentsDet.getCellData(focusIdx, 'outAmt');
  for (var i = 0; i < ds_OilingContentsDet.getTotalRow(); i++) {
    if (outUpr != 0 && outAmt != 0) {
      $c.win.alert($p, Number(i) + 1 + "행은 유류재고집계내역이 있으므로 행삭제할 수 없습니다.");
      return;
    } else {
      let rowStatus = ds_OilingContentsDet.getRowStatus(i);
      if (["R"].includes(rowStatus)) {
        ds_OilingContentsDet.deleteRow(i);
      } else if (rowStatus == "C") {
        ds_OilingContentsDet.deleteRow(i);
        ds_OilingContentsDet.removeRow(i);
      }
    }
  }
  gr_OilingContents.setFocusedCell(0, "oilStatClntNo", false);
};

//-------------------------------------------------------------------------
// 저장 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_OilingContentsDet.getModifiedIndex().length == false) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['차량별주유량 등록 그리드']); //변경된 정보가 없습니다.
    return;
  }
  let validRet = await $c.gus.cfValidate($p, [gr_OilingContents]);
  if (!validRet) return;
  var oilingClsCd = "";
  var rowStatus = "";
  var JobYn = "";
  var stdYm = "";
  var oilStatClntNo = "";
  for (i = 0; i < ds_OilingContentsDet.getTotalRow(); i++) {
    rowStatus = ds_OilingContentsDet.getRowStatusValue(i);
    if ([1, 2, 3].includes(rowStatus)) {
      // 물류 입력 자료 체크 : 2007.10.01 이후 물류 중기용 자료는 물류에서만 인터페이스 받는다. 본 화면에서는 조회만 가능		  	
      if ((await scwin.f_loWork_chk(i)) == false) {
        $c.win.alert($p, "[" + (i + 1) + "행] 저장할 수 없습니다. 2007년 10월 1일 이후 물류 중기용 주유량은 물류 중기실적등록 화면에서만 등록할 수 있습니다.");
        return;
      }

      // 마감체크
      stdYm = ds_OilingContentsDet.getCellData(i, "oilingDt").substring(0, 6);
      oilStatClntNo = ds_OilingContentsDet.getCellData(i, "oilStatClntNo");

      // 집계생성 마감체크(월,재고집계,거래처)
      var JobYn = await udc_closeYn.cfJobCloseYN("CUR", stdYm, "00", "TR25", oilStatClntNo, null, "N");
      if (["0", "2"].includes(JobYn)) {
        await $c.win.alert($p, Number(i) + 1 + "행 주유소는 해당월 마감처리 되었습니다. \n저장할 수 없습니다.");
        return;
      }

      // 입고일자 체크[미래(당일 이후)자료 입력  불가]
      if (ds_OilingContentsDet.getCellData(i, "oilingDt") > scwin.curDate) {
        await $c.win.alert($p, MSG_CM_ERR_014, [Number(i) + 1 + "행 주유일자(" + ds_OilingContentsDet.getCellData(i, "oilingDt") + ")", "오늘(" + scwin.curDate + ")"]);
        return;
      }

      // 용도가 운행인 경우 차량 필수입력 : 운행/고속인 경우 기사 필수입력
      oilingClsCd = ds_OilingContentsDet.getCellData(i, "oilingClsCd");
      if (oilingClsCd == "01") {
        if (ds_OilingContentsDet.getCellData(i, "vehclShortCd").length == 0) {
          scwin.f_colfocus("T", Number(i) + 1 + "행 차량단축번호는 필수 입력입니다.", i, "vehclShortCd");
          return;
        }
        if (ds_OilingContentsDet.getCellData(i, "useClsCd") == "TR") {
          if (ds_OilingContentsDet.getCellData(i, "exprEmpNo").length == 0) {
            scwin.f_colfocus("T", Number(i) + 1 + "행 사원번호는 필수 입력입니다.", i, "exprEmpNo");
            return;
          }
        }
      }
    }

    // 자가주유소인경우 주유용도에 상관없이 차랴번호 필수 체크 
    let hiddenVal = lc_hiddenCombo.setValue(ds_OilingContentsDet.getCellData(i, "oilStatClntNo"));
    if (hiddenVal >= 0) {
      if (ds_OilingContentsDet.getCellData(i, "vehclShortCd").length == 0) {
        scwin.f_colfocus("T", Number(i) + 1 + "행 차량단축번호는 필수 입력입니다.", i, "vehclShortCd");
        return;
      }
    }
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    // tr_saveOilingContents.Action = "/ps.tr.expropmgnt.oilingmgnt.SaveOilingContentsCMD.do";
    // tr_saveOilingContents.post();
    // sbm_saveOilingContents.action = "/ps.tr.expropmgnt.oilingmgnt.SaveOilingContentsCMD.do";
    $c.sbm.execute($p, sbm_saveOilingContents);
  }
};
scwin.f_colfocus = function (gubun, msg, row, colid) {
  if (gubun == "T") {
    $c.win.alert($p, msg);
  }
  let columnIndex = gr_OilingContents.getColumnIndex(colid);
  gr_OilingContents.setFocusedCell(row, columnIndex, false); // gr_OilingContents.SetColumn(colid); 변경 방법 불확실
};

//-------------------------------------------------------------------------
// 물류 입력 자료 체크 : 2007.10.01 이후 물류 중기용 자료는 물류에서만 인터페이스 받는다. 본 화면에서는 조회만 가능
//                  2008.05.01 이후 울산TP(00499)인 경우 중기용으로 입력가능
//					2012.11.01 이후 천곡주유소(584968)인 경우 중기용 입력 가능-동해지사			
//-------------------------------------------------------------------------
scwin.f_loWork_chk = async function (row) {
  var oilingDt = "";
  var useClsCd = "";
  var oilingClsCd = "";
  var acctDeptCd = "";
  var oilStatClntNo = "";
  oilingDt = ds_OilingContentsDet.getCellData(row, "oilingDt");
  useClsCd = ds_OilingContentsDet.getCellData(row, "useClsCd");
  oilingClsCd = ds_OilingContentsDet.getCellData(row, "oilingClsCd");
  acctDeptCd = ds_OilingContentsDet.getCellData(row, "acctDeptCd");
  oilStatClntNo = ds_OilingContentsDet.getCellData(row, "oilStatClntNo");
  if (useClsCd == "LO" && oilingClsCd == "05" && oilingDt >= "20071001" && acctDeptCd != "00499" && oilStatClntNo != "584968" && oilStatClntNo != "262126") {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 주유소명을 조건에 따라 바꾼다.
//-------------------------------------------------------------------------
scwin.f_getOilStatNm = function () {
  let tmpstr;
  if (lc_oilStatClsCd.getValue() == "all") {
    tmpstr = "strVal=" + "";
  } else {
    tmpstr = "strVal=" + lc_oilStatClsCd.getValue();
  }
  // let tmpstr = "strVal=" + lc_oilStatClsCd.getValue();
  sbm_co_ds_combo2.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveOilStatByAllClsCd&" + tmpstr + "&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo2);
  sbm_OlingClntList.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveOilStatByAllClsCd&strVal=01&intVal=";
  $c.sbm.execute($p, sbm_OlingClntList);
};

//-------------------------------------------------------------------------
// Grid Popup
//-------------------------------------------------------------------------
scwin.f_popupchk = function (row, colid, winbool) {
  var tmparg = "";
  var firstList;
  var secondList = new Array();
  var retireDt = "";
  var pWhere = "";
  var oilingDt = ds_OilingContentsDet.getCellData(row, "oilingDt");
  var useClsCd = ds_OilingContentsDet.getCellData(row, "useClsCd"); // 소속코드        
  var oilingClsCd = ds_OilingContentsDet.getCellData(row, "oilingClsCd"); // 주유용도코드
  tmparg = ds_OilingContentsDet.getCellData(row, colid);
  if (useClsCd == "") {
    //"@이(가) 존재하지 않습니다.\n먼저 @을(를) 하십시오.";
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, [Number(row) + 1 + "행 소속구분", "소속구분 입력"]);
    // gr_OilingContents.SetColumn("useClsCd");
    return;
  }
  if (oilingDt == "") {
    //"@이(가) 존재하지 않습니다.\n먼저 @을(를) 하십시오.";
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, [Number(row) + 1 + "행 주유일자", "주유일자 입력"]);
    // gr_OilingContents.SetColumn("oilingDt");
    return;
  }
  if (colid == "exprEmpNo") {
    // 사원번호
    if (useClsCd == "TR") {
      pWhere = "PST_CD,,," + oilingDt;
      udc_exprEmpNo_TR.cfCommonPopUp(scwin.udc_exprEmpNo_TR_callback, tmparg, "", winbool, null, null, null, null, pWhere, null, null, null, null, null, "F"); // 사원
    } else {
      let firstList = udc_exprEmpNo_else.cfCommonPopUp(scwin.udc_exprEmpNo_else_callback, tmparg, "", winbool, null, null, null, null, null, null, null, null, null, null, "F"); // 사원
    }
    // $c.gus.cfSetGridReturnValue(secondList, ds_OilingContentsDet, row, "exprEmpNo", "drvNm");
  } else if (colid == "vehclShortCd") {
    // 차량단축코드
    pWhere = useClsCd + "," + oilingDt;
    if (useClsCd == "TR") {
      udc_vehclShortCd.cfCommonPopUp(scwin.udc_vehclShortCd_callback, tmparg, "", winbool, null, null, null, "1,4,6,8,9,10", pWhere, null, null, null, null, null, "F"); // 차량번호조회
    } else if (useClsCd == "LO") {
      udc_vehclShortCd_LO.cfCommonPopUp(scwin.udc_vehclShortCd_LO_callback, tmparg, "", winbool, 10, null, null, "1,5,6,7,8,9,10", pWhere, null, null, null, null, null, "F"); // 차량번호조회
    }

    // $c.gus.cfSetGridReturnValue(secondList, ds_OilingContentsDet, row, "vehclShortCd", "eqCd",
    //     ["vehclNo", "exprSeatCntCd", "acctDeptCd", "acctDeptNm"]);
    // 고속, 운행의 경우 귀속부서를 강제로 세팅 : 
    // 00102를 00194로 세팅 => 2007.02.16 김준곤(고속관리에서 원가 관리 방침 변경에 의해서 변경함)
    if (useClsCd == "TR" && oilingClsCd == "01" && secondList[4] == "00102") {
      ds_OilingContentsDet.setCellData(row, "acctDeptCd", "00194");
      ds_OilingContentsDet.setCellData(row, "acctDeptNm", "고속공통(고속기사)");
    }
  } else if (colid == "acctDeptCd") {
    // 귀속부서조회
    // to-do
    // udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
    let firstList = udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callback, tmparg, "", winbool, 2, null, null, null, null, null); // 차량번호조회
  }
  return false;
};

// 그리드 사원번호 TR
scwin.udc_exprEmpNo_TR_callback = function (firstList) {
  let secondList = new Array();
  let row = ds_OilingContentsDet.getRowPosition();
  if (firstList == null) {
    secondList = firstList;
  } else if (firstList[0] == "N/A") {
    secondList = firstList;
  } else {
    secondList[0] = firstList[1]; // 차량단축코드
    secondList[1] = firstList[0]; // 장비코드
    secondList[2] = firstList[2]; // 장비번호		        
    secondList[3] = firstList[4]; // 좌석수
    secondList[4] = firstList[5]; // 귀속부서코드
    secondList[5] = firstList[6]; // 귀속부서명
  }
  $c.gus.cfSetGridReturnValue($p, secondList, ds_OilingContentsDet, row, "exprEmpNo", "drvNm");
};

// 그리드 사원번호 else
scwin.udc_exprEmpNo_else_callback = function (firstList) {
  let oilingDt = ds_OilingContentsDet.getCellData(ds_OilingContentsDet.getRowPosition(), "oilingDt");
  let secondList = new Array();
  let row = ds_OilingContentsDet.getRowPosition();
  if (firstList == null) {
    secondList = firstList;
  } else if (firstList[0] == "N/A") {
    secondList = firstList;
  } else {
    secondList[0] = firstList[1];
    secondList[1] = firstList[2];
    retireDt = firstList[9];
    if (retireDt != "" && oilingDt > retireDt) {
      $c.gus.cfAlertMsg($p, Number(row) + 1 + "행 " + firstList[2] + " 님은 " + retireDt + "에 퇴사하였으므로 " + oilingDt + "에 주유등록할 수 없습니다.");
      secondList[0] = "";
      secondList[1] = "";
    } else {
      secondList[0] = firstList[1];
      secondList[1] = firstList[2];
    }
  }
  $c.gus.cfSetGridReturnValue($p, secondList, ds_OilingContentsDet, row, "exprEmpNo", "drvNm");
};
scwin.udc_vehclShortCd_callback = function (firstList) {
  let secondList = new Array();
  let row = ds_OilingContentsDet.getRowPosition();
  if (firstList == null) {
    secondList = firstList;
  } else if (firstList[0] == "N/A") {
    secondList = firstList;
  } else {
    secondList[0] = firstList[1]; // 차량단축코드
    secondList[1] = firstList[0]; // 장비코드
    secondList[2] = firstList[2]; // 장비번호		        
    secondList[3] = firstList[4]; // 좌석수
    secondList[4] = firstList[5]; // 귀속부서코드
    secondList[5] = firstList[6]; // 귀속부서명
  }
  $c.gus.cfSetGridReturnValue($p, secondList, ds_OilingContentsDet, row, "vehclShortCd", "eqCd", ["vehclNo", "exprSeatCntCd", "acctDeptCd", "acctDeptNm"]);
};
scwin.udc_vehclShortCd_LO_callback = function (firstList) {
  let secondList = new Array();
  let row = ds_OilingContentsDet.getRowPosition();
  if (firstList == null) {
    secondList = firstList;
  } else if (firstList[0] == "N/A") {
    secondList = firstList;
  } else {
    secondList[0] = firstList[1]; // 차량단축코드
    secondList[1] = firstList[0]; // 장비코드
    secondList[2] = firstList[2]; // 장비번호		        
    secondList[3] = firstList[4]; // 좌석수
    secondList[4] = firstList[5]; // 귀속부서코드
    secondList[5] = firstList[6]; // 귀속부서명
  }
  $c.gus.cfSetGridReturnValue($p, secondList, ds_OilingContentsDet, row, "vehclShortCd", "eqCd", ["vehclNo", "exprSeatCntCd", "acctDeptCd", "acctDeptNm"]);
};
scwin.udc_acctDeptCd_callback = function (firstList) {
  let row = ds_OilingContentsDet.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, firstList, ds_OilingContentsDet, row, "acctDeptCd", "acctDeptNm");
};

//-------------------------------------------------------------------------
//  Eidt_Control FUNCTION
//-------------------------------------------------------------------------	
scwin.f_EditNone = function (row) {
  // CountColumn -> ds_OilingContentsDet.getTotalCol();
  for (var i = 0; i < ds_OilingContentsDet.getTotalCol(); i++) {
    gr_OilingContents.setColumnReadOnly(ds_OilingContentsDet.getColumnID(i), true);
  }
};
scwin.f_EditTrue = function (row) {
  for (var i = 0; i < ds_OilingContentsDet.getTotalCol(); i++) {
    gr_OilingContents.setColumnReadOnly(ds_OilingContentsDet.getColumnID(i), false);
  }
};
scwin.f_EditControl = function (row) {
  if (row >= 0) {
    var outUpr = ds_OilingContentsDet.getCellData(row, "outUpr");
    var outAmt = ds_OilingContentsDet.getCellData(row, "outAmt");
    var oilingSeq = 0;
    oilingSeq = ds_OilingContentsDet.getCellData(row, "oilingSeq");
    if (outUpr != 0 || outAmt != 0) {
      scwin.f_EditNone(row);

      // 예비 컬럼 체크박스가 disable되어 추가함.
      // gr_OilingContents.setCellReadOnly(row, "spareYn", false);
      gr_OilingContents.setColumnDisabled("spareYn", false);
      gr_OilingContents.setColumnReadOnly("spareYn", false);
    } else {
      scwin.f_EditTrue(row);
    }
    if (oilingSeq > 0) {
      gr_OilingContents.setCellReadOnly(row, "oilingDt", true);
    } else {
      gr_OilingContents.setCellReadOnly(row, "oilingDt", false);
    }
    gr_OilingContents.setCellReadOnly(row, "drvNm", true);
    gr_OilingContents.setCellReadOnly(row, "acctDeptNm", true);
    gr_OilingContents.setCellReadOnly(row, "outUpr", true);
    gr_OilingContents.setCellReadOnly(row, "outAmt", true);
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_stDt.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var count = ds_OilingContentsDet.getTotalRow();
  if (!(count > 0)) return;

  // gr_OilingContents.SetExcelTitle(0, "");
  // gr_OilingContents.SetExcelTitle(1, "value:차량별 주유량 등록;"
  //     + "font-face:'돋움체';"
  //     + "font-size:12pt;"
  //     + "font-color:black;"
  //     + "bgcolor:#ffffff;"
  //     + "align:center;"
  //     + "line-color:white;" 
  //     + "line-width:0pt;"
  //     + "skiprow:1;");
  // scwin.f_setqrynm("주유일자", cfGetFormatStr(ed_stDt.text, "####/##/##") + " ~ " + cfGetFormatStr(ed_endDt.text, "####/##/##"));
  // scwin.f_setqrynm("소속구분", lc_homeClsCd.ValueOfIndex("name", lc_homeClsCd.Index));
  // scwin.f_setqrynm("주유소구분", lc_oilStatClsCd.ValueOfIndex("name", lc_oilStatClsCd.Index));
  // scwin.f_setqrynm("주유소", lc_oilStatClntNo.ValueOfIndex("name", lc_oilStatClntNo.Index));
  // scwin.f_setqrynm("주유용도", lc_oilingPurpsCd.ValueOfIndex("name", lc_oilingPurpsCd.Index));

  // cfGridToExcel(gr_OilingContents, "차량별 주유량 등록", "차량별 주유량 등록", 4 + 8 + 16);
  let gridColCount = gr_OilingContents.getTotalCol();
  const grdObj = gr_OilingContents;
  let oilStatClsCdVal = lc_oilStatClsCd.getValue() == "" ? "전체" : lc_oilStatClsCd.getText(true);
  let oilStatClntNoVal = lc_oilStatClntNo.getValue() == "" ? "전체" : lc_oilStatClntNo.getText(true);
  let oilingPurpsCdVal = lc_oilingPurpsCd.getValue() == "" ? "전체" : lc_oilingPurpsCd.getText(true);
  const infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "차량별 주유량 등록",
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
    text: "주유일자 [" + $c.gus.cfGetFormatStr($p, ed_stDt.getValue(), "####/##/##") + " ~ " + $c.gus.cfGetFormatStr($p, ed_endDt.getValue(), "####/##/##") + "]",
    textAlign: "left",
    //정렬
    fontSize: 12,
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
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "소속구분 [" + lc_homeClsCd.getText(true) + "]",
    textAlign: "left",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 4,
    // 첫 번째 줄s
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "주유소구분  [ " + oilStatClsCdVal + "]",
    textAlign: "left",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 5,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "주유소 [" + oilStatClntNoVal + "]",
    textAlign: "left",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 6,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "주유용도 [" + oilingPurpsCdVal + "]",
    textAlign: "left",
    //정렬 
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "차량별 주유량 등록.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    startRowIndex: 7,
    sheetName: "차량별 주유량 등록"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};

// scwin.f_setqrynm = function (tname, str) {
//     var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
//     gr_OilingContents.SetExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption);
// }

// for=tr_saveOilingContents event=OnSuccess()
scwin.sbm_saveOilingContents_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  scwin.f_Retrieve();
};

// for=ds_OilingContentsDet event=OnLoadCompleted(rowCnt)
scwin.sbm_OilingContentsQry_submitdone = async function (e) {
  // return
  let rowCnt = ds_OilingContentsDet.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      ds_OilingContentsDet.insertRow();
      $c.gus.cfTurnCreateFlag($p, false);
      var rowPos = ds_OilingContentsDet.rowPosition;
      if (rowPos > 0) {
        var rowPos = ds_OilingContentsDet.rowPosition;
        ds_OilingContentsDet.setCellData(rowPos, "oilingDt", ed_endDt.getValue());
        ds_OilingContentsDet.setCellData(rowPos, "useClsCd", lc_homeClsCd.getValue());
        ds_OilingContentsDet.setCellData(rowPos, "oilStatClntNo", lc_oilStatClntNo.getValue());
        ds_OilingContentsDet.setCellData(rowPos, "oilingClsCd", lc_oilingPurpsCd.getValue());
        if (ed_endDt.getValue() == "") {
          scwin.f_colfocus("F", "", rowPos, "oilingDt");
        } else if (lc_oilStatClntNo.getValue() == "") {
          scwin.f_colfocus("F", "", rowPos, "oilStatClntNo");
        } else if (lc_homeClsCd.getValue() == "") {
          scwin.f_colfocus("F", "", rowPos, "useClsCd");
        } else if (lc_oilingPurpsCd.getValue() == "") {
          scwin.f_colfocus("F", "", rowPos, "oilingClsCd");
        } else {
          scwin.f_colfocus("F", "", rowPos, "vehclShortCd");
        }
      }
    } else {
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    }
  }
  gr_OilingContents.setFocusedCell(0, "oilingDt", false);
};

// for=lc_oilStatClsCd event=OnSelChange()
scwin.lc_oilStatClsCd_onchange = function (info) {
  scwin.f_getOilStatNm();
};

// for=co_ds_combo2 event=OnLoadCompleted(rowCnt)
scwin.sbm_co_ds_combo2_submitdone = function (e) {
  ds_combo_item.sort("name", 0);
  lc_oilStatClntNo.setSelectedIndex(0);
};

// for=gr_OilingContents event=OnColumnPosChanged(Row,Colid)
scwin.gr_OilingContents_onaftercolumnmove = function (info) {
  return;
  // to-do
  switch (info.columnIndex) {
    case "acctDeptCd":
      gr_OilingContents.UrlImages = SEARCH_BTN;
      break;
    case "vehclShortCd":
      gr_OilingContents.UrlImages = SEARCH_BTN;
      break;
    case "exprEmpNo":
      gr_OilingContents.UrlImages = SEARCH_BTN;
      break;
    case "oilingDt":
      gr_OilingContents.UrlImages = CALENDAR_BTN;
      break;
  }
};

// <!--  Grid PopUp -->
// 그리드에 inputtype (textImage) 클릭시 이벤트
// for=gr_OilingContents event=OnPopup(row,colid,data)
scwin.acctDeptCd_image_click = function (rowIndex, colId, nowValue) {
  var rowPos = ds_OilingContentsDet.rowPosition;
  scwin.f_popupchk(rowPos, "acctDeptCd", "F");
};
scwin.vehclShortCd_image_click = function (rowIndex, colId, nowValue) {
  var rowPos = ds_OilingContentsDet.rowPosition;
  scwin.f_popupchk(rowPos, "vehclShortCd", "F");
};
scwin.exprEmpNo_image_click = function (rowIndex, colId, nowValue) {
  var rowPos = ds_OilingContentsDet.rowPosition;
  scwin.f_popupchk(rowPos, "exprEmpNo", "F");
};
scwin.oilingDt_image_click = function () {
  var rowPos = ds_OilingContentsDet.rowPosition;
  // cfOpenCalendar(gr_OilingContents, row, colid);
};

// 행추가후 해당 이벤트 타야되는거같은데 안탐. 사용하지 않고 있음.
// for=ds_OilingContentsDet event=OnRowPosChanged(row)
// 이벤트 때문에 결함 발생하는거같아 일단 빼놨음.
scwin.ds_OilingContentsDet_onrowpositionchange = function (info) {
  let rowIndex = info.newRowIndex ?? 0;
  $c.gus.cfPrepareHidVal($p, ds_OilingContentsDet, rowIndex, ["acctDeptCd", "acctDeptNm", "infmalRouteCd", "infmalRouteNm", "vehclShortCd", "vehclNo", "exprSeatCnt", "eqCd", "exprEmpNo", "drvNm"]);
  scwin.f_EditControl(rowIndex);
};

// scwin.ds_OilingContentsDet_oninsertrow = function (info) {
//     totalRows.setValue(gr_OilingContents.getTotalRow());
// };

// scwin.ds_OilingContentsDet_onremoverow = function (info) {
//     totalRows.setValue(gr_OilingContents.getTotalRow());
// };

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null && this.getRowCount() > 0) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'vehclNo', 0, gr_OilingContents, totalRows);
  }
  ;
};

/**
 * @method 
 * @name dlt_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.dlt_oninsertrow = function (info) {
  if (Object.keys(info.insertedDataObj).length < 1) return;
  const rowIdx = Object.keys(info.insertedDataObj)[0] ?? 0;
  this.setRowPosition(rowIdx);
  scwin.gridSetFocus(this, 'vehclNo', rowIdx, gr_OilingContents, totalRows);
};

/**
 * @method 
 * @name dlt_onremoverow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.dlt_onremoverow = function (info) {
  if (Object.keys(info.removedDataObj).length < 1) return;
  const rowIdx = Number(Object.keys(info.removedDataObj)[0]) - 1;
  const clacIdx = rowIdx == -1 ? 0 : rowIdx;
  this.setRowPosition(clacIdx);
  scwin.gridSetFocus(this, 'vehclNo', clacIdx, gr_OilingContents, totalRows);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid, targetRows) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
  targetRows.setValue(dataList.getRowCount());
};
scwin.gr_OilingContents_onafteredit = function (rowIndex, columnIndex, value) {
  if (rowIndex >= 0 && ds_OilingContentsDet.getTotalRow() >= rowIndex) {
    let colid = ds_OilingContentsDet.getColumnID(columnIndex);
    switch (colid) {
      case "acctDeptCd":
        // && ds_OilingContentsDet.getCellData(rowIndex, colid) != value
        if (ds_OilingContentsDet.getCellData(rowIndex, colid) != "") {
          ds_OilingContentsDet.setCellData(rowIndex, "acctDeptNm", "");
          scwin.f_popupchk(rowIndex, colid, "T");
        } else if (ds_OilingContentsDet.getCellData(rowIndex, colid) == "") {
          ds_OilingContentsDet.setCellData(rowIndex, "acctDeptCd", "");
          ds_OilingContentsDet.setCellData(rowIndex, "acctDeptNm", "");
        }
        break;
      case "vehclShortCd":
        // && ds_OilingContentsDet.getCellData(rowIndex, colid) != value
        if (ds_OilingContentsDet.getCellData(rowIndex, colid) != "") {
          ds_OilingContentsDet.setCellData(rowIndex, "vehclNo", "");
          ds_OilingContentsDet.setCellData(rowIndex, "exprSeatCntCd", "");
          ds_OilingContentsDet.setCellData(rowIndex, "eqCd", "");
          scwin.f_popupchk(rowIndex, colid, "T");
        } else if (ds_OilingContentsDet.getCellData(rowIndex, colid) == "") {
          ds_OilingContentsDet.setCellData(rowIndex, "vehclNo", "");
          ds_OilingContentsDet.setCellData(rowIndex, "vehclShortCd", "");
          ds_OilingContentsDet.setCellData(rowIndex, "exprSeatCntCd", "");
          ds_OilingContentsDet.setCellData(rowIndex, "eqCd", "");
        }
        break;
      case "exprEmpNo":
        // && ds_OilingContentsDet.getCellData(rowIndex, colid) != value
        if (ds_OilingContentsDet.getCellData(rowIndex, colid) != "") {
          ds_OilingContentsDet.setCellData(rowIndex, "drvNm", "");
          scwin.f_popupchk(rowIndex, colid, "T");
        } else if (ds_OilingContentsDet.getCellData(rowIndex, colid) == "") {
          ds_OilingContentsDet.setCellData(rowIndex, "exprEmpNo", "");
          ds_OilingContentsDet.setCellData(rowIndex, "drvNm", "");
        }
        break;

      // tobe추가 : 빈값 입력에도 자동으로 0 셋팅
      case "oilingVol":
        if (value == "") {
          ds_OilingContentsDet.setCellData(rowIndex, "oilingVol", 0);
        }
        break;
    }
  }
};
scwin.gr_OilingContents_oneditkeydown = function (info) {
  if (info.colID != "oilingVol") return;
  const event = info.event || window.event;
  const key = event.key;
  const keyCode = event.keyCode || event.which;

  // [추가] 일반 키보드 . 또는 숫자패드 . 차단
  if (key === "." || keyCode === 190 || keyCode === 110) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'주유일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'ds_OilingContentsQry',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ed_stDt',edToId:'ed_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:100px;',submenuSize:'fixed',ref:'data:ds_OilingContentsQry.homeClsCd',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예비여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_spareYn',style:'width: 80px;',submenuSize:'fixed',ref:'data:ds_OilingContentsQry.spareYn',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label','ev:onchange':'scwin.lc_oilStatClsCd_onchange',id:'lc_oilStatClsCd',ref:'data:ds_OilingContentsQry.oilStatClsCd',style:'width: 100px;',submenuSize:'fixed',visibleRowNum:'20',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_oilStatClntNo',ref:'data:ds_OilingContentsQry.oilStatClntNo',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_combo_item'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유용도 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_oilingPurpsCd',ref:'data:ds_OilingContentsQry.oilingPurpsCd',style:'width:100px;',submenuSize:'fixed',visibleRowNum:'20',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세척'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정비난방'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지점난방'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중기용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정비비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'봉고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수하물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안전관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타항목'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량별주유량목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',btnPlusYn:'Y',templateYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_OilingContents',gridDownUserAuth:'X',id:'udc_download'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_OilingContentsDet',id:'gr_OilingContents',scrollByColumn:'true',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onaftercolumnmove':'scwin.gr_OilingContents_onaftercolumnmove',readOnly:'true',columnMove:'true',fixedColumn:'1',fixedColumnNoMove:'true','ev:ontextimageclick':'scwin.gr_OilingContents_ontextimageclick',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_OilingContents_onafteredit','ev:oneditkeydown':'scwin.gr_OilingContents_oneditkeydown',gridName:'차량별주유량 등록 그리드'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'주유일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'주유소',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'소속</br>구분',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'주유</br>용도',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'예비',width:'55',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'주유</br>시간',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'차량</br>단축코드',width:'80',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'차량번호',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'사원</br>번호',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'사원명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'귀속</br>부서',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',value:'귀속</br>부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'주유량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'출고</br>단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'출고</br>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column67',value:'비고',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column70',value:'차량모델',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'차량규격',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',imageClickFunction:'scwin.oilingDt_image_click',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatClntNo',inputType:'select',width:'150',textAlign:'left',readOnly:'true',checkcomboboxVisibleRowNum:'10',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(유)현대공단주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'250020'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)동부메탈(생산물류)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'262126'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)두원물류(자가)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'294926'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)삼양주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'132616'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)삼양주유소(보관)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'294371'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)삼화고속주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'584809'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)신동주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'124712'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)오케이코리아'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'240549'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)유정주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'539242'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)의왕ICD'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'124715'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'(주)청광'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'570102'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3공단주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'587127'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'sk네트웍스만수주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'125115'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경마장주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'558881'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고대공단주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'558882'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'관동주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'583921'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'광신석유(주)직영여천주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'125116'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'금당주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'533101'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'김정순_용마주유소(진해)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'649160'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'남산주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'583846'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대경주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'570554'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동구타이어유류(주)해안주유소(전남)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'262878'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동구타이어유류㈜해안주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'124722'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동도주유소(이동)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'580746'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동원부산컨테이너터미널(주)-보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'264756'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동원부산컨테이너터미널(주)-자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'265819'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해사랑주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'547378'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해사랑주유소(보관)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'560199'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'목재단지주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'579147'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상록주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'534736'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'서해안종합물류(신길재)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'584679'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세방(주)매일주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'277781'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'송악공단주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'574908'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아포IC주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'518715'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오십천주유소(이동)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'234845'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'왕정주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'571021'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'용정에너지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'621198'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'용정에너지(물류)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'586322'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'이희선_세경해운주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'642900'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천그린주유소(김승익)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'599741'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천주유소(영업)_씨제이대한통운(주)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'324911'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천하나점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'556901'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인항주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'124726'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사 자가주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'131930'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'제철도촌주유소(고영숙)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'586605'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주식회사 의왕ICD(직매)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'283760'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주식회사 천곡주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'584968'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'코멕스주유소(주)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'249237'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'한국2주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'203662'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'형제주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'599560'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'useClsCd',inputType:'select',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingClsCd',inputType:'select',style:';text-align:left;',width:'70',textAlign:'left',readOnly:'true',checkcomboboxVisibleRowNum:'10',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세척'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비난방'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지점난방'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중기용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'봉고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수하물'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안전관리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'업무용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타항목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'spareYn',inputType:'checkbox',width:'55',readOnly:'false',noDisabledOnReadOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingHhmi',inputType:'text',width:'70',readOnly:'true',dataType:'time',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'textImage',width:'80',imageClickFunction:'scwin.vehclShortCd_image_click',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:';text-align:left;',width:'110',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exprEmpNo',inputType:'textImage',width:'70',imageClickFunction:'scwin.exprEmpNo_image_click',readOnly:'true',maxLength:'6'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'acctDeptCd',displayMode:'label',imageClickFunction:'scwin.acctDeptCd_image_click',readOnly:'true',mandatory:'true',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:';text-align:left;',id:'acctDeptNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'oilingVol',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',minNumber:'1',excelCellType:'number',excelFormat:'#,###',maxByteLength:'6',maxLength:'6',allowChar:'0-9-'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outUpr',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'gnrlOilStatNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:';text-align:left;',id:'eqModelNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';text-align:left;',id:'eqNrmNm',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'총합',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column47',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',value:'0',displayMode:'label',textAlign:'right',expression:'SUM(\'oilingVol\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',value:'0.00',displayMode:'label',textAlign:'right',expression:'AVG(\'outUpr\')',displayFormat:'#,###.#0',dataType:'number',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',value:'0',displayMode:'label',textAlign:'right',expression:'SUM(\'outAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_row_delAll',style:'',type:'button','ev:onclick':'scwin.f_DelAllRow',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_row_add2',style:'',type:'button','ev:onclick':'scwin.f_TenRowAdd',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_row_copy',style:'',type:'button','ev:onclick':'scwin.f_RowCopy',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',gridID:'gr_OilingContents',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelFunction:'scwin.cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''}},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_hiddenCombo',style:'display: none;',submenuSize:'auto',search:'start'}},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'display: none;',id:'udc_closeYn'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveExpressPersonInfo',codeId:'',validTitle:'',nameId:'',style:'display:none;',id:'udc_exprEmpNo_TR'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveEmpInfoLo',codeId:'',validTitle:'',nameId:'',style:'display:none;',id:'udc_exprEmpNo_else'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVehclInfoOil',codeId:'',validTitle:'',nameId:'',style:'display:none;',id:'udc_vehclShortCd'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVehclInfoOil',codeId:'',validTitle:'',nameId:'',style:'display:none;',id:'udc_vehclShortCd_LO'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'',validTitle:'',nameId:'',style:'display:none;',id:'udc_acctDeptCd'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'hideGroup'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'gridComCode'}}]}]}]}]})