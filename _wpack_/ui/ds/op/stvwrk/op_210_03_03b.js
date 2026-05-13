/*amd /ui/ds/op/stvwrk/op_210_03_03b.xml 45501 13db6597bd678a918f6d758759e34f5673a34c350cc497834ee8746af747bb34 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Present',saveRemovedData:'true','ev:ondataload':'scwin.ds_Present_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'인원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'entDt',name:'입사일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnCd',name:'휴무사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalVacaCnt',name:'총연차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaCnt',name:'사용연차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainVacaCnt',name:'잔여연차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptCd',name:'lodeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptNm',name:'lodeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnNm',name:'vacaRsnNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgVacaStDt',name:'orgVacaStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgVacaEndDt',name:'orgVacaEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outFlag',name:'outFlag',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'confirmYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'wrkPlClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'occpgrdCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'occpgrdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'monthVacaCnt',name:'monthVacaCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orderSeq',name:'orderSeq',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaMonth',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lodeptCd',name:'lodeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaDt',name:'vacaDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'confirmYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'wrkPlClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_occptypeCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dtlOccptypeCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_dtlOccptypeCd_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empYn',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveTempVacationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Present","key":"OUT_DS1"},{"id":"ds_Query","key":"IN_DS1"}]',target:'data:json,{"id":"ds_Present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveCommStaffPostVacationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_Present","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dtlOccptypeCd',action:'/ds.co.RetreiveLubCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_dtlOccptypeCd_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_03_03b 
// 이름     : 상용직 연차등록
// 경로     : 물류/하역(인천)/실적/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-05
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  // 세션정보 가져오기
  scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)
  scwin.vPrevDate = $c.date.addDate($p, scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)), -30);
  scwin.varvStDt = scwin.vPrevDate.substring(0, 8);
  scwin.vPrevDate1 = $c.date.addDate($p, scwin.vCurDate, -31);
  scwin.flag = $c.data.getParameter($p, "pop_flag") == null ? "" : $c.data.getParameter($p, "pop_flag");
  scwin.staffNo = $c.data.getParameter($p, "staffNo") == null ? "" : $c.data.getParameter($p, "staffNo");
  scwin.staffNm = $c.data.getParameter($p, "staffNm") == null ? "" : $c.data.getParameter($p, "staffNm");
  scwin.vacaMonth = $c.data.getParameter($p, "vacaMonth") == null ? "" : $c.data.getParameter($p, "vacaMonth");
  scwin.lobranCd = $c.data.getParameter($p, "lobranCd") == null ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.strFromDate = "";
  scwin.strToDate = "";
  scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.totalCnt = 0;
  scwin.valueObject = $p.getAllParameter().paramData.data;
  if (scwin.vacaMonth == null || scwin.vacaMonth == "") {
    scwin.strFromDate = "";
    scwin.strToDate = "";
  } else {
    scwin.strFromDate = scwin.vacaMonth + "01";
    scwin.lastDay = scwin.sDate.getLastDate(scwin.strFromDate);
    scwin.strToDate = scwin.strFromDate.substring(0, 6) + Integer.toString(scwin.lastDay); // 현재월의 마지막일자를 구한다.	        
  }
  const codeOptions = [{
    grpCd: "OP160",
    compID: "acb_occptypeCd"
  }, {
    grpCd: "OP164",
    compID: "gr_emp:vacaRsnCd"
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
    acb_occptypeCd.addItem("전체", "", "", 0);
    acb_occptypeCd.setSelectedIndex(0);
  }
  ;
  ds_dtlOccptypeCd_search.set("lobranCd", "OP161");
  ds_dtlOccptypeCd_search.set("occptypeCd", acb_occptypeCd.getValue());
  ds_dtlOccptypeCd_search.set("empYn", "Y");
  var rs = await $c.sbm.execute($p, sbm_dtlOccptypeCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_dtlOccptypeCd.setJSON(rs.responseJSON.GAUCE);
    acb_dtlOccptypeCd.addItem("전체", "", "", 0);
    acb_dtlOccptypeCd.setSelectedIndex(0);
  }
  ;
  ica_vacaStDt.setValue(scwin.vPrevDate1);
  ica_vacaEndDt.setValue(scwin.vCurDate);
  ica_vacaMonth.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  acb_lobranCd.setValue(scwin.loUpperLobranCd);
  acb_occptypeCd.setValue("01");
  acb_dtlOccptypeCd.setValue("17");
  $c.gus.cfDisableObjects($p, [acb_occptypeCd, acb_dtlOccptypeCd]);
  acb_lobranCd.focus();
  if (scwin.staffNo == "Detail") {
    ica_vacaStDt.setValue(scwin.strFromDate);
    ica_vacaEndDt.setValue(scwin.strToDate);
    ica_vacaMonth.setValue(scwin.vacaMonth);
    ed_staffNo.setValue(scwin.staffNo);
    ed_staffNm.setValue(scwin.staffNm);
    acb_lobranCd.setValue(scwin.lobranCd);
    scwin.f_Retrieve();
  }

  // $p.setTimeout(function() {
  //     acb_lobranCd.setValue("4AA");
  //     ica_vacaStDt.setValue("20170806");
  //     ica_vacaEndDt.setValue("20170807");
  //     scwin.f_Retrieve();
  // }, {"delay":150});
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_vacaStDt.getValue() == "" || ica_vacaEndDt.getValue() == "" || ica_vacaMonth.getValue() == "") {
    await $c.win.alert($p, "휴무일자 또는 기준년도를 입력하세요");
    return;
  }
  // 조회일자 from ~ to 체크	
  if (!$c.gus.cfIsAfterDate($p, ica_vacaStDt.getValue(), ica_vacaEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // "시작일자가 종료일자 이전이어야 합니다."
    ica_vacaStDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //alert(ds_Present.ExportData(1,ds_Present.CountRow,true));

  var StDt = ds_Present.getCellData(ds_Present.getRowPosition(), "vacaStDt");
  var EndDt = ds_Present.getCellData(ds_Present.getRowPosition(), "vacaEndDt");

  // 아무 액션 취하지 않은 상태서 저장버튼 클릭시
  var modifyRowCnt = ds_Present.getModifiedIndex().length;
  if (!(modifyRowCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터 "]);
    return;
  }
  //필수입력항목 null 체크
  if (!(await $c.gus.cfValidate($p, [gr_emp], "", true))) {
    return;
  }

  // 시작일자가 종료일자보다 이후일 경우
  if (!$c.gus.cfIsAfterDate($p, StDt, EndDt, false)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return false;
  }

  //저장하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
  txt_totalRows.setValue(ds_Present.getRowCount());
  // totalRows.innerHTML = "총 " + ds_Present.RealCount(0,ds_Present.CountRow) + "건";	   // 소계 부분을 뺀 실제 데이터 갯수를 Count...
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_mainData, null);
  ica_vacaStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_vacaEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_vacaMonth.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  acb_lobranCd.setValue(scwin.loUpperLobranCd);
  acb_lobranCd.focus();
};

// //------------------------------------------------------
// // object 데이타 변경시 호출
// //------------------------------------------------------
// scwin.f_chkField = function (chgValue1, chgValue2, disGubun){
//     // var chgObj1 = eval(chgValue1);
//     // var chgObj2 = eval(chgValue2);
//     var chgObj1 = "";
//     var chgObj2 = "";
//     var objType1 = chgValue1.substr(0,2);
//     var objType2 = chgValue2.substr(0,2);
//     if (objType1 == "ed") {
//         if (chgObj1.getValue().trim() == "") {
//             chgObj2.setValue("");
//         } else {
//             scwin.f_openPopUp(disGubun, "T");
//         } 
//     } else {
//         if (chgObj1.getValue().trim() == "") {
//             if (objType2 == "ed" ) {
//                 chgObj2.setValue("");
//             } else {
//                 chgObj2.setValue("");
//             }
//         } else {
//             if (chgObj1.hidVal != null && chgObj1.value == chgObj1.hidVal)
//                 return;
//             scwin.f_openPopUp(disGubun, "T");
//         } 
//     }
//     cfClearPairObj(chgValue1);
// }	
// //-------------------------------------------------------------------------
// // 물류부서 팝업
// //-------------------------------------------------------------------------
// scwin.f_openPopUp = function (disGubun,val) {
//     var rtnList = new Array();
//     var lobranCd = "";
//     var param1 = "";
//     var param2 = "";
//     var paramList = "";
//     if (disGubun == "1") {
//         lobranCd = acb_lobranCd.ValueOfIndex("lobranCd",acb_lobranCd.Index);
//         param1 = acb_lobranCd.getValue(); //점소코드
//         param2 = acb_lobranCd.getValue();  //점소명
//         rtnList = cfCommonPopUp('retrieveOpDeptCdInfo',param1,param2,"T",null,null,null,null,lobranCd,null,null,null,null);//부서
//         cfSetReturnValue(rtnList, ed_lodeptCd, txt_lodeptNm);				
//     }
// }

scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      var pWhere = acb_lobranCd.getValue();
      udc_staff.setSelectId('retrieveStvArrangementFulltimeManList');
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
// 그리드에서 인원에 대한 팝업호출
//-------------------------------------------------------------------------

scwin.f_open = function (disGubun, pWinCloseTF) {
  // 선언부
  var sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var arrParam = new Array();
  var pWhere = "";
  switch (disGubun) {
    case 1:
      pCode = ds_Present.getCellData(ds_Present.getRowPosition(), "staffNo").replace(/\s*$/, '');
      pName = "";
      pWhere = acb_lobranCd.getValue();
      udc_popUp.setSelectId('retrieveStvArrangementFulltimeManList');
      udc_popUp.cfCommonPopUp(scwin.udc_popUp_callBackFunc1 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , sWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
    case 2:
      pCode = "";
      pName = ds_Present.getCellData(ds_Present.getRowPosition(), "staffNm").replace(/\s*$/, '');
      pWhere = acb_lobranCd.getValue();
      udc_popUp.setSelectId('retrieveStvArrangementFulltimeManList');
      udc_popUp.cfCommonPopUp(scwin.udc_popUp_callBackFunc2 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , sWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
scwin.f_AddRow = function () {
  var rowIndex = ds_Present.insertRow();
  ds_Present.setRowPosition(rowIndex);
  gr_emp.setFocusedCell(rowIndex, 0);
};
scwin.f_DelRow = function () {
  if (ds_Present.getRowStatus(ds_Present.getRowPosition()) == "C") {
    ds_Present.removeRow(ds_Present.getRowPosition());
    return;
  }
  ds_Present.deleteRow(ds_Present.getRowPosition());
};
scwin.udc_staff_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staff_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'T', 'F');
};
scwin.udc_staff_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'T', 'F');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  // sheet명       , 저장파일명            , 저장 다이얼로그
  // cfGridToExcel(gr_emp, "상용직연차등록" , "상용직연차등록.xls" , 4+8+16);
  const infoArr = [];
  const options = {
    fileName: "상용직연차등록.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "상용직연차등록",
    type: "1"
    // startRowIndex: 2,
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_emp, options, infoArr);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_emp_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  //     switch (Colid) {  
  //     case "staffNo":
  //       gr_emp.UrlImages = SEARCH_BTN; break;
  //     case "staffNm":
  //       gr_emp.UrlImages = SEARCH_BTN; break;
  //     case "vacaStDt":
  //       gr_emp.UrlImages = CALENDAR_BTN; break;
  //     case "vacaEndDt":
  //       gr_emp.UrlImages = CALENDAR_BTN; break;
  //   } 
};
scwin.acb_occptypeCd_onselected = async function () {
  if (acb_occptypeCd.getValue() == "") {
    // acb_dtlOccptypeCd.CBData = "^전체";
    ds_dtlOccptypeCd.removeAll();
    ds_dtlOccptypeCd.addItem("전체", "", "", 0);
    ds_dtlOccptypeCd.setSelectedIndex(0);
  } else {
    ds_dtlOccptypeCd_search.set("lobranCd", "OP161");
    ds_dtlOccptypeCd_search.set("occptypeCd", acb_occptypeCd.getValue());
    ds_dtlOccptypeCd_search.set("empYn", "Y");
    var rs = await $c.sbm.execute($p, sbm_dtlOccptypeCd);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      ds_dtlOccptypeCd.setJSON(rs.responseJSON.GAUCE);
      acb_dtlOccptypeCd.addItem("전체", "", "", 0);
      acb_dtlOccptypeCd.setSelectedIndex(0);
    }
    ;
  }
};

// <!--수정시에는 팝업버튼이 활성화되지 않는다.휴무사유와 종료일자만 변경가능-->
scwin.gr_emp_oncellclick = function (row, columnIndex, columnId) {
  var totalCnt = ds_Present.getRowCount();
  var rowStat = ds_Present.getRowStatus(row);
  // if (totalCnt < row) {
  if (rowStat == "C") {
    // alert("totalCnt = " + totalCnt + " row " + row + "입니다.");
    gr_emp.setCellReadOnly(row, "staffNo", false);
    gr_emp.setCellReadOnly(row, "staffNm", false);
    gr_emp.setCellReadOnly(row, "lodeptNm", true);
    gr_emp.setCellReadOnly(row, "occptypeNm", true);
    gr_emp.setCellReadOnly(row, "dtlOccptypeNm", true);
    gr_emp.setCellReadOnly(row, "vacaRsnCd", false);
    gr_emp.setCellReadOnly(row, "vacaStDt", false);
    gr_emp.setCellReadOnly(row, "vacaEndDt", false);
    gr_emp.setCellReadOnly(row, "entDt", true);
  } else {
    gr_emp.setCellReadOnly(row, "staffNo", true);
    gr_emp.setCellReadOnly(row, "staffNm", true);
    gr_emp.setCellReadOnly(row, "lodeptNm", true);
    gr_emp.setCellReadOnly(row, "occptypeNm", true);
    gr_emp.setCellReadOnly(row, "dtlOccptypeNm", true);
    gr_emp.setCellReadOnly(row, "vacaRsnCd", false);
    gr_emp.setCellReadOnly(row, "vacaStDt", true);
    gr_emp.setCellReadOnly(row, "vacaEndDt", false);
    gr_emp.setCellReadOnly(row, "entDt", true);
  }
};
scwin.gr_emp_ontextimageclick = function (row, columnIndex) {
  var colid = gr_emp.getColumnID(columnIndex);
  var totalCnt = ds_Present.getRowCount();
  var rowStat = ds_Present.getRowStatus(row);
  // if (totalCnt < row) {	
  if (rowStat == "C") {
    switch (colid) {
      case "staffNo":
        scwin.f_open(1, "F");
        break;
      case "staffNm":
        scwin.f_open(2, "F");
        break;
      // case "vacaStDt":
      //     cfOpenCalendar(gr_emp, row, colid);
      //     break;
      // case "vacaEndDt":
      //     cfOpenCalendar(gr_emp, row, colid);
      //     break;
    }
  } else {
    switch
      // case "vacaEndDt":
      //     cfOpenCalendar(gr_emp, row, colid);
      //     break;
    (colid) {}
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_Present.getRowCount();
  scwin.totalCnt = rowCnt;
  txt_totalRows.setValue(rowCnt);

  // cfHideDSWaitMsg(gr_emp);
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  // totalRows.innerHTML = "총 " + ds_Present.RealCount(0,rowCnt) + "건";	   // 소계 부분을 뺀 실제 데이터 갯수를 Count...
};
scwin.ica_vacaDt_onBlur = function () {
  if (ica_vacaStDt.getValue() != "" && ica_vacaStDt.getValue().trim() != "") {
    ica_vacaMonth.setValue(ica_vacaStDt.getValue().substring(0, 6));
  }
};
scwin.gr_emp_oneditend = function (row, columnIndex, value) {
  var colid = gr_emp.getColumnID(columnIndex);
  ds_Present.setCellData(row, colid, ds_Present.getCellData(row, colid).toUpperCase());
  scwin.v_staffNo = ds_Present.getCellData(ds_Present.getRowPosition(), "staffNo");
  scwin.v_staffNm = ds_Present.getCellData(ds_Present.getRowPosition(), "staffNm");
  var olddata = ds_Present.getCellData(row, colid);
  var newdata = value;
  scwin.staffNoEdit = false;
  scwin.staffNmEdit = false;
  //인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
  if (newdata != olddata) {
    if (colid == "staffNo") {
      scwin.staffNoEdit = true;
      scwin.v_staffNo = olddata;
    } else if (colid == "staffNm") {
      scwin.staffNmEdit = true;
      scwin.v_staffNm = olddata;
    }
  }
};
scwin.gr_emp_onafteredit = function (row, columnIndex, value) {
  var colid = gr_emp.getColumnID(columnIndex);
  if (colid == "staffNo" && scwin.staffNoEdit) {
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNm", ""); //사원명
    ds_Present.setCellData(ds_Present.getRowPosition(), "lodeptNm", ""); //물류부서
    ds_Present.setCellData(ds_Present.getRowPosition(), "occptypeNm", ""); //직종		    
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ""); //상세직종
    ds_Present.setCellData(ds_Present.getRowPosition(), "entDt", ""); //입사일자
    scwin.f_open(1);
  } else if (colid == "staffNm" && scwin.staffNmEdit) {
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNo", ""); //사원코드
    // ds_Present.setCellData(ds_Present.getRowPosition(), "staffNm", "");	    //사원명
    ds_Present.setCellData(ds_Present.getRowPosition(), "lodeptNm", ""); //물류부서
    ds_Present.setCellData(ds_Present.getRowPosition(), "occptypeNm", ""); //직종		    
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ""); //상세직종
    ds_Present.setCellData(ds_Present.getRowPosition(), "entDt", ""); //입사일자
    scwin.f_open(2);
  }
};
scwin.udc_staff_callBackFunc = function (ref) {
  if (ref != null && ref[0] != "N/A") {
    ed_staffNo.setValue(ref[0]); //사원코드
    ed_staffNm.setValue(ref[1]); //사원명
  } else {
    ed_staffNo.setValue(''); //사원코드
    ed_staffNm.setValue(''); //사원명
  }
};
scwin.udc_popUp_callBackFunc1 = function (ref) {
  if (ref != null && ref[0] != "N/A") {
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNo", ref[0]); //사원코드
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNm", ref[1]); //사원명
    ds_Present.setCellData(ds_Present.getRowPosition(), "occptypeNm", ref[3]); //직종		    
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ref[7]); //상세직종
    ds_Present.setCellData(ds_Present.getRowPosition(), "entDt", ref[9]); //입사일자
  } else {
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNo", ""); //사원코드
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNm", ""); //사원명
    ds_Present.setCellData(ds_Present.getRowPosition(), "occptypeNm", ""); //직종		    
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ""); //상세직종
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ""); //상세직종	    
    ds_Present.setCellData(ds_Present.getRowPosition(), "entDt", ""); //입사일자
  }
};
scwin.udc_popUp_callBackFunc2 = function (ref) {
  if (ref != null && ref[0] != "N/A") {
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNo", ref[0]); //사원코드
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNm", ref[1]); //사원명
    ds_Present.setCellData(ds_Present.getRowPosition(), "occptypeNm", ref[3]); //직종		    
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ref[7]); //상세직종
    ds_Present.setCellData(ds_Present.getRowPosition(), "entDt", ref[9]); //입사일자
  } else {
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNo", ""); //사원코드
    ds_Present.setCellData(ds_Present.getRowPosition(), "staffNm", ""); //사원명
    ds_Present.setCellData(ds_Present.getRowPosition(), "occptypeNm", ""); //직종		    
    ds_Present.setCellData(ds_Present.getRowPosition(), "dtlOccptypeNm", ""); //상세직종
    ds_Present.setCellData(ds_Present.getRowPosition(), "entDt", ""); //입사일자
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_Query.lobranCd',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_PopUp2',id:'udc_staff',objTypeCode:'data',maxlengthCode:'6',allowCharCode:'a-zA-z0-9',UpperFlag:'1','ev:onviewchangeNameEvent':'scwin.udc_staff_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_staff_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staff_onblurCodeEvent',refDataCollection:'ds_Query',code:'staffNo',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{UpperFlag:'1',codeId:'',id:'udc_popUp',nameId:'',popupID:'',style:'display: none;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴무일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_vacaDt',refDataMap:'ds_Query',refEdDt:'vacaEndDt',refStDt:'vacaStDt',style:'',edFromId:'ica_vacaStDt',edToId:'ica_vacaEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data','ev:onBlur':'scwin.ica_vacaDt_onBlur','ev:onBlurFrom':'scwin.ica_vacaDt_onBlur'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_occptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_Query.occptypeCd','ev:onselected':'scwin.acb_occptypeCd_onselected'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dtlOccptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_Query.dtlOccptypeCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dtlOccptypeCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_vacaMonth',pickerType:'dynamic',style:'',mandatory:'true',title:'기간(To)',objType:'data',ref:'data:ds_Query.vacaMonth'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 연차내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_emp',gridDownFn:'scwin.excelDown',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Present',id:'gr_emp',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onafteredit':'scwin.gr_emp_onafteredit','ev:oncellindexchange':'scwin.gr_emp_oncellindexchange','ev:oncellclick':'scwin.gr_emp_oncellclick','ev:ontextimageclick':'scwin.gr_emp_ontextimageclick','ev:oneditend':'scwin.gr_emp_oneditend',rowStatusVisible:'true',dataName:'상용직 연차내역',validFeatures:'ignoreStatus=no',validExp:'staffNo:인원번호:yes,vacaRsnCd:휴무사유:yes,vacaStDt:시작일자:yes:date=YYYYMMDD,vacaEndDt:종료일자:yes:date=YYYYMMDD'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'인원번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'성명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'입사일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'직종',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'직종',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'상세직종',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'상세직종',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'휴무사유',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'시작일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'종료일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'총연차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'사용연차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'잔여연차',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'인원번호',width:'90',textAlign:'center',displayMode:'label',inputType:'textImage',style:'',value:'',Mandatory:'true'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',width:'70',textAlign:'center',displayMode:'label',inputType:'textImage',style:'',value:''}},{T:1,N:'w2:column',A:{id:'entDt',name:'입사일자',width:'100',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',dataType:'date'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',width:'80',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종',width:'100',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'vacaRsnCd',name:'휴무사유',width:'90',textAlign:'center',displayMode:'label',inputType:'select',style:'',value:'',allOption:'',chooseOption:'',ref:'',Mandatory:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{id:'vacaStDt',name:'시작일자',width:'100',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',dataType:'date',dateValidSet:'true',Mandatory:'true'}},{T:1,N:'w2:column',A:{id:'vacaEndDt',name:'종료일자',width:'100',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',dataType:'date',dateValidSet:'true',Mandatory:'true'}},{T:1,N:'w2:column',A:{id:'totalVacaCnt',name:'총연차',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'vacaCnt',name:'사용연차',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'remainVacaCnt',name:'잔여연차',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'staffNo_tot',name:'인원번호',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'staffNm_tot',name:'성명',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'entDt_tot',name:'입사일자',width:'100',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeCd_tot',name:'직종',width:'80',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'occptypeNm_tot',name:'직종',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd_tot',name:'상세직종',width:'100',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm_tot',name:'상세직종',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'vacaRsnCd_tot',name:'휴무사유',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'vacaStDt_tot',name:'시작일자',width:'100',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'vacaEndDt_tot',name:'종료일자',width:'100',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'합계'}},{T:1,N:'w2:column',A:{id:'totalVacaCnt_tot',name:'총연차',width:'80',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',expression:'SUM("totalVacaCnt")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'vacaCnt_tot',name:'사용연차',width:'80',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'expression',expression:'SUM("vacaCnt")',style:'',value:''}},{T:1,N:'w2:column',A:{id:'remainVacaCnt_tot',name:'잔여연차',width:'80',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,###',displayMode:'label',inputType:'text',expression:'SUM("remainVacaCnt")',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',EngYn:'N',gridID:'gr_emp',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_AddRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})