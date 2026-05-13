/*amd /ui/ds/op/chainportalgrouporder/op_900_10_01b.xml 58075 e7c78606c03c2628e76651044b627e0da0684cb1eee44779ba747b83e7209568 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderTargetTerminal',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'outTerminal',name:'반출터미널'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inTerminal',name:'반입터미널'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shippingCode',name:'선사'}},{T:1,N:'w2:column',A:{dataType:'text',id:'terminalShipVoyageNo',name:'반입모선항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrCnt',name:'수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{id:'srchDtCls',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtFr',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtTo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outTerminalCode',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerminalCode',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipping',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderTargetCntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'conNo',name:'컨테이너번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'conType',name:'규격'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'입항일시'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderTargetVehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'truckNo',name:'차량번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'driverMobileNo',name:'기사연락처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chassisType',name:'샤시'}},{T:1,N:'w2:column',A:{id:'driverName',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckCode',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderDispatchGroup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dispatchGroup',name:'배차그룹번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'outTerminal',name:'반출터미널'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inTerminal',name:'반입터미널'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntr20Cnt',name:'20수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntr40Cnt',name:'40수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclCnt',name:'차량수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'groupStatus',name:'상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bundleId',name:'오더묶음번호'}},{T:1,N:'w2:column',A:{id:'groupKey',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'srchCls',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtCls',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtFr',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outTerminalCode',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inTerminalCode',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chkGrpOdr',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNoCndt',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveGrpOdr'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'srchCls',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtCls',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtFr',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outTerminalCode',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inTerminalCode',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderTerminal',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'outTerminal',name:'반출터미널'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inTerminal',name:'반입터미널'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shippingCode',name:'선사'}},{T:1,N:'w2:column',A:{dataType:'text',id:'terminalShipVoyageNo',name:'반입모선항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrCnt',name:'수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{id:'srchDtCls',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtFr',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchDtTo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outTerminalCode',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerminalCode',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipping',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderCntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'conNo',name:'컨테이너번호',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'conType',name:'규격',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'입항일시',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name5',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name6',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name7',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name8',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'name9',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name10',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name11',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name12',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_groupOrderVehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'truckNo',name:'차량번호',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'driverMobileNo',name:'기사연락처',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'chassisType',name:'샤시',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'driverName',name:'name5',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name6',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'truckCode',name:'name7',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_createOrder'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'groupKey',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orderNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'groupStatus',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_UpdateStatus'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dispatchGroup',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'groupStatus',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'groupKey',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_filter'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'regDtFr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveCntr'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'srchCls',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtCls',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtFr',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outTerminalCode',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inTerminalCode',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'terminalShipVoyageNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shipping',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chkGrpOdr',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNoCndt',name:'name11',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_groupOrderTargetTerminal","key":"OUT_DS1"},{"id":"ds_groupOrderTargetCntr","key":"OUT_DS2"},{"id":"ds_groupOrderTargetVehcl","key":"OUT_DS3"},{"id":"ds_groupOrderDispatchGroup","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_groupOrderTargetTerminal","key":"OUT_DS1"},{"id":"ds_groupOrderTargetCntr","key":"OUT_DS2"},{"id":"ds_groupOrderTargetVehcl","key":"OUT_DS3"},{"id":"ds_groupOrderDispatchGroup","key":"OUT_DS4"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntr',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveCntr","key":"IN_DS1"},{"id":"ds_groupOrderTargetCntr","key":"OUT_DS2"}]',target:'data:json,{"id":"ds_groupOrderTargetCntr","key":"OUT_DS2"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveCntr_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVehcl',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveVehcl","key":"IN_DS1"},{"id":"ds_groupOrderTargetVehcl","key":"OUT_DS3"}]',target:'data:json,{"id":"ds_groupOrderTargetVehcl","key":"OUT_DS3"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveVehcl_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGroupOrderDispatchGroup',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveGroupOrder","key":"IN_DS1"},{"id":"ds_groupOrderDispatchGroup","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_groupOrderDispatchGroup","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveGroupOrderDispatchGroup_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.chainportalgrouporder.SaveGroupOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_groupOrderTerminal","key":"IN_DS1"},{"id":"ds_groupOrderCntr","key":"IN_DS2"},{"id":"ds_groupOrderVehcl","key":"IN_DS3"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_createOrder',action:'/ncall.ds.op.chainportalgrouporder.ChainPortalCreateOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_createOrder","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_createOrder_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_createBundle',action:'/ncall.ds.op.chainportalgrouporder.ChainPortalCreateBundleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_createOrder","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_createBundle_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_releaseBundle',action:'/ncall.ds.op.chainportalgrouporder.ChainPortalReleaseBundleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_createOrder","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_releaseBundle_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_filter',action:'/ncall.ds.op.chainportalgrouporder.GroupFilterCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_filter","key":"IN_DS1"},{"id":"ds_groupOrderDispatchGroup","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_groupOrderDispatchGroup","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_filter_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_UpdateStatus',action:'/ncall.ds.op.chainportalgrouporder.GroupOrderUpdateStatusCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_UpdateStatus","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_UpdateStatus_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOrder',action:'/ncall.ds.op.chainportalgrouporder.ChainPortalDeleteOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_UpdateStatus","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_deleteOrder_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/컨테이너 운송지시/그룹오더등록

scwin.currDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.firstDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.memJson = $c.data.getMemInfo($p);
scwin.checkDelete = false;
scwin.chkGrpOdr = 0;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  // 날짜 초기값
  em_srchDtFr.setValue(scwin.currDate);
  em_srchDtTo.setValue(scwin.currDate);
  em_regDtFr.setValue(scwin.currDate);
  em_regDtTo.setValue(scwin.currDate);
  $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (div_qryConKnd5.getStyle("display") != "none" && em_odrNo.getValue() == "") {
    // 3.오더번호일 때
    await $c.win.alert($p, "오더번호를 입력하세요");
    return;
  }
  ds_retrieve.set("srchCls", ""); // []:전체 , [C]:컨테이너 , [V]:차량
  ds_retrieve.set("srchDtCls", lc_srchDtCls.getValue());
  ds_retrieve.set("srchDtFr", em_srchDtFr.getValue());
  ds_retrieve.set("srchDtTo", em_srchDtTo.getValue());
  ds_retrieve.set("chkGrpOdr", chk_GrpOdr.getValue());
  ds_retrieve.set("odrNoCndt", em_odrNo.getValue());
  ds_groupOrderTargetTerminal.removeAll();
  ds_groupOrderTargetCntr.removeAll();
  ds_groupOrderTargetVehcl.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
//function name : f_RetrieveGroupOrderDispatchGroup
//function desc : 그룹오더조회
//-------------------------------------------------------------------------
scwin.f_RetrieveGroupOrderDispatchGroup = function () {
  ds_retrieveGrpOdr.setEmptyValue();
  // ds_retrieveGrpOdr.AddRow();

  ds_retrieveGroupOrder.set("srchCls", "G"); // []:전체 , [C]:컨테이너 , [V]:차량, [G]:그룹오더
  ds_retrieveGroupOrder.set("srchDtCls", lc_srchDtCls.getValue());
  ds_retrieveGroupOrder.set("srchDtFr", em_srchDtFr.getValue());
  ds_retrieveGroupOrder.set("srchDtTo", em_srchDtTo.getValue());

  // ds_groupOrder.clearData();
  $c.sbm.execute($p, sbm_retrieveGroupOrderDispatchGroup);
};

//-------------------------------------------------------------------------
//function name : f_save
//function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var terminalRow = ds_groupOrderTargetTerminal.getRowPosition(); // 환적물량 그리드 row
  // var cntrChkColIdx = ds_groupOrderTargetCntr.ColumnIndex("chk");
  var cntrChkRow = ds_groupOrderTargetCntr.getMatchedIndex("chk", "1"); // 배열 반환
  // var vehclChkColIdx = ds_groupOrderTargetVehcl.ColumnIndex("chk");
  var vehclChkRow = ds_groupOrderTargetVehcl.getMatchedIndex("chk", "1"); // 배열 반환
  var stsCnt = ds_groupOrderTargetCntr.getTotalRow();
  var cntrCnt = 0;
  var vehCnt = 0;
  if (cntrChkRow.length == 0) {
    await $c.gus.cfAlertMsg($p, '선택한 컨테이너가 없습니다.');
    return;
  }
  if (vehclChkRow.length == 0) {
    await $c.gus.cfAlertMsg($p, '선택한 차량이 없습니다.');
    return;
  }
  for (var i = 0; i < stsCnt; i++) {
    var chkYn = ds_groupOrderTargetCntr.getCellData(i, "chk");
    if (chkYn == "1") {
      cntrCnt++;
    }
  }
  stsCnt = ds_groupOrderTargetVehcl.getTotalRow();
  for (var i = 0; i < stsCnt; i++) {
    var chkYn = ds_groupOrderTargetVehcl.getCellData(i, "chk");
    if (chkYn == "1") {
      vehCnt++;
    }
  }

  // setSaveDataSetHeader(ds_groupOrderTargetTerminal    , ds_groupOrderTerminal);
  // setSaveDataSetHeader(ds_groupOrderTargetCntr        , ds_groupOrderCntr);
  // setSaveDataSetHeader(ds_groupOrderTargetVehcl       , ds_groupOrderVehcl);

  scwin.setSaveDataSetData(ds_groupOrderTargetTerminal, ds_groupOrderTerminal, null, null, terminalRow);
  scwin.setSaveDataSetData(ds_groupOrderTargetCntr, ds_groupOrderCntr, "chk", "1", null);
  scwin.setSaveDataSetData(ds_groupOrderTargetVehcl, ds_groupOrderVehcl, "chk", "1", null);
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
//function name : setSaveDataSetHeader
//function desc : 저장 데이터셋 헤더 구성
//-------------------------------------------------------------------------
scwin.setSaveDataSetHeader = function (ds_org, ds_tmp) {
  /*
  var GAUCE_DATASET_HEADER = "";
  
  var colCnt = ds_org.CountColumn;
  
  for(var i=1; i<=colCnt; i++) {
      
      var tmpColumnId = ds_org.ColumnID(i);
      var tmpColumnType = ds_org.ColumnType(i);
      var tmpColumnIdTypeStr = "";
      
      if(GAUCE_DATASET_HEADER != "") {
          GAUCE_DATASET_HEADER += ",";
      }
      
      switch(tmpColumnType) {
         case "1" : tmpColumnTypeStr = tmpColumnId + ":" + "String";     break;
         case "2" : tmpColumnTypeStr = tmpColumnId + ":" + "Integer";    break;
         case "3" : tmpColumnTypeStr = tmpColumnId + ":" + "Decimal";    break;
         case "4" : tmpColumnTypeStr = tmpColumnId + ":" + "Date";       break;
         case "5" : tmpColumnTypeStr = tmpColumnId + ":" + "URL";        break;
         default  : tmpColumnTypeStr = tmpColumnId + ":" + "String";     break;
      }
      
      GAUCE_DATASET_HEADER += tmpColumnTypeStr;
      
  }
  
  ds_tmp.SetDataHeader(GAUCE_DATASET_HEADER);
  ds_tmp.clearData(); 
  
  return;
  */
};

