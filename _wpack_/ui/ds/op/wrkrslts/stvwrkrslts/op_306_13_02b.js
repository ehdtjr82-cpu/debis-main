/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_13_02b.xml 65631 2199d45541e849868719659c869d7513facf9c6278176235a80add0de39f47a8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출/입;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입;항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trffCls',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'수요가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'수요가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitPrice',name:'매출;단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUnitPrice',name:'매입;단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용;시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'적용;종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'trffCls',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'copy_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'trffCls',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trffCls',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveCoilSelpchUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:' ',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ds.op.wrkrslts.stvwrkrslts.SaveCoilSelpchUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_trffCls',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP608',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_trffCls","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 추후 체크 사항
// UDC 조회조건, 그리드 다 확인해야함

//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.selectedRowIndex = 0;
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 계정 부서
scwin.textCheck = "";
scwin.eventCnt = 0;
scwin.olddata = "";
scwin.gubun = "";
//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드데이터 호출   
  const codeOptions = [{
    grpCd: "OP607",
    compID: "lc_selpchClsCd, gr_master:selpchClsCd"
  },
  // 셀렉트
  {
    grpCd: "OP608",
    compID: "lc_trffCls"
  } // 셀렉트
  // { grpCd: "OP117", compID: "acb_inqShift" } // 셀렉트
  // { grpCd: "LoBranEBC","retriveLoBranUpperList", compID: "lc_lobranCd" } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  const params = [{
    method: "getLuxeComboData",
    param1: "LoBranEBC",
    param2: "retriveLoBranUpperList",
    compID: "lc_lobranCd"
  }];
  $c.data.setGauceUtil($p, params);
  $c.sbm.execute($p, sbm_trffCls);
};
scwin.onUdcCompleted = function () {
  ica_adptDt.setValue(scwin.vCurDate);
  scwin.f_SetSrchDefault();
};
scwin.ondataload = function () {
  // dataload 가 자꾸 지연되는데 scwin.ondataload 자체에 settimeout 걸어버리면 2번탐
  setTimeout(function () {
    lc_lobranCd.setValue(scwin.lobranCd);
    scwin.btn_retrieve_onClick();
  }, 200);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function () {
  if (!$c.gus.cfValidate($p, tb_searchCondition)) {
    return;
  }
  ds_master.removeAll();
  dma_condition.set("lobranCd", lc_lobranCd.getValue());
  dma_condition.set("selpchClsCd", lc_selpchClsCd.getValue());
  dma_condition.set("selpchItemCd", ed_selpchItemCd.getValue());
  dma_condition.set("trffCls", lc_trffCls.getValue());
  dma_condition.set("dptWrkPlCd", ed_dptWrkPlCd.getValue());
  dma_condition.set("arvWrkPlCd", ed_arvWrkPlCd.getValue());
  dma_condition.set("adptDt", ica_adptDt.getValue());
  dma_condition.set("copCoClntNo", ed_copCoClntNo.getValue());
  dma_condition.set("clntNo", ed_clntNo.getValue());
  $c.sbm.execute($p, sbm_condition);
};

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
scwin.f_add = function () {
  let insertRow = ds_master.insertRow();
  ds_master.setCellData(insertRow, "lobranCd", scwin.lobranCd);
  ds_master.setCellData(insertRow, "selpchClsCd", "");
  ds_master.setCellData(insertRow, "selpchItemCd", "");
  ds_master.setCellData(insertRow, "trffCls", "");
  ds_master.setCellData(insertRow, "clntNo", "");
  ds_master.setCellData(insertRow, "clntNm", "");
  ds_master.setCellData(insertRow, "copCoClntNo", "");
  ds_master.setCellData(insertRow, "copCoClntNm", "");
  ds_master.setCellData(insertRow, "sellUnitPrice", "");
  ds_master.setCellData(insertRow, "pchsUnitPrice", "");
  ds_master.setCellData(insertRow, "dptWrkPlCd", "");
  ds_master.setCellData(insertRow, "arvWrkPlCd", "");
  ds_master.setCellData(insertRow, "adptStDt", scwin.vCurDate);
  ds_master.setCellData(insertRow, "adptEndDt", "99999999");
  spa_totalRows.setValue(ds_master.getTotalRow());
  gr_master.setFocusedCell(insertRow, 0);
};

//-------------------------------------------------------------------------
// 행 복사
//-------------------------------------------------------------------------
scwin.f_copy = function (e) {
  if (ds_master.getTotalRow() > 0) {
    let row = ds_master.getRowPosition();
    let insertRow = ds_master.insertRow();
    ds_master.setCellData(insertRow, "lobranCd", ds_master.getCellData(row, "lobranCd"));
    ds_master.setCellData(insertRow, "lobranNm", ds_master.getCellData(row, "lobranNm"));
    ds_master.setCellData(insertRow, "selpchClsCd", ds_master.getCellData(row, "selpchClsCd"));
    ds_master.setCellData(insertRow, "selpchItemCd", ds_master.getCellData(row, "selpchItemCd"));
    ds_master.setCellData(insertRow, "selpchItemNm", ds_master.getCellData(row, "selpchItemNm"));
    ds_master.setCellData(insertRow, "trffCls", ds_master.getCellData(row, "trffCls"));
    ds_master.setCellData(insertRow, "clntNo", ds_master.getCellData(row, "clntNo"));
    ds_master.setCellData(insertRow, "clntNm", ds_master.getCellData(row, "clntNm"));
    ds_master.setCellData(insertRow, "copCoClntNo", ds_master.getCellData(row, "copCoClntNo"));
    ds_master.setCellData(insertRow, "copCoClntNm", ds_master.getCellData(row, "copCoClntNm"));
    ds_master.setCellData(insertRow, "dptWrkPlCd", ds_master.getCellData(row, "dptWrkPlCd"));
    ds_master.setCellData(insertRow, "dptWrkPlNm", ds_master.getCellData(row, "dptWrkPlNm"));
    ds_master.setCellData(insertRow, "arvWrkPlCd", ds_master.getCellData(row, "arvWrkPlCd"));
    ds_master.setCellData(insertRow, "arvWrkPlNm", ds_master.getCellData(row, "arvWrkPlNm"));
    ds_master.setCellData(insertRow, "sellUnitPrice", ds_master.getCellData(row, "sellUnitPrice"));
    ds_master.setCellData(insertRow, "pchsUnitPrice", ds_master.getCellData(row, "pchsUnitPrice"));
    ds_master.setCellData(insertRow, "adptStDt", ds_master.getCellData(row, "adptStDt"));
    ds_master.setCellData(insertRow, "adptEndDt", ds_master.getCellData(row, "adptEndDt"));
    gr_master.setFocusedCell(insertRow, 1);
  }
  if (ds_master.getTotalRow() == 0) {
    $c.win.alert($p, "복사할 행을 선택해 주세요");
  }
};

//-------------------------------------------------------------------------
// 행 취소
//-------------------------------------------------------------------------
scwin.f_cancel = function () {
  if (ds_master.getTotalRow() == 0) return;
  let status = ds_master.getRowStatus(ds_master.getRowPosition());
  if (status === "C") {
    ds_master.removeRow(ds_master.getRowPosition());
  } else {
    ds_master.undoRow(ds_master.getRowPosition());
    gr_master.setFocusedCell(ds_master.getRowPosition(), 1);
  }
  spa_totalRows.setValue(ds_master.getTotalRow());
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onClick = async function (e) {
  if (ds_master.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (ds_master.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "코일매출입요율"));
    return;
  }
  if (ds_master.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_master]))) {
    return;
  }
  for (let i = 0; i < ds_master.getTotalRow(); i++) {
    let lobranCd = ds_master.getCellData(i, "lobranCd");
    let selpchClsCd = ds_master.getCellData(i, "selpchClsCd");
    let selpchItemCd = ds_master.getCellData(i, "selpchItemCd");
    let trffCls = ds_master.getCellData(i, "trffCls");
    let clntNo = ds_master.getCellData(i, "clntNo");
    let clntNm = ds_master.getCellData(i, "clntNm");
    let adptStDt = ds_master.getCellData(i, "adptStDt");
    let adptEndDt = ds_master.getCellData(i, "adptEndDt");
    let arvWrkPlCd = ds_master.getCellData(i, "arvWrkPlCd");
    let dptWrkPlCd = ds_master.getCellData(i, "dptWrkPlCd");
    let copCoClntNo = ds_master.getCellData(i, "copCoClntNo");
    if (ds_master.getRowStatus(i) != "R" && lobranCd == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 점소는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "lobranCd");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && selpchClsCd == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 매출입 구분은 입력하셔야 합니다.");
      gr_master.setFocusedCell("selpchClsCd");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && selpchItemCd == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 매출입항목은 입력하셔야 합니다.");
      gr_master.setFocusedCell("selpchItemCd");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && trffCls == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 요율 구분은 입력하셔야 합니다.");
      gr_master.setFocusedCell("trffCls");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && clntNo == "" || clntNm == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 수요가는 입력하셔야 합니다.");
      gr_master.setFocusedCell("clntNm");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && adptStDt == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 적용시작일자는 입력하셔야 합니다.");
      gr_master.setFocusedCell("adptStDt");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && adptEndDt == "") {
      $c.win.alert($p, i + 1 + "번째  데이터에서 적용종료일자는 입력하셔야 합니다.");
      gr_master.setFocusedCell("adptEndDt");
      return;
    }
    if (trffCls == "01" || trffCls == "06") {
      if (dptWrkPlCd == "") {
        $c.win.alert($p, i + 1 + "번째  데이터는 운송료이므로 출발지를 필수로 입력하여야 합니다.");
        gr_master.setFocusedCell("dptWrkPlCd");
        return;
      }
      if (arvWrkPlCd == "") {
        $c.win.alert($p, i + 1 + "번째  데이터는 운송료이므로 도착지를 필수로 입력하여야 합니다.");
        gr_master.setFocusedCell("arvWrkPlCd");
        return;
      }
    }
    if (trffCls == "03" && copCoClntNo == "") {
      $c.win.alert($p, i + 1 + "번째  데이터는 셔틀료(부두)이므로 운송업체를 필수로 입력하여야 합니다.");
      gr_master.setFocusedCell("copCoClntNo");
      return;
    }
    if (trffCls == "04" && copCoClntNo == "") {
      $c.win.alert($p, i + 1 + "번째  데이터는 셔틀료(모덱스)이므로 운송업체를 필수로 입력하여야 합니다.");
      gr_master.setFocusedCell("copCoClntNo");
      return;
    }
    if (trffCls == "05" && copCoClntNo == "") {
      $c.win.alert($p, i + 1 + "번째  데이터는 셔틀료(지사)이므로 운송업체를 필수로 입력하여야 합니다.");
      gr_master.setFocusedCell("copCoClntNo");
      return;
    }
    if (trffCls == "06" && copCoClntNo == "") {
      $c.win.alert($p, i + 1 + "번째  데이터는 운송료(매입)이므로 운송업체를 필수로 입력하여야 합니다.");
      gr_master.setFocusedCell("copCoClntNo");
      return;
    }
    if ((trffCls == "03" || trffCls == "04" || trffCls == "05") && copCoClntNo == "") {
      $c.win.alert($p, i + 1 + "번째  데이터는 셔츨료이므로 운송업체를 필수로 입력하여야 합니다.");
      gr_master.setFocusedCell("copCoClntNo");
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_master);
  }
};

