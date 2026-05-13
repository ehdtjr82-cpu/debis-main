/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_08_01b.xml 34823 23ef0bb52c8a35d3fb8d808873ff9db6956df9fbcdbc51e9dad44ac6e9983504 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'setoffCls',name:'setoffCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'qryStDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEdDt',name:'qryEdDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellpchItem',name:'sellpchItem',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'vehclNoCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'eqCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'choice',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntCd',name:'sellClntCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'sellClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'slipDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItem',name:'selpchItem',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'selpchItemCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'selpchItemNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'setoffSlipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClsNo',name:'setoffClsNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'spplyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'acctRecvNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_process',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntCd',name:'sellClntCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'sellClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'slipDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItem',name:'selpchItem',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'setoffSlipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'selpchItemCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'selpchItemNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClsNo',name:'setoffClsNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'acctRecvNo',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.paymgnt.RetrieveTargetSetoffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.paymgnt.ProcessTargetSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fm.paymgnt.paymgnt.DeleteSetoffSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.memJson = $c.data.getMemInfo($p);
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
//TOBE scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  ed_slipDt.setValue(scwin.g_sCurrDate);
  lc_qrySetoffCls.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, orgObjCd, orgObjNm, sFlag, pAllSearch) {
  var code = "";
  var name = "";
  if (orgObjCd != "") {
    code = orgObjCd.getValue();
  }
  if (orgObjNm != "") {
    name = orgObjNm.getValue();
  }
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      udc_acctDeptCdInfo.setSelectId('retrieveAcctDeptCdInfo');
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null); // 거래처
      break;
    // 거래처 PopUp 호출
    case '2':
      udc_clntList.setSelectId('retrieveClntList');
      await udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 거래처
      break;
    case '3':
      udc_selpchItemInfo.setSelectId('retrieveSelpchItemInfo');
      await udc_selpchItemInfo.cfCommonPopUp(scwin.udc_selpchItemInfo_callBackFunc, code // 화면에서의 ??? Code Element의	Value
      , name // 화면에서의 ??? Name Element의	Value
      , sFlag // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '항목코드,항목명' // Title순서	
      , '150,210' // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ',,,,,' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '매출입항목코드조회,항목코드,항목명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case '4':
      udc_subsidaryVehclList.setSelectId('retrieveSubsidaryVehclList');
      await udc_subsidaryVehclList.cfCommonPopUp(scwin.udc_subsidaryVehclList_callBackFunc, code // 화면에서의 ??? Code Element의  Value
      , name // 화면에서의 ??? Name Element의  Value
      , sFlag // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , "400" // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_acctDeptCd, ed_acctDeptNm, rtnList, "1");
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_clntNo, ed_clntNm, rtnList, "2");
};
scwin.udc_selpchItemInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_selpchItemCd, ed_selpchItemNm, rtnList, "3");
};
scwin.udc_subsidaryVehclList_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_vehclNoCd, ed_cond_vehclNo, rtnList, "4");
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList, select_code) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
    if (select_code == "4") {
      //txt_eqCd hiiden 처리
      dma_condition.set("eqCd", rtnList[7]);
    }
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
    if (select_code == "4") {
      //txt_eqCd hiiden 처리
      dma_condition.set("eqCd", "");
    }
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T", "F");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjNm.setValue("");
      orgObjCd.hidVal = "";
      if (select_code == "4") {
        dma_condition.set("eqCd", "");
      }
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수 조회조건 입력 여부 Check
  let ret = await $c.gus.cfValidate($p, [ed_reqStartDt, ed_reqEndDt, ed_vehclNoCd]); //자회사 회계시스템 추가사항(부서검색 날짜 필수입력)
  if (!ret) {
    return false;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ed_reqStartDt.getValue(), ed_reqEndDt.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_reqStartDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, "2");
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'T', 'F');
};
scwin.udc_selpchItemInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_selpchItemCd, ed_selpchItemNm, "3");
};
scwin.udc_selpchItemInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_selpchItemCd, ed_selpchItemNm, 'T', 'F');
};
scwin.udc_subsidaryVehclList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_vehclNoCd, ed_cond_vehclNo, "4");
};
scwin.udc_subsidaryVehclList_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_vehclNoCd, ed_cond_vehclNo, 'T', 'F');
};

