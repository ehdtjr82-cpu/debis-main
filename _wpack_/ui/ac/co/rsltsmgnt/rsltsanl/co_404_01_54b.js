/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_54b.xml 53501 bde080a695e4d7d65a8ba75e87fae3c7ab865e85a6356aa9fed8b071baa342f1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search','ev:onmodelchange':'scwin.dma_search_onmodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'closeYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hdCloseYm',name:'hdCloseYm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload','ev:oncelldatachange':'scwin.ds_master_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'기준년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_transCargoClsCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'transCargoClsCd',name:'transCargoClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCargoClsNm',name:'transCargoClsNm'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'기준년월',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveClntControlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.rsltsanl.SaveClntControlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 거래처별손익 조정금액 (co_404_01_54b)
// 작성자 : 송정희
// 최초작성일자 : 2026-11-14
//-------------------------------------------------------------------------
scwin.fromDate_YyMm = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.check_select = true; // 년월 변경여부 false일 경우는 재조회 및 엑셀파일 재 Import하여야 함.
scwin.hid_closeYm = "";
scwin.onpageload = function () {
  var ds_transCargoClsCd_data = [{
    "transCargoClsCd": "C",
    "transCargoClsNm": "CNTR"
  }, {
    "transCargoClsCd": "B",
    "transCargoClsNm": "BULK"
  }, {
    "transCargoClsCd": "E",
    "transCargoClsNm": "기타"
  }];
  ds_transCargoClsCd.setJSON(ds_transCargoClsCd_data);
  ed_closeYm.setValue(scwin.fromDate_YyMm);
  scwin.hid_closeYm = ed_closeYm.getValue();
  // $c.gus.cfDisableObjects([btn_AddRow, btn_CancelRow, btn_AllDeleteRow, btn_Save]);	        	
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_closeYm.getValue().trim().length <= 0) {
    await $c.win.alert($p, "기준년월은 필수입력항목입니다.");
    return;
  }
  // 조회조건 필수사항 체크
  if (!$c.gus.cfValidate($p, [ed_closeYm])) {
    return;
  }

  // dma_search.set("closeYm", ed_closeYm.getValue()); 
  // dma_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue());
  // dma_search.set("clntNo", ed_clntNo.getValue());

  $c.sbm.execute($p, sbm_master);
};

//-------------------------------------------------------------------------
// 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!scwin.check_select) {
    await $c.win.alert($p, "조회 조건인 기준년월이 변경되어서 저장 하실 수 없습니다. 재 조회 후 저장 하시기 바랍니다.");
    return;
  }
  // 필수입력사항 확인
  if (!$c.gus.cfValidate($p, [gr_master])) {
    return;
  }
  // 변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 부서코드팝업 acctDeptCd
//-------------------------------------------------------------------------
scwin.f_acctDeptCdPopUp = function (e) {
  udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
};
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]);
    ed_srchAcctDeptNm.setValue(ret[1]);
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 거래처코드팝업 clntNo
//-------------------------------------------------------------------------
scwin.f_clntNoPopUp = function (e) {
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
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_clntNo.setValue(ret[0]);
    ed_clntNm.setValue(ret[1]);
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue().trim() == "") {
    ed_clntNm.setValue("");
  }
  if (ed_clntNo.originalValue == ed_clntNo.realValue) {
    return;
  }
  if (ed_clntNo.getValue() == "") {
    ed_clntNm.setValue("");
  } else {
    ed_clntNm.setValue("");
    scwin.f_clntNoPopUp();
  }
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  if (ed_clntNm.getValue().trim() == "") {
    ed_clntNo.setValue("");
  }
  if (ed_clntNm.originalValue == ed_clntNm.realValue) {
    return;
  }
  if (ed_clntNm.getValue() == "") {
    ed_clntNo.setValue("");
  } else {
    ed_clntNo.setValue("");
    scwin.f_clntNoPopUp();
  }
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_clntNoPopUp();
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  elen = ext.length;
  flen = path.length;
  return ext == path.substring(flen - elen, flen);
};

/**
 * 엑셀 파일 업로드
 */
