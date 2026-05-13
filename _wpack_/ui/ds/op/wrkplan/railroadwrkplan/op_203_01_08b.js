/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_08b.xml 42535 4e633b9a90864b2b6291b4ba76371e5f8d9a22f5b74181615fae8bc951d12521 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt20Empty',name:'20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt20Full',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt40Empty',name:'40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt40Full',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt45Empty',name:'45E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt45Full',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTeu',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAppVol',name:'신청량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btAppTotTeu',name:'물량TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btAppFrtcarVol',name:'화차신청량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvtAppFrtcarVol',name:'신청량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvtAssgnAppFrtcarVol',name:'배정량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refAdd',name:'증감',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modifyFlag',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendChk',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictSeq',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptFdrCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvFdrCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transLongNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCargoClsCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDtm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSts',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndStsNm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsCd',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befMonQty',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMsg',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'efSum',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuSum',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kindCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kindNm',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvReqDt',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDocClsCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsYn',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayCapaTeu',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'도착역',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkPlan',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveAdminFrtcarApplyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_RetrieveRailroadWorkPlan_submit','ev:submitdone':'scwin.sbm_RetrieveRailroadWorkPlan_submitdone','ev:submiterror':'scwin.sbm_RetrieveRailroadWorkPlan_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveAdminFrtCarApply',action:'/ds.op.wrkplan.railroadwrkplan.SaveAdminFrtCarApplyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_RailroadWorkPlan","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_SaveAdminFrtCarApply_submit','ev:submitdone':'scwin.sbm_SaveAdminFrtCarApply_submitdone','ev:submiterror':'scwin.sbm_SaveAdminFrtCarApply_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_203_01_08b 
// 이름     : 철도공사화차신청량/배정량
// 경로     : 물류/작업계획/철송/
// 작 성 자 : 조성빈
// 작 업 일 : 2025-12-31
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.dateStr;
scwin.edisndYn;
scwin.onpageload = function () {
  scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.edisndYn = "0";
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_signDt.setValue(scwin.dateStr);
    ica_signDt.focus();

    // ica_signDt.setValue("20200101");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 철도공사화차신청량/배정량 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_signDt, ed_begintrainWorkPlaceCd]))) {
    // 신청일자, 출발역
    return;
  }
  ds_QueryCondition.set("reqDt", ica_signDt.getValue()); // 신청일자
  ds_QueryCondition.set("dptStn", ed_begintrainWorkPlaceCd.getValue()); // 출발역
  ds_QueryCondition.set("arvStn", ed_endtrainWorkPlaceCd.getValue()); // 도착역   
  $c.sbm.execute($p, sbm_RetrieveRailroadWorkPlan);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_signDt.focus();
  ica_signDt.setValue(scwin.dateStr);
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
// function name : scwin.f_openCommonPopUp
// function desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (gubun, pWhere, pAllSearchTF, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var udcComponent;
  var udcComponent_callBack;
  if (gubun == "1") {
    pCode = ed_begintrainWorkPlaceCd.getValue().trim();
    pName = ed_begintrainWorkPlaceNm.getValue();
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    pSelectID = "retrieveTrainWorkPlace";
    udcComponent = udc_begintrainWorkPlace;
    udcComponent_callBack = scwin.udc_begintrainWorkPlace_callBackFunc;
  } else if (gubun == "2") {
    pCode = ed_endtrainWorkPlaceCd.getValue().trim();
    pName = ed_endtrainWorkPlaceNm.getValue();
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    pSelectID = "retrieveTrainWorkPlace";
    udcComponent = udc_endtrainWorkPlace;
    udcComponent_callBack = scwin.udc_endtrainWorkPlace_callBackFunc;
  } else if (gubun == "3") {
    pCode = ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlCd");
    pName = ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlNm");
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    pSelectID = "retrieveTrainWorkPlace";
    udcComponent = udc_grdPopup;
    udcComponent_callBack = scwin.udc_grdPopup_callBackFunc1;
  } else if (gubun == "4") {
    pCode = ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlCd");
    pName = ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlNm");
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    pSelectID = "retrieveTrainWorkPlace";
    udcComponent = udc_grdPopup;
    udcComponent_callBack = scwin.udc_grdPopup_callBackFunc2;
  }
  udcComponent.setSelectId(pSelectID);
  udcComponent.cfCommonPopUp(udcComponent_callBack,
  //pSelectID
  pCode,
  //pCode
  pName,
  //pName
  pWinCloseTF,
  //pWinCloseTF
  "5",
  //pDispCnt
  null,
  //pTitle
  "150,170",
  //pWidth
  null,
  //pHidden
  pWhere,
  //pWhere
  "440",
  //pW
  "500",
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	("F")
  pAllSearchTF,
  //pAllSearchTF - 전체검색허용여부	("F")
  pWtitleSearch,
  //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
  );
};

