/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_09_01b.xml 45052 622f4b3f20432ee553af1bd8ec3ef556eac14738dd57bb4d358404a9654e30e4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_condition',repeatNode:'map',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'cvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'wrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'qryStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'qryEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'nonCvsslPlanYn'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_condition2',repeatNode:'map',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'wrkDt'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkDt',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'코드',id:'wrkDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'명명',id:'wrkDt'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dailyWrkPlanList',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'cvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'vsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'vsslNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'shpCoPortcnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'berthCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'berthNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'impExpClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'ioDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'commNm'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name12',id:'blQty'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name13',id:'blWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name14',id:'blCbm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'stvWrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'wrkDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'shiftClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'st'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'end'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name20',id:'planQty'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name21',id:'planWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name22',id:'planCbm'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name23',id:'planStaffCnt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name24',id:'planEqCnt'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name31',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rmk',saveRemovedData:'true',initRowPosition:'0','ev:ondataload':'scwin.ds_rmk_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'wrkDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'rmk'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_safeRmk',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'safeRmk'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_email',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'wrkDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'emailFrom'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'empNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'filePath'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'lobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'lobranNm'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_dailyWrkPlanList',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.stvwrkplan.RetrieveDailyWrkPlanCMD.do',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_dailyWrkPlanList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_dailyWrkPlanList","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_dailyWrkPlanRmk',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.stvwrkplan.RetrieveDailyWrkPlanRmkCMD.do',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_rmk","key":"OUT_DS1"},{"id":"ds_safeRmk","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_rmk","key":"OUT_DS1"},{"id":"ds_safeRmk","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_dailyWrkPlanRmk_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_saveWrkPlanRmk',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.stvwrkplan.SaveDailyWrkPlanRmkCMD.do',ref:'data:json,{"id":"ds_rmk","key":"IN_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveWrkPlanRmkPeriod',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.stvwrkplan.RetrieveDailyWrkPlanRmkPeriodCMD.do',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkDt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkDt","key":"OUT_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_email',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.stvwrkplan.SendDailyWrkPlanEmailCMD.do',ref:'data:json,{"id":"ds_email","key":"IN_DS1"}'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_saveWrkPlanSafeRmk',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.stvwrkplan.SaveDailyWrkPlanSafeRmkCMD.do',ref:'data:json,{"id":"ds_safeRmk","key":"IN_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_ds_lobran',encoding:'UTF-8',mediatype:'application/json',action:'/ds.co.RetreiveLoBranCMD.do',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.nowDt = $c.date.getServerDateTime($p);
scwin.strMonthDt = $c.date.getDateAddMonthDirection($p, scwin.nowDt, 0, "F");
scwin.nextDt = $c.date.addDate($p, scwin.nowDt, 1);
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.email = $c.data.getMemInfo($p, "email");
scwin.empNm = $c.data.getMemInfo($p, "empNm");
scwin.onpageload = async function () {
  let e = await $c.sbm.execute($p, sbm_ds_lobran);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_ds_lobran_submitdone(e);
  }
};
scwin.onUdcCompleted = function () {
  ed_qryStDt.setValue(scwin.nextDt);
  ed_qryEndDt.setValue(scwin.nextDt);
  ica_printDt.setValue(scwin.nextDt);
  ed_emailFrom.setValue(scwin.email);

  // ds_lobran.Reset(); // 점소 조회

  cbx_nonCvsslPlanYn.setValue("Y");
  ds_condition.removeAll();
  ds_wrkDt.removeAll();
  ds_condition2.removeAll();
  ds_condition2.insertRow();
  ds_rmk.removeAll();
  ds_email.removeAll();
  ds_email.insertRow();
  ds_safeRmk.removeAll();
  acb_lobran.focus();
  cbx_previewCheck.setValue("Y");
  cbx_printCheck.setValue("Y");
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
// 기간별본선하역실적조회
scwin.f_qeryList = async function () {
  if (ed_qryStDt.getValue() > ed_qryEndDt.getValue()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_qryEndDt.focus();
    return;
  }
  ds_condition.removeAll();
  var rowIndex = ds_condition.insertRow();
  ds_condition.setCellData(rowIndex, "lobranCd", acb_lobran.getValue()); // 점소
  ds_condition.setCellData(rowIndex, "cvsslMgntNo", ed_cvsslMgntNo.getValue()); // 본선관리번호
  ds_condition.setCellData(rowIndex, "wrkPlCd", ed_wrkPlCd.getValue()); // 선박
  ds_condition.setCellData(rowIndex, "qryStDt", ed_qryStDt.getValue()); // 조회기간 시작일
  ds_condition.setCellData(rowIndex, "qryEndDt", ed_qryEndDt.getValue()); // 조회기간 완료일

  if (cbx_nonCvsslPlanYn.getValue()) {
    ds_condition.setCellData(rowIndex, "nonCvsslPlanYn", "Y");
  } else {
    ds_condition.setCellData(rowIndex, "nonCvsslPlanYn", "N");
  }
  let e = await $c.sbm.execute($p, sbm_dailyWrkPlanList);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_dailyWrkPlanList_submitdone(e);
  }
};

