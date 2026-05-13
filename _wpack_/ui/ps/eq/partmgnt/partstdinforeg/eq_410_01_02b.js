/*amd /ui/ps/eq/partmgnt/partstdinforeg/eq_410_01_02b.xml 26064 65e1d2089d692d0e68e4d42fcca70fdba185407e7cab1497b6b7ef8dc0f26910 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_PartsSafetyStock'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'계통',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partCd',name:'부품',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_PartsSafetyStock',saveRemovedData:'true','ev:ondataload':'scwin.ds_PartsSafetyStock_ondataload','ev:oncelldatachange':'scwin.ds_PartsSafetyStock_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCdNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCdNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCdNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'safeStockQty',name:'안전재고량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'propStockQty',name:'적정재고량',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_PartsSafetyStock',action:'/ps.eq.partmgnt.partstdinforeg.RetrieveWorkPlaceEachSafetyStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_PartsSafetyStock","key":"IN_DS1"},{"id":"ds_PartsSafetyStock","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_PartsSafetyStock","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePartsSafetyStock',action:'/ps.eq.partmgnt.partstdinforeg.SaveWorkPlaceEachSafetyStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_PartsSafetyStock","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePartsSafetyStock_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 안전/적정재고등록 (eq_410_01_02b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-23
//-------------------------------------------------------------------------
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 작업날짜

scwin.t_partCd = ""; // 부품코드
scwin.t_partCdNm = ""; // 부품명
scwin.t_partUnitCdNm = ""; // 단위명
scwin.t_catCdNm = ""; // 계통코드명
scwin.t_eqModelNm = ""; // 장비모델명

scwin.isEventRunning = false;
scwin.loadedRowCount = 0;
scwin.onpageload = async function () {
  console.log("PGM : 안전/적정재고등록 (eq_410_01_02b)");
  const codeOptions = [{
    grpCd: "EQ005",
    compID: "lc_catCd"
  } // 계통
  ];
  await $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
  const lxCodeOptions = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveWrkplEachList",
    compID: "lc_wrkPlCd, gr_PartsSafetyStock:wrkPlCd"
  }];
  await $c.data.setGauceUtil($p, lxCodeOptions);
  $c.data.setPopupTitle($p, "작업장별 안전재고 등록");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};
scwin.callBackCommonCode = function () {
  lc_catCd.addItem("", "전체", 0);
  lc_catCd.setSelectedIndex(0);
};

//--------------------------------------------------------------------------
// 부품선택 팝업
//--------------------------------------------------------------------------
scwin.udc_partCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_partCd, ed_partNm, 1);
};
scwin.udc_partCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_partNm, ed_partCd, 1, false);
};
scwin.udc_partCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_partCd.getValue(), ed_partNm.getValue(), 'F', 'T');
};

//--------------------------------------------------------------------------
// 부품선택 팝업
//--------------------------------------------------------------------------
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
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      //부품
      udc_partCd.setSelectId("retrievePartInfo");
      rtnList = udc_partCd.cfCommonPopUp(scwin.udc_partCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//------------------------------------------------------------------------- 
// 부품 callBackFunc
//------------------------------------------------------------------------- 
scwin.udc_partCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_partCd.setValue(ret[0]);
    ed_partNm.setValue(ret[1]);
    ed_partCd.options.hidVal = ret[0];
    ed_partNm.options.hidVal = ret[1];
    scwin.t_partCd = ret[0]; // 부품코드
    scwin.t_partCdNm = ret[1]; // 부품명
    scwin.t_partUnitCdNm = ret[3]; // 단위명
    scwin.t_catCdNm = ret[4]; // 계통코드명
    scwin.t_eqModelNm = ret[6]; // 장비모델명
  } else {
    ed_partCd.setValue("");
    ed_partNm.setValue("");
    ed_partCd.options.hidVal = "";
    ed_partNm.options.hidVal = "";
    scwin.t_partCd = ""; // 부품코드
    scwin.t_partCdNm = ""; // 부품명
    scwin.t_partUnitCdNm = ""; // 단위명
    scwin.t_catCdNm = ""; // 계통코드명
    scwin.t_eqModelNm = ""; // 장비모델명
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  var wrkPlCd = lc_wrkPlCd.getValue();
  var catCd = lc_catCd.getValue();
  if (wrkPlCd == "" && catCd == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장"]);
    lc_wrkPlCd.focus();
    return;
  }
  dma_PartsSafetyStock.set("wrkPlCd", lc_wrkPlCd.getValue());
  dma_PartsSafetyStock.set("catCd", lc_catCd.getValue());
  dma_PartsSafetyStock.set("partCd", ed_partCd.getValue());
  //dma_PartsSafetyStock.Action = "/ps.eq.partmgnt.partstdinforeg.RetrieveWorkPlaceEachSafetyStockCMD.do";

  $c.sbm.execute($p, sbm_PartsSafetyStock);
};

//-------------------------------------------------------------------------
// 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var cIndexArr = ds_PartsSafetyStock.getRowIndexByStatus("C");
  if (scwin.loadedRowCount > 0 && cIndexArr.length > 0) return;
  var rowPos = ds_PartsSafetyStock.insertRow();
  var wrkPlCd = lc_wrkPlCd.getValue();
  ds_PartsSafetyStock.setCellData(rowPos, "wrkPlCd", wrkPlCd);
  ds_PartsSafetyStock.setCellData(rowPos, "safeStockQty", 0);
  ds_PartsSafetyStock.setCellData(rowPos, "propStockQty", 0);
  if (wrkPlCd == "") {
    gr_PartsSafetyStock.setFocusedCell(rowPos, "wrkPlCd");
  } else {
    gr_PartsSafetyStock.setFocusedCell(rowPos, "partCd");
  }
};

//-------------------------------------------------------------------------
// 두번째 그리드 : 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  ds_PartsSafetyStock.deleteRow(ds_PartsSafetyStock.getRowPosition());
  gr_PartsSafetyStock.setFocusMode("cell");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // if ( !ds_PartsSafetyStockDet.IsUpdated ) {
  if (ds_PartsSafetyStock.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["안전재고 그리드"]);
    return;
  }
  if (await !$c.gus.cfValidate($p, [gr_PartsSafetyStock])) return;
  var rowCnt = ds_PartsSafetyStock.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    if (ds_PartsSafetyStock.getRowStatus(i) != "R") {
      var safeStockQty = ds_PartsSafetyStock.getCellData(i, "safeStockQty");
      var propStockQty = ds_PartsSafetyStock.getCellData(i, "propStockQty");
      if (safeStockQty <= 0) {
        await $c.win.alert($p, i + 1 + "번째 행의 안전재고량은 1이상으로 입력하십시오.");
        return;
      } else if (propStockQty <= 0) {
        await $c.win.alert($p, i + 1 + "번째 행의 적정재고량은 1이상으로 입력하십시오.");
        return;
      } else if (safeStockQty > propStockQty) {
        await $c.win.alert($p, i + 1 + "번째 행의 안전재고량는 적정재고량보다 크지 않아야 합니다.");
        return;
      }
    }
  }
  if (!(await $c.win.confirm($p, "저장하시겠습니까?"))) {
    return;
  }
  $c.sbm.execute($p, sbm_savePartsSafetyStock);
};
scwin.sbm_savePartsSafetyStock_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 안전/적정재고 내역 ondataload
//-------------------------------------------------------------------------
scwin.ds_PartsSafetyStock_ondataload = async function () {
  let rowCnt = ds_PartsSafetyStock.getTotalRow();
  scwin.loadedRowCount = rowCnt;
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  ed_partCd.focus();
};

//-------------------------------------------------------------------------
// 조회버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_partCd.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_PartsSafetyStock.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let infoArr = {};
  const options = {
    fileName: "작업장별안전재고목록.xlsx",
    sheetName: "작업장별안전재고목록",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_PartsSafetyStock, options, {});
};
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.gr_PartsSafetyStock_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_PartsSafetyStock.getColumnID(columnIndex);
  let value = ds_PartsSafetyStock.getCellData(rowIndex, colId);
  if (colId == "partCd") {
    scwin.f_gridPopupOpen(rowIndex, value);
  }
};
scwin.f_gridPopupOpen = function (rowIndex, value) {
  if (scwin.isEventRunning) return;
  scwin.isEventRunning = true;
  scwin.f_openPopUpGrid(rowIndex, value, "T");
};

//-------------------------------------------------------------------------
// 그리드 Popup 처리
//-------------------------------------------------------------------------
scwin.f_openPopUpGrid = async function (row, value, pClose) {
  var pCode = "";
  var pName = "";
  pCode = ds_PartsSafetyStock.getCellData(row, "partCd");
  pName = "";
  ds_PartsSafetyStock.setCellData(row, "partCd", ""); // 부품코드
  ds_PartsSafetyStock.setCellData(row, "partCdNm", ""); // 부품명
  ds_PartsSafetyStock.setCellData(row, "partUnitCdNm", ""); // 단위명
  ds_PartsSafetyStock.setCellData(row, "catCdNm", ""); // 계통코드명
  ds_PartsSafetyStock.setCellData(row, "eqModelNm", ""); // 장비모델명

  udc_partCd.setSelectId("retrievePartInfo");
  await udc_partCd.cfCommonPopUp(scwin.udc_grid_partCd_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
  scwin.isEventRunning = false;
};
scwin.udc_grid_partCd_callBackFunc = function (ret) {
  console.log("udc_grid_partCd_callBackFunc ret " + ret);
  var row = ds_PartsSafetyStock.getRowPosition();
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_PartsSafetyStock.setCellData(row, "partCd", ret[0]); // 부품코드
    ds_PartsSafetyStock.setCellData(row, "partCdNm", ret[1]); // 부품명
    ds_PartsSafetyStock.setCellData(row, "partUnitCdNm", ret[3]); // 단위명
    ds_PartsSafetyStock.setCellData(row, "catCdNm", ret[4]); // 계통코드명
    ds_PartsSafetyStock.setCellData(row, "eqModelNm", ret[6]); // 장비모델명
  } else {
    ds_PartsSafetyStock.setCellData(row, "partCd", ""); // 부품코드
    ds_PartsSafetyStock.setCellData(row, "partCdNm", ""); // 부품명
    ds_PartsSafetyStock.setCellData(row, "partUnitCdNm", ""); // 단위명
    ds_PartsSafetyStock.setCellData(row, "catCdNm", ""); // 계통코드명
    ds_PartsSafetyStock.setCellData(row, "eqModelNm", ""); // 장비모델명
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_PartsSafetyStock_oncellclick = function (rowIndex, columnIndex, columnId) {
  var rowStatus = ds_PartsSafetyStock.getRowStatus(rowIndex);
  if (rowStatus == "C") {
    gr_PartsSafetyStock.setReadOnly("cell", rowIndex, "partCd", false);
  } else {
    gr_PartsSafetyStock.setReadOnly("cell", rowIndex, "partCd", true);
  }
};
scwin.ds_PartsSafetyStock_oncelldatachange = function (info) {
  var colID = info.colID;
  if (colID == "partCd") {
    if (info.newValue == "") {
      ds_PartsSafetyStock.setCellData(info.rowIndex, "partCdNm", "");
      ds_PartsSafetyStock.setCellData(info.rowIndex, "partUnitCdNm", "");
      ds_PartsSafetyStock.setCellData(info.rowIndex, "catCdNm", "");
      ds_PartsSafetyStock.setCellData(info.rowIndex, "eqModelNm", "");
    }
  }
};
scwin.gr_PartsSafetyStock_onafteredit = function (rowIndex, columnIndex, value) {
  var colID = gr_PartsSafetyStock.getColumnID(columnIndex);
  if (colID == "partCd") {
    scwin.f_gridPopupOpen(rowIndex, value);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'',submenuSize:'auto',sortMethod:'ascending',sortOption:'value',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'',submenuSize:'auto',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_partCd',nameId:'ed_partNm',popupID:'partCdPopUp',selectID:'',style:'',validTitle:'',btnId:'btn_partCd',id:'udc_partCd',code:'partCd',name:'partNm','ev:onblurCodeEvent':'scwin.udc_partCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_partCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_partCd_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업장별 안전재고 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_PartsSafetyStock',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_PartsSafetyStock',id:'gr_PartsSafetyStock',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_PartsSafetyStock_ontextimageclick',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_PartsSafetyStock_oncellclick',validExp:'wrkPlCd:작업장:yes::key,partCd:부품코드:yes::key,saftStockQty:안전재고량:no:number,profStockQty:적정재고량:no:number','ev:onafteredit':'scwin.gr_PartsSafetyStock_onafteredit',dataName:'작업장별 안전재고 등록 그리드'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'200'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'계통',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column13',value:'장비모델명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column15',value:'작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'안전재고량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'적정재고량',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',maxLength:'15'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCdNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'partUnitCdNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'catCdNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'select',style:'',id:'wrkPlCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'safeStockQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',allowChar:'0-9',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'propStockQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',allowChar:'0-9',maxLength:'5'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',rowAddFunction:'scwin.f_AddRow',gridID:'gr_PartsSafetyStock'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})