//-------------------------------------------------------------------------
//function name : setSaveDataSetData
//function desc : 저장 데이터셋 데이터 구성
//-------------------------------------------------------------------------
scwin.setSaveDataSetData = function (ds_org, ds_tmp, colId, compareValue, rowPos) {
  if (rowPos != null) {
    var rowData = ds_org.getRowData(rowPos);
    ds_tmp.removeAll();
    ds_tmp.setRowData(0, rowData);
  } else {
    var totRowCnt = ds_org.getTotalRow();
    var row = 0;
    for (var i = 0; i < totRowCnt; i++) {
      var tmpValue = ds_org.getCellData(i, colId);
      if (compareValue == tmpValue) {
        var rowData = ds_org.getRowData(i);
        ds_tmp.removeAll();
        ds_tmp.setRowData(row, rowData);
        row++;
      }
    }
  }
  return;
};

//-------------------------------------------------------------------------
// function name : f_orderCreate
// function desc : 송신테스트
// 오더생성 버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.f_orderCreate = async function () {
  var stsCnt = ds_groupOrderDispatchGroup.getTotalRow();
  var chkcnt = 0;
  var groupKey = "";
  for (var i = 0; i < stsCnt; i++) {
    var chkYn = ds_groupOrderDispatchGroup.getCellData(i, "chk");
    if (chkYn == "1") {
      groupKey = ds_groupOrderDispatchGroup.getCellData(i, "groupKey");
      chkcnt++;
    }
    if (chkcnt >= 2) {
      break;
    }
  }
  if (chkcnt >= 2) {
    await $c.win.alert($p, '단건만 오더 생성할 수 있습니다.');
    return;
  } else if (chkcnt == 0) {
    await $c.win.alert($p, '선택된 오더가 없습니다.');
    return;
  }
  ds_createOrder.setEmptyValue();
  ds_createOrder.set("groupKey", groupKey);
  ds_createOrder.set("groupStatus", "READY");
  await $c.sbm.execute($p, sbm_createOrder);
};

