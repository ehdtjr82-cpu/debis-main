/*amd /ui/cm/bc/comnmgnt/closemgnt/zz_640_01_01b.xml 47229 3a267f5c887946043db4311989c1a783adfe6534a1fb0242a46de4a87e8546c5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_closeWrk'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sys',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCond',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_closeControl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeWrk',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_closeWrk_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'precWrkNo',name:'선행작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'precWrkNm',name:'선행작업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'작업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeCycCd',name:'마감주기',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_closeControl',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_closeControl_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDd',name:'마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closePrgsStsCd',name:'마감진행상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPfmIp',name:'작업수행IP',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_closeWrk',action:'/cm.bc.comnmgnt.closemgnt.SaveCloseWorkInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_closeWrk","key":"IN_DS1"},{"id":"ds_closeControl","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_closeWrk_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_closeWrk',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseWorkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_closeWrk',target:'data:json,{"id":"ds_closeWrk","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_closeWrk_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_closeControl',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseControlListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_closeControl',target:'data:json,{"id":"ds_closeControl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_closeControl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.userId = scwin.memJson.userId;
  scwin.userNm = scwin.memJson.userNm;
  scwin.pos_closeWrk = 0;
  scwin.vBfCloseControlStatus = "";
  scwin.vLoginCoCd = scwin.memJson.coCd; // 소속 자회사  // coCd
  scwin.vLoginCoClsCd = scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS) coClsCd
  scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 userHomeClsCd
  scwin.isSubCompany = false;
  scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

  scwin.failSave = "";
};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  scwin.f_setCompanyInfo();
  //임시데이터
  ed_coCd.setValue(scwin.vLoginCoCd);
  // txt_coNm.setValue(""); // 동원로엑스(주)
};

//-------------------------------------------------------------------------
// 마감작업 목록조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;
  txt_qryCntn = qryCntn.getValue().trimAll();
  var vQryStDt = qryStDt.getValue().trimAll();
  if (vQryStDt != "" && vQryStDt.length < 6) {
    $c.win.alert($p, "검색연월을 정확하게 입력해 주십시오.");
    qryStDt.focus();
    return false;
  }
  dma_closeWrk.set("sys", lc_lux_sys.getValue());
  dma_closeWrk.set("qryCond", lc_lux_qryCond.getValue());
  dma_closeWrk.set("qryCntn", qryCntn.getValue());
  await $c.sbm.execute($p, sbm_ds_closeWrk);
};

//-------------------------------------------------------------------------
// 마감통제 목록조회
//-------------------------------------------------------------------------
scwin.f_CloseControlRetrieve = function () {
  dma_closeControl.set("coCd", ed_coCd.getValue());
  dma_closeControl.set("qryStDt", qryStDt.getValue());
  dma_closeControl.set("wrkNo", ds_closeWrk.getCellData(ds_closeWrk.rowPosition, "wrkNo"));
  $c.sbm.execute($p, sbm_closeControl);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = async function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != 'SA') {
    scwin.vLoginCoCd = '000';
    scwin.vLoginCoClsCd = '0';
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm, img_company]); // img_company
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm, img_company]); // img_company
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  txt_saveType.setValue(0); // 0:신규, 1:수정, 2:조회
  gr_closeWrk.setColumnReadOnly("wrkNo", false);
  scwin.f_AddRow(); // 행추가
  $c.gus.cfEnableBtnOnly($p, [b_Save]);
};

//-------------------------------------------------------------------------
// 마감관리 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  txt_saveType.setValue(1);
  gr_closeWrk.setColumnReadOnly("wrkNo", true);
  $c.gus.cfEnableBtnOnly($p, [b_Save]);
};

//-------------------------------------------------------------------------
// 마감관리 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  // 취소 확인 

  if (ds_closeWrk.rowPosition > 0) {
    ds_closeWrk.undoAll();
    let insertRow = ds_closeWrk.getInsertedIndex();
    for (let i = insertRow.length - 1; i >= 0; i--) {
      ds_closeWrk.removeRow(insertRow[i]);
    }
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = async function () {
  let row = ds_closeWrk.getRowPosition();
  if (ds_closeWrk.getRowStatus(row) == "C") {
    ds_closeWrk.removeRow(row);
  } else {
    ds_closeWrk.deleteRow(row);
  }
  txt_rowDelStat.setValue("1");
  gr_closeWrk.setFocusedCell(row, "wrkNo", true);
};

//-------------------------------------------------------------------------
// 마감관리 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  txt_saveType.setValue("3"); // 수정인경우(1:신규, 2: 수정, 3: 삭제)	
  await scwin.f_delRow();
};

//-------------------------------------------------------------------------
// 마감통제신규
//-------------------------------------------------------------------------
scwin.f_CreateControl = function () {
  txt_saveType.setValue(0); // 0:신규, 1:수정, 2:조회
  var vCloseWrkNo = ds_closeWrk.getCellData(ds_closeWrk.rowPosition, "wrkNo");
  gr_closeControl.setReadOnly("grid", false); // gr_closeControl.Editable = true;
  scwin.f_CloseControlAddRow(); // 행추가
  gr_closeControl.setColumnReadOnly('closeYm', false);
  gr_closeControl.setColumnReadOnly('closeDd', false);
  gr_closeControl.setColumnReadOnly('mgntNo', false);
  if (vCloseWrkNo.trim() == "") {
    gr_closeControl.setColumnReadOnly('wrkNo', false);
  } else {
    gr_closeControl.setColumnReadOnly('wrkNo', true);
  }
  let row = ds_closeControl.rowPosition;
  ds_closeControl.setCellData(row, "coCd", ed_coCd.getValue());
  ds_closeControl.setCellData(row, "wrkNo", vCloseWrkNo);
  ds_closeControl.setCellData(row, "closePrgsStsCd", "1");
  $c.gus.cfEnableBtnOnly($p, [b_Save]);
};

//-------------------------------------------------------------------------
// 마감통제 취소
//-------------------------------------------------------------------------
scwin.f_UndoControl = function () {
  if (ds_closeControl.rowPosition > 0) {
    ds_closeControl.undoAll();
    let insertRow = ds_closeControl.getInsertedIndex();
    for (let i = insertRow.length - 1; i >= 0; i--) {
      ds_closeControl.removeRow(insertRow[i]);
    }
    // ds_closeControl.removeAll();
  }
};

//-------------------------------------------------------------------------
// 마감관리 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_closeWrk.insertRow();
  gr_closeWrk.setFocusedCell(ds_closeWrk.getRowCount() - 1, 0);
  txt_rowDelStat.setValue("0");
  // gr_closeWrk.setColumnReadOnly("wrkNo", false);
};

//-------------------------------------------------------------------------
// 마감통제 행추가
//-------------------------------------------------------------------------
scwin.f_CloseControlAddRow = function () {
  ds_closeControl.insertRow();
  gr_closeControl.setFocusedCell(ds_closeControl.getRowCount() - 1, 0);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  ds_closeWrk.undoRow(ds_closeWrk.rowPosition); // ds_closeWrk.Undo(ds_closeWrk.rowPosition);
  txt_rowDelStat.setValue("2");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let msgArr = new Array(2);
  msgArr[0] = "마감관리코드";
  msgArr[1] = "7";

  // 마감통제 필수항목 체크  
  let ret = await $c.gus.cfValidate($p, [gr_closeControl]);
  if (!ret) {
    return false;
  }

  // 마감관리ID가 유효하지 않은데도 저장하는 경우
  scwin.vSaveType = txt_saveType.getValue(); // 저장타입

  // 선행마감작업이 마감작업과 동일한 경우
  var vPreWrkNo = ds_closeWrk.getCellData(ds_closeWrk.rowPosition, "precWrkNo"); //선행마감작업ID
  var vWrkNo = ds_closeWrk.getCellData(ds_closeWrk.rowPosition, "wrkNo"); //마감작업ID

  if (vPreWrkNo.trimAll() != "" && vWrkNo.trimAll() != "") {
    if (vPreWrkNo == vWrkNo) {
      $c.win.alert($p, "선행마감작업번호가 마감작업과 동일합니다.");
      return false;
    }
  }

  //변경한 데이터가 있는지 체크한다. 	
  if (ds_closeWrk.getModifiedIndex().length == false && ds_closeControl.getModifiedIndex().length == false) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let messageStr = "저장하시겠습니까?";
  let returnVal = await $c.win.confirm($p, messageStr);
  if (returnVal) {
    scwin.pos_closeWrk = ds_closeWrk.rowPosition;
    await $c.sbm.execute($p, sbm_tr_closeWrk);
  }
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------
scwin.bytelength = function (bstr) {
  let len = bstr.length;
  for (let ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substr(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_closeWrk.getTotalRow();
  let sheetTitle = "";
  sheetTitle = "마감작업리스트";
  if (totCnt != 0) {
    cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      // cfGridToExcel(grid, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
      const grdObj = gr_closeWrk; // to-do
      const infoArr = [];
      const options = {
        fileName: sheetTitle + ".xlsx",
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: "마감작업리스트"
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel1 = async function (varGrNm) {
  let totCnt = ds_closeControl.getTotalRow();
  let sheetTitle = "";
  sheetTitle = "마감통제리스트";
  if (totCnt != 0) {
    cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      // cfGridToExcel(grid, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
      const grdObj = gr_closeControl; // to-do
      const infoArr = [];
      const options = {
        fileName: sheetTitle + ".xlsx",
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: "마감통제리스트"
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

// <!-- 마감작업 PopUp 호출  -->
scwin.OnPopup = function (rowIndex, colId, nowValue) {
  if (colId == "precWrkNm") {
    // 선행작업명
    scwin.f_openDeptPopUp();
  }
};

// to-do
//-------------------------------------------------------------------------
// 마감작업팝업
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp = function () {
  var vTitle = "마감작업정보, 작업번호, 작업명";
  var rtnList = new Array();
  rtnList = udc_precWrkNm.cfCommonPopUp(scwin.udc_precWrkNm_callback, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  사업자등록번호
};
scwin.udc_precWrkNm_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    var vCloseWrkRowPosition = ds_closeWrk.rowPosition;

    // 선행마감작업 
    ds_closeWrk.setCellData(vCloseWrkRowPosition, "precWrkNo", rtnList[0]); //선행마감작업ID
    ds_closeWrk.setCellData(vCloseWrkRowPosition, "precWrkNm", rtnList[1]); //선행마감작업명 
  }
};
scwin.resizeHeight = function (fr) {
  fr = typeof fr == 'string' ? document.getElementById(fr) : fr;
  fr.style.height = closeLogIframe.document.body.scrollHeight;
};

// 회사 입력 팝업 돋보기 클릭이벤트
scwin.udc_companyPopup_onclickEvent = async function (e) {
  await scwin.f_PopUpCompanyInfo();
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_companyPopup.cfCommonPopUpAsync(async rtnList => {
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_coCd.setValue(rtnList[0]); // 코드
      txt_coNm.setValue(rtnList[5]); // 회사명 
      // ed_coCd.hidVal = rtnList[0];  // 히든값
      txtCoClsCd.setValue(rtnList[1]); // 회사구분     
    } else {
      ed_coCd.setValue("");
      txt_coNm.setValue("");
      // ed_coCd.setValue = "";
      txtCoClsCd.setValue("");
    }
    if (txtCoClsCd.getValue() > '0') {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
  }, ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

// <!-- 마감관리 등록이 성공했을 경우 -->
// <!-- 저장 TR -->     
scwin.sbm_tr_closeWrk_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) {
    scwin.failSave = "Y";
    await scwin.f_Retrieve();
    return;
  }
  var vSaveType = txt_saveType.getValue(); // 저장타입

  if (vSaveType == "3") {
    // 마감관리 삭제인 경우
    $c.win.alert($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다	
  } else {
    // 마감관리 등록, 수정인 경우
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  }
  await scwin.f_Retrieve();
};

// 마감작업 조회완료
scwin.sbm_ds_closeWrk_submitdone = function (e) {
  let rowCnt = ds_closeWrk.getTotalRow();
  txt_countRow.setValue(rowCnt);

  //조회결과가 0인경우
  if (rowCnt == 0) {
    scwin.f_CloseControlRetrieve();
  }

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  // cfShowTotalRows(totalRows,rowCnt);
  totalRows.setValue(rowCnt);
  txt_retrieveYn.setValue("1");
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    qryCntn.focus();
  }
  // 마감작업 제일 위 행 선택하는 코드

  if (scwin.failSave == "Y") {
    // 저장 실패후 조회 focus
    let totalRow = gr_closeWrk.getTotalRow() - 1;
    gr_closeWrk.setFocusedCell(totalRow, "wrkNo", false);
    scwin.failSave = "";
  } else {
    gr_closeWrk.setFocusedCell(0, "wrkNo", true);
  }
};

// 마감통제 조회완료
scwin.sbm_closeControl_submitdone = function (e) {
  let rowCnt = gr_closeControl.getTotalRow();
  controlTotalRows.setValue(rowCnt);
  txt_controlCountRow.setValue(rowCnt);
  if (rowCnt == 0) {
    // closeLogIframe.location = "/ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml"; // 전환방법 확인필요 to-do
    // cfDisableBtn([b_Save]);
  } else if (rowCnt > 0) {
    gr_closeControl.setColumnReadOnly("closeYm", true);
    gr_closeControl.setColumnReadOnly("closeDd", true);
    gr_closeControl.setColumnReadOnly("mgntNo", true);
    gr_closeControl.setColumnReadOnly("wrkNo", true);
    $c.gus.cfEnableBtnOnly($p, [b_Save]);
  }
  // 마감통제 제일 위 행 선택하는 코드
  gr_closeControl.setFocusedCell(0, "closeYm", true);
  // gr_closeWrk.setFocusedCell(0, "wrkNo", true);
};

// 마감통제 조회
// for=ds_closeWrk event=OnRowPosChanged(row)
scwin.ds_closeWrk_onrowpositionchange = function (info) {
  // info = {oldRowIndex: null, newRowIndex:0} // info 뒤에 붙는 인자값
  let row = info.newRowIndex;
  var vRowCount = txt_countRow.getValue();
  if (row >= 0) {
    if (row >= vRowCount) {
      gr_closeWrk.setColumnReadOnly("wrkNo", false);
    } else {
      gr_closeWrk.setColumnReadOnly("wrkNo", true);
    }
    scwin.f_CloseControlRetrieve();
  }
};

// 마감로그 조회
scwin.ds_closeControl_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (row >= 0) {
    var vCoCd = ds_closeControl.getCellData(row, "coCd");
    var vCloseYm = ds_closeControl.getCellData(row, "closeYm");
    var vCloseDd = ds_closeControl.getCellData(row, "closeDd");
    var vWrkNo = ds_closeControl.getCellData(row, "wrkNo");
    var vMgntNo = ds_closeControl.getCellData(row, "mgntNo");
    var vCloseControlStatus = ds_closeControl.getCellData(row, "closePrgsStsCd"); // 마감통제상태
    scwin.vBfCloseControlStatus = vCloseControlStatus;

    // 아래 전환방법 확인 필요.
    // var vCondition = "?coCd=" + vCoCd +
    //                  "&closeYm=" + vCloseYm + 
    //                  "&closeDd=" + vCloseDd + 
    //                  "&wrkNo=" + vWrkNo + 
    //                  "&mgntNo=" + vMgntNo;

    // closeLogIframe.location = "/ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml" + vCondition;

    var obj = {
      "dataObject": {
        "type": "json",
        "name": "wframeParam",
        "data": {
          "coCd": vCoCd,
          "closeYm": vCloseYm,
          "closeDd": vCloseDd,
          "wrkNo": vWrkNo,
          "mgntNo": vMgntNo
        }
      }
    };
    let url = "/ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml";
    closeLogIframe.setSrc(url, obj);
  }
};

// 마감통제 상태 Combo 선택
// for=gr_closeControl event=OnCloseUp(row,colid)
scwin.gr_closeControl_oneditend = function (rowIndex, columnIndex, value) {
  var vCoCd = ds_closeControl.getCellData(rowIndex, "coCd"); // 마감통제 - 회사 
  var vCloseControlStatus = ds_closeControl.getCellData(rowIndex, "closePrgsStsCd"); // 마감통제상태
  var vCloseYm = ds_closeControl.getCellData(rowIndex, "closeYm"); // 마감연월
  var vCloseWrkNo = ds_closeControl.getCellData(rowIndex, "wrkNo"); // 마감작업번호 

  if (columnIndex == 4) {
    // colid -> columnIndex , closePrgsStsCd -> 4
    if (ed_coCd.getValue() == "000") {
      // 익스프레스 직원일 경우만 후행작업체크함
      if (scwin.vBfCloseControlStatus == "2") {
        // 마감통제상태가 마감완료인 경우
        arr = new Array();
        arr = cfAfterCloseInfo(vCloseYm, vCloseWrkNo); // 전환방법 확인 필요 to-do
        if (arr[0] > 0) {
          $c.win.alert($p, "후행마감작업이 완료되었습니다.\n\n " + arr[1]);
          ds_closeControl.undoRow(ds_closeControl.rowPosition); // Undo -> undoRow
          return false;
        }
      }
    }
    if (ed_coCd.getValue() != "000") {
      // 자회사 직원일 경우만 후행작업체크함
      arr = new Array();
      arr = cfAfterCloseInfo2(vCloseYm, vCloseWrkNo); // 전환방법 확인 필요 to-do
      if (arr[0] > 0) {
        $c.win.alert($p, "통합마감작업이 완료되었습니다.\n\n " + arr[1]);
        ds_closeControl.undoRow(ds_closeControl.rowPosition); // Undo -> undoRow
        return false;
      }
    }
  }
};

// 회사코드 입력시
scwin.udc_companyPopup_onblurCodeEvent = async function (e) {
  txt_coNm.setValue('');
  await scwin.f_PopUpCompanyInfo('T');
};
scwin.icon_delete_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'txt_coNm',style:'',mandatoryCode:'true',id:'udc_companyPopup','ev:onclickEvent':'scwin.udc_companyPopup_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyPopup_onblurCodeEvent',class:'',allowCharCode:'0-9',maxlengthCode:'3',objType:'data',objTypeCode:'data',objTypeName:'data',btnId:'img_company'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시스템구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lux_sys',style:'width: 150px;',submenuSize:'fixed',ref:'',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복운'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DKCT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'냉장창고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS400 정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DPCT(EIS)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천수출입통관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외부팩키지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AI'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사후관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BP&MB'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EZ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재무회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자금관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류에너지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GE'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'IL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널 운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'IN'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LBS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합물류공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통메세지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MG'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'OP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카홈페이지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RH'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TMC'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TN'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'qryStDt',style:'width: 100px;',dataType:'date',displayFormat:'yyyy/MM',maxlength:'6',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lux_qryCond',style:'width: 150px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선행작업번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'qryCntn',style:'width: 150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'icon_delete',style:'',type:'button','ev:onclick':'scwin.icon_delete_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'마감작업 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_closeWrk',gridDownFn:'scwin.f_runExcel',gridUpYn:'N',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_closeWrk',focusMode:'row',id:'gr_closeWrk',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',scrollByColumn:'false',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'시스템구분',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'선행작업번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'선행작업',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'작업번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'작업명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'마감주기',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sysCd',inputType:'select',removeBorderStyle:'false',width:'100',allOption:'',chooseOption:'',ref:'',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[00]전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[01]복운'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[02]DKCT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[03]냉장창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[04]AS400 정산'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[05]DPCT(EIS)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[06]택배'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[07]인천수출입통관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[AC]회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[AI]외부팩키지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AI'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[AS]사후관리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CM]공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CO]관리회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[DL]택배'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[DS]물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[EQ]통합정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[EZ]BP&MB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EZ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[FI]재무회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FI'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[FM]자금관리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[FS]정산'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[GE]물류에너지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'GE'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[IL]국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[IN]터미널 운영'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[JL]자회사물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LB]LBS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LO]통합물류공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[MG]공통메세지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[OP]운영'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'OP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PS]여객'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RC]렌터카관리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RH]렌터카홈페이지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[SA]자회사회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[SD]영업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SD'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TN]TMC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TP]3자물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TR]고속'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[ZZ]공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ZZ'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'precWrkNo',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'precWrkNm',inputType:'textImage',removeBorderStyle:'false',width:'100',imageClickFunction:'scwin.OnPopup',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeCycCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[D]일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[Y]년'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[M]월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[Q]분기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Q'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[H]반기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_Create',rowDelFunction:'scwin.f_Delete',gridID:'gr_closeWrk',rowAddUserAuth:'C',rowDelUserAuth:'D',btnDelYn:'N',cancelFunction:'scwin.f_Cancel'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'마감통제',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_closeControl',gridDownFn:'scwin.f_runExcel1',gridUpYn:'N',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_closeControl',focusMode:'row',id:'gr_closeControl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oneditend':'scwin.gr_closeControl_oneditend',rowStatusVisible:'true',gridName:'마감통제'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'마감년월',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'마감일',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'작업번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'관리번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'진행상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'작업수행IP',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'closeYm',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##',textAlign:'center',readOnly:'true',dateValidCheck:'true',class:'',mandatory:'true',maxLength:'6'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'closeDd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true',mandatory:'true',displayFormat:'##',maxLength:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mgntNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',readOnly:'true',mandatory:'true',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closePrgsStsCd',inputType:'select',style:'',textAlign:'left',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'진행중'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미마감'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'마감완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPfmIp',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'controlTotalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'N',style:'',gridID:'gr_closeControl',rowAddFunction:'scwin.f_CreateControl',rowAddUserAuth:'C',cancelFunction:'scwin.f_UndoControl'}}]}]}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'closeLogIframe',src:'/ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml',class:'row-gap-8'}},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:''},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveCloseWorkInfo',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_precWrkNm','ev:onclickEvent':'scwin.udc_precWrkNm_onclickEvent'}},{T:1,N:'xf:input',A:{id:'txt_eqModelCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_eqLupCond',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_eqClsCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_retrieveYn',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_saveType',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_eqModelCdValChk',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_rowDelStat',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_countRow',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_controlCountRow',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_modelCodeEqCls',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_modelCodeEqClss',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_modelCodeEqKnd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txtCoClsCd',style:'width:144px; height:21px; '}}]}]}]}]}]}]})