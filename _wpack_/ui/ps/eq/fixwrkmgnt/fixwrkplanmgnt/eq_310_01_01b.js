/*amd /ui/ps/eq/fixwrkmgnt/fixwrkplanmgnt/eq_310_01_01b.xml 41882 21dd0760c71efa2737e7a7167ea5e82aaaf29232bdc3fb8a09b70fda875a78ff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_310','ev:onrowpositionchange':'scwin.ds_310_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'planDcsnYn',name:'계획확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixPlanNo',name:'정비계획번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'장비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanDt',name:'작업계획일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfOutordClsCd',name:'정비구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkStndNo',name:'작업표준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStndNm',name:'작업표준명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartCd',name:'수리순환품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'수리순환품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'유효기간만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modReqDt',name:'수정요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modReqUserId',name:'수정요청자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'년식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'배정물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startDate',name:'계획시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'정기검사만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mntnInspExpireDt',name:'정밀검사만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintChkExpireDt',name:'정기점검만료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlanDt1',name:'작업계획시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlanDt2',name:'작업계획마지막일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixPlanNo',name:'정비계획번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planDcsnYn',name:'계획확정여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_combo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_combo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fixwrkmgnt.fixwrkplanmgnt.RetrieveFixWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_310","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_310","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveFixPlan',action:'/ps.eq.fixwrkmgnt.fixwrkplanmgnt.SaveFixWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_310","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveFixPlan_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.cvNNew = false; // 신규
scwin.cvDcsnYn = false; // 확정
scwin.cvPopup = false;
scwin.eqHomeClsCd = scwin.memJson.eqHomeClsCd;
scwin.onpageload = function () {
  scwin.fixPlanNo = $c.data.getParameter($p, "fixPlanNo") == null ? "" : $c.data.getParameter($p, "fixPlanNo"); //정비계획번호
  scwin.homeClsCd = $c.data.getParameter($p, "homeClsCd") == null ? "" : $c.data.getParameter($p, "homeClsCd"); //사업부문코드
  scwin.outbrRsnCd = $c.data.getParameter($p, "outbrRsnCd") == null ? "" : $c.data.getParameter($p, "outbrRsnCd"); //정비작업장
  scwin.standDate1 = $c.data.getParameter($p, "standDate1") == null ? "" : $c.data.getParameter($p, "standDate1"); //정비작업장
  scwin.standDate2 = $c.data.getParameter($p, "standDate2") == null ? "" : $c.data.getParameter($p, "standDate2"); //정비작업장

  dma_search.set("fixWrkPlCd", " ");
  dma_search.set("wrkPlanDt1", " ");
  dma_search.set("wrkPlanDt2", " ");
  dma_search.set("fixPlanNo", " ");
  dma_search.set("planDcsnYn", " ");
  const codeOptions = [{
    grpCd: "EQ010",
    compID: "gr_310:fixKndCd"
  },
  //정비종류
  {
    grpCd: "EQ012",
    compID: "gr_310:selfOutordClsCd"
  } //정비구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_RetrieveFirst();
  $c.gus.cfDisableObjects($p, [b310Add, b310Del, b310Undo]);
  if (scwin.fixPlanNo.length > 0) {
    lc_homeClsCd.setValue(scwin.homeClsCd);
    scwin.eqHomeClsCd = scwin.homeClsCd;
    scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
    lc_fixWrkPlCd.setSelectedIndex(scwin.outbrRsnCd);
    em_fixPlanNo.setValue(scwin.fixPlanNo);
    ed_standDate1.setValue(scwin.standDate1);
    ed_standDate2.setValue(scwin.standDate2);
  } else {
    ed_standDate1.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
    ed_standDate2.setValue($c.date.addDate($p, $c.date.getServerDateTime($p, "yyyyMMdd"), 7));
  }
};
scwin.ondataload = function () {
  scwin.lc_homeClsCd_onviewchange();
  for (let i = 0; i < dlt_commonCodeEQ010.getRowCount(); i++) {
    dlt_commonCodeEQ010.setCellData(i, "cdNm", "[" + dlt_commonCodeEQ010.getCellData(i, "cd") + "] " + dlt_commonCodeEQ010.getCellData(i, "cdNm"));
  }
};

//-------------------------------------------------------------------------
// 첫번째 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveFirst = async function () {
  sbm_combo1.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveHomeClsList" + "&strVal=" + "&intVal=";
  let e = await $c.sbm.execute($p, sbm_combo1);
  scwin.sbm_combo1_submitdone(e);
};

//-------------------------------------------------------------------------
// 두번째 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = async function (param1) {
  sbm_combo.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveFixWrkList" + "&strVal=" + param1 + "&intVal=";
  let e = await $c.sbm.execute($p, sbm_combo);
  scwin.sbm_combo_submitdone(e);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_standDate1]);
  if (!ret) return;
  ret = await $c.gus.cfValidate($p, [ed_standDate2]);
  if (!ret) return;

  // 조회조건 체크
  if (!$c.gus.cfIsAfterDate($p, ed_standDate1.getValue(), ed_standDate2.getValue(), false)) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_061, '계획시작일[' + ed_standDate1.getValue() + '] ', '계획종료일[' + ed_standDate2.getValue() + '] 보다 이전 '));
    ed_standDate1.focus();
    return;
  }
  scwin.f_condition();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회_조건
//-------------------------------------------------------------------------
scwin.f_condition = function () {
  dma_search.set("fixWrkPlCd", lc_fixWrkPlCd.getValue());
  dma_search.set("wrkPlanDt1", ed_standDate1.getValue());
  dma_search.set("wrkPlanDt2", ed_standDate2.getValue());
  dma_search.set("fixPlanNo", em_fixPlanNo.getValue());
  dma_search.set("planDcsnYn", acb_planDcsnYn.getValue());
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_310.getModifiedIndex().length === 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, '정비계획 '));
    return;
  }

  // 수리순환품 체크
  let fixKndCd = '';
  let circulPartCd = '';
  for (let i = 0; i < ds_310.getRowCount(); i++) {
    let status = ds_310.getRowStatus(i);
    if (status == "C" || status == "U") {
      fixKndCd = ds_310.getCellData(i, "fixKndCd");
      if (fixKndCd == '04') {
        circulPartCd = ds_310.getCellData(i, "circulPartCd").trim();
        if (circulPartCd.length == 0) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, '수리순환품코드 '));
          gr_310.setFocusedCell(i, "circulPartCd");
          return;
        }
      }
    }
  }
  let ret = await $c.gus.cfValidate($p, [gr_310]);
  if (ret) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_saveFixPlan);
    }
  }
};

//-------------------------------------------------------------------------
// addRow_310
//------------------------------------------------------------------------
scwin.f_Addrow310 = function () {
  scwin.cvNNew = true;
  let newRow = ds_310.insertRow();
  ds_310.setCellData(newRow, "fixWrkPlCd", lc_fixWrkPlCd.getValue());
  gr_310.setFocusedCell(newRow, "vehclNo");
};

//-------------------------------------------------------------------------
// del_208 (310)
//------------------------------------------------------------------------
scwin.f_Del310 = async function () {
  if (ds_310.getRowCount() > 0) {
    let rowIndex = ds_310.getRowPosition();
    let temp = ds_310.getCellData(rowIndex, "planDcsnYn");
    if (temp == "1") {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_041, '확정일때', '삭제'));
    } else {
      let rowStatus = ds_310.getRowStatus(rowIndex);
      if (rowStatus == "C") {
        ds_310.removeRow(rowIndex);
        gr_310.setFocusedCell(-1, "planDcsnYn");
      } else {
        ds_310.deleteRow(rowIndex);
        gr_310.setFocusedCell(rowIndex, "planDcsnYn");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [lc_homeClsCd, lc_fixWrkPlCd, em_fixPlanNo, acb_planDcsnYn]);
  ed_standDate1.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_standDate2.setValue($c.date.addDate($p, $c.date.getServerDateTime($p, "yyyyMMdd"), 7));
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// Popup 처리
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (row, pClose) {
  let pCode = ds_310.getCellData(row, "vehclNo").trim();
  let pName = "";
  let temp = lc_homeClsCd.getValue();
  scwin.tempGridRow = row;
  await udc_vehclListInfo.cfCommonPopUp(scwin.udc_vehclListInfo_callBackFunc, pCode, pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , 7 // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , temp // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "장비조회,장비번호,장비코드" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  return false;
};
scwin.udc_vehclListInfo_callBackFunc = function (rtnList) {
  // 장비번호, 장비코드, 년식, 배정물류점소, 정기검사만료일자, 정밀검사만료일자, 정기점검만료일자
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_310, scwin.tempGridRow, "vehclNo", "eqCd", ["prdyr", "lobranNm", "rglintInspExpireDt", "mntnInspExpireDt", "rglintChkExpireDt"]);
    } else {
      ds_310.setCellData(scwin.tempGridRow, "vehclNo", "");
    }
  } else {
    if (ds_310.getRowStatus(scwin.tempGridRow) == "C") {
      ds_310.setCellData(scwin.tempGridRow, "expireDt", "");
    }
    ds_310.setCellData(scwin.tempGridRow, "vehclNo", "");
  }
  return false;
};

//-------------------------------------------------------------------------
// Popup 처리
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid1 = async function (row, pClose) {
  let pCode = ds_310.getCellData(row, "circulPartCd").trim();
  let pName = "";
  scwin.tempGridRow1 = row;
  await udc_partYnInfo.cfCommonPopUp(scwin.udc_partYnInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
  , null // 전체검색허용여부	("F")
  , "수리순환품조회,부품코드,부품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  return false;
};
scwin.udc_partYnInfo_callBackFunc = function (rtnList) {
  let row = scwin.tempGridRow1;
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_310, row, "circulPartCd", "partNm");
    } else {
      ds_310.setCellData(row, "circulPartCd", "");
      ds_310.setCellData(row, "partNm", "");
    }
  } else {
    ds_310.setCellData(row, "circulPartCd", "");
    ds_310.setCellData(row, "partNm", "");
  }
};

//-------------------------------------------------------------------------
// Popup 처리
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid2 = async function (row, pClose) {
  let pCode = ds_310.getCellData(row, "fixWrkStndNo").trim();
  let pName = "";
  let temp = lc_homeClsCd.getValue();
  scwin.tempGridRow2 = row;
  await udc_fixWrkSdListInfo.cfCommonPopUp(scwin.udc_fixWrkSdListInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , temp // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , "작업표준조회,작업표준코드,작업표준명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  return false;
};
scwin.udc_fixWrkSdListInfo_callBackFunc = function (rtnList) {
  // 장비번호, 장비코드, 년식, 배정물류점소, 정기검사만료일자, 정밀검사만료일자, 정기점검만료일자
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_310, scwin.tempGridRow2, "fixWrkStndNo", "wrkStndNm");
    } else {
      ds_310.setCellData(scwin.tempGridRow2, "fixWrkStndNo", "");
      ds_310.setCellData(scwin.tempGridRow2, "wrkStndNm", "");
    }
  } else {
    ds_310.setCellData(scwin.tempGridRow2, "fixWrkStndNo", "");
    ds_310.setCellData(scwin.tempGridRow2, "wrkStndNm", "");
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    if (ds_310.getRowCount() == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_002)); //조회된 데이터가 없습니다
    }
    gr_310.setFocusedCell(0, "planDcsnYn");
    totalRow.setValue(ds_310.getRowCount());
    $c.gus.cfEnableObjects($p, [b310Add, b310Del, b310Undo]);
  }
};
scwin.sbm_saveFixPlan_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_001)); // 성공적으로 저장하였습니다
    ds_310.reform();
    scwin.f_Retrieve();
  }
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let lcIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveSecond(lcIndex);
};
scwin.gr_310_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = gr_310.getColumnID(columnIndex);
  if (scwin.cvPopup == true) {
    scwin.cvPopup = false;
    return;
  }
  if (colid == "vehclNo") {
    await scwin.f_openCommPopUpGrid(rowIndex, 'F');
  }
  if (colid == "circulPartCd") {
    await scwin.f_openCommPopUpGrid1(rowIndex, 'F');
  }
  if (colid == "fixWrkStndNo") {
    await scwin.f_openCommPopUpGrid2(rowIndex, 'F');
  }
};
scwin.ds_310_onrowpositionchange = function (info) {
  $c.gus.cfPrepareHidVal($p, ds_310, info.newRowIndex, ["vehclNo", "eqCd", "prdyr", "lobranNm", "rglintInspExpireDt", "mntnInspExpireDt", "rglintChkExpireDt", "circulPartCd", "partNm", "fixWrkStndNo", "wrkStndNm"]);
};
scwin.gr_310_onviewchange = async function (info) {
  // asis OnCloseUp(row,colid)
  let colid = info.colId;
  let row = info.rowIndex;
  let newdata = info.newValue;
  let olddata = info.oldValue;
  let fixKndCd1 = ds_310.getOriginalCellData(row, colid);
  let fixKndCd2 = ds_310.getCellData(row, colid);
  let temp = "04";
  if (scwin.cvNNew == false) {
    if (fixKndCd1 != fixKndCd2) {
      if (fixKndCd2 == '13') {
        ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintChkExpireDt"));
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      } else if (fixKndCd2 == '14') {
        ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintInspExpireDt"));
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      } else if (fixKndCd2 == '15') {
        ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "mntnInspExpireDt"));
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      } else {
        ds_310.setCellData(row, "expireDt", "");
      }
    }
  } else {
    if (fixKndCd2 == '13') {
      ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintChkExpireDt"));
      ds_310.setCellData(row, "circulPartCd", "");
      ds_310.setCellData(row, "partNm", "");
    } else if (fixKndCd2 == '14') {
      ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "rglintInspExpireDt"));
      ds_310.setCellData(row, "circulPartCd", "");
      ds_310.setCellData(row, "partNm", "");
    } else if (fixKndCd2 == '15') {
      ds_310.setCellData(row, "expireDt", ds_310.getCellData(row, "mntnInspExpireDt"));
      ds_310.setCellData(row, "circulPartCd", "");
      ds_310.setCellData(row, "partNm", "");
    } else {
      ds_310.setCellData(row, "expireDt", "");
    }
  }
  if (colid == "fixKndCd") {
    let fixKndCd = ds_310.getCellData(row, colid);
    let orgFixKndCd = ds_310.getCellData(row, colid);
    if (orgFixKndCd != fixKndCd) {
      if (orgFixKndCd == '04') {
        ds_310.setCellData(row, "circulPartCd", "");
        ds_310.setCellData(row, "partNm", "");
      }
    }
  }

  // asis CanColumnPosChange(row,colid)
  if (colid == "wrkPlanDt") {
    let endDate = $c.date.addDate($p, $c.date.getServerDateTime($p, "yyyyMMdd"), 1);
    let wrkPlanDt = newdata;
    let orgWrkPlanDt = ds_310.getOriginalCellData(row, colid);
    if (ds_310.getRowStatus(row) == "C") {
      orgWrkPlanDt = "";
    }
    if (wrkPlanDt != orgWrkPlanDt) {
      wrkPlanDt = wrkPlanDt.trim();
      if (wrkPlanDt.length != 8) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_005, '작업계획일자', '8'));
        ds_310.setCellData(row, colid, olddata);
        return false;
      }
      let startDate = $c.date.getServerDateTime($p, "yyyyMMdd");
      if (Number($c.date.getDay($p, startDate, "num")) - 2 == -1) {
        startDate = $c.date.addDate($p, startDate, 1);
      } else if (Number($c.date.getDay($p, startDate, "num")) - 2 == 0) {
        startDate = $c.date.addDate($p, startDate, 7);
      } else {
        startDate = $c.date.addDate($p, startDate, 7 - (Number($c.date.getDay($p, startDate, "num")) - 2));
      }
      if (!$c.gus.cfIsAfterDate($p, startDate, wrkPlanDt, false)) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_061, '작업계획일자[' + wrkPlanDt + '] ', '계획시작가능일자[' + startDate + '] 보다 이후 '));
        if (ds_310.getRowStatus(row) == "U") {
          $c.data.undoRow($p, ds_310);
          return false;
        } else if (ds_310.getRowStatus(row) == "C") {
          ds_310.setCellData(row, "wrkPlanDt", "");
          return false;
        }
        return false;
      }
      if (!$c.gus.cfIsAfterDate($p, wrkPlanDt, endDate, false)) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_061, '계획일자[' + wrkPlanDt + '] ', '계획종료가능일자[' + endDate + '] 보다 이전 '));
        if (ds_310.getRowStatus(row) == "U") {
          $c.data.undoRow($p, ds_310);
        } else if (ds_310.getRowStatus(row) == "C") {
          ds_310.setCellData(row, "wrkPlanDt", "");
        }
        gr_310.setFocusedCell(row, "wrkPlanDt");
        return false;
      }
    }
  }
};
scwin.gr_310_oncellclick = async function (rowIndex, columnIndex, columnId) {
  let planDcsnYn = ds_310.getCellData(rowIndex, "planDcsnYn");
  let fixKndCd = ds_310.getCellData(rowIndex, "fixKndCd");
  let temp = "04";
  if (ds_310.getRowStatus(rowIndex) != "C") {
    gr_310.setColumnReadOnly("vehclNo", true);
  } else {
    gr_310.setColumnReadOnly("vehclNo", false);
  }
  if (planDcsnYn == "1") {
    scwin.cvDcsnYn = true;
    gr_310.setColumnReadOnly("fixKndCd", true);
    gr_310.setColumnReadOnly("selfOutordClsCd", true);
    gr_310.setColumnReadOnly("wrkPlanDt", true);
    gr_310.setColumnReadOnly("circulPartCd", true);
    gr_310.setColumnReadOnly("fixWrkStndNo", true);
  } else {
    scwin.cvDcsnYn = false;
    if (fixKndCd == temp) {
      gr_310.setColumnReadOnly("circulPartCd", false);
    } else {
      gr_310.setColumnReadOnly("circulPartCd", true);
    }
    gr_310.setColumnReadOnly("fixKndCd", false);
    gr_310.setColumnReadOnly("selfOutordClsCd", false);
    gr_310.setColumnReadOnly("wrkPlanDt", false);
    gr_310.setColumnReadOnly("fixWrkStndNo", false);
  }
};
scwin.gr_310_focusOut = async function (row, colid, columnIndex, value) {
  if (colid == "vehclNo") {
    if (value != "" && value != scwin.oldData) {
      await scwin.f_openCommPopUpGrid(row, 'T');
    } else if (value == "") {
      ds_310.setCellData(row, "vehclNo", "");
    }
  }
  if (colid == "circulPartCd") {
    if (value != "" && value != scwin.oldData) {
      await scwin.f_openCommPopUpGrid1(row, 'T');
    } else if (value == "") {
      ds_310.setCellData(row, "circulPartCd", "");
      ds_310.setCellData(row, "partNm", "");
    }
  }
  if (colid == "fixWrkStndNo") {
    if (value != "" && value != scwin.oldData) {
      await scwin.f_openCommPopUpGrid2(row, 'T');
    } else if (value == "") {
      ds_310.setCellData(row, "fixWrkStndNo", "");
      ds_310.setCellData(row, "wrkStndNm", "");
    }
  }
};
scwin.gr_310_onafteredit = async function (rowIndex, columnIndex, value, info) {
  let colId = gr_310.getColumnID(columnIndex);
  scwin.gr_310_focusOut(rowIndex, colId, columnIndex, value);
};
scwin.gr_310_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};
scwin.gr_310_oneditkeydown = function (info) {
  let colid = gr_310.getColumnID(info.colIndex);
  if (colid == "vehclNo" || colid == "circulPartCd" || colid == "fixWrkStndNo") {
    scwin.cvPopup = true;
  }
};
scwin.sbm_combo_submitdone = function (e) {
  lc_fixWrkPlCd.setValue(scwin.memJson.fixWrkPlCd);
  if (lc_fixWrkPlCd.getSelectedIndex() == -1) {
    lc_fixWrkPlCd.setSelectedIndex(0);
  }
  if (scwin.homeClsCd != "") {
    lc_fixWrkPlCd.setValue(scwin.outbrRsnCd);
    if (scwin.homeClsCd == "TR") {
      scwin.f_Retrieve();
    } else if (scwin.homeClsCd == "LO") {
      scwin.f_Retrieve();
    }
  }
};
scwin.sbm_combo1_submitdone = function (e) {
  if (scwin.eqHomeClsCd == "TR") {
    lc_homeClsCd.setSelectedIndex(1);
  } else {
    lc_homeClsCd.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_runExcel = async function () {
  await $c.data.downloadGridViewExcel($p, gr_310, {
    fileName: "작업계획목록" + ".xlsx",
    sheetName: "작업계획목록"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계획일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar3',refEdDt:'',edFromId:'ed_standDate1',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_standDate2',titleFrom:'계획일',titleTo:'계획일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'',sortOption:'value',sortMethod:'ascending',visibleRowNum:'16'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계획번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_fixPlanNo',style:'width: 150px;',maxlength:'9',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_planDcsnYn',search:'start',style:'width:150px',submenuSize:'fixed',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업계획 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_310',btnPlusYn:'Y',btnUser:'Y',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_310',focusMode:'row',id:'gr_310',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',gridName:'정비계획','ev:ontextimageclick':'scwin.gr_310_ontextimageclick','ev:onviewchange':'scwin.gr_310_onviewchange','ev:oncellclick':'scwin.gr_310_oncellclick','ev:onbeforeedit':'scwin.gr_310_onbeforeedit','ev:oneditkeydown':'scwin.gr_310_oneditkeydown',fixedColumn:'4',columnMove:'false','ev:onafteredit':'scwin.gr_310_onafteredit',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계획확정</br>여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'정비계획번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'장비번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'작업계획일자',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'정비종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'정비구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'작업표준코드',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'작업표준명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'수리순환품코드',width:'130'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'수리순환품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'유효기간만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column48',value:'수정요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column46',value:'수정요청자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column44',value:'정비작업번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'년식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column42',value:'배정물류점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column66',value:'계획시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column64',value:'정비작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column60',value:'정기검사만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'정밀검사만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column54',value:'정기점검만료일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'planDcsnYn',inputType:'checkbox',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixPlanNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',style:'',value:'',width:'100',mandatory:'true',maxLength:'9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanDt',inputType:'calendar',style:'',value:'',width:'130',mandatory:'true',maxLength:'8',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixKndCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',maxLength:'2',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfOutordClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'textImage',style:'',value:'',width:'130',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartCd',inputType:'textImage',style:'',value:'',width:'130',maxLength:'6'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'partNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'expireDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modReqDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modReqUserId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fixWrkNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prdyr',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'startDate',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'fixWrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label',mandatory:'true',maxLength:'6',allowChar:'0-9',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rglintInspExpireDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mntnInspExpireDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rglintChkExpireDt',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddObj:'b310Add',btnRowDelObj:'b310Del',btnCancelObj:'b310Undo',rowAddFunction:'scwin.f_Addrow310',rowDelFunction:'scwin.f_Del310',gridID:'gr_310'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVehclListInfo',codeId:'',progressBarSwitch:'Y',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'width: %;height: px;display:none;',id:'udc_vehclListInfo'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_partYnInfo',nameId:'',popupID:'',progressBarSwitch:'Y',selectID:'retrievePartYnInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',style:'width: %;height: px;display:none;',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_fixWrkSdListInfo',nameId:'',popupID:'',progressBarSwitch:'Y',selectID:'retrieveFixWrkSdListInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',style:'width: %;height: px;display:none;',validTitle:''}}]}]}]}]}]})