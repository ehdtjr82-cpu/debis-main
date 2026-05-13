/*amd /ui/cm/bc/eq/eqmgnt/zz_310_03_01b.xml 29881 9c4b504637195419f708c4d2882e046d0edb627cdc90c3698c649b20ec8b1694 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehiclesNumber',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_vehiclesNumber_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoHomeClsCd',name:'차량번호소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoStsCd',name:'차량번호상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqOfcCd',name:'장비영업소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoChgBfStsCd',name:'차량번호변경전상태코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nm',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'LO'}]},{T:1,N:'nm',E:[{T:4,cdata:'물류'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'TR'}]},{T:1,N:'nm',E:[{T:4,cdata:'고속'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nm',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'RV'}]},{T:1,N:'nm',E:[{T:4,cdata:'렌터카'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_else',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nm',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'RV'}]},{T:1,N:'nm',E:[{T:4,cdata:'렌터카'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'LO'}]},{T:1,N:'nm',E:[{T:4,cdata:'물류'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'TR'}]},{T:1,N:'nm',E:[{T:4,cdata:'고속'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchVehiclesNumber',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_vehiclesNumber","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchVehiclesNumber_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveVehiclesNumber',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_vehiclesNumber","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveVehiclesNumber_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
// scwin.vUserHomeClsCd    = "RC"
scwin.vSysAdminYn = scwin.login.sysAdminYn;
// scwin.vSysAdminYn = "0"
scwin.prevRow = 0;

//hidden
scwin.txt_homeCls = "0";
scwin.txt_qryCond = "0";
scwin.txt_countRow = "";
scwin.txt_saveType = "";
scwin.onpageload = function () {
  const codeOptions = [
  // { grpCd : "ZZ205", compID : "gr_vehiclesNumber:vehclNoHomeClsCd" },
  {
    grpCd: "ZZ209",
    compID: "gr_vehiclesNumber:vehclNoStsCd,acb_vehclNoStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  // const param= [
  //     {
  //         method: "getGridCombo",
  //         param1: "PsCommonEBC",
  //         param2: "retrieveRentOfficeList",
  //         param3: true,
  //         compID: "gr_vehiclesNumber:eqOfcCd",
  //         outputFields: ["code", "name"]
  //     }
  // ];
  // $c.data.setGauceUtil(param, scwin.callbackTest);

  //scwin.f_Retrieve();

  if (scwin.vUserHomeClsCd == "RC" && scwin.vSysAdminYn == "0") {
    acb_homeCls.setItemSet("data:ds_rc", "nm", "cd");
    scwin.txt_homeCls = acb_homeCls.getValue();
    gr_vehiclesNumber.show();
  } else if (scwin.vUserHomeClsCd == "EQ" && scwin.vSysAdminYn == "0") {
    acb_homeCls.setItemSet("data:ds_eq", "nm", "cd");
    gr_vehiclesNumber.hide();
  } else if (scwin.vSysAdminYn == "1") {
    acb_homeCls.setItemSet("data:ds_else", "nm", "cd");
    gr_vehiclesNumber.show();
  }
  scwin.setVehclNoStsCdDiv();
  // setVehiclesNumberHeader();
  ed_qryCntn.focus(); // 
  btn_save.setDisabled(true);
};

// scwin.callbackTest = function(){
//     gr_vehiclesNumber.setColumnNodeSet(3, "data:dlt_gauceUtill_gr_vehiclesNumber", "name", "code");
// }

scwin.ondataload = function (e) {
  let dltStr = "dlt_commonCodeZZ205"; // ZZ205 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeZZ205_1", true); // dlt_commonCodeZZ205_1 으로 dataList 을 복사
  // $c.gus.copy(dltStr, "dlt_commonCodeZZ205_2", true);

  let dlt2 = $c.gus.object($p, "dlt_commonCodeZZ205_1"); // 객체화
  // let dlt3 = $c.gus.object("dlt_commonCodeZZ205_2"); // 객체화

  let data1 = $c.data.dataListFilter($p, dlt2, "fltrCd1 == 'EQ'");
  dlt_commonCodeZZ205_1.removeAll();
  dlt_commonCodeZZ205_1.setJSON(data1);
  gr_vehiclesNumber.setColumnNodeSet(1, "data:dlt_commonCodeZZ205_1", cdNm, cd);

  // let data2 = $c.data.dataListFilter(dlt3, "fltrCd1 == 'RV'");
  // dlt_commonCodeZZ205_2.removeAll();
  // dlt_commonCodeZZ205_2.setJSON(data2)
};

//-------------------------------------------------------------------------
// 조회조건(현재상태) Div 설정(Visible/Invisible)
//-------------------------------------------------------------------------
scwin.setVehclNoStsCdDiv = function () {
  let gubun = "";
  gubun = acb_homeCls.getValue();
  if (gubun == "RV") {
    div_vehclNoStsCd.show();
  } else {
    div_vehclNoStsCd.hide();
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  /*Grid에 직급 Combo설정 
  Grid에 Combo설정시 주의 사항 
  Grid에 여려개의 Combo를 설정해야 할 경우 반드시 순차적으로 할것.
      예를 들어 ds_joblevel이 OnLoadCompleted 되었을 때, ds_skill을 reset하고 ...
  ds_skill이  OnLoadCompleted 된 후...즉, 이런식으고  모든 Combo가 설정되었을 경우에 
      전체 조회인 ds_emp.reset()을 해준다.
  */

  let condition = "?";
  let gubun = "";
  gubun = acb_homeCls.getValue();
  condition += "homeCls=" + acb_homeCls.getValue() + "&qryCond=" + scwin.txt_qryCond + "&qryCntn=" + ed_qryCntn.getValue();

  // 렌터카이면 현재상태 조회조건 추가
  if (gubun == "RV") {
    condition += "&vehclNoStsCd=" + acb_vehclNoStsCd.getValue();
  } else {
    condition += "&vehclNoStsCd=" + "";
  }
  sbm_searchVehiclesNumber.action = "/cm.bc.eq.eqmgnt.cmd.RetrieveVehiclesNumberListCMD.do" + condition;
  $c.sbm.execute($p, sbm_searchVehiclesNumber);

  // if(acb_homeCls.getValue() == "RV"){
  //     gr_vehiclesNumber.setReadOnly("column", "eqOfcCd", false);
  // }else{
  //     gr_vehiclesNumber.setReadOnly("column", "eqOfcCd", true);
  // }
};

