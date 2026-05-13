/*amd /ui/ds/lo/comninfomgnt/lo_100_03_03b.xml 36168 701f7fe37fae324a0dd6f11453431f74d681b5fc198a4aac4e15a2c6d38782ae */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo201',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommNm',name:'품목군',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commEngNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pyPerTonCnt',name:'평당;톤수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F／E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lvl',name:'name9',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo200',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commEngNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'거래처품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommNm',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplRealCnvrsnQty',name:'평균중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'BOX당수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pyPerTonCnt',name:'평당;톤수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidUpperCommNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidKcgNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'bizLongCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'commCd',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveCustomerCommodityListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_lo201","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lo201","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve1',action:'/ds.lo.comninfomgnt.RetrieveCustomerCommNmListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_lo200","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lo200","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveCustomerCommodityListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_lo201","key":"IN_DS1"},{"action":"modified","id":"ds_lo200","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pos_rowSts = 0;
scwin.curPos = -1;
scwin._isCallbackSetting = false;
let MSG_LO_ERR_001 = "거래처를 입력 후에 등록 바랍니다.";
let MSG_LO_ERR_002 = "새로운 거래처 품명을 관리하고자 하시면 \n\n신규로 입력하거나 변경된 데이타를 먼저 저장하시고 \n\n재조회 후  처리하시 바랍니다.";
let MSG_LO_ERR_003 = "거래처 품목을 먼저 저장 후 거래처 품명을 추가하십시오. ";
scwin.onpageload = function () {
  //공통코드- 소유구분
  const codeOptions = [{
    grpCd: "OP101",
    compID: "gr_lo201:cntrSizCd"
  }, {
    grpCd: "OP171",
    compID: "gr_lo201:fullEmptyClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
};
scwin.onUdcCompleted = function () {
  ed_clntNo.focus();
};

//거래처 pop
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopup(1, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};
// 거래처 pop callback
scwin.udc_comCode_clnt_callBackFunc = function (ret) {
  // 거래처코드, 거래처명
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
scwin.udc_comCode_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1, null);
};
scwin.udc_comCode_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, null, false);
};

// 사업장 팝업 공통 로직 함수 (마지막 호출은 callback으로 처리)
scwin.f_bizCommon = function (callback) {
  let v_clntNo = ed_clntNo.getValue();
  let v_wrkPlCd = "999";
  if (v_clntNo === "") {
    $c.win.alert($p, "먼저 거래처를 입력해주세요");
    ed_clntNo.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, v_clntNo)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("거래처"));
    ed_clntNo.focus();
    return;
  }
  let v_itemCd = v_clntNo === "000001" || v_clntNo === "000008" ? "BIZ" : "COMPANY";
  let pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd;
  callback(pWhere);
};

//사업장 pop
scwin.udc_comCode_biz_onclickEvent = function (e) {
  scwin.f_bizCommon(function (pWhere) {
    scwin.f_openCommonPopup(2, ed_bizLongCd.getValue(), ed_bizLongNm.getValue(), "F", "F", pWhere);
  });
};