// 일자별 특이사항 조회
scwin.f_retrieveRmk = async function () {
  ds_condition2.setCellData(0, "lobranCd", acb_lobran.getValue()); // 점소
  ds_condition2.setCellData(0, "wrkDt", acb_wrkDt.getValue()); // 본선관리번호

  let e = await $c.sbm.execute($p, sbm_dailyWrkPlanRmk);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_dailyWrkPlanRmk_submitdone(e);
  }
};

// 일자별 특이사항 저장
scwin.f_save = async function () {
  let saveChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (saveChk) {
    ds_rmk.setCellData(0, "rmk", txt_rmk.getValue());
    let e = await $c.sbm.execute($p, sbm_saveWrkPlanRmk);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_saveWrkPlanRmk_submitdone(e);
    }
  }
};

// 안전문구 저장
scwin.f_saveSafeRmk = async function () {
  ds_safeRmk.setCellData(0, "lobranCd", acb_lobran.getValue()); // 점소

  let saveChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (saveChk) {
    ds_safeRmk.setCellData(0, "safeRmk", txt_safeRmk.getValue());
    let e = await $c.sbm.execute($p, sbm_saveWrkPlanSafeRmk);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_saveWrkPlanSafeRmk_submitdone(e);
    }
  }
};

// 일자별 특이사항 일자 조회
scwin.f_retrievePeriod = async function () {
  ds_wrkDt.removeAll();
  ds_condition.setCellData(0, "qryStDt", ed_qryStDt.getValue()); // 조회기간 시작일
  ds_condition.setCellData(0, "qryEndDt", ed_qryEndDt.getValue()); // 조회기간 완료일

  let e = await $c.sbm.execute($p, sbm_retrieveWrkPlanRmkPeriod);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieveWrkPlanRmkPeriod_submitdone(e);
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // 1. 보이는 컬럼 개수를 담을 변수 초기화
  var visibleColCount = 0;
  var totalColCount = gr_dailyWrkPlanList.getColumnCount(); // 전체 컬럼 수

  // 2. 루프를 돌며 숨겨지지 않은(Visible) 컬럼만 카운트
  for (var i = 0; i < totalColCount; i++) {
    if (gr_dailyWrkPlanList.getColumnVisible(i)) {
      visibleColCount++;
    }
  }
  var colSpanValue = visibleColCount;
  var vDay = "점소 : " + acb_lobran.getText(acb_lobran.getValue()) + " : " + "본선 : " + ed_cvsslMgntNo.getValue() + " : " + "작업장 : " + ed_wrkPlNm.getValue() + " : " + "조회기간 : " + ed_qryStDt.getValue() + " ~ " + ed_qryEndDt.getValue();
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colSpanValue,
    text: "일일작업계획현황",
    textAlign: "center",
    fontName: "돋움체",
    fontSize: 16,
    bgColor: "#ffffff",
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colSpanValue,
    text: vDay.replace(/:/g, '|').replace(/;/g, ''),
    textAlign: "left",
    fontName: "굴림체",
    fontSize: 10,
    bgColor: "#ffffff",
    drawBorder: false
  }];
  var options = {
    fileName: "일일작업계획현황" + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "일일작업계획현황",
    type: 4 + 8 + 16,
    startRowIndex: 3
  };
  $c.data.downloadGridViewExcel($p, gr_dailyWrkPlanList, options, infoArr);
};