//-------------------------------------------------------------------------
// 그룹오더 그리드 버튼 제어 함수
//-------------------------------------------------------------------------
scwin.f_statusUpdateComm = async function () {
  var stsCnt = ds_groupOrderDispatchGroup.getTotalRow();
  var chkcnt = 0;
  var dispatchGroup = "";
  var groupKey = "";
  for (var i = 0; i < stsCnt; i++) {
    var chkYn = ds_groupOrderDispatchGroup.getCellData(i, "chk");
    if (chkYn == "1") {
      chkcnt++;
      dispatchGroup = ds_groupOrderDispatchGroup.getCellData(i, "dispatchGroup");
    }
    if (chkcnt >= 2) {
      break;
    }
  }
  if (chkcnt >= 2) {
    await $c.win.alert($p, '단건만 오더 변경 할 수 있습니다.');
    return false;
  } else if (chkcnt == 0) {
    await $c.win.alert($p, '선택된 오더가 없습니다.');
    return false;
  }
  ds_UpdateStatus.set("dispatchGroup", dispatchGroup);
};

// 시작, 중단
scwin.f_statusUpdate = async function (val) {
  if ((await scwin.f_statusUpdateComm()) == false) {
    return;
  } else {
    if (val == 1) {
      ds_UpdateStatus.set("groupStatus", "START");
      scwin.checkDelete = false;
    } else if (val == 2) {
      ds_UpdateStatus.set("groupStatus", "STOP");
      scwin.checkDelete = false;
    }
    $c.sbm.execute($p, sbm_UpdateStatus);
  }
};

