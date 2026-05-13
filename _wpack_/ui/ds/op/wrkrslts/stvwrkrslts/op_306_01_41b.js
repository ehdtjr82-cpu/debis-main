/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_41b.xml 38172 8141e142b26eb7893b31c3a960a2965d4c4d3bc1e3a4d6cb8cd85c5d8ab970db */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_search',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'stDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'endDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'wrkPlCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volRslts',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_volRslts_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'작업지시번호',id:'stvWrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업일자',id:'wrkDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업장코드',id:'wrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업시작일자',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'시작시간',id:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업종료일자',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'종료시간',id:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'Shift',id:'shiftClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'실적',id:'completeProcYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'HOLD',id:'holdNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'수출입구분',id:'impExpClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'품목코드',id:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'품목/품명',id:'commNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'화주코드',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'화주',id:'clntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'계획수량',id:'planQty'}},{T:1,N:'w2:column',A:{dataType:'text',name:'계획중량',id:'planWt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'계획CBM',id:'planCbm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'실적수량',id:'wrkQty'}},{T:1,N:'w2:column',A:{dataType:'text',name:'실적중량',id:'wrkWt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'실적CBM',id:'wrkCbm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업단계1',id:'wrkStpCd1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업단계2',id:'wrkStpCd2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업단계3',id:'wrkStpCd3'}},{T:1,N:'w2:column',A:{dataType:'text',name:'작업단계4',id:'wrkStpCd4'}},{T:1,N:'w2:column',A:{dataType:'text',name:'물량지시',id:'rsltsIndictNo'}},{T:1,N:'w2:column',A:{dataType:'number',name:'물량순번',id:'volSeq'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_search',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveWorkPlaceVolRsltsListCMD.do',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_volRslts","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_volRslts","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_volRslts","key":"IN_DS1"}',action:'/ds.op.wrkrslts.stvwrkrslts.SaveWorkPlaceVolRsltsCMD.do','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.wrkPlCd = "";
scwin.stDt = "";
scwin.endDt = "";
scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm");
scwin.vCurDate = $c.date.getServerDateTime($p);
scwin.vQryStDt = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "F");
scwin.vQryEndDt = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "L");
scwin.onpageload = function () {
  scwin.wrkPlCd = $c.data.getParameter($p, "wrkPlCd") == null ? "" : $c.data.getParameter($p, "wrkPlCd");
  scwin.stDt = $c.data.getParameter($p, "stDt") == null ? "" : $c.data.getParameter($p, "stDt");
  scwin.endDt = $c.data.getParameter($p, "endDt") == null ? "" : $c.data.getParameter($p, "endDt");
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_volRslts:shiftClsCd",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "OP308",
    compID: "gr_volRslts:wrkStpCd1",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "OP308",
    compID: "gr_volRslts:wrkStpCd2",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "OP308",
    compID: "gr_volRslts:wrkStpCd3",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "OP308",
    compID: "gr_volRslts:wrkStpCd4",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  scwin.f_HeaderCreate(); // 조건문 Header Create

  if (scwin.wrkPlCd != "") {
    ed_wrkPlCd.setValue(scwin.wrkPlCd); // 본선관리번호	
    ed_stDt.setValue(scwin.stDt); // 입항예정일자 from		
    ed_endDt.setValue(scwin.endDt); // 입항예정일자 to

    scwin.f_Retrieve();
  } else {
    ed_stDt.setValue(scwin.vQryStDt); // 입항예정일자 from
    ed_endDt.setValue(scwin.vQryEndDt); // 입항예정일자 to
  }
};
scwin.ondataload = async function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = function () {
  ds_search.insertRow(); // Search 할 row Add
  ds_search.setRowPosition(0);
};