scwin.f_excelUpload = async function () {
  // if ( await $c.gus.cfCheckCreateFlag() == true) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_WRN_008,["자료"]));
  //     return;
  // }

  // let ret = $c.gus.cfValidate([tb_retrieve])

  // if (!ret) {
  //     return;
  // }

  if (excelUdc.getUpExt() == "1") {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "header": "1",
      "type": "1",
      "startRowIndex": 0,
      // 시작row
      "skipSpace": "1",
      // 공백무시 여부(1이면 무시 0이면 포함)
      "hidden": "0",
      // 왼쪽히든값유무(미포함)
      "fillHidden": "0" // 오른쪽히든값유무(무시)
    };
    ds_excel.removeAll();
    await $c.data.uploadGridViewCSV($p, gr_excel, options);
  } else {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "type": "1",
      "headerExist": "1",
      "startRowIndex": 0,
      // 시작row
      "footerExist": "0"
    };
    ds_excel.removeAll();
    await $c.data.uploadGridViewExcel($p, gr_excel, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Import = async function () {
  if (ds_excel.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  if (await scwin.f_AddRowUploaded()) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, "업로드작업이 완료되었습니다.");
  }
};

// 업로드 자료 추가
scwin.f_AddRowUploaded = async function () {
  let check = await scwin.f_CheckUploadData();
  if (check == false) return false;
  if (ds_excel.getRowCount() > 0) {
    ds_master.removeAll();
    for (i = 0; i < ds_excel.getRowCount(); i++) {
      let row = ds_master.insertRow();

      // 관리조정금액에 ',', ' ' 값이 있을경우 제거
      let tmpMgntCtrlAmt = ds_excel.getCellData(i, "mgntCtrlAmt");
      // tmpMgntCtrlAmt = tmpMgntCtrlAmt.replace(/ /gi, "");
      // tmpMgntCtrlAmt = tmpMgntCtrlAmt.replace(/,/gi, "");

      ds_master.setCellData(row, "acctDeptCd", ds_excel.getCellData(i, "acctDeptCd").trim());
      ds_master.setCellData(row, "acctDeptNm", ds_excel.getCellData(i, "acctDeptNm").trim());
      ds_master.setCellData(row, "clntNo", ds_excel.getCellData(i, "clntNo").trim());
      ds_master.setCellData(row, "clntNm", ds_excel.getCellData(i, "clntNm").trim());
      ds_master.setCellData(row, "transCargoClsCd", ds_excel.getCellData(i, "transCargoClsCd").trim());
      ds_master.setCellData(row, "mgntAcctCd", ds_excel.getCellData(i, "mgntAcctCd").trim());
      ds_master.setCellData(row, "mgntAcctNm", ds_excel.getCellData(i, "mgntAcctNm").trim());
      ds_master.setCellData(row, "mgntCtrlAmt", tmpMgntCtrlAmt);
      ds_master.setCellData(row, "rmk", ds_excel.getCellData(i, "rmk").trim());
      ds_master.setCellData(row, "closeYm", ds_excel.getCellData(i, "closeYm").trim());
    }
  }
  totalRows.setValue(ds_master.getRowCount());
  return true;
};

