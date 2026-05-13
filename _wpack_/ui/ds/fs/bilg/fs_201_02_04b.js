/*amd /ui/ds/fs/bilg/fs_201_02_04b.xml 32127 f6bf8188dc1f1571c7d8d7acd1ae784b12216354e1e36e6de50cc9bbc7b87126 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_formulalist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulalist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'lvlFmlaPatternCd',name:'레벨서식유형코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'lvlFmlaNm',name:'레벨서식명',dataType:'text',defaultValue:'',length:'102'}},{T:1,N:'w2:column',A:{id:'upperFmlaClsCd',name:'상위서식구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'상위서식유형코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'upperFmlaNm',name:'상위서식명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'fmlaPrtnYn',name:'서식출력여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'bizClsCd',name:'사업구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'표기서식구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'표기서식유형코드',dataType:'text',defaultValue:'',length:'2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_formulalist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_formulalist_con","key":"IN_DS1"},{"id":"ds_formulalist","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_formulalist","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulalist_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formula_save',action:'/ds.fs.bilg.bilgcomncdmgnt.SaveFormulaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_formulalist","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formula_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//메세지용 전역변수 SETTING
scwin.MSG_FS_WRN_007 = "존재하지않는 유형코드입니다.";
scwin.MSG_FS_WRN_008 = "저장된 코드가 아닙니다. 저장을 먼저 하십시오.";
scwin.MSG_FS_WRN_013 = "상위 유형코드는 청구서 유형코드와 동일할 수 없습니다.";
scwin.MSG_FS_WRN_014 = "해당 서식 출력여부가 YES가 아닙니다.";
scwin.MSG_FS_WRN_015 = "해당 표기서식 유형코드를 삭제하고 변경하십시오.";
scwin.gridPos = 0;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  rd_fmlaClsCd.setValue("01");
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_deleteRow, btn_cancelRow]);
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  ds_formulalist_con.set("fmlaClsCd", rd_fmlaClsCd.getValue());
  $c.sbm.execute($p, sbm_formulalist_retrieve);
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let row = ds_formulalist.insertRow();
  //ds_formulalist.setRowPosition(row);
  ds_formulalist.setCellData(row, "fmlaClsCd", rd_fmlaClsCd.getValue());
  ds_formulalist.setCellData(row, "bizClsCd", "01");
  ds_formulalist.setRowPosition(row);
  gr_formulalist.setFocusedCell(row, "fmlaPatternCd", false);
  //scwin.gr_formulalist_oncellclick(row, 1, "fmlaClsCd");
};
scwin.f_deleteRow = function () {
  var row = ds_formulalist.getRowPosition();
  if (ds_formulalist.getRowStatus(row) == "C") {
    ds_formulalist.removeRow(row);
  } else {
    ds_formulalist.deleteRow(row);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_formulalist.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "청구서유형"));
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  let ret = await $c.gus.cfValidate($p, [gr_formulalist], null, true);
  if (!ret) {
    return;
  }
  for (var i = 0; i < ds_formulalist.getRowCount(); i++) {
    ret = await scwin.f_ValidCheck(i, "upperFmlaPatternCd");
    if (!ret) return;
    ret = await scwin.f_ValidCheck(i, "inscrpFmlaPatternCd");
    if (!ret) return;
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!ret) return;
  for (var i = 0; i < ds_formulalist.getRowCount(); i++) {
    if (ds_formulalist.getCellData(i, "upperFmlaPatternCd") == "") {
      ds_formulalist.setCellData(i, "upperFmlaClsCd", "");
    } else {
      ds_formulalist.setCellData(i, "upperFmlaClsCd", ds_formulalist.getCellData(i, "fmlaClsCd"));
    }
  }
  $c.sbm.execute($p, sbm_formula_save);
};

//-------------------------------------------------------------------------
// 컬럼값 변경시 유효한 값인지 체크
//-------------------------------------------------------------------------  	
scwin.f_ValidCheck = async function (row, colid) {
  var vrow = -1;
  if (ds_formulalist.getCellData(row, colid) != "") {
    var tmpRsData = ds_formulalist.getMatchedIndex("fmlaPatternCd", ds_formulalist.getCellData(row, colid));
    if (tmpRsData.length != 0) {
      vrow = tmpRsData[0];
    }
  }
  console.log("f_ValidCheck colid-" + colid);
  console.log("vrow=>" + vrow);

  //상위유형코드 입력시 유효값 체크
  if (colid == "upperFmlaPatternCd") {
    if (vrow == -1 && ds_formulalist.getCellData(row, colid) != "") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_007);
      if (ds_formulalist.getRowStatus(row) == "C") {
        ds_formulalist.removeRow(row);
      } else {
        ds_formulalist.undoRow(row);
      }
      return false;
    } else if (vrow != -1) {
      if (ds_formulalist.getCellData(row, "fmlaPatternCd") != ds_formulalist.getCellData(row, "upperFmlaPatternCd")) {
        if (ds_formulalist.getRowStatus(vrow) == "C") {
          await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_008);
          if (ds_formulalist.getRowStatus(row) == "C") {
            ds_formulalist.setCellData(row, colid, "");
          } else {
            ds_formulalist.undoRow(row);
          }
          return false;
        } else {
          ds_formulalist.setCellData(row, "upperFmlaNm", ds_formulalist.getCellData(vrow, "fmlaNm"));
        }
      } else {
        if (ds_formulalist_con.get("fmlaClsCd") == "01") {
          await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_013);
          ds_formulalist.setCellData(row, colid, "");
          return false;
        }
      }
    }
    //표기서식유형코드 입력시 유효값 체크
  } else if (colid == "inscrpFmlaPatternCd") {
    if (vrow == -1 && ds_formulalist.getCellData(row, colid) != "") {
      $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_007);
      if (ds_formulalist.getRowStatus(row) == "C") {
        ds_formulalist.removeRow(row);
      } else {
        ds_formulalist.undoRow(row);
      }
      return false;
    } else if (vrow != -1) {
      if (ds_formulalist.getCellData(row, "fmlaPrtnYn") == "0") {
        if (ds_formulalist.getCellData(vrow, "fmlaPrtnYn") != "1") {
          await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_014);
          ds_formulalist.setCellData(row, colid, "");
          return false;
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //청구부서코드팝업
      udc_bilgLodeptCd.setSelectId("retrieveOpDeptCdInfo");
      udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCd_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      //청구화주코드팝업
      udc_bilgClntNo.setSelectId("retrieveClntInfo");
      udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
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
//  거래명세서 팝업
//-------------------------------------------------------------------------
scwin.f_CertiNoPopUp = async function () {
  if (ds_formulalist.getRowCount() < 1) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_018, "미리보기할 데이터", "조회"));
    return;
  }
  let strPath = "/ui/ds/fs/bilg/";
  var strProgramId = "";
  var strpopupName = "";
  if (ds_formulalist_con.get("fmlaClsCd") == "01") {
    strProgramId = "fs_204_02_51p";
    strpopupName = "거래명세서 팝업";
  } else {
    strProgramId = "fs_204_02_52p";
    strpopupName = "CERTI 팝업";
  }
  let opts = {
    id: strProgramId,
    popupName: strpopupName,
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 750,
    title: strpopupName
  };
  var p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
  var p_bilgLodeptNm = ed_bilgLodeptNm.getValue();
  var p_pgmId = "";
  var arrParm = new Array(p_bilgLodeptCd, p_bilgLodeptNm, p_pgmId);
  var returnValue = await $c.win.openPopup($p, strPath + strProgramId + ".xml", opts, arrParm);
  if (returnValue != null) {
    ed_certiNo.setValue(returnValue);
  }
};

//-------------------------------------------------------------------------
// 인쇄 (조건에 따라 출력물을 분기한다.)
//-------------------------------------------------------------------------
scwin.f_Preview = async function () {
  if (ds_formulalist.getRowCount() < 1) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_018, "미리보기할 데이터", "조회"));
    return;
  }
  if (ds_formulalist_con.get("fmlaClsCd") == "01") {
    if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_certiNo]))) {
      return;
    }
    //console.log('111~~');
    scwin.f_certiPrint1();
  } else {
    if (!(await $c.gus.cfValidate($p, [ed_certiNo]))) {
      return;
    }
    //console.log('2222~~');
    scwin.f_certiPrint2();
  }
};

//-------------------------------------------------------------------------
// 인쇄 (거래명세서)
//-------------------------------------------------------------------------
scwin.f_certiPrint1 = function () {
  var row = ds_formulalist.getRowPosition();
  var odi1 = "01";
  var odi2 = ds_formulalist.getCellData(row, "inscrpFmlaPatternCd");
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  var odiParam = {};
  odiParam.bilgLodeptCd = ed_bilgLodeptCd.getValue();
  odiParam.bilgClntNo = ed_bilgClntNo.getValue();
  odiParam.qryConKnd = "02";
  odiParam.confirmDtFm = "";
  odiParam.confirmDtTo = "";
  odiParam.spplyDtFm = "";
  odiParam.spplyDtTo = "";
  odiParam.modId = "";
  odiParam.printFg = "";
  odiParam.certiAggregateFg = "";
  odiParam.dcsnClsCd = "";
  odiParam.certiNo = ed_certiNo.getValue();
  odiParam.fmlaClsCd = ds_formulalist.getCellData(row, "fmlaClsCd");
  odiParam.fmlaPatternCd = ds_formulalist.getCellData(row, "fmlaPatternCd");
  odiParam.upperFmlaClsCd = "";
  odiParam.upperFmlaPatternCd = "";
  odiParam.sellVatNo = "";
  odiParam.spplyFg = "receive";
  odiParam.inscrpFmlaPatternCd = ds_formulalist.getCellData(row, "inscrpFmlaPatternCd");
  odiParam.sumGbn = "N";

  //console.log('레포트1~~');
  //console.log(odiParam);

  var ozMode = "";
  var data = {
    odiName: "fs_202_06_10_" + odi1 + "_" + odi2,
    reportName: "/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr",
    odiParam: odiParam,
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: ozMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 인쇄 (CERTI)
//-------------------------------------------------------------------------
scwin.f_certiPrint2 = function () {
  var row = ds_formulalist.getRowPosition();
  var ozr = ds_formulalist.getCellData(row, "upperFmlaPatternCd");
  var odi = "fs_202_05_21_C";
  if (ozr == "16") {
    odi = odi + ozr;
  }

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //var odiParam = new ODIParam(odi);

  var odiParam = {};
  odiParam.certiNo = ed_certiNo.getValue();
  odiParam.dspTotAmt = "N";

  //console.log('레포트2~~');
  //console.log(odiParam);

  var ozMode = "";
  var data = {
    odiName: odi,
    reportName: "/ds/fs/fs_202_05_21_C" + ozr + ".ozr",
    odiParam: odiParam,
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: ozMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// OzReport
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.sbm_formulalist_retrieve_submitdone = function (e) {
  tbx_totalRows.setValue(ds_formulalist.getRowCount());
  if (ds_formulalist.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  $c.gus.cfEnableObjects($p, [btn_addRow, btn_deleteRow, btn_cancelRow]);
  $c.gus.cfEnableAllBtn($p);
  if (rd_fmlaClsCd.getValue() == "01") {
    gr_formulalist.setHeaderValue("upperFmlaPatternCdHd", "상위<br/>유형코드");
    gr_formulalist.setHeaderValue("upperFmlaNmHd", "상위유형명");
    ed_bilgLodeptCd.setMandatory(true);
    tbx_bilgLodeptCd.addClass("req");
    $c.gus.cfEnableObjects($p, [ed_bilgClntNo, ed_bilgClntNm, btn_bilgClntNo]);
  } else {
    gr_formulalist.setHeaderValue("upperFmlaPatternCdHd", "CERTI<br/>유형코드");
    gr_formulalist.setHeaderValue("upperFmlaNmHd", "CERTI유형명");
    ed_bilgLodeptCd.setMandatory(false);
    tbx_bilgLodeptCd.removeClass("req");
    ed_bilgClntNo.setValue("");
    ed_bilgClntNm.setValue("");
    $c.gus.cfDisableObjects($p, [ed_bilgClntNo, ed_bilgClntNm, btn_bilgClntNo]);
  }
  gr_formulalist.setFocusedCell(0, 'fmlaPatternCd', false);
};
scwin.sbm_formula_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

// ASIS gr_formulalist OnClick(row,colid) 로컬에서는 대문자만허용되는데, 개발에서는 소문자도 허용됨. 결함등록으로 개발에 맞춰 수정함.
scwin.gr_formulalist_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "fmlaPatternCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "inscrpFmlaPatternCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "upperFmlaPatternCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

/*
scwin.gr_formulalist_onafteredit = async function (rowIndex, columnIndex, value, info) {
    console.log("scwin.gr_formulalist_onafteredit~~");

    var colid = gr_formulalist.getColumnID(columnIndex)
    var yrow = -1;

    if (ds_formulalist.getCellData(rowIndex, "fmlaPatternCd") != "") {
        var tmpRsData = ds_formulalist.getMatchedIndex("inscrpFmlaPatternCd", ds_formulalist.getCellData(rowIndex, "fmlaPatternCd"));

        if (tmpRsData.length != 0) {
            yrow = tmpRsData[0];
        }
    }

//console.log("colid" +colid);

    //서식출력여부 입력시 유효값 체크
    if (colid == "fmlaPrtnYn") {
        if (ds_formulalist.getCellData(rowIndex, "fmlaPrtnYn") == "0") {
            if (yrow != -1) {
                await $c.gus.cfAlertMsg(scwin.MSG_FS_WRN_015);
                ds_formulalist.setCellData(yrow, "inscrpFmlaPatternCd", "");
                ds_formulalist.setCellData(rowIndex, "fmlaPrtnYn", "1");
                gr_formulalist.setFocusedCell(rowIndex, colid, true); //edit : true
                //return false;
            }
        }
    }

    if (info.type === 'mousedown' || info.type === 'keydown' || info.type === 'click') { //테스트해보면 입력에는 keydown, 이미지클릭시 mousedown
        return false; // onafteredit 로직 중단
    }

console.log(value);
console.log(info);
    var returnVal = await scwin.f_ValidCheck(rowIndex, colid);


    //var returnVal = true;
    //if (!returnVal) {
    //    gr_formulalist.setFocusedCell(rowIndex, colid, true); //edit : true
    //}
};
*/
scwin.g_colId = "";
scwin.gr_formulalist_onafteredit = async function (rowIndex, columnIndex, value, info) {
  console.log("gr_formulalist_onafteredit~~");
  scwin.g_colId = gr_formulalist.getColumnID(columnIndex);
};
scwin.gr_formulalist_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_formulalist.getRowStatus(rowIndex) == "C") {
    gr_formulalist.setReadOnly("cell", rowIndex, "fmlaPatternCd", false);
  } else {
    gr_formulalist.setReadOnly("cell", rowIndex, "fmlaPatternCd", true);
  }
  gr_formulalist.setReadOnly("cell", rowIndex, "upperFmlaNm", true);
};
scwin.gr_formulalist_oncellindexchange = async function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  console.log("scwin.gr_formulalist_oncellindexchange~~");
  if (oldColumnIndex == columnIndex) return;
  var colid = gr_formulalist.getColumnID(oldColumnIndex);
  var returnVal = await scwin.f_ValidCheck(rowIndex, colid);
  if (!returnVal) {
    gr_formulalist.setFocusedCell(rowIndex, colid, true); //edit : true
  }
};
scwin.gr_formulalist_onrowindexchange = async function (rowIndex, oldRow) {
  console.log("gr_formulalist_onrowindexchange");
  var colid = scwin.g_colId;
  if (rowIndex != oldRow) {
    var returnVal = await scwin.f_ValidCheck(oldRow, colid);
    if (!returnVal) {
      if (oldRow >= ds_formulalist.getRowCount()) {
        oldRow = oldRow - 1;
      }
      gr_formulalist.setFocusedCell(oldRow, colid, true); //edit : true
    }
  }
};
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};
scwin.udc_bilgLodeptCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgLodeptCd, ed_bilgLodeptNm);
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
};
scwin.udc_bilgClntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구서유형구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_fmlaClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BILL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_bilgLodeptCd',label:'청구지점 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgLodeptCd',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_bilgLodeptNm',id:'udc_bilgLodeptCd',objTypeCode:'Data',objTypeName:'key',btnId:'btn_bilgLodeptCd','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgLodeptCd_onviewchangeNameEvent',validTitle:'청구부서',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',id:'udc_bilgClntNo',btnId:'btn_bilgClntNo',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',objTypeCode:'Data','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClntNo_onviewchangeNameEvent',validTitle:'청구처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서/CERTI',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',placeholder:'',style:'width: 100px;',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',mandatory:'true',title:'CERTI번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_certiNo',style:'',type:'button','ev:onclick':'scwin.f_CertiNoPopUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',disabled:'',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Preview',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_formulalist',id:'gr_formulalist',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',gridName:'청구서 유형','ev:oncellindexchange':'scwin.gr_formulalist_oncellindexchange',dataName:'청구서 유형',validFeatures:'ignoreStatus=yes',validExp:'fmlaPatternCd:청구서 유형코드:yes:string&maxlength=2:key,fmlaNm:유형명:yes:string&maxlength=100,fmlaPrtnYn:서식출력여부:yes:number&maxlength=1,inscrpFmlaPatternCd:표기서식유형코드:yes:string&maxlength=2,bizClsCd:사업구분코드:yes:string&maxlength=2','ev:onrowindexchange':'scwin.gr_formulalist_onrowindexchange','ev:onafteredit':'scwin.gr_formulalist_onafteredit','ev:oncellclick':'scwin.gr_formulalist_oncellclick','ev:oneditkeyup':'scwin.gr_formulalist_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'청구서<br/>유형코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'유형명',width:'200',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperFmlaPatternCdHd',inputType:'text',value:'상위<br/>유형코드',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperFmlaNmHd',inputType:'text',value:'상위유형명',width:'200',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'서식<br/>출력여부',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'사업<br/>구분코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'표기서식<br/>유형코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'비고',width:'200',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaPatternCd',inputType:'text',width:'100',mandatory:'true',maxLength:'2',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaNm',inputType:'text',width:'200',textAlign:'left',mandatory:'true',maxByteLength:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperFmlaPatternCd',inputType:'text',width:'100',allowChar:'A-Za-z0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperFmlaNm',inputType:'text',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaPrtnYn',inputType:'select',width:'100',mandatory:'true',maxLength:'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizClsCd',inputType:'select',width:'100',mandatory:'true',maxLength:'2'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'inscrpFmlaPatternCd',inputType:'text',width:'100',mandatory:'true',maxLength:'2',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unqItm',inputType:'text',width:'200',textAlign:'left',maxByteLength:'60'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',btnDelYn:'N',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_cancelRow',rowAddFunction:'scwin.f_AddRow',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_formulalist',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_deleteRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})