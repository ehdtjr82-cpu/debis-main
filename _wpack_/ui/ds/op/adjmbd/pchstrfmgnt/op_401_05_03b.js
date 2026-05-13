/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_05_03b.xml 28317 c4363718436e3f4975f6508cb60012da5b5a793bdf756fb1debb77f5aaf626e7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_result_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'배정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'teuCnt',name:'TEU',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'railroadFare',name:'단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'출발역code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역code',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'retrieveDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnWrkPlCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveRailroadFareNewPortTrfCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.SaveRailroadFareNewPortTrfCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_save_submit','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_401_05_03b
// 이름     : 저수요단가등록
// 경로     : 물류/작업실적/철송/적재내역등록
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.toDay;
scwin.req_startTrainWorkPlaceCd;
scwin.req_startTrainWorkPlaceNm;
scwin.req_endTrainWorkPlaceCd;
scwin.req_endTrainWorkPlaceNm;
scwin.onpageload = function () {
  debugger;
  scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.req_startTrainWorkPlaceCd = $c.data.getParameter($p, "ed_startTrainWorkPlaceCd");
  scwin.req_startTrainWorkPlaceNm = $c.data.getParameter($p, "ed_startTrainWorkPlaceNm");
  scwin.req_endTrainWorkPlaceCd = $c.data.getParameter($p, "ed_endTrainWorkPlaceCd");
  scwin.req_endTrainWorkPlaceNm = $c.data.getParameter($p, "ed_endTrainWorkPlaceNm");
  if (scwin.req_startTrainWorkPlaceCd == null) scwin.req_startTrainWorkPlaceCd = "";
  if (scwin.req_startTrainWorkPlaceNm == null) scwin.req_startTrainWorkPlaceNm = "";
  if (scwin.req_endTrainWorkPlaceCd == null) scwin.req_endTrainWorkPlaceCd = "";
  if (scwin.req_endTrainWorkPlaceNm == null) scwin.req_endTrainWorkPlaceNm = "";
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완.
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  $p.setTimeout(function () {
    ed_srchFromDate.setValue(scwin.toDay);
    ed_startTrainWorkPlaceCd.setValue(scwin.req_startTrainWorkPlaceCd);
    scwin.f_chkOpenCommonPopUp(ed_startTrainWorkPlaceCd, ed_startTrainWorkPlaceNm, 1);
    ed_endTrainWorkPlaceCd.setValue(scwin.req_endTrainWorkPlaceCd);
    scwin.f_chkOpenCommonPopUp(ed_endTrainWorkPlaceCd, ed_endTrainWorkPlaceNm, 2);
    scwin.f_retrieve();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  var dateStr = scwin.toDay;
  ed_srchFromDate.setValue(dateStr);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;
  $c.gus.cfClearPairObj($p, pairObj);
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 조회조건 - 출발역
      udc_startTrainWorkPlace.cfCommonPopUp(scwin.udc_startTrainWorkPlace_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "출발역 작업장조회,작업장코드,작업장명");
      break;
    case 2:
      // 조회조건 - 도착역
      udc_endTrainWorkPlace.cfCommonPopUp(scwin.udc_endTrainWorkPlace_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "도착역 작업장조회,작업장코드,작업장명");
      break;
    case 3:
      // 그리드 - 출발역
      udc_grdStartTrainWorkPlace.cfCommonPopUp(scwin.udc_grdStartTrainWorkPlace_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "출발역 작업장조회,작업장코드,작업장명");
      break;
    case 4:
      // 그리드 - 도착역
      udc_grdEndTrainWorkPlace.cfCommonPopUp(scwin.udc_grdEndTrainWorkPlace_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "도착역 작업장조회,작업장코드,작업장명");
      break;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  ds_condition.set("dptStnWrkPlCd", ed_startTrainWorkPlaceCd.getValue());
  ds_condition.set("arvStnWrkPlCd", ed_endTrainWorkPlaceCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장 (유효성 검증 후 서버 전송)
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!(ds_result.getModifiedIndex().length > 0)) {
    await $c.win.alert($p, "변경된 데이터가 없습니다.");
    return false;
  }
  var faileYn = false;
  for (var i = 0; i < ds_result.getRowCount(); i++) {
    if (ds_result.getRowStatus(i) == "C" || ds_result.getRowStatus(i) == "U") {
      // 필수항목 체크
      if (ds_result.getCellData(i, "dptStnWrkPlCd") == "" || ds_result.getCellData(i, "arvStnWrkPlCd") == "" || ds_result.getCellData(i, "adptDt") == "") {
        await $c.win.alert($p, "출발역, 도착역, 적용일자는 필수 입력 항목입니다.");
        faileYn = true;
        break;
      }
      // 신규행 배정금액 체크
      if (ds_result.getRowStatus(i) == "C" && (ds_result.getCellData(i, "totAmt") == "" || ds_result.getCellData(i, "totAmt") == 0)) {
        if (!(await $c.win.confirm($p, "배정금액은  필수 입력 항목입니다.\n\n0원으로 등록하시겠습니까?"))) {
          faileYn = true;
          break;
        }
      }
      // TEU 필수
      if (ds_result.getCellData(i, "teuCnt") == "" || ds_result.getCellData(i, "teuCnt") == "0") {
        await $c.win.alert($p, "TEU는  필수 입력 항목입니다.");
        faileYn = true;
        break;
      }
      // 출도착역 동일 체크
      if (ds_result.getCellData(i, "dptStnWrkPlCd") == ds_result.getCellData(i, "arvStnWrkPlCd")) {
        await $c.win.alert($p, "출발역과 도착역이 동일합니다.\n\n출도착역은 각각 다르게 등록해 주세요.");
        faileYn = true;
        break;
      }
      // 저수요 구간 체크 (부산신항역 <-> 오봉역)
      if (!(ds_result.getCellData(i, "dptStnWrkPlCd") == "6R12" && ds_result.getCellData(i, "arvStnWrkPlCd") == "4R01" || ds_result.getCellData(i, "dptStnWrkPlCd") == "4R01" && ds_result.getCellData(i, "arvStnWrkPlCd") == "6R12")) {
        await $c.win.alert($p, "저수요 구간만 등록 가능합니다.\n\n부산신항역 <-> 오봉역");
        faileYn = true;
        break;
      }
    }
  }
  if (faileYn) {
    return false;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 수정 (기존 행 편집모드 전환)
//-------------------------------------------------------------------------
scwin.f_update = function () {
  gr_result.setReadOnly("grid", false);
  gr_result.setColumnReadOnly("dptStnWrkPlCd", false);
  gr_result.setColumnReadOnly("arvStnWrkPlCd", false);
  gr_result.setColumnReadOnly("dptStnWrkPlNm", true);
  gr_result.setColumnReadOnly("arvStnWrkPlNm", true);
  gr_result.setColumnReadOnly("adptDt", true);
  gr_result.setColumnReadOnly("totAmt", false);
  gr_result.setColumnReadOnly("teuCnt", false);
  gr_result.setColumnReadOnly("railroadFare", true);
};

//-------------------------------------------------------------------------
// 행추가 (신규행 추가 및 기본값 세팅)
//-------------------------------------------------------------------------
scwin.f_PushAddRow = function () {
  gr_result.setReadOnly("grid", false);
  gr_result.setColumnReadOnly("dptStnWrkPlCd", false);
  gr_result.setColumnReadOnly("arvStnWrkPlCd", false);
  gr_result.setColumnReadOnly("dptStnWrkPlNm", false);
  gr_result.setColumnReadOnly("arvStnWrkPlNm", false);
  gr_result.setColumnReadOnly("adptDt", false);
  gr_result.setColumnReadOnly("totAmt", false);
  gr_result.setColumnReadOnly("teuCnt", false);
  gr_result.setColumnReadOnly("railroadFare", true);
  var rowIndex = ds_result.insertRow();
  ds_result.setRowPosition(rowIndex);
  ds_result.setCellData(rowIndex, "dptStnWrkPlNm", ed_startTrainWorkPlaceNm.getValue());
  ds_result.setCellData(rowIndex, "dptStnWrkPlCd", ed_startTrainWorkPlaceCd.getValue());
  ds_result.setCellData(rowIndex, "arvStnWrkPlNm", ed_endTrainWorkPlaceNm.getValue());
  ds_result.setCellData(rowIndex, "arvStnWrkPlCd", ed_endTrainWorkPlaceCd.getValue());
  ds_result.setCellData(rowIndex, "adptDt", ed_srchFromDate.getValue());
  ds_result.setCellData(rowIndex, "totAmt", 0);
  ds_result.setCellData(rowIndex, "teuCnt", 0);
  ds_result.setCellData(rowIndex, "railroadFare", 0);
};

//////////////////////////////////////// C O M P O N E N T   E V E N T //////////////////////////////////

// 출발역 명 변경
scwin.udc_startTrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_startTrainWorkPlaceNm, ed_startTrainWorkPlaceCd, 1, false);
};

// 출발역 돋보기 클릭
scwin.udc_startTrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_startTrainWorkPlaceCd.getValue(), ed_startTrainWorkPlaceNm.getValue(), 'F', 'T');
};