//-------------------------------------------------------------------------
// 저장 완료시
//-------------------------------------------------------------------------
scwin.sbm_master_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.btn_retrieve_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition, [ica_adptDt]);
  $c.gus.cfInitHidVal($p, tb_searchCondition);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회조건 기본값 세팅
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  lc_lobranCd.setValue(scwin.lobranCd);
  ica_adptDt.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (매출입항목)
//-------------------------------------------------------------------------
scwin.udc_selpchItem_onClick = async function (e) {
  scwin.f_openPopUp('U1', 'F');
};
scwin.udc_selpchItem_onblurCode = async function (e) {
  scwin.f_openPopUp('U1', 'F');
};
scwin.udc_selpchItem_onChangeName = async function (info) {
  scwin.f_openPopUp('U1', 'F');
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : 팝업열기
// gubun : D=차변계정, C=대변계정
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (gubun, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  var rtnList = new Array();
  if (gubun == "U1") {
    //상위매출입항목코드(조건절)
    pCode = ed_selpchItemCd.getValue();
    pName = ed_selpchItemNm.getValue();
    pWhere = ',,,,,';
    pTitle = "항목코드,항목명";
    pWindowTitle = "매출입항목코드조회,항목코드,항목명";
  }
  scwin.gubun = gubun;
  udc_selpchItem.cfCommonPopUp(scwin.udc_selpchItem_callBackFunc // XML상의 SELECT ID	
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , pTitle // Title순서	
  , '150,210' // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
  , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  , pWindowTitle // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(매출입항목)
//-------------------------------------------------------------------------
scwin.udc_selpchItem_callBackFunc = function (rtnList) {
  if (scwin.gubun == "U1") {
    //매출입항목코드(조건절)
    $c.gus.cfSetReturnValue($p, rtnList, ed_selpchItemCd, ed_selpchItemNm);
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
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  // var pCode = "";
  // var pName = "";
  switch (disGubun) {
    case 1:
      //디테일 수입 대표거래처 팝업
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
      , 'F' // 전체검색허용여부	("F")
      , "대표거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //디테일 수입 대표거래처 팝업
      udc_copCoClnt.cfCommonPopUp(scwin.udc_copCoClnt_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "대표거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //마스터  팝업
      udc_dptWrkPl.cfCommonPopUp(scwin.udc_dptWrkPl_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      //마스터  팝업
      udc_arvWrkPl.cfCommonPopUp(scwin.udc_arvWrkPl_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (수요가)
//-------------------------------------------------------------------------
scwin.udc_clnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'T');
};
scwin.udc_clnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clnt_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(수요가)
//-------------------------------------------------------------------------
scwin.udc_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (운송업체)
//-------------------------------------------------------------------------
scwin.udc_copCoClnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_copCoClntNo.getValue(), ed_copCoClntNm.getValue(), 'F', 'T');
};
scwin.udc_copCoClnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNo, ed_copCoClntNm, 2);
};
scwin.udc_copCoClnt_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNm, ed_copCoClntNo, 2, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(운송업체)
//-------------------------------------------------------------------------
scwin.udc_copCoClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_copCoClntNo, ed_copCoClntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (출발지)
//-------------------------------------------------------------------------
scwin.udc_dptWrkPl_onClick = async function (e) {
  scwin.f_openCommonPopUp(3, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_dptWrkPl_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, ed_dptWrkPlNm, 3);
};
scwin.udc_dptWrkPl_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlNm, ed_dptWrkPlCd, 3, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(출발지)
//-------------------------------------------------------------------------
scwin.udc_dptWrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptWrkPlCd, ed_dptWrkPlNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (도착지)
//-------------------------------------------------------------------------
scwin.udc_arvWrkPl_onClick = async function (e) {
  scwin.f_openCommonPopUp(4, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_arvWrkPl_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, ed_arvWrkPlNm, 4);
};
scwin.udc_arvWrkPl_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 4, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(도착지)
//-------------------------------------------------------------------------
scwin.udc_arvWrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvWrkPlCd, ed_arvWrkPlNm);
};

//-------------------------------------------------------------------------
// Grid 공통팝업 lobranNm selpchItemNm clntNm copCoClntNm dptWrkPlNm arvWrkPlNm
//-------------------------------------------------------------------------
scwin.gr_master_openPopup = function (rowIndex, columnIndex) {
  switch (gr_master.getColumnID(columnIndex)) {
    //점소
    case "lobranNm":
      scwin.f_openCommonPopUpGrid(1, rowIndex, "", ds_master.getCellData(rowIndex, "lobranNm"), "F", "F", "ontextimageclick");
      break;
    //매출입
    case "selpchItemNm":
      scwin.f_openCommonPopUpGrid(2, rowIndex, "", ds_master.getCellData(rowIndex, "selpchItemNm"), "F", "F", "ontextimageclick");
      break;
    //수요가
    case "clntNm":
      scwin.f_openCommonPopUpGrid(3, rowIndex, "", ds_master.getCellData(rowIndex, "clntNm"), "F", "F", "ontextimageclick");
      break;
    //운송업체
    case "copCoClntNm":
      scwin.f_openCommonPopUpGrid(4, rowIndex, "", ds_master.getCellData(rowIndex, "copCoClntNm"), "F", "F", "ontextimageclick");
      break;
    //출발지
    case "dptWrkPlNm":
      scwin.f_openCommonPopUpGrid(5, rowIndex, "", ds_master.getCellData(rowIndex, "dptWrkPlNm"), "F", "F", "ontextimageclick");
      break;
    //작업지
    case "arvWrkPlNm":
      scwin.f_openCommonPopUpGrid(6, rowIndex, "", ds_master.getCellData(rowIndex, "arvWrkPlNm"), "F", "F", "ontextimageclick");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 셀 포커스 해제
//-------------------------------------------------------------------------
scwin.grid_onBlur = function (rowIndex, columnIndex, value) {
  let colId = gr_master.getColumnID(columnIndex);
  switch (colId) {
    case "selpchItemNm":
      if (ds_master.getCellData(rowIndex, colId) != "") {
        scwin.f_openCommonPopUpGrid(2, rowIndex, "", ds_master.getCellData(rowIndex, "selpchItemNm"), "T", "F", "onafteredit");
      } else {
        ds_master.setCellData(rowIndex, "selpchItemCd", "");
        ds_master.setCellData(rowIndex, "selpchItemNm", "");
        return;
      }
      break;
    case "lobranNm":
      if (ds_master.getCellData(rowIndex, colId) != "") {
        scwin.f_openCommonPopUpGrid(1, rowIndex, "", ds_master.getCellData(rowIndex, "lobranNm"), "T", "T", "onafteredit");
      } else {
        ds_master.setCellData(rowIndex, "lobranCd", "");
        ds_master.setCellData(rowIndex, "lobranNm", "");
        return;
      }
      break;
    case "clntNm":
      if (ds_master.getCellData(rowIndex, colId) != "") {
        scwin.f_openCommonPopUpGrid(3, rowIndex, "", ds_master.getCellData(rowIndex, "clntNm"), "T", "T", "onafteredit");
      } else {
        ds_master.setCellData(rowIndex, "clntNo", "");
        ds_master.setCellData(rowIndex, "clntNm", "");
      }
      break;
    case "copCoClntNm":
      if (ds_master.getCellData(rowIndex, colId) != "") {
        scwin.f_openCommonPopUpGrid(4, rowIndex, "", ds_master.getCellData(rowIndex, "copCoClntNm"), "T", "T", "onafteredit");
      } else {
        ds_master.setCellData(rowIndex, "copCoClntNo", "");
        ds_master.setCellData(rowIndex, "copCoClntNm", "");
      }
      break;
    case "dptWrkPlNm":
      if (ds_master.getCellData(rowIndex, colId) != "") {
        scwin.f_openCommonPopUpGrid(5, rowIndex, "", ds_master.getCellData(rowIndex, "dptWrkPlNm"), "T", "T", "onafteredit");
      } else {
        ds_master.setCellData(rowIndex, "dptWrkPlCd", "");
        ds_master.setCellData(rowIndex, "dptWrkPlNm", "");
      }
      break;
    case "arvWrkPlNm":
      if (ds_master.getCellData(rowIndex, colId) != "") {
        scwin.f_openCommonPopUpGrid(6, rowIndex, "", ds_master.getCellData(rowIndex, "arvWrkPlNm"), "T", "T", "onafteredit");
      } else {
        ds_master.setCellData(rowIndex, "arvWrkPlCd", "");
        ds_master.setCellData(rowIndex, "arvWrkPlNm", "");
      }
      break;
    case "selpchClsCd":
      scwin.ds_trffcls_filter(rowIndex);
    default:
      break;
  }
  ;
};
scwin.ds_trffcls_filter = function (rowIndex) {
  ds_trffCls.clearFilter();
  var ft = ds_master.getCellData(rowIndex, "selpchClsCd");

  // dlt_commonCodeOP608

  ds_trffCls.setColumnFilter({
    type: 'row',
    colIndex: 'upperCd',
    key: ft,
    condition: 'and'
  });
  ds_master.setCellData(rowIndex, "trffCls", "");
};

//-------------------------------------------------------------------------
// Grid 공통팝업 컬럼ID(lobranNm, selpchItemNm, clntNm, copCoClntNm, dptWrkPlNm, arvWrkPlNm)
//-------------------------------------------------------------------------
scwin.f_openCommonPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  let colid = gr_master.getFocusedColumnID();
  let evNm = arguments[6] || "";
  if (evNm && $c.win.getEventList($p, gr_master, evNm)) {
    scwin.eventCnt++;
  }
  if (colid != "dptWrkPlNm") {
    if (evNm == "onafteredit" && scwin.olddata == ds_master.getCellData(row, colid)) {
      return;
    }
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  switch (disGubun) {
    case 1:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "lobranNm", "");
        ds_master.setCellData(row, "lobranCd", "");
        udc_comCode_Grid.setSelectId("retrieveLogisDeptInfo");
        udc_comCode_Grid.cfCommonPopUp(scwin.udc_gridPopup_CallbackFunc, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", null, "작업점소조회, 작업점소코드, 작업점소명");
      }
      break;
    case 2:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "selpchItemNm", "");
        ds_master.setCellData(row, "selpchItemCd", "");
        udc_comCode_Grid.setSelectId("retrieveSelpchItemInfo");
        udc_comCode_Grid.cfCommonPopUp(scwin.udc_gridPopup_CallbackFunc, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", null, "매출입항목조회,항목코드,항목명");
      }
      break;
    case 3:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "clntNm", "");
        ds_master.setCellData(row, "clntNo", "");
        udc_comCode_Grid.setSelectId("retrieveCoopList");
        udc_comCode_Grid.cfCommonPopUp(scwin.udc_gridPopup_CallbackFunc, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", null, "화주,화주코드,화주명");
      }
      break;
    case 4:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "copCoClntNm", "");
        ds_master.setCellData(row, "copCoClntNo", "");
        udc_comCode_Grid.setSelectId("retrieveCoopList");
        udc_comCode_Grid.cfCommonPopUp(scwin.udc_gridPopup_CallbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null, "대표거래처,거래처코드,거래처명");
      }
      break;
    case 5:
      // if(scwin.eventCnt == 1) {
      ds_master.setCellData(row, "dptWrkPlNm", "");
      ds_master.setCellData(row, "dptWrkPlCd", "");
      udc_comCode_Grid.setSelectId("retrieveWrkPlInfo3");
      udc_comCode_Grid.cfCommonPopUp(scwin.udc_gridPopup_CallbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null, "작업장, 작업장코드, 작업장명");
      // }
      break;
    case 6:
      // if(scwin.eventCnt == 1) {
      ds_master.setCellData(row, "arvWrkPlNm", "");
      ds_master.setCellData(row, "arvWrkPlCd", "");
      udc_comCode_Grid.setSelectId("retrieveWrkPlInfo3");
      udc_comCode_Grid.cfCommonPopUp(scwin.udc_gridPopup_CallbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null, "작업장, 작업장코드, 작업장명");
      // }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// Grid 공통팝업 Callback 컬럼ID(lobranNm, selpchItemNm, clntNm, copCoClntNm, dptWrkPlNm, arvWrkPlNm)
