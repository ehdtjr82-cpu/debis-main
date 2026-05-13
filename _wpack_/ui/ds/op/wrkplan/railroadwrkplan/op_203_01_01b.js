/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_01b.xml 94631 8e9b4b0c8523820a1f3a1ea1a083182fb4f01b437f835585c2b2ed7ea77c4b7f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDt',name:'적재예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsYn',name:'전용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt20Empty',name:'20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt20Full',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt40Empty',name:'40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt40Full',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt45Empty',name:'45E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlanCnt45Full',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'efSum',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuSum',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAppVol',name:'화차;요청량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'화차;배분량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCargoClsCd',name:'화물;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMsg',name:'전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSts',name:'상태;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befMonQty',name:'전월;실적',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'arvReqDt',name:'도착요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsNm',name:'문서상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayCapaTeu',name:'일Capa',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'mgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transLongNo',name:'transLongNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDtm',name:'sndDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocDtm',name:'allocDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modifyFlag',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendChk',name:'sendChk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'transWrkIndictNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictSeq',name:'indictSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'dptStnWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlNm',name:'dptStnWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptFdrCd',name:'dptFdrCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvFdrCd',name:'arvFdrCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndStsNm',name:'sndStsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kindCd',name:'kindCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kindNm',name:'kindNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'ediSndYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDocClsCd',name:'rcvDocClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_workKind',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_stateKind',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadReply',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'No',name:'번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsCdNm',name:'문서구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCd',name:'오류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptHh',name:'dptHh',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'wrkDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnCd',name:'dptStnCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnCd',name:'arvStnCd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DayCapaTeu',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkPlanEdiSend',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_combo_workKind_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_combo_stateKind_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_RetrieveRailroadReply_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'railroadReplyQueryCondition',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkPlan',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_RetrieveRailroadWorkPlan_submitdone','ev:submit':'scwin.sbm_RetrieveRailroadWorkPlan_submit','ev:submiterror':'scwin.sbm_RetrieveRailroadWorkPlan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveDayCapaTeu',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveDayCapaTeuCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition2","key":"IN_DS1"},{"id":"ds_DayCapaTeu","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_DayCapaTeu","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'','ev:submit':'scwin.sbm_RetrieveDayCapaTeu_submit','ev:submiterror':'scwin.sbm_RetrieveDayCapaTeu_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveOrderVolume',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveOrderVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_RetrieveOrderVolume_submitdone','ev:submit':'scwin.sbm_RetrieveOrderVolume_submit','ev:submiterror':'scwin.sbm_RetrieveOrderVolume_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadReply',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_RailroadReply","key":"OUT_DS1"},"ds_RetrieveRailroadReply_search"]',target:'data:json,{"id":"ds_RailroadReply","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_RetrieveRailroadReply_submitdone','ev:submit':'scwin.sbm_RetrieveRailroadReply_submit','ev:submiterror':'scwin.sbm_RetrieveRailroadReply_submiterror',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadReplyCMD.do',processMsg:'$blank'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRailroadWorkPlan',action:'/ds.op.wrkplan.railroadwrkplan.SaveRailroadWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_RailroadWorkPlan","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SaveRailroadWorkPlan_submitdone','ev:submit':'scwin.sbm_SaveRailroadWorkPlan_submit','ev:submiterror':'scwin.sbm_SaveRailroadWorkPlan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveFreightCarApplyEdi',action:'/ds.op.wrkplan.railroadwrkplan.SaveFreightCarApplyEdiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_RailroadWorkPlanEdiSend","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SaveFreightCarApplyEdi_submitdone','ev:submit':'scwin.sbm_SaveFreightCarApplyEdi_submit','ev:submiterror':'scwin.sbm_SaveFreightCarApplyEdi_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRailroadWorkInvoice',action:'/ds.op.wrkplan.railroadwrkplan.SaveRailroadWorkInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_RailroadWorkPlan","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SaveRailroadWorkInvoice_submitdone','ev:submit':'scwin.sbm_SaveRailroadWorkInvoice_submit','ev:submiterror':'scwin.sbm_SaveRailroadWorkInvoice_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_combo_workKind',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_combo_workKind_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_combo_stateKind',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_combo_stateKind_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_203_01_01b 
// 이름     : 철송작업계획
// 경로     : 물류/작업계획/철송/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-26
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.fromDay;
scwin.toDay;
scwin.sUserId;
scwin.sUserNm;
scwin.sUserClsCd;
scwin.sClntNo;
scwin.sClntNm;
scwin.order_chk;
scwin.oldRowValue;
scwin.dateStr1;
scwin.dateStr2;
scwin.edisndYn;
scwin.errMsgYN;
scwin.rowAddText = false;
scwin.onpageload = function () {
  // 현재일자
  scwin.fromDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.toDay = $c.date.addDate($p, scwin.fromDay, 7);
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sUserNm = $c.data.getMemInfo($p, "userNm");
  scwin.sUserClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userClsCd")) ? "" : $c.data.getMemInfo($p, "userClsCd");
  scwin.sClntNo = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "clntNo")) ? "" : $c.data.getMemInfo($p, "clntNo");
  scwin.sClntNm = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "clntNm")) ? "" : $c.data.getMemInfo($p, "clntNm");
  scwin.order_chk = "N"; // 오더물량 조회인지 철송작업계획 조회인지  체크  "Y" = 오더물량조회,  "N" = 철송작업계획조회
  scwin.oldRowValue = -1;
  scwin.dateStr1 = scwin.fromDay;
  scwin.dateStr2 = scwin.toDay;
  scwin.edisndYn = "0";
  scwin.errMsgYN = true;
  scwin.subTotalCnt = 0;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // new Date().format("YYYYMMDD");
    ica_signDtFrom.setValue(scwin.dateStr1);
    ica_signDtTo.setValue(scwin.dateStr1); //scwin.dateStr2;
    scwin.f_RetrieveWorkPrice();
    scwin.f_RetrieveStateKind();
    ica_signDtFrom.focus();
    $c.gus.cfDisableBtn($p, [
    // bSave, bUpdate
    // btn_save
    btn_saveRailroadWorkInvoice, btn_ediSend]);

    // $p.setTimeout(function() {
    //     // ica_signDtFrom.setValue("20060401");
    //     // ica_signDtTo.setValue("20060601");
    //     ica_signDtFrom.setValue("20260127");
    //     ica_signDtTo.setValue("20260127");
    //     // ica_signDtFrom.setValue("20250501");
    //     // ica_signDtTo.setValue("20250505");

    //     ed_begintrainWorkPlaceCd.setValue("4R01");
    //     // ed_begintrainWorkPlaceCd.setValue("6R12");
    //     ed_begintrainWorkPlaceCd.focus();
    //     ed_begintrainWorkPlaceCd.blur();

    // }, {"delay":50});    
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
//  조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_signDtFrom, ica_signDtTo, ed_begintrainWorkPlaceCd]))) {
    // 신청일자, 출발역
    return;
  }
  if (ed_begintrainWorkPlaceCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출발역"]);
    ed_begintrainWorkPlaceCd.focus();
    return;
  }
  ds_QueryCondition.set("reqDt", ica_signDtFrom.getValue()); // 신청일자From
  ds_QueryCondition.set("reqDtTo", ica_signDtTo.getValue()); // 신청일자To
  ds_QueryCondition.set("dptStn", ed_begintrainWorkPlaceCd.getValue()); // 출발역
  ds_QueryCondition.set("arvStn", ed_endtrainWorkPlaceCd.getValue()); // 도착역
  // alert("조회데이타셋="+ds_QueryCondition.getValue());
  $c.sbm.execute($p, sbm_RetrieveRailroadWorkPlan);

  //scwin.f_retrieveTeu();
};
scwin.f_retrieveTeu = function (regDt, arvStn) {
  ds_QueryCondition2.set("reqDt", regDt); // 적재예정일
  ds_QueryCondition2.set("dptStn", ed_begintrainWorkPlaceCd.getValue()); // 출발역
  ds_QueryCondition2.set("arvStn", arvStn); // 도착역

  $c.sbm.execute($p, sbm_RetrieveDayCapaTeu);
};