// 도착역 명 변경
scwin.udc_endTrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_endTrainWorkPlaceNm, ed_endTrainWorkPlaceCd, 2, false);
};

// 도착역 돋보기 클릭
scwin.udc_endTrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_endTrainWorkPlaceCd.getValue(), ed_endTrainWorkPlaceNm.getValue(), 'F', 'T');
};

// 초기화 버튼
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 조회 버튼
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};

// 수정 버튼
scwin.btn_edit_onclick = function (e) {
  scwin.f_update();
};

// 닫기 버튼
scwin.btn_close_onclick = function (e) {
  self.close();
};

// 저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

//////////////////////////////////////// S U B M I S S I O N   E V E N T //////////////////////////////////

scwin.sbm_retrieve_submit = function (e) {
  gr_result.setReadOnly("grid", true);
  gr_result.setColumnReadOnly("dptStnWrkPlCd", true);
  gr_result.setColumnReadOnly("arvStnWrkPlCd", true);
  gr_result.setColumnReadOnly("dptStnWrkPlNm", true);
  gr_result.setColumnReadOnly("arvStnWrkPlNm", true);
  gr_result.setColumnReadOnly("adptDt", true);
  gr_result.setColumnReadOnly("totAmt", true);
  gr_result.setColumnReadOnly("teuCnt", true);
  gr_result.setColumnReadOnly("railroadFare", true);
};

