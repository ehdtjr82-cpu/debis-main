/*amd /ui/ds/lo/comntrfmgnt/lo_200_01_04b.xml 41603 433f5df8f50c2c708aa84b61d1a0f6eafd002d2296fef3a43e0f5ced81776de4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_adptDt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lo411_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo411',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_lo411_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'할증항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anucScTrfSeq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dangerCondCd',name:'위험물조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anucTrfRt',name:'적용율(%)',dataType:'number',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{id:'hidSelpchItemNm',name:'히든매출입항목코드',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveAnnouncementSurchargeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_lo411_con","key":"IN_DS1"},{"id":"ds_lo411","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lo411","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveAnnouncementSurchargeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_lo411","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//-------------------------------------------------------------------------  
scwin.pos_rowSts = 0;
scwin.MSG_LO_ERR_001 = "날짜 타입이 유효하지 않습니다.";
scwin.MSG_LO_ERR_002 = "최소 구간 조건이 %1행의 최소,최대구간 조건에 포함되어있습니다. 재입력 바랍니다.";
scwin.MSG_LO_ERR_003 = "최대 구간 조건이 %1행의 최소,최대구간 조건에 포함되어있습니다. 재입력 바랍니다.";
scwin.MSG_LO_ERR_004 = "현재 행의 구간 조건이 %1행의 최소,최대구간 조건을 포함하고있습니다. 재입력 바랍니다.";
scwin.MSG_LO_ERR_005 = "입력 필드의 적용일자를 입력 바랍니다.";
scwin.MSG_LO_ERR_006 = "해당일자에 고시할증요율이 존재합니다. 조회 후 처리 하시기 바랍니다.";
scwin.MSG_LO_ERR_007 = "같은 위험조건이 %1행에 존재합니다.";
scwin.MSG_LO_ERR_008 = "%1행의 중량할증은 반드시 최소,최대구간을 입력하셔야 합니다.";
scwin.MSG_LO_ERR_009 = "%1행의 위험물할증은 반드시 위험물조건을 입력하셔야 합니다.";
scwin.MSG_LO_ERR_010 = "변경된 사항이 없습니다.";
scwin.MSG_LO_ERR_011 = "%1행의 위험물할증 위험조건과 중복입니다.";
scwin.MSG_LO_ERR_012 = "중복된 할증항목이 %1행에 존재합니다.";
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
scwin.ColArray = new Array("", "", "unitCd", "minCondWt", "maxCondWt", "dangerCondCd");
scwin.NEW_FG = 1;
scwin.EDIT_FG = 2;
scwin.SAVE_MODE = scwin.EDIT_FG;
scwin.saveFlag = false;
scwin.openPopFlag = false;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "LO127",
    compID: "gr_lo411:dangerCondCd,gr_lo411Excel:dangerCondCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  wfm_smp.getWindow().scwin.cfn_getComboReload("04b");

  // 신규생성 >> 적용일자 오늘날짜 이후만 가능
  ed_adptDt.setAttribute("validExp", "적용일자:yes:minDate=" + scwin.strCurDate);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  scwin.f_defaultValue();
  acb_adptDt.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!scwin.saveFlag && !(await scwin.f_validChk())) {
      return false;
    }
    if (acb_adptDt.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["적용일자"]);
      return false;
    }
    ds_lo411_con.set("adptDt", acb_adptDt.getValue());
    $c.sbm.execute($p, sbm_retrieve);
    $c.gus.cfDisableObjects($p, [ed_adptDt, btn_save, btn_add, btn_del, btn_cls]);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    ed_adptDt.setValue(acb_adptDt.getValue());
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_lo411.getRowCount()));
    if (ds_lo411.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      //gr_lo411.setReadOnly("grid", true);
      scwin.SAVE_MODE = 0; //TOBE 신규/수정인경우만 처리하기 위해 방어코드처리.
      gr_lo411.setReadOnly("column", "selpchItemNm", true);
      gr_lo411.setReadOnly("column", "unitCd", true);
      gr_lo411.setReadOnly("column", "anucTrfRt", true);

      //scwin.gr_lo411_onrowindexchange(scwin.pos_rowSts);
      $c.gus.cfGoPrevPosition($p, gr_lo411, scwin.pos_rowSts); //첫번째 row 포지션이동
    }
    scwin.saveFlag = false;
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// function name : f_validChk
// function desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  try {
    if (ds_lo411.getModifiedIndex().length > 0) {
      if (!(await $c.win.confirm($p, scwin.MSG_LO_CRM_001))) {
        return false;
      }
    }
    return true;
  } catch (e) {
    console.log("f_validChk : " + e);
  }
};

//-------------------------------------------------------------------------
// 데이타셋 OnRowPosChanged
//-------------------------------------------------------------------------
scwin.gr_lo411_onrowindexchange = function (rowIndex, oldRow) {
  try {
    //TOBE 임시처리 조회가 아닐때만 기본정보 수정되도록처리
    if (scwin.SAVE_MODE != 0) {
      gr_lo411.setReadOnly("column", "unitCd", false);
      gr_lo411.setReadOnly("column", "anucTrfRt", false);
      //TOBE 임시처리종료

      $c.gus.cfPrepareHidVal($p, ds_lo411, rowIndex, ["selpchItemCd", "selpchItemNm", "unitCd"]);
      if (ds_lo411.getRowStatus(rowIndex) !== "C") {
        ed_adptDt.setValue(ds_lo411.getCellData(rowIndex, "adptDt"));
        gr_lo411.setReadOnly("column", "selpchItemNm", true); //"none"
      } else {
        gr_lo411.setReadOnly("column", "selpchItemNm", false); //"Any"
      }
      scwin.f_columnIndexChange(rowIndex); //컬럼 인덱스 변경 시
    }
  } catch (e) {}
};
scwin.f_columnIndexChange = function (rowIndex) {
  //oncellindexchange 통합,   event=OnColumnPosChanged(row,colid)>
  // 먼저 3개 컬럼 전체 readOnly
  gr_lo411.setReadOnly("column", "minCondWt", true);
  gr_lo411.setReadOnly("column", "maxCondWt", true);
  gr_lo411.setReadOnly("column", "dangerCondCd", true);
  let selpchItemCd = ds_lo411.getCellData(rowIndex, "selpchItemCd");
  switch (selpchItemCd) {
    case "0086":
      // 중량할증: 구간 조건만 입력 가능
      gr_lo411.setReadOnly("column", "minCondWt", false);
      gr_lo411.setReadOnly("column", "maxCondWt", false);
      break;
    case "0088":
      // 위험물할증: 위험물 구분만 입력 가능
      gr_lo411.setReadOnly("column", "dangerCondCd", false);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_addrow
// function desc : 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  try {
    if (ed_adptDt.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["적용일"]);
      return false;
    }

    /*
    if(!cfValidateValue(ed_adptDt.Text, "date=YYYYMMDD")){
        cfAlertMsg(scwin.MSG_LO_ERR_001);
        return false;
    };
    */

    if (!$c.date.isDate($p, ed_adptDt.getValue())) {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
      return false;
    }
    for (var i = 0; i < ds_adptDt.getRowCount(); i++) {
      if (ed_adptDt.getValue().trim() == ds_adptDt.getCellData(i, "code") && ds_lo411.getTotalRow() == 0) {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_006);
        return false;
      }
    }
    let row = $c.data.insertRow($p, $p.getComponentById("gr_lo411"));
    ds_lo411.setCellData(row, "adptDt", ed_adptDt.getValue());

    // 행추가시 추가된 행에 focus
    gr_lo411.setFocusedCell(row, "selpchItemNm", false);
    $c.gus.cfEnableObjects($p, [btn_save]);
  } catch (e) {
    console.log("f_addrow : " + e);
  }
};

