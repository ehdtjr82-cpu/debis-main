/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_09b.xml 62213 1c23f017d9577ec35be39c6899d081b91fddee8f65830ee61a5ea5b057b1c904 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btAssgn40f',name:'40F',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'btAssgn40e',name:'40E',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'btAssgn20f',name:'20F',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'btAssgn20e',name:'20E',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'btTransNmCd',name:'운송;명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regOdrYn',name:'오더등록',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutYn',name:'반출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinYn',name:'반입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAssgnYn',name:'적재등록',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmClntCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modifyFlag',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinYn2',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutWrkPlCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinWrkPlCd',name:'name23',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_RailroadFare',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFare',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuCnt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptHh',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_transNmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_combo_transNmCd_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_LkStepNo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkPlan',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveBtShippingWeightSpecCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_RetrieveRailroadWorkPlan_submit','ev:submitdone':'scwin.sbm_RetrieveRailroadWorkPlan_submitdone','ev:submiterror':'scwin.sbm_RetrieveRailroadWorkPlan_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadFare',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadFareCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadFare","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadFare","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_RetrieveRailroadFare_submit','ev:submitdone':'scwin.sbm_RetrieveRailroadFare_submitdone','ev:submiterror':'scwin.sbm_RetrieveRailroadFare_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveBtShippingWeight',action:'/ds.op.wrkplan.railroadwrkplan.SaveBtShippingWeightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_RailroadWorkPlan","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_SaveBtShippingWeight_submit','ev:submitdone':'scwin.sbm_SaveBtShippingWeight_submitdone','ev:submiterror':'scwin.sbm_SaveBtShippingWeight_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRailroadFare',action:'/ds.op.wrkplan.railroadwrkplan.SaveRailroadFareCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_RailroadFare","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_SaveRailroadFare_submit','ev:submitdone':'scwin.sbm_SaveRailroadFare_submitdone','ev:submiterror':'scwin.sbm_SaveRailroadFare_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_combo_transNmCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_combo_transNmCd_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_LKStepNo1',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_LkStepNo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_203_01_09b 
// 이름     : 저수요컨테이너적재등록
// 경로     : 물류/작업계획/철송/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-05
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.toDay;
scwin.dptStnCd;
scwin.arvStnCd;
scwin.onReqDt;
scwin.cntrNo;
scwin.frtcarNo;
scwin.btCls;
scwin.dateStr;
scwin.edisndYn;
scwin.pathFlag;
scwin.oldrowData;
scwin.onpageload = function () {
  // dateFormat = new SimpleDateFormat( "yyyyMMdd", java.util.Locale.KOREA );
  // timeFormat = new SimpleDateFormat( "kkmm", java.util.Locale.KOREA );
  scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.dptStnCd = $c.data.getParameter($p, "dptStnCd") == null ? "" : $c.data.getParameter($p, "dptStnCd");
  scwin.arvStnCd = $c.data.getParameter($p, "arvStnCd") == null ? "" : $c.data.getParameter($p, "arvStnCd");
  scwin.onReqDt = $c.data.getParameter($p, "onReqDt") == null ? "" : $c.data.getParameter($p, "onReqDt");
  scwin.cntrNo = $c.data.getParameter($p, "cntrNo") == null ? "" : $c.data.getParameter($p, "cntrNo");
  scwin.frtcarNo = $c.data.getParameter($p, "frtcarNo") == null ? "" : $c.data.getParameter($p, "frtcarNo");
  scwin.btCls = $c.data.getParameter($p, "btCls") == null ? "" : $c.data.getParameter($p, "btCls"); // BT컨테이너적재화면 LINK여부
  scwin.dateStr = scwin.toDay;
  scwin.edisndYn = "0";
  scwin.pathFlag = "0";
  scwin.oldrowData = 0;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  $p.setTimeout(function () {
    ica_signDt.setValue(scwin.dateStr);
    ica_signDt.focus();
    scwin.f_RetrieveTransNmCd("OP289");
    scwin.f_defaultValue1(); // Grid LookUp - 수출입구분	

    if (scwin.dptStnCd != "" && scwin.arvStnCd != "" && scwin.onReqDt != "") {
      //alert("kk::"+dptStnCd+"::"+arvStnCd+"::"+onReqDt);
      scwin.f_qeryList();
    }

    // $p.setTimeout(function() {
    //     ica_signDt.setValue("20130729");
    //     ed_dptStn.setValue("6R12");
    //     ed_arvStn.setValue("4R01");
    //     // ica_signDt.setValue("20071115");
    //     // ed_dptStn.setValue("6R01");
    //     ed_dptStn.focus();
    //     ed_dptStn.blur();
    //     ed_arvStn.focus();
    //     ed_arvStn.blur();

    // }, {"delay":50});
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 철도공사화차신청량/배정량 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  if (scwin.dptStnCd != "" && scwin.arvStnCd != "" && scwin.onReqDt != "") {
    ica_signDt.setValue(scwin.onReqDt);
    ed_dptStn.setValue(scwin.dptStnCd);
    ed_arvStn.setValue(scwin.arvStnCd);
  }
  if (!(await $c.gus.cfValidate($p, [ica_signDt, ed_dptStn]))) {
    // 출발일자, 출발역 
    return;
  }
  ds_QueryCondition.set("reqDt", ica_signDt.getValue()); // 출발일자
  ds_QueryCondition.set("dptHh", ed_signHh.getValue()); // 출발시간
  ds_QueryCondition.set("dptStn", ed_dptStn.getValue()); // 출발역
  ds_QueryCondition.set("arvStn", ed_arvStn.getValue()); // 도착역    

  if (scwin.dptStnCd != "" && scwin.arvStnCd != "" && scwin.onReqDt != "") {
    ica_signDt.setValue(scwin.onReqDt);
    ds_QueryCondition.set("reqDt", scwin.onReqDt);
    ed_dptStn.setValue(scwin.dptStnCd);
    ds_QueryCondition.set("dptStn", scwin.dptStnCd);
    ed_arvStn.setValue(scwin.arvStnCd);
    ds_QueryCondition.set("arvStn", scwin.arvStnCd);
  }
  $c.sbm.execute($p, sbm_RetrieveRailroadWorkPlan);
  if (ds_QueryCondition.get("arvStn") == "") {
    ds_QueryCondition.set("arvStn", "6R01"); // 도착역    
  }
  $c.sbm.execute($p, sbm_RetrieveRailroadFare);
  cbx_tariffchk.setValue("F");
  ed_totAmt.setReadOnly(true);
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
// scwin.f_openCommonPopUp = function (gubun, pWhere, pAllSearchTF, pWinCloseTF) {
scwin.f_openCommonPopUp = function (gubun, pCode, pName, pAllSearchTF, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var rtnList = new Array();
  var udcComponent;
  var udcCallBack;
  if (gubun == "1") {
    pCode = ed_dptStn.getValue();
    pName = ed_begintrainWorkPlaceNm.getValue();
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    udc_dptStn.setSelectId("retrieveTrainWorkPlace");
    udcComponent = udc_dptStn;
    udcCallBack = scwin.udc_dptStn_callBackFunc;
  } else if (gubun == "2") {
    pCode = ed_arvStn.getValue();
    pName = ed_endtrainWorkPlaceNm.getValue();
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    udc_arvStn.setSelectId("retrieveTrainWorkPlace");
    udcComponent = udc_arvStn;
    udcCallBack = scwin.udc_arvStn_callBackFunc;
  }
  udcComponent.cfCommonPopUp(udcCallBack,
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
  //    pWhere,							//pWhere
  null,
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
// 저장버튼 처리 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var updateIdxCnt = ds_RailroadWorkPlan.getModifiedIndex().length;
  if (!updateIdxCnt > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["변경사항"]);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_RailroadWorkPlan], null, true))) return false;
  var total_cnt = ds_RailroadWorkPlan.getRowCount();
  var v_20e = "0";
  var v_20f = "0";
  var v_40e = "0";
  var v_40f = "0";
  for (var i = 0; i < total_cnt; i++) {
    v_20e = ds_RailroadWorkPlan.getCellData(i, "btAssgn20e");
    v_20f = ds_RailroadWorkPlan.getCellData(i, "btAssgn20f");
    v_40e = ds_RailroadWorkPlan.getCellData(i, "btAssgn40e");
    v_40f = ds_RailroadWorkPlan.getCellData(i, "btAssgn40f");
    if (v_20e == "0" && v_20f == "0" && v_40e == "0" && v_40f == "0") {
      // 사이즈선택
      await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "번째 줄]" + MSG_CM_ERR_002, ["컨테이너 사이즈"]);
      // ds_RailroadWorkPlan.setRowPosition(i); 
      // gr_RailroadWorkPlan.SetColumn("btAssgn20e"); 
      gr_RailroadWorkPlan.setFocusedCell(i, "btAssgn20e", true);
      return;
    }
  }
  for (var j = 0; j < total_cnt; j++) {
    // 2
    if (ds_RailroadWorkPlan.getRowStatus(j) == "D" && ds_RailroadWorkPlan.getCellData(j, "rsltsAssgnYn") == "Y") {
      await $c.gus.cfAlertMsg($p, "적재내역에 이미 등록되어 삭제할수 없습니다.");
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_SaveBtShippingWeight);
  }
};

