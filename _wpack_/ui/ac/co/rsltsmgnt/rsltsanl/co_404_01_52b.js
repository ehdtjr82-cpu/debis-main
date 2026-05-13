/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_52b.xml 46367 f40f68c8b185837e83fdf8272f3e63aa167a0a2b88379d0df3f85a32b55074b7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixCostAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'closeYm',name:'기준년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fixCostAmt',name:'금액',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'closeYm',name:'기준년월',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixCostAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'기준년월',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchClntFixCostAmt',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveClntFixCostAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchClntFixCostAmt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveClntFixCostAmt',action:'/ac.co.rsltsmgnt.rsltsanl.SaveClntFixCostAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveClntFixCostAmt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.check_select = true; // 년월 변경여부 false일 경우는 재조회 및 엑셀파일 재 Import하여야 함.
scwin.fromDate = ""; // 작업날짜
//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var strFromDate = $c.date.getServerDateTime($p, "yyyyMM");
  ica_closeYm.setValue(strFromDate);
  $c.gus.cfDisableKey($p);
  hid_FromDate.setValue(ica_closeYm.getValue());
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서 , 2:조회->거래처
// 3:입력->부서 , 4:입력->거래처 , 5:입력->계정
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, sFlag) {
  var param = '';
  var code = "";
  var name = "";
  var row = gr_clntfixCostAmt.getFocusedRowIndex();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  //if (sFlag != "SKIP") {
  code = orgObjCd;
  name = orgObjNm;

  //} else {
  //     code = orgObjCd;
  //     name = orgObjNm;
  // }

  switch (select_code) {
    case '1':
      //귀속부서
      param = ",,,";
      //await udc_acctDept.cfCommonPopUp(scwin.udc_acctDept_callbackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      await udc_acctDept.cfCommonPopUpAsync(function (rtnList) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, code, name, "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '2':
      //거래처
      param = ",,,";
      await udc_clnt.cfCommonPopUpAsync(function (rtnList) {
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, code, name, "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    //그리드
    case '3':
      param = ",,,"; //귀속부서
      await udc_gracctDept.cfCommonPopUpAsync(function (rtnList) {
        scwin.f_resultGridPopUp(row, "acctDeptCd", "acctDeptNm", rtnList);
      }, code, name, "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '4':
      param = ",,,"; //거래처
      await udc_grclntNo.cfCommonPopUpAsync(function (rtnList) {
        scwin.f_resultGridPopUp(row, "clntNo", "clntNm", rtnList);
      }, code, name, "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '5':
      param = ",,,"; //관리계정코드
      await udc_grmgntAcctCd.cfCommonPopUpAsync(function (rtnList) {
        scwin.f_resultGridPopUp(row, "mgntAcctCd", "mgntAcctNm", rtnList);
      }, code, name, "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd.getValue(), orgObjNm.getValue(), select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
};
scwin.f_resultGridPopUp = function (row, codeColId, nameColId, rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] == "N/A") return;
    ds_master.setCellData(row, codeColId, rtnList[0]);
    ds_master.setCellData(row, nameColId, rtnList[1]);
  } else {
    ds_master.setCellData(row, codeColId, "");
    ds_master.setCellData(row, nameColId, "");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  // 조회조건 필수사항 체크
  var validateChk = await $c.gus.cfValidate($p, [ica_closeYm], null, true);
  if (!validateChk) return;
  dma_search.set("closeYm", ica_closeYm.getValue());
  dma_search.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  $c.sbm.execute($p, sbm_searchClntFixCostAmt);
};
scwin.sbm_searchClntFixCostAmt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    var rowCnt = ds_master.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    }
    gr_clntfixCostAmt.setFocusedCell(0, 0); //그리드 포커스

    // 저장가능상태로 Flag변경함.
    scwin.check_select = true;
  }
  ;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var row = ds_master.getRowCount();
  var colIndex = gr_clntfixCostAmt.getFocusedColumnIndex();
  ds_master.insertRow(row);
  ds_master.setCellData(row, "closeYm", ica_closeYm.getValue().trim());
  ds_master.setCellData(row, "fixCostAmt", 0);
  gr_clntfixCostAmt.setFocusedCell(row, colIndex);
};

//-------------------------------------------------------------------------
//  행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  var rowIndex = gr_clntfixCostAmt.getFocusedRowIndex();
  var colIndex = gr_clntfixCostAmt.getFocusedColumnIndex();
  if (gr_clntfixCostAmt.getFocusedRowStatus() == "C") {
    ds_master.removeRow(row);
  } else {
    ds_master.deleteRow(row);
  }
  gr_clntfixCostAmt.setFocusedCell(rowIndex, colIndex);
};