//-------------------------------------------------------------------------
scwin.udc_gridPopup_CallbackFunc = function (ret) {
  let rowIdx = gr_master.getFocusedRowIndex();
  let colId = gr_master.getFocusedColumnID();
  let colIndex = gr_master.getColumnIndex(colId) - 1;
  let beforeColId = gr_master.getColumnID(colIndex);
  if (colId != scwin.textCheck) {
    colId = scwin.textCheck;
  }
  if (colId == "lobranNm") {
    if (ret[0] == "N/A") {
      ds_master.setCellData(rowIdx, "lobranCd", "");
      ds_master.setCellData(rowIdx, "lobranNm", "");
    } else {
      ds_master.setCellData(rowIdx, "lobranCd", ret[0]);
      ds_master.setCellData(rowIdx, "lobranNm", ret[1]);
    }
  } else if (colId == "selpchItemNm") {
    if (ret != null || ret != "" || ret.length != 0 || ret == "N/A") {
      ds_master.setCellData(rowIdx, "selpchItemCd", ret[0]);
      ds_master.setCellData(rowIdx, "selpchItemNm", ret[1]);
    } else {
      ds_master.setCellData(rowIdx, "selpchItemCd", "");
      ds_master.setCellData(rowIdx, "selpchItemNm", "");
    }
  } else if (colId == "clntNm") {
    if (ret != null || ret != "" || ret.length != 0 || ret == "N/A") {
      ds_master.setCellData(rowIdx, "clntNo", ret[0]);
      ds_master.setCellData(rowIdx, "clntNm", ret[1]);
    } else {
      ds_master.setCellData(rowIdx, "clntNo", "");
      ds_master.setCellData(rowIdx, "clntNm", "");
    }
  } else if (colId == "copCoClntNm") {
    if (ret != null || ret != "" || ret.length != 0 || ret == "N/A") {
      $c.gus.cfSetGridReturnValue($p, ret, ds_master, rowIdx, "copCoClntNo", "copCoClntNm");
    } else {
      ds_master.setCellData(rowIdx, "copCoClntNo", "");
      ds_master.setCellData(rowIdx, "copCoClntNm", "");
    }
  } else if (colId == "dptWrkPlNm") {
    if (ret != null || ret != "" || ret.length != 0 || ret == "N/A") {
      ds_master.setCellData(rowIdx, "dptWrkPlCd", ret[0]);
      ds_master.setCellData(rowIdx, "dptWrkPlNm", ret[1]);
    } else {
      ds_master.setCellData(rowIdx, "dptWrkPlCd", "");
      ds_master.setCellData(rowIdx, "dptWrkPlNm", "");
    }
  } else if (colId == "arvWrkPlNm") {
    if (ret != null || ret != "" || ret.length != 0 || ret == "N/A") {
      ds_master.setCellData(rowIdx, "arvWrkPlCd", ret[0]);
      ds_master.setCellData(rowIdx, "arvWrkPlNm", ret[1]);
    } else {
      ds_master.setCellData(rowIdx, "arvWrkPlCd", "");
      ds_master.setCellData(rowIdx, "arvWrkPlNm", "");
    }
  }
};