//-------------------------------------------------------------------------
// function name : f_undo
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_Undo = async function () {
  try {
    ds_lo411.undoRow(ds_lo411.getRowPosition());
    scwin.SAVE_MODE = 0; //TOBE 신규/수정인경우만 처리하기 위해 방어코드처리.
    gr_lo411.setReadOnly("column", "unitCd", false);
    gr_lo411.setReadOnly("column", "anucTrf", false);
    gr_lo411.setReadOnly("column", "anucTrfRt", false);
    //gr_lo411.setReadOnly("grid", true); 
  } catch (e) {
    console.log("f_undo : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  var row = ds_lo411.getRowPosition();
  //추가등록정보만 삭제, 나머지는 상태값 삭제가 됨
  if (ds_lo411.getRowStatus(row) == "C") {
    ds_lo411.removeRow(row);
  } else {
    ds_lo411.deleteRow(row);
  }
};
scwin.gr_lo411_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_lo411.getColumnID(columnIndex);
  if (colid == "selpchItemNm" && gr_lo411.getReadOnly("column", "selpchItemNm") == true) {
    colid = "";
  }
  if (colid == "unitCd" && gr_lo411.getReadOnly("column", "unitCd") == true) {
    colid = "";
  }
  switch (colid) {
    case 'selpchItemNm':
      if (scwin.openPopFlag) {
        scwin.openPopFlag = false;
        return false;
      }
      scwin.f_openCommonPopUp(rowIndex, colid, "F", false);
      break;
    case 'unitCd':
      if (scwin.openPopFlag) {
        scwin.openPopFlag = false;
        return false;
      }
      scwin.f_openCommonPopUp(rowIndex, colid, "F", false);
      break;
  }
};
scwin.selpchItemNmOld = "";
scwin.unitCdOld = "";
scwin.gr_lo411_onbeforeedit = function (row, columnIndex, value) {
  let colid = gr_lo411.getColumnID(columnIndex);
  switch (colid) {
    case "selpchItemNm":
      scwin.selpchItemNmOld = value;
      break;
    case "unitCd":
      scwin.unitCdOld = value;
      break;
  }
};
scwin.alertFlag = false;
scwin.gr_lo411_onafteredit = async function (row, columnIndex, value) {
  if (scwin.alertFlag) return;
  let colid = gr_lo411.getColumnID(columnIndex);
  switch (colid) {
    case "minCondWt":
      for (i = 0; i < ds_lo411.getRowCount(); i++) {
        if (ds_lo411.getCellData(i, "selpchItemCd") == "0086" && ds_lo411.getCellData(i, "unitCd") <= ds_lo411.getCellData(row, "unitCd") && parseInt(ds_lo411.getCellData(i, "minCondWt")) <= parseInt(ds_lo411.getCellData(row, "minCondWt")) && parseInt(ds_lo411.getCellData(i, "maxCondWt")) >= parseInt(ds_lo411.getCellData(row, "minCondWt")) && ds_lo411.getRowStatus(i) != "D" && i != row) {
          scwin.alertFlag = true;
          //await $c.gus.cfAlertMsg(scwin.MSG_LO_ERR_002, new Array(i+1));
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, scwin.MSG_LO_ERR_002, [i + 1]));
          //ds_lo411.RowPosition = row;
          //gr_lo411.SetColumn(colid)
          gr_lo411.setFocusedCell(row, colid, true);
          $c.gus.cfDisableObjects($p, [btn_save]);
          scwin.alertFlag = false;
        } else if (ds_lo411.getCellData(i, "selpchItemCd") == "0086" && ds_lo411.getCellData(i, "unitCd") <= ds_lo411.getCellData(row, "unitCd") && parseInt(ds_lo411.getCellData(i, "minCondWt")) > parseInt(ds_lo411.getCellData(row, "minCondWt")) && parseInt(ds_lo411.getCellData(i, "maxCondWt")) < parseInt(ds_lo411.getCellData(row, "maxCondWt")) && i != row) {
          scwin.alertFlag = true;
          await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_004, new Array(i + 1 + ''));
          gr_lo411.setFocusedCell(row, colid, true);

          //ds_lo411.RowPosition = row;
          //gr_lo411.SetColumn(colid)

          $c.gus.cfDisableObjects($p, [btn_save]);
          scwin.alertFlag = false;
        }
      }
      $c.gus.cfEnableObjects($p, [btn_save]);
      break;
    case "maxCondWt":
      for (i = 0; i < ds_lo411.getRowCount(); i++) {
        if (ds_lo411.getCellData(i, "selpchItemCd") == "0086" && ds_lo411.getCellData(i, "unitCd") <= ds_lo411.getCellData(row, "unitCd") && parseInt(ds_lo411.getCellData(i, "minCondWt")) <= parseInt(ds_lo411.getCellData(row, "maxCondWt")) && parseInt(ds_lo411.getCellData(i, "maxCondWt")) >= parseInt(ds_lo411.getCellData(row, "maxCondWt")) && ds_lo411.getRowStatus(i) != "D" && i != row) {
          scwin.alertFlag = true;
          //await $c.gus.cfAlertMsg(scwin.MSG_LO_ERR_003, new Array(i + 1));
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, scwin.MSG_LO_ERR_003, [i + 1]));
          gr_lo411.setFocusedCell(row, colid, true);
          //ds_lo411.RowPosition = row;
          //gr_lo411.SetColumn(colid)

          $c.gus.cfDisableObjects($p, [btn_save]);
          scwin.alertFlag = false;
        } else if (ds_lo411.getCellData(i, "selpchItemCd") == "0086" && ds_lo411.getCellData(i, "unitCd") <= ds_lo411.getCellData(row, "unitCd") && parseInt(ds_lo411.getCellData(i, "minCondWt")) > parseInt(ds_lo411.getCellData(row, "minCondWt")) && parseInt(ds_lo411.getCellData(i, "maxCondWt")) < parseInt(ds_lo411.getCellData(row, "maxCondWt")) && ds_lo411.getRowStatus(i) != "D" && i != row) {
          scwin.alertFlag = true;

          //await $c.gus.cfAlertMsg(scwin.MSG_LO_ERR_004, new Array(i + ''));
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, scwin.MSG_LO_ERR_004, [i + 1]));
          gr_lo411.setFocusedCell(row, colid, true);
          //ds_lo411.RowPosition = row;
          //gr_lo411.SetColumn(colid)

          $c.gus.cfDisableObjects($p, [btn_save]);
          scwin.alertFlag = false;
          ;
        }
      }
      $c.gus.cfEnableObjects($p, [btn_save]);
      break;
    case "dangerCondCd":
      // 위험물 조건 
      for (i = 0; i < ds_lo411.getRowCount(); i++) {
        if (ds_lo411.getCellData(i, "selpchItemCd") == "0088" && ds_lo411.getCellData(i, "unitCd") <= ds_lo411.getCellData(row, "unitCd") && ds_lo411.getCellData(i, "dangerCondCd") == ds_lo411.getCellData(row, "dangerCondCd") && ds_lo411.getRowStatus(i) != "D" && i != row) {
          scwin.alertFlag = true;
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, scwin.MSG_LO_ERR_007, [i + 1]));
          gr_lo411.setFocusedCell(row, colid, true);
          $c.gus.cfDisableObjects($p, [btn_save]);
          scwin.alertFlag = false;
          return false;
        }
      }
      $c.gus.cfEnableObjects($p, [btn_save]);
      break;
    default:
      break;
  }
};
scwin.gr_lo411_onviewchange = async function (info) {
  const row = info.rowIndex;
  const colid = info.colId;
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  switch (colid) {
    case "selpchItemNm":
      if (ds_lo411.getCellData(row, "selpchItemNm") == "") {
        ds_lo411.setCellData(row, "selpchItemCd", "");
        ds_lo411.setCellData(row, "unitCd", ""); //단위
        ds_lo411.setCellData(row, "minCondWt", ""); //최소구간
        ds_lo411.setCellData(row, "maxCondWt", ""); //최대구간
        ds_lo411.setCellData(row, "dangerCondCd", ""); //위험물구
        return;
      }
      if (scwin.selpchItemNmOld == ds_lo411.getCellData(row, "selpchItemNm")) {
        return;
      } else {
        ds_lo411.setCellData(row, "selpchItemCd", "");
        scwin.openPopFlag = true;
        scwin.f_openCommonPopUp(row, colid, "T", true);
      }
      break;
    case "unitCd":
      if (scwin.unitCdOld == ds_lo411.getCellData(row, "unitCd")) {
        return;
      } else {
        scwin.openPopFlag = true;
        scwin.f_openCommonPopUp(row, colid, "T", true);
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (rowIndex, columnId, pWinCloseTF, initFlag) {
  switch (columnId) {
    case "selpchItemNm":
      // 할증항목
      let selpchItemCd = "";
      let selpchItemNm = ds_lo411.getCellData(rowIndex, "selpchItemNm");
      ;

      // false: textImage 버튼 클릭 후 실행한 경우는 코드 초기화 X
      // true: 값 입력으로 실행한 경우에는 코드, 이름 초기화 O
      if (initFlag) {
        ds_lo411.setCellData(rowIndex, "selpchItemCd", "");
        ds_lo411.setCellData(rowIndex, "selpchItemNm", "");
      } else {
        selpchItemCd = ds_lo411.getCellData(rowIndex, "selpchItemCd");
      }
      udc_comCodeGrid.setSelectId("retrieveSelpchItemInfo");
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_selpchItemNm_callBackFunc, selpchItemCd, selpchItemNm, pWinCloseTF, '5', null, '150,170', null, "1,,1", '440', '500', null, null, null, "F", null);
      break;
    case "unitCd":
      // 단위
      let unitCd = ds_lo411.getCellData(rowIndex, "unitCd");
      ds_lo411.setCellData(rowIndex, columnId, "");
      udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
      await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_retrieveCommCdInfo_callBackFunc, unitCd, '', pWinCloseTF, '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 할증항목목 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_selpchItemNm_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array();
    rtnList = ret;
    let repClntRowPosi = ds_lo411.getRowPosition();
    if (rtnList != null && rtnList[0] != "N/A") {
      //if(rtnList[0] == "N/A") return false;
      ds_lo411.setCellData(repClntRowPosi, "selpchItemCd", rtnList[0]);
      ds_lo411.setCellData(repClntRowPosi, "selpchItemNm", rtnList[1]);
    } else {
      ds_lo411.setCellData(repClntRowPosi, "selpchItemCd", "");
      ds_lo411.setCellData(repClntRowPosi, "selpchItemNm", "");
    }
  } catch (e) {
    console.log("udc_comCodeGrid_selpchItemNm_callBackFunc" + e);
  }
  scwin.openPopFlag = false;
};

//-------------------------------------------------------------------------
// 단위 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_retrieveCommCdInfo_callBackFunc = function (rtnList) {
  try {
    let repClntRowPosi = ds_lo411.getRowPosition();
    if (rtnList != null && rtnList[0] != "N/A") {
      //if(rtnList[0] == "N/A") return false;
      ds_lo411.setCellData(repClntRowPosi, "unitCd", rtnList[0]);
      //ds_lo411.setCellData(repClntRowPosi, "unitNm", rtnList[1]);
    } else {
      ds_lo411.setCellData(repClntRowPosi, "unitCd", "");
      //ds_lo411.setCellData(repClntRowPosi, "unitNm", "");
    }
  } catch (e) {
    console.log("udc_comCodeGrid_retrieveCommCdInfo_callBackFunc" + e);
  }
  scwin.openPopFlag = false;
};

//-------------------------------------------------------------------------
// function name : f_New
// function desc : 신규버튼 클릭
//-------------------------------------------------------------------------
scwin.f_New = async function () {
  try {
    ds_lo411.setJSON([]);
    ed_adptDt.setValue(scwin.strCurDate);
    if (ed_adptDt.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_005);
      return false;
    }
    $c.gus.cfEnableObjects($p, [ed_adptDt, btn_save, btn_add, btn_del, btn_cls]);
    $c.gus.cfDisableObjects($p, [btn_new, btn_edit]);
    scwin.SAVE_MODE = scwin.NEW_FG;
  } catch (e) {
    console.log("f_New : " + e);
  }
};