//-------------------------------------------------------------------------
// 저수요단가 구하기 처리 
//-------------------------------------------------------------------------
scwin.f_Save1 = async function () {
  if (!ds_RailroadFare.getRowCount() > 0) {
    ds_RailroadFare.insertRow();
  }
  ds_RailroadFare.setCellData(0, "dptStnWrkPlCd", ed_dptStn.getValue());
  if (ed_arvStn.getValue() == "") {
    ds_RailroadFare.setCellData(0, "arvStnWrkPlCd", "6R01");
  } else {
    ds_RailroadFare.setCellData(0, "arvStnWrkPlCd", ed_arvStn.getValue());
  }
  ds_RailroadFare.setCellData(0, "adptDt", ica_signDt.getValue());
  ds_RailroadFare.setCellData(0, "totAmt", ed_totAmt.getValue());
  ds_RailroadFare.setCellData(0, "railroadFare", ed_railroadFare.getValue());
  ds_RailroadFare.setCellData(0, "teuCnt", ed_teuCnt.getValue());
  var updateIdxCnt = ds_RailroadFare.getModifiedIndex().length;
  if (!updateIdxCnt > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["변경사항"]);
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_SaveRailroadFare);
  }
};

//-------------------------------------------------------------------------
//  신항요율적용
//  출발역이 오봉역(4R01), 부산신항(6R12)인 경우 요율세팅 
//-------------------------------------------------------------------------
// tariffchk
scwin.cbx_tariffchk_onviewchange = async function (info) {
  //신항요율이 체크되었다면
  if (info.checked) {
    ed_totAmt.setReadOnly(false);
    //출발역이나 도착역이 신항이라면
    if (ed_dptStn.getValue() == '6R12') {
      if (ed_arvStn.getValue() == '4R01') {
        scwin.f_setRailroadTariff('D');
      }
      /*
      else if (ed_arvStn.getValue() == '4R02'){
          scwin.f_setRailroadTariff('F');
      }
      */
    } else if (ed_arvStn.getValue() == '6R12') {
      scwin.f_setRailroadTariff('A');
    } else {
      await $c.win.alert($p, '부산신항(6R12)의 구간이 아니므로 신항요율을 적용할 수 없습니다.');
      cbx_tariffchk.setValue("F");
      ed_totAmt.setReadOnly(true);
    }
  } else {
    ed_totAmt.setReadOnly(true);
  }
};