//-------------------------------------------------------------------------
//  행전체삭제
//-------------------------------------------------------------------------
scwin.f_AllDeleteRow = function () {
  var rowIndex = gr_clntfixCostAmt.getFocusedRowIndex();
  var colIndex = gr_clntfixCostAmt.getFocusedColumnIndex();

  //추가된 행은 아에 삭제하기
  var insertRows = ds_master.getRowIndexByStatus("C");
  if (insertRows.length > 0) {
    ds_master.removeRows(insertRows);
  }

  //기존 데이터들은 상태값만 삭제로 표시
  ds_master.undoAll();
  var rowIndexArray = ds_master.getRowIndexByStatus("R");
  ds_master.deleteRows(rowIndexArray);

  //기존 포커스 유지
  gr_clntfixCostAmt.setFocusedCell(rowIndex, colIndex);
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  var rowIndex = gr_clntfixCostAmt.getFocusedRowIndex();
  if (gr_clntfixCostAmt.getFocusedRowStatus() == "C") {
    //추가된 행
    ds_master.undoRow(rowIndex);
    ds_master.removeRow(rowIndex);
  } else {
    // status가 c가 아닌 다른 상태값들은 원래의 값으로 변경
    ds_master.undoRow(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (!scwin.check_select) {
    await $c.gus.cfAlertMsg($p, "조회 조건인 기준년월이 변경되어서 저장 하실 수 없습니다. 재 조회 후 저장 하시기 바랍니다.");
    return;
  }
  var chk = await $c.gus.cfValidate($p, [gr_clntfixCostAmt], null, true);
  if (!chk) return;

  // 변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  var msg = "저장하시겠습니까?";
  if (await $c.win.confirm($p, msg)) {
    //if(cfConfirmMsg(msg)==true){
    $c.sbm.execute($p, sbm_saveClntFixCostAmt);
  }
};
scwin.sbm_saveClntFixCostAmt_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var hiddenCnt = 0;
  gr_clntfixCostAmt.hiddenList.sort(function (t) {
    if (t == true) hiddenCnt++;
  });
  var colSpan = gr_clntfixCostAmt.getColCnt() - hiddenCnt;
  var options = {
    fileName: `거래처별손익 직접고정비_${ica_closeYm.getValue()}.xlsx`,
    sheetName: `거래처별손익 직접고정비_${ica_closeYm.getValue()}`,
    startRowIndex: 2,
    startColumnIndex: 0,
    type: "1",
    useStyle: true,
    hiddenVisible: true
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colSpan,
    text: "거래처별손익 직접고정비",
    textAlign: "center",
    fontSize: 18,
    drawBorder: false,
    fontName: "돋움체"
  }];
  $c.data.downloadGridViewExcel($p, gr_clntfixCostAmt, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  //gr_clntfixCostAmt.ReDraw = "false";
  ds_excel.removeAll();
  ds_temp.removeAll();
  // ds_excel.DataId = fileUploadGDS.NameValue(0, "filePath");
  // ds_excel.Reset();
  // resetForm('frm');

  if (udc_topGrd.getUpExt() == "1") {
    let options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "skipSpace": 1,
      "hidden": "0"
    };
    await $c.data.uploadGridViewCSV($p, gr_excel, options);
  } else {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0
    };
    await $c.data.uploadGridViewExcel($p, gr_excel, options);
  }
};
scwin.f_Import = async function () {
  if (ds_excel.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }

  // 로드된 엑셀 데이터 기본검증 /////////////////////////////////////////////////////////////////////////////////
  // 로드된 엑셀 데이터의 열값이 10개가 아니면 프로그램 종료 
  // 첫번째 행에 헤더값이 아닌 다른 값이 있으면, 경고 메세지 출력후 종료 
  if (ds_excel.getTotalCol() != 10) {
    // await $c.gus.cfAlertMsg("업로드 cvs 파일의 형식이 잘못되었습니다." +
    //     "\n엑셀 업로드 기본양식은 엑셀다운로드후," +
    //     "\n첫번째 타이틀 행, 두번째 공백행, 마지막 합계행을 제거하고" +
    //     "\n사용하시면 됩니다. 파일형식을 확인후 다시 업로드하시길 바랍니다." +
    //     "\n컬럼값이 상이합니다. [형식=10개] 입력한값 => " + ds_excel.CountColumn
    // );

    await $c.gus.cfAlertMsg($p, "업로드 파일의 형식이 잘못되었습니다." + "\n엑셀 업로드 기본양식은 엑셀다운로드후," + "\n첫번째 타이틀 행, 두번째 공백행, 마지막 합계행을 제거하고" + "\n사용하시면 됩니다. 파일형식을 확인후 다시 업로드하시길 바랍니다." + "\n컬럼값이 상이합니다. [형식=10개] 입력한값 => " + ds_excel.getTotalCol());
    return;
  }

  // 파일의 마지막 행에 합계행이 있을경우 삭제 경고 메세지 출력후 종료 
  if (ds_excel.getCellData(ds_excel.getRowCount() - 1, "acctDeptCd") == "합계") {
    $c.gus.cfAlertMsg($p, "업로드 파일의 형식이 잘못되었습니다." + "\n사용하신 파일의 마지막 합계행을 제거하고," + "\n다시 사용하시길 바랍니다.");
    return;
  }
  var i = 0;
  var temp = new String();
  for (i = 0; i < ds_excel.getRowCount(); i++) {
    // 관리조정금액에 ',', ' ' 값이 있을경우 제거
    temp = ds_excel.getCellData(i, "fixCostAmt");
    temp = temp.replace(/,/gi, "");
    temp = temp.replace(/ /gi, "");
    ds_excel.setCellData(i, "fixCostAmt", temp);

    // 각값에 null이나 공백이 있을경우 경고메세지 출력후 종료 
    for (var j = 0; j < ds_excel.getTotalCol(); j++) {
      if (j != 8) {
        // 적요는 null이어도 pass
        if (ds_excel.getCellData(i, ds_excel.getColumnID(j)) == "" || ds_excel.getCellData(i, ds_excel.getColumnID(j)) == null) {
          await $c.gus.cfAlertMsg($p, "업로드 파일의 데이터가 잘못되었습니다." + "\n[" + i + "] 번째 행의 [" + ds_excel.getColumnID(j) + "] 값이 없습니다.\n사용하신 파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.");
          return;
        }
      } //if
    } //for
  }
  if (await scwin.f_AddRowUploaded()) {
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
  //gr_clntfixCostAmt.ReDraw = "true";
};

//-------------------------------------------------------------------------
// 업로드 자료 추가
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = function () {
  // ds_temp에 ds_excel의 데이터를 받아서 수입한다. 1부터 엑셀의 총 행수까지 받아라
  ds_temp.setJSON(ds_excel.getAllJSON()); //ds_temp.ImportData(ds_excel.ExportData(1,ds_excel.CountRow,true));

  // ds_temp에 수입받은 총 데이터 행수가 0보다 크면
  if (ds_temp.getRowCount() > 0) {
    var data = 0;
    ds_master.setJSON([]);
    for (i = 0; i < ds_temp.getRowCount(); i++) {
      //ds_master.insertRow();
      row = ds_master.getRowCount();
      ds_master.setRowJSON(row, ds_temp.getRowJSON(i));

      // ds_master.NameValue(row, "acctDeptCd") = ds_temp.NameValue(i, "acctDeptCd");
      // ds_master.NameValue(row, "acctDeptNm") = ds_temp.NameValue(i, "acctDeptNm");
      // ds_master.NameValue(row, "clntNo") = ds_temp.NameValue(i, "clntNo");
      // ds_master.NameValue(row, "clntNm") = ds_temp.NameValue(i, "clntNm");
      // ds_master.NameValue(row, "transCargoClsCd") = ds_temp.NameValue(i, "transCargoClsCd");
      // ds_master.NameValue(row, "mgntAcctCd") = ds_temp.NameValue(i, "mgntAcctCd");
      // ds_master.NameValue(row, "mgntAcctNm") = ds_temp.NameValue(i, "mgntAcctNm");
      // ds_master.NameValue(row, "fixCostAmt") = ds_temp.NameValue(i, "fixCostAmt");
      // ds_master.NameValue(row, "rmk") = ds_temp.NameValue(i, "rmk");
      // ds_master.NameValue(row, "closeYm") = ds_temp.NameValue(i, "closeYm");//ed_closeYm.Text.trim();

      gr_clntfixCostAmt.setFocusedCell(0, 0); //그리드 포커스
    }
  }
  totalRows.setValue(ds_master.getRowCount());
  return true;
};

// tobe 삭제 : 해당 비슷한 내용 afteredit으로 변경
//-------------------------------------------------------------------------
// 그리드에서 부서코드 변경시 popup 
//-------------------------------------------------------------------------
// scwin.gr_clntfixCostAmt_ontextimageclick = function (rowIndex, columnIndex) { debugger
//     var gacctDeptCd = "";
//     var gacctDeptNm = "";
//     scwin.targetRow = rowIndex;

//     var colId = gr_clntfixCostAmt.getColumnID(columnIndex);

//     if (colId == "acctDeptCd") {
//         scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '3', 'SKIP');

//     } else if (colId == "clntNo") {
//         scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '4', 'SKIP');

//     } else if (colId == "mgntAcctCd") {
//         scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '5', 'SKIP');
//     }
// };

//tobe변경 : afteredit으로 변경
//-------------------------------------------------------------------------
// 입금통장에 대한 수정 혹은 Focus이동시 발생함.
//-------------------------------------------------------------------------
// <script language=JavaScrds_masterxCostAmt event=OnExit(row,colid,olddata)>
// if ( colid == "acctDeptCd") {
//     if (ds_master.NameValue(row,"acctDeptCd").trim() == "") {
//         ds_master.NameValue(row,"acctDeptCd") = "";
//         ds_master.NameValue(row,"acctDeptNm") = "";
//         return;
//     }
//     var gacctDeptCd = ds_master.NameValue(row,"acctDeptCd");
//     var gacctDeptNm = ds_master.NameValue(row,"acctDeptNm");
//     var rtnList = new Array();	
//     rtnList = f_openPopUp(gacctDeptCd,gacctDeptNm,'3','SKIP');
//     if (rtnList != null) {
//         if ( rtnList[0] == "N/A" ) return ;
//         ds_master.NameValue(row,"acctDeptCd") = rtnList[0];
//         ds_master.NameValue(row,"acctDeptNm") = rtnList[1];
//     } else {
//         ds_master.NameValue(row,"acctDeptCd") = "";
//         ds_master.NameValue(row,"acctDeptNm") = "";
//     }
// } else if ( colid == "clntNo" ) {
//     if (ds_master.NameValue(row,"clntNo").trim() == "") {
//         ds_master.NameValue(row,"clntNo") = "";
//         ds_master.NameValue(row,"clntNm") = "";
//         return;
//     }
//     var gacctDeptCd = ds_master.NameValue(row,"clntNo");
//     var gacctDeptNm = ds_master.NameValue(row,"clntNm");
//     var rtnList = new Array();	
//     rtnList = f_openPopUp(gacctDeptCd,gacctDeptNm,'4','SKIP');
//     if (rtnList != null) {
//         if ( rtnList[0] == "N/A" ) return ;
//         ds_master.NameValue(row,"clntNo") = rtnList[0];
//         ds_master.NameValue(row,"clntNm") = rtnList[1];
//     } else {
//         ds_master.NameValue(row,"clntNo") = "";
//         ds_master.NameValue(row,"clntNm") = "";
//     }
// } else if ( colid == "mgntAcctCd" ) {
//     if (ds_master.NameValue(row,"mgntAcctCd").trim() == "") {
//         ds_master.NameValue(row,"mgntAcctCd") = "";
//         ds_master.NameValue(row,"mgntAcctNm") = "";
//         return;
//     }
//     var gacctDeptCd = ds_master.NameValue(row,"mgntAcctCd");
//     var gacctDeptNm = ds_master.NameValue(row,"mgntAcctNm");
//     var rtnList = new Array();	
//     rtnList = f_openPopUp(gacctDeptCd,gacctDeptNm,'5','SKIP');
//     if (rtnList != null) {
//         if ( rtnList[0] == "N/A" ) return ;
//         ds_master.NameValue(row,"mgntAcctCd") = rtnList[0];
//         ds_master.NameValue(row,"mgntAcctNm") = rtnList[1];
//     } else {
//         ds_master.NameValue(row,"mgntAcctCd") = "";
//         ds_master.NameValue(row,"mgntAcctNm") = "";
//     }
// }

//-------------------------------------------------------------------------
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDept_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue() != "") {
    scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '1', 'CD');
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clnt_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2', 'NM');
};
scwin.udc_acctDept_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), '1', 'T');
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo.getValue(), ed_clntNm.getValue(), '2', 'F');
};
scwin.btn_delete_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_closeYm, ed_acctDeptCd, ed_acctDeptNm, ed_clntNo, ed_clntNm]);
};