// 사업장 pop callback
scwin.udc_comCode_biz_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bizLongCd, ed_bizLongNm);
};
scwin.udc_comCode_biz_onblurCodeEvent = function (e) {
  scwin.f_bizCommon(function (pWhere) {
    scwin.f_chkOpenCommonPopUp(ed_bizLongCd, ed_bizLongNm, 2, pWhere);
  });
};
scwin.udc_comCode_biz_onviewchangeNameEvent = function (info) {
  scwin.f_bizCommon(function (pWhere) {
    scwin.f_chkOpenCommonPopUp(ed_bizLongNm, ed_bizLongCd, 2, pWhere, false);
  });
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// AS-IS function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.curPos = -1;
  if (ed_clntNo.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("거래처")); // 필수 입력 항목입니다.
    return;
  }
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("bizLongCd", ed_bizLongCd.getValue());
  ds_lo200.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_lo201.getRowCount();
  if (nCnt > 0) {
    gr_lo201.setFocusedCell(0, 0);
    total.setValue(nCnt);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// function name : addrow
// function desc : 행추가
//-------------------------------------------------------------------------
scwin.addRow = function () {
  let i;
  let chkCnt = 0;
  if (ed_clntNo.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_LO_ERR_001); // 거래처를 입력 후에 등록 바랍니다.
    return;
  }
  for (i = 0; i < ds_lo201.getRowCount(); i++) {
    if (ed_clntNo.getValue() != ds_lo201.getCellData(i, "clntNo")) {
      chkCnt++;
    }
  }
  if (chkCnt > 0) {
    $c.gus.cfAlertMsg($p, MSG_LO_ERR_002);
    return;
  }
  let nRow = ds_lo201.insertRow();
  gr_lo201.setFocusedCell(nRow, 0);
  ds_lo201.setCellData(nRow, "clntNo", ed_clntNo.getValue());
  ds_lo201.setCellData(nRow, "lvl", 3);
  ds_lo201.setCellData(nRow, "useYn", 1);
  if (ds_lo201.getRowCount() > 0) {
    ds_lo201.setCellData(ds_lo201.getRowPosition(), "upperCommCd", ds_lo201.getCellData(ds_lo201.getRowPosition() - 1, "upperCommCd"));
    ds_lo201.setCellData(ds_lo201.getRowPosition(), "upperCommNm", ds_lo201.getCellData(ds_lo201.getRowPosition() - 1, "upperCommNm"));
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

//grid onclick...
scwin.gr_lo201_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.curPos === rowIndex) return;
  scwin.curPos = rowIndex;
  let commCd = ds_lo201.getCellData(rowIndex, "commCd");
  scwin.f_Retrieve1(commCd);
};
scwin.f_Retrieve1 = function (commCd) {
  if (ds_lo201.getRowCount() == 0) {
    $c.win.alert($p, "먼저 거래처품목을 조회해 주세요.");
    ed_clntNo.focus();
    return;
  }
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("bizLongCd", ed_bizLongCd.getValue());
  dma_search.set("commCd", commCd);
  $c.sbm.execute($p, sbm_retrieve1);
};
scwin.sbm_retrieve1_submitdone = function () {
  let nCnt = ds_lo200.getRowCount();
  if (nCnt > 0) {
    gr_lo200.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  } else {
    total2.setValue(0);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//품명미지정버튼
scwin.btn_long_onclick = function (e) {
  scwin.f_Retrieve1("");
};

// 거래처품명 grid 행추가 (grid2)
scwin.addRow2 = function () {
  if (ed_clntNo.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_LO_ERR_001); // 거래처를 입력 후에 등록 바랍니다.
    return;
  }
  if (ds_lo201.getCellData(ds_lo201.getRowPosition(), "commCd") == "") {
    $c.gus.cfAlertMsg($p, MSG_LO_ERR_003);
    return;
  }
  ;
  let nRow = ds_lo200.insertRow();
  gr_lo200.setFocusedCell(nRow, 0);
  ds_lo200.setCellData(nRow, "clntNo", ed_clntNo.getValue());
  ds_lo200.setCellData(nRow, "lvl", 4);
  ds_lo200.setCellData(nRow, "useYn", 1);
  if (ds_lo200.getRowCount() > 0) {
    ds_lo200.setCellData(nRow, "upperCommCd", ds_lo201.getCellData(ds_lo201.getRowPosition(), "commCd"));
    ds_lo200.setCellData(nRow, "upperCommNm", ds_lo201.getCellData(ds_lo201.getRowPosition(), "commNm"));
    ds_lo200.setCellData(nRow, "kcgCd", ds_lo200.getCellData(ds_lo200.getRowPosition() - 1, "kcgCd"));
    ds_lo200.setCellData(nRow, "kcgNm", ds_lo200.getCellData(ds_lo200.getRowPosition() - 1, "kcgNm"));
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};
scwin.f_openGridPopup = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    // 1: 품목코드(gr_lo201)
    // 2: 품목코드(gr_lo200)
    // 3: 화종코드(gr_lo200)

    case 1:
      // 품목코드
      scwin._isCallbackSetting = true;
      udc_comCode_upper.setSelectId("retrieveCommInfo");
      await udc_comCode_upper.cfCommonPopUp(function (rtnList) {
        scwin._isCallbackSetting = false;
        scwin.udc_comCode_upper_callBackFunc2(rtnList, ds_lo201.getRowPosition());
      }, pCode.trim(), pName, pClose, '5', "품목군코드,품목군명", '150,170', null, "1,2", '440', '500', null, null, null, pAllSearch, "품목군,품목군코드,품목군");
      break;
    case 2:
      // 품목코드(gr_lo200 >> 거래처품명)
      let clntNo = ed_clntNo.getValue().trim();
      var rowIdx = ds_lo200.getRowPosition();
      udc_comCode_upper.setSelectId('retrieveCommInfo');
      udc_comCode_upper.cfCommonPopUp(function (rtnList) {
        scwin.udc_comCode_upper_callBackFunc3(rtnList, rowIdx);
      }, pCode.trim(), pName, pClose, '5', "품목코드,품목명", '150,170', null, "2,3,,," + clntNo, '440', '500', null, null, null, pAllSearch, "품목,품목코드,품목명");
      break;
    case 3:
      // 화종 (gr_lo200 >> 화종(숨김컬럼))
      var rowIdx = ds_lo200.getRowPosition();
      udc_comCode_kcg.setSelectId('retrieveKcgInfo');
      udc_comCode_kcg.cfCommonPopUp(function (rtnList) {
        scwin.udc_comCode_kcg_callBackFunc2(rtnList, rowIdx);
      }, pCode.trim(), pName, pClose, '5', null, '150,170', null, null, '440', '500', null, null, null, pAllSearch, null);
      break;
  }
};