//-------------------------------------------------------------------------
//  도착역  중복입력을 체크하는 함수 ; 리턴값-->  F = 실행중지, T = 진행가능
//-------------------------------------------------------------------------
scwin.f_doubleChk = function (row, coild) {
  var rowState = 0;
  var total_cnt = ds_RailroadWorkPlan.getRowCount();
  var arvStnNm_ser = ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlNm");
  var arvStnCd_ser = ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlCd");
  for (var i = 0; i < total_cnt; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;
    rowState = ds_RailroadWorkPlan.getRowStatus(i);
    if (rowState == "D") continue; // 해당 Row 가 삭제상태일 경우 무시함.
    if (row == i) continue; // 해당 Row 가 현재입력한 Row()일 경우 무시함.

    if (ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlNm") == arvStnNm_ser || ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlCd") == arvStnCd_ser) {
      return "F";
    }
  }
  return "T";
};

//-------------------------------------------------------------------------
// 저장버튼 처리 
//-------------------------------------------------------------------------
//function scwin.f_Save(eqCd)  //수정 2006.05.06 eqCd 불명확
scwin.f_Save = async function () {
  var modifyRowCnt = ds_RailroadWorkPlan.getModifiedIndex().length;
  if (!(modifyRowCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["변경사항"]);
    return;
  }
  var total_cnt = ds_RailroadWorkPlan.getRowCount();
  for (var i = 0; i < total_cnt; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;

    // if (ds_RailroadWorkPlan.RowLevel(i) != 0){ //소계가 아닌경우만 추리기 위함
    // 	total_cnt = total_cnt+1;
    // 	continue;
    // }

    if (ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlNm") == "" || ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlCd") == ""
    //   && ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlNm") != "소계"
    ) {
      // 도착역
      await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "번째 줄]" + MSG_CM_ERR_002, ["도착역"]);
      ds_RailroadWorkPlan.setRowPosition(i);
      gr_RailroadWorkPlan.setFocusedCell(i, "arvStnWrkPlNm", true);
      return;
    }
    if (ds_RailroadWorkPlan.getCellData(i, "railroadCargoClsCd").trim() == "") {
      // 화물구분
      await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "번째 줄]" + MSG_CM_ERR_002, ["화물구분"]);
      ds_RailroadWorkPlan.setRowPosition(i);
      gr_RailroadWorkPlan.setFocusedCell(i, "railroadCargoClsCd", true);
      return;
    }

    /*
    if (ds_RailroadWorkPlan.getCellData(i,"arvReqDt").trim()=="")   // 도착요청일자
    {
    	   await $c.gus.cfAlertMsg("["+i+"번째 줄]"+MSG_CM_ERR_002,["도착요청일자"]);
    	   ds_RailroadWorkPlan.getRowPosition=i;
    	   gr_RailroadWorkPlan.SetColumn("arvReqDt"); 
    	return;
    }
    */
  }

  //	var rowSts = ds_RailroadWorkPlan.getCellData(RowPosition,"modifyFlag");
  for (var i = 0; i < total_cnt; i++) {
    if (ds_RailroadWorkPlan.getRowStatus(i) == "D" && ds_RailroadWorkPlan.getCellData(i, "modifyFlag") == "Y") {
      // if (ds_RailroadWorkPlan.RowStatus(ds_RailroadWorkPlan.j)== "2" ){
      // alert(ds_RailroadWorkPlan.SysStatus(j));
      await $c.win.alert($p, "운영실적에 이미 등록되어 삭제할수 없습니다.");
      return;
    }
  }
  for (var i = 0; i < total_cnt; i++) {
    if (ds_RailroadWorkPlan.getRowStatus(i) == "C") {
      // scwin.f_retrieveTeu(ds_RailroadWorkPlan.getCellData(i, "reqDt"), ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlCd"));

      ds_QueryCondition2.set("reqDt", ds_RailroadWorkPlan.getCellData(i, "reqDt")); // 적재예정일
      ds_QueryCondition2.set("dptStn", ed_begintrainWorkPlaceCd.getValue()); // 출발역
      ds_QueryCondition2.set("arvStn", ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlCd")); // 도착역

      var rs = await $c.sbm.execute($p, sbm_RetrieveDayCapaTeu);
      if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
        var dayCapaTeu = !$c.gus.cfIsNull($p, ds_DayCapaTeu.getCellData(0, "dayCapaTeu")) ? ds_DayCapaTeu.getCellData(0, "dayCapaTeu") : 0;
        ds_RailroadWorkPlan.setCellData(i, "dayCapaTeu", dayCapaTeu);
        await scwin.f_internalCal2(i, '', '');
        if (scwin.errMsgYN == false) return;
      }
      ;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.order_chk = "N";
    $c.sbm.execute($p, sbm_SaveRailroadWorkPlan);
  }
};

//-------------------------------------------------------------------------
//  운송장 저장 
//-------------------------------------------------------------------------
scwin.f_SaveRailroadWorkInvoice = async function () {
  /*		
      if (txt_transLongNo.getValue().trim() == "") {
          alert("운송장을 확인해 주세요");
          txt_transLongNo.focus();
          return;
      }
  */

  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_SaveRailroadWorkInvoice);
  }
};

//-------------------------------------------------------------------------
//  행추가  처리 
//-------------------------------------------------------------------------
scwin.f_inputGridAddrow = async function () {
  if (!ds_RailroadWorkPlan.getRowCount() > 0 && !scwin.rowAddText) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ica_signDtFrom.focus();
    return;
  }
  if (ica_signDtFrom.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["신청일자"]);
    ica_signDtFrom.focus();
    return;
  }
  if (ica_signDtTo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["신청일자"]);
    ica_signDtTo.focus();
    return;
  }
  if (ed_begintrainWorkPlaceCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["출발역"]);
    ed_begintrainWorkPlaceCd.focus();
    return;
  }
  var rowIndex = ds_RailroadWorkPlan.insertRow();
  ds_RailroadWorkPlan.setRowPosition(rowIndex);
  scwin.insertCnt++;
  scwin.f_addRowData();
  ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "reqDt", ica_signDtTo.getValue()); // 적재예정일
  ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvReqDt", ica_signDtTo.getValue()); // 도착요청일자

  gr_RailroadWorkPlan.setFocusedCell(rowIndex, 0, true);
};
scwin.f_inputGridCancel = function () {
  if (ds_RailroadWorkPlan) {
    let rowIdxs = gr_RailroadWorkPlan.getAllFocusedRowIndex();
    if (ds_RailroadWorkPlan.getCellData(rowIdxs[0], "targetSumRow") == "Y") return;
    let removeIdx = [];
    let undoIdx = [];
    let onlyRFlag = false;
    for (let idx in rowIdxs) {
      var row = rowIdxs[idx];
      if (ds_RailroadWorkPlan.getRowStatus(row) == "C") {
        removeIdx.push(row);
        onlyRFlag = true;
      } else {
        undoIdx.push(row);
        if (onlyRFlag) {
          onlyRFlag = false;
        }
      }
    }
    let tRemoveIdx = removeIdx.length;
    let tUndoIdx = undoIdx.length;
    if (removeIdx.length > 0) {
      ds_RailroadWorkPlan.removeRows(removeIdx);
      if (onlyRFlag) {
        if (ds_RailroadWorkPlan.getRowCount() > 0) {
          var idx = 0;
          if (ds_RailroadWorkPlan.getRowCount() - 1 < removeIdx[0]) {
            idx = ds_RailroadWorkPlan.getRowCount() - 1;
          } else {
            idx = removeIdx[0];
          }
          gr_RailroadWorkPlan.setFocusedCell(idx, 0);
          scwin.calcSubTotalRow(idx - 1);
        }
      }
    }
    if (undoIdx.length > 0) {
      ds_RailroadWorkPlan.undoRows(undoIdx);
      if (ds_RailroadWorkPlan.getRowCount() > 0) {
        // ds_RailroadWorkPlan.setRowPosition(undoIdx[tUndoIdx -1]);
        gr_RailroadWorkPlan.setFocusedCell(undoIdx[tUndoIdx - 1], 0);
        scwin.calcSubTotalRow(undoIdx[tUndoIdx - 1]);
      }
    }
  }
};
scwin.f_inputGridDelRow = function () {
  var row = ds_RailroadWorkPlan.getRowPosition();
  if (row > -1) {
    // $c.data.deleteRow(scwin.grid);
    var dltId = gr_RailroadWorkPlan;
    let dltObj = dltId;
    if (typeof dltId === "string") {
      dltObj = $c.util.getComponent($p, dltId);
    } else {
      dltObj = dltId;
    }
    let rowIdxs = dltObj.getAllFocusedRowIndex();
    if (ds_RailroadWorkPlan.getCellData(rowIdxs[0], "targetSumRow") == "Y") return;
    let removeIdx = [];
    let undoIdx = [];
    let onlyRFlag = false;
    for (let idx in rowIdxs) {
      var row = rowIdxs[idx];
      if (dltObj._dataList.getRowStatus(row) == "C") {
        removeIdx.push(row);
      } else {
        undoIdx.push(row);
      }
    }
    let tRemoveIdx = removeIdx.length;
    let tUndoIdx = undoIdx.length;
    if (removeIdx.length > 0) {
      dltObj._dataList.removeRows(removeIdx);
      onlyRFlag = true;
    }
    if (undoIdx.length > 0) {
      dltObj._dataList.deleteRows(undoIdx);
      onlyRFlag = false;
      if (dltObj._dataList.getRowCount() > 0) {
        dltObj.setFocusedCell(undoIdx[tUndoIdx - 1], 0);
      }
      scwin.calcSubTotalRow(undoIdx[0], undoIdx[0]);
    }
    if (onlyRFlag) {
      if (dltObj._dataList.getRowCount() > 0) {
        if (dltObj._dataList.getRowCount() - 1 < removeIdx[0]) {
          dltObj.setFocusedCell(dltObj._dataList.getRowCount() - 1, 0);
          scwin.calcSubTotalRow(removeIdx[0]);
        } else {
          dltObj.setFocusedCell(removeIdx[0], 0);
        }
      }
    }
    return;
  }
};