// 조회조기 필드 Clear
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, []);
  acb_lobran.setValue(scwin.loUpperLobranCd);
  ed_qryStDt.setValue(scwin.strMonthDt);
  ed_qryEndDt.setValue(scwin.nowDt); //일자 setting 
  acb_lobran.focus();
};

// 본선관리번호검색 팝업창 띄우기
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); // 본선관리번호
  args[1] = ""; //수출입구분코드

  var opts = {
    id: "smpPop",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1100,
    height: 630,
    title: "본선관리번호검색팝업"
  };
  var rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opts, args);
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]); // 본선관리번호
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  switch (disGubun) {
    case 1:
      //품명코드팝업
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo");
      rtnList = await udc_wrkPlCd.cfCommonPopUpAsync(scwin.udc_wrkPlCd_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm); // 작업장코드, 작업장명					  				  									
      break;
    default:
      break;
  }
};
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
  }
};
scwin.f_print = async function () {
  if (ica_printDt.getValue() == null || ica_printDt.getValue() == "") {
    $c.win.alert($p, "작업계획서발행시 일자는 필수 입니다.");
    ica_printDt.focus();
    return;
  }
  if (acb_lobran.getValue() == "6AA") {
    const data = {
      reportName: "/ds/op/wrkplan/stvwrkplan/op_204_09_03.ozr",
      odiName: "op_204_09_03",
      odiParam: {
        printDt: ica_printDt.getValue(),
        lobranCd: acb_lobran.getValue()
      },
      viewerParam: {
        useprogressbar: false
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  } else {
    const data = {
      reportName: "/ds/op/wrkplan/stvwrkplan/op_204_09_02.ozr",
      odiName: "op_204_09_01",
      odiParam: {
        printDt: ica_printDt.getValue(),
        lobranCd: acb_lobran.getValue()
      },
      viewerParam: {
        useprogressbar: false
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
};
scwin.openBatchOzReport = function (data) {
  const opts = {
    viewerMode: 'export',
    exportMode: 'view',
    exportConfirmsave: 'false',
    //viewerMode:'print',
    printMode: 'silent',
    printCopies: "1",
    printSize: 'A5',
    exportFilename: `StvPlan-(${ica_printDt.getValue()})`,
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf'
  };
  $c.ext.openBatchOzReport($p, data, opts);
};

// 이메일 전송
scwin.f_emailSend = async function () {
  debugger;
  if (ica_printDt.getValue() == null || ica_printDt.getValue() == "") {
    $c.win.alert($p, "Email 전송 시 일자는 필수 입니다.");
    ica_printDt.focus();
    return;
  }
  let data = {};
  if (acb_lobran.getValue() == "6AA") {
    data = {
      reportName: "/ds/op/wrkplan/stvwrkplan/op_204_09_03.ozr",
      odiName: "op_204_09_03",
      odiParam: {
        printDt: ica_printDt.getValue(),
        lobranCd: acb_lobran.getValue()
      },
      formParam: {},
      viewerParam: {
        "useprogressbar": false,
        "viewer": 100
      }
    };
  } else {
    data = {
      reportName: "/ds/op/wrkplan/stvwrkplan/op_204_09_02.ozr",
      odiName: "op_204_09_01",
      odiParam: {
        printDt: ica_printDt.getValue(),
        lobranCd: acb_lobran.getValue()
      },
      formParam: {},
      viewerParam: {
        "useprogressbar": false,
        "viewer": 100
      }
    };
  }
  let saveOptions = {
    exportFilename: `StvPlan-(${ica_printDt.getValue()})`,
    exportPath: "C:\\OZExport",
    exportFormat: "pdf",
    exportConfirmsave: "false",
    exportMode: "silent"
  };
  $c.ext.downloadOzReport($p, data, saveOptions);
  const popupParam = {
    popupTitle: "첨부파일 등록",
    fileNameLabel: "파일명",
    fileName: "C:/OZExport 폴더에서 작업계획서를 선택하세요.",
    //     filePath: scwin._fileSavePath,
    //    fileSize: scwin._txt_fileSiz,
    subDir: "/ds/op/wrkplan/stvwrkplan"
  };
  const popupOption = {
    id: "popEq3300104bSingleFile",
    popupName: "하역작업계획 파일첨부",
    type: "browserPopup",
    width: 900,
    height: 500,
    modal: true,
    resizable: "yes",
    scroll: "yes",
    status: "no"
  };
  let resultList = await $c.win.openPopup($p, "/ui/cm/zz/commonSingleFilePopup.xml", popupOption, popupParam);
  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      ds_email.setCellData(0, "filePath", `/wasnfs/fileupload/${resultList[0]}`);
      if (await $c.win.confirm($p, "메일을 전송하시겠습니까?")) {
        ds_email.setCellData(0, "lobranCd", acb_lobran.getValue());
        ds_email.setCellData(0, "wrkDt", ica_printDt.getValue());
        ds_email.setCellData(0, "emailFrom", ed_emailFrom.getValue());
        ds_email.setCellData(0, "empNm", scwin.empNm);
        const e = await $c.sbm.execute($p, sbm_email);
        if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
          $c.win.alert($p, "성공적으로 저장하였습니다.");
        }
      }
    }
  }
};
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

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 계약거래처

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_ds_lobran_submitdone = function (e) {
  if (ds_lobran.getRowCount() > 0) {
    let sort_options = {};
    sort_options.sortIndex = "lobranCdm lobranNm";
    sort_options.sortOrder = "1 1"; // 1: 오름차순
    ds_lobran.multisort(sort_options);
  }
  acb_lobran.setValue(scwin.loUpperLobranCd);
  acb_lobran.focus();
};
scwin.sbm_dailyWrkPlanList_submitdone = async function (e) {
  if (ds_dailyWrkPlanList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "[일일작업계획] " + MSG_CM_ERR_003);
    return false;
  } else {
    ds_dailyWrkPlanList.setRowPosition(0);
    let sort_options = {};
    sort_options.sortIndex = "cvsslNm arrvlportDt";
    sort_options.sortOrder = "1 1"; // 1: 오름차순
    ds_dailyWrkPlanList.multisort(sort_options);
  }
  scwin.f_retrievePeriod();
  totalRows.setValue(ds_dailyWrkPlanList.getRowCount());
};
scwin.sbm_saveWrkPlanRmk_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다." 
  scwin.f_retrieveRmk();
};
scwin.sbm_saveWrkPlanSafeRmk_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
  scwin.f_retrieveRmk();
};
scwin.sbm_retrieveWrkPlanRmkPeriod_submitdone = function (e) {
  if (ds_wrkDt.getRowCount() > 0) {
    scwin.f_retrieveRmk();
  }
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 조회 버튼 클릭 이벤트 
scwin.btn_search_onclick = function (e) {
  scwin.f_qeryList();
};

// 초기화 버튼 클릭 이벤트 
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 본선관리번호 버튼 클릭 이벤트
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp(1);
};