//-------------------------------------------------------------------------
// 업로드된 데이터 체크
//-------------------------------------------------------------------------
scwin.f_CheckUploadData = async function () {
  let sMsg = "";
  let sExtNm = "";
  if (excelUdc.getUpExt() == "1") {
    // csv  일때
    sExtNm = "CVS";
  } else {
    sExtNm = "엑셀";
  }
  var rChkData = ds_excel.getDataRow(0);
  if (ds_excel.getTotalCol() != 10 || $c.gus.cfIsNull($p, rChkData.acctDeptCd) || rChkData.acctDeptCd == "귀속부서코드") {
    $c.gus.cfProgressWinClose($p);
    sMsg = "업로드 " + sExtNm + " 파일의 형식이 잘못되었습니다." + "\n엑셀 업로드 기본양식은 엑셀다운로드후," + "\n첫번째 타이틀 행, 두번째 공백행, 마지막 합계행을 제거하고" + "\n사용하시면 됩니다. 파일형식을 확인후 다시 업로드하시길 바랍니다." + "\n컬럼값이 상이합니다. [형식=10개] 입력한값 => " + ds_excel.getTotalCol();
    await $c.win.alert($p, sMsg);
    return false;
  }

  // console.log("===========> 합계:"+ds_excel.getCellData(ds_excel.getTotalCol(), ds_excel.getColumnID(0)));
  // if( ds_excel.getCellData(ds_excel.getTotalCol(), ds_excel.getColumnID(0)) == "합계" ) {
  //     $c.gus.cfProgressWinClose();
  //     sMsg = "업로드 "+sExtNm+" 파일의 형식이 잘못되었습니다."
  //     + "\n사용하신 "+sExtNm+"파일의 마지막 합계행을 제거하고,"
  //     + "\n다시 사용하시길 바랍니다."
  //     ;
  //     await $c.win.alert(sMsg);
  //     return false;
  // }

  for (var i = 0; i < ds_excel.getTotalRow(); i++) {
    if (ds_excel.getCellData(i, "acctDeptCd") == "합계") {
      $c.gus.cfProgressWinClose($p);
      sMsg = "업로드 " + sExtNm + " 파일의 형식이 잘못되었습니다." + "\n사용하신 " + sExtNm + "파일의 마지막 합계행을 제거하고," + "\n다시 사용하시길 바랍니다.";
      await $c.win.alert($p, sMsg);
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_excel.getCellData(i, "acctDeptCd"))) {
      $c.gus.cfProgressWinClose($p);
      sMsg = "업로드 " + sExtNm + " 파일의 데이터가 잘못되었습니다." + "\n[" + i + "] 번째 행의 [귀속부서코드] 값이 없습니다.\n사용하신 " + sExtNm + "파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.";
      await $c.win.alert($p, sMsg);
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_excel.getCellData(i, "clntNo"))) {
      $c.gus.cfProgressWinClose($p);
      sMsg = "업로드 " + sExtNm + " 파일의 데이터가 잘못되었습니다." + "\n[" + i + "] 번째 행의 [거래처코드] 값이 없습니다.\n사용하신 " + sExtNm + "파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.";
      await $c.win.alert($p, sMsg);
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_excel.getCellData(i, "transCargoClsCd"))) {
      $c.gus.cfProgressWinClose($p);
      sMsg = "업로드 " + sExtNm + " 파일의 데이터가 잘못되었습니다." + "\n[" + i + "] 번째 행의 [구분코드] 값이 없습니다.\n사용하신 " + sExtNm + "파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.";
      await $c.win.alert($p, sMsg);
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_excel.getCellData(i, "mgntAcctCd"))) {
      $c.gus.cfProgressWinClose($p);
      sMsg = "업로드 " + sExtNm + " 파일의 데이터가 잘못되었습니다." + "\n[" + i + "] 번째 행의 [관리계정코드] 값이 없습니다.\n사용하신 " + sExtNm + "파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.";
      await $c.win.alert($p, sMsg);
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_excel.getCellData(i, "mgntCtrlAmt"))) {
      $c.gus.cfProgressWinClose($p);
      sMsg = "업로드 " + sExtNm + " 파일의 데이터가 잘못되었습니다." + "\n[" + i + "] 번째 행의 [금액] 값이 없습니다.\n사용하신 " + sExtNm + "파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.";
      await $c.win.alert($p, sMsg);
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서 , 2:조회->거래처
// 3:입력->부서 , 4:입력->거래처 , 5:입력->계정
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, sFlag) {
  var rtnList = new Array();
  var sCmdName = "";
  var param = '';
  var code = "";
  var name = "";
  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  if (sFlag != "SKIP") {
    code = orgObjCd;
    name = orgObjNm;
  } else {
    code = orgObjCd;
    name = orgObjNm;
  }
  switch (select_code) {
    case '1':
      // sCmdName = "retrieveAcctDeptCdInfo";       
      param = ",,,";
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, code, name, sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '2':
      // sCmdName = "retrieveClntList";        
      param = ",,,";
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '3':
      // sCmdName = "retrieveAcctDeptCdInfo";       
      param = ",,,";
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, code, name, sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '4':
      // sCmdName = "retrieveClntList";            
      param = ",,,";
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, code, name, sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case '5':
      // sCmdName = "retrieveMgntAcctCdInfo";        
      param = ",,,";
      udc_mgntAcctCd.cfCommonPopUp(scwin.udc_mgntAcctCd_callBackFunc, code, name, sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
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
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]);
    ed_srchAcctDeptNm.setValue(ret[1]);
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_clntNo.setValue(ret[0]);
    ed_clntNm.setValue(ret[1]);
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let row = ds_master.insertRow();
  // let row = ds_master.getRowCount() - 1;
  ds_master.setCellData(row, "closeYm", ed_closeYm.getValue());
  ds_master.setRowPosition(row);
  gr_master.setFocusedCell(row, "acctDeptCd", true);
};

//-------------------------------------------------------------------------
//  행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  if (ds_master.getRowStatus(ds_master.getRowPosition()) == "C") {
    ds_master.removeRow(ds_master.getRowPosition());
  } else {
    ds_master.deleteRow(ds_master.getRowPosition());
  }
};