//-------------------------------------------------------------------------
//  행삽입  처리 
//-------------------------------------------------------------------------
scwin.f_insertGridAddrow = async function () {
  if (ds_RailroadWorkPlan.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  // 선택된 행 아래에 새로운 행 삽입
  // ds_RailroadWorkPlan.InsertRow();
  var rowIndex = 0;
  if (ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(), "targetSumRow") == "Y") {
    rowIndex = ds_RailroadWorkPlan.insertRow(ds_RailroadWorkPlan.getRowPosition());
  } else {
    rowIndex = ds_RailroadWorkPlan.insertRow(ds_RailroadWorkPlan.getRowPosition() + 1);
  }
  ds_RailroadWorkPlan.setRowPosition(rowIndex);
  gr_RailroadWorkPlan.setFocusedCell(rowIndex, 0, false);
  scwin.f_addRowData();
  ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "reqDt", ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition() - 1, "reqDt"));
  ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvReqDt", ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition() - 1, "reqDt"));
};

//-------------------------------------------------------------------------
//  행 추가 데이터
//-------------------------------------------------------------------------
scwin.f_addRowData = function () {
  var cur_rowpos = ds_RailroadWorkPlan.getRowPosition();
  if (cur_rowpos > 0) {
    ds_RailroadWorkPlan.setCellData(cur_rowpos, "transWrkIndictNo", ds_RailroadWorkPlan.getCellData(cur_rowpos - 1, "transWrkIndictNo")); //운송지시번호
  }
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "dptStnWrkPlCd", ed_begintrainWorkPlaceCd.getValue()); //출발작업장
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "dptStnWrkPlNm", ed_begintrainWorkPlaceNm.getValue());
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "arvStnWrkPlCd", ""); //도착작업장
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "arvStnWrkPlNm", "");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "ediSndYn", scwin.edisndYn); //edi전송여부 
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "sndSts", "0"); //전송상태
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "railroadCargoClsCd", "3");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkPlanCnt20Empty", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkPlanCnt20Full", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkPlanCnt40Empty", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkPlanCnt40Full", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkPlanCnt45Empty", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "wrkPlanCnt45Full", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "efSum", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "teuSum", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "frtcarAppVol", 0);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "frtcarAllocVol", 0);
  if (scwin.edisndYn == 1 || scwin.edisndYn == "1") {
    ds_RailroadWorkPlan.setCellData(cur_rowpos, "sendmsg", "전송");
  } else {
    ds_RailroadWorkPlan.setCellData(cur_rowpos, "sendmsg", "");
  }
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "modifyFlag", "N");
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "regNm", scwin.sUserNm);
  gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, "arvStnWrkPlNm", false);
  gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'arvStnWrkPlCd', false);
  gr_RailroadWorkPlan.setCellReadOnly(cur_rowpos, 'xclsYn', false);
  ds_RailroadWorkPlan.setCellData(cur_rowpos, "xclsYn", 1);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_signDtFrom.focus();
  ica_signDtFrom.setValue(scwin.dateStr1);
  ica_signDtTo.setValue(scwin.dateStr2);
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 출발역 역명 팝업	
      udc_begintrainWorkPlace.setSelectId('retrieveTrainWorkPlace');
      udc_begintrainWorkPlace.cfCommonPopUp(scwin.udc_begintrainWorkPlace_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 도착역 역명 팝업	
      udc_endtrainWorkPlace.setSelectId('retrieveTrainWorkPlace');
      udc_endtrainWorkPlace.cfCommonPopUp(scwin.udc_endtrainWorkPlace_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 그리드내의 도착역 역명 팝업	
      udc_gridCommonPop.setSelectId('retrieveTrainWorkPlace');
      udc_gridCommonPop.cfCommonPopUp(scwin.udc_gridCommonPop_callBackFunc1 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 오더물량조회 팝업  		
      pWhere = ica_signDtFrom.getValue() + "," + ed_begintrainWorkPlaceCd.getValue() + ',' + ed_endtrainWorkPlaceCd.getValue();
      udc_gridCommonPop.setSelectId('retrieveOrderVolume');
      udc_gridCommonPop.cfCommonPopUp(scwin.udc_gridCommonPop_callBackFunc2 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '60,90,60,70,90,100,110' // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '600' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 화물구분  콤보조회  **
//-------------------------------------------------------------------------
scwin.f_RetrieveWorkPrice = async function () {
  var param1 = "OP122";
  ds_combo_workKind_search.set("sysCd", "CooperationCompanyEquipmentEBC");
  ds_combo_workKind_search.set("queryId", "retrivecComboOneGrp");
  ds_combo_workKind_search.set("param1", param1);
  var rs = await $c.sbm.execute($p, sbm_combo_workKind);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_combo_workKind.setJSON(rs.responseJSON.GAUCE);
  }
  ;
};

//-------------------------------------------------------------------------
// 상태구분  콤보조회  **
//-------------------------------------------------------------------------
scwin.f_RetrieveStateKind = async function () {
  var param1 = "SD136";
  ds_combo_stateKind_search.set("sysCd", "CooperationCompanyEquipmentEBC");
  ds_combo_stateKind_search.set("queryId", "retrivecComboOneGrp");
  ds_combo_stateKind_search.set("param1", param1);
  var rs = await $c.sbm.execute($p, sbm_combo_stateKind);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_combo_stateKind.setJSON(rs.responseJSON.GAUCE);
  }
  ;
};

//-------------------------------------------------------------------------
// EDI 전송 버튼 처리 **
//-------------------------------------------------------------------------
scwin.f_ediSend = async function (allStsCd, curPosRow) {
  // await $c.gus.cfAlertMsg("EDI 전송.  아직 구현되지 않은 기능입니다.");
  // tr_SaveFreightCarApplyEdi

  // cfCopyDataSet(ds_RailroadWorkPlan, ds_RailroadWorkPlanEdiSend, "copyHeader=Yes");
  ds_RailroadWorkPlanEdiSend.removeAll();
  if (allStsCd == "ALL") {
    for (var i = 0; i < ds_RailroadWorkPlanEdiSend.getRowCount(); i++) {
      if ((ds_RailroadWorkPlanEdiSend.getCellData(i, "sndSts") == "0" || ds_RailroadWorkPlanEdiSend.getCellData(i, "sndSts") == "1") && (ds_RailroadWorkPlanEdiSend.getCellData(i, "sendMsg") == "전송" || ds_RailroadWorkPlanEdiSend.getCellData(i, "sendMsg") == "재전송")) {
        ds_RailroadWorkPlanEdiSend.setCellData(i, "efSum", "");
      }
      if (ds_RailroadWorkPlanEdiSend.getCellData(i, "sendMsg") == "전송") {
        ds_RailroadWorkPlanEdiSend.setCellData(i, "docClsCd", "9");
      }
      if (ds_RailroadWorkPlanEdiSend.getCellData(i, "sendMsg") == "재전송") {
        ds_RailroadWorkPlanEdiSend.setCellData(i, "docClsCd", "4");
      }
    }
  }
  if (allStsCd == "ONE") {
    if ((ds_RailroadWorkPlanEdiSend.getCellData(curPosRow, "sndSts") == "0" || ds_RailroadWorkPlanEdiSend.getCellData(curPosRow, "sndSts") == "1") && (ds_RailroadWorkPlanEdiSend.getCellData(curPosRow, "sendMsg") == "전송" || ds_RailroadWorkPlanEdiSend.getCellData(curPosRow, "sendMsg") == "재전송")) {
      ds_RailroadWorkPlanEdiSend.setCellData(curPosRow, "efSum", "");
    }
    if (ds_RailroadWorkPlanEdiSend.getCellData(curPosRow, "sendMsg") == "전송") {
      ds_RailroadWorkPlanEdiSend.setCellData(curPosRow, "docClsCd", "9");
    }
    if (ds_RailroadWorkPlanEdiSend.getCellData(curPosRow, "sendMsg") == "재전송") {
      ds_RailroadWorkPlanEdiSend.setCellData(curPosRow, "docClsCd", "4");
    }
  }

  //alert(ds_RailroadWorkPlanEdiSend.getCellData(curPosRow,"sndSts"));
  //alert(ds_RailroadWorkPlanEdiSend.getValue());
  if (await $c.win.confirm($p, "EDI 전송을 하시겠습니까?")) {
    //alert(ds_RailroadWorkPlanEdiSend.ExportData(1, ds_RailroadWorkPlanEdiSend.getRowCount(), true))
    $c.sbm.execute($p, sbm_SaveFreightCarApplyEdi);
  }
};

//-------------------------------------------------------------------------
// 내부계산 처리 **
//-------------------------------------------------------------------------
scwin.f_internalCal = async function (row, colid, olddata) {
  if (colid == "wrkPlanCnt20Empty" || colid == "wrkPlanCnt20Full" || colid == "wrkPlanCnt40Empty" || colid == "wrkPlanCnt40Full" || colid == "wrkPlanCnt45Empty" || colid == "wrkPlanCnt45Full") {
    scwin.f_sumCal(row);
    if (ds_RailroadWorkPlan.getCellData(row, "xclsYn") == 1) {
      scwin.f_internalCal2(row, colid, olddata);
    }
  }
};
scwin.f_sumCal = function (row) {
  var t_wrkPlanCnt20Empty = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt20Empty")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt20Empty"));
  var t_wrkPlanCnt20Full = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt20Full")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt20Full"));
  var t_wrkPlanCnt40Empty = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt40Empty")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt40Empty"));
  var t_wrkPlanCnt40Full = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt40Full")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt40Full"));
  var t_wrkPlanCnt45Empty = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt45Empty")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt45Empty"));
  var t_wrkPlanCnt45Full = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt45Full")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(row, "wrkPlanCnt45Full"));
  ds_RailroadWorkPlan.setCellData(row, "efSum", t_wrkPlanCnt20Empty + t_wrkPlanCnt20Full + t_wrkPlanCnt40Empty + t_wrkPlanCnt40Full + t_wrkPlanCnt45Empty + t_wrkPlanCnt45Full);
  ds_RailroadWorkPlan.setCellData(row, "teuSum", t_wrkPlanCnt20Empty + t_wrkPlanCnt20Full + (t_wrkPlanCnt40Empty + t_wrkPlanCnt40Full + t_wrkPlanCnt45Empty + t_wrkPlanCnt45Full) * 2);
  ds_RailroadWorkPlan.setCellData(row, "frtcarAppVol", Math.round(parseInt(ds_RailroadWorkPlan.getCellData(row, "teuSum")) / 2));
  scwin.calcSubTotalRow(row);
};

