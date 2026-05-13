/*amd /ui/ds/op/stvwrk/op_210_01_13b.xml 39869 e90f242b7903308c285bcd195999e89f5b1f3f72ed8f201ccd28c2d6048c57e0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtClsCd',name:'적용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'missingAmt',name:'누락금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_staff_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'co_ds_combo1',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveDailyStaffMissingWageListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveDailyStaffMissingWageCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_staff',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_staff_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_01_13b 
// 이름     : 일용직 누락관리
// 경로     : 물류/하역(인천)/현황/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-04-02
// 사용계정 : 내부
// 비고     : ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd"); // 물류 점소 코드
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vadptYm = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)

  scwin.v_workClsCd = "";
  scwin.bOnPopUp = false;
  scwin.wrkInfo = new Array();
  scwin.wrkInfo2 = new Array();
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_SetDefaultData();
    $c.gus.cfDisableObjects($p, [ed_staffNo, ed_staffNm]);

    // $p.setTimeout(function() {
    //     ica_adptYm.setValue("202504");
    //     lc_lobranCd.setValue("4AA");
    // }, {"delay":100});
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_adptYm.setValue(scwin.vCurDate);
  lc_lobranCd.setValue(scwin.lobranCd);
  lc_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ica_adptYm]))) {
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
    if (!(await $c.gus.cfValidate($p, [gr_wrkList], null, true))) return;
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["일용직 누락관리"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function (gbn) {
  switch (gbn) {
    case '1':
      var rowIndex = ds_wrkList.insertRow();
      ds_wrkList.setRowPosition(rowIndex);
      ds_wrkList.setCellData(ds_wrkList.getRowPosition(), "adptYm", ica_adptYm.getValue());
      gr_wrkList.setFocusedCell(ds_wrkList.getRowPosition(), 0);
      break;
  }
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_DeleteRow = function (gbn) {
  var rowIndex = ds_wrkList.getRowPosition();
  if (rowIndex != -1) {
    var status = ds_wrkList.getRowStatus(rowIndex);
    if (status == "C") {
      ds_wrkList.removeRow(rowIndex);
    } else {
      ds_wrkList.deleteRow(rowIndex);
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
  var vDay = "점소 | " + lc_lobranCd.getText(true) + " | " + "작업일자 | " + ica_adptYm.getValue();
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var pWhere = lc_lobranCd.getValue();
      udc_staff.setSelectId('retrieveStvArrangementDailyManList');
      udc_staff.cfCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          ed_staffNo.setValue(rtnList[0]); //사원코드
          ed_staffNm.setValue(rtnList[1]); //사원명
        } else {
          ed_staffNo.setValue(''); //사원코드
          ed_staffNm.setValue(''); //사원명
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
      //일용직			
      pCode = ds_wrkList.getCellData(row, "staffNo");
      pName = "";
      pWhere = lc_lobranCd.getValue();
      udc_grdComcode.setSelectId('retrieveStvArrangementDailyManList');
      udc_grdComcode.cfCommonPopUp(function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", rtnList[0]);
          ds_wrkList.setCellData(row, "staffNm", rtnList[1]);
          ds_wrkList.setCellData(row, "refNo", rtnList[8]);
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
      pWhere = lc_lobranCd.getValue();
      udc_grdComcode.setSelectId('retrieveStvArrangementDailyManList');
      udc_grdComcode.cfCommonPopUp(function (rtnList) {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ds_wrkList.setCellData(row, "staffNo", rtnList[0]);
          ds_wrkList.setCellData(row, "staffNm", rtnList[1]);
          ds_wrkList.setCellData(row, "refNo", rtnList[8]);
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
// function f_CopyDataRow(sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded){
// 	try {
// 		if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
// 		if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
// 		if (sourceColumns == null) sourceColumns = f_GetColumnNames(sourceDataset);
// 		if (targetColumns == null) targetColumns = sourceColumns;
// 		if (sourceRow == null) sourceRow = sourceDataset.RowPosition;
// 		if (targetRow == null) targetRow = f_AddDataRow(targetDataset);
// 		for (var i=0; i < sourceColumns.length; i++) {
// 			if (cfIsNull(sourceColumns[i]) || cfIsNull(targetColumns[i])) continue;
// 				targetDataset.NameString(targetRow,targetColumns[i]) = sourceDataset.NameString(sourceRow,sourceColumns[i]);
// 			if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
// 		}
// 		return targetRow;
// 	} catch (e) {
// 		await $c.gus.cfAlertMsg("[f_CopyDataRow]" + e);
// 	}
// };

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
// function f_GetColumnNames(dataSet) {
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
// 		await $c.gus.cfAlertMsg("[f_GetColumnNames] " + e.Description);
// 	}
// };

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
// function f_AddDataRow(dataSet){
//   	dataSet.AddRow();
//   	return dataSet.RowPosition;
// }

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
    if (ds_staff.getRowCount() == 0) {
      await $c.win.alert($p, "해당 관리번호에 사번이 존재하지 않습니다. 확인 후 입력해 주세요");
      ed_refNo.setValue("");
      return false;
    } else {
      ed_staffNo.setValue(ds_staff.getCellData(0, "code"));
      ed_staffNm.setValue(ds_staff.getCellData(0, "name"));
    }
  }
  ;
};

//-------------------------------------------------------------------------
//  인원  조회
//-------------------------------------------------------------------------  
scwin.f_RetrieveStaffInfo2 = async function (row) {
  var refNo = ds_wrkList.getCellData(row, "refNo");

  // ds_staff.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=StvWrkEBC&queryId=retrieveStaffInfoCombo&param1=" + refNo;	
  // ds_staff.Reset();

  ds_staff_search.set("sysCd", "StvWrkEBC");
  ds_staff_search.set("queryId", "retrieveStaffInfoCombo");
  ds_staff_search.set("param1", refNo);
  var rs = await $c.sbm.execute($p, sbm_staff);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_staff.setJSON(rs.responseJSON.GAUCE);
    if (ds_staff.getRowCount() == 0) {
      await $c.win.alert($p, "해당 관리번호에 사번이 존재하지 않습니다. 확인 후 입력해 주세요");
      ds_wrkList.setCellData(row, "refNo", "");
      ds_wrkList.setCellData(row, "staffNo", "");
      ds_wrkList.setCellData(row, "staffNm", "");
      return false;
    } else {
      ds_wrkList.setCellData(row, "staffNo", ds_staff.getCellData(0, "code"));
      ds_wrkList.setCellData(row, "staffNm", ds_staff.getCellData(0, "name"));
    }
  }
};
scwin.ed_refNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_staffNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_staffNm_onchange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_wrkList, '일용직 누락관리');
};
scwin.addRow = function (e) {
  scwin.f_AddRow('1');
};
scwin.delRow = function (e) {
  scwin.f_DeleteRow('1');
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    var rowCnt = ds_wrkList.getRowCount();
    // 총 조회건수 표시
    txt_totalRows.setValue(rowCnt);
    // cfShowTotalRows(totalRows, rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    }
  }
};
scwin.gr_wrkList_oneditend = function (row, columnIndex, value) {
  var colid = gr_wrkList.getColumnID(columnIndex);
  var newdata = value;
  var olddata = ds_wrkList.getCellData(row, colid);
  scwin.editYn = false;
  switch (colid) {
    case "staffNo":
      if (newdata != "" && newdata != olddata) {
        scwin.editYn = true;
      }
      break;
    case "staffNm":
      if (newdata != "" && newdata != olddata) {
        scwin.editYn = true;
      }
      break;
    case "refNo":
      if (newdata != "" && newdata != olddata) {
        scwin.editYn = true;
      }
      break;
  }
};
scwin.gr_wrkList_onafteredit = function (row, columnIndex, value) {
  var colid = gr_wrkList.getColumnID(columnIndex);
  switch (colid) {
    case "staffNo":
      if (scwin.editYn) {
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "refNo", "");
        scwin.f_openGridCommonPopUp(1, row, "T");
      } else {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "refNo", "");
      }
      break;
    case "staffNm":
      if (scwin.editYn) {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "refNo", "");
        scwin.f_openGridCommonPopUp(2, row, "T");
      } else {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "refNo", "");
      }
      break;
    case "refNo":
      if (scwin.editYn) {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
        scwin.f_RetrieveStaffInfo2(row);
      } else {
        ds_wrkList.setCellData(row, "staffNo", "");
        ds_wrkList.setCellData(row, "staffNm", "");
        ds_wrkList.setCellData(row, "refNo", "");
      }
      break;
  }
};
scwin.gr_wrkList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_wrkList.getRowStatus(rowIndex) != "C") {
    gr_wrkList.setCellReadOnly(rowIndex, 'adptYm', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNo', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNm', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'refNo', true);
  } else {
    gr_wrkList.setCellReadOnly(rowIndex, 'adptYm', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNo', false);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNm', false);
    gr_wrkList.setCellReadOnly(rowIndex, 'refNo', false);
  }
};
scwin.gr_wrkList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  // var colid = gr_wrkList.getColumnID(columnIndex);
  // switch (colid) {
  // 	case "workDt":
  // 		this.UrlImages = CALENDAR_BTN;
  // 		break;  	
  // 	default :
  // 		this.UrlImages = SEARCH_BTN;
  // 		break;
  // }

  if (ds_wrkList.getRowStatus(rowIndex) != "C") {
    gr_wrkList.setCellReadOnly(rowIndex, 'adptYm', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNo', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNm', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'refNo', true);
  } else {
    gr_wrkList.setCellReadOnly(rowIndex, 'adptYm', true);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNo', false);
    gr_wrkList.setCellReadOnly(rowIndex, 'staffNm', false);
    gr_wrkList.setCellReadOnly(rowIndex, 'refNo', false);
  }
};
scwin.ed_refNo_onblur = function (e) {
  ed_staffNo.setValue("");
  ed_staffNm.setValue("");
  if (ed_refNo.getValue() != "") {
    scwin.f_RetrieveStaffInfo(ed_refNo.getValue());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_condition.lobranCd',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_adptYm',pickerType:'dynamic',style:'',mandatory:'true',title:'적용년월',objType:'data',ref:'data:ds_condition.adptYm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_refNo',placeholder:'',style:'width: 70px;',allowChar:'a-zA-Z0-9',maxlength:'6',title:'관리번호','ev:onkeyup':'scwin.ed_refNo_onkeyup','ev:onblur':'scwin.ed_refNo_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_staffNo',placeholder:'',style:'width:100px;',allowChar:'a-zA-Z0-9',maxlength:'6','ev:onkeyup':'scwin.ed_staffNo_onkeyup',ref:'data:ds_condition.staffNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_staffNm',placeholder:'',style:'width:100px;','ev:onchange':'scwin.ed_staffNm_onchange'}}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',progressBarSwitch:'Y',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'display: none;',id:'udc_grdComcode'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일용직 누락관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.excelDown',gridID:'gr_wrkList',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'일용직 누락관리',validFeatures:'ignoreStatus=no',validExp:'staffNo:사번:yes:legnth=6,districtCd:권역:yes,workDt:발생일자:yes:date=YYYYMMDD&legnth=8,rmk:비고:yes:legnth=1000','ev:onafteredit':'scwin.gr_wrkList_onafteredit','ev:oncellclick':'scwin.gr_wrkList_oncellclick','ev:oneditend':'scwin.gr_wrkList_oneditend','ev:oncellindexchange':'scwin.gr_wrkList_oncellindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'적용년월',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'권역',width:'140',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'관리번호',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'사번',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'성명',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'발생일자',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'적용구분',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'누락금액',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'비고',width:'300',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'순번',width:'70',hidden:'true',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',width:'80',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'calendar',style:'',value:'',displayFormat:'yyyy/MM',dataType:'date',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역',width:'130',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IIP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천항동'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IHP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천연안'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IYP'}]}]}]}]},{T:1,N:'w2:column',A:{id:'refNo',name:'관리',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'workDt',name:'발생일자',width:'90',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{id:'amtClsCd',name:'적용구분',width:'90',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:'',allOption:'',chooseOption:'',ref:'',defaultValue:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHIFT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'직급수당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{id:'missingAmt',name:'누락금액',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:'',defaultValue:'0',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',width:'300',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'adptYm_tot',name:'적용년월',width:'80',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'districtCd_tot',name:'권역',width:'130',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'refNo_tot',name:'관리',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNo_tot',name:'사번',width:'80',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNm_tot',name:'성명',width:'80',textAlign:'center',readOnly:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'workDt_tot',name:'발생일자',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'amtClsCd_tot',name:'적용구분',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'',name:'누락금액',width:'90',textAlign:'right',displayFormat:'#,###',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rmk_tot',name:'비고',width:'300',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'seq_tot',name:'순번',width:'80',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_wrkList',rowAddUserAuth:'C',rowDelUserAuth:'C',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.delRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})