/*amd /ui/ds/op/stvwrk/op_210_03_02b.xml 89406 b1ca08cc8f2008ee8d081a03446f5510502ff278f3d20f93072d2d5960f0ebda */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'입항예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'치프포맨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'duplCnt',name:'중복',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'본선/',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'설천',dataType:'number'}},{T:1,N:'w2:column',A:{id:'singleCnt',name:'단독',dataType:'number'}},{T:1,N:'w2:column',A:{id:'moveCnt',name:'Gang',dataType:'number'}},{T:1,N:'w2:column',A:{id:'emerCnt',name:'긴급',dataType:'number'}},{T:1,N:'w2:column',A:{id:'extdCnt',name:'연장',dataType:'number'}},{T:1,N:'w2:column',A:{id:'waitingCnt',name:'대기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSeq',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlTskCntnCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'name31',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wkrStp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workTime',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'duplCnt',name:'중복',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'본선/',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'설천',dataType:'text'}},{T:1,N:'w2:column',A:{id:'singleCnt',name:'단독',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveCnt',name:'Gang',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emerCnt',name:'긴급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdCnt',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitingCnt',name:'대기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSeq',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlTskCntnCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'name31',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvTempWrkResultListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvTempWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ds.op.stvwrk.ConfirmStvStaffWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_03_02b 
// 이름     : 상용직근태실적등록
// 경로     : 물류/하역(인천)/실적/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-03-03
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  // 물류 점소 코드
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd");
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vwrkStDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)

  scwin.v_workClsCd = "";
  scwin.bOnPopUp = false;
  const codeOptions = [{
    grpCd: "OP160",
    compID: "acb_occptypeCd,gr_wrkList:occptypeCd",
    opt: {
      "range": "1,1"
    }
  }, {
    grpCd: "OP161",
    compID: "acb_dtlOccptypeCd,gr_wrkList:dtlOccptypeCd",
    opt: {
      "range": "1,1"
    }
  },
  //   { grpCd : "OP160", compID : "gr_wrkList:occptypeCd"},
  //   { grpCd : "OP161", compID : "gr_wrkList:dtlOccptypeCd"},
  {
    grpCd: "OP268",
    compID: "gr_wrkList:occpgrdCd"
  }, {
    grpCd: "OP117",
    compID: "gr_wrkList:shiftClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallBack);
};
scwin.commonCodeCallBack = async function () {
  acb_occptypeCd.addItem("전체", "", "", 0);
  acb_occptypeCd.setSelectedIndex(0);
  acb_dtlOccptypeCd.addItem("전체", "", "", 0);
  acb_dtlOccptypeCd.setSelectedIndex(0);
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;
  scwin.f_SetDefaultData();
  $c.gus.cfDisableObjects($p, [acb_occptypeCd, acb_dtlOccptypeCd]);
  $c.gus.cfDisableObjects($p, [ed_inDay, ed_inNight, ed_northDay, ed_northNight]);

  // $p.setTimeout(function() {
  //     acb_lobranCd.setValue("4AA");
  //     ica_wrkStDt.setValue("20170114");
  // }, {"delay":150});
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  $p.setTimeout(function () {
    $c.data.setPopupTitle($p, "상용직 실적등록");
  }, {
    "delay": 150
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkStDt.setValue(scwin.vwrkStDt); // 입항예정일자 from	

  acb_lobranCd.setValue(scwin.lobranCd);
  acb_occptypeCd.setValue("01");
  acb_dtlOccptypeCd.setValue("17");
  acb_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ds_condition.set("gubun", "1");
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ica_wrkStDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var modifyRowCnt = ds_wrkList.getModifiedIndex().length;
  if (modifyRowCnt > 0) {
    //if (!await $c.gus.cfValidate([gr_wrkList]) ) return;		

    if (!(await scwin.f_checkVacationDate())) {
      return;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상용직 실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function (gbn) {
  var row = "";
  switch (gbn) {
    case '1':
      var rowIndex = ds_wrkList.insertRow();
      ds_wrkList.setRowPosition(rowIndex);
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workClsCd", "A");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "duplCnt", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "staffNm", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "occpgrdCd", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "stvWrkIndictNo", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "wrkPlNm", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "shiftClsCd", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "staffNo", "#FBCED4");
      gr_wrkList.setFocusedCell(rowIndex, 0);
      break;
    case '2':
      var row = ds_wrkList.getRowPosition();
      var rowIndex = ds_wrkList.insertRow();
      ds_wrkList.setRowPosition(rowIndex);
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "stvWrkIndictNo", ds_wrkList.getCellData(row, "stvWrkIndictNo"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "wrkPlNm", ds_wrkList.getCellData(row, "wrkPlNm"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "shiftClsCd", ds_wrkList.getCellData(row, "shiftClsCd"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStDt", ds_wrkList.getCellData(row, "workStDt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", ds_wrkList.getCellData(row, "workStHh"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndDt", ds_wrkList.getCellData(row, "workEndDt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndHh", ds_wrkList.getCellData(row, "workEndHh"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workClsCd", ds_wrkList.getCellData(row, "workClsCd"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "weatherCnt", ds_wrkList.getCellData(row, "weatherCnt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "singleCnt", ds_wrkList.getCellData(row, "singleCnt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "moveCnt", ds_wrkList.getCellData(row, "moveCnt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "emerCnt", ds_wrkList.getCellData(row, "emerCnt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "extdCnt", ds_wrkList.getCellData(row, "extdCnt"));
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "waitingCnt", ds_wrkList.getCellData(row, "waitingCnt"));
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "duplCnt", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "staffNm", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "occpgrdCd", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "stvWrkIndictNo", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "wrkPlNm", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "shiftClsCd", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(ds_wrkList.getRowPosition(), "staffNo", "#FBCED4");
      gr_wrkList.setFocusedCell(rowIndex, 0);
      break;
  }
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_DeleteRow = function (gbn) {
  switch (gbn) {
    case '1':
      var row = ds_wrkList.getRowPosition();
      if (ds_wrkList.getRowStatus(row) == "C") {
        ds_wrkList.removeRow(row);
      } else {
        ds_wrkList.deleteRow(row);
        gr_wrkList.setFocusedCell(row, 0);
      }
      break;
    case '2':
      for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
        if (ds_wrkList.getRowStatus(i) == "C") {
          if (ds_wrkList.getCellData(i, "chk") == "T") {
            ds_wrkList.removeRow(i);
          }
        } else {
          if (ds_wrkList.getCellData(i, "chk") == "T") {
            ds_wrkList.deleteRow(i);
            gr_wrkList.setFocusedCell(i, 0);
          }
        }
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 선택 취소
//------------------------------------------------------------------------- 
scwin.f_CancelRow = function (gbn) {
  switch (gbn) {
    case '1':
      for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          ds_wrkList.setCellData(i, "chk", "F");
        }
      }
      break;
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // Title
  // argGrid.SetExcelTitle(0, "");
  // argGrid.SetExcelTitle(1,"value:" + argTitle + ";" // 표시할 타이틀
  //                       + "font-face:'돋움체';"      // 폰트
  //                       + "font-size:16pt;"         // 폰트 크기
  //                       + "font-color:black;"       // 폰트 색깔
  //                       + "bgcolor:#ffffff;"        // 배경 색깔
  //                       + "align:center;"           // 정렬
  //                       + "line-color:white;"       // 타이틀 부분 테두리선 색깔
  //                       + "line-width:0pt;"         // 타이틀 테두리선 굵기
  //                       + "skiprow:1;");            // 타이틀 다음 떼는 로우 수

  // 검색조건
  var vDay = "점소 | " + acb_lobranCd.getText(true) + " | " + "근무일자 | " + ica_wrkStDt.getValue();
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  // cfGridToExcel(argGrid, argTitle, argTitle+".xls", 4+8+16);

  var argGridTotalCol = 0;
  for (var i = 0; i < argGrid.getTotalCol(); i++) {
    if (argGrid.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: argTitle,
    textAlign: "center",
    fontSize: "24",
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: vDay,
    textAlign: "left"
    // , fontSize    : "12"
    ,

    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: argTitle + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: argTitle,
    type: "1",
    startRowIndex: 3
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var arrParam = new Array();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = acb_lobranCd.getValue(); //점소코드
      arrParam[3] = acb_lobranCd.getText(true); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = acb_dtlOccptypeCd.getValue(); //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ica_wrkStDt.getValue(); //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      // rtnList = window.showModalDialog("/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.jsp", arrParam, "dialogHeight:450px; dialogWidth:530px; resizable=no; help:no; status:no; center=true; "); 	
      let win_url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
      let opts = {
        id: "Pop",
        popupName: "인력검색",
        modal: true,
        type: "browserPopup",
        width: 1000,
        height: 600,
        title: "인력검색"
      };
      var rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        ed_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(''); //사원코드
        ed_staffNm.setValue(''); //사원명
      }
      break;
    case 2:
      var pCode = "P";
      var pName = scwin.vCurDate;
      var pWrkIndictNo = ed_stvWrkIndictNo.getValue();
      var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null) {
        ed_stvWrkIndictNo.setValue(rtnList[0]);
      } else {
        ed_stvWrkIndictNo.setValue("");
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------  
scwin.f_openGridCommonPopUp = function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건
  var pCode = "";
  var pName = "";
  var arrParam = new Array();
  var sWinCloseTF = pClose == null ? "T" : pClose;
  switch (gubun) {
    case 1:
      //정규직			
      pCode = ds_wrkList.getCellData(row, "staffNo");
      pName = "";
      pWhere = acb_lobranCd.getValue() + ',' + ica_wrkStDt.getValue();
      udc_grdPopup.setSelectId('retrieveStvArrangementFulltimeManList');
      udc_grdPopup.cfCommonPopUp(function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", rtnList[0]);
          ds_wrkList.setCellData(row, "staffNm", rtnList[1]);
          ds_wrkList.setCellData(row, "occpgrdCd", rtnList[2]);
          ds_wrkList.setCellData(row, "occptypeCd", rtnList[4]);
          ds_wrkList.setCellData(row, "dtlOccptypeCd", rtnList[6]);
          //ds_wrkList.setCellData(row, "yestWrkDt", rtnList[8]);	
          ds_wrkList.setCellData(row, "wrkPlClsCd", rtnList[8]);
        } else {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
          ds_wrkList.setCellData(row, "yestWrkDt", "");
          ds_wrkList.setCellData(row, "wrkPlClsCd", "");
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '9' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종,소속' // Title순서	
      , '70,70,70,70,50,70,50,80,80' // 보여주는 각 컬럼들의 폭	
      , '5,7,10' // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //정규직			
      pCode = "";
      pName = ds_wrkList.getCellData(row, "staffNm");
      pWhere = acb_lobranCd.getValue() + ',' + ica_wrkStDt.getValue();
      udc_grdPopup.setSelectId('retrieveStvArrangementFulltimeManList');
      udc_grdPopup.cfCommonPopUp(function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", rtnList[0]);
          ds_wrkList.setCellData(row, "staffNm", rtnList[1]);
          ds_wrkList.setCellData(row, "occpgrdCd", rtnList[2]);
          ds_wrkList.setCellData(row, "occptypeCd", rtnList[4]);
          ds_wrkList.setCellData(row, "dtlOccptypeCd", rtnList[6]);
          //ds_wrkList.setCellData(row,"yestWrkDt") = rtnList[8];		 	
          ds_wrkList.setCellData(row, "wrkPlClsCd", rtnList[8]);
        } else {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
          ds_wrkList.setCellData(row, "yestWrkDt", "");
          ds_wrkList.setCellData(row, "wrkPlClsCd", "");
        }
      } // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서	
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭	
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 로컬팝업조회
//-------------------------------------------------------------------------
scwin.f_CommonPopUp = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  var sW = pW == null ? "550px; " : pW + "px; ";
  var sH = pH == null ? "460px; " : pH + "px; ";
  var rtnList = new Array();
  var iDispCnt = null;
  var sTopLeft = null;
  var sWidthHeight = null;
  var sFeatures = null;
  if (pSelectID == null || pSelectID == "") {
    await $c.win.alert($p, "SELECT ID는 필수 항목 입니다.");
    return;
  }
  if (pCode.substr(0, 1) == '%' || pName.substr(0, 1) == '%') {
    await $c.win.alert($p, "검색어 첫번째문자로 % 는 올 수 없습니다");
    return;
  }
  iDispCnt = pDispCnt == null ? "0" : pDispCnt;
  if (parseInt(iDispCnt) > 10) {
    await $c.win.alert($p, "Display개수는(MAX=10)개 까지 가능 합니다.");
    return;
  }
  if (pTop != null) {
    sTopLeft = "dialogTop:" + pTop + "px; " + "dialogLeft:" + pLeft + "px; ";
  }
  sWidthHeight = "dialogWidth:" + sW + "dialogHeight:" + sH;
  sFeatures = sWidthHeight + " " + sTopLeft + " " + "center:Yes; help:No; resizable:No; status:No; scroll:No";
  switch (pSelectID) {
    case 'retrieveWrkIndictNoList':
      // 작업지시번호
      rtnList = await scwin.retrieveWrkIndictNoList(pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo);
      break;
    default:
      await $c.win.alert($p, "XML SelectID 오류!!!");
      break;
  }
  return rtnList;
};

//-------------------------------------------------------------------------
// 작업지시번호팝업
//-------------------------------------------------------------------------
scwin.retrieveWrkIndictNoList = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  var iDispCnt = pDispCnt == null ? "2" : pDispCnt;
  var bWinCloseTF = pWinCloseTF == null ? "F" : pWinCloseTF;
  var bExistTF = pExistTF == null ? "F" : pExistTF;
  var bAllSearchTF = pAllSearchTF == null ? "T" : pAllSearchTF;
  var bWrkDtTF = pWrkDtTF == null ? "F" : pWrkDtTF;
  var sTitle = null;
  var sWidth = null;
  var sHidden = null;
  var sURL = null;
  var rtnList = new Array();
  var arrParm = new Array();

  // 타이틀,조회조건Title1,조회조건Title2,XML_SELECT_ID,PopupClose유무(T/F),Display칼럼개수,중복체크여부,전체검색여부
  arrParm[0] = new Array("하역작업지시번호 검색", "작업지시구분", "작업일자", pSelectID, bWinCloseTF, iDispCnt, bExistTF, bAllSearchTF, bWrkDtTF);
  if (pWtitleSearch != null) {
    var strArr = pWtitleSearch.advancedSplit(",", "t");
    if (strArr != null) {
      arrParm[0][0] = strArr[0];
      arrParm[0][1] = strArr[1];
      arrParm[0][2] = strArr[2];
    }
  }
  arrParm[1] = new Array(pCode, pName, pWrkIndictNo, pCvsslMgntNo); //PopUP Parameter-->코드,명

  // sURL = "/ds/op/wrkplan/stvwrkplan/op_204_02_08p.jsp?paramTitle="	+ arrParm[0][0];
  // if (bExistTF == "T" )
  //     rtnList	= window.showModalDialog(sURL,arrParm,"dialogTop:1050px; dialogLeft:1400px; dialogWidth:0px; dialogHeight:0px; help:No; resizable:No; status:No; scroll:No");
  // else	
  //     rtnList	= window.showModalDialog(sURL,arrParm,sFeatures);

  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_02_08p.xml";
  let opts = {
    id: "Pop",
    popupName: "하역작업지시번호 검색",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "하역작업지시번호 검색"
  };
  var rtnList = await $c.win.openPopup($p, win_url, opts, arrParm);
  return rtnList;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

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
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 작업시간 Validation
//-------------------------------------------------------------------------  
scwin.f_checkVacationDate = async function () {
  var staffNo = "";
  var wrkIndictNo = "";
  var seq = 0;
  var shiftClsCd = "";
  for (var i = 1; i <= ds_wrkList.getRowCount(); i++) {
    staffNo = ds_wrkList.getCellData(i - 1, "staffNo");
    wrkIndictNo = ds_wrkList.getCellData(i - 1, "wrkIndictNo"); /* 작업지시번호 */
    seq = ds_wrkList.getCellData(i - 1, "seq"); /* 작업순번 */
    shiftClsCd = ds_wrkList.getCellData(i - 1, "shiftClsCd"); /* SHIFT */

    ds_workTime.removeAll();

    //신규 실적 입력 시
    if (ds_wrkList.getRowStatus(i - 1) != "D") {
      for (var j = 1; j <= ds_wrkList.getRowCount(); j++) {
        //삭제하려고 하는 대상은 비교dataSet에 copy하지 않는다.
        if (ds_wrkList.getRowStatus(j - 1) != "D" && ds_wrkList.getCellData(j - 1, "staffNo") == staffNo) {
          //동일한 사번의 DataRow를 모두 복사
          scwin.f_CopyDataRow(ds_wrkList, ds_workTime, j - 1);
        }
      }
      var wrkDt = ica_wrkStDt.getValue();
      var wrkStDt;
      var wrkStHh;
      var wrkStMm;
      var wrkEndDt;
      var wrkEndHh;
      var wrkEndMm;
      var wrkStDtm;
      var wrkEndDtm;
      for (var k = 1; k <= ds_workTime.getRowCount(); k++) {
        var m = 0;
        var n = 0;
        for (var l = 1; l <= ds_wrkList.getRowCount(); l++) {
          n++;
          if (ds_wrkList.getCellData(l - 1, "staffNo") == staffNo) {
            m++;
          }
          if (m == k) {
            break;
          }
        }
        wrkStDt = ds_workTime.getCellData(k - 1, "workStDt");
        wrkStHh = ds_workTime.getCellData(k - 1, "workStHh");
        wrkStMm = ds_workTime.getCellData(k - 1, "workStHh").substring(2, 4);
        wrkEndDt = ds_workTime.getCellData(k - 1, "workEndDt");
        wrkEndHh = ds_workTime.getCellData(k - 1, "workEndHh");
        wrkEndMm = ds_workTime.getCellData(k - 1, "workEndHh").substring(2, 4);
        wrkStDtm = wrkStDt + wrkStHh;
        wrkEndDtm = wrkEndDt + wrkEndHh;
        if (wrkStMm != "00" && wrkStMm != "30") {
          await $c.win.alert($p, n + "번째의 시간은 30분 단위로 입력 가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.Focus();
          // gr_wrkList.SetColumn("workStHh");
          gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
          return false;
        }
        if (wrkEndMm != "00" && wrkEndMm != "30") {
          await $c.win.alert($p, n + "번째의 시간은 30분 단위로 입력 가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.Focus();
          // gr_wrkList.SetColumn("workEndHh");
          gr_wrkList.setFocusedCell(n - 1, "workEndHh", true);
          return false;
        }
        if (ds_workTime.getCellData(k - 1, "workStHh").substr(0, 2) > "23") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          // ds_wrkList.getRowPosition() = n;
          // gr_wrkList.SetColumn("workStHh");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workStHh");
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workStHh").substr(2, 2) > "59") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workStHh");
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(0, 2) > "24") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          // ds_wrkList.getRowPosition() = n;
          // gr_wrkList.SetColumn("workEndHh");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workEndHh");
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(0, 2) == "00" && ds_workTime.getCellData(k - 1, "workEndHh").substr(2, 2) == "00") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          // ds_wrkList.getRowPosition() = n;
          // gr_wrkList.SetColumn("workEndHh");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workEndHh");
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(0, 2) == "24" && ds_workTime.getCellData(k - 1, "workEndHh").substr(2, 2) > "00") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          // ds_wrkList.getRowPosition() = n;
          // gr_wrkList.SetColumn("workEndHh");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workEndHh");
          return;
        }
        if (ds_workTime.getCellData(k - 1, "workEndHh").substr(2, 2) > "59") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
          // ds_wrkList.getRowPosition() = n;
          // gr_wrkList.SetColumn("workEndHh");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workEndHh");
          return;
        }

        //입력한 작업시작일자가 조회일자이후인가
        if (wrkDt > wrkStDt) {
          await $c.win.alert($p, n + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.Focus();
          // gr_wrkList.SetColumn("workStDt");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workStDt", true);
          return false;
        }

        //입력한 작업시작일자가 하루를 초과하는가
        var diffDay = await $c.date.diffDate($p, wrkDt, wrkStDt);
        if (diffDay > 1) {
          await $c.win.alert($p, n + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workStDt");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workStDt", true);
          return false;
        }

        //작업시작일자가 작업종료일자 이후 인가
        if (wrkStDt > wrkEndDt) {
          //await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
          await $c.win.alert($p, n + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.Focus();
          // gr_wrkList.SetColumn("workStDt");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workStDt", true);
          return false;
        }
        if (wrkStDtm > wrkEndDtm) {
          //await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
          await $c.win.alert($p, i + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.Focus();
          // gr_wrkList.SetColumn("workStHh");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workStHh", true);
          return false;
        }
        var diffDay = await $c.date.diffDate($p, wrkDt, wrkEndDt);
        if (diffDay > 1) {
          await $c.win.alert($p, n + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
          // gr_wrkList.SetScrolling(n, 1); 
          // gr_wrkList.ColSelect = "true";
          // gr_wrkList.focus();
          // gr_wrkList.SetColumn("workEndDt");
          ds_wrkList.setRowPosition(n - 1);
          gr_wrkList.setFocusedCell(n - 1, "workEndDt", true);
          return false;
        }
        var workSt = ds_workTime.getCellData(k - 1, "workStDt") + ds_workTime.getCellData(k - 1, "workStHh");
        var workEnd = ds_workTime.getCellData(k - 1, "workEndDt") + ds_workTime.getCellData(k - 1, "workEndHh");
        workSt = workSt.trim();
        workEnd = workEnd.trim();
        var startDate = workSt.toDate("YYYYMMDDHHmmss");
        var endDate = workEnd.toDate("YYYYMMDDHHmmss");
        var totalDate = (endDate - startDate) / 1000 / 60 / 60;
        if (totalDate >= 24) {
          await $c.win.alert($p, n + "번째 실적 작업일이 하루가 넘습니다.");
          return false;
        }
      }
      /*
      	var sStDt="";
         var sEndDt="";
         var tStDt="";
         var tEndDt="";
         var cnt=0;
         
          for(var k=1;k<=ds_wrkList.getRowCount();k++){
         	console.log("0-0. 사번 : " +ds_wrkList.getCellData(k,"staffNo") + ", seq : " + ds_wrkList.getCellData(k,"seq") + ", 시ㅠㅡ트 :  " +ds_wrkList.getCellData(k,"ShiftClsCd") + " rowStatus : " + ds_wrkList.getRowStatus(k) );
         	if (ds_wrkList.getRowStatus(k) == 2){
         		
         	}
         } */

      //중복 row 
      /* for(var k=1;k<=ds_workTime.getRowCount();k++){
      	
      	console.log("1. ds_workTime.getRowCount() :  " + ds_workTime.getRowCount());
      				var m = 0;
      var n = 0;
      			for(var l=1;l<=ds_wrkList.getRowCount();l++){
      n++;		
      					//staffNo만의 조건은 unique 아니
      if (ds_wrkList.getCellData(l,"staffNo")==staffNo){		
      
      console.log("중복 체크 로직 도착, 대상 staffNo : " + staffNo);
      console.log("사번 : " + ds_wrkList.getCellData(l,"staffNo")  + ", seq : " + ds_wrkList.getCellData(l,"seq") + ", Shift : " + ds_wrkList.getCellData(l, "shiftClsCd") +", ds_wrkList." + l);
      
      
      console.log("2. ds_wrkList rowstatus : "+  ds_wrkList.getRowStatus(l));
      console.log("3. before ds_workTime rowstatus : "+  ds_workTime.getRowStatus(l));
      
      
      //if (ds_wrkList.getRowStatus(l) == 2) ds_workTime.UserStatus(k) = 2;
      
      console.log("4. after ds_workTime rowstatus : "+  ds_workTime.getRowStatus(l));					
      
      m++;				
      }
      					if (m==k) {
      //
      break;
      }
      
      }				
          
      for(t=1;t<= ds_workTime.getRowCount();t++){
      					console.log("5.######ds_workTime의" + t+"행 UserStatus : " + ds_workTime.UserStatus(t));
      				}
      console.log("6.ds_wrkList UserStatus : " + ds_wrkList.UserStatus(k));
      console.log("6-1.ds_workTime getRowStatus : " + ds_workTime.getRowStatus(k));
      			//row copy하면 row status도 copy?
          if (ds_workTime.getRowStatus(k) != 2){
              sStDt = ds_workTime.getCellData(k,"workStDt") + ds_workTime.getCellData(k,"workStHh");
           sEndDt = ds_workTime.getCellData(k,"workEndDt") + ds_workTime.getCellData(k,"workEndHh");
           console.log("in 1");
      for( var l = k+1; l <= ds_workTime.getRowCount(); l++ ){
      
      if (ds_workTime.getRowStatus(l) != 2){
      	console.log("in 2");
      
      	cnt=0; 
      	tStDt = ds_workTime.getCellData(l,"workStDt") + ds_workTime.getCellData(l,"workStHh");
      	tEndDt =  ds_workTime.getCellData(l,"workEndDt") + ds_workTime.getCellData(l,"workEndHh");
      	
      	if (eval(sStDt >= tStDt) && eval(sStDt >= tEndDt)){ 
      		cnt=1;
      	}else if (eval(sEndDt <= tStDt) && eval(sEndDt <= tEndDt)){
      		cnt=1;
      	} 
      	 
      	if (eval(cnt)==0){ 
      	  await $c.win.alert(ds_workTime.getCellData(l,"staffNm") +"의 "+(n+1)+"번째 근무시간이 중복되었습니다.");
      	  gr_wrkList.SetScrolling(n, 1); 
      	  gr_wrkList.ColSelect = "true";
      	  gr_wrkList.Focus();
      	  gr_wrkList.SetColumn("workStDt");
      	  return false;
      	}
      }
      }
      }	
      } */

      var q = 0;
      for (var p = 1; p <= ds_workTime.getRowCount(); p++) {
        if (ds_workTime.getRowStatus(p - 1) != "D") {
          q = q + 1;
        }
      }
      if (q <= 1) {
        break;
      }
      var m = 1;
      var k = 0;
      var l = 0;
      var n = 0;
      for (var a = m; a <= ds_workTime.getRowCount(); a++) {
        if (ds_workTime.getRowStatus(a - 1) == "D") {
          for (var j = a; k <= ds_workTime.getRowCount(); j++) {
            if (ds_workTime.getRowStatus(j - 1) != "D") {
              k = j;
              break;
            }
          }
        } else {
          k = m;
        }
        if (ds_workTime.getRowStatus(k + 1) == "D") {
          for (var l = k + 1; l <= ds_workTime.getRowCount(); l++) {
            if (ds_workTime.getRowStatus(l - 1) != "D") {
              n = l;
              break;
            }
          }
        } else {
          n = k + 1;
        }
        //if (ds_workTime.getRowStatus(a) != 2) k = m;

        if (ds_workTime.getRowStatus(m) == "D") {
          for (var l = m + 1; l <= ds_workTime.getRowCount(); l++) {
            if (ds_workTime.getRowStatus(l - 1) != "D") {
              n = l;
              break;
            }
          }
        } else {
          n = m + 1;
        }
        sEndDt = ds_workTime.getCellData(k - 1, "workEndDt") + ds_workTime.getCellData(k - 1, "workEndHh");
        tStDt = ds_workTime.getCellData(n - 1, "workStDt") + ds_workTime.getCellData(n - 1, "workStHh");
        if (ds_workTime.getCellData(k - 1, "workEndHh") == "2400") {
          sEndDt = ds_workTime.getCellData(k - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD") + "0000";
        }
        m = n;
        if (q == m) {
          break;
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 근무시간 행추가
//-------------------------------------------------------------------------
scwin.f_WorkTimeSet = function (Row) {
  if (ds_wrkList.getRowCount() > 0) {
    if (ds_wrkList.getCellData(Row - 1, "staffNo") == ds_wrkList.getCellData(Row, "staffNo") && ds_wrkList.getCellData(Row - 1, "staffNm") == ds_wrkList.getCellData(Row, "staffNm")) {
      if (ds_wrkList.getCellData(Row - 1, "workEndHh") == "2400") {
        ds_wrkList.setCellData(Row, "workStDt", ds_wrkList.getCellData(Row - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"));
        ds_wrkList.setCellData(Row, "workStHh", "0000");
        ds_wrkList.setCellData(Row, "workEndDt", ds_wrkList.getCellData(Row - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"));
      }
      //else{
      //ds_wrkList.setCellData(Row,"workStDt") = ds_wrkList.getCellData(Row -1,"workEndDt");
      //ds_wrkList.setCellData(Row,"workStHh") = ds_wrkList.getCellData(Row -1,"workEndHh");
      //ds_wrkList.setCellData(Row,"workEndDt") = ds_wrkList.getCellData(Row -1,"workEndDt");
      //}  		
    }
  } else {
    ds_wrkList.setCellData(Row, "workStDt", ica_wrkStDt.getValue());
    ds_wrkList.setCellData(Row, "workEndDt", ica_wrkStDt.getValue());
  }
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
scwin.f_CopyDataRow = function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  // try {
  // 	if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
  // 	if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
  // 	if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
  // 	if (targetColumns == null) targetColumns = sourceColumns;
  // 	if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
  // 	if (targetRow == null) targetRow = scwin.f_AddDataRow(targetDataset);
  // 	for (var i = 0 ; i < sourceColumns.length; i++) {
  // 		if ($c.gus.cfIsNull(sourceColumns[i]) || $c.gus.cfIsNull(targetColumns[i])) continue;
  // 			targetDataset.setCellData(targetRow, targetColumns[i], sourceDataset.getCellData(sourceRow,sourceColumns[i]));
  // 		if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
  // 	}
  // 	return targetRow;
  // } catch (e) {
  // 	await $c.gus.cfAlertMsg("[scwin.f_CopyDataRow]" + e);
  // }
};

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
scwin.f_GetColumnNames = function (dataSet) {
  // try {
  // 	if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
  // 	if (dataSet.getTotalCol() == 0) return null;
  // 	var rtnArray = new Array(dataSet.getTotalCol());
  // 	for (var i=0; i < dataSet.getTotalCol(); i++) {
  // 		rtnArray[i] = dataSet.getColumnID(i+1);
  // 	}
  // 	if (rtnArray.length == 0)
  // 		return null
  // 	else
  // 		return rtnArray
  // } catch (e) {
  // 	await $c.gus.cfAlertMsg("[scwin.f_GetColumnNames] " + e.Description);
  // }
};

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_AddDataRow = function (dataSet) {
  var rowIndex = dataSet.insertRow();
  dataSet.setRowPosition(rowIndex);
  return dataSet.getRowPosition();
};
scwin.ed_stvWrkIndictNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_stvWrkIndictNo_onblur = function (e) {};
scwin.btn_PopUp1_onclick = function (e) {
  scwin.f_openCommonPopUp(2, ed_stvWrkIndictNo.getValue(), '', 'F', 'F');
};
scwin.udc_staff_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staff_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staff_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_wrkList, '하역인원실적내역');
};
scwin.f_decodeDuplCnt = function (data, formattedData, rowIndex, colIndex) {
  if (data == 1) {
    return "N";
  } else {
    return "Y";
  }
};
scwin.btn_no1_onclick = function (e) {
  scwin.f_AddRow('2');
};
scwin.addRow = function () {
  scwin.f_AddRow('1');
};
scwin.deleteRow = function () {
  scwin.f_DeleteRow('1');
};
scwin.btn_no2_onclick = function (e) {
  scwin.f_DeleteRow('2');
};
scwin.btn_no3_onclick = function (e) {
  scwin.f_CancelRow('1');
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
  scwin.f_Retrieve();
};
scwin.sbm_confirm_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // 총 조회건수 표시
  var rowCnt = ds_wrkList.getRowCount();
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  var northDay = 0;
  var northNight = 0;
  var inDay = 0;
  var inNight = 0;
  var hdDay = 0;
  var hdNight = 0;
  var yaDay = 0;
  var yaNight = 0;
  for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
    if (ds_wrkList.getCellData(i, "districtNm") == "북항") {
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "D") {
        northDay++;
      }
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "N") {
        northNight++;
      }
    }
    if (ds_wrkList.getCellData(i, "districtNm") == "내항") {
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "D") {
        inDay++;
      }
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "N") {
        inNight++;
      }
    }
    if (ds_wrkList.getCellData(i, "districtNm") == "항동") {
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "D") {
        hdDay++;
      }
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "N") {
        hdNight++;
      }
    }
    if (ds_wrkList.getCellData(i, "districtNm") == "연안") {
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "D") {
        yaDay++;
      }
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "N") {
        yaNight++;
      }
    }
    if (ds_wrkList.getCellData(i, "duplCnt") != "1") {
      gr_wrkList.setCellBackgroundColor(i, "duplCnt", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(i, "staffNm", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(i, "occpgrdCd", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(i, "stvWrkIndictNo", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(i, "wrkPlNm", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(i, "shiftClsCd", "#FBCED4");
      gr_wrkList.setCellBackgroundColor(i, "staffNo", "#FBCED4");
    }
  }
  ;
  ed_inDay.setValue(inDay);
  ed_inNight.setValue(inNight);
  ed_northDay.setValue(northDay);
  ed_northNight.setValue(northNight);
  //txt_hdDay.value = hdDay;
  //txt_hdNight.value = hdNight;
  //txt_yaDay.value = yaDay;
  //txt_yaNight.value = yaNight;
};
scwin.gr_wrkList_ontextimageclick = async function (row, columnIndex) {
  scwin.textImageClick = true;
  var colid = gr_wrkList.getColumnID(columnIndex);
  switch (colid) {
    // case "workDt":
    // 	cfOpenCalendar(this, row, colid);
    // 	break;
    // case "workStDt":
    // 	cfOpenCalendar(this, row, colid);
    // 	break;
    // case "workEndDt":
    // 	cfOpenCalendar(this, row, colid);
    // 	break;
    case "staffNo":
      scwin.f_openGridCommonPopUp(1, row, "F");
      break;
    case "staffNm":
      scwin.f_openGridCommonPopUp(2, row, "F");
      break;
    case "stvWrkIndictNo":
      scwin.bOnPopUp = true;
      var pCode = "P";
      var pName = ica_wrkStDt.getValue();
      var pWrkIndictNo = ds_wrkList.getCellData(row, "stvWrkIndictNo").replace(/\s*$/, '');
      ds_wrkList.setCellData(row, "info", "");
      ds_wrkList.setCellData(row, "shiftClsCd", "");
      ds_wrkList.setCellData(row, "wrkStpCd", "");
      ds_wrkList.setCellData(row, "workStDt", "");
      ds_wrkList.setCellData(row, "workStHh", "");
      ds_wrkList.setCellData(row, "workEndDt", "");
      ds_wrkList.setCellData(row, "workEndHh", "");
      var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null) {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", rtnList[0]);
        ds_wrkList.setCellData(row, "wrkPlNm", rtnList[3]);
        ds_wrkList.setCellData(row, "shiftClsCd", rtnList[5]);
        ds_wrkList.setCellData(row, "workStDt", rtnList[10]);
        ds_wrkList.setCellData(row, "workStHh", rtnList[11]);
        ds_wrkList.setCellData(row, "workEndDt", rtnList[12]);
        ds_wrkList.setCellData(row, "workEndHh", rtnList[13]);
        scwin.v_workClsCd = rtnList[1];
        if (ds_wrkList.getRowCount() > 0) {
          scwin.ds_wkrStp_OnFilter(row);
        }
      } else {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
      }
      break;
  }
};
scwin.gr_wrkList_oneditend = async function (row, columnIndex, value) {
  var colid = gr_wrkList.getColumnID(columnIndex);
  var olddata = ds_wrkList.getCellData(row, colid);
  var newValue = value;
  scwin.gridPop = "NAN";
  switch (colid) {
    case "staffNo":
      if (newValue != "" && newValue != olddata) {
        scwin.gridPop = true;
      } else if (newValue == "") {
        scwin.gridPop = false;
      }
      break;
    case "staffNm":
      if (newValue != "" && newValue != olddata) {
        scwin.gridPop = true;
      } else if (newValue == "") {
        scwin.gridPop = false;
      }
      break;
  }
};
scwin.gr_wrkList_onafteredit = async function (row, columnIndex, value) {
  $p.setTimeout(async function () {
    if (scwin.textImageClick) {
      return;
    }
    scwin.textImageClick = false;
    var colid = gr_wrkList.getColumnID(columnIndex);
    switch (colid) {
      case "staffNo":
        if (scwin.gridPop == true) {
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
          scwin.f_openGridCommonPopUp(1, row, "T");
        } else if (scwin.gridPop == false) {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
        }
        scwin.f_WorkTimeSet(row);
        break;
      case "staffNm":
        if (scwin.gridPop == true) {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
          scwin.f_openGridCommonPopUp(2, row, "T");
        } else if (scwin.gridPop == false) {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "occpgrdCd", "");
          ds_wrkList.setCellData(row, "occptypeCd", "");
          ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
        }
        scwin.f_WorkTimeSet(row);
        break;
      case "stvWrkIndictNo":
        scwin.bOnPopUp = true;
        var pCode = "P";
        var pName = ica_wrkStDt.getValue();
        var pWrkIndictNo = ds_wrkList.getCellData(row, "stvWrkIndictNo").replace(/\s*$/, '');
        ds_wrkList.setCellData(row, "wrkPlNm", "");
        ds_wrkList.setCellData(row, "shiftClsCd", "");
        ds_wrkList.setCellData(row, "wrkStpCd", "");
        var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
        if (rtnList != null) {
          ds_wrkList.setCellData(row, "stvWrkIndictNo", rtnList[0]);
          ds_wrkList.setCellData(row, "wrkPlNm", rtnList[3]);
          ds_wrkList.setCellData(row, "shiftClsCd", rtnList[5]);
          scwin.v_workClsCd = rtnList[1];
          if (ds_wrkList.getRowCount() > 0) {
            scwin.ds_wkrStp_OnFilter(row);
          }
        } else {
          ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
        }
        break;
    }
  });
};
scwin.ds_wkrStp_OnFilter = function (row) {
  if (ds_wrkList.getRowCount() == 0) {
    return;
  }
  if (scwin.v_workClsCd == "") {
    return;
  }
  ds_wkrStp.clearFilter();
  if (scwin.v_workClsCd == 'Y') {
    if (ds_wkrStp.getCellData(row, "upperWrkStpCd") == '03') {
      ds_wkrStp.setColumnFilter({
        type: 'row',
        colIndex: 'upperWrkStpCd',
        key: "03",
        condition: 'and'
      });
      return true;
    } else {
      return false;
    }
  } else if (scwin.v_workClsCd == 'P') {
    if (ds_wkrStp.getCellData(row, "upperWrkStpCd") == '01') {
      ds_wkrStp.setColumnFilter({
        type: 'row',
        colIndex: 'upperWrkStpCd',
        key: "01",
        condition: 'and'
      });
      return true;
    } else {
      return false;
    }
  } else if (scwin.v_workClsCd == 'T') {
    if (ds_wkrStp.getCellData(row, "upperWrkStpCd") == '03') {
      ds_wkrStp.setColumnFilter({
        type: 'row',
        colIndex: 'upperWrkStpCd',
        key: "03",
        condition: 'and'
      });
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
scwin.gr_wrkList_onheaderclick = function (headerId) {
  // var chk = bCheck == 1 ? "T":"F";	
  // var cr = ds_wrkList.getRowCount();
  // if (cr > 0){
  //     if (headerId == "h_chk"){
  //         for(var i = 0 ; i < cr ; i++){	      		
  //             ds_wrkList.setCellData(i, "chk", chk);	      		
  //         }
  //     }                        
  // }  
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_condition.lobranCd',objType:'key',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'근무일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',pickerType:'dynamic',style:'',title:'근무일자',mandatory:'true',objType:'data',ref:'data:ds_condition.wrkStDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_stvWrkIndictNo',placeholder:'',style:'width: 150px;',displayFormat:'#############',objType:'data',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_stvWrkIndictNo_onkeyup','ev:onblur':'scwin.ed_stvWrkIndictNo_onblur',ref:'data:ds_condition.stvWrkIndictNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp1',style:'',type:'button','ev:onclick':'scwin.btn_PopUp1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_PopUp2',id:'udc_staff',allowCharCode:'a-zA-Z0-9',UpperFlag:'1',maxlengthCode:'6',objTypeCode:'data',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_staff_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_staff_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staff_onblurCodeEvent',refDataCollection:'ds_condition',code:'staffNo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',codeId:'',nameId:'',id:'udc_grdPopup',UpperFlag:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_occptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_condition.occptypeCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dtlOccptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_condition.dtlOccptypeCd'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 실적내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_wrkList',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_wrkList_ontextimageclick','ev:oneditend':'scwin.gr_wrkList_oneditend','ev:onafteredit':'scwin.gr_wrkList_onafteredit','ev:onheaderclick':'scwin.gr_wrkList_onheaderclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_chk',inputType:'checkbox',width:'50',rowSpan:'2',falseValue:'F',trueValue:'T',valueType:'other',value:'Chk'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업일자',width:'100',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'지역',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업<br/>순번',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'중복<br/>등록',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'성명',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'소속',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'직종',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'상세<br/>직종',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'직급',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'작업<br/>지시번호',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'본선/<br/>작업장',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column37',value:'근무',displayMode:'label',colSpan:'6',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'설천',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'단독',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'Gang<br/>이동',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',value:'긴급<br/>오더',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',value:'연장',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'대기',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'등록자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'사번',displayMode:'label',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',value:'작업구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column108',value:'시작일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column107',value:'시작시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',value:'종료일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',value:'종료시간',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',width:'20',textAlign:'center',displayMode:'label',inputType:'checkbox',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역',width:'40',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'작업',width:'30',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'duplCnt',name:'중복',width:'30',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',customFormatter:'scwin.f_decodeDuplCnt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'50',textAlign:'center',displayMode:'label',inputType:'textImage'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'소속',width:'60',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',width:'50',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세',width:'60',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급',width:'50',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',width:'90',textAlign:'center',displayMode:'label',inputType:'textImage',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'본선/',width:'80',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'작업',width:'60',textAlign:'center',displayMode:'label',inputType:'select',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'업무간휴무'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]}]}]},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',width:'60',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'select'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{id:'workStDt',name:'시작일',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',displayFormat:'yyyy/MM/dd',mandatory:'true',dataType:'date'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시작',width:'50',textAlign:'center',displayMode:'label',inputType:'text',displayFormat:'##:##',mandatory:'true',dataType:'text',maxLength:'4'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'종료일',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',displayFormat:'yyyy/MM/dd',mandatory:'true',dataType:'date'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'종료',width:'50',textAlign:'center',displayMode:'label',inputType:'text',displayFormat:'##:##',mandatory:'true',dataType:'text',maxLength:'4'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'설천',width:'50',textAlign:'center',displayMode:'label',inputType:'select',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]},{T:1,N:'w2:column',A:{id:'singleCnt',name:'단독',width:'50',textAlign:'center',displayMode:'label',inputType:'select',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]},{T:1,N:'w2:column',A:{id:'moveCnt',name:'Gang',width:'60',textAlign:'center',displayMode:'label',inputType:'select',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]},{T:1,N:'w2:column',A:{id:'emerCnt',name:'긴급',width:'50',textAlign:'center',displayMode:'label',inputType:'select',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]},{T:1,N:'w2:column',A:{id:'extdCnt',name:'연장',width:'50',textAlign:'center',displayMode:'label',inputType:'select',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]},{T:1,N:'w2:column',A:{id:'waitingCnt',name:'대기',width:'50',textAlign:'center',hidden:'true',displayMode:'label',inputType:'select'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',width:'50',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'50',textAlign:'center',displayMode:'label',inputType:'textImage',mandatory:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'chk_tot',name:'Chk',width:'20',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workDt_tot',name:'작업',width:'80',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm_tot',name:'지역',width:'40',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'seq_tot',name:'작업',width:'30',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'duplCnt_tot',name:'중복',width:'30',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm_tot',name:'성명',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd_tot',name:'소속',width:'60',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd_tot',name:'직종',width:'50',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd_tot',name:'상세',width:'60',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd_tot',name:'직급',width:'50',textAlign:'center',readOnly:'true',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo_tot',name:'작업',width:'90',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm_tot',name:'본선/',width:'80',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd_tot',name:'작업',width:'60',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd_tot',name:'시프트',width:'60',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt_tot',name:'시작일',width:'70',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh_tot',name:'시작',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt_tot',name:'종료일',width:'70',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh_tot',name:'종료',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt_tot',name:'설천',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'singleCnt_tot',name:'단독',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'moveCnt_tot',name:'Gang',width:'60',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'emerCnt_tot',name:'긴급',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'extdCnt_tot',name:'연장',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'waitingCnt_tot',name:'대기',width:'50',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'regNm_tot',name:'등록자',width:'50',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo_tot',name:'사번',width:'50',textAlign:'center',displayMode:'label',inputType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_no1',style:'',type:'button','ev:onclick':'scwin.btn_no1_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'C',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',EngYn:'N',gridID:'gr_wrkList',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.deleteRow'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_no2',style:'',type:'button','ev:onclick':'scwin.btn_no2_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_no3',style:'',type:'button','ev:onclick':'scwin.btn_no3_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주간',class:''}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_inDay',placeholder:'',class:'',dataType:'number',initValue:'0'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'야간',class:''}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_inNight',placeholder:'',class:'',dataType:'number',initValue:'0'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'북항 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주간',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_northDay',placeholder:'',style:'width:70px;',dataType:'number',initValue:'0'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'야간',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_northNight',placeholder:'',style:'width:70px;',dataType:'number',initValue:'0'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})