//-------------------------------------------------------------------------
// 사유화차신청 버튼 처리 **
//-------------------------------------------------------------------------
scwin.f_railroadSer = function () {
  let src = "/ui/ds/op/wrkplan/railroadwrkplan/op_203_01_03b.xml";
  let menuNm = "사유화차신청등록";
  let menuId = "op_203_01_03b";
  var paramObj = {
    signDt: ica_signDtFrom.getValue(),
    dptStnCd: ed_begintrainWorkPlaceCd.getValue(),
    dptStnNm: ed_begintrainWorkPlaceNm.getValue()
  };
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};

//-------------------------------------------------------------------------
// 오더물량조회 버튼 처리 ** 화면에서 제외되는 버튼 20260227 ** 
//-------------------------------------------------------------------------
scwin.f_orderRoadSer = async function () {
  scwin.order_chk = "Y";
  if (!(await $c.gus.cfValidate($p, [ica_signDtFrom, ed_begintrainWorkPlaceCd]))) {
    // 신청일자, 출발역
    return;
  }
  if (ed_begintrainWorkPlaceCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출발역"]);
    ed_begintrainWorkPlaceCd.focus();
    return;
  }
  /*
      var GAUCE_DATASET_HEADER = "reqDt:STRING(8)"              
                                  + ",dptStn:STRING(6)"     
                                  + ",arvStn:STRING(6)";
      ds_QueryCondition.SetDataHeader(GAUCE_DATASET_HEADER);	
      ds_QueryCondition.ClearData();
      ds_QueryCondition.AddRow();
      ds_QueryCondition.get("reqDt") = ed_signDt.getValue().trim();   // 신청일자
      ds_QueryCondition.get("dptStn")   = ed_begintrainWorkPlaceCd.getValue().trim();     // 출발역
      ds_QueryCondition.get("arvStn")   = ed_endtrainWorkPlaceCd.getValue().trim();        // 도착역
      tr_RetrieveOrderVolume.Post();   
  */
  scwin.f_openCommonPopUp(4, ed_begintrainWorkPlaceNm.getValue(), ed_endtrainWorkPlaceNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 철송작업계획에 대한 실적을 월별로 조회한다. 
//-------------------------------------------------------------------------
scwin.f_railRsltStat = async function () {
  if (ed_begintrainWorkPlaceCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출발역"]);
    ed_begintrainWorkPlaceCd.focus();
    return;
  }
  let win_url = "/ui/ds/op/wrkplan/railroadwrkplan/op_203_01_02p.xml";
  let data = {
    "begintrainWorkPlaceCd": ed_begintrainWorkPlaceCd.getValue(),
    "begintrainWorkPlaceNm": ed_begintrainWorkPlaceNm.getValue()
  };
  let opts = {
    id: "railRsltStat",
    popupName: "철송작업계획 실적통계",
    modal: false,
    type: "browserPopup",
    width: 820,
    height: 830,
    title: "철송작업계획 실적통계"
  };
  $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// 오더물량조회에 대한 값 리턴한다. 	  
//-------------------------------------------------------------------------
scwin.f_OderReturnValue = function (rtnList) {
  var rowIndex = ds_RailroadWorkPlan.insertRow();
  ds_RailroadWorkPlan.setRowPosition(rowIndex);
  var total_cnt = rtnList.length;
  for (var i = 0; i < total_cnt; i++) {
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "dptStnWrkPlCd", rtnList[i][0]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlCd", rtnList[i][1]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlNm", rtnList[i][2]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt20Empty", rtnList[i][3]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt20Full", rtnList[i][4]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt40Empty", rtnList[i][5]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt40Full", rtnList[i][6]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt45Empty", rtnList[i][7]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt45Full", rtnList[i][8]);
    if (scwin.edisndYn == "1") {
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "sendmsg", "전송");
    }

    // ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "sendMsg", rtnList[i][9]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "sndSts", ""); //rtnList[i][10];		  
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "railroadCargoClsCd", rtnList[i][11]);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "modifyFlag", "N");
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "regNm", scwin.sUserNm);
    ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "reqDt", ica_signDtFrom.getValue());
    scwin.f_internalCal(ds_RailroadWorkPlan.getRowPosition(), "wrkPlanCnt20Empty", "");
    if (i != total_cnt - 1) {
      var rowIndex = ds_RailroadWorkPlan.insertRow();
      ds_RailroadWorkPlan.setRowPosition(rowIndex);
    }
    scwin.order_chk = "";
  }
};
scwin.f_internalCal2 = async function (row, colid, olddata) {
  if (colid == "wrkPlanCnt20Empty" || colid == "wrkPlanCnt20Full" || colid == "wrkPlanCnt40Empty" || colid == "wrkPlanCnt40Full" || colid == "wrkPlanCnt45Empty" || colid == "wrkPlanCnt45Full") {
    if (ds_RailroadWorkPlan.getCellData(row, "dayCapaTeu") != 0 && ds_RailroadWorkPlan.getCellData(row, "teuSum") > ds_RailroadWorkPlan.getCellData(row, "dayCapaTeu")) {
      await $c.gus.cfAlertMsg($p, "당일 최대 전용화차 신청량이 초과되었습니다.");
      ds_RailroadWorkPlan.setCellData(row, colid, olddata);
      scwin.f_sumCal(row);
      return;
    }
  }
  var rowCount = ds_RailroadWorkPlan.getRowCount();
  var sumTeu = 0;
  for (var i = 0; i < rowCount; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;
    if (ds_RailroadWorkPlan.getCellData(i, "xclsYn") == 1) {
      if (ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlCd") == ds_RailroadWorkPlan.getCellData(i, "arvStnWrkPlCd") && ds_RailroadWorkPlan.getCellData(row, "reqDt") == ds_RailroadWorkPlan.getCellData(i, "reqDt")) {
        var teuSum = $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "teuSum")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "teuSum"));
        sumTeu = parseInt(sumTeu) + teuSum;
      }
      if (ds_RailroadWorkPlan.getCellData(row, "dayCapaTeu") != 0 && parseInt(sumTeu) > parseInt(ds_RailroadWorkPlan.getCellData(row, "dayCapaTeu"))) {
        await $c.gus.cfAlertMsg($p, "당일 최대 전용화차 신청량이 초과되었습니다.");
        scwin.errMsgYN = false;
        //ds_RailroadWorkPlan.getCellData(row,colid) = olddata; 
        //scwin.f_sumCal(row);
        return;
      }
    }
    scwin.errMsgYN = true;
  }
};
scwin.udc_begintrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_begintrainWorkPlaceNm, ed_begintrainWorkPlaceCd, 1, false);
};
scwin.udc_begintrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_begintrainWorkPlaceCd.getValue(), ed_begintrainWorkPlaceNm.getValue(), 'F', 'T');
};
scwin.udc_begintrainWorkPlace_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_begintrainWorkPlaceCd, ed_begintrainWorkPlaceNm, 1, true);
};
scwin.udc_endtrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_endtrainWorkPlaceNm, ed_endtrainWorkPlaceCd, 2, false);
};
scwin.udc_endtrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_endtrainWorkPlaceCd.getValue(), ed_endtrainWorkPlaceNm.getValue(), 'F', 'T');
};
scwin.udc_endtrainWorkPlace_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_endtrainWorkPlaceCd, ed_endtrainWorkPlaceNm, 2, true);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};
scwin.btn_railRsltStat_onclick = function (e) {
  scwin.f_railRsltStat();
};
scwin.btn_orderRoadSer_onclick = function (e) {
  scwin.f_orderRoadSer();
};
scwin.btn_insertGridAddrow_onclick = function (e) {
  scwin.f_insertGridAddrow();
};
scwin.btn_ediSend_onclick = function (e) {
  scwin.f_ediSend('ALL', 1);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_saveRailroadWorkInvoice_onclick = function (e) {
  scwin.f_SaveRailroadWorkInvoice();
};
scwin.sbm_RetrieveRailroadWorkPlan_submit = function (e) {};
scwin.sbm_RetrieveRailroadWorkPlan_submitdone = async function (e) {
  scwin.rowAddText = true;
  await scwin.ds_RailroadWorkPlan_onLoadComplete();

  //ds_RailroadWorkPlan.getCellData(i,"arvReqDt")

  var rowCnt = ds_RailroadWorkPlan.getRowCount();
  for (var i = 0; i < rowCnt; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;
    if (ds_RailroadWorkPlan.getCellData(i, "arvReqDt") == "" || ds_RailroadWorkPlan.getCellData(i, "arvReqDt") == null) {
      ds_RailroadWorkPlan.setCellData(i, "arvReqDt", scwin.fromDay);
    }
    // sndSts 코드명으로 오는 값을 코드로 변환하여 세팅
    // var sndSts = ds_RailroadWorkPlan.getCellData(i, "sndSts");
    // var idxArr = ds_combo_stateKind.getMatchedIndex("name", sndSts);
    // if (idxArr.length > 0){
    //     ds_RailroadWorkPlan.setCellData(i, "sndSts", ds_combo_stateKind.getCellData(idxArr[0], "code"));
    //     ds_RailroadWorkPlan.setCellData(i, "sndStsNm", ds_combo_stateKind.getCellData(idxArr[0], "name"));
    // }
  }
  if (ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(), "rcvDocClsCd") == "C") {
    txt_RailInvoice.show("");
  } else {
    txt_RailInvoice.hide("");
  }
};
scwin.sbm_RetrieveRailroadWorkPlan_submiterror = function (e) {};
scwin.sbm_RetrieveDayCapaTeu_submit = function (e) {};
scwin.sbm_RetrieveDayCapaTeu_submitdone = function (e) {};
scwin.sbm_RetrieveDayCapaTeu_submiterror = function (e) {};
scwin.sbm_RetrieveOrderVolume_submit = function (e) {};
scwin.sbm_RetrieveOrderVolume_submitdone = function (e) {
  scwin.ds_RailroadWorkPlan_onLoadComplete();
};
scwin.sbm_RetrieveOrderVolume_submiterror = function (e) {};
scwin.sbm_RetrieveRailroadReply_submit = function (e) {};
scwin.sbm_RetrieveRailroadReply_submitdone = function (e) {};
scwin.sbm_RetrieveRailroadReply_submiterror = function (e) {};
scwin.sbm_SaveRailroadWorkPlan_submit = function (e) {};
scwin.sbm_SaveRailroadWorkPlan_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_SaveRailroadWorkPlan_submiterror = function (e) {};
scwin.sbm_SaveFreightCarApplyEdi_submit = function (e) {};
scwin.sbm_SaveFreightCarApplyEdi_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_SaveFreightCarApplyEdi_submiterror = function (e) {};
scwin.sbm_SaveRailroadWorkInvoice_submit = function (e) {};
scwin.sbm_SaveRailroadWorkInvoice_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_SaveRailroadWorkInvoice_submiterror = function (e) {};
scwin.ds_RailroadWorkPlan_onLoadComplete = async function () {
  // cfHideDSWaitMsg(gr_RailroadWorkPlan);
  // 행조회가 0건 이상으로 조회되어 행추가 되었다면 0, 행이 0건으로 행추가되었다면 1로 변경
  var rowCntFlag = 0;
  var rowCnt = ds_RailroadWorkPlan.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "[철송작업계획 정보] " + MSG_CM_ERR_003);
  } else {
    var options = {
      dataList: ds_RailroadWorkPlan,
      grid: gr_RailroadWorkPlan,
      subSumExpr: "reqDt",
      sum: ["wrkPlanCnt20Empty", "wrkPlanCnt20Full", "wrkPlanCnt40Empty", "wrkPlanCnt40Full", "wrkPlanCnt45Empty", "wrkPlanCnt45Full", "efSum", "teuSum", "frtcarAppVol", "frtcarAllocVol"],
      count: []
    };
    await scwin.subtotalAreaSet(options);
    await ds_RailroadWorkPlan.modifyAllStatus("R");
    rowCnt = ds_RailroadWorkPlan.getRowCount();
  }
  //rowCnt가 0일경우 자동으로 row생성
  if (rowCnt == 0) {
    rowCnt = 7;
    rowCntFlag = 1;
  }
  var signDtFrom = ica_signDtFrom.getValue();
  var signDtTo = ica_signDtTo.getValue();
  var temp = "";

  //검색된 행이 없을경우 검색조건의 From날짜를 셋팅한다.
  for (var i = 0; i < rowCnt; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;
    if (ds_RailroadWorkPlan.getCellData(i, "reqDt") == null || ds_RailroadWorkPlan.getCellData(i, "reqDt") == "") {
      temp = signDtFrom;
    } else {
      temp = ds_RailroadWorkPlan.getCellData(i, "reqDt");
    }
  }
  temp = parseInt(temp);
  scwin.insertCnt = 0;
  if (rowCntFlag == 0) {
    temp = temp + 1;
  }
  for (var i = temp; i <= signDtTo; i++) {
    i = String(i);
    if (await $c.date.isDate($p, i)) {
      scwin.f_inputGridAddrow();
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "reqDt", i);
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvReqDt", i);
    }
  }
  if (scwin.order_chk == "Y") {
    // ds_RailroadWorkPlan.UseUpdate = false;
    for (var i = 0; i < rowCnt; i++) {
      ds_RailroadWorkPlan.setCellData(i, "regNm", scwin.sUserNm);
    }
  }

  // cfShowTotalRows(totalRows, ds_RailroadWorkPlan.RealCount(1,ds_RailroadWorkPlan.getRowCount()));
  txt_totalRows.setValue(ds_RailroadWorkPlan.getRowCount() - scwin.subTotalCnt);
  $c.gus.cfDisableBtn($p, []);
};
scwin.gr_RailroadWorkPlan_oncellclick = async function (Row, columnIndex, Colid) {
  if (ds_RailroadWorkPlan.getCellData(Row, "targetSumRow") == "Y") {
    gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
    var rowCnt = ds_RailroadWorkPlan.getRowCount();
    for (var i = 0; i < rowCnt; i++) {
      // if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;
      if (i == Row) {
        if (ds_RailroadWorkPlan.getCellData(Row, "rcvDocClsCd") == "C") {
          txt_RailInvoice.show("");
        } else {
          txt_RailInvoice.hide("");
        }
      }
    }
    ds_RailroadReply.removeAll();
    return;
  }
  var return_value = ds_RailroadWorkPlan.getRowStatus(Row);
  var modifyFlag = ds_RailroadWorkPlan.getCellData(Row, "modifyFlag");
  if (return_value == "C" && Colid == "xclsYn") {
    // if(ds_RailroadWorkPlan.getCellData(Row, "xclsYn") == "0"){
    // 	ds_RailroadWorkPlan.setCellData(Row, "xclsYn", "1");
    // 	//f_internalCal2(Row,Colid,0);
    // }else if(ds_RailroadWorkPlan.getCellData(Row, "xclsYn") == "1"){
    // 	ds_RailroadWorkPlan.setCellData(Row, "xclsYn", "0");
    // 	//ds_RailroadWorkPlan.NameValue(row,"dayCapaTeu") = 0;
    // }
  }
  //수신받은 전자문서 기능코드가 '22' 이면, 수신받은 전문서 기능코드를 가져옴
  if (ds_RailroadWorkPlan.getCellData(Row, "docClsCd") != "22") {
    if (Colid == "arvStnWrkPlNm") {
      if (return_value == "R" || return_value == "D" || return_value == "U") {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlNm", true);
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlCd", true);
      } else {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlNm", false);
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlCd", false);
      }
      if ((return_value == "R" || return_value == "D") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y") {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlNm", true);
        gr_RailroadWorkPlan.setCellReadOnly(Row, "arvStnWrkPlCd", true);
      } else {}
    }
    if (Colid == "wrkPlanCnt20Empty" || Colid == "wrkPlanCnt20Full" || Colid == "wrkPlanCnt40Empty" || Colid == "wrkPlanCnt40Full" || Colid == "wrkPlanCnt45Empty" || Colid == "wrkPlanCnt45Full" || Colid == "reqDt") {
      if ((return_value == "R" || return_value == "D") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y" && ds_RailroadWorkPlan.getCellData(Row, "frtcarAllocVol") != 0) {
        gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
      } else {
        if (ds_RailroadWorkPlan.getCellData(Row, "frtcarAllocVol") == 0) {
          if (Colid == "reqDt" && return_value == "R") {
            gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
          } else {
            gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, false);
          }
        } else {
          gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
        }
      }
    }
    if (Colid == "railroadCargoClsCd") {
      if ((return_value == "R" || return_value == "D") && ds_RailroadWorkPlan.getCellData(Row, "modifyFlag") == "Y") {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "railroadCargoClsCd", true);
      } else {
        gr_RailroadWorkPlan.setCellReadOnly(Row, "railroadCargoClsCd", false);
      }
    }
    if (Colid == "sendMsg") {
      if (ds_RailroadWorkPlan.getCellData(Row, "frtcarAllocVol") == 0) {
        if ((ds_RailroadWorkPlan.getCellData(Row, "sndSts") == "0" || ds_RailroadWorkPlan.getCellData(Row, "sndSts") == "1") && (ds_RailroadWorkPlan.getCellData(Row, "sendMsg") == "전송" || ds_RailroadWorkPlan.getCellData(Row, "sendMsg") == "재전송")) {
          scwin.f_ediSend("ONE", Row);
        }
      }
    }
  } else {
    // gr_RailroadWorkPlan.ColumnProp(Colid, "Edit") = "None";		
    gr_RailroadWorkPlan.setCellReadOnly(Row, Colid, true);
  }
  var rowCnt = ds_RailroadWorkPlan.getRowCount();
  for (var i = 0; i < rowCnt; i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") continue;
    if (i == Row) {
      if (ds_RailroadWorkPlan.getCellData(Row, "rcvDocClsCd") == "C") {
        txt_RailInvoice.show("");
      } else {
        txt_RailInvoice.hide("");
      }
    }
  }
  // 오류정보 가져오기.   전송이 된것에 한해서 오류정보가 나온다?????
  if (scwin.oldRowValue != Row) {
    // var param_str="railroadReplyQueryCondition="+ds_RailroadWorkPlan.getCellData(Row,"transWrkIndictNo");   // 운송작업지시번호
    // tr_RetrieveRailroadReply.Action = "/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadReplyCMD.do?"+param_str;

    ds_RetrieveRailroadReply_search.set("railroadReplyQueryCondition", ds_RailroadWorkPlan.getCellData(Row, "transWrkIndictNo"));
    var rs = await $c.sbm.execute($p, sbm_RetrieveRailroadReply);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      // ds_RailroadReply" event="OnLoadCompleted(rowCnt)">
      // cfHideDSWaitMsg(gr_RailroadReply);
      var rowCnt = ds_RailroadReply.getRowCount();
      if (rowCnt == 0) {}
      txt_failTotalRows.setValue(rowCnt);
    }
  }
  scwin.oldRowValue = Row;
};
scwin.gr_RailroadWorkPlan_oneditend = async function (row, columnIndex, value) {
  scwin.pass = false;
  var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
  if (ds_RailroadWorkPlan.getCellData(row, colid) == value) {
    scwin.pass = true;
    return;
  }
  scwin.ooldData = ds_RailroadWorkPlan.getCellData(row, colid);
  scwin.textImageClick = false;
};
scwin.gr_RailroadWorkPlan_onafteredit = async function (row, columnIndex, value) {
  if (scwin.pass) {
    return;
  }
  $p.setTimeout(async function () {
    if (!scwin.textImageClick) {
      var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
      var oldData = scwin.ooldData;
      await scwin.f_internalCal(row, colid, oldData);
      if (colid == "arvStnWrkPlNm" || colid == "arvStnWrkPlCd") {
        // 도착역명칭이 삭제되어 있으면 도착역코드도 같이 삭제한다.
        if (ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlNm") == "") {
          ds_RailroadWorkPlan.setCellData(row, "arvStnWrkPlCd", "");
        }
        scwin.f_openCommonPopUp(3, ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlCd"), ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlNm"), 'T', 'T');
      } else if (colid == "wrkPlanCnt20Empty" || colid == "wrkPlanCnt20Full" || colid == "wrkPlanCnt40Empty" || colid == "wrkPlanCnt40Full" || colid == "wrkPlanCnt45Empty" || colid == "wrkPlanCnt45Full") {
        if (ds_RailroadWorkPlan.getCellData(row, colid) == 0) {
          ds_RailroadWorkPlan.setCellData(row, colid, 0);
        }
      }

      // if (ds_RailroadWorkPlan.getCellData(row,"modifyFlag")=="Y" )
      if (ds_RailroadWorkPlan.getCellData(row, "modifyFlag") == "Y" && ds_RailroadWorkPlan.getCellData(row, "frtcarAllocVol") != 0) {
        // gr_RailroadWorkPlan.ColumnProp("wrkPlanCnt20Empty","Edit")='None'; (수정:2006.05.06 중복제거)
        gr_RailroadWorkPlan.setCellReadOnly(row, "wrkPlanCnt20Empty", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "wrkPlanCnt40Empty", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "wrkPlanCnt45Empty", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "wrkPlanCnt20Full", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "wrkPlanCnt40Full", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "wrkPlanCnt45Full", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "frtcarAppVol", true);
        gr_RailroadWorkPlan.setCellReadOnly(row, "railroadCargoClsCd", true);
      }
    }
  }, 100);
};
scwin.gr_RailroadWorkPlan_ontextimageclick = function (row, columnIndex) {
  var colid = gr_RailroadWorkPlan.getColumnID(columnIndex);
  scwin.textImageClick = true;
  switch (colid) {
    case "arvStnWrkPlNm":
      // // 도착역명칭이 삭제되어 있으면 도착역코드도 같이 삭제한다.
      if (ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlNm") == "") {
        ds_RailroadWorkPlan.setCellData(row, "arvStnWrkPlCd", "");
      }
      scwin.f_openCommonPopUp(3, ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlCd"), ds_RailroadWorkPlan.getCellData(row, "arvStnWrkPlNm"), 'T', 'T');
      break;
    default:
      break;
  }
};
scwin.udc_begintrainWorkPlace_callBackFunc = function (ref) {
  //도착지코드          도착지명
  $c.gus.cfSetReturnValue($p, ref, ed_begintrainWorkPlaceCd, ed_begintrainWorkPlaceNm);
  if (ref != null) {
    scwin.edisndYn = ref[2];
  }
};
scwin.udc_endtrainWorkPlace_callBackFunc = function (ref) {
  //도착지코드          도착지명
  $c.gus.cfSetReturnValue($p, ref, ed_endtrainWorkPlaceCd, ed_endtrainWorkPlaceNm);
};
scwin.udc_gridCommonPop_callBackFunc1 = function (ref) {
  //도착지코드          도착지명
  if (ref != null) {
    if (ref[0] != "N/A") {
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlCd", ref[0]);
      ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.getRowPosition(), "arvStnWrkPlNm", ref[1]);
    }
  }
};
scwin.udc_gridCommonPop_callBackFunc2 = function (ref) {
  if (ref != null) {
    if (ref[0][0] != "N/A") {
      scwin.f_OderReturnValue(ref);
    } else {
      /*
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"cntrNo")="";
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"cntrTypCd")="";
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"cntrSizCd")="";
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"fullEmptyClsCd")="";
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"odrNo")="";
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"mchtNm")="";
          ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"sealNo")="";
      */
    }
  } else {
    /*
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"cntrNo")="";
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"cntrTypCd")="";
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"cntrSizCd")="";
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"fullEmptyClsCd")="";
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"odrNo")="";
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"mchtNm")="";
        ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.getRowPosition(),"sealNo")="";
    */
  }
};
scwin.subtotalAreaSet = async function (options) {
  scwin.subTotalCnt = 0;
  var sumCols = options.sum || [];
  var dsList = options.dataList || [];
  var grid = options.grid || [];
  // reqDt
  var subSumArr = options.subSumExpr.split(",");
  for (var i = 0; i < subSumArr.length; i++) {
    var addColumnName = "";
    var targetArr = subSumArr[i].split(":");
    if (targetArr.length == 1) {
      var moveTarget = targetArr[0];
      targetArr.push("1");
      targetArr[0] = "1";
      targetArr[1] = moveTarget;
    }
    // [1, reqDt]
    // targetSum1
    addColumnName = "targetSum" + targetArr[0];
    dsList.insertColumn(addColumnName);
  }
  // setTargetItem
  for (var i = 0; i < dsList.getRowCount(); i++) {
    var addColumnData = "";
    var sumTarget = "";
    for (var j = 0; j < subSumArr.length; j++) {
      // addColumnName
      var addColumnName = "";
      // [1, sortGroup]
      var targetArr = subSumArr[j].split(":");
      if (targetArr.length == 1) {
        var moveTarget = targetArr[0];
        targetArr.push("1");
        targetArr[0] = "1";
        targetArr[1] = moveTarget;
      }
      // targetSum1
      addColumnName = "targetSum" + targetArr[0];

      // addColumnData
      var cellData = dsList.getCellData(i, targetArr[1]);
      if (addColumnData == "") {
        addColumnData = addColumnData + cellData;
      } else if (addColumnData != "") {
        addColumnData = addColumnData + "||" + cellData;
      }
      dsList.setCellData(i, addColumnName, addColumnData);
    }
  }
  // 소계 구분 컬럼
  if (!dsList.getColumnID("targetSumRow")) {
    dsList.insertColumn("targetSumRow");
  }

  // 3
  var maxLevel = subSumArr.length;
  var addRow = -1;

  // 레벨별 sum 상태
  var addRowInsertCount = {};
  var addRowInsert = {};
  var levelSum = {};
  for (var l = 1; l <= maxLevel; l++) {
    addRowInsertCount[l] = 0;
    addRowInsert[l] = -1;
    levelSum[l] = {};
    sumCols.forEach(c => levelSum[l][c] = 0);
  }
  // 마지막 행에 행추가하려고 플래그 만듬
  var firstSrt = true;

  // 뒤에서부터 insert
  for (var i = dsList.getRowCount() - 1; i >= 0; i--) {
    for (var level = maxLevel; level >= 1; level--) {
      var addYn = false;
      var targetCol = "targetSum" + level;
      var currData = dsList.getCellData(i, targetCol);
      var prevData = dsList.getCellData(i - 1, targetCol);
      addSum(level, i);

      // 첫시작 마지막행에 행추가하기
      if (firstSrt) {
        addRowInsert[level] = dsList.insertRow(i + 1);
        addYn = true;
        scwin.subTotalCnt++;
        // 앞뒤 행의 값이 다름
      } else if (currData !== prevData) {
        // 행추가하기전 마지막 생성한 행에 누적 값 세팅
        writeSumRow(addRowInsert[level] + addRowInsertCount[level] - 1, level);
        // 행추가
        if (i != 0) {
          addRowInsert[level] = dsList.insertRow(i);
          addYn = true;
          scwin.subTotalCnt++;
        }
      }
      if (addYn) {
        // 합계행 여부, 합계행 색상입히기 
        dsList.setCellData(addRowInsert[level], "targetSumRow", "Y");
        grid.setRowBackgroundColor(addRowInsert[level], "#eff8ff");
        // 추가된 합계행의 기준이되는 값 넣기
        if (level == "2") {
          addRowInsertCount[2]++;
        } else if (level == "1") {
          dsList.setCellData(addRowInsert[level], "arvStnWrkPlNm", "소계");
          // dsList.setCellData(addRowInsert[level], "befMonQty", "0");
          addRowInsertCount[1]++;
          addRowInsertCount[2]++;
        }
        // 처음시작시 리셋하지않음
        if (!firstSrt) {
          resetSum(level);
        }
      }
    }
    firstSrt = false;
  }
  function addSum(level, rowIdx) {
    sumCols.forEach(c => {
      var val = parseFloat(dsList.getCellData(rowIdx, c)) || 0;
      levelSum[level][c] += val;
    });
  }
  function resetSum(level) {
    sumCols.forEach(c => levelSum[level][c] = 0);
  }
  function writeSumRow(rowIdx, level) {
    sumCols.forEach(c => {
      dsList.setCellData(rowIdx, c, levelSum[level][c]);
    });
    addRowInsertCount[level] = 0;
  }
};
scwin.calcSubTotalRow = function (row, delRow) {
  // 소계행 계산후 입력
  var minRow = 0;
  var maxRow = 0;
  var sumAble = false;
  for (var i = row; i >= 0; i--) {
    minRow = i;
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") {
      minRow = i + 1;
      break;
    }
  }
  for (var i = row; i < ds_RailroadWorkPlan.getRowCount(); i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "targetSumRow") == "Y") {
      maxRow = i;
      sumAble = true;
      break;
    }
  }
  if (sumAble) {
    var subTotalCnt20Empty = 0;
    var subTotalCnt20Full = 0;
    var subTotalCnt40Empty = 0;
    var subTotalCnt40Full = 0;
    var subTotalCnt45Empty = 0;
    var subTotalCnt45Full = 0;
    var subTotalEfSum = 0;
    var subTotalTeuSum = 0;
    var subTotalFrtcarAppVol = 0;
    for (var i = minRow; i < maxRow; i++) {
      if (delRow != i) {
        subTotalCnt20Empty += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt20Empty")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt20Empty"));
        subTotalCnt20Full += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt20Full")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt20Full"));
        subTotalCnt40Empty += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt40Empty")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt40Empty"));
        subTotalCnt40Full += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt40Full")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt40Full"));
        subTotalCnt45Empty += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt45Empty")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt45Empty"));
        subTotalCnt45Full += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt45Full")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "wrkPlanCnt45Full"));
        subTotalEfSum += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "efSum")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "efSum"));
        subTotalTeuSum += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "teuSum")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "teuSum"));
        subTotalFrtcarAppVol += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, "frtcarAppVol")) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, "frtcarAppVol"));
      }
    }
    ds_RailroadWorkPlan.setCellData(maxRow, "wrkPlanCnt20Empty", subTotalCnt20Empty);
    ds_RailroadWorkPlan.setCellData(maxRow, "wrkPlanCnt20Full", subTotalCnt20Full);
    ds_RailroadWorkPlan.setCellData(maxRow, "wrkPlanCnt40Empty", subTotalCnt40Empty);
    ds_RailroadWorkPlan.setCellData(maxRow, "wrkPlanCnt40Full", subTotalCnt40Full);
    ds_RailroadWorkPlan.setCellData(maxRow, "wrkPlanCnt45Empty", subTotalCnt45Empty);
    ds_RailroadWorkPlan.setCellData(maxRow, "wrkPlanCnt45Full", subTotalCnt45Full);
    ds_RailroadWorkPlan.setCellData(maxRow, "efSum", subTotalEfSum);
    ds_RailroadWorkPlan.setCellData(maxRow, "teuSum", subTotalTeuSum);
    ds_RailroadWorkPlan.setCellData(maxRow, "frtcarAppVol", subTotalFrtcarAppVol);
    ds_RailroadWorkPlan.modifyRowStatus(maxRow, "R");
  }
};
scwin.sumFooter = function (colId) {
  var columnVal = 0;
  for (var i = 0; i < ds_RailroadWorkPlan.getRowCount(); i++) {
    if (ds_RailroadWorkPlan.getRowStatus(i) != "D" && ds_RailroadWorkPlan.getCellData(i, "targetSumRow") != "Y") {
      columnVal += $c.gus.cfIsNull($p, ds_RailroadWorkPlan.getCellData(i, colId)) ? 0 : parseInt(ds_RailroadWorkPlan.getCellData(i, colId));
    }
  }
  return columnVal;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display: none;',id:'udc_gridCommonPop',codeId:'',nameId:''}},{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적재예정일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_signDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_signDtFrom',edToId:'ica_signDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'적재예정일',titleTo:'신청일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_begintrainWorkPlace',codeId:'ed_begintrainWorkPlaceCd',nameId:'ed_begintrainWorkPlaceNm','ev:onviewchangeNameEvent':'scwin.udc_begintrainWorkPlace_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_begintrainWorkPlace_onclickEvent','ev:onblurCodeEvent':'scwin.udc_begintrainWorkPlace_onblurCodeEvent',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'key',objTypeName:'data',mandatoryName:'true',allowCharCode:'a-zA-Z0-9',UpperFlag:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_endtrainWorkPlace',codeId:'ed_endtrainWorkPlaceCd',nameId:'ed_endtrainWorkPlaceNm',objTypeCode:'key',objTypeName:'data',maxlengthCode:'6',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_endtrainWorkPlace_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_endtrainWorkPlace_onclickEvent','ev:onblurCodeEvent':'scwin.udc_endtrainWorkPlace_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',UpperFlag:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'철송작업계획',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_railRsltStat',type:'button',class:'btn','ev:onclick':'scwin.btn_railRsltStat_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'철송실적통계'}]}]},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_orderRoadSer',type:'button',class:'btn','ev:onclick':'scwin.btn_orderRoadSer_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더물량조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_RailroadWorkPlan',style:'',autoFit:'allColumn',id:'gr_RailroadWorkPlan',visibleRowNum:'8',class:'wq_gvw','ev:onafteredit':'scwin.gr_RailroadWorkPlan_onafteredit','ev:ontextimageclick':'scwin.gr_RailroadWorkPlan_ontextimageclick',rowStatusVisible:'true',editModeEvent:'onclick','ev:oncellclick':'scwin.gr_RailroadWorkPlan_oncellclick','ev:oneditend':'scwin.gr_RailroadWorkPlan_oneditend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'적재예정일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column17',value:'도착역',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'전용구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'20E',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'20F',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'40E',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'40F',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'45E',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'45F',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'TEU',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'화차<br/>요청량',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'화차<br/>배분량',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'화물<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'담당자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'전송',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'상태<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column40',value:'전월<br/>실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'도착요청일자',class:'txt-red',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'문서상태',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column31',value:'일Capa',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'reqDt',displayMode:'label',textAlign:'left',dataType:'date',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'textImage',id:'arvStnWrkPlNm',displayMode:'label',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'xclsYn',displayMode:'label',readOnly:'true',trueValue:'1',falseValue:'0',valueType:'other'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlanCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlanCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlanCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlanCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlanCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlanCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'efSum',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'teuSum',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'frtcarAppVol',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'frtcarAllocVol',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'railroadCargoClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_workKind'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sendMsg',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',id:'sndSts',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_stateKind'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'befMonQty',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###.##[floor]'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'arvReqDt',displayMode:'label',textAlign:'left',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'docClsNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayCapaTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###[floor]'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'wrkPlanCnt20Empty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'wrkPlanCnt20Full\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'wrkPlanCnt40Empty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'wrkPlanCnt40Full\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'wrkPlanCnt45Empty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'wrkPlanCnt45Full\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'efSum\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column63',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'teuSum\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column60',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'frtcarAppVol\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column57',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',expression:'scwin.sumFooter(\'frtcarAllocVol\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_insertGridAddrow',type:'button',class:'btn','ev:onclick':'scwin.btn_insertGridAddrow_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삽입'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',btnRowAddObj:'btn_inputGridAddrow',rowAddFunction:'scwin.f_inputGridAddrow',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',gridID:'gr_RailroadWorkPlan',cancelFunction:'scwin.f_inputGridCancel',rowDelFunction:'scwin.f_inputGridDelRow'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_ediSend',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_ediSend_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄전송'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_save_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mgntNo',style:'',maxlength:'14',ref:'data:ds_RailroadWorkPlan.mgntNo',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'문서구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_docClsNm',style:'',readOnly:'true',ref:'data:ds_RailroadWorkPlan.docClsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송장 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_transLongNo',style:'',maxlength:'14',ref:'data:ds_RailroadWorkPlan.transLongNo'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_saveRailroadWorkInvoice',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_saveRailroadWorkInvoice_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_RailInvoice',label:'운송장 강제등록하였습니다. ',ref:'',style:'display: none;',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전월실적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_befMonQty',style:'',readOnly:'true',ref:'data:ds_RailroadWorkPlan.befMonQty'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태일시 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_sndDtm',style:'',readOnly:'true',maxlength:'14',ref:'data:ds_RailroadWorkPlan.sndDtm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배분일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_allocDtm',style:'',readOnly:'true',maxlength:'14',ref:'data:ds_RailroadWorkPlan.allocDtm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오류정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'group3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'60',visibleRowNumFix:'true',rowNumVisible:'true',checkAllType:'false',dataList:'data:ds_RailroadReply',style:'',rowNumHeaderValue:'번호',autoFit:'lastColumn',id:'gr_RailroadReply',visibleRowNum:'5',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column1',value:'문서구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'오류코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column15',value:'오류내역',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'docClsCdNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'errCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'errCont',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_failTotalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})