//-------------------------------------------------------------------------
// 일괄상계처리 전표 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }
  let result = await $c.win.confirm($p, "상계처리내역을 삭제 하시겠습니까?");
  if (!result) {
    return;
  }

  // if(!confirm("상계처리내역을 삭제 하시겠습니까?"))
  //     return false;

  let j = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "choice") == "T") {
      //상계전표번호가 없는건은 삭제 할 수 없다.
      if (ds_master.getCellData(i, "setoffSlipNo") == "") {
        await $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 삭제 할 수 없습니다..\n\n미발생 상계전표 삭제 불가!");
        return;
      }
      scwin.f_SetDataSet(i, j);
      j++;
    }
  }

  // tr_delete.post();
  $c.sbm.execute($p, sbm_delete);
};

//-------------------------------------------------------------------------
// 상계처리 저장
//-------------------------------------------------------------------------
scwin.f_Setoff = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return;
  }
  let result = await $c.win.confirm($p, "상계처리 하시겠습니까?");
  if (!result) {
    return;
  }
  let j = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "choice") == "T") {
      //이미 상계처리된 건은 상계처리 못한다.
      if (ds_master.getCellData(i, "setoffSlipNo") != "") {
        await $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 이미 상계처리 되었습니다.\n\n중복상계처리 불가!");
        return false;
      }

      //전표날짜 세팅이 안된건은 처리 못한다.
      if (ds_master.getCellData(i, "slipDt") == "" || $c.gus.cfIsNull($p, ds_master.getCellData(i, "slipDt"))) {
        await $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 작성일자가 없습니다.");
        return false;
      }
      scwin.f_SetDataSet(i, j);
      j++;
    }
  }
  if (j < 0) {
    await $c.win.alert($p, "선택된건이 없습니다.");
    return false;
  }

  // tr_save.post();
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// Save or Del DataSet Setting
//-------------------------------------------------------------------------
scwin.f_SetDataSet = function (row, col) {
  ds_process.insertRow(row);
  ds_process.setCellData(col, "slipNo", ds_master.getCellData(row, "slipNo"));
  ds_process.setCellData(col, "clntNo", ds_master.getCellData(row, "clntNo"));
  ds_process.setCellData(col, "clntNm", ds_master.getCellData(row, "clntNm"));
  ds_process.setCellData(col, "vehclNo", ds_master.getCellData(row, "vehclNo"));
  ds_process.setCellData(col, "sellClntCd", ds_master.getCellData(row, "sellClntCd"));
  ds_process.setCellData(col, "sellClntNm", ds_master.getCellData(row, "sellClntNm"));
  ds_process.setCellData(col, "amt", ds_master.getCellData(row, "amt"));
  ds_process.setCellData(col, "crn", ds_master.getCellData(row, "crn"));
  ds_process.setCellData(col, "slipDt", ds_master.getCellData(row, "slipDt"));
  ds_process.setCellData(col, "selpchItem", ds_master.getCellData(row, "selpchItem"));
  ds_process.setCellData(col, "summary", ds_master.getCellData(row, "summary"));
  ds_process.setCellData(col, "setoffSlipNo", ds_master.getCellData(row, "setoffSlipNo"));
  ds_process.setCellData(col, "selpchItemCd", ds_master.getCellData(row, "selpchItemCd"));
  ds_process.setCellData(col, "selpchItemNm", ds_master.getCellData(row, "selpchItemNm"));
  ds_process.setCellData(col, "setoffClsNo", ds_master.getCellData(row, "setoffClsNo"));
  ds_process.setCellData(col, "acctRecvNo", ds_master.getCellData(row, "acctRecvNo"));
};

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.dataSetDebug = function (dataSet, isDebug) {
  if (isDebug == true) {
    var obj = dataSet;
    var str = "[[[[" + obj.id + "]]]]]\n";
    for (var dsRow = 1; dsRow <= obj.CountRow; dsRow++) {
      for (var dsCol = 1; dsCol <= obj.CountColumn; dsCol++) {
        str += "[" + obj.ColumnId(dsCol) + "] " + obj.NameValue(dsRow, obj.ColumnId(dsCol)) + ", ";
      }
      str += "\n\n";
    }
    alert(str);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, "상계내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "상계처리.xlsx",
    sheetName: "상계처리"
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------------------------------------
// 전표일자 일괄적용
//------------------------------------------------------------------------- 
scwin.f_adaptSlipDt = async function () {
  let chkCnt = 0;
  let stPos = ds_master.getRowPosition();
  let slipDt = ed_slipDt.getValue();
  let i = 0;
  for (i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "choice") == "T") {
      ds_master.setCellData(i, "slipDt", slipDt);
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    await $c.win.alert($p, "선택된 행이 없습니다. 일괄적용할 행들을 선택해 주십시오.");
    return false;
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    totalRows.setLabel(rowCnt);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// 전표번호클릭시
scwin.gr_master_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (ds_master.getCellData(rowIndex, "setoffSlipNo") == "") {
    gr_master.setReadOnly("cell", rowIndex, "slipDt", false);
  } else {
    gr_master.setReadOnly("cell", rowIndex, "slipDt", true);
  }

  // 전표 POPUP
  let val = ds_master.getCellData(rowIndex, columnId);
  if (columnId == "slipNo") {
    if (!(val == null || val == "")) {
      await $c.gus.cfShowSlipInfo($p, val);
    }
  }
  if (columnId == "setoffSlipNo") {
    if (!(val == null || val == "")) {
      await $c.gus.cfShowSlipInfo($p, val);
    }
  }
  if (columnId == "choice") {
    for (let i = 0; i <= ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(rowIndex, "clntNo") == ds_master.getCellData(i, "clntNo") && ds_master.getCellData(i, "collMoneyAmt") > 0) {
        ds_master.setCellData(i, "choice", ds_master.getCellData(rowIndex, "choice"));
      }
    }
  }
};
scwin.udc_subsidaryVehclList_onviewchangeNameEvent = function (info) {
  if (ed_cond_vehclNo.getValue().trim() != "") {
    scwin.f_openPopUp('4', ed_vehclNoCd, ed_cond_vehclNo, 'F', 'F');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 상계구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_qrySetoffCls',search:'start',style:'width: 230px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_condition.setoffCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대급금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'외상매출금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'세금계산서일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',style:'',id:'udc_fromToCalendar1',refEdDt:'qryEdDt',refDataMap:'dma_condition',edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',objTypeCode:'data',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'6',objTypeName:'data',code:'clntNo',refDataCollection:'dma_condition',id:'udc_clntList','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntList_onclickEvent',codeWidth:'60'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',class:'col8',codeId:'ed_selpchItemCd',nameId:'ed_selpchItemNm',objTypeCode:'Data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data',refDataCollection:'dma_condition',code:'sellpchItem',id:'udc_selpchItemInfo','ev:onblurCodeEvent':'scwin.udc_selpchItemInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_selpchItemInfo_onclickEvent',maxlengthCode:'4',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_vehclNoCd',nameId:'ed_cond_vehclNo',validExpCode:'차량번호:yes',allowCharCode:'0-9',maxlengthCode:'4',refDataCollection:'dma_condition',code:'vehclNoCd',id:'udc_subsidaryVehclList','ev:onblurCodeEvent':'scwin.udc_subsidaryVehclList_onblurCodeEvent','ev:onclickEvent':'scwin.udc_subsidaryVehclList_onclickEvent',validTitle:'차량번호','ev:onviewchangeNameEvent':'scwin.udc_subsidaryVehclList_onviewchangeNameEvent',codeWidth:'60',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',gridDownFn:'scwin.f_GridToExcel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_master',scrollByColumn:'false',style:'',id:'gr_master',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_master_oncellclick',visibleRowNum:'14',fixedColumnNoMove:'true',fixedColumn:'2',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'checkbox',id:'column12',value:'',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'상계전표번호',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'column10',value:'소속거래처명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'차량번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column8',value:'거래처코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column7',value:'매니저명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column6',value:'금액',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column5',value:'사업자번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column4',value:'작성일자',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column3',value:'매출입항목',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column21',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'채권번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'choice',blockSelect:'false',displayMode:'label',fixColumnWidth:'true',readOnly:'false',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'setoffSlipNo',blockSelect:'false',displayMode:'label',textAlign:'center',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'vehclNo',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'sellClntCd',blockSelect:'false',displayMode:'label',textAlign:'center',readOnly:'false',maxLength:'6'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'sellClntNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'120',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label',textAlign:'left',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'calendar',id:'slipDt',blockSelect:'false',displayMode:'label',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'false'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'selpchItem',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'220',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',textAlign:'center',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'acctRecvNo',value:'',displayMode:'label',textAlign:'center',class:'underline'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',expression:'sum(\'amt\')',displayFormat:'###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성일자',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_slipDt',class:'form-control cal',calendarValueType:'yearMonthDate',mandatory:'true'}},{T:1,N:'w2:button',A:{style:'',id:'btn_adaptSlipDt',label:'일자일괄적용',class:'btn',userAuth:'U','ev:onclick':'scwin.f_adaptSlipDt'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Delete',label:'상계삭제',class:'btn white','ev:onclick':'scwin.f_Delete'}},{T:1,N:'w2:button',A:{style:'',id:'btn_Setoff',label:'일괄생성',class:'btn','ev:onclick':'scwin.f_Setoff'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}}]}]}]}]})