//-------------------------------------------------------------------------
//  신항금액셋팅
//-------------------------------------------------------------------------
scwin.f_setRailroadTariff = function (flg) {
  if (flg == 'D') {
    //ed_totAmt.setValue("798900");  //(2013.10.02 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 단가:798900 TEU:6
    //ed_totAmt.setValue("1909800");  //(2014.04.01 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
    //ed_totAmt.setValue("2334200");  //(2014.09.01 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
    ed_totAmt.setValue("1292400"); //(2015.01.05 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
    //ed_teuCnt.setValue("18");			
    //ed_teuCnt.setValue("22");			
    ed_teuCnt.setValue("12"); //(2015.01.05 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
  }
  /*else if (flg == 'F') {
      ed_totAmt.setValue("532600");  //(2013.10.02 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
      ed_teuCnt.setValue("4");	
  }*/else if (flg == 'A') {
    //ed_totAmt.setValue("3195600");  //(2013.10.02 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 단가:3195600 TEU:24
    //ed_totAmt.setValue("2122000");  //(2014.04.01 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
    ed_totAmt.setValue("1998000"); //(2015.01.05 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
    //ed_teuCnt.setValue("20");
    ed_teuCnt.setValue("18"); //(2015.01.05 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청)
  }
};

//-------------------------------------------------------------------------
//  ds_RailroadFare SET
//-------------------------------------------------------------------------
scwin.f_setRailroadAddrow = function () {
  //14.04.11 구간별 철송임 조회 화면의 저수요요율등록 팝업창에서 등록 하기 위해 제거함.
  /*
  //ed_totAmt.setValue("4446000");
  //ed_totAmt.setValue("5187000");  //(2007.12.27 수정 BT화차량 18 => 21로 변동) 	
  //  ed_totAmt.setValue("3935300");  //(2008.08.01 수정 BT화차량 변동_경기지사 운송팀 양영섭님 요청) 	 
  //ed_totAmt.setValue("3314000");  //(2008.08.01 수정 BT화차량 변동_경기지사 운송팀 양영섭님 요청)
  if (ed_dptStn.getValue() != '6R12' && ed_arvStn.getValue() != '6R12') {
  
      // if (ed_dptStn.getValue() == '6R01' ) {
      //	ed_totAmt.setValue("3251300");  //(2012.02.20 수정 BT화차량 변동_물류 운영관리팀 박건일님 요청) 30TEU -> 26TEU, teu당단가 125050
      // }	else {
      //	ed_totAmt.setValue("3682500");  //(2011.12.12 수정 BT화차량 변동_물류 운영관리팀 박건일님 요청) 28TEU -> 30TEU, teu당단가 122750 	
      // }
          if (ed_dptStn.getValue() == '6R01' && ed_arvStn.getValue() == '4R02' ) {
              //ed_totAmt.setValue("2231100");  //(2013.01.01 수정 BT화차량 변동_물류 운영관리팀 박건일님 요청) 36TEU -> 18TEU, teu당단가 123950
              //ed_totAmt.setValue("2479000");  //(2013.04.01 수정 BT화차량 변동_물류 운영관리팀 박건일님 요청) 18TEU -> 20TEU, teu당단가 123950
              //ed_totAmt.setValue("2676000");  //(2013.10.02 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 20TEU, teu당단가 133800
              ed_totAmt.setValue("2943600");  //(2014.01.17 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 22TEU, teu당단가 133800
      //(2013.04.01 수정 BT화차량 변동_물류 운영관리팀 변준석님 요청) 14TEU , teu당단가 100100		
          } else if (ds_QueryCondition.set("dptStn") == "5R14" && ds_QueryCondition.set("arvStn") == "4R01" ) {
              //ed_totAmt.setValue("1401400"); 
              ed_totAmt.setValue("1513400");  
          } else if (ds_QueryCondition.set("dptStn") == "4R01" && ds_QueryCondition.set("arvStn") == "6R01" ) {
              //ed_totAmt.setValue("1401400"); 
              ed_totAmt.setValue("2943600");  
          } else if (ds_QueryCondition.set("dptStn") == "6R01" && ds_QueryCondition.set("arvStn") == "4R01" ) {
              //ed_totAmt.setValue("1401400"); 
              //ed_totAmt.setValue("2676000");  
              ed_totAmt.setValue("2943600");  //(2014.01.17 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 22TEU, teu당단가 133800
          } else {
              ed_totAmt.setValue("2726900");  //(2013.01.01 수정 BT화차량 변동_물류 운영관리팀 박건일님 요청) 30TEU -> 22TEU, teu당단가 123950
          }	 
  }
  */
};