//-------------------------------------------------------------------------
// 차량번호 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  scwin.txt_saveType = "0"; // 0:신규, 1:수정, 2:조회, 3: 삭제

  let idx = ds_vehiclesNumber.insertRow();
  gr_vehiclesNumber.setCellReadOnly(idx, 'vehclNo', false);
  gr_vehiclesNumber.setCellReadOnly(idx, 'vehclNoHomeClsCd', false);
  gr_vehiclesNumber.setCellReadOnly(idx, 'vehclShortCd', false);
  let vHomeCls = ds_vehiclesNumber.getCellData(ds_vehiclesNumber.getRowPosition(), "vehclNoHomeClsCd");
  if (scwin.vUserHomeClsCd != "RC" && scwin.vSysAdminYn == "0") {
    ds_vehiclesNumber.setCellData(idx, "vehclNoHomeClsCd", "LO");
    gr_vehiclesNumber.setCellReadOnly(idx, 'eqOfcCd', true);
  } else if (scwin.vUserHomeClsCd == "RC" && scwin.vSysAdminYn == "0") {
    ds_vehiclesNumber.setCellData(idx, "vehclNoHomeClsCd", "RV");
    gr_vehiclesNumber.setCellReadOnly(idx, 'eqOfcCd', false);
  } else if (scwin.vSysAdminYn == "1") {
    ds_vehiclesNumber.setCellData(idx, "vehclNoHomeClsCd", "LO");
  }
  ds_vehiclesNumber.setCellData(idx, "vehclNoStsCd", "01");
  gr_vehiclesNumber.setCellReadOnly(idx, 'vehclNoStsCd', true);
  btn_save.setDisabled(false);
  gr_vehiclesNumber.setFocusedCell(idx, 0);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = async function () {
  if (ds_vehiclesNumber.getCellData(ds_vehiclesNumber.getRowPosition(), "vehclNoStsCd") == "02") {
    await $c.win.alert($p, "현재상태가 사용중 인것은 삭제할수 없습니다.");
    return;
  }
  if (ds_vehiclesNumber.getRowStatus(ds_vehiclesNumber.getRowPosition()) == 'C') {
    ds_vehiclesNumber.removeRow(ds_vehiclesNumber.getRowPosition());
  }
  ds_vehiclesNumber.deleteRow(ds_vehiclesNumber.getRowPosition());
  scwin.txt_saveType = "3"; // 0:신규, 1:수정, 2:조회, 3: 삭제
  if (scwin.txt_countRow != "" && scwin.txt_countRow != "0") {
    btn_save.setDisabled(false);
  } else {
    btn_save.setDisabled(true);
  }
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  $c.data.undoRow($p, ds_vehiclesNumber, 'Y');
  btn_save.setDisabled(true);
};