// 취소
scwin.f_statusUpdateCancel = function () {
  if (scwin.f_statusUpdateComm() == false) {
    return;
  }
  ;
  ds_UpdateStatus.set("groupStatus", "CANCEL");
  scwin.checkDelete = false;
  $c.sbm.execute($p, sbm_UpdateStatus);
};

// 삭제
scwin.f_statusUpdateDel = function () {
  if (scwin.f_statusUpdateComm() == false) {
    return;
  }
  ;
  ds_UpdateStatus.set("groupStatus", "DELETE");
  scwin.checkDelete = true;
  $c.sbm.execute($p, sbm_UpdateStatus);
};

//-------------------------------------------------------------------------
// 삭제 버튼 이벤트
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  var stsCnt = ds_groupOrderDispatchGroup.getTotalRow();
  var chkcnt = 0;
  var groupKey = "";
  for (var i = 0; i < stsCnt; i++) {
    var chkYn = ds_groupOrderDispatchGroup.getCellData(i, "chk");
    if (chkYn == "1") {
      groupKey = ds_groupOrderDispatchGroup.getCellData(i, "groupKey");
      chkcnt++;
    }
    if (chkcnt >= 2) {
      break;
    }
  }
  if (chkcnt >= 2) {
    await $c.win.alert($p, '단건만 오더 삭제 할 수 있습니다.');
    return;
  } else if (chkcnt == 0) {
    await $c.win.alert($p, '선택된 오더가 없습니다.');
    return;
  }
  ds_UpdateStatus.set("groupKey", groupKey);
  $c.sbm.execute($p, sbm_deleteOrder);
};

