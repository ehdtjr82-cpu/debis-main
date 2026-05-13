/*amd /ui/ds/op/chainportalgrouporder/op_900_10_03b.xml 58954 7e5539febcb177fed027dc88f12e0b498f2a2c7df3c13e3a50b6348d683d46d5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtFr',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtTo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchSts'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docKey',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'conNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'groupKey',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'truckNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dispatchGroup',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outTerminal',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inTerminal',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'terminalShipVoyageNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shippingCode',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtFr',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtTo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtCls',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderSts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dispatchGroup',name:'체인포탈 그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creatDt',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupStatus',name:'그룹상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bundleId',name:'묶음',dataType:'text'}},{T:1,N:'w2:column',A:{id:'terminalShipVoyageNo',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingCode',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outTerminalCode',name:'반출터미널',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outTerminal',name:'반출터미널명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerminalCode',name:'반입터미널',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerminal',name:'반입터미널명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Cnt',name:'40 컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20Cnt',name:'20 컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt',name:'챠량대수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCnt',name:'배차건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeCnt',name:'완료건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtFr',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtTo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtCls',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupKey',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docKey',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conNo',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderCntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'outTerminal',name:'반출지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inTerminal',name:'반입지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'conNo',name:'CNTR'}},{T:1,N:'w2:column',A:{dataType:'text',id:'conLoc',name:'컨위치'}},{T:1,N:'w2:column',A:{dataType:'text',id:'conType',name:'SIZE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'truckNo',name:'챠량번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transStatusOut',name:'운송상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateInTimeOut',name:'Gate-In'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jobTypeOut',name:'상하차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateOutTimeOut',name:'Gate-Out'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transStatusIn',name:'운송상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateInTimeIn',name:'Gate-In'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jobTypeIn',name:'상하차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateOutTimeIn',name:'Gate-Out'}},{T:1,N:'w2:column',A:{dataType:'text',id:'error',name:'에러구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'errorMessage',name:'에러메세지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'입항일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dispatchGroup',name:'체인포탈'}},{T:1,N:'w2:column',A:{id:'groupKey',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docKey',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CurrPosNm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvlportDtm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name31',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderVehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispatchGroup',name:'dispatch',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckNo',name:'챠량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckCode',name:'챠량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisType',name:'샤시유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeCnt',name:'운송완료수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupKey',name:'그룹키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blockInTime',name:'Block-In',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelMsg',name:'취소메세지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelTime',name:'취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conLoc',name:'컨위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eirNo',name:'EIR번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateInTime',name:'Gate-In',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateOutTime',name:'Gate-Out',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobDoneTime',name:'작업완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'작업유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transStatus',name:'운송상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderTargetCntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conType',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CurrPosNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'컨테이너수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderTargetVehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckNo',name:'챠량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckCode',name:'챠량ID코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'챠량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisType',name:'샤시유형',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_batch',action:'/ncall.ds.op.chainportalgrouporder.ExcuteGroupOrderCntrShuttleTransWrkIndictCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderStsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_groupOrderSts","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_groupOrderSts","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSts',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderStsTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchSts","key":"IN_DS1"},{"id":"ds_groupOrderCntr","key":"OUT_DS1"},{"id":"ds_groupOrderVehcl","key":"OUT_DS2"},{"id":"ds_groupOrderTargetCntr","key":"OUT_DS3"},{"id":"ds_groupOrderTargetVehcl","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_groupOrderCntr","key":"OUT_DS1"},{"id":"ds_groupOrderVehcl","key":"OUT_DS2"},{"id":"ds_groupOrderTargetCntr","key":"OUT_DS3"},{"id":"ds_groupOrderTargetVehcl","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSts_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.chainportalgrouporder.SaveGroupOrderStsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_groupOrderCntr","key":"IN_DS1"},{"id":"ds_groupOrderVehcl","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_send',action:'/ncall.ds.op.chainportalgrouporder.ChainPortalModifyOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_groupOrderSts","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/컨테이너 운송지시/그룹오더 진행관리
// 조회조건 2024/01/01 ~ 2026/01/07

scwin.currDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.firstDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.memJson = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
//-------------------------------------------------------------------------   
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  em_srchDtFr.setValue(scwin.currDate);
  em_srchDtTo.setValue(scwin.currDate);
};
scwin.f_Retrieve = async function () {
  //조회시작일자가 더 클경우 체크
  if (!$c.gus.cfIsAfterDate($p, em_srchDtFr.getValue(), em_srchDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  ds_groupOrderCntr.removeAll();
  ds_groupOrderVehcl.removeAll();
  ds_groupOrderTargetCntr.removeAll();
  ds_groupOrderTargetVehcl.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_RetrieveSts = async function () {
  ds_searchSts.set("srchDtFr", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "srchDtFr"));
  ds_searchSts.set("srchDtTo", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "srchDtTo"));
  ds_searchSts.set("srchDtCls", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "srchDtCls"));
  await $c.sbm.execute($p, sbm_retrieveSts);
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
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function param : gubn
// function desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    //작업장코드
    udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFun, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
  }
};
scwin.udc_wrkPlCd_callBackFun = function (rtnList) {
  if (rtnList == null) {
    ed_wrkPlCd.setValue("");
    txt_wrkPlNm.setValue("");
  } else {
    ed_wrkPlCd.setValue(rtnList[0]); // 코드
    txt_wrkPlNm.setValue(rtnList[1]); // 명
  }
};

//-------------------------------------------------------------------------
// function name : f_upMove
// function desc : 추가
//-------------------------------------------------------------------------
scwin.f_UpMove1 = async function () {
  var groupStatus = ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupStatus");
  if (groupStatus != "CREATE" && groupStatus != "STOP") {
    await $c.win.alert($p, "CREATE 상태나 STOP 상태에서만 수정할 수 있습니다.");
    return;
  }
  var targetCnt = ds_groupOrderTargetCntr.getTotalRow();
  var stsCnt = ds_groupOrderCntr.getTotalRow();
  var chkCnt = 0;
  if (targetCnt < 1) {
    await $c.gus.cfAlertMsg($p, "추가할 대상이 없습니다.");
    return;
  } else {
    for (var i = 0; i < targetCnt; i++) {
      var chkYn = ds_groupOrderTargetCntr.getCellData(i, "chk");
      if (chkYn == "1") {
        ds_groupOrderCntr.insertRow(stsCnt);
        gr_groupOrderCntr.setFocusedCell(stsCnt, 0);
        ds_groupOrderCntr.setCellData(stsCnt, "groupKey", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupKey"));
        ds_groupOrderCntr.setCellData(stsCnt, "dispatchGroup", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "dispatchGroup"));
        ds_groupOrderCntr.setCellData(stsCnt, "docKey", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "docKey"));
        ds_groupOrderCntr.setCellData(stsCnt, "outTerminal", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "outTerminal"));
        ds_groupOrderCntr.setCellData(stsCnt, "inTerminal", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "inTerminal"));
        ds_groupOrderCntr.setCellData(stsCnt, "conNo", ds_groupOrderTargetCntr.getCellData(i, "conNo"));
        ds_groupOrderCntr.setCellData(stsCnt, "conType", ds_groupOrderTargetCntr.getCellData(i, "conType"));
        ds_groupOrderCntr.setCellData(stsCnt, "truckNo", ds_groupOrderTargetCntr.getCellData(i, "truckNo"));
        ds_groupOrderCntr.setCellData(stsCnt, "arrvlportDtm", ds_groupOrderTargetCntr.getCellData(i, "arrvlportDtm"));
        ds_groupOrderCntr.setCellData(stsCnt, "odrNo", ds_groupOrderTargetCntr.getCellData(i, "odrNo"));
        ds_groupOrderCntr.setCellData(stsCnt, "cntrSizCd", ds_groupOrderTargetCntr.getCellData(i, "cntrSizCd"));
        ds_groupOrderCntr.setCellData(stsCnt, "cntrTypCd", ds_groupOrderTargetCntr.getCellData(i, "cntrTypCd"));
        ds_groupOrderCntr.setCellData(stsCnt, "fullEmptyClsCd", ds_groupOrderTargetCntr.getCellData(i, "fullEmptyClsCd"));
        ds_groupOrderCntr.setCellData(stsCnt, "currPosCd", ds_groupOrderTargetCntr.getCellData(i, "currPosCd"));
        ds_groupOrderCntr.setCellData(stsCnt, "CurrPosNm", ds_groupOrderTargetCntr.getCellData(i, "CurrPosNm"));
        ds_groupOrderCntr.setCellData(stsCnt, "destPortCd", ds_groupOrderTargetCntr.getCellData(i, "destPortCd"));
        ds_groupOrderCntr.setCellData(stsCnt, "cntrCnt", ds_groupOrderTargetCntr.getCellData(i, "cntrCnt"));
        ds_groupOrderCntr.setCellData(stsCnt, "chk", "0");
        chkCnt++;
        stsCnt++;
      }
    }
    if (chkCnt == 0) {
      await $c.gus.cfAlertMsg($p, "추가할 대상이 없습니다.");
      return;
    }
    for (var i = targetCnt - 1; i >= 0; i--) {
      var chkYn = ds_groupOrderTargetCntr.getCellData(i, "chk");
      if (chkYn == "1") {
        ds_groupOrderTargetCntr.deleteRow(i);
        ds_groupOrderTargetCntr.removeRow(i);
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_dwMove
// function desc : 삭제
//-------------------------------------------------------------------------
scwin.f_DwMove1 = async function () {
  var groupStatus = ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupStatus");
  if (groupStatus != "CREATE" && groupStatus != "STOP") {
    $c.win.alert($p, "CREATE 상태나 STOP 상태에서만 수정할 수 있습니다.");
    return;
  }
  var targetCnt = ds_groupOrderTargetCntr.getTotalRow();
  var stsCnt = ds_groupOrderCntr.getTotalRow();
  var chkCnt = 0;
  if (stsCnt < 0) {
    await $c.gus.cfAlertMsg($p, "삭제할 대상이 없습니다.");
    return;
  } else {
    for (var i = 0; i < stsCnt; i++) {
      var chkYn = ds_groupOrderCntr.getCellData(i, "chk");
      if (chkYn == "1" && ds_groupOrderCntr.getRowStatus(i) == "C") {
        ds_groupOrderTargetCntr.insertRow(targetCnt);
        gr_groupOrderTargetCntr.setFocusedCell(targetCnt, 0);
        ds_groupOrderTargetCntr.setCellData(targetCnt, "conNo", ds_groupOrderCntr.getCellData(i, "conNo"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "apprvlportDtm", ds_groupOrderCntr.getCellData(i, "apprvlportDtm"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "conType", ds_groupOrderCntr.getCellData(i, "conType"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "odrNo", ds_groupOrderCntr.getCellData(i, "odrNo"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "cntrNo", ds_groupOrderCntr.getCellData(i, "cntrNo"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "cntrSizCd", ds_groupOrderCntr.getCellData(i, "cntrSizCd"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "cntrTypCd", ds_groupOrderCntr.getCellData(i, "cntrTypCd"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "fullEmptyClsCd", ds_groupOrderCntr.getCellData(i, "fullEmptyClsCd"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "currPosCd", ds_groupOrderCntr.getCellData(i, "currPosCd"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "CurrPosNm", ds_groupOrderCntr.getCellData(i, "CurrPosNm"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "destPortCd", ds_groupOrderCntr.getCellData(i, "destPortCd"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "cntrCnt", ds_groupOrderCntr.getCellData(i, "cntrCnt"));
        ds_groupOrderTargetCntr.setCellData(targetCnt, "chk", "0");
        ds_groupOrderTargetCntr.modifyAllStatus("R");
        chkCnt++;
        targetCnt++;
      } else if (chkYn == "1" && ds_groupOrderCntr.getRowStatus(i) == "U") {
        ds_groupOrderCntr.deleteRow(i);
      }
      if (chkYn == "1" && ds_groupOrderCntr.getRowStatus(i) == "D") {
        chkCnt++;
      }
    }
    if (chkCnt == 0) {
      await $c.gus.cfAlertMsg($p, "삭제할 대상을 선택하세요");
      return;
    }
    for (var i = stsCnt - 1; i >= 0; i--) {
      var chkYn = ds_groupOrderCntr.getCellData(i, "chk");
      if (chkYn == "1") {
        if (ds_groupOrderCntr.getRowStatus(i) == "C") {
          ds_groupOrderCntr.removeRow(i);
        } else {
          ds_groupOrderCntr.deleteRow(i);
          gr_groupOrderCntr.setCellReadOnly(i, "chk", true);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_upMove
// function desc : 추가
//-------------------------------------------------------------------------
scwin.f_UpMove2 = async function () {
  var groupStatus = ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupStatus");
  var truckCode = ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "truckCode");
  if (groupStatus != "CREATE" && groupStatus != "STOP") {
    await $c.win.alert($p, "CREATE 상태나 STOP 상태에서만 수정할 수 있습니다.");
    return;
  }
  if (ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "truckCode") == "") {
    await $c.win.alert($p, '차량 ID번호가 없습니다.');
    return;
  }
  var targetCnt = ds_groupOrderTargetVehcl.getTotalRow();
  var stsCnt = ds_groupOrderVehcl.getTotalRow();
  var chkCnt = 0;
  if (targetCnt < 1) {
    await $c.gus.cfAlertMsg($p, "추가할 대상이 없습니다.");
    return;
  } else {
    for (var i = 0; i < targetCnt; i++) {
      var chkYn = ds_groupOrderTargetVehcl.getCellData(i, "chk");
      if (chkYn == "1") {
        ds_groupOrderVehcl.insertRow(stsCnt);
        gr_groupOrderVehcl.setFocusedCell(stsCnt, 0);
        ds_groupOrderVehcl.setCellData(stsCnt, "groupKey", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupKey"));
        ds_groupOrderVehcl.setCellData(stsCnt, "dispatchGroup", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "dispatchGroup"));
        ds_groupOrderVehcl.setCellData(stsCnt, "truckNo", ds_groupOrderTargetVehcl.getCellData(i, "truckNo"));
        ds_groupOrderVehcl.setCellData(stsCnt, "truckCode", ds_groupOrderTargetVehcl.getCellData(i, "truckCode"));
        ds_groupOrderVehcl.setCellData(stsCnt, "chassisType", ds_groupOrderTargetVehcl.getCellData(i, "chassisType"));
        ds_groupOrderVehcl.setCellData(stsCnt, "transStatus", ds_groupOrderTargetVehcl.getCellData(i, "transStatus"));
        ds_groupOrderVehcl.setCellData(stsCnt, "completeCnt", ds_groupOrderTargetVehcl.getCellData(i, "completeCnt"));
        ds_groupOrderVehcl.setCellData(stsCnt, "eqCd", ds_groupOrderTargetVehcl.getCellData(i, "eqCd"));
        ds_groupOrderVehcl.setCellData(stsCnt, "chk", "0");
        chkCnt++;
        stsCnt++;
      }
    }
    if (chkCnt == 0) {
      await $c.gus.cfAlertMsg($p, "추가할 대상이 없습니다.");
      return;
    }
    for (var i = targetCnt - 1; i >= 0; i--) {
      var chkYn = ds_groupOrderTargetVehcl.getCellData(i, "chk");
      if (chkYn == "1") {
        ds_groupOrderTargetVehcl.deleteRow(i);
        ds_groupOrderTargetVehcl.removeRow(i);
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_dwMove
// function desc : 삭제
//-------------------------------------------------------------------------
scwin.f_DwMove2 = async function () {
  var groupStatus = ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupStatus");
  if (groupStatus != "CREATE" && groupStatus != "STOP") {
    await $c.win.alert($p, "CREATE 상태나 STOP 상태에서만 수정할 수 있습니다.");
    return;
  }
  var targetCnt = ds_groupOrderTargetVehcl.getTotalRow();
  var stsCnt = ds_groupOrderVehcl.getTotalRow();
  var chkCnt = 0;
  if (stsCnt < 0) {
    await $c.gus.cfAlertMsg($p, "삭제할 대상이 없습니다.");
    return;
  } else {
    for (var i = 0; i < stsCnt; i++) {
      var chkYn = ds_groupOrderVehcl.getCellData(i, "chk");
      if (chkYn == "1" && ds_groupOrderVehcl.getRowStatus(i) == "C") {
        ds_groupOrderTargetVehcl.insertRow(targetCnt);
        gr_groupOrderTargetCntr.setFocusedCell(targetCnt, 0);
        ds_groupOrderTargetVehcl.setCellData(targetCnt, "truckNo", ds_groupOrderVehcl.getCellData(i, "truckNo"));
        ds_groupOrderTargetVehcl.setCellData(targetCnt, "truckCode", ds_groupOrderVehcl.getCellData(i, "truckCode"));
        ds_groupOrderTargetVehcl.setCellData(targetCnt, "chassisType", ds_groupOrderVehcl.getCellData(i, "chassisType"));
        ds_groupOrderTargetVehcl.setCellData(targetCnt, "chk", "0");
        ds_groupOrderTargetVehcl.modifyAllStatus("R");
        chkCnt++;
        targetCnt++;
      } else if (chkYn == "1" && ds_groupOrderVehcl.getRowStatus(i) == "U") {
        ds_groupOrderVehcl.deleteRow(i);
      }
      if (chkYn == "1" && ds_groupOrderVehcl.getRowStatus(i) == "D") {
        chkCnt++;
      }
    }
    if (chkCnt == 0) {
      await $c.gus.cfAlertMsg($p, "삭제할 대상이 없습니다.");
      return;
    }
    for (var i = stsCnt - 1; i >= 0; i--) {
      var chkYn = ds_groupOrderVehcl.getCellData(i, "chk");
      if (chkYn == "1") {
        if (ds_groupOrderVehcl.getRowStatus(i) == "C") {
          ds_groupOrderVehcl.removeRow(i);
        } else {
          ds_groupOrderVehcl.deleteRow(i);
          gr_groupOrderVehcl.setCellReadOnly(i, "chk", true);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//function name : f_save
//function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_groupOrderCntr.getTotalRow() < ds_groupOrderVehcl.getTotalRow()) {
    await $c.gus.cfAlertMsg($p, "컨테이너 갯수보다 트럭 갯수가 많을 수 없습니다.");
  }
  if (ds_groupOrderCntr.getModifiedIndex().length == 0 && ds_groupOrderVehcl.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 실적배치버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Batch = async function () {
  if (await $c.win.confirm($p, "자동화 배차를 실행하시겠습니까?")) {
    // tr_batch.Post();
    $c.sbm.execute($p, sbm_batch);
  }
};

//-------------------------------------------------------------------------
// 조회서비스 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_groupOrderSts.getTotalRow();
  totalRows1.setValue(rowCnt);
  if (rowCnt > 0) {
    // gr_groupOrderSts.setFocusedCell(0, 0);
    ds_groupOrderSts.setRowPosition(0);
  }
  ds_searchSts.set("conNo", ds_groupOrderSts.getCellData(0, "conNo"));
  ds_searchSts.set("groupKey", ds_groupOrderSts.getCellData(0, "groupKey"));
  ds_searchSts.set("dispatchGroup", ds_groupOrderSts.getCellData(0, "dispatchGroup"));
  ds_searchSts.set("outTerminal", ds_groupOrderSts.getCellData(0, "outTerminalCode"));
  ds_searchSts.set("inTerminal", ds_groupOrderSts.getCellData(0, "inTerminalCode"));
  ds_searchSts.set("terminalShipVoyageNo", ds_groupOrderSts.getCellData(0, "terminalShipVoyageNo"));
  ds_searchSts.set("shippingCode", ds_groupOrderSts.getCellData(0, "shippingCode"));
  ds_searchSts.set("srchDtFr", ds_search.get("srchDtFr"));
  ds_searchSts.set("srchDtTo", ds_search.get("srchDtTo"));
  await scwin.f_RetrieveSts();

  // scwin.ds_groupOrderSts_OnLoadCompleted(); // 선택된 그룹오더 그리드
  if (totalRows1.getValue() == "0" && totalRows2.getValue() == "0" && totalRows3.getValue() == "0" && totalRows4.getValue() == "0" && totalRows5.getValue() == "0") {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};

//-------------------------------------------------------------------------
// 저장서비스 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '변경했습니다.');
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 선택된 그룹오더 그리드 데이터 조회 후
//-------------------------------------------------------------------------
scwin.ds_groupOrderSts_OnLoadCompleted = function () {
  var rowCnt = ds_groupOrderSts.getTotalRow();
  totalRows1.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    ds_searchSts.set("conNo", ds_groupOrderSts.getCellData(0, "conNo"));
    ds_searchSts.set("groupKey", ds_groupOrderSts.getCellData(0, "groupKey"));
    ds_searchSts.set("dispatchGroup", ds_groupOrderSts.getCellData(0, "dispatchGroup"));
    ds_searchSts.set("outTerminal", ds_groupOrderSts.getCellData(0, "outTerminalCode"));
    ds_searchSts.set("inTerminal", ds_groupOrderSts.getCellData(0, "inTerminalCode"));
    ds_searchSts.set("terminalShipVoyageNo", ds_groupOrderSts.getCellData(0, "terminalShipVoyageNo"));
    ds_searchSts.set("shippingCode", ds_groupOrderSts.getCellData(0, "shippingCode"));
    ds_searchSts.set("srchDtFr", ds_search.get("srchDtFr"));
    ds_searchSts.set("srchDtTo", ds_search.get("srchDtTo"));
    scwin.f_RetrieveSts();
  }
};

//-------------------------------------------------------------------------
// 선택된 그룹오더 그리드 셀 클릭 이벤트
//-------------------------------------------------------------------------
scwin.gr_groupOrderSts_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_groupOrderSts.getTotalRow() != 0) {
    ds_searchSts.set("docKey", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "docKey"));
    ds_searchSts.set("conNo", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "conNo"));
    ds_searchSts.set("groupKey", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "groupKey"));
    ds_searchSts.set("truckNo", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "truckNo"));
    ds_searchSts.set("dispatchGroup", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "dispatchGroup"));
    ds_searchSts.set("outTerminal", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "outTerminalCode"));
    ds_searchSts.set("inTerminal", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "inTerminalCode"));
    ds_searchSts.set("terminalShipVoyageNo", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "terminalShipVoyageNo"));
    ds_searchSts.set("shippingCode", ds_groupOrderSts.getCellData(ds_groupOrderSts.getRowPosition(), "shippingCode"));
    ds_searchSts.set("srchDtFr", ds_search.get("srchDtFr"));
    ds_searchSts.set("srchDtTo", ds_search.get("srchDtTo"));
    scwin.f_RetrieveSts();
  }
};
scwin.sbm_retrieveSts_submitdone = function (e) {
  for (var i = 0; i < ds_groupOrderCntr.getTotalRow(); i++) {
    // 운송상태 copy
    ds_groupOrderCntr.setCellData(i, "transStatus2", ds_groupOrderCntr.getCellData(i, "transStatus"));
  }
  totalRows2.setValue(ds_groupOrderCntr.getTotalRow());
  totalRows3.setValue(ds_groupOrderVehcl.getTotalRow());
  totalRows4.setValue(ds_groupOrderTargetCntr.getTotalRow());
  totalRows5.setValue(ds_groupOrderTargetVehcl.getTotalRow());
};

//-------------------------------------------------------------------------
// 작업장 팝업 이벤트
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', ed_wrkPlCd.getValue(), txt_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm, ed_wrkPlCd, '1', false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_wrkPlCd.getValue(), txt_wrkPlNm.getValue(), 'F', 'T');
};
scwin.gr_formatter_jobType = function (data) {
  return $c.gus.decode($p, data, "L", "상차", "U", "하차");
};
scwin.gr_formatter_jobTypeOut = function (data) {
  return $c.gus.decode($p, data, "L", "상차완료", "상차대기");
};
scwin.gr_formatter_jobTypeIn = function (data) {
  return $c.gus.decode($p, data, "U", "하차완료", "하차대기");
};
scwin.gr_formatter_error = function (data) {
  return $c.gus.decode($p, data, "0", "정상", "2", "에러");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_wrkPlCd',codeId:'ed_wrkPlCd',btnId:'btn_wrkPlCd',nameId:'txt_wrkPlNm','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',selectID:'retriveGateWrkPlCdNcall','ev:onblurNameEvent':'scwin.udc_wrkPlCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',refDataCollection:'ds_search',code:'wrkPlCd',validExp:'작업장:yes',mandatoryCode:'true',validTitle:'작업장',UpperFlagCode:'1',objTypeName:'data',objTypeCode:'data',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchDt',refDataMap:'ds_search',refEdDt:'srchDtTo',refStDt:'srchDtFr',style:'',edFromId:'em_srchDtFr',edToId:'em_srchDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'등록일자 시작일자',titleTo:'등록일자 종료일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'선택된 그룹오더',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',btnUser:'Y',gridDownYn:'N',templateYn:'N',style:'',gridID:'gr_groupOrderSts',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_groupOrderSts',style:'',autoFit:'allColumn',id:'gr_groupOrderSts',visibleRowNum:'7',class:'wq_gvw','ev:oncellclick':'scwin.gr_groupOrderSts_oncellclick',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column1',value:'체인포탈 그룹번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'생성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'그룹상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column13',value:'묶음',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'모선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'라인코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'반출터미널',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'반출터미널명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'반입터미널',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'반입터미널명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'40 컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'20 컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'챠량대수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'배차건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'완료건수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'dispatchGroup',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'creatDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'groupStatus',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'bundleId',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'terminalShipVoyageNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shippingCode',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outTerminalCode',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outTerminal',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inTerminalCode',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'inTerminal',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntr40Cnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntr20Cnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclCnt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCnt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'completeCnt',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'진행중 컨테이너',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridID:'gr_groupOrderCntr',gridUpYn:'N',grp:'grd_section2',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_groupOrderCntr',style:'',id:'gr_groupOrderCntr',class:'wq_gvw',rowStatusVisible:'true',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'반출지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'반입지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'CNTR NO',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column90',value:'컨위치',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'SIZE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'챠량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column3',value:'반출터미널',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'410',inputType:'text',style:'',id:'column137',value:'반입터미널',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column149',value:'에러구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column33',value:'에러메세지',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column31',value:'입항일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column27',value:'체인포탈 그룹번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column133',value:'운송상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column82',value:'Gate-In',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column81',value:'상하차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'Gate-Out',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column138',value:'운송상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column147',value:'Gate-In',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column141',value:'상하차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column144',value:'Gate-Out',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outTerminal',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inTerminal',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conLoc',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conType',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transStatusOut',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gateInTimeOut',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jobTypeOut',inputType:'text',readOnly:'true',sortable:'true',displayFormatter:'scwin.gr_formatter_jobTypeOut'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gateOutTimeOut',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transStatusIn',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gateInTimeIn',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jobTypeIn',inputType:'text',readOnly:'true',sortable:'true',displayFormatter:'scwin.gr_formatter_jobTypeIn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gateOutTimeIn',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'error',inputType:'text',readOnly:'true',sortable:'true',displayFormatter:'scwin.gr_formatter_error'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'errorMessage',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispatchGroup',inputType:'text',readOnly:'true',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-up',id:'upMove1',style:'',type:'button','ev:onclick':'scwin.f_UpMove1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이전'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico btn-down',id:'dwMove1',style:'',type:'button','ev:onclick':'scwin.f_DwMove1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이후'}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'추가대상 컨테이너',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridID:'gr_groupOrderTargetCntr',gridUpYn:'N',grp:'grd_section4',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_groupOrderTargetCntr',id:'gr_groupOrderTargetCntr',style:'',visibleRowNumFix:'true',rowStatusVisible:'true',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'입항일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'컨테이너타입',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작업장코드',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업장명',width:'140'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column29',value:'목적항구코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',value:'컨테이너수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conNo',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conType',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosCd',inputType:'text',width:'140',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'CurrPosNm',inputType:'text',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'destPortCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cntrCnt',displayMode:'label',textAlign:'right',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'진행중 운송차량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridID:'gr_groupOrderVehcl',gridUpYn:'N',grp:'grd_section3',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_groupOrderVehcl',id:'gr_groupOrderVehcl',style:'',visibleRowNumFix:'true',autoFit:'allColumn',focusMode:'row',rowStatusVisible:'true',readOnly:'true',visibleRowNum:'7'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'dispatch',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'챠량번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'챠량코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'샤시유형',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'운송완료수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'그룹키',width:'120',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispatchGroup',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckCode',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisType',inputType:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Combo'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'22'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'completeCnt',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'groupKey',inputType:'text',width:'120',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-up',id:'',style:'',type:'button','ev:onclick':'scwin.f_UpMove2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이전'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico btn-down',id:'',style:'',type:'button','ev:onclick':'scwin.f_DwMove2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이후'}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:'margin-top: -10px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'추가대상 운송차량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridID:'gr_groupOrderTargetVehcl',gridUpYn:'N',grp:'grd_section5',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox ',id:'grd_section5',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_groupOrderTargetVehcl',id:'gr_groupOrderTargetVehcl',style:'',visibleRowNumFix:'true',autoFit:'allColumn',focusMode:'row',rowStatusVisible:'true',readOnly:'true',visibleRowNum:'6'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'챠량번호',width:'220'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'챠량ID코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'챠량코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'샤시유형',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckNo',inputType:'text',width:'220'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckCode',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisType',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows5',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_Batch',id:'but_Batch',style:'',type:'button',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'실적 배치'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})