// 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_result.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  gr_result.setReadOnly("grid", true);
  txt_totalCnt.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_result.setFocusedCell(0, 0);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_save_submit = function (e) {};

// 저장 완료
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "성공적으로 저장하였습니다.");
  $c.sbm.execute($p, sbm_retrieve);
  gr_result.setReadOnly("grid", true);
};
scwin.sbm_save_submiterror = function (e) {};

//////////////////////////////////////// G R I D   E V E N T //////////////////////////////////

// 그리드 텍스트이미지 클릭 (출발역/도착역 팝업, 적용일자 달력)
scwin.gr_result_ontextimageclick = function (row, columnIndex) {
  var colid = gr_result.getColumnID(columnIndex);
  switch (colid) {
    case "dptStnWrkPlNm":
      scwin.f_openCommonPopUp(3, ds_result.getCellData(row, "dptStnWrkPlCd"), ds_result.getCellData(row, "dptStnWrkPlNm"), 'T', 'T');
      break;
    case "arvStnWrkPlNm":
      scwin.f_openCommonPopUp(4, ds_result.getCellData(row, "arvStnWrkPlCd"), ds_result.getCellData(row, "arvStnWrkPlNm"), 'T', 'T');
      break;
    case "adptDt":
      break;
  }
};

// 그리드 편집 완료 (출발역/도착역 자동팝업, 단가 자동계산)
scwin.gr_result_onafteredit = function (row, columnIndex, value) {
  debugger;
  var colid = gr_result.getColumnID(columnIndex);
  switch (colid) {
    case "dptStnWrkPlNm":
      scwin.f_openCommonPopUp(3, ds_result.getCellData(row, "dptStnWrkPlCd"), ds_result.getCellData(row, "dptStnWrkPlNm"), 'T', 'T');
      break;
    case "arvStnWrkPlNm":
      scwin.f_openCommonPopUp(4, ds_result.getCellData(row, "arvStnWrkPlCd"), ds_result.getCellData(row, "arvStnWrkPlNm"), 'T', 'T');
      break;
    /*   case "totAmt":
       case "teuCnt":
           var totAmt = Number(ds_result.getCellData(row, "totAmt"));
           var teuCnt = Number(ds_result.getCellData(row, "teuCnt"));
           if (totAmt == 0) {
               ds_result.setCellData(row, "railroadFare", 0);
           } else {
               ds_result.setCellData(row, "railroadFare", totAmt / teuCnt);
           }
           break; */
  }
};

// 그리드 컬럼 이동 시 이미지 재설정
scwin.gr_result_onaftercolumnmove = function (info) {
  var colid = gr_result.getColumnID(info.colIndex);
  switch (colid) {
    case "dptStnWrkPlNm":
      gr_result.setImageSrc("dptStnWrkPlNm", SEARCH_BTN);
      break;
    case "arvStnWrkPlNm":
      gr_result.setImageSrc("arvStnWrkPlNm", SEARCH_BTN);
      break;
    case "adptDt":
      gr_result.setImageSrc("adptDt", CALENDAR_BTN);
      break;
  }
};

//////////////////////////////////////// C A L L B A C K //////////////////////////////////

// 조회조건 - 출발역 콜백
scwin.udc_startTrainWorkPlace_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_startTrainWorkPlaceCd, ed_startTrainWorkPlaceNm);
};

// 조회조건 - 도착역 콜백
scwin.udc_endTrainWorkPlace_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_endTrainWorkPlaceCd, ed_endTrainWorkPlaceNm);
};

