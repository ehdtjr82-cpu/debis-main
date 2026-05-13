/*amd /ui/ds/op/stvwrk/op_210_01_09b.xml 81617 a4c50c7f3d6feb4e1625979b8d4758be0bc5ddc8a3fa2242de93d1461933077b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:linkedDataList',A:{bind:'',id:'linkedDataList1'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'본선/',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'우설천',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfWorkCnt',name:'조출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnhWorkCnt',name:'중식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dnrWorkCnt',name:'석출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprWorkCnt',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'인원수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workTime',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'본선/',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'우설천',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfWorkCnt',name:'조출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnhWorkCnt',name:'중식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dnrWorkCnt',name:'석출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprWorkCnt',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'인원수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_staff_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo2_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hid_vsslNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_shift',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_wrkDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hid_staffNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_extdWrk',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveDailyStaffWrkResultListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveDailyStaffWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_staff',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_staff_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkIndictNo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo2_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_01_09b 
// 이름     : 일용직실적등록
// 경로     : 물류/하역(인천)/실적/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-20
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd"); // 물류 점소 코드
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vwrkDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)
  scwin.v_workClsCd = "";
  scwin.bOnPopUp = false;
  scwin.wrkInfo = new Array();
  scwin.wrkInfo2 = new Array();
  scwin.curRow = "";
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_wrkList:shiftClsCd"
  }, {
    grpCd: "OP220",
    compID: "gr_wrkList:workClsCd,acb_workClsCd",
    opt: {
      "range": "1,T"
    }
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};
scwin.setCommonCodeCallBack = async function () {
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;
  scwin.f_SetDefaultData();
  $c.gus.cfDisableObjects($p, [ed_staffNm2, ed_dailymanCnt, ed_dailymanCnt2, ed_inDay, ed_inNight, ed_northDay, ed_northNight]);

  // $p.setTimeout(function() {
  //     acb_lobranCd.setValue("4AA");
  //     // ica_wrkDt.setValue("20180801");
  //     ica_wrkDt.setValue("20160801");
  // }, {"delay":50});    
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkDt.setValue(scwin.vCurDate);
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ica_wrkDt]))) {
    return;
  }
  ds_wrkList.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
  scwin.f_RetrievePierCdCall();
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.curRow = ds_wrkList.getRowPosition();
  var modifyRowCnt = ds_wrkList.getModifiedIndex().length;
  if (modifyRowCnt > 0) {
    if (!(await $c.gus.cfValidate($p, [gr_wrkList], null, true))) return;
    // if (!await scwin.f_checkVacationDate()) {
    // 	return;
    // }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["하역인원실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function () {
  var rowIndex = ds_wrkList.insertRow();
  ds_wrkList.setRowPosition(rowIndex);
  gr_wrkList.setFocusedCell(rowIndex, 0);
  ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workDt", ica_wrkDt.getValue());
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_DeleteRow = async function () {
  if (ds_wrkList.getCellData(ds_wrkList.getRowPosition(), "status") == "확정") {
    await $c.win.alert($p, "확정된 내역은 삭제할 수 없습니다.");
    return false;
  } else {
    if (ds_wrkList.getRowStatus(ds_wrkList.getRowPosition()) == "C") {
      ds_wrkList.removeRow(ds_wrkList.getRowPosition());
    } else {
      ds_wrkList.deleteRow(ds_wrkList.getRowPosition());
    }
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
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  // cfGridToExcel(argGrid, argTitle, argTitle+".xls", 4+8+16);
  var vDay = "점소 | " + acb_lobranCd.getText(true) + " | " + "작업일자 | " + ica_wrkDt.getValue();
  var argGridTotalCol = 0;
  for (var i = 0; i < gr_wrkList.getTotalCol(); i++) {
    if (gr_wrkList.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: argTitle,
    textAlign: "center"
    // , fontSize    : "12pt"
    ,

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
    // , fontSize    : "12pt"
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var pWhere = acb_lobranCd.getValue();
      udc_staff.setSelectId('retrieveStvArrangementDailyManList');
      udc_staff.cfCommonPopUp(scwin.udc_staff_callBackFunc // XML상의 SELECT ID	
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
// 그리드 팝업
//-------------------------------------------------------------------------  
scwin.f_openGridCommonPopUp = function (gubun, row, pClose) {
  // 선언부 udc_gridPopup
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건
  var pCode = "";
  var pName = "";
  var arrParam = new Array();
  var sWinCloseTF = pClose == null ? "T" : pClose;
  switch (gubun) {
    case 1:
      //일용직			
      pCode = ds_wrkList.getCellData(row, "staffNo");
      pName = "";
      pWhere = acb_lobranCd.getValue();
      udc_gridPopup.setSelectId('retrieveStvArrangementDailyManList');
      udc_gridPopup.cfCommonPopUp(function (ref) {
        if (!$c.gus.cfIsNull($p, ref) && ref[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", ref[0]);
          ds_wrkList.setCellData(row, "staffNm", ref[1]);
          ds_wrkList.setCellData(row, "refNo", ref[8]);
        } else {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "refNo", "");
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '9' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종,관리번호' // Title순서	
      , '70,70,70,70,50,70,50,80,80' // 보여주는 각 컬럼들의 폭	
      , '5,7,10' // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 570 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //일용직			
      pCode = "";
      pName = ds_wrkList.getCellData(row, "staffNm");
      pWhere = acb_lobranCd.getValue();
      udc_gridPopup.setSelectId('retrieveStvArrangementDailyManList');
      udc_gridPopup.cfCommonPopUp(function (ref) {
        if (!$c.gus.cfIsNull($p, ref) && ref[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", ref[0]);
          ds_wrkList.setCellData(row, "staffNm", ref[1]);
          ds_wrkList.setCellData(row, "refNo", ref[8]);
        } else {
          ds_wrkList.setCellData(row, "staffNo", "");
          ds_wrkList.setCellData(row, "staffNm", "");
          ds_wrkList.setCellData(row, "refNo", "");
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '9' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종,관리번호' // Title순서	
      , '70,70,70,70,50,70,50,80,80' // 보여주는 각 컬럼들의 폭	
      , '5,7,10' // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 570 // POP-UP뛰을때 원도우의	사용자 정의	폭
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

  sURL = "/ds/op/wrkplan/stvwrkplan/op_204_02_08p.jsp?paramTitle=" + arrParm[0][0];
  if (bExistTF == "T") {
    // rtnList	= window.showModalDialog(sURL,arrParm,"dialogTop:1050px; dialogLeft:1400px; dialogWidth:0px; dialogHeight:0px; help:No; resizable:No; status:No; scroll:No");
  } else {
    // rtnList	= window.showModalDialog(sURL,arrParm,sFeatures);
  }
  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_02_08p.xml";
  let opts = {
    id: "ediCallPop",
    popupName: arrParm[0][0],
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 572,
    title: arrParm[0][0]
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
  // 	for (var i=0; i < sourceColumns.length; i++) {
  // 		if ($c.gus.cfIsNull(sourceColumns[i]) || $c.gus.cfIsNull(targetColumns[i])) continue;
  // 			targetDataset.NameString(targetRow,targetColumns[i]) = sourceDataset.NameString(sourceRow,sourceColumns[i]);
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
// scwin.f_GetColumnNames = function (dataSet) {
// 	try {
// 		if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
// 		if (dataSet.CountColumn == 0) return null;
// 		var rtnArray = new Array(dataSet.CountColumn);
// 		for (var i=0; i < dataSet.CountColumn; i++) {
// 			rtnArray[i] = dataSet.ColumnID(i+1);
// 		}
// 		if (rtnArray.length == 0)
// 			return null
// 		else
// 			return rtnArray
// 	} catch (e) {
// 		await $c.gus.cfAlertMsg("[scwin.f_GetColumnNames] " + e.Description);
// 	}
// };

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
// scwin.f_AddDataRow = function (dataSet){
//     var rowIndex = dataSet.insertRow(); 		
//     dataSet.setRowPosition(rowIndex);
//   	return dataSet.getRowPosition();
// };

//-------------------------------------------------------------------------
// 작업지시  조회
//-------------------------------------------------------------------------  
scwin.f_RetrievePierCd = async function (param1, param2) {
  // co_ds_combo2.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=StvWrkEBC&queryId=retrieveWorkPlanListCombo2&param1=" + param1 + "&param2=" + param2;	
  // co_ds_combo2.Reset();

  co_ds_combo2_search.set("sysCd", "StvWrkEBC");
  co_ds_combo2_search.set("queryId", "retrieveWorkPlanListCombo2");
  co_ds_combo2_search.set("param1", param1);
  co_ds_combo2_search.set("param2", param2);
  var rs = await $c.sbm.execute($p, sbm_wrkIndictNo);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo2.setJSON(rs.responseJSON.GAUCE);
    // co_ds_combo2.sort("code", 0);

    acb_wrkIndictNo.setValue("");
  }
};

//-------------------------------------------------------------------------
// 작업지시  조회
//-------------------------------------------------------------------------  
scwin.f_RetrievePierCdCall = function () {
  scwin.f_RetrievePierCd(acb_lobranCd.getValue(), ica_wrkDt.getValue());
};

//-------------------------------------------------------------------------
//  인원  조회
//-------------------------------------------------------------------------  
scwin.f_RetrieveStaffInfo = async function (param1) {
  // ds_staff.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=StvWrkEBC&queryId=retrieveStaffInfoCombo&param1=" + param1;	
  // ds_staff.Reset();
  ds_staff_search.set("sysCd", "StvWrkEBC");
  ds_staff_search.set("queryId", "retrieveStaffInfoCombo");
  ds_staff_search.set("param1", param1);
  var rs = await $c.sbm.execute($p, sbm_staff);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_staff.setJSON(rs.responseJSON.GAUCE);
    // co_ds_combo2.sort("code", 0);

    if (ds_staff.getRowCount() == 0) {
      await $c.win.alert($p, "해당 관리번호에 사번이 존재하지 않습니다. 확인 후 입력해 주세요");
      ed_refNo.setValue("");
      return false;
    } else {
      ds_hidden.set("hid_staffNo", ds_staff.getCellData(0, "code"));
      ed_staffNm2.setValue(ds_staff.getCellData(0, "name"));
    }
  }
};

//-------------------------------------------------------------------------
// 작업시간 Validation
//-------------------------------------------------------------------------  
scwin.f_checkVacationDate = async function () {
  var staffNo = "";
  for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
    staffNo = ds_wrkList.getCellData(i, "staffNo");
    ds_workTime.removeAll();
    for (var j = 0; j < ds_wrkList.getRowCount(); j++) {
      if (ds_wrkList.getCellData(j, "staffNo") == staffNo) {
        // scwin.f_CopyDataRow(ds_wrkList, ds_workTime, j);	

        ds_workTime.setJSON([ds_wrkList.getRowJSON(j)], true);
      }
    }
    var wrkDt = ica_wrkDt.getValue();
    var wrkStDt;
    var wrkStHh;
    var wrkStMm;
    var wrkEndDt;
    var wrkEndHh;
    var wrkEndMm;
    var wrkStDtm;
    var wrkEndDtm;
    for (var k = 0; k < ds_workTime.getRowCount(); k++) {
      var m = 0;
      var n = 0;
      for (var l = 0; l < ds_wrkList.getRowCount(); l++) {
        n++;
        if (ds_wrkList.getCellData(l, "staffNo") == staffNo) {
          m++;
        }
        if (m == k) {
          break;
        }
      }
      wrkStDt = ds_workTime.getCellData(k, "workStDt");
      wrkStHh = ds_workTime.getCellData(k, "workStHh");
      wrkStMm = ds_workTime.getCellData(k, "workStHh").substring(2, 4);
      wrkEndDt = ds_workTime.getCellData(k, "workEndDt");
      wrkEndHh = ds_workTime.getCellData(k, "workEndHh");
      wrkEndMm = ds_workTime.getCellData(k, "workEndHh").substring(2, 4);
      wrkStDtm = wrkStDt + wrkStHh;
      wrkEndDtm = wrkEndDt + wrkEndHh;
      if (wrkStMm != "00" && wrkStMm != "30") {
        await $c.win.alert($p, n + 1 + "번째의 시간은 30분 단위로 입력 가능합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workStHh");
        gr_wrkList.setFocusedCell(n, "workStHh", true);
        return false;
      }
      if (wrkEndMm != "00" && wrkEndMm != "30") {
        await $c.win.alert($p, n + 1 + "번째의 시간은 30분 단위로 입력 가능합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workEndHh");
        gr_wrkList.setFocusedCell(n, "workEndHh", true);
        return false;
      }
      if (ds_workTime.getCellData(k, "workStHh").substr(0, 2) > "23") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        ds_wrkList.setRowPosition(n);
        // gr_wrkList.SetColumn("workStHh");
        gr_wrkList.setFocusedCell(n, "workStHh", true);
        return;
      }
      if (ds_workTime.getCellData(k, "workStHh").substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        ds_wrkList.setRowPosition(n);
        // gr_wrkList.SetColumn("workStHh");
        gr_wrkList.setFocusedCell(n, "workStHh", true);
        return;
      }
      if (ds_workTime.getCellData(k, "workEndHh").substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        ds_wrkList.setRowPosition(n);
        // gr_wrkList.SetColumn("workEndHh");
        gr_wrkList.setFocusedCell(n, "workEndHh", true);
        return;
      }
      if (ds_workTime.getCellData(k, "workEndHh").substr(0, 2) == "00" && ds_workTime.getCellData(k, "workEndHh").substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        ds_wrkList.setRowPosition(n);
        // gr_wrkList.SetColumn("workEndHh");
        gr_wrkList.setFocusedCell(n, "workEndHh", true);
        return;
      }
      if (ds_workTime.getCellData(k, "workEndHh").substr(0, 2) == "24" && ds_workTime.getCellData(k, "workEndHh").substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        ds_wrkList.setRowPosition(n);
        // gr_wrkList.SetColumn("workEndHh");
        gr_wrkList.setFocusedCell(n, "workEndHh", true);
        return;
      }
      if (ds_workTime.getCellData(k, "workEndHh").substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        ds_wrkList.setRowPosition(n);
        // gr_wrkList.SetColumn("workEndHh");
        gr_wrkList.setFocusedCell(n, "workEndHh", true);
        return;
      }

      //입력한 작업시작일자가 조회일자이후인가
      if (wrkDt > wrkStDt) {
        await $c.win.alert($p, n + 1 + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workStDt");
        gr_wrkList.setFocusedCell(n, "workStDt", true);
        return false;
      }

      //입력한 작업시작일자가 하루를 초과하는가
      var diffDay = $c.date.diffDate($p, wrkDt, wrkStDt);
      if (diffDay > 1) {
        await $c.win.alert($p, n + 1 + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workStDt");
        gr_wrkList.setFocusedCell(n, "workStDt", true);
        return false;
      }

      //작업시작일자가 작업종료일자 이후 인가
      if (wrkStDt > wrkEndDt) {
        //await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
        await $c.win.alert($p, n + 1 + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workStDt");
        gr_wrkList.setFocusedCell(n, "workStDt", true);
        return false;
        break;
      }
      if (wrkStDtm > wrkEndDtm) {
        //await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
        await $c.win.alert($p, i + 1 + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workStHh");
        gr_wrkList.setFocusedCell(i, "workStHh", true);
        return false;
        break;
      }
      var diffDay = $c.date.diffDate($p, wrkDt, wrkEndDt);
      if (diffDay > 1) {
        await $c.win.alert($p, n + 1 + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
        // gr_wrkList.SetScrolling(n, 1); 
        // gr_wrkList.ColSelect = "true";
        // gr_wrkList.focus();
        // gr_wrkList.SetColumn("workEndDt");
        gr_wrkList.setFocusedCell(n, "workEndDt", true);
        return false;
      }
      var workSt = ds_workTime.getCellData(k, "workStDt") + ds_workTime.getCellData(k, "workStHh");
      var workEnd = ds_workTime.getCellData(k, "workEndDt") + ds_workTime.getCellData(k, "workEndHh");
      workSt = workSt.trim();
      workEnd = workEnd.trim();
      var startDate = workSt.toDate("YYYYMMDDHHmmss");
      var endDate = workEnd.toDate("YYYYMMDDHHmmss");
      var totalDate = (endDate - startDate) / 1000 / 60 / 60;
      if (totalDate >= 24) {
        await $c.win.alert($p, n + 1 + "번째 실적 작업일이 하루가 넘습니다.");
        return false;
      }
    }
    var sStDt = "";
    var sEndDt = "";
    var tStDt = "";
    var tEndDt = "";
    var cnt = 0;
    for (var k = 0; k < ds_workTime.getRowCount(); k++) {
      var m = 0;
      var n = 0;
      for (var l = 0; l < ds_wrkList.getRowCount(); l++) {
        n++;
        if (ds_wrkList.getCellData(l, "staffNo") == staffNo) {
          m++;
        }
        if (m == k) {
          break;
        }
      }

      // 2
      if (ds_workTime.getRowStatus(k) != "C") {
        sStDt = ds_workTime.getCellData(k, "workStDt") + ds_workTime.getCellData(k, "workStHh");
        sEndDt = ds_workTime.getCellData(k, "workEndDt") + ds_workTime.getCellData(k, "workEndHh");
        for (var l = k + 1; l <= ds_workTime.getRowCount(); l++) {
          if (ds_workTime.getRowStatus(l) != "C") {
            cnt = 0;
            tStDt = ds_workTime.getCellData(l, "workStDt") + ds_workTime.getCellData(l, "workStHh");
            tEndDt = ds_workTime.getCellData(l, "workEndDt") + ds_workTime.getCellData(l, "workEndHh");
            if (sStDt >= tStDt && sStDt >= tEndDt) {
              cnt = 1;
            } else if (sEndDt <= tStDt && sEndDt <= tEndDt) {
              cnt = 1;
            }
            if (cnt == 0) {
              await $c.win.alert($p, ds_workTime.getCellData(l, "staffNm") + "의 " + (n + 1) + "번째 근무시간이 중복되었습니다.");
              // gr_wrkList.SetScrolling(n, 1); 
              // gr_wrkList.ColSelect = "true";
              // gr_wrkList.focus();
              // gr_wrkList.SetColumn("workStDt");
              gr_wrkList.setFocusedCell(n, "workStDt", true);
              return false;
            }
          }
        }
      }
    }
    var q = 0;
    for (var p = 0; p < ds_workTime.getRowCount(); p++) {
      if (ds_workTime.getRowStatus(p) != "C") {
        q = q + 1;
      }
    }
    if (q <= 0) {
      break;
    }
  }
  return true;
};
scwin.f_checkVacationRefNo = async function () {
  var refNo = "";
  var stvWrkIndictNo = "";
  for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
    //if (ds_wrkList.RowStatus(i) == "0"){

    refNo = ds_wrkList.getCellData(i, "refNo");
    stvWrkIndictNo = ds_wrkList.getCellData(i, "stvWrkIndictNo");
    if (ed_refNo.getValue() == refNo && acb_wrkIndictNo.getValue() == stvWrkIndictNo) {
      await $c.win.alert($p, "해당작업지시에 기 등록된 인원입니다.");
      return false;
    }

    //}
  }
  return true;
};

//-------------------------------------------------------------------------
// 자동 셋팅
//-------------------------------------------------------------------------  
scwin.f_SetData = async function () {
  if (ed_refNo.getValue() == "") {
    await $c.win.alert($p, "관리번호를 입력하고 Shift 키를 치셔야 작업내용이 행추가 됩니다.");
  } else {
    scwin.f_RetrieveStaffInfo(ed_refNo.getValue());
    if (!(await scwin.f_checkVacationRefNo())) {
      return;
    }
    var rowIndex = ds_wrkList.insertRow();
    ds_wrkList.setRowPosition(rowIndex);
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNo", ds_hidden.get("hid_staffNo"));
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "staffNm", ed_staffNm2.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "refNo", ed_refNo.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "stvWrkIndictNo", acb_wrkIndictNo.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "info", ds_hidden.get("hid_vsslNm"));
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "shiftClsCd", ds_hidden.get("hid_shift"));
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workClsCd", acb_workClsCd.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workDt", ds_hidden.get("hid_wrkDt"));
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStDt", ica_workStDt.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workStHh", ed_workStHh.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndDt", ica_workEndDt.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "workEndHh", ed_workEndHh.getValue());

    //ds_wrkList.setCellData(ds_wrkList.getRowPosition(),"lnhWorkCnt") = ed_lnhWorkCnt.getValue(); 

    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "weatherCnt", $c.gus.cfIsNull($p, ed_weatherCnt.getValue()) ? "0" : ed_weatherCnt.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "bfWorkCnt", $c.gus.cfIsNull($p, ed_bfWorkCnt.getValue()) ? "0" : ed_bfWorkCnt.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "dnrWorkCnt", $c.gus.cfIsNull($p, ed_dnrWorkCnt.getValue()) ? "0" : ed_dnrWorkCnt.getValue());
    ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "sprWorkCnt", $c.gus.cfIsNull($p, ed_sprWorkCnt.getValue()) ? "0" : ed_sprWorkCnt.getValue());
  }
  ed_refNo.focus();
};
scwin.f_RetrieveDailymanCnt = function () {
  var wrkIndictNo = acb_wrkIndictNo.getValue();
  var totalCnt = "";
  var cnt = "";
  for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
    if (ds_wrkList.getCellData(i, "stvWrkIndictNo") == wrkIndictNo) {
      totalCnt = ds_wrkList.getCellData(i, "dailymanCnt");
      //return false;
    }
    if (ds_wrkList.getCellData(i, "stvWrkIndictNo") == wrkIndictNo) {
      cnt++;
      //return false;
    }
  }
  ed_dailymanCnt.setValue(cnt);
  ed_dailymanCnt2.setValue(totalCnt);
};

//-------------------------------------------------------------------------
// 자동 셋팅
//-------------------------------------------------------------------------  
scwin.f_SetDataDefault = function () {
  ds_hidden.set("hid_staffNo", "");
  ed_staffNm2.setValue("");
  ed_refNo.setValue("");
  acb_wrkIndictNo.setValue("");
  ds_hidden.set("hid_vsslNm", "");
  ds_hidden.set("hid_shift", "");
  acb_workClsCd.setValue("A");
  ds_hidden.set("hid_wrkDt", "");
  ica_workStDt.setValue("");
  ed_workStHh.setValue("");
  ica_workEndDt.setValue("");
  ed_workEndHh.setValue("");
  ed_weatherCnt.setValue("");
  ed_bfWorkCnt.setValue("");
  ed_dnrWorkCnt.setValue("");
  ed_sprWorkCnt.setValue("");
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
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
  scwin.f_Retrieve();
  ds_wrkList.setRowPosition(scwin.curRow);
  scwin.f_SetDataDefault();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // 총 조회건수 표시
  var rowCnt = ds_wrkList.getRowCount();
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    ed_dailymanCnt.setValue("");
    ed_dailymanCnt2.setValue("");
  }
  var northDay = 0;
  var northNight = 0;
  var inDay = 0;
  var inNight = 0;
  for (var i = 0; i < ds_wrkList.getRowCount(); i++) {
    if (ds_wrkList.getCellData(i, "districtCd") == "INP") {
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "D") {
        northDay++;
      }
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "N") {
        northNight++;
      }
    }
    if (ds_wrkList.getCellData(i, "districtCd") == "IIP") {
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "D") {
        inDay++;
      }
      if (ds_wrkList.getCellData(i, "shiftClsCd") == "N") {
        inNight++;
      }
    }
  }
  ed_inDay.setValue(inDay);
  ed_inNight.setValue(inNight);
  ed_northDay.setValue(northDay);
  ed_northNight.setValue(northNight);
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
      var pCode = "";
      var pName = ica_wrkDt.getValue();
      var pWrkIndictNo = ds_wrkList.getCellData(row, "stvWrkIndictNo").replace(/\s*$/, '');
      ds_wrkList.setCellData(row, "info", "");
      ds_wrkList.setCellData(row, "shiftClsCd", "");
      ds_wrkList.setCellData(row, "wrkStpCd", "");
      ds_wrkList.setCellData(row, "workStDt", "");
      ds_wrkList.setCellData(row, "workStHh", "");
      ds_wrkList.setCellData(row, "workEndDt", "");
      ds_wrkList.setCellData(row, "workEndHh", "");
      rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null) {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", rtnList[0]);
        ds_wrkList.setCellData(row, "info", rtnList[3]);
        ds_wrkList.setCellData(row, "shiftClsCd", rtnList[5]);
        ds_wrkList.setCellData(row, "workStDt", rtnList[10]);
        ds_wrkList.setCellData(row, "workStHh", rtnList[11]);
        ds_wrkList.setCellData(row, "workEndDt", rtnList[12]);
        ds_wrkList.setCellData(row, "workEndHh", rtnList[13]);
        scwin.v_workClsCd = rtnList[1];
      } else {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
      }
      break;
  }
};
scwin.gr_wrkList_oneditend = function (row, columnIndex, value) {
  var colid = ds_wrkList.getColumnID(columnIndex);
  var olddata = ds_wrkList.getCellData(row, colid);
  var newdata = value;
  switch (colid) {
    case "staffNo":
      if (newdata != "" && newdata != olddata) {} else if (newdata == "") {
        scwin.emptyVal = true;
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
      }
      break;
    case "staffNm":
      if (newdata != "" && newdata != olddata) {} else if (newdata == "") {
        scwin.emptyVal = true;
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
      }
      break;
    case "stvWrkIndictNo":
      break;
  }
};
scwin.gr_wrkList_onafteredit = async function (row, columnIndex, value) {
  $p.setTimeout(async function () {
    if (scwin.textImageClick || scwin.emptyVal) {
      scwin.textImageClick = false;
      scwin.emptyVal = false;
      return;
    }
    scwin.textImageClick = false;
    scwin.emptyVal = false;
    var colid = ds_wrkList.getColumnID(columnIndex);
    switch (colid) {
      case "staffNo":
        ds_wrkList.setCellData(row, "staffNm", "");
        scwin.f_openGridCommonPopUp(1, row, "T");
        break;
      case "staffNm":
        ds_wrkList.setCellData(row, "staffNo", "");
        scwin.f_openGridCommonPopUp(2, row, "T");
        break;
      case "stvWrkIndictNo":
        scwin.bOnPopUp = true;
        var pCode = "P";
        var pName = ica_wrkDt.getValue();
        var pWrkIndictNo = ds_wrkList.getCellData(row, "stvWrkIndictNo").replace(/\s*$/, '');
        ds_wrkList.setCellData(row, "info", "");
        ds_wrkList.setCellData(row, "shiftClsCd", "");
        rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "T", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
        if (rtnList != null) {
          ds_wrkList.setCellData(row, "stvWrkIndictNo", rtnList[0]);
          ds_wrkList.setCellData(row, "info", rtnList[3]);
          ds_wrkList.setCellData(row, "shiftClsCd", rtnList[5]);
          scwin.v_workClsCd = rtnList[1];
        } else {
          ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
        }
        break;
    }
  }, {
    "delay": 50
  });
};
scwin.gr_wrkList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  // if (row < 1) return;
  // switch (colid) {
  // 	case "workDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  
  // 	case "workStDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  
  // 	case "workEndDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  
  // 	default :
  // 		this.UrlImages = SEARCH_BTN;
  // 		break;
  // }
};
scwin.ed_refNo_onblur = function (e) {
  ed_staffNm2.setValue("");
  if (ed_refNo.getValue() != "") {
    scwin.f_RetrieveStaffInfo(ed_refNo.getValue());
  }
};
scwin.acb_wrkIndictNo_onselected = function () {
  var str = acb_wrkIndictNo.getSelectedRow().label;
  scwin.wrkInfo = str.split('/');
  scwin.wrkInfo2 = scwin.wrkInfo[0].split('-');
  ds_hidden.set("hid_wrkDt", scwin.wrkInfo2[0]);
  if (scwin.wrkInfo2[1] == "주간") {
    ds_hidden.set("hid_shift", "D");
  } else if (scwin.wrkInfo2[1] == "야간") {
    ds_hidden.set("hid_shift", "N");
  }
  ds_hidden.set("hid_vsslNm", scwin.wrkInfo[1]);
  ica_workStDt.setValue(scwin.wrkInfo[3]);
  ed_workStHh.setValue(scwin.wrkInfo[4]);
  ica_workEndDt.setValue(scwin.wrkInfo[5]);
  ed_workEndHh.setValue(scwin.wrkInfo[6]);
  scwin.f_RetrieveDailymanCnt();
};
scwin.ed_workEndHh_onkeydown = function (e) {
  scwin.enterInputSetData(e);
};
scwin.ed_weatherCnt_onkeydown = function (e) {
  scwin.enterInputSetData(e);
};
scwin.ed_bfWorkCnt_onkeydown = function (e) {
  scwin.enterInputSetData(e);
};
scwin.ed_dnrWorkCnt_onkeydown = function (e) {
  scwin.enterInputSetData(e);
};
scwin.ed_sprWorkCnt_onkeydown = function (e) {
  scwin.enterInputSetData(e);
};
scwin.udc_staff_callBackFunc = function (ref) {
  if (ref != null) {
    ed_staffNo.setValue(ref[0]); //사원코드
    ed_staffNm.setValue(ref[1]); //사원명
    return;
  } else {
    ed_staffNo.setValue(''); //사원코드
    ed_staffNm.setValue(''); //사원명
    return;
  }
};
scwin.ed_refNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.enterInputSetData = function (e) {
  var kcode = e.keyCode;
  switch (kcode) {
    case 13:
      scwin.f_SetData();
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_lobranCd',ref:'data:ds_condition.lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'근무일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',pickerType:'dynamic',style:'',mandatory:'true',title:'근무일자',objType:'data',ref:'data:ds_condition.wrkDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_staffNo',nameId:'ed_staffNm',id:'udc_staff',btnId:'btn_PopUp2',allowCharCode:'a-zA-Z0-9',UpperFlag:'1',maxlengthCode:'6',UpperFlagCode:'1',objTypeCode:'data','ev:onviewchangeNameEvent':'scwin.udc_staff_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_staff_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staff_onblurCodeEvent',refDataCollection:'ds_condition',code:'staffNo'}},{T:1,N:'w2:udc_comCode',A:{UpperFlag:'1',codeId:'',id:'udc_gridPopup',nameId:'',popupID:'',style:'display: none;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역인원실적내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_wrkList',gridDownFn:'scwin.excelDown',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',visibleRowNum:'8',visibleRowNumFix:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_wrkList_ontextimageclick','ev:oneditend':'scwin.gr_wrkList_oneditend','ev:oncellindexchange':'scwin.gr_wrkList_oncellindexchange','ev:onafteredit':'scwin.gr_wrkList_onafteredit',dataName:'근무시간',validFeatures:'ignoreStatus=no',validExp:'staffNo:사번:yes:legnth=6,stvWrkIndictNo:작업지시번호:yes'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'지역',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사번',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'성명',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'관리<br/>번호',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업<br/>지시번호',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'본선/<br/>작업장',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Shift',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'구분',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작업일',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업정보',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'column49',value:'작업정보',displayMode:'label',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column34',value:'순번',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'본선관리번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'본선코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'작업장코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column81',value:'인원수',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',value:'시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'우설천',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',value:'조출',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'중식연장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'석출',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',value:'연장',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역',width:'50',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'select'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IIP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INP'}]}]}]}]},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'55',textAlign:'center',displayMode:'label',inputType:'textImage',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'55',textAlign:'center',displayMode:'label',inputType:'textImage'}},{T:1,N:'w2:column',A:{id:'refNo',name:'관리',width:'50',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업',width:'90',textAlign:'left',displayMode:'label',inputType:'textImage',mandatory:'true'}},{T:1,N:'w2:column',A:{id:'info',name:'본선/',width:'80',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',width:'55',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'autoComplete'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'구분',width:'55',textAlign:'left',displayMode:'label',inputType:'autoComplete'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업일',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'일자',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'시간',width:'45',textAlign:'center',displayMode:'label',inputType:'text',displayFormat:'##:##',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'일자',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'시간',width:'45',textAlign:'center',displayMode:'label',inputType:'text',displayFormat:'##:##',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt',name:'우설천',width:'40',textAlign:'center',displayMode:'label',inputType:'select',selectedData:'false',defaultValue:'0',dataType:'number',excelCellType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{id:'bfWorkCnt',name:'조출',width:'40',textAlign:'center',displayMode:'label',inputType:'select',selectedData:'false',defaultValue:'0',dataType:'number',excelCellType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{id:'lnhWorkCnt',name:'중식',width:'40',textAlign:'center',hidden:'true',displayMode:'label',inputType:'select',defaultValue:'0',dataType:'number',excelCellType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{id:'dnrWorkCnt',name:'석출',width:'40',textAlign:'center',displayMode:'label',inputType:'select',selectedData:'false',defaultValue:'0',dataType:'number',excelCellType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{id:'sprWorkCnt',name:'연장',width:'40',textAlign:'center',displayMode:'label',inputType:'select',selectedData:'false',defaultValue:'0',dataType:'number',excelCellType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{id:'seq',name:'순번',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt',name:'인원수',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'districtCd_tot',name:'지역',width:'50',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo_tot',name:'사번',width:'55',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm_tot',name:'성명',width:'55',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'refNo_tot',name:'관리',width:'50',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo_tot',name:'작업',width:'90',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'info_tot',name:'본선/',width:'80',textAlign:'left',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd_tot',name:'Shift',width:'55',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd_tot',name:'구분',width:'55',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workDt_tot',name:'작업일',width:'70',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt_tot',name:'일자',width:'70',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh_tot',name:'시간',width:'45',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt_tot',name:'일자',width:'70',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh_tot',name:'시간',width:'45',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'weatherCnt_tot',name:'우설천',width:'40',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'bfWorkCnt_tot',name:'조출',width:'40',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'lnhWorkCnt_tot',name:'중식',width:'40',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'dnrWorkCnt_tot',name:'석출',width:'40',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'sprWorkCnt_tot',name:'연장',width:'40',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'seq_tot',name:'순번',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo_tot',name:'본선관리번호',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd_tot',name:'본선코드',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd_tot',name:'작업장코드',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'dailymanCnt_tot',name:'인원수',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_wrkList',rowAddUserAuth:'C',rowDelUserAuth:'C',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:18%;'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:18%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:120px;',id:'acb_wrkIndictNo',class:'',allOption:'',chooseOption:'',ref:'',title:'점소',objType:'key','ev:onselected':'scwin.acb_wrkIndictNo_onselected',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_workStDt',class:'',calendarValueType:'yearMonthDate',objType:'data',title:'작업시작일자',displayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:input',A:{dataType:'time',style:'width: 50px;',id:'ed_workStHh',class:'tac',title:'작업시작시간',objType:'data',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_workEndDt',class:'',calendarValueType:'yearMonthDate',title:'작업종료일자',objType:'data',displayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:input',A:{dataType:'time',style:'width: 50px;',id:'ed_workEndHh',class:'tac','ev:oneditenter':'scwin.ed_workEndHh_oneditenter',title:'작업종료시간',allowChar:'0-9',objType:'data','ev:onkeydown':'scwin.ed_workEndHh_onkeydown'}}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'acb_workClsCd',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_refNo',placeholder:'',class:'',maxlength:'6',allowChar:'a-zA-Z0-9',UpperFlag:'1',title:'관리번호',objType:'data','ev:onblur':'scwin.ed_refNo_onblur','ev:onkeyup':'scwin.ed_refNo_onkeyup'}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_staffNm2',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'추가항목 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_weatherCnt',placeholder:'',style:'width:30px;',objType:'data',title:'작업시작일자',allowChar:'0-9',maxlength:'1','ev:onkeydown':'scwin.ed_weatherCnt_onkeydown'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bfWorkCnt',placeholder:'',style:'width:30px;',objType:'data',title:'작업시작일자',allowChar:'0-9',maxlength:'1','ev:onkeydown':'scwin.ed_bfWorkCnt_onkeydown'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dnrWorkCnt',placeholder:'',style:'width:30px;',objType:'data',title:'작업시작일자',allowChar:'0-9',maxlength:'1','ev:onkeydown':'scwin.ed_dnrWorkCnt_onkeydown'}},{T:1,N:'xf:input',A:{class:'',id:'ed_sprWorkCnt',placeholder:'',style:'width:30px;',objType:'data',title:'작업시작일자',allowChar:'0-9',maxlength:'1','ev:onkeydown':'scwin.ed_sprWorkCnt_onkeydown'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적인원/총인원',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_dailymanCnt',placeholder:'',style:'width:70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_dailymanCnt2',placeholder:'',style:'width:70px;'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주간',class:''}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_inDay',placeholder:'',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'야간',class:''}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_inNight',placeholder:'',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'북항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주간',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_northDay',placeholder:'',style:'width:70px;'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'야간',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_northNight',placeholder:'',style:'width:70px;'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_delete',style:'width: 70px;height: 31px;display:none','ev:onclick':'scwin.btn_delete_onclick',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-ico ',escape:'false',id:'',label:'일용직 실적등록 방법',style:''}},{T:1,N:'xf:group',A:{id:'',class:'info-con'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'1. 근무일자를 입력한 후 조회하면 작업지시 콤보박스에 작업지시 목록이 나타납니다.',class:'',escape:'false',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'2. 작업지시를 선택하면 일시가 자동으로 셋팅됩니다.',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'3. 배치/작업준비 선택',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'4. 일용직 인원의 관리번호를 입력(등록되지 않은 번호인 경우 메시지로 알림)',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'5. 추가항목에는 순서대로 우설천/조식연장/중식연장/저녁연장/야식연장 에 대해 횟수 입력',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'6. [Enter] 키를 누르면 해당 내용을 상단 그리드에 행추가 할 수 있습니다.',style:'',tagname:'p'}}]}]}]}]}]}]}]})