//grid pop (품목군)
scwin.pop_grid = async function () {
  if (scwin._isCallbackSetting) return;
  // 품목코드
  let rowPos = ds_lo201.getRowPosition();
  if (ds_lo201.getCellData(rowPos, "upperCommNm").trim() === "") {
    ds_lo201.setCellData(rowPos, "upperCommCd", "");
  }
  await scwin.f_openGridPopup(1, "", ds_lo201.getCellData(rowPos, "upperCommNm"), "F", "F");
  scwin._isCallbackSetting = false;
};

//grid pop (품목군) callback
scwin.udc_comCode_upper_callBackFunc2 = function (rtnList, rowIndex) {
  if (!rtnList || rtnList[0] === "N/A") {
    // 취소 → 코드/명 모두 초기화
    ds_lo201.setCellData(rowIndex, "upperCommCd", "");
    ds_lo201.setCellData(rowIndex, "upperCommNm", "");
  } else {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo201, rowIndex, "upperCommCd", "upperCommNm");
  }
};

//grid2 pop (화종) >> Image Botton 클릭 이벤트 
scwin.pop_grid2 = function (rowIndex, colId, nowValue) {
  switch (colId) {
    case "upperCommNm":
      // 품목코드
      scwin.f_openGridPopup(2, "", nowValue, "F", "F");
      break;
    case "kcgNm":
      // 화종
      scwin.f_openGridPopup(3, "", nowValue, "F", "F");
      break;
  }
};

//grid pop (품목군) callback >> 화종
scwin.udc_comCode_kcg_callBackFunc2 = function (rtnList, rowIndex) {
  //그리드에 set(전역변수)  
  if (!rtnList == null || rtnList[0] === "N/A") {
    ds_lo200.setCellData(rowIndex, "kcgCd", "");
    ds_lo200.setCellData(rowIndex, "kcgNm", "");
  } else {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo200, rowIndex, "kcgCd", "kcgNm");
  }
};

// grid2 pop callback >> 품목코드
scwin.udc_comCode_upper_callBackFunc3 = function (rtnList, rowIndex) {
  if (!rtnList || rtnList[0] === "N/A") {
    // 취소 → 코드/명 모두 초기화
    ds_lo200.setCellData(rowIndex, "upperCommCd", "");
    ds_lo200.setCellData(rowIndex, "upperCommNm", "");
    return;
  } else {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo200, rowIndex, "upperCommCd", "upperCommNm");
  }
};