//-------------------------------------------------------------------------
// function name : f_Edit
// function desc : 수정버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Edit = async function () {
  try {
    let rowIndex = ds_lo411.getRowPosition();
    scwin.f_columnIndexChange(rowIndex);
    gr_lo411.setReadOnly("column", "unitCd", false); //"Any"
    gr_lo411.setReadOnly("column", "anucTrfRt", false); //"Any"

    $c.gus.cfEnableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
    $c.gus.cfDisableObjects($p, [btn_new, btn_edit]);
    scwin.SAVE_MODE = scwin.EDIT_FG;
  } catch (e) {
    console.log("f_Edit : " + e);
  }
};

//-------------------------------------------------------------------------
// function name : f_Save (TOBE f_ReqFieldChk 로직 포함)
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    scwin.pos_rowSts = ds_lo411.getRowPosition();
    let i;
    if (ds_lo411.getModifiedIndex().length == 0) {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_010);
      return false;
    }
    let count = 1;
    for (i = 0; i < ds_lo411.getRowCount(); i++) {
      count = 1 + i;
      if (ds_lo411.getCellData(i, "selpchItemCd") == "0086" && (ds_lo411.getCellData(i, "minCondWt") == 0 || ds_lo411.getCellData(i, "maxCondWt") == 0 || $c.gus.cfIsNull($p, ds_lo411.getCellData(i, "minCondWt")) || $c.gus.cfIsNull($p, ds_lo411.getCellData(i, "maxCondWt")))) {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_008, [count + '']);
        gr_lo411.setFocusedCell(i, "selpchItemCd", true);
        return false;
      }
      if (ds_lo411.getCellData(i, "selpchItemCd") == "0086" && parseInt(ds_lo411.getCellData(i, "minCondWt")) > parseInt(ds_lo411.getCellData(i, "maxCondWt"))) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["최소값", "최대값"]);
        gr_lo411.setFocusedCell(i, "minCondWt", true);
        return false;
      }
      if (ds_lo411.getCellData(i, "selpchItemCd") == "0088" && ds_lo411.getCellData(i, "dangerCondCd") == "") {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_009, [count + '']);
        gr_lo411.setFocusedCell(i, "dangerCondCd", true);
        return false;
      }
    }
    if (scwin.SAVE_MODE == scwin.NEW_FG) {
      let ret = await $c.gus.cfValidate($p, [ed_adptDt], null, true);
      if (!ret) {
        return false;
      }
    }

    // 그리드 체크 문제로 임의 체크로 변경
    let ret2 = await $c.gus.cfValidate($p, [gr_lo411], null, true);
    if (!ret2) {
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장후 콜뱍
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
  $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
  scwin.SAVE_MODE = 0; //TOBE 신규/수정인경우만 처리하기 위해 방어코드처리.
  let rowIndex = ds_lo411.getRowCount();
  gr_lo411.setReadOnly("column", "selpchItemNm", true);
  gr_lo411.setReadOnly("column", "unitCd", true);
  gr_lo411.setReadOnly("column", "anucTrfRt", true);
  gr_lo411.setReadOnly("column", "minCondWt", true);
  gr_lo411.setReadOnly("column", "maxCondWt", true);
  gr_lo411.setReadOnly("column", "dangerCondCd", true);
  //gr_lo411.setReadOnly("grid", true);
  scwin.saveFlag = true;

  // scwin.f_Retrieve();
  // 저장 완료 후 데이터 재조회 하지 않음
  for (var i = ds_lo411.getTotalRow() - 1; i >= 0; i--) {
    if (ds_lo411.getRowStatus(i) === "D") {
      ds_lo411.removeRow(i);
    }
  }
  ds_lo411.reform();
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  wfm_smp.getWindow().scwin.cfn_getComboReload("04b");
};
scwin.ed_adptDt_onblur = function (e) {
  for (i = 0; i < ds_lo411.getRowCount(); i++) {
    if (ds_lo411.getRowStatus(i) == "C") {
      ds_lo411.setCellData(i, "adptDt", ed_adptDt.getValue());
    }
  }
};
scwin.f_runExcel = function () {
  //그리드에 대한 내용을 추가 옵션
  let sheetTitle;
  sheetTitle = "할증고시요율목록";
  const options = {
    fileName: sheetTitle + "xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: sheetTitle //엑셀내시트명지정필요시
  };
  let infoArr = [];

  //if(await $c.win.confirm("EXCEL로 다운로드 받으시겠습니까?")) {
  $c.data.downloadGridViewExcel($p, gr_lo411, options, infoArr);
  //}
  //{"fileName" : "할증고시요율목록.xlsx", "sheetName" : "할증 고시요율목록" ,"type" : "2+4+8+16" }
};