//-------------------------------------------------------------------------
// function name : scwin.f_openPopUpBefore_ds
// function param : row-해당row, nmColid-코드명컬럼, cdColid-코드컬럼, olddata-이전데이터, gubun-팝업구분, pWhere-팝업sql조건
// function desc : 그리드 팝업오픈하기전 작업
//-------------------------------------------------------------------------
scwin.f_openPopUpBefore_ds = async function (row, colGubun, nmColid, cdColid, olddata, gubun, pWhere, pAllSearchTF, pWinCloseTF) {
  if (colGubun == "CD") {
    var cdVal = ds_RailroadWorkPlan.getCellData(row, cdColid);
    ;
    if (cdVal == "") {
      ds_RailroadWorkPlan.setCellData(row, nmColid, "");
    } else {
      if (cdVal != olddata) {
        ds_RailroadWorkPlan.setCellData(row, nmColid, "");
        scwin.f_openCommonPopUp(gubun, pWhere, pAllSearchTF, pWinCloseTF);
      }
    }
  } else if (colGubun == "NM") {
    var nmVal = ds_RailroadWorkPlan.getCellData(row, nmColid);
    if (nmVal == "") {
      ds_RailroadWorkPlan.setCellData(row, cdColid, "");
    } else {
      if (nmVal != olddata) {
        ds_RailroadWorkPlan.setCellData(row, cdColid, "");
        scwin.f_openCommonPopUp(gubun, pWhere, pAllSearchTF, pWinCloseTF);
        if ((scwin.edisndYn == "1" || scwin.edisndYn == 1) && nmColid != "arvStnWrkPlNm") {
          await $c.win.alert($p, "EDI전송대상역은 여기에서 등록할수 없습니다.");
          ds_RailroadWorkPlan.setCellData(row, cdColid, "");
          ds_RailroadWorkPlan.setCellData(row, nmColid, "");
          return;
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 저장버튼 처리 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var isUpdateCnt = ds_RailroadWorkPlan.getModifiedIndex().length;
  if (!isUpdateCnt > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["변경사항"]);
    return;
  }
  var total_cnt = ds_RailroadWorkPlan.getRowCount();
  for (var i = 0; i < total_cnt; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "dptStnWrkPlNm").trim() == "") {
      await $c.gus.cfAlertMsg($p, "[" + i + "번째 줄]" + MSG_CM_ERR_002, ["출발역"]);
      gr_RailroadWorkPlan.setFocusedCell(i, "dptStnWrkPlNm", true);
      return;
    }
    if (ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlNm").trim() == "") {
      await $c.gus.cfAlertMsg($p, "[" + i + "번째 줄]" + MSG_CM_ERR_002, ["도착역"]);
      gr_RailroadWorkPlan.setFocusedCell(i, "arvStnWrkPlNm", true);
      return;
    }
  }
  //	var rowSts = ds_RailroadWorkPlan.getCellData(RowPosition,"modifyFlag");
  for (var j = 0; j < total_cnt; j++) {
    if (ds_RailroadWorkPlan.getRowStatus(j) == "D" && ds_RailroadWorkPlan.getCellData(j, "modifyFlag") == "Y") {
      //	 if (ds_RailroadWorkPlan.RowStatus(ds_RailroadWorkPlan.j)== "2" ){
      //	   await $c.win.alert(ds_RailroadWorkPlan.SysStatus(j));
      await $c.win.alert($p, "운영실적에 이미 등록되어 삭제할수 없습니다.");
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_SaveAdminFrtCarApply);
  }
};

//-------------------------------------------------------------------------
//  행추가  처리 
//-------------------------------------------------------------------------
scwin.f_inputGridAddrow = async function () {
  if (!ds_RailroadWorkPlan.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ica_signDt.focus();
    return;
  }
  if (ica_signDt.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["신청일자"]);
    ica_signDt.focus();
    return;
  }
  var rowIndex = ds_RailroadWorkPlan.insertRow();
  ds_RailroadWorkPlan.setRowPosition(rowIndex);
  var cur_rowpos = ds_RailroadWorkPlan.getRowPosition();
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "reqDt", ica_signDt.getValue().trim());

  //await $c.win.alert("cur_rowpos:"+cur_rowpos+"reqDt:"+ds_RailroadWorkPlan.getCellData(cur_rowpos,"reqDt"));
  if (cur_rowpos > 0) {
    var setVal = ds_RailroadWorkPlan.getCellData(cur_rowpos - 1, "transWrkIndictNo");
    ds_RailroadWorkPlan.setCellData(cur_rowpos, "transWrkIndictNo", setVal); //운송지시번호
  }
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "dptStnWrkPlCd", ""); //출발작업장
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "dptStnWrkPlNm", "");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "arvStnWrkPlCd", ""); //도착작업장
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "arvStnWrkPlNm", "");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "edisndYn", scwin.edisndYn); //edi전송역여부 
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "sndSts", "0"); //전송상태
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "railroadCargoClsCd", "3");
  //   await $c.win.alert("scwin.edisndYn="+scwin.edisndYn);
  //   if(scwin.edisndYn==1 || scwin.edisndYn=="1") ds_RailroadWorkPlan.getCellData(cur_rowpos,"sendmsg")="전송";
  //   else ds_RailroadWorkPlan.getCellData(cur_rowpos,"sendmsg", "");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "modifyFlag", "N");
  //   ds_RailroadWorkPlan.getCellData(cur_rowpos,"regNm")=sUserNm;

  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'dptStnWrkPlNm' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'arvStnWrkPlNm' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'wrkPlanCnt20Empty' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'wrkPlanCnt20Full' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'wrkPlanCnt40Empty' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'wrkPlanCnt40Full' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'wrkPlanCnt45Empty' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'wrkPlanCnt45Full' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'totTeu' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'frtcarAppVol' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'btAppTotTeu' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'btAppFrtcarVol' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'prvtAppFrtcarVol' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'prvtAssgnAppFrtcarVol' , false);
  // gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'refAdd' , false);
};
scwin.udc_begintrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_begintrainWorkPlaceNm, ed_begintrainWorkPlaceCd, 1, false);
};
scwin.udc_begintrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_begintrainWorkPlaceCd.getValue(), ed_begintrainWorkPlaceNm.getValue(), 'F', 'T');
};
scwin.udc_begintrainWorkPlace_onblurCodeEvent = function (e) {
  if (ed_begintrainWorkPlaceCd.getValue() != "") {
    scwin.f_openCommonPopUp("1", "", "F", "T");
  }
};
scwin.udc_endtrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_endtrainWorkPlaceNm, ed_endtrainWorkPlaceCd, 2, false);
};
scwin.udc_endtrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_endtrainWorkPlaceCd.getValue(), ed_endtrainWorkPlaceNm.getValue(), 'F', 'T');
};
scwin.udc_endtrainWorkPlace_onblurCodeEvent = function (e) {
  if (ed_endtrainWorkPlaceCd.getValue() != "") {
    scwin.f_openCommonPopUp("2", "", "F", "T");
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_RetrieveRailroadWorkPlan_submit = function (e) {};
scwin.sbm_RetrieveRailroadWorkPlan_submitdone = async function (e) {
  var rowCnt = ds_RailroadWorkPlan.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "[사유화차신청 정보] " + MSG_CM_ERR_003);
  }
  txt_totalRows.setValue(rowCnt);
};
scwin.sbm_RetrieveRailroadWorkPlan_submiterror = function (e) {};
scwin.sbm_SaveAdminFrtCarApply_submit = function (e) {};
scwin.sbm_SaveAdminFrtCarApply_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_SaveAdminFrtCarApply_submiterror = function (e) {};
scwin.gr_RailroadWorkPlan_oncellclick = function (Row, columnIndex, Colid) {
  var return_value = ds_RailroadWorkPlan.getRowStatus(Row);
  var modifyFlag = ds_RailroadWorkPlan.getCellData(Row, "modifyFlag");
  if (Colid == "dptStnWrkPlNm") {
    if ((return_value == "R" || return_value == "D") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y") {
      gr_RailroadWorkPlan.setCellReadOnly(Row, 'dptStnWrkPlNm', true);
      gr_RailroadWorkPlan.setCellReadOnly(Row, 'dptStnWrkPlCd', true);
    } else {
      if (ds_RailroadWorkPlan.getCellData(Row, "frtcarAllocVol") == 0) {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "dptStnWrkPlNm", false);
        gr_RailroadWorkPlan.setCellReadOnly(Row, 'dptStnWrkPlNm', false);
      } else {
        gr_RailroadWorkPlan.setCellReadOnly(Row, 'dptStnWrkPlNm', true);
        gr_RailroadWorkPlan.setCellReadOnly(Row, 'dptStnWrkPlCd', true);
      }
    }
  } else if (Colid == "arvStnWrkPlNm") {
    if ((return_value == "R" || return_value == "D") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y") {
      gr_RailroadWorkPlan.setCellReadOnly(Row, 'arvStnWrkPlNm', true);
      gr_RailroadWorkPlan.setCellReadOnly(Row, 'arvStnWrkPlCd', true);
    } else {
      if (ds_RailroadWorkPlan.getCellData(Row, "frtcarAllocVol") == 0) {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlNm", false);
        gr_RailroadWorkPlan.setCellReadOnly(Row, 'arvStnWrkPlNm', false);
      } else {
        gr_RailroadWorkPlan.setCellReadOnly(Row, 'arvStnWrkPlNm', true);
        gr_RailroadWorkPlan.setCellReadOnly(Row, 'arvStnWrkPlCd', true);
      }
    }
  } else if (Colid == "wrkPlanCnt20Empty" || Colid == "wrkPlanCnt20Full" || Colid == "wrkPlanCnt40Empty" || Colid == "wrkPlanCnt40Full" || Colid == "wrkPlanCnt45Empty" || Colid == "wrkPlanCnt45Full") {
    if ((return_value == "R" || return_value == "D") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y") {
      gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
    } else {
      if (ds_RailroadWorkPlan.getCellData(Row, "frtcarAllocVol") == 0) {
        gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, false);
      } else {
        gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
      }
    }
  }
};
scwin.gr_RailroadWorkPlan_ontextimageclick = async function (rowIndex, columnIndex) {
  var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
  if (colid == "dptStnWrkPlNm") {
    scwin.f_openCommonPopUp("3", "", "F", "F");
    if (scwin.edisndYn == "1" || scwin.edisndYn == 1) {
      await $c.win.alert($p, "EDI전송대상역은 여기에서 등록할수 없습니다.");
      ds_RailroadWorkPlan.setCellData(row, "dptStnWrkPlCd", "");
      ds_RailroadWorkPlan.setCellData(row, "dptStnWrkPlNm", "");
      return;
    }
  } else if (colid == "arvStnWrkPlNm") {
    scwin.f_openCommonPopUp("4", "", "F", "F");
  }
};
scwin.gr_RailroadWorkPlan_oneditend = function (rowIndex, columnIndex, value) {
  var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
  var oldData = ds_RailroadWorkPlan.getCellData(rowIndex, columnIndex);
  //팝업관련
  if (colid == "dptStnWrkPlNm") {
    scwin.olddata_dptStnWrkPlCd = oldData;
  } else if (colid == "arvStnWrkPlNm") {
    scwin.olddata_arvStnWrkPlCd = oldData;
  }
};
scwin.gr_RailroadWorkPlan_onafteredit = function (row, columnIndex, value) {
  var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
  //팝업관련
  if (colid == "dptStnWrkPlNm") {
    scwin.f_openPopUpBefore_ds(row, "NM", "dptStnWrkPlNm", "dptStnWrkPlCd", scwin.olddata_dptStnWrkPlCd, "3", "", "F", "T");
  } else if (colid == "arvStnWrkPlNm") {
    scwin.f_openPopUpBefore_ds(row, "NM", "arvStnWrkPlNm", "arvStnWrkPlCd", scwin.olddata_arvStnWrkPlCd, "4", "", "F", "T");
  }
  if (colid == "wrkPlanCnt20Empty" && ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt20Empty") == "") {
    ds_RailroadWorkPlan.setCellData(row, "wrkPlanCnt20Empty", 0);
  } else if (colid == "wrkPlanCnt20Full" && ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt20Full") == "") {
    ds_RailroadWorkPlan.setCellData(row, "wrkPlanCnt20Full", 0);
  } else if (colid == "wrkPlanCnt40Empty" && ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt40Empty") == "") {
    ds_RailroadWorkPlan.setCellData(row, "wrkPlanCnt40Empty", 0);
  } else if (colid == "wrkPlanCnt40Full" && ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt40Full") == "") {
    ds_RailroadWorkPlan.setCellData(row, "wrkPlanCnt40Full", 0);
  } else if (colid == "wrkPlanCnt45Empty" && ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt45Empty") == "") {
    ds_RailroadWorkPlan.setCellData(row, "wrkPlanCnt45Empty", 0);
  } else if (colid == "wrkPlanCnt45Full" && ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt45Full") == "") {
    ds_RailroadWorkPlan.setCellData(row, "wrkPlanCnt45Full", 0);
    // } else if(colid == "totTeu" && ds_RailroadWorkPlan.getCellData(row, "totTeu") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "totTeu", 0);
    // } else if(colid == "frtcarAppVol" && ds_RailroadWorkPlan.getCellData(row, "frtcarAppVol") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "frtcarAppVol", 0);
    // } else if(colid == "btAppTotTeu" && ds_RailroadWorkPlan.getCellData(row, "btAppTotTeu") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "btAppTotTeu", 0);
    // } else if(colid == "btAppFrtcarVol" && ds_RailroadWorkPlan.getCellData(row, "btAppFrtcarVol") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "btAppFrtcarVol", 0);
    // } else if(colid == "prvtAppFrtcarVol" && ds_RailroadWorkPlan.getCellData(row, "prvtAppFrtcarVol") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "prvtAppFrtcarVol", 0);
    // } else if(colid == "prvtAssgnAppFrtcarVol" && ds_RailroadWorkPlan.getCellData(row, "prvtAssgnAppFrtcarVol") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "prvtAssgnAppFrtcarVol", 0);
    // } else if(colid == "refAdd" && ds_RailroadWorkPlan.getCellData(row, "refAdd") == ""){
    //     ds_RailroadWorkPlan.setCellData(row, "refAdd", 0);
  }
};
scwin.udc_begintrainWorkPlace_callBackFunc = function (ref) {
  if (ref != null) {
    if (ref[0] != "N/A") {
      ed_begintrainWorkPlaceCd.setValue(ref[0]);
      ed_begintrainWorkPlaceNm.setValue(ref[1]);
    }
  } else {
    ed_begintrainWorkPlaceCd.setValue("");
    ed_begintrainWorkPlaceNm.setValue("");
  }
};
scwin.udc_endtrainWorkPlace_callBackFunc = function (ref) {
  if (ref != null) {
    if (ref[0] != "N/A") {
      ed_endtrainWorkPlaceCd.setValue(ref[0]);
      ed_endtrainWorkPlaceNm.setValue(ref[1]);
    }
  } else {
    ed_endtrainWorkPlaceCd.setValue("");
    ed_endtrainWorkPlaceNm.setValue("");
  }
};
scwin.udc_grdPopup_callBackFunc1 = function (ref) {
  if (ref != null) {
    if (ref[0] != "N/A") {
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlCd", ref[0]);
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlNm", ref[1]);
      scwin.edisndYn = ref[2];
    }
  } else {
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlCd", "");
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlNm", "");
  }
};
scwin.udc_grdPopup_callBackFunc2 = function (ref) {
  if (ref != null) {
    if (ref[0] != "N/A") {
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlCd", ref[0]);
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlNm", ref[1]);
    }
  } else {
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlCd", "");
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlNm", "");
  }
};
scwin.excelDown = function () {
  // {"fileName" : "철도공사화차신청량/배정량.xlsx", "sheetName" : "철도공사화차신청량/배정량", "type" : "4+8+16"}
  const infoArr = [];
  const options = {
    fileName: "철도공사화차신청량/배정량.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "철도공사화차신청량/배정량",
    // startRowIndex: 2,
    type: "1",
    // removeColumns: "0,21",
    // hiddenVisible : true,
    oddRowBackgroundColor: "",
    // excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: "#F5FFF5" // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_RailroadWorkPlan, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_signDt',style:'',mandatory:'true',title:'신청일자',ref:'data:ds_QueryCondition.reqDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_begintrainWorkPlace',codeId:'ed_begintrainWorkPlaceCd',nameId:'ed_begintrainWorkPlaceNm',btnId:'btn_begintrainWorkPlace',UpperFlagCode:'1',objTypeCode:'key',maxlengthCode:'6',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_begintrainWorkPlace_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_begintrainWorkPlace_onclickEvent','ev:onblurCodeEvent':'scwin.udc_begintrainWorkPlace_onblurCodeEvent',refDataCollection:'ds_QueryCondition',code:'dptStn',allowCharCode:'a-zA-Z0-9',upperFlag:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_endtrainWorkPlaceCd',nameId:'ed_endtrainWorkPlaceNm',id:'udc_endtrainWorkPlace',btnId:'btn_endtrainWorkPlace',objTypeCode:'key',maxlengthCode:'6',UpperFlagCode:'1',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_endtrainWorkPlace_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_endtrainWorkPlace_onclickEvent','ev:onblurCodeEvent':'scwin.udc_endtrainWorkPlace_onblurCodeEvent',refDataCollection:'ds_QueryCondition',code:'arvStn',allowCharCode:'a-zA-Z0-9',upperFlag:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철도공사화차신청량/배정량 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_RailroadWorkPlan',id:'udc_topGrdBtn',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',id:'udc_grdPopup',codeId:'ed_grdPopupCd',nameId:'ed_grdPopupNm','ev:onviewchangeNameEvent':'scwin.udc_begintrainWorkPlace_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_begintrainWorkPlace_onclickEvent','ev:onblurCodeEvent':'scwin.udc_begintrainWorkPlace_onblurCodeEvent'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadWorkPlan',id:'gr_RailroadWorkPlan',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_RailroadWorkPlan_oncellclick','ev:ontextimageclick':'scwin.gr_RailroadWorkPlan_ontextimageclick',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_RailroadWorkPlan_onafteredit','ev:oneditend':'scwin.gr_RailroadWorkPlan_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'출발역',width:'100',colSpan:'',rowSpan:'2',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'도착역',width:'100',colSpan:'',rowSpan:'2',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'철송가능물량',width:'560',colSpan:'8',rowSpan:'',class:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column69',value:'B/T',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column109',value:'철도공사(사유+공사)',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column66',value:'20E',displayMode:'label',class:'',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column65',value:'20F',displayMode:'label',class:'',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column64',value:'40E',displayMode:'label',class:'',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column63',value:'40F',displayMode:'label',class:'',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column86',value:'45E',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column82',value:'45F',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column78',value:'TEU',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column70',value:'신청량',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'물량TEU',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'화차신청량',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'신청량',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'배정량',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'증감',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlNm',inputType:'textImage',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlNm',inputType:'textImage',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanCnt20Empty',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanCnt20Full',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanCnt40Empty',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlanCnt40Full',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wrkPlanCnt45Empty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wrkPlanCnt45Full',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'totTeu',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'frtcarAppVol',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'btAppTotTeu',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'btAppFrtcarVol',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prvtAppFrtcarVol',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prvtAssgnAppFrtcarVol',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'refAdd',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum(\'wrkPlanCnt20Empty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'wrkPlanCnt20Full\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'wrkPlanCnt40Empty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'wrkPlanCnt40Full\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'wrkPlanCnt45Empty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'wrkPlanCnt45Full\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'totTeu\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'frtcarAppVol\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'btAppTotTeu\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column116',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'btAppFrtcarVol\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column112',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'prvtAppFrtcarVol\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column108',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'prvtAssgnAppFrtcarVol\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column104',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'refAdd\')',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_inputGridAddrow',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',gridID:'gr_RailroadWorkPlan'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})