// 조회 버튼 클릭
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  let ret = await $c.gus.cfValidate($p, [ed_stDt, ed_endDt, ed_wrkPlCd]);
  if (!ret) {
    return;
  }
  let e = await $c.sbm.execute($p, sbm_search);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_search_submitdone(e);
  }
};

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 작업장
      var wrkPlGbCd = "1"; // CY,장치장창고
      var lodeptCd = scwin.lobranCd;
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo");
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
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
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 그리드 팝업
scwin.f_openCommPopUpGrid = function (disGubun, gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      if (gubun == 1) {
        // 품명 코드팝업			
        pCode = "";
        pName = ds_volRslts.getCellData(row, "commNm"); // 품명
      } else if (gubun == 2) {
        pCode = ds_volRslts.getCellData(row, "commCd");
        pName = ""; // 품명
      }
      udc_gridComCode1.setSelectId("retrieveCommInfo");
      udc_gridComCode1.cfCommonPopUp(scwin.udc_grid_commCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목/품명코드,품목/품명,구분' // Title순서	
      , '105,190,70' // 보여주는 각 컬럼들의 폭	
      , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , ",,,A4" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , "품목/품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      if (gubun == 1) {
        // 화주 코드팝업			
        pCode = "";
        pName = ds_volRslts.getCellData(row, "clntNm"); // 품명
      } else if (gubun == 2) {
        pCode = ds_volRslts.getCellData(row, "clntNo");
        pName = ""; // 품명
      }
      udc_gridComCode1.setSelectId("retrieveCoopList");
      udc_gridComCode1.cfCommonPopUp(scwin.udc_grid_clntNo_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는  개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는  컬럼 지정 
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의  폭
      , null // POP-UP뛰을때 우도우의 사용자 정의  높이  
      , null // 윈도우 위치 Y좌표 
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2  ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

// 저장 버튼 클릭
scwin.f_mainSave = async function () {
  if (ds_volRslts.getModifiedIndex().length != 0) {
    const updateLength = ds_volRslts.getModifiedJSON().filter(e => e.rowStatus !== "D").length;
    if (updateLength > 0) {
      if (!(await $c.gus.cfValidate($p, [gr_volRslts]))) return;
      const i = ds_volRslts.getRowPosition();
      var wrkDt = ds_volRslts.getCellData(i, "wrkDt");
      var stHh = ds_volRslts.getCellData(i, "wrkStHh");
      var endHh = ds_volRslts.getCellData(i, "wrkEndHh");
      var shift = ds_volRslts.getCellData(i, "shiftClsCd");
      if (stHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_volRslts.setFocusedCell(i, "wrkStHh", true);
        return false;
      }
      if (endHh.length != 4) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_volRslts.setFocusedCell(i, "wrkEndHh", true);
        return false;
      }
      if (stHh.substr(0, 2) > "23") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]); // "@은(는) 시가 잘못되었습니다."
        gr_volRslts.setFocusedCell(i, "wrkStHh", true);
        return;
      }
      if (stHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(i, "wrkStHh", true);
        gr_volRslts.focus();
        return;
      }
      if (endHh.substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]); // "@은(는) 시가 잘못되었습니다."
        gr_volRslts.setFocusedCell(i, "wrkEndHh", true);
        return;
      }
      if (endHh.substr(0, 2) == "00" && endHh.substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(i, "wrkEndHh", true);
        return;
      }
      if (endHh.substr(0, 2) == "24" && endHh.substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(i, "wrkEndHh", true);
        return;
      }
      if (endHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(i, "wrkEndHh", true);
        return;
      }
      if (shift == "M") {
        if (stHh > endHh && endHh > '0700') {
          await $c.gus.cfAlertMsg($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
          gr_volRslts.setFocusedCell(i, "wrkEndHh", true);
          return;
        }
      } else {
        if (!(await $c.gus.cfIsAfterDate($p, stHh, endHh))) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_058); // 시작시간이 종료시간 이전이어야 합니다.
          gr_volRslts.setFocusedCell(i, "wrkStHh", true);
          return;
        }
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      let e = await $c.sbm.execute($p, sbm_save);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        scwin.sbm_save_submitdone(e);
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업장물량실적등록"]); // @은(는) 변경된 사항이 없습니다
  }
};

// 행추가
scwin.f_AddRow = function () {
  var nRow = ds_volRslts.insertRow();
  ds_volRslts.setCellData(nRow, "wrkPlCd", ed_wrkPlCd.getValue());
  ds_volRslts.setCellData(nRow, "planQty", "0");
  ds_volRslts.setCellData(nRow, "planWt", "0");
  ds_volRslts.setCellData(nRow, "planCbm", "0");
  ds_volRslts.setCellData(nRow, "wrkQty", "0");
  ds_volRslts.setCellData(nRow, "wrkWt", "0");
  ds_volRslts.setCellData(nRow, "wrkCbm", "0");
};

// 행삭제
scwin.f_deleteRow = function () {
  if (ds_volRslts.getRowStatus(ds_volRslts.getRowPosition()) == "C") {
    ds_volRslts.removeRow(ds_volRslts.getRowPosition());
  } else {
    ds_volRslts.deleteRow(ds_volRslts.getRowPosition());
  }
};

// 행취소
scwin.f_cancelRow = function () {
  if (ds_volRslts.getRowStatus(ds_volRslts.getRowPosition()) == "C") {
    ds_volRslts.removeRow(ds_volRslts.getRowPosition());
  } else {
    ds_volRslts.undoRow(ds_volRslts.getRowPosition());
  }
};

// 초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 협력업체 찾기 버튼 클릭 이벤트 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 저장 버튼 클릭 이벤트 
scwin.btn_save_onclick = function (e) {
  scwin.f_mainSave();
};

// 작업장 버튼 클릭 이벤트 
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};