//-------------------------------------------------------------------------
// AS-IS function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  scwin.pos_rowSts = ds_lo201.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
    if (confirm) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//필수check vilidate
scwin.f_ReqFieldChk = async function () {
  let valInfo_lo201 = [{
    id: 'commNm',
    name: '품목',
    mandatory: true
  }, {
    id: 'pyPerTonCnt',
    name: '평당톤수',
    minNumber: 0
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_lo201, null, null, valInfo_lo201, '거래처품목'))) return;
  let valInfo_lo200 = [{
    id: 'commNm',
    name: '품명',
    mandatory: true
  }, {
    id: 'clntCommCd',
    name: '거래처품명코드',
    mandatory: true
  }, {
    id: 'upperCommNm',
    name: '품목',
    mandatory: true
  }, {
    id: 'kcgNm',
    name: '화종',
    mandatory: true
  }, {
    id: 'pyPerTonCnt',
    name: '평당톤수',
    minNumber: 0
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_lo200, null, null, valInfo_lo200, '거래처품명'))) return;
  return true;
};

//save callback
scwin.sbm_save_submitdone = async function (e) {
  var result = e.responseJSON?.resultDataSet?.[0];
  if (!result) return;
  if (result.Msg === "SUCC") await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopup = function (disGubun, pCode, pName, pClose, pAllSearch, pWhere) {
  // 1: 거래처 팝업, 2: 사업장 팝업
  switch (disGubun) {
    case 1:
      // 거래처 팝업
      udc_comCode_clnt.setSelectId("retrieveClntInfo2"); // XML상의 SELECT ID	
      udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc, pCode.trim() // 화면에서의 ??? Code Element의	Value
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
      , "계약 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 사업장 팝업
      udc_comCode_biz.setSelectId('retrieveEdiMapping'); // XML상의 SELECT ID
      udc_comCode_biz.cfCommonPopUp(scwin.udc_comCode_biz_callBackFunc, pCode.trim() // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "사업장,사업장코드,사업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, pWhere, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  let pWhereVal = disGubun === 2 ? pWhere : "T";

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopup(disGubun, pVal, '', 'T', 'T', pWhereVal);
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopup(disGubun, '', pVal, 'T', 'T', pWhereVal);
};

/* 거래처 품목, 거래처 품명 엑셀 다운로드 */
scwin.cfGridToExcel1 = function () {
  // gr_lo201, '거래처품목', '거래처품목.xls', 2+4+8+16
  let sheetTitle = "거래처품목";
  const infoArr = [];
  const options = {
    fileName: sheetTitle,
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_lo201, options, infoArr, 30);
};
scwin.cfGridToExcel2 = function () {
  // gr_lo200, '거래처품명', '거래처품명.xls', 2+4+8+16
  let sheetTitle = "거래처품명";
  const infoArr = [];
  const options = {
    fileName: sheetTitle,
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_lo200, options, infoArr, 30);
};
scwin.gr_lo201_onviewchange = async function (info) {
  if (info.oldValue === info.newValue) return;
  if (scwin._isCallbackSetting) return;
  switch (info.colId) {
    case "upperCommNm":
      // 품목코드
      await scwin.f_openGridPopup(1, "", info.newValue, "T", "T");
      scwin._isCallbackSetting = false;
      break;
    default:
      break;
  }
};
scwin.gr_lo200_onviewchange = function (info) {
  if (info.oldValue === info.newValue) return;
  switch (info.colId) {
    case "upperCommNm":
      // 품목코드
      if (ds_lo200.getCellData(ds_lo200.getRowPosition(), "upperCommNm") == "") {
        ds_lo200.setCellData(ds_lo200.getRowPosition(), "upperCommCd", ""); //품목코드
        return;
      }
      ds_lo200.setCellData(ds_lo200.getRowPosition(), "upperCommCd", ""); //품목코드
      scwin.f_openGridPopup(2, "", info.newValue, "T", "T");
      break;
    case "kcgNm":
    case "kcgCd":
      let kcgCd = ds_lo200.getCellData(gr_lo200.getFocusedRowIndex(), "kcgCd");
      let kcgNm = ds_lo200.getCellData(gr_lo200.getFocusedRowIndex(), "kcgNm");
      scwin.f_openGridPopup(3, kcgCd, kcgNm, "T", "T");
      break;
    default:
      break;
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_comCode_clnt',UpperFlagCode:'1',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'6',selectID:'retrieveClntInfo2','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bizLongCd',nameId:'ed_bizLongNm',id:'udc_comCode_biz',maxlengthCode:'6',selectID:'retrieveEdiMapping','ev:onclickEvent':'scwin.udc_comCode_biz_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_biz_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_biz_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'거래처품목',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_lo201',gridDownFn:'scwin.cfGridToExcel1',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_lo201',style:'',autoFit:'allColumn',id:'gr_lo201',visibleRowNum:'14',class:'wq_gvw',autoFitMinWidth:'700',focusMode:'cell',focusMove:'true','ev:oncellclick':'scwin.gr_lo201_oncellclick',rowStatusVisible:'true',columnMove:'true','ev:onviewchange':'scwin.gr_lo201_onviewchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'품목코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'품목',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'품목군',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'영문명',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'평당<br/>톤수',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column9',value:'컨테이너',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'사용<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'SIZE',displayMode:'label',class:'txt-blue',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column20',value:'F/E',displayMode:'label',class:'txt-blue',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'upperCommNm',displayMode:'label',textAlign:'left',viewType:'default',imageClickFunction:'scwin.pop_grid'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commEngNm',displayMode:'label',textAlign:'left',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pyPerTonCnt',displayMode:'label',textAlign:'right',defaultValue:'0',excelCellType:'number',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrSizCd',displayMode:'label',allOption:'',chooseOption:'',chooseOptionLabel:'',ref:'',emptyItem:'true',emptyValue:' '},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'fullEmptyClsCd',displayMode:'label',allOption:'',chooseOption:'',chooseOptionLabel:'',ref:'',emptyItem:'true',emptyValue:' '},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'useYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_lo201',rowAddFunction:'scwin.addRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처품명',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_lo200',gridDownFn:'scwin.cfGridToExcel2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_lo200',id:'gr_lo200',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'1000',rowStatusVisible:'true',focusMode:'cell',focusMove:'true',columnMove:'true','ev:onviewchange':'scwin.gr_lo200_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'회사<br/>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품명',width:'140',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'영문명',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'거래처품명코드',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'품목',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'화종코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'화종',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'평균중량',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'BOX당수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'평당<br/>톤수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'사용여부',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCd',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'140',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commEngNm',inputType:'text',width:'120',textAlign:'left',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',width:'150',mandatory:'true',textAlign:'left',allowChar:'a-zA-Z0-9',maxLength:'25'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCommNm',inputType:'textImage',width:'120',textAlign:'left',viewType:'default',mandatory:'true',imageClickFunction:'scwin.pop_grid2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'textImage',width:'120',textAlign:'left',viewType:'default',imageClickFunction:'scwin.pop_grid2',mandatory:'true',maxLength:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplRealCnvrsnQty',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',defaultValue:'0',excelCellType:'number',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'tplPackCnvrsnQty',displayMode:'label',textAlign:'right',defaultValue:'0',excelCellType:'number',dataType:'number',maxLength:'15',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pyPerTonCnt',displayMode:'label',textAlign:'right',dataType:'number',defaultValue:'0',excelCellType:'number',displayFormat:'#,##0',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'useYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_lo200',rowAddFunction:'scwin.addRow2',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_long',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_long_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'품목 미지정 품명'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommInfo',codeId:'pcode',validTitle:'',nameId:'pname',style:'width:%; height:px;display: none',id:'udc_comCode_upper'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveKcgInfo',codeId:'pcode',validTitle:'',nameId:'pname',style:'width:%; height:px;display: none',id:'udc_comCode_kcg'}}]}]}]}]}]})