// 그리드 - 출발역 콜백
scwin.udc_grdStartTrainWorkPlace_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ds_result.setCellData(ds_result.getRowPosition(), "dptStnWrkPlCd", rtnList[0]);
    ds_result.setCellData(ds_result.getRowPosition(), "dptStnWrkPlNm", rtnList[1]);
  }
};

// 그리드 - 도착역 콜백
scwin.udc_grdEndTrainWorkPlace_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ds_result.setCellData(ds_result.getRowPosition(), "arvStnWrkPlCd", rtnList[0]);
    ds_result.setCellData(ds_result.getRowPosition(), "arvStnWrkPlNm", rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드 (히든/개인화 미노출 컬럼 제외)
//-------------------------------------------------------------------------
scwin.f_excelDownload = function () {
  var removeColIdx = [];
  var colCount = gr_result.getColumnCount();
  for (var i = 0; i < colCount; i++) {
    if (!gr_result.getColumnVisible(i)) {
      removeColIdx.push(i);
    }
  }
  $c.data.downloadGridViewExcel($p, gr_result, {
    fileName: "저수요단가등록.xlsx",
    sheetName: "저수요단가등록",
    type: "1",
    useDataFormat: "true",
    removeColumns: removeColIdx.join(","),
    hiddenVisible: "false"
  });
};
scwin.ds_result_oncelldatachange = function (info) {
  if (info.colID === "totAmt" || info.colID === "teuCnt") {
    var totAmt = Number(ds_result.getCellData(info.rowIndex, "totAmt"));
    var teuCnt = Number(ds_result.getCellData(info.rowIndex, "teuCnt"));
    if (teuCnt == 0) {
      ds_result.setCellData(info.rowIndex, "railroadFare", 1);
      return;
    }
    if (totAmt == 0) {
      ds_result.setCellData(info.rowIndex, "railroadFare", 0);
    } else {
      ds_result.setCellData(info.rowIndex, "railroadFare", totAmt / teuCnt);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_textbox1',label:'저수요단가등록',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_srchFromDate',pickerType:'dynamic',style:'',ref:'data:ds_condition.retrieveDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_startTrainWorkPlace',codeId:'ed_startTrainWorkPlaceCd',nameId:'ed_startTrainWorkPlaceNm',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_startTrainWorkPlace',objTypeName:'data',objTypeCode:'data','ev:onclickEvent':'scwin.udc_startTrainWorkPlace_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_startTrainWorkPlace_onviewchangeNameEvent',selectID:'retrieveTrainWorkPlace'}},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'display: none;',id:'udc_grdStartTrainWorkPlace',codeId:'ed_grdStartTrainWorkPlaceCd',nameId:'ed_grdStartTrainWorkPlaceNm',maxlengthCode:'5',UpperFlagCode:'1',btnId:'btn_grdStartTrainWorkPlace',objTypeName:'data',objTypeCode:'data',selectID:'retrieveTrainWorkPlace'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_endTrainWorkPlace',codeId:'ed_endTrainWorkPlaceCd',nameId:'ed_endTrainWorkPlaceNm',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_endTrainWorkPlace',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_endTrainWorkPlace_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_endTrainWorkPlace_onviewchangeNameEvent',selectID:'retrieveTrainWorkPlace'}},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'display: none;',id:'udc_grdEndTrainWorkPlace',codeId:'ed_grdEndTrainWorkPlaceCd',nameId:'ed_grdEndTrainWorkPlaceNm',maxlengthCode:'5',UpperFlagCode:'1',btnId:'btn_grdEndTrainWorkPlace',objTypeName:'data',objTypeCode:'data',selectID:'retrieveTrainWorkPlace'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'저수요단가등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridDownFn:'scwin.f_excelDownload',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',id:'udc_topGrdBtn1',gridID:'gr_result'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_result_ontextimageclick','ev:onaftercolumnmove':'scwin.gr_result_onaftercolumnmove','ev:onafteredit':'scwin.gr_result_onafteredit',focusMode:'row',focusMove:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출발역',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'도착역',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'배정금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'TEU',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출발역code',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'도착역code',width:'120',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlNm',inputType:'textImage',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlNm',inputType:'textImage',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'textImage',width:'100',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',maxLength:'11',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCnt',inputType:'text',width:'100',textAlign:'right',dataType:'number',maxLength:'11',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'railroadFare',inputType:'text',width:'100',textAlign:'right',dataType:'number',maxLength:'11',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlCd',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlCd',inputType:'text',width:'120',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btnSmall',btnRowAddObj:'btn_rowAdd',btnCancelObj:'btn_Cancel',rowAddFunction:'scwin.f_PushAddRow',btnCancelYn:'Y',btnRowAddYn:'Y',btnDelYn:'N',btnRowDelYn:'N',EngYn:'N',gridID:'gr_result'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})