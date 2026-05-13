/*amd /ui/ds/op/stvwrk/op_210_03_11b.xml 34169 b95c6f1a81d3e1b80bbb25af050d589f86d9765085132e57c0f2b8dbe1870968 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrf',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_transtrf_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_transtrf_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'기점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성함',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrfList',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_transtrfList_oncelldatachange','ev:onrowstatuschange':'scwin.ds_transtrfList_onrowstatuschange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성함',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'benefitWage',name:'보장임금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt2',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt2',name:'종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExceltranstrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성함',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'benefitWage',name:'보장임금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt2',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt2',name:'종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_transtrf","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_transtrf","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_transtrfList","key":"OUT_DS1"}',target:'data:json,{"id":"ds_transtrfList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveGuaranteedWageCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_transtrfList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/cm.zz.RetrieveComboCMD.do?sysCd=BerthNonUsableEBC&queryId=retriveLobranCodeList',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.loginDTO = $c.data.getMemInfo($p);
scwin.lobranCd = scwin.loginDTO.lobranCd;
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.userId = scwin.loginDTO.userId;
scwin.pos_rowSts = 0;
scwin.MSG_LO_CRM_001 = "변경된 데이터가 존재합니다. \n저장하지 않은 데이터는 삭제됩니다. \n계속 진행하시겠습니까?";
scwin.newRow;
scwin.oldRow;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = async function () {
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobran);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;
};
scwin.onUdcCompleted = function () {
  let codeOptions = [{
    grpCd: "OP316",
    compID: "acb_wrkPlClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  $p.setTimeout(function () {
    acb_lobranCd.setValue(scwin.loginDTO.loUpperLobranCd);
    acb_lobranCd.focus();
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_transtrfList.getRowPosition())) {
    row = ds_transtrfList.getRowPosition();
  }
  var wrkPlClsCd = "";
  if (ds_transtrf.getTotalRow() != 0) {
    if (ds_transtrfList.getTotalRow() == 0) {
      ds_transtrfList.insertRow();
      wrkPlClsCd = ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "wrkPlClsCd");
      if (wrkPlClsCd == '인천내항') {
        wrkPlClsCd = '01';
      } else if (wrkPlClsCd == '인천북항') {
        wrkPlClsCd = '02';
      } else if (wrkPlClsCd == '평택유통기지') {
        wrkPlClsCd = '03';
      }
      ds_transtrfList.setCellData(row, "lobranCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "lobranCd"));
      ds_transtrfList.setCellData(row, "staffNo", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "staffNo"));
      ds_transtrfList.setCellData(row, "staffNm", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "staffNm"));
      ds_transtrfList.setCellData(row, "wrkPlClsCd", wrkPlClsCd);
    } else {
      ds_transtrfList.setRowJSON(ds_transtrfList.getTotalRow(), ds_transtrfList.getRowJSON(row));
    }
  }
  totalRows2.setValue(ds_transtrfList.getTotalRow());
};
scwin.f_DeleteRow = function () {
  ds_transtrfList.deleteRow(ds_transtrfList.getRowPosition());
  totalRows2.setValue(ds_transtrfList.getTotalRow());
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var adptDt = ed_cnd_adptDt.getValue();
  if (adptDt.length != 8 && adptDt.length != 0) {
    await $c.win.alert($p, '적용일자는 8자리로 입력해야 합니다.');
    return;
  }
  ds_transtrfList.removeAll();
  var strPath = "/ds.op.stvwrk.RetrieveGuaranteedWageListCMD.do";
  sbm_retrieve.action = strPath;
  oGDS_view_cond.set("adptDt", ed_cnd_adptDt.getValue());
  oGDS_view_cond.set("lobranCd", acb_lobranCd.getValue());
  oGDS_view_cond.set("wrkPlClsCd", acb_wrkPlClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
  // gr_transtrfList.Editable = true;
};

//-------------------------------------------------------------------------
// function name : f_Edit
// function desc : 수정
//-------------------------------------------------------------------------
// function f_Edit() {
// 	gr_transtrfList.Editable = true;

// 	//cfEnableObjects([btn_save, btn_add, btn_del, btn_cancel]);
// 	//cfDisableObjects([btn_Edit]);
// }

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_transtrf.getRowPosition();
  if (ds_transtrfList.getModifiedIndex().length != 0) {
    if (await scwin.f_validate()) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        $c.sbm.execute($p, sbm_save);
        //cfDisableObjects([btn_save, btn_add, btn_del, btn_cancel]);
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["보장임금 내역"]);
  }
};

// function f_openCalendar(openObject) {
// 	cfOpenCalendar(openObject)

// 	if (ds_transtrf.RowStatus(ds_transtrf.RowPosition) == 1 ) {
// 		ds_transtrf.NameValue(ds_transtrf.RowPosition,"adptDt") = openObject.Text.trim();

// 		for(i = 1; i <= ds_transtrfList.CountRow; i++) {
// 			ds_transtrfList.NameValue(i,"adptDt") = ds_transtrf.NameValue(ds_transtrf.RowPosition,"adptDt");
// 		}
// 	}
// }

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      var pWhere = acb_lobranCd.getValue();
      udc_staff.cfCommonPopUp(scwin.udc_staff_callBack // XML상의 SELECT ID	
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
scwin.udc_staff_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_staffNo, ed_staffNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_staffNo.setValue(rtnList[0]); //사원코드
    ed_staffNm.setValue(rtnList[1]); //사원명
    return;
  } else {
    ed_staffNo.setValue(""); //사원코드
    ed_staffNm.setValue(""); //사원명
    return;
  }
};

//-------------------------------------------------------------------------
//취소
//-------------------------------------------------------------------------
// function f_Cancel() {
//     ds_transtrfList.Undo(ds_transtrfList.UndoAll());
//     f_Retrieve();
//     //cfDisableObjects([btn_save, btn_add, btn_del, btn_cancel]);
// }

//---------------------------------------------------------
//function name : f_validate
//function desc : 예외처리
//---------------------------------------------------------
scwin.f_validate = async function () {
  var flag = true;
  var rowCount = ds_transtrfList.getTotalRow();
  var cnt = 0;

  //적용일자 중복 체크용 맵 준비
  var adptStDtMap = {};
  var adptEndDtMap = {};
  for (var row = 0; row < rowCount; row++) {
    var adptStDt = ds_transtrfList.getCellData(row, "adptStDt");
    var adptEndDt = ds_transtrfList.getCellData(row, "adptEndDt");
    var benefitWage = ds_transtrfList.getCellData(row, "benefitWage");

    // 적용일자 중복 체크
    if (adptStDt) {
      if (adptStDtMap[adptStDt]) {
        await $c.win.alert($p, '[' + (row + 1) + '행] 같은 적용일자가 기존 목록에 이미 존재합니다.');
        flag = false;
        break;
      } else {
        adptStDtMap[adptStDt] = true;
      }
    }

    // 종료일자 중복 체크
    if (adptEndDt) {
      if (adptEndDtMap[adptEndDt] && adptEndDt != "99999999") {
        await $c.win.alert($p, '[' + (row + 1) + '행] 같은 종료일자가 기존 목록에 이미 존재합니다.');
        flag = false;
        break;
      } else {
        adptEndDtMap[adptEndDt] = true;
      }
    }
    if (adptStDt == "") {
      await $c.win.alert($p, '[' + (row + 1) + '행] 적용일자는 필수입력항목입니다.');
      flag = false;
      break;
    }
    if (adptStDt.length != 8 || !/^\d{8}$/.test(adptStDt)) {
      await $c.win.alert($p, '[' + (row + 1) + '행] 적용일자는 8자리(YYYYMMDD)로 입력해야 합니다.');
      flag = false;
      break;
    }
    if (adptEndDt == "") {
      await $c.win.alert($p, '[' + (row + 1) + '행] 종료일자는 필수입력항목입니다.');
      flag = false;
      break;
    }
    if (adptEndDt.length != 8 || !/^\d{8}$/.test(adptEndDt)) {
      await $c.win.alert($p, '[' + (row + 1) + '행] 종료일자는 8자리(YYYYMMDD)로 입력해야 합니다.');
      flag = false;
      break;
    }
    if (adptEndDt == "99999999") {
      cnt++;
      if (cnt > 1) {
        await $c.win.alert($p, '종료일자가 아직 변경되지 않았습니다.');
        flag = false;
        break;
      }
    }
    if (String(benefitWage).length > 10) {
      await $c.win.alert($p, '보장임금은 10자리(10억)을 넘을 수 없습니다.');
      flag = false;
      break;
    }
    if (ds_transtrfList.getRowStatus(row) == "C" || ds_transtrfList.getRowStatus(row) == "U") {
      if (adptStDt > adptEndDt) {
        await $c.win.alert($p, "적용일자는 종료일자 이후로 설정할 수 없습니다.");
        flag = false;
        break;
      }
    }
    if (benefitWage == 0) {
      await $c.win.alert($p, '[' + (row + 1) + '행] 보장임금을 입력해 주세요.');
      flag = false;
      break;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
//Excel
//-------------------------------------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_transtrfList.getTotalRow();
  var sheetTitle = '보장임금 목록';
  if (totCnt != 0) {
    if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
      var options = {
        fileName: "보장임금 목록.xlsx",
        sheetName: "보장임금 목록",
        startRowIndex: 0,
        startColumnIndex: 0,
        type: 1
      };
      $c.data.downloadGridViewExcel($p, gr_transtrfList, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.udc_staff_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staff_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staff_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 1, true);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    totalRows.setValue(ds_transtrf.getTotalRow());

    // $c.gus.cfGoPrevPosition(ds_transtrf, scwin.pos_rowSts);

    if (ds_transtrf.getTotalRow() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      //cfDisableObjects([btn_save, btn_add, btn_del, btn_cancel, btn_Edit]);
    } else {
      gr_transtrf.setFocusedCell(0, "staffNo");
      scwin.gr_transtrf_oncellclick(0);
      //cfEnableObjects([btn_Edit,btn_cancel]);
    }
  }
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    totalRows2.setValue(ds_transtrfList.getTotalRow());
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
    //gr_transtrfList.Editable = false;
    scwin.f_Retrieve();
  }
};
scwin.ds_transtrf_oncelldatachange = function (info) {
  $c.gus.cfEnableObjects($p, [btn_save, udc_bottom]);
};
scwin.ds_transtrf_onrowpositionchange = async function (info) {
  var row = info.newRowIndex;
  if (ds_transtrf.getRowStatus(row) != "C") {
    // gr_transtrfList.Editable = true;

    sbm_retrieveDetail.action = "/ds.op.stvwrk.RetrieveGuaranteedWageListDetailCMD.do?adptStDt=" + ed_cnd_adptDt.getValue() + "&lobranCd=" + ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "lobranCd") + "&staffNm=" + ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "staffNm") + "&staffNo=" + ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "staffNo") + "&wrkPlClsCd=" + oGDS_view_cond.get("wrkPlClsCd");
    $c.sbm.execute($p, sbm_retrieveDetail);
  } else {
    ds_transtrfList.removeAll();
  }
};
scwin.ds_transtrfList_onrowstatuschange = function (info) {

  // var row = info.newRowIndex;

  // if (ds_transtrfList.getRowStatus(row) != "R") {
  // 	gr_transtrfList.setCellReadOnly(row, "adptStDt", false);
  // } else {
  //     gr_transtrfList.setCellReadOnly(row, "adptStDt", true);
  // }
};
scwin.ds_transtrf_onbeforerowpositionchange = async function (info) {
  scwin.newRow = info.newRowIndex;
  scwin.oldRow = info.oldRowIndex;

  // var row = info.newRowIndex;

  // if (ds_transtrf.getModifiedIndex().length != 0) {
  //     var blChk = await $c.win.confirm(scwin.MSG_LO_CRM_001);
  //     debugger;
  //     if (blChk == false) {
  //         return blChk;
  //     } else {
  //         ds_transtrf.undoRow(row);
  //         return blChk;
  //     }
  // }

  // if (ds_transtrfList.getModifiedIndex().length != 0) {

  //     var blChk = await $c.win.confirm(scwin.MSG_LO_CRM_001);
  //     if (blChk == false) {
  //         return blChk;
  //     } else {
  //         ds_transtrf.undoRow(row);
  //         ds_transtrfList.removeAll();
  //         return blChk;
  //     }
  // }
};
scwin.gr_transtrfList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_transtrfList.getRowStatus(rowIndex) != "R") {
    gr_transtrfList.setCellReadOnly(rowIndex, "adptStDt", false);
  } else {
    gr_transtrfList.setCellReadOnly(rowIndex, "adptStDt", true);
  }
};
scwin.gr_transtrf_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // onbeforerowpositionchange 에 넣을시 confirm 타기 전에 row가 변경되어 oncellclick 에서 확인
  var old2 = scwin.oldRow;
  var row = rowIndex;
  if (row == scwin.oldRow) {
    return;
  }

  // scwin.oldRow = row;

  if (ds_transtrfList.getModifiedIndex().length != 0) {
    var blChk = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
    if (blChk == false) {
      // ds_transtrf.setRowPosition(old2);
      gr_transtrf.setFocusedCell(old2, "staffNo");
      scwin.oldRow = old2;
      return;
    } else {
      ds_transtrf.undoRow(row);
      ds_transtrfList.removeAll();
      scwin.f_RetrieveDetail(row);
      scwin.oldRow = row;
      return;
    }
  } else if (ds_transtrfList.getModifiedIndex().length == 0) {
    scwin.f_RetrieveDetail(row);
    scwin.oldRow = row;
    return;
  }
};
scwin.f_RetrieveDetail = function (row) {
  if (ds_transtrf.getRowStatus(row) != "C") {
    // gr_transtrfList.Editable = true;

    sbm_retrieveDetail.action = "/ds.op.stvwrk.RetrieveGuaranteedWageListDetailCMD.do?adptStDt=" + ed_cnd_adptDt.getValue() + "&lobranCd=" + ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "lobranCd") + "&staffNm=" + ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "staffNm") + "&staffNo=" + ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "staffNo") + "&wrkPlClsCd=" + oGDS_view_cond.get("wrkPlClsCd");
    $c.sbm.execute($p, sbm_retrieveDetail);
  } else {
    ds_transtrfList.removeAll();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_lobranCd',style:'width: 150px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_cnd_adptDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveStvArrangementFulltimeManList',codeId:'ed_staffNo',validTitle:'',nameId:'ed_staffNm',style:'',btnId:'img_PopUp2',id:'udc_staff',code:'staffNo',name:'staffNm',refDataCollection:'oGDS_view_cond',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_staff_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_staff_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_staff_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_wrkPlClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 ',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_transtrf'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_transtrf',id:'gr_transtrf',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',columnMove:'false','ev:oncellclick':'scwin.gr_transtrf_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'기점코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'성함',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDistrictCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보장임금내역',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_transtrfList',gridDownUserAuth:'X',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_transtrfList',id:'gr_transtrfList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_transtrfList_oncellclick',rowStatusVisible:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'성함',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'적용일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'종료일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'보장임금',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'적용일자2 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'종료일자2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'staffNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptStDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'benefitWage',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',dataType:'number',allowChar:'0-9',maxLength:'13',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkPlClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'-',ref:'',readOnly:'true',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'평택유통기지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptStDt2',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptEndDt2',value:'',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_bottom',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',gridID:'gr_transtrfList',rowDelUserAuth:'D',rowAddUserAuth:'C'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})