//-------------------------------------------------------------------------
//  행전체삭제
//-------------------------------------------------------------------------
scwin.f_AllDeleteRow = function () {
  for (var i = ds_master.getTotalRow() - 1; i >= 0; i--) {
    if (ds_master.getRowStatus(i) == "C") {
      ds_master.removeRow(i);
    } else {
      ds_master.deleteRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  if (ds_master.getRowStatus(ds_master.getRowPosition()) == "C") {
    ds_master.removeRow(ds_master.getRowPosition());
  } else {
    ds_master.undoRow(ds_master.getRowPosition());
  }
};
scwin.btn_AllDelete_onclick = function (e) {
  scwin.f_AllDeleteRow();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "거래처별손익 조정금액";
  let options = {
    fileName: sheetTitle + "_" + ed_closeYm.getValue() + ".xlsx",
    sheetName: sheetTitle + "_" + ed_closeYm.getValue(),
    type: "1",
    headerColor: "#d9d9d9",
    //"#E8E8E8", //연한회색 #33CCCC
    hiddenVisible: "true",
    //히든값(true : 포함, false : 미포함)
    startRowIndex: 2,
    //시작되는 행의 번호(헤더 포함)
    useFooter: "true" //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
  };

  //그리드에 대한 내용을 추가 옵션
  let infoArr = [
  //제목
  {
    rowIndex: 0 //제목을 표시할 행 index
    ,

    colIndex: 0 //제목을 표시할 열 index
    ,

    rowSpan: 1 //병합할 행의 수
    ,

    colSpan: 10 //병합할 열의 수
    ,

    text: sheetTitle //표시할 내용(제목)
    ,

    textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
    ,

    fontSize: "18px" //폰트 size
    ,

    fontName: "돋움체" //폰트이름 
    //, drawBorder: false       //cell의 border 지정(true, false)
    // ,useFooter:"true"        //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (ds_master.getTotalRow() > 0) {
    totalRows.setValue(rowCnt);
    //ds_master.multisort(scwin.sort_options);         
  }
  // $c.gus.cfEnableObjects([btn_AddRow, btn_CancelRow, btn_AllDeleteRow, btn_Save]);
};
scwin.btn_Cancel_onclick = function (e) {
  ds_master.undoRow(ds_master.getRowPosition());
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_acctDeptCdInfo_callBackFunc = async function (ret) {
  let row = gr_master.getFocusedRowIndex();
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_master.setCellData(row, "acctDeptCd", ret[0]);
    ds_master.setCellData(row, "acctDeptNm", ret[1]);
  } else {
    ds_master.setCellData(row, "acctDeptCd", "");
    ds_master.setCellData(row, "acctDeptNm", "");
  }
};
scwin.udc_clntNoInfo_callBackFunc = async function (ret) {
  let row = gr_master.getFocusedRowIndex();
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_master.setCellData(row, "clntNo", ret[0]);
    ds_master.setCellData(row, "clntNm", ret[1]);
  } else {
    ds_master.setCellData(row, "clntNo", "");
    ds_master.setCellData(row, "clntNm", "");
  }
};
scwin.udc_mgntAcctCdInfo_callBackFunc = async function (ret) {
  let row = gr_master.getFocusedRowIndex();
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_master.setCellData(row, "mgntAcctCd", ret[0]);
    ds_master.setCellData(row, "mgntAcctNm", ret[1]);
  } else {
    ds_master.setCellData(row, "mgntAcctCd", "");
    ds_master.setCellData(row, "mgntAcctNm", "");
  }
};
scwin.gr_master_onviewchange = function (info) {
  let newData = info.newValue;
  let oldData = info.oldValue;
  if (info.colId == "acctDeptCd") {
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(info.rowIndex, "acctDeptNm", "");
      return;
    }
    if (newData == oldData) return;
  } else if (info.colId == "clntNo") {
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(info.rowIndex, "clntNm", "");
      return;
    }
    if (newData == oldData) return;
  } else if (info.colId == "mgntAcctCd") {
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(info.rowIndex, "mgntAcctNm", "");
      return;
    }
    if (newData == oldData) return;
  } else if (info.colId == "transCargoClsCd") {
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(info.rowIndex, "transCargoClsCd", "");
      return;
    }
  }
};