//-------------------------------------------------------------------------
// 오더 묶음 버튼 클릭 이벤트 > 사용 X
//-------------------------------------------------------------------------
scwin.f_createBundle = function () {
  /*
  var stsCnt = ds_groupOrderDispatchGroup.getTotalRow(); 
  var chkYn = ds_groupOrderDispatchGroup.getCellData(i, "chk");
  var chkCnt = 1;
  var carryInTer = "";
  var carryOutTer = "";
  var carryTerArray = new Array();
  var groupStatus = "";
  	for(var i=1; i<=stsCnt; i++){
  var chkYn = ds_groupOrderDispatchGroup.nameValue(i, "chk");
  if(chkYn == "T"){
  ds_createOrder.addRow();
  ds_createOrder.nameValue(chkCnt, "dispatchGroup") = ds_groupOrderDispatchGroup.nameValue(i ,"dispatchGroup");
  			groupStatus = ds_groupOrderDispatchGroup.nameValue(i ,"groupStatus");
  			if (groupStatus != "CREATE" && groupStatus != "STOP"){
  alert('오더 상태가 CREATE상태나 STOP상태에서만 묶을 수 있습니다.');
  return;
  }
  			chkCnt++;
  }
  }
  if(chkCnt == 1){
  alert('묶으려는 오더가 없습니다.');
  return;
  }
  else if(chkCnt == 2){
  alert('두 개이상 묶을 수 있습니다.');
  return;
  }
  tr_createBundle.post();
  */
};

//-------------------------------------------------------------------------
// 묶음 해제 버튼 클릭 이벤트 > 사용 X
//-------------------------------------------------------------------------
scwin.f_releaseBundle = function () {
  /*
  var GAUCE_DATASET_HEADER3 = "bundleId:STRING"; 
  ds_createOrder.SetDataHeader(GAUCE_DATASET_HEADER3);
  var stsCnt = ds_groupOrderDispatchGroup.CountRow; 
  var bundleId = "";
  var temp = "";
  var chkcnt = 0;
  for(var i=1; i<=stsCnt; i++){
  var chkYn = ds_groupOrderDispatchGroup.nameValue(i, "chk");
  if(chkYn == "T"){
  temp = ds_groupOrderDispatchGroup.nameValue(i ,"bundleId");
  if(chkcnt>0 && bundleId != temp){
  alert('같은 bundleId만 해제할 수 있습니다.');
  return;
  }
  if(temp == ""){
  alert('묶이지 않은 오더입니다.');
  return;	
  }
  bundleId = temp;
  chkcnt++;
  }
  }
  ds_createOrder.addRow();
  ds_createOrder.nameValue(1, "bundleId") = bundleId;
  tr_releaseBundle.post();
  */
};

//-------------------------------------------------------------------------
// 그룹오더 그리드 조회
//-------------------------------------------------------------------------
scwin.f_Filter = function () {
  ds_filter.set("regDtFr", em_regDtFr.getValue());
  ds_filter.set("regDtTo", em_regDtTo.getValue());
  $c.sbm.execute($p, sbm_filter);
};
scwin.gridReload = function () {
  var orderStatus = ds_groupOrderDispatchGroup.getCellData(0, "groupStatus");
  var dispatchGroup = ds_groupOrderDispatchGroup.getCellData(0, "dispatchGroup");
  var groupKey = ds_groupOrderDispatchGroup.getCellData(0, "groupKey");
  var bundleId = ds_groupOrderDispatchGroup.getCellData(0, "bundleId");
  if (orderStatus == "READY" && dispatchGroup == "") {
    $c.gus.cfEnableBtnOnly($p, [but_Create, but_OrderDelete]);
    $c.gus.cfDisableBtnOnly($p, [but_Start, but_Stop, but_Cancle]);
    txt_sendText.setValue(groupKey);
  } else if ((orderStatus == "READY" || orderStatus == "CREATE") && dispatchGroup != null) {
    $c.gus.cfEnableBtnOnly($p, [but_Start, but_Delete]);
    $c.gus.cfDisableBtnOnly($p, [but_Create, but_Stop, but_Cancle]);
    txt_sendText.setValue(dispatchGroup);
  } else if (orderStatus == "START" && dispatchGroup != null) {
    $c.gus.cfEnableBtnOnly($p, [but_Stop]);
    $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Cancle, but_Delete, but_OrderDelete]);
    txt_sendText.setValue(dispatchGroup);
  } else if (orderStatus == "STOP" && dispatchGroup != null) {
    $c.gus.cfEnableBtnOnly($p, [but_Start, but_Cancle]);
    $c.gus.cfDisableBtnOnly($p, [but_Create, but_Stop, but_Delete, but_OrderDelete]);
    txt_sendText.setValue(dispatchGroup);
  } else if (orderStatus == "CANCLE" && dispatchGroup != null) {
    $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
  } else if (orderStatus == "DELETE" && dispatchGroup != null) {
    $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
  }
};