// 할증항목 코드 변경에 따른 readOnly 컬럼 변경
scwin.ds_lo411_oncelldatachange = function (info) {
  const colid = info.colID;
  const newValue = info.newValue;
  if (colid === "selpchItemCd" && newValue !== "") {
    scwin.f_columnIndexChange(gr_lo411.getFocusedRowIndex());
  }
};

// 값이 없거나 빈 문자열인 경우 "0.00" 반환
scwin.f_zeroFormatter = function (value) {
  if (value === "" || value === null || typeof value === "undefined") {
    return "0.00";
  }

  // 값이 있는 경우 "##0.00" 포맷 적용
  return Number(value).toFixed(2);
};

// 값이 없거나 빈 문자열인 경우 "0" 반환
scwin.f_zeroFormatter2 = function (value) {
  if (value === "" || value === null || typeof value === "undefined") {
    return "0";
  }

  // 값이 있는 경우 "#,###,###" 포맷 적용
  return Number(value).toLocaleString();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_adptDt',search:'start',style:'',submenuSize:'auto',allOption:'',disabled:'false',displayMode:'label',searchTarget:'both',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_adptDt'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'할증 고시요율 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:'',tagname:'span'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_adptDt',title:'적용일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd','ev:onblur':'scwin.ed_adptDt_onblur'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',gridID:'gr_lo411',gridUpYn:'N',style:'',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_lo411',id:'gr_lo411',dataName:'할증 고시요율',validFeatures:'ignoreStatus=no',validExp:'selpchItemNm:할증항목:yes,unitCd:단위:yes,anucTrfRt:적용율(%):yes:minNumber=0.01',focusMode:'cell',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_lo411_onrowindexchange',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_lo411_ontextimageclick',readOnly:'true','ev:onbeforeedit':'scwin.gr_lo411_onbeforeedit','ev:onafteredit':'scwin.gr_lo411_onafteredit','ev:onviewchange':'scwin.gr_lo411_onviewchange',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'적용일자',displayMode:'label',rowSpan:'2',colSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'매출입항목코드',displayMode:'label',rowSpan:'2',colSpan:''}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'selpchItemNm',inputType:'text',removeBorderStyle:'false',value:'할증항목',width:'200',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'순번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'unitCd',inputType:'text',removeBorderStyle:'false',value:'단위',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type2',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'구간조건',width:'250',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'dangerCondCd',inputType:'text',value:'위험물조건',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'anucTrfRt',inputType:'text',value:'적용율(%)',width:'150',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'minCondWt',value:'최소',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'maxCondWt',value:'최대',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adptDt',value:'',displayMode:'label',hidden:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemNm',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',width:'200',maxLength:'50'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'anucScTrfSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'unitCd',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',width:'100',maxLength:'3'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'minCondWt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',displayFormatter:'scwin.f_zeroFormatter2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'maxCondWt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',displayFormatter:'scwin.f_zeroFormatter2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCondCd',inputType:'select',textAlign:'left',width:'150',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'anucTrfRt',inputType:'text',minNumber:'0.01',textAlign:'right',width:'150',displayFormat:'##0.00',maxLength:'3.2',dataType:'float',excelCellType:'number',displayFormatter:'scwin.f_zeroFormatter'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRow',cancelFunctoion:'scwin.f_Undo',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',id:'udc_gridAddDel',gridID:'gr_lo411',btnRowDelObj:'btn_del',btnRowAddObj:'btn_add',btnCancelObj:'btn_cls',rowDelObjType:'data',rowAddObjType:'data',cancelObjType:'data',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',label:'신규',style:'',type:'button','ev:onclick':'scwin.f_New',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',label:'수정',style:'',type:'button','ev:onclick':'scwin.f_Edit',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',style:'display:none',dataList:'data:ds_lo411',focusMode:'row',id:'gr_lo411Excel',scrollByColumn:'false',scrollByColumnAdaptive:'false',visibleRowNum:'15',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_lo411_onrowindexchange',rowStatusVisible:'true',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'적용일자',displayMode:'label',rowSpan:'2',colSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'매출입항목코드',displayMode:'label',rowSpan:'2',colSpan:''}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'selpchItemNm',inputType:'text',removeBorderStyle:'false',value:'할증항목',width:'200',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'unitCd',inputType:'text',removeBorderStyle:'false',value:'단위',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type2',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'구간조건',width:'250',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'dangerCondCd',inputType:'text',value:'위험물조건',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'anucTrfRt',inputType:'text',value:'적용율(%)',width:'150',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'minCondWt',value:'최소',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'maxCondWt',value:'최대',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adptDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemNm',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'anucScTrfSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'unitCd',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'minCondWt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'maxCondWt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dangerCondCd',inputType:'select',textAlign:'left',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'anucTrfRt',inputType:'text',minNumber:'0.01',textAlign:'right',width:'150',displayFormat:'##0.00',maxLength:'3.2',dataType:'float',excelCellType:'number'}}]}]}]},{T:1,N:'w2:wframe',A:{id:'wfm_smp',src:'/ui/ds/lo/comntrfmgnt/comboReload.xml',style:''}},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]}]})