//-------------------------------------------------------------------------
// 조회 완료시
//-------------------------------------------------------------------------
scwin.sbm_condition_submitDone = function (e) {
  spa_totalRows.setValue(ds_master.getTotalRow());
  for (i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getRowStatus(i) == "R") {
      if (ds_master.getCellData(i, "adptEndDt") === "99999999") {
        gr_master.setCellReadOnly(i, "lobranCd", true);
        gr_master.setCellReadOnly(i, "lobranNm", true);
        gr_master.setCellReadOnly(i, "selpchClsCd", true);
        gr_master.setCellReadOnly(i, "selpchItemCd", true);
        gr_master.setCellReadOnly(i, "selpchItemNm", true);
        gr_master.setCellReadOnly(i, "trffCls", true);
        gr_master.setCellReadOnly(i, "clntNo", true);
        gr_master.setCellReadOnly(i, "clntNm", true);
        gr_master.setCellReadOnly(i, "copCoClntNo", false);
        gr_master.setCellReadOnly(i, "adptStDt", true);
        gr_master.setCellReadOnly(i, "copCoClntNm", false);
        gr_master.setCellReadOnly(i, "dptWrkPlCd", false);
        gr_master.setCellReadOnly(i, "dptWrkPlNm", false);
        gr_master.setCellReadOnly(i, "arvWrkPlCd", false);
        gr_master.setCellReadOnly(i, "arvWrkPlNm", false);
        gr_master.setCellReadOnly(i, "sellUnitPrice", false);
        gr_master.setCellReadOnly(i, "pchsUnitPrice", false);
        gr_master.setCellReadOnly(i, "adptStDt", false);
        gr_master.setCellReadOnly(i, "adptEndDt", false);
      } else {
        gr_master.setCellReadOnly(i, "lobranCd", true);
        gr_master.setCellReadOnly(i, "lobranNm", true);
        gr_master.setCellReadOnly(i, "selpchClsCd", true);
        gr_master.setCellReadOnly(i, "selpchItemCd", true);
        gr_master.setCellReadOnly(i, "selpchItemNm", true);
        gr_master.setCellReadOnly(i, "trffCls", true);
        gr_master.setCellReadOnly(i, "clntNo", true);
        gr_master.setCellReadOnly(i, "clntNm", true);
        gr_master.setCellReadOnly(i, "copCoClntNo", true);
        gr_master.setCellReadOnly(i, "copCoClntNm", true);
        gr_master.setCellReadOnly(i, "dptWrkPlCd", true);
        gr_master.setCellReadOnly(i, "dptWrkPlNm", true);
        gr_master.setCellReadOnly(i, "arvWrkPlCd", true);
        gr_master.setCellReadOnly(i, "arvWrkPlNm", true);
        gr_master.setCellReadOnly(i, "sellUnitPrice", true);
        gr_master.setCellReadOnly(i, "pchsUnitPrice", true);
        gr_master.setCellReadOnly(i, "adptStDt", true);
        gr_master.setCellReadOnly(i, "adptEndDt", true);
      }
    }
  }
};
scwin.ds_master_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (ds_master.getRowStatus(row) == "R") {
    if (ds_master.getCellData(row, "adptEndDt") == "99999999") {
      gr_master.setCellReadOnly(row, "lobranCd", true);
      gr_master.setCellReadOnly(row, "lobranNm", true);
      gr_master.setCellReadOnly(row, "selpchClsCd", true);
      gr_master.setCellReadOnly(row, "selpchItemCd", true);
      gr_master.setCellReadOnly(row, "selpchItemNm", true);
      gr_master.setCellReadOnly(row, "trffCls", true);
      gr_master.setCellReadOnly(row, "clntNo", true);
      gr_master.setCellReadOnly(row, "clntNm", true);
      gr_master.setCellReadOnly(row, "adptStDt", true);
      gr_master.setCellReadOnly(row, "copCoClntNo", false);
      gr_master.setCellReadOnly(row, "copCoClntNm", false);
      gr_master.setCellReadOnly(row, "dptWrkPlCd", false);
      gr_master.setCellReadOnly(row, "dptWrkPlNm", false);
      gr_master.setCellReadOnly(row, "arvWrkPlCd", false);
      gr_master.setCellReadOnly(row, "arvWrkPlNm", false);
      gr_master.setCellReadOnly(row, "sellUnitPrice", false);
      gr_master.setCellReadOnly(row, "pchsUnitPrice", false);
      gr_master.setCellReadOnly(row, "adptStDt", false);
      gr_master.setCellReadOnly(row, "adptEndDt", false);
    } else {
      gr_master.setCellReadOnly(row, "lobranCd", true);
      gr_master.setCellReadOnly(row, "lobranNm", true);
      gr_master.setCellReadOnly(row, "selpchClsCd", true);
      gr_master.setCellReadOnly(row, "selpchItemCd", true);
      gr_master.setCellReadOnly(row, "selpchItemNm", true);
      gr_master.setCellReadOnly(row, "trffCls", true);
      gr_master.setCellReadOnly(row, "clntNo", true);
      gr_master.setCellReadOnly(row, "clntNm", true);
      gr_master.setCellReadOnly(row, "copCoClntNo", true);
      gr_master.setCellReadOnly(row, "copCoClntNm", true);
      gr_master.setCellReadOnly(row, "dptWrkPlCd", true);
      gr_master.setCellReadOnly(row, "dptWrkPlNm", true);
      gr_master.setCellReadOnly(row, "arvWrkPlCd", true);
      gr_master.setCellReadOnly(row, "arvWrkPlNm", true);
      gr_master.setCellReadOnly(row, "sellUnitPrice", true);
      gr_master.setCellReadOnly(row, "pchsUnitPrice", true);
      gr_master.setCellReadOnly(row, "adptStDt", true);
      gr_master.setCellReadOnly(row, "adptEndDt", true);
    }
  }
};
scwin.grid_before = function (rowIndex, columnIndex, value) {
  scwin.textCheck = gr_master.getColumnID(columnIndex);
  scwin.olddata = value;
};