//-------------------------------------------------------------------------
//  행추가  처리 
//-------------------------------------------------------------------------
scwin.f_inputGridAddrow = async function () {
  // if(!ds_RailroadWorkPlan.getRowCount() > 0) {
  if ($c.gus.cfIsNull($p, ds_RailroadWorkPlan)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ica_signDt.focus();
    return;
  }
  if (ica_signDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["출발일자"]);
    ica_signDt.focus();
    return;
  }
  if (ica_signDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["출발시간"]);
    ed_signHh.focus();
    return;
  }
  if (ed_dptStn.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["출발역"]);
    ed_dptStn.focus();
    return;
  }
  var rowIndex = ds_RailroadWorkPlan.insertRow();
  ds_RailroadWorkPlan.setRowPosition(rowIndex);
  var cur_rowpos = ds_RailroadWorkPlan.getRowPosition();
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "btTransNmCd", "DB");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "expimpClsCd", "O");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkStDt", ica_signDt.getValue());
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkStHh", ed_signHh.getValue());
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "dptWrkPlCd", ed_dptStn.getValue());
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "arvWrkPlCd", ed_arvStn.getValue());
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "rsltsAssgnYn", ""); // 적재내역등록여부
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "modifyFlag", "N"); // 수정여부
};

//-------------------------------------------------------------------------
//  총 TEU계산
//-------------------------------------------------------------------------  
scwin.f_setAssgnResultConse = function () {
  var bt20E = 0;
  var bt20F = 0;
  var bt40E = 0;
  var bt40F = 0;
  var btTeu = 0;
  for (var i = 0; i < ds_RailroadWorkPlan.getRowCount(); i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "btAssgn20e") == "1") {
      bt20E++;
      btTeu++;
    }
    if (ds_RailroadWorkPlan.getCellData(i, "btAssgn20f") == "1") {
      bt20F++;
      btTeu++;
    }
    if (ds_RailroadWorkPlan.getCellData(i, "btAssgn40e") == "1") {
      bt40E++;
      btTeu++;
      btTeu++;
    }
    if (ds_RailroadWorkPlan.getCellData(i, "btAssgn40f") == "1") {
      bt40F++;
      btTeu++;
      btTeu++;
    }
  } //for
  btTeu = btTeu + "(" + (bt20E + bt20F) + "/" + (bt40E + bt40F) * 2 + ")";
  return btTeu;
  //spn_btAppTEU.innerHTML = btTeu; 
  //spn_btAppTEU.style.getValue()Decoration = "none";
};

//-------------------------------------------------------------------------
// 운송명의 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveTransNmCd = async function (param1) {
  ds_combo_transNmCd_search.set("sysCd", "StationEachRailroadResultsEBC");
  ds_combo_transNmCd_search.set("queryId", "retrieveCommUpperCdList");
  ds_combo_transNmCd_search.set("param1", param1);
  var rs = await $c.sbm.execute($p, sbm_combo_transNmCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_combo_transNmCd.setJSON(rs.responseJSON.GAUCE);
  }
  ;
};