//-------------------------------------------------------------------------
// 그리드 편집시
//-------------------------------------------------------------------------
// for=gr_clntfixCostAmt event=OnPopup(row,colid,data)
scwin.gr_clntfixCostAmt_onafteredit = async function (rowIndex, columnIndex, value) {
  var colId = gr_clntfixCostAmt.getColumnID(columnIndex);
  if (colId == "acctDeptCd") {
    if (ds_master.getCellData(rowIndex, "acctDeptCd").trim() == "") {
      ds_master.setCellData(rowIndex, "acctDeptCd", "");
      ds_master.setCellData(rowIndex, "acctDeptNm", "");
      return;
    }
    var gacctDeptCd = ds_master.getCellData(rowIndex, "acctDeptCd");
    var gacctDeptNm = ds_master.getCellData(rowIndex, "acctDeptNm");
    await scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '3', 'SKIP', rowIndex);
  } else if (colId == "clntNo") {
    if (ds_master.getCellData(rowIndex, "clntNo").trim() == "") {
      ds_master.setCellData(rowIndex, "clntNo", "");
      ds_master.setCellData(rowIndex, "clntNm", "");
      return;
    }
    var gacctDeptCd = ds_master.getCellData(rowIndex, "clntNo");
    var gacctDeptNm = ds_master.getCellData(rowIndex, "clntNm");
    await scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '4', 'SKIP', rowIndex);
  } else if (colId == "mgntAcctCd") {
    if (ds_master.getCellData(rowIndex, "mgntAcctCd").trim() == "") {
      ds_master.setCellData(rowIndex, "mgntAcctCd", "");
      ds_master.setCellData(rowIndex, "mgntAcctNm", "");
      return;
    }
    var gacctDeptCd = ds_master.getCellData(rowIndex, "mgntAcctCd");
    var gacctDeptNm = ds_master.getCellData(rowIndex, "mgntAcctNm");
    await scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '5', 'SKIP', rowIndex);
  }
};
scwin.gr_excel_onfilereadend = function (value) {
  scwin.f_Import();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',mandatory:'true',displayFormat:'yyyy/MM','ev:onblur':'scwin.ica_closeYm_onblur',title:'기준년월',validExp:'기준년월:yes:date=YYYYMM',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'retrieveAcctDeptCdInfoPopup',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',id:'udc_acctDept',objTypeCode:'data',validExpCode:'귀속부서:no:length=5',allowCharCode:'0-9',maxlengthCode:'5',maxlengthName:'30',btnId:'btn_acctDept','ev:onclickEvent':'scwin.udc_acctDept_onclickEvent',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDept_onblurNameEvent',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'retrieveClntListPopup',popupTitle:'',selectID:'retrieveClntList',style:'',id:'udc_clnt',objTypeCode:'data',maxlengthCode:'6',btnId:'btn_clnt','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',validTitle:'거래처','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clnt_onblurNameEvent',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별손익 직접고정비',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',id:'udc_topGrd',gridDownYn:'Y',gridUpYn:'Y',templateYn:'N',gridID:'gr_clntfixCostAmt',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',gridUpFn:'scwin.f_Upload',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_clntfixCostAmt',style:'',visibleRowNum:'14',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15px',autoFit:'allColumn','ev:onafteredit':'scwin.gr_clntfixCostAmt_onafteredit',dataName:'거래처별손익직접고정비',validExp:'acctDeptCd::yes:maxLength=5:number,acctDeptNm::yes,clntNo::yes:maxLength=6:number,clntNm::yes,transCargoClsCd::yes:maxLength=1,mgntAcctCd::yes:maxLength=7:number,mgntAcctNm::yes,fixCostAmt::no:number,closeYm::yes:date=YYYYMM'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',style:'color:red',value:'귀속부서코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column17',inputType:'text',style:'color:red',value:'귀속부서명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',style:'color:red',value:'거래처코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column13',inputType:'text',style:'color:red',value:'거래처명',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',style:'color:red',value:'구분코드',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',style:'color:red',value:'관리계정코드',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column3',inputType:'text',style:'color:red',value:'관리계정명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column5',inputType:'text',style:'color:blue',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'적요',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'기준년월',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value',id:'acctDeptCd',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'false',mandatory:'true',maxLength:'5',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',mandatory:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'value',id:'clntNo',inputType:'textImage',style:'',value:'',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'false',mandatory:'true',allowChar:'0-9',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'130',mandatory:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transCargoClsCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',viewType:'default',readOnly:'false',mandatory:'true',maxLength:'1',editModeEvent:'onclick',emptyItem:'true',emptyValue:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CNTR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BULK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'value',id:'mgntAcctCd',inputType:'textImage',style:'',value:'',width:'130',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick',readOnly:'false',mandatory:'true',allowChar:'0-9',maxLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'120',mandatory:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixCostAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'false',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'150',editModeEvent:'ondblclick',readOnly:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',style:'',value:'',width:'100',mandatory:'true',dataType:'date',displayFormat:'yyyyMM',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'total',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###',dataType:'number',expression:'SUM(\'fixCostAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-txt red',id:'',label:'※ 엑셀 업로드시에는 기존 데이터를 전체 삭제후 실행하세요 ※ ',style:''}},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_row',EngYn:'N',gridID:'gr_clntfixCostAmt',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnCancelYn:'N',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y'}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_AllDeleteRow',id:'btn_AllDeleteRow',style:'',type:'button',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_UndoRow',id:'btn_undoRow',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'엑셀업로드 시 구분코드는 C, B, E로 구분하여 입력하시기 바랍니다. ( C : CNTR, B : BULK, E : 기타 )',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none'},E:[{T:1,N:'xf:input',A:{style:'',id:'hid_FromDate'}},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfoPopup',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_gracctDeptCd',validTitle:'',nameId:'ed_gracctDeptNm',style:'',id:'udc_gracctDept'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_grclntNo',nameId:'ed_grclntNm',popupID:'retrieveClntListPopup',selectID:'retrieveClntList',style:'',validTitle:'',id:'udc_grclntNo'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'retrieveMgntAcctCdInfoPopup',selectID:'retrieveMgntAcctCdInfo',style:'',validTitle:'',id:'udc_grmgntAcctCd'}}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_excel','ev:oneditend':'scwin.gr_clntfixCostAmt_oneditend','ev:ontextimageclick':'scwin.gr_clntfixCostAmt_ontextimageclick',focusMode:'row',id:'gr_excel',rowStatusVisible:'true',rowStatusWidth:'15px',style:'display:none',visibleRowNum:'14',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',style:'color:red',value:'귀속부서코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column17',inputType:'text',style:'color:red',value:'귀속부서명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',style:'color:red',value:'거래처코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column13',inputType:'text',style:'color:red',value:'거래처명',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',style:'color:red',value:'구분코드',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',style:'color:red',value:'관리계정코드',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column3',inputType:'text',style:'color:red',value:'관리계정명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column5',inputType:'text',style:'color:blue',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',sortable:'false',style:'',value:'적요',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'기준년월',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'value',editModeEvent:'onclick',editModeEventIcon:'onclick',id:'acctDeptCd',inputType:'textImage',mandatory:'true',maxLength:'5',readOnly:'false',style:'',value:'',viewType:'default',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',mandatory:'true',readOnly:'true',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'value',editModeEvent:'onclick',editModeEventIcon:'onclick',id:'clntNo',inputType:'textImage',mandatory:'true',maxLength:'6',readOnly:'false',style:'',value:'',viewType:'default',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',mandatory:'true',readOnly:'true',style:'',textAlign:'left',value:'',width:'130'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',editModeEvent:'onclick',emptyItem:'true',emptyValue:'-1',id:'transCargoClsCd',inputType:'select',mandatory:'true',maxLength:'1',readOnly:'false',ref:'',style:'',value:'',viewType:'default',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CNTR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BULK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]}]}]},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'value',editModeEvent:'onclick',editModeEventIcon:'onclick',id:'mgntAcctCd',inputType:'textImage',mandatory:'true',maxLength:'7',readOnly:'false',style:'',value:'',viewType:'default',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',mandatory:'true',readOnly:'true',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',editModeEvent:'ondblclick',id:'fixCostAmt',inputType:'text',readOnly:'false',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',editModeEvent:'ondblclick',id:'rmk',inputType:'text',readOnly:'false',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyyMM',displayMode:'label',id:'closeYm',inputType:'text',mandatory:'true',style:'',value:'',width:'100'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'total',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'100'}}]}]}]}]}]}]}]}]})