// 작업장 버튼 클릭 이벤트
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};

// 일자별 특이사항 버튼 클릭 이벤트
scwin.btn_save1_onclick = function (e) {
  scwin.f_save();
};

// 안전문구 버튼 클릭 이벤트
scwin.btn_save2_onclick = function (e) {
  scwin.f_saveSafeRmk();
};

// 작업계획서발행 버튼 클릭 이벤트
scwin.btn_ozprint_onclick = function (e) {
  scwin.f_print();
};

// Email전송 버튼 클릭 이벤트
scwin.btn_email_onclick = async function (e) {
  scwin.f_emailSend();
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
scwin.acb_wrkDt_onchange = function (info) {
  scwin.f_retrieveRmk();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 작업장 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1);
};

//-------------------------------------------------------------------------
// Event onviewchange
//-------------------------------------------------------------------------
// 작업장 onviewchange 이벤트 발생시
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------
scwin.ds_rmk_ondataload = function () {
  if (ds_rmk.getRowCount() == 0) {
    ds_rmk.insertRow(0);
    ds_rmk.setCellData(0, "lobranCd", acb_lobran.getValue());
    ds_rmk.setCellData(0, "wrkDt", acb_wrkDt.getValue());
  }
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_dailyWrkPlanList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    if (columnId == "cvsslMgntNo") {
      if (ds_dailyWrkPlanList.getCellData(rowIndex, "cvsslMgntNo").length == 8) {
        // var strPath = "/ds/op/wrkplan/stvwrkplan/op_204_09_02b.jsp?cvsslMgntNo=" 
        //                                                 + ds_dailyWrkPlanList.getCellData(rowIndex,"cvsslMgntNo"); 	
        // cfTabMenuUpdate( strPath , "본선일일작업계획등록");

        var menuNm = "본선일일작업계획등록";
        var url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_09_02b.xml";
        var pgmId = "op_204_09_02b.xml";
        var paramObj = {};
        paramObj.cvsslMgntNo = ds_dailyWrkPlanList.getCellData(rowIndex, "cvsslMgntNo");
        $c.win.openMenu($p, menuNm, url, pgmId, paramObj);
      } else {
        // var strPath = "/ds/op/wrkplan/stvwrkplan/op_204_09_03b.jsp?stDt="  + ed_qryStDt.text +
        //                                                         "&endDt=" + ed_qryEndDt.text + 
        //                                                         "&wrkPlCd=" + ds_dailyWrkPlanList.getCellData(rowIndex,"cvsslMgntNo"); 	
        // cfTabMenuUpdate( strPath , "작업장계획등록"); 

        var menuNm = "작업장계획등록";
        var url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_09_03b.xml";
        var pgmId = "op_204_09_03b.xml";
        var paramObj = {};
        paramObj.stDt = ed_qryStDt.getValue();
        paramObj.endDt = ed_qryEndDt.getValue();
        paramObj.wrkPlCd = ds_dailyWrkPlanList.getCellData(rowIndex, "cvsslMgntNo");
        $c.win.openMenu($p, menuNm, url, pgmId, paramObj);
      }
    }
  }
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width: 200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 100px;',maxlength:'8',objType:'data','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPlCd',btnId:'btn_wrkPlCd',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',objTypeCode:'Data',maxlengthCode:'5',objTypeName:'data',maxlengthName:'50',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_nonCvsslPlanYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수립본선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'일일작업 계획현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_dailyWrkPlanList',gridUpYn:'N',btnUser:'Y',templateYn:'N',gridDownYn:'Y',gridDownFn:'scwin.f_gridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_dailyWrkPlanList',scrollByColumn:'false',style:'',id:'gr_dailyWrkPlanList',visibleRowNum:'9',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncelldblclick':'scwin.gr_dailyWrkPlanList_oncelldblclick',fixedColumn:'3',fixedColumnNoMove:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'본선번호<br/>(작업장)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',value:'수출입<br/>구분',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'본선명<br/>(작업장명)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'항차',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column21',value:'수출입<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'90',inputType:'text',id:'column19',value:'선석',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column17',value:'수출입<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column13',value:'입항일자<br/>(출항일자)',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column15',value:'수출입<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column65',value:'수출입<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column61',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'3',width:'210',inputType:'text',id:'column57',value:'BL정보',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'10',width:'700',inputType:'text',id:'column41',value:'계획정보',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column50',value:'CBM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'수출입구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'계획일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column70',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column74',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column78',value:'종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column82',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column98',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column94',value:'중량(톤)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column86',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'중기',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'cvsslMgntNo',blockSelect:'false',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'vsslNm',class:'underline'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'vsslCd',blockSelect:'false',displayMode:'label',readOnly:'true',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'vsslNm',blockSelect:'false',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'70',inputType:'text',id:'shpCoPortcnt',blockSelect:'false',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'berthCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'90',inputType:'text',id:'berthNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'impExpClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioDt',displayMode:'label',readOnly:'true',displayFormat:'##/##'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'mrn',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'commNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'blQty',displayMode:'label',displayFormat:'#,##0',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'blWt',displayMode:'label',displayFormat:'#,##0.000',readOnly:'true',dataType:'float'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'blCbm',displayMode:'label',readOnly:'true',hidden:'true',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkDt',displayMode:'label',readOnly:'true',displayFormat:'##/##'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'shiftClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'st',displayMode:'label',readOnly:'true',displayFormat:'##/## ##:##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'end',displayMode:'label',readOnly:'true',displayFormat:'##/## ##:##'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'planQty',displayMode:'label',displayFormat:'#,##0',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'planWt',displayMode:'label',displayFormat:'#,##0.000',readOnly:'true',dataType:'float'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'planCbm',displayMode:'label',readOnly:'true',hidden:'true',displayFormat:'#,##0.000',dataType:'float'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'planStaffCnt',displayMode:'label',displayFormat:'#,##0',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'planEqCnt',displayMode:'label',displayFormat:'#,##0',readOnly:'true',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column60',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'blQty\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column56',displayMode:'label',displayFormat:'#,##0.000',dataType:'float',expression:'sum(\'blWt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column52',displayMode:'label',expression:'sum(\'blCbm\')',displayFormat:'#,##0.000',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column84',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'planQty\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column100',displayMode:'label',displayFormat:'#,##0.000',dataType:'float',expression:'sum(\'planWt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column96',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',expression:'sum(\'planCbm\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column88',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'planStaffCnt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column92',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'planEqCnt\')'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox  flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일자별 특이사항',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkDt',search:'start',style:'width: 150px;',submenuSize:'auto','ev:onchange':'scwin.acb_wrkDt_onchange',allOption:'',chooseOption:'',ref:'',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkDt'},E:[{T:1,N:'w2:label',A:{ref:'wrkDt'}},{T:1,N:'w2:value',A:{ref:'wrkDt'}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save1',label:'저장',type:'button',class:'btn pt-blue','ev:onclick':'scwin.btn_save1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_rmk',style:'height:100px;',objType:'data',ref:'data:ds_rmk.rmk'}},{T:1,N:'xf:group',A:{id:'',class:'btnbox'}}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'안전문구',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn pt-blue',id:'btn_save2',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save2_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_safeRmk',style:'height:100px;',objType:'data'}},{T:1,N:'xf:group',A:{class:'btnbox',id:''}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_printDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.btn_ozprint_onclick',id:'btn_ozprint',label:'저장',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업계획서발행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Email From',class:''}},{T:1,N:'xf:input',A:{style:'width: 250px;',id:'ed_emailFrom',placeholder:'',class:'',maxlength:'30',objType:'data'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_email',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_email_onclick',objType:'bCreate',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Email전송'}]}]}]}]}]}]}]}]}]}]})