// type 에 맞는 info 정보 셋팅
scwin.f_custom_Info = function (type) {
  let ret = "";
  switch (type) {
    case "select":
      ret = {
        inputType: "select",
        options: {
          viewType: "icon",
          chooseOption: true
        },
        itemSet: {
          nodeset: "data:ds_transCargoClsCd",
          label: "transCargoClsNm",
          value: "transCargoClsCd"
        }
      };
      break;
  }
  return ret;
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  if (ed_srchAcctDeptCd.originalValue == ed_srchAcctDeptCd.realValue) {
    return;
  }
  if (ed_srchAcctDeptCd.getValue() == "") {
    ed_srchAcctDeptNm.setValue("");
  } else {
    ed_srchAcctDeptNm.setValue("");
    scwin.f_acctDeptCdPopUp();
  }
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  if (ed_srchAcctDeptNm.originalValue == ed_srchAcctDeptNm.realValue) {
    return;
  }
  if (ed_srchAcctDeptNm.getValue() == "") {
    ed_srchAcctDeptCd.setValue("");
  } else {
    ed_srchAcctDeptCd.setValue("");
    scwin.f_acctDeptCdPopUp();
  }
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_acctDeptCdPopUp();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  ds_master.reform();
  scwin.f_Retrieve();
};
scwin.sbm_master_submitdone = function (e) {
  scwin.check_select = true;
};
scwin.dma_search_onmodelchange = function (info) {
  if (info.key == "closeYm") {
    scwin.check_select = false;
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_closeYm.setValue(scwin.fromDate_YyMm);
};
scwin.ds_master_oncelldatachange = function (info) {
  var columnId = info.colId;
  var rowIndex = info.rowIndex;

  //귀속부서코드
  if (columnId == "acctDeptCd") {
    ds_master.setCellData(rowIndex, "acctDeptNm", "");
  } else if (columnId == "clntNo") {
    ds_master.setCellData(rowIndex, "clntNm", "");
  } else if (columnId == "mgntAcctCd") {
    ds_master.setCellData(rowIndex, "mgntAcctNm", "");
  }
};
scwin.gr_master_onviewchange = function (info) {
  if (info.colId == "acctDeptCd" || info.colId == "clntNo" || info.colId == "mgntAcctCd") {
    // console.log("==============gr_master_onviewchange");
    // scwin.gr_master_ontextimageclick(info.rowIndex, gr_master.getColumnIndex(info.colId));
  }
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  // if (columnId == "acctDeptNm" ) return;

  if ((columnId == "acctDeptCd" || columnId == "clntNo" || columnId == "mgntAcctCd") && ds_master.getRowStatus(rowIndex) == "C") {
    gr_master.setColumnReadOnly("acctDeptCd", false);
    gr_master.setColumnReadOnly("clntNo", false);
    gr_master.setColumnReadOnly("mgntAcctCd", false);
  } else {
    gr_master.setColumnReadOnly("acctDeptCd", true);
    gr_master.setColumnReadOnly("clntNo", true);
    gr_master.setColumnReadOnly("mgntAcctCd", true);
  }
};
scwin.gr_master_ontextimageclick = async function (rowIndex, columnIndex) {
  let colId = gr_master.getColumnID(columnIndex);
  let value = ds_master.getCellData(rowIndex, colId);
  if (colId == "acctDeptCd") {
    ds_master.setCellData(rowIndex, "acctDeptCd", "");
    ds_master.setCellData(rowIndex, "acctDeptNm", "");
    await udc_acctDeptCd.cfCommonPopUp(function (rtnList) {
      if (rtnList != 'N/A' && rtnList != "") {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_master, rowIndex, "acctDeptCd", "acctDeptNm", [""]);
        resolve(true);
      } else {
        resolve(false);
      }
    }, value, "", "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
  }
  if (colId == "clntNo") {
    ds_master.setCellData(rowIndex, "clntNo", "");
    ds_master.setCellData(rowIndex, "clntNm", "");
    await udc_clntNo.cfCommonPopUp(function (rtnList) {
      if (rtnList != 'N/A' && rtnList != "") {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_master, rowIndex, "clntNo", "clntNm", [""]);
        resolve(true);
      } else {
        resolve(false);
      }
    }, value, "", "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
  }
  if (colId == "mgntAcctCd") {
    ds_master.setCellData(rowIndex, "mgntAcctCd", "");
    ds_master.setCellData(rowIndex, "mgntAcctNm", "");
    await udc_mgntAcctCd.cfCommonPopUp(function (rtnList) {
      if (rtnList != 'N/A' && rtnList != "") {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_master, rowIndex, "mgntAcctCd", "mgntAcctNm", [""]);
        resolve(true);
      } else {
        resolve(false);
      }
    }, value, "", "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
  }
};
scwin.gr_excel_onfilereadend = function (value) {
  scwin.f_Import();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ed_closeYm',style:'',pickerType:'dynamic',ref:'data:dma_search.closeYm',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfoPopup',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_srchAcctDeptCd',popupTitle:'',nameId:'ed_srchAcctDeptNm',style:'',code:'acctDeptCd',btnId:'btn_dept',id:'udc_acctDeptCd',refDataCollection:'dma_search',name:'acctDeptNm','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'retrieveClntListPopUp',popupTitle:'',selectID:'retrieveClntList',style:'',code:'clntNo',refDataCollection:'dma_search',id:'udc_clntNo',btnId:'btn_clntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별손익 조정금액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridID:'gr_master',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',id:'excelUdc',gridUpFn:'scwin.f_excelUpload'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_master_oncellclick','ev:ontextimageclick':'scwin.gr_master_ontextimageclick','ev:onviewchange':'scwin.gr_master_onviewchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'귀속부서코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'귀속부서명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'구분코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'관리계정코드',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'관리계정명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'금액',width:'110',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'적요',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'기준년월',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'textImage',style:'',value:'',width:'120',allowChar:'0-9',maxLength:'5',blockSelect:'false',editModeEvent:'onclick',editModeEventIcon:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'120',maxLength:'6',allowChar:'0-9',editModeEvent:'onclick',editModeEventIcon:'onclick',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transCargoClsCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_transCargoClsCd'},E:[{T:1,N:'w2:label',A:{ref:'transCargoClsNm'}},{T:1,N:'w2:value',A:{ref:'transCargoClsCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'textImage',style:'',value:'',width:'130',allowChar:'0-9',maxLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntCtrlAmt',inputType:'text',style:'',value:'',width:'110',textAlign:'right',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column23',value:'0',displayMode:'label',textAlign:'right',expression:'sum("mgntCtrlAmt")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'','ev:onclickEvent':'scwin.udc_mgntAcctCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mgntAcctCd_onviewchangeCodeEvent',id:'udc_mgntAcctCd',mandatoryCode:'',nameId:'',popupID:'popup_mgntAcctCd',selectID:'retrieveAcctCdInfo',style:'width:%; height:px; ;display:none;',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'엑셀 업로드시에는 기존 데이터를 전체 삭제후 실행하세요',class:'txt-dot  txt-red'}}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'N',btnDelYn:'N',gridID:'gr_master',id:'udc_bottomGrdBtn',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_CancelRow',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_delRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowDelYn:'Y',rowDelFunction:'scwin.f_DeleteRow'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_AllDeleteRow',style:'',id:'btn_AllDeleteRow',type:'button',class:'btn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]},{T:1,N:'w2:button',A:{class:'btn ','ev:onclick':'scwin.f_DeleteRow',id:'btn_CancelRow',label:'취소',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot',id:'',label:'엑셀업로드 시 구분코드는 C, B, E로 구분하여 입력하시기 바랍니다. ( C : CNTR, B : BULK, E : 기타 )',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_excel','ev:oncellclick':'scwin.gr_master_oncellclick','ev:ontextimageclick':'scwin.gr_master_ontextimageclick','ev:onviewchange':'scwin.gr_master_onviewchange',focusMode:'cell',id:'gr_excel',rowStatusVisible:'false',style:';display:none;',visibleRowNum:'15',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',style:'',value:'귀속부서코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column17',inputType:'text',style:'',value:'귀속부서명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',style:'',value:'구분코드',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',style:'',value:'관리계정코드',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column3',inputType:'text',style:'',value:'관리계정명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column5',inputType:'text',style:'',value:'금액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'적요',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'기준년월',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{allowChar:'0-9',blockSelect:'false',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',id:'acctDeptCd',inputType:'textImage',maxLength:'5',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',id:'clntNo',inputType:'textImage',maxLength:'6',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',id:'transCargoClsCd',inputType:'text',ref:'',style:'',value:'',width:'100',excelCellType:'text'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_transCargoClsCd'},E:[{T:1,N:'w2:label',A:{ref:'transCargoClsNm'}},{T:1,N:'w2:value',A:{ref:'transCargoClsCd'}}]}]}]},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'label',id:'mgntAcctCd',inputType:'textImage',maxLength:'7',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntCtrlAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'110',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',style:'',value:'',width:'100'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum("mgntCtrlAmt")',id:'column23',inputType:'expression',style:'',textAlign:'right',value:'0',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'100'}}]}]}]}]}]}]}]}]})