// 초기화 버튼 클릭 이벤트 
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 작업장 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1);
};

// 작업장 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  totalRows.setValue(ds_volRslts.getRowCount());
};
scwin.sbm_save_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // "성공적으로 저장하였습니다." 
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};
0;
scwin.udc_grid_commCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_volRslts, ds_volRslts.getRowPosition(), "commCd", "commNm");
};
scwin.udc_grid_clntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_volRslts, ds_volRslts.getRowPosition(), "clntNo", "clntNm");
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_volRslts_CustomFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "completeProcYn") {
    if (data == "1") {
      val = "Y";
    } else {
      val = "N";
    }
  }
  // else if (columnId == "odrCompleteYn") {
  //     if (data == "1") {
  //         val = "Y";
  //     } else {
  //         val = "N";
  //     }
  // } else if (columnId == "wrkStDt"){
  //     var wrkStDt = data;
  //     var wrkStHh = ds_results.getCellData(rowIndex, 'wrkStHh');
  //     val = wrkStDt.substring(2, 4) + "-" + wrkStDt.substring(4, 6) + "-" + wrkStDt.substring(6, 8) + " " + wrkStHh.substring(0, 2) + ":" + wrkStHh.substring(2, 4);
  // } else if (columnId == "wrkEndDt") {
  //     var wrkEndDt = data;
  //     var wrkEndHh = ds_results.getCellData(rowIndex, 'wrkStHh');
  //     val = wrkEndDt.substring(2, 4) + "-" + wrkEndDt.substring(4, 6) + "-" + wrkEndDt.substring(6, 8) + " " + wrkEndHh.substring(0, 2) + ":" + wrkEndHh.substring(2, 4);
  // } else if (columnId == "sizeAndType") {
  //     val = ds_results.getCellData(rowIndex, 'cntrSizCd') + ds_results.getCellData(rowIndex, 'cntrTypCd');
  // } else if (columnId == "spotYn") {
  //     var eqCd = ds_results.getCellData(rowIndex, 'eqCd');
  //     var vehclNo = ds_results.getCellData(rowIndex, 'vehclNo');
  //     if (eqCd == "") {
  //         if (vehclNo == "") {
  //             val = "N";
  //         } else {
  //             val = "Y";
  //         }
  //     } else {
  //         val = "N";
  //     }
  // } else if (columnId == "crryoutEdiFlag") {
  //     var type = ds_results.getCellData(rowIndex, "crryoutEdiType");
  //     var flagMap = {"":"미등록", "3":"미전송", "1":"전송완료", "0":"전송대기", "5":"필수항목오류"};
  //     var typeMap = {"CO":"(COPINO)", "CD":"(COPI_CODECO)"};

  //     val = (flagMap[data] || "") + (typeMap[type] || "");
  // } else if (columnId == "crryinEdiFlag") {
  //     var type = ds_results.getCellData(rowIndex, "crryinEdiType");
  //     var flagMap = {"":"미등록", "3":"미전송", "1":"전송완료", "0":"전송대기", "5":"필수항목오류"};
  //     var typeMap = {"CO":"(COPINO)", "CD":"(COPI_CODECO)"};

  //     val = (flagMap[data] || "") + (typeMap[type] || "");
  // }

  return val;
};
scwin.gr_volRslts_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_volRslts.getColumnID(columnIndex);
  switch (colid) {
    case "commNm":
      scwin.f_openCommPopUpGrid(1, 1, rowIndex, 'F');
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(1, 2, rowIndex, 'F');
      break;
    case "clntNo":
      // 화주 조회 팝업
      scwin.f_openCommPopUpGrid(2, 1, rowIndex, 'F');
      break;
    case "clntNm":
      // 화주 조회 팝업
      scwin.f_openCommPopUpGrid(2, 2, rowIndex, 'F');
      break;
  }
};
scwin.gr_volRslts_onviewchange = function (info) {
  var colId = info.colId;
  var rowIndex = info.rowIndex;
  var olddata = info.oldValue;

  // 차량종류변경시 규격 필터링
  if (gr_volRslts.getColumnID(colId) == "shiftClsCd") {
    if (ds_volRslts.getCellData(rowIndex, "shiftClsCd") == "D") {
      ds_volRslts.setCellData(rowIndex, "wrkStHh", "0800");
      ds_volRslts.setCellData(rowIndex, "wrkEndHh", "1700");
    } else if (ds_volRslts.getCellData(rowIndex, "shiftClsCd") == "N") {
      ds_volRslts.setCellData(rowIndex, "wrkStHh", "1900");
      ds_volRslts.setCellData(rowIndex, "wrkEndHh", "2200");
    } else if (ds_volRslts.getCellData(rowIndex, "shiftClsCd") == "M") {
      ds_volRslts.setCellData(rowIndex, "wrkStHh", "2200");
      ds_volRslts.setCellData(rowIndex, "wrkEndHh", "0700");
    }
  }
  if (gr_volRslts.getColumnID(colId) == "commNm") {
    if (ds_volRslts.getCellData(rowIndex, colId) != "" && ds_volRslts.getCellData(rowIndex, colId) != olddata) {
      ds_volRslts.setCellData(rowIndex, "commCd", "");
      scwin.f_openCommPopUpGrid(1, 1, rowIndex, 'T');
    } else if (ds_volRslts.getCellData(rowIndex, colId) == "") {
      ds_volRslts.setCellData(rowIndex, "commCd", "");
      ds_volRslts.setCellData(rowIndex, "commNm", "");
    }
  }
  if (gr_volRslts.getColumnID(colId) == "clntNm") {
    if (ds_volRslts.getCellData(rowIndex, colId) != "" && ds_volRslts.getCellData(rowIndex, colId) != olddata) {
      ds_volRslts.setCellData(rowIndex, "clntNo", "");
      scwin.f_openCommPopUpGrid(2, 1, rowIndex, 'T');
    } else if (ds_volRslts.getCellData(rowIndex, colId) == "") {
      ds_volRslts.setCellData(rowIndex, "clntNo", "");
      ds_volRslts.setCellData(rowIndex, "clntNm", "");
    }
  }
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, info.newValue)) $p.getFrame().scope.ed_wrkPlCd.setValue("");
};
scwin.ds_volRslts_oncelldatachange = function (info) {
  if (info.colID === "wrkQty" || info.colID === "wrkWt" || info.colID === "wrkCbm") {
    if ($c.util.isEmpty($p, info.newValue)) {
      ds_volRslts.setCellData(info.rowIndex, info.colID, "0");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업계획일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_calendar',refDataMap:'ds_search',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPlCd',btnId:'btn_wrkPlCd',UpperFlagCode:'1',allowCharCode:'A-Z0-9',maxlengthCode:'5',refDataCollection:'ds_search',code:'wrkPlCd',validTitle:'작업장',objTypeCode:'data',mandatoryName:'true',mandatoryCode:'true',name:'wrkPlNm','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_wrkPlCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물량실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',templateYn:'N',btnPlusYn:'Y',btnUser:'Y',gridID:'gr_volRslts',grdDownOpts:'{"fileName":"물량실적.xlsx","sheetName":"물량실적", "type" : "4+8+16"}',grdUpOpts:'',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_volRslts',id:'gr_volRslts',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_volRslts_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'30','ev:onviewchange':'scwin.gr_volRslts_onviewchange',editModeEvent:'onclick',keyMoveEditMode:'true',moveKeyEditMode:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'실적',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업지시번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업일자',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Shift',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'시작',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'종료',width:'70',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'HOLD',width:'70',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'품목/<br/>품명코드',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'품목/품명',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'화주코드',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'화주',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column61',value:'작업계획물량',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column52',value:'실적물량',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'물량지시',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'물량순번',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'작업<br/>단계1',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'작업<br/>단계2',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'작업<br/>단계3',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'작업<br/>단계4',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column81',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column80',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column79',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column78',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column77',value:'중량(톤)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column76',value:'CBM',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'completeProcYn',inputType:'text',width:'60',readOnly:'true',customFormatter:'gr_volRslts_CustomFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'calendar',width:'100',mandatory:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select',width:'70',mandatory:'true',readOnly:'false',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',width:'70',displayFormat:'##:##',mandatory:'true',allowChar:'0-9',readOnly:'false',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',width:'70',displayFormat:'##:##',mandatory:'true',allowChar:'0-9',readOnly:'false',maxByteLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',width:'70',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'textImage',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'planQty',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'planWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,###.000',excelCellType:'bigDecimal',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'planCbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,###.000',excelCellType:'bigDecimal',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkWt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'10.3',excelCellType:'bigDecimal',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkCbm',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'10.3',excelCellType:'bigDecimal',excelFormat:'#,##0.000',imageWidth:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsIndictNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'volSeq',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'wrkStpCd1',displayMode:'label',mandatory:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'wrkStpCd2',displayMode:'label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'wrkStpCd3',displayMode:'label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkStpCd4',value:'',displayMode:'label',emptyItem:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',expression:'sum(\'planQty\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'sum(\'planWt\')',dataType:'float',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',expression:'sum(\'planCbm\')',dataType:'float',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'wrkQty\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'sum(\'wrkWt\')',dataType:'float',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'wrkCbm\')',dataType:'float',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddObj:'btn__no1',btnRowDelObj:'btn__no2',btnCancelObj:'btn__no3',rowAddUserAuth:'C',rowDelUserAuth:'U',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_volRslts',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_gridComCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})