//-------------------------------------------------------------------------
// 그리드 매출입구분 변경시 -> 현재 공통코드를 불러오면 빈값 세팅이 불가해서 변경이 안됨
//-------------------------------------------------------------------------
// scwin.gr_master_onviewChange = function (info) {
//     let colId = info.colId;
//     let rowIdx = info.rowIndex;
//     if(colId == "selpchClsCd") {
//         ds_master.setCellData(rowIdx, "trffCls", "");
//     }

// };

scwin.gr_master_onRowChange = function (rowIndex, oldRow) {};
scwin.sbm_lobran_submitdone = function (e) {
  lc_lobranCd.setValue(scwin.lobranCd);
};

//-------------------------------------------------------------------------
// 데이터로드시
//-------------------------------------------------------------------------
scwin.ds_master_ondataload = function () {
  let rowCount = ds_master.getRowCount();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCount == 0) {
      $c.win.alert($p, MSG_CM_WRN_002);
    }
  }
  gr_master.setFocusedCell(0, 0);
};
scwin.gr_master_onClick = function (rowIndex, columnIndex, columnId) {
  gr_master.setReadOnly("grid", false);
  if (columnId == "sellUnitPrice") {
    if (ds_master.getCellData(rowIndex, "selpchClsCd") == "S") {
      gr_master.setReadOnly("grid", false);
    } else {
      gr_master.setReadOnly("grid", true);
    }
  }
  if (columnId == "pchsUnitPrice") {
    if (ds_master.getCellData(rowIndex, "selpchClsCd") == "B") {
      gr_master.setReadOnly("grid", false);
    } else {
      gr_master.setReadOnly("grid", true);
    }
  }
  if (columnId == "adptEndDt") {
    if (ds_master.getRowStatus(rowIndex) == "C" && ds_master.getCellData(rowIndex, "adptEndDt") == "99999999") {
      gr_master.setReadOnly("grid", true);
      $c.win.alert($p, "신규 요율 입력 시, 적용종료일자는 9999/99/99 입니다.");
    } else {
      gr_master.setReadOnly("grid", false);
    }
  }
};
scwin.runExcel = async function () {
  let options = {
    fileName: "코일매출입요율.xlsx",
    sheetName: "코일매출입요율"
  };
  let grdObj = gr_master;
  let infoArr = {};
  if (ds_master.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width : 150px;',submenuSize:'fixed',mandatory:'true',ref:'',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:''},E:[{T:1,N:'xf:label',A:{ref:''}},{T:1,N:'xf:value',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_selpchItemCd',nameId:'ed_selpchItemNm',id:'udc_selpchItem',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'4',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'data',selectID:'retrieveSelpchItemInfo','ev:onclickEvent':'scwin.udc_selpchItem_onClick','ev:onblurCodeEvent':'scwin.udc_selpchItem_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_selpchItem_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_trffCls',style:'width : 140px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'',visibleRowNum:'7'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_trffCls'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',pickerType:'dynamic',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수요가',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'8',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'Data',selectID:'retrieveCoopList','ev:onclickEvent':'scwin.udc_clnt_onClick','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_clnt_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_copCoClntNo',nameId:'ed_copCoClntNm',id:'udc_copCoClnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'8',objTypeCode:'Data',UpperFlagCode:'1',selectID:'retrieveCoopList','ev:onclickEvent':'scwin.udc_copCoClnt_onClick','ev:onviewchangeNameEvent':'scwin.udc_copCoClnt_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm',id:'udc_dptWrkPl',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'Data',selectID:'retrieveWrkPlInfo3','ev:onclickEvent':'scwin.udc_dptWrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_dptWrkPl_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',objTypeCode:'Data',UpperFlagCode:'1',nameId:'ed_arvWrkPlNm',id:'udc_arvWrkPl',objTypeName:'Data',selectID:'retrieveWrkPlInfo3','ev:onclickEvent':'scwin.udc_arvWrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_arvWrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_arvWrkPl_onChangeName'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'코일매출입요율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_master',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'14',visibleRowNumFix:'true',resize:'true',columnMove:'true','ev:onafteredit':'scwin.grid_onBlur','ev:onbeforeedit':'scwin.grid_before','ev:oncellclick':'scwin.gr_master_onClick','ev:onviewchange':'scwin.gr_master_onviewChange','ev:onrowindexchange':'scwin.gr_master_onRowChange','ev:ontextimageclick':'scwin.gr_master_openPopup',rowStatusVisible:'true',focusDefaultColumn:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'SEQ',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'물류점소코드',width:'120',hidden:'true',class:'txt-red',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'물류점소',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매출/입<br/>구분',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매출입항목코드',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출입<br/>항목',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'요율구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'수요가',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'수요가',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'운송업체',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'운송업체',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'출발지',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'출발지',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'도착지',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'도착지',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'매출단가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'매입단가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'적용<br/>시작일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'적용<br/>종료일자',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'select',width:'80',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trffCls',inputType:'select',width:'100',textAlign:'left',selectedData:'false',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_trffCls'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNo',inputType:'text',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'copCoClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlCd',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUnitPrice',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsUnitPrice',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptStDt',value:'',displayMode:'label',dateValidCheck:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptEndDt',value:'',displayMode:'label',dateValidCheck:'false'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copy',type:'button',class:'btn','ev:onclick':'scwin.f_copy'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_master',btnCancelYn:'Y',btnRowAddYn:'Y',rowAddFunction:'scwin.f_add',btnDelYn:'N',btnRowDelYn:'N',cancelFunction:'scwin.f_cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display: none;',id:'udc_comCode_Grid'}}]}]}]}]}]})