//-------------------------------------------------------------------------
// 차량관리 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_manageVehicle = async function () {
  var opts = {
    id: "smpPop",
    popupName: "그룹오더차량관리",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "Win pop" //Layer pop
    ,
    width: 600,
    height: 600
  };
  var returnValue = await $c.win.openPopup($p, "/ui/ds/op/chainportalgrouporder/op_900_10_01p.xml", opts);
};

// <!-----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S  
// ------------------------------------------------------------------------------>

scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // for=ds_groupOrderTargetTerminal event=OnLoadCompleted(rowCnt)
  totalRows1.setValue(ds_groupOrderTargetTerminal.getTotalRow()); //환적물량

  // for=ds_groupOrderTargetCntr event=OnLoadCompleted(rowCnt)
  totalRows2.setValue(ds_groupOrderTargetCntr.getTotalRow()); //환적컨테이너

  // for=ds_groupOrderTargetVehcl event=OnLoadCompleted(rowCnt)
  totalRows3.setValue(ds_groupOrderTargetVehcl.getTotalRow()); //전담차량

  // for=ds_groupOrderDispatchGroup event=OnLoadCompleted(rowCnt)
  totalRows5.setValue(ds_groupOrderDispatchGroup.getTotalRow()); //그룹오더

  scwin.gridReload();
  gr_groupOrderTargetTerminal.setFocusedCell(0, 0);
  ds_retrieveCntr.set("srchCls", "C"); // []:전체 , [C]:컨테이너 , [V]:차량, [G]:그룹오더
  ds_retrieveCntr.set("srchDtCls", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "srchDtCls"));
  ds_retrieveCntr.set("srchDtFr", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "srchDtFr"));
  ds_retrieveCntr.set("srchDtTo", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "srchDtTo"));
  ds_retrieveCntr.set("outTerminalCode", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "outTerminalCode"));
  ds_retrieveCntr.set("inTerminalCode", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "inTerminalCode"));
  ds_retrieveCntr.set("terminalShipVoyageNo", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "terminalShipVoyageNo"));
  ds_retrieveCntr.set("shipping", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "shippingCode"));
  ds_retrieveCntr.set("odrNo", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "odrNo"));
  ds_retrieveCntr.set("chkGrpOdr", ds_retrieve.get("chkGrpOdr"));
  ds_retrieveCntr.set("odrNoCndt", ds_retrieve.get("odrNoCndt"));
  ds_groupOrderTargetCntr.removeAll();
  $c.sbm.execute($p, sbm_retrieveCntr); //환적컨테이너 그리드 조회
};
scwin.sbm_retrieveCntr_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // for=ds_groupOrderTargetCntr event=OnLoadCompleted(rowCnt)
  totalRows2.setValue(ds_groupOrderTargetCntr.getTotalRow()); //환적컨테이너

  scwin.gridReload();
};

//그룹오더조회
scwin.sbm_filter_submitdone = function (e) {
  // for=ds_groupOrderDispatchGroup event=OnLoadCompleted(rowCnt)
  totalRows5.setValue(ds_groupOrderDispatchGroup.getTotalRow()); //그룹오더

  scwin.gridReload();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 저장하였습니다");
  scwin.f_Retrieve();
};
scwin.sbm_createBundle_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '오더 묶음 성공하였습니다.');
  scwin.f_Filter();
  var cr = ds_groupOrderDispatchGroup.getTotalRow();
  if (cr > 0) {
    for (var i = 0; i < cr; i++) {
      ds_groupOrderDispatchGroup.setCellData(i, "chk", "0");
    }
  }
};
scwin.sbm_releaseBundle_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '오더 해제 했습니다.');
  scwin.f_Filter();
  var cr = ds_groupOrderDispatchGroup.getTotalRow();
  if (cr > 0) {
    for (var i = 0; i < cr; i++) {
      ds_groupOrderDispatchGroup.setCellData(i, "chk", "0");
    }
  }
};
scwin.sbm_UpdateStatus_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Filter();
    return;
  }
  if (!scwin.checkDelete) {
    await $c.win.alert($p, '상태 변경 완료했습니다.');
  } else {
    await $c.win.alert($p, '그룹 오더 삭제 완료했습니다.');
  }
  scwin.f_Filter();
  var cr = ds_groupOrderDispatchGroup.getTotalRow();
  if (cr > 0) {
    for (var i = 0; i < cr; i++) {
      ds_groupOrderDispatchGroup.setCellData(i, "chk", "0");
    }
  }
};
scwin.sbm_createOrder_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '오더가 생성되었습니다.');
  scwin.f_Filter();
  var cr = ds_groupOrderDispatchGroup.getTotalRow();
  if (cr > 0) {
    for (var i = 0; i < cr; i++) {
      ds_groupOrderDispatchGroup.setCellData(i, "chk", "0");
    }
  }
};
scwin.sbm_deleteOrder_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, '삭제되었습니다.');
  scwin.f_Filter();
  var cr = ds_groupOrderDispatchGroup.getTotalRow();
  if (cr > 0) {
    for (var i = 0; i < cr; i++) {
      ds_groupOrderDispatchGroup.setCellData(i, "chk", "0");
    }
  }
};