//-------------------------------------------------------------------------
// 차량번호 수정
//-------------------------------------------------------------------------
// scwin.f_Update = function () {
//     scwin.txt_saveType = "1"; // 0:신규, 1:수정, 2:조회, 3: 삭제

//     gr_vehiclesNumber.Editable = true;
//     gr_vehiclesNumber.ColumnProp('vehclNo','Edit')="None";
// }

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let vSaveType = scwin.txt_saveType;

  // 차량번호 필수항목 체크
  if (!(await $c.gus.cfValidate($p, [gr_vehiclesNumber]))) {
    return;
  }

  //변경한 데이터가 있는지 체크한다. 	
  if (ds_vehiclesNumber.getModifiedIndex().length > 0 == false) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let returnValue = await scwin.f_CheckVehclShortCd();
  if (!returnValue) {
    return;
  }

  // 신규등록인 경우 차량번호 입력체크
  if (vSaveType == "0") {
    let vVehclNo = ds_vehiclesNumber.getCellData(ds_vehiclesNumber.getRowPosition(), "vehclNo");
    if (vVehclNo.trimAll() == "") {
      await $c.win.alert($p, "차량번호는 필수 입력사항입니다.");
      gr_vehiclesNumber.setFocusedCell(ds_vehiclesNumber.getRowPosition(), 0);
      return;
    }
  }
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    if (vSaveType == "3") {
      ds_vehiclesNumber.deleteRows();
    }
    prevRow = ds_vehiclesNumber.getRowPosition();
    sbm_saveVehiclesNumber.action = "/cm.bc.eq.eqmgnt.cmd.SaveVehiclesNumberCMD.do";
    sbm_saveVehiclesNumber.userData1 = "noError";
    $c.sbm.execute($p, sbm_saveVehiclesNumber);
  }
  // 	$c.gus.cfDisableBtn([$c.gus.getctrlBtn])<-([bAddRow, bUpdateRow, bDeleteRow]);
};
scwin.f_downExcelSheet = async function () {
  if (ds_vehiclesNumber.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '차량번호목록';
  let sheetTitle = '차량번호목록';
  if (await $c.win.confirm($p, "차량번호목록을 EXCEL로 다운로드 받으시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_vehiclesNumber, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

//-------------------------------------------------------------------------
// 장비등록화면으로 이동
//-------------------------------------------------------------------------
scwin.f_MoveEqRegist = function () {
  let vCurrentSelVehclNo = ds_vehiclesNumber.getCellData(ds_vehiclesNumber.getRowPosition(), "vehclNo");
  let vCurrentSelVehclNoHomeClsCd = ds_vehiclesNumber.getCellData(ds_vehiclesNumber.getRowPosition(), "vehclNoHomeClsCd");
  let vCurrentSelVehclShortCd = ds_vehiclesNumber.getCellData(ds_vehiclesNumber.getRowPosition(), "vehclShortCd");
  let vUrl = "/ui/cm/bc/eq/eqmgnt/zz_310_01_00b.xml";
  let vTitle = "장비관리";
  let menuId = "zz_310_01_00b.jsp";
  data = {};
  data.vehclNo = vCurrentSelVehclNo;
  data.vehclNoHomeClsCd = vCurrentSelVehclNoHomeClsCd;
  data.vehclShortCd = vCurrentSelVehclShortCd;
  vCurrentSelVehclNo = vCurrentSelVehclNo.replace(/-/g, "");
  $c.win.openMenu($p, vTitle, vUrl, menuId, data, {
    menuCode: vCurrentSelVehclNo,
    menuCode2: "new"
  });
};

//-------------------------------------------------------------------------
// 차량번호 등록시 단축코드 점검
//-------------------------------------------------------------------------
scwin.f_CheckVehclShortCd = async function () {
  let vCountRow = ds_vehiclesNumber.getRowCount();
  let vAlertArray = new Array();
  let vReturnValue = true;
  let vAlertArrayCnt = 0;
  for (let i = 0; i <= vCountRow; i++) {
    let vRowStatus = ds_vehiclesNumber.getRowStatus(i);
    if (vRowStatus == "C") {
      let vTmpVehclNo = ds_vehiclesNumber.getCellData(i, "vehclNo");
      let vTmpVehclShortCd = ds_vehiclesNumber.getCellData(i, "vehclShortCd");
      let vVehclNoFullSize = vTmpVehclNo.length;
      let vVehclShortCdFullSize = vTmpVehclShortCd.length;
      let vVehclNoEndNo = "";
      let vVehclShortCdEndNo = "";

      // 차량번호 끝 4자리
      if (vVehclNoFullSize > 0) {
        let vVehclStartSize = vVehclNoFullSize - 4;
        vVehclNoEndNo = vTmpVehclNo.substring(vVehclStartSize, vVehclNoFullSize);
      }

      // 차량단축코드 끝 4자리
      if (vVehclShortCdFullSize > 0) {
        let vVehclShortCdStartSize = vVehclShortCdFullSize - 4;
        vVehclShortCdEndNo = vTmpVehclShortCd.substring(vVehclShortCdStartSize, vVehclShortCdFullSize);
      }
      if (vVehclNoEndNo.trim() > 0 && vVehclShortCdEndNo.trim() > 0) {
        // 차량번호와 단축코드 뒷자리 4자리가 틀린경우
        if (vVehclNoEndNo != vVehclShortCdEndNo) {
          vAlertArray[vAlertArrayCnt] = vTmpVehclNo + " : [" + i + 1 + "]번째 라인 ";
          vAlertArrayCnt++;
        }
      }
    }
  }
  if (vAlertArray.length > 0) {
    let vAlertMessage = "";
    for (let j = 0; j < vAlertArray.length; j++) {
      vAlertMessage += "      - " + vAlertArray[j] + "\n";
    }
    await $c.win.alert($p, " * 아래의 차량번호와 차량단축번호 마지막 4자리가 일치하지 않습니다. \n" + vAlertMessage);
    vReturnValue = false;
  }
  return vReturnValue;
};
scwin.initTable = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.acb_homeCls_onviewchange();
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.gr_vehiclesNumber_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  let vVehclNoStsCd = ds_vehiclesNumber.getCellData(rowIndex, "vehclNoStsCd");
  let vRowStatus = ds_vehiclesNumber.getRowStatus(ds_vehiclesNumber.getRowPosition());
  if (vVehclNoStsCd.trim() == "02") {
    await $c.win.alert($p, "이미 사용중인 차량번호입니다.");
    return;
  } else {
    if (vRowStatus == "R" && ds_vehiclesNumber.getCellData(rowIndex, "vehclNoHomeClsCd") != "RV") {
      scwin.f_MoveEqRegist();
    }
  }
};
scwin.sbm_searchVehiclesNumber_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_vehiclesNumber.getRowCount();
  scwin.txt_countRow = rowCnt;
  if (rowCnt == 0) {
    bUndoRow.setDisabled(true);
    bDeleteRow.setDisabled(true);
    btn_save.setDisabled(true);
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    totalRows.setValue(rowCnt);
    bUndoRow.setDisabled(false);
    bDeleteRow.setDisabled(false);
    btn_save.setDisabled(false);
  }
};
scwin.sbm_saveVehiclesNumber_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    scwin.f_Retrieve();
    return;
  }
  ;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.acb_homeCls_onviewchange = function (info) {
  let vHomeCls = acb_homeCls.getValue();
  scwin.txt_homeCls = vHomeCls;
  scwin.setVehclNoStsCdDiv();

  // if(info.newValue == "RV"){
  //     div_vehclNoStsCd.show()
  // }else{
  //     div_vehclNoStsCd.hide()
  // }
};
scwin.acb_LupCond_onviewchange = function (info) {
  let vQryCond = acb_LupCond.getValue();
  scwin.txt_qryCond = vQryCond;
};
scwin.gr_vehiclesNumber_onviewchange = function (info) {
  if (info.colId == "vehclNoHomeClsCd") {
    if (info.newValue !== "RV") {
      ds_vehiclesNumber.setCellData(info.rowIndex, "eqOfcCd", "");
      gr_vehiclesNumber.setReadOnly("cell", info.rowIndex, "eqOfcCd", true);
    } else {
      gr_vehiclesNumber.setReadOnly("cell", info.rowIndex, "eqOfcCd", false);
    }
  }
};
scwin.ds_vehiclesNumber_onrowpositionchange = function (info) {
  let vVehclNoHomeClsCd = ds_vehiclesNumber.getCellData(info.newRowIndex, "vehclNoHomeClsCd");
  if (vVehclNoHomeClsCd == "RV") {
    gr_vehiclesNumber.setCellReadOnly(info.newRowIndex, "eqOfcCd", false);
    // gr_vehiclesNumber.ColumnProp("eqOfcCd","Edit") = "ANY";
  } else if (vVehclNoHomeClsCd != "RV") {
    gr_vehiclesNumber.setCellReadOnly(info.newRowIndex, "eqOfcCd", true);
    // gr_vehiclesNumber.ColumnProp("eqOfcCd","Edit") = "None";
  }
  ;
  let vCountRow = scwin.txt_countRow;
  let vCurrentRowPosition = info.newRowIndex;
  if (vCurrentRowPosition >= vCountRow || vCountRow == "" && vCurrentRowPosition >= 0) {
    gr_vehiclesNumber.setCellReadOnly(info.newRowIndex, "vehclNo", false);
    gr_vehiclesNumber.setCellReadOnly(info.newRowIndex, "vehclShortCd", false);
    // gr_vehiclesNumber.ColumnProp('vehclNo','Edit')="ANY";
    // gr_vehiclesNumber.ColumnProp('vehclShortCd','Edit')="ANY"; 
  } else {
    gr_vehiclesNumber.setCellReadOnly(info.newRowIndex, "vehclNo", true);
    gr_vehiclesNumber.setCellReadOnly(info.newRowIndex, "vehclShortCd", true);
    // gr_vehiclesNumber.ColumnProp('vehclNo','Edit')="none";
    // gr_vehiclesNumber.ColumnProp('vehclShortCd','Edit')="none";    
  }
  ;
};

// scwin.gr_vehiclesNumber_oncellclick = function (rowIndex, columnIndex, columnId) {
//     //dropdown event
// 	let vHomeCls = ds_vehiclesNumber.getCellData(rowIndex, "vehclNoHomeClsCd"); 

//     let info = {
//         inputType: "select",
//             options: {
//             selectedData: false,
//             viewType: "icon",
//             chooseOption: false,
//             type: "value delim label"
//         },
//         itemSet: {
//             nodeset: "data:dlt_commonCodeZZ205",
//             label: "cdNm",
//             value: "cd"
//         }
//     };

// 	if(columnId=="vehclNoHomeClsCd"){
//         // 차량번호소속
//         if(scwin.vUserHomeClsCd !="RC" && scwin.vSysAdminYn=="0"){
//             info.itemSet.nodeset = "data:dlt_commonCodeZZ205_1";
//             gr_vehiclesNumber.setCellInputType(rowIndex, "vehclNoHomeClsCd", info);
//             ds_vehiclesNumber.setCellData(rowIndex, "vehclNoHomeClsCd", "LO");
//             // gr_vehiclesNumber.ColumnProp('vehclNoHomeClsCd','Data') =  'GauceUtil.getGridCombo("ZZ205", 1, "EQ", true)'; 
//             // ds_vehiclesNumber.NameString(rowIndex,"vehclNoHomeClsCd") = "LO";
//         }else if(scwin.vUserHomeClsCd=="RC" && scwin.vSysAdminYn=="0"){
//             info.itemSet.nodeset = "data:dlt_commonCodeZZ205_2";
//             gr_vehiclesNumber.setCellInputType(rowIndex, "vehclNoHomeClsCd", info);
//             ds_vehiclesNumber.setCellData(rowIndex, "vehclNoHomeClsCd", "RV");
//             // gr_vehiclesNumber.ColumnProp('vehclNoHomeClsCd','Data') =  'GauceUtil.getGridCombo("ZZ205", 1, "RV", true)'; 
//             // ds_vehiclesNumber.NameString(1,"vehclNoHomeClsCd") = "RV";
//         }else if(scwin.vSysAdminYn=="1"){
//             info.itemSet.nodeset = "data:dlt_commonCodeZZ205";
//             gr_vehiclesNumber.setCellInputType(rowIndex, "vehclNoHomeClsCd", info);
//             ds_vehiclesNumber.setCellData(rowIndex, "vehclNoHomeClsCd", "LO");
//             // gr_vehiclesNumber.ColumnProp('vehclNoHomeClsCd','Data') =  'GauceUtil.getGridCombo("ZZ205", true)'; 
//             // ds_vehiclesNumber.NameString(rowIndex,"vehclNoHomeClsCd") = "LO";
//         }
//     }
// };
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70.00px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',id:'div_vehclNoStsCd'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현재상태 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_vehclNoStsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색조건 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_homeCls',search:'start',style:'width: 150px',submenuSize:'fixed',ref:'',allOption:'',chooseOption:'','ev:onviewchange':'scwin.acb_homeCls_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_LupCond',search:'start',style:'width: 150px',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.acb_LupCond_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량단축코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_qryCntn',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.initTable'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량번호목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot',id:'',label:'물류부분의 운송차량은 엔콜>기본정보><span class="txt-blue">직영차량등록</span>에서 해주세요.',style:'',escape:'false'}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_vehiclesNumber',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vehiclesNumber',focusMode:'cell',id:'gr_vehiclesNumber',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'15','ev:oncelldblclick':'scwin.gr_vehiclesNumber_oncelldblclick','ev:onviewchange':'scwin.gr_vehiclesNumber_onviewchange',setCellInputTypeCustom:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'차량번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'차량번호소속',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'차량단축코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'렌터카등록영업소',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'현재상태',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'vehclNoHomeClsCd',inputType:'select',style:'',value:'',width:'130',readOnly:'false',editModeEvent:'onclick',editModeEventIcon:'onclick',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',style:'',value:'',width:'130',mandatory:'true',maxByteLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqOfcCd',inputType:'text',style:'',value:'',width:'200',emptyItem:'true',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'vehclNoStsCd',inputType:'select',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_delMarked',cancelFunction:'scwin.f_Undo',rowDelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',cancelObjType:'ctrlBtn',btnCancelObj:'bUndoRow',btnRowDelObj:'bDeleteRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})