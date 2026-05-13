/*amd /ui/ds/op/stvwrk/op_210_01_23b.xml 34442 0d3dd8a9ce0877b2750be73e35e8ca44d520cfbceffc11961be9ab3426c948c5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'minusClsCd',name:'제외구분코드',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'shiftCnt',name:'시프트계',dataType:'number',defaultValue:'0',length:'11.2'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'추가금액',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'1000'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'amtClsCd',name:'금액구분코드',dataType:'text',defaultValue:'',length:'2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conLobranCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveTempStaffAdditionalShiftListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conLobranCd',target:'data:json,{"id":"ds_lobranCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveLobranCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveTempStaffAdditionalShiftCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 물류 점소 코드
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.ds_wrkList_olddata = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 점소 콤보박스 SET
  dma_conLobranCd.set("sysCd", "BerthNonUsableEBC");
  dma_conLobranCd.set("queryId", "retriveLobranCodeList");
  $c.sbm.execute($p, sbm_retrieveLobranCd);
  scwin.f_SetGridColumnMaxLength(gr_wrkList);
};

//-------------------------------------------------------------------------
// 점소 콤보박스 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveLobranCd_submitdone = function (e) {
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_adptYm.setValue(scwin.vCurDate);
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();

  //테스트 데이터
  // ds_condition.set("lobranCd", "4AA");
  // ds_condition.set("adptYm", "202501");
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  let ret = await $c.gus.cfValidate($p, [acb_lobranCd, ica_adptYm]);
  if (!ret) {
    return;
  }
  ds_wrkList.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_wrkList.getModifiedIndex().length != 0) {
    let validArray = [{
      id: "staffNo",
      name: "사번",
      mandatory: true
    }, {
      id: "districtCd",
      name: "권역",
      mandatory: true
    }, {
      id: "workDt",
      name: "발생일자",
      mandatory: true,
      valid: "date",
      format: "YYYYMMDD"
    }, {
      id: "rmk",
      name: "비고",
      mandatory: true
    }];

    // 현재 품명의 작업단계 정보의 Vaildation 을 검사한다.
    let ret = await $c.gus.cfValidateGrid($p, gr_wrkList, null, null, validArray, "상용직 추가실적관리");
    //let ret = await $c.gus.cfValidate([gr_wrkList]);
    if (!ret) return;
    ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상용직 추가실적관리"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function () {
  var newRow = ds_wrkList.insertRow();
  ds_wrkList.setRowPosition(newRow);
  ds_wrkList.setCellData(newRow, "adptYm", ica_adptYm.getValue());
  ds_wrkList.setCellData(newRow, "minusClsCd", 1);
  ds_wrkList.setCellData(newRow, "shiftCnt", 0);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // Title
  var vDay = "점소 : " + acb_lobranCd.getText(true) + " : " + "작업일자 : " + ica_adptYm.getValue();
  vDay = vDay.replace(/:/g, '|').replace(/;/g, '');
  const options = {
    fileName: "상용직 추가실적관리.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "상용직 추가실적관리",
    startRowIndex: 3,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 10,
    text: "상용직 추가실적관리",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 10,
    text: vDay,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_wrkList, options, infoArr);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 인원 검색
      var pWhere = acb_lobranCd.getValue();
      udc_staffNo.setSelectId("retrieveStvArrangementFulltimeManList"); // XML상의 SELECT ID
      udc_staffNo.cfCommonPopUp(scwin.udc_staffNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '8' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭
      , '5,7,9,10' // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , 400 // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "T" // 전체검색허용여부 ("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
  }
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
// 그리드 팝업
//-------------------------------------------------------------------------  
scwin.f_openGridCommonPopUp = function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  var pWhere; // 조회조건
  var pCode = "";
  var pName = "";
  switch (gubun) {
    case 1:
      //상용직
      pCode = ds_wrkList.getCellData(row, "staffNo");
      pName = "";
      pWhere = acb_lobranCd.getValue();

      // TOBE : 그리드 공통 팝업 호출 전에 컬럼 값 지우기
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", "");
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", "");
      udc_comCode1.setSelectId("retrieveStvArrangementFulltimeManList"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_comCode1_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '9' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종,관리번호' // Title순서
      , '70,70,70,70,50,70,50,80,80' // 보여주는 각 컬럼들의 폭
      , '5,7,10' // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 570 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , 400 // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "T" // 전체검색허용여부 ("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //상용직
      pCode = "";
      pName = ds_wrkList.getCellData(row, "staffNm");
      pWhere = acb_lobranCd.getValue();
      udc_comCode1.setSelectId("retrieveStvArrangementFulltimeManList"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_comCode1_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '9' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종,관리번호' // Title순서
      , '70,70,70,70,50,70,50,80,80' // 보여주는 각 컬럼들의 폭
      , '5,7,10' // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 570 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , 400 // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "T" // 전체검색허용여부 ("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
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
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tbl_srchCond);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_CopyRow = function () {
  if (ds_wrkList.getRowCount() > 0) {
    var curRow = ds_wrkList.getRowPosition();
    var newRow = ds_wrkList.insertRow();
    ds_wrkList.setCellData(newRow, "adptYm", ds_wrkList.getCellData(curRow, "adptYm"));
    ds_wrkList.setCellData(newRow, "districtCd", ds_wrkList.getCellData(curRow, "districtCd"));
    ds_wrkList.setCellData(newRow, "staffNo", ds_wrkList.getCellData(curRow, "staffNo"));
    ds_wrkList.setCellData(newRow, "staffNm", ds_wrkList.getCellData(curRow, "staffNm"));
    ds_wrkList.setCellData(newRow, "workDt", ds_wrkList.getCellData(curRow, "workDt"));
    ds_wrkList.setCellData(newRow, "minusClsCd", ds_wrkList.getCellData(curRow, "minusClsCd"));
    ds_wrkList.setCellData(newRow, "shiftCnt", ds_wrkList.getCellData(curRow, "shiftCnt"));
    ds_wrkList.setCellData(newRow, "addAmt", ds_wrkList.getCellData(curRow, "addAmt"));
    ds_wrkList.setCellData(newRow, "rmk", ds_wrkList.getCellData(curRow, "rmk"));
    ds_wrkList.setCellData(newRow, "amtClsCd", ds_wrkList.getCellData(curRow, "amtClsCd"));
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_wrkList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다.       
  } else {
    gr_wrkList.setFocusedCell(0, 0, false); //edit : true
  }

  // 총 조회건수 표시
  tbx_totalRows.setValue(ds_wrkList.getRowCount());
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 인원 UDC START
//-------------------------------------------------------------------------
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 1);
};
scwin.udc_staffNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staffNo_callBackFunc = function (ret) {
  if (ret != null) {
    ed_staffNo.setValue(ret[0]); //사원코드
    ed_staffNm.setValue(ret[1]); //사원명
  } else {
    ed_staffNo.setValue(""); //사원코드
    ed_staffNm.setValue(""); //사원명
  }
};
//-------------------------------------------------------------------------
// 인원 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 사번,성명 컬럼 검색 콜백
//-------------------------------------------------------------------------
scwin.udc_comCode1_callBackFunc = function (ret) {
  if (!$c.gus.cfIsNull($p, ret) && ret[0] != "N/A") {
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", ret[0]);
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", ret[1]);
  } else {
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", "");
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", "");
  }
};

//-------------------------------------------------------------------------
// 그리드 사번 컬럼 검색 ontextimageclick
//-------------------------------------------------------------------------
scwin.gr_wrkList_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == 3) {
    //사번(staffNo)
    scwin.f_openGridCommonPopUp(1, rowIndex, "F");
  }
  // else if (columnIndex == 2) { //성명(staffNm)
  //     scwin.f_openGridCommonPopUp(2, rowIndex, "F"); 사용되지 않음
  // }
};

//-------------------------------------------------------------------------
// 그리드 oncellclick
// ASIS : gr_wrkList OnClick(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_wrkList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_wrkList.getRowStatus(rowIndex) != "C") {
    gr_wrkList.setReadOnly("column", "adptYm", true);
    gr_wrkList.setReadOnly("column", "staffNo", true);
    gr_wrkList.setReadOnly("column", "staffNm", true);
  } else {
    gr_wrkList.setReadOnly("column", "adptYm", true);
    gr_wrkList.setReadOnly("column", "staffNo", false);
    gr_wrkList.setReadOnly("column", "staffNm", false);
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 편집모드 시작 이벤트(olddata 때문에 사용)
//-------------------------------------------------------------------------
scwin.gr_wrkList_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.ds_wrkList_olddata = value;
};

//-------------------------------------------------------------------------
// 그리드 셀 편집모드 종료 이벤트
// ASIS : gr_wrkList OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_wrkList_onafteredit = function (rowIndex, columnIndex, value) {
  switch (columnIndex) {
    case 3:
      //사번(staffNo)
      if (ds_wrkList.getCellData(rowIndex, "staffNo") != "" && ds_wrkList.getCellData(rowIndex, "staffNo") != scwin.ds_wrkList_olddata) {
        ds_wrkList.setCellData(rowIndex, "staffNm", "");
        scwin.f_openGridCommonPopUp(1, rowIndex, "T");
      } else if (ds_wrkList.getCellData(rowIndex, "staffNo") == "") {
        ds_wrkList.setCellData(rowIndex, "staffNo", "");
        ds_wrkList.setCellData(rowIndex, "staffNm", "");
      }
      break;
    case 2:
      //성명(staffNm)
      if (ds_wrkList.getCellData(rowIndex, "staffNm") != "" && ds_wrkList.getCellData(rowIndex, "staffNm") != scwin.ds_wrkList_olddata) {
        ds_wrkList.setCellData(rowIndex, "staffNo", "");
        scwin.f_openGridCommonPopUp(2, rowIndex, "T");
      } else if (ds_wrkList.getCellData(rowIndex, "staffNm") == "") {
        ds_wrkList.setCellData(rowIndex, "staffNo", "");
        ds_wrkList.setCellData(rowIndex, "staffNm", "");
      }
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',title:'점소',allOption:'',chooseOption:'',ref:'data:ds_condition.lobranCd',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobranCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_adptYm',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',ref:'data:ds_condition.adptYm',title:'적용년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',UpperFlagCode:'1',mandatoryCode:'6',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_staffNo',id:'udc_staffNo',refDataCollection:'ds_condition','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_staffNo_onviewchangeNameEvent',code:'staffNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 추가실적관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_gridToExcel',gridID:'gr_wrkList',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false','ev:ontextimageclick':'scwin.gr_wrkList_ontextimageclick','ev:oncellclick':'scwin.gr_wrkList_oncellclick',rowStatusVisible:'true','ev:onbeforeedit':'scwin.gr_wrkList_onbeforeedit','ev:onafteredit':'scwin.gr_wrkList_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'적용년월',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'권역',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'성명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'사번',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'발생일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'금액구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'증감구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'추가SHIFT',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'추가금액',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'비고',width:'300',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'순번',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptYm',inputType:'text',width:'100',readOnly:'true',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'select',width:'100',chooseOption:'true',chooseOptionLabel:'$blank',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IIR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'평택'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IPR'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'textImage',width:'80',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'calendar',width:'100',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtClsCd',inputType:'select',width:'100',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'추가/제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'휴일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'특휴'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'학자금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'소득세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'minusClsCd',inputType:'select',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'+'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'-'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftCnt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0.00',dataType:'float',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'300',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'seq',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'shiftCnt\')',displayFormat:'#,##0.00',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'addAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_CopyRow',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_wrkList',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',rowDelUserAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'list-box txt-blue'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'추가SHIFT를 입력할 경우 선택한 금액구분에 대한 수당을 기준으로 추가SHIFT 만큼 계산됩니다.',class:'txt-num',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'추가금액을 입력할 경우 입력한 추가금액이 합산되어 계산됩니다. ex) 추가SHIFT + 추가금액',class:'txt-num ',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'금액구분 추가/제외는 증감구분에 따라 추가/제외로 구분됩니다.',class:'txt-num ',escape:'false'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})