//-------------------------------------------------------------------------
// combo값 선택
//-------------------------------------------------------------------------
scwin.lc_srchDtCls_onchange = function (info) {
  if (lc_srchDtCls.getValue() == "3") {
    //오더번호
    udc_srchDt.hide();
    div_qryConKnd5.show();
  } else {
    udc_srchDt.show();
    div_qryConKnd5.hide();
  }
  em_odrNo.setValue("");
};

//-------------------------------------------------------------------------
// 환적물량 그리드 셀 클릭
//-------------------------------------------------------------------------
scwin.gr_groupOrderTargetTerminal_oncellclick = function (rowIndex, columnIndex, columnId) {
  ds_retrieveCntr.set("srchCls", "C"); // []:전체 , [C]:컨테이너 , [V]:차량, [G]:그룹오더
  ds_retrieveCntr.set("srchDtCls", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "srchDtCls"));
  ds_retrieveCntr.set("srchDtFr", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "srchDtFr"));
  ds_retrieveCntr.set("srchDtTo", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "srchDtTo"));
  ds_retrieveCntr.set("outTerminalCode", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "outTerminalCode"));
  ds_retrieveCntr.set("inTerminalCode", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "inTerminalCode"));
  ds_retrieveCntr.set("terminalShipVoyageNo", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "terminalShipVoyageNo"));
  ds_retrieveCntr.set("shipping", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "shippingCode"));
  ds_retrieveCntr.set("odrNo", ds_groupOrderTargetTerminal.getCellData(ds_groupOrderTargetTerminal.getRowPosition(), "odrNo"));
  ds_retrieveCntr.set("chkGrpOdr", ds_retrieve.get("chkGrpOdr"));
  ds_groupOrderTargetCntr.removeAll();
  $c.sbm.execute($p, sbm_retrieveCntr);
};