//-------------------------------------------------------------------------
// 운송명의코드에 대한 상위코드 가져와서 거래처번호 등록	  
//-------------------------------------------------------------------------
scwin.f_setTransCd = function (row, transCd) {
  var total_cnt = ds_combo_transNmCd.getRowCount();
  for (var i = 0; i < total_cnt; i++) {
    if (ds_combo_transNmCd.getCellData(i, "code") == transCd) {
      ds_RailroadWorkPlan.setCellData(row, "transNmClntCd", ds_combo_transNmCd.getCellData(i, "upperCd"));
      //alert(ds_ShippingWeightContents.getCellData(row,"transNmClntCd"));
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : Grid LookUp Setting
//-------------------------------------------------------------------------
scwin.f_defaultValue1 = async function () {
  //수출입구분 Grid LookUp Setting
  ds_LkStepNo1_search.set("sysCd", "CommonEBC");
  ds_LkStepNo1_search.set("queryId", "retrieveSysCdTest_eqCode");
  ds_LkStepNo1_search.set("param1", "OP194");
  var rs = await $c.sbm.execute($p, sbm_LKStepNo1);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_LkStepNo1.setJSON(rs.responseJSON.GAUCE);
  }
  ;
};
scwin.f_PopupBTLoadingList = async function () {
  let win_url = "/ui/ds/op/wrkplan/railroadwrkplan/op_203_01_09p.xml";
  let data = {};
  let opts = {
    id: "lowUseListPop",
    popupName: "저수요적재리스트",
    modal: true,
    type: "browserPopup",
    width: 1250,
    height: 650,
    title: "저수요적재리스트"
  };
  await $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// function name : scwin.f_CountByTransName
// function desc : 운송명의별로 TEU counting
//-------------------------------------------------------------------------
scwin.f_CountByTransName = function (transNm) {
  var cnt = 0;
  var feet20 = 0;
  var feet40 = 0;
  for (var i = 0; i < ds_RailroadWorkPlan.getRowCount(); i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "btTransNmCd") == transNm) {
      if (ds_RailroadWorkPlan.getCellData(i, "btAssgn20e") == 1) {
        cnt++;
        feet20++;
      }
      if (ds_RailroadWorkPlan.getCellData(i, "btAssgn20f") == 1) {
        cnt++;
        feet20++;
      }
      if (ds_RailroadWorkPlan.getCellData(i, "btAssgn40e") == 1) {
        cnt = cnt + 2;
        feet40++;
      }
      if (ds_RailroadWorkPlan.getCellData(i, "btAssgn40f") == 1) {
        cnt = cnt + 2;
        feet40++;
      }
    }
  } //for
  cnt = cnt + "(" + feet20 + "/" + feet40 * 2 + ")";
  return cnt;
};
scwin.udc_dptStn_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_begintrainWorkPlaceNm, ed_dptStn, 1, false);
};
scwin.udc_dptStn_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dptStn.getValue(), ed_begintrainWorkPlaceNm.getValue(), 'F', 'F');
};
scwin.udc_dptStn_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptStn, ed_begintrainWorkPlaceNm, 1, false);
};
scwin.udc_arvStn_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_endtrainWorkPlaceNm, ed_arvStn, 2, false);
};
scwin.udc_arvStn_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_arvStn.getValue(), ed_endtrainWorkPlaceNm.getValue(), 'F', 'F');
};
scwin.udc_arvStn_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvStn, ed_endtrainWorkPlaceNm, 2, false);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};
scwin.btn_PopupBTLoadingList_onclick = function (e) {
  scwin.f_PopupBTLoadingList();
};
scwin.btn_btdan_onclick = function (e) {
  scwin.f_Save1();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_RetrieveRailroadWorkPlan_submit = function (e) {};
scwin.sbm_RetrieveRailroadWorkPlan_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    var rowCnt = ds_RailroadWorkPlan.getRowCount();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, "[사유화차신청 정보] " + MSG_CM_ERR_003);
    }
    var btTeu = scwin.f_setAssgnResultConse();
    //운송명의별로 TEU 계산	
    var DBTeu = scwin.f_CountByTransName("DB");
    var CITeu = scwin.f_CountByTransName("CI");
    var YYTeu = scwin.f_CountByTransName("YY");
    txt_totalRows.setValue(rowCnt);
    txt_totalRows2.setValue(btTeu);
    txt_DBRows.setValue(DBTeu);
    txt_CIRows.setValue(CITeu);
    txt_YYRows.setValue(YYTeu);
    $c.gus.cfDisableBtn($p, []);
    if (rowCnt == 0) {
      // await $c.gus.cfAlertMsg("[적재정보] "+MSG_CM_ERR_003);
      if (scwin.btCls == "1") {
        scwin.f_inputGridAddrow();
        if (scwin.cntrNo != null && scwin.cntrNo != "") {
          ds_RailroadWorkPlan.setCellData(0, "cntrNo", scwin.cntrNo);
          scwin.btCls = "";
        }
      }
    } else if (rowCnt > 0) {
      if (scwin.btCls == "1") {
        scwin.f_inputGridAddrow();
        ds_RailroadWorkPlan.setCellData(rowCnt - 1, "cntrNo", scwin.cntrNo);
        //f_retrieveCntrBasisInfo(cntrNo);
        scwin.btCls = "";
      }
    }
    for (var i = 0; i < rowCnt; i++) {
      if (ds_RailroadWorkPlan.getCellData(i, "rsltsAssgnYn") == "") {
        gr_RailroadWorkPlan.setCellStyle(i, "cntrNo", "text-decoration", "underline");
      } else {
        gr_RailroadWorkPlan.setCellStyle(i, "cntrNo", "text-decoration", "");
      }
    }
  }
};
scwin.sbm_RetrieveRailroadWorkPlan_submiterror = function (e) {};
scwin.sbm_RetrieveRailroadFare_submit = function (e) {};
scwin.sbm_RetrieveRailroadFare_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    grp_total1.show("");
    grp_total2.show("");
    grp_total3.show("");
    grp_total4.show("");
    if (ds_RailroadFare.getRowCount() > 0) {
      ed_totAmt.setValue(ds_RailroadFare.getCellData(0, "totAmt"));
      ed_railroadFare.setValue(ds_RailroadFare.getCellData(0, "railroadFare"));
      ed_teuCnt.setValue(ds_RailroadFare.getCellData(0, "teuCnt"));
      ds_RailroadFare.setCellData(0, "dptStnWrkPlCd", "");
      ds_RailroadFare.setCellData(0, "arvStnWrkPlCd", "");
      ds_RailroadFare.setCellData(0, "adptDt", "");
      ds_RailroadFare.setCellData(0, "totAmt", "");
      ds_RailroadFare.setCellData(0, "railroadFare", "");
      ds_RailroadFare.setCellData(0, "teuCnt", "");
    }
  }
};
scwin.sbm_RetrieveRailroadFare_submiterror = function (e) {};
scwin.sbm_SaveBtShippingWeight_submit = function (e) {};
scwin.sbm_SaveBtShippingWeight_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_qeryList();
  }
};
scwin.sbm_SaveBtShippingWeight_submiterror = function (e) {};
scwin.sbm_SaveRailroadFare_submit = function (e) {};
scwin.sbm_SaveRailroadFare_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_qeryList();
  }
};
scwin.sbm_SaveRailroadFare_submiterror = function (e) {};
scwin.gr_RailroadWorkPlan_onafteredit = function (row, columnIndex, value) {
  var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
  if (colid == "btTransNmCd") {
    scwin.f_setTransCd(row, ds_RailroadWorkPlan.getCellData(row, "btTransNmCd"));
  }
};
scwin.gr_RailroadWorkPlan_oncellclick = async function (Row, columnIndex, Colid) {
  if (ds_RailroadWorkPlan.getCellData(Row, "rsltsAssgnYn") == "") {
    if (Colid == "btAssgn20e") {
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20e", 1);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20f", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40e", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40f", 0);
    } else if (Colid == "btAssgn20f") {
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20e", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20f", 1);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40e", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40f", 0);
    } else if (Colid == "btAssgn40e") {
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20e", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20f", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40e", 1);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40f", 0);
    } else if (Colid == "btAssgn40f") {
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20e", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn20f", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40e", 0);
      ds_RailroadWorkPlan.setCellData(Row, "btAssgn40f", 1);
    } else if ((Colid == "frtcarNo" || Colid == "cntrNo" || Colid == "expimpClsCd") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y") {
      gr_RailroadWorkPlan.setCellReadOnly(Row, "frtcarNo", true);
      gr_RailroadWorkPlan.setCellReadOnly(Row, "cntrNo", true);
      gr_RailroadWorkPlan.setCellReadOnly(Row, "expimpClsCd", false);
    } else if ((Colid == "frtcarNo" || Colid == "cntrNo" || Colid == "expimpClsCd") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "N") {
      gr_RailroadWorkPlan.setCellReadOnly(Row, "frtcarNo", false);
      gr_RailroadWorkPlan.setCellReadOnly(Row, "cntrNo", false);
      gr_RailroadWorkPlan.setCellReadOnly(Row, "expimpClsCd", false);
    }
  }
  if (ds_RailroadWorkPlan.getCellData(Row, "rsltsAssgnYn") != "") {
    if (Colid == "btAssgn20e" || Colid == "btAssgn20f" || Colid == "btAssgn40e" || Colid == "btAssgn40f") {
      await $c.gus.cfAlertMsg($p, "적재내역등록이 끝난 컨테이너는 선택할 수 없습니다.");
      // ds_RailroadWorkPlan.UndoMarked();
    } else if (Colid == "frtcarNo" || Colid == "cntrNo" || Colid == "expimpClsCd") {
      gr_RailroadWorkPlan.setCellReadOnly(Row, "frtcarNo", true);
      gr_RailroadWorkPlan.setCellReadOnly(Row, "cntrNo", true);
      gr_RailroadWorkPlan.setCellReadOnly(Row, "expimpClsCd", true);
    }
  }
};
scwin.gr_RailroadWorkPlan_oncelldblclick = async function (row, columnIndex, columnId) {
  if (columnId == "cntrNo") {
    if (ds_RailroadWorkPlan.getCellData(row, "rsltsAssgnYn") == "" && ds_RailroadWorkPlan.getCellData(row, "regOdrYn") != ""
    // && ((ds_RailroadWorkPlan.getCellData(row, "crryinYn") != "")
    //   ||(ds_RailroadWorkPlan.getCellData(row, "crryinYn2") = "4C02"))
    ) {
      // ASIS와 동일하게 동작하기위해 
      ds_RailroadWorkPlan.setCellData(row, "crryinYn2", "4C02");
      ds_RailroadWorkPlan._setRowStatus(i, "U");
      var condition = "?";
      var dptStnCd = ds_RailroadWorkPlan.getCellData(row, "dptWrkPlCd");
      var arvStnCd = ds_RailroadWorkPlan.getCellData(row, "arvWrkPlCd");
      var onReqDt = ica_signDt.getValue();
      var cntrNo = ds_RailroadWorkPlan.getCellData(row, "cntrNo");
      var frtcarNo = ds_RailroadWorkPlan.getCellData(row, "frtcarNo");
      var btCls = "1"; // 적재등록에 자동추가 위해 넘겨줄 값..

      for (i = 0; i < ds_RailroadWorkPlan.getRowCount(); i++) {
        // 0
        if (ds_RailroadWorkPlan.getRowStatus(i) != "R") {
          await $c.win.alert($p, "작업중인 사항을 먼저 처리하신후 적재등록 하십시요.");
          return;
        }
      }
      // -----로직변경 -----BT도착역이 '6R01' 아닌경우 컨테이너 오더 작업경로를 '6R01'로 변경해준다.----
      // BT도착역이 '6R01' 인경우에는 '6R01'로 변경
      // BT도착역이 '6R12' 인경우에는 '6R12'로 변경
      // BT도착역이 그외의 경우에는 작업경로 강제수정로직 x
      if (ds_RailroadWorkPlan.getCellData(row, "arvWrkPlCd") != "6R01" || ds_RailroadWorkPlan.getCellData(row, "arvWrkPlCd") != "6R12") {
        if (ed_arvStn.getValue() == "") {
          await $c.win.alert($p, "변경할 작업경로를 도착역에 입력하세요.");
          return;
        }
        if (await $c.win.confirm($p, "도착역의 작업경로를 [" + ed_arvStn.getValue() + "]로 수정하시겠습니까?")) {
          ds_RailroadWorkPlan.setCellData(row, "regOdrYn", ds_RailroadWorkPlan.getCellData(row, "regOdrYn").substr(0, 3) + ds_RailroadWorkPlan.getCellData(row, "regOdrYn").substr(4, 6) + ds_RailroadWorkPlan.getCellData(row, "regOdrYn").substr(11, 4));
          ds_RailroadWorkPlan.setCellData(row, "pathFlag", "Y"); //경로수정 플래그
          ds_RailroadWorkPlan.setCellData(row, "arvWrkPlCd", ed_arvStn.getValue()); //도착역경로를 조회조건의 도착역값으로 변경			                 
          $c.sbm.execute($p, sbm_SaveBtShippingWeight);
          scwin.arvStnCd = ed_arvStn.getValue();
        } else {
          return;
        }
      }
      let src = "/ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_01b.xml";
      let menuNm = "적재내역등록";
      let menuId = "op_205_01_01b";
      paramObj = {};
      paramObj.pgmInfo = {
        "dptStnCd": dptStnCd,
        "arvStnCd": arvStnCd,
        "onReqDt": onReqDt,
        "cntrNo": cntrNo,
        "frtcarNo": frtcarNo,
        "btCls": btCls
      };
      $c.win.openMenu($p, menuNm, src, menuId, paramObj);
    }
  } else if (columnId == "regOdrYn") {
    if (ds_RailroadWorkPlan.getCellData(row, "regOdrYn") != "") {
      var odrNo = ds_RailroadWorkPlan.getCellData(row, "regOdrYn").substr(0, 3) + ds_RailroadWorkPlan.getCellData(row, "regOdrYn").substr(4, 6) + ds_RailroadWorkPlan.getCellData(row, "regOdrYn").substr(11, 4);
      let src = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
      let menuNm = "컨테이너오더";
      let menuId = "sd_402_01_11t";
      paramObj = {};
      paramObj.pgmInfo = {
        "odrNo": odrNo
      };
      $c.win.openMenu($p, menuNm, src, menuId, paramObj);
    }
  } else if (columnId == "crryoutYn") {
    if (ds_RailroadWorkPlan.getCellData(row, "crryoutWrkPlCd") == "") {
      var condition = "?";
      var wrkPlCd = "";
      var odrNo = "";
      var cntrNo = "";
      let src = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_06b.xml";
      let menuNm = "반출등록";
      let menuId = "op_301_01_06b";
      paramObj = {};
      paramObj.pgmInfo = {
        "wrkPlCd": wrkPlCd,
        "odrNo": odrNo,
        "cntrNo": cntrNo
      };
      $c.win.openMenu($p, menuNm, src, menuId, paramObj);
    }
  } else if (columnId == "crryinYn") {
    if (ds_RailroadWorkPlan.getCellData(row, "crryinWrkPlCd") == "") {
      var wrkPlCd = "";
      var odrNo = "";
      var cntrNo = "";
      let src = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05b.xml";
      let menuNm = "반입등록";
      let menuId = "op_301_01_05b";
      paramObj = {};
      paramObj.pgmInfo = {
        "wrkPlCd": wrkPlCd,
        "odrNo": odrNo,
        "cntrNo": cntrNo
      };
      $c.win.openMenu($p, menuNm, src, menuId, paramObj);
    }
  }
};
scwin.udc_dptStn_callBackFunc = function (ref) {
  if (ref != null) {
    if (ref[0] != "N/A") {
      ed_dptStn.setValue(ref[0]);
      ed_begintrainWorkPlaceNm.setValue(ref[1]);
    }
  } else {
    ed_dptStn.setValue("");
    ed_begintrainWorkPlaceNm.setValue("");
  }
  /*출발/도착역이 오봉역(4R01), 부산진역(6R01), 부산신항역(6R12)가 아닌경우 저수요단가 생성불가 
      => 14.04.11 수정  오봉역(4R01), 부산신항역(6R12)가 아닌경우 저수요단가 생성 불가*/
  if (ed_dptStn.getValue() != "6R12" && ed_dptStn.getValue() != "4R01") {
    $c.gus.cfDisableObjects($p, [ed_totAmt, ed_railroadFare, ed_teuCnt]);
    $c.gus.cfDisableBtn($p, [btn_btdan]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_totAmt, ed_railroadFare, ed_teuCnt]);
    $c.gus.cfEnableBtnOnly($p, [btn_btdan]);
  }
};
scwin.udc_arvStn_callBackFunc = function (ref) {
  if (ref != null) {
    if (ref[0] != "N/A") {
      ed_arvStn.setValue(ref[0]);
      ed_endtrainWorkPlaceNm.setValue(ref[1]);
    }
  } else {
    ed_arvStn.setValue("");
    ed_endtrainWorkPlaceNm.setValue("");
  }
};
scwin.excelDown = function () {
  const infoArr = [];
  const options = {
    fileName: "저수요컨테이너적재등록.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "저수요컨테이너적재등록",
    // startRowIndex: 2,
    oddRowBackgroundColor: "",
    // excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: "#F5FFF5" // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_RailroadWorkPlan, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_signDt',pickerType:'dynamic',style:'',mandatory:'true',title:'출발일자','ev:onchange':'scwin.ica_signDt_onchange',objType:'key'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_signHh',style:'width: 50px;',title:'출발시간',maxlength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_dptStn',codeId:'ed_dptStn',nameId:'ed_begintrainWorkPlaceNm',validTitle:'출발역',mandatoryCode:'true',objTypeCode:'key','ev:onviewchangeNameEvent':'scwin.udc_dptStn_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptStn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptStn_onblurCodeEvent',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',upperFlag:'1',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_arvStn',codeId:'ed_arvStn',nameId:'ed_endtrainWorkPlaceNm',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'key','ev:onviewchangeNameEvent':'scwin.udc_arvStn_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_arvStn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arvStn_onblurCodeEvent',upperFlag:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'저수요컨테이너 적재등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName" : "저수요컨테이너적재등록.xlsx","sheetName" : "저수요컨테이너적재등록","type":"4+8+16" }',gridID:'gr_RailroadWorkPlan',gridDownFn:'scwin.excelDown',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadWorkPlan',id:'gr_RailroadWorkPlan',style:'',visibleRowNum:'13',visibleRowNumFix:'true',columnMove:'true',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_RailroadWorkPlan_onafteredit','ev:oncellclick':'scwin.gr_RailroadWorkPlan_oncellclick','ev:oncelldblclick':'scwin.gr_RailroadWorkPlan_oncelldblclick',dataName:'사유화차신청',validFeatures:'ignoreStatus=no',validExp:'wrkStDt:출발일자:yes:date=YYYYMMDD,frtcarNo:화차번호:yes:maxLength=6:key,cntrNo:컨테이너번호:yes:maxLength<=11:key,btTransNmCd:운송명의:yes::key,expimpClsCd:수출입구분:yes:maxLength=1:key'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출발일자',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'출발시간',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'화차번호',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'컨테이너번호',width:'120',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'출발역',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'도착역',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'40',width:'140',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'20',width:'140',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'운송<br/>명의',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'화주명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'수출입<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column34',value:'LINE',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'오더등록',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'반출',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'반입',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'적재등록',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'40F',displayMode:'label',class:'txt-blue',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'40E',displayMode:'label',class:'txt-blue',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'20F',displayMode:'label',class:'txt-blue',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'20E',displayMode:'label',class:'txt-blue',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frtcarNo',inputType:'text',width:'100',dataType:'number',maxLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',style:'cursor: pointer;',maxLength:'11'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'btAssgn40f',inputType:'checkbox',width:'70',textAlign:'center',excelCellType:'number',falseValue:'0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'btAssgn40e',inputType:'checkbox',width:'70',textAlign:'center',excelCellType:'number',falseValue:'0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'btAssgn20f',inputType:'checkbox',width:'70',textAlign:'center',excelCellType:'number',falseValue:'0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'btAssgn20e',inputType:'checkbox',width:'70',textAlign:'center',excelCellType:'number',falseValue:'0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',id:'btTransNmCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_transNmCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realMchtClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'autoComplete',id:'expimpClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LkStepNo1'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lineCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regOdrYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'crryoutYn',value:'',displayMode:'label',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'crryinYn',value:'',displayMode:'label',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'rsltsAssgnYn',value:'',displayMode:'label',dataType:'date',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'btAssgn40f\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'btAssgn40e\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'btAssgn20f\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'btAssgn20e\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'realMchtClntNm\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'expimpClsCd\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column36',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'lineCd\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'regOdrYn\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'crryoutYn\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'crryinYn\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'rsltsAssgnYn\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_left',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_total'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_total1',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',id:'txt_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-->',style:'margin-left:10px',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_total2',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',id:'txt_DBRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_total3',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'천일',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',id:'txt_CIRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_total4',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양양',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',id:'txt_YYRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',btnCancelYn:'Y',rowAddFunction:'scwin.f_inputGridAddrow',gridID:'gr_RailroadWorkPlan'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저수요배정금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_totAmt',placeholder:'',class:'tar',displayFormat:'#,###',dataType:'number',ref:'',maxlength:'23',applyFormat:'all',readOnly:'true',initValue:'0'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저수요단가',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_railroadFare',placeholder:'',class:'tar',ref:'',dataType:'number',displayFormat:'#,###',readOnly:'true',initValue:'0'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TEU',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_teuCnt',placeholder:'',class:'tar',ref:'',dataType:'number',displayFormat:'#,###',maxlength:'3',initValue:'0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col tac',style:'width: 80px;;'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_tariffchk',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.cbx_tariffchk_onviewchange','ev:onchange':'scwin.cbx_tariffchk_onchange',falseValue:'F'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신항요율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_PopupBTLoadingList',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_PopupBTLoadingList_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저수요적재 리스트조회'}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_btdan',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_btdan_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저수요단가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})