//-------------------------------------------------------------------------
// 그룹오더 그리드 체크박스 셀 클릭
// ASIS: for=gr_groupOrderDispatchGroup event=OnCheckClick(Row,Colid,Check)
//-------------------------------------------------------------------------
scwin.gr_groupOrderDispatchGroup_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    var orderStatus = ds_groupOrderDispatchGroup.getCellData(rowIndex, "groupStatus");
    var dispatchGroup = ds_groupOrderDispatchGroup.getCellData(rowIndex, "dispatchGroup");
    var groupKey = ds_groupOrderDispatchGroup.getCellData(rowIndex, "groupKey");
    var bundleId = ds_groupOrderDispatchGroup.getCellData(rowIndex, "bundleId");

    //alert(orderStatus);
    if (orderStatus == "READY") {
      $c.gus.cfEnableBtnOnly($p, [but_Create, but_OrderDelete]);
      $c.gus.cfDisableBtnOnly($p, [but_Start, but_Stop, but_Cancle]);
      txt_sendText.setValue(groupKey);
    } else if (orderStatus == "CREATE" && dispatchGroup != null) {
      $c.gus.cfEnableBtnOnly($p, [but_Start, but_Delete]);
      $c.gus.cfDisableBtnOnly($p, [but_Create, but_Stop, but_Cancle, but_OrderDelete]);
      txt_sendText.setValue(dispatchGroup);
    } else if (orderStatus == "START" && dispatchGroup != null) {
      $c.gus.cfEnableBtnOnly($p, [but_Stop]);
      $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Cancle, but_Delete, but_OrderDelete]);
      txt_sendText.setValue(dispatchGroup);
    } else if (orderStatus == "STOP" && dispatchGroup != null) {
      $c.gus.cfEnableBtnOnly($p, [but_Start, but_Cancle]);
      $c.gus.cfDisableBtnOnly($p, [but_Create, but_Stop, but_Delete, but_OrderDelete]);
      txt_sendText.setValue(dispatchGroup);
    } else if (orderStatus == "CANCLE" && dispatchGroup != null) {
      $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
    } else if (orderStatus == "DELETE" && dispatchGroup != null) {
      $c.gus.cfDisableBtnOnly($p, [but_Create, but_Start, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
    } else {
      if (orderStatus != "COMPLETE") {
        $c.gus.cfEnableBtnOnly($p, [but_Start]);
        $c.gus.cfDisableBtnOnly($p, [but_Create, but_Stop, but_Cancle, but_Delete, but_OrderDelete]);
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더별 집계',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_GrpOdr',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchDtCls',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.lc_srchDtCls_onchange',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더확정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업예정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_srchDt',refEdDt:'',class:'req',edFromId:'em_srchDtFr',edToId:'em_srchDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleTo:'출발일자 종료일자',titleFrom:'출발일자 시작일자'}},{T:1,N:'xf:group',A:{style:'display: none;',id:'div_qryConKnd5',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'em_odrNo',class:'',maxlength:'13',allowChar:'A-Z0-9'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix col3'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'환적물량',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_groupOrderTargetTerminal',style:'',autoFit:'allColumn',id:'gr_groupOrderTargetTerminal',visibleRowNum:'10',class:'wq_gvw','ev:oncellclick':'scwin.gr_groupOrderTargetTerminal_oncellclick',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'반출터미널',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'반입터미널',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'선사',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'반입모선항차',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column12',value:'오더번호',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'outTerminal',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inTerminal',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shippingCode',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'terminalShipVoyageNo',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrCnt',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'환적컨테이너 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_groupOrderTargetCntr',id:'gr_groupOrderTargetCntr',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너번호',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'입항일시',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conNo',inputType:'text',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'conType',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전담차량',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_groupOrderTargetVehcl',id:'gr_groupOrderTargetVehcl',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'기사연락처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'샤시',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckNo',inputType:'text',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'driverMobileNo',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisType',inputType:'text',readOnly:'true',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'manageVehicle',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_manageVehicle',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'차량관리'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'그룹 오더',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'등록일자',class:'req'}},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'',refEdDt:'',edFromId:'em_regDtFr',edToId:'em_regDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'출발일자 시작일자',titleTo:'출발일자 종료일자'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_fieldClear',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_RetrieveGroupOrderDispatchGroup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_retrieve2',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_Filter',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_groupOrderDispatchGroup',style:'',autoFit:'allColumn',id:'gr_groupOrderDispatchGroup',visibleRowNum:'10',class:'wq_gvw','ev:oncellclick':'scwin.gr_groupOrderDispatchGroup_oncellclick',rowStatusVisible:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column1',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'column17',value:'배차그룹번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'그룹키',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'반출터미널',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'반입터미널',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'20수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'40수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'차량수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column7',value:'상태',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column19',value:'오더묶음번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispatchGroup',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispatchGroup2',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outTerminal',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inTerminal',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntr20Cnt',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntr40Cnt',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclCnt',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'groupStatus',inputType:'text',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bundleId',inputType:'text',readOnly:'true',hidden:'true',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows5',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'송수신',class:'bold'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_sendText',placeholder:'',class:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'but_Create',type:'button',class:'btn','ev:onclick':'scwin.f_orderCreate',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'but_Start',type:'button',class:'btn','ev:onclick':'scwin.f_statusUpdate(1)',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시작'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'but_Stop',type:'button',class:'btn','ev:onclick':'scwin.f_statusUpdate(2)',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중단'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelObj:'but_Cancle',btnDelObj:'but_Delete',cancelFunction:'scwin.f_statusUpdateCancel',cancelObjType:'ctrlBtn',delObjType:'ctrlBtn',delFunction:'scwin.f_statusUpdateDel',gridID:'gr_groupOrderDispatchGroup',EngYn:'N',btnCancelYn:'Y',btnDelYn:'Y',btnRowAddYn:'N',btnRowDelYn:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'but_OrderDelete',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_delete',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})